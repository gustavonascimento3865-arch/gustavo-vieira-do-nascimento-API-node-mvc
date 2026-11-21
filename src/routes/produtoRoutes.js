const { Router } = require('express');
const produtoController = require('../controllers/produtoController');

const router = Router();

router.get('/', produtoController.listar);
router.post('/', produtoController.cadastrar);
router.put('/:id', produtoController.atualizar);
router.delete('/:id', produtoController.remover);

module.exports = router;
