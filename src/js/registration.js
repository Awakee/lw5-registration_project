$(document).ready(function(){
  var currentStep = 0;
  var step = $("form").children(".form-registration__step");
  $(step[0]).show();
  $("a.next").click(function() {
    if(currentStep == step.length-2) {
      $(this).hide();
      $("form input[type=submit]").show();
    }
  $("a.back").show();
  currentStep++;
  changeStep(currentStep);
  });
  
  
  $("a.back").click(function() {
  if(currentStep == 1) {
    $(this).hide()
  }
  $("form input[type=submit]").hide();
  $("a.next").show();
  currentStep--;
  changeStep(currentStep);
  });

  function changeStep(i) {
    $(step).hide();
    $(step[i]).show();
  }

  $('#form-registration').submit(function(event){
    var login = $("#login").val();//
    var email = $("#email").val();//
    var password = $("#password").val();//
    var name = $("#name").val();//
    var sname = $("#sname").val();//
    var age = $("#age").val();//
    var country = $("#country").val();//
    var city = $("#city").val();
    var street = $("#street").val();
    var emailCheck = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(email));
    event.preventDefault;
    
  if ((email.length < 5) || (!emailCheck)) {
    alert("Ошибка ввода Email.");
    return;
  }

  if ((password.length < 6) || (password == "")) {
    alert("Ошибка ввода пароля");
    return;
  }

  if ((login.length < 3) || (login.length == "")){
    alert("Ошибка ввода логина");
    return;
  }
 
  if (sname.length == "") {
    alert("Ошибка ввода фамилии");
    return;
  }

  if (name.length == "") {
    alert("Ошибка ввода имени");
    return;
  }

  if (age.length == "") {
    alert("Ошибка ввода возраста");
    return;
  }

  if (country.length == "") {
    alert("Ошибка ввода страны");
    return;
  }
  
  if (city.length == "") {
    alert("Ошибка ввода города");
    return;
  }

  if (street.length == "") {
    alert("Ошибка ввода улицы");
    return;
  }

    alert("Registration completed");
  });
});