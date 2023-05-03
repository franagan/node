const { verifySign } = require('../utils/jwt');
const user = require('../api/models/user.model');
const 
const isAuth = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;

        if (!authorization) {
            return res.status(401).json({ message: 'no estas autorizado' });
        }
        const token = authorization.split(".")[1]
        if(!token){
            return res.status(401).json({message: 'no me has enviado el token'});
        }
        let tokenVerified = verifySign(token, process.env.JWT_KEY);
        if (!tokenVerified.id){

        }
        if(!tokenVerified.id){

        }
        console.log(tokenVerified);
        const userLogged = await User.findById
       

        next()
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {isAuth};