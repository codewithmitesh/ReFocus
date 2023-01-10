//default constants
const DEFAULT_STUDYLENGTH = 3000
const DEFAULT_BREAKLENGTH = 600
// empty variables to be filled
var favicon = []
var pages = []
var startTime = {}
var storedTime = {}
var instances = {}
var idToUrl = {}

var studyLength = DEFAULT_STUDYLENGTH
var breakLength = DEFAULT_BREAKLENGTH
var studyTimer = new CountDownTimer(studyLength)
var breakTimer = new CountDownTimer(breakLength)

var audio = new Audio('audio/sound.mp3')



//CountDownTimer
function CountDownTimer(duration, granularity) {
    this.duration = duration;
    this.granularity = granularity || 1000;
    this.tickFtns = [];
    this.running = false;
}

CountDownTimer.prototype.start = function () {
    if (this.running) {
        return;
    }
    this.running = true;
    var start = Date.now(),
        that = this,
        diff, obj;

    (function timer() {
        diff = that.duration - (((Date.now() - start) / 1000) | 0);
        if (diff > 0) {
            setTimeout(timer, that.granularity);
        } else {
            diff = 0;
            that.running = false;
        }
        obj = CountDownTimer.parse(diff);
        that.tickFtns.forEach(function (ftn) {
            ftn.call(this, obj.minutes, obj.seconds);
        }, that);
    }());
};

CountDownTimer.prototype.onTick = function (ftn) {
    if (typeof ftn === 'function') {
        this.tickFtns.push(ftn);
    }
    return this;
};

CountDownTimer.prototype.expired = function () {
    return !this.running;
};

CountDownTimer.parse = function (seconds) {
    return {
        'minutes': (seconds / 60) | 0,
        'seconds': (seconds % 60) | 0
    };
};



//website monitor for specific website
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.url != undefined) {
        if (tabId in idToUrl) {
            closePage(idToUrl[tabId])
        }
        let hn = tab.url.split('/')[2]
        // filter out websites that do not have a meet.google.com domain
        if (hn.includes('meet.google.com')) {
            openPage(hn)
            idToUrl[tab.id] = hn
            // if url is a meet.google.com url, call a function to check url
            checkUrl(hn)

        } else {
            delete idToUrl[tab.id]
        }
    }
})



// generate random alphanumeric string of length 1
function randomMessage() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 4; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

// generate random message 
var options = {
    type: "basic",
    title: "Test Notification For SIH",
    message: "Code for attendance: " + randomMessage(),
    iconUrl: "clock.png"
};

// check url of current tab and execute a function accordingly
function checkUrl(url) {
    if (url.includes('meet.google.com')) {
        // if url is a meet.google.com url, call a alarm function to send push notification
        sendNotification(options)
        // if url is a meet.google.com url, call a function to play audio
        playAudio()

    }
}

// send push notification
function sendNotification(options) {
    chrome.notifications.create(options);
}

// reset webtracker function to reset meet.google.com url
function resetWebtracker() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        // time ka hold

        var tab = tabs[0];
        var url = tab.url;
        if (url.includes('meet.google.com')) {
            checkUrl(url)
        }
    })
}





/*
    // else if domain is not meet.google.com, do nothing
    else if (changeInfo.status == 'complete') {
        if (tabId in idToUrl) {
            if (!(tab.url.includes('meet.google.com'))) {
                chrome.tabs.executeScript(tabId, {
                    // do nothing
                })
            }
        }
    }
}
)
*/



// reset the time if user closes the tab
chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
    if (tabId in idToUrl) {
        closePage(idToUrl[tabId])
    }
})

// pop an alert if user changes meet.google.com tab
chrome.tabs.onActivated.addListener(function (activeInfo) {
    if (activeInfo.tabId in idToUrl) {
        let hn = idToUrl[activeInfo.tabId]
        closePage(idToUrl[activeInfo.tabId])
        delete idToUrl[activeInfo.tabId]
        // play audio
        audio.play()
        // show the alert message with the website name
        alert(`You have been Warned! If you change tabs, your time will be reset.\n${hn}`)
        // and remove the tab from the list

    }
})

/*
// if user is in a meet and changes window, reset the time and alert the user
chrome.windows.onFocusChanged.addListener(function (windowId) {
    if (windowId in idToUrl) {
        let hn = idToUrl[windowId]
        closePage(idToUrl[windowId])
        delete idToUrl[windowId]
        // play audio
        audio.play()
        // show the alert message with the website name
        alert(`You have been Warned! If you change tabs, your time will be reset.\n${hn}`)
        // and remove the tab from the list
    }
}
)



 
 
// if alt + tab is pressed, reset the time and play a sound
chrome.commands.onCommand.addListener(function (command) {
    if (command == 'toggle-feature') {
        for (let key in idToUrl) {
            closePage(idToUrl[key])
        }
        idToUrl = {}
        // play audio
        audio.play()
        // pop an alert
        alert('You have been Warned! Focus on the meet.')
    }
}
)
*/

// DEVLEOPMENT AREA FOR TESTING
/*
// call sendTotalTime function only after user is on meet.google.com url
function closePage(url) {
    if (url in startTime) {
        storedTime[url] += Date.now() - startTime[url]
        delete startTime[url]
    }
}
 
 
// oauth2 authentication
function authenticate() {
    chrome.identity.getAuthToken({ 'interactive': true }, function (token) {
        if (chrome.runtime.lastError) {
            console.log(chrome.runtime.lastError.message);
            return;
        }
        console.log(token);
    }
    );
}
 
 
 
// send meet total time to remote backend database column
function sendTotalTime() {
    // timer of meet.google.com
    var totalTime = 0
    // only send total time if there is a meet.google.com url
    if (Object.keys(idToUrl).length > 0) {
        for (var key in idToUrl) {
            totalTime += storedTime[idToUrl[key]]
        }
        // send total time to remote backend database column of mongodb
        $.ajax({
            url: "http://localhost:3000/api/v1/totaltime",
            type: "POST",
            data: {
                totaltime: totalTime
            },
            success: function (data) {
                console.log(data)
            }
        })
    }
}
 
 
// use axios to send the json data as a POST request using ajax
function sendDataRemote() {
 
}
 
*/
/**
 * Extreme Focus Mode :- Changing every time whenver we are user is changing any tab
 */
// if chrome window is minimized, reset the time and play a sound
// chrome.windows.onFocusChanged.addListener(function (windowId) {
//     if (windowId == chrome.windows.WINDOW_ID_NONE) {
//         for (let key in idToUrl) {
//             closePage(idToUrl[key])
//         }
//         idToUrl = {}
//         // play audio
//         audio.play()
//         // pop an alert
//         alert('You have been Warned! Focus on the meet.')
//     }
// })



function openPage(url) {
    if (!(pages.includes(url))) {
        favicon.push(`www.google.com/s2/favicons?domain=${url}`)
        if (url != 'newtab') {
            pages.push(url)
        }
        storedTime[url] = 0
        instances[url] = 0
        console.log(favicon)
    }
    if (!(url in startTime)) {
        startTime[url] = Date.now()
    }
    instances[url] += 1
}

function closePage(url) {
    if (!(url in instances) || (instances[url] == 0)) {
        return
    }
    if (instances[url] == 1) {
        storedTime[url] += Date.now() - startTime[url]
        delete startTime[url]
    }
    instances[url] -= 1
}

function removeHistory() {
    for (websites in pages) {
        pages.pop()
    }
}

//study timer of Pomodoro
studyTimer.onTick(function () {
    if (this.expired()) {
        // play audio
        audio.play()
        alert('Take a study break!')
        breakTimer.start()
    }
})

breakTimer.onTick(function () {
    if (this.expired()) {
        // play audio
        audio.play()
        alert('Break time is up!')
        studyTimer.start()
    }
})



studyTimer.start()


// // update var meetdata after value is changed when meet.google.com url is opened
// chrome.storage.onChanged.addListener(function (changes, namespace) {
//     for (key in changes) {
//         var storageChange = changes[key];
//         meetdata[key] = storageChange.newValue
//     }
// })

/**
 * Fetching the Data Backend 
 */
// function SendFinalData() {
//     // event.preventDefault();
//     // document.getElementById('message').innerHTML = "checking";
//     // First get the data stored in local storage
//     const url = "http://localhost:8000/meet/senddata";

//     //data to be sent as json or any other type by fetch request
//     const TempData = {
//         // "email": document.getElementById('email').value,
//         // 'password': document.getElementById('new_password').value
//         "meet_id": "mitesh",
//         "attendence_code": "dsnkds5",
//         "active_time": "4756",
//         "pop_up1": "true",
//         "pop_up2": "false",
//         "pop_up3": "true",
//     };
//     // others detailes to send through the post request
//     const other_params = {
//         headers: {
//             "content-type": "application/json; charset=UTF-8"
//         },
//         body: TempData,
//         method: "POST",
//         mode: "cors"
//     };
//     //fetching the url to send the the final data to the server
//     fetch(url, other_params)
//         .then(function (response) {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error("Could not reach the API: " + response.statusText);
//             }
//         }).then(function (TempData) {
//             console.log(TempData);
//             // document.getElementById("message").innerHTML = data.encoded;
//             console.log("Fetching successful now get the data")
//         }).catch(function (error) {
//             // document.getElementById("message").innerHTML = error.message;
//             console.log(error.message);
//         });
//     return true;
// }
// function to fetch data from chrome storage and send it as a POST request to the server using fetch
// function fetchData() {
//     chrome.storage.sync.get(['pages', 'storedTime', 'startTime', 'instances', 'meetId', 'code', 'popup1', 'popup2'], function (items) {
//         var meetdata = {
//             "pages": items.pages,
//             "storedTime": items.storedTime,
//             "startTime": items.startTime,
//             "instances": items.instances,
//             "meetId": items.meetId,
//             "code": items.code,
//             "popup1": items.popup1,
//             "popup2": items.popup2
//         }
//         fetch('http://localhost:8000/meet/senddata', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(meetdata)
//             })
//             .then(res => res.json())
//             .then(res => {
//                 console.log(res)
//             })
//     })
// }

// setInterval(fetchData, 3000);

/**
 * Fetching the Request 
 * 
 */

// const Tempdata = {
//     "meet_id": "mitesh",
//     "attendence_code": "dsnkds5",
//     "active_time": "4756",
//     "pop_up1": "true",
//     "pop_up2": "false",
//     "pop_up3": "true",
// }

/**
 *  @descrtiption :- Local Storage 
 * 
 */

// define meetId, code, popup1 and popup2
var meetId = 'newTestMeet'
var attendence_code = 'Mitesh Tank'
var popup_1 = 'true'
var popup_2 = 'false'

// create myObject which will be used to store the data in chrome storage
var meetdata = {
    "storedTime": storedTime,
    "startTime": startTime,
    "instances": instances,
    "meet_id": meetId,
    "attendence_code": attendence_code,
    "popup_1": popup_1,
    "popup_2": popup_2
}

// function to save data in chrome storage  called meetdata
function saveData() {
    chrome.storage.sync.set(meetdata, function () {
        console.log('Data saved')
    })
}

// set meetdata in local storage using setItem
localStorage.setItem('meetdata', JSON.stringify(meetdata))

/**
 * Adding Trigger to Submit button to fetch all data form local storage and send it to Server 
 */
// Getting the code form input and storing it in local storage
// let attendence_code_input = submitData.value;
// console.log(attendence_code_input);
// attendence_code = attendence_code_input;
/**
 * As soon as user click on submit button the whole 
 */
const Tempdata = JSON.parse(localStorage.getItem('meetdata'));
async function postData(url, data) {
    // Default options are marked with *
    try {
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
            // body: JSON.parse(data) // body data type must match "Content-Type" header
        });
        return response.json();
    } catch (err) { console.log(err.message) }// parses JSON response into native JavaScript objects
}


postData('http://localhost:8000/meet/senddata',
    Tempdata
)
    .then((data) => {
        console.log(data.json()); // JSON data parsed by `data.json()` call
    }).catch((err) => {
        console.log(err.message); //
    });

