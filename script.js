let signUpBtn = document.getElementById("signup");
let logInBtn = document.getElementById("login");
let container = document.getElementById("container");

signUpBtn.addEventListener("click",()=>{
    container.classList.add("right-form-active");
})

logInBtn.addEventListener("click",()=>{
    container.classList.remove("right-form-active");
})