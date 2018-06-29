/*
 * Initialize the graphic.
 */
 var onWindowLoaded = function() {
    // Uncomment to enable column sorting
    // var tablesort = new Tablesort(document.getElementById('state-table'));

    pymChild = new pym.Child({});



    $('#full-width-slider').royalSlider({
        arrowsNav: true,
        loop: false,
        keyboardNavEnabled: true,
        controlsInside: false,
        imageScaleMode: 'fill',
        arrowsNavAutoHide: false,
        autoScaleSlider: true, 
        autoScaleSliderWidth: 1920,     
        autoScaleSliderHeight: 1080,
        controlNavigation: 'bullets',
        thumbsFitInViewport: false,
        navigateByClick: true,
        startSlideId: 0,
        autoPlay: false,
        transitionType:'move',
        globalCaption: true,
        deeplinking: {
          enabled: true,
          change: false
      },
  });

    // Update iframe
    if (pymChild) {
        pymChild.sendHeight();
    }



    pymChild.onMessage('on-screen', function(bucket) {
        ANALYTICS.trackEvent('on-screen', bucket);
    });
    pymChild.onMessage('scroll-depth', function(data) {
        data = JSON.parse(data);
        ANALYTICS.trackEvent('scroll-depth', data.percent, data.seconds);
    });
}


/*
 * Initially load the graphic
 * (NB: Use window.load instead of document.ready
 * to ensure all images have loaded)
 */
 window.onload = onWindowLoaded;
