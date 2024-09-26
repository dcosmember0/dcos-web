function run(){
    var password = prompt("Enter your password.");
    // Change to your own Password
    if(password === '[HELLSPAWN]') {
        alert("Success");
    } else {
        alert("Wrong Password!");
        window.location.href = "start2.html";  // Redirect to another page
    }
}
run();
//Currently doesn't work.