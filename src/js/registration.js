$(document).ready(function(){
  var step = $(".form-registration").children(".form-registration__step");

  function currentStep(){
    var stepReg = localStorage.getItem('regStep');
    if ((stepReg == null ) || (stepReg == "0")){
      $(step[0]).show();
      $('.bt1').addClass('btn-warning');
    }
    if (stepReg == "1"){
      $(step[1]).show();
      $('.bt1').addClass('btn-success'); 
      $('.bt1').removeClass('btn-warning');
      $('.bt2').addClass('btn-warning');
    }
    if (stepReg == "2"){
      $(step[2]).show();
      $('.bt1').addClass('btn-success');
      $('.bt2').addClass('btn-success'); 
      $('.bt2').removeClass('btn-warning');
      $('.bt3').addClass('btn-warning');
    }
    if (stepReg == "3"){
      $(step[3]).show();
      $(".stepwizard").hide();
    }

  };

  currentStep();

  login = $("#login").val(sessionStorage.getItem('storageLogin'));
  email = $("#email").val(sessionStorage.getItem('storageEmail'));
  password = $("#password").val(sessionStorage.getItem('storagePassword'));
  name = $("#name").val(sessionStorage.getItem('storageName'));
  sname = $("#sname").val(sessionStorage.getItem('storageSname'));
  age = $("#age").val(sessionStorage.getItem('storageAge'));
  country = $("#country").val(sessionStorage.getItem('storageCountry'));
  city = $("#city").val(sessionStorage.getItem('storageCity'));
  street = $("#street").val(sessionStorage.getItem('storageStreet'));

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

    login = $("#login").val(sessionStorage.setItem('storageLogin', login));
    email = $("#email").val(sessionStorage.setItem('storageEmail', email));
    password = $("#password").val(sessionStorage.setItem('storagePassword', password));
 
    $('.bt1').removeClass('btn-danger');
    $('.bt1').addClass('btn-success'); 
    $('.bt1').removeClass('btn-warning');
    $('.bt2').addClass('btn-warning');

    $(step[1]).show();
    $(step[0]).hide();

    registrationStep = 1;
    localStorage.setItem('regStep', registrationStep);

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

    registrationStep = 2;
    localStorage.setItem('regStep', registrationStep);

    name = $("#name").val(sessionStorage.setItem('storageName', name));
    sname = $("#sname").val(sessionStorage.setItem('storageSname', sname));
    age = $("#age").val(sessionStorage.setItem('storageAge', age));
    
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
    
    registrationStep = 3;
    localStorage.setItem('regStep', registrationStep);

    country = $("#country").val(sessionStorage.setItem('storageCountry', country));
    city = $("#city").val(sessionStorage.setItem('storageCity', city));
    street = $("#street").val(sessionStorage.setItem('storageStreet', street));

    $('.bt3').removeClass('btn-danger');
    $('.bt3').addClass('btn-success'); 
    $('.bt3').removeClass('btn-warning');
    $(".stepwizard").hide();
    $(step[2]).hide();
    $(step[3]).show();
  });
});