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



// const display=document.querySelector(".display");
// let str="";

// const one=document.getElementById("one").addEventListener("click",function(){
//   str=this.innerHTML;
//   display.innerHTML=str;
//   console.log(this.innerHTML);
// });
// const two=document.getElementById("two").addEventListener("click",function(){
//   str+=this.innerHTML;
//   display.innerHTML=str;
//   console.log(this.innerHTML);
// });
// const three=document.getElementById("three");
// const four=document.getElementById("four");
// const five=document.getElementById("five");
// const six=document.getElementById("six");
// const seven=document.getElementById("seven");
// const eight=document.getElementById("eight");
// const nine=document.getElementById("nine");
// const zero=document.getElementById("zero");
// const double_zero=document.getElementById("double-zero");
// const plus=document.getElementById("plus").addEventListener("click",function(){
//     // sum(a,b)
//     str+=this.innerHTML;
//     display.innerHTML=str;
    
// })
// const minus=document.getElementById("minus");
// const divide=document.getElementById("divide");
// const mul=document.getElementById("mul");
// const modulo=document.getElementById("modulo");
// const ac=document.getElementById("ac").addEventListener("click",function(){
//     let a=parseInt(str[0]);
//     let b=parseInt(str[2]);
    
//     display.innerHTML=a+b;
// })
// const del=document.getElementById("del");
// const dot=document.getElementById("dot");
// const equal=document.getElementById("equal").addEventListener("click",function(){
//     let a=parseInt(str[0]);
//     let b=parseInt(str[2]);
//     console.log(a+b);
//     display.innerHTML=a+b;
// })
// function sum(a,b){
//     console.log(parseInt(a)+parseInt(b));
// }
// display.innerHTML=str;
