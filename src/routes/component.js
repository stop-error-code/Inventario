import { Router } from 'express';
const router = Router();
const {Component}=require('../models');

router.get('/:appId/component', (req, res) => {
  console.log(req.params.appId),
  Component.findAll({
    where:{
      application_id:req.params.appId}}
      ).then(component=>res.json(component))
});

router.post('/:appId/component/', (req, res) => {
   Component.create({
     id:req.body.componentId,
     application_id:req.params.appId,
     name:req.body.componentName,
     component_type_id:req.body.componentTypeId
   }).then(component=>res.json(component))
  
});/*application_id:req.body.applicationId,*/

export default router;