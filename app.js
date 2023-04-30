const express=require('express');
const cros=require('cors')
const bodyParser = require('body-parser');

const sequelize=require('./util/database')
const expencerout=require('./routes/expance');
app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cros())

app.use(expencerout);

app.use( '/',(req, res)=>{
 res.json({id:124, name:"anand"})
})

sequelize.sync().then(result=>{
      app.listen(3000,()=>console.log("server Running..."));
})
   .catch(err=>console.log(err))