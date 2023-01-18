var inputNumber=document.querySelector("#evenOdd")
var btnCheck=document.querySelector("#btnCheck")
var output=document.querySelector("#output")

btnCheck.addEventListener("click", ()=>{
    var number=Number(inputNumber.value)

    if(number%2==0){
        output.innerText="It is an even number"
        output.style.color="green"
    }
    else{
        output.innerText="It is an odd number"
        output.style.color="red"
    }
})