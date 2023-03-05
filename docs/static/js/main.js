/*! For license information please see main.a75e428e.js.LICENSE.txt */ ! function() {
    var e = {
            694: function(e, a) {
                var t;
                ! function() {
                    "use strict";
                    var i = {}.hasOwnProperty;

                    function n() {
                        for (var e = [], a = 0; a < arguments.length; a++) {
                            var t = arguments[a];
                            if (t) {
                                var o = typeof t;
                                if ("string" === o || "number" === o) e.push(t);
                                else if (Array.isArray(t)) {
                                    if (t.length) {
                                        var r = n.apply(null, t);
                                        r && e.push(r)
                                    }
                                } else if ("object" === o)
                                    if (t.toString === Object.prototype.toString)
                                        for (var l in t) i.call(t, l) && t[l] && e.push(l);
                                    else e.push(t.toString())
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (n.default = n, e.exports = n) : void 0 === (t = function() {
                        return n
                    }.apply(a, [])) || (e.exports = t)
                }()
            },
            725: function(e) {
                "use strict";
                var a = Object.getOwnPropertySymbols,
                    t = Object.prototype.hasOwnProperty,
                    i = Object.prototype.propertyIsEnumerable;

                function n(e) {
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
                        var i = {};
                        return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                            i[e] = e
                        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
                    } catch (n) {
                        return !1
                    }
                }() ? Object.assign : function(e, o) {
                    for (var r, l, s = n(e), u = 1; u < arguments.length; u++) {
                        for (var c in r = Object(arguments[u])) t.call(r, c) && (s[c] = r[c]);
                        if (a) {
                            l = a(r);
                            for (var f = 0; f < l.length; f++) i.call(r, l[f]) && (s[l[f]] = r[l[f]])
                        }
                    }
                    return s
                }
            },
            888: function(e, a, t) {
                "use strict";
                var i = t(47);

                function n() {}

                function o() {}
                o.resetWarningCache = n, e.exports = function() {
                    function e(e, a, t, n, o, r) {
                        if (r !== i) {
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
                        checkPropTypes: o,
                        resetWarningCache: n
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
                var i = t(791),
                    n = t(725),
                    o = t(296);

                function r(e) {
                    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) a += "&args[]=" + encodeURIComponent(arguments[t]);
                    return "Minified React error #" + e + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                if (!i) throw Error(r(227));
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

                function v(e, a, t, i, n, o, r) {
                    this.acceptsBooleans = 2 === a || 3 === a || 4 === a, this.attributeName = i, this.attributeNamespace = n, this.mustUseProperty = t, this.propertyName = e, this.type = a, this.sanitizeURL = o, this.removeEmptyString = r
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

                function z(e, a, t, i) {
                    var n = b.hasOwnProperty(a) ? b[a] : null;
                    (null !== n ? 0 === n.type : !i && (2 < a.length && ("o" === a[0] || "O" === a[0]) && ("n" === a[1] || "N" === a[1]))) || (function(e, a, t, i) {
                        if (null === a || "undefined" === typeof a || function(e, a, t, i) {
                                if (null !== t && 0 === t.type) return !1;
                                switch (typeof a) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !i && (null !== t ? !t.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, a, t, i)) return !0;
                        if (i) return !1;
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
                    }(a, t, n, i) && (t = null), i || null === n ? function(e) {
                        return !!p.call(g, e) || !p.call(m, e) && (d.test(e) ? g[e] = !0 : (m[e] = !0, !1))
                    }(a) && (null === t ? e.removeAttribute(a) : e.setAttribute(a, "" + t)) : n.mustUseProperty ? e[n.propertyName] = null === t ? 3 !== n.type && "" : t : (a = n.attributeName, i = n.attributeNamespace, null === t ? e.removeAttribute(a) : (t = 3 === (n = n.type) || 4 === n && !0 === t ? "" : "" + t, i ? e.setAttributeNS(i, a, t) : e.setAttribute(a, t))))
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
                var w = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    k = 60103,
                    x = 60106,
                    S = 60107,
                    E = 60108,
                    C = 60114,
                    T = 60109,
                    _ = 60110,
                    N = 60112,
                    j = 60113,
                    O = 60120,
                    P = 60115,
                    L = 60116,
                    M = 60121,
                    R = 60128,
                    D = 60129,
                    F = 60130,
                    I = 60131;
                if ("function" === typeof Symbol && Symbol.for) {
                    var A = Symbol.for;
                    k = A("react.element"), x = A("react.portal"), S = A("react.fragment"), E = A("react.strict_mode"), C = A("react.profiler"), T = A("react.provider"), _ = A("react.context"), N = A("react.forward_ref"), j = A("react.suspense"), O = A("react.suspense_list"), P = A("react.memo"), L = A("react.lazy"), M = A("react.block"), A("react.scope"), R = A("react.opaque.id"), D = A("react.debug_trace_mode"), F = A("react.offscreen"), I = A("react.legacy_hidden")
                }
                var U, H = "function" === typeof Symbol && Symbol.iterator;

                function q(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof(e = H && e[H] || e["@@iterator"]) ? e : null
                }

                function V(e) {
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
                                    var i = s
                                }
                                Reflect.construct(e, [], a)
                            } else {
                                try {
                                    a.call()
                                } catch (s) {
                                    i = s
                                }
                                e.call(a.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (s) {
                                i = s
                            }
                            e()
                        }
                    } catch (s) {
                        if (s && i && "string" === typeof s.stack) {
                            for (var n = s.stack.split("\n"), o = i.stack.split("\n"), r = n.length - 1, l = o.length - 1; 1 <= r && 0 <= l && n[r] !== o[l];) l--;
                            for (; 1 <= r && 0 <= l; r--, l--)
                                if (n[r] !== o[l]) {
                                    if (1 !== r || 1 !== l)
                                        do {
                                            if (r--, 0 > --l || n[r] !== o[l]) return "\n" + n[r].replace(" at new ", " at ")
                                        } while (1 <= r && 0 <= l);
                                    break
                                }
                        }
                    } finally {
                        W = !1, Error.prepareStackTrace = t
                    }
                    return (e = e ? e.displayName || e.name : "") ? V(e) : ""
                }

                function $(e) {
                    switch (e.tag) {
                        case 5:
                            return V(e.type);
                        case 16:
                            return V("Lazy");
                        case 13:
                            return V("Suspense");
                        case 19:
                            return V("SuspenseList");
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

                function Q(e) {
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
                        case j:
                            return "Suspense";
                        case O:
                            return "SuspenseList"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case _:
                            return (e.displayName || "Context") + ".Consumer";
                        case T:
                            return (e._context.displayName || "Context") + ".Provider";
                        case N:
                            var a = e.render;
                            return a = a.displayName || a.name || "", e.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
                        case P:
                            return Q(e.type);
                        case M:
                            return Q(e._render);
                        case L:
                            a = e._payload, e = e._init;
                            try {
                                return Q(e(a))
                            } catch (t) {}
                    }
                    return null
                }

                function Y(e) {
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
                            i = "" + e[a];
                        if (!e.hasOwnProperty(a) && "undefined" !== typeof t && "function" === typeof t.get && "function" === typeof t.set) {
                            var n = t.get,
                                o = t.set;
                            return Object.defineProperty(e, a, {
                                configurable: !0,
                                get: function() {
                                    return n.call(this)
                                },
                                set: function(e) {
                                    i = "" + e, o.call(this, e)
                                }
                            }), Object.defineProperty(e, a, {
                                enumerable: t.enumerable
                            }), {
                                getValue: function() {
                                    return i
                                },
                                setValue: function(e) {
                                    i = "" + e
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
                        i = "";
                    return e && (i = K(e) ? e.checked ? "true" : "false" : e.value), (e = i) !== t && (a.setValue(e), !0)
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
                    return n({}, a, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != t ? t : e._wrapperState.initialChecked
                    })
                }

                function ee(e, a) {
                    var t = null == a.defaultValue ? "" : a.defaultValue,
                        i = null != a.checked ? a.checked : a.defaultChecked;
                    t = Y(null != a.value ? a.value : t), e._wrapperState = {
                        initialChecked: i,
                        initialValue: t,
                        controlled: "checkbox" === a.type || "radio" === a.type ? null != a.checked : null != a.value
                    }
                }

                function ae(e, a) {
                    null != (a = a.checked) && z(e, "checked", a, !1)
                }

                function te(e, a) {
                    ae(e, a);
                    var t = Y(a.value),
                        i = a.type;
                    if (null != t) "number" === i ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
                    else if ("submit" === i || "reset" === i) return void e.removeAttribute("value");
                    a.hasOwnProperty("value") ? ne(e, a.type, t) : a.hasOwnProperty("defaultValue") && ne(e, a.type, Y(a.defaultValue)), null == a.checked && null != a.defaultChecked && (e.defaultChecked = !!a.defaultChecked)
                }

                function ie(e, a, t) {
                    if (a.hasOwnProperty("value") || a.hasOwnProperty("defaultValue")) {
                        var i = a.type;
                        if (!("submit" !== i && "reset" !== i || void 0 !== a.value && null !== a.value)) return;
                        a = "" + e._wrapperState.initialValue, t || a === e.value || (e.value = a), e.defaultValue = a
                    }
                    "" !== (t = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== t && (e.name = t)
                }

                function ne(e, a, t) {
                    "number" === a && J(e.ownerDocument) === e || (null == t ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t))
                }

                function oe(e, a) {
                    return e = n({
                        children: void 0
                    }, a), (a = function(e) {
                        var a = "";
                        return i.Children.forEach(e, (function(e) {
                            null != e && (a += e)
                        })), a
                    }(a.children)) && (e.children = a), e
                }

                function re(e, a, t, i) {
                    if (e = e.options, a) {
                        a = {};
                        for (var n = 0; n < t.length; n++) a["$" + t[n]] = !0;
                        for (t = 0; t < e.length; t++) n = a.hasOwnProperty("$" + e[t].value), e[t].selected !== n && (e[t].selected = n), n && i && (e[t].defaultSelected = !0)
                    } else {
                        for (t = "" + Y(t), a = null, n = 0; n < e.length; n++) {
                            if (e[n].value === t) return e[n].selected = !0, void(i && (e[n].defaultSelected = !0));
                            null !== a || e[n].disabled || (a = e[n])
                        }
                        null !== a && (a.selected = !0)
                    }
                }

                function le(e, a) {
                    if (null != a.dangerouslySetInnerHTML) throw Error(r(91));
                    return n({}, a, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function se(e, a) {
                    var t = a.value;
                    if (null == t) {
                        if (t = a.children, a = a.defaultValue, null != t) {
                            if (null != a) throw Error(r(92));
                            if (Array.isArray(t)) {
                                if (!(1 >= t.length)) throw Error(r(93));
                                t = t[0]
                            }
                            a = t
                        }
                        null == a && (a = ""), t = a
                    }
                    e._wrapperState = {
                        initialValue: Y(t)
                    }
                }

                function ue(e, a) {
                    var t = Y(a.value),
                        i = Y(a.defaultValue);
                    null != t && ((t = "" + t) !== e.value && (e.value = t), null == a.defaultValue && e.defaultValue !== t && (e.defaultValue = t)), null != i && (e.defaultValue = "" + i)
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
                }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, a, t, i) {
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
                    ze = ["Webkit", "ms", "Moz", "O"];

                function we(e, a, t) {
                    return null == a || "boolean" === typeof a || "" === a ? "" : t || "number" !== typeof a || 0 === a || ye.hasOwnProperty(e) && ye[e] ? ("" + a).trim() : a + "px"
                }

                function ke(e, a) {
                    for (var t in e = e.style, a)
                        if (a.hasOwnProperty(t)) {
                            var i = 0 === t.indexOf("--"),
                                n = we(t, a[t], i);
                            "float" === t && (t = "cssFloat"), i ? e.setProperty(t, n) : e[t] = n
                        }
                }
                Object.keys(ye).forEach((function(e) {
                    ze.forEach((function(a) {
                        a = a + e.charAt(0).toUpperCase() + e.substring(1), ye[a] = ye[e]
                    }))
                }));
                var xe = n({
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
                        if (xe[e] && (null != a.children || null != a.dangerouslySetInnerHTML)) throw Error(r(137, e));
                        if (null != a.dangerouslySetInnerHTML) {
                            if (null != a.children) throw Error(r(60));
                            if ("object" !== typeof a.dangerouslySetInnerHTML || !("__html" in a.dangerouslySetInnerHTML)) throw Error(r(61))
                        }
                        if (null != a.style && "object" !== typeof a.style) throw Error(r(62))
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
                var Te = null,
                    _e = null,
                    Ne = null;

                function je(e) {
                    if (e = tn(e)) {
                        if ("function" !== typeof Te) throw Error(r(280));
                        var a = e.stateNode;
                        a && (a = on(a), Te(e.stateNode, e.type, a))
                    }
                }

                function Oe(e) {
                    _e ? Ne ? Ne.push(e) : Ne = [e] : _e = e
                }

                function Pe() {
                    if (_e) {
                        var e = _e,
                            a = Ne;
                        if (Ne = _e = null, je(e), a)
                            for (e = 0; e < a.length; e++) je(a[e])
                    }
                }

                function Le(e, a) {
                    return e(a)
                }

                function Me(e, a, t, i, n) {
                    return e(a, t, i, n)
                }

                function Re() {}
                var De = Le,
                    Fe = !1,
                    Ie = !1;

                function Ae() {
                    null === _e && null === Ne || (Re(), Pe())
                }

                function Ue(e, a) {
                    var t = e.stateNode;
                    if (null === t) return null;
                    var i = on(t);
                    if (null === i) return null;
                    t = i[a];
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
                            (i = !i.disabled) || (i = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !i;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (t && "function" !== typeof t) throw Error(r(231, a, typeof t));
                    return t
                }
                var He = !1;
                if (f) try {
                    var qe = {};
                    Object.defineProperty(qe, "passive", {
                        get: function() {
                            He = !0
                        }
                    }), window.addEventListener("test", qe, qe), window.removeEventListener("test", qe, qe)
                } catch (ve) {
                    He = !1
                }

                function Ve(e, a, t, i, n, o, r, l, s) {
                    var u = Array.prototype.slice.call(arguments, 3);
                    try {
                        a.apply(t, u)
                    } catch (c) {
                        this.onError(c)
                    }
                }
                var We = !1,
                    Be = null,
                    $e = !1,
                    Qe = null,
                    Ye = {
                        onError: function(e) {
                            We = !0, Be = e
                        }
                    };

                function Ke(e, a, t, i, n, o, r, l, s) {
                    We = !1, Be = null, Ve.apply(Ye, arguments)
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
                    if (Ge(e) !== e) throw Error(r(188))
                }

                function Ze(e) {
                    if (e = function(e) {
                            var a = e.alternate;
                            if (!a) {
                                if (null === (a = Ge(e))) throw Error(r(188));
                                return a !== e ? null : e
                            }
                            for (var t = e, i = a;;) {
                                var n = t.return;
                                if (null === n) break;
                                var o = n.alternate;
                                if (null === o) {
                                    if (null !== (i = n.return)) {
                                        t = i;
                                        continue
                                    }
                                    break
                                }
                                if (n.child === o.child) {
                                    for (o = n.child; o;) {
                                        if (o === t) return Je(n), e;
                                        if (o === i) return Je(n), a;
                                        o = o.sibling
                                    }
                                    throw Error(r(188))
                                }
                                if (t.return !== i.return) t = n, i = o;
                                else {
                                    for (var l = !1, s = n.child; s;) {
                                        if (s === t) {
                                            l = !0, t = n, i = o;
                                            break
                                        }
                                        if (s === i) {
                                            l = !0, i = n, t = o;
                                            break
                                        }
                                        s = s.sibling
                                    }
                                    if (!l) {
                                        for (s = o.child; s;) {
                                            if (s === t) {
                                                l = !0, t = o, i = n;
                                                break
                                            }
                                            if (s === i) {
                                                l = !0, i = o, t = n;
                                                break
                                            }
                                            s = s.sibling
                                        }
                                        if (!l) throw Error(r(189))
                                    }
                                }
                                if (t.alternate !== i) throw Error(r(190))
                            }
                            if (3 !== t.tag) throw Error(r(188));
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
                var aa, ta, ia, na, oa = !1,
                    ra = [],
                    la = null,
                    sa = null,
                    ua = null,
                    ca = new Map,
                    fa = new Map,
                    da = [],
                    pa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function ma(e, a, t, i, n) {
                    return {
                        blockedOn: e,
                        domEventName: a,
                        eventSystemFlags: 16 | t,
                        nativeEvent: n,
                        targetContainers: [i]
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

                function va(e, a, t, i, n, o) {
                    return null === e || e.nativeEvent !== o ? (e = ma(a, t, i, n, o), null !== a && (null !== (a = tn(a)) && ta(a)), e) : (e.eventSystemFlags |= i, a = e.targetContainers, null !== n && -1 === a.indexOf(n) && a.push(n), e)
                }

                function ba(e) {
                    var a = an(e.target);
                    if (null !== a) {
                        var t = Ge(a);
                        if (null !== t)
                            if (13 === (a = t.tag)) {
                                if (null !== (a = Xe(t))) return e.blockedOn = a, void na(e.lanePriority, (function() {
                                    o.unstable_runWithPriority(e.priority, (function() {
                                        ia(t)
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
                        if (null !== t) return null !== (a = tn(t)) && ta(a), e.blockedOn = t, !1;
                        a.shift()
                    }
                    return !0
                }

                function ya(e, a, t) {
                    ha(e) && t.delete(a)
                }

                function za() {
                    for (oa = !1; 0 < ra.length;) {
                        var e = ra[0];
                        if (null !== e.blockedOn) {
                            null !== (e = tn(e.blockedOn)) && aa(e);
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
                        null === e.blockedOn && ra.shift()
                    }
                    null !== la && ha(la) && (la = null), null !== sa && ha(sa) && (sa = null), null !== ua && ha(ua) && (ua = null), ca.forEach(ya), fa.forEach(ya)
                }

                function wa(e, a) {
                    e.blockedOn === a && (e.blockedOn = null, oa || (oa = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, za)))
                }

                function ka(e) {
                    function a(a) {
                        return wa(a, e)
                    }
                    if (0 < ra.length) {
                        wa(ra[0], e);
                        for (var t = 1; t < ra.length; t++) {
                            var i = ra[t];
                            i.blockedOn === e && (i.blockedOn = null)
                        }
                    }
                    for (null !== la && wa(la, e), null !== sa && wa(sa, e), null !== ua && wa(ua, e), ca.forEach(a), fa.forEach(a), t = 0; t < da.length; t++)(i = da[t]).blockedOn === e && (i.blockedOn = null);
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

                function Ta(e) {
                    if (Ea[e]) return Ea[e];
                    if (!Sa[e]) return e;
                    var a, t = Sa[e];
                    for (a in t)
                        if (t.hasOwnProperty(a) && a in Ca) return Ea[e] = t[a];
                    return e
                }
                f && (Ca = document.createElement("div").style, "AnimationEvent" in window || (delete Sa.animationend.animation, delete Sa.animationiteration.animation, delete Sa.animationstart.animation), "TransitionEvent" in window || delete Sa.transitionend.transition);
                var _a = Ta("animationend"),
                    Na = Ta("animationiteration"),
                    ja = Ta("animationstart"),
                    Oa = Ta("transitionend"),
                    Pa = new Map,
                    La = new Map,
                    Ma = ["abort", "abort", _a, "animationEnd", Na, "animationIteration", ja, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Oa, "transitionEnd", "waiting", "waiting"];

                function Ra(e, a) {
                    for (var t = 0; t < e.length; t += 2) {
                        var i = e[t],
                            n = e[t + 1];
                        n = "on" + (n[0].toUpperCase() + n.slice(1)), La.set(i, a), Pa.set(i, n), u(n, [i])
                    }
                }(0, o.unstable_now)();
                var Da = 8;

                function Fa(e) {
                    if (0 !== (1 & e)) return Da = 15, 1;
                    if (0 !== (2 & e)) return Da = 14, 2;
                    if (0 !== (4 & e)) return Da = 13, 4;
                    var a = 24 & e;
                    return 0 !== a ? (Da = 12, a) : 0 !== (32 & e) ? (Da = 11, 32) : 0 !== (a = 192 & e) ? (Da = 10, a) : 0 !== (256 & e) ? (Da = 9, 256) : 0 !== (a = 3584 & e) ? (Da = 8, a) : 0 !== (4096 & e) ? (Da = 7, 4096) : 0 !== (a = 4186112 & e) ? (Da = 6, a) : 0 !== (a = 62914560 & e) ? (Da = 5, a) : 67108864 & e ? (Da = 4, 67108864) : 0 !== (134217728 & e) ? (Da = 3, 134217728) : 0 !== (a = 805306368 & e) ? (Da = 2, a) : 0 !== (1073741824 & e) ? (Da = 1, 1073741824) : (Da = 8, e)
                }

                function Ia(e, a) {
                    var t = e.pendingLanes;
                    if (0 === t) return Da = 0;
                    var i = 0,
                        n = 0,
                        o = e.expiredLanes,
                        r = e.suspendedLanes,
                        l = e.pingedLanes;
                    if (0 !== o) i = o, n = Da = 15;
                    else if (0 !== (o = 134217727 & t)) {
                        var s = o & ~r;
                        0 !== s ? (i = Fa(s), n = Da) : 0 !== (l &= o) && (i = Fa(l), n = Da)
                    } else 0 !== (o = t & ~r) ? (i = Fa(o), n = Da) : 0 !== l && (i = Fa(l), n = Da);
                    if (0 === i) return 0;
                    if (i = t & ((0 > (i = 31 - Wa(i)) ? 0 : 1 << i) << 1) - 1, 0 !== a && a !== i && 0 === (a & r)) {
                        if (Fa(a), n <= Da) return a;
                        Da = n
                    }
                    if (0 !== (a = e.entangledLanes))
                        for (e = e.entanglements, a &= i; 0 < a;) n = 1 << (t = 31 - Wa(a)), i |= e[t], a &= ~n;
                    return i
                }

                function Aa(e) {
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
                    throw Error(r(358, e))
                }

                function Ha(e) {
                    return e & -e
                }

                function qa(e) {
                    for (var a = [], t = 0; 31 > t; t++) a.push(e);
                    return a
                }

                function Va(e, a, t) {
                    e.pendingLanes |= a;
                    var i = a - 1;
                    e.suspendedLanes &= i, e.pingedLanes &= i, (e = e.eventTimes)[a = 31 - Wa(a)] = t
                }
                var Wa = Math.clz32 ? Math.clz32 : function(e) {
                        return 0 === e ? 32 : 31 - (Ba(e) / $a | 0) | 0
                    },
                    Ba = Math.log,
                    $a = Math.LN2;
                var Qa = o.unstable_UserBlockingPriority,
                    Ya = o.unstable_runWithPriority,
                    Ka = !0;

                function Ga(e, a, t, i) {
                    Fe || Re();
                    var n = Ja,
                        o = Fe;
                    Fe = !0;
                    try {
                        Me(n, e, a, t, i)
                    } finally {
                        (Fe = o) || Ae()
                    }
                }

                function Xa(e, a, t, i) {
                    Ya(Qa, Ja.bind(null, e, a, t, i))
                }

                function Ja(e, a, t, i) {
                    var n;
                    if (Ka)
                        if ((n = 0 === (4 & a)) && 0 < ra.length && -1 < pa.indexOf(e)) e = ma(null, e, a, t, i), ra.push(e);
                        else {
                            var o = Za(e, a, t, i);
                            if (null === o) n && ga(e, i);
                            else {
                                if (n) {
                                    if (-1 < pa.indexOf(e)) return e = ma(o, e, a, t, i), void ra.push(e);
                                    if (function(e, a, t, i, n) {
                                            switch (a) {
                                                case "focusin":
                                                    return la = va(la, e, a, t, i, n), !0;
                                                case "dragenter":
                                                    return sa = va(sa, e, a, t, i, n), !0;
                                                case "mouseover":
                                                    return ua = va(ua, e, a, t, i, n), !0;
                                                case "pointerover":
                                                    var o = n.pointerId;
                                                    return ca.set(o, va(ca.get(o) || null, e, a, t, i, n)), !0;
                                                case "gotpointercapture":
                                                    return o = n.pointerId, fa.set(o, va(fa.get(o) || null, e, a, t, i, n)), !0
                                            }
                                            return !1
                                        }(o, e, a, t, i)) return;
                                    ga(e, i)
                                }
                                Mi(e, a, i, null, t)
                            }
                        }
                }

                function Za(e, a, t, i) {
                    var n = Ce(i);
                    if (null !== (n = an(n))) {
                        var o = Ge(n);
                        if (null === o) n = null;
                        else {
                            var r = o.tag;
                            if (13 === r) {
                                if (null !== (n = Xe(o))) return n;
                                n = null
                            } else if (3 === r) {
                                if (o.stateNode.hydrate) return 3 === o.tag ? o.stateNode.containerInfo : null;
                                n = null
                            } else o !== n && (n = null)
                        }
                    }
                    return Mi(e, a, i, n, t), null
                }
                var et = null,
                    at = null,
                    tt = null;

                function it() {
                    if (tt) return tt;
                    var e, a, t = at,
                        i = t.length,
                        n = "value" in et ? et.value : et.textContent,
                        o = n.length;
                    for (e = 0; e < i && t[e] === n[e]; e++);
                    var r = i - e;
                    for (a = 1; a <= r && t[i - a] === n[o - a]; a++);
                    return tt = n.slice(e, 1 < a ? 1 - a : void 0)
                }

                function nt(e) {
                    var a = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === a && (e = 13) : e = a, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function ot() {
                    return !0
                }

                function rt() {
                    return !1
                }

                function lt(e) {
                    function a(a, t, i, n, o) {
                        for (var r in this._reactName = a, this._targetInst = i, this.type = t, this.nativeEvent = n, this.target = o, this.currentTarget = null, e) e.hasOwnProperty(r) && (a = e[r], this[r] = a ? a(n) : n[r]);
                        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? ot : rt, this.isPropagationStopped = rt, this
                    }
                    return n(a.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = ot)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = ot)
                        },
                        persist: function() {},
                        isPersistent: ot
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
                    pt = n({}, ft, {
                        view: 0,
                        detail: 0
                    }),
                    mt = lt(pt),
                    gt = n({}, pt, {
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
                        getModifierState: Tt,
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
                    bt = lt(n({}, gt, {
                        dataTransfer: 0
                    })),
                    ht = lt(n({}, pt, {
                        relatedTarget: 0
                    })),
                    yt = lt(n({}, ft, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    zt = n({}, ft, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    wt = lt(zt),
                    kt = lt(n({}, ft, {
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

                function Tt() {
                    return Ct
                }
                var _t = n({}, pt, {
                        key: function(e) {
                            if (e.key) {
                                var a = xt[e.key] || e.key;
                                if ("Unidentified" !== a) return a
                            }
                            return "keypress" === e.type ? 13 === (e = nt(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? St[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: Tt,
                        charCode: function(e) {
                            return "keypress" === e.type ? nt(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? nt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    }),
                    Nt = lt(_t),
                    jt = lt(n({}, gt, {
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
                    Ot = lt(n({}, pt, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: Tt
                    })),
                    Pt = lt(n({}, ft, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    Lt = n({}, gt, {
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
                    Rt = [9, 13, 27, 32],
                    Dt = f && "CompositionEvent" in window,
                    Ft = null;
                f && "documentMode" in document && (Ft = document.documentMode);
                var It = f && "TextEvent" in window && !Ft,
                    At = f && (!Dt || Ft && 8 < Ft && 11 >= Ft),
                    Ut = String.fromCharCode(32),
                    Ht = !1;

                function qt(e, a) {
                    switch (e) {
                        case "keyup":
                            return -1 !== Rt.indexOf(a.keyCode);
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

                function Vt(e) {
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

                function $t(e) {
                    var a = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === a ? !!Bt[e.type] : "textarea" === a
                }

                function Qt(e, a, t, i) {
                    Oe(i), 0 < (a = Di(a, "onChange")).length && (t = new dt("onChange", "change", null, t, i), e.push({
                        event: t,
                        listeners: a
                    }))
                }
                var Yt = null,
                    Kt = null;

                function Gt(e) {
                    _i(e, 0)
                }

                function Xt(e) {
                    if (X(nn(e))) return e
                }

                function Jt(e, a) {
                    if ("change" === e) return a
                }
                var Zt = !1;
                if (f) {
                    var ei;
                    if (f) {
                        var ai = "oninput" in document;
                        if (!ai) {
                            var ti = document.createElement("div");
                            ti.setAttribute("oninput", "return;"), ai = "function" === typeof ti.oninput
                        }
                        ei = ai
                    } else ei = !1;
                    Zt = ei && (!document.documentMode || 9 < document.documentMode)
                }

                function ii() {
                    Yt && (Yt.detachEvent("onpropertychange", ni), Kt = Yt = null)
                }

                function ni(e) {
                    if ("value" === e.propertyName && Xt(Kt)) {
                        var a = [];
                        if (Qt(a, Kt, e, Ce(e)), e = Gt, Fe) e(a);
                        else {
                            Fe = !0;
                            try {
                                Le(e, a)
                            } finally {
                                Fe = !1, Ae()
                            }
                        }
                    }
                }

                function oi(e, a, t) {
                    "focusin" === e ? (ii(), Kt = t, (Yt = a).attachEvent("onpropertychange", ni)) : "focusout" === e && ii()
                }

                function ri(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Xt(Kt)
                }

                function li(e, a) {
                    if ("click" === e) return Xt(a)
                }

                function si(e, a) {
                    if ("input" === e || "change" === e) return Xt(a)
                }
                var ui = "function" === typeof Object.is ? Object.is : function(e, a) {
                        return e === a && (0 !== e || 1 / e === 1 / a) || e !== e && a !== a
                    },
                    ci = Object.prototype.hasOwnProperty;

                function fi(e, a) {
                    if (ui(e, a)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof a || null === a) return !1;
                    var t = Object.keys(e),
                        i = Object.keys(a);
                    if (t.length !== i.length) return !1;
                    for (i = 0; i < t.length; i++)
                        if (!ci.call(a, t[i]) || !ui(e[t[i]], a[t[i]])) return !1;
                    return !0
                }

                function di(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function pi(e, a) {
                    var t, i = di(e);
                    for (e = 0; i;) {
                        if (3 === i.nodeType) {
                            if (t = e + i.textContent.length, e <= a && t >= a) return {
                                node: i,
                                offset: a - e
                            };
                            e = t
                        }
                        e: {
                            for (; i;) {
                                if (i.nextSibling) {
                                    i = i.nextSibling;
                                    break e
                                }
                                i = i.parentNode
                            }
                            i = void 0
                        }
                        i = di(i)
                    }
                }

                function mi(e, a) {
                    return !(!e || !a) && (e === a || (!e || 3 !== e.nodeType) && (a && 3 === a.nodeType ? mi(e, a.parentNode) : "contains" in e ? e.contains(a) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(a))))
                }

                function gi() {
                    for (var e = window, a = J(); a instanceof e.HTMLIFrameElement;) {
                        try {
                            var t = "string" === typeof a.contentWindow.location.href
                        } catch (i) {
                            t = !1
                        }
                        if (!t) break;
                        a = J((e = a.contentWindow).document)
                    }
                    return a
                }

                function vi(e) {
                    var a = e && e.nodeName && e.nodeName.toLowerCase();
                    return a && ("input" === a && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === a || "true" === e.contentEditable)
                }
                var bi = f && "documentMode" in document && 11 >= document.documentMode,
                    hi = null,
                    yi = null,
                    zi = null,
                    wi = !1;

                function ki(e, a, t) {
                    var i = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
                    wi || null == hi || hi !== J(i) || ("selectionStart" in (i = hi) && vi(i) ? i = {
                        start: i.selectionStart,
                        end: i.selectionEnd
                    } : i = {
                        anchorNode: (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: i.anchorOffset,
                        focusNode: i.focusNode,
                        focusOffset: i.focusOffset
                    }, zi && fi(zi, i) || (zi = i, 0 < (i = Di(yi, "onSelect")).length && (a = new dt("onSelect", "select", null, a, t), e.push({
                        event: a,
                        listeners: i
                    }), a.target = hi)))
                }
                Ra("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Ra("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Ra(Ma, 2);
                for (var xi = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Si = 0; Si < xi.length; Si++) La.set(xi[Si], 0);
                c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Ei = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Ci = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ei));

                function Ti(e, a, t) {
                    var i = e.type || "unknown-event";
                    e.currentTarget = t,
                        function(e, a, t, i, n, o, l, s, u) {
                            if (Ke.apply(this, arguments), We) {
                                if (!We) throw Error(r(198));
                                var c = Be;
                                We = !1, Be = null, $e || ($e = !0, Qe = c)
                            }
                        }(i, a, void 0, e), e.currentTarget = null
                }

                function _i(e, a) {
                    a = 0 !== (4 & a);
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t],
                            n = i.event;
                        i = i.listeners;
                        e: {
                            var o = void 0;
                            if (a)
                                for (var r = i.length - 1; 0 <= r; r--) {
                                    var l = i[r],
                                        s = l.instance,
                                        u = l.currentTarget;
                                    if (l = l.listener, s !== o && n.isPropagationStopped()) break e;
                                    Ti(n, l, u), o = s
                                } else
                                    for (r = 0; r < i.length; r++) {
                                        if (s = (l = i[r]).instance, u = l.currentTarget, l = l.listener, s !== o && n.isPropagationStopped()) break e;
                                        Ti(n, l, u), o = s
                                    }
                        }
                    }
                    if ($e) throw e = Qe, $e = !1, Qe = null, e
                }

                function Ni(e, a) {
                    var t = rn(a),
                        i = e + "__bubble";
                    t.has(i) || (Li(a, e, 2, !1), t.add(i))
                }
                var ji = "_reactListening" + Math.random().toString(36).slice(2);

                function Oi(e) {
                    e[ji] || (e[ji] = !0, l.forEach((function(a) {
                        Ci.has(a) || Pi(a, !1, e, null), Pi(a, !0, e, null)
                    })))
                }

                function Pi(e, a, t, i) {
                    var n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                        o = t;
                    if ("selectionchange" === e && 9 !== t.nodeType && (o = t.ownerDocument), null !== i && !a && Ci.has(e)) {
                        if ("scroll" !== e) return;
                        n |= 2, o = i
                    }
                    var r = rn(o),
                        l = e + "__" + (a ? "capture" : "bubble");
                    r.has(l) || (a && (n |= 4), Li(o, e, n, a), r.add(l))
                }

                function Li(e, a, t, i) {
                    var n = La.get(a);
                    switch (void 0 === n ? 2 : n) {
                        case 0:
                            n = Ga;
                            break;
                        case 1:
                            n = Xa;
                            break;
                        default:
                            n = Ja
                    }
                    t = n.bind(null, a, t, e), n = void 0, !He || "touchstart" !== a && "touchmove" !== a && "wheel" !== a || (n = !0), i ? void 0 !== n ? e.addEventListener(a, t, {
                        capture: !0,
                        passive: n
                    }) : e.addEventListener(a, t, !0) : void 0 !== n ? e.addEventListener(a, t, {
                        passive: n
                    }) : e.addEventListener(a, t, !1)
                }

                function Mi(e, a, t, i, n) {
                    var o = i;
                    if (0 === (1 & a) && 0 === (2 & a) && null !== i) e: for (;;) {
                        if (null === i) return;
                        var r = i.tag;
                        if (3 === r || 4 === r) {
                            var l = i.stateNode.containerInfo;
                            if (l === n || 8 === l.nodeType && l.parentNode === n) break;
                            if (4 === r)
                                for (r = i.return; null !== r;) {
                                    var s = r.tag;
                                    if ((3 === s || 4 === s) && ((s = r.stateNode.containerInfo) === n || 8 === s.nodeType && s.parentNode === n)) return;
                                    r = r.return
                                }
                            for (; null !== l;) {
                                if (null === (r = an(l))) return;
                                if (5 === (s = r.tag) || 6 === s) {
                                    i = o = r;
                                    continue e
                                }
                                l = l.parentNode
                            }
                        }
                        i = i.return
                    }! function(e, a, t) {
                        if (Ie) return e(a, t);
                        Ie = !0;
                        try {
                            De(e, a, t)
                        } finally {
                            Ie = !1, Ae()
                        }
                    }((function() {
                        var i = o,
                            n = Ce(t),
                            r = [];
                        e: {
                            var l = Pa.get(e);
                            if (void 0 !== l) {
                                var s = dt,
                                    u = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === nt(t)) break e;
                                    case "keydown":
                                    case "keyup":
                                        s = Nt;
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
                                        s = Ot;
                                        break;
                                    case _a:
                                    case Na:
                                    case ja:
                                        s = yt;
                                        break;
                                    case Oa:
                                        s = Pt;
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
                                        s = wt;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        s = jt
                                }
                                var c = 0 !== (4 & a),
                                    f = !c && "scroll" === e,
                                    d = c ? null !== l ? l + "Capture" : null : l;
                                c = [];
                                for (var p, m = i; null !== m;) {
                                    var g = (p = m).stateNode;
                                    if (5 === p.tag && null !== g && (p = g, null !== d && (null != (g = Ue(m, d)) && c.push(Ri(m, g, p)))), f) break;
                                    m = m.return
                                }
                                0 < c.length && (l = new s(l, u, null, t, n), r.push({
                                    event: l,
                                    listeners: c
                                }))
                            }
                        }
                        if (0 === (7 & a)) {
                            if (s = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || 0 !== (16 & a) || !(u = t.relatedTarget || t.fromElement) || !an(u) && !u[Zi]) && (s || l) && (l = n.window === n ? n : (l = n.ownerDocument) ? l.defaultView || l.parentWindow : window, s ? (s = i, null !== (u = (u = t.relatedTarget || t.toElement) ? an(u) : null) && (u !== (f = Ge(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (s = null, u = i), s !== u)) {
                                if (c = vt, g = "onMouseLeave", d = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (c = jt, g = "onPointerLeave", d = "onPointerEnter", m = "pointer"), f = null == s ? l : nn(s), p = null == u ? l : nn(u), (l = new c(g, m + "leave", s, t, n)).target = f, l.relatedTarget = p, g = null, an(n) === i && ((c = new c(d, m + "enter", u, t, n)).target = p, c.relatedTarget = f, g = c), f = g, s && u) e: {
                                    for (d = u, m = 0, p = c = s; p; p = Fi(p)) m++;
                                    for (p = 0, g = d; g; g = Fi(g)) p++;
                                    for (; 0 < m - p;) c = Fi(c),
                                    m--;
                                    for (; 0 < p - m;) d = Fi(d),
                                    p--;
                                    for (; m--;) {
                                        if (c === d || null !== d && c === d.alternate) break e;
                                        c = Fi(c), d = Fi(d)
                                    }
                                    c = null
                                }
                                else c = null;
                                null !== s && Ii(r, l, s, c, !1), null !== u && null !== f && Ii(r, f, u, c, !0)
                            }
                            if ("select" === (s = (l = i ? nn(i) : window).nodeName && l.nodeName.toLowerCase()) || "input" === s && "file" === l.type) var v = Jt;
                            else if ($t(l))
                                if (Zt) v = si;
                                else {
                                    v = ri;
                                    var b = oi
                                }
                            else(s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (v = li);
                            switch (v && (v = v(e, i)) ? Qt(r, v, t, n) : (b && b(e, l, i), "focusout" === e && (b = l._wrapperState) && b.controlled && "number" === l.type && ne(l, "number", l.value)), b = i ? nn(i) : window, e) {
                                case "focusin":
                                    ($t(b) || "true" === b.contentEditable) && (hi = b, yi = i, zi = null);
                                    break;
                                case "focusout":
                                    zi = yi = hi = null;
                                    break;
                                case "mousedown":
                                    wi = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    wi = !1, ki(r, t, n);
                                    break;
                                case "selectionchange":
                                    if (bi) break;
                                case "keydown":
                                case "keyup":
                                    ki(r, t, n)
                            }
                            var h;
                            if (Dt) e: {
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
                            else Wt ? qt(e, t) && (y = "onCompositionEnd") : "keydown" === e && 229 === t.keyCode && (y = "onCompositionStart");
                            y && (At && "ko" !== t.locale && (Wt || "onCompositionStart" !== y ? "onCompositionEnd" === y && Wt && (h = it()) : (at = "value" in (et = n) ? et.value : et.textContent, Wt = !0)), 0 < (b = Di(i, y)).length && (y = new kt(y, e, null, t, n), r.push({
                                event: y,
                                listeners: b
                            }), h ? y.data = h : null !== (h = Vt(t)) && (y.data = h))), (h = It ? function(e, a) {
                                switch (e) {
                                    case "compositionend":
                                        return Vt(a);
                                    case "keypress":
                                        return 32 !== a.which ? null : (Ht = !0, Ut);
                                    case "textInput":
                                        return (e = a.data) === Ut && Ht ? null : e;
                                    default:
                                        return null
                                }
                            }(e, t) : function(e, a) {
                                if (Wt) return "compositionend" === e || !Dt && qt(e, a) ? (e = it(), tt = at = et = null, Wt = !1, e) : null;
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
                                        return At && "ko" !== a.locale ? null : a.data
                                }
                            }(e, t)) && (0 < (i = Di(i, "onBeforeInput")).length && (n = new kt("onBeforeInput", "beforeinput", null, t, n), r.push({
                                event: n,
                                listeners: i
                            }), n.data = h))
                        }
                        _i(r, a)
                    }))
                }

                function Ri(e, a, t) {
                    return {
                        instance: e,
                        listener: a,
                        currentTarget: t
                    }
                }

                function Di(e, a) {
                    for (var t = a + "Capture", i = []; null !== e;) {
                        var n = e,
                            o = n.stateNode;
                        5 === n.tag && null !== o && (n = o, null != (o = Ue(e, t)) && i.unshift(Ri(e, o, n)), null != (o = Ue(e, a)) && i.push(Ri(e, o, n))), e = e.return
                    }
                    return i
                }

                function Fi(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function Ii(e, a, t, i, n) {
                    for (var o = a._reactName, r = []; null !== t && t !== i;) {
                        var l = t,
                            s = l.alternate,
                            u = l.stateNode;
                        if (null !== s && s === i) break;
                        5 === l.tag && null !== u && (l = u, n ? null != (s = Ue(t, o)) && r.unshift(Ri(t, s, l)) : n || null != (s = Ue(t, o)) && r.push(Ri(t, s, l))), t = t.return
                    }
                    0 !== r.length && e.push({
                        event: a,
                        listeners: r
                    })
                }

                function Ai() {}
                var Ui = null,
                    Hi = null;

                function qi(e, a) {
                    switch (e) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            return !!a.autoFocus
                    }
                    return !1
                }

                function Vi(e, a) {
                    return "textarea" === e || "option" === e || "noscript" === e || "string" === typeof a.children || "number" === typeof a.children || "object" === typeof a.dangerouslySetInnerHTML && null !== a.dangerouslySetInnerHTML && null != a.dangerouslySetInnerHTML.__html
                }
                var Wi = "function" === typeof setTimeout ? setTimeout : void 0,
                    Bi = "function" === typeof clearTimeout ? clearTimeout : void 0;

                function $i(e) {
                    1 === e.nodeType ? e.textContent = "" : 9 === e.nodeType && (null != (e = e.body) && (e.textContent = ""))
                }

                function Qi(e) {
                    for (; null != e; e = e.nextSibling) {
                        var a = e.nodeType;
                        if (1 === a || 3 === a) break
                    }
                    return e
                }

                function Yi(e) {
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
                var Ki = 0;
                var Gi = Math.random().toString(36).slice(2),
                    Xi = "__reactFiber$" + Gi,
                    Ji = "__reactProps$" + Gi,
                    Zi = "__reactContainer$" + Gi,
                    en = "__reactEvents$" + Gi;

                function an(e) {
                    var a = e[Xi];
                    if (a) return a;
                    for (var t = e.parentNode; t;) {
                        if (a = t[Zi] || t[Xi]) {
                            if (t = a.alternate, null !== a.child || null !== t && null !== t.child)
                                for (e = Yi(e); null !== e;) {
                                    if (t = e[Xi]) return t;
                                    e = Yi(e)
                                }
                            return a
                        }
                        t = (e = t).parentNode
                    }
                    return null
                }

                function tn(e) {
                    return !(e = e[Xi] || e[Zi]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function nn(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(r(33))
                }

                function on(e) {
                    return e[Ji] || null
                }

                function rn(e) {
                    var a = e[en];
                    return void 0 === a && (a = e[en] = new Set), a
                }
                var ln = [],
                    sn = -1;

                function un(e) {
                    return {
                        current: e
                    }
                }

                function cn(e) {
                    0 > sn || (e.current = ln[sn], ln[sn] = null, sn--)
                }

                function fn(e, a) {
                    sn++, ln[sn] = e.current, e.current = a
                }
                var dn = {},
                    pn = un(dn),
                    mn = un(!1),
                    gn = dn;

                function vn(e, a) {
                    var t = e.type.contextTypes;
                    if (!t) return dn;
                    var i = e.stateNode;
                    if (i && i.__reactInternalMemoizedUnmaskedChildContext === a) return i.__reactInternalMemoizedMaskedChildContext;
                    var n, o = {};
                    for (n in t) o[n] = a[n];
                    return i && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), o
                }

                function bn(e) {
                    return null !== (e = e.childContextTypes) && void 0 !== e
                }

                function hn() {
                    cn(mn), cn(pn)
                }

                function yn(e, a, t) {
                    if (pn.current !== dn) throw Error(r(168));
                    fn(pn, a), fn(mn, t)
                }

                function zn(e, a, t) {
                    var i = e.stateNode;
                    if (e = a.childContextTypes, "function" !== typeof i.getChildContext) return t;
                    for (var o in i = i.getChildContext())
                        if (!(o in e)) throw Error(r(108, Q(a) || "Unknown", o));
                    return n({}, t, i)
                }

                function wn(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dn, gn = pn.current, fn(pn, e), fn(mn, mn.current), !0
                }

                function kn(e, a, t) {
                    var i = e.stateNode;
                    if (!i) throw Error(r(169));
                    t ? (e = zn(e, a, gn), i.__reactInternalMemoizedMergedChildContext = e, cn(mn), cn(pn), fn(pn, e)) : cn(mn), fn(mn, t)
                }
                var xn = null,
                    Sn = null,
                    En = o.unstable_runWithPriority,
                    Cn = o.unstable_scheduleCallback,
                    Tn = o.unstable_cancelCallback,
                    _n = o.unstable_shouldYield,
                    Nn = o.unstable_requestPaint,
                    jn = o.unstable_now,
                    On = o.unstable_getCurrentPriorityLevel,
                    Pn = o.unstable_ImmediatePriority,
                    Ln = o.unstable_UserBlockingPriority,
                    Mn = o.unstable_NormalPriority,
                    Rn = o.unstable_LowPriority,
                    Dn = o.unstable_IdlePriority,
                    Fn = {},
                    In = void 0 !== Nn ? Nn : function() {},
                    An = null,
                    Un = null,
                    Hn = !1,
                    qn = jn(),
                    Vn = 1e4 > qn ? jn : function() {
                        return jn() - qn
                    };

                function Wn() {
                    switch (On()) {
                        case Pn:
                            return 99;
                        case Ln:
                            return 98;
                        case Mn:
                            return 97;
                        case Rn:
                            return 96;
                        case Dn:
                            return 95;
                        default:
                            throw Error(r(332))
                    }
                }

                function Bn(e) {
                    switch (e) {
                        case 99:
                            return Pn;
                        case 98:
                            return Ln;
                        case 97:
                            return Mn;
                        case 96:
                            return Rn;
                        case 95:
                            return Dn;
                        default:
                            throw Error(r(332))
                    }
                }

                function $n(e, a) {
                    return e = Bn(e), En(e, a)
                }

                function Qn(e, a, t) {
                    return e = Bn(e), Cn(e, a, t)
                }

                function Yn() {
                    if (null !== Un) {
                        var e = Un;
                        Un = null, Tn(e)
                    }
                    Kn()
                }

                function Kn() {
                    if (!Hn && null !== An) {
                        Hn = !0;
                        var e = 0;
                        try {
                            var a = An;
                            $n(99, (function() {
                                for (; e < a.length; e++) {
                                    var t = a[e];
                                    do {
                                        t = t(!0)
                                    } while (null !== t)
                                }
                            })), An = null
                        } catch (t) {
                            throw null !== An && (An = An.slice(e + 1)), Cn(Pn, Yn), t
                        } finally {
                            Hn = !1
                        }
                    }
                }
                var Gn = w.ReactCurrentBatchConfig;

                function Xn(e, a) {
                    if (e && e.defaultProps) {
                        for (var t in a = n({}, a), e = e.defaultProps) void 0 === a[t] && (a[t] = e[t]);
                        return a
                    }
                    return a
                }
                var Jn = un(null),
                    Zn = null,
                    eo = null,
                    ao = null;

                function to() {
                    ao = eo = Zn = null
                }

                function io(e) {
                    var a = Jn.current;
                    cn(Jn), e.type._context._currentValue = a
                }

                function no(e, a) {
                    for (; null !== e;) {
                        var t = e.alternate;
                        if ((e.childLanes & a) === a) {
                            if (null === t || (t.childLanes & a) === a) break;
                            t.childLanes |= a
                        } else e.childLanes |= a, null !== t && (t.childLanes |= a);
                        e = e.return
                    }
                }

                function oo(e, a) {
                    Zn = e, ao = eo = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & a) && (Fr = !0), e.firstContext = null)
                }

                function ro(e, a) {
                    if (ao !== e && !1 !== a && 0 !== a)
                        if ("number" === typeof a && 1073741823 !== a || (ao = e, a = 1073741823), a = {
                                context: e,
                                observedBits: a,
                                next: null
                            }, null === eo) {
                            if (null === Zn) throw Error(r(308));
                            eo = a, Zn.dependencies = {
                                lanes: 0,
                                firstContext: a,
                                responders: null
                            }
                        } else eo = eo.next = a;
                    return e._currentValue
                }
                var lo = !1;

                function so(e) {
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

                function uo(e, a) {
                    e = e.updateQueue, a.updateQueue === e && (a.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function co(e, a) {
                    return {
                        eventTime: e,
                        lane: a,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function fo(e, a) {
                    if (null !== (e = e.updateQueue)) {
                        var t = (e = e.shared).pending;
                        null === t ? a.next = a : (a.next = t.next, t.next = a), e.pending = a
                    }
                }

                function po(e, a) {
                    var t = e.updateQueue,
                        i = e.alternate;
                    if (null !== i && t === (i = i.updateQueue)) {
                        var n = null,
                            o = null;
                        if (null !== (t = t.firstBaseUpdate)) {
                            do {
                                var r = {
                                    eventTime: t.eventTime,
                                    lane: t.lane,
                                    tag: t.tag,
                                    payload: t.payload,
                                    callback: t.callback,
                                    next: null
                                };
                                null === o ? n = o = r : o = o.next = r, t = t.next
                            } while (null !== t);
                            null === o ? n = o = a : o = o.next = a
                        } else n = o = a;
                        return t = {
                            baseState: i.baseState,
                            firstBaseUpdate: n,
                            lastBaseUpdate: o,
                            shared: i.shared,
                            effects: i.effects
                        }, void(e.updateQueue = t)
                    }
                    null === (e = t.lastBaseUpdate) ? t.firstBaseUpdate = a : e.next = a, t.lastBaseUpdate = a
                }

                function mo(e, a, t, i) {
                    var o = e.updateQueue;
                    lo = !1;
                    var r = o.firstBaseUpdate,
                        l = o.lastBaseUpdate,
                        s = o.shared.pending;
                    if (null !== s) {
                        o.shared.pending = null;
                        var u = s,
                            c = u.next;
                        u.next = null, null === l ? r = c : l.next = c, l = u;
                        var f = e.alternate;
                        if (null !== f) {
                            var d = (f = f.updateQueue).lastBaseUpdate;
                            d !== l && (null === d ? f.firstBaseUpdate = c : d.next = c, f.lastBaseUpdate = u)
                        }
                    }
                    if (null !== r) {
                        for (d = o.baseState, l = 0, f = c = u = null;;) {
                            s = r.lane;
                            var p = r.eventTime;
                            if ((i & s) === s) {
                                null !== f && (f = f.next = {
                                    eventTime: p,
                                    lane: 0,
                                    tag: r.tag,
                                    payload: r.payload,
                                    callback: r.callback,
                                    next: null
                                });
                                e: {
                                    var m = e,
                                        g = r;
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
                                            d = n({}, d, s);
                                            break e;
                                        case 2:
                                            lo = !0
                                    }
                                }
                                null !== r.callback && (e.flags |= 32, null === (s = o.effects) ? o.effects = [r] : s.push(r))
                            } else p = {
                                eventTime: p,
                                lane: s,
                                tag: r.tag,
                                payload: r.payload,
                                callback: r.callback,
                                next: null
                            }, null === f ? (c = f = p, u = d) : f = f.next = p, l |= s;
                            if (null === (r = r.next)) {
                                if (null === (s = o.shared.pending)) break;
                                r = s.next, s.next = null, o.lastBaseUpdate = s, o.shared.pending = null
                            }
                        }
                        null === f && (u = d), o.baseState = u, o.firstBaseUpdate = c, o.lastBaseUpdate = f, Hl |= l, e.lanes = l, e.memoizedState = d
                    }
                }

                function go(e, a, t) {
                    if (e = a.effects, a.effects = null, null !== e)
                        for (a = 0; a < e.length; a++) {
                            var i = e[a],
                                n = i.callback;
                            if (null !== n) {
                                if (i.callback = null, i = t, "function" !== typeof n) throw Error(r(191, n));
                                n.call(i)
                            }
                        }
                }
                var vo = (new i.Component).refs;

                function bo(e, a, t, i) {
                    t = null === (t = t(i, a = e.memoizedState)) || void 0 === t ? a : n({}, a, t), e.memoizedState = t, 0 === e.lanes && (e.updateQueue.baseState = t)
                }
                var ho = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && Ge(e) === e
                    },
                    enqueueSetState: function(e, a, t) {
                        e = e._reactInternals;
                        var i = ds(),
                            n = ps(e),
                            o = co(i, n);
                        o.payload = a, void 0 !== t && null !== t && (o.callback = t), fo(e, o), ms(e, n, i)
                    },
                    enqueueReplaceState: function(e, a, t) {
                        e = e._reactInternals;
                        var i = ds(),
                            n = ps(e),
                            o = co(i, n);
                        o.tag = 1, o.payload = a, void 0 !== t && null !== t && (o.callback = t), fo(e, o), ms(e, n, i)
                    },
                    enqueueForceUpdate: function(e, a) {
                        e = e._reactInternals;
                        var t = ds(),
                            i = ps(e),
                            n = co(t, i);
                        n.tag = 2, void 0 !== a && null !== a && (n.callback = a), fo(e, n), ms(e, i, t)
                    }
                };

                function yo(e, a, t, i, n, o, r) {
                    return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(i, o, r) : !a.prototype || !a.prototype.isPureReactComponent || (!fi(t, i) || !fi(n, o))
                }

                function zo(e, a, t) {
                    var i = !1,
                        n = dn,
                        o = a.contextType;
                    return "object" === typeof o && null !== o ? o = ro(o) : (n = bn(a) ? gn : pn.current, o = (i = null !== (i = a.contextTypes) && void 0 !== i) ? vn(e, n) : dn), a = new a(t, o), e.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, a.updater = ho, e.stateNode = a, a._reactInternals = e, i && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = o), a
                }

                function wo(e, a, t, i) {
                    e = a.state, "function" === typeof a.componentWillReceiveProps && a.componentWillReceiveProps(t, i), "function" === typeof a.UNSAFE_componentWillReceiveProps && a.UNSAFE_componentWillReceiveProps(t, i), a.state !== e && ho.enqueueReplaceState(a, a.state, null)
                }

                function ko(e, a, t, i) {
                    var n = e.stateNode;
                    n.props = t, n.state = e.memoizedState, n.refs = vo, so(e);
                    var o = a.contextType;
                    "object" === typeof o && null !== o ? n.context = ro(o) : (o = bn(a) ? gn : pn.current, n.context = vn(e, o)), mo(e, t, n, i), n.state = e.memoizedState, "function" === typeof(o = a.getDerivedStateFromProps) && (bo(e, a, o, t), n.state = e.memoizedState), "function" === typeof a.getDerivedStateFromProps || "function" === typeof n.getSnapshotBeforeUpdate || "function" !== typeof n.UNSAFE_componentWillMount && "function" !== typeof n.componentWillMount || (a = n.state, "function" === typeof n.componentWillMount && n.componentWillMount(), "function" === typeof n.UNSAFE_componentWillMount && n.UNSAFE_componentWillMount(), a !== n.state && ho.enqueueReplaceState(n, n.state, null), mo(e, t, n, i), n.state = e.memoizedState), "function" === typeof n.componentDidMount && (e.flags |= 4)
                }
                var xo = Array.isArray;

                function So(e, a, t) {
                    if (null !== (e = t.ref) && "function" !== typeof e && "object" !== typeof e) {
                        if (t._owner) {
                            if (t = t._owner) {
                                if (1 !== t.tag) throw Error(r(309));
                                var i = t.stateNode
                            }
                            if (!i) throw Error(r(147, e));
                            var n = "" + e;
                            return null !== a && null !== a.ref && "function" === typeof a.ref && a.ref._stringRef === n ? a.ref : (a = function(e) {
                                var a = i.refs;
                                a === vo && (a = i.refs = {}), null === e ? delete a[n] : a[n] = e
                            }, a._stringRef = n, a)
                        }
                        if ("string" !== typeof e) throw Error(r(284));
                        if (!t._owner) throw Error(r(290, e))
                    }
                    return e
                }

                function Eo(e, a) {
                    if ("textarea" !== e.type) throw Error(r(31, "[object Object]" === Object.prototype.toString.call(a) ? "object with keys {" + Object.keys(a).join(", ") + "}" : a))
                }

                function Co(e) {
                    function a(a, t) {
                        if (e) {
                            var i = a.lastEffect;
                            null !== i ? (i.nextEffect = t, a.lastEffect = t) : a.firstEffect = a.lastEffect = t, t.nextEffect = null, t.flags = 8
                        }
                    }

                    function t(t, i) {
                        if (!e) return null;
                        for (; null !== i;) a(t, i), i = i.sibling;
                        return null
                    }

                    function i(e, a) {
                        for (e = new Map; null !== a;) null !== a.key ? e.set(a.key, a) : e.set(a.index, a), a = a.sibling;
                        return e
                    }

                    function n(e, a) {
                        return (e = $s(e, a)).index = 0, e.sibling = null, e
                    }

                    function o(a, t, i) {
                        return a.index = i, e ? null !== (i = a.alternate) ? (i = i.index) < t ? (a.flags = 2, t) : i : (a.flags = 2, t) : t
                    }

                    function l(a) {
                        return e && null === a.alternate && (a.flags = 2), a
                    }

                    function s(e, a, t, i) {
                        return null === a || 6 !== a.tag ? ((a = Gs(t, e.mode, i)).return = e, a) : ((a = n(a, t)).return = e, a)
                    }

                    function u(e, a, t, i) {
                        return null !== a && a.elementType === t.type ? ((i = n(a, t.props)).ref = So(e, a, t), i.return = e, i) : ((i = Qs(t.type, t.key, t.props, null, e.mode, i)).ref = So(e, a, t), i.return = e, i)
                    }

                    function c(e, a, t, i) {
                        return null === a || 4 !== a.tag || a.stateNode.containerInfo !== t.containerInfo || a.stateNode.implementation !== t.implementation ? ((a = Xs(t, e.mode, i)).return = e, a) : ((a = n(a, t.children || [])).return = e, a)
                    }

                    function f(e, a, t, i, o) {
                        return null === a || 7 !== a.tag ? ((a = Ys(t, e.mode, i, o)).return = e, a) : ((a = n(a, t)).return = e, a)
                    }

                    function d(e, a, t) {
                        if ("string" === typeof a || "number" === typeof a) return (a = Gs("" + a, e.mode, t)).return = e, a;
                        if ("object" === typeof a && null !== a) {
                            switch (a.$$typeof) {
                                case k:
                                    return (t = Qs(a.type, a.key, a.props, null, e.mode, t)).ref = So(e, null, a), t.return = e, t;
                                case x:
                                    return (a = Xs(a, e.mode, t)).return = e, a
                            }
                            if (xo(a) || q(a)) return (a = Ys(a, e.mode, t, null)).return = e, a;
                            Eo(e, a)
                        }
                        return null
                    }

                    function p(e, a, t, i) {
                        var n = null !== a ? a.key : null;
                        if ("string" === typeof t || "number" === typeof t) return null !== n ? null : s(e, a, "" + t, i);
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case k:
                                    return t.key === n ? t.type === S ? f(e, a, t.props.children, i, n) : u(e, a, t, i) : null;
                                case x:
                                    return t.key === n ? c(e, a, t, i) : null
                            }
                            if (xo(t) || q(t)) return null !== n ? null : f(e, a, t, i, null);
                            Eo(e, t)
                        }
                        return null
                    }

                    function m(e, a, t, i, n) {
                        if ("string" === typeof i || "number" === typeof i) return s(a, e = e.get(t) || null, "" + i, n);
                        if ("object" === typeof i && null !== i) {
                            switch (i.$$typeof) {
                                case k:
                                    return e = e.get(null === i.key ? t : i.key) || null, i.type === S ? f(a, e, i.props.children, n, i.key) : u(a, e, i, n);
                                case x:
                                    return c(a, e = e.get(null === i.key ? t : i.key) || null, i, n)
                            }
                            if (xo(i) || q(i)) return f(a, e = e.get(t) || null, i, n, null);
                            Eo(a, i)
                        }
                        return null
                    }

                    function g(n, r, l, s) {
                        for (var u = null, c = null, f = r, g = r = 0, v = null; null !== f && g < l.length; g++) {
                            f.index > g ? (v = f, f = null) : v = f.sibling;
                            var b = p(n, f, l[g], s);
                            if (null === b) {
                                null === f && (f = v);
                                break
                            }
                            e && f && null === b.alternate && a(n, f), r = o(b, r, g), null === c ? u = b : c.sibling = b, c = b, f = v
                        }
                        if (g === l.length) return t(n, f), u;
                        if (null === f) {
                            for (; g < l.length; g++) null !== (f = d(n, l[g], s)) && (r = o(f, r, g), null === c ? u = f : c.sibling = f, c = f);
                            return u
                        }
                        for (f = i(n, f); g < l.length; g++) null !== (v = m(f, n, g, l[g], s)) && (e && null !== v.alternate && f.delete(null === v.key ? g : v.key), r = o(v, r, g), null === c ? u = v : c.sibling = v, c = v);
                        return e && f.forEach((function(e) {
                            return a(n, e)
                        })), u
                    }

                    function v(n, l, s, u) {
                        var c = q(s);
                        if ("function" !== typeof c) throw Error(r(150));
                        if (null == (s = c.call(s))) throw Error(r(151));
                        for (var f = c = null, g = l, v = l = 0, b = null, h = s.next(); null !== g && !h.done; v++, h = s.next()) {
                            g.index > v ? (b = g, g = null) : b = g.sibling;
                            var y = p(n, g, h.value, u);
                            if (null === y) {
                                null === g && (g = b);
                                break
                            }
                            e && g && null === y.alternate && a(n, g), l = o(y, l, v), null === f ? c = y : f.sibling = y, f = y, g = b
                        }
                        if (h.done) return t(n, g), c;
                        if (null === g) {
                            for (; !h.done; v++, h = s.next()) null !== (h = d(n, h.value, u)) && (l = o(h, l, v), null === f ? c = h : f.sibling = h, f = h);
                            return c
                        }
                        for (g = i(n, g); !h.done; v++, h = s.next()) null !== (h = m(g, n, v, h.value, u)) && (e && null !== h.alternate && g.delete(null === h.key ? v : h.key), l = o(h, l, v), null === f ? c = h : f.sibling = h, f = h);
                        return e && g.forEach((function(e) {
                            return a(n, e)
                        })), c
                    }
                    return function(e, i, o, s) {
                        var u = "object" === typeof o && null !== o && o.type === S && null === o.key;
                        u && (o = o.props.children);
                        var c = "object" === typeof o && null !== o;
                        if (c) switch (o.$$typeof) {
                            case k:
                                e: {
                                    for (c = o.key, u = i; null !== u;) {
                                        if (u.key === c) {
                                            if (7 === u.tag) {
                                                if (o.type === S) {
                                                    t(e, u.sibling), (i = n(u, o.props.children)).return = e, e = i;
                                                    break e
                                                }
                                            } else if (u.elementType === o.type) {
                                                t(e, u.sibling), (i = n(u, o.props)).ref = So(e, u, o), i.return = e, e = i;
                                                break e
                                            }
                                            t(e, u);
                                            break
                                        }
                                        a(e, u), u = u.sibling
                                    }
                                    o.type === S ? ((i = Ys(o.props.children, e.mode, s, o.key)).return = e, e = i) : ((s = Qs(o.type, o.key, o.props, null, e.mode, s)).ref = So(e, i, o), s.return = e, e = s)
                                }
                                return l(e);
                            case x:
                                e: {
                                    for (u = o.key; null !== i;) {
                                        if (i.key === u) {
                                            if (4 === i.tag && i.stateNode.containerInfo === o.containerInfo && i.stateNode.implementation === o.implementation) {
                                                t(e, i.sibling), (i = n(i, o.children || [])).return = e, e = i;
                                                break e
                                            }
                                            t(e, i);
                                            break
                                        }
                                        a(e, i), i = i.sibling
                                    }(i = Xs(o, e.mode, s)).return = e,
                                    e = i
                                }
                                return l(e)
                        }
                        if ("string" === typeof o || "number" === typeof o) return o = "" + o, null !== i && 6 === i.tag ? (t(e, i.sibling), (i = n(i, o)).return = e, e = i) : (t(e, i), (i = Gs(o, e.mode, s)).return = e, e = i), l(e);
                        if (xo(o)) return g(e, i, o, s);
                        if (q(o)) return v(e, i, o, s);
                        if (c && Eo(e, o), "undefined" === typeof o && !u) switch (e.tag) {
                            case 1:
                            case 22:
                            case 0:
                            case 11:
                            case 15:
                                throw Error(r(152, Q(e.type) || "Component"))
                        }
                        return t(e, i)
                    }
                }
                var To = Co(!0),
                    _o = Co(!1),
                    No = {},
                    jo = un(No),
                    Oo = un(No),
                    Po = un(No);

                function Lo(e) {
                    if (e === No) throw Error(r(174));
                    return e
                }

                function Mo(e, a) {
                    switch (fn(Po, a), fn(Oo, e), fn(jo, No), e = a.nodeType) {
                        case 9:
                        case 11:
                            a = (a = a.documentElement) ? a.namespaceURI : me(null, "");
                            break;
                        default:
                            a = me(a = (e = 8 === e ? a.parentNode : a).namespaceURI || null, e = e.tagName)
                    }
                    cn(jo), fn(jo, a)
                }

                function Ro() {
                    cn(jo), cn(Oo), cn(Po)
                }

                function Do(e) {
                    Lo(Po.current);
                    var a = Lo(jo.current),
                        t = me(a, e.type);
                    a !== t && (fn(Oo, e), fn(jo, t))
                }

                function Fo(e) {
                    Oo.current === e && (cn(jo), cn(Oo))
                }
                var Io = un(0);

                function Ao(e) {
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
                var Uo = null,
                    Ho = null,
                    qo = !1;

                function Vo(e, a) {
                    var t = Ws(5, null, null, 0);
                    t.elementType = "DELETED", t.type = "DELETED", t.stateNode = a, t.return = e, t.flags = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = t, e.lastEffect = t) : e.firstEffect = e.lastEffect = t
                }

                function Wo(e, a) {
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

                function Bo(e) {
                    if (qo) {
                        var a = Ho;
                        if (a) {
                            var t = a;
                            if (!Wo(e, a)) {
                                if (!(a = Qi(t.nextSibling)) || !Wo(e, a)) return e.flags = -1025 & e.flags | 2, qo = !1, void(Uo = e);
                                Vo(Uo, t)
                            }
                            Uo = e, Ho = Qi(a.firstChild)
                        } else e.flags = -1025 & e.flags | 2, qo = !1, Uo = e
                    }
                }

                function $o(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    Uo = e
                }

                function Qo(e) {
                    if (e !== Uo) return !1;
                    if (!qo) return $o(e), qo = !0, !1;
                    var a = e.type;
                    if (5 !== e.tag || "head" !== a && "body" !== a && !Vi(a, e.memoizedProps))
                        for (a = Ho; a;) Vo(e, a), a = Qi(a.nextSibling);
                    if ($o(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(r(317));
                        e: {
                            for (e = e.nextSibling, a = 0; e;) {
                                if (8 === e.nodeType) {
                                    var t = e.data;
                                    if ("/$" === t) {
                                        if (0 === a) {
                                            Ho = Qi(e.nextSibling);
                                            break e
                                        }
                                        a--
                                    } else "$" !== t && "$!" !== t && "$?" !== t || a++
                                }
                                e = e.nextSibling
                            }
                            Ho = null
                        }
                    } else Ho = Uo ? Qi(e.stateNode.nextSibling) : null;
                    return !0
                }

                function Yo() {
                    Ho = Uo = null, qo = !1
                }
                var Ko = [];

                function Go() {
                    for (var e = 0; e < Ko.length; e++) Ko[e]._workInProgressVersionPrimary = null;
                    Ko.length = 0
                }
                var Xo = w.ReactCurrentDispatcher,
                    Jo = w.ReactCurrentBatchConfig,
                    Zo = 0,
                    er = null,
                    ar = null,
                    tr = null,
                    ir = !1,
                    nr = !1;

                function or() {
                    throw Error(r(321))
                }

                function rr(e, a) {
                    if (null === a) return !1;
                    for (var t = 0; t < a.length && t < e.length; t++)
                        if (!ui(e[t], a[t])) return !1;
                    return !0
                }

                function lr(e, a, t, i, n, o) {
                    if (Zo = o, er = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, Xo.current = null === e || null === e.memoizedState ? Lr : Mr, e = t(i, n), nr) {
                        o = 0;
                        do {
                            if (nr = !1, !(25 > o)) throw Error(r(301));
                            o += 1, tr = ar = null, a.updateQueue = null, Xo.current = Rr, e = t(i, n)
                        } while (nr)
                    }
                    if (Xo.current = Pr, a = null !== ar && null !== ar.next, Zo = 0, tr = ar = er = null, ir = !1, a) throw Error(r(300));
                    return e
                }

                function sr() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === tr ? er.memoizedState = tr = e : tr = tr.next = e, tr
                }

                function ur() {
                    if (null === ar) {
                        var e = er.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = ar.next;
                    var a = null === tr ? er.memoizedState : tr.next;
                    if (null !== a) tr = a, ar = e;
                    else {
                        if (null === e) throw Error(r(310));
                        e = {
                            memoizedState: (ar = e).memoizedState,
                            baseState: ar.baseState,
                            baseQueue: ar.baseQueue,
                            queue: ar.queue,
                            next: null
                        }, null === tr ? er.memoizedState = tr = e : tr = tr.next = e
                    }
                    return tr
                }

                function cr(e, a) {
                    return "function" === typeof a ? a(e) : a
                }

                function fr(e) {
                    var a = ur(),
                        t = a.queue;
                    if (null === t) throw Error(r(311));
                    t.lastRenderedReducer = e;
                    var i = ar,
                        n = i.baseQueue,
                        o = t.pending;
                    if (null !== o) {
                        if (null !== n) {
                            var l = n.next;
                            n.next = o.next, o.next = l
                        }
                        i.baseQueue = n = o, t.pending = null
                    }
                    if (null !== n) {
                        n = n.next, i = i.baseState;
                        var s = l = o = null,
                            u = n;
                        do {
                            var c = u.lane;
                            if ((Zo & c) === c) null !== s && (s = s.next = {
                                lane: 0,
                                action: u.action,
                                eagerReducer: u.eagerReducer,
                                eagerState: u.eagerState,
                                next: null
                            }), i = u.eagerReducer === e ? u.eagerState : e(i, u.action);
                            else {
                                var f = {
                                    lane: c,
                                    action: u.action,
                                    eagerReducer: u.eagerReducer,
                                    eagerState: u.eagerState,
                                    next: null
                                };
                                null === s ? (l = s = f, o = i) : s = s.next = f, er.lanes |= c, Hl |= c
                            }
                            u = u.next
                        } while (null !== u && u !== n);
                        null === s ? o = i : s.next = l, ui(i, a.memoizedState) || (Fr = !0), a.memoizedState = i, a.baseState = o, a.baseQueue = s, t.lastRenderedState = i
                    }
                    return [a.memoizedState, t.dispatch]
                }

                function dr(e) {
                    var a = ur(),
                        t = a.queue;
                    if (null === t) throw Error(r(311));
                    t.lastRenderedReducer = e;
                    var i = t.dispatch,
                        n = t.pending,
                        o = a.memoizedState;
                    if (null !== n) {
                        t.pending = null;
                        var l = n = n.next;
                        do {
                            o = e(o, l.action), l = l.next
                        } while (l !== n);
                        ui(o, a.memoizedState) || (Fr = !0), a.memoizedState = o, null === a.baseQueue && (a.baseState = o), t.lastRenderedState = o
                    }
                    return [o, i]
                }

                function pr(e, a, t) {
                    var i = a._getVersion;
                    i = i(a._source);
                    var n = a._workInProgressVersionPrimary;
                    if (null !== n ? e = n === i : (e = e.mutableReadLanes, (e = (Zo & e) === e) && (a._workInProgressVersionPrimary = i, Ko.push(a))), e) return t(a._source);
                    throw Ko.push(a), Error(r(350))
                }

                function mr(e, a, t, i) {
                    var n = Ll;
                    if (null === n) throw Error(r(349));
                    var o = a._getVersion,
                        l = o(a._source),
                        s = Xo.current,
                        u = s.useState((function() {
                            return pr(n, a, t)
                        })),
                        c = u[1],
                        f = u[0];
                    u = tr;
                    var d = e.memoizedState,
                        p = d.refs,
                        m = p.getSnapshot,
                        g = d.source;
                    d = d.subscribe;
                    var v = er;
                    return e.memoizedState = {
                        refs: p,
                        source: a,
                        subscribe: i
                    }, s.useEffect((function() {
                        p.getSnapshot = t, p.setSnapshot = c;
                        var e = o(a._source);
                        if (!ui(l, e)) {
                            e = t(a._source), ui(f, e) || (c(e), e = ps(v), n.mutableReadLanes |= e & n.pendingLanes), e = n.mutableReadLanes, n.entangledLanes |= e;
                            for (var i = n.entanglements, r = e; 0 < r;) {
                                var s = 31 - Wa(r),
                                    u = 1 << s;
                                i[s] |= e, r &= ~u
                            }
                        }
                    }), [t, a, i]), s.useEffect((function() {
                        return i(a._source, (function() {
                            var e = p.getSnapshot,
                                t = p.setSnapshot;
                            try {
                                t(e(a._source));
                                var i = ps(v);
                                n.mutableReadLanes |= i & n.pendingLanes
                            } catch (o) {
                                t((function() {
                                    throw o
                                }))
                            }
                        }))
                    }), [a, i]), ui(m, t) && ui(g, a) && ui(d, i) || ((e = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: cr,
                        lastRenderedState: f
                    }).dispatch = c = Or.bind(null, er, e), u.queue = e, u.baseQueue = null, f = pr(n, a, t), u.memoizedState = u.baseState = f), f
                }

                function gr(e, a, t) {
                    return mr(ur(), e, a, t)
                }

                function vr(e) {
                    var a = sr();
                    return "function" === typeof e && (e = e()), a.memoizedState = a.baseState = e, e = (e = a.queue = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: cr,
                        lastRenderedState: e
                    }).dispatch = Or.bind(null, er, e), [a.memoizedState, e]
                }

                function br(e, a, t, i) {
                    return e = {
                        tag: e,
                        create: a,
                        destroy: t,
                        deps: i,
                        next: null
                    }, null === (a = er.updateQueue) ? (a = {
                        lastEffect: null
                    }, er.updateQueue = a, a.lastEffect = e.next = e) : null === (t = a.lastEffect) ? a.lastEffect = e.next = e : (i = t.next, t.next = e, e.next = i, a.lastEffect = e), e
                }

                function hr(e) {
                    return e = {
                        current: e
                    }, sr().memoizedState = e
                }

                function yr() {
                    return ur().memoizedState
                }

                function zr(e, a, t, i) {
                    var n = sr();
                    er.flags |= e, n.memoizedState = br(1 | a, t, void 0, void 0 === i ? null : i)
                }

                function wr(e, a, t, i) {
                    var n = ur();
                    i = void 0 === i ? null : i;
                    var o = void 0;
                    if (null !== ar) {
                        var r = ar.memoizedState;
                        if (o = r.destroy, null !== i && rr(i, r.deps)) return void br(a, t, o, i)
                    }
                    er.flags |= e, n.memoizedState = br(1 | a, t, o, i)
                }

                function kr(e, a) {
                    return zr(516, 4, e, a)
                }

                function xr(e, a) {
                    return wr(516, 4, e, a)
                }

                function Sr(e, a) {
                    return wr(4, 2, e, a)
                }

                function Er(e, a) {
                    return "function" === typeof a ? (e = e(), a(e), function() {
                        a(null)
                    }) : null !== a && void 0 !== a ? (e = e(), a.current = e, function() {
                        a.current = null
                    }) : void 0
                }

                function Cr(e, a, t) {
                    return t = null !== t && void 0 !== t ? t.concat([e]) : null, wr(4, 2, Er.bind(null, a, e), t)
                }

                function Tr() {}

                function _r(e, a) {
                    var t = ur();
                    a = void 0 === a ? null : a;
                    var i = t.memoizedState;
                    return null !== i && null !== a && rr(a, i[1]) ? i[0] : (t.memoizedState = [e, a], e)
                }

                function Nr(e, a) {
                    var t = ur();
                    a = void 0 === a ? null : a;
                    var i = t.memoizedState;
                    return null !== i && null !== a && rr(a, i[1]) ? i[0] : (e = e(), t.memoizedState = [e, a], e)
                }

                function jr(e, a) {
                    var t = Wn();
                    $n(98 > t ? 98 : t, (function() {
                        e(!0)
                    })), $n(97 < t ? 97 : t, (function() {
                        var t = Jo.transition;
                        Jo.transition = 1;
                        try {
                            e(!1), a()
                        } finally {
                            Jo.transition = t
                        }
                    }))
                }

                function Or(e, a, t) {
                    var i = ds(),
                        n = ps(e),
                        o = {
                            lane: n,
                            action: t,
                            eagerReducer: null,
                            eagerState: null,
                            next: null
                        },
                        r = a.pending;
                    if (null === r ? o.next = o : (o.next = r.next, r.next = o), a.pending = o, r = e.alternate, e === er || null !== r && r === er) nr = ir = !0;
                    else {
                        if (0 === e.lanes && (null === r || 0 === r.lanes) && null !== (r = a.lastRenderedReducer)) try {
                            var l = a.lastRenderedState,
                                s = r(l, t);
                            if (o.eagerReducer = r, o.eagerState = s, ui(s, l)) return
                        } catch (u) {}
                        ms(e, n, i)
                    }
                }
                var Pr = {
                        readContext: ro,
                        useCallback: or,
                        useContext: or,
                        useEffect: or,
                        useImperativeHandle: or,
                        useLayoutEffect: or,
                        useMemo: or,
                        useReducer: or,
                        useRef: or,
                        useState: or,
                        useDebugValue: or,
                        useDeferredValue: or,
                        useTransition: or,
                        useMutableSource: or,
                        useOpaqueIdentifier: or,
                        unstable_isNewReconciler: !1
                    },
                    Lr = {
                        readContext: ro,
                        useCallback: function(e, a) {
                            return sr().memoizedState = [e, void 0 === a ? null : a], e
                        },
                        useContext: ro,
                        useEffect: kr,
                        useImperativeHandle: function(e, a, t) {
                            return t = null !== t && void 0 !== t ? t.concat([e]) : null, zr(4, 2, Er.bind(null, a, e), t)
                        },
                        useLayoutEffect: function(e, a) {
                            return zr(4, 2, e, a)
                        },
                        useMemo: function(e, a) {
                            var t = sr();
                            return a = void 0 === a ? null : a, e = e(), t.memoizedState = [e, a], e
                        },
                        useReducer: function(e, a, t) {
                            var i = sr();
                            return a = void 0 !== t ? t(a) : a, i.memoizedState = i.baseState = a, e = (e = i.queue = {
                                pending: null,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: a
                            }).dispatch = Or.bind(null, er, e), [i.memoizedState, e]
                        },
                        useRef: hr,
                        useState: vr,
                        useDebugValue: Tr,
                        useDeferredValue: function(e) {
                            var a = vr(e),
                                t = a[0],
                                i = a[1];
                            return kr((function() {
                                var a = Jo.transition;
                                Jo.transition = 1;
                                try {
                                    i(e)
                                } finally {
                                    Jo.transition = a
                                }
                            }), [e]), t
                        },
                        useTransition: function() {
                            var e = vr(!1),
                                a = e[0];
                            return hr(e = jr.bind(null, e[1])), [e, a]
                        },
                        useMutableSource: function(e, a, t) {
                            var i = sr();
                            return i.memoizedState = {
                                refs: {
                                    getSnapshot: a,
                                    setSnapshot: null
                                },
                                source: e,
                                subscribe: t
                            }, mr(i, e, a, t)
                        },
                        useOpaqueIdentifier: function() {
                            if (qo) {
                                var e = !1,
                                    a = function(e) {
                                        return {
                                            $$typeof: R,
                                            toString: e,
                                            valueOf: e
                                        }
                                    }((function() {
                                        throw e || (e = !0, t("r:" + (Ki++).toString(36))), Error(r(355))
                                    })),
                                    t = vr(a)[1];
                                return 0 === (2 & er.mode) && (er.flags |= 516, br(5, (function() {
                                    t("r:" + (Ki++).toString(36))
                                }), void 0, null)), a
                            }
                            return vr(a = "r:" + (Ki++).toString(36)), a
                        },
                        unstable_isNewReconciler: !1
                    },
                    Mr = {
                        readContext: ro,
                        useCallback: _r,
                        useContext: ro,
                        useEffect: xr,
                        useImperativeHandle: Cr,
                        useLayoutEffect: Sr,
                        useMemo: Nr,
                        useReducer: fr,
                        useRef: yr,
                        useState: function() {
                            return fr(cr)
                        },
                        useDebugValue: Tr,
                        useDeferredValue: function(e) {
                            var a = fr(cr),
                                t = a[0],
                                i = a[1];
                            return xr((function() {
                                var a = Jo.transition;
                                Jo.transition = 1;
                                try {
                                    i(e)
                                } finally {
                                    Jo.transition = a
                                }
                            }), [e]), t
                        },
                        useTransition: function() {
                            var e = fr(cr)[0];
                            return [yr().current, e]
                        },
                        useMutableSource: gr,
                        useOpaqueIdentifier: function() {
                            return fr(cr)[0]
                        },
                        unstable_isNewReconciler: !1
                    },
                    Rr = {
                        readContext: ro,
                        useCallback: _r,
                        useContext: ro,
                        useEffect: xr,
                        useImperativeHandle: Cr,
                        useLayoutEffect: Sr,
                        useMemo: Nr,
                        useReducer: dr,
                        useRef: yr,
                        useState: function() {
                            return dr(cr)
                        },
                        useDebugValue: Tr,
                        useDeferredValue: function(e) {
                            var a = dr(cr),
                                t = a[0],
                                i = a[1];
                            return xr((function() {
                                var a = Jo.transition;
                                Jo.transition = 1;
                                try {
                                    i(e)
                                } finally {
                                    Jo.transition = a
                                }
                            }), [e]), t
                        },
                        useTransition: function() {
                            var e = dr(cr)[0];
                            return [yr().current, e]
                        },
                        useMutableSource: gr,
                        useOpaqueIdentifier: function() {
                            return dr(cr)[0]
                        },
                        unstable_isNewReconciler: !1
                    },
                    Dr = w.ReactCurrentOwner,
                    Fr = !1;

                function Ir(e, a, t, i) {
                    a.child = null === e ? _o(a, null, t, i) : To(a, e.child, t, i)
                }

                function Ar(e, a, t, i, n) {
                    t = t.render;
                    var o = a.ref;
                    return oo(a, n), i = lr(e, a, t, i, o, n), null === e || Fr ? (a.flags |= 1, Ir(e, a, i, n), a.child) : (a.updateQueue = e.updateQueue, a.flags &= -517, e.lanes &= ~n, ol(e, a, n))
                }

                function Ur(e, a, t, i, n, o) {
                    if (null === e) {
                        var r = t.type;
                        return "function" !== typeof r || Bs(r) || void 0 !== r.defaultProps || null !== t.compare || void 0 !== t.defaultProps ? ((e = Qs(t.type, null, i, a, a.mode, o)).ref = a.ref, e.return = a, a.child = e) : (a.tag = 15, a.type = r, Hr(e, a, r, i, n, o))
                    }
                    return r = e.child, 0 === (n & o) && (n = r.memoizedProps, (t = null !== (t = t.compare) ? t : fi)(n, i) && e.ref === a.ref) ? ol(e, a, o) : (a.flags |= 1, (e = $s(r, i)).ref = a.ref, e.return = a, a.child = e)
                }

                function Hr(e, a, t, i, n, o) {
                    if (null !== e && fi(e.memoizedProps, i) && e.ref === a.ref) {
                        if (Fr = !1, 0 === (o & n)) return a.lanes = e.lanes, ol(e, a, o);
                        0 !== (16384 & e.flags) && (Fr = !0)
                    }
                    return Wr(e, a, t, i, o)
                }

                function qr(e, a, t) {
                    var i = a.pendingProps,
                        n = i.children,
                        o = null !== e ? e.memoizedState : null;
                    if ("hidden" === i.mode || "unstable-defer-without-hiding" === i.mode)
                        if (0 === (4 & a.mode)) a.memoizedState = {
                            baseLanes: 0
                        }, ks(a, t);
                        else {
                            if (0 === (1073741824 & t)) return e = null !== o ? o.baseLanes | t : t, a.lanes = a.childLanes = 1073741824, a.memoizedState = {
                                baseLanes: e
                            }, ks(a, e), null;
                            a.memoizedState = {
                                baseLanes: 0
                            }, ks(a, null !== o ? o.baseLanes : t)
                        }
                    else null !== o ? (i = o.baseLanes | t, a.memoizedState = null) : i = t, ks(a, i);
                    return Ir(e, a, n, t), a.child
                }

                function Vr(e, a) {
                    var t = a.ref;
                    (null === e && null !== t || null !== e && e.ref !== t) && (a.flags |= 128)
                }

                function Wr(e, a, t, i, n) {
                    var o = bn(t) ? gn : pn.current;
                    return o = vn(a, o), oo(a, n), t = lr(e, a, t, i, o, n), null === e || Fr ? (a.flags |= 1, Ir(e, a, t, n), a.child) : (a.updateQueue = e.updateQueue, a.flags &= -517, e.lanes &= ~n, ol(e, a, n))
                }

                function Br(e, a, t, i, n) {
                    if (bn(t)) {
                        var o = !0;
                        wn(a)
                    } else o = !1;
                    if (oo(a, n), null === a.stateNode) null !== e && (e.alternate = null, a.alternate = null, a.flags |= 2), zo(a, t, i), ko(a, t, i, n), i = !0;
                    else if (null === e) {
                        var r = a.stateNode,
                            l = a.memoizedProps;
                        r.props = l;
                        var s = r.context,
                            u = t.contextType;
                        "object" === typeof u && null !== u ? u = ro(u) : u = vn(a, u = bn(t) ? gn : pn.current);
                        var c = t.getDerivedStateFromProps,
                            f = "function" === typeof c || "function" === typeof r.getSnapshotBeforeUpdate;
                        f || "function" !== typeof r.UNSAFE_componentWillReceiveProps && "function" !== typeof r.componentWillReceiveProps || (l !== i || s !== u) && wo(a, r, i, u), lo = !1;
                        var d = a.memoizedState;
                        r.state = d, mo(a, i, r, n), s = a.memoizedState, l !== i || d !== s || mn.current || lo ? ("function" === typeof c && (bo(a, t, c, i), s = a.memoizedState), (l = lo || yo(a, t, l, i, d, s, u)) ? (f || "function" !== typeof r.UNSAFE_componentWillMount && "function" !== typeof r.componentWillMount || ("function" === typeof r.componentWillMount && r.componentWillMount(), "function" === typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount()), "function" === typeof r.componentDidMount && (a.flags |= 4)) : ("function" === typeof r.componentDidMount && (a.flags |= 4), a.memoizedProps = i, a.memoizedState = s), r.props = i, r.state = s, r.context = u, i = l) : ("function" === typeof r.componentDidMount && (a.flags |= 4), i = !1)
                    } else {
                        r = a.stateNode, uo(e, a), l = a.memoizedProps, u = a.type === a.elementType ? l : Xn(a.type, l), r.props = u, f = a.pendingProps, d = r.context, "object" === typeof(s = t.contextType) && null !== s ? s = ro(s) : s = vn(a, s = bn(t) ? gn : pn.current);
                        var p = t.getDerivedStateFromProps;
                        (c = "function" === typeof p || "function" === typeof r.getSnapshotBeforeUpdate) || "function" !== typeof r.UNSAFE_componentWillReceiveProps && "function" !== typeof r.componentWillReceiveProps || (l !== f || d !== s) && wo(a, r, i, s), lo = !1, d = a.memoizedState, r.state = d, mo(a, i, r, n);
                        var m = a.memoizedState;
                        l !== f || d !== m || mn.current || lo ? ("function" === typeof p && (bo(a, t, p, i), m = a.memoizedState), (u = lo || yo(a, t, u, i, d, m, s)) ? (c || "function" !== typeof r.UNSAFE_componentWillUpdate && "function" !== typeof r.componentWillUpdate || ("function" === typeof r.componentWillUpdate && r.componentWillUpdate(i, m, s), "function" === typeof r.UNSAFE_componentWillUpdate && r.UNSAFE_componentWillUpdate(i, m, s)), "function" === typeof r.componentDidUpdate && (a.flags |= 4), "function" === typeof r.getSnapshotBeforeUpdate && (a.flags |= 256)) : ("function" !== typeof r.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (a.flags |= 4), "function" !== typeof r.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (a.flags |= 256), a.memoizedProps = i, a.memoizedState = m), r.props = i, r.state = m, r.context = s, i = u) : ("function" !== typeof r.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (a.flags |= 4), "function" !== typeof r.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (a.flags |= 256), i = !1)
                    }
                    return $r(e, a, t, i, o, n)
                }

                function $r(e, a, t, i, n, o) {
                    Vr(e, a);
                    var r = 0 !== (64 & a.flags);
                    if (!i && !r) return n && kn(a, t, !1), ol(e, a, o);
                    i = a.stateNode, Dr.current = a;
                    var l = r && "function" !== typeof t.getDerivedStateFromError ? null : i.render();
                    return a.flags |= 1, null !== e && r ? (a.child = To(a, e.child, null, o), a.child = To(a, null, l, o)) : Ir(e, a, l, o), a.memoizedState = i.state, n && kn(a, t, !0), a.child
                }

                function Qr(e) {
                    var a = e.stateNode;
                    a.pendingContext ? yn(0, a.pendingContext, a.pendingContext !== a.context) : a.context && yn(0, a.context, !1), Mo(e, a.containerInfo)
                }
                var Yr, Kr, Gr, Xr = {
                    dehydrated: null,
                    retryLane: 0
                };

                function Jr(e, a, t) {
                    var i, n = a.pendingProps,
                        o = Io.current,
                        r = !1;
                    return (i = 0 !== (64 & a.flags)) || (i = (null === e || null !== e.memoizedState) && 0 !== (2 & o)), i ? (r = !0, a.flags &= -65) : null !== e && null === e.memoizedState || void 0 === n.fallback || !0 === n.unstable_avoidThisFallback || (o |= 1), fn(Io, 1 & o), null === e ? (void 0 !== n.fallback && Bo(a), e = n.children, o = n.fallback, r ? (e = Zr(a, e, o, t), a.child.memoizedState = {
                        baseLanes: t
                    }, a.memoizedState = Xr, e) : "number" === typeof n.unstable_expectedLoadTime ? (e = Zr(a, e, o, t), a.child.memoizedState = {
                        baseLanes: t
                    }, a.memoizedState = Xr, a.lanes = 33554432, e) : ((t = Ks({
                        mode: "visible",
                        children: e
                    }, a.mode, t, null)).return = a, a.child = t)) : (e.memoizedState, r ? (n = al(e, a, n.children, n.fallback, t), r = a.child, o = e.child.memoizedState, r.memoizedState = null === o ? {
                        baseLanes: t
                    } : {
                        baseLanes: o.baseLanes | t
                    }, r.childLanes = e.childLanes & ~t, a.memoizedState = Xr, n) : (t = el(e, a, n.children, t), a.memoizedState = null, t))
                }

                function Zr(e, a, t, i) {
                    var n = e.mode,
                        o = e.child;
                    return a = {
                        mode: "hidden",
                        children: a
                    }, 0 === (2 & n) && null !== o ? (o.childLanes = 0, o.pendingProps = a) : o = Ks(a, n, 0, null), t = Ys(t, n, i, null), o.return = e, t.return = e, o.sibling = t, e.child = o, t
                }

                function el(e, a, t, i) {
                    var n = e.child;
                    return e = n.sibling, t = $s(n, {
                        mode: "visible",
                        children: t
                    }), 0 === (2 & a.mode) && (t.lanes = i), t.return = a, t.sibling = null, null !== e && (e.nextEffect = null, e.flags = 8, a.firstEffect = a.lastEffect = e), a.child = t
                }

                function al(e, a, t, i, n) {
                    var o = a.mode,
                        r = e.child;
                    e = r.sibling;
                    var l = {
                        mode: "hidden",
                        children: t
                    };
                    return 0 === (2 & o) && a.child !== r ? ((t = a.child).childLanes = 0, t.pendingProps = l, null !== (r = t.lastEffect) ? (a.firstEffect = t.firstEffect, a.lastEffect = r, r.nextEffect = null) : a.firstEffect = a.lastEffect = null) : t = $s(r, l), null !== e ? i = $s(e, i) : (i = Ys(i, o, n, null)).flags |= 2, i.return = a, t.return = a, t.sibling = i, a.child = t, i
                }

                function tl(e, a) {
                    e.lanes |= a;
                    var t = e.alternate;
                    null !== t && (t.lanes |= a), no(e.return, a)
                }

                function il(e, a, t, i, n, o) {
                    var r = e.memoizedState;
                    null === r ? e.memoizedState = {
                        isBackwards: a,
                        rendering: null,
                        renderingStartTime: 0,
                        last: i,
                        tail: t,
                        tailMode: n,
                        lastEffect: o
                    } : (r.isBackwards = a, r.rendering = null, r.renderingStartTime = 0, r.last = i, r.tail = t, r.tailMode = n, r.lastEffect = o)
                }

                function nl(e, a, t) {
                    var i = a.pendingProps,
                        n = i.revealOrder,
                        o = i.tail;
                    if (Ir(e, a, i.children, t), 0 !== (2 & (i = Io.current))) i = 1 & i | 2, a.flags |= 64;
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
                        i &= 1
                    }
                    if (fn(Io, i), 0 === (2 & a.mode)) a.memoizedState = null;
                    else switch (n) {
                        case "forwards":
                            for (t = a.child, n = null; null !== t;) null !== (e = t.alternate) && null === Ao(e) && (n = t), t = t.sibling;
                            null === (t = n) ? (n = a.child, a.child = null) : (n = t.sibling, t.sibling = null), il(a, !1, n, t, o, a.lastEffect);
                            break;
                        case "backwards":
                            for (t = null, n = a.child, a.child = null; null !== n;) {
                                if (null !== (e = n.alternate) && null === Ao(e)) {
                                    a.child = n;
                                    break
                                }
                                e = n.sibling, n.sibling = t, t = n, n = e
                            }
                            il(a, !0, t, null, o, a.lastEffect);
                            break;
                        case "together":
                            il(a, !1, null, null, void 0, a.lastEffect);
                            break;
                        default:
                            a.memoizedState = null
                    }
                    return a.child
                }

                function ol(e, a, t) {
                    if (null !== e && (a.dependencies = e.dependencies), Hl |= a.lanes, 0 !== (t & a.childLanes)) {
                        if (null !== e && a.child !== e.child) throw Error(r(153));
                        if (null !== a.child) {
                            for (t = $s(e = a.child, e.pendingProps), a.child = t, t.return = a; null !== e.sibling;) e = e.sibling, (t = t.sibling = $s(e, e.pendingProps)).return = a;
                            t.sibling = null
                        }
                        return a.child
                    }
                    return null
                }

                function rl(e, a) {
                    if (!qo) switch (e.tailMode) {
                        case "hidden":
                            a = e.tail;
                            for (var t = null; null !== a;) null !== a.alternate && (t = a), a = a.sibling;
                            null === t ? e.tail = null : t.sibling = null;
                            break;
                        case "collapsed":
                            t = e.tail;
                            for (var i = null; null !== t;) null !== t.alternate && (i = t), t = t.sibling;
                            null === i ? a || null === e.tail ? e.tail = null : e.tail.sibling = null : i.sibling = null
                    }
                }

                function ll(e, a, t) {
                    var i = a.pendingProps;
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
                            return bn(a.type) && hn(), null;
                        case 3:
                            return Ro(), cn(mn), cn(pn), Go(), (i = a.stateNode).pendingContext && (i.context = i.pendingContext, i.pendingContext = null), null !== e && null !== e.child || (Qo(a) ? a.flags |= 4 : i.hydrate || (a.flags |= 256)), null;
                        case 5:
                            Fo(a);
                            var o = Lo(Po.current);
                            if (t = a.type, null !== e && null != a.stateNode) Kr(e, a, t, i), e.ref !== a.ref && (a.flags |= 128);
                            else {
                                if (!i) {
                                    if (null === a.stateNode) throw Error(r(166));
                                    return null
                                }
                                if (e = Lo(jo.current), Qo(a)) {
                                    i = a.stateNode, t = a.type;
                                    var l = a.memoizedProps;
                                    switch (i[Xi] = a, i[Ji] = l, t) {
                                        case "dialog":
                                            Ni("cancel", i), Ni("close", i);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Ni("load", i);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (e = 0; e < Ei.length; e++) Ni(Ei[e], i);
                                            break;
                                        case "source":
                                            Ni("error", i);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Ni("error", i), Ni("load", i);
                                            break;
                                        case "details":
                                            Ni("toggle", i);
                                            break;
                                        case "input":
                                            ee(i, l), Ni("invalid", i);
                                            break;
                                        case "select":
                                            i._wrapperState = {
                                                wasMultiple: !!l.multiple
                                            }, Ni("invalid", i);
                                            break;
                                        case "textarea":
                                            se(i, l), Ni("invalid", i)
                                    }
                                    for (var u in Se(t, l), e = null, l) l.hasOwnProperty(u) && (o = l[u], "children" === u ? "string" === typeof o ? i.textContent !== o && (e = ["children", o]) : "number" === typeof o && i.textContent !== "" + o && (e = ["children", "" + o]) : s.hasOwnProperty(u) && null != o && "onScroll" === u && Ni("scroll", i));
                                    switch (t) {
                                        case "input":
                                            G(i), ie(i, l, !0);
                                            break;
                                        case "textarea":
                                            G(i), ce(i);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof l.onClick && (i.onclick = Ai)
                                    }
                                    i = e, a.updateQueue = i, null !== i && (a.flags |= 4)
                                } else {
                                    switch (u = 9 === o.nodeType ? o : o.ownerDocument, e === fe && (e = pe(t)), e === fe ? "script" === t ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof i.is ? e = u.createElement(t, {
                                            is: i.is
                                        }) : (e = u.createElement(t), "select" === t && (u = e, i.multiple ? u.multiple = !0 : i.size && (u.size = i.size))) : e = u.createElementNS(e, t), e[Xi] = a, e[Ji] = i, Yr(e, a), a.stateNode = e, u = Ee(t, i), t) {
                                        case "dialog":
                                            Ni("cancel", e), Ni("close", e), o = i;
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Ni("load", e), o = i;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (o = 0; o < Ei.length; o++) Ni(Ei[o], e);
                                            o = i;
                                            break;
                                        case "source":
                                            Ni("error", e), o = i;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Ni("error", e), Ni("load", e), o = i;
                                            break;
                                        case "details":
                                            Ni("toggle", e), o = i;
                                            break;
                                        case "input":
                                            ee(e, i), o = Z(e, i), Ni("invalid", e);
                                            break;
                                        case "option":
                                            o = oe(e, i);
                                            break;
                                        case "select":
                                            e._wrapperState = {
                                                wasMultiple: !!i.multiple
                                            }, o = n({}, i, {
                                                value: void 0
                                            }), Ni("invalid", e);
                                            break;
                                        case "textarea":
                                            se(e, i), o = le(e, i), Ni("invalid", e);
                                            break;
                                        default:
                                            o = i
                                    }
                                    Se(t, o);
                                    var c = o;
                                    for (l in c)
                                        if (c.hasOwnProperty(l)) {
                                            var f = c[l];
                                            "style" === l ? ke(e, f) : "dangerouslySetInnerHTML" === l ? null != (f = f ? f.__html : void 0) && be(e, f) : "children" === l ? "string" === typeof f ? ("textarea" !== t || "" !== f) && he(e, f) : "number" === typeof f && he(e, "" + f) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (s.hasOwnProperty(l) ? null != f && "onScroll" === l && Ni("scroll", e) : null != f && z(e, l, f, u))
                                        } switch (t) {
                                        case "input":
                                            G(e), ie(e, i, !1);
                                            break;
                                        case "textarea":
                                            G(e), ce(e);
                                            break;
                                        case "option":
                                            null != i.value && e.setAttribute("value", "" + Y(i.value));
                                            break;
                                        case "select":
                                            e.multiple = !!i.multiple, null != (l = i.value) ? re(e, !!i.multiple, l, !1) : null != i.defaultValue && re(e, !!i.multiple, i.defaultValue, !0);
                                            break;
                                        default:
                                            "function" === typeof o.onClick && (e.onclick = Ai)
                                    }
                                    qi(t, i) && (a.flags |= 4)
                                }
                                null !== a.ref && (a.flags |= 128)
                            }
                            return null;
                        case 6:
                            if (e && null != a.stateNode) Gr(0, a, e.memoizedProps, i);
                            else {
                                if ("string" !== typeof i && null === a.stateNode) throw Error(r(166));
                                t = Lo(Po.current), Lo(jo.current), Qo(a) ? (i = a.stateNode, t = a.memoizedProps, i[Xi] = a, i.nodeValue !== t && (a.flags |= 4)) : ((i = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(i))[Xi] = a, a.stateNode = i)
                            }
                            return null;
                        case 13:
                            return cn(Io), i = a.memoizedState, 0 !== (64 & a.flags) ? (a.lanes = t, a) : (i = null !== i, t = !1, null === e ? void 0 !== a.memoizedProps.fallback && Qo(a) : t = null !== e.memoizedState, i && !t && 0 !== (2 & a.mode) && (null === e && !0 !== a.memoizedProps.unstable_avoidThisFallback || 0 !== (1 & Io.current) ? 0 === Il && (Il = 3) : (0 !== Il && 3 !== Il || (Il = 4), null === Ll || 0 === (134217727 & Hl) && 0 === (134217727 & ql) || hs(Ll, Rl))), (i || t) && (a.flags |= 4), null);
                        case 4:
                            return Ro(), null === e && Oi(a.stateNode.containerInfo), null;
                        case 10:
                            return io(a), null;
                        case 19:
                            if (cn(Io), null === (i = a.memoizedState)) return null;
                            if (l = 0 !== (64 & a.flags), null === (u = i.rendering))
                                if (l) rl(i, !1);
                                else {
                                    if (0 !== Il || null !== e && 0 !== (64 & e.flags))
                                        for (e = a.child; null !== e;) {
                                            if (null !== (u = Ao(e))) {
                                                for (a.flags |= 64, rl(i, !1), null !== (l = u.updateQueue) && (a.updateQueue = l, a.flags |= 4), null === i.lastEffect && (a.firstEffect = null), a.lastEffect = i.lastEffect, i = t, t = a.child; null !== t;) e = i, (l = t).flags &= 2, l.nextEffect = null, l.firstEffect = null, l.lastEffect = null, null === (u = l.alternate) ? (l.childLanes = 0, l.lanes = e, l.child = null, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, e = u.dependencies, l.dependencies = null === e ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }), t = t.sibling;
                                                return fn(Io, 1 & Io.current | 2), a.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== i.tail && Vn() > $l && (a.flags |= 64, l = !0, rl(i, !1), a.lanes = 33554432)
                                }
                            else {
                                if (!l)
                                    if (null !== (e = Ao(u))) {
                                        if (a.flags |= 64, l = !0, null !== (t = e.updateQueue) && (a.updateQueue = t, a.flags |= 4), rl(i, !0), null === i.tail && "hidden" === i.tailMode && !u.alternate && !qo) return null !== (a = a.lastEffect = i.lastEffect) && (a.nextEffect = null), null
                                    } else 2 * Vn() - i.renderingStartTime > $l && 1073741824 !== t && (a.flags |= 64, l = !0, rl(i, !1), a.lanes = 33554432);
                                i.isBackwards ? (u.sibling = a.child, a.child = u) : (null !== (t = i.last) ? t.sibling = u : a.child = u, i.last = u)
                            }
                            return null !== i.tail ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.lastEffect = a.lastEffect, i.renderingStartTime = Vn(), t.sibling = null, a = Io.current, fn(Io, l ? 1 & a | 2 : 1 & a), t) : null;
                        case 23:
                        case 24:
                            return xs(), null !== e && null !== e.memoizedState !== (null !== a.memoizedState) && "unstable-defer-without-hiding" !== i.mode && (a.flags |= 4), null
                    }
                    throw Error(r(156, a.tag))
                }

                function sl(e) {
                    switch (e.tag) {
                        case 1:
                            bn(e.type) && hn();
                            var a = e.flags;
                            return 4096 & a ? (e.flags = -4097 & a | 64, e) : null;
                        case 3:
                            if (Ro(), cn(mn), cn(pn), Go(), 0 !== (64 & (a = e.flags))) throw Error(r(285));
                            return e.flags = -4097 & a | 64, e;
                        case 5:
                            return Fo(e), null;
                        case 13:
                            return cn(Io), 4096 & (a = e.flags) ? (e.flags = -4097 & a | 64, e) : null;
                        case 19:
                            return cn(Io), null;
                        case 4:
                            return Ro(), null;
                        case 10:
                            return io(e), null;
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
                            i = a;
                        do {
                            t += $(i), i = i.return
                        } while (i);
                        var n = t
                    } catch (o) {
                        n = "\nError generating stack: " + o.message + "\n" + o.stack
                    }
                    return {
                        value: e,
                        source: a,
                        stack: n
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
                Yr = function(e, a) {
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
                }, Kr = function(e, a, t, i) {
                    var o = e.memoizedProps;
                    if (o !== i) {
                        e = a.stateNode, Lo(jo.current);
                        var r, l = null;
                        switch (t) {
                            case "input":
                                o = Z(e, o), i = Z(e, i), l = [];
                                break;
                            case "option":
                                o = oe(e, o), i = oe(e, i), l = [];
                                break;
                            case "select":
                                o = n({}, o, {
                                    value: void 0
                                }), i = n({}, i, {
                                    value: void 0
                                }), l = [];
                                break;
                            case "textarea":
                                o = le(e, o), i = le(e, i), l = [];
                                break;
                            default:
                                "function" !== typeof o.onClick && "function" === typeof i.onClick && (e.onclick = Ai)
                        }
                        for (f in Se(t, i), t = null, o)
                            if (!i.hasOwnProperty(f) && o.hasOwnProperty(f) && null != o[f])
                                if ("style" === f) {
                                    var u = o[f];
                                    for (r in u) u.hasOwnProperty(r) && (t || (t = {}), t[r] = "")
                                } else "dangerouslySetInnerHTML" !== f && "children" !== f && "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (s.hasOwnProperty(f) ? l || (l = []) : (l = l || []).push(f, null));
                        for (f in i) {
                            var c = i[f];
                            if (u = null != o ? o[f] : void 0, i.hasOwnProperty(f) && c !== u && (null != c || null != u))
                                if ("style" === f)
                                    if (u) {
                                        for (r in u) !u.hasOwnProperty(r) || c && c.hasOwnProperty(r) || (t || (t = {}), t[r] = "");
                                        for (r in c) c.hasOwnProperty(r) && u[r] !== c[r] && (t || (t = {}), t[r] = c[r])
                                    } else t || (l || (l = []), l.push(f, t)), t = c;
                            else "dangerouslySetInnerHTML" === f ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, null != c && u !== c && (l = l || []).push(f, c)) : "children" === f ? "string" !== typeof c && "number" !== typeof c || (l = l || []).push(f, "" + c) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && (s.hasOwnProperty(f) ? (null != c && "onScroll" === f && Ni("scroll", e), l || u === c || (l = [])) : "object" === typeof c && null !== c && c.$$typeof === R ? c.toString() : (l = l || []).push(f, c))
                        }
                        t && (l = l || []).push("style", t);
                        var f = l;
                        (a.updateQueue = f) && (a.flags |= 4)
                    }
                }, Gr = function(e, a, t, i) {
                    t !== i && (a.flags |= 4)
                };
                var fl = "function" === typeof WeakMap ? WeakMap : Map;

                function dl(e, a, t) {
                    (t = co(-1, t)).tag = 3, t.payload = {
                        element: null
                    };
                    var i = a.value;
                    return t.callback = function() {
                        Gl || (Gl = !0, Xl = i), cl(0, a)
                    }, t
                }

                function pl(e, a, t) {
                    (t = co(-1, t)).tag = 3;
                    var i = e.type.getDerivedStateFromError;
                    if ("function" === typeof i) {
                        var n = a.value;
                        t.payload = function() {
                            return cl(0, a), i(n)
                        }
                    }
                    var o = e.stateNode;
                    return null !== o && "function" === typeof o.componentDidCatch && (t.callback = function() {
                        "function" !== typeof i && (null === Jl ? Jl = new Set([this]) : Jl.add(this), cl(0, a));
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
                                    i = e.memoizedState;
                                a = (e = a.stateNode).getSnapshotBeforeUpdate(a.elementType === a.type ? t : Xn(a.type, t), i), e.__reactInternalSnapshotBeforeUpdate = a
                            }
                            return;
                        case 3:
                            return void(256 & a.flags && $i(a.stateNode.containerInfo))
                    }
                    throw Error(r(163))
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
                                        var i = e.create;
                                        e.destroy = i()
                                    }
                                    e = e.next
                                } while (e !== a)
                            }
                            if (null !== (a = null !== (a = t.updateQueue) ? a.lastEffect : null)) {
                                e = a = a.next;
                                do {
                                    var n = e;
                                    i = n.next, 0 !== (4 & (n = n.tag)) && 0 !== (1 & n) && (Fs(t, e), Ds(t, e)), e = i
                                } while (e !== a)
                            }
                            return;
                        case 1:
                            return e = t.stateNode, 4 & t.flags && (null === a ? e.componentDidMount() : (i = t.elementType === t.type ? a.memoizedProps : Xn(t.type, a.memoizedProps), e.componentDidUpdate(i, a.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), void(null !== (a = t.updateQueue) && go(t, a, e));
                        case 3:
                            if (null !== (a = t.updateQueue)) {
                                if (e = null, null !== t.child) switch (t.child.tag) {
                                    case 5:
                                    case 1:
                                        e = t.child.stateNode
                                }
                                go(t, a, e)
                            }
                            return;
                        case 5:
                            return e = t.stateNode, void(null === a && 4 & t.flags && qi(t.type, t.memoizedProps) && e.focus());
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
                            return void(null === t.memoizedState && (t = t.alternate, null !== t && (t = t.memoizedState, null !== t && (t = t.dehydrated, null !== t && ka(t)))))
                    }
                    throw Error(r(163))
                }

                function hl(e, a) {
                    for (var t = e;;) {
                        if (5 === t.tag) {
                            var i = t.stateNode;
                            if (a) "function" === typeof(i = i.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none";
                            else {
                                i = t.stateNode;
                                var n = t.memoizedProps.style;
                                n = void 0 !== n && null !== n && n.hasOwnProperty("display") ? n.display : null, i.style.display = we("display", n)
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
                    if (Sn && "function" === typeof Sn.onCommitFiberUnmount) try {
                        Sn.onCommitFiberUnmount(xn, a)
                    } catch (o) {}
                    switch (a.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            if (null !== (e = a.updateQueue) && null !== (e = e.lastEffect)) {
                                var t = e = e.next;
                                do {
                                    var i = t,
                                        n = i.destroy;
                                    if (i = i.tag, void 0 !== n)
                                        if (0 !== (4 & i)) Fs(a, t);
                                        else {
                                            i = a;
                                            try {
                                                n()
                                            } catch (o) {
                                                Us(i, o)
                                            }
                                        } t = t.next
                                } while (t !== e)
                            }
                            break;
                        case 1:
                            if (gl(a), "function" === typeof(e = a.stateNode).componentWillUnmount) try {
                                e.props = a.memoizedProps, e.state = a.memoizedState, e.componentWillUnmount()
                            } catch (o) {
                                Us(a, o)
                            }
                            break;
                        case 5:
                            gl(a);
                            break;
                        case 4:
                            El(e, a)
                    }
                }

                function zl(e) {
                    e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null
                }

                function wl(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function kl(e) {
                    e: {
                        for (var a = e.return; null !== a;) {
                            if (wl(a)) break e;
                            a = a.return
                        }
                        throw Error(r(160))
                    }
                    var t = a;
                    switch (a = t.stateNode, t.tag) {
                        case 5:
                            var i = !1;
                            break;
                        case 3:
                        case 4:
                            a = a.containerInfo, i = !0;
                            break;
                        default:
                            throw Error(r(161))
                    }
                    16 & t.flags && (he(a, ""), t.flags &= -17);e: a: for (t = e;;) {
                        for (; null === t.sibling;) {
                            if (null === t.return || wl(t.return)) {
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
                    i ? xl(e, t, a) : Sl(e, t, a)
                }

                function xl(e, a, t) {
                    var i = e.tag,
                        n = 5 === i || 6 === i;
                    if (n) e = n ? e.stateNode : e.stateNode.instance, a ? 8 === t.nodeType ? t.parentNode.insertBefore(e, a) : t.insertBefore(e, a) : (8 === t.nodeType ? (a = t.parentNode).insertBefore(e, t) : (a = t).appendChild(e), null !== (t = t._reactRootContainer) && void 0 !== t || null !== a.onclick || (a.onclick = Ai));
                    else if (4 !== i && null !== (e = e.child))
                        for (xl(e, a, t), e = e.sibling; null !== e;) xl(e, a, t), e = e.sibling
                }

                function Sl(e, a, t) {
                    var i = e.tag,
                        n = 5 === i || 6 === i;
                    if (n) e = n ? e.stateNode : e.stateNode.instance, a ? t.insertBefore(e, a) : t.appendChild(e);
                    else if (4 !== i && null !== (e = e.child))
                        for (Sl(e, a, t), e = e.sibling; null !== e;) Sl(e, a, t), e = e.sibling
                }

                function El(e, a) {
                    for (var t, i, n = a, o = !1;;) {
                        if (!o) {
                            o = n.return;
                            e: for (;;) {
                                if (null === o) throw Error(r(160));
                                switch (t = o.stateNode, o.tag) {
                                    case 5:
                                        i = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        t = t.containerInfo, i = !0;
                                        break e
                                }
                                o = o.return
                            }
                            o = !0
                        }
                        if (5 === n.tag || 6 === n.tag) {
                            e: for (var l = e, s = n, u = s;;)
                                if (yl(l, u), null !== u.child && 4 !== u.tag) u.child.return = u, u = u.child;
                                else {
                                    if (u === s) break e;
                                    for (; null === u.sibling;) {
                                        if (null === u.return || u.return === s) break e;
                                        u = u.return
                                    }
                                    u.sibling.return = u.return, u = u.sibling
                                }i ? (l = t, s = n.stateNode, 8 === l.nodeType ? l.parentNode.removeChild(s) : l.removeChild(s)) : t.removeChild(n.stateNode)
                        }
                        else if (4 === n.tag) {
                            if (null !== n.child) {
                                t = n.stateNode.containerInfo, i = !0, n.child.return = n, n = n.child;
                                continue
                            }
                        } else if (yl(e, n), null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === a) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === a) return;
                            4 === (n = n.return).tag && (o = !1)
                        }
                        n.sibling.return = n.return, n = n.sibling
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
                                var i = t = t.next;
                                do {
                                    3 === (3 & i.tag) && (e = i.destroy, i.destroy = void 0, void 0 !== e && e()), i = i.next
                                } while (i !== t)
                            }
                            return;
                        case 1:
                        case 12:
                        case 17:
                            return;
                        case 5:
                            if (null != (t = a.stateNode)) {
                                i = a.memoizedProps;
                                var n = null !== e ? e.memoizedProps : i;
                                e = a.type;
                                var o = a.updateQueue;
                                if (a.updateQueue = null, null !== o) {
                                    for (t[Ji] = i, "input" === e && "radio" === i.type && null != i.name && ae(t, i), Ee(e, n), a = Ee(e, i), n = 0; n < o.length; n += 2) {
                                        var l = o[n],
                                            s = o[n + 1];
                                        "style" === l ? ke(t, s) : "dangerouslySetInnerHTML" === l ? be(t, s) : "children" === l ? he(t, s) : z(t, l, s, a)
                                    }
                                    switch (e) {
                                        case "input":
                                            te(t, i);
                                            break;
                                        case "textarea":
                                            ue(t, i);
                                            break;
                                        case "select":
                                            e = t._wrapperState.wasMultiple, t._wrapperState.wasMultiple = !!i.multiple, null != (o = i.value) ? re(t, !!i.multiple, o, !1) : e !== !!i.multiple && (null != i.defaultValue ? re(t, !!i.multiple, i.defaultValue, !0) : re(t, !!i.multiple, i.multiple ? [] : "", !1))
                                    }
                                }
                            }
                            return;
                        case 6:
                            if (null === a.stateNode) throw Error(r(162));
                            return void(a.stateNode.nodeValue = a.memoizedProps);
                        case 3:
                            return void((t = a.stateNode).hydrate && (t.hydrate = !1, ka(t.containerInfo)));
                        case 13:
                            return null !== a.memoizedState && (Bl = Vn(), hl(a.child, !0)), void Tl(a);
                        case 19:
                            return void Tl(a);
                        case 23:
                        case 24:
                            return void hl(a, null !== a.memoizedState)
                    }
                    throw Error(r(163))
                }

                function Tl(e) {
                    var a = e.updateQueue;
                    if (null !== a) {
                        e.updateQueue = null;
                        var t = e.stateNode;
                        null === t && (t = e.stateNode = new ml), a.forEach((function(a) {
                            var i = qs.bind(null, e, a);
                            t.has(a) || (t.add(a), a.then(i, i))
                        }))
                    }
                }

                function _l(e, a) {
                    return null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && (null !== (a = a.memoizedState) && null === a.dehydrated)
                }
                var Nl = Math.ceil,
                    jl = w.ReactCurrentDispatcher,
                    Ol = w.ReactCurrentOwner,
                    Pl = 0,
                    Ll = null,
                    Ml = null,
                    Rl = 0,
                    Dl = 0,
                    Fl = un(0),
                    Il = 0,
                    Al = null,
                    Ul = 0,
                    Hl = 0,
                    ql = 0,
                    Vl = 0,
                    Wl = null,
                    Bl = 0,
                    $l = 1 / 0;

                function Ql() {
                    $l = Vn() + 500
                }
                var Yl, Kl = null,
                    Gl = !1,
                    Xl = null,
                    Jl = null,
                    Zl = !1,
                    es = null,
                    as = 90,
                    ts = [],
                    is = [],
                    ns = null,
                    os = 0,
                    rs = null,
                    ls = -1,
                    ss = 0,
                    us = 0,
                    cs = null,
                    fs = !1;

                function ds() {
                    return 0 !== (48 & Pl) ? Vn() : -1 !== ls ? ls : ls = Vn()
                }

                function ps(e) {
                    if (0 === (2 & (e = e.mode))) return 1;
                    if (0 === (4 & e)) return 99 === Wn() ? 1 : 2;
                    if (0 === ss && (ss = Ul), 0 !== Gn.transition) {
                        0 !== us && (us = null !== Wl ? Wl.pendingLanes : 0), e = ss;
                        var a = 4186112 & ~us;
                        return 0 === (a &= -a) && (0 === (a = (e = 4186112 & ~e) & -e) && (a = 8192)), a
                    }
                    return e = Wn(), 0 !== (4 & Pl) && 98 === e ? e = Ua(12, ss) : e = Ua(e = function(e) {
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
                    if (50 < os) throw os = 0, rs = null, Error(r(185));
                    if (null === (e = gs(e, a))) return null;
                    Va(e, a, t), e === Ll && (ql |= a, 4 === Il && hs(e, Rl));
                    var i = Wn();
                    1 === a ? 0 !== (8 & Pl) && 0 === (48 & Pl) ? ys(e) : (vs(e, t), 0 === Pl && (Ql(), Yn())) : (0 === (4 & Pl) || 98 !== i && 99 !== i || (null === ns ? ns = new Set([e]) : ns.add(e)), vs(e, t)), Wl = e
                }

                function gs(e, a) {
                    e.lanes |= a;
                    var t = e.alternate;
                    for (null !== t && (t.lanes |= a), t = e, e = e.return; null !== e;) e.childLanes |= a, null !== (t = e.alternate) && (t.childLanes |= a), t = e, e = e.return;
                    return 3 === t.tag ? t.stateNode : null
                }

                function vs(e, a) {
                    for (var t = e.callbackNode, i = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
                        var s = 31 - Wa(l),
                            u = 1 << s,
                            c = o[s];
                        if (-1 === c) {
                            if (0 === (u & i) || 0 !== (u & n)) {
                                c = a, Fa(u);
                                var f = Da;
                                o[s] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1
                            }
                        } else c <= a && (e.expiredLanes |= u);
                        l &= ~u
                    }
                    if (i = Ia(e, e === Ll ? Rl : 0), a = Da, 0 === i) null !== t && (t !== Fn && Tn(t), e.callbackNode = null, e.callbackPriority = 0);
                    else {
                        if (null !== t) {
                            if (e.callbackPriority === a) return;
                            t !== Fn && Tn(t)
                        }
                        15 === a ? (t = ys.bind(null, e), null === An ? (An = [t], Un = Cn(Pn, Kn)) : An.push(t), t = Fn) : 14 === a ? t = Qn(99, ys.bind(null, e)) : (t = function(e) {
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
                                    throw Error(r(358, e))
                            }
                        }(a), t = Qn(t, bs.bind(null, e))), e.callbackPriority = a, e.callbackNode = t
                    }
                }

                function bs(e) {
                    if (ls = -1, us = ss = 0, 0 !== (48 & Pl)) throw Error(r(327));
                    var a = e.callbackNode;
                    if (Rs() && e.callbackNode !== a) return null;
                    var t = Ia(e, e === Ll ? Rl : 0);
                    if (0 === t) return null;
                    var i = t,
                        n = Pl;
                    Pl |= 16;
                    var o = Cs();
                    for (Ll === e && Rl === i || (Ql(), Ss(e, i));;) try {
                        Ns();
                        break
                    } catch (s) {
                        Es(e, s)
                    }
                    if (to(), jl.current = o, Pl = n, null !== Ml ? i = 0 : (Ll = null, Rl = 0, i = Il), 0 !== (Ul & ql)) Ss(e, 0);
                    else if (0 !== i) {
                        if (2 === i && (Pl |= 64, e.hydrate && (e.hydrate = !1, $i(e.containerInfo)), 0 !== (t = Aa(e)) && (i = Ts(e, t))), 1 === i) throw a = Al, Ss(e, 0), hs(e, t), vs(e, Vn()), a;
                        switch (e.finishedWork = e.current.alternate, e.finishedLanes = t, i) {
                            case 0:
                            case 1:
                                throw Error(r(345));
                            case 2:
                            case 5:
                                Ps(e);
                                break;
                            case 3:
                                if (hs(e, t), (62914560 & t) === t && 10 < (i = Bl + 500 - Vn())) {
                                    if (0 !== Ia(e, 0)) break;
                                    if (((n = e.suspendedLanes) & t) !== t) {
                                        ds(), e.pingedLanes |= e.suspendedLanes & n;
                                        break
                                    }
                                    e.timeoutHandle = Wi(Ps.bind(null, e), i);
                                    break
                                }
                                Ps(e);
                                break;
                            case 4:
                                if (hs(e, t), (4186112 & t) === t) break;
                                for (i = e.eventTimes, n = -1; 0 < t;) {
                                    var l = 31 - Wa(t);
                                    o = 1 << l, (l = i[l]) > n && (n = l), t &= ~o
                                }
                                if (t = n, 10 < (t = (120 > (t = Vn() - t) ? 120 : 480 > t ? 480 : 1080 > t ? 1080 : 1920 > t ? 1920 : 3e3 > t ? 3e3 : 4320 > t ? 4320 : 1960 * Nl(t / 1960)) - t)) {
                                    e.timeoutHandle = Wi(Ps.bind(null, e), t);
                                    break
                                }
                                Ps(e);
                                break;
                            default:
                                throw Error(r(329))
                        }
                    }
                    return vs(e, Vn()), e.callbackNode === a ? bs.bind(null, e) : null
                }

                function hs(e, a) {
                    for (a &= ~Vl, a &= ~ql, e.suspendedLanes |= a, e.pingedLanes &= ~a, e = e.expirationTimes; 0 < a;) {
                        var t = 31 - Wa(a),
                            i = 1 << t;
                        e[t] = -1, a &= ~i
                    }
                }

                function ys(e) {
                    if (0 !== (48 & Pl)) throw Error(r(327));
                    if (Rs(), e === Ll && 0 !== (e.expiredLanes & Rl)) {
                        var a = Rl,
                            t = Ts(e, a);
                        0 !== (Ul & ql) && (t = Ts(e, a = Ia(e, a)))
                    } else t = Ts(e, a = Ia(e, 0));
                    if (0 !== e.tag && 2 === t && (Pl |= 64, e.hydrate && (e.hydrate = !1, $i(e.containerInfo)), 0 !== (a = Aa(e)) && (t = Ts(e, a))), 1 === t) throw t = Al, Ss(e, 0), hs(e, a), vs(e, Vn()), t;
                    return e.finishedWork = e.current.alternate, e.finishedLanes = a, Ps(e), vs(e, Vn()), null
                }

                function zs(e, a) {
                    var t = Pl;
                    Pl |= 1;
                    try {
                        return e(a)
                    } finally {
                        0 === (Pl = t) && (Ql(), Yn())
                    }
                }

                function ws(e, a) {
                    var t = Pl;
                    Pl &= -2, Pl |= 8;
                    try {
                        return e(a)
                    } finally {
                        0 === (Pl = t) && (Ql(), Yn())
                    }
                }

                function ks(e, a) {
                    fn(Fl, Dl), Dl |= a, Ul |= a
                }

                function xs() {
                    Dl = Fl.current, cn(Fl)
                }

                function Ss(e, a) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var t = e.timeoutHandle;
                    if (-1 !== t && (e.timeoutHandle = -1, Bi(t)), null !== Ml)
                        for (t = Ml.return; null !== t;) {
                            var i = t;
                            switch (i.tag) {
                                case 1:
                                    null !== (i = i.type.childContextTypes) && void 0 !== i && hn();
                                    break;
                                case 3:
                                    Ro(), cn(mn), cn(pn), Go();
                                    break;
                                case 5:
                                    Fo(i);
                                    break;
                                case 4:
                                    Ro();
                                    break;
                                case 13:
                                case 19:
                                    cn(Io);
                                    break;
                                case 10:
                                    io(i);
                                    break;
                                case 23:
                                case 24:
                                    xs()
                            }
                            t = t.return
                        }
                    Ll = e, Ml = $s(e.current, null), Rl = Dl = Ul = a, Il = 0, Al = null, Vl = ql = Hl = 0
                }

                function Es(e, a) {
                    for (;;) {
                        var t = Ml;
                        try {
                            if (to(), Xo.current = Pr, ir) {
                                for (var i = er.memoizedState; null !== i;) {
                                    var n = i.queue;
                                    null !== n && (n.pending = null), i = i.next
                                }
                                ir = !1
                            }
                            if (Zo = 0, tr = ar = er = null, nr = !1, Ol.current = null, null === t || null === t.return) {
                                Il = 1, Al = a, Ml = null;
                                break
                            }
                            e: {
                                var o = e,
                                    r = t.return,
                                    l = t,
                                    s = a;
                                if (a = Rl, l.flags |= 2048, l.firstEffect = l.lastEffect = null, null !== s && "object" === typeof s && "function" === typeof s.then) {
                                    var u = s;
                                    if (0 === (2 & l.mode)) {
                                        var c = l.alternate;
                                        c ? (l.updateQueue = c.updateQueue, l.memoizedState = c.memoizedState, l.lanes = c.lanes) : (l.updateQueue = null, l.memoizedState = null)
                                    }
                                    var f = 0 !== (1 & Io.current),
                                        d = r;
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
                                                        var h = co(-1, 1);
                                                        h.tag = 2, fo(l, h)
                                                    } l.lanes |= 1;
                                                break e
                                            }
                                            s = void 0, l = a;
                                            var y = o.pingCache;
                                            if (null === y ? (y = o.pingCache = new fl, s = new Set, y.set(u, s)) : void 0 === (s = y.get(u)) && (s = new Set, y.set(u, s)), !s.has(l)) {
                                                s.add(l);
                                                var z = Hs.bind(null, o, u, l);
                                                u.then(z, z)
                                            }
                                            d.flags |= 4096, d.lanes = a;
                                            break e
                                        }
                                        d = d.return
                                    } while (null !== d);
                                    s = Error((Q(l.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")
                                }
                                5 !== Il && (Il = 2),
                                s = ul(s, l),
                                d = r;do {
                                    switch (d.tag) {
                                        case 3:
                                            o = s, d.flags |= 4096, a &= -a, d.lanes |= a, po(d, dl(0, o, a));
                                            break e;
                                        case 1:
                                            o = s;
                                            var w = d.type,
                                                k = d.stateNode;
                                            if (0 === (64 & d.flags) && ("function" === typeof w.getDerivedStateFromError || null !== k && "function" === typeof k.componentDidCatch && (null === Jl || !Jl.has(k)))) {
                                                d.flags |= 4096, a &= -a, d.lanes |= a, po(d, pl(d, o, a));
                                                break e
                                            }
                                    }
                                    d = d.return
                                } while (null !== d)
                            }
                            Os(t)
                        } catch (x) {
                            a = x, Ml === t && null !== t && (Ml = t = t.return);
                            continue
                        }
                        break
                    }
                }

                function Cs() {
                    var e = jl.current;
                    return jl.current = Pr, null === e ? Pr : e
                }

                function Ts(e, a) {
                    var t = Pl;
                    Pl |= 16;
                    var i = Cs();
                    for (Ll === e && Rl === a || Ss(e, a);;) try {
                        _s();
                        break
                    } catch (n) {
                        Es(e, n)
                    }
                    if (to(), Pl = t, jl.current = i, null !== Ml) throw Error(r(261));
                    return Ll = null, Rl = 0, Il
                }

                function _s() {
                    for (; null !== Ml;) js(Ml)
                }

                function Ns() {
                    for (; null !== Ml && !_n();) js(Ml)
                }

                function js(e) {
                    var a = Yl(e.alternate, e, Dl);
                    e.memoizedProps = e.pendingProps, null === a ? Os(e) : Ml = a, Ol.current = null
                }

                function Os(e) {
                    var a = e;
                    do {
                        var t = a.alternate;
                        if (e = a.return, 0 === (2048 & a.flags)) {
                            if (null !== (t = ll(t, a, Dl))) return void(Ml = t);
                            if (24 !== (t = a).tag && 23 !== t.tag || null === t.memoizedState || 0 !== (1073741824 & Dl) || 0 === (4 & t.mode)) {
                                for (var i = 0, n = t.child; null !== n;) i |= n.lanes | n.childLanes, n = n.sibling;
                                t.childLanes = i
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

                function Ps(e) {
                    var a = Wn();
                    return $n(99, Ls.bind(null, e, a)), null
                }

                function Ls(e, a) {
                    do {
                        Rs()
                    } while (null !== es);
                    if (0 !== (48 & Pl)) throw Error(r(327));
                    var t = e.finishedWork;
                    if (null === t) return null;
                    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(r(177));
                    e.callbackNode = null;
                    var i = t.lanes | t.childLanes,
                        n = i,
                        o = e.pendingLanes & ~n;
                    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
                    for (var l = e.eventTimes, s = e.expirationTimes; 0 < o;) {
                        var u = 31 - Wa(o),
                            c = 1 << u;
                        n[u] = 0, l[u] = -1, s[u] = -1, o &= ~c
                    }
                    if (null !== ns && 0 === (24 & i) && ns.has(e) && ns.delete(e), e === Ll && (Ml = Ll = null, Rl = 0), 1 < t.flags ? null !== t.lastEffect ? (t.lastEffect.nextEffect = t, i = t.firstEffect) : i = t : i = t.firstEffect, null !== i) {
                        if (n = Pl, Pl |= 32, Ol.current = null, Ui = Ka, vi(l = gi())) {
                            if ("selectionStart" in l) s = {
                                start: l.selectionStart,
                                end: l.selectionEnd
                            };
                            else e: if (s = (s = l.ownerDocument) && s.defaultView || window, (c = s.getSelection && s.getSelection()) && 0 !== c.rangeCount) {
                                s = c.anchorNode, o = c.anchorOffset, u = c.focusNode, c = c.focusOffset;
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
                                    for (var h; v !== s || 0 !== o && 3 !== v.nodeType || (d = f + o), v !== u || 0 !== c && 3 !== v.nodeType || (p = f + c), 3 === v.nodeType && (f += v.nodeValue.length), null !== (h = v.firstChild);) b = v, v = h;
                                    for (;;) {
                                        if (v === l) break a;
                                        if (b === s && ++m === o && (d = f), b === u && ++g === c && (p = f), null !== (h = v.nextSibling)) break;
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
                        Hi = {
                            focusedElem: l,
                            selectionRange: s
                        }, Ka = !1, cs = null, fs = !1, Kl = i;
                        do {
                            try {
                                Ms()
                            } catch (C) {
                                if (null === Kl) throw Error(r(330));
                                Us(Kl, C), Kl = Kl.nextEffect
                            }
                        } while (null !== Kl);
                        cs = null, Kl = i;
                        do {
                            try {
                                for (l = e; null !== Kl;) {
                                    var y = Kl.flags;
                                    if (16 & y && he(Kl.stateNode, ""), 128 & y) {
                                        var z = Kl.alternate;
                                        if (null !== z) {
                                            var w = z.ref;
                                            null !== w && ("function" === typeof w ? w(null) : w.current = null)
                                        }
                                    }
                                    switch (1038 & y) {
                                        case 2:
                                            kl(Kl), Kl.flags &= -3;
                                            break;
                                        case 6:
                                            kl(Kl), Kl.flags &= -3, Cl(Kl.alternate, Kl);
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
                                            var k = s.alternate;
                                            zl(s), null !== k && zl(k)
                                    }
                                    Kl = Kl.nextEffect
                                }
                            } catch (C) {
                                if (null === Kl) throw Error(r(330));
                                Us(Kl, C), Kl = Kl.nextEffect
                            }
                        } while (null !== Kl);
                        if (w = Hi, z = gi(), y = w.focusedElem, l = w.selectionRange, z !== y && y && y.ownerDocument && mi(y.ownerDocument.documentElement, y)) {
                            null !== l && vi(y) && (z = l.start, void 0 === (w = l.end) && (w = z), "selectionStart" in y ? (y.selectionStart = z, y.selectionEnd = Math.min(w, y.value.length)) : (w = (z = y.ownerDocument || document) && z.defaultView || window).getSelection && (w = w.getSelection(), s = y.textContent.length, k = Math.min(l.start, s), l = void 0 === l.end ? k : Math.min(l.end, s), !w.extend && k > l && (s = l, l = k, k = s), s = pi(y, k), o = pi(y, l), s && o && (1 !== w.rangeCount || w.anchorNode !== s.node || w.anchorOffset !== s.offset || w.focusNode !== o.node || w.focusOffset !== o.offset) && ((z = z.createRange()).setStart(s.node, s.offset), w.removeAllRanges(), k > l ? (w.addRange(z), w.extend(o.node, o.offset)) : (z.setEnd(o.node, o.offset), w.addRange(z))))), z = [];
                            for (w = y; w = w.parentNode;) 1 === w.nodeType && z.push({
                                element: w,
                                left: w.scrollLeft,
                                top: w.scrollTop
                            });
                            for ("function" === typeof y.focus && y.focus(), y = 0; y < z.length; y++)(w = z[y]).element.scrollLeft = w.left, w.element.scrollTop = w.top
                        }
                        Ka = !!Ui, Hi = Ui = null, e.current = t, Kl = i;
                        do {
                            try {
                                for (y = e; null !== Kl;) {
                                    var x = Kl.flags;
                                    if (36 & x && bl(y, Kl.alternate, Kl), 128 & x) {
                                        z = void 0;
                                        var S = Kl.ref;
                                        if (null !== S) {
                                            var E = Kl.stateNode;
                                            Kl.tag, z = E, "function" === typeof S ? S(z) : S.current = z
                                        }
                                    }
                                    Kl = Kl.nextEffect
                                }
                            } catch (C) {
                                if (null === Kl) throw Error(r(330));
                                Us(Kl, C), Kl = Kl.nextEffect
                            }
                        } while (null !== Kl);
                        Kl = null, In(), Pl = n
                    } else e.current = t;
                    if (Zl) Zl = !1, es = e, as = a;
                    else
                        for (Kl = i; null !== Kl;) a = Kl.nextEffect, Kl.nextEffect = null, 8 & Kl.flags && ((x = Kl).sibling = null, x.stateNode = null), Kl = a;
                    if (0 === (i = e.pendingLanes) && (Jl = null), 1 === i ? e === rs ? os++ : (os = 0, rs = e) : os = 0, t = t.stateNode, Sn && "function" === typeof Sn.onCommitFiberRoot) try {
                        Sn.onCommitFiberRoot(xn, t, void 0, 64 === (64 & t.current.flags))
                    } catch (C) {}
                    if (vs(e, Vn()), Gl) throw Gl = !1, e = Xl, Xl = null, e;
                    return 0 !== (8 & Pl) || Yn(), null
                }

                function Ms() {
                    for (; null !== Kl;) {
                        var e = Kl.alternate;
                        fs || null === cs || (0 !== (8 & Kl.flags) ? ea(Kl, cs) && (fs = !0) : 13 === Kl.tag && _l(e, Kl) && ea(Kl, cs) && (fs = !0));
                        var a = Kl.flags;
                        0 !== (256 & a) && vl(e, Kl), 0 === (512 & a) || Zl || (Zl = !0, Qn(97, (function() {
                            return Rs(), null
                        }))), Kl = Kl.nextEffect
                    }
                }

                function Rs() {
                    if (90 !== as) {
                        var e = 97 < as ? 97 : as;
                        return as = 90, $n(e, Is)
                    }
                    return !1
                }

                function Ds(e, a) {
                    ts.push(a, e), Zl || (Zl = !0, Qn(97, (function() {
                        return Rs(), null
                    })))
                }

                function Fs(e, a) {
                    is.push(a, e), Zl || (Zl = !0, Qn(97, (function() {
                        return Rs(), null
                    })))
                }

                function Is() {
                    if (null === es) return !1;
                    var e = es;
                    if (es = null, 0 !== (48 & Pl)) throw Error(r(331));
                    var a = Pl;
                    Pl |= 32;
                    var t = is;
                    is = [];
                    for (var i = 0; i < t.length; i += 2) {
                        var n = t[i],
                            o = t[i + 1],
                            l = n.destroy;
                        if (n.destroy = void 0, "function" === typeof l) try {
                            l()
                        } catch (u) {
                            if (null === o) throw Error(r(330));
                            Us(o, u)
                        }
                    }
                    for (t = ts, ts = [], i = 0; i < t.length; i += 2) {
                        n = t[i], o = t[i + 1];
                        try {
                            var s = n.create;
                            n.destroy = s()
                        } catch (u) {
                            if (null === o) throw Error(r(330));
                            Us(o, u)
                        }
                    }
                    for (s = e.current.firstEffect; null !== s;) e = s.nextEffect, s.nextEffect = null, 8 & s.flags && (s.sibling = null, s.stateNode = null), s = e;
                    return Pl = a, Yn(), !0
                }

                function As(e, a, t) {
                    fo(e, a = dl(0, a = ul(t, a), 1)), a = ds(), null !== (e = gs(e, 1)) && (Va(e, 1, a), vs(e, a))
                }

                function Us(e, a) {
                    if (3 === e.tag) As(e, e, a);
                    else
                        for (var t = e.return; null !== t;) {
                            if (3 === t.tag) {
                                As(t, e, a);
                                break
                            }
                            if (1 === t.tag) {
                                var i = t.stateNode;
                                if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof i.componentDidCatch && (null === Jl || !Jl.has(i))) {
                                    var n = pl(t, e = ul(a, e), 1);
                                    if (fo(t, n), n = ds(), null !== (t = gs(t, 1))) Va(t, 1, n), vs(t, n);
                                    else if ("function" === typeof i.componentDidCatch && (null === Jl || !Jl.has(i))) try {
                                        i.componentDidCatch(a, e)
                                    } catch (o) {}
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function Hs(e, a, t) {
                    var i = e.pingCache;
                    null !== i && i.delete(a), a = ds(), e.pingedLanes |= e.suspendedLanes & t, Ll === e && (Rl & t) === t && (4 === Il || 3 === Il && (62914560 & Rl) === Rl && 500 > Vn() - Bl ? Ss(e, 0) : Vl |= t), vs(e, a)
                }

                function qs(e, a) {
                    var t = e.stateNode;
                    null !== t && t.delete(a), 0 === (a = 0) && (0 === (2 & (a = e.mode)) ? a = 1 : 0 === (4 & a) ? a = 99 === Wn() ? 1 : 2 : (0 === ss && (ss = Ul), 0 === (a = Ha(62914560 & ~ss)) && (a = 4194304))), t = ds(), null !== (e = gs(e, a)) && (Va(e, a, t), vs(e, t))
                }

                function Vs(e, a, t, i) {
                    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Ws(e, a, t, i) {
                    return new Vs(e, a, t, i)
                }

                function Bs(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function $s(e, a) {
                    var t = e.alternate;
                    return null === t ? ((t = Ws(e.tag, a, e.key, e.mode)).elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = a, t.type = e.type, t.flags = 0, t.nextEffect = null, t.firstEffect = null, t.lastEffect = null), t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, a = e.dependencies, t.dependencies = null === a ? null : {
                        lanes: a.lanes,
                        firstContext: a.firstContext
                    }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t
                }

                function Qs(e, a, t, i, n, o) {
                    var l = 2;
                    if (i = e, "function" === typeof e) Bs(e) && (l = 1);
                    else if ("string" === typeof e) l = 5;
                    else e: switch (e) {
                        case S:
                            return Ys(t.children, n, o, a);
                        case D:
                            l = 8, n |= 16;
                            break;
                        case E:
                            l = 8, n |= 1;
                            break;
                        case C:
                            return (e = Ws(12, t, a, 8 | n)).elementType = C, e.type = C, e.lanes = o, e;
                        case j:
                            return (e = Ws(13, t, a, n)).type = j, e.elementType = j, e.lanes = o, e;
                        case O:
                            return (e = Ws(19, t, a, n)).elementType = O, e.lanes = o, e;
                        case F:
                            return Ks(t, n, o, a);
                        case I:
                            return (e = Ws(24, t, a, n)).elementType = I, e.lanes = o, e;
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case T:
                                    l = 10;
                                    break e;
                                case _:
                                    l = 9;
                                    break e;
                                case N:
                                    l = 11;
                                    break e;
                                case P:
                                    l = 14;
                                    break e;
                                case L:
                                    l = 16, i = null;
                                    break e;
                                case M:
                                    l = 22;
                                    break e
                            }
                            throw Error(r(130, null == e ? e : typeof e, ""))
                    }
                    return (a = Ws(l, t, a, n)).elementType = e, a.type = i, a.lanes = o, a
                }

                function Ys(e, a, t, i) {
                    return (e = Ws(7, e, i, a)).lanes = t, e
                }

                function Ks(e, a, t, i) {
                    return (e = Ws(23, e, i, a)).elementType = F, e.lanes = t, e
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
                    this.tag = a, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = t, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = qa(0), this.expirationTimes = qa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = qa(0), this.mutableSourceEagerHydrationData = null
                }

                function Zs(e, a, t) {
                    var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: x,
                        key: null == i ? null : "" + i,
                        children: e,
                        containerInfo: a,
                        implementation: t
                    }
                }

                function eu(e, a, t, i) {
                    var n = a.current,
                        o = ds(),
                        l = ps(n);
                    e: if (t) {
                        a: {
                            if (Ge(t = t._reactInternals) !== t || 1 !== t.tag) throw Error(r(170));
                            var s = t;do {
                                switch (s.tag) {
                                    case 3:
                                        s = s.stateNode.context;
                                        break a;
                                    case 1:
                                        if (bn(s.type)) {
                                            s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                                            break a
                                        }
                                }
                                s = s.return
                            } while (null !== s);
                            throw Error(r(171))
                        }
                        if (1 === t.tag) {
                            var u = t.type;
                            if (bn(u)) {
                                t = zn(t, u, s);
                                break e
                            }
                        }
                        t = s
                    }
                    else t = dn;
                    return null === a.context ? a.context = t : a.pendingContext = t, (a = co(o, l)).payload = {
                        element: e
                    }, null !== (i = void 0 === i ? null : i) && (a.callback = i), fo(n, a), ms(n, l, o), l
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

                function iu(e, a) {
                    tu(e, a), (e = e.alternate) && tu(e, a)
                }

                function nu(e, a, t) {
                    var i = null != t && null != t.hydrationOptions && t.hydrationOptions.mutableSources || null;
                    if (t = new Js(e, a, null != t && !0 === t.hydrate), a = Ws(3, null, null, 2 === a ? 7 : 1 === a ? 3 : 0), t.current = a, a.stateNode = t, so(a), e[Zi] = t.current, Oi(8 === e.nodeType ? e.parentNode : e), i)
                        for (e = 0; e < i.length; e++) {
                            var n = (a = i[e])._getVersion;
                            n = n(a._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [a, n] : t.mutableSourceEagerHydrationData.push(a, n)
                        }
                    this._internalRoot = t
                }

                function ou(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function ru(e, a, t, i, n) {
                    var o = t._reactRootContainer;
                    if (o) {
                        var r = o._internalRoot;
                        if ("function" === typeof n) {
                            var l = n;
                            n = function() {
                                var e = au(r);
                                l.call(e)
                            }
                        }
                        eu(a, r, e, n)
                    } else {
                        if (o = t._reactRootContainer = function(e, a) {
                                if (a || (a = !(!(a = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== a.nodeType || !a.hasAttribute("data-reactroot"))), !a)
                                    for (var t; t = e.lastChild;) e.removeChild(t);
                                return new nu(e, 0, a ? {
                                    hydrate: !0
                                } : void 0)
                            }(t, i), r = o._internalRoot, "function" === typeof n) {
                            var s = n;
                            n = function() {
                                var e = au(r);
                                s.call(e)
                            }
                        }
                        ws((function() {
                            eu(a, r, e, n)
                        }))
                    }
                    return au(r)
                }

                function lu(e, a) {
                    var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!ou(a)) throw Error(r(200));
                    return Zs(e, a, null, t)
                }
                Yl = function(e, a, t) {
                    var i = a.lanes;
                    if (null !== e)
                        if (e.memoizedProps !== a.pendingProps || mn.current) Fr = !0;
                        else {
                            if (0 === (t & i)) {
                                switch (Fr = !1, a.tag) {
                                    case 3:
                                        Qr(a), Yo();
                                        break;
                                    case 5:
                                        Do(a);
                                        break;
                                    case 1:
                                        bn(a.type) && wn(a);
                                        break;
                                    case 4:
                                        Mo(a, a.stateNode.containerInfo);
                                        break;
                                    case 10:
                                        i = a.memoizedProps.value;
                                        var n = a.type._context;
                                        fn(Jn, n._currentValue), n._currentValue = i;
                                        break;
                                    case 13:
                                        if (null !== a.memoizedState) return 0 !== (t & a.child.childLanes) ? Jr(e, a, t) : (fn(Io, 1 & Io.current), null !== (a = ol(e, a, t)) ? a.sibling : null);
                                        fn(Io, 1 & Io.current);
                                        break;
                                    case 19:
                                        if (i = 0 !== (t & a.childLanes), 0 !== (64 & e.flags)) {
                                            if (i) return nl(e, a, t);
                                            a.flags |= 64
                                        }
                                        if (null !== (n = a.memoizedState) && (n.rendering = null, n.tail = null, n.lastEffect = null), fn(Io, Io.current), i) break;
                                        return null;
                                    case 23:
                                    case 24:
                                        return a.lanes = 0, qr(e, a, t)
                                }
                                return ol(e, a, t)
                            }
                            Fr = 0 !== (16384 & e.flags)
                        }
                    else Fr = !1;
                    switch (a.lanes = 0, a.tag) {
                        case 2:
                            if (i = a.type, null !== e && (e.alternate = null, a.alternate = null, a.flags |= 2), e = a.pendingProps, n = vn(a, pn.current), oo(a, t), n = lr(null, a, i, e, n, t), a.flags |= 1, "object" === typeof n && null !== n && "function" === typeof n.render && void 0 === n.$$typeof) {
                                if (a.tag = 1, a.memoizedState = null, a.updateQueue = null, bn(i)) {
                                    var o = !0;
                                    wn(a)
                                } else o = !1;
                                a.memoizedState = null !== n.state && void 0 !== n.state ? n.state : null, so(a);
                                var l = i.getDerivedStateFromProps;
                                "function" === typeof l && bo(a, i, l, e), n.updater = ho, a.stateNode = n, n._reactInternals = a, ko(a, i, e, t), a = $r(null, a, i, !0, o, t)
                            } else a.tag = 0, Ir(null, a, n, t), a = a.child;
                            return a;
                        case 16:
                            n = a.elementType;
                            e: {
                                switch (null !== e && (e.alternate = null, a.alternate = null, a.flags |= 2), e = a.pendingProps, n = (o = n._init)(n._payload), a.type = n, o = a.tag = function(e) {
                                        if ("function" === typeof e) return Bs(e) ? 1 : 0;
                                        if (void 0 !== e && null !== e) {
                                            if ((e = e.$$typeof) === N) return 11;
                                            if (e === P) return 14
                                        }
                                        return 2
                                    }(n), e = Xn(n, e), o) {
                                    case 0:
                                        a = Wr(null, a, n, e, t);
                                        break e;
                                    case 1:
                                        a = Br(null, a, n, e, t);
                                        break e;
                                    case 11:
                                        a = Ar(null, a, n, e, t);
                                        break e;
                                    case 14:
                                        a = Ur(null, a, n, Xn(n.type, e), i, t);
                                        break e
                                }
                                throw Error(r(306, n, ""))
                            }
                            return a;
                        case 0:
                            return i = a.type, n = a.pendingProps, Wr(e, a, i, n = a.elementType === i ? n : Xn(i, n), t);
                        case 1:
                            return i = a.type, n = a.pendingProps, Br(e, a, i, n = a.elementType === i ? n : Xn(i, n), t);
                        case 3:
                            if (Qr(a), i = a.updateQueue, null === e || null === i) throw Error(r(282));
                            if (i = a.pendingProps, n = null !== (n = a.memoizedState) ? n.element : null, uo(e, a), mo(a, i, null, t), (i = a.memoizedState.element) === n) Yo(), a = ol(e, a, t);
                            else {
                                if ((o = (n = a.stateNode).hydrate) && (Ho = Qi(a.stateNode.containerInfo.firstChild), Uo = a, o = qo = !0), o) {
                                    if (null != (e = n.mutableSourceEagerHydrationData))
                                        for (n = 0; n < e.length; n += 2)(o = e[n])._workInProgressVersionPrimary = e[n + 1], Ko.push(o);
                                    for (t = _o(a, null, i, t), a.child = t; t;) t.flags = -3 & t.flags | 1024, t = t.sibling
                                } else Ir(e, a, i, t), Yo();
                                a = a.child
                            }
                            return a;
                        case 5:
                            return Do(a), null === e && Bo(a), i = a.type, n = a.pendingProps, o = null !== e ? e.memoizedProps : null, l = n.children, Vi(i, n) ? l = null : null !== o && Vi(i, o) && (a.flags |= 16), Vr(e, a), Ir(e, a, l, t), a.child;
                        case 6:
                            return null === e && Bo(a), null;
                        case 13:
                            return Jr(e, a, t);
                        case 4:
                            return Mo(a, a.stateNode.containerInfo), i = a.pendingProps, null === e ? a.child = To(a, null, i, t) : Ir(e, a, i, t), a.child;
                        case 11:
                            return i = a.type, n = a.pendingProps, Ar(e, a, i, n = a.elementType === i ? n : Xn(i, n), t);
                        case 7:
                            return Ir(e, a, a.pendingProps, t), a.child;
                        case 8:
                        case 12:
                            return Ir(e, a, a.pendingProps.children, t), a.child;
                        case 10:
                            e: {
                                i = a.type._context,
                                n = a.pendingProps,
                                l = a.memoizedProps,
                                o = n.value;
                                var s = a.type._context;
                                if (fn(Jn, s._currentValue), s._currentValue = o, null !== l)
                                    if (s = l.value, 0 === (o = ui(s, o) ? 0 : 0 | ("function" === typeof i._calculateChangedBits ? i._calculateChangedBits(s, o) : 1073741823))) {
                                        if (l.children === n.children && !mn.current) {
                                            a = ol(e, a, t);
                                            break e
                                        }
                                    } else
                                        for (null !== (s = a.child) && (s.return = a); null !== s;) {
                                            var u = s.dependencies;
                                            if (null !== u) {
                                                l = s.child;
                                                for (var c = u.firstContext; null !== c;) {
                                                    if (c.context === i && 0 !== (c.observedBits & o)) {
                                                        1 === s.tag && ((c = co(-1, t & -t)).tag = 2, fo(s, c)), s.lanes |= t, null !== (c = s.alternate) && (c.lanes |= t), no(s.return, t), u.lanes |= t;
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
                                Ir(e, a, n.children, t),
                                a = a.child
                            }
                            return a;
                        case 9:
                            return n = a.type, i = (o = a.pendingProps).children, oo(a, t), i = i(n = ro(n, o.unstable_observedBits)), a.flags |= 1, Ir(e, a, i, t), a.child;
                        case 14:
                            return o = Xn(n = a.type, a.pendingProps), Ur(e, a, n, o = Xn(n.type, o), i, t);
                        case 15:
                            return Hr(e, a, a.type, a.pendingProps, i, t);
                        case 17:
                            return i = a.type, n = a.pendingProps, n = a.elementType === i ? n : Xn(i, n), null !== e && (e.alternate = null, a.alternate = null, a.flags |= 2), a.tag = 1, bn(i) ? (e = !0, wn(a)) : e = !1, oo(a, t), zo(a, i, n), ko(a, i, n, t), $r(null, a, i, !0, e, t);
                        case 19:
                            return nl(e, a, t);
                        case 23:
                        case 24:
                            return qr(e, a, t)
                    }
                    throw Error(r(156, a.tag))
                }, nu.prototype.render = function(e) {
                    eu(e, this._internalRoot, null, null)
                }, nu.prototype.unmount = function() {
                    var e = this._internalRoot,
                        a = e.containerInfo;
                    eu(null, e, null, (function() {
                        a[Zi] = null
                    }))
                }, aa = function(e) {
                    13 === e.tag && (ms(e, 4, ds()), iu(e, 4))
                }, ta = function(e) {
                    13 === e.tag && (ms(e, 67108864, ds()), iu(e, 67108864))
                }, ia = function(e) {
                    if (13 === e.tag) {
                        var a = ds(),
                            t = ps(e);
                        ms(e, t, a), iu(e, t)
                    }
                }, na = function(e, a) {
                    return a()
                }, Te = function(e, a, t) {
                    switch (a) {
                        case "input":
                            if (te(e, t), a = t.name, "radio" === t.type && null != a) {
                                for (t = e; t.parentNode;) t = t.parentNode;
                                for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), a = 0; a < t.length; a++) {
                                    var i = t[a];
                                    if (i !== e && i.form === e.form) {
                                        var n = on(i);
                                        if (!n) throw Error(r(90));
                                        X(i), te(i, n)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            ue(e, t);
                            break;
                        case "select":
                            null != (a = t.value) && re(e, !!t.multiple, a, !1)
                    }
                }, Le = zs, Me = function(e, a, t, i, n) {
                    var o = Pl;
                    Pl |= 4;
                    try {
                        return $n(98, e.bind(null, a, t, i, n))
                    } finally {
                        0 === (Pl = o) && (Ql(), Yn())
                    }
                }, Re = function() {
                    0 === (49 & Pl) && (function() {
                        if (null !== ns) {
                            var e = ns;
                            ns = null, e.forEach((function(e) {
                                e.expiredLanes |= 24 & e.pendingLanes, vs(e, Vn())
                            }))
                        }
                        Yn()
                    }(), Rs())
                }, De = function(e, a) {
                    var t = Pl;
                    Pl |= 2;
                    try {
                        return e(a)
                    } finally {
                        0 === (Pl = t) && (Ql(), Yn())
                    }
                };
                var su = {
                        Events: [tn, nn, on, Oe, Pe, Rs, {
                            current: !1
                        }]
                    },
                    uu = {
                        findFiberByHostInstance: an,
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
                        currentDispatcherRef: w.ReactCurrentDispatcher,
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
                        xn = fu.inject(cu), Sn = fu
                    } catch (ve) {}
                }
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = su, a.createPortal = lu, a.findDOMNode = function(e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var a = e._reactInternals;
                    if (void 0 === a) {
                        if ("function" === typeof e.render) throw Error(r(188));
                        throw Error(r(268, Object.keys(e)))
                    }
                    return e = null === (e = Ze(a)) ? null : e.stateNode
                }, a.flushSync = function(e, a) {
                    var t = Pl;
                    if (0 !== (48 & t)) return e(a);
                    Pl |= 1;
                    try {
                        if (e) return $n(99, e.bind(null, a))
                    } finally {
                        Pl = t, Yn()
                    }
                }, a.hydrate = function(e, a, t) {
                    if (!ou(a)) throw Error(r(200));
                    return ru(null, e, a, !0, t)
                }, a.render = function(e, a, t) {
                    if (!ou(a)) throw Error(r(200));
                    return ru(null, e, a, !1, t)
                }, a.unmountComponentAtNode = function(e) {
                    if (!ou(e)) throw Error(r(40));
                    return !!e._reactRootContainer && (ws((function() {
                        ru(null, null, e, !1, (function() {
                            e._reactRootContainer = null, e[Zi] = null
                        }))
                    })), !0)
                }, a.unstable_batchedUpdates = zs, a.unstable_createPortal = function(e, a) {
                    return lu(e, a, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
                }, a.unstable_renderSubtreeIntoContainer = function(e, a, t, i) {
                    if (!ou(t)) throw Error(r(200));
                    if (null == e || void 0 === e._reactInternals) throw Error(r(38));
                    return ru(e, a, t, !1, i)
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
                var i = t(791),
                    n = 60103;
                if (60107, "function" === typeof Symbol && Symbol.for) {
                    var o = Symbol.for;
                    n = o("react.element"), o("react.fragment")
                }
                var r = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    l = Object.prototype.hasOwnProperty,
                    s = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function u(e, a, t) {
                    var i, o = {},
                        u = null,
                        c = null;
                    for (i in void 0 !== t && (u = "" + t), void 0 !== a.key && (u = "" + a.key), void 0 !== a.ref && (c = a.ref), a) l.call(a, i) && !s.hasOwnProperty(i) && (o[i] = a[i]);
                    if (e && e.defaultProps)
                        for (i in a = e.defaultProps) void 0 === o[i] && (o[i] = a[i]);
                    return {
                        $$typeof: n,
                        type: e,
                        key: u,
                        ref: c,
                        props: o,
                        _owner: r.current
                    }
                }
                a.jsx = u, a.jsxs = u
            },
            117: function(e, a, t) {
                "use strict";
                var i = t(725),
                    n = 60103,
                    o = 60106;
                a.Fragment = 60107, a.StrictMode = 60108, a.Profiler = 60114;
                var r = 60109,
                    l = 60110,
                    s = 60112;
                a.Suspense = 60113;
                var u = 60115,
                    c = 60116;
                if ("function" === typeof Symbol && Symbol.for) {
                    var f = Symbol.for;
                    n = f("react.element"), o = f("react.portal"), a.Fragment = f("react.fragment"), a.StrictMode = f("react.strict_mode"), a.Profiler = f("react.profiler"), r = f("react.provider"), l = f("react.context"), s = f("react.forward_ref"), a.Suspense = f("react.suspense"), u = f("react.memo"), c = f("react.lazy")
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
                y.constructor = h, i(y, v.prototype), y.isPureReactComponent = !0;
                var z = {
                        current: null
                    },
                    w = Object.prototype.hasOwnProperty,
                    k = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function x(e, a, t) {
                    var i, o = {},
                        r = null,
                        l = null;
                    if (null != a)
                        for (i in void 0 !== a.ref && (l = a.ref), void 0 !== a.key && (r = "" + a.key), a) w.call(a, i) && !k.hasOwnProperty(i) && (o[i] = a[i]);
                    var s = arguments.length - 2;
                    if (1 === s) o.children = t;
                    else if (1 < s) {
                        for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
                        o.children = u
                    }
                    if (e && e.defaultProps)
                        for (i in s = e.defaultProps) void 0 === o[i] && (o[i] = s[i]);
                    return {
                        $$typeof: n,
                        type: e,
                        key: r,
                        ref: l,
                        props: o,
                        _owner: z.current
                    }
                }

                function S(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === n
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

                function T(e, a, t, i, r) {
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
                                case n:
                                case o:
                                    s = !0
                            }
                    }
                    if (s) return r = r(s = e), e = "" === i ? "." + C(s, 0) : i, Array.isArray(r) ? (t = "", null != e && (t = e.replace(E, "$&/") + "/"), T(r, a, t, "", (function(e) {
                        return e
                    }))) : null != r && (S(r) && (r = function(e, a) {
                        return {
                            $$typeof: n,
                            type: e.type,
                            key: a,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(r, t + (!r.key || s && s.key === r.key ? "" : ("" + r.key).replace(E, "$&/") + "/") + e)), a.push(r)), 1;
                    if (s = 0, i = "" === i ? "." : i + ":", Array.isArray(e))
                        for (var u = 0; u < e.length; u++) {
                            var c = i + C(l = e[u], u);
                            s += T(l, a, t, c, r)
                        } else if (c = function(e) {
                                return null === e || "object" !== typeof e ? null : "function" === typeof(e = d && e[d] || e["@@iterator"]) ? e : null
                            }(e), "function" === typeof c)
                            for (e = c.call(e), u = 0; !(l = e.next()).done;) s += T(l = l.value, a, t, c = i + C(l, u++), r);
                        else if ("object" === l) throw a = "" + e, Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(e).join(", ") + "}" : a));
                    return s
                }

                function _(e, a, t) {
                    if (null == e) return e;
                    var i = [],
                        n = 0;
                    return T(e, i, "", "", (function(e) {
                        return a.call(t, e, n++)
                    })), i
                }

                function N(e) {
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
                var j = {
                    current: null
                };

                function O() {
                    var e = j.current;
                    if (null === e) throw Error(p(321));
                    return e
                }
                var P = {
                    ReactCurrentDispatcher: j,
                    ReactCurrentBatchConfig: {
                        transition: 0
                    },
                    ReactCurrentOwner: z,
                    IsSomeRendererActing: {
                        current: !1
                    },
                    assign: i
                };
                a.Children = {
                    map: _,
                    forEach: function(e, a, t) {
                        _(e, (function() {
                            a.apply(this, arguments)
                        }), t)
                    },
                    count: function(e) {
                        var a = 0;
                        return _(e, (function() {
                            a++
                        })), a
                    },
                    toArray: function(e) {
                        return _(e, (function(e) {
                            return e
                        })) || []
                    },
                    only: function(e) {
                        if (!S(e)) throw Error(p(143));
                        return e
                    }
                }, a.Component = v, a.PureComponent = h, a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P, a.cloneElement = function(e, a, t) {
                    if (null === e || void 0 === e) throw Error(p(267, e));
                    var o = i({}, e.props),
                        r = e.key,
                        l = e.ref,
                        s = e._owner;
                    if (null != a) {
                        if (void 0 !== a.ref && (l = a.ref, s = z.current), void 0 !== a.key && (r = "" + a.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
                        for (c in a) w.call(a, c) && !k.hasOwnProperty(c) && (o[c] = void 0 === a[c] && void 0 !== u ? u[c] : a[c])
                    }
                    var c = arguments.length - 2;
                    if (1 === c) o.children = t;
                    else if (1 < c) {
                        u = Array(c);
                        for (var f = 0; f < c; f++) u[f] = arguments[f + 2];
                        o.children = u
                    }
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: r,
                        ref: l,
                        props: o,
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
                        $$typeof: r,
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
                        _init: N
                    }
                }, a.memo = function(e, a) {
                    return {
                        $$typeof: u,
                        type: e,
                        compare: void 0 === a ? null : a
                    }
                }, a.useCallback = function(e, a) {
                    return O().useCallback(e, a)
                }, a.useContext = function(e, a) {
                    return O().useContext(e, a)
                }, a.useDebugValue = function() {}, a.useEffect = function(e, a) {
                    return O().useEffect(e, a)
                }, a.useImperativeHandle = function(e, a, t) {
                    return O().useImperativeHandle(e, a, t)
                }, a.useLayoutEffect = function(e, a) {
                    return O().useLayoutEffect(e, a)
                }, a.useMemo = function(e, a) {
                    return O().useMemo(e, a)
                }, a.useReducer = function(e, a, t) {
                    return O().useReducer(e, a, t)
                }, a.useRef = function(e) {
                    return O().useRef(e)
                }, a.useState = function(e) {
                    return O().useState(e)
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
                var t, i, n, o;
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var r = performance;
                    a.unstable_now = function() {
                        return r.now()
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
                            } catch (i) {
                                throw setTimeout(e, 0), i
                            }
                        };
                    t = function(e) {
                        null !== u ? setTimeout(t, 0, e) : (u = e, setTimeout(f, 0))
                    }, i = function(e, a) {
                        c = setTimeout(e, a)
                    }, n = function() {
                        clearTimeout(c)
                    }, a.unstable_shouldYield = function() {
                        return !1
                    }, o = a.unstable_forceFrameRate = function() {}
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
                    }, o = function() {}, a.unstable_forceFrameRate = function(e) {
                        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : h = 0 < e ? Math.floor(1e3 / e) : 5
                    };
                    var z = new MessageChannel,
                        w = z.port2;
                    z.port1.onmessage = function() {
                        if (null !== v) {
                            var e = a.unstable_now();
                            y = e + h;
                            try {
                                v(!0, e) ? w.postMessage(null) : (g = !1, v = null)
                            } catch (t) {
                                throw w.postMessage(null), t
                            }
                        } else g = !1
                    }, t = function(e) {
                        v = e, g || (g = !0, w.postMessage(null))
                    }, i = function(e, t) {
                        b = d((function() {
                            e(a.unstable_now())
                        }), t)
                    }, n = function() {
                        p(b), b = -1
                    }
                }

                function k(e, a) {
                    var t = e.length;
                    e.push(a);
                    e: for (;;) {
                        var i = t - 1 >>> 1,
                            n = e[i];
                        if (!(void 0 !== n && 0 < E(n, a))) break e;
                        e[i] = a, e[t] = n, t = i
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
                            e: for (var i = 0, n = e.length; i < n;) {
                                var o = 2 * (i + 1) - 1,
                                    r = e[o],
                                    l = o + 1,
                                    s = e[l];
                                if (void 0 !== r && 0 > E(r, t)) void 0 !== s && 0 > E(s, r) ? (e[i] = s, e[l] = t, i = l) : (e[i] = r, e[o] = t, i = o);
                                else {
                                    if (!(void 0 !== s && 0 > E(s, t))) break e;
                                    e[i] = s, e[l] = t, i = l
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
                    T = [],
                    _ = 1,
                    N = null,
                    j = 3,
                    O = !1,
                    P = !1,
                    L = !1;

                function M(e) {
                    for (var a = x(T); null !== a;) {
                        if (null === a.callback) S(T);
                        else {
                            if (!(a.startTime <= e)) break;
                            S(T), a.sortIndex = a.expirationTime, k(C, a)
                        }
                        a = x(T)
                    }
                }

                function R(e) {
                    if (L = !1, M(e), !P)
                        if (null !== x(C)) P = !0, t(D);
                        else {
                            var a = x(T);
                            null !== a && i(R, a.startTime - e)
                        }
                }

                function D(e, t) {
                    P = !1, L && (L = !1, n()), O = !0;
                    var o = j;
                    try {
                        for (M(t), N = x(C); null !== N && (!(N.expirationTime > t) || e && !a.unstable_shouldYield());) {
                            var r = N.callback;
                            if ("function" === typeof r) {
                                N.callback = null, j = N.priorityLevel;
                                var l = r(N.expirationTime <= t);
                                t = a.unstable_now(), "function" === typeof l ? N.callback = l : N === x(C) && S(C), M(t)
                            } else S(C);
                            N = x(C)
                        }
                        if (null !== N) var s = !0;
                        else {
                            var u = x(T);
                            null !== u && i(R, u.startTime - t), s = !1
                        }
                        return s
                    } finally {
                        N = null, j = o, O = !1
                    }
                }
                var F = o;
                a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, a.unstable_continueExecution = function() {
                    P || O || (P = !0, t(D))
                }, a.unstable_getCurrentPriorityLevel = function() {
                    return j
                }, a.unstable_getFirstCallbackNode = function() {
                    return x(C)
                }, a.unstable_next = function(e) {
                    switch (j) {
                        case 1:
                        case 2:
                        case 3:
                            var a = 3;
                            break;
                        default:
                            a = j
                    }
                    var t = j;
                    j = a;
                    try {
                        return e()
                    } finally {
                        j = t
                    }
                }, a.unstable_pauseExecution = function() {}, a.unstable_requestPaint = F, a.unstable_runWithPriority = function(e, a) {
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
                    var t = j;
                    j = e;
                    try {
                        return a()
                    } finally {
                        j = t
                    }
                }, a.unstable_scheduleCallback = function(e, o, r) {
                    var l = a.unstable_now();
                    switch ("object" === typeof r && null !== r ? r = "number" === typeof(r = r.delay) && 0 < r ? l + r : l : r = l, e) {
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
                        id: _++,
                        callback: o,
                        priorityLevel: e,
                        startTime: r,
                        expirationTime: s = r + s,
                        sortIndex: -1
                    }, r > l ? (e.sortIndex = r, k(T, e), null === x(C) && e === x(T) && (L ? n() : L = !0, i(R, r - l))) : (e.sortIndex = s, k(C, e), P || O || (P = !0, t(D))), e
                }, a.unstable_wrapCallback = function(e) {
                    var a = j;
                    return function() {
                        var t = j;
                        j = a;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            j = t
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

    function t(i) {
        var n = a[i];
        if (void 0 !== n) return n.exports;
        var o = a[i] = {
            exports: {}
        };
        return e[i](o, o.exports, t), o.exports
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
            for (var i in a) t.o(a, i) && !t.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: a[i]
            })
        }, t.f = {}, t.e = function(e) {
            return Promise.all(Object.keys(t.f).reduce((function(a, i) {
                return t.f[i](e, a), a
            }), []))
        }, t.u = function(e) {
            return "static/js/" + e + ".b3f9d252.chunk.js"
        }, t.miniCssF = function(e) {}, t.o = function(e, a) {
            return Object.prototype.hasOwnProperty.call(e, a)
        },
        function() {
            var e = {},
                a = "game:";
            t.l = function(i, n, o, r) {
                if (e[i]) e[i].push(n);
                else {
                    var l, s;
                    if (void 0 !== o)
                        for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
                            var f = u[c];
                            if (f.getAttribute("src") == i || f.getAttribute("data-webpack") == a + o) {
                                l = f;
                                break
                            }
                        }
                    l || (s = !0, (l = document.createElement("script")).charset = "utf-8", l.timeout = 120, t.nc && l.setAttribute("nonce", t.nc), l.setAttribute("data-webpack", a + o), l.src = i), e[i] = [n];
                    var d = function(a, t) {
                            l.onerror = l.onload = null, clearTimeout(p);
                            var n = e[i];
                            if (delete e[i], l.parentNode && l.parentNode.removeChild(l), n && n.forEach((function(e) {
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
            t.f.j = function(a, i) {
                var n = t.o(e, a) ? e[a] : void 0;
                if (0 !== n)
                    if (n) i.push(n[2]);
                    else {
                        var o = new Promise((function(t, i) {
                            n = e[a] = [t, i]
                        }));
                        i.push(n[2] = o);
                        var r = t.p + t.u(a),
                            l = new Error;
                        t.l(r, (function(i) {
                            if (t.o(e, a) && (0 !== (n = e[a]) && (e[a] = void 0), n)) {
                                var o = i && ("load" === i.type ? "missing" : i.type),
                                    r = i && i.target && i.target.src;
                                l.message = "Loading chunk " + a + " failed.\n(" + o + ": " + r + ")", l.name = "ChunkLoadError", l.type = o, l.request = r, n[1](l)
                            }
                        }), "chunk-" + a, a)
                    }
            };
            var a = function(a, i) {
                    var n, o, r = i[0],
                        l = i[1],
                        s = i[2],
                        u = 0;
                    if (r.some((function(a) {
                            return 0 !== e[a]
                        }))) {
                        for (n in l) t.o(l, n) && (t.m[n] = l[n]);
                        if (s) s(t)
                    }
                    for (a && a(i); u < r.length; u++) o = r[u], t.o(e, o) && e[o] && e[o][0](), e[r[u]] = 0
                },
                i = self.webpackChunkgame = self.webpackChunkgame || [];
            i.forEach(a.bind(null, 0)), i.push = a.bind(null, i.push.bind(i))
        }(),
        function() {
            "use strict";
            var e = t(791),
                a = t(164);

            function i(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, i = new Array(a); t < a; t++) i[t] = e[t];
                return i
            }

            function n(e, a) {
                if (e) {
                    if ("string" === typeof e) return i(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? i(e, a) : void 0
                }
            }

            function o(e) {
                return function(e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || n(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function r(e, a) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, a) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var i, n, o = [],
                            r = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(r = (i = t.next()).done) && (o.push(i.value), !a || o.length !== a); r = !0);
                        } catch (s) {
                            l = !0, n = s
                        } finally {
                            try {
                                r || null == t.return || t.return()
                            } finally {
                                if (l) throw n
                            }
                        }
                        return o
                    }
                }(e, a) || n(e, a) || function() {
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
            var f, d;

            function p() {
                return p = Object.assign || function(e) {
                    for (var a = 1; a < arguments.length; a++) {
                        var t = arguments[a];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    }
                    return e
                }, p.apply(this, arguments)
            }

            function m(e, a) {
                if (null == e) return {};
                var t, i, n = {},
                    o = Object.keys(e);
                for (i = 0; i < o.length; i++) t = o[i], a.indexOf(t) >= 0 || (n[t] = e[t]);
                return n
            }

            function g(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, i = new Array(a); t < a; t++) i[t] = e[t];
                return i
            }

            function v(e, a) {
                var t;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (t = function(e, a) {
                            if (e) {
                                if ("string" === typeof e) return g(e, a);
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? g(e, a) : void 0
                            }
                        }(e)) || a && e && "number" === typeof e.length) {
                        t && (e = t);
                        var i = 0;
                        return function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                return (t = e[Symbol.iterator]()).next.bind(t)
            }

            function b(e, a) {
                if (e in a) {
                    for (var t = a[e], i = arguments.length, n = new Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++) n[o - 2] = arguments[o];
                    return "function" === typeof t ? t.apply(void 0, n) : t
                }
                var r = new Error('Tried to handle "' + e + '" but there is no handler defined. Only defined handlers are: ' + Object.keys(a).map((function(e) {
                    return '"' + e + '"'
                })).join(", ") + ".");
                throw Error.captureStackTrace && Error.captureStackTrace(r, b), r
            }

            function h(e) {
                var a = e.props,
                    t = e.slot,
                    i = e.defaultTag,
                    n = e.features,
                    o = e.visible,
                    r = void 0 === o || o,
                    l = e.name;
                if (r) return y(a, t, i, l);
                var s = null != n ? n : f.None;
                if (s & f.Static) {
                    var u = a.static,
                        c = void 0 !== u && u,
                        g = m(a, ["static"]);
                    if (c) return y(g, t, i, l)
                }
                if (s & f.RenderStrategy) {
                    var v, h = a.unmount,
                        z = void 0 === h || h,
                        w = m(a, ["unmount"]);
                    return b(z ? d.Unmount : d.Hidden, ((v = {})[d.Unmount] = function() {
                        return null
                    }, v[d.Hidden] = function() {
                        return y(p({}, w, {
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }), t, i, l)
                    }, v))
                }
                return y(a, t, i, l)
            }

            function y(a, t, i, n) {
                var o;
                void 0 === t && (t = {});
                var r = w(a, ["unmount", "static"]),
                    l = r.as,
                    s = void 0 === l ? i : l,
                    u = r.children,
                    c = r.refName,
                    f = void 0 === c ? "ref" : c,
                    d = m(r, ["as", "children", "refName"]),
                    p = void 0 !== a.ref ? ((o = {})[f] = a.ref, o) : {},
                    g = "function" === typeof u ? u(t) : u;
                if (d.className && "function" === typeof d.className && (d.className = d.className(t)), s === e.Fragment && Object.keys(d).length > 0) {
                    if (!(0, e.isValidElement)(g) || Array.isArray(g) && g.length > 1) throw new Error(['Passing props on "Fragment"!', "", "The current component <" + n + ' /> is rendering a "Fragment".', "However we need to passthrough the following props:", Object.keys(d).map((function(e) {
                        return "  - " + e
                    })).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((function(e) {
                        return "  - " + e
                    })).join("\n")].join("\n"));
                    return (0, e.cloneElement)(g, Object.assign({}, function(e, a, t) {
                        for (var i, n = Object.assign({}, e), o = function() {
                                var t, o = i.value;
                                void 0 !== e[o] && void 0 !== a[o] && Object.assign(n, ((t = {})[o] = function(t) {
                                    t.defaultPrevented || e[o](t), t.defaultPrevented || a[o](t)
                                }, t))
                            }, r = v(t); !(i = r()).done;) o();
                        return n
                    }(function(e) {
                        var a = Object.assign({}, e);
                        for (var t in a) void 0 === a[t] && delete a[t];
                        return a
                    }(w(d, ["ref"])), g.props, ["onClick"]), p))
                }
                return (0, e.createElement)(s, Object.assign({}, w(d, ["ref"]), s !== e.Fragment && p), g)
            }

            function z(a) {
                var t;
                return Object.assign((0, e.forwardRef)(a), {
                    displayName: null != (t = a.displayName) ? t : a.name
                })
            }

            function w(e, a) {
                void 0 === a && (a = []);
                for (var t, i = Object.assign({}, e), n = v(a); !(t = n()).done;) {
                    var o = t.value;
                    o in i && delete i[o]
                }
                return i
            }! function(e) {
                e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static"
            }(f || (f = {})),
            function(e) {
                e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden"
            }(d || (d = {}));
            var k = "undefined" !== typeof window ? e.useLayoutEffect : e.useEffect,
                x = {
                    serverHandoffComplete: !1
                };

            function S() {
                var a = (0, e.useState)(x.serverHandoffComplete),
                    t = a[0],
                    i = a[1];
                return (0, e.useEffect)((function() {
                    !0 !== t && i(!0)
                }), [t]), (0, e.useEffect)((function() {
                    !1 === x.serverHandoffComplete && (x.serverHandoffComplete = !0)
                }), []), t
            }
            var E = 0;

            function C() {
                return ++E
            }

            function T() {
                var a = S(),
                    t = (0, e.useState)(a ? C : null),
                    i = t[0],
                    n = t[1];
                return k((function() {
                    null === i && n(C())
                }), [i]), null != i ? "" + i : void 0
            }

            function _() {
                var a = (0, e.useRef)(!1);
                return (0, e.useEffect)((function() {
                    return a.current = !0,
                        function() {
                            a.current = !1
                        }
                }), []), a
            }
            var N, j, O = (0, e.createContext)(null);

            function P() {
                return (0, e.useContext)(O)
            }

            function L(a) {
                var t = a.value,
                    i = a.children;
                return e.createElement(O.Provider, {
                    value: t
                }, i)
            }

            function M() {
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
                            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
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
                            for (var a, t = v(e.splice(0)); !(a = t()).done;) {
                                var i = a.value;
                                i()
                            }
                        }
                    };
                return a
            }

            function R(e) {
                for (var a, t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                e && i.length > 0 && (a = e.classList).add.apply(a, i)
            }

            function D(e) {
                for (var a, t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                e && i.length > 0 && (a = e.classList).remove.apply(a, i)
            }

            function F(e, a, t, i, n, o) {
                var r = M(),
                    l = void 0 !== o ? function(e) {
                        var a = {
                            called: !1
                        };
                        return function() {
                            if (!a.called) return a.called = !0, e.apply(void 0, arguments)
                        }
                    }(o) : function() {};
                return D.apply(void 0, [e].concat(n)), R.apply(void 0, [e].concat(a, t)), r.nextFrame((function() {
                    D.apply(void 0, [e].concat(t)), R.apply(void 0, [e].concat(i)), r.add(function(e, a) {
                        var t = M();
                        if (!e) return t.dispose;
                        var i = getComputedStyle(e),
                            n = [i.transitionDuration, i.transitionDelay].map((function(e) {
                                var a = e.split(",").filter(Boolean).map((function(e) {
                                    return e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e)
                                })).sort((function(e, a) {
                                    return a - e
                                }))[0];
                                return void 0 === a ? 0 : a
                            })),
                            o = n[0],
                            r = n[1];
                        return 0 !== o ? t.setTimeout((function() {
                            a(j.Finished)
                        }), o + r) : a(j.Finished), t.add((function() {
                            return a(j.Cancelled)
                        })), t.dispose
                    }(e, (function(t) {
                        return D.apply(void 0, [e].concat(i, a)), R.apply(void 0, [e].concat(n)), l(t)
                    })))
                })), r.add((function() {
                    return D.apply(void 0, [e].concat(a, t, i, n))
                })), r.add((function() {
                    return l(j.Cancelled)
                })), r.dispose
            }

            function I(a) {
                return void 0 === a && (a = ""), (0, e.useMemo)((function() {
                    return a.split(" ").filter((function(e) {
                        return e.trim().length > 1
                    }))
                }), [a])
            }
            O.displayName = "OpenClosedContext",
                function(e) {
                    e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed"
                }(N || (N = {})),
                function(e) {
                    e.Finished = "finished", e.Cancelled = "cancelled"
                }(j || (j = {}));
            var A, U = (0, e.createContext)(null);
            U.displayName = "TransitionContext",
                function(e) {
                    e.Visible = "visible", e.Hidden = "hidden"
                }(A || (A = {}));
            var H = (0, e.createContext)(null);

            function q(e) {
                return "children" in e ? q(e.children) : e.current.filter((function(e) {
                    return e.state === A.Visible
                })).length > 0
            }

            function V(a) {
                var t = (0, e.useRef)(a),
                    i = (0, e.useRef)([]),
                    n = _();
                (0, e.useEffect)((function() {
                    t.current = a
                }), [a]);
                var o = (0, e.useCallback)((function(e, a) {
                        var o;
                        void 0 === a && (a = d.Hidden);
                        var r = i.current.findIndex((function(a) {
                            return a.id === e
                        })); - 1 !== r && (b(a, ((o = {})[d.Unmount] = function() {
                            i.current.splice(r, 1)
                        }, o[d.Hidden] = function() {
                            i.current[r].state = A.Hidden
                        }, o)), !q(i) && n.current && (null == t.current || t.current()))
                    }), [t, n, i]),
                    r = (0, e.useCallback)((function(e) {
                        var a = i.current.find((function(a) {
                            return a.id === e
                        }));
                        return a ? a.state !== A.Visible && (a.state = A.Visible) : i.current.push({
                                id: e,
                                state: A.Visible
                            }),
                            function() {
                                return o(e, d.Unmount)
                            }
                    }), [i, o]);
                return (0, e.useMemo)((function() {
                    return {
                        children: i,
                        register: r,
                        unregister: o
                    }
                }), [r, o, i])
            }

            function W() {}
            H.displayName = "NestingContext";
            var B = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

            function $(e) {
                for (var a, t = {}, i = v(B); !(a = i()).done;) {
                    var n, o = a.value;
                    t[o] = null != (n = e[o]) ? n : W
                }
                return t
            }
            var Q = f.RenderStrategy;

            function Y(a) {
                var t, i = a.beforeEnter,
                    n = a.afterEnter,
                    o = a.beforeLeave,
                    r = a.afterLeave,
                    l = a.enter,
                    s = a.enterFrom,
                    u = a.enterTo,
                    c = a.entered,
                    f = a.leave,
                    g = a.leaveFrom,
                    v = a.leaveTo,
                    y = m(a, ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]),
                    z = (0, e.useRef)(null),
                    w = (0, e.useState)(A.Visible),
                    x = w[0],
                    E = w[1],
                    C = y.unmount ? d.Unmount : d.Hidden,
                    _ = function() {
                        var a = (0, e.useContext)(U);
                        if (null === a) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return a
                    }(),
                    O = _.show,
                    P = _.appear,
                    M = _.initial,
                    R = function() {
                        var a = (0, e.useContext)(H);
                        if (null === a) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return a
                    }(),
                    D = R.register,
                    W = R.unregister,
                    B = T(),
                    Y = (0, e.useRef)(!1),
                    K = V((function() {
                        Y.current || (E(A.Hidden), W(B), ie.current.afterLeave())
                    }));
                k((function() {
                    if (B) return D(B)
                }), [D, B]), k((function() {
                    var e;
                    C === d.Hidden && B && (O && x !== A.Visible ? E(A.Visible) : b(x, ((e = {})[A.Hidden] = function() {
                        return W(B)
                    }, e[A.Visible] = function() {
                        return D(B)
                    }, e)))
                }), [x, B, D, W, O, C]);
                var G = I(l),
                    X = I(s),
                    J = I(u),
                    Z = I(c),
                    ee = I(f),
                    ae = I(g),
                    te = I(v),
                    ie = function(a) {
                        var t = (0, e.useRef)($(a));
                        return (0, e.useEffect)((function() {
                            t.current = $(a)
                        }), [a]), t
                    }({
                        beforeEnter: i,
                        afterEnter: n,
                        beforeLeave: o,
                        afterLeave: r
                    }),
                    ne = S();
                (0, e.useEffect)((function() {
                    if (ne && x === A.Visible && null === z.current) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                }), [z, x, ne]);
                var oe = M && !P;
                k((function() {
                    var e = z.current;
                    if (e && !oe) return Y.current = !0, O && ie.current.beforeEnter(), O || ie.current.beforeLeave(), O ? F(e, G, X, J, Z, (function(e) {
                        Y.current = !1, e === j.Finished && ie.current.afterEnter()
                    })) : F(e, ee, ae, te, Z, (function(e) {
                        Y.current = !1, e === j.Finished && (q(K) || (E(A.Hidden), W(B), ie.current.afterLeave()))
                    }))
                }), [ie, B, Y, W, K, z, oe, O, G, X, J, ee, ae, te]);
                var re = {
                        ref: z
                    },
                    le = y;
                return e.createElement(H.Provider, {
                    value: K
                }, e.createElement(L, {
                    value: b(x, (t = {}, t[A.Visible] = N.Open, t[A.Hidden] = N.Closed, t))
                }, h({
                    props: p({}, le, re),
                    defaultTag: "div",
                    features: Q,
                    visible: x === A.Visible,
                    name: "Transition.Child"
                })))
            }

            function K(a) {
                var t, i = a.show,
                    n = a.appear,
                    o = void 0 !== n && n,
                    r = a.unmount,
                    l = m(a, ["show", "appear", "unmount"]),
                    s = P();
                void 0 === i && null !== s && (i = b(s, ((t = {})[N.Open] = !0, t[N.Closed] = !1, t)));
                if (![!0, !1].includes(i)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
                var u = (0, e.useState)(i ? A.Visible : A.Hidden),
                    c = u[0],
                    f = u[1],
                    d = V((function() {
                        f(A.Hidden)
                    })),
                    g = function() {
                        var a = (0, e.useRef)(!0);
                        return (0, e.useEffect)((function() {
                            a.current = !1
                        }), []), a.current
                    }(),
                    v = (0, e.useMemo)((function() {
                        return {
                            show: i,
                            appear: o || !g,
                            initial: g
                        }
                    }), [i, o, g]);
                (0, e.useEffect)((function() {
                    i ? f(A.Visible) : q(d) || f(A.Hidden)
                }), [i, d]);
                var y = {
                    unmount: r
                };
                return e.createElement(H.Provider, {
                    value: d
                }, e.createElement(U.Provider, {
                    value: v
                }, h({
                    props: p({}, y, {
                        as: e.Fragment,
                        children: e.createElement(Y, Object.assign({}, y, l))
                    }),
                    defaultTag: e.Fragment,
                    features: Q,
                    visible: c === A.Visible,
                    name: "Transition"
                })))
            }
            K.Child = function(a) {
                var t = null !== (0, e.useContext)(U),
                    i = null !== P();
                return !t && i ? e.createElement(K, Object.assign({}, a)) : e.createElement(Y, Object.assign({}, a))
            }, K.Root = K;
            var G = t(694),
                X = t.n(G),
                J = t(184),
                Z = function(a) {
                    var t = a.isOpen,
                        i = a.message,
                        n = a.variant,
                        o = void 0 === n ? "warning" : n,
                        r = a.topMost,
                        l = void 0 !== r && r,
                        s = X()("fixed top-5 left-1/2 transform -translate-x-1/2 max-w-sm w-full shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden", {
                            "bg-rose-500 text-white": "warning" === o,
                            "bg-blue-500 text-white": "success" === o
                        }, l ? "z-20" : "");
                    return (0, J.jsx)(K, {
                        show: t,
                        as: e.Fragment,
                        enter: "ease-out duration-300 transition",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "transition ease-in duration-100",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: (0, J.jsx)("div", {
                            className: s,
                            children: (0, J.jsx)("div", {
                                className: "p-4",
                                children: (0, J.jsx)("p", {
                                    className: "text-sm text-center font-medium",
                                    children: i
                                })
                            })
                        })
                    })
                },
                ee = 2e3,
                ae = 350;
            var ne = ["oncia", "dubbi", "corra", "litro", "sparo", "carta", "nasce", "punti", "rasoi", "muffa", "ritmi", "lorde", "carne", "snodi", "borie", "calco", "crepe", "eredi", "tosai", "sugli", "disto", "dirmi", "nuovo", "mandi", "giace", "odino", "zolfo", "umana", "scali", "farne", "dogma", "rompa", "arida", "ressa", "puzzi", "vuole", "pigro", "fogne", "panno", "gioco", "rozza", "porge", "linfa", "zinco", "regia", "acino", "dighe", "stelo", "bacio", "balsa", "leghe", "omega", "nonio", "conca", "talea", "gambo", "sella", "afona", "prono", "tremo", "mallo", "piuma", "gradi", "aglio", "fulva", "dieta", "fioca", "zuppa", "nanna", "epoca", "greve", "motto", "tassa", "pochi", "folle", "rocca", "iodio", "cargo", "girai", "tenni", "gnosi", "mambo", "bachi", "omero", "mitra", "conga", "corna", "farsa", "dorma", "denso", "mania", "miele", "mille", "cicca", "falce", "frigo", "bande", "serro", "vista", "rutto", "sfila", "sesso", "sasso", "servi", "astio", "porre", "prude", "torme", "sansa", "faina", "netto", "conte", "secca", "conto", "garza", "ditta", "brina", "madre", "forum", "sudai", "boato", "culto", "spago", "curai", "badai", "roghi", "bieco", "lanci", "ovvio", "bitta", "obesi", "cavai", "massa", "ruota", "lerci", "penna", "tacco", "natia", "togli", "vinti", "mogio", "scala", "ampio", "lembo", "onice", "nomea", "stare", "giogo", "rughe", "retro", "audio", "rissa", "offro", "pecca", "testa", "turbe", "gonna", "aroma", "ruolo", "rebbi", "tanfo", "tarme", "borgo", "ragno", "tetto", "tenia", "piano", "copia", "torce", "orafe", "spera", "cucio", "viola", "sacre", "muovi", "crisi", "muoio", "liana", "curva", "tolda", "bugie", "bidet", "bozza", "altra", "parco", "salmo", "eroso", "fetta", "spine", "libro", "buffa", "sorci", "sonno", "cosmo", "laghi", "solfa", "sappi", "pugni", "adori", "mangi", "sopra", "borsa", "verga", "seppi", "pegni", "avari", "azoto", "nevai", "avolo", "peplo", "sorso", "turno", "ostia", "fauci", "secco", "avito", "amaro", "patta", "zoppo", "upupa", "nervi", "pista", "freno", "salsa", "lince", "tozza", "vacuo", "idolo", "mango", "lombi", "mucca", "bosco", "blesa", "nylon", "sabba", "monca", "fitto", "palmo", "dimmi", "peana", "casba", "ogiva", "cauto", "viale", "opino", "doghe", "rogge", "carte", "zeppa", "forca", "verbo", "prove", "cedro", "ulivo", "acuti", "larva", "feudo", "ceduo", "agave", "piaga", "brame", "nonna", "golfo", "negai", "aceto", "esito", "palla", "scavo", "marca", "cloro", "orata", "esile", "sorge", "abbai", "bizze", "spola", "sputo", "polio", "legno", "amici", "ebete", "dazio", "sinti", "bacca", "torre", "entra", "zebra", "asino", "relax", "antro", "cadde", "masai", "cucce", "beghe", "tonti", "nuoto", "sedia", "cirri", "alice", "rumba", "patio", "lizza", "frate", "udito", "balia", "curry", "fatto", "cenci", "zonzo", "pecco", "dieci", "urina", "manzo", "notai", "terzo", "gotta", "bollo", "arabi", "succo", "cenno", "spada", "poggi", "scure", "coevo", "alveo", "tacca", "avere", "mosca", "nenia", "vasca", "manca", "ancia", "barai", "anche", "furia", "invio", "univa", "viole", "aiuto", "bocce", "pezzo", "salma", "prole", "baule", "epuro", "losco", "occhi", "sacco", "voghi", "collo", "totem", "avvio", "volai", "canoa", "festa", "purga", "nuora", "orgia", "zucca", "fiabe", "seggi", "germe", "doppi", "ceffo", "gamma", "pesce", "cetra", "villa", "piace", "vello", "marna", "cesio", "setta", "fuori", "brace", "modem", "cippo", "talpa", "ambra", "lisca", "pareo", "mogli", "varie", "cella", "diade", "bisca", "radio", "udiva", "bruno", "niveo", "prora", "china", "abusa", "ricco", "cocci", "coesa", "stesa", "utero", "asola", "ninja", "metto", "cozzo", "sfizi", "tetro", "serbo", "reame", "porci", "zirlo", "visto", "fummo", "trama", "cielo", "campa", "reato", "polpa", "etnea", "fiuto", "laico", "gamba", "ciuco", "carme", "norme", "nerbo", "acume", "colon", "primo", "gente", "terme", "tedio", "pizza", "aerea", "orari", "bazza", "grana", "cesso", "scopa", "acqua", "morsa", "cocco", "volpe", "ernia", "stiro", "retto", "sunto", "posso", "certa", "puffi", "aprii", "drupa", "otite", "renna", "fallo", "taiga", "capii", "siepe", "marce", "siero", "usato", "album", "volto", "basta", "fanno", "siamo", "perno", "farro", "grama", "emoji", "magro", "dalia", "mesta", "ridda", "passi", "curia", "annuo", "tappo", "vuoti", "pigio", "balle", "abbia", "desco", "eremo", "fusto", "slogo", "ebreo", "grafo", "valgo", "fondo", "miope", "venia", "colpe", "zompo", "casse", "terga", "cenge", "onore", "fesso", "ovale", "pende", "tosse", "zuffa", "sughi", "eludo", "agape", "costa", "tasto", "bocca", "marzo", "tende", "banca", "fungo", "bagno", "fiero", "clava", "pensa", "azero", "domai", "mezzo", "svelo", "canto", "mecca", "diari", "ghiro", "gocce", "colai", "recai", "espio", "punge", "pongo", "bruti", "frase", "vulva", "fiera", "corpo", "vanga", "lieta", "smise", "fogli", "amala", "beone", "scolo", "pollo", "cunei", "rodeo", "mossa", "quasi", "sanno", "fresa", "goffe", "merlo", "verza", "sobri", "robot", "sagra", "fuoco", "abaco", "utile", "preda", "colza", "fichi", "nuche", "rebus", "svago", "liceo", "donna", "petto", "opera", "tonfo", "setto", "cachi", "tuono", "panne", "quale", "tocca", "galea", "baffi", "lenza", "tizio", "covai", "tenda", "eroga", "sorbo", "jeans", "afoso", "beato", "mosto", "stola", "detto", "punta", "posai", "umile", "spore", "arpie", "budda", "corda", "treno", "lotta", "cinta", "gergo", "lardo", "grida", "poema", "luogo", "fiato", "vinai", "bongo", "furba", "sport", "pinta", "crema", "frode", "trono", "clero", "mozzi", "dolce", "turco", "ordii", "venti", "tanto", "ovini", "colla", "conio", "vocio", "ansia", "bolla", "zolla", "serpe", "nuoce", "ruppe", "prode", "latte", "ossia", "regno", "fatuo", "teche", "corvi", "righe", "posta", "anelo", "casta", "falso", "emana", "milza", "extra", "morbo", "cuore", "cosca", "faggi", "solco", "grigi", "pinne", "suino", "astro", "volge", "asilo", "multa", "rione", "balzo", "forza", "frasi", "torso", "pulsa", "anice", "ronfa", "trito", "belva", "trota", "animo", "ormai", "bario", "busta", "dardo", "esche", "vendo", "litio", "sigla", "cigli", "panda", "sommo", "colse", "vetta", "lecci", "baldo", "alone", "rullo", "pruno", "reale", "draga", "drone", "ovile", "oblio", "pelle", "bulbo", "clone", "tappe", "firma", "sogno", "sigma", "sisma", "fonte", "diodo", "grumo", "birra", "lasci", "sceso", "pelli", "parve", "dicco", "tango", "parte", "busti", "elogi", "paura", "negli", "gechi", "ebbro", "buchi", "pulce", "etimo", "bello", "morso", "barra", "gomma", "pazzi", "vinco", "duole", "usano", "breve", "selci", "penne", "canna", "berlo", "fosco", "cesta", "senno", "nause", "cervo", "messa", "daino", "vaghe", "cecio", "drago", "umida", "etnia", "spuma", "piega", "micio", "opaco", "vibra", "tilde", "ossea", "rauca", "falco", "cifra", "studi", "tomba", "ratto", "carpa", "barca", "rocce", "sturo", "folla", "bruco", "targa", "molla", "ballo", "tagli", "bruci", "benda", "malga", "aduso", "ubbia", "vasai", "rango", "oneri", "clima", "pizzo", "selva", "carro", "croda", "velai", "cosce", "ceppo", "brano", "usare", "scemi", "evoco", "agito", "pozza", "gobba", "legge", "vieto", "desio", "belga", "adagi", "zanne", "denti", "lacca", "olive", "vegli", "facce", "atrio", "coppa", "pesto", "fante", "parti", "volta", "poppa", "disfa", "crasi", "bivio", "pance", "cerco", "celti", "nafta", "alcol", "abile", "reggo", "emulo", "avuto", "fosse", "alibi", "ombra", "cameo", "pioli", "copri", "stima", "corsa", "estro", "lucci", "greco", "funge", "piena", "tigli", "burro", "gatto", "razzo", "faida", "tosta", "lucro", "banco", "aureo", "bullo", "vermi", "censo", "lutto", "ilare", "utili", "melma", "tibia", "bisce", "colta", "umori", "celia", "cromo", "cespo", "cacio", "cappa", "badia", "malta", "parlo", "nappa", "passa", "salve", "teppa", "frana", "ponte", "letto", "etica", "sonda", "lista", "serra", "palle", "bazar", "paria", "lusso", "crepi", "cobra", "pesco", "ferro", "corte", "fisco", "baita", "polpo", "calca", "stufo", "scova", "butta", "campo", "epica", "tigna", "trave", "fasce", "quota", "causa", "imita", "porro", "forra", "pigli", "lonza", "avrai", "suono", "sozza", "lesso", "premi", "merce", "museo", "hanno", "calai", "amaca", "uggia", "sento", "volle", "gelso", "anodo", "pigna", "legai", "svito", "docce", "sosta", "rampa", "gesti", "perso", "coffa", "mughi", "bioma", "nesso", "soldi", "preso", "glifo", "lenta", "sesto", "gigli", "hotel", "bardo", "archi", "tallo", "nocca", "sodio", "fibra", "ugola", "morti", "mirto", "erica", "testo", "ninfa", "mazza", "alate", "oziai", "lesta", "basso", "piada", "ardua", "slego", "mappa", "bucce", "vieni", "grano", "culla", "zitti", "oppio", "tarlo", "fiume", "rotta", "degna", "scafo", "fango", "tinta", "carie", "arare", "carso", "bordi", "rupia", "odore", "prete", "udire", "colpi", "magma", "presa", "omone", "segno", "sarti", "cenai", "salpo", "oltre", "duchi", "genio", "forse", "abate", "fiala", "cacao", "perla", "pinza", "rubai", "pelai", "ritto", "vespa", "ruzzo", "aspri", "amavo", "bimba", "adito", "felpa", "palma", "croce", "morda", "etere", "maghi", "porta", "cento", "esame", "ligio", "fughe", "icona", "piede", "unico", "grata", "passo", "apice", "conci", "giuro", "forma", "limbo", "fossa", "zecca", "colmo", "forte", "costi", "masso", "mensa", "casco", "liuto", "afidi", "leggo", "torve", "raggi", "porto", "cruda", "lecca", "gesso", "visse", "samba", "etano", "bambu", "cozze", "oliai", "palio", "orcio", "media", "lunga", "linea", "orchi", "tesse", "sfuso", "guado", "stona", "metro", "tulle", "toppa", "acero", "rospo", "foibe", "pesca", "blusa", "alghe", "usura", "cheta", "adipe", "vanno", "frega", "prima", "basco", "riuso", "edema", "finto", "chela", "tarpo", "tardi", "vento", "vetro", "fermo", "panna", "sette", "becco", "barba", "calze", "sotto", "zaino", "croco", "tempo", "vezzo", "foche", "spiga", "ameni", "egizi", "sbuca", "stile", "circa", "cisti", "sarde", "prato", "marea", "aneto", "lepri", "mafia", "solai", "tasca", "zeppo", "versi", "manna", "perde", "clown", "annoi", "calli", "pacca", "citai", "calci", "lacci", "tirai", "ferie", "rosea", "evaso", "avido", "elica", "vizio", "siedi", "dossi", "colui", "parto", "cagna", "cuoca", "amato", "fammi", "capra", "arnia", "tordo", "saghe", "video", "risma", "suore", "santa", "soffi", "fauna", "fobia", "tatto", "isola", "babbo", "penai", "celai", "evita", "muone", "legna", "vizzo", "nassa", "esule", "bigia", "molti", "curda", "paese", "esoso", "paggi", "trino", "finge", "erigo", "sfida", "fremo", "pieve", "atomo", "erano", "inizi", "osare", "soave", "linda", "tecno", "peste", "gusci", "cuoio", "raspa", "tersa", "vacca", "manto", "danza", "guida", "mosci", "efebo", "ruspa", "circo", "regio", "suola", "gogna", "lemma", "scudo", "poeta", "errai", "alito", "bieta", "valle", "duale", "misto", "russo", "folto", "colma", "briga", "pampa", "biada", "venga", "ricci", "batte", "elevo", "meteo", "agire", "ratti", "schwa", "lieve", "parso", "nutre", "senza", "lagna", "stato", "tasso", "berci", "sidro", "creta", "razza", "crani", "marmo", "stiva", "padre", "bravi", "croma", "busso", "suolo", "obolo", "corso", "verde", "droga", "tutte", "teste", "sarei", "gonfi", "vitto", "sorto", "ostro", "torta", "rombo", "gemma", "addio", "fieno", "spesa", "ganci", "obice", "prego", "seguo", "terra", "cinse", "pasto", "resto", "tonda", "buono", "probo", "emiro", "aorta", "remai", "seghe", "fumai", "pinna", "disco", "mamma", "umore", "laser", "rubli", "educa", "andai", "cruna", "rossa", "calva", "leone", "cassa", "posto", "figli", "botti", "agile", "abito", "lotti", "sposi", "trova", "slavi", "palco", "vispa", "sfera", "ciclo", "tento", "sciai", "senso", "sazio", "polso", "foste", "ovaia", "alzai", "ascia", "optai", "magia", "ebano", "marre", "scade", "cigno", "lavai", "salto", "ponfo", "flora", "gonzo", "fissa", "tieni", "cieca", "direi", "ladro", "arena", "omise", "tolta", "calce", "brodo", "serie", "pompa", "sosia", "veste", "panca", "bomba", "pesai", "tonno", "iella", "acari", "paghe", "svaso", "canea", "iride", "micce", "cambi", "sauna", "agata", "corto", "amore", "terna", "urlai", "ameba", "monte", "varco", "saggi", "serio", "desta", "gozzo", "tatuo", "gazza", "sbafo", "coppi", "danno", "tuffo", "roche", "randa", "patto", "sfamo", "sordi", "credo", "kappa", "istmo", "furto", "creai", "ronda", "sugna", "karma", "largo", "torba", "edile", "edera", "esigo", "colgo", "sfogo", "adula", "apnea", "vanto", "grato", "palpo", "beffa", "globo", "ghisa", "dillo", "sfumo", "comma", "duomo", "pozzi", "basto", "virus", "guano", "adone", "gorgo", "spira", "ribes", "picco", "svevo", "ganzo", "koala", "falde", "cibai", "fiore", "somma", "scusa", "matto", "lance", "cerro", "uscio", "saldo", "babau", "flebo", "greto", "guaio", "ovulo", "ulula", "tengo", "lampo", "cavia", "ovest", "gassa", "latta", "raspo", "camma", "lasco", "bruma", "cotta", "burla", "mento", "stavi", "unire", "fruga", "sbavi", "dammi", "nulla", "nembo", "turpe", "speck", "vigna", "torto", "pacco", "chilo", "ozono", "gusto", "fregi", "giada", "crine", "toghe", "birba", "torni", "getto", "mazzo", "talco", "rogna", "mutuo", "mance", "podio", "verso", "pausa", "dotta", "botte", "pasta", "brado", "savio", "piove", "privo", "assai", "abeti", "pappa", "gallo", "igneo", "zampa", "forno", "grave", "plico", "mondo", "scena", "prosa", "felce", "stadi", "agone", "conta", "gioia", "calme", "amido", "aereo", "scopo", "esodo", "cardo", "gnomo", "spelo", "narri", "tigre", "orale", "notte", "giova", "retta", "tenue", "curio", "omino", "lobby", "usavi", "lisci", "avena", "menta", "dorso", "tazza", "caldo", "nozze", "armai", "plebe", "spazi", "riffa", "zozze", "zappa", "unito", "leale", "socio", "vinse", "giara", "rende", "acida", 'garbo"],ne=["abaco', "abata", "abate", "abati", "abato", "abavi", "abavo", "abaya", "abbai", "abbia", "abbui", "abete", "abeti", "abile", "abili", "abita", "abiti", "abito", "abuna", "abusa", "abusi", "abuso", "acari", "acaro", "acati", "acato", "acazi", "accia", "accio", "aceri", "acero", "acese", "acesi", "aceta", "aceti", "aceto", "achea", "achee", "achei", "acheo", "acida", "acide", "acidi", "acido", "acile", "acili", "acini", "acino", "acori", "acoro", "acqua", "acque", "acqui", "acquo", "actea", "actee", "acuii", "acume", "acumi", "acuta", "acute", "acuti", "acuto", "adagi", "adale", "adali", "addai", "addii", "addio", "addua", "addui", "adduo", "adesa", "adese", "adesi", "adeso", "adima", "adimi", "adimo", "adipe", "adipi", "adira", "adire", "adiri", "adiro", "adita", "adite", "aditi", "adito", "adiva", "adivi", "adivo", "adobe", "adona", "adone", "adoni", "adono", "adora", "adori", "adoro", "adoxa", "adoxe", "adula", "aduli", "adulo", "aduna", "aduni", "aduno", "adusa", "aduse", "adusi", "aduso", "aequo", "aerai", "aerea", "aeree", "aerei", "aereo", "afaca", "afata", "afate", "afati", "afato", "afeli", "afeta", "afeti", "afide", "afidi", "afnii", "afnio", "afona", "afone", "afoni", "afono", "afosa", "afose", "afosi", "afoso", "agama", "agame", "agami", "agamo", "agape", "agapi", "agata", "agate", "agave", "agavi", "aggio", "agiai", "agile", "agili", "agino", "agire", "agita", "agite", "agiti", "agito", "agiva", "agivi", "agivo", "aglio", "agone", "agoni", "agora", "aguti", "aiace", "aiaci", "aiata", "aiate", "aiola", "aiole", "aioli", "aiolo", "aione", "aioni", "aitai", "aiuga", "aiuta", "aiuti", "aiuto", "aizza", "aizzi", "aizzo", "alaci", "alala", "alale", "alali", "alalo", "alami", "alane", "alani", "alano", "alare", "alari", "alata", "alate", "alati", "alato", "alava", "alavi", "alavo", "albio", "album", "alcea", "alcee", "alche", "alcol", "aldio", "aleph", "alesa", "alese", "alesi", "aleso", "alghe", "algia", "algie", "aliai", "alias", "alibi", "alice", "alici", "alida", "alide", "alidi", "alido", "alimi", "alimo", "alino", "alita", "alite", "aliti", "alito", "allea", "allee", "allei", "alleo", "almea", "almee", "alobi", "alona", "alone", "aloni", "alono", "alosa", "alose", "alpha", "altea", "altee", "altra", "altre", "altri", "altro", "alula", "alule", "alvei", "alveo", "alzai", "amaca", "amaci", "amala", "amale", "amali", "amalo", "amami", "amane", "amano", "amara", "amare", "amari", "amaro", "amasi", "amata", "amate", "amati", "amato", "amava", "amavi", "amavo", "ambia", "ambii", "ambio", "ambra", "ambre", "ameba", "amebe", "amena", "amene", "ameni", "ameno", "amica", "amici", "amico", "amida", "amide", "amidi", "amido", "amiga", "amigo", "amile", "amili", "amina", "amine", "amino", "ammai", "amnii", "amnio", "amomi", "amomo", "amore", "amori", "ampia", "ampie", "ampio", "ampli", "amuli", "amulo", "anale", "anali", "anari", "anche", "ancia", "andai", "anela", "anele", "aneli", "anelo", "aneti", "aneto", "angla", "angle", "angli", "anglo", "angue", "angui", "anice", "anici", "anile", "anili", "anima", "anime", "animi", "animo", "annoi", "annua", "annue", "annui", "annuo", "anobi", "anodi", "anodo", "anona", "anone", "ansai", "ansia", "ansie", "ansio", "antri", "antro", "anura", "anure", "anuri", "anuro", "aonia", "aonie", "aonio", "aorta", "aorte", "apale", "apali", "apate", "apice", "apici", "apide", "apidi", "apina", "apine", "apira", "apire", "apiri", "apiro", "apnea", "apnee", "apoda", "apode", "apodi", "apodo", "appai", "appia", "appie", "appio", "aprii", "apula", "apule", "apuli", "apulo", "araba", "arabe", "arabi", "arabo", "araci", "arala", "arale", "arali", "aralo", "arama", "arame", "arami", "aramo", "arane", "arano", "arara", "arare", "arata", "arate", "arati", "arato", "arava", "aravi", "aravo", "arcai", "arche", "archi", "arcua", "arcui", "arcuo", "ardea", "ardee", "ardii", "ardua", "ardue", "ardui", "arduo", "areai", "areca", "arena", "arene", "areni", "areno", "arese", "aresi", "argea", "argee", "argei", "argeo", "arghi", "argon", "arida", "aride", "aridi", "arido", "arile", "arili", "arino", "armai", "arnia", "arnie", "aroma", "aromi", "arpia", "arpie", "arsii", "artai", "artoa", "artoe", "artoi", "artoo", "asada", "asado", "asana", "asari", "asaro", "aschi", "ascia", "ascio", "asili", "asilo", "asina", "asine", "asini", "asino", "asola", "asole", "asoli", "asolo", "aspra", "aspre", "aspri", "aspro", "assai", "astia", "astio", "astri", "astro", "atava", "atave", "atavi", "atavo", "atele", "ateli", "atomi", "atomo", "atona", "atone", "atoni", "atono", "atout", "atrii", "atrio", "attai", "attea", "attee", "attei", "atteo", "attua", "attui", "attuo", "audio", "audit", "auffa", "augna", "augni", "augno", "aulii", "aurai", "aurea", "auree", "aurei", "aureo", "avana", "avara", "avare", "avari", "avaro", "avena", "avene", "avere", "averi", "avete", "aveva", "avevi", "avevo", "avida", "avide", "avidi", "avido", "avita", "avite", "aviti", "avito", "avoca", "avoco", "avola", "avole", "avoli", "avolo", "avori", "avrai", "avrei", "avuta", "avute", "avuti", "avuto", "avvia", "avvii", "avvio", "axone", "axoni", "azera", "azere", "azeri", "azero", "azide", "azidi", "azima", "azime", "azimi", "azimo", "azina", "azine", "azoni", "azota", "azoti", "azoto", "azuki", "babao", "babau", "babbi", "babbo", "bacai", "bacca", "bacco", "bachi", "bacia", "bacie", "bacii", "bacio", "badai", "badge", "badgi", "badia", "badie", "baele", "baeli", "baffi", "baffo", "bagel", "bagli", "bagna", "bagne", "bagni", "bagno", "baiai", "baili", "bailo", "baino", "baita", "baite", "bakka", "bakke", "bakki", "bakko", "balba", "balbe", "balbi", "balbo", "balco", "balda", "balde", "baldi", "baldo", "balia", "balie", "balii", "balio", "balla", "balle", "balli", "ballo", "balma", "balme", "balsa", "balse", "balta", "balte", "balti", "balto", "balza", "balze", "balzi", "balzo", "bamba", "bambe", "bambi", "bambo", "bambu", "banaa", "banae", "banai", "banao", "banca", "banco", "banda", "bande", "bandi", "bando", "bangi", "banjo", "banna", "banni", "banno", "bantu", "barai", "barba", "barbe", "barbi", "barbo", "barca", "barco", "barda", "barde", "bardi", "bardo", "baria", "barie", "barii", "bario", "barra", "barre", "barri", "barro", "basai", "basca", "basco", "basii", "bassa", "basse", "bassi", "basso", "basta", "baste", "basti", "basto", "batta", "batte", "batti", "batto", "batua", "baula", "baule", "bauli", "baulo", "bauta", "baute", "bazar", "bazza", "bazze", "beaci", "beala", "beale", "beali", "bealo", "beami", "beane", "beano", "beare", "beata", "beate", "beati", "beato", "beava", "beavi", "beavo", "bebop", "becca", "becco", "beffa", "beffe", "beffi", "beffo", "begai", "beggi", "beghe", "beghi", "begia", "begli", "beige", "beigi", "beino", "beisa", "beise", "belai", "belga", "belgi", "belii", "belio", "bella", "belle", "belli", "bello", "belta", "belva", "belve", "benai", "benda", "bende", "bendi", "bendo", "benna", "benne", "beola", "beole", "beona", "beone", "beoni", "beota", "beote", "beoti", "berci", "berla", "berle", "berli", "berlo", "berma", "berme", "bermi", "berne", "bersi", "berta", "berte", "berti", "bervi", "besce", "besci", "bessa", "besse", "bessi", "besso", "betta", "bette", "beuta", "beute", "bevei", "bevve", "bevvi", "bezzi", "bezzo", "biada", "biade", "biadi", "biado", "biava", "biave", "biavi", "biavo", "bibbi", "biche", "bidet", "bieca", "bieco", "bieta", "biete", "biffa", "biffe", "biffi", "biffo", "bighe", "bighi", "bigia", "bigie", "bigio", "bigne", "bilia", "bilie", "bimba", "bimbe", "bimbi", "bimbo", "binai", "binda", "binde", "bindi", "binga", "binge", "bingo", "biodi", "biodo", "bioma", "biomi", "biosi", "biova", "biove", "birba", "birbe", "birbi", "birbo", "birce", "birci", "birra", "birre", "birri", "birro", "bisca", "bisce", "bissa", "bissi", "bisso", "bista", "biste", "bisti", "bitta", "bitte", "bitti", "bitto", "biuta", "biute", "biuti", "biuto", "bivio", "bizza", "bizze", "blesa", "blese", "blesi", "bleso", "blini", "blitz", "blumi", "blumo", "blusa", "bluse", "boari", "boaro", "boati", "boato", "bobba", "bobbi", "bobbo", "bocca", "bocce", "bocci", "bocco", "bocia", "boema", "boeme", "boemi", "boemo", "boera", "boere", "boeri", "boero", "boghe", "boide", "boidi", "boite", "boldi", "boldo", "bolge", "bolla", "bolle", "bolli", "bollo", "bolsa", "bolse", "bolsi", "bolso", "bomba", "bombe", "bombi", "bombo", "bongo", "bonne", "bonta", "bonza", "bonze", "bonzi", "bonzo", "borda", "borde", "bordi", "bordo", "borea", "borei", "borgo", "boria", "borie", "borii", "borio", "borni", "borra", "borre", "borri", "borro", "borsa", "borse", "bosco", "bossi", "bosso", "botri", "botro", "botta", "botte", "botti", "botto", "boule", "boxai", "bozza", "bozze", "bozzi", "bozzo", "braca", "brace", "braci", "braco", "brada", "brade", "bradi", "brado", "braga", "brago", "braii", "brama", "brame", "brami", "bramo", "brani", "brano", "brasa", "brasi", "braso", "brava", "brave", "bravi", "bravo", "bremi", "bremo", "breva", "breve", "brevi", "brice", "brici", "brida", "bride", "briga", "brige", "brigi", "brigo", "brina", "brine", "brini", "brino", "broda", "brode", "brodi", "brodo", "broge", "brogi", "broli", "brolo", "bromi", "bromo", "brova", "brovi", "brovo", "bruca", "bruci", "bruco", "brugi", "brugo", "bruii", "bruma", "brume", "bruna", "brune", "bruni", "bruno", "bruta", "brute", "bruti", "bruto", "bruzi", "bubai", "bucai", "bucce", "bucci", "buche", "buchi", "bucio", "budda", "buddi", "bufai", "buffa", "buffe", "buffi", "buffo", "bugia", "bugie", "bugio", "bugli", "bugna", "bugne", "bugni", "bugno", "buina", "buine", "bulai", "bulbi", "bulbo", "bulla", "bulle", "bulli", "bullo", "bumba", "bumbe", "buona", "buone", "buoni", "buono", "burba", "burbe", "burga", "burka", "burla", "burle", "burli", "burlo", "burqa", "burri", "burro", "busaa", "busae", "busai", "busao", "busca", "busco", "bushi", "bussa", "busse", "bussi", "busso", "busta", "buste", "busti", "busto", "butta", "butte", "butti", "butto", "buzza", "buzze", "buzzi", "buzzo", "bwaka", "bwana", "caaba", "cabla", "cabli", "cablo", "cabra", "cabri", "cabro", "cacai", "cacao", "cacca", "cacce", "cacci", "cache", "cachi", "cacia", "cacio", "cacti", "cacto", "cadde", "caddi", "cadmi", "caffa", "caffe", "caffi", "caffo", "cafra", "cafre", "cafri", "cafro", "cagai", "caghi", "cagli", "cagna", "cagne", "caiba", "caibe", "caina", "caine", "caini", "caino", "calai", "calao", "calca", "calce", "calci", "calco", "calda", "calde", "caldi", "caldo", "calia", "calie", "calla", "calle", "calli", "callo", "calma", "calme", "calmi", "calmo", "calse", "calta", "calte", "calva", "calve", "calvi", "calvo", "calza", "calze", "calzi", "calzo", "cambi", "camei", "cameo", "camma", "camme", "campa", "campi", "campo", "canai", "canea", "canee", "canga", "cange", "cangi", "canna", "canne", "canni", "canno", "canoa", "canoe", "cansa", "cansi", "canso", "canta", "canti", "canto", "capai", "capii", "cappa", "cappe", "cappi", "cappo", "capra", "capre", "capri", "capro", "capta", "capti", "capto", "carca", "carco", "carda", "carde", "cardi", "cardo", "cargo", "caria", "carie", "cario", "carme", "carmi", "carna", "carne", "carni", "carno", "carpa", "carpe", "carpi", "carpo", "carri", "carro", "carsi", "carso", "carta", "carte", "carvi", "casba", "casbe", "casca", "casci", "casco", "casei", "caseo", "caspa", "caspe", "caspi", "cassa", "casse", "cassi", "casso", "casta", "caste", "casti", "casto", "catta", "catte", "catti", "catto", "caule", "cauli", "cauri", "causa", "cause", "causi", "causo", "cauta", "caute", "cauti", "cauto", "cavai", "cavea", "cavee", "cavia", "cavie", "cazza", "cazze", "cazzi", "cazzo", "cecai", "cecca", "ceche", "cechi", "cecio", "cedei", "cedra", "cedri", "cedro", "cedua", "cedue", "cedui", "ceduo", "ceffa", "ceffi", "ceffo", "ceiba", "ceibe", "celai", "celia", "celie", "celio", "cella", "celle", "celli", "cello", "celta", "celte", "celti", "celto", "celzi", "cenai", "cenci", "cenge", "cengi", "cenna", "cenni", "cenno", "censi", "censo", "cento", "ceppa", "ceppe", "ceppi", "ceppo", "cerai", "cerca", "cerci", "cerco", "cerea", "ceree", "cerei", "cereo", "cerii", "cerio", "cerna", "cerne", "cerni", "cerno", "cerri", "cerro", "certa", "certe", "certi", "certo", "cerva", "cerve", "cervi", "cervo", "cesia", "cesie", "cesio", "cespi", "cespo", "cessa", "cesse", "cessi", "cesso", "cesta", "ceste", "cesti", "cesto", "cetra", "cetre", "chela", "chele", "cheli", "cheta", "chete", "cheti", "cheto", "chile", "chili", "chilo", "chimi", "chimo", "china", "chine", "chini", "chino", "chita", "chiti", "chito", "cholo", "chope", "ciaba", "ciabi", "ciabo", "ciana", "ciane", "ciani", "ciano", "ciati", "ciato", "ciazi", "cibai", "cicca", "cicce", "cicci", "cicco", "ciche", "cicli", "ciclo", "cidia", "cidie", "cidio", "cieca", "cieco", "cieli", "cielo", "ciesa", "ciese", "cifra", "cifre", "cifri", "cifro", "cigli", "cigna", "cigne", "cigni", "cigno", "cimai", "cimba", "cimbe", "cince", "cinga", "cinge", "cingi", "cingo", "cinse", "cinsi", "cinta", "cinte", "cinti", "cinto", "cinzi", "cioce", "ciofi", "ciofo", "cippi", "cippo", "cipri", "circa", "circe", "circi", "circo", "cirri", "cirro", "cisio", "cispa", "cispe", "cista", "ciste", "cisti", "cisto", "citai", "citta", "citte", "citti", "citto", "ciuca", "ciuco", "ciula", "ciuli", "ciulo", "clade", "cladi", "clama", "clami", "clamo", "clava", "clave", "clavi", "clavo", "cleri", "clero", "clima", "climi", "cline", "clini", "clino", "clivi", "clivo", "clona", "clone", "cloni", "clono", "clora", "clori", "cloro", "clown", "cloze", "clune", "cluni", "cnidi", "coala", "coana", "coane", "coati", "cobea", "cobee", "cobla", "coble", "cobra", "cocca", "cocce", "cocci", "cocco", "coche", "codia", "codio", "coesa", "coese", "coesi", "coeso", "coeva", "coeve", "coevi", "coevo", "coffa", "coffe", "cofta", "cofte", "cofti", "cofto", "cogli", "cogni", "cogno", "coiai", "coipi", "coipo", "coire", "coita", "coite", "coiti", "coito", "coiva", "coivi", "coivo", "colai", "colca", "colco", "colei", "colga", "colgo", "colia", "colie", "colla", "colle", "colli", "collo", "colma", "colme", "colmi", "colmo", "colon", "colpa", "colpe", "colpi", "colpo", "colse", "colsi", "colta", "colte", "colti", "colto", "colui", "colza", "colze", "comba", "combe", "combo", "comma", "commi", "commo", "compi", "conca", "conce", "conci", "conga", "congi", "conia", "conie", "conio", "conne", "conni", "conno", "consa", "conso", "conta", "conte", "conti", "conto", "cooba", "coobi", "coobo", "copia", "copie", "copio", "coppa", "coppe", "coppi", "coppo", "copra", "copre", "copri", "copro", "copta", "copte", "copti", "copto", "coque", "corai", "corba", "corbe", "corca", "corco", "corda", "corde", "corea", "coree", "corei", "coreo", "corio", "cormi", "cormo", "corna", "corni", "corno", "corpi", "corpo", "corra", "corre", "corri", "corro", "corsa", "corse", "corsi", "corso", "corta", "corte", "corti", "corto", "corvi", "corvo", "cosai", "cosca", "cosce", "cosci", "cosfi", "cosmi", "cosmo", "cosse", "cossi", "cosso", "costa", "coste", "costi", "costo", "cotta", "cotte", "cotti", "cotto", "cousi", "couso", "covai", "covid", "cozza", "cozze", "cozzi", "cozzo", "crace", "craci", "crani", "crapa", "crape", "crasi", "creai", "creda", "crede", "credi", "credo", "crema", "creme", "cremi", "cremo", "crena", "crene", "creni", "creno", "crepa", "crepe", "crepi", "crepo", "cresi", "creso", "creta", "crete", "crime", "crimi", "crina", "crine", "crini", "crino", "crisi", "croce", "croci", "croco", "croda", "crode", "croia", "croie", "croio", "croma", "crome", "cromi", "cromo", "crono", "cruci", "cruda", "crude", "crudi", "crudo", "cruna", "crune", "ctoni", "cubai", "cubia", "cubie", "cucca", "cucce", "cucci", "cucco", "cucia", "cucii", "cucio", "cueva", "cugna", "cugne", "culai", "culla", "culle", "culli", "cullo", "culmi", "culmo", "culpa", "culta", "culte", "culti", "culto", "cunca", "cunce", "cunci", "cunco", "cunei", "cuneo", "cuoca", "cuoce", "cuoci", "cuoco", "cuoia", "cuoio", "cuora", "cuore", "cuori", "curai", "curda", "curde", "curdi", "curdo", "curia", "curie", "curii", "curio", "curri", "curro", "curry", "curva", "curve", "curvi", "curvo", "cusco", "cussi", "cusso", "dacci", "dache", "dacia", "dacie", "dafne", "dafni", "daghe", "dagli", "daina", "daine", "daini", "daino", "dalai", "dalia", "dalie", "dalla", "dalle", "dalli", "dallo", "damai", "damma", "damme", "dammi", "dance", "danda", "dande", "dando", "danna", "danne", "danni", "danno", "dante", "danti", "danza", "danze", "danzi", "danzo", "darai", "darci", "dardi", "dardo", "darei", "darla", "darle", "darli", "darlo", "darmi", "darne", "darsi", "darti", "darvi", "daspo", "datai", "datti", "dauni", "dazia", "dazio", "debba", "debbi", "debbo", "deche", "deghi", "degli", "degna", "degne", "degni", "degno", "delia", "delie", "delio", "della", "delle", "dello", "delta", "demmo", "densa", "dense", "densi", "denso", "denta", "dente", "denti", "dento", "derby", "derma", "dermi", "derno", "desco", "desia", "desii", "desio", "dessa", "desse", "dessi", "desso", "desta", "deste", "desti", "desto", "detox", "detta", "dette", "detti", "detto", "devia", "devie", "devii", "devio", "diade", "diadi", "diale", "diali", "diamo", "diana", "diane", "diano", "diapa", "diape", "diapi", "diapo", "diari", "diate", "diaza", "diaze", "diazi", "diazo", "dicai", "dicci", "dicco", "diche", "dichi", "dicta", "dieci", "diede", "diedi", "diene", "dieni", "dieri", "diesa", "diesi", "dieso", "dieta", "diete", "dieti", "dieto", "dighe", "digli", "dildi", "dildo", "dilla", "dille", "dilli", "dillo", "dimmi", "dimoi", "dindi", "dindo", "dingo", "dinka", "dinne", "diodi", "diodo", "dioli", "diolo", "diosi", "dipoi", "dirai", "dirci", "direi", "dirla", "dirle", "dirli", "dirlo", "dirmi", "dirne", "dirsi", "dirti", "dirvi", "disco", "disfa", "disfi", "disfo", "disia", "disii", "disio", "disse", "dissi", "dista", "disti", "disto", "ditta", "ditte", "ditti", "diula", "djaga", "doagi", "doari", "dobla", "doble", "dobli", "doblo", "dobra", "docce", "docci", "docmi", "dogai", "doghe", "doghi", "dogli", "dogma", "dogmi", "dogre", "dolai", "dolca", "dolce", "dolci", "dolco", "dolga", "dolgo", "dolio", "dolse", "dolsi", "dolta", "dolte", "dolti", "dolto", "domai", "domma", "dommi", "donai", "donde", "donna", "donne", "donni", "donno", "dopai", "doppi", "dorai", "doria", "dorio", "dorma", "dorme", "dormi", "dormo", "dorsi", "dorso", "dosai", "dossi", "dosso", "dotai", "dotta", "dotte", "dotti", "dotto", "doula", "doule", "dovei", "draba", "drabe", "draco", "draga", "drago", "drena", "dreni", "dreno", "drive", "droga", "drogo", "droma", "drome", "dromi", "dromo", "drone", "droni", "druda", "drude", "drudi", "drudo", "drupa", "drupe", "drusa", "druse", "drusi", "druso", "duagi", "duale", "duali", "dubbi", "ducai", "ducea", "ducee", "duchi", "duina", "duine", "duini", "duino", "dulia", "dulie", "duole", "duoli", "duolo", "duomi", "duomo", "dupla", "duple", "dupli", "duplo", "durai", "durio", "durra", "durre", "duvet", "dviii", "ebani", "ebano", "ebbio", "ebbra", "ebbre", "ebbri", "ebbro", "ebeni", "ebeno", "ebeta", "ebete", "ebeti", "ebeto", "ebola", "ebole", "ebook", "ebrea", "ebree", "ebrei", "ebreo", "ebuli", "ebulo", "echei", "echeo", "echio", "ecidi", "edace", "edaci", "edema", "edemi", "edera", "edere", "edile", "edili", "edipi", "edipo", "edita", "edite", "editi", "edito", "edona", "edone", "edoni", "edono", "educa", "educe", "educi", "educo", "edule", "eduli", "efebi", "efebo", "efesi", "efori", "eforo", "egena", "egene", "egeni", "egeno", "egida", "egide", "egira", "egire", "egizi", "ekiti", "elafe", "elafi", "eleni", "eleva", "elevi", "elevo", "elica", "elice", "elici", "elida", "elide", "elidi", "elido", "eliea", "eliee", "elima", "elime", "elimi", "elimo", "elisa", "elise", "elisi", "eliso", "elogi", "eluda", "elude", "eludi", "eludo", "eluii", "elusa", "eluse", "elusi", "eluso", "eluvi", "emaci", "email", "emale", "emali", "emana", "emani", "emano", "emeri", "emero", "emesi", "emica", "emici", "emico", "emide", "emidi", "emina", "emine", "emiri", "emiro", "emise", "emisi", "emoji", "emoni", "empia", "empie", "empii", "empio", "emula", "emule", "emuli", "emulo", "enema", "enemi", "enfia", "enfie", "enfio", "engri", "ennea", "ennee", "ennei", "enneo", "enoli", "enolo", "entra", "entri", "entro", "enula", "enule", "eolia", "eolie", "eolio", "epica", "epici", "epico", "epoca", "epodi", "epodo", "epura", "epuri", "epuro", "equai", "erada", "erade", "eradi", "erado", "erano", "erari", "erasa", "erase", "erasi", "eraso", "erbai", "erbio", "erebi", "erebo", "ereda", "erede", "eredi", "eredo", "eremi", "eremo", "ereta", "ereti", "ereto", "erica", "eriga", "erige", "erigi", "erigo", "ernia", "ernie", "ernio", "eroda", "erode", "erodi", "erodo", "eroga", "erogo", "erosa", "erose", "erosi", "eroso", "errai", "eruca", "erula", "erule", "eruli", "erulo", "erzya", "esala", "esali", "esalo", "esame", "esami", "esani", "esano", "esche", "eschi", "esiga", "esige", "esigi", "esigo", "esile", "esili", "esima", "esime", "esimi", "esimo", "esipi", "esipo", "esita", "esiti", "esito", "esizi", "esodi", "esodo", "esone", "esoni", "esora", "esori", "esoro", "esosa", "esose", "esosi", "esoso", "espia", "espii", "espio", "essai", "estia", "estie", "estii", "estio", "estri", "estro", "estua", "estui", "estuo", "esula", "esule", "esuli", "esulo", "esuma", "esumi", "esumo", "etani", "etano", "etate", "etati", "etene", "eteni", "etera", "etere", "eteri", "etero", "etesi", "ethos", "etica", "etici", "etico", "etile", "etili", "etimi", "etimo", "etini", "etino", "etnea", "etnee", "etnei", "etneo", "etnia", "etnie", "etola", "etole", "etoli", "etolo", "eutri", "evada", "evade", "evadi", "evado", "evasa", "evase", "evasi", "evaso", "evira", "eviri", "eviro", "evita", "eviti", "evito", "evoca", "evoco", "extra", "fabri", "fabro", "facce", "facci", "facto", "faggi", "fagli", "faida", "faide", "faina", "faine", "falba", "falbe", "falbi", "falbo", "falca", "falce", "falci", "falco", "falda", "falde", "faldi", "faldo", "falla", "falle", "falli", "fallo", "falsa", "false", "falsi", "falso", "famai", "fammi", "fanga", "fango", "fanne", "fanno", "fante", "fanti", "farad", "farai", "farce", "farci", "farda", "farde", "farea", "farei", "farla", "farle", "farli", "farlo", "farmi", "farne", "farri", "farro", "farsa", "farse", "farsi", "farso", "farti", "farvi", "fasai", "fasce", "fasci", "fasta", "faste", "fasti", "fasto", "fatai", "fatta", "fatte", "fatti", "fatto", "fatua", "fatue", "fatui", "fatuo", "fatwa", "fauce", "fauci", "fauna", "faune", "fauni", "fauno", "fauve", "favai", "faxai", "feace", "feaci", "febea", "febee", "febei", "febeo", "fecce", "fedai", "felce", "felci", "fella", "felle", "felli", "fello", "felpa", "felpe", "felpi", "felpo", "felse", "felsi", "felze", "felzi", "femme", "fence", "fenda", "fende", "fendi", "fendo", "feria", "ferie", "ferii", "ferla", "ferle", "ferma", "ferme", "fermi", "fermo", "ferra", "ferri", "ferro", "fersa", "ferse", "ferva", "ferve", "fervi", "fervo", "ferza", "ferze", "ferzi", "ferzo", "fessa", "fesse", "fessi", "fesso", "festa", "feste", "festi", "festo", "fetta", "fette", "feudi", "feudo", "fiaba", "fiabe", "fiala", "fiale", "fiani", "fiano", "fiata", "fiate", "fiati", "fiato", "fibra", "fibre", "ficca", "ficco", "ficea", "ficee", "fiche", "fichi", "ficus", "fidai", "fiele", "fieli", "fieni", "fieno", "fiera", "fiere", "fieri", "fiero", "fighe", "fighi", "figli", "filai", "filli", "fillo", "filma", "filmi", "filmo", "filza", "filze", "finca", "finga", "finge", "fingi", "fingo", "finii", "finna", "finne", "finni", "finno", "finse", "finsi", "finta", "finte", "finti", "finto", "fioca", "fioco", "fiora", "fiore", "fiori", "fioro", "fiote", "fioti", "firma", "firme", "firmi", "firmo", "fisai", "fisco", "fissa", "fisse", "fissi", "fisso", "fitta", "fitte", "fitti", "fitto", "fiume", "fiumi", "fiuta", "fiuti", "fiuto", "flake", "flana", "flani", "flano", "flash", "flati", "flato", "flava", "flave", "flavi", "flavo", "flebo", "fleti", "fleto", "flirt", "flora", "flore", "fluii", "fobia", "fobie", "focea", "focee", "focei", "foceo", "foche", "fochi", "focus", "fodri", "fodro", "fogge", "foggi", "foghe", "fogli", "fogna", "fogne", "fogni", "fogno", "foiba", "foibe", "folce", "folco", "folio", "folla", "folle", "folli", "follo", "folta", "folte", "folti", "folto", "fonai", "fonda", "fonde", "fondi", "fondo", "fonia", "fonie", "fonte", "fonti", "forai", "forca", "force", "forci", "forge", "forgi", "forma", "forme", "formi", "formo", "forni", "forno", "forra", "forre", "forse", "forte", "forti", "forum", "forza", "forze", "forzi", "forzo", "fosca", "fosco", "fossa", "fosse", "fossi", "fosso", "foste", "fosti", "fotta", "fotte", "fotti", "fotto", "fovea", "fovee", "foyer", "fraga", "frale", "frali", "frame", "frana", "frane", "frani", "frano", "frase", "frasi", "frate", "frati", "frega", "fregi", "frego", "frema", "freme", "fremi", "fremo", "frena", "freni", "freno", "freon", "fresa", "frese", "fresi", "freso", "frigi", "frigo", "frine", "frini", "frisa", "frisi", "friso", "froda", "frode", "frodi", "frodo", "froge", "fruga", "frugo", "fruii", "ftori", "ftoro", "fuchi", "fuffa", "fuffe", "fugai", "fugga", "fugge", "fuggi", "fuggo", "fughe", "fughi", "fulbe", "fulbi", "fulga", "fulge", "fulgi", "fulgo", "fulsa", "fulse", "fulsi", "fulso", "fulva", "fulve", "fulvi", "fulvo", "fumai", "fumea", "fumee", "fumei", "fumeo", "fumma", "fummi", "fummo", "funai", "fundo", "funga", "funge", "fungi", "fungo", "funky", "funse", "funsi", "funta", "funte", "funti", "funto", "fuoco", "fuori", "furai", "furba", "furbe", "furbi", "furbo", "furca", "furia", "furie", "furio", "furti", "furto", "fusai", "fusta", "fuste", "fusti", "fusto", "futon", "fuxia", "fuxie", "fuzzy", "gabba", "gabbi", "gabbo", "gaela", "gaele", "gaeli", "gaelo", "gaffa", "gaffe", "gagge", "gaggi", "galea", "galee", "galei", "galeo", "galgo", "galio", "galla", "galle", "galli", "gallo", "gamba", "gambe", "gambi", "gambo", "gamia", "gamie", "gamma", "gamme", "ganci", "ganda", "gande", "ganga", "gange", "ganza", "ganze", "ganzi", "ganzo", "garba", "garbe", "garbi", "garbo", "garga", "gargo", "garni", "garza", "garze", "garzi", "garzo", "gasai", "gasco", "gassa", "gasse", "gassi", "gasso", "gatta", "gatte", "gatti", "gatto", "gauda", "gaude", "gaudi", "gaudo", "gauge", "gauli", "gaulo", "gauta", "gaute", "gauti", "gauto", "gazai", "gazza", "gazze", "gazzi", "gazzo", "gechi", "gelai", "gelao", "gelsa", "gelse", "gelsi", "gelso", "gemei", "gemma", "gemme", "gemmi", "gemmo", "genai", "genia", "genie", "genio", "genoa", "gente", "genti", "genue", "geode", "geodi", "geomi", "gerba", "gerbe", "gergo", "gerla", "gerle", "gerli", "gerlo", "germa", "germe", "germi", "gessa", "gessi", "gesso", "gesta", "gesti", "gesto", "getta", "getti", "getto", "ghali", "ghega", "ghegi", "ghego", "ghiri", "ghiro", "ghisa", "ghise", "giace", "giaci", "giaco", "giada", "giade", "giani", "giano", "giara", "giare", "giava", "giave", "gibbi", "gibbo", "gighe", "gigli", "gilda", "gilde", "gilet", "gimmo", "ginna", "ginni", "ginno", "gioca", "gioco", "giogo", "gioia", "gioie", "gioii", "gioio", "giova", "giovi", "giovo", "girai", "girci", "girei", "girii", "girio", "girla", "girle", "girli", "girlo", "girmi", "girne", "girsi", "girti", "girvi", "gisse", "gissi", "giste", "gisti", "gitta", "gitti", "gitto", "giuba", "giube", "giuda", "giuli", "giura", "giure", "giuri", "giuro", "giuso", "gladi", "gleba", "glebe", "glena", "glene", "gleni", "glifi", "glifo", "globe", "globi", "globo", "glomi", "glomo", "glori", "gluma", "glume", "gnidi", "gnome", "gnomi", "gnomo", "gnosi", "gnuda", "gnude", "gnudi", "gnudo", "gobba", "gobbe", "gobbi", "gobbo", "gocce", "gocci", "godei", "godii", "godio", "goffa", "goffe", "goffi", "goffo", "gogna", "gogne", "goldi", "golea", "golei", "goleo", "golfi", "golfo", "golia", "golpe", "gombe", "gombi", "gombo", "gomma", "gomme", "gommi", "gommo", "gonda", "gonde", "gondi", "gondo", "gonfa", "gonfe", "gonfi", "gonfo", "gonga", "gonio", "gonja", "gonna", "gonne", "gonza", "gonze", "gonzi", "gonzo", "gordi", "gorga", "gorge", "gorgo", "gorna", "gorne", "gotha", "gotta", "gotte", "gotti", "gotto", "gouda", "gozzi", "gozzo", "grada", "grade", "gradi", "grado", "grafi", "grafo", "graia", "graie", "graii", "graio", "grama", "grame", "grami", "gramo", "grana", "grane", "grani", "grano", "grata", "grate", "grati", "grato", "grava", "grave", "gravi", "gravo", "grazi", "greca", "greci", "greco", "gremi", "greti", "greto", "greve", "grevi", "grica", "grici", "grico", "grida", "gride", "gridi", "grido", "grifa", "grifi", "grifo", "grigi", "grola", "grole", "groma", "grome", "grufa", "grufi", "grufo", "gruga", "grugo", "gruma", "grume", "grumi", "grumo", "grusi", "guaco", "guada", "guade", "guadi", "guado", "guaii", "guaio", "guani", "guano", "guari", "guata", "guati", "guato", "gufai", "guida", "guide", "guidi", "guido", "guina", "guini", "guino", "guisa", "guise", "gulag", "gurge", "gurgi", "gusci", "gusla", "gusta", "gusti", "gusto", "gutea", "gutee", "gutei", "guteo", "gutti", "gutto", "guzla", "guzle", "gwari", "hafni", "haida", "haiku", "hakka", "hallo", "hamza", "hanno", "harem", "haute", "hedge", "hello", "henna", "henne", "hertz", "hevea", "hevee", "hijab", "hindi", "hobby", "hokka", "hokke", "hokki", "hokko", "holmi", "hotel", "house", "huave", "huavi", "huchi", "hudna", "iacea", "iacee", "iarda", "iarde", "ibera", "ibere", "iberi", "ibero", "iblea", "iblee", "iblei", "ibleo", "icari", "icena", "icene", "iceni", "iceno", "icona", "icone", "icore", "icori", "ictus", "idali", "iddia", "iddie", "iddio", "ideai", "idoli", "idolo", "idria", "idrie", "iella", "ielle", "iesta", "ieste", "iesti", "iesto", "ietta", "ietti", "ietto", "ifale", "ifali", "ifema", "ifemi", "igloo", "ignea", "ignee", "ignei", "igneo", "ilare", "ilari", "ilice", "ilici", "ilide", "ilidi", "illea", "illee", "illei", "illeo", "ilota", "ilote", "iloti", "image", "imago", "imani", "imano", "imati", "imene", "imeni", "imita", "imiti", "imito", "inala", "inali", "inalo", "inane", "inani", "incoa", "incoi", "incoo", "india", "indie", "indio", "infoi", "infra", "ingoi", "ingri", "inizi", "inlei", "inlui", "inmia", "inmio", "inoli", "inoma", "inomi", "inope", "inopi", "insce", "insci", "insta", "insti", "insto", "intra", "intro", "inula", "inule", "inuma", "inumi", "inumo", "invai", "invia", "invii", "invio", "iodai", "iodio", "ioide", "ioidi", "iolla", "iolle", "ionia", "ionie", "ionio", "ipate", "ipati", "ippia", "ippie", "ippii", "ippio", "irace", "iraci", "irata", "irate", "irati", "irato", "irchi", "irida", "iride", "iridi", "irido", "irite", "iriti", "iroki", "iroko", "irosa", "irose", "irosi", "iroso", "irula", "ischi", "islam", "isodi", "isola", "isole", "isoli", "isolo", "isopi", "isopo", "issai", "istai", "istle", "istmi", "istmo", "isuri", "isuro", "itaci", "itaco", "itala", "itale", "itali", "italo", "itera", "iteri", "itero", "iucca", "iulca", "iulco", "iurta", "iurte", "ivata", "ivate", "ivati", "ivato", "jeans", "jihad", "jolly", "joule", "jumbo", "junci", "junco", "kaaba", "kakwa", "kamti", "kanji", "kansa", "kaone", "kaoni", "kappa", "karma", "kasba", "kayak", "kebab", "kendo", "khasi", "kiowa", "kissi", "kitai", "kiwai", "koala", "konde", "kondi", "konga", "konge", "kongi", "kongo", "konta", "kulla", "kulle", "kulli", "kullo", "kunta", "kurda", "kurde", "kurdi", "kurdo", "kwena", "kyrie", "labbi", "labbo", "labda", "labio", "labri", "labro", "lacca", "lacce", "lacci", "lacco", "ladra", "ladre", "ladri", "ladro", "laghi", "lagna", "lagne", "lagni", "lagno", "laica", "laici", "laico", "laida", "laide", "laidi", "laido", "lamai", "lamba", "lambe", "lambi", "lambo", "lamia", "lamie", "lamio", "lampa", "lampe", "lampi", "lampo", "lanca", "lance", "lanci", "landa", "lande", "lanea", "lanee", "lanei", "laneo", "lanfa", "lanfe", "langa", "lange", "lania", "lanio", "lanzi", "lanzo", "lapis", "lappa", "lappe", "lappi", "lappo", "larda", "lardi", "lardo", "larga", "large", "largo", "larva", "larve", "larvi", "larvo", "lasca", "lasci", "lasco", "laser", "lassa", "lasse", "lassi", "lasso", "lasta", "laste", "latra", "latri", "latro", "latta", "latte", "latti", "latto", "lauda", "laude", "laudi", "laura", "laure", "lauri", "lauro", "lauta", "laute", "lauti", "lauto", "lavai", "lavia", "lavie", "lavra", "lavre", "lazza", "lazze", "lazzi", "lazzo", "leale", "leali", "lebbi", "lecca", "lecce", "lecci", "lecco", "legai", "legga", "legge", "leggi", "leggo", "leghe", "leghi", "legna", "legni", "legno", "lella", "lelle", "lelli", "lello", "lembi", "lembo", "lemma", "lemme", "lemmi", "lemmo", "lemna", "lemne", "lenca", "lenci", "lenea", "lenee", "lenei", "leneo", "lenii", "lenta", "lente", "lenti", "lento", "lenza", "lenze", "lenzi", "lenzo", "leone", "leoni", "leppa", "leppi", "leppo", "lepra", "lepre", "lepri", "lerce", "lerci", "lesbi", "lesbo", "lesca", "lessa", "lesse", "lessi", "lesso", "lesta", "leste", "lesti", "lesto", "letea", "letee", "letei", "leteo", "letri", "letro", "letta", "lette", "letti", "letto", "leuca", "leuci", "leuco", "leuti", "leuto", "levai", "lezia", "lezie", "lezio", "lezza", "lezze", "lezzi", "lezzo", "liana", "liane", "libai", "libra", "libre", "libri", "libro", "licci", "licei", "liceo", "licia", "licie", "licio", "lidar", "lidia", "lidie", "lidio", "lieta", "liete", "lieti", "lieto", "lieve", "lievi", "lifta", "lifti", "lifto", "ligei", "ligeo", "ligia", "ligie", "ligio", "ligre", "ligri", "lilla", "limai", "limbi", "limbo", "limii", "limio", "limma", "limmi", "linai", "lince", "linci", "linda", "linde", "lindi", "lindo", "linea", "linee", "linei", "lineo", "linfa", "linfe", "lingi", "linka", "linki", "linko", "lippa", "lippe", "lippi", "lippo", "liqua", "liqui", "liquo", "lisai", "lisca", "lisce", "lisci", "lissa", "lisse", "lissi", "lisso", "lista", "liste", "listi", "listo", "litai", "litio", "litra", "litre", "litri", "litro", "litta", "litte", "litui", "lituo", "liuti", "liuto", "lizza", "lizze", "lizzi", "lizzo", "lobby", "locai", "locca", "locco", "lochi", "lodai", "loden", "lodge", "loffa", "loffe", "loffi", "loffo", "lofio", "logga", "logge", "loggo", "loghi", "logia", "logli", "logra", "logri", "logro", "loica", "loici", "loico", "lolla", "lolle", "lombi", "lombo", "lompi", "lompo", "longa", "longo", "lonza", "lonze", "loppa", "loppe", "loppi", "loppo", "lorda", "lorde", "lordi", "lordo", "lorio", "losca", "losco", "lotta", "lotte", "lotti", "lotto", "lucci", "lucco", "lucea", "lucei", "luchi", "lucia", "lucie", "lucra", "lucri", "lucro", "ludra", "ludre", "ludri", "ludro", "luena", "luese", "luesi", "luffa", "luffe", "lugli", "lugre", "lugri", "lugro", "luigi", "lulla", "lulle", "lumai", "lumia", "lumie", "lumpi", "lumpo", "lunda", "lunga", "lungi", "lungo", "luogo", "lurca", "lurco", "lusca", "lusco", "lussa", "lussi", "lusso", "lutai", "lutea", "lutee", "lutei", "luteo", "lutta", "lutti", "lutto", "luvia", "luvie", "luvii", "luvio", "lycra", "macao", "macca", "macco", "machi", "macho", "macia", "macie", "macro", "madia", "madie", "madre", "madri", "mafia", "mafie", "mafio", "magai", "maggi", "maghe", "maghi", "magia", "magie", "magio", "magli", "magma", "magmi", "magna", "magne", "magni", "magno", "magra", "magre", "magri", "magro", "maide", "maidi", "maina", "maini", "maino", "malga", "malgo", "malia", "malie", "malli", "mallo", "malta", "malte", "malti", "malto", "malva", "malve", "mamba", "mambi", "mambo", "mamma", "mamme", "mammi", "mammo", "manaa", "manae", "manai", "manao", "manca", "mance", "manco", "manda", "mande", "mandi", "mando", "manga", "mangi", "mango", "mania", "manie", "manna", "manne", "mansa", "manse", "mansi", "manso", "manta", "mante", "manti", "manto", "manza", "manze", "manzi", "manzo", "maona", "maone", "maori", "mappa", "mappe", "mappi", "mappo", "marca", "marce", "marci", "marco", "marea", "maree", "margi", "margo", "marma", "marmi", "marmo", "marna", "marne", "marni", "marno", "marra", "marre", "marsa", "marse", "marsi", "marso", "marza", "marze", "marzi", "marzo", "masai", "massa", "masse", "massi", "masso", "masti", "matta", "matte", "matti", "matto", "maura", "maure", "mauri", "mauro", "mauve", "mauvi", "mazza", "mazze", "mazzi", "mazzo", "mbaka", "mbaya", "meaci", "meala", "meale", "meali", "mealo", "meami", "meane", "meano", "meare", "meata", "meate", "meati", "meato", "meava", "meavi", "meavo", "mecca", "media", "medie", "medio", "meino", "mekea", "mekee", "mekei", "mekeo", "melai", "melba", "melda", "melde", "meldi", "meldo", "melia", "melie", "melii", "melio", "melma", "melme", "meloe", "meloi", "menai", "mence", "menci", "menda", "mende", "mendi", "mendo", "menga", "menri", "mensa", "mense", "menta", "mente", "menti", "mento", "meoni", "meoti", "merca", "merce", "merci", "merco", "merda", "merde", "merga", "merge", "mergi", "mergo", "meria", "merie", "merio", "merla", "merle", "merli", "merlo", "mersa", "merse", "mersi", "merso", "mesca", "mesce", "mesci", "mesco", "messa", "messe", "messi", "messo", "mesta", "meste", "mesti", "mesto", "meteo", "metri", "metro", "metta", "mette", "metti", "metto", "mezza", "mezze", "mezzi", "mezzo", "miasi", "micca", "micce", "micci", "micco", "miche", "micia", "micie", "micio", "micro", "miele", "mieli", "mieta", "miete", "mieti", "mieto", "migma", "migmi", "migra", "migri", "migro", "milia", "milio", "mille", "milza", "milze", "mimai", "mimma", "mimme", "mimmi", "mimmo", "minai", "minea", "minee", "minei", "mineo", "minga", "minge", "mingi", "mingo", "minia", "minio", "minna", "minne", "minse", "minsi", "mioma", "miomi", "miope", "miopi", "miosi", "mirai", "mirra", "mirre", "mirri", "mirro", "mirti", "mirto", "misia", "misie", "misii", "misio", "missa", "missi", "misso", "mista", "miste", "misti", "misto", "mitra", "mitre", "mitri", "mitro", "mitti", "mitto", "mixai", "mixer", "mocci", "mochi", "mocoa", "modem", "modio", "moggi", "mogia", "mogie", "mogio", "mogli", "moina", "moine", "moira", "moire", "molai", "molca", "molce", "molla", "molle", "molli", "mollo", "molta", "molte", "molti", "molto", "molva", "molve", "monca", "monco", "monda", "monde", "mondi", "mondo", "monna", "monne", "monta", "monte", "monti", "monto", "moqui", "morai", "morbi", "morbo", "morda", "morde", "mordi", "mordo", "morfi", "morfo", "moria", "morie", "morii", "morra", "morre", "morsa", "morse", "morsi", "morso", "morta", "morte", "morti", "morto", "morva", "morve", "mosca", "mosce", "mosci", "mosco", "mossa", "mosse", "mossi", "mosso", "mosti", "mosto", "motta", "motte", "motti", "motto", "mouse", "movie", "mozza", "mozze", "mozzi", "mozzo", "mucca", "mucci", "mucco", "muchi", "mudai", "muffa", "muffe", "muffi", "muffo", "mufti", "mughi", "mugli", "mulsi", "mulso", "multa", "multe", "multi", "multo", "mundi", "munga", "munge", "mungi", "mungo", "munii", "munse", "munsi", "munta", "munte", "munti", "munto", "muoia", "muoio", "muone", "muoni", "muore", "muori", "muova", "muove", "muovi", "muovo", "murai", "murge", "muria", "murie", "murmi", "murra", "murre", "musai", "musco", "musei", "museo", "mussa", "musse", "mussi", "musso", "mutai", "mutua", "mutue", "mutui", "mutuo", "nabla", "nabli", "nadir", "nafta", "nafte", "nahua", "naibi", "naide", "naidi", "naira", "nakfa", "nanfa", "nanfe", "nanna", "nanne", "nante", "nanzi", "napea", "napee", "nappa", "nappe", "nappi", "nappo", "narco", "nardi", "nardo", "narra", "narri", "narro", "nasai", "nasca", "nasce", "nasci", "nasco", "nashi", "naspi", "naspo", "nassa", "nasse", "nassi", "nasso", "nasua", "nasue", "natai", "natia", "natie", "natii", "natio", "natta", "natte", "nause", "nauta", "nauti", "ndoga", "ndoge", "ndogi", "ndogo", "nebbi", "necai", "necce", "necci", "nechi", "negai", "neghi", "negli", "nella", "nelle", "nello", "nembi", "nembo", "nemea", "nemee", "nemei", "nemeo", "nence", "nenci", "nenia", "nenie", "nerba", "nerbi", "nerbo", "nervi", "nervo", "nesce", "nesci", "nessi", "nesso", "nesta", "nesti", "nesto", "netta", "nette", "netti", "netto", "neuma", "neumi", "neura", "neure", "neuri", "neuro", "nevai", "ngala", "nguni", "nibbi", "nicce", "nicci", "niego", "nievi", "nievo", "nimbi", "nimbo", "ninfa", "ninfe", "ninja", "ninna", "ninne", "ninni", "ninno", "niobi", "nisba", "nitra", "nitri", "nitro", "niuna", "niune", "niuni", "niuno", "nivea", "nivee", "nivei", "niveo", "nobel", "nocca", "noema", "noemi", "noesi", "nogai", "noghi", "nomai", "nomea", "nomee", "nonio", "nonna", "nonne", "nonni", "nonno", "noria", "norie", "norma", "norme", "normi", "normo", "norna", "norne", "notai", "notta", "notte", "notti", "notto", "novai", "novio", "nozze", "nuche", "nudai", "nugae", "nulla", "nulle", "nulli", "nullo", "nummi", "nummo", "nunci", "nunzi", "nuoce", "nuoci", "nuora", "nuore", "nuota", "nuoti", "nuoto", "nuova", "nuove", "nuovi", "nuovo", "nurse", "nutka", "nutra", "nutre", "nutri", "nutro", "nyala", "nylon", "obbli", "obeli", "obelo", "obera", "oberi", "obero", "obesa", "obese", "obesi", "obeso", "obice", "obici", "obiti", "obito", "oblai", "oblia", "oblii", "oblio", "oboli", "obolo", "ocche", "occhi", "ocimi", "ocimo", "ocrea", "ocree", "oculi", "oculo", "odano", "oddio", "odiai", "odici", "odila", "odile", "odili", "odilo", "odimi", "odine", "odino", "odire", "odita", "odite", "oditi", "odito", "odiva", "odivi", "odivo", "odono", "odora", "odore", "odori", "odoro", "odrai", "oecio", "offra", "offre", "offri", "offro", "ofide", "ofidi", "ofite", "ofiti", "ogiva", "ogive", "oiana", "oidio", "okapi", "oleai", "olfai", "oliai", "olino", "olire", "olita", "olite", "oliti", "olito", "oliva", "olive", "olivi", "olivo", "olmio", "olona", "olone", "olora", "olore", "olori", "oloro", "oltra", "oltre", "omaha", "omani", "omano", "omari", "omaro", "omasi", "omaso", "ombra", "ombre", "ombri", "ombro", "omega", "omeri", "omero", "omese", "omesi", "omini", "omino", "omise", "omisi", "omnia", "omone", "omoni", "oncia", "ondai", "onera", "onere", "oneri", "onero", "onese", "onesi", "onice", "onici", "onora", "onore", "onori", "onoro", "onrai", "opaca", "opaci", "opaco", "opale", "opali", "opata", "opera", "opere", "operi", "opero", "opica", "opici", "opico", "opima", "opime", "opimi", "opimo", "opina", "opini", "opino", "oppia", "oppio", "optai", "oraci", "orafa", "orafe", "orafi", "orafo", "orala", "orale", "orali", "oralo", "orami", "orane", "orano", "orare", "orari", "orata", "orate", "orati", "orato", "orava", "oravi", "oravo", "orbai", "orche", "orchi", "orcio", "ordii", "orfea", "orfee", "orgia", "oribi", "orice", "orici", "orige", "origi", "orina", "orine", "orini", "orino", "orlai", "ormai", "ornai", "orobi", "oroci", "oroki", "oroma", "orome", "oromi", "oromo", "orrea", "orree", "orrei", "orreo", "orrii", "orzai", "osaci", "osage", "osagi", "osala", "osale", "osali", "osalo", "osami", "osane", "osano", "osare", "osata", "osate", "osati", "osato", "osava", "osavi", "osavo", "oscar", "osche", "osino", "osmio", "ossea", "ossee", "ossei", "osseo", "ossia", "ostai", "osteo", "ostia", "ostie", "ostio", "ostri", "ostro", "otica", "otici", "otico", "otide", "otidi", "otite", "otiti", "ottri", "ovaia", "ovaie", "ovaio", "ovale", "ovali", "ovari", "ovata", "ovate", "ovati", "ovato", "ovest", "ovile", "ovili", "ovina", "ovine", "ovini", "ovino", "ovoli", "ovolo", "ovula", "ovuli", "ovulo", "ovvia", "ovvie", "ovvii", "ovvio", "oyana", "ozena", "ozene", "oziai", "ozino", "ozoni", "ozono", "pabbi", "pacai", "pacca", "pacco", "pachi", "pacia", "pacio", "pacta", "padda", "padre", "padri", "paese", "paesi", "pafia", "pafie", "pafii", "pafio", "pagai", "paggi", "paghe", "paghi", "pagri", "pagro", "paini", "paino", "paisa", "palai", "palco", "palea", "palee", "palei", "paleo", "palio", "palla", "palle", "palli", "pallo", "palma", "palme", "palmi", "palmo", "palpa", "palpi", "palpo", "palta", "palte", "pampa", "panai", "panca", "pance", "panda", "pande", "pandi", "pando", "pania", "panie", "panna", "panne", "panni", "panno", "pansa", "panse", "pansi", "panso", "panza", "panze", "paoli", "paolo", "pappa", "pappe", "pappi", "pappo", "papua", "parai", "parca", "parce", "parci", "parco", "pardi", "pardo", "parei", "pareo", "paria", "parie", "parii", "pario", "parka", "parla", "parli", "parlo", "parma", "parme", "parra", "parre", "parsa", "parse", "parsi", "parso", "parta", "parte", "parti", "parto", "parva", "parve", "parvi", "parvo", "pasca", "pasce", "pasci", "pasco", "passa", "passe", "passi", "passo", "pasta", "paste", "pasti", "pasto", "patia", "patie", "patii", "patio", "patre", "patri", "patta", "patte", "patti", "patto", "paura", "paure", "pausa", "pause", "pausi", "pauso", "pavia", "pavie", "pazza", "pazze", "pazzi", "pazzo", "peace", "peaci", "peana", "peani", "peata", "peate", "pecca", "pecce", "pecci", "pecco", "pechi", "pecia", "pecie", "pedio", "pegni", "pegno", "pekoe", "pelai", "pelea", "pelee", "pelei", "peleo", "pelle", "pelli", "pelta", "pelte", "pelvi", "penai", "penda", "pende", "pendi", "pendo", "penei", "peneo", "penna", "penne", "pensa", "pensi", "penso", "penta", "pente", "penti", "pento", "peoci", "peone", "peoni", "peota", "peote", "pepai", "pepli", "peplo", "pepsi", "perca", "perda", "perde", "perdi", "perdo", "perii", "perla", "perle", "perni", "perno", "persa", "perse", "persi", "perso", "pervi", "pesai", "pesca", "pesce", "pesci", "pesco", "pesta", "peste", "pesti", "pesto", "petai", "petti", "petto", "pezza", "pezze", "pezzi", "pezzo", "phone", "photo", "phyla", "piace", "piaci", "piada", "piade", "piaga", "piago", "piala", "piale", "piali", "pialo", "piami", "piamo", "piana", "piane", "piani", "piano", "piare", "piata", "piate", "piati", "piato", "piava", "piavi", "piavo", "picca", "picce", "picco", "picea", "picee", "picei", "piceo", "piche", "pichi", "picio", "piede", "piedi", "piega", "piego", "piena", "piene", "pieni", "pieno", "pieri", "piese", "piesi", "pieta", "piete", "pieve", "pievi", "pighi", "pigia", "pigii", "pigio", "pigli", "pigna", "pigne", "pigra", "pigre", "pigri", "pigro", "piino", "pilai", "pilei", "pileo", "pilla", "pilli", "pillo", "pinai", "pinca", "pince", "pinco", "pinea", "pinee", "pinei", "pineo", "pinna", "pinne", "pinsa", "pinse", "pinta", "pinte", "pinti", "pinto", "pinza", "pinze", "pinzi", "pinzo", "pioda", "piode", "piola", "piole", "pioli", "piolo", "pione", "pioni", "piota", "piote", "pioti", "pioto", "piova", "piove", "piovi", "piovo", "pipai", "pipia", "pipio", "pippa", "pippe", "pippi", "pippo", "pipra", "pipre", "pirla", "pirli", "pirlo", "pisce", "pisci", "pissi", "pista", "piste", "pitia", "pitie", "pitta", "pitte", "pitti", "pitto", "piuma", "piume", "piumi", "piumo", "pizia", "pizie", "pizio", "pizza", "pizze", "pizzi", "pizzo", "placa", "place", "placo", "plaga", "plagi", "plana", "plani", "plano", "plebe", "plebi", "plica", "plico", "ploia", "ploie", "plora", "plori", "ploro", "ploti", "ploto", "plugo", "pluvi", "pocci", "poche", "pochi", "podio", "podza", "podze", "podzi", "podzo", "poema", "poemi", "poeta", "poeti", "poeto", "pogai", "pogge", "poggi", "poghi", "poise", "poker", "polca", "polii", "polio", "polka", "polke", "polla", "polle", "polli", "pollo", "polpa", "polpe", "polpi", "polpo", "polsi", "polso", "polta", "polte", "polve", "polvi", "pomai", "pomfi", "pomfo", "pompa", "pompe", "pompi", "pompo", "ponce", "ponci", "ponda", "pondi", "pondo", "ponfi", "ponfo", "ponga", "pongo", "ponta", "ponte", "ponti", "ponto", "ponza", "ponzi", "ponzo", "poppa", "poppe", "poppi", "poppo", "porca", "porci", "porco", "porga", "porge", "porgi", "porgo", "porla", "porle", "porli", "porlo", "pormi", "porne", "porno", "porre", "porri", "porro", "porse", "porsi", "porta", "porte", "porti", "porto", "porvi", "posai", "posca", "possa", "posse", "possi", "posso", "posta", "poste", "posti", "posto", "potai", "potei", "potta", "potte", "poule", "pozza", "pozze", "pozzi", "pozzo", "praho", "prana", "prasi", "prati", "prato", "prava", "prave", "pravi", "pravo", "prece", "preci", "preco", "preda", "prede", "predi", "predo", "prega", "pregi", "prego", "preli", "prema", "preme", "premi", "premo", "presa", "prese", "presi", "preso", "prete", "preti", "previ", "price", "pride", "prima", "prime", "primi", "primo", "priva", "prive", "privi", "privo", "proba", "probe", "probi", "probo", "proci", "proco", "proda", "prode", "prodi", "prole", "proli", "promo", "prona", "prone", "proni", "prono", "prora", "prore", "prosa", "prose", "prosi", "proso", "proti", "proto", "prova", "prove", "provi", "provo", "prozi", "pruda", "prude", "prudi", "prudo", "pruna", "prune", "pruni", "pruno", "psico", "psoco", "psofi", "psofo", "ptini", "ptino", "ptosi", "pucci", "puffi", "puffo", "pugge", "puggi", "pugio", "pugna", "pugne", "pugni", "pugno", "puina", "puine", "pulca", "pulce", "pulci", "pulii", "pulka", "pulke", "pulla", "pulle", "pulli", "pullo", "pulsa", "pulsi", "pulso", "punci", "punga", "punge", "pungi", "pungo", "punii", "punse", "punsi", "punta", "punte", "punti", "punto", "puppa", "puppi", "puppo", "purai", "purea", "puree", "purga", "purgo", "pussa", "pussi", "pusso", "pusta", "puste", "putai", "putii", "putre", "putri", "putta", "putte", "putti", "putto", "puzza", "puzze", "puzzi", "puzzo", "qasba", "qasbe", "qibla", "quada", "quade", "quadi", "quado", "quale", "quali", "quare", "quark", "quasi", "queta", "queto", "quici", "quija", "quije", "quiji", "quijo", "quina", "quine", "quini", "quino", "quita", "quiti", "quito", "quivi", "quota", "quote", "quoti", "quoto", "rabbi", "rabia", "racca", "racco", "racla", "racle", "radia", "radio", "radon", "raffa", "raffe", "raffi", "raffo", "rafia", "rafie", "raggi", "raghe", "ragia", "ragie", "ragli", "ragna", "ragne", "ragni", "ragno", "raiai", "raide", "raidi", "raino", "raita", "raiti", "raito", "ralla", "ralle", "ralli", "rallo", "ramai", "rambo", "ramea", "ramee", "ramei", "ramen", "rameo", "ramia", "ramie", "ramni", "ramno", "rampa", "rampe", "rampi", "rampo", "ranca", "rance", "ranci", "ranco", "randa", "rande", "ranfi", "range", "rango", "ranni", "ranno", "rapai", "rapii", "rappa", "rappe", "rasai", "rasce", "rasoi", "raspa", "raspe", "raspi", "raspo", "rasta", "ratea", "ratei", "rateo", "ratio", "ratta", "ratte", "ratti", "ratto", "rauca", "rauco", "razza", "razze", "razzi", "razzo", "reale", "reali", "reame", "reami", "reati", "reato", "rebbi", "rebus", "recai", "recei", "rechi", "recto", "redai", "redii", "reese", "reesi", "regga", "regge", "reggi", "reggo", "regia", "regie", "regio", "regna", "regni", "regno", "reide", "reidi", "reiki", "relax", "remai", "renai", "renda", "rende", "rendi", "rendo", "renio", "renna", "renne", "rensa", "rense", "repli", "replo", "requi", "resca", "resia", "resie", "respi", "respo", "ressa", "resse", "ressi", "resta", "reste", "resti", "resto", "retai", "retea", "retee", "retei", "reteo", "retri", "retro", "retta", "rette", "retti", "retto", "reuma", "reumi", "rezza", "rezze", "rezzi", "rezzo", "riale", "riali", "riama", "riami", "riamo", "riara", "riari", "riaro", "ribes", "ricca", "ricce", "ricci", "ricco", "ridai", "ridda", "ridde", "riddi", "riddo", "ridia", "rieda", "riede", "riedi", "riedo", "riera", "rieri", "riero", "rifai", "riffa", "riffe", "rifui", "rigai", "rigge", "righe", "righi", "rigna", "rigni", "rigno", "rimai", "rioca", "rioco", "rioda", "riode", "riodi", "riodo", "rione", "rioni", "ripii", "risai", "risei", "risia", "risii", "risma", "risme", "rispi", "rissa", "risse", "rissi", "risso", "ritma", "ritmi", "ritmo", "ritta", "ritte", "ritti", "ritto", "riusa", "riusi", "riuso", "rivai", "rizza", "rizze", "rizzi", "rizzo", "roana", "roane", "roani", "roano", "robbi", "robot", "rocca", "rocce", "rocco", "roche", "rochi", "rodai", "rodei", "rodeo", "rodia", "rodie", "rodii", "rodio", "roese", "roesi", "rogai", "rogge", "roggi", "roghi", "rogna", "rogne", "rogni", "rogno", "rolla", "rolli", "rollo", "romba", "rombe", "rombi", "rombo", "romea", "romee", "romei", "romeo", "rompa", "rompe", "rompi", "rompo", "ronca", "ronco", "ronda", "ronde", "rondi", "rondo", "ronfa", "ronfe", "ronfi", "ronfo", "ronza", "ronzi", "ronzo", "rorai", "rosai", "rosea", "rosee", "rosei", "roseo", "rospi", "rospo", "rossa", "rosse", "rossi", "rosso", "rosta", "roste", "rosti", "rosto", "rotai", "rotea", "rotei", "roteo", "rotta", "rotte", "rotti", "rotto", "rouge", "rovai", "rozza", "rozze", "rozzi", "rozzo", "rubai", "rubbi", "rubbo", "rubea", "rubee", "rubei", "rubeo", "rubli", "rublo", "rubra", "rubre", "rubri", "rubro", "ruche", "ruese", "ruesi", "ruffa", "ruffe", "rugai", "rugby", "rughe", "rughi", "rugli", "ruina", "ruini", "ruino", "rulla", "rulli", "rullo", "rumai", "rumba", "rumbe", "rumme", "rummi", "ruoli", "ruolo", "ruota", "ruote", "ruoti", "ruoto", "rupia", "rupie", "ruppe", "ruppi", "rusca", "rusco", "ruspa", "ruspe", "ruspi", "ruspo", "russa", "russe", "russi", "russo", "rutta", "rutti", "rutto", "ruzza", "ruzze", "ruzzi", "ruzzo", "saale", "saali", "sabba", "sabbi", "sabea", "sabee", "sabei", "sabeo", "sabia", "sabie", "sabii", "sabio", "sabra", "sacca", "sacco", "sacia", "sacie", "sacio", "sacra", "sacre", "sacri", "sacro", "saffo", "sagge", "saggi", "saghe", "saghi", "sagii", "sagna", "sagni", "sagno", "sagra", "sagre", "sagri", "sagro", "saiga", "saime", "saimi", "salai", "salda", "salde", "saldi", "saldo", "salga", "salgo", "salii", "salio", "salma", "salme", "salmi", "salmo", "salpa", "salpe", "salpi", "salpo", "salsa", "salse", "salsi", "salso", "salta", "salti", "salto", "salva", "salve", "salvi", "salvo", "samba", "samia", "samie", "samii", "samio", "sanai", "sanie", "sanno", "sansa", "sanse", "santa", "sante", "santi", "santo", "saora", "sapio", "sappi", "sarai", "sarda", "sarde", "sardi", "sardo", "sarei", "sarge", "sargo", "sarta", "sarte", "sarti", "sarto", "sassi", "sasso", "sauna", "saune", "saura", "saure", "sauri", "sauro", "savia", "savie", "savio", "sazia", "sazie", "sazio", "sbafa", "sbafi", "sbafo", "sbava", "sbavi", "sbavo", "sboba", "sbobe", "sbora", "sbore", "sbovi", "sbovo", "sbuca", "sbuco", "scada", "scade", "scadi", "scado", "scafa", "scafe", "scafi", "scafo", "scala", "scale", "scali", "scalo", "scana", "scane", "scapa", "scapi", "scapo", "scari", "scaro", "scasa", "scasi", "scaso", "scava", "scavi", "scavo", "sceda", "scede", "scema", "sceme", "scemi", "scemo", "scena", "scene", "scesa", "scese", "scesi", "sceso", "schei", "schwa", "sciai", "scifi", "scifo", "scipa", "scipi", "scipo", "scira", "scire", "sciri", "sciro", "scita", "scite", "sciti", "scoda", "scodi", "scodo", "scoia", "scoio", "scola", "scoli", "scolo", "scopa", "scope", "scopi", "scopo", "scora", "score", "scori", "scoro", "scota", "scote", "scoti", "scoto", "scova", "scovi", "scovo", "scuce", "scuci", "scuda", "scudi", "scudo", "scuoi", "scura", "scure", "scuri", "scuro", "scusa", "scuse", "scusi", "scuso", "scuti", "scuto", "sdama", "sdami", "sdamo", "sdare", "sdata", "sdate", "sdati", "sdato", "sdava", "sdavi", "sdavo", "sdazi", "sdica", "sdice", "sdici", "sdico", "sdire", "sdite", "sdoga", "sdogo", "sdora", "sdori", "sdoro", "sdrai", "sduca", "sduco", "secai", "secca", "secce", "secco", "sechi", "sedai", "sedei", "sedia", "sedie", "sedio", "segai", "segga", "seggi", "seggo", "seghe", "seghi", "segna", "segni", "segno", "segua", "segue", "segui", "seguo", "seini", "seino", "selce", "selci", "selfa", "selfi", "selfo", "sella", "selle", "selli", "sello", "selva", "selve", "semai", "senna", "senne", "senni", "senno", "senoi", "sensi", "senso", "senta", "sente", "senti", "sento", "senza", "seppe", "seppi", "sepsi", "serba", "serbe", "serbi", "serbo", "seria", "serie", "serio", "sermo", "serpa", "serpe", "serpi", "serpo", "serra", "serre", "serri", "serro", "serti", "serto", "serva", "serve", "servi", "servo", "sesia", "sesie", "sessa", "sesse", "sessi", "sesso", "sesta", "seste", "sesti", "sesto", "setta", "sette", "setti", "setto", "sezza", "sezze", "sezzi", "sezzo", "sfama", "sfami", "sfamo", "sfare", "sfasa", "sfasi", "sfaso", "sfata", "sfate", "sfati", "sfato", "sfece", "sfeci", "sfera", "sfere", "sfida", "sfide", "sfidi", "sfido", "sfiga", "sfila", "sfili", "sfilo", "sfina", "sfini", "sfino", "sfizi", "sfoca", "sfoci", "sfoco", "sfoga", "sfogo", "sfora", "sfori", "sforo", "sfuma", "sfumi", "sfumo", "sfuri", "sfusa", "sfuse", "sfusi", "sfuso", "sgama", "sgami", "sgamo", "sgara", "sgari", "sgaro", "sgasa", "sgasi", "sgaso", "sgela", "sgeli", "sgelo", "sgola", "sgoli", "sgolo", "sgura", "sguri", "sguro", "shake", "shara", "share", "shari", "sharo", "shina", "shire", "siamo", "siano", "siate", "siche", "sicli", "siclo", "sidri", "sidro", "sieda", "siede", "siedi", "siedo", "siepa", "siepe", "siepi", "siepo", "sieri", "siero", "siete", "sigla", "sigle", "sigli", "siglo", "sigma", "sigmi", "sigua", "siici", "siila", "siile", "siili", "siilo", "siimi", "siine", "siiti", "silfi", "silfo", "silli", "sillo", "silos", "silvi", "sinti", "sipai", "sirma", "sirme", "sirte", "sirti", "sisma", "sismi", "sismo", "sitai", "sitii", "situa", "situi", "situo", "sizio", "sizza", "sizze", "skate", "skypa", "skypi", "skypo", "slama", "slami", "slamo", "slava", "slave", "slavi", "slavo", "slebi", "slebo", "slega", "slego", "slice", "slide", "sloga", "slogo", "sluma", "slumi", "slumo", "smaga", "smagi", "smago", "smani", "smela", "smeli", "smelo", "smera", "smeri", "smero", "smile", "smina", "smini", "smino", "smira", "smiri", "smiro", "smise", "smisi", "smoda", "smodi", "smodo", "smoke", "smova", "smove", "smovi", "smovo", "smura", "smuri", "smuro", "smusa", "smusi", "smuso", "snasa", "snasi", "snaso", "sneva", "snevi", "snevo", "snida", "snidi", "snido", "snipe", "snoda", "snodi", "snodo", "snuda", "snudi", "snudo", "soana", "soane", "soani", "soano", "soave", "soavi", "sobri", "socci", "socco", "socia", "socie", "socio", "sodai", "sodio", "soffi", "sofia", "sofie", "soghe", "sogli", "sogna", "sogni", "sogno", "solai", "solca", "solco", "solda", "soldi", "soldo", "solea", "solee", "solei", "soleo", "solfa", "solfe", "solfi", "solfo", "solgo", "solio", "solla", "solle", "solli", "sollo", "solta", "solte", "solti", "solto", "solva", "solve", "solvi", "solvo", "somma", "somme", "sommi", "sommo", "somni", "sonai", "sonar", "sonco", "sonda", "sonde", "sondi", "sondo", "songa", "songe", "songi", "songo", "sonii", "sonio", "sonni", "sonno", "sopii", "sopra", "sorai", "sorba", "sorbe", "sorbi", "sorbo", "sorca", "sorci", "sorda", "sorde", "sordi", "sordo", "sorga", "sorge", "sorgi", "sorgo", "sorra", "sorre", "sorsa", "sorse", "sorsi", "sorso", "sorta", "sorte", "sorti", "sorto", "sosia", "sosta", "soste", "sosti", "sosto", "sotho", "sotta", "sotti", "sotto", "sovra", "sozio", "sozza", "sozze", "sozzi", "sozzo", "spada", "spade", "spago", "spaia", "spaio", "spala", "spali", "spalo", "spana", "spani", "spano", "spara", "spari", "sparo", "spasa", "spase", "spasi", "spaso", "spata", "spate", "spati", "spato", "spazi", "speck", "speco", "speda", "spedi", "spedo", "spela", "speli", "spelo", "speme", "spemi", "spene", "speni", "spepa", "spepe", "spera", "spere", "speri", "spero", "spesa", "spese", "spesi", "speso", "spezi", "spiai", "spica", "spiga", "spigo", "spike", "spina", "spine", "spini", "spino", "spira", "spire", "spiri", "spiro", "spola", "spole", "spone", "sponi", "spora", "spore", "sport", "sposa", "spose", "sposi", "sposo", "sprue", "spula", "spuli", "spulo", "spuma", "spume", "spumi", "spumo", "spura", "spuri", "spuro", "sputa", "sputi", "sputo", "stadi", "stage", "staia", "staio", "stame", "stami", "stana", "stani", "stano", "stara", "stare", "stari", "staro", "stasa", "stasi", "staso", "stata", "state", "stati", "stato", "stava", "stavi", "stavo", "steca", "stele", "steli", "stelo", "steno", "steri", "stero", "stesa", "stese", "stesi", "steso", "stibi", "stici", "stico", "stiga", "stigi", "stigo", "stila", "stile", "stili", "stilo", "stima", "stime", "stimi", "stimo", "stina", "stini", "stino", "stipa", "stipe", "stipi", "stipo", "stira", "stiri", "stiro", "stiva", "stive", "stivi", "stivo", "stoga", "stogo", "stoia", "stoio", "stola", "stole", "stoma", "stomi", "stona", "stone", "stoni", "stono", "store", "stori", "stria", "strie", "strio", "studi", "stufa", "stufe", "stufi", "stufo", "stura", "sture", "sturi", "sturo", "stuta", "stuti", "stuto", "style", "suari", "suave", "suavi", "subbi", "subii", "succi", "succo", "suchi", "sudai", "sugai", "sugga", "sugge", "suggi", "suggo", "sughi", "sugli", "sugna", "sugne", "suide", "suidi", "suina", "suine", "suini", "suino", "suite", "sulka", "sulla", "sulle", "sullo", "summa", "summe", "sunna", "sunne", "sunti", "sunto", "suola", "suole", "suoli", "suolo", "suona", "suoni", "suono", "suora", "suore", "super", "surfa", "surfi", "surfo", "surga", "surge", "surgi", "surgo", "surma", "surra", "surre", "surse", "sursi", "surta", "surte", "surti", "surto", "susci", "sushi", "sussi", "susta", "suste", "sutha", "suthe", "suthi", "sutho", "sutra", "sutri", "sutro", "suzza", "suzzi", "suzzo", "svaga", "svago", "svani", "svapa", "svapi", "svapo", "svari", "svasa", "svasi", "svaso", "svela", "sveli", "svelo", "svena", "sveni", "sveno", "sveva", "sveve", "svevi", "svevo", "sviai", "svina", "svini", "svino", "svisa", "svisi", "sviso", "svita", "sviti", "svito", "sviva", "svivi", "svivo", "svizi", "svola", "svoli", "svolo", "svota", "svoti", "svoto", "svuoi", "swazi", "tabla", "tacca", "tacce", "tacci", "tacco", "taffi", "tafia", "tafie", "tafii", "tafio", "tagga", "taggo", "tagli", "taide", "taidi", "taiga", "taiko", "taina", "taine", "taini", "taino", "talco", "talea", "talee", "talli", "tallo", "talpa", "talpe", "tamia", "tanai", "tanca", "tanco", "tanfa", "tanfi", "tanfo", "tanga", "tange", "tango", "tanna", "tanni", "tanno", "tanta", "tante", "tanti", "tanto", "tappa", "tappe", "tappi", "tappo", "tarai", "tarda", "tarde", "tardi", "tardo", "targa", "targo", "tarla", "tarli", "tarlo", "tarma", "tarme", "tarmi", "tarmo", "tarpa", "tarpi", "tarpo", "tarsi", "tasca", "tassa", "tasse", "tassi", "tasso", "tasta", "taste", "tasti", "tasto", "tatti", "tatto", "tatua", "tatui", "tatuo", "taura", "taure", "tauri", "tauro", "tazza", "tazze", "tebea", "tebee", "tebei", "tebeo", "tecca", "teche", "tecno", "tedia", "tedio", "tegea", "tegee", "tegei", "tegeo", "teghe", "teide", "teidi", "teina", "teine", "teita", "teite", "teiti", "telai", "temei", "tempa", "tempe", "tempi", "tempo", "tenda", "tende", "tendi", "tendo", "tenei", "tenga", "tenge", "tengo", "tenia", "tenie", "tenne", "tenni", "tenno", "tensa", "tense", "tenta", "tenti", "tento", "tenue", "tenui", "tenza", "tenze", "tepee", "teppa", "teppe", "terbi", "terga", "terge", "tergi", "tergo", "terme", "termo", "terna", "terne", "terni", "terno", "terra", "terre", "tersa", "terse", "tersi", "terso", "terza", "terze", "terzi", "terzo", "tesai", "tesla", "tesle", "tessa", "tesse", "tessi", "tesso", "testa", "teste", "testi", "testo", "tetra", "tetre", "tetri", "tetro", "tetta", "tette", "tetti", "tetto", "texta", "texte", "texti", "texto", "theta", "tiade", "tiadi", "tiara", "tiare", "tiasi", "tiaso", "tibia", "tibie", "tiene", "tieni", "tifai", "tigli", "tigna", "tigne", "tigni", "tigno", "tigra", "tigre", "tigri", "tigro", "tigua", "tilde", "tildi", "tilla", "tille", "tilli", "tillo", "timpa", "timpe", "tinca", "tinga", "tinge", "tingi", "tingo", "tinse", "tinsi", "tinta", "tinte", "tinti", "tinto", "tioli", "tiolo", "tirai", "tirsi", "tirso", "tizia", "tizie", "tizio", "tizzi", "tizzo", "tmesi", "toast", "tocai", "tocca", "tocco", "tochi", "toghe", "toghi", "togli", "tokai", "tolda", "tolde", "tolga", "tolgo", "tolla", "tolle", "tolse", "tolsi", "tolta", "tolte", "tolti", "tolto", "tomai", "tomba", "tombe", "tombi", "tombo", "tonai", "tonda", "tonde", "tondi", "tondo", "tonfa", "tonfi", "tonfo", "tonia", "tonie", "tonni", "tonno", "tonta", "tonte", "tonti", "tonto", "topoi", "toppa", "toppe", "toppi", "toppo", "toque", "torba", "torbe", "torbi", "torbo", "torca", "torce", "torci", "torco", "tordi", "tordo", "torea", "torei", "toreo", "torio", "torli", "torlo", "torma", "torme", "torna", "torni", "torno", "torre", "torri", "torse", "torsi", "torso", "torta", "torte", "torti", "torto", "torva", "torve", "torvi", "torvo", "tosai", "tosca", "tosco", "tossa", "tosse", "tossi", "tosso", "tosta", "toste", "tosti", "tosto", "totem", "tozza", "tozze", "tozzi", "tozzo", "trace", "traci", "trade", "trago", "trama", "trame", "trami", "tramo", "trana", "trani", "trano", "trans", "trapa", "trape", "trare", "trave", "travi", "trema", "tremi", "tremo", "trena", "treni", "treno", "trevi", "trevo", "triai", "tribi", "tribo", "tribu", "triga", "trike", "trina", "trine", "trini", "trino", "trita", "trite", "triti", "trito", "trivi", "troco", "troia", "troie", "troll", "trona", "trone", "troni", "trono", "tropi", "tropo", "trota", "trote", "trova", "trovi", "trovo", "truca", "truce", "truci", "truka", "truke", "tsuga", "tubai", "tufai", "tuffa", "tuffi", "tuffo", "tughe", "tulio", "tulle", "tumba", "tunna", "tunne", "tunni", "tunno", "tuona", "tuoni", "tuono", "turai", "turba", "turbe", "turbi", "turbo", "turca", "turco", "turma", "turme", "turna", "turni", "turno", "turpe", "turpi", "tusca", "tusco", "tutai", "tutor", "tutsi", "tutta", "tutte", "tutti", "tutto", "tuzia", "tuzie", "ubbia", "ubbie", "ubera", "ubere", "uberi", "ubero", "ubica", "ubico", "ubini", "ubino", "uccia", "uccio", "udire", "udita", "udite", "uditi", "udito", "udiva", "udivi", "udivo", "udrai", "udrei", "ufizi", "uggia", "uggii", "uggio", "ugnai", "ugola", "ugole", "ukase", "ukiyo", "ulama", "ulani", "ulano", "ulema", "ulese", "ulesi", "ulice", "ulici", "ulite", "uliti", "uliva", "ulive", "ulivi", "ulivo", "ultra", "ulula", "ulule", "ululi", "ululo", "umana", "umane", "umani", "umano", "umata", "umate", "umati", "umato", "umbra", "umbre", "umbri", "umbro", "umica", "umici", "umico", "umida", "umide", "umidi", "umido", "umile", "umili", "umore", "umori", "unari", "unica", "unici", "unico", "unire", "unita", "unite", "uniti", "unito", "univa", "univi", "univo", "unqua", "unque", "untai", "upupa", "upupe", "urali", "urati", "urato", "urese", "uresi", "urica", "urici", "urico", "urina", "urine", "urini", "urino", "urlai", "urlii", "urlio", "urone", "uroni", "urtai", "usaci", "usala", "usale", "usali", "usalo", "usami", "usane", "usano", "usare", "usata", "usate", "usati", "usato", "usava", "usavi", "usavo", "uscii", "uscio", "usino", "usura", "usure", "usuri", "usuro", "uteri", "utero", "utese", "utesi", "utile", "utili", "uvala", "uvale", "uvina", "uvine", "uvola", "uvole", "uvosa", "uvose", "uvosi", "uvoso", "uvula", "uvule", "uxori", "vacai", "vacca", "vacci", "vachi", "vacua", "vacue", "vacui", "vacuo", "vaffa", "vagai", "vaghe", "vaghi", "vagii", "vagli", "vaiai", "valga", "valgo", "valla", "valle", "valli", "vallo", "valsa", "valse", "valsi", "valso", "valva", "valve", "vammi", "vampa", "vampe", "vampi", "vampo", "vanai", "vanea", "vanei", "vaneo", "vanga", "vango", "vania", "vanie", "vanii", "vanio", "vanne", "vanni", "vanno", "vanta", "vanti", "vanto", "varai", "varca", "varco", "varea", "varee", "varia", "varie", "vario", "varva", "varve", "vasai", "vasca", "vasta", "vaste", "vasti", "vasto", "vatti", "vauda", "vaude", "vecce", "vecia", "vecio", "vedda", "vegge", "veggi", "vegli", "velai", "velia", "velie", "velli", "vello", "velma", "velme", "venai", "venda", "vende", "vendi", "vendo", "venga", "vengi", "vengo", "venia", "venie", "venne", "venni", "venta", "venti", "vento", "vepre", "vepri", "vepsa", "vepse", "vepsi", "vepso", "verbi", "verbo", "verde", "verdi", "verga", "verge", "vergi", "vergo", "verla", "verle", "verme", "vermi", "vermo", "verna", "verne", "verni", "verno", "verri", "verro", "versa", "verse", "versi", "verso", "verta", "verte", "verti", "verto", "verve", "verza", "verze", "vesce", "vespa", "vespe", "vessa", "vessi", "vesso", "vesta", "veste", "vesti", "vesto", "vetri", "vetro", "vetta", "vette", "vezzi", "vezzo", "viado", "viale", "viali", "viari", "vibra", "vibri", "vibro", "vichi", "video", "viene", "vieni", "viera", "viere", "vieri", "viero", "vieta", "viete", "vieti", "vieto", "vigli", "vigna", "vigne", "vilai", "vilii", "villa", "ville", "villi", "villo", "vimai", "vinai", "vinca", "vince", "vinci", "vinco", "vinea", "vinee", "vinse", "vinsi", "vinta", "vinte", "vinti", "vinto", "viola", "viole", "violi", "violo", "vipla", "viple", "virai", "virei", "vireo", "virga", "virgo", "virtu", "virus", "visai", "visco", "vispa", "vispe", "vispi", "vispo", "visse", "vissi", "vista", "viste", "visti", "visto", "vitae", "vitai", "vitro", "vitta", "vitte", "vitti", "vitto", "vivai", "vizia", "vizio", "vizza", "vizze", "vizzi", "vizzo", "vocai", "vochi", "vocia", "vocii", "vocio", "vodka", "vogai", "voghe", "voghi", "vogli", "voice", "voile", "volai", "volca", "volco", "volee", "volga", "volge", "volgi", "volgo", "volle", "volli", "volpa", "volpe", "volpi", "volpo", "volse", "volsi", "volta", "volte", "volti", "volto", "volva", "volve", "volvi", "volvo", "vomii", "vorai", "vosco", "votai", "votii", "vulga", "vulgo", "vulva", "vulve", "vuole", "vuota", "vuote", "vuoti", "vuoto", "wakhi", "wasca", "wasce", "wasci", "wasco", "washa", "washe", "washi", "washo", "wayaa", "wayae", "wayai", "wayao", "white", "whiti", "widia", "xenia", "xenie", "xenon", "xhosa", "yagua", "yamea", "yamee", "yamei", "yameo", "yaqui", "yoghi", "yucca", "yuchi", "yurta", "yurte", "zabri", "zabro", "zaffa", "zaffe", "zaffi", "zaffo", "zaina", "zaine", "zaini", "zaino", "zaire", "zamba", "zambo", "zamia", "zamie", "zampa", "zampe", "zampi", "zampo", "zanca", "zande", "zanna", "zanne", "zanni", "zanno", "zappa", "zappe", "zappi", "zappo", "zarri", "zarro", "zatta", "zatte", "zebra", "zebre", "zebri", "zebro", "zecca", "zecco", "zelai", "zenda", "zende", "zendi", "zendo", "zenit", "zeppa", "zeppe", "zeppi", "zeppo", "zerbi", "zerbo", "zerga", "zerge", "zergi", "zergo", "zetti", "zetto", "zifio", "zigai", "zighi", "zigna", "zigni", "zigno", "zilla", "zilli", "zillo", "zinca", "zinco", "zinia", "zinie", "zinna", "zinne", "zinni", "zinno", "ziona", "zione", "zioni", "zippa", "zippi", "zippo", "zirbi", "zirbo", "zirla", "zirli", "zirlo", "zitta", "zitte", "zitti", "zitto", "zizza", "zizze", "zoeci", "zolfa", "zolfi", "zolfo", "zolla", "zolle", "zolli", "zollo", "zomba", "zombi", "zombo", "zompa", "zompi", "zompo", "zonai", "zonzo", "zooma", "zoomi", "zoomo", "zoppa", "zoppe", "zoppi", "zoppo", "zoque", "zoqui", "zozza", "zozze", "zozzi", "zozzo", "zuava", "zuave", "zuavi", "zuavo", "zucca", "zuffa", "zuffe", "zughi", "zumai", "zuppa", "zuppe", "zuppi", "zuppo", "zurla", "zurli", "zurlo"],
                te, ie  = ["occhi", "benda", "setto", "ernia", "tatto", "sordo", "ebola", "urato", "covid", "callo", "alito", "botox", "umano", "ansia", "pelle", "meato", "aulin", "fiato", "borsa", "anite", "stoma", "gotta", "ioide", "fever", "robot", "petri", "crohn", "psoas", "fivet", "sonda", "zolfo", "acido", "shock", "lupus", "vulva", "tavor", "crile", "pomfo", "corpo", "udito", "litio", "polpa", "foley", "allis", "zimox", "uraco", "zaffo", "xanax", "hnpcc", "esone", "alpps", "etere", "sepsi", "acuto", "algia", "bronj", "elape", "corti", "salma", "mente", "soleo", "uncus", "htert", "vater", "fovea", "stemm", "plica", "urina", "logge", "parto", "gesso", "picee", "canto", "testa", "spore", "muffa", "milza", "sigma", "cisti", "sella", "trago", "villi", "ponte", "olier", "volto", "ugola", "lembo", "sensi", "enpam", "quick", "pulce", "pessi", "apert", "xelox", "bario", "hegar", "apgar", "suina", "redon", "retto", "frova", "nervo", "obeso", "ppoma", "purga", "calor", "raspa", "germe", "verme", "cauda", "bakri", "torso", "azoto", "vista", "adipe", "sodio", "kelly", "gamba", "imene", "ictus", "apnea", "lynch", "miope", "ronco", "valgo", "tigna", "mesna", "dieta", "collo", "medio", "ritmo", "pompa", "polso", "ewing", "linfa", "tenue", "dakin", "otite", "prono", "atono", "zecca", "colla", "potus", "porta", "flebo", "alcol", "tibia", "aorta", "derma", "garza", "piaga", "fobia", "gocce", "tarso", "pelvi", "emesi", "siero", "ameba", "duval", "anche", "ostio", "elice", "soffi", "iodio", "crema", "addis", "atrio", "carie", "gusto", "valva", "omero", "barba", "corde", "orvil", "bulbo", "latte", "dotto", "still", "palmo", "osseo", "dente", "lisch", "acqua", "sacca", "mento", "onico", "laser", "tenar", "adson", "passo", "piede", "starr", "visus", "fasci", "fabry", "siadh", "labbe", "istmo", "magro", "krebs", "rigor", "willi", "raggi", "coito", "talco", "rotch", "edema", "piega", "chilo", "umori", "sinus", "disco", "cieco", "patau", "iride", "longo", "dolor", "petto", "wells", "angor", "solco", "ferro", "ramie", "mutyh", "epcam", "gozzo", "kline", "reboa", "fresa", "chimo", "biota", "bocca", "virus", "brain", "flora", "lenti", "sotos", "ozono", "afono", "fiala", "fungo", "calvo", "sacro", "pompe", "tenia", "golgi", "galea", "tinca", "morte", "vasto", "clamp", "mania", "lasix", "mioma", "nigra", "sonno", "atomo", "pipac", "irccs", "tosse", "cloro", "ovulo", "colon", "drill", "morbo", "emina", "cromo", "acaro", "largo", "cuore", "lombo", "ciclo", "ldopa", "tumor", "ovaio", "gigli", "obgyn", "hipec", "turbe", "fibra", "dorso", "allen", "pinza", "lacci", "punto", "rubor", "costa", "carpo", "tatme", "radio", "zinco", "utero", "campo", "globo", "peste", "cocco", "piezo", "glomo", "tamis", "baffi", "coane"],
                oe = ["Great Job!", "Awesome", "Well done!"],
                re = function(e) {
                    return "La parola era ".concat(e)
                },
                le = function(e, a) {
                    return "Devi usare la ".concat(e, " nella posizione ").concat(a)
                },
                se = function(e) {
                    return "Il tentativo deve contenere la ".concat(e)
                },
                ue = "Statistiche",
                ce = function(e, a) {
                    var t, i = new Set,
                        o = function(e, a) {
                            var t = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (!t) {
                                if (Array.isArray(e) || (t = n(e)) || a && e && "number" === typeof e.length) {
                                    t && (e = t);
                                    var i = 0,
                                        o = function() {};
                                    return {
                                        s: o,
                                        n: function() {
                                            return i >= e.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: e[i++]
                                            }
                                        },
                                        e: function(e) {
                                            throw e
                                        },
                                        f: o
                                    }
                                }
                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }
                            var r, l = !0,
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
                                    s = !0, r = e
                                },
                                f: function() {
                                    try {
                                        l || null == t.return || t.return()
                                    } finally {
                                        if (s) throw r
                                    }
                                }
                            }
                        }(a);
                    try {
                        for (o.s(); !(t = o.n()).done;)
                            for (var r = t.value, l = ge(r), s = 0; s < r.length; s++)
                                if ("correct" !== l[s] && "present" !== l[s] || i.add(r[s]), "correct" === l[s] && e[s] !== r[s]) return le(r[s], s + 1)
                    } catch (d) {
                        o.e(d)
                    } finally {
                        o.f()
                    }
                    for (var u = 0, c = Array.from(i.values()); u < c.length; u++) {
                        var f = c[u];
                        if (!e.includes(f)) return se(f)
                    }
                    return !1
                },
                fe = function() {
                    var e = new Date("March 01, 2023 00:00:00").valueOf(),
                        a = Date.now(),
                        t = 864e5,
                        i = Math.floor((a - e) / t),
                        n = (i + 1) * t + e;
                    return {
                        solution: ie[i % ie.length].toUpperCase(),
                        solutionIndex: i,
                        tomorrow: n
                    }
                }(),
                de = fe.solution,
                pe = fe.solutionIndex,
                me = fe.tomorrow,
                ge = function(e) {
                    var a = de.split(""),
                        t = e.split(""),
                        i = a.map((function(e) {
                            return !1
                        })),
                        n = Array.from(Array(e.length));
                    return t.forEach((function(e, t) {
                        if (e === a[t]) return n[t] = "correct", void(i[t] = !0)
                    })), t.forEach((function(e, t) {
                        if (!n[t]) {
                            if (a.includes(e)) {
                                var o = a.findIndex((function(a, t) {
                                    return a === e && !i[t]
                                }));
                                return o > -1 ? (n[t] = "present", void(i[o] = !0)) : void(n[t] = "absent")
                            }
                            n[t] = "absent"
                        }
                    })), n
                },
                ve = "gameState",
                be = "highContrast",
                he = "gameStats",
                ye = function() {
                    return "1" === localStorage.getItem(be)
                },
                ze = function(e) {
                    var a = e.value,
                        t = e.status,
                        i = e.isRevealing,
                        n = e.isCompleted,
                        o = e.position,
                        r = a && !n,
                        l = i && n,
                        s = "".concat((void 0 === o ? 0 : o) * ae, "ms"),
                        u = ye(),
                        c = X()("w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white", {
                            "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600": !t,
                            "border-black dark:border-slate-100": a && !t,
                            "absent shadowed bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700": "absent" === t,
                            "correct shadowed bg-orange-500 text-white border-orange-500": "correct" === t && u,
                            "present shadowed bg-cyan-500 text-white border-cyan-500": "present" === t && u,
                            "correct shadowed bg-green-500 text-white border-green-500": "correct" === t && !u,
                            "present shadowed bg-yellow-500 text-white border-yellow-500": "present" === t && !u,
                            "cell-fill-animation": r,
                            "cell-reveal": l
                        });
                    return (0, J.jsx)("div", {
                        className: c,
                        style: {
                            animationDelay: s
                        },
                        children: (0, J.jsx)("div", {
                            className: "letter-container",
                            style: {
                                animationDelay: s
                            },
                            children: a
                        })
                    })
                },
                we = function(e) {
                    var a = e.guess,
                        t = e.isRevealing,
                        i = ge(a);
                    return (0, J.jsx)("div", {
                        className: "flex justify-center mb-1",
                        children: a.split("").map((function(e, a) {
                            return (0, J.jsx)(ze, {
                                value: e,
                                status: i[a],
                                position: a,
                                isRevealing: t,
                                isCompleted: !0
                            }, a)
                        }))
                    })
                },
                ke = function(e) {
                    var a = e.guess,
                        t = e.className,
                        i = a.split(""),
                        n = Array.from(Array(5 - i.length)),
                        o = "flex justify-center mb-1 ".concat(t);
                    return (0, J.jsxs)("div", {
                        className: o,
                        children: [i.map((function(e, a) {
                            return (0, J.jsx)(ze, {
                                value: e
                            }, a)
                        })), n.map((function(e, a) {
                            return (0, J.jsx)(ze, {}, a)
                        }))]
                    })
                },
                xe = function() {
                    var e = Array.from(Array(5));
                    return (0, J.jsx)("div", {
                        className: "flex justify-center mb-1",
                        children: e.map((function(e, a) {
                            return (0, J.jsx)(ze, {}, a)
                        }))
                    })
                },
                Se = function(e) {
                    var a = e.guesses,
                        t = e.currentGuess,
                        i = e.isRevealing,
                        n = e.currentRowClassName,
                        o = a.length < 5 ? Array.from(Array(5 - a.length)) : [];
                    return (0, J.jsxs)("div", {
                        className: "pb-6",
                        children: [a.map((function(e, t) {
                            return (0, J.jsx)(we, {
                                guess: e,
                                isRevealing: i && a.length - 1 === t
                            }, t)
                        })), a.length < 6 && (0, J.jsx)(ke, {
                            guess: t,
                            className: n
                        }), o.map((function(e, a) {
                            return (0, J.jsx)(xe, {}, a)
                        }))]
                    })
                },
                Ee = function(e) {
                    var a = e.children,
                        t = e.status,
                        i = e.width,
                        n = void 0 === i ? 40 : i,
                        o = e.value,
                        r = e.onClick,
                        l = e.isRevealing,
                        s = ye(),
                        u = X()("flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-white", {
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
                            width: "".concat(n, "px"),
                            height: "58px"
                        };
                    return (0, J.jsx)("button", {
                        style: c,
                        className: u,
                        onClick: function(e) {
                            r(o), e.currentTarget.blur()
                        },
                        children: a || o
                    })
                },
                Ce = function(a) {
                    var t = a.onChar,
                        i = a.onDelete,
                        n = a.onEnter,
                        o = a.guesses,
                        r = a.isRevealing,
                        l = function(e) {
                            var a = {};
                            return e.forEach((function(e) {
                                e.split("").forEach((function(e, t) {
                                    return de.includes(e) ? e === de[t] ? a[e] = "correct" : "correct" !== a[e] ? a[e] = "present" : void 0 : a[e] = "absent"
                                }))
                            })), a
                        }(o),
                        s = function(e) {
                            "ENTER" === e ? n() : "DELETE" === e ? i() : t(e)
                        };
                    return (0, e.useEffect)((function() {
                        var e = function(e) {
                            if ("Enter" === e.code) n();
                            else if ("Backspace" === e.code) i();
                            else {
                                var a = e.key.toUpperCase();
                                1 === a.length && a >= "A" && a <= "Z" && t(a)
                            }
                        };
                        return window.addEventListener("keyup", e),
                            function() {
                                window.removeEventListener("keyup", e)
                            }
                    }), [n, i, t]), (0, J.jsxs)("div", {
                        children: [(0, J.jsx)("div", {
                            className: "flex justify-center mb-1",
                            children: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((function(e) {
                                return (0, J.jsx)(Ee, {
                                    value: e,
                                    onClick: s,
                                    status: l[e],
                                    isRevealing: r
                                }, e)
                            }))
                        }), (0, J.jsx)("div", {
                            className: "flex justify-center mb-1",
                            children: ["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((function(e) {
                                return (0, J.jsx)(Ee, {
                                    value: e,
                                    onClick: s,
                                    status: l[e],
                                    isRevealing: r
                                }, e)
                            }))
                        }), (0, J.jsxs)("div", {
                            className: "flex justify-center",
                            children: [(0, J.jsx)(Ee, {
                                width: 65.4,
                                value: "ENTER",
                                onClick: s,
                                children: "Invia"
                            }), ["Z", "X", "C", "V", "B", "N", "M"].map((function(e) {
                                return (0, J.jsx)(Ee, {
                                    value: e,
                                    onClick: s,
                                    status: l[e],
                                    isRevealing: r
                                }, e)
                            })), (0, J.jsx)(Ee, {
                                width: 65.4,
                                value: "DELETE",
                                onClick: s,
                                children: "Cancella"
                            })]
                        })]
                    })
                };

            function Te() {
                for (var a = arguments.length, t = new Array(a), i = 0; i < a; i++) t[i] = arguments[i];
                var n = (0, e.useRef)(t);
                return (0, e.useEffect)((function() {
                    n.current = t
                }), [t]), (0, e.useCallback)((function(e) {
                    for (var a, t = v(n.current); !(a = t()).done;) {
                        var i = a.value;
                        null != i && ("function" === typeof i ? i(e) : i.current = e)
                    }
                }), [n])
            }

            function _e(e) {
                for (var a, t, i = e.parentElement, n = null; i && !(i instanceof HTMLFieldSetElement);) i instanceof HTMLLegendElement && (n = i), i = i.parentElement;
                var o = null != (a = "" === (null == (t = i) ? void 0 : t.getAttribute("disabled"))) && a;
                return (!o || ! function(e) {
                    if (!e) return !1;
                    var a = e.previousElementSibling;
                    for (; null !== a;) {
                        if (a instanceof HTMLLegendElement) return !1;
                        a = a.previousElementSibling
                    }
                    return !0
                }(n)) && o
            }

            function Ne(a, t, i) {
                var n = (0, e.useRef)(t);
                n.current = t, (0, e.useEffect)((function() {
                    function e(e) {
                        n.current.call(window, e)
                    }
                    return window.addEventListener(a, e, i),
                        function() {
                            return window.removeEventListener(a, e, i)
                        }
                }), [a, i])
            }! function(e) {
                e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab"
            }(te || (te = {}));
            var je, Oe, Pe, Le, Me, Re = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((function(e) {
                return e + ":not([tabindex='-1'])"
            })).join(",");

            function De(e) {
                null == e || e.focus({
                    preventScroll: !0
                })
            }

            function Fe(e, a) {
                var t = Array.isArray(e) ? e : function(e) {
                        return void 0 === e && (e = document.body), null == e ? [] : Array.from(e.querySelectorAll(Re))
                    }(e),
                    i = document.activeElement,
                    n = function() {
                        if (a & (je.First | je.Next)) return Pe.Next;
                        if (a & (je.Previous | je.Last)) return Pe.Previous;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    }(),
                    o = function() {
                        if (a & je.First) return 0;
                        if (a & je.Previous) return Math.max(0, t.indexOf(i)) - 1;
                        if (a & je.Next) return Math.max(0, t.indexOf(i)) + 1;
                        if (a & je.Last) return t.length - 1;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    }(),
                    r = a & je.NoScroll ? {
                        preventScroll: !0
                    } : {},
                    l = 0,
                    s = t.length,
                    u = void 0;
                do {
                    var c;
                    if (l >= s || l + s <= 0) return Oe.Error;
                    var f = o + l;
                    if (a & je.WrapAround) f = (f + s) % s;
                    else {
                        if (f < 0) return Oe.Underflow;
                        if (f >= s) return Oe.Overflow
                    }
                    null == (c = u = t[f]) || c.focus(r), l += n
                } while (u !== document.activeElement);
                return u.hasAttribute("tabindex") || u.setAttribute("tabindex", "0"), Oe.Success
            }

            function Ie(a, t, i) {
                void 0 === t && (t = Me.All);
                var n = void 0 === i ? {} : i,
                    o = n.initialFocus,
                    r = n.containers,
                    l = (0, e.useRef)("undefined" !== typeof window ? document.activeElement : null),
                    s = (0, e.useRef)(null),
                    u = _(),
                    c = Boolean(t & Me.RestoreFocus),
                    f = Boolean(t & Me.InitialFocus);
                (0, e.useEffect)((function() {
                    c && (l.current = document.activeElement)
                }), [c]), (0, e.useEffect)((function() {
                    if (c) return function() {
                        De(l.current), l.current = null
                    }
                }), [c]), (0, e.useEffect)((function() {
                    if (f && a.current) {
                        var e = document.activeElement;
                        if (null == o ? void 0 : o.current) {
                            if ((null == o ? void 0 : o.current) === e) return void(s.current = e)
                        } else if (a.current.contains(e)) return void(s.current = e);
                        (null == o ? void 0 : o.current) ? De(o.current): Fe(a.current, je.First) === Oe.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), s.current = document.activeElement
                    }
                }), [a, o, f]), Ne("keydown", (function(e) {
                    t & Me.TabLock && a.current && e.key === te.Tab && (e.preventDefault(), Fe(a.current, (e.shiftKey ? je.Previous : je.Next) | je.WrapAround) === Oe.Success && (s.current = document.activeElement))
                })), Ne("focus", (function(e) {
                    if (t & Me.FocusLock) {
                        var i = new Set(null == r ? void 0 : r.current);
                        if (i.add(a), i.size) {
                            var n = s.current;
                            if (n && u.current) {
                                var o = e.target;
                                o && o instanceof HTMLElement ? ! function(e, a) {
                                    for (var t, i = v(e); !(t = i()).done;) {
                                        var n;
                                        if (null == (n = t.value.current) ? void 0 : n.contains(a)) return !0
                                    }
                                    return !1
                                }(i, o) ? (e.preventDefault(), e.stopPropagation(), De(n)) : (s.current = o, De(o)) : De(s.current)
                            }
                        }
                    }
                }), !0)
            }! function(e) {
                e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll"
            }(je || (je = {})),
            function(e) {
                e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow"
            }(Oe || (Oe = {})),
            function(e) {
                e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next"
            }(Pe || (Pe = {})),
            function(e) {
                e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose"
            }(Le || (Le = {})),
            function(e) {
                e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All"
            }(Me || (Me = {}));
            var Ae = new Set,
                Ue = new Map;

            function He(e) {
                e.setAttribute("aria-hidden", "true"), e.inert = !0
            }

            function qe(e) {
                var a = Ue.get(e);
                a && (null === a["aria-hidden"] ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", a["aria-hidden"]), e.inert = a.inert)
            }
            var Ve = (0, e.createContext)(!1);

            function We(a) {
                return e.createElement(Ve.Provider, {
                    value: a.force
                }, a.children)
            }

            function Be() {
                var a = (0, e.useContext)(Ve),
                    t = (0, e.useContext)(Ke),
                    i = (0, e.useState)((function() {
                        if (!a && null !== t) return null;
                        if ("undefined" === typeof window) return null;
                        var e = document.getElementById("headlessui-portal-root");
                        if (e) return e;
                        var i = document.createElement("div");
                        return i.setAttribute("id", "headlessui-portal-root"), document.body.appendChild(i)
                    })),
                    n = i[0],
                    o = i[1];
                return (0, e.useEffect)((function() {
                    a || null !== t && o(t.current)
                }), [t, o, a]), n
            }
            var $e = e.Fragment;

            function Qe(t) {
                var i = t,
                    n = Be(),
                    o = (0, e.useState)((function() {
                        return "undefined" === typeof window ? null : document.createElement("div")
                    }))[0],
                    r = S();
                return k((function() {
                    if (n && o) return n.appendChild(o),
                        function() {
                            var e;
                            n && (o && (n.removeChild(o), n.childNodes.length <= 0 && (null == (e = n.parentElement) || e.removeChild(n))))
                        }
                }), [n, o]), r && n && o ? (0, a.createPortal)(h({
                    props: i,
                    defaultTag: $e,
                    name: "Portal"
                }), o) : null
            }
            var Ye = e.Fragment,
                Ke = (0, e.createContext)(null);
            Qe.Group = function(a) {
                var t = a.target,
                    i = m(a, ["target"]);
                return e.createElement(Ke.Provider, {
                    value: t
                }, h({
                    props: i,
                    defaultTag: Ye,
                    name: "Popover.Group"
                }))
            };
            var Ge = (0, e.createContext)(null);

            function Xe() {
                var a = (0, e.useContext)(Ge);
                if (null === a) {
                    var t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(t, Xe), t
                }
                return a
            }
            var Je, Ze, ea, aa, ta = (0, e.createContext)((function() {}));

            function ia(a) {
                var t = a.children,
                    i = a.onUpdate,
                    n = a.type,
                    o = a.element,
                    r = (0, e.useContext)(ta),
                    l = (0, e.useCallback)((function() {
                        for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                        null == i || i.apply(void 0, a), r.apply(void 0, a)
                    }), [r, i]);
                return k((function() {
                    return l(Je.Add, n, o),
                        function() {
                            return l(Je.Remove, n, o)
                        }
                }), [l, n, o]), e.createElement(ta.Provider, {
                    value: l
                }, t)
            }
            ta.displayName = "StackContext",
                function(e) {
                    e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove"
                }(Je || (Je = {})),
                function(e) {
                    e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed"
                }(ea || (ea = {})),
                function(e) {
                    e[e.SetTitleId = 0] = "SetTitleId"
                }(aa || (aa = {}));
            var na = ((Ze = {})[aa.SetTitleId] = function(e, a) {
                    return e.titleId === a.id ? e : p({}, e, {
                        titleId: a.id
                    })
                }, Ze),
                oa = (0, e.createContext)(null);

            function ra(a) {
                var t = (0, e.useContext)(oa);
                if (null === t) {
                    var i = new Error("<" + a + " /> is missing a parent <" + fa.displayName + " /> component.");
                    throw Error.captureStackTrace && Error.captureStackTrace(i, ra), i
                }
                return t
            }

            function la(e, a) {
                return b(a.type, na, e, a)
            }
            oa.displayName = "DialogContext";
            var sa = f.RenderStrategy | f.Static,
                ua = z((function(a, t) {
                    var i, n = a.open,
                        o = a.onClose,
                        r = a.initialFocus,
                        l = m(a, ["open", "onClose", "initialFocus"]),
                        s = (0, e.useState)(0),
                        u = s[0],
                        c = s[1],
                        f = P();
                    void 0 === n && null !== f && (n = b(f, ((i = {})[N.Open] = !0, i[N.Closed] = !1, i)));
                    var d = (0, e.useRef)(new Set),
                        g = (0, e.useRef)(null),
                        y = Te(g, t),
                        z = a.hasOwnProperty("open") || null !== f,
                        w = a.hasOwnProperty("onClose");
                    if (!z && !w) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
                    if (!z) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
                    if (!w) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
                    if ("boolean" !== typeof n) throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: " + n);
                    if ("function" !== typeof o) throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: " + o);
                    var x = n ? ea.Open : ea.Closed,
                        E = null !== f ? f === N.Open : x === ea.Open,
                        C = (0, e.useReducer)(la, {
                            titleId: null,
                            descriptionId: null
                        }),
                        _ = C[0],
                        j = C[1],
                        O = (0, e.useCallback)((function() {
                            return o(!1)
                        }), [o]),
                        L = (0, e.useCallback)((function(e) {
                            return j({
                                type: aa.SetTitleId,
                                id: e
                            })
                        }), [j]),
                        M = S() && x === ea.Open,
                        R = u > 1,
                        D = null !== (0, e.useContext)(oa);
                    Ie(g, M ? b(R ? "parent" : "leaf", {
                            parent: Me.RestoreFocus,
                            leaf: Me.All
                        }) : Me.None, {
                            initialFocus: r,
                            containers: d
                        }),
                        function(e, a) {
                            void 0 === a && (a = !0), k((function() {
                                if (a && e.current) {
                                    var t = e.current;
                                    Ae.add(t);
                                    for (var i, n = v(Ue.keys()); !(i = n()).done;) {
                                        var o = i.value;
                                        o.contains(t) && (qe(o), Ue.delete(o))
                                    }
                                    return document.querySelectorAll("body > *").forEach((function(e) {
                                            if (e instanceof HTMLElement) {
                                                for (var a, t = v(Ae); !(a = t()).done;) {
                                                    var i = a.value;
                                                    if (e.contains(i)) return
                                                }
                                                1 === Ae.size && (Ue.set(e, {
                                                    "aria-hidden": e.getAttribute("aria-hidden"),
                                                    inert: e.inert
                                                }), He(e))
                                            }
                                        })),
                                        function() {
                                            if (Ae.delete(t), Ae.size > 0) document.querySelectorAll("body > *").forEach((function(e) {
                                                if (e instanceof HTMLElement && !Ue.has(e)) {
                                                    for (var a, t = v(Ae); !(a = t()).done;) {
                                                        var i = a.value;
                                                        if (e.contains(i)) return
                                                    }
                                                    Ue.set(e, {
                                                        "aria-hidden": e.getAttribute("aria-hidden"),
                                                        inert: e.inert
                                                    }), He(e)
                                                }
                                            }));
                                            else
                                                for (var e, a = v(Ue.keys()); !(e = a()).done;) {
                                                    var i = e.value;
                                                    qe(i), Ue.delete(i)
                                                }
                                        }
                                }
                            }), [a])
                        }(g, !!R && M), Ne("mousedown", (function(e) {
                            var a, t = e.target;
                            x === ea.Open && (R || (null == (a = g.current) ? void 0 : a.contains(t)) || O())
                        })), Ne("keydown", (function(e) {
                            e.key === te.Escape && x === ea.Open && (R || (e.preventDefault(), e.stopPropagation(), O()))
                        })), (0, e.useEffect)((function() {
                            if (x === ea.Open && !D) {
                                var e = document.documentElement.style.overflow,
                                    a = document.documentElement.style.paddingRight,
                                    t = window.innerWidth - document.documentElement.clientWidth;
                                return document.documentElement.style.overflow = "hidden", document.documentElement.style.paddingRight = t + "px",
                                    function() {
                                        document.documentElement.style.overflow = e, document.documentElement.style.paddingRight = a
                                    }
                            }
                        }), [x, D]), (0, e.useEffect)((function() {
                            if (x === ea.Open && g.current) {
                                var e = new IntersectionObserver((function(e) {
                                    for (var a, t = v(e); !(a = t()).done;) {
                                        var i = a.value;
                                        0 === i.boundingClientRect.x && 0 === i.boundingClientRect.y && 0 === i.boundingClientRect.width && 0 === i.boundingClientRect.height && O()
                                    }
                                }));
                                return e.observe(g.current),
                                    function() {
                                        return e.disconnect()
                                    }
                            }
                        }), [x, g, O]);
                    var F = function() {
                            var a = (0, e.useState)([]),
                                t = a[0],
                                i = a[1];
                            return [t.length > 0 ? t.join(" ") : void 0, (0, e.useMemo)((function() {
                                return function(a) {
                                    var t = (0, e.useCallback)((function(e) {
                                            return i((function(a) {
                                                    return [].concat(a, [e])
                                                })),
                                                function() {
                                                    return i((function(a) {
                                                        var t = a.slice(),
                                                            i = t.indexOf(e);
                                                        return -1 !== i && t.splice(i, 1), t
                                                    }))
                                                }
                                        }), []),
                                        n = (0, e.useMemo)((function() {
                                            return {
                                                register: t,
                                                slot: a.slot,
                                                name: a.name,
                                                props: a.props
                                            }
                                        }), [t, a.slot, a.name, a.props]);
                                    return e.createElement(Ge.Provider, {
                                        value: n
                                    }, a.children)
                                }
                            }), [i])]
                        }(),
                        I = F[0],
                        A = F[1],
                        U = "headlessui-dialog-" + T(),
                        H = (0, e.useMemo)((function() {
                            return [{
                                dialogState: x,
                                close: O,
                                setTitleId: L
                            }, _]
                        }), [x, _, O, L]),
                        q = (0, e.useMemo)((function() {
                            return {
                                open: x === ea.Open
                            }
                        }), [x]),
                        V = {
                            ref: y,
                            id: U,
                            role: "dialog",
                            "aria-modal": x === ea.Open || void 0,
                            "aria-labelledby": _.titleId,
                            "aria-describedby": I,
                            onClick: function(e) {
                                e.stopPropagation()
                            }
                        },
                        W = l;
                    return e.createElement(ia, {
                        type: "Dialog",
                        element: g,
                        onUpdate: (0, e.useCallback)((function(e, a, t) {
                            var i;
                            "Dialog" === a && b(e, ((i = {})[Je.Add] = function() {
                                d.current.add(t), c((function(e) {
                                    return e + 1
                                }))
                            }, i[Je.Remove] = function() {
                                d.current.add(t), c((function(e) {
                                    return e - 1
                                }))
                            }, i))
                        }), [])
                    }, e.createElement(We, {
                        force: !0
                    }, e.createElement(Qe, null, e.createElement(oa.Provider, {
                        value: H
                    }, e.createElement(Qe.Group, {
                        target: g
                    }, e.createElement(We, {
                        force: !1
                    }, e.createElement(A, {
                        slot: q,
                        name: "Dialog.Description"
                    }, h({
                        props: p({}, W, V),
                        slot: q,
                        defaultTag: "div",
                        features: sa,
                        visible: E,
                        name: "Dialog"
                    }))))))))
                })),
                ca = z((function a(t, i) {
                    var n = ra([fa.displayName, a.name].join("."))[0],
                        o = n.dialogState,
                        r = n.close,
                        l = Te(i),
                        s = "headlessui-dialog-overlay-" + T(),
                        u = (0, e.useCallback)((function(e) {
                            if (e.target === e.currentTarget) {
                                if (_e(e.currentTarget)) return e.preventDefault();
                                e.preventDefault(), e.stopPropagation(), r()
                            }
                        }), [r]),
                        c = (0, e.useMemo)((function() {
                            return {
                                open: o === ea.Open
                            }
                        }), [o]);
                    return h({
                        props: p({}, t, {
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
            var fa = Object.assign(ua, {
                    Overlay: ca,
                    Title: function a(t) {
                        var i = ra([fa.displayName, a.name].join("."))[0],
                            n = i.dialogState,
                            o = i.setTitleId,
                            r = "headlessui-dialog-title-" + T();
                        (0, e.useEffect)((function() {
                            return o(r),
                                function() {
                                    return o(null)
                                }
                        }), [r, o]);
                        var l = (0, e.useMemo)((function() {
                            return {
                                open: n === ea.Open
                            }
                        }), [n]);
                        return h({
                            props: p({}, t, {
                                id: r
                            }),
                            slot: l,
                            defaultTag: "h2",
                            name: "Dialog.Title"
                        })
                    },
                    Description: function(e) {
                        var a = Xe(),
                            t = "headlessui-description-" + T();
                        k((function() {
                            return a.register(t)
                        }), [t, a.register]);
                        var i = e,
                            n = p({}, a.props, {
                                id: t
                            });
                        return h({
                            props: p({}, i, n),
                            slot: a.slot || {},
                            defaultTag: "p",
                            name: a.name || "Description"
                        })
                    }
                }),
                da = function(a) {
                    var t = a.title,
                        i = a.children,
                        n = a.isOpen,
                        o = a.handleClose;
                    return (0, J.jsx)(K.Root, {
                        show: n,
                        as: e.Fragment,
                        children: (0, J.jsx)(fa, {
                            as: "div",
                            className: "fixed z-10 inset-0 overflow-y-auto",
                            onClose: o,
                            children: (0, J.jsxs)("div", {
                                className: "flex items-center justify-center min-h-screen py-10 px-4 text-center sm:block sm:p-0",
                                children: [(0, J.jsx)(K.Child, {
                                    as: e.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: (0, J.jsx)(fa.Overlay, {
                                        className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                                    })
                                }), (0, J.jsx)("span", {
                                    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                                    "aria-hidden": "true",
                                    children: "\u200b"
                                }), (0, J.jsx)(K.Child, {
                                    as: e.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                                    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    children: (0, J.jsxs)("div", {
                                        className: "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 dark:bg-gray-800",
                                        children: [(0, J.jsx)("div", {
                                            className: "absolute right-4 top-4",
                                            children: (0, J.jsx)(c, {
                                                className: "h-6 w-6 cursor-pointer dark:stroke-white",
                                                onClick: function() {
                                                    return o()
                                                }
                                            })
                                        }), (0, J.jsx)("div", {
                                            children: (0, J.jsxs)("div", {
                                                className: "text-center",
                                                children: [(0, J.jsx)(fa.Title, {
                                                    as: "h3",
                                                    className: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100",
                                                    children: t
                                                }), (0, J.jsx)("div", {
                                                    className: "mt-2",
                                                    children: i
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                pa = function(e) {
                    var a = e.isOpen,
                        t = e.handleClose;
                    return (0, J.jsxs)(da, {
                        title: "Come giocare a Medical Words",
                        isOpen: a,
                        handleClose: t,
                        children: [(0, J.jsx)("p", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: "Indovina ogni giorno termini ed acronimi medici di 5 lettere in 6 tentativi."
                        }), (0, J.jsx)("p", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: 'Dopo ogni tentativo, i colori delle tessere cambiano per mostrarti quanto ci sei andato vicino."'
                        }), (0, J.jsxs)("div", {
                            className: "flex justify-center mb-1 mt-4",
                            children: [(0, J.jsx)(ze, {
                                value: "F",
                                status: "correct"
                            }), (0, J.jsx)(ze, {
                                value: "L"
                            }), (0, J.jsx)(ze, {
                                value: "E"
                            }), (0, J.jsx)(ze, {
                                value: "B"
                            }), (0, J.jsx)(ze, {
                                value: "o"
                            })]
                        }), (0, J.jsx)("p", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: "La lettera F \xe8 nella parola ed \xe8 nel posto giusto."
                        }), (0, J.jsxs)("div", {
                            className: "flex justify-center mb-1 mt-4",
                            children: [(0, J.jsx)(ze, {
                                value: "L"
                            }), (0, J.jsx)(ze, {
                                value: "I"
                            }), (0, J.jsx)(ze, {
                                value: "N",
                                status: "present"
                            }), (0, J.jsx)(ze, {
                                value: "F"
                            }), (0, J.jsx)(ze, {
                                value: "A"
                            })]
                        }), (0, J.jsx)("p", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: "La lettera N \xe8 nella parola ma nel posto sbagliato"
                        }), (0, J.jsxs)("div", {
                            className: "flex justify-center mb-1 mt-4",
                            children: [(0, J.jsx)(ze, {
                                value: "C"
                            }), (0, J.jsx)(ze, {
                                value: "R"
                            }), (0, J.jsx)(ze, {
                                value: "O"
                            }), (0, J.jsx)(ze, {
                                value: "H",
                                status: "absent"
                            }), (0, J.jsx)(ze, {
                                value: "N"
                            })]
                        }), (0, J.jsx)("p", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: "La lettera H non \xe8 nella parola."
                        }), (0, J.jsx)("p", {
                            className: "mt-6 text-sm text-gray-500 dark:text-gray-300",
                            children: "Ogni giorno c'\xe8 una nuova parola da indovinare, la stessa per tutti."
                        }), (0, J.jsxs)("p", {
                            className: "mt-6 italic text-sm text-gray-500 dark:text-gray-300",
                            children: ["Medical Words \xe8 una versione customizzata per Women in Surgery Italia (WIS) ed open source (", (0, J.jsx)("a", {
                                href: "https://github.com/par-le/react-wordle",
                                className: "underline",
                                children: "qui il codice"
                            }), ") del gioco in inglese ", (0, J.jsx)("a", {
                                href: "https://www.nytimes.com/games/wordle/index.html",
                                className: "underline font-bold",
                                children: "Wordle"
                            })]
                        })]
                    })
                },
                ma = t(7);

            function ga(e, a) {
                if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
            }

            function va(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var i = a[t];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function ba(e, a, t) {
                return a && va(e.prototype, a), t && va(e, t), e
            }

            function ha(e, a) {
                if ("function" !== typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(a && a.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), a && za(e, a)
            }

            function ya(e) {
                return ya = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, ya(e)
            }

            function za(e, a) {
                return za = Object.setPrototypeOf || function(e, a) {
                    return e.__proto__ = a, e
                }, za(e, a)
            }

            function wa(e, a) {
                return !a || "object" !== typeof a && "function" !== typeof a ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : a
            }

            function ka(e) {
                var a = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, i = ya(e);
                    if (a) {
                        var n = ya(this).constructor;
                        t = Reflect.construct(i, arguments, n)
                    } else t = i.apply(this, arguments);
                    return wa(this, t)
                }
            }

            function xa(e) {
                return function(e) {
                    if (Array.isArray(e)) return Sa(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, a) {
                    if (!e) return;
                    if ("string" === typeof e) return Sa(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Sa(e, a)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Sa(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, i = new Array(a); t < a; t++) i[t] = e[t];
                return i
            }

            function Ea(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                    t = String(e);
                if (0 === a) return t;
                var i = t.match(/(.*?)([0-9]+)(.*)/),
                    n = i ? i[1] : "",
                    o = i ? i[3] : "",
                    r = i ? i[2] : t,
                    l = r.length >= a ? r : (xa(Array(a)).map((function() {
                        return "0"
                    })).join("") + r).slice(-1 * a);
                return "".concat(n).concat(l).concat(o)
            }
            var Ca = {
                daysInHours: !1,
                zeroPadTime: 2
            };

            function Ta(e, a) {
                var t = e.days,
                    i = e.hours,
                    n = e.minutes,
                    o = e.seconds,
                    r = Object.assign(Object.assign({}, Ca), a),
                    l = r.daysInHours,
                    s = r.zeroPadTime,
                    u = r.zeroPadDays,
                    c = void 0 === u ? s : u,
                    f = Math.min(2, s),
                    d = l ? Ea(i + 24 * t, s) : Ea(i, f);
                return {
                    days: l ? "" : Ea(t, c),
                    hours: d,
                    minutes: Ea(n, f),
                    seconds: Ea(o, f)
                }
            }
            var _a = function(a) {
                ha(i, a);
                var t = ka(i);

                function i() {
                    var e;
                    return ga(this, i), (e = t.apply(this, arguments)).state = {
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
                return ba(i, [{
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
                }]), i
            }(e.Component);
            _a.propTypes = {
                count: ma.number,
                children: ma.element,
                onComplete: ma.func
            };
            var Na = function(a) {
                ha(i, a);
                var t = ka(i);

                function i(a) {
                    var n;
                    if (ga(this, i), (n = t.call(this, a)).mounted = !1, n.initialTimestamp = n.calcOffsetStartTimestamp(), n.offsetStartTimestamp = n.props.autoStart ? 0 : n.initialTimestamp, n.offsetTime = 0, n.legacyMode = !1, n.legacyCountdownRef = (0, e.createRef)(), n.tick = function() {
                            var e = n.calcTimeDelta(),
                                a = e.completed && !n.props.overtime ? void 0 : n.props.onTick;
                            n.setTimeDeltaState(e, void 0, a)
                        }, n.start = function() {
                            if (!n.isStarted()) {
                                var e = n.offsetStartTimestamp;
                                n.offsetStartTimestamp = 0, n.offsetTime += e ? n.calcOffsetStartTimestamp() - e : 0;
                                var a = n.calcTimeDelta();
                                n.setTimeDeltaState(a, "STARTED", n.props.onStart), n.props.controlled || a.completed && !n.props.overtime || (n.clearTimer(), n.interval = window.setInterval(n.tick, n.props.intervalDelay))
                            }
                        }, n.pause = function() {
                            n.isPaused() || (n.clearTimer(), n.offsetStartTimestamp = n.calcOffsetStartTimestamp(), n.setTimeDeltaState(n.state.timeDelta, "PAUSED", n.props.onPause))
                        }, n.stop = function() {
                            n.isStopped() || (n.clearTimer(), n.offsetStartTimestamp = n.calcOffsetStartTimestamp(), n.offsetTime = n.offsetStartTimestamp - n.initialTimestamp, n.setTimeDeltaState(n.calcTimeDelta(), "STOPPED", n.props.onStop))
                        }, n.isStarted = function() {
                            return n.isStatus("STARTED")
                        }, n.isPaused = function() {
                            return n.isStatus("PAUSED")
                        }, n.isStopped = function() {
                            return n.isStatus("STOPPED")
                        }, n.isCompleted = function() {
                            return n.isStatus("COMPLETED")
                        }, n.handleOnComplete = function(e) {
                            n.props.onComplete && n.props.onComplete(e)
                        }, a.date) {
                        var o = n.calcTimeDelta();
                        n.state = {
                            timeDelta: o,
                            status: o.completed ? "COMPLETED" : "STOPPED"
                        }
                    } else n.legacyMode = !0;
                    return n
                }
                return ba(i, [{
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
                            i = e.precision,
                            n = e.controlled,
                            o = e.overtime;
                        return function(e) {
                            var a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                i = t.now,
                                n = void 0 === i ? Date.now : i,
                                o = t.precision,
                                r = void 0 === o ? 0 : o,
                                l = t.controlled,
                                s = t.offsetTime,
                                u = void 0 === s ? 0 : s,
                                c = t.overtime;
                            a = "string" === typeof e ? new Date(e).getTime() : e instanceof Date ? e.getTime() : e, l || (a += u);
                            var f = l ? a : a - n(),
                                d = Math.min(20, Math.max(0, r)),
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
                            precision: i,
                            controlled: n,
                            offsetTime: this.offsetTime,
                            overtime: o
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
                        var i = this;
                        if (this.mounted) {
                            var n;
                            !this.state.timeDelta.completed && e.completed && (this.props.overtime || this.clearTimer(), n = this.handleOnComplete);
                            return this.setState((function(t) {
                                var n = a || t.status;
                                return e.completed && !i.props.overtime ? n = "COMPLETED" : a || "COMPLETED" !== n || (n = "STOPPED"), {
                                    timeDelta: e,
                                    status: n
                                }
                            }), (function() {
                                t && t(i.state.timeDelta), n && n(i.state.timeDelta)
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
                            i = e.zeroPadDays,
                            n = this.state.timeDelta;
                        return Object.assign(Object.assign({}, n), {
                            api: this.getApi(),
                            props: this.props,
                            formatted: Ta(n, {
                                daysInHours: a,
                                zeroPadTime: t,
                                zeroPadDays: i
                            })
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (this.legacyMode) {
                            var a = this.props,
                                t = a.count,
                                i = a.children,
                                n = a.onComplete;
                            return (0, e.createElement)(_a, {
                                ref: this.legacyCountdownRef,
                                count: t,
                                onComplete: n
                            }, i)
                        }
                        var o = this.props,
                            r = o.className,
                            l = o.overtime,
                            s = o.children,
                            u = o.renderer,
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
                            className: r
                        }, c.total < 0 ? "-" : "", d, d ? ":" : "", p, ":", m, ":", g)
                    }
                }]), i
            }(e.Component);
            Na.defaultProps = Object.assign(Object.assign({}, Ca), {
                controlled: !1,
                intervalDelay: 1e3,
                precision: 0,
                autoStart: !0
            }), Na.propTypes = {
                date: (0, ma.oneOfType)([(0, ma.instanceOf)(Date), ma.string, ma.number]),
                daysInHours: ma.bool,
                zeroPadTime: ma.number,
                zeroPadDays: ma.number,
                controlled: ma.bool,
                intervalDelay: ma.number,
                precision: ma.number,
                autoStart: ma.bool,
                overtime: ma.bool,
                className: ma.string,
                children: ma.element,
                renderer: ma.func,
                now: ma.func,
                onMount: ma.func,
                onStart: ma.func,
                onPause: ma.func,
                onStop: ma.func,
                onTick: ma.func,
                onComplete: ma.func
            };
            var ja = Na,
                Oa = function(e) {
                    var a = e.label,
                        t = e.value;
                    return (0, J.jsxs)("div", {
                        className: "items-center justify-center m-1 w-1/4 dark:text-white",
                        children: [(0, J.jsx)("div", {
                            className: "text-3xl font-bold",
                            children: t
                        }), (0, J.jsx)("div", {
                            className: "text-xs",
                            children: a
                        })]
                    })
                },
                Pa = function(e) {
                    var a = e.gameStats;
                    return (0, J.jsxs)("div", {
                        className: "flex justify-center my-2",
                        children: [(0, J.jsx)(Oa, {
                            label: "Partite",
                            value: a.totalGames
                        }), (0, J.jsx)(Oa, {
                            label: "% Vittorie",
                            value: "".concat(a.successRate, "%")
                        }), (0, J.jsx)(Oa, {
                            label: "Vinte di fila",
                            value: a.currentStreak
                        }), (0, J.jsx)(Oa, {
                            label: "Record vinte di fila",
                            value: a.bestStreak
                        })]
                    })
                },
                La = function(e) {
                    var a = e.index,
                        t = e.size,
                        i = e.label;
                    return (0, J.jsxs)("div", {
                        className: "flex justify-left m-1",
                        children: [(0, J.jsx)("div", {
                            className: "items-center justify-center w-2",
                            children: a + 1
                        }), (0, J.jsx)("div", {
                            className: "rounded-full w-full ml-2",
                            children: (0, J.jsx)("div", {
                                style: {
                                    width: "".concat(5 + t, "%")
                                },
                                className: "bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 rounded-l-full",
                                children: i
                            })
                        })]
                    })
                },
                Ma = function(e) {
                    var a = e.gameStats.winDistribution,
                        t = Math.max.apply(Math, o(a));
                    return (0, J.jsx)("div", {
                        className: "columns-1 justify-left m-2 text-sm dark:text-white",
                        children: a.map((function(e, a) {
                            return (0, J.jsx)(La, {
                                index: a,
                                size: e / t * 90,
                                label: String(e)
                            }, a)
                        }))
                    })
                },
                Ra = function(e) {
                    return e.map((function(e) {
                        var a = ge(e),
                            t = ye();
                        return e.split("").map((function(e, i) {
                            switch (a[i]) {
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
                Da = function(e) {
                    var a = e.isOpen,
                        t = e.handleClose,
                        i = e.guesses,
                        n = e.gameStats,
                        o = e.isGameLost,
                        r = e.isGameWon,
                        l = e.handleShare,
                        s = e.isHardMode;
                    return n.totalGames <= 0 ? (0, J.jsx)(da, {
                        title: ue,
                        isOpen: a,
                        handleClose: t,
                        children: (0, J.jsx)(Pa, {
                            gameStats: n
                        })
                    }) : (0, J.jsxs)(da, {
                        title: ue,
                        isOpen: a,
                        handleClose: t,
                        children: [(0, J.jsx)(Pa, {
                            gameStats: n
                        }), (0, J.jsx)("h4", {
                            className: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100",
                            children: "Distribuzione dei tentativi"
                        }), (0, J.jsx)(Ma, {
                            gameStats: n
                        }), (o || r) && (0, J.jsxs)("div", {
                            className: "mt-5 sm:mt-6 columns-2 dark:text-white",
                            children: [(0, J.jsxs)("div", {
                                children: [(0, J.jsx)("h5", {
                                    children: "Nuova parola in"
                                }), (0, J.jsx)(ja, {
                                    className: "text-lg font-medium text-gray-900 dark:text-gray-100",
                                    date: me,
                                    daysInHours: !0
                                })]
                            }), (0, J.jsx)("button", {
                                type: "button",
                                className: "mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm",
                                onClick: function() {
                                    ! function(e, a, t) {
                                        navigator.clipboard.writeText("".concat("", " ").concat(pe, " ").concat(a ? "X" : e.length, "/6").concat(t ? "*" : "", "\n\n") + Ra(e))
                                    }(i, o, s), l()
                                },
                                children: "Condividi"
                            })]
                        })]
                    })
                },
                Fa = function(e) {
                    var a = e.settingName,
                        t = e.flag,
                        i = e.handleFlag,
                        n = X()("w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out cursor-pointer", {
                            "bg-green-400": t
                        }),
                        o = X()("bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out cursor-pointer", {
                            "translate-x-6": t
                        });
                    return (0, J.jsxs)("div", {
                        className: "flex justify-between items-center gap-8 mt-2",
                        children: [(0, J.jsx)("h2", {
                            className: "text-gray-500 dark:text-gray-300",
                            children: a
                        }), (0, J.jsx)("div", {
                            className: n,
                            onClick: function() {
                                return i(!t)
                            },
                            children: (0, J.jsx)("div", {
                                className: o
                            })
                        })]
                    })
                },
                Ia = function(e) {
                    var a = e.isOpen,
                        t = e.handleClose,
                        i = e.isHardMode,
                        n = e.handleHardMode,
                        o = e.isDarkMode,
                        r = e.handleDarkMode,
                        l = e.isHardModeErrorModalOpen,
                        s = e.isHighContrastMode,
                        u = e.handleHighContrastMode;
                    return (0, J.jsx)(da, {
                        title: "Impostazioni",
                        isOpen: a,
                        handleClose: t,
                        children: (0, J.jsxs)("div", {
                            className: "grid-cols-2 gap-4",
                            children: [(0, J.jsx)(Fa, {
                                settingName: "Modalit\xe0 difficile",
                                flag: i,
                                handleFlag: n
                            }), (0, J.jsx)(Fa, {
                                settingName: "Tema scuro",
                                flag: o,
                                handleFlag: r
                            }), (0, J.jsx)(Fa, {
                                settingName: "Colori ad alto contrasto",
                                flag: s,
                                handleFlag: u
                            }), (0, J.jsx)(Z, {
                                message: "La modalit\xe0 difficile pu\xf2 essere impostata solo all'inizio!",
                                isOpen: l
                            })]
                        })
                    })
                };

            function Aa(e, a, t) {
                return a in e ? Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = t, e
            }

            function Ua(e, a) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    a && (i = i.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }
            var Ha = function(e, a) {
                    var t = function(e) {
                        for (var a = 1; a < arguments.length; a++) {
                            var t = null != arguments[a] ? arguments[a] : {};
                            a % 2 ? Ua(Object(t), !0).forEach((function(a) {
                                Aa(e, a, t[a])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ua(Object(t)).forEach((function(a) {
                                Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
                            }))
                        }
                        return e
                    }({}, e);
                    return t.totalGames += 1, a >= 6 ? (t.currentStreak = 0, t.gamesFailed += 1) : (t.winDistribution[a] += 1, t.currentStreak += 1, t.bestStreak < t.currentStreak && (t.bestStreak = t.currentStreak)), t.successRate = Wa(t),
                        function(e) {
                            localStorage.setItem(he, JSON.stringify(e))
                        }(t), t
                },
                qa = {
                    winDistribution: Array.from(new Array(6), (function() {
                        return 0
                    })),
                    gamesFailed: 0,
                    currentStreak: 0,
                    bestStreak: 0,
                    totalGames: 0,
                    successRate: 0
                },
                Va = function() {
                    return function() {
                        var e = localStorage.getItem(he);
                        return e ? JSON.parse(e) : null
                    }() || qa
                },
                Wa = function(e) {
                    var a = e.totalGames,
                        t = e.gamesFailed;
                    return Math.round(100 * (a - t) / Math.max(a, 1))
                };
            var Ba = function() {
                    var a = window.matchMedia("(prefers-color-scheme: dark)").matches,
                        t = r((0, e.useState)(""), 2),
                        i = t[0],
                        n = t[1],
                        c = r((0, e.useState)(!1), 2),
                        f = c[0],
                        d = c[1],
                        p = r((0, e.useState)(!0), 2),
                        m = p[0],
                        g = p[1],
                        v = r((0, e.useState)(!1), 2),
                        b = v[0],
                        h = v[1],
                        y = r((0, e.useState)(!1), 2),
                        z = y[0],
                        w = y[1],
                        k = r((0, e.useState)(!1), 2),
                        x = k[0],
                        S = k[1],
                        E = r((0, e.useState)(!1), 2),
                        C = E[0],
                        T = E[1],
                        _ = r((0, e.useState)(!1), 2),
                        N = _[0],
                        j = _[1],
                        O = r((0, e.useState)(""), 2),
                        P = O[0],
                        L = O[1],
                        M = r((0, e.useState)(!1), 2),
                        R = M[0],
                        D = M[1],
                        F = r((0, e.useState)(localStorage.getItem("theme") ? "dark" === localStorage.getItem("theme") : !!a), 2),
                        I = F[0],
                        A = F[1],
                        U = r((0, e.useState)(ye()), 2),
                        H = U[0],
                        q = U[1],
                        V = r((0, e.useState)(""), 2),
                        W = V[0],
                        B = V[1],
                        $ = r((0, e.useState)(!1), 2),
                        Q = $[0],
                        Y = $[1],
                        K = (0, e.useState)((function() {
                            var e = function() {
                                var e = localStorage.getItem(ve);
                                return e ? JSON.parse(e) : null
                            }();
                            if ((null === e || void 0 === e ? void 0 : e.solution) !== de) return [];
                            var a = e.guesses.includes(de);
                            return a && d(!0), 6 !== e.guesses.length || a || D(!0), e.guesses
                        })),
                        G = r(K, 2),
                        X = G[0],
                        ae = G[1],
                        te = r((0, e.useState)((function() {
                            return Va()
                        })), 2),
                        le = te[0],
                        se = te[1],
                        ue = r((0, e.useState)(!!localStorage.getItem("gameMode") && "hard" === localStorage.getItem("gameMode")), 2),
                        fe = ue[0],
                        pe = ue[1],
                        me = r((0, e.useState)(!1), 2),
                        ge = me[0],
                        he = me[1],
                        ze = r((0, e.useState)(""), 2),
                        we = ze[0],
                        ke = ze[1];
                    return (0, e.useEffect)((function() {
                        I ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), H ? document.documentElement.classList.add("high-contrast") : document.documentElement.classList.remove("high-contrast")
                    }), [I, H]), (0, e.useEffect)((function() {
                        var e;
                        e = {
                            guesses: X,
                            solution: de
                        }, localStorage.setItem(ve, JSON.stringify(e))
                    }), [X]), (0, e.useEffect)((function() {
                        f && setTimeout((function() {
                            B(oe[Math.floor(Math.random() * oe.length)]), setTimeout((function() {
                                B(""), w(!0)
                            }), ee)
                        }), 1750), R && setTimeout((function() {
                            w(!0)
                        }), 2100)
                    }), [f, R]), (0, J.jsxs)("div", {
                        className: "pt-2 pb-8 max-w-7xl mx-auto sm:px-6 lg:px-8",
                        children: [(0, J.jsxs)("div", {
                            className: "flex w-80 mx-auto items-center mb-8 mt-20",
                            children: [(0, J.jsx)("h1", {
                                className: "text-xl ml-2.5 grow font-bold dark:text-white",
                                children: ""
                            }), (0, J.jsx)(u, {
                                className: "h-6 w-6 mr-2 cursor-pointer dark:stroke-white",
                                onClick: function() {
                                    return g(!0)
                                }
                            }), (0, J.jsx)(l, {
                                className: "h-6 w-6 mr-3 cursor-pointer dark:stroke-white",
                                onClick: function() {
                                    return w(!0)
                                }
                            }), (0, J.jsx)(s, {
                                className: "h-6 w-6 mr-3 cursor-pointer dark:stroke-white",
                                onClick: function() {
                                    return S(!0)
                                }
                            })]
                        }), (0, J.jsx)(Se, {
                            guesses: X,
                            currentGuess: i,
                            isRevealing: Q,
                            currentRowClassName: P
                        }), (0, J.jsx)(Ce, {
                            onChar: function(e) {
                                i.length < 5 && X.length < 6 && !f && n("".concat(i).concat(e))
                            },
                            onDelete: function() {
                                n(i.slice(0, -1))
                            },
                            onEnter: function() {
                                if (!f && !R) {
                                    if (5 !== i.length) return h(!0), L("jiggle"), setTimeout((function() {
                                        h(!1), L("")
                                    }), ee);
                                    if (e = i, !ie.includes(e.toLowerCase()) && !ne.includes(e.toLowerCase())) return j(!0), L("jiggle"), setTimeout((function() {
                                        j(!1), L("")
                                    }), ee);
                                    var e;
                                    if (fe) {
                                        var a = ce(i, X);
                                        if (a) return ke(a), he(!0), L("jiggle"), setTimeout((function() {
                                            he(!1), L("")
                                        }), ee)
                                    }
                                    Y(!0), setTimeout((function() {
                                        Y(!1)
                                    }), 1750);
                                    var t = function(e) {
                                        return de === e
                                    }(i);
                                    if (5 === i.length && X.length < 6 && !f) {
                                        if (ae([].concat(o(X), [i])), n(""), t) return se(Ha(le, X.length)), d(!0);
                                        5 === X.length && (se(Ha(le, X.length + 1)), D(!0))
                                    }
                                }
                            },
                            guesses: X,
                            isRevealing: Q
                        }), (0, J.jsx)(pa, {
                            isOpen: m,
                            handleClose: function() {
                                return g(!1)
                            }
                        }), (0, J.jsx)(Da, {
                            isOpen: z,
                            handleClose: function() {
                                return w(!1)
                            },
                            guesses: X,
                            gameStats: le,
                            isGameLost: R,
                            isGameWon: f,
                            handleShare: function() {
                                return B("Copiata la partita negli appunti"), setTimeout((function() {
                                    return B("")
                                }), ee)
                            },
                            isHardMode: fe
                        }), (0, J.jsx)(Ia, {
                            isOpen: x,
                            handleClose: function() {
                                return S(!1)
                            },
                            isHardMode: fe,
                            handleHardMode: function(e) {
                                if (0 !== X.length && "hard" !== localStorage.getItem("gameMode")) return T(!0), setTimeout((function() {
                                    T(!1)
                                }), ee);
                                pe(e), localStorage.setItem("gameMode", e ? "hard" : "normal")
                            },
                            isDarkMode: I,
                            handleDarkMode: function(e) {
                                A(e), localStorage.setItem("theme", e ? "dark" : "light")
                            },
                            isHardModeErrorModalOpen: C,
                            isHighContrastMode: H,
                            handleHighContrastMode: function(e) {
                                q(e),
                                    function(e) {
                                        e ? localStorage.setItem(be, "1") : localStorage.removeItem(be)
                                    }(e)
                            }
                        }), (0, J.jsx)(Z, {
                            message: "Non ci sono abbastanza lettere",
                            isOpen: b
                        }), (0, J.jsx)(Z, {
                            message: "Parola non presente nel dizionario",
                            isOpen: N
                        }), (0, J.jsx)(Z, {
                            message: we,
                            isOpen: ge
                        }), (0, J.jsx)(Z, {
                            message: re(de),
                            isOpen: R && !Q
                        }), (0, J.jsx)(Z, {
                            message: W,
                            isOpen: "" !== W,
                            variant: "success",
                            topMost: !0
                        })]
                    })
                },
                $a = function(e) {
                    e && e instanceof Function && t.e(787).then(t.bind(t, 787)).then((function(a) {
                        var t = a.getCLS,
                            i = a.getFID,
                            n = a.getFCP,
                            o = a.getLCP,
                            r = a.getTTFB;
                        t(e), i(e), n(e), o(e), r(e)
                    }))
                };
            a.render((0, J.jsx)(e.StrictMode, {
                children: (0, J.jsx)(Ba, {})
            }), document.getElementById("root")), $a()
        }()
}();
//# sourceMappingURL=main.a75e428e.js.map