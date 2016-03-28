$("#volume").slider();
min = $("#volume").slider('getAttribute', 'min');
max = $("#volume").slider('getAttribute', 'max');

// Create high slider track number two to measure volume
highTrack = $(".slider .slider-track .slider-track-high");
highTrack.after("<div class='slider-volume-track' style='bottom: 0%; height: 0%'></div>");
tracker = $(".slider-volume-track");
$(".slider-track-low, .slider-track-high, .slider-selection").remove();

volumeMeter(function(level) {
    // Calculate height of slider from current level, min and max values
    height = 100*(level - min)/(max-min);
    tracker.css('height', height + '%');
});

$("#volume").slider('on', 'change', function(e) {
    Cookies.set("max-volume", e.newValue);
});
