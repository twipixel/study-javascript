(function () {

    'use strict';

    var data;
    var gague;
    var context = document.getElementById("solid").getContext("2d");

    function startAnimationDraw() {
        gague.startAnimationDraw(parseInt(Math.random() * data.yAxis.max));
        setTimeout(startAnimationDraw, 1500);
    }

    function getData() {
        var randomAngle = 100 + parseInt(Math.random() * 65);
        var max = 50 + parseInt(Math.random() * 300);
        var randomValue = parseInt(Math.random() * max);

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
         'stops 0:', firstPlotBand,
         'stops 1:', secondPlotBand,
         'stops 2:', thirdPlotBand,
         firstPlotBand + secondPlotBand + thirdPlotBand
         );*/

        return {

            chart: {
                type: 'solidgauge'
            },

            title: {
                text: 'Speed'
            },

            yAxis: {
                min: 0,
                max: max,

                title: {
                    text: 'km/h'
                },

                stops: [
                    [0.3, '#55BF3B'], // green
                    [0.8, '#DDDF0D'], // yellow
                    [0.9, '#DF5353'] // red
                ]
            },

            series: {
                name: 'Speed',
                data: [randomValue]
            }
        };
    }

    function start() {
        data = getData();
        gague = new SolidGague(context, data);
        startAnimationDraw();
    }

    setTimeout(start, 1000);

}).call(this);
