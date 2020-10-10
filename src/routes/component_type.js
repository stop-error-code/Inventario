import { Router } from 'express';
const router = Router();
const {ComponentType}=require('../models');

//all component type
router.get('/', (req, res) => {
    ComponentType.findAll().then(componentType=>res.json(componentType))
});
//new component type
router.post('/', (req, res) => {
    ComponentType.create({
     id:req.body.componentTypeId,
     name:req.body.componentTypeName,
   }).then(componentType=>res.json(componentType))
  
});

export default router;