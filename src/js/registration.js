$(document).ready(function() {
  var step = $('.form-registration').children('.form-registration__step');
  function currentStep() {
    var stepReg = sessionStorage.getItem('regStep');
    if ((stepReg == null ) || (stepReg == '0')) {
      $(step[0]).show();
      $('.step1').addClass('btn-warning');
      $('.step2').prop('disabled', true);
      $('.step3').prop('disabled', true);
    }
    switch (stepReg) {
      case '1':
        $(step[1]).show();
        $('.step1').addClass('btn-success');
        $('.step1').removeClass('btn-warning');
        $('.step2').addClass('btn-warning');
        $('.step2').prop('disabled', false);
        $('.step3').prop('disabled', true);
        break;
      case '2':
        $(step[2]).show();
        $('.step1').addClass('btn-success');
        $('.step2').addClass('btn-success');
        $('.step2').removeClass('btn-warning');
        $('.step3').addClass('btn-warning');
        $('.step3').prop('disabled', false);
        break;
      case '3':
        $(step[3]).show();
        $('.stepwizard').hide();
      default:
        $(step[0]).show();
        $('.step1').addClass('btn-warning');
        $('.step2').prop('disabled', true);
        $('.step3').prop('disabled', true);
    }
  };
  
  var storage = {
    step1: {
      sLogin: null,
      sPassword: null,
      sEmail: null
    },
    step2: {
      sName: null,
      sSname: null,
      sAge: null
    },
    step3: {
      sCountry: null,
      sCity: null,
      sSteet: null
    }
  };
  $('.step1').click(function() {
    $(step[0]).show();
    $(step[1]).hide();
    $(step[2]).hide();
    login = parse.step1.sLogin;
    email = parse.step1.sEmail;
    password = parse.step1.sPassword;
  });

  $('.step2').click(function() {
    $(step[1]).show();
    $(step[0]).hide();
    $(step[2]).hide();
    name = parse.step2.sName;
    sname = parse.step2.sSname;
    age = parse.step2.sAge;
  });

  $('.step3').click(function() {
    $(step[2]).show();
    $(step[1]).hide();
    $(step[0]).hide();
    country = parse.step3.sCountry;
    city = parse.step3.sCity;
    street = parse.step3.sStreet;
  });

  currentStep();
  function lightningRed(item) {
    $(item).css('border', '3px solid red');
  }
  function lightningReset(item) {
    $(item).css('border', '');
  }

  $('#form-reg_step1').submit(function(event) {
    var login = $('#login').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var emailCheck = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(email));
      
    event.preventDefault();
    if ((login.length < 3) || (login.length == '')) {
      alert('Ошибка ввода логина');
      lightningRed('#login');
      $('.step1').addClass('btn-danger');
      return;
    }
    if ((email.length < 5) || (!emailCheck)) {
      alert('Ошибка ввода Email.');
      lightningRed('#email');
      $('.step1').addClass('btn-danger');
      return;
    }
    if ((password.length < 6) || (password == '')) {
      alert('Ошибка ввода пароля');
      lightningRed('#password');
      $('.step1').addClass('btn-danger');
      return;
    }
    storage.step1.sLogin = login;
    storage.step1.sEmail = email;
    storage.step1.sPassword = password;
    var str = JSON.stringify(storage);
    sessionStorage.setItem('storage', str);
    lightningReset('#login');
    lightningReset('#email');
    lightningReset('#password');
    $('.step1').removeClass('btn-danger');
    $('.step1').addClass('btn-success');
    $('.step1').removeClass('btn-warning');
    $('.step2').addClass('btn-warning');
    $('.step2').prop('disabled', false);
    $(step[1]).show();
    $(step[0]).hide();
    registrationStep = 1;
    sessionStorage.setItem('regStep', registrationStep);
  });

  $('#form-reg_step2').submit(function(event) {
    var name = $('#name').val();
    var sname = $('#sname').val();
    var age = $('#age').val();
    var ageCheck = (/[a-zA-Z]/.test(age));
    event.preventDefault();
    if ((name.length == '') || (name.length < 2)) {
      alert('Ошибка ввода имени');
      $('.step2').addClass('btn-danger');
      lightningRed('#name');
      return;
    }

    if ((sname.length == '') || (sname.length < 2)) {
      alert('Ошибка ввода фамилии');
      $('.step2').addClass('btn-danger');
      lightningRed('#sname');
      return;
    }

    if ((age.length == '') || (ageCheck)) {
      $('.step2').addClass('btn-danger');
      alert('Ошибка ввода возраста');
      lightningRed('#age');
      return;
    }

    storage.step2.sName = name;
    storage.step2.sSname = sname;
    storage.step2.sAge = age;
    var str = JSON.stringify(storage);
    sessionStorage.setItem('storage', str);
    registrationStep = 2;
    sessionStorage.setItem('regStep', registrationStep);
    lightningReset('#sname');
    lightningReset('#name');
    lightningReset('#age');
    $('.step2').removeClass('btn-danger');
    $('.step2').addClass('btn-success'); 
    $('.step2').removeClass('btn-warning');
    $('.step3').addClass('btn-warning');
    $('.step3').prop('disabled', false);
    $(step[2]).show();
    $(step[1]).hide();
  });

  $('#form-reg_step3').submit(function(event) {
    var country = $('#country').val();
    var city = $('#city').val();
    var street = $('#street').val();
    event.preventDefault();
    if ((country.length == '') || (country.length < 3)) {
      alert('Ошибка ввода страны');
      $('.step3').addClass('btn-danger');
      lightningRed('#country');
      return;
    }
    if ((city.length == '') || (city.length < 3)) {
      alert('Ошибка ввода города');
      $('.step3').addClass('btn-danger');
      lightningRed('#city');
      return;
    }
    if ((street.length == '') || (street.length < 3)) {
      alert('Ошибка ввода улицы');
      $('.step3').addClass('btn-danger');
      lightningRed('#street');
      return;
    }  
    storage.step3.sCountry = country;
    storage.step3.sCity = city;
    storage.step3.sSteet = street;
    var str = JSON.stringify(storage);
    sessionStorage.setItem('storage', str);
    registrationStep = 3;
    lightningReset('#country');
    lightningReset('#city');
    lightningReset('#street');
    $('.step3').removeClass('btn-danger');
    $('.step3').addClass('btn-success');
    $('.step3').removeClass('btn-warning');
    $('.stepwizard').hide();
    $(step[2]).hide();
    $(step[3]).show();
    sessionStorage.removeItem('storage');
    sessionStorage.removeItem('regStep');
  });
});