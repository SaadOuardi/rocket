const express = require('express');
const multer = require('multer');

const {getAllPosts, createPost, deletePost } = require('../controllers/postController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', getAllPosts);
router.post('/', upload.single('image_url'), createPost);
router.delete('/:id', deletePost);


module.exports = router;
