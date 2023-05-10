const namefield = document.querySelector("#name"); 
const emailfield = document.querySelector("#email");  
const passwordfield = document.querySelector("#password");

namefield.addEventListener("blur",function (e) {
  const fieldvalue = e.target.value;
  if(fieldvalue.length === 0){
    alert("Debes escribir tu nombre ")
  }
})