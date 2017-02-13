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

        $('show1').innerHTML = 'person.home : ' + person.home;
        $('show2').innerHTML = 'person.office : ' + person.office;

        var computer = {notebook: '노트북'};

        Object.extend(person, computer);
        $('show3').innerHTML = 'person.notebook : ' + person.notebook;
    }
}

