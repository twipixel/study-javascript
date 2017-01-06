//-----------------------------------------------------
// Bubble, Capture
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
    },
    dong: function(event) {
        Show.callSequence++;
        Show.clickElmt = Event.element(event);
        $('show3').innerHTML = '인현동 : ' + Show.clickElmt.id 
                                      + ', 순서 : ' + Show.callSequence;
    }
}
