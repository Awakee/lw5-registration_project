$(document).ready(function(){

  //функция переключения форм.
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


  //функция для проверки ввода.

  $('#form-registration').submit(function(event){
    event.preventDefault;
    
    alert("Registration completed");

  });
});