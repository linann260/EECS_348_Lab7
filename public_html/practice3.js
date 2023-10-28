//Purpose: JS code Lab 7 Practice 3

//Function that validates two passwords and prints corresponding alert message.
function validate(){
    //Sets the values from text field into corresponding variables
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    //Alert message if pass1 is less than 8 characters
    if (pass1.length < 8){
        alert("The length of the new password is less than 8 letters.")
    }

    //ALert message if pass1 is at least 8 characters but pass2 is less than 8 characters
    else if (pass2.length < 8){
        alert("The length of the re-entered password is less than 8 letters.")
    }
    
    //Alert message is pass1 and pass2 are at least 8 characters but don't match
    else if (pass1 != pass2){
        alert("Passwords don't match.")
    }

    //Alert messsage if pass1 and pass2 are at least 8 characters and match
    else{
        alert("Password verification successful.")
    }
}