import User from '../Models/userModel.js';
import bcryptjs from 'bcryptjs';
import { errorHndler } from '../Utils/Error.js';
import jwt from 'jsonwebtoken';

export const signup = async(req, res, next) => {
    //como salvar os dados no banco
    const { username, email, password } = req.body;
    //criptorafar a asenha
    const senhaCodificada = bcryptjs.hashSync(password, 10);
    const newUser = new User({
        username,
        email,
        password: senhaCodificada
    });
    //Codincoes ao salvar dados
    try {
        await newUser.save();
        res.status(201).json('Usuario criado com sucesso!');
    } catch (error) {
        next(errorHndler(500, "Existem um usuario com dados semelhantes"))
    }
}

//Parte de login parte 1
export const signin = async(req, res, next) => {
    const { email, password } = req.body;
    try {
        //verificar se o email existe
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHndler(404, "Usuario nao encontrado"));

        //verificar senha
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHndler(401, 'Senha ou email invalida'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        //remove password visibility
        const { password: pass, ...rest } = validUser._doc;
        res
            .cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(rest);
    } catch (error) {
        next(error)
    }
};