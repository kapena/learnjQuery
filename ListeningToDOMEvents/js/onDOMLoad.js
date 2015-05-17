// 4.3
// Once the DOM has loaded, alert the number of photos we have available by using the `length` property.

$(document).ready(function(){
    // alert the number of images on the page
    alert($('img').length);
});


// 4.4

// Once the DOM has loaded, let's add an event handler to watch for a `click` on `button` elements.

// Just to make sure this doesn't impact anything else on the page, only watch for `clicks` on `buttons` within the #tour element.

$(document).ready(function(){
    // an event handeler to watch for a `click` on the `button` elements that have an id of `#tour`
    $('#tour').on('click','button',function(){
        //
    });
});

// 4.5
// In this new click event handler, show the `.photos` element by querying the DOM for it then calling `slideDown`. This will draw the eye to the photos by adding a little movement.

$(document).ready(function(){
    $('#tour').on('click','button',function(){
    // all photos slide down we click on the button
    $('.photos').slideDown();
    });
});


// 4.6
// The photos will now be shown, but we have no way of hiding them. Let's change this to use slideToggle so that the photos will be hidden if they click again.
$(document).ready(function(){
    $('#tour').on('click','button',function(){
        // when we click on and off the button our photos will appear and then dissapear
        $('.photos').slideToggle();
    });
});

// 4.8

// Write an event handler that watches for `mouseenter` on any `li` elements within our `.photos` elements and runs an empty function.

$(document).ready(function(){

// event handler watching for mouseenter on any `li` elements
    $('.photos').on('mouseenter','li',function(){
    });

    $('#tour').on('click','button',function(){
        $('.photos').slideToggle();
    });
});

// 4.9
// In our new `mouseenter` event handler, call `slideToggle` on the span tag within the picture description.

$(document).ready(function(){

    // event handler watching for mouseenter on any `li` elements
    $('.photos').on('mouseenter','li',function(){
        // traversing down the DOM and finding the span element at which I  call the slideToggle method on.
        $(this).closest('li').find('span').slideToggle;
    });

    $('#tour').on('click','button',function(){
        $('.photos').slideToggle();
    });
});

// 4.10
// Write another event handler that targets the same elements, but calls slideToggle only on the mouseleave event.

$(document).ready(function(){

    $('#tour').on('click','button',function(){
        $('.photos').slideToggle();
    });

    // event handler watching for `mouseenter` on any `li` elements
    $('.photos').on('mouseenter','li',function(){
        // traversing down the DOM and finding the span element at which I then call the slideToggle method on.
        $(this).find('span').slideToggle;
    });

    // event handeler watching for `mouseleave` on any `li` elements

    $('.photos').on('mouseleave','li',function(){
        // traversing down the DOM and finding the span element at which I then call the slideToggle method on.
        $(this).find('span').slideToggle();
    });
});


// 4.11 Named functions
$(document).ready(function(){
    $('#tour').on('click','button',function(){
        $('.photos').slideToggle();
    });

function showPhotos () {
    $(this).find('.span').slideToggle();
}

// using our function showPhotos to exicute our slideing effect when the mouse hovers over the each of the images.

// see how we are using our showPhotos function to find the span element inside of the on method.

$('.photos').on('mouseenter','li',showPhotos);
$('.photos').on('mousleave','li',showPhotos);

});
