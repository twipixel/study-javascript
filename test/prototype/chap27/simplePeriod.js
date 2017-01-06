//-----------------------------------------------------
// Ajax.PeriodicalUpdater
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', AJAXComm.fileReceive);
});
var AJAXComm = {
    fileReceive: function(event) {
        var startTime = (new Date()).getTime();

        Period = new Ajax.PeriodicalUpdater('show1', 'welcome.txt', {
            onSuccess: function(xmlHttp) {
                var oneTime = (new Date()).getTime();
                $('show2').innerHTML = '경과 시간 : ' + ((oneTime - startTime) / 1000);
            }
        });
    }
}
