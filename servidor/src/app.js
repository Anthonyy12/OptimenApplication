const express=require('express')
const morgan=require('morgan')
const bodyParser = require('body-parser');
const cors=require('cors')
const app=express();
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());



app.use(express.urlencoded({extended:false}));
app.use("/api/Mensajes",require('./routes/Mensajes.routes'))
app.use("/api/Eventos",require('./routes/Eventos.router'))
app.use("/api/Noticias",require('./routes/Noticias.routes'))
app.use("/api/login",require('./routes/login.router'))
app.use("/api/users",require('./routes/user.router'))
app.use("/api/register",require('./routes/user.router'))
module.exports=app