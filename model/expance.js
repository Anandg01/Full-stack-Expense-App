const Sequelize=require('sequelize')
const sequelize=require('../util/database');

const expData=sequelize.define('expData',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    alowNull:false,
    primaryKey:true
  }, 
  description:{
    type:Sequelize.STRING,
    alowNull:false
  },
  price:{
    type:Sequelize.INTEGER,
    alowNull:false
  },
  category:Sequelize.STRING
 
});

module.exports=expData;