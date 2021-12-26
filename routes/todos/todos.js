let express = require("express");
const models = require("../../models");
const router = express.Router({ mergeParams: true });
const fs = require("fs");
// const { where } = require('sequelize');

router.get("/", async (req, res) => {
  let todos;
  let count;
  if (req.query.completed) {
    try {
      todos = await models.Todo.findAll({
        where: {
          completed: req.query.completed,
        },
      });
      count = await models.Todo.count({
        where: {
          completed: req.query.completed,
        },
      });
      return res.status(200).json({todos:todos, count:count});
    } catch (error) {
      return res.status(404).json("Something went wrong");
    }
  } else {
    try {
      todos = await models.Todo.findAll();
      count = await models.Todo.count();
      return res.status(200).json({todos:todos, count:count});
    } catch (error) {
      return res.status(404).json("Something went wrong");
    }
  }
});

router.get("/:UUID", async (req, res) => {
  let todos;
  try {
    todos = await models.Todo.findOne({
      where: {
        uuid: req.params.UUID,
      },
    });
  } catch (error) {
    return res.status(404).json("Something went wrong");
  }
  return res.status(200).json(todos);
});

router.post("/", async (req, res) => {
  const { title, description } = req.body;
  try {
    todos = models.Todo.create({
      title: title,
      description: description,
      completed: false,
    });
  } catch (error) {
    return res.status(404).json("Something went wrong");
  }
  return res.status(200).json({ msg: "success" });
});

router.patch("/:UUID", async (req, res) => {
  let todos;
  const { title, description, completed } = req.body;
  try {
    todos = await models.Todo.findOne({
      where: {
        uuid: req.params.UUID,
      },
    });
  } catch (error) {
    return res.status(404).json("Something went wrong");
  }
  if (todos) {
    if (title) todos.title = title;
    if (description) todos.description = description;
    if (completed) todos.completed = completed === "true" ? true : false;
    todos.save();
    return res.status(200).json(todos);
  } else {
    return res.status(404).json("data not found");
  }
});

router.delete("/:UUID", async (req, res) => {
  try {
    todos = await models.Todo.destroy({
      where: {
        uuid: req.params.UUID,
      },
    });
    return res.status(200).json({ msg: "success" });
  } catch (error) {
    return res.status(404).json("Something went wrong");
  }
});
module.exports = router;
