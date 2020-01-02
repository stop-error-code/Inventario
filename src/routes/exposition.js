import { Router } from 'express';
const {Exposition}= require('../models');
const router = Router();
/*let application = {
    1: {
      applicationId: '2',
      name: 'Newtn',
      applicationStatusId: '1',
    },
    2: {
    applicationId: '1',
    name: 'Autogestion',
    applicationStatusId: '1',
    },
  };*/
router.get('/',  (req, res) => {
  Exposition.findAll().then(exposition=>res.json(exposition))
});
router.post('/',  (req, res) => {
  const exposition = Exposition.create({ 
      id: req.body.expositionId,
      name: req.body.expositionName
      }).then(exposition=>res.json(exposition))
});

export default router;