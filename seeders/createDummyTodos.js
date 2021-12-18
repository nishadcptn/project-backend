const models = require('../models');

const Todos =[
    {
        title: "Legendary Pack",
        description: "Mystic weapon wielded by the final leader",
        completed: false,

    },
    {
        title: "Iconic Pack",
        description: "'Full defense for the entire body with strength amplification using servos",
        completed: true,
    }
]
var run = async function(){
    console.log("Run");
    for(var i=0; i< Todos.length; i++){
        var Todo = await models.Todo.findOne({
            where: { 
                title: Todos[i]['title']
            },
        });
        if(Pack){
            Todo.title= Todos[i]['title']; 
            Todo.description= Todos[i]['description']; 
            Todo.completed= Todos[i]['completed']; 
            await Todo.save() 
            console.log("Modified "+Pack.name);
        }
        else{
            Todo = await models.Todo.create({
                title: Todos[i]['name'], 
                description: Todos[i]['description'], 
                completed: Todos[i]['completed'], 
            });
            console.log("Created "+Todo.name);
        }
    }
}

module.exports = run();