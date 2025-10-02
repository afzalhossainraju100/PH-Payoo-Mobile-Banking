const phoneNumber = document.getElementById('phone-number');
const pin = document.getElementById('pin');
const logInBtn = document.getElementById('log-in-btn');

logInBtn.addEventListener('click', function (e){
    e.preventDefault();
    const phoneNumberFixed = 01902876557;
    const pinFixed = 1234;
    const phoneNumberInt = parseInt(phoneNumber.value);
    const pinInt = parseInt(pin.value);
    if (phoneNumberInt === phoneNumberFixed && pinInt === pinFixed){
        window.location.href = 'home.html';
    }
    else{
        alert('Log In Failed, Try Again');
        return ;
    }
});