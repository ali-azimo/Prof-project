import User from '../Models/userModel.js';
import bcryptjs from 'bcryptjs';

export const signup = async(req, res) => {
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
    } catch (err) {
        res.status(500).json(err.message)
    }

}