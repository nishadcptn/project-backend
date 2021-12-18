let express = require('express');
const models = require('../../models');
const router = express.Router({ mergeParams: true });
const fs = require('fs');


router.get('/', async (req, res) =>{
    let todos;
    todos = await models.Todo.findAll();
    if(todos){
        return res.status(200).json(todos);
    }
    else{
        return res.json({"msg":"No data Found"});
    }
});

module.exports = router;