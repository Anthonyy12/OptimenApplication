const {Router} =require('express')

const router = Router()

const NoticiasCtrl =require('../controllers/Noticias.controller')

router.get('/',NoticiasCtrl.GetNoticias);
router.post('/',NoticiasCtrl.CreateNoticia);
router.get('/:id',NoticiasCtrl.GetNoticia);
router.put('/:id',NoticiasCtrl.EditNoticia);
router.delete('/:id',NoticiasCtrl.DeleteNoticia);

module.exports=router