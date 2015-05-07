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


// 3:19
$(document).ready(function(){
    $('button').on('click',function(){
        // We are using the $(this).closest('.tour') twice in the above code which is querying the DOM twice. To avoid querying the DOM twice we store $(this).closest('.tour') inside of a varaible

        var tour = $(this).closest('.tour');
        var message = $('<span> Call 1-555-jquery-air for a $ '+discount+' discount </span>');
        var discount = (this).closest('.tour').data('discount');
        // see here we are using our `tour` varaible and then appending our message!
        $(this).closest('tour').append(message);
        $(this).remove();
    });
});


// 3:20
$(document).ready(function(){
    // targeting `button` elements only within `.tour` by using the selector argument inside of the on method
    $('.tour').on('click', 'button',function(){
        var tour = $(this).closest('.tour');
        var discount = (this).closest('.tour').data('discount');
        var message = $('<span> Call 1-555-jquery-air for a $ '+discount+' discount </span>');
        // see here we are using our `tour` variable and then appending our message!
        $(this).closest('tour').append(message);
        $(this).remove();
    });
});

// 3:21
// targeting the filters id and assigning it a `on` method which takes a click event on the .on-onsale class.
$('#filters').on('click','.on-sale',function () {
    // find all vacations on-sale and then add a class of highlighted
});

// 3:22
$('#filters').on('click','.on-sale',function () {
    // find all vacations on-sale and then add a class of highlighted
    $('.tour').filter('.on-sale').addClass('highlight');
});


// 3:23
// 1st filter
$('#filters').on('click','.on-sale',function () {
    // removing class of `highlight` when `featured` is clicked on
    $('.highlight').removeClass('highlight');
    // find all tours `on-sale` and then add a class of `highlight` when `on-sale` is clicked on.
    $('.tour').filter('.on-sale').addClass('highlight');
});

// 2nd filter
$('#filters').on('click','on-sale',function() {
    // find all tours `featured` and add a class of `highlight` when clicked on
    $('.tour').filter('.featured').addClass('highlight');
    /
    // removing the class of `highlight` on `featured` when sale is clicked on
    $('.highlight')removeClass('highlight');
});
