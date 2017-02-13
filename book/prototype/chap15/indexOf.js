//-----------------------------------------------------
// Array.indexOf
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = ['농구', '탁구', '수영', '축구']; 

        var indexOfSport = likeSport.indexOf('축구');
        $('show1').innerHTML = "indexOf('축구') : " + indexOfSport;
        
        var outOfSport = likeSport.indexOf('마라톤');    
        $('show2').innerHTML = "indexOf('마라톤') : " + outOfSport;
    }
}

// 577 라인
//indexOf: function(object) {
//    for (var i = 0, length = this.length; i < length; i++)
//      if (this[i] == object) return i;
//    return -1;
//},
