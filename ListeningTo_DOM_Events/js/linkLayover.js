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
