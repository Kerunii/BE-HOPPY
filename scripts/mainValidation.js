signUpButton = document.getElementById("signup-button")
let name = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let repeatPassword = document.getElementById("repeat-password")
let form = document.getElementsByClassName("signup-form")[0]
let usersDB = JSON.parse(localStorage.getItem('users'))
let checkbox = document.getElementById("over-age")




let verifyRequirements = () => {
    
    deleteErrors();
    let check = true;
    console.log(checkbox.checked)

    if (!checkName(name.value)){
        errorName()
        check = false
    }

    if (!checkNameInDB(name.value)){
        errorNameInDB()
        check = false
    }

    if (!checkPassword(password.value)){
        errorPassword()
        check = false
    }

    if (!checkEmail(email.value)){
        errorEmail();
        check = false;
    }

    if (!checkEmailInDB(email.value)){
        check = false;
        errorEmailInDB();
    } 

    if (!checkRepeatPassword (password.value, repeatPassword.value)){
        check = false;
        errorRepeatPassword();
    } 

    if (!checkOverAge(checkbox)){
        check = false;
        errorOverAge();
    }

    return check ? true : false
    
}

const createUser = () => {
    const newUser = new User (name.value, email.value, password.value)

    if (usersDB){
        usersDB.push(newUser);
    } else {
        usersDB = [newUser]
    }
    localStorage.setItem('users', JSON.stringify(usersDB));
} 

const validationMessage = () =>{
    let div = document.createElement("div");
    div.innerHTML = `<p> Thank you ${name.value}, you have signed in successfully </p>`
    form.insertBefore(div, signUpButton);
    signUpButton.remove()

}

signUpButton.addEventListener("click", function(event){
    event.preventDefault()
    if (verifyRequirements()){
        createUser();
        validationMessage();
    };
})