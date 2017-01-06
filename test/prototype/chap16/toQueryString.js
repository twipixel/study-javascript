//-----------------------------------------------------
// Hash.toQueryString
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = $H({event: '농구', number: 5, time: 48});
        $('show1').innerHTML = likeSport.toQueryString();

        var nullSport = $H({event: null, number: undefined});  
        $('show2').innerHTML = 'null 값 지정: ' + nullSport.toQueryString();

        var arraySport = $H({event: ['abcd', '농구', 'sport']});  
        $('show3').innerHTML = 'Array 형태: ' + arraySport.toQueryString();
    }
}

// 708 라인
//toQueryString: function() {
//    return Hash.toQueryString(this);
//},
