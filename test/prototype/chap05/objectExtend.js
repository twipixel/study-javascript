//-----------------------------------------------------
// Object.extend
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var person = {name: '홍길동'};
        var keyKind = {home: '집 열쇠', office: '회사 열쇠'};

        Object.extend(person, keyKind);

        $('show1').innerHTML = 'person.name : ' + person.name;
        $('show2').innerHTML = 'keyKind.home : ' + keyKind.home;
        $('show3').innerHTML = 'keyKind.office : ' + keyKind.office;

        $('show4').innerHTML = 'person.home : ' + person.home;
        $('show5').innerHTML = 'person.office : ' + person.office;
    }
}

// 30 라인
//Object.extend = function(destination, source) {
//    for (var property in source) {
//        destination[property] = source[property];
//    }
//    return destination;
//}
