import { Router } from 'express';
const router = Router();
const {Server}=require('../models');

router.get('/', (req, res) => {
  Server.findAll().then(server=>res.json(server))
});

router.post('/', (req, res) => {
   Server.create({
     serverId:req.body.serverId,
     serverName:req.body.serverName,
     IP:req.body.IP,
     componentId:req.body.componentId,
   }).then(server=>res.json(server))
  
});

export default router;