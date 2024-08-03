const userName = document.querySelector("#username");
const userEmail = document.querySelector("#useremail");
const emailValidation = document.querySelector("#emailValidation");
const userPassword = document.querySelector("#userpassword");
const submit = document.querySelector("#submitform");
const form = document.querySelector("form");
const view = document.querySelector("#view");


const emailExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z]+(.[a-z])/;


// -----------------email Validation---------------------

userEmail.addEventListener("input", (event) => {
    //   console.log(userEmail.value.length);
    const emailValue = emailExp.test(userEmail.value);
    validationError(emailValue);
});
// ---------------------Error Function----------------

const validationError = (emailValue) => {
    if (userEmail.value === "") {
        emailValidation.innerHTML = "";
    }
    else if (emailValue) {
        emailValidation.innerHTML = "Email is Valid";
        emailValidation.style.color = "green";

    }
    else {
        emailValidation.innerHTML = "Email is not Valid";
        emailValidation.style.color = "red";

    }

}
// ------------passwordVisibility function------------

view.addEventListener("click", (event) => {
    // console.log(event);
    passwordVisibility(userPassword, event);
});

function passwordVisibility(userPassword, evt) {
    // console.log(evt);
    if (userPassword.type === "password") {
        view.src = "./eye-off.svg";
        userPassword.type = "text";
    }
    else {
        view.src = "./eye.svg";
        userPassword.type = "password";
    }
}
// -----------------submit form-----------------

form.addEventListener("submit", (event) => {
    // console.log(event);
    event.preventDefault();
    const formData = new FormData(form);
    const formDetails = Object.fromEntries(formData);
    // console.log(formDetails);
    checkFormDetails(formDetails);
});

// -------------------chech Form Details-------------------------

function checkFormDetails(formDetails) {
    // console.log(formDetails.username);
    for (let i in formDetails) {
        // console.log(formDetails[i]);
        if (formDetails[i] === "") {
            confirm("fill this form");
        }
        else {
            const product = location.assign("./product.html");      
        }
        break;
    }
}