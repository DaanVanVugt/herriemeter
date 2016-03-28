// Get values from cookie
volumeMin = Cookies.get("reset-volume");
volumeMax = Cookies.get("max-volume");
// Defaults
volumeMin = parseInt(volumeMin) ? parseInt(volumeMin) : 15;
volumeMax = parseInt(volumeMax) ? parseInt(volumeMax) : 25;

$("#volume").slider({
    tooltip: "always",
    value: [volumeMin,volumeMax]
});
min = $("#volume").slider('getAttribute', 'min');
max = $("#volume").slider('getAttribute', 'max');

// Create high slider track number two to measure volume
highTrack = $(".slider .slider-track .slider-track-high");
highTrack.after("<div class='slider-volume-track' style='bottom: 0%; height: 0%'></div>");
tracker = $(".slider-volume-track");
$(".slider-track-low, .slider-track-high, .slider-selection").remove();

overLimit = false;
volumeMeter(function(level) {
    // Calculate height of slider from current level, min and max values
    height = 100*(level - min)/(max-min);
    tracker.css('height', height + '%');

    if (level > $("#volume").slider('getValue')[1]) {
        overLimit = true;
    } else if (level < $("#volume").slider('getValue')[0]) {
        overLimit = false;
    }

    if (overLimit) {
        $(".herriemeter").addClass("overlimit");
    } else {
        $(".herriemeter").removeClass("overlimit");
    }
});

$("#volume").slider('on', 'change', function(e) {
    Cookies.set("max-volume", e.newValue[1]);
    Cookies.set("reset-volume", e.newValue[0]);
});
