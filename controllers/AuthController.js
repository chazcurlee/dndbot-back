// ///////////////// IMPORT /////////////////////
// const { User } = require('../models')
// const middleware = require('../middleware')

// ///////////////// LOGIN FUNCTION ////////////////////
// const Login = async (req, res) => {

//   try {
//     const user = await User.findOne({
//       where: { username: req.body.username },
//       raw: true
//     })

//     if (
//       user &&
//       (await middleware.comparePassword(user.passwordDigest, req.body.password))
//     ) {
//       let payload = {
//         id: user.id,
//         userName: user.username,
//       }
//       let token = middleware.createToken
//       (payload)
//       return res.send ({user: payload, token})
//     }
//     res.status(401).send({status: 'Error', msg: 'Unauthorized'})

//   } catch (error) {
//     throw error
//   }
// }

// /////////////// REGISTER FUNCTION //////////////////
// const Register = async (req, res) => {

//   try {
//     const { password, email, firstName, lastName, userName } = req.body
//     let passwordDigest = await middleware.hashPassword(password)
//     const user = await User.create({
//         email, firstName, lastName, userName, passwordDigest
//     })
//     res.send(user)

//   } catch (error) {
//     throw error
//   }
// }

// //////////////// CHECKSESSION FUNCTION /////////////////
// const CheckSession = async (req, res) => {
//   const { payload } = res.locals
//   res.send(payload)
// }

// //////////////// EXPORT ///////////////
// module.exports = {
//   Login,
//   Register,
//   CheckSession
// }

const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: { userName: req.body.userName },
            raw: true
        })
        if (
            user &&
            (await middleware.comparePassword(user.passwordDigest, req.body.password))
        ) {
            let payload = {
                id: user.id,
                userName: user.userName
            }
            let token = middleware.createToken(payload)
            return res.send({ user: payload, token })
        }
        res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    } catch (error) {
        throw error
    }
}

const Register = async (req, res) => {
    try {
        console.log('req.body', req.body)
        const { firstName, lastName, userName, password } = req.body
        let passwordDigest = await middleware.hashPassword(password)
        const user = await User.create({ firstName, lastName, userName, passwordDigest })
        res.send(user)
    } catch (error) {
        throw error
    }
}

const CheckSession = async (req, res) => {
    const { payload } = res.locals
    res.send(payload)
}

const UpdatePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body
        const user = await User.findByPk(req.params.user_id)
        if (
            user &&
            (await middleware.comparePassword(
                user.dataValues.passwordDigest,
                oldPassword
            ))
        ) {
            let passwordDigest = await middleware.hashPassword(newPassword)
            await user.update({ passwordDigest })
            return res.send({ status: 'Ok', payload: user })
        }
        res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    } catch (error) { throw error }
} 


module.exports = {
    Login,
    Register,
    CheckSession,
    UpdatePassword
}
