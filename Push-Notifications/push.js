var push = require('web-push');

let vapidKeys = {
    publicKey: 'BIPipHRIvFdi-2zFffnCkBv8kyli0DWAIXvUPsoM_4MNoSxG-bD97qgBXz6IvEbmdymGKsMz3NGqq6fd7IQgIaw',
    privateKey: 'hxjaNPl1BtNla2uS_e7kFYyTRlwdvLVcLOypSUXxCDY'
}
push.setVapidDetails('mailto:pratik.lagaskar@mitaoe.ac.in', vapidKeys.publicKey, vapidKeys.privateKey)
let sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/d6KW3l8TkH4:APA91bEE_gslIS_mV-mZWnZIcwsTFV_Ocd4KWhvKNBz6Fjq9x6WyaPodhJGVEu57rSMtf6cTSC_PidzmKQv-Qc9AZxuKmoMpoQW1gP_4XvwlActKDCiErkNImHFgxsNBR_9FBVEfZD9H",
    expirationTime: null,
    keys: {
        p256dh: "BPX2yfQKPM84relyvtkkuaNIxsHvIH13h3SdnVYCxuCOv_s2MfatGq1v3f1hyAKJf1wsjobzq422eR7-pwzZdsU",
        auth: "amW61RNmxDk2YLGdlj84RQ"
    }
};
push.sendNotification(sub, 'test message')