const models = require('../models');

const Todos =[
    {
        title: "Legendary Pack",
        description: "aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non",
        completed: false,

    },
    {
        title: "Iconic Pack",
        description: "aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non",
        completed: true,
    }
]
var run = async function(){
    console.log("Run");
    for(var i=0; i< Todos.length; i++){
            Todo = await models.Todo.create({
                title: Todos[i]['title'], 
                description: Todos[i]['description'], 
                completed: Todos[i]['completed'], 
            });
            console.log("Created "+Todo.title);
    }
}

module.exports = run();