import User from '../Models/userModel.js';
import bcryptjs from 'bcryptjs';
import { errorHndler } from '../Utils/Error.js';

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