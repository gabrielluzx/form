
function showAsError(elem){
	elem.focus();
	elem.style.outlineColor = "red";
	elem.onclick = (function(){elem.style.outlineColor = "unset";});
}
function inputValidation(){
	let nameRegex = /[a-zA-Z\s]{3,}/;
	let emailRegex = /[a-z\d\s]+@[a-z]{4,}\.[a-z]{2,}(\.[a-z]{2})?/;
	let passwordRegex = /[\w\d]{8,12}/;
	//let output = document.getElementById("output-message");
	let userName = document.getElementById("userName");
	let userEmail = document.getElementById("userEmail");
	let userPassword = document.getElementById("userPassword");
	let checkbox = document.getElementById("policyPrivacyCheckbox");
	if(nameRegex.test(userName.value)){
		if(emailRegex.test(userEmail.value)){
			if(passwordRegex.test(userPassword)){
				if(checkbox.checked){
					return true;
				}
			}
		}
	}
}
function passwordMatchs(){
	let password = document.getElementById("userPassword").value;
	let confirmPassword = document.getElementById("userConfirmPassword").value;
	let output = document.getElementById("output-message");
	output.textContent = (password == confirmPassword) ? "." : "As senhas não batem";
}