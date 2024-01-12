//first we import mongoose
const mongoose = require ('mongoose');
//we creayte a db hodt
const dbhost = 'localhost:27017';
//then we also create a db name
const dbName = "Facebook_AuthenticationDB"
//we then connect to mongoose
mongoose.connect(`mongodb://${dbhost}/${dbName}`).then(() => {
console.log("CONNECTION TO DATABASE SUCCESSFUL");
})
.catch((error) => {
    console.log('SOMETHING WENT WRONG', error.message);
})
