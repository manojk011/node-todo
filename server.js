"use strict";
var express     = require('express'),
    bodyParser  = require('body-parser'),
    fs          = require('fs'),
    app         = express(),
    path        = require('path'),
    http        = require('http')
    //cors        = require('cors')


// const jwt = require('express-jwt');
// const jwks = require('jwks-rsa');    

const passport  = require('passport');
const passportsetup = require('./config/passport-set-up')    
const port = process.env.PORT || 3000;

//var authenticate = require('./auth/authenticate')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



    

// app.use(function(req, res, next) {
//     console.log("inside cor enabler");
//     res.header("Access-Control-Allow-Origin", "*"); 
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();    
// });

// let jsonData = require('./src/app/iaas/create-vm/data/tshirtSize.json');
// let jsonData = require('./src/app/mockVM.json');
// // let jsonData = require('https://iaasapi-patient-okapi.kpsj001.us-west.mybluemix.net/iaas/t_size/vmware');

// console.log(jsonData);  

//The dist folder has our static resources (index.html, css, images)




// let authCheck = (req, res, next) => {
//     console.log("authcheck");
//     next();
// };

// app.use(authCheck);
// app.get('/auth', passport.authenticate('google', {
//          scope: ['profile']
//      }), (req, res) => {
//     if (err) {
//         console.log(err);
//         res.status(500).send(err)
//     }
    
// }  
// );







let middleware = function(req, res, next) {
    console.log("inside cor enabler");
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
    // let Tresult = validateToken(req.headers['token']);
    // Tresult.then((result) => {
    //   console.log(result.payload)
    // }).catch((err)=>{
    //   console.log(err)
    // })
    // if (authenticate.validateToken(req, res)){
    //     next();    
    // }else{
    //     passport.authenticate('google', {
    //         scope: ['profile']
    //     },function(err, user, info){
    //         res.send(user);
    //     })
    // }
    
};
// app.use(middleware)

// app.get('/test',passport.authenticate('google', {
//     scope: ['profile']
// }), (req, res) => {
//     console.log(req.header);
//     res.send("hey authenticated!");
// }  
// );

// app.get('/', (req, res) => {
//     console.log(req.query.code);
//     res.send("hey authenticated!");
// });


// passport.authenticate('google', {
//     scope: ['profile']
// }), 

//app.use(express.static(__dirname + '/dist'));
 

// app.get('*', passport.authenticate('google', {
//     scope: ['profile']
// })
// , async (req, res, next) => {
//     try{

//         if (req.query.hasOwnProperty('code')){
//             console.log("inside if");
//             //app.use(express.static(__dirname + '/dist'));
//             //validate
//             res.sendFile(path.join(express.static(__dirname + '/dist')),function(err) {    
//                 if (err) {
//                     console.log(err);
//                     res.status(500).send(err)
//                 }
//             })        
//         }else{
            
//             //validate code
//             console.log("inside else");
//             passport.authenticate('google', {
//                     scope: ['profile']
//             },function(err, user, info){
//                 res.send(user);
//             })
//         }
//     }catch(err){
//         console.log(err);
//     }    
// });

app.get('*', (req, res) => res.sendFile(path.join(__dirname),function(err) {
    if (err) {
        console.log(err);
        res.status(500).send(err)
    }
}  
));

// app.get('*', routes.index);
const server = http.createServer(app);
server.listen(port, () => console.log('Running on :'+ port))
