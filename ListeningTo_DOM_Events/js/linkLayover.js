// 4.18
$(document).ready(function(){
    // Event handeler that will target all links
    // with the class of .see-photos when clicked on
    $('.see-photos').on('click',function(){

    });
});

// 4.19
$(document).ready(function(){
    // Event handeler that will target all links
    // with the class of .see-photos when clicked on
    $('.see-photos').on('click',function(){
        // once the link is clicked show the photos for the clicked tour
        $(this).closest('.tour').find('.photos').slideToggle();
    });
});

// 4.20
$(document).ready(function(){
    // adding a link event parameter
    $('.see-photos').on('click',function(event){
        // stopPropagination prevents any parent handlers from being
        // notified of the event
        event.stopPropagination();
        // once the link is clicked show the photos for the clicked tour
        $(this).closest('.tour').find('.photos').slideToggle();
    });

    // this event should be silenced forever more!
    $('.tour').on('click',function(){
        alert('this must not be called!!');
    });
});

// 4.21
$(document).ready(function(){
    $('.see-photos').on('click',function(event){
        // preventDefault fixes our page jumping issue
        event.preventDefault();
        // stopPropagation stops our second event from being fired.
        event.stopPropagation();
        $(this).closest('.tour').find('.photos').slideToggle();
    });

    // this event will not be fired 
    $('.tour').on('click',function(event){
        alert('This should not be called!');
    });
});
