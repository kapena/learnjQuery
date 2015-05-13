// 4.13

// Write an event handler that will fire whenever the value within the `keyup` event is triggered on the `#nights` form field.

$(document).ready(function() {
    $('.tour').on('keyup','#nights',function(){
        // Get the total number of nights
    });
});


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
