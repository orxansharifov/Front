var myForm=document.querySelector("form");
let agreeCheck=document.querySelector("input[name='checkBox']")
let mybtn=document.querySelector(".clickBtn");

agreeCheck.addEventListener('click',function(){
    if(this.checked){
        mybtn.removeAttribute('disabled')
    }
    else{
        mybtn.setAttribute('disabled', true)
    }
})

var persName=document.querySelector("input[name='Name']")
var surname=document.querySelector("input[name='surname']")
var middlename=document.querySelector("input[name='middlename']")
var country=document.querySelector("input[name='country']")
var city=document.querySelector("input[name='city']")
var address=document.querySelector("input[name='address']")
var phone=document.querySelector("input[name='phone']")
var email=document.querySelector("input[name='email']")
var age=document.querySelector("input[name='age']")
var gender=document.querySelectorAll("input[name='gender']")
var selectInput=document.querySelector("select[name='socialPosit']")
var appeal1=document.querySelectorAll("input[name='typeofappeal1']")
var appeal2=document.querySelector("select[name='typeofappeal2']")
var appealText=document.querySelector("textarea[name='appealText']")
let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8})/;
let regexName=/^[a-zA-Z ]+$/;
let regexAddress=/^\s*\S+(?:\s+\S+){2}/;
let regexPhone=/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
let regexAge=/^\S[0-9]{0,3}$/;
let regexTextArea=/^[A-Za-z0-9.]{5,1000}$/;

myForm.addEventListener('submit',function(e){
    e.preventDefault();
    if(!persName.value.match(regexName)){
        // error1.style.display='block'
        persName.nextElementSibling.style.display="block"

    }
     if(persName.value == "" || persName.value == null){
        // error2.style.display='block'
        // persName.nextElementSibling.style.display="block"

    }
    if(!surname.value.match(regexName)){
        surname.nextElementSibling.style.display='block'
    }
    if(!middlename.value.match(regexName)){
        middlename.nextElementSibling.style.display='block'
    }
    if(!country.value.match(regexName)){
        country.nextElementSibling.style.display="block"
        // error1.style.display='block'

    }
    if(!city.value.match(regexName)){
        city.nextElementSibling.style.display="block"
        // error1.style.display='block'

    }
    if(!address.value.match(regexAddress)){
        address.nextElementSibling.style.display="block"
        // error1.style.display='block'

    }
    if(!phone.value.match(regexPhone)){
        phone.nextElementSibling.style.display='block'
    }
    if(!email.value.match(regexEmail)){
        email.nextElementSibling.style.display='block'
    }
    if(!age.value.match(regexAge)){
        age.nextElementSibling.style.display='block'
    }
    if(selectInput.value==""){
        selectInput.nextElementSibling.style.display='block'
    }
    if(appeal2.value==""){
        appeal2.nextElementSibling.style.display='block'
    }
   
    if(!appealText.value.match(regexTextArea)){
        appealText.nextElementSibling.style.display='block'
    }

    if (checkRadio(gender) == false) {
     document.querySelector('.error1').style.display= "block"  
     }
    else{
    document.querySelector('.error1').style.display= "none"  

     }
    
    if (checkRadio(appeal1) == false) {
    document.querySelector('.error').style.display= "block !important"  
    }

         
})


function checkRadio(Gelenitem) {
    var result = false;
    Gelenitem.forEach(element => {
        if (element.checked == true) {
            result = true;
        }
    });
    return result;
}
// function checkRadioA(item) {
//     var result = false;
//     item.forEach(element => {
//         if (element.checked == true) {
//             result = true;
//         }
//     });
//     return result;
// }