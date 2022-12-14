const router = require('express').Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addToFriendList,
  removeFromFriendList,
} = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

router
  .route('/:userId/friends/:friendId')
  .post(addToFriendList)
  .delete(removeFromFriendList);

module.exports = router;
