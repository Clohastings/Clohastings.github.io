
const init = function(){
  document.getElementById('button-cancel').addEventListener('click', reset);
  document.getElementById('button-send').addEventListener('click', send);
}

const reset = function(ev){
  ev.preventDefault();
  document.getElementById('form-user').reset();

}

const send = function(ev){
  ev.preventDefault();
  ev.stopPropagation();

  let fails = validate();
  if(fails.length === 0){
    //good to go
    document.getElementById('form-user').submit();
}else {
    fails.forEach(function(obj){
        let field = document.getElementById(obj.input);
        field.parentElement.classList.add('error');
        field.parentElement.setAttribute('data-errormsg', obj.msg);
    })
  }  

} 

const validate = function(ev){

  let valid = false;
  let failures = []

  let first = document.getElementById("firstname");
  let last = document.getElementById('lastname');
  let email = document.getElementById('email');
  let username = document.getElementById('Username');
  let password = document.getElementById('password');

  if (first.value === ""){
    failures.push({input:'firstname', msg:'Required Field'})
  }
  if (last.value === ""){
    failures.push({input:'lastname', msg:'Required Field'})
  }
  if (email.value === ""){
    failures.push({input:'email', msg:'Required Field'})
  }
  if (username.value === ""){
    failures.push({input:'Username', msg:'Required Field'})
  }
  if (password.value === ""){
    failures.push({input:'password', msg:'Required Field'})
  }

  return failures;
  
}

document.addEventListener('DOMContentLoaded', init)
