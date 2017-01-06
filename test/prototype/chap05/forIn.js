//-----------------------------------------------------
// for(in) 루프
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var Mountain = new Object();
        Mountain.first = '한라산';
        Mountain.second = '지리산';

        var i = 1;
        for (var likeMtn in Mountain) {
            $('show' + i++).innerHTML = likeMtn + ': ' + Mountain[likeMtn];
        }

        Sport = {
            basketball: '농구',
            soccer: '축구',
            others: function() {return '수영, ' + '탁구'}
        }

        for ( var property in Sport) {
            $('show' + i++).innerHTML = property + ': ' + Sport[property];
        }
        $('show' + i++).innerHTML = Sport.others();
    }
}
