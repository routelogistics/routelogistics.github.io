// toggle button

// 


const pass = document.getElementById("password");
const logIn = document.getElementById("logIn");
const msg = document.getElementById("error");
const logi = document.getElementById("logi");
const logNone = document.getElementById("logNone");
const hide = document.getElementById("hide");

pass.addEventListener("input", () => {

    if (pass.value.length > 8) {
        logi.style.display = "block";
        logNone.style.display = "none";
        
    }
    else{
        logi.style.display = "none";
        logNone.style.display = "block";
    }
})
       
       

hide.addEventListener("click",()=>{
    if(pass.type === "password"){
        pass.type="text";
    }else{
        pass.type="passowrd";
    }
})



// if (pass.value.length < 4) {
//     error.textContent = "password is weak";
//     error.style.color ="red";
// } else
//     if (pass.value.length > 4 && pass.value.length < 6) {
//         error.textContent = "password is medium";
//         error.style.color ="yellow";
//     }
//     else if (pass.value.length > 8) {
//         error.textContent = "password is strong";
//         logi.style.display = "block";
//         logNone.style.display = "none";
//         error.style.color ="green";
//     }