(function () {

    'use strict';

    var data;
    var gague;
    var context = document.getElementById("vumeter").getContext("2d");

    function startAnimationDraw() {

        var offset = 0;
        var min = data.yAxis.min;
        var max = data.yAxis.max;
        var totalValue = max - min;

        if (min < 0)
            offset = min;

        var randomValue = parseInt(Math.random() * totalValue);
        randomValue = randomValue + offset;

        gague.startAnimationDraw(randomValue);
        setTimeout(startAnimationDraw, 1500);
    }

    function getData() {
        var angle = 45;
        var min = parseInt(Math.random() * -20);
        var max = parseInt(Math.random() * 20);
        var randomValue = parseInt(Math.random() * min + Math.random() * max);
        var plotBandFrom = parseInt(Math.random() * min + Math.random() * max);
        var plotBandTo = max;

        /*console.log(
            'min:', min,
            'max:', max,
            'plotBand to:', plotBandTo,
            'plotBand from:', plotBandFrom);*/

        return {

            chart: {
                type: 'vumetergauge'
            },

            title: {
                text: 'VU Channel A'
            },

            pane: {
                startAngle: -angle,
                endAngle: angle
            },

            yAxis: {
                min: min,
                max: max,

                title: {
                    text: 'VU Channel A'
                },

                plotBands: [{
                    from: plotBandFrom,
                    to: plotBandTo,
                    color: '#DF5353',
                    innerRadius: '100%',
                    outerRadius: '105%'
                }]
            },

            series: {
                name: 'Channel A',
                data: [randomValue]
            }
        };
    }

    function start() {
        data = getData();
        gague = new VUMeterGague(context, data);
        startAnimationDraw();
    }

    setTimeout(start, 1500);

}).call(this);
