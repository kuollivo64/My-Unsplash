
const { Router } = require('express')
const { getUnsplash, getUnsplashId, postUnsplash, putUnsplash, deleteUnsplash } = require('./../controllers/UnsplashController')
const router = Router();

router.get('/', getUnsplash);
router.get('/:id', getUnsplashId);
router.post('/', postUnsplash);
router.put('/:id', putUnsplash);
router.delete('/:id', deleteUnsplash);

module.exports = router;
