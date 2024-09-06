const User = require("../models/userModel");

// GET /users
const getAllUsers = (req, res) => {
  const users = User.getAll();
  res.json(users);
};

// POST /users
const createUser = (req, res) => {
  const newUser = User.addOne({ ...req.body });
  if (newUser) {
    res.json(newUser);
  } else {
    res.status(500).json({ message: "Failed to create user" });
  }
};

// GET /users/:userId
const getUserById = (req, res) => {
  const user = User.findById(req.params.userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// PUT /users/:userId
const updateUser = (req, res) => {
  const updatedUser = User.updateOneById(req.params.userId, { ...req.body });
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// DELETE /users/:userId
const deleteUser = (req, res) => {
  const isDeleted = User.deleteOneById(req.params.userId);
  if (isDeleted) {
    res.json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
