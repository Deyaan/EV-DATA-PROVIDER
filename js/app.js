  const fname=document.getElementById('name');
  const email=document.getElementById('email');
  const data=document.getElementById('data');
  const id=document.getElementById('id');
  const machine=document.getElementById('machine');
  const number=document.getElementById('number');

  const submitbtn=document.getElementById('submitbtn');
  const editbtn=document.getElementById('editbtn');

  var database;

  //Submit data
  submitbtn.addEventListener('click', (e) =>{
    database = firebase.database();
    e.preventDefault();

    if(id.value===""){
      alert('Enter your Id');
    }
    else{
    alert('submitted!');
    database.ref('/Admin/' + id.value).set({
      Name : fname.value,
      Email : email.value,
      Number : number.value,
      Data : data.value,
      Machine :machine.value
    });
    }
  });
  
  //Update Data
  editbtn.addEventListener('click', (e) =>{
    database = firebase.database();
    const rootRef = database.ref('Admin');
    e.preventDefault();
    
    if(id.value===""){
      alert('Enter your Id');
    }
    else{
    alert('updated!!!');
    const newData = {
      Name : fname.value,
      Email : email.value,
      Number : number.value,
      Data : data.value,
      Machine : machine.value
    }
    rootRef.child(id.value).update(newData);
   }
});
