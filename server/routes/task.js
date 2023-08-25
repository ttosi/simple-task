const router = require('express').Router();

router.get('/', async (req, res) => {
  res.send(await req.dbcontext.models['Task'].findAll());
});

router.get('/:id', async (req, res) => {
  const task = await req.dbcontext.models['Task'].findOne({
    where: { id: req.params.id },
  });

  if (!task) {
    res.sendStatus(404);
    return;
  }

  res.send(task);
});

module.exports = router;
