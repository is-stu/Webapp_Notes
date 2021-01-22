const userControllers = {};
const userModel = require('../Models/user.mo');

userControllers.getUsers = async (req, res) => {
  const users = await userModel.find();
  res.json(users);
};

userControllers.createUser = async (req, res) => {
  const { username } = req.body;
  const newUser = new userModel({
    username,
  });

  await newUser.save();
  res.json({ message: 'User created' });
};

userControllers.deleteUser = async (req, res) => {
  await userModel.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
};

userControllers.getUser = (req, res) =>
  res.json({ message: 'user user Routes' });

module.exports = userControllers;
