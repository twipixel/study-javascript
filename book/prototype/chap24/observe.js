//-----------------------------------------------------
// Event.observe
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('elementClick', 'click', Show.webPage, false);
    Event.observe('elementClick', 'mousedown', Show.webPage, false);
});

var Show = {
    clickCount: 0,
 
    webPage: function(event) {
        Show.clickCount += 1;
        $('show1').innerHTML = '클릭 카운트 : ' + Show.clickCount;
    }
}

// 2257 라인
//observe: function(element, name, observer, useCapture) {
//    element = $(element);
//    useCapture = useCapture || false;
//
//    if (name == 'keypress' &&
//        (navigator.appVersion.match(/Konqueror|Safari|KHTML/)
//        || element.attachEvent))
//        name = 'keydown';
//
//    Event._observeAndCache(element, name, observer, useCapture);
//},

// 2040 라인
//_observeAndCache: function(element, name, observer, useCapture) {
//    if (!this.observers) this.observers = [];
//    if (element.addEventListener) {
//        this.observers.push([element, name, observer, useCapture]);
//        element.addEventListener(name, observer, useCapture);
//    } else if (element.attachEvent) {
//        this.observers.push([element, name, observer, useCapture]);
//        element.attachEvent('on' + name, observer);
//    }
//},
