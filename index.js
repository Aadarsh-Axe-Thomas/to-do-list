let email = document.getElementById("user-email");
let pwd = document.getElementById("user-password");


function validate(){
    let username = "admin"
    let password = "12345"

    if(username==email.value&&password==pwd.value){
        return true;
    }
    else{
        error.innerHTML = "wrong username or password";
		error.style.color = "red";
        return false;
    }
}