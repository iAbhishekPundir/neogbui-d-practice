var num1=document.querySelector("#num1")
var num2=document.querySelector("#num2")
var num3=document.querySelector("#num3")
var num4=document.querySelector("#num4")
var num5=document.querySelector("#num5")

var btnAdd=document.querySelector("#btnAdd")
var output=document.querySelector("#output")

btnAdd.addEventListener("click",()=>{
    var sum=0
    sum = Number(num1.value)+Number(num2.value)+Number(num3.value)+Number(num4.value)
    +Number(num5.value)
    console.log(sum)
    output.innerHTML=sum;
})