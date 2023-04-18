const {Router} =require('express')

const router = Router()

const EventosCtrl =require('../controllers/Eventos.controller')

router.get('/',EventosCtrl.GetEventos);
router.post('/',EventosCtrl.CreateEvento);
router.get('/:id',EventosCtrl.GetEvento);
router.put('/:id',EventosCtrl.EditEvento);
router.delete('/:id',EventosCtrl.DeleteEvento);

module.exports=router