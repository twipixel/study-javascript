(function () {
    'use strict';

    var InputUtil = function () {

    };

    /**
     * @constant
     * @description Enumeration for the left mouse button
     */
    InputUtil.MOUSE_LEFT = 0;
    /**
     * @constant
     * @description Enumeration for the middle mouse button
     */
    InputUtil.MOUSE_MIDDLE = 1;
    /**
     * @constant
     * @description Enumeration for the right DELETE
     */
    InputUtil.MOUSE_RIGHT = 2;
    /**
     * @constant
     * @description Enumeration for the backspace key
     */
    InputUtil.BACKSPACE = 8;
    /**
     * @constant
     * @description Enumeration for the tab key
     */
    InputUtil.TAB = 9;
    /**
     * @constant
     * @description Enumeration for the enter key
     */
    InputUtil.ENTER = 13;
    /**
     * @constant
     * @description Enumeration for the shift key
     */
    InputUtil.SHIFT = 16;
    /**
     * @constant
     * @description Enumeration for the ctrl key
     */
    InputUtil.CTRL = 17;
    /**
     * @constant
     * @description Enumeration for the alt key
     */
    InputUtil.ALT = 18;
    /**
     * @constant
     * @description Enumeration for the pause/break key
     */
    InputUtil.PAUSE_BREAK = 19;
    /**
     * @constant
     * @description Enumeration for the caps lock key
     */
    InputUtil.CAPS_LOCK = 20;
    /**
     * @constant
     * @description Enumeration for the escape key
     */
    InputUtil.ESCAPE = 27;
    /**
     * @constant
     * @description Enumeration for the page up key
     */
    InputUtil.PAGE_UP = 33;
    /**
     * @constant
     * @description Enumeration for the page down key
     */
    InputUtil.PAGE_DOWN = 34;
    /**
     * @constant
     * @description Enumeration for the end key
     */
    InputUtil.END = 35;
    /**
     * @constant
     * @description Enumeration for the home key
     */
    InputUtil.HOME = 36;
    /**
     * @constant
     * @description Enumeration for the left arrow key
     */
    InputUtil.LEFT_ARROW = 37;
    /**
     * @constant
     * @description Enumeration for the up arrow key
     */
    InputUtil.UP_ARROW = 38;
    /**
     * @constant
     * @description Enumeration for the right arrow key
     */
    InputUtil.RIGHT_ARROW = 39;
    /**
     * @constant
     * @description Enumeration for the down arrow key
     */
    InputUtil.DOWN_ARROW = 40;
    /**
     * @constant
     * @description Enumeration for the insert key
     */
    InputUtil.INSERT = 45;
    /**
     * @constant
     * @description Enumeration for the delete key
     */
    InputUtil.DELETE = 46;
    /**
     * @constant
     * @description Enumeration for the 0 key
     */
    InputUtil.NUM_0 = 48;
    /**
     * @constant
     * @description Enumeration for the 1 key
     */
    InputUtil.NUM_1 = 49;
    /**
     * @constant
     * @description Enumeration for the 2 key
     */
    InputUtil.NUM_2 = 50;
    /**
     * @constant
     * @description Enumeration for the 3 key
     */
    InputUtil.NUM_3 = 51;
    /**
     * @constant
     * @description Enumeration for the 4 key
     */
    InputUtil.NUM_4 = 52;
    /**
     * @constant
     * @description Enumeration for the 5 key
     */
    InputUtil.NUM_5 = 53;
    /**
     * @constant
     * @description Enumeration for the 6 key
     */
    InputUtil.NUM_6 = 54;
    /**
     * @constant
     * @description Enumeration for the 7 key
     */
    InputUtil.NUM_7 = 55;
    /**
     * @constant
     * @description Enumeration for the 8 key
     */
    InputUtil.NUM_8 = 56;
    /**
     * @constant
     * @description Enumeration for the 9 key
     */
    InputUtil.NUM_9 = 57;
    /**
     * @constant
     * @description Enumeration for the a key
     */
    InputUtil.A = 65;
    /**
     * @constant
     * @description Enumeration for the b key
     */
    InputUtil.B = 66;
    /**
     * @constant
     * @description Enumeration for the c key
     */
    InputUtil.C = 67;
    /**
     * @constant
     * @description Enumeration for the d key
     */
    InputUtil.D = 68;
    /**
     * @constant
     * @description Enumeration for the e key
     */
    InputUtil.E = 69;
    /**
     * @constant
     * @description Enumeration for the f key
     */
    InputUtil.F = 70;
    /**
     * @constant
     * @description Enumeration for the g key
     */
    InputUtil.G = 71;
    /**
     * @constant
     * @description Enumeration for the h key
     */
    InputUtil.H = 72;
    /**
     * @constant
     * @description Enumeration for the i key
     */
    InputUtil.I = 73;
    /**
     * @constant
     * @description Enumeration for the j key
     */
    InputUtil.J = 74;
    /**
     * @constant
     * @description Enumeration for the k key
     */
    InputUtil.K = 75;
    /**
     * @constant
     * @description Enumeration for the l key
     */
    InputUtil.L = 76;
    /**
     * @constant
     * @description Enumeration for the m key
     */
    InputUtil.M = 77;
    /**
     * @constant
     * @description Enumeration for the n key
     */
    InputUtil.N = 78;
    /**
     * @constant
     * @description Enumeration for the o key
     */
    InputUtil.O = 79;
    /**
     * @constant
     * @description Enumeration for the p key
     */
    InputUtil.P = 80;
    /**
     * @constant
     * @description Enumeration for the q key
     */
    InputUtil.Q = 81;
    /**
     * @constant
     * @description Enumeration for the r key
     */
    InputUtil.R = 82;
    /**
     * @constant
     * @description Enumeration for the s key
     */
    InputUtil.S = 83;
    /**
     * @constant
     * @description Enumeration for the t key
     */
    InputUtil.T = 84;
    /**
     * @constant
     * @description Enumeration for the u key
     */
    InputUtil.U = 85;
    /**
     * @constant
     * @description Enumeration for the v key
     */
    InputUtil.V = 86;
    /**
     * @constant
     * @description Enumeration for the w key
     */
    InputUtil.W = 87;
    /**
     * @constant
     * @description Enumeration for the x key
     */
    InputUtil.X = 88;
    /**
     * @constant
     * @description Enumeration for the y key
     */
    InputUtil.Y = 89;
    /**
     * @constant
     * @description Enumeration for the z key
     */
    InputUtil.Z = 90;
    /**
     * @constant
     * @description Enumeration for the left window key key
     */
    InputUtil.LEFT_WINDOW_KEY = 91;
    /**
     * @constant
     * @description Enumeration for the right window key key
     */
    InputUtil.RIGHT_WINDOW_KEY = 92;
    /**
     * @constant
     * @description Enumeration for the select key key
     */
    InputUtil.SELECT_KEY = 93;
    /**
     * @constant
     * @description Enumeration for the numpad 0 key
     */
    InputUtil.NUMPAD_0 = 96;
    /**
     * @constant
     * @description Enumeration for the numpad 1 key
     */
    InputUtil.NUMPAD_1 = 97;
    /**
     * @constant
     * @description Enumeration for the numpad 2 key
     */
    InputUtil.NUMPAD_2 = 98;
    /**
     * @constant
     * @description Enumeration for the numpad 3 key
     */
    InputUtil.NUMPAD_3 = 99;
    /**
     * @constant
     * @description Enumeration for the numpad 4 key
     */
    InputUtil.NUMPAD_4 = 100;
    /**
     * @constant
     * @description Enumeration for the numpad 5 key
     */
    InputUtil.NUMPAD_5 = 101;
    /**
     * @constant
     * @description Enumeration for the numpad 6 key
     */
    InputUtil.NUMPAD_6 = 102;
    /**
     * @constant
     * @description Enumeration for the numpad 7 key
     */
    InputUtil.NUMPAD_7 = 103;
    /**
     * @constant
     * @description Enumeration for the numpad 8 key
     */
    InputUtil.NUMPAD_8 = 104;
    /**
     * @constant
     * @description Enumeration for the numpad 9 key
     */
    InputUtil.NUMPAD_9 = 105;
    /**
     * @constant
     * @description Enumeration for the multiply key
     */
    InputUtil.MULTIPLY = 106;
    /**
     * @constant
     * @description Enumeration for the add key
     */
    InputUtil.ADD = 107;
    /**
     * @constant
     * @description Enumeration for the subtract key
     */
    InputUtil.SUBTRACT = 109;
    /**
     * @constant
     * @description Enumeration for the decimal point key
     */
    InputUtil.DECIMAL_POINT = 110;
    /**
     * @constant
     * @description Enumeration for the divide key
     */
    InputUtil.DIVIDE = 111;
    /**
     * @constant
     * @description Enumeration for the f1 key
     */
    InputUtil.F1 = 112;
    /**
     * @constant
     * @description Enumeration for the f2 key
     */
    InputUtil.F2 = 113;
    /**
     * @constant
     * @description Enumeration for the f3 key
     */
    InputUtil.F3 = 114;
    /**
     * @constant
     * @description Enumeration for the f4 key
     */
    InputUtil.F4 = 115;
    /**
     * @constant
     * @description Enumeration for the f5 key
     */
    InputUtil.F5 = 116;
    /**
     * @constant
     * @description Enumeration for the f6 key
     */
    InputUtil.F6 = 117;
    /**
     * @constant
     * @description Enumeration for the f7 key
     */
    InputUtil.F7 = 118;
    /**
     * @constant
     * @description Enumeration for the f8 key
     */
    InputUtil.F8 = 119;
    /**
     * @constant
     * @description Enumeration for the f9 key
     */
    InputUtil.F9 = 120;
    /**
     * @constant
     * @description Enumeration for the f10 key
     */
    InputUtil.F10 = 121;
    /**
     * @constant
     * @description Enumeration for the f11 key
     */
    InputUtil.F11 = 122;
    /**
     * @constant
     * @description Enumeration for the f12 key
     */
    InputUtil.F12 = 123;
    /**
     * @constant
     * @description Enumeration for the num lock key
     */
    InputUtil.NUM_LOCK = 144;
    /**
     * @constant
     * @description Enumeration for the scroll lock key
     */
    InputUtil.SCROLL_LOCK = 145;
    /**
     * @constant
     * @description Enumeration for the semi-colon key
     */
    InputUtil.SEMI_COLON = 186;
    /**
     * @constant
     * @description Enumeration for the equal sign key
     */
    InputUtil.EQUAL_SIGN = 187;
    /**
     * @constant
     * @description Enumeration for the comma key
     */
    InputUtil.COMMA = 188;
    /**
     * @constant
     * @description Enumeration for the dash key
     */
    InputUtil.DASH = 189;
    /**
     * @constant
     * @description Enumeration for the period key
     */
    InputUtil.PERIOD = 190;
    /**
     * @constant
     * @description Enumeration for the forward slash key
     */
    InputUtil.FORWARD_SLASH = 191;
    /**
     * @constant
     * @description Enumeration for the grave accent key
     */
    InputUtil.GRAVE_ACCENT = 192;
    /**
     * @constant
     * @description Enumeration for the open bracket key
     */
    InputUtil.OPEN_BRACKET = 219;
    /**
     * @constant
     * @description Enumeration for the back slash key
     */
    InputUtil.BACK_SLASH = 220;
    /**
     * @constant
     * @description Enumeration for the close braket key
     */
    InputUtil.CLOSE_BRAKET = 221;
    /**
     * @constant
     * @description Enumeration for the single quote key
     */
    InputUtil.SINGLE_QUOTE = 222;
    /**
     * @constant
     * @description Enumeration for the space key
     */
    InputUtil.SPACE = 32;

    /**
     * @constant
     * @description mouse wheel
     */
    InputUtil.MOUSE_WHEEL = 500;

    InputUtil.bindKeys = {};


    InputUtil.bindKey = function (keyCode, callback, thisArg) {
        this.bindKeys[keyCode] = callback.bind(thisArg);
    };

    InputUtil.onkeydown = function (e) {
        var keyCode = e.keyCode;

        if (this.bindKeys[keyCode])
            this.bindKeys[keyCode].call();
    };

    InputUtil.onkeyup = function (e) {
        var keyCode = e.keyCode;

        if (this.bindKeys[keyCode])
            this.bindKeys[keyCode].call();
    };

    InputUtil.bindWheel = function (movement, callback, thisArg) {
        this.wheelmovement = movement;
        this.bindKeys[this.MOUSE_WHEEL] = callback.bind(thisArg);
    };

    InputUtil.mousewheel = function () {
        if (window.event.wheelDelta > 0)
            this.bindKeys[this.MOUSE_WHEEL].call(null, this.wheelmovement);
        else
            this.bindKeys[this.MOUSE_WHEEL].call(null, -this.wheelmovement);
    };

    window.document.onkeyup = InputUtil.onkeyup.bind(InputUtil);
    window.document.onkeydown = InputUtil.onkeydown.bind(InputUtil);
    window.document.addEventListener('mousewheel', InputUtil.mousewheel.bind(InputUtil));

    window.InputUtil = InputUtil;
})();