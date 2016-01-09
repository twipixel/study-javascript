(function () {

    'use strict';

    var data;
    var gague;
    var context = document.getElementById('gague').getContext('2d');

    function startAnimationDraw(easeDecimal, stepDeciaml, currentStep) {
        gague.startAnimationDraw(parseInt(Math.random() * data.yAxis.max));
        setTimeout(startAnimationDraw, 2000);
    }

    function getData() {
        var angle = 100 + parseInt(Math.random() * 65);
        var max = 50 + parseInt(Math.random() * 300);
        var value = parseInt(Math.random() * max);
        var majorTickCount = 4 + parseInt(Math.random() * 6);

        var totalDivision = 10;
        var firstDivision = 1 + parseInt(Math.random() * (totalDivision - 2));
        var secondDivision = 1 + parseInt(Math.random() * (totalDivision - firstDivision - 1));
        var thridDivision = totalDivision - secondDivision - firstDivision;

        var dividedValue = max / totalDivision;

        var firstPlotBand = Math.floor(firstDivision * dividedValue);
        var secondPlotBand = Math.floor(secondDivision * dividedValue);
        var thirdPlotBand = Math.floor(thridDivision * dividedValue);
        var remainValue = (max - firstPlotBand - secondPlotBand - thirdPlotBand);
        thirdPlotBand = thirdPlotBand + remainValue;

        /*console.log(
         'min:', 0,
         'max:', max,
         'plotBand 0:', firstPlotBand,
         'plotBand 1:', secondPlotBand,
         'plotBand 2:', thirdPlotBand,
         firstPlotBand + secondPlotBand + thirdPlotBand
         );*/

        return {

            chart: {
                type: 'gague'
            },

            title: {
                text: 'Speedometer'
            },

            pane: {
                startAngle: -angle,
                endAngle: angle
            },

            yAxis: {
                min: 0,
                max: max,
                minorTickDistance : 5,
                majorTickCount: majorTickCount,
                title: {
                    text: 'km/h'
                },

                plotBands: [{
                    from: 0,
                    to: firstPlotBand,
                    color: '#55BF3B'  // green
                }, {
                    from: firstPlotBand,
                    to: firstPlotBand + secondPlotBand,
                    color: '#DDDF0D'  // yellow
                }, {
                    from: firstPlotBand + secondPlotBand,
                    to: firstPlotBand + secondPlotBand + thirdPlotBand,
                    color: '#DF5353'  // red
                }]
            },

            series: {
                name: 'Speed',
                data: [value]
            }
        };
    }

    function start() {
        data = getData();
        gague = new Gague(context, data);
        startAnimationDraw();
    }

    setTimeout(start, 500);

}).call(this);

