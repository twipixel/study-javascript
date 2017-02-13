(function () {

    this.chart = this.chart || {};

    chart.extend = function (subclass, superclass) {
        'use strict';

        function o() {
            this.constructor = subclass;
        }

        o.prototype = superclass.prototype;
        return (subclass.prototype = new o());
    };

    chart.promote = function (subclass, prefix) {
        var subP = subclass.prototype,
            supP = (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__;

        if (supP) {
            subP[(prefix += '_') + 'constructor'] = supP.constructor;
            for (var n in supP) {
                if (subP.hasOwnProperty(n) && (typeof supP[n] == 'function')) {
                    subP[prefix + n] = supP[n];
                }
            }
        }
        return subclass;
    };

    //--Animation methods
    //Easing functions adapted from Robert Penner's easing equations
    //http://www.robertpenner.com/easing/
    easingEffects = {
        linear: function (t) {
            return t;
        },
        easeInQuad: function (t) {
            return t * t;
        },
        easeOutQuad: function (t) {
            return -1 * t * (t - 2);
        },
        easeInOutQuad: function (t) {
            if ((t /= 1 / 2) < 1) return 1 / 2 * t * t;
            return -1 / 2 * ((--t) * (t - 2) - 1);
        },
        easeInCubic: function (t) {
            return t * t * t;
        },
        easeOutCubic: function (t) {
            return 1 * ((t = t / 1 - 1) * t * t + 1);
        },
        easeInOutCubic: function (t) {
            if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t;
            return 1 / 2 * ((t -= 2) * t * t + 2);
        },
        easeInQuart: function (t) {
            return t * t * t * t;
        },
        easeOutQuart: function (t) {
            return -1 * ((t = t / 1 - 1) * t * t * t - 1);
        },
        easeInOutQuart: function (t) {
            if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t;
            return -1 / 2 * ((t -= 2) * t * t * t - 2);
        },
        easeInQuint: function (t) {
            return 1 * (t /= 1) * t * t * t * t;
        },
        easeOutQuint: function (t) {
            return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
        },
        easeInOutQuint: function (t) {
            if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t * t;
            return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
        },
        easeInSine: function (t) {
            return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
        },
        easeOutSine: function (t) {
            return 1 * Math.sin(t / 1 * (Math.PI / 2));
        },
        easeInOutSine: function (t) {
            return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
        },
        easeInExpo: function (t) {
            return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
        },
        easeOutExpo: function (t) {
            return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
        },
        easeInOutExpo: function (t) {
            if (t === 0) return 0;
            if (t === 1) return 1;
            if ((t /= 1 / 2) < 1) return 1 / 2 * Math.pow(2, 10 * (t - 1));
            return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
        },
        easeInCirc: function (t) {
            if (t >= 1) return t;
            return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
        },
        easeOutCirc: function (t) {
            return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
        },
        easeInOutCirc: function (t) {
            if ((t /= 1 / 2) < 1) return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
            return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        easeInElastic: function (t) {
            var s = 1.70158;
            var p = 0;
            var a = 1;
            if (t === 0) return 0;
            if ((t /= 1) == 1) return 1;
            if (!p) p = 1 * 0.3;
            if (a < Math.abs(1)) {
                a = 1;
                s = p / 4;
            } else s = p / (2 * Math.PI) * Math.asin(1 / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
        },
        easeOutElastic: function (t) {
            var s = 1.70158;
            var p = 0;
            var a = 1;
            if (t === 0) return 0;
            if ((t /= 1) == 1) return 1;
            if (!p) p = 1 * 0.3;
            if (a < Math.abs(1)) {
                a = 1;
                s = p / 4;
            } else s = p / (2 * Math.PI) * Math.asin(1 / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
        },
        easeInOutElastic: function (t) {
            var s = 1.70158;
            var p = 0;
            var a = 1;
            if (t === 0) return 0;
            if ((t /= 1 / 2) == 2) return 1;
            if (!p) p = 1 * (0.3 * 1.5);
            if (a < Math.abs(1)) {
                a = 1;
                s = p / 4;
            } else s = p / (2 * Math.PI) * Math.asin(1 / a);
            if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
        },
        easeInBack: function (t) {
            var s = 1.70158;
            return 1 * (t /= 1) * t * ((s + 1) * t - s);
        },
        easeOutBack: function (t) {
            var s = 1.70158;
            return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
        },
        easeInOutBack: function (t) {
            var s = 1.70158;
            if ((t /= 1 / 2) < 1) return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
            return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
        },
        easeInBounce: function (t) {
            return 1 - easingEffects.easeOutBounce(1 - t);
        },
        easeOutBounce: function (t) {
            if ((t /= 1) < (1 / 2.75)) {
                return 1 * (7.5625 * t * t);
            } else if (t < (2 / 2.75)) {
                return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
            } else if (t < (2.5 / 2.75)) {
                return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
            } else {
                return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
            }
        },
        easeInOutBounce: function (t) {
            if (t < 1 / 2) return easingEffects.easeInBounce(t * 2) * 0.5;
            return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
        }
    };

    //Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback, 1000 / 60);
            };
    })();

    cancelAnimFrame = (function () {
        return window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            window.msCancelAnimationFrame ||
            function (callback) {
                return window.clearTimeout(callback, 1000 / 60);
            };
    })();

    animationLoop = function (callback, totalSteps, easingString, onProgress, onComplete, chartInstance) {
        var currentStep = 0,
            easingFunction = easingEffects[easingString] || easingEffects.linear;

        var animationFrame = function () {
            currentStep++;
            var stepDecimal = currentStep / totalSteps;
            var easeDecimal = easingFunction(stepDecimal);

            callback.call(chartInstance, easeDecimal, stepDecimal, currentStep);
            onProgress.call(chartInstance, easeDecimal, stepDecimal);
            if (currentStep < totalSteps) {
                try {
                    chartInstance.animationFrame = requestAnimFrame(animationFrame);
                } catch (e) {
                    console.log(e);
                }
            } else {
                onComplete.apply(chartInstance);
            }
        };
        requestAnimFrame(animationFrame);
    };

    /**
     * Canvas 에서 0도는 90부터 시작이라
     * 12시 부터 0도로 보이도록 -90을 빼줍니다.
     */
    chart.CANVAS_DEGREE_OFFSET = -90;
    chart.CANVAS_RADIAN_OFFSET = -(Math.PI / 2);

    /**
     * 각도를 주면 포인트 좌표로 반환
     * @param centerX   중심점X
     * @param centerY   중심점Y
     * @param radius    반지름
     * @param degrees   각도(Degrees)
     * @returns {{x: *, y: *}}
     */
    chart.getPointByDegrees = function (centerX, centerY, radius, degrees) {
        var angle = this.getRadians(degrees);

        return {
            x: centerX + radius * Math.cos(angle),
            y: centerY + radius * Math.sin(angle)
        }
    };

    /**
     * 값으로 각도 구하기
     * @param min       최저값
     * @param max       최대값
     * @param sAngle    시작각도
     * @param eAngle    종료각도
     * @param value     표시값
     * @returns {*}
     */
    chart.getDegreesByValue = function (min, max, sAngle, eAngle, value) {
        return ((eAngle - sAngle) / (max - min) * (value - min) + sAngle);
    };

    /**
     * 값이 몇 프로에 해당하는지 구하기
     * @param min   최저값
     * @param max   최고값
     * @param value 값
     * @returns {*} 0 - 1 사이값
     */
    chart.getPecentByValue = function (min, max, value) {
        return 1 / (max - min) * (value - min);
    };

    /**
     * 호도법을 라디안으로 변경
     * @param degrees
     * @returns {number}
     */
    chart.getRadians = function (degrees) {
        return degrees * Math.PI / 180;
    };

    /**
     * 라디안을 호도법으로 변경
     * @param radians
     * @returns {number}
     */
    chart.getDegrees = function (radians) {
        return radians * Math.PI / 180;
    };

    /**
     * 퍼센트 값 구하기
     * 전체 높이의 90% 값은?
     * @param ratio 비율
     * @param total 전체값
     * @returns {number}
     */
    chart.getPercent = function (ratio, total) {
        return ratio / 100 * total;
    };

    /**
     * 캔버스 클리어
     */
    chart.clear = function (context) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    };

    /**
     * 컨텍스트에 속성을 설정합니다.
     * @param context
     * @param style 컨텍스에 설정할 속성 정보 Object
     */
    chart.setStyle = function (context, style) {
        for (var prop in style) {
            try {
                context[prop] = style[prop];
            } catch (e) {
                console.log(e);
            }
        }
    };

    /**
     * 색상 변경 유틸리티
     * @Author www.JavaScript-FX.com
     * @param start         the start color (in the form "RRGGBB" e.g. "FF00AC")
     * @param end           the end color (in the form "RRGGBB" e.g. "FF00AC")
     * @param percent       the percent (0-100) of the fade between start & end
     * @returns {string}    color in the form "#RRGGBB" e.g. "#FA13CE"
     */
    chart.getColor = function (start, end, percent) {
        var r1 = this.hex2dec(start.slice(0, 2));
        var g1 = this.hex2dec(start.slice(2, 4));
        var b1 = this.hex2dec(start.slice(4, 6));
        var r2 = this.hex2dec(end.slice(0, 2));
        var g2 = this.hex2dec(end.slice(2, 4));
        var b2 = this.hex2dec(end.slice(4, 6));
        var r = Math.floor(r1 + (percent * (r2 - r1)) + .5);
        var g = Math.floor(g1 + (percent * (g2 - g1)) + .5);
        var b = Math.floor(b1 + (percent * (b2 - b1)) + .5);
        return ('#' + this.dec2hex(r) + this.dec2hex(g) + this.dec2hex(b));
    };

    /**
     * 10진수를 16진수로 변환합니다.
     * @param dec   10진수
     * @returns {*} 16진수
     */
    chart.dec2hex = function (dec) {
        return (this.hexDigit[dec >> 4] + this.hexDigit[dec & 15]);
    };

    chart.hexDigit = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F');

    /**
     * 16진수를 10진수로 변환합니다.
     * @param hex           16진수
     * @returns {Number}    10진수
     */
    chart.hex2dec = function (hex) {
        return (parseInt(hex, 16))
    };

    /**
     * 텍스트 표시
     * @param context   Canvas Context
     * @param text      표시할 텍스트
     * @param point     텍스트 위치 좌표 Point
     * @param style     Context에 적용할 속성 Object
     */
    chart.drawText = function (context, text, point, style) {
        context.save();
        this.setStyle(context, style);
        context.fillText(text, point.x, point.y);
        context.restore();
    };

    /**
     * 호그리기
     * @param context           Canvas Context
     * @param x                 중심점X
     * @param y                 중심점Y
     * @param r                 반지름
     * @param sAngle            시작 각도
     * @param eAngle            종료 각도
     * @param counterclockwise  호를 그리는 방향 (기본 반시계방향)
     * @param style             Context에 적용할 속성 Object
     */
    chart.drawArc = function (context, x, y, r, sAngle, eAngle, counterclockwise, style) {
        context.save();
        context.beginPath();
        this.setStyle(context, style);
        context.arc(x, y, r, sAngle, eAngle, counterclockwise);

        if (style.lineWidth || style.strokeStyle)
            context.stroke();

        if (style.fillStyle)
            context.fill();

        context.restore();
    };

    /**
     * 도넛을 그립니다
     * @param context           Canvas Context
     * @param cx                센터X
     * @param cy                센터Y
     * @param innerRadius       안지름
     * @param outerRadius       바깥지름
     * @param startRadian       시작 각도
     * @param endRadian         종료 각도
     * @param startInnerPoint   시작 안점
     * @param startOuterPoint   시작 바깥점
     * @param endInnerPoint     종료 안점
     * @param endOuterPoint     종료 바깥점
     * @param strokeStyle       선색상
     * @param fillStyle         채울색상
     * @param closePath         패쓰 닫을지 여부
     * @private
     */
    chart.drawDonut = function (context, cx, cy,
                                innerRadius, outerRadius,
                                startRadian, endRadian,
                                startInnerPoint, startOuterPoint,
                                endInnerPoint, endOuterPoint,
                                strokeStyle, fillStyle, closePath) {

        context.beginPath();
        context.moveTo(startInnerPoint.x, startInnerPoint.y);
        context.lineTo(startOuterPoint.x, startOuterPoint.y);
        context.arc(cx, cy, outerRadius, startRadian, endRadian, false);
        context.moveTo(endOuterPoint.x, endOuterPoint.y);
        context.lineTo(endInnerPoint.x, endInnerPoint.y);
        context.arc(cx, cy, innerRadius, endRadian, startRadian, true);

        if (closePath)
            context.closePath();

        if (strokeStyle) {
            context.strokeStyle = strokeStyle;
            context.stroke();
        }

        if (fillStyle) {
            context.fillStyle = fillStyle;
            context.fill();
        }
    };

    /**
     * 바늘 좌표 구하기
     * @param centerX           중심점X
     * @param centerY           중심점Y
     * @param needlePointAngle  바늘이 가르킬 각도
     * @param needleThickness   바늘 두께
     * @param needleLength      바늘 길이
     * @returns {*[]}
     */
    chart.getNeedlePoints = function (centerX, centerY, needlePointAngle, needleThickness, needleLength) {
        var halfNeedleThickness = needleThickness / 2;
        var headPoint = chart.getPointByDegrees(centerX, centerY, needleLength, needlePointAngle);
        var leftPoint = chart.getPointByDegrees(centerX, centerY, halfNeedleThickness, needlePointAngle - 90);
        var rightPoint = chart.getPointByDegrees(centerX, centerY, halfNeedleThickness, needlePointAngle + 90);
        return [leftPoint, headPoint, rightPoint];
    };

    /**
     * 바늘 그리기
     * @param context       Canvas Context
     * @param startPoint    그리기 시작점
     * @param needlPoints   배열로 넘어온 Point 를 lineTo로 이어 그립니다.
     */
    chart.drawNeedle = function (context, startPoint, needlPoints, style) {
        context.save();
        context.beginPath();
        chart.setStyle(context, style);
        context.moveTo(startPoint.x, startPoint.y);

        for (var i = 0; i < needlPoints.length; i++)
            context.lineTo(needlPoints[i].x, needlPoints[i].y);

        context.lineTo(startPoint.x, startPoint.y);
        context.closePath();

        if (style.lineWidth || style.strokeStyle)
            context.stroke();

        if (style.fillStyle)
            context.fill();

        context.restore();
    };

    /**
     * 굵은 게이지 선 포인트 구하기
     * @param centerX       중심점X
     * @param centerY       중심점Y
     * @param radius        반지름
     * @param minValue      게이지 최소값
     * @param maxValue      게이지 최대값
     * @param totalValue    총 게이지 값
     * @param sAngle        게이지 시작 각도
     * @param eAngle        게이지 종료 각도
     * @param totalTick     표시할 Tick 개수
     * @returns {Array}
     */
    chart.getMajorTickPoints = function (centerX, centerY, radius,
                                         minValue, maxValue, totalValue,
                                         sAngle, eAngle, totalTick) {
        var point;
        var points = [];
        var divided = totalValue / (totalTick - 1);

        for (var i = 0; i < totalTick; i++) {
            point = chart.getPointByDegrees(
                centerX, centerY, radius,
                chart.getDegreesByValue(
                    minValue, maxValue,
                    sAngle, eAngle, i * divided));
            points.push(point);
        }
        return points;
    };

    /**
     * 가는 게이 선 포이트 구하기
     * @param centerX       중심점X
     * @param centerY       중심점Y
     * @param radius        반지름
     * @param minValue      게이지 최소값
     * @param maxValue      게이지 최대값
     * @param totalValue    총 게이지 값
     * @param sAngle        게이지 시작 각도
     * @param eAngle        게이지 종료 각도
     * @param tickDistance  게이지 Tick 거리
     * @param valueOffset   게이지 최소값이 음수일 때 최소값을 넣어 줍니다.
     * @returns {Array}
     */
    chart.getMinorTickPoints = function (centerX, centerY, radius,
                                         minValue, maxValue, totalValue,
                                         sAngle, eAngle, tickDistance, valueOffset) {
        var value, point, points = [];
        valueOffset = valueOffset || 0;
        var totalTick = totalValue / tickDistance + 1;

        for (var i = 0; i < totalTick; i++) {
            value = (i * tickDistance) + valueOffset;
            point = chart.getPointByDegrees(
                centerX, centerY, radius,
                chart.getDegreesByValue(
                    minValue, maxValue,
                    sAngle, eAngle, value));

            if (value < maxValue)
                points.push(point);
        }
        return points;
    };

    /**
     * Tick 그리기
     * @param context       Canvas Context
     * @param startPoints   게이지 그리기 시작 위치 좌표들
     * @param endPoints     게이지 그리기 죵료 위치 좌표들
     * @param style         Context 에 적용할 속성 Object
     */
    chart.drawTick = function (context, startPoints, endPoints, style) {
        context.save();
        context.beginPath();
        chart.setStyle(context, style);

        for (var i = 0; i < startPoints.length; i++) {
            context.moveTo(startPoints[i].x, startPoints[i].y);
            context.lineTo(endPoints[i].x, endPoints[i].y);
        }

        context.stroke();
        context.restore();
    }

})();

(function () {
    'use strict';

    var Gague = function (context, data) {
        this._ctx = context;
        this._canvas = context.canvas;
        this._init(data);
    };

    var p = Gague.prototype;

    p._init = function (data) {
        this.data = data;
        this.value = data.series.data[0] || 0;
        this._width = this._canvas.width;
        this._height = this._canvas.height;
        this._diameter = Math.min(this._width, this._height);
        this._radius = this._diameter / 2;
        this._centerX = this._width / 2;
        this._centerY = this._height / 2;
        this._minValue = data.yAxis.min;
        this._maxValue = data.yAxis.max;
        this._totalValue = this._maxValue - this._minValue;
        this._endAngle = data.pane.endAngle + chart.CANVAS_DEGREE_OFFSET;
        this._startAngle = data.pane.startAngle + chart.CANVAS_DEGREE_OFFSET;
        this._minorTicksDistance = data.yAxis.minorTickDistance;

        // 가운데 라벨, 맨 하단 밸류, minValue, maxValue 라벨 폰트 사이즈
        this._labelFontColor = '#999999';
        this._titleFontSize = chart.getPercent(12, this._radius);
        this._valueFontColor = '#000000';
        this._valueFontSize = chart.getPercent(14, this._radius);
        this._tickFontColor = '616161';
        this._tickFontSize = chart.getPercent(10, this._radius);

        // 맨 외곽 원 정보
        var outerCircleRatio = 94;
        this._outerCircleRadius = chart.getPercent(outerCircleRatio, this._radius);
        this._outerCircleLineWidth = 3;
        this._outerCircleColor = '#383838';
        this._outerCircleInnerColor = '#f7f7f7';

        // 맨 외곽 안쪽 색상 칠한 원 정보
        var outerColorCircleRatio = outerCircleRatio - 2;
        this._outerColorCircleRadius = chart.getPercent(outerColorCircleRatio, this._radius);
        this._outerColorCircleLineWidth = 8;
        this._outerColorCircleColor = '#cccccc';

        // 얇은 눈금
        var minorTickRatio = outerColorCircleRatio - 2;
        this._minorTickRadius = chart.getPercent(minorTickRatio, this._radius);
        this._minorTickLineWidth = 1;
        this._minorTickLineLength = 5;
        this._minorTickColor = '#666666';

        // 두꺼운 눈금
        var majorTickRatio = minorTickRatio;
        this._majorTickCount = data.yAxis.majorTickCount;
        this._majorTickRadius = chart.getPercent(majorTickRatio, this._radius);
        this._majorTickLineWidth = 3;
        this._majorTickLineLength = 9;
        this._majorTickColor = '#333333';

        // 가운데 원 정보
        this._centerCircleRadius = chart.getPercent(4, this._radius);
        this._centerCircleColor = '#4684ee';
        this._centerCircleStrokeColor = '#93969b';
        this._centerCircleLineWidth = 1;

        // 게이지 눈금 정보
        this._needleHeadLength = chart.getPercent(70, this._radius);
        this._needleTailLength = chart.getPercent(30, this._radius);
        this._needleBodyThickness = 6;
        this._needleOuterColor = '#b63415';
        this._needleInnerColor = '#e57358';

        // plotBands 반지름, 라인 넓이
        this._plotBandCircleRadius = this._minorTickRadius - this._minorTickLineLength - 1;
        this._plotBandCircleLineWidth = 11;

        this.draw(this.value);
    };

    p.startAnimationDraw = function (value) {
        this._fromValue = (this._toValue) ? this._toValue : 0;
        this._currentValue = this._fromValue;
        this._toValue = value;

        cancelAnimFrame(this.animationId);
        this.animationId = animationLoop(
            this._animationDraw, 60, 'easeInOutBack',
            function progressHandler() {
            },
            function completeHandler() {
            }, this);
    };

    p._animationDraw = function (easeDecimal, stepDeciaml, currentStep) {
        this._currentValue = this._fromValue + (this._toValue - this._fromValue) * easeDecimal;
        this.draw(parseInt(this._currentValue));
    };

    p.draw = function (value) {
        chart.clear(this._ctx);
        this._drawGague(value);
        this._drawNeedle(value);
    };

    p._drawGague = function (value) {
        this._drawOuterLine();
        this._drawOuterLineColor();
        this._drawPlotBands();
        this._displayTitleText();
        this._displayValueText(value);
        this._drawMinorTick();
        this._drawMajorTick();
        this._displayMinValueText();
        this._displayMaxValueText();
    };

    p._drawNeedle = function (value) {
        this._drawHeadNeedle(value);
        this._drawTailNeedle(value);
        this._drawNeedleCircle();
    };

    p._drawOuterLine = function () {
        chart.drawArc(
            this._ctx,
            this._centerX,
            this._centerY,
            this._outerCircleRadius,
            0,
            Math.PI * 2,
            false,
            {
                strokeStyle: this._outerCircleColor,
                lineWidth: this._outerCircleLineWidth,
                fillStyle: this._outerCircleInnerColor
            }
        );
    };

    p._drawOuterLineColor = function () {
        chart.drawArc(
            this._ctx,
            this._centerX,
            this._centerY,
            this._outerColorCircleRadius,
            0,
            Math.PI * 2,
            false,
            {
                strokeStyle: this._outerColorCircleColor,
                lineWidth: this._outerColorCircleLineWidth
            }
        );
    };

    p._drawPlotBands = function () {
        var bandTotal = this.data.yAxis.plotBands.length;

        for (var i = 0; i < bandTotal; i++) {
            chart.drawArc(
                this._ctx,
                this._centerX,
                this._centerY,
                this._plotBandCircleRadius,
                chart.getRadians(
                    chart.getDegreesByValue(
                        this._minValue, this._maxValue,
                        this._startAngle, this._endAngle,
                        this.data.yAxis.plotBands[i].from)),

                chart.getRadians(
                    chart.getDegreesByValue(
                        this._minValue, this._maxValue,
                        this._startAngle, this._endAngle,
                        this.data.yAxis.plotBands[i].to)),
                false,
                {
                    lineWidth: this._plotBandCircleLineWidth,
                    strokeStyle: this.data.yAxis.plotBands[i].color
                }
            );
        }
    };

    p._displayTitleText = function () {
        chart.drawText(
            this._ctx,
            this.data.title.text,
            {
                x: this._centerX,
                y: this._centerY - this._centerCircleRadius - this._titleFontSize
            },
            {
                textAlign: 'center',
                textBaseline: 'middle',
                fillStyle: this._labelFontColor,
                font: this._titleFontSize + 'px Arial'
            }
        );
    };

    p._displayValueText = function (value) {
        chart.drawText(
            this._ctx,
            value,
            {
                x: this._centerX,
                y: this._centerY + this._minorTickRadius -
                this._minorTickLineLength - this._valueFontSize / 2
            },
            {
                textAlign: 'center',
                textBaseline: 'middle',
                fillStyle: this._valueFontColor,
                font: this._valueFontSize + 'px Arial'
            }
        );
    };

    p._drawMajorTick = function () {
        chart.drawTick(this._ctx,
            chart.getMajorTickPoints(
                this._centerX, this._centerY, this._majorTickRadius,
                this._minValue, this._maxValue, this._totalValue,
                this._startAngle, this._endAngle, this._majorTickCount),
            chart.getMajorTickPoints(
                this._centerX, this._centerY, this._majorTickRadius - this._majorTickLineLength,
                this._minValue, this._maxValue, this._totalValue,
                this._startAngle, this._endAngle, this._majorTickCount),
            {
                strokeStyle: this._majorTickColor,
                lineWidth: this._majorTickLineWidth
            }
        );
    };

    p._drawMinorTick = function () {
        chart.drawTick(this._ctx,
            chart.getMinorTickPoints(
                this._centerX, this._centerY, this._minorTickRadius,
                this._minValue, this._maxValue, this._totalValue,
                this._startAngle, this._endAngle, this._minorTicksDistance),
            chart.getMinorTickPoints(
                this._centerX, this._centerY, this._minorTickRadius - this._minorTickLineLength,
                this._minValue, this._maxValue, this._totalValue,
                this._startAngle, this._endAngle, this._minorTicksDistance),
            {
                strokeStyle: this._minorTickColor,
                lineWidth: this._minorTickLineWidth
            }
        );
    };

    p._displayMinValueText = function () {
        var textAngle = chart.getDegreesByValue(
            this._minValue, this._maxValue,
            this._startAngle, this._endAngle, this._minValue);

        chart.drawText(
            this._ctx,
            this._minValue,
            chart.getPointByDegrees(
                this._centerX,
                this._centerY,
                this._majorTickRadius - this._majorTickLineLength - this._valueFontSize / 2, textAngle),
            {
                font: this._tickFontSize + 'px Arial',
                textAlign: 'left',
                textBaseline: 'bottom',
                fillStyle: this._tickFontColor
            }
        );
    };

    p._displayMaxValueText = function () {
        var textAngle = chart.getDegreesByValue(
            this._minValue, this._maxValue,
            this._startAngle, this._endAngle, this._maxValue);

        chart.drawText(
            this._ctx,
            this._maxValue,
            chart.getPointByDegrees(
                this._centerX,
                this._centerY,
                //this._majorTickRadius - this._majorTickLineLength - this._valueFontSize / 2, textAngle),
                this._majorTickRadius - this._majorTickLineLength - this._valueFontSize / 2, textAngle),
            {
                font: this._tickFontSize + 'px Arial',
                textAlign: 'right',
                textBaseline: 'bottom',
                fillStyle: this._tickFontColor
            }
        );
    };

    p._drawHeadNeedle = function (value) {
        chart.drawNeedle(
            this._ctx,
            {
                x: this._centerX,
                y: this._centerY
            },
            chart.getNeedlePoints(
                this._centerX,
                this._centerY,
                chart.getDegreesByValue(
                    this._minValue, this._maxValue,
                    this._startAngle, this._endAngle, value),
                this._needleBodyThickness,
                this._needleHeadLength),
            {
                lineWidth: 1,
                fillStyle: this._needleInnerColor,
                strokeStyle: this._needleOuterColor
            }
        );
    };

    p._drawTailNeedle = function (value) {
        chart.drawNeedle(
            this._ctx,
            {
                x: this._centerX,
                y: this._centerY
            },
            chart.getNeedlePoints(
                this._centerX,
                this._centerY,
                chart.getDegreesByValue(
                    this._minValue, this._maxValue,
                    this._startAngle, this._endAngle, value) - 180,
                this._needleBodyThickness,
                this._needleTailLength),
            {
                lineWidth: 1,
                fillStyle: this._needleInnerColor,
                strokeStyle: this._needleOuterColor
            }
        );
    };

    p._drawNeedleCircle = function () {
        chart.drawArc(
            this._ctx,
            this._centerX,
            this._centerY,
            this._centerCircleRadius,
            0,
            Math.PI * 2,
            false,
            {
                lineWidth: this._centerCircleLineWidth,
                strokeStyle: this._centerCircleStrokeColor,
                fillStyle: this._centerCircleColor
            }
        );
    };

    window.Gague = Gague;

})();


(function () {
    'use strict';

    var SolidGague = function (context, data) {
        this._ctx = context;
        this._canvas = context.canvas;
        this._init(data);
    };

    var p = SolidGague.prototype;

    p._init = function (data) {
        this.data = data;
        this.value = data.series.data[0] || 0;
        this._width = this._canvas.width;
        this._height = this._canvas.height;
        this._diameter = Math.min(this._width, this._height);
        this._radius = chart.getPercent(70, this._diameter);
        this._centerX = this._width / 2;
        this._centerY = this._height - chart.getPercent(14, this._height);
        this._endAngle = 90 + chart.CANVAS_DEGREE_OFFSET;
        this._startAngle = -90 + chart.CANVAS_DEGREE_OFFSET;
        this._endRadian = Math.PI / 2 + chart.CANVAS_RADIAN_OFFSET;
        this._startRadian = -(Math.PI / 2) + chart.CANVAS_RADIAN_OFFSET;
        this._valueOffset = 0;
        this._minValue = data.yAxis.min;
        this._maxValue = data.yAxis.max;
        this._totalValue = data.yAxis.max - data.yAxis.min;
        this._lineColor = '#999999';
        this._valueLineColor = '#333333';
        this._outerCircleRadius = chart.getPercent(84, this._radius);
        this._innerCircleRadius = chart.getPercent(52, this._radius);
        var titleFontRatio = 9;
        this._valueFontSize = chart.getPercent(16, this._radius);
        this._titleFontSize = chart.getPercent(titleFontRatio, this._radius);
        this._minMaxFontSize = chart.getPercent(parseInt(titleFontRatio * 0.8), this._radius);
        this._valueTitleFontSize = chart.getPercent(parseInt(titleFontRatio * 0.9), this._radius);
        this.draw(this.value);
    };

    p.startAnimationDraw = function (value) {
        this._fromValue = (this._toValue) ? this._toValue : 0;
        this._currentValue = this._fromValue;
        this._toValue = value;
        this._toColor = this._getColorByValue(this._toValue).substr(1);
        this._fromColor = this._getColorByValue(this._fromValue).substr(1);

        cancelAnimFrame(this.animationId);
        this.animationId = animationLoop(
            this._animationDraw, 60, 'easeInOutQuad',
            function progressHandler() {
            },
            function completeHandler() {
            }, this);
    };

    p._animationDraw = function (easeDecimal, stepDeciaml, currentStep) {
        this._currentValue = this._fromValue + (this._toValue - this._fromValue) * easeDecimal;
        this._valueLineColor = chart.getColor(this._fromColor, this._toColor, easeDecimal);
        this.draw(parseInt(this._currentValue));
    };

    p.draw = function (value) {
        chart.clear(this._ctx);
        this._drawOutLine();
        this._drawValue(value);
        this._displayTitleText();
        this._displayValueText(value);
        this._displayValueTitleText();
        this._displayMinValueText();
        this._displayMaxValueText();
        //this._displayDebugLine();
    };

    p._getColorByValue = function (value) {
        var percent = chart.getPecentByValue(this._minValue, this._maxValue, value);

        for (var i = 0; i < this.data.yAxis.stops.length; i++) {
            if (percent <= this.data.yAxis.stops[i][0])
                return this.data.yAxis.stops[i][1];
        }
        return this.data.yAxis.stops[this.data.yAxis.stops.length - 1][1];
    };

    p._drawOutLine = function () {
        chart.drawDonut(
            this._ctx,
            this._centerX, this._centerY,
            this._innerCircleRadius, this._outerCircleRadius,
            this._startRadian,
            this._endRadian,
            this.startInnerPoint, this.startOuterPoint,
            this.endInnerPoint, this.endOuterPoint,
            this._lineColor);
    };

    p._drawValue = function (value) {
        this._currentDrawValue = value;

        chart.drawDonut(
            this._ctx,
            this._centerX, this._centerY,
            this._innerCircleRadius, this._outerCircleRadius,
            this._startRadian,
            chart.getRadians(
                chart.getDegreesByValue(
                    this._minValue, this._maxValue,
                    this._startAngle, this._endAngle, value)),
            this.startInnerPoint, this.startOuterPoint,
            this.valueInnerPoint, this.valueOuterPoint,
            null, this._valueLineColor, true);
    };

    p._displayTitleText = function () {
        var point = this._getPointByRadiusAndValue(this._outerCircleRadius, this._totalValue / 2 + this._valueOffset);
        chart.drawText(
            this._ctx,
            this.data.title.text,
            {
                x: this._centerX,
                y: point.y - this._titleFontSize / 3
            },
            {
                font: this._titleFontSize + 'px Arial',
                textAlign: 'center',
                textBaseline: 'bottom',
                fillStyle: '#747474'
            }
        );
    };

    p._displayValueText = function (value) {
        chart.drawText(
            this._ctx,
            value,
            {
                x: this._centerX,
                y: this._centerY - this._valueFontSize
            },
            {
                font: this._valueFontSize + 'px Arial',
                textAlign: 'center',
                textBaseline: 'middle',
                fillStyle: '#000000'
            }
        );
    };

    p._displayValueTitleText = function () {
        chart.drawText(
            this._ctx,
            this.data.yAxis.title.text,
            {
                x: this._centerX,
                y: this._centerY - this._valueFontSize + this._valueTitleFontSize + this._valueTitleFontSize / 2
            },
            {
                font: this._valueTitleFontSize + 'px Arial',
                textAlign: 'center',
                textBaseline: 'middle',
                fillStyle: '#000000'
            }
        );
    };

    p._displayMinValueText = function () {
        chart.drawText(
            this._ctx,
            this._minValue,
            {
                x: this.startOuterPoint.x - (this.startOuterPoint.x - this.startInnerPoint.x) / 2,
                y: this._centerY + this._minMaxFontSize
            },
            {
                font: this._minMaxFontSize + 'px Arial',
                textAlign: 'center',
                textBaseline: 'middle',
                fillStyle: '#616161'
            }
        );
    };

    p._displayMaxValueText = function () {
        chart.drawText(
            this._ctx,
            this._maxValue,
            {
                x: this.endOuterPoint.x - (this.endOuterPoint.x - this.endInnerPoint.x) / 2,
                y: this._centerY + this._minMaxFontSize
            },
            {
                font: this._minMaxFontSize + 'px Arial',
                textAlign: 'center',
                textBaseline: 'middle',
                fillStyle: '#616161'
            }
        );
    };

    p._displayDebugLine = function () {
        this._ctx.moveTo(this.startOuterPoint.x, this._centerY);
        this._ctx.lineTo(this.startOuterPoint.x, this._innerCircleRadius);
        this._ctx.moveTo(this.startInnerPoint.x, this._centerY);
        this._ctx.lineTo(this.startInnerPoint.x, this._outerCircleRadius);
        this._ctx.stroke();
    };

    p._getPointByRadiusAndValue = function (radius, value) {
        return chart.getPointByDegrees(
            this._centerX, this._centerY, radius,
            chart.getDegreesByValue(
                this._minValue, this._maxValue,
                this._startAngle, this._endAngle, value));
    };

    p.__defineGetter__('startOuterPoint', function () {
        return this._getPointByRadiusAndValue(
            this._outerCircleRadius, this._minValue);
    });

    p.__defineGetter__('startInnerPoint', function () {
        return this._getPointByRadiusAndValue(
            this._innerCircleRadius, this._minValue);
    });

    p.__defineGetter__('endOuterPoint', function () {
        return this._getPointByRadiusAndValue(
            this._outerCircleRadius, this._maxValue);
    });

    p.__defineGetter__('endInnerPoint', function () {
        return this._getPointByRadiusAndValue(
            this._innerCircleRadius, this._maxValue);
    });

    p.__defineGetter__('valueOuterPoint', function () {
        return this._getPointByRadiusAndValue(
            this._outerCircleRadius, this._currentDrawValue);
    });

    p.__defineGetter__('valueInnerPoint', function () {
        return this._getPointByRadiusAndValue(
            this._innerCircleRadius, this._currentDrawValue);
    });

    window.SolidGague = SolidGague;

})();


(function () {
    'use strict';

    var VUMeterGague = function (context, data) {
        this._ctx = context;
        this._canvas = context.canvas;
        this._init(data);
    };

    var p = VUMeterGague.prototype;

    p._init = function (data) {
        this.data = data;
        this.value = data.series.data[0] || 0;
        this._width = this._canvas.width;
        this._height = this._canvas.height;
        this._diameter = Math.min(this._width, this._height);
        this._radius = chart.getPercent(70, this._diameter);
        this._centerX = this._width / 2;
        this._centerY = this._height / 2 + (this._height / 2);
        this._endAngle = data.pane.endAngle + chart.CANVAS_DEGREE_OFFSET;
        this._startAngle = data.pane.startAngle + chart.CANVAS_DEGREE_OFFSET;
        this._startRadian = chart.getRadians(this._startAngle);
        this._endRadian = chart.getRadians(this._endAngle);
        this._minValue = data.yAxis.min;
        this._maxValue = data.yAxis.max;
        this._totalValue = this._maxValue - this._minValue;
        this._valueOffset = (this._minValue < 0) ? this._minValue : 0;
        this._tickRadius = chart.getPercent(94, this._radius);
        this._tickDistance = 2;
        this._tickLabelDistance = 10;
        this._tickLineWidth = 1;
        this._tickLineLength = 10;
        this._tickColor = '#666666';
        this._outLineWidth = 1;
        this._outLineColor = '#999999';
        this._outLineRadius = chart.getPercent(94, this._radius);
        this._tickFontColor = '#333333';
        this._tickFontSize = chart.getPercent(8, this._radius);
        this._tickFontRadius = this._tickRadius + this._tickFontSize / 3;
        this._titleFontColor = '#333333';
        this._titleFonstSize = chart.getPercent(9, this._radius);
        this._needleThickness = 6;
        this._needleLength = chart.getPercent(94, this._radius) - this._tickLineLength;
        this._needleOuterColor = '#b63415';
        this._needleInnerColor = '#e57358';
        this.draw(this.value);
    };

    p.startAnimationDraw = function (value) {
        this._fromValue = (this._toValue) ? this._toValue : 0;
        this._currentValue = this._fromValue;
        this._toValue = value;

        cancelAnimFrame(this.animationId);
        this.animationId = animationLoop(
            this._animationDraw, 60, 'easeInOutQuad',
            function progressHandler() {
            },
            function completeHandler() {
            }, this);
    };

    p._animationDraw = function (easeDecimal, stepDeciaml, currentStep) {
        this._currentValue = this._fromValue + (this._toValue - this._fromValue) * easeDecimal;
        this.draw(this._currentValue);
    };

    p.draw = function (value) {
        chart.clear(this._ctx);
        this._drawPlotBands();
        this._displayTitleText();
        this._drawTick();
        this._drawTickLabel();
        this._drawOutLine();
        this._drawValue(value);
    };

    p._drawTick = function () {
        chart.drawTick(this._ctx,
            chart.getMinorTickPoints(
                this._centerX, this._centerY, this._tickRadius,
                this._minValue, this._maxValue, this._totalValue,
                this._startAngle, this._endAngle, this._tickDistance, this._valueOffset),
            chart.getMinorTickPoints(
                this._centerX, this._centerY, this._tickRadius - this._tickLineLength,
                this._minValue, this._maxValue, this._totalValue,
                this._startAngle, this._endAngle, this._tickDistance, this._valueOffset),
            {
                strokeStyle: this._tickColor,
                lineWidth: this._tickLineWidth
            }
        );
    };

    p._drawTickLabel = function () {
        this._displayTickText();
        this._displayMinValueText();
        this._displayMaxValueText();
    };

    p._displayTickText = function () {
        var value;
        var totalTickLabel = parseInt(this._totalValue / this._tickLabelDistance);

        for (var i = 1; i < totalTickLabel + 1; i++) {
            value = parseInt(this._minValue + (i * this._tickLabelDistance));

            var textAngle = chart.getDegreesByValue(
                this._minValue, this._maxValue,
                this._startAngle, this._endAngle, value);

            chart.drawText(
                this._ctx,
                value,
                chart.getPointByDegrees(
                    this._centerX,
                    this._centerY,
                    this._tickFontRadius, textAngle),
                {
                    font: this._tickFontSize + 'px Arial',
                    textAlign: 'center',
                    textBaseline: 'bottom',
                    fillStyle: this._tickFontColor
                }
            );
        }
    };

    p._displayMinValueText = function () {
        var textAngle = chart.getDegreesByValue(
            this._minValue, this._maxValue,
            this._startAngle, this._endAngle, this._minValue);

        chart.drawText(
            this._ctx,
            this._minValue,
            chart.getPointByDegrees(
                this._centerX,
                this._centerY,
                this._tickFontRadius, textAngle),
            {
                font: this._tickFontSize + 'px Arial',
                textAlign: 'right',
                textBaseline: 'bottom',
                fillStyle: this._tickFontColor
            }
        );
    };

    p._displayMaxValueText = function () {
        var textAngle = chart.getDegreesByValue(
            this._minValue, this._maxValue,
            this._startAngle, this._endAngle, this._maxValue);

        chart.drawText(
            this._ctx,
            this._maxValue,
            chart.getPointByDegrees(
                this._centerX,
                this._centerY,
                this._tickFontRadius, textAngle),
            {
                font: this._tickFontSize + 'px Arial',
                textAlign: 'left',
                textBaseline: 'bottom',
                fillStyle: this._tickFontColor
            }
        );
    };

    p._drawOutLine = function () {
        chart.drawArc(
            this._ctx,
            this._centerX,
            this._centerY,
            this._outLineRadius - this._tickLineLength,
            this._startRadian,
            this._endRadian,
            false,
            {
                lineWidth: this._outLineWidth,
                strokeStyle: this._outLineColor
            }
        );
    };

    p._drawPlotBands = function () {
        var bandTotal = this.data.yAxis.plotBands.length;

        for (var i = 0; i < bandTotal; i++) {
            chart.drawArc(
                this._ctx,
                this._centerX,
                this._centerY,
                this._tickRadius - this._tickLineLength / 2,
                chart.getRadians(
                    chart.getDegreesByValue(
                        this._minValue, this._maxValue,
                        this._startAngle, this._endAngle,
                        this.data.yAxis.plotBands[i].from)),

                chart.getRadians(
                    chart.getDegreesByValue(
                        this._minValue, this._maxValue,
                        this._startAngle, this._endAngle,
                        this.data.yAxis.plotBands[i].to)),
                false,
                {
                    lineWidth: this._tickLineLength,
                    strokeStyle: this.data.yAxis.plotBands[i].color
                }
            );
        }
    };

    p._drawValue = function (value) {
        chart.drawNeedle(
            this._ctx,
            {
                x: this._centerX,
                y: this._height
            },
            chart.getNeedlePoints(
                this._centerX,
                this._height,
                chart.getDegreesByValue(
                    this._minValue, this._maxValue,
                    this._startAngle, this._endAngle, value),
                this._needleThickness,
                this._needleLength),
            {
                lineWidth: 1,
                fillStyle: this._needleInnerColor,
                strokeStyle: this._needleOuterColor
            }
        );
    };

    p._displayTitleText = function () {
        chart.drawText(
            this._ctx,
            this.data.title.text,
            {
                x: this._centerX,
                y: this._height - this._needleLength / 2
            },
            {
                textAlign: 'center',
                textBaseline: 'middle',
                fillStyle: this._titleFontColor,
                font: 'bold ' + this._titleFonstSize + 'px Arial'
            }
        );
    };

    window.VUMeterGague = VUMeterGague;

})();