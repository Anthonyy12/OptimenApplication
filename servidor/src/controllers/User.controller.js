const UserCtrl={}

const User=require('../models/User')

UserCtrl.CrearUser=async(req,res)=>{
  const NuevoUser= new User(req.body)
console.log(NuevoUser);

  await NuevoUser.save();
  res.send('Usuario creado exitosamente');
}


UserCtrl.GetUsers= async(req,res)=>{
  const mensajes=await User.find()
  res.json(mensajes)

}



module.exports=UserCtrl;