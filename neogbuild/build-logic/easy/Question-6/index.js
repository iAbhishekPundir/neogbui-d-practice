var inputMonth=document.querySelector("#input-month")
var btnCheck=document.querySelector("#btn-check")
var output=document.querySelector("#output-div")

const monthDays31=["january", "march", "may","july",
                  "august", "october", "december"] 
const monthDays30=["april","june","september","november"]
const monthDays29Or30=["february"]

btnCheck.addEventListener("click", ()=>{
    monthDays31.includes(inputMonth.value.toLowerCase())

    if(monthDays31.includes(inputMonth.value.toLowerCase())){
        output.innerText="This is a month of 31 days"
    }
    else if(monthDays30.includes(inputMonth.value.toLowerCase())){
        output.innerText="This is a month of 30 days"
    }
    else if(monthDays29Or30.includes(inputMonth.value.toLowerCase())){
        output.innerText="This month is exception"
    }
    else{
        output.innerText="Wrong input"
    }
   
})
