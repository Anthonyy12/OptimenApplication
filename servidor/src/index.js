
const app=require('./app')
require('./datbase')

port=3001;
app.listen(port)
console.log('escuchando en: ',port)
