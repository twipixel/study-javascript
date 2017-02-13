//-----------------------------------------------------
// prototype chain
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', Show.okClick);
});
function initSport(soccer) {
    this.soccer = soccer;  
}
var Show = {
    okClick: function(event) {
        var PlusSport = new Object();
        PlusSport.soccer = '여자 축구';
        PlusSport.swim = '수영';

        initSport.prototype.proPlus = PlusSport;
        var Sport = new initSport('축구');

        $('show1').innerHTML = 'Sport.soccer = ' + Sport.soccer;
        $('show2').innerHTML = 'Sport.proPlus.soccer = ' + Sport.proPlus.soccer;
        $('show3').innerHTML = 'Sport.swim = ' + Sport.swim;

        $('show4').innerHTML = 'Sport.hasOwnProperty = ' 
                                      + Sport.hasOwnProperty('swim');
        $('show5').innerHTML = 'Sport.proPlus.hasOwnProperty = ' 
                                      + Sport.proPlus.hasOwnProperty('swim');

        initSport.prototype = PlusSport;
        var ObjectProto = new initSport('축구');

        $('show6').innerHTML = 'ObjectProto.soccer = ' + ObjectProto.soccer;
        $('show7').innerHTML = 'ObjectProto.hasOwnProperty = ' 
                                      + ObjectProto.hasOwnProperty('swim');
        $('show8').innerHTML = 'ObjectProto.swim = ' + ObjectProto.swim;
    }
}
