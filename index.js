
let price=document.querySelector('#amount')
let desc=document.querySelector('#discription')
let category=document.getElementById('catagory')
let edit=false
let categoryval=''
let expenseId=''

const addlist=document.querySelector('#listofitem')


 async function clickbtn(event){
    event.preventDefault();
const expobj={
price:price.value,
description:desc.value,
category:category.value
}
if(edit==true){
    
    try{
  const update= await axios.put(`http://localhost:3000/addData/${expenseId}`,expobj)
  const res= await axios.get(`http://localhost:3000/getById/${expenseId}`,)
     displayli(res.data)
     removeFromScreen(expenseId);
     expenseId='';
     edit=false; 
     console.log(res.data)
}
    catch{ 
        (err)=>{
            console.log(err)
        }
        expenseId='';
        edit=false;
    }

}
else{

    try{
const res=await axios.post(`http://localhost:3000/addData`,expobj)

    displayli(res.data)
    }
catch{
    (err)=>console.log(err)
}
}

}



function deleteli(id){
    console.log(id)
    axios.delete(`http://localhost:3000/deleteData/${id}`)
 .then(()=>{
    removeFromScreen(id)
    console.log("Data deleted")
})
.catch(err=>console.log(err))
}

function editli(id){
    axios.get(`http://localhost:3000/getById/${id}`)
    .then(res=>{
        const data=res.data
        price.value=data.price;
        desc.value=data.description;
        category.value=data.category
        edit=true;
        expenseId=id;
    })
    .catch(err=>console.log(err))
    console.log(id, 'jay shree Ram') 
    
}


function displayli(obj){
 const allexplist=document.querySelector('#listofitem')   
let litag=`<tr id= '${obj.id}'> <td>${obj.description} </td> <td> ${obj.category} </td> <td>${obj.price} </td>
<td><button onClick=deleteli('${obj.id}')>Delete</button> </td><td><button onClick=editli('${ obj.id}')>Edit</button> </td></li>`
allexplist.innerHTML=allexplist.innerHTML+litag
document.querySelector('#amount').value='';
document.querySelector('#discription').value='';

}

function removeFromScreen(id){
    const li=document.getElementById(id)
    li.parentNode.removeChild(li);
   // addlist.removeChild(li)
}

window.addEventListener('DOMContentLoaded', async()=>{

 try{//3    
const res=await axios.get('http://localhost:3000/getData')
res.data.forEach((data)=>{
    displayli(data)
})
    }

    catch{
     (err)=>(console.log(err))
    }
})
    