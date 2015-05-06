$(document).ready(function(){
// click handeler function that has a `hide` method effect attched to our link
$('a').click(function(){
  event.preventDefault();
  $(this).hide('slow');
  });
});
