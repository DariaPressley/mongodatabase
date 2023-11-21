const router = require('express').Router();
const {
  getThought,
  createThought,
  deleteThought,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThought).post(createThought);

// /api/users/:thoughtId
router.route('/:userId').delete(deleteThought);

module.exports = router;
