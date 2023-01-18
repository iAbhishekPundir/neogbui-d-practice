var input1=document.querySelector("#num1")
var input2=document.querySelector("#num2")
var input3=document.querySelector("#num3")

var btnCheck=document.querySelector("#btnCheck")
var output=document.querySelector("#output")

btnCheck.addEventListener("click", ()=>{
    console.log("clicked")
    var number1= Number(input1.value)
    var number2= Number(input2.value)
    var number3= Number(input3.value)

    
    if(number1>number2 && number1>number3){
        output.innerText="Number1 is the highest with value: "+ number1
    }
    else if(number2>number1 && number2>number3){
        highest = number2
        output.innerText="Number2 is the highest number with value: "+ number2
    }
    else if(number3>number2 && number3>number1){

        output.innerText="Number3 is the highest number with value: "+ number3
    }
    
})