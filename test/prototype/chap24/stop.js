//-----------------------------------------------------
// Event.stop(event)
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('city', 'click', Show.clty, false);
    Event.observe('gu', 'click', Show.gu, false);
    Event.observe('dong', 'click', Show.dong, false);
});

var Show = {
    clickElmt: '',
    callSequence: 0,

    clty: function(event) {
        Show.callSequence++;
        Show.clickElmt = Event.element(event);
        $('show1').innerHTML = '서울특별시 : ' + Show.clickElmt.id 
                                      + ', 순서 : ' + Show.callSequence;
    },
    gu: function(event) {
        Show.callSequence++;
        Show.clickElmt = Event.element(event);
        $('show2').innerHTML = '중구 : ' + Show.clickElmt.id 
                                      + ', 순서 : ' + Show.callSequence;
        Event.stop(event);
    },
    dong: function(event) {
        Show.callSequence++;
        Show.clickElmt = Event.element(event);
        $('show3').innerHTML = '인현동 : ' + Show.clickElmt.id 
                                      + ', 순서 : ' + Show.callSequence;
        Event.stop(event);
    }
}

// 2215 라인
//stop: function(event) {
//    if (event.preventDefault) {
//        event.preventDefault();
//        event.stopPropagation();
//    } else {
//        event.returnValue = false;
//        event.cancelBubble = true;
//    }
//},
