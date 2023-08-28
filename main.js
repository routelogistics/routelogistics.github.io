// toggle button

// 


const pass = document.getElementById("password");
const logIn = document.getElementById("logIn");
const msg = document.getElementById("error");
const logi = document.getElementById("logi");
const logNone = document.getElementById("logNone");

pass.addEventListener("input", () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    }
    else {
        error.style.display = "none";
    }
    if (pass.value.length < 4) {
        error.textContent = "password is weak";
        error.style.color ="red";
    } else
        if (pass.value.length > 4 && pass.value.length < 6) {
            error.textContent = "password is medium";
            error.style.color ="yellow";
        }
        else if (pass.value.length > 8) {
            error.textContent = "password is strong";
            logi.style.display = "block";
            logNone.style.display = "none";
            error.style.color ="green";
        }
       
});