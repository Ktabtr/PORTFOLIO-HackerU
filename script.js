function validate(){
var name = document.getElementById("name").value;
var phone = document.getElementById("phone").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;
var error_message = document.getElementById("error_message");

error_message.style.padding = "10px";

var text;

if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
}
if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
}
if(message.length <= 1){
    text = "Please Enter your message";
    error_message.innerHTML = text;
    return false;
}
alert("Form Submitted Successfully!");
return true;
}