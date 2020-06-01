
document.getElementById('button-submit').addEventListener('click', send);

let username = document.getElementById("inputUsername").value
let password = document.getElementById("inputPassword").value

function send(){
    let username = document.getElementById("inputUsername").value
    let password = document.getElementById("inputPassword").value
    errors = validateUser();
    if(errors.length === 0){
        checkuser(username, password);
    }else {
      alert('Please enter all fields')
    }  
} 

function checkuser(){
    let username = document.getElementById("inputUsername").value
    let password = document.getElementById("inputPassword").value

    if(username === 'chloe' && password === '123'){
        window.location.href = '../Pages/my_channel.html';
        
    }else if(username === 'chloe' && password !== '123'){
        alert('Incorrect password');

    }else{
        alert('User does not exist. Please create new user');
    }
}

function validateUser(){

    let username = document.getElementById("inputUsername").value
    let password = document.getElementById("inputPassword").value

    errors = []
    console.log(username);
    if(username.length === 0){
        errors.push('username');
    }else if (password.length === 0){
        errors.push('password');
    }

    return errors;
}



