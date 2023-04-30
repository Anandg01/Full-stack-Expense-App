const expmodel=require('../model/expance')

exports.postdata=(req, res,next)=>{
    console.log(req.body);
    expmodel.create(req.body)
    .then( ()=>{
        console.log('new data added')
        return expmodel.findAll();
    })
    .then(data=>res.json(data[data.length-1]))
    .catch(err=>console.log(err))
}

exports.getAll=(req, res)=>{
    expmodel.findAll()
    .then(re=>{
       res.json(re) 
    })
    .catch(err=>console.log(err))
}

exports.deleteById=(req, res)=>{
    const param =req.params;
    console.log(param)
    expmodel.findByPk(param.id)
    .then(result=>{
     return  result.destroy()
    })
    .then(data=>{
        console.log('item deleted')
        res.json(data)
    })
    .catch((err)=>console.log('error occurced in find by pk',err))
}

exports.getById=(req, res)=>{
    const param=req.params;
    expmodel.findByPk(param.id)
    .then(data=>res.json(data))
    .catch(err=>console.log('error occurced in get by id'))
}
exports.update=(req, res)=>{
    const param=req.params;
    const updateData=req.body;
    expmodel.findByPk(param.id)
    .then(curentdata=>{
    curentdata.price=updateData.price;
    curentdata.catagory=updateData.catagory;
   curentdata.description=updateData.description
    return curentdata.save()
    })
    .then(data=>{
        console.log("data updated")
        res.json(data)
    })
    .catch(err=>console.log('erro in edit'))
}
