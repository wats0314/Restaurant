function resetForm(){
		document.getElementById("name").value = "";
		document.getElementById("email").value = "";
		document.getElementById("phone").value = "";
		document.getElementById("contactReason").value = "default";
		document.getElementById("addInfo").value = "";
		document.getElementById("checkbox1").checked = false;
		document.getElementById("checkbox2").checked = false;
		document.getElementById("checkbox3").checked = false;
		document.getElementById("checkbox4").checked = false;
		document.getElementById("checkbox5").checked = false;
		document.getElementById("noBox").checked = true;
}

function clearErrors(){
	document.getElementById("name").className = "form-control";
	document.getElementById("email").className = "form-control";
	document.getElementById("phone").className = "form-control";
}
	


function validate(){
	
	clearErrors();
	
	
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
		
	
	if (name == ""){alert("You must enter your name!");
		document.getElementById("name").className = "form-control is-invalid";
	return false;}
	else {document.getElementById("name").className = "form-control is-valid"}
	
	
	if (email == ""){alert("You must enter an Email!");
			document.getElementById("email").className = "form-control is-invalid";
	return false;}
	else {document.getElementById("email").className = "form-control is-valid"}


	if (phone == ""){alert("You must enter a phone number!");
	document.getElementById("phone").className = "form-control is-invalid";
	return false;}
	else {document.getElementById("phone").className = "form-control is-valid";
	alert("Thank you for your submission! We will be in contact with you soon!")}
	
	return false
	}
	