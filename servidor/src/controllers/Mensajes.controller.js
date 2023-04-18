
const MensajesCtrl={}

const Mensaje=require('../models/Mensajes')


MensajesCtrl.GetMensajes= async(req,res)=>{
    const mensajes=await Mensaje.find()
    res.json(mensajes)

}
MensajesCtrl.CreateMensajes=async(req,res)=>{
  const nuevoMensaje= new Mensaje(req.body)
console.log(nuevoMensaje);

  await nuevoMensaje.save();
  res.send('Mensaje creado');
}

MensajesCtrl.GetMensaje=async(req,res)=>{

    console.log(req.params)
    Mensaje.findByIdAndUpdate(req.params.id)
    .then(mensaje=>{
        res.json(mensaje)
      })
}
MensajesCtrl.EditMensaje=async(req,res)=>{
  await  Mensaje.findByIdAndUpdate(req.params.id,req.body)
 res.json({status:'mensaje editado'})
   
   
}
MensajesCtrl.DeleteMensajes= async(req,res)=>{
   
await    Mensaje.findByIdAndDelete(req.params.id)
   
res.json({status:'Mensaje borrado'})
}

module.exports=MensajesCtrl;