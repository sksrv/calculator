const display=document.querySelector(".display");

function inputDisplay(input){
    display.innerHTML+=input;
}
function calculate(){
    try{
        let ans=eval(display.innerHTML);
        display.innerHTML=ans;
    }
    catch(err){
      display.innerHTML="error";
      console.log("Invalid Input");
    }
   
}
function clearDisplay(){
  display.innerHTML="";
}
function deleteDisplay(){
  let str=display.innerHTML;
   display.innerHTML=str.slice(0,-1);
  
}
