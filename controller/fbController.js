//first we require our model
const userModel = require ('../model/fbmodel');
//then we import our bcrypt
const bcrypt = require ('bcrypt');
//next we import our jsonwebtoken
const jwt = require ('jsonwebtoken');
//we require our dotenv
// require ('dotenv').config(); = req[body]
//then we create a register or signup page
exports.register = async (req, res) => { 
    try{
        //we destruture
        const { FirstName, Surname, NewPassword, DateOfBirth, Gender, Email} = req.body
        //then we make sure that a user fills all the space
        if (!FirstName, Surname, DateOfBirth, Gender, Email) {
        res.status (400).json ({
               message: 'PLEASE CHECK YOUR INFORMATION, YOU MIGHT HAVE SKIPPED A FIELD. THANK YOU.'
            })
        }
        //logic for email
        // if (Email !== ('@ $$ gmail.com'))
        // res.status (400).json ({
        //        message: 'SPECIAL CHARACTERS NEEDED'
        //     })
            //logic for password
        if (!NewPassword) {
        res.status (400).json ({
               message: 'PLEASE PROVIDE A PASSWORD'
                })

            }

               
     //we then salt our password for us to be able to encrpt it
     const salt = bcrypt.genSaltSync(12);
     //we then hash our  password
       const hashePassword = bcrypt.hashSync(NewPassword, salt);         
       //create the user data
       const user = await userModel ({
           userName: FirstName,
           lastName: Surname,
           SecurityKey: hashePassword,
           DOB: DateOfBirth,
           Sex: Gender,
           email: Email.toLowerCase(),
           
       })
       await user.save()
       //return a success message to te user
       res.status (201).json({
           message: 'REGISTRATION COMPLETE, YOU ARE WELCOME.',
           data: user
       });
} catch (error) {
        res.status (500).json ({
            Error: error.message
        })
}
}

exports.login = async (req, res) => {
    try {
        //extracfting the user's email and password from the request body
        const { Email, Password} = req.body;
        //check if the user is existing in the database
        const userExists = await userModel.findOne ({ Email: Email.toLowerCase() });
        // console.log ('userExists:', userExists);
        if (!userExists) {
            return res.status (400).json ({
                message: 'USER NOT FOUND'
            })

        }
        //check if the user's password is correct
        const checkPassword = bcrypt.compareSync (Password.userExists.Password)
        if (!checkPassword) {
            return res.status (400).json ({
                message: 'INCORRECT PASSWORD'
            })
        }
        const token = jwt.sign({
            userId: userExists._id,
            Email: userExists.email,
        }, process.env.secret, {expiresIn: '1h'})

        res.status (201).json ({
            message: 'Login successful',
             token: token
        })
    } catch (error) {
        res.status (500).json({
            message:error.message
        })
    }
} 


