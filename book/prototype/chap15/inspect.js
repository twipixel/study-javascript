//-----------------------------------------------------
// Array.inspect
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = ['농구', '탁구', '마라톤'];

        $('show1').innerHTML = 'inspect() 사용 안함: ' + likeSport;
        $('show2').innerHTML = 'inspect() 사용: ' + likeSport.inspect();
        $('show3').innerHTML = 'inspect() 사용: ' + likeSport.join('## ');
    }
}

// 605 라인
//inspect: function() {
//    return '[' + this.map(Object.inspect).join(', ') + ']';
//}
