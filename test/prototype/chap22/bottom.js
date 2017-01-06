//-----------------------------------------------------
// Insertion.Bottom
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('sportClick', 'click', Show.sport);
    Event.observe('zipClick', 'click', Show.zip);
});
var Show = {
    count: 0,
    zipSecond: 100,

    sport: function(event) {
        Show.count++;
        var showContent = '농구 (' + Show.count + ')' + '<br />'
                               + "<script>$('lastCount').innerHTML =" 
                               + "'최종번호: ' + Show.count</script>";
        new Insertion.Bottom('likeSport', showContent);
    },

    zip: function() {
        Show.zipSecond++;
        var trtdInsert = "<tr id='zipNumber'>"
                        + "<td>100-" + Show.zipSecond + "</td>" 
                        + "<td> 서울 "  + Show.zipSecond + "</td></tr>";
        new Insertion.Bottom('zipBody', trtdInsert);
    }
}

//1682 라인
//Insertion.Bottom = Class.create();
//Insertion.Bottom.prototype = Object.extend(new Abstract.Insertion('beforeEnd'), {
//    initializeRange: function() {
//        this.range.selectNodeContents(this.element);
//        this.range.collapse(this.element);
//    },
//
//    insertContent: function(fragments) {
//        fragments.each((function(fragment) {
//            this.element.appendChild(fragment);
//        }).bind(this));
//    }
//});
