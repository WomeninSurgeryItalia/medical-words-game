/*! For license information please see main.fedae659.js.LICENSE.txt */ ! function() {
    var e = {
            694: function(e, t) {
                var n;
                ! function() {
                    "use strict";
                    var r = {}.hasOwnProperty;

                    function a() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            if (n) {
                                var o = typeof n;
                                if ("string" === o || "number" === o) e.push(n);
                                else if (Array.isArray(n)) {
                                    if (n.length) {
                                        var i = a.apply(null, n);
                                        i && e.push(i)
                                    }
                                } else if ("object" === o)
                                    if (n.toString === Object.prototype.toString)
                                        for (var l in n) r.call(n, l) && n[l] && e.push(l);
                                    else e.push(n.toString())
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (a.default = a, e.exports = a) : void 0 === (n = function() {
                        return a
                    }.apply(t, [])) || (e.exports = n)
                }()
            },
            725: function(e) {
                "use strict";
                var t = Object.getOwnPropertySymbols,
                    n = Object.prototype.hasOwnProperty,
                    r = Object.prototype.propertyIsEnumerable;

                function a(e) {
                    if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e)
                }
                e.exports = function() {
                    try {
                        if (!Object.assign) return !1;
                        var e = new String("abc");
                        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                                return t[e]
                            })).join("")) return !1;
                        var r = {};
                        return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                            r[e] = e
                        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                    } catch (a) {
                        return !1
                    }
                }() ? Object.assign : function(e, o) {
                    for (var i, l, u = a(e), s = 1; s < arguments.length; s++) {
                        for (var c in i = Object(arguments[s])) n.call(i, c) && (u[c] = i[c]);
                        if (t) {
                            l = t(i);
                            for (var f = 0; f < l.length; f++) r.call(i, l[f]) && (u[l[f]] = i[l[f]])
                        }
                    }
                    return u
                }
            },
            888: function(e, t, n) {
                "use strict";
                var r = n(47);

                function a() {}

                function o() {}
                o.resetWarningCache = a, e.exports = function() {
                    function e(e, t, n, a, o, i) {
                        if (i !== r) {
                            var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw l.name = "Invariant Violation", l
                        }
                    }

                    function t() {
                        return e
                    }
                    e.isRequired = e;
                    var n = {
                        array: e,
                        bigint: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: t,
                        element: e,
                        elementType: e,
                        instanceOf: t,
                        node: e,
                        objectOf: t,
                        oneOf: t,
                        oneOfType: t,
                        shape: t,
                        exact: t,
                        checkPropTypes: o,
                        resetWarningCache: a
                    };
                    return n.PropTypes = n, n
                }
            },
            7: function(e, t, n) {
                e.exports = n(888)()
            },
            47: function(e) {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            },
            463: function(e, t, n) {
                "use strict";
                var r = n(791),
                    a = n(725),
                    o = n(296);

                function i(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                if (!r) throw Error(i(227));
                var l = new Set,
                    u = {};

                function s(e, t) {
                    c(e, t), c(e + "Capture", t)
                }

                function c(e, t) {
                    for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e])
                }
                var f = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    p = Object.prototype.hasOwnProperty,
                    m = {},
                    v = {};

                function h(e, t, n, r, a, o, i) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
                }
                var g = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                    g[e] = new h(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) {
                    var t = e[0];
                    g[t] = new h(t, 1, !1, e[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                    g[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                    g[e] = new h(e, 2, !1, e, null, !1, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                    g[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                    g[e] = new h(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((function(e) {
                    g[e] = new h(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((function(e) {
                    g[e] = new h(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((function(e) {
                    g[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                var b = /[\-:]([a-z])/g;

                function y(e) {
                    return e[1].toUpperCase()
                }

                function w(e, t, n, r) {
                    var a = g.hasOwnProperty(t) ? g[t] : null;
                    (null !== a ? 0 === a.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, r) {
                        if (null === t || "undefined" === typeof t || function(e, t, n, r) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, t, n, r)) return !0;
                        if (r) return !1;
                        if (null !== n) switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t
                        }
                        return !1
                    }(t, n, a, r) && (n = null), r || null === a ? function(e) {
                        return !!p.call(v, e) || !p.call(m, e) && (d.test(e) ? v[e] = !0 : (m[e] = !0, !1))
                    }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                    var t = e.replace(b, y);
                    g[t] = new h(t, 1, !1, e, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                    var t = e.replace(b, y);
                    g[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                    var t = e.replace(b, y);
                    g[t] = new h(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                    g[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), g.xlinkHref = new h("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                    g[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    x = 60103,
                    S = 60106,
                    E = 60107,
                    C = 60108,
                    O = 60114,
                    N = 60109,
                    j = 60110,
                    P = 60112,
                    T = 60113,
                    _ = 60120,
                    z = 60115,
                    L = 60116,
                    M = 60121,
                    A = 60128,
                    R = 60129,
                    D = 60130,
                    I = 60131;
                if ("function" === typeof Symbol && Symbol.for) {
                    var F = Symbol.for;
                    x = F("react.element"), S = F("react.portal"), E = F("react.fragment"), C = F("react.strict_mode"), O = F("react.profiler"), N = F("react.provider"), j = F("react.context"), P = F("react.forward_ref"), T = F("react.suspense"), _ = F("react.suspense_list"), z = F("react.memo"), L = F("react.lazy"), M = F("react.block"), F("react.scope"), A = F("react.opaque.id"), R = F("react.debug_trace_mode"), D = F("react.offscreen"), I = F("react.legacy_hidden")
                }
                var U, H = "function" === typeof Symbol && Symbol.iterator;

                function V(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof(e = H && e[H] || e["@@iterator"]) ? e : null
                }

                function W(e) {
                    if (void 0 === U) try {
                        throw Error()
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        U = t && t[1] || ""
                    }
                    return "\n" + U + e
                }
                var B = !1;

                function Y(e, t) {
                    if (!e || B) return "";
                    B = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t)
                            if (t = function() {
                                    throw Error()
                                }, Object.defineProperty(t.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(t, [])
                                } catch (u) {
                                    var r = u
                                }
                                Reflect.construct(e, [], t)
                            } else {
                                try {
                                    t.call()
                                } catch (u) {
                                    r = u
                                }
                                e.call(t.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (u) {
                                r = u
                            }
                            e()
                        }
                    } catch (u) {
                        if (u && r && "string" === typeof u.stack) {
                            for (var a = u.stack.split("\n"), o = r.stack.split("\n"), i = a.length - 1, l = o.length - 1; 1 <= i && 0 <= l && a[i] !== o[l];) l--;
                            for (; 1 <= i && 0 <= l; i--, l--)
                                if (a[i] !== o[l]) {
                                    if (1 !== i || 1 !== l)
                                        do {
                                            if (i--, 0 > --l || a[i] !== o[l]) return "\n" + a[i].replace(" at new ", " at ")
                                        } while (1 <= i && 0 <= l);
                                    break
                                }
                        }
                    } finally {
                        B = !1, Error.prepareStackTrace = n
                    }
                    return (e = e ? e.displayName || e.name : "") ? W(e) : ""
                }

                function $(e) {
                    switch (e.tag) {
                        case 5:
                            return W(e.type);
                        case 16:
                            return W("Lazy");
                        case 13:
                            return W("Suspense");
                        case 19:
                            return W("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = Y(e.type, !1);
                        case 11:
                            return e = Y(e.type.render, !1);
                        case 22:
                            return e = Y(e.type._render, !1);
                        case 1:
                            return e = Y(e.type, !0);
                        default:
                            return ""
                    }
                }

                function Q(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case E:
                            return "Fragment";
                        case S:
                            return "Portal";
                        case O:
                            return "Profiler";
                        case C:
                            return "StrictMode";
                        case T:
                            return "Suspense";
                        case _:
                            return "SuspenseList"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case j:
                            return (e.displayName || "Context") + ".Consumer";
                        case N:
                            return (e._context.displayName || "Context") + ".Provider";
                        case P:
                            var t = e.render;
                            return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                        case z:
                            return Q(e.type);
                        case M:
                            return Q(e._render);
                        case L:
                            t = e._payload, e = e._init;
                            try {
                                return Q(e(t))
                            } catch (n) {}
                    }
                    return null
                }

                function q(e) {
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
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function G(e) {
                    e._valueTracker || (e._valueTracker = function(e) {
                        var t = K(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t];
                        if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                            var a = n.get,
                                o = n.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function() {
                                    return a.call(this)
                                },
                                set: function(e) {
                                    r = "" + e, o.call(this, e)
                                }
                            }), Object.defineProperty(e, t, {
                                enumerable: n.enumerable
                            }), {
                                getValue: function() {
                                    return r
                                },
                                setValue: function(e) {
                                    r = "" + e
                                },
                                stopTracking: function() {
                                    e._valueTracker = null, delete e[t]
                                }
                            }
                        }
                    }(e))
                }

                function X(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = K(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
                }

                function J(e) {
                    if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }

                function Z(e, t) {
                    var n = t.checked;
                    return a({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : e._wrapperState.initialChecked
                    })
                }

                function ee(e, t) {
                    var n = null == t.defaultValue ? "" : t.defaultValue,
                        r = null != t.checked ? t.checked : t.defaultChecked;
                    n = q(null != t.value ? t.value : n), e._wrapperState = {
                        initialChecked: r,
                        initialValue: n,
                        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                    }
                }

                function te(e, t) {
                    null != (t = t.checked) && w(e, "checked", t, !1)
                }

                function ne(e, t) {
                    te(e, t);
                    var n = q(t.value),
                        r = t.type;
                    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? ae(e, t.type, n) : t.hasOwnProperty("defaultValue") && ae(e, t.type, q(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
                }

                function re(e, t, n) {
                    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                        var r = t.type;
                        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
                }

                function ae(e, t, n) {
                    "number" === t && J(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
                }

                function oe(e, t) {
                    return e = a({
                        children: void 0
                    }, t), (t = function(e) {
                        var t = "";
                        return r.Children.forEach(e, (function(e) {
                            null != e && (t += e)
                        })), t
                    }(t.children)) && (e.children = t), e
                }

                function ie(e, t, n, r) {
                    if (e = e.options, t) {
                        t = {};
                        for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                        for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + q(n), t = null, a = 0; a < e.length; a++) {
                            if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                            null !== t || e[a].disabled || (t = e[a])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function le(e, t) {
                    if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
                    return a({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function ue(e, t) {
                    var n = t.value;
                    if (null == n) {
                        if (n = t.children, t = t.defaultValue, null != n) {
                            if (null != t) throw Error(i(92));
                            if (Array.isArray(n)) {
                                if (!(1 >= n.length)) throw Error(i(93));
                                n = n[0]
                            }
                            t = n
                        }
                        null == t && (t = ""), n = t
                    }
                    e._wrapperState = {
                        initialValue: q(n)
                    }
                }

                function se(e, t) {
                    var n = q(t.value),
                        r = q(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
                }

                function ce(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
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

                function me(e, t) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? pe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
                }
                var ve, he, ge = (he = function(e, t) {
                    if (e.namespaceURI !== de || "innerHTML" in e) e.innerHTML = t;
                    else {
                        for ((ve = ve || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ve.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                        for (; t.firstChild;) e.appendChild(t.firstChild)
                    }
                }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return he(e, t)
                    }))
                } : he);

                function be(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
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

                function ke(e, t, n) {
                    return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || ye.hasOwnProperty(e) && ye[e] ? ("" + t).trim() : t + "px"
                }

                function xe(e, t) {
                    for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) {
                            var r = 0 === n.indexOf("--"),
                                a = ke(n, t[n], r);
                            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
                        }
                }
                Object.keys(ye).forEach((function(e) {
                    we.forEach((function(t) {
                        t = t + e.charAt(0).toUpperCase() + e.substring(1), ye[t] = ye[e]
                    }))
                }));
                var Se = a({
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

                function Ee(e, t) {
                    if (t) {
                        if (Se[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(i(137, e));
                        if (null != t.dangerouslySetInnerHTML) {
                            if (null != t.children) throw Error(i(60));
                            if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61))
                        }
                        if (null != t.style && "object" !== typeof t.style) throw Error(i(62))
                    }
                }

                function Ce(e, t) {
                    if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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

                function Oe(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var Ne = null,
                    je = null,
                    Pe = null;

                function Te(e) {
                    if (e = ra(e)) {
                        if ("function" !== typeof Ne) throw Error(i(280));
                        var t = e.stateNode;
                        t && (t = oa(t), Ne(e.stateNode, e.type, t))
                    }
                }

                function _e(e) {
                    je ? Pe ? Pe.push(e) : Pe = [e] : je = e
                }

                function ze() {
                    if (je) {
                        var e = je,
                            t = Pe;
                        if (Pe = je = null, Te(e), t)
                            for (e = 0; e < t.length; e++) Te(t[e])
                    }
                }

                function Le(e, t) {
                    return e(t)
                }

                function Me(e, t, n, r, a) {
                    return e(t, n, r, a)
                }

                function Ae() {}
                var Re = Le,
                    De = !1,
                    Ie = !1;

                function Fe() {
                    null === je && null === Pe || (Ae(), ze())
                }

                function Ue(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = oa(n);
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
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
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
                    return n
                }
                var He = !1;
                if (f) try {
                    var Ve = {};
                    Object.defineProperty(Ve, "passive", {
                        get: function() {
                            He = !0
                        }
                    }), window.addEventListener("test", Ve, Ve), window.removeEventListener("test", Ve, Ve)
                } catch (he) {
                    He = !1
                }

                function We(e, t, n, r, a, o, i, l, u) {
                    var s = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, s)
                    } catch (c) {
                        this.onError(c)
                    }
                }
                var Be = !1,
                    Ye = null,
                    $e = !1,
                    Qe = null,
                    qe = {
                        onError: function(e) {
                            Be = !0, Ye = e
                        }
                    };

                function Ke(e, t, n, r, a, o, i, l, u) {
                    Be = !1, Ye = null, We.apply(qe, arguments)
                }

                function Ge(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do {
                            0 !== (1026 & (t = e).flags) && (n = t.return), e = t.return
                        } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function Xe(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function Je(e) {
                    if (Ge(e) !== e) throw Error(i(188))
                }

                function Ze(e) {
                    if (e = function(e) {
                            var t = e.alternate;
                            if (!t) {
                                if (null === (t = Ge(e))) throw Error(i(188));
                                return t !== e ? null : e
                            }
                            for (var n = e, r = t;;) {
                                var a = n.return;
                                if (null === a) break;
                                var o = a.alternate;
                                if (null === o) {
                                    if (null !== (r = a.return)) {
                                        n = r;
                                        continue
                                    }
                                    break
                                }
                                if (a.child === o.child) {
                                    for (o = a.child; o;) {
                                        if (o === n) return Je(a), e;
                                        if (o === r) return Je(a), t;
                                        o = o.sibling
                                    }
                                    throw Error(i(188))
                                }
                                if (n.return !== r.return) n = a, r = o;
                                else {
                                    for (var l = !1, u = a.child; u;) {
                                        if (u === n) {
                                            l = !0, n = a, r = o;
                                            break
                                        }
                                        if (u === r) {
                                            l = !0, r = a, n = o;
                                            break
                                        }
                                        u = u.sibling
                                    }
                                    if (!l) {
                                        for (u = o.child; u;) {
                                            if (u === n) {
                                                l = !0, n = o, r = a;
                                                break
                                            }
                                            if (u === r) {
                                                l = !0, r = o, n = a;
                                                break
                                            }
                                            u = u.sibling
                                        }
                                        if (!l) throw Error(i(189))
                                    }
                                }
                                if (n.alternate !== r) throw Error(i(190))
                            }
                            if (3 !== n.tag) throw Error(i(188));
                            return n.stateNode.current === n ? e : t
                        }(e), !e) return null;
                    for (var t = e;;) {
                        if (5 === t.tag || 6 === t.tag) return t;
                        if (t.child) t.child.return = t, t = t.child;
                        else {
                            if (t === e) break;
                            for (; !t.sibling;) {
                                if (!t.return || t.return === e) return null;
                                t = t.return
                            }
                            t.sibling.return = t.return, t = t.sibling
                        }
                    }
                    return null
                }

                function et(e, t) {
                    for (var n = e.alternate; null !== t;) {
                        if (t === e || t === n) return !0;
                        t = t.return
                    }
                    return !1
                }
                var tt, nt, rt, at, ot = !1,
                    it = [],
                    lt = null,
                    ut = null,
                    st = null,
                    ct = new Map,
                    ft = new Map,
                    dt = [],
                    pt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function mt(e, t, n, r, a) {
                    return {
                        blockedOn: e,
                        domEventName: t,
                        eventSystemFlags: 16 | n,
                        nativeEvent: a,
                        targetContainers: [r]
                    }
                }

                function vt(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            lt = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            ut = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            st = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            ct.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            ft.delete(t.pointerId)
                    }
                }

                function ht(e, t, n, r, a, o) {
                    return null === e || e.nativeEvent !== o ? (e = mt(t, n, r, a, o), null !== t && (null !== (t = ra(t)) && nt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
                }

                function gt(e) {
                    var t = na(e.target);
                    if (null !== t) {
                        var n = Ge(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = Xe(n))) return e.blockedOn = t, void at(e.lanePriority, (function() {
                                    o.unstable_runWithPriority(e.priority, (function() {
                                        rt(n)
                                    }))
                                }))
                            } else if (3 === t && n.stateNode.hydrate) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function bt(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) return null !== (t = ra(n)) && nt(t), e.blockedOn = n, !1;
                        t.shift()
                    }
                    return !0
                }

                function yt(e, t, n) {
                    bt(e) && n.delete(t)
                }

                function wt() {
                    for (ot = !1; 0 < it.length;) {
                        var e = it[0];
                        if (null !== e.blockedOn) {
                            null !== (e = ra(e.blockedOn)) && tt(e);
                            break
                        }
                        for (var t = e.targetContainers; 0 < t.length;) {
                            var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                            if (null !== n) {
                                e.blockedOn = n;
                                break
                            }
                            t.shift()
                        }
                        null === e.blockedOn && it.shift()
                    }
                    null !== lt && bt(lt) && (lt = null), null !== ut && bt(ut) && (ut = null), null !== st && bt(st) && (st = null), ct.forEach(yt), ft.forEach(yt)
                }

                function kt(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, ot || (ot = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, wt)))
                }

                function xt(e) {
                    function t(t) {
                        return kt(t, e)
                    }
                    if (0 < it.length) {
                        kt(it[0], e);
                        for (var n = 1; n < it.length; n++) {
                            var r = it[n];
                            r.blockedOn === e && (r.blockedOn = null)
                        }
                    }
                    for (null !== lt && kt(lt, e), null !== ut && kt(ut, e), null !== st && kt(st, e), ct.forEach(t), ft.forEach(t), n = 0; n < dt.length; n++)(r = dt[n]).blockedOn === e && (r.blockedOn = null);
                    for (; 0 < dt.length && null === (n = dt[0]).blockedOn;) gt(n), null === n.blockedOn && dt.shift()
                }

                function St(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var Et = {
                        animationend: St("Animation", "AnimationEnd"),
                        animationiteration: St("Animation", "AnimationIteration"),
                        animationstart: St("Animation", "AnimationStart"),
                        transitionend: St("Transition", "TransitionEnd")
                    },
                    Ct = {},
                    Ot = {};

                function Nt(e) {
                    if (Ct[e]) return Ct[e];
                    if (!Et[e]) return e;
                    var t, n = Et[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in Ot) return Ct[e] = n[t];
                    return e
                }
                f && (Ot = document.createElement("div").style, "AnimationEvent" in window || (delete Et.animationend.animation, delete Et.animationiteration.animation, delete Et.animationstart.animation), "TransitionEvent" in window || delete Et.transitionend.transition);
                var jt = Nt("animationend"),
                    Pt = Nt("animationiteration"),
                    Tt = Nt("animationstart"),
                    _t = Nt("transitionend"),
                    zt = new Map,
                    Lt = new Map,
                    Mt = ["abort", "abort", jt, "animationEnd", Pt, "animationIteration", Tt, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", _t, "transitionEnd", "waiting", "waiting"];

                function At(e, t) {
                    for (var n = 0; n < e.length; n += 2) {
                        var r = e[n],
                            a = e[n + 1];
                        a = "on" + (a[0].toUpperCase() + a.slice(1)), Lt.set(r, t), zt.set(r, a), s(a, [r])
                    }
                }(0, o.unstable_now)();
                var Rt = 8;

                function Dt(e) {
                    if (0 !== (1 & e)) return Rt = 15, 1;
                    if (0 !== (2 & e)) return Rt = 14, 2;
                    if (0 !== (4 & e)) return Rt = 13, 4;
                    var t = 24 & e;
                    return 0 !== t ? (Rt = 12, t) : 0 !== (32 & e) ? (Rt = 11, 32) : 0 !== (t = 192 & e) ? (Rt = 10, t) : 0 !== (256 & e) ? (Rt = 9, 256) : 0 !== (t = 3584 & e) ? (Rt = 8, t) : 0 !== (4096 & e) ? (Rt = 7, 4096) : 0 !== (t = 4186112 & e) ? (Rt = 6, t) : 0 !== (t = 62914560 & e) ? (Rt = 5, t) : 67108864 & e ? (Rt = 4, 67108864) : 0 !== (134217728 & e) ? (Rt = 3, 134217728) : 0 !== (t = 805306368 & e) ? (Rt = 2, t) : 0 !== (1073741824 & e) ? (Rt = 1, 1073741824) : (Rt = 8, e)
                }

                function It(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return Rt = 0;
                    var r = 0,
                        a = 0,
                        o = e.expiredLanes,
                        i = e.suspendedLanes,
                        l = e.pingedLanes;
                    if (0 !== o) r = o, a = Rt = 15;
                    else if (0 !== (o = 134217727 & n)) {
                        var u = o & ~i;
                        0 !== u ? (r = Dt(u), a = Rt) : 0 !== (l &= o) && (r = Dt(l), a = Rt)
                    } else 0 !== (o = n & ~i) ? (r = Dt(o), a = Rt) : 0 !== l && (r = Dt(l), a = Rt);
                    if (0 === r) return 0;
                    if (r = n & ((0 > (r = 31 - Bt(r)) ? 0 : 1 << r) << 1) - 1, 0 !== t && t !== r && 0 === (t & i)) {
                        if (Dt(t), a <= Rt) return t;
                        Rt = a
                    }
                    if (0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) a = 1 << (n = 31 - Bt(t)), r |= e[n], t &= ~a;
                    return r
                }

                function Ft(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function Ut(e, t) {
                    switch (e) {
                        case 15:
                            return 1;
                        case 14:
                            return 2;
                        case 12:
                            return 0 === (e = Ht(24 & ~t)) ? Ut(10, t) : e;
                        case 10:
                            return 0 === (e = Ht(192 & ~t)) ? Ut(8, t) : e;
                        case 8:
                            return 0 === (e = Ht(3584 & ~t)) && (0 === (e = Ht(4186112 & ~t)) && (e = 512)), e;
                        case 2:
                            return 0 === (t = Ht(805306368 & ~t)) && (t = 268435456), t
                    }
                    throw Error(i(358, e))
                }

                function Ht(e) {
                    return e & -e
                }

                function Vt(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function Wt(e, t, n) {
                    e.pendingLanes |= t;
                    var r = t - 1;
                    e.suspendedLanes &= r, e.pingedLanes &= r, (e = e.eventTimes)[t = 31 - Bt(t)] = n
                }
                var Bt = Math.clz32 ? Math.clz32 : function(e) {
                        return 0 === e ? 32 : 31 - (Yt(e) / $t | 0) | 0
                    },
                    Yt = Math.log,
                    $t = Math.LN2;
                var Qt = o.unstable_UserBlockingPriority,
                    qt = o.unstable_runWithPriority,
                    Kt = !0;

                function Gt(e, t, n, r) {
                    De || Ae();
                    var a = Jt,
                        o = De;
                    De = !0;
                    try {
                        Me(a, e, t, n, r)
                    } finally {
                        (De = o) || Fe()
                    }
                }

                function Xt(e, t, n, r) {
                    qt(Qt, Jt.bind(null, e, t, n, r))
                }

                function Jt(e, t, n, r) {
                    var a;
                    if (Kt)
                        if ((a = 0 === (4 & t)) && 0 < it.length && -1 < pt.indexOf(e)) e = mt(null, e, t, n, r), it.push(e);
                        else {
                            var o = Zt(e, t, n, r);
                            if (null === o) a && vt(e, r);
                            else {
                                if (a) {
                                    if (-1 < pt.indexOf(e)) return e = mt(o, e, t, n, r), void it.push(e);
                                    if (function(e, t, n, r, a) {
                                            switch (t) {
                                                case "focusin":
                                                    return lt = ht(lt, e, t, n, r, a), !0;
                                                case "dragenter":
                                                    return ut = ht(ut, e, t, n, r, a), !0;
                                                case "mouseover":
                                                    return st = ht(st, e, t, n, r, a), !0;
                                                case "pointerover":
                                                    var o = a.pointerId;
                                                    return ct.set(o, ht(ct.get(o) || null, e, t, n, r, a)), !0;
                                                case "gotpointercapture":
                                                    return o = a.pointerId, ft.set(o, ht(ft.get(o) || null, e, t, n, r, a)), !0
                                            }
                                            return !1
                                        }(o, e, t, n, r)) return;
                                    vt(e, r)
                                }
                                Ar(e, t, r, null, n)
                            }
                        }
                }

                function Zt(e, t, n, r) {
                    var a = Oe(r);
                    if (null !== (a = na(a))) {
                        var o = Ge(a);
                        if (null === o) a = null;
                        else {
                            var i = o.tag;
                            if (13 === i) {
                                if (null !== (a = Xe(o))) return a;
                                a = null
                            } else if (3 === i) {
                                if (o.stateNode.hydrate) return 3 === o.tag ? o.stateNode.containerInfo : null;
                                a = null
                            } else o !== a && (a = null)
                        }
                    }
                    return Ar(e, t, r, a, n), null
                }
                var en = null,
                    tn = null,
                    nn = null;

                function rn() {
                    if (nn) return nn;
                    var e, t, n = tn,
                        r = n.length,
                        a = "value" in en ? en.value : en.textContent,
                        o = a.length;
                    for (e = 0; e < r && n[e] === a[e]; e++);
                    var i = r - e;
                    for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
                    return nn = a.slice(e, 1 < t ? 1 - t : void 0)
                }

                function an(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function on() {
                    return !0
                }

                function ln() {
                    return !1
                }

                function un(e) {
                    function t(t, n, r, a, o) {
                        for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = o, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(a) : a[i]);
                        return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? on : ln, this.isPropagationStopped = ln, this
                    }
                    return a(t.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = on)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = on)
                        },
                        persist: function() {},
                        isPersistent: on
                    }), t
                }
                var sn, cn, fn, dn = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    pn = un(dn),
                    mn = a({}, dn, {
                        view: 0,
                        detail: 0
                    }),
                    vn = un(mn),
                    hn = a({}, mn, {
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
                        getModifierState: jn,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function(e) {
                            return "movementX" in e ? e.movementX : (e !== fn && (fn && "mousemove" === e.type ? (sn = e.screenX - fn.screenX, cn = e.screenY - fn.screenY) : cn = sn = 0, fn = e), sn)
                        },
                        movementY: function(e) {
                            return "movementY" in e ? e.movementY : cn
                        }
                    }),
                    gn = un(hn),
                    bn = un(a({}, hn, {
                        dataTransfer: 0
                    })),
                    yn = un(a({}, mn, {
                        relatedTarget: 0
                    })),
                    wn = un(a({}, dn, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    kn = a({}, dn, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    xn = un(kn),
                    Sn = un(a({}, dn, {
                        data: 0
                    })),
                    En = {
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
                    Cn = {
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
                    On = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function Nn(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = On[e]) && !!t[e]
                }

                function jn() {
                    return Nn
                }
                var Pn = a({}, mn, {
                        key: function(e) {
                            if (e.key) {
                                var t = En[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = an(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Cn[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: jn,
                        charCode: function(e) {
                            return "keypress" === e.type ? an(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? an(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    }),
                    Tn = un(Pn),
                    _n = un(a({}, hn, {
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
                    zn = un(a({}, mn, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: jn
                    })),
                    Ln = un(a({}, dn, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    Mn = a({}, hn, {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    }),
                    An = un(Mn),
                    Rn = [9, 13, 27, 32],
                    Dn = f && "CompositionEvent" in window,
                    In = null;
                f && "documentMode" in document && (In = document.documentMode);
                var Fn = f && "TextEvent" in window && !In,
                    Un = f && (!Dn || In && 8 < In && 11 >= In),
                    Hn = String.fromCharCode(32),
                    Vn = !1;

                function Wn(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== Rn.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function Bn(e) {
                    return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var Yn = !1;
                var $n = {
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

                function Qn(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!$n[e.type] : "textarea" === t
                }

                function qn(e, t, n, r) {
                    _e(r), 0 < (t = Dr(t, "onChange")).length && (n = new pn("onChange", "change", null, n, r), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var Kn = null,
                    Gn = null;

                function Xn(e) {
                    Pr(e, 0)
                }

                function Jn(e) {
                    if (X(aa(e))) return e
                }

                function Zn(e, t) {
                    if ("change" === e) return t
                }
                var er = !1;
                if (f) {
                    var tr;
                    if (f) {
                        var nr = "oninput" in document;
                        if (!nr) {
                            var rr = document.createElement("div");
                            rr.setAttribute("oninput", "return;"), nr = "function" === typeof rr.oninput
                        }
                        tr = nr
                    } else tr = !1;
                    er = tr && (!document.documentMode || 9 < document.documentMode)
                }

                function ar() {
                    Kn && (Kn.detachEvent("onpropertychange", or), Gn = Kn = null)
                }

                function or(e) {
                    if ("value" === e.propertyName && Jn(Gn)) {
                        var t = [];
                        if (qn(t, Gn, e, Oe(e)), e = Xn, De) e(t);
                        else {
                            De = !0;
                            try {
                                Le(e, t)
                            } finally {
                                De = !1, Fe()
                            }
                        }
                    }
                }

                function ir(e, t, n) {
                    "focusin" === e ? (ar(), Gn = n, (Kn = t).attachEvent("onpropertychange", or)) : "focusout" === e && ar()
                }

                function lr(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Jn(Gn)
                }

                function ur(e, t) {
                    if ("click" === e) return Jn(t)
                }

                function sr(e, t) {
                    if ("input" === e || "change" === e) return Jn(t)
                }
                var cr = "function" === typeof Object.is ? Object.is : function(e, t) {
                        return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                    },
                    fr = Object.prototype.hasOwnProperty;

                function dr(e, t) {
                    if (cr(e, t)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++)
                        if (!fr.call(t, n[r]) || !cr(e[n[r]], t[n[r]])) return !1;
                    return !0
                }

                function pr(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function mr(e, t) {
                    var n, r = pr(e);
                    for (e = 0; r;) {
                        if (3 === r.nodeType) {
                            if (n = e + r.textContent.length, e <= t && n >= t) return {
                                node: r,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; r;) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e
                                }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = pr(r)
                    }
                }

                function vr(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? vr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function hr() {
                    for (var e = window, t = J(); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" === typeof t.contentWindow.location.href
                        } catch (r) {
                            n = !1
                        }
                        if (!n) break;
                        t = J((e = t.contentWindow).document)
                    }
                    return t
                }

                function gr(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }
                var br = f && "documentMode" in document && 11 >= document.documentMode,
                    yr = null,
                    wr = null,
                    kr = null,
                    xr = !1;

                function Sr(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    xr || null == yr || yr !== J(r) || ("selectionStart" in (r = yr) && gr(r) ? r = {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : r = {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, kr && dr(kr, r) || (kr = r, 0 < (r = Dr(wr, "onSelect")).length && (t = new pn("onSelect", "select", null, t, n), e.push({
                        event: t,
                        listeners: r
                    }), t.target = yr)))
                }
                At("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), At("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), At(Mt, 2);
                for (var Er = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Cr = 0; Cr < Er.length; Cr++) Lt.set(Er[Cr], 0);
                c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Nr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));

                function jr(e, t, n) {
                    var r = e.type || "unknown-event";
                    e.currentTarget = n,
                        function(e, t, n, r, a, o, l, u, s) {
                            if (Ke.apply(this, arguments), Be) {
                                if (!Be) throw Error(i(198));
                                var c = Ye;
                                Be = !1, Ye = null, $e || ($e = !0, Qe = c)
                            }
                        }(r, t, void 0, e), e.currentTarget = null
                }

                function Pr(e, t) {
                    t = 0 !== (4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            a = r.event;
                        r = r.listeners;
                        e: {
                            var o = void 0;
                            if (t)
                                for (var i = r.length - 1; 0 <= i; i--) {
                                    var l = r[i],
                                        u = l.instance,
                                        s = l.currentTarget;
                                    if (l = l.listener, u !== o && a.isPropagationStopped()) break e;
                                    jr(a, l, s), o = u
                                } else
                                    for (i = 0; i < r.length; i++) {
                                        if (u = (l = r[i]).instance, s = l.currentTarget, l = l.listener, u !== o && a.isPropagationStopped()) break e;
                                        jr(a, l, s), o = u
                                    }
                        }
                    }
                    if ($e) throw e = Qe, $e = !1, Qe = null, e
                }

                function Tr(e, t) {
                    var n = ia(t),
                        r = e + "__bubble";
                    n.has(r) || (Mr(t, e, 2, !1), n.add(r))
                }
                var _r = "_reactListening" + Math.random().toString(36).slice(2);

                function zr(e) {
                    e[_r] || (e[_r] = !0, l.forEach((function(t) {
                        Nr.has(t) || Lr(t, !1, e, null), Lr(t, !0, e, null)
                    })))
                }

                function Lr(e, t, n, r) {
                    var a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                        o = n;
                    if ("selectionchange" === e && 9 !== n.nodeType && (o = n.ownerDocument), null !== r && !t && Nr.has(e)) {
                        if ("scroll" !== e) return;
                        a |= 2, o = r
                    }
                    var i = ia(o),
                        l = e + "__" + (t ? "capture" : "bubble");
                    i.has(l) || (t && (a |= 4), Mr(o, e, a, t), i.add(l))
                }

                function Mr(e, t, n, r) {
                    var a = Lt.get(t);
                    switch (void 0 === a ? 2 : a) {
                        case 0:
                            a = Gt;
                            break;
                        case 1:
                            a = Xt;
                            break;
                        default:
                            a = Jt
                    }
                    n = a.bind(null, t, n, e), a = void 0, !He || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: a
                    }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
                        passive: a
                    }) : e.addEventListener(t, n, !1)
                }

                function Ar(e, t, n, r, a) {
                    var o = r;
                    if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
                        if (null === r) return;
                        var i = r.tag;
                        if (3 === i || 4 === i) {
                            var l = r.stateNode.containerInfo;
                            if (l === a || 8 === l.nodeType && l.parentNode === a) break;
                            if (4 === i)
                                for (i = r.return; null !== i;) {
                                    var u = i.tag;
                                    if ((3 === u || 4 === u) && ((u = i.stateNode.containerInfo) === a || 8 === u.nodeType && u.parentNode === a)) return;
                                    i = i.return
                                }
                            for (; null !== l;) {
                                if (null === (i = na(l))) return;
                                if (5 === (u = i.tag) || 6 === u) {
                                    r = o = i;
                                    continue e
                                }
                                l = l.parentNode
                            }
                        }
                        r = r.return
                    }! function(e, t, n) {
                        if (Ie) return e(t, n);
                        Ie = !0;
                        try {
                            Re(e, t, n)
                        } finally {
                            Ie = !1, Fe()
                        }
                    }((function() {
                        var r = o,
                            a = Oe(n),
                            i = [];
                        e: {
                            var l = zt.get(e);
                            if (void 0 !== l) {
                                var u = pn,
                                    s = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === an(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        u = Tn;
                                        break;
                                    case "focusin":
                                        s = "focus", u = yn;
                                        break;
                                    case "focusout":
                                        s = "blur", u = yn;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        u = yn;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        u = gn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        u = bn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        u = zn;
                                        break;
                                    case jt:
                                    case Pt:
                                    case Tt:
                                        u = wn;
                                        break;
                                    case _t:
                                        u = Ln;
                                        break;
                                    case "scroll":
                                        u = vn;
                                        break;
                                    case "wheel":
                                        u = An;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        u = xn;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        u = _n
                                }
                                var c = 0 !== (4 & t),
                                    f = !c && "scroll" === e,
                                    d = c ? null !== l ? l + "Capture" : null : l;
                                c = [];
                                for (var p, m = r; null !== m;) {
                                    var v = (p = m).stateNode;
                                    if (5 === p.tag && null !== v && (p = v, null !== d && (null != (v = Ue(m, d)) && c.push(Rr(m, v, p)))), f) break;
                                    m = m.return
                                }
                                0 < c.length && (l = new u(l, s, null, n, a), i.push({
                                    event: l,
                                    listeners: c
                                }))
                            }
                        }
                        if (0 === (7 & t)) {
                            if (u = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || 0 !== (16 & t) || !(s = n.relatedTarget || n.fromElement) || !na(s) && !s[ea]) && (u || l) && (l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window, u ? (u = r, null !== (s = (s = n.relatedTarget || n.toElement) ? na(s) : null) && (s !== (f = Ge(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null, s = r), u !== s)) {
                                if (c = gn, v = "onMouseLeave", d = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (c = _n, v = "onPointerLeave", d = "onPointerEnter", m = "pointer"), f = null == u ? l : aa(u), p = null == s ? l : aa(s), (l = new c(v, m + "leave", u, n, a)).target = f, l.relatedTarget = p, v = null, na(a) === r && ((c = new c(d, m + "enter", s, n, a)).target = p, c.relatedTarget = f, v = c), f = v, u && s) e: {
                                    for (d = s, m = 0, p = c = u; p; p = Ir(p)) m++;
                                    for (p = 0, v = d; v; v = Ir(v)) p++;
                                    for (; 0 < m - p;) c = Ir(c),
                                    m--;
                                    for (; 0 < p - m;) d = Ir(d),
                                    p--;
                                    for (; m--;) {
                                        if (c === d || null !== d && c === d.alternate) break e;
                                        c = Ir(c), d = Ir(d)
                                    }
                                    c = null
                                }
                                else c = null;
                                null !== u && Fr(i, l, u, c, !1), null !== s && null !== f && Fr(i, f, s, c, !0)
                            }
                            if ("select" === (u = (l = r ? aa(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === u && "file" === l.type) var h = Zn;
                            else if (Qn(l))
                                if (er) h = sr;
                                else {
                                    h = lr;
                                    var g = ir
                                }
                            else(u = l.nodeName) && "input" === u.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (h = ur);
                            switch (h && (h = h(e, r)) ? qn(i, h, n, a) : (g && g(e, l, r), "focusout" === e && (g = l._wrapperState) && g.controlled && "number" === l.type && ae(l, "number", l.value)), g = r ? aa(r) : window, e) {
                                case "focusin":
                                    (Qn(g) || "true" === g.contentEditable) && (yr = g, wr = r, kr = null);
                                    break;
                                case "focusout":
                                    kr = wr = yr = null;
                                    break;
                                case "mousedown":
                                    xr = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    xr = !1, Sr(i, n, a);
                                    break;
                                case "selectionchange":
                                    if (br) break;
                                case "keydown":
                                case "keyup":
                                    Sr(i, n, a)
                            }
                            var b;
                            if (Dn) e: {
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
                            else Yn ? Wn(e, n) && (y = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (y = "onCompositionStart");
                            y && (Un && "ko" !== n.locale && (Yn || "onCompositionStart" !== y ? "onCompositionEnd" === y && Yn && (b = rn()) : (tn = "value" in (en = a) ? en.value : en.textContent, Yn = !0)), 0 < (g = Dr(r, y)).length && (y = new Sn(y, e, null, n, a), i.push({
                                event: y,
                                listeners: g
                            }), b ? y.data = b : null !== (b = Bn(n)) && (y.data = b))), (b = Fn ? function(e, t) {
                                switch (e) {
                                    case "compositionend":
                                        return Bn(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (Vn = !0, Hn);
                                    case "textInput":
                                        return (e = t.data) === Hn && Vn ? null : e;
                                    default:
                                        return null
                                }
                            }(e, n) : function(e, t) {
                                if (Yn) return "compositionend" === e || !Dn && Wn(e, t) ? (e = rn(), nn = tn = en = null, Yn = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                            if (t.char && 1 < t.char.length) return t.char;
                                            if (t.which) return String.fromCharCode(t.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return Un && "ko" !== t.locale ? null : t.data
                                }
                            }(e, n)) && (0 < (r = Dr(r, "onBeforeInput")).length && (a = new Sn("onBeforeInput", "beforeinput", null, n, a), i.push({
                                event: a,
                                listeners: r
                            }), a.data = b))
                        }
                        Pr(i, t)
                    }))
                }

                function Rr(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function Dr(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var a = e,
                            o = a.stateNode;
                        5 === a.tag && null !== o && (a = o, null != (o = Ue(e, n)) && r.unshift(Rr(e, o, a)), null != (o = Ue(e, t)) && r.push(Rr(e, o, a))), e = e.return
                    }
                    return r
                }

                function Ir(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function Fr(e, t, n, r, a) {
                    for (var o = t._reactName, i = []; null !== n && n !== r;) {
                        var l = n,
                            u = l.alternate,
                            s = l.stateNode;
                        if (null !== u && u === r) break;
                        5 === l.tag && null !== s && (l = s, a ? null != (u = Ue(n, o)) && i.unshift(Rr(n, u, l)) : a || null != (u = Ue(n, o)) && i.push(Rr(n, u, l))), n = n.return
                    }
                    0 !== i.length && e.push({
                        event: t,
                        listeners: i
                    })
                }

                function Ur() {}
                var Hr = null,
                    Vr = null;

                function Wr(e, t) {
                    switch (e) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            return !!t.autoFocus
                    }
                    return !1
                }

                function Br(e, t) {
                    return "textarea" === e || "option" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var Yr = "function" === typeof setTimeout ? setTimeout : void 0,
                    $r = "function" === typeof clearTimeout ? clearTimeout : void 0;

                function Qr(e) {
                    1 === e.nodeType ? e.textContent = "" : 9 === e.nodeType && (null != (e = e.body) && (e.textContent = ""))
                }

                function qr(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break
                    }
                    return e
                }

                function Kr(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n) {
                                if (0 === t) return e;
                                t--
                            } else "/$" === n && t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }
                var Gr = 0;
                var Xr = Math.random().toString(36).slice(2),
                    Jr = "__reactFiber$" + Xr,
                    Zr = "__reactProps$" + Xr,
                    ea = "__reactContainer$" + Xr,
                    ta = "__reactEvents$" + Xr;

                function na(e) {
                    var t = e[Jr];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[ea] || n[Jr]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = Kr(e); null !== e;) {
                                    if (n = e[Jr]) return n;
                                    e = Kr(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function ra(e) {
                    return !(e = e[Jr] || e[ea]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function aa(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(i(33))
                }

                function oa(e) {
                    return e[Zr] || null
                }

                function ia(e) {
                    var t = e[ta];
                    return void 0 === t && (t = e[ta] = new Set), t
                }
                var la = [],
                    ua = -1;

                function sa(e) {
                    return {
                        current: e
                    }
                }

                function ca(e) {
                    0 > ua || (e.current = la[ua], la[ua] = null, ua--)
                }

                function fa(e, t) {
                    ua++, la[ua] = e.current, e.current = t
                }
                var da = {},
                    pa = sa(da),
                    ma = sa(!1),
                    va = da;

                function ha(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return da;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                    var a, o = {};
                    for (a in n) o[a] = t[a];
                    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
                }

                function ga(e) {
                    return null !== (e = e.childContextTypes) && void 0 !== e
                }

                function ba() {
                    ca(ma), ca(pa)
                }

                function ya(e, t, n) {
                    if (pa.current !== da) throw Error(i(168));
                    fa(pa, t), fa(ma, n)
                }

                function wa(e, t, n) {
                    var r = e.stateNode;
                    if (e = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
                    for (var o in r = r.getChildContext())
                        if (!(o in e)) throw Error(i(108, Q(t) || "Unknown", o));
                    return a({}, n, r)
                }

                function ka(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || da, va = pa.current, fa(pa, e), fa(ma, ma.current), !0
                }

                function xa(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(i(169));
                    n ? (e = wa(e, t, va), r.__reactInternalMemoizedMergedChildContext = e, ca(ma), ca(pa), fa(pa, e)) : ca(ma), fa(ma, n)
                }
                var Sa = null,
                    Ea = null,
                    Ca = o.unstable_runWithPriority,
                    Oa = o.unstable_scheduleCallback,
                    Na = o.unstable_cancelCallback,
                    ja = o.unstable_shouldYield,
                    Pa = o.unstable_requestPaint,
                    Ta = o.unstable_now,
                    _a = o.unstable_getCurrentPriorityLevel,
                    za = o.unstable_ImmediatePriority,
                    La = o.unstable_UserBlockingPriority,
                    Ma = o.unstable_NormalPriority,
                    Aa = o.unstable_LowPriority,
                    Ra = o.unstable_IdlePriority,
                    Da = {},
                    Ia = void 0 !== Pa ? Pa : function() {},
                    Fa = null,
                    Ua = null,
                    Ha = !1,
                    Va = Ta(),
                    Wa = 1e4 > Va ? Ta : function() {
                        return Ta() - Va
                    };

                function Ba() {
                    switch (_a()) {
                        case za:
                            return 99;
                        case La:
                            return 98;
                        case Ma:
                            return 97;
                        case Aa:
                            return 96;
                        case Ra:
                            return 95;
                        default:
                            throw Error(i(332))
                    }
                }

                function Ya(e) {
                    switch (e) {
                        case 99:
                            return za;
                        case 98:
                            return La;
                        case 97:
                            return Ma;
                        case 96:
                            return Aa;
                        case 95:
                            return Ra;
                        default:
                            throw Error(i(332))
                    }
                }

                function $a(e, t) {
                    return e = Ya(e), Ca(e, t)
                }

                function Qa(e, t, n) {
                    return e = Ya(e), Oa(e, t, n)
                }

                function qa() {
                    if (null !== Ua) {
                        var e = Ua;
                        Ua = null, Na(e)
                    }
                    Ka()
                }

                function Ka() {
                    if (!Ha && null !== Fa) {
                        Ha = !0;
                        var e = 0;
                        try {
                            var t = Fa;
                            $a(99, (function() {
                                for (; e < t.length; e++) {
                                    var n = t[e];
                                    do {
                                        n = n(!0)
                                    } while (null !== n)
                                }
                            })), Fa = null
                        } catch (n) {
                            throw null !== Fa && (Fa = Fa.slice(e + 1)), Oa(za, qa), n
                        } finally {
                            Ha = !1
                        }
                    }
                }
                var Ga = k.ReactCurrentBatchConfig;

                function Xa(e, t) {
                    if (e && e.defaultProps) {
                        for (var n in t = a({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                        return t
                    }
                    return t
                }
                var Ja = sa(null),
                    Za = null,
                    eo = null,
                    to = null;

                function no() {
                    to = eo = Za = null
                }

                function ro(e) {
                    var t = Ja.current;
                    ca(Ja), e.type._context._currentValue = t
                }

                function ao(e, t) {
                    for (; null !== e;) {
                        var n = e.alternate;
                        if ((e.childLanes & t) === t) {
                            if (null === n || (n.childLanes & t) === t) break;
                            n.childLanes |= t
                        } else e.childLanes |= t, null !== n && (n.childLanes |= t);
                        e = e.return
                    }
                }

                function oo(e, t) {
                    Za = e, to = eo = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (Di = !0), e.firstContext = null)
                }

                function io(e, t) {
                    if (to !== e && !1 !== t && 0 !== t)
                        if ("number" === typeof t && 1073741823 !== t || (to = e, t = 1073741823), t = {
                                context: e,
                                observedBits: t,
                                next: null
                            }, null === eo) {
                            if (null === Za) throw Error(i(308));
                            eo = t, Za.dependencies = {
                                lanes: 0,
                                firstContext: t,
                                responders: null
                            }
                        } else eo = eo.next = t;
                    return e._currentValue
                }
                var lo = !1;

                function uo(e) {
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

                function so(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function co(e, t) {
                    return {
                        eventTime: e,
                        lane: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function fo(e, t) {
                    if (null !== (e = e.updateQueue)) {
                        var n = (e = e.shared).pending;
                        null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                    }
                }

                function po(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var a = null,
                            o = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var i = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                };
                                null === o ? a = o = i : o = o.next = i, n = n.next
                            } while (null !== n);
                            null === o ? a = o = t : o = o.next = t
                        } else a = o = t;
                        return n = {
                            baseState: r.baseState,
                            firstBaseUpdate: a,
                            lastBaseUpdate: o,
                            shared: r.shared,
                            effects: r.effects
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function mo(e, t, n, r) {
                    var o = e.updateQueue;
                    lo = !1;
                    var i = o.firstBaseUpdate,
                        l = o.lastBaseUpdate,
                        u = o.shared.pending;
                    if (null !== u) {
                        o.shared.pending = null;
                        var s = u,
                            c = s.next;
                        s.next = null, null === l ? i = c : l.next = c, l = s;
                        var f = e.alternate;
                        if (null !== f) {
                            var d = (f = f.updateQueue).lastBaseUpdate;
                            d !== l && (null === d ? f.firstBaseUpdate = c : d.next = c, f.lastBaseUpdate = s)
                        }
                    }
                    if (null !== i) {
                        for (d = o.baseState, l = 0, f = c = s = null;;) {
                            u = i.lane;
                            var p = i.eventTime;
                            if ((r & u) === u) {
                                null !== f && (f = f.next = {
                                    eventTime: p,
                                    lane: 0,
                                    tag: i.tag,
                                    payload: i.payload,
                                    callback: i.callback,
                                    next: null
                                });
                                e: {
                                    var m = e,
                                        v = i;
                                    switch (u = t, p = n, v.tag) {
                                        case 1:
                                            if ("function" === typeof(m = v.payload)) {
                                                d = m.call(p, d, u);
                                                break e
                                            }
                                            d = m;
                                            break e;
                                        case 3:
                                            m.flags = -4097 & m.flags | 64;
                                        case 0:
                                            if (null === (u = "function" === typeof(m = v.payload) ? m.call(p, d, u) : m) || void 0 === u) break e;
                                            d = a({}, d, u);
                                            break e;
                                        case 2:
                                            lo = !0
                                    }
                                }
                                null !== i.callback && (e.flags |= 32, null === (u = o.effects) ? o.effects = [i] : u.push(i))
                            } else p = {
                                eventTime: p,
                                lane: u,
                                tag: i.tag,
                                payload: i.payload,
                                callback: i.callback,
                                next: null
                            }, null === f ? (c = f = p, s = d) : f = f.next = p, l |= u;
                            if (null === (i = i.next)) {
                                if (null === (u = o.shared.pending)) break;
                                i = u.next, u.next = null, o.lastBaseUpdate = u, o.shared.pending = null
                            }
                        }
                        null === f && (s = d), o.baseState = s, o.firstBaseUpdate = c, o.lastBaseUpdate = f, Hl |= l, e.lanes = l, e.memoizedState = d
                    }
                }

                function vo(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                a = r.callback;
                            if (null !== a) {
                                if (r.callback = null, r = n, "function" !== typeof a) throw Error(i(191, a));
                                a.call(r)
                            }
                        }
                }
                var ho = (new r.Component).refs;

                function go(e, t, n, r) {
                    n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : a({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var bo = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && Ge(e) === e
                    },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = du(),
                            a = pu(e),
                            o = co(r, a);
                        o.payload = t, void 0 !== n && null !== n && (o.callback = n), fo(e, o), mu(e, a, r)
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = du(),
                            a = pu(e),
                            o = co(r, a);
                        o.tag = 1, o.payload = t, void 0 !== n && null !== n && (o.callback = n), fo(e, o), mu(e, a, r)
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = du(),
                            r = pu(e),
                            a = co(n, r);
                        a.tag = 2, void 0 !== t && null !== t && (a.callback = t), fo(e, a), mu(e, r, n)
                    }
                };

                function yo(e, t, n, r, a, o, i) {
                    return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, i) : !t.prototype || !t.prototype.isPureReactComponent || (!dr(n, r) || !dr(a, o))
                }

                function wo(e, t, n) {
                    var r = !1,
                        a = da,
                        o = t.contextType;
                    return "object" === typeof o && null !== o ? o = io(o) : (a = ga(t) ? va : pa.current, o = (r = null !== (r = t.contextTypes) && void 0 !== r) ? ha(e, a) : da), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = bo, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t
                }

                function ko(e, t, n, r) {
                    e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && bo.enqueueReplaceState(t, t.state, null)
                }

                function xo(e, t, n, r) {
                    var a = e.stateNode;
                    a.props = n, a.state = e.memoizedState, a.refs = ho, uo(e);
                    var o = t.contextType;
                    "object" === typeof o && null !== o ? a.context = io(o) : (o = ga(t) ? va : pa.current, a.context = ha(e, o)), mo(e, n, a, r), a.state = e.memoizedState, "function" === typeof(o = t.getDerivedStateFromProps) && (go(e, t, o, n), a.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (t = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && bo.enqueueReplaceState(a, a.state, null), mo(e, n, a, r), a.state = e.memoizedState), "function" === typeof a.componentDidMount && (e.flags |= 4)
                }
                var So = Array.isArray;

                function Eo(e, t, n) {
                    if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(i(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(i(147, e));
                            var a = "" + e;
                            return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === a ? t.ref : (t = function(e) {
                                var t = r.refs;
                                t === ho && (t = r.refs = {}), null === e ? delete t[a] : t[a] = e
                            }, t._stringRef = a, t)
                        }
                        if ("string" !== typeof e) throw Error(i(284));
                        if (!n._owner) throw Error(i(290, e))
                    }
                    return e
                }

                function Co(e, t) {
                    if ("textarea" !== e.type) throw Error(i(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t))
                }

                function Oo(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.lastEffect;
                            null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.flags = 8
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function a(e, t) {
                        return (e = $u(e, t)).index = 0, e.sibling = null, e
                    }

                    function o(t, n, r) {
                        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags = 2, n) : r : (t.flags = 2, n) : n
                    }

                    function l(t) {
                        return e && null === t.alternate && (t.flags = 2), t
                    }

                    function u(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = Gu(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function s(e, t, n, r) {
                        return null !== t && t.elementType === n.type ? ((r = a(t, n.props)).ref = Eo(e, t, n), r.return = e, r) : ((r = Qu(n.type, n.key, n.props, null, e.mode, r)).ref = Eo(e, t, n), r.return = e, r)
                    }

                    function c(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Xu(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
                    }

                    function f(e, t, n, r, o) {
                        return null === t || 7 !== t.tag ? ((t = qu(n, e.mode, r, o)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function d(e, t, n) {
                        if ("string" === typeof t || "number" === typeof t) return (t = Gu("" + t, e.mode, n)).return = e, t;
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case x:
                                    return (n = Qu(t.type, t.key, t.props, null, e.mode, n)).ref = Eo(e, null, t), n.return = e, n;
                                case S:
                                    return (t = Xu(t, e.mode, n)).return = e, t
                            }
                            if (So(t) || V(t)) return (t = qu(t, e.mode, n, null)).return = e, t;
                            Co(e, t)
                        }
                        return null
                    }

                    function p(e, t, n, r) {
                        var a = null !== t ? t.key : null;
                        if ("string" === typeof n || "number" === typeof n) return null !== a ? null : u(e, t, "" + n, r);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case x:
                                    return n.key === a ? n.type === E ? f(e, t, n.props.children, r, a) : s(e, t, n, r) : null;
                                case S:
                                    return n.key === a ? c(e, t, n, r) : null
                            }
                            if (So(n) || V(n)) return null !== a ? null : f(e, t, n, r, null);
                            Co(e, n)
                        }
                        return null
                    }

                    function m(e, t, n, r, a) {
                        if ("string" === typeof r || "number" === typeof r) return u(t, e = e.get(n) || null, "" + r, a);
                        if ("object" === typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case x:
                                    return e = e.get(null === r.key ? n : r.key) || null, r.type === E ? f(t, e, r.props.children, a, r.key) : s(t, e, r, a);
                                case S:
                                    return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a)
                            }
                            if (So(r) || V(r)) return f(t, e = e.get(n) || null, r, a, null);
                            Co(t, r)
                        }
                        return null
                    }

                    function v(a, i, l, u) {
                        for (var s = null, c = null, f = i, v = i = 0, h = null; null !== f && v < l.length; v++) {
                            f.index > v ? (h = f, f = null) : h = f.sibling;
                            var g = p(a, f, l[v], u);
                            if (null === g) {
                                null === f && (f = h);
                                break
                            }
                            e && f && null === g.alternate && t(a, f), i = o(g, i, v), null === c ? s = g : c.sibling = g, c = g, f = h
                        }
                        if (v === l.length) return n(a, f), s;
                        if (null === f) {
                            for (; v < l.length; v++) null !== (f = d(a, l[v], u)) && (i = o(f, i, v), null === c ? s = f : c.sibling = f, c = f);
                            return s
                        }
                        for (f = r(a, f); v < l.length; v++) null !== (h = m(f, a, v, l[v], u)) && (e && null !== h.alternate && f.delete(null === h.key ? v : h.key), i = o(h, i, v), null === c ? s = h : c.sibling = h, c = h);
                        return e && f.forEach((function(e) {
                            return t(a, e)
                        })), s
                    }

                    function h(a, l, u, s) {
                        var c = V(u);
                        if ("function" !== typeof c) throw Error(i(150));
                        if (null == (u = c.call(u))) throw Error(i(151));
                        for (var f = c = null, v = l, h = l = 0, g = null, b = u.next(); null !== v && !b.done; h++, b = u.next()) {
                            v.index > h ? (g = v, v = null) : g = v.sibling;
                            var y = p(a, v, b.value, s);
                            if (null === y) {
                                null === v && (v = g);
                                break
                            }
                            e && v && null === y.alternate && t(a, v), l = o(y, l, h), null === f ? c = y : f.sibling = y, f = y, v = g
                        }
                        if (b.done) return n(a, v), c;
                        if (null === v) {
                            for (; !b.done; h++, b = u.next()) null !== (b = d(a, b.value, s)) && (l = o(b, l, h), null === f ? c = b : f.sibling = b, f = b);
                            return c
                        }
                        for (v = r(a, v); !b.done; h++, b = u.next()) null !== (b = m(v, a, h, b.value, s)) && (e && null !== b.alternate && v.delete(null === b.key ? h : b.key), l = o(b, l, h), null === f ? c = b : f.sibling = b, f = b);
                        return e && v.forEach((function(e) {
                            return t(a, e)
                        })), c
                    }
                    return function(e, r, o, u) {
                        var s = "object" === typeof o && null !== o && o.type === E && null === o.key;
                        s && (o = o.props.children);
                        var c = "object" === typeof o && null !== o;
                        if (c) switch (o.$$typeof) {
                            case x:
                                e: {
                                    for (c = o.key, s = r; null !== s;) {
                                        if (s.key === c) {
                                            if (7 === s.tag) {
                                                if (o.type === E) {
                                                    n(e, s.sibling), (r = a(s, o.props.children)).return = e, e = r;
                                                    break e
                                                }
                                            } else if (s.elementType === o.type) {
                                                n(e, s.sibling), (r = a(s, o.props)).ref = Eo(e, s, o), r.return = e, e = r;
                                                break e
                                            }
                                            n(e, s);
                                            break
                                        }
                                        t(e, s), s = s.sibling
                                    }
                                    o.type === E ? ((r = qu(o.props.children, e.mode, u, o.key)).return = e, e = r) : ((u = Qu(o.type, o.key, o.props, null, e.mode, u)).ref = Eo(e, r, o), u.return = e, e = u)
                                }
                                return l(e);
                            case S:
                                e: {
                                    for (s = o.key; null !== r;) {
                                        if (r.key === s) {
                                            if (4 === r.tag && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                                                n(e, r.sibling), (r = a(r, o.children || [])).return = e, e = r;
                                                break e
                                            }
                                            n(e, r);
                                            break
                                        }
                                        t(e, r), r = r.sibling
                                    }(r = Xu(o, e.mode, u)).return = e,
                                    e = r
                                }
                                return l(e)
                        }
                        if ("string" === typeof o || "number" === typeof o) return o = "" + o, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = a(r, o)).return = e, e = r) : (n(e, r), (r = Gu(o, e.mode, u)).return = e, e = r), l(e);
                        if (So(o)) return v(e, r, o, u);
                        if (V(o)) return h(e, r, o, u);
                        if (c && Co(e, o), "undefined" === typeof o && !s) switch (e.tag) {
                            case 1:
                            case 22:
                            case 0:
                            case 11:
                            case 15:
                                throw Error(i(152, Q(e.type) || "Component"))
                        }
                        return n(e, r)
                    }
                }
                var No = Oo(!0),
                    jo = Oo(!1),
                    Po = {},
                    To = sa(Po),
                    _o = sa(Po),
                    zo = sa(Po);

                function Lo(e) {
                    if (e === Po) throw Error(i(174));
                    return e
                }

                function Mo(e, t) {
                    switch (fa(zo, t), fa(_o, e), fa(To, Po), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : me(null, "");
                            break;
                        default:
                            t = me(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                    }
                    ca(To), fa(To, t)
                }

                function Ao() {
                    ca(To), ca(_o), ca(zo)
                }

                function Ro(e) {
                    Lo(zo.current);
                    var t = Lo(To.current),
                        n = me(t, e.type);
                    t !== n && (fa(_o, e), fa(To, n))
                }

                function Do(e) {
                    _o.current === e && (ca(To), ca(_o))
                }
                var Io = sa(0);

                function Fo(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (0 !== (64 & t.flags)) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var Uo = null,
                    Ho = null,
                    Vo = !1;

                function Wo(e, t) {
                    var n = Bu(5, null, null, 0);
                    n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
                }

                function Bo(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
                        default:
                            return !1
                    }
                }

                function Yo(e) {
                    if (Vo) {
                        var t = Ho;
                        if (t) {
                            var n = t;
                            if (!Bo(e, t)) {
                                if (!(t = qr(n.nextSibling)) || !Bo(e, t)) return e.flags = -1025 & e.flags | 2, Vo = !1, void(Uo = e);
                                Wo(Uo, n)
                            }
                            Uo = e, Ho = qr(t.firstChild)
                        } else e.flags = -1025 & e.flags | 2, Vo = !1, Uo = e
                    }
                }

                function $o(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    Uo = e
                }

                function Qo(e) {
                    if (e !== Uo) return !1;
                    if (!Vo) return $o(e), Vo = !0, !1;
                    var t = e.type;
                    if (5 !== e.tag || "head" !== t && "body" !== t && !Br(t, e.memoizedProps))
                        for (t = Ho; t;) Wo(e, t), t = qr(t.nextSibling);
                    if ($o(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
                        e: {
                            for (e = e.nextSibling, t = 0; e;) {
                                if (8 === e.nodeType) {
                                    var n = e.data;
                                    if ("/$" === n) {
                                        if (0 === t) {
                                            Ho = qr(e.nextSibling);
                                            break e
                                        }
                                        t--
                                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                                }
                                e = e.nextSibling
                            }
                            Ho = null
                        }
                    } else Ho = Uo ? qr(e.stateNode.nextSibling) : null;
                    return !0
                }

                function qo() {
                    Ho = Uo = null, Vo = !1
                }
                var Ko = [];

                function Go() {
                    for (var e = 0; e < Ko.length; e++) Ko[e]._workInProgressVersionPrimary = null;
                    Ko.length = 0
                }
                var Xo = k.ReactCurrentDispatcher,
                    Jo = k.ReactCurrentBatchConfig,
                    Zo = 0,
                    ei = null,
                    ti = null,
                    ni = null,
                    ri = !1,
                    ai = !1;

                function oi() {
                    throw Error(i(321))
                }

                function ii(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!cr(e[n], t[n])) return !1;
                    return !0
                }

                function li(e, t, n, r, a, o) {
                    if (Zo = o, ei = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Xo.current = null === e || null === e.memoizedState ? Li : Mi, e = n(r, a), ai) {
                        o = 0;
                        do {
                            if (ai = !1, !(25 > o)) throw Error(i(301));
                            o += 1, ni = ti = null, t.updateQueue = null, Xo.current = Ai, e = n(r, a)
                        } while (ai)
                    }
                    if (Xo.current = zi, t = null !== ti && null !== ti.next, Zo = 0, ni = ti = ei = null, ri = !1, t) throw Error(i(300));
                    return e
                }

                function ui() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === ni ? ei.memoizedState = ni = e : ni = ni.next = e, ni
                }

                function si() {
                    if (null === ti) {
                        var e = ei.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = ti.next;
                    var t = null === ni ? ei.memoizedState : ni.next;
                    if (null !== t) ni = t, ti = e;
                    else {
                        if (null === e) throw Error(i(310));
                        e = {
                            memoizedState: (ti = e).memoizedState,
                            baseState: ti.baseState,
                            baseQueue: ti.baseQueue,
                            queue: ti.queue,
                            next: null
                        }, null === ni ? ei.memoizedState = ni = e : ni = ni.next = e
                    }
                    return ni
                }

                function ci(e, t) {
                    return "function" === typeof t ? t(e) : t
                }

                function fi(e) {
                    var t = si(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var r = ti,
                        a = r.baseQueue,
                        o = n.pending;
                    if (null !== o) {
                        if (null !== a) {
                            var l = a.next;
                            a.next = o.next, o.next = l
                        }
                        r.baseQueue = a = o, n.pending = null
                    }
                    if (null !== a) {
                        a = a.next, r = r.baseState;
                        var u = l = o = null,
                            s = a;
                        do {
                            var c = s.lane;
                            if ((Zo & c) === c) null !== u && (u = u.next = {
                                lane: 0,
                                action: s.action,
                                eagerReducer: s.eagerReducer,
                                eagerState: s.eagerState,
                                next: null
                            }), r = s.eagerReducer === e ? s.eagerState : e(r, s.action);
                            else {
                                var f = {
                                    lane: c,
                                    action: s.action,
                                    eagerReducer: s.eagerReducer,
                                    eagerState: s.eagerState,
                                    next: null
                                };
                                null === u ? (l = u = f, o = r) : u = u.next = f, ei.lanes |= c, Hl |= c
                            }
                            s = s.next
                        } while (null !== s && s !== a);
                        null === u ? o = r : u.next = l, cr(r, t.memoizedState) || (Di = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = u, n.lastRenderedState = r
                    }
                    return [t.memoizedState, n.dispatch]
                }

                function di(e) {
                    var t = si(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        a = n.pending,
                        o = t.memoizedState;
                    if (null !== a) {
                        n.pending = null;
                        var l = a = a.next;
                        do {
                            o = e(o, l.action), l = l.next
                        } while (l !== a);
                        cr(o, t.memoizedState) || (Di = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o
                    }
                    return [o, r]
                }

                function pi(e, t, n) {
                    var r = t._getVersion;
                    r = r(t._source);
                    var a = t._workInProgressVersionPrimary;
                    if (null !== a ? e = a === r : (e = e.mutableReadLanes, (e = (Zo & e) === e) && (t._workInProgressVersionPrimary = r, Ko.push(t))), e) return n(t._source);
                    throw Ko.push(t), Error(i(350))
                }

                function mi(e, t, n, r) {
                    var a = Ll;
                    if (null === a) throw Error(i(349));
                    var o = t._getVersion,
                        l = o(t._source),
                        u = Xo.current,
                        s = u.useState((function() {
                            return pi(a, t, n)
                        })),
                        c = s[1],
                        f = s[0];
                    s = ni;
                    var d = e.memoizedState,
                        p = d.refs,
                        m = p.getSnapshot,
                        v = d.source;
                    d = d.subscribe;
                    var h = ei;
                    return e.memoizedState = {
                        refs: p,
                        source: t,
                        subscribe: r
                    }, u.useEffect((function() {
                        p.getSnapshot = n, p.setSnapshot = c;
                        var e = o(t._source);
                        if (!cr(l, e)) {
                            e = n(t._source), cr(f, e) || (c(e), e = pu(h), a.mutableReadLanes |= e & a.pendingLanes), e = a.mutableReadLanes, a.entangledLanes |= e;
                            for (var r = a.entanglements, i = e; 0 < i;) {
                                var u = 31 - Bt(i),
                                    s = 1 << u;
                                r[u] |= e, i &= ~s
                            }
                        }
                    }), [n, t, r]), u.useEffect((function() {
                        return r(t._source, (function() {
                            var e = p.getSnapshot,
                                n = p.setSnapshot;
                            try {
                                n(e(t._source));
                                var r = pu(h);
                                a.mutableReadLanes |= r & a.pendingLanes
                            } catch (o) {
                                n((function() {
                                    throw o
                                }))
                            }
                        }))
                    }), [t, r]), cr(m, n) && cr(v, t) && cr(d, r) || ((e = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: ci,
                        lastRenderedState: f
                    }).dispatch = c = _i.bind(null, ei, e), s.queue = e, s.baseQueue = null, f = pi(a, t, n), s.memoizedState = s.baseState = f), f
                }

                function vi(e, t, n) {
                    return mi(si(), e, t, n)
                }

                function hi(e) {
                    var t = ui();
                    return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: ci,
                        lastRenderedState: e
                    }).dispatch = _i.bind(null, ei, e), [t.memoizedState, e]
                }

                function gi(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === (t = ei.updateQueue) ? (t = {
                        lastEffect: null
                    }, ei.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function bi(e) {
                    return e = {
                        current: e
                    }, ui().memoizedState = e
                }

                function yi() {
                    return si().memoizedState
                }

                function wi(e, t, n, r) {
                    var a = ui();
                    ei.flags |= e, a.memoizedState = gi(1 | t, n, void 0, void 0 === r ? null : r)
                }

                function ki(e, t, n, r) {
                    var a = si();
                    r = void 0 === r ? null : r;
                    var o = void 0;
                    if (null !== ti) {
                        var i = ti.memoizedState;
                        if (o = i.destroy, null !== r && ii(r, i.deps)) return void gi(t, n, o, r)
                    }
                    ei.flags |= e, a.memoizedState = gi(1 | t, n, o, r)
                }

                function xi(e, t) {
                    return wi(516, 4, e, t)
                }

                function Si(e, t) {
                    return ki(516, 4, e, t)
                }

                function Ei(e, t) {
                    return ki(4, 2, e, t)
                }

                function Ci(e, t) {
                    return "function" === typeof t ? (e = e(), t(e), function() {
                        t(null)
                    }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() {
                        t.current = null
                    }) : void 0
                }

                function Oi(e, t, n) {
                    return n = null !== n && void 0 !== n ? n.concat([e]) : null, ki(4, 2, Ci.bind(null, t, e), n)
                }

                function Ni() {}

                function ji(e, t) {
                    var n = si();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ii(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function Pi(e, t) {
                    var n = si();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ii(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function Ti(e, t) {
                    var n = Ba();
                    $a(98 > n ? 98 : n, (function() {
                        e(!0)
                    })), $a(97 < n ? 97 : n, (function() {
                        var n = Jo.transition;
                        Jo.transition = 1;
                        try {
                            e(!1), t()
                        } finally {
                            Jo.transition = n
                        }
                    }))
                }

                function _i(e, t, n) {
                    var r = du(),
                        a = pu(e),
                        o = {
                            lane: a,
                            action: n,
                            eagerReducer: null,
                            eagerState: null,
                            next: null
                        },
                        i = t.pending;
                    if (null === i ? o.next = o : (o.next = i.next, i.next = o), t.pending = o, i = e.alternate, e === ei || null !== i && i === ei) ai = ri = !0;
                    else {
                        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer)) try {
                            var l = t.lastRenderedState,
                                u = i(l, n);
                            if (o.eagerReducer = i, o.eagerState = u, cr(u, l)) return
                        } catch (s) {}
                        mu(e, a, r)
                    }
                }
                var zi = {
                        readContext: io,
                        useCallback: oi,
                        useContext: oi,
                        useEffect: oi,
                        useImperativeHandle: oi,
                        useLayoutEffect: oi,
                        useMemo: oi,
                        useReducer: oi,
                        useRef: oi,
                        useState: oi,
                        useDebugValue: oi,
                        useDeferredValue: oi,
                        useTransition: oi,
                        useMutableSource: oi,
                        useOpaqueIdentifier: oi,
                        unstable_isNewReconciler: !1
                    },
                    Li = {
                        readContext: io,
                        useCallback: function(e, t) {
                            return ui().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: io,
                        useEffect: xi,
                        useImperativeHandle: function(e, t, n) {
                            return n = null !== n && void 0 !== n ? n.concat([e]) : null, wi(4, 2, Ci.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return wi(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = ui();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function(e, t, n) {
                            var r = ui();
                            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
                                pending: null,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }).dispatch = _i.bind(null, ei, e), [r.memoizedState, e]
                        },
                        useRef: bi,
                        useState: hi,
                        useDebugValue: Ni,
                        useDeferredValue: function(e) {
                            var t = hi(e),
                                n = t[0],
                                r = t[1];
                            return xi((function() {
                                var t = Jo.transition;
                                Jo.transition = 1;
                                try {
                                    r(e)
                                } finally {
                                    Jo.transition = t
                                }
                            }), [e]), n
                        },
                        useTransition: function() {
                            var e = hi(!1),
                                t = e[0];
                            return bi(e = Ti.bind(null, e[1])), [e, t]
                        },
                        useMutableSource: function(e, t, n) {
                            var r = ui();
                            return r.memoizedState = {
                                refs: {
                                    getSnapshot: t,
                                    setSnapshot: null
                                },
                                source: e,
                                subscribe: n
                            }, mi(r, e, t, n)
                        },
                        useOpaqueIdentifier: function() {
                            if (Vo) {
                                var e = !1,
                                    t = function(e) {
                                        return {
                                            $$typeof: A,
                                            toString: e,
                                            valueOf: e
                                        }
                                    }((function() {
                                        throw e || (e = !0, n("r:" + (Gr++).toString(36))), Error(i(355))
                                    })),
                                    n = hi(t)[1];
                                return 0 === (2 & ei.mode) && (ei.flags |= 516, gi(5, (function() {
                                    n("r:" + (Gr++).toString(36))
                                }), void 0, null)), t
                            }
                            return hi(t = "r:" + (Gr++).toString(36)), t
                        },
                        unstable_isNewReconciler: !1
                    },
                    Mi = {
                        readContext: io,
                        useCallback: ji,
                        useContext: io,
                        useEffect: Si,
                        useImperativeHandle: Oi,
                        useLayoutEffect: Ei,
                        useMemo: Pi,
                        useReducer: fi,
                        useRef: yi,
                        useState: function() {
                            return fi(ci)
                        },
                        useDebugValue: Ni,
                        useDeferredValue: function(e) {
                            var t = fi(ci),
                                n = t[0],
                                r = t[1];
                            return Si((function() {
                                var t = Jo.transition;
                                Jo.transition = 1;
                                try {
                                    r(e)
                                } finally {
                                    Jo.transition = t
                                }
                            }), [e]), n
                        },
                        useTransition: function() {
                            var e = fi(ci)[0];
                            return [yi().current, e]
                        },
                        useMutableSource: vi,
                        useOpaqueIdentifier: function() {
                            return fi(ci)[0]
                        },
                        unstable_isNewReconciler: !1
                    },
                    Ai = {
                        readContext: io,
                        useCallback: ji,
                        useContext: io,
                        useEffect: Si,
                        useImperativeHandle: Oi,
                        useLayoutEffect: Ei,
                        useMemo: Pi,
                        useReducer: di,
                        useRef: yi,
                        useState: function() {
                            return di(ci)
                        },
                        useDebugValue: Ni,
                        useDeferredValue: function(e) {
                            var t = di(ci),
                                n = t[0],
                                r = t[1];
                            return Si((function() {
                                var t = Jo.transition;
                                Jo.transition = 1;
                                try {
                                    r(e)
                                } finally {
                                    Jo.transition = t
                                }
                            }), [e]), n
                        },
                        useTransition: function() {
                            var e = di(ci)[0];
                            return [yi().current, e]
                        },
                        useMutableSource: vi,
                        useOpaqueIdentifier: function() {
                            return di(ci)[0]
                        },
                        unstable_isNewReconciler: !1
                    },
                    Ri = k.ReactCurrentOwner,
                    Di = !1;

                function Ii(e, t, n, r) {
                    t.child = null === e ? jo(t, null, n, r) : No(t, e.child, n, r)
                }

                function Fi(e, t, n, r, a) {
                    n = n.render;
                    var o = t.ref;
                    return oo(t, a), r = li(e, t, n, r, o, a), null === e || Di ? (t.flags |= 1, Ii(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~a, ol(e, t, a))
                }

                function Ui(e, t, n, r, a, o) {
                    if (null === e) {
                        var i = n.type;
                        return "function" !== typeof i || Yu(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Qu(n.type, null, r, t, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, Hi(e, t, i, r, a, o))
                    }
                    return i = e.child, 0 === (a & o) && (a = i.memoizedProps, (n = null !== (n = n.compare) ? n : dr)(a, r) && e.ref === t.ref) ? ol(e, t, o) : (t.flags |= 1, (e = $u(i, r)).ref = t.ref, e.return = t, t.child = e)
                }

                function Hi(e, t, n, r, a, o) {
                    if (null !== e && dr(e.memoizedProps, r) && e.ref === t.ref) {
                        if (Di = !1, 0 === (o & a)) return t.lanes = e.lanes, ol(e, t, o);
                        0 !== (16384 & e.flags) && (Di = !0)
                    }
                    return Bi(e, t, n, r, o)
                }

                function Vi(e, t, n) {
                    var r = t.pendingProps,
                        a = r.children,
                        o = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
                        if (0 === (4 & t.mode)) t.memoizedState = {
                            baseLanes: 0
                        }, xu(t, n);
                        else {
                            if (0 === (1073741824 & n)) return e = null !== o ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                                baseLanes: e
                            }, xu(t, e), null;
                            t.memoizedState = {
                                baseLanes: 0
                            }, xu(t, null !== o ? o.baseLanes : n)
                        }
                    else null !== o ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, xu(t, r);
                    return Ii(e, t, a, n), t.child
                }

                function Wi(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 128)
                }

                function Bi(e, t, n, r, a) {
                    var o = ga(n) ? va : pa.current;
                    return o = ha(t, o), oo(t, a), n = li(e, t, n, r, o, a), null === e || Di ? (t.flags |= 1, Ii(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~a, ol(e, t, a))
                }

                function Yi(e, t, n, r, a) {
                    if (ga(n)) {
                        var o = !0;
                        ka(t)
                    } else o = !1;
                    if (oo(t, a), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), wo(t, n, r), xo(t, n, r, a), r = !0;
                    else if (null === e) {
                        var i = t.stateNode,
                            l = t.memoizedProps;
                        i.props = l;
                        var u = i.context,
                            s = n.contextType;
                        "object" === typeof s && null !== s ? s = io(s) : s = ha(t, s = ga(n) ? va : pa.current);
                        var c = n.getDerivedStateFromProps,
                            f = "function" === typeof c || "function" === typeof i.getSnapshotBeforeUpdate;
                        f || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== r || u !== s) && ko(t, i, r, s), lo = !1;
                        var d = t.memoizedState;
                        i.state = d, mo(t, r, i, a), u = t.memoizedState, l !== r || d !== u || ma.current || lo ? ("function" === typeof c && (go(t, n, c, r), u = t.memoizedState), (l = lo || yo(t, n, l, r, d, u, s)) ? (f || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" === typeof i.componentDidMount && (t.flags |= 4)) : ("function" === typeof i.componentDidMount && (t.flags |= 4), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = s, r = l) : ("function" === typeof i.componentDidMount && (t.flags |= 4), r = !1)
                    } else {
                        i = t.stateNode, so(e, t), l = t.memoizedProps, s = t.type === t.elementType ? l : Xa(t.type, l), i.props = s, f = t.pendingProps, d = i.context, "object" === typeof(u = n.contextType) && null !== u ? u = io(u) : u = ha(t, u = ga(n) ? va : pa.current);
                        var p = n.getDerivedStateFromProps;
                        (c = "function" === typeof p || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== f || d !== u) && ko(t, i, r, u), lo = !1, d = t.memoizedState, i.state = d, mo(t, r, i, a);
                        var m = t.memoizedState;
                        l !== f || d !== m || ma.current || lo ? ("function" === typeof p && (go(t, n, p, r), m = t.memoizedState), (s = lo || yo(t, n, s, r, d, m, u)) ? (c || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(r, m, u), "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, m, u)), "function" === typeof i.componentDidUpdate && (t.flags |= 4), "function" === typeof i.getSnapshotBeforeUpdate && (t.flags |= 256)) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 256), t.memoizedProps = r, t.memoizedState = m), i.props = r, i.state = m, i.context = u, r = s) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 256), r = !1)
                    }
                    return $i(e, t, n, r, o, a)
                }

                function $i(e, t, n, r, a, o) {
                    Wi(e, t);
                    var i = 0 !== (64 & t.flags);
                    if (!r && !i) return a && xa(t, n, !1), ol(e, t, o);
                    r = t.stateNode, Ri.current = t;
                    var l = i && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                    return t.flags |= 1, null !== e && i ? (t.child = No(t, e.child, null, o), t.child = No(t, null, l, o)) : Ii(e, t, l, o), t.memoizedState = r.state, a && xa(t, n, !0), t.child
                }

                function Qi(e) {
                    var t = e.stateNode;
                    t.pendingContext ? ya(0, t.pendingContext, t.pendingContext !== t.context) : t.context && ya(0, t.context, !1), Mo(e, t.containerInfo)
                }
                var qi, Ki, Gi, Xi = {
                    dehydrated: null,
                    retryLane: 0
                };

                function Ji(e, t, n) {
                    var r, a = t.pendingProps,
                        o = Io.current,
                        i = !1;
                    return (r = 0 !== (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)), r ? (i = !0, t.flags &= -65) : null !== e && null === e.memoizedState || void 0 === a.fallback || !0 === a.unstable_avoidThisFallback || (o |= 1), fa(Io, 1 & o), null === e ? (void 0 !== a.fallback && Yo(t), e = a.children, o = a.fallback, i ? (e = Zi(t, e, o, n), t.child.memoizedState = {
                        baseLanes: n
                    }, t.memoizedState = Xi, e) : "number" === typeof a.unstable_expectedLoadTime ? (e = Zi(t, e, o, n), t.child.memoizedState = {
                        baseLanes: n
                    }, t.memoizedState = Xi, t.lanes = 33554432, e) : ((n = Ku({
                        mode: "visible",
                        children: e
                    }, t.mode, n, null)).return = t, t.child = n)) : (e.memoizedState, i ? (a = tl(e, t, a.children, a.fallback, n), i = t.child, o = e.child.memoizedState, i.memoizedState = null === o ? {
                        baseLanes: n
                    } : {
                        baseLanes: o.baseLanes | n
                    }, i.childLanes = e.childLanes & ~n, t.memoizedState = Xi, a) : (n = el(e, t, a.children, n), t.memoizedState = null, n))
                }

                function Zi(e, t, n, r) {
                    var a = e.mode,
                        o = e.child;
                    return t = {
                        mode: "hidden",
                        children: t
                    }, 0 === (2 & a) && null !== o ? (o.childLanes = 0, o.pendingProps = t) : o = Ku(t, a, 0, null), n = qu(n, a, r, null), o.return = e, n.return = e, o.sibling = n, e.child = o, n
                }

                function el(e, t, n, r) {
                    var a = e.child;
                    return e = a.sibling, n = $u(a, {
                        mode: "visible",
                        children: n
                    }), 0 === (2 & t.mode) && (n.lanes = r), n.return = t, n.sibling = null, null !== e && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n
                }

                function tl(e, t, n, r, a) {
                    var o = t.mode,
                        i = e.child;
                    e = i.sibling;
                    var l = {
                        mode: "hidden",
                        children: n
                    };
                    return 0 === (2 & o) && t.child !== i ? ((n = t.child).childLanes = 0, n.pendingProps = l, null !== (i = n.lastEffect) ? (t.firstEffect = n.firstEffect, t.lastEffect = i, i.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = $u(i, l), null !== e ? r = $u(e, r) : (r = qu(r, o, a, null)).flags |= 2, r.return = t, n.return = t, n.sibling = r, t.child = n, r
                }

                function nl(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    null !== n && (n.lanes |= t), ao(e.return, t)
                }

                function rl(e, t, n, r, a, o) {
                    var i = e.memoizedState;
                    null === i ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: a,
                        lastEffect: o
                    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a, i.lastEffect = o)
                }

                function al(e, t, n) {
                    var r = t.pendingProps,
                        a = r.revealOrder,
                        o = r.tail;
                    if (Ii(e, t, r.children, n), 0 !== (2 & (r = Io.current))) r = 1 & r | 2, t.flags |= 64;
                    else {
                        if (null !== e && 0 !== (64 & e.flags)) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && nl(e, n);
                            else if (19 === e.tag) nl(e, n);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    if (fa(Io, r), 0 === (2 & t.mode)) t.memoizedState = null;
                    else switch (a) {
                        case "forwards":
                            for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === Fo(e) && (a = n), n = n.sibling;
                            null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), rl(t, !1, a, n, o, t.lastEffect);
                            break;
                        case "backwards":
                            for (n = null, a = t.child, t.child = null; null !== a;) {
                                if (null !== (e = a.alternate) && null === Fo(e)) {
                                    t.child = a;
                                    break
                                }
                                e = a.sibling, a.sibling = n, n = a, a = e
                            }
                            rl(t, !0, n, null, o, t.lastEffect);
                            break;
                        case "together":
                            rl(t, !1, null, null, void 0, t.lastEffect);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function ol(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), Hl |= t.lanes, 0 !== (n & t.childLanes)) {
                        if (null !== e && t.child !== e.child) throw Error(i(153));
                        if (null !== t.child) {
                            for (n = $u(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = $u(e, e.pendingProps)).return = t;
                            n.sibling = null
                        }
                        return t.child
                    }
                    return null
                }

                function il(e, t) {
                    if (!Vo) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function ll(e, t, n) {
                    var r = t.pendingProps;
                    switch (t.tag) {
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
                            return ga(t.type) && ba(), null;
                        case 3:
                            return Ao(), ca(ma), ca(pa), Go(), (r = t.stateNode).pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (Qo(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)), null;
                        case 5:
                            Do(t);
                            var o = Lo(zo.current);
                            if (n = t.type, null !== e && null != t.stateNode) Ki(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(i(166));
                                    return null
                                }
                                if (e = Lo(To.current), Qo(t)) {
                                    r = t.stateNode, n = t.type;
                                    var l = t.memoizedProps;
                                    switch (r[Jr] = t, r[Zr] = l, n) {
                                        case "dialog":
                                            Tr("cancel", r), Tr("close", r);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Tr("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (e = 0; e < Or.length; e++) Tr(Or[e], r);
                                            break;
                                        case "source":
                                            Tr("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Tr("error", r), Tr("load", r);
                                            break;
                                        case "details":
                                            Tr("toggle", r);
                                            break;
                                        case "input":
                                            ee(r, l), Tr("invalid", r);
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!l.multiple
                                            }, Tr("invalid", r);
                                            break;
                                        case "textarea":
                                            ue(r, l), Tr("invalid", r)
                                    }
                                    for (var s in Ee(n, l), e = null, l) l.hasOwnProperty(s) && (o = l[s], "children" === s ? "string" === typeof o ? r.textContent !== o && (e = ["children", o]) : "number" === typeof o && r.textContent !== "" + o && (e = ["children", "" + o]) : u.hasOwnProperty(s) && null != o && "onScroll" === s && Tr("scroll", r));
                                    switch (n) {
                                        case "input":
                                            G(r), re(r, l, !0);
                                            break;
                                        case "textarea":
                                            G(r), ce(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof l.onClick && (r.onclick = Ur)
                                    }
                                    r = e, t.updateQueue = r, null !== r && (t.flags |= 4)
                                } else {
                                    switch (s = 9 === o.nodeType ? o : o.ownerDocument, e === fe && (e = pe(n)), e === fe ? "script" === n ? ((e = s.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = s.createElement(n, {
                                            is: r.is
                                        }) : (e = s.createElement(n), "select" === n && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Jr] = t, e[Zr] = r, qi(e, t), t.stateNode = e, s = Ce(n, r), n) {
                                        case "dialog":
                                            Tr("cancel", e), Tr("close", e), o = r;
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Tr("load", e), o = r;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (o = 0; o < Or.length; o++) Tr(Or[o], e);
                                            o = r;
                                            break;
                                        case "source":
                                            Tr("error", e), o = r;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Tr("error", e), Tr("load", e), o = r;
                                            break;
                                        case "details":
                                            Tr("toggle", e), o = r;
                                            break;
                                        case "input":
                                            ee(e, r), o = Z(e, r), Tr("invalid", e);
                                            break;
                                        case "option":
                                            o = oe(e, r);
                                            break;
                                        case "select":
                                            e._wrapperState = {
                                                wasMultiple: !!r.multiple
                                            }, o = a({}, r, {
                                                value: void 0
                                            }), Tr("invalid", e);
                                            break;
                                        case "textarea":
                                            ue(e, r), o = le(e, r), Tr("invalid", e);
                                            break;
                                        default:
                                            o = r
                                    }
                                    Ee(n, o);
                                    var c = o;
                                    for (l in c)
                                        if (c.hasOwnProperty(l)) {
                                            var f = c[l];
                                            "style" === l ? xe(e, f) : "dangerouslySetInnerHTML" === l ? null != (f = f ? f.__html : void 0) && ge(e, f) : "children" === l ? "string" === typeof f ? ("textarea" !== n || "" !== f) && be(e, f) : "number" === typeof f && be(e, "" + f) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (u.hasOwnProperty(l) ? null != f && "onScroll" === l && Tr("scroll", e) : null != f && w(e, l, f, s))
                                        } switch (n) {
                                        case "input":
                                            G(e), re(e, r, !1);
                                            break;
                                        case "textarea":
                                            G(e), ce(e);
                                            break;
                                        case "option":
                                            null != r.value && e.setAttribute("value", "" + q(r.value));
                                            break;
                                        case "select":
                                            e.multiple = !!r.multiple, null != (l = r.value) ? ie(e, !!r.multiple, l, !1) : null != r.defaultValue && ie(e, !!r.multiple, r.defaultValue, !0);
                                            break;
                                        default:
                                            "function" === typeof o.onClick && (e.onclick = Ur)
                                    }
                                    Wr(n, r) && (t.flags |= 4)
                                }
                                null !== t.ref && (t.flags |= 128)
                            }
                            return null;
                        case 6:
                            if (e && null != t.stateNode) Gi(0, t, e.memoizedProps, r);
                            else {
                                if ("string" !== typeof r && null === t.stateNode) throw Error(i(166));
                                n = Lo(zo.current), Lo(To.current), Qo(t) ? (r = t.stateNode, n = t.memoizedProps, r[Jr] = t, r.nodeValue !== n && (t.flags |= 4)) : ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Jr] = t, t.stateNode = r)
                            }
                            return null;
                        case 13:
                            return ca(Io), r = t.memoizedState, 0 !== (64 & t.flags) ? (t.lanes = n, t) : (r = null !== r, n = !1, null === e ? void 0 !== t.memoizedProps.fallback && Qo(t) : n = null !== e.memoizedState, r && !n && 0 !== (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 !== (1 & Io.current) ? 0 === Il && (Il = 3) : (0 !== Il && 3 !== Il || (Il = 4), null === Ll || 0 === (134217727 & Hl) && 0 === (134217727 & Vl) || bu(Ll, Al))), (r || n) && (t.flags |= 4), null);
                        case 4:
                            return Ao(), null === e && zr(t.stateNode.containerInfo), null;
                        case 10:
                            return ro(t), null;
                        case 19:
                            if (ca(Io), null === (r = t.memoizedState)) return null;
                            if (l = 0 !== (64 & t.flags), null === (s = r.rendering))
                                if (l) il(r, !1);
                                else {
                                    if (0 !== Il || null !== e && 0 !== (64 & e.flags))
                                        for (e = t.child; null !== e;) {
                                            if (null !== (s = Fo(e))) {
                                                for (t.flags |= 64, il(r, !1), null !== (l = s.updateQueue) && (t.updateQueue = l, t.flags |= 4), null === r.lastEffect && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = n, n = t.child; null !== n;) e = r, (l = n).flags &= 2, l.nextEffect = null, l.firstEffect = null, l.lastEffect = null, null === (s = l.alternate) ? (l.childLanes = 0, l.lanes = e, l.child = null, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = s.childLanes, l.lanes = s.lanes, l.child = s.child, l.memoizedProps = s.memoizedProps, l.memoizedState = s.memoizedState, l.updateQueue = s.updateQueue, l.type = s.type, e = s.dependencies, l.dependencies = null === e ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }), n = n.sibling;
                                                return fa(Io, 1 & Io.current | 2), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== r.tail && Wa() > $l && (t.flags |= 64, l = !0, il(r, !1), t.lanes = 33554432)
                                }
                            else {
                                if (!l)
                                    if (null !== (e = Fo(s))) {
                                        if (t.flags |= 64, l = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), il(r, !0), null === r.tail && "hidden" === r.tailMode && !s.alternate && !Vo) return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null
                                    } else 2 * Wa() - r.renderingStartTime > $l && 1073741824 !== n && (t.flags |= 64, l = !0, il(r, !1), t.lanes = 33554432);
                                r.isBackwards ? (s.sibling = t.child, t.child = s) : (null !== (n = r.last) ? n.sibling = s : t.child = s, r.last = s)
                            }
                            return null !== r.tail ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = Wa(), n.sibling = null, t = Io.current, fa(Io, l ? 1 & t | 2 : 1 & t), n) : null;
                        case 23:
                        case 24:
                            return Su(), null !== e && null !== e.memoizedState !== (null !== t.memoizedState) && "unstable-defer-without-hiding" !== r.mode && (t.flags |= 4), null
                    }
                    throw Error(i(156, t.tag))
                }

                function ul(e) {
                    switch (e.tag) {
                        case 1:
                            ga(e.type) && ba();
                            var t = e.flags;
                            return 4096 & t ? (e.flags = -4097 & t | 64, e) : null;
                        case 3:
                            if (Ao(), ca(ma), ca(pa), Go(), 0 !== (64 & (t = e.flags))) throw Error(i(285));
                            return e.flags = -4097 & t | 64, e;
                        case 5:
                            return Do(e), null;
                        case 13:
                            return ca(Io), 4096 & (t = e.flags) ? (e.flags = -4097 & t | 64, e) : null;
                        case 19:
                            return ca(Io), null;
                        case 4:
                            return Ao(), null;
                        case 10:
                            return ro(e), null;
                        case 23:
                        case 24:
                            return Su(), null;
                        default:
                            return null
                    }
                }

                function sl(e, t) {
                    try {
                        var n = "",
                            r = t;
                        do {
                            n += $(r), r = r.return
                        } while (r);
                        var a = n
                    } catch (o) {
                        a = "\nError generating stack: " + o.message + "\n" + o.stack
                    }
                    return {
                        value: e,
                        source: t,
                        stack: a
                    }
                }

                function cl(e, t) {
                    try {
                        console.error(t.value)
                    } catch (n) {
                        setTimeout((function() {
                            throw n
                        }))
                    }
                }
                qi = function(e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, Ki = function(e, t, n, r) {
                    var o = e.memoizedProps;
                    if (o !== r) {
                        e = t.stateNode, Lo(To.current);
                        var i, l = null;
                        switch (n) {
                            case "input":
                                o = Z(e, o), r = Z(e, r), l = [];
                                break;
                            case "option":
                                o = oe(e, o), r = oe(e, r), l = [];
                                break;
                            case "select":
                                o = a({}, o, {
                                    value: void 0
                                }), r = a({}, r, {
                                    value: void 0
                                }), l = [];
                                break;
                            case "textarea":
                                o = le(e, o), r = le(e, r), l = [];
                                break;
                            default:
                                "function" !== typeof o.onClick && "function" === typeof r.onClick && (e.onclick = Ur)
                        }
                        for (f in Ee(n, r), n = null, o)
                            if (!r.hasOwnProperty(f) && o.hasOwnProperty(f) && null != o[f])
                                if ("style" === f) {
                                    var s = o[f];
                                    for (i in s) s.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                                } else "dangerouslySetInnerHTML" !== f && "children" !== f && "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (u.hasOwnProperty(f) ? l || (l = []) : (l = l || []).push(f, null));
                        for (f in r) {
                            var c = r[f];
                            if (s = null != o ? o[f] : void 0, r.hasOwnProperty(f) && c !== s && (null != c || null != s))
                                if ("style" === f)
                                    if (s) {
                                        for (i in s) !s.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                                        for (i in c) c.hasOwnProperty(i) && s[i] !== c[i] && (n || (n = {}), n[i] = c[i])
                                    } else n || (l || (l = []), l.push(f, n)), n = c;
                            else "dangerouslySetInnerHTML" === f ? (c = c ? c.__html : void 0, s = s ? s.__html : void 0, null != c && s !== c && (l = l || []).push(f, c)) : "children" === f ? "string" !== typeof c && "number" !== typeof c || (l = l || []).push(f, "" + c) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && (u.hasOwnProperty(f) ? (null != c && "onScroll" === f && Tr("scroll", e), l || s === c || (l = [])) : "object" === typeof c && null !== c && c.$$typeof === A ? c.toString() : (l = l || []).push(f, c))
                        }
                        n && (l = l || []).push("style", n);
                        var f = l;
                        (t.updateQueue = f) && (t.flags |= 4)
                    }
                }, Gi = function(e, t, n, r) {
                    n !== r && (t.flags |= 4)
                };
                var fl = "function" === typeof WeakMap ? WeakMap : Map;

                function dl(e, t, n) {
                    (n = co(-1, n)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = t.value;
                    return n.callback = function() {
                        Gl || (Gl = !0, Xl = r), cl(0, t)
                    }, n
                }

                function pl(e, t, n) {
                    (n = co(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" === typeof r) {
                        var a = t.value;
                        n.payload = function() {
                            return cl(0, t), r(a)
                        }
                    }
                    var o = e.stateNode;
                    return null !== o && "function" === typeof o.componentDidCatch && (n.callback = function() {
                        "function" !== typeof r && (null === Jl ? Jl = new Set([this]) : Jl.add(this), cl(0, t));
                        var e = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== e ? e : ""
                        })
                    }), n
                }
                var ml = "function" === typeof WeakSet ? WeakSet : Set;

                function vl(e) {
                    var t = e.ref;
                    if (null !== t)
                        if ("function" === typeof t) try {
                            t(null)
                        } catch (n) {
                            Uu(e, n)
                        } else t.current = null
                }

                function hl(e, t) {
                    switch (t.tag) {
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
                            if (256 & t.flags && null !== e) {
                                var n = e.memoizedProps,
                                    r = e.memoizedState;
                                t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Xa(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t
                            }
                            return;
                        case 3:
                            return void(256 & t.flags && Qr(t.stateNode.containerInfo))
                    }
                    throw Error(i(163))
                }

                function gl(e, t, n) {
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                            if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                                e = t = t.next;
                                do {
                                    if (3 === (3 & e.tag)) {
                                        var r = e.create;
                                        e.destroy = r()
                                    }
                                    e = e.next
                                } while (e !== t)
                            }
                            if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                                e = t = t.next;
                                do {
                                    var a = e;
                                    r = a.next, 0 !== (4 & (a = a.tag)) && 0 !== (1 & a) && (Du(n, e), Ru(n, e)), e = r
                                } while (e !== t)
                            }
                            return;
                        case 1:
                            return e = n.stateNode, 4 & n.flags && (null === t ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : Xa(n.type, t.memoizedProps), e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), void(null !== (t = n.updateQueue) && vo(n, t, e));
                        case 3:
                            if (null !== (t = n.updateQueue)) {
                                if (e = null, null !== n.child) switch (n.child.tag) {
                                    case 5:
                                    case 1:
                                        e = n.child.stateNode
                                }
                                vo(n, t, e)
                            }
                            return;
                        case 5:
                            return e = n.stateNode, void(null === t && 4 & n.flags && Wr(n.type, n.memoizedProps) && e.focus());
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
                            return void(null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && xt(n)))))
                    }
                    throw Error(i(163))
                }

                function bl(e, t) {
                    for (var n = e;;) {
                        if (5 === n.tag) {
                            var r = n.stateNode;
                            if (t) "function" === typeof(r = r.style).setProperty ? r.setProperty("display", "none", "important") : r.display = "none";
                            else {
                                r = n.stateNode;
                                var a = n.memoizedProps.style;
                                a = void 0 !== a && null !== a && a.hasOwnProperty("display") ? a.display : null, r.style.display = ke("display", a)
                            }
                        } else if (6 === n.tag) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
                        else if ((23 !== n.tag && 24 !== n.tag || null === n.memoizedState || n === e) && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === e) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === e) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }

                function yl(e, t) {
                    if (Ea && "function" === typeof Ea.onCommitFiberUnmount) try {
                        Ea.onCommitFiberUnmount(Sa, t)
                    } catch (o) {}
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                                var n = e = e.next;
                                do {
                                    var r = n,
                                        a = r.destroy;
                                    if (r = r.tag, void 0 !== a)
                                        if (0 !== (4 & r)) Du(t, n);
                                        else {
                                            r = t;
                                            try {
                                                a()
                                            } catch (o) {
                                                Uu(r, o)
                                            }
                                        } n = n.next
                                } while (n !== e)
                            }
                            break;
                        case 1:
                            if (vl(t), "function" === typeof(e = t.stateNode).componentWillUnmount) try {
                                e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
                            } catch (o) {
                                Uu(t, o)
                            }
                            break;
                        case 5:
                            vl(t);
                            break;
                        case 4:
                            Cl(e, t)
                    }
                }

                function wl(e) {
                    e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null
                }

                function kl(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function xl(e) {
                    e: {
                        for (var t = e.return; null !== t;) {
                            if (kl(t)) break e;
                            t = t.return
                        }
                        throw Error(i(160))
                    }
                    var n = t;
                    switch (t = n.stateNode, n.tag) {
                        case 5:
                            var r = !1;
                            break;
                        case 3:
                        case 4:
                            t = t.containerInfo, r = !0;
                            break;
                        default:
                            throw Error(i(161))
                    }
                    16 & n.flags && (be(t, ""), n.flags &= -17);e: t: for (n = e;;) {
                        for (; null === n.sibling;) {
                            if (null === n.return || kl(n.return)) {
                                n = null;
                                break e
                            }
                            n = n.return
                        }
                        for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                            if (2 & n.flags) continue t;
                            if (null === n.child || 4 === n.tag) continue t;
                            n.child.return = n, n = n.child
                        }
                        if (!(2 & n.flags)) {
                            n = n.stateNode;
                            break e
                        }
                    }
                    r ? Sl(e, n, t) : El(e, n, t)
                }

                function Sl(e, t, n) {
                    var r = e.tag,
                        a = 5 === r || 6 === r;
                    if (a) e = a ? e.stateNode : e.stateNode.instance, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Ur));
                    else if (4 !== r && null !== (e = e.child))
                        for (Sl(e, t, n), e = e.sibling; null !== e;) Sl(e, t, n), e = e.sibling
                }

                function El(e, t, n) {
                    var r = e.tag,
                        a = 5 === r || 6 === r;
                    if (a) e = a ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && null !== (e = e.child))
                        for (El(e, t, n), e = e.sibling; null !== e;) El(e, t, n), e = e.sibling
                }

                function Cl(e, t) {
                    for (var n, r, a = t, o = !1;;) {
                        if (!o) {
                            o = a.return;
                            e: for (;;) {
                                if (null === o) throw Error(i(160));
                                switch (n = o.stateNode, o.tag) {
                                    case 5:
                                        r = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        n = n.containerInfo, r = !0;
                                        break e
                                }
                                o = o.return
                            }
                            o = !0
                        }
                        if (5 === a.tag || 6 === a.tag) {
                            e: for (var l = e, u = a, s = u;;)
                                if (yl(l, s), null !== s.child && 4 !== s.tag) s.child.return = s, s = s.child;
                                else {
                                    if (s === u) break e;
                                    for (; null === s.sibling;) {
                                        if (null === s.return || s.return === u) break e;
                                        s = s.return
                                    }
                                    s.sibling.return = s.return, s = s.sibling
                                }r ? (l = n, u = a.stateNode, 8 === l.nodeType ? l.parentNode.removeChild(u) : l.removeChild(u)) : n.removeChild(a.stateNode)
                        }
                        else if (4 === a.tag) {
                            if (null !== a.child) {
                                n = a.stateNode.containerInfo, r = !0, a.child.return = a, a = a.child;
                                continue
                            }
                        } else if (yl(e, a), null !== a.child) {
                            a.child.return = a, a = a.child;
                            continue
                        }
                        if (a === t) break;
                        for (; null === a.sibling;) {
                            if (null === a.return || a.return === t) return;
                            4 === (a = a.return).tag && (o = !1)
                        }
                        a.sibling.return = a.return, a = a.sibling
                    }
                }

                function Ol(e, t) {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            var n = t.updateQueue;
                            if (null !== (n = null !== n ? n.lastEffect : null)) {
                                var r = n = n.next;
                                do {
                                    3 === (3 & r.tag) && (e = r.destroy, r.destroy = void 0, void 0 !== e && e()), r = r.next
                                } while (r !== n)
                            }
                            return;
                        case 1:
                        case 12:
                        case 17:
                            return;
                        case 5:
                            if (null != (n = t.stateNode)) {
                                r = t.memoizedProps;
                                var a = null !== e ? e.memoizedProps : r;
                                e = t.type;
                                var o = t.updateQueue;
                                if (t.updateQueue = null, null !== o) {
                                    for (n[Zr] = r, "input" === e && "radio" === r.type && null != r.name && te(n, r), Ce(e, a), t = Ce(e, r), a = 0; a < o.length; a += 2) {
                                        var l = o[a],
                                            u = o[a + 1];
                                        "style" === l ? xe(n, u) : "dangerouslySetInnerHTML" === l ? ge(n, u) : "children" === l ? be(n, u) : w(n, l, u, t)
                                    }
                                    switch (e) {
                                        case "input":
                                            ne(n, r);
                                            break;
                                        case "textarea":
                                            se(n, r);
                                            break;
                                        case "select":
                                            e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (o = r.value) ? ie(n, !!r.multiple, o, !1) : e !== !!r.multiple && (null != r.defaultValue ? ie(n, !!r.multiple, r.defaultValue, !0) : ie(n, !!r.multiple, r.multiple ? [] : "", !1))
                                    }
                                }
                            }
                            return;
                        case 6:
                            if (null === t.stateNode) throw Error(i(162));
                            return void(t.stateNode.nodeValue = t.memoizedProps);
                        case 3:
                            return void((n = t.stateNode).hydrate && (n.hydrate = !1, xt(n.containerInfo)));
                        case 13:
                            return null !== t.memoizedState && (Yl = Wa(), bl(t.child, !0)), void Nl(t);
                        case 19:
                            return void Nl(t);
                        case 23:
                        case 24:
                            return void bl(t, null !== t.memoizedState)
                    }
                    throw Error(i(163))
                }

                function Nl(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new ml), t.forEach((function(t) {
                            var r = Vu.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r))
                        }))
                    }
                }

                function jl(e, t) {
                    return null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && (null !== (t = t.memoizedState) && null === t.dehydrated)
                }
                var Pl = Math.ceil,
                    Tl = k.ReactCurrentDispatcher,
                    _l = k.ReactCurrentOwner,
                    zl = 0,
                    Ll = null,
                    Ml = null,
                    Al = 0,
                    Rl = 0,
                    Dl = sa(0),
                    Il = 0,
                    Fl = null,
                    Ul = 0,
                    Hl = 0,
                    Vl = 0,
                    Wl = 0,
                    Bl = null,
                    Yl = 0,
                    $l = 1 / 0;

                function Ql() {
                    $l = Wa() + 500
                }
                var ql, Kl = null,
                    Gl = !1,
                    Xl = null,
                    Jl = null,
                    Zl = !1,
                    eu = null,
                    tu = 90,
                    nu = [],
                    ru = [],
                    au = null,
                    ou = 0,
                    iu = null,
                    lu = -1,
                    uu = 0,
                    su = 0,
                    cu = null,
                    fu = !1;

                function du() {
                    return 0 !== (48 & zl) ? Wa() : -1 !== lu ? lu : lu = Wa()
                }

                function pu(e) {
                    if (0 === (2 & (e = e.mode))) return 1;
                    if (0 === (4 & e)) return 99 === Ba() ? 1 : 2;
                    if (0 === uu && (uu = Ul), 0 !== Ga.transition) {
                        0 !== su && (su = null !== Bl ? Bl.pendingLanes : 0), e = uu;
                        var t = 4186112 & ~su;
                        return 0 === (t &= -t) && (0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192)), t
                    }
                    return e = Ba(), 0 !== (4 & zl) && 98 === e ? e = Ut(12, uu) : e = Ut(e = function(e) {
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
                    }(e), uu), e
                }

                function mu(e, t, n) {
                    if (50 < ou) throw ou = 0, iu = null, Error(i(185));
                    if (null === (e = vu(e, t))) return null;
                    Wt(e, t, n), e === Ll && (Vl |= t, 4 === Il && bu(e, Al));
                    var r = Ba();
                    1 === t ? 0 !== (8 & zl) && 0 === (48 & zl) ? yu(e) : (hu(e, n), 0 === zl && (Ql(), qa())) : (0 === (4 & zl) || 98 !== r && 99 !== r || (null === au ? au = new Set([e]) : au.add(e)), hu(e, n)), Bl = e
                }

                function vu(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                    return 3 === n.tag ? n.stateNode : null
                }

                function hu(e, t) {
                    for (var n = e.callbackNode, r = e.suspendedLanes, a = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
                        var u = 31 - Bt(l),
                            s = 1 << u,
                            c = o[u];
                        if (-1 === c) {
                            if (0 === (s & r) || 0 !== (s & a)) {
                                c = t, Dt(s);
                                var f = Rt;
                                o[u] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1
                            }
                        } else c <= t && (e.expiredLanes |= s);
                        l &= ~s
                    }
                    if (r = It(e, e === Ll ? Al : 0), t = Rt, 0 === r) null !== n && (n !== Da && Na(n), e.callbackNode = null, e.callbackPriority = 0);
                    else {
                        if (null !== n) {
                            if (e.callbackPriority === t) return;
                            n !== Da && Na(n)
                        }
                        15 === t ? (n = yu.bind(null, e), null === Fa ? (Fa = [n], Ua = Oa(za, Ka)) : Fa.push(n), n = Da) : 14 === t ? n = Qa(99, yu.bind(null, e)) : (n = function(e) {
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
                                    throw Error(i(358, e))
                            }
                        }(t), n = Qa(n, gu.bind(null, e))), e.callbackPriority = t, e.callbackNode = n
                    }
                }

                function gu(e) {
                    if (lu = -1, su = uu = 0, 0 !== (48 & zl)) throw Error(i(327));
                    var t = e.callbackNode;
                    if (Au() && e.callbackNode !== t) return null;
                    var n = It(e, e === Ll ? Al : 0);
                    if (0 === n) return null;
                    var r = n,
                        a = zl;
                    zl |= 16;
                    var o = Ou();
                    for (Ll === e && Al === r || (Ql(), Eu(e, r));;) try {
                        Pu();
                        break
                    } catch (u) {
                        Cu(e, u)
                    }
                    if (no(), Tl.current = o, zl = a, null !== Ml ? r = 0 : (Ll = null, Al = 0, r = Il), 0 !== (Ul & Vl)) Eu(e, 0);
                    else if (0 !== r) {
                        if (2 === r && (zl |= 64, e.hydrate && (e.hydrate = !1, Qr(e.containerInfo)), 0 !== (n = Ft(e)) && (r = Nu(e, n))), 1 === r) throw t = Fl, Eu(e, 0), bu(e, n), hu(e, Wa()), t;
                        switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
                            case 0:
                            case 1:
                                throw Error(i(345));
                            case 2:
                            case 5:
                                zu(e);
                                break;
                            case 3:
                                if (bu(e, n), (62914560 & n) === n && 10 < (r = Yl + 500 - Wa())) {
                                    if (0 !== It(e, 0)) break;
                                    if (((a = e.suspendedLanes) & n) !== n) {
                                        du(), e.pingedLanes |= e.suspendedLanes & a;
                                        break
                                    }
                                    e.timeoutHandle = Yr(zu.bind(null, e), r);
                                    break
                                }
                                zu(e);
                                break;
                            case 4:
                                if (bu(e, n), (4186112 & n) === n) break;
                                for (r = e.eventTimes, a = -1; 0 < n;) {
                                    var l = 31 - Bt(n);
                                    o = 1 << l, (l = r[l]) > a && (a = l), n &= ~o
                                }
                                if (n = a, 10 < (n = (120 > (n = Wa() - n) ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Pl(n / 1960)) - n)) {
                                    e.timeoutHandle = Yr(zu.bind(null, e), n);
                                    break
                                }
                                zu(e);
                                break;
                            default:
                                throw Error(i(329))
                        }
                    }
                    return hu(e, Wa()), e.callbackNode === t ? gu.bind(null, e) : null
                }

                function bu(e, t) {
                    for (t &= ~Wl, t &= ~Vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - Bt(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r
                    }
                }

                function yu(e) {
                    if (0 !== (48 & zl)) throw Error(i(327));
                    if (Au(), e === Ll && 0 !== (e.expiredLanes & Al)) {
                        var t = Al,
                            n = Nu(e, t);
                        0 !== (Ul & Vl) && (n = Nu(e, t = It(e, t)))
                    } else n = Nu(e, t = It(e, 0));
                    if (0 !== e.tag && 2 === n && (zl |= 64, e.hydrate && (e.hydrate = !1, Qr(e.containerInfo)), 0 !== (t = Ft(e)) && (n = Nu(e, t))), 1 === n) throw n = Fl, Eu(e, 0), bu(e, t), hu(e, Wa()), n;
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, zu(e), hu(e, Wa()), null
                }

                function wu(e, t) {
                    var n = zl;
                    zl |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (zl = n) && (Ql(), qa())
                    }
                }

                function ku(e, t) {
                    var n = zl;
                    zl &= -2, zl |= 8;
                    try {
                        return e(t)
                    } finally {
                        0 === (zl = n) && (Ql(), qa())
                    }
                }

                function xu(e, t) {
                    fa(Dl, Rl), Rl |= t, Ul |= t
                }

                function Su() {
                    Rl = Dl.current, ca(Dl)
                }

                function Eu(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (-1 !== n && (e.timeoutHandle = -1, $r(n)), null !== Ml)
                        for (n = Ml.return; null !== n;) {
                            var r = n;
                            switch (r.tag) {
                                case 1:
                                    null !== (r = r.type.childContextTypes) && void 0 !== r && ba();
                                    break;
                                case 3:
                                    Ao(), ca(ma), ca(pa), Go();
                                    break;
                                case 5:
                                    Do(r);
                                    break;
                                case 4:
                                    Ao();
                                    break;
                                case 13:
                                case 19:
                                    ca(Io);
                                    break;
                                case 10:
                                    ro(r);
                                    break;
                                case 23:
                                case 24:
                                    Su()
                            }
                            n = n.return
                        }
                    Ll = e, Ml = $u(e.current, null), Al = Rl = Ul = t, Il = 0, Fl = null, Wl = Vl = Hl = 0
                }

                function Cu(e, t) {
                    for (;;) {
                        var n = Ml;
                        try {
                            if (no(), Xo.current = zi, ri) {
                                for (var r = ei.memoizedState; null !== r;) {
                                    var a = r.queue;
                                    null !== a && (a.pending = null), r = r.next
                                }
                                ri = !1
                            }
                            if (Zo = 0, ni = ti = ei = null, ai = !1, _l.current = null, null === n || null === n.return) {
                                Il = 1, Fl = t, Ml = null;
                                break
                            }
                            e: {
                                var o = e,
                                    i = n.return,
                                    l = n,
                                    u = t;
                                if (t = Al, l.flags |= 2048, l.firstEffect = l.lastEffect = null, null !== u && "object" === typeof u && "function" === typeof u.then) {
                                    var s = u;
                                    if (0 === (2 & l.mode)) {
                                        var c = l.alternate;
                                        c ? (l.updateQueue = c.updateQueue, l.memoizedState = c.memoizedState, l.lanes = c.lanes) : (l.updateQueue = null, l.memoizedState = null)
                                    }
                                    var f = 0 !== (1 & Io.current),
                                        d = i;
                                    do {
                                        var p;
                                        if (p = 13 === d.tag) {
                                            var m = d.memoizedState;
                                            if (null !== m) p = null !== m.dehydrated;
                                            else {
                                                var v = d.memoizedProps;
                                                p = void 0 !== v.fallback && (!0 !== v.unstable_avoidThisFallback || !f)
                                            }
                                        }
                                        if (p) {
                                            var h = d.updateQueue;
                                            if (null === h) {
                                                var g = new Set;
                                                g.add(s), d.updateQueue = g
                                            } else h.add(s);
                                            if (0 === (2 & d.mode)) {
                                                if (d.flags |= 64, l.flags |= 16384, l.flags &= -2981, 1 === l.tag)
                                                    if (null === l.alternate) l.tag = 17;
                                                    else {
                                                        var b = co(-1, 1);
                                                        b.tag = 2, fo(l, b)
                                                    } l.lanes |= 1;
                                                break e
                                            }
                                            u = void 0, l = t;
                                            var y = o.pingCache;
                                            if (null === y ? (y = o.pingCache = new fl, u = new Set, y.set(s, u)) : void 0 === (u = y.get(s)) && (u = new Set, y.set(s, u)), !u.has(l)) {
                                                u.add(l);
                                                var w = Hu.bind(null, o, s, l);
                                                s.then(w, w)
                                            }
                                            d.flags |= 4096, d.lanes = t;
                                            break e
                                        }
                                        d = d.return
                                    } while (null !== d);
                                    u = Error((Q(l.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")
                                }
                                5 !== Il && (Il = 2),
                                u = sl(u, l),
                                d = i;do {
                                    switch (d.tag) {
                                        case 3:
                                            o = u, d.flags |= 4096, t &= -t, d.lanes |= t, po(d, dl(0, o, t));
                                            break e;
                                        case 1:
                                            o = u;
                                            var k = d.type,
                                                x = d.stateNode;
                                            if (0 === (64 & d.flags) && ("function" === typeof k.getDerivedStateFromError || null !== x && "function" === typeof x.componentDidCatch && (null === Jl || !Jl.has(x)))) {
                                                d.flags |= 4096, t &= -t, d.lanes |= t, po(d, pl(d, o, t));
                                                break e
                                            }
                                    }
                                    d = d.return
                                } while (null !== d)
                            }
                            _u(n)
                        } catch (S) {
                            t = S, Ml === n && null !== n && (Ml = n = n.return);
                            continue
                        }
                        break
                    }
                }

                function Ou() {
                    var e = Tl.current;
                    return Tl.current = zi, null === e ? zi : e
                }

                function Nu(e, t) {
                    var n = zl;
                    zl |= 16;
                    var r = Ou();
                    for (Ll === e && Al === t || Eu(e, t);;) try {
                        ju();
                        break
                    } catch (a) {
                        Cu(e, a)
                    }
                    if (no(), zl = n, Tl.current = r, null !== Ml) throw Error(i(261));
                    return Ll = null, Al = 0, Il
                }

                function ju() {
                    for (; null !== Ml;) Tu(Ml)
                }

                function Pu() {
                    for (; null !== Ml && !ja();) Tu(Ml)
                }

                function Tu(e) {
                    var t = ql(e.alternate, e, Rl);
                    e.memoizedProps = e.pendingProps, null === t ? _u(e) : Ml = t, _l.current = null
                }

                function _u(e) {
                    var t = e;
                    do {
                        var n = t.alternate;
                        if (e = t.return, 0 === (2048 & t.flags)) {
                            if (null !== (n = ll(n, t, Rl))) return void(Ml = n);
                            if (24 !== (n = t).tag && 23 !== n.tag || null === n.memoizedState || 0 !== (1073741824 & Rl) || 0 === (4 & n.mode)) {
                                for (var r = 0, a = n.child; null !== a;) r |= a.lanes | a.childLanes, a = a.sibling;
                                n.childLanes = r
                            }
                            null !== e && 0 === (2048 & e.flags) && (null === e.firstEffect && (e.firstEffect = t.firstEffect), null !== t.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (null !== e.lastEffect ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t))
                        } else {
                            if (null !== (n = ul(t))) return n.flags &= 2047, void(Ml = n);
                            null !== e && (e.firstEffect = e.lastEffect = null, e.flags |= 2048)
                        }
                        if (null !== (t = t.sibling)) return void(Ml = t);
                        Ml = t = e
                    } while (null !== t);
                    0 === Il && (Il = 5)
                }

                function zu(e) {
                    var t = Ba();
                    return $a(99, Lu.bind(null, e, t)), null
                }

                function Lu(e, t) {
                    do {
                        Au()
                    } while (null !== eu);
                    if (0 !== (48 & zl)) throw Error(i(327));
                    var n = e.finishedWork;
                    if (null === n) return null;
                    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
                    e.callbackNode = null;
                    var r = n.lanes | n.childLanes,
                        a = r,
                        o = e.pendingLanes & ~a;
                    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= a, e.mutableReadLanes &= a, e.entangledLanes &= a, a = e.entanglements;
                    for (var l = e.eventTimes, u = e.expirationTimes; 0 < o;) {
                        var s = 31 - Bt(o),
                            c = 1 << s;
                        a[s] = 0, l[s] = -1, u[s] = -1, o &= ~c
                    }
                    if (null !== au && 0 === (24 & r) && au.has(e) && au.delete(e), e === Ll && (Ml = Ll = null, Al = 0), 1 < n.flags ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, null !== r) {
                        if (a = zl, zl |= 32, _l.current = null, Hr = Kt, gr(l = hr())) {
                            if ("selectionStart" in l) u = {
                                start: l.selectionStart,
                                end: l.selectionEnd
                            };
                            else e: if (u = (u = l.ownerDocument) && u.defaultView || window, (c = u.getSelection && u.getSelection()) && 0 !== c.rangeCount) {
                                u = c.anchorNode, o = c.anchorOffset, s = c.focusNode, c = c.focusOffset;
                                try {
                                    u.nodeType, s.nodeType
                                } catch (O) {
                                    u = null;
                                    break e
                                }
                                var f = 0,
                                    d = -1,
                                    p = -1,
                                    m = 0,
                                    v = 0,
                                    h = l,
                                    g = null;
                                t: for (;;) {
                                    for (var b; h !== u || 0 !== o && 3 !== h.nodeType || (d = f + o), h !== s || 0 !== c && 3 !== h.nodeType || (p = f + c), 3 === h.nodeType && (f += h.nodeValue.length), null !== (b = h.firstChild);) g = h, h = b;
                                    for (;;) {
                                        if (h === l) break t;
                                        if (g === u && ++m === o && (d = f), g === s && ++v === c && (p = f), null !== (b = h.nextSibling)) break;
                                        g = (h = g).parentNode
                                    }
                                    h = b
                                }
                                u = -1 === d || -1 === p ? null : {
                                    start: d,
                                    end: p
                                }
                            } else u = null;
                            u = u || {
                                start: 0,
                                end: 0
                            }
                        } else u = null;
                        Vr = {
                            focusedElem: l,
                            selectionRange: u
                        }, Kt = !1, cu = null, fu = !1, Kl = r;
                        do {
                            try {
                                Mu()
                            } catch (O) {
                                if (null === Kl) throw Error(i(330));
                                Uu(Kl, O), Kl = Kl.nextEffect
                            }
                        } while (null !== Kl);
                        cu = null, Kl = r;
                        do {
                            try {
                                for (l = e; null !== Kl;) {
                                    var y = Kl.flags;
                                    if (16 & y && be(Kl.stateNode, ""), 128 & y) {
                                        var w = Kl.alternate;
                                        if (null !== w) {
                                            var k = w.ref;
                                            null !== k && ("function" === typeof k ? k(null) : k.current = null)
                                        }
                                    }
                                    switch (1038 & y) {
                                        case 2:
                                            xl(Kl), Kl.flags &= -3;
                                            break;
                                        case 6:
                                            xl(Kl), Kl.flags &= -3, Ol(Kl.alternate, Kl);
                                            break;
                                        case 1024:
                                            Kl.flags &= -1025;
                                            break;
                                        case 1028:
                                            Kl.flags &= -1025, Ol(Kl.alternate, Kl);
                                            break;
                                        case 4:
                                            Ol(Kl.alternate, Kl);
                                            break;
                                        case 8:
                                            Cl(l, u = Kl);
                                            var x = u.alternate;
                                            wl(u), null !== x && wl(x)
                                    }
                                    Kl = Kl.nextEffect
                                }
                            } catch (O) {
                                if (null === Kl) throw Error(i(330));
                                Uu(Kl, O), Kl = Kl.nextEffect
                            }
                        } while (null !== Kl);
                        if (k = Vr, w = hr(), y = k.focusedElem, l = k.selectionRange, w !== y && y && y.ownerDocument && vr(y.ownerDocument.documentElement, y)) {
                            null !== l && gr(y) && (w = l.start, void 0 === (k = l.end) && (k = w), "selectionStart" in y ? (y.selectionStart = w, y.selectionEnd = Math.min(k, y.value.length)) : (k = (w = y.ownerDocument || document) && w.defaultView || window).getSelection && (k = k.getSelection(), u = y.textContent.length, x = Math.min(l.start, u), l = void 0 === l.end ? x : Math.min(l.end, u), !k.extend && x > l && (u = l, l = x, x = u), u = mr(y, x), o = mr(y, l), u && o && (1 !== k.rangeCount || k.anchorNode !== u.node || k.anchorOffset !== u.offset || k.focusNode !== o.node || k.focusOffset !== o.offset) && ((w = w.createRange()).setStart(u.node, u.offset), k.removeAllRanges(), x > l ? (k.addRange(w), k.extend(o.node, o.offset)) : (w.setEnd(o.node, o.offset), k.addRange(w))))), w = [];
                            for (k = y; k = k.parentNode;) 1 === k.nodeType && w.push({
                                element: k,
                                left: k.scrollLeft,
                                top: k.scrollTop
                            });
                            for ("function" === typeof y.focus && y.focus(), y = 0; y < w.length; y++)(k = w[y]).element.scrollLeft = k.left, k.element.scrollTop = k.top
                        }
                        Kt = !!Hr, Vr = Hr = null, e.current = n, Kl = r;
                        do {
                            try {
                                for (y = e; null !== Kl;) {
                                    var S = Kl.flags;
                                    if (36 & S && gl(y, Kl.alternate, Kl), 128 & S) {
                                        w = void 0;
                                        var E = Kl.ref;
                                        if (null !== E) {
                                            var C = Kl.stateNode;
                                            Kl.tag, w = C, "function" === typeof E ? E(w) : E.current = w
                                        }
                                    }
                                    Kl = Kl.nextEffect
                                }
                            } catch (O) {
                                if (null === Kl) throw Error(i(330));
                                Uu(Kl, O), Kl = Kl.nextEffect
                            }
                        } while (null !== Kl);
                        Kl = null, Ia(), zl = a
                    } else e.current = n;
                    if (Zl) Zl = !1, eu = e, tu = t;
                    else
                        for (Kl = r; null !== Kl;) t = Kl.nextEffect, Kl.nextEffect = null, 8 & Kl.flags && ((S = Kl).sibling = null, S.stateNode = null), Kl = t;
                    if (0 === (r = e.pendingLanes) && (Jl = null), 1 === r ? e === iu ? ou++ : (ou = 0, iu = e) : ou = 0, n = n.stateNode, Ea && "function" === typeof Ea.onCommitFiberRoot) try {
                        Ea.onCommitFiberRoot(Sa, n, void 0, 64 === (64 & n.current.flags))
                    } catch (O) {}
                    if (hu(e, Wa()), Gl) throw Gl = !1, e = Xl, Xl = null, e;
                    return 0 !== (8 & zl) || qa(), null
                }

                function Mu() {
                    for (; null !== Kl;) {
                        var e = Kl.alternate;
                        fu || null === cu || (0 !== (8 & Kl.flags) ? et(Kl, cu) && (fu = !0) : 13 === Kl.tag && jl(e, Kl) && et(Kl, cu) && (fu = !0));
                        var t = Kl.flags;
                        0 !== (256 & t) && hl(e, Kl), 0 === (512 & t) || Zl || (Zl = !0, Qa(97, (function() {
                            return Au(), null
                        }))), Kl = Kl.nextEffect
                    }
                }

                function Au() {
                    if (90 !== tu) {
                        var e = 97 < tu ? 97 : tu;
                        return tu = 90, $a(e, Iu)
                    }
                    return !1
                }

                function Ru(e, t) {
                    nu.push(t, e), Zl || (Zl = !0, Qa(97, (function() {
                        return Au(), null
                    })))
                }

                function Du(e, t) {
                    ru.push(t, e), Zl || (Zl = !0, Qa(97, (function() {
                        return Au(), null
                    })))
                }

                function Iu() {
                    if (null === eu) return !1;
                    var e = eu;
                    if (eu = null, 0 !== (48 & zl)) throw Error(i(331));
                    var t = zl;
                    zl |= 32;
                    var n = ru;
                    ru = [];
                    for (var r = 0; r < n.length; r += 2) {
                        var a = n[r],
                            o = n[r + 1],
                            l = a.destroy;
                        if (a.destroy = void 0, "function" === typeof l) try {
                            l()
                        } catch (s) {
                            if (null === o) throw Error(i(330));
                            Uu(o, s)
                        }
                    }
                    for (n = nu, nu = [], r = 0; r < n.length; r += 2) {
                        a = n[r], o = n[r + 1];
                        try {
                            var u = a.create;
                            a.destroy = u()
                        } catch (s) {
                            if (null === o) throw Error(i(330));
                            Uu(o, s)
                        }
                    }
                    for (u = e.current.firstEffect; null !== u;) e = u.nextEffect, u.nextEffect = null, 8 & u.flags && (u.sibling = null, u.stateNode = null), u = e;
                    return zl = t, qa(), !0
                }

                function Fu(e, t, n) {
                    fo(e, t = dl(0, t = sl(n, t), 1)), t = du(), null !== (e = vu(e, 1)) && (Wt(e, 1, t), hu(e, t))
                }

                function Uu(e, t) {
                    if (3 === e.tag) Fu(e, e, t);
                    else
                        for (var n = e.return; null !== n;) {
                            if (3 === n.tag) {
                                Fu(n, e, t);
                                break
                            }
                            if (1 === n.tag) {
                                var r = n.stateNode;
                                if ("function" === typeof n.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Jl || !Jl.has(r))) {
                                    var a = pl(n, e = sl(t, e), 1);
                                    if (fo(n, a), a = du(), null !== (n = vu(n, 1))) Wt(n, 1, a), hu(n, a);
                                    else if ("function" === typeof r.componentDidCatch && (null === Jl || !Jl.has(r))) try {
                                        r.componentDidCatch(t, e)
                                    } catch (o) {}
                                    break
                                }
                            }
                            n = n.return
                        }
                }

                function Hu(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), t = du(), e.pingedLanes |= e.suspendedLanes & n, Ll === e && (Al & n) === n && (4 === Il || 3 === Il && (62914560 & Al) === Al && 500 > Wa() - Yl ? Eu(e, 0) : Wl |= n), hu(e, t)
                }

                function Vu(e, t) {
                    var n = e.stateNode;
                    null !== n && n.delete(t), 0 === (t = 0) && (0 === (2 & (t = e.mode)) ? t = 1 : 0 === (4 & t) ? t = 99 === Ba() ? 1 : 2 : (0 === uu && (uu = Ul), 0 === (t = Ht(62914560 & ~uu)) && (t = 4194304))), n = du(), null !== (e = vu(e, t)) && (Wt(e, t, n), hu(e, n))
                }

                function Wu(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Bu(e, t, n, r) {
                    return new Wu(e, t, n, r)
                }

                function Yu(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function $u(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = Bu(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function Qu(e, t, n, r, a, o) {
                    var l = 2;
                    if (r = e, "function" === typeof e) Yu(e) && (l = 1);
                    else if ("string" === typeof e) l = 5;
                    else e: switch (e) {
                        case E:
                            return qu(n.children, a, o, t);
                        case R:
                            l = 8, a |= 16;
                            break;
                        case C:
                            l = 8, a |= 1;
                            break;
                        case O:
                            return (e = Bu(12, n, t, 8 | a)).elementType = O, e.type = O, e.lanes = o, e;
                        case T:
                            return (e = Bu(13, n, t, a)).type = T, e.elementType = T, e.lanes = o, e;
                        case _:
                            return (e = Bu(19, n, t, a)).elementType = _, e.lanes = o, e;
                        case D:
                            return Ku(n, a, o, t);
                        case I:
                            return (e = Bu(24, n, t, a)).elementType = I, e.lanes = o, e;
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case N:
                                    l = 10;
                                    break e;
                                case j:
                                    l = 9;
                                    break e;
                                case P:
                                    l = 11;
                                    break e;
                                case z:
                                    l = 14;
                                    break e;
                                case L:
                                    l = 16, r = null;
                                    break e;
                                case M:
                                    l = 22;
                                    break e
                            }
                            throw Error(i(130, null == e ? e : typeof e, ""))
                    }
                    return (t = Bu(l, n, t, a)).elementType = e, t.type = r, t.lanes = o, t
                }

                function qu(e, t, n, r) {
                    return (e = Bu(7, e, r, t)).lanes = n, e
                }

                function Ku(e, t, n, r) {
                    return (e = Bu(23, e, r, t)).elementType = D, e.lanes = n, e
                }

                function Gu(e, t, n) {
                    return (e = Bu(6, e, null, t)).lanes = n, e
                }

                function Xu(e, t, n) {
                    return (t = Bu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function Ju(e, t, n) {
                    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Vt(0), this.expirationTimes = Vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vt(0), this.mutableSourceEagerHydrationData = null
                }

                function Zu(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: S,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }

                function es(e, t, n, r) {
                    var a = t.current,
                        o = du(),
                        l = pu(a);
                    e: if (n) {
                        t: {
                            if (Ge(n = n._reactInternals) !== n || 1 !== n.tag) throw Error(i(170));
                            var u = n;do {
                                switch (u.tag) {
                                    case 3:
                                        u = u.stateNode.context;
                                        break t;
                                    case 1:
                                        if (ga(u.type)) {
                                            u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                                            break t
                                        }
                                }
                                u = u.return
                            } while (null !== u);
                            throw Error(i(171))
                        }
                        if (1 === n.tag) {
                            var s = n.type;
                            if (ga(s)) {
                                n = wa(n, s, u);
                                break e
                            }
                        }
                        n = u
                    }
                    else n = da;
                    return null === t.context ? t.context = n : t.pendingContext = n, (t = co(o, l)).payload = {
                        element: e
                    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), fo(a, t), mu(a, l, o), l
                }

                function ts(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
                }

                function ns(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function rs(e, t) {
                    ns(e, t), (e = e.alternate) && ns(e, t)
                }

                function as(e, t, n) {
                    var r = null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources || null;
                    if (n = new Ju(e, t, null != n && !0 === n.hydrate), t = Bu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0), n.current = t, t.stateNode = n, uo(t), e[ea] = n.current, zr(8 === e.nodeType ? e.parentNode : e), r)
                        for (e = 0; e < r.length; e++) {
                            var a = (t = r[e])._getVersion;
                            a = a(t._source), null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [t, a] : n.mutableSourceEagerHydrationData.push(t, a)
                        }
                    this._internalRoot = n
                }

                function os(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function is(e, t, n, r, a) {
                    var o = n._reactRootContainer;
                    if (o) {
                        var i = o._internalRoot;
                        if ("function" === typeof a) {
                            var l = a;
                            a = function() {
                                var e = ts(i);
                                l.call(e)
                            }
                        }
                        es(t, i, e, a)
                    } else {
                        if (o = n._reactRootContainer = function(e, t) {
                                if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                                    for (var n; n = e.lastChild;) e.removeChild(n);
                                return new as(e, 0, t ? {
                                    hydrate: !0
                                } : void 0)
                            }(n, r), i = o._internalRoot, "function" === typeof a) {
                            var u = a;
                            a = function() {
                                var e = ts(i);
                                u.call(e)
                            }
                        }
                        ku((function() {
                            es(t, i, e, a)
                        }))
                    }
                    return ts(i)
                }

                function ls(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!os(t)) throw Error(i(200));
                    return Zu(e, t, null, n)
                }
                ql = function(e, t, n) {
                    var r = t.lanes;
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || ma.current) Di = !0;
                        else {
                            if (0 === (n & r)) {
                                switch (Di = !1, t.tag) {
                                    case 3:
                                        Qi(t), qo();
                                        break;
                                    case 5:
                                        Ro(t);
                                        break;
                                    case 1:
                                        ga(t.type) && ka(t);
                                        break;
                                    case 4:
                                        Mo(t, t.stateNode.containerInfo);
                                        break;
                                    case 10:
                                        r = t.memoizedProps.value;
                                        var a = t.type._context;
                                        fa(Ja, a._currentValue), a._currentValue = r;
                                        break;
                                    case 13:
                                        if (null !== t.memoizedState) return 0 !== (n & t.child.childLanes) ? Ji(e, t, n) : (fa(Io, 1 & Io.current), null !== (t = ol(e, t, n)) ? t.sibling : null);
                                        fa(Io, 1 & Io.current);
                                        break;
                                    case 19:
                                        if (r = 0 !== (n & t.childLanes), 0 !== (64 & e.flags)) {
                                            if (r) return al(e, t, n);
                                            t.flags |= 64
                                        }
                                        if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), fa(Io, Io.current), r) break;
                                        return null;
                                    case 23:
                                    case 24:
                                        return t.lanes = 0, Vi(e, t, n)
                                }
                                return ol(e, t, n)
                            }
                            Di = 0 !== (16384 & e.flags)
                        }
                    else Di = !1;
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            if (r = t.type, null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, a = ha(t, pa.current), oo(t, n), a = li(null, t, r, e, a, n), t.flags |= 1, "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof) {
                                if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ga(r)) {
                                    var o = !0;
                                    ka(t)
                                } else o = !1;
                                t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, uo(t);
                                var l = r.getDerivedStateFromProps;
                                "function" === typeof l && go(t, r, l, e), a.updater = bo, t.stateNode = a, a._reactInternals = t, xo(t, r, e, n), t = $i(null, t, r, !0, o, n)
                            } else t.tag = 0, Ii(null, t, a, n), t = t.child;
                            return t;
                        case 16:
                            a = t.elementType;
                            e: {
                                switch (null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, a = (o = a._init)(a._payload), t.type = a, o = t.tag = function(e) {
                                        if ("function" === typeof e) return Yu(e) ? 1 : 0;
                                        if (void 0 !== e && null !== e) {
                                            if ((e = e.$$typeof) === P) return 11;
                                            if (e === z) return 14
                                        }
                                        return 2
                                    }(a), e = Xa(a, e), o) {
                                    case 0:
                                        t = Bi(null, t, a, e, n);
                                        break e;
                                    case 1:
                                        t = Yi(null, t, a, e, n);
                                        break e;
                                    case 11:
                                        t = Fi(null, t, a, e, n);
                                        break e;
                                    case 14:
                                        t = Ui(null, t, a, Xa(a.type, e), r, n);
                                        break e
                                }
                                throw Error(i(306, a, ""))
                            }
                            return t;
                        case 0:
                            return r = t.type, a = t.pendingProps, Bi(e, t, r, a = t.elementType === r ? a : Xa(r, a), n);
                        case 1:
                            return r = t.type, a = t.pendingProps, Yi(e, t, r, a = t.elementType === r ? a : Xa(r, a), n);
                        case 3:
                            if (Qi(t), r = t.updateQueue, null === e || null === r) throw Error(i(282));
                            if (r = t.pendingProps, a = null !== (a = t.memoizedState) ? a.element : null, so(e, t), mo(t, r, null, n), (r = t.memoizedState.element) === a) qo(), t = ol(e, t, n);
                            else {
                                if ((o = (a = t.stateNode).hydrate) && (Ho = qr(t.stateNode.containerInfo.firstChild), Uo = t, o = Vo = !0), o) {
                                    if (null != (e = a.mutableSourceEagerHydrationData))
                                        for (a = 0; a < e.length; a += 2)(o = e[a])._workInProgressVersionPrimary = e[a + 1], Ko.push(o);
                                    for (n = jo(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 1024, n = n.sibling
                                } else Ii(e, t, r, n), qo();
                                t = t.child
                            }
                            return t;
                        case 5:
                            return Ro(t), null === e && Yo(t), r = t.type, a = t.pendingProps, o = null !== e ? e.memoizedProps : null, l = a.children, Br(r, a) ? l = null : null !== o && Br(r, o) && (t.flags |= 16), Wi(e, t), Ii(e, t, l, n), t.child;
                        case 6:
                            return null === e && Yo(t), null;
                        case 13:
                            return Ji(e, t, n);
                        case 4:
                            return Mo(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = No(t, null, r, n) : Ii(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, a = t.pendingProps, Fi(e, t, r, a = t.elementType === r ? a : Xa(r, a), n);
                        case 7:
                            return Ii(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return Ii(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                r = t.type._context,
                                a = t.pendingProps,
                                l = t.memoizedProps,
                                o = a.value;
                                var u = t.type._context;
                                if (fa(Ja, u._currentValue), u._currentValue = o, null !== l)
                                    if (u = l.value, 0 === (o = cr(u, o) ? 0 : 0 | ("function" === typeof r._calculateChangedBits ? r._calculateChangedBits(u, o) : 1073741823))) {
                                        if (l.children === a.children && !ma.current) {
                                            t = ol(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (u = t.child) && (u.return = t); null !== u;) {
                                            var s = u.dependencies;
                                            if (null !== s) {
                                                l = u.child;
                                                for (var c = s.firstContext; null !== c;) {
                                                    if (c.context === r && 0 !== (c.observedBits & o)) {
                                                        1 === u.tag && ((c = co(-1, n & -n)).tag = 2, fo(u, c)), u.lanes |= n, null !== (c = u.alternate) && (c.lanes |= n), ao(u.return, n), s.lanes |= n;
                                                        break
                                                    }
                                                    c = c.next
                                                }
                                            } else l = 10 === u.tag && u.type === t.type ? null : u.child;
                                            if (null !== l) l.return = u;
                                            else
                                                for (l = u; null !== l;) {
                                                    if (l === t) {
                                                        l = null;
                                                        break
                                                    }
                                                    if (null !== (u = l.sibling)) {
                                                        u.return = l.return, l = u;
                                                        break
                                                    }
                                                    l = l.return
                                                }
                                            u = l
                                        }
                                Ii(e, t, a.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return a = t.type, r = (o = t.pendingProps).children, oo(t, n), r = r(a = io(a, o.unstable_observedBits)), t.flags |= 1, Ii(e, t, r, n), t.child;
                        case 14:
                            return o = Xa(a = t.type, t.pendingProps), Ui(e, t, a, o = Xa(a.type, o), r, n);
                        case 15:
                            return Hi(e, t, t.type, t.pendingProps, r, n);
                        case 17:
                            return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Xa(r, a), null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, ga(r) ? (e = !0, ka(t)) : e = !1, oo(t, n), wo(t, r, a), xo(t, r, a, n), $i(null, t, r, !0, e, n);
                        case 19:
                            return al(e, t, n);
                        case 23:
                        case 24:
                            return Vi(e, t, n)
                    }
                    throw Error(i(156, t.tag))
                }, as.prototype.render = function(e) {
                    es(e, this._internalRoot, null, null)
                }, as.prototype.unmount = function() {
                    var e = this._internalRoot,
                        t = e.containerInfo;
                    es(null, e, null, (function() {
                        t[ea] = null
                    }))
                }, tt = function(e) {
                    13 === e.tag && (mu(e, 4, du()), rs(e, 4))
                }, nt = function(e) {
                    13 === e.tag && (mu(e, 67108864, du()), rs(e, 67108864))
                }, rt = function(e) {
                    if (13 === e.tag) {
                        var t = du(),
                            n = pu(e);
                        mu(e, n, t), rs(e, n)
                    }
                }, at = function(e, t) {
                    return t()
                }, Ne = function(e, t, n) {
                    switch (t) {
                        case "input":
                            if (ne(e, n), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var a = oa(r);
                                        if (!a) throw Error(i(90));
                                        X(r), ne(r, a)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            se(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && ie(e, !!n.multiple, t, !1)
                    }
                }, Le = wu, Me = function(e, t, n, r, a) {
                    var o = zl;
                    zl |= 4;
                    try {
                        return $a(98, e.bind(null, t, n, r, a))
                    } finally {
                        0 === (zl = o) && (Ql(), qa())
                    }
                }, Ae = function() {
                    0 === (49 & zl) && (function() {
                        if (null !== au) {
                            var e = au;
                            au = null, e.forEach((function(e) {
                                e.expiredLanes |= 24 & e.pendingLanes, hu(e, Wa())
                            }))
                        }
                        qa()
                    }(), Au())
                }, Re = function(e, t) {
                    var n = zl;
                    zl |= 2;
                    try {
                        return e(t)
                    } finally {
                        0 === (zl = n) && (Ql(), qa())
                    }
                };
                var us = {
                        Events: [ra, aa, oa, _e, ze, Au, {
                            current: !1
                        }]
                    },
                    ss = {
                        findFiberByHostInstance: na,
                        bundleType: 0,
                        version: "17.0.2",
                        rendererPackageName: "react-dom"
                    },
                    cs = {
                        bundleType: ss.bundleType,
                        version: ss.version,
                        rendererPackageName: ss.rendererPackageName,
                        rendererConfig: ss.rendererConfig,
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
                        findFiberByHostInstance: ss.findFiberByHostInstance || function() {
                            return null
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null
                    };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!fs.isDisabled && fs.supportsFiber) try {
                        Sa = fs.inject(cs), Ea = fs
                    } catch (he) {}
                }
                t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = us, t.createPortal = ls, t.findDOMNode = function(e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" === typeof e.render) throw Error(i(188));
                        throw Error(i(268, Object.keys(e)))
                    }
                    return e = null === (e = Ze(t)) ? null : e.stateNode
                }, t.flushSync = function(e, t) {
                    var n = zl;
                    if (0 !== (48 & n)) return e(t);
                    zl |= 1;
                    try {
                        if (e) return $a(99, e.bind(null, t))
                    } finally {
                        zl = n, qa()
                    }
                }, t.hydrate = function(e, t, n) {
                    if (!os(t)) throw Error(i(200));
                    return is(null, e, t, !0, n)
                }, t.render = function(e, t, n) {
                    if (!os(t)) throw Error(i(200));
                    return is(null, e, t, !1, n)
                }, t.unmountComponentAtNode = function(e) {
                    if (!os(e)) throw Error(i(40));
                    return !!e._reactRootContainer && (ku((function() {
                        is(null, null, e, !1, (function() {
                            e._reactRootContainer = null, e[ea] = null
                        }))
                    })), !0)
                }, t.unstable_batchedUpdates = wu, t.unstable_createPortal = function(e, t) {
                    return ls(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
                }, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                    if (!os(n)) throw Error(i(200));
                    if (null == e || void 0 === e._reactInternals) throw Error(i(38));
                    return is(e, t, n, !1, r)
                }, t.version = "17.0.2"
            },
            164: function(e, t, n) {
                "use strict";
                ! function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
                }(), e.exports = n(463)
            },
            374: function(e, t, n) {
                "use strict";
                n(725);
                var r = n(791),
                    a = 60103;
                if (60107, "function" === typeof Symbol && Symbol.for) {
                    var o = Symbol.for;
                    a = o("react.element"), o("react.fragment")
                }
                var i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    l = Object.prototype.hasOwnProperty,
                    u = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function s(e, t, n) {
                    var r, o = {},
                        s = null,
                        c = null;
                    for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t) l.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
                    if (e && e.defaultProps)
                        for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
                    return {
                        $$typeof: a,
                        type: e,
                        key: s,
                        ref: c,
                        props: o,
                        _owner: i.current
                    }
                }
                t.jsx = s, t.jsxs = s
            },
            117: function(e, t, n) {
                "use strict";
                var r = n(725),
                    a = 60103,
                    o = 60106;
                t.Fragment = 60107, t.StrictMode = 60108, t.Profiler = 60114;
                var i = 60109,
                    l = 60110,
                    u = 60112;
                t.Suspense = 60113;
                var s = 60115,
                    c = 60116;
                if ("function" === typeof Symbol && Symbol.for) {
                    var f = Symbol.for;
                    a = f("react.element"), o = f("react.portal"), t.Fragment = f("react.fragment"), t.StrictMode = f("react.strict_mode"), t.Profiler = f("react.profiler"), i = f("react.provider"), l = f("react.context"), u = f("react.forward_ref"), t.Suspense = f("react.suspense"), s = f("react.memo"), c = f("react.lazy")
                }
                var d = "function" === typeof Symbol && Symbol.iterator;

                function p(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var m = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    v = {};

                function h(e, t, n) {
                    this.props = e, this.context = t, this.refs = v, this.updater = n || m
                }

                function g() {}

                function b(e, t, n) {
                    this.props = e, this.context = t, this.refs = v, this.updater = n || m
                }
                h.prototype.isReactComponent = {}, h.prototype.setState = function(e, t) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error(p(85));
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, h.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, g.prototype = h.prototype;
                var y = b.prototype = new g;
                y.constructor = b, r(y, h.prototype), y.isPureReactComponent = !0;
                var w = {
                        current: null
                    },
                    k = Object.prototype.hasOwnProperty,
                    x = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function S(e, t, n) {
                    var r, o = {},
                        i = null,
                        l = null;
                    if (null != t)
                        for (r in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t) k.call(t, r) && !x.hasOwnProperty(r) && (o[r] = t[r]);
                    var u = arguments.length - 2;
                    if (1 === u) o.children = n;
                    else if (1 < u) {
                        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
                        o.children = s
                    }
                    if (e && e.defaultProps)
                        for (r in u = e.defaultProps) void 0 === o[r] && (o[r] = u[r]);
                    return {
                        $$typeof: a,
                        type: e,
                        key: i,
                        ref: l,
                        props: o,
                        _owner: w.current
                    }
                }

                function E(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === a
                }
                var C = /\/+/g;

                function O(e, t) {
                    return "object" === typeof e && null !== e && null != e.key ? function(e) {
                        var t = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + e.replace(/[=:]/g, (function(e) {
                            return t[e]
                        }))
                    }("" + e.key) : t.toString(36)
                }

                function N(e, t, n, r, i) {
                    var l = typeof e;
                    "undefined" !== l && "boolean" !== l || (e = null);
                    var u = !1;
                    if (null === e) u = !0;
                    else switch (l) {
                        case "string":
                        case "number":
                            u = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case a:
                                case o:
                                    u = !0
                            }
                    }
                    if (u) return i = i(u = e), e = "" === r ? "." + O(u, 0) : r, Array.isArray(i) ? (n = "", null != e && (n = e.replace(C, "$&/") + "/"), N(i, t, n, "", (function(e) {
                        return e
                    }))) : null != i && (E(i) && (i = function(e, t) {
                        return {
                            $$typeof: a,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(i, n + (!i.key || u && u.key === i.key ? "" : ("" + i.key).replace(C, "$&/") + "/") + e)), t.push(i)), 1;
                    if (u = 0, r = "" === r ? "." : r + ":", Array.isArray(e))
                        for (var s = 0; s < e.length; s++) {
                            var c = r + O(l = e[s], s);
                            u += N(l, t, n, c, i)
                        } else if (c = function(e) {
                                return null === e || "object" !== typeof e ? null : "function" === typeof(e = d && e[d] || e["@@iterator"]) ? e : null
                            }(e), "function" === typeof c)
                            for (e = c.call(e), s = 0; !(l = e.next()).done;) u += N(l = l.value, t, n, c = r + O(l, s++), i);
                        else if ("object" === l) throw t = "" + e, Error(p(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
                    return u
                }

                function j(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        a = 0;
                    return N(e, r, "", "", (function(e) {
                        return t.call(n, e, a++)
                    })), r
                }

                function P(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        t = t(), e._status = 0, e._result = t, t.then((function(t) {
                            0 === e._status && (t = t.default, e._status = 1, e._result = t)
                        }), (function(t) {
                            0 === e._status && (e._status = 2, e._result = t)
                        }))
                    }
                    if (1 === e._status) return e._result;
                    throw e._result
                }
                var T = {
                    current: null
                };

                function _() {
                    var e = T.current;
                    if (null === e) throw Error(p(321));
                    return e
                }
                var z = {
                    ReactCurrentDispatcher: T,
                    ReactCurrentBatchConfig: {
                        transition: 0
                    },
                    ReactCurrentOwner: w,
                    IsSomeRendererActing: {
                        current: !1
                    },
                    assign: r
                };
                t.Children = {
                    map: j,
                    forEach: function(e, t, n) {
                        j(e, (function() {
                            t.apply(this, arguments)
                        }), n)
                    },
                    count: function(e) {
                        var t = 0;
                        return j(e, (function() {
                            t++
                        })), t
                    },
                    toArray: function(e) {
                        return j(e, (function(e) {
                            return e
                        })) || []
                    },
                    only: function(e) {
                        if (!E(e)) throw Error(p(143));
                        return e
                    }
                }, t.Component = h, t.PureComponent = b, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z, t.cloneElement = function(e, t, n) {
                    if (null === e || void 0 === e) throw Error(p(267, e));
                    var o = r({}, e.props),
                        i = e.key,
                        l = e.ref,
                        u = e._owner;
                    if (null != t) {
                        if (void 0 !== t.ref && (l = t.ref, u = w.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
                        for (c in t) k.call(t, c) && !x.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c])
                    }
                    var c = arguments.length - 2;
                    if (1 === c) o.children = n;
                    else if (1 < c) {
                        s = Array(c);
                        for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
                        o.children = s
                    }
                    return {
                        $$typeof: a,
                        type: e.type,
                        key: i,
                        ref: l,
                        props: o,
                        _owner: u
                    }
                }, t.createContext = function(e, t) {
                    return void 0 === t && (t = null), (e = {
                        $$typeof: l,
                        _calculateChangedBits: t,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null
                    }).Provider = {
                        $$typeof: i,
                        _context: e
                    }, e.Consumer = e
                }, t.createElement = S, t.createFactory = function(e) {
                    var t = S.bind(null, e);
                    return t.type = e, t
                }, t.createRef = function() {
                    return {
                        current: null
                    }
                }, t.forwardRef = function(e) {
                    return {
                        $$typeof: u,
                        render: e
                    }
                }, t.isValidElement = E, t.lazy = function(e) {
                    return {
                        $$typeof: c,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: P
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: s,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.useCallback = function(e, t) {
                    return _().useCallback(e, t)
                }, t.useContext = function(e, t) {
                    return _().useContext(e, t)
                }, t.useDebugValue = function() {}, t.useEffect = function(e, t) {
                    return _().useEffect(e, t)
                }, t.useImperativeHandle = function(e, t, n) {
                    return _().useImperativeHandle(e, t, n)
                }, t.useLayoutEffect = function(e, t) {
                    return _().useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return _().useMemo(e, t)
                }, t.useReducer = function(e, t, n) {
                    return _().useReducer(e, t, n)
                }, t.useRef = function(e) {
                    return _().useRef(e)
                }, t.useState = function(e) {
                    return _().useState(e)
                }, t.version = "17.0.2"
            },
            791: function(e, t, n) {
                "use strict";
                e.exports = n(117)
            },
            184: function(e, t, n) {
                "use strict";
                e.exports = n(374)
            },
            813: function(e, t) {
                "use strict";
                var n, r, a, o;
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var i = performance;
                    t.unstable_now = function() {
                        return i.now()
                    }
                } else {
                    var l = Date,
                        u = l.now();
                    t.unstable_now = function() {
                        return l.now() - u
                    }
                }
                if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
                    var s = null,
                        c = null,
                        f = function e() {
                            if (null !== s) try {
                                var n = t.unstable_now();
                                s(!0, n), s = null
                            } catch (r) {
                                throw setTimeout(e, 0), r
                            }
                        };
                    n = function(e) {
                        null !== s ? setTimeout(n, 0, e) : (s = e, setTimeout(f, 0))
                    }, r = function(e, t) {
                        c = setTimeout(e, t)
                    }, a = function() {
                        clearTimeout(c)
                    }, t.unstable_shouldYield = function() {
                        return !1
                    }, o = t.unstable_forceFrameRate = function() {}
                } else {
                    var d = window.setTimeout,
                        p = window.clearTimeout;
                    if ("undefined" !== typeof console) {
                        var m = window.cancelAnimationFrame;
                        "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), "function" !== typeof m && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
                    }
                    var v = !1,
                        h = null,
                        g = -1,
                        b = 5,
                        y = 0;
                    t.unstable_shouldYield = function() {
                        return t.unstable_now() >= y
                    }, o = function() {}, t.unstable_forceFrameRate = function(e) {
                        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < e ? Math.floor(1e3 / e) : 5
                    };
                    var w = new MessageChannel,
                        k = w.port2;
                    w.port1.onmessage = function() {
                        if (null !== h) {
                            var e = t.unstable_now();
                            y = e + b;
                            try {
                                h(!0, e) ? k.postMessage(null) : (v = !1, h = null)
                            } catch (n) {
                                throw k.postMessage(null), n
                            }
                        } else v = !1
                    }, n = function(e) {
                        h = e, v || (v = !0, k.postMessage(null))
                    }, r = function(e, n) {
                        g = d((function() {
                            e(t.unstable_now())
                        }), n)
                    }, a = function() {
                        p(g), g = -1
                    }
                }

                function x(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (;;) {
                        var r = n - 1 >>> 1,
                            a = e[r];
                        if (!(void 0 !== a && 0 < C(a, t))) break e;
                        e[r] = t, e[n] = a, n = r
                    }
                }

                function S(e) {
                    return void 0 === (e = e[0]) ? null : e
                }

                function E(e) {
                    var t = e[0];
                    if (void 0 !== t) {
                        var n = e.pop();
                        if (n !== t) {
                            e[0] = n;
                            e: for (var r = 0, a = e.length; r < a;) {
                                var o = 2 * (r + 1) - 1,
                                    i = e[o],
                                    l = o + 1,
                                    u = e[l];
                                if (void 0 !== i && 0 > C(i, n)) void 0 !== u && 0 > C(u, i) ? (e[r] = u, e[l] = n, r = l) : (e[r] = i, e[o] = n, r = o);
                                else {
                                    if (!(void 0 !== u && 0 > C(u, n))) break e;
                                    e[r] = u, e[l] = n, r = l
                                }
                            }
                        }
                        return t
                    }
                    return null
                }

                function C(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                var O = [],
                    N = [],
                    j = 1,
                    P = null,
                    T = 3,
                    _ = !1,
                    z = !1,
                    L = !1;

                function M(e) {
                    for (var t = S(N); null !== t;) {
                        if (null === t.callback) E(N);
                        else {
                            if (!(t.startTime <= e)) break;
                            E(N), t.sortIndex = t.expirationTime, x(O, t)
                        }
                        t = S(N)
                    }
                }

                function A(e) {
                    if (L = !1, M(e), !z)
                        if (null !== S(O)) z = !0, n(R);
                        else {
                            var t = S(N);
                            null !== t && r(A, t.startTime - e)
                        }
                }

                function R(e, n) {
                    z = !1, L && (L = !1, a()), _ = !0;
                    var o = T;
                    try {
                        for (M(n), P = S(O); null !== P && (!(P.expirationTime > n) || e && !t.unstable_shouldYield());) {
                            var i = P.callback;
                            if ("function" === typeof i) {
                                P.callback = null, T = P.priorityLevel;
                                var l = i(P.expirationTime <= n);
                                n = t.unstable_now(), "function" === typeof l ? P.callback = l : P === S(O) && E(O), M(n)
                            } else E(O);
                            P = S(O)
                        }
                        if (null !== P) var u = !0;
                        else {
                            var s = S(N);
                            null !== s && r(A, s.startTime - n), u = !1
                        }
                        return u
                    } finally {
                        P = null, T = o, _ = !1
                    }
                }
                var D = o;
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, t.unstable_continueExecution = function() {
                    z || _ || (z = !0, n(R))
                }, t.unstable_getCurrentPriorityLevel = function() {
                    return T
                }, t.unstable_getFirstCallbackNode = function() {
                    return S(O)
                }, t.unstable_next = function(e) {
                    switch (T) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = T
                    }
                    var n = T;
                    T = t;
                    try {
                        return e()
                    } finally {
                        T = n
                    }
                }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = D, t.unstable_runWithPriority = function(e, t) {
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
                    var n = T;
                    T = e;
                    try {
                        return t()
                    } finally {
                        T = n
                    }
                }, t.unstable_scheduleCallback = function(e, o, i) {
                    var l = t.unstable_now();
                    switch ("object" === typeof i && null !== i ? i = "number" === typeof(i = i.delay) && 0 < i ? l + i : l : i = l, e) {
                        case 1:
                            var u = -1;
                            break;
                        case 2:
                            u = 250;
                            break;
                        case 5:
                            u = 1073741823;
                            break;
                        case 4:
                            u = 1e4;
                            break;
                        default:
                            u = 5e3
                    }
                    return e = {
                        id: j++,
                        callback: o,
                        priorityLevel: e,
                        startTime: i,
                        expirationTime: u = i + u,
                        sortIndex: -1
                    }, i > l ? (e.sortIndex = i, x(N, e), null === S(O) && e === S(N) && (L ? a() : L = !0, r(A, i - l))) : (e.sortIndex = u, x(O, e), z || _ || (z = !0, n(R))), e
                }, t.unstable_wrapCallback = function(e) {
                    var t = T;
                    return function() {
                        var n = T;
                        T = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            T = n
                        }
                    }
                }
            },
            296: function(e, t, n) {
                "use strict";
                e.exports = n(813)
            },
            390: function(e, t, n) {
                "use strict";
                e.exports = "."+ n.p + "wisTitle.png"
            }
        },
        t = {};

    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var o = t[r] = {
            exports: {}
        };
        return e[r](o, o.exports, n), o.exports
    }
    n.m = e, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        }, n.d = function(e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.f = {}, n.e = function(e) {
            return Promise.all(Object.keys(n.f).reduce((function(t, r) {
                return n.f[r](e, t), t
            }), []))
        }, n.u = function(e) {
            return "static/js/" + e + ".b3f9d252.chunk.js"
        }, n.miniCssF = function(e) {}, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            var e = {},
                t = "game:";
            n.l = function(r, a, o, i) {
                if (e[r]) e[r].push(a);
                else {
                    var l, u;
                    if (void 0 !== o)
                        for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                            var f = s[c];
                            if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == t + o) {
                                l = f;
                                break
                            }
                        }
                    l || (u = !0, (l = document.createElement("script")).charset = "utf-8", l.timeout = 120, n.nc && l.setAttribute("nonce", n.nc), l.setAttribute("data-webpack", t + o), l.src = r), e[r] = [a];
                    var d = function(t, n) {
                            l.onerror = l.onload = null, clearTimeout(p);
                            var a = e[r];
                            if (delete e[r], l.parentNode && l.parentNode.removeChild(l), a && a.forEach((function(e) {
                                    return e(n)
                                })), t) return t(n)
                        },
                        p = setTimeout(d.bind(null, void 0, {
                            type: "timeout",
                            target: l
                        }), 12e4);
                    l.onerror = d.bind(null, l.onerror), l.onload = d.bind(null, l.onload), u && document.head.appendChild(l)
                }
            }
        }(), n.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.p = "/",
        function() {
            var e = {
                179: 0
            };
            n.f.j = function(t, r) {
                var a = n.o(e, t) ? e[t] : void 0;
                if (0 !== a)
                    if (a) r.push(a[2]);
                    else {
                        var o = new Promise((function(n, r) {
                            a = e[t] = [n, r]
                        }));
                        r.push(a[2] = o);
                        var i = n.p + n.u(t),
                            l = new Error;
                        n.l(i, (function(r) {
                            if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                                var o = r && ("load" === r.type ? "missing" : r.type),
                                    i = r && r.target && r.target.src;
                                l.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")", l.name = "ChunkLoadError", l.type = o, l.request = i, a[1](l)
                            }
                        }), "chunk-" + t, t)
                    }
            };
            var t = function(t, r) {
                    var a, o, i = r[0],
                        l = r[1],
                        u = r[2],
                        s = 0;
                    if (i.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (a in l) n.o(l, a) && (n.m[a] = l[a]);
                        if (u) u(n)
                    }
                    for (t && t(r); s < i.length; s++) o = i[s], n.o(e, o) && e[o] && e[o][0](), e[i[s]] = 0
                },
                r = self.webpackChunkgame = self.webpackChunkgame || [];
            r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        }(),
        function() {
            "use strict";
            var e = n(791),
                t = n(164);

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                if (e) {
                    if ("string" === typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                }
            }

            function o(e) {
                return function(e) {
                    if (Array.isArray(e)) return r(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || a(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o = [],
                            i = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0);
                        } catch (u) {
                            l = !0, a = u
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || a(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var l = function(t) {
                return e.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    "aria-hidden": "true"
                }, t), e.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                }))
            };
            var u = function(t) {
                return e.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    "aria-hidden": "true"
                }, t), e.createElement("path", {
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
            var s = function(t) {
                return e.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    "aria-hidden": "true"
                }, t), e.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                }))
            };
            var c = function(t) {
                return e.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    "aria-hidden": "true"
                }, t), e.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                }))
            };
            var f, d;

            function p() {
                return p = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, p.apply(this, arguments)
            }

            function m(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (e) {
                                if ("string" === typeof e) return v(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(e, t) : void 0
                            }
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0;
                        return function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                return (n = e[Symbol.iterator]()).next.bind(n)
            }

            function g(e, t) {
                if (e in t) {
                    for (var n = t[e], r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) a[o - 2] = arguments[o];
                    return "function" === typeof n ? n.apply(void 0, a) : n
                }
                var i = new Error('Tried to handle "' + e + '" but there is no handler defined. Only defined handlers are: ' + Object.keys(t).map((function(e) {
                    return '"' + e + '"'
                })).join(", ") + ".");
                throw Error.captureStackTrace && Error.captureStackTrace(i, g), i
            }

            function b(e) {
                var t = e.props,
                    n = e.slot,
                    r = e.defaultTag,
                    a = e.features,
                    o = e.visible,
                    i = void 0 === o || o,
                    l = e.name;
                if (i) return y(t, n, r, l);
                var u = null != a ? a : f.None;
                if (u & f.Static) {
                    var s = t.static,
                        c = void 0 !== s && s,
                        v = m(t, ["static"]);
                    if (c) return y(v, n, r, l)
                }
                if (u & f.RenderStrategy) {
                    var h, b = t.unmount,
                        w = void 0 === b || b,
                        k = m(t, ["unmount"]);
                    return g(w ? d.Unmount : d.Hidden, ((h = {})[d.Unmount] = function() {
                        return null
                    }, h[d.Hidden] = function() {
                        return y(p({}, k, {
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }), n, r, l)
                    }, h))
                }
                return y(t, n, r, l)
            }

            function y(t, n, r, a) {
                var o;
                void 0 === n && (n = {});
                var i = k(t, ["unmount", "static"]),
                    l = i.as,
                    u = void 0 === l ? r : l,
                    s = i.children,
                    c = i.refName,
                    f = void 0 === c ? "ref" : c,
                    d = m(i, ["as", "children", "refName"]),
                    p = void 0 !== t.ref ? ((o = {})[f] = t.ref, o) : {},
                    v = "function" === typeof s ? s(n) : s;
                if (d.className && "function" === typeof d.className && (d.className = d.className(n)), u === e.Fragment && Object.keys(d).length > 0) {
                    if (!(0, e.isValidElement)(v) || Array.isArray(v) && v.length > 1) throw new Error(['Passing props on "Fragment"!', "", "The current component <" + a + ' /> is rendering a "Fragment".', "However we need to passthrough the following props:", Object.keys(d).map((function(e) {
                        return "  - " + e
                    })).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((function(e) {
                        return "  - " + e
                    })).join("\n")].join("\n"));
                    return (0, e.cloneElement)(v, Object.assign({}, function(e, t, n) {
                        for (var r, a = Object.assign({}, e), o = function() {
                                var n, o = r.value;
                                void 0 !== e[o] && void 0 !== t[o] && Object.assign(a, ((n = {})[o] = function(n) {
                                    n.defaultPrevented || e[o](n), n.defaultPrevented || t[o](n)
                                }, n))
                            }, i = h(n); !(r = i()).done;) o();
                        return a
                    }(function(e) {
                        var t = Object.assign({}, e);
                        for (var n in t) void 0 === t[n] && delete t[n];
                        return t
                    }(k(d, ["ref"])), v.props, ["onClick"]), p))
                }
                return (0, e.createElement)(u, Object.assign({}, k(d, ["ref"]), u !== e.Fragment && p), v)
            }

            function w(t) {
                var n;
                return Object.assign((0, e.forwardRef)(t), {
                    displayName: null != (n = t.displayName) ? n : t.name
                })
            }

            function k(e, t) {
                void 0 === t && (t = []);
                for (var n, r = Object.assign({}, e), a = h(t); !(n = a()).done;) {
                    var o = n.value;
                    o in r && delete r[o]
                }
                return r
            }! function(e) {
                e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static"
            }(f || (f = {})),
            function(e) {
                e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden"
            }(d || (d = {}));
            var x = "undefined" !== typeof window ? e.useLayoutEffect : e.useEffect,
                S = {
                    serverHandoffComplete: !1
                };

            function E() {
                var t = (0, e.useState)(S.serverHandoffComplete),
                    n = t[0],
                    r = t[1];
                return (0, e.useEffect)((function() {
                    !0 !== n && r(!0)
                }), [n]), (0, e.useEffect)((function() {
                    !1 === S.serverHandoffComplete && (S.serverHandoffComplete = !0)
                }), []), n
            }
            var C = 0;

            function O() {
                return ++C
            }

            function N() {
                var t = E(),
                    n = (0, e.useState)(t ? O : null),
                    r = n[0],
                    a = n[1];
                return x((function() {
                    null === r && a(O())
                }), [r]), null != r ? "" + r : void 0
            }

            function j() {
                var t = (0, e.useRef)(!1);
                return (0, e.useEffect)((function() {
                    return t.current = !0,
                        function() {
                            t.current = !1
                        }
                }), []), t
            }
            var P, T, _ = (0, e.createContext)(null);

            function z() {
                return (0, e.useContext)(_)
            }

            function L(t) {
                var n = t.value,
                    r = t.children;
                return e.createElement(_.Provider, {
                    value: n
                }, r)
            }

            function M() {
                var e = [],
                    t = {
                        requestAnimationFrame: function(e) {
                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function() {
                                return e.toString()
                            }, t
                        }((function() {
                            var e = requestAnimationFrame.apply(void 0, arguments);
                            t.add((function() {
                                return cancelAnimationFrame(e)
                            }))
                        })),
                        nextFrame: function() {
                            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                            t.requestAnimationFrame((function() {
                                t.requestAnimationFrame.apply(t, n)
                            }))
                        },
                        setTimeout: function(e) {
                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function() {
                                return e.toString()
                            }, t
                        }((function() {
                            var e = setTimeout.apply(void 0, arguments);
                            t.add((function() {
                                return clearTimeout(e)
                            }))
                        })),
                        add: function(t) {
                            e.push(t)
                        },
                        dispose: function() {
                            for (var t, n = h(e.splice(0)); !(t = n()).done;) {
                                var r = t.value;
                                r()
                            }
                        }
                    };
                return t
            }

            function A(e) {
                for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                e && r.length > 0 && (t = e.classList).add.apply(t, r)
            }

            function R(e) {
                for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                e && r.length > 0 && (t = e.classList).remove.apply(t, r)
            }

            function D(e, t, n, r, a, o) {
                var i = M(),
                    l = void 0 !== o ? function(e) {
                        var t = {
                            called: !1
                        };
                        return function() {
                            if (!t.called) return t.called = !0, e.apply(void 0, arguments)
                        }
                    }(o) : function() {};
                return R.apply(void 0, [e].concat(a)), A.apply(void 0, [e].concat(t, n)), i.nextFrame((function() {
                    R.apply(void 0, [e].concat(n)), A.apply(void 0, [e].concat(r)), i.add(function(e, t) {
                        var n = M();
                        if (!e) return n.dispose;
                        var r = getComputedStyle(e),
                            a = [r.transitionDuration, r.transitionDelay].map((function(e) {
                                var t = e.split(",").filter(Boolean).map((function(e) {
                                    return e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e)
                                })).sort((function(e, t) {
                                    return t - e
                                }))[0];
                                return void 0 === t ? 0 : t
                            })),
                            o = a[0],
                            i = a[1];
                        return 0 !== o ? n.setTimeout((function() {
                            t(T.Finished)
                        }), o + i) : t(T.Finished), n.add((function() {
                            return t(T.Cancelled)
                        })), n.dispose
                    }(e, (function(n) {
                        return R.apply(void 0, [e].concat(r, t)), A.apply(void 0, [e].concat(a)), l(n)
                    })))
                })), i.add((function() {
                    return R.apply(void 0, [e].concat(t, n, r, a))
                })), i.add((function() {
                    return l(T.Cancelled)
                })), i.dispose
            }

            function I(t) {
                return void 0 === t && (t = ""), (0, e.useMemo)((function() {
                    return t.split(" ").filter((function(e) {
                        return e.trim().length > 1
                    }))
                }), [t])
            }
            _.displayName = "OpenClosedContext",
                function(e) {
                    e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed"
                }(P || (P = {})),
                function(e) {
                    e.Finished = "finished", e.Cancelled = "cancelled"
                }(T || (T = {}));
            var F, U = (0, e.createContext)(null);
            U.displayName = "TransitionContext",
                function(e) {
                    e.Visible = "visible", e.Hidden = "hidden"
                }(F || (F = {}));
            var H = (0, e.createContext)(null);

            function V(e) {
                return "children" in e ? V(e.children) : e.current.filter((function(e) {
                    return e.state === F.Visible
                })).length > 0
            }

            function W(t) {
                var n = (0, e.useRef)(t),
                    r = (0, e.useRef)([]),
                    a = j();
                (0, e.useEffect)((function() {
                    n.current = t
                }), [t]);
                var o = (0, e.useCallback)((function(e, t) {
                        var o;
                        void 0 === t && (t = d.Hidden);
                        var i = r.current.findIndex((function(t) {
                            return t.id === e
                        })); - 1 !== i && (g(t, ((o = {})[d.Unmount] = function() {
                            r.current.splice(i, 1)
                        }, o[d.Hidden] = function() {
                            r.current[i].state = F.Hidden
                        }, o)), !V(r) && a.current && (null == n.current || n.current()))
                    }), [n, a, r]),
                    i = (0, e.useCallback)((function(e) {
                        var t = r.current.find((function(t) {
                            return t.id === e
                        }));
                        return t ? t.state !== F.Visible && (t.state = F.Visible) : r.current.push({
                                id: e,
                                state: F.Visible
                            }),
                            function() {
                                return o(e, d.Unmount)
                            }
                    }), [r, o]);
                return (0, e.useMemo)((function() {
                    return {
                        children: r,
                        register: i,
                        unregister: o
                    }
                }), [i, o, r])
            }

            function B() {}
            H.displayName = "NestingContext";
            var Y = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

            function $(e) {
                for (var t, n = {}, r = h(Y); !(t = r()).done;) {
                    var a, o = t.value;
                    n[o] = null != (a = e[o]) ? a : B
                }
                return n
            }
            var Q = f.RenderStrategy;

            function q(t) {
                var n, r = t.beforeEnter,
                    a = t.afterEnter,
                    o = t.beforeLeave,
                    i = t.afterLeave,
                    l = t.enter,
                    u = t.enterFrom,
                    s = t.enterTo,
                    c = t.entered,
                    f = t.leave,
                    v = t.leaveFrom,
                    h = t.leaveTo,
                    y = m(t, ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]),
                    w = (0, e.useRef)(null),
                    k = (0, e.useState)(F.Visible),
                    S = k[0],
                    C = k[1],
                    O = y.unmount ? d.Unmount : d.Hidden,
                    j = function() {
                        var t = (0, e.useContext)(U);
                        if (null === t) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return t
                    }(),
                    _ = j.show,
                    z = j.appear,
                    M = j.initial,
                    A = function() {
                        var t = (0, e.useContext)(H);
                        if (null === t) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                        return t
                    }(),
                    R = A.register,
                    B = A.unregister,
                    Y = N(),
                    q = (0, e.useRef)(!1),
                    K = W((function() {
                        q.current || (C(F.Hidden), B(Y), re.current.afterLeave())
                    }));
                x((function() {
                    if (Y) return R(Y)
                }), [R, Y]), x((function() {
                    var e;
                    O === d.Hidden && Y && (_ && S !== F.Visible ? C(F.Visible) : g(S, ((e = {})[F.Hidden] = function() {
                        return B(Y)
                    }, e[F.Visible] = function() {
                        return R(Y)
                    }, e)))
                }), [S, Y, R, B, _, O]);
                var G = I(l),
                    X = I(u),
                    J = I(s),
                    Z = I(c),
                    ee = I(f),
                    te = I(v),
                    ne = I(h),
                    re = function(t) {
                        var n = (0, e.useRef)($(t));
                        return (0, e.useEffect)((function() {
                            n.current = $(t)
                        }), [t]), n
                    }({
                        beforeEnter: r,
                        afterEnter: a,
                        beforeLeave: o,
                        afterLeave: i
                    }),
                    ae = E();
                (0, e.useEffect)((function() {
                    if (ae && S === F.Visible && null === w.current) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                }), [w, S, ae]);
                var oe = M && !z;
                x((function() {
                    var e = w.current;
                    if (e && !oe) return q.current = !0, _ && re.current.beforeEnter(), _ || re.current.beforeLeave(), _ ? D(e, G, X, J, Z, (function(e) {
                        q.current = !1, e === T.Finished && re.current.afterEnter()
                    })) : D(e, ee, te, ne, Z, (function(e) {
                        q.current = !1, e === T.Finished && (V(K) || (C(F.Hidden), B(Y), re.current.afterLeave()))
                    }))
                }), [re, Y, q, B, K, w, oe, _, G, X, J, ee, te, ne]);
                var ie = {
                        ref: w
                    },
                    le = y;
                return e.createElement(H.Provider, {
                    value: K
                }, e.createElement(L, {
                    value: g(S, (n = {}, n[F.Visible] = P.Open, n[F.Hidden] = P.Closed, n))
                }, b({
                    props: p({}, le, ie),
                    defaultTag: "div",
                    features: Q,
                    visible: S === F.Visible,
                    name: "Transition.Child"
                })))
            }

            function K(t) {
                var n, r = t.show,
                    a = t.appear,
                    o = void 0 !== a && a,
                    i = t.unmount,
                    l = m(t, ["show", "appear", "unmount"]),
                    u = z();
                void 0 === r && null !== u && (r = g(u, ((n = {})[P.Open] = !0, n[P.Closed] = !1, n)));
                if (![!0, !1].includes(r)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
                var s = (0, e.useState)(r ? F.Visible : F.Hidden),
                    c = s[0],
                    f = s[1],
                    d = W((function() {
                        f(F.Hidden)
                    })),
                    v = function() {
                        var t = (0, e.useRef)(!0);
                        return (0, e.useEffect)((function() {
                            t.current = !1
                        }), []), t.current
                    }(),
                    h = (0, e.useMemo)((function() {
                        return {
                            show: r,
                            appear: o || !v,
                            initial: v
                        }
                    }), [r, o, v]);
                (0, e.useEffect)((function() {
                    r ? f(F.Visible) : V(d) || f(F.Hidden)
                }), [r, d]);
                var y = {
                    unmount: i
                };
                return e.createElement(H.Provider, {
                    value: d
                }, e.createElement(U.Provider, {
                    value: h
                }, b({
                    props: p({}, y, {
                        as: e.Fragment,
                        children: e.createElement(q, Object.assign({}, y, l))
                    }),
                    defaultTag: e.Fragment,
                    features: Q,
                    visible: c === F.Visible,
                    name: "Transition"
                })))
            }
            K.Child = function(t) {
                var n = null !== (0, e.useContext)(U),
                    r = null !== z();
                return !n && r ? e.createElement(K, Object.assign({}, t)) : e.createElement(q, Object.assign({}, t))
            }, K.Root = K;
            var G = n(694),
                X = n.n(G),
                J = n(184),
                Z = function(t) {
                    var n = t.isOpen,
                        r = t.message,
                        a = t.variant,
                        o = void 0 === a ? "warning" : a,
                        i = t.topMost,
                        l = void 0 !== i && i,
                        u = X()("fixed top-10 left-1/2 transform -translate-x-1/2 max-w-sm w-full shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden", {
                            "bg-rose-500 text-white": "warning" === o,
                            "bg-blue-500 text-white": "success" === o
                        }, l ? "z-20" : "");
                    return (0, J.jsx)(K, {
                        show: n,
                        as: e.Fragment,
                        enter: "ease-out duration-300 transition",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "transition ease-in duration-100",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: (0, J.jsx)("div", {
                            className: u,
                            children: (0, J.jsx)("div", {
                                className: "p-4",
                                children: (0, J.jsx)("p", {
                                    className: "text-sm text-center font-medium",
                                    children: r
                                })
                            })
                        })
                    })
                },
                ee = 2e3,
                te = 350;
            var ae = ["oncia", "dubbi", "corra", "litro", "sparo", "carta", "nasce", "punti", "rasoi", "muffa", "ritmi", "lorde", "carne", "snodi", "borie", "calco", "crepe", "eredi", "tosai", "sugli", "disto", "dirmi", "nuovo", "mandi", "giace", "odino", "zolfo", "umana", "scali", "farne", "dogma", "rompa", "arida", "ressa", "puzzi", "vuole", "pigro", "fogne", "panno", "gioco", "rozza", "porge", "linfa", "zinco", "regia", "acino", "dighe", "stelo", "bacio", "balsa", "leghe", "omega", "nonio", "conca", "talea", "gambo", "sella", "afona", "prono", "tremo", "mallo", "piuma", "gradi", "aglio", "fulva", "dieta", "fioca", "zuppa", "nanna", "epoca", "greve", "motto", "tassa", "pochi", "folle", "rocca", "iodio", "cargo", "girai", "tenni", "gnosi", "mambo", "bachi", "omero", "mitra", "conga", "corna", "farsa", "dorma", "denso", "mania", "miele", "mille", "cicca", "falce", "frigo", "bande", "serro", "vista", "rutto", "sfila", "sesso", "sasso", "servi", "astio", "porre", "prude", "torme", "sansa", "faina", "netto", "conte", "secca", "conto", "garza", "ditta", "brina", "madre", "forum", "sudai", "boato", "culto", "spago", "curai", "badai", "roghi", "bieco", "lanci", "ovvio", "bitta", "obesi", "cavai", "massa", "ruota", "lerci", "penna", "tacco", "natia", "togli", "vinti", "mogio", "scala", "ampio", "lembo", "onice", "nomea", "stare", "giogo", "rughe", "retro", "audio", "rissa", "offro", "pecca", "testa", "turbe", "gonna", "aroma", "ruolo", "rebbi", "tanfo", "tarme", "borgo", "ragno", "tetto", "tenia", "piano", "copia", "torce", "orafe", "spera", "cucio", "viola", "sacre", "muovi", "crisi", "muoio", "liana", "curva", "tolda", "bugie", "bidet", "bozza", "altra", "parco", "salmo", "eroso", "fetta", "spine", "libro", "buffa", "sorci", "sonno", "cosmo", "laghi", "solfa", "sappi", "pugni", "adori", "mangi", "sopra", "borsa", "verga", "seppi", "pegni", "avari", "azoto", "nevai", "avolo", "peplo", "sorso", "turno", "ostia", "fauci", "secco", "avito", "amaro", "patta", "zoppo", "upupa", "nervi", "pista", "freno", "salsa", "lince", "tozza", "vacuo", "idolo", "mango", "lombi", "mucca", "bosco", "blesa", "nylon", "sabba", "monca", "fitto", "palmo", "dimmi", "peana", "casba", "ogiva", "cauto", "viale", "opino", "doghe", "rogge", "carte", "zeppa", "forca", "verbo", "prove", "cedro", "ulivo", "acuti", "larva", "feudo", "ceduo", "agave", "piaga", "brame", "nonna", "golfo", "negai", "aceto", "esito", "palla", "scavo", "marca", "cloro", "orata", "esile", "sorge", "abbai", "bizze", "spola", "sputo", "polio", "legno", "amici", "ebete", "dazio", "sinti", "bacca", "torre", "entra", "zebra", "asino", "relax", "antro", "cadde", "masai", "cucce", "beghe", "tonti", "nuoto", "sedia", "cirri", "alice", "rumba", "patio", "lizza", "frate", "udito", "balia", "curry", "fatto", "cenci", "zonzo", "pecco", "dieci", "urina", "manzo", "notai", "terzo", "gotta", "bollo", "arabi", "succo", "cenno", "spada", "poggi", "scure", "coevo", "alveo", "tacca", "avere", "mosca", "nenia", "vasca", "manca", "ancia", "barai", "anche", "furia", "invio", "univa", "viole", "aiuto", "bocce", "pezzo", "salma", "prole", "baule", "epuro", "losco", "occhi", "sacco", "voghi", "collo", "totem", "avvio", "volai", "canoa", "festa", "purga", "nuora", "orgia", "zucca", "fiabe", "seggi", "germe", "doppi", "ceffo", "gamma", "pesce", "cetra", "villa", "piace", "vello", "marna", "cesio", "setta", "fuori", "brace", "modem", "cippo", "talpa", "ambra", "lisca", "pareo", "mogli", "varie", "cella", "diade", "bisca", "radio", "udiva", "bruno", "niveo", "prora", "china", "abusa", "ricco", "cocci", "coesa", "stesa", "utero", "asola", "ninja", "metto", "cozzo", "sfizi", "tetro", "serbo", "reame", "porci", "zirlo", "visto", "fummo", "trama", "cielo", "campa", "reato", "polpa", "etnea", "fiuto", "laico", "gamba", "ciuco", "carme", "norme", "nerbo", "acume", "colon", "primo", "gente", "terme", "tedio", "pizza", "aerea", "orari", "bazza", "grana", "cesso", "scopa", "acqua", "morsa", "cocco", "volpe", "ernia", "stiro", "retto", "sunto", "posso", "certa", "puffi", "aprii", "drupa", "otite", "renna", "fallo", "taiga", "capii", "siepe", "marce", "siero", "usato", "album", "volto", "basta", "fanno", "siamo", "perno", "farro", "grama", "emoji", "magro", "dalia", "mesta", "ridda", "passi", "curia", "annuo", "tappo", "vuoti", "pigio", "balle", "abbia", "desco", "eremo", "fusto", "slogo", "ebreo", "grafo", "valgo", "fondo", "miope", "venia", "colpe", "zompo", "casse", "terga", "cenge", "onore", "fesso", "ovale", "pende", "tosse", "zuffa", "sughi", "eludo", "agape", "costa", "tasto", "bocca", "marzo", "tende", "banca", "fungo", "bagno", "fiero", "clava", "pensa", "azero", "domai", "mezzo", "svelo", "canto", "mecca", "diari", "ghiro", "gocce", "colai", "recai", "espio", "punge", "pongo", "bruti", "frase", "vulva", "fiera", "corpo", "vanga", "lieta", "smise", "fogli", "amala", "beone", "scolo", "pollo", "cunei", "rodeo", "mossa", "quasi", "sanno", "fresa", "goffe", "merlo", "verza", "sobri", "robot", "sagra", "fuoco", "abaco", "utile", "preda", "colza", "fichi", "nuche", "rebus", "svago", "liceo", "donna", "petto", "opera", "tonfo", "setto", "cachi", "tuono", "panne", "quale", "tocca", "galea", "baffi", "lenza", "tizio", "covai", "tenda", "eroga", "sorbo", "jeans", "afoso", "beato", "mosto", "stola", "detto", "punta", "posai", "umile", "spore", "arpie", "budda", "corda", "treno", "lotta", "cinta", "gergo", "lardo", "grida", "poema", "luogo", "fiato", "vinai", "bongo", "furba", "sport", "pinta", "crema", "frode", "trono", "clero", "mozzi", "dolce", "turco", "ordii", "venti", "tanto", "ovini", "colla", "conio", "vocio", "ansia", "bolla", "zolla", "serpe", "nuoce", "ruppe", "prode", "latte", "ossia", "regno", "fatuo", "teche", "corvi", "righe", "posta", "anelo", "casta", "falso", "emana", "milza", "extra", "morbo", "cuore", "cosca", "faggi", "solco", "grigi", "pinne", "suino", "astro", "volge", "asilo", "multa", "rione", "balzo", "forza", "frasi", "torso", "pulsa", "anice", "ronfa", "trito", "belva", "trota", "animo", "ormai", "bario", "busta", "dardo", "esche", "vendo", "litio", "sigla", "cigli", "panda", "sommo", "colse", "vetta", "lecci", "baldo", "alone", "rullo", "pruno", "reale", "draga", "drone", "ovile", "oblio", "pelle", "bulbo", "clone", "tappe", "firma", "sogno", "sigma", "sisma", "fonte", "diodo", "grumo", "birra", "lasci", "sceso", "pelli", "parve", "dicco", "tango", "parte", "busti", "elogi", "paura", "negli", "gechi", "ebbro", "buchi", "pulce", "etimo", "bello", "morso", "barra", "gomma", "pazzi", "vinco", "duole", "usano", "breve", "selci", "penne", "canna", "berlo", "fosco", "cesta", "senno", "nause", "cervo", "messa", "daino", "vaghe", "cecio", "drago", "umida", "etnia", "spuma", "piega", "micio", "opaco", "vibra", "tilde", "ossea", "rauca", "falco", "cifra", "studi", "tomba", "ratto", "carpa", "barca", "rocce", "sturo", "folla", "bruco", "targa", "molla", "ballo", "tagli", "bruci", "benda", "malga", "aduso", "ubbia", "vasai", "rango", "oneri", "clima", "pizzo", "selva", "carro", "croda", "velai", "cosce", "ceppo", "brano", "usare", "scemi", "evoco", "agito", "pozza", "gobba", "legge", "vieto", "desio", "belga", "adagi", "zanne", "denti", "lacca", "olive", "vegli", "facce", "atrio", "coppa", "pesto", "fante", "parti", "volta", "poppa", "disfa", "crasi", "bivio", "pance", "cerco", "celti", "nafta", "alcol", "abile", "reggo", "emulo", "avuto", "fosse", "alibi", "ombra", "cameo", "pioli", "copri", "stima", "corsa", "estro", "lucci", "greco", "funge", "piena", "tigli", "burro", "gatto", "razzo", "faida", "tosta", "lucro", "banco", "aureo", "bullo", "vermi", "censo", "lutto", "ilare", "utili", "melma", "tibia", "bisce", "colta", "umori", "celia", "cromo", "cespo", "cacio", "cappa", "badia", "malta", "parlo", "nappa", "passa", "salve", "teppa", "frana", "ponte", "letto", "etica", "sonda", "lista", "serra", "palle", "bazar", "paria", "lusso", "crepi", "cobra", "pesco", "ferro", "corte", "fisco", "baita", "polpo", "calca", "stufo", "scova", "butta", "campo", "epica", "tigna", "trave", "fasce", "quota", "causa", "imita", "porro", "forra", "pigli", "lonza", "avrai", "suono", "sozza", "lesso", "premi", "merce", "museo", "hanno", "calai", "amaca", "uggia", "sento", "volle", "gelso", "anodo", "pigna", "legai", "svito", "docce", "sosta", "rampa", "gesti", "perso", "coffa", "mughi", "bioma", "nesso", "soldi", "preso", "glifo", "lenta", "sesto", "gigli", "hotel", "bardo", "archi", "tallo", "nocca", "sodio", "fibra", "ugola", "morti", "mirto", "erica", "testo", "ninfa", "mazza", "alate", "oziai", "lesta", "basso", "piada", "ardua", "slego", "mappa", "bucce", "vieni", "grano", "culla", "zitti", "oppio", "tarlo", "fiume", "rotta", "degna", "scafo", "fango", "tinta", "carie", "arare", "carso", "bordi", "rupia", "odore", "prete", "udire", "colpi", "magma", "presa", "omone", "segno", "sarti", "cenai", "salpo", "oltre", "duchi", "genio", "forse", "abate", "fiala", "cacao", "perla", "pinza", "rubai", "pelai", "ritto", "vespa", "ruzzo", "aspri", "amavo", "bimba", "adito", "felpa", "palma", "croce", "morda", "etere", "maghi", "porta", "cento", "esame", "ligio", "fughe", "icona", "piede", "unico", "grata", "passo", "apice", "conci", "giuro", "forma", "limbo", "fossa", "zecca", "colmo", "forte", "costi", "masso", "mensa", "casco", "liuto", "afidi", "leggo", "torve", "raggi", "porto", "cruda", "lecca", "gesso", "visse", "samba", "etano", "bambu", "cozze", "oliai", "palio", "orcio", "media", "lunga", "linea", "orchi", "tesse", "sfuso", "guado", "stona", "metro", "tulle", "toppa", "acero", "rospo", "foibe", "pesca", "blusa", "alghe", "usura", "cheta", "adipe", "vanno", "frega", "prima", "basco", "riuso", "edema", "finto", "chela", "tarpo", "tardi", "vento", "vetro", "fermo", "panna", "sette", "becco", "barba", "calze", "sotto", "zaino", "croco", "tempo", "vezzo", "foche", "spiga", "ameni", "egizi", "sbuca", "stile", "circa", "cisti", "sarde", "prato", "marea", "aneto", "lepri", "mafia", "solai", "tasca", "zeppo", "versi", "manna", "perde", "clown", "annoi", "calli", "pacca", "citai", "calci", "lacci", "tirai", "ferie", "rosea", "evaso", "avido", "elica", "vizio", "siedi", "dossi", "colui", "parto", "cagna", "cuoca", "amato", "fammi", "capra", "arnia", "tordo", "saghe", "video", "risma", "suore", "santa", "soffi", "fauna", "fobia", "tatto", "isola", "babbo", "penai", "celai", "evita", "muone", "legna", "vizzo", "nassa", "esule", "bigia", "molti", "curda", "paese", "esoso", "paggi", "trino", "finge", "erigo", "sfida", "fremo", "pieve", "atomo", "erano", "inizi", "osare", "soave", "linda", "tecno", "peste", "gusci", "cuoio", "raspa", "tersa", "vacca", "manto", "danza", "guida", "mosci", "efebo", "ruspa", "circo", "regio", "suola", "gogna", "lemma", "scudo", "poeta", "errai", "alito", "bieta", "valle", "duale", "misto", "russo", "folto", "colma", "briga", "pampa", "biada", "venga", "ricci", "batte", "elevo", "meteo", "agire", "ratti", "schwa", "lieve", "parso", "nutre", "senza", "lagna", "stato", "tasso", "berci", "sidro", "creta", "razza", "crani", "marmo", "stiva", "padre", "bravi", "croma", "busso", "suolo", "obolo", "corso", "verde", "droga", "tutte", "teste", "sarei", "gonfi", "vitto", "sorto", "ostro", "torta", "rombo", "gemma", "addio", "fieno", "spesa", "ganci", "obice", "prego", "seguo", "terra", "cinse", "pasto", "resto", "tonda", "buono", "probo", "emiro", "aorta", "remai", "seghe", "fumai", "pinna", "disco", "mamma", "umore", "laser", "rubli", "educa", "andai", "cruna", "rossa", "calva", "leone", "cassa", "posto", "figli", "botti", "agile", "abito", "lotti", "sposi", "trova", "slavi", "palco", "vispa", "sfera", "ciclo", "tento", "sciai", "senso", "sazio", "polso", "foste", "ovaia", "alzai", "ascia", "optai", "magia", "ebano", "marre", "scade", "cigno", "lavai", "salto", "ponfo", "flora", "gonzo", "fissa", "tieni", "cieca", "direi", "ladro", "arena", "omise", "tolta", "calce", "brodo", "serie", "pompa", "sosia", "veste", "panca", "bomba", "pesai", "tonno", "iella", "acari", "paghe", "svaso", "canea", "iride", "micce", "cambi", "sauna", "agata", "corto", "amore", "terna", "urlai", "ameba", "monte", "varco", "saggi", "serio", "desta", "gozzo", "tatuo", "gazza", "sbafo", "coppi", "danno", "tuffo", "roche", "randa", "patto", "sfamo", "sordi", "credo", "kappa", "istmo", "furto", "creai", "ronda", "sugna", "karma", "largo", "torba", "edile", "edera", "esigo", "colgo", "sfogo", "adula", "apnea", "vanto", "grato", "palpo", "beffa", "globo", "ghisa", "dillo", "sfumo", "comma", "duomo", "pozzi", "basto", "virus", "guano", "adone", "gorgo", "spira", "ribes", "picco", "svevo", "ganzo", "koala", "falde", "cibai", "fiore", "somma", "scusa", "matto", "lance", "cerro", "uscio", "saldo", "babau", "flebo", "greto", "guaio", "ovulo", "ulula", "tengo", "lampo", "cavia", "ovest", "gassa", "latta", "raspo", "camma", "lasco", "bruma", "cotta", "burla", "mento", "stavi", "unire", "fruga", "sbavi", "dammi", "nulla", "nembo", "turpe", "speck", "vigna", "torto", "pacco", "chilo", "ozono", "gusto", "fregi", "giada", "crine", "toghe", "birba", "torni", "getto", "mazzo", "talco", "rogna", "mutuo", "mance", "podio", "verso", "pausa", "dotta", "botte", "pasta", "brado", "savio", "piove", "privo", "assai", "abeti", "pappa", "gallo", "igneo", "zampa", "forno", "grave", "plico", "mondo", "scena", "prosa", "felce", "stadi", "agone", "conta", "gioia", "calme", "amido", "aereo", "scopo", "esodo", "cardo", "gnomo", "spelo", "narri", "tigre", "orale", "notte", "giova", "retta", "tenue", "curio", "omino", "lobby", "usavi", "lisci", "avena", "menta", "dorso", "tazza", "caldo", "nozze", "armai", "plebe", "spazi", "riffa", "zozze", "zappa", "unito", "leale", "socio", "vinse", "giara", "rende", "acida", 'garbo"],ne=["abaco', "abata", "abate", "abati", "abato", "abavi", "abavo", "abaya", "abbai", "abbia", "abbui", "abete", "abeti", "abile", "abili", "abita", "abiti", "abito", "abuna", "abusa", "abusi", "abuso", "acari", "acaro", "acati", "acato", "acazi", "accia", "accio", "aceri", "acero", "acese", "acesi", "aceta", "aceti", "aceto", "achea", "achee", "achei", "acheo", "acida", "acide", "acidi", "acido", "acile", "acili", "acini", "acino", "acori", "acoro", "acqua", "acque", "acqui", "acquo", "actea", "actee", "acuii", "acume", "acumi", "acuta", "acute", "acuti", "acuto", "adagi", "adale", "adali", "addai", "addii", "addio", "addua", "addui", "adduo", "adesa", "adese", "adesi", "adeso", "adima", "adimi", "adimo", "adipe", "adipi", "adira", "adire", "adiri", "adiro", "adita", "adite", "aditi", "adito", "adiva", "adivi", "adivo", "adobe", "adona", "adone", "adoni", "adono", "adora", "adori", "adoro", "adoxa", "adoxe", "adula", "aduli", "adulo", "aduna", "aduni", "aduno", "adusa", "aduse", "adusi", "aduso", "aequo", "aerai", "aerea", "aeree", "aerei", "aereo", "afaca", "afata", "afate", "afati", "afato", "afeli", "afeta", "afeti", "afide", "afidi", "afnii", "afnio", "afona", "afone", "afoni", "afono", "afosa", "afose", "afosi", "afoso", "agama", "agame", "agami", "agamo", "agape", "agapi", "agata", "agate", "agave", "agavi", "aggio", "agiai", "agile", "agili", "agino", "agire", "agita", "agite", "agiti", "agito", "agiva", "agivi", "agivo", "aglio", "agone", "agoni", "agora", "aguti", "aiace", "aiaci", "aiata", "aiate", "aiola", "aiole", "aioli", "aiolo", "aione", "aioni", "aitai", "aiuga", "aiuta", "aiuti", "aiuto", "aizza", "aizzi", "aizzo", "alaci", "alala", "alale", "alali", "alalo", "alami", "alane", "alani", "alano", "alare", "alari", "alata", "alate", "alati", "alato", "alava", "alavi", "alavo", "albio", "album", "alcea", "alcee", "alche", "alcol", "aldio", "aleph", "alesa", "alese", "alesi", "aleso", "alghe", "algia", "algie", "aliai", "alias", "alibi", "alice", "alici", "alida", "alide", "alidi", "alido", "alimi", "alimo", "alino", "alita", "alite", "aliti", "alito", "allea", "allee", "allei", "alleo", "almea", "almee", "alobi", "alona", "alone", "aloni", "alono", "alosa", "alose", "alpha", "altea", "altee", "altra", "altre", "altri", "altro", "alula", "alule", "alvei", "alveo", "alzai", "amaca", "amaci", "amala", "amale", "amali", "amalo", "amami", "amane", "amano", "amara", "amare", "amari", "amaro", "amasi", "amata", "amate", "amati", "amato", "amava", "amavi", "amavo", "ambia", "ambii", "ambio", "ambra", "ambre", "ameba", "amebe", "amena", "amene", "ameni", "ameno", "amica", "amici", "amico", "amida", "amide", "amidi", "amido", "amiga", "amigo", "amile", "amili", "amina", "amine", "amino", "ammai", "amnii", "amnio", "amomi", "amomo", "amore", "amori", "ampia", "ampie", "ampio", "ampli", "amuli", "amulo", "anale", "anali", "anari", "anche", "ancia", "andai", "anela", "anele", "aneli", "anelo", "aneti", "aneto", "angla", "angle", "angli", "anglo", "angue", "angui", "anice", "anici", "anile", "anili", "anima", "anime", "animi", "animo", "annoi", "annua", "annue", "annui", "annuo", "anobi", "anodi", "anodo", "anona", "anone", "ansai", "ansia", "ansie", "ansio", "antri", "antro", "anura", "anure", "anuri", "anuro", "aonia", "aonie", "aonio", "aorta", "aorte", "apale", "apali", "apate", "apice", "apici", "apide", "apidi", "apina", "apine", "apira", "apire", "apiri", "apiro", "apnea", "apnee", "apoda", "apode", "apodi", "apodo", "appai", "appia", "appie", "appio", "aprii", "apula", "apule", "apuli", "apulo", "araba", "arabe", "arabi", "arabo", "araci", "arala", "arale", "arali", "aralo", "arama", "arame", "arami", "aramo", "arane", "arano", "arara", "arare", "arata", "arate", "arati", "arato", "arava", "aravi", "aravo", "arcai", "arche", "archi", "arcua", "arcui", "arcuo", "ardea", "ardee", "ardii", "ardua", "ardue", "ardui", "arduo", "areai", "areca", "arena", "arene", "areni", "areno", "arese", "aresi", "argea", "argee", "argei", "argeo", "arghi", "argon", "arida", "aride", "aridi", "arido", "arile", "arili", "arino", "armai", "arnia", "arnie", "aroma", "aromi", "arpia", "arpie", "arsii", "artai", "artoa", "artoe", "artoi", "artoo", "asada", "asado", "asana", "asari", "asaro", "aschi", "ascia", "ascio", "asili", "asilo", "asina", "asine", "asini", "asino", "asola", "asole", "asoli", "asolo", "aspra", "aspre", "aspri", "aspro", "assai", "astia", "astio", "astri", "astro", "atava", "atave", "atavi", "atavo", "atele", "ateli", "atomi", "atomo", "atona", "atone", "atoni", "atono", "atout", "atrii", "atrio", "attai", "attea", "attee", "attei", "atteo", "attua", "attui", "attuo", "audio", "audit", "auffa", "augna", "augni", "augno", "aulii", "aurai", "aurea", "auree", "aurei", "aureo", "avana", "avara", "avare", "avari", "avaro", "avena", "avene", "avere", "averi", "avete", "aveva", "avevi", "avevo", "avida", "avide", "avidi", "avido", "avita", "avite", "aviti", "avito", "avoca", "avoco", "avola", "avole", "avoli", "avolo", "avori", "avrai", "avrei", "avuta", "avute", "avuti", "avuto", "avvia", "avvii", "avvio", "axone", "axoni", "azera", "azere", "azeri", "azero", "azide", "azidi", "azima", "azime", "azimi", "azimo", "azina", "azine", "azoni", "azota", "azoti", "azoto", "azuki", "babao", "babau", "babbi", "babbo", "bacai", "bacca", "bacco", "bachi", "bacia", "bacie", "bacii", "bacio", "badai", "badge", "badgi", "badia", "badie", "baele", "baeli", "baffi", "baffo", "bagel", "bagli", "bagna", "bagne", "bagni", "bagno", "baiai", "baili", "bailo", "baino", "baita", "baite", "bakka", "bakke", "bakki", "bakko", "balba", "balbe", "balbi", "balbo", "balco", "balda", "balde", "baldi", "baldo", "balia", "balie", "balii", "balio", "balla", "balle", "balli", "ballo", "balma", "balme", "balsa", "balse", "balta", "balte", "balti", "balto", "balza", "balze", "balzi", "balzo", "bamba", "bambe", "bambi", "bambo", "bambu", "banaa", "banae", "banai", "banao", "banca", "banco", "banda", "bande", "bandi", "bando", "bangi", "banjo", "banna", "banni", "banno", "bantu", "barai", "barba", "barbe", "barbi", "barbo", "barca", "barco", "barda", "barde", "bardi", "bardo", "baria", "barie", "barii", "bario", "barra", "barre", "barri", "barro", "basai", "basca", "basco", "basii", "bassa", "basse", "bassi", "basso", "basta", "baste", "basti", "basto", "batta", "batte", "batti", "batto", "batua", "baula", "baule", "bauli", "baulo", "bauta", "baute", "bazar", "bazza", "bazze", "beaci", "beala", "beale", "beali", "bealo", "beami", "beane", "beano", "beare", "beata", "beate", "beati", "beato", "beava", "beavi", "beavo", "bebop", "becca", "becco", "beffa", "beffe", "beffi", "beffo", "begai", "beggi", "beghe", "beghi", "begia", "begli", "beige", "beigi", "beino", "beisa", "beise", "belai", "belga", "belgi", "belii", "belio", "bella", "belle", "belli", "bello", "belta", "belva", "belve", "benai", "benda", "bende", "bendi", "bendo", "benna", "benne", "beola", "beole", "beona", "beone", "beoni", "beota", "beote", "beoti", "berci", "berla", "berle", "berli", "berlo", "berma", "berme", "bermi", "berne", "bersi", "berta", "berte", "berti", "bervi", "besce", "besci", "bessa", "besse", "bessi", "besso", "betta", "bette", "beuta", "beute", "bevei", "bevve", "bevvi", "bezzi", "bezzo", "biada", "biade", "biadi", "biado", "biava", "biave", "biavi", "biavo", "bibbi", "biche", "bidet", "bieca", "bieco", "bieta", "biete", "biffa", "biffe", "biffi", "biffo", "bighe", "bighi", "bigia", "bigie", "bigio", "bigne", "bilia", "bilie", "bimba", "bimbe", "bimbi", "bimbo", "binai", "binda", "binde", "bindi", "binga", "binge", "bingo", "biodi", "biodo", "bioma", "biomi", "biosi", "biova", "biove", "birba", "birbe", "birbi", "birbo", "birce", "birci", "birra", "birre", "birri", "birro", "bisca", "bisce", "bissa", "bissi", "bisso", "bista", "biste", "bisti", "bitta", "bitte", "bitti", "bitto", "biuta", "biute", "biuti", "biuto", "bivio", "bizza", "bizze", "blesa", "blese", "blesi", "bleso", "blini", "blitz", "blumi", "blumo", "blusa", "bluse", "boari", "boaro", "boati", "boato", "bobba", "bobbi", "bobbo", "bocca", "bocce", "bocci", "bocco", "bocia", "boema", "boeme", "boemi", "boemo", "boera", "boere", "boeri", "boero", "boghe", "boide", "boidi", "boite", "boldi", "boldo", "bolge", "bolla", "bolle", "bolli", "bollo", "bolsa", "bolse", "bolsi", "bolso", "bomba", "bombe", "bombi", "bombo", "bongo", "bonne", "bonta", "bonza", "bonze", "bonzi", "bonzo", "borda", "borde", "bordi", "bordo", "borea", "borei", "borgo", "boria", "borie", "borii", "borio", "borni", "borra", "borre", "borri", "borro", "borsa", "borse", "bosco", "bossi", "bosso", "botri", "botro", "botta", "botte", "botti", "botto", "boule", "boxai", "bozza", "bozze", "bozzi", "bozzo", "braca", "brace", "braci", "braco", "brada", "brade", "bradi", "brado", "braga", "brago", "braii", "brama", "brame", "brami", "bramo", "brani", "brano", "brasa", "brasi", "braso", "brava", "brave", "bravi", "bravo", "bremi", "bremo", "breva", "breve", "brevi", "brice", "brici", "brida", "bride", "briga", "brige", "brigi", "brigo", "brina", "brine", "brini", "brino", "broda", "brode", "brodi", "brodo", "broge", "brogi", "broli", "brolo", "bromi", "bromo", "brova", "brovi", "brovo", "bruca", "bruci", "bruco", "brugi", "brugo", "bruii", "bruma", "brume", "bruna", "brune", "bruni", "bruno", "bruta", "brute", "bruti", "bruto", "bruzi", "bubai", "bucai", "bucce", "bucci", "buche", "buchi", "bucio", "budda", "buddi", "bufai", "buffa", "buffe", "buffi", "buffo", "bugia", "bugie", "bugio", "bugli", "bugna", "bugne", "bugni", "bugno", "buina", "buine", "bulai", "bulbi", "bulbo", "bulla", "bulle", "bulli", "bullo", "bumba", "bumbe", "buona", "buone", "buoni", "buono", "burba", "burbe", "burga", "burka", "burla", "burle", "burli", "burlo", "burqa", "burri", "burro", "busaa", "busae", "busai", "busao", "busca", "busco", "bushi", "bussa", "busse", "bussi", "busso", "busta", "buste", "busti", "busto", "butta", "butte", "butti", "butto", "buzza", "buzze", "buzzi", "buzzo", "bwaka", "bwana", "caaba", "cabla", "cabli", "cablo", "cabra", "cabri", "cabro", "cacai", "cacao", "cacca", "cacce", "cacci", "cache", "cachi", "cacia", "cacio", "cacti", "cacto", "cadde", "caddi", "cadmi", "caffa", "caffe", "caffi", "caffo", "cafra", "cafre", "cafri", "cafro", "cagai", "caghi", "cagli", "cagna", "cagne", "caiba", "caibe", "caina", "caine", "caini", "caino", "calai", "calao", "calca", "calce", "calci", "calco", "calda", "calde", "caldi", "caldo", "calia", "calie", "calla", "calle", "calli", "callo", "calma", "calme", "calmi", "calmo", "calse", "calta", "calte", "calva", "calve", "calvi", "calvo", "calza", "calze", "calzi", "calzo", "cambi", "camei", "cameo", "camma", "camme", "campa", "campi", "campo", "canai", "canea", "canee", "canga", "cange", "cangi", "canna", "canne", "canni", "canno", "canoa", "canoe", "cansa", "cansi", "canso", "canta", "canti", "canto", "capai", "capii", "cappa", "cappe", "cappi", "cappo", "capra", "capre", "capri", "capro", "capta", "capti", "capto", "carca", "carco", "carda", "carde", "cardi", "cardo", "cargo", "caria", "carie", "cario", "carme", "carmi", "carna", "carne", "carni", "carno", "carpa", "carpe", "carpi", "carpo", "carri", "carro", "carsi", "carso", "carta", "carte", "carvi", "casba", "casbe", "casca", "casci", "casco", "casei", "caseo", "caspa", "caspe", "caspi", "cassa", "casse", "cassi", "casso", "casta", "caste", "casti", "casto", "catta", "catte", "catti", "catto", "caule", "cauli", "cauri", "causa", "cause", "causi", "causo", "cauta", "caute", "cauti", "cauto", "cavai", "cavea", "cavee", "cavia", "cavie", "cazza", "cazze", "cazzi", "cazzo", "cecai", "cecca", "ceche", "cechi", "cecio", "cedei", "cedra", "cedri", "cedro", "cedua", "cedue", "cedui", "ceduo", "ceffa", "ceffi", "ceffo", "ceiba", "ceibe", "celai", "celia", "celie", "celio", "cella", "celle", "celli", "cello", "celta", "celte", "celti", "celto", "celzi", "cenai", "cenci", "cenge", "cengi", "cenna", "cenni", "cenno", "censi", "censo", "cento", "ceppa", "ceppe", "ceppi", "ceppo", "cerai", "cerca", "cerci", "cerco", "cerea", "ceree", "cerei", "cereo", "cerii", "cerio", "cerna", "cerne", "cerni", "cerno", "cerri", "cerro", "certa", "certe", "certi", "certo", "cerva", "cerve", "cervi", "cervo", "cesia", "cesie", "cesio", "cespi", "cespo", "cessa", "cesse", "cessi", "cesso", "cesta", "ceste", "cesti", "cesto", "cetra", "cetre", "chela", "chele", "cheli", "cheta", "chete", "cheti", "cheto", "chile", "chili", "chilo", "chimi", "chimo", "china", "chine", "chini", "chino", "chita", "chiti", "chito", "cholo", "chope", "ciaba", "ciabi", "ciabo", "ciana", "ciane", "ciani", "ciano", "ciati", "ciato", "ciazi", "cibai", "cicca", "cicce", "cicci", "cicco", "ciche", "cicli", "ciclo", "cidia", "cidie", "cidio", "cieca", "cieco", "cieli", "cielo", "ciesa", "ciese", "cifra", "cifre", "cifri", "cifro", "cigli", "cigna", "cigne", "cigni", "cigno", "cimai", "cimba", "cimbe", "cince", "cinga", "cinge", "cingi", "cingo", "cinse", "cinsi", "cinta", "cinte", "cinti", "cinto", "cinzi", "cioce", "ciofi", "ciofo", "cippi", "cippo", "cipri", "circa", "circe", "circi", "circo", "cirri", "cirro", "cisio", "cispa", "cispe", "cista", "ciste", "cisti", "cisto", "citai", "citta", "citte", "citti", "citto", "ciuca", "ciuco", "ciula", "ciuli", "ciulo", "clade", "cladi", "clama", "clami", "clamo", "clava", "clave", "clavi", "clavo", "cleri", "clero", "clima", "climi", "cline", "clini", "clino", "clivi", "clivo", "clona", "clone", "cloni", "clono", "clora", "clori", "cloro", "clown", "cloze", "clune", "cluni", "cnidi", "coala", "coana", "coane", "coati", "cobea", "cobee", "cobla", "coble", "cobra", "cocca", "cocce", "cocci", "cocco", "coche", "codia", "codio", "coesa", "coese", "coesi", "coeso", "coeva", "coeve", "coevi", "coevo", "coffa", "coffe", "cofta", "cofte", "cofti", "cofto", "cogli", "cogni", "cogno", "coiai", "coipi", "coipo", "coire", "coita", "coite", "coiti", "coito", "coiva", "coivi", "coivo", "colai", "colca", "colco", "colei", "colga", "colgo", "colia", "colie", "colla", "colle", "colli", "collo", "colma", "colme", "colmi", "colmo", "colon", "colpa", "colpe", "colpi", "colpo", "colse", "colsi", "colta", "colte", "colti", "colto", "colui", "colza", "colze", "comba", "combe", "combo", "comma", "commi", "commo", "compi", "conca", "conce", "conci", "conga", "congi", "conia", "conie", "conio", "conne", "conni", "conno", "consa", "conso", "conta", "conte", "conti", "conto", "cooba", "coobi", "coobo", "copia", "copie", "copio", "coppa", "coppe", "coppi", "coppo", "copra", "copre", "copri", "copro", "copta", "copte", "copti", "copto", "coque", "corai", "corba", "corbe", "corca", "corco", "corda", "corde", "corea", "coree", "corei", "coreo", "corio", "cormi", "cormo", "corna", "corni", "corno", "corpi", "corpo", "corra", "corre", "corri", "corro", "corsa", "corse", "corsi", "corso", "corta", "corte", "corti", "corto", "corvi", "corvo", "cosai", "cosca", "cosce", "cosci", "cosfi", "cosmi", "cosmo", "cosse", "cossi", "cosso", "costa", "coste", "costi", "costo", "cotta", "cotte", "cotti", "cotto", "cousi", "couso", "covai", "covid", "cozza", "cozze", "cozzi", "cozzo", "crace", "craci", "crani", "crapa", "crape", "crasi", "creai", "creda", "crede", "credi", "credo", "crema", "creme", "cremi", "cremo", "crena", "crene", "creni", "creno", "crepa", "crepe", "crepi", "crepo", "cresi", "creso", "creta", "crete", "crime", "crimi", "crina", "crine", "crini", "crino", "crisi", "croce", "croci", "croco", "croda", "crode", "croia", "croie", "croio", "croma", "crome", "cromi", "cromo", "crono", "cruci", "cruda", "crude", "crudi", "crudo", "cruna", "crune", "ctoni", "cubai", "cubia", "cubie", "cucca", "cucce", "cucci", "cucco", "cucia", "cucii", "cucio", "cueva", "cugna", "cugne", "culai", "culla", "culle", "culli", "cullo", "culmi", "culmo", "culpa", "culta", "culte", "culti", "culto", "cunca", "cunce", "cunci", "cunco", "cunei", "cuneo", "cuoca", "cuoce", "cuoci", "cuoco", "cuoia", "cuoio", "cuora", "cuore", "cuori", "curai", "curda", "curde", "curdi", "curdo", "curia", "curie", "curii", "curio", "curri", "curro", "curry", "curva", "curve", "curvi", "curvo", "cusco", "cussi", "cusso", "dacci", "dache", "dacia", "dacie", "dafne", "dafni", "daghe", "dagli", "daina", "daine", "daini", "daino", "dalai", "dalia", "dalie", "dalla", "dalle", "dalli", "dallo", "damai", "damma", "damme", "dammi", "dance", "danda", "dande", "dando", "danna", "danne", "danni", "danno", "dante", "danti", "danza", "danze", "danzi", "danzo", "darai", "darci", "dardi", "dardo", "darei", "darla", "darle", "darli", "darlo", "darmi", "darne", "darsi", "darti", "darvi", "daspo", "datai", "datti", "dauni", "dazia", "dazio", "debba", "debbi", "debbo", "deche", "deghi", "degli", "degna", "degne", "degni", "degno", "delia", "delie", "delio", "della", "delle", "dello", "delta", "demmo", "densa", "dense", "densi", "denso", "denta", "dente", "denti", "dento", "derby", "derma", "dermi", "derno", "desco", "desia", "desii", "desio", "dessa", "desse", "dessi", "desso", "desta", "deste", "desti", "desto", "detox", "detta", "dette", "detti", "detto", "devia", "devie", "devii", "devio", "diade", "diadi", "diale", "diali", "diamo", "diana", "diane", "diano", "diapa", "diape", "diapi", "diapo", "diari", "diate", "diaza", "diaze", "diazi", "diazo", "dicai", "dicci", "dicco", "diche", "dichi", "dicta", "dieci", "diede", "diedi", "diene", "dieni", "dieri", "diesa", "diesi", "dieso", "dieta", "diete", "dieti", "dieto", "dighe", "digli", "dildi", "dildo", "dilla", "dille", "dilli", "dillo", "dimmi", "dimoi", "dindi", "dindo", "dingo", "dinka", "dinne", "diodi", "diodo", "dioli", "diolo", "diosi", "dipoi", "dirai", "dirci", "direi", "dirla", "dirle", "dirli", "dirlo", "dirmi", "dirne", "dirsi", "dirti", "dirvi", "disco", "disfa", "disfi", "disfo", "disia", "disii", "disio", "disse", "dissi", "dista", "disti", "disto", "ditta", "ditte", "ditti", "diula", "djaga", "doagi", "doari", "dobla", "doble", "dobli", "doblo", "dobra", "docce", "docci", "docmi", "dogai", "doghe", "doghi", "dogli", "dogma", "dogmi", "dogre", "dolai", "dolca", "dolce", "dolci", "dolco", "dolga", "dolgo", "dolio", "dolse", "dolsi", "dolta", "dolte", "dolti", "dolto", "domai", "domma", "dommi", "donai", "donde", "donna", "donne", "donni", "donno", "dopai", "doppi", "dorai", "doria", "dorio", "dorma", "dorme", "dormi", "dormo", "dorsi", "dorso", "dosai", "dossi", "dosso", "dotai", "dotta", "dotte", "dotti", "dotto", "doula", "doule", "dovei", "draba", "drabe", "draco", "draga", "drago", "drena", "dreni", "dreno", "drive", "droga", "drogo", "droma", "drome", "dromi", "dromo", "drone", "droni", "druda", "drude", "drudi", "drudo", "drupa", "drupe", "drusa", "druse", "drusi", "druso", "duagi", "duale", "duali", "dubbi", "ducai", "ducea", "ducee", "duchi", "duina", "duine", "duini", "duino", "dulia", "dulie", "duole", "duoli", "duolo", "duomi", "duomo", "dupla", "duple", "dupli", "duplo", "durai", "durio", "durra", "durre", "duvet", "dviii", "ebani", "ebano", "ebbio", "ebbra", "ebbre", "ebbri", "ebbro", "ebeni", "ebeno", "ebeta", "ebete", "ebeti", "ebeto", "ebola", "ebole", "ebook", "ebrea", "ebree", "ebrei", "ebreo", "ebuli", "ebulo", "echei", "echeo", "echio", "ecidi", "edace", "edaci", "edema", "edemi", "edera", "edere", "edile", "edili", "edipi", "edipo", "edita", "edite", "editi", "edito", "edona", "edone", "edoni", "edono", "educa", "educe", "educi", "educo", "edule", "eduli", "efebi", "efebo", "efesi", "efori", "eforo", "egena", "egene", "egeni", "egeno", "egida", "egide", "egira", "egire", "egizi", "ekiti", "elafe", "elafi", "eleni", "eleva", "elevi", "elevo", "elica", "elice", "elici", "elida", "elide", "elidi", "elido", "eliea", "eliee", "elima", "elime", "elimi", "elimo", "elisa", "elise", "elisi", "eliso", "elogi", "eluda", "elude", "eludi", "eludo", "eluii", "elusa", "eluse", "elusi", "eluso", "eluvi", "emaci", "email", "emale", "emali", "emana", "emani", "emano", "emeri", "emero", "emesi", "emica", "emici", "emico", "emide", "emidi", "emina", "emine", "emiri", "emiro", "emise", "emisi", "emoji", "emoni", "empia", "empie", "empii", "empio", "emula", "emule", "emuli", "emulo", "enema", "enemi", "enfia", "enfie", "enfio", "engri", "ennea", "ennee", "ennei", "enneo", "enoli", "enolo", "entra", "entri", "entro", "enula", "enule", "eolia", "eolie", "eolio", "epica", "epici", "epico", "epoca", "epodi", "epodo", "epura", "epuri", "epuro", "equai", "erada", "erade", "eradi", "erado", "erano", "erari", "erasa", "erase", "erasi", "eraso", "erbai", "erbio", "erebi", "erebo", "ereda", "erede", "eredi", "eredo", "eremi", "eremo", "ereta", "ereti", "ereto", "erica", "eriga", "erige", "erigi", "erigo", "ernia", "ernie", "ernio", "eroda", "erode", "erodi", "erodo", "eroga", "erogo", "erosa", "erose", "erosi", "eroso", "errai", "eruca", "erula", "erule", "eruli", "erulo", "erzya", "esala", "esali", "esalo", "esame", "esami", "esani", "esano", "esche", "eschi", "esiga", "esige", "esigi", "esigo", "esile", "esili", "esima", "esime", "esimi", "esimo", "esipi", "esipo", "esita", "esiti", "esito", "esizi", "esodi", "esodo", "esone", "esoni", "esora", "esori", "esoro", "esosa", "esose", "esosi", "esoso", "espia", "espii", "espio", "essai", "estia", "estie", "estii", "estio", "estri", "estro", "estua", "estui", "estuo", "esula", "esule", "esuli", "esulo", "esuma", "esumi", "esumo", "etani", "etano", "etate", "etati", "etene", "eteni", "etera", "etere", "eteri", "etero", "etesi", "ethos", "etica", "etici", "etico", "etile", "etili", "etimi", "etimo", "etini", "etino", "etnea", "etnee", "etnei", "etneo", "etnia", "etnie", "etola", "etole", "etoli", "etolo", "eutri", "evada", "evade", "evadi", "evado", "evasa", "evase", "evasi", "evaso", "evira", "eviri", "eviro", "evita", "eviti", "evito", "evoca", "evoco", "extra", "fabri", "fabro", "facce", "facci", "facto", "faggi", "fagli", "faida", "faide", "faina", "faine", "falba", "falbe", "falbi", "falbo", "falca", "falce", "falci", "falco", "falda", "falde", "faldi", "faldo", "falla", "falle", "falli", "fallo", "falsa", "false", "falsi", "falso", "famai", "fammi", "fanga", "fango", "fanne", "fanno", "fante", "fanti", "farad", "farai", "farce", "farci", "farda", "farde", "farea", "farei", "farla", "farle", "farli", "farlo", "farmi", "farne", "farri", "farro", "farsa", "farse", "farsi", "farso", "farti", "farvi", "fasai", "fasce", "fasci", "fasta", "faste", "fasti", "fasto", "fatai", "fatta", "fatte", "fatti", "fatto", "fatua", "fatue", "fatui", "fatuo", "fatwa", "fauce", "fauci", "fauna", "faune", "fauni", "fauno", "fauve", "favai", "faxai", "feace", "feaci", "febea", "febee", "febei", "febeo", "fecce", "fedai", "felce", "felci", "fella", "felle", "felli", "fello", "felpa", "felpe", "felpi", "felpo", "felse", "felsi", "felze", "felzi", "femme", "fence", "fenda", "fende", "fendi", "fendo", "feria", "ferie", "ferii", "ferla", "ferle", "ferma", "ferme", "fermi", "fermo", "ferra", "ferri", "ferro", "fersa", "ferse", "ferva", "ferve", "fervi", "fervo", "ferza", "ferze", "ferzi", "ferzo", "fessa", "fesse", "fessi", "fesso", "festa", "feste", "festi", "festo", "fetta", "fette", "feudi", "feudo", "fiaba", "fiabe", "fiala", "fiale", "fiani", "fiano", "fiata", "fiate", "fiati", "fiato", "fibra", "fibre", "ficca", "ficco", "ficea", "ficee", "fiche", "fichi", "ficus", "fidai", "fiele", "fieli", "fieni", "fieno", "fiera", "fiere", "fieri", "fiero", "fighe", "fighi", "figli", "filai", "filli", "fillo", "filma", "filmi", "filmo", "filza", "filze", "finca", "finga", "finge", "fingi", "fingo", "finii", "finna", "finne", "finni", "finno", "finse", "finsi", "finta", "finte", "finti", "finto", "fioca", "fioco", "fiora", "fiore", "fiori", "fioro", "fiote", "fioti", "firma", "firme", "firmi", "firmo", "fisai", "fisco", "fissa", "fisse", "fissi", "fisso", "fitta", "fitte", "fitti", "fitto", "fiume", "fiumi", "fiuta", "fiuti", "fiuto", "flake", "flana", "flani", "flano", "flash", "flati", "flato", "flava", "flave", "flavi", "flavo", "flebo", "fleti", "fleto", "flirt", "flora", "flore", "fluii", "fobia", "fobie", "focea", "focee", "focei", "foceo", "foche", "fochi", "focus", "fodri", "fodro", "fogge", "foggi", "foghe", "fogli", "fogna", "fogne", "fogni", "fogno", "foiba", "foibe", "folce", "folco", "folio", "folla", "folle", "folli", "follo", "folta", "folte", "folti", "folto", "fonai", "fonda", "fonde", "fondi", "fondo", "fonia", "fonie", "fonte", "fonti", "forai", "forca", "force", "forci", "forge", "forgi", "forma", "forme", "formi", "formo", "forni", "forno", "forra", "forre", "forse", "forte", "forti", "forum", "forza", "forze", "forzi", "forzo", "fosca", "fosco", "fossa", "fosse", "fossi", "fosso", "foste", "fosti", "fotta", "fotte", "fotti", "fotto", "fovea", "fovee", "foyer", "fraga", "frale", "frali", "frame", "frana", "frane", "frani", "frano", "frase", "frasi", "frate", "frati", "frega", "fregi", "frego", "frema", "freme", "fremi", "fremo", "frena", "freni", "freno", "freon", "fresa", "frese", "fresi", "freso", "frigi", "frigo", "frine", "frini", "frisa", "frisi", "friso", "froda", "frode", "frodi", "frodo", "froge", "fruga", "frugo", "fruii", "ftori", "ftoro", "fuchi", "fuffa", "fuffe", "fugai", "fugga", "fugge", "fuggi", "fuggo", "fughe", "fughi", "fulbe", "fulbi", "fulga", "fulge", "fulgi", "fulgo", "fulsa", "fulse", "fulsi", "fulso", "fulva", "fulve", "fulvi", "fulvo", "fumai", "fumea", "fumee", "fumei", "fumeo", "fumma", "fummi", "fummo", "funai", "fundo", "funga", "funge", "fungi", "fungo", "funky", "funse", "funsi", "funta", "funte", "funti", "funto", "fuoco", "fuori", "furai", "furba", "furbe", "furbi", "furbo", "furca", "furia", "furie", "furio", "furti", "furto", "fusai", "fusta", "fuste", "fusti", "fusto", "futon", "fuxia", "fuxie", "fuzzy", "gabba", "gabbi", "gabbo", "gaela", "gaele", "gaeli", "gaelo", "gaffa", "gaffe", "gagge", "gaggi", "galea", "galee", "galei", "galeo", "galgo", "galio", "galla", "galle", "galli", "gallo", "gamba", "gambe", "gambi", "gambo", "gamia", "gamie", "gamma", "gamme", "ganci", "ganda", "gande", "ganga", "gange", "ganza", "ganze", "ganzi", "ganzo", "garba", "garbe", "garbi", "garbo", "garga", "gargo", "garni", "garza", "garze", "garzi", "garzo", "gasai", "gasco", "gassa", "gasse", "gassi", "gasso", "gatta", "gatte", "gatti", "gatto", "gauda", "gaude", "gaudi", "gaudo", "gauge", "gauli", "gaulo", "gauta", "gaute", "gauti", "gauto", "gazai", "gazza", "gazze", "gazzi", "gazzo", "gechi", "gelai", "gelao", "gelsa", "gelse", "gelsi", "gelso", "gemei", "gemma", "gemme", "gemmi", "gemmo", "genai", "genia", "genie", "genio", "genoa", "gente", "genti", "genue", "geode", "geodi", "geomi", "gerba", "gerbe", "gergo", "gerla", "gerle", "gerli", "gerlo", "germa", "germe", "germi", "gessa", "gessi", "gesso", "gesta", "gesti", "gesto", "getta", "getti", "getto", "ghali", "ghega", "ghegi", "ghego", "ghiri", "ghiro", "ghisa", "ghise", "giace", "giaci", "giaco", "giada", "giade", "giani", "giano", "giara", "giare", "giava", "giave", "gibbi", "gibbo", "gighe", "gigli", "gilda", "gilde", "gilet", "gimmo", "ginna", "ginni", "ginno", "gioca", "gioco", "giogo", "gioia", "gioie", "gioii", "gioio", "giova", "giovi", "giovo", "girai", "girci", "girei", "girii", "girio", "girla", "girle", "girli", "girlo", "girmi", "girne", "girsi", "girti", "girvi", "gisse", "gissi", "giste", "gisti", "gitta", "gitti", "gitto", "giuba", "giube", "giuda", "giuli", "giura", "giure", "giuri", "giuro", "giuso", "gladi", "gleba", "glebe", "glena", "glene", "gleni", "glifi", "glifo", "globe", "globi", "globo", "glomi", "glomo", "glori", "gluma", "glume", "gnidi", "gnome", "gnomi", "gnomo", "gnosi", "gnuda", "gnude", "gnudi", "gnudo", "gobba", "gobbe", "gobbi", "gobbo", "gocce", "gocci", "godei", "godii", "godio", "goffa", "goffe", "goffi", "goffo", "gogna", "gogne", "goldi", "golea", "golei", "goleo", "golfi", "golfo", "golia", "golpe", "gombe", "gombi", "gombo", "gomma", "gomme", "gommi", "gommo", "gonda", "gonde", "gondi", "gondo", "gonfa", "gonfe", "gonfi", "gonfo", "gonga", "gonio", "gonja", "gonna", "gonne", "gonza", "gonze", "gonzi", "gonzo", "gordi", "gorga", "gorge", "gorgo", "gorna", "gorne", "gotha", "gotta", "gotte", "gotti", "gotto", "gouda", "gozzi", "gozzo", "grada", "grade", "gradi", "grado", "grafi", "grafo", "graia", "graie", "graii", "graio", "grama", "grame", "grami", "gramo", "grana", "grane", "grani", "grano", "grata", "grate", "grati", "grato", "grava", "grave", "gravi", "gravo", "grazi", "greca", "greci", "greco", "gremi", "greti", "greto", "greve", "grevi", "grica", "grici", "grico", "grida", "gride", "gridi", "grido", "grifa", "grifi", "grifo", "grigi", "grola", "grole", "groma", "grome", "grufa", "grufi", "grufo", "gruga", "grugo", "gruma", "grume", "grumi", "grumo", "grusi", "guaco", "guada", "guade", "guadi", "guado", "guaii", "guaio", "guani", "guano", "guari", "guata", "guati", "guato", "gufai", "guida", "guide", "guidi", "guido", "guina", "guini", "guino", "guisa", "guise", "gulag", "gurge", "gurgi", "gusci", "gusla", "gusta", "gusti", "gusto", "gutea", "gutee", "gutei", "guteo", "gutti", "gutto", "guzla", "guzle", "gwari", "hafni", "haida", "haiku", "hakka", "hallo", "hamza", "hanno", "harem", "haute", "hedge", "hello", "henna", "henne", "hertz", "hevea", "hevee", "hijab", "hindi", "hobby", "hokka", "hokke", "hokki", "hokko", "holmi", "hotel", "house", "huave", "huavi", "huchi", "hudna", "iacea", "iacee", "iarda", "iarde", "ibera", "ibere", "iberi", "ibero", "iblea", "iblee", "iblei", "ibleo", "icari", "icena", "icene", "iceni", "iceno", "icona", "icone", "icore", "icori", "ictus", "idali", "iddia", "iddie", "iddio", "ideai", "idoli", "idolo", "idria", "idrie", "iella", "ielle", "iesta", "ieste", "iesti", "iesto", "ietta", "ietti", "ietto", "ifale", "ifali", "ifema", "ifemi", "igloo", "ignea", "ignee", "ignei", "igneo", "ilare", "ilari", "ilice", "ilici", "ilide", "ilidi", "illea", "illee", "illei", "illeo", "ilota", "ilote", "iloti", "image", "imago", "imani", "imano", "imati", "imene", "imeni", "imita", "imiti", "imito", "inala", "inali", "inalo", "inane", "inani", "incoa", "incoi", "incoo", "india", "indie", "indio", "infoi", "infra", "ingoi", "ingri", "inizi", "inlei", "inlui", "inmia", "inmio", "inoli", "inoma", "inomi", "inope", "inopi", "insce", "insci", "insta", "insti", "insto", "intra", "intro", "inula", "inule", "inuma", "inumi", "inumo", "invai", "invia", "invii", "invio", "iodai", "iodio", "ioide", "ioidi", "iolla", "iolle", "ionia", "ionie", "ionio", "ipate", "ipati", "ippia", "ippie", "ippii", "ippio", "irace", "iraci", "irata", "irate", "irati", "irato", "irchi", "irida", "iride", "iridi", "irido", "irite", "iriti", "iroki", "iroko", "irosa", "irose", "irosi", "iroso", "irula", "ischi", "islam", "isodi", "isola", "isole", "isoli", "isolo", "isopi", "isopo", "issai", "istai", "istle", "istmi", "istmo", "isuri", "isuro", "itaci", "itaco", "itala", "itale", "itali", "italo", "itera", "iteri", "itero", "iucca", "iulca", "iulco", "iurta", "iurte", "ivata", "ivate", "ivati", "ivato", "jeans", "jihad", "jolly", "joule", "jumbo", "junci", "junco", "kaaba", "kakwa", "kamti", "kanji", "kansa", "kaone", "kaoni", "kappa", "karma", "kasba", "kayak", "kebab", "kendo", "khasi", "kiowa", "kissi", "kitai", "kiwai", "koala", "konde", "kondi", "konga", "konge", "kongi", "kongo", "konta", "kulla", "kulle", "kulli", "kullo", "kunta", "kurda", "kurde", "kurdi", "kurdo", "kwena", "kyrie", "labbi", "labbo", "labda", "labio", "labri", "labro", "lacca", "lacce", "lacci", "lacco", "ladra", "ladre", "ladri", "ladro", "laghi", "lagna", "lagne", "lagni", "lagno", "laica", "laici", "laico", "laida", "laide", "laidi", "laido", "lamai", "lamba", "lambe", "lambi", "lambo", "lamia", "lamie", "lamio", "lampa", "lampe", "lampi", "lampo", "lanca", "lance", "lanci", "landa", "lande", "lanea", "lanee", "lanei", "laneo", "lanfa", "lanfe", "langa", "lange", "lania", "lanio", "lanzi", "lanzo", "lapis", "lappa", "lappe", "lappi", "lappo", "larda", "lardi", "lardo", "larga", "large", "largo", "larva", "larve", "larvi", "larvo", "lasca", "lasci", "lasco", "laser", "lassa", "lasse", "lassi", "lasso", "lasta", "laste", "latra", "latri", "latro", "latta", "latte", "latti", "latto", "lauda", "laude", "laudi", "laura", "laure", "lauri", "lauro", "lauta", "laute", "lauti", "lauto", "lavai", "lavia", "lavie", "lavra", "lavre", "lazza", "lazze", "lazzi", "lazzo", "leale", "leali", "lebbi", "lecca", "lecce", "lecci", "lecco", "legai", "legga", "legge", "leggi", "leggo", "leghe", "leghi", "legna", "legni", "legno", "lella", "lelle", "lelli", "lello", "lembi", "lembo", "lemma", "lemme", "lemmi", "lemmo", "lemna", "lemne", "lenca", "lenci", "lenea", "lenee", "lenei", "leneo", "lenii", "lenta", "lente", "lenti", "lento", "lenza", "lenze", "lenzi", "lenzo", "leone", "leoni", "leppa", "leppi", "leppo", "lepra", "lepre", "lepri", "lerce", "lerci", "lesbi", "lesbo", "lesca", "lessa", "lesse", "lessi", "lesso", "lesta", "leste", "lesti", "lesto", "letea", "letee", "letei", "leteo", "letri", "letro", "letta", "lette", "letti", "letto", "leuca", "leuci", "leuco", "leuti", "leuto", "levai", "lezia", "lezie", "lezio", "lezza", "lezze", "lezzi", "lezzo", "liana", "liane", "libai", "libra", "libre", "libri", "libro", "licci", "licei", "liceo", "licia", "licie", "licio", "lidar", "lidia", "lidie", "lidio", "lieta", "liete", "lieti", "lieto", "lieve", "lievi", "lifta", "lifti", "lifto", "ligei", "ligeo", "ligia", "ligie", "ligio", "ligre", "ligri", "lilla", "limai", "limbi", "limbo", "limii", "limio", "limma", "limmi", "linai", "lince", "linci", "linda", "linde", "lindi", "lindo", "linea", "linee", "linei", "lineo", "linfa", "linfe", "lingi", "linka", "linki", "linko", "lippa", "lippe", "lippi", "lippo", "liqua", "liqui", "liquo", "lisai", "lisca", "lisce", "lisci", "lissa", "lisse", "lissi", "lisso", "lista", "liste", "listi", "listo", "litai", "litio", "litra", "litre", "litri", "litro", "litta", "litte", "litui", "lituo", "liuti", "liuto", "lizza", "lizze", "lizzi", "lizzo", "lobby", "locai", "locca", "locco", "lochi", "lodai", "loden", "lodge", "loffa", "loffe", "loffi", "loffo", "lofio", "logga", "logge", "loggo", "loghi", "logia", "logli", "logra", "logri", "logro", "loica", "loici", "loico", "lolla", "lolle", "lombi", "lombo", "lompi", "lompo", "longa", "longo", "lonza", "lonze", "loppa", "loppe", "loppi", "loppo", "lorda", "lorde", "lordi", "lordo", "lorio", "losca", "losco", "lotta", "lotte", "lotti", "lotto", "lucci", "lucco", "lucea", "lucei", "luchi", "lucia", "lucie", "lucra", "lucri", "lucro", "ludra", "ludre", "ludri", "ludro", "luena", "luese", "luesi", "luffa", "luffe", "lugli", "lugre", "lugri", "lugro", "luigi", "lulla", "lulle", "lumai", "lumia", "lumie", "lumpi", "lumpo", "lunda", "lunga", "lungi", "lungo", "luogo", "lurca", "lurco", "lusca", "lusco", "lussa", "lussi", "lusso", "lutai", "lutea", "lutee", "lutei", "luteo", "lutta", "lutti", "lutto", "luvia", "luvie", "luvii", "luvio", "lycra", "macao", "macca", "macco", "machi", "macho", "macia", "macie", "macro", "madia", "madie", "madre", "madri", "mafia", "mafie", "mafio", "magai", "maggi", "maghe", "maghi", "magia", "magie", "magio", "magli", "magma", "magmi", "magna", "magne", "magni", "magno", "magra", "magre", "magri", "magro", "maide", "maidi", "maina", "maini", "maino", "malga", "malgo", "malia", "malie", "malli", "mallo", "malta", "malte", "malti", "malto", "malva", "malve", "mamba", "mambi", "mambo", "mamma", "mamme", "mammi", "mammo", "manaa", "manae", "manai", "manao", "manca", "mance", "manco", "manda", "mande", "mandi", "mando", "manga", "mangi", "mango", "mania", "manie", "manna", "manne", "mansa", "manse", "mansi", "manso", "manta", "mante", "manti", "manto", "manza", "manze", "manzi", "manzo", "maona", "maone", "maori", "mappa", "mappe", "mappi", "mappo", "marca", "marce", "marci", "marco", "marea", "maree", "margi", "margo", "marma", "marmi", "marmo", "marna", "marne", "marni", "marno", "marra", "marre", "marsa", "marse", "marsi", "marso", "marza", "marze", "marzi", "marzo", "masai", "massa", "masse", "massi", "masso", "masti", "matta", "matte", "matti", "matto", "maura", "maure", "mauri", "mauro", "mauve", "mauvi", "mazza", "mazze", "mazzi", "mazzo", "mbaka", "mbaya", "meaci", "meala", "meale", "meali", "mealo", "meami", "meane", "meano", "meare", "meata", "meate", "meati", "meato", "meava", "meavi", "meavo", "mecca", "media", "medie", "medio", "meino", "mekea", "mekee", "mekei", "mekeo", "melai", "melba", "melda", "melde", "meldi", "meldo", "melia", "melie", "melii", "melio", "melma", "melme", "meloe", "meloi", "menai", "mence", "menci", "menda", "mende", "mendi", "mendo", "menga", "menri", "mensa", "mense", "menta", "mente", "menti", "mento", "meoni", "meoti", "merca", "merce", "merci", "merco", "merda", "merde", "merga", "merge", "mergi", "mergo", "meria", "merie", "merio", "merla", "merle", "merli", "merlo", "mersa", "merse", "mersi", "merso", "mesca", "mesce", "mesci", "mesco", "messa", "messe", "messi", "messo", "mesta", "meste", "mesti", "mesto", "meteo", "metri", "metro", "metta", "mette", "metti", "metto", "mezza", "mezze", "mezzi", "mezzo", "miasi", "micca", "micce", "micci", "micco", "miche", "micia", "micie", "micio", "micro", "miele", "mieli", "mieta", "miete", "mieti", "mieto", "migma", "migmi", "migra", "migri", "migro", "milia", "milio", "mille", "milza", "milze", "mimai", "mimma", "mimme", "mimmi", "mimmo", "minai", "minea", "minee", "minei", "mineo", "minga", "minge", "mingi", "mingo", "minia", "minio", "minna", "minne", "minse", "minsi", "mioma", "miomi", "miope", "miopi", "miosi", "mirai", "mirra", "mirre", "mirri", "mirro", "mirti", "mirto", "misia", "misie", "misii", "misio", "missa", "missi", "misso", "mista", "miste", "misti", "misto", "mitra", "mitre", "mitri", "mitro", "mitti", "mitto", "mixai", "mixer", "mocci", "mochi", "mocoa", "modem", "modio", "moggi", "mogia", "mogie", "mogio", "mogli", "moina", "moine", "moira", "moire", "molai", "molca", "molce", "molla", "molle", "molli", "mollo", "molta", "molte", "molti", "molto", "molva", "molve", "monca", "monco", "monda", "monde", "mondi", "mondo", "monna", "monne", "monta", "monte", "monti", "monto", "moqui", "morai", "morbi", "morbo", "morda", "morde", "mordi", "mordo", "morfi", "morfo", "moria", "morie", "morii", "morra", "morre", "morsa", "morse", "morsi", "morso", "morta", "morte", "morti", "morto", "morva", "morve", "mosca", "mosce", "mosci", "mosco", "mossa", "mosse", "mossi", "mosso", "mosti", "mosto", "motta", "motte", "motti", "motto", "mouse", "movie", "mozza", "mozze", "mozzi", "mozzo", "mucca", "mucci", "mucco", "muchi", "mudai", "muffa", "muffe", "muffi", "muffo", "mufti", "mughi", "mugli", "mulsi", "mulso", "multa", "multe", "multi", "multo", "mundi", "munga", "munge", "mungi", "mungo", "munii", "munse", "munsi", "munta", "munte", "munti", "munto", "muoia", "muoio", "muone", "muoni", "muore", "muori", "muova", "muove", "muovi", "muovo", "murai", "murge", "muria", "murie", "murmi", "murra", "murre", "musai", "musco", "musei", "museo", "mussa", "musse", "mussi", "musso", "mutai", "mutua", "mutue", "mutui", "mutuo", "nabla", "nabli", "nadir", "nafta", "nafte", "nahua", "naibi", "naide", "naidi", "naira", "nakfa", "nanfa", "nanfe", "nanna", "nanne", "nante", "nanzi", "napea", "napee", "nappa", "nappe", "nappi", "nappo", "narco", "nardi", "nardo", "narra", "narri", "narro", "nasai", "nasca", "nasce", "nasci", "nasco", "nashi", "naspi", "naspo", "nassa", "nasse", "nassi", "nasso", "nasua", "nasue", "natai", "natia", "natie", "natii", "natio", "natta", "natte", "nause", "nauta", "nauti", "ndoga", "ndoge", "ndogi", "ndogo", "nebbi", "necai", "necce", "necci", "nechi", "negai", "neghi", "negli", "nella", "nelle", "nello", "nembi", "nembo", "nemea", "nemee", "nemei", "nemeo", "nence", "nenci", "nenia", "nenie", "nerba", "nerbi", "nerbo", "nervi", "nervo", "nesce", "nesci", "nessi", "nesso", "nesta", "nesti", "nesto", "netta", "nette", "netti", "netto", "neuma", "neumi", "neura", "neure", "neuri", "neuro", "nevai", "ngala", "nguni", "nibbi", "nicce", "nicci", "niego", "nievi", "nievo", "nimbi", "nimbo", "ninfa", "ninfe", "ninja", "ninna", "ninne", "ninni", "ninno", "niobi", "nisba", "nitra", "nitri", "nitro", "niuna", "niune", "niuni", "niuno", "nivea", "nivee", "nivei", "niveo", "nobel", "nocca", "noema", "noemi", "noesi", "nogai", "noghi", "nomai", "nomea", "nomee", "nonio", "nonna", "nonne", "nonni", "nonno", "noria", "norie", "norma", "norme", "normi", "normo", "norna", "norne", "notai", "notta", "notte", "notti", "notto", "novai", "novio", "nozze", "nuche", "nudai", "nugae", "nulla", "nulle", "nulli", "nullo", "nummi", "nummo", "nunci", "nunzi", "nuoce", "nuoci", "nuora", "nuore", "nuota", "nuoti", "nuoto", "nuova", "nuove", "nuovi", "nuovo", "nurse", "nutka", "nutra", "nutre", "nutri", "nutro", "nyala", "nylon", "obbli", "obeli", "obelo", "obera", "oberi", "obero", "obesa", "obese", "obesi", "obeso", "obice", "obici", "obiti", "obito", "oblai", "oblia", "oblii", "oblio", "oboli", "obolo", "ocche", "occhi", "ocimi", "ocimo", "ocrea", "ocree", "oculi", "oculo", "odano", "oddio", "odiai", "odici", "odila", "odile", "odili", "odilo", "odimi", "odine", "odino", "odire", "odita", "odite", "oditi", "odito", "odiva", "odivi", "odivo", "odono", "odora", "odore", "odori", "odoro", "odrai", "oecio", "offra", "offre", "offri", "offro", "ofide", "ofidi", "ofite", "ofiti", "ogiva", "ogive", "oiana", "oidio", "okapi", "oleai", "olfai", "oliai", "olino", "olire", "olita", "olite", "oliti", "olito", "oliva", "olive", "olivi", "olivo", "olmio", "olona", "olone", "olora", "olore", "olori", "oloro", "oltra", "oltre", "omaha", "omani", "omano", "omari", "omaro", "omasi", "omaso", "ombra", "ombre", "ombri", "ombro", "omega", "omeri", "omero", "omese", "omesi", "omini", "omino", "omise", "omisi", "omnia", "omone", "omoni", "oncia", "ondai", "onera", "onere", "oneri", "onero", "onese", "onesi", "onice", "onici", "onora", "onore", "onori", "onoro", "onrai", "opaca", "opaci", "opaco", "opale", "opali", "opata", "opera", "opere", "operi", "opero", "opica", "opici", "opico", "opima", "opime", "opimi", "opimo", "opina", "opini", "opino", "oppia", "oppio", "optai", "oraci", "orafa", "orafe", "orafi", "orafo", "orala", "orale", "orali", "oralo", "orami", "orane", "orano", "orare", "orari", "orata", "orate", "orati", "orato", "orava", "oravi", "oravo", "orbai", "orche", "orchi", "orcio", "ordii", "orfea", "orfee", "orgia", "oribi", "orice", "orici", "orige", "origi", "orina", "orine", "orini", "orino", "orlai", "ormai", "ornai", "orobi", "oroci", "oroki", "oroma", "orome", "oromi", "oromo", "orrea", "orree", "orrei", "orreo", "orrii", "orzai", "osaci", "osage", "osagi", "osala", "osale", "osali", "osalo", "osami", "osane", "osano", "osare", "osata", "osate", "osati", "osato", "osava", "osavi", "osavo", "oscar", "osche", "osino", "osmio", "ossea", "ossee", "ossei", "osseo", "ossia", "ostai", "osteo", "ostia", "ostie", "ostio", "ostri", "ostro", "otica", "otici", "otico", "otide", "otidi", "otite", "otiti", "ottri", "ovaia", "ovaie", "ovaio", "ovale", "ovali", "ovari", "ovata", "ovate", "ovati", "ovato", "ovest", "ovile", "ovili", "ovina", "ovine", "ovini", "ovino", "ovoli", "ovolo", "ovula", "ovuli", "ovulo", "ovvia", "ovvie", "ovvii", "ovvio", "oyana", "ozena", "ozene", "oziai", "ozino", "ozoni", "ozono", "pabbi", "pacai", "pacca", "pacco", "pachi", "pacia", "pacio", "pacta", "padda", "padre", "padri", "paese", "paesi", "pafia", "pafie", "pafii", "pafio", "pagai", "paggi", "paghe", "paghi", "pagri", "pagro", "paini", "paino", "paisa", "palai", "palco", "palea", "palee", "palei", "paleo", "palio", "palla", "palle", "palli", "pallo", "palma", "palme", "palmi", "palmo", "palpa", "palpi", "palpo", "palta", "palte", "pampa", "panai", "panca", "pance", "panda", "pande", "pandi", "pando", "pania", "panie", "panna", "panne", "panni", "panno", "pansa", "panse", "pansi", "panso", "panza", "panze", "paoli", "paolo", "pappa", "pappe", "pappi", "pappo", "papua", "parai", "parca", "parce", "parci", "parco", "pardi", "pardo", "parei", "pareo", "paria", "parie", "parii", "pario", "parka", "parla", "parli", "parlo", "parma", "parme", "parra", "parre", "parsa", "parse", "parsi", "parso", "parta", "parte", "parti", "parto", "parva", "parve", "parvi", "parvo", "pasca", "pasce", "pasci", "pasco", "passa", "passe", "passi", "passo", "pasta", "paste", "pasti", "pasto", "patia", "patie", "patii", "patio", "patre", "patri", "patta", "patte", "patti", "patto", "paura", "paure", "pausa", "pause", "pausi", "pauso", "pavia", "pavie", "pazza", "pazze", "pazzi", "pazzo", "peace", "peaci", "peana", "peani", "peata", "peate", "pecca", "pecce", "pecci", "pecco", "pechi", "pecia", "pecie", "pedio", "pegni", "pegno", "pekoe", "pelai", "pelea", "pelee", "pelei", "peleo", "pelle", "pelli", "pelta", "pelte", "pelvi", "penai", "penda", "pende", "pendi", "pendo", "penei", "peneo", "penna", "penne", "pensa", "pensi", "penso", "penta", "pente", "penti", "pento", "peoci", "peone", "peoni", "peota", "peote", "pepai", "pepli", "peplo", "pepsi", "perca", "perda", "perde", "perdi", "perdo", "perii", "perla", "perle", "perni", "perno", "persa", "perse", "persi", "perso", "pervi", "pesai", "pesca", "pesce", "pesci", "pesco", "pesta", "peste", "pesti", "pesto", "petai", "petti", "petto", "pezza", "pezze", "pezzi", "pezzo", "phone", "photo", "phyla", "piace", "piaci", "piada", "piade", "piaga", "piago", "piala", "piale", "piali", "pialo", "piami", "piamo", "piana", "piane", "piani", "piano", "piare", "piata", "piate", "piati", "piato", "piava", "piavi", "piavo", "picca", "picce", "picco", "picea", "picee", "picei", "piceo", "piche", "pichi", "picio", "piede", "piedi", "piega", "piego", "piena", "piene", "pieni", "pieno", "pieri", "piese", "piesi", "pieta", "piete", "pieve", "pievi", "pighi", "pigia", "pigii", "pigio", "pigli", "pigna", "pigne", "pigra", "pigre", "pigri", "pigro", "piino", "pilai", "pilei", "pileo", "pilla", "pilli", "pillo", "pinai", "pinca", "pince", "pinco", "pinea", "pinee", "pinei", "pineo", "pinna", "pinne", "pinsa", "pinse", "pinta", "pinte", "pinti", "pinto", "pinza", "pinze", "pinzi", "pinzo", "pioda", "piode", "piola", "piole", "pioli", "piolo", "pione", "pioni", "piota", "piote", "pioti", "pioto", "piova", "piove", "piovi", "piovo", "pipai", "pipia", "pipio", "pippa", "pippe", "pippi", "pippo", "pipra", "pipre", "pirla", "pirli", "pirlo", "pisce", "pisci", "pissi", "pista", "piste", "pitia", "pitie", "pitta", "pitte", "pitti", "pitto", "piuma", "piume", "piumi", "piumo", "pizia", "pizie", "pizio", "pizza", "pizze", "pizzi", "pizzo", "placa", "place", "placo", "plaga", "plagi", "plana", "plani", "plano", "plebe", "plebi", "plica", "plico", "ploia", "ploie", "plora", "plori", "ploro", "ploti", "ploto", "plugo", "pluvi", "pocci", "poche", "pochi", "podio", "podza", "podze", "podzi", "podzo", "poema", "poemi", "poeta", "poeti", "poeto", "pogai", "pogge", "poggi", "poghi", "poise", "poker", "polca", "polii", "polio", "polka", "polke", "polla", "polle", "polli", "pollo", "polpa", "polpe", "polpi", "polpo", "polsi", "polso", "polta", "polte", "polve", "polvi", "pomai", "pomfi", "pomfo", "pompa", "pompe", "pompi", "pompo", "ponce", "ponci", "ponda", "pondi", "pondo", "ponfi", "ponfo", "ponga", "pongo", "ponta", "ponte", "ponti", "ponto", "ponza", "ponzi", "ponzo", "poppa", "poppe", "poppi", "poppo", "porca", "porci", "porco", "porga", "porge", "porgi", "porgo", "porla", "porle", "porli", "porlo", "pormi", "porne", "porno", "porre", "porri", "porro", "porse", "porsi", "porta", "porte", "porti", "porto", "porvi", "posai", "posca", "possa", "posse", "possi", "posso", "posta", "poste", "posti", "posto", "potai", "potei", "potta", "potte", "poule", "pozza", "pozze", "pozzi", "pozzo", "praho", "prana", "prasi", "prati", "prato", "prava", "prave", "pravi", "pravo", "prece", "preci", "preco", "preda", "prede", "predi", "predo", "prega", "pregi", "prego", "preli", "prema", "preme", "premi", "premo", "presa", "prese", "presi", "preso", "prete", "preti", "previ", "price", "pride", "prima", "prime", "primi", "primo", "priva", "prive", "privi", "privo", "proba", "probe", "probi", "probo", "proci", "proco", "proda", "prode", "prodi", "prole", "proli", "promo", "prona", "prone", "proni", "prono", "prora", "prore", "prosa", "prose", "prosi", "proso", "proti", "proto", "prova", "prove", "provi", "provo", "prozi", "pruda", "prude", "prudi", "prudo", "pruna", "prune", "pruni", "pruno", "psico", "psoco", "psofi", "psofo", "ptini", "ptino", "ptosi", "pucci", "puffi", "puffo", "pugge", "puggi", "pugio", "pugna", "pugne", "pugni", "pugno", "puina", "puine", "pulca", "pulce", "pulci", "pulii", "pulka", "pulke", "pulla", "pulle", "pulli", "pullo", "pulsa", "pulsi", "pulso", "punci", "punga", "punge", "pungi", "pungo", "punii", "punse", "punsi", "punta", "punte", "punti", "punto", "puppa", "puppi", "puppo", "purai", "purea", "puree", "purga", "purgo", "pussa", "pussi", "pusso", "pusta", "puste", "putai", "putii", "putre", "putri", "putta", "putte", "putti", "putto", "puzza", "puzze", "puzzi", "puzzo", "qasba", "qasbe", "qibla", "quada", "quade", "quadi", "quado", "quale", "quali", "quare", "quark", "quasi", "queta", "queto", "quici", "quija", "quije", "quiji", "quijo", "quina", "quine", "quini", "quino", "quita", "quiti", "quito", "quivi", "quota", "quote", "quoti", "quoto", "rabbi", "rabia", "racca", "racco", "racla", "racle", "radia", "radio", "radon", "raffa", "raffe", "raffi", "raffo", "rafia", "rafie", "raggi", "raghe", "ragia", "ragie", "ragli", "ragna", "ragne", "ragni", "ragno", "raiai", "raide", "raidi", "raino", "raita", "raiti", "raito", "ralla", "ralle", "ralli", "rallo", "ramai", "rambo", "ramea", "ramee", "ramei", "ramen", "rameo", "ramia", "ramie", "ramni", "ramno", "rampa", "rampe", "rampi", "rampo", "ranca", "rance", "ranci", "ranco", "randa", "rande", "ranfi", "range", "rango", "ranni", "ranno", "rapai", "rapii", "rappa", "rappe", "rasai", "rasce", "rasoi", "raspa", "raspe", "raspi", "raspo", "rasta", "ratea", "ratei", "rateo", "ratio", "ratta", "ratte", "ratti", "ratto", "rauca", "rauco", "razza", "razze", "razzi", "razzo", "reale", "reali", "reame", "reami", "reati", "reato", "rebbi", "rebus", "recai", "recei", "rechi", "recto", "redai", "redii", "reese", "reesi", "regga", "regge", "reggi", "reggo", "regia", "regie", "regio", "regna", "regni", "regno", "reide", "reidi", "reiki", "relax", "remai", "renai", "renda", "rende", "rendi", "rendo", "renio", "renna", "renne", "rensa", "rense", "repli", "replo", "requi", "resca", "resia", "resie", "respi", "respo", "ressa", "resse", "ressi", "resta", "reste", "resti", "resto", "retai", "retea", "retee", "retei", "reteo", "retri", "retro", "retta", "rette", "retti", "retto", "reuma", "reumi", "rezza", "rezze", "rezzi", "rezzo", "riale", "riali", "riama", "riami", "riamo", "riara", "riari", "riaro", "ribes", "ricca", "ricce", "ricci", "ricco", "ridai", "ridda", "ridde", "riddi", "riddo", "ridia", "rieda", "riede", "riedi", "riedo", "riera", "rieri", "riero", "rifai", "riffa", "riffe", "rifui", "rigai", "rigge", "righe", "righi", "rigna", "rigni", "rigno", "rimai", "rioca", "rioco", "rioda", "riode", "riodi", "riodo", "rione", "rioni", "ripii", "risai", "risei", "risia", "risii", "risma", "risme", "rispi", "rissa", "risse", "rissi", "risso", "ritma", "ritmi", "ritmo", "ritta", "ritte", "ritti", "ritto", "riusa", "riusi", "riuso", "rivai", "rizza", "rizze", "rizzi", "rizzo", "roana", "roane", "roani", "roano", "robbi", "robot", "rocca", "rocce", "rocco", "roche", "rochi", "rodai", "rodei", "rodeo", "rodia", "rodie", "rodii", "rodio", "roese", "roesi", "rogai", "rogge", "roggi", "roghi", "rogna", "rogne", "rogni", "rogno", "rolla", "rolli", "rollo", "romba", "rombe", "rombi", "rombo", "romea", "romee", "romei", "romeo", "rompa", "rompe", "rompi", "rompo", "ronca", "ronco", "ronda", "ronde", "rondi", "rondo", "ronfa", "ronfe", "ronfi", "ronfo", "ronza", "ronzi", "ronzo", "rorai", "rosai", "rosea", "rosee", "rosei", "roseo", "rospi", "rospo", "rossa", "rosse", "rossi", "rosso", "rosta", "roste", "rosti", "rosto", "rotai", "rotea", "rotei", "roteo", "rotta", "rotte", "rotti", "rotto", "rouge", "rovai", "rozza", "rozze", "rozzi", "rozzo", "rubai", "rubbi", "rubbo", "rubea", "rubee", "rubei", "rubeo", "rubli", "rublo", "rubra", "rubre", "rubri", "rubro", "ruche", "ruese", "ruesi", "ruffa", "ruffe", "rugai", "rugby", "rughe", "rughi", "rugli", "ruina", "ruini", "ruino", "rulla", "rulli", "rullo", "rumai", "rumba", "rumbe", "rumme", "rummi", "ruoli", "ruolo", "ruota", "ruote", "ruoti", "ruoto", "rupia", "rupie", "ruppe", "ruppi", "rusca", "rusco", "ruspa", "ruspe", "ruspi", "ruspo", "russa", "russe", "russi", "russo", "rutta", "rutti", "rutto", "ruzza", "ruzze", "ruzzi", "ruzzo", "saale", "saali", "sabba", "sabbi", "sabea", "sabee", "sabei", "sabeo", "sabia", "sabie", "sabii", "sabio", "sabra", "sacca", "sacco", "sacia", "sacie", "sacio", "sacra", "sacre", "sacri", "sacro", "saffo", "sagge", "saggi", "saghe", "saghi", "sagii", "sagna", "sagni", "sagno", "sagra", "sagre", "sagri", "sagro", "saiga", "saime", "saimi", "salai", "salda", "salde", "saldi", "saldo", "salga", "salgo", "salii", "salio", "salma", "salme", "salmi", "salmo", "salpa", "salpe", "salpi", "salpo", "salsa", "salse", "salsi", "salso", "salta", "salti", "salto", "salva", "salve", "salvi", "salvo", "samba", "samia", "samie", "samii", "samio", "sanai", "sanie", "sanno", "sansa", "sanse", "santa", "sante", "santi", "santo", "saora", "sapio", "sappi", "sarai", "sarda", "sarde", "sardi", "sardo", "sarei", "sarge", "sargo", "sarta", "sarte", "sarti", "sarto", "sassi", "sasso", "sauna", "saune", "saura", "saure", "sauri", "sauro", "savia", "savie", "savio", "sazia", "sazie", "sazio", "sbafa", "sbafi", "sbafo", "sbava", "sbavi", "sbavo", "sboba", "sbobe", "sbora", "sbore", "sbovi", "sbovo", "sbuca", "sbuco", "scada", "scade", "scadi", "scado", "scafa", "scafe", "scafi", "scafo", "scala", "scale", "scali", "scalo", "scana", "scane", "scapa", "scapi", "scapo", "scari", "scaro", "scasa", "scasi", "scaso", "scava", "scavi", "scavo", "sceda", "scede", "scema", "sceme", "scemi", "scemo", "scena", "scene", "scesa", "scese", "scesi", "sceso", "schei", "schwa", "sciai", "scifi", "scifo", "scipa", "scipi", "scipo", "scira", "scire", "sciri", "sciro", "scita", "scite", "sciti", "scoda", "scodi", "scodo", "scoia", "scoio", "scola", "scoli", "scolo", "scopa", "scope", "scopi", "scopo", "scora", "score", "scori", "scoro", "scota", "scote", "scoti", "scoto", "scova", "scovi", "scovo", "scuce", "scuci", "scuda", "scudi", "scudo", "scuoi", "scura", "scure", "scuri", "scuro", "scusa", "scuse", "scusi", "scuso", "scuti", "scuto", "sdama", "sdami", "sdamo", "sdare", "sdata", "sdate", "sdati", "sdato", "sdava", "sdavi", "sdavo", "sdazi", "sdica", "sdice", "sdici", "sdico", "sdire", "sdite", "sdoga", "sdogo", "sdora", "sdori", "sdoro", "sdrai", "sduca", "sduco", "secai", "secca", "secce", "secco", "sechi", "sedai", "sedei", "sedia", "sedie", "sedio", "segai", "segga", "seggi", "seggo", "seghe", "seghi", "segna", "segni", "segno", "segua", "segue", "segui", "seguo", "seini", "seino", "selce", "selci", "selfa", "selfi", "selfo", "sella", "selle", "selli", "sello", "selva", "selve", "semai", "senna", "senne", "senni", "senno", "senoi", "sensi", "senso", "senta", "sente", "senti", "sento", "senza", "seppe", "seppi", "sepsi", "serba", "serbe", "serbi", "serbo", "seria", "serie", "serio", "sermo", "serpa", "serpe", "serpi", "serpo", "serra", "serre", "serri", "serro", "serti", "serto", "serva", "serve", "servi", "servo", "sesia", "sesie", "sessa", "sesse", "sessi", "sesso", "sesta", "seste", "sesti", "sesto", "setta", "sette", "setti", "setto", "sezza", "sezze", "sezzi", "sezzo", "sfama", "sfami", "sfamo", "sfare", "sfasa", "sfasi", "sfaso", "sfata", "sfate", "sfati", "sfato", "sfece", "sfeci", "sfera", "sfere", "sfida", "sfide", "sfidi", "sfido", "sfiga", "sfila", "sfili", "sfilo", "sfina", "sfini", "sfino", "sfizi", "sfoca", "sfoci", "sfoco", "sfoga", "sfogo", "sfora", "sfori", "sforo", "sfuma", "sfumi", "sfumo", "sfuri", "sfusa", "sfuse", "sfusi", "sfuso", "sgama", "sgami", "sgamo", "sgara", "sgari", "sgaro", "sgasa", "sgasi", "sgaso", "sgela", "sgeli", "sgelo", "sgola", "sgoli", "sgolo", "sgura", "sguri", "sguro", "shake", "shara", "share", "shari", "sharo", "shina", "shire", "siamo", "siano", "siate", "siche", "sicli", "siclo", "sidri", "sidro", "sieda", "siede", "siedi", "siedo", "siepa", "siepe", "siepi", "siepo", "sieri", "siero", "siete", "sigla", "sigle", "sigli", "siglo", "sigma", "sigmi", "sigua", "siici", "siila", "siile", "siili", "siilo", "siimi", "siine", "siiti", "silfi", "silfo", "silli", "sillo", "silos", "silvi", "sinti", "sipai", "sirma", "sirme", "sirte", "sirti", "sisma", "sismi", "sismo", "sitai", "sitii", "situa", "situi", "situo", "sizio", "sizza", "sizze", "skate", "skypa", "skypi", "skypo", "slama", "slami", "slamo", "slava", "slave", "slavi", "slavo", "slebi", "slebo", "slega", "slego", "slice", "slide", "sloga", "slogo", "sluma", "slumi", "slumo", "smaga", "smagi", "smago", "smani", "smela", "smeli", "smelo", "smera", "smeri", "smero", "smile", "smina", "smini", "smino", "smira", "smiri", "smiro", "smise", "smisi", "smoda", "smodi", "smodo", "smoke", "smova", "smove", "smovi", "smovo", "smura", "smuri", "smuro", "smusa", "smusi", "smuso", "snasa", "snasi", "snaso", "sneva", "snevi", "snevo", "snida", "snidi", "snido", "snipe", "snoda", "snodi", "snodo", "snuda", "snudi", "snudo", "soana", "soane", "soani", "soano", "soave", "soavi", "sobri", "socci", "socco", "socia", "socie", "socio", "sodai", "sodio", "soffi", "sofia", "sofie", "soghe", "sogli", "sogna", "sogni", "sogno", "solai", "solca", "solco", "solda", "soldi", "soldo", "solea", "solee", "solei", "soleo", "solfa", "solfe", "solfi", "solfo", "solgo", "solio", "solla", "solle", "solli", "sollo", "solta", "solte", "solti", "solto", "solva", "solve", "solvi", "solvo", "somma", "somme", "sommi", "sommo", "somni", "sonai", "sonar", "sonco", "sonda", "sonde", "sondi", "sondo", "songa", "songe", "songi", "songo", "sonii", "sonio", "sonni", "sonno", "sopii", "sopra", "sorai", "sorba", "sorbe", "sorbi", "sorbo", "sorca", "sorci", "sorda", "sorde", "sordi", "sordo", "sorga", "sorge", "sorgi", "sorgo", "sorra", "sorre", "sorsa", "sorse", "sorsi", "sorso", "sorta", "sorte", "sorti", "sorto", "sosia", "sosta", "soste", "sosti", "sosto", "sotho", "sotta", "sotti", "sotto", "sovra", "sozio", "sozza", "sozze", "sozzi", "sozzo", "spada", "spade", "spago", "spaia", "spaio", "spala", "spali", "spalo", "spana", "spani", "spano", "spara", "spari", "sparo", "spasa", "spase", "spasi", "spaso", "spata", "spate", "spati", "spato", "spazi", "speck", "speco", "speda", "spedi", "spedo", "spela", "speli", "spelo", "speme", "spemi", "spene", "speni", "spepa", "spepe", "spera", "spere", "speri", "spero", "spesa", "spese", "spesi", "speso", "spezi", "spiai", "spica", "spiga", "spigo", "spike", "spina", "spine", "spini", "spino", "spira", "spire", "spiri", "spiro", "spola", "spole", "spone", "sponi", "spora", "spore", "sport", "sposa", "spose", "sposi", "sposo", "sprue", "spula", "spuli", "spulo", "spuma", "spume", "spumi", "spumo", "spura", "spuri", "spuro", "sputa", "sputi", "sputo", "stadi", "stage", "staia", "staio", "stame", "stami", "stana", "stani", "stano", "stara", "stare", "stari", "staro", "stasa", "stasi", "staso", "stata", "state", "stati", "stato", "stava", "stavi", "stavo", "steca", "stele", "steli", "stelo", "steno", "steri", "stero", "stesa", "stese", "stesi", "steso", "stibi", "stici", "stico", "stiga", "stigi", "stigo", "stila", "stile", "stili", "stilo", "stima", "stime", "stimi", "stimo", "stina", "stini", "stino", "stipa", "stipe", "stipi", "stipo", "stira", "stiri", "stiro", "stiva", "stive", "stivi", "stivo", "stoga", "stogo", "stoia", "stoio", "stola", "stole", "stoma", "stomi", "stona", "stone", "stoni", "stono", "store", "stori", "stria", "strie", "strio", "studi", "stufa", "stufe", "stufi", "stufo", "stura", "sture", "sturi", "sturo", "stuta", "stuti", "stuto", "style", "suari", "suave", "suavi", "subbi", "subii", "succi", "succo", "suchi", "sudai", "sugai", "sugga", "sugge", "suggi", "suggo", "sughi", "sugli", "sugna", "sugne", "suide", "suidi", "suina", "suine", "suini", "suino", "suite", "sulka", "sulla", "sulle", "sullo", "summa", "summe", "sunna", "sunne", "sunti", "sunto", "suola", "suole", "suoli", "suolo", "suona", "suoni", "suono", "suora", "suore", "super", "surfa", "surfi", "surfo", "surga", "surge", "surgi", "surgo", "surma", "surra", "surre", "surse", "sursi", "surta", "surte", "surti", "surto", "susci", "sushi", "sussi", "susta", "suste", "sutha", "suthe", "suthi", "sutho", "sutra", "sutri", "sutro", "suzza", "suzzi", "suzzo", "svaga", "svago", "svani", "svapa", "svapi", "svapo", "svari", "svasa", "svasi", "svaso", "svela", "sveli", "svelo", "svena", "sveni", "sveno", "sveva", "sveve", "svevi", "svevo", "sviai", "svina", "svini", "svino", "svisa", "svisi", "sviso", "svita", "sviti", "svito", "sviva", "svivi", "svivo", "svizi", "svola", "svoli", "svolo", "svota", "svoti", "svoto", "svuoi", "swazi", "tabla", "tacca", "tacce", "tacci", "tacco", "taffi", "tafia", "tafie", "tafii", "tafio", "tagga", "taggo", "tagli", "taide", "taidi", "taiga", "taiko", "taina", "taine", "taini", "taino", "talco", "talea", "talee", "talli", "tallo", "talpa", "talpe", "tamia", "tanai", "tanca", "tanco", "tanfa", "tanfi", "tanfo", "tanga", "tange", "tango", "tanna", "tanni", "tanno", "tanta", "tante", "tanti", "tanto", "tappa", "tappe", "tappi", "tappo", "tarai", "tarda", "tarde", "tardi", "tardo", "targa", "targo", "tarla", "tarli", "tarlo", "tarma", "tarme", "tarmi", "tarmo", "tarpa", "tarpi", "tarpo", "tarsi", "tasca", "tassa", "tasse", "tassi", "tasso", "tasta", "taste", "tasti", "tasto", "tatti", "tatto", "tatua", "tatui", "tatuo", "taura", "taure", "tauri", "tauro", "tazza", "tazze", "tebea", "tebee", "tebei", "tebeo", "tecca", "teche", "tecno", "tedia", "tedio", "tegea", "tegee", "tegei", "tegeo", "teghe", "teide", "teidi", "teina", "teine", "teita", "teite", "teiti", "telai", "temei", "tempa", "tempe", "tempi", "tempo", "tenda", "tende", "tendi", "tendo", "tenei", "tenga", "tenge", "tengo", "tenia", "tenie", "tenne", "tenni", "tenno", "tensa", "tense", "tenta", "tenti", "tento", "tenue", "tenui", "tenza", "tenze", "tepee", "teppa", "teppe", "terbi", "terga", "terge", "tergi", "tergo", "terme", "termo", "terna", "terne", "terni", "terno", "terra", "terre", "tersa", "terse", "tersi", "terso", "terza", "terze", "terzi", "terzo", "tesai", "tesla", "tesle", "tessa", "tesse", "tessi", "tesso", "testa", "teste", "testi", "testo", "tetra", "tetre", "tetri", "tetro", "tetta", "tette", "tetti", "tetto", "texta", "texte", "texti", "texto", "theta", "tiade", "tiadi", "tiara", "tiare", "tiasi", "tiaso", "tibia", "tibie", "tiene", "tieni", "tifai", "tigli", "tigna", "tigne", "tigni", "tigno", "tigra", "tigre", "tigri", "tigro", "tigua", "tilde", "tildi", "tilla", "tille", "tilli", "tillo", "timpa", "timpe", "tinca", "tinga", "tinge", "tingi", "tingo", "tinse", "tinsi", "tinta", "tinte", "tinti", "tinto", "tioli", "tiolo", "tirai", "tirsi", "tirso", "tizia", "tizie", "tizio", "tizzi", "tizzo", "tmesi", "toast", "tocai", "tocca", "tocco", "tochi", "toghe", "toghi", "togli", "tokai", "tolda", "tolde", "tolga", "tolgo", "tolla", "tolle", "tolse", "tolsi", "tolta", "tolte", "tolti", "tolto", "tomai", "tomba", "tombe", "tombi", "tombo", "tonai", "tonda", "tonde", "tondi", "tondo", "tonfa", "tonfi", "tonfo", "tonia", "tonie", "tonni", "tonno", "tonta", "tonte", "tonti", "tonto", "topoi", "toppa", "toppe", "toppi", "toppo", "toque", "torba", "torbe", "torbi", "torbo", "torca", "torce", "torci", "torco", "tordi", "tordo", "torea", "torei", "toreo", "torio", "torli", "torlo", "torma", "torme", "torna", "torni", "torno", "torre", "torri", "torse", "torsi", "torso", "torta", "torte", "torti", "torto", "torva", "torve", "torvi", "torvo", "tosai", "tosca", "tosco", "tossa", "tosse", "tossi", "tosso", "tosta", "toste", "tosti", "tosto", "totem", "tozza", "tozze", "tozzi", "tozzo", "trace", "traci", "trade", "trago", "trama", "trame", "trami", "tramo", "trana", "trani", "trano", "trans", "trapa", "trape", "trare", "trave", "travi", "trema", "tremi", "tremo", "trena", "treni", "treno", "trevi", "trevo", "triai", "tribi", "tribo", "tribu", "triga", "trike", "trina", "trine", "trini", "trino", "trita", "trite", "triti", "trito", "trivi", "troco", "troia", "troie", "troll", "trona", "trone", "troni", "trono", "tropi", "tropo", "trota", "trote", "trova", "trovi", "trovo", "truca", "truce", "truci", "truka", "truke", "tsuga", "tubai", "tufai", "tuffa", "tuffi", "tuffo", "tughe", "tulio", "tulle", "tumba", "tunna", "tunne", "tunni", "tunno", "tuona", "tuoni", "tuono", "turai", "turba", "turbe", "turbi", "turbo", "turca", "turco", "turma", "turme", "turna", "turni", "turno", "turpe", "turpi", "tusca", "tusco", "tutai", "tutor", "tutsi", "tutta", "tutte", "tutti", "tutto", "tuzia", "tuzie", "ubbia", "ubbie", "ubera", "ubere", "uberi", "ubero", "ubica", "ubico", "ubini", "ubino", "uccia", "uccio", "udire", "udita", "udite", "uditi", "udito", "udiva", "udivi", "udivo", "udrai", "udrei", "ufizi", "uggia", "uggii", "uggio", "ugnai", "ugola", "ugole", "ukase", "ukiyo", "ulama", "ulani", "ulano", "ulema", "ulese", "ulesi", "ulice", "ulici", "ulite", "uliti", "uliva", "ulive", "ulivi", "ulivo", "ultra", "ulula", "ulule", "ululi", "ululo", "umana", "umane", "umani", "umano", "umata", "umate", "umati", "umato", "umbra", "umbre", "umbri", "umbro", "umica", "umici", "umico", "umida", "umide", "umidi", "umido", "umile", "umili", "umore", "umori", "unari", "unica", "unici", "unico", "unire", "unita", "unite", "uniti", "unito", "univa", "univi", "univo", "unqua", "unque", "untai", "upupa", "upupe", "urali", "urati", "urato", "urese", "uresi", "urica", "urici", "urico", "urina", "urine", "urini", "urino", "urlai", "urlii", "urlio", "urone", "uroni", "urtai", "usaci", "usala", "usale", "usali", "usalo", "usami", "usane", "usano", "usare", "usata", "usate", "usati", "usato", "usava", "usavi", "usavo", "uscii", "uscio", "usino", "usura", "usure", "usuri", "usuro", "uteri", "utero", "utese", "utesi", "utile", "utili", "uvala", "uvale", "uvina", "uvine", "uvola", "uvole", "uvosa", "uvose", "uvosi", "uvoso", "uvula", "uvule", "uxori", "vacai", "vacca", "vacci", "vachi", "vacua", "vacue", "vacui", "vacuo", "vaffa", "vagai", "vaghe", "vaghi", "vagii", "vagli", "vaiai", "valga", "valgo", "valla", "valle", "valli", "vallo", "valsa", "valse", "valsi", "valso", "valva", "valve", "vammi", "vampa", "vampe", "vampi", "vampo", "vanai", "vanea", "vanei", "vaneo", "vanga", "vango", "vania", "vanie", "vanii", "vanio", "vanne", "vanni", "vanno", "vanta", "vanti", "vanto", "varai", "varca", "varco", "varea", "varee", "varia", "varie", "vario", "varva", "varve", "vasai", "vasca", "vasta", "vaste", "vasti", "vasto", "vatti", "vauda", "vaude", "vecce", "vecia", "vecio", "vedda", "vegge", "veggi", "vegli", "velai", "velia", "velie", "velli", "vello", "velma", "velme", "venai", "venda", "vende", "vendi", "vendo", "venga", "vengi", "vengo", "venia", "venie", "venne", "venni", "venta", "venti", "vento", "vepre", "vepri", "vepsa", "vepse", "vepsi", "vepso", "verbi", "verbo", "verde", "verdi", "verga", "verge", "vergi", "vergo", "verla", "verle", "verme", "vermi", "vermo", "verna", "verne", "verni", "verno", "verri", "verro", "versa", "verse", "versi", "verso", "verta", "verte", "verti", "verto", "verve", "verza", "verze", "vesce", "vespa", "vespe", "vessa", "vessi", "vesso", "vesta", "veste", "vesti", "vesto", "vetri", "vetro", "vetta", "vette", "vezzi", "vezzo", "viado", "viale", "viali", "viari", "vibra", "vibri", "vibro", "vichi", "video", "viene", "vieni", "viera", "viere", "vieri", "viero", "vieta", "viete", "vieti", "vieto", "vigli", "vigna", "vigne", "vilai", "vilii", "villa", "ville", "villi", "villo", "vimai", "vinai", "vinca", "vince", "vinci", "vinco", "vinea", "vinee", "vinse", "vinsi", "vinta", "vinte", "vinti", "vinto", "viola", "viole", "violi", "violo", "vipla", "viple", "virai", "virei", "vireo", "virga", "virgo", "virtu", "virus", "visai", "visco", "vispa", "vispe", "vispi", "vispo", "visse", "vissi", "vista", "viste", "visti", "visto", "vitae", "vitai", "vitro", "vitta", "vitte", "vitti", "vitto", "vivai", "vizia", "vizio", "vizza", "vizze", "vizzi", "vizzo", "vocai", "vochi", "vocia", "vocii", "vocio", "vodka", "vogai", "voghe", "voghi", "vogli", "voice", "voile", "volai", "volca", "volco", "volee", "volga", "volge", "volgi", "volgo", "volle", "volli", "volpa", "volpe", "volpi", "volpo", "volse", "volsi", "volta", "volte", "volti", "volto", "volva", "volve", "volvi", "volvo", "vomii", "vorai", "vosco", "votai", "votii", "vulga", "vulgo", "vulva", "vulve", "vuole", "vuota", "vuote", "vuoti", "vuoto", "wakhi", "wasca", "wasce", "wasci", "wasco", "washa", "washe", "washi", "washo", "wayaa", "wayae", "wayai", "wayao", "white", "whiti", "widia", "xenia", "xenie", "xenon", "xhosa", "yagua", "yamea", "yamee", "yamei", "yameo", "yaqui", "yoghi", "yucca", "yuchi", "yurta", "yurte", "zabri", "zabro", "zaffa", "zaffe", "zaffi", "zaffo", "zaina", "zaine", "zaini", "zaino", "zaire", "zamba", "zambo", "zamia", "zamie", "zampa", "zampe", "zampi", "zampo", "zanca", "zande", "zanna", "zanne", "zanni", "zanno", "zappa", "zappe", "zappi", "zappo", "zarri", "zarro", "zatta", "zatte", "zebra", "zebre", "zebri", "zebro", "zecca", "zecco", "zelai", "zenda", "zende", "zendi", "zendo", "zenit", "zeppa", "zeppe", "zeppi", "zeppo", "zerbi", "zerbo", "zerga", "zerge", "zergi", "zergo", "zetti", "zetto", "zifio", "zigai", "zighi", "zigna", "zigni", "zigno", "zilla", "zilli", "zillo", "zinca", "zinco", "zinia", "zinie", "zinna", "zinne", "zinni", "zinno", "ziona", "zione", "zioni", "zippa", "zippi", "zippo", "zirbi", "zirbo", "zirla", "zirli", "zirlo", "zitta", "zitte", "zitti", "zitto", "zizza", "zizze", "zoeci", "zolfa", "zolfi", "zolfo", "zolla", "zolle", "zolli", "zollo", "zomba", "zombi", "zombo", "zompa", "zompi", "zompo", "zonai", "zonzo", "zooma", "zoomi", "zoomo", "zoppa", "zoppe", "zoppi", "zoppo", "zoque", "zoqui", "zozza", "zozze", "zozzi", "zozzo", "zuava", "zuave", "zuavi", "zuavo", "zucca", "zuffa", "zuffe", "zughi", "zumai", "zuppa", "zuppe", "zuppi", "zuppo", "zurla", "zurli", "zurlo"],
                ne, re = ["atest", "occhi", "benda", "setto", "ernia", "tatto", "sordo", "ebola", "urato", "covid", "callo", "alito", "botox", "umano", "ansia", "pelle", "meato", "aulin", "fiato", "borsa", "anite", "stoma", "gotta", "ioide", "fever", "robot", "petri", "crohn", "psoas", "fivet", "sonda", "zolfo", "acido", "shock", "lupus", "vulva", "tavor", "crile", "pomfo", "corpo", "udito", "litio", "polpa", "foley", "allis", "zimox", "uraco", "zaffo", "xanax", "hnpcc", "esone", "alpps", "etere", "sepsi", "acuto", "algia", "bronj", "elape", "corti", "salma", "mente", "soleo", "uncus", "htert", "vater", "fovea", "stemm", "plica", "urina", "logge", "parto", "gesso", "picee", "canto", "testa", "spore", "muffa", "milza", "sigma", "cisti", "sella", "trago", "villi", "ponte", "olier", "volto", "ugola", "lembo", "sensi", "enpam", "quick", "pulce", "pessi", "apert", "xelox", "bario", "hegar", "apgar", "suina", "redon", "retto", "frova", "nervo", "obeso", "ppoma", "purga", "calor", "raspa", "germe", "verme", "cauda", "bakri", "torso", "azoto", "vista", "adipe", "sodio", "kelly", "gamba", "imene", "ictus", "apnea", "lynch", "miope", "ronco", "valgo", "tigna", "mesna", "dieta", "collo", "medio", "ritmo", "pompa", "polso", "ewing", "linfa", "tenue", "dakin", "otite", "prono", "atono", "zecca", "colla", "potus", "porta", "flebo", "alcol", "tibia", "aorta", "derma", "garza", "piaga", "fobia", "gocce", "tarso", "pelvi", "emesi", "siero", "ameba", "duval", "anche", "ostio", "elice", "soffi", "iodio", "crema", "addis", "atrio", "carie", "gusto", "valva", "omero", "barba", "corde", "orvil", "bulbo", "latte", "dotto", "still", "palmo", "osseo", "dente", "lisch", "acqua", "sacca", "mento", "onico", "laser", "tenar", "adson", "passo", "piede", "starr", "visus", "fasci", "fabry", "siadh", "labbe", "istmo", "magro", "krebs", "rigor", "willi", "raggi", "coito", "talco", "rotch", "edema", "piega", "chilo", "umori", "sinus", "disco", "cieco", "patau", "iride", "longo", "dolor", "petto", "wells", "angor", "solco", "ferro", "ramie", "mutyh", "epcam", "gozzo", "kline", "reboa", "fresa", "chimo", "biota", "bocca", "virus", "brain", "flora", "lenti", "sotos", "ozono", "afono", "fiala", "fungo", "calvo", "sacro", "pompe", "tenia", "golgi", "galea", "tinca", "morte", "vasto", "clamp", "mania", "lasix", "mioma", "nigra", "sonno", "atomo", "pipac", "irccs", "tosse", "cloro", "ovulo", "colon", "drill", "morbo", "emina", "cromo", "acaro", "largo", "cuore", "lombo", "ciclo", "ldopa", "tumor", "ovaio", "gigli", "obgyn", "hipec", "turbe", "fibra", "dorso", "allen", "pinza", "lacci", "punto", "rubor", "costa", "carpo", "tatme", "radio", "zinco", "utero", "campo", "globo", "peste", "cocco", "piezo", "glomo", "tamis", "baffi", "coane", "sesso", "shunt", "lilly"],
                oe = "https://womeninsurgeryitalia.github.io/medical-words-game/",
                ie = ["Great Job!", "Awesome", "Well done!"],
                le = function(e) {
                    return "La parola era ".concat(e)
                },
                ue = function(e, t) {
                    return "Devi usare la ".concat(e, " nella posizione ").concat(t)
                },
                se = function(e) {
                    return "Il tentativo deve contenere la ".concat(e)
                },
                ce = "Statistiche",
                fe = function(e, t) {
                    var n, r = new Set,
                        o = function(e, t) {
                            var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (!n) {
                                if (Array.isArray(e) || (n = a(e)) || t && e && "number" === typeof e.length) {
                                    n && (e = n);
                                    var r = 0,
                                        o = function() {};
                                    return {
                                        s: o,
                                        n: function() {
                                            return r >= e.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: e[r++]
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
                            var i, l = !0,
                                u = !1;
                            return {
                                s: function() {
                                    n = n.call(e)
                                },
                                n: function() {
                                    var e = n.next();
                                    return l = e.done, e
                                },
                                e: function(e) {
                                    u = !0, i = e
                                },
                                f: function() {
                                    try {
                                        l || null == n.return || n.return()
                                    } finally {
                                        if (u) throw i
                                    }
                                }
                            }
                        }(t);
                    try {
                        for (o.s(); !(n = o.n()).done;)
                            for (var i = n.value, l = he(i), u = 0; u < i.length; u++)
                                if ("correct" !== l[u] && "present" !== l[u] || r.add(i[u]), "correct" === l[u] && e[u] !== i[u]) return ue(i[u], u + 1)
                    } catch (d) {
                        o.e(d)
                    } finally {
                        o.f()
                    }
                    for (var s = 0, c = Array.from(r.values()); s < c.length; s++) {
                        var f = c[s];
                        if (!e.includes(f)) return se(f)
                    }
                    return !1
                },
                de = function() {
                    var e = new Date("March 14, 2023 00:00:00").valueOf(),
                        t = Date.now(),
                        n = 864e5,
                        r = Math.floor((t - e) / n),
                        a = (r + 1) * n + e;
                    return {
                        solution: re[r % re.length].toUpperCase(),
                        solutionIndex: r,
                        tomorrow: a
                    }
                }(),
                pe = de.solution,
                me = de.solutionIndex,
                ve = de.tomorrow,
                he = function(e) {
                    var t = pe.split(""),
                        n = e.split(""),
                        r = t.map((function(e) {
                            return !1
                        })),
                        a = Array.from(Array(e.length));
                    return n.forEach((function(e, n) {
                        if (e === t[n]) return a[n] = "correct", void(r[n] = !0)
                    })), n.forEach((function(e, n) {
                        if (!a[n]) {
                            if (t.includes(e)) {
                                var o = t.findIndex((function(t, n) {
                                    return t === e && !r[n]
                                }));
                                return o > -1 ? (a[n] = "present", void(r[o] = !0)) : void(a[n] = "absent")
                            }
                            a[n] = "absent"
                        }
                    })), a
                },
                ge = "gameState",
                be = "highContrast",
                ye = "gameStats",
                we = function() {
                    return "1" === localStorage.getItem(be)
                },
                ke = function(e) {
                    var t = e.value,
                        n = e.status,
                        r = e.isRevealing,
                        a = e.isCompleted,
                        o = e.position,
                        i = t && !a,
                        l = r && a,
                        u = "".concat((void 0 === o ? 0 : o) * te, "ms"),
                        s = we(),
                        c = X()("w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white", {
                            "trasparent-bg dark:bg-slate-900 border-slate-200 dark:border-slate-600": !n,
                            "border-black dark:border-slate-100": t && !n,
                            "absent shadowed bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700": "absent" === n,
                            "correct shadowed bg-orange-500 text-white border-orange-500": "correct" === n && s,
                            "present shadowed bg-cyan-500 text-white border-cyan-500": "present" === n && s,
                            "correct shadowed bg-green-500 text-white border-green-500": "correct" === n && !s,
                            "present shadowed bg-yellow-500 text-white border-yellow-500": "present" === n && !s,
                            "cell-fill-animation": i,
                            "cell-reveal": l
                        });
                    return (0, J.jsx)("div", {
                        className: c,
                        style: {
                            animationDelay: u
                        },
                        children: (0, J.jsx)("div", {
                            className: "letter-container",
                            style: {
                                animationDelay: u
                            },
                            children: t
                        })
                    })
                },
                xe = function(e) {
                    var t = e.guess,
                        n = e.isRevealing,
                        r = he(t);
                    return (0, J.jsx)("div", {
                        className: "flex justify-center mb-1",
                        children: t.split("").map((function(e, t) {
                            return (0, J.jsx)(ke, {
                                value: e,
                                status: r[t],
                                position: t,
                                isRevealing: n,
                                isCompleted: !0
                            }, t)
                        }))
                    })
                },
                Se = function(e) {
                    var t = e.guess,
                        n = e.className,
                        r = t.split(""),
                        a = Array.from(Array(5 - r.length)),
                        o = "flex justify-center mb-1 ".concat(n);
                    return (0, J.jsxs)("div", {
                        className: o,
                        children: [r.map((function(e, t) {
                            return (0, J.jsx)(ke, {
                                value: e
                            }, t)
                        })), a.map((function(e, t) {
                            return (0, J.jsx)(ke, {}, t)
                        }))]
                    })
                },
                Ee = function() {
                    var e = Array.from(Array(5));
                    return (0, J.jsx)("div", {
                        className: "flex justify-center mb-1",
                        children: e.map((function(e, t) {
                            return (0, J.jsx)(ke, {}, t)
                        }))
                    })
                },
                Ce = function(e) {
                    var t = e.guesses,
                        n = e.currentGuess,
                        r = e.isRevealing,
                        a = e.currentRowClassName,
                        o = t.length < 5 ? Array.from(Array(5 - t.length)) : [];
                    return (0, J.jsxs)("div", {
                        className: "pb-6",
                        children: [t.map((function(e, n) {
                            return (0, J.jsx)(xe, {
                                guess: e,
                                isRevealing: r && t.length - 1 === n
                            }, n)
                        })), t.length < 6 && (0, J.jsx)(Se, {
                            guess: n,
                            className: a
                        }), o.map((function(e, t) {
                            return (0, J.jsx)(Ee, {}, t)
                        }))]
                    })
                },
                Oe = function(e) {
                    var t = e.children,
                        n = e.status,
                        r = e.width,
                        a = void 0 === r ? 40 : r,
                        o = e.value,
                        i = e.onClick,
                        l = e.isRevealing,
                        u = we(),
                        s = X()("flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-white", {
                            "transition ease-in-out": l,
                            "bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 active:bg-slate-400": !n,
                            "bg-slate-400 dark:bg-slate-800 text-white": "absent" === n,
                            "bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white": "correct" === n && u,
                            "bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white": "present" === n && u,
                            "bg-green-500 hover:bg-green-600 active:bg-green-700 text-white": "correct" === n && !u,
                            "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white": "present" === n && !u
                        }),
                        c = {
                            transitionDelay: l ? "".concat(1750, "ms") : "unset",
                            width: "".concat(a, "px"),
                            height: "58px"
                        };
                    return (0, J.jsx)("button", {
                        style: c,
                        className: s,
                        onClick: function(e) {
                            i(o), e.currentTarget.blur()
                        },
                        children: t || o
                    })
                },
                Ne = function(t) {
                    var n = t.onChar,
                        r = t.onDelete,
                        a = t.onEnter,
                        o = t.guesses,
                        i = t.isRevealing,
                        l = function(e) {
                            var t = {};
                            return e.forEach((function(e) {
                                e.split("").forEach((function(e, n) {
                                    return pe.includes(e) ? e === pe[n] ? t[e] = "correct" : "correct" !== t[e] ? t[e] = "present" : void 0 : t[e] = "absent"
                                }))
                            })), t
                        }(o),
                        u = function(e) {
                            "ENTER" === e ? a() : "DELETE" === e ? r() : n(e)
                        };
                    return (0, e.useEffect)((function() {
                        var e = function(e) {
                            if ("Enter" === e.code) a();
                            else if ("Backspace" === e.code) r();
                            else {
                                var t = e.key.toUpperCase();
                                1 === t.length && t >= "A" && t <= "Z" && n(t)
                            }
                        };
                        return window.addEventListener("keyup", e),
                            function() {
                                window.removeEventListener("keyup", e)
                            }
                    }), [a, r, n]), (0, J.jsxs)("div", {
                        children: [(0, J.jsx)("div", {
                            className: "flex justify-center mb-1",
                            children: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((function(e) {
                                return (0, J.jsx)(Oe, {
                                    value: e,
                                    onClick: u,
                                    status: l[e],
                                    isRevealing: i
                                }, e)
                            }))
                        }), (0, J.jsx)("div", {
                            className: "flex justify-center mb-1",
                            children: ["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((function(e) {
                                return (0, J.jsx)(Oe, {
                                    value: e,
                                    onClick: u,
                                    status: l[e],
                                    isRevealing: i
                                }, e)
                            }))
                        }), (0, J.jsxs)("div", {
                            className: "flex justify-center",
                            children: [(0, J.jsx)(Oe, {
                                width: 65.4,
                                value: "ENTER",
                                onClick: u,
                                children: "Invia"
                            }), ["Z", "X", "C", "V", "B", "N", "M"].map((function(e) {
                                return (0, J.jsx)(Oe, {
                                    value: e,
                                    onClick: u,
                                    status: l[e],
                                    isRevealing: i
                                }, e)
                            })), (0, J.jsx)(Oe, {
                                width: 65.4,
                                value: "DELETE",
                                onClick: u,
                                children: "Cancella"
                            })]
                        })]
                    })
                };

            function je() {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                var a = (0, e.useRef)(n);
                return (0, e.useEffect)((function() {
                    a.current = n
                }), [n]), (0, e.useCallback)((function(e) {
                    for (var t, n = h(a.current); !(t = n()).done;) {
                        var r = t.value;
                        null != r && ("function" === typeof r ? r(e) : r.current = e)
                    }
                }), [a])
            }

            function Pe(e) {
                for (var t, n, r = e.parentElement, a = null; r && !(r instanceof HTMLFieldSetElement);) r instanceof HTMLLegendElement && (a = r), r = r.parentElement;
                var o = null != (t = "" === (null == (n = r) ? void 0 : n.getAttribute("disabled"))) && t;
                return (!o || ! function(e) {
                    if (!e) return !1;
                    var t = e.previousElementSibling;
                    for (; null !== t;) {
                        if (t instanceof HTMLLegendElement) return !1;
                        t = t.previousElementSibling
                    }
                    return !0
                }(a)) && o
            }

            function Te(t, n, r) {
                var a = (0, e.useRef)(n);
                a.current = n, (0, e.useEffect)((function() {
                    function e(e) {
                        a.current.call(window, e)
                    }
                    return window.addEventListener(t, e, r),
                        function() {
                            return window.removeEventListener(t, e, r)
                        }
                }), [t, r])
            }! function(e) {
                e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab"
            }(ne || (ne = {}));
            var _e, ze, Le, Me, Ae, Re = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((function(e) {
                return e + ":not([tabindex='-1'])"
            })).join(",");

            function De(e) {
                null == e || e.focus({
                    preventScroll: !0
                })
            }

            function Ie(e, t) {
                var n = Array.isArray(e) ? e : function(e) {
                        return void 0 === e && (e = document.body), null == e ? [] : Array.from(e.querySelectorAll(Re))
                    }(e),
                    r = document.activeElement,
                    a = function() {
                        if (t & (_e.First | _e.Next)) return Le.Next;
                        if (t & (_e.Previous | _e.Last)) return Le.Previous;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    }(),
                    o = function() {
                        if (t & _e.First) return 0;
                        if (t & _e.Previous) return Math.max(0, n.indexOf(r)) - 1;
                        if (t & _e.Next) return Math.max(0, n.indexOf(r)) + 1;
                        if (t & _e.Last) return n.length - 1;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    }(),
                    i = t & _e.NoScroll ? {
                        preventScroll: !0
                    } : {},
                    l = 0,
                    u = n.length,
                    s = void 0;
                do {
                    var c;
                    if (l >= u || l + u <= 0) return ze.Error;
                    var f = o + l;
                    if (t & _e.WrapAround) f = (f + u) % u;
                    else {
                        if (f < 0) return ze.Underflow;
                        if (f >= u) return ze.Overflow
                    }
                    null == (c = s = n[f]) || c.focus(i), l += a
                } while (s !== document.activeElement);
                return s.hasAttribute("tabindex") || s.setAttribute("tabindex", "0"), ze.Success
            }

            function Fe(t, n, r) {
                void 0 === n && (n = Ae.All);
                var a = void 0 === r ? {} : r,
                    o = a.initialFocus,
                    i = a.containers,
                    l = (0, e.useRef)("undefined" !== typeof window ? document.activeElement : null),
                    u = (0, e.useRef)(null),
                    s = j(),
                    c = Boolean(n & Ae.RestoreFocus),
                    f = Boolean(n & Ae.InitialFocus);
                (0, e.useEffect)((function() {
                    c && (l.current = document.activeElement)
                }), [c]), (0, e.useEffect)((function() {
                    if (c) return function() {
                        De(l.current), l.current = null
                    }
                }), [c]), (0, e.useEffect)((function() {
                    if (f && t.current) {
                        var e = document.activeElement;
                        if (null == o ? void 0 : o.current) {
                            if ((null == o ? void 0 : o.current) === e) return void(u.current = e)
                        } else if (t.current.contains(e)) return void(u.current = e);
                        (null == o ? void 0 : o.current) ? De(o.current): Ie(t.current, _e.First) === ze.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), u.current = document.activeElement
                    }
                }), [t, o, f]), Te("keydown", (function(e) {
                    n & Ae.TabLock && t.current && e.key === ne.Tab && (e.preventDefault(), Ie(t.current, (e.shiftKey ? _e.Previous : _e.Next) | _e.WrapAround) === ze.Success && (u.current = document.activeElement))
                })), Te("focus", (function(e) {
                    if (n & Ae.FocusLock) {
                        var r = new Set(null == i ? void 0 : i.current);
                        if (r.add(t), r.size) {
                            var a = u.current;
                            if (a && s.current) {
                                var o = e.target;
                                o && o instanceof HTMLElement ? ! function(e, t) {
                                    for (var n, r = h(e); !(n = r()).done;) {
                                        var a;
                                        if (null == (a = n.value.current) ? void 0 : a.contains(t)) return !0
                                    }
                                    return !1
                                }(r, o) ? (e.preventDefault(), e.stopPropagation(), De(a)) : (u.current = o, De(o)) : De(u.current)
                            }
                        }
                    }
                }), !0)
            }! function(e) {
                e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll"
            }(_e || (_e = {})),
            function(e) {
                e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow"
            }(ze || (ze = {})),
            function(e) {
                e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next"
            }(Le || (Le = {})),
            function(e) {
                e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose"
            }(Me || (Me = {})),
            function(e) {
                e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All"
            }(Ae || (Ae = {}));
            var Ue = new Set,
                He = new Map;

            function Ve(e) {
                e.setAttribute("aria-hidden", "true"), e.inert = !0
            }

            function We(e) {
                var t = He.get(e);
                t && (null === t["aria-hidden"] ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert)
            }
            var Be = (0, e.createContext)(!1);

            function Ye(t) {
                return e.createElement(Be.Provider, {
                    value: t.force
                }, t.children)
            }

            function $e() {
                var t = (0, e.useContext)(Be),
                    n = (0, e.useContext)(Ge),
                    r = (0, e.useState)((function() {
                        if (!t && null !== n) return null;
                        if ("undefined" === typeof window) return null;
                        var e = document.getElementById("headlessui-portal-root");
                        if (e) return e;
                        var r = document.createElement("div");
                        return r.setAttribute("id", "headlessui-portal-root"), document.body.appendChild(r)
                    })),
                    a = r[0],
                    o = r[1];
                return (0, e.useEffect)((function() {
                    t || null !== n && o(n.current)
                }), [n, o, t]), a
            }
            var Qe = e.Fragment;

            function qe(n) {
                var r = n,
                    a = $e(),
                    o = (0, e.useState)((function() {
                        return "undefined" === typeof window ? null : document.createElement("div")
                    }))[0],
                    i = E();
                return x((function() {
                    if (a && o) return a.appendChild(o),
                        function() {
                            var e;
                            a && (o && (a.removeChild(o), a.childNodes.length <= 0 && (null == (e = a.parentElement) || e.removeChild(a))))
                        }
                }), [a, o]), i && a && o ? (0, t.createPortal)(b({
                    props: r,
                    defaultTag: Qe,
                    name: "Portal"
                }), o) : null
            }
            var Ke = e.Fragment,
                Ge = (0, e.createContext)(null);
            qe.Group = function(t) {
                var n = t.target,
                    r = m(t, ["target"]);
                return e.createElement(Ge.Provider, {
                    value: n
                }, b({
                    props: r,
                    defaultTag: Ke,
                    name: "Popover.Group"
                }))
            };
            var Xe = (0, e.createContext)(null);

            function Je() {
                var t = (0, e.useContext)(Xe);
                if (null === t) {
                    var n = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(n, Je), n
                }
                return t
            }
            var Ze, et, tt, nt, rt = (0, e.createContext)((function() {}));

            function at(t) {
                var n = t.children,
                    r = t.onUpdate,
                    a = t.type,
                    o = t.element,
                    i = (0, e.useContext)(rt),
                    l = (0, e.useCallback)((function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        null == r || r.apply(void 0, t), i.apply(void 0, t)
                    }), [i, r]);
                return x((function() {
                    return l(Ze.Add, a, o),
                        function() {
                            return l(Ze.Remove, a, o)
                        }
                }), [l, a, o]), e.createElement(rt.Provider, {
                    value: l
                }, n)
            }
            rt.displayName = "StackContext",
                function(e) {
                    e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove"
                }(Ze || (Ze = {})),
                function(e) {
                    e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed"
                }(tt || (tt = {})),
                function(e) {
                    e[e.SetTitleId = 0] = "SetTitleId"
                }(nt || (nt = {}));
            var ot = ((et = {})[nt.SetTitleId] = function(e, t) {
                    return e.titleId === t.id ? e : p({}, e, {
                        titleId: t.id
                    })
                }, et),
                it = (0, e.createContext)(null);

            function lt(t) {
                var n = (0, e.useContext)(it);
                if (null === n) {
                    var r = new Error("<" + t + " /> is missing a parent <" + dt.displayName + " /> component.");
                    throw Error.captureStackTrace && Error.captureStackTrace(r, lt), r
                }
                return n
            }

            function ut(e, t) {
                return g(t.type, ot, e, t)
            }
            it.displayName = "DialogContext";
            var st = f.RenderStrategy | f.Static,
                ct = w((function(t, n) {
                    var r, a = t.open,
                        o = t.onClose,
                        i = t.initialFocus,
                        l = m(t, ["open", "onClose", "initialFocus"]),
                        u = (0, e.useState)(0),
                        s = u[0],
                        c = u[1],
                        f = z();
                    void 0 === a && null !== f && (a = g(f, ((r = {})[P.Open] = !0, r[P.Closed] = !1, r)));
                    var d = (0, e.useRef)(new Set),
                        v = (0, e.useRef)(null),
                        y = je(v, n),
                        w = t.hasOwnProperty("open") || null !== f,
                        k = t.hasOwnProperty("onClose");
                    if (!w && !k) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
                    if (!w) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
                    if (!k) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
                    if ("boolean" !== typeof a) throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: " + a);
                    if ("function" !== typeof o) throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: " + o);
                    var S = a ? tt.Open : tt.Closed,
                        C = null !== f ? f === P.Open : S === tt.Open,
                        O = (0, e.useReducer)(ut, {
                            titleId: null,
                            descriptionId: null
                        }),
                        j = O[0],
                        T = O[1],
                        _ = (0, e.useCallback)((function() {
                            return o(!1)
                        }), [o]),
                        L = (0, e.useCallback)((function(e) {
                            return T({
                                type: nt.SetTitleId,
                                id: e
                            })
                        }), [T]),
                        M = E() && S === tt.Open,
                        A = s > 1,
                        R = null !== (0, e.useContext)(it);
                    Fe(v, M ? g(A ? "parent" : "leaf", {
                            parent: Ae.RestoreFocus,
                            leaf: Ae.All
                        }) : Ae.None, {
                            initialFocus: i,
                            containers: d
                        }),
                        function(e, t) {
                            void 0 === t && (t = !0), x((function() {
                                if (t && e.current) {
                                    var n = e.current;
                                    Ue.add(n);
                                    for (var r, a = h(He.keys()); !(r = a()).done;) {
                                        var o = r.value;
                                        o.contains(n) && (We(o), He.delete(o))
                                    }
                                    return document.querySelectorAll("body > *").forEach((function(e) {
                                            if (e instanceof HTMLElement) {
                                                for (var t, n = h(Ue); !(t = n()).done;) {
                                                    var r = t.value;
                                                    if (e.contains(r)) return
                                                }
                                                1 === Ue.size && (He.set(e, {
                                                    "aria-hidden": e.getAttribute("aria-hidden"),
                                                    inert: e.inert
                                                }), Ve(e))
                                            }
                                        })),
                                        function() {
                                            if (Ue.delete(n), Ue.size > 0) document.querySelectorAll("body > *").forEach((function(e) {
                                                if (e instanceof HTMLElement && !He.has(e)) {
                                                    for (var t, n = h(Ue); !(t = n()).done;) {
                                                        var r = t.value;
                                                        if (e.contains(r)) return
                                                    }
                                                    He.set(e, {
                                                        "aria-hidden": e.getAttribute("aria-hidden"),
                                                        inert: e.inert
                                                    }), Ve(e)
                                                }
                                            }));
                                            else
                                                for (var e, t = h(He.keys()); !(e = t()).done;) {
                                                    var r = e.value;
                                                    We(r), He.delete(r)
                                                }
                                        }
                                }
                            }), [t])
                        }(v, !!A && M), Te("mousedown", (function(e) {
                            var t, n = e.target;
                            S === tt.Open && (A || (null == (t = v.current) ? void 0 : t.contains(n)) || _())
                        })), Te("keydown", (function(e) {
                            e.key === ne.Escape && S === tt.Open && (A || (e.preventDefault(), e.stopPropagation(), _()))
                        })), (0, e.useEffect)((function() {
                            if (S === tt.Open && !R) {
                                var e = document.documentElement.style.overflow,
                                    t = document.documentElement.style.paddingRight,
                                    n = window.innerWidth - document.documentElement.clientWidth;
                                return document.documentElement.style.overflow = "hidden", document.documentElement.style.paddingRight = n + "px",
                                    function() {
                                        document.documentElement.style.overflow = e, document.documentElement.style.paddingRight = t
                                    }
                            }
                        }), [S, R]), (0, e.useEffect)((function() {
                            if (S === tt.Open && v.current) {
                                var e = new IntersectionObserver((function(e) {
                                    for (var t, n = h(e); !(t = n()).done;) {
                                        var r = t.value;
                                        0 === r.boundingClientRect.x && 0 === r.boundingClientRect.y && 0 === r.boundingClientRect.width && 0 === r.boundingClientRect.height && _()
                                    }
                                }));
                                return e.observe(v.current),
                                    function() {
                                        return e.disconnect()
                                    }
                            }
                        }), [S, v, _]);
                    var D = function() {
                            var t = (0, e.useState)([]),
                                n = t[0],
                                r = t[1];
                            return [n.length > 0 ? n.join(" ") : void 0, (0, e.useMemo)((function() {
                                return function(t) {
                                    var n = (0, e.useCallback)((function(e) {
                                            return r((function(t) {
                                                    return [].concat(t, [e])
                                                })),
                                                function() {
                                                    return r((function(t) {
                                                        var n = t.slice(),
                                                            r = n.indexOf(e);
                                                        return -1 !== r && n.splice(r, 1), n
                                                    }))
                                                }
                                        }), []),
                                        a = (0, e.useMemo)((function() {
                                            return {
                                                register: n,
                                                slot: t.slot,
                                                name: t.name,
                                                props: t.props
                                            }
                                        }), [n, t.slot, t.name, t.props]);
                                    return e.createElement(Xe.Provider, {
                                        value: a
                                    }, t.children)
                                }
                            }), [r])]
                        }(),
                        I = D[0],
                        F = D[1],
                        U = "headlessui-dialog-" + N(),
                        H = (0, e.useMemo)((function() {
                            return [{
                                dialogState: S,
                                close: _,
                                setTitleId: L
                            }, j]
                        }), [S, j, _, L]),
                        V = (0, e.useMemo)((function() {
                            return {
                                open: S === tt.Open
                            }
                        }), [S]),
                        W = {
                            ref: y,
                            id: U,
                            role: "dialog",
                            "aria-modal": S === tt.Open || void 0,
                            "aria-labelledby": j.titleId,
                            "aria-describedby": I,
                            onClick: function(e) {
                                e.stopPropagation()
                            }
                        },
                        B = l;
                    return e.createElement(at, {
                        type: "Dialog",
                        element: v,
                        onUpdate: (0, e.useCallback)((function(e, t, n) {
                            var r;
                            "Dialog" === t && g(e, ((r = {})[Ze.Add] = function() {
                                d.current.add(n), c((function(e) {
                                    return e + 1
                                }))
                            }, r[Ze.Remove] = function() {
                                d.current.add(n), c((function(e) {
                                    return e - 1
                                }))
                            }, r))
                        }), [])
                    }, e.createElement(Ye, {
                        force: !0
                    }, e.createElement(qe, null, e.createElement(it.Provider, {
                        value: H
                    }, e.createElement(qe.Group, {
                        target: v
                    }, e.createElement(Ye, {
                        force: !1
                    }, e.createElement(F, {
                        slot: V,
                        name: "Dialog.Description"
                    }, b({
                        props: p({}, B, W),
                        slot: V,
                        defaultTag: "div",
                        features: st,
                        visible: C,
                        name: "Dialog"
                    }))))))))
                })),
                ft = w((function t(n, r) {
                    var a = lt([dt.displayName, t.name].join("."))[0],
                        o = a.dialogState,
                        i = a.close,
                        l = je(r),
                        u = "headlessui-dialog-overlay-" + N(),
                        s = (0, e.useCallback)((function(e) {
                            if (e.target === e.currentTarget) {
                                if (Pe(e.currentTarget)) return e.preventDefault();
                                e.preventDefault(), e.stopPropagation(), i()
                            }
                        }), [i]),
                        c = (0, e.useMemo)((function() {
                            return {
                                open: o === tt.Open
                            }
                        }), [o]);
                    return b({
                        props: p({}, n, {
                            ref: l,
                            id: u,
                            "aria-hidden": !0,
                            onClick: s
                        }),
                        slot: c,
                        defaultTag: "div",
                        name: "Dialog.Overlay"
                    })
                }));
            var dt = Object.assign(ct, {
                    Overlay: ft,
                    Title: function t(n) {
                        var r = lt([dt.displayName, t.name].join("."))[0],
                            a = r.dialogState,
                            o = r.setTitleId,
                            i = "headlessui-dialog-title-" + N();
                        (0, e.useEffect)((function() {
                            return o(i),
                                function() {
                                    return o(null)
                                }
                        }), [i, o]);
                        var l = (0, e.useMemo)((function() {
                            return {
                                open: a === tt.Open
                            }
                        }), [a]);
                        return b({
                            props: p({}, n, {
                                id: i
                            }),
                            slot: l,
                            defaultTag: "h2",
                            name: "Dialog.Title"
                        })
                    },
                    Description: function(e) {
                        var t = Je(),
                            n = "headlessui-description-" + N();
                        x((function() {
                            return t.register(n)
                        }), [n, t.register]);
                        var r = e,
                            a = p({}, t.props, {
                                id: n
                            });
                        return b({
                            props: p({}, r, a),
                            slot: t.slot || {},
                            defaultTag: "p",
                            name: t.name || "Description"
                        })
                    }
                }),
                pt = function(t) {
                    var n = t.title,
                        r = t.children,
                        a = t.isOpen,
                        o = t.handleClose;
                    return (0, J.jsx)(K.Root, {
                        show: a,
                        as: e.Fragment,
                        children: (0, J.jsx)(dt, {
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
                                    children: (0, J.jsx)(dt.Overlay, {
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
                                                children: [(0, J.jsx)(dt.Title, {
                                                    as: "h3",
                                                    className: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100",
                                                    children: n
                                                }), (0, J.jsx)("div", {
                                                    className: "mt-2",
                                                    children: r
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                };

            function mt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function vt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? mt(Object(n), !0).forEach((function(t) {
                        bt(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ht(e) {
                return ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, ht(e)
            }

            function gt(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function bt(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function yt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [],
                        i = !0,
                        l = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0);
                    } catch (u) {
                        l = !0, a = u
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (l) throw a
                        }
                    }
                    return o
                }(e, t) || kt(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function wt(e) {
                return function(e) {
                    if (Array.isArray(e)) return xt(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || kt(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function kt(e, t) {
                if (e) {
                    if ("string" === typeof e) return xt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xt(e, t) : void 0
                }
            }

            function xt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var St = function() {},
                Et = {},
                Ct = {},
                Ot = null,
                Nt = {
                    mark: St,
                    measure: St
                };
            try {
                "undefined" !== typeof window && (Et = window), "undefined" !== typeof document && (Ct = document), "undefined" !== typeof MutationObserver && (Ot = MutationObserver), "undefined" !== typeof performance && (Nt = performance)
            } catch (zo) {}
            var jt, Pt, Tt, _t, zt, Lt = (Et.navigator || {}).userAgent,
                Mt = void 0 === Lt ? "" : Lt,
                At = Et,
                Rt = Ct,
                Dt = Ot,
                It = Nt,
                Ft = (At.document, !!Rt.documentElement && !!Rt.head && "function" === typeof Rt.addEventListener && "function" === typeof Rt.createElement),
                Ut = ~Mt.indexOf("MSIE") || ~Mt.indexOf("Trident/"),
                Ht = "svg-inline--fa",
                Vt = "data-fa-i2svg",
                Wt = "data-fa-pseudo-element",
                Bt = "data-prefix",
                Yt = "data-icon",
                $t = "fontawesome-i2svg",
                Qt = ["HTML", "HEAD", "STYLE", "SCRIPT"],
                qt = function() {
                    try {
                        return !0
                    } catch (zo) {
                        return !1
                    }
                }(),
                Kt = "classic",
                Gt = "sharp",
                Xt = [Kt, Gt];

            function Jt(e) {
                return new Proxy(e, {
                    get: function(e, t) {
                        return t in e ? e[t] : e.classic
                    }
                })
            }
            var Zt = Jt((bt(jt = {}, Kt, {
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
                }), bt(jt, Gt, {
                    fa: "solid",
                    fass: "solid",
                    "fa-solid": "solid",
                    fasr: "regular",
                    "fa-regular": "regular"
                }), jt)),
                en = Jt((bt(Pt = {}, Kt, {
                    solid: "fas",
                    regular: "far",
                    light: "fal",
                    thin: "fat",
                    duotone: "fad",
                    brands: "fab",
                    kit: "fak"
                }), bt(Pt, Gt, {
                    solid: "fass",
                    regular: "fasr"
                }), Pt)),
                tn = Jt((bt(Tt = {}, Kt, {
                    fab: "fa-brands",
                    fad: "fa-duotone",
                    fak: "fa-kit",
                    fal: "fa-light",
                    far: "fa-regular",
                    fas: "fa-solid",
                    fat: "fa-thin"
                }), bt(Tt, Gt, {
                    fass: "fa-solid",
                    fasr: "fa-regular"
                }), Tt)),
                nn = Jt((bt(_t = {}, Kt, {
                    "fa-brands": "fab",
                    "fa-duotone": "fad",
                    "fa-kit": "fak",
                    "fa-light": "fal",
                    "fa-regular": "far",
                    "fa-solid": "fas",
                    "fa-thin": "fat"
                }), bt(_t, Gt, {
                    "fa-solid": "fass",
                    "fa-regular": "fasr"
                }), _t)),
                rn = /fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,
                an = "fa-layers-text",
                on = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
                ln = Jt((bt(zt = {}, Kt, {
                    900: "fas",
                    400: "far",
                    normal: "far",
                    300: "fal",
                    100: "fat"
                }), bt(zt, Gt, {
                    900: "fass",
                    400: "fasr"
                }), zt)),
                un = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                sn = un.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
                cn = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
                fn = "duotone-group",
                dn = "swap-opacity",
                pn = "primary",
                mn = "secondary",
                vn = new Set;
            Object.keys(en.classic).map(vn.add.bind(vn)), Object.keys(en.sharp).map(vn.add.bind(vn));
            var hn = [].concat(Xt, wt(vn), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", fn, dn, pn, mn]).concat(un.map((function(e) {
                    return "".concat(e, "x")
                }))).concat(sn.map((function(e) {
                    return "w-".concat(e)
                }))),
                gn = At.FontAwesomeConfig || {};
            if (Rt && "function" === typeof Rt.querySelector) {
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
                    var t = yt(e, 2),
                        n = t[0],
                        r = t[1],
                        a = function(e) {
                            return "" === e || "false" !== e && ("true" === e || e)
                        }(function(e) {
                            var t = Rt.querySelector("script[" + e + "]");
                            if (t) return t.getAttribute(e)
                        }(n));
                    void 0 !== a && null !== a && (gn[r] = a)
                }))
            }
            var bn = {
                styleDefault: "solid",
                familyDefault: "classic",
                cssPrefix: "fa",
                replacementClass: Ht,
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
            gn.familyPrefix && (gn.cssPrefix = gn.familyPrefix);
            var yn = vt(vt({}, bn), gn);
            yn.autoReplaceSvg || (yn.observeMutations = !1);
            var wn = {};
            Object.keys(bn).forEach((function(e) {
                Object.defineProperty(wn, e, {
                    enumerable: !0,
                    set: function(t) {
                        yn[e] = t, kn.forEach((function(e) {
                            return e(wn)
                        }))
                    },
                    get: function() {
                        return yn[e]
                    }
                })
            })), Object.defineProperty(wn, "familyPrefix", {
                enumerable: !0,
                set: function(e) {
                    yn.cssPrefix = e, kn.forEach((function(e) {
                        return e(wn)
                    }))
                },
                get: function() {
                    return yn.cssPrefix
                }
            }), At.FontAwesomeConfig = wn;
            var kn = [];
            var xn = 16,
                Sn = {
                    size: 16,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    flipX: !1,
                    flipY: !1
                };

            function En() {
                for (var e = 12, t = ""; e-- > 0;) t += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
                return t
            }

            function Cn(e) {
                for (var t = [], n = (e || []).length >>> 0; n--;) t[n] = e[n];
                return t
            }

            function On(e) {
                return e.classList ? Cn(e.classList) : (e.getAttribute("class") || "").split(" ").filter((function(e) {
                    return e
                }))
            }

            function Nn(e) {
                return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function jn(e) {
                return Object.keys(e || {}).reduce((function(t, n) {
                    return t + "".concat(n, ": ").concat(e[n].trim(), ";")
                }), "")
            }

            function Pn(e) {
                return e.size !== Sn.size || e.x !== Sn.x || e.y !== Sn.y || e.rotate !== Sn.rotate || e.flipX || e.flipY
            }

            function Tn() {
                var e = "fa",
                    t = Ht,
                    n = wn.cssPrefix,
                    r = wn.replacementClass,
                    a = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
                if (n !== e || r !== t) {
                    var o = new RegExp("\\.".concat(e, "\\-"), "g"),
                        i = new RegExp("\\--".concat(e, "\\-"), "g"),
                        l = new RegExp("\\.".concat(t), "g");
                    a = a.replace(o, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(l, ".".concat(r))
                }
                return a
            }
            var _n = !1;

            function zn() {
                wn.autoAddCss && !_n && (! function(e) {
                    if (e && Ft) {
                        var t = Rt.createElement("style");
                        t.setAttribute("type", "text/css"), t.innerHTML = e;
                        for (var n = Rt.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
                            var o = n[a],
                                i = (o.tagName || "").toUpperCase();
                            ["STYLE", "LINK"].indexOf(i) > -1 && (r = o)
                        }
                        Rt.head.insertBefore(t, r)
                    }
                }(Tn()), _n = !0)
            }
            var Ln = {
                    mixout: function() {
                        return {
                            dom: {
                                css: Tn,
                                insertCss: zn
                            }
                        }
                    },
                    hooks: function() {
                        return {
                            beforeDOMElementCreation: function() {
                                zn()
                            },
                            beforeI2svg: function() {
                                zn()
                            }
                        }
                    }
                },
                Mn = At || {};
            Mn.___FONT_AWESOME___ || (Mn.___FONT_AWESOME___ = {}), Mn.___FONT_AWESOME___.styles || (Mn.___FONT_AWESOME___.styles = {}), Mn.___FONT_AWESOME___.hooks || (Mn.___FONT_AWESOME___.hooks = {}), Mn.___FONT_AWESOME___.shims || (Mn.___FONT_AWESOME___.shims = []);
            var An = Mn.___FONT_AWESOME___,
                Rn = [],
                Dn = !1;

            function In(e) {
                Ft && (Dn ? setTimeout(e, 0) : Rn.push(e))
            }

            function Fn(e) {
                var t = e.tag,
                    n = e.attributes,
                    r = void 0 === n ? {} : n,
                    a = e.children,
                    o = void 0 === a ? [] : a;
                return "string" === typeof e ? Nn(e) : "<".concat(t, " ").concat(function(e) {
                    return Object.keys(e || {}).reduce((function(t, n) {
                        return t + "".concat(n, '="').concat(Nn(e[n]), '" ')
                    }), "").trim()
                }(r), ">").concat(o.map(Fn).join(""), "</").concat(t, ">")
            }

            function Un(e, t, n) {
                if (e && e[t] && e[t][n]) return {
                    prefix: t,
                    iconName: n,
                    icon: e[t][n]
                }
            }
            Ft && ((Dn = (Rt.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Rt.readyState)) || Rt.addEventListener("DOMContentLoaded", (function e() {
                Rt.removeEventListener("DOMContentLoaded", e), Dn = 1, Rn.map((function(e) {
                    return e()
                }))
            })));
            var Hn = function(e, t, n, r) {
                var a, o, i, l = Object.keys(e),
                    u = l.length,
                    s = void 0 !== r ? function(e, t) {
                        return function(n, r, a, o) {
                            return e.call(t, n, r, a, o)
                        }
                    }(t, r) : t;
                for (void 0 === n ? (a = 1, i = e[l[0]]) : (a = 0, i = n); a < u; a++) i = s(i, e[o = l[a]], o, e);
                return i
            };

            function Vn(e) {
                var t = function(e) {
                    for (var t = [], n = 0, r = e.length; n < r;) {
                        var a = e.charCodeAt(n++);
                        if (a >= 55296 && a <= 56319 && n < r) {
                            var o = e.charCodeAt(n++);
                            56320 == (64512 & o) ? t.push(((1023 & a) << 10) + (1023 & o) + 65536) : (t.push(a), n--)
                        } else t.push(a)
                    }
                    return t
                }(e);
                return 1 === t.length ? t[0].toString(16) : null
            }

            function Wn(e) {
                return Object.keys(e).reduce((function(t, n) {
                    var r = e[n];
                    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t
                }), {})
            }

            function Bn(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = n.skipHooks,
                    a = void 0 !== r && r,
                    o = Wn(t);
                "function" !== typeof An.hooks.addPack || a ? An.styles[e] = vt(vt({}, An.styles[e] || {}), o) : An.hooks.addPack(e, Wn(t)), "fas" === e && Bn("fa", t)
            }
            var Yn, $n, Qn, qn = An.styles,
                Kn = An.shims,
                Gn = (bt(Yn = {}, Kt, Object.values(tn.classic)), bt(Yn, Gt, Object.values(tn.sharp)), Yn),
                Xn = null,
                Jn = {},
                Zn = {},
                er = {},
                tr = {},
                nr = {},
                rr = (bt($n = {}, Kt, Object.keys(Zt.classic)), bt($n, Gt, Object.keys(Zt.sharp)), $n);

            function ar(e, t) {
                var n, r = t.split("-"),
                    a = r[0],
                    o = r.slice(1).join("-");
                return a !== e || "" === o || (n = o, ~hn.indexOf(n)) ? null : o
            }
            var or, ir = function() {
                var e = function(e) {
                    return Hn(qn, (function(t, n, r) {
                        return t[r] = Hn(n, e, {}), t
                    }), {})
                };
                Jn = e((function(e, t, n) {
                    (t[3] && (e[t[3]] = n), t[2]) && t[2].filter((function(e) {
                        return "number" === typeof e
                    })).forEach((function(t) {
                        e[t.toString(16)] = n
                    }));
                    return e
                })), Zn = e((function(e, t, n) {
                    (e[n] = n, t[2]) && t[2].filter((function(e) {
                        return "string" === typeof e
                    })).forEach((function(t) {
                        e[t] = n
                    }));
                    return e
                })), nr = e((function(e, t, n) {
                    var r = t[2];
                    return e[n] = n, r.forEach((function(t) {
                        e[t] = n
                    })), e
                }));
                var t = "far" in qn || wn.autoFetchSvg,
                    n = Hn(Kn, (function(e, n) {
                        var r = n[0],
                            a = n[1],
                            o = n[2];
                        return "far" !== a || t || (a = "fas"), "string" === typeof r && (e.names[r] = {
                            prefix: a,
                            iconName: o
                        }), "number" === typeof r && (e.unicodes[r.toString(16)] = {
                            prefix: a,
                            iconName: o
                        }), e
                    }), {
                        names: {},
                        unicodes: {}
                    });
                er = n.names, tr = n.unicodes, Xn = fr(wn.styleDefault, {
                    family: wn.familyDefault
                })
            };

            function lr(e, t) {
                return (Jn[e] || {})[t]
            }

            function ur(e, t) {
                return (nr[e] || {})[t]
            }

            function sr(e) {
                return er[e] || {
                    prefix: null,
                    iconName: null
                }
            }

            function cr() {
                return Xn
            }
            or = function(e) {
                Xn = fr(e.styleDefault, {
                    family: wn.familyDefault
                })
            }, kn.push(or), ir();

            function fr(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.family,
                    r = void 0 === n ? Kt : n,
                    a = Zt[r][e],
                    o = en[r][e] || en[r][a],
                    i = e in An.styles ? e : null;
                return o || i || null
            }
            var dr = (bt(Qn = {}, Kt, Object.keys(tn.classic)), bt(Qn, Gt, Object.keys(tn.sharp)), Qn);

            function pr(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = n.skipLookups,
                    a = void 0 !== r && r,
                    o = (bt(t = {}, Kt, "".concat(wn.cssPrefix, "-").concat(Kt)), bt(t, Gt, "".concat(wn.cssPrefix, "-").concat(Gt)), t),
                    i = null,
                    l = Kt;
                (e.includes(o.classic) || e.some((function(e) {
                    return dr.classic.includes(e)
                }))) && (l = Kt), (e.includes(o.sharp) || e.some((function(e) {
                    return dr.sharp.includes(e)
                }))) && (l = Gt);
                var u = e.reduce((function(e, t) {
                    var n = ar(wn.cssPrefix, t);
                    if (qn[t] ? (t = Gn[l].includes(t) ? nn[l][t] : t, i = t, e.prefix = t) : rr[l].indexOf(t) > -1 ? (i = t, e.prefix = fr(t, {
                            family: l
                        })) : n ? e.iconName = n : t !== wn.replacementClass && t !== o.classic && t !== o.sharp && e.rest.push(t), !a && e.prefix && e.iconName) {
                        var r = "fa" === i ? sr(e.iconName) : {},
                            u = ur(e.prefix, e.iconName);
                        r.prefix && (i = null), e.iconName = r.iconName || u || e.iconName, e.prefix = r.prefix || e.prefix, "far" !== e.prefix || qn.far || !qn.fas || wn.autoFetchSvg || (e.prefix = "fas")
                    }
                    return e
                }), {
                    prefix: null,
                    iconName: null,
                    rest: []
                });
                return (e.includes("fa-brands") || e.includes("fab")) && (u.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (u.prefix = "fad"), u.prefix || l !== Gt || !qn.fass && !wn.autoFetchSvg || (u.prefix = "fass", u.iconName = ur(u.prefix, u.iconName) || u.iconName), "fa" !== u.prefix && "fa" !== i || (u.prefix = cr() || "fas"), u
            }
            var mr = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.definitions = {}
                    }
                    var t, n, r;
                    return t = e, n = [{
                        key: "add",
                        value: function() {
                            for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            var a = n.reduce(this._pullDefinitions, {});
                            Object.keys(a).forEach((function(t) {
                                e.definitions[t] = vt(vt({}, e.definitions[t] || {}), a[t]), Bn(t, a[t]);
                                var n = tn.classic[t];
                                n && Bn(n, a[t]), ir()
                            }))
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.definitions = {}
                        }
                    }, {
                        key: "_pullDefinitions",
                        value: function(e, t) {
                            var n = t.prefix && t.iconName && t.icon ? {
                                0: t
                            } : t;
                            return Object.keys(n).map((function(t) {
                                var r = n[t],
                                    a = r.prefix,
                                    o = r.iconName,
                                    i = r.icon,
                                    l = i[2];
                                e[a] || (e[a] = {}), l.length > 0 && l.forEach((function(t) {
                                    "string" === typeof t && (e[a][t] = i)
                                })), e[a][o] = i
                            })), e
                        }
                    }], n && gt(t.prototype, n), r && gt(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }(),
                vr = [],
                hr = {},
                gr = {},
                br = Object.keys(gr);

            function yr(e, t) {
                for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                var o = hr[e] || [];
                return o.forEach((function(e) {
                    t = e.apply(null, [t].concat(r))
                })), t
            }

            function wr(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                var a = hr[e] || [];
                a.forEach((function(e) {
                    e.apply(null, n)
                }))
            }

            function kr() {
                var e = arguments[0],
                    t = Array.prototype.slice.call(arguments, 1);
                return gr[e] ? gr[e].apply(null, t) : void 0
            }

            function xr(e) {
                "fa" === e.prefix && (e.prefix = "fas");
                var t = e.iconName,
                    n = e.prefix || cr();
                if (t) return t = ur(n, t) || t, Un(Sr.definitions, n, t) || Un(An.styles, n, t)
            }
            var Sr = new mr,
                Er = {
                    i2svg: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return Ft ? (wr("beforeI2svg", e), kr("pseudoElements2svg", e), kr("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.")
                    },
                    watch: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.autoReplaceSvgRoot;
                        !1 === wn.autoReplaceSvg && (wn.autoReplaceSvg = !0), wn.observeMutations = !0, In((function() {
                            Nr({
                                autoReplaceSvgRoot: t
                            }), wr("watch", e)
                        }))
                    }
                },
                Cr = {
                    icon: function(e) {
                        if (null === e) return null;
                        if ("object" === ht(e) && e.prefix && e.iconName) return {
                            prefix: e.prefix,
                            iconName: ur(e.prefix, e.iconName) || e.iconName
                        };
                        if (Array.isArray(e) && 2 === e.length) {
                            var t = 0 === e[1].indexOf("fa-") ? e[1].slice(3) : e[1],
                                n = fr(e[0]);
                            return {
                                prefix: n,
                                iconName: ur(n, t) || t
                            }
                        }
                        if ("string" === typeof e && (e.indexOf("".concat(wn.cssPrefix, "-")) > -1 || e.match(rn))) {
                            var r = pr(e.split(" "), {
                                skipLookups: !0
                            });
                            return {
                                prefix: r.prefix || cr(),
                                iconName: ur(r.prefix, r.iconName) || r.iconName
                            }
                        }
                        if ("string" === typeof e) {
                            var a = cr();
                            return {
                                prefix: a,
                                iconName: ur(a, e) || e
                            }
                        }
                    }
                },
                Or = {
                    noAuto: function() {
                        wn.autoReplaceSvg = !1, wn.observeMutations = !1, wr("noAuto")
                    },
                    config: wn,
                    dom: Er,
                    parse: Cr,
                    library: Sr,
                    findIconDefinition: xr,
                    toHtml: Fn
                },
                Nr = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.autoReplaceSvgRoot,
                        n = void 0 === t ? Rt : t;
                    (Object.keys(An.styles).length > 0 || wn.autoFetchSvg) && Ft && wn.autoReplaceSvg && Or.dom.i2svg({
                        node: n
                    })
                };

            function jr(e, t) {
                return Object.defineProperty(e, "abstract", {
                    get: t
                }), Object.defineProperty(e, "html", {
                    get: function() {
                        return e.abstract.map((function(e) {
                            return Fn(e)
                        }))
                    }
                }), Object.defineProperty(e, "node", {
                    get: function() {
                        if (Ft) {
                            var t = Rt.createElement("div");
                            return t.innerHTML = e.html, t.children
                        }
                    }
                }), e
            }

            function Pr(e) {
                var t = e.icons,
                    n = t.main,
                    r = t.mask,
                    a = e.prefix,
                    o = e.iconName,
                    i = e.transform,
                    l = e.symbol,
                    u = e.title,
                    s = e.maskId,
                    c = e.titleId,
                    f = e.extra,
                    d = e.watchable,
                    p = void 0 !== d && d,
                    m = r.found ? r : n,
                    v = m.width,
                    h = m.height,
                    g = "fak" === a,
                    b = [wn.replacementClass, o ? "".concat(wn.cssPrefix, "-").concat(o) : ""].filter((function(e) {
                        return -1 === f.classes.indexOf(e)
                    })).filter((function(e) {
                        return "" !== e || !!e
                    })).concat(f.classes).join(" "),
                    y = {
                        children: [],
                        attributes: vt(vt({}, f.attributes), {}, {
                            "data-prefix": a,
                            "data-icon": o,
                            class: b,
                            role: f.attributes.role || "img",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 ".concat(v, " ").concat(h)
                        })
                    },
                    w = g && !~f.classes.indexOf("fa-fw") ? {
                        width: "".concat(v / h * 16 * .0625, "em")
                    } : {};
                p && (y.attributes[Vt] = ""), u && (y.children.push({
                    tag: "title",
                    attributes: {
                        id: y.attributes["aria-labelledby"] || "title-".concat(c || En())
                    },
                    children: [u]
                }), delete y.attributes.title);
                var k = vt(vt({}, y), {}, {
                        prefix: a,
                        iconName: o,
                        main: n,
                        mask: r,
                        maskId: s,
                        transform: i,
                        symbol: l,
                        styles: vt(vt({}, w), f.styles)
                    }),
                    x = r.found && n.found ? kr("generateAbstractMask", k) || {
                        children: [],
                        attributes: {}
                    } : kr("generateAbstractIcon", k) || {
                        children: [],
                        attributes: {}
                    },
                    S = x.children,
                    E = x.attributes;
                return k.children = S, k.attributes = E, l ? function(e) {
                    var t = e.prefix,
                        n = e.iconName,
                        r = e.children,
                        a = e.attributes,
                        o = e.symbol,
                        i = !0 === o ? "".concat(t, "-").concat(wn.cssPrefix, "-").concat(n) : o;
                    return [{
                        tag: "svg",
                        attributes: {
                            style: "display: none;"
                        },
                        children: [{
                            tag: "symbol",
                            attributes: vt(vt({}, a), {}, {
                                id: i
                            }),
                            children: r
                        }]
                    }]
                }(k) : function(e) {
                    var t = e.children,
                        n = e.main,
                        r = e.mask,
                        a = e.attributes,
                        o = e.styles,
                        i = e.transform;
                    if (Pn(i) && n.found && !r.found) {
                        var l = {
                            x: n.width / n.height / 2,
                            y: .5
                        };
                        a.style = jn(vt(vt({}, o), {}, {
                            "transform-origin": "".concat(l.x + i.x / 16, "em ").concat(l.y + i.y / 16, "em")
                        }))
                    }
                    return [{
                        tag: "svg",
                        attributes: a,
                        children: t
                    }]
                }(k)
            }

            function Tr(e) {
                var t = e.content,
                    n = e.width,
                    r = e.height,
                    a = e.transform,
                    o = e.title,
                    i = e.extra,
                    l = e.watchable,
                    u = void 0 !== l && l,
                    s = vt(vt(vt({}, i.attributes), o ? {
                        title: o
                    } : {}), {}, {
                        class: i.classes.join(" ")
                    });
                u && (s[Vt] = "");
                var c = vt({}, i.styles);
                Pn(a) && (c.transform = function(e) {
                    var t = e.transform,
                        n = e.width,
                        r = void 0 === n ? 16 : n,
                        a = e.height,
                        o = void 0 === a ? 16 : a,
                        i = e.startCentered,
                        l = void 0 !== i && i,
                        u = "";
                    return u += l && Ut ? "translate(".concat(t.x / xn - r / 2, "em, ").concat(t.y / xn - o / 2, "em) ") : l ? "translate(calc(-50% + ".concat(t.x / xn, "em), calc(-50% + ").concat(t.y / xn, "em)) ") : "translate(".concat(t.x / xn, "em, ").concat(t.y / xn, "em) "), u += "scale(".concat(t.size / xn * (t.flipX ? -1 : 1), ", ").concat(t.size / xn * (t.flipY ? -1 : 1), ") "), u + "rotate(".concat(t.rotate, "deg) ")
                }({
                    transform: a,
                    startCentered: !0,
                    width: n,
                    height: r
                }), c["-webkit-transform"] = c.transform);
                var f = jn(c);
                f.length > 0 && (s.style = f);
                var d = [];
                return d.push({
                    tag: "span",
                    attributes: s,
                    children: [t]
                }), o && d.push({
                    tag: "span",
                    attributes: {
                        class: "sr-only"
                    },
                    children: [o]
                }), d
            }

            function _r(e) {
                var t = e.content,
                    n = e.title,
                    r = e.extra,
                    a = vt(vt(vt({}, r.attributes), n ? {
                        title: n
                    } : {}), {}, {
                        class: r.classes.join(" ")
                    }),
                    o = jn(r.styles);
                o.length > 0 && (a.style = o);
                var i = [];
                return i.push({
                    tag: "span",
                    attributes: a,
                    children: [t]
                }), n && i.push({
                    tag: "span",
                    attributes: {
                        class: "sr-only"
                    },
                    children: [n]
                }), i
            }
            var zr = An.styles;

            function Lr(e) {
                var t = e[0],
                    n = e[1],
                    r = yt(e.slice(4), 1)[0];
                return {
                    found: !0,
                    width: t,
                    height: n,
                    icon: Array.isArray(r) ? {
                        tag: "g",
                        attributes: {
                            class: "".concat(wn.cssPrefix, "-").concat(fn)
                        },
                        children: [{
                            tag: "path",
                            attributes: {
                                class: "".concat(wn.cssPrefix, "-").concat(mn),
                                fill: "currentColor",
                                d: r[0]
                            }
                        }, {
                            tag: "path",
                            attributes: {
                                class: "".concat(wn.cssPrefix, "-").concat(pn),
                                fill: "currentColor",
                                d: r[1]
                            }
                        }]
                    } : {
                        tag: "path",
                        attributes: {
                            fill: "currentColor",
                            d: r
                        }
                    }
                }
            }
            var Mr = {
                found: !1,
                width: 512,
                height: 512
            };

            function Ar(e, t) {
                var n = t;
                return "fa" === t && null !== wn.styleDefault && (t = cr()), new Promise((function(r, a) {
                    kr("missingIconAbstract");
                    if ("fa" === n) {
                        var o = sr(e) || {};
                        e = o.iconName || e, t = o.prefix || t
                    }
                    if (e && t && zr[t] && zr[t][e]) return r(Lr(zr[t][e]));
                    ! function(e, t) {
                        qt || wn.showMissingIcons || !e || console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'))
                    }(e, t), r(vt(vt({}, Mr), {}, {
                        icon: wn.showMissingIcons && e && kr("missingIconAbstract") || {}
                    }))
                }))
            }
            var Rr = function() {},
                Dr = wn.measurePerformance && It && It.mark && It.measure ? It : {
                    mark: Rr,
                    measure: Rr
                },
                Ir = 'FA "6.3.0"',
                Fr = function(e) {
                    Dr.mark("".concat(Ir, " ").concat(e, " ends")), Dr.measure("".concat(Ir, " ").concat(e), "".concat(Ir, " ").concat(e, " begins"), "".concat(Ir, " ").concat(e, " ends"))
                },
                Ur = function(e) {
                    return Dr.mark("".concat(Ir, " ").concat(e, " begins")),
                        function() {
                            return Fr(e)
                        }
                },
                Hr = function() {};

            function Vr(e) {
                return "string" === typeof(e.getAttribute ? e.getAttribute(Vt) : null)
            }

            function Wr(e) {
                return Rt.createElementNS("http://www.w3.org/2000/svg", e)
            }

            function Br(e) {
                return Rt.createElement(e)
            }

            function Yr(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.ceFn,
                    r = void 0 === n ? "svg" === e.tag ? Wr : Br : n;
                if ("string" === typeof e) return Rt.createTextNode(e);
                var a = r(e.tag);
                Object.keys(e.attributes || []).forEach((function(t) {
                    a.setAttribute(t, e.attributes[t])
                }));
                var o = e.children || [];
                return o.forEach((function(e) {
                    a.appendChild(Yr(e, {
                        ceFn: r
                    }))
                })), a
            }
            var $r = {
                replace: function(e) {
                    var t = e[0];
                    if (t.parentNode)
                        if (e[1].forEach((function(e) {
                                t.parentNode.insertBefore(Yr(e), t)
                            })), null === t.getAttribute(Vt) && wn.keepOriginalSource) {
                            var n = Rt.createComment(function(e) {
                                var t = " ".concat(e.outerHTML, " ");
                                return "".concat(t, "Font Awesome fontawesome.com ")
                            }(t));
                            t.parentNode.replaceChild(n, t)
                        } else t.remove()
                },
                nest: function(e) {
                    var t = e[0],
                        n = e[1];
                    if (~On(t).indexOf(wn.replacementClass)) return $r.replace(e);
                    var r = new RegExp("".concat(wn.cssPrefix, "-.*"));
                    if (delete n[0].attributes.id, n[0].attributes.class) {
                        var a = n[0].attributes.class.split(" ").reduce((function(e, t) {
                            return t === wn.replacementClass || t.match(r) ? e.toSvg.push(t) : e.toNode.push(t), e
                        }), {
                            toNode: [],
                            toSvg: []
                        });
                        n[0].attributes.class = a.toSvg.join(" "), 0 === a.toNode.length ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "))
                    }
                    var o = n.map((function(e) {
                        return Fn(e)
                    })).join("\n");
                    t.setAttribute(Vt, ""), t.innerHTML = o
                }
            };

            function Qr(e) {
                e()
            }

            function qr(e, t) {
                var n = "function" === typeof t ? t : Hr;
                if (0 === e.length) n();
                else {
                    var r = Qr;
                    "async" === wn.mutateApproach && (r = At.requestAnimationFrame || Qr), r((function() {
                        var t = !0 === wn.autoReplaceSvg ? $r.replace : $r[wn.autoReplaceSvg] || $r.replace,
                            r = Ur("mutate");
                        e.map(t), r(), n()
                    }))
                }
            }
            var Kr = !1;

            function Gr() {
                Kr = !0
            }

            function Xr() {
                Kr = !1
            }
            var Jr = null;

            function Zr(e) {
                if (Dt && wn.observeMutations) {
                    var t = e.treeCallback,
                        n = void 0 === t ? Hr : t,
                        r = e.nodeCallback,
                        a = void 0 === r ? Hr : r,
                        o = e.pseudoElementsCallback,
                        i = void 0 === o ? Hr : o,
                        l = e.observeMutationsRoot,
                        u = void 0 === l ? Rt : l;
                    Jr = new Dt((function(e) {
                        if (!Kr) {
                            var t = cr();
                            Cn(e).forEach((function(e) {
                                if ("childList" === e.type && e.addedNodes.length > 0 && !Vr(e.addedNodes[0]) && (wn.searchPseudoElements && i(e.target), n(e.target)), "attributes" === e.type && e.target.parentNode && wn.searchPseudoElements && i(e.target.parentNode), "attributes" === e.type && Vr(e.target) && ~cn.indexOf(e.attributeName))
                                    if ("class" === e.attributeName && function(e) {
                                            var t = e.getAttribute ? e.getAttribute(Bt) : null,
                                                n = e.getAttribute ? e.getAttribute(Yt) : null;
                                            return t && n
                                        }(e.target)) {
                                        var r = pr(On(e.target)),
                                            o = r.prefix,
                                            l = r.iconName;
                                        e.target.setAttribute(Bt, o || t), l && e.target.setAttribute(Yt, l)
                                    } else(u = e.target) && u.classList && u.classList.contains && u.classList.contains(wn.replacementClass) && a(e.target);
                                var u
                            }))
                        }
                    })), Ft && Jr.observe(u, {
                        childList: !0,
                        attributes: !0,
                        characterData: !0,
                        subtree: !0
                    })
                }
            }

            function ea(e) {
                var t = e.getAttribute("style"),
                    n = [];
                return t && (n = t.split(";").reduce((function(e, t) {
                    var n = t.split(":"),
                        r = n[0],
                        a = n.slice(1);
                    return r && a.length > 0 && (e[r] = a.join(":").trim()), e
                }), {})), n
            }

            function ta(e) {
                var t = e.getAttribute("data-prefix"),
                    n = e.getAttribute("data-icon"),
                    r = void 0 !== e.innerText ? e.innerText.trim() : "",
                    a = pr(On(e));
                return a.prefix || (a.prefix = cr()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = function(e, t) {
                    return (Zn[e] || {})[t]
                }(a.prefix, e.innerText) || lr(a.prefix, Vn(e.innerText))), !a.iconName && wn.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a
            }

            function na(e) {
                var t = Cn(e.attributes).reduce((function(e, t) {
                        return "class" !== e.name && "style" !== e.name && (e[t.name] = t.value), e
                    }), {}),
                    n = e.getAttribute("title"),
                    r = e.getAttribute("data-fa-title-id");
                return wn.autoA11y && (n ? t["aria-labelledby"] = "".concat(wn.replacementClass, "-title-").concat(r || En()) : (t["aria-hidden"] = "true", t.focusable = "false")), t
            }

            function ra(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        styleParser: !0
                    },
                    n = ta(e),
                    r = n.iconName,
                    a = n.prefix,
                    o = n.rest,
                    i = na(e),
                    l = yr("parseNodeAttributes", {}, e),
                    u = t.styleParser ? ea(e) : [];
                return vt({
                    iconName: r,
                    title: e.getAttribute("title"),
                    titleId: e.getAttribute("data-fa-title-id"),
                    prefix: a,
                    transform: Sn,
                    mask: {
                        iconName: null,
                        prefix: null,
                        rest: []
                    },
                    maskId: null,
                    symbol: !1,
                    extra: {
                        classes: o,
                        styles: u,
                        attributes: i
                    }
                }, l)
            }
            var aa = An.styles;

            function oa(e) {
                var t = "nest" === wn.autoReplaceSvg ? ra(e, {
                    styleParser: !1
                }) : ra(e);
                return ~t.extra.classes.indexOf(an) ? kr("generateLayersText", e, t) : kr("generateSvgReplacementMutation", e, t)
            }
            var ia = new Set;

            function la(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (!Ft) return Promise.resolve();
                var n = Rt.documentElement.classList,
                    r = function(e) {
                        return n.add("".concat($t, "-").concat(e))
                    },
                    a = function(e) {
                        return n.remove("".concat($t, "-").concat(e))
                    },
                    o = wn.autoFetchSvg ? ia : Xt.map((function(e) {
                        return "fa-".concat(e)
                    })).concat(Object.keys(aa));
                o.includes("fa") || o.push("fa");
                var i = [".".concat(an, ":not([").concat(Vt, "])")].concat(o.map((function(e) {
                    return ".".concat(e, ":not([").concat(Vt, "])")
                }))).join(", ");
                if (0 === i.length) return Promise.resolve();
                var l = [];
                try {
                    l = Cn(e.querySelectorAll(i))
                } catch (zo) {}
                if (!(l.length > 0)) return Promise.resolve();
                r("pending"), a("complete");
                var u = Ur("onTree"),
                    s = l.reduce((function(e, t) {
                        try {
                            var n = oa(t);
                            n && e.push(n)
                        } catch (zo) {
                            qt || "MissingIcon" === zo.name && console.error(zo)
                        }
                        return e
                    }), []);
                return new Promise((function(e, n) {
                    Promise.all(s).then((function(n) {
                        qr(n, (function() {
                            r("active"), r("complete"), a("pending"), "function" === typeof t && t(), u(), e()
                        }))
                    })).catch((function(e) {
                        u(), n(e)
                    }))
                }))
            }

            function ua(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                oa(e).then((function(e) {
                    e && qr([e], t)
                }))
            }
            Xt.map((function(e) {
                ia.add("fa-".concat(e))
            })), Object.keys(Zt.classic).map(ia.add.bind(ia)), Object.keys(Zt.sharp).map(ia.add.bind(ia)), ia = wt(ia);
            var sa = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.transform,
                        r = void 0 === n ? Sn : n,
                        a = t.symbol,
                        o = void 0 !== a && a,
                        i = t.mask,
                        l = void 0 === i ? null : i,
                        u = t.maskId,
                        s = void 0 === u ? null : u,
                        c = t.title,
                        f = void 0 === c ? null : c,
                        d = t.titleId,
                        p = void 0 === d ? null : d,
                        m = t.classes,
                        v = void 0 === m ? [] : m,
                        h = t.attributes,
                        g = void 0 === h ? {} : h,
                        b = t.styles,
                        y = void 0 === b ? {} : b;
                    if (e) {
                        var w = e.prefix,
                            k = e.iconName,
                            x = e.icon;
                        return jr(vt({
                            type: "icon"
                        }, e), (function() {
                            return wr("beforeDOMElementCreation", {
                                iconDefinition: e,
                                params: t
                            }), wn.autoA11y && (f ? g["aria-labelledby"] = "".concat(wn.replacementClass, "-title-").concat(p || En()) : (g["aria-hidden"] = "true", g.focusable = "false")), Pr({
                                icons: {
                                    main: Lr(x),
                                    mask: l ? Lr(l.icon) : {
                                        found: !1,
                                        width: null,
                                        height: null,
                                        icon: {}
                                    }
                                },
                                prefix: w,
                                iconName: k,
                                transform: vt(vt({}, Sn), r),
                                symbol: o,
                                title: f,
                                maskId: s,
                                titleId: p,
                                extra: {
                                    attributes: g,
                                    styles: y,
                                    classes: v
                                }
                            })
                        }))
                    }
                },
                ca = {
                    mixout: function() {
                        return {
                            icon: (e = sa, function(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    r = (t || {}).icon ? t : xr(t || {}),
                                    a = n.mask;
                                return a && (a = (a || {}).icon ? a : xr(a || {})), e(r, vt(vt({}, n), {}, {
                                    mask: a
                                }))
                            })
                        };
                        var e
                    },
                    hooks: function() {
                        return {
                            mutationObserverCallbacks: function(e) {
                                return e.treeCallback = la, e.nodeCallback = ua, e
                            }
                        }
                    },
                    provides: function(e) {
                        e.i2svg = function(e) {
                            var t = e.node,
                                n = void 0 === t ? Rt : t,
                                r = e.callback;
                            return la(n, void 0 === r ? function() {} : r)
                        }, e.generateSvgReplacementMutation = function(e, t) {
                            var n = t.iconName,
                                r = t.title,
                                a = t.titleId,
                                o = t.prefix,
                                i = t.transform,
                                l = t.symbol,
                                u = t.mask,
                                s = t.maskId,
                                c = t.extra;
                            return new Promise((function(t, f) {
                                Promise.all([Ar(n, o), u.iconName ? Ar(u.iconName, u.prefix) : Promise.resolve({
                                    found: !1,
                                    width: 512,
                                    height: 512,
                                    icon: {}
                                })]).then((function(u) {
                                    var f = yt(u, 2),
                                        d = f[0],
                                        p = f[1];
                                    t([e, Pr({
                                        icons: {
                                            main: d,
                                            mask: p
                                        },
                                        prefix: o,
                                        iconName: n,
                                        transform: i,
                                        symbol: l,
                                        maskId: s,
                                        title: r,
                                        titleId: a,
                                        extra: c,
                                        watchable: !0
                                    })])
                                })).catch(f)
                            }))
                        }, e.generateAbstractIcon = function(e) {
                            var t, n = e.children,
                                r = e.attributes,
                                a = e.main,
                                o = e.transform,
                                i = jn(e.styles);
                            return i.length > 0 && (r.style = i), Pn(o) && (t = kr("generateAbstractTransformGrouping", {
                                main: a,
                                transform: o,
                                containerWidth: a.width,
                                iconWidth: a.width
                            })), n.push(t || a.icon), {
                                children: n,
                                attributes: r
                            }
                        }
                    }
                },
                fa = {
                    mixout: function() {
                        return {
                            layer: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = t.classes,
                                    r = void 0 === n ? [] : n;
                                return jr({
                                    type: "layer"
                                }, (function() {
                                    wr("beforeDOMElementCreation", {
                                        assembler: e,
                                        params: t
                                    });
                                    var n = [];
                                    return e((function(e) {
                                        Array.isArray(e) ? e.map((function(e) {
                                            n = n.concat(e.abstract)
                                        })) : n = n.concat(e.abstract)
                                    })), [{
                                        tag: "span",
                                        attributes: {
                                            class: ["".concat(wn.cssPrefix, "-layers")].concat(wt(r)).join(" ")
                                        },
                                        children: n
                                    }]
                                }))
                            }
                        }
                    }
                },
                da = {
                    mixout: function() {
                        return {
                            counter: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = t.title,
                                    r = void 0 === n ? null : n,
                                    a = t.classes,
                                    o = void 0 === a ? [] : a,
                                    i = t.attributes,
                                    l = void 0 === i ? {} : i,
                                    u = t.styles,
                                    s = void 0 === u ? {} : u;
                                return jr({
                                    type: "counter",
                                    content: e
                                }, (function() {
                                    return wr("beforeDOMElementCreation", {
                                        content: e,
                                        params: t
                                    }), _r({
                                        content: e.toString(),
                                        title: r,
                                        extra: {
                                            attributes: l,
                                            styles: s,
                                            classes: ["".concat(wn.cssPrefix, "-layers-counter")].concat(wt(o))
                                        }
                                    })
                                }))
                            }
                        }
                    }
                },
                pa = {
                    mixout: function() {
                        return {
                            text: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = t.transform,
                                    r = void 0 === n ? Sn : n,
                                    a = t.title,
                                    o = void 0 === a ? null : a,
                                    i = t.classes,
                                    l = void 0 === i ? [] : i,
                                    u = t.attributes,
                                    s = void 0 === u ? {} : u,
                                    c = t.styles,
                                    f = void 0 === c ? {} : c;
                                return jr({
                                    type: "text",
                                    content: e
                                }, (function() {
                                    return wr("beforeDOMElementCreation", {
                                        content: e,
                                        params: t
                                    }), Tr({
                                        content: e,
                                        transform: vt(vt({}, Sn), r),
                                        title: o,
                                        extra: {
                                            attributes: s,
                                            styles: f,
                                            classes: ["".concat(wn.cssPrefix, "-layers-text")].concat(wt(l))
                                        }
                                    })
                                }))
                            }
                        }
                    },
                    provides: function(e) {
                        e.generateLayersText = function(e, t) {
                            var n = t.title,
                                r = t.transform,
                                a = t.extra,
                                o = null,
                                i = null;
                            if (Ut) {
                                var l = parseInt(getComputedStyle(e).fontSize, 10),
                                    u = e.getBoundingClientRect();
                                o = u.width / l, i = u.height / l
                            }
                            return wn.autoA11y && !n && (a.attributes["aria-hidden"] = "true"), Promise.resolve([e, Tr({
                                content: e.innerHTML,
                                width: o,
                                height: i,
                                transform: r,
                                title: n,
                                extra: a,
                                watchable: !0
                            })])
                        }
                    }
                },
                ma = new RegExp('"', "ug"),
                va = [1105920, 1112319];

            function ha(e, t) {
                var n = "".concat("data-fa-pseudo-element-pending").concat(t.replace(":", "-"));
                return new Promise((function(r, a) {
                    if (null !== e.getAttribute(n)) return r();
                    var o = Cn(e.children).filter((function(e) {
                            return e.getAttribute(Wt) === t
                        }))[0],
                        i = At.getComputedStyle(e, t),
                        l = i.getPropertyValue("font-family").match(on),
                        u = i.getPropertyValue("font-weight"),
                        s = i.getPropertyValue("content");
                    if (o && !l) return e.removeChild(o), r();
                    if (l && "none" !== s && "" !== s) {
                        var c = i.getPropertyValue("content"),
                            f = ~["Sharp"].indexOf(l[2]) ? Gt : Kt,
                            d = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? en[f][l[2].toLowerCase()] : ln[f][u],
                            p = function(e) {
                                var t = e.replace(ma, ""),
                                    n = function(e, t) {
                                        var n, r = e.length,
                                            a = e.charCodeAt(t);
                                        return a >= 55296 && a <= 56319 && r > t + 1 && (n = e.charCodeAt(t + 1)) >= 56320 && n <= 57343 ? 1024 * (a - 55296) + n - 56320 + 65536 : a
                                    }(t, 0),
                                    r = n >= va[0] && n <= va[1],
                                    a = 2 === t.length && t[0] === t[1];
                                return {
                                    value: Vn(a ? t[0] : t),
                                    isSecondary: r || a
                                }
                            }(c),
                            m = p.value,
                            v = p.isSecondary,
                            h = l[0].startsWith("FontAwesome"),
                            g = lr(d, m),
                            b = g;
                        if (h) {
                            var y = function(e) {
                                var t = tr[e],
                                    n = lr("fas", e);
                                return t || (n ? {
                                    prefix: "fas",
                                    iconName: n
                                } : null) || {
                                    prefix: null,
                                    iconName: null
                                }
                            }(m);
                            y.iconName && y.prefix && (g = y.iconName, d = y.prefix)
                        }
                        if (!g || v || o && o.getAttribute(Bt) === d && o.getAttribute(Yt) === b) r();
                        else {
                            e.setAttribute(n, b), o && e.removeChild(o);
                            var w = {
                                    iconName: null,
                                    title: null,
                                    titleId: null,
                                    prefix: null,
                                    transform: Sn,
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
                                k = w.extra;
                            k.attributes[Wt] = t, Ar(g, d).then((function(a) {
                                var o = Pr(vt(vt({}, w), {}, {
                                        icons: {
                                            main: a,
                                            mask: {
                                                prefix: null,
                                                iconName: null,
                                                rest: []
                                            }
                                        },
                                        prefix: d,
                                        iconName: b,
                                        extra: k,
                                        watchable: !0
                                    })),
                                    i = Rt.createElement("svg");
                                "::before" === t ? e.insertBefore(i, e.firstChild) : e.appendChild(i), i.outerHTML = o.map((function(e) {
                                    return Fn(e)
                                })).join("\n"), e.removeAttribute(n), r()
                            })).catch(a)
                        }
                    } else r()
                }))
            }

            function ga(e) {
                return Promise.all([ha(e, "::before"), ha(e, "::after")])
            }

            function ba(e) {
                return e.parentNode !== document.head && !~Qt.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Wt) && (!e.parentNode || "svg" !== e.parentNode.tagName)
            }

            function ya(e) {
                if (Ft) return new Promise((function(t, n) {
                    var r = Cn(e.querySelectorAll("*")).filter(ba).map(ga),
                        a = Ur("searchPseudoElements");
                    Gr(), Promise.all(r).then((function() {
                        a(), Xr(), t()
                    })).catch((function() {
                        a(), Xr(), n()
                    }))
                }))
            }
            var wa = !1,
                ka = function(e) {
                    return e.toLowerCase().split(" ").reduce((function(e, t) {
                        var n = t.toLowerCase().split("-"),
                            r = n[0],
                            a = n.slice(1).join("-");
                        if (r && "h" === a) return e.flipX = !0, e;
                        if (r && "v" === a) return e.flipY = !0, e;
                        if (a = parseFloat(a), isNaN(a)) return e;
                        switch (r) {
                            case "grow":
                                e.size = e.size + a;
                                break;
                            case "shrink":
                                e.size = e.size - a;
                                break;
                            case "left":
                                e.x = e.x - a;
                                break;
                            case "right":
                                e.x = e.x + a;
                                break;
                            case "up":
                                e.y = e.y - a;
                                break;
                            case "down":
                                e.y = e.y + a;
                                break;
                            case "rotate":
                                e.rotate = e.rotate + a
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
                xa = {
                    mixout: function() {
                        return {
                            parse: {
                                transform: function(e) {
                                    return ka(e)
                                }
                            }
                        }
                    },
                    hooks: function() {
                        return {
                            parseNodeAttributes: function(e, t) {
                                var n = t.getAttribute("data-fa-transform");
                                return n && (e.transform = ka(n)), e
                            }
                        }
                    },
                    provides: function(e) {
                        e.generateAbstractTransformGrouping = function(e) {
                            var t = e.main,
                                n = e.transform,
                                r = e.containerWidth,
                                a = e.iconWidth,
                                o = {
                                    transform: "translate(".concat(r / 2, " 256)")
                                },
                                i = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") "),
                                l = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "),
                                u = "rotate(".concat(n.rotate, " 0 0)"),
                                s = {
                                    outer: o,
                                    inner: {
                                        transform: "".concat(i, " ").concat(l, " ").concat(u)
                                    },
                                    path: {
                                        transform: "translate(".concat(a / 2 * -1, " -256)")
                                    }
                                };
                            return {
                                tag: "g",
                                attributes: vt({}, s.outer),
                                children: [{
                                    tag: "g",
                                    attributes: vt({}, s.inner),
                                    children: [{
                                        tag: t.icon.tag,
                                        children: t.icon.children,
                                        attributes: vt(vt({}, t.icon.attributes), s.path)
                                    }]
                                }]
                            }
                        }
                    }
                },
                Sa = {
                    x: 0,
                    y: 0,
                    width: "100%",
                    height: "100%"
                };

            function Ea(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
            }
            var Ca = {
                    hooks: function() {
                        return {
                            parseNodeAttributes: function(e, t) {
                                var n = t.getAttribute("data-fa-mask"),
                                    r = n ? pr(n.split(" ").map((function(e) {
                                        return e.trim()
                                    }))) : {
                                        prefix: null,
                                        iconName: null,
                                        rest: []
                                    };
                                return r.prefix || (r.prefix = cr()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e
                            }
                        }
                    },
                    provides: function(e) {
                        e.generateAbstractMask = function(e) {
                            var t, n = e.children,
                                r = e.attributes,
                                a = e.main,
                                o = e.mask,
                                i = e.maskId,
                                l = e.transform,
                                u = a.width,
                                s = a.icon,
                                c = o.width,
                                f = o.icon,
                                d = function(e) {
                                    var t = e.transform,
                                        n = e.containerWidth,
                                        r = e.iconWidth,
                                        a = {
                                            transform: "translate(".concat(n / 2, " 256)")
                                        },
                                        o = "translate(".concat(32 * t.x, ", ").concat(32 * t.y, ") "),
                                        i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "),
                                        l = "rotate(".concat(t.rotate, " 0 0)");
                                    return {
                                        outer: a,
                                        inner: {
                                            transform: "".concat(o, " ").concat(i, " ").concat(l)
                                        },
                                        path: {
                                            transform: "translate(".concat(r / 2 * -1, " -256)")
                                        }
                                    }
                                }({
                                    transform: l,
                                    containerWidth: c,
                                    iconWidth: u
                                }),
                                p = {
                                    tag: "rect",
                                    attributes: vt(vt({}, Sa), {}, {
                                        fill: "white"
                                    })
                                },
                                m = s.children ? {
                                    children: s.children.map(Ea)
                                } : {},
                                v = {
                                    tag: "g",
                                    attributes: vt({}, d.inner),
                                    children: [Ea(vt({
                                        tag: s.tag,
                                        attributes: vt(vt({}, s.attributes), d.path)
                                    }, m))]
                                },
                                h = {
                                    tag: "g",
                                    attributes: vt({}, d.outer),
                                    children: [v]
                                },
                                g = "mask-".concat(i || En()),
                                b = "clip-".concat(i || En()),
                                y = {
                                    tag: "mask",
                                    attributes: vt(vt({}, Sa), {}, {
                                        id: g,
                                        maskUnits: "userSpaceOnUse",
                                        maskContentUnits: "userSpaceOnUse"
                                    }),
                                    children: [p, h]
                                },
                                w = {
                                    tag: "defs",
                                    children: [{
                                        tag: "clipPath",
                                        attributes: {
                                            id: b
                                        },
                                        children: (t = f, "g" === t.tag ? t.children : [t])
                                    }, y]
                                };
                            return n.push(w, {
                                tag: "rect",
                                attributes: vt({
                                    fill: "currentColor",
                                    "clip-path": "url(#".concat(b, ")"),
                                    mask: "url(#".concat(g, ")")
                                }, Sa)
                            }), {
                                children: n,
                                attributes: r
                            }
                        }
                    }
                },
                Oa = {
                    provides: function(e) {
                        var t = !1;
                        At.matchMedia && (t = At.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
                            var e = [],
                                n = {
                                    fill: "currentColor"
                                },
                                r = {
                                    attributeType: "XML",
                                    repeatCount: "indefinite",
                                    dur: "2s"
                                };
                            e.push({
                                tag: "path",
                                attributes: vt(vt({}, n), {}, {
                                    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                                })
                            });
                            var a = vt(vt({}, r), {}, {
                                    attributeName: "opacity"
                                }),
                                o = {
                                    tag: "circle",
                                    attributes: vt(vt({}, n), {}, {
                                        cx: "256",
                                        cy: "364",
                                        r: "28"
                                    }),
                                    children: []
                                };
                            return t || o.children.push({
                                tag: "animate",
                                attributes: vt(vt({}, r), {}, {
                                    attributeName: "r",
                                    values: "28;14;28;28;14;28;"
                                })
                            }, {
                                tag: "animate",
                                attributes: vt(vt({}, a), {}, {
                                    values: "1;0;1;1;0;1;"
                                })
                            }), e.push(o), e.push({
                                tag: "path",
                                attributes: vt(vt({}, n), {}, {
                                    opacity: "1",
                                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                                }),
                                children: t ? [] : [{
                                    tag: "animate",
                                    attributes: vt(vt({}, a), {}, {
                                        values: "1;0;0;0;0;1;"
                                    })
                                }]
                            }), t || e.push({
                                tag: "path",
                                attributes: vt(vt({}, n), {}, {
                                    opacity: "0",
                                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                                }),
                                children: [{
                                    tag: "animate",
                                    attributes: vt(vt({}, a), {}, {
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
            ! function(e, t) {
                var n = t.mixoutsTo;
                vr = e, hr = {}, Object.keys(gr).forEach((function(e) {
                    -1 === br.indexOf(e) && delete gr[e]
                })), vr.forEach((function(e) {
                    var t = e.mixout ? e.mixout() : {};
                    if (Object.keys(t).forEach((function(e) {
                            "function" === typeof t[e] && (n[e] = t[e]), "object" === ht(t[e]) && Object.keys(t[e]).forEach((function(r) {
                                n[e] || (n[e] = {}), n[e][r] = t[e][r]
                            }))
                        })), e.hooks) {
                        var r = e.hooks();
                        Object.keys(r).forEach((function(e) {
                            hr[e] || (hr[e] = []), hr[e].push(r[e])
                        }))
                    }
                    e.provides && e.provides(gr)
                }))
            }([Ln, ca, fa, da, pa, {
                hooks: function() {
                    return {
                        mutationObserverCallbacks: function(e) {
                            return e.pseudoElementsCallback = ya, e
                        }
                    }
                },
                provides: function(e) {
                    e.pseudoElements2svg = function(e) {
                        var t = e.node,
                            n = void 0 === t ? Rt : t;
                        wn.searchPseudoElements && ya(n)
                    }
                }
            }, {
                mixout: function() {
                    return {
                        dom: {
                            unwatch: function() {
                                Gr(), wa = !0
                            }
                        }
                    }
                },
                hooks: function() {
                    return {
                        bootstrap: function() {
                            Zr(yr("mutationObserverCallbacks", {}))
                        },
                        noAuto: function() {
                            Jr && Jr.disconnect()
                        },
                        watch: function(e) {
                            var t = e.observeMutationsRoot;
                            wa ? Xr() : Zr(yr("mutationObserverCallbacks", {
                                observeMutationsRoot: t
                            }))
                        }
                    }
                }
            }, xa, Ca, Oa, {
                hooks: function() {
                    return {
                        parseNodeAttributes: function(e, t) {
                            var n = t.getAttribute("data-fa-symbol"),
                                r = null !== n && ("" === n || n);
                            return e.symbol = r, e
                        }
                    }
                }
            }], {
                mixoutsTo: Or
            });
            var Na = Or.parse,
                ja = Or.icon,
                Pa = n(7),
                Ta = n.n(Pa);

            function _a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function za(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _a(Object(n), !0).forEach((function(t) {
                        Ma(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function La(e) {
                return La = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, La(e)
            }

            function Ma(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Aa(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }

            function Ra(e) {
                return function(e) {
                    if (Array.isArray(e)) return Da(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return Da(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Da(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Da(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ia(e) {
                return t = e, (t -= 0) === t ? e : (e = e.replace(/[\-_\s]+(.)?/g, (function(e, t) {
                    return t ? t.toUpperCase() : ""
                }))).substr(0, 1).toLowerCase() + e.substr(1);
                var t
            }
            var Fa = ["style"];

            function Ua(e) {
                return e.split(";").map((function(e) {
                    return e.trim()
                })).filter((function(e) {
                    return e
                })).reduce((function(e, t) {
                    var n, r = t.indexOf(":"),
                        a = Ia(t.slice(0, r)),
                        o = t.slice(r + 1).trim();
                    return a.startsWith("webkit") ? e[(n = a, n.charAt(0).toUpperCase() + n.slice(1))] = o : e[a] = o, e
                }), {})
            }
            var Ha = !1;
            try {
                Ha = !0
            } catch (zo) {}

            function Va(e) {
                return e && "object" === La(e) && e.prefix && e.iconName && e.icon ? e : Na.icon ? Na.icon(e) : null === e ? null : e && "object" === La(e) && e.prefix && e.iconName ? e : Array.isArray(e) && 2 === e.length ? {
                    prefix: e[0],
                    iconName: e[1]
                } : "string" === typeof e ? {
                    prefix: "fas",
                    iconName: e
                } : void 0
            }

            function Wa(e, t) {
                return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Ma({}, e, t) : {}
            }
            var Ba = e.forwardRef((function(e, t) {
                var n = e.icon,
                    r = e.mask,
                    a = e.symbol,
                    o = e.className,
                    i = e.title,
                    l = e.titleId,
                    u = e.maskId,
                    s = Va(n),
                    c = Wa("classes", [].concat(Ra(function(e) {
                        var t, n = e.beat,
                            r = e.fade,
                            a = e.beatFade,
                            o = e.bounce,
                            i = e.shake,
                            l = e.flash,
                            u = e.spin,
                            s = e.spinPulse,
                            c = e.spinReverse,
                            f = e.pulse,
                            d = e.fixedWidth,
                            p = e.inverse,
                            m = e.border,
                            v = e.listItem,
                            h = e.flip,
                            g = e.size,
                            b = e.rotation,
                            y = e.pull,
                            w = (Ma(t = {
                                "fa-beat": n,
                                "fa-fade": r,
                                "fa-beat-fade": a,
                                "fa-bounce": o,
                                "fa-shake": i,
                                "fa-flash": l,
                                "fa-spin": u,
                                "fa-spin-reverse": c,
                                "fa-spin-pulse": s,
                                "fa-pulse": f,
                                "fa-fw": d,
                                "fa-inverse": p,
                                "fa-border": m,
                                "fa-li": v,
                                "fa-flip": !0 === h,
                                "fa-flip-horizontal": "horizontal" === h || "both" === h,
                                "fa-flip-vertical": "vertical" === h || "both" === h
                            }, "fa-".concat(g), "undefined" !== typeof g && null !== g), Ma(t, "fa-rotate-".concat(b), "undefined" !== typeof b && null !== b && 0 !== b), Ma(t, "fa-pull-".concat(y), "undefined" !== typeof y && null !== y), Ma(t, "fa-swap-opacity", e.swapOpacity), t);
                        return Object.keys(w).map((function(e) {
                            return w[e] ? e : null
                        })).filter((function(e) {
                            return e
                        }))
                    }(e)), Ra(o.split(" ")))),
                    f = Wa("transform", "string" === typeof e.transform ? Na.transform(e.transform) : e.transform),
                    d = Wa("mask", Va(r)),
                    p = ja(s, za(za(za(za({}, c), f), d), {}, {
                        symbol: a,
                        title: i,
                        titleId: l,
                        maskId: u
                    }));
                if (!p) return function() {
                    var e;
                    !Ha && console && "function" === typeof console.error && (e = console).error.apply(e, arguments)
                }("Could not find icon", s), null;
                var m = p.abstract,
                    v = {
                        ref: t
                    };
                return Object.keys(e).forEach((function(t) {
                    Ba.defaultProps.hasOwnProperty(t) || (v[t] = e[t])
                })), Ya(m[0], v)
            }));
            Ba.displayName = "FontAwesomeIcon", Ba.propTypes = {
                beat: Ta().bool,
                border: Ta().bool,
                beatFade: Ta().bool,
                bounce: Ta().bool,
                className: Ta().string,
                fade: Ta().bool,
                flash: Ta().bool,
                mask: Ta().oneOfType([Ta().object, Ta().array, Ta().string]),
                maskId: Ta().string,
                fixedWidth: Ta().bool,
                inverse: Ta().bool,
                flip: Ta().oneOf([!0, !1, "horizontal", "vertical", "both"]),
                icon: Ta().oneOfType([Ta().object, Ta().array, Ta().string]),
                listItem: Ta().bool,
                pull: Ta().oneOf(["right", "left"]),
                pulse: Ta().bool,
                rotation: Ta().oneOf([0, 90, 180, 270]),
                shake: Ta().bool,
                size: Ta().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
                spin: Ta().bool,
                spinPulse: Ta().bool,
                spinReverse: Ta().bool,
                symbol: Ta().oneOfType([Ta().bool, Ta().string]),
                title: Ta().string,
                titleId: Ta().string,
                transform: Ta().oneOfType([Ta().string, Ta().object]),
                swapOpacity: Ta().bool
            }, Ba.defaultProps = {
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
            var Ya = function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if ("string" === typeof n) return n;
                    var a = (n.children || []).map((function(n) {
                            return e(t, n)
                        })),
                        o = Object.keys(n.attributes || {}).reduce((function(e, t) {
                            var r = n.attributes[t];
                            switch (t) {
                                case "class":
                                    e.attrs.className = r, delete n.attributes.class;
                                    break;
                                case "style":
                                    e.attrs.style = Ua(r);
                                    break;
                                default:
                                    0 === t.indexOf("aria-") || 0 === t.indexOf("data-") ? e.attrs[t.toLowerCase()] = r : e.attrs[Ia(t)] = r
                            }
                            return e
                        }), {
                            attrs: {}
                        }),
                        i = r.style,
                        l = void 0 === i ? {} : i,
                        u = Aa(r, Fa);
                    return o.attrs.style = za(za({}, o.attrs.style), l), t.apply(void 0, [n.tag, za(za({}, o.attrs), u)].concat(Ra(a)))
                }.bind(null, e.createElement),
                $a = {
                    prefix: "fab",
                    iconName: "linkedin",
                    icon: [448, 512, [], "f08c", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]
                },
                Qa = {
                    prefix: "fab",
                    iconName: "instagram",
                    icon: [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
                },
                qa = {
                    prefix: "fab",
                    iconName: "facebook",
                    icon: [512, 512, [62e3], "f09a", "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]
                },
                Ka = {
                    prefix: "fab",
                    iconName: "twitter",
                    icon: [512, 512, [], "f099", "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]
                },
                Ga = function() {
                    return (0, J.jsxs)("div", {
                        className: "social-container text-blue",
                        children: [(0, J.jsx)("a", {
                            href: "https://facebook.com/womeninsurgeryitalia/",
                            className: "inline cursor-pointer facebook social",
                            children: (0, J.jsx)(Ba, {
                                icon: qa,
                                size: "2x",
                                className: "h-6 w-6 mr-3 dark:text-white"
                            })
                        }), (0, J.jsx)("a", {
                            href: "https://linkedin.com/in/women-in-surgery-italia-0a8bb313a",
                            className: "inline cursor-pointer linkedin social",
                            children: (0, J.jsx)(Ba, {
                                icon: $a,
                                size: "2x",
                                className: "h-6 w-6 mr-3 dark:text-white"
                            })
                        }), (0, J.jsx)("a", {
                            href: "https://twitter.com/@wisitalia",
                            className: "inline cursor-pointer twitter social",
                            children: (0, J.jsx)(Ba, {
                                icon: Ka,
                                size: "2x",
                                className: "h-6 w-6 mr-3 dark:text-white"
                            })
                        }), (0, J.jsx)("a", {
                            href: "https://instagram.com/womeninsurgeryitalia?igshid=hakfpty6hy54",
                            className: "inline cursor-pointer instagram social",
                            children: (0, J.jsx)(Ba, {
                                icon: Qa,
                                size: "2x",
                                className: "h-6 w-6 mr-2 dark:text-white"
                            })
                        })]
                    })
                },
                Xa = function(e) {
                    var t = e.isOpen,
                        n = e.handleClose;
                    return (0, J.jsxs)(pt, {
                        title: "Medical Words",
                        isOpen: t,
                        handleClose: n,
                        children: [(0, J.jsx)("p", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: "Indovina ogni giorno termini ed acronimi medici di 5 lettere in 6 tentativi."
                        }), (0, J.jsxs)("p", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: ["Condividi la soluzione con gli amici e sui nostri canali social...", (0, J.jsx)(Ga, {})]
                        }), (0, J.jsx)("p", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: "Seguici per aggiornamenti quotidiani"
                        }), (0, J.jsxs)("p", {
                            className: "mt-3 italic text-sm text-gray-500 dark:text-gray-300",
                            children: ["Medical Words \xe8 una versione customizzata per  ", (0, J.jsx)("a", {
                                href: "https://womeninsurgeryitalia.it/",
                                className: "underline font-bold",
                                children: "Women in Surgery Italia"
                            }), " ed open source (", (0, J.jsx)("a", {
                                href: "https://github.com/par-le/react-wordle",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "underline",
                                children: "qui il codice"
                            }), ") del gioco in inglese ", (0, J.jsx)("a", {
                                href: "https://www.nytimes.com/games/wordle/index.html",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "underline font-bold",
                                children: "Wordle"
                            })]
                        }), (0, J.jsx)("h1", {
                            className: "mt-6 t dark:text-gray-300 dark:text-gray-300",
                            children: "Come Giocare:"
                        }), (0, J.jsx)("p", {
                            className: "text-sm text-gray-500 dark:text-gray-300 ",
                            children: 'Dopo ogni tentativo, i colori delle tessere cambiano per mostrarti quanto ci sei andato vicino."'
                        }), (0, J.jsxs)("div", {
                            className: "flex justify-center mb-1 mt-4",
                            children: [(0, J.jsx)(ke, {
                                value: "F",
                                status: "correct"
                            }), (0, J.jsx)(ke, {
                                value: "L"
                            }), (0, J.jsx)(ke, {
                                value: "E"
                            }), (0, J.jsx)(ke, {
                                value: "B"
                            }), (0, J.jsx)(ke, {
                                value: "o"
                            })]
                        }), (0, J.jsx)("p", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: "La lettera F \xe8 nella parola ed \xe8 nel posto giusto."
                        }), (0, J.jsxs)("div", {
                            className: "flex justify-center mb-1 mt-4",
                            children: [(0, J.jsx)(ke, {
                                value: "L"
                            }), (0, J.jsx)(ke, {
                                value: "I"
                            }), (0, J.jsx)(ke, {
                                value: "N",
                                status: "present"
                            }), (0, J.jsx)(ke, {
                                value: "F"
                            }), (0, J.jsx)(ke, {
                                value: "A"
                            })]
                        }), (0, J.jsx)("p", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: "La lettera N \xe8 nella parola ma nel posto sbagliato"
                        }), (0, J.jsxs)("div", {
                            className: "flex justify-center mb-1 mt-4",
                            children: [(0, J.jsx)(ke, {
                                value: "C"
                            }), (0, J.jsx)(ke, {
                                value: "R"
                            }), (0, J.jsx)(ke, {
                                value: "O"
                            }), (0, J.jsx)(ke, {
                                value: "H",
                                status: "absent"
                            }), (0, J.jsx)(ke, {
                                value: "N"
                            })]
                        }), (0, J.jsx)("p", {
                            className: "text-sm text-gray-500 dark:text-gray-300",
                            children: "La lettera H non \xe8 nella parola."
                        }), (0, J.jsx)("p", {
                            className: "mt-6 text-sm text-gray-500 dark:text-gray-300",
                            children: "Ogni giorno c'\xe8 una nuova parola da indovinare, la stessa per tutti."
                        })]
                    })
                };

            function Ja(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Za(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function eo(e, t, n) {
                return t && Za(e.prototype, t), n && Za(e, n), e
            }

            function to(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ro(e, t)
            }

            function no(e) {
                return no = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, no(e)
            }

            function ro(e, t) {
                return ro = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, ro(e, t)
            }

            function ao(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function oo(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (zo) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = no(e);
                    if (t) {
                        var a = no(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return ao(this, n)
                }
            }

            function io(e) {
                return function(e) {
                    if (Array.isArray(e)) return lo(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return lo(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return lo(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function lo(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function uo(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                    n = String(e);
                if (0 === t) return n;
                var r = n.match(/(.*?)([0-9]+)(.*)/),
                    a = r ? r[1] : "",
                    o = r ? r[3] : "",
                    i = r ? r[2] : n,
                    l = i.length >= t ? i : (io(Array(t)).map((function() {
                        return "0"
                    })).join("") + i).slice(-1 * t);
                return "".concat(a).concat(l).concat(o)
            }
            var so = {
                daysInHours: !1,
                zeroPadTime: 2
            };

            function co(e, t) {
                var n = e.days,
                    r = e.hours,
                    a = e.minutes,
                    o = e.seconds,
                    i = Object.assign(Object.assign({}, so), t),
                    l = i.daysInHours,
                    u = i.zeroPadTime,
                    s = i.zeroPadDays,
                    c = void 0 === s ? u : s,
                    f = Math.min(2, u),
                    d = l ? uo(r + 24 * n, u) : uo(r, f);
                return {
                    days: l ? "" : uo(n, c),
                    hours: d,
                    minutes: uo(a, f),
                    seconds: uo(o, f)
                }
            }
            var fo = function(t) {
                to(r, t);
                var n = oo(r);

                function r() {
                    var e;
                    return Ja(this, r), (e = n.apply(this, arguments)).state = {
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
                    }, e.addTime = function(t) {
                        e.stopCountdown(), e.setState((function(e) {
                            return {
                                count: e.count + t
                            }
                        }), e.startCountdown)
                    }, e
                }
                return eo(r, [{
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
                }]), r
            }(e.Component);
            fo.propTypes = {
                count: Pa.number,
                children: Pa.element,
                onComplete: Pa.func
            };
            var po = function(t) {
                to(r, t);
                var n = oo(r);

                function r(t) {
                    var a;
                    if (Ja(this, r), (a = n.call(this, t)).mounted = !1, a.initialTimestamp = a.calcOffsetStartTimestamp(), a.offsetStartTimestamp = a.props.autoStart ? 0 : a.initialTimestamp, a.offsetTime = 0, a.legacyMode = !1, a.legacyCountdownRef = (0, e.createRef)(), a.tick = function() {
                            var e = a.calcTimeDelta(),
                                t = e.completed && !a.props.overtime ? void 0 : a.props.onTick;
                            a.setTimeDeltaState(e, void 0, t)
                        }, a.start = function() {
                            if (!a.isStarted()) {
                                var e = a.offsetStartTimestamp;
                                a.offsetStartTimestamp = 0, a.offsetTime += e ? a.calcOffsetStartTimestamp() - e : 0;
                                var t = a.calcTimeDelta();
                                a.setTimeDeltaState(t, "STARTED", a.props.onStart), a.props.controlled || t.completed && !a.props.overtime || (a.clearTimer(), a.interval = window.setInterval(a.tick, a.props.intervalDelay))
                            }
                        }, a.pause = function() {
                            a.isPaused() || (a.clearTimer(), a.offsetStartTimestamp = a.calcOffsetStartTimestamp(), a.setTimeDeltaState(a.state.timeDelta, "PAUSED", a.props.onPause))
                        }, a.stop = function() {
                            a.isStopped() || (a.clearTimer(), a.offsetStartTimestamp = a.calcOffsetStartTimestamp(), a.offsetTime = a.offsetStartTimestamp - a.initialTimestamp, a.setTimeDeltaState(a.calcTimeDelta(), "STOPPED", a.props.onStop))
                        }, a.isStarted = function() {
                            return a.isStatus("STARTED")
                        }, a.isPaused = function() {
                            return a.isStatus("PAUSED")
                        }, a.isStopped = function() {
                            return a.isStatus("STOPPED")
                        }, a.isCompleted = function() {
                            return a.isStatus("COMPLETED")
                        }, a.handleOnComplete = function(e) {
                            a.props.onComplete && a.props.onComplete(e)
                        }, t.date) {
                        var o = a.calcTimeDelta();
                        a.state = {
                            timeDelta: o,
                            status: o.completed ? "COMPLETED" : "STOPPED"
                        }
                    } else a.legacyMode = !0;
                    return a
                }
                return eo(r, [{
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
                            t = e.date,
                            n = e.now,
                            r = e.precision,
                            a = e.controlled,
                            o = e.overtime;
                        return function(e) {
                            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = n.now,
                                a = void 0 === r ? Date.now : r,
                                o = n.precision,
                                i = void 0 === o ? 0 : o,
                                l = n.controlled,
                                u = n.offsetTime,
                                s = void 0 === u ? 0 : u,
                                c = n.overtime;
                            t = "string" === typeof e ? new Date(e).getTime() : e instanceof Date ? e.getTime() : e, l || (t += s);
                            var f = l ? t : t - a(),
                                d = Math.min(20, Math.max(0, i)),
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
                        }(t, {
                            now: n,
                            precision: r,
                            controlled: a,
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
                    value: function(e, t, n) {
                        var r = this;
                        if (this.mounted) {
                            var a;
                            !this.state.timeDelta.completed && e.completed && (this.props.overtime || this.clearTimer(), a = this.handleOnComplete);
                            return this.setState((function(n) {
                                var a = t || n.status;
                                return e.completed && !r.props.overtime ? a = "COMPLETED" : t || "COMPLETED" !== a || (a = "STOPPED"), {
                                    timeDelta: e,
                                    status: a
                                }
                            }), (function() {
                                n && n(r.state.timeDelta), a && a(r.state.timeDelta)
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
                            t = e.daysInHours,
                            n = e.zeroPadTime,
                            r = e.zeroPadDays,
                            a = this.state.timeDelta;
                        return Object.assign(Object.assign({}, a), {
                            api: this.getApi(),
                            props: this.props,
                            formatted: co(a, {
                                daysInHours: t,
                                zeroPadTime: n,
                                zeroPadDays: r
                            })
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (this.legacyMode) {
                            var t = this.props,
                                n = t.count,
                                r = t.children,
                                a = t.onComplete;
                            return (0, e.createElement)(fo, {
                                ref: this.legacyCountdownRef,
                                count: n,
                                onComplete: a
                            }, r)
                        }
                        var o = this.props,
                            i = o.className,
                            l = o.overtime,
                            u = o.children,
                            s = o.renderer,
                            c = this.getRenderProps();
                        if (s) return s(c);
                        if (u && this.state.timeDelta.completed && !l) return (0, e.cloneElement)(u, {
                            countdown: c
                        });
                        var f = c.formatted,
                            d = f.days,
                            p = f.hours,
                            m = f.minutes,
                            v = f.seconds;
                        return (0, e.createElement)("span", {
                            className: i
                        }, c.total < 0 ? "-" : "", d, d ? ":" : "", p, ":", m, ":", v)
                    }
                }]), r
            }(e.Component);
            po.defaultProps = Object.assign(Object.assign({}, so), {
                controlled: !1,
                intervalDelay: 1e3,
                precision: 0,
                autoStart: !0
            }), po.propTypes = {
                date: (0, Pa.oneOfType)([(0, Pa.instanceOf)(Date), Pa.string, Pa.number]),
                daysInHours: Pa.bool,
                zeroPadTime: Pa.number,
                zeroPadDays: Pa.number,
                controlled: Pa.bool,
                intervalDelay: Pa.number,
                precision: Pa.number,
                autoStart: Pa.bool,
                overtime: Pa.bool,
                className: Pa.string,
                children: Pa.element,
                renderer: Pa.func,
                now: Pa.func,
                onMount: Pa.func,
                onStart: Pa.func,
                onPause: Pa.func,
                onStop: Pa.func,
                onTick: Pa.func,
                onComplete: Pa.func
            };
            var mo = po,
                vo = function(e) {
                    var t = e.label,
                        n = e.value;
                    return (0, J.jsxs)("div", {
                        className: "items-center justify-center m-1 w-1/4 dark:text-white",
                        children: [(0, J.jsx)("div", {
                            className: "text-3xl font-bold",
                            children: n
                        }), (0, J.jsx)("div", {
                            className: "text-xs",
                            children: t
                        })]
                    })
                },
                ho = function(e) {
                    var t = e.gameStats;
                    return (0, J.jsxs)("div", {
                        className: "flex justify-center my-2",
                        children: [(0, J.jsx)(vo, {
                            label: "Partite",
                            value: t.totalGames
                        }), (0, J.jsx)(vo, {
                            label: "% Vittorie",
                            value: "".concat(t.successRate, "%")
                        }), (0, J.jsx)(vo, {
                            label: "Vinte di fila",
                            value: t.currentStreak
                        }), (0, J.jsx)(vo, {
                            label: "Record vinte di fila",
                            value: t.bestStreak
                        })]
                    })
                },
                go = function(e) {
                    var t = e.index,
                        n = e.size,
                        r = e.label;
                    return (0, J.jsxs)("div", {
                        className: "flex justify-left m-1",
                        children: [(0, J.jsx)("div", {
                            className: "items-center justify-center w-2",
                            children: t + 1
                        }), (0, J.jsx)("div", {
                            className: "rounded-full w-full ml-2",
                            children: (0, J.jsx)("div", {
                                style: {
                                    width: "".concat(5 + n, "%")
                                },
                                className: "bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 rounded-l-full",
                                children: r
                            })
                        })]
                    })
                },
                bo = function(e) {
                    var t = e.gameStats.winDistribution,
                        n = Math.max.apply(Math, o(t));
                    return (0, J.jsx)("div", {
                        className: "columns-1 justify-left m-2 text-sm dark:text-white",
                        children: t.map((function(e, t) {
                            return (0, J.jsx)(go, {
                                index: t,
                                size: e / n * 90,
                                label: String(e)
                            }, t)
                        }))
                    })
                },
                yo = function(e) {
                    return e.map((function(e) {
                        var t = he(e),
                            n = we();
                        return e.split("").map((function(e, r) {
                            switch (t[r]) {
                                case "correct":
                                    return n ? "\ud83d\udfe7" : "\ud83d\udfe9";
                                case "present":
                                    return n ? "\ud83d\udfe6" : "\ud83d\udfe8";
                                default:
                                    return "dark" === localStorage.getItem("theme") ? "\u2b1b" : "\u2b1c"
                            }
                        })).join("")
                    })).join("\n")
                },
                wo = function(e) {
                    var t = e.isOpen,
                        n = e.handleClose,
                        r = e.guesses,
                        a = e.gameStats,
                        o = e.isGameLost,
                        i = e.isGameWon,
                        l = e.handleShare,
                        u = e.isHardMode;
                    return a.totalGames <= 0 ? (0, J.jsx)(pt, {
                        title: ce,
                        isOpen: t,
                        handleClose: n,
                        children: (0, J.jsx)(ho, {
                            gameStats: a
                        })
                    }) : (0, J.jsxs)(pt, {
                        title: ce,
                        isOpen: t,
                        handleClose: n,
                        children: [(0, J.jsx)(ho, {
                            gameStats: a
                        }), (0, J.jsx)("h4", {
                            className: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100",
                            children: "Distribuzione dei tentativi"
                        }), (0, J.jsx)(bo, {
                            gameStats: a
                        }), (o || i) && (0, J.jsxs)("div", {
                            className: "mt-5 sm:mt-6 columns-2 dark:text-white",
                            children: [(0, J.jsxs)("div", {
                                children: [(0, J.jsx)("h5", {
                                    children: "Nuova parola in"
                                }), (0, J.jsx)(mo, {
                                    className: "text-lg font-medium text-gray-900 dark:text-gray-100",
                                    date: ve,
                                    daysInHours: !0
                                })]
                            }), (0, J.jsx)("button", {
                                type: "button",
                                className: "mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm",
                                onClick: function() {
                                    ! function(e, t, n) {
                                        navigator.clipboard.writeText("".concat(oe, "\n").concat("Parola numero", ": ").concat(me, "\n").concat("La mia partita di oggi:", " ").concat(t ? "X" : e.length, "/6").concat(n ? "*" : "", "\n\n") + yo(e))
                                    }(r, o, u), l()
                                },
                                children: "Condividi"
                            })]
                        })]
                    })
                },
                ko = function(e) {
                    var t = e.settingName,
                        n = e.flag,
                        r = e.handleFlag,
                        a = X()("w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out cursor-pointer", {
                            "bg-green-400": n
                        }),
                        o = X()("bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out cursor-pointer", {
                            "translate-x-6": n
                        });
                    return (0, J.jsxs)("div", {
                        className: "flex justify-between items-center gap-8 mt-2",
                        children: [(0, J.jsx)("h2", {
                            className: "text-gray-500 dark:text-gray-300",
                            children: t
                        }), (0, J.jsx)("div", {
                            className: a,
                            onClick: function() {
                                return r(!n)
                            },
                            children: (0, J.jsx)("div", {
                                className: o
                            })
                        })]
                    })
                },
                xo = function(e) {
                    var t = e.isOpen,
                        n = e.handleClose,
                        r = e.isHardMode,
                        a = e.handleHardMode,
                        o = e.isDarkMode,
                        i = e.handleDarkMode,
                        l = e.isHardModeErrorModalOpen,
                        u = e.isHighContrastMode,
                        s = e.handleHighContrastMode;
                    return (0, J.jsx)(pt, {
                        title: "Impostazioni",
                        isOpen: t,
                        handleClose: n,
                        children: (0, J.jsxs)("div", {
                            className: "grid-cols-2 gap-4",
                            children: [(0, J.jsx)(ko, {
                                settingName: "Modalit\xe0 difficile",
                                flag: r,
                                handleFlag: a
                            }), (0, J.jsx)(ko, {
                                settingName: "Tema scuro",
                                flag: o,
                                handleFlag: i
                            }), (0, J.jsx)(ko, {
                                settingName: "Colori ad alto contrasto",
                                flag: u,
                                handleFlag: s
                            }), (0, J.jsx)(Z, {
                                message: "La modalit\xe0 difficile pu\xf2 essere impostata solo all'inizio!",
                                isOpen: l
                            })]
                        })
                    })
                };

            function So(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Eo(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var Co = function(e, t) {
                    var n = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Eo(Object(n), !0).forEach((function(t) {
                                So(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Eo(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, e);
                    return n.totalGames += 1, t >= 6 ? (n.currentStreak = 0, n.gamesFailed += 1) : (n.winDistribution[t] += 1, n.currentStreak += 1, n.bestStreak < n.currentStreak && (n.bestStreak = n.currentStreak)), n.successRate = jo(n),
                        function(e) {
                            localStorage.setItem(ye, JSON.stringify(e))
                        }(n), n
                },
                Oo = {
                    winDistribution: Array.from(new Array(6), (function() {
                        return 0
                    })),
                    gamesFailed: 0,
                    currentStreak: 0,
                    bestStreak: 0,
                    totalGames: 0,
                    successRate: 0
                },
                No = function() {
                    return function() {
                        var e = localStorage.getItem(ye);
                        return e ? JSON.parse(e) : null
                    }() || Oo
                },
                jo = function(e) {
                    var t = e.totalGames,
                        n = e.gamesFailed;
                    return Math.round(100 * (t - n) / Math.max(t, 1))
                },
                Po = n(390);
            var To = function() {
                    window.matchMedia("(prefers-color-scheme: dark)").matches;
                    var t = i((0, e.useState)(""), 2),
                        n = t[0],
                        r = t[1],
                        a = i((0, e.useState)(!1), 2),
                        c = a[0],
                        f = a[1],
                        d = i((0, e.useState)(!0), 2),
                        p = d[0],
                        m = d[1],
                        v = i((0, e.useState)(!1), 2),
                        h = v[0],
                        g = v[1],
                        b = i((0, e.useState)(!1), 2),
                        y = b[0],
                        w = b[1],
                        k = i((0, e.useState)(!1), 2),
                        x = k[0],
                        S = k[1],
                        E = i((0, e.useState)(!1), 2),
                        C = E[0],
                        O = E[1],
                        N = i((0, e.useState)(!1), 2),
                        j = N[0],
                        P = N[1],
                        T = i((0, e.useState)(""), 2),
                        _ = T[0],
                        z = T[1],
                        L = i((0, e.useState)(!1), 2),
                        M = L[0],
                        A = L[1],
                        R = i((0, e.useState)(!!localStorage.getItem("theme") && "dark" === localStorage.getItem("theme")), 2),
                        D = R[0],
                        I = R[1],
                        F = i((0, e.useState)(we()), 2),
                        U = F[0],
                        H = F[1],
                        V = i((0, e.useState)(""), 2),
                        W = V[0],
                        B = V[1],
                        Y = i((0, e.useState)(!1), 2),
                        $ = Y[0],
                        Q = Y[1],
                        q = (0, e.useState)((function() {
                            var e = function() {
                                var e = localStorage.getItem(ge);
                                return e ? JSON.parse(e) : null
                            }();
                            if ((null === e || void 0 === e ? void 0 : e.solution) !== pe) return [];
                            var t = e.guesses.includes(pe);
                            return t && f(!0), 6 !== e.guesses.length || t || A(!0), e.guesses
                        })),
                        K = i(q, 2),
                        G = K[0],
                        X = K[1],
                        te = i((0, e.useState)((function() {
                            return No()
                        })), 2),
                        ne = te[0],
                        ue = te[1],
                        se = i((0, e.useState)(!!localStorage.getItem("gameMode") && "hard" === localStorage.getItem("gameMode")), 2),
                        ce = se[0],
                        de = se[1],
                        me = i((0, e.useState)(!1), 2),
                        ve = me[0],
                        he = me[1],
                        ye = i((0, e.useState)(""), 2),
                        ke = ye[0],
                        xe = ye[1];
                    return (0, e.useEffect)((function() {
                        D ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), U ? document.documentElement.classList.add("high-contrast") : document.documentElement.classList.remove("high-contrast")
                    }), [D, U]), (0, e.useEffect)((function() {
                        var e;
                        e = {
                            guesses: G,
                            solution: pe
                        }, localStorage.setItem(ge, JSON.stringify(e))
                    }), [G]), (0, e.useEffect)((function() {
                        c && setTimeout((function() {
                            B(ie[Math.floor(Math.random() * ie.length)]), setTimeout((function() {
                                B(""), w(!0)
                            }), ee)
                        }), 1750), M && setTimeout((function() {
                            w(!0)
                        }), 2100)
                    }), [c, M]), (0, J.jsxs)("div", {
                        className: "pt-2 pb-8 max-w-7xl mx-auto sm:px-6 lg:px-8 ",
                        children: [(0, J.jsx)("div", {
                            className: "w-96 mx-auto items-center mb-2 mt-2",
                            children: (0, J.jsx)("img", {
                                src: Po,
                                alt: oe
                            })
                        }), (0, J.jsxs)("div", {
                            className: "pt-2 pb-8 max-w-7xl mx-auto sm:px-6 lg:px-8 background-image",
                            children: [(0, J.jsx)("div", {
                                className: "w-80 mx-auto text-center text-sm mb-2 mt-2 dark:text-white ",
                                children: (0, J.jsxs)("p", {
                                    className: "text-blue font-bold",
                                    children: ["Powered by", " ", (0, J.jsx)("a", {
                                        href: "https://womeninsurgeryitalia.it/",
                                        className: "underline font-bold",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Women in Surgery Italia"
                                    })]
                                })
                            }), (0, J.jsx)("div", {
                                children: (0, J.jsxs)("div", {
                                    className: "flex w-80 mx-auto items-center mb-8 mt-8 ",
                                    children: [(0, J.jsx)("div", {
                                        className: "w-1/2",
                                        children: (0, J.jsx)(Ga, {})
                                    }), (0, J.jsxs)("div", {
                                        className: "w-1/2 text-right text-blue",
                                        children: [(0, J.jsx)(s, {
                                            className: "h-6 w-6 ml-2 inline cursor-pointer dark:stroke-white",
                                            onClick: function() {
                                                return m(!0)
                                            }
                                        }), (0, J.jsx)(l, {
                                            className: "h-6 w-6 ml-3 inline cursor-pointer dark:stroke-white",
                                            onClick: function() {
                                                return w(!0)
                                            }
                                        }), (0, J.jsx)(u, {
                                            className: "h-6 w-6 ml-3 inline cursor-pointer dark:stroke-white",
                                            onClick: function() {
                                                return S(!0)
                                            }
                                        })]
                                    })]
                                })
                            }), (0, J.jsx)(Ce, {
                                guesses: G,
                                currentGuess: n,
                                isRevealing: $,
                                currentRowClassName: _
                            }), (0, J.jsx)(Ne, {
                                onChar: function(e) {
                                    n.length < 5 && G.length < 6 && !c && r("".concat(n).concat(e))
                                },
                                onDelete: function() {
                                    r(n.slice(0, -1))
                                },
                                onEnter: function() {
                                    if (!c && !M) {
                                        if (5 !== n.length) return g(!0), z("jiggle"), setTimeout((function() {
                                            g(!1), z("")
                                        }), ee);
                                        if (e = n, !re.includes(e.toLowerCase()) && !ae.includes(e.toLowerCase())) return P(!0), z("jiggle"), setTimeout((function() {
                                            P(!1), z("")
                                        }), ee);
                                        var e;
                                        if (ce) {
                                            var t = fe(n, G);
                                            if (t) return xe(t), he(!0), z("jiggle"), setTimeout((function() {
                                                he(!1), z("")
                                            }), ee)
                                        }
                                        Q(!0), setTimeout((function() {
                                            Q(!1)
                                        }), 1750);
                                        var a = function(e) {
                                            return pe === e
                                        }(n);
                                        if (5 === n.length && G.length < 6 && !c) {
                                            if (X([].concat(o(G), [n])), r(""), a) return ue(Co(ne, G.length)), f(!0);
                                            5 === G.length && (ue(Co(ne, G.length + 1)), A(!0))
                                        }
                                    }
                                },
                                guesses: G,
                                isRevealing: $
                            }), (0, J.jsx)(Xa, {
                                isOpen: p,
                                handleClose: function() {
                                    return m(!1)
                                }
                            }), (0, J.jsx)(wo, {
                                isOpen: y,
                                handleClose: function() {
                                    return w(!1)
                                },
                                guesses: G,
                                gameStats: ne,
                                isGameLost: M,
                                isGameWon: c,
                                handleShare: function() {
                                    return B("Copiata la partita negli appunti"), setTimeout((function() {
                                        return B("")
                                    }), ee)
                                },
                                isHardMode: ce
                            }), (0, J.jsx)(xo, {
                                isOpen: x,
                                handleClose: function() {
                                    return S(!1)
                                },
                                isHardMode: ce,
                                handleHardMode: function(e) {
                                    if (0 !== G.length && "hard" !== localStorage.getItem("gameMode")) return O(!0), setTimeout((function() {
                                        O(!1)
                                    }), ee);
                                    de(e), localStorage.setItem("gameMode", e ? "hard" : "normal")
                                },
                                isDarkMode: D,
                                handleDarkMode: function(e) {
                                    I(e), localStorage.setItem("theme", e ? "dark" : "light")
                                },
                                isHardModeErrorModalOpen: C,
                                isHighContrastMode: U,
                                handleHighContrastMode: function(e) {
                                    H(e),
                                        function(e) {
                                            e ? localStorage.setItem(be, "1") : localStorage.removeItem(be)
                                        }(e)
                                }
                            }), (0, J.jsx)(Z, {
                                message: "Non ci sono abbastanza lettere",
                                isOpen: h
                            }), (0, J.jsx)(Z, {
                                message: "Parola non presente nel dizionario",
                                isOpen: j
                            }), (0, J.jsx)(Z, {
                                message: ke,
                                isOpen: ve
                            }), (0, J.jsx)(Z, {
                                message: le(pe),
                                isOpen: M && !$
                            }), (0, J.jsx)(Z, {
                                message: W,
                                isOpen: "" !== W,
                                variant: "success",
                                topMost: !0
                            })]
                        })]
                    })
                },
                _o = function(e) {
                    e && e instanceof Function && n.e(787).then(n.bind(n, 787)).then((function(t) {
                        var n = t.getCLS,
                            r = t.getFID,
                            a = t.getFCP,
                            o = t.getLCP,
                            i = t.getTTFB;
                        n(e), r(e), a(e), o(e), i(e)
                    }))
                };
            t.render((0, J.jsx)(e.StrictMode, {
                children: (0, J.jsx)(To, {})
            }), document.getElementById("root")), _o()
        }()
}();
//# sourceMappingURL=main.fedae659.js.map