

function clearErrors(){									//removes "is-invalid" class stylization
	document.getElementById("name").className = "form-control";	
	document.getElementById("email").className = "form-control";
	document.getElementById("phone").className = "form-control";
}
	
function resetForm(){									//resets form to initial state
		clearErrors();
		document.getElementById("name").value = "";
		document.getElementById("email").value = "";
		document.getElementById("phone").value = "";
		document.getElementById("contactReason").value = "default";
		document.getElementById("addInfo").value = "";
		document.getElementById("checkbox1").checked = true;
		document.getElementById("checkbox2").checked = true;
		document.getElementById("checkbox3").checked = true;
		document.getElementById("checkbox4").checked = true;
		document.getElementById("checkbox5").checked = true;
		document.getElementById("noBox").checked = true;
		document.getElementById("name").focus(); 		//moves cursor back to name field 
}




function validate(){ //primary function to be excecuted upon submission, returns false to prevent form submission.
	
	clearErrors(); //clears error stylizing before validating form contents. 
	
	
	var name = document.getElementById("name").value; 
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
		
	
	if (name == ""){alert("You must enter your name!");  //alerts user to enter name, adds red border around needed field, stops function returns cursor to name input
		document.getElementById("name").className = "form-control is-invalid";
		document.getElementById("name").focus();	
		return false;}
	else {document.getElementById("name").className = "form-control is-valid"}
	
	
	if (email == ""){alert("You must enter an Email!"); //alerts user to enter email, adds red border around needed field, stops function, returns cursor to email input
			document.getElementById("email").className = "form-control is-invalid";
			document.getElementById("email").focus();
		return false;}
	else {document.getElementById("email").className = "form-control is-valid"}


	if (phone == ""){alert("You must enter a phone number!"); //alerts user to enter phone, adds red border around needed field, stops function, returns cursor to phone input.
	document.getElementById("phone").className = "form-control is-invalid";
	document.getElementById("phone").focus();
		return false;}
	else {document.getElementById("phone").className = "form-control is-valid";
	alert("Thank you for your submission! We will be in contact with you soon!")}
	
	
	return false //prevents the form from submitting
}
	