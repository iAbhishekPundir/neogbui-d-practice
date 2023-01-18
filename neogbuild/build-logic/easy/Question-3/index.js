var input1=document.querySelector("#num1")
var input2=document.querySelector("#num2")

var btnCheck=document.querySelector("#btnCheck")
var output=document.querySelector("#output")

btnCheck.addEventListener("click", ()=>{
    console.log("clicked")
    var number1= Number(input1.value)
    var number2= Number(input2.value)

    if(number1>number2){
        output.innerText="Number1 is greater than Number2"
    }
    else if(number2>number1){
        output.innerText="Number2 is greater than Number1"
    }
    else{
        output.innerText="Both numbers are equal"
    }
})