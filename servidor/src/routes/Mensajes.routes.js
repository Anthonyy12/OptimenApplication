const {Router} =require('express')

const router = Router()

const MensajesCtrl =require('../controllers/Mensajes.controller')

router.get('/',MensajesCtrl.GetMensajes);
router.post('/',MensajesCtrl.CreateMensajes);
router.get('/:id',MensajesCtrl.GetMensaje);
router.put('/:id',MensajesCtrl.EditMensaje);
router.delete('/:id',MensajesCtrl.DeleteMensajes);

module.exports=router