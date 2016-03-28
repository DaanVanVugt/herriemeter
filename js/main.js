volumeMeter(function(level) {
    // If higher than the value in our cookie, fire
    if (level > Cookies.get("max-volume")) {
        $('body').css('background-color', 'red');
    } else {
        $('body').css('background-color', 'black');
    }
});
