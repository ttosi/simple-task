const express = require('express');
const taskRoutes = require('./routes/task');
const database = require('./database/dbcontext');

(async () => {
  const app = express();
  const dbcontext = await database.init();

  const middle = (req, res, next) => {
    req.dbcontext = dbcontext;
    next();
  };

  app.use(middle);
  app.use('/task', taskRoutes);

  app.listen(3000, () => console.log('listening on port 3000...'));
})();
