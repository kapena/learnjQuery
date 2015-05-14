// 4.13

// Write an event handler that will fire whenever the value within the `keyup` event is triggered on the `#nights` form field.

$(document).ready(function() {
    $('.tour').on('keyup','#nights',function(){
        // Get the total number of nights
    });
});

// 4.14
// Within our event handler, update the number of nights in the `#nights-count` element to whatever the traveler entered in the `#nights` form field.

$(document).ready(function() {
    $('.tour').on('keyup','#nights',function(){
        // Get the total number of nights by updating the `nights-count` element to what the traveler entered

        // finding the `nights-count` id then using the `text()` method
        // to access the value from value within the form with the
        // `val()` method.
        $('#nights-count').text($(this).val());

    });
});


// 4.15
//  Set the content of the `#total` element to the number the traveler has entered into the form field multiplied by the daily price.

$(document).ready(function(){
    $('.tour').on('keyup',function(){
        $('#nights-count').text($(this).val());
        // setting a varaible that contains the dailyPrice rate
        var dailyPrice =+$(this).cloeset('.tour').data('daily-price');
        // setting a varaible that contains the number of nights
        // the user wishes to stay
        var nights =+$(this).val();

        // multiplying dailyPrice and nights to get the full rate
        $('#total').text(dailyPrice * nights);    
    });
});
