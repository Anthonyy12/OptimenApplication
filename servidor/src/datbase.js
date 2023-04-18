const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://hola123:holamundo@cluster0.vt4lr1b.mongodb.net/Cliente',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  
})
.then(db=>console.log('conectado a mongo'))
.catch(err=>console.error(err))

module.exports=mongoose