overLimit = false;
volumeMeter(function(level) {
    // If higher than the value in our cookie, fire
    if (level > Cookies.get("max-volume")) {
        overLimit = true;
    } else if (level < Cookies.get("reset-volume")) {
        overLimit = false;
    }

    if (overLimit) {
        $(".herriemeter").addClass("overlimit");
    } else {
        $(".herriemeter").removeClass("overlimit");
    }
});
