
function validateName() {
    var name = document.getElementById('name');    
    var errorName = document.getElementById('nameError')

    if(name.value == 0) {
        errorName.innerHTML = "Rellene este campo";
        name.classList.add("invalid");
        name.classList.remove("valid");
        name.classList.add("errorIcon");
        name.classList.remove("sucessIcon");
        return false;
    }

    else if(/^[A-Za-z\s]+$/.test(name.value)) {
        name.classList.remove("invalid");
        name.classList.add("valid");
        name.classList.add("sucessIcon");
        name.classList.remove("errorIcon");
        errorName.innerHTML ="";
        return true;
    }

    else {
        errorName.innerHTML = "Nombre inválido";
        name.classList.add("invalid");
        name.classList.remove("valid");
        name.classList.add("errorIcon");
        name.classList.remove("sucessIcon");
        return false;
    }
}

function validateEmail(){
	var email = document.getElementById('email');
	var errorEmail = document.getElementById('emailError');

	if(email.value == 0){
		errorEmail.innerHTML = "Rellene este campo";
		email.classList.add("invalid");
        email.classList.remove("valid");
        email.classList.add("errorIcon");
        email.classList.remove("sucessIcon");
		return false; 
	}

	else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) ){
        errorEmail.innerHTML = "";
        email.classList.add("valid");
		email.classList.remove("invalid");
        email.classList.add("sucessIcon");
        email.classList.remove("errorIcon");
		return true; 
	}
    
	else {
		errorEmail.innerHTML = "Email inválido";
		email.classList.add("invalid");
        email.classList.remove("valid");
        email.classList.add("errorIcon");
        email.classList.remove("sucessIcon");
		return false; 
	}
} 

function validatePassword() {
    var password = document.getElementById('password');
    var errorPassword = document.getElementById('passwordError');

    if(password.value == 0) {
        errorPassword.innerHTML = "Rellene este campo";
        password.classList.add("invalid");
        password.classList.remove("valid");
        password.classList.add("errorIcon");
        password.classList.remove("sucessIcon");
        return false;
    }

    else if(/(?=.{8,})/.test(password.value)) {
        errorPassword.innerHTML = "";
        password.classList.add("valid");
        password.classList.remove("invalid");
        password.classList.add("sucessIcon");
        password.classList.remove("errorIcon");
        return true;
    }

    else {
        errorPassword.innerHTML = "Debe tener al menos 8 caracteres";
        password.classList.add("invalid");
        password.classList.remove("valid");
        password.classList.add("errorIcon");
        password.classList.remove("sucessIcon");
	return false;
    }
}

function validateConfirmation() {
    var password = document.getElementById('password');
    var confirmation = document.getElementById('confirmation');
    var errorConfirm = document.getElementById('confirmationError');

    if(confirmation.value == 0) {
        errorConfirm.innerHTML = "Rellene este campo";
        confirmation.classList.add("invalid");
        confirmation.classList.remove("valid");
        confirmation.classList.add("errorIcon");
        confirmation.classList.remove("sucessIcon");
        return false;
    }

    else if(password.value == confirmation.value) {
        errorConfirm.innerHTML = "";
        confirmation.classList.add("valid");
        confirmation.classList.remove("invalid");
        confirmation.classList.add("sucessIcon");
        confirmation.classList.remove("errorIcon");
        return true;
    }

    else {
        errorConfirm.innerHTML = "Las contraseñas no coinciden";
        confirmation.classList.add("invalid");
        confirmation.classList.remove("valid");
        confirmation.classList.add("errorIcon");
        confirmation.classList.remove("sucessIcon");
        return false;
    }
}

function borderButton(){
	var borderButton = document.getElementById('button');
	    borderButton.onmouseover =() => {borderButton.classList.add('borderColor'); }
	    borderButton.onmouseout =() => {borderButton.classList.remove('borderColor'); }
}

function alert_text() {
    return alert("La inscripción ha sido correcta");
}

function validateForm() {
    if (validateName() && validateEmail() && validatePassword() && validateConfirmation()) {
        alert_text()
        return true
    }

    else { 
        return false;
    }
}

const nombre = document.getElementById('name');
nombre.addEventListener("input", () => {
    return validateName();
})

const email = document.getElementById('email');
email.addEventListener("input", () => {
    return validateEmail();
})

const password = document.getElementById('password');
password.addEventListener("input", () => {
    return validatePassword();
})

const confirmation = document.getElementById('confirmation');
confirmation.addEventListener("input", () => {
    return validateConfirmation();
})