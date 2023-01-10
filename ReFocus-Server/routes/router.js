const express = require('express');
const route = express.Router()
const render = require('../services/render');
const services = require('../services/render');
const userController = require('../controller/userController');
const auth = require('../middleware/auth');
const meetController = require('../controller/meetController');
/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', render.homeRoutes);

// Authentication Routes

// /**
//  * @description Google Sign In Route
//  * @method GET /google
//  */
// route.get('/google', passport.authenticate('google', {
//     scope: ['profile', 'email']
// }));

// route.get('/google/callback', passport.authenticate('google', {
//         failureRedirect: '/failedAuth'
//     }),
//     function (req, res) {
//         // Successful authentication, redirect home.
//         res.redirect('/good');
//     }
// );
/**
 * 
 * @description if Authentication failed 
 * @method GET /failedAuth
 */
route.get('/failedAuth', (req, res) => res.send('You Failed to log in!'))
/**
 * @description if Authentication success
 * @method GET /good
 */
route.get('/good', (req, res) => {
    res.send(" Authenticated successfully ");
})

/**
 * @description User Login using email password
 * @method GET /user/login
 */
route.get('/user/login', services.loginRoute);

route.get('/user/register', services.registerRoute);

// route.post('/dashboard', auth, userController.userDashboard);
route.get('/dashboard', auth, userController.userDashboard);


// Creating API to call database
route.post('/user/register', userController.registerUser);
// route.post('/user/login', userController.loginUser);
route.post('/user/login', userController.loginUser);

/**
 * Logout Route :- 
 * 
 */

route.get('/logout', auth, userController.logoutUsers);

/**
 * @description Send Meetdata 
 * @method Post /user/data
 */
//add auth as middle ware
route.post('/meet/senddata', auth, meetController.sendMeetData);

/**
 * @description Get Meetdata
 * @method post/user/data
 */
route.post('/meet/getdata', auth, meetController.getMeetData);

module.exports = route;


















// 12-8 User profile page and
// Upload post and Route and Image upload routes
// Authorization and User profie data
// what post he has uploaded and images he has uploaded
// Deal with images upload image muktiple images stored in username folder with design name folder and inthat multiple design images 