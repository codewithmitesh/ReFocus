const moongose = require('mongoose');
const meetModel = require('../model/meetModel');
const pluralize = require('pluralize')

/**
 * description: Send Data According to Meets Unique Ids  
 */
exports.sendMeetData = async (req, res, next) => {
    // res.send("Meet Data Sent")
    try {
        //meet data is recived here
        const tempData = req.body;
        console.log(tempData);
        // req.header.jwt
        // decode payload 
        // email user search
        // ye user naame PRN ROLL 
        // destructureing req.body
        const {
            meet_id,
            attendence_code,
            active_time,
            popup_1,
            popup_2,
            popup_3
        } = req.body

        console.log(req.user);
        console.log(meet_id, attendence_code, active_time, popup_1, popup_2, popup_3, req.user.email);
        //calling function to create model or get model
        const Meet = await meetModel.getModel(meet_id);
        // console.log(Meet);
        const insertMeetData = new Meet({
            meet_id,
            attendence_code,
            email: req.user.email,
            active_time,
            popup_1,
            popup_2,
            popup_3
        });
        console.log(insertMeetData);
        await insertMeetData.save();
        console.log("data inserted in table ");
        res.send("data inserted in table successfully");

    } catch (err) {
        res.status(404).json({
            err: err.message,
            msg: "failed to send data"
        });
    }
}
/**
 *  description: Get data by giving the meet unique Id 
 */
exports.getMeetData = async (req, res) => {
    try {
        const collName = req.body.meet;
        console.log(collName);
        console.log(typeof collName)
        // Plurizer
        const tableName = pluralize.plural(collName);
        // TO Do :- chang name to collName again
        console.log(tableName);
        const collection = moongose.connection.db.collection(tableName);
        console.log(collection);

        collection.find().toArray(function (err, data) {
            // it will print your collection data
            console.log(data);
            res.send(data);
        });
    } catch (err) {
        res.status(404).json({
            err,
            msg: "failed to get data"
        });
    }
}
/**
 * 
 * MEet se pop wala hatana hai
 * Wo User data 
 * meet db mese leke ek key ko iterate karke 
 */
/**Problems :- Ye lecture ka nahi diya , diya 
 * Attendece code is not working
 * Interacte code
 * Spread excel manually 
 * 
 */

/** Soham Idea:-
 * 
 */