//-----------------------------------------------------
// String.toQueryParams()
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
var Show = {
    okClick: function(event) {
        var soccerData = 'code=soccer&title=%EC%B6%95%EA%B5%AC';
        var soccerQuery = soccerData.toQueryParams();
        $('show1').innerHTML = 'Hash: ' + soccerQuery.code;
        $('show2').innerHTML = '디코딩: ' + soccerQuery['title'];

        var sportData = 'sport?code=abcde&title=basketBall';
        var sportQuery = sportData.toQueryParams();
        $('show3').innerHTML = '?; 사용: ' + sportQuery.code + ', ' +  sportQuery.title;

        var septData = 'code=abcde&title=스포츠###like=축구,농구';
        var septQuery = septData.toQueryParams();
        $('show4').innerHTML = '### 사용: ' + septQuery.code + ', ' +  septQuery.title + ', ' + septQuery.like;

        var dolData = 'code=abcde$title=스포츠';
        var dolQuery = dolData.toQueryParams('$');
        $('show5').innerHTML = '$ 구분자: ' + dolQuery.code + ', ' +  dolQuery.title;

        var sameName = 'code=full&name=abc&name=def&name=xyz';
        var sameQuery = sameName.toQueryParams();
        $('show6').innerHTML = '동일 이름: ' + sameQuery.code + ', ' +  sameQuery.name.inspect();
    }
}

// 230 라인
//toQueryParams: function(separator) {
//    var match = this.strip().match(/([^?#]*)(#.*)?$/);
//    if (!match) return {};
//
//    return match[1].split(separator || '&').inject({}, function(hash, pair) {
//        if ((pair = pair.split('='))[0]) {
//            var name = decodeURIComponent(pair[0]);
//            var value = pair[1] ? decodeURIComponent(pair[1]) : undefined;
//
//            if (hash[name] !== undefined) {
//                if (hash[name].constructor != Array)
//                    hash[name] = [hash[name]];
//                if (value) hash[name].push(value);
//            }
//            else hash[name] = value;
//        }
//        return hash;
//    });
//},

// 300 라인
//String.prototype.parseQuery = String.prototype.toQueryParams;
