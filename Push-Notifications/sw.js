self.addEventListener('push', function (e) {
    var options = {
        body: 'Hello Sathyabama!!!',
        icon: 'images/SIT.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [{
                action: 'explore',
                title: 'Accept',
                // icon: 'images/checkmark.png'
            },
            {
                action: 'close',
                title: 'Close',
                // icon: 'images/xmark.png'
            },
        ]
    };
    e.waitUntil(
        self.registration.showNotification('Hello Sathyabana', options)
    );
});