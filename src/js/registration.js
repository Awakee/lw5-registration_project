$(document).ready(function(){
  var currentStep = 0;
  var step = $(".form-registration").children(".form-registration__step");
  $(step[0]).show();
  $('.bt1').addClass('btn-warning');
  
  $("#form-reg_step1").submit(function(event){
    var login = $("#login").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var emailCheck = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(email));
    event.preventDefault;
    
    if ((email.length < 5) || (!emailCheck)) {
      alert("Ошибка ввода Email.");
      $('.bt1').addClass('btn-danger');
      return;
    }
  
    if ((password.length < 6) || (password == "")) {
      alert("Ошибка ввода пароля");
      $('.bt1').addClass('btn-danger');
      return;
    }
  
    if ((login.length < 3) || (login.length == "")){
      alert("Ошибка ввода логина");
      $('.bt1').addClass('btn-danger');
      return;
    }
    
    $('.bt1').removeClass('btn-danger');
    $('.bt1').addClass('btn-success'); 
    $('.bt1').removeClass('btn-warning');
    $('.bt2').addClass('btn-warning');

    $(step[1]).show();
    $(step[0]).hide();

  });

  $("#form-reg_step2").submit(function(event){
    var name = $("#name").val();
    var sname = $("#sname").val();
    var age = $("#age").val();
    event.preventDefault;

    if (sname.length == "") {
      alert("Ошибка ввода фамилии");
      $('.bt2').addClass('btn-danger');
      return;
    }
  
    if (name.length == "") {
      alert("Ошибка ввода имени");
      $('.bt2').addClass('btn-danger');
      return;
    }
  
    if (age.length == "") {
      $('.bt2').addClass('btn-danger');
      alert("Ошибка ввода возраста");
      return;
    }
    
    $('.bt2').removeClass('btn-danger');
    $('.bt2').addClass('btn-success'); 
    $('.bt2').removeClass('btn-warning');
    $('.bt3').addClass('btn-warning');
    $(step[2]).show();
    $(step[1]).hide();

  });

  $("#form-reg_step3").submit(function(event){
    var country = $("#country").val();
    var city = $("#city").val();
    var street = $("#street").val();
    event.preventDefault;

    if (country.length == "") {
      alert("Ошибка ввода страны");
      $('.bt3').addClass('btn-danger');
      return;
    }
    
    if (city.length == "") {
      alert("Ошибка ввода города");
      $('.bt3').addClass('btn-danger');
      return;
    }
  
    if (street.length == "") {
      alert("Ошибка ввода улицы");
      $('.bt3').addClass('btn-danger'); 
      return;
    }
    
    $('.bt3').removeClass('btn-danger');
    $('.bt3').addClass('btn-success'); 
    $('.bt3').removeClass('btn-warning');
    $(step[2]).hide();
  });
});