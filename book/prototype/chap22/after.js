//-----------------------------------------------------
// Insertion.After
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
        new Insertion.After('likeSport', showContent);
    },

    zip: function() {
        Show.zipSecond++;
        var trtdInsert = "<tr id='zipNumber'>"
                        + "<td>100-" + Show.zipSecond + "</td>" 
                        + "<td> 서울 "  + Show.zipSecond + "</td></tr>";
        new Insertion.After('zipTr', trtdInsert);
    }
}

// 1696 라인
//Insertion.After = Class.create();
//Insertion.After.prototype = Object.extend(new Abstract.Insertion('afterEnd'), {
//    initializeRange: function() {
//        this.range.setStartAfter(this.element);
//    },
//
//    insertContent: function(fragments) {
//        fragments.each((function(fragment) {
//            this.element.parentNode.insertBefore(fragment,
//                this.element.nextSibling);
//        }).bind(this));
//    }
//});
