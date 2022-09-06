const firstname=document.querySelector("#firstname");
const lastname=document.querySelector("#lastname");
const collegename=document.querySelector("#collegename");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const confirmpassword=document.querySelector("#confirmpassword");
const form=document.querySelector(".needs-validation");
const gender=document.querySelector("#gender");
const branch=document.querySelector("#branch");

function debounce(fn,delay=500){
    let timeout;
    return function(...args){
        if(timeout)
        clearTimeout(timeout);
        timeout=setTimeout(function(){
            fn.apply(null,args)
        },delay);
    };
};
form.addEventListener('input',debounce(function(e){
    switch(e.target.id){
        case 'firstname':checkFirstName();break;
        case 'lastname':checkLastName();break;
        case 'collegename':checkCollegeName();break;
        case 'email':checkEmail();break;
        case 'password':checkPassword();break;
        case 'confirmpassword':checkConfirmPassword();break;
        case 'male':checkGender();break;
        case 'female':checkGender();break;
        case 'branch':checkBranch();break;
    }
}));

function showError(id,msg){
    let pid=id.parentElement;
    pid.classList.remove('success');
    pid.classList.add('error');
    let e=pid.querySelector('small');
    e.textContent=msg;
}
function showSuccess(id){
    let pid=id.parentElement;
    pid.classList.remove('error');
    pid.classList.add('success');
    let e=pid.querySelector('small');
    e.textContent='';
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    let fname=checkFirstName(),lname=checkLastName(),e=checkEmail(),pas=checkPassword(),cpas=checkConfirmPassword(),c=checkCollegeName(),g=checkGender(),b=checkBranch();
    if(fname && lname && pas && cpas && c && g && b && e)
    {
        alert("form submitted");
        document.getElementById("page").action='http://localhost/phpacademy/form.php';
    }
    
});

function checkFirstName(){
    let name=firstname.value.trim();
    if(name==''){
        showError(firstname,'This field can not be blank.');
        return false;
    }
    if(name.length<3){
        showError(firstname,'First name should have atleast 3 characters.');
        return false;
    }
    showSuccess(firstname);
    return true;
}
function checkCollegeName(){
    let name=collegename.value.trim();
    if(name==''){
        showError(collegename,'This field can not be blank.');
        return false;
    }
    if(name.length<3){
        showError(collegename,'College name should have atleast 3 characters.');
        return false;
    }
    showSuccess(collegename);
    return true;
}
function checkLastName(){
    let name=lastname.value.trim();
    if(name==''){
        showError(lastname,'This field can not be blank.');
        return false;
    }
    if(name.length<3){
        showError(lastname,'Last name should have atleast 3 characters.');
        return false;
    }
    showSuccess(lastname);
    return true;
}

function isValidEmail(e){
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e));
}
function checkEmail(){
    let e=email.value.trim();
    if(e==''){
        showError(email,'This field can not be blank.');
        return false;
    }
    if(!isValidEmail(e)){
        showError(email,'Invalid email address.');
        return false;
    }
    showSuccess(email);
    return true;
}
function isValidPassword(p){
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(p);
}
function checkPassword(){
    let pas=password.value.trim();
    if(pas==''){
        showError(password,'This field can not be blank.');
        return false;
    }
    if(!isValidPassword(pas)){
        showError(password, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
        return false;
    }
    showSuccess(password);
    return true;
}
function checkConfirmPassword(){
    let cpas=confirmpassword.value.trim(),pas=password.value.trim();
    if(cpas==''){
        showError(confirmpassword,'This field can not be blank.')
        return true;
    }
    if(pas!=cpas){
        showError(confirmpassword,'Password does not match.');
        return false;
    }
    showSuccess(confirmpassword);
    return true;
}
function checkGender(){
    if(document.getElementById('male').checked){
        showSuccess(gender);
        return true;
    }
    if(document.getElementById('female').checked){
        showSuccess(gender);
        return true;
    }
    showError(gender,"Please select your gender.");
    return false;
}
function checkBranch(){
    if(branch.options[branch.selectedIndex].value==0){
        showError(branch,'Please select your branch.');
        return false;
    }
    showSuccess(branch);
    return true;
}
