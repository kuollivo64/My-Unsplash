
const { Router } = require('express')
const { getUnsplash, getUnsplashId, searchUnsplash, postUnsplash, putUnsplash, deleteUnsplash } = require('./../controllers/UnsplashController')
const router = Router();

router.get('/', getUnsplash);
router.get('get/:id', getUnsplashId);

router.get('/search', searchUnsplash);

router.post('/', postUnsplash);
router.put('/:id', putUnsplash);
router.delete('/:id', deleteUnsplash);

module.exports = router;
