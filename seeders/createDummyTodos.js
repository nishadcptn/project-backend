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
        if(Todo){
            Todo.title= Todos[i]['title']; 
            Todo.description= Todos[i]['description']; 
            Todo.completed= Todos[i]['completed']; 
            await Todo.save() 
            console.log("Modified "+Todo.name);
        }
        else{

            console.log("Created "+Todo.name);
        }
    }
}

module.exports = run();