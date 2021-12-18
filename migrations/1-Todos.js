'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Todos", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "Todos",
    "created": "2021-12-18T18:05:15.344Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "Todos",
        {
            "id": {
                "type": Sequelize.INTEGER,
                "field": "id",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            },
            "uuid": {
                "type": Sequelize.UUID,
                "field": "uuid",
                "unique": true,
                "defaultValue": Sequelize.UUIDV4
            },
            "title": {
                "type": Sequelize.JSON,
                "field": "title",
                "allowNull": false
            },
            "description": {
                "type": Sequelize.JSON,
                "field": "description",
                "allowNull": true
            },
            "completed": {
                "type": Sequelize.BOOLEAN,
                "field": "completed",
                "defaultValue": false
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
