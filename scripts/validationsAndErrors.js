let checkName = (string) => {
    return string ? true : false
}

let checkNameInDB = (string) => {
    let validation = true;

    if(!usersDB){
        validation = true
    } else {
        usersDB.forEach(user => {
            if (user.name == string) {validation = false}
        });
    }
    
    return validation
}

let checkEmail = (string) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(string) ? true : false
}

let checkEmailInDB = (email) => {
    let validation = true;

    if(!usersDB){
        validation = true
    } else {
        usersDB.forEach(user => {
            if (user.email == email) {validation = false}
        });
    }
    
    return validation
}

let checkPassword = (string) =>{
     
    if(string == undefined){
        return false
    } else if (string.length < 6){
        return false
    } 
    return true
}

let checkRepeatPassword = (string1, string2) => {
    return string1 === string2 ? true:false
}

let errorCreator = (message, location) => {
    let div = document.createElement("div")
    div.setAttribute("class", "error")
    div.innerHTML = message
    form.insertBefore(div, location)
}

let checkOverAge = (input) => {
    return input.checked;
}

let errorName = () => {
    errorCreator(`<p> You should provide a valid name </p>`, name)
}

let errorNameInDB = () => {
    errorCreator(`<p> This user name is already taken </p>`, name)
}

let errorPassword = () =>{
    errorCreator(`<p> The password must have minimum 6 character </p>`, password)
}

let errorEmail = () =>{
    errorCreator(`<p> The email is not correct </p>`, email)
}

let errorEmailInDB = () => {
    errorCreator(`<p> This email is already used. Try to log in with this mail </p>`, email)
}

let errorRepeatPassword = () =>{
    errorCreator(`<p> The passwords do not match </p>`, repeatPassword)
}

let errorOverAge = () =>{
    errorCreator(`<p> You should be over 18 years old to sign-up </p>`, signUpButton)
}

let deleteErrors  = () =>{
    errors = [...document.getElementsByClassName("error")]
    for (i = 0 ; i < errors.length; i++){
        errors[i].remove()}
}