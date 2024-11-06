const userService = require("../services/userService");

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const existingUser = await userService.findUserById(req.body.id);
    if (!existingUser) {
      return res.status(404).send({ message: "User not found" });
    }
    const user = await userService.updateUser(req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createComment = async (req, res) => {
  try {
    const comment = await userService.createComment(req.body);
    res.status(201).send(comment);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUserComments = async (req, res) => {
  try {
    const comments = await userService.getUserComments(req.params.id);
    res.status(200).send(comments);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createManyComments = async (req, res) => {
  try {
    const commentsData = req.body;
    const comments = await userService.createManyComments(commentsData);
    res.status(201).send(comments);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateManyComments = async (req, res) => {
  try {
    const commentsData = req.body;
    const result = await userService.updateManyComments(commentsData);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createUser,
  updateUser,
  createManyComments,
  updateManyComments,
  createComment,
  getUserComments,
};
