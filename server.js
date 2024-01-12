//firstly we require our config file
require ('./config/fbConfig');
//next we import our express
const express = require ('express');
//now we create our port
const port = 6000; 
//then we create an express app
const app = express();
//now we make use of the express app
app.use (express.json());
//we now require our require file
const UserRouter = require ('./router/fbRouter');
//we thyen use the imported router file
app.use ('/api/v1', UserRouter)
//create our welcome message 
app.get ('/api/v1', (req, res) => {
    res.send ('WELCOME TO THE FACEBOOK REGISTRATION PLATFORM!!!!!!!')
})
//finally we listen to our port 
app.listen (port, () => {
    console.log (`SERVER IS NOW RUNNING ON PORT ${port}`)
});

