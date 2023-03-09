/*! For license information please see main.d554ae62.js.LICENSE.txt */ ! function() {
    var e = {
            694: function(e, a) {
                var t;
                ! function() {
                    "use strict";
                    var n = {}.hasOwnProperty;

                    function i() {
                        for (var e = [], a = 0; a < arguments.length; a++) {
                            var t = arguments[a];
                            if (t) {
                                var r = typeof t;
                                if ("string" === r || "number" === r) e.push(t);
                                else if (Array.isArray(t)) {
                                    if (t.length) {
                                        var o = i.apply(null, t);
                                        o && e.push(o)
                                    }
                                } else if ("object" === r)
                                    if (t.toString === Object.prototype.toString)
                                        for (var l in t) n.call(t, l) && t[l] && e.push(l);
                                    else e.push(t.toString())
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (i.default = i, e.exports = i) : void 0 === (t = function() {
                        return i
                    }.apply(a, [])) || (e.exports = t)
                }()
            },
            725: function(e) {
                "use strict";
                var a = Object.getOwnPropertySymbols,
                    t = Object.prototype.hasOwnProperty,
                    n = Object.prototype.propertyIsEnumerable;

                function i(e) {
                    if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e)
                }
                e.exports = function() {
                    try {
                        if (!Object.assign) return !1;
                        var e = new String("abc");
                        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                        for (var a = {}, t = 0; t < 10; t++) a["_" + String.fromCharCode(t)] = t;
                        if ("0123456789" !== Object.getOwnPropertyNames(a).map((function(e) {
                                return a[e]
                            })).join("")) return !1;
                        var n = {};
                        return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                            n[e] = e
                        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                    } catch (i) {
                        return !1
                    }
                }() ? Object.assign : function(e, r) {
                    for (var o, l, s = i(e), u = 1; u < arguments.length; u++) {
                        for (var c in o = Object(arguments[u])) t.call(o, c) && (s[c] = o[c]);
                        if (a) {
                            l = a(o);
                            for (var f = 0; f < l.length; f++) n.call(o, l[f]) && (s[l[f]] = o[l[f]])
                        }
                    }
                    return s
                }
            },
            888: function(e, a, t) {
                "use strict";
                var n = t(47);

                function i() {}

                function r() {}
                r.resetWarningCache = i, e.exports = function() {
                    function e(e, a, t, i, r, o) {
                        if (o !== n) {
                            var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw l.name = "Invariant Violation", l
                        }
                    }

                    function a() {
                        return e
                    }
                    e.isRequired = e;
                    var t = {
                        array: e,
                        bigint: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: a,
                        element: e,
                        elementType: e,
                        instanceOf: a,
                        node: e,
                        objectOf: a,
                        oneOf: a,
                        oneOfType: a,
                        shape: a,
                        exact: a,
                        checkPropTypes: r,
                        resetWarningCache: i
                    };
                    return t.PropTypes = t, t
                }
            },
            7: function(e, a, t) {
                e.exports = t(888)()
            },
            47: function(e) {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            },
            463: function(e, a, t) {
                "use strict";
                var n = t(791),
                    i = t(725),
                    r = t(296);

                function o(e) {
                    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) a += "&args[]=" + encodeURIComponent(arguments[t]);
                    return "Minified React error #" + e + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                if (!n) throw Error(o(227));
                var l = new Set,
                    s = {};

                function u(e, a) {
                    c(e, a), c(e + "Capture", a)
                }

                function c(e, a) {
                    for (s[e] = a, e = 0; e < a.length; e++) l.add(a[e])
                }
                var f = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    p = Object.prototype.hasOwnProperty,
                    m = {},
                    g = {};

                function v(e, a, t, n, i, r, o) {
                    this.acceptsBooleans = 2 === a || 3 === a || 4 === a, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = t, this.propertyName = e, this.type = a, this.sanitizeURL = r, this.removeEmptyString = o
                }
                var b = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                    b[e] = new v(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) {
                    var a = e[0];
                    b[a] = new v(a, 1, !1, e[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                    b[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                    b[e] = new v(e, 2, !1, e, null, !1, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                    b[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                    b[e] = new v(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((function(e) {
                    b[e] = new v(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((function(e) {
                    b[e] = new v(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((function(e) {
                    b[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                var h = /[\-:]([a-z])/g;

                function y(e) {
                    return e[1].toUpperCase()
                }

                function w(e, a, t, n) {
                    var i = b.hasOwnProperty(a) ? b[a] : null;
                    (null !== i ? 0 === i.type : !n && (2 < a.length && ("o" === a[0] || "O" === a[0]) && ("n" === a[1] || "N" === a[1]))) || (function(e, a, t, n) {
                        if (null === a || "undefined" === typeof a || function(e, a, t, n) {
                                if (null !== t && 0 === t.type) return !1;
                                switch (typeof a) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !n && (null !== t ? !t.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, a, t, n)) return !0;
                        if (n) return !1;
                        if (null !== t) switch (t.type) {
                            case 3:
                                return !a;
                            case 4:
                                return !1 === a;
                            case 5:
                                return isNaN(a);
                            case 6:
                                return isNaN(a) || 1 > a
                        }
                        return !1
                    }(a, t, i, n) && (t = null), n || null === i ? function(e) {
                        return !!p.call(g, e) || !p.call(m, e) && (d.test(e) ? g[e] = !0 : (m[e] = !0, !1))
                    }(a) && (null === t ? e.removeAttribute(a) : e.setAttribute(a, "" + t)) : i.mustUseProperty ? e[i.propertyName] = null === t ? 3 !== i.type && "" : t : (a = i.attributeName, n = i.attributeNamespace, null === t ? e.removeAttribute(a) : (t = 3 === (i = i.type) || 4 === i && !0 === t ? "" : "" + t, n ? e.setAttributeNS(n, a, t) : e.setAttribute(a, t))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                    var a = e.replace(h, y);
                    b[a] = new v(a, 1, !1, e, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                    var a = e.replace(h, y);
                    b[a] = new v(a, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                    var a = e.replace(h, y);
                    b[a] = new v(a, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                    b[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), b.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                    b[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                var k = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    z = 60103,
                    x = 60106,
                    S = 60107,
                    E = 60108,
                    C = 60114,
                    O = 60109,
                    N = 60110,
                    j = 60112,
                    P = 60113,
                    T = 60120,
                    _ = 60115,
                    L = 60116,
                    M = 60121,
                    A = 60128,
                    R = 60129,
                    D = 60130,
                    I = 60131;
                if ("function" === typeof Symbol && Symbol.for) {
                    var F = Symbol.for;
                    z = F("react.element"), x = F("react.portal"), S = F("react.fragment"), E = F("react.strict_mode"), C = F("react.profiler"), O = F("react.provider"), N = F("react.context"), j = F("react.forward_ref"), P = F("react.suspense"), T = F("react.suspense_list"), _ = F("react.memo"), L = F("react.lazy"), M = F("react.block"), F("react.scope"), A = F("react.opaque.id"), R = F("react.debug_trace_mode"), D = F("react.offscreen"), I = F("react.legacy_hidden")
                }
                var U, H = "function" === typeof Symbol && Symbol.iterator;

                function V(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof(e = H && e[H] || e["@@iterator"]) ? e : null
                }

                function q(e) {
                    if (void 0 === U) try {
                        throw Error()
                    } catch (t) {
                        var a = t.stack.trim().match(/\n( *(at )?)/);
                        U = a && a[1] || ""
                    }
                    return "\n" + U + e
                }
                var W = !1;

                function B(e, a) {
                    if (!e || W) return "";
                    W = !0;
                    var t = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (a)
                            if (a = function() {
                                    throw Error()
                                }, Object.defineProperty(a.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(a, [])
                                } catch (s) {
                                    var n = s
                                }
                                Reflect.construct(e, [], a)
                            } else {
                                try {
                                    a.call()
                                } catch (s) {
                                    n = s
                                }
                                e.call(a.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (s) {
                                n = s
                            }
                            e()
                        }
                    } catch (s) {
                        if (s && n && "string" === typeof s.stack) {
                            for (var i = s.stack.split("\n"), r = n.stack.split("\n"), o = i.length - 1, l = r.length - 1; 1 <= o && 0 <= l && i[o] !== r[l];) l--;
                            for (; 1 <= o && 0 <= l; o--, l--)
                                if (i[o] !== r[l]) {
                                    if (1 !== o || 1 !== l)
                                        do {
                                            if (o--, 0 > --l || i[o] !== r[l]) return "\n" + i[o].replace(" at new ", " at ")
                                        } while (1 <= o && 0 <= l);
                                    break
                                }
                        }
                    } finally {
                        W = !1, Error.prepareStackTrace = t
                    }
                    return (e = e ? e.displayName || e.name : "") ? q(e) : ""
                }

                function Y(e) {
                    switch (e.tag) {
                        case 5:
                            return q(e.type);
                        case 16:
                            return q("Lazy");
                        case 13:
                            return q("Suspense");
                        case 19:
                            return q("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = B(e.type, !1);
                        case 11:
                            return e = B(e.type.render, !1);
                        case 22:
                            return e = B(e.type._render, !1);
                        case 1:
                            return e = B(e.type, !0);
                        default:
                            return ""
                    }
                }

                function $(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case S:
                            return "Fragment";
                        case x:
                            return "Portal";
                        case C:
                            return "Profiler";
                        case E:
                            return "StrictMode";
                        case P:
                            return "Suspense";
                        case T:
                            return "SuspenseList"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case N:
                            return (e.displayName || "Context") + ".Consumer";
                        case O:
                            return (e._context.displayName || "Context") + ".Provider";
                        case j:
                            var a = e.render;
                            return a = a.displayName || a.name || "", e.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
                        case _:
                            return $(e.type);
                        case M:
                            return $(e._render);
                        case L:
                            a = e._payload, e = e._init;
                            try {
                                return $(e(a))
                            } catch (t) {}
                    }
                    return null
                }

                function Q(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "object":
                        case "string":
                        case "undefined":
                            return e;
                        default:
                            return ""
                    }
                }

                function K(e) {
                    var a = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === a || "radio" === a)
                }

                function G(e) {
                    e._valueTracker || (e._valueTracker = function(e) {
                        var a = K(e) ? "checked" : "value",
                            t = Object.getOwnPropertyDescriptor(e.constructor.prototype, a),
                            n = "" + e[a];
                        if (!e.hasOwnProperty(a) && "undefined" !== typeof t && "function" === typeof t.get && "function" === typeof t.set) {
                            var i = t.get,
                                r = t.set;
                            return Object.defineProperty(e, a, {
                                configurable: !0,
                                get: function() {
                                    return i.call(this)
                                },
                                set: function(e) {
                                    n = "" + e, r.call(this, e)
                                }
                            }), Object.defineProperty(e, a, {
                                enumerable: t.enumerable
                            }), {
                                getValue: function() {
                                    return n
                                },
                                setValue: function(e) {
                                    n = "" + e
                                },
                                stopTracking: function() {
                                    e._valueTracker = null, delete e[a]
                                }
                            }
                        }
                    }(e))
                }

                function X(e) {
                    if (!e) return !1;
                    var a = e._valueTracker;
                    if (!a) return !0;
                    var t = a.getValue(),
                        n = "";
                    return e && (n = K(e) ? e.checked ? "true" : "false" : e.value), (e = n) !== t && (a.setValue(e), !0)
                }

                function J(e) {
                    if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (a) {
                        return e.body
                    }
                }

                function Z(e, a) {
                    var t = a.checked;
                    return i({}, a, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != t ? t : e._wrapperState.initialChecked
                    })
                }

                function ee(e, a) {
                    var t = null == a.defaultValue ? "" : a.defaultValue,
                        n = null != a.checked ? a.checked : a.defaultChecked;
                    t = Q(null != a.value ? a.value : t), e._wrapperState = {
                        initialChecked: n,
                        initialValue: t,
                        controlled: "checkbox" === a.type || "radio" === a.type ? null != a.checked : null != a.value
                    }
                }

                function ae(e, a) {
                    null != (a = a.checked) && w(e, "checked", a, !1)
                }

                function te(e, a) {
                    ae(e, a);
                    var t = Q(a.value),
                        n = a.type;
                    if (null != t) "number" === n ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
                    else if ("submit" === n || "reset" === n) return void e.removeAttribute("value");
                    a.hasOwnProperty("value") ? ie(e, a.type, t) : a.hasOwnProperty("defaultValue") && ie(e, a.type, Q(a.defaultValue)), null == a.checked && null != a.defaultChecked && (e.defaultChecked = !!a.defaultChecked)
                }

                function ne(e, a, t) {
                    if (a.hasOwnProperty("value") || a.hasOwnProperty("defaultValue")) {
                        var n = a.type;
                        if (!("submit" !== n && "reset" !== n || void 0 !== a.value && null !== a.value)) return;
                        a = "" + e._wrapperState.initialValue, t || a === e.value || (e.value = a), e.defaultValue = a
                    }
                    "" !== (t = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== t && (e.name = t)
                }

                function ie(e, a, t) {
                    "number" === a && J(e.ownerDocument) === e || (null == t ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t))
                }

                function re(e, a) {
                    return e = i({
                        children: void 0
                    }, a), (a = function(e) {
                        var a = "";
                        return n.Children.forEach(e, (function(e) {
                            null != e && (a += e)
                        })), a
                    }(a.children)) && (e.children = a), e
                }

                function oe(e, a, t, n) {
                    if (e = e.options, a) {
                        a = {};
                        for (var i = 0; i < t.length; i++) a["$" + t[i]] = !0;
                        for (t = 0; t < e.length; t++) i = a.hasOwnProperty("$" + e[t].value), e[t].selected !== i && (e[t].selected = i), i && n && (e[t].defaultSelected = !0)
                    } else {
                        for (t = "" + Q(t), a = null, i = 0; i < e.length; i++) {
                            if (e[i].value === t) return e[i].selected = !0, void(n && (e[i].defaultSelected = !0));
                            null !== a || e[i].disabled || (a = e[i])
                        }
                        null !== a && (a.selected = !0)
                    }
                }

                function le(e, a) {
                    if (null != a.dangerouslySetInnerHTML) throw Error(o(91));
                    return i({}, a, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function se(e, a) {
                    var t = a.value;
                    if (null == t) {
                        if (t = a.children, a = a.defaultValue, null != t) {
                            if (null != a) throw Error(o(92));
                            if (Array.isArray(t)) {
                                if (!(1 >= t.length)) throw Error(o(93));
                                t = t[0]
                            }
                            a = t
                        }
                        null == a && (a = ""), t = a
                    }
                    e._wrapperState = {
                        initialValue: Q(t)
                    }
                }

                function ue(e, a) {
                    var t = Q(a.value),
                        n = Q(a.defaultValue);
                    null != t && ((t = "" + t) !== e.value && (e.value = t), null == a.defaultValue && e.defaultValue !== t && (e.defaultValue = t)), null != n && (e.defaultValue = "" + n)
                }

                function ce(e) {
                    var a = e.textContent;
                    a === e._wrapperState.initialValue && "" !== a && null !== a && (e.value = a)
                }
                var fe = "http://www.w3.org/1999/xhtml",
                    de = "http://www.w3.org/2000/svg";

                function pe(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function me(e, a) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? pe(a) : "http://www.w3.org/2000/svg" === e && "foreignObject" === a ? "http://www.w3.org/1999/xhtml" : e
                }
                var ge, ve, be = (ve = function(e, a) {
                    if (e.namespaceURI !== de || "innerHTML" in e) e.innerHTML = a;
                    else {
                        for ((ge = ge || document.createElement("div")).innerHTML = "<svg>" + a.valueOf().toString() + "</svg>", a = ge.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                        for (; a.firstChild;) e.appendChild(a.firstChild)
                    }
                }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, a, t, n) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return ve(e, a)
                    }))
                } : ve);

                function he(e, a) {
                    if (a) {
                        var t = e.firstChild;
                        if (t && t === e.lastChild && 3 === t.nodeType) return void(t.nodeValue = a)
                    }
                    e.textContent = a
                }
                var ye = {
                        animationIterationCount: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    we = ["Webkit", "ms", "Moz", "O"];

                function ke(e, a, t) {
                    return null == a || "boolean" === typeof a || "" === a ? "" : t || "number" !== typeof a || 0 === a || ye.hasOwnProperty(e) && ye[e] ? ("" + a).trim() : a + "px"
                }

                function ze(e, a) {
                    for (var t in e = e.style, a)
                        if (a.hasOwnProperty(t)) {
                            var n = 0 === t.indexOf("--"),
                                i = ke(t, a[t], n);
                            "float" === t && (t = "cssFloat"), n ? e.setProperty(t, i) : e[t] = i
                        }
                }
                Object.keys(ye).forEach((function(e) {
                    we.forEach((function(a) {
                        a = a + e.charAt(0).toUpperCase() + e.substring(1), ye[a] = ye[e]
                    }))
                }));
                var xe = i({
                    menuitem: !0
                }, {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                });

                function Se(e, a) {
                    if (a) {
                        if (xe[e] && (null != a.children || null != a.dangerouslySetInnerHTML)) throw Error(o(137, e));
                        if (null != a.dangerouslySetInnerHTML) {
                            if (null != a.children) throw Error(o(60));
                            if ("object" !== typeof a.dangerouslySetInnerHTML || !("__html" in a.dangerouslySetInnerHTML)) throw Error(o(61))
                        }
                        if (null != a.style && "object" !== typeof a.style) throw Error(o(62))
                    }
                }

                function Ee(e, a) {
                    if (-1 === e.indexOf("-")) return "string" === typeof a.is;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }

                function Ce(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var Oe = null,
                    Ne = null,
                    je = null;

                function Pe(e) {
                    if (e = ni(e)) {
                        if ("function" !== typeof Oe) throw Error(o(280));
                        var a = e.stateNode;
                        a && (a = ri(a), Oe(e.stateNode, e.type, a))
                    }
                }

                function Te(e) {
                    Ne ? je ? je.push(e) : je = [e] : Ne = e
                }

                function _e() {
                    if (Ne) {
                        var e = Ne,
                            a = je;
                        if (je = Ne = null, Pe(e), a)
                            for (e = 0; e < a.length; e++) Pe(a[e])
                    }
                }

                function Le(e, a) {
                    return e(a)
                }

                function Me(e, a, t, n, i) {
                    return e(a, t, n, i)
                }

                function Ae() {}
                var Re = Le,
                    De = !1,
                    Ie = !1;

                function Fe() {
                    null === Ne && null === je || (Ae(), _e())
                }

                function Ue(e, a) {
                    var t = e.stateNode;
                    if (null === t) return null;
                    var n = ri(t);
                    if (null === n) return null;
                    t = n[a];
                    e: switch (a) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (n = !n.disabled) || (n = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !n;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (t && "function" !== typeof t) throw Error(o(231, a, typeof t));
                    return t
                }
                var He = !1;
                if (f) try {
                    var Ve = {};
                    Object.defineProperty(Ve, "passive", {
                        get: function() {
                            He = !0
                        }
                    }), window.addEventListener("test", Ve, Ve), window.removeEventListener("test", Ve, Ve)
                } catch (ve) {
                    He = !1
                }

                function qe(e, a, t, n, i, r, o, l, s) {
                    var u = Array.prototype.slice.call(arguments, 3);
                    try {
                        a.apply(t, u)
                    } catch (c) {
                        this.onError(c)
                    }
                }
                var We = !1,
                    Be = null,
                    Ye = !1,
                    $e = null,
                    Qe = {
                        onError: function(e) {
                            We = !0, Be = e
                        }
                    };

                function Ke(e, a, t, n, i, r, o, l, s) {
                    We = !1, Be = null, qe.apply(Qe, arguments)
                }

                function Ge(e) {
                    var a = e,
                        t = e;
                    if (e.alternate)
                        for (; a.return;) a = a.return;
                    else {
                        e = a;
                        do {
                            0 !== (1026 & (a = e).flags) && (t = a.return), e = a.return
                        } while (e)
                    }
                    return 3 === a.tag ? t : null
                }

                function Xe(e) {
                    if (13 === e.tag) {
                        var a = e.memoizedState;
                        if (null === a && (null !== (e = e.alternate) && (a = e.memoizedState)), null !== a) return a.dehydrated
                    }
                    return null
                }

                function Je(e) {
                    if (Ge(e) !== e) throw Error(o(188))
                }

                function Ze(e) {
                    if (e = function(e) {
                            var a = e.alternate;
                            if (!a) {
                                if (null === (a = Ge(e))) throw Error(o(188));
                                return a !== e ? null : e
                            }
                            for (var t = e, n = a;;) {
                                var i = t.return;
                                if (null === i) break;
                                var r = i.alternate;
                                if (null === r) {
                                    if (null !== (n = i.return)) {
                                        t = n;
                                        continue
                                    }
                                    break
                                }
                                if (i.child === r.child) {
                                    for (r = i.child; r;) {
                                        if (r === t) return Je(i), e;
                                        if (r === n) return Je(i), a;
                                        r = r.sibling
                                    }
                                    throw Error(o(188))
                                }
                                if (t.return !== n.return) t = i, n = r;
                                else {
                                    for (var l = !1, s = i.child; s;) {
                                        if (s === t) {
                                            l = !0, t = i, n = r;
                                            break
                                        }
                                        if (s === n) {
                                            l = !0, n = i, t = r;
                                            break
                                        }
                                        s = s.sibling
                                    }
                                    if (!l) {
                                        for (s = r.child; s;) {
                                            if (s === t) {
                                                l = !0, t = r, n = i;
                                                break
                                            }
                                            if (s === n) {
                                                l = !0, n = r, t = i;
                                                break
                                            }
                                            s = s.sibling
                                        }
                                        if (!l) throw Error(o(189))
                                    }
                                }
                                if (t.alternate !== n) throw Error(o(190))
                            }
                            if (3 !== t.tag) throw Error(o(188));
                            return t.stateNode.current === t ? e : a
                        }(e), !e) return null;
                    for (var a = e;;) {
                        if (5 === a.tag || 6 === a.tag) return a;
                        if (a.child) a.child.return = a, a = a.child;
                        else {
                            if (a === e) break;
                            for (; !a.sibling;) {
                                if (!a.return || a.return === e) return null;
                                a = a.return
                            }
                            a.sibling.return = a.return, a = a.sibling
                        }
                    }
                    return null
                }

                function ea(e, a) {
                    for (var t = e.alternate; null !== a;) {
                        if (a === e || a === t) return !0;
                        a = a.return
                    }
                    return !1
                }
                var aa, ta, na, ia, ra = !1,
                    oa = [],
                    la = null,
                    sa = null,
                    ua = null,
                    ca = new Map,
                    fa = new Map,
                    da = [],
                    pa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function ma(e, a, t, n, i) {
                    return {
                        blockedOn: e,
                        domEventName: a,
                        eventSystemFlags: 16 | t,
                        nativeEvent: i,
                        targetContainers: [n]
                    }
                }

                function ga(e, a) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            la = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            sa = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            ua = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            ca.delete(a.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            fa.delete(a.pointerId)
                    }
                }

                function va(e, a, t, n, i, r) {
                    return null === e || e.nativeEvent !== r ? (e = ma(a, t, n, i, r), null !== a && (null !== (a = ni(a)) && ta(a)), e) : (e.eventSystemFlags |= n, a = e.targetContainers, null !== i && -1 === a.indexOf(i) && a.push(i), e)
                }

                function ba(e) {
                    var a = ti(e.target);
                    if (null !== a) {
                        var t = Ge(a);
                        if (null !== t)
                            if (13 === (a = t.tag)) {
                                if (null !== (a = Xe(t))) return e.blockedOn = a, void ia(e.lanePriority, (function() {
                                    r.unstable_runWithPriority(e.priority, (function() {
                                        na(t)
                                    }))
                                }))
                            } else if (3 === a && t.stateNode.hydrate) return void(e.blockedOn = 3 === t.tag ? t.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function ha(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var a = e.targetContainers; 0 < a.length;) {
                        var t = Za(e.domEventName, e.eventSystemFlags, a[0], e.nativeEvent);
                        if (null !== t) return null !== (a = ni(t)) && ta(a), e.blockedOn = t, !1;
                        a.shift()
                    }
                    return !0
                }

                function ya(e, a, t) {
                    ha(e) && t.delete(a)
                }

                function wa() {
                    for (ra = !1; 0 < oa.length;) {
                        var e = oa[0];
                        if (null !== e.blockedOn) {
                            null !== (e = ni(e.blockedOn)) && aa(e);
                            break
                        }
                        for (var a = e.targetContainers; 0 < a.length;) {
                            var t = Za(e.domEventName, e.eventSystemFlags, a[0], e.nativeEvent);
                            if (null !== t) {
                                e.blockedOn = t;
                                break
                            }
                            a.shift()
                        }
                        null === e.blockedOn && oa.shift()
                    }
                    null !== la && ha(la) && (la = null), null !== sa && ha(sa) && (sa = null), null !== ua && ha(ua) && (ua = null), ca.forEach(ya), fa.forEach(ya)
                }

                function ka(e, a) {
                    e.blockedOn === a && (e.blockedOn = null, ra || (ra = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, wa)))
                }

                function za(e) {
                    function a(a) {
                        return ka(a, e)
                    }
                    if (0 < oa.length) {
                        ka(oa[0], e);
                        for (var t = 1; t < oa.length; t++) {
                            var n = oa[t];
                            n.blockedOn === e && (n.blockedOn = null)
                        }
                    }
                    for (null !== la && ka(la, e), null !== sa && ka(sa, e), null !== ua && ka(ua, e), ca.forEach(a), fa.forEach(a), t = 0; t < da.length; t++)(n = da[t]).blockedOn === e && (n.blockedOn = null);
                    for (; 0 < da.length && null === (t = da[0]).blockedOn;) ba(t), null === t.blockedOn && da.shift()
                }

                function xa(e, a) {
                    var t = {};
                    return t[e.toLowerCase()] = a.toLowerCase(), t["Webkit" + e] = "webkit" + a, t["Moz" + e] = "moz" + a, t
                }
                var Sa = {
                        animationend: xa("Animation", "AnimationEnd"),
                        animationiteration: xa("Animation", "AnimationIteration"),
                        animationstart: xa("Animation", "AnimationStart"),
                        transitionend: xa("Transition", "TransitionEnd")
                    },
                    Ea = {},
                    Ca = {};

                function Oa(e) {
                    if (Ea[e]) return Ea[e];
                    if (!Sa[e]) return e;
                    var a, t = Sa[e];
                    for (a in t)
                        if (t.hasOwnProperty(a) && a in Ca) return Ea[e] = t[a];
                    return e
                }
                f && (Ca = document.createElement("div").style, "AnimationEvent" in window || (delete Sa.animationend.animation, delete Sa.animationiteration.animation, delete Sa.animationstart.animation), "TransitionEvent" in window || delete Sa.transitionend.transition);
                var Na = Oa("animationend"),
                    ja = Oa("animationiteration"),
                    Pa = Oa("animationstart"),
                    Ta = Oa("transitionend"),
                    _a = new Map,
                    La = new Map,
                    Ma = ["abort", "abort", Na, "animationEnd", ja, "animationIteration", Pa, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Ta, "transitionEnd", "waiting", "waiting"];

                function Aa(e, a) {
                    for (var t = 0; t < e.length; t += 2) {
                        var n = e[t],
                            i = e[t + 1];
                        i = "on" + (i[0].toUpperCase() + i.slice(1)), La.set(n, a), _a.set(n, i), u(i, [n])
                    }
                }(0, r.unstable_now)();
                var Ra = 8;

                function Da(e) {
                    if (0 !== (1 & e)) return Ra = 15, 1;
                    if (0 !== (2 & e)) return Ra = 14, 2;
                    if (0 !== (4 & e)) return Ra = 13, 4;
                    var a = 24 & e;
                    return 0 !== a ? (Ra = 12, a) : 0 !== (32 & e) ? (Ra = 11, 32) : 0 !== (a = 192 & e) ? (Ra = 10, a) : 0 !== (256 & e) ? (Ra = 9, 256) : 0 !== (a = 3584 & e) ? (Ra = 8, a) : 0 !== (4096 & e) ? (Ra = 7, 4096) : 0 !== (a = 4186112 & e) ? (Ra = 6, a) : 0 !== (a = 62914560 & e) ? (Ra = 5, a) : 67108864 & e ? (Ra = 4, 67108864) : 0 !== (134217728 & e) ? (Ra = 3, 134217728) : 0 !== (a = 805306368 & e) ? (Ra = 2, a) : 0 !== (1073741824 & e) ? (Ra = 1, 1073741824) : (Ra = 8, e)
                }

                function Ia(e, a) {
                    var t = e.pendingLanes;
                    if (0 === t) return Ra = 0;
                    var n = 0,
                        i = 0,
                        r = e.expiredLanes,
                        o = e.suspendedLanes,
                        l = e.pingedLanes;
                    if (0 !== r) n = r, i = Ra = 15;
                    else if (0 !== (r = 134217727 & t)) {
                        var s = r & ~o;
                        0 !== s ? (n = Da(s), i = Ra) : 0 !== (l &= r) && (n = Da(l), i = Ra)
                    } else 0 !== (r = t & ~o) ? (n = Da(r), i = Ra) : 0 !== l && (n = Da(l), i = Ra);
                    if (0 === n) return 0;
                    if (n = t & ((0 > (n = 31 - Wa(n)) ? 0 : 1 << n) << 1) - 1, 0 !== a && a !== n && 0 === (a & o)) {
                        if (Da(a), i <= Ra) return a;
                        Ra = i
                    }
                    if (0 !== (a = e.entangledLanes))
                        for (e = e.entanglements, a &= n; 0 < a;) i = 1 << (t = 31 - Wa(a)), n |= e[t], a &= ~i;
                    return n
                }

                function Fa(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function Ua(e, a) {
                    switch (e) {
                        case 15:
                            return 1;
                        case 14:
                            return 2;
                        case 12:
                            return 0 === (e = Ha(24 & ~a)) ? Ua(10, a) : e;
                        case 10:
                            return 0 === (e = Ha(192 & ~a)) ? Ua(8, a) : e;
                        case 8:
                            return 0 === (e = Ha(3584 & ~a)) && (0 === (e = Ha(4186112 & ~a)) && (e = 512)), e;
                        case 2:
                            return 0 === (a = Ha(805306368 & ~a)) && (a = 268435456), a
                    }
                    throw Error(o(358, e))
                }

                function Ha(e) {
                    return e & -e
                }

                function Va(e) {
                    for (var a = [], t = 0; 31 > t; t++) a.push(e);
                    return a
                }

                function qa(e, a, t) {
                    e.pendingLanes |= a;
                    var n = a - 1;
                    e.suspendedLanes &= n, e.pingedLanes &= n, (e = e.eventTimes)[a = 31 - Wa(a)] = t
                }
                var Wa = Math.clz32 ? Math.clz32 : function(e) {
                        return 0 === e ? 32 : 31 - (Ba(e) / Ya | 0) | 0
                    },
                    Ba = Math.log,
                    Ya = Math.LN2;
                var $a = r.unstable_UserBlockingPriority,
                    Qa = r.unstable_runWithPriority,
                    Ka = !0;

                function Ga(e, a, t, n) {
                    De || Ae();
                    var i = Ja,
                        r = De;
                    De = !0;
                    try {
                        Me(i, e, a, t, n)
                    } finally {
                        (De = r) || Fe()
                    }
                }

                function Xa(e, a, t, n) {
                    Qa($a, Ja.bind(null, e, a, t, n))
                }

                function Ja(e, a, t, n) {
                    var i;
                    if (Ka)
                        if ((i = 0 === (4 & a)) && 0 < oa.length && -1 < pa.indexOf(e)) e = ma(null, e, a, t, n), oa.push(e);
                        else {
                            var r = Za(e, a, t, n);
                            if (null === r) i && ga(e, n);
                            else {
                                if (i) {
                                    if (-1 < pa.indexOf(e)) return e = ma(r, e, a, t, n), void oa.push(e);
                                    if (function(e, a, t, n, i) {
                                            switch (a) {
                                                case "focusin":
                                                    return la = va(la, e, a, t, n, i), !0;
                                                case "dragenter":
                                                    return sa = va(sa, e, a, t, n, i), !0;
                                                case "mouseover":
                                                    return ua = va(ua, e, a, t, n, i), !0;
                                                case "pointerover":
                                                    var r = i.pointerId;
                                                    return ca.set(r, va(ca.get(r) || null, e, a, t, n, i)), !0;
                                                case "gotpointercapture":
                                                    return r = i.pointerId, fa.set(r, va(fa.get(r) || null, e, a, t, n, i)), !0
                                            }
                                            return !1
                                        }(r, e, a, t, n)) return;
                                    ga(e, n)
                                }
                                An(e, a, n, null, t)
                            }
                        }
                }

                function Za(e, a, t, n) {
                    var i = Ce(n);
                    if (null !== (i = ti(i))) {
                        var r = Ge(i);
                        if (null === r) i = null;
                        else {
                            var o = r.tag;
                            if (13 === o) {
                                if (null !== (i = Xe(r))) return i;
                                i = null
                            } else if (3 === o) {
                                if (r.stateNode.hydrate) return 3 === r.tag ? r.stateNode.containerInfo : null;
                                i = null
                            } else r !== i && (i = null)
                        }
                    }
                    return An(e, a, n, i, t), null
                }
                var et = null,
                    at = null,
                    tt = null;

                function nt() {
                    if (tt) return tt;
                    var e, a, t = at,
                        n = t.length,
                        i = "value" in et ? et.value : et.textContent,
                        r = i.length;
                    for (e = 0; e < n && t[e] === i[e]; e++);
                    var o = n - e;
                    for (a = 1; a <= o && t[n - a] === i[r - a]; a++);
                    return tt = i.slice(e, 1 < a ? 1 - a : void 0)
                }

                function it(e) {
                    var a = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === a && (e = 13) : e = a, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function rt() {
                    return !0
                }

                function ot() {
                    return !1
                }

                function lt(e) {
                    function a(a, t, n, i, r) {
                        for (var o in this._reactName = a, this._targetInst = n, this.type = t, this.nativeEvent = i, this.target = r, this.currentTarget = null, e) e.hasOwnProperty(o) && (a = e[o], this[o] = a ? a(i) : i[o]);
                        return this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue) ? rt : ot, this.isPropagationStopped = ot, this
                    }
                    return i(a.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = rt)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = rt)
                        },
                        persist: function() {},
                        isPersistent: rt
                    }), a
                }
                var st, ut, ct, ft = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    dt = lt(ft),
                    pt = i({}, ft, {
                        view: 0,
                        detail: 0
                    }),
                    mt = lt(pt),
                    gt = i({}, pt, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: Ot,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function(e) {
                            return "movementX" in e ? e.movementX : (e !== ct && (ct && "mousemove" === e.type ? (st = e.screenX - ct.screenX, ut = e.screenY - ct.screenY) : ut = st = 0, ct = e), st)
                        },
                        movementY: function(e) {
                            return "movementY" in e ? e.movementY : ut
                        }
                    }),
                    vt = lt(gt),
                    bt = lt(i({}, gt, {
                        dataTransfer: 0
                    })),
                    ht = lt(i({}, pt, {
                        relatedTarget: 0
                    })),
                    yt = lt(i({}, ft, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    wt = i({}, ft, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    kt = lt(wt),
                    zt = lt(i({}, ft, {
                        data: 0
                    })),
                    xt = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified"
                    },
                    St = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta"
                    },
                    Et = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function Ct(e) {
                    var a = this.nativeEvent;
                    return a.getModifierState ? a.getModifierState(e) : !!(e = Et[e]) && !!a[e]
                }

                function Ot() {
                    return Ct
                }
                var Nt = i({}, pt, {
                        key: function(e) {
                            if (e.key) {
                                var a = xt[e.key] || e.key;
                                if ("Unidentified" !== a) return a
                            }
                            return "keypress" === e.type ? 13 === (e = it(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? St[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: Ot,
                        charCode: function(e) {
                            return "keypress" === e.type ? it(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? it(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    }),
                    jt = lt(Nt),
                    Pt = lt(i({}, gt, {
                        pointerId: 0,
                        width: 0,
                        height: 0,
                        pressure: 0,
                        tangentialPressure: 0,
                        tiltX: 0,
                        tiltY: 0,
                        twist: 0,
                        pointerType: 0,
                        isPrimary: 0
                    })),
                    Tt = lt(i({}, pt, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: Ot
                    })),
                    _t = lt(i({}, ft, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    Lt = i({}, gt, {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    }),
                    Mt = lt(Lt),
                    At = [9, 13, 27, 32],
                    Rt = f && "CompositionEvent" in window,
                    Dt = null;
                f && "documentMode" in document && (Dt = document.documentMode);
                var It = f && "TextEvent" in window && !Dt,
                    Ft = f && (!Rt || Dt && 8 < Dt && 11 >= Dt),
                    Ut = String.fromCharCode(32),
                    Ht = !1;

                function Vt(e, a) {
                    switch (e) {
                        case "keyup":
                            return -1 !== At.indexOf(a.keyCode);
                        case "keydown":
                            return 229 !== a.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function qt(e) {
                    return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var Wt = !1;
                var Bt = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0
                };

                function Yt(e) {
                    var a = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === a ? !!Bt[e.type] : "textarea" === a
                }

                function $t(e, a, t, n) {
                    Te(n), 0 < (a = Dn(a, "onChange")).length && (t = new dt("onChange", "change", null, t, n), e.push({
                        event: t,
                        listeners: a
                    }))
                }
                var Qt = null,
                    Kt = null;

                function Gt(e) {
                    jn(e, 0)
                }

                function Xt(e) {
                    if (X(ii(e))) return e
                }

                function Jt(e, a) {
                    if ("change" === e) return a
                }
                var Zt = !1;
                if (f) {
                    var en;
                    if (f) {
                        var an = "oninput" in document;
                        if (!an) {
                            var tn = document.createElement("div");
                            tn.setAttribute("oninput", "return;"), an = "function" === typeof tn.oninput
                        }
                        en = an
                    } else en = !1;
                    Zt = en && (!document.documentMode || 9 < document.documentMode)
                }

                function nn() {
                    Qt && (Qt.detachEvent("onpropertychange", rn), Kt = Qt = null)
                }

                function rn(e) {
                    if ("value" === e.propertyName && Xt(Kt)) {
                        var a = [];
                        if ($t(a, Kt, e, Ce(e)), e = Gt, De) e(a);
                        else {
                            De = !0;
                            try {
                                Le(e, a)
                            } finally {
                                De = !1, Fe()
                            }
                        }
                    }
                }

                function on(e, a, t) {
                    "focusin" === e ? (nn(), Kt = t, (Qt = a).attachEvent("onpropertychange", rn)) : "focusout" === e && nn()
                }

                function ln(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Xt(Kt)
                }

                function sn(e, a) {
                    if ("click" === e) return Xt(a)
                }

                function un(e, a) {
                    if ("input" === e || "change" === e) return Xt(a)
                }
                var cn = "function" === typeof Object.is ? Object.is : function(e, a) {
                        return e === a && (0 !== e || 1 / e === 1 / a) || e !== e && a !== a
                    },
                    fn = Object.prototype.hasOwnProperty;

                function dn(e, a) {
                    if (cn(e, a)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof a || null === a) return !1;
                    var t = Object.keys(e),
                        n = Object.keys(a);
                    if (t.length !== n.length) return !1;
                    for (n = 0; n < t.length; n++)
                        if (!fn.call(a, t[n]) || !cn(e[t[n]], a[t[n]])) return !1;
                    return !0
                }

                function pn(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function mn(e, a) {
                    var t, n = pn(e);
                    for (e = 0; n;) {
                        if (3 === n.nodeType) {
                            if (t = e + n.textContent.length, e <= a && t >= a) return {
                                node: n,
                                offset: a - e
                            };
                            e = t
                        }
                        e: {
                            for (; n;) {
                                if (n.nextSibling) {
                                    n = n.nextSibling;
                                    break e
                                }
                                n = n.parentNode
                            }
                            n = void 0
                        }
                        n = pn(n)
                    }
                }

                function gn(e, a) {
                    return !(!e || !a) && (e === a || (!e || 3 !== e.nodeType) && (a && 3 === a.nodeType ? gn(e, a.parentNode) : "contains" in e ? e.contains(a) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(a))))
                }

                function vn() {
                    for (var e = window, a = J(); a instanceof e.HTMLIFrameElement;) {
                        try {
                            var t = "string" === typeof a.contentWindow.location.href
                        } catch (n) {
                            t = !1
                        }
                        if (!t) break;
                        a = J((e = a.contentWindow).document)
                    }
                    return a
                }

                function bn(e) {
                    var a = e && e.nodeName && e.nodeName.toLowerCase();
                    return a && ("input" === a && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === a || "true" === e.contentEditable)
                }
                var hn = f && "documentMode" in document && 11 >= document.documentMode,
                    yn = null,
                    wn = null,
                    kn = null,
                    zn = !1;

                function xn(e, a, t) {
                    var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
                    zn || null == yn || yn !== J(n) || ("selectionStart" in (n = yn) && bn(n) ? n = {
                        start: n.selectionStart,
                        end: n.selectionEnd
                    } : n = {
                        anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: n.anchorOffset,
                        focusNode: n.focusNode,
                        focusOffset: n.focusOffset
                    }, kn && dn(kn, n) || (kn = n, 0 < (n = Dn(wn, "onSelect")).length && (a = new dt("onSelect", "select", null, a, t), e.push({
                        event: a,
                        listeners: n
                    }), a.target = yn)))
                }
                Aa("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Aa("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Aa(Ma, 2);
                for (var Sn = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), En = 0; En < Sn.length; En++) La.set(Sn[En], 0);
                c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Cn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    On = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));

                function Nn(e, a, t) {
                    var n = e.type || "unknown-event";
                    e.currentTarget = t,
                        function(e, a, t, n, i, r, l, s, u) {
                            if (Ke.apply(this, arguments), We) {
                                if (!We) throw Error(o(198));
                                var c = Be;
                                We = !1, Be = null, Ye || (Ye = !0, $e = c)
                            }
                        }(n, a, void 0, e), e.currentTarget = null
                }

                function jn(e, a) {
                    a = 0 !== (4 & a);
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t],
                            i = n.event;
                        n = n.listeners;
                        e: {
                            var r = void 0;
                            if (a)
                                for (var o = n.length - 1; 0 <= o; o--) {
                                    var l = n[o],
                                        s = l.instance,
                                        u = l.currentTarget;
                                    if (l = l.listener, s !== r && i.isPropagationStopped()) break e;
                                    Nn(i, l, u), r = s
                                } else
                                    for (o = 0; o < n.length; o++) {
                                        if (s = (l = n[o]).instance, u = l.currentTarget, l = l.listener, s !== r && i.isPropagationStopped()) break e;
                                        Nn(i, l, u), r = s
                                    }
                        }
                    }
                    if (Ye) throw e = $e, Ye = !1, $e = null, e
                }

                function Pn(e, a) {
                    var t = oi(a),
                        n = e + "__bubble";
                    t.has(n) || (Mn(a, e, 2, !1), t.add(n))
                }
                var Tn = "_reactListening" + Math.random().toString(36).slice(2);

                function _n(e) {
                    e[Tn] || (e[Tn] = !0, l.forEach((function(a) {
                        On.has(a) || Ln(a, !1, e, null), Ln(a, !0, e, null)
                    })))
                }

                function Ln(e, a, t, n) {
                    var i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                        r = t;
                    if ("selectionchange" === e && 9 !== t.nodeType && (r = t.ownerDocument), null !== n && !a && On.has(e)) {
                        if ("scroll" !== e) return;
                        i |= 2, r = n
                    }
                    var o = oi(r),
                        l = e + "__" + (a ? "capture" : "bubble");
                    o.has(l) || (a && (i |= 4), Mn(r, e, i, a), o.add(l))
                }

                function Mn(e, a, t, n) {
                    var i = La.get(a);
                    switch (void 0 === i ? 2 : i) {
                        case 0:
                            i = Ga;
                            break;
                        case 1:
                            i = Xa;
                            break;
                        default:
                            i = Ja
                    }
                    t = i.bind(null, a, t, e), i = void 0, !He || "touchstart" !== a && "touchmove" !== a && "wheel" !== a || (i = !0), n ? void 0 !== i ? e.addEventListener(a, t, {
                        capture: !0,
                        passive: i
                    }) : e.addEventListener(a, t, !0) : void 0 !== i ? e.addEventListener(a, t, {
                        passive: i
                    }) : e.addEventListener(a, t, !1)
                }

                function An(e, a, t, n, i) {
                    var r = n;
                    if (0 === (1 & a) && 0 === (2 & a) && null !== n) e: for (;;) {
                        if (null === n) return;
                        var o = n.tag;
                        if (3 === o || 4 === o) {
                            var l = n.stateNode.containerInfo;
                            if (l === i || 8 === l.nodeType && l.parentNode === i) break;
                            if (4 === o)
                                for (o = n.return; null !== o;) {
                                    var s = o.tag;
                                    if ((3 === s || 4 === s) && ((s = o.stateNode.containerInfo) === i || 8 === s.nodeType && s.parentNode === i)) return;
                                    o = o.return
                                }
                            for (; null !== l;) {
                                if (null === (o = ti(l))) return;
                                if (5 === (s = o.tag) || 6 === s) {
                                    n = r = o;
                                    continue e
                                }
                                l = l.parentNode
                            }
                        }
                        n = n.return
                    }! function(e, a, t) {
                        if (Ie) return e(a, t);
                        Ie = !0;
                        try {
                            Re(e, a, t)
                        } finally {
                            Ie = !1, Fe()
                        }
                    }((function() {
                        var n = r,
                            i = Ce(t),
                            o = [];
                        e: {
                            var l = _a.get(e);
                            if (void 0 !== l) {
                                var s = dt,
                                    u = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === it(t)) break e;
                                    case "keydown":
                                    case "keyup":
                                        s = jt;
                                        break;
                                    case "focusin":
                                        u = "focus", s = ht;
                                        break;
                                    case "focusout":
                                        u = "blur", s = ht;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        s = ht;
                                        break;
                                    case "click":
                                        if (2 === t.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        s = vt;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        s = bt;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        s = Tt;
                                        break;
                                    case Na:
                                    case ja:
                                    case Pa:
                                        s = yt;
                                        break;
                                    case Ta:
                                        s = _t;
                                        break;
                                    case "scroll":
                                        s = mt;
                                        break;
                                    case "wheel":
                                        s = Mt;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        s = kt;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        s = Pt
                                }
                                var c = 0 !== (4 & a),
                                    f = !c && "scroll" === e,
                                    d = c ? null !== l ? l + "Capture" : null : l;
                                c = [];
                                for (var p, m = n; null !== m;) {
                                    var g = (p = m).stateNode;
                                    if (5 === p.tag && null !== g && (p = g, null !== d && (null != (g = Ue(m, d)) && c.push(Rn(m, g, p)))), f) break;
                                    m = m.return
                                }
                                0 < c.length && (l = new s(l, u, null, t, i), o.push({
                                    event: l,
                                    listeners: c
                                }))
                            }
                        }
                        if (0 === (7 & a)) {
                            if (s = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || 0 !== (16 & a) || !(u = t.relatedTarget || t.fromElement) || !ti(u) && !u[ei]) && (s || l) && (l = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, s ? (s = n, null !== (u = (u = t.relatedTarget || t.toElement) ? ti(u) : null) && (u !== (f = Ge(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (s = null, u = n), s !== u)) {
                                if (c = vt, g = "onMouseLeave", d = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Pt, g = "onPointerLeave", d = "onPointerEnter", m = "pointer"), f = null == s ? l : ii(s), p = null == u ? l : ii(u), (l = new c(g, m + "leave", s, t, i)).target = f, l.relatedTarget = p, g = null, ti(i) === n && ((c = new c(d, m + "enter", u, t, i)).target = p, c.relatedTarget = f, g = c), f = g, s && u) e: {
                                    for (d = u, m = 0, p = c = s; p; p = In(p)) m++;
                                    for (p = 0, g = d; g; g = In(g)) p++;
                                    for (; 0 < m - p;) c = In(c),
                                    m--;
                                    for (; 0 < p - m;) d = In(d),
                                    p--;
                                    for (; m--;) {
                                        if (c === d || null !== d && c === d.alternate) break e;
                                        c = In(c), d = In(d)
                                    }
                                    c = null
                                }
                                else c = null;
                                null !== s && Fn(o, l, s, c, !1), null !== u && null !== f && Fn(o, f, u, c, !0)
                            }
                            if ("select" === (s = (l = n ? ii(n) : window).nodeName && l.nodeName.toLowerCase()) || "input" === s && "file" === l.type) var v = Jt;
                            else if (Yt(l))
                                if (Zt) v = un;
                                else {
                                    v = ln;
                                    var b = on
                                }
                            else(s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (v = sn);
                            switch (v && (v = v(e, n)) ? $t(o, v, t, i) : (b && b(e, l, n), "focusout" === e && (b = l._wrapperState) && b.controlled && "number" === l.type && ie(l, "number", l.value)), b = n ? ii(n) : window, e) {
                                case "focusin":
                                    (Yt(b) || "true" === b.contentEditable) && (yn = b, wn = n, kn = null);
                                    break;
                                case "focusout":
                                    kn = wn = yn = null;
                                    break;
                                case "mousedown":
                                    zn = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    zn = !1, xn(o, t, i);
                                    break;
                                case "selectionchange":
                                    if (hn) break;
                                case "keydown":
                                case "keyup":
                                    xn(o, t, i)
                            }
                            var h;
                            if (Rt) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var y = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        y = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        y = "onCompositionUpdate";
                                        break e
                                }
                                y = void 0
                            }
                            else Wt ? Vt(e, t) && (y = "onCompositionEnd") : "keydown" === e && 229 === t.keyCode && (y = "onCompositionStart");
                            y && (Ft && "ko" !== t.locale && (Wt || "onCompositionStart" !== y ? "onCompositionEnd" === y && Wt && (h = nt()) : (at = "value" in (et = i) ? et.value : et.textContent, Wt = !0)), 0 < (b = Dn(n, y)).length && (y = new zt(y, e, null, t, i), o.push({
                                event: y,
                                listeners: b
                            }), h ? y.data = h : null !== (h = qt(t)) && (y.data = h))), (h = It ? function(e, a) {
                                switch (e) {
                                    case "compositionend":
                                        return qt(a);
                                    case "keypress":
                                        return 32 !== a.which ? null : (Ht = !0, Ut);
                                    case "textInput":
                                        return (e = a.data) === Ut && Ht ? null : e;
                                    default:
                                        return null
                                }
                            }(e, t) : function(e, a) {
                                if (Wt) return "compositionend" === e || !Rt && Vt(e, a) ? (e = nt(), tt = at = et = null, Wt = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
                                            if (a.char && 1 < a.char.length) return a.char;
                                            if (a.which) return String.fromCharCode(a.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return Ft && "ko" !== a.locale ? null : a.data
                                }
                            }(e, t)) && (0 < (n = Dn(n, "onBeforeInput")).length && (i = new zt("onBeforeInput", "beforeinput", null, t, i), o.push({
                                event: i,
                                listeners: n
                            }), i.data = h))
                        }
                        jn(o, a)
                    }))
                }

                function Rn(e, a, t) {
                    return {
                        instance: e,
                        listener: a,
                        currentTarget: t
                    }
                }

                function Dn(e, a) {
                    for (var t = a + "Capture", n = []; null !== e;) {
                        var i = e,
                            r = i.stateNode;
                        5 === i.tag && null !== r && (i = r, null != (r = Ue(e, t)) && n.unshift(Rn(e, r, i)), null != (r = Ue(e, a)) && n.push(Rn(e, r, i))), e = e.return
                    }
                    return n
                }

                function In(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function Fn(e, a, t, n, i) {
                    for (var r = a._reactName, o = []; null !== t && t !== n;) {
                        var l = t,
                            s = l.alternate,
                            u = l.stateNode;
                        if (null !== s && s === n) break;
                        5 === l.tag && null !== u && (l = u, i ? null != (s = Ue(t, r)) && o.unshift(Rn(t, s, l)) : i || null != (s = Ue(t, r)) && o.push(Rn(t, s, l))), t = t.return
                    }
                    0 !== o.length && e.push({
                        event: a,
                        listeners: o
                    })
                }

                function Un() {}
                var Hn = null,
                    Vn = null;

                function qn(e, a) {
                    switch (e) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            return !!a.autoFocus
                    }
                    return !1
                }

                function Wn(e, a) {
                    return "textarea" === e || "option" === e || "noscript" === e || "string" === typeof a.children || "number" === typeof a.children || "object" === typeof a.dangerouslySetInnerHTML && null !== a.dangerouslySetInnerHTML && null != a.dangerouslySetInnerHTML.__html
                }
                var Bn = "function" === typeof setTimeout ? setTimeout : void 0,
                    Yn = "function" === typeof clearTimeout ? clearTimeout : void 0;

                function $n(e) {
                    1 === e.nodeType ? e.textContent = "" : 9 === e.nodeType && (null != (e = e.body) && (e.textContent = ""))
                }

                function Qn(e) {
                    for (; null != e; e = e.nextSibling) {
                        var a = e.nodeType;
                        if (1 === a || 3 === a) break
                    }
                    return e
                }

                function Kn(e) {
                    e = e.previousSibling;
                    for (var a = 0; e;) {
                        if (8 === e.nodeType) {
                            var t = e.data;
                            if ("$" === t || "$!" === t || "$?" === t) {
                                if (0 === a) return e;
                                a--
                            } else "/$" === t && a++
                        }
                        e = e.previousSibling
                    }
                    return null
                }
                var Gn = 0;
                var Xn = Math.random().toString(36).slice(2),
                    Jn = "__reactFiber$" + Xn,
                    Zn = "__reactProps$" + Xn,
                    ei = "__reactContainer$" + Xn,
                    ai = "__reactEvents$" + Xn;

                function ti(e) {
                    var a = e[Jn];
                    if (a) return a;
                    for (var t = e.parentNode; t;) {
                        if (a = t[ei] || t[Jn]) {
                            if (t = a.alternate, null !== a.child || null !== t && null !== t.child)
                                for (e = Kn(e); null !== e;) {
                                    if (t = e[Jn]) return t;
                                    e = Kn(e)
                                }
                            return a
                        }
                        t = (e = t).parentNode
                    }
                    return null
                }

                function ni(e) {
                    return !(e = e[Jn] || e[ei]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function ii(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(o(33))
                }

                function ri(e) {
                    return e[Zn] || null
                }

                function oi(e) {
                    var a = e[ai];
                    return void 0 === a && (a = e[ai] = new Set), a
                }
                var li = [],
                    si = -1;

                function ui(e) {
                    return {
                        current: e
                    }
                }

                function ci(e) {
                    0 > si || (e.current = li[si], li[si] = null, si--)
                }

                function fi(e, a) {
                    si++, li[si] = e.current, e.current = a
                }
                var di = {},
                    pi = ui(di),
                    mi = ui(!1),
                    gi = di;

                function vi(e, a) {
                    var t = e.type.contextTypes;
                    if (!t) return di;
                    var n = e.stateNode;
                    if (n && n.__reactInternalMemoizedUnmaskedChildContext === a) return n.__reactInternalMemoizedMaskedChildContext;
                    var i, r = {};
                    for (i in t) r[i] = a[i];
                    return n && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = r), r
                }

                function bi(e) {
                    return null !== (e = e.childContextTypes) && void 0 !== e
                }

                function hi() {
                    ci(mi), ci(pi)
                }

                function yi(e, a, t) {
                    if (pi.current !== di) throw Error(o(168));
                    fi(pi, a), fi(mi, t)
                }

                function wi(e, a, t) {
                    var n = e.stateNode;
                    if (e = a.childContextTypes, "function" !== typeof n.getChildContext) return t;
                    for (var r in n = n.getChildContext())
                        if (!(r in e)) throw Error(o(108, $(a) || "Unknown", r));
                    return i({}, t, n)
                }

                function ki(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || di, gi = pi.current, fi(pi, e), fi(mi, mi.current), !0
                }

                function zi(e, a, t) {
                    var n = e.stateNode;
                    if (!n) throw Error(o(169));
                    t ? (e = wi(e, a, gi), n.__reactInternalMemoizedMergedChildContext = e, ci(mi), ci(pi), fi(pi, e)) : ci(mi), fi(mi, t)
                }
                var xi = null,
                    Si = null,
                    Ei = r.unstable_runWithPriority,
                    Ci = r.unstable_scheduleCallback,
                    Oi = r.unstable_cancelCallback,
                    Ni = r.unstable_shouldYield,
                    ji = r.unstable_requestPaint,
                    Pi = r.unstable_now,
                    Ti = r.unstable_getCurrentPriorityLevel,
                    _i = r.unstable_ImmediatePriority,
                    Li = r.unstable_UserBlockingPriority,
                    Mi = r.unstable_NormalPriority,
                    Ai = r.unstable_LowPriority,
                    Ri = r.unstable_IdlePriority,
                    Di = {},
                    Ii = void 0 !== ji ? ji : function() {},
                    Fi = null,
                    Ui = null,
                    Hi = !1,
                    Vi = Pi(),
                    qi = 1e4 > Vi ? Pi : function() {
                        return Pi() - Vi
                    };

                function Wi() {
                    switch (Ti()) {
                        case _i:
                            return 99;
                        case Li:
                            return 98;
                        case Mi:
                            return 97;
                        case Ai:
                            return 96;
                        case Ri:
                            return 95;
                        default:
                            throw Error(o(332))
                    }
                }

                function Bi(e) {
                    switch (e) {
                        case 99:
                            return _i;
                        case 98:
                            return Li;
                        case 97:
                            return Mi;
                        case 96:
                            return Ai;
                        case 95:
                            return Ri;
                        default:
                            throw Error(o(332))
                    }
                }

                function Yi(e, a) {
                    return e = Bi(e), Ei(e, a)
                }

                function $i(e, a, t) {
                    return e = Bi(e), Ci(e, a, t)
                }

                function Qi() {
                    if (null !== Ui) {
                        var e = Ui;
                        Ui = null, Oi(e)
                    }
                    Ki()
                }

                function Ki() {
                    if (!Hi && null !== Fi) {
                        Hi = !0;
                        var e = 0;
                        try {
                            var a = Fi;
                            Yi(99, (function() {
                                for (; e < a.length; e++) {
                                    var t = a[e];
                                    do {
                                        t = t(!0)
                                    } while (null !== t)
                                }
                            })), Fi = null
                        } catch (t) {
                            throw null !== Fi && (Fi = Fi.slice(e + 1)), Ci(_i, Qi), t
                        } finally {
                            Hi = !1
                        }
                    }
                }
                var Gi = k.ReactCurrentBatchConfig;

                function Xi(e, a) {
                    if (e && e.defaultProps) {
                        for (var t in a = i({}, a), e = e.defaultProps) void 0 === a[t] && (a[t] = e[t]);
                        return a
                    }
                    return a
                }
                var Ji = ui(null),
                    Zi = null,
                    er = null,
                    ar = null;

                function tr() {
                    ar = er = Zi = null
                }

                function nr(e) {
                    var a = Ji.current;
                    ci(Ji), e.type._context._currentValue = a
                }

                function ir(e, a) {
                    for (; null !== e;) {
                        var t = e.alternate;
                        if ((e.childLanes & a) === a) {
                            if (null === t || (t.childLanes & a) === a) break;
                            t.childLanes |= a
                        } else e.childLanes |= a, null !== t && (t.childLanes |= a);
                        e = e.return
                    }
                }

                function rr(e, a) {
                    Zi = e, ar = er = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & a) && (Do = !0), e.firstContext = null)
                }

                function or(e, a) {
                    if (ar !== e && !1 !== a && 0 !== a)
                        if ("number" === typeof a && 1073741823 !== a || (ar = e, a = 1073741823), a = {
                                context: e,
                                observedBits: a,
                                next: null
                            }, null === er) {
                            if (null === Zi) throw Error(o(308));
                            er = a, Zi.dependencies = {
                                lanes: 0,
                                firstContext: a,
                                responders: null
                            }
                        } else er = er.next = a;
                    return e._currentValue
                }
                var lr = !1;

                function sr(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null
                        },
                        effects: null
                    }
                }

                function ur(e, a) {
                    e = e.updateQueue, a.updateQueue === e && (a.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function cr(e, a) {
                    return {
                        eventTime: e,
                        lane: a,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function fr(e, a) {
                    if (null !== (e = e.updateQueue)) {
                        var t = (e = e.shared).pending;
                        null === t ? a.next = a : (a.next = t.next, t.next = a), e.pending = a
                    }
                }

                function dr(e, a) {
                    var t = e.updateQueue,
                        n = e.alternate;
                    if (null !== n && t === (n = n.updateQueue)) {
                        var i = null,
                            r = null;
                        if (null !== (t = t.firstBaseUpdate)) {
                            do {
                                var o = {
                                    eventTime: t.eventTime,
                                    lane: t.lane,
                                    tag: t.tag,
                                    payload: t.payload,
                                    callback: t.callback,
                                    next: null
                                };
                                null === r ? i = r = o : r = r.next = o, t = t.next
                            } while (null !== t);
                            null === r ? i = r = a : r = r.next = a
                        } else i = r = a;
                        return t = {
                            baseState: n.baseState,
                            firstBaseUpdate: i,
                            lastBaseUpdate: r,
                            shared: n.shared,
                            effects: n.effects
                        }, void(e.updateQueue = t)
                    }
                    null === (e = t.lastBaseUpdate) ? t.firstBaseUpdate = a : e.next = a, t.lastBaseUpdate = a
                }

                function pr(e, a, t, n) {
                    var r = e.updateQueue;
                    lr = !1;
                    var o = r.firstBaseUpdate,
                        l = r.lastBaseUpdate,
                        s = r.shared.pending;
                    if (null !== s) {
                        r.shared.pending = null;
                        var u = s,
                            c = u.next;
                        u.next = null, null === l ? o = c : l.next = c, l = u;
                        var f = e.alternate;
                        if (null !== f) {
                            var d = (f = f.updateQueue).lastBaseUpdate;
                            d !== l && (null === d ? f.firstBaseUpdate = c : d.next = c, f.lastBaseUpdate = u)
                        }
                    }
                    if (null !== o) {
                        for (d = r.baseState, l = 0, f = c = u = null;;) {
                            s = o.lane;
                            var p = o.eventTime;
                            if ((n & s) === s) {
                                null !== f && (f = f.next = {
                                    eventTime: p,
                                    lane: 0,
                                    tag: o.tag,
                                    payload: o.payload,
                                    callback: o.callback,
                                    next: null
                                });
                                e: {
                                    var m = e,
                                        g = o;
                                    switch (s = a, p = t, g.tag) {
                                        case 1:
                                            if ("function" === typeof(m = g.payload)) {
                                                d = m.call(p, d, s);
                                                break e
                                            }
                                            d = m;
                                            break e;
                                        case 3:
                                            m.flags = -4097 & m.flags | 64;
                                        case 0:
                                            if (null === (s = "function" === typeof(m = g.payload) ? m.call(p, d, s) : m) || void 0 === s) break e;
                                            d = i({}, d, s);
                                            break e;
                                        case 2:
                                            lr = !0
                                    }
                                }
                                null !== o.callback && (e.flags |= 32, null === (s = r.effects) ? r.effects = [o] : s.push(o))
                            } else p = {
                                eventTime: p,
                                lane: s,
                                tag: o.tag,
                                payload: o.payload,
                                callback: o.callback,
                                next: null
                            }, null === f ? (c = f = p, u = d) : f = f.next = p, l |= s;
                            if (null === (o = o.next)) {
                                if (null === (s = r.shared.pending)) break;
                                o = s.next, s.next = null, r.lastBaseUpdate = s, r.shared.pending = null
                            }
                        }
                        null === f && (u = d), r.baseState = u, r.firstBaseUpdate = c, r.lastBaseUpdate = f, Hl |= l, e.lanes = l, e.memoizedState = d
                    }
                }

                function mr(e, a, t) {
                    if (e = a.effects, a.effects = null, null !== e)
                        for (a = 0; a < e.length; a++) {
                            var n = e[a],
                                i = n.callback;
                            if (null !== i) {
                                if (n.callback = null, n = t, "function" !== typeof i) throw Error(o(191, i));
                                i.call(n)
                            }
                        }
                }
                var gr = (new n.Component).refs;

                function vr(e, a, t, n) {
                    t = null === (t = t(n, a = e.memoizedState)) || void 0 === t ? a : i({}, a, t), e.memoizedState = t, 0 === e.lanes && (e.updateQueue.baseState = t)
                }
                var br = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && Ge(e) === e
                    },
                    enqueueSetState: function(e, a, t) {
                        e = e._reactInternals;
                        var n = ds(),
                            i = ps(e),
                            r = cr(n, i);
                        r.payload = a, void 0 !== t && null !== t && (r.callback = t), fr(e, r), ms(e, i, n)
                    },
                    enqueueReplaceState: function(e, a, t) {
                        e = e._reactInternals;
                        var n = ds(),
                            i = ps(e),
                            r = cr(n, i);
                        r.tag = 1, r.payload = a, void 0 !== t && null !== t && (r.callback = t), fr(e, r), ms(e, i, n)
                    },
                    enqueueForceUpdate: function(e, a) {
                        e = e._reactInternals;
                        var t = ds(),
                            n = ps(e),
                            i = cr(t, n);
                        i.tag = 2, void 0 !== a && null !== a && (i.callback = a), fr(e, i), ms(e, n, t)
                    }
                };

                function hr(e, a, t, n, i, r, o) {
                    return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(n, r, o) : !a.prototype || !a.prototype.isPureReactComponent || (!dn(t, n) || !dn(i, r))
                }

                function yr(e, a, t) {
                    var n = !1,
                        i = di,
                        r = a.contextType;
                    return "object" === typeof r && null !== r ? r = or(r) : (i = bi(a) ? gi : pi.current, r = (n = null !== (n = a.contextTypes) && void 0 !== n) ? vi(e, i) : di), a = new a(t, r), e.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, a.updater = br, e.stateNode = a, a._reactInternals = e, n && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = r), a
                }

                function wr(e, a, t, n) {
                    e = a.state, "function" === typeof a.componentWillReceiveProps && a.componentWillReceiveProps(t, n), "function" === typeof a.UNSAFE_componentWillReceiveProps && a.UNSAFE_componentWillReceiveProps(t, n), a.state !== e && br.enqueueReplaceState(a, a.state, null)
                }

                function kr(e, a, t, n) {
                    var i = e.stateNode;
                    i.props = t, i.state = e.memoizedState, i.refs = gr, sr(e);
                    var r = a.contextType;
                    "object" === typeof r && null !== r ? i.context = or(r) : (r = bi(a) ? gi : pi.current, i.context = vi(e, r)), pr(e, t, i, n), i.state = e.memoizedState, "function" === typeof(r = a.getDerivedStateFromProps) && (vr(e, a, r, t), i.state = e.memoizedState), "function" === typeof a.getDerivedStateFromProps || "function" === typeof i.getSnapshotBeforeUpdate || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || (a = i.state, "function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), a !== i.state && br.enqueueReplaceState(i, i.state, null), pr(e, t, i, n), i.state = e.memoizedState), "function" === typeof i.componentDidMount && (e.flags |= 4)
                }
                var zr = Array.isArray;

                function xr(e, a, t) {
                    if (null !== (e = t.ref) && "function" !== typeof e && "object" !== typeof e) {
                        if (t._owner) {
                            if (t = t._owner) {
                                if (1 !== t.tag) throw Error(o(309));
                                var n = t.stateNode
                            }
                            if (!n) throw Error(o(147, e));
                            var i = "" + e;
                            return null !== a && null !== a.ref && "function" === typeof a.ref && a.ref._stringRef === i ? a.ref : (a = function(e) {
                                var a = n.refs;
                                a === gr && (a = n.refs = {}), null === e ? delete a[i] : a[i] = e
                            }, a._stringRef = i, a)
                        }
                        if ("string" !== typeof e) throw Error(o(284));
                        if (!t._owner) throw Error(o(290, e))
                    }
                    return e
                }

                function Sr(e, a) {
                    if ("textarea" !== e.type) throw Error(o(31, "[object Object]" === Object.prototype.toString.call(a) ? "object with keys {" + Object.keys(a).join(", ") + "}" : a))
                }

                function Er(e) {
                    function a(a, t) {
                        if (e) {
                            var n = a.lastEffect;
                            null !== n ? (n.nextEffect = t, a.lastEffect = t) : a.firstEffect = a.lastEffect = t, t.nextEffect = null, t.flags = 8
                        }
                    }

                    function t(t, n) {
                        if (!e) return null;
                        for (; null !== n;) a(t, n), n = n.sibling;
                        return null
                    }

                    function n(e, a) {
                        for (e = new Map; null !== a;) null !== a.key ? e.set(a.key, a) : e.set(a.index, a), a = a.sibling;
                        return e
                    }

                    function i(e, a) {
                        return (e = Ys(e, a)).index = 0, e.sibling = null, e
                    }

                    function r(a, t, n) {
                        return a.index = n, e ? null !== (n = a.alternate) ? (n = n.index) < t ? (a.flags = 2, t) : n : (a.flags = 2, t) : t
                    }

                    function l(a) {
                        return e && null === a.alternate && (a.flags = 2), a
                    }

                    function s(e, a, t, n) {
                        return null === a || 6 !== a.tag ? ((a = Gs(t, e.mode, n)).return = e, a) : ((a = i(a, t)).return = e, a)
                    }

                    function u(e, a, t, n) {
                        return null !== a && a.elementType === t.type ? ((n = i(a, t.props)).ref = xr(e, a, t), n.return = e, n) : ((n = $s(t.type, t.key, t.props, null, e.mode, n)).ref = xr(e, a, t), n.return = e, n)
                    }

                    function c(e, a, t, n) {
                        return null === a || 4 !== a.tag || a.stateNode.containerInfo !== t.containerInfo || a.stateNode.implementation !== t.implementation ? ((a = Xs(t, e.mode, n)).return = e, a) : ((a = i(a, t.children || [])).return = e, a)
                    }

                    function f(e, a, t, n, r) {
                        return null === a || 7 !== a.tag ? ((a = Qs(t, e.mode, n, r)).return = e, a) : ((a = i(a, t)).return = e, a)
                    }

                    function d(e, a, t) {
                        if ("string" === typeof a || "number" === typeof a) return (a = Gs("" + a, e.mode, t)).return = e, a;
                        if ("object" === typeof a && null !== a) {
                            switch (a.$$typeof) {
                                case z:
                                    return (t = $s(a.type, a.key, a.props, null, e.mode, t)).ref = xr(e, null, a), t.return = e, t;
                                case x:
                                    return (a = Xs(a, e.mode, t)).return = e, a
                            }
                            if (zr(a) || V(a)) return (a = Qs(a, e.mode, t, null)).return = e, a;
                            Sr(e, a)
                        }
                        return null
                    }

                    function p(e, a, t, n) {
                        var i = null !== a ? a.key : null;
                        if ("string" === typeof t || "number" === typeof t) return null !== i ? null : s(e, a, "" + t, n);
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case z:
                                    return t.key === i ? t.type === S ? f(e, a, t.props.children, n, i) : u(e, a, t, n) : null;
                                case x:
                                    return t.key === i ? c(e, a, t, n) : null
                            }
                            if (zr(t) || V(t)) return null !== i ? null : f(e, a, t, n, null);
                            Sr(e, t)
                        }
                        return null
                    }

                    function m(e, a, t, n, i) {
                        if ("string" === typeof n || "number" === typeof n) return s(a, e = e.get(t) || null, "" + n, i);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case z:
                                    return e = e.get(null === n.key ? t : n.key) || null, n.type === S ? f(a, e, n.props.children, i, n.key) : u(a, e, n, i);
                                case x:
                                    return c(a, e = e.get(null === n.key ? t : n.key) || null, n, i)
                            }
                            if (zr(n) || V(n)) return f(a, e = e.get(t) || null, n, i, null);
                            Sr(a, n)
                        }
                        return null
                    }

                    function g(i, o, l, s) {
                        for (var u = null, c = null, f = o, g = o = 0, v = null; null !== f && g < l.length; g++) {
                            f.index > g ? (v = f, f = null) : v = f.sibling;
                            var b = p(i, f, l[g], s);
                            if (null === b) {
                                null === f && (f = v);
                                break
                            }
                            e && f && null === b.alternate && a(i, f), o = r(b, o, g), null === c ? u = b : c.sibling = b, c = b, f = v
                        }
                        if (g === l.length) return t(i, f), u;
                        if (null === f) {
                            for (; g < l.length; g++) null !== (f = d(i, l[g], s)) && (o = r(f, o, g), null === c ? u = f : c.sibling = f, c = f);
                            return u
                        }
                        for (f = n(i, f); g < l.length; g++) null !== (v = m(f, i, g, l[g], s)) && (e && null !== v.alternate && f.delete(null === v.key ? g : v.key), o = r(v, o, g), null === c ? u = v : c.sibling = v, c = v);
                        return e && f.forEach((function(e) {
                            return a(i, e)
                        })), u
                    }

                    function v(i, l, s, u) {
                        var c = V(s);
                        if ("function" !== typeof c) throw Error(o(150));
                        if (null == (s = c.call(s))) throw Error(o(151));
                        for (var f = c = null, g = l, v = l = 0, b = null, h = s.next(); null !== g && !h.done; v++, h = s.next()) {
                            g.index > v ? (b = g, g = null) : b = g.sibling;
                            var y = p(i, g, h.value, u);
                            if (null === y) {
                                null === g && (g = b);
                                break
                            }
                            e && g && null === y.alternate && a(i, g), l = r(y, l, v), null === f ? c = y : f.sibling = y, f = y, g = b
                        }
                        if (h.done) return t(i, g), c;
                        if (null === g) {
                            for (; !h.done; v++, h = s.next()) null !== (h = d(i, h.value, u)) && (l = r(h, l, v), null === f ? c = h : f.sibling = h, f = h);
                            return c
                        }
                        for (g = n(i, g); !h.done; v++, h = s.next()) null !== (h = m(g, i, v, h.value, u)) && (e && null !== h.alternate && g.delete(null === h.key ? v : h.key), l = r(h, l, v), null === f ? c = h : f.sibling = h, f = h);
                        return e && g.forEach((function(e) {
                            return a(i, e)
                        })), c
                    }
                    return function(e, n, r, s) {
                        var u = "object" === typeof r && null !== r && r.type === S && null === r.key;
                        u && (r = r.props.children);
                        var c = "object" === typeof r && null !== r;
                        if (c) switch (r.$$typeof) {
                            case z:
                                e: {
                                    for (c = r.key, u = n; null !== u;) {
                                        if (u.key === c) {
                                            if (7 === u.tag) {
                                                if (r.type === S) {
                                                    t(e, u.sibling), (n = i(u, r.props.children)).return = e, e = n;
                                                    break e
                                                }
                                            } else if (u.elementType === r.type) {
                                                t(e, u.sibling), (n = i(u, r.props)).ref = xr(e, u, r), n.return = e, e = n;
                                                break e
                                            }
                                            t(e, u);
                                            break
                                        }
                                        a(e, u), u = u.sibling
                                    }
                                    r.type === S ? ((n = Qs(r.props.children, e.mode, s, r.key)).return = e, e = n) : ((s = $s(r.type, r.key, r.props, null, e.mode, s)).ref = xr(e, n, r), s.return = e, e = s)
                                }
                                return l(e);
                            case x:
                                e: {
                                    for (u = r.key; null !== n;) {
                                        if (n.key === u) {
                                            if (4 === n.tag && n.stateNode.containerInfo === r.containerInfo && n.stateNode.implementation === r.implementation) {
                                                t(e, n.sibling), (n = i(n, r.children || [])).return = e, e = n;
                                                break e
                                            }
                                            t(e, n);
                                            break
                                        }
                                        a(e, n), n = n.sibling
                                    }(n = Xs(r, e.mode, s)).return = e,
                                    e = n
                                }
                                return l(e)
                        }
                        if ("string" === typeof r || "number" === typeof r) return r = "" + r, null !== n && 6 === n.tag ? (t(e, n.sibling), (n = i(n, r)).return = e, e = n) : (t(e, n), (n = Gs(r, e.mode, s)).return = e, e = n), l(e);
                        if (zr(r)) return g(e, n, r, s);
                        if (V(r)) return v(e, n, r, s);
                        if (c && Sr(e, r), "undefined" === typeof r && !u) switch (e.tag) {
                            case 1:
                            case 22:
                            case 0:
                            case 11:
                            case 15:
                                throw Error(o(152, $(e.type) || "Component"))
                        }
                        return t(e, n)
                    }
                }
                var Cr = Er(!0),
                    Or = Er(!1),
                    Nr = {},
                    jr = ui(Nr),
                    Pr = ui(Nr),
                    Tr = ui(Nr);

                function _r(e) {
                    if (e === Nr) throw Error(o(174));
                    return e
                }

                function Lr(e, a) {
                    switch (fi(Tr, a), fi(Pr, e), fi(jr, Nr), e = a.nodeType) {
                        case 9:
                        case 11:
                            a = (a = a.documentElement) ? a.namespaceURI : me(null, "");
                            break;
                        default:
                            a = me(a = (e = 8 === e ? a.parentNode : a).namespaceURI || null, e = e.tagName)
                    }
                    ci(jr), fi(jr, a)
                }

                function Mr() {
                    ci(jr), ci(Pr), ci(Tr)
                }

                function Ar(e) {
                    _r(Tr.current);
                    var a = _r(jr.current),
                        t = me(a, e.type);
                    a !== t && (fi(Pr, e), fi(jr, t))
                }

                function Rr(e) {
                    Pr.current === e && (ci(jr), ci(Pr))
                }
                var Dr = ui(0);

                function Ir(e) {
                    for (var a = e; null !== a;) {
                        if (13 === a.tag) {
                            var t = a.memoizedState;
                            if (null !== t && (null === (t = t.dehydrated) || "$?" === t.data || "$!" === t.data)) return a
                        } else if (19 === a.tag && void 0 !== a.memoizedProps.revealOrder) {
                            if (0 !== (64 & a.flags)) return a
                        } else if (null !== a.child) {
                            a.child.return = a, a = a.child;
                            continue
                        }
                        if (a === e) break;
                        for (; null === a.sibling;) {
                            if (null === a.return || a.return === e) return null;
                            a = a.return
                        }
                        a.sibling.return = a.return, a = a.sibling
                    }
                    return null
                }
                var Fr = null,
                    Ur = null,
                    Hr = !1;

                function Vr(e, a) {
                    var t = Ws(5, null, null, 0);
                    t.elementType = "DELETED", t.type = "DELETED", t.stateNode = a, t.return = e, t.flags = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = t, e.lastEffect = t) : e.firstEffect = e.lastEffect = t
                }

                function qr(e, a) {
                    switch (e.tag) {
                        case 5:
                            var t = e.type;
                            return null !== (a = 1 !== a.nodeType || t.toLowerCase() !== a.nodeName.toLowerCase() ? null : a) && (e.stateNode = a, !0);
                        case 6:
                            return null !== (a = "" === e.pendingProps || 3 !== a.nodeType ? null : a) && (e.stateNode = a, !0);
                        default:
                            return !1
                    }
                }

                function Wr(e) {
                    if (Hr) {
                        var a = Ur;
                        if (a) {
                            var t = a;
                            if (!qr(e, a)) {
                                if (!(a = Qn(t.nextSibling)) || !qr(e, a)) return e.flags = -1025 & e.flags | 2, Hr = !1, void(Fr = e);
                                Vr(Fr, t)
                            }
                            Fr = e, Ur = Qn(a.firstChild)
                        } else e.flags = -1025 & e.flags | 2, Hr = !1, Fr = e
                    }
                }

                function Br(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    Fr = e
                }

                function Yr(e) {
                    if (e !== Fr) return !1;
                    if (!Hr) return Br(e), Hr = !0, !1;
                    var a = e.type;
                    if (5 !== e.tag || "head" !== a && "body" !== a && !Wn(a, e.memoizedProps))
                        for (a = Ur; a;) Vr(e, a), a = Qn(a.nextSibling);
                    if (Br(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
                        e: {
                            for (e = e.nextSibling, a = 0; e;) {
                                if (8 === e.nodeType) {
                                    var t = e.data;
                                    if ("/$" === t) {
                                        if (0 === a) {
                                            Ur = Qn(e.nextSibling);
                                            break e
                                        }
                                        a--
                                    } else "$" !== t && "$!" !== t && "$?" !== t || a++
                                }
                                e = e.nextSibling
                            }
                            Ur = null
                        }
                    } else Ur = Fr ? Qn(e.stateNode.nextSibling) : null;
                    return !0
                }

                function $r() {
                    Ur = Fr = null, Hr = !1
                }
                var Qr = [];

                function Kr() {
                    for (var e = 0; e < Qr.length; e++) Qr[e]._workInProgressVersionPrimary = null;
                    Qr.length = 0
                }
                var Gr = k.ReactCurrentDispatcher,
                    Xr = k.ReactCurrentBatchConfig,
                    Jr = 0,
                    Zr = null,
                    eo = null,
                    ao = null,
                    to = !1,
                    no = !1;

                function io() {
                    throw Error(o(321))
                }

                function ro(e, a) {
                    if (null === a) return !1;
                    for (var t = 0; t < a.length && t < e.length; t++)
                        if (!cn(e[t], a[t])) return !1;
                    return !0
                }

                function oo(e, a, t, n, i, r) {
                    if (Jr = r, Zr = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, Gr.current = null === e || null === e.memoizedState ? Lo : Mo, e = t(n, i), no) {
                        r = 0;
                        do {
                            if (no = !1, !(25 > r)) throw Error(o(301));
                            r += 1, ao = eo = null, a.updateQueue = null, Gr.current = Ao, e = t(n, i)
                        } while (no)
                    }
                    if (Gr.current = _o, a = null !== eo && null !== eo.next, Jr = 0, ao = eo = Zr = null, to = !1, a) throw Error(o(300));
                    return e
                }

                function lo() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === ao ? Zr.memoizedState = ao = e : ao = ao.next = e, ao
                }

                function so() {
                    if (null === eo) {
                        var e = Zr.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = eo.next;
                    var a = null === ao ? Zr.memoizedState : ao.next;
                    if (null !== a) ao = a, eo = e;
                    else {
                        if (null === e) throw Error(o(310));
                        e = {
                            memoizedState: (eo = e).memoizedState,
                            baseState: eo.baseState,
                            baseQueue: eo.baseQueue,
                            queue: eo.queue,
                            next: null
                        }, null === ao ? Zr.memoizedState = ao = e : ao = ao.next = e
                    }
                    return ao
                }

                function uo(e, a) {
                    return "function" === typeof a ? a(e) : a
                }

                function co(e) {
                    var a = so(),
                        t = a.queue;
                    if (null === t) throw Error(o(311));
                    t.lastRenderedReducer = e;
                    var n = eo,
                        i = n.baseQueue,
                        r = t.pending;
                    if (null !== r) {
                        if (null !== i) {
                            var l = i.next;
                            i.next = r.next, r.next = l
                        }
                        n.baseQueue = i = r, t.pending = null
                    }
                    if (null !== i) {
                        i = i.next, n = n.baseState;
                        var s = l = r = null,
                            u = i;
                        do {
                            var c = u.lane;
                            if ((Jr & c) === c) null !== s && (s = s.next = {
                                lane: 0,
                                action: u.action,
                                eagerReducer: u.eagerReducer,
                                eagerState: u.eagerState,
                                next: null
                            }), n = u.eagerReducer === e ? u.eagerState : e(n, u.action);
                            else {
                                var f = {
                                    lane: c,
                                    action: u.action,
                                    eagerReducer: u.eagerReducer,
                                    eagerState: u.eagerState,
                                    next: null
                                };
                                null === s ? (l = s = f, r = n) : s = s.next = f, Zr.lanes |= c, Hl |= c
                            }
                            u = u.next
                        } while (null !== u && u !== i);
                        null === s ? r = n : s.next = l, cn(n, a.memoizedState) || (Do = !0), a.memoizedState = n, a.baseState = r, a.baseQueue = s, t.lastRenderedState = n
                    }
                    return [a.memoizedState, t.dispatch]
                }

                function fo(e) {
                    var a = so(),
                        t = a.queue;
                    if (null === t) throw Error(o(311));
                    t.lastRenderedReducer = e;
                    var n = t.dispatch,
                        i = t.pending,
                        r = a.memoizedState;
                    if (null !== i) {
                        t.pending = null;
                        var l = i = i.next;
                        do {
                            r = e(r, l.action), l = l.next
                        } while (l !== i);
                        cn(r, a.memoizedState) || (Do = !0), a.memoizedState = r, null === a.baseQueue && (a.baseState = r), t.lastRenderedState = r
                    }
                    return [r, n]
                }

                function po(e, a, t) {
                    var n = a._getVersion;
                    n = n(a._source);
                    var i = a._workInProgressVersionPrimary;
                    if (null !== i ? e = i === n : (e = e.mutableReadLanes, (e = (Jr & e) === e) && (a._workInProgressVersionPrimary = n, Qr.push(a))), e) return t(a._source);
                    throw Qr.push(a), Error(o(350))
                }

                function mo(e, a, t, n) {
                    var i = Ll;
                    if (null === i) throw Error(o(349));
                    var r = a._getVersion,
                        l = r(a._source),
                        s = Gr.current,
                        u = s.useState((function() {
                            return po(i, a, t)
                        })),
                        c = u[1],
                        f = u[0];
                    u = ao;
                    var d = e.memoizedState,
                        p = d.refs,
                        m = p.getSnapshot,
                        g = d.source;
                    d = d.subscribe;
                    var v = Zr;
                    return e.memoizedState = {
                        refs: p,
                        source: a,
                        subscribe: n
                    }, s.useEffect((function() {
                        p.getSnapshot = t, p.setSnapshot = c;
                        var e = r(a._source);
                        if (!cn(l, e)) {
                            e = t(a._source), cn(f, e) || (c(e), e = ps(v), i.mutableReadLanes |= e & i.pendingLanes), e = i.mutableReadLanes, i.entangledLanes |= e;
                            for (var n = i.entanglements, o = e; 0 < o;) {
                                var s = 31 - Wa(o),
                                    u = 1 << s;
                                n[s] |= e, o &= ~u
                            }
                        }
                    }), [t, a, n]), s.useEffect((function() {
                        return n(a._source, (function() {
                            var e = p.getSnapshot,
                                t = p.setSnapshot;
                            try {
                                t(e(a._source));
                                var n = ps(v);
                                i.mutableReadLanes |= n & i.pendingLanes
                            } catch (r) {
                                t((function() {
                                    throw r
                                }))
                            }
                        }))
                    }), [a, n]), cn(m, t) && cn(g, a) && cn(d, n) || ((e = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: uo,
                        lastRenderedState: f
                    }).dispatch = c = To.bind(null, Zr, e), u.queue = e, u.baseQueue = null, f = po(i, a, t), u.memoizedState = u.baseState = f), f
                }

                function go(e, a, t) {
                    return mo(so(), e, a, t)
                }

                function vo(e) {
                    var a = lo();
                    return "function" === typeof e && (e = e()), a.memoizedState = a.baseState = e, e = (e = a.queue = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: uo,
                        lastRenderedState: e
                    }).dispatch = To.bind(null, Zr, e), [a.memoizedState, e]
                }

                function bo(e, a, t, n) {
                    return e = {
                        tag: e,
                        create: a,
                        destroy: t,
                        deps: n,
                        next: null
                    }, null === (a = Zr.updateQueue) ? (a = {
                        lastEffect: null
                    }, Zr.updateQueue = a, a.lastEffect = e.next = e) : null === (t = a.lastEffect) ? a.lastEffect = e.next = e : (n = t.next, t.next = e, e.next = n, a.lastEffect = e), e
                }

                function ho(e) {
                    return e = {
                        current: e
                    }, lo().memoizedState = e
                }

                function yo() {
                    return so().memoizedState
                }

                function wo(e, a, t, n) {
                    var i = lo();
                    Zr.flags |= e, i.memoizedState = bo(1 | a, t, void 0, void 0 === n ? null : n)
                }

                function ko(e, a, t, n) {
                    var i = so();
                    n = void 0 === n ? null : n;
                    var r = void 0;
                    if (null !== eo) {
                        var o = eo.memoizedState;
                        if (r = o.destroy, null !== n && ro(n, o.deps)) return void bo(a, t, r, n)
                    }
                    Zr.flags |= e, i.memoizedState = bo(1 | a, t, r, n)
                }

                function zo(e, a) {
                    return wo(516, 4, e, a)
                }

                function xo(e, a) {
                    return ko(516, 4, e, a)
                }

                function So(e, a) {
                    return ko(4, 2, e, a)
                }

                function Eo(e, a) {
                    return "function" === typeof a ? (e = e(), a(e), function() {
                        a(null)
                    }) : null !== a && void 0 !== a ? (e = e(), a.current = e, function() {
                        a.current = null
                    }) : void 0
                }

                function Co(e, a, t) {
                    return t = null !== t && void 0 !== t ? t.concat([e]) : null, ko(4, 2, Eo.bind(null, a, e), t)
                }

                function Oo() {}

                function No(e, a) {
                    var t = so();
                    a = void 0 === a ? null : a;
                    var n = t.memoizedState;
                    return null !== n && null !== a && ro(a, n[1]) ? n[0] : (t.memoizedState = [e, a], e)
                }

                function jo(e, a) {
                    var t = so();
                    a = void 0 === a ? null : a;
                    var n = t.memoizedState;
                    return null !== n && null !== a && ro(a, n[1]) ? n[0] : (e = e(), t.memoizedState = [e, a], e)
                }

                function Po(e, a) {
                    var t = Wi();
                    Yi(98 > t ? 98 : t, (function() {
                        e(!0)
                    })), Yi(97 < t ? 97 : t, (function() {
                        var t = Xr.transition;
                        Xr.transition = 1;
                        try {
                            e(!1), a()
                        } finally {
                            Xr.transition = t
                        }
                    }))
                }

                function To(e, a, t) {
                    var n = ds(),
                        i = ps(e),
                        r = {
                            lane: i,
                            action: t,
                            eagerReducer: null,
                            eagerState: null,
                            next: null
                        },
                        o = a.pending;
                    if (null === o ? r.next = r : (r.next = o.next, o.next = r), a.pending = r, o = e.alternate, e === Zr || null !== o && o === Zr) no = to = !0;
                    else {
                        if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = a.lastRenderedReducer)) try {
                            var l = a.lastRenderedState,
                                s = o(l, t);
                            if (r.eagerReducer = o, r.eagerState = s, cn(s, l)) return
                        } catch (u) {}
                        ms(e, i, n)
                    }
                }
                var _o = {
                        readContext: or,
                        useCallback: io,
                        useContext: io,
                        useEffect: io,
                        useImperativeHandle: io,
                        useLayoutEffect: io,
                        useMemo: io,
                        useReducer: io,
                        useRef: io,
                        useState: io,
                        useDebugValue: io,
                        useDeferredValue: io,
                        useTransition: io,
                        useMutableSource: io,
                        useOpaqueIdentifier: io,
                        unstable_isNewReconciler: !1
                    },
                    Lo = {
                        readContext: or,
                        useCallback: function(e, a) {
                            return lo().memoizedState = [e, void 0 === a ? null : a], e
                        },
                        useContext: or,
                        useEffect: zo,
                        useImperativeHandle: function(e, a, t) {
                            return t = null !== t && void 0 !== t ? t.concat([e]) : null, wo(4, 2, Eo.bind(null, a, e), t)
                        },
                        useLayoutEffect: function(e, a) {
                            return wo(4, 2, e, a)
                        },
                        useMemo: function(e, a) {
                            var t = lo();
                            return a = void 0 === a ? null : a, e = e(), t.memoizedState = [e, a], e
                        },
                        useReducer: function(e, a, t) {
                            var n = lo();
                            return a = void 0 !== t ? t(a) : a, n.memoizedState = n.baseState = a, e = (e = n.queue = {
                                pending: null,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: a
                            }).dispatch = To.bind(null, Zr, e), [n.memoizedState, e]
                        },
                        useRef: ho,
                        useState: vo,
                        useDebugValue: Oo,
                        useDeferredValue: function(e) {
                            var a = vo(e),
                                t = a[0],
                                n = a[1];
                            return zo((function() {
                                var a = Xr.transition;
                                Xr.transition = 1;
                                try {
                                    n(e)
                                } finally {
                                    Xr.transition = a
                                }
                            }), [e]), t
                        },
                        useTransition: function() {
                            var e = vo(!1),
                                a = e[0];
                            return ho(e = Po.bind(null, e[1])), [e, a]
                        },
                        useMutableSource: function(e, a, t) {
                            var n = lo();
                            return n.memoizedState = {
                                refs: {
                                    getSnapshot: a,
                                    setSnapshot: null
                                },
                                source: e,
                                subscribe: t
                            }, mo(n, e, a, t)
                        },
                        useOpaqueIdentifier: function() {
                            if (Hr) {
                                var e = !1,
                                    a = function(e) {
                                        return {
                                            $$typeof: A,
                                            toString: e,
                                            valueOf: e
                                        }
                                    }((function() {
                                        throw e || (e = !0, t("r:" + (Gn++).toString(36))), Error(o(355))
                                    })),
                                    t = vo(a)[1];
                                return 0 === (2 & Zr.mode) && (Zr.flags |= 516, bo(5, (function() {
                                    t("r:" + (Gn++).toString(36))
                                }), void 0, null)), a
                            }
                            return vo(a = "r:" + (Gn++).toString(36)), a
                        },
                        unstable_isNewReconciler: !1
                    },
                    Mo = {
                        readContext: or,
                        useCallback: No,
                        useContext: or,
                        useEffect: xo,
                        useImperativeHandle: Co,
                        useLayoutEffect: So,
                        useMemo: jo,
                        useReducer: co,
                        useRef: yo,
                        useState: function() {
                            return co(uo)
                        },
                        useDebugValue: Oo,
                        useDeferredValue: function(e) {
                            var a = co(uo),
                                t = a[0],
                                n = a[1];
                            return xo((function() {
                                var a = Xr.transition;
                                Xr.transition = 1;
                                try {
                                    n(e)
                                } finally {
                                    Xr.transition = a
                                }
                            }), [e]), t
                        },
                        useTransition: function() {
                            var e = co(uo)[0];
                            return [yo().current, e]
                        },
                        useMutableSource: go,
                        useOpaqueIdentifier: function() {
                            return co(uo)[0]
                        },
                        unstable_isNewReconciler: !1
                    },
                    Ao = {
                        readContext: or,
                        useCallback: No,
                        useContext: or,
                        useEffect: xo,
                        useImperativeHandle: Co,
                        useLayoutEffect: So,
                        useMemo: jo,
                        useReducer: fo,
                        useRef: yo,
                        useState: function() {
                            return fo(uo)
                        },
                        useDebugValue: Oo,
                        useDeferredValue: function(e) {
                            var a = fo(uo),
                                t = a[0],
                                n = a[1];
                            return xo((function() {
                                var a = Xr.transition;
                                Xr.transition = 1;
                                try {
                                    n(e)
                                } finally {
                                    Xr.transition = a
                                }
                            }), [e]), t
                        },
                        useTransition: function() {
                            var e = fo(uo)[0];
                            return [yo().current, e]
                        },
                        useMutableSource: go,
                        useOpaqueIdentifier: function() {
                            return fo(uo)[0]
                        },
                        unstable_isNewReconciler: !1
                    },
                    Ro = k.ReactCurrentOwner,
                    Do = !1;

                function Io(e, a, t, n) {
                    a.child = null === e ? Or(a, null, t, n) : Cr(a, e.child, t, n)
                }

                function Fo(e, a, t, n, i) {
                    t = t.render;
                    var r = a.ref;
                    return rr(a, i), n = oo(e, a, t, n, r, i), null === e || Do ? (a.flags |= 1, Io(e, a, n, i), a.child) : (a.updateQueue = e.updateQueue, a.flags &= -517, e.lanes &= ~i, rl(e, a, i))
                }

                function Uo(e, a, t, n, i, r) {
                    if (null === e) {
                        var o = t.type;
                        return "function" !== typeof o || Bs(o) || void 0 !== o.defaultProps || null !== t.compare || void 0 !== t.defaultProps ? ((e = $s(t.type, null, n, a, a.mode, r)).ref = a.ref, e.return = a, a.child = e) : (a.tag = 15, a.type = o, Ho(e, a, o, n, i, r))
                    }
                    return o = e.child, 0 === (i & r) && (i = o.memoizedProps, (t = null !== (t = t.compare) ? t : dn)(i, n) && e.ref === a.ref) ? rl(e, a, r) : (a.flags |= 1, (e = Ys(o, n)).ref = a.ref, e.return = a, a.child = e)
                }

                function Ho(e, a, t, n, i, r) {
                    if (null !== e && dn(e.memoizedProps, n) && e.ref === a.ref) {
                        if (Do = !1, 0 === (r & i)) return a.lanes = e.lanes, rl(e, a, r);
                        0 !== (16384 & e.flags) && (Do = !0)
                    }
                    return Wo(e, a, t, n, r)
                }

                function Vo(e, a, t) {
                    var n = a.pendingProps,
                        i = n.children,
                        r = null !== e ? e.memoizedState : null;
                    if ("hidden" === n.mode || "unstable-defer-without-hiding" === n.mode)
                        if (0 === (4 & a.mode)) a.memoizedState = {
                            baseLanes: 0
                        }, zs(a, t);
                        else {
                            if (0 === (1073741824 & t)) return e = null !== r ? r.baseLanes | t : t, a.lanes = a.childLanes = 1073741824, a.memoizedState = {
                                baseLanes: e
                            }, zs(a, e), null;
                            a.memoizedState = {
                                baseLanes: 0
                            }, zs(a, null !== r ? r.baseLanes : t)
                        }
                    else null !== r ? (n = r.baseLanes | t, a.memoizedState = null) : n = t, zs(a, n);
                    return Io(e, a, i, t), a.child
                }

                function qo(e, a) {
                    var t = a.ref;
                    (null === e && null !== t || null !== e && e.ref !== t) && (a.flags |= 128)
                }

                function Wo(e, a, t, n, i) {
                    var r = bi(t) ? gi : pi.current;
                    return r = vi(a, r), rr(a, i), t = oo(e, a, t, n, r, i), null === e || Do ? (a.flags |= 1, Io(e, a, t, i), a.child) : (a.updateQueue = e.updateQueue, a.flags &= -517, e.lanes &= ~i, rl(e, a, i))
                }

                function Bo(e, a, t, n, i) {
                    if (bi(t)) {
                        var r = !0;
                        ki(a)
                    } else r = !1;
                    if (rr(a, i), null === a.stateNode) null !== e && (e.alternate = null, a.alternate = null, a.flags |= 2), yr(a, t, n), kr(a, t, n, i), n = !0;
                    else if (null === e) {
                        var o = a.stateNode,
                            l = a.memoizedProps;
                        o.props = l;
                        var s = o.context,
                            u = t.contextType;
                        "object" === typeof u && null !== u ? u = or(u) : u = vi(a, u = bi(t) ? gi : pi.current);
                        var c = t.getDerivedStateFromProps,
                            f = "function" === typeof c || "function" === typeof o.getSnapshotBeforeUpdate;
                        f || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (l !== n || s !== u) && wr(a, o, n, u), lr = !1;
                        var d = a.memoizedState;
                        o.state = d, pr(a, n, o, i), s = a.memoizedState, l !== n || d !== s || mi.current || lr ? ("function" === typeof c && (vr(a, t, c, n), s = a.memoizedState), (l = lr || hr(a, t, l, n, d, s, u)) ? (f || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || ("function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" === typeof o.componentDidMount && (a.flags |= 4)) : ("function" === typeof o.componentDidMount && (a.flags |= 4), a.memoizedProps = n, a.memoizedState = s), o.props = n, o.state = s, o.context = u, n = l) : ("function" === typeof o.componentDidMount && (a.flags |= 4), n = !1)
                    } else {
                        o = a.stateNode, ur(e, a), l = a.memoizedProps, u = a.type === a.elementType ? l : Xi(a.type, l), o.props = u, f = a.pendingProps, d = o.context, "object" === typeof(s = t.contextType) && null !== s ? s = or(s) : s = vi(a, s = bi(t) ? gi : pi.current);
                        var p = t.getDerivedStateFromProps;
                        (c = "function" === typeof p || "function" === typeof o.getSnapshotBeforeUpdate) || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (l !== f || d !== s) && wr(a, o, n, s), lr = !1, d = a.memoizedState, o.state = d, pr(a, n, o, i);
                        var m = a.memoizedState;
                        l !== f || d !== m || mi.current || lr ? ("function" === typeof p && (vr(a, t, p, n), m = a.memoizedState), (u = lr || hr(a, t, u, n, d, m, s)) ? (c || "function" !== typeof o.UNSAFE_componentWillUpdate && "function" !== typeof o.componentWillUpdate || ("function" === typeof o.componentWillUpdate && o.componentWillUpdate(n, m, s), "function" === typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(n, m, s)), "function" === typeof o.componentDidUpdate && (a.flags |= 4), "function" === typeof o.getSnapshotBeforeUpdate && (a.flags |= 256)) : ("function" !== typeof o.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (a.flags |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (a.flags |= 256), a.memoizedProps = n, a.memoizedState = m), o.props = n, o.state = m, o.context = s, n = u) : ("function" !== typeof o.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (a.flags |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (a.flags |= 256), n = !1)
                    }
                    return Yo(e, a, t, n, r, i)
                }

                function Yo(e, a, t, n, i, r) {
                    qo(e, a);
                    var o = 0 !== (64 & a.flags);
                    if (!n && !o) return i && zi(a, t, !1), rl(e, a, r);
                    n = a.stateNode, Ro.current = a;
                    var l = o && "function" !== typeof t.getDerivedStateFromError ? null : n.render();
                    return a.flags |= 1, null !== e && o ? (a.child = Cr(a, e.child, null, r), a.child = Cr(a, null, l, r)) : Io(e, a, l, r), a.memoizedState = n.state, i && zi(a, t, !0), a.child
                }

                function $o(e) {
                    var a = e.stateNode;
                    a.pendingContext ? yi(0, a.pendingContext, a.pendingContext !== a.context) : a.context && yi(0, a.context, !1), Lr(e, a.containerInfo)
                }
                var Qo, Ko, Go, Xo = {
                    dehydrated: null,
                    retryLane: 0
                };

                function Jo(e, a, t) {
                    var n, i = a.pendingProps,
                        r = Dr.current,
                        o = !1;
                    return (n = 0 !== (64 & a.flags)) || (n = (null === e || null !== e.memoizedState) && 0 !== (2 & r)), n ? (o = !0, a.flags &= -65) : null !== e && null === e.memoizedState || void 0 === i.fallback || !0 === i.unstable_avoidThisFallback || (r |= 1), fi(Dr, 1 & r), null === e ? (void 0 !== i.fallback && Wr(a), e = i.children, r = i.fallback, o ? (e = Zo(a, e, r, t), a.child.memoizedState = {
                        baseLanes: t
                    }, a.memoizedState = Xo, e) : "number" === typeof i.unstable_expectedLoadTime ? (e = Zo(a, e, r, t), a.child.memoizedState = {
                        baseLanes: t
                    }, a.memoizedState = Xo, a.lanes = 33554432, e) : ((t = Ks({
                        mode: "visible",
                        children: e
                    }, a.mode, t, null)).return = a, a.child = t)) : (e.memoizedState, o ? (i = al(e, a, i.children, i.fallback, t), o = a.child, r = e.child.memoizedState, o.memoizedState = null === r ? {
                        baseLanes: t
                    } : {
                        baseLanes: r.baseLanes | t
                    }, o.childLanes = e.childLanes & ~t, a.memoizedState = Xo, i) : (t = el(e, a, i.children, t), a.memoizedState = null, t))
                }

                function Zo(e, a, t, n) {
                    var i = e.mode,
                        r = e.child;
                    return a = {
                        mode: "hidden",
                        children: a
                    }, 0 === (2 & i) && null !== r ? (r.childLanes = 0, r.pendingProps = a) : r = Ks(a, i, 0, null), t = Qs(t, i, n, null), r.return = e, t.return = e, r.sibling = t, e.child = r, t
                }

                function el(e, a, t, n) {
                    var i = e.child;
                    return e = i.sibling, t = Ys(i, {
                        mode: "visible",
                        children: t
                    }), 0 === (2 & a.mode) && (t.lanes = n), t.return = a, t.sibling = null, null !== e && (e.nextEffect = null, e.flags = 8, a.firstEffect = a.lastEffect = e), a.child = t
                }

                function al(e, a, t, n, i) {
                    var r = a.mode,
                        o = e.child;
                    e = o.sibling;
                    var l = {
                        mode: "hidden",
                        children: t
                    };
                    return 0 === (2 & r) && a.child !== o ? ((t = a.child).childLanes = 0, t.pendingProps = l, null !== (o = t.lastEffect) ? (a.firstEffect = t.firstEffect, a.lastEffect = o, o.nextEffect = null) : a.firstEffect = a.lastEffect = null) : t = Ys(o, l), null !== e ? n = Ys(e, n) : (n = Qs(n, r, i, null)).flags |= 2, n.return = a, t.return = a, t.sibling = n, a.child = t, n
                }

                function tl(e, a) {
                    e.lanes |= a;
                    var t = e.alternate;
                    null !== t && (t.lanes |= a), ir(e.return, a)
                }

                function nl(e, a, t, n, i, r) {
                    var o = e.memoizedState;
                    null === o ? e.memoizedState = {
                        isBackwards: a,
                        rendering: null,
                        renderingStartTime: 0,
                        last: n,
                        tail: t,
                        tailMode: i,
                        lastEffect: r
                    } : (o.isBackwards = a, o.rendering = null, o.renderingStartTime = 0, o.last = n, o.tail = t, o.tailMode = i, o.lastEffect = r)
                }

                function il(e, a, t) {
                    var n = a.pendingProps,
                        i = n.revealOrder,
                        r = n.tail;
                    if (Io(e, a, n.children, t), 0 !== (2 & (n = Dr.current))) n = 1 & n | 2, a.flags |= 64;
                    else {
                        if (null !== e && 0 !== (64 & e.flags)) e: for (e = a.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && tl(e, t);
                            else if (19 === e.tag) tl(e, t);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === a) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === a) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        n &= 1
                    }
                    if (fi(Dr, n), 0 === (2 & a.mode)) a.memoizedState = null;
                    else switch (i) {
                        case "forwards":
                            for (t = a.child, i = null; null !== t;) null !== (e = t.alternate) && null === Ir(e) && (i = t), t = t.sibling;
                            null === (t = i) ? (i = a.child, a.child = null) : (i = t.sibling, t.sibling = null), nl(a, !1, i, t, r, a.lastEffect);
                            break;
                        case "backwards":
                            for (t = null, i = a.child, a.child = null; null !== i;) {
                                if (null !== (e = i.alternate) && null === Ir(e)) {
                                    a.child = i;
                                    break
                                }
                                e = i.sibling, i.sibling = t, t = i, i = e
                            }
                            nl(a, !0, t, null, r, a.lastEffect);
                            break;
                        case "together":
                            nl(a, !1, null, null, void 0, a.lastEffect);
                            break;
                        default:
                            a.memoizedState = null
                    }
                    return a.child
                }

                function rl(e, a, t) {
                    if (null !== e && (a.dependencies = e.dependencies), Hl |= a.lanes, 0 !== (t & a.childLanes)) {
                        if (null !== e && a.child !== e.child) throw Error(o(153));
                        if (null !== a.child) {
                            for (t = Ys(e = a.child, e.pendingProps), a.child = t, t.return = a; null !== e.sibling;) e = e.sibling, (t = t.sibling = Ys(e, e.pendingProps)).return = a;
                            t.sibling = null
                        }
                        return a.child
                    }
                    return null
                }

                function ol(e, a) {
                    if (!Hr) switch (e.tailMode) {
                        case "hidden":
                            a = e.tail;
                            for (var t = null; null !== a;) null !== a.alternate && (t = a), a = a.sibling;
                            null === t ? e.tail = null : t.sibling = null;
                            break;
                        case "collapsed":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? a || null === e.tail ? e.tail = null : e.tail.sibling = null : n.sibling = null
                    }
                }

                function ll(e, a, t) {
                    var n = a.pendingProps;
                    switch (a.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return null;
                        case 1:
                        case 17:
                            return bi(a.type) && hi(), null;
                        case 3:
                            return Mr(), ci(mi), ci(pi), Kr(), (n = a.stateNode).pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== e && null !== e.child || (Yr(a) ? a.flags |= 4 : n.hydrate || (a.flags |= 256)), null;
                        case 5:
                            Rr(a);
                            var r = _r(Tr.current);
                            if (t = a.type, null !== e && null != a.stateNode) Ko(e, a, t, n), e.ref !== a.ref && (a.flags |= 128);
                            else {
                                if (!n) {
                                    if (null === a.stateNode) throw Error(o(166));
                                    return null
                                }
                                if (e = _r(jr.current), Yr(a)) {
                                    n = a.stateNode, t = a.type;
                                    var l = a.memoizedProps;
                                    switch (n[Jn] = a, n[Zn] = l, t) {
                                        case "dialog":
                                            Pn("cancel", n), Pn("close", n);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Pn("load", n);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (e = 0; e < Cn.length; e++) Pn(Cn[e], n);
                                            break;
                                        case "source":
                                            Pn("error", n);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Pn("error", n), Pn("load", n);
                                            break;
                                        case "details":
                                            Pn("toggle", n);
                                            break;
                                        case "input":
                                            ee(n, l), Pn("invalid", n);
                                            break;
                                        case "select":
                                            n._wrapperState = {
                                                wasMultiple: !!l.multiple
                                            }, Pn("invalid", n);
                                            break;
                                        case "textarea":
                                            se(n, l), Pn("invalid", n)
                                    }
                                    for (var u in Se(t, l), e = null, l) l.hasOwnProperty(u) && (r = l[u], "children" === u ? "string" === typeof r ? n.textContent !== r && (e = ["children", r]) : "number" === typeof r && n.textContent !== "" + r && (e = ["children", "" + r]) : s.hasOwnProperty(u) && null != r && "onScroll" === u && Pn("scroll", n));
                                    switch (t) {
                                        case "input":
                                            G(n), ne(n, l, !0);
                                            break;
                                        case "textarea":
                                            G(n), ce(n);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof l.onClick && (n.onclick = Un)
                                    }
                                    n = e, a.updateQueue = n, null !== n && (a.flags |= 4)
                                } else {
                                    switch (u = 9 === r.nodeType ? r : r.ownerDocument, e === fe && (e = pe(t)), e === fe ? "script" === t ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof n.is ? e = u.createElement(t, {
                                            is: n.is
                                        }) : (e = u.createElement(t), "select" === t && (u = e, n.multiple ? u.multiple = !0 : n.size && (u.size = n.size))) : e = u.createElementNS(e, t), e[Jn] = a, e[Zn] = n, Qo(e, a), a.stateNode = e, u = Ee(t, n), t) {
                                        case "dialog":
                                            Pn("cancel", e), Pn("close", e), r = n;
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Pn("load", e), r = n;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (r = 0; r < Cn.length; r++) Pn(Cn[r], e);
                                            r = n;
                                            break;
                                        case "source":
                                            Pn("error", e), r = n;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Pn("error", e), Pn("load", e), r = n;
                                            break;
                                        case "details":
                                            Pn("toggle", e), r = n;
                                            break;
                                        case "input":
                                            ee(e, n), r = Z(e, n), Pn("invalid", e);
                                            break;
                                        case "option":
                                            r = re(e, n);
                                            break;
                                        case "select":
                                            e._wrapperState = {
                                                wasMultiple: !!n.multiple
                                            }, r = i({}, n, {
                                                value: void 0
                                            }), Pn("invalid", e);
                                            break;
                                        case "textarea":
                                            se(e, n), r = le(e, n), Pn("invalid", e);
                                            break;
                                        default:
                                            r = n
                                    }
                                    Se(t, r);
                                    var c = r;
                                    for (l in c)
                                        if (c.hasOwnProperty(l)) {
                                            var f = c[l];
                                            "style" === l ? ze(e, f) : "dangerouslySetInnerHTML" === l ? null != (f = f ? f.__html : void 0) && be(e, f) : "children" === l ? "string" === typeof f ? ("textarea" !== t || "" !== f) && he(e, f) : "number" === typeof f && he(e, "" + f) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (s.hasOwnProperty(l) ? null != f && "onScroll" === l && Pn("scroll", e) : null != f && w(e, l, f, u))
                                        } switch (t) {
                                        case "input":
                                            G(e), ne(e, n, !1);
                                            break;
                                        case "textarea":
                                            G(e), ce(e);
                                            break;
                                        case "option":
                                            null != n.value && e.setAttribute("value", "" + Q(n.value));
                                            break;
                                        case "select":
                                            e.multiple = !!n.multiple, null != (l = n.value) ? oe(e, !!n.multiple, l, !1) : null != n.defaultValue && oe(e, !!n.multiple, n.defaultValue, !0);
                                            break;
                                        default:
                                            "function" === typeof r.onClick && (e.onclick = Un)
                                    }
                                    qn(t, n) && (a.flags |= 4)
                                }
                                null !== a.ref && (a.flags |= 128)
                            }
                            return null;
                        case 6:
                            if (e && null != a.stateNode) Go(0, a, e.memoizedProps, n);
                            else {
                                if ("string" !== typeof n && null === a.stateNode) throw Error(o(166));
                                t = _r(Tr.current), _r(jr.current), Yr(a) ? (n = a.stateNode, t = a.memoizedProps, n[Jn] = a, n.nodeValue !== t && (a.flags |= 4)) : ((n = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(n))[Jn] = a, a.stateNode = n)
                            }
                            return null;
                        case 13:
                            return ci(Dr), n = a.memoizedState, 0 !== (64 & a.flags) ? (a.lanes = t, a) : (n = null !== n, t = !1, null === e ? void 0 !== a.memoizedProps.fallback && Yr(a) : t = null !== e.memoizedState, n && !t && 0 !== (2 & a.mode) && (null === e && !0 !== a.memoizedProps.unstable_avoidThisFallback || 0 !== (1 & Dr.current) ? 0 === Il && (Il = 3) : (0 !== Il && 3 !== Il || (Il = 4), null === Ll || 0 === (134217727 & Hl) && 0 === (134217727 & Vl) || hs(Ll, Al))), (n || t) && (a.flags |= 4), null);
                        case 4:
                            return Mr(), null === e && _n(a.stateNode.containerInfo), null;
                        case 10:
                            return nr(a), null;
                        case 19:
                            if (ci(Dr), null === (n = a.memoizedState)) return null;
                            if (l = 0 !== (64 & a.flags), null === (u = n.rendering))
                                if (l) ol(n, !1);
                                else {
                                    if (0 !== Il || null !== e && 0 !== (64 & e.flags))
                                        for (e = a.child; null !== e;) {
                                            if (null !== (u = Ir(e))) {
                                                for (a.flags |= 64, ol(n, !1), null !== (l = u.updateQueue) && (a.updateQueue = l, a.flags |= 4), null === n.lastEffect && (a.firstEffect = null), a.lastEffect = n.lastEffect, n = t, t = a.child; null !== t;) e = n, (l = t).flags &= 2, l.nextEffect = null, l.firstEffect = null, l.lastEffect = null, null === (u = l.alternate) ? (l.childLanes = 0, l.lanes = e, l.child = null, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, e = u.dependencies, l.dependencies = null === e ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }), t = t.sibling;
                                                return fi(Dr, 1 & Dr.current | 2), a.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== n.tail && qi() > Yl && (a.flags |= 64, l = !0, ol(n, !1), a.lanes = 33554432)
                                }
                            else {
                                if (!l)
                                    if (null !== (e = Ir(u))) {
                                        if (a.flags |= 64, l = !0, null !== (t = e.updateQueue) && (a.updateQueue = t, a.flags |= 4), ol(n, !0), null === n.tail && "hidden" === n.tailMode && !u.alternate && !Hr) return null !== (a = a.lastEffect = n.lastEffect) && (a.nextEffect = null), null
                                    } else 2 * qi() - n.renderingStartTime > Yl && 1073741824 !== t && (a.flags |= 64, l = !0, ol(n, !1), a.lanes = 33554432);
                                n.isBackwards ? (u.sibling = a.child, a.child = u) : (null !== (t = n.last) ? t.sibling = u : a.child = u, n.last = u)
                            }
                            return null !== n.tail ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.lastEffect = a.lastEffect, n.renderingStartTime = qi(), t.sibling = null, a = Dr.current, fi(Dr, l ? 1 & a | 2 : 1 & a), t) : null;
                        case 23:
                        case 24:
                            return xs(), null !== e && null !== e.memoizedState !== (null !== a.memoizedState) && "unstable-defer-without-hiding" !== n.mode && (a.flags |= 4), null
                    }
                    throw Error(o(156, a.tag))
                }

                function sl(e) {
                    switch (e.tag) {
                        case 1:
                            bi(e.type) && hi();
                            var a = e.flags;
                            return 4096 & a ? (e.flags = -4097 & a | 64, e) : null;
                        case 3:
                            if (Mr(), ci(mi), ci(pi), Kr(), 0 !== (64 & (a = e.flags))) throw Error(o(285));
                            return e.flags = -4097 & a | 64, e;
                        case 5:
                            return Rr(e), null;
                        case 13:
                            return ci(Dr), 4096 & (a = e.flags) ? (e.flags = -4097 & a | 64, e) : null;
                        case 19:
                            return ci(Dr), null;
                        case 4:
                            return Mr(), null;
                        case 10:
                            return nr(e), null;
                        case 23:
                        case 24:
                            return xs(), null;
                        default:
                            return null
                    }
                }

                function ul(e, a) {
                    try {
                        var t = "",
                            n = a;
                        do {
                            t += Y(n), n = n.return
                        } while (n);
                        var i = t
                    } catch (r) {
                        i = "\nError generating stack: " + r.message + "\n" + r.stack
                    }
                    return {
                        value: e,
                        source: a,
                        stack: i
                    }
                }

                function cl(e, a) {
                    try {
                        console.error(a.value)
                    } catch (t) {
                        setTimeout((function() {
                            throw t
                        }))
                    }
                }
                Qo = function(e, a) {
                    for (var t = a.child; null !== t;) {
                        if (5 === t.tag || 6 === t.tag) e.appendChild(t.stateNode);
                        else if (4 !== t.tag && null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === a) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === a) return;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                }, Ko = function(e, a, t, n) {
                    var r = e.memoizedProps;
                    if (r !== n) {
                        e = a.stateNode, _r(jr.current);
                        var o, l = null;
                        switch (t) {
                            case "input":
                                r = Z(e, r), n = Z(e, n), l = [];
                                break;
                            case "option":
                                r = re(e, r), n = re(e, n), l = [];
                                break;
                            case "select":
                                r = i({}, r, {
                                    value: void 0
                                }), n = i({}, n, {
                                    value: void 0
                                }), l = [];
                                break;
                            case "textarea":
                                r = le(e, r), n = le(e, n), l = [];
                                break;
                            default:
                                "function" !== typeof r.onClick && "function" === typeof n.onClick && (e.onclick = Un)
                        }
                        for (f in Se(t, n), t = null, r)
                            if (!n.hasOwnProperty(f) && r.hasOwnProperty(f) && null != r[f])
                                if ("style" === f) {
                                    var u = r[f];
                                    for (o in u) u.hasOwnProperty(o) && (t || (t = {}), t[o] = "")
                                } else "dangerouslySetInnerHTML" !== f && "children" !== f && "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (s.hasOwnProperty(f) ? l || (l = []) : (l = l || []).push(f, null));
                        for (f in n) {
                            var c = n[f];
                            if (u = null != r ? r[f] : void 0, n.hasOwnProperty(f) && c !== u && (null != c || null != u))
                                if ("style" === f)
                                    if (u) {
                                        for (o in u) !u.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (t || (t = {}), t[o] = "");
                                        for (o in c) c.hasOwnProperty(o) && u[o] !== c[o] && (t || (t = {}), t[o] = c[o])
                                    } else t || (l || (l = []), l.push(f, t)), t = c;
                            else "dangerouslySetInnerHTML" === f ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, null != c && u !== c && (l = l || []).push(f, c)) : "children" === f ? "string" !== typeof c && "number" !== typeof c || (l = l || []).push(f, "" + c) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && (s.hasOwnProperty(f) ? (null != c && "onScroll" === f && Pn("scroll", e), l || u === c || (l = [])) : "object" === typeof c && null !== c && c.$$typeof === A ? c.toString() : (l = l || []).push(f, c))
                        }
                        t && (l = l || []).push("style", t);
                        var f = l;
                        (a.updateQueue = f) && (a.flags |= 4)
                    }
                }, Go = function(e, a, t, n) {
                    t !== n && (a.flags |= 4)
                };
                var fl = "function" === typeof WeakMap ? WeakMap : Map;

                function dl(e, a, t) {
                    (t = cr(-1, t)).tag = 3, t.payload = {
                        element: null
                    };
                    var n = a.value;
                    return t.callback = function() {
                        Gl || (Gl = !0, Xl = n), cl(0, a)
                    }, t
                }

                function pl(e, a, t) {
                    (t = cr(-1, t)).tag = 3;
                    var n = e.type.getDerivedStateFromError;
                    if ("function" === typeof n) {
                        var i = a.value;
                        t.payload = function() {
                            return cl(0, a), n(i)
                        }
                    }
                    var r = e.stateNode;
                    return null !== r && "function" === typeof r.componentDidCatch && (t.callback = function() {
                        "function" !== typeof n && (null === Jl ? Jl = new Set([this]) : Jl.add(this), cl(0, a));
                        var e = a.stack;
                        this.componentDidCatch(a.value, {
                            componentStack: null !== e ? e : ""
                        })
                    }), t
                }
                var ml = "function" === typeof WeakSet ? WeakSet : Set;

                function gl(e) {
                    var a = e.ref;
                    if (null !== a)
                        if ("function" === typeof a) try {
                            a(null)
                        } catch (t) {
                            Us(e, t)
                        } else a.current = null
                }

                function vl(e, a) {
                    switch (a.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            return;
                        case 1:
                            if (256 & a.flags && null !== e) {
                                var t = e.memoizedProps,
                                    n = e.memoizedState;
                                a = (e = a.stateNode).getSnapshotBeforeUpdate(a.elementType === a.type ? t : Xi(a.type, t), n), e.__reactInternalSnapshotBeforeUpdate = a
                            }
                            return;
                        case 3:
                            return void(256 & a.flags && $n(a.stateNode.containerInfo))
                    }
                    throw Error(o(163))
                }

                function bl(e, a, t) {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                            if (null !== (a = null !== (a = t.updateQueue) ? a.lastEffect : null)) {
                                e = a = a.next;
                                do {
                                    if (3 === (3 & e.tag)) {
                                        var n = e.create;
                                        e.destroy = n()
                                    }
                                    e = e.next
                                } while (e !== a)
                            }
                            if (null !== (a = null !== (a = t.updateQueue) ? a.lastEffect : null)) {
                                e = a = a.next;
                                do {
                                    var i = e;
                                    n = i.next, 0 !== (4 & (i = i.tag)) && 0 !== (1 & i) && (Ds(t, e), Rs(t, e)), e = n
                                } while (e !== a)
                            }
                            return;
                        case 1:
                            return e = t.stateNode, 4 & t.flags && (null === a ? e.componentDidMount() : (n = t.elementType === t.type ? a.memoizedProps : Xi(t.type, a.memoizedProps), e.componentDidUpdate(n, a.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), void(null !== (a = t.updateQueue) && mr(t, a, e));
                        case 3:
                            if (null !== (a = t.updateQueue)) {
                                if (e = null, null !== t.child) switch (t.child.tag) {
                                    case 5:
                                    case 1:
                                        e = t.child.stateNode
                                }
                                mr(t, a, e)
                            }
                            return;
                        case 5:
                            return e = t.stateNode, void(null === a && 4 & t.flags && qn(t.type, t.memoizedProps) && e.focus());
                        case 6:
                        case 4:
                        case 12:
                        case 19:
                        case 17:
                        case 20:
                        case 21:
                        case 23:
                        case 24:
                            return;
                        case 13:
                            return void(null === t.memoizedState && (t = t.alternate, null !== t && (t = t.memoizedState, null !== t && (t = t.dehydrated, null !== t && za(t)))))
                    }
                    throw Error(o(163))
                }

                function hl(e, a) {
                    for (var t = e;;) {
                        if (5 === t.tag) {
                            var n = t.stateNode;
                            if (a) "function" === typeof(n = n.style).setProperty ? n.setProperty("display", "none", "important") : n.display = "none";
                            else {
                                n = t.stateNode;
                                var i = t.memoizedProps.style;
                                i = void 0 !== i && null !== i && i.hasOwnProperty("display") ? i.display : null, n.style.display = ke("display", i)
                            }
                        } else if (6 === t.tag) t.stateNode.nodeValue = a ? "" : t.memoizedProps;
                        else if ((23 !== t.tag && 24 !== t.tag || null === t.memoizedState || t === e) && null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                }

                function yl(e, a) {
                    if (Si && "function" === typeof Si.onCommitFiberUnmount) try {
                        Si.onCommitFiberUnmount(xi, a)
                    } catch (r) {}
                    switch (a.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            if (null !== (e = a.updateQueue) && null !== (e = e.lastEffect)) {
                                var t = e = e.next;
                                do {
                                    var n = t,
                                        i = n.destroy;
                                    if (n = n.tag, void 0 !== i)
                                        if (0 !== (4 & n)) Ds(a, t);
                                        else {
                                            n = a;
                                            try {
                                                i()
                                            } catch (r) {
                                                Us(n, r)
                                            }
                                        } t = t.next
                                } while (t !== e)
                            }
                            break;
                        case 1:
                            if (gl(a), "function" === typeof(e = a.stateNode).componentWillUnmount) try {
                                e.props = a.memoizedProps, e.state = a.memoizedState, e.componentWillUnmount()
                            } catch (r) {
                                Us(a, r)
                            }
                            break;
                        case 5:
                            gl(a);
                            break;
                        case 4:
                            El(e, a)
                    }
                }

                function wl(e) {
                    e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null
                }

                function kl(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function zl(e) {
                    e: {
                        for (var a = e.return; null !== a;) {
                            if (kl(a)) break e;
                            a = a.return
                        }
                        throw Error(o(160))
                    }
                    var t = a;
                    switch (a = t.stateNode, t.tag) {
                        case 5:
                            var n = !1;
                            break;
                        case 3:
                        case 4:
                            a = a.containerInfo, n = !0;
                            break;
                        default:
                            throw Error(o(161))
                    }
                    16 & t.flags && (he(a, ""), t.flags &= -17);e: a: for (t = e;;) {
                        for (; null === t.sibling;) {
                            if (null === t.return || kl(t.return)) {
                                t = null;
                                break e
                            }
                            t = t.return
                        }
                        for (t.sibling.return = t.return, t = t.sibling; 5 !== t.tag && 6 !== t.tag && 18 !== t.tag;) {
                            if (2 & t.flags) continue a;
                            if (null === t.child || 4 === t.tag) continue a;
                            t.child.return = t, t = t.child
                        }
                        if (!(2 & t.flags)) {
                            t = t.stateNode;
                            break e
                        }
                    }
                    n ? xl(e, t, a) : Sl(e, t, a)
                }

                function xl(e, a, t) {
                    var n = e.tag,
                        i = 5 === n || 6 === n;
                    if (i) e = i ? e.stateNode : e.stateNode.instance, a ? 8 === t.nodeType ? t.parentNode.insertBefore(e, a) : t.insertBefore(e, a) : (8 === t.nodeType ? (a = t.parentNode).insertBefore(e, t) : (a = t).appendChild(e), null !== (t = t._reactRootContainer) && void 0 !== t || null !== a.onclick || (a.onclick = Un));
                    else if (4 !== n && null !== (e = e.child))
                        for (xl(e, a, t), e = e.sibling; null !== e;) xl(e, a, t), e = e.sibling
                }

                function Sl(e, a, t) {
                    var n = e.tag,
                        i = 5 === n || 6 === n;
                    if (i) e = i ? e.stateNode : e.stateNode.instance, a ? t.insertBefore(e, a) : t.appendChild(e);
                    else if (4 !== n && null !== (e = e.child))
                        for (Sl(e, a, t), e = e.sibling; null !== e;) Sl(e, a, t), e = e.sibling
                }

                function El(e, a) {
                    for (var t, n, i = a, r = !1;;) {
                        if (!r) {
                            r = i.return;
                            e: for (;;) {
                                if (null === r) throw Error(o(160));
                                switch (t = r.stateNode, r.tag) {
                                    case 5:
                                        n = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        t = t.containerInfo, n = !0;
                                        break e
                                }
                                r = r.return
                            }
                            r = !0
                        }
                        if (5 === i.tag || 6 === i.tag) {
                            e: for (var l = e, s = i, u = s;;)
                                if (yl(l, u), null !== u.child && 4 !== u.tag) u.child.return = u, u = u.child;
                                else {
                                    if (u === s) break e;
                                    for (; null === u.sibling;) {
                                        if (null === u.return || u.return === s) break e;
                                        u = u.return
                                    }
                                    u.sibling.return = u.return, u = u.sibling
                                }n ? (l = t, s = i.stateNode, 8 === l.nodeType ? l.parentNode.removeChild(s) : l.removeChild(s)) : t.removeChild(i.stateNode)
                        }
                        else if (4 === i.tag) {
                            if (null !== i.child) {
                                t = i.stateNode.containerInfo, n = !0, i.child.return = i, i = i.child;
                                continue
                            }
                        } else if (yl(e, i), null !== i.child) {
                            i.child.return = i, i = i.child;
                            continue
                        }
                        if (i === a) break;
                        for (; null === i.sibling;) {
                            if (null === i.return || i.return === a) return;
                            4 === (i = i.return).tag && (r = !1)
                        }
                        i.sibling.return = i.return, i = i.sibling
                    }
                }

                function Cl(e, a) {
                    switch (a.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            var t = a.updateQueue;
                            if (null !== (t = null !== t ? t.lastEffect : null)) {
                                var n = t = t.next;
                                do {
                                    3 === (3 & n.tag) && (e = n.destroy, n.destroy = void 0, void 0 !== e && e()), n = n.next
                                } while (n !== t)
                            }
                            return;
                        case 1:
                        case 12:
                        case 17:
                            return;
                        case 5:
                            if (null != (t = a.stateNode)) {
                                n = a.memoizedProps;
                                var i = null !== e ? e.memoizedProps : n;
                                e = a.type;
                                var r = a.updateQueue;
                                if (a.updateQueue = null, null !== r) {
                                    for (t[Zn] = n, "input" === e && "radio" === n.type && null != n.name && ae(t, n), Ee(e, i), a = Ee(e, n), i = 0; i < r.length; i += 2) {
                                        var l = r[i],
                                            s = r[i + 1];
                                        "style" === l ? ze(t, s) : "dangerouslySetInnerHTML" === l ? be(t, s) : "children" === l ? he(t, s) : w(t, l, s, a)
                                    }
                                    switch (e) {
                                        case "input":
                                            te(t, n);
                                            break;
                                        case "textarea":
                                            ue(t, n);
                                            break;
                                        case "select":
                                            e = t._wrapperState.wasMultiple, t._wrapperState.wasMultiple = !!n.multiple, null != (r = n.value) ? oe(t, !!n.multiple, r, !1) : e !== !!n.multiple && (null != n.defaultValue ? oe(t, !!n.multiple, n.defaultValue, !0) : oe(t, !!n.multiple, n.multiple ? [] : "", !1))
                                    }
                                }
                            }
                            return;
                        case 6:
                            if (null === a.stateNode) throw Error(o(162));
                            return void(a.stateNode.nodeValue = a.memoizedProps);
                        case 3:
                            return void((t = a.stateNode).hydrate && (t.hydrate = !1, za(t.containerInfo)));
                        case 13:
                            return null !== a.memoizedState && (Bl = qi(), hl(a.child, !0)), void Ol(a);
                        case 19:
                            return void Ol(a);
                        case 23:
                        case 24:
                            return void hl(a, null !== a.memoizedState)
                    }
                    throw Error(o(163))
                }

                function Ol(e) {
                    var a = e.updateQueue;
                    if (null !== a) {
                        e.updateQueue = null;
                        var t = e.stateNode;
                        null === t && (t = e.stateNode = new ml), a.forEach((function(a) {
                            var n = Vs.bind(null, e, a);
                            t.has(a) || (t.add(a), a.then(n, n))
                        }))
                    }
                }

                function Nl(e, a) {
                    return null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && (null !== (a = a.memoizedState) && null === a.dehydrated)
                }
                var jl = Math.ceil,
                    Pl = k.ReactCurrentDispatcher,
                    Tl = k.ReactCurrentOwner,
                    _l = 0,
                    Ll = null,
                    Ml = null,
                    Al = 0,
                    Rl = 0,
                    Dl = ui(0),
                    Il = 0,
                    Fl = null,
                    Ul = 0,
                    Hl = 0,
                    Vl = 0,
                    ql = 0,
                    Wl = null,
                    Bl = 0,
                    Yl = 1 / 0;

                function $l() {
                    Yl = qi() + 500
                }
                var Ql, Kl = null,
                    Gl = !1,
                    Xl = null,
                    Jl = null,
                    Zl = !1,
                    es = null,
                    as = 90,
                    ts = [],
                    ns = [],
                    is = null,
                    rs = 0,
                    os = null,
                    ls = -1,
                    ss = 0,
                    us = 0,
                    cs = null,
                    fs = !1;

                function ds() {
                    return 0 !== (48 & _l) ? qi() : -1 !== ls ? ls : ls = qi()
                }

                function ps(e) {
                    if (0 === (2 & (e = e.mode))) return 1;
                    if (0 === (4 & e)) return 99 === Wi() ? 1 : 2;
                    if (0 === ss && (ss = Ul), 0 !== Gi.transition) {
                        0 !== us && (us = null !== Wl ? Wl.pendingLanes : 0), e = ss;
                        var a = 4186112 & ~us;
                        return 0 === (a &= -a) && (0 === (a = (e = 4186112 & ~e) & -e) && (a = 8192)), a
                    }
                    return e = Wi(), 0 !== (4 & _l) && 98 === e ? e = Ua(12, ss) : e = Ua(e = function(e) {
                        switch (e) {
                            case 99:
                                return 15;
                            case 98:
                                return 10;
                            case 97:
                            case 96:
                                return 8;
                            case 95:
                                return 2;
                            default:
                                return 0
                        }
                    }(e), ss), e
                }

                function ms(e, a, t) {
                    if (50 < rs) throw rs = 0, os = null, Error(o(185));
                    if (null === (e = gs(e, a))) return null;
                    qa(e, a, t), e === Ll && (Vl |= a, 4 === Il && hs(e, Al));
                    var n = Wi();
                    1 === a ? 0 !== (8 & _l) && 0 === (48 & _l) ? ys(e) : (vs(e, t), 0 === _l && ($l(), Qi())) : (0 === (4 & _l) || 98 !== n && 99 !== n || (null === is ? is = new Set([e]) : is.add(e)), vs(e, t)), Wl = e
                }

                function gs(e, a) {
                    e.lanes |= a;
                    var t = e.alternate;
                    for (null !== t && (t.lanes |= a), t = e, e = e.return; null !== e;) e.childLanes |= a, null !== (t = e.alternate) && (t.childLanes |= a), t = e, e = e.return;
                    return 3 === t.tag ? t.stateNode : null
                }

                function vs(e, a) {
                    for (var t = e.callbackNode, n = e.suspendedLanes, i = e.pingedLanes, r = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
                        var s = 31 - Wa(l),
                            u = 1 << s,
                            c = r[s];
                        if (-1 === c) {
                            if (0 === (u & n) || 0 !== (u & i)) {
                                c = a, Da(u);
                                var f = Ra;
                                r[s] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1
                            }
                        } else c <= a && (e.expiredLanes |= u);
                        l &= ~u
                    }
                    if (n = Ia(e, e === Ll ? Al : 0), a = Ra, 0 === n) null !== t && (t !== Di && Oi(t), e.callbackNode = null, e.callbackPriority = 0);
                    else {
                        if (null !== t) {
                            if (e.callbackPriority === a) return;
                            t !== Di && Oi(t)
                        }
                        15 === a ? (t = ys.bind(null, e), null === Fi ? (Fi = [t], Ui = Ci(_i, Ki)) : Fi.push(t), t = Di) : 14 === a ? t = $i(99, ys.bind(null, e)) : (t = function(e) {
                            switch (e) {
                                case 15:
                                case 14:
                                    return 99;
                                case 13:
                                case 12:
                                case 11:
                                case 10:
                                    return 98;
                                case 9:
                                case 8:
                                case 7:
                                case 6:
                                case 4:
                                case 5:
                                    return 97;
                                case 3:
                                case 2:
                                case 1:
                                    return 95;
                                case 0:
                                    return 90;
                                default:
                                    throw Error(o(358, e))
                            }
                        }(a), t = $i(t, bs.bind(null, e))), e.callbackPriority = a, e.callbackNode = t
                    }
                }

                function bs(e) {
                    if (ls = -1, us = ss = 0, 0 !== (48 & _l)) throw Error(o(327));
                    var a = e.callbackNode;
                    if (As() && e.callbackNode !== a) return null;
                    var t = Ia(e, e === Ll ? Al : 0);
                    if (0 === t) return null;
                    var n = t,
                        i = _l;
                    _l |= 16;
                    var r = Cs();
                    for (Ll === e && Al === n || ($l(), Ss(e, n));;) try {
                        js();
                        break
                    } catch (s) {
                        Es(e, s)
                    }
                    if (tr(), Pl.current = r, _l = i, null !== Ml ? n = 0 : (Ll = null, Al = 0, n = Il), 0 !== (Ul & Vl)) Ss(e, 0);
                    else if (0 !== n) {
                        if (2 === n && (_l |= 64, e.hydrate && (e.hydrate = !1, $n(e.containerInfo)), 0 !== (t = Fa(e)) && (n = Os(e, t))), 1 === n) throw a = Fl, Ss(e, 0), hs(e, t), vs(e, qi()), a;
                        switch (e.finishedWork = e.current.alternate, e.finishedLanes = t, n) {
                            case 0:
                            case 1:
                                throw Error(o(345));
                            case 2:
                            case 5:
                                _s(e);
                                break;
                            case 3:
                                if (hs(e, t), (62914560 & t) === t && 10 < (n = Bl + 500 - qi())) {
                                    if (0 !== Ia(e, 0)) break;
                                    if (((i = e.suspendedLanes) & t) !== t) {
                                        ds(), e.pingedLanes |= e.suspendedLanes & i;
                                        break
                                    }
                                    e.timeoutHandle = Bn(_s.bind(null, e), n);
                                    break
                                }
                                _s(e);
                                break;
                            case 4:
                                if (hs(e, t), (4186112 & t) === t) break;
                                for (n = e.eventTimes, i = -1; 0 < t;) {
                                    var l = 31 - Wa(t);
                                    r = 1 << l, (l = n[l]) > i && (i = l), t &= ~r
                                }
                                if (t = i, 10 < (t = (120 > (t = qi() - t) ? 120 : 480 > t ? 480 : 1080 > t ? 1080 : 1920 > t ? 1920 : 3e3 > t ? 3e3 : 4320 > t ? 4320 : 1960 * jl(t / 1960)) - t)) {
                                    e.timeoutHandle = Bn(_s.bind(null, e), t);
                                    break
                                }
                                _s(e);
                                break;
                            default:
                                throw Error(o(329))
                        }
                    }
                    return vs(e, qi()), e.callbackNode === a ? bs.bind(null, e) : null
                }

                function hs(e, a) {
                    for (a &= ~ql, a &= ~Vl, e.suspendedLanes |= a, e.pingedLanes &= ~a, e = e.expirationTimes; 0 < a;) {
                        var t = 31 - Wa(a),
                            n = 1 << t;
                        e[t] = -1, a &= ~n
                    }
                }

                function ys(e) {
                    if (0 !== (48 & _l)) throw Error(o(327));
                    if (As(), e === Ll && 0 !== (e.expiredLanes & Al)) {
                        var a = Al,
                            t = Os(e, a);
                        0 !== (Ul & Vl) && (t = Os(e, a = Ia(e, a)))
                    } else t = Os(e, a = Ia(e, 0));
                    if (0 !== e.tag && 2 === t && (_l |= 64, e.hydrate && (e.hydrate = !1, $n(e.containerInfo)), 0 !== (a = Fa(e)) && (t = Os(e, a))), 1 === t) throw t = Fl, Ss(e, 0), hs(e, a), vs(e, qi()), t;
                    return e.finishedWork = e.current.alternate, e.finishedLanes = a, _s(e), vs(e, qi()), null
                }

                function ws(e, a) {
                    var t = _l;
                    _l |= 1;
                    try {
                        return e(a)
                    } finally {
                        0 === (_l = t) && ($l(), Qi())
                    }
                }

                function ks(e, a) {
                    var t = _l;
                    _l &= -2, _l |= 8;
                    try {
                        return e(a)
                    } finally {
                        0 === (_l = t) && ($l(), Qi())
                    }
                }

                function zs(e, a) {
                    fi(Dl, Rl), Rl |= a, Ul |= a
                }

                function xs() {
                    Rl = Dl.current, ci(Dl)
                }

                function Ss(e, a) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var t = e.timeoutHandle;
                    if (-1 !== t && (e.timeoutHandle = -1, Yn(t)), null !== Ml)
                        for (t = Ml.return; null !== t;) {
                            var n = t;
                            switch (n.tag) {
                                case 1:
                                    null !== (n = n.type.childContextTypes) && void 0 !== n && hi();
                                    break;
                                case 3:
                                    Mr(), ci(mi), ci(pi), Kr();
                                    break;
                                case 5:
                                    Rr(n);
                                    break;
                                case 4:
                                    Mr();
                                    break;
                                case 13:
                                case 19:
                                    ci(Dr);
                                    break;
                                case 10:
                                    nr(n);
                                    break;
                                case 23:
                                case 24:
                                    xs()
                            }
                            t = t.return
                        }
                    Ll = e, Ml = Ys(e.current, null), Al = Rl = Ul = a, Il = 0, Fl = null, ql = Vl = Hl = 0
                }

                function Es(e, a) {
                    for (;;) {
                        var t = Ml;
                        try {
                            if (tr(), Gr.current = _o, to) {
                                for (var n = Zr.memoizedState; null !== n;) {
                                    var i = n.queue;
                                    null !== i && (i.pending = null), n = n.next
                                }
                                to = !1
                            }
                            if (Jr = 0, ao = eo = Zr = null, no = !1, Tl.current = null, null === t || null === t.return) {
                                Il = 1, Fl = a, Ml = null;
                                break
                            }
                            e: {
                                var r = e,
                                    o = t.return,
                                    l = t,
                                    s = a;
                                if (a = Al, l.flags |= 2048, l.firstEffect = l.lastEffect = null, null !== s && "object" === typeof s && "function" === typeof s.then) {
                                    var u = s;
                                    if (0 === (2 & l.mode)) {
                                        var c = l.alternate;
                                        c ? (l.updateQueue = c.updateQueue, l.memoizedState = c.memoizedState, l.lanes = c.lanes) : (l.updateQueue = null, l.memoizedState = null)
                                    }
                                    var f = 0 !== (1 & Dr.current),
                                        d = o;
                                    do {
                                        var p;
                                        if (p = 13 === d.tag) {
                                            var m = d.memoizedState;
                                            if (null !== m) p = null !== m.dehydrated;
                                            else {
                                                var g = d.memoizedProps;
                                                p = void 0 !== g.fallback && (!0 !== g.unstable_avoidThisFallback || !f)
                                            }
                                        }
                                        if (p) {
                                            var v = d.updateQueue;
                                            if (null === v) {
                                                var b = new Set;
                                                b.add(u), d.updateQueue = b
                                            } else v.add(u);
                                            if (0 === (2 & d.mode)) {
                                                if (d.flags |= 64, l.flags |= 16384, l.flags &= -2981, 1 === l.tag)
                                                    if (null === l.alternate) l.tag = 17;
                                                    else {
                                                        var h = cr(-1, 1);
                                                        h.tag = 2, fr(l, h)
                                                    } l.lanes |= 1;
                                                break e
                                            }
                                            s = void 0, l = a;
                                            var y = r.pingCache;
                                            if (null === y ? (y = r.pingCache = new fl, s = new Set, y.set(u, s)) : void 0 === (s = y.get(u)) && (s = new Set, y.set(u, s)), !s.has(l)) {
                                                s.add(l);
                                                var w = Hs.bind(null, r, u, l);
                                                u.then(w, w)
                                            }
                                            d.flags |= 4096, d.lanes = a;
                                            break e
                                        }
                                        d = d.return
                                    } while (null !== d);
                                    s = Error(($(l.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")
                                }
                                5 !== Il && (Il = 2),
                                s = ul(s, l),
                                d = o;do {
                                    switch (d.tag) {
                                        case 3:
                                            r = s, d.flags |= 4096, a &= -a, d.lanes |= a, dr(d, dl(0, r, a));
                                            break e;
                                        case 1:
                                            r = s;
                                            var k = d.type,
                                                z = d.stateNode;
                                            if (0 === (64 & d.flags) && ("function" === typeof k.getDerivedStateFromError || null !== z && "function" === typeof z.componentDidCatch && (null === Jl || !Jl.has(z)))) {
                                                d.flags |= 4096, a &= -a, d.lanes |= a, dr(d, pl(d, r, a));
                                                break e
                                            }
                                    }
                                    d = d.return
                                } while (null !== d)
                            }
                            Ts(t)
                        } catch (x) {
                            a = x, Ml === t && null !== t && (Ml = t = t.return);
                            continue
                        }
                        break
                    }
                }

                function Cs() {
                    var e = Pl.current;
                    return Pl.current = _o, null === e ? _o : e
                }

                function Os(e, a) {
                    var t = _l;
                    _l |= 16;
                    var n = Cs();
                    for (Ll === e && Al === a || Ss(e, a);;) try {
                        Ns();
                        break
                    } catch (i) {
                        Es(e, i)
                    }
                    if (tr(), _l = t, Pl.current = n, null !== Ml) throw Error(o(261));
                    return Ll = null, Al = 0, Il
                }

                function Ns() {
                    for (; null !== Ml;) Ps(Ml)
                }

                function js() {
                    for (; null !== Ml && !Ni();) Ps(Ml)
                }

                function Ps(e) {
                    var a = Ql(e.alternate, e, Rl);
                    e.memoizedProps = e.pendingProps, null === a ? Ts(e) : Ml = a, Tl.current = null
                }

                function Ts(e) {
                    var a = e;
                    do {
                        var t = a.alternate;
                        if (e = a.return, 0 === (2048 & a.flags)) {
                            if (null !== (t = ll(t, a, Rl))) return void(Ml = t);
                            if (24 !== (t = a).tag && 23 !== t.tag || null === t.memoizedState || 0 !== (1073741824 & Rl) || 0 === (4 & t.mode)) {
                                for (var n = 0, i = t.child; null !== i;) n |= i.lanes | i.childLanes, i = i.sibling;
                                t.childLanes = n
                            }
                            null !== e && 0 === (2048 & e.flags) && (null === e.firstEffect && (e.firstEffect = a.firstEffect), null !== a.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = a.firstEffect), e.lastEffect = a.lastEffect), 1 < a.flags && (null !== e.lastEffect ? e.lastEffect.nextEffect = a : e.firstEffect = a, e.lastEffect = a))
                        } else {
                            if (null !== (t = sl(a))) return t.flags &= 2047, void(Ml = t);
                            null !== e && (e.firstEffect = e.lastEffect = null, e.flags |= 2048)
                        }
                        if (null !== (a = a.sibling)) return void(Ml = a);
                        Ml = a = e
                    } while (null !== a);
                    0 === Il && (Il = 5)
                }

                function _s(e) {
                    var a = Wi();
                    return Yi(99, Ls.bind(null, e, a)), null
                }

                function Ls(e, a) {
                    do {
                        As()
                    } while (null !== es);
                    if (0 !== (48 & _l)) throw Error(o(327));
                    var t = e.finishedWork;
                    if (null === t) return null;
                    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(o(177));
                    e.callbackNode = null;
                    var n = t.lanes | t.childLanes,
                        i = n,
                        r = e.pendingLanes & ~i;
                    e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= i, e.mutableReadLanes &= i, e.entangledLanes &= i, i = e.entanglements;
                    for (var l = e.eventTimes, s = e.expirationTimes; 0 < r;) {
                        var u = 31 - Wa(r),
                            c = 1 << u;
                        i[u] = 0, l[u] = -1, s[u] = -1, r &= ~c
                    }
                    if (null !== is && 0 === (24 & n) && is.has(e) && is.delete(e), e === Ll && (Ml = Ll = null, Al = 0), 1 < t.flags ? null !== t.lastEffect ? (t.lastEffect.nextEffect = t, n = t.firstEffect) : n = t : n = t.firstEffect, null !== n) {
                        if (i = _l, _l |= 32, Tl.current = null, Hn = Ka, bn(l = vn())) {
                            if ("selectionStart" in l) s = {
                                start: l.selectionStart,
                                end: l.selectionEnd
                            };
                            else e: if (s = (s = l.ownerDocument) && s.defaultView || window, (c = s.getSelection && s.getSelection()) && 0 !== c.rangeCount) {
                                s = c.anchorNode, r = c.anchorOffset, u = c.focusNode, c = c.focusOffset;
                                try {
                                    s.nodeType, u.nodeType
                                } catch (C) {
                                    s = null;
                                    break e
                                }
                                var f = 0,
                                    d = -1,
                                    p = -1,
                                    m = 0,
                                    g = 0,
                                    v = l,
                                    b = null;
                                a: for (;;) {
                                    for (var h; v !== s || 0 !== r && 3 !== v.nodeType || (d = f + r), v !== u || 0 !== c && 3 !== v.nodeType || (p = f + c), 3 === v.nodeType && (f += v.nodeValue.length), null !== (h = v.firstChild);) b = v, v = h;
                                    for (;;) {
                                        if (v === l) break a;
                                        if (b === s && ++m === r && (d = f), b === u && ++g === c && (p = f), null !== (h = v.nextSibling)) break;
                                        b = (v = b).parentNode
                                    }
                                    v = h
                                }
                                s = -1 === d || -1 === p ? null : {
                                    start: d,
                                    end: p
                                }
                            } else s = null;
                            s = s || {
                                start: 0,
                                end: 0
                            }
                        } else s = null;
                        Vn = {
                            focusedElem: l,
                            selectionRange: s
                        }, Ka = !1, cs = null, fs = !1, Kl = n;
                        do {
                            try {
                                Ms()
                            } catch (C) {
                                if (null === Kl) throw Error(o(330));
                                Us(Kl, C), Kl = Kl.nextEffect
                            }
                        } while (null !== Kl);
                        cs = null, Kl = n;
                        do {
                            try {
                                for (l = e; null !== Kl;) {
                                    var y = Kl.flags;
                                    if (16 & y && he(Kl.stateNode, ""), 128 & y) {
                                        var w = Kl.alternate;
                                        if (null !== w) {
                                            var k = w.ref;
                                            null !== k && ("function" === typeof k ? k(null) : k.current = null)
                                        }
                                    }
                                    switch (1038 & y) {
                                        case 2:
                                            zl(Kl), Kl.flags &= -3;
                                            break;
                                        case 6:
                                            zl(Kl), Kl.flags &= -3, Cl(Kl.alternate, Kl);
                                            break;
                                        case 1024:
                                            Kl.flags &= -1025;
                                            break;
                                        case 1028:
                                            Kl.flags &= -1025, Cl(Kl.alternate, Kl);
                                            break;
                                        case 4:
                                            Cl(Kl.alternate, Kl);
                                            break;
                                        case 8:
                                            El(l, s = Kl);
                                            var z = s.alternate;
                                            wl(s), null !== z && wl(z)
                                    }
                                    Kl = Kl.nextEffect
                                }
                            } catch (C) {
                                if (null === Kl) throw Error(o(330));
                                Us(Kl, C), Kl = Kl.nextEffect
                            }
                        } while (null !== Kl);
                        if (k = Vn, w = vn(), y = k.focusedElem, l = k.selectionRange, w !== y && y && y.ownerDocument && gn(y.ownerDocument.documentElement, y)) {
                            null !== l && bn(y) && (w = l.start, void 0 === (k = l.end) && (k = w), "selectionStart" in y ? (y.selectionStart = w, y.selectionEnd = Math.min(k, y.value.length)) : (k = (w = y.ownerDocument || document) && w.defaultView || window).getSelection && (k = k.getSelection(), s = y.textContent.length, z = Math.min(l.start, s), l = void 0 === l.end ? z : Math.min(l.end, s), !k.extend && z > l && (s = l, l = z, z = s), s = mn(y, z), r = mn(y, l), s && r && (1 !== k.rangeCount || k.anchorNode !== s.node || k.anchorOffset !== s.offset || k.focusNode !== r.node || k.focusOffset !== r.offset) && ((w = w.createRange()).setStart(s.node, s.offset), k.removeAllRanges(), z > l ? (k.addRange(w), k.extend(r.node, r.offset)) : (w.setEnd(r.node, r.offset), k.addRange(w))))), w = [];
                            for (k = y; k = k.parentNode;) 1 === k.nodeType && w.push({
                                element: k,
                                left: k.scrollLeft,
                                top: k.scrollTop
                            });
                            for ("function" === typeof y.focus && y.focus(), y = 0; y < w.length; y++)(k = w[y]).element.scrollLeft = k.left, k.element.scrollTop = k.top
                        }
                        Ka = !!Hn, Vn = Hn = null, e.current = t, Kl = n;
                        do {
                            try {
                                for (y = e; null !== Kl;) {
                                    var x = Kl.flags;
                                    if (36 & x && bl(y, Kl.alternate, Kl), 128 & x) {
                                        w = void 0;
                                        var S = Kl.ref;
                                        if (null !== S) {
                                            var E = Kl.stateNode;
                                            Kl.tag, w = E, "function" === typeof S ? S(w) : S.current = w
                                        }
                                    }
                                    Kl = Kl.nextEffect
                                }
                            } catch (C) {
                                if (null === Kl) throw Error(o(330));
                                Us(Kl, C), Kl = Kl.nextEffect
                            }
                        } while (null !== Kl);
                        Kl = null, Ii(), _l = i
                    } else e.current = t;
                    if (Zl) Zl = !1, es = e, as = a;
                    else
                        for (Kl = n; null !== Kl;) a = Kl.nextEffect, Kl.nextEffect = null, 8 & Kl.flags && ((x = Kl).sibling = null, x.stateNode = null), Kl = a;
                    if (0 === (n = e.pendingLanes) && (Jl = null), 1 === n ? e === os ? rs++ : (rs = 0, os = e) : rs = 0, t = t.stateNode, Si && "function" === typeof Si.onCommitFiberRoot) try {
                        Si.onCommitFiberRoot(xi, t, void 0, 64 === (64 & t.current.flags))
                    } catch (C) {}
                    if (vs(e, qi()), Gl) throw Gl = !1, e = Xl, Xl = null, e;
                    return 0 !== (8 & _l) || Qi(), null
                }

                function Ms() {
                    for (; null !== Kl;) {
                        var e = Kl.alternate;
                        fs || null === cs || (0 !== (8 & Kl.flags) ? ea(Kl, cs) && (fs = !0) : 13 === Kl.tag && Nl(e, Kl) && ea(Kl, cs) && (fs = !0));
                        var a = Kl.flags;
                        0 !== (256 & a) && vl(e, Kl), 0 === (512 & a) || Zl || (Zl = !0, $i(97, (function() {
                            return As(), null
                        }))), Kl = Kl.nextEffect
                    }
                }

                function As() {
                    if (90 !== as) {
                        var e = 97 < as ? 97 : as;
                        return as = 90, Yi(e, Is)
                    }
                    return !1
                }

                function Rs(e, a) {
                    ts.push(a, e), Zl || (Zl = !0, $i(97, (function() {
                        return As(), null
                    })))
                }

                function Ds(e, a) {
                    ns.push(a, e), Zl || (Zl = !0, $i(97, (function() {
                        return As(), null
                    })))
                }

                function Is() {
                    if (null === es) return !1;
                    var e = es;
                    if (es = null, 0 !== (48 & _l)) throw Error(o(331));
                    var a = _l;
                    _l |= 32;
                    var t = ns;
                    ns = [];
                    for (var n = 0; n < t.length; n += 2) {
                        var i = t[n],
                            r = t[n + 1],
                            l = i.destroy;
                        if (i.destroy = void 0, "function" === typeof l) try {
                            l()
                        } catch (u) {
                            if (null === r) throw Error(o(330));
                            Us(r, u)
                        }
                    }
                    for (t = ts, ts = [], n = 0; n < t.length; n += 2) {
                        i = t[n], r = t[n + 1];
                        try {
                            var s = i.create;
                            i.destroy = s()
                        } catch (u) {
                            if (null === r) throw Error(o(330));
                            Us(r, u)
                        }
                    }
                    for (s = e.current.firstEffect; null !== s;) e = s.nextEffect, s.nextEffect = null, 8 & s.flags && (s.sibling = null, s.stateNode = null), s = e;
                    return _l = a, Qi(), !0
                }

                function Fs(e, a, t) {
                    fr(e, a = dl(0, a = ul(t, a), 1)), a = ds(), null !== (e = gs(e, 1)) && (qa(e, 1, a), vs(e, a))
                }

                function Us(e, a) {
                    if (3 === e.tag) Fs(e, e, a);
                    else
                        for (var t = e.return; null !== t;) {
                            if (3 === t.tag) {
                                Fs(t, e, a);
                                break
                            }
                            if (1 === t.tag) {
                                var n = t.stateNode;
                                if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof n.componentDidCatch && (null === Jl || !Jl.has(n))) {
                                    var i = pl(t, e = ul(a, e), 1);
                                    if (fr(t, i), i = ds(), null !== (t = gs(t, 1))) qa(t, 1, i), vs(t, i);
                                    else if ("function" === typeof n.componentDidCatch && (null === Jl || !Jl.has(n))) try {
                                        n.componentDidCatch(a, e)
                                    } catch (r) {}
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function Hs(e, a, t) {
                    var n = e.pingCache;
                    null !== n && n.delete(a), a = ds(), e.pingedLanes |= e.suspendedLanes & t, Ll === e && (Al & t) === t && (4 === Il || 3 === Il && (62914560 & Al) === Al && 500 > qi() - Bl ? Ss(e, 0) : ql |= t), vs(e, a)
                }

                function Vs(e, a) {
                    var t = e.stateNode;
                    null !== t && t.delete(a), 0 === (a = 0) && (0 === (2 & (a = e.mode)) ? a = 1 : 0 === (4 & a) ? a = 99 === Wi() ? 1 : 2 : (0 === ss && (ss = Ul), 0 === (a = Ha(62914560 & ~ss)) && (a = 4194304))), t = ds(), null !== (e = gs(e, a)) && (qa(e, a, t), vs(e, t))
                }

                function qs(e, a, t, n) {
                    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Ws(e, a, t, n) {
                    return new qs(e, a, t, n)
                }

                function Bs(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function Ys(e, a) {
                    var t = e.alternate;
                    return null === t ? ((t = Ws(e.tag, a, e.key, e.mode)).elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = a, t.type = e.type, t.flags = 0, t.nextEffect = null, t.firstEffect = null, t.lastEffect = null), t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, a = e.dependencies, t.dependencies = null === a ? null : {
                        lanes: a.lanes,
                        firstContext: a.firstContext
                    }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t
                }

                function $s(e, a, t, n, i, r) {
                    var l = 2;
                    if (n = e, "function" === typeof e) Bs(e) && (l = 1);
                    else if ("string" === typeof e) l = 5;
                    else e: switch (e) {
                        case S:
                            return Qs(t.children, i, r, a);
                        case R:
                            l = 8, i |= 16;
                            break;
                        case E:
                            l = 8, i |= 1;
                            break;
                        case C:
                            return (e = Ws(12, t, a, 8 | i)).elementType = C, e.type = C, e.lanes = r, e;
                        case P:
                            return (e = Ws(13, t, a, i)).type = P, e.elementType = P, e.lanes = r, e;
                        case T:
                            return (e = Ws(19, t, a, i)).elementType = T, e.lanes = r, e;
                        case D:
                            return Ks(t, i, r, a);
                        case I:
                            return (e = Ws(24, t, a, i)).elementType = I, e.lanes = r, e;
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case O:
                                    l = 10;
                                    break e;
                                case N:
                                    l = 9;
                                    break e;
                                case j:
                                    l = 11;
                                    break e;
                                case _:
                                    l = 14;
                                    break e;
                                case L:
                                    l = 16, n = null;
                                    break e;
                                case M:
                                    l = 22;
                                    break e
                            }
                            throw Error(o(130, null == e ? e : typeof e, ""))
                    }
                    return (a = Ws(l, t, a, i)).elementType = e, a.type = n, a.lanes = r, a
                }

                function Qs(e, a, t, n) {
                    return (e = Ws(7, e, n, a)).lanes = t, e
                }

                function Ks(e, a, t, n) {
                    return (e = Ws(23, e, n, a)).elementType = D, e.lanes = t, e
                }

                function Gs(e, a, t) {
                    return (e = Ws(6, e, null, a)).lanes = t, e
                }

                function Xs(e, a, t) {
                    return (a = Ws(4, null !== e.children ? e.children : [], e.key, a)).lanes = t, a.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, a
                }

                function Js(e, a, t) {
                    this.tag = a, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = t, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Va(0), this.expirationTimes = Va(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Va(0), this.mutableSourceEagerHydrationData = null
                }

                function Zs(e, a, t) {
                    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: x,
                        key: null == n ? null : "" + n,
                        children: e,
                        containerInfo: a,
                        implementation: t
                    }
                }

                function eu(e, a, t, n) {
                    var i = a.current,
                        r = ds(),
                        l = ps(i);
                    e: if (t) {
                        a: {
                            if (Ge(t = t._reactInternals) !== t || 1 !== t.tag) throw Error(o(170));
                            var s = t;do {
                                switch (s.tag) {
                                    case 3:
                                        s = s.stateNode.context;
                                        break a;
                                    case 1:
                                        if (bi(s.type)) {
                                            s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                                            break a
                                        }
                                }
                                s = s.return
                            } while (null !== s);
                            throw Error(o(171))
                        }
                        if (1 === t.tag) {
                            var u = t.type;
                            if (bi(u)) {
                                t = wi(t, u, s);
                                break e
                            }
                        }
                        t = s
                    }
                    else t = di;
                    return null === a.context ? a.context = t : a.pendingContext = t, (a = cr(r, l)).payload = {
                        element: e
                    }, null !== (n = void 0 === n ? null : n) && (a.callback = n), fr(i, a), ms(i, l, r), l
                }

                function au(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
                }

                function tu(e, a) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var t = e.retryLane;
                        e.retryLane = 0 !== t && t < a ? t : a
                    }
                }

                function nu(e, a) {
                    tu(e, a), (e = e.alternate) && tu(e, a)
                }

                function iu(e, a, t) {
                    var n = null != t && null != t.hydrationOptions && t.hydrationOptions.mutableSources || null;
                    if (t = new Js(e, a, null != t && !0 === t.hydrate), a = Ws(3, null, null, 2 === a ? 7 : 1 === a ? 3 : 0), t.current = a, a.stateNode = t, sr(a), e[ei] = t.current, _n(8 === e.nodeType ? e.parentNode : e), n)
                        for (e = 0; e < n.length; e++) {
                            var i = (a = n[e])._getVersion;
                            i = i(a._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [a, i] : t.mutableSourceEagerHydrationData.push(a, i)
                        }
                    this._internalRoot = t
                }

                function ru(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function ou(e, a, t, n, i) {
                    var r = t._reactRootContainer;
                    if (r) {
                        var o = r._internalRoot;
                        if ("function" === typeof i) {
                            var l = i;
                            i = function() {
                                var e = au(o);
                                l.call(e)
                            }
                        }
                        eu(a, o, e, i)
                    } else {
                        if (r = t._reactRootContainer = function(e, a) {
                                if (a || (a = !(!(a = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== a.nodeType || !a.hasAttribute("data-reactroot"))), !a)
                                    for (var t; t = e.lastChild;) e.removeChild(t);
                                return new iu(e, 0, a ? {
                                    hydrate: !0
                                } : void 0)
                            }(t, n), o = r._internalRoot, "function" === typeof i) {
                            var s = i;
                            i = function() {
                                var e = au(o);
                                s.call(e)
                            }
                        }
                        ks((function() {
                            eu(a, o, e, i)
                        }))
                    }
                    return au(o)
                }

                function lu(e, a) {
                    var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!ru(a)) throw Error(o(200));
                    return Zs(e, a, null, t)
                }
                Ql = function(e, a, t) {
                    var n = a.lanes;
                    if (null !== e)
                        if (e.memoizedProps !== a.pendingProps || mi.current) Do = !0;
                        else {
                            if (0 === (t & n)) {
                                switch (Do = !1, a.tag) {
                                    case 3:
                                        $o(a), $r();
                                        break;
                                    case 5:
                                        Ar(a);
                                        break;
                                    case 1:
                                        bi(a.type) && ki(a);
                                        break;
                                    case 4:
                                        Lr(a, a.stateNode.containerInfo);
                                        break;
                                    case 10:
                                        n = a.memoizedProps.value;
                                        var i = a.type._context;
                                        fi(Ji, i._currentValue), i._currentValue = n;
                                        break;
                                    case 13:
                                        if (null !== a.memoizedState) return 0 !== (t & a.child.childLanes) ? Jo(e, a, t) : (fi(Dr, 1 & Dr.current), null !== (a = rl(e, a, t)) ? a.sibling : null);
                                        fi(Dr, 1 & Dr.current);
                                        break;
                                    case 19:
                                        if (n = 0 !== (t & a.childLanes), 0 !== (64 & e.flags)) {
                                            if (n) return il(e, a, t);
                                            a.flags |= 64
                                        }
                                        if (null !== (i = a.memoizedState) && (i.rendering = null, i.tail = null, i.lastEffect = null), fi(Dr, Dr.current), n) break;
                                        return null;
                                    case 23:
                                    case 24:
                                        return a.lanes = 0, Vo(e, a, t)
                                }
                                return rl(e, a, t)
                            }
                            Do = 0 !== (16384 & e.flags)
                        }
                    else Do = !1;
                    switch (a.lanes = 0, a.tag) {
                        case 2:
                            if (n = a.type, null !== e && (e.alternate = null, a.alternate = null, a.flags |= 2), e = a.pendingProps, i = vi(a, pi.current), rr(a, t), i = oo(null, a, n, e, i, t), a.flags |= 1, "object" === typeof i && null !== i && "function" === typeof i.render && void 0 === i.$$typeof) {
                                if (a.tag = 1, a.memoizedState = null, a.updateQueue = null, bi(n)) {
                                    var r = !0;
                                    ki(a)
                                } else r = !1;
                                a.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, sr(a);
                                var l = n.getDerivedStateFromProps;
                                "function" === typeof l && vr(a, n, l, e), i.updater = br, a.stateNode = i, i._reactInternals = a, kr(a, n, e, t), a = Yo(null, a, n, !0, r, t)
                            } else a.tag = 0, Io(null, a, i, t), a = a.child;
                            return a;
                        case 16:
                            i = a.elementType;
                            e: {
                                switch (null !== e && (e.alternate = null, a.alternate = null, a.flags |= 2), e = a.pendingProps, i = (r = i._init)(i._payload), a.type = i, r = a.tag = function(e) {
                                        if ("function" === typeof e) return Bs(e) ? 1 : 0;
                                        if (void 0 !== e && null !== e) {
                                            if ((e = e.$$typeof) === j) return 11;
                                            if (e === _) return 14
                                        }
                                        return 2
                                    }(i), e = Xi(i, e), r) {
                                    case 0:
                                        a = Wo(null, a, i, e, t);
                                        break e;
                                    case 1:
                                        a = Bo(null, a, i, e, t);
                                        break e;
                                    case 11:
                                        a = Fo(null, a, i, e, t);
                                        break e;
                                    case 14:
                                        a = Uo(null, a, i, Xi(i.type, e), n, t);
                                        break e
                                }
                                throw Error(o(306, i, ""))
                            }
                            return a;
                        case 0:
                            return n = a.type, i = a.pendingProps, Wo(e, a, n, i = a.elementType === n ? i : Xi(n, i), t);
                        case 1:
                            return n = a.type, i = a.pendingProps, Bo(e, a, n, i = a.elementType === n ? i : Xi(n, i), t);
                        case 3:
                            if ($o(a), n = a.updateQueue, null === e || null === n) throw Error(o(282));
                            if (n = a.pendingProps, i = null !== (i = a.memoizedState) ? i.element : null, ur(e, a), pr(a, n, null, t), (n = a.memoizedState.element) === i) $r(), a = rl(e, a, t);
                            else {
                                if ((r = (i = a.stateNode).hydrate) && (Ur = Qn(a.stateNode.containerInfo.firstChild), Fr = a, r = Hr = !0), r) {
                                    if (null != (e = i.mutableSourceEagerHydrationData))
                                        for (i = 0; i < e.length; i += 2)(r = e[i])._workInProgressVersionPrimary = e[i + 1], Qr.push(r);
                                    for (t = Or(a, null, n, t), a.child = t; t;) t.flags = -3 & t.flags | 1024, t = t.sibling
                                } else Io(e, a, n, t), $r();
                                a = a.child
                            }
                            return a;
                        case 5:
                            return Ar(a), null === e && Wr(a), n = a.type, i = a.pendingProps, r = null !== e ? e.memoizedProps : null, l = i.children, Wn(n, i) ? l = null : null !== r && Wn(n, r) && (a.flags |= 16), qo(e, a), Io(e, a, l, t), a.child;
                        case 6:
                            return null === e && Wr(a), null;
                        case 13:
                            return Jo(e, a, t);
                        case 4:
                            return Lr(a, a.stateNode.containerInfo), n = a.pendingProps, null === e ? a.child = Cr(a, null, n, t) : Io(e, a, n, t), a.child;
                        case 11:
                            return n = a.type, i = a.pendingProps, Fo(e, a, n, i = a.elementType === n ? i : Xi(n, i), t);
                        case 7:
                            return Io(e, a, a.pendingProps, t), a.child;
                        case 8:
                        case 12:
                            return Io(e, a, a.pendingProps.children, t), a.child;
                        case 10:
                            e: {
                                n = a.type._context,
                                i = a.pendingProps,
                                l = a.memoizedProps,
                                r = i.value;
                                var s = a.type._context;
                                if (fi(Ji, s._currentValue), s._currentValue = r, null !== l)
                                    if (s = l.value, 0 === (r = cn(s, r) ? 0 : 0 | ("function" === typeof n._calculateChangedBits ? n._calculateChangedBits(s, r) : 1073741823))) {
                                        if (l.children === i.children && !mi.current) {
                                            a = rl(e, a, t);
                                            break e
                                        }
                                    } else
                                        for (null !== (s = a.child) && (s.return = a); null !== s;) {
                                            var u = s.dependencies;
                                            if (null !== u) {
                                                l = s.child;
                                                for (var c = u.firstContext; null !== c;) {
                                                    if (c.context === n && 0 !== (c.observedBits & r)) {
                                                        1 === s.tag && ((c = cr(-1, t & -t)).tag = 2, fr(s, c)), s.lanes |= t, null !== (c = s.alternate) && (c.lanes |= t), ir(s.return, t), u.lanes |= t;
                                                        break
                                                    }
                                                    c = c.next
                                                }
                                            } else l = 10 === s.tag && s.type === a.type ? null : s.child;
                                            if (null !== l) l.return = s;
                                            else
                                                for (l = s; null !== l;) {
                                                    if (l === a) {
                                                        l = null;
                                                        break
                                                    }
                                                    if (null !== (s = l.sibling)) {
                                                        s.return = l.return, l = s;
                                                        break
                                                    }
                                                    l = l.return
                                                }
                                            s = l
                                        }
                                Io(e, a, i.children, t),
                                a = a.child
                            }
                            return a;
                        case 9:
                            return i = a.type, n = (r = a.pendingProps).children, rr(a, t), n = n(i = or(i, r.unstable_observedBits)), a.flags |= 1, Io(e, a, n, t), a.child;
                        case 14:
                            return r = Xi(i = a.type, a.pendingProps), Uo(e, a, i, r = Xi(i.type, r), n, t);
                        case 15:
                            return Ho(e, a, a.type, a.pendingProps, n, t);
                        case 17:
                            return n = a.type, i = a.pendingProps, i = a.elementType === n ? i : Xi(n, i), null !== e && (e.alternate = null, a.alternate = null, a.flags |= 2), a.tag = 1, bi(n) ? (e = !0, ki(a)) : e = !1, rr(a, t), yr(a, n, i), kr(a, n, i, t), Yo(null, a, n, !0, e, t);
                        case 19:
                            return il(e, a, t);
                        case 23:
                        case 24:
                            return Vo(e, a, t)
                    }
                    throw Error(o(156, a.tag))
                }, iu.prototype.render = function(e) {
                    eu(e, this._internalRoot, null, null)
                }, iu.prototype.unmount = function() {
                    var e = this._internalRoot,
                        a = e.containerInfo;
                    eu(null, e, null, (function() {
                        a[ei] = null
                    }))
                }, aa = function(e) {
                    13 === e.tag && (ms(e, 4, ds()), nu(e, 4))
                }, ta = function(e) {
                    13 === e.tag && (ms(e, 67108864, ds()), nu(e, 67108864))
                }, na = function(e) {
                    if (13 === e.tag) {
                        var a = ds(),
                            t = ps(e);
                        ms(e, t, a), nu(e, t)
                    }
                }, ia = function(e, a) {
                    return a()
                }, Oe = function(e, a, t) {
                    switch (a) {
                        case "input":
                            if (te(e, t), a = t.name, "radio" === t.type && null != a) {
                                for (t = e; t.parentNode;) t = t.parentNode;
                                for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), a = 0; a < t.length; a++) {
                                    var n = t[a];
                                    if (n !== e && n.form === e.form) {
                                        var i = ri(n);
                                        if (!i) throw Error(o(90));
                                        X(n), te(n, i)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            ue(e, t);
                            break;
                        case "select":
                            null != (a = t.value) && oe(e, !!t.multiple, a, !1)
                    }
                }, Le = ws, Me = function(e, a, t, n, i) {
                    var r = _l;
                    _l |= 4;
                    try {
                        return Yi(98, e.bind(null, a, t, n, i))
                    } finally {
                        0 === (_l = r) && ($l(), Qi())
                    }
                }, Ae = function() {
                    0 === (49 & _l) && (function() {
                        if (null !== is) {
                            var e = is;
                            is = null, e.forEach((function(e) {
                                e.expiredLanes |= 24 & e.pendingLanes, vs(e, qi())
                            }))
                        }
                        Qi()
                    }(), As())
                }, Re = function(e, a) {
                    var t = _l;
                    _l |= 2;
                    try {
                        return e(a)
                    } finally {
                        0 === (_l = t) && ($l(), Qi())
                    }
                };
                var su = {
                        Events: [ni, ii, ri, Te, _e, As, {
                            current: !1
                        }]
                    },
                    uu = {
                        findFiberByHostInstance: ti,
                        bundleType: 0,
                        version: "17.0.2",
                        rendererPackageName: "react-dom"
                    },
                    cu = {
                        bundleType: uu.bundleType,
                        version: uu.version,
                        rendererPackageName: uu.rendererPackageName,
                        rendererConfig: uu.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: k.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function(e) {
                            return null === (e = Ze(e)) ? null : e.stateNode
                        },
                        findFiberByHostInstance: uu.findFiberByHostInstance || function() {
                            return null
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null
                    };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var fu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!fu.isDisabled && fu.supportsFiber) try {
                        xi = fu.inject(cu), Si = fu
                    } catch (ve) {}
                }
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = su, a.createPortal = lu, a.findDOMNode = function(e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var a = e._reactInternals;
                    if (void 0 === a) {
                        if ("function" === typeof e.render) throw Error(o(188));
                        throw Error(o(268, Object.keys(e)))
                    }
                    return e = null === (e = Ze(a)) ? null : e.stateNode
                }, a.flushSync = function(e, a) {
                    var t = _l;
                    if (0 !== (48 & t)) return e(a);
                    _l |= 1;
                    try {
                        if (e) return Yi(99, e.bind(null, a))
                    } finally {
                        _l = t, Qi()
                    }
                }, a.hydrate = function(e, a, t) {
                    if (!ru(a)) throw Error(o(200));
                    return ou(null, e, a, !0, t)
                }, a.render = function(e, a, t) {
                    if (!ru(a)) throw Error(o(200));
                    return ou(null, e, a, !1, t)
                }, a.unmountComponentAtNode = function(e) {
                    if (!ru(e)) throw Error(o(40));
                    return !!e._reactRootContainer && (ks((function() {
                        ou(null, null, e, !1, (function() {
                            e._reactRootContainer = null, e[ei] = null
                        }))
                    })), !0)
                }, a.unstable_batchedUpdates = ws, a.unstable_createPortal = function(e, a) {
                    return lu(e, a, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
                }, a.unstable_renderSubtreeIntoContainer = function(e, a, t, n) {
                    if (!ru(t)) throw Error(o(200));
                    if (null == e || void 0 === e._reactInternals) throw Error(o(38));
                    return ou(e, a, t, !1, n)
                }, a.version = "17.0.2"
            },
            164: function(e, a, t) {
                "use strict";
                ! function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (a) {
                        console.error(a)
                    }
                }(), e.exports = t(463)
            },
            374: function(e, a, t) {
                "use strict";
                t(725);
                var n = t(791),
                    i = 60103;
                if (60107, "function" === typeof Symbol && Symbol.for) {
                    var r = Symbol.for;
                    i = r("react.element"), r("react.fragment")
                }
                var o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    l = Object.prototype.hasOwnProperty,
                    s = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function u(e, a, t) {
                    var n, r = {},
                        u = null,
                        c = null;
                    for (n in void 0 !== t && (u = "" + t), void 0 !== a.key && (u = "" + a.key), void 0 !== a.ref && (c = a.ref), a) l.call(a, n) && !s.hasOwnProperty(n) && (r[n] = a[n]);
                    if (e && e.defaultProps)
                        for (n in a = e.defaultProps) void 0 === r[n] && (r[n] = a[n]);
                    return {
                        $$typeof: i,
                        type: e,
                        key: u,
                        ref: c,
                        props: r,
                        _owner: o.current
                    }
                }
                a.jsx = u, a.jsxs = u
            },
            117: function(e, a, t) {
                "use strict";
                var n = t(725),
                    i = 60103,
                    r = 60106;
                a.Fragment = 60107, a.StrictMode = 60108, a.Profiler = 60114;
                var o = 60109,
                    l = 60110,
                    s = 60112;
                a.Suspense = 60113;
                var u = 60115,
                    c = 60116;
                if ("function" === typeof Symbol && Symbol.for) {
                    var f = Symbol.for;
                    i = f("react.element"), r = f("react.portal"), a.Fragment = f("react.fragment"), a.StrictMode = f("react.strict_mode"), a.Profiler = f("react.profiler"), o = f("react.provider"), l = f("react.context"), s = f("react.forward_ref"), a.Suspense = f("react.suspense"), u = f("react.memo"), c = f("react.lazy")
                }
                var d = "function" === typeof Symbol && Symbol.iterator;

                function p(e) {
                    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) a += "&args[]=" + encodeURIComponent(arguments[t]);
                    return "Minified React error #" + e + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var m = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    g = {};

                function v(e, a, t) {
                    this.props = e, this.context = a, this.refs = g, this.updater = t || m
                }

                function b() {}

                function h(e, a, t) {
                    this.props = e, this.context = a, this.refs = g, this.updater = t || m
                }
                v.prototype.isReactComponent = {}, v.prototype.setState = function(e, a) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error(p(85));
                    this.updater.enqueueSetState(this, e, a, "setState")
                }, v.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, b.prototype = v.prototype;
                var y = h.prototype = new b;
                y.constructor = h, n(y, v.prototype), y.isPureReactComponent = !0;
                var w = {
                        current: null
                    },
                    k = Object.prototype.hasOwnProperty,
                    z = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function x(e, a, t) {
                    var n, r = {},
                        o = null,
                        l = null;
                    if (null != a)
                        for (n in void 0 !== a.ref && (l = a.ref), void 0 !== a.key && (o = "" + a.key), a) k.call(a, n) && !z.hasOwnProperty(n) && (r[n] = a[n]);
                    var s = arguments.length - 2;
                    if (1 === s) r.children = t;
                    else if (1 < s) {
                        for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
                        r.children = u
                    }
                    if (e && e.defaultProps)
                        for (n in s = e.defaultProps) void 0 === r[n] && (r[n] = s[n]);
                    return {
                        $$typeof: i,
                        type: e,
                        key: o,
                        ref: l,
                        props: r,
                        _owner: w.current
                    }
                }

                function S(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === i
                }
                var E = /\/+/g;

                function C(e, a) {
                    return "object" === typeof e && null !== e && null != e.key ? function(e) {
                        var a = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + e.replace(/[=:]/g, (function(e) {
                            return a[e]
                        }))
                    }("" + e.key) : a.toString(36)
                }

                function O(e, a, t, n, o) {
                    var l = typeof e;
                    "undefined" !== l && "boolean" !== l || (e = null);
                    var s = !1;
                    if (null === e) s = !0;
                    else switch (l) {
                        case "string":
                        case "number":
                            s = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case i:
                                case r:
                                    s = !0
                            }
                    }
                    if (s) return o = o(s = e), e = "" === n ? "." + C(s, 0) : n, Array.isArray(o) ? (t = "", null != e && (t = e.replace(E, "$&/") + "/"), O(o, a, t, "", (function(e) {
                        return e
                    }))) : null != o && (S(o) && (o = function(e, a) {
                        return {
                            $$typeof: i,
                            type: e.type,
                            key: a,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(o, t + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(E, "$&/") + "/") + e)), a.push(o)), 1;
                    if (s = 0, n = "" === n ? "." : n + ":", Array.isArray(e))
                        for (var u = 0; u < e.length; u++) {
                            var c = n + C(l = e[u], u);
                            s += O(l, a, t, c, o)
                        } else if (c = function(e) {
                                return null === e || "object" !== typeof e ? null : "function" === typeof(e = d && e[d] || e["@@iterator"]) ? e : null
                            }(e), "function" === typeof c)
                            for (e = c.call(e), u = 0; !(l = e.next()).done;) s += O(l = l.value, a, t, c = n + C(l, u++), o);
                        else if ("object" === l) throw a = "" + e, Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(e).join(", ") + "}" : a));
                    return s
                }

                function N(e, a, t) {
                    if (null == e) return e;
                    var n = [],
                        i = 0;
                    return O(e, n, "", "", (function(e) {
                        return a.call(t, e, i++)
                    })), n
                }

                function j(e) {
                    if (-1 === e._status) {
                        var a = e._result;
                        a = a(), e._status = 0, e._result = a, a.then((function(a) {
                            0 === e._status && (a = a.default, e._status = 1, e._result = a)
                        }), (function(a) {
                            0 === e._status && (e._status = 2, e._result = a)
                        }))
                    }
                    if (1 === e._status) return e._result;
                    throw e._result
                }
                var P = {
                    current: null
                };

                function T() {
                    var e = P.current;
                    if (null === e) throw Error(p(321));
                    return e
                }
                var _ = {
                    ReactCurrentDispatcher: P,
                    ReactCurrentBatchConfig: {
                        transition: 0
                    },
                    ReactCurrentOwner: w,
                    IsSomeRendererActing: {
                        current: !1
                    },
                    assign: n
                };
                a.Children = {
                    map: N,
                    forEach: function(e, a, t) {
                        N(e, (function() {
                            a.apply(this, arguments)
                        }), t)
                    },
                    count: function(e) {
                        var a = 0;
                        return N(e, (function() {
                            a++
                        })), a
                    },
                    toArray: function(e) {
                        return N(e, (function(e) {
                            return e
                        })) || []
                    },
                    only: function(e) {
                        if (!S(e)) throw Error(p(143));
                        return e
                    }
                }, a.Component = v, a.PureComponent = h, a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _, a.cloneElement = function(e, a, t) {
                    if (null === e || void 0 === e) throw Error(p(267, e));
                    var r = n({}, e.props),
                        o = e.key,
                        l = e.ref,
                        s = e._owner;
                    if (null != a) {
                        if (void 0 !== a.ref && (l = a.ref, s = w.current), void 0 !== a.key && (o = "" + a.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
                        for (c in a) k.call(a, c) && !z.hasOwnProperty(c) && (r[c] = void 0 === a[c] && void 0 !== u ? u[c] : a[c])
                    }
                    var c = arguments.length - 2;
                    if (1 === c) r.children = t;
                    else if (1 < c) {
                        u = Array(c);
                        for (var f = 0; f < c; f++) u[f] = arguments[f + 2];
                        r.children = u
                    }
                    return {
                        $$typeof: i,
                        type: e.type,
                        key: o,
                        ref: l,
                        props: r,
                        _owner: s
                    }
                }, a.createContext = function(e, a) {
                    return void 0 === a && (a = null), (e = {
                        $$typeof: l,
                        _calculateChangedBits: a,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null
                    }).Provider = {
                        $$typeof: o,
                        _context: e
                    }, e.Consumer = e
                }, a.createElement = x, a.createFactory = function(e) {
                    var a = x.bind(null, e);
                    return a.type = e, a
                }, a.createRef = function() {
                    return {
                        current: null
                    }
                }, a.forwardRef = function(e) {
                    return {
                        $$typeof: s,
                        render: e
                    }
                }, a.isValidElement = S, a.lazy = function(e) {
                    return {
                        $$typeof: c,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: j
                    }
                }, a.memo = function(e, a) {
                    return {
                        $$typeof: u,
                        type: e,
                        compare: void 0 === a ? null : a
                    }
                }, a.useCallback = function(e, a) {
                    return T().useCallback(e, a)
                }, a.useContext = function(e, a) {
                    return T().useContext(e, a)
                }, a.useDebugValue = function() {}, a.useEffect = function(e, a) {
                    return T().useEffect(e, a)
                }, a.useImperativeHandle = function(e, a, t) {
                    return T().useImperativeHandle(e, a, t)
                }, a.useLayoutEffect = function(e, a) {
                    return T().useLayoutEffect(e, a)
                }, a.useMemo = function(e, a) {
                    return T().useMemo(e, a)
                }, a.useReducer = function(e, a, t) {
                    return T().useReducer(e, a, t)
                }, a.useRef = function(e) {
                    return T().useRef(e)
                }, a.useState = function(e) {
                    return T().useState(e)
                }, a.version = "17.0.2"
            },
            791: function(e, a, t) {
                "use strict";
                e.exports = t(117)
            },
            184: function(e, a, t) {
                "use strict";
                e.exports = t(374)
            },
            813: function(e, a) {
                "use strict";
                var t, n, i, r;
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var o = performance;
                    a.unstable_now = function() {
                        return o.now()
                    }
                } else {
                    var l = Date,
                        s = l.now();
                    a.unstable_now = function() {
                        return l.now() - s
                    }
                }
                if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
                    var u = null,
                        c = null,
                        f = function e() {
                            if (null !== u) try {
                                var t = a.unstable_now();
                                u(!0, t), u = null
                            } catch (n) {
                                throw setTimeout(e, 0), n
                            }
                        };
                    t = function(e) {
                        null !== u ? setTimeout(t, 0, e) : (u = e, setTimeout(f, 0))
                    }, n = function(e, a) {
                        c = setTimeout(e, a)
                    }, i = function() {
                        clearTimeout(c)
                    }, a.unstable_shouldYield = function() {
                        return !1
                    }, r = a.unstable_forceFrameRate = function() {}
                } else {
                    var d = window.setTimeout,
                        p = window.clearTimeout;
                    if ("undefined" !== typeof console) {
                        var m = window.cancelAnimationFrame;
                        "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), "function" !== typeof m && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
                    }
                    var g = !1,
                        v = null,
                        b = -1,
                        h = 5,
                        y = 0;
                    a.unstable_shouldYield = function() {
                        return a.unstable_now() >= y
                    }, r = function() {}, a.unstable_forceFrameRate = function(e) {
                        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : h = 0 < e ? Math.floor(1e3 / e) : 5
                    };
                    var w = new MessageChannel,
                        k = w.port2;
                    w.port1.onmessage = function() {
                        if (null !== v) {
                            var e = a.unstable_now();
                            y = e + h;
                            try {
                                v(!0, e) ? k.postMessage(null) : (g = !1, v = null)
                            } catch (t) {
                                throw k.postMessage(null), t
                            }
                        } else g = !1
                    }, t = function(e) {
                        v = e, g || (g = !0, k.postMessage(null))
                    }, n = function(e, t) {
                        b = d((function() {
                            e(a.unstable_now())
                        }), t)
                    }, i = function() {
                        p(b), b = -1
                    }
                }

                function z(e, a) {
                    var t = e.length;
                    e.push(a);
                    e: for (;;) {
                        var n = t - 1 >>> 1,
                            i = e[n];
                        if (!(void 0 !== i && 0 < E(i, a))) break e;
                        e[n] = a, e[t] = i, t = n
                    }
                }

                function x(e) {
                    return void 0 === (e = e[0]) ? null : e
                }

                function S(e) {
                    var a = e[0];
                    if (void 0 !== a) {
                        var t = e.pop();
                        if (t !== a) {
                            e[0] = t;
                            e: for (var n = 0, i = e.length; n < i;) {
                                var r = 2 * (n + 1) - 1,
                                    o = e[r],
                                    l = r + 1,
                                    s = e[l];
                                if (void 0 !== o && 0 > E(o, t)) void 0 !== s && 0 > E(s, o) ? (e[n] = s, e[l] = t, n = l) : (e[n] = o, e[r] = t, n = r);
                                else {
                                    if (!(void 0 !== s && 0 > E(s, t))) break e;
                                    e[n] = s, e[l] = t, n = l
                                }
                            }
                        }
                        return a
                    }
                    return null
                }

                function E(e, a) {
                    var t = e.sortIndex - a.sortIndex;
                    return 0 !== t ? t : e.id - a.id
                }
                var C = [],
                    O = [],
                    N = 1,
                    j = null,
                    P = 3,
                    T = !1,
                    _ = !1,
                    L = !1;

                function M(e) {
                    for (var a = x(O); null !== a;) {
                        if (null === a.callback) S(O);
                        else {
                            if (!(a.startTime <= e)) break;
                            S(O), a.sortIndex = a.expirationTime, z(C, a)
                        }
                        a = x(O)
                    }
                }

                function A(e) {
                    if (L = !1, M(e), !_)
                        if (null !== x(C)) _ = !0, t(R);
                        else {
                            var a = x(O);
                            null !== a && n(A, a.startTime - e)
                        }
                }

                function R(e, t) {
                    _ = !1, L && (L = !1, i()), T = !0;
                    var r = P;
                    try {
                        for (M(t), j = x(C); null !== j && (!(j.expirationTime > t) || e && !a.unstable_shouldYield());) {
                            var o = j.callback;
                            if ("function" === typeof o) {
                                j.callback = null, P = j.priorityLevel;
                                var l = o(j.expirationTime <= t);
                                t = a.unstable_now(), "function" === typeof l ? j.callback = l : j === x(C) && S(C), M(t)
                            } else S(C);
                            j = x(C)
                        }
                        if (null !== j) var s = !0;
                        else {
                            var u = x(O);
                            null !== u && n(A, u.startTime - t), s = !1
                        }
                        return s
                    } finally {
                        j = null, P = r, T = !1
                    }
                }
                var D = r;
                a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, a.unstable_continueExecution = function() {
                    _ || T || (_ = !0, t(R))
                }, a.unstable_getCurrentPriorityLevel = function() {
                    return P
                }, a.unstable_getFirstCallbackNode = function() {
                    return x(C)
                }, a.unstable_next = function(e) {
                    switch (P) {
                        case 1:
                        case 2:
                        case 3:
                            var a = 3;
                            break;
                        default:
                            a = P
                    }
                    var t = P;
                    P = a;
                    try {
                        return e()
                    } finally {
                        P = t
                    }
                }, a.unstable_pauseExecution = function() {}, a.unstable_requestPaint = D, a.unstable_runWithPriority = function(e, a) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var t = P;
                    P = e;
                    try {
                        return a()
                    } finally {
                        P = t
                    }
                }, a.unstable_scheduleCallback = function(e, r, o) {
                    var l = a.unstable_now();
                    switch ("object" === typeof o && null !== o ? o = "number" === typeof(o = o.delay) && 0 < o ? l + o : l : o = l, e) {
                        case 1:
                            var s = -1;
                            break;
                        case 2:
                            s = 250;
                            break;
                        case 5:
                            s = 1073741823;
                            break;
                        case 4:
                            s = 1e4;
                            break;
                        default:
                            s = 5e3
                    }
                    return e = {
                        id: N++,
                        callback: r,
                        priorityLevel: e,
                        startTime: o,
                        expirationTime: s = o + s,
                        sortIndex: -1
                    }, o > l ? (e.sortIndex = o, z(O, e), null === x(C) && e === x(O) && (L ? i() : L = !0, n(A, o - l))) : (e.sortIndex = s, z(C, e), _ || T || (_ = !0, t(R))), e
                }, a.unstable_wrapCallback = function(e) {
                    var a = P;
                    return function() {
                        var t = P;
                        P = a;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            P = t
                        }
                    }
                }
            },
            296: function(e, a, t) {
                "use strict";
                e.exports = t(813)
            }
        },
        a = {};

    function t(n) {
        var i = a[n];
        if (void 0 !== i) return i.exports;
        var r = a[n] = {
            exports: {}
        };
        return e[n](r, r.exports, t), r.exports
    }
    t.m = e, t.n = function(e) {
            var a = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(a, {
                a: a
            }), a
        }, t.d = function(e, a) {
            for (var n in a) t.o(a, n) && !t.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: a[n]
            })
        }, t.f = {}, t.e = function(e) {
            return Promise.all(Object.keys(t.f).reduce((function(a, n) {
                return t.f[n](e, a), a
            }), []))
        }, t.u = function(e) {
            return "static/js/" + e + ".b3f9d252.chunk.js"
        }, t.miniCssF = function(e) {}, t.o = function(e, a) {
            return Object.prototype.hasOwnProperty.call(e, a)
        },
        function() {
            var e = {},
                a = "game:";
            t.l = function(n, i, r, o) {
                if (e[n]) e[n].push(i);
                else {
                    var l, s;
                    if (void 0 !== r)
                        for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
                            var f = u[c];
                            if (f.getAttribute("src") == n || f.getAttribute("data-webpack") == a + r) {
                                l = f;
                                break
                            }
                        }
                    l || (s = !0, (l = document.createElement("script")).charset = "utf-8", l.timeout = 120, t.nc && l.setAttribute("nonce", t.nc), l.setAttribute("data-webpack", a + r), l.src = n), e[n] = [i];
                    var d = function(a, t) {
                            l.onerror = l.onload = null, clearTimeout(p);
                            var i = e[n];
                            if (delete e[n], l.parentNode && l.parentNode.removeChild(l), i && i.forEach((function(e) {
                                    return e(t)
                                })), a) return a(t)
                        },
                        p = setTimeout(d.bind(null, void 0, {
                            type: "timeout",
                            target: l
                        }), 12e4);
                    l.onerror = d.bind(null, l.onerror), l.onload = d.bind(null, l.onload), s && document.head.appendChild(l)
                }
            }
        }(), t.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.p = "/",
        function() {
            var e = {
                179: 0
            };
            t.f.j = function(a, n) {
                var i = t.o(e, a) ? e[a] : void 0;
                if (0 !== i)
                    if (i) n.push(i[2]);
                    else {
                        var r = new Promise((function(t, n) {
                            i = e[a] = [t, n]
                        }));
                        n.push(i[2] = r);
                        var o = t.p + t.u(a),
                            l = new Error;
                        t.l(o, (function(n) {
                            if (t.o(e, a) && (0 !== (i = e[a]) && (e[a] = void 0), i)) {
                                var r = n && ("load" === n.type ? "missing" : n.type),
                                    o = n && n.target && n.target.src;
                                l.message = "Loading chunk " + a + " failed.\n(" + r + ": " + o + ")", l.name = "ChunkLoadError", l.type = r, l.request = o, i[1](l)
                            }
                        }), "chunk-" + a, a)
                    }
            };
            var a = function(a, n) {
                    var i, r, o = n[0],
                        l = n[1],
                        s = n[2],
                        u = 0;
                    if (o.some((function(a) {
                            return 0 !== e[a]
                        }))) {
                        for (i in l) t.o(l, i) && (t.m[i] = l[i]);
                        if (s) s(t)
                    }
                    for (a && a(n); u < o.length; u++) r = o[u], t.o(e, r) && e[r] && e[r][0](), e[o[u]] = 0
                },
                n = self.webpackChunkgame = self.webpackChunkgame || [];
            n.forEach(a.bind(null, 0)), n.push = a.bind(null, n.push.bind(n))
        }(),
        function() {
            "use strict";
            var e = t(791),
                a = t(164);

            function n(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, n = new Array(a); t < a; t++) n[t] = e[t];
                return n
            }

            function i(e, a) {
                if (e) {
                    if ("string" === typeof e) return n(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? n(e, a) : void 0
                }
            }

            function r(e) {
                return function(e) {
                    if (Array.isArray(e)) return n(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || i(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function o(e, a) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, a) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var n, i, r = [],
                            o = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(o = (n = t.next()).done) && (r.push(n.value), !a || r.length !== a); o = !0);
                        } catch (s) {
                            l = !0, i = s
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return r
                    }
                }(e, a) || i(e, a) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var l = function(a) {
                return e.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    "aria-hidden": "true"
                }, a), e.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                }))
            };
            var s = function(a) {
                return e.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    "aria-hidden": "true"
                }, a), e.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                }), e.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                }))
            };
            var u = function(a) {
                return e.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    "aria-hidden": "true"
                }, a), e.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                }))
            };
            var c = function(a) {
                return e.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    "aria-hidden": "true"
                }, a), e.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                }))
            };
            var f = {
                    prefix: "fab",
                    iconName: "linkedin",
                    icon: [448, 512, [], "f08c", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]
                },
                d = {
                    prefix: "fab",
                    iconName: "instagram",
                    icon: [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
                },
                p = {
                    prefix: "fab",
                    iconName: "facebook",
                    icon: [512, 512, [62e3], "f09a", "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]
                },
                m = {
                    prefix: "fab",
                    iconName: "twitter",
                    icon: [512, 512, [], "f099", "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]
                };

            function g(e, a) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    a && (n = n.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function v(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var t = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? g(Object(t), !0).forEach((function(a) {
                        y(e, a, t[a])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
                    }))
                }
                return e
            }

            function b(e) {
                return b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, b(e)
            }

            function h(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var n = a[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function y(e, a, t) {
                return a in e ? Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = t, e
            }

            function w(e, a) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, a) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == t) return;
                    var n, i, r = [],
                        o = !0,
                        l = !1;
                    try {
                        for (t = t.call(e); !(o = (n = t.next()).done) && (r.push(n.value), !a || r.length !== a); o = !0);
                    } catch (s) {
                        l = !0, i = s
                    } finally {
                        try {
                            o || null == t.return || t.return()
                        } finally {
                            if (l) throw i
                        }
                    }
                    return r
                }(e, a) || z(e, a) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function k(e) {
                return function(e) {
                    if (Array.isArray(e)) return x(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || z(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function z(e, a) {
                if (e) {
                    if ("string" === typeof e) return x(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? x(e, a) : void 0
                }
            }

            function x(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, n = new Array(a); t < a; t++) n[t] = e[t];
                return n
            }
            var S = function() {},
                E = {},
                C = {},
                O = null,
                N = {
                    mark: S,
                    measure: S
                };
            try {
                "undefined" !== typeof window && (E = window), "undefined" !== typeof document && (C = document), "undefined" !== typeof MutationObserver && (O = MutationObserver), "undefined" !== typeof performance && (N = performance)
            } catch (Nr) {}
            var j, P, T, _, L, M = (E.navigator || {}).userAgent,
                A = void 0 === M ? "" : M,
                R = E,
                D = C,
                I = O,
                F = N,
                U = (R.document, !!D.documentElement && !!D.head && "function" === typeof D.addEventListener && "function" === typeof D.createElement),
                H = ~A.indexOf("MSIE") || ~A.indexOf("Trident/"),
                V = "svg-inline--fa",
                q = "data-fa-i2svg",
                W = "data-fa-pseudo-element",
                B = "data-prefix",
                Y = "data-icon",
                $ = "fontawesome-i2svg",
                Q = ["HTML", "HEAD", "STYLE", "SCRIPT"],
                K = function() {
                    try {
                        return !0
                    } catch (Nr) {
                        return !1
                    }
                }(),
                G = "classic",
                X = "sharp",
                J = [G, X];

            function Z(e) {
                return new Proxy(e, {
                    get: function(e, a) {
                        return a in e ? e[a] : e.classic
                    }
                })
            }
            var ee = Z((y(j = {}, G, {
                    fa: "solid",
                    fas: "solid",
                    "fa-solid": "solid",
                    far: "regular",
                    "fa-regular": "regular",
                    fal: "light",
                    "fa-light": "light",
                    fat: "thin",
                    "fa-thin": "thin",
                    fad: "duotone",
                    "fa-duotone": "duotone",
                    fab: "brands",
                    "fa-brands": "brands",
                    fak: "kit",
                    "fa-kit": "kit"
                }), y(j, X, {
                    fa: "solid",
                    fass: "solid",
                    "fa-solid": "solid",
                    fasr: "regular",
                    "fa-regular": "regular"
                }), j)),
                ae = Z((y(P = {}, G, {
                    solid: "fas",
                    regular: "far",
                    light: "fal",
                    thin: "fat",
                    duotone: "fad",
                    brands: "fab",
                    kit: "fak"
                }), y(P, X, {
                    solid: "fass",
                    regular: "fasr"
                }), P)),
                te = Z((y(T = {}, G, {
                    fab: "fa-brands",
                    fad: "fa-duotone",
                    fak: "fa-kit",
                    fal: "fa-light",
                    far: "fa-regular",
                    fas: "fa-solid",
                    fat: "fa-thin"
                }), y(T, X, {
                    fass: "fa-solid",
                    fasr: "fa-regular"
                }), T)),
                ne = Z((y(_ = {}, G, {
                    "fa-brands": "fab",
                    "fa-duotone": "fad",
                    "fa-kit": "fak",
                    "fa-light": "fal",
                    "fa-regular": "far",
                    "fa-solid": "fas",
                    "fa-thin": "fat"
                }), y(_, X, {
                    "fa-solid": "fass",
                    "fa-regular": "fasr"
                }), _)),
                ie = /fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,
                re = "fa-layers-text",
                oe = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
                le = Z((y(L = {}, G, {
                    900: "fas",
                    400: "far",
                    normal: "far",
                    300: "fal",
                    100: "fat"
                }), y(L, X, {
                    900: "fass",
                    400: "fasr"
                }), L)),
                se = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                ue = se.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
                ce = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
                fe = "duotone-group",
                de = "swap-opacity",
                pe = "primary",
                me = "secondary",
                ge = new Set;
            Object.keys(ae.classic).map(ge.add.bind(ge)), Object.keys(ae.sharp).map(ge.add.bind(ge));
            var ve = [].concat(J, k(ge), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", fe, de, pe, me]).concat(se.map((function(e) {
                    return "".concat(e, "x")
                }))).concat(ue.map((function(e) {
                    return "w-".concat(e)
                }))),
                be = R.FontAwesomeConfig || {};
            if (D && "function" === typeof D.querySelector) {
                [
                    ["data-family-prefix", "familyPrefix"],
                    ["data-css-prefix", "cssPrefix"],
                    ["data-family-default", "familyDefault"],
                    ["data-style-default", "styleDefault"],
                    ["data-replacement-class", "replacementClass"],
                    ["data-auto-replace-svg", "autoReplaceSvg"],
                    ["data-auto-add-css", "autoAddCss"],
                    ["data-auto-a11y", "autoA11y"],
                    ["data-search-pseudo-elements", "searchPseudoElements"],
                    ["data-observe-mutations", "observeMutations"],
                    ["data-mutate-approach", "mutateApproach"],
                    ["data-keep-original-source", "keepOriginalSource"],
                    ["data-measure-performance", "measurePerformance"],
                    ["data-show-missing-icons", "showMissingIcons"]
                ].forEach((function(e) {
                    var a = w(e, 2),
                        t = a[0],
                        n = a[1],
                        i = function(e) {
                            return "" === e || "false" !== e && ("true" === e || e)
                        }(function(e) {
                            var a = D.querySelector("script[" + e + "]");
                            if (a) return a.getAttribute(e)
                        }(t));
                    void 0 !== i && null !== i && (be[n] = i)
                }))
            }
            var he = {
                styleDefault: "solid",
                familyDefault: "classic",
                cssPrefix: "fa",
                replacementClass: V,
                autoReplaceSvg: !0,
                autoAddCss: !0,
                autoA11y: !0,
                searchPseudoElements: !1,
                observeMutations: !0,
                mutateApproach: "async",
                keepOriginalSource: !0,
                measurePerformance: !1,
                showMissingIcons: !0
            };
            be.familyPrefix && (be.cssPrefix = be.familyPrefix);
            var ye = v(v({}, he), be);
            ye.autoReplaceSvg || (ye.observeMutations = !1);
            var we = {};
            Object.keys(he).forEach((function(e) {
                Object.defineProperty(we, e, {
                    enumerable: !0,
                    set: function(a) {
                        ye[e] = a, ke.forEach((function(e) {
                            return e(we)
                        }))
                    },
                    get: function() {
                        return ye[e]
                    }
                })
            })), Object.defineProperty(we, "familyPrefix", {
                enumerable: !0,
                set: function(e) {
                    ye.cssPrefix = e, ke.forEach((function(e) {
                        return e(we)
                    }))
                },
                get: function() {
                    return ye.cssPrefix
                }
            }), R.FontAwesomeConfig = we;
            var ke = [];
            var ze = 16,
                xe = {
                    size: 16,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    flipX: !1,
                    flipY: !1
                };

            function Se() {
                for (var e = 12, a = ""; e-- > 0;) a += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
                return a
            }

            function Ee(e) {
                for (var a = [], t = (e || []).length >>> 0; t--;) a[t] = e[t];
                return a
            }

            function Ce(e) {
                return e.classList ? Ee(e.classList) : (e.getAttribute("class") || "").split(" ").filter((function(e) {
                    return e
                }))
            }

            function Oe(e) {
                return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function Ne(e) {
                return Object.keys(e || {}).reduce((function(a, t) {
                    return a + "".concat(t, ": ").concat(e[t].trim(), ";")
                }), "")
            }

            function je(e) {
                return e.size !== xe.size || e.x !== xe.x || e.y !== xe.y || e.rotate !== xe.rotate || e.flipX || e.flipY
            }

            function Pe() {
                var e = "fa",
                    a = V,
                    t = we.cssPrefix,
                    n = we.replacementClass,
                    i = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
                if (t !== e || n !== a) {
                    var r = new RegExp("\\.".concat(e, "\\-"), "g"),
                        o = new RegExp("\\--".concat(e, "\\-"), "g"),
                        l = new RegExp("\\.".concat(a), "g");
                    i = i.replace(r, ".".concat(t, "-")).replace(o, "--".concat(t, "-")).replace(l, ".".concat(n))
                }
                return i
            }
            var Te = !1;

            function _e() {
                we.autoAddCss && !Te && (! function(e) {
                    if (e && U) {
                        var a = D.createElement("style");
                        a.setAttribute("type", "text/css"), a.innerHTML = e;
                        for (var t = D.head.childNodes, n = null, i = t.length - 1; i > -1; i--) {
                            var r = t[i],
                                o = (r.tagName || "").toUpperCase();
                            ["STYLE", "LINK"].indexOf(o) > -1 && (n = r)
                        }
                        D.head.insertBefore(a, n)
                    }
                }(Pe()), Te = !0)
            }
            var Le = {
                    mixout: function() {
                        return {
                            dom: {
                                css: Pe,
                                insertCss: _e
                            }
                        }
                    },
                    hooks: function() {
                        return {
                            beforeDOMElementCreation: function() {
                                _e()
                            },
                            beforeI2svg: function() {
                                _e()
                            }
                        }
                    }
                },
                Me = R || {};
            Me.___FONT_AWESOME___ || (Me.___FONT_AWESOME___ = {}), Me.___FONT_AWESOME___.styles || (Me.___FONT_AWESOME___.styles = {}), Me.___FONT_AWESOME___.hooks || (Me.___FONT_AWESOME___.hooks = {}), Me.___FONT_AWESOME___.shims || (Me.___FONT_AWESOME___.shims = []);
            var Ae = Me.___FONT_AWESOME___,
                Re = [],
                De = !1;

            function Ie(e) {
                U && (De ? setTimeout(e, 0) : Re.push(e))
            }

            function Fe(e) {
                var a = e.tag,
                    t = e.attributes,
                    n = void 0 === t ? {} : t,
                    i = e.children,
                    r = void 0 === i ? [] : i;
                return "string" === typeof e ? Oe(e) : "<".concat(a, " ").concat(function(e) {
                    return Object.keys(e || {}).reduce((function(a, t) {
                        return a + "".concat(t, '="').concat(Oe(e[t]), '" ')
                    }), "").trim()
                }(n), ">").concat(r.map(Fe).join(""), "</").concat(a, ">")
            }

            function Ue(e, a, t) {
                if (e && e[a] && e[a][t]) return {
                    prefix: a,
                    iconName: t,
                    icon: e[a][t]
                }
            }
            U && ((De = (D.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(D.readyState)) || D.addEventListener("DOMContentLoaded", (function e() {
                D.removeEventListener("DOMContentLoaded", e), De = 1, Re.map((function(e) {
                    return e()
                }))
            })));
            var He = function(e, a, t, n) {
                var i, r, o, l = Object.keys(e),
                    s = l.length,
                    u = void 0 !== n ? function(e, a) {
                        return function(t, n, i, r) {
                            return e.call(a, t, n, i, r)
                        }
                    }(a, n) : a;
                for (void 0 === t ? (i = 1, o = e[l[0]]) : (i = 0, o = t); i < s; i++) o = u(o, e[r = l[i]], r, e);
                return o
            };

            function Ve(e) {
                var a = function(e) {
                    for (var a = [], t = 0, n = e.length; t < n;) {
                        var i = e.charCodeAt(t++);
                        if (i >= 55296 && i <= 56319 && t < n) {
                            var r = e.charCodeAt(t++);
                            56320 == (64512 & r) ? a.push(((1023 & i) << 10) + (1023 & r) + 65536) : (a.push(i), t--)
                        } else a.push(i)
                    }
                    return a
                }(e);
                return 1 === a.length ? a[0].toString(16) : null
            }

            function qe(e) {
                return Object.keys(e).reduce((function(a, t) {
                    var n = e[t];
                    return !!n.icon ? a[n.iconName] = n.icon : a[t] = n, a
                }), {})
            }

            function We(e, a) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = t.skipHooks,
                    i = void 0 !== n && n,
                    r = qe(a);
                "function" !== typeof Ae.hooks.addPack || i ? Ae.styles[e] = v(v({}, Ae.styles[e] || {}), r) : Ae.hooks.addPack(e, qe(a)), "fas" === e && We("fa", a)
            }
            var Be, Ye, $e, Qe = Ae.styles,
                Ke = Ae.shims,
                Ge = (y(Be = {}, G, Object.values(te.classic)), y(Be, X, Object.values(te.sharp)), Be),
                Xe = null,
                Je = {},
                Ze = {},
                ea = {},
                aa = {},
                ta = {},
                na = (y(Ye = {}, G, Object.keys(ee.classic)), y(Ye, X, Object.keys(ee.sharp)), Ye);

            function ia(e, a) {
                var t, n = a.split("-"),
                    i = n[0],
                    r = n.slice(1).join("-");
                return i !== e || "" === r || (t = r, ~ve.indexOf(t)) ? null : r
            }
            var ra, oa = function() {
                var e = function(e) {
                    return He(Qe, (function(a, t, n) {
                        return a[n] = He(t, e, {}), a
                    }), {})
                };
                Je = e((function(e, a, t) {
                    (a[3] && (e[a[3]] = t), a[2]) && a[2].filter((function(e) {
                        return "number" === typeof e
                    })).forEach((function(a) {
                        e[a.toString(16)] = t
                    }));
                    return e
                })), Ze = e((function(e, a, t) {
                    (e[t] = t, a[2]) && a[2].filter((function(e) {
                        return "string" === typeof e
                    })).forEach((function(a) {
                        e[a] = t
                    }));
                    return e
                })), ta = e((function(e, a, t) {
                    var n = a[2];
                    return e[t] = t, n.forEach((function(a) {
                        e[a] = t
                    })), e
                }));
                var a = "far" in Qe || we.autoFetchSvg,
                    t = He(Ke, (function(e, t) {
                        var n = t[0],
                            i = t[1],
                            r = t[2];
                        return "far" !== i || a || (i = "fas"), "string" === typeof n && (e.names[n] = {
                            prefix: i,
                            iconName: r
                        }), "number" === typeof n && (e.unicodes[n.toString(16)] = {
                            prefix: i,
                            iconName: r
                        }), e
                    }), {
                        names: {},
                        unicodes: {}
                    });
                ea = t.names, aa = t.unicodes, Xe = fa(we.styleDefault, {
                    family: we.familyDefault
                })
            };

            function la(e, a) {
                return (Je[e] || {})[a]
            }

            function sa(e, a) {
                return (ta[e] || {})[a]
            }

            function ua(e) {
                return ea[e] || {
                    prefix: null,
                    iconName: null
                }
            }

            function ca() {
                return Xe
            }
            ra = function(e) {
                Xe = fa(e.styleDefault, {
                    family: we.familyDefault
                })
            }, ke.push(ra), oa();

            function fa(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = a.family,
                    n = void 0 === t ? G : t,
                    i = ee[n][e],
                    r = ae[n][e] || ae[n][i],
                    o = e in Ae.styles ? e : null;
                return r || o || null
            }
            var da = (y($e = {}, G, Object.keys(te.classic)), y($e, X, Object.keys(te.sharp)), $e);

            function pa(e) {
                var a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.skipLookups,
                    i = void 0 !== n && n,
                    r = (y(a = {}, G, "".concat(we.cssPrefix, "-").concat(G)), y(a, X, "".concat(we.cssPrefix, "-").concat(X)), a),
                    o = null,
                    l = G;
                (e.includes(r.classic) || e.some((function(e) {
                    return da.classic.includes(e)
                }))) && (l = G), (e.includes(r.sharp) || e.some((function(e) {
                    return da.sharp.includes(e)
                }))) && (l = X);
                var s = e.reduce((function(e, a) {
                    var t = ia(we.cssPrefix, a);
                    if (Qe[a] ? (a = Ge[l].includes(a) ? ne[l][a] : a, o = a, e.prefix = a) : na[l].indexOf(a) > -1 ? (o = a, e.prefix = fa(a, {
                            family: l
                        })) : t ? e.iconName = t : a !== we.replacementClass && a !== r.classic && a !== r.sharp && e.rest.push(a), !i && e.prefix && e.iconName) {
                        var n = "fa" === o ? ua(e.iconName) : {},
                            s = sa(e.prefix, e.iconName);
                        n.prefix && (o = null), e.iconName = n.iconName || s || e.iconName, e.prefix = n.prefix || e.prefix, "far" !== e.prefix || Qe.far || !Qe.fas || we.autoFetchSvg || (e.prefix = "fas")
                    }
                    return e
                }), {
                    prefix: null,
                    iconName: null,
                    rest: []
                });
                return (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"), s.prefix || l !== X || !Qe.fass && !we.autoFetchSvg || (s.prefix = "fass", s.iconName = sa(s.prefix, s.iconName) || s.iconName), "fa" !== s.prefix && "fa" !== o || (s.prefix = ca() || "fas"), s
            }
            var ma = function() {
                    function e() {
                        ! function(e, a) {
                            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.definitions = {}
                    }
                    var a, t, n;
                    return a = e, t = [{
                        key: "add",
                        value: function() {
                            for (var e = this, a = arguments.length, t = new Array(a), n = 0; n < a; n++) t[n] = arguments[n];
                            var i = t.reduce(this._pullDefinitions, {});
                            Object.keys(i).forEach((function(a) {
                                e.definitions[a] = v(v({}, e.definitions[a] || {}), i[a]), We(a, i[a]);
                                var t = te.classic[a];
                                t && We(t, i[a]), oa()
                            }))
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.definitions = {}
                        }
                    }, {
                        key: "_pullDefinitions",
                        value: function(e, a) {
                            var t = a.prefix && a.iconName && a.icon ? {
                                0: a
                            } : a;
                            return Object.keys(t).map((function(a) {
                                var n = t[a],
                                    i = n.prefix,
                                    r = n.iconName,
                                    o = n.icon,
                                    l = o[2];
                                e[i] || (e[i] = {}), l.length > 0 && l.forEach((function(a) {
                                    "string" === typeof a && (e[i][a] = o)
                                })), e[i][r] = o
                            })), e
                        }
                    }], t && h(a.prototype, t), n && h(a, n), Object.defineProperty(a, "prototype", {
                        writable: !1
                    }), e
                }(),
                ga = [],
                va = {},
                ba = {},
                ha = Object.keys(ba);

            function ya(e, a) {
                for (var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), i = 2; i < t; i++) n[i - 2] = arguments[i];
                var r = va[e] || [];
                return r.forEach((function(e) {
                    a = e.apply(null, [a].concat(n))
                })), a
            }

            function wa(e) {
                for (var a = arguments.length, t = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++) t[n - 1] = arguments[n];
                var i = va[e] || [];
                i.forEach((function(e) {
                    e.apply(null, t)
                }))
            }

            function ka() {
                var e = arguments[0],
                    a = Array.prototype.slice.call(arguments, 1);
                return ba[e] ? ba[e].apply(null, a) : void 0
            }

            function za(e) {
                "fa" === e.prefix && (e.prefix = "fas");
                var a = e.iconName,
                    t = e.prefix || ca();
                if (a) return a = sa(t, a) || a, Ue(xa.definitions, t, a) || Ue(Ae.styles, t, a)
            }
            var xa = new ma,
                Sa = {
                    i2svg: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return U ? (wa("beforeI2svg", e), ka("pseudoElements2svg", e), ka("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.")
                    },
                    watch: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            a = e.autoReplaceSvgRoot;
                        !1 === we.autoReplaceSvg && (we.autoReplaceSvg = !0), we.observeMutations = !0, Ie((function() {
                            Oa({
                                autoReplaceSvgRoot: a
                            }), wa("watch", e)
                        }))
                    }
                },
                Ea = {
                    icon: function(e) {
                        if (null === e) return null;
                        if ("object" === b(e) && e.prefix && e.iconName) return {
                            prefix: e.prefix,
                            iconName: sa(e.prefix, e.iconName) || e.iconName
                        };
                        if (Array.isArray(e) && 2 === e.length) {
                            var a = 0 === e[1].indexOf("fa-") ? e[1].slice(3) : e[1],
                                t = fa(e[0]);
                            return {
                                prefix: t,
                                iconName: sa(t, a) || a
                            }
                        }
                        if ("string" === typeof e && (e.indexOf("".concat(we.cssPrefix, "-")) > -1 || e.match(ie))) {
                            var n = pa(e.split(" "), {
                                skipLookups: !0
                            });
                            return {
                                prefix: n.prefix || ca(),
                                iconName: sa(n.prefix, n.iconName) || n.iconName
                            }
                        }
                        if ("string" === typeof e) {
                            var i = ca();
                            return {
                                prefix: i,
                                iconName: sa(i, e) || e
                            }
                        }
                    }
                },
                Ca = {
                    noAuto: function() {
                        we.autoReplaceSvg = !1, we.observeMutations = !1, wa("noAuto")
                    },
                    config: we,
                    dom: Sa,
                    parse: Ea,
                    library: xa,
                    findIconDefinition: za,
                    toHtml: Fe
                },
                Oa = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = e.autoReplaceSvgRoot,
                        t = void 0 === a ? D : a;
                    (Object.keys(Ae.styles).length > 0 || we.autoFetchSvg) && U && we.autoReplaceSvg && Ca.dom.i2svg({
                        node: t
                    })
                };

            function Na(e, a) {
                return Object.defineProperty(e, "abstract", {
                    get: a
                }), Object.defineProperty(e, "html", {
                    get: function() {
                        return e.abstract.map((function(e) {
                            return Fe(e)
                        }))
                    }
                }), Object.defineProperty(e, "node", {
                    get: function() {
                        if (U) {
                            var a = D.createElement("div");
                            return a.innerHTML = e.html, a.children
                        }
                    }
                }), e
            }

            function ja(e) {
                var a = e.icons,
                    t = a.main,
                    n = a.mask,
                    i = e.prefix,
                    r = e.iconName,
                    o = e.transform,
                    l = e.symbol,
                    s = e.title,
                    u = e.maskId,
                    c = e.titleId,
                    f = e.extra,
                    d = e.watchable,
                    p = void 0 !== d && d,
                    m = n.found ? n : t,
                    g = m.width,
                    b = m.height,
                    h = "fak" === i,
                    y = [we.replacementClass, r ? "".concat(we.cssPrefix, "-").concat(r) : ""].filter((function(e) {
                        return -1 === f.classes.indexOf(e)
                    })).filter((function(e) {
                        return "" !== e || !!e
                    })).concat(f.classes).join(" "),
                    w = {
                        children: [],
                        attributes: v(v({}, f.attributes), {}, {
                            "data-prefix": i,
                            "data-icon": r,
                            class: y,
                            role: f.attributes.role || "img",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 ".concat(g, " ").concat(b)
                        })
                    },
                    k = h && !~f.classes.indexOf("fa-fw") ? {
                        width: "".concat(g / b * 16 * .0625, "em")
                    } : {};
                p && (w.attributes[q] = ""), s && (w.children.push({
                    tag: "title",
                    attributes: {
                        id: w.attributes["aria-labelledby"] || "title-".concat(c || Se())
                    },
                    children: [s]
                }), delete w.attributes.title);
                var z = v(v({}, w), {}, {
                        prefix: i,
                        iconName: r,
                        main: t,
                        mask: n,
                        maskId: u,
                        transform: o,
                        symbol: l,
                        styles: v(v({}, k), f.styles)
                    }),
                    x = n.found && t.found ? ka("generateAbstractMask", z) || {
                        children: [],
                        attributes: {}
                    } : ka("generateAbstractIcon", z) || {
                        children: [],
                        attributes: {}
                    },
                    S = x.children,
                    E = x.attributes;
                return z.children = S, z.attributes = E, l ? function(e) {
                    var a = e.prefix,
                        t = e.iconName,
                        n = e.children,
                        i = e.attributes,
                        r = e.symbol,
                        o = !0 === r ? "".concat(a, "-").concat(we.cssPrefix, "-").concat(t) : r;
                    return [{
                        tag: "svg",
                        attributes: {
                            style: "display: none;"
                        },
                        children: [{
                            tag: "symbol",
                            attributes: v(v({}, i), {}, {
                                id: o
                            }),
                            children: n
                        }]
                    }]
                }(z) : function(e) {
                    var a = e.children,
                        t = e.main,
                        n = e.mask,
                        i = e.attributes,
                        r = e.styles,
                        o = e.transform;
                    if (je(o) && t.found && !n.found) {
                        var l = {
                            x: t.width / t.height / 2,
                            y: .5
                        };
                        i.style = Ne(v(v({}, r), {}, {
                            "transform-origin": "".concat(l.x + o.x / 16, "em ").concat(l.y + o.y / 16, "em")
                        }))
                    }
                    return [{
                        tag: "svg",
                        attributes: i,
                        children: a
                    }]
                }(z)
            }

            function Pa(e) {
                var a = e.content,
                    t = e.width,
                    n = e.height,
                    i = e.transform,
                    r = e.title,
                    o = e.extra,
                    l = e.watchable,
                    s = void 0 !== l && l,
                    u = v(v(v({}, o.attributes), r ? {
                        title: r
                    } : {}), {}, {
                        class: o.classes.join(" ")
                    });
                s && (u[q] = "");
                var c = v({}, o.styles);
                je(i) && (c.transform = function(e) {
                    var a = e.transform,
                        t = e.width,
                        n = void 0 === t ? 16 : t,
                        i = e.height,
                        r = void 0 === i ? 16 : i,
                        o = e.startCentered,
                        l = void 0 !== o && o,
                        s = "";
                    return s += l && H ? "translate(".concat(a.x / ze - n / 2, "em, ").concat(a.y / ze - r / 2, "em) ") : l ? "translate(calc(-50% + ".concat(a.x / ze, "em), calc(-50% + ").concat(a.y / ze, "em)) ") : "translate(".concat(a.x / ze, "em, ").concat(a.y / ze, "em) "), s += "scale(".concat(a.size / ze * (a.flipX ? -1 : 1), ", ").concat(a.size / ze * (a.flipY ? -1 : 1), ") "), s + "rotate(".concat(a.rotate, "deg) ")
                }({
                    transform: i,
                    startCentered: !0,
                    width: t,
                    height: n
                }), c["-webkit-transform"] = c.transform);
                var f = Ne(c);
                f.length > 0 && (u.style = f);
                var d = [];
                return d.push({
                    tag: "span",
                    attributes: u,
                    children: [a]
                }), r && d.push({
                    tag: "span",
                    attributes: {
                        class: "sr-only"
                    },
                    children: [r]
                }), d
            }

            function Ta(e) {
                var a = e.content,
                    t = e.title,
                    n = e.extra,
                    i = v(v(v({}, n.attributes), t ? {
                        title: t
                    } : {}), {}, {
                        class: n.classes.join(" ")
                    }),
                    r = Ne(n.styles);
                r.length > 0 && (i.style = r);
                var o = [];
                return o.push({
                    tag: "span",
                    attributes: i,
                    children: [a]
                }), t && o.push({
                    tag: "span",
                    attributes: {
                        class: "sr-only"
                    },
                    children: [t]
                }), o
            }
            var _a = Ae.styles;

            function La(e) {
                var a = e[0],
                    t = e[1],
                    n = w(e.slice(4), 1)[0];
                return {
                    found: !0,
                    width: a,
                    height: t,
                    icon: Array.isArray(n) ? {
                        tag: "g",
                        attributes: {
                            class: "".concat(we.cssPrefix, "-").concat(fe)
                        },
                        children: [{
                            tag: "path",
                            attributes: {
                                class: "".concat(we.cssPrefix, "-").concat(me),
                                fill: "currentColor",
                                d: n[0]
                            }
                        }, {
                            tag: "path",
                            attributes: {
                                class: "".concat(we.cssPrefix, "-").concat(pe),
                                fill: "currentColor",
                                d: n[1]
                            }
                        }]
                    } : {
                        tag: "path",
                        attributes: {
                            fill: "currentColor",
                            d: n
                        }
                    }
                }
            }
            var Ma = {
                found: !1,
                width: 512,
                height: 512
            };

            function Aa(e, a) {
                var t = a;
                return "fa" === a && null !== we.styleDefault && (a = ca()), new Promise((function(n, i) {
                    ka("missingIconAbstract");
                    if ("fa" === t) {
                        var r = ua(e) || {};
                        e = r.iconName || e, a = r.prefix || a
                    }
                    if (e && a && _a[a] && _a[a][e]) return n(La(_a[a][e]));
                    ! function(e, a) {
                        K || we.showMissingIcons || !e || console.error('Icon with name "'.concat(e, '" and prefix "').concat(a, '" is missing.'))
                    }(e, a), n(v(v({}, Ma), {}, {
                        icon: we.showMissingIcons && e && ka("missingIconAbstract") || {}
                    }))
                }))
            }
            var Ra = function() {},
                Da = we.measurePerformance && F && F.mark && F.measure ? F : {
                    mark: Ra,
                    measure: Ra
                },
                Ia = 'FA "6.3.0"',
                Fa = function(e) {
                    Da.mark("".concat(Ia, " ").concat(e, " ends")), Da.measure("".concat(Ia, " ").concat(e), "".concat(Ia, " ").concat(e, " begins"), "".concat(Ia, " ").concat(e, " ends"))
                },
                Ua = function(e) {
                    return Da.mark("".concat(Ia, " ").concat(e, " begins")),
                        function() {
                            return Fa(e)
                        }
                },
                Ha = function() {};

            function Va(e) {
                return "string" === typeof(e.getAttribute ? e.getAttribute(q) : null)
            }

            function qa(e) {
                return D.createElementNS("http://www.w3.org/2000/svg", e)
            }

            function Wa(e) {
                return D.createElement(e)
            }

            function Ba(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = a.ceFn,
                    n = void 0 === t ? "svg" === e.tag ? qa : Wa : t;
                if ("string" === typeof e) return D.createTextNode(e);
                var i = n(e.tag);
                Object.keys(e.attributes || []).forEach((function(a) {
                    i.setAttribute(a, e.attributes[a])
                }));
                var r = e.children || [];
                return r.forEach((function(e) {
                    i.appendChild(Ba(e, {
                        ceFn: n
                    }))
                })), i
            }
            var Ya = {
                replace: function(e) {
                    var a = e[0];
                    if (a.parentNode)
                        if (e[1].forEach((function(e) {
                                a.parentNode.insertBefore(Ba(e), a)
                            })), null === a.getAttribute(q) && we.keepOriginalSource) {
                            var t = D.createComment(function(e) {
                                var a = " ".concat(e.outerHTML, " ");
                                return "".concat(a, "Font Awesome fontawesome.com ")
                            }(a));
                            a.parentNode.replaceChild(t, a)
                        } else a.remove()
                },
                nest: function(e) {
                    var a = e[0],
                        t = e[1];
                    if (~Ce(a).indexOf(we.replacementClass)) return Ya.replace(e);
                    var n = new RegExp("".concat(we.cssPrefix, "-.*"));
                    if (delete t[0].attributes.id, t[0].attributes.class) {
                        var i = t[0].attributes.class.split(" ").reduce((function(e, a) {
                            return a === we.replacementClass || a.match(n) ? e.toSvg.push(a) : e.toNode.push(a), e
                        }), {
                            toNode: [],
                            toSvg: []
                        });
                        t[0].attributes.class = i.toSvg.join(" "), 0 === i.toNode.length ? a.removeAttribute("class") : a.setAttribute("class", i.toNode.join(" "))
                    }
                    var r = t.map((function(e) {
                        return Fe(e)
                    })).join("\n");
                    a.setAttribute(q, ""), a.innerHTML = r
                }
            };

            function $a(e) {
                e()
            }

            function Qa(e, a) {
                var t = "function" === typeof a ? a : Ha;
                if (0 === e.length) t();
                else {
                    var n = $a;
                    "async" === we.mutateApproach && (n = R.requestAnimationFrame || $a), n((function() {
                        var a = !0 === we.autoReplaceSvg ? Ya.replace : Ya[we.autoReplaceSvg] || Ya.replace,
                            n = Ua("mutate");
                        e.map(a), n(), t()
                    }))
                }
            }
            var Ka = !1;

            function Ga() {
                Ka = !0
            }

            function Xa() {
                Ka = !1
            }
            var Ja = null;

            function Za(e) {
                if (I && we.observeMutations) {
                    var a = e.treeCallback,
                        t = void 0 === a ? Ha : a,
                        n = e.nodeCallback,
                        i = void 0 === n ? Ha : n,
                        r = e.pseudoElementsCallback,
                        o = void 0 === r ? Ha : r,
                        l = e.observeMutationsRoot,
                        s = void 0 === l ? D : l;
                    Ja = new I((function(e) {
                        if (!Ka) {
                            var a = ca();
                            Ee(e).forEach((function(e) {
                                if ("childList" === e.type && e.addedNodes.length > 0 && !Va(e.addedNodes[0]) && (we.searchPseudoElements && o(e.target), t(e.target)), "attributes" === e.type && e.target.parentNode && we.searchPseudoElements && o(e.target.parentNode), "attributes" === e.type && Va(e.target) && ~ce.indexOf(e.attributeName))
                                    if ("class" === e.attributeName && function(e) {
                                            var a = e.getAttribute ? e.getAttribute(B) : null,
                                                t = e.getAttribute ? e.getAttribute(Y) : null;
                                            return a && t
                                        }(e.target)) {
                                        var n = pa(Ce(e.target)),
                                            r = n.prefix,
                                            l = n.iconName;
                                        e.target.setAttribute(B, r || a), l && e.target.setAttribute(Y, l)
                                    } else(s = e.target) && s.classList && s.classList.contains && s.classList.contains(we.replacementClass) && i(e.target);
                                var s
                            }))
                        }
                    })), U && Ja.observe(s, {
                        childList: !0,
                        attributes: !0,
                        characterData: !0,
                        subtree: !0
                    })
                }
            }

            function et(e) {
                var a = e.getAttribute("style"),
                    t = [];
                return a && (t = a.split(";").reduce((function(e, a) {
                    var t = a.split(":"),
                        n = t[0],
                        i = t.slice(1);
                    return n && i.length > 0 && (e[n] = i.join(":").trim()), e
                }), {})), t
            }

            function at(e) {
                var a = e.getAttribute("data-prefix"),
                    t = e.getAttribute("data-icon"),
                    n = void 0 !== e.innerText ? e.innerText.trim() : "",
                    i = pa(Ce(e));
                return i.prefix || (i.prefix = ca()), a && t && (i.prefix = a, i.iconName = t), i.iconName && i.prefix || (i.prefix && n.length > 0 && (i.iconName = function(e, a) {
                    return (Ze[e] || {})[a]
                }(i.prefix, e.innerText) || la(i.prefix, Ve(e.innerText))), !i.iconName && we.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i
            }

            function tt(e) {
                var a = Ee(e.attributes).reduce((function(e, a) {
                        return "class" !== e.name && "style" !== e.name && (e[a.name] = a.value), e
                    }), {}),
                    t = e.getAttribute("title"),
                    n = e.getAttribute("data-fa-title-id");
                return we.autoA11y && (t ? a["aria-labelledby"] = "".concat(we.replacementClass, "-title-").concat(n || Se()) : (a["aria-hidden"] = "true", a.focusable = "false")), a
            }

            function nt(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        styleParser: !0
                    },
                    t = at(e),
                    n = t.iconName,
                    i = t.prefix,
                    r = t.rest,
                    o = tt(e),
                    l = ya("parseNodeAttributes", {}, e),
                    s = a.styleParser ? et(e) : [];
                return v({
                    iconName: n,
                    title: e.getAttribute("title"),
                    titleId: e.getAttribute("data-fa-title-id"),
                    prefix: i,
                    transform: xe,
                    mask: {
                        iconName: null,
                        prefix: null,
                        rest: []
                    },
                    maskId: null,
                    symbol: !1,
                    extra: {
                        classes: r,
                        styles: s,
                        attributes: o
                    }
                }, l)
            }
            var it = Ae.styles;

            function rt(e) {
                var a = "nest" === we.autoReplaceSvg ? nt(e, {
                    styleParser: !1
                }) : nt(e);
                return ~a.extra.classes.indexOf(re) ? ka("generateLayersText", e, a) : ka("generateSvgReplacementMutation", e, a)
            }
            var ot = new Set;

            function lt(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (!U) return Promise.resolve();
                var t = D.documentElement.classList,
                    n = function(e) {
                        return t.add("".concat($, "-").concat(e))
                    },
                    i = function(e) {
                        return t.remove("".concat($, "-").concat(e))
                    },
                    r = we.autoFetchSvg ? ot : J.map((function(e) {
                        return "fa-".concat(e)
                    })).concat(Object.keys(it));
                r.includes("fa") || r.push("fa");
                var o = [".".concat(re, ":not([").concat(q, "])")].concat(r.map((function(e) {
                    return ".".concat(e, ":not([").concat(q, "])")
                }))).join(", ");
                if (0 === o.length) return Promise.resolve();
                var l = [];
                try {
                    l = Ee(e.querySelectorAll(o))
                } catch (Nr) {}
                if (!(l.length > 0)) return Promise.resolve();
                n("pending"), i("complete");
                var s = Ua("onTree"),
                    u = l.reduce((function(e, a) {
                        try {
                            var t = rt(a);
                            t && e.push(t)
                        } catch (Nr) {
                            K || "MissingIcon" === Nr.name && console.error(Nr)
                        }
                        return e
                    }), []);
                return new Promise((function(e, t) {
                    Promise.all(u).then((function(t) {
                        Qa(t, (function() {
                            n("active"), n("complete"), i("pending"), "function" === typeof a && a(), s(), e()
                        }))
                    })).catch((function(e) {
                        s(), t(e)
                    }))
                }))
            }

            function st(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                rt(e).then((function(e) {
                    e && Qa([e], a)
                }))
            }
            J.map((function(e) {
                ot.add("fa-".concat(e))
            })), Object.keys(ee.classic).map(ot.add.bind(ot)), Object.keys(ee.sharp).map(ot.add.bind(ot)), ot = k(ot);
            var ut = function(e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = a.transform,
                        n = void 0 === t ? xe : t,
                        i = a.symbol,
                        r = void 0 !== i && i,
                        o = a.mask,
                        l = void 0 === o ? null : o,
                        s = a.maskId,
                        u = void 0 === s ? null : s,
                        c = a.title,
                        f = void 0 === c ? null : c,
                        d = a.titleId,
                        p = void 0 === d ? null : d,
                        m = a.classes,
                        g = void 0 === m ? [] : m,
                        b = a.attributes,
                        h = void 0 === b ? {} : b,
                        y = a.styles,
                        w = void 0 === y ? {} : y;
                    if (e) {
                        var k = e.prefix,
                            z = e.iconName,
                            x = e.icon;
                        return Na(v({
                            type: "icon"
                        }, e), (function() {
                            return wa("beforeDOMElementCreation", {
                                iconDefinition: e,
                                params: a
                            }), we.autoA11y && (f ? h["aria-labelledby"] = "".concat(we.replacementClass, "-title-").concat(p || Se()) : (h["aria-hidden"] = "true", h.focusable = "false")), ja({
                                icons: {
                                    main: La(x),
                                    mask: l ? La(l.icon) : {
                                        found: !1,
                                        width: null,
                                        height: null,
                                        icon: {}
                                    }
                                },
                                prefix: k,
                                iconName: z,
                                transform: v(v({}, xe), n),
                                symbol: r,
                                title: f,
                                maskId: u,
                                titleId: p,
                                extra: {
                                    attributes: h,
                                    styles: w,
                                    classes: g
                                }
                            })
                        }))
                    }
                },
                ct = {
                    mixout: function() {
                        return {
                            icon: (e = ut, function(a) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = (a || {}).icon ? a : za(a || {}),
                                    i = t.mask;
                                return i && (i = (i || {}).icon ? i : za(i || {})), e(n, v(v({}, t), {}, {
                                    mask: i
                                }))
                            })
                        };
                        var e
                    },
                    hooks: function() {
                        return {
                            mutationObserverCallbacks: function(e) {
                                return e.treeCallback = lt, e.nodeCallback = st, e
                            }
                        }
                    },
                    provides: function(e) {
                        e.i2svg = function(e) {
                            var a = e.node,
                                t = void 0 === a ? D : a,
                                n = e.callback;
                            return lt(t, void 0 === n ? function() {} : n)
                        }, e.generateSvgReplacementMutation = function(e, a) {
                            var t = a.iconName,
                                n = a.title,
                                i = a.titleId,
                                r = a.prefix,
                                o = a.transform,
                                l = a.symbol,
                                s = a.mask,
                                u = a.maskId,
                                c = a.extra;
                            return new Promise((function(a, f) {
                                Promise.all([Aa(t, r), s.iconName ? Aa(s.iconName, s.prefix) : Promise.resolve({
                                    found: !1,
                                    width: 512,
                                    height: 512,
                                    icon: {}
                                })]).then((function(s) {
                                    var f = w(s, 2),
                                        d = f[0],
                                        p = f[1];
                                    a([e, ja({
                                        icons: {
                                            main: d,
                                            mask: p
                                        },
                                        prefix: r,
                                        iconName: t,
                                        transform: o,
                                        symbol: l,
                                        maskId: u,
                                        title: n,
                                        titleId: i,
                                        extra: c,
                                        watchable: !0
                                    })])
                                })).catch(f)
                            }))
                        }, e.generateAbstractIcon = function(e) {
                            var a, t = e.children,
                                n = e.attributes,
                                i = e.main,
                                r = e.transform,
                                o = Ne(e.styles);
                            return o.length > 0 && (n.style = o), je(r) && (a = ka("generateAbstractTransformGrouping", {
                                main: i,
                                transform: r,
                                containerWidth: i.width,
                                iconWidth: i.width
                            })), t.push(a || i.icon), {
                                children: t,
                                attributes: n
                            }
                        }
                    }
                },
                ft = {
                    mixout: function() {
                        return {
                            layer: function(e) {
                                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    t = a.classes,
                                    n = void 0 === t ? [] : t;
                                return Na({
                                    type: "layer"
                                }, (function() {
                                    wa("beforeDOMElementCreation", {
                                        assembler: e,
                                        params: a
                                    });
                                    var t = [];
                                    return e((function(e) {
                                        Array.isArray(e) ? e.map((function(e) {
                                            t = t.concat(e.abstract)
                                        })) : t = t.concat(e.abstract)
                                    })), [{
                                        tag: "span",
                                        attributes: {
                                            class: ["".concat(we.cssPrefix, "-layers")].concat(k(n)).join(" ")
                                        },
                                        children: t
                                    }]
                                }))
                            }
                        }
                    }
                },
                dt = {
                    mixout: function() {
                        return {
                            counter: function(e) {
                                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    t = a.title,
                                    n = void 0 === t ? null : t,
                                    i = a.classes,
                                    r = void 0 === i ? [] : i,
                                    o = a.attributes,
                                    l = void 0 === o ? {} : o,
                                    s = a.styles,
                                    u = void 0 === s ? {} : s;
                                return Na({
                                    type: "counter",
                                    content: e
                                }, (function() {
                                    return wa("beforeDOMElementCreation", {
                                        content: e,
                                        params: a
                                    }), Ta({
                                        content: e.toString(),
                                        title: n,
                                        extra: {
                                            attributes: l,
                                            styles: u,
                                            classes: ["".concat(we.cssPrefix, "-layers-counter")].concat(k(r))
                                        }
                                    })
                                }))
                            }
                        }
                    }
                },
                pt = {
                    mixout: function() {
                        return {
                            text: function(e) {
                                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    t = a.transform,
                                    n = void 0 === t ? xe : t,
                                    i = a.title,
                                    r = void 0 === i ? null : i,
                                    o = a.classes,
                                    l = void 0 === o ? [] : o,
                                    s = a.attributes,
                                    u = void 0 === s ? {} : s,
                                    c = a.styles,
                                    f = void 0 === c ? {} : c;
                                return Na({
                                    type: "text",
                                    content: e
                                }, (function() {
                                    return wa("beforeDOMElementCreation", {
                                        content: e,
                                        params: a
                                    }), Pa({
                                        content: e,
                                        transform: v(v({}, xe), n),
                                        title: r,
                                        extra: {
                                            attributes: u,
                                            styles: f,
                                            classes: ["".concat(we.cssPrefix, "-layers-text")].concat(k(l))
                                        }
                                    })
                                }))
                            }
                        }
                    },
                    provides: function(e) {
                        e.generateLayersText = function(e, a) {
                            var t = a.title,
                                n = a.transform,
                                i = a.extra,
                                r = null,
                                o = null;
                            if (H) {
                                var l = parseInt(getComputedStyle(e).fontSize, 10),
                                    s = e.getBoundingClientRect();
                                r = s.width / l, o = s.height / l
                            }
                            return we.autoA11y && !t && (i.attributes["aria-hidden"] = "true"), Promise.resolve([e, Pa({
                                content: e.innerHTML,
                                width: r,
                                height: o,
                                transform: n,
                                title: t,
                                extra: i,
                                watchable: !0
                            })])
                        }
                    }
                },
                mt = new RegExp('"', "ug"),
                gt = [1105920, 1112319];

            function vt(e, a) {
                var t = "".concat("data-fa-pseudo-element-pending").concat(a.replace(":", "-"));
                return new Promise((function(n, i) {
                    if (null !== e.getAttribute(t)) return n();
                    var r = Ee(e.children).filter((function(e) {
                            return e.getAttribute(W) === a
                        }))[0],
                        o = R.getComputedStyle(e, a),
                        l = o.getPropertyValue("font-family").match(oe),
                        s = o.getPropertyValue("font-weight"),
                        u = o.getPropertyValue("content");
                    if (r && !l) return e.removeChild(r), n();
                    if (l && "none" !== u && "" !== u) {
                        var c = o.getPropertyValue("content"),
                            f = ~["Sharp"].indexOf(l[2]) ? X : G,
                            d = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? ae[f][l[2].toLowerCase()] : le[f][s],
                            p = function(e) {
                                var a = e.replace(mt, ""),
                                    t = function(e, a) {
                                        var t, n = e.length,
                                            i = e.charCodeAt(a);
                                        return i >= 55296 && i <= 56319 && n > a + 1 && (t = e.charCodeAt(a + 1)) >= 56320 && t <= 57343 ? 1024 * (i - 55296) + t - 56320 + 65536 : i
                                    }(a, 0),
                                    n = t >= gt[0] && t <= gt[1],
                                    i = 2 === a.length && a[0] === a[1];
                                return {
                                    value: Ve(i ? a[0] : a),
                                    isSecondary: n || i
                                }
                            }(c),
                            m = p.value,
                            g = p.isSecondary,
                            b = l[0].startsWith("FontAwesome"),
                            h = la(d, m),
                            y = h;
                        if (b) {
                            var w = function(e) {
                                var a = aa[e],
                                    t = la("fas", e);
                                return a || (t ? {
                                    prefix: "fas",
                                    iconName: t
                                } : null) || {
                                    prefix: null,
                                    iconName: null
                                }
                            }(m);
                            w.iconName && w.prefix && (h = w.iconName, d = w.prefix)
                        }
                        if (!h || g || r && r.getAttribute(B) === d && r.getAttribute(Y) === y) n();
                        else {
                            e.setAttribute(t, y), r && e.removeChild(r);
                            var k = {
                                    iconName: null,
                                    title: null,
                                    titleId: null,
                                    prefix: null,
                                    transform: xe,
                                    symbol: !1,
                                    mask: {
                                        iconName: null,
                                        prefix: null,
                                        rest: []
                                    },
                                    maskId: null,
                                    extra: {
                                        classes: [],
                                        styles: {},
                                        attributes: {}
                                    }
                                },
                                z = k.extra;
                            z.attributes[W] = a, Aa(h, d).then((function(i) {
                                var r = ja(v(v({}, k), {}, {
                                        icons: {
                                            main: i,
                                            mask: {
                                                prefix: null,
                                                iconName: null,
                                                rest: []
                                            }
                                        },
                                        prefix: d,
                                        iconName: y,
                                        extra: z,
                                        watchable: !0
                                    })),
                                    o = D.createElement("svg");
                                "::before" === a ? e.insertBefore(o, e.firstChild) : e.appendChild(o), o.outerHTML = r.map((function(e) {
                                    return Fe(e)
                                })).join("\n"), e.removeAttribute(t), n()
                            })).catch(i)
                        }
                    } else n()
                }))
            }

            function bt(e) {
                return Promise.all([vt(e, "::before"), vt(e, "::after")])
            }

            function ht(e) {
                return e.parentNode !== document.head && !~Q.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(W) && (!e.parentNode || "svg" !== e.parentNode.tagName)
            }

            function yt(e) {
                if (U) return new Promise((function(a, t) {
                    var n = Ee(e.querySelectorAll("*")).filter(ht).map(bt),
                        i = Ua("searchPseudoElements");
                    Ga(), Promise.all(n).then((function() {
                        i(), Xa(), a()
                    })).catch((function() {
                        i(), Xa(), t()
                    }))
                }))
            }
            var wt = !1,
                kt = function(e) {
                    return e.toLowerCase().split(" ").reduce((function(e, a) {
                        var t = a.toLowerCase().split("-"),
                            n = t[0],
                            i = t.slice(1).join("-");
                        if (n && "h" === i) return e.flipX = !0, e;
                        if (n && "v" === i) return e.flipY = !0, e;
                        if (i = parseFloat(i), isNaN(i)) return e;
                        switch (n) {
                            case "grow":
                                e.size = e.size + i;
                                break;
                            case "shrink":
                                e.size = e.size - i;
                                break;
                            case "left":
                                e.x = e.x - i;
                                break;
                            case "right":
                                e.x = e.x + i;
                                break;
                            case "up":
                                e.y = e.y - i;
                                break;
                            case "down":
                                e.y = e.y + i;
                                break;
                            case "rotate":
                                e.rotate = e.rotate + i
                        }
                        return e
                    }), {
                        size: 16,
                        x: 0,
                        y: 0,
                        flipX: !1,
                        flipY: !1,
                        rotate: 0
                    })
                },
                zt = {
                    mixout: function() {
                        return {
                            parse: {
                                transform: function(e) {
                                    return kt(e)
                                }
                            }
                        }
                    },
                    hooks: function() {
                        return {
                            parseNodeAttributes: function(e, a) {
                                var t = a.getAttribute("data-fa-transform");
                                return t && (e.transform = kt(t)), e
                            }
                        }
                    },
                    provides: function(e) {
                        e.generateAbstractTransformGrouping = function(e) {
                            var a = e.main,
                                t = e.transform,
                                n = e.containerWidth,
                                i = e.iconWidth,
                                r = {
                                    transform: "translate(".concat(n / 2, " 256)")
                                },
                                o = "translate(".concat(32 * t.x, ", ").concat(32 * t.y, ") "),
                                l = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "),
                                s = "rotate(".concat(t.rotate, " 0 0)"),
                                u = {
                                    outer: r,
                                    inner: {
                                        transform: "".concat(o, " ").concat(l, " ").concat(s)
                                    },
                                    path: {
                                        transform: "translate(".concat(i / 2 * -1, " -256)")
                                    }
                                };
                            return {
                                tag: "g",
                                attributes: v({}, u.outer),
                                children: [{
                                    tag: "g",
                                    attributes: v({}, u.inner),
                                    children: [{
                                        tag: a.icon.tag,
                                        children: a.icon.children,
                                        attributes: v(v({}, a.icon.attributes), u.path)
                                    }]
                                }]
                            }
                        }
                    }
                },
                xt = {
                    x: 0,
                    y: 0,
                    width: "100%",
                    height: "100%"
                };

            function St(e) {
                var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return e.attributes && (e.attributes.fill || a) && (e.attributes.fill = "black"), e
            }
            var Et = {
                    hooks: function() {
                        return {
                            parseNodeAttributes: function(e, a) {
                                var t = a.getAttribute("data-fa-mask"),
                                    n = t ? pa(t.split(" ").map((function(e) {
                                        return e.trim()
                                    }))) : {
                                        prefix: null,
                                        iconName: null,
                                        rest: []
                                    };
                                return n.prefix || (n.prefix = ca()), e.mask = n, e.maskId = a.getAttribute("data-fa-mask-id"), e
                            }
                        }
                    },
                    provides: function(e) {
                        e.generateAbstractMask = function(e) {
                            var a, t = e.children,
                                n = e.attributes,
                                i = e.main,
                                r = e.mask,
                                o = e.maskId,
                                l = e.transform,
                                s = i.width,
                                u = i.icon,
                                c = r.width,
                                f = r.icon,
                                d = function(e) {
                                    var a = e.transform,
                                        t = e.containerWidth,
                                        n = e.iconWidth,
                                        i = {
                                            transform: "translate(".concat(t / 2, " 256)")
                                        },
                                        r = "translate(".concat(32 * a.x, ", ").concat(32 * a.y, ") "),
                                        o = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "),
                                        l = "rotate(".concat(a.rotate, " 0 0)");
                                    return {
                                        outer: i,
                                        inner: {
                                            transform: "".concat(r, " ").concat(o, " ").concat(l)
                                        },
                                        path: {
                                            transform: "translate(".concat(n / 2 * -1, " -256)")
                                        }
                                    }
                                }({
                                    transform: l,
                                    containerWidth: c,
                                    iconWidth: s
                                }),
                                p = {
                                    tag: "rect",
                                    attributes: v(v({}, xt), {}, {
                                        fill: "white"
                                    })
                                },
                                m = u.children ? {
                                    children: u.children.map(St)
                                } : {},
                                g = {
                                    tag: "g",
                                    attributes: v({}, d.inner),
                                    children: [St(v({
                                        tag: u.tag,
                                        attributes: v(v({}, u.attributes), d.path)
                                    }, m))]
                                },
                                b = {
                                    tag: "g",
                                    attributes: v({}, d.outer),
                                    children: [g]
                                },
                                h = "mask-".concat(o || Se()),
                                y = "clip-".concat(o || Se()),
                                w = {
                                    tag: "mask",
                                    attributes: v(v({}, xt), {}, {
                                        id: h,
                                        maskUnits: "userSpaceOnUse",
                                        maskContentUnits: "userSpaceOnUse"
                                    }),
                                    children: [p, b]
                                },
                                k = {
                                    tag: "defs",
                                    children: [{
                                        tag: "clipPath",
                                        attributes: {
                                            id: y
                                        },
                                        children: (a = f, "g" === a.tag ? a.children : [a])
                                    }, w]
                                };
                            return t.push(k, {
                                tag: "rect",
                                attributes: v({
                                    fill: "currentColor",
                                    "clip-path": "url(#".concat(y, ")"),
                                    mask: "url(#".concat(h, ")")
                                }, xt)
                            }), {
                                children: t,
                                attributes: n
                            }
                        }
                    }
                },
                Ct = {
                    provides: function(e) {
                        var a = !1;
                        R.matchMedia && (a = R.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
                            var e = [],
                                t = {
                                    fill: "currentColor"
                                },
                                n = {
                                    attributeType: "XML",
                                    repeatCount: "indefinite",
                                    dur: "2s"
                                };
                            e.push({
                                tag: "path",
                                attributes: v(v({}, t), {}, {
                                    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                                })
                            });
                            var i = v(v({}, n), {}, {
                                    attributeName: "opacity"
                                }),
                                r = {
                                    tag: "circle",
                                    attributes: v(v({}, t), {}, {
                                        cx: "256",
                                        cy: "364",
                                        r: "28"
                                    }),
                                    children: []
                                };
                            return a || r.children.push({
                                tag: "animate",
                                attributes: v(v({}, n), {}, {
                                    attributeName: "r",
                                    values: "28;14;28;28;14;28;"
                                })
                            }, {
                                tag: "animate",
                                attributes: v(v({}, i), {}, {
                                    values: "1;0;1;1;0;1;"
                                })
                            }), e.push(r), e.push({
                                tag: "path",
                                attributes: v(v({}, t), {}, {
                                    opacity: "1",
                                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                                }),
                                children: a ? [] : [{
                                    tag: "animate",
                                    attributes: v(v({}, i), {}, {
                                        values: "1;0;0;0;0;1;"
                                    })
                                }]
                            }), a || e.push({
                                tag: "path",
                                attributes: v(v({}, t), {}, {
                                    opacity: "0",
                                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                                }),
                                children: [{
                                    tag: "animate",
                                    attributes: v(v({}, i), {}, {
                                        values: "0;0;1;1;0;0;"
                                    })
                                }]
                            }), {
                                tag: "g",
                                attributes: {
                                    class: "missing"
                                },
                                children: e
                            }
                        }
                    }
                };
            ! function(e, a) {
                var t = a.mixoutsTo;
                ga = e, va = {}, Object.keys(ba).forEach((function(e) {
                    -1 === ha.indexOf(e) && delete ba[e]
                })), ga.forEach((function(e) {
                    var a = e.mixout ? e.mixout() : {};
                    if (Object.keys(a).forEach((function(e) {
                            "function" === typeof a[e] && (t[e] = a[e]), "object" === b(a[e]) && Object.keys(a[e]).forEach((function(n) {
                                t[e] || (t[e] = {}), t[e][n] = a[e][n]
                            }))
                        })), e.hooks) {
                        var n = e.hooks();
                        Object.keys(n).forEach((function(e) {
                            va[e] || (va[e] = []), va[e].push(n[e])
                        }))
                    }
                    e.provides && e.provides(ba)
                }))
            }([Le, ct, ft, dt, pt, {
                hooks: function() {
                    return {
                        mutationObserverCallbacks: function(e) {
                            return e.pseudoElementsCallback = yt, e
                        }
                    }
                },
                provides: function(e) {
                    e.pseudoElements2svg = function(e) {
                        var a = e.node,
                            t = void 0 === a ? D : a;
                        we.searchPseudoElements && yt(t)
                    }
                }
            }, {
                mixout: function() {
                    return {
                        dom: {
                            unwatch: function() {
                                Ga(), wt = !0
                            }
                        }
                    }
                },
                hooks: function() {
                    return {
                        bootstrap: function() {
                            Za(ya("mutationObserverCallbacks", {}))
                        },
                        noAuto: function() {
                            Ja && Ja.disconnect()
                        },
                        watch: function(e) {
                            var a = e.observeMutationsRoot;
                            wt ? Xa() : Za(ya("mutationObserverCallbacks", {
                                observeMutationsRoot: a
                            }))
                        }
                    }
                }
            }, zt, Et, Ct, {
                hooks: function() {
                    return {
                        parseNodeAttributes: function(e, a) {
                            var t = a.getAttribute("data-fa-symbol"),
                                n = null !== t && ("" === t || t);
                            return e.symbol = n, e
                        }
                    }
                }
            }], {
                mixoutsTo: Ca
            });
            var Ot = Ca.parse,
                Nt = Ca.icon,
                jt = t(7),
                Pt = t.n(jt);

            function Tt(e, a) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    a && (n = n.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function _t(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var t = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? Tt(Object(t), !0).forEach((function(a) {
                        Mt(e, a, t[a])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Tt(Object(t)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
                    }))
                }
                return e
            }

            function Lt(e) {
                return Lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, Lt(e)
            }

            function Mt(e, a, t) {
                return a in e ? Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = t, e
            }

            function At(e, a) {
                if (null == e) return {};
                var t, n, i = function(e, a) {
                    if (null == e) return {};
                    var t, n, i = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) t = r[n], a.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i
                }(e, a);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) t = r[n], a.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                }
                return i
            }

            function Rt(e) {
                return function(e) {
                    if (Array.isArray(e)) return Dt(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, a) {
                    if (!e) return;
                    if ("string" === typeof e) return Dt(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Dt(e, a)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Dt(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, n = new Array(a); t < a; t++) n[t] = e[t];
                return n
            }

            function It(e) {
                return a = e, (a -= 0) === a ? e : (e = e.replace(/[\-_\s]+(.)?/g, (function(e, a) {
                    return a ? a.toUpperCase() : ""
                }))).substr(0, 1).toLowerCase() + e.substr(1);
                var a
            }
            var Ft = ["style"];

            function Ut(e) {
                return e.split(";").map((function(e) {
                    return e.trim()
                })).filter((function(e) {
                    return e
                })).reduce((function(e, a) {
                    var t, n = a.indexOf(":"),
                        i = It(a.slice(0, n)),
                        r = a.slice(n + 1).trim();
                    return i.startsWith("webkit") ? e[(t = i, t.charAt(0).toUpperCase() + t.slice(1))] = r : e[i] = r, e
                }), {})
            }
            var Ht = !1;
            try {
                Ht = !0
            } catch (Nr) {}

            function Vt(e) {
                return e && "object" === Lt(e) && e.prefix && e.iconName && e.icon ? e : Ot.icon ? Ot.icon(e) : null === e ? null : e && "object" === Lt(e) && e.prefix && e.iconName ? e : Array.isArray(e) && 2 === e.length ? {
                    prefix: e[0],
                    iconName: e[1]
                } : "string" === typeof e ? {
                    prefix: "fas",
                    iconName: e
                } : void 0
            }

            function qt(e, a) {
                return Array.isArray(a) && a.length > 0 || !Array.isArray(a) && a ? Mt({}, e, a) : {}
            }
            var Wt = e.forwardRef((function(e, a) {
                var t = e.icon,
                    n = e.mask,
                    i = e.symbol,
                    r = e.className,
                    o = e.title,
                    l = e.titleId,
                    s = e.maskId,
                    u = Vt(t),
                    c = qt("classes", [].concat(Rt(function(e) {
                        var a, t = e.beat,
                            n = e.fade,
                            i = e.beatFade,
                            r = e.bounce,
                            o = e.shake,
                            l = e.flash,
                            s = e.spin,
                            u = e.spinPulse,
                            c = e.spinReverse,
                            f = e.pulse,
                            d = e.fixedWidth,
                            p = e.inverse,
                            m = e.border,
                            g = e.listItem,
                            v = e.flip,
                            b = e.size,
                            h = e.rotation,
                            y = e.pull,
                            w = (Mt(a = {
                                "fa-beat": t,
                                "fa-fade": n,
                                "fa-beat-fade": i,
                                "fa-bounce": r,
                                "fa-shake": o,
                                "fa-flash": l,
                                "fa-spin": s,
                                "fa-spin-reverse": c,
                                "fa-spin-pulse": u,
                                "fa-pulse": f,
                                "fa-fw": d,
                                "fa-inverse": p,
                                "fa-border": m,
                                "fa-li": g,
                                "fa-flip": !0 === v,
                                "fa-flip-horizontal": "horizontal" === v || "both" === v,
                                "fa-flip-vertical": "vertical" === v || "both" === v
                            }, "fa-".concat(b), "undefined" !== typeof b && null !== b), Mt(a, "fa-rotate-".concat(h), "undefined" !== typeof h && null !== h && 0 !== h), Mt(a, "fa-pull-".concat(y), "undefined" !== typeof y && null !== y), Mt(a, "fa-swap-opacity", e.swapOpacity), a);
                        return Object.keys(w).map((function(e) {
                            return w[e] ? e : null
                        })).filter((function(e) {
                            return e
                        }))
                    }(e)), Rt(r.split(" ")))),
                    f = qt("transform", "string" === typeof e.transform ? Ot.transform(e.transform) : e.transform),
                    d = qt("mask", Vt(n)),
                    p = Nt(u, _t(_t(_t(_t({}, c), f), d), {}, {
                        symbol: i,
                        title: o,
                        titleId: l,
                        maskId: s
                    }));
                if (!p) return function() {
                    var e;
                    !Ht && console && "function" === typeof console.error && (e = console).error.apply(e, arguments)
                }("Could not find icon", u), null;
                var m = p.abstract,
                    g = {
                        ref: a
                    };
                return Object.keys(e).forEach((function(a) {
                    Wt.defaultProps.hasOwnProperty(a) || (g[a] = e[a])
                })), $t(m[0], g)
            }));
            Wt.displayName = "FontAwesomeIcon", Wt.propTypes = {
                beat: Pt().bool,
                border: Pt().bool,
                beatFade: Pt().bool,
                bounce: Pt().bool,
                className: Pt().string,
                fade: Pt().bool,
                flash: Pt().bool,
                mask: Pt().oneOfType([Pt().object, Pt().array, Pt().string]),
                maskId: Pt().string,
                fixedWidth: Pt().bool,
                inverse: Pt().bool,
                flip: Pt().oneOf([!0, !1, "horizontal", "vertical", "both"]),
                icon: Pt().oneOfType([Pt().object, Pt().array, Pt().string]),
                listItem: Pt().bool,
                pull: Pt().oneOf(["right", "left"]),
                pulse: Pt().bool,
                rotation: Pt().oneOf([0, 90, 180, 270]),
                shake: Pt().bool,
                size: Pt().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
                spin: Pt().bool,
                spinPulse: Pt().bool,
                spinReverse: Pt().bool,
                symbol: Pt().oneOfType([Pt().bool, Pt().string]),
                title: Pt().string,
                titleId: Pt().string,
                transform: Pt().oneOfType([Pt().string, Pt().object]),
                swapOpacity: Pt().bool
            }, Wt.defaultProps = {
                border: !1,
                className: "",
                mask: null,
                maskId: null,
                fixedWidth: !1,
                inverse: !1,
                flip: !1,
                icon: null,
                listItem: !1,
                pull: null,
                pulse: !1,
                rotation: null,
                size: null,
                spin: !1,
                spinPulse: !1,
                spinReverse: !1,
                beat: !1,
                fade: !1,
                beatFade: !1,
                bounce: !1,
                shake: !1,
                symbol: !1,
                title: "",
                titleId: null,
                transform: null,
                swapOpacity: !1
            };
            var Bt, Yt, $t = function e(a, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("string" === typeof t) return t;
                var i = (t.children || []).map((function(t) {
                        return e(a, t)
                    })),
                    r = Object.keys(t.attributes || {}).reduce((function(e, a) {
                        var n = t.attributes[a];
                        switch (a) {
                            case "class":
                                e.attrs.className = n, delete t.attributes.class;
                                break;
                            case "style":
                                e.attrs.style = Ut(n);
                                break;
                            default:
                                0 === a.indexOf("aria-") || 0 === a.indexOf("data-") ? e.attrs[a.toLowerCase()] = n : e.attrs[It(a)] = n
                        }
                        return e
                    }), {
                        attrs: {}
                    }),
                    o = n.style,
                    l = void 0 === o ? {} : o,
                    s = At(n, Ft);
                return r.attrs.style = _t(_t({}, r.attrs.style), l), a.apply(void 0, [t.tag, _t(_t({}, r.attrs), s)].concat(Rt(i)))
            }.bind(null, e.createElement);

            function Qt() {
                return Qt = Object.assign || function(e) {
                    for (var a = 1; a < arguments.length; a++) {
                        var t = arguments[a];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }, Qt.apply(this, arguments)
            }

            function Kt(e, a) {
                if (null == e) return {};
                var t, n, i = {},
                    r = Object.keys(e);
                for (n = 0; n < r.length; n++) t = r[n], a.indexOf(t) >= 0 || (i[t] = e[t]);
                return i
            }

            function Gt(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, n = new Array(a); t < a; t++) n[t] = e[t];
                return n
            }

            function Xt(e, a) {
                var t;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (t = function(e, a) {
                            if (e) {
                                if ("string" === typeof e) return Gt(e, a);
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Gt(e, a) : void 0
                            }
                        }(e)) || a && e && "number" === typeof e.length) {
                        t && (e = t);
                        var n = 0;
                        return function() {
                            return n >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[n++]
                            }
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                return (t = e[Symbol.iterator]()).next.bind(t)
            }

            function Jt(e, a) {
                if (e in a) {
                    for (var t = a[e], n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) i[r - 2] = arguments[r];
                    return "function" === typeof t ? t.apply(void 0, i) : t
                }
                var o = new Error('Tried to handle "' + e + '" but there is no handler defined. Only defined handlers are: ' + Object.keys(a).map((function(e) {
                    return '"' + e + '"'
                })).join(", ") + ".");
                throw Error.captureStackTrace && Error.captureStackTrace(o, Jt), o
            }

            function Zt(e) {
                var a = e.props,
                    t = e.slot,
                    n = e.defaultTag,
                    i = e.features,
                    r = e.visible,
                    o = void 0 === r || r,
                    l = e.name;
                if (o) return en(a, t, n, l);
                var s = null != i ? i : Bt.None;
                if (s & Bt.Static) {
                    var u = a.static,
                        c = void 0 !== u && u,
                        f = Kt(a, ["static"]);
                    if (c) return en(f, t, n, l)
                }
                if (s & Bt.RenderStrategy) {
                    var d, p = a.unmount,
                        m = void 0 === p || p,
                        g = Kt(a, ["unmount"]);
                    return Jt(m ? Yt.Unmount : Yt.Hidden, ((d = {})[Yt.Unmount] = function() {
                        return null
                    }, d[Yt.Hidden] = function() {
                        return en(Qt({}, g, {
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }), t, n, l)
                    }, d))
                }
                return en(a, t, n, l)
            }

            function en(a, t, n, i) {
                var r;
                void 0 === t && (t = {});
                var o = tn(a, ["unmount", "static"]),
                    l = o.as,
                    s = void 0 === l ? n : l,
                    u = o.children,
                    c = o.refName,
                    f = void 0 === c ? "ref" : c,
                    d = Kt(o, ["as", "children", "refName"]),
                    p = void 0 !== a.ref ? ((r = {})[f] = a.ref, r) : {},
                    m = "function" === typeof u ? u(t) : u;
                if (d.className && "function" === typeof d.className && (d.className = d.className(t)), s === e.Fragment && Object.keys(d).length > 0) {
                    if (!(0, e.isValidElement)(m) || Array.isArray(m) && m.length > 1) throw new Error(['Passing props on "Fragment"!', "", "The current component <" + i + ' /> is rendering a "Fragment".', "However we need to passthrough the following props:", Object.keys(d).map((function(e) {
                        return "  - " + e
                    })).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((function(e) {
                        return "  - " + e
                    })).join("\n")].join("\n"));
                    return (0, e.cloneElement)(m, Object.assign({}, function(e, a, t) {
                        for (var n, i = Object.assign({}, e), r = function() {
                                var t, r = n.value;
                                void 0 !== e[r] && void 0 !== a[r] && Object.assign(i, ((t = {})[r] = function(t) {
                                    t.defaultPrevented || e[r](t), t.defaultPrevented || a[r](t)
                                }, t))
                            }, o = Xt(t); !(n = o()).done;) r();
                        return i
                    }(function(e) {
                        var a = Object.assign({}, e);
                        for (var t in a) void 0 === a[t] && delete a[t];
                        return a
                    }(tn(d, ["ref"])), m.props, ["onClick"]), p))
                }
                return (0, e.createElement)(s, Object.assign({}, tn(d, ["ref"]), s !== e.Fragment && p), m)
            }

            function an(a) {
                var t;
                return Object.assign((0, e.forwardRef)(a), {
                    displayName: null != (t = a.displayName) ? t : a.name
                })
            }

            function tn(e, a) {
                void 0 === a && (a = []);
                for (var t, n = Object.assign({}, e), i = Xt(a); !(t = i()).done;) {
                    var r = t.value;
                    r in n && delete n[r]
                }
                return n
            }! function(e) {
                e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static"
            }(Bt || (Bt = {})),
            function(e) {
                e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden"
            }(Yt || (Yt = {}));
            var nn = "undefined" !== typeof window ? e.useLayoutEffect : e.useEffect,
                rn = {
                    serverHandoffComplete: !1
                };

            function on() {
                var a = (0, e.useState)(rn.serverHandoffComplete),
                    t = a[0],
                    n = a[1];
                return (0, e.useEffect)((function() {
                    !0 !== t && n(!0)
                }), [t]), (0, e.useEffect)((function() {
                    !1 === rn.serverHandoffComplete && (rn.serverHandoffComplete = !0)
                }), []), t
            }
            var ln = 0;

            function sn() {
                return ++ln
            }

            function un() {
                var a = on(),
                    t = (0, e.useState)(a ? sn : null),
                    n = t[0],
                    i = t[1];
                return nn((function() {
                    null === n && i(sn())
                }), [n]), null != n ? "" + n : void 0
            }

            function cn() {
                var a = (0, e.useRef)(!1);
                return (0, e.useEffect)((function() {
                    return a.current = !0,
                        function() {
                            a.current = !1
                        }
                }), []), a
            }
            var fn, dn, pn = (0, e.createContext)(null);

            function mn() {
                return (0, e.useContext)(pn)
            }

            function gn(a) {
                var t = a.value,
                    n = a.children;
                return e.createElement(pn.Provider, {
                    value: t
                }, n)
            }

            function vn() {
                var e = [],
                    a = {
                        requestAnimationFrame: function(e) {
                            function a() {
                                return e.apply(this, arguments)
                            }
                            return a.toString = function() {
                                return e.toString()
                            }, a
                        }((function() {
                            var e = requestAnimationFrame.apply(void 0, arguments);
                            a.add((function() {
                                return cancelAnimationFrame(e)
                            }))
                        })),
                        nextFrame: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            a.requestAnimationFrame((function() {
                                a.requestAnimationFrame.apply(a, t)
                            }))
                        },
                        setTimeout: function(e) {
                            function a() {
                                return e.apply(this, arguments)
                            }
                            return a.toString = function() {
                                return e.toString()
                            }, a
                        }((function() {
                            var e = setTimeout.apply(void 0, arguments);
                            a.add((function() {
                                return clearTimeout(e)
                            }))
                        })),
                        add: function(a) {
                            e.push(a)
                        },
                        dispose: function() {
                            for (var a, t = Xt(e.splice(0)); !(a = t()).done;) {
                                var n = a.value;
                                n()
                            }
                        }
                    };
                return a
            }

            function bn(e) {
                for (var a, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                e && n.length > 0 && (a = e.classList).add.apply(a, n)
            }

            function hn(e) {
                for (var a, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                e && n.length > 0 && (a = e.classList).remove.apply(a, n)
            }

            function yn(e, a, t, n, i, r) {
                var o = vn(),
                    l = void 0 !== r ? function(e) {
                        var a = {
                            called: !1
                        };
                        return function() {
                            if (!a.called) return a.called = !0, e.apply(void 0, arguments)
                        }
                    }(r) : function() {};
                return hn.apply(void 0, [e].concat(i)), bn.apply(void 0, [e].concat(a, t)), o.nextFrame((function() {
                    hn.apply(void 0, [e].concat(t)), bn.apply(void 0, [e].concat(n)), o.add(function(e, a) {
                        var t = vn();
                        if (!e) return t.dispose;
                        var n = getComputedStyle(e),
                            i = [n.transitionDuration, n.transitionDelay].map((function(e) {
                                var a = e.split(",").filter(Boolean).map((function(e) {
                                    return e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e)
                                })).sort((function(e, a) {
                                    return a - e
                                }))[0];
                                return void 0 === a ? 0 : a
                            })),
                            r = i[0],
                            o = i[1];
                        return 0 !== r ? t.setTimeout((function() {
                            a(dn.Finished)
                        }), r + o) : a(dn.Finished), t.add((function() {
                            return a(dn.Cancelled)
                        })), t.dispose
                    }(e, (function(t) {
                        return hn.apply(void 0, [e].concat(n, a)), bn.apply(void 0, [e].concat(i)), l(t)
                    })))
                })), o.add((function() {
                    return hn.apply(void 0, [e].concat(a, t, n, i))
                })), o.add((function() {
                    return l(dn.Cancelled)
                })), o.dispose
            }

            function wn(a) {
                return void 0 === a && (a = ""), (0, e.useMemo)((function() {
                    return a.split(" ").filter((function(e) {
                        return e.trim().length > 1
                    }))
                }), [a])
            }
            pn.displayName = "OpenClosedContext",
                function(e) {
                    e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed"
                }(fn || (fn = {})),
                function(e) {
                    e.Finished = "finished", e.Cancelled = "cancelled"
                }(dn || (dn = {}));
            var kn, zn = (0, e.createContext)(null);
            zn.displayName = "TransitionContext",
                function(e) {
                    e.Visible = "visible", e.Hidden = "hidden"
                }(kn || (kn = {}));
            var xn = (0, e.createContext)(null);

            function Sn(e) {
                return "children" in e ? Sn(e.children) : e.current.filter((function(e) {
                    return e.state === kn.Visible
                })).length > 0
            }

            function En(a) {
                var t = (0, e.useRef)(a),
                    n = (0, e.useRef)([]),
                    i = cn();
                (0, e.useEffect)((function() {
                    t.current = a
                }), [a]);
                var r = (0, e.useCallback)((function(e, a) {
                        var r;
                        void 0 === a && (a = Yt.Hidden);
                        var o = n.current.findIndex((function(a) {
                            return a.id === e
                        })); - 1 !== o && (Jt(a, ((r = {})[Yt.Unmount] = function() {
                            n.current.splice(o, 1)
                        }, r[Yt.Hidden] = function() {
                            n.current[o].state = kn.Hidden
                        }, r)), !Sn(n) && i.current && (null == t.current || t.current()))
                    }), [t, i, n]),
                    o = (0, e.useCallback)((function(e) {
                        var a = n.current.find((function(a) {
                            return a.id === e
                        }));
                        return a ? a.state !== kn.Visible && (a.state = kn.Visible) : n.current.push({
                                id: e,
                                state: kn.Visible
                            }),
                            function() {
                                return r(e, Yt.Unmount)
                            }
                    }), [n, r]);
                return (0, e.useMemo)((function() {
                    return {
                        children: n,
                        register: o,
                        unregister: r
                    }
                }), [o, r, n])
            }

            function Cn() {}
            xn.displayName = "NestingContext";
            var On = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

            function Nn(e) {
                for (var a, t = {}, n = Xt(On); !(a = n()).done;) {
                    var i, r = a.value;
                    t[r] = null != (i = e[r]) ? i : Cn
                }
                return t
            }
            var jn = Bt.RenderStrategy;

            function Pn(a) {
                var t, n = a.beforeEnter,
                    i = a.afterEnter,
                    r = a.beforeLeave,
                    o = a.afterLeave,
                    l = a.enter,
                    s = a.enterFrom,
                    u = a.enterTo,
                    c = a.entered,
                    f = a.leave,
                    d = a.leaveFrom,
                    p = a.leaveTo,
                    m = Kt(a, ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]),
                    g = (0, e.useRef)(null),
                    v = (0, e.useState)(kn.Visible),
                    b = v[0],
                    h = v[1],
                    y = m.unmount ? Yt.Unmount : Yt.Hidden,
                    w = function() {
                        var a = (0, e.useContext)(zn);
                        if (null === a) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return a
                    }(),
                    k = w.show,
                    z = w.appear,
                    x = w.initial,
                    S = function() {
                        var a = (0, e.useContext)(xn);
                        if (null === a) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return a
                    }(),
                    E = S.register,
                    C = S.unregister,
                    O = un(),
                    N = (0, e.useRef)(!1),
                    j = En((function() {
                        N.current || (h(kn.Hidden), C(O), D.current.afterLeave())
                    }));
                nn((function() {
                    if (O) return E(O)
                }), [E, O]), nn((function() {
                    var e;
                    y === Yt.Hidden && O && (k && b !== kn.Visible ? h(kn.Visible) : Jt(b, ((e = {})[kn.Hidden] = function() {
                        return C(O)
                    }, e[kn.Visible] = function() {
                        return E(O)
                    }, e)))
                }), [b, O, E, C, k, y]);
                var P = wn(l),
                    T = wn(s),
                    _ = wn(u),
                    L = wn(c),
                    M = wn(f),
                    A = wn(d),
                    R = wn(p),
                    D = function(a) {
                        var t = (0, e.useRef)(Nn(a));
                        return (0, e.useEffect)((function() {
                            t.current = Nn(a)
                        }), [a]), t
                    }({
                        beforeEnter: n,
                        afterEnter: i,
                        beforeLeave: r,
                        afterLeave: o
                    }),
                    I = on();
                (0, e.useEffect)((function() {
                    if (I && b === kn.Visible && null === g.current) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                }), [g, b, I]);
                var F = x && !z;
                nn((function() {
                    var e = g.current;
                    if (e && !F) return N.current = !0, k && D.current.beforeEnter(), k || D.current.beforeLeave(), k ? yn(e, P, T, _, L, (function(e) {
                        N.current = !1, e === dn.Finished && D.current.afterEnter()
                    })) : yn(e, M, A, R, L, (function(e) {
                        N.current = !1, e === dn.Finished && (Sn(j) || (h(kn.Hidden), C(O), D.current.afterLeave()))
                    }))
                }), [D, O, N, C, j, g, F, k, P, T, _, M, A, R]);
                var U = {
                        ref: g
                    },
                    H = m;
                return e.createElement(xn.Provider, {
                    value: j
                }, e.createElement(gn, {
                    value: Jt(b, (t = {}, t[kn.Visible] = fn.Open, t[kn.Hidden] = fn.Closed, t))
                }, Zt({
                    props: Qt({}, H, U),
                    defaultTag: "div",
                    features: jn,
                    visible: b === kn.Visible,
                    name: "Transition.Child"
                })))
            }

            function Tn(a) {
                var t, n = a.show,
                    i = a.appear,
                    r = void 0 !== i && i,
                    o = a.unmount,
                    l = Kt(a, ["show", "appear", "unmount"]),
                    s = mn();
                void 0 === n && null !== s && (n = Jt(s, ((t = {})[fn.Open] = !0, t[fn.Closed] = !1, t)));
                if (![!0, !1].includes(n)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
                var u = (0, e.useState)(n ? kn.Visible : kn.Hidden),
                    c = u[0],
                    f = u[1],
                    d = En((function() {
                        f(kn.Hidden)
                    })),
                    p = function() {
                        var a = (0, e.useRef)(!0);
                        return (0, e.useEffect)((function() {
                            a.current = !1
                        }), []), a.current
                    }(),
                    m = (0, e.useMemo)((function() {
                        return {
                            show: n,
                            appear: r || !p,
                            initial: p
                        }
                    }), [n, r, p]);
                (0, e.useEffect)((function() {
                    n ? f(kn.Visible) : Sn(d) || f(kn.Hidden)
                }), [n, d]);
                var g = {
                    unmount: o
                };
                return e.createElement(xn.Provider, {
                    value: d
                }, e.createElement(zn.Provider, {
                    value: m
                }, Zt({
                    props: Qt({}, g, {
                        as: e.Fragment,
                        children: e.createElement(Pn, Object.assign({}, g, l))
                    }),
                    defaultTag: e.Fragment,
                    features: jn,
                    visible: c === kn.Visible,
                    name: "Transition"
                })))
            }
            Tn.Child = function(a) {
                var t = null !== (0, e.useContext)(zn),
                    n = null !== mn();
                return !t && n ? e.createElement(Tn, Object.assign({}, a)) : e.createElement(Pn, Object.assign({}, a))
            }, Tn.Root = Tn;
            var _n = t(694),
                Ln = t.n(_n),
                Mn = t(184),
                An = function(a) {
                    var t = a.isOpen,
                        n = a.message,
                        i = a.variant,
                        r = void 0 === i ? "warning" : i,
                        o = a.topMost,
                        l = void 0 !== o && o,
                        s = Ln()("fixed top-5 left-1/2 transform -translate-x-1/2 max-w-sm w-full shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden", {
                            "bg-rose-500 text-white": "warning" === r,
                            "bg-blue-500 text-white": "success" === r
                        }, l ? "z-20" : "");
                    return (0, Mn.jsx)(Tn, {
                        show: t,
                        as: e.Fragment,
                        enter: "ease-out duration-300 transition",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "transition ease-in duration-100",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: (0, Mn.jsx)("div", {
                            className: s,
                            children: (0, Mn.jsx)("div", {
                                className: "p-4",
                                children: (0, Mn.jsx)("p", {
                                    className: "text-sm text-center font-medium",
                                    children: n
                                })
                            })
                        })
                    })
                },
                Rn = 2e3,
                Dn = 350;
            var Un = ["oncia", "dubbi", "corra", "litro", "sparo", "carta", "nasce", "punti", "rasoi", "muffa", "ritmi", "lorde", "carne", "snodi", "borie", "calco", "crepe", "eredi", "tosai", "sugli", "disto", "dirmi", "nuovo", "mandi", "giace", "odino", "zolfo", "umana", "scali", "farne", "dogma", "rompa", "arida", "ressa", "puzzi", "vuole", "pigro", "fogne", "panno", "gioco", "rozza", "porge", "linfa", "zinco", "regia", "acino", "dighe", "stelo", "bacio", "balsa", "leghe", "omega", "nonio", "conca", "talea", "gambo", "sella", "afona", "prono", "tremo", "mallo", "piuma", "gradi", "aglio", "fulva", "dieta", "fioca", "zuppa", "nanna", "epoca", "greve", "motto", "tassa", "pochi", "folle", "rocca", "iodio", "cargo", "girai", "tenni", "gnosi", "mambo", "bachi", "omero", "mitra", "conga", "corna", "farsa", "dorma", "denso", "mania", "miele", "mille", "cicca", "falce", "frigo", "bande", "serro", "vista", "rutto", "sfila", "sesso", "sasso", "servi", "astio", "porre", "prude", "torme", "sansa", "faina", "netto", "conte", "secca", "conto", "garza", "ditta", "brina", "madre", "forum", "sudai", "boato", "culto", "spago", "curai", "badai", "roghi", "bieco", "lanci", "ovvio", "bitta", "obesi", "cavai", "massa", "ruota", "lerci", "penna", "tacco", "natia", "togli", "vinti", "mogio", "scala", "ampio", "lembo", "onice", "nomea", "stare", "giogo", "rughe", "retro", "audio", "rissa", "offro", "pecca", "testa", "turbe", "gonna", "aroma", "ruolo", "rebbi", "tanfo", "tarme", "borgo", "ragno", "tetto", "tenia", "piano", "copia", "torce", "orafe", "spera", "cucio", "viola", "sacre", "muovi", "crisi", "muoio", "liana", "curva", "tolda", "bugie", "bidet", "bozza", "altra", "parco", "salmo", "eroso", "fetta", "spine", "libro", "buffa", "sorci", "sonno", "cosmo", "laghi", "solfa", "sappi", "pugni", "adori", "mangi", "sopra", "borsa", "verga", "seppi", "pegni", "avari", "azoto", "nevai", "avolo", "peplo", "sorso", "turno", "ostia", "fauci", "secco", "avito", "amaro", "patta", "zoppo", "upupa", "nervi", "pista", "freno", "salsa", "lince", "tozza", "vacuo", "idolo", "mango", "lombi", "mucca", "bosco", "blesa", "nylon", "sabba", "monca", "fitto", "palmo", "dimmi", "peana", "casba", "ogiva", "cauto", "viale", "opino", "doghe", "rogge", "carte", "zeppa", "forca", "verbo", "prove", "cedro", "ulivo", "acuti", "larva", "feudo", "ceduo", "agave", "piaga", "brame", "nonna", "golfo", "negai", "aceto", "esito", "palla", "scavo", "marca", "cloro", "orata", "esile", "sorge", "abbai", "bizze", "spola", "sputo", "polio", "legno", "amici", "ebete", "dazio", "sinti", "bacca", "torre", "entra", "zebra", "asino", "relax", "antro", "cadde", "masai", "cucce", "beghe", "tonti", "nuoto", "sedia", "cirri", "alice", "rumba", "patio", "lizza", "frate", "udito", "balia", "curry", "fatto", "cenci", "zonzo", "pecco", "dieci", "urina", "manzo", "notai", "terzo", "gotta", "bollo", "arabi", "succo", "cenno", "spada", "poggi", "scure", "coevo", "alveo", "tacca", "avere", "mosca", "nenia", "vasca", "manca", "ancia", "barai", "anche", "furia", "invio", "univa", "viole", "aiuto", "bocce", "pezzo", "salma", "prole", "baule", "epuro", "losco", "occhi", "sacco", "voghi", "collo", "totem", "avvio", "volai", "canoa", "festa", "purga", "nuora", "orgia", "zucca", "fiabe", "seggi", "germe", "doppi", "ceffo", "gamma", "pesce", "cetra", "villa", "piace", "vello", "marna", "cesio", "setta", "fuori", "brace", "modem", "cippo", "talpa", "ambra", "lisca", "pareo", "mogli", "varie", "cella", "diade", "bisca", "radio", "udiva", "bruno", "niveo", "prora", "china", "abusa", "ricco", "cocci", "coesa", "stesa", "utero", "asola", "ninja", "metto", "cozzo", "sfizi", "tetro", "serbo", "reame", "porci", "zirlo", "visto", "fummo", "trama", "cielo", "campa", "reato", "polpa", "etnea", "fiuto", "laico", "gamba", "ciuco", "carme", "norme", "nerbo", "acume", "colon", "primo", "gente", "terme", "tedio", "pizza", "aerea", "orari", "bazza", "grana", "cesso", "scopa", "acqua", "morsa", "cocco", "volpe", "ernia", "stiro", "retto", "sunto", "posso", "certa", "puffi", "aprii", "drupa", "otite", "renna", "fallo", "taiga", "capii", "siepe", "marce", "siero", "usato", "album", "volto", "basta", "fanno", "siamo", "perno", "farro", "grama", "emoji", "magro", "dalia", "mesta", "ridda", "passi", "curia", "annuo", "tappo", "vuoti", "pigio", "balle", "abbia", "desco", "eremo", "fusto", "slogo", "ebreo", "grafo", "valgo", "fondo", "miope", "venia", "colpe", "zompo", "casse", "terga", "cenge", "onore", "fesso", "ovale", "pende", "tosse", "zuffa", "sughi", "eludo", "agape", "costa", "tasto", "bocca", "marzo", "tende", "banca", "fungo", "bagno", "fiero", "clava", "pensa", "azero", "domai", "mezzo", "svelo", "canto", "mecca", "diari", "ghiro", "gocce", "colai", "recai", "espio", "punge", "pongo", "bruti", "frase", "vulva", "fiera", "corpo", "vanga", "lieta", "smise", "fogli", "amala", "beone", "scolo", "pollo", "cunei", "rodeo", "mossa", "quasi", "sanno", "fresa", "goffe", "merlo", "verza", "sobri", "robot", "sagra", "fuoco", "abaco", "utile", "preda", "colza", "fichi", "nuche", "rebus", "svago", "liceo", "donna", "petto", "opera", "tonfo", "setto", "cachi", "tuono", "panne", "quale", "tocca", "galea", "baffi", "lenza", "tizio", "covai", "tenda", "eroga", "sorbo", "jeans", "afoso", "beato", "mosto", "stola", "detto", "punta", "posai", "umile", "spore", "arpie", "budda", "corda", "treno", "lotta", "cinta", "gergo", "lardo", "grida", "poema", "luogo", "fiato", "vinai", "bongo", "furba", "sport", "pinta", "crema", "frode", "trono", "clero", "mozzi", "dolce", "turco", "ordii", "venti", "tanto", "ovini", "colla", "conio", "vocio", "ansia", "bolla", "zolla", "serpe", "nuoce", "ruppe", "prode", "latte", "ossia", "regno", "fatuo", "teche", "corvi", "righe", "posta", "anelo", "casta", "falso", "emana", "milza", "extra", "morbo", "cuore", "cosca", "faggi", "solco", "grigi", "pinne", "suino", "astro", "volge", "asilo", "multa", "rione", "balzo", "forza", "frasi", "torso", "pulsa", "anice", "ronfa", "trito", "belva", "trota", "animo", "ormai", "bario", "busta", "dardo", "esche", "vendo", "litio", "sigla", "cigli", "panda", "sommo", "colse", "vetta", "lecci", "baldo", "alone", "rullo", "pruno", "reale", "draga", "drone", "ovile", "oblio", "pelle", "bulbo", "clone", "tappe", "firma", "sogno", "sigma", "sisma", "fonte", "diodo", "grumo", "birra", "lasci", "sceso", "pelli", "parve", "dicco", "tango", "parte", "busti", "elogi", "paura", "negli", "gechi", "ebbro", "buchi", "pulce", "etimo", "bello", "morso", "barra", "gomma", "pazzi", "vinco", "duole", "usano", "breve", "selci", "penne", "canna", "berlo", "fosco", "cesta", "senno", "nause", "cervo", "messa", "daino", "vaghe", "cecio", "drago", "umida", "etnia", "spuma", "piega", "micio", "opaco", "vibra", "tilde", "ossea", "rauca", "falco", "cifra", "studi", "tomba", "ratto", "carpa", "barca", "rocce", "sturo", "folla", "bruco", "targa", "molla", "ballo", "tagli", "bruci", "benda", "malga", "aduso", "ubbia", "vasai", "rango", "oneri", "clima", "pizzo", "selva", "carro", "croda", "velai", "cosce", "ceppo", "brano", "usare", "scemi", "evoco", "agito", "pozza", "gobba", "legge", "vieto", "desio", "belga", "adagi", "zanne", "denti", "lacca", "olive", "vegli", "facce", "atrio", "coppa", "pesto", "fante", "parti", "volta", "poppa", "disfa", "crasi", "bivio", "pance", "cerco", "celti", "nafta", "alcol", "abile", "reggo", "emulo", "avuto", "fosse", "alibi", "ombra", "cameo", "pioli", "copri", "stima", "corsa", "estro", "lucci", "greco", "funge", "piena", "tigli", "burro", "gatto", "razzo", "faida", "tosta", "lucro", "banco", "aureo", "bullo", "vermi", "censo", "lutto", "ilare", "utili", "melma", "tibia", "bisce", "colta", "umori", "celia", "cromo", "cespo", "cacio", "cappa", "badia", "malta", "parlo", "nappa", "passa", "salve", "teppa", "frana", "ponte", "letto", "etica", "sonda", "lista", "serra", "palle", "bazar", "paria", "lusso", "crepi", "cobra", "pesco", "ferro", "corte", "fisco", "baita", "polpo", "calca", "stufo", "scova", "butta", "campo", "epica", "tigna", "trave", "fasce", "quota", "causa", "imita", "porro", "forra", "pigli", "lonza", "avrai", "suono", "sozza", "lesso", "premi", "merce", "museo", "hanno", "calai", "amaca", "uggia", "sento", "volle", "gelso", "anodo", "pigna", "legai", "svito", "docce", "sosta", "rampa", "gesti", "perso", "coffa", "mughi", "bioma", "nesso", "soldi", "preso", "glifo", "lenta", "sesto", "gigli", "hotel", "bardo", "archi", "tallo", "nocca", "sodio", "fibra", "ugola", "morti", "mirto", "erica", "testo", "ninfa", "mazza", "alate", "oziai", "lesta", "basso", "piada", "ardua", "slego", "mappa", "bucce", "vieni", "grano", "culla", "zitti", "oppio", "tarlo", "fiume", "rotta", "degna", "scafo", "fango", "tinta", "carie", "arare", "carso", "bordi", "rupia", "odore", "prete", "udire", "colpi", "magma", "presa", "omone", "segno", "sarti", "cenai", "salpo", "oltre", "duchi", "genio", "forse", "abate", "fiala", "cacao", "perla", "pinza", "rubai", "pelai", "ritto", "vespa", "ruzzo", "aspri", "amavo", "bimba", "adito", "felpa", "palma", "croce", "morda", "etere", "maghi", "porta", "cento", "esame", "ligio", "fughe", "icona", "piede", "unico", "grata", "passo", "apice", "conci", "giuro", "forma", "limbo", "fossa", "zecca", "colmo", "forte", "costi", "masso", "mensa", "casco", "liuto", "afidi", "leggo", "torve", "raggi", "porto", "cruda", "lecca", "gesso", "visse", "samba", "etano", "bambu", "cozze", "oliai", "palio", "orcio", "media", "lunga", "linea", "orchi", "tesse", "sfuso", "guado", "stona", "metro", "tulle", "toppa", "acero", "rospo", "foibe", "pesca", "blusa", "alghe", "usura", "cheta", "adipe", "vanno", "frega", "prima", "basco", "riuso", "edema", "finto", "chela", "tarpo", "tardi", "vento", "vetro", "fermo", "panna", "sette", "becco", "barba", "calze", "sotto", "zaino", "croco", "tempo", "vezzo", "foche", "spiga", "ameni", "egizi", "sbuca", "stile", "circa", "cisti", "sarde", "prato", "marea", "aneto", "lepri", "mafia", "solai", "tasca", "zeppo", "versi", "manna", "perde", "clown", "annoi", "calli", "pacca", "citai", "calci", "lacci", "tirai", "ferie", "rosea", "evaso", "avido", "elica", "vizio", "siedi", "dossi", "colui", "parto", "cagna", "cuoca", "amato", "fammi", "capra", "arnia", "tordo", "saghe", "video", "risma", "suore", "santa", "soffi", "fauna", "fobia", "tatto", "isola", "babbo", "penai", "celai", "evita", "muone", "legna", "vizzo", "nassa", "esule", "bigia", "molti", "curda", "paese", "esoso", "paggi", "trino", "finge", "erigo", "sfida", "fremo", "pieve", "atomo", "erano", "inizi", "osare", "soave", "linda", "tecno", "peste", "gusci", "cuoio", "raspa", "tersa", "vacca", "manto", "danza", "guida", "mosci", "efebo", "ruspa", "circo", "regio", "suola", "gogna", "lemma", "scudo", "poeta", "errai", "alito", "bieta", "valle", "duale", "misto", "russo", "folto", "colma", "briga", "pampa", "biada", "venga", "ricci", "batte", "elevo", "meteo", "agire", "ratti", "schwa", "lieve", "parso", "nutre", "senza", "lagna", "stato", "tasso", "berci", "sidro", "creta", "razza", "crani", "marmo", "stiva", "padre", "bravi", "croma", "busso", "suolo", "obolo", "corso", "verde", "droga", "tutte", "teste", "sarei", "gonfi", "vitto", "sorto", "ostro", "torta", "rombo", "gemma", "addio", "fieno", "spesa", "ganci", "obice", "prego", "seguo", "terra", "cinse", "pasto", "resto", "tonda", "buono", "probo", "emiro", "aorta", "remai", "seghe", "fumai", "pinna", "disco", "mamma", "umore", "laser", "rubli", "educa", "andai", "cruna", "rossa", "calva", "leone", "cassa", "posto", "figli", "botti", "agile", "abito", "lotti", "sposi", "trova", "slavi", "palco", "vispa", "sfera", "ciclo", "tento", "sciai", "senso", "sazio", "polso", "foste", "ovaia", "alzai", "ascia", "optai", "magia", "ebano", "marre", "scade", "cigno", "lavai", "salto", "ponfo", "flora", "gonzo", "fissa", "tieni", "cieca", "direi", "ladro", "arena", "omise", "tolta", "calce", "brodo", "serie", "pompa", "sosia", "veste", "panca", "bomba", "pesai", "tonno", "iella", "acari", "paghe", "svaso", "canea", "iride", "micce", "cambi", "sauna", "agata", "corto", "amore", "terna", "urlai", "ameba", "monte", "varco", "saggi", "serio", "desta", "gozzo", "tatuo", "gazza", "sbafo", "coppi", "danno", "tuffo", "roche", "randa", "patto", "sfamo", "sordi", "credo", "kappa", "istmo", "furto", "creai", "ronda", "sugna", "karma", "largo", "torba", "edile", "edera", "esigo", "colgo", "sfogo", "adula", "apnea", "vanto", "grato", "palpo", "beffa", "globo", "ghisa", "dillo", "sfumo", "comma", "duomo", "pozzi", "basto", "virus", "guano", "adone", "gorgo", "spira", "ribes", "picco", "svevo", "ganzo", "koala", "falde", "cibai", "fiore", "somma", "scusa", "matto", "lance", "cerro", "uscio", "saldo", "babau", "flebo", "greto", "guaio", "ovulo", "ulula", "tengo", "lampo", "cavia", "ovest", "gassa", "latta", "raspo", "camma", "lasco", "bruma", "cotta", "burla", "mento", "stavi", "unire", "fruga", "sbavi", "dammi", "nulla", "nembo", "turpe", "speck", "vigna", "torto", "pacco", "chilo", "ozono", "gusto", "fregi", "giada", "crine", "toghe", "birba", "torni", "getto", "mazzo", "talco", "rogna", "mutuo", "mance", "podio", "verso", "pausa", "dotta", "botte", "pasta", "brado", "savio", "piove", "privo", "assai", "abeti", "pappa", "gallo", "igneo", "zampa", "forno", "grave", "plico", "mondo", "scena", "prosa", "felce", "stadi", "agone", "conta", "gioia", "calme", "amido", "aereo", "scopo", "esodo", "cardo", "gnomo", "spelo", "narri", "tigre", "orale", "notte", "giova", "retta", "tenue", "curio", "omino", "lobby", "usavi", "lisci", "avena", "menta", "dorso", "tazza", "caldo", "nozze", "armai", "plebe", "spazi", "riffa", "zozze", "zappa", "unito", "leale", "socio", "vinse", "giara", "rende", "acida", 'garbo"],ne=["abaco', "abata", "abate", "abati", "abato", "abavi", "abavo", "abaya", "abbai", "abbia", "abbui", "abete", "abeti", "abile", "abili", "abita", "abiti", "abito", "abuna", "abusa", "abusi", "abuso", "acari", "acaro", "acati", "acato", "acazi", "accia", "accio", "aceri", "acero", "acese", "acesi", "aceta", "aceti", "aceto", "achea", "achee", "achei", "acheo", "acida", "acide", "acidi", "acido", "acile", "acili", "acini", "acino", "acori", "acoro", "acqua", "acque", "acqui", "acquo", "actea", "actee", "acuii", "acume", "acumi", "acuta", "acute", "acuti", "acuto", "adagi", "adale", "adali", "addai", "addii", "addio", "addua", "addui", "adduo", "adesa", "adese", "adesi", "adeso", "adima", "adimi", "adimo", "adipe", "adipi", "adira", "adire", "adiri", "adiro", "adita", "adite", "aditi", "adito", "adiva", "adivi", "adivo", "adobe", "adona", "adone", "adoni", "adono", "adora", "adori", "adoro", "adoxa", "adoxe", "adula", "aduli", "adulo", "aduna", "aduni", "aduno", "adusa", "aduse", "adusi", "aduso", "aequo", "aerai", "aerea", "aeree", "aerei", "aereo", "afaca", "afata", "afate", "afati", "afato", "afeli", "afeta", "afeti", "afide", "afidi", "afnii", "afnio", "afona", "afone", "afoni", "afono", "afosa", "afose", "afosi", "afoso", "agama", "agame", "agami", "agamo", "agape", "agapi", "agata", "agate", "agave", "agavi", "aggio", "agiai", "agile", "agili", "agino", "agire", "agita", "agite", "agiti", "agito", "agiva", "agivi", "agivo", "aglio", "agone", "agoni", "agora", "aguti", "aiace", "aiaci", "aiata", "aiate", "aiola", "aiole", "aioli", "aiolo", "aione", "aioni", "aitai", "aiuga", "aiuta", "aiuti", "aiuto", "aizza", "aizzi", "aizzo", "alaci", "alala", "alale", "alali", "alalo", "alami", "alane", "alani", "alano", "alare", "alari", "alata", "alate", "alati", "alato", "alava", "alavi", "alavo", "albio", "album", "alcea", "alcee", "alche", "alcol", "aldio", "aleph", "alesa", "alese", "alesi", "aleso", "alghe", "algia", "algie", "aliai", "alias", "alibi", "alice", "alici", "alida", "alide", "alidi", "alido", "alimi", "alimo", "alino", "alita", "alite", "aliti", "alito", "allea", "allee", "allei", "alleo", "almea", "almee", "alobi", "alona", "alone", "aloni", "alono", "alosa", "alose", "alpha", "altea", "altee", "altra", "altre", "altri", "altro", "alula", "alule", "alvei", "alveo", "alzai", "amaca", "amaci", "amala", "amale", "amali", "amalo", "amami", "amane", "amano", "amara", "amare", "amari", "amaro", "amasi", "amata", "amate", "amati", "amato", "amava", "amavi", "amavo", "ambia", "ambii", "ambio", "ambra", "ambre", "ameba", "amebe", "amena", "amene", "ameni", "ameno", "amica", "amici", "amico", "amida", "amide", "amidi", "amido", "amiga", "amigo", "amile", "amili", "amina", "amine", "amino", "ammai", "amnii", "amnio", "amomi", "amomo", "amore", "amori", "ampia", "ampie", "ampio", "ampli", "amuli", "amulo", "anale", "anali", "anari", "anche", "ancia", "andai", "anela", "anele", "aneli", "anelo", "aneti", "aneto", "angla", "angle", "angli", "anglo", "angue", "angui", "anice", "anici", "anile", "anili", "anima", "anime", "animi", "animo", "annoi", "annua", "annue", "annui", "annuo", "anobi", "anodi", "anodo", "anona", "anone", "ansai", "ansia", "ansie", "ansio", "antri", "antro", "anura", "anure", "anuri", "anuro", "aonia", "aonie", "aonio", "aorta", "aorte", "apale", "apali", "apate", "apice", "apici", "apide", "apidi", "apina", "apine", "apira", "apire", "apiri", "apiro", "apnea", "apnee", "apoda", "apode", "apodi", "apodo", "appai", "appia", "appie", "appio", "aprii", "apula", "apule", "apuli", "apulo", "araba", "arabe", "arabi", "arabo", "araci", "arala", "arale", "arali", "aralo", "arama", "arame", "arami", "aramo", "arane", "arano", "arara", "arare", "arata", "arate", "arati", "arato", "arava", "aravi", "aravo", "arcai", "arche", "archi", "arcua", "arcui", "arcuo", "ardea", "ardee", "ardii", "ardua", "ardue", "ardui", "arduo", "areai", "areca", "arena", "arene", "areni", "areno", "arese", "aresi", "argea", "argee", "argei", "argeo", "arghi", "argon", "arida", "aride", "aridi", "arido", "arile", "arili", "arino", "armai", "arnia", "arnie", "aroma", "aromi", "arpia", "arpie", "arsii", "artai", "artoa", "artoe", "artoi", "artoo", "asada", "asado", "asana", "asari", "asaro", "aschi", "ascia", "ascio", "asili", "asilo", "asina", "asine", "asini", "asino", "asola", "asole", "asoli", "asolo", "aspra", "aspre", "aspri", "aspro", "assai", "astia", "astio", "astri", "astro", "atava", "atave", "atavi", "atavo", "atele", "ateli", "atomi", "atomo", "atona", "atone", "atoni", "atono", "atout", "atrii", "atrio", "attai", "attea", "attee", "attei", "atteo", "attua", "attui", "attuo", "audio", "audit", "auffa", "augna", "augni", "augno", "aulii", "aurai", "aurea", "auree", "aurei", "aureo", "avana", "avara", "avare", "avari", "avaro", "avena", "avene", "avere", "averi", "avete", "aveva", "avevi", "avevo", "avida", "avide", "avidi", "avido", "avita", "avite", "aviti", "avito", "avoca", "avoco", "avola", "avole", "avoli", "avolo", "avori", "avrai", "avrei", "avuta", "avute", "avuti", "avuto", "avvia", "avvii", "avvio", "axone", "axoni", "azera", "azere", "azeri", "azero", "azide", "azidi", "azima", "azime", "azimi", "azimo", "azina", "azine", "azoni", "azota", "azoti", "azoto", "azuki", "babao", "babau", "babbi", "babbo", "bacai", "bacca", "bacco", "bachi", "bacia", "bacie", "bacii", "bacio", "badai", "badge", "badgi", "badia", "badie", "baele", "baeli", "baffi", "baffo", "bagel", "bagli", "bagna", "bagne", "bagni", "bagno", "baiai", "baili", "bailo", "baino", "baita", "baite", "bakka", "bakke", "bakki", "bakko", "balba", "balbe", "balbi", "balbo", "balco", "balda", "balde", "baldi", "baldo", "balia", "balie", "balii", "balio", "balla", "balle", "balli", "ballo", "balma", "balme", "balsa", "balse", "balta", "balte", "balti", "balto", "balza", "balze", "balzi", "balzo", "bamba", "bambe", "bambi", "bambo", "bambu", "banaa", "banae", "banai", "banao", "banca", "banco", "banda", "bande", "bandi", "bando", "bangi", "banjo", "banna", "banni", "banno", "bantu", "barai", "barba", "barbe", "barbi", "barbo", "barca", "barco", "barda", "barde", "bardi", "bardo", "baria", "barie", "barii", "bario", "barra", "barre", "barri", "barro", "basai", "basca", "basco", "basii", "bassa", "basse", "bassi", "basso", "basta", "baste", "basti", "basto", "batta", "batte", "batti", "batto", "batua", "baula", "baule", "bauli", "baulo", "bauta", "baute", "bazar", "bazza", "bazze", "beaci", "beala", "beale", "beali", "bealo", "beami", "beane", "beano", "beare", "beata", "beate", "beati", "beato", "beava", "beavi", "beavo", "bebop", "becca", "becco", "beffa", "beffe", "beffi", "beffo", "begai", "beggi", "beghe", "beghi", "begia", "begli", "beige", "beigi", "beino", "beisa", "beise", "belai", "belga", "belgi", "belii", "belio", "bella", "belle", "belli", "bello", "belta", "belva", "belve", "benai", "benda", "bende", "bendi", "bendo", "benna", "benne", "beola", "beole", "beona", "beone", "beoni", "beota", "beote", "beoti", "berci", "berla", "berle", "berli", "berlo", "berma", "berme", "bermi", "berne", "bersi", "berta", "berte", "berti", "bervi", "besce", "besci", "bessa", "besse", "bessi", "besso", "betta", "bette", "beuta", "beute", "bevei", "bevve", "bevvi", "bezzi", "bezzo", "biada", "biade", "biadi", "biado", "biava", "biave", "biavi", "biavo", "bibbi", "biche", "bidet", "bieca", "bieco", "bieta", "biete", "biffa", "biffe", "biffi", "biffo", "bighe", "bighi", "bigia", "bigie", "bigio", "bigne", "bilia", "bilie", "bimba", "bimbe", "bimbi", "bimbo", "binai", "binda", "binde", "bindi", "binga", "binge", "bingo", "biodi", "biodo", "bioma", "biomi", "biosi", "biova", "biove", "birba", "birbe", "birbi", "birbo", "birce", "birci", "birra", "birre", "birri", "birro", "bisca", "bisce", "bissa", "bissi", "bisso", "bista", "biste", "bisti", "bitta", "bitte", "bitti", "bitto", "biuta", "biute", "biuti", "biuto", "bivio", "bizza", "bizze", "blesa", "blese", "blesi", "bleso", "blini", "blitz", "blumi", "blumo", "blusa", "bluse", "boari", "boaro", "boati", "boato", "bobba", "bobbi", "bobbo", "bocca", "bocce", "bocci", "bocco", "bocia", "boema", "boeme", "boemi", "boemo", "boera", "boere", "boeri", "boero", "boghe", "boide", "boidi", "boite", "boldi", "boldo", "bolge", "bolla", "bolle", "bolli", "bollo", "bolsa", "bolse", "bolsi", "bolso", "bomba", "bombe", "bombi", "bombo", "bongo", "bonne", "bonta", "bonza", "bonze", "bonzi", "bonzo", "borda", "borde", "bordi", "bordo", "borea", "borei", "borgo", "boria", "borie", "borii", "borio", "borni", "borra", "borre", "borri", "borro", "borsa", "borse", "bosco", "bossi", "bosso", "botri", "botro", "botta", "botte", "botti", "botto", "boule", "boxai", "bozza", "bozze", "bozzi", "bozzo", "braca", "brace", "braci", "braco", "brada", "brade", "bradi", "brado", "braga", "brago", "braii", "brama", "brame", "brami", "bramo", "brani", "brano", "brasa", "brasi", "braso", "brava", "brave", "bravi", "bravo", "bremi", "bremo", "breva", "breve", "brevi", "brice", "brici", "brida", "bride", "briga", "brige", "brigi", "brigo", "brina", "brine", "brini", "brino", "broda", "brode", "brodi", "brodo", "broge", "brogi", "broli", "brolo", "bromi", "bromo", "brova", "brovi", "brovo", "bruca", "bruci", "bruco", "brugi", "brugo", "bruii", "bruma", "brume", "bruna", "brune", "bruni", "bruno", "bruta", "brute", "bruti", "bruto", "bruzi", "bubai", "bucai", "bucce", "bucci", "buche", "buchi", "bucio", "budda", "buddi", "bufai", "buffa", "buffe", "buffi", "buffo", "bugia", "bugie", "bugio", "bugli", "bugna", "bugne", "bugni", "bugno", "buina", "buine", "bulai", "bulbi", "bulbo", "bulla", "bulle", "bulli", "bullo", "bumba", "bumbe", "buona", "buone", "buoni", "buono", "burba", "burbe", "burga", "burka", "burla", "burle", "burli", "burlo", "burqa", "burri", "burro", "busaa", "busae", "busai", "busao", "busca", "busco", "bushi", "bussa", "busse", "bussi", "busso", "busta", "buste", "busti", "busto", "butta", "butte", "butti", "butto", "buzza", "buzze", "buzzi", "buzzo", "bwaka", "bwana", "caaba", "cabla", "cabli", "cablo", "cabra", "cabri", "cabro", "cacai", "cacao", "cacca", "cacce", "cacci", "cache", "cachi", "cacia", "cacio", "cacti", "cacto", "cadde", "caddi", "cadmi", "caffa", "caffe", "caffi", "caffo", "cafra", "cafre", "cafri", "cafro", "cagai", "caghi", "cagli", "cagna", "cagne", "caiba", "caibe", "caina", "caine", "caini", "caino", "calai", "calao", "calca", "calce", "calci", "calco", "calda", "calde", "caldi", "caldo", "calia", "calie", "calla", "calle", "calli", "callo", "calma", "calme", "calmi", "calmo", "calse", "calta", "calte", "calva", "calve", "calvi", "calvo", "calza", "calze", "calzi", "calzo", "cambi", "camei", "cameo", "camma", "camme", "campa", "campi", "campo", "canai", "canea", "canee", "canga", "cange", "cangi", "canna", "canne", "canni", "canno", "canoa", "canoe", "cansa", "cansi", "canso", "canta", "canti", "canto", "capai", "capii", "cappa", "cappe", "cappi", "cappo", "capra", "capre", "capri", "capro", "capta", "capti", "capto", "carca", "carco", "carda", "carde", "cardi", "cardo", "cargo", "caria", "carie", "cario", "carme", "carmi", "carna", "carne", "carni", "carno", "carpa", "carpe", "carpi", "carpo", "carri", "carro", "carsi", "carso", "carta", "carte", "carvi", "casba", "casbe", "casca", "casci", "casco", "casei", "caseo", "caspa", "caspe", "caspi", "cassa", "casse", "cassi", "casso", "casta", "caste", "casti", "casto", "catta", "catte", "catti", "catto", "caule", "cauli", "cauri", "causa", "cause", "causi", "causo", "cauta", "caute", "cauti", "cauto", "cavai", "cavea", "cavee", "cavia", "cavie", "cazza", "cazze", "cazzi", "cazzo", "cecai", "cecca", "ceche", "cechi", "cecio", "cedei", "cedra", "cedri", "cedro", "cedua", "cedue", "cedui", "ceduo", "ceffa", "ceffi", "ceffo", "ceiba", "ceibe", "celai", "celia", "celie", "celio", "cella", "celle", "celli", "cello", "celta", "celte", "celti", "celto", "celzi", "cenai", "cenci", "cenge", "cengi", "cenna", "cenni", "cenno", "censi", "censo", "cento", "ceppa", "ceppe", "ceppi", "ceppo", "cerai", "cerca", "cerci", "cerco", "cerea", "ceree", "cerei", "cereo", "cerii", "cerio", "cerna", "cerne", "cerni", "cerno", "cerri", "cerro", "certa", "certe", "certi", "certo", "cerva", "cerve", "cervi", "cervo", "cesia", "cesie", "cesio", "cespi", "cespo", "cessa", "cesse", "cessi", "cesso", "cesta", "ceste", "cesti", "cesto", "cetra", "cetre", "chela", "chele", "cheli", "cheta", "chete", "cheti", "cheto", "chile", "chili", "chilo", "chimi", "chimo", "china", "chine", "chini", "chino", "chita", "chiti", "chito", "cholo", "chope", "ciaba", "ciabi", "ciabo", "ciana", "ciane", "ciani", "ciano", "ciati", "ciato", "ciazi", "cibai", "cicca", "cicce", "cicci", "cicco", "ciche", "cicli", "ciclo", "cidia", "cidie", "cidio", "cieca", "cieco", "cieli", "cielo", "ciesa", "ciese", "cifra", "cifre", "cifri", "cifro", "cigli", "cigna", "cigne", "cigni", "cigno", "cimai", "cimba", "cimbe", "cince", "cinga", "cinge", "cingi", "cingo", "cinse", "cinsi", "cinta", "cinte", "cinti", "cinto", "cinzi", "cioce", "ciofi", "ciofo", "cippi", "cippo", "cipri", "circa", "circe", "circi", "circo", "cirri", "cirro", "cisio", "cispa", "cispe", "cista", "ciste", "cisti", "cisto", "citai", "citta", "citte", "citti", "citto", "ciuca", "ciuco", "ciula", "ciuli", "ciulo", "clade", "cladi", "clama", "clami", "clamo", "clava", "clave", "clavi", "clavo", "cleri", "clero", "clima", "climi", "cline", "clini", "clino", "clivi", "clivo", "clona", "clone", "cloni", "clono", "clora", "clori", "cloro", "clown", "cloze", "clune", "cluni", "cnidi", "coala", "coana", "coane", "coati", "cobea", "cobee", "cobla", "coble", "cobra", "cocca", "cocce", "cocci", "cocco", "coche", "codia", "codio", "coesa", "coese", "coesi", "coeso", "coeva", "coeve", "coevi", "coevo", "coffa", "coffe", "cofta", "cofte", "cofti", "cofto", "cogli", "cogni", "cogno", "coiai", "coipi", "coipo", "coire", "coita", "coite", "coiti", "coito", "coiva", "coivi", "coivo", "colai", "colca", "colco", "colei", "colga", "colgo", "colia", "colie", "colla", "colle", "colli", "collo", "colma", "colme", "colmi", "colmo", "colon", "colpa", "colpe", "colpi", "colpo", "colse", "colsi", "colta", "colte", "colti", "colto", "colui", "colza", "colze", "comba", "combe", "combo", "comma", "commi", "commo", "compi", "conca", "conce", "conci", "conga", "congi", "conia", "conie", "conio", "conne", "conni", "conno", "consa", "conso", "conta", "conte", "conti", "conto", "cooba", "coobi", "coobo", "copia", "copie", "copio", "coppa", "coppe", "coppi", "coppo", "copra", "copre", "copri", "copro", "copta", "copte", "copti", "copto", "coque", "corai", "corba", "corbe", "corca", "corco", "corda", "corde", "corea", "coree", "corei", "coreo", "corio", "cormi", "cormo", "corna", "corni", "corno", "corpi", "corpo", "corra", "corre", "corri", "corro", "corsa", "corse", "corsi", "corso", "corta", "corte", "corti", "corto", "corvi", "corvo", "cosai", "cosca", "cosce", "cosci", "cosfi", "cosmi", "cosmo", "cosse", "cossi", "cosso", "costa", "coste", "costi", "costo", "cotta", "cotte", "cotti", "cotto", "cousi", "couso", "covai", "covid", "cozza", "cozze", "cozzi", "cozzo", "crace", "craci", "crani", "crapa", "crape", "crasi", "creai", "creda", "crede", "credi", "credo", "crema", "creme", "cremi", "cremo", "crena", "crene", "creni", "creno", "crepa", "crepe", "crepi", "crepo", "cresi", "creso", "creta", "crete", "crime", "crimi", "crina", "crine", "crini", "crino", "crisi", "croce", "croci", "croco", "croda", "crode", "croia", "croie", "croio", "croma", "crome", "cromi", "cromo", "crono", "cruci", "cruda", "crude", "crudi", "crudo", "cruna", "crune", "ctoni", "cubai", "cubia", "cubie", "cucca", "cucce", "cucci", "cucco", "cucia", "cucii", "cucio", "cueva", "cugna", "cugne", "culai", "culla", "culle", "culli", "cullo", "culmi", "culmo", "culpa", "culta", "culte", "culti", "culto", "cunca", "cunce", "cunci", "cunco", "cunei", "cuneo", "cuoca", "cuoce", "cuoci", "cuoco", "cuoia", "cuoio", "cuora", "cuore", "cuori", "curai", "curda", "curde", "curdi", "curdo", "curia", "curie", "curii", "curio", "curri", "curro", "curry", "curva", "curve", "curvi", "curvo", "cusco", "cussi", "cusso", "dacci", "dache", "dacia", "dacie", "dafne", "dafni", "daghe", "dagli", "daina", "daine", "daini", "daino", "dalai", "dalia", "dalie", "dalla", "dalle", "dalli", "dallo", "damai", "damma", "damme", "dammi", "dance", "danda", "dande", "dando", "danna", "danne", "danni", "danno", "dante", "danti", "danza", "danze", "danzi", "danzo", "darai", "darci", "dardi", "dardo", "darei", "darla", "darle", "darli", "darlo", "darmi", "darne", "darsi", "darti", "darvi", "daspo", "datai", "datti", "dauni", "dazia", "dazio", "debba", "debbi", "debbo", "deche", "deghi", "degli", "degna", "degne", "degni", "degno", "delia", "delie", "delio", "della", "delle", "dello", "delta", "demmo", "densa", "dense", "densi", "denso", "denta", "dente", "denti", "dento", "derby", "derma", "dermi", "derno", "desco", "desia", "desii", "desio", "dessa", "desse", "dessi", "desso", "desta", "deste", "desti", "desto", "detox", "detta", "dette", "detti", "detto", "devia", "devie", "devii", "devio", "diade", "diadi", "diale", "diali", "diamo", "diana", "diane", "diano", "diapa", "diape", "diapi", "diapo", "diari", "diate", "diaza", "diaze", "diazi", "diazo", "dicai", "dicci", "dicco", "diche", "dichi", "dicta", "dieci", "diede", "diedi", "diene", "dieni", "dieri", "diesa", "diesi", "dieso", "dieta", "diete", "dieti", "dieto", "dighe", "digli", "dildi", "dildo", "dilla", "dille", "dilli", "dillo", "dimmi", "dimoi", "dindi", "dindo", "dingo", "dinka", "dinne", "diodi", "diodo", "dioli", "diolo", "diosi", "dipoi", "dirai", "dirci", "direi", "dirla", "dirle", "dirli", "dirlo", "dirmi", "dirne", "dirsi", "dirti", "dirvi", "disco", "disfa", "disfi", "disfo", "disia", "disii", "disio", "disse", "dissi", "dista", "disti", "disto", "ditta", "ditte", "ditti", "diula", "djaga", "doagi", "doari", "dobla", "doble", "dobli", "doblo", "dobra", "docce", "docci", "docmi", "dogai", "doghe", "doghi", "dogli", "dogma", "dogmi", "dogre", "dolai", "dolca", "dolce", "dolci", "dolco", "dolga", "dolgo", "dolio", "dolse", "dolsi", "dolta", "dolte", "dolti", "dolto", "domai", "domma", "dommi", "donai", "donde", "donna", "donne", "donni", "donno", "dopai", "doppi", "dorai", "doria", "dorio", "dorma", "dorme", "dormi", "dormo", "dorsi", "dorso", "dosai", "dossi", "dosso", "dotai", "dotta", "dotte", "dotti", "dotto", "doula", "doule", "dovei", "draba", "drabe", "draco", "draga", "drago", "drena", "dreni", "dreno", "drive", "droga", "drogo", "droma", "drome", "dromi", "dromo", "drone", "droni", "druda", "drude", "drudi", "drudo", "drupa", "drupe", "drusa", "druse", "drusi", "druso", "duagi", "duale", "duali", "dubbi", "ducai", "ducea", "ducee", "duchi", "duina", "duine", "duini", "duino", "dulia", "dulie", "duole", "duoli", "duolo", "duomi", "duomo", "dupla", "duple", "dupli", "duplo", "durai", "durio", "durra", "durre", "duvet", "dviii", "ebani", "ebano", "ebbio", "ebbra", "ebbre", "ebbri", "ebbro", "ebeni", "ebeno", "ebeta", "ebete", "ebeti", "ebeto", "ebola", "ebole", "ebook", "ebrea", "ebree", "ebrei", "ebreo", "ebuli", "ebulo", "echei", "echeo", "echio", "ecidi", "edace", "edaci", "edema", "edemi", "edera", "edere", "edile", "edili", "edipi", "edipo", "edita", "edite", "editi", "edito", "edona", "edone", "edoni", "edono", "educa", "educe", "educi", "educo", "edule", "eduli", "efebi", "efebo", "efesi", "efori", "eforo", "egena", "egene", "egeni", "egeno", "egida", "egide", "egira", "egire", "egizi", "ekiti", "elafe", "elafi", "eleni", "eleva", "elevi", "elevo", "elica", "elice", "elici", "elida", "elide", "elidi", "elido", "eliea", "eliee", "elima", "elime", "elimi", "elimo", "elisa", "elise", "elisi", "eliso", "elogi", "eluda", "elude", "eludi", "eludo", "eluii", "elusa", "eluse", "elusi", "eluso", "eluvi", "emaci", "email", "emale", "emali", "emana", "emani", "emano", "emeri", "emero", "emesi", "emica", "emici", "emico", "emide", "emidi", "emina", "emine", "emiri", "emiro", "emise", "emisi", "emoji", "emoni", "empia", "empie", "empii", "empio", "emula", "emule", "emuli", "emulo", "enema", "enemi", "enfia", "enfie", "enfio", "engri", "ennea", "ennee", "ennei", "enneo", "enoli", "enolo", "entra", "entri", "entro", "enula", "enule", "eolia", "eolie", "eolio", "epica", "epici", "epico", "epoca", "epodi", "epodo", "epura", "epuri", "epuro", "equai", "erada", "erade", "eradi", "erado", "erano", "erari", "erasa", "erase", "erasi", "eraso", "erbai", "erbio", "erebi", "erebo", "ereda", "erede", "eredi", "eredo", "eremi", "eremo", "ereta", "ereti", "ereto", "erica", "eriga", "erige", "erigi", "erigo", "ernia", "ernie", "ernio", "eroda", "erode", "erodi", "erodo", "eroga", "erogo", "erosa", "erose", "erosi", "eroso", "errai", "eruca", "erula", "erule", "eruli", "erulo", "erzya", "esala", "esali", "esalo", "esame", "esami", "esani", "esano", "esche", "eschi", "esiga", "esige", "esigi", "esigo", "esile", "esili", "esima", "esime", "esimi", "esimo", "esipi", "esipo", "esita", "esiti", "esito", "esizi", "esodi", "esodo", "esone", "esoni", "esora", "esori", "esoro", "esosa", "esose", "esosi", "esoso", "espia", "espii", "espio", "essai", "estia", "estie", "estii", "estio", "estri", "estro", "estua", "estui", "estuo", "esula", "esule", "esuli", "esulo", "esuma", "esumi", "esumo", "etani", "etano", "etate", "etati", "etene", "eteni", "etera", "etere", "eteri", "etero", "etesi", "ethos", "etica", "etici", "etico", "etile", "etili", "etimi", "etimo", "etini", "etino", "etnea", "etnee", "etnei", "etneo", "etnia", "etnie", "etola", "etole", "etoli", "etolo", "eutri", "evada", "evade", "evadi", "evado", "evasa", "evase", "evasi", "evaso", "evira", "eviri", "eviro", "evita", "eviti", "evito", "evoca", "evoco", "extra", "fabri", "fabro", "facce", "facci", "facto", "faggi", "fagli", "faida", "faide", "faina", "faine", "falba", "falbe", "falbi", "falbo", "falca", "falce", "falci", "falco", "falda", "falde", "faldi", "faldo", "falla", "falle", "falli", "fallo", "falsa", "false", "falsi", "falso", "famai", "fammi", "fanga", "fango", "fanne", "fanno", "fante", "fanti", "farad", "farai", "farce", "farci", "farda", "farde", "farea", "farei", "farla", "farle", "farli", "farlo", "farmi", "farne", "farri", "farro", "farsa", "farse", "farsi", "farso", "farti", "farvi", "fasai", "fasce", "fasci", "fasta", "faste", "fasti", "fasto", "fatai", "fatta", "fatte", "fatti", "fatto", "fatua", "fatue", "fatui", "fatuo", "fatwa", "fauce", "fauci", "fauna", "faune", "fauni", "fauno", "fauve", "favai", "faxai", "feace", "feaci", "febea", "febee", "febei", "febeo", "fecce", "fedai", "felce", "felci", "fella", "felle", "felli", "fello", "felpa", "felpe", "felpi", "felpo", "felse", "felsi", "felze", "felzi", "femme", "fence", "fenda", "fende", "fendi", "fendo", "feria", "ferie", "ferii", "ferla", "ferle", "ferma", "ferme", "fermi", "fermo", "ferra", "ferri", "ferro", "fersa", "ferse", "ferva", "ferve", "fervi", "fervo", "ferza", "ferze", "ferzi", "ferzo", "fessa", "fesse", "fessi", "fesso", "festa", "feste", "festi", "festo", "fetta", "fette", "feudi", "feudo", "fiaba", "fiabe", "fiala", "fiale", "fiani", "fiano", "fiata", "fiate", "fiati", "fiato", "fibra", "fibre", "ficca", "ficco", "ficea", "ficee", "fiche", "fichi", "ficus", "fidai", "fiele", "fieli", "fieni", "fieno", "fiera", "fiere", "fieri", "fiero", "fighe", "fighi", "figli", "filai", "filli", "fillo", "filma", "filmi", "filmo", "filza", "filze", "finca", "finga", "finge", "fingi", "fingo", "finii", "finna", "finne", "finni", "finno", "finse", "finsi", "finta", "finte", "finti", "finto", "fioca", "fioco", "fiora", "fiore", "fiori", "fioro", "fiote", "fioti", "firma", "firme", "firmi", "firmo", "fisai", "fisco", "fissa", "fisse", "fissi", "fisso", "fitta", "fitte", "fitti", "fitto", "fiume", "fiumi", "fiuta", "fiuti", "fiuto", "flake", "flana", "flani", "flano", "flash", "flati", "flato", "flava", "flave", "flavi", "flavo", "flebo", "fleti", "fleto", "flirt", "flora", "flore", "fluii", "fobia", "fobie", "focea", "focee", "focei", "foceo", "foche", "fochi", "focus", "fodri", "fodro", "fogge", "foggi", "foghe", "fogli", "fogna", "fogne", "fogni", "fogno", "foiba", "foibe", "folce", "folco", "folio", "folla", "folle", "folli", "follo", "folta", "folte", "folti", "folto", "fonai", "fonda", "fonde", "fondi", "fondo", "fonia", "fonie", "fonte", "fonti", "forai", "forca", "force", "forci", "forge", "forgi", "forma", "forme", "formi", "formo", "forni", "forno", "forra", "forre", "forse", "forte", "forti", "forum", "forza", "forze", "forzi", "forzo", "fosca", "fosco", "fossa", "fosse", "fossi", "fosso", "foste", "fosti", "fotta", "fotte", "fotti", "fotto", "fovea", "fovee", "foyer", "fraga", "frale", "frali", "frame", "frana", "frane", "frani", "frano", "frase", "frasi", "frate", "frati", "frega", "fregi", "frego", "frema", "freme", "fremi", "fremo", "frena", "freni", "freno", "freon", "fresa", "frese", "fresi", "freso", "frigi", "frigo", "frine", "frini", "frisa", "frisi", "friso", "froda", "frode", "frodi", "frodo", "froge", "fruga", "frugo", "fruii", "ftori", "ftoro", "fuchi", "fuffa", "fuffe", "fugai", "fugga", "fugge", "fuggi", "fuggo", "fughe", "fughi", "fulbe", "fulbi", "fulga", "fulge", "fulgi", "fulgo", "fulsa", "fulse", "fulsi", "fulso", "fulva", "fulve", "fulvi", "fulvo", "fumai", "fumea", "fumee", "fumei", "fumeo", "fumma", "fummi", "fummo", "funai", "fundo", "funga", "funge", "fungi", "fungo", "funky", "funse", "funsi", "funta", "funte", "funti", "funto", "fuoco", "fuori", "furai", "furba", "furbe", "furbi", "furbo", "furca", "furia", "furie", "furio", "furti", "furto", "fusai", "fusta", "fuste", "fusti", "fusto", "futon", "fuxia", "fuxie", "fuzzy", "gabba", "gabbi", "gabbo", "gaela", "gaele", "gaeli", "gaelo", "gaffa", "gaffe", "gagge", "gaggi", "galea", "galee", "galei", "galeo", "galgo", "galio", "galla", "galle", "galli", "gallo", "gamba", "gambe", "gambi", "gambo", "gamia", "gamie", "gamma", "gamme", "ganci", "ganda", "gande", "ganga", "gange", "ganza", "ganze", "ganzi", "ganzo", "garba", "garbe", "garbi", "garbo", "garga", "gargo", "garni", "garza", "garze", "garzi", "garzo", "gasai", "gasco", "gassa", "gasse", "gassi", "gasso", "gatta", "gatte", "gatti", "gatto", "gauda", "gaude", "gaudi", "gaudo", "gauge", "gauli", "gaulo", "gauta", "gaute", "gauti", "gauto", "gazai", "gazza", "gazze", "gazzi", "gazzo", "gechi", "gelai", "gelao", "gelsa", "gelse", "gelsi", "gelso", "gemei", "gemma", "gemme", "gemmi", "gemmo", "genai", "genia", "genie", "genio", "genoa", "gente", "genti", "genue", "geode", "geodi", "geomi", "gerba", "gerbe", "gergo", "gerla", "gerle", "gerli", "gerlo", "germa", "germe", "germi", "gessa", "gessi", "gesso", "gesta", "gesti", "gesto", "getta", "getti", "getto", "ghali", "ghega", "ghegi", "ghego", "ghiri", "ghiro", "ghisa", "ghise", "giace", "giaci", "giaco", "giada", "giade", "giani", "giano", "giara", "giare", "giava", "giave", "gibbi", "gibbo", "gighe", "gigli", "gilda", "gilde", "gilet", "gimmo", "ginna", "ginni", "ginno", "gioca", "gioco", "giogo", "gioia", "gioie", "gioii", "gioio", "giova", "giovi", "giovo", "girai", "girci", "girei", "girii", "girio", "girla", "girle", "girli", "girlo", "girmi", "girne", "girsi", "girti", "girvi", "gisse", "gissi", "giste", "gisti", "gitta", "gitti", "gitto", "giuba", "giube", "giuda", "giuli", "giura", "giure", "giuri", "giuro", "giuso", "gladi", "gleba", "glebe", "glena", "glene", "gleni", "glifi", "glifo", "globe", "globi", "globo", "glomi", "glomo", "glori", "gluma", "glume", "gnidi", "gnome", "gnomi", "gnomo", "gnosi", "gnuda", "gnude", "gnudi", "gnudo", "gobba", "gobbe", "gobbi", "gobbo", "gocce", "gocci", "godei", "godii", "godio", "goffa", "goffe", "goffi", "goffo", "gogna", "gogne", "goldi", "golea", "golei", "goleo", "golfi", "golfo", "golia", "golpe", "gombe", "gombi", "gombo", "gomma", "gomme", "gommi", "gommo", "gonda", "gonde", "gondi", "gondo", "gonfa", "gonfe", "gonfi", "gonfo", "gonga", "gonio", "gonja", "gonna", "gonne", "gonza", "gonze", "gonzi", "gonzo", "gordi", "gorga", "gorge", "gorgo", "gorna", "gorne", "gotha", "gotta", "gotte", "gotti", "gotto", "gouda", "gozzi", "gozzo", "grada", "grade", "gradi", "grado", "grafi", "grafo", "graia", "graie", "graii", "graio", "grama", "grame", "grami", "gramo", "grana", "grane", "grani", "grano", "grata", "grate", "grati", "grato", "grava", "grave", "gravi", "gravo", "grazi", "greca", "greci", "greco", "gremi", "greti", "greto", "greve", "grevi", "grica", "grici", "grico", "grida", "gride", "gridi", "grido", "grifa", "grifi", "grifo", "grigi", "grola", "grole", "groma", "grome", "grufa", "grufi", "grufo", "gruga", "grugo", "gruma", "grume", "grumi", "grumo", "grusi", "guaco", "guada", "guade", "guadi", "guado", "guaii", "guaio", "guani", "guano", "guari", "guata", "guati", "guato", "gufai", "guida", "guide", "guidi", "guido", "guina", "guini", "guino", "guisa", "guise", "gulag", "gurge", "gurgi", "gusci", "gusla", "gusta", "gusti", "gusto", "gutea", "gutee", "gutei", "guteo", "gutti", "gutto", "guzla", "guzle", "gwari", "hafni", "haida", "haiku", "hakka", "hallo", "hamza", "hanno", "harem", "haute", "hedge", "hello", "henna", "henne", "hertz", "hevea", "hevee", "hijab", "hindi", "hobby", "hokka", "hokke", "hokki", "hokko", "holmi", "hotel", "house", "huave", "huavi", "huchi", "hudna", "iacea", "iacee", "iarda", "iarde", "ibera", "ibere", "iberi", "ibero", "iblea", "iblee", "iblei", "ibleo", "icari", "icena", "icene", "iceni", "iceno", "icona", "icone", "icore", "icori", "ictus", "idali", "iddia", "iddie", "iddio", "ideai", "idoli", "idolo", "idria", "idrie", "iella", "ielle", "iesta", "ieste", "iesti", "iesto", "ietta", "ietti", "ietto", "ifale", "ifali", "ifema", "ifemi", "igloo", "ignea", "ignee", "ignei", "igneo", "ilare", "ilari", "ilice", "ilici", "ilide", "ilidi", "illea", "illee", "illei", "illeo", "ilota", "ilote", "iloti", "image", "imago", "imani", "imano", "imati", "imene", "imeni", "imita", "imiti", "imito", "inala", "inali", "inalo", "inane", "inani", "incoa", "incoi", "incoo", "india", "indie", "indio", "infoi", "infra", "ingoi", "ingri", "inizi", "inlei", "inlui", "inmia", "inmio", "inoli", "inoma", "inomi", "inope", "inopi", "insce", "insci", "insta", "insti", "insto", "intra", "intro", "inula", "inule", "inuma", "inumi", "inumo", "invai", "invia", "invii", "invio", "iodai", "iodio", "ioide", "ioidi", "iolla", "iolle", "ionia", "ionie", "ionio", "ipate", "ipati", "ippia", "ippie", "ippii", "ippio", "irace", "iraci", "irata", "irate", "irati", "irato", "irchi", "irida", "iride", "iridi", "irido", "irite", "iriti", "iroki", "iroko", "irosa", "irose", "irosi", "iroso", "irula", "ischi", "islam", "isodi", "isola", "isole", "isoli", "isolo", "isopi", "isopo", "issai", "istai", "istle", "istmi", "istmo", "isuri", "isuro", "itaci", "itaco", "itala", "itale", "itali", "italo", "itera", "iteri", "itero", "iucca", "iulca", "iulco", "iurta", "iurte", "ivata", "ivate", "ivati", "ivato", "jeans", "jihad", "jolly", "joule", "jumbo", "junci", "junco", "kaaba", "kakwa", "kamti", "kanji", "kansa", "kaone", "kaoni", "kappa", "karma", "kasba", "kayak", "kebab", "kendo", "khasi", "kiowa", "kissi", "kitai", "kiwai", "koala", "konde", "kondi", "konga", "konge", "kongi", "kongo", "konta", "kulla", "kulle", "kulli", "kullo", "kunta", "kurda", "kurde", "kurdi", "kurdo", "kwena", "kyrie", "labbi", "labbo", "labda", "labio", "labri", "labro", "lacca", "lacce", "lacci", "lacco", "ladra", "ladre", "ladri", "ladro", "laghi", "lagna", "lagne", "lagni", "lagno", "laica", "laici", "laico", "laida", "laide", "laidi", "laido", "lamai", "lamba", "lambe", "lambi", "lambo", "lamia", "lamie", "lamio", "lampa", "lampe", "lampi", "lampo", "lanca", "lance", "lanci", "landa", "lande", "lanea", "lanee", "lanei", "laneo", "lanfa", "lanfe", "langa", "lange", "lania", "lanio", "lanzi", "lanzo", "lapis", "lappa", "lappe", "lappi", "lappo", "larda", "lardi", "lardo", "larga", "large", "largo", "larva", "larve", "larvi", "larvo", "lasca", "lasci", "lasco", "laser", "lassa", "lasse", "lassi", "lasso", "lasta", "laste", "latra", "latri", "latro", "latta", "latte", "latti", "latto", "lauda", "laude", "laudi", "laura", "laure", "lauri", "lauro", "lauta", "laute", "lauti", "lauto", "lavai", "lavia", "lavie", "lavra", "lavre", "lazza", "lazze", "lazzi", "lazzo", "leale", "leali", "lebbi", "lecca", "lecce", "lecci", "lecco", "legai", "legga", "legge", "leggi", "leggo", "leghe", "leghi", "legna", "legni", "legno", "lella", "lelle", "lelli", "lello", "lembi", "lembo", "lemma", "lemme", "lemmi", "lemmo", "lemna", "lemne", "lenca", "lenci", "lenea", "lenee", "lenei", "leneo", "lenii", "lenta", "lente", "lenti", "lento", "lenza", "lenze", "lenzi", "lenzo", "leone", "leoni", "leppa", "leppi", "leppo", "lepra", "lepre", "lepri", "lerce", "lerci", "lesbi", "lesbo", "lesca", "lessa", "lesse", "lessi", "lesso", "lesta", "leste", "lesti", "lesto", "letea", "letee", "letei", "leteo", "letri", "letro", "letta", "lette", "letti", "letto", "leuca", "leuci", "leuco", "leuti", "leuto", "levai", "lezia", "lezie", "lezio", "lezza", "lezze", "lezzi", "lezzo", "liana", "liane", "libai", "libra", "libre", "libri", "libro", "licci", "licei", "liceo", "licia", "licie", "licio", "lidar", "lidia", "lidie", "lidio", "lieta", "liete", "lieti", "lieto", "lieve", "lievi", "lifta", "lifti", "lifto", "ligei", "ligeo", "ligia", "ligie", "ligio", "ligre", "ligri", "lilla", "limai", "limbi", "limbo", "limii", "limio", "limma", "limmi", "linai", "lince", "linci", "linda", "linde", "lindi", "lindo", "linea", "linee", "linei", "lineo", "linfa", "linfe", "lingi", "linka", "linki", "linko", "lippa", "lippe", "lippi", "lippo", "liqua", "liqui", "liquo", "lisai", "lisca", "lisce", "lisci", "lissa", "lisse", "lissi", "lisso", "lista", "liste", "listi", "listo", "litai", "litio", "litra", "litre", "litri", "litro", "litta", "litte", "litui", "lituo", "liuti", "liuto", "lizza", "lizze", "lizzi", "lizzo", "lobby", "locai", "locca", "locco", "lochi", "lodai", "loden", "lodge", "loffa", "loffe", "loffi", "loffo", "lofio", "logga", "logge", "loggo", "loghi", "logia", "logli", "logra", "logri", "logro", "loica", "loici", "loico", "lolla", "lolle", "lombi", "lombo", "lompi", "lompo", "longa", "longo", "lonza", "lonze", "loppa", "loppe", "loppi", "loppo", "lorda", "lorde", "lordi", "lordo", "lorio", "losca", "losco", "lotta", "lotte", "lotti", "lotto", "lucci", "lucco", "lucea", "lucei", "luchi", "lucia", "lucie", "lucra", "lucri", "lucro", "ludra", "ludre", "ludri", "ludro", "luena", "luese", "luesi", "luffa", "luffe", "lugli", "lugre", "lugri", "lugro", "luigi", "lulla", "lulle", "lumai", "lumia", "lumie", "lumpi", "lumpo", "lunda", "lunga", "lungi", "lungo", "luogo", "lurca", "lurco", "lusca", "lusco", "lussa", "lussi", "lusso", "lutai", "lutea", "lutee", "lutei", "luteo", "lutta", "lutti", "lutto", "luvia", "luvie", "luvii", "luvio", "lycra", "macao", "macca", "macco", "machi", "macho", "macia", "macie", "macro", "madia", "madie", "madre", "madri", "mafia", "mafie", "mafio", "magai", "maggi", "maghe", "maghi", "magia", "magie", "magio", "magli", "magma", "magmi", "magna", "magne", "magni", "magno", "magra", "magre", "magri", "magro", "maide", "maidi", "maina", "maini", "maino", "malga", "malgo", "malia", "malie", "malli", "mallo", "malta", "malte", "malti", "malto", "malva", "malve", "mamba", "mambi", "mambo", "mamma", "mamme", "mammi", "mammo", "manaa", "manae", "manai", "manao", "manca", "mance", "manco", "manda", "mande", "mandi", "mando", "manga", "mangi", "mango", "mania", "manie", "manna", "manne", "mansa", "manse", "mansi", "manso", "manta", "mante", "manti", "manto", "manza", "manze", "manzi", "manzo", "maona", "maone", "maori", "mappa", "mappe", "mappi", "mappo", "marca", "marce", "marci", "marco", "marea", "maree", "margi", "margo", "marma", "marmi", "marmo", "marna", "marne", "marni", "marno", "marra", "marre", "marsa", "marse", "marsi", "marso", "marza", "marze", "marzi", "marzo", "masai", "massa", "masse", "massi", "masso", "masti", "matta", "matte", "matti", "matto", "maura", "maure", "mauri", "mauro", "mauve", "mauvi", "mazza", "mazze", "mazzi", "mazzo", "mbaka", "mbaya", "meaci", "meala", "meale", "meali", "mealo", "meami", "meane", "meano", "meare", "meata", "meate", "meati", "meato", "meava", "meavi", "meavo", "mecca", "media", "medie", "medio", "meino", "mekea", "mekee", "mekei", "mekeo", "melai", "melba", "melda", "melde", "meldi", "meldo", "melia", "melie", "melii", "melio", "melma", "melme", "meloe", "meloi", "menai", "mence", "menci", "menda", "mende", "mendi", "mendo", "menga", "menri", "mensa", "mense", "menta", "mente", "menti", "mento", "meoni", "meoti", "merca", "merce", "merci", "merco", "merda", "merde", "merga", "merge", "mergi", "mergo", "meria", "merie", "merio", "merla", "merle", "merli", "merlo", "mersa", "merse", "mersi", "merso", "mesca", "mesce", "mesci", "mesco", "messa", "messe", "messi", "messo", "mesta", "meste", "mesti", "mesto", "meteo", "metri", "metro", "metta", "mette", "metti", "metto", "mezza", "mezze", "mezzi", "mezzo", "miasi", "micca", "micce", "micci", "micco", "miche", "micia", "micie", "micio", "micro", "miele", "mieli", "mieta", "miete", "mieti", "mieto", "migma", "migmi", "migra", "migri", "migro", "milia", "milio", "mille", "milza", "milze", "mimai", "mimma", "mimme", "mimmi", "mimmo", "minai", "minea", "minee", "minei", "mineo", "minga", "minge", "mingi", "mingo", "minia", "minio", "minna", "minne", "minse", "minsi", "mioma", "miomi", "miope", "miopi", "miosi", "mirai", "mirra", "mirre", "mirri", "mirro", "mirti", "mirto", "misia", "misie", "misii", "misio", "missa", "missi", "misso", "mista", "miste", "misti", "misto", "mitra", "mitre", "mitri", "mitro", "mitti", "mitto", "mixai", "mixer", "mocci", "mochi", "mocoa", "modem", "modio", "moggi", "mogia", "mogie", "mogio", "mogli", "moina", "moine", "moira", "moire", "molai", "molca", "molce", "molla", "molle", "molli", "mollo", "molta", "molte", "molti", "molto", "molva", "molve", "monca", "monco", "monda", "monde", "mondi", "mondo", "monna", "monne", "monta", "monte", "monti", "monto", "moqui", "morai", "morbi", "morbo", "morda", "morde", "mordi", "mordo", "morfi", "morfo", "moria", "morie", "morii", "morra", "morre", "morsa", "morse", "morsi", "morso", "morta", "morte", "morti", "morto", "morva", "morve", "mosca", "mosce", "mosci", "mosco", "mossa", "mosse", "mossi", "mosso", "mosti", "mosto", "motta", "motte", "motti", "motto", "mouse", "movie", "mozza", "mozze", "mozzi", "mozzo", "mucca", "mucci", "mucco", "muchi", "mudai", "muffa", "muffe", "muffi", "muffo", "mufti", "mughi", "mugli", "mulsi", "mulso", "multa", "multe", "multi", "multo", "mundi", "munga", "munge", "mungi", "mungo", "munii", "munse", "munsi", "munta", "munte", "munti", "munto", "muoia", "muoio", "muone", "muoni", "muore", "muori", "muova", "muove", "muovi", "muovo", "murai", "murge", "muria", "murie", "murmi", "murra", "murre", "musai", "musco", "musei", "museo", "mussa", "musse", "mussi", "musso", "mutai", "mutua", "mutue", "mutui", "mutuo", "nabla", "nabli", "nadir", "nafta", "nafte", "nahua", "naibi", "naide", "naidi", "naira", "nakfa", "nanfa", "nanfe", "nanna", "nanne", "nante", "nanzi", "napea", "napee", "nappa", "nappe", "nappi", "nappo", "narco", "nardi", "nardo", "narra", "narri", "narro", "nasai", "nasca", "nasce", "nasci", "nasco", "nashi", "naspi", "naspo", "nassa", "nasse", "nassi", "nasso", "nasua", "nasue", "natai", "natia", "natie", "natii", "natio", "natta", "natte", "nause", "nauta", "nauti", "ndoga", "ndoge", "ndogi", "ndogo", "nebbi", "necai", "necce", "necci", "nechi", "negai", "neghi", "negli", "nella", "nelle", "nello", "nembi", "nembo", "nemea", "nemee", "nemei", "nemeo", "nence", "nenci", "nenia", "nenie", "nerba", "nerbi", "nerbo", "nervi", "nervo", "nesce", "nesci", "nessi", "nesso", "nesta", "nesti", "nesto", "netta", "nette", "netti", "netto", "neuma", "neumi", "neura", "neure", "neuri", "neuro", "nevai", "ngala", "nguni", "nibbi", "nicce", "nicci", "niego", "nievi", "nievo", "nimbi", "nimbo", "ninfa", "ninfe", "ninja", "ninna", "ninne", "ninni", "ninno", "niobi", "nisba", "nitra", "nitri", "nitro", "niuna", "niune", "niuni", "niuno", "nivea", "nivee", "nivei", "niveo", "nobel", "nocca", "noema", "noemi", "noesi", "nogai", "noghi", "nomai", "nomea", "nomee", "nonio", "nonna", "nonne", "nonni", "nonno", "noria", "norie", "norma", "norme", "normi", "normo", "norna", "norne", "notai", "notta", "notte", "notti", "notto", "novai", "novio", "nozze", "nuche", "nudai", "nugae", "nulla", "nulle", "nulli", "nullo", "nummi", "nummo", "nunci", "nunzi", "nuoce", "nuoci", "nuora", "nuore", "nuota", "nuoti", "nuoto", "nuova", "nuove", "nuovi", "nuovo", "nurse", "nutka", "nutra", "nutre", "nutri", "nutro", "nyala", "nylon", "obbli", "obeli", "obelo", "obera", "oberi", "obero", "obesa", "obese", "obesi", "obeso", "obice", "obici", "obiti", "obito", "oblai", "oblia", "oblii", "oblio", "oboli", "obolo", "ocche", "occhi", "ocimi", "ocimo", "ocrea", "ocree", "oculi", "oculo", "odano", "oddio", "odiai", "odici", "odila", "odile", "odili", "odilo", "odimi", "odine", "odino", "odire", "odita", "odite", "oditi", "odito", "odiva", "odivi", "odivo", "odono", "odora", "odore", "odori", "odoro", "odrai", "oecio", "offra", "offre", "offri", "offro", "ofide", "ofidi", "ofite", "ofiti", "ogiva", "ogive", "oiana", "oidio", "okapi", "oleai", "olfai", "oliai", "olino", "olire", "olita", "olite", "oliti", "olito", "oliva", "olive", "olivi", "olivo", "olmio", "olona", "olone", "olora", "olore", "olori", "oloro", "oltra", "oltre", "omaha", "omani", "omano", "omari", "omaro", "omasi", "omaso", "ombra", "ombre", "ombri", "ombro", "omega", "omeri", "omero", "omese", "omesi", "omini", "omino", "omise", "omisi", "omnia", "omone", "omoni", "oncia", "ondai", "onera", "onere", "oneri", "onero", "onese", "onesi", "onice", "onici", "onora", "onore", "onori", "onoro", "onrai", "opaca", "opaci", "opaco", "opale", "opali", "opata", "opera", "opere", "operi", "opero", "opica", "opici", "opico", "opima", "opime", "opimi", "opimo", "opina", "opini", "opino", "oppia", "oppio", "optai", "oraci", "orafa", "orafe", "orafi", "orafo", "orala", "orale", "orali", "oralo", "orami", "orane", "orano", "orare", "orari", "orata", "orate", "orati", "orato", "orava", "oravi", "oravo", "orbai", "orche", "orchi", "orcio", "ordii", "orfea", "orfee", "orgia", "oribi", "orice", "orici", "orige", "origi", "orina", "orine", "orini", "orino", "orlai", "ormai", "ornai", "orobi", "oroci", "oroki", "oroma", "orome", "oromi", "oromo", "orrea", "orree", "orrei", "orreo", "orrii", "orzai", "osaci", "osage", "osagi", "osala", "osale", "osali", "osalo", "osami", "osane", "osano", "osare", "osata", "osate", "osati", "osato", "osava", "osavi", "osavo", "oscar", "osche", "osino", "osmio", "ossea", "ossee", "ossei", "osseo", "ossia", "ostai", "osteo", "ostia", "ostie", "ostio", "ostri", "ostro", "otica", "otici", "otico", "otide", "otidi", "otite", "otiti", "ottri", "ovaia", "ovaie", "ovaio", "ovale", "ovali", "ovari", "ovata", "ovate", "ovati", "ovato", "ovest", "ovile", "ovili", "ovina", "ovine", "ovini", "ovino", "ovoli", "ovolo", "ovula", "ovuli", "ovulo", "ovvia", "ovvie", "ovvii", "ovvio", "oyana", "ozena", "ozene", "oziai", "ozino", "ozoni", "ozono", "pabbi", "pacai", "pacca", "pacco", "pachi", "pacia", "pacio", "pacta", "padda", "padre", "padri", "paese", "paesi", "pafia", "pafie", "pafii", "pafio", "pagai", "paggi", "paghe", "paghi", "pagri", "pagro", "paini", "paino", "paisa", "palai", "palco", "palea", "palee", "palei", "paleo", "palio", "palla", "palle", "palli", "pallo", "palma", "palme", "palmi", "palmo", "palpa", "palpi", "palpo", "palta", "palte", "pampa", "panai", "panca", "pance", "panda", "pande", "pandi", "pando", "pania", "panie", "panna", "panne", "panni", "panno", "pansa", "panse", "pansi", "panso", "panza", "panze", "paoli", "paolo", "pappa", "pappe", "pappi", "pappo", "papua", "parai", "parca", "parce", "parci", "parco", "pardi", "pardo", "parei", "pareo", "paria", "parie", "parii", "pario", "parka", "parla", "parli", "parlo", "parma", "parme", "parra", "parre", "parsa", "parse", "parsi", "parso", "parta", "parte", "parti", "parto", "parva", "parve", "parvi", "parvo", "pasca", "pasce", "pasci", "pasco", "passa", "passe", "passi", "passo", "pasta", "paste", "pasti", "pasto", "patia", "patie", "patii", "patio", "patre", "patri", "patta", "patte", "patti", "patto", "paura", "paure", "pausa", "pause", "pausi", "pauso", "pavia", "pavie", "pazza", "pazze", "pazzi", "pazzo", "peace", "peaci", "peana", "peani", "peata", "peate", "pecca", "pecce", "pecci", "pecco", "pechi", "pecia", "pecie", "pedio", "pegni", "pegno", "pekoe", "pelai", "pelea", "pelee", "pelei", "peleo", "pelle", "pelli", "pelta", "pelte", "pelvi", "penai", "penda", "pende", "pendi", "pendo", "penei", "peneo", "penna", "penne", "pensa", "pensi", "penso", "penta", "pente", "penti", "pento", "peoci", "peone", "peoni", "peota", "peote", "pepai", "pepli", "peplo", "pepsi", "perca", "perda", "perde", "perdi", "perdo", "perii", "perla", "perle", "perni", "perno", "persa", "perse", "persi", "perso", "pervi", "pesai", "pesca", "pesce", "pesci", "pesco", "pesta", "peste", "pesti", "pesto", "petai", "petti", "petto", "pezza", "pezze", "pezzi", "pezzo", "phone", "photo", "phyla", "piace", "piaci", "piada", "piade", "piaga", "piago", "piala", "piale", "piali", "pialo", "piami", "piamo", "piana", "piane", "piani", "piano", "piare", "piata", "piate", "piati", "piato", "piava", "piavi", "piavo", "picca", "picce", "picco", "picea", "picee", "picei", "piceo", "piche", "pichi", "picio", "piede", "piedi", "piega", "piego", "piena", "piene", "pieni", "pieno", "pieri", "piese", "piesi", "pieta", "piete", "pieve", "pievi", "pighi", "pigia", "pigii", "pigio", "pigli", "pigna", "pigne", "pigra", "pigre", "pigri", "pigro", "piino", "pilai", "pilei", "pileo", "pilla", "pilli", "pillo", "pinai", "pinca", "pince", "pinco", "pinea", "pinee", "pinei", "pineo", "pinna", "pinne", "pinsa", "pinse", "pinta", "pinte", "pinti", "pinto", "pinza", "pinze", "pinzi", "pinzo", "pioda", "piode", "piola", "piole", "pioli", "piolo", "pione", "pioni", "piota", "piote", "pioti", "pioto", "piova", "piove", "piovi", "piovo", "pipai", "pipia", "pipio", "pippa", "pippe", "pippi", "pippo", "pipra", "pipre", "pirla", "pirli", "pirlo", "pisce", "pisci", "pissi", "pista", "piste", "pitia", "pitie", "pitta", "pitte", "pitti", "pitto", "piuma", "piume", "piumi", "piumo", "pizia", "pizie", "pizio", "pizza", "pizze", "pizzi", "pizzo", "placa", "place", "placo", "plaga", "plagi", "plana", "plani", "plano", "plebe", "plebi", "plica", "plico", "ploia", "ploie", "plora", "plori", "ploro", "ploti", "ploto", "plugo", "pluvi", "pocci", "poche", "pochi", "podio", "podza", "podze", "podzi", "podzo", "poema", "poemi", "poeta", "poeti", "poeto", "pogai", "pogge", "poggi", "poghi", "poise", "poker", "polca", "polii", "polio", "polka", "polke", "polla", "polle", "polli", "pollo", "polpa", "polpe", "polpi", "polpo", "polsi", "polso", "polta", "polte", "polve", "polvi", "pomai", "pomfi", "pomfo", "pompa", "pompe", "pompi", "pompo", "ponce", "ponci", "ponda", "pondi", "pondo", "ponfi", "ponfo", "ponga", "pongo", "ponta", "ponte", "ponti", "ponto", "ponza", "ponzi", "ponzo", "poppa", "poppe", "poppi", "poppo", "porca", "porci", "porco", "porga", "porge", "porgi", "porgo", "porla", "porle", "porli", "porlo", "pormi", "porne", "porno", "porre", "porri", "porro", "porse", "porsi", "porta", "porte", "porti", "porto", "porvi", "posai", "posca", "possa", "posse", "possi", "posso", "posta", "poste", "posti", "posto", "potai", "potei", "potta", "potte", "poule", "pozza", "pozze", "pozzi", "pozzo", "praho", "prana", "prasi", "prati", "prato", "prava", "prave", "pravi", "pravo", "prece", "preci", "preco", "preda", "prede", "predi", "predo", "prega", "pregi", "prego", "preli", "prema", "preme", "premi", "premo", "presa", "prese", "presi", "preso", "prete", "preti", "previ", "price", "pride", "prima", "prime", "primi", "primo", "priva", "prive", "privi", "privo", "proba", "probe", "probi", "probo", "proci", "proco", "proda", "prode", "prodi", "prole", "proli", "promo", "prona", "prone", "proni", "prono", "prora", "prore", "prosa", "prose", "prosi", "proso", "proti", "proto", "prova", "prove", "provi", "provo", "prozi", "pruda", "prude", "prudi", "prudo", "pruna", "prune", "pruni", "pruno", "psico", "psoco", "psofi", "psofo", "ptini", "ptino", "ptosi", "pucci", "puffi", "puffo", "pugge", "puggi", "pugio", "pugna", "pugne", "pugni", "pugno", "puina", "puine", "pulca", "pulce", "pulci", "pulii", "pulka", "pulke", "pulla", "pulle", "pulli", "pullo", "pulsa", "pulsi", "pulso", "punci", "punga", "punge", "pungi", "pungo", "punii", "punse", "punsi", "punta", "punte", "punti", "punto", "puppa", "puppi", "puppo", "purai", "purea", "puree", "purga", "purgo", "pussa", "pussi", "pusso", "pusta", "puste", "putai", "putii", "putre", "putri", "putta", "putte", "putti", "putto", "puzza", "puzze", "puzzi", "puzzo", "qasba", "qasbe", "qibla", "quada", "quade", "quadi", "quado", "quale", "quali", "quare", "quark", "quasi", "queta", "queto", "quici", "quija", "quije", "quiji", "quijo", "quina", "quine", "quini", "quino", "quita", "quiti", "quito", "quivi", "quota", "quote", "quoti", "quoto", "rabbi", "rabia", "racca", "racco", "racla", "racle", "radia", "radio", "radon", "raffa", "raffe", "raffi", "raffo", "rafia", "rafie", "raggi", "raghe", "ragia", "ragie", "ragli", "ragna", "ragne", "ragni", "ragno", "raiai", "raide", "raidi", "raino", "raita", "raiti", "raito", "ralla", "ralle", "ralli", "rallo", "ramai", "rambo", "ramea", "ramee", "ramei", "ramen", "rameo", "ramia", "ramie", "ramni", "ramno", "rampa", "rampe", "rampi", "rampo", "ranca", "rance", "ranci", "ranco", "randa", "rande", "ranfi", "range", "rango", "ranni", "ranno", "rapai", "rapii", "rappa", "rappe", "rasai", "rasce", "rasoi", "raspa", "raspe", "raspi", "raspo", "rasta", "ratea", "ratei", "rateo", "ratio", "ratta", "ratte", "ratti", "ratto", "rauca", "rauco", "razza", "razze", "razzi", "razzo", "reale", "reali", "reame", "reami", "reati", "reato", "rebbi", "rebus", "recai", "recei", "rechi", "recto", "redai", "redii", "reese", "reesi", "regga", "regge", "reggi", "reggo", "regia", "regie", "regio", "regna", "regni", "regno", "reide", "reidi", "reiki", "relax", "remai", "renai", "renda", "rende", "rendi", "rendo", "renio", "renna", "renne", "rensa", "rense", "repli", "replo", "requi", "resca", "resia", "resie", "respi", "respo", "ressa", "resse", "ressi", "resta", "reste", "resti", "resto", "retai", "retea", "retee", "retei", "reteo", "retri", "retro", "retta", "rette", "retti", "retto", "reuma", "reumi", "rezza", "rezze", "rezzi", "rezzo", "riale", "riali", "riama", "riami", "riamo", "riara", "riari", "riaro", "ribes", "ricca", "ricce", "ricci", "ricco", "ridai", "ridda", "ridde", "riddi", "riddo", "ridia", "rieda", "riede", "riedi", "riedo", "riera", "rieri", "riero", "rifai", "riffa", "riffe", "rifui", "rigai", "rigge", "righe", "righi", "rigna", "rigni", "rigno", "rimai", "rioca", "rioco", "rioda", "riode", "riodi", "riodo", "rione", "rioni", "ripii", "risai", "risei", "risia", "risii", "risma", "risme", "rispi", "rissa", "risse", "rissi", "risso", "ritma", "ritmi", "ritmo", "ritta", "ritte", "ritti", "ritto", "riusa", "riusi", "riuso", "rivai", "rizza", "rizze", "rizzi", "rizzo", "roana", "roane", "roani", "roano", "robbi", "robot", "rocca", "rocce", "rocco", "roche", "rochi", "rodai", "rodei", "rodeo", "rodia", "rodie", "rodii", "rodio", "roese", "roesi", "rogai", "rogge", "roggi", "roghi", "rogna", "rogne", "rogni", "rogno", "rolla", "rolli", "rollo", "romba", "rombe", "rombi", "rombo", "romea", "romee", "romei", "romeo", "rompa", "rompe", "rompi", "rompo", "ronca", "ronco", "ronda", "ronde", "rondi", "rondo", "ronfa", "ronfe", "ronfi", "ronfo", "ronza", "ronzi", "ronzo", "rorai", "rosai", "rosea", "rosee", "rosei", "roseo", "rospi", "rospo", "rossa", "rosse", "rossi", "rosso", "rosta", "roste", "rosti", "rosto", "rotai", "rotea", "rotei", "roteo", "rotta", "rotte", "rotti", "rotto", "rouge", "rovai", "rozza", "rozze", "rozzi", "rozzo", "rubai", "rubbi", "rubbo", "rubea", "rubee", "rubei", "rubeo", "rubli", "rublo", "rubra", "rubre", "rubri", "rubro", "ruche", "ruese", "ruesi", "ruffa", "ruffe", "rugai", "rugby", "rughe", "rughi", "rugli", "ruina", "ruini", "ruino", "rulla", "rulli", "rullo", "rumai", "rumba", "rumbe", "rumme", "rummi", "ruoli", "ruolo", "ruota", "ruote", "ruoti", "ruoto", "rupia", "rupie", "ruppe", "ruppi", "rusca", "rusco", "ruspa", "ruspe", "ruspi", "ruspo", "russa", "russe", "russi", "russo", "rutta", "rutti", "rutto", "ruzza", "ruzze", "ruzzi", "ruzzo", "saale", "saali", "sabba", "sabbi", "sabea", "sabee", "sabei", "sabeo", "sabia", "sabie", "sabii", "sabio", "sabra", "sacca", "sacco", "sacia", "sacie", "sacio", "sacra", "sacre", "sacri", "sacro", "saffo", "sagge", "saggi", "saghe", "saghi", "sagii", "sagna", "sagni", "sagno", "sagra", "sagre", "sagri", "sagro", "saiga", "saime", "saimi", "salai", "salda", "salde", "saldi", "saldo", "salga", "salgo", "salii", "salio", "salma", "salme", "salmi", "salmo", "salpa", "salpe", "salpi", "salpo", "salsa", "salse", "salsi", "salso", "salta", "salti", "salto", "salva", "salve", "salvi", "salvo", "samba", "samia", "samie", "samii", "samio", "sanai", "sanie", "sanno", "sansa", "sanse", "santa", "sante", "santi", "santo", "saora", "sapio", "sappi", "sarai", "sarda", "sarde", "sardi", "sardo", "sarei", "sarge", "sargo", "sarta", "sarte", "sarti", "sarto", "sassi", "sasso", "sauna", "saune", "saura", "saure", "sauri", "sauro", "savia", "savie", "savio", "sazia", "sazie", "sazio", "sbafa", "sbafi", "sbafo", "sbava", "sbavi", "sbavo", "sboba", "sbobe", "sbora", "sbore", "sbovi", "sbovo", "sbuca", "sbuco", "scada", "scade", "scadi", "scado", "scafa", "scafe", "scafi", "scafo", "scala", "scale", "scali", "scalo", "scana", "scane", "scapa", "scapi", "scapo", "scari", "scaro", "scasa", "scasi", "scaso", "scava", "scavi", "scavo", "sceda", "scede", "scema", "sceme", "scemi", "scemo", "scena", "scene", "scesa", "scese", "scesi", "sceso", "schei", "schwa", "sciai", "scifi", "scifo", "scipa", "scipi", "scipo", "scira", "scire", "sciri", "sciro", "scita", "scite", "sciti", "scoda", "scodi", "scodo", "scoia", "scoio", "scola", "scoli", "scolo", "scopa", "scope", "scopi", "scopo", "scora", "score", "scori", "scoro", "scota", "scote", "scoti", "scoto", "scova", "scovi", "scovo", "scuce", "scuci", "scuda", "scudi", "scudo", "scuoi", "scura", "scure", "scuri", "scuro", "scusa", "scuse", "scusi", "scuso", "scuti", "scuto", "sdama", "sdami", "sdamo", "sdare", "sdata", "sdate", "sdati", "sdato", "sdava", "sdavi", "sdavo", "sdazi", "sdica", "sdice", "sdici", "sdico", "sdire", "sdite", "sdoga", "sdogo", "sdora", "sdori", "sdoro", "sdrai", "sduca", "sduco", "secai", "secca", "secce", "secco", "sechi", "sedai", "sedei", "sedia", "sedie", "sedio", "segai", "segga", "seggi", "seggo", "seghe", "seghi", "segna", "segni", "segno", "segua", "segue", "segui", "seguo", "seini", "seino", "selce", "selci", "selfa", "selfi", "selfo", "sella", "selle", "selli", "sello", "selva", "selve", "semai", "senna", "senne", "senni", "senno", "senoi", "sensi", "senso", "senta", "sente", "senti", "sento", "senza", "seppe", "seppi", "sepsi", "serba", "serbe", "serbi", "serbo", "seria", "serie", "serio", "sermo", "serpa", "serpe", "serpi", "serpo", "serra", "serre", "serri", "serro", "serti", "serto", "serva", "serve", "servi", "servo", "sesia", "sesie", "sessa", "sesse", "sessi", "sesso", "sesta", "seste", "sesti", "sesto", "setta", "sette", "setti", "setto", "sezza", "sezze", "sezzi", "sezzo", "sfama", "sfami", "sfamo", "sfare", "sfasa", "sfasi", "sfaso", "sfata", "sfate", "sfati", "sfato", "sfece", "sfeci", "sfera", "sfere", "sfida", "sfide", "sfidi", "sfido", "sfiga", "sfila", "sfili", "sfilo", "sfina", "sfini", "sfino", "sfizi", "sfoca", "sfoci", "sfoco", "sfoga", "sfogo", "sfora", "sfori", "sforo", "sfuma", "sfumi", "sfumo", "sfuri", "sfusa", "sfuse", "sfusi", "sfuso", "sgama", "sgami", "sgamo", "sgara", "sgari", "sgaro", "sgasa", "sgasi", "sgaso", "sgela", "sgeli", "sgelo", "sgola", "sgoli", "sgolo", "sgura", "sguri", "sguro", "shake", "shara", "share", "shari", "sharo", "shina", "shire", "siamo", "siano", "siate", "siche", "sicli", "siclo", "sidri", "sidro", "sieda", "siede", "siedi", "siedo", "siepa", "siepe", "siepi", "siepo", "sieri", "siero", "siete", "sigla", "sigle", "sigli", "siglo", "sigma", "sigmi", "sigua", "siici", "siila", "siile", "siili", "siilo", "siimi", "siine", "siiti", "silfi", "silfo", "silli", "sillo", "silos", "silvi", "sinti", "sipai", "sirma", "sirme", "sirte", "sirti", "sisma", "sismi", "sismo", "sitai", "sitii", "situa", "situi", "situo", "sizio", "sizza", "sizze", "skate", "skypa", "skypi", "skypo", "slama", "slami", "slamo", "slava", "slave", "slavi", "slavo", "slebi", "slebo", "slega", "slego", "slice", "slide", "sloga", "slogo", "sluma", "slumi", "slumo", "smaga", "smagi", "smago", "smani", "smela", "smeli", "smelo", "smera", "smeri", "smero", "smile", "smina", "smini", "smino", "smira", "smiri", "smiro", "smise", "smisi", "smoda", "smodi", "smodo", "smoke", "smova", "smove", "smovi", "smovo", "smura", "smuri", "smuro", "smusa", "smusi", "smuso", "snasa", "snasi", "snaso", "sneva", "snevi", "snevo", "snida", "snidi", "snido", "snipe", "snoda", "snodi", "snodo", "snuda", "snudi", "snudo", "soana", "soane", "soani", "soano", "soave", "soavi", "sobri", "socci", "socco", "socia", "socie", "socio", "sodai", "sodio", "soffi", "sofia", "sofie", "soghe", "sogli", "sogna", "sogni", "sogno", "solai", "solca", "solco", "solda", "soldi", "soldo", "solea", "solee", "solei", "soleo", "solfa", "solfe", "solfi", "solfo", "solgo", "solio", "solla", "solle", "solli", "sollo", "solta", "solte", "solti", "solto", "solva", "solve", "solvi", "solvo", "somma", "somme", "sommi", "sommo", "somni", "sonai", "sonar", "sonco", "sonda", "sonde", "sondi", "sondo", "songa", "songe", "songi", "songo", "sonii", "sonio", "sonni", "sonno", "sopii", "sopra", "sorai", "sorba", "sorbe", "sorbi", "sorbo", "sorca", "sorci", "sorda", "sorde", "sordi", "sordo", "sorga", "sorge", "sorgi", "sorgo", "sorra", "sorre", "sorsa", "sorse", "sorsi", "sorso", "sorta", "sorte", "sorti", "sorto", "sosia", "sosta", "soste", "sosti", "sosto", "sotho", "sotta", "sotti", "sotto", "sovra", "sozio", "sozza", "sozze", "sozzi", "sozzo", "spada", "spade", "spago", "spaia", "spaio", "spala", "spali", "spalo", "spana", "spani", "spano", "spara", "spari", "sparo", "spasa", "spase", "spasi", "spaso", "spata", "spate", "spati", "spato", "spazi", "speck", "speco", "speda", "spedi", "spedo", "spela", "speli", "spelo", "speme", "spemi", "spene", "speni", "spepa", "spepe", "spera", "spere", "speri", "spero", "spesa", "spese", "spesi", "speso", "spezi", "spiai", "spica", "spiga", "spigo", "spike", "spina", "spine", "spini", "spino", "spira", "spire", "spiri", "spiro", "spola", "spole", "spone", "sponi", "spora", "spore", "sport", "sposa", "spose", "sposi", "sposo", "sprue", "spula", "spuli", "spulo", "spuma", "spume", "spumi", "spumo", "spura", "spuri", "spuro", "sputa", "sputi", "sputo", "stadi", "stage", "staia", "staio", "stame", "stami", "stana", "stani", "stano", "stara", "stare", "stari", "staro", "stasa", "stasi", "staso", "stata", "state", "stati", "stato", "stava", "stavi", "stavo", "steca", "stele", "steli", "stelo", "steno", "steri", "stero", "stesa", "stese", "stesi", "steso", "stibi", "stici", "stico", "stiga", "stigi", "stigo", "stila", "stile", "stili", "stilo", "stima", "stime", "stimi", "stimo", "stina", "stini", "stino", "stipa", "stipe", "stipi", "stipo", "stira", "stiri", "stiro", "stiva", "stive", "stivi", "stivo", "stoga", "stogo", "stoia", "stoio", "stola", "stole", "stoma", "stomi", "stona", "stone", "stoni", "stono", "store", "stori", "stria", "strie", "strio", "studi", "stufa", "stufe", "stufi", "stufo", "stura", "sture", "sturi", "sturo", "stuta", "stuti", "stuto", "style", "suari", "suave", "suavi", "subbi", "subii", "succi", "succo", "suchi", "sudai", "sugai", "sugga", "sugge", "suggi", "suggo", "sughi", "sugli", "sugna", "sugne", "suide", "suidi", "suina", "suine", "suini", "suino", "suite", "sulka", "sulla", "sulle", "sullo", "summa", "summe", "sunna", "sunne", "sunti", "sunto", "suola", "suole", "suoli", "suolo", "suona", "suoni", "suono", "suora", "suore", "super", "surfa", "surfi", "surfo", "surga", "surge", "surgi", "surgo", "surma", "surra", "surre", "surse", "sursi", "surta", "surte", "surti", "surto", "susci", "sushi", "sussi", "susta", "suste", "sutha", "suthe", "suthi", "sutho", "sutra", "sutri", "sutro", "suzza", "suzzi", "suzzo", "svaga", "svago", "svani", "svapa", "svapi", "svapo", "svari", "svasa", "svasi", "svaso", "svela", "sveli", "svelo", "svena", "sveni", "sveno", "sveva", "sveve", "svevi", "svevo", "sviai", "svina", "svini", "svino", "svisa", "svisi", "sviso", "svita", "sviti", "svito", "sviva", "svivi", "svivo", "svizi", "svola", "svoli", "svolo", "svota", "svoti", "svoto", "svuoi", "swazi", "tabla", "tacca", "tacce", "tacci", "tacco", "taffi", "tafia", "tafie", "tafii", "tafio", "tagga", "taggo", "tagli", "taide", "taidi", "taiga", "taiko", "taina", "taine", "taini", "taino", "talco", "talea", "talee", "talli", "tallo", "talpa", "talpe", "tamia", "tanai", "tanca", "tanco", "tanfa", "tanfi", "tanfo", "tanga", "tange", "tango", "tanna", "tanni", "tanno", "tanta", "tante", "tanti", "tanto", "tappa", "tappe", "tappi", "tappo", "tarai", "tarda", "tarde", "tardi", "tardo", "targa", "targo", "tarla", "tarli", "tarlo", "tarma", "tarme", "tarmi", "tarmo", "tarpa", "tarpi", "tarpo", "tarsi", "tasca", "tassa", "tasse", "tassi", "tasso", "tasta", "taste", "tasti", "tasto", "tatti", "tatto", "tatua", "tatui", "tatuo", "taura", "taure", "tauri", "tauro", "tazza", "tazze", "tebea", "tebee", "tebei", "tebeo", "tecca", "teche", "tecno", "tedia", "tedio", "tegea", "tegee", "tegei", "tegeo", "teghe", "teide", "teidi", "teina", "teine", "teita", "teite", "teiti", "telai", "temei", "tempa", "tempe", "tempi", "tempo", "tenda", "tende", "tendi", "tendo", "tenei", "tenga", "tenge", "tengo", "tenia", "tenie", "tenne", "tenni", "tenno", "tensa", "tense", "tenta", "tenti", "tento", "tenue", "tenui", "tenza", "tenze", "tepee", "teppa", "teppe", "terbi", "terga", "terge", "tergi", "tergo", "terme", "termo", "terna", "terne", "terni", "terno", "terra", "terre", "tersa", "terse", "tersi", "terso", "terza", "terze", "terzi", "terzo", "tesai", "tesla", "tesle", "tessa", "tesse", "tessi", "tesso", "testa", "teste", "testi", "testo", "tetra", "tetre", "tetri", "tetro", "tetta", "tette", "tetti", "tetto", "texta", "texte", "texti", "texto", "theta", "tiade", "tiadi", "tiara", "tiare", "tiasi", "tiaso", "tibia", "tibie", "tiene", "tieni", "tifai", "tigli", "tigna", "tigne", "tigni", "tigno", "tigra", "tigre", "tigri", "tigro", "tigua", "tilde", "tildi", "tilla", "tille", "tilli", "tillo", "timpa", "timpe", "tinca", "tinga", "tinge", "tingi", "tingo", "tinse", "tinsi", "tinta", "tinte", "tinti", "tinto", "tioli", "tiolo", "tirai", "tirsi", "tirso", "tizia", "tizie", "tizio", "tizzi", "tizzo", "tmesi", "toast", "tocai", "tocca", "tocco", "tochi", "toghe", "toghi", "togli", "tokai", "tolda", "tolde", "tolga", "tolgo", "tolla", "tolle", "tolse", "tolsi", "tolta", "tolte", "tolti", "tolto", "tomai", "tomba", "tombe", "tombi", "tombo", "tonai", "tonda", "tonde", "tondi", "tondo", "tonfa", "tonfi", "tonfo", "tonia", "tonie", "tonni", "tonno", "tonta", "tonte", "tonti", "tonto", "topoi", "toppa", "toppe", "toppi", "toppo", "toque", "torba", "torbe", "torbi", "torbo", "torca", "torce", "torci", "torco", "tordi", "tordo", "torea", "torei", "toreo", "torio", "torli", "torlo", "torma", "torme", "torna", "torni", "torno", "torre", "torri", "torse", "torsi", "torso", "torta", "torte", "torti", "torto", "torva", "torve", "torvi", "torvo", "tosai", "tosca", "tosco", "tossa", "tosse", "tossi", "tosso", "tosta", "toste", "tosti", "tosto", "totem", "tozza", "tozze", "tozzi", "tozzo", "trace", "traci", "trade", "trago", "trama", "trame", "trami", "tramo", "trana", "trani", "trano", "trans", "trapa", "trape", "trare", "trave", "travi", "trema", "tremi", "tremo", "trena", "treni", "treno", "trevi", "trevo", "triai", "tribi", "tribo", "tribu", "triga", "trike", "trina", "trine", "trini", "trino", "trita", "trite", "triti", "trito", "trivi", "troco", "troia", "troie", "troll", "trona", "trone", "troni", "trono", "tropi", "tropo", "trota", "trote", "trova", "trovi", "trovo", "truca", "truce", "truci", "truka", "truke", "tsuga", "tubai", "tufai", "tuffa", "tuffi", "tuffo", "tughe", "tulio", "tulle", "tumba", "tunna", "tunne", "tunni", "tunno", "tuona", "tuoni", "tuono", "turai", "turba", "turbe", "turbi", "turbo", "turca", "turco", "turma", "turme", "turna", "turni", "turno", "turpe", "turpi", "tusca", "tusco", "tutai", "tutor", "tutsi", "tutta", "tutte", "tutti", "tutto", "tuzia", "tuzie", "ubbia", "ubbie", "ubera", "ubere", "uberi", "ubero", "ubica", "ubico", "ubini", "ubino", "uccia", "uccio", "udire", "udita", "udite", "uditi", "udito", "udiva", "udivi", "udivo", "udrai", "udrei", "ufizi", "uggia", "uggii", "uggio", "ugnai", "ugola", "ugole", "ukase", "ukiyo", "ulama", "ulani", "ulano", "ulema", "ulese", "ulesi", "ulice", "ulici", "ulite", "uliti", "uliva", "ulive", "ulivi", "ulivo", "ultra", "ulula", "ulule", "ululi", "ululo", "umana", "umane", "umani", "umano", "umata", "umate", "umati", "umato", "umbra", "umbre", "umbri", "umbro", "umica", "umici", "umico", "umida", "umide", "umidi", "umido", "umile", "umili", "umore", "umori", "unari", "unica", "unici", "unico", "unire", "unita", "unite", "uniti", "unito", "univa", "univi", "univo", "unqua", "unque", "untai", "upupa", "upupe", "urali", "urati", "urato", "urese", "uresi", "urica", "urici", "urico", "urina", "urine", "urini", "urino", "urlai", "urlii", "urlio", "urone", "uroni", "urtai", "usaci", "usala", "usale", "usali", "usalo", "usami", "usane", "usano", "usare", "usata", "usate", "usati", "usato", "usava", "usavi", "usavo", "uscii", "uscio", "usino", "usura", "usure", "usuri", "usuro", "uteri", "utero", "utese", "utesi", "utile", "utili", "uvala", "uvale", "uvina", "uvine", "uvola", "uvole", "uvosa", "uvose", "uvosi", "uvoso", "uvula", "uvule", "uxori", "vacai", "vacca", "vacci", "vachi", "vacua", "vacue", "vacui", "vacuo", "vaffa", "vagai", "vaghe", "vaghi", "vagii", "vagli", "vaiai", "valga", "valgo", "valla", "valle", "valli", "vallo", "valsa", "valse", "valsi", "valso", "valva", "valve", "vammi", "vampa", "vampe", "vampi", "vampo", "vanai", "vanea", "vanei", "vaneo", "vanga", "vango", "vania", "vanie", "vanii", "vanio", "vanne", "vanni", "vanno", "vanta", "vanti", "vanto", "varai", "varca", "varco", "varea", "varee", "varia", "varie", "vario", "varva", "varve", "vasai", "vasca", "vasta", "vaste", "vasti", "vasto", "vatti", "vauda", "vaude", "vecce", "vecia", "vecio", "vedda", "vegge", "veggi", "vegli", "velai", "velia", "velie", "velli", "vello", "velma", "velme", "venai", "venda", "vende", "vendi", "vendo", "venga", "vengi", "vengo", "venia", "venie", "venne", "venni", "venta", "venti", "vento", "vepre", "vepri", "vepsa", "vepse", "vepsi", "vepso", "verbi", "verbo", "verde", "verdi", "verga", "verge", "vergi", "vergo", "verla", "verle", "verme", "vermi", "vermo", "verna", "verne", "verni", "verno", "verri", "verro", "versa", "verse", "versi", "verso", "verta", "verte", "verti", "verto", "verve", "verza", "verze", "vesce", "vespa", "vespe", "vessa", "vessi", "vesso", "vesta", "veste", "vesti", "vesto", "vetri", "vetro", "vetta", "vette", "vezzi", "vezzo", "viado", "viale", "viali", "viari", "vibra", "vibri", "vibro", "vichi", "video", "viene", "vieni", "viera", "viere", "vieri", "viero", "vieta", "viete", "vieti", "vieto", "vigli", "vigna", "vigne", "vilai", "vilii", "villa", "ville", "villi", "villo", "vimai", "vinai", "vinca", "vince", "vinci", "vinco", "vinea", "vinee", "vinse", "vinsi", "vinta", "vinte", "vinti", "vinto", "viola", "viole", "violi", "violo", "vipla", "viple", "virai", "virei", "vireo", "virga", "virgo", "virtu", "virus", "visai", "visco", "vispa", "vispe", "vispi", "vispo", "visse", "vissi", "vista", "viste", "visti", "visto", "vitae", "vitai", "vitro", "vitta", "vitte", "vitti", "vitto", "vivai", "vizia", "vizio", "vizza", "vizze", "vizzi", "vizzo", "vocai", "vochi", "vocia", "vocii", "vocio", "vodka", "vogai", "voghe", "voghi", "vogli", "voice", "voile", "volai", "volca", "volco", "volee", "volga", "volge", "volgi", "volgo", "volle", "volli", "volpa", "volpe", "volpi", "volpo", "volse", "volsi", "volta", "volte", "volti", "volto", "volva", "volve", "volvi", "volvo", "vomii", "vorai", "vosco", "votai", "votii", "vulga", "vulgo", "vulva", "vulve", "vuole", "vuota", "vuote", "vuoti", "vuoto", "wakhi", "wasca", "wasce", "wasci", "wasco", "washa", "washe", "washi", "washo", "wayaa", "wayae", "wayai", "wayao", "white", "whiti", "widia", "xenia", "xenie", "xenon", "xhosa", "yagua", "yamea", "yamee", "yamei", "yameo", "yaqui", "yoghi", "yucca", "yuchi", "yurta", "yurte", "zabri", "zabro", "zaffa", "zaffe", "zaffi", "zaffo", "zaina", "zaine", "zaini", "zaino", "zaire", "zamba", "zambo", "zamia", "zamie", "zampa", "zampe", "zampi", "zampo", "zanca", "zande", "zanna", "zanne", "zanni", "zanno", "zappa", "zappe", "zappi", "zappo", "zarri", "zarro", "zatta", "zatte", "zebra", "zebre", "zebri", "zebro", "zecca", "zecco", "zelai", "zenda", "zende", "zendi", "zendo", "zenit", "zeppa", "zeppe", "zeppi", "zeppo", "zerbi", "zerbo", "zerga", "zerge", "zergi", "zergo", "zetti", "zetto", "zifio", "zigai", "zighi", "zigna", "zigni", "zigno", "zilla", "zilli", "zillo", "zinca", "zinco", "zinia", "zinie", "zinna", "zinne", "zinni", "zinno", "ziona", "zione", "zioni", "zippa", "zippi", "zippo", "zirbi", "zirbo", "zirla", "zirli", "zirlo", "zitta", "zitte", "zitti", "zitto", "zizza", "zizze", "zoeci", "zolfa", "zolfi", "zolfo", "zolla", "zolle", "zolli", "zollo", "zomba", "zombi", "zombo", "zompa", "zompi", "zompo", "zonai", "zonzo", "zooma", "zoomi", "zoomo", "zoppa", "zoppe", "zoppi", "zoppo", "zoque", "zoqui", "zozza", "zozze", "zozzi", "zozzo", "zuava", "zuave", "zuavi", "zuavo", "zucca", "zuffa", "zuffe", "zughi", "zumai", "zuppa", "zuppe", "zuppi", "zuppo", "zurla", "zurli", "zurlo"],
                In, Fn = ["occhi", "benda", "setto", "ernia", "tatto", "sordo", "ebola", "urato", "covid", "callo", "alito", "botox", "umano", "ansia", "pelle", "meato", "aulin", "fiato", "borsa", "anite", "stoma", "gotta", "ioide", "fever", "robot", "petri", "crohn", "psoas", "fivet", "sonda", "zolfo", "acido", "shock", "lupus", "vulva", "tavor", "crile", "pomfo", "corpo", "udito", "litio", "polpa", "foley", "allis", "zimox", "uraco", "zaffo", "xanax", "hnpcc", "esone", "alpps", "etere", "sepsi", "acuto", "algia", "bronj", "elape", "corti", "salma", "mente", "soleo", "uncus", "htert", "vater", "fovea", "stemm", "plica", "urina", "logge", "parto", "gesso", "picee", "canto", "testa", "spore", "muffa", "milza", "sigma", "cisti", "sella", "trago", "villi", "ponte", "olier", "volto", "ugola", "lembo", "sensi", "enpam", "quick", "pulce", "pessi", "apert", "xelox", "bario", "hegar", "apgar", "suina", "redon", "retto", "frova", "nervo", "obeso", "ppoma", "purga", "calor", "raspa", "germe", "verme", "cauda", "bakri", "torso", "azoto", "vista", "adipe", "sodio", "kelly", "gamba", "imene", "ictus", "apnea", "lynch", "miope", "ronco", "valgo", "tigna", "mesna", "dieta", "collo", "medio", "ritmo", "pompa", "polso", "ewing", "linfa", "tenue", "dakin", "otite", "prono", "atono", "zecca", "colla", "potus", "porta", "flebo", "alcol", "tibia", "aorta", "derma", "garza", "piaga", "fobia", "gocce", "tarso", "pelvi", "emesi", "siero", "ameba", "duval", "anche", "ostio", "elice", "soffi", "iodio", "crema", "addis", "atrio", "carie", "gusto", "valva", "omero", "barba", "corde", "orvil", "bulbo", "latte", "dotto", "still", "palmo", "osseo", "dente", "lisch", "acqua", "sacca", "mento", "onico", "laser", "tenar", "adson", "passo", "piede", "starr", "visus", "fasci", "fabry", "siadh", "labbe", "istmo", "magro", "krebs", "rigor", "willi", "raggi", "coito", "talco", "rotch", "edema", "piega", "chilo", "umori", "sinus", "disco", "cieco", "patau", "iride", "longo", "dolor", "petto", "wells", "angor", "solco", "ferro", "ramie", "mutyh", "epcam", "gozzo", "kline", "reboa", "fresa", "chimo", "biota", "bocca", "virus", "brain", "flora", "lenti", "sotos", "ozono", "afono", "fiala", "fungo", "calvo", "sacro", "pompe", "tenia", "golgi", "galea", "tinca", "morte", "vasto", "clamp", "mania", "lasix", "mioma", "nigra", "sonno", "atomo", "pipac", "irccs", "tosse", "cloro", "ovulo", "colon", "drill", "morbo", "emina", "cromo", "acaro", "largo", "cuore", "lombo", "ciclo", "ldopa", "tumor", "ovaio", "gigli", "obgyn", "hipec", "turbe", "fibra", "dorso", "allen", "pinza", "lacci", "punto", "rubor", "costa", "carpo", "tatme", "radio", "zinco", "utero", "campo", "globo", "peste", "cocco", "piezo", "glomo", "tamis", "baffi", "coane", "zimox", "aulin", "uraco", "piaga", "sesso", "shunt", "lilly"],
                Hn = ["Great Job!", "Awesome", "Well done!"],
                Vn = function(e) {
                    return "La parola era ".concat(e)
                },
                qn = function(e, a) {
                    return "Devi usare la ".concat(e, " nella posizione ").concat(a)
                },
                Wn = function(e) {
                    return "Il tentativo deve contenere la ".concat(e)
                },
                Bn = "Statistiche",
                Yn = function(e, a) {
                    var t, n = new Set,
                        r = function(e, a) {
                            var t = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (!t) {
                                if (Array.isArray(e) || (t = i(e)) || a && e && "number" === typeof e.length) {
                                    t && (e = t);
                                    var n = 0,
                                        r = function() {};
                                    return {
                                        s: r,
                                        n: function() {
                                            return n >= e.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: e[n++]
                                            }
                                        },
                                        e: function(e) {
                                            throw e
                                        },
                                        f: r
                                    }
                                }
                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }
                            var o, l = !0,
                                s = !1;
                            return {
                                s: function() {
                                    t = t.call(e)
                                },
                                n: function() {
                                    var e = t.next();
                                    return l = e.done, e
                                },
                                e: function(e) {
                                    s = !0, o = e
                                },
                                f: function() {
                                    try {
                                        l || null == t.return || t.return()
                                    } finally {
                                        if (s) throw o
                                    }
                                }
                            }
                        }(a);
                    try {
                        for (r.s(); !(t = r.n()).done;)
                            for (var o = t.value, l = Xn(o), s = 0; s < o.length; s++)
                                if ("correct" !== l[s] && "present" !== l[s] || n.add(o[s]), "correct" === l[s] && e[s] !== o[s]) return qn(o[s], s + 1)
                    } catch (d) {
                        r.e(d)
                    } finally {
                        r.f()
                    }
                    for (var u = 0, c = Array.from(n.values()); u < c.length; u++) {
                        var f = c[u];
                        if (!e.includes(f)) return Wn(f)
                    }
                    return !1
                },
                $n = function() {
                    var e = new Date("March 01, 2023 00:00:00").valueOf(),
                        a = Date.now(),
                        t = 864e5,
                        n = Math.floor((a - e) / t),
                        i = (n + 1) * t + e;
                    return {
                        solution: Fn[n % Fn.length].toUpperCase(),
                        solutionIndex: n,
                        tomorrow: i
                    }
                }(),
                Qn = $n.solution,
                Kn = $n.solutionIndex,
                Gn = $n.tomorrow,
                Xn = function(e) {
                    var a = Qn.split(""),
                        t = e.split(""),
                        n = a.map((function(e) {
                            return !1
                        })),
                        i = Array.from(Array(e.length));
                    return t.forEach((function(e, t) {
                        if (e === a[t]) return i[t] = "correct", void(n[t] = !0)
                    })), t.forEach((function(e, t) {
                        if (!i[t]) {
                            if (a.includes(e)) {
                                var r = a.findIndex((function(a, t) {
                                    return a === e && !n[t]
                                }));
                                return r > -1 ? (i[t] = "present", void(n[r] = !0)) : void(i[t] = "absent")
                            }
                            i[t] = "absent"
                        }
                    })), i
                },
                Jn = "gameState",
                Zn = "highContrast",
                ei = "gameStats",
                ai = function() {
                    return "1" === localStorage.getItem(Zn)
                },
                ti = function(e) {
                    var a = e.value,
                        t = e.status,
                        n = e.isRevealing,
                        i = e.isCompleted,
                        r = e.position,
                        o = a && !i,
                        l = n && i,
                        s = "".concat((void 0 === r ? 0 : r) * Dn, "ms"),
                        u = ai(),
                        c = Ln()("w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white", {
                            "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600": !t,
                            "border-black dark:border-slate-100": a && !t,
                            "absent shadowed bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700": "absent" === t,
                            "correct shadowed bg-orange-500 text-white border-orange-500": "correct" === t && u,
                            "present shadowed bg-cyan-500 text-white border-cyan-500": "present" === t && u,
                            "correct shadowed bg-green-500 text-white border-green-500": "correct" === t && !u,
                            "present shadowed bg-yellow-500 text-white border-yellow-500": "present" === t && !u,
                            "cell-fill-animation": o,
                            "cell-reveal": l
                        });
                    return (0, Mn.jsx)("div", {
                        className: c,
                        style: {
                            animationDelay: s
                        },
                        children: (0, Mn.jsx)("div", {
                            className: "letter-container",
                            style: {
                                animationDelay: s
                            },
                            children: a
                        })
                    })
                },
                ni = function(e) {
                    var a = e.guess,
                        t = e.isRevealing,
                        n = Xn(a);
                    return (0, Mn.jsx)("div", {
                        className: "flex justify-center mb-1",
                        children: a.split("").map((function(e, a) {
                            return (0, Mn.jsx)(ti, {
                                value: e,
                                status: n[a],
                                position: a,
                                isRevealing: t,
                                isCompleted: !0
                            }, a)
                        }))
                    })
                },
                ii = function(e) {
                    var a = e.guess,
                        t = e.className,
                        n = a.split(""),
                        i = Array.from(Array(5 - n.length)),
                        r = "flex justify-center mb-1 ".concat(t);
                    return (0, Mn.jsxs)("div", {
                        className: r,
                        children: [n.map((function(e, a) {
                            return (0, Mn.jsx)(ti, {
                                value: e
                            }, a)
                        })), i.map((function(e, a) {
                            return (0, Mn.jsx)(ti, {}, a)
                        }))]
                    })
                },
                ri = function() {
                    var e = Array.from(Array(5));
                    return (0, Mn.jsx)("div", {
                        className: "flex justify-center mb-1",
                        children: e.map((function(e, a) {
                            return (0, Mn.jsx)(ti, {}, a)
                        }))
                    })
                },
                oi = function(e) {
                    var a = e.guesses,
                        t = e.currentGuess,
                        n = e.isRevealing,
                        i = e.currentRowClassName,
                        r = a.length < 5 ? Array.from(Array(5 - a.length)) : [];
                    return (0, Mn.jsxs)("div", {
                        className: "pb-6",
                        children: [a.map((function(e, t) {
                            return (0, Mn.jsx)(ni, {
                                guess: e,
                                isRevealing: n && a.length - 1 === t
                            }, t)
                        })), a.length < 6 && (0, Mn.jsx)(ii, {
                            guess: t,
                            className: i
                        }), r.map((function(e, a) {
                            return (0, Mn.jsx)(ri, {}, a)
                        }))]
                    })
                },
                li = function(e) {
                    var a = e.children,
                        t = e.status,
                        n = e.width,
                        i = void 0 === n ? 40 : n,
                        r = e.value,
                        o = e.onClick,
                        l = e.isRevealing,
                        s = ai(),
                        u = Ln()("flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-white", {
                            "transition ease-in-out": l,
                            "bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 active:bg-slate-400": !t,
                            "bg-slate-400 dark:bg-slate-800 text-white": "absent" === t,
                            "bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white": "correct" === t && s,
                            "bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white": "present" === t && s,
                            "bg-green-500 hover:bg-green-600 active:bg-green-700 text-white": "correct" === t && !s,
                            "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white": "present" === t && !s
                        }),
                        c = {
                            transitionDelay: l ? "".concat(1750, "ms") : "unset",
                            width: "".concat(i, "px"),
                            height: "58px"
                        };
                    return (0, Mn.jsx)("button", {
                        style: c,
                        className: u,
                        onClick: function(e) {
                            o(r), e.currentTarget.blur()
                        },
                        children: a || r
                    })
                },
                si = function(a) {
                    var t = a.onChar,
                        n = a.onDelete,
                        i = a.onEnter,
                        r = a.guesses,
                        o = a.isRevealing,
                        l = function(e) {
                            var a = {};
                            return e.forEach((function(e) {
                                e.split("").forEach((function(e, t) {
                                    return Qn.includes(e) ? e === Qn[t] ? a[e] = "correct" : "correct" !== a[e] ? a[e] = "present" : void 0 : a[e] = "absent"
                                }))
                            })), a
                        }(r),
                        s = function(e) {
                            "ENTER" === e ? i() : "DELETE" === e ? n() : t(e)
                        };
                    return (0, e.useEffect)((function() {
                        var e = function(e) {
                            if ("Enter" === e.code) i();
                            else if ("Backspace" === e.code) n();
                            else {
                                var a = e.key.toUpperCase();
                                1 === a.length && a >= "A" && a <= "Z" && t(a)
                            }
                        };
                        return window.addEventListener("keyup", e),
                            function() {
                                window.removeEventListener("keyup", e)
                            }
                    }), [i, n, t]), (0, Mn.jsxs)("div", {
                        children: [(0, Mn.jsx)("div", {
                            className: "flex justify-center mb-1",
                            children: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((function(e) {
                                return (0, Mn.jsx)(li, {
                                    value: e,
                                    onClick: s,
                                    status: l[e],
                                    isRevealing: o
                                }, e)
                            }))
                        }), (0, Mn.jsx)("div", {
                            className: "flex justify-center mb-1",
                            children: ["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((function(e) {
                                return (0, Mn.jsx)(li, {
                                    value: e,
                                    onClick: s,
                                    status: l[e],
                                    isRevealing: o
                                }, e)
                            }))
                        }), (0, Mn.jsxs)("div", {
                            className: "flex justify-center",
                            children: [(0, Mn.jsx)(li, {
                                width: 65.4,
                                value: "ENTER",
                                onClick: s,
                                children: "Invia"
                            }), ["Z", "X", "C", "V", "B", "N", "M"].map((function(e) {
                                return (0, Mn.jsx)(li, {
                                    value: e,
                                    onClick: s,
                                    status: l[e],
                                    isRevealing: o
                                }, e)
                            })), (0, Mn.jsx)(li, {
                                width: 65.4,
                                value: "DELETE",
                                onClick: s,
                                children: "Cancella"
                            })]
                        })]
                    })
                };

            function ui() {
                for (var a = arguments.length, t = new Array(a), n = 0; n < a; n++) t[n] = arguments[n];
                var i = (0, e.useRef)(t);
                return (0, e.useEffect)((function() {
                    i.current = t
                }), [t]), (0, e.useCallback)((function(e) {
                    for (var a, t = Xt(i.current); !(a = t()).done;) {
                        var n = a.value;
                        null != n && ("function" === typeof n ? n(e) : n.current = e)
                    }
                }), [i])
            }

            function ci(e) {
                for (var a, t, n = e.parentElement, i = null; n && !(n instanceof HTMLFieldSetElement);) n instanceof HTMLLegendElement && (i = n), n = n.parentElement;
                var r = null != (a = "" === (null == (t = n) ? void 0 : t.getAttribute("disabled"))) && a;
                return (!r || ! function(e) {
                    if (!e) return !1;
                    var a = e.previousElementSibling;
                    for (; null !== a;) {
                        if (a instanceof HTMLLegendElement) return !1;
                        a = a.previousElementSibling
                    }
                    return !0
                }(i)) && r
            }

            function fi(a, t, n) {
                var i = (0, e.useRef)(t);
                i.current = t, (0, e.useEffect)((function() {
                    function e(e) {
                        i.current.call(window, e)
                    }
                    return window.addEventListener(a, e, n),
                        function() {
                            return window.removeEventListener(a, e, n)
                        }
                }), [a, n])
            }! function(e) {
                e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab"
            }(In || (In = {}));
            var di, pi, mi, gi, vi, bi = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((function(e) {
                return e + ":not([tabindex='-1'])"
            })).join(",");

            function hi(e) {
                null == e || e.focus({
                    preventScroll: !0
                })
            }

            function yi(e, a) {
                var t = Array.isArray(e) ? e : function(e) {
                        return void 0 === e && (e = document.body), null == e ? [] : Array.from(e.querySelectorAll(bi))
                    }(e),
                    n = document.activeElement,
                    i = function() {
                        if (a & (di.First | di.Next)) return mi.Next;
                        if (a & (di.Previous | di.Last)) return mi.Previous;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    }(),
                    r = function() {
                        if (a & di.First) return 0;
                        if (a & di.Previous) return Math.max(0, t.indexOf(n)) - 1;
                        if (a & di.Next) return Math.max(0, t.indexOf(n)) + 1;
                        if (a & di.Last) return t.length - 1;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    }(),
                    o = a & di.NoScroll ? {
                        preventScroll: !0
                    } : {},
                    l = 0,
                    s = t.length,
                    u = void 0;
                do {
                    var c;
                    if (l >= s || l + s <= 0) return pi.Error;
                    var f = r + l;
                    if (a & di.WrapAround) f = (f + s) % s;
                    else {
                        if (f < 0) return pi.Underflow;
                        if (f >= s) return pi.Overflow
                    }
                    null == (c = u = t[f]) || c.focus(o), l += i
                } while (u !== document.activeElement);
                return u.hasAttribute("tabindex") || u.setAttribute("tabindex", "0"), pi.Success
            }

            function wi(a, t, n) {
                void 0 === t && (t = vi.All);
                var i = void 0 === n ? {} : n,
                    r = i.initialFocus,
                    o = i.containers,
                    l = (0, e.useRef)("undefined" !== typeof window ? document.activeElement : null),
                    s = (0, e.useRef)(null),
                    u = cn(),
                    c = Boolean(t & vi.RestoreFocus),
                    f = Boolean(t & vi.InitialFocus);
                (0, e.useEffect)((function() {
                    c && (l.current = document.activeElement)
                }), [c]), (0, e.useEffect)((function() {
                    if (c) return function() {
                        hi(l.current), l.current = null
                    }
                }), [c]), (0, e.useEffect)((function() {
                    if (f && a.current) {
                        var e = document.activeElement;
                        if (null == r ? void 0 : r.current) {
                            if ((null == r ? void 0 : r.current) === e) return void(s.current = e)
                        } else if (a.current.contains(e)) return void(s.current = e);
                        (null == r ? void 0 : r.current) ? hi(r.current): yi(a.current, di.First) === pi.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), s.current = document.activeElement
                    }
                }), [a, r, f]), fi("keydown", (function(e) {
                    t & vi.TabLock && a.current && e.key === In.Tab && (e.preventDefault(), yi(a.current, (e.shiftKey ? di.Previous : di.Next) | di.WrapAround) === pi.Success && (s.current = document.activeElement))
                })), fi("focus", (function(e) {
                    if (t & vi.FocusLock) {
                        var n = new Set(null == o ? void 0 : o.current);
                        if (n.add(a), n.size) {
                            var i = s.current;
                            if (i && u.current) {
                                var r = e.target;
                                r && r instanceof HTMLElement ? ! function(e, a) {
                                    for (var t, n = Xt(e); !(t = n()).done;) {
                                        var i;
                                        if (null == (i = t.value.current) ? void 0 : i.contains(a)) return !0
                                    }
                                    return !1
                                }(n, r) ? (e.preventDefault(), e.stopPropagation(), hi(i)) : (s.current = r, hi(r)) : hi(s.current)
                            }
                        }
                    }
                }), !0)
            }! function(e) {
                e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll"
            }(di || (di = {})),
            function(e) {
                e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow"
            }(pi || (pi = {})),
            function(e) {
                e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next"
            }(mi || (mi = {})),
            function(e) {
                e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose"
            }(gi || (gi = {})),
            function(e) {
                e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All"
            }(vi || (vi = {}));
            var ki = new Set,
                zi = new Map;

            function xi(e) {
                e.setAttribute("aria-hidden", "true"), e.inert = !0
            }

            function Si(e) {
                var a = zi.get(e);
                a && (null === a["aria-hidden"] ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", a["aria-hidden"]), e.inert = a.inert)
            }
            var Ei = (0, e.createContext)(!1);

            function Ci(a) {
                return e.createElement(Ei.Provider, {
                    value: a.force
                }, a.children)
            }

            function Oi() {
                var a = (0, e.useContext)(Ei),
                    t = (0, e.useContext)(Ti),
                    n = (0, e.useState)((function() {
                        if (!a && null !== t) return null;
                        if ("undefined" === typeof window) return null;
                        var e = document.getElementById("headlessui-portal-root");
                        if (e) return e;
                        var n = document.createElement("div");
                        return n.setAttribute("id", "headlessui-portal-root"), document.body.appendChild(n)
                    })),
                    i = n[0],
                    r = n[1];
                return (0, e.useEffect)((function() {
                    a || null !== t && r(t.current)
                }), [t, r, a]), i
            }
            var Ni = e.Fragment;

            function ji(t) {
                var n = t,
                    i = Oi(),
                    r = (0, e.useState)((function() {
                        return "undefined" === typeof window ? null : document.createElement("div")
                    }))[0],
                    o = on();
                return nn((function() {
                    if (i && r) return i.appendChild(r),
                        function() {
                            var e;
                            i && (r && (i.removeChild(r), i.childNodes.length <= 0 && (null == (e = i.parentElement) || e.removeChild(i))))
                        }
                }), [i, r]), o && i && r ? (0, a.createPortal)(Zt({
                    props: n,
                    defaultTag: Ni,
                    name: "Portal"
                }), r) : null
            }
            var Pi = e.Fragment,
                Ti = (0, e.createContext)(null);
            ji.Group = function(a) {
                var t = a.target,
                    n = Kt(a, ["target"]);
                return e.createElement(Ti.Provider, {
                    value: t
                }, Zt({
                    props: n,
                    defaultTag: Pi,
                    name: "Popover.Group"
                }))
            };
            var _i = (0, e.createContext)(null);

            function Li() {
                var a = (0, e.useContext)(_i);
                if (null === a) {
                    var t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(t, Li), t
                }
                return a
            }
            var Mi, Ai, Ri, Di, Ii = (0, e.createContext)((function() {}));

            function Fi(a) {
                var t = a.children,
                    n = a.onUpdate,
                    i = a.type,
                    r = a.element,
                    o = (0, e.useContext)(Ii),
                    l = (0, e.useCallback)((function() {
                        for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                        null == n || n.apply(void 0, a), o.apply(void 0, a)
                    }), [o, n]);
                return nn((function() {
                    return l(Mi.Add, i, r),
                        function() {
                            return l(Mi.Remove, i, r)
                        }
                }), [l, i, r]), e.createElement(Ii.Provider, {
                    value: l
                }, t)
            }
            Ii.displayName = "StackContext",
                function(e) {
                    e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove"
                }(Mi || (Mi = {})),
                function(e) {
                    e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed"
                }(Ri || (Ri = {})),
                function(e) {
                    e[e.SetTitleId = 0] = "SetTitleId"
                }(Di || (Di = {}));
            var Ui = ((Ai = {})[Di.SetTitleId] = function(e, a) {
                    return e.titleId === a.id ? e : Qt({}, e, {
                        titleId: a.id
                    })
                }, Ai),
                Hi = (0, e.createContext)(null);

            function Vi(a) {
                var t = (0, e.useContext)(Hi);
                if (null === t) {
                    var n = new Error("<" + a + " /> is missing a parent <" + $i.displayName + " /> component.");
                    throw Error.captureStackTrace && Error.captureStackTrace(n, Vi), n
                }
                return t
            }

            function qi(e, a) {
                return Jt(a.type, Ui, e, a)
            }
            Hi.displayName = "DialogContext";
            var Wi = Bt.RenderStrategy | Bt.Static,
                Bi = an((function(a, t) {
                    var n, i = a.open,
                        r = a.onClose,
                        o = a.initialFocus,
                        l = Kt(a, ["open", "onClose", "initialFocus"]),
                        s = (0, e.useState)(0),
                        u = s[0],
                        c = s[1],
                        f = mn();
                    void 0 === i && null !== f && (i = Jt(f, ((n = {})[fn.Open] = !0, n[fn.Closed] = !1, n)));
                    var d = (0, e.useRef)(new Set),
                        p = (0, e.useRef)(null),
                        m = ui(p, t),
                        g = a.hasOwnProperty("open") || null !== f,
                        v = a.hasOwnProperty("onClose");
                    if (!g && !v) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
                    if (!g) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
                    if (!v) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
                    if ("boolean" !== typeof i) throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: " + i);
                    if ("function" !== typeof r) throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: " + r);
                    var b = i ? Ri.Open : Ri.Closed,
                        h = null !== f ? f === fn.Open : b === Ri.Open,
                        y = (0, e.useReducer)(qi, {
                            titleId: null,
                            descriptionId: null
                        }),
                        w = y[0],
                        k = y[1],
                        z = (0, e.useCallback)((function() {
                            return r(!1)
                        }), [r]),
                        x = (0, e.useCallback)((function(e) {
                            return k({
                                type: Di.SetTitleId,
                                id: e
                            })
                        }), [k]),
                        S = on() && b === Ri.Open,
                        E = u > 1,
                        C = null !== (0, e.useContext)(Hi);
                    wi(p, S ? Jt(E ? "parent" : "leaf", {
                            parent: vi.RestoreFocus,
                            leaf: vi.All
                        }) : vi.None, {
                            initialFocus: o,
                            containers: d
                        }),
                        function(e, a) {
                            void 0 === a && (a = !0), nn((function() {
                                if (a && e.current) {
                                    var t = e.current;
                                    ki.add(t);
                                    for (var n, i = Xt(zi.keys()); !(n = i()).done;) {
                                        var r = n.value;
                                        r.contains(t) && (Si(r), zi.delete(r))
                                    }
                                    return document.querySelectorAll("body > *").forEach((function(e) {
                                            if (e instanceof HTMLElement) {
                                                for (var a, t = Xt(ki); !(a = t()).done;) {
                                                    var n = a.value;
                                                    if (e.contains(n)) return
                                                }
                                                1 === ki.size && (zi.set(e, {
                                                    "aria-hidden": e.getAttribute("aria-hidden"),
                                                    inert: e.inert
                                                }), xi(e))
                                            }
                                        })),
                                        function() {
                                            if (ki.delete(t), ki.size > 0) document.querySelectorAll("body > *").forEach((function(e) {
                                                if (e instanceof HTMLElement && !zi.has(e)) {
                                                    for (var a, t = Xt(ki); !(a = t()).done;) {
                                                        var n = a.value;
                                                        if (e.contains(n)) return
                                                    }
                                                    zi.set(e, {
                                                        "aria-hidden": e.getAttribute("aria-hidden"),
                                                        inert: e.inert
                                                    }), xi(e)
                                                }
                                            }));
                                            else
                                                for (var e, a = Xt(zi.keys()); !(e = a()).done;) {
                                                    var n = e.value;
                                                    Si(n), zi.delete(n)
                                                }
                                        }
                                }
                            }), [a])
                        }(p, !!E && S), fi("mousedown", (function(e) {
                            var a, t = e.target;
                            b === Ri.Open && (E || (null == (a = p.current) ? void 0 : a.contains(t)) || z())
                        })), fi("keydown", (function(e) {
                            e.key === In.Escape && b === Ri.Open && (E || (e.preventDefault(), e.stopPropagation(), z()))
                        })), (0, e.useEffect)((function() {
                            if (b === Ri.Open && !C) {
                                var e = document.documentElement.style.overflow,
                                    a = document.documentElement.style.paddingRight,
                                    t = window.innerWidth - document.documentElement.clientWidth;
                                return document.documentElement.style.overflow = "hidden", document.documentElement.style.paddingRight = t + "px",
                                    function() {
                                        document.documentElement.style.overflow = e, document.documentElement.style.paddingRight = a
                                    }
                            }
                        }), [b, C]), (0, e.useEffect)((function() {
                            if (b === Ri.Open && p.current) {
                                var e = new IntersectionObserver((function(e) {
                                    for (var a, t = Xt(e); !(a = t()).done;) {
                                        var n = a.value;
                                        0 === n.boundingClientRect.x && 0 === n.boundingClientRect.y && 0 === n.boundingClientRect.width && 0 === n.boundingClientRect.height && z()
                                    }
                                }));
                                return e.observe(p.current),
                                    function() {
                                        return e.disconnect()
                                    }
                            }
                        }), [b, p, z]);
                    var O = function() {
                            var a = (0, e.useState)([]),
                                t = a[0],
                                n = a[1];
                            return [t.length > 0 ? t.join(" ") : void 0, (0, e.useMemo)((function() {
                                return function(a) {
                                    var t = (0, e.useCallback)((function(e) {
                                            return n((function(a) {
                                                    return [].concat(a, [e])
                                                })),
                                                function() {
                                                    return n((function(a) {
                                                        var t = a.slice(),
                                                            n = t.indexOf(e);
                                                        return -1 !== n && t.splice(n, 1), t
                                                    }))
                                                }
                                        }), []),
                                        i = (0, e.useMemo)((function() {
                                            return {
                                                register: t,
                                                slot: a.slot,
                                                name: a.name,
                                                props: a.props
                                            }
                                        }), [t, a.slot, a.name, a.props]);
                                    return e.createElement(_i.Provider, {
                                        value: i
                                    }, a.children)
                                }
                            }), [n])]
                        }(),
                        N = O[0],
                        j = O[1],
                        P = "headlessui-dialog-" + un(),
                        T = (0, e.useMemo)((function() {
                            return [{
                                dialogState: b,
                                close: z,
                                setTitleId: x
                            }, w]
                        }), [b, w, z, x]),
                        _ = (0, e.useMemo)((function() {
                            return {
                                open: b === Ri.Open
                            }
                        }), [b]),
                        L = {
                            ref: m,
                            id: P,
                            role: "dialog",
                            "aria-modal": b === Ri.Open || void 0,
                            "aria-labelledby": w.titleId,
                            "aria-describedby": N,
                            onClick: function(e) {
                                e.stopPropagation()
                            }
                        },
                        M = l;
                    return e.createElement(Fi, {
                        type: "Dialog",
                        element: p,
                        onUpdate: (0, e.useCallback)((function(e, a, t) {
                            var n;
                            "Dialog" === a && Jt(e, ((n = {})[Mi.Add] = function() {
                                d.current.add(t), c((function(e) {
                                    return e + 1
                                }))
                            }, n[Mi.Remove] = function() {
                                d.current.add(t), c((function(e) {
                                    return e - 1
                                }))
                            }, n))
                        }), [])
                    }, e.createElement(Ci, {
                        force: !0
                    }, e.createElement(ji, null, e.createElement(Hi.Provider, {
                        value: T
                    }, e.createElement(ji.Group, {
                        target: p
                    }, e.createElement(Ci, {
                        force: !1
                    }, e.createElement(j, {
                        slot: _,
                        name: "Dialog.Description"
                    }, Zt({
                        props: Qt({}, M, L),
                        slot: _,
                        defaultTag: "div",
                        features: Wi,
                        visible: h,
                        name: "Dialog"
                    }))))))))
                })),
                Yi = an((function a(t, n) {
                    var i = Vi([$i.displayName, a.name].join("."))[0],
                        r = i.dialogState,
                        o = i.close,
                        l = ui(n),
                        s = "headlessui-dialog-overlay-" + un(),
                        u = (0, e.useCallback)((function(e) {
                            if (e.target === e.currentTarget) {
                                if (ci(e.currentTarget)) return e.preventDefault();
                                e.preventDefault(), e.stopPropagation(), o()
                            }
                        }), [o]),
                        c = (0, e.useMemo)((function() {
                            return {
                                open: r === Ri.Open
                            }
                        }), [r]);
                    return Zt({
                        props: Qt({}, t, {
                            ref: l,
                            id: s,
                            "aria-hidden": !0,
                            onClick: u
                        }),
                        slot: c,
                        defaultTag: "div",
                        name: "Dialog.Overlay"
                    })
                }));
            var $i = Object.assign(Bi, {
                    Overlay: Yi,
                    Title: function a(t) {
                        var n = Vi([$i.displayName, a.name].join("."))[0],
                            i = n.dialogState,
                            r = n.setTitleId,
                            o = "headlessui-dialog-title-" + un();
                        (0, e.useEffect)((function() {
                            return r(o),
                                function() {
                                    return r(null)
                                }
                        }), [o, r]);
                        var l = (0, e.useMemo)((function() {
                            return {
                                open: i === Ri.Open
                            }
                        }), [i]);
                        return Zt({
                            props: Qt({}, t, {
                                id: o
                            }),
                            slot: l,
                            defaultTag: "h2",
                            name: "Dialog.Title"
                        })
                    },
                    Description: function(e) {
                        var a = Li(),
                            t = "headlessui-description-" + un();
                        nn((function() {
                            return a.register(t)
                        }), [t, a.register]);
                        var n = e,
                            i = Qt({}, a.props, {
                                id: t
                            });
                        return Zt({
                            props: Qt({}, n, i),
                            slot: a.slot || {},
                            defaultTag: "p",
                            name: a.name || "Description"
                        })
                    }
                }),
                Qi = function(a) {
                    var t = a.title,
                        n = a.children,
                        i = a.isOpen,
                        r = a.handleClose;
                    return (0, Mn.jsx)(Tn.Root, {
                        show: i,
                        as: e.Fragment,
                        children: (0, Mn.jsx)($i, {
                            as: "div",
                            className: "fixed z-10 inset-0 overflow-y-auto",
                            onClose: r,
                            children: (0, Mn.jsxs)("div", {
                                className: "flex items-center justify-center min-h-screen py-10 px-4 text-center sm:block sm:p-0",
                                children: [(0, Mn.jsx)(Tn.Child, {
                                    as: e.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: (0, Mn.jsx)($i.Overlay, {
                                        className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                                    })
                                }), (0, Mn.jsx)("span", {
                                    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                                    "aria-hidden": "true",
                                    children: "\u200b"
                                }), (0, Mn.jsx)(Tn.Child, {
                                    as: e.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                                    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    children: (0, Mn.jsxs)("div", {
                                        className: "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 dark:bg-gray-800",
                                        children: [(0, Mn.jsx)("div", {
                                            className: "absolute right-4 top-4",
                                            children: (0, Mn.jsx)(c, {
                                                className: "h-6 w-6 cursor-pointer dark:stroke-white",
                                                onClick: function() {
                                                    return r()
                                                }
                                            })
                                        }), (0, Mn.jsx)("div", {
                                            children: (0, Mn.jsxs)("div", {
                                                className: "text-center",
                                                children: [(0, Mn.jsx)($i.Title, {
                                                    as: "h3",
                                                    className: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100",
                                                    children: t
                                                }), (0, Mn.jsx)("div", {
                                                    className: "mt-2",
                                                    children: n
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                Ki = function(e) {
                    var a = e.isOpen,
                        t = e.handleClose;
                    return (0, Mn.jsxs)(Qi, {
                        title: "Medical Words",
                        isOpen: a,
                        handleClose: t,
                        children: [(0, Mn.jsx)("p", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: "Indovina ogni giorno termini ed acronimi medici di 5 lettere in 6 tentativi."
                        }), (0, Mn.jsxs)("p", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: ["Condividi la soluzione con gli amici e sui nostri canali social...", (0, Mn.jsx)("a", {
                                href: "https://instagram.com/womeninsurgeryitalia?igshid=hakfpty6hy54",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "h-6 w-6 mr-3 instagram social",
                                children: (0, Mn.jsx)(Wt, {
                                    icon: d,
                                    size: "1x"
                                })
                            }), (0, Mn.jsx)("a", {
                                href: "https://www.facebook.com/womeninsurgeryitalia/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "h-6 w-6 mr-3 facebook social",
                                children: (0, Mn.jsx)(Wt, {
                                    icon: p,
                                    size: "1x"
                                })
                            }), (0, Mn.jsx)("a", {
                                href: "https://www.linkedin.com/in/women-in-surgery-italia-0a8bb313a",
                                className: "h-6 w-6 mr-3 linkedin social",
                                children: (0, Mn.jsx)(Wt, {
                                    icon: f,
                                    size: "1x"
                                })
                            }), (0, Mn.jsx)("a", {
                                href: "https://twitter.com/@wisitalia",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "h-6 w-6 mr-3 twitter social",
                                children: (0, Mn.jsx)(Wt, {
                                    icon: m,
                                    size: "1x"
                                })
                            })]
                        }), (0, Mn.jsx)("p", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: "Seguici per aggiornamenti quotidiani"
                        }), (0, Mn.jsxs)("p", {
                            className: "mt-3 italic text-sm text-gray-500 dark:text-gray-300",
                            children: ["Medical Words \xe8 una versione customizzata per  ", (0, Mn.jsx)("a", {
                                href: "https://womeninsurgeryitalia.it/",
                                className: "underline font-bold",
                                children: "Women in Surgery Italia"
                            }), " ed open source (", (0, Mn.jsx)("a", {
                                href: "https://github.com/par-le/react-wordle",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "underline",
                                children: "qui il codice"
                            }), ") del gioco in inglese ", (0, Mn.jsx)("a", {
                                href: "https://www.nytimes.com/games/wordle/index.html",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "underline font-bold",
                                children: "Wordle"
                            })]
                        }), (0, Mn.jsx)("h1", {
                            className: "mt-6 t dark:text-gray-300 dark:text-gray-300",
                            children: "Come Giocare:"
                        }), (0, Mn.jsx)("p", {
                            className: "text-sm text-gray-500 dark:text-gray-300 ",
                            children: 'Dopo ogni tentativo, i colori delle tessere cambiano per mostrarti quanto ci sei andato vicino."'
                        }), (0, Mn.jsxs)("div", {
                            className: "flex justify-center mb-1 mt-4",
                            children: [(0, Mn.jsx)(ti, {
                                value: "F",
                                status: "correct"
                            }), (0, Mn.jsx)(ti, {
                                value: "L"
                            }), (0, Mn.jsx)(ti, {
                                value: "E"
                            }), (0, Mn.jsx)(ti, {
                                value: "B"
                            }), (0, Mn.jsx)(ti, {
                                value: "o"
                            })]
                        }), (0, Mn.jsx)("p", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: "La lettera F \xe8 nella parola ed \xe8 nel posto giusto."
                        }), (0, Mn.jsxs)("div", {
                            className: "flex justify-center mb-1 mt-4",
                            children: [(0, Mn.jsx)(ti, {
                                value: "L"
                            }), (0, Mn.jsx)(ti, {
                                value: "I"
                            }), (0, Mn.jsx)(ti, {
                                value: "N",
                                status: "present"
                            }), (0, Mn.jsx)(ti, {
                                value: "F"
                            }), (0, Mn.jsx)(ti, {
                                value: "A"
                            })]
                        }), (0, Mn.jsx)("p", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: "La lettera N \xe8 nella parola ma nel posto sbagliato"
                        }), (0, Mn.jsxs)("div", {
                            className: "flex justify-center mb-1 mt-4",
                            children: [(0, Mn.jsx)(ti, {
                                value: "C"
                            }), (0, Mn.jsx)(ti, {
                                value: "R"
                            }), (0, Mn.jsx)(ti, {
                                value: "O"
                            }), (0, Mn.jsx)(ti, {
                                value: "H",
                                status: "absent"
                            }), (0, Mn.jsx)(ti, {
                                value: "N"
                            })]
                        }), (0, Mn.jsx)("p", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: "La lettera H non \xe8 nella parola."
                        }), (0, Mn.jsx)("p", {
                            className: "mt-6 text-sm text-gray-500 dark:text-gray-300",
                            children: "Ogni giorno c'\xe8 una nuova parola da indovinare, la stessa per tutti."
                        })]
                    })
                };

            function Gi(e, a) {
                if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
            }

            function Xi(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var n = a[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Ji(e, a, t) {
                return a && Xi(e.prototype, a), t && Xi(e, t), e
            }

            function Zi(e, a) {
                if ("function" !== typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(a && a.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), a && ar(e, a)
            }

            function er(e) {
                return er = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, er(e)
            }

            function ar(e, a) {
                return ar = Object.setPrototypeOf || function(e, a) {
                    return e.__proto__ = a, e
                }, ar(e, a)
            }

            function tr(e, a) {
                return !a || "object" !== typeof a && "function" !== typeof a ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : a
            }

            function nr(e) {
                var a = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (Nr) {
                        return !1
                    }
                }();
                return function() {
                    var t, n = er(e);
                    if (a) {
                        var i = er(this).constructor;
                        t = Reflect.construct(n, arguments, i)
                    } else t = n.apply(this, arguments);
                    return tr(this, t)
                }
            }

            function ir(e) {
                return function(e) {
                    if (Array.isArray(e)) return rr(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, a) {
                    if (!e) return;
                    if ("string" === typeof e) return rr(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return rr(e, a)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function rr(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, n = new Array(a); t < a; t++) n[t] = e[t];
                return n
            }

            function or(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                    t = String(e);
                if (0 === a) return t;
                var n = t.match(/(.*?)([0-9]+)(.*)/),
                    i = n ? n[1] : "",
                    r = n ? n[3] : "",
                    o = n ? n[2] : t,
                    l = o.length >= a ? o : (ir(Array(a)).map((function() {
                        return "0"
                    })).join("") + o).slice(-1 * a);
                return "".concat(i).concat(l).concat(r)
            }
            var lr = {
                daysInHours: !1,
                zeroPadTime: 2
            };

            function sr(e, a) {
                var t = e.days,
                    n = e.hours,
                    i = e.minutes,
                    r = e.seconds,
                    o = Object.assign(Object.assign({}, lr), a),
                    l = o.daysInHours,
                    s = o.zeroPadTime,
                    u = o.zeroPadDays,
                    c = void 0 === u ? s : u,
                    f = Math.min(2, s),
                    d = l ? or(n + 24 * t, s) : or(n, f);
                return {
                    days: l ? "" : or(t, c),
                    hours: d,
                    minutes: or(i, f),
                    seconds: or(r, f)
                }
            }
            var ur = function(a) {
                Zi(n, a);
                var t = nr(n);

                function n() {
                    var e;
                    return Gi(this, n), (e = t.apply(this, arguments)).state = {
                        count: e.props.count || 3
                    }, e.startCountdown = function() {
                        e.interval = window.setInterval((function() {
                            0 === e.state.count - 1 ? (e.stopCountdown(), e.props.onComplete && e.props.onComplete()) : e.setState((function(e) {
                                return {
                                    count: e.count - 1
                                }
                            }))
                        }), 1e3)
                    }, e.stopCountdown = function() {
                        clearInterval(e.interval)
                    }, e.addTime = function(a) {
                        e.stopCountdown(), e.setState((function(e) {
                            return {
                                count: e.count + a
                            }
                        }), e.startCountdown)
                    }, e
                }
                return Ji(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.startCountdown()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearInterval(this.interval)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.children ? (0, e.cloneElement)(this.props.children, {
                            count: this.state.count
                        }) : null
                    }
                }]), n
            }(e.Component);
            ur.propTypes = {
                count: jt.number,
                children: jt.element,
                onComplete: jt.func
            };
            var cr = function(a) {
                Zi(n, a);
                var t = nr(n);

                function n(a) {
                    var i;
                    if (Gi(this, n), (i = t.call(this, a)).mounted = !1, i.initialTimestamp = i.calcOffsetStartTimestamp(), i.offsetStartTimestamp = i.props.autoStart ? 0 : i.initialTimestamp, i.offsetTime = 0, i.legacyMode = !1, i.legacyCountdownRef = (0, e.createRef)(), i.tick = function() {
                            var e = i.calcTimeDelta(),
                                a = e.completed && !i.props.overtime ? void 0 : i.props.onTick;
                            i.setTimeDeltaState(e, void 0, a)
                        }, i.start = function() {
                            if (!i.isStarted()) {
                                var e = i.offsetStartTimestamp;
                                i.offsetStartTimestamp = 0, i.offsetTime += e ? i.calcOffsetStartTimestamp() - e : 0;
                                var a = i.calcTimeDelta();
                                i.setTimeDeltaState(a, "STARTED", i.props.onStart), i.props.controlled || a.completed && !i.props.overtime || (i.clearTimer(), i.interval = window.setInterval(i.tick, i.props.intervalDelay))
                            }
                        }, i.pause = function() {
                            i.isPaused() || (i.clearTimer(), i.offsetStartTimestamp = i.calcOffsetStartTimestamp(), i.setTimeDeltaState(i.state.timeDelta, "PAUSED", i.props.onPause))
                        }, i.stop = function() {
                            i.isStopped() || (i.clearTimer(), i.offsetStartTimestamp = i.calcOffsetStartTimestamp(), i.offsetTime = i.offsetStartTimestamp - i.initialTimestamp, i.setTimeDeltaState(i.calcTimeDelta(), "STOPPED", i.props.onStop))
                        }, i.isStarted = function() {
                            return i.isStatus("STARTED")
                        }, i.isPaused = function() {
                            return i.isStatus("PAUSED")
                        }, i.isStopped = function() {
                            return i.isStatus("STOPPED")
                        }, i.isCompleted = function() {
                            return i.isStatus("COMPLETED")
                        }, i.handleOnComplete = function(e) {
                            i.props.onComplete && i.props.onComplete(e)
                        }, a.date) {
                        var r = i.calcTimeDelta();
                        i.state = {
                            timeDelta: r,
                            status: r.completed ? "COMPLETED" : "STOPPED"
                        }
                    } else i.legacyMode = !0;
                    return i
                }
                return Ji(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.legacyMode || (this.mounted = !0, this.props.onMount && this.props.onMount(this.calcTimeDelta()), this.props.autoStart && this.start())
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        this.legacyMode || this.props.date !== e.date && (this.initialTimestamp = this.calcOffsetStartTimestamp(), this.offsetStartTimestamp = this.initialTimestamp, this.offsetTime = 0, this.setTimeDeltaState(this.calcTimeDelta()))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.legacyMode || (this.mounted = !1, this.clearTimer())
                    }
                }, {
                    key: "calcTimeDelta",
                    value: function() {
                        var e = this.props,
                            a = e.date,
                            t = e.now,
                            n = e.precision,
                            i = e.controlled,
                            r = e.overtime;
                        return function(e) {
                            var a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = t.now,
                                i = void 0 === n ? Date.now : n,
                                r = t.precision,
                                o = void 0 === r ? 0 : r,
                                l = t.controlled,
                                s = t.offsetTime,
                                u = void 0 === s ? 0 : s,
                                c = t.overtime;
                            a = "string" === typeof e ? new Date(e).getTime() : e instanceof Date ? e.getTime() : e, l || (a += u);
                            var f = l ? a : a - i(),
                                d = Math.min(20, Math.max(0, o)),
                                p = Math.round(1e3 * parseFloat(((c ? f : Math.max(0, f)) / 1e3).toFixed(d))),
                                m = Math.abs(p) / 1e3;
                            return {
                                total: p,
                                days: Math.floor(m / 86400),
                                hours: Math.floor(m / 3600 % 24),
                                minutes: Math.floor(m / 60 % 60),
                                seconds: Math.floor(m % 60),
                                milliseconds: Number((m % 1 * 1e3).toFixed()),
                                completed: p <= 0
                            }
                        }(a, {
                            now: t,
                            precision: n,
                            controlled: i,
                            offsetTime: this.offsetTime,
                            overtime: r
                        })
                    }
                }, {
                    key: "calcOffsetStartTimestamp",
                    value: function() {
                        return Date.now()
                    }
                }, {
                    key: "addTime",
                    value: function(e) {
                        this.legacyCountdownRef.current.addTime(e)
                    }
                }, {
                    key: "clearTimer",
                    value: function() {
                        window.clearInterval(this.interval)
                    }
                }, {
                    key: "isStatus",
                    value: function(e) {
                        return this.state.status === e
                    }
                }, {
                    key: "setTimeDeltaState",
                    value: function(e, a, t) {
                        var n = this;
                        if (this.mounted) {
                            var i;
                            !this.state.timeDelta.completed && e.completed && (this.props.overtime || this.clearTimer(), i = this.handleOnComplete);
                            return this.setState((function(t) {
                                var i = a || t.status;
                                return e.completed && !n.props.overtime ? i = "COMPLETED" : a || "COMPLETED" !== i || (i = "STOPPED"), {
                                    timeDelta: e,
                                    status: i
                                }
                            }), (function() {
                                t && t(n.state.timeDelta), i && i(n.state.timeDelta)
                            }))
                        }
                    }
                }, {
                    key: "getApi",
                    value: function() {
                        return this.api = this.api || {
                            start: this.start,
                            pause: this.pause,
                            stop: this.stop,
                            isStarted: this.isStarted,
                            isPaused: this.isPaused,
                            isStopped: this.isStopped,
                            isCompleted: this.isCompleted
                        }
                    }
                }, {
                    key: "getRenderProps",
                    value: function() {
                        var e = this.props,
                            a = e.daysInHours,
                            t = e.zeroPadTime,
                            n = e.zeroPadDays,
                            i = this.state.timeDelta;
                        return Object.assign(Object.assign({}, i), {
                            api: this.getApi(),
                            props: this.props,
                            formatted: sr(i, {
                                daysInHours: a,
                                zeroPadTime: t,
                                zeroPadDays: n
                            })
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (this.legacyMode) {
                            var a = this.props,
                                t = a.count,
                                n = a.children,
                                i = a.onComplete;
                            return (0, e.createElement)(ur, {
                                ref: this.legacyCountdownRef,
                                count: t,
                                onComplete: i
                            }, n)
                        }
                        var r = this.props,
                            o = r.className,
                            l = r.overtime,
                            s = r.children,
                            u = r.renderer,
                            c = this.getRenderProps();
                        if (u) return u(c);
                        if (s && this.state.timeDelta.completed && !l) return (0, e.cloneElement)(s, {
                            countdown: c
                        });
                        var f = c.formatted,
                            d = f.days,
                            p = f.hours,
                            m = f.minutes,
                            g = f.seconds;
                        return (0, e.createElement)("span", {
                            className: o
                        }, c.total < 0 ? "-" : "", d, d ? ":" : "", p, ":", m, ":", g)
                    }
                }]), n
            }(e.Component);
            cr.defaultProps = Object.assign(Object.assign({}, lr), {
                controlled: !1,
                intervalDelay: 1e3,
                precision: 0,
                autoStart: !0
            }), cr.propTypes = {
                date: (0, jt.oneOfType)([(0, jt.instanceOf)(Date), jt.string, jt.number]),
                daysInHours: jt.bool,
                zeroPadTime: jt.number,
                zeroPadDays: jt.number,
                controlled: jt.bool,
                intervalDelay: jt.number,
                precision: jt.number,
                autoStart: jt.bool,
                overtime: jt.bool,
                className: jt.string,
                children: jt.element,
                renderer: jt.func,
                now: jt.func,
                onMount: jt.func,
                onStart: jt.func,
                onPause: jt.func,
                onStop: jt.func,
                onTick: jt.func,
                onComplete: jt.func
            };
            var fr = cr,
                dr = function(e) {
                    var a = e.label,
                        t = e.value;
                    return (0, Mn.jsxs)("div", {
                        className: "items-center justify-center m-1 w-1/4 dark:text-white",
                        children: [(0, Mn.jsx)("div", {
                            className: "text-3xl font-bold",
                            children: t
                        }), (0, Mn.jsx)("div", {
                            className: "text-xs",
                            children: a
                        })]
                    })
                },
                pr = function(e) {
                    var a = e.gameStats;
                    return (0, Mn.jsxs)("div", {
                        className: "flex justify-center my-2",
                        children: [(0, Mn.jsx)(dr, {
                            label: "Partite",
                            value: a.totalGames
                        }), (0, Mn.jsx)(dr, {
                            label: "% Vittorie",
                            value: "".concat(a.successRate, "%")
                        }), (0, Mn.jsx)(dr, {
                            label: "Vinte di fila",
                            value: a.currentStreak
                        }), (0, Mn.jsx)(dr, {
                            label: "Record vinte di fila",
                            value: a.bestStreak
                        })]
                    })
                },
                mr = function(e) {
                    var a = e.index,
                        t = e.size,
                        n = e.label;
                    return (0, Mn.jsxs)("div", {
                        className: "flex justify-left m-1",
                        children: [(0, Mn.jsx)("div", {
                            className: "items-center justify-center w-2",
                            children: a + 1
                        }), (0, Mn.jsx)("div", {
                            className: "rounded-full w-full ml-2",
                            children: (0, Mn.jsx)("div", {
                                style: {
                                    width: "".concat(5 + t, "%")
                                },
                                className: "bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 rounded-l-full",
                                children: n
                            })
                        })]
                    })
                },
                gr = function(e) {
                    var a = e.gameStats.winDistribution,
                        t = Math.max.apply(Math, r(a));
                    return (0, Mn.jsx)("div", {
                        className: "columns-1 justify-left m-2 text-sm dark:text-white",
                        children: a.map((function(e, a) {
                            return (0, Mn.jsx)(mr, {
                                index: a,
                                size: e / t * 90,
                                label: String(e)
                            }, a)
                        }))
                    })
                },
                vr = function(e) {
                    return e.map((function(e) {
                        var a = Xn(e),
                            t = ai();
                        return e.split("").map((function(e, n) {
                            switch (a[n]) {
                                case "correct":
                                    return t ? "\ud83d\udfe7" : "\ud83d\udfe9";
                                case "present":
                                    return t ? "\ud83d\udfe6" : "\ud83d\udfe8";
                                default:
                                    return "dark" === localStorage.getItem("theme") ? "\u2b1b" : "\u2b1c"
                            }
                        })).join("")
                    })).join("\n")
                },
                br = function(e) {
                    var a = e.isOpen,
                        t = e.handleClose,
                        n = e.guesses,
                        i = e.gameStats,
                        r = e.isGameLost,
                        o = e.isGameWon,
                        l = e.handleShare,
                        s = e.isHardMode;
                    return i.totalGames <= 0 ? (0, Mn.jsx)(Qi, {
                        title: Bn,
                        isOpen: a,
                        handleClose: t,
                        children: (0, Mn.jsx)(pr, {
                            gameStats: i
                        })
                    }) : (0, Mn.jsxs)(Qi, {
                        title: Bn,
                        isOpen: a,
                        handleClose: t,
                        children: [(0, Mn.jsx)(pr, {
                            gameStats: i
                        }), (0, Mn.jsx)("h4", {
                            className: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100",
                            children: "Distribuzione dei tentativi"
                        }), (0, Mn.jsx)(gr, {
                            gameStats: i
                        }), (r || o) && (0, Mn.jsxs)("div", {
                            className: "mt-5 sm:mt-6 columns-2 dark:text-white",
                            children: [(0, Mn.jsxs)("div", {
                                children: [(0, Mn.jsx)("h5", {
                                    children: "Nuova parola in"
                                }), (0, Mn.jsx)(fr, {
                                    className: "text-lg font-medium text-gray-900 dark:text-gray-100",
                                    date: Gn,
                                    daysInHours: !0
                                })]
                            }), (0, Mn.jsx)("button", {
                                type: "button",
                                className: "mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm",
                                onClick: function() {
                                    ! function(e, a, t) {
                                        navigator.clipboard.writeText("".concat("https://womeninsurgeryitalia.github.io/medical-words-game/", "\n").concat("Parola numero", ": ").concat(Kn, "\n").concat("La mia partita di oggi", ": ").concat(a ? "X" : e.length, "/6").concat(t ? "*" : "", "\n\n") + vr(e))
                                    }(n, r, s), l()
                                },
                                children: "Condividi"
                            })]
                        })]
                    })
                },
                hr = function(e) {
                    var a = e.settingName,
                        t = e.flag,
                        n = e.handleFlag,
                        i = Ln()("w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out cursor-pointer", {
                            "bg-green-400": t
                        }),
                        r = Ln()("bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out cursor-pointer", {
                            "translate-x-6": t
                        });
                    return (0, Mn.jsxs)("div", {
                        className: "flex justify-between items-center gap-8 mt-2",
                        children: [(0, Mn.jsx)("h2", {
                            className: "text-gray-500 dark:text-gray-300",
                            children: a
                        }), (0, Mn.jsx)("div", {
                            className: i,
                            onClick: function() {
                                return n(!t)
                            },
                            children: (0, Mn.jsx)("div", {
                                className: r
                            })
                        })]
                    })
                },
                yr = function(e) {
                    var a = e.isOpen,
                        t = e.handleClose,
                        n = e.isHardMode,
                        i = e.handleHardMode,
                        r = e.isDarkMode,
                        o = e.handleDarkMode,
                        l = e.isHardModeErrorModalOpen,
                        s = e.isHighContrastMode,
                        u = e.handleHighContrastMode;
                    return (0, Mn.jsx)(Qi, {
                        title: "Impostazioni",
                        isOpen: a,
                        handleClose: t,
                        children: (0, Mn.jsxs)("div", {
                            className: "grid-cols-2 gap-4",
                            children: [(0, Mn.jsx)(hr, {
                                settingName: "Modalit\xe0 difficile",
                                flag: n,
                                handleFlag: i
                            }), (0, Mn.jsx)(hr, {
                                settingName: "Tema scuro",
                                flag: r,
                                handleFlag: o
                            }), (0, Mn.jsx)(hr, {
                                settingName: "Colori ad alto contrasto",
                                flag: s,
                                handleFlag: u
                            }), (0, Mn.jsx)(An, {
                                message: "La modalit\xe0 difficile pu\xf2 essere impostata solo all'inizio!",
                                isOpen: l
                            })]
                        })
                    })
                };

            function wr(e, a, t) {
                return a in e ? Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = t, e
            }

            function kr(e, a) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    a && (n = n.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }
            var zr = function(e, a) {
                    var t = function(e) {
                        for (var a = 1; a < arguments.length; a++) {
                            var t = null != arguments[a] ? arguments[a] : {};
                            a % 2 ? kr(Object(t), !0).forEach((function(a) {
                                wr(e, a, t[a])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : kr(Object(t)).forEach((function(a) {
                                Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
                            }))
                        }
                        return e
                    }({}, e);
                    return t.totalGames += 1, a >= 6 ? (t.currentStreak = 0, t.gamesFailed += 1) : (t.winDistribution[a] += 1, t.currentStreak += 1, t.bestStreak < t.currentStreak && (t.bestStreak = t.currentStreak)), t.successRate = Er(t),
                        function(e) {
                            localStorage.setItem(ei, JSON.stringify(e))
                        }(t), t
                },
                xr = {
                    winDistribution: Array.from(new Array(6), (function() {
                        return 0
                    })),
                    gamesFailed: 0,
                    currentStreak: 0,
                    bestStreak: 0,
                    totalGames: 0,
                    successRate: 0
                },
                Sr = function() {
                    return function() {
                        var e = localStorage.getItem(ei);
                        return e ? JSON.parse(e) : null
                    }() || xr
                },
                Er = function(e) {
                    var a = e.totalGames,
                        t = e.gamesFailed;
                    return Math.round(100 * (a - t) / Math.max(a, 1))
                };
            var Cr = function() {
                    var a = window.matchMedia("(prefers-color-scheme: dark)").matches,
                        t = o((0, e.useState)(""), 2),
                        n = t[0],
                        i = t[1],
                        c = o((0, e.useState)(!1), 2),
                        g = c[0],
                        v = c[1],
                        b = o((0, e.useState)(!0), 2),
                        h = b[0],
                        y = b[1],
                        w = o((0, e.useState)(!1), 2),
                        k = w[0],
                        z = w[1],
                        x = o((0, e.useState)(!1), 2),
                        S = x[0],
                        E = x[1],
                        C = o((0, e.useState)(!1), 2),
                        O = C[0],
                        N = C[1],
                        j = o((0, e.useState)(!1), 2),
                        P = j[0],
                        T = j[1],
                        _ = o((0, e.useState)(!1), 2),
                        L = _[0],
                        M = _[1],
                        A = o((0, e.useState)(""), 2),
                        R = A[0],
                        D = A[1],
                        I = o((0, e.useState)(!1), 2),
                        F = I[0],
                        U = I[1],
                        H = o((0, e.useState)(localStorage.getItem("theme") ? "dark" === localStorage.getItem("theme") : !!a), 2),
                        V = H[0],
                        q = H[1],
                        W = o((0, e.useState)(ai()), 2),
                        B = W[0],
                        Y = W[1],
                        $ = o((0, e.useState)(""), 2),
                        Q = $[0],
                        K = $[1],
                        G = o((0, e.useState)(!1), 2),
                        X = G[0],
                        J = G[1],
                        Z = (0, e.useState)((function() {
                            var e = function() {
                                var e = localStorage.getItem(Jn);
                                return e ? JSON.parse(e) : null
                            }();
                            if ((null === e || void 0 === e ? void 0 : e.solution) !== Qn) return [];
                            var a = e.guesses.includes(Qn);
                            return a && v(!0), 6 !== e.guesses.length || a || U(!0), e.guesses
                        })),
                        ee = o(Z, 2),
                        ae = ee[0],
                        te = ee[1],
                        ne = o((0, e.useState)((function() {
                            return Sr()
                        })), 2),
                        ie = ne[0],
                        re = ne[1],
                        oe = o((0, e.useState)(!!localStorage.getItem("gameMode") && "hard" === localStorage.getItem("gameMode")), 2),
                        le = oe[0],
                        se = oe[1],
                        ue = o((0, e.useState)(!1), 2),
                        ce = ue[0],
                        fe = ue[1],
                        de = o((0, e.useState)(""), 2),
                        pe = de[0],
                        me = de[1];
                    return (0, e.useEffect)((function() {
                        V ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), B ? document.documentElement.classList.add("high-contrast") : document.documentElement.classList.remove("high-contrast")
                    }), [V, B]), (0, e.useEffect)((function() {
                        var e;
                        e = {
                            guesses: ae,
                            solution: Qn
                        }, localStorage.setItem(Jn, JSON.stringify(e))
                    }), [ae]), (0, e.useEffect)((function() {
                        g && setTimeout((function() {
                            K(Hn[Math.floor(Math.random() * Hn.length)]), setTimeout((function() {
                                K(""), E(!0)
                            }), Rn)
                        }), 1750), F && setTimeout((function() {
                            E(!0)
                        }), 2100)
                    }), [g, F]), (0, Mn.jsxs)("div", {
                        className: "pt-2 pb-8 max-w-7xl mx-auto sm:px-6 lg:px-8",
                        children: [(0, Mn.jsxs)("div", {
                            className: "flex w-80 mx-auto items-center mb-8 mt-10",
                            children: [(0, Mn.jsx)("h1", {
                                className: "text-xl ml-2.5 grow color: #627c9d;",
                                children: (0, Mn.jsxs)("div", {
                                    className: "text-blue",
                                    children: [(0, Mn.jsx)("a", {
                                        href: "https://www.facebook.com/womeninsurgeryitalia/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "h-6 w-6 mr-3 facebook social",
                                        children: (0, Mn.jsx)(Wt, {
                                            icon: p,
                                            size: "1x"
                                        })
                                    }), (0, Mn.jsx)("a", {
                                        href: "https://www.linkedin.com/in/women-in-surgery-italia-0a8bb313a",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "h-6 w-6 mr-3 linkedin social",
                                        children: (0, Mn.jsx)(Wt, {
                                            icon: f,
                                            size: "1x"
                                        })
                                    }), (0, Mn.jsx)("a", {
                                        href: "https://twitter.com/@wisitalia",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "h-6 w-6 mr-3 twitter social",
                                        children: (0, Mn.jsx)(Wt, {
                                            icon: m,
                                            size: "1x"
                                        })
                                    }), (0, Mn.jsx)("a", {
                                        href: "https://instagram.com/womeninsurgeryitalia?igshid=hakfpty6hy54",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "h-6 w-6 mr-3 instagram social",
                                        children: (0, Mn.jsx)(Wt, {
                                            icon: d,
                                            size: "1x"
                                        })
                                    })]
                                })
                            }), (0, Mn.jsx)(u, {
                                className: "h-6 w-6 mr-2 cursor-pointer dark:stroke-white text-blue",
                                onClick: function() {
                                    return y(!0)
                                }
                            }), (0, Mn.jsx)(l, {
                                className: "h-6 w-6 mr-3 cursor-pointer dark:stroke-white text-blue",
                                onClick: function() {
                                    return E(!0)
                                }
                            }), (0, Mn.jsx)(s, {
                                className: "h-6 w-6 mr-3 cursor-pointer dark:stroke-white text-blue",
                                onClick: function() {
                                    return N(!0)
                                }
                            })]
                        }), (0, Mn.jsx)(oi, {
                            guesses: ae,
                            currentGuess: n,
                            isRevealing: X,
                            currentRowClassName: R
                        }), (0, Mn.jsx)(si, {
                            onChar: function(e) {
                                n.length < 5 && ae.length < 6 && !g && i("".concat(n).concat(e))
                            },
                            onDelete: function() {
                                i(n.slice(0, -1))
                            },
                            onEnter: function() {
                                if (!g && !F) {
                                    if (5 !== n.length) return z(!0), D("jiggle"), setTimeout((function() {
                                        z(!1), D("")
                                    }), Rn);
                                    if (e = n, !Fn.includes(e.toLowerCase()) && !Un.includes(e.toLowerCase())) return M(!0), D("jiggle"), setTimeout((function() {
                                        M(!1), D("")
                                    }), Rn);
                                    var e;
                                    if (le) {
                                        var a = Yn(n, ae);
                                        if (a) return me(a), fe(!0), D("jiggle"), setTimeout((function() {
                                            fe(!1), D("")
                                        }), Rn)
                                    }
                                    J(!0), setTimeout((function() {
                                        J(!1)
                                    }), 1750);
                                    var t = function(e) {
                                        return Qn === e
                                    }(n);
                                    if (5 === n.length && ae.length < 6 && !g) {
                                        if (te([].concat(r(ae), [n])), i(""), t) return re(zr(ie, ae.length)), v(!0);
                                        5 === ae.length && (re(zr(ie, ae.length + 1)), U(!0))
                                    }
                                }
                            },
                            guesses: ae,
                            isRevealing: X
                        }), (0, Mn.jsx)(Ki, {
                            isOpen: h,
                            handleClose: function() {
                                return y(!1)
                            }
                        }), (0, Mn.jsx)(br, {
                            isOpen: S,
                            handleClose: function() {
                                return E(!1)
                            },
                            guesses: ae,
                            gameStats: ie,
                            isGameLost: F,
                            isGameWon: g,
                            handleShare: function() {
                                return K("Copiata la partita negli appunti"), setTimeout((function() {
                                    return K("")
                                }), Rn)
                            },
                            isHardMode: le
                        }), (0, Mn.jsx)(yr, {
                            isOpen: O,
                            handleClose: function() {
                                return N(!1)
                            },
                            isHardMode: le,
                            handleHardMode: function(e) {
                                if (0 !== ae.length && "hard" !== localStorage.getItem("gameMode")) return T(!0), setTimeout((function() {
                                    T(!1)
                                }), Rn);
                                se(e), localStorage.setItem("gameMode", e ? "hard" : "normal")
                            },
                            isDarkMode: V,
                            handleDarkMode: function(e) {
                                q(e), localStorage.setItem("theme", e ? "dark" : "light")
                            },
                            isHardModeErrorModalOpen: P,
                            isHighContrastMode: B,
                            handleHighContrastMode: function(e) {
                                Y(e),
                                    function(e) {
                                        e ? localStorage.setItem(Zn, "1") : localStorage.removeItem(Zn)
                                    }(e)
                            }
                        }), (0, Mn.jsx)(An, {
                            message: "Non ci sono abbastanza lettere",
                            isOpen: k
                        }), (0, Mn.jsx)(An, {
                            message: "Parola non presente nel dizionario",
                            isOpen: L
                        }), (0, Mn.jsx)(An, {
                            message: pe,
                            isOpen: ce
                        }), (0, Mn.jsx)(An, {
                            message: Vn(Qn),
                            isOpen: F && !X
                        }), (0, Mn.jsx)(An, {
                            message: Q,
                            isOpen: "" !== Q,
                            variant: "success",
                            topMost: !0
                        })]
                    })
                },
                Or = function(e) {
                    e && e instanceof Function && t.e(787).then(t.bind(t, 787)).then((function(a) {
                        var t = a.getCLS,
                            n = a.getFID,
                            i = a.getFCP,
                            r = a.getLCP,
                            o = a.getTTFB;
                        t(e), n(e), i(e), r(e), o(e)
                    }))
                };
            a.render((0, Mn.jsx)(e.StrictMode, {
                children: (0, Mn.jsx)(Cr, {})
            }), document.getElementById("root")), Or()
        }()
}();
//# sourceMappingURL=main.d554ae62.js.map