function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
};

let passHell = console.log(makeid(10));

function run(){
    var password = prompt("Password Please");
    //Change to your own Password
    if(password != 'OVERSEER_0-1' | 'OVERSEER_0-2' | 'OVERSEER_0-3' | 'CREATOR!0!' | 'USER-PROOT_V1' | makeid(10)){
    document.body.innerHTML = '';
    document.body.innerHTML = 'Password Failed! Reload to Renter Password';
    }else{
    alert('Success');
    }
}
run();

