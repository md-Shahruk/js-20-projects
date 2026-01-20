
const btnEle =  document.querySelector(".btn");
const inputEl =  document.querySelector(".input");
const copyPass =  document.querySelector(".fa-copy");
const aleartPassword = document.querySelector(".password-aleart");

btnEle.addEventListener("click", ()=>{
    createPassword();
    
});

copyPass.addEventListener("click",()=>{
   copyPassword();
   if(inputEl.value){
    aleartPassword.classList.remove("active");
   setTimeout(()=>{
   aleartPassword.classList.add("active");
   },2000);
   }
});

function createPassword(length = 14){
  const numbers = '0123456789';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const symbols = '!@#$%^&*()_+?:{}[]';

  const allchars = numbers + lowerCase + upperCase + symbols;
  
  let password = "";
  for(let i =0; i < length; i++){
   let rndom =  Math.floor(Math.random() * allchars.length);
    password += allchars[rndom];
   console.log(password, rndom);
  }
  
  inputEl.value = password;
  aleartPassword.innerHTML = password + " copied!";
  
}

function copyPassword(){
  // inputEl.select();
  // inputEl.setSelectionRange(0,99999);
  navigator.clipboard.writeText(inputEl.value);
}