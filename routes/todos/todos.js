let express = require('express');
const models = require('../../models');
const router = express.Router({ mergeParams: true });
const fs = require('fs');


router.get('/', async (req, res) =>{
    let todos;
    console.log(models.Todo);
    // todos = await models.Todo.findAll();
    return res.status(200).json("hghg");
});

module.exports = router;