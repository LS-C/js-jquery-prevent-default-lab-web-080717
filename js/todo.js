



$(document).ready(function(){

submitForm();
  // call functions here
});

// define functions here



function submitForm(){
  $('form').on('submit', function(event){
    var new_task = $('#item').val();
    $('ol').append( '<li>' + new_task + '</li>' );
    event.preventDefault();
  });
}




