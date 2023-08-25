const { Sequelize } = require("sequelize");
// const { Task } = require('./models/Task');
const Task = require("./models/Task");

const init = async () => {
  const sequalize = new Sequelize({
    dialect: "sqlite",
    storage: "./simple-task.sqlite",
    logging: false,
  });

  await Task(sequalize).sync({ alter: true });

  return sequalize;
  // await Task(sequalize).create({
  //   name: 'task three',
  //   recurring: true,
  //   type: 'todos',
  // });

  // const tasks = await Task(sequalize).findAll();
  // console.log(tasks);
};

module.exports = { init };
