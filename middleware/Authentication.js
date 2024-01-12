const jwt = require ('jsonwebtoken')
const RegisterModel = require ('../model/fbmodel')
const authenticate = async (req, res) => {
    try {
        //extract the user's token from the request headers
        const hasAuthorization = req.headers.authorization;
        //check if the user has a token
        if (!hasAuthorization) {
            return res.status (400).json ({
                message: 'User not Authorized'
            })
        }
        //seperate the token from the bearer
        const token = hasAuthorization.split ('') [1];
        if (!token) {
            res.status (401).json ({
                message: 'Invalid token'
            })
        }
        // console.log (token)

        //decode the token
        const decodeToken = jwt.verify (token, process.env.secret);

        const user = await RegisterModel.findById (decodeToken._Id);

        if (!user) {
            res.status (404).json ({
                message: 'User not found'
            })
        }

        //pass the payload into the request user
        req.user = decodeToken

        //run the next middlewareconst 
        next()

    } catch (error) {
        res.status (500).json ({
            message: error.message
        })
    }
}
module.exports = authenticate

