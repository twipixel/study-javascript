//-----------------------------------------------------
// Enumerable.toArray()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var title = '우리강산';
        $('show1').innerHTML = 'toArray() : ' + title.toArray().inspect();

        var sport = ['농구', '5명', '48분'];
        $('show2').innerHTML = 'toArray(). : ' + sport.toArray().inspect();

        //entries() 메서드
        var hashSport = $H({basketBall : '농구', number : '5명', time: '48분'});        
        var niceSport = hashSport.entries();
        $('show3').innerHTML = 'entries() : ' + niceSport.inspect();
        $('show4').innerHTML = '[0][0]+[0][1] : ' + niceSport[0][0] + ', ' + niceSport[0][1];
    }
}

// 490 라인
//toArray: function() {
//    return this.map();
//},

// 519 라인
//Object.extend(Enumerable, {
//    entries: Enumerable.toArray
//});
