const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Task = sequelize.define('Task', {
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: /'todos' || 'groceries' || 'goals'/,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recurring: {
      type: DataTypes.BOOLEAN,
      default: false,
      allowNull: false,
    },
  });

  return Task;
};
