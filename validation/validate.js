//we import hapijoi 
const hapijoivalidator = require ('@hapi/joi')

const validatesignUP = (data) => {
    const validateFacebook = hapijoivalidator.object ({
        FirstName: hapijoivalidator.string().min(6).max(20).required().message ("Please check your information, if your first name is empty or less than 6 characters"),
        Surname: hapijoivalidator.string().min(6).max(20).required().message ("Please check your information, if your surname is empty or less than 6 characters"),
        NewPassword: hapijoivalidator.string().min(6).max(20).required().message ("Password Required"),
        DateOfBirth: hapijoivalidator.date().iso().required().message ("Please this field is required"),
        Gender: hapijoivalidator.string().min(6).max(6).required().message ("Gender cannot be left empty"),
        Email: hapijoivalidator.string().Email({tlds: {allow: false}}).trim().min(9).required()("Please check your informationcannot be left empty")
    })
    return validateFacebook.validate(data);
}

const validateLOGIN = (data) => {
    try{
        const validateUser = hapijpivalidator.object ({
            Email: hapijoivalidator.string().Email({tlds: {allow: false}}).trim().min(9).required(),
            NewPassword: hapijoivalidator.string().min(6).max(20).required(),
        })
        return validateUser.validate(data);
    } catch (error) {
        message: error.message
    }
}; 
module.exports = {validatesignUP, validateLOGIN};

jj