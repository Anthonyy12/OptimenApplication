
const EventosCtrl={}

const Eventos=require('../models/Eventos')


EventosCtrl.GetEventos= async(req,res)=>{
    const mensajes=await Eventos.find()
    res.json(mensajes)

}
EventosCtrl.CreateEvento=async(req,res)=>{
  const nuevoMensaje= new Eventos(req.body)
console.log(nuevoMensaje);

  await nuevoMensaje.save();
  res.send('Noticia creado');
}

EventosCtrl.GetEvento=async(req,res)=>{

    console.log(req.params)
    Eventos.findByIdAndUpdate(req.params.id)
    .then(mensaje=>{
        res.json(mensaje)
      })
}
EventosCtrl.EditEvento=async(req,res)=>{
  await  Eventos.findByIdAndUpdate(req.params.id,req.body)
 res.json({status:'evento editado'})
   
   
}
EventosCtrl.DeleteEvento= async(req,res)=>{
   
await    Eventos.findByIdAndDelete(req.params.id)
   
res.json({status:'evento borrado'})
}

module.exports=EventosCtrl;