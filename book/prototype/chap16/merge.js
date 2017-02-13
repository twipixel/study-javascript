//-----------------------------------------------------
// Hash.merge
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var likeSport = $H({event: '농구', number: '5명', time: '48분'});
        var likeOther = $H({item: '바둑', number: '1회/월'});

        var mergeHash = likeSport.merge(likeOther);
        $('show1').innerHTML = 'event : ' + mergeHash.event;
        $('show2').innerHTML = 'item : ' + mergeHash.item;
        $('show3').innerHTML = 'number : ' + mergeHash.number;

        var soccer = {item: '축구', number: '11명'};
        var likeSoccer = mergeHash.merge(soccer);
        $('show4').innerHTML = 'item : ' + likeSoccer.item;
    }
}

//685 라인
//merge: function(hash) {
//    return $H(hash).inject(this, function(mergedHash, pair) {
//        mergedHash[pair.key] = pair.value;
//        return mergedHash;
//    });
//},
