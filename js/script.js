var wowhead_tooltips = {
    "colorlinks": true,
    "iconizelinks": true,
    "renamelinks": true,
    "hide": {
        "droppedby": true,
        "dropchance": true
    }
};

// Scroll TO

$('a[href^="#"]').click(function(){
    var the_id = $(this).attr("href");

    $('html, body').animate({
        scrollTop:$(the_id).offset().top
    }, 'slow');
    return false;
});

