//-----------------------------------------------------
// $w
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var cityString = '서울 부산 대구';
        $('show1').innerHTML = '서울 부산 대구 : ' + $w(cityString).inspect();
    }
}

// 612 라인
//function $w(string){
//    string = string.strip();
//    return string ? string.split(/\s+/) : [];
//}
