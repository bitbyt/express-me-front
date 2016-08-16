$(document).ready(function() {
  var $exportTable = $('.export-table');
  var $exportContent = $('.export-content');
  var $button = $('#enlighten');
  var $forecastSection = $('#forecast');
  var $forecast  = $("#forecast-template").html();
  var forecastTemplate = Handlebars.compile($forecast);

  $button.click(function(){
    $('html, body').animate({
      scrollTop: $forecastSection.offset().top
    }, 1000);
  });

  var loadWeather = function () {
  $.ajax({
    url: 'https://damp-reef-19244.herokuapp.com/me',
     type: 'GET',
     dataType: "json",
   }).done(successFunction)
     .fail(failFunction);
  };

  //success function
  function successFunction(data) {
    console.log(data);
    var me = data;
    $exportContent.append(forecastTemplate(me));
  };

  // fail function
 function failFunction(request, textStatus, errorThrown) {
       alert(request.status + " " + textStatus + " " + errorThrown);
 };

  loadWeather();

});
