const expres=require('express');
const expController=require('../controler/expance')
const rout=expres.Router();

rout.post('/addData',expController.postdata)
rout.get('/getData',expController.getAll)
rout.delete('/deleteData/:id',expController.deleteById)
rout.put('/addData/:id', expController.update)
rout.get('/getById/:id',expController.getById)
module.exports=rout;