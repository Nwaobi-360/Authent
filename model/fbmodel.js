//first we iimport our mongoose dependency
const mongoose = require ('mongoose');
//now we create our schema
const FacebookSchema = new mongoose.Schema (
    {
        FirstName: {
            type: String,
            require: true,
        },
        Surname: {
            type: String,
            required: true,
        },
        NewPassword: {
            type: String,
            require : true,
        },
        DateOfBirth: {
            type: String,
            require: true,
        },
        Gender: {
            type: String,
            require: true,
        },
        Email: {
            type: String,
            require: true,
            unique: true,
        },
    },
    {timestamps: true}
)
//now we create a schema object
const RegisterModel = mongoose.model ('REGISTRATION', FacebookSchema)
//finally we export our model to the controller file
module.exports = RegisterModel;
