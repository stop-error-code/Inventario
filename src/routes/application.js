import { Router } from 'express';
const {Application,Exposition}= require('../models');
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
router.get('/:appId',  (req, res) => {
  console.log(req.params)
  if (req.params.appId){
    Application.findAll({include:[Exposition],where:{id:req.params.appId}}).then(application=>res.json(application))
  }else{
    Application.findAll({include:[Exposition]}).then(application=>res.json(application))
  }
});
router.post('/',  (req, res) => {
  const application = Application.create({ 
      id: req.body.applicationId,
      name: req.body.applicationName,
      description: req.body.applicationDescription,
      exposition_id:req.body.expositionId
      }).then(application=>res.json(application))
});

export default router;