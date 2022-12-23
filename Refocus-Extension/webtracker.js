const WEBSITES_DISPLAYED = 10

document.addEventListener('DOMContentLoaded', function () {
    const bg = chrome.extension.getBackgroundPage()
    const totalTimes = {}
    bg.pages.forEach(function (hn) {
        let diff = bg.storedTime[hn]
        if (hn in bg.startTime) {
            diff += Date.now() - bg.startTime[hn]
        }
        totalTimes[hn] = diff
    })
    let topPages = [...bg.pages]
    topPages.sort(function (hn1, hn2) {
        return totalTimes[hn2] - totalTimes[hn1]
    })
    topPages.slice(0, WEBSITES_DISPLAYED).forEach(function (hn) {
        let diff = totalTimes[hn]
        let hrs = Math.floor(diff / 3.6e+6)
        let mins = Math.floor((diff % 3.6e+6) / 60000)
        const div = document.createElement('div')
        if (hrs > 0) {
            div.textContent = `${hn}: ${hrs}h ${mins}min`
        } else {
            let secs = Math.floor((diff % 60000) / 1000)
            div.textContent = `${hn}: ${mins}min ${secs}s`
        }
        div.textContent += ` (${bg.instances[hn]} instances)`
        document.body.appendChild(div)
        // stor every page in a list
        const li = document.createElement('li')
        li.textContent = hn
        document.getElementById('pages').appendChild(li)
        // display the top 10 websites
        if (hn in bg.favicon) {
            const img = document.createElement('img')
            img.src = bg.favicon[hn]
            document.getElementById('favicons').appendChild(img)
        }
        // if same website is visited multiple times, count it as a different instance
        if (hn in bg.instances && bg.instances[hn] > 1) {
            const li = document.createElement('li')
            li.textContent = hn
            document.getElementById('instances').appendChild(li)
        }
        // add timestamp at which page was visited and make it permanent
        let timestamp = document.createElement('div')
        timestamp.textContent = new Date(bg.startTime[hn]).toLocaleString()
        timestamp.className = 'timestamp'
        div.appendChild(timestamp)
        document.getElementById('websites').appendChild(div)

        // add a button to delete the page from the list
        const button = document.createElement('button')
        button.textContent = 'Delete'
        button.addEventListener('click', function () {
            bg.pages.splice(bg.pages.indexOf(hn), 1)
            bg.storedTime.delete(hn)
            bg.startTime.delete(hn)
            bg.instances.delete(hn)
            bg.favicon.delete(hn)
            div.remove()
            li.remove()
            img.remove()
            button.remove()
        })
        div.appendChild(button)

    })
}(), false)