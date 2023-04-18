const multer = require('multer');
const multerConfig =require( '../utils/multerConfig');
const NoticiasCtrl={}

const Noticia=require('../models/Noticias')



NoticiasCtrl.GetNoticias= async(req,res)=>{
    const mensajes=await Noticia.find()
    res.json(mensajes)

}
NoticiasCtrl.CreateNoticia=async(req,res)=>{
  const nuevoMensaje= new Noticia(req.body)
console.log(nuevoMensaje);

  await nuevoMensaje.save();
  res.send('Noticia creado');
}

NoticiasCtrl.GetNoticia=async(req,res)=>{

    console.log(req.params)
    Noticia.findByIdAndUpdate(req.params.id)
    .then(mensaje=>{
        res.json(mensaje)
      })
}
NoticiasCtrl.EditNoticia=async(req,res)=>{
  await  Noticia.findByIdAndUpdate(req.params.id,req.body)
 res.json({status:'noticia editado'})
   
   
}
NoticiasCtrl.DeleteNoticia= async(req,res)=>{
   
await Noticia.findByIdAndRemove(req.params.id)
   
res.json({status:'noticia borrado'})
}

module.exports=NoticiasCtrl;