
const { Router } = require('express')
const { getUnsplash, searchUnsplash, postUnsplash, deleteUnsplash } = require('./../controllers/UnsplashController')
const router = Router();

router.get('/', getUnsplash);

router.get('/search', searchUnsplash);

router.post('/', postUnsplash);
router.delete('/:id', deleteUnsplash);

module.exports = router;
