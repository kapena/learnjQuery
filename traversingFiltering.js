// 3:17 
$(document).ready(function(){
    $('button').on('click',function() {
        // our discount price is being fetched from the closest element to `.tour` which is the data-discount attribute which is storing the discount price for each tour.
        var discount = $(this).closest('.tour').data('discount');
        //  message is storing a message within a span that gives a phone number
        var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
        // inserting the message
        $(this).closest('.tour').append(message);
        // removing the button once message appears
        $(this).remove();
    });
});


// 3:18
$(document).ready(function(){
    $('button').on('click'.function(){
        // our discount price is being fetched from the closest element to `.tour` which is the data-discount attribute which is storing the discount price for each tour.
        var discount = $(this).closest('.tour').data('discount');
        //  message is storing a message within a span that gives a phone number  and also contains the discount amount the user is recieving
        var message = $('<span> Call 1-555-jquery-air for a $ '+discount+' discount</span>');
        // inserting the message
        $(this).closest('.tour').append('message');
        // removeing the message once
        $(this).remove()
    });
});
