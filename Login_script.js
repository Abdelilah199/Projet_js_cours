

let checkUsername = ()=>{
    let username = document.getElementById("Username").value
    let txt = document.getElementById("txt_user")
    if(username.length > 2 && username.length < 25 ){
        txt.innerHTML = "Username Valide"
        txt.style.color = "green"
    }
    else{
        txt.innerHTML = "Minimum 3 caracteres et max 25"

        txt.style.color = "red"
    }
}
document.getElementById("Username").addEventListener('keyup',checkUsername)



let checkEmail=()=>{
    let email = document.getElementById("Email").value
    let txt = document.getElementById("txt_email")
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  
    if(email.match(re)){
        txt.innerHTML = "email valide "
        txt.style.color = "green"
    }
    else{
        txt.innerHTML = "Veuillez saisir une adresse email valide"
        txt.style.color = "red"
    }
}
document.getElementById("Email").addEventListener('keyup',checkEmail)

let checkPassword=()=>{
    let password = document.getElementById("Password").value
    let txt = document.getElementById("txt_pass")
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(password.match(re)){
        txt.innerHTML = "Password Valide"
        txt.style.color = "green"
    }
    else{
        txt.innerHTML = "Veuillez saisir un mot de passe valide de 8 caractere"
        txt.style.color = "red"
    }
}
document.getElementById("Password").addEventListener('keyup',checkPassword)



let Confirm_Password=()=>{
    let password = document.getElementById("Password").value

    let C_password = document.getElementById("confirm-password").value
    let txt = document.getElementById("txt_Cpass")
    if(password ==C_password){
       
        txt.innerHTML = "Mot de passe vérifié"
        txt.style.color = "green"
    
    }
    else{
        txt.innerHTML = "Ce mot de passe n'est pas similaire"
        txt.style.color = "red"
    }
    


}
document.getElementById("confirm-password").addEventListener('keyup',Confirm_Password)



let check_validation=()=>{
        let username = document.getElementById("Username")
        let txt_user = document.getElementById("txt_user")
        let password = document.getElementById("Password")
        let txt_pass = document.getElementById("txt_pass")
        let email = document.getElementById("Email")
        let txt_email = document.getElementById("txt_email")
        let C_password = document.getElementById("confirm-password")
        let txt_Cpass = document.getElementById("txt_Cpass")
        if(username.value == "" ){
            txt_user.innerHTML="Champ Obligatoire"
            txt_user.style.color = "red"
            username.focus()
            return false
    
        }
        else if(email.value==""){
            txt_email.innerHTML="Champ Obligatoire"
            txt_email.style.color = "red"
            email.focus()
            return false
        }
        else if(password.value==""){
            txt_pass.innerHTML="Champ Obligatoire "
            txt_pass.style.color = "red"
            password.focus()
            return false
        }
        else if(C_password.value==""){
            txt_Cpass.innerHTML="Champ Obligatoire"
            txt_Cpass.style.color = "red"
            C_password.focus()
            return false
        }
        else{
            window.location.href = '/index.html';
            return true
        }
}
