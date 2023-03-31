var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var subjectError=document.getElementById('subject-error');
var messageError=document.getElementById('message-error');
var numberError=document.getElementById('number-error');

function validatename(){
    var name=document.getElementById('name').value;
    if(name.length == 0){
    nameError.innerHTML='name is required';
    return false;
   }
   if(name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
   return true;
   }
  else if(name.match(/^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/)){
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
   return true;
   }
    else if(name.match(/^[a-zA-Z]+$/)){
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
   return true;
   }



   nameError.innerHTML='write full name';
return false;
}


 function validateemail(){

    var email=document.getElementById('email').value;
    var emailRegEx=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    

    if(email.length == 0){
        emailError.innerHTML='Email is required';
        return false;
       }

    if(email.match(emailRegEx)){
        emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
   return true;

        
    }

   emailError.innerHTML='write a valid email id';
   return false;
}

function validatesubject(){
    var subject=document.getElementById('subject').value;
    var mobileregx=/^[6-9]\d{9}$/

    if(subject.length == 0){
        subjectError.innerHTML='number is required';
        return false;
       }
       if(subject.match(mobileregx)){
        subjectError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true; 
       }else{
        subjectError.innerHTML='enter a valid number';
        return false;
       }

       
        

}
function validatemessage(){

    var message=document.getElementById('message').value;
    var required=20;
    var left1=required-message.length;

    if(subject.length == 0){
        messageError.innerHTML='message is required';
        return false;
       }
       if(left1>0){
        messageError.innerHTML=left1 +'more characters required';
 return false;
       }
         messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
         return true;   


}

function validatenumber(){
    var number=document.getElementById('number').value;
    var mobileregx=/^[6-9]\d{9}$/

    if(number.length == 0){
        numberError.innerHTML='number is required';
        return false;
       }
       if(number.match(mobileregx)){
        numberError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true; 
       }else{
        numberError.innerHTML='enter a valid number';
        return false;
       }
}

$(window).scroll(function() {
    if($(this).scrollTop() > 1)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('#navimage').width(155);
    } else {
        $('#navimage').width(286);
    }
});