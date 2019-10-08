let passwordSecurity = string => {
    let security = '';
    if (string == undefined){
        security = "Password unvalid"
    } else if (string.length < 6){
        security = "Password unvalid"
    } else if (string.length >= 6){
        security = "Password sequrity level: low"
    } if (string.length >= 6 && /\d/.test(string) || string.length >= 6 && /[A-Z]/.test(string)){    //true if there is a number in string
      security = "Password sequrity level: medium"
    } if (string.length >= 6 && /\d/.test(string) && /[A-Z]/.test(string)){
        security = "Password sequrity level: high"
    }

    return security
    
}

let securityDivCreator = () =>{

    document.querySelector("#security-bar") ? document.querySelector("#security-bar").remove() : document.querySelector("#security-bar")
    let div = document.createElement("div")
    div.setAttribute("id", "security-bar")
    div.innerHTML = passwordSecurity(password.value)
    form.insertBefore(div, password)
}

password.addEventListener("input", securityDivCreator)