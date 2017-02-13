!function e(n, t, r) {
    function i(s, a) {
        if (!t[s]) {
            if (!n[s]) {
                var f = "function" == typeof require && require;
                if (!a && f)return f(s, !0);
                if (o)return o(s, !0);
                throw new Error("Cannot find module '" + s + "'")
            }
            var u = t[s] = {exports: {}};
            n[s][0].call(u.exports, function (e) {
                var t = n[s][1][e];
                return i(t ? t : e)
            }, u, u.exports, e, n, t, r)
        }
        return t[s].exports
    }

    for (var o = "function" == typeof require && require, s = 0; s < r.length; s++)i(r[s]);
    return i
}({
    1: [function (e, n, t) {
        (function (t, r, i, o, s, a, f, u, l) {
            "use strict";
            n.exports = e("./lib/core.js"), e("./lib/done.js"), e("./lib/es6-extensions.js"), e("./lib/node-extensions.js")
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/font-face-observer/node_modules/promise/index.js", "/../../node_modules/font-face-observer/node_modules/promise")
    }, {
        "./lib/core.js": 2,
        "./lib/done.js": 3,
        "./lib/es6-extensions.js": 4,
        "./lib/node-extensions.js": 5,
        buffer: 10,
        oMfpAn: 13
    }], 2: [function (e, n, t) {
        (function (t, r, i, o, s, a, f, u, l) {
            "use strict";
            function c(e) {
                function n(e) {
                    return null === o ? void a.push(e) : void p(function () {
                        var n = o ? e.onFulfilled : e.onRejected;
                        if (null === n)return void(o ? e.resolve : e.reject)(s);
                        var t;
                        try {
                            t = n(s)
                        } catch (r) {
                            return void e.reject(r)
                        }
                        e.resolve(t)
                    })
                }

                function t(e) {
                    try {
                        if (e === f)throw new TypeError("A promise cannot be resolved with itself.");
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var n = e.then;
                            if ("function" == typeof n)return void h(n.bind(e), t, r)
                        }
                        o = !0, s = e, i()
                    } catch (a) {
                        r(a)
                    }
                }

                function r(e) {
                    o = !1, s = e, i()
                }

                function i() {
                    for (var e = 0, t = a.length; e < t; e++)n(a[e]);
                    a = null
                }

                if ("object" != typeof this)throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e)throw new TypeError("not a function");
                var o = null, s = null, a = [], f = this;
                this.then = function (e, t) {
                    return new f.constructor(function (r, i) {
                        n(new d(e, t, r, i))
                    })
                }, h(e, t, r)
            }

            function d(e, n, t, r) {
                this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof n ? n : null, this.resolve = t, this.reject = r
            }

            function h(e, n, t) {
                var r = !1;
                try {
                    e(function (e) {
                        r || (r = !0, n(e))
                    }, function (e) {
                        r || (r = !0, t(e))
                    })
                } catch (i) {
                    if (r)return;
                    r = !0, t(i)
                }
            }

            var p = e("asap");
            n.exports = c
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/font-face-observer/node_modules/promise/lib/core.js", "/../../node_modules/font-face-observer/node_modules/promise/lib")
    }, {asap: 6, buffer: 10, oMfpAn: 13}], 3: [function (e, n, t) {
        (function (t, r, i, o, s, a, f, u, l) {
            "use strict";
            var c = e("./core.js"), d = e("asap");
            n.exports = c, c.prototype.done = function (e, n) {
                var t = arguments.length ? this.then.apply(this, arguments) : this;
                t.then(null, function (e) {
                    d(function () {
                        throw e
                    })
                })
            }
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/font-face-observer/node_modules/promise/lib/done.js", "/../../node_modules/font-face-observer/node_modules/promise/lib")
    }, {"./core.js": 2, asap: 6, buffer: 10, oMfpAn: 13}], 4: [function (e, n, t) {
        (function (t, r, i, o, s, a, f, u, l) {
            "use strict";
            function c(e) {
                this.then = function (n) {
                    return "function" != typeof n ? this : new d(function (t, r) {
                        h(function () {
                            try {
                                t(n(e))
                            } catch (i) {
                                r(i)
                            }
                        })
                    })
                }
            }

            var d = e("./core.js"), h = e("asap");
            n.exports = d, c.prototype = d.prototype;
            var p = new c((!0)), g = new c((!1)), y = new c(null), b = new c((void 0)), m = new c(0), w = new c("");
            d.resolve = function (e) {
                if (e instanceof d)return e;
                if (null === e)return y;
                if (void 0 === e)return b;
                if (e === !0)return p;
                if (e === !1)return g;
                if (0 === e)return m;
                if ("" === e)return w;
                if ("object" == typeof e || "function" == typeof e)try {
                    var n = e.then;
                    if ("function" == typeof n)return new d(n.bind(e))
                } catch (t) {
                    return new d(function (e, n) {
                        n(t)
                    })
                }
                return new c(e)
            }, d.all = function (e) {
                var n = Array.prototype.slice.call(e);
                return new d(function (e, t) {
                    function r(o, s) {
                        try {
                            if (s && ("object" == typeof s || "function" == typeof s)) {
                                var a = s.then;
                                if ("function" == typeof a)return void a.call(s, function (e) {
                                    r(o, e)
                                }, t)
                            }
                            n[o] = s, 0 === --i && e(n)
                        } catch (f) {
                            t(f)
                        }
                    }

                    if (0 === n.length)return e([]);
                    for (var i = n.length, o = 0; o < n.length; o++)r(o, n[o])
                })
            }, d.reject = function (e) {
                return new d(function (n, t) {
                    t(e)
                })
            }, d.race = function (e) {
                return new d(function (n, t) {
                    e.forEach(function (e) {
                        d.resolve(e).then(n, t)
                    })
                })
            }, d.prototype["catch"] = function (e) {
                return this.then(null, e)
            }
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/font-face-observer/node_modules/promise/lib/es6-extensions.js", "/../../node_modules/font-face-observer/node_modules/promise/lib")
    }, {"./core.js": 2, asap: 6, buffer: 10, oMfpAn: 13}], 5: [function (e, n, t) {
        (function (t, r, i, o, s, a, f, u, l) {
            "use strict";
            var c = e("./core.js"), d = e("asap");
            n.exports = c, c.denodeify = function (e, n) {
                return n = n || 1 / 0, function () {
                    var t = this, r = Array.prototype.slice.call(arguments);
                    return new c(function (i, o) {
                        for (; r.length && r.length > n;)r.pop();
                        r.push(function (e, n) {
                            e ? o(e) : i(n)
                        });
                        var s = e.apply(t, r);
                        !s || "object" != typeof s && "function" != typeof s || "function" != typeof s.then || i(s)
                    })
                }
            }, c.nodeify = function (e) {
                return function () {
                    var n = Array.prototype.slice.call(arguments), t = "function" == typeof n[n.length - 1] ? n.pop() : null, r = this;
                    try {
                        return e.apply(this, arguments).nodeify(t, r)
                    } catch (i) {
                        if (null === t || "undefined" == typeof t)return new c(function (e, n) {
                            n(i)
                        });
                        d(function () {
                            t.call(r, i)
                        })
                    }
                }
            }, c.prototype.nodeify = function (e, n) {
                return "function" != typeof e ? this : void this.then(function (t) {
                    d(function () {
                        e.call(n, null, t)
                    })
                }, function (t) {
                    d(function () {
                        e.call(n, t)
                    })
                })
            }
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/font-face-observer/node_modules/promise/lib/node-extensions.js", "/../../node_modules/font-face-observer/node_modules/promise/lib")
    }, {"./core.js": 2, asap: 6, buffer: 10, oMfpAn: 13}], 6: [function (e, n, t) {
        (function (e, t, r, i, o, s, a, f, u) {
            function l() {
                for (; d.next;) {
                    d = d.next;
                    var e = d.task;
                    d.task = void 0;
                    var n = d.domain;
                    n && (d.domain = void 0, n.enter());
                    try {
                        e()
                    } catch (t) {
                        if (y)throw n && n.exit(), setTimeout(l, 0), n && n.enter(), t;
                        setTimeout(function () {
                            throw t
                        }, 0)
                    }
                    n && n.exit()
                }
                p = !1
            }

            function c(n) {
                h = h.next = {task: n, domain: y && e.domain, next: null}, p || (p = !0, g())
            }

            var d = {task: void 0, next: null}, h = d, p = !1, g = void 0, y = !1;
            if ("undefined" != typeof e && e.nextTick)y = !0, g = function () {
                e.nextTick(l)
            }; else if ("function" == typeof setImmediate)g = "undefined" != typeof window ? setImmediate.bind(window, l) : function () {
                setImmediate(l)
            }; else if ("undefined" != typeof MessageChannel) {
                var b = new MessageChannel;
                b.port1.onmessage = l, g = function () {
                    b.port2.postMessage(0)
                }
            } else g = function () {
                setTimeout(l, 0)
            };
            n.exports = c
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/font-face-observer/node_modules/promise/node_modules/asap/asap.js", "/../../node_modules/font-face-observer/node_modules/promise/node_modules/asap")
    }, {buffer: 10, oMfpAn: 13}], 7: [function (e, n, t) {
        (function (e, t, r, i, o, s, a, f, u) {
            var l = {};
            n.exports = l, l.createElement = function (e) {
                return document.createElement(e)
            }, l.createText = function (e) {
                return document.createTextNode(e)
            }, l.style = function (e, n) {
                e.style.cssText = n
            }, l.append = function (e, n) {
                e.appendChild(n)
            }, l.remove = function (e, n) {
                e.removeChild(n)
            }
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/font-face-observer/src/dom.js", "/../../node_modules/font-face-observer/src")
    }, {buffer: 10, oMfpAn: 13}], 8: [function (e, n, t) {
        (function (t, r, i, o, s, a, f, u, l) {
            var c = e("promise"), d = e("./dom"), h = e("./ruler"), p = function (e, n) {
                n = n || {weight: "normal"}, this.family = e, this.style = n.style || "normal", this.variant = n.variant || "normal", this.weight = n.weight || "normal", this.stretch = n.stretch || "stretch", this.featureSettings = n.featureSettings || "normal"
            };
            n.exports = p, p.HAS_WEBKIT_FALLBACK_BUG = null, p.DEFAULT_TIMEOUT = 3e3, p.getUserAgent = function () {
                return window.navigator.userAgent
            }, p.hasWebKitFallbackBug = function () {
                if (null === p.HAS_WEBKIT_FALLBACK_BUG) {
                    var e = /AppleWeb[kK]it\/([0-9]+)(?:\.([0-9]+))/.exec(p.getUserAgent());
                    p.HAS_WEBKIT_FALLBACK_BUG = !!e && (parseInt(e[1], 10) < 536 || 536 === parseInt(e[1], 10) && parseInt(e[2], 10) <= 11)
                }
                return p.HAS_WEBKIT_FALLBACK_BUG
            }, p.prototype.getStyle = function () {
                return "font-style:" + this.style + ";font-variant:" + this.variant + ";font-weight:" + this.weight + ";font-stretch:" + this.stretch + ";font-feature-settings:" + this.featureSettings + ";-moz-font-feature-settings:" + this.featureSettings + ";-webkit-font-feature-settings:" + this.featureSettings + ";"
            }, p.prototype.check = function (e, n) {
                var t = e || "BESbswy", r = n || p.DEFAULT_TIMEOUT, i = this.getStyle(), o = d.createElement("div"), s = new h(t), a = new h(t), f = new h(t), u = -1, l = -1, g = -1, y = -1, b = -1, m = -1, w = this;
                return s.setFont('"Times New Roman", sans-serif', i), a.setFont("serif", i), f.setFont("monospace", i), d.append(o, s.getElement()), d.append(o, a.getElement()), d.append(o, f.getElement()), d.append(document.body, o), y = s.getWidth(), b = a.getWidth(), m = f.getWidth(), new c(function (e, n) {
                    function t() {
                        null !== o.parentNode && d.remove(document.body, o)
                    }

                    function c() {
                        u !== -1 && l !== -1 && g !== -1 && u === l && l === g && (p.hasWebKitFallbackBug() ? u === y && l === y && g === y || u === b && l === b && g === b || u === m && l === m && g === m || (t(), e(w)) : (t(), e(w)))
                    }

                    setTimeout(function () {
                        t(), n(w)
                    }, r), s.onResize(function (e) {
                        u = e, c()
                    }), s.setFont(w.family + ",sans-serif", i), a.onResize(function (e) {
                        l = e, c()
                    }), a.setFont(w.family + ",serif", i), f.onResize(function (e) {
                        g = e, c()
                    }), f.setFont(w.family + ",monospace", i)
                })
            }
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/font-face-observer/src/observer.js", "/../../node_modules/font-face-observer/src")
    }, {"./dom": 7, "./ruler": 9, buffer: 10, oMfpAn: 13, promise: 1}], 9: [function (e, n, t) {
        (function (t, r, i, o, s, a, f, u, l) {
            var c = e("./dom"), d = function (e) {
                var n = "display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";
                this.element = c.createElement("div"), this.element.setAttribute("aria-hidden", "true"), c.append(this.element, c.createText(e)), this.collapsible = c.createElement("span"), this.expandable = c.createElement("span"), this.collapsibleInner = c.createElement("span"), this.expandableInner = c.createElement("span"), this.lastOffsetWidth = -1, c.style(this.collapsible, n), c.style(this.expandable, n), c.style(this.expandableInner, n), c.style(this.collapsibleInner, "display:inline-block;width:200%;height:200%;"), c.append(this.collapsible, this.collapsibleInner), c.append(this.expandable, this.expandableInner), c.append(this.element, this.collapsible), c.append(this.element, this.expandable)
            };
            n.exports = d, d.prototype.getElement = function () {
                return this.element
            }, d.prototype.setFont = function (e, n) {
                c.style(this.element, "min-width:20px;min-height:20px;display:inline-block;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-size:100px;font-family:" + e + ";" + n)
            }, d.prototype.getWidth = function () {
                return this.element.offsetWidth
            }, d.prototype.setWidth = function (e) {
                this.element.style.width = e + "px"
            }, d.prototype.reset = function () {
                var e = this.getWidth(), n = e + 100;
                return this.expandableInner.style.width = n + "px", this.expandable.scrollLeft = n, this.collapsible.scrollLeft = this.collapsible.scrollWidth + 100, this.lastOffsetWidth !== e && (this.lastOffsetWidth = e, !0)
            }, d.prototype.onScroll = function (e) {
                this.reset() && null !== this.element.parentNode && e(this.lastOffsetWidth)
            }, d.prototype.onResize = function (e) {
                var n = this;
                this.collapsible.addEventListener("scroll", function () {
                    n.onScroll(e)
                }, !1), this.expandable.addEventListener("scroll", function () {
                    n.onScroll(e)
                }, !1), this.reset()
            }
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/font-face-observer/src/ruler.js", "/../../node_modules/font-face-observer/src")
    }, {"./dom": 7, buffer: 10, oMfpAn: 13}], 10: [function (e, n, t) {
        (function (n, r, i, o, s, a, f, u, l) {
            function i(e, n, t) {
                if (!(this instanceof i))return new i(e, n, t);
                var r = typeof e;
                if ("base64" === n && "string" === r)for (e = G(e); e.length % 4 !== 0;)e += "=";
                var o;
                if ("number" === r)o = H(e); else if ("string" === r)o = i.byteLength(e, n); else {
                    if ("object" !== r)throw new Error("First argument needs to be a number, array or string.");
                    o = H(e.length)
                }
                var s;
                i._useTypedArrays ? s = i._augment(new Uint8Array(o)) : (s = this, s.length = o, s._isBuffer = !0);
                var a;
                if (i._useTypedArrays && "number" == typeof e.byteLength)s._set(e); else if (K(e))for (a = 0; a < o; a++)i.isBuffer(e) ? s[a] = e.readUInt8(a) : s[a] = e[a]; else if ("string" === r)s.write(e, 0, n); else if ("number" === r && !i._useTypedArrays && !t)for (a = 0; a < o; a++)s[a] = 0;
                return s
            }

            function c(e, n, t, r) {
                t = Number(t) || 0;
                var o = e.length - t;
                r ? (r = Number(r), r > o && (r = o)) : r = o;
                var s = n.length;
                V(s % 2 === 0, "Invalid hex string"), r > s / 2 && (r = s / 2);
                for (var a = 0; a < r; a++) {
                    var f = parseInt(n.substr(2 * a, 2), 16);
                    V(!isNaN(f), "Invalid hex string"), e[t + a] = f
                }
                return i._charsWritten = 2 * a, a
            }

            function d(e, n, t, r) {
                var o = i._charsWritten = Y(W(n), e, t, r);
                return o
            }

            function h(e, n, t, r) {
                var o = i._charsWritten = Y(D(n), e, t, r);
                return o
            }

            function p(e, n, t, r) {
                return h(e, n, t, r)
            }

            function g(e, n, t, r) {
                var o = i._charsWritten = Y(R(n), e, t, r);
                return o
            }

            function y(e, n, t, r) {
                var o = i._charsWritten = Y(O(n), e, t, r);
                return o
            }

            function b(e, n, t) {
                return 0 === n && t === e.length ? X.fromByteArray(e) : X.fromByteArray(e.slice(n, t))
            }

            function m(e, n, t) {
                var r = "", i = "";
                t = Math.min(e.length, t);
                for (var o = n; o < t; o++)e[o] <= 127 ? (r += z(i) + String.fromCharCode(e[o]), i = "") : i += "%" + e[o].toString(16);
                return r + z(i)
            }

            function w(e, n, t) {
                var r = "";
                t = Math.min(e.length, t);
                for (var i = n; i < t; i++)r += String.fromCharCode(e[i]);
                return r
            }

            function v(e, n, t) {
                return w(e, n, t)
            }

            function A(e, n, t) {
                var r = e.length;
                (!n || n < 0) && (n = 0), (!t || t < 0 || t > r) && (t = r);
                for (var i = "", o = n; o < t; o++)i += P(e[o]);
                return i
            }

            function E(e, n, t) {
                for (var r = e.slice(n, t), i = "", o = 0; o < r.length; o += 2)i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                return i
            }

            function B(e, n, t, r) {
                r || (V("boolean" == typeof t, "missing or invalid endian"), V(void 0 !== n && null !== n, "missing offset"), V(n + 1 < e.length, "Trying to read beyond buffer length"));
                var i = e.length;
                if (!(n >= i)) {
                    var o;
                    return t ? (o = e[n], n + 1 < i && (o |= e[n + 1] << 8)) : (o = e[n] << 8, n + 1 < i && (o |= e[n + 1])), o
                }
            }

            function I(e, n, t, r) {
                r || (V("boolean" == typeof t, "missing or invalid endian"), V(void 0 !== n && null !== n, "missing offset"), V(n + 3 < e.length, "Trying to read beyond buffer length"));
                var i = e.length;
                if (!(n >= i)) {
                    var o;
                    return t ? (n + 2 < i && (o = e[n + 2] << 16), n + 1 < i && (o |= e[n + 1] << 8), o |= e[n], n + 3 < i && (o += e[n + 3] << 24 >>> 0)) : (n + 1 < i && (o = e[n + 1] << 16), n + 2 < i && (o |= e[n + 2] << 8), n + 3 < i && (o |= e[n + 3]), o += e[n] << 24 >>> 0), o
                }
            }

            function _(e, n, t, r) {
                r || (V("boolean" == typeof t, "missing or invalid endian"), V(void 0 !== n && null !== n, "missing offset"), V(n + 1 < e.length, "Trying to read beyond buffer length"));
                var i = e.length;
                if (!(n >= i)) {
                    var o = B(e, n, t, !0), s = 32768 & o;
                    return s ? (65535 - o + 1) * -1 : o
                }
            }

            function S(e, n, t, r) {
                r || (V("boolean" == typeof t, "missing or invalid endian"), V(void 0 !== n && null !== n, "missing offset"), V(n + 3 < e.length, "Trying to read beyond buffer length"));
                var i = e.length;
                if (!(n >= i)) {
                    var o = I(e, n, t, !0), s = 2147483648 & o;
                    return s ? (4294967295 - o + 1) * -1 : o
                }
            }

            function C(e, n, t, r) {
                return r || (V("boolean" == typeof t, "missing or invalid endian"), V(n + 3 < e.length, "Trying to read beyond buffer length")), Q.read(e, n, t, 23, 4)
            }

            function M(e, n, t, r) {
                return r || (V("boolean" == typeof t, "missing or invalid endian"), V(n + 7 < e.length, "Trying to read beyond buffer length")), Q.read(e, n, t, 52, 8)
            }

            function T(e, n, t, r, i) {
                i || (V(void 0 !== n && null !== n, "missing value"), V("boolean" == typeof r, "missing or invalid endian"), V(void 0 !== t && null !== t, "missing offset"), V(t + 1 < e.length, "trying to write beyond buffer length"), q(n, 65535));
                var o = e.length;
                if (!(t >= o))for (var s = 0, a = Math.min(o - t, 2); s < a; s++)e[t + s] = (n & 255 << 8 * (r ? s : 1 - s)) >>> 8 * (r ? s : 1 - s)
            }

            function L(e, n, t, r, i) {
                i || (V(void 0 !== n && null !== n, "missing value"), V("boolean" == typeof r, "missing or invalid endian"), V(void 0 !== t && null !== t, "missing offset"), V(t + 3 < e.length, "trying to write beyond buffer length"), q(n, 4294967295));
                var o = e.length;
                if (!(t >= o))for (var s = 0, a = Math.min(o - t, 4); s < a; s++)e[t + s] = n >>> 8 * (r ? s : 3 - s) & 255
            }

            function k(e, n, t, r, i) {
                i || (V(void 0 !== n && null !== n, "missing value"), V("boolean" == typeof r, "missing or invalid endian"), V(void 0 !== t && null !== t, "missing offset"), V(t + 1 < e.length, "Trying to write beyond buffer length"), Z(n, 32767, -32768));
                var o = e.length;
                t >= o || (n >= 0 ? T(e, n, t, r, i) : T(e, 65535 + n + 1, t, r, i))
            }

            function x(e, n, t, r, i) {
                i || (V(void 0 !== n && null !== n, "missing value"), V("boolean" == typeof r, "missing or invalid endian"), V(void 0 !== t && null !== t, "missing offset"), V(t + 3 < e.length, "Trying to write beyond buffer length"), Z(n, 2147483647, -2147483648));
                var o = e.length;
                t >= o || (n >= 0 ? L(e, n, t, r, i) : L(e, 4294967295 + n + 1, t, r, i))
            }

            function j(e, n, t, r, i) {
                i || (V(void 0 !== n && null !== n, "missing value"), V("boolean" == typeof r, "missing or invalid endian"), V(void 0 !== t && null !== t, "missing offset"), V(t + 3 < e.length, "Trying to write beyond buffer length"), J(n, 3.4028234663852886e38, -3.4028234663852886e38));
                var o = e.length;
                t >= o || Q.write(e, n, t, r, 23, 4)
            }

            function U(e, n, t, r, i) {
                i || (V(void 0 !== n && null !== n, "missing value"), V("boolean" == typeof r, "missing or invalid endian"), V(void 0 !== t && null !== t, "missing offset"), V(t + 7 < e.length, "Trying to write beyond buffer length"), J(n, 1.7976931348623157e308, -1.7976931348623157e308));
                var o = e.length;
                t >= o || Q.write(e, n, t, r, 52, 8)
            }

            function G(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            }

            function N(e, n, t) {
                return "number" != typeof e ? t : (e = ~~e, e >= n ? n : e >= 0 ? e : (e += n, e >= 0 ? e : 0))
            }

            function H(e) {
                return e = ~~Math.ceil(+e), e < 0 ? 0 : e
            }

            function F(e) {
                return (Array.isArray || function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                })(e)
            }

            function K(e) {
                return F(e) || i.isBuffer(e) || e && "object" == typeof e && "number" == typeof e.length
            }

            function P(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function W(e) {
                for (var n = [], t = 0; t < e.length; t++) {
                    var r = e.charCodeAt(t);
                    if (r <= 127)n.push(e.charCodeAt(t)); else {
                        var i = t;
                        r >= 55296 && r <= 57343 && t++;
                        for (var o = encodeURIComponent(e.slice(i, t + 1)).substr(1).split("%"), s = 0; s < o.length; s++)n.push(parseInt(o[s], 16))
                    }
                }
                return n
            }

            function D(e) {
                for (var n = [], t = 0; t < e.length; t++)n.push(255 & e.charCodeAt(t));
                return n
            }

            function O(e) {
                for (var n, t, r, i = [], o = 0; o < e.length; o++)n = e.charCodeAt(o), t = n >> 8, r = n % 256, i.push(r), i.push(t);
                return i
            }

            function R(e) {
                return X.toByteArray(e)
            }

            function Y(e, n, t, r) {
                for (var i = 0; i < r && !(i + t >= n.length || i >= e.length); i++)n[i + t] = e[i];
                return i
            }

            function z(e) {
                try {
                    return decodeURIComponent(e)
                } catch (n) {
                    return String.fromCharCode(65533)
                }
            }

            function q(e, n) {
                V("number" == typeof e, "cannot write a non-number as a number"), V(e >= 0, "specified a negative value for writing an unsigned value"), V(e <= n, "value is larger than maximum value for type"), V(Math.floor(e) === e, "value has a fractional component")
            }

            function Z(e, n, t) {
                V("number" == typeof e, "cannot write a non-number as a number"), V(e <= n, "value larger than maximum allowed value"), V(e >= t, "value smaller than minimum allowed value"), V(Math.floor(e) === e, "value has a fractional component")
            }

            function J(e, n, t) {
                V("number" == typeof e, "cannot write a non-number as a number"), V(e <= n, "value larger than maximum allowed value"), V(e >= t, "value smaller than minimum allowed value")
            }

            function V(e, n) {
                if (!e)throw new Error(n || "Failed assertion")
            }

            var X = e("base64-js"), Q = e("ieee754");
            t.Buffer = i, t.SlowBuffer = i, t.INSPECT_MAX_BYTES = 50, i.poolSize = 8192, i._useTypedArrays = function () {
                try {
                    var e = new ArrayBuffer(0), n = new Uint8Array(e);
                    return n.foo = function () {
                        return 42
                    }, 42 === n.foo() && "function" == typeof n.subarray
                } catch (t) {
                    return !1
                }
            }(), i.isEncoding = function (e) {
                switch (String(e).toLowerCase()) {
                    case"hex":
                    case"utf8":
                    case"utf-8":
                    case"ascii":
                    case"binary":
                    case"base64":
                    case"raw":
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, i.isBuffer = function (e) {
                return !(null === e || void 0 === e || !e._isBuffer)
            }, i.byteLength = function (e, n) {
                var t;
                switch (e += "", n || "utf8") {
                    case"hex":
                        t = e.length / 2;
                        break;
                    case"utf8":
                    case"utf-8":
                        t = W(e).length;
                        break;
                    case"ascii":
                    case"binary":
                    case"raw":
                        t = e.length;
                        break;
                    case"base64":
                        t = R(e).length;
                        break;
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        t = 2 * e.length;
                        break;
                    default:
                        throw new Error("Unknown encoding")
                }
                return t
            }, i.concat = function (e, n) {
                if (V(F(e), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === e.length)return new i(0);
                if (1 === e.length)return e[0];
                var t;
                if ("number" != typeof n)for (n = 0, t = 0; t < e.length; t++)n += e[t].length;
                var r = new i(n), o = 0;
                for (t = 0; t < e.length; t++) {
                    var s = e[t];
                    s.copy(r, o), o += s.length
                }
                return r
            }, i.prototype.write = function (e, n, t, r) {
                if (isFinite(n))isFinite(t) || (r = t, t = void 0); else {
                    var i = r;
                    r = n, n = t, t = i
                }
                n = Number(n) || 0;
                var o = this.length - n;
                t ? (t = Number(t), t > o && (t = o)) : t = o, r = String(r || "utf8").toLowerCase();
                var s;
                switch (r) {
                    case"hex":
                        s = c(this, e, n, t);
                        break;
                    case"utf8":
                    case"utf-8":
                        s = d(this, e, n, t);
                        break;
                    case"ascii":
                        s = h(this, e, n, t);
                        break;
                    case"binary":
                        s = p(this, e, n, t);
                        break;
                    case"base64":
                        s = g(this, e, n, t);
                        break;
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        s = y(this, e, n, t);
                        break;
                    default:
                        throw new Error("Unknown encoding")
                }
                return s
            }, i.prototype.toString = function (e, n, t) {
                var r = this;
                if (e = String(e || "utf8").toLowerCase(), n = Number(n) || 0, t = void 0 !== t ? Number(t) : t = r.length, t === n)return "";
                var i;
                switch (e) {
                    case"hex":
                        i = A(r, n, t);
                        break;
                    case"utf8":
                    case"utf-8":
                        i = m(r, n, t);
                        break;
                    case"ascii":
                        i = w(r, n, t);
                        break;
                    case"binary":
                        i = v(r, n, t);
                        break;
                    case"base64":
                        i = b(r, n, t);
                        break;
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        i = E(r, n, t);
                        break;
                    default:
                        throw new Error("Unknown encoding")
                }
                return i
            }, i.prototype.toJSON = function () {
                return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
            }, i.prototype.copy = function (e, n, t, r) {
                var o = this;
                if (t || (t = 0), r || 0 === r || (r = this.length), n || (n = 0), r !== t && 0 !== e.length && 0 !== o.length) {
                    V(r >= t, "sourceEnd < sourceStart"), V(n >= 0 && n < e.length, "targetStart out of bounds"), V(t >= 0 && t < o.length, "sourceStart out of bounds"), V(r >= 0 && r <= o.length, "sourceEnd out of bounds"), r > this.length && (r = this.length), e.length - n < r - t && (r = e.length - n + t);
                    var s = r - t;
                    if (s < 100 || !i._useTypedArrays)for (var a = 0; a < s; a++)e[a + n] = this[a + t]; else e._set(this.subarray(t, t + s), n)
                }
            }, i.prototype.slice = function (e, n) {
                var t = this.length;
                if (e = N(e, t, 0), n = N(n, t, t), i._useTypedArrays)return i._augment(this.subarray(e, n));
                for (var r = n - e, o = new i(r, (void 0), (!0)), s = 0; s < r; s++)o[s] = this[s + e];
                return o
            }, i.prototype.get = function (e) {
                return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e)
            }, i.prototype.set = function (e, n) {
                return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e, n)
            }, i.prototype.readUInt8 = function (e, n) {
                if (n || (V(void 0 !== e && null !== e, "missing offset"), V(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length))return this[e]
            }, i.prototype.readUInt16LE = function (e, n) {
                return B(this, e, !0, n)
            }, i.prototype.readUInt16BE = function (e, n) {
                return B(this, e, !1, n)
            }, i.prototype.readUInt32LE = function (e, n) {
                return I(this, e, !0, n)
            }, i.prototype.readUInt32BE = function (e, n) {
                return I(this, e, !1, n)
            }, i.prototype.readInt8 = function (e, n) {
                if (n || (V(void 0 !== e && null !== e, "missing offset"), V(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) {
                    var t = 128 & this[e];
                    return t ? (255 - this[e] + 1) * -1 : this[e]
                }
            }, i.prototype.readInt16LE = function (e, n) {
                return _(this, e, !0, n)
            }, i.prototype.readInt16BE = function (e, n) {
                return _(this, e, !1, n)
            }, i.prototype.readInt32LE = function (e, n) {
                return S(this, e, !0, n)
            }, i.prototype.readInt32BE = function (e, n) {
                return S(this, e, !1, n)
            }, i.prototype.readFloatLE = function (e, n) {
                return C(this, e, !0, n)
            }, i.prototype.readFloatBE = function (e, n) {
                return C(this, e, !1, n)
            }, i.prototype.readDoubleLE = function (e, n) {
                return M(this, e, !0, n)
            }, i.prototype.readDoubleBE = function (e, n) {
                return M(this, e, !1, n)
            }, i.prototype.writeUInt8 = function (e, n, t) {
                t || (V(void 0 !== e && null !== e, "missing value"), V(void 0 !== n && null !== n, "missing offset"), V(n < this.length, "trying to write beyond buffer length"), q(e, 255)), n >= this.length || (this[n] = e)
            }, i.prototype.writeUInt16LE = function (e, n, t) {
                T(this, e, n, !0, t)
            }, i.prototype.writeUInt16BE = function (e, n, t) {
                T(this, e, n, !1, t)
            }, i.prototype.writeUInt32LE = function (e, n, t) {
                L(this, e, n, !0, t)
            }, i.prototype.writeUInt32BE = function (e, n, t) {
                L(this, e, n, !1, t)
            }, i.prototype.writeInt8 = function (e, n, t) {
                t || (V(void 0 !== e && null !== e, "missing value"), V(void 0 !== n && null !== n, "missing offset"), V(n < this.length, "Trying to write beyond buffer length"), Z(e, 127, -128)), n >= this.length || (e >= 0 ? this.writeUInt8(e, n, t) : this.writeUInt8(255 + e + 1, n, t))
            }, i.prototype.writeInt16LE = function (e, n, t) {
                k(this, e, n, !0, t)
            }, i.prototype.writeInt16BE = function (e, n, t) {
                k(this, e, n, !1, t)
            }, i.prototype.writeInt32LE = function (e, n, t) {
                x(this, e, n, !0, t)
            }, i.prototype.writeInt32BE = function (e, n, t) {
                x(this, e, n, !1, t)
            }, i.prototype.writeFloatLE = function (e, n, t) {
                j(this, e, n, !0, t)
            }, i.prototype.writeFloatBE = function (e, n, t) {
                j(this, e, n, !1, t)
            }, i.prototype.writeDoubleLE = function (e, n, t) {
                U(this, e, n, !0, t)
            }, i.prototype.writeDoubleBE = function (e, n, t) {
                U(this, e, n, !1, t)
            }, i.prototype.fill = function (e, n, t) {
                if (e || (e = 0), n || (n = 0), t || (t = this.length), "string" == typeof e && (e = e.charCodeAt(0)), V("number" == typeof e && !isNaN(e), "value is not a number"), V(t >= n, "end < start"), t !== n && 0 !== this.length) {
                    V(n >= 0 && n < this.length, "start out of bounds"), V(t >= 0 && t <= this.length, "end out of bounds");
                    for (var r = n; r < t; r++)this[r] = e
                }
            }, i.prototype.inspect = function () {
                for (var e = [], n = this.length, r = 0; r < n; r++)if (e[r] = P(this[r]), r === t.INSPECT_MAX_BYTES) {
                    e[r + 1] = "...";
                    break
                }
                return "<Buffer " + e.join(" ") + ">"
            }, i.prototype.toArrayBuffer = function () {
                if ("undefined" != typeof Uint8Array) {
                    if (i._useTypedArrays)return new i(this).buffer;
                    for (var e = new Uint8Array(this.length), n = 0, t = e.length; n < t; n += 1)e[n] = this[n];
                    return e.buffer
                }
                throw new Error("Buffer.toArrayBuffer not supported in this browser")
            };
            var $ = i.prototype;
            i._augment = function (e) {
                return e._isBuffer = !0, e._get = e.get, e._set = e.set, e.get = $.get, e.set = $.set, e.write = $.write, e.toString = $.toString, e.toLocaleString = $.toString, e.toJSON = $.toJSON, e.copy = $.copy, e.slice = $.slice, e.readUInt8 = $.readUInt8, e.readUInt16LE = $.readUInt16LE, e.readUInt16BE = $.readUInt16BE, e.readUInt32LE = $.readUInt32LE, e.readUInt32BE = $.readUInt32BE, e.readInt8 = $.readInt8, e.readInt16LE = $.readInt16LE, e.readInt16BE = $.readInt16BE, e.readInt32LE = $.readInt32LE, e.readInt32BE = $.readInt32BE, e.readFloatLE = $.readFloatLE, e.readFloatBE = $.readFloatBE, e.readDoubleLE = $.readDoubleLE, e.readDoubleBE = $.readDoubleBE, e.writeUInt8 = $.writeUInt8, e.writeUInt16LE = $.writeUInt16LE, e.writeUInt16BE = $.writeUInt16BE, e.writeUInt32LE = $.writeUInt32LE, e.writeUInt32BE = $.writeUInt32BE, e.writeInt8 = $.writeInt8, e.writeInt16LE = $.writeInt16LE, e.writeInt16BE = $.writeInt16BE, e.writeInt32LE = $.writeInt32LE, e.writeInt32BE = $.writeInt32BE, e.writeFloatLE = $.writeFloatLE, e.writeFloatBE = $.writeFloatBE, e.writeDoubleLE = $.writeDoubleLE, e.writeDoubleBE = $.writeDoubleBE, e.fill = $.fill, e.inspect = $.inspect, e.toArrayBuffer = $.toArrayBuffer, e
            }
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js", "/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")
    }, {"base64-js": 11, buffer: 10, ieee754: 12, oMfpAn: 13}], 11: [function (e, n, t) {
        (function (e, n, r, i, o, s, a, f, u) {
            var l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            !function (e) {
                "use strict";
                function n(e) {
                    var n = e.charCodeAt(0);
                    return n === o || n === c ? 62 : n === s || n === d ? 63 : n < a ? -1 : n < a + 10 ? n - a + 26 + 26 : n < u + 26 ? n - u : n < f + 26 ? n - f + 26 : void 0
                }

                function t(e) {
                    function t(e) {
                        u[c++] = e
                    }

                    var r, o, s, a, f, u;
                    if (e.length % 4 > 0)throw new Error("Invalid string. Length must be a multiple of 4");
                    var l = e.length;
                    f = "=" === e.charAt(l - 2) ? 2 : "=" === e.charAt(l - 1) ? 1 : 0, u = new i(3 * e.length / 4 - f), s = f > 0 ? e.length - 4 : e.length;
                    var c = 0;
                    for (r = 0, o = 0; r < s; r += 4, o += 3)a = n(e.charAt(r)) << 18 | n(e.charAt(r + 1)) << 12 | n(e.charAt(r + 2)) << 6 | n(e.charAt(r + 3)), t((16711680 & a) >> 16), t((65280 & a) >> 8), t(255 & a);
                    return 2 === f ? (a = n(e.charAt(r)) << 2 | n(e.charAt(r + 1)) >> 4, t(255 & a)) : 1 === f && (a = n(e.charAt(r)) << 10 | n(e.charAt(r + 1)) << 4 | n(e.charAt(r + 2)) >> 2, t(a >> 8 & 255), t(255 & a)), u
                }

                function r(e) {
                    function n(e) {
                        return l.charAt(e)
                    }

                    function t(e) {
                        return n(e >> 18 & 63) + n(e >> 12 & 63) + n(e >> 6 & 63) + n(63 & e)
                    }

                    var r, i, o, s = e.length % 3, a = "";
                    for (r = 0, o = e.length - s; r < o; r += 3)i = (e[r] << 16) + (e[r + 1] << 8) + e[r + 2], a += t(i);
                    switch (s) {
                        case 1:
                            i = e[e.length - 1], a += n(i >> 2), a += n(i << 4 & 63), a += "==";
                            break;
                        case 2:
                            i = (e[e.length - 2] << 8) + e[e.length - 1], a += n(i >> 10), a += n(i >> 4 & 63), a += n(i << 2 & 63), a += "="
                    }
                    return a
                }

                var i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "+".charCodeAt(0), s = "/".charCodeAt(0), a = "0".charCodeAt(0), f = "a".charCodeAt(0), u = "A".charCodeAt(0), c = "-".charCodeAt(0), d = "_".charCodeAt(0);
                e.toByteArray = t, e.fromByteArray = r
            }("undefined" == typeof t ? this.base64js = {} : t)
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js", "/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")
    }, {buffer: 10, oMfpAn: 13}], 12: [function (e, n, t) {
        (function (e, n, r, i, o, s, a, f, u) {
            t.read = function (e, n, t, r, i) {
                var o, s, a = 8 * i - r - 1, f = (1 << a) - 1, u = f >> 1, l = -7, c = t ? i - 1 : 0, d = t ? -1 : 1, h = e[n + c];
                for (c += d, o = h & (1 << -l) - 1, h >>= -l, l += a; l > 0; o = 256 * o + e[n + c], c += d, l -= 8);
                for (s = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; s = 256 * s + e[n + c], c += d, l -= 8);
                if (0 === o)o = 1 - u; else {
                    if (o === f)return s ? NaN : (h ? -1 : 1) * (1 / 0);
                    s += Math.pow(2, r), o -= u
                }
                return (h ? -1 : 1) * s * Math.pow(2, o - r)
            }, t.write = function (e, n, t, r, i, o) {
                var s, a, f, u = 8 * o - i - 1, l = (1 << u) - 1, c = l >> 1, d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = r ? 0 : o - 1, p = r ? 1 : -1, g = n < 0 || 0 === n && 1 / n < 0 ? 1 : 0;
                for (n = Math.abs(n), isNaN(n) || n === 1 / 0 ? (a = isNaN(n) ? 1 : 0, s = l) : (s = Math.floor(Math.log(n) / Math.LN2), n * (f = Math.pow(2, -s)) < 1 && (s--, f *= 2), n += s + c >= 1 ? d / f : d * Math.pow(2, 1 - c), n * f >= 2 && (s++, f /= 2), s + c >= l ? (a = 0, s = l) : s + c >= 1 ? (a = (n * f - 1) * Math.pow(2, i), s += c) : (a = n * Math.pow(2, c - 1) * Math.pow(2, i), s = 0)); i >= 8; e[t + h] = 255 & a, h += p, a /= 256, i -= 8);
                for (s = s << i | a, u += i; u > 0; e[t + h] = 255 & s, h += p, s /= 256, u -= 8);
                e[t + h - p] |= 128 * g
            }
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js", "/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")
    }, {buffer: 10, oMfpAn: 13}], 13: [function (e, n, t) {
        (function (e, t, r, i, o, s, a, f, u) {
            function l() {
            }

            var e = n.exports = {};
            e.nextTick = function () {
                var e = "undefined" != typeof window && window.setImmediate, n = "undefined" != typeof window && window.postMessage && window.addEventListener;
                if (e)return function (e) {
                    return window.setImmediate(e)
                };
                if (n) {
                    var t = [];
                    return window.addEventListener("message", function (e) {
                        var n = e.source;
                        if ((n === window || null === n) && "process-tick" === e.data && (e.stopPropagation(), t.length > 0)) {
                            var r = t.shift();
                            r()
                        }
                    }, !0), function (e) {
                        t.push(e), window.postMessage("process-tick", "*")
                    }
                }
                return function (e) {
                    setTimeout(e, 0)
                }
            }(), e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.on = l, e.addListener = l, e.once = l, e.off = l, e.removeListener = l, e.removeAllListeners = l, e.emit = l, e.binding = function (e) {
                throw new Error("process.binding is not supported")
            }, e.cwd = function () {
                return "/"
            }, e.chdir = function (e) {
                throw new Error("process.chdir is not supported")
            }
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js", "/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")
    }, {buffer: 10, oMfpAn: 13}], 14: [function (e, n, t) {
        (function (n, t, r, i, o, s, a, f, u) {
            var l = {
                "Al Bayan": ["Al Bayan", "sans-serif"],
                "American Typewriter": ["American Typewriter", "sans-serif"],
                "Andale Mono": ["Andale Mono", "sans-serif"],
                "Apple Casual": ["Apple Casual", "sans-serif"],
                "Apple Chancery": ["Apple Chancery", "sans-serif"],
                "Apple Garamond": ["Apple Garamond", "sans-serif"],
                AppleGothic: ["AppleGothic", "sans-serif"],
                "Apple LiGothic": ["Apple LiGothic", "sans-serif"],
                "Apple LiSung": ["Apple LiSung", "sans-serif"],
                "Apple Myungjo": ["Apple Myungjo", "sans-serif"],
                "Apple Symbols": ["Apple Symbols", "sans-serif"],
                ".AquaKana": [".AquaKana", "sans-serif"],
                Arial: ["Arial", "sans-serif"],
                "Arial Hebrew": ["Arial Hebrew", "sans-serif"],
                Ayuthaya: ["Ayuthaya", "sans-serif"],
                Baghdad: ["Baghdad", "sans-serif"],
                Baskerville: ["Baskerville", "sans-serif"],
                Beijing: ["Beijing", "sans-serif"],
                BiauKai: ["BiauKai", "sans-serif"],
                "Big Caslon": ["Big Caslon", "sans-serif"],
                "Brush Script": ["Brush Script", "sans-serif"],
                Chalkboard: ["Chalkboard", "sans-serif"],
                Chalkduster: ["Chalkduster", "sans-serif"],
                Charcoal: ["Charcoal", "sans-serif"],
                "Charcoal CY": ["Charcoal CY", "sans-serif"],
                Chicago: ["Chicago", "sans-serif"],
                Cochin: ["Cochin", "sans-serif"],
                "Comic Sans": ["Comic Sans", "sans-serif"],
                Cooper: ["Cooper", "sans-serif"],
                Copperplate: ["Copperplate", "sans-serif"],
                "Corsiva Hebrew": ["Corsiva Hebrew", "sans-serif"],
                Courier: ["Courier", "sans-serif"],
                "Courier New": ["Courier New", "sans-serif"],
                "DecoType Naskh": ["DecoType Naskh", "sans-serif"],
                Devanagari: ["Devanagari", "sans-serif"],
                Didot: ["Didot", "sans-serif"],
                "Euphemia UCAS": ["Euphemia UCAS", "sans-serif"],
                "Fang Song": ["Fang Song", "sans-serif"],
                Futura: ["Futura", "sans-serif"],
                Gadget: ["Gadget", "sans-serif"],
                "Geeza Pro": ["Geeza Pro", "sans-serif"],
                Geezah: ["Geezah", "sans-serif"],
                Geneva: ["Geneva", "sans-serif"],
                "Geneva CY": ["Geneva CY", "sans-serif"],
                Georgia: ["Georgia", "sans-serif"],
                "Gill Sans": ["Gill Sans", "sans-serif"],
                Gujarati: ["Gujarati", "sans-serif"],
                "Gung Seoche": ["Gung Seoche", "sans-serif"],
                Gurmukhi: ["Gurmukhi", "sans-serif"],
                Hangangche: ["Hangangche", "sans-serif"],
                HeadlineA: ["HeadlineA", "sans-serif"],
                Hei: ["Hei", "sans-serif"],
                Helvetica: ["Helvetica", "sans-serif"],
                "Helvetica CY": ["Helvetica CY", "sans-serif"],
                "Helvetica Neue": ["Helvetica Neue", "sans-serif"],
                Herculanum: ["Herculanum", "sans-serif"],
                "Hiragino Kaku Gothic Pro": ["Hiragino Kaku Gothic Pro", "sans-serif"],
                "Hiragino Kaku Gothic ProN": ["Hiragino Kaku Gothic ProN", "sans-serif"],
                "Hiragino Kaku Gothic Std": ["Hiragino Kaku Gothic Std", "sans-serif"],
                "Hiragino Kaku Gothic StdN": ["Hiragino Kaku Gothic StdN", "sans-serif"],
                "Hiragino Maru Gothic Pro": ["Hiragino Maru Gothic Pro", "sans-serif"],
                "Hiragino Maru Gothic ProN": ["Hiragino Maru Gothic ProN", "sans-serif"],
                "Hiragino Mincho Pro": ["Hiragino Mincho Pro", "sans-serif"],
                "Hiragino Mincho ProN": ["Hiragino Mincho ProN", "sans-serif"],
                "Hoefler Text": ["Hoefler Text", "sans-serif"],
                "Inai Mathi": ["Inai Mathi", "sans-serif"],
                Impact: ["Impact", "sans-serif"],
                "Jung Gothic": ["Jung Gothic", "sans-serif"],
                Kai: ["Kai", "sans-serif"],
                Keyboard: ["Keyboard", "sans-serif"],
                Krungthep: ["Krungthep", "sans-serif"],
                "KufiStandard GK": ["KufiStandard GK", "sans-serif"],
                LastResort: ["LastResort", "sans-serif"],
                "LiHei Pro": ["LiHei Pro", "sans-serif"],
                "LiSong Pro": ["LiSong Pro", "sans-serif"],
                "Lucida Grande": ["Lucida Grande", "sans-serif"],
                "Marker Felt": ["Marker Felt", "sans-serif"],
                Menlo: ["Menlo", "sans-serif"],
                Monaco: ["Monaco", "sans-serif"],
                "Monaco CY": ["Monaco CY", "sans-serif"],
                Mshtakan: ["Mshtakan", "sans-serif"],
                Nadeem: ["Nadeem", "sans-serif"],
                "New Peninim": ["New Peninim", "sans-serif"],
                "New York": ["New York", "sans-serif"],
                "NISC GB18030": ["NISC GB18030", "sans-serif"],
                Optima: ["Optima", "sans-serif"],
                Osaka: ["Osaka", "sans-serif"],
                Palatino: ["Palatino", "sans-serif"],
                Papyrus: ["Papyrus", "sans-serif"],
                "PC Myungjo": ["PC Myungjo", "sans-serif"],
                Pilgiche: ["Pilgiche", "sans-serif"],
                "Plantagenet Cherokee": ["Plantagenet Cherokee", "sans-serif"],
                Raanana: ["Raanana", "sans-serif"],
                Sand: ["Sand", "sans-serif"],
                Sathu: ["Sathu", "sans-serif"],
                Seoul: ["Seoul", "sans-serif"],
                "Shin Myungjo Neue": ["Shin Myungjo Neue", "sans-serif"],
                Silom: ["Silom", "sans-serif"],
                Skia: ["Skia", "sans-serif"],
                Song: ["Song", "sans-serif"],
                "ST FangSong": ["ST FangSong", "sans-serif"],
                "ST Heiti": ["ST Heiti", "sans-serif"],
                "ST Kaiti": ["ST Kaiti", "sans-serif"],
                "ST Song": ["ST Song", "sans-serif"],
                Symbol: ["Symbol", "sans-serif"],
                "Tae Graphic": ["Tae Graphic", "sans-serif"],
                Tahoma: ["Tahoma", "sans-serif"],
                Taipei: ["Taipei", "sans-serif"],
                Techno: ["Techno", "sans-serif"],
                Textile: ["Textile", "sans-serif"],
                Thonburi: ["Thonburi", "sans-serif"],
                Times: ["Times", "sans-serif"],
                "Times CY": ["Times CY", "sans-serif"],
                "Times New Roman": ["Times New Roman", "sans-serif"],
                "Trebuchet MS": ["Trebuchet MS", "sans-serif"],
                Verdana: ["Verdana", "sans-serif"],
                "Zapf Chancery": ["Zapf Chancery", "sans-serif"],
                "Zapf Dingbats": ["Zapf Dingbats", "sans-serif"],
                Zapfino: ["Zapfino", "sans-serif"]
            }, c = document.getElementById("fonts");
            e("font-face-observer");
            Object.keys(l).forEach(function (e) {
                var n = l[e], t = document.createElement("li");
                t.classList.add("maybe"), t.setAttribute("data-font", e), t.textContent = e, t.style.fontFamily = n.join(", ") + ", monospace", c.appendChild(t)
            }), Object.keys(l).forEach(function (e) {
                var n = l[e];
                n.pop();
                var t = new Detector, r = t.detect(n[0]);
                if (r === !0) {
                    var n = document.querySelector('[data-font="' + e + '"]');
                    n.classList.add("available")
                }
            })
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_c07dacb8.js", "/")
    }, {buffer: 10, "font-face-observer": 8, oMfpAn: 13}]
}, {}, [14]);