//-----------------------------------------------------
// Ajax.PeriodicalUpdater
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('okClick', 'click', AJAXComm.fileReceive);
    Event.observe('stopClick', 'click', AJAXComm.stopReceive);
});
var AJAXComm = {
    fileReceive: function(event) {
        var startTime = (new Date()).getTime();
        var runCount = 0;

        var URL = 'welcome.txt';
        Period = new Ajax.PeriodicalUpdater('show1', URL, {
            frequency: 3, 
            decay: 2,
            onSuccess: function(xmlHttp) {
                var oneTime = (new Date()).getTime();
                var trtdInsert = '<tr>'
                                + '<td>' + runCount++ + '</td>'
                                + '<td>' + ((oneTime - startTime) / 1000) + '</td>'
                                + '<td>' + Period.frequency + '</td>'
                                + '<td>'  + Period.decay + '</td></tr>';
                new Insertion.Bottom('resultBody', trtdInsert);
            }
        });
    },
    stopReceive: function(event) {
        Period.stop();
        Period = '';
        $('show2').innerHTML = 'PeriodicalUpdater 종료';
    }
}

