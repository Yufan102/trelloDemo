
function check() {

    var email = document.getElementById("email-space").value;
    var password = document.getElementById("password-space").value;

    if (email == "" || password == "") {
        document.getElementById("error").innerHTML = "Please complete fields"
        return false;
    }

    else if (password.length < 6) {
        document.getElementById("error").innerHTML = "Password must be at least six characters"
        return false;
    }

    else {
        alert("Logged in");
        return true;
    }

}
