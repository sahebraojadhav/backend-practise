const express = require('express');
const CityController=require('../../controllers/city-controller');

const router=express.Router();
console.log("v1 of routes");

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.post('/city/bulk-create',CityController.bulkCreate);
router.patch('/city/:id',CityController.update);

router.post('/airport',AirportController.create)

module.exports=router;
