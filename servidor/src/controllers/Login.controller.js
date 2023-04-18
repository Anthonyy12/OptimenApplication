


const User=require('../models/User')

const loginCtrl = {};

loginCtrl.Login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email }).exec();
      if (!user) {
        return res.status(400).json({ message: 'El usuario no existe' });
      }
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Contraseña incorrecta' });
      }
      // Aquí podrías devolver un token de autenticación
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error de servidor' });
    }
  };
  
module.exports=loginCtrl;