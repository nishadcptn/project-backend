let express = require('express');
const models = require('../../models');
const router = express.Router({ mergeParams: true });
const fs = require('fs');
const { where } = require('sequelize');


router.get('/', async (req, res) =>{
    let todos;
    if(req.query.completed){
        try{
            todos = await models.Todo.findAll({
                where : {
                    completed : req.query.completed
                }
            });
            return res.status(200).json(todos);
        }catch(error){
            return res.status(404).json("Something went wrong");
        }
    }else{
        todos = await models.Todo.findAll();
        return res.status(200).json(todos);
    }
});

router.get('/:UUID', async (req, res) =>{
    let todos;
    try{
        todos = await models.Todo.findOne({
            where : {
                uuid : req.params.UUID
            }
        });
    }catch(error){
        return res.status(404).json("Something went wrong");
    }
    return res.status(200).json(todos);
});

router.post('/', async (req, res) =>{
    const { title, description} = req.body;
    try{
        todos = models.Todo.create({
            title : title,
            description : description,
            completed : false
        });
    }catch (error){
        return res.status(404).json("Something went wrong");
    }
    return res.status(200).json({msg:"success"});
});

router.patch('/:UUID', async (req, res) =>{
    let todos;
    const { title, description ,completed} = req.body;
    try{
        todos = await models.Todo.findOne({
            where : {
                uuid : req.params.UUID
            }
        });
    }catch(error){
        return res.status(404).json("Something went wrong");
    }
    if(title)
        todos.title = title;
    if(description)
        todos.description = description;
    if(completed)
        todos.completed = completed === 'true' ? true : false
    todos.save();
    return res.status(200).json(todos);
});

router.delete('/:UUID', async (req, res) =>{
    try{
        todos = await models.Todo.destroy({
            where : {
                uuid : req.params.UUID
            }
        });
        return res.status(200).json({msg : "success"});
    }catch(error){
        return res.status(404).json("Something went wrong");
    }
})
module.exports = router;