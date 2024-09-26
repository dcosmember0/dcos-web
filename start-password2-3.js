function run() {
    if (sessionStorage.getItem("authenticated") === "true") {
        alert("Already authenticated!");
        return;
    }

    var password = prompt("Enter your password.");
    // Change to your own Password
    if(password === 'OVERSEER_0-1' || 
       password === 'OVERSEER_0-2' || 
       password === 'OVERSEER_0-3' || 
       password === 'MA!NTNENCE' || 
       password === '_SC!ENT1ST_' || 
       password === 'CREATOR!0!' || 
       password === 'USER-PROOT_V1' ||
       password === 'SCIENTIST_C-1') {
        alert("Success");
        sessionStorage.setItem("authenticated", "true");  // Store the success flag
    } else {
        alert("Wrong Password!");
        window.location.href = "start2.html";  // Redirect to another page
    }
}
run();
