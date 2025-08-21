function run() {
    if (sessionStorage.getItem("authenticated") !== "true") {
        var password = prompt("Enter your password.");
        if(password === 'OVERSEER_0-1' || 
           password === 'OVERSEER_0-2' || 
           password === 'OVERSEER_0-3' || 
           password === 'MA!NTNENCE' || 
           password === '_SC!ENT1ST_' || 
           password === 'CREATOR!0!' || 
           password === 'USER-PROOT_V1') {
            alert("Success");
            sessionStorage.setItem("authenticated", "true");
        } else {
            alert("Wrong Password!");
            window.location.href = "start2.html";  // Redirect to another page
        }
    }
}
run();

