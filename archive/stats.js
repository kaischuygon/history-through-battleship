var pourcentage = 70;
var total = 112.5;//OUT OF 225 (THE FULL CIRCLE IS 225)

$( document ).ready(function() {
    var result = ((pourcentage * total) / 100);
  
    $('.pie').css('strokeDasharray', result);
});