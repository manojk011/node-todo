const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
    new GoogleStrategy({
    //options for google strat
    callbackURL: '/',
	clientID: '6390737051-ief44ais7tfpludf5t9q9kk6fqagrj24.apps.googleusercontent.com',
    clientSecret: '-nIjBMx1Cd0kzqBhwM6m80dq'		
}, (token) => {
        //passport callback function
        console.log(token)
        console.log("inside callback passport")
	}
))

