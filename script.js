let inputName = document.querySelectorAll("input");
inputName[0].addEventListener('keyup', () => {

    document.getElementById("display-firstname").innerHTML = inputName[0].value;
})