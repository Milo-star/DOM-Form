let inputName = document.querySelectorAll("input");
inputName[0].addEventListener('keyup', () => {

    document.getElementById("display-firstname").innerHTML = inputName[0].value;
})

let age = document.getElementById("age");
let sec = document.getElementById("a-hard-truth");
age.addEventListener('keyup', () => {
    if (age.value<18){
        sec.style.visibility = "hidden"
    }
    else{
        sec.style.visibility = "visible"
    }
})

let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd-confirm");

pwd.addEventListener('keyup', () =>{

    if (pwd.value.length < 6){
        pwd.style.borderColor ="red"
    }
        
    else{
        pwd.style.borderColor="green"

    }
    

})

pwd2.addEventListener('keyup', () =>{

    if (pwd2.value.length < 6 || pwd2.value != pwd.value){
        pwd2.style.borderColor ="red"
    }
        
    else{
        pwd2.style.borderColor="green"
    }
})






let button = document.getElementById("toggle-darkmode")
button.addEventListener('change', (e) =>{

    if (e.target.value == "dark")
    {
    document.body.style.backgroundColor= "black"
    document.body.style.color="white"
    }

    else
    {
    document.body.style.backgroundColor= "white"
    document.body.style.color="black"
    }

})