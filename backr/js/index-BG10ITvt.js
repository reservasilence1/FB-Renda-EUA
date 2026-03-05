(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        r(s);
    new MutationObserver(s => {
        for (const i of s)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity),
        s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const i = n(s);
        fetch(s.href, i)
    }
}
)();
var De = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function If(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(r) {
        var s = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, s.get ? s : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }),
    n
}
var Cc = {
    exports: {}
}
  , ki = {}
  , Pc = {
    exports: {}
}
  , U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ns = Symbol.for("react.element")
  , $f = Symbol.for("react.portal")
  , Af = Symbol.for("react.fragment")
  , Lf = Symbol.for("react.strict_mode")
  , Uf = Symbol.for("react.profiler")
  , Df = Symbol.for("react.provider")
  , Mf = Symbol.for("react.context")
  , zf = Symbol.for("react.forward_ref")
  , Ff = Symbol.for("react.suspense")
  , Bf = Symbol.for("react.memo")
  , Wf = Symbol.for("react.lazy")
  , Gl = Symbol.iterator;
function Hf(e) {
    return e === null || typeof e != "object" ? null : (e = Gl && e[Gl] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Tc = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Oc = Object.assign
  , Rc = {};
function Zn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Rc,
    this.updater = n || Tc
}
Zn.prototype.isReactComponent = {};
Zn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Zn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Ic() {}
Ic.prototype = Zn.prototype;
function Fa(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Rc,
    this.updater = n || Tc
}
var Ba = Fa.prototype = new Ic;
Ba.constructor = Fa;
Oc(Ba, Zn.prototype);
Ba.isPureReactComponent = !0;
var Jl = Array.isArray
  , $c = Object.prototype.hasOwnProperty
  , Wa = {
    current: null
}
  , Ac = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Lc(e, t, n) {
    var r, s = {}, i = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            $c.call(t, r) && !Ac.hasOwnProperty(r) && (s[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        s.children = n;
    else if (1 < l) {
        for (var u = Array(l), c = 0; c < l; c++)
            u[c] = arguments[c + 2];
        s.children = u
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            s[r] === void 0 && (s[r] = l[r]);
    return {
        $$typeof: ns,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: Wa.current
    }
}
function Vf(e, t) {
    return {
        $$typeof: ns,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Ha(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ns
}
function Kf(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Ql = /\/+/g;
function Qi(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Kf("" + e.key) : t.toString(36)
}
function Ls(e, t, n, r, s) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ns:
            case $f:
                o = !0
            }
        }
    if (o)
        return o = e,
        s = s(o),
        e = r === "" ? "." + Qi(o, 0) : r,
        Jl(s) ? (n = "",
        e != null && (n = e.replace(Ql, "$&/") + "/"),
        Ls(s, t, n, "", function(c) {
            return c
        })) : s != null && (Ha(s) && (s = Vf(s, n + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(Ql, "$&/") + "/") + e)),
        t.push(s)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    Jl(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var u = r + Qi(i, l);
            o += Ls(i, t, n, u, s)
        }
    else if (u = Hf(e),
    typeof u == "function")
        for (e = u.call(e),
        l = 0; !(i = e.next()).done; )
            i = i.value,
            u = r + Qi(i, l++),
            o += Ls(i, t, n, u, s);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function ps(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , s = 0;
    return Ls(e, r, "", "", function(i) {
        return t.call(n, i, s++)
    }),
    r
}
function qf(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var xe = {
    current: null
}
  , Us = {
    transition: null
}
  , Gf = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Us,
    ReactCurrentOwner: Wa
};
function Uc() {
    throw Error("act(...) is not supported in production builds of React.")
}
U.Children = {
    map: ps,
    forEach: function(e, t, n) {
        ps(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ps(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ps(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Ha(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
U.Component = Zn;
U.Fragment = Af;
U.Profiler = Uf;
U.PureComponent = Fa;
U.StrictMode = Lf;
U.Suspense = Ff;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gf;
U.act = Uc;
U.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Oc({}, e.props)
      , s = e.key
      , i = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        o = Wa.current),
        t.key !== void 0 && (s = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (u in t)
            $c.call(t, u) && !Ac.hasOwnProperty(u) && (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1)
        r.children = n;
    else if (1 < u) {
        l = Array(u);
        for (var c = 0; c < u; c++)
            l[c] = arguments[c + 2];
        r.children = l
    }
    return {
        $$typeof: ns,
        type: e.type,
        key: s,
        ref: i,
        props: r,
        _owner: o
    }
}
;
U.createContext = function(e) {
    return e = {
        $$typeof: Mf,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Df,
        _context: e
    },
    e.Consumer = e
}
;
U.createElement = Lc;
U.createFactory = function(e) {
    var t = Lc.bind(null, e);
    return t.type = e,
    t
}
;
U.createRef = function() {
    return {
        current: null
    }
}
;
U.forwardRef = function(e) {
    return {
        $$typeof: zf,
        render: e
    }
}
;
U.isValidElement = Ha;
U.lazy = function(e) {
    return {
        $$typeof: Wf,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: qf
    }
}
;
U.memo = function(e, t) {
    return {
        $$typeof: Bf,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
U.startTransition = function(e) {
    var t = Us.transition;
    Us.transition = {};
    try {
        e()
    } finally {
        Us.transition = t
    }
}
;
U.unstable_act = Uc;
U.useCallback = function(e, t) {
    return xe.current.useCallback(e, t)
}
;
U.useContext = function(e) {
    return xe.current.useContext(e)
}
;
U.useDebugValue = function() {}
;
U.useDeferredValue = function(e) {
    return xe.current.useDeferredValue(e)
}
;
U.useEffect = function(e, t) {
    return xe.current.useEffect(e, t)
}
;
U.useId = function() {
    return xe.current.useId()
}
;
U.useImperativeHandle = function(e, t, n) {
    return xe.current.useImperativeHandle(e, t, n)
}
;
U.useInsertionEffect = function(e, t) {
    return xe.current.useInsertionEffect(e, t)
}
;
U.useLayoutEffect = function(e, t) {
    return xe.current.useLayoutEffect(e, t)
}
;
U.useMemo = function(e, t) {
    return xe.current.useMemo(e, t)
}
;
U.useReducer = function(e, t, n) {
    return xe.current.useReducer(e, t, n)
}
;
U.useRef = function(e) {
    return xe.current.useRef(e)
}
;
U.useState = function(e) {
    return xe.current.useState(e)
}
;
U.useSyncExternalStore = function(e, t, n) {
    return xe.current.useSyncExternalStore(e, t, n)
}
;
U.useTransition = function() {
    return xe.current.useTransition()
}
;
U.version = "18.3.1";
Pc.exports = U;
var w = Pc.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jf = w
  , Qf = Symbol.for("react.element")
  , Yf = Symbol.for("react.fragment")
  , Xf = Object.prototype.hasOwnProperty
  , Zf = Jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , ep = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Dc(e, t, n) {
    var r, s = {}, i = null, o = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        Xf.call(t, r) && !ep.hasOwnProperty(r) && (s[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            s[r] === void 0 && (s[r] = t[r]);
    return {
        $$typeof: Qf,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: Zf.current
    }
}
ki.Fragment = Yf;
ki.jsx = Dc;
ki.jsxs = Dc;
Cc.exports = ki;
var a = Cc.exports
  , Mc = {
    exports: {}
}
  , Re = {}
  , zc = {
    exports: {}
}
  , Fc = {};
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
    function t(T, $) {
        var A = T.length;
        T.push($);
        e: for (; 0 < A; ) {
            var Y = A - 1 >>> 1
              , ie = T[Y];
            if (0 < s(ie, $))
                T[Y] = $,
                T[A] = ie,
                A = Y;
            else
                break e
        }
    }
    function n(T) {
        return T.length === 0 ? null : T[0]
    }
    function r(T) {
        if (T.length === 0)
            return null;
        var $ = T[0]
          , A = T.pop();
        if (A !== $) {
            T[0] = A;
            e: for (var Y = 0, ie = T.length, hs = ie >>> 1; Y < hs; ) {
                var Jt = 2 * (Y + 1) - 1
                  , Ji = T[Jt]
                  , Qt = Jt + 1
                  , fs = T[Qt];
                if (0 > s(Ji, A))
                    Qt < ie && 0 > s(fs, Ji) ? (T[Y] = fs,
                    T[Qt] = A,
                    Y = Qt) : (T[Y] = Ji,
                    T[Jt] = A,
                    Y = Jt);
                else if (Qt < ie && 0 > s(fs, A))
                    T[Y] = fs,
                    T[Qt] = A,
                    Y = Qt;
                else
                    break e
            }
        }
        return $
    }
    function s(T, $) {
        var A = T.sortIndex - $.sortIndex;
        return A !== 0 ? A : T.id - $.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date
          , l = o.now();
        e.unstable_now = function() {
            return o.now() - l
        }
    }
    var u = []
      , c = []
      , d = 1
      , h = null
      , f = 3
      , y = !1
      , v = !1
      , b = !1
      , k = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(T) {
        for (var $ = n(c); $ !== null; ) {
            if ($.callback === null)
                r(c);
            else if ($.startTime <= T)
                r(c),
                $.sortIndex = $.expirationTime,
                t(u, $);
            else
                break;
            $ = n(c)
        }
    }
    function _(T) {
        if (b = !1,
        p(T),
        !v)
            if (n(u) !== null)
                v = !0,
                ar(x);
            else {
                var $ = n(c);
                $ !== null && Gi(_, $.startTime - T)
            }
    }
    function x(T, $) {
        v = !1,
        b && (b = !1,
        g(E),
        E = -1),
        y = !0;
        var A = f;
        try {
            for (p($),
            h = n(u); h !== null && (!(h.expirationTime > $) || T && !R()); ) {
                var Y = h.callback;
                if (typeof Y == "function") {
                    h.callback = null,
                    f = h.priorityLevel;
                    var ie = Y(h.expirationTime <= $);
                    $ = e.unstable_now(),
                    typeof ie == "function" ? h.callback = ie : h === n(u) && r(u),
                    p($)
                } else
                    r(u);
                h = n(u)
            }
            if (h !== null)
                var hs = !0;
            else {
                var Jt = n(c);
                Jt !== null && Gi(_, Jt.startTime - $),
                hs = !1
            }
            return hs
        } finally {
            h = null,
            f = A,
            y = !1
        }
    }
    var j = !1
      , S = null
      , E = -1
      , C = 5
      , O = -1;
    function R() {
        return !(e.unstable_now() - O < C)
    }
    function le() {
        if (S !== null) {
            var T = e.unstable_now();
            O = T;
            var $ = !0;
            try {
                $ = S(!0, T)
            } finally {
                $ ? H() : (j = !1,
                S = null)
            }
        } else
            j = !1
    }
    var H;
    if (typeof m == "function")
        H = function() {
            m(le)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var et = new MessageChannel
          , Gt = et.port2;
        et.port1.onmessage = le,
        H = function() {
            Gt.postMessage(null)
        }
    } else
        H = function() {
            k(le, 0)
        }
        ;
    function ar(T) {
        S = T,
        j || (j = !0,
        H())
    }
    function Gi(T, $) {
        E = k(function() {
            T(e.unstable_now())
        }, $)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(T) {
        T.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        v || y || (v = !0,
        ar(x))
    }
    ,
    e.unstable_forceFrameRate = function(T) {
        0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : C = 0 < T ? Math.floor(1e3 / T) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }
    ,
    e.unstable_next = function(T) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var $ = 3;
            break;
        default:
            $ = f
        }
        var A = f;
        f = $;
        try {
            return T()
        } finally {
            f = A
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(T, $) {
        switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            T = 3
        }
        var A = f;
        f = T;
        try {
            return $()
        } finally {
            f = A
        }
    }
    ,
    e.unstable_scheduleCallback = function(T, $, A) {
        var Y = e.unstable_now();
        switch (typeof A == "object" && A !== null ? (A = A.delay,
        A = typeof A == "number" && 0 < A ? Y + A : Y) : A = Y,
        T) {
        case 1:
            var ie = -1;
            break;
        case 2:
            ie = 250;
            break;
        case 5:
            ie = 1073741823;
            break;
        case 4:
            ie = 1e4;
            break;
        default:
            ie = 5e3
        }
        return ie = A + ie,
        T = {
            id: d++,
            callback: $,
            priorityLevel: T,
            startTime: A,
            expirationTime: ie,
            sortIndex: -1
        },
        A > Y ? (T.sortIndex = A,
        t(c, T),
        n(u) === null && T === n(c) && (b ? (g(E),
        E = -1) : b = !0,
        Gi(_, A - Y))) : (T.sortIndex = ie,
        t(u, T),
        v || y || (v = !0,
        ar(x))),
        T
    }
    ,
    e.unstable_shouldYield = R,
    e.unstable_wrapCallback = function(T) {
        var $ = f;
        return function() {
            var A = f;
            f = $;
            try {
                return T.apply(this, arguments)
            } finally {
                f = A
            }
        }
    }
}
)(Fc);
zc.exports = Fc;
var tp = zc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var np = w
  , Oe = tp;
function N(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Bc = new Set
  , Lr = {};
function pn(e, t) {
    Vn(e, t),
    Vn(e + "Capture", t)
}
function Vn(e, t) {
    for (Lr[e] = t,
    e = 0; e < t.length; e++)
        Bc.add(t[e])
}
var gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , $o = Object.prototype.hasOwnProperty
  , rp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Yl = {}
  , Xl = {};
function sp(e) {
    return $o.call(Xl, e) ? !0 : $o.call(Yl, e) ? !1 : rp.test(e) ? Xl[e] = !0 : (Yl[e] = !0,
    !1)
}
function ip(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function op(e, t, n, r) {
    if (t === null || typeof t > "u" || ip(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
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
function we(e, t, n, r, s, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = s,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    de[e] = new we(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    de[t] = new we(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    de[e] = new we(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    de[e] = new we(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    de[e] = new we(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    de[e] = new we(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    de[e] = new we(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    de[e] = new we(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    de[e] = new we(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Va = /[\-:]([a-z])/g;
function Ka(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Va, Ka);
    de[t] = new we(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Va, Ka);
    de[t] = new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Va, Ka);
    de[t] = new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    de[e] = new we(e,1,!1,e.toLowerCase(),null,!1,!1)
});
de.xlinkHref = new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    de[e] = new we(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function qa(e, t, n, r) {
    var s = de.hasOwnProperty(t) ? de[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (op(t, n, s, r) && (n = null),
    r || s === null ? sp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName,
    r = s.attributeNamespace,
    n === null ? e.removeAttribute(t) : (s = s.type,
    n = s === 3 || s === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var bt = np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ms = Symbol.for("react.element")
  , En = Symbol.for("react.portal")
  , Cn = Symbol.for("react.fragment")
  , Ga = Symbol.for("react.strict_mode")
  , Ao = Symbol.for("react.profiler")
  , Wc = Symbol.for("react.provider")
  , Hc = Symbol.for("react.context")
  , Ja = Symbol.for("react.forward_ref")
  , Lo = Symbol.for("react.suspense")
  , Uo = Symbol.for("react.suspense_list")
  , Qa = Symbol.for("react.memo")
  , St = Symbol.for("react.lazy")
  , Vc = Symbol.for("react.offscreen")
  , Zl = Symbol.iterator;
function lr(e) {
    return e === null || typeof e != "object" ? null : (e = Zl && e[Zl] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var J = Object.assign, Yi;
function vr(e) {
    if (Yi === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Yi = t && t[1] || ""
        }
    return `
` + Yi + e
}
var Xi = !1;
function Zi(e, t) {
    if (!e || Xi)
        return "";
    Xi = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var s = c.stack.split(`
`), i = r.stack.split(`
`), o = s.length - 1, l = i.length - 1; 1 <= o && 0 <= l && s[o] !== i[l]; )
                l--;
            for (; 1 <= o && 0 <= l; o--,
            l--)
                if (s[o] !== i[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if (o--,
                            l--,
                            0 > l || s[o] !== i[l]) {
                                var u = `
` + s[o].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                u
                            }
                        while (1 <= o && 0 <= l);
                    break
                }
        }
    } finally {
        Xi = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? vr(e) : ""
}
function ap(e) {
    switch (e.tag) {
    case 5:
        return vr(e.type);
    case 16:
        return vr("Lazy");
    case 13:
        return vr("Suspense");
    case 19:
        return vr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Zi(e.type, !1),
        e;
    case 11:
        return e = Zi(e.type.render, !1),
        e;
    case 1:
        return e = Zi(e.type, !0),
        e;
    default:
        return ""
    }
}
function Do(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Cn:
        return "Fragment";
    case En:
        return "Portal";
    case Ao:
        return "Profiler";
    case Ga:
        return "StrictMode";
    case Lo:
        return "Suspense";
    case Uo:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Hc:
            return (e.displayName || "Context") + ".Consumer";
        case Wc:
            return (e._context.displayName || "Context") + ".Provider";
        case Ja:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Qa:
            return t = e.displayName || null,
            t !== null ? t : Do(e.type) || "Memo";
        case St:
            t = e._payload,
            e = e._init;
            try {
                return Do(e(t))
            } catch {}
        }
    return null
}
function lp(e) {
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
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
        return Do(t);
    case 8:
        return t === Ga ? "StrictMode" : "Mode";
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
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function zt(e) {
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
function Kc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function up(e) {
    var t = Kc(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var s = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return s.call(this)
            },
            set: function(o) {
                r = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function gs(e) {
    e._valueTracker || (e._valueTracker = up(e))
}
function qc(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Kc(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Qs(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Mo(e, t) {
    var n = t.checked;
    return J({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function eu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = zt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Gc(e, t) {
    t = t.checked,
    t != null && qa(e, "checked", t, !1)
}
function zo(e, t) {
    Gc(e, t);
    var n = zt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Fo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Fo(e, t.type, zt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function tu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Fo(e, t, n) {
    (t !== "number" || Qs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var xr = Array.isArray;
function Mn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var s = 0; s < n.length; s++)
            t["$" + n[s]] = !0;
        for (n = 0; n < e.length; n++)
            s = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== s && (e[n].selected = s),
            s && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + zt(n),
        t = null,
        s = 0; s < e.length; s++) {
            if (e[s].value === n) {
                e[s].selected = !0,
                r && (e[s].defaultSelected = !0);
                return
            }
            t !== null || e[s].disabled || (t = e[s])
        }
        t !== null && (t.selected = !0)
    }
}
function Bo(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(N(91));
    return J({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function nu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(N(92));
            if (xr(n)) {
                if (1 < n.length)
                    throw Error(N(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: zt(n)
    }
}
function Jc(e, t) {
    var n = zt(t.value)
      , r = zt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function ru(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Qc(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Wo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Qc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ys, Yc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, s)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (ys = ys || document.createElement("div"),
        ys.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = ys.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ur(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var kr = {
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
}
  , cp = ["Webkit", "ms", "Moz", "O"];
Object.keys(kr).forEach(function(e) {
    cp.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        kr[t] = kr[e]
    })
});
function Xc(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || kr.hasOwnProperty(e) && kr[e] ? ("" + t).trim() : t + "px"
}
function Zc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , s = Xc(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, s) : e[n] = s
        }
}
var dp = J({
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
function Ho(e, t) {
    if (t) {
        if (dp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(N(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(N(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(N(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(N(62))
    }
}
function Vo(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
var Ko = null;
function Ya(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var qo = null
  , zn = null
  , Fn = null;
function su(e) {
    if (e = is(e)) {
        if (typeof qo != "function")
            throw Error(N(280));
        var t = e.stateNode;
        t && (t = Ci(t),
        qo(e.stateNode, e.type, t))
    }
}
function ed(e) {
    zn ? Fn ? Fn.push(e) : Fn = [e] : zn = e
}
function td() {
    if (zn) {
        var e = zn
          , t = Fn;
        if (Fn = zn = null,
        su(e),
        t)
            for (e = 0; e < t.length; e++)
                su(t[e])
    }
}
function nd(e, t) {
    return e(t)
}
function rd() {}
var eo = !1;
function sd(e, t, n) {
    if (eo)
        return e(t, n);
    eo = !0;
    try {
        return nd(e, t, n)
    } finally {
        eo = !1,
        (zn !== null || Fn !== null) && (rd(),
        td())
    }
}
function Dr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Ci(n);
    if (r === null)
        return null;
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(N(231, t, typeof n));
    return n
}
var Go = !1;
if (gt)
    try {
        var ur = {};
        Object.defineProperty(ur, "passive", {
            get: function() {
                Go = !0
            }
        }),
        window.addEventListener("test", ur, ur),
        window.removeEventListener("test", ur, ur)
    } catch {
        Go = !1
    }
function hp(e, t, n, r, s, i, o, l, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (d) {
        this.onError(d)
    }
}
var jr = !1
  , Ys = null
  , Xs = !1
  , Jo = null
  , fp = {
    onError: function(e) {
        jr = !0,
        Ys = e
    }
};
function pp(e, t, n, r, s, i, o, l, u) {
    jr = !1,
    Ys = null,
    hp.apply(fp, arguments)
}
function mp(e, t, n, r, s, i, o, l, u) {
    if (pp.apply(this, arguments),
    jr) {
        if (jr) {
            var c = Ys;
            jr = !1,
            Ys = null
        } else
            throw Error(N(198));
        Xs || (Xs = !0,
        Jo = c)
    }
}
function mn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function id(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function iu(e) {
    if (mn(e) !== e)
        throw Error(N(188))
}
function gp(e) {
    var t = e.alternate;
    if (!t) {
        if (t = mn(e),
        t === null)
            throw Error(N(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var s = n.return;
        if (s === null)
            break;
        var i = s.alternate;
        if (i === null) {
            if (r = s.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (s.child === i.child) {
            for (i = s.child; i; ) {
                if (i === n)
                    return iu(s),
                    e;
                if (i === r)
                    return iu(s),
                    t;
                i = i.sibling
            }
            throw Error(N(188))
        }
        if (n.return !== r.return)
            n = s,
            r = i;
        else {
            for (var o = !1, l = s.child; l; ) {
                if (l === n) {
                    o = !0,
                    n = s,
                    r = i;
                    break
                }
                if (l === r) {
                    o = !0,
                    r = s,
                    n = i;
                    break
                }
                l = l.sibling
            }
            if (!o) {
                for (l = i.child; l; ) {
                    if (l === n) {
                        o = !0,
                        n = i,
                        r = s;
                        break
                    }
                    if (l === r) {
                        o = !0,
                        r = i,
                        n = s;
                        break
                    }
                    l = l.sibling
                }
                if (!o)
                    throw Error(N(189))
            }
        }
        if (n.alternate !== r)
            throw Error(N(190))
    }
    if (n.tag !== 3)
        throw Error(N(188));
    return n.stateNode.current === n ? e : t
}
function od(e) {
    return e = gp(e),
    e !== null ? ad(e) : null
}
function ad(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = ad(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var ld = Oe.unstable_scheduleCallback
  , ou = Oe.unstable_cancelCallback
  , yp = Oe.unstable_shouldYield
  , vp = Oe.unstable_requestPaint
  , X = Oe.unstable_now
  , xp = Oe.unstable_getCurrentPriorityLevel
  , Xa = Oe.unstable_ImmediatePriority
  , ud = Oe.unstable_UserBlockingPriority
  , Zs = Oe.unstable_NormalPriority
  , wp = Oe.unstable_LowPriority
  , cd = Oe.unstable_IdlePriority
  , ji = null
  , it = null;
function bp(e) {
    if (it && typeof it.onCommitFiberRoot == "function")
        try {
            it.onCommitFiberRoot(ji, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Je = Math.clz32 ? Math.clz32 : jp
  , _p = Math.log
  , kp = Math.LN2;
function jp(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (_p(e) / kp | 0) | 0
}
var vs = 64
  , xs = 4194304;
function wr(e) {
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
function ei(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , s = e.suspendedLanes
      , i = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var l = o & ~s;
        l !== 0 ? r = wr(l) : (i &= o,
        i !== 0 && (r = wr(i)))
    } else
        o = n & ~s,
        o !== 0 ? r = wr(o) : i !== 0 && (r = wr(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & s) && (s = r & -r,
    i = t & -t,
    s >= i || s === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Je(t),
            s = 1 << n,
            r |= e[n],
            t &= ~s;
    return r
}
function Sp(e, t) {
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
function Np(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var o = 31 - Je(i)
          , l = 1 << o
          , u = s[o];
        u === -1 ? (!(l & n) || l & r) && (s[o] = Sp(l, t)) : u <= t && (e.expiredLanes |= l),
        i &= ~l
    }
}
function Qo(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function dd() {
    var e = vs;
    return vs <<= 1,
    !(vs & 4194240) && (vs = 64),
    e
}
function to(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function rs(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Je(t),
    e[t] = n
}
function Ep(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var s = 31 - Je(n)
          , i = 1 << s;
        t[s] = 0,
        r[s] = -1,
        e[s] = -1,
        n &= ~i
    }
}
function Za(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Je(n)
          , s = 1 << r;
        s & t | e[r] & t && (e[r] |= t),
        n &= ~s
    }
}
var M = 0;
function hd(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var fd, el, pd, md, gd, Yo = !1, ws = [], Rt = null, It = null, $t = null, Mr = new Map, zr = new Map, Et = [], Cp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function au(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Rt = null;
        break;
    case "dragenter":
    case "dragleave":
        It = null;
        break;
    case "mouseover":
    case "mouseout":
        $t = null;
        break;
    case "pointerover":
    case "pointerout":
        Mr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        zr.delete(t.pointerId)
    }
}
function cr(e, t, n, r, s, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s]
    },
    t !== null && (t = is(t),
    t !== null && el(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    s !== null && t.indexOf(s) === -1 && t.push(s),
    e)
}
function Pp(e, t, n, r, s) {
    switch (t) {
    case "focusin":
        return Rt = cr(Rt, e, t, n, r, s),
        !0;
    case "dragenter":
        return It = cr(It, e, t, n, r, s),
        !0;
    case "mouseover":
        return $t = cr($t, e, t, n, r, s),
        !0;
    case "pointerover":
        var i = s.pointerId;
        return Mr.set(i, cr(Mr.get(i) || null, e, t, n, r, s)),
        !0;
    case "gotpointercapture":
        return i = s.pointerId,
        zr.set(i, cr(zr.get(i) || null, e, t, n, r, s)),
        !0
    }
    return !1
}
function yd(e) {
    var t = rn(e.target);
    if (t !== null) {
        var n = mn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = id(n),
                t !== null) {
                    e.blockedOn = t,
                    gd(e.priority, function() {
                        pd(n)
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
function Ds(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Xo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Ko = r,
            n.target.dispatchEvent(r),
            Ko = null
        } else
            return t = is(n),
            t !== null && el(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function lu(e, t, n) {
    Ds(e) && n.delete(t)
}
function Tp() {
    Yo = !1,
    Rt !== null && Ds(Rt) && (Rt = null),
    It !== null && Ds(It) && (It = null),
    $t !== null && Ds($t) && ($t = null),
    Mr.forEach(lu),
    zr.forEach(lu)
}
function dr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Yo || (Yo = !0,
    Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, Tp)))
}
function Fr(e) {
    function t(s) {
        return dr(s, e)
    }
    if (0 < ws.length) {
        dr(ws[0], e);
        for (var n = 1; n < ws.length; n++) {
            var r = ws[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Rt !== null && dr(Rt, e),
    It !== null && dr(It, e),
    $t !== null && dr($t, e),
    Mr.forEach(t),
    zr.forEach(t),
    n = 0; n < Et.length; n++)
        r = Et[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Et.length && (n = Et[0],
    n.blockedOn === null); )
        yd(n),
        n.blockedOn === null && Et.shift()
}
var Bn = bt.ReactCurrentBatchConfig
  , ti = !0;
function Op(e, t, n, r) {
    var s = M
      , i = Bn.transition;
    Bn.transition = null;
    try {
        M = 1,
        tl(e, t, n, r)
    } finally {
        M = s,
        Bn.transition = i
    }
}
function Rp(e, t, n, r) {
    var s = M
      , i = Bn.transition;
    Bn.transition = null;
    try {
        M = 4,
        tl(e, t, n, r)
    } finally {
        M = s,
        Bn.transition = i
    }
}
function tl(e, t, n, r) {
    if (ti) {
        var s = Xo(e, t, n, r);
        if (s === null)
            ho(e, t, r, ni, n),
            au(e, r);
        else if (Pp(s, e, t, n, r))
            r.stopPropagation();
        else if (au(e, r),
        t & 4 && -1 < Cp.indexOf(e)) {
            for (; s !== null; ) {
                var i = is(s);
                if (i !== null && fd(i),
                i = Xo(e, t, n, r),
                i === null && ho(e, t, r, ni, n),
                i === s)
                    break;
                s = i
            }
            s !== null && r.stopPropagation()
        } else
            ho(e, t, r, null, n)
    }
}
var ni = null;
function Xo(e, t, n, r) {
    if (ni = null,
    e = Ya(r),
    e = rn(e),
    e !== null)
        if (t = mn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = id(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return ni = e,
    null
}
function vd(e) {
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
        switch (xp()) {
        case Xa:
            return 1;
        case ud:
            return 4;
        case Zs:
        case wp:
            return 16;
        case cd:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Tt = null
  , nl = null
  , Ms = null;
function xd() {
    if (Ms)
        return Ms;
    var e, t = nl, n = t.length, r, s = "value"in Tt ? Tt.value : Tt.textContent, i = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === s[i - r]; r++)
        ;
    return Ms = s.slice(e, 1 < r ? 1 - r : void 0)
}
function zs(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function bs() {
    return !0
}
function uu() {
    return !1
}
function Ie(e) {
    function t(n, r, s, i, o) {
        this._reactName = n,
        this._targetInst = s,
        this.type = r,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? bs : uu,
        this.isPropagationStopped = uu,
        this
    }
    return J(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = bs)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = bs)
        },
        persist: function() {},
        isPersistent: bs
    }),
    t
}
var er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, rl = Ie(er), ss = J({}, er, {
    view: 0,
    detail: 0
}), Ip = Ie(ss), no, ro, hr, Si = J({}, ss, {
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
    getModifierState: sl,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== hr && (hr && e.type === "mousemove" ? (no = e.screenX - hr.screenX,
        ro = e.screenY - hr.screenY) : ro = no = 0,
        hr = e),
        no)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : ro
    }
}), cu = Ie(Si), $p = J({}, Si, {
    dataTransfer: 0
}), Ap = Ie($p), Lp = J({}, ss, {
    relatedTarget: 0
}), so = Ie(Lp), Up = J({}, er, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Dp = Ie(Up), Mp = J({}, er, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), zp = Ie(Mp), Fp = J({}, er, {
    data: 0
}), du = Ie(Fp), Bp = {
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
}, Wp = {
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
}, Hp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Vp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Hp[e]) ? !!t[e] : !1
}
function sl() {
    return Vp
}
var Kp = J({}, ss, {
    key: function(e) {
        if (e.key) {
            var t = Bp[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = zs(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wp[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: sl,
    charCode: function(e) {
        return e.type === "keypress" ? zs(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? zs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , qp = Ie(Kp)
  , Gp = J({}, Si, {
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
})
  , hu = Ie(Gp)
  , Jp = J({}, ss, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sl
})
  , Qp = Ie(Jp)
  , Yp = J({}, er, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Xp = Ie(Yp)
  , Zp = J({}, Si, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , em = Ie(Zp)
  , tm = [9, 13, 27, 32]
  , il = gt && "CompositionEvent"in window
  , Sr = null;
gt && "documentMode"in document && (Sr = document.documentMode);
var nm = gt && "TextEvent"in window && !Sr
  , wd = gt && (!il || Sr && 8 < Sr && 11 >= Sr)
  , fu = " "
  , pu = !1;
function bd(e, t) {
    switch (e) {
    case "keyup":
        return tm.indexOf(t.keyCode) !== -1;
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
function _d(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Pn = !1;
function rm(e, t) {
    switch (e) {
    case "compositionend":
        return _d(t);
    case "keypress":
        return t.which !== 32 ? null : (pu = !0,
        fu);
    case "textInput":
        return e = t.data,
        e === fu && pu ? null : e;
    default:
        return null
    }
}
function sm(e, t) {
    if (Pn)
        return e === "compositionend" || !il && bd(e, t) ? (e = xd(),
        Ms = nl = Tt = null,
        Pn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return wd && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var im = {
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
function mu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!im[e.type] : t === "textarea"
}
function kd(e, t, n, r) {
    ed(r),
    t = ri(t, "onChange"),
    0 < t.length && (n = new rl("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Nr = null
  , Br = null;
function om(e) {
    $d(e, 0)
}
function Ni(e) {
    var t = Rn(e);
    if (qc(t))
        return e
}
function am(e, t) {
    if (e === "change")
        return t
}
var jd = !1;
if (gt) {
    var io;
    if (gt) {
        var oo = "oninput"in document;
        if (!oo) {
            var gu = document.createElement("div");
            gu.setAttribute("oninput", "return;"),
            oo = typeof gu.oninput == "function"
        }
        io = oo
    } else
        io = !1;
    jd = io && (!document.documentMode || 9 < document.documentMode)
}
function yu() {
    Nr && (Nr.detachEvent("onpropertychange", Sd),
    Br = Nr = null)
}
function Sd(e) {
    if (e.propertyName === "value" && Ni(Br)) {
        var t = [];
        kd(t, Br, e, Ya(e)),
        sd(om, t)
    }
}
function lm(e, t, n) {
    e === "focusin" ? (yu(),
    Nr = t,
    Br = n,
    Nr.attachEvent("onpropertychange", Sd)) : e === "focusout" && yu()
}
function um(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ni(Br)
}
function cm(e, t) {
    if (e === "click")
        return Ni(t)
}
function dm(e, t) {
    if (e === "input" || e === "change")
        return Ni(t)
}
function hm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ye = typeof Object.is == "function" ? Object.is : hm;
function Wr(e, t) {
    if (Ye(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var s = n[r];
        if (!$o.call(t, s) || !Ye(e[s], t[s]))
            return !1
    }
    return !0
}
function vu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function xu(e, t) {
    var n = vu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = vu(n)
    }
}
function Nd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Nd(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Ed() {
    for (var e = window, t = Qs(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Qs(e.document)
    }
    return t
}
function ol(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function fm(e) {
    var t = Ed()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Nd(n.ownerDocument.documentElement, n)) {
        if (r !== null && ol(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var s = n.textContent.length
                  , i = Math.min(r.start, s);
                r = r.end === void 0 ? i : Math.min(r.end, s),
                !e.extend && i > r && (s = r,
                r = i,
                i = s),
                s = xu(n, i);
                var o = xu(n, r);
                s && o && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(s.node, s.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var pm = gt && "documentMode"in document && 11 >= document.documentMode
  , Tn = null
  , Zo = null
  , Er = null
  , ea = !1;
function wu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ea || Tn == null || Tn !== Qs(r) || (r = Tn,
    "selectionStart"in r && ol(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Er && Wr(Er, r) || (Er = r,
    r = ri(Zo, "onSelect"),
    0 < r.length && (t = new rl("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Tn)))
}
function _s(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var On = {
    animationend: _s("Animation", "AnimationEnd"),
    animationiteration: _s("Animation", "AnimationIteration"),
    animationstart: _s("Animation", "AnimationStart"),
    transitionend: _s("Transition", "TransitionEnd")
}
  , ao = {}
  , Cd = {};
gt && (Cd = document.createElement("div").style,
"AnimationEvent"in window || (delete On.animationend.animation,
delete On.animationiteration.animation,
delete On.animationstart.animation),
"TransitionEvent"in window || delete On.transitionend.transition);
function Ei(e) {
    if (ao[e])
        return ao[e];
    if (!On[e])
        return e;
    var t = On[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Cd)
            return ao[e] = t[n];
    return e
}
var Pd = Ei("animationend")
  , Td = Ei("animationiteration")
  , Od = Ei("animationstart")
  , Rd = Ei("transitionend")
  , Id = new Map
  , bu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Bt(e, t) {
    Id.set(e, t),
    pn(t, [e])
}
for (var lo = 0; lo < bu.length; lo++) {
    var uo = bu[lo]
      , mm = uo.toLowerCase()
      , gm = uo[0].toUpperCase() + uo.slice(1);
    Bt(mm, "on" + gm)
}
Bt(Pd, "onAnimationEnd");
Bt(Td, "onAnimationIteration");
Bt(Od, "onAnimationStart");
Bt("dblclick", "onDoubleClick");
Bt("focusin", "onFocus");
Bt("focusout", "onBlur");
Bt(Rd, "onTransitionEnd");
Vn("onMouseEnter", ["mouseout", "mouseover"]);
Vn("onMouseLeave", ["mouseout", "mouseover"]);
Vn("onPointerEnter", ["pointerout", "pointerover"]);
Vn("onPointerLeave", ["pointerout", "pointerover"]);
pn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
pn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
pn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
pn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , ym = new Set("cancel close invalid load scroll toggle".split(" ").concat(br));
function _u(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    mp(r, t, void 0, e),
    e.currentTarget = null
}
function $d(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , s = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var l = r[o]
                      , u = l.instance
                      , c = l.currentTarget;
                    if (l = l.listener,
                    u !== i && s.isPropagationStopped())
                        break e;
                    _u(s, l, c),
                    i = u
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (l = r[o],
                    u = l.instance,
                    c = l.currentTarget,
                    l = l.listener,
                    u !== i && s.isPropagationStopped())
                        break e;
                    _u(s, l, c),
                    i = u
                }
        }
    }
    if (Xs)
        throw e = Jo,
        Xs = !1,
        Jo = null,
        e
}
function B(e, t) {
    var n = t[ia];
    n === void 0 && (n = t[ia] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Ad(t, e, 2, !1),
    n.add(r))
}
function co(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Ad(n, e, r, t)
}
var ks = "_reactListening" + Math.random().toString(36).slice(2);
function Hr(e) {
    if (!e[ks]) {
        e[ks] = !0,
        Bc.forEach(function(n) {
            n !== "selectionchange" && (ym.has(n) || co(n, !1, e),
            co(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ks] || (t[ks] = !0,
        co("selectionchange", !1, t))
    }
}
function Ad(e, t, n, r) {
    switch (vd(t)) {
    case 1:
        var s = Op;
        break;
    case 4:
        s = Rp;
        break;
    default:
        s = tl
    }
    n = s.bind(null, t, n, e),
    s = void 0,
    !Go || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0),
    r ? s !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: s
    }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
        passive: s
    }) : e.addEventListener(t, n, !1)
}
function ho(e, t, n, r, s) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var l = r.stateNode.containerInfo;
                if (l === s || l.nodeType === 8 && l.parentNode === s)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var u = o.tag;
                        if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo,
                        u === s || u.nodeType === 8 && u.parentNode === s))
                            return;
                        o = o.return
                    }
                for (; l !== null; ) {
                    if (o = rn(l),
                    o === null)
                        return;
                    if (u = o.tag,
                    u === 5 || u === 6) {
                        r = i = o;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    sd(function() {
        var c = i
          , d = Ya(n)
          , h = [];
        e: {
            var f = Id.get(e);
            if (f !== void 0) {
                var y = rl
                  , v = e;
                switch (e) {
                case "keypress":
                    if (zs(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    y = qp;
                    break;
                case "focusin":
                    v = "focus",
                    y = so;
                    break;
                case "focusout":
                    v = "blur",
                    y = so;
                    break;
                case "beforeblur":
                case "afterblur":
                    y = so;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    y = cu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    y = Ap;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    y = Qp;
                    break;
                case Pd:
                case Td:
                case Od:
                    y = Dp;
                    break;
                case Rd:
                    y = Xp;
                    break;
                case "scroll":
                    y = Ip;
                    break;
                case "wheel":
                    y = em;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    y = zp;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    y = hu
                }
                var b = (t & 4) !== 0
                  , k = !b && e === "scroll"
                  , g = b ? f !== null ? f + "Capture" : null : f;
                b = [];
                for (var m = c, p; m !== null; ) {
                    p = m;
                    var _ = p.stateNode;
                    if (p.tag === 5 && _ !== null && (p = _,
                    g !== null && (_ = Dr(m, g),
                    _ != null && b.push(Vr(m, _, p)))),
                    k)
                        break;
                    m = m.return
                }
                0 < b.length && (f = new y(f,v,null,n,d),
                h.push({
                    event: f,
                    listeners: b
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                y = e === "mouseout" || e === "pointerout",
                f && n !== Ko && (v = n.relatedTarget || n.fromElement) && (rn(v) || v[yt]))
                    break e;
                if ((y || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window,
                y ? (v = n.relatedTarget || n.toElement,
                y = c,
                v = v ? rn(v) : null,
                v !== null && (k = mn(v),
                v !== k || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null,
                v = c),
                y !== v)) {
                    if (b = cu,
                    _ = "onMouseLeave",
                    g = "onMouseEnter",
                    m = "mouse",
                    (e === "pointerout" || e === "pointerover") && (b = hu,
                    _ = "onPointerLeave",
                    g = "onPointerEnter",
                    m = "pointer"),
                    k = y == null ? f : Rn(y),
                    p = v == null ? f : Rn(v),
                    f = new b(_,m + "leave",y,n,d),
                    f.target = k,
                    f.relatedTarget = p,
                    _ = null,
                    rn(d) === c && (b = new b(g,m + "enter",v,n,d),
                    b.target = p,
                    b.relatedTarget = k,
                    _ = b),
                    k = _,
                    y && v)
                        t: {
                            for (b = y,
                            g = v,
                            m = 0,
                            p = b; p; p = vn(p))
                                m++;
                            for (p = 0,
                            _ = g; _; _ = vn(_))
                                p++;
                            for (; 0 < m - p; )
                                b = vn(b),
                                m--;
                            for (; 0 < p - m; )
                                g = vn(g),
                                p--;
                            for (; m--; ) {
                                if (b === g || g !== null && b === g.alternate)
                                    break t;
                                b = vn(b),
                                g = vn(g)
                            }
                            b = null
                        }
                    else
                        b = null;
                    y !== null && ku(h, f, y, b, !1),
                    v !== null && k !== null && ku(h, k, v, b, !0)
                }
            }
            e: {
                if (f = c ? Rn(c) : window,
                y = f.nodeName && f.nodeName.toLowerCase(),
                y === "select" || y === "input" && f.type === "file")
                    var x = am;
                else if (mu(f))
                    if (jd)
                        x = dm;
                    else {
                        x = um;
                        var j = lm
                    }
                else
                    (y = f.nodeName) && y.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (x = cm);
                if (x && (x = x(e, c))) {
                    kd(h, x, n, d);
                    break e
                }
                j && j(e, f, c),
                e === "focusout" && (j = f._wrapperState) && j.controlled && f.type === "number" && Fo(f, "number", f.value)
            }
            switch (j = c ? Rn(c) : window,
            e) {
            case "focusin":
                (mu(j) || j.contentEditable === "true") && (Tn = j,
                Zo = c,
                Er = null);
                break;
            case "focusout":
                Er = Zo = Tn = null;
                break;
            case "mousedown":
                ea = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                ea = !1,
                wu(h, n, d);
                break;
            case "selectionchange":
                if (pm)
                    break;
            case "keydown":
            case "keyup":
                wu(h, n, d)
            }
            var S;
            if (il)
                e: {
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
            else
                Pn ? bd(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
            E && (wd && n.locale !== "ko" && (Pn || E !== "onCompositionStart" ? E === "onCompositionEnd" && Pn && (S = xd()) : (Tt = d,
            nl = "value"in Tt ? Tt.value : Tt.textContent,
            Pn = !0)),
            j = ri(c, E),
            0 < j.length && (E = new du(E,e,null,n,d),
            h.push({
                event: E,
                listeners: j
            }),
            S ? E.data = S : (S = _d(n),
            S !== null && (E.data = S)))),
            (S = nm ? rm(e, n) : sm(e, n)) && (c = ri(c, "onBeforeInput"),
            0 < c.length && (d = new du("onBeforeInput","beforeinput",null,n,d),
            h.push({
                event: d,
                listeners: c
            }),
            d.data = S))
        }
        $d(h, t)
    })
}
function Vr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ri(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var s = e
          , i = s.stateNode;
        s.tag === 5 && i !== null && (s = i,
        i = Dr(e, n),
        i != null && r.unshift(Vr(e, i, s)),
        i = Dr(e, t),
        i != null && r.push(Vr(e, i, s))),
        e = e.return
    }
    return r
}
function vn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function ku(e, t, n, r, s) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var l = n
          , u = l.alternate
          , c = l.stateNode;
        if (u !== null && u === r)
            break;
        l.tag === 5 && c !== null && (l = c,
        s ? (u = Dr(n, i),
        u != null && o.unshift(Vr(n, u, l))) : s || (u = Dr(n, i),
        u != null && o.push(Vr(n, u, l)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var vm = /\r\n?/g
  , xm = /\u0000|\uFFFD/g;
function ju(e) {
    return (typeof e == "string" ? e : "" + e).replace(vm, `
`).replace(xm, "")
}
function js(e, t, n) {
    if (t = ju(t),
    ju(e) !== t && n)
        throw Error(N(425))
}
function si() {}
var ta = null
  , na = null;
function ra(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var sa = typeof setTimeout == "function" ? setTimeout : void 0
  , wm = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Su = typeof Promise == "function" ? Promise : void 0
  , bm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Su < "u" ? function(e) {
    return Su.resolve(null).then(e).catch(_m)
}
: sa;
function _m(e) {
    setTimeout(function() {
        throw e
    })
}
function fo(e, t) {
    var n = t
      , r = 0;
    do {
        var s = n.nextSibling;
        if (e.removeChild(n),
        s && s.nodeType === 8)
            if (n = s.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(s),
                    Fr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = s
    } while (n);
    Fr(t)
}
function At(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Nu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var tr = Math.random().toString(36).slice(2)
  , st = "__reactFiber$" + tr
  , Kr = "__reactProps$" + tr
  , yt = "__reactContainer$" + tr
  , ia = "__reactEvents$" + tr
  , km = "__reactListeners$" + tr
  , jm = "__reactHandles$" + tr;
function rn(e) {
    var t = e[st];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[yt] || n[st]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Nu(e); e !== null; ) {
                    if (n = e[st])
                        return n;
                    e = Nu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function is(e) {
    return e = e[st] || e[yt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Rn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(N(33))
}
function Ci(e) {
    return e[Kr] || null
}
var oa = []
  , In = -1;
function Wt(e) {
    return {
        current: e
    }
}
function W(e) {
    0 > In || (e.current = oa[In],
    oa[In] = null,
    In--)
}
function F(e, t) {
    In++,
    oa[In] = e.current,
    e.current = t
}
var Ft = {}
  , me = Wt(Ft)
  , Se = Wt(!1)
  , un = Ft;
function Kn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, i;
    for (i in n)
        s[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = s),
    s
}
function Ne(e) {
    return e = e.childContextTypes,
    e != null
}
function ii() {
    W(Se),
    W(me)
}
function Eu(e, t, n) {
    if (me.current !== Ft)
        throw Error(N(168));
    F(me, t),
    F(Se, n)
}
function Ld(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var s in r)
        if (!(s in t))
            throw Error(N(108, lp(e) || "Unknown", s));
    return J({}, n, r)
}
function oi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ft,
    un = me.current,
    F(me, e),
    F(Se, Se.current),
    !0
}
function Cu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(N(169));
    n ? (e = Ld(e, t, un),
    r.__reactInternalMemoizedMergedChildContext = e,
    W(Se),
    W(me),
    F(me, e)) : W(Se),
    F(Se, n)
}
var dt = null
  , Pi = !1
  , po = !1;
function Ud(e) {
    dt === null ? dt = [e] : dt.push(e)
}
function Sm(e) {
    Pi = !0,
    Ud(e)
}
function Ht() {
    if (!po && dt !== null) {
        po = !0;
        var e = 0
          , t = M;
        try {
            var n = dt;
            for (M = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            dt = null,
            Pi = !1
        } catch (s) {
            throw dt !== null && (dt = dt.slice(e + 1)),
            ld(Xa, Ht),
            s
        } finally {
            M = t,
            po = !1
        }
    }
    return null
}
var $n = []
  , An = 0
  , ai = null
  , li = 0
  , $e = []
  , Ae = 0
  , cn = null
  , ht = 1
  , ft = "";
function Zt(e, t) {
    $n[An++] = li,
    $n[An++] = ai,
    ai = e,
    li = t
}
function Dd(e, t, n) {
    $e[Ae++] = ht,
    $e[Ae++] = ft,
    $e[Ae++] = cn,
    cn = e;
    var r = ht;
    e = ft;
    var s = 32 - Je(r) - 1;
    r &= ~(1 << s),
    n += 1;
    var i = 32 - Je(t) + s;
    if (30 < i) {
        var o = s - s % 5;
        i = (r & (1 << o) - 1).toString(32),
        r >>= o,
        s -= o,
        ht = 1 << 32 - Je(t) + s | n << s | r,
        ft = i + e
    } else
        ht = 1 << i | n << s | r,
        ft = e
}
function al(e) {
    e.return !== null && (Zt(e, 1),
    Dd(e, 1, 0))
}
function ll(e) {
    for (; e === ai; )
        ai = $n[--An],
        $n[An] = null,
        li = $n[--An],
        $n[An] = null;
    for (; e === cn; )
        cn = $e[--Ae],
        $e[Ae] = null,
        ft = $e[--Ae],
        $e[Ae] = null,
        ht = $e[--Ae],
        $e[Ae] = null
}
var Te = null
  , Pe = null
  , V = !1
  , Ke = null;
function Md(e, t) {
    var n = Le(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Pu(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Te = e,
        Pe = At(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Te = e,
        Pe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = cn !== null ? {
            id: ht,
            overflow: ft
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Le(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Te = e,
        Pe = null,
        !0) : !1;
    default:
        return !1
    }
}
function aa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function la(e) {
    if (V) {
        var t = Pe;
        if (t) {
            var n = t;
            if (!Pu(e, t)) {
                if (aa(e))
                    throw Error(N(418));
                t = At(n.nextSibling);
                var r = Te;
                t && Pu(e, t) ? Md(r, n) : (e.flags = e.flags & -4097 | 2,
                V = !1,
                Te = e)
            }
        } else {
            if (aa(e))
                throw Error(N(418));
            e.flags = e.flags & -4097 | 2,
            V = !1,
            Te = e
        }
    }
}
function Tu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Te = e
}
function Ss(e) {
    if (e !== Te)
        return !1;
    if (!V)
        return Tu(e),
        V = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !ra(e.type, e.memoizedProps)),
    t && (t = Pe)) {
        if (aa(e))
            throw zd(),
            Error(N(418));
        for (; t; )
            Md(e, t),
            t = At(t.nextSibling)
    }
    if (Tu(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(N(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Pe = At(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Pe = null
        }
    } else
        Pe = Te ? At(e.stateNode.nextSibling) : null;
    return !0
}
function zd() {
    for (var e = Pe; e; )
        e = At(e.nextSibling)
}
function qn() {
    Pe = Te = null,
    V = !1
}
function ul(e) {
    Ke === null ? Ke = [e] : Ke.push(e)
}
var Nm = bt.ReactCurrentBatchConfig;
function fr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(N(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(N(147, e));
            var s = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var l = s.refs;
                o === null ? delete l[i] : l[i] = o
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(N(284));
        if (!n._owner)
            throw Error(N(290, e))
    }
    return e
}
function Ns(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Ou(e) {
    var t = e._init;
    return t(e._payload)
}
function Fd(e) {
    function t(g, m) {
        if (e) {
            var p = g.deletions;
            p === null ? (g.deletions = [m],
            g.flags |= 16) : p.push(m)
        }
    }
    function n(g, m) {
        if (!e)
            return null;
        for (; m !== null; )
            t(g, m),
            m = m.sibling;
        return null
    }
    function r(g, m) {
        for (g = new Map; m !== null; )
            m.key !== null ? g.set(m.key, m) : g.set(m.index, m),
            m = m.sibling;
        return g
    }
    function s(g, m) {
        return g = Mt(g, m),
        g.index = 0,
        g.sibling = null,
        g
    }
    function i(g, m, p) {
        return g.index = p,
        e ? (p = g.alternate,
        p !== null ? (p = p.index,
        p < m ? (g.flags |= 2,
        m) : p) : (g.flags |= 2,
        m)) : (g.flags |= 1048576,
        m)
    }
    function o(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function l(g, m, p, _) {
        return m === null || m.tag !== 6 ? (m = bo(p, g.mode, _),
        m.return = g,
        m) : (m = s(m, p),
        m.return = g,
        m)
    }
    function u(g, m, p, _) {
        var x = p.type;
        return x === Cn ? d(g, m, p.props.children, _, p.key) : m !== null && (m.elementType === x || typeof x == "object" && x !== null && x.$$typeof === St && Ou(x) === m.type) ? (_ = s(m, p.props),
        _.ref = fr(g, m, p),
        _.return = g,
        _) : (_ = qs(p.type, p.key, p.props, null, g.mode, _),
        _.ref = fr(g, m, p),
        _.return = g,
        _)
    }
    function c(g, m, p, _) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== p.containerInfo || m.stateNode.implementation !== p.implementation ? (m = _o(p, g.mode, _),
        m.return = g,
        m) : (m = s(m, p.children || []),
        m.return = g,
        m)
    }
    function d(g, m, p, _, x) {
        return m === null || m.tag !== 7 ? (m = ln(p, g.mode, _, x),
        m.return = g,
        m) : (m = s(m, p),
        m.return = g,
        m)
    }
    function h(g, m, p) {
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return m = bo("" + m, g.mode, p),
            m.return = g,
            m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case ms:
                return p = qs(m.type, m.key, m.props, null, g.mode, p),
                p.ref = fr(g, null, m),
                p.return = g,
                p;
            case En:
                return m = _o(m, g.mode, p),
                m.return = g,
                m;
            case St:
                var _ = m._init;
                return h(g, _(m._payload), p)
            }
            if (xr(m) || lr(m))
                return m = ln(m, g.mode, p, null),
                m.return = g,
                m;
            Ns(g, m)
        }
        return null
    }
    function f(g, m, p, _) {
        var x = m !== null ? m.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return x !== null ? null : l(g, m, "" + p, _);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case ms:
                return p.key === x ? u(g, m, p, _) : null;
            case En:
                return p.key === x ? c(g, m, p, _) : null;
            case St:
                return x = p._init,
                f(g, m, x(p._payload), _)
            }
            if (xr(p) || lr(p))
                return x !== null ? null : d(g, m, p, _, null);
            Ns(g, p)
        }
        return null
    }
    function y(g, m, p, _, x) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number")
            return g = g.get(p) || null,
            l(m, g, "" + _, x);
        if (typeof _ == "object" && _ !== null) {
            switch (_.$$typeof) {
            case ms:
                return g = g.get(_.key === null ? p : _.key) || null,
                u(m, g, _, x);
            case En:
                return g = g.get(_.key === null ? p : _.key) || null,
                c(m, g, _, x);
            case St:
                var j = _._init;
                return y(g, m, p, j(_._payload), x)
            }
            if (xr(_) || lr(_))
                return g = g.get(p) || null,
                d(m, g, _, x, null);
            Ns(m, _)
        }
        return null
    }
    function v(g, m, p, _) {
        for (var x = null, j = null, S = m, E = m = 0, C = null; S !== null && E < p.length; E++) {
            S.index > E ? (C = S,
            S = null) : C = S.sibling;
            var O = f(g, S, p[E], _);
            if (O === null) {
                S === null && (S = C);
                break
            }
            e && S && O.alternate === null && t(g, S),
            m = i(O, m, E),
            j === null ? x = O : j.sibling = O,
            j = O,
            S = C
        }
        if (E === p.length)
            return n(g, S),
            V && Zt(g, E),
            x;
        if (S === null) {
            for (; E < p.length; E++)
                S = h(g, p[E], _),
                S !== null && (m = i(S, m, E),
                j === null ? x = S : j.sibling = S,
                j = S);
            return V && Zt(g, E),
            x
        }
        for (S = r(g, S); E < p.length; E++)
            C = y(S, g, E, p[E], _),
            C !== null && (e && C.alternate !== null && S.delete(C.key === null ? E : C.key),
            m = i(C, m, E),
            j === null ? x = C : j.sibling = C,
            j = C);
        return e && S.forEach(function(R) {
            return t(g, R)
        }),
        V && Zt(g, E),
        x
    }
    function b(g, m, p, _) {
        var x = lr(p);
        if (typeof x != "function")
            throw Error(N(150));
        if (p = x.call(p),
        p == null)
            throw Error(N(151));
        for (var j = x = null, S = m, E = m = 0, C = null, O = p.next(); S !== null && !O.done; E++,
        O = p.next()) {
            S.index > E ? (C = S,
            S = null) : C = S.sibling;
            var R = f(g, S, O.value, _);
            if (R === null) {
                S === null && (S = C);
                break
            }
            e && S && R.alternate === null && t(g, S),
            m = i(R, m, E),
            j === null ? x = R : j.sibling = R,
            j = R,
            S = C
        }
        if (O.done)
            return n(g, S),
            V && Zt(g, E),
            x;
        if (S === null) {
            for (; !O.done; E++,
            O = p.next())
                O = h(g, O.value, _),
                O !== null && (m = i(O, m, E),
                j === null ? x = O : j.sibling = O,
                j = O);
            return V && Zt(g, E),
            x
        }
        for (S = r(g, S); !O.done; E++,
        O = p.next())
            O = y(S, g, E, O.value, _),
            O !== null && (e && O.alternate !== null && S.delete(O.key === null ? E : O.key),
            m = i(O, m, E),
            j === null ? x = O : j.sibling = O,
            j = O);
        return e && S.forEach(function(le) {
            return t(g, le)
        }),
        V && Zt(g, E),
        x
    }
    function k(g, m, p, _) {
        if (typeof p == "object" && p !== null && p.type === Cn && p.key === null && (p = p.props.children),
        typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case ms:
                e: {
                    for (var x = p.key, j = m; j !== null; ) {
                        if (j.key === x) {
                            if (x = p.type,
                            x === Cn) {
                                if (j.tag === 7) {
                                    n(g, j.sibling),
                                    m = s(j, p.props.children),
                                    m.return = g,
                                    g = m;
                                    break e
                                }
                            } else if (j.elementType === x || typeof x == "object" && x !== null && x.$$typeof === St && Ou(x) === j.type) {
                                n(g, j.sibling),
                                m = s(j, p.props),
                                m.ref = fr(g, j, p),
                                m.return = g,
                                g = m;
                                break e
                            }
                            n(g, j);
                            break
                        } else
                            t(g, j);
                        j = j.sibling
                    }
                    p.type === Cn ? (m = ln(p.props.children, g.mode, _, p.key),
                    m.return = g,
                    g = m) : (_ = qs(p.type, p.key, p.props, null, g.mode, _),
                    _.ref = fr(g, m, p),
                    _.return = g,
                    g = _)
                }
                return o(g);
            case En:
                e: {
                    for (j = p.key; m !== null; ) {
                        if (m.key === j)
                            if (m.tag === 4 && m.stateNode.containerInfo === p.containerInfo && m.stateNode.implementation === p.implementation) {
                                n(g, m.sibling),
                                m = s(m, p.children || []),
                                m.return = g,
                                g = m;
                                break e
                            } else {
                                n(g, m);
                                break
                            }
                        else
                            t(g, m);
                        m = m.sibling
                    }
                    m = _o(p, g.mode, _),
                    m.return = g,
                    g = m
                }
                return o(g);
            case St:
                return j = p._init,
                k(g, m, j(p._payload), _)
            }
            if (xr(p))
                return v(g, m, p, _);
            if (lr(p))
                return b(g, m, p, _);
            Ns(g, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p,
        m !== null && m.tag === 6 ? (n(g, m.sibling),
        m = s(m, p),
        m.return = g,
        g = m) : (n(g, m),
        m = bo(p, g.mode, _),
        m.return = g,
        g = m),
        o(g)) : n(g, m)
    }
    return k
}
var Gn = Fd(!0)
  , Bd = Fd(!1)
  , ui = Wt(null)
  , ci = null
  , Ln = null
  , cl = null;
function dl() {
    cl = Ln = ci = null
}
function hl(e) {
    var t = ui.current;
    W(ui),
    e._currentValue = t
}
function ua(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Wn(e, t) {
    ci = e,
    cl = Ln = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (je = !0),
    e.firstContext = null)
}
function Me(e) {
    var t = e._currentValue;
    if (cl !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Ln === null) {
            if (ci === null)
                throw Error(N(308));
            Ln = e,
            ci.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Ln = Ln.next = e;
    return t
}
var sn = null;
function fl(e) {
    sn === null ? sn = [e] : sn.push(e)
}
function Wd(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n,
    fl(t)) : (n.next = s.next,
    s.next = n),
    t.interleaved = n,
    vt(e, r)
}
function vt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Nt = !1;
function pl(e) {
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
function Hd(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function pt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Lt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    D & 2) {
        var s = r.pending;
        return s === null ? t.next = t : (t.next = s.next,
        s.next = t),
        r.pending = t,
        vt(e, n)
    }
    return s = r.interleaved,
    s === null ? (t.next = t,
    fl(r)) : (t.next = s.next,
    s.next = t),
    r.interleaved = t,
    vt(e, n)
}
function Fs(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Za(e, n)
    }
}
function Ru(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var s = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? s = i = o : i = i.next = o,
                n = n.next
            } while (n !== null);
            i === null ? s = i = t : i = i.next = t
        } else
            s = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function di(e, t, n, r) {
    var s = e.updateQueue;
    Nt = !1;
    var i = s.firstBaseUpdate
      , o = s.lastBaseUpdate
      , l = s.shared.pending;
    if (l !== null) {
        s.shared.pending = null;
        var u = l
          , c = u.next;
        u.next = null,
        o === null ? i = c : o.next = c,
        o = u;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        l = d.lastBaseUpdate,
        l !== o && (l === null ? d.firstBaseUpdate = c : l.next = c,
        d.lastBaseUpdate = u))
    }
    if (i !== null) {
        var h = s.baseState;
        o = 0,
        d = c = u = null,
        l = i;
        do {
            var f = l.lane
              , y = l.eventTime;
            if ((r & f) === f) {
                d !== null && (d = d.next = {
                    eventTime: y,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var v = e
                      , b = l;
                    switch (f = t,
                    y = n,
                    b.tag) {
                    case 1:
                        if (v = b.payload,
                        typeof v == "function") {
                            h = v.call(y, h, f);
                            break e
                        }
                        h = v;
                        break e;
                    case 3:
                        v.flags = v.flags & -65537 | 128;
                    case 0:
                        if (v = b.payload,
                        f = typeof v == "function" ? v.call(y, h, f) : v,
                        f == null)
                            break e;
                        h = J({}, h, f);
                        break e;
                    case 2:
                        Nt = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                f = s.effects,
                f === null ? s.effects = [l] : f.push(l))
            } else
                y = {
                    eventTime: y,
                    lane: f,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                d === null ? (c = d = y,
                u = h) : d = d.next = y,
                o |= f;
            if (l = l.next,
            l === null) {
                if (l = s.shared.pending,
                l === null)
                    break;
                f = l,
                l = f.next,
                f.next = null,
                s.lastBaseUpdate = f,
                s.shared.pending = null
            }
        } while (!0);
        if (d === null && (u = h),
        s.baseState = u,
        s.firstBaseUpdate = c,
        s.lastBaseUpdate = d,
        t = s.shared.interleaved,
        t !== null) {
            s = t;
            do
                o |= s.lane,
                s = s.next;
            while (s !== t)
        } else
            i === null && (s.shared.lanes = 0);
        hn |= o,
        e.lanes = o,
        e.memoizedState = h
    }
}
function Iu(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , s = r.callback;
            if (s !== null) {
                if (r.callback = null,
                r = n,
                typeof s != "function")
                    throw Error(N(191, s));
                s.call(r)
            }
        }
}
var os = {}
  , ot = Wt(os)
  , qr = Wt(os)
  , Gr = Wt(os);
function on(e) {
    if (e === os)
        throw Error(N(174));
    return e
}
function ml(e, t) {
    switch (F(Gr, t),
    F(qr, e),
    F(ot, os),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Wo(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Wo(t, e)
    }
    W(ot),
    F(ot, t)
}
function Jn() {
    W(ot),
    W(qr),
    W(Gr)
}
function Vd(e) {
    on(Gr.current);
    var t = on(ot.current)
      , n = Wo(t, e.type);
    t !== n && (F(qr, e),
    F(ot, n))
}
function gl(e) {
    qr.current === e && (W(ot),
    W(qr))
}
var q = Wt(0);
function hi(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var mo = [];
function yl() {
    for (var e = 0; e < mo.length; e++)
        mo[e]._workInProgressVersionPrimary = null;
    mo.length = 0
}
var Bs = bt.ReactCurrentDispatcher
  , go = bt.ReactCurrentBatchConfig
  , dn = 0
  , G = null
  , re = null
  , oe = null
  , fi = !1
  , Cr = !1
  , Jr = 0
  , Em = 0;
function he() {
    throw Error(N(321))
}
function vl(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ye(e[n], t[n]))
            return !1;
    return !0
}
function xl(e, t, n, r, s, i) {
    if (dn = i,
    G = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Bs.current = e === null || e.memoizedState === null ? Om : Rm,
    e = n(r, s),
    Cr) {
        i = 0;
        do {
            if (Cr = !1,
            Jr = 0,
            25 <= i)
                throw Error(N(301));
            i += 1,
            oe = re = null,
            t.updateQueue = null,
            Bs.current = Im,
            e = n(r, s)
        } while (Cr)
    }
    if (Bs.current = pi,
    t = re !== null && re.next !== null,
    dn = 0,
    oe = re = G = null,
    fi = !1,
    t)
        throw Error(N(300));
    return e
}
function wl() {
    var e = Jr !== 0;
    return Jr = 0,
    e
}
function nt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return oe === null ? G.memoizedState = oe = e : oe = oe.next = e,
    oe
}
function ze() {
    if (re === null) {
        var e = G.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = re.next;
    var t = oe === null ? G.memoizedState : oe.next;
    if (t !== null)
        oe = t,
        re = e;
    else {
        if (e === null)
            throw Error(N(310));
        re = e,
        e = {
            memoizedState: re.memoizedState,
            baseState: re.baseState,
            baseQueue: re.baseQueue,
            queue: re.queue,
            next: null
        },
        oe === null ? G.memoizedState = oe = e : oe = oe.next = e
    }
    return oe
}
function Qr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function yo(e) {
    var t = ze()
      , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = re
      , s = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (s !== null) {
            var o = s.next;
            s.next = i.next,
            i.next = o
        }
        r.baseQueue = s = i,
        n.pending = null
    }
    if (s !== null) {
        i = s.next,
        r = r.baseState;
        var l = o = null
          , u = null
          , c = i;
        do {
            var d = c.lane;
            if ((dn & d) === d)
                u !== null && (u = u.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var h = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                u === null ? (l = u = h,
                o = r) : u = u.next = h,
                G.lanes |= d,
                hn |= d
            }
            c = c.next
        } while (c !== null && c !== i);
        u === null ? o = r : u.next = l,
        Ye(r, t.memoizedState) || (je = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = u,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        s = e;
        do
            i = s.lane,
            G.lanes |= i,
            hn |= i,
            s = s.next;
        while (s !== e)
    } else
        s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function vo(e) {
    var t = ze()
      , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , s = n.pending
      , i = t.memoizedState;
    if (s !== null) {
        n.pending = null;
        var o = s = s.next;
        do
            i = e(i, o.action),
            o = o.next;
        while (o !== s);
        Ye(i, t.memoizedState) || (je = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Kd() {}
function qd(e, t) {
    var n = G
      , r = ze()
      , s = t()
      , i = !Ye(r.memoizedState, s);
    if (i && (r.memoizedState = s,
    je = !0),
    r = r.queue,
    bl(Qd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || oe !== null && oe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Yr(9, Jd.bind(null, n, r, s, t), void 0, null),
        ae === null)
            throw Error(N(349));
        dn & 30 || Gd(n, t, s)
    }
    return s
}
function Gd(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = G.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    G.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Jd(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Yd(t) && Xd(e)
}
function Qd(e, t, n) {
    return n(function() {
        Yd(t) && Xd(e)
    })
}
function Yd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ye(e, n)
    } catch {
        return !0
    }
}
function Xd(e) {
    var t = vt(e, 1);
    t !== null && Qe(t, e, 1, -1)
}
function $u(e) {
    var t = nt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Tm.bind(null, G, e),
    [t.memoizedState, e]
}
function Yr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = G.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    G.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Zd() {
    return ze().memoizedState
}
function Ws(e, t, n, r) {
    var s = nt();
    G.flags |= e,
    s.memoizedState = Yr(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ti(e, t, n, r) {
    var s = ze();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (re !== null) {
        var o = re.memoizedState;
        if (i = o.destroy,
        r !== null && vl(r, o.deps)) {
            s.memoizedState = Yr(t, n, i, r);
            return
        }
    }
    G.flags |= e,
    s.memoizedState = Yr(1 | t, n, i, r)
}
function Au(e, t) {
    return Ws(8390656, 8, e, t)
}
function bl(e, t) {
    return Ti(2048, 8, e, t)
}
function eh(e, t) {
    return Ti(4, 2, e, t)
}
function th(e, t) {
    return Ti(4, 4, e, t)
}
function nh(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function rh(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ti(4, 4, nh.bind(null, t, e), n)
}
function _l() {}
function sh(e, t) {
    var n = ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vl(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function ih(e, t) {
    var n = ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vl(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function oh(e, t, n) {
    return dn & 21 ? (Ye(n, t) || (n = dd(),
    G.lanes |= n,
    hn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    je = !0),
    e.memoizedState = n)
}
function Cm(e, t) {
    var n = M;
    M = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = go.transition;
    go.transition = {};
    try {
        e(!1),
        t()
    } finally {
        M = n,
        go.transition = r
    }
}
function ah() {
    return ze().memoizedState
}
function Pm(e, t, n) {
    var r = Dt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    lh(e))
        uh(t, n);
    else if (n = Wd(e, t, n, r),
    n !== null) {
        var s = ve();
        Qe(n, e, r, s),
        ch(n, t, r)
    }
}
function Tm(e, t, n) {
    var r = Dt(e)
      , s = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (lh(e))
        uh(t, s);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var o = t.lastRenderedState
                  , l = i(o, n);
                if (s.hasEagerState = !0,
                s.eagerState = l,
                Ye(l, o)) {
                    var u = t.interleaved;
                    u === null ? (s.next = s,
                    fl(t)) : (s.next = u.next,
                    u.next = s),
                    t.interleaved = s;
                    return
                }
            } catch {} finally {}
        n = Wd(e, t, s, r),
        n !== null && (s = ve(),
        Qe(n, e, r, s),
        ch(n, t, r))
    }
}
function lh(e) {
    var t = e.alternate;
    return e === G || t !== null && t === G
}
function uh(e, t) {
    Cr = fi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function ch(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Za(e, n)
    }
}
var pi = {
    readContext: Me,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1
}
  , Om = {
    readContext: Me,
    useCallback: function(e, t) {
        return nt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Me,
    useEffect: Au,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Ws(4194308, 4, nh.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Ws(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Ws(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = nt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = nt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Pm.bind(null, G, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = nt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: $u,
    useDebugValue: _l,
    useDeferredValue: function(e) {
        return nt().memoizedState = e
    },
    useTransition: function() {
        var e = $u(!1)
          , t = e[0];
        return e = Cm.bind(null, e[1]),
        nt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = G
          , s = nt();
        if (V) {
            if (n === void 0)
                throw Error(N(407));
            n = n()
        } else {
            if (n = t(),
            ae === null)
                throw Error(N(349));
            dn & 30 || Gd(r, t, n)
        }
        s.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return s.queue = i,
        Au(Qd.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        Yr(9, Jd.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = nt()
          , t = ae.identifierPrefix;
        if (V) {
            var n = ft
              , r = ht;
            n = (r & ~(1 << 32 - Je(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Jr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Em++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Rm = {
    readContext: Me,
    useCallback: sh,
    useContext: Me,
    useEffect: bl,
    useImperativeHandle: rh,
    useInsertionEffect: eh,
    useLayoutEffect: th,
    useMemo: ih,
    useReducer: yo,
    useRef: Zd,
    useState: function() {
        return yo(Qr)
    },
    useDebugValue: _l,
    useDeferredValue: function(e) {
        var t = ze();
        return oh(t, re.memoizedState, e)
    },
    useTransition: function() {
        var e = yo(Qr)[0]
          , t = ze().memoizedState;
        return [e, t]
    },
    useMutableSource: Kd,
    useSyncExternalStore: qd,
    useId: ah,
    unstable_isNewReconciler: !1
}
  , Im = {
    readContext: Me,
    useCallback: sh,
    useContext: Me,
    useEffect: bl,
    useImperativeHandle: rh,
    useInsertionEffect: eh,
    useLayoutEffect: th,
    useMemo: ih,
    useReducer: vo,
    useRef: Zd,
    useState: function() {
        return vo(Qr)
    },
    useDebugValue: _l,
    useDeferredValue: function(e) {
        var t = ze();
        return re === null ? t.memoizedState = e : oh(t, re.memoizedState, e)
    },
    useTransition: function() {
        var e = vo(Qr)[0]
          , t = ze().memoizedState;
        return [e, t]
    },
    useMutableSource: Kd,
    useSyncExternalStore: qd,
    useId: ah,
    unstable_isNewReconciler: !1
};
function We(e, t) {
    if (e && e.defaultProps) {
        t = J({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function ca(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : J({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Oi = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? mn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ve()
          , s = Dt(e)
          , i = pt(r, s);
        i.payload = t,
        n != null && (i.callback = n),
        t = Lt(e, i, s),
        t !== null && (Qe(t, e, s, r),
        Fs(t, e, s))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ve()
          , s = Dt(e)
          , i = pt(r, s);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = Lt(e, i, s),
        t !== null && (Qe(t, e, s, r),
        Fs(t, e, s))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ve()
          , r = Dt(e)
          , s = pt(n, r);
        s.tag = 2,
        t != null && (s.callback = t),
        t = Lt(e, s, r),
        t !== null && (Qe(t, e, r, n),
        Fs(t, e, r))
    }
};
function Lu(e, t, n, r, s, i, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Wr(n, r) || !Wr(s, i) : !0
}
function dh(e, t, n) {
    var r = !1
      , s = Ft
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = Me(i) : (s = Ne(t) ? un : me.current,
    r = t.contextTypes,
    i = (r = r != null) ? Kn(e, s) : Ft),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Oi,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = s,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Uu(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Oi.enqueueReplaceState(t, t.state, null)
}
function da(e, t, n, r) {
    var s = e.stateNode;
    s.props = n,
    s.state = e.memoizedState,
    s.refs = {},
    pl(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? s.context = Me(i) : (i = Ne(t) ? un : me.current,
    s.context = Kn(e, i)),
    s.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (ca(e, t, i, n),
    s.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state,
    typeof s.componentWillMount == "function" && s.componentWillMount(),
    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
    t !== s.state && Oi.enqueueReplaceState(s, s.state, null),
    di(e, n, s, r),
    s.state = e.memoizedState),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308)
}
function Qn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += ap(r),
            r = r.return;
        while (r);
        var s = n
    } catch (i) {
        s = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: s,
        digest: null
    }
}
function xo(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ha(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var $m = typeof WeakMap == "function" ? WeakMap : Map;
function hh(e, t, n) {
    n = pt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        gi || (gi = !0,
        _a = r),
        ha(e, t)
    }
    ,
    n
}
function fh(e, t, n) {
    n = pt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var s = t.value;
        n.payload = function() {
            return r(s)
        }
        ,
        n.callback = function() {
            ha(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        ha(e, t),
        typeof r != "function" && (Ut === null ? Ut = new Set([this]) : Ut.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function Du(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new $m;
        var s = new Set;
        r.set(t, s)
    } else
        s = r.get(t),
        s === void 0 && (s = new Set,
        r.set(t, s));
    s.has(n) || (s.add(n),
    e = Gm.bind(null, e, t, n),
    t.then(e, e))
}
function Mu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function zu(e, t, n, r, s) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = s,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = pt(-1, 1),
    t.tag = 2,
    Lt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Am = bt.ReactCurrentOwner
  , je = !1;
function ye(e, t, n, r) {
    t.child = e === null ? Bd(t, null, n, r) : Gn(t, e.child, n, r)
}
function Fu(e, t, n, r, s) {
    n = n.render;
    var i = t.ref;
    return Wn(t, s),
    r = xl(e, t, n, r, i, s),
    n = wl(),
    e !== null && !je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    xt(e, t, s)) : (V && n && al(t),
    t.flags |= 1,
    ye(e, t, r, s),
    t.child)
}
function Bu(e, t, n, r, s) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Tl(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        ph(e, t, i, r, s)) : (e = qs(n.type, null, r, t, t.mode, s),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & s)) {
        var o = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Wr,
        n(o, r) && e.ref === t.ref)
            return xt(e, t, s)
    }
    return t.flags |= 1,
    e = Mt(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function ph(e, t, n, r, s) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Wr(i, r) && e.ref === t.ref)
            if (je = !1,
            t.pendingProps = r = i,
            (e.lanes & s) !== 0)
                e.flags & 131072 && (je = !0);
            else
                return t.lanes = e.lanes,
                xt(e, t, s)
    }
    return fa(e, t, n, r, s)
}
function mh(e, t, n) {
    var r = t.pendingProps
      , s = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            F(Dn, Ce),
            Ce |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                F(Dn, Ce),
                Ce |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            F(Dn, Ce),
            Ce |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        F(Dn, Ce),
        Ce |= r;
    return ye(e, t, s, n),
    t.child
}
function gh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function fa(e, t, n, r, s) {
    var i = Ne(n) ? un : me.current;
    return i = Kn(t, i),
    Wn(t, s),
    n = xl(e, t, n, r, i, s),
    r = wl(),
    e !== null && !je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~s,
    xt(e, t, s)) : (V && r && al(t),
    t.flags |= 1,
    ye(e, t, n, s),
    t.child)
}
function Wu(e, t, n, r, s) {
    if (Ne(n)) {
        var i = !0;
        oi(t)
    } else
        i = !1;
    if (Wn(t, s),
    t.stateNode === null)
        Hs(e, t),
        dh(t, n, r),
        da(t, n, r, s),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , l = t.memoizedProps;
        o.props = l;
        var u = o.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = Me(c) : (c = Ne(n) ? un : me.current,
        c = Kn(t, c));
        var d = n.getDerivedStateFromProps
          , h = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || u !== c) && Uu(t, o, r, c),
        Nt = !1;
        var f = t.memoizedState;
        o.state = f,
        di(t, r, o, s),
        u = t.memoizedState,
        l !== r || f !== u || Se.current || Nt ? (typeof d == "function" && (ca(t, n, d, r),
        u = t.memoizedState),
        (l = Nt || Lu(t, n, l, r, f, u, c)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = u),
        o.props = r,
        o.state = u,
        o.context = c,
        r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        Hd(e, t),
        l = t.memoizedProps,
        c = t.type === t.elementType ? l : We(t.type, l),
        o.props = c,
        h = t.pendingProps,
        f = o.context,
        u = n.contextType,
        typeof u == "object" && u !== null ? u = Me(u) : (u = Ne(n) ? un : me.current,
        u = Kn(t, u));
        var y = n.getDerivedStateFromProps;
        (d = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== h || f !== u) && Uu(t, o, r, u),
        Nt = !1,
        f = t.memoizedState,
        o.state = f,
        di(t, r, o, s);
        var v = t.memoizedState;
        l !== h || f !== v || Se.current || Nt ? (typeof y == "function" && (ca(t, n, y, r),
        v = t.memoizedState),
        (c = Nt || Lu(t, n, c, r, f, v, u) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, u),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, u)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = v),
        o.props = r,
        o.state = v,
        o.context = u,
        r = c) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return pa(e, t, n, r, i, s)
}
function pa(e, t, n, r, s, i) {
    gh(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return s && Cu(t, n, !1),
        xt(e, t, i);
    r = t.stateNode,
    Am.current = t;
    var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = Gn(t, e.child, null, i),
    t.child = Gn(t, null, l, i)) : ye(e, t, l, i),
    t.memoizedState = r.state,
    s && Cu(t, n, !0),
    t.child
}
function yh(e) {
    var t = e.stateNode;
    t.pendingContext ? Eu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Eu(e, t.context, !1),
    ml(e, t.containerInfo)
}
function Hu(e, t, n, r, s) {
    return qn(),
    ul(s),
    t.flags |= 256,
    ye(e, t, n, r),
    t.child
}
var ma = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ga(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function vh(e, t, n) {
    var r = t.pendingProps, s = q.current, i = !1, o = (t.flags & 128) !== 0, l;
    if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    l ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1),
    F(q, s & 1),
    e === null)
        return la(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = $i(o, r, 0, null),
        e = ln(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = ga(n),
        t.memoizedState = ma,
        e) : kl(t, o));
    if (s = e.memoizedState,
    s !== null && (l = s.dehydrated,
    l !== null))
        return Lm(e, t, o, r, l, s, n);
    if (i) {
        i = r.fallback,
        o = t.mode,
        s = e.child,
        l = s.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== s ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = u,
        t.deletions = null) : (r = Mt(s, u),
        r.subtreeFlags = s.subtreeFlags & 14680064),
        l !== null ? i = Mt(l, i) : (i = ln(i, o, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        o = e.child.memoizedState,
        o = o === null ? ga(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = ma,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = Mt(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function kl(e, t) {
    return t = $i({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Es(e, t, n, r) {
    return r !== null && ul(r),
    Gn(t, e.child, null, n),
    e = kl(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Lm(e, t, n, r, s, i, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = xo(Error(N(422))),
        Es(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        s = t.mode,
        r = $i({
            mode: "visible",
            children: r.children
        }, s, 0, null),
        i = ln(i, s, o, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && Gn(t, e.child, null, o),
        t.child.memoizedState = ga(o),
        t.memoizedState = ma,
        i);
    if (!(t.mode & 1))
        return Es(e, t, o, null);
    if (s.data === "$!") {
        if (r = s.nextSibling && s.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        i = Error(N(419)),
        r = xo(i, r, void 0),
        Es(e, t, o, r)
    }
    if (l = (o & e.childLanes) !== 0,
    je || l) {
        if (r = ae,
        r !== null) {
            switch (o & -o) {
            case 4:
                s = 2;
                break;
            case 16:
                s = 8;
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
                s = 32;
                break;
            case 536870912:
                s = 268435456;
                break;
            default:
                s = 0
            }
            s = s & (r.suspendedLanes | o) ? 0 : s,
            s !== 0 && s !== i.retryLane && (i.retryLane = s,
            vt(e, s),
            Qe(r, e, s, -1))
        }
        return Pl(),
        r = xo(Error(N(421))),
        Es(e, t, o, r)
    }
    return s.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Jm.bind(null, e),
    s._reactRetry = t,
    null) : (e = i.treeContext,
    Pe = At(s.nextSibling),
    Te = t,
    V = !0,
    Ke = null,
    e !== null && ($e[Ae++] = ht,
    $e[Ae++] = ft,
    $e[Ae++] = cn,
    ht = e.id,
    ft = e.overflow,
    cn = t),
    t = kl(t, r.children),
    t.flags |= 4096,
    t)
}
function Vu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    ua(e.return, t, n)
}
function wo(e, t, n, r, s) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = s)
}
function xh(e, t, n) {
    var r = t.pendingProps
      , s = r.revealOrder
      , i = r.tail;
    if (ye(e, t, r.children, n),
    r = q.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Vu(e, n, t);
                else if (e.tag === 19)
                    Vu(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (F(q, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (s) {
        case "forwards":
            for (n = t.child,
            s = null; n !== null; )
                e = n.alternate,
                e !== null && hi(e) === null && (s = n),
                n = n.sibling;
            n = s,
            n === null ? (s = t.child,
            t.child = null) : (s = n.sibling,
            n.sibling = null),
            wo(t, !1, s, n, i);
            break;
        case "backwards":
            for (n = null,
            s = t.child,
            t.child = null; s !== null; ) {
                if (e = s.alternate,
                e !== null && hi(e) === null) {
                    t.child = s;
                    break
                }
                e = s.sibling,
                s.sibling = n,
                n = s,
                s = e
            }
            wo(t, !0, n, null, i);
            break;
        case "together":
            wo(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Hs(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function xt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    hn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(N(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Mt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Mt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Um(e, t, n) {
    switch (t.tag) {
    case 3:
        yh(t),
        qn();
        break;
    case 5:
        Vd(t);
        break;
    case 1:
        Ne(t.type) && oi(t);
        break;
    case 4:
        ml(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , s = t.memoizedProps.value;
        F(ui, r._currentValue),
        r._currentValue = s;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (F(q, q.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? vh(e, t, n) : (F(q, q.current & 1),
            e = xt(e, t, n),
            e !== null ? e.sibling : null);
        F(q, q.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return xh(e, t, n);
            t.flags |= 128
        }
        if (s = t.memoizedState,
        s !== null && (s.rendering = null,
        s.tail = null,
        s.lastEffect = null),
        F(q, q.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        mh(e, t, n)
    }
    return xt(e, t, n)
}
var wh, ya, bh, _h;
wh = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
ya = function() {}
;
bh = function(e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
        e = t.stateNode,
        on(ot.current);
        var i = null;
        switch (n) {
        case "input":
            s = Mo(e, s),
            r = Mo(e, r),
            i = [];
            break;
        case "select":
            s = J({}, s, {
                value: void 0
            }),
            r = J({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            s = Bo(e, s),
            r = Bo(e, r),
            i = [];
            break;
        default:
            typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = si)
        }
        Ho(n, r);
        var o;
        n = null;
        for (c in s)
            if (!r.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
                if (c === "style") {
                    var l = s[c];
                    for (o in l)
                        l.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Lr.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
        for (c in r) {
            var u = r[c];
            if (l = s != null ? s[c] : void 0,
            r.hasOwnProperty(c) && u !== l && (u != null || l != null))
                if (c === "style")
                    if (l) {
                        for (o in l)
                            !l.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in u)
                            u.hasOwnProperty(o) && l[o] !== u[o] && (n || (n = {}),
                            n[o] = u[o])
                    } else
                        n || (i || (i = []),
                        i.push(c, n)),
                        n = u;
                else
                    c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                    l = l ? l.__html : void 0,
                    u != null && l !== u && (i = i || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Lr.hasOwnProperty(c) ? (u != null && c === "onScroll" && B("scroll", e),
                    i || l === u || (i = [])) : (i = i || []).push(c, u))
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
_h = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function pr(e, t) {
    if (!V)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var s = e.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags & 14680064,
            r |= s.flags & 14680064,
            s.return = e,
            s = s.sibling;
    else
        for (s = e.child; s !== null; )
            n |= s.lanes | s.childLanes,
            r |= s.subtreeFlags,
            r |= s.flags,
            s.return = e,
            s = s.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Dm(e, t, n) {
    var r = t.pendingProps;
    switch (ll(t),
    t.tag) {
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
        return fe(t),
        null;
    case 1:
        return Ne(t.type) && ii(),
        fe(t),
        null;
    case 3:
        return r = t.stateNode,
        Jn(),
        W(Se),
        W(me),
        yl(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Ss(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Ke !== null && (Sa(Ke),
        Ke = null))),
        ya(e, t),
        fe(t),
        null;
    case 5:
        gl(t);
        var s = on(Gr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            bh(e, t, n, r, s),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(N(166));
                return fe(t),
                null
            }
            if (e = on(ot.current),
            Ss(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[st] = t,
                r[Kr] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    B("cancel", r),
                    B("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    B("load", r);
                    break;
                case "video":
                case "audio":
                    for (s = 0; s < br.length; s++)
                        B(br[s], r);
                    break;
                case "source":
                    B("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    B("error", r),
                    B("load", r);
                    break;
                case "details":
                    B("toggle", r);
                    break;
                case "input":
                    eu(r, i),
                    B("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    B("invalid", r);
                    break;
                case "textarea":
                    nu(r, i),
                    B("invalid", r)
                }
                Ho(n, i),
                s = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var l = i[o];
                        o === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && js(r.textContent, l, e),
                        s = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && js(r.textContent, l, e),
                        s = ["children", "" + l]) : Lr.hasOwnProperty(o) && l != null && o === "onScroll" && B("scroll", r)
                    }
                switch (n) {
                case "input":
                    gs(r),
                    tu(r, i, !0);
                    break;
                case "textarea":
                    gs(r),
                    ru(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = si)
                }
                r = s,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = s.nodeType === 9 ? s : s.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Qc(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[st] = t,
                e[Kr] = r,
                wh(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = Vo(n, r),
                    n) {
                    case "dialog":
                        B("cancel", e),
                        B("close", e),
                        s = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        B("load", e),
                        s = r;
                        break;
                    case "video":
                    case "audio":
                        for (s = 0; s < br.length; s++)
                            B(br[s], e);
                        s = r;
                        break;
                    case "source":
                        B("error", e),
                        s = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        B("error", e),
                        B("load", e),
                        s = r;
                        break;
                    case "details":
                        B("toggle", e),
                        s = r;
                        break;
                    case "input":
                        eu(e, r),
                        s = Mo(e, r),
                        B("invalid", e);
                        break;
                    case "option":
                        s = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        s = J({}, r, {
                            value: void 0
                        }),
                        B("invalid", e);
                        break;
                    case "textarea":
                        nu(e, r),
                        s = Bo(e, r),
                        B("invalid", e);
                        break;
                    default:
                        s = r
                    }
                    Ho(n, s),
                    l = s;
                    for (i in l)
                        if (l.hasOwnProperty(i)) {
                            var u = l[i];
                            i === "style" ? Zc(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                            u != null && Yc(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Ur(e, u) : typeof u == "number" && Ur(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Lr.hasOwnProperty(i) ? u != null && i === "onScroll" && B("scroll", e) : u != null && qa(e, i, u, o))
                        }
                    switch (n) {
                    case "input":
                        gs(e),
                        tu(e, r, !1);
                        break;
                    case "textarea":
                        gs(e),
                        ru(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + zt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Mn(e, !!r.multiple, i, !1) : r.defaultValue != null && Mn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof s.onClick == "function" && (e.onclick = si)
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
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return fe(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            _h(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(N(166));
            if (n = on(Gr.current),
            on(ot.current),
            Ss(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[st] = t,
                (i = r.nodeValue !== n) && (e = Te,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        js(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && js(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[st] = t,
                t.stateNode = r
        }
        return fe(t),
        null;
    case 13:
        if (W(q),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (V && Pe !== null && t.mode & 1 && !(t.flags & 128))
                zd(),
                qn(),
                t.flags |= 98560,
                i = !1;
            else if (i = Ss(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(N(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(N(317));
                    i[st] = t
                } else
                    qn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                fe(t),
                i = !1
            } else
                Ke !== null && (Sa(Ke),
                Ke = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || q.current & 1 ? se === 0 && (se = 3) : Pl())),
        t.updateQueue !== null && (t.flags |= 4),
        fe(t),
        null);
    case 4:
        return Jn(),
        ya(e, t),
        e === null && Hr(t.stateNode.containerInfo),
        fe(t),
        null;
    case 10:
        return hl(t.type._context),
        fe(t),
        null;
    case 17:
        return Ne(t.type) && ii(),
        fe(t),
        null;
    case 19:
        if (W(q),
        i = t.memoizedState,
        i === null)
            return fe(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (r)
                pr(i, !1);
            else {
                if (se !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = hi(e),
                        o !== null) {
                            for (t.flags |= 128,
                            pr(i, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = o.childLanes,
                                i.lanes = o.lanes,
                                i.child = o.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = o.memoizedProps,
                                i.memoizedState = o.memoizedState,
                                i.updateQueue = o.updateQueue,
                                i.type = o.type,
                                e = o.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return F(q, q.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && X() > Yn && (t.flags |= 128,
                r = !0,
                pr(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = hi(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    pr(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !V)
                        return fe(t),
                        null
                } else
                    2 * X() - i.renderingStartTime > Yn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    pr(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = i.last,
            n !== null ? n.sibling = o : t.child = o,
            i.last = o)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = X(),
        t.sibling = null,
        n = q.current,
        F(q, r ? n & 1 | 2 : n & 1),
        t) : (fe(t),
        null);
    case 22:
    case 23:
        return Cl(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ce & 1073741824 && (fe(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(N(156, t.tag))
}
function Mm(e, t) {
    switch (ll(t),
    t.tag) {
    case 1:
        return Ne(t.type) && ii(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Jn(),
        W(Se),
        W(me),
        yl(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return gl(t),
        null;
    case 13:
        if (W(q),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(N(340));
            qn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return W(q),
        null;
    case 4:
        return Jn(),
        null;
    case 10:
        return hl(t.type._context),
        null;
    case 22:
    case 23:
        return Cl(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Cs = !1
  , pe = !1
  , zm = typeof WeakSet == "function" ? WeakSet : Set
  , P = null;
function Un(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Q(e, t, r)
            }
        else
            n.current = null
}
function va(e, t, n) {
    try {
        n()
    } catch (r) {
        Q(e, t, r)
    }
}
var Ku = !1;
function Fm(e, t) {
    if (ta = ti,
    e = Ed(),
    ol(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var s = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , l = -1
                      , u = -1
                      , c = 0
                      , d = 0
                      , h = e
                      , f = null;
                    t: for (; ; ) {
                        for (var y; h !== n || s !== 0 && h.nodeType !== 3 || (l = o + s),
                        h !== i || r !== 0 && h.nodeType !== 3 || (u = o + r),
                        h.nodeType === 3 && (o += h.nodeValue.length),
                        (y = h.firstChild) !== null; )
                            f = h,
                            h = y;
                        for (; ; ) {
                            if (h === e)
                                break t;
                            if (f === n && ++c === s && (l = o),
                            f === i && ++d === r && (u = o),
                            (y = h.nextSibling) !== null)
                                break;
                            h = f,
                            f = h.parentNode
                        }
                        h = y
                    }
                    n = l === -1 || u === -1 ? null : {
                        start: l,
                        end: u
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (na = {
        focusedElem: e,
        selectionRange: n
    },
    ti = !1,
    P = t; P !== null; )
        if (t = P,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            P = e;
        else
            for (; P !== null; ) {
                t = P;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var b = v.memoizedProps
                                  , k = v.memoizedState
                                  , g = t.stateNode
                                  , m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? b : We(t.type, b), k);
                                g.__reactInternalSnapshotBeforeUpdate = m
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(N(163))
                        }
                } catch (_) {
                    Q(t, t.return, _)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    P = e;
                    break
                }
                P = t.return
            }
    return v = Ku,
    Ku = !1,
    v
}
function Pr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var s = r = r.next;
        do {
            if ((s.tag & e) === e) {
                var i = s.destroy;
                s.destroy = void 0,
                i !== void 0 && va(t, n, i)
            }
            s = s.next
        } while (s !== r)
    }
}
function Ri(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
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
function xa(e) {
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
function kh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    kh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[st],
    delete t[Kr],
    delete t[ia],
    delete t[km],
    delete t[jm])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function jh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function qu(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || jh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function wa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = si));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (wa(e, t, n),
        e = e.sibling; e !== null; )
            wa(e, t, n),
            e = e.sibling
}
function ba(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ba(e, t, n),
        e = e.sibling; e !== null; )
            ba(e, t, n),
            e = e.sibling
}
var ue = null
  , He = !1;
function _t(e, t, n) {
    for (n = n.child; n !== null; )
        Sh(e, t, n),
        n = n.sibling
}
function Sh(e, t, n) {
    if (it && typeof it.onCommitFiberUnmount == "function")
        try {
            it.onCommitFiberUnmount(ji, n)
        } catch {}
    switch (n.tag) {
    case 5:
        pe || Un(n, t);
    case 6:
        var r = ue
          , s = He;
        ue = null,
        _t(e, t, n),
        ue = r,
        He = s,
        ue !== null && (He ? (e = ue,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ue.removeChild(n.stateNode));
        break;
    case 18:
        ue !== null && (He ? (e = ue,
        n = n.stateNode,
        e.nodeType === 8 ? fo(e.parentNode, n) : e.nodeType === 1 && fo(e, n),
        Fr(e)) : fo(ue, n.stateNode));
        break;
    case 4:
        r = ue,
        s = He,
        ue = n.stateNode.containerInfo,
        He = !0,
        _t(e, t, n),
        ue = r,
        He = s;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!pe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            s = r = r.next;
            do {
                var i = s
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && va(n, t, o),
                s = s.next
            } while (s !== r)
        }
        _t(e, t, n);
        break;
    case 1:
        if (!pe && (Un(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                Q(n, t, l)
            }
        _t(e, t, n);
        break;
    case 21:
        _t(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (pe = (r = pe) || n.memoizedState !== null,
        _t(e, t, n),
        pe = r) : _t(e, t, n);
        break;
    default:
        _t(e, t, n)
    }
}
function Gu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new zm),
        t.forEach(function(r) {
            var s = Qm.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(s, s))
        })
    }
}
function Fe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var s = n[r];
            try {
                var i = e
                  , o = t
                  , l = o;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        ue = l.stateNode,
                        He = !1;
                        break e;
                    case 3:
                        ue = l.stateNode.containerInfo,
                        He = !0;
                        break e;
                    case 4:
                        ue = l.stateNode.containerInfo,
                        He = !0;
                        break e
                    }
                    l = l.return
                }
                if (ue === null)
                    throw Error(N(160));
                Sh(i, o, s),
                ue = null,
                He = !1;
                var u = s.alternate;
                u !== null && (u.return = null),
                s.return = null
            } catch (c) {
                Q(s, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Nh(t, e),
            t = t.sibling
}
function Nh(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Fe(t, e),
        tt(e),
        r & 4) {
            try {
                Pr(3, e, e.return),
                Ri(3, e)
            } catch (b) {
                Q(e, e.return, b)
            }
            try {
                Pr(5, e, e.return)
            } catch (b) {
                Q(e, e.return, b)
            }
        }
        break;
    case 1:
        Fe(t, e),
        tt(e),
        r & 512 && n !== null && Un(n, n.return);
        break;
    case 5:
        if (Fe(t, e),
        tt(e),
        r & 512 && n !== null && Un(n, n.return),
        e.flags & 32) {
            var s = e.stateNode;
            try {
                Ur(s, "")
            } catch (b) {
                Q(e, e.return, b)
            }
        }
        if (r & 4 && (s = e.stateNode,
        s != null)) {
            var i = e.memoizedProps
              , o = n !== null ? n.memoizedProps : i
              , l = e.type
              , u = e.updateQueue;
            if (e.updateQueue = null,
            u !== null)
                try {
                    l === "input" && i.type === "radio" && i.name != null && Gc(s, i),
                    Vo(l, o);
                    var c = Vo(l, i);
                    for (o = 0; o < u.length; o += 2) {
                        var d = u[o]
                          , h = u[o + 1];
                        d === "style" ? Zc(s, h) : d === "dangerouslySetInnerHTML" ? Yc(s, h) : d === "children" ? Ur(s, h) : qa(s, d, h, c)
                    }
                    switch (l) {
                    case "input":
                        zo(s, i);
                        break;
                    case "textarea":
                        Jc(s, i);
                        break;
                    case "select":
                        var f = s._wrapperState.wasMultiple;
                        s._wrapperState.wasMultiple = !!i.multiple;
                        var y = i.value;
                        y != null ? Mn(s, !!i.multiple, y, !1) : f !== !!i.multiple && (i.defaultValue != null ? Mn(s, !!i.multiple, i.defaultValue, !0) : Mn(s, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    s[Kr] = i
                } catch (b) {
                    Q(e, e.return, b)
                }
        }
        break;
    case 6:
        if (Fe(t, e),
        tt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(N(162));
            s = e.stateNode,
            i = e.memoizedProps;
            try {
                s.nodeValue = i
            } catch (b) {
                Q(e, e.return, b)
            }
        }
        break;
    case 3:
        if (Fe(t, e),
        tt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Fr(t.containerInfo)
            } catch (b) {
                Q(e, e.return, b)
            }
        break;
    case 4:
        Fe(t, e),
        tt(e);
        break;
    case 13:
        Fe(t, e),
        tt(e),
        s = e.child,
        s.flags & 8192 && (i = s.memoizedState !== null,
        s.stateNode.isHidden = i,
        !i || s.alternate !== null && s.alternate.memoizedState !== null || (Nl = X())),
        r & 4 && Gu(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (pe = (c = pe) || d,
        Fe(t, e),
        pe = c) : Fe(t, e),
        tt(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !d && e.mode & 1)
                for (P = e,
                d = e.child; d !== null; ) {
                    for (h = P = d; P !== null; ) {
                        switch (f = P,
                        y = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Pr(4, f, f.return);
                            break;
                        case 1:
                            Un(f, f.return);
                            var v = f.stateNode;
                            if (typeof v.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    v.props = t.memoizedProps,
                                    v.state = t.memoizedState,
                                    v.componentWillUnmount()
                                } catch (b) {
                                    Q(r, n, b)
                                }
                            }
                            break;
                        case 5:
                            Un(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                Qu(h);
                                continue
                            }
                        }
                        y !== null ? (y.return = f,
                        P = y) : Qu(h)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            h = e; ; ) {
                if (h.tag === 5) {
                    if (d === null) {
                        d = h;
                        try {
                            s = h.stateNode,
                            c ? (i = s.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = h.stateNode,
                            u = h.memoizedProps.style,
                            o = u != null && u.hasOwnProperty("display") ? u.display : null,
                            l.style.display = Xc("display", o))
                        } catch (b) {
                            Q(e, e.return, b)
                        }
                    }
                } else if (h.tag === 6) {
                    if (d === null)
                        try {
                            h.stateNode.nodeValue = c ? "" : h.memoizedProps
                        } catch (b) {
                            Q(e, e.return, b)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === e)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === e)
                        break e;
                    d === h && (d = null),
                    h = h.return
                }
                d === h && (d = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        Fe(t, e),
        tt(e),
        r & 4 && Gu(e);
        break;
    case 21:
        break;
    default:
        Fe(t, e),
        tt(e)
    }
}
function tt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (jh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(N(160))
            }
            switch (r.tag) {
            case 5:
                var s = r.stateNode;
                r.flags & 32 && (Ur(s, ""),
                r.flags &= -33);
                var i = qu(e);
                ba(e, i, s);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , l = qu(e);
                wa(e, l, o);
                break;
            default:
                throw Error(N(161))
            }
        } catch (u) {
            Q(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Bm(e, t, n) {
    P = e,
    Eh(e)
}
function Eh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; P !== null; ) {
        var s = P
          , i = s.child;
        if (s.tag === 22 && r) {
            var o = s.memoizedState !== null || Cs;
            if (!o) {
                var l = s.alternate
                  , u = l !== null && l.memoizedState !== null || pe;
                l = Cs;
                var c = pe;
                if (Cs = o,
                (pe = u) && !c)
                    for (P = s; P !== null; )
                        o = P,
                        u = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Yu(s) : u !== null ? (u.return = o,
                        P = u) : Yu(s);
                for (; i !== null; )
                    P = i,
                    Eh(i),
                    i = i.sibling;
                P = s,
                Cs = l,
                pe = c
            }
            Ju(e)
        } else
            s.subtreeFlags & 8772 && i !== null ? (i.return = s,
            P = i) : Ju(e)
    }
}
function Ju(e) {
    for (; P !== null; ) {
        var t = P;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        pe || Ri(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !pe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var s = t.elementType === t.type ? n.memoizedProps : We(t.type, n.memoizedProps);
                                r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Iu(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Iu(t, o, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var u = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                u.autoFocus && n.focus();
                                break;
                            case "img":
                                u.src && (n.src = u.src)
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
                            var c = t.alternate;
                            if (c !== null) {
                                var d = c.memoizedState;
                                if (d !== null) {
                                    var h = d.dehydrated;
                                    h !== null && Fr(h)
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
                        throw Error(N(163))
                    }
                pe || t.flags & 512 && xa(t)
            } catch (f) {
                Q(t, t.return, f)
            }
        }
        if (t === e) {
            P = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            P = n;
            break
        }
        P = t.return
    }
}
function Qu(e) {
    for (; P !== null; ) {
        var t = P;
        if (t === e) {
            P = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            P = n;
            break
        }
        P = t.return
    }
}
function Yu(e) {
    for (; P !== null; ) {
        var t = P;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Ri(4, t)
                } catch (u) {
                    Q(t, n, u)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var s = t.return;
                    try {
                        r.componentDidMount()
                    } catch (u) {
                        Q(t, s, u)
                    }
                }
                var i = t.return;
                try {
                    xa(t)
                } catch (u) {
                    Q(t, i, u)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    xa(t)
                } catch (u) {
                    Q(t, o, u)
                }
            }
        } catch (u) {
            Q(t, t.return, u)
        }
        if (t === e) {
            P = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            P = l;
            break
        }
        P = t.return
    }
}
var Wm = Math.ceil
  , mi = bt.ReactCurrentDispatcher
  , jl = bt.ReactCurrentOwner
  , Ue = bt.ReactCurrentBatchConfig
  , D = 0
  , ae = null
  , Z = null
  , ce = 0
  , Ce = 0
  , Dn = Wt(0)
  , se = 0
  , Xr = null
  , hn = 0
  , Ii = 0
  , Sl = 0
  , Tr = null
  , _e = null
  , Nl = 0
  , Yn = 1 / 0
  , ut = null
  , gi = !1
  , _a = null
  , Ut = null
  , Ps = !1
  , Ot = null
  , yi = 0
  , Or = 0
  , ka = null
  , Vs = -1
  , Ks = 0;
function ve() {
    return D & 6 ? X() : Vs !== -1 ? Vs : Vs = X()
}
function Dt(e) {
    return e.mode & 1 ? D & 2 && ce !== 0 ? ce & -ce : Nm.transition !== null ? (Ks === 0 && (Ks = dd()),
    Ks) : (e = M,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : vd(e.type)),
    e) : 1
}
function Qe(e, t, n, r) {
    if (50 < Or)
        throw Or = 0,
        ka = null,
        Error(N(185));
    rs(e, n, r),
    (!(D & 2) || e !== ae) && (e === ae && (!(D & 2) && (Ii |= n),
    se === 4 && Ct(e, ce)),
    Ee(e, r),
    n === 1 && D === 0 && !(t.mode & 1) && (Yn = X() + 500,
    Pi && Ht()))
}
function Ee(e, t) {
    var n = e.callbackNode;
    Np(e, t);
    var r = ei(e, e === ae ? ce : 0);
    if (r === 0)
        n !== null && ou(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && ou(n),
        t === 1)
            e.tag === 0 ? Sm(Xu.bind(null, e)) : Ud(Xu.bind(null, e)),
            bm(function() {
                !(D & 6) && Ht()
            }),
            n = null;
        else {
            switch (hd(r)) {
            case 1:
                n = Xa;
                break;
            case 4:
                n = ud;
                break;
            case 16:
                n = Zs;
                break;
            case 536870912:
                n = cd;
                break;
            default:
                n = Zs
            }
            n = Ah(n, Ch.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Ch(e, t) {
    if (Vs = -1,
    Ks = 0,
    D & 6)
        throw Error(N(327));
    var n = e.callbackNode;
    if (Hn() && e.callbackNode !== n)
        return null;
    var r = ei(e, e === ae ? ce : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = vi(e, r);
    else {
        t = r;
        var s = D;
        D |= 2;
        var i = Th();
        (ae !== e || ce !== t) && (ut = null,
        Yn = X() + 500,
        an(e, t));
        do
            try {
                Km();
                break
            } catch (l) {
                Ph(e, l)
            }
        while (!0);
        dl(),
        mi.current = i,
        D = s,
        Z !== null ? t = 0 : (ae = null,
        ce = 0,
        t = se)
    }
    if (t !== 0) {
        if (t === 2 && (s = Qo(e),
        s !== 0 && (r = s,
        t = ja(e, s))),
        t === 1)
            throw n = Xr,
            an(e, 0),
            Ct(e, r),
            Ee(e, X()),
            n;
        if (t === 6)
            Ct(e, r);
        else {
            if (s = e.current.alternate,
            !(r & 30) && !Hm(s) && (t = vi(e, r),
            t === 2 && (i = Qo(e),
            i !== 0 && (r = i,
            t = ja(e, i))),
            t === 1))
                throw n = Xr,
                an(e, 0),
                Ct(e, r),
                Ee(e, X()),
                n;
            switch (e.finishedWork = s,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(N(345));
            case 2:
                en(e, _e, ut);
                break;
            case 3:
                if (Ct(e, r),
                (r & 130023424) === r && (t = Nl + 500 - X(),
                10 < t)) {
                    if (ei(e, 0) !== 0)
                        break;
                    if (s = e.suspendedLanes,
                    (s & r) !== r) {
                        ve(),
                        e.pingedLanes |= e.suspendedLanes & s;
                        break
                    }
                    e.timeoutHandle = sa(en.bind(null, e, _e, ut), t);
                    break
                }
                en(e, _e, ut);
                break;
            case 4:
                if (Ct(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                s = -1; 0 < r; ) {
                    var o = 31 - Je(r);
                    i = 1 << o,
                    o = t[o],
                    o > s && (s = o),
                    r &= ~i
                }
                if (r = s,
                r = X() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Wm(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = sa(en.bind(null, e, _e, ut), r);
                    break
                }
                en(e, _e, ut);
                break;
            case 5:
                en(e, _e, ut);
                break;
            default:
                throw Error(N(329))
            }
        }
    }
    return Ee(e, X()),
    e.callbackNode === n ? Ch.bind(null, e) : null
}
function ja(e, t) {
    var n = Tr;
    return e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256),
    e = vi(e, t),
    e !== 2 && (t = _e,
    _e = n,
    t !== null && Sa(t)),
    e
}
function Sa(e) {
    _e === null ? _e = e : _e.push.apply(_e, e)
}
function Hm(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var s = n[r]
                      , i = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!Ye(i(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Ct(e, t) {
    for (t &= ~Sl,
    t &= ~Ii,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Je(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Xu(e) {
    if (D & 6)
        throw Error(N(327));
    Hn();
    var t = ei(e, 0);
    if (!(t & 1))
        return Ee(e, X()),
        null;
    var n = vi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Qo(e);
        r !== 0 && (t = r,
        n = ja(e, r))
    }
    if (n === 1)
        throw n = Xr,
        an(e, 0),
        Ct(e, t),
        Ee(e, X()),
        n;
    if (n === 6)
        throw Error(N(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    en(e, _e, ut),
    Ee(e, X()),
    null
}
function El(e, t) {
    var n = D;
    D |= 1;
    try {
        return e(t)
    } finally {
        D = n,
        D === 0 && (Yn = X() + 500,
        Pi && Ht())
    }
}
function fn(e) {
    Ot !== null && Ot.tag === 0 && !(D & 6) && Hn();
    var t = D;
    D |= 1;
    var n = Ue.transition
      , r = M;
    try {
        if (Ue.transition = null,
        M = 1,
        e)
            return e()
    } finally {
        M = r,
        Ue.transition = n,
        D = t,
        !(D & 6) && Ht()
    }
}
function Cl() {
    Ce = Dn.current,
    W(Dn)
}
function an(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    wm(n)),
    Z !== null)
        for (n = Z.return; n !== null; ) {
            var r = n;
            switch (ll(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ii();
                break;
            case 3:
                Jn(),
                W(Se),
                W(me),
                yl();
                break;
            case 5:
                gl(r);
                break;
            case 4:
                Jn();
                break;
            case 13:
                W(q);
                break;
            case 19:
                W(q);
                break;
            case 10:
                hl(r.type._context);
                break;
            case 22:
            case 23:
                Cl()
            }
            n = n.return
        }
    if (ae = e,
    Z = e = Mt(e.current, null),
    ce = Ce = t,
    se = 0,
    Xr = null,
    Sl = Ii = hn = 0,
    _e = Tr = null,
    sn !== null) {
        for (t = 0; t < sn.length; t++)
            if (n = sn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var s = r.next
                  , i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = s,
                    r.next = o
                }
                n.pending = r
            }
        sn = null
    }
    return e
}
function Ph(e, t) {
    do {
        var n = Z;
        try {
            if (dl(),
            Bs.current = pi,
            fi) {
                for (var r = G.memoizedState; r !== null; ) {
                    var s = r.queue;
                    s !== null && (s.pending = null),
                    r = r.next
                }
                fi = !1
            }
            if (dn = 0,
            oe = re = G = null,
            Cr = !1,
            Jr = 0,
            jl.current = null,
            n === null || n.return === null) {
                se = 1,
                Xr = t,
                Z = null;
                break
            }
            e: {
                var i = e
                  , o = n.return
                  , l = n
                  , u = t;
                if (t = ce,
                l.flags |= 32768,
                u !== null && typeof u == "object" && typeof u.then == "function") {
                    var c = u
                      , d = l
                      , h = d.tag;
                    if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var f = d.alternate;
                        f ? (d.updateQueue = f.updateQueue,
                        d.memoizedState = f.memoizedState,
                        d.lanes = f.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var y = Mu(o);
                    if (y !== null) {
                        y.flags &= -257,
                        zu(y, o, l, i, t),
                        y.mode & 1 && Du(i, c, t),
                        t = y,
                        u = c;
                        var v = t.updateQueue;
                        if (v === null) {
                            var b = new Set;
                            b.add(u),
                            t.updateQueue = b
                        } else
                            v.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Du(i, c, t),
                            Pl();
                            break e
                        }
                        u = Error(N(426))
                    }
                } else if (V && l.mode & 1) {
                    var k = Mu(o);
                    if (k !== null) {
                        !(k.flags & 65536) && (k.flags |= 256),
                        zu(k, o, l, i, t),
                        ul(Qn(u, l));
                        break e
                    }
                }
                i = u = Qn(u, l),
                se !== 4 && (se = 2),
                Tr === null ? Tr = [i] : Tr.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var g = hh(i, u, t);
                        Ru(i, g);
                        break e;
                    case 1:
                        l = u;
                        var m = i.type
                          , p = i.stateNode;
                        if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Ut === null || !Ut.has(p)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var _ = fh(i, l, t);
                            Ru(i, _);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Rh(n)
        } catch (x) {
            t = x,
            Z === n && n !== null && (Z = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Th() {
    var e = mi.current;
    return mi.current = pi,
    e === null ? pi : e
}
function Pl() {
    (se === 0 || se === 3 || se === 2) && (se = 4),
    ae === null || !(hn & 268435455) && !(Ii & 268435455) || Ct(ae, ce)
}
function vi(e, t) {
    var n = D;
    D |= 2;
    var r = Th();
    (ae !== e || ce !== t) && (ut = null,
    an(e, t));
    do
        try {
            Vm();
            break
        } catch (s) {
            Ph(e, s)
        }
    while (!0);
    if (dl(),
    D = n,
    mi.current = r,
    Z !== null)
        throw Error(N(261));
    return ae = null,
    ce = 0,
    se
}
function Vm() {
    for (; Z !== null; )
        Oh(Z)
}
function Km() {
    for (; Z !== null && !yp(); )
        Oh(Z)
}
function Oh(e) {
    var t = $h(e.alternate, e, Ce);
    e.memoizedProps = e.pendingProps,
    t === null ? Rh(e) : Z = t,
    jl.current = null
}
function Rh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Mm(n, t),
            n !== null) {
                n.flags &= 32767,
                Z = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                se = 6,
                Z = null;
                return
            }
        } else if (n = Dm(n, t, Ce),
        n !== null) {
            Z = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Z = t;
            return
        }
        Z = t = e
    } while (t !== null);
    se === 0 && (se = 5)
}
function en(e, t, n) {
    var r = M
      , s = Ue.transition;
    try {
        Ue.transition = null,
        M = 1,
        qm(e, t, n, r)
    } finally {
        Ue.transition = s,
        M = r
    }
    return null
}
function qm(e, t, n, r) {
    do
        Hn();
    while (Ot !== null);
    if (D & 6)
        throw Error(N(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(N(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Ep(e, i),
    e === ae && (Z = ae = null,
    ce = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ps || (Ps = !0,
    Ah(Zs, function() {
        return Hn(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = Ue.transition,
        Ue.transition = null;
        var o = M;
        M = 1;
        var l = D;
        D |= 4,
        jl.current = null,
        Fm(e, n),
        Nh(n, e),
        fm(na),
        ti = !!ta,
        na = ta = null,
        e.current = n,
        Bm(n),
        vp(),
        D = l,
        M = o,
        Ue.transition = i
    } else
        e.current = n;
    if (Ps && (Ps = !1,
    Ot = e,
    yi = s),
    i = e.pendingLanes,
    i === 0 && (Ut = null),
    bp(n.stateNode),
    Ee(e, X()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            s = t[n],
            r(s.value, {
                componentStack: s.stack,
                digest: s.digest
            });
    if (gi)
        throw gi = !1,
        e = _a,
        _a = null,
        e;
    return yi & 1 && e.tag !== 0 && Hn(),
    i = e.pendingLanes,
    i & 1 ? e === ka ? Or++ : (Or = 0,
    ka = e) : Or = 0,
    Ht(),
    null
}
function Hn() {
    if (Ot !== null) {
        var e = hd(yi)
          , t = Ue.transition
          , n = M;
        try {
            if (Ue.transition = null,
            M = 16 > e ? 16 : e,
            Ot === null)
                var r = !1;
            else {
                if (e = Ot,
                Ot = null,
                yi = 0,
                D & 6)
                    throw Error(N(331));
                var s = D;
                for (D |= 4,
                P = e.current; P !== null; ) {
                    var i = P
                      , o = i.child;
                    if (P.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var u = 0; u < l.length; u++) {
                                var c = l[u];
                                for (P = c; P !== null; ) {
                                    var d = P;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Pr(8, d, i)
                                    }
                                    var h = d.child;
                                    if (h !== null)
                                        h.return = d,
                                        P = h;
                                    else
                                        for (; P !== null; ) {
                                            d = P;
                                            var f = d.sibling
                                              , y = d.return;
                                            if (kh(d),
                                            d === c) {
                                                P = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = y,
                                                P = f;
                                                break
                                            }
                                            P = y
                                        }
                                }
                            }
                            var v = i.alternate;
                            if (v !== null) {
                                var b = v.child;
                                if (b !== null) {
                                    v.child = null;
                                    do {
                                        var k = b.sibling;
                                        b.sibling = null,
                                        b = k
                                    } while (b !== null)
                                }
                            }
                            P = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        P = o;
                    else
                        e: for (; P !== null; ) {
                            if (i = P,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Pr(9, i, i.return)
                                }
                            var g = i.sibling;
                            if (g !== null) {
                                g.return = i.return,
                                P = g;
                                break e
                            }
                            P = i.return
                        }
                }
                var m = e.current;
                for (P = m; P !== null; ) {
                    o = P;
                    var p = o.child;
                    if (o.subtreeFlags & 2064 && p !== null)
                        p.return = o,
                        P = p;
                    else
                        e: for (o = m; P !== null; ) {
                            if (l = P,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ri(9, l)
                                    }
                                } catch (x) {
                                    Q(l, l.return, x)
                                }
                            if (l === o) {
                                P = null;
                                break e
                            }
                            var _ = l.sibling;
                            if (_ !== null) {
                                _.return = l.return,
                                P = _;
                                break e
                            }
                            P = l.return
                        }
                }
                if (D = s,
                Ht(),
                it && typeof it.onPostCommitFiberRoot == "function")
                    try {
                        it.onPostCommitFiberRoot(ji, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            M = n,
            Ue.transition = t
        }
    }
    return !1
}
function Zu(e, t, n) {
    t = Qn(n, t),
    t = hh(e, t, 1),
    e = Lt(e, t, 1),
    t = ve(),
    e !== null && (rs(e, 1, t),
    Ee(e, t))
}
function Q(e, t, n) {
    if (e.tag === 3)
        Zu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Zu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ut === null || !Ut.has(r))) {
                    e = Qn(n, e),
                    e = fh(t, e, 1),
                    t = Lt(t, e, 1),
                    e = ve(),
                    t !== null && (rs(t, 1, e),
                    Ee(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Gm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ve(),
    e.pingedLanes |= e.suspendedLanes & n,
    ae === e && (ce & n) === n && (se === 4 || se === 3 && (ce & 130023424) === ce && 500 > X() - Nl ? an(e, 0) : Sl |= n),
    Ee(e, t)
}
function Ih(e, t) {
    t === 0 && (e.mode & 1 ? (t = xs,
    xs <<= 1,
    !(xs & 130023424) && (xs = 4194304)) : t = 1);
    var n = ve();
    e = vt(e, t),
    e !== null && (rs(e, t, n),
    Ee(e, n))
}
function Jm(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Ih(e, n)
}
function Qm(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(N(314))
    }
    r !== null && r.delete(t),
    Ih(e, n)
}
var $h;
$h = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Se.current)
            je = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return je = !1,
                Um(e, t, n);
            je = !!(e.flags & 131072)
        }
    else
        je = !1,
        V && t.flags & 1048576 && Dd(t, li, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Hs(e, t),
        e = t.pendingProps;
        var s = Kn(t, me.current);
        Wn(t, n),
        s = xl(null, t, r, e, s, n);
        var i = wl();
        return t.flags |= 1,
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ne(r) ? (i = !0,
        oi(t)) : i = !1,
        t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        pl(t),
        s.updater = Oi,
        t.stateNode = s,
        s._reactInternals = t,
        da(t, r, e, n),
        t = pa(null, t, r, !0, i, n)) : (t.tag = 0,
        V && i && al(t),
        ye(null, t, s, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Hs(e, t),
            e = t.pendingProps,
            s = r._init,
            r = s(r._payload),
            t.type = r,
            s = t.tag = Xm(r),
            e = We(r, e),
            s) {
            case 0:
                t = fa(null, t, r, e, n);
                break e;
            case 1:
                t = Wu(null, t, r, e, n);
                break e;
            case 11:
                t = Fu(null, t, r, e, n);
                break e;
            case 14:
                t = Bu(null, t, r, We(r.type, e), n);
                break e
            }
            throw Error(N(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : We(r, s),
        fa(e, t, r, s, n);
    case 1:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : We(r, s),
        Wu(e, t, r, s, n);
    case 3:
        e: {
            if (yh(t),
            e === null)
                throw Error(N(387));
            r = t.pendingProps,
            i = t.memoizedState,
            s = i.element,
            Hd(e, t),
            di(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    s = Qn(Error(N(423)), t),
                    t = Hu(e, t, r, n, s);
                    break e
                } else if (r !== s) {
                    s = Qn(Error(N(424)), t),
                    t = Hu(e, t, r, n, s);
                    break e
                } else
                    for (Pe = At(t.stateNode.containerInfo.firstChild),
                    Te = t,
                    V = !0,
                    Ke = null,
                    n = Bd(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (qn(),
                r === s) {
                    t = xt(e, t, n);
                    break e
                }
                ye(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Vd(t),
        e === null && la(t),
        r = t.type,
        s = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        o = s.children,
        ra(r, s) ? o = null : i !== null && ra(r, i) && (t.flags |= 32),
        gh(e, t),
        ye(e, t, o, n),
        t.child;
    case 6:
        return e === null && la(t),
        null;
    case 13:
        return vh(e, t, n);
    case 4:
        return ml(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Gn(t, null, r, n) : ye(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : We(r, s),
        Fu(e, t, r, s, n);
    case 7:
        return ye(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ye(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ye(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            s = t.pendingProps,
            i = t.memoizedProps,
            o = s.value,
            F(ui, r._currentValue),
            r._currentValue = o,
            i !== null)
                if (Ye(i.value, o)) {
                    if (i.children === s.children && !Se.current) {
                        t = xt(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var l = i.dependencies;
                        if (l !== null) {
                            o = i.child;
                            for (var u = l.firstContext; u !== null; ) {
                                if (u.context === r) {
                                    if (i.tag === 1) {
                                        u = pt(-1, n & -n),
                                        u.tag = 2;
                                        var c = i.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var d = c.pending;
                                            d === null ? u.next = u : (u.next = d.next,
                                            d.next = u),
                                            c.pending = u
                                        }
                                    }
                                    i.lanes |= n,
                                    u = i.alternate,
                                    u !== null && (u.lanes |= n),
                                    ua(i.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                u = u.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(N(341));
                            o.lanes |= n,
                            l = o.alternate,
                            l !== null && (l.lanes |= n),
                            ua(o, n, t),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (i = o.sibling,
                                i !== null) {
                                    i.return = o.return,
                                    o = i;
                                    break
                                }
                                o = o.return
                            }
                        i = o
                    }
            ye(e, t, s.children, n),
            t = t.child
        }
        return t;
    case 9:
        return s = t.type,
        r = t.pendingProps.children,
        Wn(t, n),
        s = Me(s),
        r = r(s),
        t.flags |= 1,
        ye(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        s = We(r, t.pendingProps),
        s = We(r.type, s),
        Bu(e, t, r, s, n);
    case 15:
        return ph(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        s = t.pendingProps,
        s = t.elementType === r ? s : We(r, s),
        Hs(e, t),
        t.tag = 1,
        Ne(r) ? (e = !0,
        oi(t)) : e = !1,
        Wn(t, n),
        dh(t, r, s),
        da(t, r, s, n),
        pa(null, t, r, !0, e, n);
    case 19:
        return xh(e, t, n);
    case 22:
        return mh(e, t, n)
    }
    throw Error(N(156, t.tag))
}
;
function Ah(e, t) {
    return ld(e, t)
}
function Ym(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Le(e, t, n, r) {
    return new Ym(e,t,n,r)
}
function Tl(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Xm(e) {
    if (typeof e == "function")
        return Tl(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Ja)
            return 11;
        if (e === Qa)
            return 14
    }
    return 2
}
function Mt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Le(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function qs(e, t, n, r, s, i) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        Tl(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case Cn:
            return ln(n.children, s, i, t);
        case Ga:
            o = 8,
            s |= 8;
            break;
        case Ao:
            return e = Le(12, n, t, s | 2),
            e.elementType = Ao,
            e.lanes = i,
            e;
        case Lo:
            return e = Le(13, n, t, s),
            e.elementType = Lo,
            e.lanes = i,
            e;
        case Uo:
            return e = Le(19, n, t, s),
            e.elementType = Uo,
            e.lanes = i,
            e;
        case Vc:
            return $i(n, s, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Wc:
                    o = 10;
                    break e;
                case Hc:
                    o = 9;
                    break e;
                case Ja:
                    o = 11;
                    break e;
                case Qa:
                    o = 14;
                    break e;
                case St:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(N(130, e == null ? e : typeof e, ""))
        }
    return t = Le(o, n, t, s),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function ln(e, t, n, r) {
    return e = Le(7, e, r, t),
    e.lanes = n,
    e
}
function $i(e, t, n, r) {
    return e = Le(22, e, r, t),
    e.elementType = Vc,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function bo(e, t, n) {
    return e = Le(6, e, null, t),
    e.lanes = n,
    e
}
function _o(e, t, n) {
    return t = Le(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Zm(e, t, n, r, s) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = to(0),
    this.expirationTimes = to(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = to(0),
    this.identifierPrefix = r,
    this.onRecoverableError = s,
    this.mutableSourceEagerHydrationData = null
}
function Ol(e, t, n, r, s, i, o, l, u) {
    return e = new Zm(e,t,n,l,u),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = Le(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    pl(i),
    e
}
function eg(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: En,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Lh(e) {
    if (!e)
        return Ft;
    e = e._reactInternals;
    e: {
        if (mn(e) !== e || e.tag !== 1)
            throw Error(N(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ne(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(N(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ne(n))
            return Ld(e, n, t)
    }
    return t
}
function Uh(e, t, n, r, s, i, o, l, u) {
    return e = Ol(n, r, !0, e, s, i, o, l, u),
    e.context = Lh(null),
    n = e.current,
    r = ve(),
    s = Dt(n),
    i = pt(r, s),
    i.callback = t ?? null,
    Lt(n, i, s),
    e.current.lanes = s,
    rs(e, s, r),
    Ee(e, r),
    e
}
function Ai(e, t, n, r) {
    var s = t.current
      , i = ve()
      , o = Dt(s);
    return n = Lh(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = pt(i, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Lt(s, t, o),
    e !== null && (Qe(e, s, o, i),
    Fs(e, s, o)),
    o
}
function xi(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function ec(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Rl(e, t) {
    ec(e, t),
    (e = e.alternate) && ec(e, t)
}
function tg() {
    return null
}
var Dh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Il(e) {
    this._internalRoot = e
}
Li.prototype.render = Il.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(N(409));
    Ai(e, t, null, null)
}
;
Li.prototype.unmount = Il.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        fn(function() {
            Ai(null, e, null, null)
        }),
        t[yt] = null
    }
}
;
function Li(e) {
    this._internalRoot = e
}
Li.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = md();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++)
            ;
        Et.splice(n, 0, e),
        n === 0 && yd(e)
    }
}
;
function $l(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ui(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function tc() {}
function ng(e, t, n, r, s) {
    if (s) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var c = xi(o);
                i.call(c)
            }
        }
        var o = Uh(t, r, e, 0, null, !1, !1, "", tc);
        return e._reactRootContainer = o,
        e[yt] = o.current,
        Hr(e.nodeType === 8 ? e.parentNode : e),
        fn(),
        o
    }
    for (; s = e.lastChild; )
        e.removeChild(s);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var c = xi(u);
            l.call(c)
        }
    }
    var u = Ol(e, 0, !1, null, null, !1, !1, "", tc);
    return e._reactRootContainer = u,
    e[yt] = u.current,
    Hr(e.nodeType === 8 ? e.parentNode : e),
    fn(function() {
        Ai(t, u, n, r)
    }),
    u
}
function Di(e, t, n, r, s) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof s == "function") {
            var l = s;
            s = function() {
                var u = xi(o);
                l.call(u)
            }
        }
        Ai(t, o, e, s)
    } else
        o = ng(n, t, e, s, r);
    return xi(o)
}
fd = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = wr(t.pendingLanes);
            n !== 0 && (Za(t, n | 1),
            Ee(t, X()),
            !(D & 6) && (Yn = X() + 500,
            Ht()))
        }
        break;
    case 13:
        fn(function() {
            var r = vt(e, 1);
            if (r !== null) {
                var s = ve();
                Qe(r, e, 1, s)
            }
        }),
        Rl(e, 1)
    }
}
;
el = function(e) {
    if (e.tag === 13) {
        var t = vt(e, 134217728);
        if (t !== null) {
            var n = ve();
            Qe(t, e, 134217728, n)
        }
        Rl(e, 134217728)
    }
}
;
pd = function(e) {
    if (e.tag === 13) {
        var t = Dt(e)
          , n = vt(e, t);
        if (n !== null) {
            var r = ve();
            Qe(n, e, t, r)
        }
        Rl(e, t)
    }
}
;
md = function() {
    return M
}
;
gd = function(e, t) {
    var n = M;
    try {
        return M = e,
        t()
    } finally {
        M = n
    }
}
;
qo = function(e, t, n) {
    switch (t) {
    case "input":
        if (zo(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var s = Ci(r);
                    if (!s)
                        throw Error(N(90));
                    qc(r),
                    zo(r, s)
                }
            }
        }
        break;
    case "textarea":
        Jc(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Mn(e, !!n.multiple, t, !1)
    }
}
;
nd = El;
rd = fn;
var rg = {
    usingClientEntryPoint: !1,
    Events: [is, Rn, Ci, ed, td, El]
}
  , mr = {
    findFiberByHostInstance: rn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , sg = {
    bundleType: mr.bundleType,
    version: mr.version,
    rendererPackageName: mr.rendererPackageName,
    rendererConfig: mr.rendererConfig,
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
        return e = od(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: mr.findFiberByHostInstance || tg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ts = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ts.isDisabled && Ts.supportsFiber)
        try {
            ji = Ts.inject(sg),
            it = Ts
        } catch {}
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rg;
Re.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$l(t))
        throw Error(N(200));
    return eg(e, t, null, n)
}
;
Re.createRoot = function(e, t) {
    if (!$l(e))
        throw Error(N(299));
    var n = !1
      , r = ""
      , s = Dh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    t = Ol(e, 1, !1, null, null, n, !1, r, s),
    e[yt] = t.current,
    Hr(e.nodeType === 8 ? e.parentNode : e),
    new Il(t)
}
;
Re.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","),
        Error(N(268, e)));
    return e = od(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Re.flushSync = function(e) {
    return fn(e)
}
;
Re.hydrate = function(e, t, n) {
    if (!Ui(t))
        throw Error(N(200));
    return Di(null, e, t, !0, n)
}
;
Re.hydrateRoot = function(e, t, n) {
    if (!$l(e))
        throw Error(N(405));
    var r = n != null && n.hydratedSources || null
      , s = !1
      , i = ""
      , o = Dh;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = Uh(t, null, e, 1, n ?? null, s, !1, i, o),
    e[yt] = t.current,
    Hr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            s = n._getVersion,
            s = s(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(n, s);
    return new Li(t)
}
;
Re.render = function(e, t, n) {
    if (!Ui(t))
        throw Error(N(200));
    return Di(null, e, t, !1, n)
}
;
Re.unmountComponentAtNode = function(e) {
    if (!Ui(e))
        throw Error(N(40));
    return e._reactRootContainer ? (fn(function() {
        Di(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[yt] = null
        })
    }),
    !0) : !1
}
;
Re.unstable_batchedUpdates = El;
Re.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ui(n))
        throw Error(N(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(N(38));
    return Di(e, t, n, !1, r)
}
;
Re.version = "18.3.1-next-f1338f8080-20240426";
function Mh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mh)
        } catch (e) {
            console.error(e)
        }
}
Mh(),
Mc.exports = Re;
var ig = Mc.exports, zh, nc = ig;
zh = nc.createRoot,
nc.hydrateRoot;
/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var rc = "popstate";
function og(e={}) {
    function t(r, s) {
        let {pathname: i, search: o, hash: l} = r.location;
        return Na("", {
            pathname: i,
            search: o,
            hash: l
        }, s.state && s.state.usr || null, s.state && s.state.key || "default")
    }
    function n(r, s) {
        return typeof s == "string" ? s : Zr(s)
    }
    return lg(t, n, null, e)
}
function K(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Xe(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function ag() {
    return Math.random().toString(36).substring(2, 10)
}
function sc(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Na(e, t, n=null, r) {
    return {
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: "",
        ...typeof t == "string" ? nr(t) : t,
        state: n,
        key: t && t.key || r || ag()
    }
}
function Zr({pathname: e="/", search: t="", hash: n=""}) {
    return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
}
function nr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substring(n),
        e = e.substring(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substring(r),
        e = e.substring(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function lg(e, t, n, r={}) {
    let {window: s=document.defaultView, v5Compat: i=!1} = r
      , o = s.history
      , l = "POP"
      , u = null
      , c = d();
    c == null && (c = 0,
    o.replaceState({
        ...o.state,
        idx: c
    }, ""));
    function d() {
        return (o.state || {
            idx: null
        }).idx
    }
    function h() {
        l = "POP";
        let k = d()
          , g = k == null ? null : k - c;
        c = k,
        u && u({
            action: l,
            location: b.location,
            delta: g
        })
    }
    function f(k, g) {
        l = "PUSH";
        let m = Na(b.location, k, g);
        c = d() + 1;
        let p = sc(m, c)
          , _ = b.createHref(m);
        try {
            o.pushState(p, "", _)
        } catch (x) {
            if (x instanceof DOMException && x.name === "DataCloneError")
                throw x;
            s.location.assign(_)
        }
        i && u && u({
            action: l,
            location: b.location,
            delta: 1
        })
    }
    function y(k, g) {
        l = "REPLACE";
        let m = Na(b.location, k, g);
        c = d();
        let p = sc(m, c)
          , _ = b.createHref(m);
        o.replaceState(p, "", _),
        i && u && u({
            action: l,
            location: b.location,
            delta: 0
        })
    }
    function v(k) {
        return ug(k)
    }
    let b = {
        get action() {
            return l
        },
        get location() {
            return e(s, o)
        },
        listen(k) {
            if (u)
                throw new Error("A history only accepts one active listener");
            return s.addEventListener(rc, h),
            u = k,
            () => {
                s.removeEventListener(rc, h),
                u = null
            }
        },
        createHref(k) {
            return t(s, k)
        },
        createURL: v,
        encodeLocation(k) {
            let g = v(k);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: f,
        replace: y,
        go(k) {
            return o.go(k)
        }
    };
    return b
}
function ug(e, t=!1) {
    let n = "http://localhost";
    typeof window < "u" && (n = window.location.origin !== "null" ? window.location.origin : window.location.href),
    K(n, "No window.location.(origin|href) available to create URL");
    let r = typeof e == "string" ? e : Zr(e);
    return r = r.replace(/ $/, "%20"),
    !t && r.startsWith("//") && (r = n + r),
    new URL(r,n)
}
function Fh(e, t, n="/") {
    return cg(e, t, n, !1)
}
function cg(e, t, n, r) {
    let s = typeof t == "string" ? nr(t) : t
      , i = wt(s.pathname || "/", n);
    if (i == null)
        return null;
    let o = Bh(e);
    dg(o);
    let l = null;
    for (let u = 0; l == null && u < o.length; ++u) {
        let c = _g(i);
        l = wg(o[u], c, r)
    }
    return l
}
function Bh(e, t=[], n=[], r="", s=!1) {
    let i = (o, l, u=s, c) => {
        let d = {
            relativePath: c === void 0 ? o.path || "" : c,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: l,
            route: o
        };
        if (d.relativePath.startsWith("/")) {
            if (!d.relativePath.startsWith(r) && u)
                return;
            K(d.relativePath.startsWith(r), `Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
            d.relativePath = d.relativePath.slice(r.length)
        }
        let h = mt([r, d.relativePath])
          , f = n.concat(d);
        o.children && o.children.length > 0 && (K(o.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${h}".`),
        Bh(o.children, t, f, h, u)),
        !(o.path == null && !o.index) && t.push({
            path: h,
            score: vg(h, o.index),
            routesMeta: f
        })
    }
    ;
    return e.forEach( (o, l) => {
        var u;
        if (o.path === "" || !((u = o.path) != null && u.includes("?")))
            i(o, l);
        else
            for (let c of Wh(o.path))
                i(o, l, !0, c)
    }
    ),
    t
}
function Wh(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , s = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return s ? [i, ""] : [i];
    let o = Wh(r.join("/"))
      , l = [];
    return l.push(...o.map(u => u === "" ? i : [i, u].join("/"))),
    s && l.push(...o),
    l.map(u => e.startsWith("/") && u === "" ? "/" : u)
}
function dg(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : xg(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
var hg = /^:[\w-]+$/
  , fg = 3
  , pg = 2
  , mg = 1
  , gg = 10
  , yg = -2
  , ic = e => e === "*";
function vg(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(ic) && (r += yg),
    t && (r += pg),
    n.filter(s => !ic(s)).reduce( (s, i) => s + (hg.test(i) ? fg : i === "" ? mg : gg), r)
}
function xg(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, s) => r === t[s]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function wg(e, t, n=!1) {
    let {routesMeta: r} = e
      , s = {}
      , i = "/"
      , o = [];
    for (let l = 0; l < r.length; ++l) {
        let u = r[l]
          , c = l === r.length - 1
          , d = i === "/" ? t : t.slice(i.length) || "/"
          , h = wi({
            path: u.relativePath,
            caseSensitive: u.caseSensitive,
            end: c
        }, d)
          , f = u.route;
        if (!h && c && n && !r[r.length - 1].route.index && (h = wi({
            path: u.relativePath,
            caseSensitive: u.caseSensitive,
            end: !1
        }, d)),
        !h)
            return null;
        Object.assign(s, h.params),
        o.push({
            params: s,
            pathname: mt([i, h.pathname]),
            pathnameBase: Ng(mt([i, h.pathnameBase])),
            route: f
        }),
        h.pathnameBase !== "/" && (i = mt([i, h.pathnameBase]))
    }
    return o
}
function wi(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = bg(e.path, e.caseSensitive, e.end)
      , s = t.match(n);
    if (!s)
        return null;
    let i = s[0]
      , o = i.replace(/(.)\/+$/, "$1")
      , l = s.slice(1);
    return {
        params: r.reduce( (c, {paramName: d, isOptional: h}, f) => {
            if (d === "*") {
                let v = l[f] || "";
                o = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1")
            }
            const y = l[f];
            return h && !y ? c[d] = void 0 : c[d] = (y || "").replace(/%2F/g, "/"),
            c
        }
        , {}),
        pathname: i,
        pathnameBase: o,
        pattern: e
    }
}
function bg(e, t=!1, n=!0) {
    Xe(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
    let r = []
      , s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, l, u) => (r.push({
        paramName: l,
        isOptional: u != null
    }),
    u ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? s += "\\/*$" : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s,t ? void 0 : "i"), r]
}
function _g(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Xe(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),
        e
    }
}
function wt(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function kg(e, t="/") {
    let {pathname: n, search: r="", hash: s=""} = typeof e == "string" ? nr(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : jg(n, t) : t,
        search: Eg(r),
        hash: Cg(s)
    }
}
function jg(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(s => {
        s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function ko(e, t, n, r) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function Sg(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function Al(e) {
    let t = Sg(e);
    return t.map( (n, r) => r === t.length - 1 ? n.pathname : n.pathnameBase)
}
function Ll(e, t, n, r=!1) {
    let s;
    typeof e == "string" ? s = nr(e) : (s = {
        ...e
    },
    K(!s.pathname || !s.pathname.includes("?"), ko("?", "pathname", "search", s)),
    K(!s.pathname || !s.pathname.includes("#"), ko("#", "pathname", "hash", s)),
    K(!s.search || !s.search.includes("#"), ko("#", "search", "hash", s)));
    let i = e === "" || s.pathname === "", o = i ? "/" : s.pathname, l;
    if (o == null)
        l = n;
    else {
        let h = t.length - 1;
        if (!r && o.startsWith("..")) {
            let f = o.split("/");
            for (; f[0] === ".."; )
                f.shift(),
                h -= 1;
            s.pathname = f.join("/")
        }
        l = h >= 0 ? t[h] : "/"
    }
    let u = kg(s, l)
      , c = o && o !== "/" && o.endsWith("/")
      , d = (i || o === ".") && n.endsWith("/");
    return !u.pathname.endsWith("/") && (c || d) && (u.pathname += "/"),
    u
}
var mt = e => e.join("/").replace(/\/\/+/g, "/")
  , Ng = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Eg = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , Cg = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Pg(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
var Hh = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Hh);
var Tg = ["GET", ...Hh];
new Set(Tg);
var rr = w.createContext(null);
rr.displayName = "DataRouter";
var Mi = w.createContext(null);
Mi.displayName = "DataRouterState";
w.createContext(!1);
var Vh = w.createContext({
    isTransitioning: !1
});
Vh.displayName = "ViewTransition";
var Og = w.createContext(new Map);
Og.displayName = "Fetchers";
var Rg = w.createContext(null);
Rg.displayName = "Await";
var Ze = w.createContext(null);
Ze.displayName = "Navigation";
var as = w.createContext(null);
as.displayName = "Location";
var at = w.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
at.displayName = "Route";
var Ul = w.createContext(null);
Ul.displayName = "RouteError";
function Ig(e, {relative: t}={}) {
    K(sr(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: n, navigator: r} = w.useContext(Ze)
      , {hash: s, pathname: i, search: o} = ls(e, {
        relative: t
    })
      , l = i;
    return n !== "/" && (l = i === "/" ? n : mt([n, i])),
    r.createHref({
        pathname: l,
        search: o,
        hash: s
    })
}
function sr() {
    return w.useContext(as) != null
}
function Vt() {
    return K(sr(), "useLocation() may be used only in the context of a <Router> component."),
    w.useContext(as).location
}
var Kh = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function qh(e) {
    w.useContext(Ze).static || w.useLayoutEffect(e)
}
function gn() {
    let {isDataRoute: e} = w.useContext(at);
    return e ? Kg() : $g()
}
function $g() {
    K(sr(), "useNavigate() may be used only in the context of a <Router> component.");
    let e = w.useContext(rr)
      , {basename: t, navigator: n} = w.useContext(Ze)
      , {matches: r} = w.useContext(at)
      , {pathname: s} = Vt()
      , i = JSON.stringify(Al(r))
      , o = w.useRef(!1);
    return qh( () => {
        o.current = !0
    }
    ),
    w.useCallback( (u, c={}) => {
        if (Xe(o.current, Kh),
        !o.current)
            return;
        if (typeof u == "number") {
            n.go(u);
            return
        }
        let d = Ll(u, JSON.parse(i), s, c.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : mt([t, d.pathname])),
        (c.replace ? n.replace : n.push)(d, c.state, c)
    }
    , [t, n, i, s, e])
}
w.createContext(null);
function ls(e, {relative: t}={}) {
    let {matches: n} = w.useContext(at)
      , {pathname: r} = Vt()
      , s = JSON.stringify(Al(n));
    return w.useMemo( () => Ll(e, JSON.parse(s), r, t === "path"), [e, s, r, t])
}
function Ag(e, t) {
    return Gh(e, t)
}
function Gh(e, t, n, r, s) {
    var m;
    K(sr(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: i} = w.useContext(Ze)
      , {matches: o} = w.useContext(at)
      , l = o[o.length - 1]
      , u = l ? l.params : {}
      , c = l ? l.pathname : "/"
      , d = l ? l.pathnameBase : "/"
      , h = l && l.route;
    {
        let p = h && h.path || "";
        Jh(c, !h || p.endsWith("*") || p.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${p}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${p}"> to <Route path="${p === "/" ? "*" : `${p}/*`}">.`)
    }
    let f = Vt(), y;
    if (t) {
        let p = typeof t == "string" ? nr(t) : t;
        K(d === "/" || ((m = p.pathname) == null ? void 0 : m.startsWith(d)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${p.pathname}" was given in the \`location\` prop.`),
        y = p
    } else
        y = f;
    let v = y.pathname || "/"
      , b = v;
    if (d !== "/") {
        let p = d.replace(/^\//, "").split("/");
        b = "/" + v.replace(/^\//, "").split("/").slice(p.length).join("/")
    }
    let k = Fh(e, {
        pathname: b
    });
    Xe(h || k != null, `No routes matched location "${y.pathname}${y.search}${y.hash}" `),
    Xe(k == null || k[k.length - 1].route.element !== void 0 || k[k.length - 1].route.Component !== void 0 || k[k.length - 1].route.lazy !== void 0, `Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let g = zg(k && k.map(p => Object.assign({}, p, {
        params: Object.assign({}, u, p.params),
        pathname: mt([d, i.encodeLocation ? i.encodeLocation(p.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : p.pathname]),
        pathnameBase: p.pathnameBase === "/" ? d : mt([d, i.encodeLocation ? i.encodeLocation(p.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : p.pathnameBase])
    })), o, n, r, s);
    return t && g ? w.createElement(as.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...y
            },
            navigationType: "POP"
        }
    }, g) : g
}
function Lg() {
    let e = Vg()
      , t = Pg(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , r = "rgba(200,200,200, 0.5)"
      , s = {
        padding: "0.5rem",
        backgroundColor: r
    }
      , i = {
        padding: "2px 4px",
        backgroundColor: r
    }
      , o = null;
    return console.error("Error handled by React Router default ErrorBoundary:", e),
    o = w.createElement(w.Fragment, null, w.createElement("p", null, "💿 Hey developer 👋"), w.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", w.createElement("code", {
        style: i
    }, "ErrorBoundary"), " or", " ", w.createElement("code", {
        style: i
    }, "errorElement"), " prop on your route.")),
    w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? w.createElement("pre", {
        style: s
    }, n) : null, o)
}
var Ug = w.createElement(Lg, null)
  , Dg = class extends w.Component {
    constructor(e) {
        super(e),
        this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, t) {
        return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation
        }
    }
    componentDidCatch(e, t) {
        this.props.unstable_onError ? this.props.unstable_onError(e, t) : console.error("React Router caught the following error during render", e)
    }
    render() {
        return this.state.error !== void 0 ? w.createElement(at.Provider, {
            value: this.props.routeContext
        }, w.createElement(Ul.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
;
function Mg({routeContext: e, match: t, children: n}) {
    let r = w.useContext(rr);
    return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    w.createElement(at.Provider, {
        value: e
    }, n)
}
function zg(e, t=[], n=null, r=null, s=null) {
    if (e == null) {
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if (t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let i = e
      , o = n == null ? void 0 : n.errors;
    if (o != null) {
        let c = i.findIndex(d => d.route.id && (o == null ? void 0 : o[d.route.id]) !== void 0);
        K(c >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),
        i = i.slice(0, Math.min(i.length, c + 1))
    }
    let l = !1
      , u = -1;
    if (n)
        for (let c = 0; c < i.length; c++) {
            let d = i[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
            d.route.id) {
                let {loaderData: h, errors: f} = n
                  , y = d.route.loader && !h.hasOwnProperty(d.route.id) && (!f || f[d.route.id] === void 0);
                if (d.route.lazy || y) {
                    l = !0,
                    u >= 0 ? i = i.slice(0, u + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight( (c, d, h) => {
        let f, y = !1, v = null, b = null;
        n && (f = o && d.route.id ? o[d.route.id] : void 0,
        v = d.route.errorElement || Ug,
        l && (u < 0 && h === 0 ? (Jh("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        y = !0,
        b = null) : u === h && (y = !0,
        b = d.route.hydrateFallbackElement || null)));
        let k = t.concat(i.slice(0, h + 1))
          , g = () => {
            let m;
            return f ? m = v : y ? m = b : d.route.Component ? m = w.createElement(d.route.Component, null) : d.route.element ? m = d.route.element : m = c,
            w.createElement(Mg, {
                match: d,
                routeContext: {
                    outlet: c,
                    matches: k,
                    isDataRoute: n != null
                },
                children: m
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0) ? w.createElement(Dg, {
            location: n.location,
            revalidation: n.revalidation,
            component: v,
            error: f,
            children: g(),
            routeContext: {
                outlet: null,
                matches: k,
                isDataRoute: !0
            },
            unstable_onError: r
        }) : g()
    }
    , null)
}
function Dl(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Fg(e) {
    let t = w.useContext(rr);
    return K(t, Dl(e)),
    t
}
function Bg(e) {
    let t = w.useContext(Mi);
    return K(t, Dl(e)),
    t
}
function Wg(e) {
    let t = w.useContext(at);
    return K(t, Dl(e)),
    t
}
function Ml(e) {
    let t = Wg(e)
      , n = t.matches[t.matches.length - 1];
    return K(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
}
function Hg() {
    return Ml("useRouteId")
}
function Vg() {
    var r;
    let e = w.useContext(Ul)
      , t = Bg("useRouteError")
      , n = Ml("useRouteError");
    return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n]
}
function Kg() {
    let {router: e} = Fg("useNavigate")
      , t = Ml("useNavigate")
      , n = w.useRef(!1);
    return qh( () => {
        n.current = !0
    }
    ),
    w.useCallback(async (s, i={}) => {
        Xe(n.current, Kh),
        n.current && (typeof s == "number" ? e.navigate(s) : await e.navigate(s, {
            fromRouteId: t,
            ...i
        }))
    }
    , [e, t])
}
var oc = {};
function Jh(e, t, n) {
    !t && !oc[e] && (oc[e] = !0,
    Xe(!1, n))
}
w.memo(qg);
function qg({routes: e, future: t, state: n, unstable_onError: r}) {
    return Gh(e, void 0, n, r, t)
}
function Gg({to: e, replace: t, state: n, relative: r}) {
    K(sr(), "<Navigate> may be used only in the context of a <Router> component.");
    let {static: s} = w.useContext(Ze);
    Xe(!s, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let {matches: i} = w.useContext(at)
      , {pathname: o} = Vt()
      , l = gn()
      , u = Ll(e, Al(i), o, r === "path")
      , c = JSON.stringify(u);
    return w.useEffect( () => {
        l(JSON.parse(c), {
            replace: t,
            state: n,
            relative: r
        })
    }
    , [l, c, r, t, n]),
    null
}
function be(e) {
    K(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}
function Jg({basename: e="/", children: t=null, location: n, navigationType: r="POP", navigator: s, static: i=!1}) {
    K(!sr(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let o = e.replace(/^\/*/, "/")
      , l = w.useMemo( () => ({
        basename: o,
        navigator: s,
        static: i,
        future: {}
    }), [o, s, i]);
    typeof n == "string" && (n = nr(n));
    let {pathname: u="/", search: c="", hash: d="", state: h=null, key: f="default"} = n
      , y = w.useMemo( () => {
        let v = wt(u, o);
        return v == null ? null : {
            location: {
                pathname: v,
                search: c,
                hash: d,
                state: h,
                key: f
            },
            navigationType: r
        }
    }
    , [o, u, c, d, h, f, r]);
    return Xe(y != null, `<Router basename="${o}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),
    y == null ? null : w.createElement(Ze.Provider, {
        value: l
    }, w.createElement(as.Provider, {
        children: t,
        value: y
    }))
}
function Qg({children: e, location: t}) {
    return Ag(Ea(e), t)
}
function Ea(e, t=[]) {
    let n = [];
    return w.Children.forEach(e, (r, s) => {
        if (!w.isValidElement(r))
            return;
        let i = [...t, s];
        if (r.type === w.Fragment) {
            n.push.apply(n, Ea(r.props.children, i));
            return
        }
        K(r.type === be, `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
        K(!r.props.index || !r.props.children, "An index route cannot have child routes.");
        let o = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            middleware: r.props.middleware,
            loader: r.props.loader,
            action: r.props.action,
            hydrateFallbackElement: r.props.hydrateFallbackElement,
            HydrateFallback: r.props.HydrateFallback,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.hasErrorBoundary === !0 || r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (o.children = Ea(r.props.children, i)),
        n.push(o)
    }
    ),
    n
}
var Gs = "get"
  , Js = "application/x-www-form-urlencoded";
function zi(e) {
    return e != null && typeof e.tagName == "string"
}
function Yg(e) {
    return zi(e) && e.tagName.toLowerCase() === "button"
}
function Xg(e) {
    return zi(e) && e.tagName.toLowerCase() === "form"
}
function Zg(e) {
    return zi(e) && e.tagName.toLowerCase() === "input"
}
function e0(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function t0(e, t) {
    return e.button === 0 && (!t || t === "_self") && !e0(e)
}
var Os = null;
function n0() {
    if (Os === null)
        try {
            new FormData(document.createElement("form"),0),
            Os = !1
        } catch {
            Os = !0
        }
    return Os
}
var r0 = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function jo(e) {
    return e != null && !r0.has(e) ? (Xe(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Js}"`),
    null) : e
}
function s0(e, t) {
    let n, r, s, i, o;
    if (Xg(e)) {
        let l = e.getAttribute("action");
        r = l ? wt(l, t) : null,
        n = e.getAttribute("method") || Gs,
        s = jo(e.getAttribute("enctype")) || Js,
        i = new FormData(e)
    } else if (Yg(e) || Zg(e) && (e.type === "submit" || e.type === "image")) {
        let l = e.form;
        if (l == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let u = e.getAttribute("formaction") || l.getAttribute("action");
        if (r = u ? wt(u, t) : null,
        n = e.getAttribute("formmethod") || l.getAttribute("method") || Gs,
        s = jo(e.getAttribute("formenctype")) || jo(l.getAttribute("enctype")) || Js,
        i = new FormData(l,e),
        !n0()) {
            let {name: c, type: d, value: h} = e;
            if (d === "image") {
                let f = c ? `${c}.` : "";
                i.append(`${f}x`, "0"),
                i.append(`${f}y`, "0")
            } else
                c && i.append(c, h)
        }
    } else {
        if (zi(e))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        n = Gs,
        r = null,
        s = Js,
        o = e
    }
    return i && s === "text/plain" && (o = i,
    i = void 0),
    {
        action: r,
        method: n.toLowerCase(),
        encType: s,
        formData: i,
        body: o
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function zl(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function i0(e, t, n) {
    let r = typeof e == "string" ? new URL(e,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
    return r.pathname === "/" ? r.pathname = `_root.${n}` : t && wt(r.pathname, t) === "/" ? r.pathname = `${t.replace(/\/$/, "")}/_root.${n}` : r.pathname = `${r.pathname.replace(/\/$/, "")}.${n}`,
    r
}
async function o0(e, t) {
    if (e.id in t)
        return t[e.id];
    try {
        let n = await import(e.module);
        return t[e.id] = n,
        n
    } catch (n) {
        return console.error(`Error loading route module \`${e.module}\`, reloading page...`),
        console.error(n),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function a0(e) {
    return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string"
}
async function l0(e, t, n) {
    let r = await Promise.all(e.map(async s => {
        let i = t.routes[s.route.id];
        if (i) {
            let o = await o0(i, n);
            return o.links ? o.links() : []
        }
        return []
    }
    ));
    return h0(r.flat(1).filter(a0).filter(s => s.rel === "stylesheet" || s.rel === "preload").map(s => s.rel === "stylesheet" ? {
        ...s,
        rel: "prefetch",
        as: "style"
    } : {
        ...s,
        rel: "prefetch"
    }))
}
function ac(e, t, n, r, s, i) {
    let o = (u, c) => n[c] ? u.route.id !== n[c].route.id : !0
      , l = (u, c) => {
        var d;
        return n[c].pathname !== u.pathname || ((d = n[c].route.path) == null ? void 0 : d.endsWith("*")) && n[c].params["*"] !== u.params["*"]
    }
    ;
    return i === "assets" ? t.filter( (u, c) => o(u, c) || l(u, c)) : i === "data" ? t.filter( (u, c) => {
        var h;
        let d = r.routes[u.route.id];
        if (!d || !d.hasLoader)
            return !1;
        if (o(u, c) || l(u, c))
            return !0;
        if (u.route.shouldRevalidate) {
            let f = u.route.shouldRevalidate({
                currentUrl: new URL(s.pathname + s.search + s.hash,window.origin),
                currentParams: ((h = n[0]) == null ? void 0 : h.params) || {},
                nextUrl: new URL(e,window.origin),
                nextParams: u.params,
                defaultShouldRevalidate: !0
            });
            if (typeof f == "boolean")
                return f
        }
        return !0
    }
    ) : []
}
function u0(e, t, {includeHydrateFallback: n}={}) {
    return c0(e.map(r => {
        let s = t.routes[r.route.id];
        if (!s)
            return [];
        let i = [s.module];
        return s.clientActionModule && (i = i.concat(s.clientActionModule)),
        s.clientLoaderModule && (i = i.concat(s.clientLoaderModule)),
        n && s.hydrateFallbackModule && (i = i.concat(s.hydrateFallbackModule)),
        s.imports && (i = i.concat(s.imports)),
        i
    }
    ).flat(1))
}
function c0(e) {
    return [...new Set(e)]
}
function d0(e) {
    let t = {}
      , n = Object.keys(e).sort();
    for (let r of n)
        t[r] = e[r];
    return t
}
function h0(e, t) {
    let n = new Set;
    return new Set(t),
    e.reduce( (r, s) => {
        let i = JSON.stringify(d0(s));
        return n.has(i) || (n.add(i),
        r.push({
            key: i,
            link: s
        })),
        r
    }
    , [])
}
function Qh() {
    let e = w.useContext(rr);
    return zl(e, "You must render this element inside a <DataRouterContext.Provider> element"),
    e
}
function f0() {
    let e = w.useContext(Mi);
    return zl(e, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    e
}
var Fl = w.createContext(void 0);
Fl.displayName = "FrameworkContext";
function Yh() {
    let e = w.useContext(Fl);
    return zl(e, "You must render this element inside a <HydratedRouter> element"),
    e
}
function p0(e, t) {
    let n = w.useContext(Fl)
      , [r,s] = w.useState(!1)
      , [i,o] = w.useState(!1)
      , {onFocus: l, onBlur: u, onMouseEnter: c, onMouseLeave: d, onTouchStart: h} = t
      , f = w.useRef(null);
    w.useEffect( () => {
        if (e === "render" && o(!0),
        e === "viewport") {
            let b = g => {
                g.forEach(m => {
                    o(m.isIntersecting)
                }
                )
            }
              , k = new IntersectionObserver(b,{
                threshold: .5
            });
            return f.current && k.observe(f.current),
            () => {
                k.disconnect()
            }
        }
    }
    , [e]),
    w.useEffect( () => {
        if (r) {
            let b = setTimeout( () => {
                o(!0)
            }
            , 100);
            return () => {
                clearTimeout(b)
            }
        }
    }
    , [r]);
    let y = () => {
        s(!0)
    }
      , v = () => {
        s(!1),
        o(!1)
    }
    ;
    return n ? e !== "intent" ? [i, f, {}] : [i, f, {
        onFocus: gr(l, y),
        onBlur: gr(u, v),
        onMouseEnter: gr(c, y),
        onMouseLeave: gr(d, v),
        onTouchStart: gr(h, y)
    }] : [!1, f, {}]
}
function gr(e, t) {
    return n => {
        e && e(n),
        n.defaultPrevented || t(n)
    }
}
function m0({page: e, ...t}) {
    let {router: n} = Qh()
      , r = w.useMemo( () => Fh(n.routes, e, n.basename), [n.routes, e, n.basename]);
    return r ? w.createElement(y0, {
        page: e,
        matches: r,
        ...t
    }) : null
}
function g0(e) {
    let {manifest: t, routeModules: n} = Yh()
      , [r,s] = w.useState([]);
    return w.useEffect( () => {
        let i = !1;
        return l0(e, t, n).then(o => {
            i || s(o)
        }
        ),
        () => {
            i = !0
        }
    }
    , [e, t, n]),
    r
}
function y0({page: e, matches: t, ...n}) {
    let r = Vt()
      , {manifest: s, routeModules: i} = Yh()
      , {basename: o} = Qh()
      , {loaderData: l, matches: u} = f0()
      , c = w.useMemo( () => ac(e, t, u, s, r, "data"), [e, t, u, s, r])
      , d = w.useMemo( () => ac(e, t, u, s, r, "assets"), [e, t, u, s, r])
      , h = w.useMemo( () => {
        if (e === r.pathname + r.search + r.hash)
            return [];
        let v = new Set
          , b = !1;
        if (t.forEach(g => {
            var p;
            let m = s.routes[g.route.id];
            !m || !m.hasLoader || (!c.some(_ => _.route.id === g.route.id) && g.route.id in l && ((p = i[g.route.id]) != null && p.shouldRevalidate) || m.hasClientLoader ? b = !0 : v.add(g.route.id))
        }
        ),
        v.size === 0)
            return [];
        let k = i0(e, o, "data");
        return b && v.size > 0 && k.searchParams.set("_routes", t.filter(g => v.has(g.route.id)).map(g => g.route.id).join(",")),
        [k.pathname + k.search]
    }
    , [o, l, r, s, c, t, e, i])
      , f = w.useMemo( () => u0(d, s), [d, s])
      , y = g0(d);
    return w.createElement(w.Fragment, null, h.map(v => w.createElement("link", {
        key: v,
        rel: "prefetch",
        as: "fetch",
        href: v,
        ...n
    })), f.map(v => w.createElement("link", {
        key: v,
        rel: "modulepreload",
        href: v,
        ...n
    })), y.map( ({key: v, link: b}) => w.createElement("link", {
        key: v,
        nonce: n.nonce,
        ...b
    })))
}
function v0(...e) {
    return t => {
        e.forEach(n => {
            typeof n == "function" ? n(t) : n != null && (n.current = t)
        }
        )
    }
}
var Xh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    Xh && (window.__reactRouterVersion = "7.9.3")
} catch {}
function x0({basename: e, children: t, window: n}) {
    let r = w.useRef();
    r.current == null && (r.current = og({
        window: n,
        v5Compat: !0
    }));
    let s = r.current
      , [i,o] = w.useState({
        action: s.action,
        location: s.location
    })
      , l = w.useCallback(u => {
        w.startTransition( () => o(u))
    }
    , [o]);
    return w.useLayoutEffect( () => s.listen(l), [s, l]),
    w.createElement(Jg, {
        basename: e,
        children: t,
        location: i.location,
        navigationType: i.action,
        navigator: s
    })
}
var Zh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Ge = w.forwardRef(function({onClick: t, discover: n="render", prefetch: r="none", relative: s, reloadDocument: i, replace: o, state: l, target: u, to: c, preventScrollReset: d, viewTransition: h, ...f}, y) {
    let {basename: v} = w.useContext(Ze), b = typeof c == "string" && Zh.test(c), k, g = !1;
    if (typeof c == "string" && b && (k = c,
    Xh))
        try {
            let C = new URL(window.location.href)
              , O = c.startsWith("//") ? new URL(C.protocol + c) : new URL(c)
              , R = wt(O.pathname, v);
            O.origin === C.origin && R != null ? c = R + O.search + O.hash : g = !0
        } catch {
            Xe(!1, `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    let m = Ig(c, {
        relative: s
    })
      , [p,_,x] = p0(r, f)
      , j = k0(c, {
        replace: o,
        state: l,
        target: u,
        preventScrollReset: d,
        relative: s,
        viewTransition: h
    });
    function S(C) {
        t && t(C),
        C.defaultPrevented || j(C)
    }
    let E = w.createElement("a", {
        ...f,
        ...x,
        href: k || m,
        onClick: g || i ? t : S,
        ref: v0(y, _),
        target: u,
        "data-discover": !b && n === "render" ? "true" : void 0
    });
    return p && !b ? w.createElement(w.Fragment, null, E, w.createElement(m0, {
        page: m
    })) : E
});
Ge.displayName = "Link";
var w0 = w.forwardRef(function({"aria-current": t="page", caseSensitive: n=!1, className: r="", end: s=!1, style: i, to: o, viewTransition: l, children: u, ...c}, d) {
    let h = ls(o, {
        relative: c.relative
    })
      , f = Vt()
      , y = w.useContext(Mi)
      , {navigator: v, basename: b} = w.useContext(Ze)
      , k = y != null && C0(h) && l === !0
      , g = v.encodeLocation ? v.encodeLocation(h).pathname : h.pathname
      , m = f.pathname
      , p = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
    n || (m = m.toLowerCase(),
    p = p ? p.toLowerCase() : null,
    g = g.toLowerCase()),
    p && b && (p = wt(p, b) || p);
    const _ = g !== "/" && g.endsWith("/") ? g.length - 1 : g.length;
    let x = m === g || !s && m.startsWith(g) && m.charAt(_) === "/", j = p != null && (p === g || !s && p.startsWith(g) && p.charAt(g.length) === "/"), S = {
        isActive: x,
        isPending: j,
        isTransitioning: k
    }, E = x ? t : void 0, C;
    typeof r == "function" ? C = r(S) : C = [r, x ? "active" : null, j ? "pending" : null, k ? "transitioning" : null].filter(Boolean).join(" ");
    let O = typeof i == "function" ? i(S) : i;
    return w.createElement(Ge, {
        ...c,
        "aria-current": E,
        className: C,
        ref: d,
        style: O,
        to: o,
        viewTransition: l
    }, typeof u == "function" ? u(S) : u)
});
w0.displayName = "NavLink";
var b0 = w.forwardRef( ({discover: e="render", fetcherKey: t, navigate: n, reloadDocument: r, replace: s, state: i, method: o=Gs, action: l, onSubmit: u, relative: c, preventScrollReset: d, viewTransition: h, ...f}, y) => {
    let v = N0()
      , b = E0(l, {
        relative: c
    })
      , k = o.toLowerCase() === "get" ? "get" : "post"
      , g = typeof l == "string" && Zh.test(l)
      , m = p => {
        if (u && u(p),
        p.defaultPrevented)
            return;
        p.preventDefault();
        let _ = p.nativeEvent.submitter
          , x = (_ == null ? void 0 : _.getAttribute("formmethod")) || o;
        v(_ || p.currentTarget, {
            fetcherKey: t,
            method: x,
            navigate: n,
            replace: s,
            state: i,
            relative: c,
            preventScrollReset: d,
            viewTransition: h
        })
    }
    ;
    return w.createElement("form", {
        ref: y,
        method: k,
        action: b,
        onSubmit: r ? u : m,
        ...f,
        "data-discover": !g && e === "render" ? "true" : void 0
    })
}
);
b0.displayName = "Form";
function _0(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function ef(e) {
    let t = w.useContext(rr);
    return K(t, _0(e)),
    t
}
function k0(e, {target: t, replace: n, state: r, preventScrollReset: s, relative: i, viewTransition: o}={}) {
    let l = gn()
      , u = Vt()
      , c = ls(e, {
        relative: i
    });
    return w.useCallback(d => {
        if (t0(d, t)) {
            d.preventDefault();
            let h = n !== void 0 ? n : Zr(u) === Zr(c);
            l(e, {
                replace: h,
                state: r,
                preventScrollReset: s,
                relative: i,
                viewTransition: o
            })
        }
    }
    , [u, l, c, n, r, t, e, s, i, o])
}
var j0 = 0
  , S0 = () => `__${String(++j0)}__`;
function N0() {
    let {router: e} = ef("useSubmit")
      , {basename: t} = w.useContext(Ze)
      , n = Hg();
    return w.useCallback(async (r, s={}) => {
        let {action: i, method: o, encType: l, formData: u, body: c} = s0(r, t);
        if (s.navigate === !1) {
            let d = s.fetcherKey || S0();
            await e.fetch(d, n, s.action || i, {
                preventScrollReset: s.preventScrollReset,
                formData: u,
                body: c,
                formMethod: s.method || o,
                formEncType: s.encType || l,
                flushSync: s.flushSync
            })
        } else
            await e.navigate(s.action || i, {
                preventScrollReset: s.preventScrollReset,
                formData: u,
                body: c,
                formMethod: s.method || o,
                formEncType: s.encType || l,
                replace: s.replace,
                state: s.state,
                fromRouteId: n,
                flushSync: s.flushSync,
                viewTransition: s.viewTransition
            })
    }
    , [e, t, n])
}
function E0(e, {relative: t}={}) {
    let {basename: n} = w.useContext(Ze)
      , r = w.useContext(at);
    K(r, "useFormAction must be used inside a RouteContext");
    let[s] = r.matches.slice(-1)
      , i = {
        ...ls(e || ".", {
            relative: t
        })
    }
      , o = Vt();
    if (e == null) {
        i.search = o.search;
        let l = new URLSearchParams(i.search)
          , u = l.getAll("index");
        if (u.some(d => d === "")) {
            l.delete("index"),
            u.filter(h => h).forEach(h => l.append("index", h));
            let d = l.toString();
            i.search = d ? `?${d}` : ""
        }
    }
    return (!e || e === ".") && s.route.index && (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (i.pathname = i.pathname === "/" ? n : mt([n, i.pathname])),
    Zr(i)
}
function C0(e, {relative: t}={}) {
    let n = w.useContext(Vh);
    K(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: r} = ef("useViewTransitionState")
      , s = ls(e, {
        relative: t
    });
    if (!n.isTransitioning)
        return !1;
    let i = wt(n.currentLocation.pathname, r) || n.currentLocation.pathname
      , o = wt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return wi(s.pathname, o) != null || wi(s.pathname, i) != null
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var P0 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T0 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , ee = (e, t) => {
    const n = w.forwardRef( ({color: r="currentColor", size: s=24, strokeWidth: i=2, absoluteStrokeWidth: o, className: l="", children: u, ...c}, d) => w.createElement("svg", {
        ref: d,
        ...P0,
        width: s,
        height: s,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(s) : i,
        className: ["lucide", `lucide-${T0(e)}`, l].join(" "),
        ...c
    }, [...t.map( ([h,f]) => w.createElement(h, f)), ...Array.isArray(u) ? u : [u]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O0 = ee("Award", [["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}], ["path", {
    d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
    key: "em7aur"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R0 = ee("CheckCircle2", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I0 = ee("CheckCircle", [["path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
    key: "g774vq"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tf = ee("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jn = ee("Eye", [["path", {
    d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
    key: "rwhkz3"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nf = ee("Globe", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $0 = ee("Home", [["path", {
    d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "y5dka4"
}], ["polyline", {
    points: "9 22 9 12 15 12 15 22",
    key: "e2us08"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A0 = ee("Image", [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2",
    key: "1m3agn"
}], ["circle", {
    cx: "9",
    cy: "9",
    r: "2",
    key: "af1f0g"
}], ["path", {
    d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
    key: "1xmnt7"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = ee("Loader2", [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L0 = ee("LogIn", [["path", {
    d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
    key: "u53s6r"
}], ["polyline", {
    points: "10 17 15 12 10 7",
    key: "1ail0h"
}], ["line", {
    x1: "15",
    x2: "3",
    y1: "12",
    y2: "12",
    key: "v6grx8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U0 = ee("LogOut", [["path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
    key: "1uf3rs"
}], ["polyline", {
    points: "16 17 21 12 16 7",
    key: "1gabdz"
}], ["line", {
    x1: "21",
    x2: "9",
    y1: "12",
    y2: "12",
    key: "1uyos4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rf = ee("MessageCircle", [["path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
    key: "vv11sd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sf = ee("MoreHorizontal", [["circle", {
    cx: "12",
    cy: "12",
    r: "1",
    key: "41hilf"
}], ["circle", {
    cx: "19",
    cy: "12",
    r: "1",
    key: "1wjl8i"
}], ["circle", {
    cx: "5",
    cy: "12",
    r: "1",
    key: "1pcz8c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const of = ee("Share2", [["circle", {
    cx: "18",
    cy: "5",
    r: "3",
    key: "gq8acd"
}], ["circle", {
    cx: "6",
    cy: "12",
    r: "3",
    key: "w7nqdw"
}], ["circle", {
    cx: "18",
    cy: "19",
    r: "3",
    key: "1xt0gg"
}], ["line", {
    x1: "8.59",
    x2: "15.42",
    y1: "13.51",
    y2: "17.49",
    key: "47mynk"
}], ["line", {
    x1: "15.41",
    x2: "8.59",
    y1: "6.51",
    y2: "10.49",
    key: "1n3mei"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = ee("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D0 = ee("ThumbsDown", [["path", {
    d: "M17 14V2",
    key: "8ymqnk"
}], ["path", {
    d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",
    key: "s6e0r"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ca = ee("ThumbsUp", [["path", {
    d: "M7 10v12",
    key: "1qc93n"
}], ["path", {
    d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
    key: "y3tblf"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = ee("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pa = ee("Upload", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "17 8 12 3 7 8",
    key: "t8dd8p"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "3",
    y2: "15",
    key: "widbto"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M0 = ee("UserPlus", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["line", {
    x1: "19",
    x2: "19",
    y1: "8",
    y2: "14",
    key: "1bvyxn"
}], ["line", {
    x1: "22",
    x2: "16",
    y1: "11",
    y2: "11",
    key: "1shjgl"
}]]);
function z0() {
    return a.jsxs("div", {
        className: "min-h-screen bg-white",
        children: [a.jsx("header", {
            className: "bg-white border-b border-gray-200 sticky top-0 z-50",
            children: a.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",
                children: [a.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [a.jsx("div", {
                        className: "w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center",
                        children: a.jsx(jn, {
                            className: "w-6 h-6 text-white"
                        })
                    }), a.jsx("span", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Plate Signal"
                    })]
                }), a.jsxs("nav", {
                    className: "hidden md:flex items-center gap-8",
                    children: [a.jsx("a", {
                        href: "#how-it-works",
                        className: "text-gray-600 hover:text-gray-900 transition-colors",
                        children: "How It Works"
                    }), a.jsx("a", {
                        href: "#features",
                        className: "text-gray-600 hover:text-gray-900 transition-colors",
                        children: "Features"
                    }), a.jsx("a", {
                        href: "#pricing",
                        className: "text-gray-600 hover:text-gray-900 transition-colors",
                        children: "Pricing"
                    }), a.jsx(Ge, {
                        to: "/login",
                        className: "text-gray-600 hover:text-gray-900 transition-colors",
                        children: "Login"
                    })]
                }), a.jsx(Ge, {
                    to: "/signup",
                    children: a.jsx("button", {
                        className: "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors",
                        children: "Get Access"
                    })
                })]
            })
        }), a.jsx("section", {
            className: "bg-gradient-to-b from-blue-50 to-white py-20 px-6",
            children: a.jsxs("div", {
                className: "max-w-6xl mx-auto",
                children: [a.jsxs("div", {
                    className: "text-center max-w-4xl mx-auto mb-12",
                    children: [a.jsx("h1", {
                        className: "text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight",
                        children: "Understand What Your Plate Signals to Your Body"
                    }), a.jsx("p", {
                        className: "text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed",
                        children: "Upload a photo of your meal and get simple visual signals about energy, balance, and satiety — in seconds."
                    }), a.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                        children: [a.jsx(Ge, {
                            to: "/signup",
                            children: a.jsx("button", {
                                className: "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl",
                                children: "Get Instant Access for $37"
                            })
                        }), a.jsx("a", {
                            href: "#demo",
                            children: a.jsx("button", {
                                className: "bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-lg text-lg border-2 border-gray-300 transition-all",
                                children: "View Demo"
                            })
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-2xl mx-auto",
                    children: [a.jsx("div", {
                        className: "bg-gray-100 rounded-lg aspect-video flex items-center justify-center mb-4",
                        children: a.jsxs("div", {
                            className: "text-center",
                            children: [a.jsx("div", {
                                className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3",
                                children: a.jsx(jn, {
                                    className: "w-8 h-8 text-blue-600"
                                })
                            }), a.jsx("p", {
                                className: "text-gray-600 font-medium",
                                children: "Upload your meal photo"
                            })]
                        })
                    }), a.jsxs("div", {
                        className: "bg-blue-50 border-2 border-blue-200 rounded-lg p-6",
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-3 mb-3",
                            children: [a.jsx("div", {
                                className: "w-3 h-3 bg-blue-600 rounded-full"
                            }), a.jsx("span", {
                                className: "font-bold text-gray-900 text-lg",
                                children: "Balanced Signal"
                            })]
                        }), a.jsx("p", {
                            className: "text-gray-700 leading-relaxed",
                            children: "This meal shows a mix of protein, carbohydrates, and fiber. It may support steady energy and moderate satiety for 3-4 hours."
                        })]
                    })]
                }), a.jsx("p", {
                    className: "text-center text-sm text-gray-500 mt-8 max-w-2xl mx-auto",
                    children: "Plate Signal provides visual, educational insights only. It does not offer medical advice."
                })]
            })
        }), a.jsx("section", {
            id: "how-it-works",
            className: "py-20 px-6 bg-white",
            children: a.jsxs("div", {
                className: "max-w-6xl mx-auto",
                children: [a.jsxs("div", {
                    className: "text-center mb-16",
                    children: [a.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                        children: "How It Works"
                    }), a.jsx("p", {
                        className: "text-xl text-gray-600",
                        children: "Three simple steps to meal awareness"
                    })]
                }), a.jsxs("div", {
                    className: "grid md:grid-cols-3 gap-12",
                    children: [a.jsxs("div", {
                        className: "text-center",
                        children: [a.jsx("div", {
                            className: "w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6",
                            children: a.jsx(Pa, {
                                className: "w-10 h-10 text-blue-600"
                            })
                        }), a.jsx("div", {
                            className: "mb-4",
                            children: a.jsx("span", {
                                className: "inline-block bg-blue-600 text-white font-bold text-sm px-3 py-1 rounded-full",
                                children: "STEP 1"
                            })
                        }), a.jsx("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "Upload a Photo of Your Meal"
                        }), a.jsx("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: "Take a picture or upload from your gallery. No manual entry required."
                        })]
                    }), a.jsxs("div", {
                        className: "text-center",
                        children: [a.jsx("div", {
                            className: "w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6",
                            children: a.jsx(jn, {
                                className: "w-10 h-10 text-blue-600"
                            })
                        }), a.jsx("div", {
                            className: "mb-4",
                            children: a.jsx("span", {
                                className: "inline-block bg-blue-600 text-white font-bold text-sm px-3 py-1 rounded-full",
                                children: "STEP 2"
                            })
                        }), a.jsx("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "Get Your Plate Signal"
                        }), a.jsx("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: "Instantly see the primary and secondary signals detected from your meal."
                        })]
                    }), a.jsxs("div", {
                        className: "text-center",
                        children: [a.jsx("div", {
                            className: "w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6",
                            children: a.jsx(So, {
                                className: "w-10 h-10 text-blue-600"
                            })
                        }), a.jsx("div", {
                            className: "mb-4",
                            children: a.jsx("span", {
                                className: "inline-block bg-blue-600 text-white font-bold text-sm px-3 py-1 rounded-full",
                                children: "STEP 3"
                            })
                        }), a.jsx("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "Build Awareness Over Time"
                        }), a.jsx("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: "View patterns and signals in your personal dashboard."
                        })]
                    })]
                })]
            })
        }), a.jsx("section", {
            id: "features",
            className: "py-20 px-6 bg-gray-50",
            children: a.jsxs("div", {
                className: "max-w-6xl mx-auto",
                children: [a.jsxs("div", {
                    className: "text-center mb-16",
                    children: [a.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                        children: "Features"
                    }), a.jsx("p", {
                        className: "text-xl text-gray-600",
                        children: "Everything you need for meal awareness"
                    })]
                }), a.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-8",
                    children: [a.jsxs("div", {
                        className: "bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow",
                        children: [a.jsx("div", {
                            className: "w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6",
                            children: a.jsx(jn, {
                                className: "w-7 h-7 text-blue-600"
                            })
                        }), a.jsx("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "Signal-Based Analysis"
                        }), a.jsx("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: "Get clear, educational signals about how your meal may affect energy, satiety, and overall balance."
                        })]
                    }), a.jsxs("div", {
                        className: "bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow",
                        children: [a.jsx("div", {
                            className: "w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6",
                            children: a.jsx(tf, {
                                className: "w-7 h-7 text-blue-600"
                            })
                        }), a.jsx("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "No Manual Tracking"
                        }), a.jsx("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: "Simply upload a photo. No tedious calorie counting or food logging required."
                        })]
                    }), a.jsxs("div", {
                        className: "bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow",
                        children: [a.jsx("div", {
                            className: "w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6",
                            children: a.jsx(So, {
                                className: "w-7 h-7 text-blue-600"
                            })
                        }), a.jsx("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "Personal Signal Dashboard"
                        }), a.jsx("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: "Track your meal history and see patterns emerge over time with your private dashboard."
                        })]
                    }), a.jsxs("div", {
                        className: "bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow",
                        children: [a.jsx("div", {
                            className: "w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6",
                            children: a.jsx(lc, {
                                className: "w-7 h-7 text-blue-600"
                            })
                        }), a.jsx("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "Private & Secure Accounts"
                        }), a.jsx("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: "Your meal data stays private. Secure authentication and encrypted storage."
                        })]
                    })]
                })]
            })
        }), a.jsx("section", {
            id: "pricing",
            className: "py-20 px-6 bg-white",
            children: a.jsxs("div", {
                className: "max-w-6xl mx-auto",
                children: [a.jsxs("div", {
                    className: "text-center mb-16",
                    children: [a.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                        children: "Simple Pricing"
                    }), a.jsx("p", {
                        className: "text-xl text-gray-600",
                        children: "One-time payment, lifetime access"
                    })]
                }), a.jsx("div", {
                    className: "max-w-lg mx-auto",
                    children: a.jsxs("div", {
                        className: "bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-600 p-10 shadow-xl",
                        children: [a.jsxs("div", {
                            className: "text-center mb-8",
                            children: [a.jsx("h3", {
                                className: "text-3xl font-bold text-gray-900 mb-2",
                                children: "Plate Signal"
                            }), a.jsxs("div", {
                                className: "flex items-baseline justify-center gap-2",
                                children: [a.jsx("span", {
                                    className: "text-5xl font-bold text-blue-600",
                                    children: "$37"
                                }), a.jsx("span", {
                                    className: "text-gray-600",
                                    children: "one-time"
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: "space-y-4 mb-8",
                            children: [a.jsxs("div", {
                                className: "flex items-start gap-3",
                                children: [a.jsx(O0, {
                                    className: "w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                                }), a.jsx("span", {
                                    className: "text-gray-700",
                                    children: "Lifetime access"
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-start gap-3",
                                children: [a.jsx(Pa, {
                                    className: "w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                                }), a.jsx("span", {
                                    className: "text-gray-700",
                                    children: "Unlimited meal uploads"
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-start gap-3",
                                children: [a.jsx(jn, {
                                    className: "w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                                }), a.jsx("span", {
                                    className: "text-gray-700",
                                    children: "Signal analysis"
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-start gap-3",
                                children: [a.jsx(So, {
                                    className: "w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                                }), a.jsx("span", {
                                    className: "text-gray-700",
                                    children: "Personal dashboard"
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-start gap-3",
                                children: [a.jsx(lc, {
                                    className: "w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                                }), a.jsx("span", {
                                    className: "text-gray-700",
                                    children: "Private & secure"
                                })]
                            })]
                        }), a.jsx(Ge, {
                            to: "/signup",
                            className: "block",
                            children: a.jsx("button", {
                                className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl",
                                children: "Get Instant Access for $37"
                            })
                        })]
                    })
                })]
            })
        }), a.jsx("footer", {
            className: "bg-gray-900 text-gray-400 py-12 px-6",
            children: a.jsxs("div", {
                className: "max-w-6xl mx-auto",
                children: [a.jsx("div", {
                    className: "text-center mb-6",
                    children: a.jsx("p", {
                        className: "text-sm leading-relaxed max-w-3xl mx-auto",
                        children: "Plate Signal is an educational awareness tool. It does not provide medical advice, diagnosis, or treatment."
                    })
                }), a.jsx("div", {
                    className: "text-center text-sm",
                    children: a.jsx("p", {
                        children: "© 2026 Plate Signal. All rights reserved."
                    })
                })]
            })
        })]
    })
}
const Rr = "user_url_params";
function af() {
    if (localStorage.getItem(Rr))
        return;
    const t = new URLSearchParams(window.location.search)
      , n = {};
    let r = !1;
    t.forEach( (s, i) => {
        n[i] = s,
        r = !0
    }
    ),
    r ? localStorage.setItem(Rr, JSON.stringify(n)) : localStorage.setItem(Rr, JSON.stringify({}))
}
function Bl() {
    const e = localStorage.getItem(Rr);
    if (!e) {
        af();
        const t = localStorage.getItem(Rr);
        return t ? JSON.parse(t) : {}
    }
    try {
        return JSON.parse(e)
    } catch {
        return {}
    }
}
function lf(e) {
    const t = Bl();
    if (Object.keys(t).length === 0)
        return e;
    const n = new URL(e,window.location.origin);
    return Object.entries(t).forEach( ([r,s]) => {
        n.searchParams.has(r) || n.searchParams.append(r, s)
    }
    ),
    e.startsWith("http://") || e.startsWith("https://") ? n.toString() : n.pathname + n.search + n.hash
}
function lfExternal(e) {
    const t = Bl();
    if (Object.keys(t).length === 0)
        return e;
    try {
        const n = new URL(e);
        return Object.entries(t).forEach( ([r,s]) => {
            n.searchParams.has(r) || n.searchParams.append(r, s)
        }
        ),
        n.toString()
    } catch {
        return e
    }
}
function F0() {
    af(),
    new MutationObserver( () => {
        uc()
    }
    ).observe(document.body, {
        childList: !0,
        subtree: !0
    }),
    uc(),
    document.addEventListener("click", B0, !0)
}
function uc() {
    const e = Bl();
    if (Object.keys(e).length === 0)
        return;
    document.querySelectorAll("a[href]").forEach(n => {
        const r = n.getAttribute("href");
        if (!r || r.startsWith("#") || r.startsWith("mailto:") || r.startsWith("tel:"))
            return;
        if (r.startsWith("http://") || r.startsWith("https://"))
            try {
                const i = new URL(r)
                  , o = window.location.host;
                if (i.host !== o)
                    return
            } catch {
                return
            }
        const s = lf(r);
        r !== s && n.setAttribute("href", s)
    }
    )
}
function B0(e) {
    const n = e.target.closest("a");
    if (!n)
        return;
    const r = n.getAttribute("href");
    if (!r || r.startsWith("#") || r.startsWith("mailto:") || r.startsWith("tel:"))
        return;
    if (r.startsWith("http://") || r.startsWith("https://"))
        try {
            const i = new URL(r)
              , o = window.location.host;
            if (i.host !== o)
                return
        } catch {
            return
        }
    const s = lf(r);
    r !== s && n.setAttribute("href", s)
}
function W0() {
    const t = Bl().utm_campaign;
    return t !== void 0 && t.trim() !== ""
}
function Kt({originalContent: e, whitePageContent: t}) {
    return W0() ? a.jsx(a.Fragment, {
        children: e
    }) : a.jsx(a.Fragment, {
        children: t
    })
}
function Fi() {
    const e = gn();
    return a.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4",
        children: a.jsxs("div", {
            className: "bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center",
            children: [a.jsxs("div", {
                className: "mb-6",
                children: [a.jsx("div", {
                    className: "text-8xl font-bold text-gray-300 mb-2",
                    children: "404"
                }), a.jsx("h1", {
                    className: "text-2xl font-bold text-gray-900 mb-2",
                    children: "Page Not Found"
                }), a.jsx("p", {
                    className: "text-gray-600",
                    children: "The page you're looking for doesn't exist or you don't have access to it."
                })]
            }), a.jsxs("button", {
                onClick: () => e("/"),
                className: "w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full text-lg transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2",
                children: [a.jsx($0, {
                    className: "w-5 h-5"
                }), "Go to Home"]
            })]
        })
    })
}
const H0 = [{
    username: "Amazon.com",
    verified: !0,
    profileImg: "/amazon_logo.png",
    postImg: "/amazon_post.png",
    caption: "Black Friday Week starts 11/20, but there are plenty of early deals now to kick off the holiday season 🎁 Shop savings now: https://amazon.visitlink.me/IBekah #AmazonFinds",
    date: "August 25th",
    likes: "36,8 mil",
    comments: "735",
    shares: "1.401",
    profileBg: "bg-white",
    profilePadding: "p-0",
    question: "Is this photo relevant to you?",
    isSponsored: !0
}, {
    username: "Apple",
    verified: !0,
    profileImg: "/apple_logo copy.png",
    postImg: "/apple_post.png",
    caption: "Took the hit and kept going. #ShotOnAppleWatch by @carlosalcaraz",
    date: "September 12th",
    likes: "4,736",
    comments: "232",
    shares: "54",
    profileBg: "bg-white",
    profilePadding: "p-0",
    question: "Would you watch this content?",
    isSponsored: !0
}, {
    username: "Starbucks",
    verified: !0,
    profileImg: "/starbucks_logo.png",
    postImg: "/starbucks_post.png",
    caption: "Say hello, to the newest Nitro 😍 Introducing the new Cinnamon Caramel Cream Nitro Cold Brew.",
    date: "September 8",
    likes: "12.5 mil",
    comments: "432",
    shares: "127",
    profileBg: "bg-white",
    profilePadding: "p-0",
    question: "Do you find this interesting?",
    isSponsored: !0
}];
function V0() {
    const e = gn()
      , [t,n] = w.useState(!1)
      , [r,s] = w.useState(!1)
      , [i,o] = w.useState(!1)
      , [l,u] = w.useState(32.27)
      , [c,d] = w.useState(32.27)
      , [h,f] = w.useState(0)
      , [y,v] = w.useState(0)
      , b = y === 0 ? 79.87 : y === 1 ? 81.43 : 84.43
      , k = x => {
        const j = /(https?:\/\/[^\s]+)/g
          , S = /(#[a-zA-Z0-9_]+)/g
          , E = /(@[a-zA-Z0-9_]+)/g
          , C = /(https?:\/\/[^\s]+|#[a-zA-Z0-9_]+|@[a-zA-Z0-9_]+)/g;
        return x.split(C).map( (R, le) => j.test(R) || S.test(R) || E.test(R) ? a.jsx("span", {
            style: {
                color: "#0164d1",
                fontWeight: "bold"
            },
            children: R
        }, le) : R)
    }
    ;
    const g = () => {
        n(!0)
    }
      , m = x => {
        console.log("Answer:", x),
        s(!0),
        f(0),
        new Audio("/Cash.MP3").play().catch(H => console.log("Audio play failed:", H));
        const S = l
          , E = l + b
          , C = 1200
          , O = 80;
        let R = 0;
        const le = setInterval( () => {
            R++;
            const H = R / O
              , et = 1 - (1 - H) * (1 - H)
              , Gt = S + b * et
              , ar = b * et;
            d(Gt),
            f(ar),
            R >= O && (clearInterval(le),
            d(E),
            u(E),
            f(b))
        }
        , C / O)
    }
      , p = () => {
        s(!1),
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        }),
        y === 0 ? v(1) : y === 1 ? v(2) : (n(!1),
        o(!0))
    }
      , _ = () => {
        e("/video")
    }
    ;
    if (t) {
        const x = H0[y];
        return a.jsx("div", {
            className: "min-h-screen bg-gray-50 pt-16",
            children: a.jsxs("div", {
                className: "max-w-md mx-auto bg-gray-50",
                children: [a.jsxs("div", {
                    className: "fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 max-w-md mx-auto",
                    children: [a.jsx("div", {
                        className: "flex items-center gap-2",
                        children: a.jsx("img", {
                            src: "/facebook_logo.png",
                            alt: "Facebook",
                            className: "h-6",
                            loading: "eager"
                        })
                    }), a.jsxs("div", {
                        className: "bg-green-500 text-white px-4 py-2 rounded-full font-bold text-base flex items-center gap-2",
                        children: [a.jsxs("svg", {
                            className: "w-5 h-5",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            children: [a.jsx("rect", {
                                x: "2",
                                y: "5",
                                width: "20",
                                height: "14",
                                rx: "2"
                            }), a.jsx("line", {
                                x1: "2",
                                y1: "10",
                                x2: "22",
                                y2: "10"
                            })]
                        }), "$ ", c.toFixed(2)]
                    })]
                }), a.jsxs("div", {
                    className: "mx-3 my-4 bg-white rounded-xl shadow-md overflow-hidden",
                    children: [a.jsxs("div", {
                        className: "flex items-start gap-3 px-4 py-3",
                        children: [a.jsx("div", {
                            className: `w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-500 ${x.profileBg} flex items-center justify-center`,
                            children: a.jsx("img", {
                                src: x.profileImg,
                                alt: x.username,
                                className: `w-[90%] h-[90%] object-contain rounded-full ${x.profilePadding}`,
                                loading: "eager"
                            })
                        }), a.jsxs("div", {
                            className: "flex-1",
                            children: [a.jsxs("div", {
                                className: "flex items-center gap-1",
                                children: [a.jsx("span", {
                                    className: "font-semibold text-[15px]",
                                    children: x.username
                                }), x.verified && a.jsx("img", {
                                    src: "/Twitter_Verified_Badge.svg copy.png",
                                    alt: "Verified",
                                    className: "w-4 h-4",
                                    loading: "eager"
                                })]
                            }), x.isSponsored && a.jsxs("div", {
                                className: "flex items-center gap-1 text-gray-500 text-[13px]",
                                children: [a.jsx("span", {
                                    children: "Sponsored"
                                }), a.jsx("span", {
                                    children: "·"
                                }), a.jsx(nf, {
                                    className: "w-3 h-3"
                                })]
                            })]
                        }), a.jsx("button", {
                            children: a.jsx(sf, {
                                className: "w-6 h-6 text-gray-600"
                            })
                        })]
                    }), a.jsx("div", {
                        className: "px-4 pb-3",
                        children: a.jsx("p", {
                            className: "text-[14px] text-gray-900 leading-snug whitespace-pre-wrap",
                            children: k(x.caption)
                        })
                    }), a.jsx("div", {
                        className: "bg-gray-100",
                        children: a.jsx("img", {
                            src: x.postImg,
                            alt: `${x.username} post`,
                            className: "w-full h-auto object-cover",
                            loading: "eager",
                            decoding: "sync"
                        })
                    }), a.jsxs("div", {
                        className: "px-4 py-2",
                        children: [a.jsxs("div", {
                            className: "flex items-center justify-between text-[13px] text-gray-600 py-2",
                            children: [a.jsxs("div", {
                                className: "flex items-center gap-1",
                                children: [a.jsxs("div", {
                                    className: "flex -space-x-1",
                                    children: [a.jsx("div", {
                                        className: "w-[18px] h-[18px] bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px] border border-white",
                                        children: "👍"
                                    }), a.jsx("div", {
                                        className: "w-[18px] h-[18px] bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] border border-white",
                                        children: "❤️"
                                    }), a.jsx("div", {
                                        className: "w-[18px] h-[18px] bg-yellow-400 rounded-full flex items-center justify-center text-white text-[10px] border border-white",
                                        children: "😮"
                                    })]
                                }), a.jsx("span", {
                                    className: "ml-1",
                                    children: x.likes
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [a.jsxs("span", {
                                    children: [x.comments, " comments"]
                                }), a.jsxs("span", {
                                    children: [x.shares, " shares"]
                                })]
                            })]
                        }), a.jsx("div", {
                            className: "border-t border-gray-200 pt-1",
                            children: a.jsxs("div", {
                                className: "flex items-center justify-around py-1",
                                children: [a.jsxs("button", {
                                    className: "flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors flex-1 justify-center",
                                    children: [a.jsx(Ca, {
                                        className: "w-5 h-5 text-gray-600",
                                        strokeWidth: 1.8
                                    }), a.jsx("span", {
                                        className: "text-[15px] font-semibold text-gray-600",
                                        children: "Like"
                                    })]
                                }), a.jsxs("button", {
                                    className: "flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors flex-1 justify-center",
                                    children: [a.jsx(rf, {
                                        className: "w-5 h-5 text-gray-600",
                                        strokeWidth: 1.8
                                    }), a.jsx("span", {
                                        className: "text-[15px] font-semibold text-gray-600",
                                        children: "Comment"
                                    })]
                                }), a.jsxs("button", {
                                    className: "flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors flex-1 justify-center",
                                    children: [a.jsx(of, {
                                        className: "w-5 h-5 text-gray-600",
                                        strokeWidth: 1.8
                                    }), a.jsx("span", {
                                        className: "text-[15px] font-semibold text-gray-600",
                                        children: "Share"
                                    })]
                                })]
                            })
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "px-6 py-6",
                    children: [a.jsx("p", {
                        className: "text-center text-gray-500 text-sm mb-3 font-medium",
                        children: "Answer the question:"
                    }), a.jsx("h2", {
                        className: "text-center text-xl font-bold text-gray-900 mb-6",
                        children: x.question
                    }), a.jsxs("div", {
                        className: "flex gap-3",
                        children: [a.jsxs("button", {
                            onClick: () => m("not-relevant"),
                            className: "flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-full text-base transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap",
                            children: [a.jsx(D0, {
                                className: "w-6 h-6",
                                fill: "currentColor",
                                strokeWidth: 0
                            }), "Not relevant"]
                        }), a.jsxs("button", {
                            onClick: () => m("relevant"),
                            className: "flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full text-base transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap",
                            children: [a.jsx(Ca, {
                                className: "w-6 h-6",
                                fill: "currentColor",
                                strokeWidth: 0
                            }), "Relevant"]
                        })]
                    })]
                }), r && a.jsx("div", {
                    className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in",
                    children: a.jsxs("div", {
                        className: "bg-green-500 rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center transform animate-scale-in",
                        children: [a.jsx("div", {
                            className: "flex justify-center mb-6",
                            children: a.jsx("div", {
                                className: "w-20 h-20 bg-white rounded-full flex items-center justify-center animate-bounce-in",
                                children: a.jsx("svg", {
                                    className: "w-12 h-12 text-green-500",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "3",
                                    children: a.jsx("path", {
                                        d: "M20 6L9 17l-5-5"
                                    })
                                })
                            })
                        }), a.jsx("h2", {
                            className: "text-2xl font-bold text-white mb-3",
                            children: "You Earned Money!"
                        }), a.jsx("p", {
                            className: "text-white text-sm mb-6 opacity-90",
                            children: "Your feedback was submitted successfully"
                        }), a.jsxs("div", {
                            className: "text-5xl font-bold text-white mb-8 animate-pulse",
                            children: ["$", h.toFixed(2)]
                        }), a.jsx("button", {
                            onClick: p,
                            className: "w-full bg-white text-green-600 font-bold py-4 px-6 rounded-full text-lg transition-all hover:scale-105 shadow-lg",
                            children: "Continue"
                        })]
                    })
                })]
            })
        })
    }
    if (i) {
        const x = 278 .toFixed(2);
        return a.jsx("div", {
            className: "min-h-screen bg-gray-100 flex items-center justify-center p-4",
            children: a.jsxs("div", {
                className: "bg-white rounded-2xl shadow-lg max-w-md w-full p-8 text-center",
                children: [a.jsx("h1", {
                    className: "text-2xl font-bold text-gray-900 mb-4",
                    children: "🎁 Congratulations! 🎁"
                }), a.jsx("p", {
                    className: "text-gray-600 mb-6",
                    children: "Your total earnings from completing 3 surveys:"
                }), a.jsxs("div", {
                    className: "text-5xl font-bold text-green-600 mb-6",
                    children: ["$", x]
                }), a.jsx("p", {
                    className: "text-gray-600 text-sm mb-4",
                    children: "To register your bank account and withdraw funds, watch a 4-minute video."
                }), a.jsx("div", {
                    className: "w-full bg-gray-200 rounded-full h-2 mb-6",
                    children: a.jsx("div", {
                        className: "bg-green-500 h-2 rounded-full",
                        style: {
                            width: "100%"
                        }
                    })
                }), a.jsx("p", {
                    className: "text-gray-600 text-sm mb-6",
                    children: "Click the button below for the immediate withdrawal guide!"
                }), a.jsxs("button", {
                    onClick: _,
                    className: "w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full text-base transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2",
                    children: ["Watch 4-Minute Tutorial Video", a.jsx("span", {
                        className: "text-2xl",
                        children: "👆"
                    })]
                })]
            })
        })
    }
    return a.jsx("div", {
        className: "min-h-screen bg-gray-100 flex items-center justify-center p-4",
        children: a.jsxs("div", {
            className: "bg-white rounded-2xl shadow-lg max-w-md w-full p-8 text-center",
            children: [a.jsx("h1", {
                className: "text-2xl font-bold text-gray-900 mb-4",
                children: "Welcome! 🎉"
            }), a.jsx("p", {
                className: "text-gray-600 mb-6",
                children: "You have been selected for Facebook's new rewards program. Enjoy!"
            }), a.jsx("div", {
                className: "bg-green-50 rounded-xl p-4 mb-6",
                children: a.jsxs("div", {
                    className: "flex items-center justify-center gap-2 text-green-700",
                    children: [a.jsx(I0, {
                        className: "w-5 h-5"
                    }), a.jsx("p", {
                        className: "font-semibold",
                        children: "You've already earned US$32.27!"
                    })]
                })
            }), a.jsx("p", {
                className: "text-gray-600 text-sm mb-6",
                children: "Complete all assessments and make your first withdrawal!"
            }), a.jsxs("button", {
                onClick: g,
                className: "w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full text-lg transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2",
                children: ["Click to Get Started", a.jsx("span", {
                    className: "text-2xl",
                    children: "👆"
                })]
            })]
        })
    })
}
function K0() {
    return a.jsx(V0, {})
}
function q0() {
    const e = gn();
    w.useEffect( () => {
        const x = document.createElement("script");
        x.src = "https://scripts.converteai.net/aa6389ba-4081-417c-a8aa-a863e8312161/players/69829bcdaf9a7a605d9c6c96/v4/player.js",
        x.async = !0,
        document.head.appendChild(x);
        const S = () => {
            e("/backr", {
                replace: !0
            })
        }
        ;
        return window.history.pushState(null, "", window.location.href),
        window.addEventListener("popstate", S),
        () => {
            x.parentNode && x.parentNode.removeChild(x),
            window.removeEventListener("popstate", S)
        }
    }
    , [e]);
    const [t] = w.useState(278)
      , [n,r] = w.useState("")
      , [s,i] = w.useState(null)
      , [o,l] = w.useState("")
      , [u,c] = w.useState(null)
      , d = () => ({
        c1: [{
            type: "love",
            count: 86
        }, {
            type: "like",
            count: 85
        }, {
            type: "wow",
            count: 47
        }],
        c2: [{
            type: "like",
            count: 114
        }, {
            type: "haha",
            count: 95
        }, {
            type: "love",
            count: 56
        }, {
            type: "wow",
            count: 34
        }],
        c3: [{
            type: "wow",
            count: 131
        }, {
            type: "love",
            count: 117
        }, {
            type: "like",
            count: 73
        }],
        c4: [{
            type: "love",
            count: 153
        }, {
            type: "like",
            count: 144
        }, {
            type: "haha",
            count: 89
        }, {
            type: "wow",
            count: 47
        }],
        c5: [{
            type: "like",
            count: 156
        }, {
            type: "love",
            count: 120
        }, {
            type: "wow",
            count: 78
        }],
        c6: [{
            type: "haha",
            count: 133
        }, {
            type: "like",
            count: 99
        }, {
            type: "love",
            count: 62
        }, {
            type: "wow",
            count: 44
        }],
        c7: [{
            type: "love",
            count: 123
        }, {
            type: "wow",
            count: 122
        }, {
            type: "like",
            count: 67
        }],
        c8: [{
            type: "like",
            count: 155
        }, {
            type: "wow",
            count: 138
        }, {
            type: "love",
            count: 95
        }, {
            type: "haha",
            count: 56
        }],
        c9: [{
            type: "love",
            count: 145
        }, {
            type: "like",
            count: 128
        }, {
            type: "wow",
            count: 73
        }],
        c10: [{
            type: "wow",
            count: 147
        }, {
            type: "like",
            count: 117
        }, {
            type: "love",
            count: 84
        }, {
            type: "haha",
            count: 49
        }],
        c11: [{
            type: "like",
            count: 134
        }, {
            type: "love",
            count: 125
        }, {
            type: "haha",
            count: 67
        }],
        c12: [{
            type: "love",
            count: 136
        }, {
            type: "like",
            count: 112
        }, {
            type: "wow",
            count: 78
        }, {
            type: "haha",
            count: 45
        }],
        c13: [{
            type: "wow",
            count: 139
        }, {
            type: "love",
            count: 131
        }, {
            type: "like",
            count: 73
        }],
        c14: [{
            type: "like",
            count: 158
        }, {
            type: "haha",
            count: 149
        }, {
            type: "love",
            count: 94
        }, {
            type: "wow",
            count: 62
        }],
        c15: [{
            type: "love",
            count: 128
        }, {
            type: "like",
            count: 126
        }, {
            type: "wow",
            count: 69
        }]
    })
      , [h,f] = w.useState( () => (localStorage.removeItem("videoCommentData"),
    {
        reactions: d(),
        replies: {},
        userReactions: {}
    }))
      , y = w.useRef()
      , [v,b] = w.useState([{
        id: "c1",
        username: "Sarah Johnson",
        text: "OMG!! Just withdrew $385! I can't believe this is real! 😱🎉",
        likes: 142,
        time: "2h",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c2",
        username: "Mike Rodriguez",
        text: "YESSS! Just received $520 in my account! This actually works! 🤑💰",
        likes: 238,
        time: "3h",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c3",
        username: "Emily Chen",
        text: "I'm shaking!! $425 just hit my bank account! Thank you so much!! 🙏💸",
        likes: 355,
        time: "4h",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c4",
        username: "James Miller",
        text: "NO WAY! $630 withdrawal successful! Best day ever! 🎊💵",
        likes: 431,
        time: "5h",
        avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c5",
        username: "Maria Santos",
        text: "Just got $395! I'm crying tears of joy right now! 😭❤️",
        likes: 312,
        time: "6h",
        avatar: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c6",
        username: "David Kim",
        text: "HOLY MOLY! $580 just arrived! This is insane! 🚀💰",
        likes: 289,
        time: "7h",
        avatar: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c7",
        username: "Jessica Brown",
        text: "I'm literally screaming! $445 in my account! THANK YOU! 🎉🙌",
        likes: 267,
        time: "8h",
        avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c8",
        username: "Carlos Garcia",
        text: "BRO!! Just cashed out $715! My hands are shaking! 💪🔥",
        likes: 398,
        time: "9h",
        avatar: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c9",
        username: "Amanda Wilson",
        text: "OMG OMG! $505 withdrawal complete! I can't stop smiling! 😊💕",
        likes: 276,
        time: "10h",
        avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c10",
        username: "Robert Taylor",
        text: "YOOO! $660 just dropped! This is absolutely crazy! 🎯💸",
        likes: 342,
        time: "11h",
        avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c11",
        username: "Lisa Anderson",
        text: "I'm in shock! $415 received! This changed my life! 🌟✨",
        likes: 294,
        time: "12h",
        avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c12",
        username: "Anthony Moore",
        text: "LETS GOOO! $595 confirmed! Best decision I ever made! 🏆💰",
        likes: 328,
        time: "13h",
        avatar: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c13",
        username: "Rachel Martinez",
        text: "NO FREAKING WAY! $485 just hit! I'm so grateful! 🙏💖",
        likes: 315,
        time: "14h",
        avatar: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c14",
        username: "Kevin Jackson",
        text: "DUDE!! $725 withdrawal successful! Mind blown! 🤯💵",
        likes: 387,
        time: "15h",
        avatar: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c15",
        username: "Natalie White",
        text: "I can't believe it! $455 in my bank! Dreams do come true! ✨🎊",
        likes: 301,
        time: "16h",
        avatar: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c16",
        username: "Brandon Harris",
        text: "HOLY COW! $640 received! This is legit amazing! 🔥💸",
        likes: 356,
        time: "17h",
        avatar: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c17",
        username: "Michelle Clark",
        text: "OMG! $525 withdrawal complete! I'm so happy I could dance! 💃❤️",
        likes: 283,
        time: "18h",
        avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c18",
        username: "Daniel Lewis",
        text: "WOW!! $685 just arrived! This is absolutely incredible! 🎉💰",
        likes: 374,
        time: "19h",
        avatar: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c19",
        username: "Stephanie Hall",
        text: "I'm crying happy tears! $495 received! Thank you universe! 😭✨",
        likes: 308,
        time: "20h",
        avatar: "https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c20",
        username: "Jason Allen",
        text: "LETS GOOOO! $755 confirmed! This is the best day ever! 🚀🔥",
        likes: 412,
        time: "21h",
        avatar: "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c21",
        username: "Christina Young",
        text: "OMG OMG OMG! $535 in my account! I'm shaking with joy! 🎊💕",
        likes: 296,
        time: "22h",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c22",
        username: "Michael King",
        text: "BRO THIS IS INSANE! $695 withdrawal successful! 💪💸",
        likes: 365,
        time: "23h",
        avatar: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c23",
        username: "Jennifer Wright",
        text: "I can't stop smiling! $465 received! This is a blessing! 🌟❤️",
        likes: 289,
        time: "1d",
        avatar: "https://images.pexels.com/photos/1542086/pexels-photo-1542086.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c24",
        username: "Christopher Lopez",
        text: "YESSIR! $715 just dropped! Living the dream right now! 🏆💰",
        likes: 391,
        time: "1d",
        avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c25",
        username: "Ashley Hill",
        text: "OMG! $545 withdrawal complete! I'm so grateful for this! 🙏💖",
        likes: 318,
        time: "1d",
        avatar: "https://images.pexels.com/photos/1812948/pexels-photo-1812948.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c26",
        username: "Matthew Scott",
        text: "LETS GO! $670 confirmed! This changed everything for me! 🔥💵",
        likes: 348,
        time: "1d",
        avatar: "https://images.pexels.com/photos/1516054/pexels-photo-1516054.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c27",
        username: "Nicole Green",
        text: "I'm speechless! $515 just hit my account! Best feeling ever! ✨🎉",
        likes: 305,
        time: "1d",
        avatar: "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c28",
        username: "Andrew Adams",
        text: "NO WAY BRO! $735 received! This is absolutely wild! 🚀💸",
        likes: 402,
        time: "1d",
        avatar: "https://images.pexels.com/photos/1516559/pexels-photo-1516559.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c29",
        username: "Samantha Baker",
        text: "OMG YES! $475 withdrawal successful! I'm over the moon! 🌙💕",
        likes: 292,
        time: "1d",
        avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c30",
        username: "Ryan Nelson",
        text: "DUDE!! $705 just arrived! This is the real deal! 💪🔥",
        likes: 378,
        time: "1d",
        avatar: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c31",
        username: "Lauren Carter",
        text: "I'm shaking with excitement! $555 received! Dreams coming true! 🎊❤️",
        likes: 325,
        time: "2d",
        avatar: "https://images.pexels.com/photos/1231230/pexels-photo-1231230.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c32",
        username: "Justin Mitchell",
        text: "HOLY SMOKES! $685 confirmed! This is absolutely legit! 🏆💰",
        likes: 361,
        time: "2d",
        avatar: "https://images.pexels.com/photos/1432039/pexels-photo-1432039.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c33",
        username: "Brittany Perez",
        text: "OMG I'm crying! $505 in my account! Thank you so much! 😭✨",
        likes: 297,
        time: "2d",
        avatar: "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c34",
        username: "Tyler Roberts",
        text: "LETS GOOO! $745 withdrawal complete! Best thing ever! 🔥💸",
        likes: 418,
        time: "2d",
        avatar: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c35",
        username: "Megan Turner",
        text: "I can't believe this! $525 just hit! I'm so happy right now! 🌟💕",
        likes: 312,
        time: "2d",
        avatar: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c36",
        username: "Jordan Phillips",
        text: "BRO!! $695 received! This is absolutely insane! 💪💵",
        likes: 385,
        time: "2d",
        avatar: "https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c37",
        username: "Taylor Campbell",
        text: "OMG OMG! $565 withdrawal successful! I'm so grateful! 🙏❤️",
        likes: 334,
        time: "2d",
        avatar: "https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c38",
        username: "Austin Parker",
        text: "YESSSS! $725 confirmed! Living my best life right now! 🚀💰",
        likes: 394,
        time: "2d",
        avatar: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c39",
        username: "Amber Evans",
        text: "I'm in tears of joy! $485 received! This is amazing! 😊✨",
        likes: 286,
        time: "2d",
        avatar: "https://images.pexels.com/photos/1379031/pexels-photo-1379031.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c40",
        username: "Zachary Edwards",
        text: "HOLY MOLY! $765 just dropped! This is unbelievable! 🔥💸",
        likes: 425,
        time: "2d",
        avatar: "https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c41",
        username: "Kayla Collins",
        text: "OMG! $545 in my account! I'm screaming with happiness! 🎉💖",
        likes: 321,
        time: "3d",
        avatar: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c42",
        username: "Nathan Stewart",
        text: "LETS GO!! $715 withdrawal complete! This changed my life! 🏆💵",
        likes: 372,
        time: "3d",
        avatar: "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }, {
        id: "c43",
        username: "Victoria Sanchez",
        text: "I can't stop crying happy tears! $495 received! Blessed! 😭❤️",
        likes: 298,
        time: "3d",
        avatar: "https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "female"
    }, {
        id: "c44",
        username: "Ethan Morris",
        text: "BRO THIS IS CRAZY! $785 confirmed! Best decision ever! 💪💰",
        likes: 441,
        time: "3d",
        avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200",
        gender: "male"
    }]);
    w.useEffect( () => {
        localStorage.setItem("videoCommentData", JSON.stringify(h))
    }
    , [h]);
    const k = {
        like: {
            emoji: "👍",
            color: "bg-blue-500"
        },
        love: {
            emoji: "❤️",
            color: "bg-red-500"
        },
        haha: {
            emoji: "😂",
            color: "bg-yellow-400"
        },
        wow: {
            emoji: "😮",
            color: "bg-yellow-400"
        },
        sad: {
            emoji: "😢",
            color: "bg-yellow-400"
        },
        angry: {
            emoji: "😡",
            color: "bg-orange-500"
        }
    }
      , g = (x, j) => {
        f(S => {
            const E = {
                ...S.userReactions
            }
              , C = {
                ...S.reactions
            }
              , O = E[x];
            if (O === j) {
                if (delete E[x],
                C[x]) {
                    const R = [...C[x]].map(H => ({
                        ...H
                    }))
                      , le = R.findIndex(H => H.type === j);
                    le !== -1 && (R[le].count > 1 ? R[le].count-- : R.splice(le, 1)),
                    R.length === 0 ? delete C[x] : C[x] = R
                }
            } else {
                if (O && C[x]) {
                    const H = [...C[x]].map(Gt => ({
                        ...Gt
                    }))
                      , et = H.findIndex(Gt => Gt.type === O);
                    et !== -1 && (H[et].count > 1 ? H[et].count-- : H.splice(et, 1)),
                    C[x] = H
                }
                E[x] = j;
                const R = C[x] ? [...C[x]].map(H => ({
                    ...H
                })) : []
                  , le = R.findIndex(H => H.type === j);
                le !== -1 ? R[le].count++ : R.push({
                    type: j,
                    count: 1
                }),
                C[x] = R
            }
            return {
                ...S,
                reactions: C,
                userReactions: E
            }
        }
        ),
        c(null)
    }
      , m = x => {
        if (o.trim()) {
            const j = {
                id: `r-${Date.now()}`,
                username: "You",
                text: o,
                time: "Just now",
                avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            };
            f(S => ({
                ...S,
                replies: {
                    ...S.replies,
                    [x]: [...S.replies[x] || [], j]
                }
            })),
            l(""),
            i(null)
        }
    }
      , p = () => {
        if (n.trim()) {
            const x = {
                id: `c-${Date.now()}`,
                username: "You",
                text: n,
                likes: 0,
                time: "Just now",
                avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            };
            b([x, ...v]),
            r("")
        }
    }
      , _ = x => {
        const j = h.reactions[x];
        if (!j || j.length === 0)
            return null;
        const S = j.reduce( (O, R) => O + R.count, 0)
          , E = h.userReactions[x];
        let C = [...j].sort( (O, R) => R.count - O.count);
        if (E) {
            const O = C.find(R => R.type === E);
            O && (C = C.filter(R => R.type !== E),
            C.unshift(O))
        }
        return C = C.slice(0, 3),
        {
            reactions: C,
            total: S
        }
    }
    ;
    return a.jsx("div", {
        className: "min-h-screen bg-gray-50",
        children: a.jsxs("div", {
            className: "max-w-md mx-auto bg-gray-50",
            children: [a.jsxs("div", {
                className: "flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 sticky top-0 z-10",
                children: [a.jsx("div", {
                    className: "flex items-center gap-2",
                    children: a.jsx("img", {
                        src: "/facebook_logo.png",
                        alt: "Facebook",
                        className: "h-6",
                        loading: "eager"
                    })
                }), a.jsxs("div", {
                    className: "bg-green-500 text-white px-5 py-2.5 rounded-full font-bold text-base flex items-center gap-2",
                    children: [a.jsxs("svg", {
                        className: "w-5 h-5",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        children: [a.jsx("rect", {
                            x: "2",
                            y: "5",
                            width: "20",
                            height: "14",
                            rx: "2"
                        }), a.jsx("line", {
                            x1: "2",
                            y1: "10",
                            x2: "22",
                            y2: "10"
                        })]
                    }), "$ ", t.toFixed(2)]
                })]
            }), a.jsxs("div", {
                className: "mx-3 my-4 bg-white rounded-xl shadow-md overflow-hidden",
                children: [a.jsxs("div", {
                    className: "flex items-start gap-3 px-4 py-3",
                    children: [a.jsx("div", {
                        className: "w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-500 bg-white flex items-center justify-center",
                        children: a.jsx("img", {
                            src: "/mark_perfil.png",
                            alt: "Mark Zuckerberg",
                            className: "w-[90%] h-[90%] object-contain rounded-full",
                            loading: "eager"
                        })
                    }), a.jsxs("div", {
                        className: "flex-1",
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-1",
                            children: [a.jsx("span", {
                                className: "font-semibold text-[15px]",
                                children: "Mark Zuckerberg"
                            }), a.jsx("img", {
                                src: "/Twitter_Verified_Badge.svg copy.png",
                                alt: "Verified",
                                className: "w-4 h-4",
                                loading: "eager"
                            })]
                        }), a.jsxs("div", {
                            className: "flex items-center gap-1 text-gray-500 text-[13px]",
                            children: [a.jsx("span", {
                                children: "Sponsored"
                            }), a.jsx("span", {
                                children: "·"
                            }), a.jsx(nf, {
                                className: "w-3 h-3"
                            })]
                        })]
                    }), a.jsx("button", {
                        children: a.jsx(sf, {
                            className: "w-6 h-6 text-gray-600"
                        })
                    })]
                }), a.jsx("div", {
                    className: "px-4 pb-3",
                    children: a.jsx("p", {
                        className: "text-[14px] text-gray-900 leading-snug whitespace-pre-wrap",
                        children: "Watch this 4-minute tutorial to learn how to register your bank account and withdraw your earnings. Step-by-step guide for instant withdrawals."
                    })
                }), a.jsx("div", {
                    className: "bg-gray-100",
                    children: a.jsx("vturb-smartplayer", {
                        id: "vid-69829bcdaf9a7a605d9c6c96", 
                        style: {
                            display: "block",
                            margin: "0 auto",
                            width: "100%",
                            maxWidth: "400px"
                        }
                    })
                }), a.jsxs("div", {
                    className: "px-4 py-2",
                    children: [a.jsxs("div", {
                        className: "flex items-center justify-between text-[13px] text-gray-600 py-2",
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-1",
                            children: [a.jsxs("div", {
                                className: "flex -space-x-1",
                                children: [a.jsx("div", {
                                    className: "w-[18px] h-[18px] bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px] border border-white",
                                    children: "👍"
                                }), a.jsx("div", {
                                    className: "w-[18px] h-[18px] bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] border border-white",
                                    children: "❤️"
                                }), a.jsx("div", {
                                    className: "w-[18px] h-[18px] bg-yellow-400 rounded-full flex items-center justify-center text-white text-[10px] border border-white",
                                    children: "😮"
                                })]
                            }), a.jsx("span", {
                                className: "ml-1",
                                children: "2,847"
                            })]
                        }), a.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [a.jsxs("span", {
                                children: [v.length, " comments"]
                            }), a.jsx("span", {
                                children: "145 shares"
                            })]
                        })]
                    }), a.jsx("div", {
                        className: "border-t border-gray-200 pt-1",
                        children: a.jsxs("div", {
                            className: "flex items-center justify-around py-1",
                            children: [a.jsxs("button", {
                                className: "flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors flex-1 justify-center",
                                children: [a.jsx(Ca, {
                                    className: "w-5 h-5 text-gray-600",
                                    strokeWidth: 1.8
                                }), a.jsx("span", {
                                    className: "text-[15px] font-semibold text-gray-600",
                                    children: "Like"
                                })]
                            }), a.jsxs("button", {
                                className: "flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors flex-1 justify-center",
                                children: [a.jsx(rf, {
                                    className: "w-5 h-5 text-gray-600",
                                    strokeWidth: 1.8
                                }), a.jsx("span", {
                                    className: "text-[15px] font-semibold text-gray-600",
                                    children: "Comment"
                                })]
                            }), a.jsxs("button", {
                                className: "flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors flex-1 justify-center",
                                children: [a.jsx(of, {
                                    className: "w-5 h-5 text-gray-600",
                                    strokeWidth: 1.8
                                }), a.jsx("span", {
                                    className: "text-[15px] font-semibold text-gray-600",
                                    children: "Share"
                                })]
                            })]
                        })
                    })]
                }), a.jsx("div", {
                    className: "border-t border-gray-200 px-4 py-3 bg-white",
                    children: a.jsx("div", {
                        className: "space-y-4 max-h-96 overflow-y-auto",
                        children: v.slice(0, 15).map(x => {
                            const j = _(x.id)
                              , S = h.userReactions[x.id]
                              , E = h.replies[x.id] || [];
                            return a.jsxs("div", {
                                className: "flex gap-2",
                                children: [a.jsx("div", {
                                    className: "w-8 h-8 rounded-full overflow-hidden flex-shrink-0",
                                    children: a.jsx("img", {
                                        src: x.avatar,
                                        alt: x.username,
                                        className: "w-full h-full object-cover",
                                        loading: "lazy"
                                    })
                                }), a.jsxs("div", {
                                    className: "flex-1 min-w-0",
                                    children: [a.jsxs("div", {
                                        className: "inline-block bg-[#F0F2F5] rounded-[18px] px-3 py-2",
                                        children: [a.jsx("div", {
                                            className: "mb-0.5",
                                            children: a.jsx("span", {
                                                className: "font-semibold text-[13px] text-[#050505] hover:underline cursor-pointer",
                                                children: x.username
                                            })
                                        }), a.jsx("p", {
                                            className: "text-[15px] text-[#050505] leading-[1.3333] break-words",
                                            children: x.text
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex items-center gap-3 px-3 mt-1 relative",
                                        children: [a.jsx("span", {
                                            className: "text-[12px] text-gray-500",
                                            children: x.time
                                        }), a.jsxs("div", {
                                            className: "relative",
                                            children: [a.jsx("button", {
                                                className: `text-[12px] font-semibold hover:underline ${S ? "text-blue-600" : "text-gray-600"}`,
                                                onMouseEnter: () => {
                                                    y.current && clearTimeout(y.current),
                                                    y.current = setTimeout( () => {
                                                        c(x.id)
                                                    }
                                                    , 500)
                                                }
                                                ,
                                                onMouseLeave: () => {
                                                    y.current && clearTimeout(y.current),
                                                    y.current = setTimeout( () => {
                                                        c(null)
                                                    }
                                                    , 300)
                                                }
                                                ,
                                                onClick: () => {
                                                    y.current && clearTimeout(y.current),
                                                    c(u === x.id ? null : x.id)
                                                }
                                                ,
                                                children: S ? a.jsx("span", {
                                                    className: "capitalize",
                                                    children: S
                                                }) : "Like"
                                            }), u === x.id && a.jsx("div", {
                                                className: "absolute bottom-full left-0 mb-2 bg-white rounded-full shadow-lg border border-gray-200 px-2 py-1.5 flex gap-1 z-10",
                                                onMouseEnter: () => {
                                                    y.current && clearTimeout(y.current)
                                                }
                                                ,
                                                onMouseLeave: () => {
                                                    y.current = setTimeout( () => {
                                                        c(null)
                                                    }
                                                    , 300)
                                                }
                                                ,
                                                children: Object.entries(k).map( ([C,{emoji: O}]) => a.jsx("button", {
                                                    onClick: () => g(x.id, C),
                                                    className: "text-2xl hover:scale-125 transition-transform p-1",
                                                    title: C,
                                                    children: O
                                                }, C))
                                            })]
                                        }), a.jsx("button", {
                                            onClick: () => i(s === x.id ? null : x.id),
                                            className: "text-[12px] text-gray-600 font-semibold hover:underline",
                                            children: "Reply"
                                        }), j && a.jsxs("div", {
                                            className: "bg-white rounded-full px-2 py-0.5 shadow-sm border border-gray-200 flex items-center gap-1",
                                            children: [j.reactions.map(C => a.jsx("span", {
                                                className: "text-[12px]",
                                                children: k[C.type].emoji
                                            }, C.type)), a.jsx("span", {
                                                className: "text-[11px] text-gray-600 font-normal",
                                                children: j.total
                                            })]
                                        })]
                                    }), E.length > 0 && a.jsx("div", {
                                        className: "mt-2 space-y-2",
                                        children: E.map(C => a.jsxs("div", {
                                            className: "flex gap-2",
                                            children: [a.jsx("div", {
                                                className: "w-7 h-7 rounded-full overflow-hidden flex-shrink-0",
                                                children: a.jsx("img", {
                                                    src: C.avatar,
                                                    alt: C.username,
                                                    className: "w-full h-full object-cover",
                                                    loading: "lazy"
                                                })
                                            }), a.jsxs("div", {
                                                className: "flex-1 min-w-0",
                                                children: [a.jsxs("div", {
                                                    className: "inline-block bg-[#F0F2F5] rounded-[18px] px-3 py-2",
                                                    children: [a.jsx("div", {
                                                        className: "mb-0.5",
                                                        children: a.jsx("span", {
                                                            className: "font-semibold text-[13px] text-[#050505] hover:underline cursor-pointer",
                                                            children: C.username
                                                        })
                                                    }), a.jsx("p", {
                                                        className: "text-[15px] text-[#050505] leading-[1.3333] break-words",
                                                        children: C.text
                                                    })]
                                                }), a.jsx("div", {
                                                    className: "flex items-center gap-3 px-3 mt-1",
                                                    children: a.jsx("span", {
                                                        className: "text-[12px] text-gray-500",
                                                        children: C.time
                                                    })
                                                })]
                                            })]
                                        }, C.id))
                                    }), s === x.id && a.jsxs("div", {
                                        className: "mt-2 flex gap-2 items-center",
                                        children: [a.jsx("div", {
                                            className: "w-7 h-7 rounded-full overflow-hidden flex-shrink-0 bg-gray-200",
                                            children: a.jsx("img", {
                                                src: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
                                                alt: "Your profile",
                                                className: "w-full h-full object-cover"
                                            })
                                        }), a.jsx("div", {
                                            className: "flex-1 bg-[#F0F2F5] rounded-full hover:bg-[#E4E6E9] transition-colors",
                                            children: a.jsx("input", {
                                                type: "text",
                                                placeholder: `Reply to ${x.username}...`,
                                                value: o,
                                                onChange: C => l(C.target.value),
                                                onKeyDown: C => C.key === "Enter" && m(x.id),
                                                className: "w-full px-3 py-1.5 text-[14px] outline-none bg-transparent text-[#050505] placeholder-gray-500",
                                                autoFocus: !0
                                            })
                                        }), o.trim() && a.jsx("button", {
                                            onClick: () => m(x.id),
                                            className: "text-[#1877F2] font-semibold text-[14px] hover:text-[#1664D8] transition-colors",
                                            children: "Post"
                                        })]
                                    })]
                                })]
                            }, x.id)
                        }
                        )
                    })
                }), a.jsx("div", {
                    className: "border-t border-gray-200 px-4 py-2.5 bg-white",
                    children: a.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [a.jsx("div", {
                            className: "w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gray-200",
                            children: a.jsx("img", {
                                src: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
                                alt: "Your profile",
                                className: "w-full h-full object-cover"
                            })
                        }), a.jsx("div", {
                            className: "flex-1 bg-[#F0F2F5] rounded-full hover:bg-[#E4E6E9] transition-colors",
                            children: a.jsx("input", {
                                type: "text",
                                placeholder: "Write a comment...",
                                value: n,
                                onChange: x => r(x.target.value),
                                onKeyDown: x => x.key === "Enter" && p(),
                                className: "w-full px-3 py-2 text-[15px] outline-none bg-transparent text-[#050505] placeholder-gray-500"
                            })
                        }), n.trim() && a.jsx("button", {
                            onClick: p,
                            className: "text-[#1877F2] font-semibold text-[15px] hover:text-[#1664D8] transition-colors",
                            children: "Post"
                        })]
                    })
                })]
            })]
        })
    })
}
function G0() {
    return a.jsx(q0, {})
}
function J0() {
    const [e] = w.useState(278)
      , [t,n] = w.useState(300);
    w.useEffect( () => {
        if (t <= 0)
            return;
        const i = setInterval( () => {
            n(o => o <= 1 ? (clearInterval(i),
            0) : o - 1)
        }
        , 1e3);
        return () => clearInterval(i)
    }
    , []);
    const r = i => {
        const o = Math.floor(i / 60)
          , l = i % 60;
        return `${o}:${l.toString().padStart(2, "0")}`
    }
      , s = () => {
        window.location.href = lfExternal("https://go.centerpag.com/PPU38CQ5PPJ")
    }
    ;
    return a.jsx("div", {
        className: "min-h-screen bg-gray-50",
        children: a.jsxs("div", {
            className: "max-w-md mx-auto bg-gray-50 min-h-screen",
            children: [a.jsxs("div", {
                className: "flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 sticky top-0 z-10",
                children: [a.jsx("div", {
                    className: "flex items-center gap-2",
                    children: a.jsx("img", {
                        src: "/facebook_logo.png",
                        alt: "Facebook",
                        className: "h-6",
                        loading: "eager"
                    })
                }), a.jsxs("div", {
                    className: "bg-green-500 text-white px-5 py-2.5 rounded-full font-bold text-base flex items-center gap-2",
                    children: [a.jsxs("svg", {
                        className: "w-5 h-5",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        children: [a.jsx("rect", {
                            x: "2",
                            y: "5",
                            width: "20",
                            height: "14",
                            rx: "2"
                        }), a.jsx("line", {
                            x1: "2",
                            y1: "10",
                            x2: "22",
                            y2: "10"
                        })]
                    }), "$ ", e.toFixed(2)]
                })]
            }), a.jsxs("div", {
                className: "px-4 py-4",
                children: [a.jsx("div", {
                    className: "bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-xl p-4 mb-5 border-2 border-red-800",
                    children: a.jsxs("div", {
                        className: "text-center",
                        children: [a.jsx("p", {
                            className: "text-red-100 text-xs font-bold uppercase tracking-wide mb-2",
                            children: "⚠️ ACCESS EXPIRES IN ⚠️"
                        }), a.jsx("div", {
                            className: "bg-black bg-opacity-30 backdrop-blur-sm rounded-xl py-3 px-4 mb-2 border border-red-900",
                            children: a.jsx("div", {
                                className: "text-white text-4xl font-black tabular-nums",
                                children: r(t)
                            })
                        }), a.jsx("p", {
                            className: "text-white text-xs font-semibold",
                            children: "Slot will be released after timer hits zero"
                        })]
                    })
                }), a.jsx("div", {
                    className: "bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200",
                    children: a.jsxs("div", {
                        className: "px-6 py-6 space-y-5",
                        children: [a.jsxs("div", {
                            className: "space-y-3",
                            children: [a.jsxs("div", {
                                className: "flex items-start gap-3",
                                children: [a.jsx("div", {
                                    className: "w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5",
                                    children: a.jsx("span", {
                                        className: "text-white text-sm font-bold",
                                        children: "1"
                                    })
                                }), a.jsxs("p", {
                                    className: "text-gray-700 text-sm leading-relaxed",
                                    children: ["Pay the ", a.jsx("span", {
                                        className: "font-semibold",
                                        children: "one-time access fee"
                                    }), " to activate your account"]
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-start gap-3",
                                children: [a.jsx("div", {
                                    className: "w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5",
                                    children: a.jsx("span", {
                                        className: "text-white text-sm font-bold",
                                        children: "2"
                                    })
                                }), a.jsx("p", {
                                    className: "text-gray-700 text-sm leading-relaxed",
                                    children: "Complete your first evaluations on Facebook Rewards"
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-start gap-3",
                                children: [a.jsx("div", {
                                    className: "w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5",
                                    children: a.jsx("span", {
                                        className: "text-white text-sm font-bold",
                                        children: "3"
                                    })
                                }), a.jsxs("p", {
                                    className: "text-gray-700 text-sm leading-relaxed",
                                    children: [a.jsx("span", {
                                        className: "font-semibold",
                                        children: "Get your access fee fully refunded"
                                    }), " after completing your first evaluations"]
                                })]
                            })]
                        }), a.jsx("div", {
                            className: "bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-5 text-center",
                            children: a.jsxs("div", {
                                className: "mb-2",
                                children: [a.jsx("p", {
                                    className: "text-gray-600 text-sm line-through",
                                    children: "Regular Price: $37.00"
                                }), a.jsx("p", {
                                    className: "text-green-600 text-3xl font-bold",
                                    children: "$27.00"
                                }), a.jsx("p", {
                                    className: "text-green-700 font-semibold text-sm",
                                    children: "Pay now and get $10 OFF"
                                })]
                            })
                        }), a.jsxs("button", {
                            onClick: s,
                            className: "w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-5 px-6 rounded-2xl text-lg transition-all hover:scale-[1.02] shadow-xl flex items-center justify-center gap-2 border-2 border-green-400",
                            children: [a.jsx(R0, {
                                className: "w-6 h-6",
                                strokeWidth: 2.5
                            }), "Pay Access Fee Now"]
                        }), a.jsx("p", {
                            className: "text-center text-gray-500 text-xs leading-relaxed",
                            children: "Access fee is 100% refundable after completing your first evaluations"
                        })]
                    })
                })]
            })]
        })
    })
}
function Q0() {
    return a.jsx(J0, {})
}
function Y0() {
    const e = () => {
        window.location.href = lfExternal("https://go.centerpag.com/PPU38CQ5PPJ?upsell=true")
    }
      , t = () => {
        window.location.href = "/us2"
    }
    ;
    return a.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-6",
        children: a.jsxs("div", {
            className: "max-w-4xl mx-auto",
            children: [a.jsxs("div", {
                className: "text-center mb-12",
                children: [a.jsx("h1", {
                    className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
                    children: "Exclusive One-Time Offer"
                }), a.jsx("p", {
                    className: "text-xl text-gray-600 leading-relaxed",
                    children: "Add this powerful feature to your journey"
                })]
            }), a.jsxs("div", {
                className: "bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12",
                children: [a.jsxs("div", {
                    className: "text-center mb-8",
                    children: [a.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                        children: "Food Archive"
                    }), a.jsx("p", {
                        className: "text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto",
                        children: "Food Archive allows you to record and organize your meals in one place. With this feature, you can log what you eat, how your meals are prepared, and build a personal food library over time. This helps you recognize patterns, habits, and preferences related to your nutrition."
                    })]
                }), a.jsx("div", {
                    className: "bg-blue-50 rounded-xl p-6 mb-8",
                    children: a.jsx("p", {
                        className: "text-gray-700 leading-relaxed text-center",
                        children: "Instead of guessing or relying on memory, Food Archive gives you a clear visual history of your eating routine, helping you stay consistent and more aware of your food choices."
                    })
                }), a.jsxs("div", {
                    className: "text-center mb-10",
                    children: [a.jsx("div", {
                        className: "text-5xl md:text-6xl font-bold text-blue-600 mb-2",
                        children: "$57"
                    }), a.jsx("div", {
                        className: "text-gray-600 text-lg",
                        children: "One-time payment"
                    })]
                }), a.jsx("button", {
                    onClick: e,
                    className: "w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-6 rounded-xl text-xl transition-all duration-200 shadow-lg hover:shadow-xl mb-4",
                    children: "Accept Offer"
                }), a.jsx("div", {
                    className: "text-center",
                    children: a.jsx("button", {
                        onClick: t,
                        className: "text-gray-600 hover:text-gray-800 underline text-sm",
                        children: "No thanks, I'll pass on this offer"
                    })
                })]
            }), a.jsx("div", {
                className: "text-center text-sm text-gray-500 mt-8",
                children: "This special offer is only available on this page"
            })]
        })
    })
}
function X0() {
    const e = () => {
        window.location.href = lfExternal("https://go.centerpag.com/PPU38CQ5UO7?upsell=true")
    }
      , t = () => {
        window.location.href = "/us3"
    }
    ;
    return a.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-6",
        children: a.jsxs("div", {
            className: "max-w-4xl mx-auto",
            children: [a.jsxs("div", {
                className: "text-center mb-12",
                children: [a.jsx("h1", {
                    className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
                    children: "Complete Your Nutrition Toolkit"
                }), a.jsx("p", {
                    className: "text-xl text-gray-600 leading-relaxed",
                    children: "Add this essential planning tool to stay organized"
                })]
            }), a.jsxs("div", {
                className: "bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12",
                children: [a.jsxs("div", {
                    className: "text-center mb-8",
                    children: [a.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                        children: "Meal Planner Calendar"
                    }), a.jsx("p", {
                        className: "text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto",
                        children: "Meal Planner Calendar helps you plan your meals ahead of time in a simple and organized way. Using a visual calendar, you can decide what you intend to eat in the coming days, creating structure and reducing last-minute food decisions."
                    })]
                }), a.jsx("div", {
                    className: "bg-blue-50 rounded-xl p-6 mb-8",
                    children: a.jsx("p", {
                        className: "text-gray-700 leading-relaxed text-center",
                        children: "This tool supports routine, consistency, and intentional eating habits, making it easier to stay aligned with your personal nutrition goals. It's not about restriction — it's about planning with clarity."
                    })
                }), a.jsxs("div", {
                    className: "text-center mb-10",
                    children: [a.jsx("div", {
                        className: "text-5xl md:text-6xl font-bold text-blue-600 mb-2",
                        children: "$77"
                    }), a.jsx("div", {
                        className: "text-gray-600 text-lg",
                        children: "One-time payment"
                    })]
                }), a.jsx("button", {
                    onClick: e,
                    className: "w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-6 rounded-xl text-xl transition-all duration-200 shadow-lg hover:shadow-xl mb-4",
                    children: "Accept Offer"
                }), a.jsx("div", {
                    className: "text-center",
                    children: a.jsx("button", {
                        onClick: t,
                        className: "text-gray-600 hover:text-gray-800 underline text-sm",
                        children: "No thanks, I'll pass on this offer"
                    })
                })]
            }), a.jsx("div", {
                className: "text-center text-sm text-gray-500 mt-8",
                children: "This special offer is only available on this page"
            })]
        })
    })
}
function Z0() {
    const e = () => {
        window.location.href = lfExternal("https://go.centerpag.com/PPU38CQ5UO7?upsell=true")
    }
      , t = () => {
        window.location.href = "/us4"
    }
    ;
    return a.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-6",
        children: a.jsxs("div", {
            className: "max-w-4xl mx-auto",
            children: [a.jsxs("div", {
                className: "text-center mb-12",
                children: [a.jsx("h1", {
                    className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
                    children: "Track Your Journey to Success"
                }), a.jsx("p", {
                    className: "text-xl text-gray-600 leading-relaxed",
                    children: "Stay motivated and aware with daily progress tracking"
                })]
            }), a.jsxs("div", {
                className: "bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12",
                children: [a.jsxs("div", {
                    className: "text-center mb-8",
                    children: [a.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                        children: "Progress Tracker"
                    }), a.jsx("p", {
                        className: "text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto",
                        children: "Progress Tracker is a simple daily tool that allows you to log your weight, define personal goals, and follow your progress over time. By recording changes consistently, you gain awareness of how your habits connect to your results."
                    })]
                }), a.jsx("div", {
                    className: "bg-blue-50 rounded-xl p-6 mb-8",
                    children: a.jsx("p", {
                        className: "text-gray-700 leading-relaxed text-center",
                        children: "The platform provides general guidance and educational insights to help you stay focused and motivated. Progress Tracker is designed for self-monitoring and habit awareness, not medical diagnosis or treatment."
                    })
                }), a.jsxs("div", {
                    className: "text-center mb-10",
                    children: [a.jsx("div", {
                        className: "text-5xl md:text-6xl font-bold text-blue-600 mb-2",
                        children: "$37"
                    }), a.jsx("div", {
                        className: "text-gray-600 text-lg",
                        children: "One-time payment"
                    })]
                }), a.jsx("button", {
                    onClick: e,
                    className: "w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-6 rounded-xl text-xl transition-all duration-200 shadow-lg hover:shadow-xl mb-4",
                    children: "Accept Offer"
                }), a.jsx("div", {
                    className: "text-center",
                    children: a.jsx("button", {
                        onClick: t,
                        className: "text-gray-600 hover:text-gray-800 underline text-sm",
                        children: "No thanks, I'll pass on this offer"
                    })
                })]
            }), a.jsx("div", {
                className: "text-center text-sm text-gray-500 mt-8",
                children: "This special offer is only available on this page"
            })]
        })
    })
}
function ey() {
    const e = () => {
        window.location.href = lfExternal("https://go.centerpag.com/PPU38CQ5UO7?upsell=true")
    }
      , t = () => {
        window.location.href = "/thanks"
    }
    ;
    return a.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-6",
        children: a.jsxs("div", {
            className: "max-w-4xl mx-auto",
            children: [a.jsxs("div", {
                className: "text-center mb-12",
                children: [a.jsx("h1", {
                    className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
                    children: "Join a Supportive Community"
                }), a.jsx("p", {
                    className: "text-xl text-gray-600 leading-relaxed",
                    children: "Stay motivated and connected with like-minded people"
                })]
            }), a.jsxs("div", {
                className: "bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12",
                children: [a.jsxs("div", {
                    className: "text-center mb-8",
                    children: [a.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                        children: "Healthy Habits Community"
                    }), a.jsx("p", {
                        className: "text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto",
                        children: "The Healthy Habits Community is a private space for people who want to eat better, build healthier routines, and stay consistent together. Inside the community, members share experiences, daily habits, food ideas, and motivation in a supportive environment focused on balance and well-being."
                    })]
                }), a.jsx("div", {
                    className: "bg-blue-50 rounded-xl p-6 mb-8",
                    children: a.jsx("p", {
                        className: "text-gray-700 leading-relaxed text-center",
                        children: "This is a positive, educational community built around shared goals, encouragement, and long-term healthy habits — not quick fixes."
                    })
                }), a.jsxs("div", {
                    className: "text-center mb-10",
                    children: [a.jsx("div", {
                        className: "text-5xl md:text-6xl font-bold text-blue-600 mb-2",
                        children: "$107"
                    }), a.jsx("div", {
                        className: "text-gray-600 text-lg",
                        children: "One-time payment"
                    })]
                }), a.jsx("button", {
                    onClick: e,
                    className: "w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-6 rounded-xl text-xl transition-all duration-200 shadow-lg hover:shadow-xl mb-4",
                    children: "Accept Offer"
                }), a.jsx("div", {
                    className: "text-center",
                    children: a.jsx("button", {
                        onClick: t,
                        className: "text-gray-600 hover:text-gray-800 underline text-sm",
                        children: "No thanks, I'll pass on this offer"
                    })
                })]
            }), a.jsx("div", {
                className: "text-center text-sm text-gray-500 mt-8",
                children: "This special offer is only available on this page"
            })]
        })
    })
}
function ty() {
    return a.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4",
        children: a.jsxs("div", {
            className: "max-w-4xl mx-auto",
            children: [a.jsxs("div", {
                className: "text-center mb-8",
                children: [a.jsx("div", {
                    className: "text-7xl mb-6",
                    children: "🎉"
                }), a.jsx("h1", {
                    className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                    children: "Welcome to Plate Signal!"
                }), a.jsx("p", {
                    className: "text-xl text-gray-600",
                    children: "Your visual meal awareness journey starts now"
                })]
            }), a.jsxs("div", {
                className: "bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12 mb-8",
                children: [a.jsxs("div", {
                    className: "mb-8",
                    children: [a.jsx("h2", {
                        className: "text-3xl font-bold text-gray-900 mb-6 text-center",
                        children: "About Plate Signal"
                    }), a.jsx("p", {
                        className: "text-lg text-gray-700 leading-relaxed mb-4",
                        children: "Plate Signal is a visual meal awareness platform designed to help you understand what your plate is signaling to your body — instantly. By uploading a photo of your meal, the platform analyzes the visual composition of the plate and returns simple, educational signals related to balance, energy, and satiety."
                    }), a.jsx("p", {
                        className: "text-lg text-gray-700 leading-relaxed mb-4",
                        children: "Instead of focusing on calories, numbers, or restrictive tracking, Plate Signal offers clear visual insights that promote awareness and more intentional eating habits. This tool is built for simplicity and clarity. There is no manual logging, no calorie counting, and no diet prescriptions."
                    }), a.jsx("p", {
                        className: "text-lg text-gray-700 leading-relaxed",
                        children: "Plate Signal exists to help users observe patterns, recognize tendencies, and build a better relationship with food through visual understanding over time."
                    })]
                }), a.jsx("div", {
                    className: "bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8",
                    children: a.jsx("p", {
                        className: "text-sm text-gray-600 text-center italic",
                        children: "Plate Signal does not provide medical advice, diagnosis, or treatment. It is an educational platform created to support awareness, consistency, and long-term healthy habits through calm, visual insights."
                    })
                }), a.jsxs("div", {
                    className: "bg-green-50 border-2 border-green-300 rounded-xl p-6 mb-8",
                    children: [a.jsx("h3", {
                        className: "text-xl font-bold text-gray-900 mb-3 text-center",
                        children: "Access Information Sent!"
                    }), a.jsx("p", {
                        className: "text-lg text-gray-700 text-center mb-4",
                        children: "Your login credentials and access instructions have been sent to your email address."
                    }), a.jsx("a", {
                        href: "https://mail.google.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-center mb-3",
                        children: "📧 Open Email"
                    })]
                }), a.jsxs("div", {
                    className: "bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-6",
                    children: [a.jsx("h3", {
                        className: "text-xl font-bold text-gray-900 mb-3 text-center",
                        children: "Need Help?"
                    }), a.jsx("p", {
                        className: "text-lg text-gray-700 text-center mb-4",
                        children: "Our support team is here to assist you."
                    }), a.jsx("p", {
                        className: "text-xl font-bold text-blue-600 text-center mb-4",
                        children: "support@platesignalai.com"
                    }), a.jsx("a", {
                        href: "mailto:support@platesignalai.com",
                        className: "block w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-4 px-6 rounded-lg transition-all duration-200 text-center",
                        children: "Contact Support"
                    })]
                })]
            }), a.jsx("div", {
                className: "text-center text-sm text-gray-500 mt-8",
                children: "We're excited to support you on your visual meal awareness journey!"
            })]
        })
    })
}
function ny() {
    const e = () => {
        window.location.href = lfExternal("https://go.centerpag.com/PPU38CQ5UO7?upsell=true")
    }
    ;
    return a.jsx("div", {
        className: "min-h-screen bg-white p-4",
        children: a.jsxs("div", {
            className: "max-w-md mx-auto text-center pt-12",
            children: [a.jsx("h1", {
                className: "text-4xl font-bold text-green-500 mb-8",
                children: "Congratulations!"
            }), a.jsx("p", {
                className: "text-black text-lg font-bold underline mb-6",
                children: 'ACCESS GRANTED, PRESS "I WANT TO WIN" TO START'
            }), a.jsx("button", {
                onClick: e,
                className: "w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-8 rounded-xl text-2xl transition-all duration-200 shadow-lg hover:shadow-xl",
                children: "I WANT TO WIN!"
            })]
        })
    })
}
function ry() {
    return a.jsx(Kt, {
        originalContent: a.jsx(ny, {}),
        whitePageContent: a.jsx(Y0, {})
    })
}
function sy() {
    const [t,n] = w.useState(0)
      , [r,s] = w.useState(0);
    w.useEffect( () => {
        const u = 4.633333333333334
          , c = 1500 / 60;
        let d = 0;
        const h = setInterval( () => {
            d++,
            d <= 60 ? n(Math.min(d * u, 278)) : clearInterval(h)
        }
        , c)
          , f = 1500
          , y = 60
          , v = 33 / y
          , b = f / y;
        let k = 0;
        const g = setInterval( () => {
            k++,
            k <= y ? s(Math.min(k * v, 33)) : clearInterval(g)
        }
        , b);
        return () => {
            clearInterval(h),
            clearInterval(g)
        }
    }
    , []);
    const i = () => {
        window.location.href = lfExternal("https://go.centerpag.com/PPU38CQ5UO7?upsell=true")
    }
    ;
    return a.jsxs("div", {
        className: "min-h-screen bg-white relative overflow-hidden",
        children: [a.jsx("div", {
            className: "bg-red-600 py-2",
            children: a.jsx("p", {
                className: "text-white text-center font-semibold",
                children: "⏳ Your order is almost complete!"
            })
        }), a.jsxs("div", {
            className: "max-w-3xl mx-auto px-4 py-6",
            children: [a.jsxs("div", {
                className: "bg-gray-100 rounded-3xl p-6 mb-6",
                children: [a.jsx("p", {
                    className: "text-lg text-center text-black mb-6 max-w-2xl mx-auto",
                    children: "Complete your process now or you will lose your access."
                }), a.jsx("div", {
                    className: "bg-gray-300 rounded-full h-10 mb-5 flex items-center px-2",
                    children: a.jsx("div", {
                        className: "bg-red-600 h-7 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-100 ease-out",
                        style: {
                            width: `${r}%`
                        },
                        children: r > 15 && `${Math.round(r)}%`
                    })
                })]
            }), a.jsxs("div", {
                className: "border-4 border-dashed border-green-600 bg-green-50 rounded-2xl p-6 mb-6",
                children: [a.jsx("h2", {
                    className: "text-xl text-center font-bold italic mb-3",
                    children: "BoosterX"
                }), a.jsx("p", {
                    className: "text-lg text-center text-black mb-4",
                    children: "Our smart AI engine is built to multiply your results effortlessly!"
                })]
            }), a.jsx("button", {
                onClick: i,
                className: "w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-8 rounded-xl text-2xl transition-all duration-200 shadow-lg hover:shadow-xl",
                children: "YES, I WANT!"
            })]
        })]
    })
}
function iy() {
    return a.jsx(Kt, {
        originalContent: a.jsx(sy, {}),
        whitePageContent: a.jsx(X0, {})
    })
}
function oy() {
    const [t,n] = w.useState(0)
      , [r,s] = w.useState(0);
    w.useEffect( () => {
        const u = 4.633333333333334
          , c = 1500 / 60;
        let d = 0;
        const h = setInterval( () => {
            d++,
            d <= 60 ? n(Math.min(d * u, 278)) : clearInterval(h)
        }
        , c)
          , f = 1500
          , y = 60
          , v = 64 / y
          , b = f / y;
        let k = 0;
        const g = setInterval( () => {
            k++,
            k <= y ? s(Math.min(k * v, 64)) : clearInterval(g)
        }
        , b);
        return () => {
            clearInterval(h),
            clearInterval(g)
        }
    }
    , []);
    const i = () => {
        window.location.href = lfExternal("https://go.centerpag.com/PPU38CQ5UO7?upsell=true")
    }
    ;
    return a.jsxs("div", {
        className: "min-h-screen bg-white relative overflow-hidden",
        children: [a.jsx("div", {
            className: "bg-red-600 py-2",
            children: a.jsx("p", {
                className: "text-white text-center font-semibold",
                children: "⏳ Your order is almost complete!"
            })
        }), a.jsxs("div", {
            className: "max-w-3xl mx-auto px-4 py-6",
            children: [a.jsxs("div", {
                className: "bg-gray-100 rounded-3xl p-6 mb-6",
                children: [a.jsx("p", {
                    className: "text-lg text-center text-black mb-6 max-w-2xl mx-auto",
                    children: "Complete your process now or you will lose your access."
                }), a.jsx("div", {
                    className: "bg-gray-300 rounded-full h-10 mb-5 flex items-center px-2",
                    children: a.jsx("div", {
                        className: "bg-red-600 h-7 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-100 ease-out",
                        style: {
                            width: `${r}%`
                        },
                        children: r > 15 && `${Math.round(r)}%`
                    })
                })]
            }), a.jsxs("div", {
                className: "border-4 border-dashed border-green-600 bg-green-50 rounded-2xl p-6 mb-6",
                children: [a.jsx("h2", {
                    className: "text-xl text-center font-bold italic mb-3",
                    children: "Money Robot"
                }), a.jsx("p", {
                    className: "text-lg text-center text-black mb-4",
                    children: "Our powerful AI robot is designed to automate your earnings and maximize your results!"
                })]
            }), a.jsx("button", {
                onClick: i,
                className: "w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-8 rounded-xl text-2xl transition-all duration-200 shadow-lg hover:shadow-xl",
                children: "YES, I WANT!"
            })]
        })]
    })
}
function ay() {
    return a.jsx(Kt, {
        originalContent: a.jsx(oy, {}),
        whitePageContent: a.jsx(Z0, {})
    })
}
function ly() {
    const [t,n] = w.useState(0)
      , [r,s] = w.useState(0);
    w.useEffect( () => {
        const u = 4.633333333333334
          , c = 1500 / 60;
        let d = 0;
        const h = setInterval( () => {
            d++,
            d <= 60 ? n(Math.min(d * u, 278)) : clearInterval(h)
        }
        , c)
          , f = 1500
          , y = 60
          , v = 78 / y
          , b = f / y;
        let k = 0;
        const g = setInterval( () => {
            k++,
            k <= y ? s(Math.min(k * v, 78)) : clearInterval(g)
        }
        , b);
        return () => {
            clearInterval(h),
            clearInterval(g)
        }
    }
    , []);
    const i = () => {
        window.location.href = lfExternal("https://go.centerpag.com/PPU38CQ5UO7?upsell=true")
    }
    ;
    return a.jsxs("div", {
        className: "min-h-screen bg-white relative overflow-hidden",
        children: [a.jsx("div", {
            className: "bg-red-600 py-2",
            children: a.jsx("p", {
                className: "text-white text-center font-semibold",
                children: "⏳ Your order is almost complete!"
            })
        }), a.jsxs("div", {
            className: "max-w-3xl mx-auto px-4 py-6",
            children: [a.jsxs("div", {
                className: "bg-gray-100 rounded-3xl p-6 mb-6",
                children: [a.jsx("p", {
                    className: "text-lg text-center text-black mb-6 max-w-2xl mx-auto",
                    children: "You just unlocked another exclusive bonus — only on this page!"
                }), a.jsx("div", {
                    className: "bg-gray-300 rounded-full h-10 mb-5 flex items-center px-2",
                    children: a.jsx("div", {
                        className: "bg-red-600 h-7 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-100 ease-out",
                        style: {
                            width: `${r}%`
                        },
                        children: r > 15 && `${Math.round(r)}%`
                    })
                })]
            }), a.jsxs("div", {
                className: "border-4 border-dashed border-green-600 bg-green-50 rounded-2xl p-6 mb-6",
                children: [a.jsx("h2", {
                    className: "text-xl text-center font-bold italic mb-3",
                    children: "Golden Key"
                }), a.jsx("p", {
                    className: "text-lg text-center text-black",
                    children: "Our gold-standard artificial intelligence that boosts your earnings by up to 13X!"
                })]
            }), a.jsx("button", {
                onClick: i,
                className: "w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-8 rounded-xl text-2xl transition-all duration-200 shadow-lg hover:shadow-xl",
                children: "COMPLETE NOW!"
            })]
        })]
    })
}
function uy() {
    return a.jsx(Kt, {
        originalContent: a.jsx(ly, {}),
        whitePageContent: a.jsx(ey, {})
    })
}
function cy() {
    return a.jsxs("div", {
        className: "min-h-screen bg-white relative overflow-hidden",
        children: [a.jsxs("div", {
            className: "max-w-2xl mx-auto px-4 py-8",
            children: [a.jsxs("div", {
                className: "text-center mb-6",
                children: [a.jsx("div", {
                    className: "text-7xl mb-6",
                    children: "🎉"
                }), a.jsx("h1", {
                    className: "text-5xl md:text-6xl font-bold text-black mb-8",
                    children: "Welcome!"
                }), a.jsx("p", {
                    className: "text-xl md:text-2xl text-black leading-relaxed mb-2",
                    children: "Please read the instructions carefully to understand how to access the platform."
                }), a.jsx("div", {
                    className: "text-5xl text-gray-400 mt-4",
                    children: "ℹ️"
                })]
            }), a.jsxs("div", {
                className: "bg-gray-50 rounded-2xl p-6 md:p-8 mb-6",
                children: [a.jsx("h2", {
                    className: "text-2xl md:text-3xl font-bold text-black mb-6",
                    children: "Your access is now active."
                }), a.jsx("p", {
                    className: "text-lg md:text-xl text-black mb-6 leading-relaxed",
                    children: "Tap below to enter the platform and start earning right away."
                }), a.jsx("p", {
                    className: "text-lg md:text-xl text-black mb-4 leading-relaxed",
                    children: "If you need support, please contact us via email:"
                }), a.jsxs("div", {
                    className: "flex items-center justify-start gap-2 mb-8",
                    children: [a.jsx("span", {
                        className: "text-2xl",
                        children: "📧"
                    }), a.jsx("a", {
                        href: "mailto:support@fbonboard.com",
                        className: "text-xl md:text-2xl font-bold text-black hover:text-blue-600 transition-colors",
                        children: "support@fbonboard.com"
                    })]
                }), a.jsxs("div", {
                    className: "border-4 border-dashed border-green-500 rounded-2xl p-6 md:p-8 bg-white",
                    children: [a.jsx("p", {
                        className: "text-lg md:text-xl text-black text-center mb-6 leading-relaxed font-semibold",
                        children: "Important: You must log in to the platform using the same email you used to pay the fee."
                    }), a.jsxs("a", {
                        href: lfExternal("https://fbonline.site/"),
                        className: "flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-6 rounded-xl text-xl md:text-2xl transition-all duration-200 shadow-lg hover:shadow-xl",
                        children: [a.jsx("span", {
                            className: "text-2xl",
                            children: "✅"
                        }), "Click here to access the platform now!"]
                    })]
                })]
            })]
        })]
    })
}
function dy() {
    return a.jsx(Kt, {
        originalContent: a.jsx(cy, {}),
        whitePageContent: a.jsx(ty, {})
    })
}
const hy = "modulepreload"
  , fy = function(e) {
    return "/" + e
}
  , cc = {}
  , us = function(t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const o = document.querySelector("meta[property=csp-nonce]")
          , l = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
        s = Promise.allSettled(n.map(u => {
            if (u = fy(u),
            u in cc)
                return;
            cc[u] = !0;
            const c = u.endsWith(".css")
              , d = c ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${u}"]${d}`))
                return;
            const h = document.createElement("link");
            if (h.rel = c ? "stylesheet" : hy,
            c || (h.as = "script"),
            h.crossOrigin = "",
            h.href = u,
            l && h.setAttribute("nonce", l),
            document.head.appendChild(h),
            c)
                return new Promise( (f, y) => {
                    h.addEventListener("load", f),
                    h.addEventListener("error", () => y(new Error(`Unable to preload CSS for ${u}`)))
                }
                )
        }
        ))
    }
    function i(o) {
        const l = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (l.payload = o,
        window.dispatchEvent(l),
        !l.defaultPrevented)
            throw o
    }
    return s.then(o => {
        for (const l of o || [])
            l.status === "rejected" && i(l.reason);
        return t().catch(i)
    }
    )
}
  , py = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = (...n) => us(async () => {
        const {default: r} = await Promise.resolve().then( () => ir);
        return {
            default: r
        }
    }
    , []).then( ({default: r}) => r(...n)) : t = fetch,
    (...n) => t(...n)
}
;
class Wl extends Error {
    constructor(t, n="FunctionsError", r) {
        super(t),
        this.name = n,
        this.context = r
    }
}
class my extends Wl {
    constructor(t) {
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", t)
    }
}
class dc extends Wl {
    constructor(t) {
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", t)
    }
}
class hc extends Wl {
    constructor(t) {
        super("Edge Function returned a non-2xx status code", "FunctionsHttpError", t)
    }
}
var Ta;
(function(e) {
    e.Any = "any",
    e.ApNortheast1 = "ap-northeast-1",
    e.ApNortheast2 = "ap-northeast-2",
    e.ApSouth1 = "ap-south-1",
    e.ApSoutheast1 = "ap-southeast-1",
    e.ApSoutheast2 = "ap-southeast-2",
    e.CaCentral1 = "ca-central-1",
    e.EuCentral1 = "eu-central-1",
    e.EuWest1 = "eu-west-1",
    e.EuWest2 = "eu-west-2",
    e.EuWest3 = "eu-west-3",
    e.SaEast1 = "sa-east-1",
    e.UsEast1 = "us-east-1",
    e.UsWest1 = "us-west-1",
    e.UsWest2 = "us-west-2"
}
)(Ta || (Ta = {}));
var gy = function(e, t, n, r) {
    function s(i) {
        return i instanceof n ? i : new n(function(o) {
            o(i)
        }
        )
    }
    return new (n || (n = Promise))(function(i, o) {
        function l(d) {
            try {
                c(r.next(d))
            } catch (h) {
                o(h)
            }
        }
        function u(d) {
            try {
                c(r.throw(d))
            } catch (h) {
                o(h)
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(l, u)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
};
class yy {
    constructor(t, {headers: n={}, customFetch: r, region: s=Ta.Any}={}) {
        this.url = t,
        this.headers = n,
        this.region = s,
        this.fetch = py(r)
    }
    setAuth(t) {
        this.headers.Authorization = `Bearer ${t}`
    }
    invoke(t, n={}) {
        var r;
        return gy(this, void 0, void 0, function*() {
            try {
                const {headers: s, method: i, body: o} = n;
                let l = {}
                  , {region: u} = n;
                u || (u = this.region);
                const c = new URL(`${this.url}/${t}`);
                u && u !== "any" && (l["x-region"] = u,
                c.searchParams.set("forceFunctionRegion", u));
                let d;
                o && (s && !Object.prototype.hasOwnProperty.call(s, "Content-Type") || !s) && (typeof Blob < "u" && o instanceof Blob || o instanceof ArrayBuffer ? (l["Content-Type"] = "application/octet-stream",
                d = o) : typeof o == "string" ? (l["Content-Type"] = "text/plain",
                d = o) : typeof FormData < "u" && o instanceof FormData ? d = o : (l["Content-Type"] = "application/json",
                d = JSON.stringify(o)));
                const h = yield this.fetch(c.toString(), {
                    method: i || "POST",
                    headers: Object.assign(Object.assign(Object.assign({}, l), this.headers), s),
                    body: d
                }).catch(b => {
                    throw new my(b)
                }
                )
                  , f = h.headers.get("x-relay-error");
                if (f && f === "true")
                    throw new dc(h);
                if (!h.ok)
                    throw new hc(h);
                let y = ((r = h.headers.get("Content-Type")) !== null && r !== void 0 ? r : "text/plain").split(";")[0].trim(), v;
                return y === "application/json" ? v = yield h.json() : y === "application/octet-stream" ? v = yield h.blob() : y === "text/event-stream" ? v = h : y === "multipart/form-data" ? v = yield h.formData() : v = yield h.text(),
                {
                    data: v,
                    error: null,
                    response: h
                }
            } catch (s) {
                return {
                    data: null,
                    error: s,
                    response: s instanceof hc || s instanceof dc ? s.context : void 0
                }
            }
        })
    }
}
var ke = {}
  , Hl = {}
  , Bi = {}
  , cs = {}
  , Wi = {}
  , Hi = {}
  , vy = function() {
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}
  , Xn = vy();
const xy = Xn.fetch
  , uf = Xn.fetch.bind(Xn)
  , cf = Xn.Headers
  , wy = Xn.Request
  , by = Xn.Response
  , ir = Object.freeze(Object.defineProperty({
    __proto__: null,
    Headers: cf,
    Request: wy,
    Response: by,
    default: uf,
    fetch: xy
}, Symbol.toStringTag, {
    value: "Module"
}))
  , _y = If(ir);
var Vi = {};
Object.defineProperty(Vi, "__esModule", {
    value: !0
});
let ky = class extends Error {
    constructor(t) {
        super(t.message),
        this.name = "PostgrestError",
        this.details = t.details,
        this.hint = t.hint,
        this.code = t.code
    }
}
;
Vi.default = ky;
var df = De && De.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Hi, "__esModule", {
    value: !0
});
const jy = df(_y)
  , Sy = df(Vi);
let Ny = class {
    constructor(t) {
        var n, r;
        this.shouldThrowOnError = !1,
        this.method = t.method,
        this.url = t.url,
        this.headers = new Headers(t.headers),
        this.schema = t.schema,
        this.body = t.body,
        this.shouldThrowOnError = (n = t.shouldThrowOnError) !== null && n !== void 0 ? n : !1,
        this.signal = t.signal,
        this.isMaybeSingle = (r = t.isMaybeSingle) !== null && r !== void 0 ? r : !1,
        t.fetch ? this.fetch = t.fetch : typeof fetch > "u" ? this.fetch = jy.default : this.fetch = fetch
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    setHeader(t, n) {
        return this.headers = new Headers(this.headers),
        this.headers.set(t, n),
        this
    }
    then(t, n) {
        this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)),
        this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json");
        const r = this.fetch;
        let s = r(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async i => {
            var o, l, u, c;
            let d = null
              , h = null
              , f = null
              , y = i.status
              , v = i.statusText;
            if (i.ok) {
                if (this.method !== "HEAD") {
                    const m = await i.text();
                    m === "" || (this.headers.get("Accept") === "text/csv" || this.headers.get("Accept") && (!((o = this.headers.get("Accept")) === null || o === void 0) && o.includes("application/vnd.pgrst.plan+text")) ? h = m : h = JSON.parse(m))
                }
                const k = (l = this.headers.get("Prefer")) === null || l === void 0 ? void 0 : l.match(/count=(exact|planned|estimated)/)
                  , g = (u = i.headers.get("content-range")) === null || u === void 0 ? void 0 : u.split("/");
                k && g && g.length > 1 && (f = parseInt(g[1])),
                this.isMaybeSingle && this.method === "GET" && Array.isArray(h) && (h.length > 1 ? (d = {
                    code: "PGRST116",
                    details: `Results contain ${h.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message: "JSON object requested, multiple (or no) rows returned"
                },
                h = null,
                f = null,
                y = 406,
                v = "Not Acceptable") : h.length === 1 ? h = h[0] : h = null)
            } else {
                const k = await i.text();
                try {
                    d = JSON.parse(k),
                    Array.isArray(d) && i.status === 404 && (h = [],
                    d = null,
                    y = 200,
                    v = "OK")
                } catch {
                    i.status === 404 && k === "" ? (y = 204,
                    v = "No Content") : d = {
                        message: k
                    }
                }
                if (d && this.isMaybeSingle && (!((c = d == null ? void 0 : d.details) === null || c === void 0) && c.includes("0 rows")) && (d = null,
                y = 200,
                v = "OK"),
                d && this.shouldThrowOnError)
                    throw new Sy.default(d)
            }
            return {
                error: d,
                data: h,
                count: f,
                status: y,
                statusText: v
            }
        }
        );
        return this.shouldThrowOnError || (s = s.catch(i => {
            var o, l, u;
            return {
                error: {
                    message: `${(o = i == null ? void 0 : i.name) !== null && o !== void 0 ? o : "FetchError"}: ${i == null ? void 0 : i.message}`,
                    details: `${(l = i == null ? void 0 : i.stack) !== null && l !== void 0 ? l : ""}`,
                    hint: "",
                    code: `${(u = i == null ? void 0 : i.code) !== null && u !== void 0 ? u : ""}`
                },
                data: null,
                count: null,
                status: 0,
                statusText: ""
            }
        }
        )),
        s.then(t, n)
    }
    returns() {
        return this
    }
    overrideTypes() {
        return this
    }
}
;
Hi.default = Ny;
var Ey = De && De.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Wi, "__esModule", {
    value: !0
});
const Cy = Ey(Hi);
let Py = class extends Cy.default {
    select(t) {
        let n = !1;
        const r = (t ?? "*").split("").map(s => /\s/.test(s) && !n ? "" : (s === '"' && (n = !n),
        s)).join("");
        return this.url.searchParams.set("select", r),
        this.headers.append("Prefer", "return=representation"),
        this
    }
    order(t, {ascending: n=!0, nullsFirst: r, foreignTable: s, referencedTable: i=s}={}) {
        const o = i ? `${i}.order` : "order"
          , l = this.url.searchParams.get(o);
        return this.url.searchParams.set(o, `${l ? `${l},` : ""}${t}.${n ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`),
        this
    }
    limit(t, {foreignTable: n, referencedTable: r=n}={}) {
        const s = typeof r > "u" ? "limit" : `${r}.limit`;
        return this.url.searchParams.set(s, `${t}`),
        this
    }
    range(t, n, {foreignTable: r, referencedTable: s=r}={}) {
        const i = typeof s > "u" ? "offset" : `${s}.offset`
          , o = typeof s > "u" ? "limit" : `${s}.limit`;
        return this.url.searchParams.set(i, `${t}`),
        this.url.searchParams.set(o, `${n - t + 1}`),
        this
    }
    abortSignal(t) {
        return this.signal = t,
        this
    }
    single() {
        return this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        this
    }
    maybeSingle() {
        return this.method === "GET" ? this.headers.set("Accept", "application/json") : this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        this.isMaybeSingle = !0,
        this
    }
    csv() {
        return this.headers.set("Accept", "text/csv"),
        this
    }
    geojson() {
        return this.headers.set("Accept", "application/geo+json"),
        this
    }
    explain({analyze: t=!1, verbose: n=!1, settings: r=!1, buffers: s=!1, wal: i=!1, format: o="text"}={}) {
        var l;
        const u = [t ? "analyze" : null, n ? "verbose" : null, r ? "settings" : null, s ? "buffers" : null, i ? "wal" : null].filter(Boolean).join("|")
          , c = (l = this.headers.get("Accept")) !== null && l !== void 0 ? l : "application/json";
        return this.headers.set("Accept", `application/vnd.pgrst.plan+${o}; for="${c}"; options=${u};`),
        o === "json" ? this : this
    }
    rollback() {
        return this.headers.append("Prefer", "tx=rollback"),
        this
    }
    returns() {
        return this
    }
    maxAffected(t) {
        return this.headers.append("Prefer", "handling=strict"),
        this.headers.append("Prefer", `max-affected=${t}`),
        this
    }
}
;
Wi.default = Py;
var Ty = De && De.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(cs, "__esModule", {
    value: !0
});
const Oy = Ty(Wi);
let Ry = class extends Oy.default {
    eq(t, n) {
        return this.url.searchParams.append(t, `eq.${n}`),
        this
    }
    neq(t, n) {
        return this.url.searchParams.append(t, `neq.${n}`),
        this
    }
    gt(t, n) {
        return this.url.searchParams.append(t, `gt.${n}`),
        this
    }
    gte(t, n) {
        return this.url.searchParams.append(t, `gte.${n}`),
        this
    }
    lt(t, n) {
        return this.url.searchParams.append(t, `lt.${n}`),
        this
    }
    lte(t, n) {
        return this.url.searchParams.append(t, `lte.${n}`),
        this
    }
    like(t, n) {
        return this.url.searchParams.append(t, `like.${n}`),
        this
    }
    likeAllOf(t, n) {
        return this.url.searchParams.append(t, `like(all).{${n.join(",")}}`),
        this
    }
    likeAnyOf(t, n) {
        return this.url.searchParams.append(t, `like(any).{${n.join(",")}}`),
        this
    }
    ilike(t, n) {
        return this.url.searchParams.append(t, `ilike.${n}`),
        this
    }
    ilikeAllOf(t, n) {
        return this.url.searchParams.append(t, `ilike(all).{${n.join(",")}}`),
        this
    }
    ilikeAnyOf(t, n) {
        return this.url.searchParams.append(t, `ilike(any).{${n.join(",")}}`),
        this
    }
    is(t, n) {
        return this.url.searchParams.append(t, `is.${n}`),
        this
    }
    in(t, n) {
        const r = Array.from(new Set(n)).map(s => typeof s == "string" && new RegExp("[,()]").test(s) ? `"${s}"` : `${s}`).join(",");
        return this.url.searchParams.append(t, `in.(${r})`),
        this
    }
    contains(t, n) {
        return typeof n == "string" ? this.url.searchParams.append(t, `cs.${n}`) : Array.isArray(n) ? this.url.searchParams.append(t, `cs.{${n.join(",")}}`) : this.url.searchParams.append(t, `cs.${JSON.stringify(n)}`),
        this
    }
    containedBy(t, n) {
        return typeof n == "string" ? this.url.searchParams.append(t, `cd.${n}`) : Array.isArray(n) ? this.url.searchParams.append(t, `cd.{${n.join(",")}}`) : this.url.searchParams.append(t, `cd.${JSON.stringify(n)}`),
        this
    }
    rangeGt(t, n) {
        return this.url.searchParams.append(t, `sr.${n}`),
        this
    }
    rangeGte(t, n) {
        return this.url.searchParams.append(t, `nxl.${n}`),
        this
    }
    rangeLt(t, n) {
        return this.url.searchParams.append(t, `sl.${n}`),
        this
    }
    rangeLte(t, n) {
        return this.url.searchParams.append(t, `nxr.${n}`),
        this
    }
    rangeAdjacent(t, n) {
        return this.url.searchParams.append(t, `adj.${n}`),
        this
    }
    overlaps(t, n) {
        return typeof n == "string" ? this.url.searchParams.append(t, `ov.${n}`) : this.url.searchParams.append(t, `ov.{${n.join(",")}}`),
        this
    }
    textSearch(t, n, {config: r, type: s}={}) {
        let i = "";
        s === "plain" ? i = "pl" : s === "phrase" ? i = "ph" : s === "websearch" && (i = "w");
        const o = r === void 0 ? "" : `(${r})`;
        return this.url.searchParams.append(t, `${i}fts${o}.${n}`),
        this
    }
    match(t) {
        return Object.entries(t).forEach( ([n,r]) => {
            this.url.searchParams.append(n, `eq.${r}`)
        }
        ),
        this
    }
    not(t, n, r) {
        return this.url.searchParams.append(t, `not.${n}.${r}`),
        this
    }
    or(t, {foreignTable: n, referencedTable: r=n}={}) {
        const s = r ? `${r}.or` : "or";
        return this.url.searchParams.append(s, `(${t})`),
        this
    }
    filter(t, n, r) {
        return this.url.searchParams.append(t, `${n}.${r}`),
        this
    }
}
;
cs.default = Ry;
var Iy = De && De.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Bi, "__esModule", {
    value: !0
});
const yr = Iy(cs);
let $y = class {
    constructor(t, {headers: n={}, schema: r, fetch: s}) {
        this.url = t,
        this.headers = new Headers(n),
        this.schema = r,
        this.fetch = s
    }
    select(t, {head: n=!1, count: r}={}) {
        const s = n ? "HEAD" : "GET";
        let i = !1;
        const o = (t ?? "*").split("").map(l => /\s/.test(l) && !i ? "" : (l === '"' && (i = !i),
        l)).join("");
        return this.url.searchParams.set("select", o),
        r && this.headers.append("Prefer", `count=${r}`),
        new yr.default({
            method: s,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch
        })
    }
    insert(t, {count: n, defaultToNull: r=!0}={}) {
        var s;
        const i = "POST";
        if (n && this.headers.append("Prefer", `count=${n}`),
        r || this.headers.append("Prefer", "missing=default"),
        Array.isArray(t)) {
            const o = t.reduce( (l, u) => l.concat(Object.keys(u)), []);
            if (o.length > 0) {
                const l = [...new Set(o)].map(u => `"${u}"`);
                this.url.searchParams.set("columns", l.join(","))
            }
        }
        return new yr.default({
            method: i,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: (s = this.fetch) !== null && s !== void 0 ? s : fetch
        })
    }
    upsert(t, {onConflict: n, ignoreDuplicates: r=!1, count: s, defaultToNull: i=!0}={}) {
        var o;
        const l = "POST";
        if (this.headers.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`),
        n !== void 0 && this.url.searchParams.set("on_conflict", n),
        s && this.headers.append("Prefer", `count=${s}`),
        i || this.headers.append("Prefer", "missing=default"),
        Array.isArray(t)) {
            const u = t.reduce( (c, d) => c.concat(Object.keys(d)), []);
            if (u.length > 0) {
                const c = [...new Set(u)].map(d => `"${d}"`);
                this.url.searchParams.set("columns", c.join(","))
            }
        }
        return new yr.default({
            method: l,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch
        })
    }
    update(t, {count: n}={}) {
        var r;
        const s = "PATCH";
        return n && this.headers.append("Prefer", `count=${n}`),
        new yr.default({
            method: s,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch
        })
    }
    delete({count: t}={}) {
        var n;
        const r = "DELETE";
        return t && this.headers.append("Prefer", `count=${t}`),
        new yr.default({
            method: r,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch
        })
    }
}
;
Bi.default = $y;
var hf = De && De.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Hl, "__esModule", {
    value: !0
});
const Ay = hf(Bi)
  , Ly = hf(cs);
let Uy = class ff {
    constructor(t, {headers: n={}, schema: r, fetch: s}={}) {
        this.url = t,
        this.headers = new Headers(n),
        this.schemaName = r,
        this.fetch = s
    }
    from(t) {
        const n = new URL(`${this.url}/${t}`);
        return new Ay.default(n,{
            headers: new Headers(this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        })
    }
    schema(t) {
        return new ff(this.url,{
            headers: this.headers,
            schema: t,
            fetch: this.fetch
        })
    }
    rpc(t, n={}, {head: r=!1, get: s=!1, count: i}={}) {
        var o;
        let l;
        const u = new URL(`${this.url}/rpc/${t}`);
        let c;
        r || s ? (l = r ? "HEAD" : "GET",
        Object.entries(n).filter( ([h,f]) => f !== void 0).map( ([h,f]) => [h, Array.isArray(f) ? `{${f.join(",")}}` : `${f}`]).forEach( ([h,f]) => {
            u.searchParams.append(h, f)
        }
        )) : (l = "POST",
        c = n);
        const d = new Headers(this.headers);
        return i && d.set("Prefer", `count=${i}`),
        new Ly.default({
            method: l,
            url: u,
            headers: d,
            schema: this.schemaName,
            body: c,
            fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch
        })
    }
}
;
Hl.default = Uy;
var or = De && De.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(ke, "__esModule", {
    value: !0
});
ke.PostgrestError = ke.PostgrestBuilder = ke.PostgrestTransformBuilder = ke.PostgrestFilterBuilder = ke.PostgrestQueryBuilder = ke.PostgrestClient = void 0;
const pf = or(Hl);
ke.PostgrestClient = pf.default;
const mf = or(Bi);
ke.PostgrestQueryBuilder = mf.default;
const gf = or(cs);
ke.PostgrestFilterBuilder = gf.default;
const yf = or(Wi);
ke.PostgrestTransformBuilder = yf.default;
const vf = or(Hi);
ke.PostgrestBuilder = vf.default;
const xf = or(Vi);
ke.PostgrestError = xf.default;
var Dy = ke.default = {
    PostgrestClient: pf.default,
    PostgrestQueryBuilder: mf.default,
    PostgrestFilterBuilder: gf.default,
    PostgrestTransformBuilder: yf.default,
    PostgrestBuilder: vf.default,
    PostgrestError: xf.default
};
const {PostgrestClient: My, PostgrestQueryBuilder: Bx, PostgrestFilterBuilder: Wx, PostgrestTransformBuilder: Hx, PostgrestBuilder: Vx, PostgrestError: Kx} = Dy;
class zy {
    static detectEnvironment() {
        var t;
        if (typeof WebSocket < "u")
            return {
                type: "native",
                constructor: WebSocket
            };
        if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
            return {
                type: "native",
                constructor: globalThis.WebSocket
            };
        if (typeof global < "u" && typeof global.WebSocket < "u")
            return {
                type: "native",
                constructor: global.WebSocket
            };
        if (typeof globalThis < "u" && typeof globalThis.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
            return {
                type: "cloudflare",
                error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
                workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
            };
        if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && (!((t = navigator.userAgent) === null || t === void 0) && t.includes("Vercel-Edge")))
            return {
                type: "unsupported",
                error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
                workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
            };
        if (typeof process < "u") {
            const n = process.versions;
            if (n && n.node) {
                const r = n.node
                  , s = parseInt(r.replace(/^v/, "").split(".")[0]);
                return s >= 22 ? typeof globalThis.WebSocket < "u" ? {
                    type: "native",
                    constructor: globalThis.WebSocket
                } : {
                    type: "unsupported",
                    error: `Node.js ${s} detected but native WebSocket not found.`,
                    workaround: "Provide a WebSocket implementation via the transport option."
                } : {
                    type: "unsupported",
                    error: `Node.js ${s} detected without native WebSocket support.`,
                    workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
                }
            }
        }
        return {
            type: "unsupported",
            error: "Unknown JavaScript runtime without WebSocket support.",
            workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
        }
    }
    static getWebSocketConstructor() {
        const t = this.detectEnvironment();
        if (t.constructor)
            return t.constructor;
        let n = t.error || "WebSocket not supported in this environment.";
        throw t.workaround && (n += `

Suggested solution: ${t.workaround}`),
        new Error(n)
    }
    static createWebSocket(t, n) {
        const r = this.getWebSocketConstructor();
        return new r(t,n)
    }
    static isWebSocketSupported() {
        try {
            const t = this.detectEnvironment();
            return t.type === "native" || t.type === "ws"
        } catch {
            return !1
        }
    }
}
const Fy = "2.15.5"
  , By = `realtime-js/${Fy}`
  , Wy = "1.0.0"
  , Oa = 1e4
  , Hy = 1e3
  , Vy = 100;
var Ir;
(function(e) {
    e[e.connecting = 0] = "connecting",
    e[e.open = 1] = "open",
    e[e.closing = 2] = "closing",
    e[e.closed = 3] = "closed"
}
)(Ir || (Ir = {}));
var te;
(function(e) {
    e.closed = "closed",
    e.errored = "errored",
    e.joined = "joined",
    e.joining = "joining",
    e.leaving = "leaving"
}
)(te || (te = {}));
var Ve;
(function(e) {
    e.close = "phx_close",
    e.error = "phx_error",
    e.join = "phx_join",
    e.reply = "phx_reply",
    e.leave = "phx_leave",
    e.access_token = "access_token"
}
)(Ve || (Ve = {}));
var Ra;
(function(e) {
    e.websocket = "websocket"
}
)(Ra || (Ra = {}));
var nn;
(function(e) {
    e.Connecting = "connecting",
    e.Open = "open",
    e.Closing = "closing",
    e.Closed = "closed"
}
)(nn || (nn = {}));
class Ky {
    constructor() {
        this.HEADER_LENGTH = 1
    }
    decode(t, n) {
        return t.constructor === ArrayBuffer ? n(this._binaryDecode(t)) : n(typeof t == "string" ? JSON.parse(t) : {})
    }
    _binaryDecode(t) {
        const n = new DataView(t)
          , r = new TextDecoder;
        return this._decodeBroadcast(t, n, r)
    }
    _decodeBroadcast(t, n, r) {
        const s = n.getUint8(1)
          , i = n.getUint8(2);
        let o = this.HEADER_LENGTH + 2;
        const l = r.decode(t.slice(o, o + s));
        o = o + s;
        const u = r.decode(t.slice(o, o + i));
        o = o + i;
        const c = JSON.parse(r.decode(t.slice(o, t.byteLength)));
        return {
            ref: null,
            topic: l,
            event: u,
            payload: c
        }
    }
}
class wf {
    constructor(t, n) {
        this.callback = t,
        this.timerCalc = n,
        this.timer = void 0,
        this.tries = 0,
        this.callback = t,
        this.timerCalc = n
    }
    reset() {
        this.tries = 0,
        clearTimeout(this.timer),
        this.timer = void 0
    }
    scheduleTimeout() {
        clearTimeout(this.timer),
        this.timer = setTimeout( () => {
            this.tries = this.tries + 1,
            this.callback()
        }
        , this.timerCalc(this.tries + 1))
    }
}
var z;
(function(e) {
    e.abstime = "abstime",
    e.bool = "bool",
    e.date = "date",
    e.daterange = "daterange",
    e.float4 = "float4",
    e.float8 = "float8",
    e.int2 = "int2",
    e.int4 = "int4",
    e.int4range = "int4range",
    e.int8 = "int8",
    e.int8range = "int8range",
    e.json = "json",
    e.jsonb = "jsonb",
    e.money = "money",
    e.numeric = "numeric",
    e.oid = "oid",
    e.reltime = "reltime",
    e.text = "text",
    e.time = "time",
    e.timestamp = "timestamp",
    e.timestamptz = "timestamptz",
    e.timetz = "timetz",
    e.tsrange = "tsrange",
    e.tstzrange = "tstzrange"
}
)(z || (z = {}));
const fc = (e, t, n={}) => {
    var r;
    const s = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
    return Object.keys(t).reduce( (i, o) => (i[o] = qy(o, e, t, s),
    i), {})
}
  , qy = (e, t, n, r) => {
    const s = t.find(l => l.name === e)
      , i = s == null ? void 0 : s.type
      , o = n[e];
    return i && !r.includes(i) ? bf(i, o) : Ia(o)
}
  , bf = (e, t) => {
    if (e.charAt(0) === "_") {
        const n = e.slice(1, e.length);
        return Yy(t, n)
    }
    switch (e) {
    case z.bool:
        return Gy(t);
    case z.float4:
    case z.float8:
    case z.int2:
    case z.int4:
    case z.int8:
    case z.numeric:
    case z.oid:
        return Jy(t);
    case z.json:
    case z.jsonb:
        return Qy(t);
    case z.timestamp:
        return Xy(t);
    case z.abstime:
    case z.date:
    case z.daterange:
    case z.int4range:
    case z.int8range:
    case z.money:
    case z.reltime:
    case z.text:
    case z.time:
    case z.timestamptz:
    case z.timetz:
    case z.tsrange:
    case z.tstzrange:
        return Ia(t);
    default:
        return Ia(t)
    }
}
  , Ia = e => e
  , Gy = e => {
    switch (e) {
    case "t":
        return !0;
    case "f":
        return !1;
    default:
        return e
    }
}
  , Jy = e => {
    if (typeof e == "string") {
        const t = parseFloat(e);
        if (!Number.isNaN(t))
            return t
    }
    return e
}
  , Qy = e => {
    if (typeof e == "string")
        try {
            return JSON.parse(e)
        } catch (t) {
            return console.log(`JSON parse error: ${t}`),
            e
        }
    return e
}
  , Yy = (e, t) => {
    if (typeof e != "string")
        return e;
    const n = e.length - 1
      , r = e[n];
    if (e[0] === "{" && r === "}") {
        let i;
        const o = e.slice(1, n);
        try {
            i = JSON.parse("[" + o + "]")
        } catch {
            i = o ? o.split(",") : []
        }
        return i.map(l => bf(t, l))
    }
    return e
}
  , Xy = e => typeof e == "string" ? e.replace(" ", "T") : e
  , _f = e => {
    let t = e;
    return t = t.replace(/^ws/i, "http"),
    t = t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""),
    t.replace(/\/+$/, "") + "/api/broadcast"
}
;
class No {
    constructor(t, n, r={}, s=Oa) {
        this.channel = t,
        this.event = n,
        this.payload = r,
        this.timeout = s,
        this.sent = !1,
        this.timeoutTimer = void 0,
        this.ref = "",
        this.receivedResp = null,
        this.recHooks = [],
        this.refEvent = null
    }
    resend(t) {
        this.timeout = t,
        this._cancelRefEvent(),
        this.ref = "",
        this.refEvent = null,
        this.receivedResp = null,
        this.sent = !1,
        this.send()
    }
    send() {
        this._hasReceived("timeout") || (this.startTimeout(),
        this.sent = !0,
        this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef()
        }))
    }
    updatePayload(t) {
        this.payload = Object.assign(Object.assign({}, this.payload), t)
    }
    receive(t, n) {
        var r;
        return this._hasReceived(t) && n((r = this.receivedResp) === null || r === void 0 ? void 0 : r.response),
        this.recHooks.push({
            status: t,
            callback: n
        }),
        this
    }
    startTimeout() {
        if (this.timeoutTimer)
            return;
        this.ref = this.channel.socket._makeRef(),
        this.refEvent = this.channel._replyEventName(this.ref);
        const t = n => {
            this._cancelRefEvent(),
            this._cancelTimeout(),
            this.receivedResp = n,
            this._matchReceive(n)
        }
        ;
        this.channel._on(this.refEvent, {}, t),
        this.timeoutTimer = setTimeout( () => {
            this.trigger("timeout", {})
        }
        , this.timeout)
    }
    trigger(t, n) {
        this.refEvent && this.channel._trigger(this.refEvent, {
            status: t,
            response: n
        })
    }
    destroy() {
        this._cancelRefEvent(),
        this._cancelTimeout()
    }
    _cancelRefEvent() {
        this.refEvent && this.channel._off(this.refEvent, {})
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer),
        this.timeoutTimer = void 0
    }
    _matchReceive({status: t, response: n}) {
        this.recHooks.filter(r => r.status === t).forEach(r => r.callback(n))
    }
    _hasReceived(t) {
        return this.receivedResp && this.receivedResp.status === t
    }
}
var pc;
(function(e) {
    e.SYNC = "sync",
    e.JOIN = "join",
    e.LEAVE = "leave"
}
)(pc || (pc = {}));
class $r {
    constructor(t, n) {
        this.channel = t,
        this.state = {},
        this.pendingDiffs = [],
        this.joinRef = null,
        this.enabled = !1,
        this.caller = {
            onJoin: () => {}
            ,
            onLeave: () => {}
            ,
            onSync: () => {}
        };
        const r = (n == null ? void 0 : n.events) || {
            state: "presence_state",
            diff: "presence_diff"
        };
        this.channel._on(r.state, {}, s => {
            const {onJoin: i, onLeave: o, onSync: l} = this.caller;
            this.joinRef = this.channel._joinRef(),
            this.state = $r.syncState(this.state, s, i, o),
            this.pendingDiffs.forEach(u => {
                this.state = $r.syncDiff(this.state, u, i, o)
            }
            ),
            this.pendingDiffs = [],
            l()
        }
        ),
        this.channel._on(r.diff, {}, s => {
            const {onJoin: i, onLeave: o, onSync: l} = this.caller;
            this.inPendingSyncState() ? this.pendingDiffs.push(s) : (this.state = $r.syncDiff(this.state, s, i, o),
            l())
        }
        ),
        this.onJoin( (s, i, o) => {
            this.channel._trigger("presence", {
                event: "join",
                key: s,
                currentPresences: i,
                newPresences: o
            })
        }
        ),
        this.onLeave( (s, i, o) => {
            this.channel._trigger("presence", {
                event: "leave",
                key: s,
                currentPresences: i,
                leftPresences: o
            })
        }
        ),
        this.onSync( () => {
            this.channel._trigger("presence", {
                event: "sync"
            })
        }
        )
    }
    static syncState(t, n, r, s) {
        const i = this.cloneDeep(t)
          , o = this.transformState(n)
          , l = {}
          , u = {};
        return this.map(i, (c, d) => {
            o[c] || (u[c] = d)
        }
        ),
        this.map(o, (c, d) => {
            const h = i[c];
            if (h) {
                const f = d.map(k => k.presence_ref)
                  , y = h.map(k => k.presence_ref)
                  , v = d.filter(k => y.indexOf(k.presence_ref) < 0)
                  , b = h.filter(k => f.indexOf(k.presence_ref) < 0);
                v.length > 0 && (l[c] = v),
                b.length > 0 && (u[c] = b)
            } else
                l[c] = d
        }
        ),
        this.syncDiff(i, {
            joins: l,
            leaves: u
        }, r, s)
    }
    static syncDiff(t, n, r, s) {
        const {joins: i, leaves: o} = {
            joins: this.transformState(n.joins),
            leaves: this.transformState(n.leaves)
        };
        return r || (r = () => {}
        ),
        s || (s = () => {}
        ),
        this.map(i, (l, u) => {
            var c;
            const d = (c = t[l]) !== null && c !== void 0 ? c : [];
            if (t[l] = this.cloneDeep(u),
            d.length > 0) {
                const h = t[l].map(y => y.presence_ref)
                  , f = d.filter(y => h.indexOf(y.presence_ref) < 0);
                t[l].unshift(...f)
            }
            r(l, d, u)
        }
        ),
        this.map(o, (l, u) => {
            let c = t[l];
            if (!c)
                return;
            const d = u.map(h => h.presence_ref);
            c = c.filter(h => d.indexOf(h.presence_ref) < 0),
            t[l] = c,
            s(l, c, u),
            c.length === 0 && delete t[l]
        }
        ),
        t
    }
    static map(t, n) {
        return Object.getOwnPropertyNames(t).map(r => n(r, t[r]))
    }
    static transformState(t) {
        return t = this.cloneDeep(t),
        Object.getOwnPropertyNames(t).reduce( (n, r) => {
            const s = t[r];
            return "metas"in s ? n[r] = s.metas.map(i => (i.presence_ref = i.phx_ref,
            delete i.phx_ref,
            delete i.phx_ref_prev,
            i)) : n[r] = s,
            n
        }
        , {})
    }
    static cloneDeep(t) {
        return JSON.parse(JSON.stringify(t))
    }
    onJoin(t) {
        this.caller.onJoin = t
    }
    onLeave(t) {
        this.caller.onLeave = t
    }
    onSync(t) {
        this.caller.onSync = t
    }
    inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef()
    }
}
var mc;
(function(e) {
    e.ALL = "*",
    e.INSERT = "INSERT",
    e.UPDATE = "UPDATE",
    e.DELETE = "DELETE"
}
)(mc || (mc = {}));
var Ar;
(function(e) {
    e.BROADCAST = "broadcast",
    e.PRESENCE = "presence",
    e.POSTGRES_CHANGES = "postgres_changes",
    e.SYSTEM = "system"
}
)(Ar || (Ar = {}));
var ct;
(function(e) {
    e.SUBSCRIBED = "SUBSCRIBED",
    e.TIMED_OUT = "TIMED_OUT",
    e.CLOSED = "CLOSED",
    e.CHANNEL_ERROR = "CHANNEL_ERROR"
}
)(ct || (ct = {}));
class Vl {
    constructor(t, n={
        config: {}
    }, r) {
        this.topic = t,
        this.params = n,
        this.socket = r,
        this.bindings = {},
        this.state = te.closed,
        this.joinedOnce = !1,
        this.pushBuffer = [],
        this.subTopic = t.replace(/^realtime:/i, ""),
        this.params.config = Object.assign({
            broadcast: {
                ack: !1,
                self: !1
            },
            presence: {
                key: "",
                enabled: !1
            },
            private: !1
        }, n.config),
        this.timeout = this.socket.timeout,
        this.joinPush = new No(this,Ve.join,this.params,this.timeout),
        this.rejoinTimer = new wf( () => this._rejoinUntilConnected(),this.socket.reconnectAfterMs),
        this.joinPush.receive("ok", () => {
            this.state = te.joined,
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach(s => s.send()),
            this.pushBuffer = []
        }
        ),
        this._onClose( () => {
            this.rejoinTimer.reset(),
            this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
            this.state = te.closed,
            this.socket._remove(this)
        }
        ),
        this._onError(s => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, s),
            this.state = te.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this.joinPush.receive("timeout", () => {
            this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout),
            this.state = te.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this.joinPush.receive("error", s => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, s),
            this.state = te.errored,
            this.rejoinTimer.scheduleTimeout())
        }
        ),
        this._on(Ve.reply, {}, (s, i) => {
            this._trigger(this._replyEventName(i), s)
        }
        ),
        this.presence = new $r(this),
        this.broadcastEndpointURL = _f(this.socket.endPoint),
        this.private = this.params.config.private || !1
    }
    subscribe(t, n=this.timeout) {
        var r, s, i;
        if (this.socket.isConnected() || this.socket.connect(),
        this.state == te.closed) {
            const {config: {broadcast: o, presence: l, private: u}} = this.params
              , c = (s = (r = this.bindings.postgres_changes) === null || r === void 0 ? void 0 : r.map(y => y.filter)) !== null && s !== void 0 ? s : []
              , d = !!this.bindings[Ar.PRESENCE] && this.bindings[Ar.PRESENCE].length > 0 || ((i = this.params.config.presence) === null || i === void 0 ? void 0 : i.enabled) === !0
              , h = {}
              , f = {
                broadcast: o,
                presence: Object.assign(Object.assign({}, l), {
                    enabled: d
                }),
                postgres_changes: c,
                private: u
            };
            this.socket.accessTokenValue && (h.access_token = this.socket.accessTokenValue),
            this._onError(y => t == null ? void 0 : t(ct.CHANNEL_ERROR, y)),
            this._onClose( () => t == null ? void 0 : t(ct.CLOSED)),
            this.updateJoinPayload(Object.assign({
                config: f
            }, h)),
            this.joinedOnce = !0,
            this._rejoin(n),
            this.joinPush.receive("ok", async ({postgres_changes: y}) => {
                var v;
                if (this.socket.setAuth(),
                y === void 0) {
                    t == null || t(ct.SUBSCRIBED);
                    return
                } else {
                    const b = this.bindings.postgres_changes
                      , k = (v = b == null ? void 0 : b.length) !== null && v !== void 0 ? v : 0
                      , g = [];
                    for (let m = 0; m < k; m++) {
                        const p = b[m]
                          , {filter: {event: _, schema: x, table: j, filter: S}} = p
                          , E = y && y[m];
                        if (E && E.event === _ && E.schema === x && E.table === j && E.filter === S)
                            g.push(Object.assign(Object.assign({}, p), {
                                id: E.id
                            }));
                        else {
                            this.unsubscribe(),
                            this.state = te.errored,
                            t == null || t(ct.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
                            return
                        }
                    }
                    this.bindings.postgres_changes = g,
                    t && t(ct.SUBSCRIBED);
                    return
                }
            }
            ).receive("error", y => {
                this.state = te.errored,
                t == null || t(ct.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(y).join(", ") || "error")))
            }
            ).receive("timeout", () => {
                t == null || t(ct.TIMED_OUT)
            }
            )
        }
        return this
    }
    presenceState() {
        return this.presence.state
    }
    async track(t, n={}) {
        return await this.send({
            type: "presence",
            event: "track",
            payload: t
        }, n.timeout || this.timeout)
    }
    async untrack(t={}) {
        return await this.send({
            type: "presence",
            event: "untrack"
        }, t)
    }
    on(t, n, r) {
        return this.state === te.joined && t === Ar.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),
        this.unsubscribe().then( () => this.subscribe())),
        this._on(t, n, r)
    }
    async send(t, n={}) {
        var r, s;
        if (!this._canPush() && t.type === "broadcast") {
            const {event: i, payload: o} = t
              , u = {
                method: "POST",
                headers: {
                    Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
                    apikey: this.socket.apiKey ? this.socket.apiKey : "",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: [{
                        topic: this.subTopic,
                        event: i,
                        payload: o,
                        private: this.private
                    }]
                })
            };
            try {
                const c = await this._fetchWithTimeout(this.broadcastEndpointURL, u, (r = n.timeout) !== null && r !== void 0 ? r : this.timeout);
                return await ((s = c.body) === null || s === void 0 ? void 0 : s.cancel()),
                c.ok ? "ok" : "error"
            } catch (c) {
                return c.name === "AbortError" ? "timed out" : "error"
            }
        } else
            return new Promise(i => {
                var o, l, u;
                const c = this._push(t.type, t, n.timeout || this.timeout);
                t.type === "broadcast" && !(!((u = (l = (o = this.params) === null || o === void 0 ? void 0 : o.config) === null || l === void 0 ? void 0 : l.broadcast) === null || u === void 0) && u.ack) && i("ok"),
                c.receive("ok", () => i("ok")),
                c.receive("error", () => i("error")),
                c.receive("timeout", () => i("timed out"))
            }
            )
    }
    updateJoinPayload(t) {
        this.joinPush.updatePayload(t)
    }
    unsubscribe(t=this.timeout) {
        this.state = te.leaving;
        const n = () => {
            this.socket.log("channel", `leave ${this.topic}`),
            this._trigger(Ve.close, "leave", this._joinRef())
        }
        ;
        this.joinPush.destroy();
        let r = null;
        return new Promise(s => {
            r = new No(this,Ve.leave,{},t),
            r.receive("ok", () => {
                n(),
                s("ok")
            }
            ).receive("timeout", () => {
                n(),
                s("timed out")
            }
            ).receive("error", () => {
                s("error")
            }
            ),
            r.send(),
            this._canPush() || r.trigger("ok", {})
        }
        ).finally( () => {
            r == null || r.destroy()
        }
        )
    }
    teardown() {
        this.pushBuffer.forEach(t => t.destroy()),
        this.pushBuffer = [],
        this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        this.state = te.closed,
        this.bindings = {}
    }
    async _fetchWithTimeout(t, n, r) {
        const s = new AbortController
          , i = setTimeout( () => s.abort(), r)
          , o = await this.socket.fetch(t, Object.assign(Object.assign({}, n), {
            signal: s.signal
        }));
        return clearTimeout(i),
        o
    }
    _push(t, n, r=this.timeout) {
        if (!this.joinedOnce)
            throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        let s = new No(this,t,n,r);
        return this._canPush() ? s.send() : this._addToPushBuffer(s),
        s
    }
    _addToPushBuffer(t) {
        if (t.startTimeout(),
        this.pushBuffer.push(t),
        this.pushBuffer.length > Vy) {
            const n = this.pushBuffer.shift();
            n && (n.destroy(),
            this.socket.log("channel", `discarded push due to buffer overflow: ${n.event}`, n.payload))
        }
    }
    _onMessage(t, n, r) {
        return n
    }
    _isMember(t) {
        return this.topic === t
    }
    _joinRef() {
        return this.joinPush.ref
    }
    _trigger(t, n, r) {
        var s, i;
        const o = t.toLocaleLowerCase()
          , {close: l, error: u, leave: c, join: d} = Ve;
        if (r && [l, u, c, d].indexOf(o) >= 0 && r !== this._joinRef())
            return;
        let f = this._onMessage(o, n, r);
        if (n && !f)
            throw "channel onMessage callbacks must return the payload, modified or unmodified";
        ["insert", "update", "delete"].includes(o) ? (s = this.bindings.postgres_changes) === null || s === void 0 || s.filter(y => {
            var v, b, k;
            return ((v = y.filter) === null || v === void 0 ? void 0 : v.event) === "*" || ((k = (b = y.filter) === null || b === void 0 ? void 0 : b.event) === null || k === void 0 ? void 0 : k.toLocaleLowerCase()) === o
        }
        ).map(y => y.callback(f, r)) : (i = this.bindings[o]) === null || i === void 0 || i.filter(y => {
            var v, b, k, g, m, p;
            if (["broadcast", "presence", "postgres_changes"].includes(o))
                if ("id"in y) {
                    const _ = y.id
                      , x = (v = y.filter) === null || v === void 0 ? void 0 : v.event;
                    return _ && ((b = n.ids) === null || b === void 0 ? void 0 : b.includes(_)) && (x === "*" || (x == null ? void 0 : x.toLocaleLowerCase()) === ((k = n.data) === null || k === void 0 ? void 0 : k.type.toLocaleLowerCase()))
                } else {
                    const _ = (m = (g = y == null ? void 0 : y.filter) === null || g === void 0 ? void 0 : g.event) === null || m === void 0 ? void 0 : m.toLocaleLowerCase();
                    return _ === "*" || _ === ((p = n == null ? void 0 : n.event) === null || p === void 0 ? void 0 : p.toLocaleLowerCase())
                }
            else
                return y.type.toLocaleLowerCase() === o
        }
        ).map(y => {
            if (typeof f == "object" && "ids"in f) {
                const v = f.data
                  , {schema: b, table: k, commit_timestamp: g, type: m, errors: p} = v;
                f = Object.assign(Object.assign({}, {
                    schema: b,
                    table: k,
                    commit_timestamp: g,
                    eventType: m,
                    new: {},
                    old: {},
                    errors: p
                }), this._getPayloadRecords(v))
            }
            y.callback(f, r)
        }
        )
    }
    _isClosed() {
        return this.state === te.closed
    }
    _isJoined() {
        return this.state === te.joined
    }
    _isJoining() {
        return this.state === te.joining
    }
    _isLeaving() {
        return this.state === te.leaving
    }
    _replyEventName(t) {
        return `chan_reply_${t}`
    }
    _on(t, n, r) {
        const s = t.toLocaleLowerCase()
          , i = {
            type: s,
            filter: n,
            callback: r
        };
        return this.bindings[s] ? this.bindings[s].push(i) : this.bindings[s] = [i],
        this
    }
    _off(t, n) {
        const r = t.toLocaleLowerCase();
        return this.bindings[r] && (this.bindings[r] = this.bindings[r].filter(s => {
            var i;
            return !(((i = s.type) === null || i === void 0 ? void 0 : i.toLocaleLowerCase()) === r && Vl.isEqual(s.filter, n))
        }
        )),
        this
    }
    static isEqual(t, n) {
        if (Object.keys(t).length !== Object.keys(n).length)
            return !1;
        for (const r in t)
            if (t[r] !== n[r])
                return !1;
        return !0
    }
    _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout(),
        this.socket.isConnected() && this._rejoin()
    }
    _onClose(t) {
        this._on(Ve.close, {}, t)
    }
    _onError(t) {
        this._on(Ve.error, {}, n => t(n))
    }
    _canPush() {
        return this.socket.isConnected() && this._isJoined()
    }
    _rejoin(t=this.timeout) {
        this._isLeaving() || (this.socket._leaveOpenTopic(this.topic),
        this.state = te.joining,
        this.joinPush.resend(t))
    }
    _getPayloadRecords(t) {
        const n = {
            new: {},
            old: {}
        };
        return (t.type === "INSERT" || t.type === "UPDATE") && (n.new = fc(t.columns, t.record)),
        (t.type === "UPDATE" || t.type === "DELETE") && (n.old = fc(t.columns, t.old_record)),
        n
    }
}
const Eo = () => {}
  , Rs = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100
}
  , Zy = [1e3, 2e3, 5e3, 1e4]
  , ev = 1e4
  , tv = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class nv {
    constructor(t, n) {
        var r;
        if (this.accessTokenValue = null,
        this.apiKey = null,
        this.channels = new Array,
        this.endPoint = "",
        this.httpEndpoint = "",
        this.headers = {},
        this.params = {},
        this.timeout = Oa,
        this.transport = null,
        this.heartbeatIntervalMs = Rs.HEARTBEAT_INTERVAL,
        this.heartbeatTimer = void 0,
        this.pendingHeartbeatRef = null,
        this.heartbeatCallback = Eo,
        this.ref = 0,
        this.reconnectTimer = null,
        this.logger = Eo,
        this.conn = null,
        this.sendBuffer = [],
        this.serializer = new Ky,
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        },
        this.accessToken = null,
        this._connectionState = "disconnected",
        this._wasManualDisconnect = !1,
        this._authPromise = null,
        this._resolveFetch = s => {
            let i;
            return s ? i = s : typeof fetch > "u" ? i = (...o) => us(async () => {
                const {default: l} = await Promise.resolve().then( () => ir);
                return {
                    default: l
                }
            }
            , void 0).then( ({default: l}) => l(...o)).catch(l => {
                throw new Error(`Failed to load @supabase/node-fetch: ${l.message}. This is required for HTTP requests in Node.js environments without native fetch.`)
            }
            ) : i = fetch,
            (...o) => i(...o)
        }
        ,
        !(!((r = n == null ? void 0 : n.params) === null || r === void 0) && r.apikey))
            throw new Error("API key is required to connect to Realtime");
        this.apiKey = n.params.apikey,
        this.endPoint = `${t}/${Ra.websocket}`,
        this.httpEndpoint = _f(t),
        this._initializeOptions(n),
        this._setupReconnectionTimer(),
        this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch)
    }
    connect() {
        if (!(this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected())) {
            if (this._setConnectionState("connecting"),
            this._setAuthSafely("connect"),
            this.transport)
                this.conn = new this.transport(this.endpointURL());
            else
                try {
                    this.conn = zy.createWebSocket(this.endpointURL())
                } catch (t) {
                    this._setConnectionState("disconnected");
                    const n = t.message;
                    throw n.includes("Node.js") ? new Error(`${n}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${n}`)
                }
            this._setupConnectionHandlers()
        }
    }
    endpointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: Wy
        }))
    }
    disconnect(t, n) {
        if (!this.isDisconnecting())
            if (this._setConnectionState("disconnecting", !0),
            this.conn) {
                const r = setTimeout( () => {
                    this._setConnectionState("disconnected")
                }
                , 100);
                this.conn.onclose = () => {
                    clearTimeout(r),
                    this._setConnectionState("disconnected")
                }
                ,
                t ? this.conn.close(t, n ?? "") : this.conn.close(),
                this._teardownConnection()
            } else
                this._setConnectionState("disconnected")
    }
    getChannels() {
        return this.channels
    }
    async removeChannel(t) {
        const n = await t.unsubscribe();
        return this.channels.length === 0 && this.disconnect(),
        n
    }
    async removeAllChannels() {
        const t = await Promise.all(this.channels.map(n => n.unsubscribe()));
        return this.channels = [],
        this.disconnect(),
        t
    }
    log(t, n, r) {
        this.logger(t, n, r)
    }
    connectionState() {
        switch (this.conn && this.conn.readyState) {
        case Ir.connecting:
            return nn.Connecting;
        case Ir.open:
            return nn.Open;
        case Ir.closing:
            return nn.Closing;
        default:
            return nn.Closed
        }
    }
    isConnected() {
        return this.connectionState() === nn.Open
    }
    isConnecting() {
        return this._connectionState === "connecting"
    }
    isDisconnecting() {
        return this._connectionState === "disconnecting"
    }
    channel(t, n={
        config: {}
    }) {
        const r = `realtime:${t}`
          , s = this.getChannels().find(i => i.topic === r);
        if (s)
            return s;
        {
            const i = new Vl(`realtime:${t}`,n,this);
            return this.channels.push(i),
            i
        }
    }
    push(t) {
        const {topic: n, event: r, payload: s, ref: i} = t
          , o = () => {
            this.encode(t, l => {
                var u;
                (u = this.conn) === null || u === void 0 || u.send(l)
            }
            )
        }
        ;
        this.log("push", `${n} ${r} (${i})`, s),
        this.isConnected() ? o() : this.sendBuffer.push(o)
    }
    async setAuth(t=null) {
        this._authPromise = this._performAuth(t);
        try {
            await this._authPromise
        } finally {
            this._authPromise = null
        }
    }
    async sendHeartbeat() {
        var t;
        if (!this.isConnected()) {
            try {
                this.heartbeatCallback("disconnected")
            } catch (n) {
                this.log("error", "error in heartbeat callback", n)
            }
            return
        }
        if (this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null,
            this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
            try {
                this.heartbeatCallback("timeout")
            } catch (n) {
                this.log("error", "error in heartbeat callback", n)
            }
            this._wasManualDisconnect = !1,
            (t = this.conn) === null || t === void 0 || t.close(Hy, "heartbeat timeout"),
            setTimeout( () => {
                var n;
                this.isConnected() || (n = this.reconnectTimer) === null || n === void 0 || n.scheduleTimeout()
            }
            , Rs.HEARTBEAT_TIMEOUT_FALLBACK);
            return
        }
        this.pendingHeartbeatRef = this._makeRef(),
        this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.pendingHeartbeatRef
        });
        try {
            this.heartbeatCallback("sent")
        } catch (n) {
            this.log("error", "error in heartbeat callback", n)
        }
        this._setAuthSafely("heartbeat")
    }
    onHeartbeat(t) {
        this.heartbeatCallback = t
    }
    flushSendBuffer() {
        this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(t => t()),
        this.sendBuffer = [])
    }
    _makeRef() {
        let t = this.ref + 1;
        return t === this.ref ? this.ref = 0 : this.ref = t,
        this.ref.toString()
    }
    _leaveOpenTopic(t) {
        let n = this.channels.find(r => r.topic === t && (r._isJoined() || r._isJoining()));
        n && (this.log("transport", `leaving duplicate topic "${t}"`),
        n.unsubscribe())
    }
    _remove(t) {
        this.channels = this.channels.filter(n => n.topic !== t.topic)
    }
    _onConnMessage(t) {
        this.decode(t.data, n => {
            if (n.topic === "phoenix" && n.event === "phx_reply")
                try {
                    this.heartbeatCallback(n.payload.status === "ok" ? "ok" : "error")
                } catch (c) {
                    this.log("error", "error in heartbeat callback", c)
                }
            n.ref && n.ref === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null);
            const {topic: r, event: s, payload: i, ref: o} = n
              , l = o ? `(${o})` : ""
              , u = i.status || "";
            this.log("receive", `${u} ${r} ${s} ${l}`.trim(), i),
            this.channels.filter(c => c._isMember(r)).forEach(c => c._trigger(s, i, o)),
            this._triggerStateCallbacks("message", n)
        }
        )
    }
    _clearTimer(t) {
        var n;
        t === "heartbeat" && this.heartbeatTimer ? (clearInterval(this.heartbeatTimer),
        this.heartbeatTimer = void 0) : t === "reconnect" && ((n = this.reconnectTimer) === null || n === void 0 || n.reset())
    }
    _clearAllTimers() {
        this._clearTimer("heartbeat"),
        this._clearTimer("reconnect")
    }
    _setupConnectionHandlers() {
        this.conn && ("binaryType"in this.conn && (this.conn.binaryType = "arraybuffer"),
        this.conn.onopen = () => this._onConnOpen(),
        this.conn.onerror = t => this._onConnError(t),
        this.conn.onmessage = t => this._onConnMessage(t),
        this.conn.onclose = t => this._onConnClose(t))
    }
    _teardownConnection() {
        this.conn && (this.conn.onopen = null,
        this.conn.onerror = null,
        this.conn.onmessage = null,
        this.conn.onclose = null,
        this.conn = null),
        this._clearAllTimers(),
        this.channels.forEach(t => t.teardown())
    }
    _onConnOpen() {
        this._setConnectionState("connected"),
        this.log("transport", `connected to ${this.endpointURL()}`),
        this.flushSendBuffer(),
        this._clearTimer("reconnect"),
        this.worker ? this.workerRef || this._startWorkerHeartbeat() : this._startHeartbeat(),
        this._triggerStateCallbacks("open")
    }
    _startHeartbeat() {
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.heartbeatTimer = setInterval( () => this.sendHeartbeat(), this.heartbeatIntervalMs)
    }
    _startWorkerHeartbeat() {
        this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
        const t = this._workerObjectUrl(this.workerUrl);
        this.workerRef = new Worker(t),
        this.workerRef.onerror = n => {
            this.log("worker", "worker error", n.message),
            this.workerRef.terminate()
        }
        ,
        this.workerRef.onmessage = n => {
            n.data.event === "keepAlive" && this.sendHeartbeat()
        }
        ,
        this.workerRef.postMessage({
            event: "start",
            interval: this.heartbeatIntervalMs
        })
    }
    _onConnClose(t) {
        var n;
        this._setConnectionState("disconnected"),
        this.log("transport", "close", t),
        this._triggerChanError(),
        this._clearTimer("heartbeat"),
        this._wasManualDisconnect || (n = this.reconnectTimer) === null || n === void 0 || n.scheduleTimeout(),
        this._triggerStateCallbacks("close", t)
    }
    _onConnError(t) {
        this._setConnectionState("disconnected"),
        this.log("transport", `${t}`),
        this._triggerChanError(),
        this._triggerStateCallbacks("error", t)
    }
    _triggerChanError() {
        this.channels.forEach(t => t._trigger(Ve.error))
    }
    _appendParams(t, n) {
        if (Object.keys(n).length === 0)
            return t;
        const r = t.match(/\?/) ? "&" : "?"
          , s = new URLSearchParams(n);
        return `${t}${r}${s}`
    }
    _workerObjectUrl(t) {
        let n;
        if (t)
            n = t;
        else {
            const r = new Blob([tv],{
                type: "application/javascript"
            });
            n = URL.createObjectURL(r)
        }
        return n
    }
    _setConnectionState(t, n=!1) {
        this._connectionState = t,
        t === "connecting" ? this._wasManualDisconnect = !1 : t === "disconnecting" && (this._wasManualDisconnect = n)
    }
    async _performAuth(t=null) {
        let n;
        t ? n = t : this.accessToken ? n = await this.accessToken() : n = this.accessTokenValue,
        this.accessTokenValue != n && (this.accessTokenValue = n,
        this.channels.forEach(r => {
            const s = {
                access_token: n,
                version: By
            };
            n && r.updateJoinPayload(s),
            r.joinedOnce && r._isJoined() && r._push(Ve.access_token, {
                access_token: n
            })
        }
        ))
    }
    async _waitForAuthIfNeeded() {
        this._authPromise && await this._authPromise
    }
    _setAuthSafely(t="general") {
        this.setAuth().catch(n => {
            this.log("error", `error setting auth in ${t}`, n)
        }
        )
    }
    _triggerStateCallbacks(t, n) {
        try {
            this.stateChangeCallbacks[t].forEach(r => {
                try {
                    r(n)
                } catch (s) {
                    this.log("error", `error in ${t} callback`, s)
                }
            }
            )
        } catch (r) {
            this.log("error", `error triggering ${t} callbacks`, r)
        }
    }
    _setupReconnectionTimer() {
        this.reconnectTimer = new wf(async () => {
            setTimeout(async () => {
                await this._waitForAuthIfNeeded(),
                this.isConnected() || this.connect()
            }
            , Rs.RECONNECT_DELAY)
        }
        ,this.reconnectAfterMs)
    }
    _initializeOptions(t) {
        var n, r, s, i, o, l, u, c, d;
        if (this.transport = (n = t == null ? void 0 : t.transport) !== null && n !== void 0 ? n : null,
        this.timeout = (r = t == null ? void 0 : t.timeout) !== null && r !== void 0 ? r : Oa,
        this.heartbeatIntervalMs = (s = t == null ? void 0 : t.heartbeatIntervalMs) !== null && s !== void 0 ? s : Rs.HEARTBEAT_INTERVAL,
        this.worker = (i = t == null ? void 0 : t.worker) !== null && i !== void 0 ? i : !1,
        this.accessToken = (o = t == null ? void 0 : t.accessToken) !== null && o !== void 0 ? o : null,
        this.heartbeatCallback = (l = t == null ? void 0 : t.heartbeatCallback) !== null && l !== void 0 ? l : Eo,
        t != null && t.params && (this.params = t.params),
        t != null && t.logger && (this.logger = t.logger),
        (t != null && t.logLevel || t != null && t.log_level) && (this.logLevel = t.logLevel || t.log_level,
        this.params = Object.assign(Object.assign({}, this.params), {
            log_level: this.logLevel
        })),
        this.reconnectAfterMs = (u = t == null ? void 0 : t.reconnectAfterMs) !== null && u !== void 0 ? u : h => Zy[h - 1] || ev,
        this.encode = (c = t == null ? void 0 : t.encode) !== null && c !== void 0 ? c : (h, f) => f(JSON.stringify(h)),
        this.decode = (d = t == null ? void 0 : t.decode) !== null && d !== void 0 ? d : this.serializer.decode.bind(this.serializer),
        this.worker) {
            if (typeof window < "u" && !window.Worker)
                throw new Error("Web Worker is not supported");
            this.workerUrl = t == null ? void 0 : t.workerUrl
        }
    }
}
class Kl extends Error {
    constructor(t) {
        super(t),
        this.__isStorageError = !0,
        this.name = "StorageError"
    }
}
function ne(e) {
    return typeof e == "object" && e !== null && "__isStorageError"in e
}
class rv extends Kl {
    constructor(t, n, r) {
        super(t),
        this.name = "StorageApiError",
        this.status = n,
        this.statusCode = r
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            statusCode: this.statusCode
        }
    }
}
class $a extends Kl {
    constructor(t, n) {
        super(t),
        this.name = "StorageUnknownError",
        this.originalError = n
    }
}
var sv = function(e, t, n, r) {
    function s(i) {
        return i instanceof n ? i : new n(function(o) {
            o(i)
        }
        )
    }
    return new (n || (n = Promise))(function(i, o) {
        function l(d) {
            try {
                c(r.next(d))
            } catch (h) {
                o(h)
            }
        }
        function u(d) {
            try {
                c(r.throw(d))
            } catch (h) {
                o(h)
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(l, u)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
};
const kf = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = (...n) => us(async () => {
        const {default: r} = await Promise.resolve().then( () => ir);
        return {
            default: r
        }
    }
    , void 0).then( ({default: r}) => r(...n)) : t = fetch,
    (...n) => t(...n)
}
  , iv = () => sv(void 0, void 0, void 0, function*() {
    return typeof Response > "u" ? (yield us( () => Promise.resolve().then( () => ir), void 0)).Response : Response
})
  , Aa = e => {
    if (Array.isArray(e))
        return e.map(n => Aa(n));
    if (typeof e == "function" || e !== Object(e))
        return e;
    const t = {};
    return Object.entries(e).forEach( ([n,r]) => {
        const s = n.replace(/([-_][a-z])/gi, i => i.toUpperCase().replace(/[-_]/g, ""));
        t[s] = Aa(r)
    }
    ),
    t
}
  , ov = e => {
    if (typeof e != "object" || e === null)
        return !1;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
;
var yn = function(e, t, n, r) {
    function s(i) {
        return i instanceof n ? i : new n(function(o) {
            o(i)
        }
        )
    }
    return new (n || (n = Promise))(function(i, o) {
        function l(d) {
            try {
                c(r.next(d))
            } catch (h) {
                o(h)
            }
        }
        function u(d) {
            try {
                c(r.throw(d))
            } catch (h) {
                o(h)
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(l, u)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
};
const Co = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
  , av = (e, t, n) => yn(void 0, void 0, void 0, function*() {
    const r = yield iv();
    e instanceof r && !(n != null && n.noResolveJson) ? e.json().then(s => {
        const i = e.status || 500
          , o = (s == null ? void 0 : s.statusCode) || i + "";
        t(new rv(Co(s),i,o))
    }
    ).catch(s => {
        t(new $a(Co(s),s))
    }
    ) : t(new $a(Co(e),e))
})
  , lv = (e, t, n, r) => {
    const s = {
        method: e,
        headers: (t == null ? void 0 : t.headers) || {}
    };
    return e === "GET" || !r ? s : (ov(r) ? (s.headers = Object.assign({
        "Content-Type": "application/json"
    }, t == null ? void 0 : t.headers),
    s.body = JSON.stringify(r)) : s.body = r,
    t != null && t.duplex && (s.duplex = t.duplex),
    Object.assign(Object.assign({}, s), n))
}
;
function ds(e, t, n, r, s, i) {
    return yn(this, void 0, void 0, function*() {
        return new Promise( (o, l) => {
            e(n, lv(t, r, s, i)).then(u => {
                if (!u.ok)
                    throw u;
                return r != null && r.noResolveJson ? u : u.json()
            }
            ).then(u => o(u)).catch(u => av(u, l, r))
        }
        )
    })
}
function bi(e, t, n, r) {
    return yn(this, void 0, void 0, function*() {
        return ds(e, "GET", t, n, r)
    })
}
function rt(e, t, n, r, s) {
    return yn(this, void 0, void 0, function*() {
        return ds(e, "POST", t, r, s, n)
    })
}
function La(e, t, n, r, s) {
    return yn(this, void 0, void 0, function*() {
        return ds(e, "PUT", t, r, s, n)
    })
}
function uv(e, t, n, r) {
    return yn(this, void 0, void 0, function*() {
        return ds(e, "HEAD", t, Object.assign(Object.assign({}, n), {
            noResolveJson: !0
        }), r)
    })
}
function jf(e, t, n, r, s) {
    return yn(this, void 0, void 0, function*() {
        return ds(e, "DELETE", t, r, s, n)
    })
}
var ge = function(e, t, n, r) {
    function s(i) {
        return i instanceof n ? i : new n(function(o) {
            o(i)
        }
        )
    }
    return new (n || (n = Promise))(function(i, o) {
        function l(d) {
            try {
                c(r.next(d))
            } catch (h) {
                o(h)
            }
        }
        function u(d) {
            try {
                c(r.throw(d))
            } catch (h) {
                o(h)
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(l, u)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
};
const cv = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: "name",
        order: "asc"
    }
}
  , gc = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1
};
class dv {
    constructor(t, n={}, r, s) {
        this.shouldThrowOnError = !1,
        this.url = t,
        this.headers = n,
        this.bucketId = r,
        this.fetch = kf(s)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    uploadOrUpdate(t, n, r, s) {
        return ge(this, void 0, void 0, function*() {
            try {
                let i;
                const o = Object.assign(Object.assign({}, gc), s);
                let l = Object.assign(Object.assign({}, this.headers), t === "POST" && {
                    "x-upsert": String(o.upsert)
                });
                const u = o.metadata;
                typeof Blob < "u" && r instanceof Blob ? (i = new FormData,
                i.append("cacheControl", o.cacheControl),
                u && i.append("metadata", this.encodeMetadata(u)),
                i.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (i = r,
                i.append("cacheControl", o.cacheControl),
                u && i.append("metadata", this.encodeMetadata(u))) : (i = r,
                l["cache-control"] = `max-age=${o.cacheControl}`,
                l["content-type"] = o.contentType,
                u && (l["x-metadata"] = this.toBase64(this.encodeMetadata(u)))),
                s != null && s.headers && (l = Object.assign(Object.assign({}, l), s.headers));
                const c = this._removeEmptyFolders(n)
                  , d = this._getFinalPath(c)
                  , h = yield(t == "PUT" ? La : rt)(this.fetch, `${this.url}/object/${d}`, i, Object.assign({
                    headers: l
                }, o != null && o.duplex ? {
                    duplex: o.duplex
                } : {}));
                return {
                    data: {
                        path: c,
                        id: h.Id,
                        fullPath: h.Key
                    },
                    error: null
                }
            } catch (i) {
                if (this.shouldThrowOnError)
                    throw i;
                if (ne(i))
                    return {
                        data: null,
                        error: i
                    };
                throw i
            }
        })
    }
    upload(t, n, r) {
        return ge(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("POST", t, n, r)
        })
    }
    uploadToSignedUrl(t, n, r, s) {
        return ge(this, void 0, void 0, function*() {
            const i = this._removeEmptyFolders(t)
              , o = this._getFinalPath(i)
              , l = new URL(this.url + `/object/upload/sign/${o}`);
            l.searchParams.set("token", n);
            try {
                let u;
                const c = Object.assign({
                    upsert: gc.upsert
                }, s)
                  , d = Object.assign(Object.assign({}, this.headers), {
                    "x-upsert": String(c.upsert)
                });
                typeof Blob < "u" && r instanceof Blob ? (u = new FormData,
                u.append("cacheControl", c.cacheControl),
                u.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (u = r,
                u.append("cacheControl", c.cacheControl)) : (u = r,
                d["cache-control"] = `max-age=${c.cacheControl}`,
                d["content-type"] = c.contentType);
                const h = yield La(this.fetch, l.toString(), u, {
                    headers: d
                });
                return {
                    data: {
                        path: i,
                        fullPath: h.Key
                    },
                    error: null
                }
            } catch (u) {
                if (this.shouldThrowOnError)
                    throw u;
                if (ne(u))
                    return {
                        data: null,
                        error: u
                    };
                throw u
            }
        })
    }
    createSignedUploadUrl(t, n) {
        return ge(this, void 0, void 0, function*() {
            try {
                let r = this._getFinalPath(t);
                const s = Object.assign({}, this.headers);
                n != null && n.upsert && (s["x-upsert"] = "true");
                const i = yield rt(this.fetch, `${this.url}/object/upload/sign/${r}`, {}, {
                    headers: s
                })
                  , o = new URL(this.url + i.url)
                  , l = o.searchParams.get("token");
                if (!l)
                    throw new Kl("No token returned by API");
                return {
                    data: {
                        signedUrl: o.toString(),
                        path: t,
                        token: l
                    },
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (ne(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    update(t, n, r) {
        return ge(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("PUT", t, n, r)
        })
    }
    move(t, n, r) {
        return ge(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield rt(this.fetch, `${this.url}/object/move`, {
                        bucketId: this.bucketId,
                        sourceKey: t,
                        destinationKey: n,
                        destinationBucket: r == null ? void 0 : r.destinationBucket
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if (ne(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    copy(t, n, r) {
        return ge(this, void 0, void 0, function*() {
            try {
                return {
                    data: {
                        path: (yield rt(this.fetch, `${this.url}/object/copy`, {
                            bucketId: this.bucketId,
                            sourceKey: t,
                            destinationKey: n,
                            destinationBucket: r == null ? void 0 : r.destinationBucket
                        }, {
                            headers: this.headers
                        })).Key
                    },
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if (ne(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    createSignedUrl(t, n, r) {
        return ge(this, void 0, void 0, function*() {
            try {
                let s = this._getFinalPath(t)
                  , i = yield rt(this.fetch, `${this.url}/object/sign/${s}`, Object.assign({
                    expiresIn: n
                }, r != null && r.transform ? {
                    transform: r.transform
                } : {}), {
                    headers: this.headers
                });
                const o = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
                return i = {
                    signedUrl: encodeURI(`${this.url}${i.signedURL}${o}`)
                },
                {
                    data: i,
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if (ne(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    createSignedUrls(t, n, r) {
        return ge(this, void 0, void 0, function*() {
            try {
                const s = yield rt(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                    expiresIn: n,
                    paths: t
                }, {
                    headers: this.headers
                })
                  , i = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
                return {
                    data: s.map(o => Object.assign(Object.assign({}, o), {
                        signedUrl: o.signedURL ? encodeURI(`${this.url}${o.signedURL}${i}`) : null
                    })),
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if (ne(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    download(t, n) {
        return ge(this, void 0, void 0, function*() {
            const s = typeof (n == null ? void 0 : n.transform) < "u" ? "render/image/authenticated" : "object"
              , i = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {})
              , o = i ? `?${i}` : "";
            try {
                const l = this._getFinalPath(t);
                return {
                    data: yield(yield bi(this.fetch, `${this.url}/${s}/${l}${o}`, {
                        headers: this.headers,
                        noResolveJson: !0
                    })).blob(),
                    error: null
                }
            } catch (l) {
                if (this.shouldThrowOnError)
                    throw l;
                if (ne(l))
                    return {
                        data: null,
                        error: l
                    };
                throw l
            }
        })
    }
    info(t) {
        return ge(this, void 0, void 0, function*() {
            const n = this._getFinalPath(t);
            try {
                const r = yield bi(this.fetch, `${this.url}/object/info/${n}`, {
                    headers: this.headers
                });
                return {
                    data: Aa(r),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (ne(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    exists(t) {
        return ge(this, void 0, void 0, function*() {
            const n = this._getFinalPath(t);
            try {
                return yield uv(this.fetch, `${this.url}/object/${n}`, {
                    headers: this.headers
                }),
                {
                    data: !0,
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (ne(r) && r instanceof $a) {
                    const s = r.originalError;
                    if ([400, 404].includes(s == null ? void 0 : s.status))
                        return {
                            data: !1,
                            error: r
                        }
                }
                throw r
            }
        })
    }
    getPublicUrl(t, n) {
        const r = this._getFinalPath(t)
          , s = []
          , i = n != null && n.download ? `download=${n.download === !0 ? "" : n.download}` : "";
        i !== "" && s.push(i);
        const l = typeof (n == null ? void 0 : n.transform) < "u" ? "render/image" : "object"
          , u = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {});
        u !== "" && s.push(u);
        let c = s.join("&");
        return c !== "" && (c = `?${c}`),
        {
            data: {
                publicUrl: encodeURI(`${this.url}/${l}/public/${r}${c}`)
            }
        }
    }
    remove(t) {
        return ge(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield jf(this.fetch, `${this.url}/object/${this.bucketId}`, {
                        prefixes: t
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if (ne(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    list(t, n, r) {
        return ge(this, void 0, void 0, function*() {
            try {
                const s = Object.assign(Object.assign(Object.assign({}, cv), n), {
                    prefix: t || ""
                });
                return {
                    data: yield rt(this.fetch, `${this.url}/object/list/${this.bucketId}`, s, {
                        headers: this.headers
                    }, r),
                    error: null
                }
            } catch (s) {
                if (this.shouldThrowOnError)
                    throw s;
                if (ne(s))
                    return {
                        data: null,
                        error: s
                    };
                throw s
            }
        })
    }
    listV2(t, n) {
        return ge(this, void 0, void 0, function*() {
            try {
                const r = Object.assign({}, t);
                return {
                    data: yield rt(this.fetch, `${this.url}/object/list-v2/${this.bucketId}`, r, {
                        headers: this.headers
                    }, n),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (ne(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    encodeMetadata(t) {
        return JSON.stringify(t)
    }
    toBase64(t) {
        return typeof Buffer < "u" ? Buffer.from(t).toString("base64") : btoa(t)
    }
    _getFinalPath(t) {
        return `${this.bucketId}/${t.replace(/^\/+/, "")}`
    }
    _removeEmptyFolders(t) {
        return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
    }
    transformOptsToQueryString(t) {
        const n = [];
        return t.width && n.push(`width=${t.width}`),
        t.height && n.push(`height=${t.height}`),
        t.resize && n.push(`resize=${t.resize}`),
        t.format && n.push(`format=${t.format}`),
        t.quality && n.push(`quality=${t.quality}`),
        n.join("&")
    }
}
const hv = "2.12.1"
  , fv = {
    "X-Client-Info": `storage-js/${hv}`
};
var xn = function(e, t, n, r) {
    function s(i) {
        return i instanceof n ? i : new n(function(o) {
            o(i)
        }
        )
    }
    return new (n || (n = Promise))(function(i, o) {
        function l(d) {
            try {
                c(r.next(d))
            } catch (h) {
                o(h)
            }
        }
        function u(d) {
            try {
                c(r.throw(d))
            } catch (h) {
                o(h)
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(l, u)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
};
class pv {
    constructor(t, n={}, r, s) {
        this.shouldThrowOnError = !1;
        const i = new URL(t);
        s != null && s.useNewHostname && /supabase\.(co|in|red)$/.test(i.hostname) && !i.hostname.includes("storage.supabase.") && (i.hostname = i.hostname.replace("supabase.", "storage.supabase.")),
        this.url = i.href,
        this.headers = Object.assign(Object.assign({}, fv), n),
        this.fetch = kf(r)
    }
    throwOnError() {
        return this.shouldThrowOnError = !0,
        this
    }
    listBuckets() {
        return xn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield bi(this.fetch, `${this.url}/bucket`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (t) {
                if (this.shouldThrowOnError)
                    throw t;
                if (ne(t))
                    return {
                        data: null,
                        error: t
                    };
                throw t
            }
        })
    }
    getBucket(t) {
        return xn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield bi(this.fetch, `${this.url}/bucket/${t}`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if (ne(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    createBucket(t, n={
        public: !1
    }) {
        return xn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield rt(this.fetch, `${this.url}/bucket`, {
                        id: t,
                        name: t,
                        type: n.type,
                        public: n.public,
                        file_size_limit: n.fileSizeLimit,
                        allowed_mime_types: n.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (ne(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    updateBucket(t, n) {
        return xn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield La(this.fetch, `${this.url}/bucket/${t}`, {
                        id: t,
                        name: t,
                        public: n.public,
                        file_size_limit: n.fileSizeLimit,
                        allowed_mime_types: n.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (this.shouldThrowOnError)
                    throw r;
                if (ne(r))
                    return {
                        data: null,
                        error: r
                    };
                throw r
            }
        })
    }
    emptyBucket(t) {
        return xn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield rt(this.fetch, `${this.url}/bucket/${t}/empty`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if (ne(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
    deleteBucket(t) {
        return xn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield jf(this.fetch, `${this.url}/bucket/${t}`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (this.shouldThrowOnError)
                    throw n;
                if (ne(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        })
    }
}
class mv extends pv {
    constructor(t, n={}, r, s) {
        super(t, n, r, s)
    }
    from(t) {
        return new dv(this.url,this.headers,t,this.fetch)
    }
}
const gv = "2.57.4";
let _r = "";
typeof Deno < "u" ? _r = "deno" : typeof document < "u" ? _r = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? _r = "react-native" : _r = "node";
const yv = {
    "X-Client-Info": `supabase-js-${_r}/${gv}`
}
  , vv = {
    headers: yv
}
  , xv = {
    schema: "public"
}
  , wv = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit"
}
  , bv = {};
var _v = function(e, t, n, r) {
    function s(i) {
        return i instanceof n ? i : new n(function(o) {
            o(i)
        }
        )
    }
    return new (n || (n = Promise))(function(i, o) {
        function l(d) {
            try {
                c(r.next(d))
            } catch (h) {
                o(h)
            }
        }
        function u(d) {
            try {
                c(r.throw(d))
            } catch (h) {
                o(h)
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(l, u)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
};
const kv = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = uf : t = fetch,
    (...n) => t(...n)
}
  , jv = () => typeof Headers > "u" ? cf : Headers
  , Sv = (e, t, n) => {
    const r = kv(n)
      , s = jv();
    return (i, o) => _v(void 0, void 0, void 0, function*() {
        var l;
        const u = (l = yield t()) !== null && l !== void 0 ? l : e;
        let c = new s(o == null ? void 0 : o.headers);
        return c.has("apikey") || c.set("apikey", e),
        c.has("Authorization") || c.set("Authorization", `Bearer ${u}`),
        r(i, Object.assign(Object.assign({}, o), {
            headers: c
        }))
    })
}
;
var Nv = function(e, t, n, r) {
    function s(i) {
        return i instanceof n ? i : new n(function(o) {
            o(i)
        }
        )
    }
    return new (n || (n = Promise))(function(i, o) {
        function l(d) {
            try {
                c(r.next(d))
            } catch (h) {
                o(h)
            }
        }
        function u(d) {
            try {
                c(r.throw(d))
            } catch (h) {
                o(h)
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(l, u)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
};
function Ev(e) {
    return e.endsWith("/") ? e : e + "/"
}
function Cv(e, t) {
    var n, r;
    const {db: s, auth: i, realtime: o, global: l} = e
      , {db: u, auth: c, realtime: d, global: h} = t
      , f = {
        db: Object.assign(Object.assign({}, u), s),
        auth: Object.assign(Object.assign({}, c), i),
        realtime: Object.assign(Object.assign({}, d), o),
        storage: {},
        global: Object.assign(Object.assign(Object.assign({}, h), l), {
            headers: Object.assign(Object.assign({}, (n = h == null ? void 0 : h.headers) !== null && n !== void 0 ? n : {}), (r = l == null ? void 0 : l.headers) !== null && r !== void 0 ? r : {})
        }),
        accessToken: () => Nv(this, void 0, void 0, function*() {
            return ""
        })
    };
    return e.accessToken ? f.accessToken = e.accessToken : delete f.accessToken,
    f
}
function Pv(e) {
    const t = e == null ? void 0 : e.trim();
    if (!t)
        throw new Error("supabaseUrl is required.");
    if (!t.match(/^https?:\/\//i))
        throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
    try {
        return new URL(Ev(t))
    } catch {
        throw Error("Invalid supabaseUrl: Provided URL is malformed.")
    }
}
const Sf = "2.71.1"
  , Sn = 30 * 1e3
  , Ua = 3
  , Po = Ua * Sn
  , Tv = "http://localhost:9999"
  , Ov = "supabase.auth.token"
  , Rv = {
    "X-Client-Info": `gotrue-js/${Sf}`
}
  , Da = "X-Supabase-Api-Version"
  , Nf = {
    "2024-01-01": {
        timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
        name: "2024-01-01"
    }
}
  , Iv = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i
  , $v = 10 * 60 * 1e3;
class ql extends Error {
    constructor(t, n, r) {
        super(t),
        this.__isAuthError = !0,
        this.name = "AuthError",
        this.status = n,
        this.code = r
    }
}
function I(e) {
    return typeof e == "object" && e !== null && "__isAuthError"in e
}
class Av extends ql {
    constructor(t, n, r) {
        super(t, n, r),
        this.name = "AuthApiError",
        this.status = n,
        this.code = r
    }
}
function Lv(e) {
    return I(e) && e.name === "AuthApiError"
}
class Ef extends ql {
    constructor(t, n) {
        super(t),
        this.name = "AuthUnknownError",
        this.originalError = n
    }
}
class qt extends ql {
    constructor(t, n, r, s) {
        super(t, r, s),
        this.name = n,
        this.status = r
    }
}
class jt extends qt {
    constructor() {
        super("Auth session missing!", "AuthSessionMissingError", 400, void 0)
    }
}
function Uv(e) {
    return I(e) && e.name === "AuthSessionMissingError"
}
class Is extends qt {
    constructor() {
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
    }
}
class $s extends qt {
    constructor(t) {
        super(t, "AuthInvalidCredentialsError", 400, void 0)
    }
}
class As extends qt {
    constructor(t, n=null) {
        super(t, "AuthImplicitGrantRedirectError", 500, void 0),
        this.details = null,
        this.details = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
function Dv(e) {
    return I(e) && e.name === "AuthImplicitGrantRedirectError"
}
class yc extends qt {
    constructor(t, n=null) {
        super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0),
        this.details = null,
        this.details = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
class Ma extends qt {
    constructor(t, n) {
        super(t, "AuthRetryableFetchError", n, void 0)
    }
}
function To(e) {
    return I(e) && e.name === "AuthRetryableFetchError"
}
class vc extends qt {
    constructor(t, n, r) {
        super(t, "AuthWeakPasswordError", n, "weak_password"),
        this.reasons = r
    }
}
class za extends qt {
    constructor(t) {
        super(t, "AuthInvalidJwtError", 400, "invalid_jwt")
    }
}
const _i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("")
  , xc = ` 	
\r=`.split("")
  , Mv = ( () => {
    const e = new Array(128);
    for (let t = 0; t < e.length; t += 1)
        e[t] = -1;
    for (let t = 0; t < xc.length; t += 1)
        e[xc[t].charCodeAt(0)] = -2;
    for (let t = 0; t < _i.length; t += 1)
        e[_i[t].charCodeAt(0)] = t;
    return e
}
)();
function wc(e, t, n) {
    if (e !== null)
        for (t.queue = t.queue << 8 | e,
        t.queuedBits += 8; t.queuedBits >= 6; ) {
            const r = t.queue >> t.queuedBits - 6 & 63;
            n(_i[r]),
            t.queuedBits -= 6
        }
    else if (t.queuedBits > 0)
        for (t.queue = t.queue << 6 - t.queuedBits,
        t.queuedBits = 6; t.queuedBits >= 6; ) {
            const r = t.queue >> t.queuedBits - 6 & 63;
            n(_i[r]),
            t.queuedBits -= 6
        }
}
function Cf(e, t, n) {
    const r = Mv[e];
    if (r > -1)
        for (t.queue = t.queue << 6 | r,
        t.queuedBits += 6; t.queuedBits >= 8; )
            n(t.queue >> t.queuedBits - 8 & 255),
            t.queuedBits -= 8;
    else {
        if (r === -2)
            return;
        throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)
    }
}
function bc(e) {
    const t = []
      , n = o => {
        t.push(String.fromCodePoint(o))
    }
      , r = {
        utf8seq: 0,
        codepoint: 0
    }
      , s = {
        queue: 0,
        queuedBits: 0
    }
      , i = o => {
        Bv(o, r, n)
    }
    ;
    for (let o = 0; o < e.length; o += 1)
        Cf(e.charCodeAt(o), s, i);
    return t.join("")
}
function zv(e, t) {
    if (e <= 127) {
        t(e);
        return
    } else if (e <= 2047) {
        t(192 | e >> 6),
        t(128 | e & 63);
        return
    } else if (e <= 65535) {
        t(224 | e >> 12),
        t(128 | e >> 6 & 63),
        t(128 | e & 63);
        return
    } else if (e <= 1114111) {
        t(240 | e >> 18),
        t(128 | e >> 12 & 63),
        t(128 | e >> 6 & 63),
        t(128 | e & 63);
        return
    }
    throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)
}
function Fv(e, t) {
    for (let n = 0; n < e.length; n += 1) {
        let r = e.charCodeAt(n);
        if (r > 55295 && r <= 56319) {
            const s = (r - 55296) * 1024 & 65535;
            r = (e.charCodeAt(n + 1) - 56320 & 65535 | s) + 65536,
            n += 1
        }
        zv(r, t)
    }
}
function Bv(e, t, n) {
    if (t.utf8seq === 0) {
        if (e <= 127) {
            n(e);
            return
        }
        for (let r = 1; r < 6; r += 1)
            if (!(e >> 7 - r & 1)) {
                t.utf8seq = r;
                break
            }
        if (t.utf8seq === 2)
            t.codepoint = e & 31;
        else if (t.utf8seq === 3)
            t.codepoint = e & 15;
        else if (t.utf8seq === 4)
            t.codepoint = e & 7;
        else
            throw new Error("Invalid UTF-8 sequence");
        t.utf8seq -= 1
    } else if (t.utf8seq > 0) {
        if (e <= 127)
            throw new Error("Invalid UTF-8 sequence");
        t.codepoint = t.codepoint << 6 | e & 63,
        t.utf8seq -= 1,
        t.utf8seq === 0 && n(t.codepoint)
    }
}
function Wv(e) {
    const t = []
      , n = {
        queue: 0,
        queuedBits: 0
    }
      , r = s => {
        t.push(s)
    }
    ;
    for (let s = 0; s < e.length; s += 1)
        Cf(e.charCodeAt(s), n, r);
    return new Uint8Array(t)
}
function Hv(e) {
    const t = [];
    return Fv(e, n => t.push(n)),
    new Uint8Array(t)
}
function Vv(e) {
    const t = []
      , n = {
        queue: 0,
        queuedBits: 0
    }
      , r = s => {
        t.push(s)
    }
    ;
    return e.forEach(s => wc(s, n, r)),
    wc(null, n, r),
    t.join("")
}
function Kv(e) {
    return Math.round(Date.now() / 1e3) + e
}
function qv() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        const t = Math.random() * 16 | 0;
        return (e == "x" ? t : t & 3 | 8).toString(16)
    })
}
const Be = () => typeof window < "u" && typeof document < "u"
  , Yt = {
    tested: !1,
    writable: !1
}
  , Pf = () => {
    if (!Be())
        return !1;
    try {
        if (typeof globalThis.localStorage != "object")
            return !1
    } catch {
        return !1
    }
    if (Yt.tested)
        return Yt.writable;
    const e = `lswt-${Math.random()}${Math.random()}`;
    try {
        globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        Yt.tested = !0,
        Yt.writable = !0
    } catch {
        Yt.tested = !0,
        Yt.writable = !1
    }
    return Yt.writable
}
;
function Gv(e) {
    const t = {}
      , n = new URL(e);
    if (n.hash && n.hash[0] === "#")
        try {
            new URLSearchParams(n.hash.substring(1)).forEach( (s, i) => {
                t[i] = s
            }
            )
        } catch {}
    return n.searchParams.forEach( (r, s) => {
        t[s] = r
    }
    ),
    t
}
const Tf = e => {
    let t;
    return e ? t = e : typeof fetch > "u" ? t = (...n) => us(async () => {
        const {default: r} = await Promise.resolve().then( () => ir);
        return {
            default: r
        }
    }
    , void 0).then( ({default: r}) => r(...n)) : t = fetch,
    (...n) => t(...n)
}
  , Jv = e => typeof e == "object" && e !== null && "status"in e && "ok"in e && "json"in e && typeof e.json == "function"
  , Nn = async (e, t, n) => {
    await e.setItem(t, JSON.stringify(n))
}
  , Xt = async (e, t) => {
    const n = await e.getItem(t);
    if (!n)
        return null;
    try {
        return JSON.parse(n)
    } catch {
        return n
    }
}
  , kt = async (e, t) => {
    await e.removeItem(t)
}
;
class Ki {
    constructor() {
        this.promise = new Ki.promiseConstructor( (t, n) => {
            this.resolve = t,
            this.reject = n
        }
        )
    }
}
Ki.promiseConstructor = Promise;
function Oo(e) {
    const t = e.split(".");
    if (t.length !== 3)
        throw new za("Invalid JWT structure");
    for (let r = 0; r < t.length; r++)
        if (!Iv.test(t[r]))
            throw new za("JWT not in base64url format");
    return {
        header: JSON.parse(bc(t[0])),
        payload: JSON.parse(bc(t[1])),
        signature: Wv(t[2]),
        raw: {
            header: t[0],
            payload: t[1]
        }
    }
}
async function Qv(e) {
    return await new Promise(t => {
        setTimeout( () => t(null), e)
    }
    )
}
function Yv(e, t) {
    return new Promise( (r, s) => {
        (async () => {
            for (let i = 0; i < 1 / 0; i++)
                try {
                    const o = await e(i);
                    if (!t(i, null, o)) {
                        r(o);
                        return
                    }
                } catch (o) {
                    if (!t(i, o)) {
                        s(o);
                        return
                    }
                }
        }
        )()
    }
    )
}
function Xv(e) {
    return ("0" + e.toString(16)).substr(-2)
}
function Zv() {
    const t = new Uint32Array(56);
    if (typeof crypto > "u") {
        const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
          , r = n.length;
        let s = "";
        for (let i = 0; i < 56; i++)
            s += n.charAt(Math.floor(Math.random() * r));
        return s
    }
    return crypto.getRandomValues(t),
    Array.from(t, Xv).join("")
}
async function ex(e) {
    const n = new TextEncoder().encode(e)
      , r = await crypto.subtle.digest("SHA-256", n)
      , s = new Uint8Array(r);
    return Array.from(s).map(i => String.fromCharCode(i)).join("")
}
async function tx(e) {
    if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
        return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),
        e;
    const n = await ex(e);
    return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}
async function wn(e, t, n=!1) {
    const r = Zv();
    let s = r;
    n && (s += "/PASSWORD_RECOVERY"),
    await Nn(e, `${t}-code-verifier`, s);
    const i = await tx(r);
    return [i, r === i ? "plain" : "s256"]
}
const nx = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function rx(e) {
    const t = e.headers.get(Da);
    if (!t || !t.match(nx))
        return null;
    try {
        return new Date(`${t}T00:00:00.0Z`)
    } catch {
        return null
    }
}
function sx(e) {
    if (!e)
        throw new Error("Missing exp claim");
    const t = Math.floor(Date.now() / 1e3);
    if (e <= t)
        throw new Error("JWT has expired")
}
function ix(e) {
    switch (e) {
    case "RS256":
        return {
            name: "RSASSA-PKCS1-v1_5",
            hash: {
                name: "SHA-256"
            }
        };
    case "ES256":
        return {
            name: "ECDSA",
            namedCurve: "P-256",
            hash: {
                name: "SHA-256"
            }
        };
    default:
        throw new Error("Invalid alg claim")
    }
}
const ox = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function bn(e) {
    if (!ox.test(e))
        throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")
}
function Ro() {
    const e = {};
    return new Proxy(e,{
        get: (t, n) => {
            if (n === "__isUserNotAvailableProxy")
                return !0;
            if (typeof n == "symbol") {
                const r = n.toString();
                if (r === "Symbol(Symbol.toPrimitive)" || r === "Symbol(Symbol.toStringTag)" || r === "Symbol(util.inspect.custom)")
                    return
            }
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${n}" property of the session object is not supported. Please use getUser() instead.`)
        }
        ,
        set: (t, n) => {
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
        }
        ,
        deleteProperty: (t, n) => {
            throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)
        }
    })
}
function _c(e) {
    return JSON.parse(JSON.stringify(e))
}
var ax = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
            t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
    return n
};
const tn = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
  , lx = [502, 503, 504];
async function kc(e) {
    var t;
    if (!Jv(e))
        throw new Ma(tn(e),0);
    if (lx.includes(e.status))
        throw new Ma(tn(e),e.status);
    let n;
    try {
        n = await e.json()
    } catch (i) {
        throw new Ef(tn(i),i)
    }
    let r;
    const s = rx(e);
    if (s && s.getTime() >= Nf["2024-01-01"].timestamp && typeof n == "object" && n && typeof n.code == "string" ? r = n.code : typeof n == "object" && n && typeof n.error_code == "string" && (r = n.error_code),
    r) {
        if (r === "weak_password")
            throw new vc(tn(n),e.status,((t = n.weak_password) === null || t === void 0 ? void 0 : t.reasons) || []);
        if (r === "session_not_found")
            throw new jt
    } else if (typeof n == "object" && n && typeof n.weak_password == "object" && n.weak_password && Array.isArray(n.weak_password.reasons) && n.weak_password.reasons.length && n.weak_password.reasons.reduce( (i, o) => i && typeof o == "string", !0))
        throw new vc(tn(n),e.status,n.weak_password.reasons);
    throw new Av(tn(n),e.status || 500,r)
}
const ux = (e, t, n, r) => {
    const s = {
        method: e,
        headers: (t == null ? void 0 : t.headers) || {}
    };
    return e === "GET" ? s : (s.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8"
    }, t == null ? void 0 : t.headers),
    s.body = JSON.stringify(r),
    Object.assign(Object.assign({}, s), n))
}
;
async function L(e, t, n, r) {
    var s;
    const i = Object.assign({}, r == null ? void 0 : r.headers);
    i[Da] || (i[Da] = Nf["2024-01-01"].name),
    r != null && r.jwt && (i.Authorization = `Bearer ${r.jwt}`);
    const o = (s = r == null ? void 0 : r.query) !== null && s !== void 0 ? s : {};
    r != null && r.redirectTo && (o.redirect_to = r.redirectTo);
    const l = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : ""
      , u = await cx(e, t, n + l, {
        headers: i,
        noResolveJson: r == null ? void 0 : r.noResolveJson
    }, {}, r == null ? void 0 : r.body);
    return r != null && r.xform ? r == null ? void 0 : r.xform(u) : {
        data: Object.assign({}, u),
        error: null
    }
}
async function cx(e, t, n, r, s, i) {
    const o = ux(t, r, s, i);
    let l;
    try {
        l = await e(n, Object.assign({}, o))
    } catch (u) {
        throw console.error(u),
        new Ma(tn(u),0)
    }
    if (l.ok || await kc(l),
    r != null && r.noResolveJson)
        return l;
    try {
        return await l.json()
    } catch (u) {
        await kc(u)
    }
}
function lt(e) {
    var t;
    let n = null;
    px(e) && (n = Object.assign({}, e),
    e.expires_at || (n.expires_at = Kv(e.expires_in)));
    const r = (t = e.user) !== null && t !== void 0 ? t : e;
    return {
        data: {
            session: n,
            user: r
        },
        error: null
    }
}
function jc(e) {
    const t = lt(e);
    return !t.error && e.weak_password && typeof e.weak_password == "object" && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == "string" && e.weak_password.reasons.reduce( (n, r) => n && typeof r == "string", !0) && (t.data.weak_password = e.weak_password),
    t
}
function Pt(e) {
    var t;
    return {
        data: {
            user: (t = e.user) !== null && t !== void 0 ? t : e
        },
        error: null
    }
}
function dx(e) {
    return {
        data: e,
        error: null
    }
}
function hx(e) {
    const {action_link: t, email_otp: n, hashed_token: r, redirect_to: s, verification_type: i} = e
      , o = ax(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"])
      , l = {
        action_link: t,
        email_otp: n,
        hashed_token: r,
        redirect_to: s,
        verification_type: i
    }
      , u = Object.assign({}, o);
    return {
        data: {
            properties: l,
            user: u
        },
        error: null
    }
}
function fx(e) {
    return e
}
function px(e) {
    return e.access_token && e.refresh_token && e.expires_in
}
const Io = ["global", "local", "others"];
var mx = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
            t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
    return n
};
class gx {
    constructor({url: t="", headers: n={}, fetch: r}) {
        this.url = t,
        this.headers = n,
        this.fetch = Tf(r),
        this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        }
    }
    async signOut(t, n=Io[0]) {
        if (Io.indexOf(n) < 0)
            throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Io.join(", ")}`);
        try {
            return await L(this.fetch, "POST", `${this.url}/logout?scope=${n}`, {
                headers: this.headers,
                jwt: t,
                noResolveJson: !0
            }),
            {
                data: null,
                error: null
            }
        } catch (r) {
            if (I(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
    async inviteUserByEmail(t, n={}) {
        try {
            return await L(this.fetch, "POST", `${this.url}/invite`, {
                body: {
                    email: t,
                    data: n.data
                },
                headers: this.headers,
                redirectTo: n.redirectTo,
                xform: Pt
            })
        } catch (r) {
            if (I(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async generateLink(t) {
        try {
            const {options: n} = t
              , r = mx(t, ["options"])
              , s = Object.assign(Object.assign({}, r), n);
            return "newEmail"in r && (s.new_email = r == null ? void 0 : r.newEmail,
            delete s.newEmail),
            await L(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: s,
                headers: this.headers,
                xform: hx,
                redirectTo: n == null ? void 0 : n.redirectTo
            })
        } catch (n) {
            if (I(n))
                return {
                    data: {
                        properties: null,
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async createUser(t) {
        try {
            return await L(this.fetch, "POST", `${this.url}/admin/users`, {
                body: t,
                headers: this.headers,
                xform: Pt
            })
        } catch (n) {
            if (I(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async listUsers(t) {
        var n, r, s, i, o, l, u;
        try {
            const c = {
                nextPage: null,
                lastPage: 0,
                total: 0
            }
              , d = await L(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                    page: (r = (n = t == null ? void 0 : t.page) === null || n === void 0 ? void 0 : n.toString()) !== null && r !== void 0 ? r : "",
                    per_page: (i = (s = t == null ? void 0 : t.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && i !== void 0 ? i : ""
                },
                xform: fx
            });
            if (d.error)
                throw d.error;
            const h = await d.json()
              , f = (o = d.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0
              , y = (u = (l = d.headers.get("link")) === null || l === void 0 ? void 0 : l.split(",")) !== null && u !== void 0 ? u : [];
            return y.length > 0 && (y.forEach(v => {
                const b = parseInt(v.split(";")[0].split("=")[1].substring(0, 1))
                  , k = JSON.parse(v.split(";")[1].split("=")[1]);
                c[`${k}Page`] = b
            }
            ),
            c.total = parseInt(f)),
            {
                data: Object.assign(Object.assign({}, h), c),
                error: null
            }
        } catch (c) {
            if (I(c))
                return {
                    data: {
                        users: []
                    },
                    error: c
                };
            throw c
        }
    }
    async getUserById(t) {
        bn(t);
        try {
            return await L(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
                headers: this.headers,
                xform: Pt
            })
        } catch (n) {
            if (I(n))
                return {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async updateUserById(t, n) {
        bn(t);
        try {
            return await L(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
                body: n,
                headers: this.headers,
                xform: Pt
            })
        } catch (r) {
            if (I(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async deleteUser(t, n=!1) {
        bn(t);
        try {
            return await L(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
                headers: this.headers,
                body: {
                    should_soft_delete: n
                },
                xform: Pt
            })
        } catch (r) {
            if (I(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async _listFactors(t) {
        bn(t.userId);
        try {
            const {data: n, error: r} = await L(this.fetch, "GET", `${this.url}/admin/users/${t.userId}/factors`, {
                headers: this.headers,
                xform: s => ({
                    data: {
                        factors: s
                    },
                    error: null
                })
            });
            return {
                data: n,
                error: r
            }
        } catch (n) {
            if (I(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _deleteFactor(t) {
        bn(t.userId),
        bn(t.id);
        try {
            return {
                data: await L(this.fetch, "DELETE", `${this.url}/admin/users/${t.userId}/factors/${t.id}`, {
                    headers: this.headers
                }),
                error: null
            }
        } catch (n) {
            if (I(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
}
function Sc(e={}) {
    return {
        getItem: t => e[t] || null,
        setItem: (t, n) => {
            e[t] = n
        }
        ,
        removeItem: t => {
            delete e[t]
        }
    }
}
function yx() {
    if (typeof globalThis != "object")
        try {
            Object.defineProperty(Object.prototype, "__magic__", {
                get: function() {
                    return this
                },
                configurable: !0
            }),
            __magic__.globalThis = __magic__,
            delete Object.prototype.__magic__
        } catch {
            typeof self < "u" && (self.globalThis = self)
        }
}
const _n = {
    debug: !!(globalThis && Pf() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Of extends Error {
    constructor(t) {
        super(t),
        this.isAcquireTimeout = !0
    }
}
class vx extends Of {
}
async function xx(e, t, n) {
    _n.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
    const r = new globalThis.AbortController;
    return t > 0 && setTimeout( () => {
        r.abort(),
        _n.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e)
    }
    , t),
    await Promise.resolve().then( () => globalThis.navigator.locks.request(e, t === 0 ? {
        mode: "exclusive",
        ifAvailable: !0
    } : {
        mode: "exclusive",
        signal: r.signal
    }, async s => {
        if (s) {
            _n.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, s.name);
            try {
                return await n()
            } finally {
                _n.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, s.name)
            }
        } else {
            if (t === 0)
                throw _n.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e),
                new vx(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
            if (_n.debug)
                try {
                    const i = await globalThis.navigator.locks.query();
                    console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(i, null, "  "))
                } catch (i) {
                    console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", i)
                }
            return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),
            await n()
        }
    }
    ))
}
yx();
const wx = {
    url: Tv,
    storageKey: Ov,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: Rv,
    flowType: "implicit",
    debug: !1,
    hasCustomAuthorizationHeader: !1
};
async function Nc(e, t, n) {
    return await n()
}
const kn = {};
class ts {
    constructor(t) {
        var n, r;
        this.userStorage = null,
        this.memoryStorage = null,
        this.stateChangeEmitters = new Map,
        this.autoRefreshTicker = null,
        this.visibilityChangedCallback = null,
        this.refreshingDeferred = null,
        this.initializePromise = null,
        this.detectSessionInUrl = !0,
        this.hasCustomAuthorizationHeader = !1,
        this.suppressGetSessionWarning = !1,
        this.lockAcquired = !1,
        this.pendingInLock = [],
        this.broadcastChannel = null,
        this.logger = console.log,
        this.instanceID = ts.nextInstanceID,
        ts.nextInstanceID += 1,
        this.instanceID > 0 && Be() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
        const s = Object.assign(Object.assign({}, wx), t);
        if (this.logDebugMessages = !!s.debug,
        typeof s.debug == "function" && (this.logger = s.debug),
        this.persistSession = s.persistSession,
        this.storageKey = s.storageKey,
        this.autoRefreshToken = s.autoRefreshToken,
        this.admin = new gx({
            url: s.url,
            headers: s.headers,
            fetch: s.fetch
        }),
        this.url = s.url,
        this.headers = s.headers,
        this.fetch = Tf(s.fetch),
        this.lock = s.lock || Nc,
        this.detectSessionInUrl = s.detectSessionInUrl,
        this.flowType = s.flowType,
        this.hasCustomAuthorizationHeader = s.hasCustomAuthorizationHeader,
        s.lock ? this.lock = s.lock : Be() && (!((n = globalThis == null ? void 0 : globalThis.navigator) === null || n === void 0) && n.locks) ? this.lock = xx : this.lock = Nc,
        this.jwks || (this.jwks = {
            keys: []
        },
        this.jwks_cached_at = Number.MIN_SAFE_INTEGER),
        this.mfa = {
            verify: this._verify.bind(this),
            enroll: this._enroll.bind(this),
            unenroll: this._unenroll.bind(this),
            challenge: this._challenge.bind(this),
            listFactors: this._listFactors.bind(this),
            challengeAndVerify: this._challengeAndVerify.bind(this),
            getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
        },
        this.persistSession ? (s.storage ? this.storage = s.storage : Pf() ? this.storage = globalThis.localStorage : (this.memoryStorage = {},
        this.storage = Sc(this.memoryStorage)),
        s.userStorage && (this.userStorage = s.userStorage)) : (this.memoryStorage = {},
        this.storage = Sc(this.memoryStorage)),
        Be() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
            } catch (i) {
                console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", i)
            }
            (r = this.broadcastChannel) === null || r === void 0 || r.addEventListener("message", async i => {
                this._debug("received broadcast notification from other tab or client", i),
                await this._notifyAllSubscribers(i.data.event, i.data.session, !1)
            }
            )
        }
        this.initialize()
    }
    get jwks() {
        var t, n;
        return (n = (t = kn[this.storageKey]) === null || t === void 0 ? void 0 : t.jwks) !== null && n !== void 0 ? n : {
            keys: []
        }
    }
    set jwks(t) {
        kn[this.storageKey] = Object.assign(Object.assign({}, kn[this.storageKey]), {
            jwks: t
        })
    }
    get jwks_cached_at() {
        var t, n;
        return (n = (t = kn[this.storageKey]) === null || t === void 0 ? void 0 : t.cachedAt) !== null && n !== void 0 ? n : Number.MIN_SAFE_INTEGER
    }
    set jwks_cached_at(t) {
        kn[this.storageKey] = Object.assign(Object.assign({}, kn[this.storageKey]), {
            cachedAt: t
        })
    }
    _debug(...t) {
        return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${Sf}) ${new Date().toISOString()}`, ...t),
        this
    }
    async initialize() {
        return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(),
        await this.initializePromise)
    }
    async _initialize() {
        var t;
        try {
            const n = Gv(window.location.href);
            let r = "none";
            if (this._isImplicitGrantCallback(n) ? r = "implicit" : await this._isPKCECallback(n) && (r = "pkce"),
            Be() && this.detectSessionInUrl && r !== "none") {
                const {data: s, error: i} = await this._getSessionFromURL(n, r);
                if (i) {
                    if (this._debug("#_initialize()", "error detecting session from URL", i),
                    Dv(i)) {
                        const u = (t = i.details) === null || t === void 0 ? void 0 : t.code;
                        if (u === "identity_already_exists" || u === "identity_not_found" || u === "single_identity_not_deletable")
                            return {
                                error: i
                            }
                    }
                    return await this._removeSession(),
                    {
                        error: i
                    }
                }
                const {session: o, redirectType: l} = s;
                return this._debug("#_initialize()", "detected session in URL", o, "redirect type", l),
                await this._saveSession(o),
                setTimeout(async () => {
                    l === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o) : await this._notifyAllSubscribers("SIGNED_IN", o)
                }
                , 0),
                {
                    error: null
                }
            }
            return await this._recoverAndRefresh(),
            {
                error: null
            }
        } catch (n) {
            return I(n) ? {
                error: n
            } : {
                error: new Ef("Unexpected error during initialization",n)
            }
        } finally {
            await this._handleVisibilityChange(),
            this._debug("#_initialize()", "end")
        }
    }
    async signInAnonymously(t) {
        var n, r, s;
        try {
            const i = await L(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                    data: (r = (n = t == null ? void 0 : t.options) === null || n === void 0 ? void 0 : n.data) !== null && r !== void 0 ? r : {},
                    gotrue_meta_security: {
                        captcha_token: (s = t == null ? void 0 : t.options) === null || s === void 0 ? void 0 : s.captchaToken
                    }
                },
                xform: lt
            })
              , {data: o, error: l} = i;
            if (l || !o)
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: l
                };
            const u = o.session
              , c = o.user;
            return o.session && (await this._saveSession(o.session),
            await this._notifyAllSubscribers("SIGNED_IN", u)),
            {
                data: {
                    user: c,
                    session: u
                },
                error: null
            }
        } catch (i) {
            if (I(i))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                };
            throw i
        }
    }
    async signUp(t) {
        var n, r, s;
        try {
            let i;
            if ("email"in t) {
                const {email: d, password: h, options: f} = t;
                let y = null
                  , v = null;
                this.flowType === "pkce" && ([y,v] = await wn(this.storage, this.storageKey)),
                i = await L(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    redirectTo: f == null ? void 0 : f.emailRedirectTo,
                    body: {
                        email: d,
                        password: h,
                        data: (n = f == null ? void 0 : f.data) !== null && n !== void 0 ? n : {},
                        gotrue_meta_security: {
                            captcha_token: f == null ? void 0 : f.captchaToken
                        },
                        code_challenge: y,
                        code_challenge_method: v
                    },
                    xform: lt
                })
            } else if ("phone"in t) {
                const {phone: d, password: h, options: f} = t;
                i = await L(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone: d,
                        password: h,
                        data: (r = f == null ? void 0 : f.data) !== null && r !== void 0 ? r : {},
                        channel: (s = f == null ? void 0 : f.channel) !== null && s !== void 0 ? s : "sms",
                        gotrue_meta_security: {
                            captcha_token: f == null ? void 0 : f.captchaToken
                        }
                    },
                    xform: lt
                })
            } else
                throw new $s("You must provide either an email or phone number and a password");
            const {data: o, error: l} = i;
            if (l || !o)
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: l
                };
            const u = o.session
              , c = o.user;
            return o.session && (await this._saveSession(o.session),
            await this._notifyAllSubscribers("SIGNED_IN", u)),
            {
                data: {
                    user: c,
                    session: u
                },
                error: null
            }
        } catch (i) {
            if (I(i))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                };
            throw i
        }
    }
    async signInWithPassword(t) {
        try {
            let n;
            if ("email"in t) {
                const {email: i, password: o, options: l} = t;
                n = await L(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email: i,
                        password: o,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        }
                    },
                    xform: jc
                })
            } else if ("phone"in t) {
                const {phone: i, password: o, options: l} = t;
                n = await L(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone: i,
                        password: o,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        }
                    },
                    xform: jc
                })
            } else
                throw new $s("You must provide either an email or phone number and a password");
            const {data: r, error: s} = n;
            return s ? {
                data: {
                    user: null,
                    session: null
                },
                error: s
            } : !r || !r.session || !r.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new Is
            } : (r.session && (await this._saveSession(r.session),
            await this._notifyAllSubscribers("SIGNED_IN", r.session)),
            {
                data: Object.assign({
                    user: r.user,
                    session: r.session
                }, r.weak_password ? {
                    weakPassword: r.weak_password
                } : null),
                error: s
            })
        } catch (n) {
            if (I(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async signInWithOAuth(t) {
        var n, r, s, i;
        return await this._handleProviderSignIn(t.provider, {
            redirectTo: (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo,
            scopes: (r = t.options) === null || r === void 0 ? void 0 : r.scopes,
            queryParams: (s = t.options) === null || s === void 0 ? void 0 : s.queryParams,
            skipBrowserRedirect: (i = t.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect
        })
    }
    async exchangeCodeForSession(t) {
        return await this.initializePromise,
        this._acquireLock(-1, async () => this._exchangeCodeForSession(t))
    }
    async signInWithWeb3(t) {
        const {chain: n} = t;
        if (n === "solana")
            return await this.signInWithSolana(t);
        throw new Error(`@supabase/auth-js: Unsupported chain "${n}"`)
    }
    async signInWithSolana(t) {
        var n, r, s, i, o, l, u, c, d, h, f, y;
        let v, b;
        if ("message"in t)
            v = t.message,
            b = t.signature;
        else {
            const {chain: k, wallet: g, statement: m, options: p} = t;
            let _;
            if (Be())
                if (typeof g == "object")
                    _ = g;
                else {
                    const j = window;
                    if ("solana"in j && typeof j.solana == "object" && ("signIn"in j.solana && typeof j.solana.signIn == "function" || "signMessage"in j.solana && typeof j.solana.signMessage == "function"))
                        _ = j.solana;
                    else
                        throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")
                }
            else {
                if (typeof g != "object" || !(p != null && p.url))
                    throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                _ = g
            }
            const x = new URL((n = p == null ? void 0 : p.url) !== null && n !== void 0 ? n : window.location.href);
            if ("signIn"in _ && _.signIn) {
                const j = await _.signIn(Object.assign(Object.assign(Object.assign({
                    issuedAt: new Date().toISOString()
                }, p == null ? void 0 : p.signInWithSolana), {
                    version: "1",
                    domain: x.host,
                    uri: x.href
                }), m ? {
                    statement: m
                } : null));
                let S;
                if (Array.isArray(j) && j[0] && typeof j[0] == "object")
                    S = j[0];
                else if (j && typeof j == "object" && "signedMessage"in j && "signature"in j)
                    S = j;
                else
                    throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
                if ("signedMessage"in S && "signature"in S && (typeof S.signedMessage == "string" || S.signedMessage instanceof Uint8Array) && S.signature instanceof Uint8Array)
                    v = typeof S.signedMessage == "string" ? S.signedMessage : new TextDecoder().decode(S.signedMessage),
                    b = S.signature;
                else
                    throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")
            } else {
                if (!("signMessage"in _) || typeof _.signMessage != "function" || !("publicKey"in _) || typeof _ != "object" || !_.publicKey || !("toBase58"in _.publicKey) || typeof _.publicKey.toBase58 != "function")
                    throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
                v = [`${x.host} wants you to sign in with your Solana account:`, _.publicKey.toBase58(), ...m ? ["", m, ""] : [""], "Version: 1", `URI: ${x.href}`, `Issued At: ${(s = (r = p == null ? void 0 : p.signInWithSolana) === null || r === void 0 ? void 0 : r.issuedAt) !== null && s !== void 0 ? s : new Date().toISOString()}`, ...!((i = p == null ? void 0 : p.signInWithSolana) === null || i === void 0) && i.notBefore ? [`Not Before: ${p.signInWithSolana.notBefore}`] : [], ...!((o = p == null ? void 0 : p.signInWithSolana) === null || o === void 0) && o.expirationTime ? [`Expiration Time: ${p.signInWithSolana.expirationTime}`] : [], ...!((l = p == null ? void 0 : p.signInWithSolana) === null || l === void 0) && l.chainId ? [`Chain ID: ${p.signInWithSolana.chainId}`] : [], ...!((u = p == null ? void 0 : p.signInWithSolana) === null || u === void 0) && u.nonce ? [`Nonce: ${p.signInWithSolana.nonce}`] : [], ...!((c = p == null ? void 0 : p.signInWithSolana) === null || c === void 0) && c.requestId ? [`Request ID: ${p.signInWithSolana.requestId}`] : [], ...!((h = (d = p == null ? void 0 : p.signInWithSolana) === null || d === void 0 ? void 0 : d.resources) === null || h === void 0) && h.length ? ["Resources", ...p.signInWithSolana.resources.map(S => `- ${S}`)] : []].join(`
`);
                const j = await _.signMessage(new TextEncoder().encode(v), "utf8");
                if (!j || !(j instanceof Uint8Array))
                    throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
                b = j
            }
        }
        try {
            const {data: k, error: g} = await L(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
                headers: this.headers,
                body: Object.assign({
                    chain: "solana",
                    message: v,
                    signature: Vv(b)
                }, !((f = t.options) === null || f === void 0) && f.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: (y = t.options) === null || y === void 0 ? void 0 : y.captchaToken
                    }
                } : null),
                xform: lt
            });
            if (g)
                throw g;
            return !k || !k.session || !k.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new Is
            } : (k.session && (await this._saveSession(k.session),
            await this._notifyAllSubscribers("SIGNED_IN", k.session)),
            {
                data: Object.assign({}, k),
                error: g
            })
        } catch (k) {
            if (I(k))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: k
                };
            throw k
        }
    }
    async _exchangeCodeForSession(t) {
        const n = await Xt(this.storage, `${this.storageKey}-code-verifier`)
          , [r,s] = (n ?? "").split("/");
        try {
            const {data: i, error: o} = await L(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                headers: this.headers,
                body: {
                    auth_code: t,
                    code_verifier: r
                },
                xform: lt
            });
            if (await kt(this.storage, `${this.storageKey}-code-verifier`),
            o)
                throw o;
            return !i || !i.session || !i.user ? {
                data: {
                    user: null,
                    session: null,
                    redirectType: null
                },
                error: new Is
            } : (i.session && (await this._saveSession(i.session),
            await this._notifyAllSubscribers("SIGNED_IN", i.session)),
            {
                data: Object.assign(Object.assign({}, i), {
                    redirectType: s ?? null
                }),
                error: o
            })
        } catch (i) {
            if (I(i))
                return {
                    data: {
                        user: null,
                        session: null,
                        redirectType: null
                    },
                    error: i
                };
            throw i
        }
    }
    async signInWithIdToken(t) {
        try {
            const {options: n, provider: r, token: s, access_token: i, nonce: o} = t
              , l = await L(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                headers: this.headers,
                body: {
                    provider: r,
                    id_token: s,
                    access_token: i,
                    nonce: o,
                    gotrue_meta_security: {
                        captcha_token: n == null ? void 0 : n.captchaToken
                    }
                },
                xform: lt
            })
              , {data: u, error: c} = l;
            return c ? {
                data: {
                    user: null,
                    session: null
                },
                error: c
            } : !u || !u.session || !u.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new Is
            } : (u.session && (await this._saveSession(u.session),
            await this._notifyAllSubscribers("SIGNED_IN", u.session)),
            {
                data: u,
                error: c
            })
        } catch (n) {
            if (I(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async signInWithOtp(t) {
        var n, r, s, i, o;
        try {
            if ("email"in t) {
                const {email: l, options: u} = t;
                let c = null
                  , d = null;
                this.flowType === "pkce" && ([c,d] = await wn(this.storage, this.storageKey));
                const {error: h} = await L(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        email: l,
                        data: (n = u == null ? void 0 : u.data) !== null && n !== void 0 ? n : {},
                        create_user: (r = u == null ? void 0 : u.shouldCreateUser) !== null && r !== void 0 ? r : !0,
                        gotrue_meta_security: {
                            captcha_token: u == null ? void 0 : u.captchaToken
                        },
                        code_challenge: c,
                        code_challenge_method: d
                    },
                    redirectTo: u == null ? void 0 : u.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: h
                }
            }
            if ("phone"in t) {
                const {phone: l, options: u} = t
                  , {data: c, error: d} = await L(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        phone: l,
                        data: (s = u == null ? void 0 : u.data) !== null && s !== void 0 ? s : {},
                        create_user: (i = u == null ? void 0 : u.shouldCreateUser) !== null && i !== void 0 ? i : !0,
                        gotrue_meta_security: {
                            captcha_token: u == null ? void 0 : u.captchaToken
                        },
                        channel: (o = u == null ? void 0 : u.channel) !== null && o !== void 0 ? o : "sms"
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: c == null ? void 0 : c.message_id
                    },
                    error: d
                }
            }
            throw new $s("You must provide either an email or phone number.")
        } catch (l) {
            if (I(l))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: l
                };
            throw l
        }
    }
    async verifyOtp(t) {
        var n, r;
        try {
            let s, i;
            "options"in t && (s = (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo,
            i = (r = t.options) === null || r === void 0 ? void 0 : r.captchaToken);
            const {data: o, error: l} = await L(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, t), {
                    gotrue_meta_security: {
                        captcha_token: i
                    }
                }),
                redirectTo: s,
                xform: lt
            });
            if (l)
                throw l;
            if (!o)
                throw new Error("An error occurred on token verification.");
            const u = o.session
              , c = o.user;
            return u != null && u.access_token && (await this._saveSession(u),
            await this._notifyAllSubscribers(t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", u)),
            {
                data: {
                    user: c,
                    session: u
                },
                error: null
            }
        } catch (s) {
            if (I(s))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                };
            throw s
        }
    }
    async signInWithSSO(t) {
        var n, r, s;
        try {
            let i = null
              , o = null;
            return this.flowType === "pkce" && ([i,o] = await wn(this.storage, this.storageKey)),
            await L(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId"in t ? {
                    provider_id: t.providerId
                } : null), "domain"in t ? {
                    domain: t.domain
                } : null), {
                    redirect_to: (r = (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo) !== null && r !== void 0 ? r : void 0
                }), !((s = t == null ? void 0 : t.options) === null || s === void 0) && s.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: t.options.captchaToken
                    }
                } : null), {
                    skip_http_redirect: !0,
                    code_challenge: i,
                    code_challenge_method: o
                }),
                headers: this.headers,
                xform: dx
            })
        } catch (i) {
            if (I(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async reauthenticate() {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._reauthenticate())
    }
    async _reauthenticate() {
        try {
            return await this._useSession(async t => {
                const {data: {session: n}, error: r} = t;
                if (r)
                    throw r;
                if (!n)
                    throw new jt;
                const {error: s} = await L(this.fetch, "GET", `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: n.access_token
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                }
            }
            )
        } catch (t) {
            if (I(t))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: t
                };
            throw t
        }
    }
    async resend(t) {
        try {
            const n = `${this.url}/resend`;
            if ("email"in t) {
                const {email: r, type: s, options: i} = t
                  , {error: o} = await L(this.fetch, "POST", n, {
                    headers: this.headers,
                    body: {
                        email: r,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: i == null ? void 0 : i.captchaToken
                        }
                    },
                    redirectTo: i == null ? void 0 : i.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: o
                }
            } else if ("phone"in t) {
                const {phone: r, type: s, options: i} = t
                  , {data: o, error: l} = await L(this.fetch, "POST", n, {
                    headers: this.headers,
                    body: {
                        phone: r,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: i == null ? void 0 : i.captchaToken
                        }
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: o == null ? void 0 : o.message_id
                    },
                    error: l
                }
            }
            throw new $s("You must provide either an email or phone number and a type")
        } catch (n) {
            if (I(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async getSession() {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => this._useSession(async n => n))
    }
    async _acquireLock(t, n) {
        this._debug("#_acquireLock", "begin", t);
        try {
            if (this.lockAcquired) {
                const r = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve()
                  , s = (async () => (await r,
                await n()))();
                return this.pendingInLock.push((async () => {
                    try {
                        await s
                    } catch {}
                }
                )()),
                s
            }
            return await this.lock(`lock:${this.storageKey}`, t, async () => {
                this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                try {
                    this.lockAcquired = !0;
                    const r = n();
                    for (this.pendingInLock.push((async () => {
                        try {
                            await r
                        } catch {}
                    }
                    )()),
                    await r; this.pendingInLock.length; ) {
                        const s = [...this.pendingInLock];
                        await Promise.all(s),
                        this.pendingInLock.splice(0, s.length)
                    }
                    return await r
                } finally {
                    this._debug("#_acquireLock", "lock released for storage key", this.storageKey),
                    this.lockAcquired = !1
                }
            }
            )
        } finally {
            this._debug("#_acquireLock", "end")
        }
    }
    async _useSession(t) {
        this._debug("#_useSession", "begin");
        try {
            const n = await this.__loadSession();
            return await t(n)
        } finally {
            this._debug("#_useSession", "end")
        }
    }
    async __loadSession() {
        this._debug("#__loadSession()", "begin"),
        this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
        try {
            let t = null;
            const n = await Xt(this.storage, this.storageKey);
            if (this._debug("#getSession()", "session from storage", n),
            n !== null && (this._isValidSession(n) ? t = n : (this._debug("#getSession()", "session from storage is not valid"),
            await this._removeSession())),
            !t)
                return {
                    data: {
                        session: null
                    },
                    error: null
                };
            const r = t.expires_at ? t.expires_at * 1e3 - Date.now() < Po : !1;
            if (this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", t.expires_at),
            !r) {
                if (this.userStorage) {
                    const o = await Xt(this.userStorage, this.storageKey + "-user");
                    o != null && o.user ? t.user = o.user : t.user = Ro()
                }
                if (this.storage.isServer && t.user) {
                    let o = this.suppressGetSessionWarning;
                    t = new Proxy(t,{
                        get: (u, c, d) => (!o && c === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),
                        o = !0,
                        this.suppressGetSessionWarning = !0),
                        Reflect.get(u, c, d))
                    })
                }
                return {
                    data: {
                        session: t
                    },
                    error: null
                }
            }
            const {session: s, error: i} = await this._callRefreshToken(t.refresh_token);
            return i ? {
                data: {
                    session: null
                },
                error: i
            } : {
                data: {
                    session: s
                },
                error: null
            }
        } finally {
            this._debug("#__loadSession()", "end")
        }
    }
    async getUser(t) {
        return t ? await this._getUser(t) : (await this.initializePromise,
        await this._acquireLock(-1, async () => await this._getUser()))
    }
    async _getUser(t) {
        try {
            return t ? await L(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: t,
                xform: Pt
            }) : await this._useSession(async n => {
                var r, s, i;
                const {data: o, error: l} = n;
                if (l)
                    throw l;
                return !(!((r = o.session) === null || r === void 0) && r.access_token) && !this.hasCustomAuthorizationHeader ? {
                    data: {
                        user: null
                    },
                    error: new jt
                } : await L(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: (i = (s = o.session) === null || s === void 0 ? void 0 : s.access_token) !== null && i !== void 0 ? i : void 0,
                    xform: Pt
                })
            }
            )
        } catch (n) {
            if (I(n))
                return Uv(n) && (await this._removeSession(),
                await kt(this.storage, `${this.storageKey}-code-verifier`)),
                {
                    data: {
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async updateUser(t, n={}) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._updateUser(t, n))
    }
    async _updateUser(t, n={}) {
        try {
            return await this._useSession(async r => {
                const {data: s, error: i} = r;
                if (i)
                    throw i;
                if (!s.session)
                    throw new jt;
                const o = s.session;
                let l = null
                  , u = null;
                this.flowType === "pkce" && t.email != null && ([l,u] = await wn(this.storage, this.storageKey));
                const {data: c, error: d} = await L(this.fetch, "PUT", `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: n == null ? void 0 : n.emailRedirectTo,
                    body: Object.assign(Object.assign({}, t), {
                        code_challenge: l,
                        code_challenge_method: u
                    }),
                    jwt: o.access_token,
                    xform: Pt
                });
                if (d)
                    throw d;
                return o.user = c.user,
                await this._saveSession(o),
                await this._notifyAllSubscribers("USER_UPDATED", o),
                {
                    data: {
                        user: o.user
                    },
                    error: null
                }
            }
            )
        } catch (r) {
            if (I(r))
                return {
                    data: {
                        user: null
                    },
                    error: r
                };
            throw r
        }
    }
    async setSession(t) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._setSession(t))
    }
    async _setSession(t) {
        try {
            if (!t.access_token || !t.refresh_token)
                throw new jt;
            const n = Date.now() / 1e3;
            let r = n
              , s = !0
              , i = null;
            const {payload: o} = Oo(t.access_token);
            if (o.exp && (r = o.exp,
            s = r <= n),
            s) {
                const {session: l, error: u} = await this._callRefreshToken(t.refresh_token);
                if (u)
                    return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: u
                    };
                if (!l)
                    return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: null
                    };
                i = l
            } else {
                const {data: l, error: u} = await this._getUser(t.access_token);
                if (u)
                    throw u;
                i = {
                    access_token: t.access_token,
                    refresh_token: t.refresh_token,
                    user: l.user,
                    token_type: "bearer",
                    expires_in: r - n,
                    expires_at: r
                },
                await this._saveSession(i),
                await this._notifyAllSubscribers("SIGNED_IN", i)
            }
            return {
                data: {
                    user: i.user,
                    session: i
                },
                error: null
            }
        } catch (n) {
            if (I(n))
                return {
                    data: {
                        session: null,
                        user: null
                    },
                    error: n
                };
            throw n
        }
    }
    async refreshSession(t) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._refreshSession(t))
    }
    async _refreshSession(t) {
        try {
            return await this._useSession(async n => {
                var r;
                if (!t) {
                    const {data: o, error: l} = n;
                    if (l)
                        throw l;
                    t = (r = o.session) !== null && r !== void 0 ? r : void 0
                }
                if (!(t != null && t.refresh_token))
                    throw new jt;
                const {session: s, error: i} = await this._callRefreshToken(t.refresh_token);
                return i ? {
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                } : s ? {
                    data: {
                        user: s.user,
                        session: s
                    },
                    error: null
                } : {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                }
            }
            )
        } catch (n) {
            if (I(n))
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                };
            throw n
        }
    }
    async _getSessionFromURL(t, n) {
        try {
            if (!Be())
                throw new As("No browser detected.");
            if (t.error || t.error_description || t.error_code)
                throw new As(t.error_description || "Error in URL with unspecified error_description",{
                    error: t.error || "unspecified_error",
                    code: t.error_code || "unspecified_code"
                });
            switch (n) {
            case "implicit":
                if (this.flowType === "pkce")
                    throw new yc("Not a valid PKCE flow url.");
                break;
            case "pkce":
                if (this.flowType === "implicit")
                    throw new As("Not a valid implicit grant flow url.");
                break;
            default:
            }
            if (n === "pkce") {
                if (this._debug("#_initialize()", "begin", "is PKCE flow", !0),
                !t.code)
                    throw new yc("No code detected.");
                const {data: m, error: p} = await this._exchangeCodeForSession(t.code);
                if (p)
                    throw p;
                const _ = new URL(window.location.href);
                return _.searchParams.delete("code"),
                window.history.replaceState(window.history.state, "", _.toString()),
                {
                    data: {
                        session: m.session,
                        redirectType: null
                    },
                    error: null
                }
            }
            const {provider_token: r, provider_refresh_token: s, access_token: i, refresh_token: o, expires_in: l, expires_at: u, token_type: c} = t;
            if (!i || !l || !o || !c)
                throw new As("No session defined in URL");
            const d = Math.round(Date.now() / 1e3)
              , h = parseInt(l);
            let f = d + h;
            u && (f = parseInt(u));
            const y = f - d;
            y * 1e3 <= Sn && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${y}s, should have been closer to ${h}s`);
            const v = f - h;
            d - v >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", v, f, d) : d - v < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", v, f, d);
            const {data: b, error: k} = await this._getUser(i);
            if (k)
                throw k;
            const g = {
                provider_token: r,
                provider_refresh_token: s,
                access_token: i,
                expires_in: h,
                expires_at: f,
                refresh_token: o,
                token_type: c,
                user: b.user
            };
            return window.location.hash = "",
            this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
            {
                data: {
                    session: g,
                    redirectType: t.type
                },
                error: null
            }
        } catch (r) {
            if (I(r))
                return {
                    data: {
                        session: null,
                        redirectType: null
                    },
                    error: r
                };
            throw r
        }
    }
    _isImplicitGrantCallback(t) {
        return !!(t.access_token || t.error_description)
    }
    async _isPKCECallback(t) {
        const n = await Xt(this.storage, `${this.storageKey}-code-verifier`);
        return !!(t.code && n)
    }
    async signOut(t={
        scope: "global"
    }) {
        return await this.initializePromise,
        await this._acquireLock(-1, async () => await this._signOut(t))
    }
    async _signOut({scope: t}={
        scope: "global"
    }) {
        return await this._useSession(async n => {
            var r;
            const {data: s, error: i} = n;
            if (i)
                return {
                    error: i
                };
            const o = (r = s.session) === null || r === void 0 ? void 0 : r.access_token;
            if (o) {
                const {error: l} = await this.admin.signOut(o, t);
                if (l && !(Lv(l) && (l.status === 404 || l.status === 401 || l.status === 403)))
                    return {
                        error: l
                    }
            }
            return t !== "others" && (await this._removeSession(),
            await kt(this.storage, `${this.storageKey}-code-verifier`)),
            {
                error: null
            }
        }
        )
    }
    onAuthStateChange(t) {
        const n = qv()
          , r = {
            id: n,
            callback: t,
            unsubscribe: () => {
                this._debug("#unsubscribe()", "state change callback with id removed", n),
                this.stateChangeEmitters.delete(n)
            }
        };
        return this._debug("#onAuthStateChange()", "registered callback with id", n),
        this.stateChangeEmitters.set(n, r),
        (async () => (await this.initializePromise,
        await this._acquireLock(-1, async () => {
            this._emitInitialSession(n)
        }
        )))(),
        {
            data: {
                subscription: r
            }
        }
    }
    async _emitInitialSession(t) {
        return await this._useSession(async n => {
            var r, s;
            try {
                const {data: {session: i}, error: o} = n;
                if (o)
                    throw o;
                await ((r = this.stateChangeEmitters.get(t)) === null || r === void 0 ? void 0 : r.callback("INITIAL_SESSION", i)),
                this._debug("INITIAL_SESSION", "callback id", t, "session", i)
            } catch (i) {
                await ((s = this.stateChangeEmitters.get(t)) === null || s === void 0 ? void 0 : s.callback("INITIAL_SESSION", null)),
                this._debug("INITIAL_SESSION", "callback id", t, "error", i),
                console.error(i)
            }
        }
        )
    }
    async resetPasswordForEmail(t, n={}) {
        let r = null
          , s = null;
        this.flowType === "pkce" && ([r,s] = await wn(this.storage, this.storageKey, !0));
        try {
            return await L(this.fetch, "POST", `${this.url}/recover`, {
                body: {
                    email: t,
                    code_challenge: r,
                    code_challenge_method: s,
                    gotrue_meta_security: {
                        captcha_token: n.captchaToken
                    }
                },
                headers: this.headers,
                redirectTo: n.redirectTo
            })
        } catch (i) {
            if (I(i))
                return {
                    data: null,
                    error: i
                };
            throw i
        }
    }
    async getUserIdentities() {
        var t;
        try {
            const {data: n, error: r} = await this.getUser();
            if (r)
                throw r;
            return {
                data: {
                    identities: (t = n.user.identities) !== null && t !== void 0 ? t : []
                },
                error: null
            }
        } catch (n) {
            if (I(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async linkIdentity(t) {
        var n;
        try {
            const {data: r, error: s} = await this._useSession(async i => {
                var o, l, u, c, d;
                const {data: h, error: f} = i;
                if (f)
                    throw f;
                const y = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, t.provider, {
                    redirectTo: (o = t.options) === null || o === void 0 ? void 0 : o.redirectTo,
                    scopes: (l = t.options) === null || l === void 0 ? void 0 : l.scopes,
                    queryParams: (u = t.options) === null || u === void 0 ? void 0 : u.queryParams,
                    skipBrowserRedirect: !0
                });
                return await L(this.fetch, "GET", y, {
                    headers: this.headers,
                    jwt: (d = (c = h.session) === null || c === void 0 ? void 0 : c.access_token) !== null && d !== void 0 ? d : void 0
                })
            }
            );
            if (s)
                throw s;
            return Be() && !(!((n = t.options) === null || n === void 0) && n.skipBrowserRedirect) && window.location.assign(r == null ? void 0 : r.url),
            {
                data: {
                    provider: t.provider,
                    url: r == null ? void 0 : r.url
                },
                error: null
            }
        } catch (r) {
            if (I(r))
                return {
                    data: {
                        provider: t.provider,
                        url: null
                    },
                    error: r
                };
            throw r
        }
    }
    async unlinkIdentity(t) {
        try {
            return await this._useSession(async n => {
                var r, s;
                const {data: i, error: o} = n;
                if (o)
                    throw o;
                return await L(this.fetch, "DELETE", `${this.url}/user/identities/${t.identity_id}`, {
                    headers: this.headers,
                    jwt: (s = (r = i.session) === null || r === void 0 ? void 0 : r.access_token) !== null && s !== void 0 ? s : void 0
                })
            }
            )
        } catch (n) {
            if (I(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _refreshAccessToken(t) {
        const n = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
        this._debug(n, "begin");
        try {
            const r = Date.now();
            return await Yv(async s => (s > 0 && await Qv(200 * Math.pow(2, s - 1)),
            this._debug(n, "refreshing attempt", s),
            await L(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                body: {
                    refresh_token: t
                },
                headers: this.headers,
                xform: lt
            })), (s, i) => {
                const o = 200 * Math.pow(2, s);
                return i && To(i) && Date.now() + o - r < Sn
            }
            )
        } catch (r) {
            if (this._debug(n, "error", r),
            I(r))
                return {
                    data: {
                        session: null,
                        user: null
                    },
                    error: r
                };
            throw r
        } finally {
            this._debug(n, "end")
        }
    }
    _isValidSession(t) {
        return typeof t == "object" && t !== null && "access_token"in t && "refresh_token"in t && "expires_at"in t
    }
    async _handleProviderSignIn(t, n) {
        const r = await this._getUrlForProvider(`${this.url}/authorize`, t, {
            redirectTo: n.redirectTo,
            scopes: n.scopes,
            queryParams: n.queryParams
        });
        return this._debug("#_handleProviderSignIn()", "provider", t, "options", n, "url", r),
        Be() && !n.skipBrowserRedirect && window.location.assign(r),
        {
            data: {
                provider: t,
                url: r
            },
            error: null
        }
    }
    async _recoverAndRefresh() {
        var t, n;
        const r = "#_recoverAndRefresh()";
        this._debug(r, "begin");
        try {
            const s = await Xt(this.storage, this.storageKey);
            if (s && this.userStorage) {
                let o = await Xt(this.userStorage, this.storageKey + "-user");
                !this.storage.isServer && Object.is(this.storage, this.userStorage) && !o && (o = {
                    user: s.user
                },
                await Nn(this.userStorage, this.storageKey + "-user", o)),
                s.user = (t = o == null ? void 0 : o.user) !== null && t !== void 0 ? t : Ro()
            } else if (s && !s.user && !s.user) {
                const o = await Xt(this.storage, this.storageKey + "-user");
                o && (o != null && o.user) ? (s.user = o.user,
                await kt(this.storage, this.storageKey + "-user"),
                await Nn(this.storage, this.storageKey, s)) : s.user = Ro()
            }
            if (this._debug(r, "session from storage", s),
            !this._isValidSession(s)) {
                this._debug(r, "session is not valid"),
                s !== null && await this._removeSession();
                return
            }
            const i = ((n = s.expires_at) !== null && n !== void 0 ? n : 1 / 0) * 1e3 - Date.now() < Po;
            if (this._debug(r, `session has${i ? "" : " not"} expired with margin of ${Po}s`),
            i) {
                if (this.autoRefreshToken && s.refresh_token) {
                    const {error: o} = await this._callRefreshToken(s.refresh_token);
                    o && (console.error(o),
                    To(o) || (this._debug(r, "refresh failed with a non-retryable error, removing the session", o),
                    await this._removeSession()))
                }
            } else if (s.user && s.user.__isUserNotAvailableProxy === !0)
                try {
                    const {data: o, error: l} = await this._getUser(s.access_token);
                    !l && (o != null && o.user) ? (s.user = o.user,
                    await this._saveSession(s),
                    await this._notifyAllSubscribers("SIGNED_IN", s)) : this._debug(r, "could not get user data, skipping SIGNED_IN notification")
                } catch (o) {
                    console.error("Error getting user data:", o),
                    this._debug(r, "error getting user data, skipping SIGNED_IN notification", o)
                }
            else
                await this._notifyAllSubscribers("SIGNED_IN", s)
        } catch (s) {
            this._debug(r, "error", s),
            console.error(s);
            return
        } finally {
            this._debug(r, "end")
        }
    }
    async _callRefreshToken(t) {
        var n, r;
        if (!t)
            throw new jt;
        if (this.refreshingDeferred)
            return this.refreshingDeferred.promise;
        const s = `#_callRefreshToken(${t.substring(0, 5)}...)`;
        this._debug(s, "begin");
        try {
            this.refreshingDeferred = new Ki;
            const {data: i, error: o} = await this._refreshAccessToken(t);
            if (o)
                throw o;
            if (!i.session)
                throw new jt;
            await this._saveSession(i.session),
            await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
            const l = {
                session: i.session,
                error: null
            };
            return this.refreshingDeferred.resolve(l),
            l
        } catch (i) {
            if (this._debug(s, "error", i),
            I(i)) {
                const o = {
                    session: null,
                    error: i
                };
                return To(i) || await this._removeSession(),
                (n = this.refreshingDeferred) === null || n === void 0 || n.resolve(o),
                o
            }
            throw (r = this.refreshingDeferred) === null || r === void 0 || r.reject(i),
            i
        } finally {
            this.refreshingDeferred = null,
            this._debug(s, "end")
        }
    }
    async _notifyAllSubscribers(t, n, r=!0) {
        const s = `#_notifyAllSubscribers(${t})`;
        this._debug(s, "begin", n, `broadcast = ${r}`);
        try {
            this.broadcastChannel && r && this.broadcastChannel.postMessage({
                event: t,
                session: n
            });
            const i = []
              , o = Array.from(this.stateChangeEmitters.values()).map(async l => {
                try {
                    await l.callback(t, n)
                } catch (u) {
                    i.push(u)
                }
            }
            );
            if (await Promise.all(o),
            i.length > 0) {
                for (let l = 0; l < i.length; l += 1)
                    console.error(i[l]);
                throw i[0]
            }
        } finally {
            this._debug(s, "end")
        }
    }
    async _saveSession(t) {
        this._debug("#_saveSession()", t),
        this.suppressGetSessionWarning = !0;
        const n = Object.assign({}, t)
          , r = n.user && n.user.__isUserNotAvailableProxy === !0;
        if (this.userStorage) {
            !r && n.user && await Nn(this.userStorage, this.storageKey + "-user", {
                user: n.user
            });
            const s = Object.assign({}, n);
            delete s.user;
            const i = _c(s);
            await Nn(this.storage, this.storageKey, i)
        } else {
            const s = _c(n);
            await Nn(this.storage, this.storageKey, s)
        }
    }
    async _removeSession() {
        this._debug("#_removeSession()"),
        await kt(this.storage, this.storageKey),
        await kt(this.storage, this.storageKey + "-code-verifier"),
        await kt(this.storage, this.storageKey + "-user"),
        this.userStorage && await kt(this.userStorage, this.storageKey + "-user"),
        await this._notifyAllSubscribers("SIGNED_OUT", null)
    }
    _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        const t = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            t && Be() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", t)
        } catch (n) {
            console.error("removing visibilitychange callback failed", n)
        }
    }
    async _startAutoRefresh() {
        await this._stopAutoRefresh(),
        this._debug("#_startAutoRefresh()");
        const t = setInterval( () => this._autoRefreshTokenTick(), Sn);
        this.autoRefreshTicker = t,
        t && typeof t == "object" && typeof t.unref == "function" ? t.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(t),
        setTimeout(async () => {
            await this.initializePromise,
            await this._autoRefreshTokenTick()
        }
        , 0)
    }
    async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        const t = this.autoRefreshTicker;
        this.autoRefreshTicker = null,
        t && clearInterval(t)
    }
    async startAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._startAutoRefresh()
    }
    async stopAutoRefresh() {
        this._removeVisibilityChangedCallback(),
        await this._stopAutoRefresh()
    }
    async _autoRefreshTokenTick() {
        this._debug("#_autoRefreshTokenTick()", "begin");
        try {
            await this._acquireLock(0, async () => {
                try {
                    const t = Date.now();
                    try {
                        return await this._useSession(async n => {
                            const {data: {session: r}} = n;
                            if (!r || !r.refresh_token || !r.expires_at) {
                                this._debug("#_autoRefreshTokenTick()", "no session");
                                return
                            }
                            const s = Math.floor((r.expires_at * 1e3 - t) / Sn);
                            this._debug("#_autoRefreshTokenTick()", `access token expires in ${s} ticks, a tick lasts ${Sn}ms, refresh threshold is ${Ua} ticks`),
                            s <= Ua && await this._callRefreshToken(r.refresh_token)
                        }
                        )
                    } catch (n) {
                        console.error("Auto refresh tick failed with error. This is likely a transient error.", n)
                    }
                } finally {
                    this._debug("#_autoRefreshTokenTick()", "end")
                }
            }
            )
        } catch (t) {
            if (t.isAcquireTimeout || t instanceof Of)
                this._debug("auto refresh token tick lock not available");
            else
                throw t
        }
    }
    async _handleVisibilityChange() {
        if (this._debug("#_handleVisibilityChange()"),
        !Be() || !(window != null && window.addEventListener))
            return this.autoRefreshToken && this.startAutoRefresh(),
            !1;
        try {
            this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1),
            window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback),
            await this._onVisibilityChanged(!0)
        } catch (t) {
            console.error("_handleVisibilityChange", t)
        }
    }
    async _onVisibilityChanged(t) {
        const n = `#_onVisibilityChanged(${t})`;
        this._debug(n, "visibilityState", document.visibilityState),
        document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(),
        t || (await this.initializePromise,
        await this._acquireLock(-1, async () => {
            if (document.visibilityState !== "visible") {
                this._debug(n, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                return
            }
            await this._recoverAndRefresh()
        }
        ))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh()
    }
    async _getUrlForProvider(t, n, r) {
        const s = [`provider=${encodeURIComponent(n)}`];
        if (r != null && r.redirectTo && s.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
        r != null && r.scopes && s.push(`scopes=${encodeURIComponent(r.scopes)}`),
        this.flowType === "pkce") {
            const [i,o] = await wn(this.storage, this.storageKey)
              , l = new URLSearchParams({
                code_challenge: `${encodeURIComponent(i)}`,
                code_challenge_method: `${encodeURIComponent(o)}`
            });
            s.push(l.toString())
        }
        if (r != null && r.queryParams) {
            const i = new URLSearchParams(r.queryParams);
            s.push(i.toString())
        }
        return r != null && r.skipBrowserRedirect && s.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
        `${t}?${s.join("&")}`
    }
    async _unenroll(t) {
        try {
            return await this._useSession(async n => {
                var r;
                const {data: s, error: i} = n;
                return i ? {
                    data: null,
                    error: i
                } : await L(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
                    headers: this.headers,
                    jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token
                })
            }
            )
        } catch (n) {
            if (I(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _enroll(t) {
        try {
            return await this._useSession(async n => {
                var r, s;
                const {data: i, error: o} = n;
                if (o)
                    return {
                        data: null,
                        error: o
                    };
                const l = Object.assign({
                    friendly_name: t.friendlyName,
                    factor_type: t.factorType
                }, t.factorType === "phone" ? {
                    phone: t.phone
                } : {
                    issuer: t.issuer
                })
                  , {data: u, error: c} = await L(this.fetch, "POST", `${this.url}/factors`, {
                    body: l,
                    headers: this.headers,
                    jwt: (r = i == null ? void 0 : i.session) === null || r === void 0 ? void 0 : r.access_token
                });
                return c ? {
                    data: null,
                    error: c
                } : (t.factorType === "totp" && (!((s = u == null ? void 0 : u.totp) === null || s === void 0) && s.qr_code) && (u.totp.qr_code = `data:image/svg+xml;utf-8,${u.totp.qr_code}`),
                {
                    data: u,
                    error: null
                })
            }
            )
        } catch (n) {
            if (I(n))
                return {
                    data: null,
                    error: n
                };
            throw n
        }
    }
    async _verify(t) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async n => {
                    var r;
                    const {data: s, error: i} = n;
                    if (i)
                        return {
                            data: null,
                            error: i
                        };
                    const {data: o, error: l} = await L(this.fetch, "POST", `${this.url}/factors/${t.factorId}/verify`, {
                        body: {
                            code: t.code,
                            challenge_id: t.challengeId
                        },
                        headers: this.headers,
                        jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token
                    });
                    return l ? {
                        data: null,
                        error: l
                    } : (await this._saveSession(Object.assign({
                        expires_at: Math.round(Date.now() / 1e3) + o.expires_in
                    }, o)),
                    await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", o),
                    {
                        data: o,
                        error: l
                    })
                }
                )
            } catch (n) {
                if (I(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        }
        )
    }
    async _challenge(t) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async n => {
                    var r;
                    const {data: s, error: i} = n;
                    return i ? {
                        data: null,
                        error: i
                    } : await L(this.fetch, "POST", `${this.url}/factors/${t.factorId}/challenge`, {
                        body: {
                            channel: t.channel
                        },
                        headers: this.headers,
                        jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token
                    })
                }
                )
            } catch (n) {
                if (I(n))
                    return {
                        data: null,
                        error: n
                    };
                throw n
            }
        }
        )
    }
    async _challengeAndVerify(t) {
        const {data: n, error: r} = await this._challenge({
            factorId: t.factorId
        });
        return r ? {
            data: null,
            error: r
        } : await this._verify({
            factorId: t.factorId,
            challengeId: n.id,
            code: t.code
        })
    }
    async _listFactors() {
        const {data: {user: t}, error: n} = await this.getUser();
        if (n)
            return {
                data: null,
                error: n
            };
        const r = (t == null ? void 0 : t.factors) || []
          , s = r.filter(o => o.factor_type === "totp" && o.status === "verified")
          , i = r.filter(o => o.factor_type === "phone" && o.status === "verified");
        return {
            data: {
                all: r,
                totp: s,
                phone: i
            },
            error: null
        }
    }
    async _getAuthenticatorAssuranceLevel() {
        return this._acquireLock(-1, async () => await this._useSession(async t => {
            var n, r;
            const {data: {session: s}, error: i} = t;
            if (i)
                return {
                    data: null,
                    error: i
                };
            if (!s)
                return {
                    data: {
                        currentLevel: null,
                        nextLevel: null,
                        currentAuthenticationMethods: []
                    },
                    error: null
                };
            const {payload: o} = Oo(s.access_token);
            let l = null;
            o.aal && (l = o.aal);
            let u = l;
            ((r = (n = s.user.factors) === null || n === void 0 ? void 0 : n.filter(h => h.status === "verified")) !== null && r !== void 0 ? r : []).length > 0 && (u = "aal2");
            const d = o.amr || [];
            return {
                data: {
                    currentLevel: l,
                    nextLevel: u,
                    currentAuthenticationMethods: d
                },
                error: null
            }
        }
        ))
    }
    async fetchJwk(t, n={
        keys: []
    }) {
        let r = n.keys.find(l => l.kid === t);
        if (r)
            return r;
        const s = Date.now();
        if (r = this.jwks.keys.find(l => l.kid === t),
        r && this.jwks_cached_at + $v > s)
            return r;
        const {data: i, error: o} = await L(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
            headers: this.headers
        });
        if (o)
            throw o;
        return !i.keys || i.keys.length === 0 || (this.jwks = i,
        this.jwks_cached_at = s,
        r = i.keys.find(l => l.kid === t),
        !r) ? null : r
    }
    async getClaims(t, n={}) {
        try {
            let r = t;
            if (!r) {
                const {data: y, error: v} = await this.getSession();
                if (v || !y.session)
                    return {
                        data: null,
                        error: v
                    };
                r = y.session.access_token
            }
            const {header: s, payload: i, signature: o, raw: {header: l, payload: u}} = Oo(r);
            n != null && n.allowExpired || sx(i.exp);
            const c = !s.alg || s.alg.startsWith("HS") || !s.kid || !("crypto"in globalThis && "subtle"in globalThis.crypto) ? null : await this.fetchJwk(s.kid, n != null && n.keys ? {
                keys: n.keys
            } : n == null ? void 0 : n.jwks);
            if (!c) {
                const {error: y} = await this.getUser(r);
                if (y)
                    throw y;
                return {
                    data: {
                        claims: i,
                        header: s,
                        signature: o
                    },
                    error: null
                }
            }
            const d = ix(s.alg)
              , h = await crypto.subtle.importKey("jwk", c, d, !0, ["verify"]);
            if (!await crypto.subtle.verify(d, h, o, Hv(`${l}.${u}`)))
                throw new za("Invalid JWT signature");
            return {
                data: {
                    claims: i,
                    header: s,
                    signature: o
                },
                error: null
            }
        } catch (r) {
            if (I(r))
                return {
                    data: null,
                    error: r
                };
            throw r
        }
    }
}
ts.nextInstanceID = 0;
const bx = ts;
class _x extends bx {
    constructor(t) {
        super(t)
    }
}
var kx = function(e, t, n, r) {
    function s(i) {
        return i instanceof n ? i : new n(function(o) {
            o(i)
        }
        )
    }
    return new (n || (n = Promise))(function(i, o) {
        function l(d) {
            try {
                c(r.next(d))
            } catch (h) {
                o(h)
            }
        }
        function u(d) {
            try {
                c(r.throw(d))
            } catch (h) {
                o(h)
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(l, u)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
};
class jx {
    constructor(t, n, r) {
        var s, i, o;
        this.supabaseUrl = t,
        this.supabaseKey = n;
        const l = Pv(t);
        if (!n)
            throw new Error("supabaseKey is required.");
        this.realtimeUrl = new URL("realtime/v1",l),
        this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"),
        this.authUrl = new URL("auth/v1",l),
        this.storageUrl = new URL("storage/v1",l),
        this.functionsUrl = new URL("functions/v1",l);
        const u = `sb-${l.hostname.split(".")[0]}-auth-token`
          , c = {
            db: xv,
            realtime: bv,
            auth: Object.assign(Object.assign({}, wv), {
                storageKey: u
            }),
            global: vv
        }
          , d = Cv(r ?? {}, c);
        this.storageKey = (s = d.auth.storageKey) !== null && s !== void 0 ? s : "",
        this.headers = (i = d.global.headers) !== null && i !== void 0 ? i : {},
        d.accessToken ? (this.accessToken = d.accessToken,
        this.auth = new Proxy({},{
            get: (h, f) => {
                throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`)
            }
        })) : this.auth = this._initSupabaseAuthClient((o = d.auth) !== null && o !== void 0 ? o : {}, this.headers, d.global.fetch),
        this.fetch = Sv(n, this._getAccessToken.bind(this), d.global.fetch),
        this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, d.realtime)),
        this.rest = new My(new URL("rest/v1",l).href,{
            headers: this.headers,
            schema: d.db.schema,
            fetch: this.fetch
        }),
        this.storage = new mv(this.storageUrl.href,this.headers,this.fetch,r == null ? void 0 : r.storage),
        d.accessToken || this._listenForAuthEvents()
    }
    get functions() {
        return new yy(this.functionsUrl.href,{
            headers: this.headers,
            customFetch: this.fetch
        })
    }
    from(t) {
        return this.rest.from(t)
    }
    schema(t) {
        return this.rest.schema(t)
    }
    rpc(t, n={}, r={}) {
        return this.rest.rpc(t, n, r)
    }
    channel(t, n={
        config: {}
    }) {
        return this.realtime.channel(t, n)
    }
    getChannels() {
        return this.realtime.getChannels()
    }
    removeChannel(t) {
        return this.realtime.removeChannel(t)
    }
    removeAllChannels() {
        return this.realtime.removeAllChannels()
    }
    _getAccessToken() {
        var t, n;
        return kx(this, void 0, void 0, function*() {
            if (this.accessToken)
                return yield this.accessToken();
            const {data: r} = yield this.auth.getSession();
            return (n = (t = r.session) === null || t === void 0 ? void 0 : t.access_token) !== null && n !== void 0 ? n : this.supabaseKey
        })
    }
    _initSupabaseAuthClient({autoRefreshToken: t, persistSession: n, detectSessionInUrl: r, storage: s, userStorage: i, storageKey: o, flowType: l, lock: u, debug: c}, d, h) {
        const f = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new _x({
            url: this.authUrl.href,
            headers: Object.assign(Object.assign({}, f), d),
            storageKey: o,
            autoRefreshToken: t,
            persistSession: n,
            detectSessionInUrl: r,
            storage: s,
            userStorage: i,
            flowType: l,
            lock: u,
            debug: c,
            fetch: h,
            hasCustomAuthorizationHeader: Object.keys(this.headers).some(y => y.toLowerCase() === "authorization")
        })
    }
    _initRealtimeClient(t) {
        return new nv(this.realtimeUrl.href,Object.assign(Object.assign({}, t), {
            params: Object.assign({
                apikey: this.supabaseKey
            }, t == null ? void 0 : t.params)
        }))
    }
    _listenForAuthEvents() {
        return this.auth.onAuthStateChange( (n, r) => {
            this._handleTokenChanged(n, "CLIENT", r == null ? void 0 : r.access_token)
        }
        )
    }
    _handleTokenChanged(t, n, r) {
        (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") && this.changedAccessToken !== r ? this.changedAccessToken = r : t === "SIGNED_OUT" && (this.realtime.setAuth(),
        n == "STORAGE" && this.auth.signOut(),
        this.changedAccessToken = void 0)
    }
}
const Sx = (e, t, n) => new jx(e,t,n);
function Nx() {
    if (typeof window < "u" || typeof process > "u")
        return !1;
    const e = process.version;
    if (e == null)
        return !1;
    const t = e.match(/^v(\d+)\./);
    return t ? parseInt(t[1], 10) <= 18 : !1
}
Nx() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
const Ex = "https://bqjbbsqywehcipdkppxe.supabase.co"
  , Cx = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxamJic3F5d2VoY2lwZGtwcHhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MTY2NjAsImV4cCI6MjA3NTA5MjY2MH0.hTKPXEDsI0XOTDWzBgE1_NaRv1U9KGI4EMVsXkqwm2Q"
  , qe = Sx(Ex, Cx, {
    auth: {
        persistSession: !0,
        autoRefreshToken: !0
    },
    global: {
        headers: {
            "X-Client-Info": "plate-signal-app"
        }
    }
})
  , Rf = w.createContext(void 0);
function Px({children: e}) {
    const [t,n] = w.useState(null)
      , [r,s] = w.useState(null)
      , [i,o] = w.useState(!0);
    w.useEffect( () => {
        qe.auth.getSession().then( ({data: {session: h}}) => {
            s(h),
            n((h == null ? void 0 : h.user) ?? null),
            o(!1)
        }
        );
        const {data: {subscription: d}} = qe.auth.onAuthStateChange( (h, f) => {
            (async () => (s(f),
            n((f == null ? void 0 : f.user) ?? null)))()
        }
        );
        return () => d.unsubscribe()
    }
    , []);
    const l = async (d, h) => {
        try {
            const {error: f} = await qe.auth.signUp({
                email: d,
                password: h
            });
            if (f)
                throw f;
            return {
                error: null
            }
        } catch (f) {
            return {
                error: f
            }
        }
    }
      , u = async (d, h) => {
        try {
            const {error: f} = await qe.auth.signInWithPassword({
                email: d,
                password: h
            });
            if (f)
                throw f;
            return {
                error: null
            }
        } catch (f) {
            return {
                error: f
            }
        }
    }
      , c = async () => {
        await qe.auth.signOut()
    }
    ;
    return a.jsx(Rf.Provider, {
        value: {
            user: t,
            session: r,
            loading: i,
            signUp: l,
            signIn: u,
            signOut: c
        },
        children: e
    })
}
function qi() {
    const e = w.useContext(Rf);
    if (e === void 0)
        throw new Error("useAuth must be used within an AuthProvider");
    return e
}
function Tx() {
    const [e,t] = w.useState("")
      , [n,r] = w.useState("")
      , [s,i] = w.useState("")
      , [o,l] = w.useState(!1)
      , {signIn: u} = qi()
      , c = gn()
      , d = async h => {
        h.preventDefault(),
        i(""),
        l(!0);
        const {error: f} = await u(e, n);
        f ? (i(f.message),
        l(!1)) : c("/dashboard")
    }
    ;
    return a.jsx("div", {
        className: "min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12",
        children: a.jsxs("div", {
            className: "max-w-md w-full",
            children: [a.jsxs("div", {
                className: "text-center mb-8",
                children: [a.jsx("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-2",
                    children: "Welcome Back"
                }), a.jsx("p", {
                    className: "text-gray-600",
                    children: "Sign in to your Plate Signal account"
                })]
            }), a.jsxs("div", {
                className: "bg-white rounded-lg shadow-sm border border-gray-200 p-8",
                children: [a.jsxs("form", {
                    onSubmit: d,
                    className: "space-y-6",
                    children: [a.jsxs("div", {
                        children: [a.jsx("label", {
                            htmlFor: "email",
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Email"
                        }), a.jsx("input", {
                            id: "email",
                            type: "email",
                            value: e,
                            onChange: h => t(h.target.value),
                            required: !0,
                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                            placeholder: "your@email.com"
                        })]
                    }), a.jsxs("div", {
                        children: [a.jsx("label", {
                            htmlFor: "password",
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Password"
                        }), a.jsx("input", {
                            id: "password",
                            type: "password",
                            value: n,
                            onChange: h => r(h.target.value),
                            required: !0,
                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                            placeholder: "••••••••"
                        })]
                    }), s && a.jsx("div", {
                        className: "bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm",
                        children: s
                    }), a.jsx("button", {
                        type: "submit",
                        disabled: o,
                        className: "w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2",
                        children: o ? a.jsxs(a.Fragment, {
                            children: [a.jsx(es, {
                                className: "w-5 h-5 animate-spin"
                            }), "Signing in..."]
                        }) : a.jsxs(a.Fragment, {
                            children: [a.jsx(L0, {
                                className: "w-5 h-5"
                            }), "Sign In"]
                        })
                    })]
                }), a.jsx("div", {
                    className: "mt-6 text-center",
                    children: a.jsxs("p", {
                        className: "text-gray-600",
                        children: ["Don't have an account?", " ", a.jsx(Ge, {
                            to: "/signup",
                            className: "text-blue-600 hover:text-blue-700 font-medium",
                            children: "Sign up"
                        })]
                    })
                })]
            }), a.jsx("div", {
                className: "mt-6 text-center",
                children: a.jsx(Ge, {
                    to: "/",
                    className: "text-gray-600 hover:text-gray-900",
                    children: "← Back to home"
                })
            })]
        })
    })
}
function Ox() {
    const [e,t] = w.useState("")
      , [n,r] = w.useState("")
      , [s,i] = w.useState("")
      , [o,l] = w.useState("")
      , [u,c] = w.useState(!1)
      , {signUp: d} = qi()
      , h = gn()
      , f = async y => {
        if (y.preventDefault(),
        l(""),
        n !== s) {
            l("Passwords do not match");
            return
        }
        if (n.length < 6) {
            l("Password must be at least 6 characters");
            return
        }
        c(!0);
        const {error: v} = await d(e, n);
        v ? (l(v.message),
        c(!1)) : h("/dashboard")
    }
    ;
    return a.jsx("div", {
        className: "min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12",
        children: a.jsxs("div", {
            className: "max-w-md w-full",
            children: [a.jsxs("div", {
                className: "text-center mb-8",
                children: [a.jsx("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-2",
                    children: "Create Your Account"
                }), a.jsx("p", {
                    className: "text-gray-600",
                    children: "Start understanding your meals today"
                })]
            }), a.jsxs("div", {
                className: "bg-white rounded-lg shadow-sm border border-gray-200 p-8",
                children: [a.jsxs("form", {
                    onSubmit: f,
                    className: "space-y-6",
                    children: [a.jsxs("div", {
                        children: [a.jsx("label", {
                            htmlFor: "email",
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Email"
                        }), a.jsx("input", {
                            id: "email",
                            type: "email",
                            value: e,
                            onChange: y => t(y.target.value),
                            required: !0,
                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                            placeholder: "your@email.com"
                        })]
                    }), a.jsxs("div", {
                        children: [a.jsx("label", {
                            htmlFor: "password",
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Password"
                        }), a.jsx("input", {
                            id: "password",
                            type: "password",
                            value: n,
                            onChange: y => r(y.target.value),
                            required: !0,
                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                            placeholder: "••••••••"
                        })]
                    }), a.jsxs("div", {
                        children: [a.jsx("label", {
                            htmlFor: "confirmPassword",
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Confirm Password"
                        }), a.jsx("input", {
                            id: "confirmPassword",
                            type: "password",
                            value: s,
                            onChange: y => i(y.target.value),
                            required: !0,
                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                            placeholder: "••••••••"
                        })]
                    }), o && a.jsx("div", {
                        className: "bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm",
                        children: o
                    }), a.jsx("button", {
                        type: "submit",
                        disabled: u,
                        className: "w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2",
                        children: u ? a.jsxs(a.Fragment, {
                            children: [a.jsx(es, {
                                className: "w-5 h-5 animate-spin"
                            }), "Creating account..."]
                        }) : a.jsxs(a.Fragment, {
                            children: [a.jsx(M0, {
                                className: "w-5 h-5"
                            }), "Sign Up"]
                        })
                    })]
                }), a.jsx("div", {
                    className: "mt-6 text-center",
                    children: a.jsxs("p", {
                        className: "text-gray-600",
                        children: ["Already have an account?", " ", a.jsx(Ge, {
                            to: "/login",
                            className: "text-blue-600 hover:text-blue-700 font-medium",
                            children: "Sign in"
                        })]
                    })
                })]
            }), a.jsx("div", {
                className: "mt-6 text-center",
                children: a.jsx(Ge, {
                    to: "/",
                    className: "text-gray-600 hover:text-gray-900",
                    children: "← Back to home"
                })
            })]
        })
    })
}
const Ec = [{
    primary: "Balanced",
    secondary: "Moderate Satiety",
    explanation: "This meal shows a mix of protein, carbohydrates, and fiber. It may support steady energy and moderate satiety for 3-4 hours."
}, {
    primary: "Energy-Rich",
    secondary: "Quick Energy",
    explanation: "This meal appears carbohydrate-focused. It may provide quick energy with satiety lasting 2-3 hours."
}, {
    primary: "Protein-Forward",
    secondary: "High Satiety",
    explanation: "This meal emphasizes protein. It may support longer-lasting fullness and stable energy for 4-5 hours."
}, {
    primary: "Light",
    secondary: "Short Satiety",
    explanation: "This meal appears light with fewer calories. It may provide gentle energy with satiety lasting 1-2 hours."
}, {
    primary: "Fiber-Rich",
    secondary: "Sustained Energy",
    explanation: "This meal contains visible fiber sources. It may support digestive comfort and steady energy for 4+ hours."
}];
function Rx() {
    return Ec[Math.floor(Math.random() * Ec.length)]
}
function Ix() {
    const {user: e, signOut: t} = qi()
      , [n,r] = w.useState([])
      , [s,i] = w.useState(!0)
      , [o,l] = w.useState(!1)
      , [u,c] = w.useState("");
    w.useEffect( () => {
        d()
    }
    , [e]);
    const d = async () => {
        if (e) {
            i(!0);
            try {
                const {data: f, error: y} = await qe.from("meals").select("*").eq("user_id", e.id).order("uploaded_at", {
                    ascending: !1
                });
                if (y)
                    throw y;
                const v = await Promise.all((f || []).map(async b => {
                    const {data: k} = await qe.from("meal_analysis").select("*").eq("meal_id", b.id).maybeSingle();
                    return {
                        ...b,
                        analysis: k || void 0
                    }
                }
                ));
                r(v)
            } catch (f) {
                console.error("Error loading meals:", f)
            } finally {
                i(!1)
            }
        }
    }
      , h = async f => {
        var v;
        const y = (v = f.target.files) == null ? void 0 : v[0];
        if (!(!y || !e)) {
            if (!y.type.startsWith("image/")) {
                c("Please upload an image file");
                return
            }
            l(!0),
            c("");
            try {
                const b = y.name.split(".").pop()
                  , k = `${e.id}/${Date.now()}.${b}`
                  , {error: g} = await qe.storage.from("meals").upload(k, y);
                if (g)
                    throw g;
                const {data: {publicUrl: m}} = qe.storage.from("meals").getPublicUrl(k)
                  , {data: p, error: _} = await qe.from("meals").insert({
                    user_id: e.id,
                    image_url: m
                }).select().single();
                if (_)
                    throw _;
                const x = Rx();
                await qe.from("meal_analysis").insert({
                    meal_id: p.id,
                    primary_signal: x.primary,
                    secondary_signal: x.secondary,
                    explanation: x.explanation
                }),
                await d()
            } catch (b) {
                console.error("Error uploading meal:", b),
                c(b.message || "Failed to upload meal")
            } finally {
                l(!1)
            }
        }
    }
    ;
    return a.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [a.jsx("header", {
            className: "bg-white border-b border-gray-200",
            children: a.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",
                children: [a.jsxs(Ge, {
                    to: "/",
                    className: "flex items-center gap-2",
                    children: [a.jsx("div", {
                        className: "w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center",
                        children: a.jsx(jn, {
                            className: "w-6 h-6 text-white"
                        })
                    }), a.jsx("span", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Plate Signal"
                    })]
                }), a.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [a.jsx("span", {
                        className: "text-gray-600",
                        children: e == null ? void 0 : e.email
                    }), a.jsxs("button", {
                        onClick: () => t(),
                        className: "flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors",
                        children: [a.jsx(U0, {
                            className: "w-5 h-5"
                        }), "Logout"]
                    })]
                })]
            })
        }), a.jsxs("main", {
            className: "max-w-7xl mx-auto px-6 py-12",
            children: [a.jsxs("div", {
                className: "mb-12",
                children: [a.jsx("h1", {
                    className: "text-4xl font-bold text-gray-900 mb-4",
                    children: "Your Dashboard"
                }), a.jsx("p", {
                    className: "text-xl text-gray-600",
                    children: "Upload meals and track your signals over time"
                })]
            }), a.jsxs("div", {
                className: "bg-white rounded-2xl border-2 border-dashed border-gray-300 p-12 mb-12 text-center hover:border-blue-400 transition-colors",
                children: [a.jsx("input", {
                    type: "file",
                    id: "meal-upload",
                    accept: "image/*",
                    onChange: h,
                    disabled: o,
                    className: "hidden"
                }), a.jsxs("label", {
                    htmlFor: "meal-upload",
                    className: "cursor-pointer block",
                    children: [a.jsx("div", {
                        className: "w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6",
                        children: o ? a.jsx(es, {
                            className: "w-10 h-10 text-blue-600 animate-spin"
                        }) : a.jsx(Pa, {
                            className: "w-10 h-10 text-blue-600"
                        })
                    }), a.jsx("h2", {
                        className: "text-2xl font-bold text-gray-900 mb-2",
                        children: o ? "Uploading..." : "Upload a Meal Photo"
                    }), a.jsx("p", {
                        className: "text-gray-600 mb-4",
                        children: "Click to select an image from your device"
                    }), u && a.jsx("p", {
                        className: "text-red-600 text-sm",
                        children: u
                    })]
                })]
            }), a.jsxs("div", {
                children: [a.jsx("h2", {
                    className: "text-3xl font-bold text-gray-900 mb-8",
                    children: "Your Meal History"
                }), s ? a.jsx("div", {
                    className: "text-center py-12",
                    children: a.jsx(es, {
                        className: "w-8 h-8 text-blue-600 animate-spin mx-auto"
                    })
                }) : n.length === 0 ? a.jsxs("div", {
                    className: "bg-white rounded-2xl border border-gray-200 p-12 text-center",
                    children: [a.jsx("div", {
                        className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: a.jsx(A0, {
                            className: "w-8 h-8 text-gray-400"
                        })
                    }), a.jsx("h3", {
                        className: "text-xl font-bold text-gray-900 mb-2",
                        children: "No meals yet"
                    }), a.jsx("p", {
                        className: "text-gray-600",
                        children: "Upload your first meal to get started"
                    })]
                }) : a.jsx("div", {
                    className: "grid md:grid-cols-2 gap-8",
                    children: n.map(f => a.jsxs("div", {
                        className: "bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow",
                        children: [a.jsx("div", {
                            className: "aspect-video bg-gray-100",
                            children: a.jsx("img", {
                                src: f.image_url,
                                alt: "Meal",
                                className: "w-full h-full object-cover"
                            })
                        }), a.jsxs("div", {
                            className: "p-6",
                            children: [a.jsxs("div", {
                                className: "flex items-center gap-2 text-sm text-gray-500 mb-4",
                                children: [a.jsx(tf, {
                                    className: "w-4 h-4"
                                }), new Date(f.uploaded_at).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                    hour: "numeric",
                                    minute: "2-digit"
                                })]
                            }), f.analysis && a.jsxs("div", {
                                className: "bg-blue-50 border-2 border-blue-200 rounded-lg p-4",
                                children: [a.jsxs("div", {
                                    className: "flex items-center gap-2 mb-2",
                                    children: [a.jsx("div", {
                                        className: "w-3 h-3 bg-blue-600 rounded-full"
                                    }), a.jsx("span", {
                                        className: "font-bold text-gray-900",
                                        children: f.analysis.primary_signal
                                    }), a.jsx("span", {
                                        className: "text-gray-600",
                                        children: "•"
                                    }), a.jsx("span", {
                                        className: "text-gray-600",
                                        children: f.analysis.secondary_signal
                                    })]
                                }), a.jsx("p", {
                                    className: "text-gray-700 text-sm leading-relaxed",
                                    children: f.analysis.explanation
                                })]
                            })]
                        })]
                    }, f.id))
                })]
            })]
        })]
    })
}
function $x({children: e}) {
    const {user: t, loading: n} = qi();
    return n ? a.jsx("div", {
        className: "min-h-screen bg-gray-50 flex items-center justify-center",
        children: a.jsx(es, {
            className: "w-8 h-8 text-blue-600 animate-spin"
        })
    }) : t ? a.jsx(a.Fragment, {
        children: e
    }) : a.jsx(Gg, {
        to: "/login",
        replace: !0
    })
}
function Ax({children: e}) {
    return w.useEffect( () => {
        F0()
    }
    , []),
    a.jsx(a.Fragment, {
        children: e
    })
}
function Lx() {
    return a.jsx(x0, {
        children: a.jsx(Px, {
            children: a.jsx(Ax, {
                children: a.jsxs(Qg, {
                    children: [a.jsx(be, {
                        path: "/",
                        element: a.jsx(K0, {})
                    }), a.jsx(be, {
                        path: "/login",
                        element: a.jsx(Tx, {})
                    }), a.jsx(be, {
                        path: "/signup",
                        element: a.jsx(Ox, {})
                    }), a.jsx(be, {
                        path: "/dashboard",
                        element: a.jsx($x, {
                            children: a.jsx(Ix, {})
                        })
                    }), a.jsx(be, {
                        path: "/quiz",
                        element: a.jsx(K0, {})
                    }), a.jsx(be, {
                        path: "/video",
                        element: a.jsx(G0, {})
                    }), a.jsx(be, {
                        path: "/backr",
                        element: a.jsx(Q0, {})
                    }), a.jsx(be, {
                        path: "/us1",
                        element: a.jsx(ry, {})
                    }), a.jsx(be, {
                        path: "/us2",
                        element: a.jsx(iy, {})
                    }), a.jsx(be, {
                        path: "/us3",
                        element: a.jsx(ay, {})
                    }), a.jsx(be, {
                        path: "/us4",
                        element: a.jsx(uy, {})
                    }), a.jsx(be, {
                        path: "/thanks",
                        element: a.jsx(dy, {})
                    }), a.jsx(be, {
                        path: "*",
                        element: a.jsx(Fi, {})
                    })]
                })
            })
        })
    })
}
zh(document.getElementById("root")).render(a.jsx(w.StrictMode, {
    children: a.jsx(Lx, {})
}));
