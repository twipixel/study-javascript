//-----------------------------------------------------
// PeriodicalExecuter
//-----------------------------------------------------
Event.observe(window, 'load', function() {
    Event.observe('startClick', 'click', PeriodTimer.startClick);
    Event.observe('stopClick', 'click', PeriodTimer.stopClick);
});
var PeriodTimer = {
    endButton: '',
    startClick: function(event) {
        PeriodTimer.count = 0;
        if (!PeriodTimer.endButton) {
            PeriodTimer.countTimer = new PeriodicalExecuter(PeriodTimer.runPeriodTimer, 1);
        }
        PeriodTimer.endButton = true;
    },

    runPeriodTimer: function() {
        PeriodTimer.count++;
        $('show1').innerHTML = '경과 시간(초) --> ' + PeriodTimer.count;
    },

    stopClick: function(event) {
        PeriodTimer.countTimer.stop();
        PeriodTimer.endButton = '';
    }
}

// 117 라인
//var PeriodicalExecuter = Class.create();
//PeriodicalExecuter.prototype = {
//    initialize: function(callback, frequency) {
//        this.callback = callback;
//        this.frequency = frequency;
//        this.currentlyExecuting = false;
//
//        this.registerCallback();
//    },
//
//    registerCallback: function() {
//        this.timer = setInterval(this.onTimerEvent.bind(this), this.frequency * 1000);
//    },
//
//    stop: function() {
//        if (!this.timer) return;
//        clearInterval(this.timer);
//        this.timer = null;
//    },
//
//    onTimerEvent: function() {
//        if (!this.currentlyExecuting) {
//            try {
//                this.currentlyExecuting = true;
//                this.callback(this);
//            } finally {
//                this.currentlyExecuting = false;
//            }
//        }
//    }
//}
