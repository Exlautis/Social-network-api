const router = require('express').Router();

const {
    getAllThoughts,
    addThought,
    getThoughtById,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getAllThoughts);

//api/thought/:userid
router.route('/:userId').post(addThought);

//api/thoughts/thoughtId
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)

//api/thought/userId/thougthId
router
    .route('/:userId/:thoughtId')
    .delete(removeThought);

//api/thoughts/thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction);

//api/thoughts/thoughtId/reaction/reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;