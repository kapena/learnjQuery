$(document).ready(function(){
    // when the tour class is clicked we append a message to `this`
    $('.tour').on('click',function(){
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    // this is refferancing the clicked li and appending the message bellow the button
    $(this).append(message);
    // finding the our 'button' and removing it once we click on the `tour` element which will display the message under where the button used to be located
    $(this).remove();
    $(this).find('button').remove();
    });
});
