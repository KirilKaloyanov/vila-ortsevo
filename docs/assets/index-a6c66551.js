var _i = (t, e, i) => {
  if (!e.has(t)) throw TypeError("Cannot " + i);
};
var w = (t, e, i) => (
    _i(t, e, "read from private field"), i ? i.call(t) : e.get(t)
  ),
  b = (t, e, i) => {
    if (e.has(t))
      throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(t) : e.set(t, i);
  },
  Z = (t, e, i, o) => (
    _i(t, e, "write to private field"), o ? o.call(t, i) : e.set(t, i), i
  );
var cn = (t, e, i, o) => ({
    set _(a) {
      Z(t, e, a, i);
    },
    get _() {
      return w(t, e, o);
    },
  }),
  e2 = (t, e, i) => (_i(t, e, "access private method"), i);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) o(a);
  new MutationObserver((a) => {
    for (const l of a)
      if (l.type === "childList")
        for (const h of l.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && o(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(a) {
    const l = {};
    return (
      a.integrity && (l.integrity = a.integrity),
      a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : a.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function o(a) {
    if (a.ep) return;
    a.ep = !0;
    const l = i(a);
    fetch(a.href, l);
  }
})();
var Xl =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Fs(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var js = { exports: {} },
  m0 = {},
  Zs = { exports: {} },
  n2 = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var F3 = Symbol.for("react.element"),
  Jl = Symbol.for("react.portal"),
  tu = Symbol.for("react.fragment"),
  eu = Symbol.for("react.strict_mode"),
  nu = Symbol.for("react.profiler"),
  iu = Symbol.for("react.provider"),
  ru = Symbol.for("react.context"),
  ou = Symbol.for("react.forward_ref"),
  su = Symbol.for("react.suspense"),
  au = Symbol.for("react.memo"),
  lu = Symbol.for("react.lazy"),
  l6 = Symbol.iterator;
function uu(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (l6 && t[l6]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Us = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Hs = Object.assign,
  Ws = {};
function P4(t, e, i) {
  (this.props = t),
    (this.context = e),
    (this.refs = Ws),
    (this.updater = i || Us);
}
P4.prototype.isReactComponent = {};
P4.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
P4.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function bs() {}
bs.prototype = P4.prototype;
function Jr(t, e, i) {
  (this.props = t),
    (this.context = e),
    (this.refs = Ws),
    (this.updater = i || Us);
}
var t9 = (Jr.prototype = new bs());
t9.constructor = Jr;
Hs(t9, P4.prototype);
t9.isPureReactComponent = !0;
var u6 = Array.isArray,
  Vs = Object.prototype.hasOwnProperty,
  e9 = { current: null },
  $s = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qs(t, e, i) {
  var o,
    a = {},
    l = null,
    h = null;
  if (e != null)
    for (o in (e.ref !== void 0 && (h = e.ref),
    e.key !== void 0 && (l = "" + e.key),
    e))
      Vs.call(e, o) && !$s.hasOwnProperty(o) && (a[o] = e[o]);
  var d = arguments.length - 2;
  if (d === 1) a.children = i;
  else if (1 < d) {
    for (var p = Array(d), g = 0; g < d; g++) p[g] = arguments[g + 2];
    a.children = p;
  }
  if (t && t.defaultProps)
    for (o in ((d = t.defaultProps), d)) a[o] === void 0 && (a[o] = d[o]);
  return {
    $$typeof: F3,
    type: t,
    key: l,
    ref: h,
    props: a,
    _owner: e9.current,
  };
}
function cu(t, e) {
  return {
    $$typeof: F3,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function n9(t) {
  return typeof t == "object" && t !== null && t.$$typeof === F3;
}
function hu(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (i) {
      return e[i];
    })
  );
}
var c6 = /\/+/g;
function vi(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? hu("" + t.key)
    : e.toString(36);
}
function Mn(t, e, i, o, a) {
  var l = typeof t;
  (l === "undefined" || l === "boolean") && (t = null);
  var h = !1;
  if (t === null) h = !0;
  else
    switch (l) {
      case "string":
      case "number":
        h = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case F3:
          case Jl:
            h = !0;
        }
    }
  if (h)
    return (
      (h = t),
      (a = a(h)),
      (t = o === "" ? "." + vi(h, 0) : o),
      u6(a)
        ? ((i = ""),
          t != null && (i = t.replace(c6, "$&/") + "/"),
          Mn(a, e, i, "", function (g) {
            return g;
          }))
        : a != null &&
          (n9(a) &&
            (a = cu(
              a,
              i +
                (!a.key || (h && h.key === a.key)
                  ? ""
                  : ("" + a.key).replace(c6, "$&/") + "/") +
                t
            )),
          e.push(a)),
      1
    );
  if (((h = 0), (o = o === "" ? "." : o + ":"), u6(t)))
    for (var d = 0; d < t.length; d++) {
      l = t[d];
      var p = o + vi(l, d);
      h += Mn(l, e, i, p, a);
    }
  else if (((p = uu(t)), typeof p == "function"))
    for (t = p.call(t), d = 0; !(l = t.next()).done; )
      (l = l.value), (p = o + vi(l, d++)), (h += Mn(l, e, i, p, a));
  else if (l === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return h;
}
function hn(t, e, i) {
  if (t == null) return t;
  var o = [],
    a = 0;
  return (
    Mn(t, o, "", "", function (l) {
      return e.call(i, l, a++);
    }),
    o
  );
}
function fu(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (i) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = i));
        },
        function (i) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = i));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Y2 = { current: null },
  On = { transition: null },
  du = {
    ReactCurrentDispatcher: Y2,
    ReactCurrentBatchConfig: On,
    ReactCurrentOwner: e9,
  };
n2.Children = {
  map: hn,
  forEach: function (t, e, i) {
    hn(
      t,
      function () {
        e.apply(this, arguments);
      },
      i
    );
  },
  count: function (t) {
    var e = 0;
    return (
      hn(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      hn(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!n9(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  },
};
n2.Component = P4;
n2.Fragment = tu;
n2.Profiler = nu;
n2.PureComponent = Jr;
n2.StrictMode = eu;
n2.Suspense = su;
n2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = du;
n2.cloneElement = function (t, e, i) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        "."
    );
  var o = Hs({}, t.props),
    a = t.key,
    l = t.ref,
    h = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((l = e.ref), (h = e9.current)),
      e.key !== void 0 && (a = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var d = t.type.defaultProps;
    for (p in e)
      Vs.call(e, p) &&
        !$s.hasOwnProperty(p) &&
        (o[p] = e[p] === void 0 && d !== void 0 ? d[p] : e[p]);
  }
  var p = arguments.length - 2;
  if (p === 1) o.children = i;
  else if (1 < p) {
    d = Array(p);
    for (var g = 0; g < p; g++) d[g] = arguments[g + 2];
    o.children = d;
  }
  return { $$typeof: F3, type: t.type, key: a, ref: l, props: o, _owner: h };
};
n2.createContext = function (t) {
  return (
    (t = {
      $$typeof: ru,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: iu, _context: t }),
    (t.Consumer = t)
  );
};
n2.createElement = Qs;
n2.createFactory = function (t) {
  var e = Qs.bind(null, t);
  return (e.type = t), e;
};
n2.createRef = function () {
  return { current: null };
};
n2.forwardRef = function (t) {
  return { $$typeof: ou, render: t };
};
n2.isValidElement = n9;
n2.lazy = function (t) {
  return { $$typeof: lu, _payload: { _status: -1, _result: t }, _init: fu };
};
n2.memo = function (t, e) {
  return { $$typeof: au, type: t, compare: e === void 0 ? null : e };
};
n2.startTransition = function (t) {
  var e = On.transition;
  On.transition = {};
  try {
    t();
  } finally {
    On.transition = e;
  }
};
n2.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
n2.useCallback = function (t, e) {
  return Y2.current.useCallback(t, e);
};
n2.useContext = function (t) {
  return Y2.current.useContext(t);
};
n2.useDebugValue = function () {};
n2.useDeferredValue = function (t) {
  return Y2.current.useDeferredValue(t);
};
n2.useEffect = function (t, e) {
  return Y2.current.useEffect(t, e);
};
n2.useId = function () {
  return Y2.current.useId();
};
n2.useImperativeHandle = function (t, e, i) {
  return Y2.current.useImperativeHandle(t, e, i);
};
n2.useInsertionEffect = function (t, e) {
  return Y2.current.useInsertionEffect(t, e);
};
n2.useLayoutEffect = function (t, e) {
  return Y2.current.useLayoutEffect(t, e);
};
n2.useMemo = function (t, e) {
  return Y2.current.useMemo(t, e);
};
n2.useReducer = function (t, e, i) {
  return Y2.current.useReducer(t, e, i);
};
n2.useRef = function (t) {
  return Y2.current.useRef(t);
};
n2.useState = function (t) {
  return Y2.current.useState(t);
};
n2.useSyncExternalStore = function (t, e, i) {
  return Y2.current.useSyncExternalStore(t, e, i);
};
n2.useTransition = function () {
  return Y2.current.useTransition();
};
n2.version = "18.2.0";
Zs.exports = n2;
var G = Zs.exports;
const Vi = Fs(G);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pu = G,
  mu = Symbol.for("react.element"),
  _u = Symbol.for("react.fragment"),
  vu = Object.prototype.hasOwnProperty,
  gu = pu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gs(t, e, i) {
  var o,
    a = {},
    l = null,
    h = null;
  i !== void 0 && (l = "" + i),
    e.key !== void 0 && (l = "" + e.key),
    e.ref !== void 0 && (h = e.ref);
  for (o in e) vu.call(e, o) && !yu.hasOwnProperty(o) && (a[o] = e[o]);
  if (t && t.defaultProps)
    for (o in ((e = t.defaultProps), e)) a[o] === void 0 && (a[o] = e[o]);
  return {
    $$typeof: mu,
    type: t,
    key: l,
    ref: h,
    props: a,
    _owner: gu.current,
  };
}
m0.Fragment = _u;
m0.jsx = Gs;
m0.jsxs = Gs;
js.exports = m0;
var E = js.exports,
  $i = {},
  Ks = { exports: {} },
  ft = {},
  qs = { exports: {} },
  Ys = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(N, K) {
    var D = N.length;
    N.push(K);
    t: for (; 0 < D; ) {
      var Q = (D - 1) >>> 1,
        o2 = N[Q];
      if (0 < a(o2, K)) (N[Q] = K), (N[D] = o2), (D = Q);
      else break t;
    }
  }
  function i(N) {
    return N.length === 0 ? null : N[0];
  }
  function o(N) {
    if (N.length === 0) return null;
    var K = N[0],
      D = N.pop();
    if (D !== K) {
      N[0] = D;
      t: for (var Q = 0, o2 = N.length, T2 = o2 >>> 1; Q < T2; ) {
        var c2 = 2 * (Q + 1) - 1,
          a2 = N[c2],
          q = c2 + 1,
          J2 = N[q];
        if (0 > a(a2, D))
          q < o2 && 0 > a(J2, a2)
            ? ((N[Q] = J2), (N[q] = D), (Q = q))
            : ((N[Q] = a2), (N[c2] = D), (Q = c2));
        else if (q < o2 && 0 > a(J2, D)) (N[Q] = J2), (N[q] = D), (Q = q);
        else break t;
      }
    }
    return K;
  }
  function a(N, K) {
    var D = N.sortIndex - K.sortIndex;
    return D !== 0 ? D : N.id - K.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    t.unstable_now = function () {
      return l.now();
    };
  } else {
    var h = Date,
      d = h.now();
    t.unstable_now = function () {
      return h.now() - d;
    };
  }
  var p = [],
    g = [],
    x = 1,
    S = null,
    k = 3,
    T = !1,
    z = !1,
    M = !1,
    U = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    _ = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(N) {
    for (var K = i(g); K !== null; ) {
      if (K.callback === null) o(g);
      else if (K.startTime <= N)
        o(g), (K.sortIndex = K.expirationTime), e(p, K);
      else break;
      K = i(g);
    }
  }
  function O(N) {
    if (((M = !1), y(N), !z))
      if (i(p) !== null) (z = !0), B2(A);
      else {
        var K = i(g);
        K !== null && Xt(O, K.startTime - N);
      }
  }
  function A(N, K) {
    (z = !1), M && ((M = !1), v(B), (B = -1)), (T = !0);
    var D = k;
    try {
      for (
        y(K), S = i(p);
        S !== null && (!(S.expirationTime > K) || (N && !h2()));

      ) {
        var Q = S.callback;
        if (typeof Q == "function") {
          (S.callback = null), (k = S.priorityLevel);
          var o2 = Q(S.expirationTime <= K);
          (K = t.unstable_now()),
            typeof o2 == "function" ? (S.callback = o2) : S === i(p) && o(p),
            y(K);
        } else o(p);
        S = i(p);
      }
      if (S !== null) var T2 = !0;
      else {
        var c2 = i(g);
        c2 !== null && Xt(O, c2.startTime - K), (T2 = !1);
      }
      return T2;
    } finally {
      (S = null), (k = D), (T = !1);
    }
  }
  var j = !1,
    F = null,
    B = -1,
    i2 = 5,
    J = -1;
  function h2() {
    return !(t.unstable_now() - J < i2);
  }
  function N2() {
    if (F !== null) {
      var N = t.unstable_now();
      J = N;
      var K = !0;
      try {
        K = F(!0, N);
      } finally {
        K ? Qe() : ((j = !1), (F = null));
      }
    } else j = !1;
  }
  var Qe;
  if (typeof _ == "function")
    Qe = function () {
      _(N2);
    };
  else if (typeof MessageChannel < "u") {
    var pt = new MessageChannel(),
      A0 = pt.port2;
    (pt.port1.onmessage = N2),
      (Qe = function () {
        A0.postMessage(null);
      });
  } else
    Qe = function () {
      U(N2, 0);
    };
  function B2(N) {
    (F = N), j || ((j = !0), Qe());
  }
  function Xt(N, K) {
    B = U(function () {
      N(t.unstable_now());
    }, K);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      z || T || ((z = !0), B2(A));
    }),
    (t.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (i2 = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return k;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return i(p);
    }),
    (t.unstable_next = function (N) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = k;
      }
      var D = k;
      k = K;
      try {
        return N();
      } finally {
        k = D;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (N, K) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var D = k;
      k = N;
      try {
        return K();
      } finally {
        k = D;
      }
    }),
    (t.unstable_scheduleCallback = function (N, K, D) {
      var Q = t.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? Q + D : Q))
          : (D = Q),
        N)
      ) {
        case 1:
          var o2 = -1;
          break;
        case 2:
          o2 = 250;
          break;
        case 5:
          o2 = 1073741823;
          break;
        case 4:
          o2 = 1e4;
          break;
        default:
          o2 = 5e3;
      }
      return (
        (o2 = D + o2),
        (N = {
          id: x++,
          callback: K,
          priorityLevel: N,
          startTime: D,
          expirationTime: o2,
          sortIndex: -1,
        }),
        D > Q
          ? ((N.sortIndex = D),
            e(g, N),
            i(p) === null &&
              N === i(g) &&
              (M ? (v(B), (B = -1)) : (M = !0), Xt(O, D - Q)))
          : ((N.sortIndex = o2), e(p, N), z || T || ((z = !0), B2(A))),
        N
      );
    }),
    (t.unstable_shouldYield = h2),
    (t.unstable_wrapCallback = function (N) {
      var K = k;
      return function () {
        var D = k;
        k = K;
        try {
          return N.apply(this, arguments);
        } finally {
          k = D;
        }
      };
    });
})(Ys);
qs.exports = Ys;
var wu = qs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xs = G,
  ht = wu;
function R(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, i = 1;
    i < arguments.length;
    i++
  )
    e += "&args[]=" + encodeURIComponent(arguments[i]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Js = new Set(),
  l3 = {};
function w1(t, e) {
  p4(t, e), p4(t + "Capture", e);
}
function p4(t, e) {
  for (l3[t] = e, t = 0; t < e.length; t++) Js.add(e[t]);
}
var ce = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Qi = Object.prototype.hasOwnProperty,
  xu =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  h6 = {},
  f6 = {};
function Pu(t) {
  return Qi.call(f6, t)
    ? !0
    : Qi.call(h6, t)
    ? !1
    : xu.test(t)
    ? (f6[t] = !0)
    : ((h6[t] = !0), !1);
}
function Su(t, e, i, o) {
  if (i !== null && i.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return o
        ? !1
        : i !== null
        ? !i.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function Lu(t, e, i, o) {
  if (e === null || typeof e > "u" || Su(t, e, i, o)) return !0;
  if (o) return !1;
  if (i !== null)
    switch (i.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function X2(t, e, i, o, a, l, h) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = o),
    (this.attributeNamespace = a),
    (this.mustUseProperty = i),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = l),
    (this.removeEmptyString = h);
}
var H2 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    H2[t] = new X2(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  H2[e] = new X2(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  H2[t] = new X2(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  H2[t] = new X2(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    H2[t] = new X2(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  H2[t] = new X2(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  H2[t] = new X2(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  H2[t] = new X2(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  H2[t] = new X2(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var i9 = /[\-:]([a-z])/g;
function r9(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(i9, r9);
    H2[e] = new X2(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(i9, r9);
    H2[e] = new X2(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(i9, r9);
  H2[e] = new X2(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  H2[t] = new X2(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
H2.xlinkHref = new X2(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (t) {
  H2[t] = new X2(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function o9(t, e, i, o) {
  var a = H2.hasOwnProperty(e) ? H2[e] : null;
  (a !== null
    ? a.type !== 0
    : o ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (Lu(e, i, a, o) && (i = null),
    o || a === null
      ? Pu(e) && (i === null ? t.removeAttribute(e) : t.setAttribute(e, "" + i))
      : a.mustUseProperty
      ? (t[a.propertyName] = i === null ? (a.type === 3 ? !1 : "") : i)
      : ((e = a.attributeName),
        (o = a.attributeNamespace),
        i === null
          ? t.removeAttribute(e)
          : ((a = a.type),
            (i = a === 3 || (a === 4 && i === !0) ? "" : "" + i),
            o ? t.setAttributeNS(o, e, i) : t.setAttribute(e, i))));
}
var pe = Xs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  fn = Symbol.for("react.element"),
  R1 = Symbol.for("react.portal"),
  A1 = Symbol.for("react.fragment"),
  s9 = Symbol.for("react.strict_mode"),
  Gi = Symbol.for("react.profiler"),
  ta = Symbol.for("react.provider"),
  ea = Symbol.for("react.context"),
  a9 = Symbol.for("react.forward_ref"),
  Ki = Symbol.for("react.suspense"),
  qi = Symbol.for("react.suspense_list"),
  l9 = Symbol.for("react.memo"),
  we = Symbol.for("react.lazy"),
  na = Symbol.for("react.offscreen"),
  d6 = Symbol.iterator;
function Z4(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (d6 && t[d6]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var x2 = Object.assign,
  gi;
function G4(t) {
  if (gi === void 0)
    try {
      throw Error();
    } catch (i) {
      var e = i.stack.trim().match(/\n( *(at )?)/);
      gi = (e && e[1]) || "";
    }
  return (
    `
` +
    gi +
    t
  );
}
var yi = !1;
function wi(t, e) {
  if (!t || yi) return "";
  yi = !0;
  var i = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (g) {
          var o = g;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (g) {
          o = g;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (g) {
        o = g;
      }
      t();
    }
  } catch (g) {
    if (g && o && typeof g.stack == "string") {
      for (
        var a = g.stack.split(`
`),
          l = o.stack.split(`
`),
          h = a.length - 1,
          d = l.length - 1;
        1 <= h && 0 <= d && a[h] !== l[d];

      )
        d--;
      for (; 1 <= h && 0 <= d; h--, d--)
        if (a[h] !== l[d]) {
          if (h !== 1 || d !== 1)
            do
              if ((h--, d--, 0 > d || a[h] !== l[d])) {
                var p =
                  `
` + a[h].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    p.includes("<anonymous>") &&
                    (p = p.replace("<anonymous>", t.displayName)),
                  p
                );
              }
            while (1 <= h && 0 <= d);
          break;
        }
    }
  } finally {
    (yi = !1), (Error.prepareStackTrace = i);
  }
  return (t = t ? t.displayName || t.name : "") ? G4(t) : "";
}
function ku(t) {
  switch (t.tag) {
    case 5:
      return G4(t.type);
    case 16:
      return G4("Lazy");
    case 13:
      return G4("Suspense");
    case 19:
      return G4("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = wi(t.type, !1)), t;
    case 11:
      return (t = wi(t.type.render, !1)), t;
    case 1:
      return (t = wi(t.type, !0)), t;
    default:
      return "";
  }
}
function Yi(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case A1:
      return "Fragment";
    case R1:
      return "Portal";
    case Gi:
      return "Profiler";
    case s9:
      return "StrictMode";
    case Ki:
      return "Suspense";
    case qi:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case ea:
        return (t.displayName || "Context") + ".Consumer";
      case ta:
        return (t._context.displayName || "Context") + ".Provider";
      case a9:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case l9:
        return (
          (e = t.displayName || null), e !== null ? e : Yi(t.type) || "Memo"
        );
      case we:
        (e = t._payload), (t = t._init);
        try {
          return Yi(t(e));
        } catch {}
    }
  return null;
}
function Cu(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Yi(e);
    case 8:
      return e === s9 ? "StrictMode" : "Mode";
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
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function He(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function ia(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function Eu(t) {
  var e = ia(t) ? "checked" : "value",
    i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    o = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof i < "u" &&
    typeof i.get == "function" &&
    typeof i.set == "function"
  ) {
    var a = i.get,
      l = i.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return a.call(this);
        },
        set: function (h) {
          (o = "" + h), l.call(this, h);
        },
      }),
      Object.defineProperty(t, e, { enumerable: i.enumerable }),
      {
        getValue: function () {
          return o;
        },
        setValue: function (h) {
          o = "" + h;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function dn(t) {
  t._valueTracker || (t._valueTracker = Eu(t));
}
function ra(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var i = e.getValue(),
    o = "";
  return (
    t && (o = ia(t) ? (t.checked ? "true" : "false") : t.value),
    (t = o),
    t !== i ? (e.setValue(t), !0) : !1
  );
}
function Hn(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Xi(t, e) {
  var i = e.checked;
  return x2({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: i ?? t._wrapperState.initialChecked,
  });
}
function p6(t, e) {
  var i = e.defaultValue == null ? "" : e.defaultValue,
    o = e.checked != null ? e.checked : e.defaultChecked;
  (i = He(e.value != null ? e.value : i)),
    (t._wrapperState = {
      initialChecked: o,
      initialValue: i,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function oa(t, e) {
  (e = e.checked), e != null && o9(t, "checked", e, !1);
}
function Ji(t, e) {
  oa(t, e);
  var i = He(e.value),
    o = e.type;
  if (i != null)
    o === "number"
      ? ((i === 0 && t.value === "") || t.value != i) && (t.value = "" + i)
      : t.value !== "" + i && (t.value = "" + i);
  else if (o === "submit" || o === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? tr(t, e.type, i)
    : e.hasOwnProperty("defaultValue") && tr(t, e.type, He(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function m6(t, e, i) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var o = e.type;
    if (
      !(
        (o !== "submit" && o !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      i || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (i = t.name),
    i !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    i !== "" && (t.name = i);
}
function tr(t, e, i) {
  (e !== "number" || Hn(t.ownerDocument) !== t) &&
    (i == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + i && (t.defaultValue = "" + i));
}
var K4 = Array.isArray;
function Q1(t, e, i, o) {
  if (((t = t.options), e)) {
    e = {};
    for (var a = 0; a < i.length; a++) e["$" + i[a]] = !0;
    for (i = 0; i < t.length; i++)
      (a = e.hasOwnProperty("$" + t[i].value)),
        t[i].selected !== a && (t[i].selected = a),
        a && o && (t[i].defaultSelected = !0);
  } else {
    for (i = "" + He(i), e = null, a = 0; a < t.length; a++) {
      if (t[a].value === i) {
        (t[a].selected = !0), o && (t[a].defaultSelected = !0);
        return;
      }
      e !== null || t[a].disabled || (e = t[a]);
    }
    e !== null && (e.selected = !0);
  }
}
function er(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(R(91));
  return x2({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function _6(t, e) {
  var i = e.value;
  if (i == null) {
    if (((i = e.children), (e = e.defaultValue), i != null)) {
      if (e != null) throw Error(R(92));
      if (K4(i)) {
        if (1 < i.length) throw Error(R(93));
        i = i[0];
      }
      e = i;
    }
    e == null && (e = ""), (i = e);
  }
  t._wrapperState = { initialValue: He(i) };
}
function sa(t, e) {
  var i = He(e.value),
    o = He(e.defaultValue);
  i != null &&
    ((i = "" + i),
    i !== t.value && (t.value = i),
    e.defaultValue == null && t.defaultValue !== i && (t.defaultValue = i)),
    o != null && (t.defaultValue = "" + o);
}
function v6(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function aa(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function nr(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? aa(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var pn,
  la = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, i, o, a) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, i, o, a);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        pn = pn || document.createElement("div"),
          pn.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = pn.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function u3(t, e) {
  if (e) {
    var i = t.firstChild;
    if (i && i === t.lastChild && i.nodeType === 3) {
      i.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var J4 = {
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
    strokeWidth: !0,
  },
  Tu = ["Webkit", "ms", "Moz", "O"];
Object.keys(J4).forEach(function (t) {
  Tu.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (J4[e] = J4[t]);
  });
});
function ua(t, e, i) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : i || typeof e != "number" || e === 0 || (J4.hasOwnProperty(t) && J4[t])
    ? ("" + e).trim()
    : e + "px";
}
function ca(t, e) {
  t = t.style;
  for (var i in e)
    if (e.hasOwnProperty(i)) {
      var o = i.indexOf("--") === 0,
        a = ua(i, e[i], o);
      i === "float" && (i = "cssFloat"), o ? t.setProperty(i, a) : (t[i] = a);
    }
}
var Mu = x2(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function ir(t, e) {
  if (e) {
    if (Mu[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(R(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(R(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(R(62));
  }
}
function rr(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
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
      return !0;
  }
}
var or = null;
function u9(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var sr = null,
  G1 = null,
  K1 = null;
function g6(t) {
  if ((t = U3(t))) {
    if (typeof sr != "function") throw Error(R(280));
    var e = t.stateNode;
    e && ((e = w0(e)), sr(t.stateNode, t.type, e));
  }
}
function ha(t) {
  G1 ? (K1 ? K1.push(t) : (K1 = [t])) : (G1 = t);
}
function fa() {
  if (G1) {
    var t = G1,
      e = K1;
    if (((K1 = G1 = null), g6(t), e)) for (t = 0; t < e.length; t++) g6(e[t]);
  }
}
function da(t, e) {
  return t(e);
}
function pa() {}
var xi = !1;
function ma(t, e, i) {
  if (xi) return t(e, i);
  xi = !0;
  try {
    return da(t, e, i);
  } finally {
    (xi = !1), (G1 !== null || K1 !== null) && (pa(), fa());
  }
}
function c3(t, e) {
  var i = t.stateNode;
  if (i === null) return null;
  var o = w0(i);
  if (o === null) return null;
  i = o[e];
  t: switch (e) {
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
      (o = !o.disabled) ||
        ((t = t.type),
        (o = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !o);
      break t;
    default:
      t = !1;
  }
  if (t) return null;
  if (i && typeof i != "function") throw Error(R(231, e, typeof i));
  return i;
}
var ar = !1;
if (ce)
  try {
    var U4 = {};
    Object.defineProperty(U4, "passive", {
      get: function () {
        ar = !0;
      },
    }),
      window.addEventListener("test", U4, U4),
      window.removeEventListener("test", U4, U4);
  } catch {
    ar = !1;
  }
function Ou(t, e, i, o, a, l, h, d, p) {
  var g = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(i, g);
  } catch (x) {
    this.onError(x);
  }
}
var t3 = !1,
  Wn = null,
  bn = !1,
  lr = null,
  zu = {
    onError: function (t) {
      (t3 = !0), (Wn = t);
    },
  };
function Nu(t, e, i, o, a, l, h, d, p) {
  (t3 = !1), (Wn = null), Ou.apply(zu, arguments);
}
function Iu(t, e, i, o, a, l, h, d, p) {
  if ((Nu.apply(this, arguments), t3)) {
    if (t3) {
      var g = Wn;
      (t3 = !1), (Wn = null);
    } else throw Error(R(198));
    bn || ((bn = !0), (lr = g));
  }
}
function x1(t) {
  var e = t,
    i = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (i = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? i : null;
}
function _a(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function y6(t) {
  if (x1(t) !== t) throw Error(R(188));
}
function Ru(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = x1(t)), e === null)) throw Error(R(188));
    return e !== t ? null : t;
  }
  for (var i = t, o = e; ; ) {
    var a = i.return;
    if (a === null) break;
    var l = a.alternate;
    if (l === null) {
      if (((o = a.return), o !== null)) {
        i = o;
        continue;
      }
      break;
    }
    if (a.child === l.child) {
      for (l = a.child; l; ) {
        if (l === i) return y6(a), t;
        if (l === o) return y6(a), e;
        l = l.sibling;
      }
      throw Error(R(188));
    }
    if (i.return !== o.return) (i = a), (o = l);
    else {
      for (var h = !1, d = a.child; d; ) {
        if (d === i) {
          (h = !0), (i = a), (o = l);
          break;
        }
        if (d === o) {
          (h = !0), (o = a), (i = l);
          break;
        }
        d = d.sibling;
      }
      if (!h) {
        for (d = l.child; d; ) {
          if (d === i) {
            (h = !0), (i = l), (o = a);
            break;
          }
          if (d === o) {
            (h = !0), (o = l), (i = a);
            break;
          }
          d = d.sibling;
        }
        if (!h) throw Error(R(189));
      }
    }
    if (i.alternate !== o) throw Error(R(190));
  }
  if (i.tag !== 3) throw Error(R(188));
  return i.stateNode.current === i ? t : e;
}
function va(t) {
  return (t = Ru(t)), t !== null ? ga(t) : null;
}
function ga(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = ga(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var ya = ht.unstable_scheduleCallback,
  w6 = ht.unstable_cancelCallback,
  Au = ht.unstable_shouldYield,
  Du = ht.unstable_requestPaint,
  L2 = ht.unstable_now,
  Bu = ht.unstable_getCurrentPriorityLevel,
  c9 = ht.unstable_ImmediatePriority,
  wa = ht.unstable_UserBlockingPriority,
  Vn = ht.unstable_NormalPriority,
  Fu = ht.unstable_LowPriority,
  xa = ht.unstable_IdlePriority,
  _0 = null,
  qt = null;
function ju(t) {
  if (qt && typeof qt.onCommitFiberRoot == "function")
    try {
      qt.onCommitFiberRoot(_0, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var Dt = Math.clz32 ? Math.clz32 : Hu,
  Zu = Math.log,
  Uu = Math.LN2;
function Hu(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((Zu(t) / Uu) | 0)) | 0;
}
var mn = 64,
  _n = 4194304;
function q4(t) {
  switch (t & -t) {
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
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function $n(t, e) {
  var i = t.pendingLanes;
  if (i === 0) return 0;
  var o = 0,
    a = t.suspendedLanes,
    l = t.pingedLanes,
    h = i & 268435455;
  if (h !== 0) {
    var d = h & ~a;
    d !== 0 ? (o = q4(d)) : ((l &= h), l !== 0 && (o = q4(l)));
  } else (h = i & ~a), h !== 0 ? (o = q4(h)) : l !== 0 && (o = q4(l));
  if (o === 0) return 0;
  if (
    e !== 0 &&
    e !== o &&
    !(e & a) &&
    ((a = o & -o), (l = e & -e), a >= l || (a === 16 && (l & 4194240) !== 0))
  )
    return e;
  if ((o & 4 && (o |= i & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= o; 0 < e; )
      (i = 31 - Dt(e)), (a = 1 << i), (o |= t[i]), (e &= ~a);
  return o;
}
function Wu(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
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
      return e + 5e3;
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
      return -1;
  }
}
function bu(t, e) {
  for (
    var i = t.suspendedLanes,
      o = t.pingedLanes,
      a = t.expirationTimes,
      l = t.pendingLanes;
    0 < l;

  ) {
    var h = 31 - Dt(l),
      d = 1 << h,
      p = a[h];
    p === -1
      ? (!(d & i) || d & o) && (a[h] = Wu(d, e))
      : p <= e && (t.expiredLanes |= d),
      (l &= ~d);
  }
}
function ur(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function Pa() {
  var t = mn;
  return (mn <<= 1), !(mn & 4194240) && (mn = 64), t;
}
function Pi(t) {
  for (var e = [], i = 0; 31 > i; i++) e.push(t);
  return e;
}
function j3(t, e, i) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - Dt(e)),
    (t[e] = i);
}
function Vu(t, e) {
  var i = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var o = t.eventTimes;
  for (t = t.expirationTimes; 0 < i; ) {
    var a = 31 - Dt(i),
      l = 1 << a;
    (e[a] = 0), (o[a] = -1), (t[a] = -1), (i &= ~l);
  }
}
function h9(t, e) {
  var i = (t.entangledLanes |= e);
  for (t = t.entanglements; i; ) {
    var o = 31 - Dt(i),
      a = 1 << o;
    (a & e) | (t[o] & e) && (t[o] |= e), (i &= ~a);
  }
}
var u2 = 0;
function Sa(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var La,
  f9,
  ka,
  Ca,
  Ea,
  cr = !1,
  vn = [],
  Re = null,
  Ae = null,
  De = null,
  h3 = new Map(),
  f3 = new Map(),
  Pe = [],
  $u =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function x6(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      Re = null;
      break;
    case "dragenter":
    case "dragleave":
      Ae = null;
      break;
    case "mouseover":
    case "mouseout":
      De = null;
      break;
    case "pointerover":
    case "pointerout":
      h3.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      f3.delete(e.pointerId);
  }
}
function H4(t, e, i, o, a, l) {
  return t === null || t.nativeEvent !== l
    ? ((t = {
        blockedOn: e,
        domEventName: i,
        eventSystemFlags: o,
        nativeEvent: l,
        targetContainers: [a],
      }),
      e !== null && ((e = U3(e)), e !== null && f9(e)),
      t)
    : ((t.eventSystemFlags |= o),
      (e = t.targetContainers),
      a !== null && e.indexOf(a) === -1 && e.push(a),
      t);
}
function Qu(t, e, i, o, a) {
  switch (e) {
    case "focusin":
      return (Re = H4(Re, t, e, i, o, a)), !0;
    case "dragenter":
      return (Ae = H4(Ae, t, e, i, o, a)), !0;
    case "mouseover":
      return (De = H4(De, t, e, i, o, a)), !0;
    case "pointerover":
      var l = a.pointerId;
      return h3.set(l, H4(h3.get(l) || null, t, e, i, o, a)), !0;
    case "gotpointercapture":
      return (
        (l = a.pointerId), f3.set(l, H4(f3.get(l) || null, t, e, i, o, a)), !0
      );
  }
  return !1;
}
function Ta(t) {
  var e = e1(t.target);
  if (e !== null) {
    var i = x1(e);
    if (i !== null) {
      if (((e = i.tag), e === 13)) {
        if (((e = _a(i)), e !== null)) {
          (t.blockedOn = e),
            Ea(t.priority, function () {
              ka(i);
            });
          return;
        }
      } else if (e === 3 && i.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function zn(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var i = hr(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (i === null) {
      i = t.nativeEvent;
      var o = new i.constructor(i.type, i);
      (or = o), i.target.dispatchEvent(o), (or = null);
    } else return (e = U3(i)), e !== null && f9(e), (t.blockedOn = i), !1;
    e.shift();
  }
  return !0;
}
function P6(t, e, i) {
  zn(t) && i.delete(e);
}
function Gu() {
  (cr = !1),
    Re !== null && zn(Re) && (Re = null),
    Ae !== null && zn(Ae) && (Ae = null),
    De !== null && zn(De) && (De = null),
    h3.forEach(P6),
    f3.forEach(P6);
}
function W4(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    cr ||
      ((cr = !0),
      ht.unstable_scheduleCallback(ht.unstable_NormalPriority, Gu)));
}
function d3(t) {
  function e(a) {
    return W4(a, t);
  }
  if (0 < vn.length) {
    W4(vn[0], t);
    for (var i = 1; i < vn.length; i++) {
      var o = vn[i];
      o.blockedOn === t && (o.blockedOn = null);
    }
  }
  for (
    Re !== null && W4(Re, t),
      Ae !== null && W4(Ae, t),
      De !== null && W4(De, t),
      h3.forEach(e),
      f3.forEach(e),
      i = 0;
    i < Pe.length;
    i++
  )
    (o = Pe[i]), o.blockedOn === t && (o.blockedOn = null);
  for (; 0 < Pe.length && ((i = Pe[0]), i.blockedOn === null); )
    Ta(i), i.blockedOn === null && Pe.shift();
}
var q1 = pe.ReactCurrentBatchConfig,
  Qn = !0;
function Ku(t, e, i, o) {
  var a = u2,
    l = q1.transition;
  q1.transition = null;
  try {
    (u2 = 1), d9(t, e, i, o);
  } finally {
    (u2 = a), (q1.transition = l);
  }
}
function qu(t, e, i, o) {
  var a = u2,
    l = q1.transition;
  q1.transition = null;
  try {
    (u2 = 4), d9(t, e, i, o);
  } finally {
    (u2 = a), (q1.transition = l);
  }
}
function d9(t, e, i, o) {
  if (Qn) {
    var a = hr(t, e, i, o);
    if (a === null) Ni(t, e, o, Gn, i), x6(t, o);
    else if (Qu(a, t, e, i, o)) o.stopPropagation();
    else if ((x6(t, o), e & 4 && -1 < $u.indexOf(t))) {
      for (; a !== null; ) {
        var l = U3(a);
        if (
          (l !== null && La(l),
          (l = hr(t, e, i, o)),
          l === null && Ni(t, e, o, Gn, i),
          l === a)
        )
          break;
        a = l;
      }
      a !== null && o.stopPropagation();
    } else Ni(t, e, o, null, i);
  }
}
var Gn = null;
function hr(t, e, i, o) {
  if (((Gn = null), (t = u9(o)), (t = e1(t)), t !== null))
    if (((e = x1(t)), e === null)) t = null;
    else if (((i = e.tag), i === 13)) {
      if (((t = _a(e)), t !== null)) return t;
      t = null;
    } else if (i === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (Gn = t), null;
}
function Ma(t) {
  switch (t) {
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
      switch (Bu()) {
        case c9:
          return 1;
        case wa:
          return 4;
        case Vn:
        case Fu:
          return 16;
        case xa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ne = null,
  p9 = null,
  Nn = null;
function Oa() {
  if (Nn) return Nn;
  var t,
    e = p9,
    i = e.length,
    o,
    a = "value" in Ne ? Ne.value : Ne.textContent,
    l = a.length;
  for (t = 0; t < i && e[t] === a[t]; t++);
  var h = i - t;
  for (o = 1; o <= h && e[i - o] === a[l - o]; o++);
  return (Nn = a.slice(t, 1 < o ? 1 - o : void 0));
}
function In(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function gn() {
  return !0;
}
function S6() {
  return !1;
}
function dt(t) {
  function e(i, o, a, l, h) {
    (this._reactName = i),
      (this._targetInst = a),
      (this.type = o),
      (this.nativeEvent = l),
      (this.target = h),
      (this.currentTarget = null);
    for (var d in t)
      t.hasOwnProperty(d) && ((i = t[d]), (this[d] = i ? i(l) : l[d]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? gn
        : S6),
      (this.isPropagationStopped = S6),
      this
    );
  }
  return (
    x2(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i &&
          (i.preventDefault
            ? i.preventDefault()
            : typeof i.returnValue != "unknown" && (i.returnValue = !1),
          (this.isDefaultPrevented = gn));
      },
      stopPropagation: function () {
        var i = this.nativeEvent;
        i &&
          (i.stopPropagation
            ? i.stopPropagation()
            : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
          (this.isPropagationStopped = gn));
      },
      persist: function () {},
      isPersistent: gn,
    }),
    e
  );
}
var S4 = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  m9 = dt(S4),
  Z3 = x2({}, S4, { view: 0, detail: 0 }),
  Yu = dt(Z3),
  Si,
  Li,
  b4,
  v0 = x2({}, Z3, {
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
    getModifierState: _9,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== b4 &&
            (b4 && t.type === "mousemove"
              ? ((Si = t.screenX - b4.screenX), (Li = t.screenY - b4.screenY))
              : (Li = Si = 0),
            (b4 = t)),
          Si);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : Li;
    },
  }),
  L6 = dt(v0),
  Xu = x2({}, v0, { dataTransfer: 0 }),
  Ju = dt(Xu),
  t8 = x2({}, Z3, { relatedTarget: 0 }),
  ki = dt(t8),
  e8 = x2({}, S4, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  n8 = dt(e8),
  i8 = x2({}, S4, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  r8 = dt(i8),
  o8 = x2({}, S4, { data: 0 }),
  k6 = dt(o8),
  s8 = {
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
    MozPrintableKey: "Unidentified",
  },
  a8 = {
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
    224: "Meta",
  },
  l8 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function u8(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = l8[t]) ? !!e[t] : !1;
}
function _9() {
  return u8;
}
var c8 = x2({}, Z3, {
    key: function (t) {
      if (t.key) {
        var e = s8[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = In(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? a8[t.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _9,
    charCode: function (t) {
      return t.type === "keypress" ? In(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? In(t)
        : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
    },
  }),
  h8 = dt(c8),
  f8 = x2({}, v0, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  C6 = dt(f8),
  d8 = x2({}, Z3, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _9,
  }),
  p8 = dt(d8),
  m8 = x2({}, S4, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _8 = dt(m8),
  v8 = x2({}, v0, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
        ? -t.wheelDeltaY
        : "wheelDelta" in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  g8 = dt(v8),
  y8 = [9, 13, 27, 32],
  v9 = ce && "CompositionEvent" in window,
  e3 = null;
ce && "documentMode" in document && (e3 = document.documentMode);
var w8 = ce && "TextEvent" in window && !e3,
  za = ce && (!v9 || (e3 && 8 < e3 && 11 >= e3)),
  E6 = String.fromCharCode(32),
  T6 = !1;
function Na(t, e) {
  switch (t) {
    case "keyup":
      return y8.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ia(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var D1 = !1;
function x8(t, e) {
  switch (t) {
    case "compositionend":
      return Ia(e);
    case "keypress":
      return e.which !== 32 ? null : ((T6 = !0), E6);
    case "textInput":
      return (t = e.data), t === E6 && T6 ? null : t;
    default:
      return null;
  }
}
function P8(t, e) {
  if (D1)
    return t === "compositionend" || (!v9 && Na(t, e))
      ? ((t = Oa()), (Nn = p9 = Ne = null), (D1 = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return za && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var S8 = {
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
  week: !0,
};
function M6(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!S8[t.type] : e === "textarea";
}
function Ra(t, e, i, o) {
  ha(o),
    (e = Kn(e, "onChange")),
    0 < e.length &&
      ((i = new m9("onChange", "change", null, i, o)),
      t.push({ event: i, listeners: e }));
}
var n3 = null,
  p3 = null;
function L8(t) {
  Va(t, 0);
}
function g0(t) {
  var e = j1(t);
  if (ra(e)) return t;
}
function k8(t, e) {
  if (t === "change") return e;
}
var Aa = !1;
if (ce) {
  var Ci;
  if (ce) {
    var Ei = "oninput" in document;
    if (!Ei) {
      var O6 = document.createElement("div");
      O6.setAttribute("oninput", "return;"),
        (Ei = typeof O6.oninput == "function");
    }
    Ci = Ei;
  } else Ci = !1;
  Aa = Ci && (!document.documentMode || 9 < document.documentMode);
}
function z6() {
  n3 && (n3.detachEvent("onpropertychange", Da), (p3 = n3 = null));
}
function Da(t) {
  if (t.propertyName === "value" && g0(p3)) {
    var e = [];
    Ra(e, p3, t, u9(t)), ma(L8, e);
  }
}
function C8(t, e, i) {
  t === "focusin"
    ? (z6(), (n3 = e), (p3 = i), n3.attachEvent("onpropertychange", Da))
    : t === "focusout" && z6();
}
function E8(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return g0(p3);
}
function T8(t, e) {
  if (t === "click") return g0(e);
}
function M8(t, e) {
  if (t === "input" || t === "change") return g0(e);
}
function O8(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Ft = typeof Object.is == "function" ? Object.is : O8;
function m3(t, e) {
  if (Ft(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var i = Object.keys(t),
    o = Object.keys(e);
  if (i.length !== o.length) return !1;
  for (o = 0; o < i.length; o++) {
    var a = i[o];
    if (!Qi.call(e, a) || !Ft(t[a], e[a])) return !1;
  }
  return !0;
}
function N6(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function I6(t, e) {
  var i = N6(t);
  t = 0;
  for (var o; i; ) {
    if (i.nodeType === 3) {
      if (((o = t + i.textContent.length), t <= e && o >= e))
        return { node: i, offset: e - t };
      t = o;
    }
    t: {
      for (; i; ) {
        if (i.nextSibling) {
          i = i.nextSibling;
          break t;
        }
        i = i.parentNode;
      }
      i = void 0;
    }
    i = N6(i);
  }
}
function Ba(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? Ba(t, e.parentNode)
      : "contains" in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function Fa() {
  for (var t = window, e = Hn(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var i = typeof e.contentWindow.location.href == "string";
    } catch {
      i = !1;
    }
    if (i) t = e.contentWindow;
    else break;
    e = Hn(t.document);
  }
  return e;
}
function g9(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function z8(t) {
  var e = Fa(),
    i = t.focusedElem,
    o = t.selectionRange;
  if (
    e !== i &&
    i &&
    i.ownerDocument &&
    Ba(i.ownerDocument.documentElement, i)
  ) {
    if (o !== null && g9(i)) {
      if (
        ((e = o.start),
        (t = o.end),
        t === void 0 && (t = e),
        "selectionStart" in i)
      )
        (i.selectionStart = e), (i.selectionEnd = Math.min(t, i.value.length));
      else if (
        ((t = ((e = i.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var a = i.textContent.length,
          l = Math.min(o.start, a);
        (o = o.end === void 0 ? l : Math.min(o.end, a)),
          !t.extend && l > o && ((a = o), (o = l), (l = a)),
          (a = I6(i, l));
        var h = I6(i, o);
        a &&
          h &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== a.node ||
            t.anchorOffset !== a.offset ||
            t.focusNode !== h.node ||
            t.focusOffset !== h.offset) &&
          ((e = e.createRange()),
          e.setStart(a.node, a.offset),
          t.removeAllRanges(),
          l > o
            ? (t.addRange(e), t.extend(h.node, h.offset))
            : (e.setEnd(h.node, h.offset), t.addRange(e)));
      }
    }
    for (e = [], t = i; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof i.focus == "function" && i.focus(), i = 0; i < e.length; i++)
      (t = e[i]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var N8 = ce && "documentMode" in document && 11 >= document.documentMode,
  B1 = null,
  fr = null,
  i3 = null,
  dr = !1;
function R6(t, e, i) {
  var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
  dr ||
    B1 == null ||
    B1 !== Hn(o) ||
    ((o = B1),
    "selectionStart" in o && g9(o)
      ? (o = { start: o.selectionStart, end: o.selectionEnd })
      : ((o = (
          (o.ownerDocument && o.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (o = {
          anchorNode: o.anchorNode,
          anchorOffset: o.anchorOffset,
          focusNode: o.focusNode,
          focusOffset: o.focusOffset,
        })),
    (i3 && m3(i3, o)) ||
      ((i3 = o),
      (o = Kn(fr, "onSelect")),
      0 < o.length &&
        ((e = new m9("onSelect", "select", null, e, i)),
        t.push({ event: e, listeners: o }),
        (e.target = B1))));
}
function yn(t, e) {
  var i = {};
  return (
    (i[t.toLowerCase()] = e.toLowerCase()),
    (i["Webkit" + t] = "webkit" + e),
    (i["Moz" + t] = "moz" + e),
    i
  );
}
var F1 = {
    animationend: yn("Animation", "AnimationEnd"),
    animationiteration: yn("Animation", "AnimationIteration"),
    animationstart: yn("Animation", "AnimationStart"),
    transitionend: yn("Transition", "TransitionEnd"),
  },
  Ti = {},
  ja = {};
ce &&
  ((ja = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete F1.animationend.animation,
    delete F1.animationiteration.animation,
    delete F1.animationstart.animation),
  "TransitionEvent" in window || delete F1.transitionend.transition);
function y0(t) {
  if (Ti[t]) return Ti[t];
  if (!F1[t]) return t;
  var e = F1[t],
    i;
  for (i in e) if (e.hasOwnProperty(i) && i in ja) return (Ti[t] = e[i]);
  return t;
}
var Za = y0("animationend"),
  Ua = y0("animationiteration"),
  Ha = y0("animationstart"),
  Wa = y0("transitionend"),
  ba = new Map(),
  A6 =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function be(t, e) {
  ba.set(t, e), w1(e, [t]);
}
for (var Mi = 0; Mi < A6.length; Mi++) {
  var Oi = A6[Mi],
    I8 = Oi.toLowerCase(),
    R8 = Oi[0].toUpperCase() + Oi.slice(1);
  be(I8, "on" + R8);
}
be(Za, "onAnimationEnd");
be(Ua, "onAnimationIteration");
be(Ha, "onAnimationStart");
be("dblclick", "onDoubleClick");
be("focusin", "onFocus");
be("focusout", "onBlur");
be(Wa, "onTransitionEnd");
p4("onMouseEnter", ["mouseout", "mouseover"]);
p4("onMouseLeave", ["mouseout", "mouseover"]);
p4("onPointerEnter", ["pointerout", "pointerover"]);
p4("onPointerLeave", ["pointerout", "pointerover"]);
w1(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
w1(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
w1("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
w1(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
w1(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
w1(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Y4 =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  A8 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Y4));
function D6(t, e, i) {
  var o = t.type || "unknown-event";
  (t.currentTarget = i), Iu(o, e, void 0, t), (t.currentTarget = null);
}
function Va(t, e) {
  e = (e & 4) !== 0;
  for (var i = 0; i < t.length; i++) {
    var o = t[i],
      a = o.event;
    o = o.listeners;
    t: {
      var l = void 0;
      if (e)
        for (var h = o.length - 1; 0 <= h; h--) {
          var d = o[h],
            p = d.instance,
            g = d.currentTarget;
          if (((d = d.listener), p !== l && a.isPropagationStopped())) break t;
          D6(a, d, g), (l = p);
        }
      else
        for (h = 0; h < o.length; h++) {
          if (
            ((d = o[h]),
            (p = d.instance),
            (g = d.currentTarget),
            (d = d.listener),
            p !== l && a.isPropagationStopped())
          )
            break t;
          D6(a, d, g), (l = p);
        }
    }
  }
  if (bn) throw ((t = lr), (bn = !1), (lr = null), t);
}
function m2(t, e) {
  var i = e[gr];
  i === void 0 && (i = e[gr] = new Set());
  var o = t + "__bubble";
  i.has(o) || ($a(e, t, 2, !1), i.add(o));
}
function zi(t, e, i) {
  var o = 0;
  e && (o |= 4), $a(i, t, o, e);
}
var wn = "_reactListening" + Math.random().toString(36).slice(2);
function _3(t) {
  if (!t[wn]) {
    (t[wn] = !0),
      Js.forEach(function (i) {
        i !== "selectionchange" && (A8.has(i) || zi(i, !1, t), zi(i, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[wn] || ((e[wn] = !0), zi("selectionchange", !1, e));
  }
}
function $a(t, e, i, o) {
  switch (Ma(e)) {
    case 1:
      var a = Ku;
      break;
    case 4:
      a = qu;
      break;
    default:
      a = d9;
  }
  (i = a.bind(null, e, i, t)),
    (a = void 0),
    !ar ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (a = !0),
    o
      ? a !== void 0
        ? t.addEventListener(e, i, { capture: !0, passive: a })
        : t.addEventListener(e, i, !0)
      : a !== void 0
      ? t.addEventListener(e, i, { passive: a })
      : t.addEventListener(e, i, !1);
}
function Ni(t, e, i, o, a) {
  var l = o;
  if (!(e & 1) && !(e & 2) && o !== null)
    t: for (;;) {
      if (o === null) return;
      var h = o.tag;
      if (h === 3 || h === 4) {
        var d = o.stateNode.containerInfo;
        if (d === a || (d.nodeType === 8 && d.parentNode === a)) break;
        if (h === 4)
          for (h = o.return; h !== null; ) {
            var p = h.tag;
            if (
              (p === 3 || p === 4) &&
              ((p = h.stateNode.containerInfo),
              p === a || (p.nodeType === 8 && p.parentNode === a))
            )
              return;
            h = h.return;
          }
        for (; d !== null; ) {
          if (((h = e1(d)), h === null)) return;
          if (((p = h.tag), p === 5 || p === 6)) {
            o = l = h;
            continue t;
          }
          d = d.parentNode;
        }
      }
      o = o.return;
    }
  ma(function () {
    var g = l,
      x = u9(i),
      S = [];
    t: {
      var k = ba.get(t);
      if (k !== void 0) {
        var T = m9,
          z = t;
        switch (t) {
          case "keypress":
            if (In(i) === 0) break t;
          case "keydown":
          case "keyup":
            T = h8;
            break;
          case "focusin":
            (z = "focus"), (T = ki);
            break;
          case "focusout":
            (z = "blur"), (T = ki);
            break;
          case "beforeblur":
          case "afterblur":
            T = ki;
            break;
          case "click":
            if (i.button === 2) break t;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            T = L6;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            T = Ju;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            T = p8;
            break;
          case Za:
          case Ua:
          case Ha:
            T = n8;
            break;
          case Wa:
            T = _8;
            break;
          case "scroll":
            T = Yu;
            break;
          case "wheel":
            T = g8;
            break;
          case "copy":
          case "cut":
          case "paste":
            T = r8;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            T = C6;
        }
        var M = (e & 4) !== 0,
          U = !M && t === "scroll",
          v = M ? (k !== null ? k + "Capture" : null) : k;
        M = [];
        for (var _ = g, y; _ !== null; ) {
          y = _;
          var O = y.stateNode;
          if (
            (y.tag === 5 &&
              O !== null &&
              ((y = O),
              v !== null && ((O = c3(_, v)), O != null && M.push(v3(_, O, y)))),
            U)
          )
            break;
          _ = _.return;
        }
        0 < M.length &&
          ((k = new T(k, z, null, i, x)), S.push({ event: k, listeners: M }));
      }
    }
    if (!(e & 7)) {
      t: {
        if (
          ((k = t === "mouseover" || t === "pointerover"),
          (T = t === "mouseout" || t === "pointerout"),
          k &&
            i !== or &&
            (z = i.relatedTarget || i.fromElement) &&
            (e1(z) || z[he]))
        )
          break t;
        if (
          (T || k) &&
          ((k =
            x.window === x
              ? x
              : (k = x.ownerDocument)
              ? k.defaultView || k.parentWindow
              : window),
          T
            ? ((z = i.relatedTarget || i.toElement),
              (T = g),
              (z = z ? e1(z) : null),
              z !== null &&
                ((U = x1(z)), z !== U || (z.tag !== 5 && z.tag !== 6)) &&
                (z = null))
            : ((T = null), (z = g)),
          T !== z)
        ) {
          if (
            ((M = L6),
            (O = "onMouseLeave"),
            (v = "onMouseEnter"),
            (_ = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((M = C6),
              (O = "onPointerLeave"),
              (v = "onPointerEnter"),
              (_ = "pointer")),
            (U = T == null ? k : j1(T)),
            (y = z == null ? k : j1(z)),
            (k = new M(O, _ + "leave", T, i, x)),
            (k.target = U),
            (k.relatedTarget = y),
            (O = null),
            e1(x) === g &&
              ((M = new M(v, _ + "enter", z, i, x)),
              (M.target = y),
              (M.relatedTarget = U),
              (O = M)),
            (U = O),
            T && z)
          )
            e: {
              for (M = T, v = z, _ = 0, y = M; y; y = z1(y)) _++;
              for (y = 0, O = v; O; O = z1(O)) y++;
              for (; 0 < _ - y; ) (M = z1(M)), _--;
              for (; 0 < y - _; ) (v = z1(v)), y--;
              for (; _--; ) {
                if (M === v || (v !== null && M === v.alternate)) break e;
                (M = z1(M)), (v = z1(v));
              }
              M = null;
            }
          else M = null;
          T !== null && B6(S, k, T, M, !1),
            z !== null && U !== null && B6(S, U, z, M, !0);
        }
      }
      t: {
        if (
          ((k = g ? j1(g) : window),
          (T = k.nodeName && k.nodeName.toLowerCase()),
          T === "select" || (T === "input" && k.type === "file"))
        )
          var A = k8;
        else if (M6(k))
          if (Aa) A = M8;
          else {
            A = E8;
            var j = C8;
          }
        else
          (T = k.nodeName) &&
            T.toLowerCase() === "input" &&
            (k.type === "checkbox" || k.type === "radio") &&
            (A = T8);
        if (A && (A = A(t, g))) {
          Ra(S, A, i, x);
          break t;
        }
        j && j(t, k, g),
          t === "focusout" &&
            (j = k._wrapperState) &&
            j.controlled &&
            k.type === "number" &&
            tr(k, "number", k.value);
      }
      switch (((j = g ? j1(g) : window), t)) {
        case "focusin":
          (M6(j) || j.contentEditable === "true") &&
            ((B1 = j), (fr = g), (i3 = null));
          break;
        case "focusout":
          i3 = fr = B1 = null;
          break;
        case "mousedown":
          dr = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (dr = !1), R6(S, i, x);
          break;
        case "selectionchange":
          if (N8) break;
        case "keydown":
        case "keyup":
          R6(S, i, x);
      }
      var F;
      if (v9)
        t: {
          switch (t) {
            case "compositionstart":
              var B = "onCompositionStart";
              break t;
            case "compositionend":
              B = "onCompositionEnd";
              break t;
            case "compositionupdate":
              B = "onCompositionUpdate";
              break t;
          }
          B = void 0;
        }
      else
        D1
          ? Na(t, i) && (B = "onCompositionEnd")
          : t === "keydown" && i.keyCode === 229 && (B = "onCompositionStart");
      B &&
        (za &&
          i.locale !== "ko" &&
          (D1 || B !== "onCompositionStart"
            ? B === "onCompositionEnd" && D1 && (F = Oa())
            : ((Ne = x),
              (p9 = "value" in Ne ? Ne.value : Ne.textContent),
              (D1 = !0))),
        (j = Kn(g, B)),
        0 < j.length &&
          ((B = new k6(B, t, null, i, x)),
          S.push({ event: B, listeners: j }),
          F ? (B.data = F) : ((F = Ia(i)), F !== null && (B.data = F)))),
        (F = w8 ? x8(t, i) : P8(t, i)) &&
          ((g = Kn(g, "onBeforeInput")),
          0 < g.length &&
            ((x = new k6("onBeforeInput", "beforeinput", null, i, x)),
            S.push({ event: x, listeners: g }),
            (x.data = F)));
    }
    Va(S, e);
  });
}
function v3(t, e, i) {
  return { instance: t, listener: e, currentTarget: i };
}
function Kn(t, e) {
  for (var i = e + "Capture", o = []; t !== null; ) {
    var a = t,
      l = a.stateNode;
    a.tag === 5 &&
      l !== null &&
      ((a = l),
      (l = c3(t, i)),
      l != null && o.unshift(v3(t, l, a)),
      (l = c3(t, e)),
      l != null && o.push(v3(t, l, a))),
      (t = t.return);
  }
  return o;
}
function z1(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function B6(t, e, i, o, a) {
  for (var l = e._reactName, h = []; i !== null && i !== o; ) {
    var d = i,
      p = d.alternate,
      g = d.stateNode;
    if (p !== null && p === o) break;
    d.tag === 5 &&
      g !== null &&
      ((d = g),
      a
        ? ((p = c3(i, l)), p != null && h.unshift(v3(i, p, d)))
        : a || ((p = c3(i, l)), p != null && h.push(v3(i, p, d)))),
      (i = i.return);
  }
  h.length !== 0 && t.push({ event: e, listeners: h });
}
var D8 = /\r\n?/g,
  B8 = /\u0000|\uFFFD/g;
function F6(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      D8,
      `
`
    )
    .replace(B8, "");
}
function xn(t, e, i) {
  if (((e = F6(e)), F6(t) !== e && i)) throw Error(R(425));
}
function qn() {}
var pr = null,
  mr = null;
function _r(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var vr = typeof setTimeout == "function" ? setTimeout : void 0,
  F8 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  j6 = typeof Promise == "function" ? Promise : void 0,
  j8 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof j6 < "u"
      ? function (t) {
          return j6.resolve(null).then(t).catch(Z8);
        }
      : vr;
function Z8(t) {
  setTimeout(function () {
    throw t;
  });
}
function Ii(t, e) {
  var i = e,
    o = 0;
  do {
    var a = i.nextSibling;
    if ((t.removeChild(i), a && a.nodeType === 8))
      if (((i = a.data), i === "/$")) {
        if (o === 0) {
          t.removeChild(a), d3(e);
          return;
        }
        o--;
      } else (i !== "$" && i !== "$?" && i !== "$!") || o++;
    i = a;
  } while (i);
  d3(e);
}
function Be(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Z6(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var i = t.data;
      if (i === "$" || i === "$!" || i === "$?") {
        if (e === 0) return t;
        e--;
      } else i === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var L4 = Math.random().toString(36).slice(2),
  Kt = "__reactFiber$" + L4,
  g3 = "__reactProps$" + L4,
  he = "__reactContainer$" + L4,
  gr = "__reactEvents$" + L4,
  U8 = "__reactListeners$" + L4,
  H8 = "__reactHandles$" + L4;
function e1(t) {
  var e = t[Kt];
  if (e) return e;
  for (var i = t.parentNode; i; ) {
    if ((e = i[he] || i[Kt])) {
      if (
        ((i = e.alternate),
        e.child !== null || (i !== null && i.child !== null))
      )
        for (t = Z6(t); t !== null; ) {
          if ((i = t[Kt])) return i;
          t = Z6(t);
        }
      return e;
    }
    (t = i), (i = t.parentNode);
  }
  return null;
}
function U3(t) {
  return (
    (t = t[Kt] || t[he]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function j1(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(R(33));
}
function w0(t) {
  return t[g3] || null;
}
var yr = [],
  Z1 = -1;
function Ve(t) {
  return { current: t };
}
function _2(t) {
  0 > Z1 || ((t.current = yr[Z1]), (yr[Z1] = null), Z1--);
}
function p2(t, e) {
  Z1++, (yr[Z1] = t.current), (t.current = e);
}
var We = {},
  Q2 = Ve(We),
  rt = Ve(!1),
  m1 = We;
function m4(t, e) {
  var i = t.type.contextTypes;
  if (!i) return We;
  var o = t.stateNode;
  if (o && o.__reactInternalMemoizedUnmaskedChildContext === e)
    return o.__reactInternalMemoizedMaskedChildContext;
  var a = {},
    l;
  for (l in i) a[l] = e[l];
  return (
    o &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = a)),
    a
  );
}
function ot(t) {
  return (t = t.childContextTypes), t != null;
}
function Yn() {
  _2(rt), _2(Q2);
}
function U6(t, e, i) {
  if (Q2.current !== We) throw Error(R(168));
  p2(Q2, e), p2(rt, i);
}
function Qa(t, e, i) {
  var o = t.stateNode;
  if (((e = e.childContextTypes), typeof o.getChildContext != "function"))
    return i;
  o = o.getChildContext();
  for (var a in o) if (!(a in e)) throw Error(R(108, Cu(t) || "Unknown", a));
  return x2({}, i, o);
}
function Xn(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || We),
    (m1 = Q2.current),
    p2(Q2, t),
    p2(rt, rt.current),
    !0
  );
}
function H6(t, e, i) {
  var o = t.stateNode;
  if (!o) throw Error(R(169));
  i
    ? ((t = Qa(t, e, m1)),
      (o.__reactInternalMemoizedMergedChildContext = t),
      _2(rt),
      _2(Q2),
      p2(Q2, t))
    : _2(rt),
    p2(rt, i);
}
var se = null,
  x0 = !1,
  Ri = !1;
function Ga(t) {
  se === null ? (se = [t]) : se.push(t);
}
function W8(t) {
  (x0 = !0), Ga(t);
}
function $e() {
  if (!Ri && se !== null) {
    Ri = !0;
    var t = 0,
      e = u2;
    try {
      var i = se;
      for (u2 = 1; t < i.length; t++) {
        var o = i[t];
        do o = o(!0);
        while (o !== null);
      }
      (se = null), (x0 = !1);
    } catch (a) {
      throw (se !== null && (se = se.slice(t + 1)), ya(c9, $e), a);
    } finally {
      (u2 = e), (Ri = !1);
    }
  }
  return null;
}
var U1 = [],
  H1 = 0,
  Jn = null,
  t0 = 0,
  Pt = [],
  St = 0,
  _1 = null,
  ae = 1,
  le = "";
function Je(t, e) {
  (U1[H1++] = t0), (U1[H1++] = Jn), (Jn = t), (t0 = e);
}
function Ka(t, e, i) {
  (Pt[St++] = ae), (Pt[St++] = le), (Pt[St++] = _1), (_1 = t);
  var o = ae;
  t = le;
  var a = 32 - Dt(o) - 1;
  (o &= ~(1 << a)), (i += 1);
  var l = 32 - Dt(e) + a;
  if (30 < l) {
    var h = a - (a % 5);
    (l = (o & ((1 << h) - 1)).toString(32)),
      (o >>= h),
      (a -= h),
      (ae = (1 << (32 - Dt(e) + a)) | (i << a) | o),
      (le = l + t);
  } else (ae = (1 << l) | (i << a) | o), (le = t);
}
function y9(t) {
  t.return !== null && (Je(t, 1), Ka(t, 1, 0));
}
function w9(t) {
  for (; t === Jn; )
    (Jn = U1[--H1]), (U1[H1] = null), (t0 = U1[--H1]), (U1[H1] = null);
  for (; t === _1; )
    (_1 = Pt[--St]),
      (Pt[St] = null),
      (le = Pt[--St]),
      (Pt[St] = null),
      (ae = Pt[--St]),
      (Pt[St] = null);
}
var ct = null,
  ut = null,
  v2 = !1,
  At = null;
function qa(t, e) {
  var i = Lt(5, null, null, 0);
  (i.elementType = "DELETED"),
    (i.stateNode = e),
    (i.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [i]), (t.flags |= 16)) : e.push(i);
}
function W6(t, e) {
  switch (t.tag) {
    case 5:
      var i = t.type;
      return (
        (e =
          e.nodeType !== 1 || i.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (ct = t), (ut = Be(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (ct = t), (ut = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((i = _1 !== null ? { id: ae, overflow: le } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: i,
              retryLane: 1073741824,
            }),
            (i = Lt(18, null, null, 0)),
            (i.stateNode = e),
            (i.return = t),
            (t.child = i),
            (ct = t),
            (ut = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wr(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function xr(t) {
  if (v2) {
    var e = ut;
    if (e) {
      var i = e;
      if (!W6(t, e)) {
        if (wr(t)) throw Error(R(418));
        e = Be(i.nextSibling);
        var o = ct;
        e && W6(t, e)
          ? qa(o, i)
          : ((t.flags = (t.flags & -4097) | 2), (v2 = !1), (ct = t));
      }
    } else {
      if (wr(t)) throw Error(R(418));
      (t.flags = (t.flags & -4097) | 2), (v2 = !1), (ct = t);
    }
  }
}
function b6(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  ct = t;
}
function Pn(t) {
  if (t !== ct) return !1;
  if (!v2) return b6(t), (v2 = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !_r(t.type, t.memoizedProps))),
    e && (e = ut))
  ) {
    if (wr(t)) throw (Ya(), Error(R(418)));
    for (; e; ) qa(t, e), (e = Be(e.nextSibling));
  }
  if ((b6(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(R(317));
    t: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var i = t.data;
          if (i === "/$") {
            if (e === 0) {
              ut = Be(t.nextSibling);
              break t;
            }
            e--;
          } else (i !== "$" && i !== "$!" && i !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      ut = null;
    }
  } else ut = ct ? Be(t.stateNode.nextSibling) : null;
  return !0;
}
function Ya() {
  for (var t = ut; t; ) t = Be(t.nextSibling);
}
function _4() {
  (ut = ct = null), (v2 = !1);
}
function x9(t) {
  At === null ? (At = [t]) : At.push(t);
}
var b8 = pe.ReactCurrentBatchConfig;
function Nt(t, e) {
  if (t && t.defaultProps) {
    (e = x2({}, e)), (t = t.defaultProps);
    for (var i in t) e[i] === void 0 && (e[i] = t[i]);
    return e;
  }
  return e;
}
var e0 = Ve(null),
  n0 = null,
  W1 = null,
  P9 = null;
function S9() {
  P9 = W1 = n0 = null;
}
function L9(t) {
  var e = e0.current;
  _2(e0), (t._currentValue = e);
}
function Pr(t, e, i) {
  for (; t !== null; ) {
    var o = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), o !== null && (o.childLanes |= e))
        : o !== null && (o.childLanes & e) !== e && (o.childLanes |= e),
      t === i)
    )
      break;
    t = t.return;
  }
}
function Y1(t, e) {
  (n0 = t),
    (P9 = W1 = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (it = !0), (t.firstContext = null));
}
function Ct(t) {
  var e = t._currentValue;
  if (P9 !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), W1 === null)) {
      if (n0 === null) throw Error(R(308));
      (W1 = t), (n0.dependencies = { lanes: 0, firstContext: t });
    } else W1 = W1.next = t;
  return e;
}
var n1 = null;
function k9(t) {
  n1 === null ? (n1 = [t]) : n1.push(t);
}
function Xa(t, e, i, o) {
  var a = e.interleaved;
  return (
    a === null ? ((i.next = i), k9(e)) : ((i.next = a.next), (a.next = i)),
    (e.interleaved = i),
    fe(t, o)
  );
}
function fe(t, e) {
  t.lanes |= e;
  var i = t.alternate;
  for (i !== null && (i.lanes |= e), i = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (i = t.alternate),
      i !== null && (i.childLanes |= e),
      (i = t),
      (t = t.return);
  return i.tag === 3 ? i.stateNode : null;
}
var xe = !1;
function C9(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ja(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function ue(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Fe(t, e, i) {
  var o = t.updateQueue;
  if (o === null) return null;
  if (((o = o.shared), s2 & 2)) {
    var a = o.pending;
    return (
      a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)),
      (o.pending = e),
      fe(t, i)
    );
  }
  return (
    (a = o.interleaved),
    a === null ? ((e.next = e), k9(o)) : ((e.next = a.next), (a.next = e)),
    (o.interleaved = e),
    fe(t, i)
  );
}
function Rn(t, e, i) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (i & 4194240) !== 0))
  ) {
    var o = e.lanes;
    (o &= t.pendingLanes), (i |= o), (e.lanes = i), h9(t, i);
  }
}
function V6(t, e) {
  var i = t.updateQueue,
    o = t.alternate;
  if (o !== null && ((o = o.updateQueue), i === o)) {
    var a = null,
      l = null;
    if (((i = i.firstBaseUpdate), i !== null)) {
      do {
        var h = {
          eventTime: i.eventTime,
          lane: i.lane,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        };
        l === null ? (a = l = h) : (l = l.next = h), (i = i.next);
      } while (i !== null);
      l === null ? (a = l = e) : (l = l.next = e);
    } else a = l = e;
    (i = {
      baseState: o.baseState,
      firstBaseUpdate: a,
      lastBaseUpdate: l,
      shared: o.shared,
      effects: o.effects,
    }),
      (t.updateQueue = i);
    return;
  }
  (t = i.lastBaseUpdate),
    t === null ? (i.firstBaseUpdate = e) : (t.next = e),
    (i.lastBaseUpdate = e);
}
function i0(t, e, i, o) {
  var a = t.updateQueue;
  xe = !1;
  var l = a.firstBaseUpdate,
    h = a.lastBaseUpdate,
    d = a.shared.pending;
  if (d !== null) {
    a.shared.pending = null;
    var p = d,
      g = p.next;
    (p.next = null), h === null ? (l = g) : (h.next = g), (h = p);
    var x = t.alternate;
    x !== null &&
      ((x = x.updateQueue),
      (d = x.lastBaseUpdate),
      d !== h &&
        (d === null ? (x.firstBaseUpdate = g) : (d.next = g),
        (x.lastBaseUpdate = p)));
  }
  if (l !== null) {
    var S = a.baseState;
    (h = 0), (x = g = p = null), (d = l);
    do {
      var k = d.lane,
        T = d.eventTime;
      if ((o & k) === k) {
        x !== null &&
          (x = x.next =
            {
              eventTime: T,
              lane: 0,
              tag: d.tag,
              payload: d.payload,
              callback: d.callback,
              next: null,
            });
        t: {
          var z = t,
            M = d;
          switch (((k = e), (T = i), M.tag)) {
            case 1:
              if (((z = M.payload), typeof z == "function")) {
                S = z.call(T, S, k);
                break t;
              }
              S = z;
              break t;
            case 3:
              z.flags = (z.flags & -65537) | 128;
            case 0:
              if (
                ((z = M.payload),
                (k = typeof z == "function" ? z.call(T, S, k) : z),
                k == null)
              )
                break t;
              S = x2({}, S, k);
              break t;
            case 2:
              xe = !0;
          }
        }
        d.callback !== null &&
          d.lane !== 0 &&
          ((t.flags |= 64),
          (k = a.effects),
          k === null ? (a.effects = [d]) : k.push(d));
      } else
        (T = {
          eventTime: T,
          lane: k,
          tag: d.tag,
          payload: d.payload,
          callback: d.callback,
          next: null,
        }),
          x === null ? ((g = x = T), (p = S)) : (x = x.next = T),
          (h |= k);
      if (((d = d.next), d === null)) {
        if (((d = a.shared.pending), d === null)) break;
        (k = d),
          (d = k.next),
          (k.next = null),
          (a.lastBaseUpdate = k),
          (a.shared.pending = null);
      }
    } while (1);
    if (
      (x === null && (p = S),
      (a.baseState = p),
      (a.firstBaseUpdate = g),
      (a.lastBaseUpdate = x),
      (e = a.shared.interleaved),
      e !== null)
    ) {
      a = e;
      do (h |= a.lane), (a = a.next);
      while (a !== e);
    } else l === null && (a.shared.lanes = 0);
    (g1 |= h), (t.lanes = h), (t.memoizedState = S);
  }
}
function $6(t, e, i) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var o = t[e],
        a = o.callback;
      if (a !== null) {
        if (((o.callback = null), (o = i), typeof a != "function"))
          throw Error(R(191, a));
        a.call(o);
      }
    }
}
var t7 = new Xs.Component().refs;
function Sr(t, e, i, o) {
  (e = t.memoizedState),
    (i = i(o, e)),
    (i = i == null ? e : x2({}, e, i)),
    (t.memoizedState = i),
    t.lanes === 0 && (t.updateQueue.baseState = i);
}
var P0 = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? x1(t) === t : !1;
  },
  enqueueSetState: function (t, e, i) {
    t = t._reactInternals;
    var o = q2(),
      a = Ze(t),
      l = ue(o, a);
    (l.payload = e),
      i != null && (l.callback = i),
      (e = Fe(t, l, a)),
      e !== null && (Bt(e, t, a, o), Rn(e, t, a));
  },
  enqueueReplaceState: function (t, e, i) {
    t = t._reactInternals;
    var o = q2(),
      a = Ze(t),
      l = ue(o, a);
    (l.tag = 1),
      (l.payload = e),
      i != null && (l.callback = i),
      (e = Fe(t, l, a)),
      e !== null && (Bt(e, t, a, o), Rn(e, t, a));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var i = q2(),
      o = Ze(t),
      a = ue(i, o);
    (a.tag = 2),
      e != null && (a.callback = e),
      (e = Fe(t, a, o)),
      e !== null && (Bt(e, t, o, i), Rn(e, t, o));
  },
};
function Q6(t, e, i, o, a, l, h) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(o, l, h)
      : e.prototype && e.prototype.isPureReactComponent
      ? !m3(i, o) || !m3(a, l)
      : !0
  );
}
function e7(t, e, i) {
  var o = !1,
    a = We,
    l = e.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Ct(l))
      : ((a = ot(e) ? m1 : Q2.current),
        (o = e.contextTypes),
        (l = (o = o != null) ? m4(t, a) : We)),
    (e = new e(i, l)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = P0),
    (t.stateNode = e),
    (e._reactInternals = t),
    o &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = a),
      (t.__reactInternalMemoizedMaskedChildContext = l)),
    e
  );
}
function G6(t, e, i, o) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(i, o),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(i, o),
    e.state !== t && P0.enqueueReplaceState(e, e.state, null);
}
function Lr(t, e, i, o) {
  var a = t.stateNode;
  (a.props = i), (a.state = t.memoizedState), (a.refs = t7), C9(t);
  var l = e.contextType;
  typeof l == "object" && l !== null
    ? (a.context = Ct(l))
    : ((l = ot(e) ? m1 : Q2.current), (a.context = m4(t, l))),
    (a.state = t.memoizedState),
    (l = e.getDerivedStateFromProps),
    typeof l == "function" && (Sr(t, e, l, i), (a.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function" ||
      (typeof a.UNSAFE_componentWillMount != "function" &&
        typeof a.componentWillMount != "function") ||
      ((e = a.state),
      typeof a.componentWillMount == "function" && a.componentWillMount(),
      typeof a.UNSAFE_componentWillMount == "function" &&
        a.UNSAFE_componentWillMount(),
      e !== a.state && P0.enqueueReplaceState(a, a.state, null),
      i0(t, i, a, o),
      (a.state = t.memoizedState)),
    typeof a.componentDidMount == "function" && (t.flags |= 4194308);
}
function V4(t, e, i) {
  if (
    ((t = i.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (i._owner) {
      if (((i = i._owner), i)) {
        if (i.tag !== 1) throw Error(R(309));
        var o = i.stateNode;
      }
      if (!o) throw Error(R(147, t));
      var a = o,
        l = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === l
        ? e.ref
        : ((e = function (h) {
            var d = a.refs;
            d === t7 && (d = a.refs = {}),
              h === null ? delete d[l] : (d[l] = h);
          }),
          (e._stringRef = l),
          e);
    }
    if (typeof t != "string") throw Error(R(284));
    if (!i._owner) throw Error(R(290, t));
  }
  return t;
}
function Sn(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      R(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t
      )
    ))
  );
}
function K6(t) {
  var e = t._init;
  return e(t._payload);
}
function n7(t) {
  function e(v, _) {
    if (t) {
      var y = v.deletions;
      y === null ? ((v.deletions = [_]), (v.flags |= 16)) : y.push(_);
    }
  }
  function i(v, _) {
    if (!t) return null;
    for (; _ !== null; ) e(v, _), (_ = _.sibling);
    return null;
  }
  function o(v, _) {
    for (v = new Map(); _ !== null; )
      _.key !== null ? v.set(_.key, _) : v.set(_.index, _), (_ = _.sibling);
    return v;
  }
  function a(v, _) {
    return (v = Ue(v, _)), (v.index = 0), (v.sibling = null), v;
  }
  function l(v, _, y) {
    return (
      (v.index = y),
      t
        ? ((y = v.alternate),
          y !== null
            ? ((y = y.index), y < _ ? ((v.flags |= 2), _) : y)
            : ((v.flags |= 2), _))
        : ((v.flags |= 1048576), _)
    );
  }
  function h(v) {
    return t && v.alternate === null && (v.flags |= 2), v;
  }
  function d(v, _, y, O) {
    return _ === null || _.tag !== 6
      ? ((_ = Ui(y, v.mode, O)), (_.return = v), _)
      : ((_ = a(_, y)), (_.return = v), _);
  }
  function p(v, _, y, O) {
    var A = y.type;
    return A === A1
      ? x(v, _, y.props.children, O, y.key)
      : _ !== null &&
        (_.elementType === A ||
          (typeof A == "object" &&
            A !== null &&
            A.$$typeof === we &&
            K6(A) === _.type))
      ? ((O = a(_, y.props)), (O.ref = V4(v, _, y)), (O.return = v), O)
      : ((O = Zn(y.type, y.key, y.props, null, v.mode, O)),
        (O.ref = V4(v, _, y)),
        (O.return = v),
        O);
  }
  function g(v, _, y, O) {
    return _ === null ||
      _.tag !== 4 ||
      _.stateNode.containerInfo !== y.containerInfo ||
      _.stateNode.implementation !== y.implementation
      ? ((_ = Hi(y, v.mode, O)), (_.return = v), _)
      : ((_ = a(_, y.children || [])), (_.return = v), _);
  }
  function x(v, _, y, O, A) {
    return _ === null || _.tag !== 7
      ? ((_ = p1(y, v.mode, O, A)), (_.return = v), _)
      : ((_ = a(_, y)), (_.return = v), _);
  }
  function S(v, _, y) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (_ = Ui("" + _, v.mode, y)), (_.return = v), _;
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case fn:
          return (
            (y = Zn(_.type, _.key, _.props, null, v.mode, y)),
            (y.ref = V4(v, null, _)),
            (y.return = v),
            y
          );
        case R1:
          return (_ = Hi(_, v.mode, y)), (_.return = v), _;
        case we:
          var O = _._init;
          return S(v, O(_._payload), y);
      }
      if (K4(_) || Z4(_))
        return (_ = p1(_, v.mode, y, null)), (_.return = v), _;
      Sn(v, _);
    }
    return null;
  }
  function k(v, _, y, O) {
    var A = _ !== null ? _.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return A !== null ? null : d(v, _, "" + y, O);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case fn:
          return y.key === A ? p(v, _, y, O) : null;
        case R1:
          return y.key === A ? g(v, _, y, O) : null;
        case we:
          return (A = y._init), k(v, _, A(y._payload), O);
      }
      if (K4(y) || Z4(y)) return A !== null ? null : x(v, _, y, O, null);
      Sn(v, y);
    }
    return null;
  }
  function T(v, _, y, O, A) {
    if ((typeof O == "string" && O !== "") || typeof O == "number")
      return (v = v.get(y) || null), d(_, v, "" + O, A);
    if (typeof O == "object" && O !== null) {
      switch (O.$$typeof) {
        case fn:
          return (v = v.get(O.key === null ? y : O.key) || null), p(_, v, O, A);
        case R1:
          return (v = v.get(O.key === null ? y : O.key) || null), g(_, v, O, A);
        case we:
          var j = O._init;
          return T(v, _, y, j(O._payload), A);
      }
      if (K4(O) || Z4(O)) return (v = v.get(y) || null), x(_, v, O, A, null);
      Sn(_, O);
    }
    return null;
  }
  function z(v, _, y, O) {
    for (
      var A = null, j = null, F = _, B = (_ = 0), i2 = null;
      F !== null && B < y.length;
      B++
    ) {
      F.index > B ? ((i2 = F), (F = null)) : (i2 = F.sibling);
      var J = k(v, F, y[B], O);
      if (J === null) {
        F === null && (F = i2);
        break;
      }
      t && F && J.alternate === null && e(v, F),
        (_ = l(J, _, B)),
        j === null ? (A = J) : (j.sibling = J),
        (j = J),
        (F = i2);
    }
    if (B === y.length) return i(v, F), v2 && Je(v, B), A;
    if (F === null) {
      for (; B < y.length; B++)
        (F = S(v, y[B], O)),
          F !== null &&
            ((_ = l(F, _, B)), j === null ? (A = F) : (j.sibling = F), (j = F));
      return v2 && Je(v, B), A;
    }
    for (F = o(v, F); B < y.length; B++)
      (i2 = T(F, v, B, y[B], O)),
        i2 !== null &&
          (t && i2.alternate !== null && F.delete(i2.key === null ? B : i2.key),
          (_ = l(i2, _, B)),
          j === null ? (A = i2) : (j.sibling = i2),
          (j = i2));
    return (
      t &&
        F.forEach(function (h2) {
          return e(v, h2);
        }),
      v2 && Je(v, B),
      A
    );
  }
  function M(v, _, y, O) {
    var A = Z4(y);
    if (typeof A != "function") throw Error(R(150));
    if (((y = A.call(y)), y == null)) throw Error(R(151));
    for (
      var j = (A = null), F = _, B = (_ = 0), i2 = null, J = y.next();
      F !== null && !J.done;
      B++, J = y.next()
    ) {
      F.index > B ? ((i2 = F), (F = null)) : (i2 = F.sibling);
      var h2 = k(v, F, J.value, O);
      if (h2 === null) {
        F === null && (F = i2);
        break;
      }
      t && F && h2.alternate === null && e(v, F),
        (_ = l(h2, _, B)),
        j === null ? (A = h2) : (j.sibling = h2),
        (j = h2),
        (F = i2);
    }
    if (J.done) return i(v, F), v2 && Je(v, B), A;
    if (F === null) {
      for (; !J.done; B++, J = y.next())
        (J = S(v, J.value, O)),
          J !== null &&
            ((_ = l(J, _, B)), j === null ? (A = J) : (j.sibling = J), (j = J));
      return v2 && Je(v, B), A;
    }
    for (F = o(v, F); !J.done; B++, J = y.next())
      (J = T(F, v, B, J.value, O)),
        J !== null &&
          (t && J.alternate !== null && F.delete(J.key === null ? B : J.key),
          (_ = l(J, _, B)),
          j === null ? (A = J) : (j.sibling = J),
          (j = J));
    return (
      t &&
        F.forEach(function (N2) {
          return e(v, N2);
        }),
      v2 && Je(v, B),
      A
    );
  }
  function U(v, _, y, O) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === A1 &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case fn:
          t: {
            for (var A = y.key, j = _; j !== null; ) {
              if (j.key === A) {
                if (((A = y.type), A === A1)) {
                  if (j.tag === 7) {
                    i(v, j.sibling),
                      (_ = a(j, y.props.children)),
                      (_.return = v),
                      (v = _);
                    break t;
                  }
                } else if (
                  j.elementType === A ||
                  (typeof A == "object" &&
                    A !== null &&
                    A.$$typeof === we &&
                    K6(A) === j.type)
                ) {
                  i(v, j.sibling),
                    (_ = a(j, y.props)),
                    (_.ref = V4(v, j, y)),
                    (_.return = v),
                    (v = _);
                  break t;
                }
                i(v, j);
                break;
              } else e(v, j);
              j = j.sibling;
            }
            y.type === A1
              ? ((_ = p1(y.props.children, v.mode, O, y.key)),
                (_.return = v),
                (v = _))
              : ((O = Zn(y.type, y.key, y.props, null, v.mode, O)),
                (O.ref = V4(v, _, y)),
                (O.return = v),
                (v = O));
          }
          return h(v);
        case R1:
          t: {
            for (j = y.key; _ !== null; ) {
              if (_.key === j)
                if (
                  _.tag === 4 &&
                  _.stateNode.containerInfo === y.containerInfo &&
                  _.stateNode.implementation === y.implementation
                ) {
                  i(v, _.sibling),
                    (_ = a(_, y.children || [])),
                    (_.return = v),
                    (v = _);
                  break t;
                } else {
                  i(v, _);
                  break;
                }
              else e(v, _);
              _ = _.sibling;
            }
            (_ = Hi(y, v.mode, O)), (_.return = v), (v = _);
          }
          return h(v);
        case we:
          return (j = y._init), U(v, _, j(y._payload), O);
      }
      if (K4(y)) return z(v, _, y, O);
      if (Z4(y)) return M(v, _, y, O);
      Sn(v, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        _ !== null && _.tag === 6
          ? (i(v, _.sibling), (_ = a(_, y)), (_.return = v), (v = _))
          : (i(v, _), (_ = Ui(y, v.mode, O)), (_.return = v), (v = _)),
        h(v))
      : i(v, _);
  }
  return U;
}
var v4 = n7(!0),
  i7 = n7(!1),
  H3 = {},
  Yt = Ve(H3),
  y3 = Ve(H3),
  w3 = Ve(H3);
function i1(t) {
  if (t === H3) throw Error(R(174));
  return t;
}
function E9(t, e) {
  switch ((p2(w3, e), p2(y3, t), p2(Yt, H3), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : nr(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = nr(e, t));
  }
  _2(Yt), p2(Yt, e);
}
function g4() {
  _2(Yt), _2(y3), _2(w3);
}
function r7(t) {
  i1(w3.current);
  var e = i1(Yt.current),
    i = nr(e, t.type);
  e !== i && (p2(y3, t), p2(Yt, i));
}
function T9(t) {
  y3.current === t && (_2(Yt), _2(y3));
}
var y2 = Ve(0);
function r0(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var i = e.memoizedState;
      if (
        i !== null &&
        ((i = i.dehydrated), i === null || i.data === "$?" || i.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var Ai = [];
function M9() {
  for (var t = 0; t < Ai.length; t++)
    Ai[t]._workInProgressVersionPrimary = null;
  Ai.length = 0;
}
var An = pe.ReactCurrentDispatcher,
  Di = pe.ReactCurrentBatchConfig,
  v1 = 0,
  w2 = null,
  O2 = null,
  A2 = null,
  o0 = !1,
  r3 = !1,
  x3 = 0,
  V8 = 0;
function W2() {
  throw Error(R(321));
}
function O9(t, e) {
  if (e === null) return !1;
  for (var i = 0; i < e.length && i < t.length; i++)
    if (!Ft(t[i], e[i])) return !1;
  return !0;
}
function z9(t, e, i, o, a, l) {
  if (
    ((v1 = l),
    (w2 = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (An.current = t === null || t.memoizedState === null ? K8 : q8),
    (t = i(o, a)),
    r3)
  ) {
    l = 0;
    do {
      if (((r3 = !1), (x3 = 0), 25 <= l)) throw Error(R(301));
      (l += 1),
        (A2 = O2 = null),
        (e.updateQueue = null),
        (An.current = Y8),
        (t = i(o, a));
    } while (r3);
  }
  if (
    ((An.current = s0),
    (e = O2 !== null && O2.next !== null),
    (v1 = 0),
    (A2 = O2 = w2 = null),
    (o0 = !1),
    e)
  )
    throw Error(R(300));
  return t;
}
function N9() {
  var t = x3 !== 0;
  return (x3 = 0), t;
}
function bt() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return A2 === null ? (w2.memoizedState = A2 = t) : (A2 = A2.next = t), A2;
}
function Et() {
  if (O2 === null) {
    var t = w2.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = O2.next;
  var e = A2 === null ? w2.memoizedState : A2.next;
  if (e !== null) (A2 = e), (O2 = t);
  else {
    if (t === null) throw Error(R(310));
    (O2 = t),
      (t = {
        memoizedState: O2.memoizedState,
        baseState: O2.baseState,
        baseQueue: O2.baseQueue,
        queue: O2.queue,
        next: null,
      }),
      A2 === null ? (w2.memoizedState = A2 = t) : (A2 = A2.next = t);
  }
  return A2;
}
function P3(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Bi(t) {
  var e = Et(),
    i = e.queue;
  if (i === null) throw Error(R(311));
  i.lastRenderedReducer = t;
  var o = O2,
    a = o.baseQueue,
    l = i.pending;
  if (l !== null) {
    if (a !== null) {
      var h = a.next;
      (a.next = l.next), (l.next = h);
    }
    (o.baseQueue = a = l), (i.pending = null);
  }
  if (a !== null) {
    (l = a.next), (o = o.baseState);
    var d = (h = null),
      p = null,
      g = l;
    do {
      var x = g.lane;
      if ((v1 & x) === x)
        p !== null &&
          (p = p.next =
            {
              lane: 0,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null,
            }),
          (o = g.hasEagerState ? g.eagerState : t(o, g.action));
      else {
        var S = {
          lane: x,
          action: g.action,
          hasEagerState: g.hasEagerState,
          eagerState: g.eagerState,
          next: null,
        };
        p === null ? ((d = p = S), (h = o)) : (p = p.next = S),
          (w2.lanes |= x),
          (g1 |= x);
      }
      g = g.next;
    } while (g !== null && g !== l);
    p === null ? (h = o) : (p.next = d),
      Ft(o, e.memoizedState) || (it = !0),
      (e.memoizedState = o),
      (e.baseState = h),
      (e.baseQueue = p),
      (i.lastRenderedState = o);
  }
  if (((t = i.interleaved), t !== null)) {
    a = t;
    do (l = a.lane), (w2.lanes |= l), (g1 |= l), (a = a.next);
    while (a !== t);
  } else a === null && (i.lanes = 0);
  return [e.memoizedState, i.dispatch];
}
function Fi(t) {
  var e = Et(),
    i = e.queue;
  if (i === null) throw Error(R(311));
  i.lastRenderedReducer = t;
  var o = i.dispatch,
    a = i.pending,
    l = e.memoizedState;
  if (a !== null) {
    i.pending = null;
    var h = (a = a.next);
    do (l = t(l, h.action)), (h = h.next);
    while (h !== a);
    Ft(l, e.memoizedState) || (it = !0),
      (e.memoizedState = l),
      e.baseQueue === null && (e.baseState = l),
      (i.lastRenderedState = l);
  }
  return [l, o];
}
function o7() {}
function s7(t, e) {
  var i = w2,
    o = Et(),
    a = e(),
    l = !Ft(o.memoizedState, a);
  if (
    (l && ((o.memoizedState = a), (it = !0)),
    (o = o.queue),
    I9(u7.bind(null, i, o, t), [t]),
    o.getSnapshot !== e || l || (A2 !== null && A2.memoizedState.tag & 1))
  ) {
    if (
      ((i.flags |= 2048),
      S3(9, l7.bind(null, i, o, a, e), void 0, null),
      D2 === null)
    )
      throw Error(R(349));
    v1 & 30 || a7(i, e, a);
  }
  return a;
}
function a7(t, e, i) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: i }),
    (e = w2.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (w2.updateQueue = e),
        (e.stores = [t]))
      : ((i = e.stores), i === null ? (e.stores = [t]) : i.push(t));
}
function l7(t, e, i, o) {
  (e.value = i), (e.getSnapshot = o), c7(e) && h7(t);
}
function u7(t, e, i) {
  return i(function () {
    c7(e) && h7(t);
  });
}
function c7(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var i = e();
    return !Ft(t, i);
  } catch {
    return !0;
  }
}
function h7(t) {
  var e = fe(t, 1);
  e !== null && Bt(e, t, 1, -1);
}
function q6(t) {
  var e = bt();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: P3,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = G8.bind(null, w2, t)),
    [e.memoizedState, t]
  );
}
function S3(t, e, i, o) {
  return (
    (t = { tag: t, create: e, destroy: i, deps: o, next: null }),
    (e = w2.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (w2.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((i = e.lastEffect),
        i === null
          ? (e.lastEffect = t.next = t)
          : ((o = i.next), (i.next = t), (t.next = o), (e.lastEffect = t))),
    t
  );
}
function f7() {
  return Et().memoizedState;
}
function Dn(t, e, i, o) {
  var a = bt();
  (w2.flags |= t),
    (a.memoizedState = S3(1 | e, i, void 0, o === void 0 ? null : o));
}
function S0(t, e, i, o) {
  var a = Et();
  o = o === void 0 ? null : o;
  var l = void 0;
  if (O2 !== null) {
    var h = O2.memoizedState;
    if (((l = h.destroy), o !== null && O9(o, h.deps))) {
      a.memoizedState = S3(e, i, l, o);
      return;
    }
  }
  (w2.flags |= t), (a.memoizedState = S3(1 | e, i, l, o));
}
function Y6(t, e) {
  return Dn(8390656, 8, t, e);
}
function I9(t, e) {
  return S0(2048, 8, t, e);
}
function d7(t, e) {
  return S0(4, 2, t, e);
}
function p7(t, e) {
  return S0(4, 4, t, e);
}
function m7(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function _7(t, e, i) {
  return (
    (i = i != null ? i.concat([t]) : null), S0(4, 4, m7.bind(null, e, t), i)
  );
}
function R9() {}
function v7(t, e) {
  var i = Et();
  e = e === void 0 ? null : e;
  var o = i.memoizedState;
  return o !== null && e !== null && O9(e, o[1])
    ? o[0]
    : ((i.memoizedState = [t, e]), t);
}
function g7(t, e) {
  var i = Et();
  e = e === void 0 ? null : e;
  var o = i.memoizedState;
  return o !== null && e !== null && O9(e, o[1])
    ? o[0]
    : ((t = t()), (i.memoizedState = [t, e]), t);
}
function y7(t, e, i) {
  return v1 & 21
    ? (Ft(i, e) || ((i = Pa()), (w2.lanes |= i), (g1 |= i), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (it = !0)), (t.memoizedState = i));
}
function $8(t, e) {
  var i = u2;
  (u2 = i !== 0 && 4 > i ? i : 4), t(!0);
  var o = Di.transition;
  Di.transition = {};
  try {
    t(!1), e();
  } finally {
    (u2 = i), (Di.transition = o);
  }
}
function w7() {
  return Et().memoizedState;
}
function Q8(t, e, i) {
  var o = Ze(t);
  if (
    ((i = {
      lane: o,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    x7(t))
  )
    P7(e, i);
  else if (((i = Xa(t, e, i, o)), i !== null)) {
    var a = q2();
    Bt(i, t, o, a), S7(i, e, o);
  }
}
function G8(t, e, i) {
  var o = Ze(t),
    a = { lane: o, action: i, hasEagerState: !1, eagerState: null, next: null };
  if (x7(t)) P7(e, a);
  else {
    var l = t.alternate;
    if (
      t.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = e.lastRenderedReducer), l !== null)
    )
      try {
        var h = e.lastRenderedState,
          d = l(h, i);
        if (((a.hasEagerState = !0), (a.eagerState = d), Ft(d, h))) {
          var p = e.interleaved;
          p === null
            ? ((a.next = a), k9(e))
            : ((a.next = p.next), (p.next = a)),
            (e.interleaved = a);
          return;
        }
      } catch {
      } finally {
      }
    (i = Xa(t, e, a, o)),
      i !== null && ((a = q2()), Bt(i, t, o, a), S7(i, e, o));
  }
}
function x7(t) {
  var e = t.alternate;
  return t === w2 || (e !== null && e === w2);
}
function P7(t, e) {
  r3 = o0 = !0;
  var i = t.pending;
  i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
    (t.pending = e);
}
function S7(t, e, i) {
  if (i & 4194240) {
    var o = e.lanes;
    (o &= t.pendingLanes), (i |= o), (e.lanes = i), h9(t, i);
  }
}
var s0 = {
    readContext: Ct,
    useCallback: W2,
    useContext: W2,
    useEffect: W2,
    useImperativeHandle: W2,
    useInsertionEffect: W2,
    useLayoutEffect: W2,
    useMemo: W2,
    useReducer: W2,
    useRef: W2,
    useState: W2,
    useDebugValue: W2,
    useDeferredValue: W2,
    useTransition: W2,
    useMutableSource: W2,
    useSyncExternalStore: W2,
    useId: W2,
    unstable_isNewReconciler: !1,
  },
  K8 = {
    readContext: Ct,
    useCallback: function (t, e) {
      return (bt().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Ct,
    useEffect: Y6,
    useImperativeHandle: function (t, e, i) {
      return (
        (i = i != null ? i.concat([t]) : null),
        Dn(4194308, 4, m7.bind(null, e, t), i)
      );
    },
    useLayoutEffect: function (t, e) {
      return Dn(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return Dn(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var i = bt();
      return (
        (e = e === void 0 ? null : e), (t = t()), (i.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, i) {
      var o = bt();
      return (
        (e = i !== void 0 ? i(e) : e),
        (o.memoizedState = o.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (o.queue = t),
        (t = t.dispatch = Q8.bind(null, w2, t)),
        [o.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = bt();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: q6,
    useDebugValue: R9,
    useDeferredValue: function (t) {
      return (bt().memoizedState = t);
    },
    useTransition: function () {
      var t = q6(!1),
        e = t[0];
      return (t = $8.bind(null, t[1])), (bt().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, i) {
      var o = w2,
        a = bt();
      if (v2) {
        if (i === void 0) throw Error(R(407));
        i = i();
      } else {
        if (((i = e()), D2 === null)) throw Error(R(349));
        v1 & 30 || a7(o, e, i);
      }
      a.memoizedState = i;
      var l = { value: i, getSnapshot: e };
      return (
        (a.queue = l),
        Y6(u7.bind(null, o, l, t), [t]),
        (o.flags |= 2048),
        S3(9, l7.bind(null, o, l, i, e), void 0, null),
        i
      );
    },
    useId: function () {
      var t = bt(),
        e = D2.identifierPrefix;
      if (v2) {
        var i = le,
          o = ae;
        (i = (o & ~(1 << (32 - Dt(o) - 1))).toString(32) + i),
          (e = ":" + e + "R" + i),
          (i = x3++),
          0 < i && (e += "H" + i.toString(32)),
          (e += ":");
      } else (i = V8++), (e = ":" + e + "r" + i.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  q8 = {
    readContext: Ct,
    useCallback: v7,
    useContext: Ct,
    useEffect: I9,
    useImperativeHandle: _7,
    useInsertionEffect: d7,
    useLayoutEffect: p7,
    useMemo: g7,
    useReducer: Bi,
    useRef: f7,
    useState: function () {
      return Bi(P3);
    },
    useDebugValue: R9,
    useDeferredValue: function (t) {
      var e = Et();
      return y7(e, O2.memoizedState, t);
    },
    useTransition: function () {
      var t = Bi(P3)[0],
        e = Et().memoizedState;
      return [t, e];
    },
    useMutableSource: o7,
    useSyncExternalStore: s7,
    useId: w7,
    unstable_isNewReconciler: !1,
  },
  Y8 = {
    readContext: Ct,
    useCallback: v7,
    useContext: Ct,
    useEffect: I9,
    useImperativeHandle: _7,
    useInsertionEffect: d7,
    useLayoutEffect: p7,
    useMemo: g7,
    useReducer: Fi,
    useRef: f7,
    useState: function () {
      return Fi(P3);
    },
    useDebugValue: R9,
    useDeferredValue: function (t) {
      var e = Et();
      return O2 === null ? (e.memoizedState = t) : y7(e, O2.memoizedState, t);
    },
    useTransition: function () {
      var t = Fi(P3)[0],
        e = Et().memoizedState;
      return [t, e];
    },
    useMutableSource: o7,
    useSyncExternalStore: s7,
    useId: w7,
    unstable_isNewReconciler: !1,
  };
function y4(t, e) {
  try {
    var i = "",
      o = e;
    do (i += ku(o)), (o = o.return);
    while (o);
    var a = i;
  } catch (l) {
    a =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: t, source: e, stack: a, digest: null };
}
function ji(t, e, i) {
  return { value: t, source: null, stack: i ?? null, digest: e ?? null };
}
function kr(t, e) {
  try {
    console.error(e.value);
  } catch (i) {
    setTimeout(function () {
      throw i;
    });
  }
}
var X8 = typeof WeakMap == "function" ? WeakMap : Map;
function L7(t, e, i) {
  (i = ue(-1, i)), (i.tag = 3), (i.payload = { element: null });
  var o = e.value;
  return (
    (i.callback = function () {
      l0 || ((l0 = !0), (Ar = o)), kr(t, e);
    }),
    i
  );
}
function k7(t, e, i) {
  (i = ue(-1, i)), (i.tag = 3);
  var o = t.type.getDerivedStateFromError;
  if (typeof o == "function") {
    var a = e.value;
    (i.payload = function () {
      return o(a);
    }),
      (i.callback = function () {
        kr(t, e);
      });
  }
  var l = t.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (i.callback = function () {
        kr(t, e),
          typeof o != "function" &&
            (je === null ? (je = new Set([this])) : je.add(this));
        var h = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: h !== null ? h : "",
        });
      }),
    i
  );
}
function X6(t, e, i) {
  var o = t.pingCache;
  if (o === null) {
    o = t.pingCache = new X8();
    var a = new Set();
    o.set(e, a);
  } else (a = o.get(e)), a === void 0 && ((a = new Set()), o.set(e, a));
  a.has(i) || (a.add(i), (t = fc.bind(null, t, e, i)), e.then(t, t));
}
function J6(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function ts(t, e, i, o, a) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = a), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (i.flags |= 131072),
          (i.flags &= -52805),
          i.tag === 1 &&
            (i.alternate === null
              ? (i.tag = 17)
              : ((e = ue(-1, 1)), (e.tag = 2), Fe(i, e, 1))),
          (i.lanes |= 1)),
      t);
}
var J8 = pe.ReactCurrentOwner,
  it = !1;
function K2(t, e, i, o) {
  e.child = t === null ? i7(e, null, i, o) : v4(e, t.child, i, o);
}
function es(t, e, i, o, a) {
  i = i.render;
  var l = e.ref;
  return (
    Y1(e, a),
    (o = z9(t, e, i, o, l, a)),
    (i = N9()),
    t !== null && !it
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~a),
        de(t, e, a))
      : (v2 && i && y9(e), (e.flags |= 1), K2(t, e, o, a), e.child)
  );
}
function ns(t, e, i, o, a) {
  if (t === null) {
    var l = i.type;
    return typeof l == "function" &&
      !H9(l) &&
      l.defaultProps === void 0 &&
      i.compare === null &&
      i.defaultProps === void 0
      ? ((e.tag = 15), (e.type = l), C7(t, e, l, o, a))
      : ((t = Zn(i.type, null, o, e, e.mode, a)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((l = t.child), !(t.lanes & a))) {
    var h = l.memoizedProps;
    if (
      ((i = i.compare), (i = i !== null ? i : m3), i(h, o) && t.ref === e.ref)
    )
      return de(t, e, a);
  }
  return (
    (e.flags |= 1),
    (t = Ue(l, o)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function C7(t, e, i, o, a) {
  if (t !== null) {
    var l = t.memoizedProps;
    if (m3(l, o) && t.ref === e.ref)
      if (((it = !1), (e.pendingProps = o = l), (t.lanes & a) !== 0))
        t.flags & 131072 && (it = !0);
      else return (e.lanes = t.lanes), de(t, e, a);
  }
  return Cr(t, e, i, o, a);
}
function E7(t, e, i) {
  var o = e.pendingProps,
    a = o.children,
    l = t !== null ? t.memoizedState : null;
  if (o.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        p2(V1, lt),
        (lt |= i);
    else {
      if (!(i & 1073741824))
        return (
          (t = l !== null ? l.baseLanes | i : i),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          p2(V1, lt),
          (lt |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (o = l !== null ? l.baseLanes : i),
        p2(V1, lt),
        (lt |= o);
    }
  else
    l !== null ? ((o = l.baseLanes | i), (e.memoizedState = null)) : (o = i),
      p2(V1, lt),
      (lt |= o);
  return K2(t, e, a, i), e.child;
}
function T7(t, e) {
  var i = e.ref;
  ((t === null && i !== null) || (t !== null && t.ref !== i)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function Cr(t, e, i, o, a) {
  var l = ot(i) ? m1 : Q2.current;
  return (
    (l = m4(e, l)),
    Y1(e, a),
    (i = z9(t, e, i, o, l, a)),
    (o = N9()),
    t !== null && !it
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~a),
        de(t, e, a))
      : (v2 && o && y9(e), (e.flags |= 1), K2(t, e, i, a), e.child)
  );
}
function is(t, e, i, o, a) {
  if (ot(i)) {
    var l = !0;
    Xn(e);
  } else l = !1;
  if ((Y1(e, a), e.stateNode === null))
    Bn(t, e), e7(e, i, o), Lr(e, i, o, a), (o = !0);
  else if (t === null) {
    var h = e.stateNode,
      d = e.memoizedProps;
    h.props = d;
    var p = h.context,
      g = i.contextType;
    typeof g == "object" && g !== null
      ? (g = Ct(g))
      : ((g = ot(i) ? m1 : Q2.current), (g = m4(e, g)));
    var x = i.getDerivedStateFromProps,
      S =
        typeof x == "function" ||
        typeof h.getSnapshotBeforeUpdate == "function";
    S ||
      (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
        typeof h.componentWillReceiveProps != "function") ||
      ((d !== o || p !== g) && G6(e, h, o, g)),
      (xe = !1);
    var k = e.memoizedState;
    (h.state = k),
      i0(e, o, h, a),
      (p = e.memoizedState),
      d !== o || k !== p || rt.current || xe
        ? (typeof x == "function" && (Sr(e, i, x, o), (p = e.memoizedState)),
          (d = xe || Q6(e, i, d, o, k, p, g))
            ? (S ||
                (typeof h.UNSAFE_componentWillMount != "function" &&
                  typeof h.componentWillMount != "function") ||
                (typeof h.componentWillMount == "function" &&
                  h.componentWillMount(),
                typeof h.UNSAFE_componentWillMount == "function" &&
                  h.UNSAFE_componentWillMount()),
              typeof h.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof h.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = o),
              (e.memoizedState = p)),
          (h.props = o),
          (h.state = p),
          (h.context = g),
          (o = d))
        : (typeof h.componentDidMount == "function" && (e.flags |= 4194308),
          (o = !1));
  } else {
    (h = e.stateNode),
      Ja(t, e),
      (d = e.memoizedProps),
      (g = e.type === e.elementType ? d : Nt(e.type, d)),
      (h.props = g),
      (S = e.pendingProps),
      (k = h.context),
      (p = i.contextType),
      typeof p == "object" && p !== null
        ? (p = Ct(p))
        : ((p = ot(i) ? m1 : Q2.current), (p = m4(e, p)));
    var T = i.getDerivedStateFromProps;
    (x =
      typeof T == "function" ||
      typeof h.getSnapshotBeforeUpdate == "function") ||
      (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
        typeof h.componentWillReceiveProps != "function") ||
      ((d !== S || k !== p) && G6(e, h, o, p)),
      (xe = !1),
      (k = e.memoizedState),
      (h.state = k),
      i0(e, o, h, a);
    var z = e.memoizedState;
    d !== S || k !== z || rt.current || xe
      ? (typeof T == "function" && (Sr(e, i, T, o), (z = e.memoizedState)),
        (g = xe || Q6(e, i, g, o, k, z, p) || !1)
          ? (x ||
              (typeof h.UNSAFE_componentWillUpdate != "function" &&
                typeof h.componentWillUpdate != "function") ||
              (typeof h.componentWillUpdate == "function" &&
                h.componentWillUpdate(o, z, p),
              typeof h.UNSAFE_componentWillUpdate == "function" &&
                h.UNSAFE_componentWillUpdate(o, z, p)),
            typeof h.componentDidUpdate == "function" && (e.flags |= 4),
            typeof h.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof h.componentDidUpdate != "function" ||
              (d === t.memoizedProps && k === t.memoizedState) ||
              (e.flags |= 4),
            typeof h.getSnapshotBeforeUpdate != "function" ||
              (d === t.memoizedProps && k === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = o),
            (e.memoizedState = z)),
        (h.props = o),
        (h.state = z),
        (h.context = p),
        (o = g))
      : (typeof h.componentDidUpdate != "function" ||
          (d === t.memoizedProps && k === t.memoizedState) ||
          (e.flags |= 4),
        typeof h.getSnapshotBeforeUpdate != "function" ||
          (d === t.memoizedProps && k === t.memoizedState) ||
          (e.flags |= 1024),
        (o = !1));
  }
  return Er(t, e, i, o, l, a);
}
function Er(t, e, i, o, a, l) {
  T7(t, e);
  var h = (e.flags & 128) !== 0;
  if (!o && !h) return a && H6(e, i, !1), de(t, e, l);
  (o = e.stateNode), (J8.current = e);
  var d =
    h && typeof i.getDerivedStateFromError != "function" ? null : o.render();
  return (
    (e.flags |= 1),
    t !== null && h
      ? ((e.child = v4(e, t.child, null, l)), (e.child = v4(e, null, d, l)))
      : K2(t, e, d, l),
    (e.memoizedState = o.state),
    a && H6(e, i, !0),
    e.child
  );
}
function M7(t) {
  var e = t.stateNode;
  e.pendingContext
    ? U6(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && U6(t, e.context, !1),
    E9(t, e.containerInfo);
}
function rs(t, e, i, o, a) {
  return _4(), x9(a), (e.flags |= 256), K2(t, e, i, o), e.child;
}
var Tr = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mr(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function O7(t, e, i) {
  var o = e.pendingProps,
    a = y2.current,
    l = !1,
    h = (e.flags & 128) !== 0,
    d;
  if (
    ((d = h) ||
      (d = t !== null && t.memoizedState === null ? !1 : (a & 2) !== 0),
    d
      ? ((l = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (a |= 1),
    p2(y2, a & 1),
    t === null)
  )
    return (
      xr(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((h = o.children),
          (t = o.fallback),
          l
            ? ((o = e.mode),
              (l = e.child),
              (h = { mode: "hidden", children: h }),
              !(o & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = h))
                : (l = C0(h, o, 0, null)),
              (t = p1(t, o, i, null)),
              (l.return = e),
              (t.return = e),
              (l.sibling = t),
              (e.child = l),
              (e.child.memoizedState = Mr(i)),
              (e.memoizedState = Tr),
              t)
            : A9(e, h))
    );
  if (((a = t.memoizedState), a !== null && ((d = a.dehydrated), d !== null)))
    return tc(t, e, h, o, d, a, i);
  if (l) {
    (l = o.fallback), (h = e.mode), (a = t.child), (d = a.sibling);
    var p = { mode: "hidden", children: o.children };
    return (
      !(h & 1) && e.child !== a
        ? ((o = e.child),
          (o.childLanes = 0),
          (o.pendingProps = p),
          (e.deletions = null))
        : ((o = Ue(a, p)), (o.subtreeFlags = a.subtreeFlags & 14680064)),
      d !== null ? (l = Ue(d, l)) : ((l = p1(l, h, i, null)), (l.flags |= 2)),
      (l.return = e),
      (o.return = e),
      (o.sibling = l),
      (e.child = o),
      (o = l),
      (l = e.child),
      (h = t.child.memoizedState),
      (h =
        h === null
          ? Mr(i)
          : {
              baseLanes: h.baseLanes | i,
              cachePool: null,
              transitions: h.transitions,
            }),
      (l.memoizedState = h),
      (l.childLanes = t.childLanes & ~i),
      (e.memoizedState = Tr),
      o
    );
  }
  return (
    (l = t.child),
    (t = l.sibling),
    (o = Ue(l, { mode: "visible", children: o.children })),
    !(e.mode & 1) && (o.lanes = i),
    (o.return = e),
    (o.sibling = null),
    t !== null &&
      ((i = e.deletions),
      i === null ? ((e.deletions = [t]), (e.flags |= 16)) : i.push(t)),
    (e.child = o),
    (e.memoizedState = null),
    o
  );
}
function A9(t, e) {
  return (
    (e = C0({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function Ln(t, e, i, o) {
  return (
    o !== null && x9(o),
    v4(e, t.child, null, i),
    (t = A9(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function tc(t, e, i, o, a, l, h) {
  if (i)
    return e.flags & 256
      ? ((e.flags &= -257), (o = ji(Error(R(422)))), Ln(t, e, h, o))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((l = o.fallback),
        (a = e.mode),
        (o = C0({ mode: "visible", children: o.children }, a, 0, null)),
        (l = p1(l, a, h, null)),
        (l.flags |= 2),
        (o.return = e),
        (l.return = e),
        (o.sibling = l),
        (e.child = o),
        e.mode & 1 && v4(e, t.child, null, h),
        (e.child.memoizedState = Mr(h)),
        (e.memoizedState = Tr),
        l);
  if (!(e.mode & 1)) return Ln(t, e, h, null);
  if (a.data === "$!") {
    if (((o = a.nextSibling && a.nextSibling.dataset), o)) var d = o.dgst;
    return (o = d), (l = Error(R(419))), (o = ji(l, o, void 0)), Ln(t, e, h, o);
  }
  if (((d = (h & t.childLanes) !== 0), it || d)) {
    if (((o = D2), o !== null)) {
      switch (h & -h) {
        case 4:
          a = 2;
          break;
        case 16:
          a = 8;
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
          a = 32;
          break;
        case 536870912:
          a = 268435456;
          break;
        default:
          a = 0;
      }
      (a = a & (o.suspendedLanes | h) ? 0 : a),
        a !== 0 &&
          a !== l.retryLane &&
          ((l.retryLane = a), fe(t, a), Bt(o, t, a, -1));
    }
    return U9(), (o = ji(Error(R(421)))), Ln(t, e, h, o);
  }
  return a.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = dc.bind(null, t)),
      (a._reactRetry = e),
      null)
    : ((t = l.treeContext),
      (ut = Be(a.nextSibling)),
      (ct = e),
      (v2 = !0),
      (At = null),
      t !== null &&
        ((Pt[St++] = ae),
        (Pt[St++] = le),
        (Pt[St++] = _1),
        (ae = t.id),
        (le = t.overflow),
        (_1 = e)),
      (e = A9(e, o.children)),
      (e.flags |= 4096),
      e);
}
function os(t, e, i) {
  t.lanes |= e;
  var o = t.alternate;
  o !== null && (o.lanes |= e), Pr(t.return, e, i);
}
function Zi(t, e, i, o, a) {
  var l = t.memoizedState;
  l === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: o,
        tail: i,
        tailMode: a,
      })
    : ((l.isBackwards = e),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = o),
      (l.tail = i),
      (l.tailMode = a));
}
function z7(t, e, i) {
  var o = e.pendingProps,
    a = o.revealOrder,
    l = o.tail;
  if ((K2(t, e, o.children, i), (o = y2.current), o & 2))
    (o = (o & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && os(t, i, e);
        else if (t.tag === 19) os(t, i, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    o &= 1;
  }
  if ((p2(y2, o), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (a) {
      case "forwards":
        for (i = e.child, a = null; i !== null; )
          (t = i.alternate),
            t !== null && r0(t) === null && (a = i),
            (i = i.sibling);
        (i = a),
          i === null
            ? ((a = e.child), (e.child = null))
            : ((a = i.sibling), (i.sibling = null)),
          Zi(e, !1, a, i, l);
        break;
      case "backwards":
        for (i = null, a = e.child, e.child = null; a !== null; ) {
          if (((t = a.alternate), t !== null && r0(t) === null)) {
            e.child = a;
            break;
          }
          (t = a.sibling), (a.sibling = i), (i = a), (a = t);
        }
        Zi(e, !0, i, null, l);
        break;
      case "together":
        Zi(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Bn(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function de(t, e, i) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (g1 |= e.lanes),
    !(i & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(R(153));
  if (e.child !== null) {
    for (
      t = e.child, i = Ue(t, t.pendingProps), e.child = i, i.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (i = i.sibling = Ue(t, t.pendingProps)), (i.return = e);
    i.sibling = null;
  }
  return e.child;
}
function ec(t, e, i) {
  switch (e.tag) {
    case 3:
      M7(e), _4();
      break;
    case 5:
      r7(e);
      break;
    case 1:
      ot(e.type) && Xn(e);
      break;
    case 4:
      E9(e, e.stateNode.containerInfo);
      break;
    case 10:
      var o = e.type._context,
        a = e.memoizedProps.value;
      p2(e0, o._currentValue), (o._currentValue = a);
      break;
    case 13:
      if (((o = e.memoizedState), o !== null))
        return o.dehydrated !== null
          ? (p2(y2, y2.current & 1), (e.flags |= 128), null)
          : i & e.child.childLanes
          ? O7(t, e, i)
          : (p2(y2, y2.current & 1),
            (t = de(t, e, i)),
            t !== null ? t.sibling : null);
      p2(y2, y2.current & 1);
      break;
    case 19:
      if (((o = (i & e.childLanes) !== 0), t.flags & 128)) {
        if (o) return z7(t, e, i);
        e.flags |= 128;
      }
      if (
        ((a = e.memoizedState),
        a !== null &&
          ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
        p2(y2, y2.current),
        o)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), E7(t, e, i);
  }
  return de(t, e, i);
}
var N7, Or, I7, R7;
N7 = function (t, e) {
  for (var i = e.child; i !== null; ) {
    if (i.tag === 5 || i.tag === 6) t.appendChild(i.stateNode);
    else if (i.tag !== 4 && i.child !== null) {
      (i.child.return = i), (i = i.child);
      continue;
    }
    if (i === e) break;
    for (; i.sibling === null; ) {
      if (i.return === null || i.return === e) return;
      i = i.return;
    }
    (i.sibling.return = i.return), (i = i.sibling);
  }
};
Or = function () {};
I7 = function (t, e, i, o) {
  var a = t.memoizedProps;
  if (a !== o) {
    (t = e.stateNode), i1(Yt.current);
    var l = null;
    switch (i) {
      case "input":
        (a = Xi(t, a)), (o = Xi(t, o)), (l = []);
        break;
      case "select":
        (a = x2({}, a, { value: void 0 })),
          (o = x2({}, o, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (a = er(t, a)), (o = er(t, o)), (l = []);
        break;
      default:
        typeof a.onClick != "function" &&
          typeof o.onClick == "function" &&
          (t.onclick = qn);
    }
    ir(i, o);
    var h;
    i = null;
    for (g in a)
      if (!o.hasOwnProperty(g) && a.hasOwnProperty(g) && a[g] != null)
        if (g === "style") {
          var d = a[g];
          for (h in d) d.hasOwnProperty(h) && (i || (i = {}), (i[h] = ""));
        } else
          g !== "dangerouslySetInnerHTML" &&
            g !== "children" &&
            g !== "suppressContentEditableWarning" &&
            g !== "suppressHydrationWarning" &&
            g !== "autoFocus" &&
            (l3.hasOwnProperty(g)
              ? l || (l = [])
              : (l = l || []).push(g, null));
    for (g in o) {
      var p = o[g];
      if (
        ((d = a != null ? a[g] : void 0),
        o.hasOwnProperty(g) && p !== d && (p != null || d != null))
      )
        if (g === "style")
          if (d) {
            for (h in d)
              !d.hasOwnProperty(h) ||
                (p && p.hasOwnProperty(h)) ||
                (i || (i = {}), (i[h] = ""));
            for (h in p)
              p.hasOwnProperty(h) &&
                d[h] !== p[h] &&
                (i || (i = {}), (i[h] = p[h]));
          } else i || (l || (l = []), l.push(g, i)), (i = p);
        else
          g === "dangerouslySetInnerHTML"
            ? ((p = p ? p.__html : void 0),
              (d = d ? d.__html : void 0),
              p != null && d !== p && (l = l || []).push(g, p))
            : g === "children"
            ? (typeof p != "string" && typeof p != "number") ||
              (l = l || []).push(g, "" + p)
            : g !== "suppressContentEditableWarning" &&
              g !== "suppressHydrationWarning" &&
              (l3.hasOwnProperty(g)
                ? (p != null && g === "onScroll" && m2("scroll", t),
                  l || d === p || (l = []))
                : (l = l || []).push(g, p));
    }
    i && (l = l || []).push("style", i);
    var g = l;
    (e.updateQueue = g) && (e.flags |= 4);
  }
};
R7 = function (t, e, i, o) {
  i !== o && (e.flags |= 4);
};
function $4(t, e) {
  if (!v2)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var i = null; e !== null; )
          e.alternate !== null && (i = e), (e = e.sibling);
        i === null ? (t.tail = null) : (i.sibling = null);
        break;
      case "collapsed":
        i = t.tail;
        for (var o = null; i !== null; )
          i.alternate !== null && (o = i), (i = i.sibling);
        o === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (o.sibling = null);
    }
}
function b2(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    i = 0,
    o = 0;
  if (e)
    for (var a = t.child; a !== null; )
      (i |= a.lanes | a.childLanes),
        (o |= a.subtreeFlags & 14680064),
        (o |= a.flags & 14680064),
        (a.return = t),
        (a = a.sibling);
  else
    for (a = t.child; a !== null; )
      (i |= a.lanes | a.childLanes),
        (o |= a.subtreeFlags),
        (o |= a.flags),
        (a.return = t),
        (a = a.sibling);
  return (t.subtreeFlags |= o), (t.childLanes = i), e;
}
function nc(t, e, i) {
  var o = e.pendingProps;
  switch ((w9(e), e.tag)) {
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
      return b2(e), null;
    case 1:
      return ot(e.type) && Yn(), b2(e), null;
    case 3:
      return (
        (o = e.stateNode),
        g4(),
        _2(rt),
        _2(Q2),
        M9(),
        o.pendingContext &&
          ((o.context = o.pendingContext), (o.pendingContext = null)),
        (t === null || t.child === null) &&
          (Pn(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), At !== null && (Fr(At), (At = null)))),
        Or(t, e),
        b2(e),
        null
      );
    case 5:
      T9(e);
      var a = i1(w3.current);
      if (((i = e.type), t !== null && e.stateNode != null))
        I7(t, e, i, o, a),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!o) {
          if (e.stateNode === null) throw Error(R(166));
          return b2(e), null;
        }
        if (((t = i1(Yt.current)), Pn(e))) {
          (o = e.stateNode), (i = e.type);
          var l = e.memoizedProps;
          switch (((o[Kt] = e), (o[g3] = l), (t = (e.mode & 1) !== 0), i)) {
            case "dialog":
              m2("cancel", o), m2("close", o);
              break;
            case "iframe":
            case "object":
            case "embed":
              m2("load", o);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Y4.length; a++) m2(Y4[a], o);
              break;
            case "source":
              m2("error", o);
              break;
            case "img":
            case "image":
            case "link":
              m2("error", o), m2("load", o);
              break;
            case "details":
              m2("toggle", o);
              break;
            case "input":
              p6(o, l), m2("invalid", o);
              break;
            case "select":
              (o._wrapperState = { wasMultiple: !!l.multiple }),
                m2("invalid", o);
              break;
            case "textarea":
              _6(o, l), m2("invalid", o);
          }
          ir(i, l), (a = null);
          for (var h in l)
            if (l.hasOwnProperty(h)) {
              var d = l[h];
              h === "children"
                ? typeof d == "string"
                  ? o.textContent !== d &&
                    (l.suppressHydrationWarning !== !0 &&
                      xn(o.textContent, d, t),
                    (a = ["children", d]))
                  : typeof d == "number" &&
                    o.textContent !== "" + d &&
                    (l.suppressHydrationWarning !== !0 &&
                      xn(o.textContent, d, t),
                    (a = ["children", "" + d]))
                : l3.hasOwnProperty(h) &&
                  d != null &&
                  h === "onScroll" &&
                  m2("scroll", o);
            }
          switch (i) {
            case "input":
              dn(o), m6(o, l, !0);
              break;
            case "textarea":
              dn(o), v6(o);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (o.onclick = qn);
          }
          (o = a), (e.updateQueue = o), o !== null && (e.flags |= 4);
        } else {
          (h = a.nodeType === 9 ? a : a.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = aa(i)),
            t === "http://www.w3.org/1999/xhtml"
              ? i === "script"
                ? ((t = h.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof o.is == "string"
                ? (t = h.createElement(i, { is: o.is }))
                : ((t = h.createElement(i)),
                  i === "select" &&
                    ((h = t),
                    o.multiple
                      ? (h.multiple = !0)
                      : o.size && (h.size = o.size)))
              : (t = h.createElementNS(t, i)),
            (t[Kt] = e),
            (t[g3] = o),
            N7(t, e, !1, !1),
            (e.stateNode = t);
          t: {
            switch (((h = rr(i, o)), i)) {
              case "dialog":
                m2("cancel", t), m2("close", t), (a = o);
                break;
              case "iframe":
              case "object":
              case "embed":
                m2("load", t), (a = o);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Y4.length; a++) m2(Y4[a], t);
                a = o;
                break;
              case "source":
                m2("error", t), (a = o);
                break;
              case "img":
              case "image":
              case "link":
                m2("error", t), m2("load", t), (a = o);
                break;
              case "details":
                m2("toggle", t), (a = o);
                break;
              case "input":
                p6(t, o), (a = Xi(t, o)), m2("invalid", t);
                break;
              case "option":
                a = o;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!o.multiple }),
                  (a = x2({}, o, { value: void 0 })),
                  m2("invalid", t);
                break;
              case "textarea":
                _6(t, o), (a = er(t, o)), m2("invalid", t);
                break;
              default:
                a = o;
            }
            ir(i, a), (d = a);
            for (l in d)
              if (d.hasOwnProperty(l)) {
                var p = d[l];
                l === "style"
                  ? ca(t, p)
                  : l === "dangerouslySetInnerHTML"
                  ? ((p = p ? p.__html : void 0), p != null && la(t, p))
                  : l === "children"
                  ? typeof p == "string"
                    ? (i !== "textarea" || p !== "") && u3(t, p)
                    : typeof p == "number" && u3(t, "" + p)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (l3.hasOwnProperty(l)
                      ? p != null && l === "onScroll" && m2("scroll", t)
                      : p != null && o9(t, l, p, h));
              }
            switch (i) {
              case "input":
                dn(t), m6(t, o, !1);
                break;
              case "textarea":
                dn(t), v6(t);
                break;
              case "option":
                o.value != null && t.setAttribute("value", "" + He(o.value));
                break;
              case "select":
                (t.multiple = !!o.multiple),
                  (l = o.value),
                  l != null
                    ? Q1(t, !!o.multiple, l, !1)
                    : o.defaultValue != null &&
                      Q1(t, !!o.multiple, o.defaultValue, !0);
                break;
              default:
                typeof a.onClick == "function" && (t.onclick = qn);
            }
            switch (i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break t;
              case "img":
                o = !0;
                break t;
              default:
                o = !1;
            }
          }
          o && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return b2(e), null;
    case 6:
      if (t && e.stateNode != null) R7(t, e, t.memoizedProps, o);
      else {
        if (typeof o != "string" && e.stateNode === null) throw Error(R(166));
        if (((i = i1(w3.current)), i1(Yt.current), Pn(e))) {
          if (
            ((o = e.stateNode),
            (i = e.memoizedProps),
            (o[Kt] = e),
            (l = o.nodeValue !== i) && ((t = ct), t !== null))
          )
            switch (t.tag) {
              case 3:
                xn(o.nodeValue, i, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  xn(o.nodeValue, i, (t.mode & 1) !== 0);
            }
          l && (e.flags |= 4);
        } else
          (o = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(o)),
            (o[Kt] = e),
            (e.stateNode = o);
      }
      return b2(e), null;
    case 13:
      if (
        (_2(y2),
        (o = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (v2 && ut !== null && e.mode & 1 && !(e.flags & 128))
          Ya(), _4(), (e.flags |= 98560), (l = !1);
        else if (((l = Pn(e)), o !== null && o.dehydrated !== null)) {
          if (t === null) {
            if (!l) throw Error(R(318));
            if (
              ((l = e.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(R(317));
            l[Kt] = e;
          } else
            _4(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          b2(e), (l = !1);
        } else At !== null && (Fr(At), (At = null)), (l = !0);
        if (!l) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = i), e)
        : ((o = o !== null),
          o !== (t !== null && t.memoizedState !== null) &&
            o &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || y2.current & 1 ? z2 === 0 && (z2 = 3) : U9())),
          e.updateQueue !== null && (e.flags |= 4),
          b2(e),
          null);
    case 4:
      return (
        g4(), Or(t, e), t === null && _3(e.stateNode.containerInfo), b2(e), null
      );
    case 10:
      return L9(e.type._context), b2(e), null;
    case 17:
      return ot(e.type) && Yn(), b2(e), null;
    case 19:
      if ((_2(y2), (l = e.memoizedState), l === null)) return b2(e), null;
      if (((o = (e.flags & 128) !== 0), (h = l.rendering), h === null))
        if (o) $4(l, !1);
        else {
          if (z2 !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((h = r0(t)), h !== null)) {
                for (
                  e.flags |= 128,
                    $4(l, !1),
                    o = h.updateQueue,
                    o !== null && ((e.updateQueue = o), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    o = i,
                    i = e.child;
                  i !== null;

                )
                  (l = i),
                    (t = o),
                    (l.flags &= 14680066),
                    (h = l.alternate),
                    h === null
                      ? ((l.childLanes = 0),
                        (l.lanes = t),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = h.childLanes),
                        (l.lanes = h.lanes),
                        (l.child = h.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = h.memoizedProps),
                        (l.memoizedState = h.memoizedState),
                        (l.updateQueue = h.updateQueue),
                        (l.type = h.type),
                        (t = h.dependencies),
                        (l.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (i = i.sibling);
                return p2(y2, (y2.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          l.tail !== null &&
            L2() > w4 &&
            ((e.flags |= 128), (o = !0), $4(l, !1), (e.lanes = 4194304));
        }
      else {
        if (!o)
          if (((t = r0(h)), t !== null)) {
            if (
              ((e.flags |= 128),
              (o = !0),
              (i = t.updateQueue),
              i !== null && ((e.updateQueue = i), (e.flags |= 4)),
              $4(l, !0),
              l.tail === null && l.tailMode === "hidden" && !h.alternate && !v2)
            )
              return b2(e), null;
          } else
            2 * L2() - l.renderingStartTime > w4 &&
              i !== 1073741824 &&
              ((e.flags |= 128), (o = !0), $4(l, !1), (e.lanes = 4194304));
        l.isBackwards
          ? ((h.sibling = e.child), (e.child = h))
          : ((i = l.last),
            i !== null ? (i.sibling = h) : (e.child = h),
            (l.last = h));
      }
      return l.tail !== null
        ? ((e = l.tail),
          (l.rendering = e),
          (l.tail = e.sibling),
          (l.renderingStartTime = L2()),
          (e.sibling = null),
          (i = y2.current),
          p2(y2, o ? (i & 1) | 2 : i & 1),
          e)
        : (b2(e), null);
    case 22:
    case 23:
      return (
        Z9(),
        (o = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== o && (e.flags |= 8192),
        o && e.mode & 1
          ? lt & 1073741824 && (b2(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : b2(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, e.tag));
}
function ic(t, e) {
  switch ((w9(e), e.tag)) {
    case 1:
      return (
        ot(e.type) && Yn(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        g4(),
        _2(rt),
        _2(Q2),
        M9(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return T9(e), null;
    case 13:
      if (
        (_2(y2), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(R(340));
        _4();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return _2(y2), null;
    case 4:
      return g4(), null;
    case 10:
      return L9(e.type._context), null;
    case 22:
    case 23:
      return Z9(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var kn = !1,
  $2 = !1,
  rc = typeof WeakSet == "function" ? WeakSet : Set,
  W = null;
function b1(t, e) {
  var i = t.ref;
  if (i !== null)
    if (typeof i == "function")
      try {
        i(null);
      } catch (o) {
        P2(t, e, o);
      }
    else i.current = null;
}
function zr(t, e, i) {
  try {
    i();
  } catch (o) {
    P2(t, e, o);
  }
}
var ss = !1;
function oc(t, e) {
  if (((pr = Qn), (t = Fa()), g9(t))) {
    if ("selectionStart" in t)
      var i = { start: t.selectionStart, end: t.selectionEnd };
    else
      t: {
        i = ((i = t.ownerDocument) && i.defaultView) || window;
        var o = i.getSelection && i.getSelection();
        if (o && o.rangeCount !== 0) {
          i = o.anchorNode;
          var a = o.anchorOffset,
            l = o.focusNode;
          o = o.focusOffset;
          try {
            i.nodeType, l.nodeType;
          } catch {
            i = null;
            break t;
          }
          var h = 0,
            d = -1,
            p = -1,
            g = 0,
            x = 0,
            S = t,
            k = null;
          e: for (;;) {
            for (
              var T;
              S !== i || (a !== 0 && S.nodeType !== 3) || (d = h + a),
                S !== l || (o !== 0 && S.nodeType !== 3) || (p = h + o),
                S.nodeType === 3 && (h += S.nodeValue.length),
                (T = S.firstChild) !== null;

            )
              (k = S), (S = T);
            for (;;) {
              if (S === t) break e;
              if (
                (k === i && ++g === a && (d = h),
                k === l && ++x === o && (p = h),
                (T = S.nextSibling) !== null)
              )
                break;
              (S = k), (k = S.parentNode);
            }
            S = T;
          }
          i = d === -1 || p === -1 ? null : { start: d, end: p };
        } else i = null;
      }
    i = i || { start: 0, end: 0 };
  } else i = null;
  for (mr = { focusedElem: t, selectionRange: i }, Qn = !1, W = e; W !== null; )
    if (((e = W), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (W = t);
    else
      for (; W !== null; ) {
        e = W;
        try {
          var z = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (z !== null) {
                  var M = z.memoizedProps,
                    U = z.memoizedState,
                    v = e.stateNode,
                    _ = v.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? M : Nt(e.type, M),
                      U
                    );
                  v.__reactInternalSnapshotBeforeUpdate = _;
                }
                break;
              case 3:
                var y = e.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (O) {
          P2(e, e.return, O);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (W = t);
          break;
        }
        W = e.return;
      }
  return (z = ss), (ss = !1), z;
}
function o3(t, e, i) {
  var o = e.updateQueue;
  if (((o = o !== null ? o.lastEffect : null), o !== null)) {
    var a = (o = o.next);
    do {
      if ((a.tag & t) === t) {
        var l = a.destroy;
        (a.destroy = void 0), l !== void 0 && zr(e, i, l);
      }
      a = a.next;
    } while (a !== o);
  }
}
function L0(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var i = (e = e.next);
    do {
      if ((i.tag & t) === t) {
        var o = i.create;
        i.destroy = o();
      }
      i = i.next;
    } while (i !== e);
  }
}
function Nr(t) {
  var e = t.ref;
  if (e !== null) {
    var i = t.stateNode;
    switch (t.tag) {
      case 5:
        t = i;
        break;
      default:
        t = i;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function A7(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), A7(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[Kt], delete e[g3], delete e[gr], delete e[U8], delete e[H8])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function D7(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function as(t) {
  t: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || D7(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Ir(t, e, i) {
  var o = t.tag;
  if (o === 5 || o === 6)
    (t = t.stateNode),
      e
        ? i.nodeType === 8
          ? i.parentNode.insertBefore(t, e)
          : i.insertBefore(t, e)
        : (i.nodeType === 8
            ? ((e = i.parentNode), e.insertBefore(t, i))
            : ((e = i), e.appendChild(t)),
          (i = i._reactRootContainer),
          i != null || e.onclick !== null || (e.onclick = qn));
  else if (o !== 4 && ((t = t.child), t !== null))
    for (Ir(t, e, i), t = t.sibling; t !== null; ) Ir(t, e, i), (t = t.sibling);
}
function Rr(t, e, i) {
  var o = t.tag;
  if (o === 5 || o === 6)
    (t = t.stateNode), e ? i.insertBefore(t, e) : i.appendChild(t);
  else if (o !== 4 && ((t = t.child), t !== null))
    for (Rr(t, e, i), t = t.sibling; t !== null; ) Rr(t, e, i), (t = t.sibling);
}
var j2 = null,
  Rt = !1;
function ge(t, e, i) {
  for (i = i.child; i !== null; ) B7(t, e, i), (i = i.sibling);
}
function B7(t, e, i) {
  if (qt && typeof qt.onCommitFiberUnmount == "function")
    try {
      qt.onCommitFiberUnmount(_0, i);
    } catch {}
  switch (i.tag) {
    case 5:
      $2 || b1(i, e);
    case 6:
      var o = j2,
        a = Rt;
      (j2 = null),
        ge(t, e, i),
        (j2 = o),
        (Rt = a),
        j2 !== null &&
          (Rt
            ? ((t = j2),
              (i = i.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(i) : t.removeChild(i))
            : j2.removeChild(i.stateNode));
      break;
    case 18:
      j2 !== null &&
        (Rt
          ? ((t = j2),
            (i = i.stateNode),
            t.nodeType === 8
              ? Ii(t.parentNode, i)
              : t.nodeType === 1 && Ii(t, i),
            d3(t))
          : Ii(j2, i.stateNode));
      break;
    case 4:
      (o = j2),
        (a = Rt),
        (j2 = i.stateNode.containerInfo),
        (Rt = !0),
        ge(t, e, i),
        (j2 = o),
        (Rt = a);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !$2 &&
        ((o = i.updateQueue), o !== null && ((o = o.lastEffect), o !== null))
      ) {
        a = o = o.next;
        do {
          var l = a,
            h = l.destroy;
          (l = l.tag),
            h !== void 0 && (l & 2 || l & 4) && zr(i, e, h),
            (a = a.next);
        } while (a !== o);
      }
      ge(t, e, i);
      break;
    case 1:
      if (
        !$2 &&
        (b1(i, e),
        (o = i.stateNode),
        typeof o.componentWillUnmount == "function")
      )
        try {
          (o.props = i.memoizedProps),
            (o.state = i.memoizedState),
            o.componentWillUnmount();
        } catch (d) {
          P2(i, e, d);
        }
      ge(t, e, i);
      break;
    case 21:
      ge(t, e, i);
      break;
    case 22:
      i.mode & 1
        ? (($2 = (o = $2) || i.memoizedState !== null), ge(t, e, i), ($2 = o))
        : ge(t, e, i);
      break;
    default:
      ge(t, e, i);
  }
}
function ls(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var i = t.stateNode;
    i === null && (i = t.stateNode = new rc()),
      e.forEach(function (o) {
        var a = pc.bind(null, t, o);
        i.has(o) || (i.add(o), o.then(a, a));
      });
  }
}
function Ot(t, e) {
  var i = e.deletions;
  if (i !== null)
    for (var o = 0; o < i.length; o++) {
      var a = i[o];
      try {
        var l = t,
          h = e,
          d = h;
        t: for (; d !== null; ) {
          switch (d.tag) {
            case 5:
              (j2 = d.stateNode), (Rt = !1);
              break t;
            case 3:
              (j2 = d.stateNode.containerInfo), (Rt = !0);
              break t;
            case 4:
              (j2 = d.stateNode.containerInfo), (Rt = !0);
              break t;
          }
          d = d.return;
        }
        if (j2 === null) throw Error(R(160));
        B7(l, h, a), (j2 = null), (Rt = !1);
        var p = a.alternate;
        p !== null && (p.return = null), (a.return = null);
      } catch (g) {
        P2(a, e, g);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) F7(e, t), (e = e.sibling);
}
function F7(t, e) {
  var i = t.alternate,
    o = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ot(e, t), Wt(t), o & 4)) {
        try {
          o3(3, t, t.return), L0(3, t);
        } catch (M) {
          P2(t, t.return, M);
        }
        try {
          o3(5, t, t.return);
        } catch (M) {
          P2(t, t.return, M);
        }
      }
      break;
    case 1:
      Ot(e, t), Wt(t), o & 512 && i !== null && b1(i, i.return);
      break;
    case 5:
      if (
        (Ot(e, t),
        Wt(t),
        o & 512 && i !== null && b1(i, i.return),
        t.flags & 32)
      ) {
        var a = t.stateNode;
        try {
          u3(a, "");
        } catch (M) {
          P2(t, t.return, M);
        }
      }
      if (o & 4 && ((a = t.stateNode), a != null)) {
        var l = t.memoizedProps,
          h = i !== null ? i.memoizedProps : l,
          d = t.type,
          p = t.updateQueue;
        if (((t.updateQueue = null), p !== null))
          try {
            d === "input" && l.type === "radio" && l.name != null && oa(a, l),
              rr(d, h);
            var g = rr(d, l);
            for (h = 0; h < p.length; h += 2) {
              var x = p[h],
                S = p[h + 1];
              x === "style"
                ? ca(a, S)
                : x === "dangerouslySetInnerHTML"
                ? la(a, S)
                : x === "children"
                ? u3(a, S)
                : o9(a, x, S, g);
            }
            switch (d) {
              case "input":
                Ji(a, l);
                break;
              case "textarea":
                sa(a, l);
                break;
              case "select":
                var k = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!l.multiple;
                var T = l.value;
                T != null
                  ? Q1(a, !!l.multiple, T, !1)
                  : k !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Q1(a, !!l.multiple, l.defaultValue, !0)
                      : Q1(a, !!l.multiple, l.multiple ? [] : "", !1));
            }
            a[g3] = l;
          } catch (M) {
            P2(t, t.return, M);
          }
      }
      break;
    case 6:
      if ((Ot(e, t), Wt(t), o & 4)) {
        if (t.stateNode === null) throw Error(R(162));
        (a = t.stateNode), (l = t.memoizedProps);
        try {
          a.nodeValue = l;
        } catch (M) {
          P2(t, t.return, M);
        }
      }
      break;
    case 3:
      if (
        (Ot(e, t), Wt(t), o & 4 && i !== null && i.memoizedState.isDehydrated)
      )
        try {
          d3(e.containerInfo);
        } catch (M) {
          P2(t, t.return, M);
        }
      break;
    case 4:
      Ot(e, t), Wt(t);
      break;
    case 13:
      Ot(e, t),
        Wt(t),
        (a = t.child),
        a.flags & 8192 &&
          ((l = a.memoizedState !== null),
          (a.stateNode.isHidden = l),
          !l ||
            (a.alternate !== null && a.alternate.memoizedState !== null) ||
            (F9 = L2())),
        o & 4 && ls(t);
      break;
    case 22:
      if (
        ((x = i !== null && i.memoizedState !== null),
        t.mode & 1 ? (($2 = (g = $2) || x), Ot(e, t), ($2 = g)) : Ot(e, t),
        Wt(t),
        o & 8192)
      ) {
        if (
          ((g = t.memoizedState !== null),
          (t.stateNode.isHidden = g) && !x && t.mode & 1)
        )
          for (W = t, x = t.child; x !== null; ) {
            for (S = W = x; W !== null; ) {
              switch (((k = W), (T = k.child), k.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  o3(4, k, k.return);
                  break;
                case 1:
                  b1(k, k.return);
                  var z = k.stateNode;
                  if (typeof z.componentWillUnmount == "function") {
                    (o = k), (i = k.return);
                    try {
                      (e = o),
                        (z.props = e.memoizedProps),
                        (z.state = e.memoizedState),
                        z.componentWillUnmount();
                    } catch (M) {
                      P2(o, i, M);
                    }
                  }
                  break;
                case 5:
                  b1(k, k.return);
                  break;
                case 22:
                  if (k.memoizedState !== null) {
                    cs(S);
                    continue;
                  }
              }
              T !== null ? ((T.return = k), (W = T)) : cs(S);
            }
            x = x.sibling;
          }
        t: for (x = null, S = t; ; ) {
          if (S.tag === 5) {
            if (x === null) {
              x = S;
              try {
                (a = S.stateNode),
                  g
                    ? ((l = a.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((d = S.stateNode),
                      (p = S.memoizedProps.style),
                      (h =
                        p != null && p.hasOwnProperty("display")
                          ? p.display
                          : null),
                      (d.style.display = ua("display", h)));
              } catch (M) {
                P2(t, t.return, M);
              }
            }
          } else if (S.tag === 6) {
            if (x === null)
              try {
                S.stateNode.nodeValue = g ? "" : S.memoizedProps;
              } catch (M) {
                P2(t, t.return, M);
              }
          } else if (
            ((S.tag !== 22 && S.tag !== 23) ||
              S.memoizedState === null ||
              S === t) &&
            S.child !== null
          ) {
            (S.child.return = S), (S = S.child);
            continue;
          }
          if (S === t) break t;
          for (; S.sibling === null; ) {
            if (S.return === null || S.return === t) break t;
            x === S && (x = null), (S = S.return);
          }
          x === S && (x = null), (S.sibling.return = S.return), (S = S.sibling);
        }
      }
      break;
    case 19:
      Ot(e, t), Wt(t), o & 4 && ls(t);
      break;
    case 21:
      break;
    default:
      Ot(e, t), Wt(t);
  }
}
function Wt(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      t: {
        for (var i = t.return; i !== null; ) {
          if (D7(i)) {
            var o = i;
            break t;
          }
          i = i.return;
        }
        throw Error(R(160));
      }
      switch (o.tag) {
        case 5:
          var a = o.stateNode;
          o.flags & 32 && (u3(a, ""), (o.flags &= -33));
          var l = as(t);
          Rr(t, l, a);
          break;
        case 3:
        case 4:
          var h = o.stateNode.containerInfo,
            d = as(t);
          Ir(t, d, h);
          break;
        default:
          throw Error(R(161));
      }
    } catch (p) {
      P2(t, t.return, p);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function sc(t, e, i) {
  (W = t), j7(t);
}
function j7(t, e, i) {
  for (var o = (t.mode & 1) !== 0; W !== null; ) {
    var a = W,
      l = a.child;
    if (a.tag === 22 && o) {
      var h = a.memoizedState !== null || kn;
      if (!h) {
        var d = a.alternate,
          p = (d !== null && d.memoizedState !== null) || $2;
        d = kn;
        var g = $2;
        if (((kn = h), ($2 = p) && !g))
          for (W = a; W !== null; )
            (h = W),
              (p = h.child),
              h.tag === 22 && h.memoizedState !== null
                ? hs(a)
                : p !== null
                ? ((p.return = h), (W = p))
                : hs(a);
        for (; l !== null; ) (W = l), j7(l), (l = l.sibling);
        (W = a), (kn = d), ($2 = g);
      }
      us(t);
    } else
      a.subtreeFlags & 8772 && l !== null ? ((l.return = a), (W = l)) : us(t);
  }
}
function us(t) {
  for (; W !== null; ) {
    var e = W;
    if (e.flags & 8772) {
      var i = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              $2 || L0(5, e);
              break;
            case 1:
              var o = e.stateNode;
              if (e.flags & 4 && !$2)
                if (i === null) o.componentDidMount();
                else {
                  var a =
                    e.elementType === e.type
                      ? i.memoizedProps
                      : Nt(e.type, i.memoizedProps);
                  o.componentDidUpdate(
                    a,
                    i.memoizedState,
                    o.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = e.updateQueue;
              l !== null && $6(e, l, o);
              break;
            case 3:
              var h = e.updateQueue;
              if (h !== null) {
                if (((i = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      i = e.child.stateNode;
                      break;
                    case 1:
                      i = e.child.stateNode;
                  }
                $6(e, h, i);
              }
              break;
            case 5:
              var d = e.stateNode;
              if (i === null && e.flags & 4) {
                i = d;
                var p = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    p.autoFocus && i.focus();
                    break;
                  case "img":
                    p.src && (i.src = p.src);
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
              if (e.memoizedState === null) {
                var g = e.alternate;
                if (g !== null) {
                  var x = g.memoizedState;
                  if (x !== null) {
                    var S = x.dehydrated;
                    S !== null && d3(S);
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
              throw Error(R(163));
          }
        $2 || (e.flags & 512 && Nr(e));
      } catch (k) {
        P2(e, e.return, k);
      }
    }
    if (e === t) {
      W = null;
      break;
    }
    if (((i = e.sibling), i !== null)) {
      (i.return = e.return), (W = i);
      break;
    }
    W = e.return;
  }
}
function cs(t) {
  for (; W !== null; ) {
    var e = W;
    if (e === t) {
      W = null;
      break;
    }
    var i = e.sibling;
    if (i !== null) {
      (i.return = e.return), (W = i);
      break;
    }
    W = e.return;
  }
}
function hs(t) {
  for (; W !== null; ) {
    var e = W;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var i = e.return;
          try {
            L0(4, e);
          } catch (p) {
            P2(e, i, p);
          }
          break;
        case 1:
          var o = e.stateNode;
          if (typeof o.componentDidMount == "function") {
            var a = e.return;
            try {
              o.componentDidMount();
            } catch (p) {
              P2(e, a, p);
            }
          }
          var l = e.return;
          try {
            Nr(e);
          } catch (p) {
            P2(e, l, p);
          }
          break;
        case 5:
          var h = e.return;
          try {
            Nr(e);
          } catch (p) {
            P2(e, h, p);
          }
      }
    } catch (p) {
      P2(e, e.return, p);
    }
    if (e === t) {
      W = null;
      break;
    }
    var d = e.sibling;
    if (d !== null) {
      (d.return = e.return), (W = d);
      break;
    }
    W = e.return;
  }
}
var ac = Math.ceil,
  a0 = pe.ReactCurrentDispatcher,
  D9 = pe.ReactCurrentOwner,
  kt = pe.ReactCurrentBatchConfig,
  s2 = 0,
  D2 = null,
  E2 = null,
  U2 = 0,
  lt = 0,
  V1 = Ve(0),
  z2 = 0,
  L3 = null,
  g1 = 0,
  k0 = 0,
  B9 = 0,
  s3 = null,
  nt = null,
  F9 = 0,
  w4 = 1 / 0,
  oe = null,
  l0 = !1,
  Ar = null,
  je = null,
  Cn = !1,
  Ie = null,
  u0 = 0,
  a3 = 0,
  Dr = null,
  Fn = -1,
  jn = 0;
function q2() {
  return s2 & 6 ? L2() : Fn !== -1 ? Fn : (Fn = L2());
}
function Ze(t) {
  return t.mode & 1
    ? s2 & 2 && U2 !== 0
      ? U2 & -U2
      : b8.transition !== null
      ? (jn === 0 && (jn = Pa()), jn)
      : ((t = u2),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Ma(t.type))),
        t)
    : 1;
}
function Bt(t, e, i, o) {
  if (50 < a3) throw ((a3 = 0), (Dr = null), Error(R(185)));
  j3(t, i, o),
    (!(s2 & 2) || t !== D2) &&
      (t === D2 && (!(s2 & 2) && (k0 |= i), z2 === 4 && Se(t, U2)),
      st(t, o),
      i === 1 && s2 === 0 && !(e.mode & 1) && ((w4 = L2() + 500), x0 && $e()));
}
function st(t, e) {
  var i = t.callbackNode;
  bu(t, e);
  var o = $n(t, t === D2 ? U2 : 0);
  if (o === 0)
    i !== null && w6(i), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = o & -o), t.callbackPriority !== e)) {
    if ((i != null && w6(i), e === 1))
      t.tag === 0 ? W8(fs.bind(null, t)) : Ga(fs.bind(null, t)),
        j8(function () {
          !(s2 & 6) && $e();
        }),
        (i = null);
    else {
      switch (Sa(o)) {
        case 1:
          i = c9;
          break;
        case 4:
          i = wa;
          break;
        case 16:
          i = Vn;
          break;
        case 536870912:
          i = xa;
          break;
        default:
          i = Vn;
      }
      i = Q7(i, Z7.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = i);
  }
}
function Z7(t, e) {
  if (((Fn = -1), (jn = 0), s2 & 6)) throw Error(R(327));
  var i = t.callbackNode;
  if (X1() && t.callbackNode !== i) return null;
  var o = $n(t, t === D2 ? U2 : 0);
  if (o === 0) return null;
  if (o & 30 || o & t.expiredLanes || e) e = c0(t, o);
  else {
    e = o;
    var a = s2;
    s2 |= 2;
    var l = H7();
    (D2 !== t || U2 !== e) && ((oe = null), (w4 = L2() + 500), d1(t, e));
    do
      try {
        cc();
        break;
      } catch (d) {
        U7(t, d);
      }
    while (1);
    S9(),
      (a0.current = l),
      (s2 = a),
      E2 !== null ? (e = 0) : ((D2 = null), (U2 = 0), (e = z2));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((a = ur(t)), a !== 0 && ((o = a), (e = Br(t, a)))), e === 1)
    )
      throw ((i = L3), d1(t, 0), Se(t, o), st(t, L2()), i);
    if (e === 6) Se(t, o);
    else {
      if (
        ((a = t.current.alternate),
        !(o & 30) &&
          !lc(a) &&
          ((e = c0(t, o)),
          e === 2 && ((l = ur(t)), l !== 0 && ((o = l), (e = Br(t, l)))),
          e === 1))
      )
        throw ((i = L3), d1(t, 0), Se(t, o), st(t, L2()), i);
      switch (((t.finishedWork = a), (t.finishedLanes = o), e)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          t1(t, nt, oe);
          break;
        case 3:
          if (
            (Se(t, o), (o & 130023424) === o && ((e = F9 + 500 - L2()), 10 < e))
          ) {
            if ($n(t, 0) !== 0) break;
            if (((a = t.suspendedLanes), (a & o) !== o)) {
              q2(), (t.pingedLanes |= t.suspendedLanes & a);
              break;
            }
            t.timeoutHandle = vr(t1.bind(null, t, nt, oe), e);
            break;
          }
          t1(t, nt, oe);
          break;
        case 4:
          if ((Se(t, o), (o & 4194240) === o)) break;
          for (e = t.eventTimes, a = -1; 0 < o; ) {
            var h = 31 - Dt(o);
            (l = 1 << h), (h = e[h]), h > a && (a = h), (o &= ~l);
          }
          if (
            ((o = a),
            (o = L2() - o),
            (o =
              (120 > o
                ? 120
                : 480 > o
                ? 480
                : 1080 > o
                ? 1080
                : 1920 > o
                ? 1920
                : 3e3 > o
                ? 3e3
                : 4320 > o
                ? 4320
                : 1960 * ac(o / 1960)) - o),
            10 < o)
          ) {
            t.timeoutHandle = vr(t1.bind(null, t, nt, oe), o);
            break;
          }
          t1(t, nt, oe);
          break;
        case 5:
          t1(t, nt, oe);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return st(t, L2()), t.callbackNode === i ? Z7.bind(null, t) : null;
}
function Br(t, e) {
  var i = s3;
  return (
    t.current.memoizedState.isDehydrated && (d1(t, e).flags |= 256),
    (t = c0(t, e)),
    t !== 2 && ((e = nt), (nt = i), e !== null && Fr(e)),
    t
  );
}
function Fr(t) {
  nt === null ? (nt = t) : nt.push.apply(nt, t);
}
function lc(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var i = e.updateQueue;
      if (i !== null && ((i = i.stores), i !== null))
        for (var o = 0; o < i.length; o++) {
          var a = i[o],
            l = a.getSnapshot;
          a = a.value;
          try {
            if (!Ft(l(), a)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((i = e.child), e.subtreeFlags & 16384 && i !== null))
      (i.return = e), (e = i);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function Se(t, e) {
  for (
    e &= ~B9,
      e &= ~k0,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var i = 31 - Dt(e),
      o = 1 << i;
    (t[i] = -1), (e &= ~o);
  }
}
function fs(t) {
  if (s2 & 6) throw Error(R(327));
  X1();
  var e = $n(t, 0);
  if (!(e & 1)) return st(t, L2()), null;
  var i = c0(t, e);
  if (t.tag !== 0 && i === 2) {
    var o = ur(t);
    o !== 0 && ((e = o), (i = Br(t, o)));
  }
  if (i === 1) throw ((i = L3), d1(t, 0), Se(t, e), st(t, L2()), i);
  if (i === 6) throw Error(R(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    t1(t, nt, oe),
    st(t, L2()),
    null
  );
}
function j9(t, e) {
  var i = s2;
  s2 |= 1;
  try {
    return t(e);
  } finally {
    (s2 = i), s2 === 0 && ((w4 = L2() + 500), x0 && $e());
  }
}
function y1(t) {
  Ie !== null && Ie.tag === 0 && !(s2 & 6) && X1();
  var e = s2;
  s2 |= 1;
  var i = kt.transition,
    o = u2;
  try {
    if (((kt.transition = null), (u2 = 1), t)) return t();
  } finally {
    (u2 = o), (kt.transition = i), (s2 = e), !(s2 & 6) && $e();
  }
}
function Z9() {
  (lt = V1.current), _2(V1);
}
function d1(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var i = t.timeoutHandle;
  if ((i !== -1 && ((t.timeoutHandle = -1), F8(i)), E2 !== null))
    for (i = E2.return; i !== null; ) {
      var o = i;
      switch ((w9(o), o.tag)) {
        case 1:
          (o = o.type.childContextTypes), o != null && Yn();
          break;
        case 3:
          g4(), _2(rt), _2(Q2), M9();
          break;
        case 5:
          T9(o);
          break;
        case 4:
          g4();
          break;
        case 13:
          _2(y2);
          break;
        case 19:
          _2(y2);
          break;
        case 10:
          L9(o.type._context);
          break;
        case 22:
        case 23:
          Z9();
      }
      i = i.return;
    }
  if (
    ((D2 = t),
    (E2 = t = Ue(t.current, null)),
    (U2 = lt = e),
    (z2 = 0),
    (L3 = null),
    (B9 = k0 = g1 = 0),
    (nt = s3 = null),
    n1 !== null)
  ) {
    for (e = 0; e < n1.length; e++)
      if (((i = n1[e]), (o = i.interleaved), o !== null)) {
        i.interleaved = null;
        var a = o.next,
          l = i.pending;
        if (l !== null) {
          var h = l.next;
          (l.next = a), (o.next = h);
        }
        i.pending = o;
      }
    n1 = null;
  }
  return t;
}
function U7(t, e) {
  do {
    var i = E2;
    try {
      if ((S9(), (An.current = s0), o0)) {
        for (var o = w2.memoizedState; o !== null; ) {
          var a = o.queue;
          a !== null && (a.pending = null), (o = o.next);
        }
        o0 = !1;
      }
      if (
        ((v1 = 0),
        (A2 = O2 = w2 = null),
        (r3 = !1),
        (x3 = 0),
        (D9.current = null),
        i === null || i.return === null)
      ) {
        (z2 = 1), (L3 = e), (E2 = null);
        break;
      }
      t: {
        var l = t,
          h = i.return,
          d = i,
          p = e;
        if (
          ((e = U2),
          (d.flags |= 32768),
          p !== null && typeof p == "object" && typeof p.then == "function")
        ) {
          var g = p,
            x = d,
            S = x.tag;
          if (!(x.mode & 1) && (S === 0 || S === 11 || S === 15)) {
            var k = x.alternate;
            k
              ? ((x.updateQueue = k.updateQueue),
                (x.memoizedState = k.memoizedState),
                (x.lanes = k.lanes))
              : ((x.updateQueue = null), (x.memoizedState = null));
          }
          var T = J6(h);
          if (T !== null) {
            (T.flags &= -257),
              ts(T, h, d, l, e),
              T.mode & 1 && X6(l, g, e),
              (e = T),
              (p = g);
            var z = e.updateQueue;
            if (z === null) {
              var M = new Set();
              M.add(p), (e.updateQueue = M);
            } else z.add(p);
            break t;
          } else {
            if (!(e & 1)) {
              X6(l, g, e), U9();
              break t;
            }
            p = Error(R(426));
          }
        } else if (v2 && d.mode & 1) {
          var U = J6(h);
          if (U !== null) {
            !(U.flags & 65536) && (U.flags |= 256),
              ts(U, h, d, l, e),
              x9(y4(p, d));
            break t;
          }
        }
        (l = p = y4(p, d)),
          z2 !== 4 && (z2 = 2),
          s3 === null ? (s3 = [l]) : s3.push(l),
          (l = h);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (e &= -e), (l.lanes |= e);
              var v = L7(l, p, e);
              V6(l, v);
              break t;
            case 1:
              d = p;
              var _ = l.type,
                y = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof _.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (je === null || !je.has(y))))
              ) {
                (l.flags |= 65536), (e &= -e), (l.lanes |= e);
                var O = k7(l, d, e);
                V6(l, O);
                break t;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      b7(i);
    } catch (A) {
      (e = A), E2 === i && i !== null && (E2 = i = i.return);
      continue;
    }
    break;
  } while (1);
}
function H7() {
  var t = a0.current;
  return (a0.current = s0), t === null ? s0 : t;
}
function U9() {
  (z2 === 0 || z2 === 3 || z2 === 2) && (z2 = 4),
    D2 === null || (!(g1 & 268435455) && !(k0 & 268435455)) || Se(D2, U2);
}
function c0(t, e) {
  var i = s2;
  s2 |= 2;
  var o = H7();
  (D2 !== t || U2 !== e) && ((oe = null), d1(t, e));
  do
    try {
      uc();
      break;
    } catch (a) {
      U7(t, a);
    }
  while (1);
  if ((S9(), (s2 = i), (a0.current = o), E2 !== null)) throw Error(R(261));
  return (D2 = null), (U2 = 0), z2;
}
function uc() {
  for (; E2 !== null; ) W7(E2);
}
function cc() {
  for (; E2 !== null && !Au(); ) W7(E2);
}
function W7(t) {
  var e = $7(t.alternate, t, lt);
  (t.memoizedProps = t.pendingProps),
    e === null ? b7(t) : (E2 = e),
    (D9.current = null);
}
function b7(t) {
  var e = t;
  do {
    var i = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((i = ic(i, e)), i !== null)) {
        (i.flags &= 32767), (E2 = i);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (z2 = 6), (E2 = null);
        return;
      }
    } else if (((i = nc(i, e, lt)), i !== null)) {
      E2 = i;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      E2 = e;
      return;
    }
    E2 = e = t;
  } while (e !== null);
  z2 === 0 && (z2 = 5);
}
function t1(t, e, i) {
  var o = u2,
    a = kt.transition;
  try {
    (kt.transition = null), (u2 = 1), hc(t, e, i, o);
  } finally {
    (kt.transition = a), (u2 = o);
  }
  return null;
}
function hc(t, e, i, o) {
  do X1();
  while (Ie !== null);
  if (s2 & 6) throw Error(R(327));
  i = t.finishedWork;
  var a = t.finishedLanes;
  if (i === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), i === t.current))
    throw Error(R(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var l = i.lanes | i.childLanes;
  if (
    (Vu(t, l),
    t === D2 && ((E2 = D2 = null), (U2 = 0)),
    (!(i.subtreeFlags & 2064) && !(i.flags & 2064)) ||
      Cn ||
      ((Cn = !0),
      Q7(Vn, function () {
        return X1(), null;
      })),
    (l = (i.flags & 15990) !== 0),
    i.subtreeFlags & 15990 || l)
  ) {
    (l = kt.transition), (kt.transition = null);
    var h = u2;
    u2 = 1;
    var d = s2;
    (s2 |= 4),
      (D9.current = null),
      oc(t, i),
      F7(i, t),
      z8(mr),
      (Qn = !!pr),
      (mr = pr = null),
      (t.current = i),
      sc(i),
      Du(),
      (s2 = d),
      (u2 = h),
      (kt.transition = l);
  } else t.current = i;
  if (
    (Cn && ((Cn = !1), (Ie = t), (u0 = a)),
    (l = t.pendingLanes),
    l === 0 && (je = null),
    ju(i.stateNode),
    st(t, L2()),
    e !== null)
  )
    for (o = t.onRecoverableError, i = 0; i < e.length; i++)
      (a = e[i]), o(a.value, { componentStack: a.stack, digest: a.digest });
  if (l0) throw ((l0 = !1), (t = Ar), (Ar = null), t);
  return (
    u0 & 1 && t.tag !== 0 && X1(),
    (l = t.pendingLanes),
    l & 1 ? (t === Dr ? a3++ : ((a3 = 0), (Dr = t))) : (a3 = 0),
    $e(),
    null
  );
}
function X1() {
  if (Ie !== null) {
    var t = Sa(u0),
      e = kt.transition,
      i = u2;
    try {
      if (((kt.transition = null), (u2 = 16 > t ? 16 : t), Ie === null))
        var o = !1;
      else {
        if (((t = Ie), (Ie = null), (u0 = 0), s2 & 6)) throw Error(R(331));
        var a = s2;
        for (s2 |= 4, W = t.current; W !== null; ) {
          var l = W,
            h = l.child;
          if (W.flags & 16) {
            var d = l.deletions;
            if (d !== null) {
              for (var p = 0; p < d.length; p++) {
                var g = d[p];
                for (W = g; W !== null; ) {
                  var x = W;
                  switch (x.tag) {
                    case 0:
                    case 11:
                    case 15:
                      o3(8, x, l);
                  }
                  var S = x.child;
                  if (S !== null) (S.return = x), (W = S);
                  else
                    for (; W !== null; ) {
                      x = W;
                      var k = x.sibling,
                        T = x.return;
                      if ((A7(x), x === g)) {
                        W = null;
                        break;
                      }
                      if (k !== null) {
                        (k.return = T), (W = k);
                        break;
                      }
                      W = T;
                    }
                }
              }
              var z = l.alternate;
              if (z !== null) {
                var M = z.child;
                if (M !== null) {
                  z.child = null;
                  do {
                    var U = M.sibling;
                    (M.sibling = null), (M = U);
                  } while (M !== null);
                }
              }
              W = l;
            }
          }
          if (l.subtreeFlags & 2064 && h !== null) (h.return = l), (W = h);
          else
            t: for (; W !== null; ) {
              if (((l = W), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    o3(9, l, l.return);
                }
              var v = l.sibling;
              if (v !== null) {
                (v.return = l.return), (W = v);
                break t;
              }
              W = l.return;
            }
        }
        var _ = t.current;
        for (W = _; W !== null; ) {
          h = W;
          var y = h.child;
          if (h.subtreeFlags & 2064 && y !== null) (y.return = h), (W = y);
          else
            t: for (h = _; W !== null; ) {
              if (((d = W), d.flags & 2048))
                try {
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      L0(9, d);
                  }
                } catch (A) {
                  P2(d, d.return, A);
                }
              if (d === h) {
                W = null;
                break t;
              }
              var O = d.sibling;
              if (O !== null) {
                (O.return = d.return), (W = O);
                break t;
              }
              W = d.return;
            }
        }
        if (
          ((s2 = a), $e(), qt && typeof qt.onPostCommitFiberRoot == "function")
        )
          try {
            qt.onPostCommitFiberRoot(_0, t);
          } catch {}
        o = !0;
      }
      return o;
    } finally {
      (u2 = i), (kt.transition = e);
    }
  }
  return !1;
}
function ds(t, e, i) {
  (e = y4(i, e)),
    (e = L7(t, e, 1)),
    (t = Fe(t, e, 1)),
    (e = q2()),
    t !== null && (j3(t, 1, e), st(t, e));
}
function P2(t, e, i) {
  if (t.tag === 3) ds(t, t, i);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        ds(e, t, i);
        break;
      } else if (e.tag === 1) {
        var o = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof o.componentDidCatch == "function" &&
            (je === null || !je.has(o)))
        ) {
          (t = y4(i, t)),
            (t = k7(e, t, 1)),
            (e = Fe(e, t, 1)),
            (t = q2()),
            e !== null && (j3(e, 1, t), st(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function fc(t, e, i) {
  var o = t.pingCache;
  o !== null && o.delete(e),
    (e = q2()),
    (t.pingedLanes |= t.suspendedLanes & i),
    D2 === t &&
      (U2 & i) === i &&
      (z2 === 4 || (z2 === 3 && (U2 & 130023424) === U2 && 500 > L2() - F9)
        ? d1(t, 0)
        : (B9 |= i)),
    st(t, e);
}
function V7(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = _n), (_n <<= 1), !(_n & 130023424) && (_n = 4194304))
      : (e = 1));
  var i = q2();
  (t = fe(t, e)), t !== null && (j3(t, e, i), st(t, i));
}
function dc(t) {
  var e = t.memoizedState,
    i = 0;
  e !== null && (i = e.retryLane), V7(t, i);
}
function pc(t, e) {
  var i = 0;
  switch (t.tag) {
    case 13:
      var o = t.stateNode,
        a = t.memoizedState;
      a !== null && (i = a.retryLane);
      break;
    case 19:
      o = t.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  o !== null && o.delete(e), V7(t, i);
}
var $7;
$7 = function (t, e, i) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || rt.current) it = !0;
    else {
      if (!(t.lanes & i) && !(e.flags & 128)) return (it = !1), ec(t, e, i);
      it = !!(t.flags & 131072);
    }
  else (it = !1), v2 && e.flags & 1048576 && Ka(e, t0, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var o = e.type;
      Bn(t, e), (t = e.pendingProps);
      var a = m4(e, Q2.current);
      Y1(e, i), (a = z9(null, e, o, t, a, i));
      var l = N9();
      return (
        (e.flags |= 1),
        typeof a == "object" &&
        a !== null &&
        typeof a.render == "function" &&
        a.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            ot(o) ? ((l = !0), Xn(e)) : (l = !1),
            (e.memoizedState =
              a.state !== null && a.state !== void 0 ? a.state : null),
            C9(e),
            (a.updater = P0),
            (e.stateNode = a),
            (a._reactInternals = e),
            Lr(e, o, t, i),
            (e = Er(null, e, o, !0, l, i)))
          : ((e.tag = 0), v2 && l && y9(e), K2(null, e, a, i), (e = e.child)),
        e
      );
    case 16:
      o = e.elementType;
      t: {
        switch (
          (Bn(t, e),
          (t = e.pendingProps),
          (a = o._init),
          (o = a(o._payload)),
          (e.type = o),
          (a = e.tag = _c(o)),
          (t = Nt(o, t)),
          a)
        ) {
          case 0:
            e = Cr(null, e, o, t, i);
            break t;
          case 1:
            e = is(null, e, o, t, i);
            break t;
          case 11:
            e = es(null, e, o, t, i);
            break t;
          case 14:
            e = ns(null, e, o, Nt(o.type, t), i);
            break t;
        }
        throw Error(R(306, o, ""));
      }
      return e;
    case 0:
      return (
        (o = e.type),
        (a = e.pendingProps),
        (a = e.elementType === o ? a : Nt(o, a)),
        Cr(t, e, o, a, i)
      );
    case 1:
      return (
        (o = e.type),
        (a = e.pendingProps),
        (a = e.elementType === o ? a : Nt(o, a)),
        is(t, e, o, a, i)
      );
    case 3:
      t: {
        if ((M7(e), t === null)) throw Error(R(387));
        (o = e.pendingProps),
          (l = e.memoizedState),
          (a = l.element),
          Ja(t, e),
          i0(e, o, null, i);
        var h = e.memoizedState;
        if (((o = h.element), l.isDehydrated))
          if (
            ((l = {
              element: o,
              isDehydrated: !1,
              cache: h.cache,
              pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
              transitions: h.transitions,
            }),
            (e.updateQueue.baseState = l),
            (e.memoizedState = l),
            e.flags & 256)
          ) {
            (a = y4(Error(R(423)), e)), (e = rs(t, e, o, i, a));
            break t;
          } else if (o !== a) {
            (a = y4(Error(R(424)), e)), (e = rs(t, e, o, i, a));
            break t;
          } else
            for (
              ut = Be(e.stateNode.containerInfo.firstChild),
                ct = e,
                v2 = !0,
                At = null,
                i = i7(e, null, o, i),
                e.child = i;
              i;

            )
              (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
        else {
          if ((_4(), o === a)) {
            e = de(t, e, i);
            break t;
          }
          K2(t, e, o, i);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        r7(e),
        t === null && xr(e),
        (o = e.type),
        (a = e.pendingProps),
        (l = t !== null ? t.memoizedProps : null),
        (h = a.children),
        _r(o, a) ? (h = null) : l !== null && _r(o, l) && (e.flags |= 32),
        T7(t, e),
        K2(t, e, h, i),
        e.child
      );
    case 6:
      return t === null && xr(e), null;
    case 13:
      return O7(t, e, i);
    case 4:
      return (
        E9(e, e.stateNode.containerInfo),
        (o = e.pendingProps),
        t === null ? (e.child = v4(e, null, o, i)) : K2(t, e, o, i),
        e.child
      );
    case 11:
      return (
        (o = e.type),
        (a = e.pendingProps),
        (a = e.elementType === o ? a : Nt(o, a)),
        es(t, e, o, a, i)
      );
    case 7:
      return K2(t, e, e.pendingProps, i), e.child;
    case 8:
      return K2(t, e, e.pendingProps.children, i), e.child;
    case 12:
      return K2(t, e, e.pendingProps.children, i), e.child;
    case 10:
      t: {
        if (
          ((o = e.type._context),
          (a = e.pendingProps),
          (l = e.memoizedProps),
          (h = a.value),
          p2(e0, o._currentValue),
          (o._currentValue = h),
          l !== null)
        )
          if (Ft(l.value, h)) {
            if (l.children === a.children && !rt.current) {
              e = de(t, e, i);
              break t;
            }
          } else
            for (l = e.child, l !== null && (l.return = e); l !== null; ) {
              var d = l.dependencies;
              if (d !== null) {
                h = l.child;
                for (var p = d.firstContext; p !== null; ) {
                  if (p.context === o) {
                    if (l.tag === 1) {
                      (p = ue(-1, i & -i)), (p.tag = 2);
                      var g = l.updateQueue;
                      if (g !== null) {
                        g = g.shared;
                        var x = g.pending;
                        x === null
                          ? (p.next = p)
                          : ((p.next = x.next), (x.next = p)),
                          (g.pending = p);
                      }
                    }
                    (l.lanes |= i),
                      (p = l.alternate),
                      p !== null && (p.lanes |= i),
                      Pr(l.return, i, e),
                      (d.lanes |= i);
                    break;
                  }
                  p = p.next;
                }
              } else if (l.tag === 10) h = l.type === e.type ? null : l.child;
              else if (l.tag === 18) {
                if (((h = l.return), h === null)) throw Error(R(341));
                (h.lanes |= i),
                  (d = h.alternate),
                  d !== null && (d.lanes |= i),
                  Pr(h, i, e),
                  (h = l.sibling);
              } else h = l.child;
              if (h !== null) h.return = l;
              else
                for (h = l; h !== null; ) {
                  if (h === e) {
                    h = null;
                    break;
                  }
                  if (((l = h.sibling), l !== null)) {
                    (l.return = h.return), (h = l);
                    break;
                  }
                  h = h.return;
                }
              l = h;
            }
        K2(t, e, a.children, i), (e = e.child);
      }
      return e;
    case 9:
      return (
        (a = e.type),
        (o = e.pendingProps.children),
        Y1(e, i),
        (a = Ct(a)),
        (o = o(a)),
        (e.flags |= 1),
        K2(t, e, o, i),
        e.child
      );
    case 14:
      return (
        (o = e.type),
        (a = Nt(o, e.pendingProps)),
        (a = Nt(o.type, a)),
        ns(t, e, o, a, i)
      );
    case 15:
      return C7(t, e, e.type, e.pendingProps, i);
    case 17:
      return (
        (o = e.type),
        (a = e.pendingProps),
        (a = e.elementType === o ? a : Nt(o, a)),
        Bn(t, e),
        (e.tag = 1),
        ot(o) ? ((t = !0), Xn(e)) : (t = !1),
        Y1(e, i),
        e7(e, o, a),
        Lr(e, o, a, i),
        Er(null, e, o, !0, t, i)
      );
    case 19:
      return z7(t, e, i);
    case 22:
      return E7(t, e, i);
  }
  throw Error(R(156, e.tag));
};
function Q7(t, e) {
  return ya(t, e);
}
function mc(t, e, i, o) {
  (this.tag = t),
    (this.key = i),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = o),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Lt(t, e, i, o) {
  return new mc(t, e, i, o);
}
function H9(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function _c(t) {
  if (typeof t == "function") return H9(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === a9)) return 11;
    if (t === l9) return 14;
  }
  return 2;
}
function Ue(t, e) {
  var i = t.alternate;
  return (
    i === null
      ? ((i = Lt(t.tag, e, t.key, t.mode)),
        (i.elementType = t.elementType),
        (i.type = t.type),
        (i.stateNode = t.stateNode),
        (i.alternate = t),
        (t.alternate = i))
      : ((i.pendingProps = e),
        (i.type = t.type),
        (i.flags = 0),
        (i.subtreeFlags = 0),
        (i.deletions = null)),
    (i.flags = t.flags & 14680064),
    (i.childLanes = t.childLanes),
    (i.lanes = t.lanes),
    (i.child = t.child),
    (i.memoizedProps = t.memoizedProps),
    (i.memoizedState = t.memoizedState),
    (i.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (i.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (i.sibling = t.sibling),
    (i.index = t.index),
    (i.ref = t.ref),
    i
  );
}
function Zn(t, e, i, o, a, l) {
  var h = 2;
  if (((o = t), typeof t == "function")) H9(t) && (h = 1);
  else if (typeof t == "string") h = 5;
  else
    t: switch (t) {
      case A1:
        return p1(i.children, a, l, e);
      case s9:
        (h = 8), (a |= 8);
        break;
      case Gi:
        return (
          (t = Lt(12, i, e, a | 2)), (t.elementType = Gi), (t.lanes = l), t
        );
      case Ki:
        return (t = Lt(13, i, e, a)), (t.elementType = Ki), (t.lanes = l), t;
      case qi:
        return (t = Lt(19, i, e, a)), (t.elementType = qi), (t.lanes = l), t;
      case na:
        return C0(i, a, l, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case ta:
              h = 10;
              break t;
            case ea:
              h = 9;
              break t;
            case a9:
              h = 11;
              break t;
            case l9:
              h = 14;
              break t;
            case we:
              (h = 16), (o = null);
              break t;
          }
        throw Error(R(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = Lt(h, i, e, a)), (e.elementType = t), (e.type = o), (e.lanes = l), e
  );
}
function p1(t, e, i, o) {
  return (t = Lt(7, t, o, e)), (t.lanes = i), t;
}
function C0(t, e, i, o) {
  return (
    (t = Lt(22, t, o, e)),
    (t.elementType = na),
    (t.lanes = i),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function Ui(t, e, i) {
  return (t = Lt(6, t, null, e)), (t.lanes = i), t;
}
function Hi(t, e, i) {
  return (
    (e = Lt(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = i),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function vc(t, e, i, o, a) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Pi(0)),
    (this.expirationTimes = Pi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Pi(0)),
    (this.identifierPrefix = o),
    (this.onRecoverableError = a),
    (this.mutableSourceEagerHydrationData = null);
}
function W9(t, e, i, o, a, l, h, d, p) {
  return (
    (t = new vc(t, e, i, d, p)),
    e === 1 ? ((e = 1), l === !0 && (e |= 8)) : (e = 0),
    (l = Lt(3, null, null, e)),
    (t.current = l),
    (l.stateNode = t),
    (l.memoizedState = {
      element: o,
      isDehydrated: i,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    C9(l),
    t
  );
}
function gc(t, e, i) {
  var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: R1,
    key: o == null ? null : "" + o,
    children: t,
    containerInfo: e,
    implementation: i,
  };
}
function G7(t) {
  if (!t) return We;
  t = t._reactInternals;
  t: {
    if (x1(t) !== t || t.tag !== 1) throw Error(R(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break t;
        case 1:
          if (ot(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break t;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(R(171));
  }
  if (t.tag === 1) {
    var i = t.type;
    if (ot(i)) return Qa(t, i, e);
  }
  return e;
}
function K7(t, e, i, o, a, l, h, d, p) {
  return (
    (t = W9(i, o, !0, t, a, l, h, d, p)),
    (t.context = G7(null)),
    (i = t.current),
    (o = q2()),
    (a = Ze(i)),
    (l = ue(o, a)),
    (l.callback = e ?? null),
    Fe(i, l, a),
    (t.current.lanes = a),
    j3(t, a, o),
    st(t, o),
    t
  );
}
function E0(t, e, i, o) {
  var a = e.current,
    l = q2(),
    h = Ze(a);
  return (
    (i = G7(i)),
    e.context === null ? (e.context = i) : (e.pendingContext = i),
    (e = ue(l, h)),
    (e.payload = { element: t }),
    (o = o === void 0 ? null : o),
    o !== null && (e.callback = o),
    (t = Fe(a, e, h)),
    t !== null && (Bt(t, a, h, l), Rn(t, a, h)),
    h
  );
}
function h0(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function ps(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var i = t.retryLane;
    t.retryLane = i !== 0 && i < e ? i : e;
  }
}
function b9(t, e) {
  ps(t, e), (t = t.alternate) && ps(t, e);
}
function yc() {
  return null;
}
var q7 =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function V9(t) {
  this._internalRoot = t;
}
T0.prototype.render = V9.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(R(409));
  E0(t, e, null, null);
};
T0.prototype.unmount = V9.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    y1(function () {
      E0(null, t, null, null);
    }),
      (e[he] = null);
  }
};
function T0(t) {
  this._internalRoot = t;
}
T0.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = Ca();
    t = { blockedOn: null, target: t, priority: e };
    for (var i = 0; i < Pe.length && e !== 0 && e < Pe[i].priority; i++);
    Pe.splice(i, 0, t), i === 0 && Ta(t);
  }
};
function $9(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function M0(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function ms() {}
function wc(t, e, i, o, a) {
  if (a) {
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var g = h0(h);
        l.call(g);
      };
    }
    var h = K7(e, o, t, 0, null, !1, !1, "", ms);
    return (
      (t._reactRootContainer = h),
      (t[he] = h.current),
      _3(t.nodeType === 8 ? t.parentNode : t),
      y1(),
      h
    );
  }
  for (; (a = t.lastChild); ) t.removeChild(a);
  if (typeof o == "function") {
    var d = o;
    o = function () {
      var g = h0(p);
      d.call(g);
    };
  }
  var p = W9(t, 0, !1, null, null, !1, !1, "", ms);
  return (
    (t._reactRootContainer = p),
    (t[he] = p.current),
    _3(t.nodeType === 8 ? t.parentNode : t),
    y1(function () {
      E0(e, p, i, o);
    }),
    p
  );
}
function O0(t, e, i, o, a) {
  var l = i._reactRootContainer;
  if (l) {
    var h = l;
    if (typeof a == "function") {
      var d = a;
      a = function () {
        var p = h0(h);
        d.call(p);
      };
    }
    E0(e, h, t, a);
  } else h = wc(i, e, t, a, o);
  return h0(h);
}
La = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var i = q4(e.pendingLanes);
        i !== 0 &&
          (h9(e, i | 1), st(e, L2()), !(s2 & 6) && ((w4 = L2() + 500), $e()));
      }
      break;
    case 13:
      y1(function () {
        var o = fe(t, 1);
        if (o !== null) {
          var a = q2();
          Bt(o, t, 1, a);
        }
      }),
        b9(t, 1);
  }
};
f9 = function (t) {
  if (t.tag === 13) {
    var e = fe(t, 134217728);
    if (e !== null) {
      var i = q2();
      Bt(e, t, 134217728, i);
    }
    b9(t, 134217728);
  }
};
ka = function (t) {
  if (t.tag === 13) {
    var e = Ze(t),
      i = fe(t, e);
    if (i !== null) {
      var o = q2();
      Bt(i, t, e, o);
    }
    b9(t, e);
  }
};
Ca = function () {
  return u2;
};
Ea = function (t, e) {
  var i = u2;
  try {
    return (u2 = t), e();
  } finally {
    u2 = i;
  }
};
sr = function (t, e, i) {
  switch (e) {
    case "input":
      if ((Ji(t, i), (e = i.name), i.type === "radio" && e != null)) {
        for (i = t; i.parentNode; ) i = i.parentNode;
        for (
          i = i.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < i.length;
          e++
        ) {
          var o = i[e];
          if (o !== t && o.form === t.form) {
            var a = w0(o);
            if (!a) throw Error(R(90));
            ra(o), Ji(o, a);
          }
        }
      }
      break;
    case "textarea":
      sa(t, i);
      break;
    case "select":
      (e = i.value), e != null && Q1(t, !!i.multiple, e, !1);
  }
};
da = j9;
pa = y1;
var xc = { usingClientEntryPoint: !1, Events: [U3, j1, w0, ha, fa, j9] },
  Q4 = {
    findFiberByHostInstance: e1,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Pc = {
    bundleType: Q4.bundleType,
    version: Q4.version,
    rendererPackageName: Q4.rendererPackageName,
    rendererConfig: Q4.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = va(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: Q4.findFiberByHostInstance || yc,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var En = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!En.isDisabled && En.supportsFiber)
    try {
      (_0 = En.inject(Pc)), (qt = En);
    } catch {}
}
ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xc;
ft.createPortal = function (t, e) {
  var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$9(e)) throw Error(R(200));
  return gc(t, e, null, i);
};
ft.createRoot = function (t, e) {
  if (!$9(t)) throw Error(R(299));
  var i = !1,
    o = "",
    a = q7;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (i = !0),
      e.identifierPrefix !== void 0 && (o = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (a = e.onRecoverableError)),
    (e = W9(t, 1, !1, null, null, i, !1, o, a)),
    (t[he] = e.current),
    _3(t.nodeType === 8 ? t.parentNode : t),
    new V9(e)
  );
};
ft.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(R(188))
      : ((t = Object.keys(t).join(",")), Error(R(268, t)));
  return (t = va(e)), (t = t === null ? null : t.stateNode), t;
};
ft.flushSync = function (t) {
  return y1(t);
};
ft.hydrate = function (t, e, i) {
  if (!M0(e)) throw Error(R(200));
  return O0(null, t, e, !0, i);
};
ft.hydrateRoot = function (t, e, i) {
  if (!$9(t)) throw Error(R(405));
  var o = (i != null && i.hydratedSources) || null,
    a = !1,
    l = "",
    h = q7;
  if (
    (i != null &&
      (i.unstable_strictMode === !0 && (a = !0),
      i.identifierPrefix !== void 0 && (l = i.identifierPrefix),
      i.onRecoverableError !== void 0 && (h = i.onRecoverableError)),
    (e = K7(e, null, t, 1, i ?? null, a, !1, l, h)),
    (t[he] = e.current),
    _3(t),
    o)
  )
    for (t = 0; t < o.length; t++)
      (i = o[t]),
        (a = i._getVersion),
        (a = a(i._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [i, a])
          : e.mutableSourceEagerHydrationData.push(i, a);
  return new T0(e);
};
ft.render = function (t, e, i) {
  if (!M0(e)) throw Error(R(200));
  return O0(null, t, e, !1, i);
};
ft.unmountComponentAtNode = function (t) {
  if (!M0(t)) throw Error(R(40));
  return t._reactRootContainer
    ? (y1(function () {
        O0(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[he] = null);
        });
      }),
      !0)
    : !1;
};
ft.unstable_batchedUpdates = j9;
ft.unstable_renderSubtreeIntoContainer = function (t, e, i, o) {
  if (!M0(i)) throw Error(R(200));
  if (t == null || t._reactInternals === void 0) throw Error(R(38));
  return O0(t, e, i, !1, o);
};
ft.version = "18.2.0-next-9e3b772b8-20220608";
function Y7() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y7);
    } catch (t) {
      console.error(t);
    }
}
Y7(), (Ks.exports = ft);
var X7 = Ks.exports,
  _s = X7;
($i.createRoot = _s.createRoot), ($i.hydrateRoot = _s.hydrateRoot);
var W3 = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(t) {
      return (
        this.listeners.add(t),
        this.onSubscribe(),
        () => {
          this.listeners.delete(t), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  x4 = typeof window > "u" || "Deno" in window;
function xt() {}
function Sc(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function jr(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function J7(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function vs(t, e) {
  const {
    type: i = "all",
    exact: o,
    fetchStatus: a,
    predicate: l,
    queryKey: h,
    stale: d,
  } = t;
  if (h) {
    if (o) {
      if (e.queryHash !== Q9(h, e.options)) return !1;
    } else if (!C3(e.queryKey, h)) return !1;
  }
  if (i !== "all") {
    const p = e.isActive();
    if ((i === "active" && !p) || (i === "inactive" && p)) return !1;
  }
  return !(
    (typeof d == "boolean" && e.isStale() !== d) ||
    (typeof a < "u" && a !== e.state.fetchStatus) ||
    (l && !l(e))
  );
}
function gs(t, e) {
  const { exact: i, status: o, predicate: a, mutationKey: l } = t;
  if (l) {
    if (!e.options.mutationKey) return !1;
    if (i) {
      if (k3(e.options.mutationKey) !== k3(l)) return !1;
    } else if (!C3(e.options.mutationKey, l)) return !1;
  }
  return !((o && e.state.status !== o) || (a && !a(e)));
}
function Q9(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || k3)(t);
}
function k3(t) {
  return JSON.stringify(t, (e, i) =>
    Ur(i)
      ? Object.keys(i)
          .sort()
          .reduce((o, a) => ((o[a] = i[a]), o), {})
      : i
  );
}
function C3(t, e) {
  return t === e
    ? !0
    : typeof t != typeof e
    ? !1
    : t && e && typeof t == "object" && typeof e == "object"
    ? !Object.keys(e).some((i) => !C3(t[i], e[i]))
    : !1;
}
function t5(t, e) {
  if (t === e) return t;
  const i = ys(t) && ys(e);
  if (i || (Ur(t) && Ur(e))) {
    const o = i ? t.length : Object.keys(t).length,
      a = i ? e : Object.keys(e),
      l = a.length,
      h = i ? [] : {};
    let d = 0;
    for (let p = 0; p < l; p++) {
      const g = i ? p : a[p];
      (h[g] = t5(t[g], e[g])), h[g] === t[g] && d++;
    }
    return o === l && d === o ? t : h;
  }
  return e;
}
function Zr(t, e) {
  if ((t && !e) || (e && !t)) return !1;
  for (const i in t) if (t[i] !== e[i]) return !1;
  return !0;
}
function ys(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Ur(t) {
  if (!ws(t)) return !1;
  const e = t.constructor;
  if (typeof e > "u") return !0;
  const i = e.prototype;
  return !(!ws(i) || !i.hasOwnProperty("isPrototypeOf"));
}
function ws(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function e5(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function xs(t) {
  e5(0).then(t);
}
function Hr(t, e, i) {
  return typeof i.structuralSharing == "function"
    ? i.structuralSharing(t, e)
    : i.structuralSharing !== !1
    ? t5(t, e)
    : e;
}
function Lc(t, e, i = 0) {
  const o = [...t, e];
  return i && o.length > i ? o.slice(1) : o;
}
function kc(t, e, i = 0) {
  const o = [e, ...t];
  return i && o.length > i ? o.slice(0, -1) : o;
}
var r1,
  ke,
  J1,
  Ms,
  Cc =
    ((Ms = class extends W3 {
      constructor() {
        super();
        b(this, r1, void 0);
        b(this, ke, void 0);
        b(this, J1, void 0);
        Z(this, J1, (e) => {
          if (!x4 && window.addEventListener) {
            const i = () => e();
            return (
              window.addEventListener("visibilitychange", i, !1),
              () => {
                window.removeEventListener("visibilitychange", i);
              }
            );
          }
        });
      }
      onSubscribe() {
        w(this, ke) || this.setEventListener(w(this, J1));
      }
      onUnsubscribe() {
        var e;
        this.hasListeners() ||
          ((e = w(this, ke)) == null || e.call(this), Z(this, ke, void 0));
      }
      setEventListener(e) {
        var i;
        Z(this, J1, e),
          (i = w(this, ke)) == null || i.call(this),
          Z(
            this,
            ke,
            e((o) => {
              typeof o == "boolean" ? this.setFocused(o) : this.onFocus();
            })
          );
      }
      setFocused(e) {
        w(this, r1) !== e && (Z(this, r1, e), this.onFocus());
      }
      onFocus() {
        this.listeners.forEach((e) => {
          e();
        });
      }
      isFocused() {
        var e;
        return typeof w(this, r1) == "boolean"
          ? w(this, r1)
          : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !==
              "hidden";
      }
    }),
    (r1 = new WeakMap()),
    (ke = new WeakMap()),
    (J1 = new WeakMap()),
    Ms),
  f0 = new Cc(),
  t4,
  Ce,
  e4,
  Os,
  Ec =
    ((Os = class extends W3 {
      constructor() {
        super();
        b(this, t4, !0);
        b(this, Ce, void 0);
        b(this, e4, void 0);
        Z(this, e4, (e) => {
          if (!x4 && window.addEventListener) {
            const i = () => e(!0),
              o = () => e(!1);
            return (
              window.addEventListener("online", i, !1),
              window.addEventListener("offline", o, !1),
              () => {
                window.removeEventListener("online", i),
                  window.removeEventListener("offline", o);
              }
            );
          }
        });
      }
      onSubscribe() {
        w(this, Ce) || this.setEventListener(w(this, e4));
      }
      onUnsubscribe() {
        var e;
        this.hasListeners() ||
          ((e = w(this, Ce)) == null || e.call(this), Z(this, Ce, void 0));
      }
      setEventListener(e) {
        var i;
        Z(this, e4, e),
          (i = w(this, Ce)) == null || i.call(this),
          Z(this, Ce, e(this.setOnline.bind(this)));
      }
      setOnline(e) {
        w(this, t4) !== e &&
          (Z(this, t4, e),
          this.listeners.forEach((o) => {
            o(e);
          }));
      }
      isOnline() {
        return w(this, t4);
      }
    }),
    (t4 = new WeakMap()),
    (Ce = new WeakMap()),
    (e4 = new WeakMap()),
    Os),
  d0 = new Ec();
function Tc(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function z0(t) {
  return (t ?? "online") === "online" ? d0.isOnline() : !0;
}
var n5 = class {
  constructor(t) {
    (this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent);
  }
};
function Wi(t) {
  return t instanceof n5;
}
function i5(t) {
  let e = !1,
    i = 0,
    o = !1,
    a,
    l,
    h;
  const d = new Promise((U, v) => {
      (l = U), (h = v);
    }),
    p = (U) => {
      var v;
      o || (T(new n5(U)), (v = t.abort) == null || v.call(t));
    },
    g = () => {
      e = !0;
    },
    x = () => {
      e = !1;
    },
    S = () => !f0.isFocused() || (t.networkMode !== "always" && !d0.isOnline()),
    k = (U) => {
      var v;
      o ||
        ((o = !0),
        (v = t.onSuccess) == null || v.call(t, U),
        a == null || a(),
        l(U));
    },
    T = (U) => {
      var v;
      o ||
        ((o = !0),
        (v = t.onError) == null || v.call(t, U),
        a == null || a(),
        h(U));
    },
    z = () =>
      new Promise((U) => {
        var v;
        (a = (_) => {
          const y = o || !S();
          return y && U(_), y;
        }),
          (v = t.onPause) == null || v.call(t);
      }).then(() => {
        var U;
        (a = void 0), o || (U = t.onContinue) == null || U.call(t);
      }),
    M = () => {
      if (o) return;
      let U;
      try {
        U = t.fn();
      } catch (v) {
        U = Promise.reject(v);
      }
      Promise.resolve(U)
        .then(k)
        .catch((v) => {
          var j;
          if (o) return;
          const _ = t.retry ?? (x4 ? 0 : 3),
            y = t.retryDelay ?? Tc,
            O = typeof y == "function" ? y(i, v) : y,
            A =
              _ === !0 ||
              (typeof _ == "number" && i < _) ||
              (typeof _ == "function" && _(i, v));
          if (e || !A) {
            T(v);
            return;
          }
          i++,
            (j = t.onFail) == null || j.call(t, i, v),
            e5(O)
              .then(() => {
                if (S()) return z();
              })
              .then(() => {
                e ? T(v) : M();
              });
        });
    };
  return (
    z0(t.networkMode) ? M() : z().then(M),
    {
      promise: d,
      cancel: p,
      continue: () => ((a == null ? void 0 : a()) ? d : Promise.resolve()),
      cancelRetry: g,
      continueRetry: x,
    }
  );
}
function Mc() {
  let t = [],
    e = 0,
    i = (x) => {
      x();
    },
    o = (x) => {
      x();
    };
  const a = (x) => {
      let S;
      e++;
      try {
        S = x();
      } finally {
        e--, e || d();
      }
      return S;
    },
    l = (x) => {
      e
        ? t.push(x)
        : xs(() => {
            i(x);
          });
    },
    h =
      (x) =>
      (...S) => {
        l(() => {
          x(...S);
        });
      },
    d = () => {
      const x = t;
      (t = []),
        x.length &&
          xs(() => {
            o(() => {
              x.forEach((S) => {
                i(S);
              });
            });
          });
    };
  return {
    batch: a,
    batchCalls: h,
    schedule: l,
    setNotifyFunction: (x) => {
      i = x;
    },
    setBatchNotifyFunction: (x) => {
      o = x;
    },
  };
}
var Z2 = Mc(),
  o1,
  zs,
  r5 =
    ((zs = class {
      constructor() {
        b(this, o1, void 0);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          jr(this.gcTime) &&
            Z(
              this,
              o1,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(t) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          t ?? (x4 ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        w(this, o1) && (clearTimeout(w(this, o1)), Z(this, o1, void 0));
      }
    }),
    (o1 = new WeakMap()),
    zs),
  n4,
  i4,
  gt,
  Ee,
  yt,
  R2,
  E3,
  s1,
  r4,
  Un,
  It,
  re,
  Ns,
  Oc =
    ((Ns = class extends r5 {
      constructor(e) {
        super();
        b(this, r4);
        b(this, It);
        b(this, n4, void 0);
        b(this, i4, void 0);
        b(this, gt, void 0);
        b(this, Ee, void 0);
        b(this, yt, void 0);
        b(this, R2, void 0);
        b(this, E3, void 0);
        b(this, s1, void 0);
        Z(this, s1, !1),
          Z(this, E3, e.defaultOptions),
          e2(this, r4, Un).call(this, e.options),
          Z(this, R2, []),
          Z(this, gt, e.cache),
          (this.queryKey = e.queryKey),
          (this.queryHash = e.queryHash),
          Z(this, n4, e.state || zc(this.options)),
          (this.state = w(this, n4)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      optionalRemove() {
        !w(this, R2).length &&
          this.state.fetchStatus === "idle" &&
          w(this, gt).remove(this);
      }
      setData(e, i) {
        const o = Hr(this.state.data, e, this.options);
        return (
          e2(this, It, re).call(this, {
            data: o,
            type: "success",
            dataUpdatedAt: i == null ? void 0 : i.updatedAt,
            manual: i == null ? void 0 : i.manual,
          }),
          o
        );
      }
      setState(e, i) {
        e2(this, It, re).call(this, {
          type: "setState",
          state: e,
          setStateOptions: i,
        });
      }
      cancel(e) {
        var o;
        const i = w(this, Ee);
        return (
          (o = w(this, yt)) == null || o.cancel(e),
          i ? i.then(xt).catch(xt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(w(this, n4));
      }
      isActive() {
        return w(this, R2).some((e) => e.options.enabled !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive();
      }
      isStale() {
        return (
          this.state.isInvalidated ||
          !this.state.dataUpdatedAt ||
          w(this, R2).some((e) => e.getCurrentResult().isStale)
        );
      }
      isStaleByTime(e = 0) {
        return (
          this.state.isInvalidated ||
          !this.state.dataUpdatedAt ||
          !J7(this.state.dataUpdatedAt, e)
        );
      }
      onFocus() {
        var i;
        const e = w(this, R2).find((o) => o.shouldFetchOnWindowFocus());
        e == null || e.refetch({ cancelRefetch: !1 }),
          (i = w(this, yt)) == null || i.continue();
      }
      onOnline() {
        var i;
        const e = w(this, R2).find((o) => o.shouldFetchOnReconnect());
        e == null || e.refetch({ cancelRefetch: !1 }),
          (i = w(this, yt)) == null || i.continue();
      }
      addObserver(e) {
        w(this, R2).includes(e) ||
          (w(this, R2).push(e),
          this.clearGcTimeout(),
          w(this, gt).notify({
            type: "observerAdded",
            query: this,
            observer: e,
          }));
      }
      removeObserver(e) {
        w(this, R2).includes(e) &&
          (Z(
            this,
            R2,
            w(this, R2).filter((i) => i !== e)
          ),
          w(this, R2).length ||
            (w(this, yt) &&
              (w(this, s1)
                ? w(this, yt).cancel({ revert: !0 })
                : w(this, yt).cancelRetry()),
            this.scheduleGc()),
          w(this, gt).notify({
            type: "observerRemoved",
            query: this,
            observer: e,
          }));
      }
      getObserversCount() {
        return w(this, R2).length;
      }
      invalidate() {
        this.state.isInvalidated ||
          e2(this, It, re).call(this, { type: "invalidate" });
      }
      fetch(e, i) {
        var g, x, S, k;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.dataUpdatedAt && i != null && i.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (w(this, Ee))
            return (g = w(this, yt)) == null || g.continueRetry(), w(this, Ee);
        }
        if ((e && e2(this, r4, Un).call(this, e), !this.options.queryFn)) {
          const T = w(this, R2).find((z) => z.options.queryFn);
          T && e2(this, r4, Un).call(this, T.options);
        }
        const o = new AbortController(),
          a = { queryKey: this.queryKey, meta: this.meta },
          l = (T) => {
            Object.defineProperty(T, "signal", {
              enumerable: !0,
              get: () => (Z(this, s1, !0), o.signal),
            });
          };
        l(a);
        const h = () =>
            this.options.queryFn
              ? (Z(this, s1, !1),
                this.options.persister
                  ? this.options.persister(this.options.queryFn, a, this)
                  : this.options.queryFn(a))
              : Promise.reject(
                  new Error(`Missing queryFn: '${this.options.queryHash}'`)
                ),
          d = {
            fetchOptions: i,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: h,
          };
        l(d),
          (x = this.options.behavior) == null || x.onFetch(d, this),
          Z(this, i4, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((S = d.fetchOptions) == null ? void 0 : S.meta)) &&
            e2(this, It, re).call(this, {
              type: "fetch",
              meta: (k = d.fetchOptions) == null ? void 0 : k.meta,
            });
        const p = (T) => {
          var z, M, U, v;
          (Wi(T) && T.silent) ||
            e2(this, It, re).call(this, { type: "error", error: T }),
            Wi(T) ||
              ((M = (z = w(this, gt).config).onError) == null ||
                M.call(z, T, this),
              (v = (U = w(this, gt).config).onSettled) == null ||
                v.call(U, this.state.data, T, this)),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        };
        return (
          Z(
            this,
            yt,
            i5({
              fn: d.fetchFn,
              abort: o.abort.bind(o),
              onSuccess: (T) => {
                var z, M, U, v;
                if (typeof T > "u") {
                  p(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                this.setData(T),
                  (M = (z = w(this, gt).config).onSuccess) == null ||
                    M.call(z, T, this),
                  (v = (U = w(this, gt).config).onSettled) == null ||
                    v.call(U, T, this.state.error, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              },
              onError: p,
              onFail: (T, z) => {
                e2(this, It, re).call(this, {
                  type: "failed",
                  failureCount: T,
                  error: z,
                });
              },
              onPause: () => {
                e2(this, It, re).call(this, { type: "pause" });
              },
              onContinue: () => {
                e2(this, It, re).call(this, { type: "continue" });
              },
              retry: d.options.retry,
              retryDelay: d.options.retryDelay,
              networkMode: d.options.networkMode,
            })
          ),
          Z(this, Ee, w(this, yt).promise),
          w(this, Ee)
        );
      }
    }),
    (n4 = new WeakMap()),
    (i4 = new WeakMap()),
    (gt = new WeakMap()),
    (Ee = new WeakMap()),
    (yt = new WeakMap()),
    (R2 = new WeakMap()),
    (E3 = new WeakMap()),
    (s1 = new WeakMap()),
    (r4 = new WeakSet()),
    (Un = function (e) {
      (this.options = { ...w(this, E3), ...e }),
        this.updateGcTime(this.options.gcTime);
    }),
    (It = new WeakSet()),
    (re = function (e) {
      const i = (o) => {
        switch (e.type) {
          case "failed":
            return {
              ...o,
              fetchFailureCount: e.failureCount,
              fetchFailureReason: e.error,
            };
          case "pause":
            return { ...o, fetchStatus: "paused" };
          case "continue":
            return { ...o, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...o,
              fetchFailureCount: 0,
              fetchFailureReason: null,
              fetchMeta: e.meta ?? null,
              fetchStatus: z0(this.options.networkMode) ? "fetching" : "paused",
              ...(!o.dataUpdatedAt && { error: null, status: "pending" }),
            };
          case "success":
            return {
              ...o,
              data: e.data,
              dataUpdateCount: o.dataUpdateCount + 1,
              dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!e.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const a = e.error;
            return Wi(a) && a.revert && w(this, i4)
              ? { ...w(this, i4), fetchStatus: "idle" }
              : {
                  ...o,
                  error: a,
                  errorUpdateCount: o.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: o.fetchFailureCount + 1,
                  fetchFailureReason: a,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...o, isInvalidated: !0 };
          case "setState":
            return { ...o, ...e.state };
        }
      };
      (this.state = i(this.state)),
        Z2.batch(() => {
          w(this, R2).forEach((o) => {
            o.onQueryUpdate();
          }),
            w(this, gt).notify({ query: this, type: "updated", action: e });
        });
    }),
    Ns);
function zc(t) {
  const e =
      typeof t.initialData == "function" ? t.initialData() : t.initialData,
    i = typeof e < "u",
    o = i
      ? typeof t.initialDataUpdatedAt == "function"
        ? t.initialDataUpdatedAt()
        : t.initialDataUpdatedAt
      : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: i ? o ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: i ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Vt,
  Is,
  Nc =
    ((Is = class extends W3 {
      constructor(e = {}) {
        super();
        b(this, Vt, void 0);
        (this.config = e), Z(this, Vt, new Map());
      }
      build(e, i, o) {
        const a = i.queryKey,
          l = i.queryHash ?? Q9(a, i);
        let h = this.get(l);
        return (
          h ||
            ((h = new Oc({
              cache: this,
              queryKey: a,
              queryHash: l,
              options: e.defaultQueryOptions(i),
              state: o,
              defaultOptions: e.getQueryDefaults(a),
            })),
            this.add(h)),
          h
        );
      }
      add(e) {
        w(this, Vt).has(e.queryHash) ||
          (w(this, Vt).set(e.queryHash, e),
          this.notify({ type: "added", query: e }));
      }
      remove(e) {
        const i = w(this, Vt).get(e.queryHash);
        i &&
          (e.destroy(),
          i === e && w(this, Vt).delete(e.queryHash),
          this.notify({ type: "removed", query: e }));
      }
      clear() {
        Z2.batch(() => {
          this.getAll().forEach((e) => {
            this.remove(e);
          });
        });
      }
      get(e) {
        return w(this, Vt).get(e);
      }
      getAll() {
        return [...w(this, Vt).values()];
      }
      find(e) {
        const i = { exact: !0, ...e };
        return this.getAll().find((o) => vs(i, o));
      }
      findAll(e = {}) {
        const i = this.getAll();
        return Object.keys(e).length > 0 ? i.filter((o) => vs(e, o)) : i;
      }
      notify(e) {
        Z2.batch(() => {
          this.listeners.forEach((i) => {
            i(e);
          });
        });
      }
      onFocus() {
        Z2.batch(() => {
          this.getAll().forEach((e) => {
            e.onFocus();
          });
        });
      }
      onOnline() {
        Z2.batch(() => {
          this.getAll().forEach((e) => {
            e.onOnline();
          });
        });
      }
    }),
    (Vt = new WeakMap()),
    Is),
  $t,
  T3,
  at,
  o4,
  Qt,
  ye,
  Rs,
  Ic =
    ((Rs = class extends r5 {
      constructor(e) {
        super();
        b(this, Qt);
        b(this, $t, void 0);
        b(this, T3, void 0);
        b(this, at, void 0);
        b(this, o4, void 0);
        (this.mutationId = e.mutationId),
          Z(this, T3, e.defaultOptions),
          Z(this, at, e.mutationCache),
          Z(this, $t, []),
          (this.state = e.state || Rc()),
          this.setOptions(e.options),
          this.scheduleGc();
      }
      setOptions(e) {
        (this.options = { ...w(this, T3), ...e }),
          this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(e) {
        w(this, $t).includes(e) ||
          (w(this, $t).push(e),
          this.clearGcTimeout(),
          w(this, at).notify({
            type: "observerAdded",
            mutation: this,
            observer: e,
          }));
      }
      removeObserver(e) {
        Z(
          this,
          $t,
          w(this, $t).filter((i) => i !== e)
        ),
          this.scheduleGc(),
          w(this, at).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e,
          });
      }
      optionalRemove() {
        w(this, $t).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : w(this, at).remove(this));
      }
      continue() {
        var e;
        return (
          ((e = w(this, o4)) == null ? void 0 : e.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(e) {
        var a, l, h, d, p, g, x, S, k, T, z, M, U, v, _, y, O, A, j, F;
        const i = () => (
            Z(
              this,
              o4,
              i5({
                fn: () =>
                  this.options.mutationFn
                    ? this.options.mutationFn(e)
                    : Promise.reject(new Error("No mutationFn found")),
                onFail: (B, i2) => {
                  e2(this, Qt, ye).call(this, {
                    type: "failed",
                    failureCount: B,
                    error: i2,
                  });
                },
                onPause: () => {
                  e2(this, Qt, ye).call(this, { type: "pause" });
                },
                onContinue: () => {
                  e2(this, Qt, ye).call(this, { type: "continue" });
                },
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
              })
            ),
            w(this, o4).promise
          ),
          o = this.state.status === "pending";
        try {
          if (!o) {
            e2(this, Qt, ye).call(this, { type: "pending", variables: e }),
              await ((l = (a = w(this, at).config).onMutate) == null
                ? void 0
                : l.call(a, e, this));
            const i2 = await ((d = (h = this.options).onMutate) == null
              ? void 0
              : d.call(h, e));
            i2 !== this.state.context &&
              e2(this, Qt, ye).call(this, {
                type: "pending",
                context: i2,
                variables: e,
              });
          }
          const B = await i();
          return (
            await ((g = (p = w(this, at).config).onSuccess) == null
              ? void 0
              : g.call(p, B, e, this.state.context, this)),
            await ((S = (x = this.options).onSuccess) == null
              ? void 0
              : S.call(x, B, e, this.state.context)),
            await ((T = (k = w(this, at).config).onSettled) == null
              ? void 0
              : T.call(
                  k,
                  B,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((M = (z = this.options).onSettled) == null
              ? void 0
              : M.call(z, B, null, e, this.state.context)),
            e2(this, Qt, ye).call(this, { type: "success", data: B }),
            B
          );
        } catch (B) {
          try {
            throw (
              (await ((v = (U = w(this, at).config).onError) == null
                ? void 0
                : v.call(U, B, e, this.state.context, this)),
              await ((y = (_ = this.options).onError) == null
                ? void 0
                : y.call(_, B, e, this.state.context)),
              await ((A = (O = w(this, at).config).onSettled) == null
                ? void 0
                : A.call(
                    O,
                    void 0,
                    B,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((F = (j = this.options).onSettled) == null
                ? void 0
                : F.call(j, void 0, B, e, this.state.context)),
              B)
            );
          } finally {
            e2(this, Qt, ye).call(this, { type: "error", error: B });
          }
        }
      }
    }),
    ($t = new WeakMap()),
    (T3 = new WeakMap()),
    (at = new WeakMap()),
    (o4 = new WeakMap()),
    (Qt = new WeakSet()),
    (ye = function (e) {
      const i = (o) => {
        switch (e.type) {
          case "failed":
            return {
              ...o,
              failureCount: e.failureCount,
              failureReason: e.error,
            };
          case "pause":
            return { ...o, isPaused: !0 };
          case "continue":
            return { ...o, isPaused: !1 };
          case "pending":
            return {
              ...o,
              context: e.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: !z0(this.options.networkMode),
              status: "pending",
              variables: e.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...o,
              data: e.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...o,
              data: void 0,
              error: e.error,
              failureCount: o.failureCount + 1,
              failureReason: e.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = i(this.state)),
        Z2.batch(() => {
          w(this, $t).forEach((o) => {
            o.onMutationUpdate(e);
          }),
            w(this, at).notify({ mutation: this, type: "updated", action: e });
        });
    }),
    Rs);
function Rc() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var wt,
  M3,
  a1,
  As,
  Ac =
    ((As = class extends W3 {
      constructor(e = {}) {
        super();
        b(this, wt, void 0);
        b(this, M3, void 0);
        b(this, a1, void 0);
        (this.config = e), Z(this, wt, []), Z(this, M3, 0);
      }
      build(e, i, o) {
        const a = new Ic({
          mutationCache: this,
          mutationId: ++cn(this, M3)._,
          options: e.defaultMutationOptions(i),
          state: o,
        });
        return this.add(a), a;
      }
      add(e) {
        w(this, wt).push(e), this.notify({ type: "added", mutation: e });
      }
      remove(e) {
        Z(
          this,
          wt,
          w(this, wt).filter((i) => i !== e)
        ),
          this.notify({ type: "removed", mutation: e });
      }
      clear() {
        Z2.batch(() => {
          w(this, wt).forEach((e) => {
            this.remove(e);
          });
        });
      }
      getAll() {
        return w(this, wt);
      }
      find(e) {
        const i = { exact: !0, ...e };
        return w(this, wt).find((o) => gs(i, o));
      }
      findAll(e = {}) {
        return w(this, wt).filter((i) => gs(e, i));
      }
      notify(e) {
        Z2.batch(() => {
          this.listeners.forEach((i) => {
            i(e);
          });
        });
      }
      resumePausedMutations() {
        return (
          Z(
            this,
            a1,
            (w(this, a1) ?? Promise.resolve())
              .then(() => {
                const e = w(this, wt).filter((i) => i.state.isPaused);
                return Z2.batch(() =>
                  e.reduce(
                    (i, o) => i.then(() => o.continue().catch(xt)),
                    Promise.resolve()
                  )
                );
              })
              .then(() => {
                Z(this, a1, void 0);
              })
          ),
          w(this, a1)
        );
      }
    }),
    (wt = new WeakMap()),
    (M3 = new WeakMap()),
    (a1 = new WeakMap()),
    As);
function Dc(t) {
  return {
    onFetch: (e, i) => {
      const o = async () => {
        var z, M, U, v, _;
        const a = e.options,
          l =
            (U =
              (M = (z = e.fetchOptions) == null ? void 0 : z.meta) == null
                ? void 0
                : M.fetchMore) == null
              ? void 0
              : U.direction,
          h = ((v = e.state.data) == null ? void 0 : v.pages) || [],
          d = ((_ = e.state.data) == null ? void 0 : _.pageParams) || [],
          p = { pages: [], pageParams: [] };
        let g = !1;
        const x = (y) => {
            Object.defineProperty(y, "signal", {
              enumerable: !0,
              get: () => (
                e.signal.aborted
                  ? (g = !0)
                  : e.signal.addEventListener("abort", () => {
                      g = !0;
                    }),
                e.signal
              ),
            });
          },
          S =
            e.options.queryFn ||
            (() =>
              Promise.reject(
                new Error(`Missing queryFn: '${e.options.queryHash}'`)
              )),
          k = async (y, O, A) => {
            if (g) return Promise.reject();
            if (O == null && y.pages.length) return Promise.resolve(y);
            const j = {
              queryKey: e.queryKey,
              pageParam: O,
              direction: A ? "backward" : "forward",
              meta: e.options.meta,
            };
            x(j);
            const F = await S(j),
              { maxPages: B } = e.options,
              i2 = A ? kc : Lc;
            return {
              pages: i2(y.pages, F, B),
              pageParams: i2(y.pageParams, O, B),
            };
          };
        let T;
        if (l && h.length) {
          const y = l === "backward",
            O = y ? Bc : Ps,
            A = { pages: h, pageParams: d },
            j = O(a, A);
          T = await k(A, j, y);
        } else {
          T = await k(p, d[0] ?? a.initialPageParam);
          const y = t ?? h.length;
          for (let O = 1; O < y; O++) {
            const A = Ps(a, T);
            T = await k(T, A);
          }
        }
        return T;
      };
      e.options.persister
        ? (e.fetchFn = () => {
            var a, l;
            return (l = (a = e.options).persister) == null
              ? void 0
              : l.call(
                  a,
                  o,
                  {
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal,
                  },
                  i
                );
          })
        : (e.fetchFn = o);
    },
  };
}
function Ps(t, { pages: e, pageParams: i }) {
  const o = e.length - 1;
  return t.getNextPageParam(e[o], e, i[o], i);
}
function Bc(t, { pages: e, pageParams: i }) {
  var o;
  return (o = t.getPreviousPageParam) == null
    ? void 0
    : o.call(t, e[0], e, i[0], i);
}
var M2,
  Te,
  Me,
  s4,
  a4,
  Oe,
  l4,
  u4,
  Ds,
  Fc =
    ((Ds = class {
      constructor(t = {}) {
        b(this, M2, void 0);
        b(this, Te, void 0);
        b(this, Me, void 0);
        b(this, s4, void 0);
        b(this, a4, void 0);
        b(this, Oe, void 0);
        b(this, l4, void 0);
        b(this, u4, void 0);
        Z(this, M2, t.queryCache || new Nc()),
          Z(this, Te, t.mutationCache || new Ac()),
          Z(this, Me, t.defaultOptions || {}),
          Z(this, s4, new Map()),
          Z(this, a4, new Map()),
          Z(this, Oe, 0);
      }
      mount() {
        cn(this, Oe)._++,
          w(this, Oe) === 1 &&
            (Z(
              this,
              l4,
              f0.subscribe(() => {
                f0.isFocused() &&
                  (this.resumePausedMutations(), w(this, M2).onFocus());
              })
            ),
            Z(
              this,
              u4,
              d0.subscribe(() => {
                d0.isOnline() &&
                  (this.resumePausedMutations(), w(this, M2).onOnline());
              })
            ));
      }
      unmount() {
        var t, e;
        cn(this, Oe)._--,
          w(this, Oe) === 0 &&
            ((t = w(this, l4)) == null || t.call(this),
            Z(this, l4, void 0),
            (e = w(this, u4)) == null || e.call(this),
            Z(this, u4, void 0));
      }
      isFetching(t) {
        return w(this, M2).findAll({ ...t, fetchStatus: "fetching" }).length;
      }
      isMutating(t) {
        return w(this, Te).findAll({ ...t, status: "pending" }).length;
      }
      getQueryData(t) {
        var e;
        return (e = w(this, M2).find({ queryKey: t })) == null
          ? void 0
          : e.state.data;
      }
      ensureQueryData(t) {
        const e = this.getQueryData(t.queryKey);
        return e ? Promise.resolve(e) : this.fetchQuery(t);
      }
      getQueriesData(t) {
        return this.getQueryCache()
          .findAll(t)
          .map(({ queryKey: e, state: i }) => {
            const o = i.data;
            return [e, o];
          });
      }
      setQueryData(t, e, i) {
        const o = w(this, M2).find({ queryKey: t }),
          a = o == null ? void 0 : o.state.data,
          l = Sc(e, a);
        if (typeof l > "u") return;
        const h = this.defaultQueryOptions({ queryKey: t });
        return w(this, M2)
          .build(this, h)
          .setData(l, { ...i, manual: !0 });
      }
      setQueriesData(t, e, i) {
        return Z2.batch(() =>
          this.getQueryCache()
            .findAll(t)
            .map(({ queryKey: o }) => [o, this.setQueryData(o, e, i)])
        );
      }
      getQueryState(t) {
        var e;
        return (e = w(this, M2).find({ queryKey: t })) == null
          ? void 0
          : e.state;
      }
      removeQueries(t) {
        const e = w(this, M2);
        Z2.batch(() => {
          e.findAll(t).forEach((i) => {
            e.remove(i);
          });
        });
      }
      resetQueries(t, e) {
        const i = w(this, M2),
          o = { type: "active", ...t };
        return Z2.batch(
          () => (
            i.findAll(t).forEach((a) => {
              a.reset();
            }),
            this.refetchQueries(o, e)
          )
        );
      }
      cancelQueries(t = {}, e = {}) {
        const i = { revert: !0, ...e },
          o = Z2.batch(() =>
            w(this, M2)
              .findAll(t)
              .map((a) => a.cancel(i))
          );
        return Promise.all(o).then(xt).catch(xt);
      }
      invalidateQueries(t = {}, e = {}) {
        return Z2.batch(() => {
          if (
            (w(this, M2)
              .findAll(t)
              .forEach((o) => {
                o.invalidate();
              }),
            t.refetchType === "none")
          )
            return Promise.resolve();
          const i = { ...t, type: t.refetchType ?? t.type ?? "active" };
          return this.refetchQueries(i, e);
        });
      }
      refetchQueries(t = {}, e) {
        const i = {
            ...e,
            cancelRefetch: (e == null ? void 0 : e.cancelRefetch) ?? !0,
          },
          o = Z2.batch(() =>
            w(this, M2)
              .findAll(t)
              .filter((a) => !a.isDisabled())
              .map((a) => {
                let l = a.fetch(void 0, i);
                return (
                  i.throwOnError || (l = l.catch(xt)),
                  a.state.fetchStatus === "paused" ? Promise.resolve() : l
                );
              })
          );
        return Promise.all(o).then(xt);
      }
      fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        typeof e.retry > "u" && (e.retry = !1);
        const i = w(this, M2).build(this, e);
        return i.isStaleByTime(e.staleTime)
          ? i.fetch(e)
          : Promise.resolve(i.state.data);
      }
      prefetchQuery(t) {
        return this.fetchQuery(t).then(xt).catch(xt);
      }
      fetchInfiniteQuery(t) {
        return (t.behavior = Dc(t.pages)), this.fetchQuery(t);
      }
      prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(xt).catch(xt);
      }
      resumePausedMutations() {
        return w(this, Te).resumePausedMutations();
      }
      getQueryCache() {
        return w(this, M2);
      }
      getMutationCache() {
        return w(this, Te);
      }
      getDefaultOptions() {
        return w(this, Me);
      }
      setDefaultOptions(t) {
        Z(this, Me, t);
      }
      setQueryDefaults(t, e) {
        w(this, s4).set(k3(t), { queryKey: t, defaultOptions: e });
      }
      getQueryDefaults(t) {
        const e = [...w(this, s4).values()];
        let i = {};
        return (
          e.forEach((o) => {
            C3(t, o.queryKey) && (i = { ...i, ...o.defaultOptions });
          }),
          i
        );
      }
      setMutationDefaults(t, e) {
        w(this, a4).set(k3(t), { mutationKey: t, defaultOptions: e });
      }
      getMutationDefaults(t) {
        const e = [...w(this, a4).values()];
        let i = {};
        return (
          e.forEach((o) => {
            C3(t, o.mutationKey) && (i = { ...i, ...o.defaultOptions });
          }),
          i
        );
      }
      defaultQueryOptions(t) {
        if (t != null && t._defaulted) return t;
        const e = {
          ...w(this, Me).queries,
          ...((t == null ? void 0 : t.queryKey) &&
            this.getQueryDefaults(t.queryKey)),
          ...t,
          _defaulted: !0,
        };
        return (
          e.queryHash || (e.queryHash = Q9(e.queryKey, e)),
          typeof e.refetchOnReconnect > "u" &&
            (e.refetchOnReconnect = e.networkMode !== "always"),
          typeof e.throwOnError > "u" && (e.throwOnError = !!e.suspense),
          typeof e.networkMode > "u" &&
            e.persister &&
            (e.networkMode = "offlineFirst"),
          e
        );
      }
      defaultMutationOptions(t) {
        return t != null && t._defaulted
          ? t
          : {
              ...w(this, Me).mutations,
              ...((t == null ? void 0 : t.mutationKey) &&
                this.getMutationDefaults(t.mutationKey)),
              ...t,
              _defaulted: !0,
            };
      }
      clear() {
        w(this, M2).clear(), w(this, Te).clear();
      }
    }),
    (M2 = new WeakMap()),
    (Te = new WeakMap()),
    (Me = new WeakMap()),
    (s4 = new WeakMap()),
    (a4 = new WeakMap()),
    (Oe = new WeakMap()),
    (l4 = new WeakMap()),
    (u4 = new WeakMap()),
    Ds),
  et,
  d2,
  c4,
  V2,
  l1,
  h4,
  Gt,
  O3,
  f4,
  d4,
  u1,
  c1,
  ze,
  h1,
  f1,
  X4,
  z3,
  Wr,
  N3,
  br,
  I3,
  Vr,
  R3,
  $r,
  A3,
  Qr,
  D3,
  Gr,
  B3,
  Kr,
  p0,
  o5,
  Bs,
  jc =
    ((Bs = class extends W3 {
      constructor(e, i) {
        super();
        b(this, f1);
        b(this, z3);
        b(this, N3);
        b(this, I3);
        b(this, R3);
        b(this, A3);
        b(this, D3);
        b(this, B3);
        b(this, p0);
        b(this, et, void 0);
        b(this, d2, void 0);
        b(this, c4, void 0);
        b(this, V2, void 0);
        b(this, l1, void 0);
        b(this, h4, void 0);
        b(this, Gt, void 0);
        b(this, O3, void 0);
        b(this, f4, void 0);
        b(this, d4, void 0);
        b(this, u1, void 0);
        b(this, c1, void 0);
        b(this, ze, void 0);
        b(this, h1, void 0);
        Z(this, d2, void 0),
          Z(this, c4, void 0),
          Z(this, V2, void 0),
          Z(this, h1, new Set()),
          Z(this, et, e),
          (this.options = i),
          Z(this, Gt, null),
          this.bindMethods(),
          this.setOptions(i);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (w(this, d2).addObserver(this),
          Ss(w(this, d2), this.options) && e2(this, f1, X4).call(this),
          e2(this, R3, $r).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return qr(w(this, d2), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return qr(w(this, d2), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          e2(this, A3, Qr).call(this),
          e2(this, D3, Gr).call(this),
          w(this, d2).removeObserver(this);
      }
      setOptions(e, i) {
        const o = this.options,
          a = w(this, d2);
        if (
          ((this.options = w(this, et).defaultQueryOptions(e)),
          Zr(o, this.options) ||
            w(this, et)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: w(this, d2),
                observer: this,
              }),
          typeof this.options.enabled < "u" &&
            typeof this.options.enabled != "boolean")
        )
          throw new Error("Expected enabled to be a boolean");
        this.options.queryKey || (this.options.queryKey = o.queryKey),
          e2(this, B3, Kr).call(this);
        const l = this.hasListeners();
        l && Ls(w(this, d2), a, this.options, o) && e2(this, f1, X4).call(this),
          this.updateResult(i),
          l &&
            (w(this, d2) !== a ||
              this.options.enabled !== o.enabled ||
              this.options.staleTime !== o.staleTime) &&
            e2(this, z3, Wr).call(this);
        const h = e2(this, N3, br).call(this);
        l &&
          (w(this, d2) !== a ||
            this.options.enabled !== o.enabled ||
            h !== w(this, ze)) &&
          e2(this, I3, Vr).call(this, h);
      }
      getOptimisticResult(e) {
        const i = w(this, et).getQueryCache().build(w(this, et), e),
          o = this.createResult(i, e);
        return (
          Uc(this, o) &&
            (Z(this, V2, o),
            Z(this, h4, this.options),
            Z(this, l1, w(this, d2).state)),
          o
        );
      }
      getCurrentResult() {
        return w(this, V2);
      }
      trackResult(e) {
        const i = {};
        return (
          Object.keys(e).forEach((o) => {
            Object.defineProperty(i, o, {
              configurable: !1,
              enumerable: !0,
              get: () => (w(this, h1).add(o), e[o]),
            });
          }),
          i
        );
      }
      getCurrentQuery() {
        return w(this, d2);
      }
      refetch({ ...e } = {}) {
        return this.fetch({ ...e });
      }
      fetchOptimistic(e) {
        const i = w(this, et).defaultQueryOptions(e),
          o = w(this, et).getQueryCache().build(w(this, et), i);
        return (
          (o.isFetchingOptimistic = !0),
          o.fetch().then(() => this.createResult(o, i))
        );
      }
      fetch(e) {
        return e2(this, f1, X4)
          .call(this, { ...e, cancelRefetch: e.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), w(this, V2)));
      }
      createResult(e, i) {
        var j;
        const o = w(this, d2),
          a = this.options,
          l = w(this, V2),
          h = w(this, l1),
          d = w(this, h4),
          g = e !== o ? e.state : w(this, c4),
          { state: x } = e;
        let { error: S, errorUpdatedAt: k, fetchStatus: T, status: z } = x,
          M = !1,
          U;
        if (i._optimisticResults) {
          const F = this.hasListeners(),
            B = !F && Ss(e, i),
            i2 = F && Ls(e, o, i, a);
          (B || i2) &&
            ((T = z0(e.options.networkMode) ? "fetching" : "paused"),
            x.dataUpdatedAt || (z = "pending")),
            i._optimisticResults === "isRestoring" && (T = "idle");
        }
        if (i.select && typeof x.data < "u")
          if (
            l &&
            x.data === (h == null ? void 0 : h.data) &&
            i.select === w(this, O3)
          )
            U = w(this, f4);
          else
            try {
              Z(this, O3, i.select),
                (U = i.select(x.data)),
                (U = Hr(l == null ? void 0 : l.data, U, i)),
                Z(this, f4, U),
                Z(this, Gt, null);
            } catch (F) {
              Z(this, Gt, F);
            }
        else U = x.data;
        if (
          typeof i.placeholderData < "u" &&
          typeof U > "u" &&
          z === "pending"
        ) {
          let F;
          if (
            l != null &&
            l.isPlaceholderData &&
            i.placeholderData === (d == null ? void 0 : d.placeholderData)
          )
            F = l.data;
          else if (
            ((F =
              typeof i.placeholderData == "function"
                ? i.placeholderData(
                    (j = w(this, d4)) == null ? void 0 : j.state.data,
                    w(this, d4)
                  )
                : i.placeholderData),
            i.select && typeof F < "u")
          )
            try {
              (F = i.select(F)), Z(this, Gt, null);
            } catch (B) {
              Z(this, Gt, B);
            }
          typeof F < "u" &&
            ((z = "success"),
            (U = Hr(l == null ? void 0 : l.data, F, i)),
            (M = !0));
        }
        w(this, Gt) &&
          ((S = w(this, Gt)),
          (U = w(this, f4)),
          (k = Date.now()),
          (z = "error"));
        const v = T === "fetching",
          _ = z === "pending",
          y = z === "error",
          O = _ && v;
        return {
          status: z,
          fetchStatus: T,
          isPending: _,
          isSuccess: z === "success",
          isError: y,
          isInitialLoading: O,
          isLoading: O,
          data: U,
          dataUpdatedAt: x.dataUpdatedAt,
          error: S,
          errorUpdatedAt: k,
          failureCount: x.fetchFailureCount,
          failureReason: x.fetchFailureReason,
          errorUpdateCount: x.errorUpdateCount,
          isFetched: x.dataUpdateCount > 0 || x.errorUpdateCount > 0,
          isFetchedAfterMount:
            x.dataUpdateCount > g.dataUpdateCount ||
            x.errorUpdateCount > g.errorUpdateCount,
          isFetching: v,
          isRefetching: v && !_,
          isLoadingError: y && x.dataUpdatedAt === 0,
          isPaused: T === "paused",
          isPlaceholderData: M,
          isRefetchError: y && x.dataUpdatedAt !== 0,
          isStale: G9(e, i),
          refetch: this.refetch,
        };
      }
      updateResult(e) {
        const i = w(this, V2),
          o = this.createResult(w(this, d2), this.options);
        if (
          (Z(this, l1, w(this, d2).state), Z(this, h4, this.options), Zr(o, i))
        )
          return;
        w(this, l1).data !== void 0 && Z(this, d4, w(this, d2)), Z(this, V2, o);
        const a = {},
          l = () => {
            if (!i) return !0;
            const { notifyOnChangeProps: h } = this.options,
              d = typeof h == "function" ? h() : h;
            if (d === "all" || (!d && !w(this, h1).size)) return !0;
            const p = new Set(d ?? w(this, h1));
            return (
              this.options.throwOnError && p.add("error"),
              Object.keys(w(this, V2)).some((g) => {
                const x = g;
                return w(this, V2)[x] !== i[x] && p.has(x);
              })
            );
          };
        (e == null ? void 0 : e.listeners) !== !1 && l() && (a.listeners = !0),
          e2(this, p0, o5).call(this, { ...a, ...e });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && e2(this, R3, $r).call(this);
      }
    }),
    (et = new WeakMap()),
    (d2 = new WeakMap()),
    (c4 = new WeakMap()),
    (V2 = new WeakMap()),
    (l1 = new WeakMap()),
    (h4 = new WeakMap()),
    (Gt = new WeakMap()),
    (O3 = new WeakMap()),
    (f4 = new WeakMap()),
    (d4 = new WeakMap()),
    (u1 = new WeakMap()),
    (c1 = new WeakMap()),
    (ze = new WeakMap()),
    (h1 = new WeakMap()),
    (f1 = new WeakSet()),
    (X4 = function (e) {
      e2(this, B3, Kr).call(this);
      let i = w(this, d2).fetch(this.options, e);
      return (e != null && e.throwOnError) || (i = i.catch(xt)), i;
    }),
    (z3 = new WeakSet()),
    (Wr = function () {
      if (
        (e2(this, A3, Qr).call(this),
        x4 || w(this, V2).isStale || !jr(this.options.staleTime))
      )
        return;
      const i = J7(w(this, V2).dataUpdatedAt, this.options.staleTime) + 1;
      Z(
        this,
        u1,
        setTimeout(() => {
          w(this, V2).isStale || this.updateResult();
        }, i)
      );
    }),
    (N3 = new WeakSet()),
    (br = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(w(this, d2))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (I3 = new WeakSet()),
    (Vr = function (e) {
      e2(this, D3, Gr).call(this),
        Z(this, ze, e),
        !(
          x4 ||
          this.options.enabled === !1 ||
          !jr(w(this, ze)) ||
          w(this, ze) === 0
        ) &&
          Z(
            this,
            c1,
            setInterval(() => {
              (this.options.refetchIntervalInBackground || f0.isFocused()) &&
                e2(this, f1, X4).call(this);
            }, w(this, ze))
          );
    }),
    (R3 = new WeakSet()),
    ($r = function () {
      e2(this, z3, Wr).call(this),
        e2(this, I3, Vr).call(this, e2(this, N3, br).call(this));
    }),
    (A3 = new WeakSet()),
    (Qr = function () {
      w(this, u1) && (clearTimeout(w(this, u1)), Z(this, u1, void 0));
    }),
    (D3 = new WeakSet()),
    (Gr = function () {
      w(this, c1) && (clearInterval(w(this, c1)), Z(this, c1, void 0));
    }),
    (B3 = new WeakSet()),
    (Kr = function () {
      const e = w(this, et).getQueryCache().build(w(this, et), this.options);
      if (e === w(this, d2)) return;
      const i = w(this, d2);
      Z(this, d2, e),
        Z(this, c4, e.state),
        this.hasListeners() &&
          (i == null || i.removeObserver(this), e.addObserver(this));
    }),
    (p0 = new WeakSet()),
    (o5 = function (e) {
      Z2.batch(() => {
        e.listeners &&
          this.listeners.forEach((i) => {
            i(w(this, V2));
          }),
          w(this, et)
            .getQueryCache()
            .notify({ query: w(this, d2), type: "observerResultsUpdated" });
      });
    }),
    Bs);
function Zc(t, e) {
  return (
    e.enabled !== !1 &&
    !t.state.dataUpdatedAt &&
    !(t.state.status === "error" && e.retryOnMount === !1)
  );
}
function Ss(t, e) {
  return Zc(t, e) || (t.state.dataUpdatedAt > 0 && qr(t, e, e.refetchOnMount));
}
function qr(t, e, i) {
  if (e.enabled !== !1) {
    const o = typeof i == "function" ? i(t) : i;
    return o === "always" || (o !== !1 && G9(t, e));
  }
  return !1;
}
function Ls(t, e, i, o) {
  return (
    i.enabled !== !1 &&
    (t !== e || o.enabled === !1) &&
    (!i.suspense || t.state.status !== "error") &&
    G9(t, i)
  );
}
function G9(t, e) {
  return t.isStaleByTime(e.staleTime);
}
function Uc(t, e) {
  return !Zr(t.getCurrentResult(), e);
}
var s5 = G.createContext(void 0),
  Hc = (t) => {
    const e = G.useContext(s5);
    if (t) return t;
    if (!e)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return e;
  },
  Wc = ({ client: t, children: e }) => (
    G.useEffect(
      () => (
        t.mount(),
        () => {
          t.unmount();
        }
      ),
      [t]
    ),
    G.createElement(s5.Provider, { value: t }, e)
  ),
  a5 = G.createContext(!1),
  bc = () => G.useContext(a5);
a5.Provider;
function Vc() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t,
  };
}
var $c = G.createContext(Vc()),
  Qc = () => G.useContext($c);
function Gc(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
var Kc = (t, e) => {
    (t.suspense || t.throwOnError) && (e.isReset() || (t.retryOnMount = !1));
  },
  qc = (t) => {
    G.useEffect(() => {
      t.clearReset();
    }, [t]);
  },
  Yc = ({ result: t, errorResetBoundary: e, throwOnError: i, query: o }) =>
    t.isError && !e.isReset() && !t.isFetching && Gc(i, [t.error, o]),
  Xc = (t) => {
    t.suspense && typeof t.staleTime != "number" && (t.staleTime = 1e3);
  },
  Jc = (t, e) => t.isLoading && t.isFetching && !e,
  th = (t, e, i) => (t == null ? void 0 : t.suspense) && Jc(e, i),
  eh = (t, e, i) =>
    e.fetchOptimistic(t).catch(() => {
      i.clearReset();
    });
function nh(t, e, i) {
  const o = Hc(i),
    a = bc(),
    l = Qc(),
    h = o.defaultQueryOptions(t);
  (h._optimisticResults = a ? "isRestoring" : "optimistic"),
    Xc(h),
    Kc(h, l),
    qc(l);
  const [d] = G.useState(() => new e(o, h)),
    p = d.getOptimisticResult(h);
  if (
    (G.useSyncExternalStore(
      G.useCallback(
        (g) => {
          const x = a ? () => {} : d.subscribe(Z2.batchCalls(g));
          return d.updateResult(), x;
        },
        [d, a]
      ),
      () => d.getCurrentResult(),
      () => d.getCurrentResult()
    ),
    G.useEffect(() => {
      d.setOptions(h, { listeners: !1 });
    }, [h, d]),
    th(h, p, a))
  )
    throw eh(h, d, l);
  if (
    Yc({
      result: p,
      errorResetBoundary: l,
      throwOnError: h.throwOnError,
      query: d.getCurrentQuery(),
    })
  )
    throw p.error;
  return h.notifyOnChangeProps ? p : d.trackResult(p);
}
function ih(t, e) {
  return nh(t, jc, e);
}
const rh = "https://dataservice.accuweather.com/",
  ks = "uomGNvwUKoLCnxYd7DVxucz978Nj56Bc",
  Cs = 47068,
  Es = "bg",
  oh = {
    current: `currentconditions/v1/${Cs}/?apikey=${ks}&language=${Es}&details=true`,
    forecast: `forecasts/v1/daily/5day/${Cs}/?apikey=${ks}&language=${Es}&metric=true`,
  },
  l5 = (t) =>
    ih({
      queryKey: [t],
      queryFn: () =>
        fetch(rh + oh[t])
          .then((e) => {
            if (!e.ok) throw new Error("Request failed.");
            return e.json();
          })
          .catch((e) =>
            console.log(
              "Error in request, e.g. too many requests for today.",
              e
            )
          ),
    }),
  sh = "_superText_rq04p_1",
  ah = "_icon_rq04p_9",
  Ts = { superText: sh, icon: ah };
function lh() {
  const { data: t, isLoading: e } = l5("current");
  let i = null;
  t && (i = t[0]);
  function o(a) {
    return a.Precip1hr.Metric.Value >= 1
      ? "cloudy_snowing"
      : a.CloudCover > 50
      ? "wb_cloudy"
      : a.IsDayTime
      ? "sunny"
      : "nights_stay";
  }
  return !e && i
    ? E.jsxs("div", {
        children: [
          i.Temperature.Metric.Value,
          E.jsx("sup", { className: Ts.superText, children: "°C" }),
          E.jsx("span", {
            className: "material-icons " + Ts.icon,
            children: o(i),
          }),
        ],
      })
    : null;
}
const uh = "/assets/homeViewRight-03a3401c.jpg",
  ch = "_hero_1vf2d_1",
  hh = "_villaOrt_1vf2d_15",
  fh = "_weatherInfo_1vf2d_49",
  dh = "_location_1vf2d_71",
  ph = "_mask_1vf2d_83",
  mh = "_image_1vf2d_99",
  _h = "_slider_1vf2d_1",
  N1 = {
    hero: ch,
    villaOrt: hh,
    weatherInfo: fh,
    location: dh,
    mask: ph,
    image: mh,
    slider: _h,
  };
function vh() {
  return E.jsx(E.Fragment, {
    children: E.jsxs("div", {
      className: N1.hero,
      children: [
        E.jsx("div", { className: N1.villaOrt, children: "Vila Ortsevo" }),
        E.jsxs("div", {
          className: N1.weatherInfo,
          children: [
            E.jsx(lh, {}),
            E.jsxs("span", {
              className: N1.location,
              children: ["с. Орцево, ", E.jsx("br", {}), " България"],
            }),
          ],
        }),
        E.jsx("div", {
          className: N1.mask,
          children: E.jsx("img", { src: uh, className: N1.image }),
        }),
      ],
    }),
  });
}
function u5(t, e) {
  const i = G.useRef(e);
  G.useEffect(
    function () {
      e !== i.current &&
        t.attributionControl != null &&
        (i.current != null && t.attributionControl.removeAttribution(i.current),
        e != null && t.attributionControl.addAttribution(e)),
        (i.current = e);
    },
    [t, e]
  );
}
const gh = 1;
function yh(t) {
  return Object.freeze({ __version: gh, map: t });
}
function c5(t, e) {
  return Object.freeze({ ...t, ...e });
}
const h5 = G.createContext(null),
  f5 = h5.Provider;
function K9() {
  const t = G.useContext(h5);
  if (t == null)
    throw new Error(
      "No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>"
    );
  return t;
}
function d5(t) {
  function e(i, o) {
    const { instance: a, context: l } = t(i).current;
    return (
      G.useImperativeHandle(o, () => a),
      i.children == null ? null : Vi.createElement(f5, { value: l }, i.children)
    );
  }
  return G.forwardRef(e);
}
function wh(t) {
  function e(i, o) {
    const [a, l] = G.useState(!1),
      { instance: h } = t(i, l).current;
    G.useImperativeHandle(o, () => h),
      G.useEffect(
        function () {
          a && h.update();
        },
        [h, a, i.children]
      );
    const d = h._contentNode;
    return d ? X7.createPortal(i.children, d) : null;
  }
  return G.forwardRef(e);
}
function xh(t) {
  function e(i, o) {
    const { instance: a } = t(i).current;
    return G.useImperativeHandle(o, () => a), null;
  }
  return G.forwardRef(e);
}
function q9(t, e) {
  const i = G.useRef();
  G.useEffect(
    function () {
      return (
        e != null && t.instance.on(e),
        (i.current = e),
        function () {
          i.current != null && t.instance.off(i.current), (i.current = null);
        }
      );
    },
    [t, e]
  );
}
function N0(t, e) {
  const i = t.pane ?? e.pane;
  return i ? { ...t, pane: i } : t;
}
function Ph(t, e) {
  return function (o, a) {
    const l = K9(),
      h = t(N0(o, l), l);
    return (
      u5(l.map, o.attribution),
      q9(h.current, o.eventHandlers),
      e(h.current, l, o, a),
      h
    );
  };
}
var Yr = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */ (function (t, e) {
  (function (i, o) {
    o(e);
  })(Xl, function (i) {
    var o = "1.9.4";
    function a(n) {
      var r, s, u, c;
      for (s = 1, u = arguments.length; s < u; s++) {
        c = arguments[s];
        for (r in c) n[r] = c[r];
      }
      return n;
    }
    var l =
      Object.create ||
      (function () {
        function n() {}
        return function (r) {
          return (n.prototype = r), new n();
        };
      })();
    function h(n, r) {
      var s = Array.prototype.slice;
      if (n.bind) return n.bind.apply(n, s.call(arguments, 1));
      var u = s.call(arguments, 2);
      return function () {
        return n.apply(r, u.length ? u.concat(s.call(arguments)) : arguments);
      };
    }
    var d = 0;
    function p(n) {
      return "_leaflet_id" in n || (n._leaflet_id = ++d), n._leaflet_id;
    }
    function g(n, r, s) {
      var u, c, f, m;
      return (
        (m = function () {
          (u = !1), c && (f.apply(s, c), (c = !1));
        }),
        (f = function () {
          u
            ? (c = arguments)
            : (n.apply(s, arguments), setTimeout(m, r), (u = !0));
        }),
        f
      );
    }
    function x(n, r, s) {
      var u = r[1],
        c = r[0],
        f = u - c;
      return n === u && s ? n : ((((n - c) % f) + f) % f) + c;
    }
    function S() {
      return !1;
    }
    function k(n, r) {
      if (r === !1) return n;
      var s = Math.pow(10, r === void 0 ? 6 : r);
      return Math.round(n * s) / s;
    }
    function T(n) {
      return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "");
    }
    function z(n) {
      return T(n).split(/\s+/);
    }
    function M(n, r) {
      Object.prototype.hasOwnProperty.call(n, "options") ||
        (n.options = n.options ? l(n.options) : {});
      for (var s in r) n.options[s] = r[s];
      return n.options;
    }
    function U(n, r, s) {
      var u = [];
      for (var c in n)
        u.push(
          encodeURIComponent(s ? c.toUpperCase() : c) +
            "=" +
            encodeURIComponent(n[c])
        );
      return (!r || r.indexOf("?") === -1 ? "?" : "&") + u.join("&");
    }
    var v = /\{ *([\w_ -]+) *\}/g;
    function _(n, r) {
      return n.replace(v, function (s, u) {
        var c = r[u];
        if (c === void 0)
          throw new Error("No value provided for variable " + s);
        return typeof c == "function" && (c = c(r)), c;
      });
    }
    var y =
      Array.isArray ||
      function (n) {
        return Object.prototype.toString.call(n) === "[object Array]";
      };
    function O(n, r) {
      for (var s = 0; s < n.length; s++) if (n[s] === r) return s;
      return -1;
    }
    var A = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function j(n) {
      return window["webkit" + n] || window["moz" + n] || window["ms" + n];
    }
    var F = 0;
    function B(n) {
      var r = +new Date(),
        s = Math.max(0, 16 - (r - F));
      return (F = r + s), window.setTimeout(n, s);
    }
    var i2 = window.requestAnimationFrame || j("RequestAnimationFrame") || B,
      J =
        window.cancelAnimationFrame ||
        j("CancelAnimationFrame") ||
        j("CancelRequestAnimationFrame") ||
        function (n) {
          window.clearTimeout(n);
        };
    function h2(n, r, s) {
      if (s && i2 === B) n.call(r);
      else return i2.call(window, h(n, r));
    }
    function N2(n) {
      n && J.call(window, n);
    }
    var Qe = {
      __proto__: null,
      extend: a,
      create: l,
      bind: h,
      get lastId() {
        return d;
      },
      stamp: p,
      throttle: g,
      wrapNum: x,
      falseFn: S,
      formatNum: k,
      trim: T,
      splitWords: z,
      setOptions: M,
      getParamString: U,
      template: _,
      isArray: y,
      indexOf: O,
      emptyImageUrl: A,
      requestFn: i2,
      cancelFn: J,
      requestAnimFrame: h2,
      cancelAnimFrame: N2,
    };
    function pt() {}
    (pt.extend = function (n) {
      var r = function () {
          M(this),
            this.initialize && this.initialize.apply(this, arguments),
            this.callInitHooks();
        },
        s = (r.__super__ = this.prototype),
        u = l(s);
      (u.constructor = r), (r.prototype = u);
      for (var c in this)
        Object.prototype.hasOwnProperty.call(this, c) &&
          c !== "prototype" &&
          c !== "__super__" &&
          (r[c] = this[c]);
      return (
        n.statics && a(r, n.statics),
        n.includes && (A0(n.includes), a.apply(null, [u].concat(n.includes))),
        a(u, n),
        delete u.statics,
        delete u.includes,
        u.options &&
          ((u.options = s.options ? l(s.options) : {}),
          a(u.options, n.options)),
        (u._initHooks = []),
        (u.callInitHooks = function () {
          if (!this._initHooksCalled) {
            s.callInitHooks && s.callInitHooks.call(this),
              (this._initHooksCalled = !0);
            for (var f = 0, m = u._initHooks.length; f < m; f++)
              u._initHooks[f].call(this);
          }
        }),
        r
      );
    }),
      (pt.include = function (n) {
        var r = this.prototype.options;
        return (
          a(this.prototype, n),
          n.options &&
            ((this.prototype.options = r), this.mergeOptions(n.options)),
          this
        );
      }),
      (pt.mergeOptions = function (n) {
        return a(this.prototype.options, n), this;
      }),
      (pt.addInitHook = function (n) {
        var r = Array.prototype.slice.call(arguments, 1),
          s =
            typeof n == "function"
              ? n
              : function () {
                  this[n].apply(this, r);
                };
        return (
          (this.prototype._initHooks = this.prototype._initHooks || []),
          this.prototype._initHooks.push(s),
          this
        );
      });
    function A0(n) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        n = y(n) ? n : [n];
        for (var r = 0; r < n.length; r++)
          n[r] === L.Mixin.Events &&
            console.warn(
              "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
              new Error().stack
            );
      }
    }
    var B2 = {
      on: function (n, r, s) {
        if (typeof n == "object") for (var u in n) this._on(u, n[u], r);
        else {
          n = z(n);
          for (var c = 0, f = n.length; c < f; c++) this._on(n[c], r, s);
        }
        return this;
      },
      off: function (n, r, s) {
        if (!arguments.length) delete this._events;
        else if (typeof n == "object") for (var u in n) this._off(u, n[u], r);
        else {
          n = z(n);
          for (var c = arguments.length === 1, f = 0, m = n.length; f < m; f++)
            c ? this._off(n[f]) : this._off(n[f], r, s);
        }
        return this;
      },
      _on: function (n, r, s, u) {
        if (typeof r != "function") {
          console.warn("wrong listener type: " + typeof r);
          return;
        }
        if (this._listens(n, r, s) === !1) {
          s === this && (s = void 0);
          var c = { fn: r, ctx: s };
          u && (c.once = !0),
            (this._events = this._events || {}),
            (this._events[n] = this._events[n] || []),
            this._events[n].push(c);
        }
      },
      _off: function (n, r, s) {
        var u, c, f;
        if (this._events && ((u = this._events[n]), !!u)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (c = 0, f = u.length; c < f; c++) u[c].fn = S;
            delete this._events[n];
            return;
          }
          if (typeof r != "function") {
            console.warn("wrong listener type: " + typeof r);
            return;
          }
          var m = this._listens(n, r, s);
          if (m !== !1) {
            var P = u[m];
            this._firingCount &&
              ((P.fn = S), (this._events[n] = u = u.slice())),
              u.splice(m, 1);
          }
        }
      },
      fire: function (n, r, s) {
        if (!this.listens(n, s)) return this;
        var u = a({}, r, {
          type: n,
          target: this,
          sourceTarget: (r && r.sourceTarget) || this,
        });
        if (this._events) {
          var c = this._events[n];
          if (c) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var f = 0, m = c.length; f < m; f++) {
              var P = c[f],
                C = P.fn;
              P.once && this.off(n, C, P.ctx), C.call(P.ctx || this, u);
            }
            this._firingCount--;
          }
        }
        return s && this._propagateEvent(u), this;
      },
      listens: function (n, r, s, u) {
        typeof n != "string" && console.warn('"string" type argument expected');
        var c = r;
        typeof r != "function" && ((u = !!r), (c = void 0), (s = void 0));
        var f = this._events && this._events[n];
        if (f && f.length && this._listens(n, c, s) !== !1) return !0;
        if (u) {
          for (var m in this._eventParents)
            if (this._eventParents[m].listens(n, r, s, u)) return !0;
        }
        return !1;
      },
      _listens: function (n, r, s) {
        if (!this._events) return !1;
        var u = this._events[n] || [];
        if (!r) return !!u.length;
        s === this && (s = void 0);
        for (var c = 0, f = u.length; c < f; c++)
          if (u[c].fn === r && u[c].ctx === s) return c;
        return !1;
      },
      once: function (n, r, s) {
        if (typeof n == "object") for (var u in n) this._on(u, n[u], r, !0);
        else {
          n = z(n);
          for (var c = 0, f = n.length; c < f; c++) this._on(n[c], r, s, !0);
        }
        return this;
      },
      addEventParent: function (n) {
        return (
          (this._eventParents = this._eventParents || {}),
          (this._eventParents[p(n)] = n),
          this
        );
      },
      removeEventParent: function (n) {
        return this._eventParents && delete this._eventParents[p(n)], this;
      },
      _propagateEvent: function (n) {
        for (var r in this._eventParents)
          this._eventParents[r].fire(
            n.type,
            a({ layer: n.target, propagatedFrom: n.target }, n),
            !0
          );
      },
    };
    (B2.addEventListener = B2.on),
      (B2.removeEventListener = B2.clearAllEventListeners = B2.off),
      (B2.addOneTimeEventListener = B2.once),
      (B2.fireEvent = B2.fire),
      (B2.hasEventListeners = B2.listens);
    var Xt = pt.extend(B2);
    function N(n, r, s) {
      (this.x = s ? Math.round(n) : n), (this.y = s ? Math.round(r) : r);
    }
    var K =
      Math.trunc ||
      function (n) {
        return n > 0 ? Math.floor(n) : Math.ceil(n);
      };
    N.prototype = {
      clone: function () {
        return new N(this.x, this.y);
      },
      add: function (n) {
        return this.clone()._add(D(n));
      },
      _add: function (n) {
        return (this.x += n.x), (this.y += n.y), this;
      },
      subtract: function (n) {
        return this.clone()._subtract(D(n));
      },
      _subtract: function (n) {
        return (this.x -= n.x), (this.y -= n.y), this;
      },
      divideBy: function (n) {
        return this.clone()._divideBy(n);
      },
      _divideBy: function (n) {
        return (this.x /= n), (this.y /= n), this;
      },
      multiplyBy: function (n) {
        return this.clone()._multiplyBy(n);
      },
      _multiplyBy: function (n) {
        return (this.x *= n), (this.y *= n), this;
      },
      scaleBy: function (n) {
        return new N(this.x * n.x, this.y * n.y);
      },
      unscaleBy: function (n) {
        return new N(this.x / n.x, this.y / n.y);
      },
      round: function () {
        return this.clone()._round();
      },
      _round: function () {
        return (
          (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
        );
      },
      floor: function () {
        return this.clone()._floor();
      },
      _floor: function () {
        return (
          (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
        );
      },
      ceil: function () {
        return this.clone()._ceil();
      },
      _ceil: function () {
        return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
      },
      trunc: function () {
        return this.clone()._trunc();
      },
      _trunc: function () {
        return (this.x = K(this.x)), (this.y = K(this.y)), this;
      },
      distanceTo: function (n) {
        n = D(n);
        var r = n.x - this.x,
          s = n.y - this.y;
        return Math.sqrt(r * r + s * s);
      },
      equals: function (n) {
        return (n = D(n)), n.x === this.x && n.y === this.y;
      },
      contains: function (n) {
        return (
          (n = D(n)),
          Math.abs(n.x) <= Math.abs(this.x) && Math.abs(n.y) <= Math.abs(this.y)
        );
      },
      toString: function () {
        return "Point(" + k(this.x) + ", " + k(this.y) + ")";
      },
    };
    function D(n, r, s) {
      return n instanceof N
        ? n
        : y(n)
        ? new N(n[0], n[1])
        : n == null
        ? n
        : typeof n == "object" && "x" in n && "y" in n
        ? new N(n.x, n.y)
        : new N(n, r, s);
    }
    function Q(n, r) {
      if (n)
        for (var s = r ? [n, r] : n, u = 0, c = s.length; u < c; u++)
          this.extend(s[u]);
    }
    Q.prototype = {
      extend: function (n) {
        var r, s;
        if (!n) return this;
        if (n instanceof N || typeof n[0] == "number" || "x" in n) r = s = D(n);
        else if (((n = o2(n)), (r = n.min), (s = n.max), !r || !s)) return this;
        return (
          !this.min && !this.max
            ? ((this.min = r.clone()), (this.max = s.clone()))
            : ((this.min.x = Math.min(r.x, this.min.x)),
              (this.max.x = Math.max(s.x, this.max.x)),
              (this.min.y = Math.min(r.y, this.min.y)),
              (this.max.y = Math.max(s.y, this.max.y))),
          this
        );
      },
      getCenter: function (n) {
        return D(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          n
        );
      },
      getBottomLeft: function () {
        return D(this.min.x, this.max.y);
      },
      getTopRight: function () {
        return D(this.max.x, this.min.y);
      },
      getTopLeft: function () {
        return this.min;
      },
      getBottomRight: function () {
        return this.max;
      },
      getSize: function () {
        return this.max.subtract(this.min);
      },
      contains: function (n) {
        var r, s;
        return (
          typeof n[0] == "number" || n instanceof N ? (n = D(n)) : (n = o2(n)),
          n instanceof Q ? ((r = n.min), (s = n.max)) : (r = s = n),
          r.x >= this.min.x &&
            s.x <= this.max.x &&
            r.y >= this.min.y &&
            s.y <= this.max.y
        );
      },
      intersects: function (n) {
        n = o2(n);
        var r = this.min,
          s = this.max,
          u = n.min,
          c = n.max,
          f = c.x >= r.x && u.x <= s.x,
          m = c.y >= r.y && u.y <= s.y;
        return f && m;
      },
      overlaps: function (n) {
        n = o2(n);
        var r = this.min,
          s = this.max,
          u = n.min,
          c = n.max,
          f = c.x > r.x && u.x < s.x,
          m = c.y > r.y && u.y < s.y;
        return f && m;
      },
      isValid: function () {
        return !!(this.min && this.max);
      },
      pad: function (n) {
        var r = this.min,
          s = this.max,
          u = Math.abs(r.x - s.x) * n,
          c = Math.abs(r.y - s.y) * n;
        return o2(D(r.x - u, r.y - c), D(s.x + u, s.y + c));
      },
      equals: function (n) {
        return n
          ? ((n = o2(n)),
            this.min.equals(n.getTopLeft()) &&
              this.max.equals(n.getBottomRight()))
          : !1;
      },
    };
    function o2(n, r) {
      return !n || n instanceof Q ? n : new Q(n, r);
    }
    function T2(n, r) {
      if (n)
        for (var s = r ? [n, r] : n, u = 0, c = s.length; u < c; u++)
          this.extend(s[u]);
    }
    T2.prototype = {
      extend: function (n) {
        var r = this._southWest,
          s = this._northEast,
          u,
          c;
        if (n instanceof a2) (u = n), (c = n);
        else if (n instanceof T2) {
          if (((u = n._southWest), (c = n._northEast), !u || !c)) return this;
        } else return n ? this.extend(q(n) || c2(n)) : this;
        return (
          !r && !s
            ? ((this._southWest = new a2(u.lat, u.lng)),
              (this._northEast = new a2(c.lat, c.lng)))
            : ((r.lat = Math.min(u.lat, r.lat)),
              (r.lng = Math.min(u.lng, r.lng)),
              (s.lat = Math.max(c.lat, s.lat)),
              (s.lng = Math.max(c.lng, s.lng))),
          this
        );
      },
      pad: function (n) {
        var r = this._southWest,
          s = this._northEast,
          u = Math.abs(r.lat - s.lat) * n,
          c = Math.abs(r.lng - s.lng) * n;
        return new T2(
          new a2(r.lat - u, r.lng - c),
          new a2(s.lat + u, s.lng + c)
        );
      },
      getCenter: function () {
        return new a2(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      getSouthWest: function () {
        return this._southWest;
      },
      getNorthEast: function () {
        return this._northEast;
      },
      getNorthWest: function () {
        return new a2(this.getNorth(), this.getWest());
      },
      getSouthEast: function () {
        return new a2(this.getSouth(), this.getEast());
      },
      getWest: function () {
        return this._southWest.lng;
      },
      getSouth: function () {
        return this._southWest.lat;
      },
      getEast: function () {
        return this._northEast.lng;
      },
      getNorth: function () {
        return this._northEast.lat;
      },
      contains: function (n) {
        typeof n[0] == "number" || n instanceof a2 || "lat" in n
          ? (n = q(n))
          : (n = c2(n));
        var r = this._southWest,
          s = this._northEast,
          u,
          c;
        return (
          n instanceof T2
            ? ((u = n.getSouthWest()), (c = n.getNorthEast()))
            : (u = c = n),
          u.lat >= r.lat && c.lat <= s.lat && u.lng >= r.lng && c.lng <= s.lng
        );
      },
      intersects: function (n) {
        n = c2(n);
        var r = this._southWest,
          s = this._northEast,
          u = n.getSouthWest(),
          c = n.getNorthEast(),
          f = c.lat >= r.lat && u.lat <= s.lat,
          m = c.lng >= r.lng && u.lng <= s.lng;
        return f && m;
      },
      overlaps: function (n) {
        n = c2(n);
        var r = this._southWest,
          s = this._northEast,
          u = n.getSouthWest(),
          c = n.getNorthEast(),
          f = c.lat > r.lat && u.lat < s.lat,
          m = c.lng > r.lng && u.lng < s.lng;
        return f && m;
      },
      toBBoxString: function () {
        return [
          this.getWest(),
          this.getSouth(),
          this.getEast(),
          this.getNorth(),
        ].join(",");
      },
      equals: function (n, r) {
        return n
          ? ((n = c2(n)),
            this._southWest.equals(n.getSouthWest(), r) &&
              this._northEast.equals(n.getNorthEast(), r))
          : !1;
      },
      isValid: function () {
        return !!(this._southWest && this._northEast);
      },
    };
    function c2(n, r) {
      return n instanceof T2 ? n : new T2(n, r);
    }
    function a2(n, r, s) {
      if (isNaN(n) || isNaN(r))
        throw new Error("Invalid LatLng object: (" + n + ", " + r + ")");
      (this.lat = +n), (this.lng = +r), s !== void 0 && (this.alt = +s);
    }
    a2.prototype = {
      equals: function (n, r) {
        if (!n) return !1;
        n = q(n);
        var s = Math.max(
          Math.abs(this.lat - n.lat),
          Math.abs(this.lng - n.lng)
        );
        return s <= (r === void 0 ? 1e-9 : r);
      },
      toString: function (n) {
        return "LatLng(" + k(this.lat, n) + ", " + k(this.lng, n) + ")";
      },
      distanceTo: function (n) {
        return me.distance(this, q(n));
      },
      wrap: function () {
        return me.wrapLatLng(this);
      },
      toBounds: function (n) {
        var r = (180 * n) / 40075017,
          s = r / Math.cos((Math.PI / 180) * this.lat);
        return c2([this.lat - r, this.lng - s], [this.lat + r, this.lng + s]);
      },
      clone: function () {
        return new a2(this.lat, this.lng, this.alt);
      },
    };
    function q(n, r, s) {
      return n instanceof a2
        ? n
        : y(n) && typeof n[0] != "object"
        ? n.length === 3
          ? new a2(n[0], n[1], n[2])
          : n.length === 2
          ? new a2(n[0], n[1])
          : null
        : n == null
        ? n
        : typeof n == "object" && "lat" in n
        ? new a2(n.lat, "lng" in n ? n.lng : n.lon, n.alt)
        : r === void 0
        ? null
        : new a2(n, r, s);
    }
    var J2 = {
        latLngToPoint: function (n, r) {
          var s = this.projection.project(n),
            u = this.scale(r);
          return this.transformation._transform(s, u);
        },
        pointToLatLng: function (n, r) {
          var s = this.scale(r),
            u = this.transformation.untransform(n, s);
          return this.projection.unproject(u);
        },
        project: function (n) {
          return this.projection.project(n);
        },
        unproject: function (n) {
          return this.projection.unproject(n);
        },
        scale: function (n) {
          return 256 * Math.pow(2, n);
        },
        zoom: function (n) {
          return Math.log(n / 256) / Math.LN2;
        },
        getProjectedBounds: function (n) {
          if (this.infinite) return null;
          var r = this.projection.bounds,
            s = this.scale(n),
            u = this.transformation.transform(r.min, s),
            c = this.transformation.transform(r.max, s);
          return new Q(u, c);
        },
        infinite: !1,
        wrapLatLng: function (n) {
          var r = this.wrapLng ? x(n.lng, this.wrapLng, !0) : n.lng,
            s = this.wrapLat ? x(n.lat, this.wrapLat, !0) : n.lat,
            u = n.alt;
          return new a2(s, r, u);
        },
        wrapLatLngBounds: function (n) {
          var r = n.getCenter(),
            s = this.wrapLatLng(r),
            u = r.lat - s.lat,
            c = r.lng - s.lng;
          if (u === 0 && c === 0) return n;
          var f = n.getSouthWest(),
            m = n.getNorthEast(),
            P = new a2(f.lat - u, f.lng - c),
            C = new a2(m.lat - u, m.lng - c);
          return new T2(P, C);
        },
      },
      me = a({}, J2, {
        wrapLng: [-180, 180],
        R: 6371e3,
        distance: function (n, r) {
          var s = Math.PI / 180,
            u = n.lat * s,
            c = r.lat * s,
            f = Math.sin(((r.lat - n.lat) * s) / 2),
            m = Math.sin(((r.lng - n.lng) * s) / 2),
            P = f * f + Math.cos(u) * Math.cos(c) * m * m,
            C = 2 * Math.atan2(Math.sqrt(P), Math.sqrt(1 - P));
          return this.R * C;
        },
      }),
      Y9 = 6378137,
      D0 = {
        R: Y9,
        MAX_LATITUDE: 85.0511287798,
        project: function (n) {
          var r = Math.PI / 180,
            s = this.MAX_LATITUDE,
            u = Math.max(Math.min(s, n.lat), -s),
            c = Math.sin(u * r);
          return new N(
            this.R * n.lng * r,
            (this.R * Math.log((1 + c) / (1 - c))) / 2
          );
        },
        unproject: function (n) {
          var r = 180 / Math.PI;
          return new a2(
            (2 * Math.atan(Math.exp(n.y / this.R)) - Math.PI / 2) * r,
            (n.x * r) / this.R
          );
        },
        bounds: (function () {
          var n = Y9 * Math.PI;
          return new Q([-n, -n], [n, n]);
        })(),
      };
    function B0(n, r, s, u) {
      if (y(n)) {
        (this._a = n[0]), (this._b = n[1]), (this._c = n[2]), (this._d = n[3]);
        return;
      }
      (this._a = n), (this._b = r), (this._c = s), (this._d = u);
    }
    B0.prototype = {
      transform: function (n, r) {
        return this._transform(n.clone(), r);
      },
      _transform: function (n, r) {
        return (
          (r = r || 1),
          (n.x = r * (this._a * n.x + this._b)),
          (n.y = r * (this._c * n.y + this._d)),
          n
        );
      },
      untransform: function (n, r) {
        return (
          (r = r || 1),
          new N((n.x / r - this._b) / this._a, (n.y / r - this._d) / this._c)
        );
      },
    };
    function C4(n, r, s, u) {
      return new B0(n, r, s, u);
    }
    var F0 = a({}, me, {
        code: "EPSG:3857",
        projection: D0,
        transformation: (function () {
          var n = 0.5 / (Math.PI * D0.R);
          return C4(n, 0.5, -n, 0.5);
        })(),
      }),
      T5 = a({}, F0, { code: "EPSG:900913" });
    function X9(n) {
      return document.createElementNS("http://www.w3.org/2000/svg", n);
    }
    function J9(n, r) {
      var s = "",
        u,
        c,
        f,
        m,
        P,
        C;
      for (u = 0, f = n.length; u < f; u++) {
        for (P = n[u], c = 0, m = P.length; c < m; c++)
          (C = P[c]), (s += (c ? "L" : "M") + C.x + " " + C.y);
        s += r ? (V.svg ? "z" : "x") : "";
      }
      return s || "M0 0";
    }
    var j0 = document.documentElement.style,
      b3 = "ActiveXObject" in window,
      M5 = b3 && !document.addEventListener,
      to = "msLaunchUri" in navigator && !("documentMode" in document),
      Z0 = jt("webkit"),
      eo = jt("android"),
      no = jt("android 2") || jt("android 3"),
      O5 = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
      z5 = eo && jt("Google") && O5 < 537 && !("AudioNode" in window),
      U0 = !!window.opera,
      io = !to && jt("chrome"),
      ro = jt("gecko") && !Z0 && !U0 && !b3,
      N5 = !io && jt("safari"),
      oo = jt("phantom"),
      so = "OTransition" in j0,
      I5 = navigator.platform.indexOf("Win") === 0,
      ao = b3 && "transition" in j0,
      H0 =
        "WebKitCSSMatrix" in window &&
        "m11" in new window.WebKitCSSMatrix() &&
        !no,
      lo = "MozPerspective" in j0,
      R5 = !window.L_DISABLE_3D && (ao || H0 || lo) && !so && !oo,
      E4 = typeof orientation < "u" || jt("mobile"),
      A5 = E4 && Z0,
      D5 = E4 && H0,
      uo = !window.PointerEvent && window.MSPointerEvent,
      co = !!(window.PointerEvent || uo),
      ho = "ontouchstart" in window || !!window.TouchEvent,
      B5 = !window.L_NO_TOUCH && (ho || co),
      F5 = E4 && U0,
      j5 = E4 && ro,
      Z5 =
        (window.devicePixelRatio ||
          window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
      U5 = (function () {
        var n = !1;
        try {
          var r = Object.defineProperty({}, "passive", {
            get: function () {
              n = !0;
            },
          });
          window.addEventListener("testPassiveEventSupport", S, r),
            window.removeEventListener("testPassiveEventSupport", S, r);
        } catch {}
        return n;
      })(),
      H5 = (function () {
        return !!document.createElement("canvas").getContext;
      })(),
      W0 = !!(document.createElementNS && X9("svg").createSVGRect),
      W5 =
        !!W0 &&
        (function () {
          var n = document.createElement("div");
          return (
            (n.innerHTML = "<svg/>"),
            (n.firstChild && n.firstChild.namespaceURI) ===
              "http://www.w3.org/2000/svg"
          );
        })(),
      b5 =
        !W0 &&
        (function () {
          try {
            var n = document.createElement("div");
            n.innerHTML = '<v:shape adj="1"/>';
            var r = n.firstChild;
            return (
              (r.style.behavior = "url(#default#VML)"),
              r && typeof r.adj == "object"
            );
          } catch {
            return !1;
          }
        })(),
      V5 = navigator.platform.indexOf("Mac") === 0,
      $5 = navigator.platform.indexOf("Linux") === 0;
    function jt(n) {
      return navigator.userAgent.toLowerCase().indexOf(n) >= 0;
    }
    var V = {
        ie: b3,
        ielt9: M5,
        edge: to,
        webkit: Z0,
        android: eo,
        android23: no,
        androidStock: z5,
        opera: U0,
        chrome: io,
        gecko: ro,
        safari: N5,
        phantom: oo,
        opera12: so,
        win: I5,
        ie3d: ao,
        webkit3d: H0,
        gecko3d: lo,
        any3d: R5,
        mobile: E4,
        mobileWebkit: A5,
        mobileWebkit3d: D5,
        msPointer: uo,
        pointer: co,
        touch: B5,
        touchNative: ho,
        mobileOpera: F5,
        mobileGecko: j5,
        retina: Z5,
        passiveEvents: U5,
        canvas: H5,
        svg: W0,
        vml: b5,
        inlineSvg: W5,
        mac: V5,
        linux: $5,
      },
      fo = V.msPointer ? "MSPointerDown" : "pointerdown",
      po = V.msPointer ? "MSPointerMove" : "pointermove",
      mo = V.msPointer ? "MSPointerUp" : "pointerup",
      _o = V.msPointer ? "MSPointerCancel" : "pointercancel",
      b0 = { touchstart: fo, touchmove: po, touchend: mo, touchcancel: _o },
      vo = { touchstart: X5, touchmove: V3, touchend: V3, touchcancel: V3 },
      P1 = {},
      go = !1;
    function Q5(n, r, s) {
      return (
        r === "touchstart" && Y5(),
        vo[r]
          ? ((s = vo[r].bind(this, s)), n.addEventListener(b0[r], s, !1), s)
          : (console.warn("wrong event specified:", r), S)
      );
    }
    function G5(n, r, s) {
      if (!b0[r]) {
        console.warn("wrong event specified:", r);
        return;
      }
      n.removeEventListener(b0[r], s, !1);
    }
    function K5(n) {
      P1[n.pointerId] = n;
    }
    function q5(n) {
      P1[n.pointerId] && (P1[n.pointerId] = n);
    }
    function yo(n) {
      delete P1[n.pointerId];
    }
    function Y5() {
      go ||
        (document.addEventListener(fo, K5, !0),
        document.addEventListener(po, q5, !0),
        document.addEventListener(mo, yo, !0),
        document.addEventListener(_o, yo, !0),
        (go = !0));
    }
    function V3(n, r) {
      if (r.pointerType !== (r.MSPOINTER_TYPE_MOUSE || "mouse")) {
        r.touches = [];
        for (var s in P1) r.touches.push(P1[s]);
        (r.changedTouches = [r]), n(r);
      }
    }
    function X5(n, r) {
      r.MSPOINTER_TYPE_TOUCH &&
        r.pointerType === r.MSPOINTER_TYPE_TOUCH &&
        F2(r),
        V3(n, r);
    }
    function J5(n) {
      var r = {},
        s,
        u;
      for (u in n) (s = n[u]), (r[u] = s && s.bind ? s.bind(n) : s);
      return (
        (n = r),
        (r.type = "dblclick"),
        (r.detail = 2),
        (r.isTrusted = !1),
        (r._simulated = !0),
        r
      );
    }
    var tl = 200;
    function el(n, r) {
      n.addEventListener("dblclick", r);
      var s = 0,
        u;
      function c(f) {
        if (f.detail !== 1) {
          u = f.detail;
          return;
        }
        if (
          !(
            f.pointerType === "mouse" ||
            (f.sourceCapabilities && !f.sourceCapabilities.firesTouchEvents)
          )
        ) {
          var m = Lo(f);
          if (
            !(
              m.some(function (C) {
                return C instanceof HTMLLabelElement && C.attributes.for;
              }) &&
              !m.some(function (C) {
                return (
                  C instanceof HTMLInputElement ||
                  C instanceof HTMLSelectElement
                );
              })
            )
          ) {
            var P = Date.now();
            P - s <= tl ? (u++, u === 2 && r(J5(f))) : (u = 1), (s = P);
          }
        }
      }
      return n.addEventListener("click", c), { dblclick: r, simDblclick: c };
    }
    function nl(n, r) {
      n.removeEventListener("dblclick", r.dblclick),
        n.removeEventListener("click", r.simDblclick);
    }
    var V0 = G3([
        "transform",
        "webkitTransform",
        "OTransform",
        "MozTransform",
        "msTransform",
      ]),
      T4 = G3([
        "webkitTransition",
        "transition",
        "OTransition",
        "MozTransition",
        "msTransition",
      ]),
      wo =
        T4 === "webkitTransition" || T4 === "OTransition"
          ? T4 + "End"
          : "transitionend";
    function xo(n) {
      return typeof n == "string" ? document.getElementById(n) : n;
    }
    function M4(n, r) {
      var s = n.style[r] || (n.currentStyle && n.currentStyle[r]);
      if ((!s || s === "auto") && document.defaultView) {
        var u = document.defaultView.getComputedStyle(n, null);
        s = u ? u[r] : null;
      }
      return s === "auto" ? null : s;
    }
    function l2(n, r, s) {
      var u = document.createElement(n);
      return (u.className = r || ""), s && s.appendChild(u), u;
    }
    function g2(n) {
      var r = n.parentNode;
      r && r.removeChild(n);
    }
    function $3(n) {
      for (; n.firstChild; ) n.removeChild(n.firstChild);
    }
    function S1(n) {
      var r = n.parentNode;
      r && r.lastChild !== n && r.appendChild(n);
    }
    function L1(n) {
      var r = n.parentNode;
      r && r.firstChild !== n && r.insertBefore(n, r.firstChild);
    }
    function $0(n, r) {
      if (n.classList !== void 0) return n.classList.contains(r);
      var s = Q3(n);
      return s.length > 0 && new RegExp("(^|\\s)" + r + "(\\s|$)").test(s);
    }
    function X(n, r) {
      if (n.classList !== void 0)
        for (var s = z(r), u = 0, c = s.length; u < c; u++)
          n.classList.add(s[u]);
      else if (!$0(n, r)) {
        var f = Q3(n);
        Q0(n, (f ? f + " " : "") + r);
      }
    }
    function S2(n, r) {
      n.classList !== void 0
        ? n.classList.remove(r)
        : Q0(n, T((" " + Q3(n) + " ").replace(" " + r + " ", " ")));
    }
    function Q0(n, r) {
      n.className.baseVal === void 0
        ? (n.className = r)
        : (n.className.baseVal = r);
    }
    function Q3(n) {
      return (
        n.correspondingElement && (n = n.correspondingElement),
        n.className.baseVal === void 0 ? n.className : n.className.baseVal
      );
    }
    function mt(n, r) {
      "opacity" in n.style
        ? (n.style.opacity = r)
        : "filter" in n.style && il(n, r);
    }
    function il(n, r) {
      var s = !1,
        u = "DXImageTransform.Microsoft.Alpha";
      try {
        s = n.filters.item(u);
      } catch {
        if (r === 1) return;
      }
      (r = Math.round(r * 100)),
        s
          ? ((s.Enabled = r !== 100), (s.Opacity = r))
          : (n.style.filter += " progid:" + u + "(opacity=" + r + ")");
    }
    function G3(n) {
      for (var r = document.documentElement.style, s = 0; s < n.length; s++)
        if (n[s] in r) return n[s];
      return !1;
    }
    function Ge(n, r, s) {
      var u = r || new N(0, 0);
      n.style[V0] =
        (V.ie3d
          ? "translate(" + u.x + "px," + u.y + "px)"
          : "translate3d(" + u.x + "px," + u.y + "px,0)") +
        (s ? " scale(" + s + ")" : "");
    }
    function k2(n, r) {
      (n._leaflet_pos = r),
        V.any3d
          ? Ge(n, r)
          : ((n.style.left = r.x + "px"), (n.style.top = r.y + "px"));
    }
    function Ke(n) {
      return n._leaflet_pos || new N(0, 0);
    }
    var O4, z4, G0;
    if ("onselectstart" in document)
      (O4 = function () {
        Y(window, "selectstart", F2);
      }),
        (z4 = function () {
          f2(window, "selectstart", F2);
        });
    else {
      var N4 = G3([
        "userSelect",
        "WebkitUserSelect",
        "OUserSelect",
        "MozUserSelect",
        "msUserSelect",
      ]);
      (O4 = function () {
        if (N4) {
          var n = document.documentElement.style;
          (G0 = n[N4]), (n[N4] = "none");
        }
      }),
        (z4 = function () {
          N4 && ((document.documentElement.style[N4] = G0), (G0 = void 0));
        });
    }
    function K0() {
      Y(window, "dragstart", F2);
    }
    function q0() {
      f2(window, "dragstart", F2);
    }
    var K3, Y0;
    function X0(n) {
      for (; n.tabIndex === -1; ) n = n.parentNode;
      n.style &&
        (q3(),
        (K3 = n),
        (Y0 = n.style.outlineStyle),
        (n.style.outlineStyle = "none"),
        Y(window, "keydown", q3));
    }
    function q3() {
      K3 &&
        ((K3.style.outlineStyle = Y0),
        (K3 = void 0),
        (Y0 = void 0),
        f2(window, "keydown", q3));
    }
    function Po(n) {
      do n = n.parentNode;
      while ((!n.offsetWidth || !n.offsetHeight) && n !== document.body);
      return n;
    }
    function J0(n) {
      var r = n.getBoundingClientRect();
      return {
        x: r.width / n.offsetWidth || 1,
        y: r.height / n.offsetHeight || 1,
        boundingClientRect: r,
      };
    }
    var rl = {
      __proto__: null,
      TRANSFORM: V0,
      TRANSITION: T4,
      TRANSITION_END: wo,
      get: xo,
      getStyle: M4,
      create: l2,
      remove: g2,
      empty: $3,
      toFront: S1,
      toBack: L1,
      hasClass: $0,
      addClass: X,
      removeClass: S2,
      setClass: Q0,
      getClass: Q3,
      setOpacity: mt,
      testProp: G3,
      setTransform: Ge,
      setPosition: k2,
      getPosition: Ke,
      get disableTextSelection() {
        return O4;
      },
      get enableTextSelection() {
        return z4;
      },
      disableImageDrag: K0,
      enableImageDrag: q0,
      preventOutline: X0,
      restoreOutline: q3,
      getSizedParentNode: Po,
      getScale: J0,
    };
    function Y(n, r, s, u) {
      if (r && typeof r == "object") for (var c in r) ei(n, c, r[c], s);
      else {
        r = z(r);
        for (var f = 0, m = r.length; f < m; f++) ei(n, r[f], s, u);
      }
      return this;
    }
    var Zt = "_leaflet_events";
    function f2(n, r, s, u) {
      if (arguments.length === 1) So(n), delete n[Zt];
      else if (r && typeof r == "object") for (var c in r) ni(n, c, r[c], s);
      else if (((r = z(r)), arguments.length === 2))
        So(n, function (P) {
          return O(r, P) !== -1;
        });
      else for (var f = 0, m = r.length; f < m; f++) ni(n, r[f], s, u);
      return this;
    }
    function So(n, r) {
      for (var s in n[Zt]) {
        var u = s.split(/\d/)[0];
        (!r || r(u)) && ni(n, u, null, null, s);
      }
    }
    var ti = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel",
    };
    function ei(n, r, s, u) {
      var c = r + p(s) + (u ? "_" + p(u) : "");
      if (n[Zt] && n[Zt][c]) return this;
      var f = function (P) {
          return s.call(u || n, P || window.event);
        },
        m = f;
      !V.touchNative && V.pointer && r.indexOf("touch") === 0
        ? (f = Q5(n, r, f))
        : V.touch && r === "dblclick"
        ? (f = el(n, f))
        : "addEventListener" in n
        ? r === "touchstart" ||
          r === "touchmove" ||
          r === "wheel" ||
          r === "mousewheel"
          ? n.addEventListener(
              ti[r] || r,
              f,
              V.passiveEvents ? { passive: !1 } : !1
            )
          : r === "mouseenter" || r === "mouseleave"
          ? ((f = function (P) {
              (P = P || window.event), ri(n, P) && m(P);
            }),
            n.addEventListener(ti[r], f, !1))
          : n.addEventListener(r, m, !1)
        : n.attachEvent("on" + r, f),
        (n[Zt] = n[Zt] || {}),
        (n[Zt][c] = f);
    }
    function ni(n, r, s, u, c) {
      c = c || r + p(s) + (u ? "_" + p(u) : "");
      var f = n[Zt] && n[Zt][c];
      if (!f) return this;
      !V.touchNative && V.pointer && r.indexOf("touch") === 0
        ? G5(n, r, f)
        : V.touch && r === "dblclick"
        ? nl(n, f)
        : "removeEventListener" in n
        ? n.removeEventListener(ti[r] || r, f, !1)
        : n.detachEvent("on" + r, f),
        (n[Zt][c] = null);
    }
    function qe(n) {
      return (
        n.stopPropagation
          ? n.stopPropagation()
          : n.originalEvent
          ? (n.originalEvent._stopped = !0)
          : (n.cancelBubble = !0),
        this
      );
    }
    function ii(n) {
      return ei(n, "wheel", qe), this;
    }
    function I4(n) {
      return (
        Y(n, "mousedown touchstart dblclick contextmenu", qe),
        (n._leaflet_disable_click = !0),
        this
      );
    }
    function F2(n) {
      return n.preventDefault ? n.preventDefault() : (n.returnValue = !1), this;
    }
    function Ye(n) {
      return F2(n), qe(n), this;
    }
    function Lo(n) {
      if (n.composedPath) return n.composedPath();
      for (var r = [], s = n.target; s; ) r.push(s), (s = s.parentNode);
      return r;
    }
    function ko(n, r) {
      if (!r) return new N(n.clientX, n.clientY);
      var s = J0(r),
        u = s.boundingClientRect;
      return new N(
        (n.clientX - u.left) / s.x - r.clientLeft,
        (n.clientY - u.top) / s.y - r.clientTop
      );
    }
    var ol =
      V.linux && V.chrome
        ? window.devicePixelRatio
        : V.mac
        ? window.devicePixelRatio * 3
        : window.devicePixelRatio > 0
        ? 2 * window.devicePixelRatio
        : 1;
    function Co(n) {
      return V.edge
        ? n.wheelDeltaY / 2
        : n.deltaY && n.deltaMode === 0
        ? -n.deltaY / ol
        : n.deltaY && n.deltaMode === 1
        ? -n.deltaY * 20
        : n.deltaY && n.deltaMode === 2
        ? -n.deltaY * 60
        : n.deltaX || n.deltaZ
        ? 0
        : n.wheelDelta
        ? (n.wheelDeltaY || n.wheelDelta) / 2
        : n.detail && Math.abs(n.detail) < 32765
        ? -n.detail * 20
        : n.detail
        ? (n.detail / -32765) * 60
        : 0;
    }
    function ri(n, r) {
      var s = r.relatedTarget;
      if (!s) return !0;
      try {
        for (; s && s !== n; ) s = s.parentNode;
      } catch {
        return !1;
      }
      return s !== n;
    }
    var sl = {
        __proto__: null,
        on: Y,
        off: f2,
        stopPropagation: qe,
        disableScrollPropagation: ii,
        disableClickPropagation: I4,
        preventDefault: F2,
        stop: Ye,
        getPropagationPath: Lo,
        getMousePosition: ko,
        getWheelDelta: Co,
        isExternalTarget: ri,
        addListener: Y,
        removeListener: f2,
      },
      Eo = Xt.extend({
        run: function (n, r, s, u) {
          this.stop(),
            (this._el = n),
            (this._inProgress = !0),
            (this._duration = s || 0.25),
            (this._easeOutPower = 1 / Math.max(u || 0.5, 0.2)),
            (this._startPos = Ke(n)),
            (this._offset = r.subtract(this._startPos)),
            (this._startTime = +new Date()),
            this.fire("start"),
            this._animate();
        },
        stop: function () {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function () {
          (this._animId = h2(this._animate, this)), this._step();
        },
        _step: function (n) {
          var r = +new Date() - this._startTime,
            s = this._duration * 1e3;
          r < s
            ? this._runFrame(this._easeOut(r / s), n)
            : (this._runFrame(1), this._complete());
        },
        _runFrame: function (n, r) {
          var s = this._startPos.add(this._offset.multiplyBy(n));
          r && s._round(), k2(this._el, s), this.fire("step");
        },
        _complete: function () {
          N2(this._animId), (this._inProgress = !1), this.fire("end");
        },
        _easeOut: function (n) {
          return 1 - Math.pow(1 - n, this._easeOutPower);
        },
      }),
      r2 = Xt.extend({
        options: {
          crs: F0,
          center: void 0,
          zoom: void 0,
          minZoom: void 0,
          maxZoom: void 0,
          layers: [],
          maxBounds: void 0,
          renderer: void 0,
          zoomAnimation: !0,
          zoomAnimationThreshold: 4,
          fadeAnimation: !0,
          markerZoomAnimation: !0,
          transform3DLimit: 8388608,
          zoomSnap: 1,
          zoomDelta: 1,
          trackResize: !0,
        },
        initialize: function (n, r) {
          (r = M(this, r)),
            (this._handlers = []),
            (this._layers = {}),
            (this._zoomBoundLayers = {}),
            (this._sizeChanged = !0),
            this._initContainer(n),
            this._initLayout(),
            (this._onResize = h(this._onResize, this)),
            this._initEvents(),
            r.maxBounds && this.setMaxBounds(r.maxBounds),
            r.zoom !== void 0 && (this._zoom = this._limitZoom(r.zoom)),
            r.center &&
              r.zoom !== void 0 &&
              this.setView(q(r.center), r.zoom, { reset: !0 }),
            this.callInitHooks(),
            (this._zoomAnimated =
              T4 && V.any3d && !V.mobileOpera && this.options.zoomAnimation),
            this._zoomAnimated &&
              (this._createAnimProxy(),
              Y(this._proxy, wo, this._catchTransitionEnd, this)),
            this._addLayers(this.options.layers);
        },
        setView: function (n, r, s) {
          if (
            ((r = r === void 0 ? this._zoom : this._limitZoom(r)),
            (n = this._limitCenter(q(n), r, this.options.maxBounds)),
            (s = s || {}),
            this._stop(),
            this._loaded && !s.reset && s !== !0)
          ) {
            s.animate !== void 0 &&
              ((s.zoom = a({ animate: s.animate }, s.zoom)),
              (s.pan = a({ animate: s.animate, duration: s.duration }, s.pan)));
            var u =
              this._zoom !== r
                ? this._tryAnimatedZoom && this._tryAnimatedZoom(n, r, s.zoom)
                : this._tryAnimatedPan(n, s.pan);
            if (u) return clearTimeout(this._sizeTimer), this;
          }
          return this._resetView(n, r, s.pan && s.pan.noMoveStart), this;
        },
        setZoom: function (n, r) {
          return this._loaded
            ? this.setView(this.getCenter(), n, { zoom: r })
            : ((this._zoom = n), this);
        },
        zoomIn: function (n, r) {
          return (
            (n = n || (V.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom + n, r)
          );
        },
        zoomOut: function (n, r) {
          return (
            (n = n || (V.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom - n, r)
          );
        },
        setZoomAround: function (n, r, s) {
          var u = this.getZoomScale(r),
            c = this.getSize().divideBy(2),
            f = n instanceof N ? n : this.latLngToContainerPoint(n),
            m = f.subtract(c).multiplyBy(1 - 1 / u),
            P = this.containerPointToLatLng(c.add(m));
          return this.setView(P, r, { zoom: s });
        },
        _getBoundsCenterZoom: function (n, r) {
          (r = r || {}), (n = n.getBounds ? n.getBounds() : c2(n));
          var s = D(r.paddingTopLeft || r.padding || [0, 0]),
            u = D(r.paddingBottomRight || r.padding || [0, 0]),
            c = this.getBoundsZoom(n, !1, s.add(u));
          if (
            ((c = typeof r.maxZoom == "number" ? Math.min(r.maxZoom, c) : c),
            c === 1 / 0)
          )
            return { center: n.getCenter(), zoom: c };
          var f = u.subtract(s).divideBy(2),
            m = this.project(n.getSouthWest(), c),
            P = this.project(n.getNorthEast(), c),
            C = this.unproject(m.add(P).divideBy(2).add(f), c);
          return { center: C, zoom: c };
        },
        fitBounds: function (n, r) {
          if (((n = c2(n)), !n.isValid()))
            throw new Error("Bounds are not valid.");
          var s = this._getBoundsCenterZoom(n, r);
          return this.setView(s.center, s.zoom, r);
        },
        fitWorld: function (n) {
          return this.fitBounds(
            [
              [-90, -180],
              [90, 180],
            ],
            n
          );
        },
        panTo: function (n, r) {
          return this.setView(n, this._zoom, { pan: r });
        },
        panBy: function (n, r) {
          if (((n = D(n).round()), (r = r || {}), !n.x && !n.y))
            return this.fire("moveend");
          if (r.animate !== !0 && !this.getSize().contains(n))
            return (
              this._resetView(
                this.unproject(this.project(this.getCenter()).add(n)),
                this.getZoom()
              ),
              this
            );
          if (
            (this._panAnim ||
              ((this._panAnim = new Eo()),
              this._panAnim.on(
                {
                  step: this._onPanTransitionStep,
                  end: this._onPanTransitionEnd,
                },
                this
              )),
            r.noMoveStart || this.fire("movestart"),
            r.animate !== !1)
          ) {
            X(this._mapPane, "leaflet-pan-anim");
            var s = this._getMapPanePos().subtract(n).round();
            this._panAnim.run(
              this._mapPane,
              s,
              r.duration || 0.25,
              r.easeLinearity
            );
          } else this._rawPanBy(n), this.fire("move").fire("moveend");
          return this;
        },
        flyTo: function (n, r, s) {
          if (((s = s || {}), s.animate === !1 || !V.any3d))
            return this.setView(n, r, s);
          this._stop();
          var u = this.project(this.getCenter()),
            c = this.project(n),
            f = this.getSize(),
            m = this._zoom;
          (n = q(n)), (r = r === void 0 ? m : r);
          var P = Math.max(f.x, f.y),
            C = P * this.getZoomScale(m, r),
            I = c.distanceTo(u) || 1,
            H = 1.42,
            $ = H * H;
          function t2(C2) {
            var un = C2 ? -1 : 1,
              Gl = C2 ? C : P,
              Kl = C * C - P * P + un * $ * $ * I * I,
              ql = 2 * Gl * $ * I,
              mi = Kl / ql,
              a6 = Math.sqrt(mi * mi + 1) - mi,
              Yl = a6 < 1e-9 ? -18 : Math.log(a6);
            return Yl;
          }
          function G2(C2) {
            return (Math.exp(C2) - Math.exp(-C2)) / 2;
          }
          function I2(C2) {
            return (Math.exp(C2) + Math.exp(-C2)) / 2;
          }
          function vt(C2) {
            return G2(C2) / I2(C2);
          }
          var tt = t2(0);
          function O1(C2) {
            return P * (I2(tt) / I2(tt + H * C2));
          }
          function bl(C2) {
            return (P * (I2(tt) * vt(tt + H * C2) - G2(tt))) / $;
          }
          function Vl(C2) {
            return 1 - Math.pow(1 - C2, 1.5);
          }
          var $l = Date.now(),
            o6 = (t2(1) - tt) / H,
            Ql = s.duration ? 1e3 * s.duration : 1e3 * o6 * 0.8;
          function s6() {
            var C2 = (Date.now() - $l) / Ql,
              un = Vl(C2) * o6;
            C2 <= 1
              ? ((this._flyToFrame = h2(s6, this)),
                this._move(
                  this.unproject(
                    u.add(c.subtract(u).multiplyBy(bl(un) / I)),
                    m
                  ),
                  this.getScaleZoom(P / O1(un), m),
                  { flyTo: !0 }
                ))
              : this._move(n, r)._moveEnd(!0);
          }
          return this._moveStart(!0, s.noMoveStart), s6.call(this), this;
        },
        flyToBounds: function (n, r) {
          var s = this._getBoundsCenterZoom(n, r);
          return this.flyTo(s.center, s.zoom, r);
        },
        setMaxBounds: function (n) {
          return (
            (n = c2(n)),
            this.listens("moveend", this._panInsideMaxBounds) &&
              this.off("moveend", this._panInsideMaxBounds),
            n.isValid()
              ? ((this.options.maxBounds = n),
                this._loaded && this._panInsideMaxBounds(),
                this.on("moveend", this._panInsideMaxBounds))
              : ((this.options.maxBounds = null), this)
          );
        },
        setMinZoom: function (n) {
          var r = this.options.minZoom;
          return (
            (this.options.minZoom = n),
            this._loaded &&
            r !== n &&
            (this.fire("zoomlevelschange"),
            this.getZoom() < this.options.minZoom)
              ? this.setZoom(n)
              : this
          );
        },
        setMaxZoom: function (n) {
          var r = this.options.maxZoom;
          return (
            (this.options.maxZoom = n),
            this._loaded &&
            r !== n &&
            (this.fire("zoomlevelschange"),
            this.getZoom() > this.options.maxZoom)
              ? this.setZoom(n)
              : this
          );
        },
        panInsideBounds: function (n, r) {
          this._enforcingBounds = !0;
          var s = this.getCenter(),
            u = this._limitCenter(s, this._zoom, c2(n));
          return (
            s.equals(u) || this.panTo(u, r), (this._enforcingBounds = !1), this
          );
        },
        panInside: function (n, r) {
          r = r || {};
          var s = D(r.paddingTopLeft || r.padding || [0, 0]),
            u = D(r.paddingBottomRight || r.padding || [0, 0]),
            c = this.project(this.getCenter()),
            f = this.project(n),
            m = this.getPixelBounds(),
            P = o2([m.min.add(s), m.max.subtract(u)]),
            C = P.getSize();
          if (!P.contains(f)) {
            this._enforcingBounds = !0;
            var I = f.subtract(P.getCenter()),
              H = P.extend(f).getSize().subtract(C);
            (c.x += I.x < 0 ? -H.x : H.x),
              (c.y += I.y < 0 ? -H.y : H.y),
              this.panTo(this.unproject(c), r),
              (this._enforcingBounds = !1);
          }
          return this;
        },
        invalidateSize: function (n) {
          if (!this._loaded) return this;
          n = a({ animate: !1, pan: !0 }, n === !0 ? { animate: !0 } : n);
          var r = this.getSize();
          (this._sizeChanged = !0), (this._lastCenter = null);
          var s = this.getSize(),
            u = r.divideBy(2).round(),
            c = s.divideBy(2).round(),
            f = u.subtract(c);
          return !f.x && !f.y
            ? this
            : (n.animate && n.pan
                ? this.panBy(f)
                : (n.pan && this._rawPanBy(f),
                  this.fire("move"),
                  n.debounceMoveend
                    ? (clearTimeout(this._sizeTimer),
                      (this._sizeTimer = setTimeout(
                        h(this.fire, this, "moveend"),
                        200
                      )))
                    : this.fire("moveend")),
              this.fire("resize", { oldSize: r, newSize: s }));
        },
        stop: function () {
          return (
            this.setZoom(this._limitZoom(this._zoom)),
            this.options.zoomSnap || this.fire("viewreset"),
            this._stop()
          );
        },
        locate: function (n) {
          if (
            ((n = this._locateOptions = a({ timeout: 1e4, watch: !1 }, n)),
            !("geolocation" in navigator))
          )
            return (
              this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported.",
              }),
              this
            );
          var r = h(this._handleGeolocationResponse, this),
            s = h(this._handleGeolocationError, this);
          return (
            n.watch
              ? (this._locationWatchId = navigator.geolocation.watchPosition(
                  r,
                  s,
                  n
                ))
              : navigator.geolocation.getCurrentPosition(r, s, n),
            this
          );
        },
        stopLocate: function () {
          return (
            navigator.geolocation &&
              navigator.geolocation.clearWatch &&
              navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this
          );
        },
        _handleGeolocationError: function (n) {
          if (this._container._leaflet_id) {
            var r = n.code,
              s =
                n.message ||
                (r === 1
                  ? "permission denied"
                  : r === 2
                  ? "position unavailable"
                  : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
              this.fire("locationerror", {
                code: r,
                message: "Geolocation error: " + s + ".",
              });
          }
        },
        _handleGeolocationResponse: function (n) {
          if (this._container._leaflet_id) {
            var r = n.coords.latitude,
              s = n.coords.longitude,
              u = new a2(r, s),
              c = u.toBounds(n.coords.accuracy * 2),
              f = this._locateOptions;
            if (f.setView) {
              var m = this.getBoundsZoom(c);
              this.setView(u, f.maxZoom ? Math.min(m, f.maxZoom) : m);
            }
            var P = { latlng: u, bounds: c, timestamp: n.timestamp };
            for (var C in n.coords)
              typeof n.coords[C] == "number" && (P[C] = n.coords[C]);
            this.fire("locationfound", P);
          }
        },
        addHandler: function (n, r) {
          if (!r) return this;
          var s = (this[n] = new r(this));
          return this._handlers.push(s), this.options[n] && s.enable(), this;
        },
        remove: function () {
          if (
            (this._initEvents(!0),
            this.options.maxBounds &&
              this.off("moveend", this._panInsideMaxBounds),
            this._containerId !== this._container._leaflet_id)
          )
            throw new Error(
              "Map container is being reused by another instance"
            );
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch {
            (this._container._leaflet_id = void 0),
              (this._containerId = void 0);
          }
          this._locationWatchId !== void 0 && this.stopLocate(),
            this._stop(),
            g2(this._mapPane),
            this._clearControlPos && this._clearControlPos(),
            this._resizeRequest &&
              (N2(this._resizeRequest), (this._resizeRequest = null)),
            this._clearHandlers(),
            this._loaded && this.fire("unload");
          var n;
          for (n in this._layers) this._layers[n].remove();
          for (n in this._panes) g2(this._panes[n]);
          return (
            (this._layers = []),
            (this._panes = []),
            delete this._mapPane,
            delete this._renderer,
            this
          );
        },
        createPane: function (n, r) {
          var s =
              "leaflet-pane" +
              (n ? " leaflet-" + n.replace("Pane", "") + "-pane" : ""),
            u = l2("div", s, r || this._mapPane);
          return n && (this._panes[n] = u), u;
        },
        getCenter: function () {
          return (
            this._checkIfLoaded(),
            this._lastCenter && !this._moved()
              ? this._lastCenter.clone()
              : this.layerPointToLatLng(this._getCenterLayerPoint())
          );
        },
        getZoom: function () {
          return this._zoom;
        },
        getBounds: function () {
          var n = this.getPixelBounds(),
            r = this.unproject(n.getBottomLeft()),
            s = this.unproject(n.getTopRight());
          return new T2(r, s);
        },
        getMinZoom: function () {
          return this.options.minZoom === void 0
            ? this._layersMinZoom || 0
            : this.options.minZoom;
        },
        getMaxZoom: function () {
          return this.options.maxZoom === void 0
            ? this._layersMaxZoom === void 0
              ? 1 / 0
              : this._layersMaxZoom
            : this.options.maxZoom;
        },
        getBoundsZoom: function (n, r, s) {
          (n = c2(n)), (s = D(s || [0, 0]));
          var u = this.getZoom() || 0,
            c = this.getMinZoom(),
            f = this.getMaxZoom(),
            m = n.getNorthWest(),
            P = n.getSouthEast(),
            C = this.getSize().subtract(s),
            I = o2(this.project(P, u), this.project(m, u)).getSize(),
            H = V.any3d ? this.options.zoomSnap : 1,
            $ = C.x / I.x,
            t2 = C.y / I.y,
            G2 = r ? Math.max($, t2) : Math.min($, t2);
          return (
            (u = this.getScaleZoom(G2, u)),
            H &&
              ((u = Math.round(u / (H / 100)) * (H / 100)),
              (u = r ? Math.ceil(u / H) * H : Math.floor(u / H) * H)),
            Math.max(c, Math.min(f, u))
          );
        },
        getSize: function () {
          return (
            (!this._size || this._sizeChanged) &&
              ((this._size = new N(
                this._container.clientWidth || 0,
                this._container.clientHeight || 0
              )),
              (this._sizeChanged = !1)),
            this._size.clone()
          );
        },
        getPixelBounds: function (n, r) {
          var s = this._getTopLeftPoint(n, r);
          return new Q(s, s.add(this.getSize()));
        },
        getPixelOrigin: function () {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        getPixelWorldBounds: function (n) {
          return this.options.crs.getProjectedBounds(
            n === void 0 ? this.getZoom() : n
          );
        },
        getPane: function (n) {
          return typeof n == "string" ? this._panes[n] : n;
        },
        getPanes: function () {
          return this._panes;
        },
        getContainer: function () {
          return this._container;
        },
        getZoomScale: function (n, r) {
          var s = this.options.crs;
          return (r = r === void 0 ? this._zoom : r), s.scale(n) / s.scale(r);
        },
        getScaleZoom: function (n, r) {
          var s = this.options.crs;
          r = r === void 0 ? this._zoom : r;
          var u = s.zoom(n * s.scale(r));
          return isNaN(u) ? 1 / 0 : u;
        },
        project: function (n, r) {
          return (
            (r = r === void 0 ? this._zoom : r),
            this.options.crs.latLngToPoint(q(n), r)
          );
        },
        unproject: function (n, r) {
          return (
            (r = r === void 0 ? this._zoom : r),
            this.options.crs.pointToLatLng(D(n), r)
          );
        },
        layerPointToLatLng: function (n) {
          var r = D(n).add(this.getPixelOrigin());
          return this.unproject(r);
        },
        latLngToLayerPoint: function (n) {
          var r = this.project(q(n))._round();
          return r._subtract(this.getPixelOrigin());
        },
        wrapLatLng: function (n) {
          return this.options.crs.wrapLatLng(q(n));
        },
        wrapLatLngBounds: function (n) {
          return this.options.crs.wrapLatLngBounds(c2(n));
        },
        distance: function (n, r) {
          return this.options.crs.distance(q(n), q(r));
        },
        containerPointToLayerPoint: function (n) {
          return D(n).subtract(this._getMapPanePos());
        },
        layerPointToContainerPoint: function (n) {
          return D(n).add(this._getMapPanePos());
        },
        containerPointToLatLng: function (n) {
          var r = this.containerPointToLayerPoint(D(n));
          return this.layerPointToLatLng(r);
        },
        latLngToContainerPoint: function (n) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(q(n)));
        },
        mouseEventToContainerPoint: function (n) {
          return ko(n, this._container);
        },
        mouseEventToLayerPoint: function (n) {
          return this.containerPointToLayerPoint(
            this.mouseEventToContainerPoint(n)
          );
        },
        mouseEventToLatLng: function (n) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(n));
        },
        _initContainer: function (n) {
          var r = (this._container = xo(n));
          if (r) {
            if (r._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          Y(r, "scroll", this._onScroll, this), (this._containerId = p(r));
        },
        _initLayout: function () {
          var n = this._container;
          (this._fadeAnimated = this.options.fadeAnimation && V.any3d),
            X(
              n,
              "leaflet-container" +
                (V.touch ? " leaflet-touch" : "") +
                (V.retina ? " leaflet-retina" : "") +
                (V.ielt9 ? " leaflet-oldie" : "") +
                (V.safari ? " leaflet-safari" : "") +
                (this._fadeAnimated ? " leaflet-fade-anim" : "")
            );
          var r = M4(n, "position");
          r !== "absolute" &&
            r !== "relative" &&
            r !== "fixed" &&
            r !== "sticky" &&
            (n.style.position = "relative"),
            this._initPanes(),
            this._initControlPos && this._initControlPos();
        },
        _initPanes: function () {
          var n = (this._panes = {});
          (this._paneRenderers = {}),
            (this._mapPane = this.createPane("mapPane", this._container)),
            k2(this._mapPane, new N(0, 0)),
            this.createPane("tilePane"),
            this.createPane("overlayPane"),
            this.createPane("shadowPane"),
            this.createPane("markerPane"),
            this.createPane("tooltipPane"),
            this.createPane("popupPane"),
            this.options.markerZoomAnimation ||
              (X(n.markerPane, "leaflet-zoom-hide"),
              X(n.shadowPane, "leaflet-zoom-hide"));
        },
        _resetView: function (n, r, s) {
          k2(this._mapPane, new N(0, 0));
          var u = !this._loaded;
          (this._loaded = !0),
            (r = this._limitZoom(r)),
            this.fire("viewprereset");
          var c = this._zoom !== r;
          this._moveStart(c, s)._move(n, r)._moveEnd(c),
            this.fire("viewreset"),
            u && this.fire("load");
        },
        _moveStart: function (n, r) {
          return n && this.fire("zoomstart"), r || this.fire("movestart"), this;
        },
        _move: function (n, r, s, u) {
          r === void 0 && (r = this._zoom);
          var c = this._zoom !== r;
          return (
            (this._zoom = r),
            (this._lastCenter = n),
            (this._pixelOrigin = this._getNewPixelOrigin(n)),
            u
              ? s && s.pinch && this.fire("zoom", s)
              : ((c || (s && s.pinch)) && this.fire("zoom", s),
                this.fire("move", s)),
            this
          );
        },
        _moveEnd: function (n) {
          return n && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function () {
          return (
            N2(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
          );
        },
        _rawPanBy: function (n) {
          k2(this._mapPane, this._getMapPanePos().subtract(n));
        },
        _getZoomSpan: function () {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function () {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function () {
          if (!this._loaded) throw new Error("Set map center and zoom first.");
        },
        _initEvents: function (n) {
          (this._targets = {}), (this._targets[p(this._container)] = this);
          var r = n ? f2 : Y;
          r(
            this._container,
            "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",
            this._handleDOMEvent,
            this
          ),
            this.options.trackResize &&
              r(window, "resize", this._onResize, this),
            V.any3d &&
              this.options.transform3DLimit &&
              (n ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function () {
          N2(this._resizeRequest),
            (this._resizeRequest = h2(function () {
              this.invalidateSize({ debounceMoveend: !0 });
            }, this));
        },
        _onScroll: function () {
          (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
        },
        _onMoveEnd: function () {
          var n = this._getMapPanePos();
          Math.max(Math.abs(n.x), Math.abs(n.y)) >=
            this.options.transform3DLimit &&
            this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function (n, r) {
          for (
            var s = [],
              u,
              c = r === "mouseout" || r === "mouseover",
              f = n.target || n.srcElement,
              m = !1;
            f;

          ) {
            if (
              ((u = this._targets[p(f)]),
              u &&
                (r === "click" || r === "preclick") &&
                this._draggableMoved(u))
            ) {
              m = !0;
              break;
            }
            if (
              (u && u.listens(r, !0) && ((c && !ri(f, n)) || (s.push(u), c))) ||
              f === this._container
            )
              break;
            f = f.parentNode;
          }
          return (
            !s.length && !m && !c && this.listens(r, !0) && (s = [this]), s
          );
        },
        _isClickDisabled: function (n) {
          for (; n && n !== this._container; ) {
            if (n._leaflet_disable_click) return !0;
            n = n.parentNode;
          }
        },
        _handleDOMEvent: function (n) {
          var r = n.target || n.srcElement;
          if (
            !(
              !this._loaded ||
              r._leaflet_disable_events ||
              (n.type === "click" && this._isClickDisabled(r))
            )
          ) {
            var s = n.type;
            s === "mousedown" && X0(r), this._fireDOMEvent(n, s);
          }
        },
        _mouseEvents: [
          "click",
          "dblclick",
          "mouseover",
          "mouseout",
          "contextmenu",
        ],
        _fireDOMEvent: function (n, r, s) {
          if (n.type === "click") {
            var u = a({}, n);
            (u.type = "preclick"), this._fireDOMEvent(u, u.type, s);
          }
          var c = this._findEventTargets(n, r);
          if (s) {
            for (var f = [], m = 0; m < s.length; m++)
              s[m].listens(r, !0) && f.push(s[m]);
            c = f.concat(c);
          }
          if (c.length) {
            r === "contextmenu" && F2(n);
            var P = c[0],
              C = { originalEvent: n };
            if (
              n.type !== "keypress" &&
              n.type !== "keydown" &&
              n.type !== "keyup"
            ) {
              var I = P.getLatLng && (!P._radius || P._radius <= 10);
              (C.containerPoint = I
                ? this.latLngToContainerPoint(P.getLatLng())
                : this.mouseEventToContainerPoint(n)),
                (C.layerPoint = this.containerPointToLayerPoint(
                  C.containerPoint
                )),
                (C.latlng = I
                  ? P.getLatLng()
                  : this.layerPointToLatLng(C.layerPoint));
            }
            for (m = 0; m < c.length; m++)
              if (
                (c[m].fire(r, C, !0),
                C.originalEvent._stopped ||
                  (c[m].options.bubblingMouseEvents === !1 &&
                    O(this._mouseEvents, r) !== -1))
              )
                return;
          }
        },
        _draggableMoved: function (n) {
          return (
            (n = n.dragging && n.dragging.enabled() ? n : this),
            (n.dragging && n.dragging.moved()) ||
              (this.boxZoom && this.boxZoom.moved())
          );
        },
        _clearHandlers: function () {
          for (var n = 0, r = this._handlers.length; n < r; n++)
            this._handlers[n].disable();
        },
        whenReady: function (n, r) {
          return (
            this._loaded
              ? n.call(r || this, { target: this })
              : this.on("load", n, r),
            this
          );
        },
        _getMapPanePos: function () {
          return Ke(this._mapPane) || new N(0, 0);
        },
        _moved: function () {
          var n = this._getMapPanePos();
          return n && !n.equals([0, 0]);
        },
        _getTopLeftPoint: function (n, r) {
          var s =
            n && r !== void 0
              ? this._getNewPixelOrigin(n, r)
              : this.getPixelOrigin();
          return s.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function (n, r) {
          var s = this.getSize()._divideBy(2);
          return this.project(n, r)
            ._subtract(s)
            ._add(this._getMapPanePos())
            ._round();
        },
        _latLngToNewLayerPoint: function (n, r, s) {
          var u = this._getNewPixelOrigin(s, r);
          return this.project(n, r)._subtract(u);
        },
        _latLngBoundsToNewLayerBounds: function (n, r, s) {
          var u = this._getNewPixelOrigin(s, r);
          return o2([
            this.project(n.getSouthWest(), r)._subtract(u),
            this.project(n.getNorthWest(), r)._subtract(u),
            this.project(n.getSouthEast(), r)._subtract(u),
            this.project(n.getNorthEast(), r)._subtract(u),
          ]);
        },
        _getCenterLayerPoint: function () {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        _getCenterOffset: function (n) {
          return this.latLngToLayerPoint(n).subtract(
            this._getCenterLayerPoint()
          );
        },
        _limitCenter: function (n, r, s) {
          if (!s) return n;
          var u = this.project(n, r),
            c = this.getSize().divideBy(2),
            f = new Q(u.subtract(c), u.add(c)),
            m = this._getBoundsOffset(f, s, r);
          return Math.abs(m.x) <= 1 && Math.abs(m.y) <= 1
            ? n
            : this.unproject(u.add(m), r);
        },
        _limitOffset: function (n, r) {
          if (!r) return n;
          var s = this.getPixelBounds(),
            u = new Q(s.min.add(n), s.max.add(n));
          return n.add(this._getBoundsOffset(u, r));
        },
        _getBoundsOffset: function (n, r, s) {
          var u = o2(
              this.project(r.getNorthEast(), s),
              this.project(r.getSouthWest(), s)
            ),
            c = u.min.subtract(n.min),
            f = u.max.subtract(n.max),
            m = this._rebound(c.x, -f.x),
            P = this._rebound(c.y, -f.y);
          return new N(m, P);
        },
        _rebound: function (n, r) {
          return n + r > 0
            ? Math.round(n - r) / 2
            : Math.max(0, Math.ceil(n)) - Math.max(0, Math.floor(r));
        },
        _limitZoom: function (n) {
          var r = this.getMinZoom(),
            s = this.getMaxZoom(),
            u = V.any3d ? this.options.zoomSnap : 1;
          return u && (n = Math.round(n / u) * u), Math.max(r, Math.min(s, n));
        },
        _onPanTransitionStep: function () {
          this.fire("move");
        },
        _onPanTransitionEnd: function () {
          S2(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function (n, r) {
          var s = this._getCenterOffset(n)._trunc();
          return (r && r.animate) !== !0 && !this.getSize().contains(s)
            ? !1
            : (this.panBy(s, r), !0);
        },
        _createAnimProxy: function () {
          var n = (this._proxy = l2(
            "div",
            "leaflet-proxy leaflet-zoom-animated"
          ));
          this._panes.mapPane.appendChild(n),
            this.on(
              "zoomanim",
              function (r) {
                var s = V0,
                  u = this._proxy.style[s];
                Ge(
                  this._proxy,
                  this.project(r.center, r.zoom),
                  this.getZoomScale(r.zoom, 1)
                ),
                  u === this._proxy.style[s] &&
                    this._animatingZoom &&
                    this._onZoomTransitionEnd();
              },
              this
            ),
            this.on("load moveend", this._animMoveEnd, this),
            this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function () {
          g2(this._proxy),
            this.off("load moveend", this._animMoveEnd, this),
            delete this._proxy;
        },
        _animMoveEnd: function () {
          var n = this.getCenter(),
            r = this.getZoom();
          Ge(this._proxy, this.project(n, r), this.getZoomScale(r, 1));
        },
        _catchTransitionEnd: function (n) {
          this._animatingZoom &&
            n.propertyName.indexOf("transform") >= 0 &&
            this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function () {
          return !this._container.getElementsByClassName(
            "leaflet-zoom-animated"
          ).length;
        },
        _tryAnimatedZoom: function (n, r, s) {
          if (this._animatingZoom) return !0;
          if (
            ((s = s || {}),
            !this._zoomAnimated ||
              s.animate === !1 ||
              this._nothingToAnimate() ||
              Math.abs(r - this._zoom) > this.options.zoomAnimationThreshold)
          )
            return !1;
          var u = this.getZoomScale(r),
            c = this._getCenterOffset(n)._divideBy(1 - 1 / u);
          return s.animate !== !0 && !this.getSize().contains(c)
            ? !1
            : (h2(function () {
                this._moveStart(!0, s.noMoveStart || !1)._animateZoom(n, r, !0);
              }, this),
              !0);
        },
        _animateZoom: function (n, r, s, u) {
          this._mapPane &&
            (s &&
              ((this._animatingZoom = !0),
              (this._animateToCenter = n),
              (this._animateToZoom = r),
              X(this._mapPane, "leaflet-zoom-anim")),
            this.fire("zoomanim", { center: n, zoom: r, noUpdate: u }),
            this._tempFireZoomEvent ||
              (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            setTimeout(h(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function () {
          this._animatingZoom &&
            (this._mapPane && S2(this._mapPane, "leaflet-zoom-anim"),
            (this._animatingZoom = !1),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            this._tempFireZoomEvent && this.fire("zoom"),
            delete this._tempFireZoomEvent,
            this.fire("move"),
            this._moveEnd(!0));
        },
      });
    function al(n, r) {
      return new r2(n, r);
    }
    var Tt = pt.extend({
        options: { position: "topright" },
        initialize: function (n) {
          M(this, n);
        },
        getPosition: function () {
          return this.options.position;
        },
        setPosition: function (n) {
          var r = this._map;
          return (
            r && r.removeControl(this),
            (this.options.position = n),
            r && r.addControl(this),
            this
          );
        },
        getContainer: function () {
          return this._container;
        },
        addTo: function (n) {
          this.remove(), (this._map = n);
          var r = (this._container = this.onAdd(n)),
            s = this.getPosition(),
            u = n._controlCorners[s];
          return (
            X(r, "leaflet-control"),
            s.indexOf("bottom") !== -1
              ? u.insertBefore(r, u.firstChild)
              : u.appendChild(r),
            this._map.on("unload", this.remove, this),
            this
          );
        },
        remove: function () {
          return this._map
            ? (g2(this._container),
              this.onRemove && this.onRemove(this._map),
              this._map.off("unload", this.remove, this),
              (this._map = null),
              this)
            : this;
        },
        _refocusOnMap: function (n) {
          this._map &&
            n &&
            n.screenX > 0 &&
            n.screenY > 0 &&
            this._map.getContainer().focus();
        },
      }),
      R4 = function (n) {
        return new Tt(n);
      };
    r2.include({
      addControl: function (n) {
        return n.addTo(this), this;
      },
      removeControl: function (n) {
        return n.remove(), this;
      },
      _initControlPos: function () {
        var n = (this._controlCorners = {}),
          r = "leaflet-",
          s = (this._controlContainer = l2(
            "div",
            r + "control-container",
            this._container
          ));
        function u(c, f) {
          var m = r + c + " " + r + f;
          n[c + f] = l2("div", m, s);
        }
        u("top", "left"),
          u("top", "right"),
          u("bottom", "left"),
          u("bottom", "right");
      },
      _clearControlPos: function () {
        for (var n in this._controlCorners) g2(this._controlCorners[n]);
        g2(this._controlContainer),
          delete this._controlCorners,
          delete this._controlContainer;
      },
    });
    var To = Tt.extend({
        options: {
          collapsed: !0,
          position: "topright",
          autoZIndex: !0,
          hideSingleBase: !1,
          sortLayers: !1,
          sortFunction: function (n, r, s, u) {
            return s < u ? -1 : u < s ? 1 : 0;
          },
        },
        initialize: function (n, r, s) {
          M(this, s),
            (this._layerControlInputs = []),
            (this._layers = []),
            (this._lastZIndex = 0),
            (this._handlingClick = !1),
            (this._preventClick = !1);
          for (var u in n) this._addLayer(n[u], u);
          for (u in r) this._addLayer(r[u], u, !0);
        },
        onAdd: function (n) {
          this._initLayout(),
            this._update(),
            (this._map = n),
            n.on("zoomend", this._checkDisabledLayers, this);
          for (var r = 0; r < this._layers.length; r++)
            this._layers[r].layer.on("add remove", this._onLayerChange, this);
          return this._container;
        },
        addTo: function (n) {
          return Tt.prototype.addTo.call(this, n), this._expandIfNotCollapsed();
        },
        onRemove: function () {
          this._map.off("zoomend", this._checkDisabledLayers, this);
          for (var n = 0; n < this._layers.length; n++)
            this._layers[n].layer.off("add remove", this._onLayerChange, this);
        },
        addBaseLayer: function (n, r) {
          return this._addLayer(n, r), this._map ? this._update() : this;
        },
        addOverlay: function (n, r) {
          return this._addLayer(n, r, !0), this._map ? this._update() : this;
        },
        removeLayer: function (n) {
          n.off("add remove", this._onLayerChange, this);
          var r = this._getLayer(p(n));
          return (
            r && this._layers.splice(this._layers.indexOf(r), 1),
            this._map ? this._update() : this
          );
        },
        expand: function () {
          X(this._container, "leaflet-control-layers-expanded"),
            (this._section.style.height = null);
          var n = this._map.getSize().y - (this._container.offsetTop + 50);
          return (
            n < this._section.clientHeight
              ? (X(this._section, "leaflet-control-layers-scrollbar"),
                (this._section.style.height = n + "px"))
              : S2(this._section, "leaflet-control-layers-scrollbar"),
            this._checkDisabledLayers(),
            this
          );
        },
        collapse: function () {
          return S2(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function () {
          var n = "leaflet-control-layers",
            r = (this._container = l2("div", n)),
            s = this.options.collapsed;
          r.setAttribute("aria-haspopup", !0), I4(r), ii(r);
          var u = (this._section = l2("section", n + "-list"));
          s &&
            (this._map.on("click", this.collapse, this),
            Y(
              r,
              { mouseenter: this._expandSafely, mouseleave: this.collapse },
              this
            ));
          var c = (this._layersLink = l2("a", n + "-toggle", r));
          (c.href = "#"),
            (c.title = "Layers"),
            c.setAttribute("role", "button"),
            Y(
              c,
              {
                keydown: function (f) {
                  f.keyCode === 13 && this._expandSafely();
                },
                click: function (f) {
                  F2(f), this._expandSafely();
                },
              },
              this
            ),
            s || this.expand(),
            (this._baseLayersList = l2("div", n + "-base", u)),
            (this._separator = l2("div", n + "-separator", u)),
            (this._overlaysList = l2("div", n + "-overlays", u)),
            r.appendChild(u);
        },
        _getLayer: function (n) {
          for (var r = 0; r < this._layers.length; r++)
            if (this._layers[r] && p(this._layers[r].layer) === n)
              return this._layers[r];
        },
        _addLayer: function (n, r, s) {
          this._map && n.on("add remove", this._onLayerChange, this),
            this._layers.push({ layer: n, name: r, overlay: s }),
            this.options.sortLayers &&
              this._layers.sort(
                h(function (u, c) {
                  return this.options.sortFunction(
                    u.layer,
                    c.layer,
                    u.name,
                    c.name
                  );
                }, this)
              ),
            this.options.autoZIndex &&
              n.setZIndex &&
              (this._lastZIndex++, n.setZIndex(this._lastZIndex)),
            this._expandIfNotCollapsed();
        },
        _update: function () {
          if (!this._container) return this;
          $3(this._baseLayersList),
            $3(this._overlaysList),
            (this._layerControlInputs = []);
          var n,
            r,
            s,
            u,
            c = 0;
          for (s = 0; s < this._layers.length; s++)
            (u = this._layers[s]),
              this._addItem(u),
              (r = r || u.overlay),
              (n = n || !u.overlay),
              (c += u.overlay ? 0 : 1);
          return (
            this.options.hideSingleBase &&
              ((n = n && c > 1),
              (this._baseLayersList.style.display = n ? "" : "none")),
            (this._separator.style.display = r && n ? "" : "none"),
            this
          );
        },
        _onLayerChange: function (n) {
          this._handlingClick || this._update();
          var r = this._getLayer(p(n.target)),
            s = r.overlay
              ? n.type === "add"
                ? "overlayadd"
                : "overlayremove"
              : n.type === "add"
              ? "baselayerchange"
              : null;
          s && this._map.fire(s, r);
        },
        _createRadioElement: function (n, r) {
          var s =
              '<input type="radio" class="leaflet-control-layers-selector" name="' +
              n +
              '"' +
              (r ? ' checked="checked"' : "") +
              "/>",
            u = document.createElement("div");
          return (u.innerHTML = s), u.firstChild;
        },
        _addItem: function (n) {
          var r = document.createElement("label"),
            s = this._map.hasLayer(n.layer),
            u;
          n.overlay
            ? ((u = document.createElement("input")),
              (u.type = "checkbox"),
              (u.className = "leaflet-control-layers-selector"),
              (u.defaultChecked = s))
            : (u = this._createRadioElement(
                "leaflet-base-layers_" + p(this),
                s
              )),
            this._layerControlInputs.push(u),
            (u.layerId = p(n.layer)),
            Y(u, "click", this._onInputClick, this);
          var c = document.createElement("span");
          c.innerHTML = " " + n.name;
          var f = document.createElement("span");
          r.appendChild(f), f.appendChild(u), f.appendChild(c);
          var m = n.overlay ? this._overlaysList : this._baseLayersList;
          return m.appendChild(r), this._checkDisabledLayers(), r;
        },
        _onInputClick: function () {
          if (!this._preventClick) {
            var n = this._layerControlInputs,
              r,
              s,
              u = [],
              c = [];
            this._handlingClick = !0;
            for (var f = n.length - 1; f >= 0; f--)
              (r = n[f]),
                (s = this._getLayer(r.layerId).layer),
                r.checked ? u.push(s) : r.checked || c.push(s);
            for (f = 0; f < c.length; f++)
              this._map.hasLayer(c[f]) && this._map.removeLayer(c[f]);
            for (f = 0; f < u.length; f++)
              this._map.hasLayer(u[f]) || this._map.addLayer(u[f]);
            (this._handlingClick = !1), this._refocusOnMap();
          }
        },
        _checkDisabledLayers: function () {
          for (
            var n = this._layerControlInputs,
              r,
              s,
              u = this._map.getZoom(),
              c = n.length - 1;
            c >= 0;
            c--
          )
            (r = n[c]),
              (s = this._getLayer(r.layerId).layer),
              (r.disabled =
                (s.options.minZoom !== void 0 && u < s.options.minZoom) ||
                (s.options.maxZoom !== void 0 && u > s.options.maxZoom));
        },
        _expandIfNotCollapsed: function () {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function () {
          var n = this._section;
          (this._preventClick = !0), Y(n, "click", F2), this.expand();
          var r = this;
          setTimeout(function () {
            f2(n, "click", F2), (r._preventClick = !1);
          });
        },
      }),
      ll = function (n, r, s) {
        return new To(n, r, s);
      },
      oi = Tt.extend({
        options: {
          position: "topleft",
          zoomInText: '<span aria-hidden="true">+</span>',
          zoomInTitle: "Zoom in",
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          zoomOutTitle: "Zoom out",
        },
        onAdd: function (n) {
          var r = "leaflet-control-zoom",
            s = l2("div", r + " leaflet-bar"),
            u = this.options;
          return (
            (this._zoomInButton = this._createButton(
              u.zoomInText,
              u.zoomInTitle,
              r + "-in",
              s,
              this._zoomIn
            )),
            (this._zoomOutButton = this._createButton(
              u.zoomOutText,
              u.zoomOutTitle,
              r + "-out",
              s,
              this._zoomOut
            )),
            this._updateDisabled(),
            n.on("zoomend zoomlevelschange", this._updateDisabled, this),
            s
          );
        },
        onRemove: function (n) {
          n.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function () {
          return (this._disabled = !0), this._updateDisabled(), this;
        },
        enable: function () {
          return (this._disabled = !1), this._updateDisabled(), this;
        },
        _zoomIn: function (n) {
          !this._disabled &&
            this._map._zoom < this._map.getMaxZoom() &&
            this._map.zoomIn(
              this._map.options.zoomDelta * (n.shiftKey ? 3 : 1)
            );
        },
        _zoomOut: function (n) {
          !this._disabled &&
            this._map._zoom > this._map.getMinZoom() &&
            this._map.zoomOut(
              this._map.options.zoomDelta * (n.shiftKey ? 3 : 1)
            );
        },
        _createButton: function (n, r, s, u, c) {
          var f = l2("a", s, u);
          return (
            (f.innerHTML = n),
            (f.href = "#"),
            (f.title = r),
            f.setAttribute("role", "button"),
            f.setAttribute("aria-label", r),
            I4(f),
            Y(f, "click", Ye),
            Y(f, "click", c, this),
            Y(f, "click", this._refocusOnMap, this),
            f
          );
        },
        _updateDisabled: function () {
          var n = this._map,
            r = "leaflet-disabled";
          S2(this._zoomInButton, r),
            S2(this._zoomOutButton, r),
            this._zoomInButton.setAttribute("aria-disabled", "false"),
            this._zoomOutButton.setAttribute("aria-disabled", "false"),
            (this._disabled || n._zoom === n.getMinZoom()) &&
              (X(this._zoomOutButton, r),
              this._zoomOutButton.setAttribute("aria-disabled", "true")),
            (this._disabled || n._zoom === n.getMaxZoom()) &&
              (X(this._zoomInButton, r),
              this._zoomInButton.setAttribute("aria-disabled", "true"));
        },
      });
    r2.mergeOptions({ zoomControl: !0 }),
      r2.addInitHook(function () {
        this.options.zoomControl &&
          ((this.zoomControl = new oi()), this.addControl(this.zoomControl));
      });
    var ul = function (n) {
        return new oi(n);
      },
      Mo = Tt.extend({
        options: {
          position: "bottomleft",
          maxWidth: 100,
          metric: !0,
          imperial: !0,
        },
        onAdd: function (n) {
          var r = "leaflet-control-scale",
            s = l2("div", r),
            u = this.options;
          return (
            this._addScales(u, r + "-line", s),
            n.on(u.updateWhenIdle ? "moveend" : "move", this._update, this),
            n.whenReady(this._update, this),
            s
          );
        },
        onRemove: function (n) {
          n.off(
            this.options.updateWhenIdle ? "moveend" : "move",
            this._update,
            this
          );
        },
        _addScales: function (n, r, s) {
          n.metric && (this._mScale = l2("div", r, s)),
            n.imperial && (this._iScale = l2("div", r, s));
        },
        _update: function () {
          var n = this._map,
            r = n.getSize().y / 2,
            s = n.distance(
              n.containerPointToLatLng([0, r]),
              n.containerPointToLatLng([this.options.maxWidth, r])
            );
          this._updateScales(s);
        },
        _updateScales: function (n) {
          this.options.metric && n && this._updateMetric(n),
            this.options.imperial && n && this._updateImperial(n);
        },
        _updateMetric: function (n) {
          var r = this._getRoundNum(n),
            s = r < 1e3 ? r + " m" : r / 1e3 + " km";
          this._updateScale(this._mScale, s, r / n);
        },
        _updateImperial: function (n) {
          var r = n * 3.2808399,
            s,
            u,
            c;
          r > 5280
            ? ((s = r / 5280),
              (u = this._getRoundNum(s)),
              this._updateScale(this._iScale, u + " mi", u / s))
            : ((c = this._getRoundNum(r)),
              this._updateScale(this._iScale, c + " ft", c / r));
        },
        _updateScale: function (n, r, s) {
          (n.style.width = Math.round(this.options.maxWidth * s) + "px"),
            (n.innerHTML = r);
        },
        _getRoundNum: function (n) {
          var r = Math.pow(10, (Math.floor(n) + "").length - 1),
            s = n / r;
          return (
            (s = s >= 10 ? 10 : s >= 5 ? 5 : s >= 3 ? 3 : s >= 2 ? 2 : 1), r * s
          );
        },
      }),
      cl = function (n) {
        return new Mo(n);
      },
      hl =
        '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
      si = Tt.extend({
        options: {
          position: "bottomright",
          prefix:
            '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
            (V.inlineSvg ? hl + " " : "") +
            "Leaflet</a>",
        },
        initialize: function (n) {
          M(this, n), (this._attributions = {});
        },
        onAdd: function (n) {
          (n.attributionControl = this),
            (this._container = l2("div", "leaflet-control-attribution")),
            I4(this._container);
          for (var r in n._layers)
            n._layers[r].getAttribution &&
              this.addAttribution(n._layers[r].getAttribution());
          return (
            this._update(),
            n.on("layeradd", this._addAttribution, this),
            this._container
          );
        },
        onRemove: function (n) {
          n.off("layeradd", this._addAttribution, this);
        },
        _addAttribution: function (n) {
          n.layer.getAttribution &&
            (this.addAttribution(n.layer.getAttribution()),
            n.layer.once(
              "remove",
              function () {
                this.removeAttribution(n.layer.getAttribution());
              },
              this
            ));
        },
        setPrefix: function (n) {
          return (this.options.prefix = n), this._update(), this;
        },
        addAttribution: function (n) {
          return n
            ? (this._attributions[n] || (this._attributions[n] = 0),
              this._attributions[n]++,
              this._update(),
              this)
            : this;
        },
        removeAttribution: function (n) {
          return n
            ? (this._attributions[n] &&
                (this._attributions[n]--, this._update()),
              this)
            : this;
        },
        _update: function () {
          if (this._map) {
            var n = [];
            for (var r in this._attributions)
              this._attributions[r] && n.push(r);
            var s = [];
            this.options.prefix && s.push(this.options.prefix),
              n.length && s.push(n.join(", ")),
              (this._container.innerHTML = s.join(
                ' <span aria-hidden="true">|</span> '
              ));
          }
        },
      });
    r2.mergeOptions({ attributionControl: !0 }),
      r2.addInitHook(function () {
        this.options.attributionControl && new si().addTo(this);
      });
    var fl = function (n) {
      return new si(n);
    };
    (Tt.Layers = To),
      (Tt.Zoom = oi),
      (Tt.Scale = Mo),
      (Tt.Attribution = si),
      (R4.layers = ll),
      (R4.zoom = ul),
      (R4.scale = cl),
      (R4.attribution = fl);
    var Ut = pt.extend({
      initialize: function (n) {
        this._map = n;
      },
      enable: function () {
        return this._enabled
          ? this
          : ((this._enabled = !0), this.addHooks(), this);
      },
      disable: function () {
        return this._enabled
          ? ((this._enabled = !1), this.removeHooks(), this)
          : this;
      },
      enabled: function () {
        return !!this._enabled;
      },
    });
    Ut.addTo = function (n, r) {
      return n.addHandler(r, this), this;
    };
    var dl = { Events: B2 },
      Oo = V.touch ? "touchstart mousedown" : "mousedown",
      _e = Xt.extend({
        options: { clickTolerance: 3 },
        initialize: function (n, r, s, u) {
          M(this, u),
            (this._element = n),
            (this._dragStartTarget = r || n),
            (this._preventOutline = s);
        },
        enable: function () {
          this._enabled ||
            (Y(this._dragStartTarget, Oo, this._onDown, this),
            (this._enabled = !0));
        },
        disable: function () {
          this._enabled &&
            (_e._dragging === this && this.finishDrag(!0),
            f2(this._dragStartTarget, Oo, this._onDown, this),
            (this._enabled = !1),
            (this._moved = !1));
        },
        _onDown: function (n) {
          if (
            this._enabled &&
            ((this._moved = !1), !$0(this._element, "leaflet-zoom-anim"))
          ) {
            if (n.touches && n.touches.length !== 1) {
              _e._dragging === this && this.finishDrag();
              return;
            }
            if (
              !(
                _e._dragging ||
                n.shiftKey ||
                (n.which !== 1 && n.button !== 1 && !n.touches)
              ) &&
              ((_e._dragging = this),
              this._preventOutline && X0(this._element),
              K0(),
              O4(),
              !this._moving)
            ) {
              this.fire("down");
              var r = n.touches ? n.touches[0] : n,
                s = Po(this._element);
              (this._startPoint = new N(r.clientX, r.clientY)),
                (this._startPos = Ke(this._element)),
                (this._parentScale = J0(s));
              var u = n.type === "mousedown";
              Y(document, u ? "mousemove" : "touchmove", this._onMove, this),
                Y(
                  document,
                  u ? "mouseup" : "touchend touchcancel",
                  this._onUp,
                  this
                );
            }
          }
        },
        _onMove: function (n) {
          if (this._enabled) {
            if (n.touches && n.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var r = n.touches && n.touches.length === 1 ? n.touches[0] : n,
              s = new N(r.clientX, r.clientY)._subtract(this._startPoint);
            (!s.x && !s.y) ||
              Math.abs(s.x) + Math.abs(s.y) < this.options.clickTolerance ||
              ((s.x /= this._parentScale.x),
              (s.y /= this._parentScale.y),
              F2(n),
              this._moved ||
                (this.fire("dragstart"),
                (this._moved = !0),
                X(document.body, "leaflet-dragging"),
                (this._lastTarget = n.target || n.srcElement),
                window.SVGElementInstance &&
                  this._lastTarget instanceof window.SVGElementInstance &&
                  (this._lastTarget = this._lastTarget.correspondingUseElement),
                X(this._lastTarget, "leaflet-drag-target")),
              (this._newPos = this._startPos.add(s)),
              (this._moving = !0),
              (this._lastEvent = n),
              this._updatePosition());
          }
        },
        _updatePosition: function () {
          var n = { originalEvent: this._lastEvent };
          this.fire("predrag", n),
            k2(this._element, this._newPos),
            this.fire("drag", n);
        },
        _onUp: function () {
          this._enabled && this.finishDrag();
        },
        finishDrag: function (n) {
          S2(document.body, "leaflet-dragging"),
            this._lastTarget &&
              (S2(this._lastTarget, "leaflet-drag-target"),
              (this._lastTarget = null)),
            f2(document, "mousemove touchmove", this._onMove, this),
            f2(document, "mouseup touchend touchcancel", this._onUp, this),
            q0(),
            z4();
          var r = this._moved && this._moving;
          (this._moving = !1),
            (_e._dragging = !1),
            r &&
              this.fire("dragend", {
                noInertia: n,
                distance: this._newPos.distanceTo(this._startPos),
              });
        },
      });
    function zo(n, r, s) {
      var u,
        c = [1, 4, 2, 8],
        f,
        m,
        P,
        C,
        I,
        H,
        $,
        t2;
      for (f = 0, H = n.length; f < H; f++) n[f]._code = Xe(n[f], r);
      for (P = 0; P < 4; P++) {
        for ($ = c[P], u = [], f = 0, H = n.length, m = H - 1; f < H; m = f++)
          (C = n[f]),
            (I = n[m]),
            C._code & $
              ? I._code & $ ||
                ((t2 = Y3(I, C, $, r, s)), (t2._code = Xe(t2, r)), u.push(t2))
              : (I._code & $ &&
                  ((t2 = Y3(I, C, $, r, s)),
                  (t2._code = Xe(t2, r)),
                  u.push(t2)),
                u.push(C));
        n = u;
      }
      return n;
    }
    function No(n, r) {
      var s, u, c, f, m, P, C, I, H;
      if (!n || n.length === 0) throw new Error("latlngs not passed");
      _t(n) ||
        (console.warn("latlngs are not flat! Only the first ring will be used"),
        (n = n[0]));
      var $ = q([0, 0]),
        t2 = c2(n),
        G2 =
          t2.getNorthWest().distanceTo(t2.getSouthWest()) *
          t2.getNorthEast().distanceTo(t2.getNorthWest());
      G2 < 1700 && ($ = ai(n));
      var I2 = n.length,
        vt = [];
      for (s = 0; s < I2; s++) {
        var tt = q(n[s]);
        vt.push(r.project(q([tt.lat - $.lat, tt.lng - $.lng])));
      }
      for (P = C = I = 0, s = 0, u = I2 - 1; s < I2; u = s++)
        (c = vt[s]),
          (f = vt[u]),
          (m = c.y * f.x - f.y * c.x),
          (C += (c.x + f.x) * m),
          (I += (c.y + f.y) * m),
          (P += m * 3);
      P === 0 ? (H = vt[0]) : (H = [C / P, I / P]);
      var O1 = r.unproject(D(H));
      return q([O1.lat + $.lat, O1.lng + $.lng]);
    }
    function ai(n) {
      for (var r = 0, s = 0, u = 0, c = 0; c < n.length; c++) {
        var f = q(n[c]);
        (r += f.lat), (s += f.lng), u++;
      }
      return q([r / u, s / u]);
    }
    var pl = {
      __proto__: null,
      clipPolygon: zo,
      polygonCenter: No,
      centroid: ai,
    };
    function Io(n, r) {
      if (!r || !n.length) return n.slice();
      var s = r * r;
      return (n = vl(n, s)), (n = _l(n, s)), n;
    }
    function Ro(n, r, s) {
      return Math.sqrt(A4(n, r, s, !0));
    }
    function ml(n, r, s) {
      return A4(n, r, s);
    }
    function _l(n, r) {
      var s = n.length,
        u = typeof Uint8Array != void 0 + "" ? Uint8Array : Array,
        c = new u(s);
      (c[0] = c[s - 1] = 1), li(n, c, r, 0, s - 1);
      var f,
        m = [];
      for (f = 0; f < s; f++) c[f] && m.push(n[f]);
      return m;
    }
    function li(n, r, s, u, c) {
      var f = 0,
        m,
        P,
        C;
      for (P = u + 1; P <= c - 1; P++)
        (C = A4(n[P], n[u], n[c], !0)), C > f && ((m = P), (f = C));
      f > s && ((r[m] = 1), li(n, r, s, u, m), li(n, r, s, m, c));
    }
    function vl(n, r) {
      for (var s = [n[0]], u = 1, c = 0, f = n.length; u < f; u++)
        gl(n[u], n[c]) > r && (s.push(n[u]), (c = u));
      return c < f - 1 && s.push(n[f - 1]), s;
    }
    var Ao;
    function Do(n, r, s, u, c) {
      var f = u ? Ao : Xe(n, s),
        m = Xe(r, s),
        P,
        C,
        I;
      for (Ao = m; ; ) {
        if (!(f | m)) return [n, r];
        if (f & m) return !1;
        (P = f || m),
          (C = Y3(n, r, P, s, c)),
          (I = Xe(C, s)),
          P === f ? ((n = C), (f = I)) : ((r = C), (m = I));
      }
    }
    function Y3(n, r, s, u, c) {
      var f = r.x - n.x,
        m = r.y - n.y,
        P = u.min,
        C = u.max,
        I,
        H;
      return (
        s & 8
          ? ((I = n.x + (f * (C.y - n.y)) / m), (H = C.y))
          : s & 4
          ? ((I = n.x + (f * (P.y - n.y)) / m), (H = P.y))
          : s & 2
          ? ((I = C.x), (H = n.y + (m * (C.x - n.x)) / f))
          : s & 1 && ((I = P.x), (H = n.y + (m * (P.x - n.x)) / f)),
        new N(I, H, c)
      );
    }
    function Xe(n, r) {
      var s = 0;
      return (
        n.x < r.min.x ? (s |= 1) : n.x > r.max.x && (s |= 2),
        n.y < r.min.y ? (s |= 4) : n.y > r.max.y && (s |= 8),
        s
      );
    }
    function gl(n, r) {
      var s = r.x - n.x,
        u = r.y - n.y;
      return s * s + u * u;
    }
    function A4(n, r, s, u) {
      var c = r.x,
        f = r.y,
        m = s.x - c,
        P = s.y - f,
        C = m * m + P * P,
        I;
      return (
        C > 0 &&
          ((I = ((n.x - c) * m + (n.y - f) * P) / C),
          I > 1
            ? ((c = s.x), (f = s.y))
            : I > 0 && ((c += m * I), (f += P * I))),
        (m = n.x - c),
        (P = n.y - f),
        u ? m * m + P * P : new N(c, f)
      );
    }
    function _t(n) {
      return !y(n[0]) || (typeof n[0][0] != "object" && typeof n[0][0] < "u");
    }
    function Bo(n) {
      return (
        console.warn(
          "Deprecated use of _flat, please use L.LineUtil.isFlat instead."
        ),
        _t(n)
      );
    }
    function Fo(n, r) {
      var s, u, c, f, m, P, C, I;
      if (!n || n.length === 0) throw new Error("latlngs not passed");
      _t(n) ||
        (console.warn("latlngs are not flat! Only the first ring will be used"),
        (n = n[0]));
      var H = q([0, 0]),
        $ = c2(n),
        t2 =
          $.getNorthWest().distanceTo($.getSouthWest()) *
          $.getNorthEast().distanceTo($.getNorthWest());
      t2 < 1700 && (H = ai(n));
      var G2 = n.length,
        I2 = [];
      for (s = 0; s < G2; s++) {
        var vt = q(n[s]);
        I2.push(r.project(q([vt.lat - H.lat, vt.lng - H.lng])));
      }
      for (s = 0, u = 0; s < G2 - 1; s++) u += I2[s].distanceTo(I2[s + 1]) / 2;
      if (u === 0) I = I2[0];
      else
        for (s = 0, f = 0; s < G2 - 1; s++)
          if (
            ((m = I2[s]),
            (P = I2[s + 1]),
            (c = m.distanceTo(P)),
            (f += c),
            f > u)
          ) {
            (C = (f - u) / c),
              (I = [P.x - C * (P.x - m.x), P.y - C * (P.y - m.y)]);
            break;
          }
      var tt = r.unproject(D(I));
      return q([tt.lat + H.lat, tt.lng + H.lng]);
    }
    var yl = {
        __proto__: null,
        simplify: Io,
        pointToSegmentDistance: Ro,
        closestPointOnSegment: ml,
        clipSegment: Do,
        _getEdgeIntersection: Y3,
        _getBitCode: Xe,
        _sqClosestPointOnSegment: A4,
        isFlat: _t,
        _flat: Bo,
        polylineCenter: Fo,
      },
      ui = {
        project: function (n) {
          return new N(n.lng, n.lat);
        },
        unproject: function (n) {
          return new a2(n.y, n.x);
        },
        bounds: new Q([-180, -90], [180, 90]),
      },
      ci = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new Q(
          [-2003750834279e-5, -1549657073972e-5],
          [2003750834279e-5, 1876465623138e-5]
        ),
        project: function (n) {
          var r = Math.PI / 180,
            s = this.R,
            u = n.lat * r,
            c = this.R_MINOR / s,
            f = Math.sqrt(1 - c * c),
            m = f * Math.sin(u),
            P =
              Math.tan(Math.PI / 4 - u / 2) /
              Math.pow((1 - m) / (1 + m), f / 2);
          return (
            (u = -s * Math.log(Math.max(P, 1e-10))), new N(n.lng * r * s, u)
          );
        },
        unproject: function (n) {
          for (
            var r = 180 / Math.PI,
              s = this.R,
              u = this.R_MINOR / s,
              c = Math.sqrt(1 - u * u),
              f = Math.exp(-n.y / s),
              m = Math.PI / 2 - 2 * Math.atan(f),
              P = 0,
              C = 0.1,
              I;
            P < 15 && Math.abs(C) > 1e-7;
            P++
          )
            (I = c * Math.sin(m)),
              (I = Math.pow((1 - I) / (1 + I), c / 2)),
              (C = Math.PI / 2 - 2 * Math.atan(f * I) - m),
              (m += C);
          return new a2(m * r, (n.x * r) / s);
        },
      },
      wl = { __proto__: null, LonLat: ui, Mercator: ci, SphericalMercator: D0 },
      xl = a({}, me, {
        code: "EPSG:3395",
        projection: ci,
        transformation: (function () {
          var n = 0.5 / (Math.PI * ci.R);
          return C4(n, 0.5, -n, 0.5);
        })(),
      }),
      jo = a({}, me, {
        code: "EPSG:4326",
        projection: ui,
        transformation: C4(1 / 180, 1, -1 / 180, 0.5),
      }),
      Pl = a({}, J2, {
        projection: ui,
        transformation: C4(1, 0, -1, 0),
        scale: function (n) {
          return Math.pow(2, n);
        },
        zoom: function (n) {
          return Math.log(n) / Math.LN2;
        },
        distance: function (n, r) {
          var s = r.lng - n.lng,
            u = r.lat - n.lat;
          return Math.sqrt(s * s + u * u);
        },
        infinite: !0,
      });
    (J2.Earth = me),
      (J2.EPSG3395 = xl),
      (J2.EPSG3857 = F0),
      (J2.EPSG900913 = T5),
      (J2.EPSG4326 = jo),
      (J2.Simple = Pl);
    var Mt = Xt.extend({
      options: {
        pane: "overlayPane",
        attribution: null,
        bubblingMouseEvents: !0,
      },
      addTo: function (n) {
        return n.addLayer(this), this;
      },
      remove: function () {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      removeFrom: function (n) {
        return n && n.removeLayer(this), this;
      },
      getPane: function (n) {
        return this._map.getPane(n ? this.options[n] || n : this.options.pane);
      },
      addInteractiveTarget: function (n) {
        return (this._map._targets[p(n)] = this), this;
      },
      removeInteractiveTarget: function (n) {
        return delete this._map._targets[p(n)], this;
      },
      getAttribution: function () {
        return this.options.attribution;
      },
      _layerAdd: function (n) {
        var r = n.target;
        if (r.hasLayer(this)) {
          if (
            ((this._map = r),
            (this._zoomAnimated = r._zoomAnimated),
            this.getEvents)
          ) {
            var s = this.getEvents();
            r.on(s, this),
              this.once(
                "remove",
                function () {
                  r.off(s, this);
                },
                this
              );
          }
          this.onAdd(r), this.fire("add"), r.fire("layeradd", { layer: this });
        }
      },
    });
    r2.include({
      addLayer: function (n) {
        if (!n._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var r = p(n);
        return this._layers[r]
          ? this
          : ((this._layers[r] = n),
            (n._mapToAdd = this),
            n.beforeAdd && n.beforeAdd(this),
            this.whenReady(n._layerAdd, n),
            this);
      },
      removeLayer: function (n) {
        var r = p(n);
        return this._layers[r]
          ? (this._loaded && n.onRemove(this),
            delete this._layers[r],
            this._loaded &&
              (this.fire("layerremove", { layer: n }), n.fire("remove")),
            (n._map = n._mapToAdd = null),
            this)
          : this;
      },
      hasLayer: function (n) {
        return p(n) in this._layers;
      },
      eachLayer: function (n, r) {
        for (var s in this._layers) n.call(r, this._layers[s]);
        return this;
      },
      _addLayers: function (n) {
        n = n ? (y(n) ? n : [n]) : [];
        for (var r = 0, s = n.length; r < s; r++) this.addLayer(n[r]);
      },
      _addZoomLimit: function (n) {
        (!isNaN(n.options.maxZoom) || !isNaN(n.options.minZoom)) &&
          ((this._zoomBoundLayers[p(n)] = n), this._updateZoomLevels());
      },
      _removeZoomLimit: function (n) {
        var r = p(n);
        this._zoomBoundLayers[r] &&
          (delete this._zoomBoundLayers[r], this._updateZoomLevels());
      },
      _updateZoomLevels: function () {
        var n = 1 / 0,
          r = -1 / 0,
          s = this._getZoomSpan();
        for (var u in this._zoomBoundLayers) {
          var c = this._zoomBoundLayers[u].options;
          (n = c.minZoom === void 0 ? n : Math.min(n, c.minZoom)),
            (r = c.maxZoom === void 0 ? r : Math.max(r, c.maxZoom));
        }
        (this._layersMaxZoom = r === -1 / 0 ? void 0 : r),
          (this._layersMinZoom = n === 1 / 0 ? void 0 : n),
          s !== this._getZoomSpan() && this.fire("zoomlevelschange"),
          this.options.maxZoom === void 0 &&
            this._layersMaxZoom &&
            this.getZoom() > this._layersMaxZoom &&
            this.setZoom(this._layersMaxZoom),
          this.options.minZoom === void 0 &&
            this._layersMinZoom &&
            this.getZoom() < this._layersMinZoom &&
            this.setZoom(this._layersMinZoom);
      },
    });
    var k1 = Mt.extend({
        initialize: function (n, r) {
          M(this, r), (this._layers = {});
          var s, u;
          if (n) for (s = 0, u = n.length; s < u; s++) this.addLayer(n[s]);
        },
        addLayer: function (n) {
          var r = this.getLayerId(n);
          return (
            (this._layers[r] = n), this._map && this._map.addLayer(n), this
          );
        },
        removeLayer: function (n) {
          var r = n in this._layers ? n : this.getLayerId(n);
          return (
            this._map &&
              this._layers[r] &&
              this._map.removeLayer(this._layers[r]),
            delete this._layers[r],
            this
          );
        },
        hasLayer: function (n) {
          var r = typeof n == "number" ? n : this.getLayerId(n);
          return r in this._layers;
        },
        clearLayers: function () {
          return this.eachLayer(this.removeLayer, this);
        },
        invoke: function (n) {
          var r = Array.prototype.slice.call(arguments, 1),
            s,
            u;
          for (s in this._layers)
            (u = this._layers[s]), u[n] && u[n].apply(u, r);
          return this;
        },
        onAdd: function (n) {
          this.eachLayer(n.addLayer, n);
        },
        onRemove: function (n) {
          this.eachLayer(n.removeLayer, n);
        },
        eachLayer: function (n, r) {
          for (var s in this._layers) n.call(r, this._layers[s]);
          return this;
        },
        getLayer: function (n) {
          return this._layers[n];
        },
        getLayers: function () {
          var n = [];
          return this.eachLayer(n.push, n), n;
        },
        setZIndex: function (n) {
          return this.invoke("setZIndex", n);
        },
        getLayerId: function (n) {
          return p(n);
        },
      }),
      Sl = function (n, r) {
        return new k1(n, r);
      },
      Jt = k1.extend({
        addLayer: function (n) {
          return this.hasLayer(n)
            ? this
            : (n.addEventParent(this),
              k1.prototype.addLayer.call(this, n),
              this.fire("layeradd", { layer: n }));
        },
        removeLayer: function (n) {
          return this.hasLayer(n)
            ? (n in this._layers && (n = this._layers[n]),
              n.removeEventParent(this),
              k1.prototype.removeLayer.call(this, n),
              this.fire("layerremove", { layer: n }))
            : this;
        },
        setStyle: function (n) {
          return this.invoke("setStyle", n);
        },
        bringToFront: function () {
          return this.invoke("bringToFront");
        },
        bringToBack: function () {
          return this.invoke("bringToBack");
        },
        getBounds: function () {
          var n = new T2();
          for (var r in this._layers) {
            var s = this._layers[r];
            n.extend(s.getBounds ? s.getBounds() : s.getLatLng());
          }
          return n;
        },
      }),
      Ll = function (n, r) {
        return new Jt(n, r);
      },
      C1 = pt.extend({
        options: {
          popupAnchor: [0, 0],
          tooltipAnchor: [0, 0],
          crossOrigin: !1,
        },
        initialize: function (n) {
          M(this, n);
        },
        createIcon: function (n) {
          return this._createIcon("icon", n);
        },
        createShadow: function (n) {
          return this._createIcon("shadow", n);
        },
        _createIcon: function (n, r) {
          var s = this._getIconUrl(n);
          if (!s) {
            if (n === "icon")
              throw new Error(
                "iconUrl not set in Icon options (see the docs)."
              );
            return null;
          }
          var u = this._createImg(s, r && r.tagName === "IMG" ? r : null);
          return (
            this._setIconStyles(u, n),
            (this.options.crossOrigin || this.options.crossOrigin === "") &&
              (u.crossOrigin =
                this.options.crossOrigin === !0
                  ? ""
                  : this.options.crossOrigin),
            u
          );
        },
        _setIconStyles: function (n, r) {
          var s = this.options,
            u = s[r + "Size"];
          typeof u == "number" && (u = [u, u]);
          var c = D(u),
            f = D(
              (r === "shadow" && s.shadowAnchor) ||
                s.iconAnchor ||
                (c && c.divideBy(2, !0))
            );
          (n.className = "leaflet-marker-" + r + " " + (s.className || "")),
            f &&
              ((n.style.marginLeft = -f.x + "px"),
              (n.style.marginTop = -f.y + "px")),
            c && ((n.style.width = c.x + "px"), (n.style.height = c.y + "px"));
        },
        _createImg: function (n, r) {
          return (r = r || document.createElement("img")), (r.src = n), r;
        },
        _getIconUrl: function (n) {
          return (
            (V.retina && this.options[n + "RetinaUrl"]) ||
            this.options[n + "Url"]
          );
        },
      });
    function kl(n) {
      return new C1(n);
    }
    var D4 = C1.extend({
        options: {
          iconUrl: "marker-icon.png",
          iconRetinaUrl: "marker-icon-2x.png",
          shadowUrl: "marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41],
        },
        _getIconUrl: function (n) {
          return (
            typeof D4.imagePath != "string" &&
              (D4.imagePath = this._detectIconPath()),
            (this.options.imagePath || D4.imagePath) +
              C1.prototype._getIconUrl.call(this, n)
          );
        },
        _stripUrl: function (n) {
          var r = function (s, u, c) {
            var f = u.exec(s);
            return f && f[c];
          };
          return (
            (n = r(n, /^url\((['"])?(.+)\1\)$/, 2)),
            n && r(n, /^(.*)marker-icon\.png$/, 1)
          );
        },
        _detectIconPath: function () {
          var n = l2("div", "leaflet-default-icon-path", document.body),
            r = M4(n, "background-image") || M4(n, "backgroundImage");
          if ((document.body.removeChild(n), (r = this._stripUrl(r)), r))
            return r;
          var s = document.querySelector('link[href$="leaflet.css"]');
          return s ? s.href.substring(0, s.href.length - 11 - 1) : "";
        },
      }),
      Zo = Ut.extend({
        initialize: function (n) {
          this._marker = n;
        },
        addHooks: function () {
          var n = this._marker._icon;
          this._draggable || (this._draggable = new _e(n, n, !0)),
            this._draggable
              .on(
                {
                  dragstart: this._onDragStart,
                  predrag: this._onPreDrag,
                  drag: this._onDrag,
                  dragend: this._onDragEnd,
                },
                this
              )
              .enable(),
            X(n, "leaflet-marker-draggable");
        },
        removeHooks: function () {
          this._draggable
            .off(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            )
            .disable(),
            this._marker._icon &&
              S2(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function () {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function (n) {
          var r = this._marker,
            s = r._map,
            u = this._marker.options.autoPanSpeed,
            c = this._marker.options.autoPanPadding,
            f = Ke(r._icon),
            m = s.getPixelBounds(),
            P = s.getPixelOrigin(),
            C = o2(m.min._subtract(P).add(c), m.max._subtract(P).subtract(c));
          if (!C.contains(f)) {
            var I = D(
              (Math.max(C.max.x, f.x) - C.max.x) / (m.max.x - C.max.x) -
                (Math.min(C.min.x, f.x) - C.min.x) / (m.min.x - C.min.x),
              (Math.max(C.max.y, f.y) - C.max.y) / (m.max.y - C.max.y) -
                (Math.min(C.min.y, f.y) - C.min.y) / (m.min.y - C.min.y)
            ).multiplyBy(u);
            s.panBy(I, { animate: !1 }),
              this._draggable._newPos._add(I),
              this._draggable._startPos._add(I),
              k2(r._icon, this._draggable._newPos),
              this._onDrag(n),
              (this._panRequest = h2(this._adjustPan.bind(this, n)));
          }
        },
        _onDragStart: function () {
          (this._oldLatLng = this._marker.getLatLng()),
            this._marker.closePopup && this._marker.closePopup(),
            this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function (n) {
          this._marker.options.autoPan &&
            (N2(this._panRequest),
            (this._panRequest = h2(this._adjustPan.bind(this, n))));
        },
        _onDrag: function (n) {
          var r = this._marker,
            s = r._shadow,
            u = Ke(r._icon),
            c = r._map.layerPointToLatLng(u);
          s && k2(s, u),
            (r._latlng = c),
            (n.latlng = c),
            (n.oldLatLng = this._oldLatLng),
            r.fire("move", n).fire("drag", n);
        },
        _onDragEnd: function (n) {
          N2(this._panRequest),
            delete this._oldLatLng,
            this._marker.fire("moveend").fire("dragend", n);
        },
      }),
      X3 = Mt.extend({
        options: {
          icon: new D4(),
          interactive: !0,
          keyboard: !0,
          title: "",
          alt: "Marker",
          zIndexOffset: 0,
          opacity: 1,
          riseOnHover: !1,
          riseOffset: 250,
          pane: "markerPane",
          shadowPane: "shadowPane",
          bubblingMouseEvents: !1,
          autoPanOnFocus: !0,
          draggable: !1,
          autoPan: !1,
          autoPanPadding: [50, 50],
          autoPanSpeed: 10,
        },
        initialize: function (n, r) {
          M(this, r), (this._latlng = q(n));
        },
        onAdd: function (n) {
          (this._zoomAnimated =
            this._zoomAnimated && n.options.markerZoomAnimation),
            this._zoomAnimated && n.on("zoomanim", this._animateZoom, this),
            this._initIcon(),
            this.update();
        },
        onRemove: function (n) {
          this.dragging &&
            this.dragging.enabled() &&
            ((this.options.draggable = !0), this.dragging.removeHooks()),
            delete this.dragging,
            this._zoomAnimated && n.off("zoomanim", this._animateZoom, this),
            this._removeIcon(),
            this._removeShadow();
        },
        getEvents: function () {
          return { zoom: this.update, viewreset: this.update };
        },
        getLatLng: function () {
          return this._latlng;
        },
        setLatLng: function (n) {
          var r = this._latlng;
          return (
            (this._latlng = q(n)),
            this.update(),
            this.fire("move", { oldLatLng: r, latlng: this._latlng })
          );
        },
        setZIndexOffset: function (n) {
          return (this.options.zIndexOffset = n), this.update();
        },
        getIcon: function () {
          return this.options.icon;
        },
        setIcon: function (n) {
          return (
            (this.options.icon = n),
            this._map && (this._initIcon(), this.update()),
            this._popup && this.bindPopup(this._popup, this._popup.options),
            this
          );
        },
        getElement: function () {
          return this._icon;
        },
        update: function () {
          if (this._icon && this._map) {
            var n = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(n);
          }
          return this;
        },
        _initIcon: function () {
          var n = this.options,
            r = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
            s = n.icon.createIcon(this._icon),
            u = !1;
          s !== this._icon &&
            (this._icon && this._removeIcon(),
            (u = !0),
            n.title && (s.title = n.title),
            s.tagName === "IMG" && (s.alt = n.alt || "")),
            X(s, r),
            n.keyboard &&
              ((s.tabIndex = "0"), s.setAttribute("role", "button")),
            (this._icon = s),
            n.riseOnHover &&
              this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex,
              }),
            this.options.autoPanOnFocus &&
              Y(s, "focus", this._panOnFocus, this);
          var c = n.icon.createShadow(this._shadow),
            f = !1;
          c !== this._shadow && (this._removeShadow(), (f = !0)),
            c && (X(c, r), (c.alt = "")),
            (this._shadow = c),
            n.opacity < 1 && this._updateOpacity(),
            u && this.getPane().appendChild(this._icon),
            this._initInteraction(),
            c && f && this.getPane(n.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function () {
          this.options.riseOnHover &&
            this.off({
              mouseover: this._bringToFront,
              mouseout: this._resetZIndex,
            }),
            this.options.autoPanOnFocus &&
              f2(this._icon, "focus", this._panOnFocus, this),
            g2(this._icon),
            this.removeInteractiveTarget(this._icon),
            (this._icon = null);
        },
        _removeShadow: function () {
          this._shadow && g2(this._shadow), (this._shadow = null);
        },
        _setPos: function (n) {
          this._icon && k2(this._icon, n),
            this._shadow && k2(this._shadow, n),
            (this._zIndex = n.y + this.options.zIndexOffset),
            this._resetZIndex();
        },
        _updateZIndex: function (n) {
          this._icon && (this._icon.style.zIndex = this._zIndex + n);
        },
        _animateZoom: function (n) {
          var r = this._map
            ._latLngToNewLayerPoint(this._latlng, n.zoom, n.center)
            .round();
          this._setPos(r);
        },
        _initInteraction: function () {
          if (
            this.options.interactive &&
            (X(this._icon, "leaflet-interactive"),
            this.addInteractiveTarget(this._icon),
            Zo)
          ) {
            var n = this.options.draggable;
            this.dragging &&
              ((n = this.dragging.enabled()), this.dragging.disable()),
              (this.dragging = new Zo(this)),
              n && this.dragging.enable();
          }
        },
        setOpacity: function (n) {
          return (
            (this.options.opacity = n), this._map && this._updateOpacity(), this
          );
        },
        _updateOpacity: function () {
          var n = this.options.opacity;
          this._icon && mt(this._icon, n), this._shadow && mt(this._shadow, n);
        },
        _bringToFront: function () {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function () {
          this._updateZIndex(0);
        },
        _panOnFocus: function () {
          var n = this._map;
          if (n) {
            var r = this.options.icon.options,
              s = r.iconSize ? D(r.iconSize) : D(0, 0),
              u = r.iconAnchor ? D(r.iconAnchor) : D(0, 0);
            n.panInside(this._latlng, {
              paddingTopLeft: u,
              paddingBottomRight: s.subtract(u),
            });
          }
        },
        _getPopupAnchor: function () {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function () {
          return this.options.icon.options.tooltipAnchor;
        },
      });
    function Cl(n, r) {
      return new X3(n, r);
    }
    var ve = Mt.extend({
        options: {
          stroke: !0,
          color: "#3388ff",
          weight: 3,
          opacity: 1,
          lineCap: "round",
          lineJoin: "round",
          dashArray: null,
          dashOffset: null,
          fill: !1,
          fillColor: null,
          fillOpacity: 0.2,
          fillRule: "evenodd",
          interactive: !0,
          bubblingMouseEvents: !0,
        },
        beforeAdd: function (n) {
          this._renderer = n.getRenderer(this);
        },
        onAdd: function () {
          this._renderer._initPath(this),
            this._reset(),
            this._renderer._addPath(this);
        },
        onRemove: function () {
          this._renderer._removePath(this);
        },
        redraw: function () {
          return this._map && this._renderer._updatePath(this), this;
        },
        setStyle: function (n) {
          return (
            M(this, n),
            this._renderer &&
              (this._renderer._updateStyle(this),
              this.options.stroke &&
                n &&
                Object.prototype.hasOwnProperty.call(n, "weight") &&
                this._updateBounds()),
            this
          );
        },
        bringToFront: function () {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        bringToBack: function () {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function () {
          return this._path;
        },
        _reset: function () {
          this._project(), this._update();
        },
        _clickTolerance: function () {
          return (
            (this.options.stroke ? this.options.weight / 2 : 0) +
            (this._renderer.options.tolerance || 0)
          );
        },
      }),
      J3 = ve.extend({
        options: { fill: !0, radius: 10 },
        initialize: function (n, r) {
          M(this, r),
            (this._latlng = q(n)),
            (this._radius = this.options.radius);
        },
        setLatLng: function (n) {
          var r = this._latlng;
          return (
            (this._latlng = q(n)),
            this.redraw(),
            this.fire("move", { oldLatLng: r, latlng: this._latlng })
          );
        },
        getLatLng: function () {
          return this._latlng;
        },
        setRadius: function (n) {
          return (this.options.radius = this._radius = n), this.redraw();
        },
        getRadius: function () {
          return this._radius;
        },
        setStyle: function (n) {
          var r = (n && n.radius) || this._radius;
          return ve.prototype.setStyle.call(this, n), this.setRadius(r), this;
        },
        _project: function () {
          (this._point = this._map.latLngToLayerPoint(this._latlng)),
            this._updateBounds();
        },
        _updateBounds: function () {
          var n = this._radius,
            r = this._radiusY || n,
            s = this._clickTolerance(),
            u = [n + s, r + s];
          this._pxBounds = new Q(this._point.subtract(u), this._point.add(u));
        },
        _update: function () {
          this._map && this._updatePath();
        },
        _updatePath: function () {
          this._renderer._updateCircle(this);
        },
        _empty: function () {
          return (
            this._radius && !this._renderer._bounds.intersects(this._pxBounds)
          );
        },
        _containsPoint: function (n) {
          return (
            n.distanceTo(this._point) <= this._radius + this._clickTolerance()
          );
        },
      });
    function El(n, r) {
      return new J3(n, r);
    }
    var hi = J3.extend({
      initialize: function (n, r, s) {
        if (
          (typeof r == "number" && (r = a({}, s, { radius: r })),
          M(this, r),
          (this._latlng = q(n)),
          isNaN(this.options.radius))
        )
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      setRadius: function (n) {
        return (this._mRadius = n), this.redraw();
      },
      getRadius: function () {
        return this._mRadius;
      },
      getBounds: function () {
        var n = [this._radius, this._radiusY || this._radius];
        return new T2(
          this._map.layerPointToLatLng(this._point.subtract(n)),
          this._map.layerPointToLatLng(this._point.add(n))
        );
      },
      setStyle: ve.prototype.setStyle,
      _project: function () {
        var n = this._latlng.lng,
          r = this._latlng.lat,
          s = this._map,
          u = s.options.crs;
        if (u.distance === me.distance) {
          var c = Math.PI / 180,
            f = this._mRadius / me.R / c,
            m = s.project([r + f, n]),
            P = s.project([r - f, n]),
            C = m.add(P).divideBy(2),
            I = s.unproject(C).lat,
            H =
              Math.acos(
                (Math.cos(f * c) - Math.sin(r * c) * Math.sin(I * c)) /
                  (Math.cos(r * c) * Math.cos(I * c))
              ) / c;
          (isNaN(H) || H === 0) && (H = f / Math.cos((Math.PI / 180) * r)),
            (this._point = C.subtract(s.getPixelOrigin())),
            (this._radius = isNaN(H) ? 0 : C.x - s.project([I, n - H]).x),
            (this._radiusY = C.y - m.y);
        } else {
          var $ = u.unproject(
            u.project(this._latlng).subtract([this._mRadius, 0])
          );
          (this._point = s.latLngToLayerPoint(this._latlng)),
            (this._radius = this._point.x - s.latLngToLayerPoint($).x);
        }
        this._updateBounds();
      },
    });
    function Tl(n, r, s) {
      return new hi(n, r, s);
    }
    var te = ve.extend({
      options: { smoothFactor: 1, noClip: !1 },
      initialize: function (n, r) {
        M(this, r), this._setLatLngs(n);
      },
      getLatLngs: function () {
        return this._latlngs;
      },
      setLatLngs: function (n) {
        return this._setLatLngs(n), this.redraw();
      },
      isEmpty: function () {
        return !this._latlngs.length;
      },
      closestLayerPoint: function (n) {
        for (
          var r = 1 / 0, s = null, u = A4, c, f, m = 0, P = this._parts.length;
          m < P;
          m++
        )
          for (var C = this._parts[m], I = 1, H = C.length; I < H; I++) {
            (c = C[I - 1]), (f = C[I]);
            var $ = u(n, c, f, !0);
            $ < r && ((r = $), (s = u(n, c, f)));
          }
        return s && (s.distance = Math.sqrt(r)), s;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return Fo(this._defaultShape(), this._map.options.crs);
      },
      getBounds: function () {
        return this._bounds;
      },
      addLatLng: function (n, r) {
        return (
          (r = r || this._defaultShape()),
          (n = q(n)),
          r.push(n),
          this._bounds.extend(n),
          this.redraw()
        );
      },
      _setLatLngs: function (n) {
        (this._bounds = new T2()), (this._latlngs = this._convertLatLngs(n));
      },
      _defaultShape: function () {
        return _t(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      _convertLatLngs: function (n) {
        for (var r = [], s = _t(n), u = 0, c = n.length; u < c; u++)
          s
            ? ((r[u] = q(n[u])), this._bounds.extend(r[u]))
            : (r[u] = this._convertLatLngs(n[u]));
        return r;
      },
      _project: function () {
        var n = new Q();
        (this._rings = []),
          this._projectLatlngs(this._latlngs, this._rings, n),
          this._bounds.isValid() &&
            n.isValid() &&
            ((this._rawPxBounds = n), this._updateBounds());
      },
      _updateBounds: function () {
        var n = this._clickTolerance(),
          r = new N(n, n);
        this._rawPxBounds &&
          (this._pxBounds = new Q([
            this._rawPxBounds.min.subtract(r),
            this._rawPxBounds.max.add(r),
          ]));
      },
      _projectLatlngs: function (n, r, s) {
        var u = n[0] instanceof a2,
          c = n.length,
          f,
          m;
        if (u) {
          for (m = [], f = 0; f < c; f++)
            (m[f] = this._map.latLngToLayerPoint(n[f])), s.extend(m[f]);
          r.push(m);
        } else for (f = 0; f < c; f++) this._projectLatlngs(n[f], r, s);
      },
      _clipPoints: function () {
        var n = this._renderer._bounds;
        if (
          ((this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(n)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var r = this._parts,
            s,
            u,
            c,
            f,
            m,
            P,
            C;
          for (s = 0, c = 0, f = this._rings.length; s < f; s++)
            for (C = this._rings[s], u = 0, m = C.length; u < m - 1; u++)
              (P = Do(C[u], C[u + 1], n, u, !0)),
                P &&
                  ((r[c] = r[c] || []),
                  r[c].push(P[0]),
                  (P[1] !== C[u + 1] || u === m - 2) && (r[c].push(P[1]), c++));
        }
      },
      _simplifyPoints: function () {
        for (
          var n = this._parts,
            r = this.options.smoothFactor,
            s = 0,
            u = n.length;
          s < u;
          s++
        )
          n[s] = Io(n[s], r);
      },
      _update: function () {
        this._map &&
          (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function () {
        this._renderer._updatePoly(this);
      },
      _containsPoint: function (n, r) {
        var s,
          u,
          c,
          f,
          m,
          P,
          C = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(n)) return !1;
        for (s = 0, f = this._parts.length; s < f; s++)
          for (
            P = this._parts[s], u = 0, m = P.length, c = m - 1;
            u < m;
            c = u++
          )
            if (!(!r && u === 0) && Ro(n, P[c], P[u]) <= C) return !0;
        return !1;
      },
    });
    function Ml(n, r) {
      return new te(n, r);
    }
    te._flat = Bo;
    var E1 = te.extend({
      options: { fill: !0 },
      isEmpty: function () {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return No(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function (n) {
        var r = te.prototype._convertLatLngs.call(this, n),
          s = r.length;
        return (
          s >= 2 && r[0] instanceof a2 && r[0].equals(r[s - 1]) && r.pop(), r
        );
      },
      _setLatLngs: function (n) {
        te.prototype._setLatLngs.call(this, n),
          _t(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function () {
        return _t(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function () {
        var n = this._renderer._bounds,
          r = this.options.weight,
          s = new N(r, r);
        if (
          ((n = new Q(n.min.subtract(s), n.max.add(s))),
          (this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(n)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var u = 0, c = this._rings.length, f; u < c; u++)
            (f = zo(this._rings[u], n, !0)), f.length && this._parts.push(f);
        }
      },
      _updatePath: function () {
        this._renderer._updatePoly(this, !0);
      },
      _containsPoint: function (n) {
        var r = !1,
          s,
          u,
          c,
          f,
          m,
          P,
          C,
          I;
        if (!this._pxBounds || !this._pxBounds.contains(n)) return !1;
        for (f = 0, C = this._parts.length; f < C; f++)
          for (
            s = this._parts[f], m = 0, I = s.length, P = I - 1;
            m < I;
            P = m++
          )
            (u = s[m]),
              (c = s[P]),
              u.y > n.y != c.y > n.y &&
                n.x < ((c.x - u.x) * (n.y - u.y)) / (c.y - u.y) + u.x &&
                (r = !r);
        return r || te.prototype._containsPoint.call(this, n, !0);
      },
    });
    function Ol(n, r) {
      return new E1(n, r);
    }
    var ee = Jt.extend({
      initialize: function (n, r) {
        M(this, r), (this._layers = {}), n && this.addData(n);
      },
      addData: function (n) {
        var r = y(n) ? n : n.features,
          s,
          u,
          c;
        if (r) {
          for (s = 0, u = r.length; s < u; s++)
            (c = r[s]),
              (c.geometries || c.geometry || c.features || c.coordinates) &&
                this.addData(c);
          return this;
        }
        var f = this.options;
        if (f.filter && !f.filter(n)) return this;
        var m = tn(n, f);
        return m
          ? ((m.feature = rn(n)),
            (m.defaultOptions = m.options),
            this.resetStyle(m),
            f.onEachFeature && f.onEachFeature(n, m),
            this.addLayer(m))
          : this;
      },
      resetStyle: function (n) {
        return n === void 0
          ? this.eachLayer(this.resetStyle, this)
          : ((n.options = a({}, n.defaultOptions)),
            this._setLayerStyle(n, this.options.style),
            this);
      },
      setStyle: function (n) {
        return this.eachLayer(function (r) {
          this._setLayerStyle(r, n);
        }, this);
      },
      _setLayerStyle: function (n, r) {
        n.setStyle &&
          (typeof r == "function" && (r = r(n.feature)), n.setStyle(r));
      },
    });
    function tn(n, r) {
      var s = n.type === "Feature" ? n.geometry : n,
        u = s ? s.coordinates : null,
        c = [],
        f = r && r.pointToLayer,
        m = (r && r.coordsToLatLng) || fi,
        P,
        C,
        I,
        H;
      if (!u && !s) return null;
      switch (s.type) {
        case "Point":
          return (P = m(u)), Uo(f, n, P, r);
        case "MultiPoint":
          for (I = 0, H = u.length; I < H; I++)
            (P = m(u[I])), c.push(Uo(f, n, P, r));
          return new Jt(c);
        case "LineString":
        case "MultiLineString":
          return (C = en(u, s.type === "LineString" ? 0 : 1, m)), new te(C, r);
        case "Polygon":
        case "MultiPolygon":
          return (C = en(u, s.type === "Polygon" ? 1 : 2, m)), new E1(C, r);
        case "GeometryCollection":
          for (I = 0, H = s.geometries.length; I < H; I++) {
            var $ = tn(
              {
                geometry: s.geometries[I],
                type: "Feature",
                properties: n.properties,
              },
              r
            );
            $ && c.push($);
          }
          return new Jt(c);
        case "FeatureCollection":
          for (I = 0, H = s.features.length; I < H; I++) {
            var t2 = tn(s.features[I], r);
            t2 && c.push(t2);
          }
          return new Jt(c);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function Uo(n, r, s, u) {
      return n ? n(r, s) : new X3(s, u && u.markersInheritOptions && u);
    }
    function fi(n) {
      return new a2(n[1], n[0], n[2]);
    }
    function en(n, r, s) {
      for (var u = [], c = 0, f = n.length, m; c < f; c++)
        (m = r ? en(n[c], r - 1, s) : (s || fi)(n[c])), u.push(m);
      return u;
    }
    function di(n, r) {
      return (
        (n = q(n)),
        n.alt !== void 0
          ? [k(n.lng, r), k(n.lat, r), k(n.alt, r)]
          : [k(n.lng, r), k(n.lat, r)]
      );
    }
    function nn(n, r, s, u) {
      for (var c = [], f = 0, m = n.length; f < m; f++)
        c.push(r ? nn(n[f], _t(n[f]) ? 0 : r - 1, s, u) : di(n[f], u));
      return !r && s && c.length > 0 && c.push(c[0].slice()), c;
    }
    function T1(n, r) {
      return n.feature ? a({}, n.feature, { geometry: r }) : rn(r);
    }
    function rn(n) {
      return n.type === "Feature" || n.type === "FeatureCollection"
        ? n
        : { type: "Feature", properties: {}, geometry: n };
    }
    var pi = {
      toGeoJSON: function (n) {
        return T1(this, {
          type: "Point",
          coordinates: di(this.getLatLng(), n),
        });
      },
    };
    X3.include(pi),
      hi.include(pi),
      J3.include(pi),
      te.include({
        toGeoJSON: function (n) {
          var r = !_t(this._latlngs),
            s = nn(this._latlngs, r ? 1 : 0, !1, n);
          return T1(this, {
            type: (r ? "Multi" : "") + "LineString",
            coordinates: s,
          });
        },
      }),
      E1.include({
        toGeoJSON: function (n) {
          var r = !_t(this._latlngs),
            s = r && !_t(this._latlngs[0]),
            u = nn(this._latlngs, s ? 2 : r ? 1 : 0, !0, n);
          return (
            r || (u = [u]),
            T1(this, { type: (s ? "Multi" : "") + "Polygon", coordinates: u })
          );
        },
      }),
      k1.include({
        toMultiPoint: function (n) {
          var r = [];
          return (
            this.eachLayer(function (s) {
              r.push(s.toGeoJSON(n).geometry.coordinates);
            }),
            T1(this, { type: "MultiPoint", coordinates: r })
          );
        },
        toGeoJSON: function (n) {
          var r =
            this.feature && this.feature.geometry && this.feature.geometry.type;
          if (r === "MultiPoint") return this.toMultiPoint(n);
          var s = r === "GeometryCollection",
            u = [];
          return (
            this.eachLayer(function (c) {
              if (c.toGeoJSON) {
                var f = c.toGeoJSON(n);
                if (s) u.push(f.geometry);
                else {
                  var m = rn(f);
                  m.type === "FeatureCollection"
                    ? u.push.apply(u, m.features)
                    : u.push(m);
                }
              }
            }),
            s
              ? T1(this, { geometries: u, type: "GeometryCollection" })
              : { type: "FeatureCollection", features: u }
          );
        },
      });
    function Ho(n, r) {
      return new ee(n, r);
    }
    var zl = Ho,
      on = Mt.extend({
        options: {
          opacity: 1,
          alt: "",
          interactive: !1,
          crossOrigin: !1,
          errorOverlayUrl: "",
          zIndex: 1,
          className: "",
        },
        initialize: function (n, r, s) {
          (this._url = n), (this._bounds = c2(r)), M(this, s);
        },
        onAdd: function () {
          this._image ||
            (this._initImage(),
            this.options.opacity < 1 && this._updateOpacity()),
            this.options.interactive &&
              (X(this._image, "leaflet-interactive"),
              this.addInteractiveTarget(this._image)),
            this.getPane().appendChild(this._image),
            this._reset();
        },
        onRemove: function () {
          g2(this._image),
            this.options.interactive &&
              this.removeInteractiveTarget(this._image);
        },
        setOpacity: function (n) {
          return (
            (this.options.opacity = n),
            this._image && this._updateOpacity(),
            this
          );
        },
        setStyle: function (n) {
          return n.opacity && this.setOpacity(n.opacity), this;
        },
        bringToFront: function () {
          return this._map && S1(this._image), this;
        },
        bringToBack: function () {
          return this._map && L1(this._image), this;
        },
        setUrl: function (n) {
          return (this._url = n), this._image && (this._image.src = n), this;
        },
        setBounds: function (n) {
          return (this._bounds = c2(n)), this._map && this._reset(), this;
        },
        getEvents: function () {
          var n = { zoom: this._reset, viewreset: this._reset };
          return this._zoomAnimated && (n.zoomanim = this._animateZoom), n;
        },
        setZIndex: function (n) {
          return (this.options.zIndex = n), this._updateZIndex(), this;
        },
        getBounds: function () {
          return this._bounds;
        },
        getElement: function () {
          return this._image;
        },
        _initImage: function () {
          var n = this._url.tagName === "IMG",
            r = (this._image = n ? this._url : l2("img"));
          if (
            (X(r, "leaflet-image-layer"),
            this._zoomAnimated && X(r, "leaflet-zoom-animated"),
            this.options.className && X(r, this.options.className),
            (r.onselectstart = S),
            (r.onmousemove = S),
            (r.onload = h(this.fire, this, "load")),
            (r.onerror = h(this._overlayOnError, this, "error")),
            (this.options.crossOrigin || this.options.crossOrigin === "") &&
              (r.crossOrigin =
                this.options.crossOrigin === !0
                  ? ""
                  : this.options.crossOrigin),
            this.options.zIndex && this._updateZIndex(),
            n)
          ) {
            this._url = r.src;
            return;
          }
          (r.src = this._url), (r.alt = this.options.alt);
        },
        _animateZoom: function (n) {
          var r = this._map.getZoomScale(n.zoom),
            s = this._map._latLngBoundsToNewLayerBounds(
              this._bounds,
              n.zoom,
              n.center
            ).min;
          Ge(this._image, s, r);
        },
        _reset: function () {
          var n = this._image,
            r = new Q(
              this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
              this._map.latLngToLayerPoint(this._bounds.getSouthEast())
            ),
            s = r.getSize();
          k2(n, r.min),
            (n.style.width = s.x + "px"),
            (n.style.height = s.y + "px");
        },
        _updateOpacity: function () {
          mt(this._image, this.options.opacity);
        },
        _updateZIndex: function () {
          this._image &&
            this.options.zIndex !== void 0 &&
            this.options.zIndex !== null &&
            (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function () {
          this.fire("error");
          var n = this.options.errorOverlayUrl;
          n && this._url !== n && ((this._url = n), (this._image.src = n));
        },
        getCenter: function () {
          return this._bounds.getCenter();
        },
      }),
      Nl = function (n, r, s) {
        return new on(n, r, s);
      },
      Wo = on.extend({
        options: {
          autoplay: !0,
          loop: !0,
          keepAspectRatio: !0,
          muted: !1,
          playsInline: !0,
        },
        _initImage: function () {
          var n = this._url.tagName === "VIDEO",
            r = (this._image = n ? this._url : l2("video"));
          if (
            (X(r, "leaflet-image-layer"),
            this._zoomAnimated && X(r, "leaflet-zoom-animated"),
            this.options.className && X(r, this.options.className),
            (r.onselectstart = S),
            (r.onmousemove = S),
            (r.onloadeddata = h(this.fire, this, "load")),
            n)
          ) {
            for (
              var s = r.getElementsByTagName("source"), u = [], c = 0;
              c < s.length;
              c++
            )
              u.push(s[c].src);
            this._url = s.length > 0 ? u : [r.src];
            return;
          }
          y(this._url) || (this._url = [this._url]),
            !this.options.keepAspectRatio &&
              Object.prototype.hasOwnProperty.call(r.style, "objectFit") &&
              (r.style.objectFit = "fill"),
            (r.autoplay = !!this.options.autoplay),
            (r.loop = !!this.options.loop),
            (r.muted = !!this.options.muted),
            (r.playsInline = !!this.options.playsInline);
          for (var f = 0; f < this._url.length; f++) {
            var m = l2("source");
            (m.src = this._url[f]), r.appendChild(m);
          }
        },
      });
    function Il(n, r, s) {
      return new Wo(n, r, s);
    }
    var bo = on.extend({
      _initImage: function () {
        var n = (this._image = this._url);
        X(n, "leaflet-image-layer"),
          this._zoomAnimated && X(n, "leaflet-zoom-animated"),
          this.options.className && X(n, this.options.className),
          (n.onselectstart = S),
          (n.onmousemove = S);
      },
    });
    function Rl(n, r, s) {
      return new bo(n, r, s);
    }
    var Ht = Mt.extend({
      options: {
        interactive: !1,
        offset: [0, 0],
        className: "",
        pane: void 0,
        content: "",
      },
      initialize: function (n, r) {
        n && (n instanceof a2 || y(n))
          ? ((this._latlng = q(n)), M(this, r))
          : (M(this, n), (this._source = r)),
          this.options.content && (this._content = this.options.content);
      },
      openOn: function (n) {
        return (
          (n = arguments.length ? n : this._source._map),
          n.hasLayer(this) || n.addLayer(this),
          this
        );
      },
      close: function () {
        return this._map && this._map.removeLayer(this), this;
      },
      toggle: function (n) {
        return (
          this._map
            ? this.close()
            : (arguments.length ? (this._source = n) : (n = this._source),
              this._prepareOpen(),
              this.openOn(n._map)),
          this
        );
      },
      onAdd: function (n) {
        (this._zoomAnimated = n._zoomAnimated),
          this._container || this._initLayout(),
          n._fadeAnimated && mt(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          n._fadeAnimated && mt(this._container, 1),
          this.bringToFront(),
          this.options.interactive &&
            (X(this._container, "leaflet-interactive"),
            this.addInteractiveTarget(this._container));
      },
      onRemove: function (n) {
        n._fadeAnimated
          ? (mt(this._container, 0),
            (this._removeTimeout = setTimeout(
              h(g2, void 0, this._container),
              200
            )))
          : g2(this._container),
          this.options.interactive &&
            (S2(this._container, "leaflet-interactive"),
            this.removeInteractiveTarget(this._container));
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (n) {
        return (
          (this._latlng = q(n)),
          this._map && (this._updatePosition(), this._adjustPan()),
          this
        );
      },
      getContent: function () {
        return this._content;
      },
      setContent: function (n) {
        return (this._content = n), this.update(), this;
      },
      getElement: function () {
        return this._container;
      },
      update: function () {
        this._map &&
          ((this._container.style.visibility = "hidden"),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ""),
          this._adjustPan());
      },
      getEvents: function () {
        var n = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (n.zoomanim = this._animateZoom), n;
      },
      isOpen: function () {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function () {
        return this._map && S1(this._container), this;
      },
      bringToBack: function () {
        return this._map && L1(this._container), this;
      },
      _prepareOpen: function (n) {
        var r = this._source;
        if (!r._map) return !1;
        if (r instanceof Jt) {
          r = null;
          var s = this._source._layers;
          for (var u in s)
            if (s[u]._map) {
              r = s[u];
              break;
            }
          if (!r) return !1;
          this._source = r;
        }
        if (!n)
          if (r.getCenter) n = r.getCenter();
          else if (r.getLatLng) n = r.getLatLng();
          else if (r.getBounds) n = r.getBounds().getCenter();
          else throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(n), this._map && this.update(), !0;
      },
      _updateContent: function () {
        if (this._content) {
          var n = this._contentNode,
            r =
              typeof this._content == "function"
                ? this._content(this._source || this)
                : this._content;
          if (typeof r == "string") n.innerHTML = r;
          else {
            for (; n.hasChildNodes(); ) n.removeChild(n.firstChild);
            n.appendChild(r);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function () {
        if (this._map) {
          var n = this._map.latLngToLayerPoint(this._latlng),
            r = D(this.options.offset),
            s = this._getAnchor();
          this._zoomAnimated
            ? k2(this._container, n.add(s))
            : (r = r.add(n).add(s));
          var u = (this._containerBottom = -r.y),
            c = (this._containerLeft =
              -Math.round(this._containerWidth / 2) + r.x);
          (this._container.style.bottom = u + "px"),
            (this._container.style.left = c + "px");
        }
      },
      _getAnchor: function () {
        return [0, 0];
      },
    });
    r2.include({
      _initOverlay: function (n, r, s, u) {
        var c = r;
        return (
          c instanceof n || (c = new n(u).setContent(r)), s && c.setLatLng(s), c
        );
      },
    }),
      Mt.include({
        _initOverlay: function (n, r, s, u) {
          var c = s;
          return (
            c instanceof n
              ? (M(c, u), (c._source = this))
              : ((c = r && !u ? r : new n(u, this)), c.setContent(s)),
            c
          );
        },
      });
    var sn = Ht.extend({
        options: {
          pane: "popupPane",
          offset: [0, 7],
          maxWidth: 300,
          minWidth: 50,
          maxHeight: null,
          autoPan: !0,
          autoPanPaddingTopLeft: null,
          autoPanPaddingBottomRight: null,
          autoPanPadding: [5, 5],
          keepInView: !1,
          closeButton: !0,
          autoClose: !0,
          closeOnEscapeKey: !0,
          className: "",
        },
        openOn: function (n) {
          return (
            (n = arguments.length ? n : this._source._map),
            !n.hasLayer(this) &&
              n._popup &&
              n._popup.options.autoClose &&
              n.removeLayer(n._popup),
            (n._popup = this),
            Ht.prototype.openOn.call(this, n)
          );
        },
        onAdd: function (n) {
          Ht.prototype.onAdd.call(this, n),
            n.fire("popupopen", { popup: this }),
            this._source &&
              (this._source.fire("popupopen", { popup: this }, !0),
              this._source instanceof ve || this._source.on("preclick", qe));
        },
        onRemove: function (n) {
          Ht.prototype.onRemove.call(this, n),
            n.fire("popupclose", { popup: this }),
            this._source &&
              (this._source.fire("popupclose", { popup: this }, !0),
              this._source instanceof ve || this._source.off("preclick", qe));
        },
        getEvents: function () {
          var n = Ht.prototype.getEvents.call(this);
          return (
            (this.options.closeOnClick !== void 0
              ? this.options.closeOnClick
              : this._map.options.closePopupOnClick) &&
              (n.preclick = this.close),
            this.options.keepInView && (n.moveend = this._adjustPan),
            n
          );
        },
        _initLayout: function () {
          var n = "leaflet-popup",
            r = (this._container = l2(
              "div",
              n +
                " " +
                (this.options.className || "") +
                " leaflet-zoom-animated"
            )),
            s = (this._wrapper = l2("div", n + "-content-wrapper", r));
          if (
            ((this._contentNode = l2("div", n + "-content", s)),
            I4(r),
            ii(this._contentNode),
            Y(r, "contextmenu", qe),
            (this._tipContainer = l2("div", n + "-tip-container", r)),
            (this._tip = l2("div", n + "-tip", this._tipContainer)),
            this.options.closeButton)
          ) {
            var u = (this._closeButton = l2("a", n + "-close-button", r));
            u.setAttribute("role", "button"),
              u.setAttribute("aria-label", "Close popup"),
              (u.href = "#close"),
              (u.innerHTML = '<span aria-hidden="true">&#215;</span>'),
              Y(
                u,
                "click",
                function (c) {
                  F2(c), this.close();
                },
                this
              );
          }
        },
        _updateLayout: function () {
          var n = this._contentNode,
            r = n.style;
          (r.width = ""), (r.whiteSpace = "nowrap");
          var s = n.offsetWidth;
          (s = Math.min(s, this.options.maxWidth)),
            (s = Math.max(s, this.options.minWidth)),
            (r.width = s + 1 + "px"),
            (r.whiteSpace = ""),
            (r.height = "");
          var u = n.offsetHeight,
            c = this.options.maxHeight,
            f = "leaflet-popup-scrolled";
          c && u > c ? ((r.height = c + "px"), X(n, f)) : S2(n, f),
            (this._containerWidth = this._container.offsetWidth);
        },
        _animateZoom: function (n) {
          var r = this._map._latLngToNewLayerPoint(
              this._latlng,
              n.zoom,
              n.center
            ),
            s = this._getAnchor();
          k2(this._container, r.add(s));
        },
        _adjustPan: function () {
          if (this.options.autoPan) {
            if (
              (this._map._panAnim && this._map._panAnim.stop(),
              this._autopanning)
            ) {
              this._autopanning = !1;
              return;
            }
            var n = this._map,
              r = parseInt(M4(this._container, "marginBottom"), 10) || 0,
              s = this._container.offsetHeight + r,
              u = this._containerWidth,
              c = new N(this._containerLeft, -s - this._containerBottom);
            c._add(Ke(this._container));
            var f = n.layerPointToContainerPoint(c),
              m = D(this.options.autoPanPadding),
              P = D(this.options.autoPanPaddingTopLeft || m),
              C = D(this.options.autoPanPaddingBottomRight || m),
              I = n.getSize(),
              H = 0,
              $ = 0;
            f.x + u + C.x > I.x && (H = f.x + u - I.x + C.x),
              f.x - H - P.x < 0 && (H = f.x - P.x),
              f.y + s + C.y > I.y && ($ = f.y + s - I.y + C.y),
              f.y - $ - P.y < 0 && ($ = f.y - P.y),
              (H || $) &&
                (this.options.keepInView && (this._autopanning = !0),
                n.fire("autopanstart").panBy([H, $]));
          }
        },
        _getAnchor: function () {
          return D(
            this._source && this._source._getPopupAnchor
              ? this._source._getPopupAnchor()
              : [0, 0]
          );
        },
      }),
      Al = function (n, r) {
        return new sn(n, r);
      };
    r2.mergeOptions({ closePopupOnClick: !0 }),
      r2.include({
        openPopup: function (n, r, s) {
          return this._initOverlay(sn, n, r, s).openOn(this), this;
        },
        closePopup: function (n) {
          return (n = arguments.length ? n : this._popup), n && n.close(), this;
        },
      }),
      Mt.include({
        bindPopup: function (n, r) {
          return (
            (this._popup = this._initOverlay(sn, this._popup, n, r)),
            this._popupHandlersAdded ||
              (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !0)),
            this
          );
        },
        unbindPopup: function () {
          return (
            this._popup &&
              (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !1),
              (this._popup = null)),
            this
          );
        },
        openPopup: function (n) {
          return (
            this._popup &&
              (this instanceof Jt || (this._popup._source = this),
              this._popup._prepareOpen(n || this._latlng) &&
                this._popup.openOn(this._map)),
            this
          );
        },
        closePopup: function () {
          return this._popup && this._popup.close(), this;
        },
        togglePopup: function () {
          return this._popup && this._popup.toggle(this), this;
        },
        isPopupOpen: function () {
          return this._popup ? this._popup.isOpen() : !1;
        },
        setPopupContent: function (n) {
          return this._popup && this._popup.setContent(n), this;
        },
        getPopup: function () {
          return this._popup;
        },
        _openPopup: function (n) {
          if (!(!this._popup || !this._map)) {
            Ye(n);
            var r = n.layer || n.target;
            if (this._popup._source === r && !(r instanceof ve)) {
              this._map.hasLayer(this._popup)
                ? this.closePopup()
                : this.openPopup(n.latlng);
              return;
            }
            (this._popup._source = r), this.openPopup(n.latlng);
          }
        },
        _movePopup: function (n) {
          this._popup.setLatLng(n.latlng);
        },
        _onKeyPress: function (n) {
          n.originalEvent.keyCode === 13 && this._openPopup(n);
        },
      });
    var an = Ht.extend({
        options: {
          pane: "tooltipPane",
          offset: [0, 0],
          direction: "auto",
          permanent: !1,
          sticky: !1,
          opacity: 0.9,
        },
        onAdd: function (n) {
          Ht.prototype.onAdd.call(this, n),
            this.setOpacity(this.options.opacity),
            n.fire("tooltipopen", { tooltip: this }),
            this._source &&
              (this.addEventParent(this._source),
              this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function (n) {
          Ht.prototype.onRemove.call(this, n),
            n.fire("tooltipclose", { tooltip: this }),
            this._source &&
              (this.removeEventParent(this._source),
              this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function () {
          var n = Ht.prototype.getEvents.call(this);
          return this.options.permanent || (n.preclick = this.close), n;
        },
        _initLayout: function () {
          var n = "leaflet-tooltip",
            r =
              n +
              " " +
              (this.options.className || "") +
              " leaflet-zoom-" +
              (this._zoomAnimated ? "animated" : "hide");
          (this._contentNode = this._container = l2("div", r)),
            this._container.setAttribute("role", "tooltip"),
            this._container.setAttribute("id", "leaflet-tooltip-" + p(this));
        },
        _updateLayout: function () {},
        _adjustPan: function () {},
        _setPosition: function (n) {
          var r,
            s,
            u = this._map,
            c = this._container,
            f = u.latLngToContainerPoint(u.getCenter()),
            m = u.layerPointToContainerPoint(n),
            P = this.options.direction,
            C = c.offsetWidth,
            I = c.offsetHeight,
            H = D(this.options.offset),
            $ = this._getAnchor();
          P === "top"
            ? ((r = C / 2), (s = I))
            : P === "bottom"
            ? ((r = C / 2), (s = 0))
            : P === "center"
            ? ((r = C / 2), (s = I / 2))
            : P === "right"
            ? ((r = 0), (s = I / 2))
            : P === "left"
            ? ((r = C), (s = I / 2))
            : m.x < f.x
            ? ((P = "right"), (r = 0), (s = I / 2))
            : ((P = "left"), (r = C + (H.x + $.x) * 2), (s = I / 2)),
            (n = n.subtract(D(r, s, !0)).add(H).add($)),
            S2(c, "leaflet-tooltip-right"),
            S2(c, "leaflet-tooltip-left"),
            S2(c, "leaflet-tooltip-top"),
            S2(c, "leaflet-tooltip-bottom"),
            X(c, "leaflet-tooltip-" + P),
            k2(c, n);
        },
        _updatePosition: function () {
          var n = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(n);
        },
        setOpacity: function (n) {
          (this.options.opacity = n), this._container && mt(this._container, n);
        },
        _animateZoom: function (n) {
          var r = this._map._latLngToNewLayerPoint(
            this._latlng,
            n.zoom,
            n.center
          );
          this._setPosition(r);
        },
        _getAnchor: function () {
          return D(
            this._source &&
              this._source._getTooltipAnchor &&
              !this.options.sticky
              ? this._source._getTooltipAnchor()
              : [0, 0]
          );
        },
      }),
      Dl = function (n, r) {
        return new an(n, r);
      };
    r2.include({
      openTooltip: function (n, r, s) {
        return this._initOverlay(an, n, r, s).openOn(this), this;
      },
      closeTooltip: function (n) {
        return n.close(), this;
      },
    }),
      Mt.include({
        bindTooltip: function (n, r) {
          return (
            this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
            (this._tooltip = this._initOverlay(an, this._tooltip, n, r)),
            this._initTooltipInteractions(),
            this._tooltip.options.permanent &&
              this._map &&
              this._map.hasLayer(this) &&
              this.openTooltip(),
            this
          );
        },
        unbindTooltip: function () {
          return (
            this._tooltip &&
              (this._initTooltipInteractions(!0),
              this.closeTooltip(),
              (this._tooltip = null)),
            this
          );
        },
        _initTooltipInteractions: function (n) {
          if (!(!n && this._tooltipHandlersAdded)) {
            var r = n ? "off" : "on",
              s = { remove: this.closeTooltip, move: this._moveTooltip };
            this._tooltip.options.permanent
              ? (s.add = this._openTooltip)
              : ((s.mouseover = this._openTooltip),
                (s.mouseout = this.closeTooltip),
                (s.click = this._openTooltip),
                this._map
                  ? this._addFocusListeners()
                  : (s.add = this._addFocusListeners)),
              this._tooltip.options.sticky && (s.mousemove = this._moveTooltip),
              this[r](s),
              (this._tooltipHandlersAdded = !n);
          }
        },
        openTooltip: function (n) {
          return (
            this._tooltip &&
              (this instanceof Jt || (this._tooltip._source = this),
              this._tooltip._prepareOpen(n) &&
                (this._tooltip.openOn(this._map),
                this.getElement
                  ? this._setAriaDescribedByOnLayer(this)
                  : this.eachLayer &&
                    this.eachLayer(this._setAriaDescribedByOnLayer, this))),
            this
          );
        },
        closeTooltip: function () {
          if (this._tooltip) return this._tooltip.close();
        },
        toggleTooltip: function () {
          return this._tooltip && this._tooltip.toggle(this), this;
        },
        isTooltipOpen: function () {
          return this._tooltip.isOpen();
        },
        setTooltipContent: function (n) {
          return this._tooltip && this._tooltip.setContent(n), this;
        },
        getTooltip: function () {
          return this._tooltip;
        },
        _addFocusListeners: function () {
          this.getElement
            ? this._addFocusListenersOnLayer(this)
            : this.eachLayer &&
              this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function (n) {
          var r = typeof n.getElement == "function" && n.getElement();
          r &&
            (Y(
              r,
              "focus",
              function () {
                (this._tooltip._source = n), this.openTooltip();
              },
              this
            ),
            Y(r, "blur", this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function (n) {
          var r = typeof n.getElement == "function" && n.getElement();
          r && r.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function (n) {
          if (!(!this._tooltip || !this._map)) {
            if (
              this._map.dragging &&
              this._map.dragging.moving() &&
              !this._openOnceFlag
            ) {
              this._openOnceFlag = !0;
              var r = this;
              this._map.once("moveend", function () {
                (r._openOnceFlag = !1), r._openTooltip(n);
              });
              return;
            }
            (this._tooltip._source = n.layer || n.target),
              this.openTooltip(
                this._tooltip.options.sticky ? n.latlng : void 0
              );
          }
        },
        _moveTooltip: function (n) {
          var r = n.latlng,
            s,
            u;
          this._tooltip.options.sticky &&
            n.originalEvent &&
            ((s = this._map.mouseEventToContainerPoint(n.originalEvent)),
            (u = this._map.containerPointToLayerPoint(s)),
            (r = this._map.layerPointToLatLng(u))),
            this._tooltip.setLatLng(r);
        },
      });
    var Vo = C1.extend({
      options: {
        iconSize: [12, 12],
        html: !1,
        bgPos: null,
        className: "leaflet-div-icon",
      },
      createIcon: function (n) {
        var r = n && n.tagName === "DIV" ? n : document.createElement("div"),
          s = this.options;
        if (
          (s.html instanceof Element
            ? ($3(r), r.appendChild(s.html))
            : (r.innerHTML = s.html !== !1 ? s.html : ""),
          s.bgPos)
        ) {
          var u = D(s.bgPos);
          r.style.backgroundPosition = -u.x + "px " + -u.y + "px";
        }
        return this._setIconStyles(r, "icon"), r;
      },
      createShadow: function () {
        return null;
      },
    });
    function Bl(n) {
      return new Vo(n);
    }
    C1.Default = D4;
    var B4 = Mt.extend({
      options: {
        tileSize: 256,
        opacity: 1,
        updateWhenIdle: V.mobile,
        updateWhenZooming: !0,
        updateInterval: 200,
        zIndex: 1,
        bounds: null,
        minZoom: 0,
        maxZoom: void 0,
        maxNativeZoom: void 0,
        minNativeZoom: void 0,
        noWrap: !1,
        pane: "tilePane",
        className: "",
        keepBuffer: 2,
      },
      initialize: function (n) {
        M(this, n);
      },
      onAdd: function () {
        this._initContainer(),
          (this._levels = {}),
          (this._tiles = {}),
          this._resetView();
      },
      beforeAdd: function (n) {
        n._addZoomLimit(this);
      },
      onRemove: function (n) {
        this._removeAllTiles(),
          g2(this._container),
          n._removeZoomLimit(this),
          (this._container = null),
          (this._tileZoom = void 0);
      },
      bringToFront: function () {
        return (
          this._map && (S1(this._container), this._setAutoZIndex(Math.max)),
          this
        );
      },
      bringToBack: function () {
        return (
          this._map && (L1(this._container), this._setAutoZIndex(Math.min)),
          this
        );
      },
      getContainer: function () {
        return this._container;
      },
      setOpacity: function (n) {
        return (this.options.opacity = n), this._updateOpacity(), this;
      },
      setZIndex: function (n) {
        return (this.options.zIndex = n), this._updateZIndex(), this;
      },
      isLoading: function () {
        return this._loading;
      },
      redraw: function () {
        if (this._map) {
          this._removeAllTiles();
          var n = this._clampZoom(this._map.getZoom());
          n !== this._tileZoom && ((this._tileZoom = n), this._updateLevels()),
            this._update();
        }
        return this;
      },
      getEvents: function () {
        var n = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd,
        };
        return (
          this.options.updateWhenIdle ||
            (this._onMove ||
              (this._onMove = g(
                this._onMoveEnd,
                this.options.updateInterval,
                this
              )),
            (n.move = this._onMove)),
          this._zoomAnimated && (n.zoomanim = this._animateZoom),
          n
        );
      },
      createTile: function () {
        return document.createElement("div");
      },
      getTileSize: function () {
        var n = this.options.tileSize;
        return n instanceof N ? n : new N(n, n);
      },
      _updateZIndex: function () {
        this._container &&
          this.options.zIndex !== void 0 &&
          this.options.zIndex !== null &&
          (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function (n) {
        for (
          var r = this.getPane().children,
            s = -n(-1 / 0, 1 / 0),
            u = 0,
            c = r.length,
            f;
          u < c;
          u++
        )
          (f = r[u].style.zIndex),
            r[u] !== this._container && f && (s = n(s, +f));
        isFinite(s) &&
          ((this.options.zIndex = s + n(-1, 1)), this._updateZIndex());
      },
      _updateOpacity: function () {
        if (this._map && !V.ielt9) {
          mt(this._container, this.options.opacity);
          var n = +new Date(),
            r = !1,
            s = !1;
          for (var u in this._tiles) {
            var c = this._tiles[u];
            if (!(!c.current || !c.loaded)) {
              var f = Math.min(1, (n - c.loaded) / 200);
              mt(c.el, f),
                f < 1
                  ? (r = !0)
                  : (c.active ? (s = !0) : this._onOpaqueTile(c),
                    (c.active = !0));
            }
          }
          s && !this._noPrune && this._pruneTiles(),
            r &&
              (N2(this._fadeFrame),
              (this._fadeFrame = h2(this._updateOpacity, this)));
        }
      },
      _onOpaqueTile: S,
      _initContainer: function () {
        this._container ||
          ((this._container = l2(
            "div",
            "leaflet-layer " + (this.options.className || "")
          )),
          this._updateZIndex(),
          this.options.opacity < 1 && this._updateOpacity(),
          this.getPane().appendChild(this._container));
      },
      _updateLevels: function () {
        var n = this._tileZoom,
          r = this.options.maxZoom;
        if (n !== void 0) {
          for (var s in this._levels)
            (s = Number(s)),
              this._levels[s].el.children.length || s === n
                ? ((this._levels[s].el.style.zIndex = r - Math.abs(n - s)),
                  this._onUpdateLevel(s))
                : (g2(this._levels[s].el),
                  this._removeTilesAtZoom(s),
                  this._onRemoveLevel(s),
                  delete this._levels[s]);
          var u = this._levels[n],
            c = this._map;
          return (
            u ||
              ((u = this._levels[n] = {}),
              (u.el = l2(
                "div",
                "leaflet-tile-container leaflet-zoom-animated",
                this._container
              )),
              (u.el.style.zIndex = r),
              (u.origin = c
                .project(c.unproject(c.getPixelOrigin()), n)
                .round()),
              (u.zoom = n),
              this._setZoomTransform(u, c.getCenter(), c.getZoom()),
              S(u.el.offsetWidth),
              this._onCreateLevel(u)),
            (this._level = u),
            u
          );
        }
      },
      _onUpdateLevel: S,
      _onRemoveLevel: S,
      _onCreateLevel: S,
      _pruneTiles: function () {
        if (this._map) {
          var n,
            r,
            s = this._map.getZoom();
          if (s > this.options.maxZoom || s < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (n in this._tiles) (r = this._tiles[n]), (r.retain = r.current);
          for (n in this._tiles)
            if (((r = this._tiles[n]), r.current && !r.active)) {
              var u = r.coords;
              this._retainParent(u.x, u.y, u.z, u.z - 5) ||
                this._retainChildren(u.x, u.y, u.z, u.z + 2);
            }
          for (n in this._tiles) this._tiles[n].retain || this._removeTile(n);
        }
      },
      _removeTilesAtZoom: function (n) {
        for (var r in this._tiles)
          this._tiles[r].coords.z === n && this._removeTile(r);
      },
      _removeAllTiles: function () {
        for (var n in this._tiles) this._removeTile(n);
      },
      _invalidateAll: function () {
        for (var n in this._levels)
          g2(this._levels[n].el),
            this._onRemoveLevel(Number(n)),
            delete this._levels[n];
        this._removeAllTiles(), (this._tileZoom = void 0);
      },
      _retainParent: function (n, r, s, u) {
        var c = Math.floor(n / 2),
          f = Math.floor(r / 2),
          m = s - 1,
          P = new N(+c, +f);
        P.z = +m;
        var C = this._tileCoordsToKey(P),
          I = this._tiles[C];
        return I && I.active
          ? ((I.retain = !0), !0)
          : (I && I.loaded && (I.retain = !0),
            m > u ? this._retainParent(c, f, m, u) : !1);
      },
      _retainChildren: function (n, r, s, u) {
        for (var c = 2 * n; c < 2 * n + 2; c++)
          for (var f = 2 * r; f < 2 * r + 2; f++) {
            var m = new N(c, f);
            m.z = s + 1;
            var P = this._tileCoordsToKey(m),
              C = this._tiles[P];
            if (C && C.active) {
              C.retain = !0;
              continue;
            } else C && C.loaded && (C.retain = !0);
            s + 1 < u && this._retainChildren(c, f, s + 1, u);
          }
      },
      _resetView: function (n) {
        var r = n && (n.pinch || n.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), r, r);
      },
      _animateZoom: function (n) {
        this._setView(n.center, n.zoom, !0, n.noUpdate);
      },
      _clampZoom: function (n) {
        var r = this.options;
        return r.minNativeZoom !== void 0 && n < r.minNativeZoom
          ? r.minNativeZoom
          : r.maxNativeZoom !== void 0 && r.maxNativeZoom < n
          ? r.maxNativeZoom
          : n;
      },
      _setView: function (n, r, s, u) {
        var c = Math.round(r);
        (this.options.maxZoom !== void 0 && c > this.options.maxZoom) ||
        (this.options.minZoom !== void 0 && c < this.options.minZoom)
          ? (c = void 0)
          : (c = this._clampZoom(c));
        var f = this.options.updateWhenZooming && c !== this._tileZoom;
        (!u || f) &&
          ((this._tileZoom = c),
          this._abortLoading && this._abortLoading(),
          this._updateLevels(),
          this._resetGrid(),
          c !== void 0 && this._update(n),
          s || this._pruneTiles(),
          (this._noPrune = !!s)),
          this._setZoomTransforms(n, r);
      },
      _setZoomTransforms: function (n, r) {
        for (var s in this._levels)
          this._setZoomTransform(this._levels[s], n, r);
      },
      _setZoomTransform: function (n, r, s) {
        var u = this._map.getZoomScale(s, n.zoom),
          c = n.origin
            .multiplyBy(u)
            .subtract(this._map._getNewPixelOrigin(r, s))
            .round();
        V.any3d ? Ge(n.el, c, u) : k2(n.el, c);
      },
      _resetGrid: function () {
        var n = this._map,
          r = n.options.crs,
          s = (this._tileSize = this.getTileSize()),
          u = this._tileZoom,
          c = this._map.getPixelWorldBounds(this._tileZoom);
        c && (this._globalTileRange = this._pxBoundsToTileRange(c)),
          (this._wrapX = r.wrapLng &&
            !this.options.noWrap && [
              Math.floor(n.project([0, r.wrapLng[0]], u).x / s.x),
              Math.ceil(n.project([0, r.wrapLng[1]], u).x / s.y),
            ]),
          (this._wrapY = r.wrapLat &&
            !this.options.noWrap && [
              Math.floor(n.project([r.wrapLat[0], 0], u).y / s.x),
              Math.ceil(n.project([r.wrapLat[1], 0], u).y / s.y),
            ]);
      },
      _onMoveEnd: function () {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function (n) {
        var r = this._map,
          s = r._animatingZoom
            ? Math.max(r._animateToZoom, r.getZoom())
            : r.getZoom(),
          u = r.getZoomScale(s, this._tileZoom),
          c = r.project(n, this._tileZoom).floor(),
          f = r.getSize().divideBy(u * 2);
        return new Q(c.subtract(f), c.add(f));
      },
      _update: function (n) {
        var r = this._map;
        if (r) {
          var s = this._clampZoom(r.getZoom());
          if (
            (n === void 0 && (n = r.getCenter()), this._tileZoom !== void 0)
          ) {
            var u = this._getTiledPixelBounds(n),
              c = this._pxBoundsToTileRange(u),
              f = c.getCenter(),
              m = [],
              P = this.options.keepBuffer,
              C = new Q(
                c.getBottomLeft().subtract([P, -P]),
                c.getTopRight().add([P, -P])
              );
            if (
              !(
                isFinite(c.min.x) &&
                isFinite(c.min.y) &&
                isFinite(c.max.x) &&
                isFinite(c.max.y)
              )
            )
              throw new Error("Attempted to load an infinite number of tiles");
            for (var I in this._tiles) {
              var H = this._tiles[I].coords;
              (H.z !== this._tileZoom || !C.contains(new N(H.x, H.y))) &&
                (this._tiles[I].current = !1);
            }
            if (Math.abs(s - this._tileZoom) > 1) {
              this._setView(n, s);
              return;
            }
            for (var $ = c.min.y; $ <= c.max.y; $++)
              for (var t2 = c.min.x; t2 <= c.max.x; t2++) {
                var G2 = new N(t2, $);
                if (((G2.z = this._tileZoom), !!this._isValidTile(G2))) {
                  var I2 = this._tiles[this._tileCoordsToKey(G2)];
                  I2 ? (I2.current = !0) : m.push(G2);
                }
              }
            if (
              (m.sort(function (tt, O1) {
                return tt.distanceTo(f) - O1.distanceTo(f);
              }),
              m.length !== 0)
            ) {
              this._loading || ((this._loading = !0), this.fire("loading"));
              var vt = document.createDocumentFragment();
              for (t2 = 0; t2 < m.length; t2++) this._addTile(m[t2], vt);
              this._level.el.appendChild(vt);
            }
          }
        }
      },
      _isValidTile: function (n) {
        var r = this._map.options.crs;
        if (!r.infinite) {
          var s = this._globalTileRange;
          if (
            (!r.wrapLng && (n.x < s.min.x || n.x > s.max.x)) ||
            (!r.wrapLat && (n.y < s.min.y || n.y > s.max.y))
          )
            return !1;
        }
        if (!this.options.bounds) return !0;
        var u = this._tileCoordsToBounds(n);
        return c2(this.options.bounds).overlaps(u);
      },
      _keyToBounds: function (n) {
        return this._tileCoordsToBounds(this._keyToTileCoords(n));
      },
      _tileCoordsToNwSe: function (n) {
        var r = this._map,
          s = this.getTileSize(),
          u = n.scaleBy(s),
          c = u.add(s),
          f = r.unproject(u, n.z),
          m = r.unproject(c, n.z);
        return [f, m];
      },
      _tileCoordsToBounds: function (n) {
        var r = this._tileCoordsToNwSe(n),
          s = new T2(r[0], r[1]);
        return this.options.noWrap || (s = this._map.wrapLatLngBounds(s)), s;
      },
      _tileCoordsToKey: function (n) {
        return n.x + ":" + n.y + ":" + n.z;
      },
      _keyToTileCoords: function (n) {
        var r = n.split(":"),
          s = new N(+r[0], +r[1]);
        return (s.z = +r[2]), s;
      },
      _removeTile: function (n) {
        var r = this._tiles[n];
        r &&
          (g2(r.el),
          delete this._tiles[n],
          this.fire("tileunload", {
            tile: r.el,
            coords: this._keyToTileCoords(n),
          }));
      },
      _initTile: function (n) {
        X(n, "leaflet-tile");
        var r = this.getTileSize();
        (n.style.width = r.x + "px"),
          (n.style.height = r.y + "px"),
          (n.onselectstart = S),
          (n.onmousemove = S),
          V.ielt9 && this.options.opacity < 1 && mt(n, this.options.opacity);
      },
      _addTile: function (n, r) {
        var s = this._getTilePos(n),
          u = this._tileCoordsToKey(n),
          c = this.createTile(this._wrapCoords(n), h(this._tileReady, this, n));
        this._initTile(c),
          this.createTile.length < 2 &&
            h2(h(this._tileReady, this, n, null, c)),
          k2(c, s),
          (this._tiles[u] = { el: c, coords: n, current: !0 }),
          r.appendChild(c),
          this.fire("tileloadstart", { tile: c, coords: n });
      },
      _tileReady: function (n, r, s) {
        r && this.fire("tileerror", { error: r, tile: s, coords: n });
        var u = this._tileCoordsToKey(n);
        (s = this._tiles[u]),
          s &&
            ((s.loaded = +new Date()),
            this._map._fadeAnimated
              ? (mt(s.el, 0),
                N2(this._fadeFrame),
                (this._fadeFrame = h2(this._updateOpacity, this)))
              : ((s.active = !0), this._pruneTiles()),
            r ||
              (X(s.el, "leaflet-tile-loaded"),
              this.fire("tileload", { tile: s.el, coords: n })),
            this._noTilesToLoad() &&
              ((this._loading = !1),
              this.fire("load"),
              V.ielt9 || !this._map._fadeAnimated
                ? h2(this._pruneTiles, this)
                : setTimeout(h(this._pruneTiles, this), 250)));
      },
      _getTilePos: function (n) {
        return n.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function (n) {
        var r = new N(
          this._wrapX ? x(n.x, this._wrapX) : n.x,
          this._wrapY ? x(n.y, this._wrapY) : n.y
        );
        return (r.z = n.z), r;
      },
      _pxBoundsToTileRange: function (n) {
        var r = this.getTileSize();
        return new Q(
          n.min.unscaleBy(r).floor(),
          n.max.unscaleBy(r).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function () {
        for (var n in this._tiles) if (!this._tiles[n].loaded) return !1;
        return !0;
      },
    });
    function Fl(n) {
      return new B4(n);
    }
    var M1 = B4.extend({
      options: {
        minZoom: 0,
        maxZoom: 18,
        subdomains: "abc",
        errorTileUrl: "",
        zoomOffset: 0,
        tms: !1,
        zoomReverse: !1,
        detectRetina: !1,
        crossOrigin: !1,
        referrerPolicy: !1,
      },
      initialize: function (n, r) {
        (this._url = n),
          (r = M(this, r)),
          r.detectRetina && V.retina && r.maxZoom > 0
            ? ((r.tileSize = Math.floor(r.tileSize / 2)),
              r.zoomReverse
                ? (r.zoomOffset--,
                  (r.minZoom = Math.min(r.maxZoom, r.minZoom + 1)))
                : (r.zoomOffset++,
                  (r.maxZoom = Math.max(r.minZoom, r.maxZoom - 1))),
              (r.minZoom = Math.max(0, r.minZoom)))
            : r.zoomReverse
            ? (r.minZoom = Math.min(r.maxZoom, r.minZoom))
            : (r.maxZoom = Math.max(r.minZoom, r.maxZoom)),
          typeof r.subdomains == "string" &&
            (r.subdomains = r.subdomains.split("")),
          this.on("tileunload", this._onTileRemove);
      },
      setUrl: function (n, r) {
        return (
          this._url === n && r === void 0 && (r = !0),
          (this._url = n),
          r || this.redraw(),
          this
        );
      },
      createTile: function (n, r) {
        var s = document.createElement("img");
        return (
          Y(s, "load", h(this._tileOnLoad, this, r, s)),
          Y(s, "error", h(this._tileOnError, this, r, s)),
          (this.options.crossOrigin || this.options.crossOrigin === "") &&
            (s.crossOrigin =
              this.options.crossOrigin === !0 ? "" : this.options.crossOrigin),
          typeof this.options.referrerPolicy == "string" &&
            (s.referrerPolicy = this.options.referrerPolicy),
          (s.alt = ""),
          (s.src = this.getTileUrl(n)),
          s
        );
      },
      getTileUrl: function (n) {
        var r = {
          r: V.retina ? "@2x" : "",
          s: this._getSubdomain(n),
          x: n.x,
          y: n.y,
          z: this._getZoomForUrl(),
        };
        if (this._map && !this._map.options.crs.infinite) {
          var s = this._globalTileRange.max.y - n.y;
          this.options.tms && (r.y = s), (r["-y"] = s);
        }
        return _(this._url, a(r, this.options));
      },
      _tileOnLoad: function (n, r) {
        V.ielt9 ? setTimeout(h(n, this, null, r), 0) : n(null, r);
      },
      _tileOnError: function (n, r, s) {
        var u = this.options.errorTileUrl;
        u && r.getAttribute("src") !== u && (r.src = u), n(s, r);
      },
      _onTileRemove: function (n) {
        n.tile.onload = null;
      },
      _getZoomForUrl: function () {
        var n = this._tileZoom,
          r = this.options.maxZoom,
          s = this.options.zoomReverse,
          u = this.options.zoomOffset;
        return s && (n = r - n), n + u;
      },
      _getSubdomain: function (n) {
        var r = Math.abs(n.x + n.y) % this.options.subdomains.length;
        return this.options.subdomains[r];
      },
      _abortLoading: function () {
        var n, r;
        for (n in this._tiles)
          if (
            this._tiles[n].coords.z !== this._tileZoom &&
            ((r = this._tiles[n].el),
            (r.onload = S),
            (r.onerror = S),
            !r.complete)
          ) {
            r.src = A;
            var s = this._tiles[n].coords;
            g2(r),
              delete this._tiles[n],
              this.fire("tileabort", { tile: r, coords: s });
          }
      },
      _removeTile: function (n) {
        var r = this._tiles[n];
        if (r)
          return (
            r.el.setAttribute("src", A), B4.prototype._removeTile.call(this, n)
          );
      },
      _tileReady: function (n, r, s) {
        if (!(!this._map || (s && s.getAttribute("src") === A)))
          return B4.prototype._tileReady.call(this, n, r, s);
      },
    });
    function $o(n, r) {
      return new M1(n, r);
    }
    var Qo = M1.extend({
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        layers: "",
        styles: "",
        format: "image/jpeg",
        transparent: !1,
        version: "1.1.1",
      },
      options: { crs: null, uppercase: !1 },
      initialize: function (n, r) {
        this._url = n;
        var s = a({}, this.defaultWmsParams);
        for (var u in r) u in this.options || (s[u] = r[u]);
        r = M(this, r);
        var c = r.detectRetina && V.retina ? 2 : 1,
          f = this.getTileSize();
        (s.width = f.x * c), (s.height = f.y * c), (this.wmsParams = s);
      },
      onAdd: function (n) {
        (this._crs = this.options.crs || n.options.crs),
          (this._wmsVersion = parseFloat(this.wmsParams.version));
        var r = this._wmsVersion >= 1.3 ? "crs" : "srs";
        (this.wmsParams[r] = this._crs.code), M1.prototype.onAdd.call(this, n);
      },
      getTileUrl: function (n) {
        var r = this._tileCoordsToNwSe(n),
          s = this._crs,
          u = o2(s.project(r[0]), s.project(r[1])),
          c = u.min,
          f = u.max,
          m = (
            this._wmsVersion >= 1.3 && this._crs === jo
              ? [c.y, c.x, f.y, f.x]
              : [c.x, c.y, f.x, f.y]
          ).join(","),
          P = M1.prototype.getTileUrl.call(this, n);
        return (
          P +
          U(this.wmsParams, P, this.options.uppercase) +
          (this.options.uppercase ? "&BBOX=" : "&bbox=") +
          m
        );
      },
      setParams: function (n, r) {
        return a(this.wmsParams, n), r || this.redraw(), this;
      },
    });
    function jl(n, r) {
      return new Qo(n, r);
    }
    (M1.WMS = Qo), ($o.wms = jl);
    var ne = Mt.extend({
        options: { padding: 0.1 },
        initialize: function (n) {
          M(this, n), p(this), (this._layers = this._layers || {});
        },
        onAdd: function () {
          this._container ||
            (this._initContainer(),
            X(this._container, "leaflet-zoom-animated")),
            this.getPane().appendChild(this._container),
            this._update(),
            this.on("update", this._updatePaths, this);
        },
        onRemove: function () {
          this.off("update", this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function () {
          var n = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd,
          };
          return this._zoomAnimated && (n.zoomanim = this._onAnimZoom), n;
        },
        _onAnimZoom: function (n) {
          this._updateTransform(n.center, n.zoom);
        },
        _onZoom: function () {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function (n, r) {
          var s = this._map.getZoomScale(r, this._zoom),
            u = this._map.getSize().multiplyBy(0.5 + this.options.padding),
            c = this._map.project(this._center, r),
            f = u
              .multiplyBy(-s)
              .add(c)
              .subtract(this._map._getNewPixelOrigin(n, r));
          V.any3d ? Ge(this._container, f, s) : k2(this._container, f);
        },
        _reset: function () {
          this._update(), this._updateTransform(this._center, this._zoom);
          for (var n in this._layers) this._layers[n]._reset();
        },
        _onZoomEnd: function () {
          for (var n in this._layers) this._layers[n]._project();
        },
        _updatePaths: function () {
          for (var n in this._layers) this._layers[n]._update();
        },
        _update: function () {
          var n = this.options.padding,
            r = this._map.getSize(),
            s = this._map.containerPointToLayerPoint(r.multiplyBy(-n)).round();
          (this._bounds = new Q(s, s.add(r.multiplyBy(1 + n * 2)).round())),
            (this._center = this._map.getCenter()),
            (this._zoom = this._map.getZoom());
        },
      }),
      Go = ne.extend({
        options: { tolerance: 0 },
        getEvents: function () {
          var n = ne.prototype.getEvents.call(this);
          return (n.viewprereset = this._onViewPreReset), n;
        },
        _onViewPreReset: function () {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function () {
          ne.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function () {
          var n = (this._container = document.createElement("canvas"));
          Y(n, "mousemove", this._onMouseMove, this),
            Y(
              n,
              "click dblclick mousedown mouseup contextmenu",
              this._onClick,
              this
            ),
            Y(n, "mouseout", this._handleMouseOut, this),
            (n._leaflet_disable_events = !0),
            (this._ctx = n.getContext("2d"));
        },
        _destroyContainer: function () {
          N2(this._redrawRequest),
            delete this._ctx,
            g2(this._container),
            f2(this._container),
            delete this._container;
        },
        _updatePaths: function () {
          if (!this._postponeUpdatePaths) {
            var n;
            this._redrawBounds = null;
            for (var r in this._layers) (n = this._layers[r]), n._update();
            this._redraw();
          }
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            ne.prototype._update.call(this);
            var n = this._bounds,
              r = this._container,
              s = n.getSize(),
              u = V.retina ? 2 : 1;
            k2(r, n.min),
              (r.width = u * s.x),
              (r.height = u * s.y),
              (r.style.width = s.x + "px"),
              (r.style.height = s.y + "px"),
              V.retina && this._ctx.scale(2, 2),
              this._ctx.translate(-n.min.x, -n.min.y),
              this.fire("update");
          }
        },
        _reset: function () {
          ne.prototype._reset.call(this),
            this._postponeUpdatePaths &&
              ((this._postponeUpdatePaths = !1), this._updatePaths());
        },
        _initPath: function (n) {
          this._updateDashArray(n), (this._layers[p(n)] = n);
          var r = (n._order = { layer: n, prev: this._drawLast, next: null });
          this._drawLast && (this._drawLast.next = r),
            (this._drawLast = r),
            (this._drawFirst = this._drawFirst || this._drawLast);
        },
        _addPath: function (n) {
          this._requestRedraw(n);
        },
        _removePath: function (n) {
          var r = n._order,
            s = r.next,
            u = r.prev;
          s ? (s.prev = u) : (this._drawLast = u),
            u ? (u.next = s) : (this._drawFirst = s),
            delete n._order,
            delete this._layers[p(n)],
            this._requestRedraw(n);
        },
        _updatePath: function (n) {
          this._extendRedrawBounds(n),
            n._project(),
            n._update(),
            this._requestRedraw(n);
        },
        _updateStyle: function (n) {
          this._updateDashArray(n), this._requestRedraw(n);
        },
        _updateDashArray: function (n) {
          if (typeof n.options.dashArray == "string") {
            var r = n.options.dashArray.split(/[, ]+/),
              s = [],
              u,
              c;
            for (c = 0; c < r.length; c++) {
              if (((u = Number(r[c])), isNaN(u))) return;
              s.push(u);
            }
            n.options._dashArray = s;
          } else n.options._dashArray = n.options.dashArray;
        },
        _requestRedraw: function (n) {
          this._map &&
            (this._extendRedrawBounds(n),
            (this._redrawRequest =
              this._redrawRequest || h2(this._redraw, this)));
        },
        _extendRedrawBounds: function (n) {
          if (n._pxBounds) {
            var r = (n.options.weight || 0) + 1;
            (this._redrawBounds = this._redrawBounds || new Q()),
              this._redrawBounds.extend(n._pxBounds.min.subtract([r, r])),
              this._redrawBounds.extend(n._pxBounds.max.add([r, r]));
          }
        },
        _redraw: function () {
          (this._redrawRequest = null),
            this._redrawBounds &&
              (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
            this._clear(),
            this._draw(),
            (this._redrawBounds = null);
        },
        _clear: function () {
          var n = this._redrawBounds;
          if (n) {
            var r = n.getSize();
            this._ctx.clearRect(n.min.x, n.min.y, r.x, r.y);
          } else
            this._ctx.save(),
              this._ctx.setTransform(1, 0, 0, 1, 0, 0),
              this._ctx.clearRect(
                0,
                0,
                this._container.width,
                this._container.height
              ),
              this._ctx.restore();
        },
        _draw: function () {
          var n,
            r = this._redrawBounds;
          if ((this._ctx.save(), r)) {
            var s = r.getSize();
            this._ctx.beginPath(),
              this._ctx.rect(r.min.x, r.min.y, s.x, s.y),
              this._ctx.clip();
          }
          this._drawing = !0;
          for (var u = this._drawFirst; u; u = u.next)
            (n = u.layer),
              (!r || (n._pxBounds && n._pxBounds.intersects(r))) &&
                n._updatePath();
          (this._drawing = !1), this._ctx.restore();
        },
        _updatePoly: function (n, r) {
          if (this._drawing) {
            var s,
              u,
              c,
              f,
              m = n._parts,
              P = m.length,
              C = this._ctx;
            if (P) {
              for (C.beginPath(), s = 0; s < P; s++) {
                for (u = 0, c = m[s].length; u < c; u++)
                  (f = m[s][u]), C[u ? "lineTo" : "moveTo"](f.x, f.y);
                r && C.closePath();
              }
              this._fillStroke(C, n);
            }
          }
        },
        _updateCircle: function (n) {
          if (!(!this._drawing || n._empty())) {
            var r = n._point,
              s = this._ctx,
              u = Math.max(Math.round(n._radius), 1),
              c = (Math.max(Math.round(n._radiusY), 1) || u) / u;
            c !== 1 && (s.save(), s.scale(1, c)),
              s.beginPath(),
              s.arc(r.x, r.y / c, u, 0, Math.PI * 2, !1),
              c !== 1 && s.restore(),
              this._fillStroke(s, n);
          }
        },
        _fillStroke: function (n, r) {
          var s = r.options;
          s.fill &&
            ((n.globalAlpha = s.fillOpacity),
            (n.fillStyle = s.fillColor || s.color),
            n.fill(s.fillRule || "evenodd")),
            s.stroke &&
              s.weight !== 0 &&
              (n.setLineDash &&
                n.setLineDash((r.options && r.options._dashArray) || []),
              (n.globalAlpha = s.opacity),
              (n.lineWidth = s.weight),
              (n.strokeStyle = s.color),
              (n.lineCap = s.lineCap),
              (n.lineJoin = s.lineJoin),
              n.stroke());
        },
        _onClick: function (n) {
          for (
            var r = this._map.mouseEventToLayerPoint(n),
              s,
              u,
              c = this._drawFirst;
            c;
            c = c.next
          )
            (s = c.layer),
              s.options.interactive &&
                s._containsPoint(r) &&
                (!(n.type === "click" || n.type === "preclick") ||
                  !this._map._draggableMoved(s)) &&
                (u = s);
          this._fireEvent(u ? [u] : !1, n);
        },
        _onMouseMove: function (n) {
          if (
            !(
              !this._map ||
              this._map.dragging.moving() ||
              this._map._animatingZoom
            )
          ) {
            var r = this._map.mouseEventToLayerPoint(n);
            this._handleMouseHover(n, r);
          }
        },
        _handleMouseOut: function (n) {
          var r = this._hoveredLayer;
          r &&
            (S2(this._container, "leaflet-interactive"),
            this._fireEvent([r], n, "mouseout"),
            (this._hoveredLayer = null),
            (this._mouseHoverThrottled = !1));
        },
        _handleMouseHover: function (n, r) {
          if (!this._mouseHoverThrottled) {
            for (var s, u, c = this._drawFirst; c; c = c.next)
              (s = c.layer),
                s.options.interactive && s._containsPoint(r) && (u = s);
            u !== this._hoveredLayer &&
              (this._handleMouseOut(n),
              u &&
                (X(this._container, "leaflet-interactive"),
                this._fireEvent([u], n, "mouseover"),
                (this._hoveredLayer = u))),
              this._fireEvent(
                this._hoveredLayer ? [this._hoveredLayer] : !1,
                n
              ),
              (this._mouseHoverThrottled = !0),
              setTimeout(
                h(function () {
                  this._mouseHoverThrottled = !1;
                }, this),
                32
              );
          }
        },
        _fireEvent: function (n, r, s) {
          this._map._fireDOMEvent(r, s || r.type, n);
        },
        _bringToFront: function (n) {
          var r = n._order;
          if (r) {
            var s = r.next,
              u = r.prev;
            if (s) s.prev = u;
            else return;
            u ? (u.next = s) : s && (this._drawFirst = s),
              (r.prev = this._drawLast),
              (this._drawLast.next = r),
              (r.next = null),
              (this._drawLast = r),
              this._requestRedraw(n);
          }
        },
        _bringToBack: function (n) {
          var r = n._order;
          if (r) {
            var s = r.next,
              u = r.prev;
            if (u) u.next = s;
            else return;
            s ? (s.prev = u) : u && (this._drawLast = u),
              (r.prev = null),
              (r.next = this._drawFirst),
              (this._drawFirst.prev = r),
              (this._drawFirst = r),
              this._requestRedraw(n);
          }
        },
      });
    function Ko(n) {
      return V.canvas ? new Go(n) : null;
    }
    var F4 = (function () {
        try {
          return (
            document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
            function (n) {
              return document.createElement("<lvml:" + n + ' class="lvml">');
            }
          );
        } catch {}
        return function (n) {
          return document.createElement(
            "<" + n + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
          );
        };
      })(),
      Zl = {
        _initContainer: function () {
          this._container = l2("div", "leaflet-vml-container");
        },
        _update: function () {
          this._map._animatingZoom ||
            (ne.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function (n) {
          var r = (n._container = F4("shape"));
          X(r, "leaflet-vml-shape " + (this.options.className || "")),
            (r.coordsize = "1 1"),
            (n._path = F4("path")),
            r.appendChild(n._path),
            this._updateStyle(n),
            (this._layers[p(n)] = n);
        },
        _addPath: function (n) {
          var r = n._container;
          this._container.appendChild(r),
            n.options.interactive && n.addInteractiveTarget(r);
        },
        _removePath: function (n) {
          var r = n._container;
          g2(r), n.removeInteractiveTarget(r), delete this._layers[p(n)];
        },
        _updateStyle: function (n) {
          var r = n._stroke,
            s = n._fill,
            u = n.options,
            c = n._container;
          (c.stroked = !!u.stroke),
            (c.filled = !!u.fill),
            u.stroke
              ? (r || (r = n._stroke = F4("stroke")),
                c.appendChild(r),
                (r.weight = u.weight + "px"),
                (r.color = u.color),
                (r.opacity = u.opacity),
                u.dashArray
                  ? (r.dashStyle = y(u.dashArray)
                      ? u.dashArray.join(" ")
                      : u.dashArray.replace(/( *, *)/g, " "))
                  : (r.dashStyle = ""),
                (r.endcap = u.lineCap.replace("butt", "flat")),
                (r.joinstyle = u.lineJoin))
              : r && (c.removeChild(r), (n._stroke = null)),
            u.fill
              ? (s || (s = n._fill = F4("fill")),
                c.appendChild(s),
                (s.color = u.fillColor || u.color),
                (s.opacity = u.fillOpacity))
              : s && (c.removeChild(s), (n._fill = null));
        },
        _updateCircle: function (n) {
          var r = n._point.round(),
            s = Math.round(n._radius),
            u = Math.round(n._radiusY || s);
          this._setPath(
            n,
            n._empty()
              ? "M0 0"
              : "AL " +
                  r.x +
                  "," +
                  r.y +
                  " " +
                  s +
                  "," +
                  u +
                  " 0," +
                  65535 * 360
          );
        },
        _setPath: function (n, r) {
          n._path.v = r;
        },
        _bringToFront: function (n) {
          S1(n._container);
        },
        _bringToBack: function (n) {
          L1(n._container);
        },
      },
      ln = V.vml ? F4 : X9,
      j4 = ne.extend({
        _initContainer: function () {
          (this._container = ln("svg")),
            this._container.setAttribute("pointer-events", "none"),
            (this._rootGroup = ln("g")),
            this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function () {
          g2(this._container),
            f2(this._container),
            delete this._container,
            delete this._rootGroup,
            delete this._svgSize;
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            ne.prototype._update.call(this);
            var n = this._bounds,
              r = n.getSize(),
              s = this._container;
            (!this._svgSize || !this._svgSize.equals(r)) &&
              ((this._svgSize = r),
              s.setAttribute("width", r.x),
              s.setAttribute("height", r.y)),
              k2(s, n.min),
              s.setAttribute("viewBox", [n.min.x, n.min.y, r.x, r.y].join(" ")),
              this.fire("update");
          }
        },
        _initPath: function (n) {
          var r = (n._path = ln("path"));
          n.options.className && X(r, n.options.className),
            n.options.interactive && X(r, "leaflet-interactive"),
            this._updateStyle(n),
            (this._layers[p(n)] = n);
        },
        _addPath: function (n) {
          this._rootGroup || this._initContainer(),
            this._rootGroup.appendChild(n._path),
            n.addInteractiveTarget(n._path);
        },
        _removePath: function (n) {
          g2(n._path),
            n.removeInteractiveTarget(n._path),
            delete this._layers[p(n)];
        },
        _updatePath: function (n) {
          n._project(), n._update();
        },
        _updateStyle: function (n) {
          var r = n._path,
            s = n.options;
          r &&
            (s.stroke
              ? (r.setAttribute("stroke", s.color),
                r.setAttribute("stroke-opacity", s.opacity),
                r.setAttribute("stroke-width", s.weight),
                r.setAttribute("stroke-linecap", s.lineCap),
                r.setAttribute("stroke-linejoin", s.lineJoin),
                s.dashArray
                  ? r.setAttribute("stroke-dasharray", s.dashArray)
                  : r.removeAttribute("stroke-dasharray"),
                s.dashOffset
                  ? r.setAttribute("stroke-dashoffset", s.dashOffset)
                  : r.removeAttribute("stroke-dashoffset"))
              : r.setAttribute("stroke", "none"),
            s.fill
              ? (r.setAttribute("fill", s.fillColor || s.color),
                r.setAttribute("fill-opacity", s.fillOpacity),
                r.setAttribute("fill-rule", s.fillRule || "evenodd"))
              : r.setAttribute("fill", "none"));
        },
        _updatePoly: function (n, r) {
          this._setPath(n, J9(n._parts, r));
        },
        _updateCircle: function (n) {
          var r = n._point,
            s = Math.max(Math.round(n._radius), 1),
            u = Math.max(Math.round(n._radiusY), 1) || s,
            c = "a" + s + "," + u + " 0 1,0 ",
            f = n._empty()
              ? "M0 0"
              : "M" +
                (r.x - s) +
                "," +
                r.y +
                c +
                s * 2 +
                ",0 " +
                c +
                -s * 2 +
                ",0 ";
          this._setPath(n, f);
        },
        _setPath: function (n, r) {
          n._path.setAttribute("d", r);
        },
        _bringToFront: function (n) {
          S1(n._path);
        },
        _bringToBack: function (n) {
          L1(n._path);
        },
      });
    V.vml && j4.include(Zl);
    function qo(n) {
      return V.svg || V.vml ? new j4(n) : null;
    }
    r2.include({
      getRenderer: function (n) {
        var r =
          n.options.renderer ||
          this._getPaneRenderer(n.options.pane) ||
          this.options.renderer ||
          this._renderer;
        return (
          r || (r = this._renderer = this._createRenderer()),
          this.hasLayer(r) || this.addLayer(r),
          r
        );
      },
      _getPaneRenderer: function (n) {
        if (n === "overlayPane" || n === void 0) return !1;
        var r = this._paneRenderers[n];
        return (
          r === void 0 &&
            ((r = this._createRenderer({ pane: n })),
            (this._paneRenderers[n] = r)),
          r
        );
      },
      _createRenderer: function (n) {
        return (this.options.preferCanvas && Ko(n)) || qo(n);
      },
    });
    var Yo = E1.extend({
      initialize: function (n, r) {
        E1.prototype.initialize.call(this, this._boundsToLatLngs(n), r);
      },
      setBounds: function (n) {
        return this.setLatLngs(this._boundsToLatLngs(n));
      },
      _boundsToLatLngs: function (n) {
        return (
          (n = c2(n)),
          [
            n.getSouthWest(),
            n.getNorthWest(),
            n.getNorthEast(),
            n.getSouthEast(),
          ]
        );
      },
    });
    function Ul(n, r) {
      return new Yo(n, r);
    }
    (j4.create = ln),
      (j4.pointsToPath = J9),
      (ee.geometryToLayer = tn),
      (ee.coordsToLatLng = fi),
      (ee.coordsToLatLngs = en),
      (ee.latLngToCoords = di),
      (ee.latLngsToCoords = nn),
      (ee.getFeature = T1),
      (ee.asFeature = rn),
      r2.mergeOptions({ boxZoom: !0 });
    var Xo = Ut.extend({
      initialize: function (n) {
        (this._map = n),
          (this._container = n._container),
          (this._pane = n._panes.overlayPane),
          (this._resetStateTimeout = 0),
          n.on("unload", this._destroy, this);
      },
      addHooks: function () {
        Y(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function () {
        f2(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function () {
        return this._moved;
      },
      _destroy: function () {
        g2(this._pane), delete this._pane;
      },
      _resetState: function () {
        (this._resetStateTimeout = 0), (this._moved = !1);
      },
      _clearDeferredResetState: function () {
        this._resetStateTimeout !== 0 &&
          (clearTimeout(this._resetStateTimeout),
          (this._resetStateTimeout = 0));
      },
      _onMouseDown: function (n) {
        if (!n.shiftKey || (n.which !== 1 && n.button !== 1)) return !1;
        this._clearDeferredResetState(),
          this._resetState(),
          O4(),
          K0(),
          (this._startPoint = this._map.mouseEventToContainerPoint(n)),
          Y(
            document,
            {
              contextmenu: Ye,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this
          );
      },
      _onMouseMove: function (n) {
        this._moved ||
          ((this._moved = !0),
          (this._box = l2("div", "leaflet-zoom-box", this._container)),
          X(this._container, "leaflet-crosshair"),
          this._map.fire("boxzoomstart")),
          (this._point = this._map.mouseEventToContainerPoint(n));
        var r = new Q(this._point, this._startPoint),
          s = r.getSize();
        k2(this._box, r.min),
          (this._box.style.width = s.x + "px"),
          (this._box.style.height = s.y + "px");
      },
      _finish: function () {
        this._moved &&
          (g2(this._box), S2(this._container, "leaflet-crosshair")),
          z4(),
          q0(),
          f2(
            document,
            {
              contextmenu: Ye,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this
          );
      },
      _onMouseUp: function (n) {
        if (
          !(n.which !== 1 && n.button !== 1) &&
          (this._finish(), !!this._moved)
        ) {
          this._clearDeferredResetState(),
            (this._resetStateTimeout = setTimeout(
              h(this._resetState, this),
              0
            ));
          var r = new T2(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(r).fire("boxzoomend", { boxZoomBounds: r });
        }
      },
      _onKeyDown: function (n) {
        n.keyCode === 27 &&
          (this._finish(), this._clearDeferredResetState(), this._resetState());
      },
    });
    r2.addInitHook("addHandler", "boxZoom", Xo),
      r2.mergeOptions({ doubleClickZoom: !0 });
    var Jo = Ut.extend({
      addHooks: function () {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function () {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function (n) {
        var r = this._map,
          s = r.getZoom(),
          u = r.options.zoomDelta,
          c = n.originalEvent.shiftKey ? s - u : s + u;
        r.options.doubleClickZoom === "center"
          ? r.setZoom(c)
          : r.setZoomAround(n.containerPoint, c);
      },
    });
    r2.addInitHook("addHandler", "doubleClickZoom", Jo),
      r2.mergeOptions({
        dragging: !0,
        inertia: !0,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: 0.2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0,
      });
    var t6 = Ut.extend({
      addHooks: function () {
        if (!this._draggable) {
          var n = this._map;
          (this._draggable = new _e(n._mapPane, n._container)),
            this._draggable.on(
              {
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            ),
            this._draggable.on("predrag", this._onPreDragLimit, this),
            n.options.worldCopyJump &&
              (this._draggable.on("predrag", this._onPreDragWrap, this),
              n.on("zoomend", this._onZoomEnd, this),
              n.whenReady(this._onZoomEnd, this));
        }
        X(this._map._container, "leaflet-grab leaflet-touch-drag"),
          this._draggable.enable(),
          (this._positions = []),
          (this._times = []);
      },
      removeHooks: function () {
        S2(this._map._container, "leaflet-grab"),
          S2(this._map._container, "leaflet-touch-drag"),
          this._draggable.disable();
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      moving: function () {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function () {
        var n = this._map;
        if (
          (n._stop(),
          this._map.options.maxBounds && this._map.options.maxBoundsViscosity)
        ) {
          var r = c2(this._map.options.maxBounds);
          (this._offsetLimit = o2(
            this._map.latLngToContainerPoint(r.getNorthWest()).multiplyBy(-1),
            this._map
              .latLngToContainerPoint(r.getSouthEast())
              .multiplyBy(-1)
              .add(this._map.getSize())
          )),
            (this._viscosity = Math.min(
              1,
              Math.max(0, this._map.options.maxBoundsViscosity)
            ));
        } else this._offsetLimit = null;
        n.fire("movestart").fire("dragstart"),
          n.options.inertia && ((this._positions = []), (this._times = []));
      },
      _onDrag: function (n) {
        if (this._map.options.inertia) {
          var r = (this._lastTime = +new Date()),
            s = (this._lastPos =
              this._draggable._absPos || this._draggable._newPos);
          this._positions.push(s), this._times.push(r), this._prunePositions(r);
        }
        this._map.fire("move", n).fire("drag", n);
      },
      _prunePositions: function (n) {
        for (; this._positions.length > 1 && n - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function () {
        var n = this._map.getSize().divideBy(2),
          r = this._map.latLngToLayerPoint([0, 0]);
        (this._initialWorldOffset = r.subtract(n).x),
          (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
      },
      _viscousLimit: function (n, r) {
        return n - (n - r) * this._viscosity;
      },
      _onPreDragLimit: function () {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var n = this._draggable._newPos.subtract(this._draggable._startPos),
            r = this._offsetLimit;
          n.x < r.min.x && (n.x = this._viscousLimit(n.x, r.min.x)),
            n.y < r.min.y && (n.y = this._viscousLimit(n.y, r.min.y)),
            n.x > r.max.x && (n.x = this._viscousLimit(n.x, r.max.x)),
            n.y > r.max.y && (n.y = this._viscousLimit(n.y, r.max.y)),
            (this._draggable._newPos = this._draggable._startPos.add(n));
        }
      },
      _onPreDragWrap: function () {
        var n = this._worldWidth,
          r = Math.round(n / 2),
          s = this._initialWorldOffset,
          u = this._draggable._newPos.x,
          c = ((u - r + s) % n) + r - s,
          f = ((u + r + s) % n) - r - s,
          m = Math.abs(c + s) < Math.abs(f + s) ? c : f;
        (this._draggable._absPos = this._draggable._newPos.clone()),
          (this._draggable._newPos.x = m);
      },
      _onDragEnd: function (n) {
        var r = this._map,
          s = r.options,
          u = !s.inertia || n.noInertia || this._times.length < 2;
        if ((r.fire("dragend", n), u)) r.fire("moveend");
        else {
          this._prunePositions(+new Date());
          var c = this._lastPos.subtract(this._positions[0]),
            f = (this._lastTime - this._times[0]) / 1e3,
            m = s.easeLinearity,
            P = c.multiplyBy(m / f),
            C = P.distanceTo([0, 0]),
            I = Math.min(s.inertiaMaxSpeed, C),
            H = P.multiplyBy(I / C),
            $ = I / (s.inertiaDeceleration * m),
            t2 = H.multiplyBy(-$ / 2).round();
          !t2.x && !t2.y
            ? r.fire("moveend")
            : ((t2 = r._limitOffset(t2, r.options.maxBounds)),
              h2(function () {
                r.panBy(t2, {
                  duration: $,
                  easeLinearity: m,
                  noMoveStart: !0,
                  animate: !0,
                });
              }));
        }
      },
    });
    r2.addInitHook("addHandler", "dragging", t6),
      r2.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
    var e6 = Ut.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173],
      },
      initialize: function (n) {
        (this._map = n),
          this._setPanDelta(n.options.keyboardPanDelta),
          this._setZoomDelta(n.options.zoomDelta);
      },
      addHooks: function () {
        var n = this._map._container;
        n.tabIndex <= 0 && (n.tabIndex = "0"),
          Y(
            n,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown,
            },
            this
          ),
          this._map.on(
            { focus: this._addHooks, blur: this._removeHooks },
            this
          );
      },
      removeHooks: function () {
        this._removeHooks(),
          f2(
            this._map._container,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown,
            },
            this
          ),
          this._map.off(
            { focus: this._addHooks, blur: this._removeHooks },
            this
          );
      },
      _onMouseDown: function () {
        if (!this._focused) {
          var n = document.body,
            r = document.documentElement,
            s = n.scrollTop || r.scrollTop,
            u = n.scrollLeft || r.scrollLeft;
          this._map._container.focus(), window.scrollTo(u, s);
        }
      },
      _onFocus: function () {
        (this._focused = !0), this._map.fire("focus");
      },
      _onBlur: function () {
        (this._focused = !1), this._map.fire("blur");
      },
      _setPanDelta: function (n) {
        var r = (this._panKeys = {}),
          s = this.keyCodes,
          u,
          c;
        for (u = 0, c = s.left.length; u < c; u++) r[s.left[u]] = [-1 * n, 0];
        for (u = 0, c = s.right.length; u < c; u++) r[s.right[u]] = [n, 0];
        for (u = 0, c = s.down.length; u < c; u++) r[s.down[u]] = [0, n];
        for (u = 0, c = s.up.length; u < c; u++) r[s.up[u]] = [0, -1 * n];
      },
      _setZoomDelta: function (n) {
        var r = (this._zoomKeys = {}),
          s = this.keyCodes,
          u,
          c;
        for (u = 0, c = s.zoomIn.length; u < c; u++) r[s.zoomIn[u]] = n;
        for (u = 0, c = s.zoomOut.length; u < c; u++) r[s.zoomOut[u]] = -n;
      },
      _addHooks: function () {
        Y(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function () {
        f2(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function (n) {
        if (!(n.altKey || n.ctrlKey || n.metaKey)) {
          var r = n.keyCode,
            s = this._map,
            u;
          if (r in this._panKeys) {
            if (!s._panAnim || !s._panAnim._inProgress)
              if (
                ((u = this._panKeys[r]),
                n.shiftKey && (u = D(u).multiplyBy(3)),
                s.options.maxBounds &&
                  (u = s._limitOffset(D(u), s.options.maxBounds)),
                s.options.worldCopyJump)
              ) {
                var c = s.wrapLatLng(
                  s.unproject(s.project(s.getCenter()).add(u))
                );
                s.panTo(c);
              } else s.panBy(u);
          } else if (r in this._zoomKeys)
            s.setZoom(s.getZoom() + (n.shiftKey ? 3 : 1) * this._zoomKeys[r]);
          else if (r === 27 && s._popup && s._popup.options.closeOnEscapeKey)
            s.closePopup();
          else return;
          Ye(n);
        }
      },
    });
    r2.addInitHook("addHandler", "keyboard", e6),
      r2.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60,
      });
    var n6 = Ut.extend({
      addHooks: function () {
        Y(this._map._container, "wheel", this._onWheelScroll, this),
          (this._delta = 0);
      },
      removeHooks: function () {
        f2(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function (n) {
        var r = Co(n),
          s = this._map.options.wheelDebounceTime;
        (this._delta += r),
          (this._lastMousePos = this._map.mouseEventToContainerPoint(n)),
          this._startTime || (this._startTime = +new Date());
        var u = Math.max(s - (+new Date() - this._startTime), 0);
        clearTimeout(this._timer),
          (this._timer = setTimeout(h(this._performZoom, this), u)),
          Ye(n);
      },
      _performZoom: function () {
        var n = this._map,
          r = n.getZoom(),
          s = this._map.options.zoomSnap || 0;
        n._stop();
        var u = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
          c = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(u))))) / Math.LN2,
          f = s ? Math.ceil(c / s) * s : c,
          m = n._limitZoom(r + (this._delta > 0 ? f : -f)) - r;
        (this._delta = 0),
          (this._startTime = null),
          m &&
            (n.options.scrollWheelZoom === "center"
              ? n.setZoom(r + m)
              : n.setZoomAround(this._lastMousePos, r + m));
      },
    });
    r2.addInitHook("addHandler", "scrollWheelZoom", n6);
    var Hl = 600;
    r2.mergeOptions({
      tapHold: V.touchNative && V.safari && V.mobile,
      tapTolerance: 15,
    });
    var i6 = Ut.extend({
      addHooks: function () {
        Y(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function () {
        f2(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function (n) {
        if ((clearTimeout(this._holdTimeout), n.touches.length === 1)) {
          var r = n.touches[0];
          (this._startPos = this._newPos = new N(r.clientX, r.clientY)),
            (this._holdTimeout = setTimeout(
              h(function () {
                this._cancel(),
                  this._isTapValid() &&
                    (Y(document, "touchend", F2),
                    Y(
                      document,
                      "touchend touchcancel",
                      this._cancelClickPrevent
                    ),
                    this._simulateEvent("contextmenu", r));
              }, this),
              Hl
            )),
            Y(document, "touchend touchcancel contextmenu", this._cancel, this),
            Y(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function n() {
        f2(document, "touchend", F2), f2(document, "touchend touchcancel", n);
      },
      _cancel: function () {
        clearTimeout(this._holdTimeout),
          f2(document, "touchend touchcancel contextmenu", this._cancel, this),
          f2(document, "touchmove", this._onMove, this);
      },
      _onMove: function (n) {
        var r = n.touches[0];
        this._newPos = new N(r.clientX, r.clientY);
      },
      _isTapValid: function () {
        return (
          this._newPos.distanceTo(this._startPos) <=
          this._map.options.tapTolerance
        );
      },
      _simulateEvent: function (n, r) {
        var s = new MouseEvent(n, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          screenX: r.screenX,
          screenY: r.screenY,
          clientX: r.clientX,
          clientY: r.clientY,
        });
        (s._simulated = !0), r.target.dispatchEvent(s);
      },
    });
    r2.addInitHook("addHandler", "tapHold", i6),
      r2.mergeOptions({ touchZoom: V.touch, bounceAtZoomLimits: !0 });
    var r6 = Ut.extend({
      addHooks: function () {
        X(this._map._container, "leaflet-touch-zoom"),
          Y(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function () {
        S2(this._map._container, "leaflet-touch-zoom"),
          f2(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function (n) {
        var r = this._map;
        if (
          !(
            !n.touches ||
            n.touches.length !== 2 ||
            r._animatingZoom ||
            this._zooming
          )
        ) {
          var s = r.mouseEventToContainerPoint(n.touches[0]),
            u = r.mouseEventToContainerPoint(n.touches[1]);
          (this._centerPoint = r.getSize()._divideBy(2)),
            (this._startLatLng = r.containerPointToLatLng(this._centerPoint)),
            r.options.touchZoom !== "center" &&
              (this._pinchStartLatLng = r.containerPointToLatLng(
                s.add(u)._divideBy(2)
              )),
            (this._startDist = s.distanceTo(u)),
            (this._startZoom = r.getZoom()),
            (this._moved = !1),
            (this._zooming = !0),
            r._stop(),
            Y(document, "touchmove", this._onTouchMove, this),
            Y(document, "touchend touchcancel", this._onTouchEnd, this),
            F2(n);
        }
      },
      _onTouchMove: function (n) {
        if (!(!n.touches || n.touches.length !== 2 || !this._zooming)) {
          var r = this._map,
            s = r.mouseEventToContainerPoint(n.touches[0]),
            u = r.mouseEventToContainerPoint(n.touches[1]),
            c = s.distanceTo(u) / this._startDist;
          if (
            ((this._zoom = r.getScaleZoom(c, this._startZoom)),
            !r.options.bounceAtZoomLimits &&
              ((this._zoom < r.getMinZoom() && c < 1) ||
                (this._zoom > r.getMaxZoom() && c > 1)) &&
              (this._zoom = r._limitZoom(this._zoom)),
            r.options.touchZoom === "center")
          ) {
            if (((this._center = this._startLatLng), c === 1)) return;
          } else {
            var f = s._add(u)._divideBy(2)._subtract(this._centerPoint);
            if (c === 1 && f.x === 0 && f.y === 0) return;
            this._center = r.unproject(
              r.project(this._pinchStartLatLng, this._zoom).subtract(f),
              this._zoom
            );
          }
          this._moved || (r._moveStart(!0, !1), (this._moved = !0)),
            N2(this._animRequest);
          var m = h(
            r._move,
            r,
            this._center,
            this._zoom,
            { pinch: !0, round: !1 },
            void 0
          );
          (this._animRequest = h2(m, this, !0)), F2(n);
        }
      },
      _onTouchEnd: function () {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        (this._zooming = !1),
          N2(this._animRequest),
          f2(document, "touchmove", this._onTouchMove, this),
          f2(document, "touchend touchcancel", this._onTouchEnd, this),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap
              )
            : this._map._resetView(
                this._center,
                this._map._limitZoom(this._zoom)
              );
      },
    });
    r2.addInitHook("addHandler", "touchZoom", r6),
      (r2.BoxZoom = Xo),
      (r2.DoubleClickZoom = Jo),
      (r2.Drag = t6),
      (r2.Keyboard = e6),
      (r2.ScrollWheelZoom = n6),
      (r2.TapHold = i6),
      (r2.TouchZoom = r6),
      (i.Bounds = Q),
      (i.Browser = V),
      (i.CRS = J2),
      (i.Canvas = Go),
      (i.Circle = hi),
      (i.CircleMarker = J3),
      (i.Class = pt),
      (i.Control = Tt),
      (i.DivIcon = Vo),
      (i.DivOverlay = Ht),
      (i.DomEvent = sl),
      (i.DomUtil = rl),
      (i.Draggable = _e),
      (i.Evented = Xt),
      (i.FeatureGroup = Jt),
      (i.GeoJSON = ee),
      (i.GridLayer = B4),
      (i.Handler = Ut),
      (i.Icon = C1),
      (i.ImageOverlay = on),
      (i.LatLng = a2),
      (i.LatLngBounds = T2),
      (i.Layer = Mt),
      (i.LayerGroup = k1),
      (i.LineUtil = yl),
      (i.Map = r2),
      (i.Marker = X3),
      (i.Mixin = dl),
      (i.Path = ve),
      (i.Point = N),
      (i.PolyUtil = pl),
      (i.Polygon = E1),
      (i.Polyline = te),
      (i.Popup = sn),
      (i.PosAnimation = Eo),
      (i.Projection = wl),
      (i.Rectangle = Yo),
      (i.Renderer = ne),
      (i.SVG = j4),
      (i.SVGOverlay = bo),
      (i.TileLayer = M1),
      (i.Tooltip = an),
      (i.Transformation = B0),
      (i.Util = Qe),
      (i.VideoOverlay = Wo),
      (i.bind = h),
      (i.bounds = o2),
      (i.canvas = Ko),
      (i.circle = Tl),
      (i.circleMarker = El),
      (i.control = R4),
      (i.divIcon = Bl),
      (i.extend = a),
      (i.featureGroup = Ll),
      (i.geoJSON = Ho),
      (i.geoJson = zl),
      (i.gridLayer = Fl),
      (i.icon = kl),
      (i.imageOverlay = Nl),
      (i.latLng = q),
      (i.latLngBounds = c2),
      (i.layerGroup = Sl),
      (i.map = al),
      (i.marker = Cl),
      (i.point = D),
      (i.polygon = Ol),
      (i.polyline = Ml),
      (i.popup = Al),
      (i.rectangle = Ul),
      (i.setOptions = M),
      (i.stamp = p),
      (i.svg = qo),
      (i.svgOverlay = Rl),
      (i.tileLayer = $o),
      (i.tooltip = Dl),
      (i.transformation = C4),
      (i.version = o),
      (i.videoOverlay = Il);
    var Wl = window.L;
    (i.noConflict = function () {
      return (window.L = Wl), this;
    }),
      (window.L = i);
  });
})(Yr, Yr.exports);
var k4 = Yr.exports;
const bi = Fs(k4);
function I0(t, e, i) {
  return Object.freeze({ instance: t, context: e, container: i });
}
function R0(t, e) {
  return e == null
    ? function (o, a) {
        const l = G.useRef();
        return l.current || (l.current = t(o, a)), l;
      }
    : function (o, a) {
        const l = G.useRef();
        l.current || (l.current = t(o, a));
        const h = G.useRef(o),
          { instance: d } = l.current;
        return (
          G.useEffect(
            function () {
              h.current !== o && (e(d, o, h.current), (h.current = o));
            },
            [d, o, a]
          ),
          l
        );
      };
}
function p5(t, e) {
  G.useEffect(
    function () {
      return (
        (e.layerContainer ?? e.map).addLayer(t.instance),
        function () {
          var l;
          (l = e.layerContainer) == null || l.removeLayer(t.instance),
            e.map.removeLayer(t.instance);
        }
      );
    },
    [e, t]
  );
}
function m5(t) {
  return function (i) {
    const o = K9(),
      a = t(N0(i, o), o);
    return (
      u5(o.map, i.attribution),
      q9(a.current, i.eventHandlers),
      p5(a.current, o),
      a
    );
  };
}
function Sh(t, e) {
  const i = G.useRef();
  G.useEffect(
    function () {
      if (e.pathOptions !== i.current) {
        const a = e.pathOptions ?? {};
        t.instance.setStyle(a), (i.current = a);
      }
    },
    [t, e]
  );
}
function Lh(t) {
  return function (i) {
    const o = K9(),
      a = t(N0(i, o), o);
    return (
      q9(a.current, i.eventHandlers), p5(a.current, o), Sh(a.current, i), a
    );
  };
}
function kh(t, e) {
  const i = R0(t, e),
    o = m5(i);
  return d5(o);
}
function Ch(t, e) {
  const i = R0(t),
    o = Ph(i, e);
  return wh(o);
}
function Eh(t, e) {
  const i = R0(t, e),
    o = Lh(i);
  return d5(o);
}
function Th(t, e) {
  const i = R0(t, e),
    o = m5(i);
  return xh(o);
}
function Mh(t, e, i) {
  const { opacity: o, zIndex: a } = e;
  o != null && o !== i.opacity && t.setOpacity(o),
    a != null && a !== i.zIndex && t.setZIndex(a);
}
const $1 = Eh(
  function ({ data: e, ...i }, o) {
    const a = new k4.GeoJSON(e, i);
    return I0(a, c5(o, { overlayContainer: a }));
  },
  function (e, i, o) {
    i.style !== o.style &&
      (i.style == null ? e.resetStyle() : e.setStyle(i.style));
  }
);
function Xr() {
  return (
    (Xr =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = arguments[e];
          for (var o in i)
            Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
        }
        return t;
      }),
    Xr.apply(this, arguments)
  );
}
function Oh(
  {
    bounds: t,
    boundsOptions: e,
    center: i,
    children: o,
    className: a,
    id: l,
    placeholder: h,
    style: d,
    whenReady: p,
    zoom: g,
    ...x
  },
  S
) {
  const [k] = G.useState({ className: a, id: l, style: d }),
    [T, z] = G.useState(null);
  G.useImperativeHandle(S, () => (T == null ? void 0 : T.map) ?? null, [T]);
  const M = G.useCallback((v) => {
    if (v !== null && T === null) {
      const _ = new k4.Map(v, x);
      i != null && g != null ? _.setView(i, g) : t != null && _.fitBounds(t, e),
        p != null && _.whenReady(p),
        z(yh(_));
    }
  }, []);
  G.useEffect(
    () => () => {
      T == null || T.map.remove();
    },
    [T]
  );
  const U = T ? Vi.createElement(f5, { value: T }, o) : h ?? null;
  return Vi.createElement("div", Xr({}, k, { ref: M }), U);
}
const _5 = G.forwardRef(Oh),
  Le = kh(
    function ({ position: e, ...i }, o) {
      const a = new k4.Marker(e, i);
      return I0(a, c5(o, { overlayContainer: a }));
    },
    function (e, i, o) {
      i.position !== o.position && e.setLatLng(i.position),
        i.icon != null && i.icon !== o.icon && e.setIcon(i.icon),
        i.zIndexOffset != null &&
          i.zIndexOffset !== o.zIndexOffset &&
          e.setZIndexOffset(i.zIndexOffset),
        i.opacity != null && i.opacity !== o.opacity && e.setOpacity(i.opacity),
        e.dragging != null &&
          i.draggable !== o.draggable &&
          (i.draggable === !0 ? e.dragging.enable() : e.dragging.disable());
    }
  ),
  zt = Ch(
    function (e, i) {
      const o = new k4.Popup(e, i.overlayContainer);
      return I0(o, i);
    },
    function (e, i, { position: o }, a) {
      G.useEffect(
        function () {
          const { instance: h } = e;
          function d(g) {
            g.popup === h && (h.update(), a(!0));
          }
          function p(g) {
            g.popup === h && a(!1);
          }
          return (
            i.map.on({ popupopen: d, popupclose: p }),
            i.overlayContainer == null
              ? (o != null && h.setLatLng(o), h.openOn(i.map))
              : i.overlayContainer.bindPopup(h),
            function () {
              var x;
              i.map.off({ popupopen: d, popupclose: p }),
                (x = i.overlayContainer) == null || x.unbindPopup(),
                i.map.removeLayer(h);
            }
          );
        },
        [e, i, a, o]
      );
    }
  ),
  v5 = Th(
    function ({ url: e, ...i }, o) {
      const a = new k4.TileLayer(e, N0(i, o));
      return I0(a, o);
    },
    function (e, i, o) {
      Mh(e, i, o);
      const { url: a } = i;
      a != null && a !== o.url && e.setUrl(a);
    }
  ),
  g5 = "FeatureCollection",
  y5 = [
    {
      type: "Feature",
      geometry: {
        type: "MultiLineString",
        coordinates: [
          [
            [23.72985, 41.96329, 1556],
            [23.72976, 41.96329, 1555],
            [23.7297, 41.9633, 1555],
            [23.72962, 41.96331, 1554],
            [23.72955, 41.9633, 1553],
            [23.72948, 41.9633, 1553],
            [23.7294, 41.96329, 1553],
            [23.72934, 41.96329, 1553],
            [23.72927, 41.96329, 1553],
            [23.72921, 41.96332, 1554],
            [23.72917, 41.96339, 1555],
            [23.72916, 41.96345, 1556],
            [23.72915, 41.96351, 1557],
            [23.72912, 41.96357, 1558],
            [23.7291, 41.96362, 1559],
            [23.72904, 41.96366, 1559],
            [23.72898, 41.96371, 1560],
            [23.72892, 41.96375, 1561],
            [23.72887, 41.96379, 1562],
            [23.72883, 41.96384, 1563],
            [23.7288, 41.96389, 1564],
            [23.72877, 41.96393, 1565],
            [23.72873, 41.96398, 1566],
            [23.7287, 41.96403, 1567],
            [23.72867, 41.96408, 1568],
            [23.72865, 41.96414, 1569],
            [23.72865, 41.96419, 1570],
            [23.72867, 41.96426, 1571],
            [23.72869, 41.96431, 1572],
            [23.72871, 41.96436, 1573],
            [23.72872, 41.96442, 1574],
            [23.72871, 41.96447, 1574],
            [23.7287, 41.96452, 1575],
            [23.7287, 41.96457, 1575],
            [23.72871, 41.96464, 1575],
            [23.72873, 41.96469, 1575],
            [23.72874, 41.96474, 1576],
            [23.72873, 41.96479, 1576],
            [23.72873, 41.96485, 1576],
            [23.72872, 41.96491, 1576],
            [23.7287, 41.96497, 1577],
            [23.72868, 41.96502, 1577],
            [23.72866, 41.96508, 1578],
            [23.72864, 41.96513, 1579],
            [23.72861, 41.96518, 1579],
            [23.72859, 41.96522, 1580],
            [23.72855, 41.96528, 1580],
            [23.72853, 41.96535, 1581],
            [23.72852, 41.96541, 1582],
            [23.72852, 41.96546, 1582],
            [23.72851, 41.96551, 1582],
            [23.7285, 41.96556, 1583],
            [23.72849, 41.9656, 1583],
            [23.72848, 41.96565, 1583],
            [23.72848, 41.96571, 1583],
            [23.72847, 41.96577, 1583],
            [23.72847, 41.96584, 1584],
            [23.72848, 41.96589, 1584],
            [23.72847, 41.96595, 1585],
            [23.72846, 41.96599, 1585],
            [23.72845, 41.96604, 1586],
            [23.72844, 41.96609, 1586],
            [23.72844, 41.96614, 1586],
            [23.72842, 41.9662, 1587],
            [23.72841, 41.96626, 1587],
            [23.72841, 41.96631, 1587],
            [23.7284, 41.96637, 1588],
            [23.72839, 41.96641, 1588],
            [23.72837, 41.96647, 1588],
            [23.72835, 41.96652, 1589],
            [23.72833, 41.96657, 1589],
            [23.72831, 41.96663, 1590],
            [23.72828, 41.96669, 1590],
            [23.72827, 41.96673, 1590],
            [23.72825, 41.9668, 1591],
            [23.72825, 41.96686, 1592],
            [23.72826, 41.96692, 1592],
            [23.72827, 41.96698, 1593],
            [23.72829, 41.96703, 1594],
            [23.72832, 41.96709, 1594],
            [23.72835, 41.96714, 1595],
            [23.72836, 41.96721, 1596],
            [23.72837, 41.96727, 1596],
            [23.7284, 41.96733, 1597],
            [23.72842, 41.96738, 1598],
            [23.72845, 41.96743, 1599],
            [23.72846, 41.96748, 1599],
            [23.72847, 41.96752, 1600],
            [23.72847, 41.96757, 1600],
            [23.72846, 41.96762, 1600],
            [23.72845, 41.96766, 1600],
            [23.72843, 41.96771, 1600],
            [23.72841, 41.96775, 1600],
            [23.72838, 41.9678, 1599],
            [23.72835, 41.96784, 1599],
            [23.72831, 41.96789, 1599],
            [23.72828, 41.96795, 1598],
            [23.72825, 41.96799, 1598],
            [23.72821, 41.96804, 1597],
            [23.72819, 41.96809, 1597],
            [23.72816, 41.96813, 1597],
            [23.72814, 41.96818, 1596],
            [23.72812, 41.96823, 1596],
            [23.7281, 41.96828, 1596],
            [23.72808, 41.96834, 1596],
            [23.72806, 41.96839, 1596],
            [23.72805, 41.96844, 1595],
            [23.72803, 41.9685, 1595],
            [23.72803, 41.96854, 1595],
            [23.72803, 41.96859, 1595],
            [23.72805, 41.96865, 1595],
            [23.72806, 41.9687, 1595],
            [23.72808, 41.96876, 1595],
            [23.72808, 41.96881, 1595],
            [23.72808, 41.96887, 1595],
            [23.72807, 41.96892, 1595],
            [23.72803, 41.96897, 1595],
            [23.72796, 41.96901, 1596],
            [23.72788, 41.96904, 1596],
            [23.7278, 41.96906, 1596],
            [23.72773, 41.96908, 1597],
            [23.72765, 41.96909, 1597],
            [23.72757, 41.9691, 1598],
            [23.72749, 41.9691, 1598],
            [23.72741, 41.96908, 1598],
            [23.72733, 41.96907, 1599],
            [23.72726, 41.96907, 1599],
            [23.72718, 41.96908, 1600],
            [23.72703, 41.96914, 1600],
            [23.72698, 41.9692, 1602],
            [23.72694, 41.96926, 1603],
            [23.72689, 41.96931, 1604],
            [23.72686, 41.96936, 1605],
            [23.72685, 41.96942, 1607],
            [23.72686, 41.96949, 1608],
            [23.72687, 41.96955, 1609],
            [23.72687, 41.96961, 1610],
            [23.72687, 41.96966, 1611],
            [23.72684, 41.96972, 1611],
            [23.7268, 41.96975, 1612],
            [23.72674, 41.96978, 1612],
            [23.72668, 41.96983, 1613],
            [23.72661, 41.96986, 1613],
            [23.72654, 41.96989, 1613],
            [23.72646, 41.96992, 1612],
            [23.7264, 41.96996, 1613],
            [23.72634, 41.97, 1613],
            [23.72628, 41.97003, 1613],
            [23.72622, 41.97006, 1613],
            [23.72615, 41.97009, 1612],
            [23.72608, 41.97012, 1611],
            [23.72602, 41.97017, 1610],
            [23.72597, 41.97022, 1609],
            [23.72592, 41.97028, 1608],
            [23.72589, 41.97033, 1609],
            [23.72586, 41.97038, 1610],
            [23.72581, 41.97043, 1611],
            [23.72574, 41.97046, 1611],
            [23.72526, 41.97052, 1611],
            [23.72519, 41.97052, 1610],
            [23.72513, 41.97054, 1610],
            [23.72505, 41.97055, 1610],
            [23.72499, 41.97056, 1610],
            [23.72491, 41.97056, 1610],
            [23.72483, 41.97058, 1611],
            [23.72477, 41.97061, 1611],
            [23.72474, 41.97065, 1612],
            [23.72472, 41.9707, 1613],
            [23.7247, 41.97074, 1614],
            [23.72467, 41.97079, 1615],
            [23.72464, 41.97084, 1616],
            [23.72462, 41.97089, 1617],
            [23.72458, 41.97094, 1618],
            [23.72452, 41.97098, 1620],
            [23.72445, 41.971, 1621],
            [23.72438, 41.97098, 1622],
            [23.72433, 41.97094, 1623],
            [23.72427, 41.97091, 1624],
            [23.72421, 41.97088, 1624],
            [23.72414, 41.97086, 1625],
            [23.72407, 41.97086, 1626],
            [23.72401, 41.97087, 1627],
            [23.72395, 41.97089, 1628],
            [23.72389, 41.97092, 1629],
            [23.72384, 41.97096, 1630],
            [23.7238, 41.971, 1631],
            [23.72377, 41.97105, 1633],
            [23.72375, 41.9711, 1634],
            [23.72372, 41.97117, 1635],
            [23.72369, 41.97122, 1637],
            [23.72366, 41.97126, 1638],
            [23.72362, 41.9713, 1639],
            [23.72357, 41.97134, 1640],
            [23.72353, 41.97138, 1641],
            [23.72347, 41.97142, 1642],
            [23.7234, 41.97146, 1642],
            [23.72335, 41.97149, 1643],
            [23.72329, 41.97152, 1643],
            [23.72323, 41.97155, 1644],
            [23.72318, 41.97159, 1645],
            [23.72313, 41.97164, 1646],
            [23.72311, 41.9717, 1647],
            [23.7231, 41.97175, 1647],
            [23.72311, 41.97182, 1648],
            [23.7231, 41.97187, 1649],
            [23.7231, 41.97193, 1650],
            [23.72307, 41.97198, 1651],
            [23.72305, 41.97203, 1651],
            [23.72303, 41.97208, 1652],
            [23.72298, 41.97212, 1653],
            [23.72293, 41.97217, 1654],
            [23.72291, 41.97223, 1655],
            [23.72289, 41.97228, 1655],
            [23.72288, 41.97234, 1656],
            [23.72288, 41.9724, 1656],
            [23.72288, 41.97245, 1656],
            [23.72289, 41.97252, 1657],
            [23.72289, 41.97258, 1658],
            [23.72286, 41.97263, 1659],
            [23.72281, 41.97267, 1660],
            [23.72275, 41.97271, 1661],
            [23.72269, 41.97274, 1662],
            [23.72262, 41.97278, 1663],
            [23.72257, 41.97281, 1664],
            [23.72251, 41.97285, 1665],
            [23.72245, 41.97287, 1666],
            [23.72241, 41.97291, 1667],
            [23.72237, 41.97296, 1668],
            [23.72234, 41.97301, 1669],
            [23.72233, 41.97306, 1670],
            [23.72232, 41.9731, 1671],
            [23.72234, 41.97316, 1672],
            [23.72236, 41.97322, 1673],
            [23.72236, 41.97327, 1674],
            [23.72236, 41.97333, 1675],
            [23.72236, 41.97338, 1677],
            [23.72233, 41.97342, 1678],
            [23.7223, 41.97347, 1680],
            [23.72225, 41.97351, 1681],
            [23.72222, 41.97356, 1683],
            [23.72218, 41.97362, 1685],
            [23.72215, 41.97367, 1686],
            [23.72212, 41.97371, 1687],
            [23.72206, 41.97376, 1688],
            [23.72202, 41.97381, 1689],
            [23.72198, 41.97385, 1690],
            [23.72166, 41.97419, 1697],
            [23.72161, 41.97423, 1698],
            [23.72155, 41.97427, 1698],
            [23.7215, 41.9743, 1699],
            [23.72145, 41.97434, 1699],
            [23.72142, 41.97438, 1699],
            [23.72137, 41.97441, 1699],
            [23.72129, 41.97444, 1700],
            [23.7212, 41.97446, 1700],
            [23.72112, 41.97446, 1700],
            [23.72106, 41.9745, 1700],
            [23.72102, 41.97454, 1700],
            [23.72098, 41.97458, 1699],
            [23.72095, 41.97464, 1699],
            [23.72093, 41.97469, 1698],
            [23.72091, 41.97473, 1698],
            [23.72089, 41.97479, 1698],
            [23.72088, 41.97484, 1698],
            [23.72087, 41.97489, 1697],
            [23.72083, 41.97496, 1697],
            [23.72077, 41.97499, 1697],
            [23.7207, 41.97501, 1697],
            [23.72063, 41.97501, 1697],
            [23.72056, 41.97501, 1697],
            [23.72048, 41.97499, 1698],
            [23.72042, 41.97499, 1698],
            [23.72035, 41.97499, 1698],
            [23.72028, 41.97499, 1698],
            [23.72022, 41.97499, 1698],
            [23.72015, 41.97498, 1698],
            [23.72006, 41.97497, 1698],
            [23.71997, 41.97498, 1698],
            [23.7199, 41.97498, 1698],
            [23.71983, 41.97498, 1698],
            [23.71974, 41.97497, 1698],
            [23.71967, 41.97497, 1697],
            [23.71959, 41.97496, 1697],
            [23.7195, 41.97496, 1696],
            [23.71942, 41.97495, 1696],
            [23.71934, 41.97496, 1696],
            [23.71927, 41.97496, 1696],
            [23.71918, 41.97496, 1696],
            [23.71911, 41.97495, 1696],
            [23.71904, 41.97495, 1696],
            [23.71897, 41.97495, 1696],
            [23.71891, 41.97497, 1696],
            [23.71883, 41.975, 1695],
            [23.71877, 41.97502, 1695],
            [23.7187, 41.97503, 1694],
            [23.71862, 41.97503, 1693],
            [23.71856, 41.97501, 1693],
            [23.71847, 41.975, 1692],
            [23.7184, 41.97501, 1692],
            [23.71834, 41.97501, 1691],
            [23.71827, 41.97503, 1691],
            [23.7182, 41.97503, 1691],
            [23.71811, 41.97502, 1691],
            [23.71803, 41.97501, 1690],
            [23.71795, 41.97499, 1690],
            [23.71789, 41.97499, 1690],
            [23.71781, 41.97498, 1690],
            [23.71775, 41.97497, 1689],
            [23.71767, 41.97497, 1689],
            [23.71759, 41.97498, 1688],
            [23.71752, 41.97497, 1688],
            [23.71745, 41.97493, 1687],
            [23.71738, 41.97492, 1687],
            [23.7173, 41.9749, 1686],
            [23.71723, 41.97489, 1686],
            [23.71716, 41.97489, 1686],
            [23.7171, 41.97488, 1686],
            [23.71703, 41.97488, 1686],
            [23.71696, 41.97487, 1686],
            [23.7169, 41.97486, 1685],
            [23.71682, 41.97485, 1685],
            [23.71673, 41.97487, 1684],
            [23.71666, 41.97486, 1683],
            [23.7166, 41.97485, 1683],
            [23.71653, 41.97485, 1683],
            [23.71647, 41.97486, 1682],
            [23.71639, 41.97488, 1682],
            [23.71632, 41.97489, 1682],
            [23.71625, 41.9749, 1681],
            [23.71618, 41.9749, 1681],
            [23.71611, 41.9749, 1680],
            [23.71602, 41.9749, 1679],
            [23.71594, 41.97491, 1678],
            [23.71587, 41.97492, 1678],
            [23.71578, 41.97492, 1677],
            [23.7157, 41.97492, 1677],
            [23.71562, 41.97492, 1677],
            [23.71555, 41.97491, 1677],
            [23.71547, 41.9749, 1677],
            [23.71541, 41.97489, 1677],
            [23.71535, 41.97488, 1677],
            [23.71527, 41.97487, 1677],
            [23.71519, 41.97487, 1677],
            [23.71512, 41.97488, 1677],
            [23.71504, 41.97487, 1677],
            [23.71496, 41.97487, 1677],
            [23.71488, 41.97485, 1676],
            [23.7148, 41.97483, 1675],
            [23.71472, 41.9748, 1675],
            [23.71465, 41.97477, 1674],
            [23.7146, 41.97473, 1674],
            [23.71455, 41.97468, 1673],
            [23.7145, 41.97464, 1673],
            [23.71445, 41.9746, 1673],
            [23.71439, 41.97458, 1672],
            [23.71434, 41.97455, 1672],
            [23.71429, 41.97451, 1671],
            [23.71424, 41.97448, 1670],
            [23.7142, 41.97445, 1670],
            [23.71416, 41.97441, 1669],
            [23.71411, 41.97438, 1668],
            [23.71404, 41.97438, 1667],
            [23.71397, 41.97438, 1666],
            [23.7139, 41.9744, 1665],
            [23.71382, 41.97441, 1664],
            [23.71377, 41.97444, 1664],
            [23.71373, 41.97447, 1664],
            [23.71369, 41.97451, 1664],
            [23.71367, 41.97457, 1665],
            [23.71365, 41.97463, 1665],
            [23.71364, 41.97469, 1665],
            [23.71362, 41.97474, 1666],
            [23.71362, 41.9748, 1666],
            [23.7136, 41.97485, 1665],
            [23.7136, 41.97491, 1665],
            [23.71358, 41.97497, 1665],
            [23.71355, 41.97503, 1664],
            [23.71351, 41.97509, 1663],
            [23.71346, 41.97514, 1662],
            [23.71342, 41.9752, 1661],
            [23.71336, 41.97523, 1660],
            [23.71326, 41.97527, 1659],
            [23.71317, 41.97531, 1657],
            [23.7131, 41.97534, 1656],
            [23.71303, 41.97538, 1654],
            [23.71294, 41.97541, 1653],
            [23.71285, 41.97543, 1652],
            [23.71275, 41.97545, 1651],
            [23.71266, 41.97548, 1650],
            [23.71258, 41.97551, 1649],
            [23.71252, 41.97556, 1649],
            [23.71247, 41.97561, 1648],
            [23.71238, 41.97565, 1648],
            [23.7123, 41.97569, 1648],
            [23.71223, 41.97572, 1648],
            [23.71217, 41.97576, 1648],
            [23.71213, 41.97579, 1648],
            [23.71207, 41.97584, 1647],
            [23.71203, 41.97587, 1647],
            [23.71196, 41.97592, 1647],
            [23.71188, 41.97595, 1647],
            [23.71181, 41.97599, 1647],
            [23.71173, 41.97604, 1647],
            [23.71165, 41.97609, 1646],
            [23.71159, 41.97615, 1646],
            [23.71153, 41.97619, 1646],
            [23.71146, 41.97624, 1646],
            [23.71139, 41.97629, 1646],
            [23.71131, 41.97634, 1646],
            [23.71124, 41.97638, 1646],
            [23.71118, 41.97642, 1646],
            [23.71112, 41.97647, 1646],
            [23.71107, 41.97652, 1646],
            [23.71103, 41.97656, 1645],
            [23.71096, 41.9766, 1645],
            [23.71091, 41.97663, 1645],
            [23.71086, 41.97667, 1645],
            [23.71079, 41.9767, 1644],
            [23.71073, 41.97674, 1644],
            [23.71069, 41.97679, 1645],
            [23.71064, 41.97684, 1645],
            [23.71058, 41.9769, 1645],
            [23.71053, 41.97695, 1645],
            [23.71051, 41.977, 1646],
            [23.71048, 41.97705, 1646],
            [23.71044, 41.97709, 1646],
            [23.71039, 41.97715, 1646],
            [23.71033, 41.97722, 1646],
            [23.7102, 41.97736, 1647],
            [23.71012, 41.97741, 1647],
            [23.71003, 41.97746, 1647],
            [23.70995, 41.97751, 1648],
            [23.70987, 41.97756, 1648],
            [23.70981, 41.97761, 1648],
            [23.70975, 41.97765, 1649],
            [23.70968, 41.97768, 1649],
            [23.70962, 41.97771, 1649],
            [23.70956, 41.97775, 1649],
            [23.70949, 41.97779, 1649],
            [23.70943, 41.97783, 1649],
            [23.70937, 41.97787, 1649],
            [23.70933, 41.97791, 1649],
            [23.70928, 41.97797, 1649],
            [23.70924, 41.97801, 1649],
            [23.70916, 41.97805, 1648],
            [23.70911, 41.97809, 1648],
            [23.70907, 41.97814, 1648],
            [23.70904, 41.97818, 1647],
            [23.70899, 41.97822, 1647],
            [23.70893, 41.97825, 1647],
            [23.70887, 41.9783, 1646],
            [23.70879, 41.97833, 1646],
            [23.70873, 41.97836, 1646],
            [23.70865, 41.97838, 1646],
            [23.70857, 41.97841, 1645],
            [23.70851, 41.97844, 1645],
            [23.70844, 41.97846, 1645],
            [23.70836, 41.97849, 1644],
            [23.7083, 41.97852, 1644],
            [23.70822, 41.97853, 1644],
            [23.70815, 41.97855, 1643],
            [23.70809, 41.97856, 1643],
            [23.70803, 41.97857, 1643],
            [23.70798, 41.9786, 1642],
            [23.70792, 41.97864, 1641],
            [23.70786, 41.97867, 1641],
            [23.7078, 41.97871, 1640],
            [23.70774, 41.97873, 1640],
            [23.70768, 41.97875, 1639],
            [23.70762, 41.97877, 1639],
            [23.70756, 41.97879, 1638],
            [23.70749, 41.97883, 1637],
            [23.70742, 41.97887, 1636],
            [23.70736, 41.97892, 1635],
            [23.70731, 41.97896, 1635],
            [23.70725, 41.97901, 1634],
            [23.7072, 41.97905, 1634],
            [23.70715, 41.97911, 1635],
            [23.70709, 41.97916, 1635],
            [23.70702, 41.97921, 1635],
            [23.70698, 41.97924, 1635],
            [23.70694, 41.9793, 1635],
            [23.70689, 41.97935, 1635],
            [23.70686, 41.9794, 1635],
            [23.70682, 41.97944, 1635],
            [23.70676, 41.9795, 1634],
            [23.7067, 41.97953, 1634],
            [23.70664, 41.97955, 1633],
            [23.70656, 41.97957, 1633],
            [23.7065, 41.97959, 1632],
            [23.70643, 41.97963, 1631],
            [23.70637, 41.97967, 1630],
            [23.70628, 41.97969, 1630],
            [23.70621, 41.97969, 1631],
            [23.70614, 41.97968, 1632],
            [23.70608, 41.97965, 1633],
            [23.70601, 41.97965, 1634],
            [23.70595, 41.97966, 1634],
            [23.70589, 41.97967, 1635],
            [23.70581, 41.97969, 1635],
            [23.70575, 41.9797, 1634],
            [23.70568, 41.97971, 1634],
            [23.70562, 41.97972, 1634],
            [23.70554, 41.97973, 1633],
            [23.70548, 41.97974, 1632],
            [23.70542, 41.97974, 1632],
            [23.70536, 41.97978, 1630],
            [23.70531, 41.97981, 1629],
            [23.70524, 41.97983, 1628],
            [23.70519, 41.97987, 1627],
            [23.70515, 41.9799, 1626],
            [23.7051, 41.97993, 1625],
            [23.70503, 41.97995, 1625],
            [23.70496, 41.97997, 1625],
            [23.70489, 41.97999, 1625],
            [23.70483, 41.98, 1626],
            [23.70477, 41.98002, 1626],
            [23.7047, 41.98005, 1625],
            [23.70464, 41.98006, 1625],
            [23.70458, 41.98007, 1624],
            [23.70451, 41.98011, 1623],
            [23.70446, 41.98016, 1622],
            [23.70439, 41.98017, 1621],
            [23.70433, 41.98019, 1620],
            [23.70427, 41.9802, 1619],
            [23.70418, 41.98022, 1618],
            [23.70414, 41.98026, 1617],
            [23.7041, 41.98031, 1616],
            [23.70403, 41.98035, 1615],
            [23.70397, 41.98037, 1614],
            [23.70389, 41.98039, 1613],
            [23.70381, 41.98041, 1612],
            [23.70374, 41.98043, 1612],
            [23.70367, 41.98046, 1612],
            [23.7036, 41.9805, 1612],
            [23.70351, 41.98054, 1612],
            [23.70343, 41.98057, 1612],
            [23.70336, 41.9806, 1612],
            [23.7033, 41.98062, 1612],
            [23.70323, 41.98065, 1612],
            [23.70318, 41.98071, 1612],
            [23.70315, 41.98076, 1612],
            [23.7031, 41.9808, 1612],
            [23.70304, 41.98084, 1612],
            [23.70296, 41.98087, 1612],
            [23.7029, 41.98089, 1612],
            [23.70284, 41.9809, 1612],
            [23.70278, 41.98091, 1612],
            [23.7027, 41.9809, 1612],
            [23.70264, 41.9809, 1613],
            [23.70258, 41.98087, 1613],
            [23.70252, 41.98086, 1613],
            [23.70244, 41.98088, 1613],
            [23.70237, 41.9809, 1613],
            [23.7023, 41.98092, 1614],
            [23.70223, 41.98094, 1614],
            [23.70214, 41.98097, 1614],
            [23.70208, 41.98098, 1614],
            [23.702, 41.98099, 1614],
            [23.70194, 41.981, 1614],
            [23.70186, 41.98102, 1614],
            [23.70179, 41.98103, 1614],
            [23.70172, 41.98104, 1614],
            [23.70165, 41.98106, 1615],
            [23.70158, 41.98107, 1614],
            [23.70152, 41.98108, 1614],
            [23.70145, 41.9811, 1614],
            [23.70138, 41.98111, 1614],
            [23.70131, 41.98114, 1615],
            [23.70124, 41.98116, 1615],
            [23.70117, 41.98118, 1615],
            [23.70108, 41.98118, 1614],
            [23.70101, 41.98117, 1614],
            [23.70093, 41.98117, 1614],
            [23.70085, 41.98116, 1613],
            [23.70078, 41.98113, 1613],
            [23.70073, 41.9811, 1612],
            [23.70066, 41.98105, 1612],
            [23.7006, 41.98102, 1612],
            [23.70055, 41.98099, 1612],
            [23.70049, 41.98096, 1612],
            [23.70044, 41.98092, 1612],
            [23.7004, 41.98088, 1612],
            [23.70035, 41.98085, 1612],
            [23.70029, 41.98081, 1612],
            [23.70023, 41.98079, 1612],
            [23.70018, 41.98074, 1612],
            [23.70011, 41.98071, 1612],
            [23.70004, 41.98068, 1613],
            [23.69997, 41.98064, 1613],
            [23.6999, 41.9806, 1613],
            [23.69982, 41.98057, 1613],
            [23.69953, 41.98046, 1614],
            [23.69943, 41.98044, 1614],
            [23.69933, 41.98043, 1615],
            [23.69923, 41.98042, 1615],
            [23.69906, 41.98035, 1616],
            [23.699, 41.98033, 1616],
            [23.69894, 41.98031, 1616],
            [23.69887, 41.98029, 1617],
            [23.69878, 41.98025, 1617],
            [23.69868, 41.98021, 1617],
            [23.69858, 41.98019, 1618],
            [23.69851, 41.98019, 1618],
            [23.69845, 41.98018, 1618],
            [23.69836, 41.98018, 1618],
            [23.69825, 41.98018, 1618],
            [23.69816, 41.98017, 1619],
            [23.69807, 41.98019, 1619],
            [23.69798, 41.9802, 1619],
            [23.69789, 41.98019, 1619],
            [23.6978, 41.98019, 1619],
            [23.69774, 41.9802, 1618],
            [23.69768, 41.98023, 1617],
            [23.6976, 41.98023, 1616],
            [23.69753, 41.98023, 1616],
            [23.69746, 41.98025, 1615],
            [23.69739, 41.98028, 1614],
            [23.69733, 41.98029, 1614],
            [23.69726, 41.98028, 1613],
            [23.6972, 41.98026, 1612],
            [23.69714, 41.98023, 1611],
            [23.69709, 41.98021, 1611],
            [23.69702, 41.98019, 1610],
            [23.69696, 41.98015, 1610],
            [23.69692, 41.9801, 1609],
            [23.69687, 41.98007, 1609],
            [23.6968, 41.98003, 1609],
            [23.69673, 41.97998, 1609],
            [23.69666, 41.97993, 1608],
            [23.69657, 41.97988, 1608],
            [23.69649, 41.97987, 1608],
            [23.69642, 41.97986, 1608],
            [23.69633, 41.97985, 1607],
            [23.69624, 41.97985, 1606],
            [23.69617, 41.97984, 1606],
            [23.69611, 41.97981, 1605],
            [23.69606, 41.97978, 1605],
            [23.69599, 41.97975, 1604],
            [23.69594, 41.9797, 1603],
            [23.69588, 41.97966, 1601],
            [23.69584, 41.97962, 1600],
            [23.69579, 41.97958, 1599],
            [23.69573, 41.97955, 1598],
            [23.69568, 41.97953, 1598],
            [23.69561, 41.9795, 1597],
            [23.69553, 41.97948, 1597],
            [23.69546, 41.97948, 1596],
            [23.69538, 41.97947, 1596],
            [23.69528, 41.97945, 1596],
            [23.6952, 41.97943, 1596],
            [23.6951, 41.97941, 1596],
            [23.695, 41.97939, 1596],
            [23.69489, 41.97937, 1596],
            [23.69479, 41.97935, 1596],
            [23.6947, 41.97934, 1595],
            [23.69461, 41.97934, 1595],
            [23.69453, 41.97934, 1594],
            [23.69445, 41.97935, 1594],
            [23.69437, 41.97935, 1593],
            [23.6943, 41.97934, 1592],
            [23.69423, 41.97933, 1592],
            [23.69414, 41.97934, 1591],
            [23.69407, 41.97933, 1591],
            [23.69399, 41.97933, 1591],
            [23.69391, 41.97933, 1591],
            [23.69385, 41.97933, 1590],
            [23.69378, 41.97933, 1590],
            [23.69371, 41.97933, 1590],
            [23.69364, 41.97933, 1590],
            [23.69358, 41.97933, 1590],
            [23.69352, 41.97933, 1590],
            [23.69345, 41.97932, 1591],
            [23.69339, 41.97931, 1591],
            [23.6933, 41.9793, 1591],
            [23.69324, 41.9793, 1592],
            [23.69319, 41.97935, 1593],
            [23.69312, 41.97933, 1594],
            [23.69304, 41.97931, 1595],
            [23.69295, 41.9793, 1595],
            [23.69289, 41.97929, 1596],
            [23.69177, 41.97919, 1600],
            [23.69169, 41.9792, 1600],
            [23.69155, 41.97923, 1602],
            [23.69147, 41.97925, 1602],
            [23.69139, 41.97926, 1603],
            [23.69131, 41.97927, 1605],
            [23.69124, 41.97928, 1606],
            [23.69116, 41.97929, 1607],
            [23.6911, 41.9793, 1609],
            [23.69104, 41.9793, 1611],
            [23.69079, 41.97936, 1619],
            [23.69071, 41.97937, 1621],
            [23.69064, 41.97935, 1623],
            [23.69061, 41.9793, 1625],
            [23.69065, 41.97926, 1625],
            [23.69068, 41.97921, 1625],
            [23.6907, 41.97916, 1625],
            [23.69068, 41.97898, 1626],
            [23.69066, 41.97893, 1627],
            [23.69062, 41.97886, 1628],
            [23.6906, 41.97881, 1628],
            [23.69058, 41.97875, 1628],
            [23.69052, 41.9787, 1629],
            [23.69044, 41.97867, 1630],
            [23.69036, 41.97866, 1632],
            [23.69027, 41.97863, 1633],
            [23.69018, 41.97862, 1634],
            [23.6901, 41.97861, 1635],
            [23.69003, 41.97862, 1636],
            [23.68995, 41.9786, 1637],
            [23.68989, 41.97858, 1637],
            [23.68983, 41.97856, 1637],
            [23.68977, 41.97854, 1637],
            [23.68974, 41.97849, 1636],
            [23.68968, 41.97846, 1636],
            [23.68963, 41.97842, 1635],
            [23.68954, 41.97842, 1636],
            [23.68946, 41.97844, 1636],
            [23.6894, 41.97844, 1637],
            [23.68931, 41.97843, 1637],
            [23.68924, 41.97841, 1637],
            [23.68917, 41.97839, 1637],
            [23.68912, 41.97834, 1637],
            [23.68906, 41.97828, 1637],
            [23.689, 41.97826, 1637],
            [23.68893, 41.97823, 1638],
            [23.68888, 41.97819, 1638],
            [23.68884, 41.97814, 1638],
            [23.6888, 41.97808, 1639],
            [23.68877, 41.97802, 1638],
            [23.68872, 41.97796, 1638],
            [23.68866, 41.9779, 1638],
            [23.68861, 41.97787, 1639],
            [23.68857, 41.97784, 1638],
            [23.68851, 41.97779, 1638],
            [23.68847, 41.97773, 1638],
            [23.68845, 41.97767, 1638],
            [23.68844, 41.97762, 1637],
            [23.68841, 41.97757, 1637],
            [23.68839, 41.97753, 1637],
            [23.68836, 41.97749, 1637],
            [23.68832, 41.97745, 1637],
            [23.68829, 41.97739, 1637],
            [23.68826, 41.97734, 1637],
            [23.68822, 41.97728, 1637],
            [23.68818, 41.97724, 1637],
            [23.68813, 41.97718, 1637],
            [23.68809, 41.97713, 1636],
            [23.68804, 41.9771, 1636],
            [23.68798, 41.97707, 1635],
            [23.68792, 41.97703, 1634],
            [23.68786, 41.97697, 1633],
            [23.6878, 41.97692, 1631],
            [23.68774, 41.97689, 1631],
            [23.68768, 41.97685, 1631],
            [23.68764, 41.97681, 1631],
            [23.68759, 41.97678, 1631],
            [23.68754, 41.97674, 1631],
            [23.68751, 41.9767, 1631],
            [23.68746, 41.97665, 1631],
            [23.68742, 41.9766, 1631],
            [23.68738, 41.97656, 1631],
            [23.68734, 41.97651, 1631],
            [23.68731, 41.97647, 1631],
            [23.68727, 41.9764, 1631],
            [23.68675, 41.97595, 1631],
            [23.6867, 41.9759, 1632],
            [23.68664, 41.97585, 1632],
            [23.68656, 41.97581, 1631],
            [23.6865, 41.97576, 1631],
            [23.68646, 41.97573, 1630],
            [23.68642, 41.97569, 1630],
            [23.68634, 41.97564, 1629],
            [23.68628, 41.97561, 1629],
            [23.68621, 41.97556, 1628],
            [23.68598, 41.97549, 1627],
            [23.68587, 41.97547, 1627],
            [23.68577, 41.97543, 1627],
            [23.68568, 41.97541, 1627],
            [23.68558, 41.97535, 1627],
            [23.68552, 41.97531, 1626],
            [23.68545, 41.97529, 1626],
            [23.68539, 41.97525, 1626],
            [23.68533, 41.97521, 1625],
            [23.68529, 41.97517, 1625],
            [23.68525, 41.97514, 1625],
            [23.6852, 41.97511, 1625],
            [23.68516, 41.97507, 1625],
            [23.68512, 41.97504, 1625],
            [23.68509, 41.97499, 1625],
            [23.68504, 41.97493, 1625],
            [23.68498, 41.97488, 1625],
            [23.68492, 41.97484, 1625],
            [23.68488, 41.9748, 1625],
            [23.68484, 41.97475, 1625],
            [23.68482, 41.97469, 1625],
            [23.68479, 41.97465, 1625],
            [23.68476, 41.9746, 1626],
            [23.68472, 41.97456, 1626],
            [23.68468, 41.97452, 1626],
            [23.68465, 41.97447, 1627],
            [23.68462, 41.97442, 1627],
            [23.68461, 41.97437, 1628],
            [23.68459, 41.97432, 1628],
            [23.68457, 41.97427, 1629],
            [23.68455, 41.97423, 1629],
            [23.68454, 41.97418, 1629],
            [23.68453, 41.97413, 1629],
            [23.68451, 41.97408, 1630],
            [23.68451, 41.97402, 1630],
            [23.6845, 41.97394, 1631],
            [23.68448, 41.97375, 1634],
            [23.68449, 41.97367, 1635],
            [23.68447, 41.97357, 1637],
            [23.68445, 41.97351, 1638],
            [23.68442, 41.97346, 1639],
            [23.68438, 41.9734, 1640],
            [23.68433, 41.97335, 1642],
            [23.68429, 41.97329, 1643],
            [23.68426, 41.97324, 1644],
            [23.68422, 41.97319, 1645],
            [23.68417, 41.97313, 1647],
            [23.68413, 41.97309, 1647],
            [23.68407, 41.97304, 1648],
            [23.68401, 41.97299, 1650],
            [23.68397, 41.97293, 1651],
            [23.68392, 41.97287, 1653],
            [23.68389, 41.97281, 1654],
            [23.68386, 41.97276, 1655],
            [23.68383, 41.97269, 1655],
            [23.6838, 41.97264, 1656],
            [23.68376, 41.97259, 1657],
            [23.68373, 41.97255, 1657],
            [23.68371, 41.97251, 1658],
            [23.68366, 41.97242, 1658],
            [23.68364, 41.97237, 1658],
            [23.68343, 41.97211, 1659],
            [23.68339, 41.97205, 1659],
            [23.68335, 41.97199, 1659],
            [23.6833, 41.97195, 1659],
            [23.68326, 41.97191, 1658],
            [23.6832, 41.97187, 1658],
            [23.68313, 41.97186, 1658],
            [23.68307, 41.97184, 1658],
            [23.68301, 41.97181, 1657],
            [23.68294, 41.97178, 1658],
            [23.68288, 41.97174, 1658],
            [23.6828, 41.97172, 1658],
            [23.68274, 41.97169, 1658],
            [23.68266, 41.97167, 1658],
            [23.68258, 41.97165, 1659],
            [23.68251, 41.9716, 1658],
            [23.68245, 41.97154, 1657],
            [23.6824, 41.97151, 1656],
            [23.68233, 41.97148, 1656],
            [23.6823, 41.97144, 1655],
            [23.68227, 41.97139, 1654],
            [23.68223, 41.97135, 1654],
            [23.68219, 41.97131, 1653],
            [23.68215, 41.97126, 1653],
            [23.68204, 41.97116, 1651],
            [23.68199, 41.97112, 1651],
            [23.68194, 41.97108, 1650],
            [23.6819, 41.97104, 1649],
            [23.68177, 41.9709, 1646],
            [23.68177, 41.97085, 1646],
            [23.68181, 41.97081, 1645],
            [23.68187, 41.97079, 1645],
            [23.68193, 41.97078, 1645],
            [23.68201, 41.97078, 1645],
            [23.68208, 41.97079, 1646],
            [23.68213, 41.97077, 1645],
            [23.68213, 41.97072, 1644],
            [23.68215, 41.97066, 1642],
            [23.68216, 41.97061, 1641],
            [23.68213, 41.97056, 1640],
            [23.68209, 41.97051, 1638],
            [23.68204, 41.97047, 1638],
            [23.68196, 41.97045, 1638],
            [23.6819, 41.97042, 1637],
            [23.68183, 41.97041, 1637],
            [23.68176, 41.97041, 1637],
            [23.68169, 41.9704, 1637],
            [23.68163, 41.97039, 1636],
            [23.68155, 41.97038, 1634],
            [23.68146, 41.97037, 1632],
            [23.68137, 41.97036, 1631],
            [23.68131, 41.97036, 1629],
            [23.68123, 41.97034, 1627],
            [23.68114, 41.97034, 1626],
            [23.68107, 41.97035, 1625],
            [23.68101, 41.97036, 1625],
            [23.68094, 41.97039, 1625],
            [23.68087, 41.97042, 1625],
            [23.6808, 41.97045, 1625],
            [23.68073, 41.97047, 1625],
            [23.68066, 41.97046, 1624],
            [23.68059, 41.97042, 1622],
            [23.68055, 41.97038, 1621],
            [23.68052, 41.97032, 1620],
            [23.68051, 41.97027, 1619],
            [23.68048, 41.97021, 1617],
            [23.68048, 41.97015, 1616],
            [23.68048, 41.9701, 1615],
            [23.68045, 41.97004, 1614],
            [23.68041, 41.96999, 1613],
            [23.68037, 41.96994, 1611],
            [23.68034, 41.96988, 1610],
            [23.68026, 41.96986, 1609],
            [23.68009, 41.96969, 1603],
            [23.68004, 41.96966, 1601],
            [23.68009, 41.96962, 1601],
            [23.68015, 41.9696, 1601],
            [23.6802, 41.96958, 1601],
            [23.68027, 41.96957, 1601],
            [23.68033, 41.96956, 1601],
            [23.6804, 41.96957, 1602],
            [23.68047, 41.96957, 1603],
            [23.68054, 41.96957, 1603],
            [23.68061, 41.96958, 1604],
            [23.68054, 41.96958, 1604],
            [23.68006, 41.96959, 1600],
            [23.68, 41.96958, 1599],
            [23.68001, 41.96963, 1600],
            [23.68008, 41.96966, 1602],
            [23.68006, 41.96961, 1600],
            [23.67999, 41.96958, 1599],
            [23.67994, 41.96956, 1598],
            [23.67988, 41.96955, 1598],
            [23.6798, 41.96953, 1597],
            [23.6797, 41.9695, 1596],
            [23.67961, 41.96946, 1594],
            [23.67953, 41.96942, 1592],
            [23.67947, 41.96938, 1591],
            [23.67943, 41.96932, 1590],
            [23.67937, 41.96928, 1589],
            [23.67931, 41.96923, 1589],
            [23.67924, 41.9692, 1589],
            [23.67918, 41.96916, 1588],
            [23.67912, 41.96911, 1588],
            [23.67904, 41.96909, 1589],
            [23.67897, 41.96906, 1590],
            [23.67891, 41.96902, 1590],
            [23.67884, 41.96899, 1591],
            [23.67877, 41.96893, 1591],
            [23.6787, 41.9689, 1591],
            [23.67864, 41.96887, 1591],
            [23.67859, 41.96883, 1591],
            [23.67857, 41.96878, 1591],
            [23.67854, 41.96873, 1591],
            [23.67848, 41.9687, 1592],
            [23.67842, 41.96867, 1593],
            [23.67835, 41.96865, 1593],
            [23.67826, 41.96864, 1594],
            [23.67818, 41.96861, 1593],
            [23.67808, 41.96861, 1593],
            [23.67797, 41.9686, 1593],
            [23.67791, 41.9686, 1593],
            [23.6778, 41.96859, 1593],
            [23.6777, 41.96856, 1594],
            [23.67762, 41.96855, 1594],
            [23.67755, 41.96852, 1595],
            [23.67748, 41.96849, 1596],
            [23.67741, 41.96846, 1597],
            [23.67712, 41.96832, 1601],
            [23.67703, 41.96828, 1602],
            [23.67698, 41.96825, 1603],
            [23.67693, 41.9682, 1603],
            [23.67686, 41.96817, 1603],
            [23.67679, 41.96814, 1604],
            [23.67671, 41.96811, 1604],
            [23.67662, 41.96808, 1605],
            [23.67654, 41.96802, 1605],
            [23.6765, 41.96797, 1604],
            [23.67646, 41.96792, 1604],
            [23.67645, 41.96786, 1603],
            [23.67642, 41.96776, 1603],
            [23.67644, 41.96769, 1601],
            [23.67644, 41.96764, 1601],
            [23.67643, 41.96759, 1600],
            [23.67647, 41.96753, 1598],
            [23.67662, 41.96733, 1592],
            [23.67657, 41.96726, 1592],
            [23.67651, 41.96721, 1593],
            [23.67644, 41.96718, 1594],
            [23.67637, 41.96714, 1595],
            [23.67631, 41.96712, 1595],
            [23.67625, 41.9671, 1596],
            [23.67616, 41.96708, 1598],
            [23.67608, 41.96708, 1599],
            [23.67597, 41.96706, 1601],
            [23.67586, 41.96704, 1602],
            [23.67548, 41.96676, 1608],
            [23.67543, 41.9667, 1608],
            [23.67539, 41.96664, 1608],
            [23.67534, 41.96657, 1608],
            [23.67531, 41.96654, 1608],
            [23.67526, 41.9665, 1608],
            [23.67524, 41.96646, 1608],
            [23.67523, 41.9664, 1608],
            [23.67522, 41.96635, 1607],
            [23.67521, 41.96631, 1607],
            [23.67519, 41.96625, 1606],
            [23.67516, 41.96621, 1605],
            [23.67514, 41.96616, 1604],
            [23.67514, 41.9661, 1603],
            [23.67513, 41.96603, 1602],
            [23.67517, 41.96598, 1602],
            [23.67521, 41.96593, 1601],
            [23.67523, 41.96588, 1600],
            [23.67521, 41.96583, 1599],
            [23.67522, 41.96577, 1599],
            [23.67516, 41.96573, 1598],
            [23.67516, 41.96567, 1598],
            [23.67513, 41.96561, 1597],
            [23.67513, 41.96555, 1596],
            [23.6751, 41.9655, 1596],
            [23.67505, 41.96546, 1595],
            [23.67498, 41.96543, 1595],
            [23.67493, 41.96537, 1594],
            [23.67489, 41.96532, 1594],
            [23.67485, 41.96527, 1593],
            [23.67481, 41.96524, 1593],
            [23.67479, 41.96518, 1593],
            [23.67477, 41.96513, 1593],
            [23.67473, 41.96508, 1593],
            [23.67468, 41.96504, 1593],
            [23.67461, 41.96499, 1594],
            [23.67456, 41.96493, 1595],
            [23.67452, 41.96482, 1596],
            [23.6745, 41.96477, 1597],
            [23.67445, 41.96473, 1598],
            [23.67438, 41.96468, 1600],
            [23.67434, 41.96465, 1601],
            [23.67426, 41.96462, 1603],
            [23.6742, 41.96459, 1604],
            [23.67411, 41.96457, 1605],
            [23.67403, 41.96455, 1605],
            [23.67396, 41.96452, 1605],
            [23.67389, 41.96449, 1605],
            [23.67385, 41.96445, 1606],
            [23.67379, 41.96442, 1607],
            [23.67369, 41.96441, 1607],
            [23.6736, 41.96439, 1607],
            [23.67351, 41.96437, 1608],
            [23.67343, 41.96435, 1609],
            [23.67335, 41.96435, 1609],
            [23.67327, 41.96433, 1610],
            [23.67319, 41.96428, 1612],
            [23.67311, 41.96426, 1612],
            [23.67305, 41.9642, 1614],
            [23.67299, 41.96416, 1615],
            [23.67295, 41.96411, 1616],
            [23.6729, 41.96406, 1617],
            [23.67283, 41.96401, 1617],
            [23.67278, 41.96398, 1617],
            [23.67274, 41.96394, 1617],
            [23.67268, 41.96392, 1616],
            [23.67264, 41.96386, 1617],
            [23.6726, 41.96381, 1619],
            [23.67252, 41.96378, 1618],
            [23.67245, 41.96374, 1618],
            [23.67238, 41.96371, 1619],
            [23.67232, 41.96369, 1620],
            [23.67225, 41.96367, 1620],
            [23.67218, 41.96366, 1620],
            [23.67211, 41.96365, 1620],
            [23.67205, 41.96363, 1620],
            [23.67199, 41.96363, 1620],
            [23.67192, 41.96359, 1621],
            [23.67187, 41.96354, 1622],
            [23.67181, 41.96352, 1622],
            [23.67174, 41.96349, 1622],
            [23.67172, 41.96345, 1622],
            [23.67169, 41.96341, 1623],
            [23.67168, 41.96334, 1624],
            [23.67171, 41.96328, 1625],
            [23.67172, 41.96322, 1625],
            [23.67172, 41.96316, 1625],
            [23.67175, 41.9631, 1625],
            [23.67178, 41.96304, 1626],
            [23.67181, 41.96299, 1626],
            [23.67187, 41.96297, 1626],
            [23.67197, 41.96297, 1626],
            [23.67205, 41.96299, 1627],
            [23.6721, 41.96302, 1628],
            [23.67214, 41.96305, 1628],
            [23.67221, 41.96307, 1629],
            [23.67243, 41.96306, 1636],
            [23.67253, 41.96307, 1639],
            [23.67268, 41.96307, 1644],
            [23.67278, 41.96307, 1647],
            [23.67287, 41.96305, 1649],
            [23.67294, 41.96303, 1650],
            [23.67299, 41.963, 1651],
            [23.67302, 41.96296, 1650],
            [23.67299, 41.963, 1651],
            [23.67291, 41.963, 1649],
          ],
        ],
      },
      properties: {
        name: "Орцево - Бабяшка чука",
        visibility: !0,
        description: "Generated by AllTrails https://www.alltrails.com/",
        extrude: !0,
        tessellate: !0,
      },
    },
  ],
  zh = { type: g5, features: y5 },
  Nh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: zh, features: y5, type: g5 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  w5 = "FeatureCollection",
  x5 = [
    {
      type: "Feature",
      geometry: {
        type: "MultiLineString",
        coordinates: [
          [
            [23.72985, 41.96329, 1556],
            [23.73051, 41.96354, 1557],
            [23.73075, 41.96355, 1555],
            [23.73097, 41.96363, 1553],
            [23.73144, 41.96392, 1552],
            [23.73193, 41.96423, 1551],
            [23.73204, 41.96432, 1551],
            [23.73222, 41.96453, 1552],
            [23.73232, 41.96462, 1552],
            [23.73253, 41.9647, 1552],
            [23.73329, 41.96498, 1547],
            [23.73342, 41.96508, 1547],
            [23.73352, 41.9652, 1547],
            [23.73361, 41.96537, 1548],
            [23.7338, 41.96556, 1548],
            [23.73408, 41.96584, 1548],
            [23.73411, 41.96586, 1547],
            [23.73425, 41.96593, 1545],
            [23.7344, 41.96602, 1544],
            [23.73448, 41.96613, 1545],
            [23.73456, 41.96619, 1546],
            [23.73467, 41.9662, 1545],
            [23.73472, 41.9662, 1545],
            [23.73479, 41.96617, 1544],
            [23.73517, 41.96607, 1543],
            [23.7353, 41.96607, 1543],
            [23.73555, 41.9661, 1543],
            [23.7359, 41.96618, 1541],
            [23.73635, 41.96632, 1543],
            [23.73653, 41.96647, 1549],
            [23.73663, 41.96654, 1551],
            [23.73671, 41.96656, 1551],
            [23.73684, 41.96657, 1552],
            [23.73694, 41.96662, 1553],
            [23.7371, 41.96683, 1558],
            [23.73732, 41.96698, 1561],
            [23.73744, 41.967, 1561],
            [23.73756, 41.967, 1562],
            [23.73781, 41.96696, 1565],
            [23.73796, 41.96695, 1566],
            [23.7383, 41.96702, 1566],
            [23.73843, 41.96701, 1565],
            [23.73861, 41.96693, 1560],
            [23.73872, 41.96686, 1558],
            [23.73881, 41.96683, 1557],
            [23.73897, 41.96686, 1557],
            [23.73924, 41.96693, 1557],
            [23.7395, 41.96706, 1561],
            [23.73972, 41.96714, 1562],
            [23.73983, 41.96715, 1562],
            [23.73996, 41.96717, 1563],
            [23.74016, 41.96718, 1564],
            [23.74036, 41.96711, 1562],
            [23.74064, 41.967, 1560],
            [23.74086, 41.96696, 1561],
            [23.74102, 41.9669, 1562],
            [23.74116, 41.9669, 1564],
            [23.74146, 41.96695, 1569],
            [23.74175, 41.96704, 1569],
            [23.74194, 41.96718, 1573],
            [23.74208, 41.9673, 1576],
            [23.74235, 41.96742, 1579],
            [23.74255, 41.96749, 1580],
            [23.74273, 41.9675, 1579],
            [23.74277, 41.9675, 1579],
            [23.74302, 41.96747, 1577],
            [23.7432, 41.96745, 1578],
            [23.74346, 41.96751, 1579],
            [23.7439, 41.96774, 1579],
            [23.74416, 41.96787, 1578],
            [23.74434, 41.96805, 1578],
            [23.74442, 41.96818, 1578],
            [23.7445, 41.96828, 1577],
            [23.74462, 41.96831, 1576],
            [23.74475, 41.96829, 1574],
            [23.74488, 41.96831, 1572],
            [23.74505, 41.96842, 1572],
            [23.74524, 41.9686, 1574],
            [23.74534, 41.96871, 1576],
            [23.74542, 41.96873, 1577],
            [23.7455, 41.96874, 1578],
            [23.7456, 41.96871, 1577],
            [23.74571, 41.96868, 1578],
            [23.74579, 41.96858, 1576],
            [23.74588, 41.96844, 1574],
            [23.74599, 41.96835, 1573],
            [23.74612, 41.9683, 1574],
            [23.74633, 41.96826, 1577],
            [23.74664, 41.96817, 1579],
            [23.74679, 41.96809, 1577],
            [23.74686, 41.96801, 1574],
            [23.74699, 41.96791, 1573],
            [23.74711, 41.96787, 1573],
            [23.74725, 41.96787, 1575],
            [23.74739, 41.96782, 1576],
            [23.74744, 41.96779, 1576],
            [23.7475, 41.96776, 1576],
            [23.74771, 41.96767, 1577],
            [23.74796, 41.96763, 1578],
            [23.74821, 41.96759, 1575],
            [23.74836, 41.9676, 1574],
            [23.74889, 41.96776, 1573],
            [23.74923, 41.96785, 1570],
            [23.74934, 41.96795, 1570],
            [23.74954, 41.96811, 1569],
            [23.74963, 41.96822, 1569],
            [23.74965, 41.96836, 1571],
            [23.7497, 41.96845, 1572],
            [23.74978, 41.9685, 1573],
            [23.74989, 41.96849, 1572],
            [23.75, 41.96846, 1570],
            [23.75016, 41.96833, 1564],
            [23.7503, 41.96818, 1560],
            [23.75043, 41.96804, 1558],
            [23.75048, 41.96803, 1558],
            [23.75052, 41.96802, 1558],
            [23.75059, 41.96804, 1558],
            [23.75066, 41.96808, 1559],
            [23.75083, 41.96818, 1560],
            [23.75122, 41.9685, 1561],
            [23.75131, 41.96861, 1561],
            [23.75138, 41.96864, 1561],
            [23.75147, 41.96866, 1562],
            [23.75155, 41.96862, 1561],
            [23.75182, 41.9683, 1555],
            [23.75215, 41.96792, 1551],
            [23.75226, 41.96783, 1550],
            [23.75244, 41.96778, 1549],
            [23.75265, 41.96775, 1549],
            [23.75284, 41.96778, 1549],
            [23.75304, 41.96788, 1552],
            [23.75324, 41.96794, 1554],
            [23.75345, 41.96795, 1554],
            [23.75372, 41.96793, 1552],
            [23.75394, 41.96792, 1552],
            [23.75417, 41.96797, 1553],
            [23.75428, 41.96803, 1553],
            [23.75436, 41.96807, 1553],
            [23.75465, 41.9683, 1556],
            [23.75502, 41.96882, 1558],
            [23.75516, 41.96898, 1560],
            [23.75523, 41.96907, 1561],
            [23.75529, 41.9691, 1561],
            [23.75537, 41.9691, 1562],
            [23.75546, 41.96904, 1561],
            [23.75567, 41.96858, 1550],
            [23.75578, 41.96846, 1550],
            [23.75586, 41.96835, 1549],
            [23.75592, 41.96766, 1541],
            [23.75596, 41.96746, 1539],
            [23.75606, 41.96724, 1535],
            [23.75613, 41.96695, 1529],
            [23.75621, 41.96677, 1525],
            [23.75637, 41.96653, 1523],
            [23.75647, 41.96642, 1523],
            [23.75657, 41.96635, 1524],
            [23.75675, 41.9663, 1526],
            [23.75692, 41.96626, 1529],
            [23.75704, 41.96621, 1530],
            [23.75714, 41.96615, 1529],
            [23.75721, 41.96613, 1529],
            [23.75737, 41.96611, 1530],
            [23.7575, 41.96606, 1528],
            [23.75764, 41.96603, 1526],
            [23.75777, 41.96602, 1526],
            [23.75792, 41.96605, 1525],
            [23.75834, 41.96622, 1527],
            [23.75866, 41.96632, 1529],
            [23.75903, 41.96642, 1527],
            [23.75926, 41.96659, 1530],
            [23.75942, 41.96667, 1531],
            [23.7596, 41.9667, 1532],
            [23.75986, 41.96664, 1530],
            [23.76005, 41.96659, 1528],
            [23.76023, 41.96659, 1528],
            [23.76036, 41.96661, 1528],
            [23.76054, 41.9667, 1530],
            [23.76064, 41.96682, 1534],
            [23.7607, 41.9669, 1536],
            [23.76077, 41.96693, 1536],
            [23.7609, 41.96692, 1535],
            [23.7611, 41.96687, 1536],
            [23.76133, 41.96683, 1538],
            [23.76153, 41.96672, 1536],
            [23.76185, 41.96635, 1532],
            [23.76194, 41.96629, 1532],
            [23.76213, 41.96626, 1533],
            [23.76242, 41.96626, 1535],
            [23.76285, 41.9662, 1534],
            [23.76304, 41.96619, 1535],
            [23.76316, 41.96617, 1535],
            [23.76347, 41.96566, 1534],
            [23.76354, 41.96535, 1540],
            [23.76352, 41.96527, 1542],
            [23.76346, 41.96518, 1544],
            [23.76313, 41.96495, 1547],
            [23.76305, 41.96482, 1548],
            [23.76303, 41.96471, 1549],
            [23.76308, 41.96458, 1551],
            [23.76321, 41.9643, 1557],
            [23.76345, 41.96387, 1564],
            [23.76355, 41.9638, 1565],
            [23.76368, 41.96376, 1567],
            [23.76415, 41.96371, 1571],
            [23.76452, 41.96366, 1576],
            [23.76473, 41.96365, 1579],
            [23.765, 41.96372, 1581],
            [23.7653, 41.96374, 1583],
            [23.76546, 41.96374, 1583],
            [23.76568, 41.96369, 1584],
            [23.76579, 41.96364, 1585],
            [23.76629, 41.96325, 1587],
            [23.76672, 41.96302, 1590],
            [23.76693, 41.96296, 1591],
            [23.76764, 41.96274, 1594],
            [23.76783, 41.96262, 1594],
            [23.76859, 41.96236, 1596],
            [23.76875, 41.96229, 1597],
            [23.76881, 41.96221, 1599],
            [23.76893, 41.96206, 1600],
            [23.76907, 41.962, 1600],
            [23.76948, 41.96181, 1602],
            [23.76954, 41.96165, 1602],
            [23.76952, 41.96154, 1602],
            [23.76945, 41.96144, 1601],
            [23.76928, 41.96109, 1598],
            [23.76921, 41.96082, 1594],
            [23.76925, 41.96062, 1593],
            [23.76939, 41.96039, 1593],
            [23.76952, 41.96029, 1593],
            [23.76961, 41.96021, 1593],
            [23.76968, 41.96008, 1592],
            [23.7697, 41.95991, 1591],
            [23.76971, 41.95972, 1591],
            [23.76968, 41.9595, 1591],
            [23.76968, 41.95895, 1589],
            [23.76981, 41.95861, 1585],
            [23.76983, 41.95845, 1582],
            [23.76978, 41.95828, 1579],
            [23.76976, 41.95826, 1579],
            [23.76959, 41.95798, 1577],
            [23.76932, 41.9577, 1577],
            [23.76898, 41.95729, 1574],
            [23.76834, 41.95669, 1573],
            [23.76803, 41.95628, 1571],
            [23.76784, 41.95592, 1569],
            [23.76777, 41.95573, 1569],
            [23.76768, 41.95501, 1571],
            [23.76755, 41.95475, 1569],
            [23.76742, 41.95459, 1568],
            [23.76715, 41.9544, 1567],
            [23.76682, 41.95425, 1567],
            [23.76662, 41.95415, 1567],
            [23.76628, 41.95387, 1569],
            [23.76597, 41.95366, 1571],
            [23.76568, 41.95355, 1571],
            [23.76543, 41.95341, 1571],
            [23.76529, 41.95327, 1571],
            [23.76485, 41.95265, 1574],
            [23.76475, 41.95247, 1574],
            [23.76468, 41.95229, 1571],
            [23.76454, 41.95216, 1570],
            [23.7644, 41.95202, 1570],
            [23.76419, 41.95178, 1570],
            [23.76395, 41.9516, 1570],
            [23.76375, 41.95155, 1572],
            [23.76314, 41.95149, 1580],
            [23.7629, 41.9515, 1582],
            [23.76279, 41.95151, 1583],
            [23.76274, 41.95149, 1583],
            [23.76271, 41.95145, 1584],
            [23.76271, 41.95137, 1585],
            [23.76273, 41.9512, 1587],
            [23.76266, 41.95097, 1588],
            [23.76249, 41.95083, 1590],
            [23.76218, 41.95076, 1591],
            [23.76207, 41.95072, 1591],
            [23.76181, 41.95055, 1591],
            [23.76125, 41.95004, 1586],
            [23.76103, 41.94992, 1585],
            [23.76093, 41.94984, 1585],
            [23.76085, 41.9497, 1585],
            [23.76081, 41.94962, 1585],
            [23.76075, 41.94938, 1587],
            [23.76078, 41.94885, 1595],
            [23.76082, 41.94868, 1597],
            [23.76093, 41.94857, 1597],
            [23.76109, 41.94844, 1597],
            [23.76126, 41.94825, 1597],
            [23.76133, 41.94814, 1597],
            [23.76141, 41.948, 1597],
            [23.76141, 41.94766, 1601],
            [23.76135, 41.94735, 1604],
            [23.76138, 41.94694, 1603],
            [23.76146, 41.94663, 1599],
            [23.76153, 41.9465, 1597],
            [23.76164, 41.9464, 1596],
            [23.76173, 41.94617, 1595],
            [23.76189, 41.94557, 1596],
            [23.76193, 41.94535, 1594],
            [23.76189, 41.94518, 1594],
            [23.76181, 41.94499, 1594],
            [23.76181, 41.94481, 1595],
            [23.76194, 41.94407, 1594],
            [23.76199, 41.94367, 1594],
            [23.76209, 41.94287, 1598],
            [23.76216, 41.94263, 1601],
            [23.76232, 41.94239, 1604],
            [23.76266, 41.942, 1609],
            [23.76275, 41.9419, 1610],
            [23.76279, 41.9418, 1611],
            [23.7628, 41.94167, 1611],
            [23.76273, 41.94141, 1610],
            [23.76265, 41.94117, 1610],
            [23.76255, 41.94098, 1608],
            [23.76229, 41.94058, 1605],
            [23.76213, 41.94042, 1605],
            [23.7617, 41.94019, 1603],
            [23.76138, 41.93994, 1599],
            [23.76111, 41.93968, 1596],
            [23.76103, 41.9395, 1595],
            [23.76096, 41.93932, 1592],
            [23.76077, 41.93908, 1590],
            [23.76064, 41.93885, 1588],
            [23.76063, 41.93869, 1587],
            [23.76065, 41.93844, 1586],
            [23.7606, 41.93817, 1586],
            [23.7606, 41.93815, 1586],
            [23.76064, 41.93798, 1584],
            [23.76062, 41.93779, 1584],
            [23.76056, 41.93767, 1583],
            [23.76037, 41.93752, 1582],
            [23.76001, 41.93726, 1577],
            [23.75968, 41.93694, 1576],
            [23.75946, 41.93671, 1576],
            [23.75929, 41.93643, 1578],
            [23.75905, 41.93581, 1581],
            [23.75894, 41.9355, 1585],
            [23.75876, 41.93516, 1593],
            [23.75871, 41.93501, 1596],
            [23.75872, 41.9348, 1598],
            [23.75869, 41.93461, 1599],
            [23.75856, 41.93415, 1599],
            [23.75843, 41.93401, 1600],
            [23.75829, 41.93384, 1601],
            [23.75812, 41.93346, 1604],
            [23.758, 41.93324, 1603],
            [23.75782, 41.93299, 1602],
            [23.75761, 41.93251, 1599],
            [23.75754, 41.93199, 1599],
            [23.75745, 41.9318, 1599],
            [23.75704, 41.93147, 1600],
            [23.7567, 41.93124, 1604],
            [23.75642, 41.93095, 1603],
            [23.75626, 41.93062, 1603],
            [23.75614, 41.93038, 1604],
            [23.75608, 41.92993, 1606],
            [23.75601, 41.92954, 1600],
            [23.75586, 41.92931, 1596],
            [23.75578, 41.92912, 1594],
            [23.75581, 41.92894, 1593],
            [23.7561, 41.92853, 1590],
            [23.75638, 41.92824, 1589],
            [23.75671, 41.92795, 1585],
            [23.75674, 41.92792, 1585],
            [23.75717, 41.92758, 1582],
            [23.75738, 41.92733, 1581],
            [23.7583, 41.92606, 1581],
            [23.75845, 41.92598, 1581],
            [23.75863, 41.9259, 1580],
            [23.75879, 41.92575, 1577],
            [23.75887, 41.92556, 1575],
            [23.75883, 41.92528, 1571],
            [23.75884, 41.92508, 1568],
            [23.75897, 41.92435, 1560],
            [23.75899, 41.92405, 1558],
            [23.75894, 41.92397, 1557],
            [23.75873, 41.9237, 1554],
            [23.75841, 41.92348, 1553],
            [23.75777, 41.92324, 1552],
            [23.75745, 41.92308, 1551],
            [23.75726, 41.92294, 1549],
            [23.75723, 41.92292, 1549],
            [23.75681, 41.9227, 1546],
            [23.75661, 41.92263, 1546],
            [23.75611, 41.92244, 1547],
            [23.75585, 41.92228, 1548],
            [23.7556, 41.9222, 1549],
          ],
        ],
      },
      properties: {
        name: "Орцево - Златарица",
        visibility: !0,
        description: "Generated by AllTrails https://www.alltrails.com/",
        extrude: !0,
        tessellate: !0,
      },
    },
  ],
  Ih = { type: w5, features: x5 },
  Rh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ih, features: x5, type: w5 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  P5 = "FeatureCollection",
  S5 = [
    {
      type: "Feature",
      geometry: {
        type: "MultiLineString",
        coordinates: [
          [
            [23.73013, 41.96337, 1558],
            [23.72997, 41.96335, 1557],
            [23.72976, 41.96332, 1556],
            [23.72911, 41.96335, 1555],
            [23.7287, 41.96336, 1553],
            [23.72846, 41.96336, 1552],
            [23.72834, 41.96333, 1550],
            [23.72821, 41.96327, 1549],
            [23.7279, 41.96301, 1545],
            [23.72764, 41.96284, 1541],
            [23.72723, 41.96276, 1538],
            [23.72686, 41.96276, 1539],
            [23.72648, 41.96275, 1537],
            [23.72577, 41.96271, 1530],
            [23.72432, 41.96253, 1522],
            [23.72385, 41.96259, 1517],
            [23.72374, 41.96262, 1516],
            [23.72366, 41.96267, 1516],
            [23.72356, 41.96281, 1516],
            [23.72365, 41.96296, 1515],
            [23.72382, 41.96309, 1515],
            [23.72409, 41.96318, 1516],
            [23.72422, 41.9633, 1517],
            [23.72428, 41.9635, 1517],
            [23.72439, 41.96417, 1509],
            [23.72443, 41.96442, 1507],
            [23.72434, 41.96465, 1506],
            [23.72412, 41.96492, 1507],
            [23.72395, 41.96504, 1508],
            [23.72376, 41.96511, 1508],
            [23.72354, 41.96522, 1508],
            [23.72343, 41.96534, 1509],
            [23.72319, 41.96588, 1511],
            [23.72264, 41.96647, 1508],
            [23.72219, 41.96664, 1505],
            [23.72195, 41.96662, 1505],
            [23.72116, 41.96669, 1514],
            [23.72103, 41.96668, 1515],
            [23.72078, 41.96655, 1516],
            [23.72047, 41.96651, 1518],
            [23.72019, 41.96658, 1523],
            [23.7198, 41.9665, 1525],
            [23.71916, 41.96645, 1527],
            [23.71827, 41.96684, 1529],
            [23.71814, 41.96691, 1529],
            [23.71788, 41.96717, 1531],
            [23.71701, 41.96741, 1529],
            [23.71674, 41.96734, 1530],
            [23.71631, 41.96714, 1530],
            [23.71604, 41.96707, 1529],
            [23.71574, 41.96704, 1526],
            [23.71542, 41.96715, 1527],
            [23.71514, 41.96724, 1526],
            [23.71435, 41.96745, 1522],
            [23.71411, 41.96748, 1521],
            [23.71401, 41.96745, 1521],
            [23.71394, 41.96739, 1520],
            [23.71384, 41.96724, 1520],
            [23.71372, 41.96703, 1525],
            [23.71358, 41.96676, 1528],
            [23.71348, 41.96657, 1528],
            [23.71337, 41.96642, 1527],
            [23.71318, 41.9663, 1526],
            [23.71305, 41.96629, 1527],
            [23.71291, 41.96632, 1529],
            [23.71277, 41.96634, 1532],
            [23.71263, 41.96635, 1534],
            [23.71254, 41.96634, 1535],
            [23.71247, 41.96632, 1536],
            [23.71242, 41.9663, 1536],
            [23.71193, 41.96602, 1535],
            [23.71176, 41.96596, 1533],
            [23.71154, 41.96592, 1531],
            [23.71143, 41.96592, 1530],
            [23.71126, 41.96595, 1530],
            [23.71108, 41.96603, 1531],
            [23.71081, 41.96616, 1531],
            [23.71066, 41.96622, 1531],
            [23.71055, 41.96624, 1531],
            [23.71036, 41.96624, 1531],
            [23.71024, 41.96622, 1531],
            [23.71003, 41.9662, 1531],
            [23.70984, 41.96622, 1531],
            [23.7096, 41.9663, 1532],
            [23.70936, 41.96637, 1531],
            [23.70925, 41.96639, 1531],
            [23.70909, 41.9664, 1530],
            [23.7089, 41.96641, 1530],
            [23.70862, 41.96643, 1530],
            [23.70841, 41.96644, 1531],
            [23.70825, 41.96643, 1531],
            [23.70816, 41.96641, 1530],
            [23.708, 41.96635, 1529],
            [23.70772, 41.96622, 1528],
            [23.70755, 41.9661, 1527],
            [23.70741, 41.96604, 1528],
            [23.7072, 41.96597, 1528],
            [23.7069, 41.96588, 1528],
            [23.7063, 41.96572, 1531],
            [23.70611, 41.96568, 1532],
            [23.70598, 41.96566, 1533],
            [23.70586, 41.96566, 1534],
            [23.70575, 41.96559, 1533],
            [23.70558, 41.96567, 1533],
            [23.7053, 41.96572, 1530],
            [23.70505, 41.96577, 1530],
            [23.70486, 41.96577, 1530],
            [23.70462, 41.96574, 1529],
            [23.70448, 41.9656, 1527],
            [23.70414, 41.96548, 1523],
            [23.70386, 41.96536, 1523],
            [23.70352, 41.96516, 1526],
            [23.70327, 41.96499, 1526],
            [23.70303, 41.96475, 1525],
            [23.7028, 41.96452, 1524],
            [23.70248, 41.96441, 1526],
            [23.70222, 41.96432, 1528],
            [23.70196, 41.96412, 1529],
            [23.70175, 41.964, 1527],
            [23.70147, 41.96394, 1523],
            [23.70118, 41.96386, 1520],
            [23.70089, 41.96383, 1521],
            [23.70061, 41.96384, 1521],
            [23.70039, 41.96382, 1520],
            [23.70031, 41.96381, 1520],
            [23.70003, 41.96362, 1519],
            [23.69985, 41.96339, 1516],
            [23.69971, 41.96322, 1514],
            [23.69943, 41.96311, 1513],
            [23.69912, 41.96306, 1515],
            [23.69877, 41.96297, 1518],
            [23.69847, 41.96275, 1520],
            [23.69831, 41.96252, 1518],
            [23.69818, 41.9622, 1515],
            [23.69811, 41.96199, 1514],
            [23.69805, 41.96177, 1513],
            [23.69803, 41.96158, 1512],
            [23.69792, 41.96144, 1512],
            [23.69779, 41.96131, 1513],
            [23.69762, 41.96112, 1517],
            [23.69755, 41.961, 1519],
            [23.69749, 41.96079, 1522],
            [23.69746, 41.96054, 1521],
            [23.6974, 41.96028, 1523],
            [23.69739, 41.96007, 1524],
            [23.6973, 41.95988, 1529],
            [23.69723, 41.95968, 1532],
            [23.69723, 41.95949, 1530],
            [23.69735, 41.95921, 1523],
            [23.69744, 41.95897, 1519],
            [23.69733, 41.9588, 1519],
            [23.69715, 41.9587, 1520],
            [23.69705, 41.95858, 1519],
            [23.6969, 41.95836, 1516],
            [23.69666, 41.95809, 1510],
            [23.69639, 41.95782, 1508],
            [23.69597, 41.95758, 1503],
            [23.69569, 41.95746, 1502],
            [23.6953, 41.95722, 1496],
            [23.69496, 41.95718, 1491],
            [23.69458, 41.95709, 1484],
            [23.69427, 41.95707, 1479],
            [23.69405, 41.95698, 1476],
            [23.69376, 41.95694, 1472],
            [23.69352, 41.95686, 1467],
            [23.69331, 41.95675, 1463],
            [23.69304, 41.9567, 1461],
            [23.69274, 41.95671, 1457],
            [23.69242, 41.95673, 1449],
            [23.6921, 41.95674, 1440],
            [23.69157, 41.95662, 1438],
            [23.69122, 41.95647, 1437],
            [23.6908, 41.95638, 1437],
            [23.69069, 41.95631, 1437],
            [23.69071, 41.95615, 1438],
            [23.69079, 41.95597, 1437],
            [23.69095, 41.95583, 1434],
            [23.69111, 41.95568, 1432],
            [23.69108, 41.95549, 1432],
            [23.69096, 41.95537, 1434],
            [23.69077, 41.95528, 1437],
            [23.69053, 41.9553, 1440],
            [23.69034, 41.95522, 1441],
            [23.69024, 41.95505, 1440],
            [23.69023, 41.95488, 1438],
            [23.69025, 41.95463, 1434],
            [23.69024, 41.95436, 1432],
            [23.69013, 41.95421, 1432],
            [23.68995, 41.95414, 1434],
            [23.68972, 41.95409, 1435],
            [23.68947, 41.95414, 1438],
            [23.68926, 41.95417, 1441],
            [23.68905, 41.95414, 1441],
            [23.68887, 41.95403, 1437],
            [23.68863, 41.95395, 1433],
            [23.68842, 41.95388, 1429],
            [23.68836, 41.95382, 1426],
            [23.68835, 41.95364, 1422],
            [23.68835, 41.95341, 1416],
            [23.68844, 41.95323, 1411],
            [23.68851, 41.95306, 1406],
            [23.68844, 41.95293, 1404],
            [23.68821, 41.95295, 1403],
            [23.6881, 41.95303, 1405],
            [23.68795, 41.9531, 1406],
            [23.68772, 41.95318, 1406],
            [23.68751, 41.95329, 1406],
            [23.6873, 41.9533, 1402],
            [23.68712, 41.9532, 1397],
            [23.68699, 41.95303, 1392],
            [23.68698, 41.95282, 1388],
            [23.68684, 41.95265, 1383],
            [23.68662, 41.9525, 1378],
            [23.68646, 41.95235, 1377],
            [23.68633, 41.95216, 1374],
            [23.68626, 41.95194, 1371],
            [23.68613, 41.95172, 1367],
            [23.68602, 41.95152, 1365],
            [23.6859, 41.95134, 1363],
            [23.68582, 41.95111, 1362],
            [23.68579, 41.9509, 1359],
            [23.68566, 41.95078, 1357],
            [23.68544, 41.95074, 1356],
            [23.68559, 41.95067, 1356],
            [23.68565, 41.95064, 1355],
            [23.68592, 41.95062, 1354],
            [23.6861, 41.95059, 1352],
            [23.68632, 41.95049, 1348],
            [23.68644, 41.95047, 1347],
            [23.68659, 41.95058, 1347],
            [23.68665, 41.95069, 1349],
            [23.68679, 41.95078, 1350],
            [23.687, 41.95079, 1348],
            [23.68716, 41.95075, 1348],
            [23.68737, 41.95063, 1347],
            [23.6875, 41.95054, 1348],
            [23.68761, 41.95033, 1347],
            [23.68772, 41.95015, 1345],
            [23.68784, 41.95001, 1344],
            [23.68799, 41.94988, 1343],
            [23.68808, 41.94974, 1343],
            [23.68821, 41.94957, 1341],
            [23.68826, 41.94938, 1339],
            [23.68839, 41.94918, 1338],
            [23.68851, 41.94902, 1337],
            [23.68864, 41.94901, 1337],
            [23.68877, 41.94911, 1336],
            [23.68884, 41.9493, 1334],
            [23.68889, 41.94946, 1333],
            [23.68902, 41.94957, 1332],
            [23.68925, 41.94958, 1330],
            [23.6895, 41.94953, 1329],
            [23.68973, 41.94936, 1329],
            [23.68993, 41.94913, 1327],
            [23.69016, 41.94882, 1327],
            [23.69039, 41.94859, 1327],
            [23.6907, 41.94834, 1326],
            [23.69085, 41.94817, 1323],
            [23.69104, 41.94802, 1321],
            [23.69135, 41.94795, 1318],
            [23.69173, 41.94797, 1313],
            [23.69208, 41.94805, 1312],
            [23.69239, 41.9481, 1313],
            [23.69267, 41.94818, 1313],
            [23.69292, 41.94828, 1314],
            [23.69315, 41.94839, 1314],
            [23.69339, 41.94843, 1315],
            [23.6936, 41.94846, 1316],
            [23.69379, 41.9485, 1317],
            [23.69393, 41.9486, 1318],
            [23.69401, 41.94877, 1319],
            [23.69407, 41.94891, 1321],
            [23.69412, 41.94901, 1323],
            [23.69422, 41.94904, 1325],
            [23.69431, 41.94896, 1327],
            [23.69424, 41.94878, 1325],
            [23.69417, 41.94862, 1323],
            [23.69416, 41.9485, 1326],
            [23.69422, 41.9483, 1334],
            [23.69432, 41.94812, 1338],
            [23.69451, 41.94796, 1342],
            [23.69462, 41.94782, 1342],
            [23.69484, 41.94772, 1345],
            [23.69505, 41.94766, 1351],
            [23.69509, 41.94758, 1352],
            [23.69509, 41.94747, 1352],
            [23.69497, 41.94739, 1351],
            [23.69479, 41.9474, 1349],
            [23.69453, 41.94745, 1345],
            [23.69439, 41.94741, 1346],
            [23.6942, 41.94732, 1347],
            [23.69409, 41.94724, 1349],
            [23.69392, 41.94726, 1345],
            [23.69379, 41.94716, 1345],
            [23.69378, 41.94699, 1346],
            [23.69407, 41.94705, 1350],
            [23.69434, 41.94705, 1356],
            [23.69458, 41.94705, 1360],
            [23.69479, 41.94702, 1363],
            [23.69494, 41.94697, 1365],
            [23.69517, 41.94704, 1363],
            [23.69536, 41.94702, 1366],
            [23.6957, 41.9469, 1374],
            [23.69597, 41.94678, 1375],
            [23.69622, 41.94674, 1374],
            [23.6965, 41.94663, 1373],
            [23.69677, 41.94648, 1367],
            [23.69702, 41.94636, 1362],
            [23.69719, 41.94629, 1359],
            [23.6973, 41.94637, 1360],
            [23.69737, 41.94653, 1361],
            [23.69744, 41.9467, 1363],
            [23.69754, 41.94681, 1362],
            [23.69771, 41.94682, 1359],
            [23.69797, 41.94678, 1354],
            [23.69819, 41.9467, 1351],
            [23.69839, 41.94656, 1350],
            [23.69856, 41.94631, 1350],
            [23.69871, 41.94611, 1348],
            [23.69888, 41.94589, 1344],
            [23.69917, 41.94574, 1340],
            [23.69944, 41.94565, 1336],
            [23.69969, 41.94564, 1331],
            [23.69988, 41.9457, 1328],
            [23.69996, 41.94587, 1326],
            [23.69996, 41.94604, 1326],
            [23.69989, 41.94619, 1326],
            [23.69979, 41.94643, 1326],
            [23.69975, 41.94659, 1325],
            [23.69981, 41.94674, 1324],
            [23.69998, 41.9468, 1321],
            [23.70026, 41.94681, 1321],
            [23.70049, 41.9468, 1323],
            [23.70072, 41.94671, 1324],
            [23.70089, 41.94655, 1320],
            [23.70109, 41.9464, 1315],
            [23.70128, 41.94632, 1314],
            [23.70143, 41.94624, 1313],
            [23.70154, 41.94611, 1311],
            [23.70173, 41.94599, 1312],
            [23.70187, 41.9459, 1311],
            [23.70211, 41.9458, 1309],
            [23.70227, 41.94576, 1309],
            [23.70239, 41.94566, 1307],
            [23.70252, 41.94553, 1304],
            [23.70264, 41.94542, 1300],
            [23.70282, 41.94541, 1298],
            [23.70302, 41.94548, 1297],
            [23.70318, 41.94559, 1298],
            [23.70333, 41.94571, 1302],
            [23.70355, 41.94576, 1299],
            [23.70377, 41.94577, 1295],
            [23.70405, 41.94581, 1289],
            [23.70425, 41.94589, 1286],
            [23.70444, 41.94595, 1281],
            [23.70461, 41.94607, 1280],
            [23.7047, 41.94624, 1279],
            [23.7048, 41.94638, 1281],
            [23.70499, 41.94642, 1280],
            [23.70524, 41.94639, 1279],
            [23.70541, 41.94647, 1279],
            [23.70555, 41.94664, 1279],
            [23.70568, 41.94678, 1281],
            [23.70591, 41.94684, 1279],
            [23.70613, 41.94695, 1280],
            [23.70631, 41.94715, 1281],
            [23.7064, 41.94726, 1282],
            [23.70655, 41.94732, 1281],
            [23.70678, 41.94738, 1282],
            [23.70712, 41.94746, 1285],
            [23.70732, 41.94762, 1283],
            [23.70749, 41.9478, 1279],
            [23.70777, 41.94789, 1280],
            [23.7079, 41.948, 1280],
            [23.70824, 41.9484, 1280],
            [23.7085, 41.94899, 1282],
            [23.70856, 41.94908, 1284],
            [23.70859, 41.94916, 1287],
            [23.70856, 41.94908, 1284],
            [23.70871, 41.94907, 1284],
            [23.70896, 41.94906, 1284],
            [23.7094, 41.94909, 1288],
            [23.70974, 41.94919, 1292],
            [23.71136, 41.94942, 1303],
            [23.71189, 41.94954, 1306],
            [23.71212, 41.9496, 1308],
            [23.713, 41.94972, 1309],
            [23.71373, 41.94973, 1312],
            [23.71407, 41.94974, 1312],
            [23.71432, 41.94981, 1314],
            [23.71467, 41.95, 1318],
            [23.71544, 41.95014, 1326],
            [23.7158, 41.95011, 1326],
            [23.71615, 41.94995, 1328],
            [23.71678, 41.94945, 1334],
            [23.71802, 41.94908, 1354],
            [23.71845, 41.94908, 1364],
            [23.71963, 41.94858, 1384],
            [23.71975, 41.94853, 1386],
            [23.71987, 41.94855, 1390],
            [23.71996, 41.94827, 1393],
            [23.72027, 41.94789, 1403],
            [23.72047, 41.94744, 1410],
            [23.72089, 41.94722, 1410],
            [23.7211, 41.94713, 1412],
            [23.72151, 41.94685, 1408],
            [23.72168, 41.94657, 1409],
            [23.72183, 41.94646, 1407],
            [23.72202, 41.94645, 1400],
            [23.72218, 41.94646, 1393],
            [23.72226, 41.94645, 1389],
            [23.72245, 41.94633, 1384],
            [23.72257, 41.94639, 1379],
            [23.7226, 41.94666, 1375],
            [23.72272, 41.9469, 1374],
            [23.72363, 41.94775, 1343],
            [23.72381, 41.94805, 1339],
            [23.72406, 41.94843, 1342],
            [23.72457, 41.94867, 1334],
            [23.72519, 41.94865, 1326],
            [23.72541, 41.9486, 1322],
            [23.72609, 41.94863, 1314],
            [23.72629, 41.94856, 1315],
            [23.72649, 41.94858, 1314],
            [23.72687, 41.94867, 1312],
            [23.7271, 41.94881, 1308],
            [23.72732, 41.94886, 1304],
            [23.72782, 41.94883, 1298],
            [23.72851, 41.94866, 1297],
            [23.72892, 41.94853, 1298],
            [23.7291, 41.94844, 1297],
            [23.72945, 41.94825, 1294],
            [23.72965, 41.94838, 1296],
            [23.72968, 41.94839, 1297],
            [23.72965, 41.94838, 1296],
            [23.7296, 41.94853, 1300],
            [23.72957, 41.94867, 1303],
            [23.72954, 41.94882, 1307],
            [23.72951, 41.94899, 1313],
            [23.7295, 41.94915, 1319],
            [23.72952, 41.94928, 1325],
            [23.72955, 41.94943, 1333],
            [23.72957, 41.94953, 1336],
            [23.7296, 41.94967, 1341],
            [23.72961, 41.94982, 1345],
            [23.72961, 41.94998, 1350],
            [23.72963, 41.95014, 1355],
            [23.72966, 41.95029, 1360],
            [23.7297, 41.95041, 1365],
            [23.72971, 41.9505, 1368],
            [23.72971, 41.95062, 1373],
            [23.72968, 41.95077, 1378],
            [23.7296, 41.95096, 1386],
            [23.72946, 41.95113, 1394],
            [23.72935, 41.9513, 1398],
            [23.72922, 41.95148, 1402],
            [23.72911, 41.95165, 1406],
            [23.72905, 41.95182, 1409],
            [23.72891, 41.95201, 1413],
            [23.7288, 41.95215, 1415],
            [23.72869, 41.95227, 1418],
            [23.72859, 41.95236, 1420],
            [23.72849, 41.95247, 1420],
            [23.72846, 41.95265, 1420],
            [23.72846, 41.9528, 1421],
            [23.72849, 41.95304, 1423],
            [23.72854, 41.95326, 1425],
            [23.72861, 41.95348, 1424],
            [23.72864, 41.95367, 1422],
            [23.72865, 41.95368, 1422],
            [23.72872, 41.95385, 1422],
            [23.72881, 41.954, 1423],
            [23.72888, 41.95412, 1423],
            [23.72889, 41.95427, 1426],
            [23.72878, 41.95439, 1431],
            [23.72866, 41.95452, 1436],
            [23.72859, 41.95467, 1439],
            [23.72852, 41.95487, 1441],
            [23.72847, 41.95507, 1443],
            [23.72846, 41.95545, 1445],
            [23.72852, 41.95548, 1447],
            [23.72864, 41.9557, 1452],
            [23.72874, 41.95573, 1453],
            [23.72895, 41.95574, 1454],
            [23.72911, 41.9558, 1454],
            [23.72922, 41.95591, 1455],
            [23.72919, 41.9561, 1459],
            [23.72904, 41.95646, 1463],
            [23.72892, 41.95694, 1463],
            [23.72894, 41.95713, 1460],
            [23.72902, 41.9573, 1459],
            [23.72918, 41.9575, 1460],
            [23.72942, 41.95781, 1461],
            [23.72953, 41.95806, 1462],
            [23.72971, 41.95867, 1475],
            [23.72973, 41.95874, 1477],
            [23.72985, 41.95967, 1491],
            [23.72991, 41.96008, 1499],
            [23.72999, 41.96025, 1505],
            [23.73008, 41.96042, 1506],
            [23.73016, 41.96078, 1509],
            [23.73016, 41.96097, 1510],
            [23.7301, 41.96115, 1511],
            [23.72989, 41.96147, 1515],
            [23.72988, 41.96153, 1515],
            [23.72996, 41.9618, 1518],
            [23.72995, 41.9619, 1519],
            [23.72985, 41.96201, 1520],
            [23.72981, 41.96214, 1522],
            [23.72986, 41.96222, 1524],
            [23.73033, 41.96249, 1534],
            [23.73071, 41.96275, 1541],
            [23.73079, 41.96287, 1543],
            [23.73073, 41.963, 1547],
            [23.73059, 41.96304, 1550],
            [23.73029, 41.96306, 1552],
            [23.73021, 41.96311, 1553],
            [23.7302, 41.96318, 1554],
            [23.73013, 41.96337, 1558],
            [23.73025, 41.96341, 1558],
            [23.73013, 41.96337, 1558],
            [23.73004, 41.96336, 1558],
          ],
        ],
      },
      properties: {
        name: "Орцево - Бабяк - Черешово - Орцево",
        visibility: !0,
        description: "Generated by AllTrails https://www.alltrails.com/",
        extrude: !0,
        tessellate: !0,
      },
    },
  ],
  Ah = { type: P5, features: S5 },
  Dh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ah, features: S5, type: P5 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  L5 = "FeatureCollection",
  k5 = [
    {
      type: "Feature",
      geometry: {
        type: "MultiLineString",
        coordinates: [
          [
            [23.73054, 41.96361, 1559],
            [23.73059, 41.96373, 1559],
            [23.73062, 41.96378, 1560],
            [23.73079, 41.96397, 1562],
            [23.73087, 41.96418, 1565],
            [23.73092, 41.96445, 1569],
            [23.73094, 41.96491, 1576],
            [23.73088, 41.96531, 1579],
            [23.73089, 41.96545, 1579],
            [23.73094, 41.96555, 1579],
            [23.73106, 41.96566, 1581],
            [23.7311, 41.9657, 1582],
            [23.73132, 41.96602, 1589],
            [23.7315, 41.96625, 1592],
            [23.73172, 41.9664, 1593],
            [23.73206, 41.96661, 1593],
            [23.73231, 41.96677, 1596],
            [23.73247, 41.96705, 1601],
            [23.73261, 41.96756, 1602],
            [23.73278, 41.96803, 1608],
            [23.73292, 41.96819, 1611],
            [23.73317, 41.96831, 1614],
            [23.73349, 41.96839, 1617],
            [23.73382, 41.96839, 1619],
            [23.73414, 41.96836, 1622],
            [23.7343, 41.96837, 1623],
            [23.73441, 41.96841, 1624],
            [23.73449, 41.96849, 1624],
            [23.73457, 41.96861, 1625],
            [23.73465, 41.96875, 1625],
            [23.73472, 41.96893, 1625],
            [23.7348, 41.96908, 1627],
            [23.73499, 41.96927, 1628],
            [23.73542, 41.96977, 1626],
            [23.73562, 41.96995, 1625],
            [23.73566, 41.96999, 1625],
            [23.73591, 41.97009, 1626],
            [23.73604, 41.97013, 1627],
            [23.73614, 41.97015, 1627],
            [23.73623, 41.97018, 1627],
            [23.73668, 41.97023, 1626],
            [23.737, 41.97023, 1627],
            [23.73716, 41.97027, 1629],
            [23.73735, 41.97038, 1631],
            [23.73752, 41.97044, 1632],
            [23.73775, 41.97046, 1634],
            [23.73793, 41.97048, 1635],
            [23.73865, 41.97067, 1640],
            [23.73889, 41.97072, 1642],
            [23.73927, 41.9707, 1644],
            [23.73942, 41.97066, 1644],
            [23.73975, 41.97058, 1641],
            [23.73994, 41.97056, 1639],
            [23.74016, 41.97061, 1639],
            [23.74032, 41.97069, 1639],
            [23.74054, 41.97086, 1639],
            [23.74092, 41.97119, 1637],
            [23.74132, 41.97139, 1634],
            [23.74252, 41.97181, 1630],
            [23.74295, 41.97193, 1631],
            [23.7433, 41.97201, 1632],
            [23.74357, 41.97204, 1632],
            [23.7438, 41.97214, 1634],
            [23.7444, 41.97261, 1642],
            [23.74461, 41.97275, 1644],
            [23.74498, 41.9729, 1647],
            [23.74549, 41.97307, 1654],
            [23.74598, 41.97341, 1653],
            [23.74636, 41.97359, 1653],
            [23.7467, 41.97367, 1657],
            [23.74701, 41.97374, 1659],
            [23.74741, 41.97383, 1660],
            [23.74781, 41.97389, 1660],
            [23.74808, 41.97391, 1659],
            [23.74835, 41.9739, 1658],
            [23.74872, 41.97379, 1657],
            [23.74903, 41.97363, 1656],
            [23.74925, 41.97356, 1656],
            [23.74964, 41.97351, 1655],
            [23.74972, 41.9735, 1655],
            [23.7504, 41.97349, 1652],
            [23.75056, 41.9735, 1653],
            [23.75084, 41.97353, 1654],
            [23.75108, 41.97356, 1654],
            [23.75153, 41.97351, 1651],
            [23.75225, 41.97341, 1645],
            [23.75245, 41.97333, 1646],
            [23.75261, 41.9733, 1645],
            [23.75291, 41.97332, 1644],
            [23.75345, 41.97338, 1644],
            [23.75369, 41.9734, 1645],
            [23.75397, 41.9734, 1646],
            [23.75432, 41.97336, 1648],
            [23.75507, 41.97333, 1645],
            [23.75539, 41.97327, 1645],
            [23.75568, 41.97314, 1643],
            [23.75574, 41.9731, 1642],
            [23.75568, 41.97314, 1643],
            [23.75563, 41.97335, 1647],
            [23.7556, 41.97345, 1649],
            [23.75559, 41.97365, 1652],
            [23.75567, 41.97384, 1656],
            [23.75596, 41.97402, 1661],
            [23.75607, 41.97403, 1662],
            [23.75618, 41.97399, 1662],
            [23.75627, 41.97399, 1664],
            [23.75656, 41.97407, 1669],
            [23.75699, 41.97415, 1672],
            [23.75743, 41.97432, 1677],
            [23.75749, 41.97433, 1678],
            [23.75794, 41.97439, 1684],
            [23.7583, 41.97434, 1686],
            [23.75863, 41.97423, 1690],
            [23.7588, 41.97422, 1692],
            [23.75886, 41.97479, 1692],
            [23.75882, 41.975, 1696],
            [23.75886, 41.9751, 1699],
            [23.75911, 41.97514, 1701],
            [23.75958, 41.9756, 1706],
            [23.75966, 41.97585, 1708],
            [23.75938, 41.97638, 1707],
            [23.75943, 41.97667, 1705],
            [23.75947, 41.97688, 1706],
            [23.7595, 41.97693, 1706],
            [23.75947, 41.97688, 1706],
            [23.75943, 41.97667, 1705],
            [23.75967, 41.97691, 1706],
            [23.75987, 41.97739, 1707],
            [23.76034, 41.97776, 1708],
            [23.76059, 41.97787, 1708],
            [23.7612, 41.978, 1708],
            [23.76194, 41.97802, 1712],
            [23.76208, 41.97806, 1714],
            [23.76213, 41.97804, 1714],
            [23.7625, 41.97819, 1716],
            [23.76289, 41.97829, 1715],
            [23.764, 41.97855, 1713],
            [23.76435, 41.97867, 1709],
            [23.76442, 41.97877, 1707],
            [23.7644, 41.97884, 1707],
            [23.76428, 41.97891, 1708],
            [23.76271, 41.97956, 1696],
            [23.76193, 41.97976, 1691],
            [23.76184, 41.97987, 1690],
            [23.76175, 41.97997, 1688],
            [23.76191, 41.98022, 1683],
            [23.76197, 41.98032, 1681],
            [23.76246, 41.98057, 1679],
            [23.76261, 41.98088, 1673],
            [23.76301, 41.98109, 1669],
            [23.76301, 41.98113, 1669],
            [23.76287, 41.98128, 1667],
            [23.76263, 41.98137, 1667],
            [23.76219, 41.98146, 1665],
            [23.76138, 41.98176, 1656],
            [23.76122, 41.98192, 1653],
            [23.7612, 41.98217, 1648],
            [23.76152, 41.98264, 1640],
            [23.76158, 41.98273, 1639],
            [23.76161, 41.98309, 1637],
            [23.76162, 41.9832, 1636],
            [23.76149, 41.98342, 1634],
            [23.76094, 41.98397, 1624],
            [23.76071, 41.98414, 1619],
            [23.76015, 41.98447, 1614],
            [23.75972, 41.9846, 1611],
            [23.7592, 41.98467, 1607],
            [23.75901, 41.98476, 1604],
            [23.75888, 41.98487, 1602],
            [23.75864, 41.98499, 1599],
            [23.75806, 41.98516, 1595],
            [23.75784, 41.98522, 1593],
            [23.75748, 41.98524, 1592],
            [23.75675, 41.98548, 1587],
            [23.75625, 41.98555, 1582],
            [23.75614, 41.98563, 1579],
            [23.75614, 41.98565, 1579],
            [23.75617, 41.98572, 1578],
            [23.75685, 41.98608, 1578],
            [23.75695, 41.98619, 1578],
            [23.75693, 41.98627, 1577],
            [23.75682, 41.98642, 1575],
            [23.75675, 41.98655, 1575],
            [23.75699, 41.987, 1577],
            [23.75735, 41.98735, 1577],
            [23.75752, 41.98771, 1579],
            [23.75745, 41.989, 1570],
            [23.75751, 41.98923, 1568],
            [23.75799, 41.98995, 1565],
            [23.75839, 41.99055, 1559],
            [23.75856, 41.99085, 1556],
            [23.75886, 41.99096, 1556],
            [23.75923, 41.99136, 1555],
            [23.7596, 41.99176, 1555],
            [23.75997, 41.99216, 1554],
            [23.76055, 41.99271, 1549],
            [23.76088, 41.99318, 1545],
            [23.76135, 41.99374, 1542],
            [23.762, 41.99439, 1535],
            [23.76261, 41.99488, 1530],
            [23.76282, 41.99515, 1531],
            [23.7629, 41.99521, 1531],
            [23.76318, 41.99546, 1532],
            [23.76347, 41.99564, 1532],
            [23.76347, 41.99565, 1531],
            [23.76407, 41.99616, 1528],
            [23.76456, 41.99662, 1536],
            [23.76462, 41.99674, 1538],
            [23.76467, 41.99687, 1539],
            [23.76476, 41.9971, 1539],
            [23.76507, 41.99753, 1537],
            [23.76523, 41.99766, 1537],
            [23.76542, 41.99778, 1538],
            [23.76636, 41.99832, 1531],
            [23.76673, 41.99856, 1525],
            [23.76703, 41.99874, 1519],
            [23.76739, 41.99888, 1517],
            [23.76772, 41.99906, 1518],
            [23.76847, 41.99952, 1513],
            [23.76871, 41.99963, 1511],
            [23.76888, 41.99968, 1510],
            [23.76985, 42.00001, 1510],
            [23.77025, 42.0002, 1508],
            [23.77056, 42.00044, 1506],
            [23.77077, 42.00064, 1505],
            [23.77103, 42.00076, 1501],
            [23.7713, 42.00083, 1497],
            [23.77152, 42.00085, 1496],
            [23.77192, 42.0008, 1498],
            [23.77242, 42.00079, 1499],
            [23.77263, 42.00081, 1499],
            [23.77318, 42.00093, 1496],
            [23.7737, 42.00096, 1495],
            [23.77396, 42.001, 1494],
            [23.77408, 42.00106, 1493],
            [23.77442, 42.00122, 1492],
            [23.77521, 42.00148, 1488],
            [23.77559, 42.00165, 1490],
            [23.77569, 42.00169, 1491],
            [23.77645, 42.00201, 1493],
            [23.77683, 42.00213, 1485],
            [23.7772, 42.00237, 1474],
            [23.77755, 42.00254, 1475],
            [23.77781, 42.00261, 1477],
            [23.77811, 42.00261, 1479],
            [23.77844, 42.00268, 1480],
            [23.77918, 42.00285, 1490],
            [23.78005, 42.003, 1492],
            [23.78139, 42.00301, 1481],
            [23.78161, 42.00309, 1478],
            [23.78174, 42.00318, 1477],
            [23.78187, 42.00346, 1474],
            [23.782, 42.00369, 1473],
            [23.78202, 42.00379, 1472],
            [23.78199, 42.00387, 1473],
            [23.78194, 42.00399, 1472],
            [23.7818, 42.00415, 1470],
            [23.78176, 42.00438, 1466],
            [23.78177, 42.00458, 1465],
            [23.78186, 42.00485, 1464],
            [23.78191, 42.00498, 1465],
            [23.78189, 42.00509, 1465],
            [23.78183, 42.00528, 1465],
            [23.7817, 42.00549, 1463],
            [23.78166, 42.00562, 1461],
            [23.78163, 42.00574, 1459],
            [23.78158, 42.00611, 1455],
            [23.78163, 42.00629, 1453],
            [23.78173, 42.00643, 1452],
            [23.78181, 42.00655, 1451],
            [23.78184, 42.0067, 1449],
            [23.78185, 42.00696, 1450],
            [23.78184, 42.00712, 1451],
            [23.78189, 42.00736, 1452],
            [23.78225, 42.00797, 1451],
            [23.78295, 42.00887, 1446],
            [23.78337, 42.00931, 1444],
            [23.78355, 42.00974, 1442],
            [23.7837, 42.0102, 1443],
            [23.7838, 42.01048, 1445],
            [23.78412, 42.01113, 1454],
            [23.78463, 42.0116, 1458],
            [23.78481, 42.01197, 1459],
            [23.78503, 42.01222, 1460],
            [23.78533, 42.01248, 1458],
            [23.78551, 42.01272, 1457],
            [23.78574, 42.01297, 1454],
            [23.78606, 42.01325, 1449],
            [23.78617, 42.01334, 1448],
            [23.78617, 42.01338, 1448],
            [23.78644, 42.0136, 1447],
            [23.7866, 42.01383, 1445],
            [23.78716, 42.01456, 1447],
            [23.78723, 42.01466, 1446],
            [23.78725, 42.01488, 1445],
            [23.78727, 42.01497, 1444],
            [23.78732, 42.01509, 1444],
            [23.78739, 42.01519, 1444],
            [23.78741, 42.0152, 1444],
            [23.7875, 42.01526, 1444],
            [23.78769, 42.01532, 1442],
            [23.78788, 42.01534, 1440],
            [23.78809, 42.01537, 1438],
            [23.78844, 42.01547, 1437],
            [23.78862, 42.0156, 1437],
            [23.78878, 42.01568, 1439],
            [23.78932, 42.01588, 1444],
            [23.78979, 42.01635, 1446],
            [23.79017, 42.01664, 1445],
            [23.79026, 42.01668, 1445],
            [23.79058, 42.01676, 1447],
            [23.79076, 42.01677, 1447],
            [23.791, 42.01683, 1446],
            [23.79115, 42.01688, 1446],
            [23.79148, 42.01704, 1446],
            [23.79167, 42.01709, 1445],
            [23.79187, 42.01712, 1444],
            [23.79206, 42.01712, 1443],
            [23.79226, 42.01716, 1442],
            [23.79246, 42.0172, 1443],
            [23.79258, 42.0172, 1443],
            [23.79266, 42.01717, 1443],
            [23.79282, 42.01708, 1441],
            [23.79293, 42.01701, 1440],
            [23.79299, 42.017, 1440],
            [23.79321, 42.01697, 1438],
            [23.79337, 42.01703, 1438],
            [23.79354, 42.01705, 1439],
            [23.79392, 42.017, 1438],
            [23.79441, 42.01692, 1436],
            [23.79457, 42.01695, 1435],
            [23.79475, 42.017, 1434],
            [23.79491, 42.01707, 1433],
            [23.79501, 42.01724, 1435],
            [23.79509, 42.01743, 1437],
            [23.79518, 42.01752, 1437],
            [23.79535, 42.01764, 1436],
            [23.79555, 42.01771, 1435],
            [23.79574, 42.01773, 1435],
            [23.79642, 42.01777, 1432],
            [23.7966, 42.01779, 1430],
            [23.79673, 42.01782, 1430],
            [23.79682, 42.01789, 1430],
            [23.7969, 42.01798, 1430],
            [23.79705, 42.01819, 1430],
            [23.79724, 42.01848, 1429],
            [23.79728, 42.01855, 1428],
            [23.79725, 42.01872, 1427],
            [23.79725, 42.01884, 1426],
            [23.79727, 42.01907, 1426],
            [23.79741, 42.01914, 1426],
            [23.79818, 42.01925, 1420],
            [23.79859, 42.01939, 1419],
            [23.79916, 42.01966, 1421],
            [23.79939, 42.0198, 1418],
            [23.79958, 42.01994, 1415],
            [23.7997, 42.02002, 1413],
            [23.79993, 42.02022, 1407],
            [23.80002, 42.0205, 1406],
            [23.80043, 42.02118, 1409],
            [23.8007, 42.0215, 1407],
            [23.80079, 42.02189, 1406],
            [23.80106, 42.0226, 1402],
            [23.80095, 42.02334, 1404],
            [23.8012, 42.02386, 1408],
            [23.80164, 42.0241, 1412],
            [23.80205, 42.02446, 1408],
            [23.80208, 42.02458, 1405],
            [23.80215, 42.02482, 1402],
            [23.8021, 42.02515, 1398],
            [23.80216, 42.02574, 1399],
            [23.80212, 42.02617, 1397],
            [23.80216, 42.02639, 1399],
            [23.80226, 42.0265, 1398],
            [23.80293, 42.02674, 1389],
            [23.80327, 42.02693, 1385],
            [23.80369, 42.02712, 1386],
            [23.80381, 42.02728, 1387],
            [23.80397, 42.0274, 1387],
            [23.80425, 42.02748, 1388],
            [23.80441, 42.02758, 1388],
            [23.8046, 42.02772, 1390],
            [23.80484, 42.02784, 1392],
            [23.80497, 42.02792, 1392],
            [23.80526, 42.02838, 1393],
            [23.8054, 42.02869, 1393],
            [23.80554, 42.02886, 1394],
            [23.80558, 42.02894, 1393],
            [23.80572, 42.02898, 1393],
            [23.80576, 42.029, 1393],
            [23.80587, 42.02905, 1394],
            [23.80606, 42.02917, 1394],
            [23.80621, 42.0293, 1395],
            [23.80649, 42.02963, 1393],
            [23.80689, 42.0299, 1391],
            [23.80709, 42.03, 1391],
            [23.80755, 42.03011, 1390],
            [23.80775, 42.03013, 1392],
            [23.808, 42.0301, 1390],
            [23.80893, 42.0299, 1389],
            [23.80927, 42.02988, 1389],
            [23.8096, 42.02991, 1388],
            [23.81076, 42.03011, 1386],
            [23.81103, 42.0302, 1386],
            [23.81127, 42.03035, 1385],
            [23.81154, 42.03061, 1383],
            [23.81175, 42.03089, 1381],
            [23.81186, 42.03097, 1380],
            [23.81203, 42.03103, 1379],
            [23.8122, 42.03107, 1378],
          ],
        ],
      },
      properties: {
        name: "с. Орцево-с.Аврамово",
        visibility: !0,
        description: "Generated by AllTrails https://www.alltrails.com/",
        extrude: !0,
        tessellate: !0,
      },
    },
  ],
  Bh = { type: L5, features: k5 },
  Fh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Bh, features: k5, type: L5 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  C5 = "/assets/house-485ee57b.png",
  jh = "/assets/hut-06a3b392.png",
  E5 = "/assets/pin-7c4b18d6.png",
  Zh = "_balloon_zzfk3_1",
  ie = { balloon: Zh };
function Uh() {
  const t = new bi.icon({ iconUrl: C5, iconSize: [28, 28] }),
    e = new bi.icon({ iconUrl: jh, iconSize: [28, 28] }),
    i = new bi.icon({ iconUrl: E5, iconSize: [28, 28] });
  return E.jsxs("section", {
    className: "paddingBottom",
    children: [
      E.jsx("h3", { children: "Пешеходни маршрути" }),
      E.jsxs(_5, {
        center: [41.977205, 23.729939],
        zoom: 12,
        scrollWheelZoom: !1,
        className: "map_container",
        children: [
          E.jsx(v5, {
            url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
            maxZoom: 17,
            attribution:
              '© <a href="https://opentopomap.org">OpenTopoMap</a> contributors',
          }),
          E.jsx(Le, {
            position: [41.963205, 23.729939],
            icon: t,
            children: E.jsx(zt, {
              children: E.jsx("span", {
                className: ie.balloon,
                children: "Вила Орцево",
              }),
            }),
          }),
          E.jsx(Le, {
            position: [41.9729, 23.755446],
            icon: e,
            children: E.jsx(zt, {
              children: E.jsx("span", {
                className: ie.balloon,
                children: "Заслон Велийца",
              }),
            }),
          }),
          E.jsx($1, {
            data: Nh,
            style: { color: "red" },
            children: E.jsx(zt, {
              children: E.jsx("span", {
                className: ie.balloon,
                children: "с. Орцево - вр. Бабяшка чука",
              }),
            }),
          }),
          E.jsx(Le, {
            position: [41.963309, 23.673188],
            icon: i,
            children: E.jsx(zt, {
              children: E.jsx("span", {
                className: ie.balloon,
                children: "Вр. Бабяшка Чука",
              }),
            }),
          }),
          E.jsx($1, {
            data: Rh,
            style: { color: "green" },
            children: E.jsx(zt, {
              children: E.jsx("span", {
                className: ie.balloon,
                children: "с. Орцево - с. Златарица",
              }),
            }),
          }),
          E.jsx(Le, {
            position: [41.922077, 23.755452],
            icon: i,
            children: E.jsx(zt, {
              children: E.jsx("span", {
                className: ie.balloon,
                children: "с. Златарица",
              }),
            }),
          }),
          E.jsx($1, {
            data: Dh,
            style: { color: "yellow" },
            children: E.jsx(zt, {
              children: E.jsx("span", {
                className: ie.balloon,
                children: "с. Орцево - с. Черешово - с. Бабяк - с. Орцево",
              }),
            }),
          }),
          E.jsx($1, {
            data: Fh,
            children: E.jsx(zt, {
              children: E.jsx("span", {
                className: ie.balloon,
                children: "с. Орцево - с. Аврамово",
              }),
            }),
          }),
          E.jsx(Le, {
            position: [42.036615, 23.820367],
            icon: i,
            children: E.jsx(zt, {
              children: E.jsx("span", {
                className: ie.balloon,
                children: "ЖП гара Аврамово",
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
function Hh() {
  return E.jsxs("div", {
    children: [
      E.jsx("h3", { children: "Добре дошли във Вила Орцево" }),
      E.jsxs("article", {
        className: "main textBox",
        children: [
          "Вила Орцево разполага с 15 легла разположени в 3 помещения. Ръчно изработена дървена вила с уникална гледка към заобикалящите я Родопи и към Пирин планина! Хубав асфалтиран път води до самата вила. ",
          E.jsx("br", {}),
          " ",
          E.jsx("br", {}),
          "На разположение на гостите е механа с камина, кухненски кът, хладилник, микровълнова фурна, телевизор с плосък екран, сателитна телевизия, интернет и барбекю. Отоплението е на дърва, има и маслен радиатор.",
          " ",
          E.jsx("br", {}),
          " ",
          E.jsx("br", {}),
          " ",
          E.jsx("strong", {
            children: E.jsx("center", {
              children:
                "Времето, прекарано на място с такава гледка, е безценно!",
            }),
          }),
          E.jsx("br", {}),
          E.jsx("center", {
            children: E.jsx("a", {
              href: "#footer",
              className: "contactLink",
              children: "Контакти",
            }),
          }),
        ],
      }),
    ],
  });
}
const Wh = "FeatureCollection",
  bh = [
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [24.74529, 42.1354, 0],
          [24.74515, 42.13538, 0],
          [24.74464, 42.13536, 0],
          [24.74462, 42.13527, 0],
          [24.74645, 42.13548, 0],
          [24.74664, 42.13552, 0],
          [24.75187, 42.13619, 0],
          [24.75286, 42.13623, 0],
          [24.75238, 42.13675, 0],
          [24.75232, 42.13686, 0],
          [24.75223, 42.13712, 0],
          [24.7516, 42.14317, 0],
          [24.75156, 42.14382, 0],
          [24.75156, 42.14465, 0],
          [24.75154, 42.145, 0],
          [24.75155, 42.14509, 0],
          [24.75152, 42.1454, 0],
          [24.75139, 42.14594, 0],
          [24.75133, 42.14611, 0],
          [24.75126, 42.14623, 0],
          [24.7512, 42.14628, 0],
          [24.75102, 42.14695, 0],
          [24.75089, 42.14755, 0],
          [24.75062, 42.14854, 0],
          [24.75061, 42.14867, 0],
          [24.75064, 42.14878, 0],
          [24.75054, 42.14943, 0],
          [24.75051, 42.14978, 0],
          [24.75037, 42.15075, 0],
          [24.75034, 42.15115, 0],
          [24.75038, 42.15159, 0],
          [24.7504, 42.1517, 0],
          [24.75044, 42.15182, 0],
          [24.75049, 42.15244, 0],
          [24.75048, 42.15251, 0],
          [24.75047, 42.15253, 0],
          [24.75045, 42.15262, 0],
          [24.75009, 42.1538, 0],
          [24.7501, 42.1538, 0],
          [24.7501, 42.15381, 0],
          [24.75011, 42.15381, 0],
          [24.75012, 42.15382, 0],
          [24.75012, 42.15383, 0],
          [24.75013, 42.15383, 0],
          [24.75013, 42.15385, 0],
          [24.75014, 42.15385, 0],
          [24.75014, 42.15392, 0],
          [24.75013, 42.15392, 0],
          [24.75013, 42.15394, 0],
          [24.75012, 42.15394, 0],
          [24.75012, 42.15395, 0],
          [24.75011, 42.15395, 0],
          [24.75011, 42.15396, 0],
          [24.7501, 42.15396, 0],
          [24.75009, 42.15397, 0],
          [24.75008, 42.15397, 0],
          [24.75008, 42.15398, 0],
          [24.75006, 42.15398, 0],
          [24.75005, 42.15399, 0],
          [24.75002, 42.15399, 0],
          [24.74952, 42.1557, 0],
          [24.74901, 42.1584, 0],
          [24.74899, 42.1589, 0],
          [24.74895, 42.15904, 0],
          [24.74895, 42.15905, 0],
          [24.74896, 42.15905, 0],
          [24.74896, 42.15906, 0],
          [24.74897, 42.15907, 0],
          [24.74897, 42.15908, 0],
          [24.74898, 42.15909, 0],
          [24.74898, 42.1591, 0],
          [24.749, 42.15912, 0],
          [24.749, 42.1592, 0],
          [24.74897, 42.15926, 0],
          [24.74893, 42.1593, 0],
          [24.74892, 42.1593, 0],
          [24.74892, 42.15931, 0],
          [24.74891, 42.15931, 0],
          [24.7489, 42.15932, 0],
          [24.74889, 42.15932, 0],
          [24.74889, 42.15933, 0],
          [24.74875, 42.15933, 0],
          [24.74863, 42.15929, 0],
          [24.74862, 42.15929, 0],
          [24.74862, 42.15928, 0],
          [24.7486, 42.15928, 0],
          [24.74859, 42.15927, 0],
          [24.74842, 42.15927, 0],
          [24.74789, 42.15921, 0],
          [24.74239, 42.159, 0],
          [24.73905, 42.15915, 0],
          [24.73827, 42.15914, 0],
          [24.73781, 42.15911, 0],
          [24.73093, 42.15809, 0],
          [24.73078, 42.15805, 0],
          [24.72682, 42.15749, 0],
          [24.72376, 42.157, 0],
          [24.72193, 42.15677, 0],
          [24.71418, 42.15605, 0],
          [24.71306, 42.15592, 0],
          [24.713, 42.15592, 0],
          [24.71221, 42.15574, 0],
          [24.71163, 42.15564, 0],
          [24.71142, 42.15557, 0],
          [24.71112, 42.15553, 0],
          [24.71083, 42.15546, 0],
          [24.70928, 42.15522, 0],
          [24.70926, 42.15521, 0],
          [24.70792, 42.155, 0],
          [24.7076, 42.15493, 0],
          [24.69819, 42.1534, 0],
          [24.69756, 42.15334, 0],
          [24.69683, 42.15321, 0],
          [24.69579, 42.15307, 0],
          [24.69335, 42.15295, 0],
          [24.69316, 42.15293, 0],
          [24.69293, 42.15293, 0],
          [24.68353, 42.15247, 0],
          [24.68299, 42.15248, 0],
          [24.68259, 42.15251, 0],
          [24.68097, 42.15272, 0],
          [24.6801, 42.15286, 0],
          [24.67703, 42.15317, 0],
          [24.67683, 42.15324, 0],
          [24.67667, 42.15331, 0],
          [24.67667, 42.15333, 0],
          [24.67665, 42.15335, 0],
          [24.67664, 42.15337, 0],
          [24.67662, 42.15339, 0],
          [24.6766, 42.1534, 0],
          [24.67659, 42.15341, 0],
          [24.67645, 42.15347, 0],
          [24.6764, 42.15348, 0],
          [24.67635, 42.1535, 0],
          [24.6763, 42.15351, 0],
          [24.67624, 42.15351, 0],
          [24.67617, 42.15352, 0],
          [24.67612, 42.15352, 0],
          [24.67599, 42.1535, 0],
          [24.67593, 42.15348, 0],
          [24.67582, 42.15342, 0],
          [24.67573, 42.15335, 0],
          [24.6751, 42.15336, 0],
          [24.67499, 42.15334, 0],
          [24.66766, 42.15429, 0],
          [24.66651, 42.15447, 0],
          [24.66607, 42.1545, 0],
          [24.65955, 42.1547, 0],
          [24.65813, 42.15471, 0],
          [24.64387, 42.15511, 0],
          [24.64315, 42.1551, 0],
          [24.63512, 42.15475, 0],
          [24.6342, 42.15477, 0],
          [24.63335, 42.15486, 0],
          [24.63324, 42.15489, 0],
          [24.63307, 42.1549, 0],
          [24.63216, 42.15503, 0],
          [24.63197, 42.15508, 0],
          [24.63146, 42.15517, 0],
          [24.62914, 42.15549, 0],
          [24.62894, 42.1555, 0],
          [24.62627, 42.15588, 0],
          [24.61341, 42.15645, 0],
          [24.61318, 42.1565, 0],
          [24.60999, 42.15664, 0],
          [24.60976, 42.15662, 0],
          [24.58003, 42.15793, 0],
          [24.57953, 42.15797, 0],
          [24.57933, 42.15796, 0],
          [24.55558, 42.15898, 0],
          [24.55514, 42.15902, 0],
          [24.55512, 42.15903, 0],
          [24.55343, 42.15911, 0],
          [24.55303, 42.15911, 0],
          [24.55302, 42.15912, 0],
          [24.55297, 42.15914, 0],
          [24.55248, 42.15921, 0],
          [24.55246, 42.15923, 0],
          [24.55245, 42.15923, 0],
          [24.55244, 42.15924, 0],
          [24.55242, 42.15925, 0],
          [24.55241, 42.15926, 0],
          [24.55239, 42.15926, 0],
          [24.55237, 42.15927, 0],
          [24.55235, 42.15927, 0],
          [24.55233, 42.15928, 0],
          [24.55224, 42.15928, 0],
          [24.55222, 42.15927, 0],
          [24.5522, 42.15927, 0],
          [24.55218, 42.15926, 0],
          [24.55217, 42.15926, 0],
          [24.55215, 42.15925, 0],
          [24.55214, 42.15924, 0],
          [24.55212, 42.15923, 0],
          [24.5521, 42.15921, 0],
          [24.55186, 42.15919, 0],
          [24.55159, 42.15919, 0],
          [24.55067, 42.15926, 0],
          [24.54869, 42.15957, 0],
          [24.49497, 42.16708, 0],
          [24.49427, 42.1672, 0],
          [24.49392, 42.16729, 0],
          [24.49364, 42.16739, 0],
          [24.47271, 42.17689, 0],
          [24.47237, 42.177, 0],
          [24.472, 42.17709, 0],
          [24.47134, 42.1772, 0],
          [24.45103, 42.17839, 0],
          [24.45022, 42.17848, 0],
          [24.44906, 42.17872, 0],
          [24.43504, 42.18218, 0],
          [24.43462, 42.1823, 0],
          [24.42916, 42.18365, 0],
          [24.42908, 42.18366, 0],
          [24.4274, 42.18407, 0],
          [24.42736, 42.18411, 0],
          [24.42731, 42.18414, 0],
          [24.42635, 42.18438, 0],
          [24.42568, 42.18458, 0],
          [24.42568, 42.18459, 0],
          [24.42566, 42.18461, 0],
          [24.42566, 42.18462, 0],
          [24.42563, 42.18465, 0],
          [24.42561, 42.18466, 0],
          [24.4256, 42.18466, 0],
          [24.42558, 42.18468, 0],
          [24.42557, 42.18468, 0],
          [24.42556, 42.18469, 0],
          [24.42554, 42.18469, 0],
          [24.42552, 42.1847, 0],
          [24.42547, 42.1847, 0],
          [24.42546, 42.18471, 0],
          [24.42544, 42.18471, 0],
          [24.42542, 42.1847, 0],
          [24.42538, 42.1847, 0],
          [24.42536, 42.18469, 0],
          [24.42535, 42.18469, 0],
          [24.42533, 42.18468, 0],
          [24.42522, 42.18466, 0],
          [24.42491, 42.18468, 0],
          [24.42425, 42.18478, 0],
          [24.42376, 42.1848, 0],
          [24.42367, 42.18479, 0],
          [24.39358, 42.18693, 0],
          [24.39355, 42.18694, 0],
          [24.37744, 42.18808, 0],
          [24.37628, 42.18812, 0],
          [24.36318, 42.1874, 0],
          [24.36297, 42.18742, 0],
          [24.35355, 42.18692, 0],
          [24.35308, 42.18693, 0],
          [24.35244, 42.18699, 0],
          [24.35241, 42.187, 0],
          [24.35239, 42.18702, 0],
          [24.35236, 42.18703, 0],
          [24.35233, 42.18705, 0],
          [24.35224, 42.18708, 0],
          [24.3522, 42.18708, 0],
          [24.35215, 42.18709, 0],
          [24.3521, 42.18709, 0],
          [24.35195, 42.18706, 0],
          [24.35182, 42.187, 0],
          [24.35177, 42.18695, 0],
          [24.35177, 42.18694, 0],
          [24.35175, 42.18692, 0],
          [24.35171, 42.18685, 0],
          [24.3517, 42.18682, 0],
          [24.3517, 42.18678, 0],
          [24.35169, 42.18674, 0],
          [24.35172, 42.18663, 0],
          [24.35174, 42.18661, 0],
          [24.35174, 42.1866, 0],
          [24.35175, 42.1866, 0],
          [24.35155, 42.18601, 0],
          [24.35153, 42.18597, 0],
          [24.34687, 42.18169, 0],
          [24.34654, 42.18143, 0],
          [24.34629, 42.18126, 0],
          [24.34594, 42.18106, 0],
          [24.34568, 42.18093, 0],
          [24.34557, 42.18092, 0],
          [24.345, 42.1807, 0],
          [24.34453, 42.18055, 0],
          [24.34429, 42.18049, 0],
          [24.34332, 42.18034, 0],
          [24.34318, 42.18029, 0],
          [24.34222, 42.18029, 0],
          [24.34199, 42.18031, 0],
          [24.34146, 42.18039, 0],
          [24.34101, 42.1805, 0],
          [24.33636, 42.18191, 0],
          [24.33612, 42.18202, 0],
          [24.32931, 42.18415, 0],
          [24.32876, 42.1843, 0],
          [24.32832, 42.18439, 0],
          [24.32786, 42.18446, 0],
          [24.32778, 42.18448, 0],
          [24.32577, 42.18478, 0],
          [24.32529, 42.18487, 0],
          [24.32494, 42.18496, 0],
          [24.32452, 42.18511, 0],
          [24.32421, 42.18524, 0],
          [24.32355, 42.18559, 0],
          [24.32299, 42.18598, 0],
          [24.32299, 42.18599, 0],
          [24.323, 42.18602, 0],
          [24.323, 42.18606, 0],
          [24.32299, 42.18608, 0],
          [24.32299, 42.1861, 0],
          [24.32298, 42.18612, 0],
          [24.32297, 42.18613, 0],
          [24.32296, 42.18615, 0],
          [24.32295, 42.18616, 0],
          [24.32294, 42.18618, 0],
          [24.32292, 42.18619, 0],
          [24.32291, 42.1862, 0],
          [24.32289, 42.18621, 0],
          [24.32288, 42.18622, 0],
          [24.32286, 42.18623, 0],
          [24.32285, 42.18623, 0],
          [24.32284, 42.18624, 0],
          [24.32279, 42.18624, 0],
          [24.32278, 42.18625, 0],
          [24.32261, 42.18625, 0],
          [24.32247, 42.18619, 0],
          [24.32241, 42.18613, 0],
          [24.32241, 42.18611, 0],
          [24.3224, 42.1861, 0],
          [24.3224, 42.18609, 0],
          [24.32239, 42.18607, 0],
          [24.32239, 42.18606, 0],
          [24.32238, 42.18605, 0],
          [24.32238, 42.18599, 0],
          [24.3222, 42.18578, 0],
          [24.32217, 42.18561, 0],
          [24.32198, 42.18544, 0],
          [24.32116, 42.18444, 0],
          [24.32046, 42.18365, 0],
          [24.32005, 42.18335, 0],
          [24.32002, 42.18336, 0],
          [24.31999, 42.18336, 0],
          [24.31996, 42.18335, 0],
          [24.31993, 42.18335, 0],
          [24.31991, 42.18334, 0],
          [24.31988, 42.18334, 0],
          [24.31985, 42.18333, 0],
          [24.31983, 42.18331, 0],
          [24.31982, 42.18331, 0],
          [24.3198, 42.1833, 0],
          [24.31979, 42.18329, 0],
          [24.31978, 42.18329, 0],
          [24.31975, 42.18326, 0],
          [24.31975, 42.18325, 0],
          [24.3188, 42.18329, 0],
          [24.31829, 42.18328, 0],
          [24.31133, 42.18266, 0],
          [24.3105, 42.18265, 0],
          [24.30988, 42.18267, 0],
          [24.30959, 42.18266, 0],
          [24.30946, 42.18264, 0],
          [24.30453, 42.18298, 0],
          [24.30449, 42.18299, 0],
          [24.29856, 42.18345, 0],
          [24.29818, 42.18354, 0],
          [24.29582, 42.18387, 0],
          [24.2957, 42.18386, 0],
          [24.27841, 42.18642, 0],
          [24.27825, 42.18646, 0],
          [24.27579, 42.18683, 0],
          [24.27557, 42.18684, 0],
          [24.26855, 42.18788, 0],
          [24.26851, 42.18788, 0],
          [24.26086, 42.18903, 0],
          [24.2608, 42.18906, 0],
          [24.26076, 42.18907, 0],
          [24.26074, 42.18908, 0],
          [24.2602, 42.18918, 0],
          [24.25967, 42.18924, 0],
          [24.2592, 42.18933, 0],
          [24.25748, 42.18958, 0],
          [24.25731, 42.18957, 0],
          [24.25444, 42.18999, 0],
          [24.2544, 42.18999, 0],
          [24.25251, 42.19024, 0],
          [24.25182, 42.19029, 0],
          [24.25172, 42.19033, 0],
          [24.25038, 42.19049, 0],
          [24.25008, 42.19051, 0],
          [24.24971, 42.19056, 0],
          [24.24908, 42.19057, 0],
          [24.24853, 42.19063, 0],
          [24.24835, 42.19063, 0],
          [24.24827, 42.19064, 0],
          [24.2473, 42.19059, 0],
          [24.24347, 42.19021, 0],
          [24.24004, 42.18999, 0],
          [24.23648, 42.18984, 0],
          [24.23575, 42.18977, 0],
          [24.23567, 42.18977, 0],
          [24.23335, 42.18944, 0],
          [24.23099, 42.1893, 0],
          [24.2299, 42.18928, 0],
          [24.22723, 42.1894, 0],
          [24.21901, 42.18907, 0],
          [24.21819, 42.18906, 0],
          [24.21645, 42.18898, 0],
          [24.21628, 42.18895, 0],
          [24.18737, 42.18787, 0],
          [24.18728, 42.18785, 0],
          [24.18717, 42.18784, 0],
          [24.18684, 42.18777, 0],
          [24.18682, 42.18777, 0],
          [24.18253, 42.18685, 0],
          [24.18239, 42.18681, 0],
          [24.18138, 42.18662, 0],
          [24.18126, 42.18661, 0],
          [24.17439, 42.18759, 0],
          [24.17414, 42.18764, 0],
          [24.16955, 42.18831, 0],
          [24.16808, 42.18862, 0],
          [24.16449, 42.18915, 0],
          [24.14391, 42.19061, 0],
          [24.14355, 42.19065, 0],
          [24.13461, 42.19119, 0],
          [24.13433, 42.19125, 0],
          [24.13336, 42.19133, 0],
          [24.13336, 42.19134, 0],
          [24.13335, 42.19136, 0],
          [24.13335, 42.19137, 0],
          [24.1333, 42.19142, 0],
          [24.13329, 42.19142, 0],
          [24.13328, 42.19143, 0],
          [24.13327, 42.19143, 0],
          [24.13326, 42.19144, 0],
          [24.13325, 42.19144, 0],
          [24.13323, 42.19145, 0],
          [24.13321, 42.19145, 0],
          [24.1332, 42.19146, 0],
          [24.13308, 42.19146, 0],
          [24.13307, 42.19145, 0],
          [24.13305, 42.19145, 0],
          [24.13304, 42.19144, 0],
          [24.13302, 42.19144, 0],
          [24.133, 42.19142, 0],
          [24.13298, 42.19141, 0],
          [24.13294, 42.19137, 0],
          [24.13294, 42.19136, 0],
          [24.13205, 42.19147, 0],
          [24.11054, 42.19342, 0],
          [24.11046, 42.19342, 0],
          [24.1074, 42.19373, 0],
          [24.10665, 42.19383, 0],
          [24.10558, 42.19402, 0],
          [24.10445, 42.19429, 0],
          [24.07486, 42.20254, 0],
          [24.07485, 42.20255, 0],
          [24.06936, 42.20407, 0],
          [24.0684, 42.2043, 0],
          [24.06838, 42.2043, 0],
          [24.06794, 42.2044, 0],
          [24.06711, 42.20455, 0],
          [24.06318, 42.2051, 0],
          [24.06151, 42.20526, 0],
          [24.0595, 42.20552, 0],
          [24.05795, 42.20577, 0],
          [24.05698, 42.20599, 0],
          [24.05519, 42.20648, 0],
          [24.05516, 42.20648, 0],
          [24.05459, 42.20663, 0],
          [24.0543, 42.20669, 0],
          [24.05352, 42.20678, 0],
          [24.05061, 42.20694, 0],
          [24.04988, 42.20703, 0],
          [24.04859, 42.20734, 0],
          [24.04552, 42.20816, 0],
          [24.04524, 42.20822, 0],
          [24.04423, 42.2085, 0],
          [24.04421, 42.2085, 0],
          [24.04262, 42.20885, 0],
          [24.0426, 42.20885, 0],
          [24.04194, 42.20896, 0],
          [24.04114, 42.20913, 0],
          [24.03962, 42.20952, 0],
          [24.03931, 42.20958, 0],
          [24.03834, 42.20971, 0],
          [24.03801, 42.20973, 0],
          [24.03363, 42.20962, 0],
          [24.02965, 42.2099, 0],
          [24.02923, 42.20996, 0],
          [24.02875, 42.21009, 0],
          [24.02611, 42.211, 0],
          [24.02591, 42.2111, 0],
          [24.02556, 42.21132, 0],
          [24.02515, 42.21164, 0],
          [24.02467, 42.21208, 0],
          [24.02459, 42.21222, 0],
          [24.02457, 42.21223, 0],
          [24.0241, 42.21274, 0],
          [24.02348, 42.21332, 0],
          [24.02272, 42.21391, 0],
          [24.02263, 42.21395, 0],
          [24.02226, 42.21425, 0],
          [24.02187, 42.21452, 0],
          [24.02146, 42.21468, 0],
          [24.02102, 42.21477, 0],
          [24.02076, 42.2148, 0],
          [24.02047, 42.21481, 0],
          [24.02041, 42.21482, 0],
          [24.01801, 42.21476, 0],
          [24.01799, 42.21463, 0],
          [24.0179, 42.21452, 0],
          [24.01767, 42.21431, 0],
          [24.01747, 42.2141, 0],
          [24.01734, 42.214, 0],
          [24.01724, 42.21394, 0],
          [24.01598, 42.21345, 0],
          [24.01578, 42.21334, 0],
          [24.01562, 42.21318, 0],
          [24.01495, 42.21238, 0],
          [24.01482, 42.21226, 0],
          [24.01421, 42.21191, 0],
          [24.01389, 42.2117, 0],
          [24.01342, 42.21143, 0],
          [24.01275, 42.21109, 0],
          [24.01236, 42.21093, 0],
          [24.01171, 42.21073, 0],
          [24.01145, 42.21063, 0],
          [24.01098, 42.2105, 0],
          [24.01013, 42.21033, 0],
          [24.00993, 42.21024, 0],
          [24.00975, 42.21014, 0],
          [24.00944, 42.20992, 0],
          [24.00913, 42.20975, 0],
          [24.00892, 42.20969, 0],
          [24.00791, 42.20964, 0],
          [24.00763, 42.20961, 0],
          [24.00737, 42.20954, 0],
          [24.00733, 42.20952, 0],
          [24.00642, 42.20921, 0],
          [24.00638, 42.20919, 0],
          [24.00582, 42.209, 0],
          [24.0056, 42.20886, 0],
          [24.00544, 42.20871, 0],
          [24.00491, 42.2084, 0],
          [24.00473, 42.20833, 0],
          [24.00356, 42.20809, 0],
          [24.00333, 42.20799, 0],
          [24.00306, 42.20784, 0],
          [24.00305, 42.20783, 0],
          [24.00264, 42.20757, 0],
          [24.00223, 42.20735, 0],
          [24.00084, 42.20686, 0],
          [24.00055, 42.20669, 0],
          [24.00039, 42.20661, 0],
          [23.99999, 42.20636, 0],
          [23.99996, 42.20635, 0],
          [23.99956, 42.20607, 0],
          [23.99915, 42.20582, 0],
          [23.99828, 42.20524, 0],
          [23.99763, 42.20477, 0],
          [23.99749, 42.20462, 0],
          [23.99731, 42.20439, 0],
          [23.99704, 42.20383, 0],
          [23.99681, 42.20347, 0],
          [23.99611, 42.20256, 0],
          [23.99575, 42.202, 0],
          [23.99558, 42.20162, 0],
          [23.99554, 42.20155, 0],
          [23.99552, 42.2015, 0],
          [23.99546, 42.20142, 0],
          [23.99466, 42.20086, 0],
          [23.994, 42.20021, 0],
          [23.994, 42.2002, 0],
          [23.99388, 42.20007, 0],
          [23.99387, 42.20005, 0],
          [23.99379, 42.19995, 0],
          [23.99372, 42.19981, 0],
          [23.99367, 42.19956, 0],
          [23.99366, 42.19941, 0],
          [23.99371, 42.19897, 0],
          [23.9937, 42.19873, 0],
          [23.99364, 42.19852, 0],
          [23.99349, 42.19822, 0],
          [23.99335, 42.19799, 0],
          [23.99317, 42.19764, 0],
          [23.99313, 42.19751, 0],
          [23.9931, 42.19723, 0],
          [23.993, 42.19682, 0],
          [23.99295, 42.19673, 0],
          [23.99287, 42.19662, 0],
          [23.99285, 42.19661, 0],
          [23.99237, 42.1962, 0],
          [23.99143, 42.19553, 0],
          [23.99132, 42.19543, 0],
          [23.99047, 42.19447, 0],
          [23.99037, 42.19441, 0],
          [23.98974, 42.19412, 0],
          [23.98963, 42.194, 0],
          [23.98903, 42.19308, 0],
          [23.98883, 42.19288, 0],
          [23.98836, 42.19246, 0],
          [23.98808, 42.1921, 0],
          [23.98801, 42.19205, 0],
          [23.98799, 42.19205, 0],
          [23.98792, 42.19203, 0],
          [23.98771, 42.192, 0],
          [23.98766, 42.19198, 0],
          [23.98752, 42.19188, 0],
          [23.98706, 42.19146, 0],
          [23.98556, 42.19045, 0],
          [23.98522, 42.19019, 0],
          [23.98514, 42.19011, 0],
          [23.9851, 42.19003, 0],
          [23.98508, 42.19001, 0],
          [23.98506, 42.18993, 0],
          [23.98505, 42.18977, 0],
          [23.98507, 42.18954, 0],
          [23.98523, 42.18874, 0],
          [23.98536, 42.18821, 0],
          [23.9855, 42.18652, 0],
          [23.9855, 42.18639, 0],
          [23.98549, 42.18638, 0],
          [23.98548, 42.18624, 0],
          [23.98545, 42.18617, 0],
          [23.98516, 42.18565, 0],
          [23.98504, 42.18537, 0],
          [23.98501, 42.18527, 0],
          [23.98487, 42.1844, 0],
          [23.98461, 42.18367, 0],
          [23.98461, 42.18362, 0],
          [23.9846, 42.18356, 0],
          [23.98461, 42.18336, 0],
          [23.98472, 42.18289, 0],
          [23.98473, 42.18276, 0],
          [23.98471, 42.18268, 0],
          [23.98468, 42.18261, 0],
          [23.98464, 42.18256, 0],
          [23.98463, 42.18256, 0],
          [23.98412, 42.18206, 0],
          [23.98407, 42.18197, 0],
          [23.98404, 42.18186, 0],
          [23.98404, 42.18174, 0],
          [23.98416, 42.18119, 0],
          [23.98416, 42.18102, 0],
          [23.98413, 42.18096, 0],
          [23.98409, 42.1809, 0],
          [23.98333, 42.18013, 0],
          [23.9829, 42.17959, 0],
          [23.98284, 42.17948, 0],
          [23.98258, 42.17887, 0],
          [23.98226, 42.17844, 0],
          [23.9822, 42.17833, 0],
          [23.98218, 42.17825, 0],
          [23.98218, 42.17818, 0],
          [23.98223, 42.17806, 0],
          [23.98223, 42.17805, 0],
          [23.98284, 42.17705, 0],
          [23.9829, 42.17691, 0],
          [23.98292, 42.17682, 0],
          [23.98293, 42.17672, 0],
          [23.98287, 42.17634, 0],
          [23.98282, 42.17623, 0],
          [23.98275, 42.17616, 0],
          [23.98265, 42.1761, 0],
          [23.98255, 42.17606, 0],
          [23.98246, 42.17604, 0],
          [23.98199, 42.17603, 0],
          [23.98183, 42.17601, 0],
          [23.98168, 42.17596, 0],
          [23.98155, 42.17585, 0],
          [23.98149, 42.17576, 0],
          [23.98142, 42.17547, 0],
          [23.98141, 42.1754, 0],
          [23.98142, 42.17494, 0],
          [23.98139, 42.17484, 0],
          [23.98135, 42.17478, 0],
          [23.98128, 42.17471, 0],
          [23.98105, 42.17463, 0],
          [23.98086, 42.17462, 0],
          [23.98046, 42.17465, 0],
          [23.98043, 42.17464, 0],
          [23.9803, 42.17464, 0],
          [23.98017, 42.17462, 0],
          [23.98005, 42.17459, 0],
          [23.97989, 42.17449, 0],
          [23.97984, 42.17441, 0],
          [23.97983, 42.17434, 0],
          [23.98006, 42.1728, 0],
          [23.98003, 42.17248, 0],
          [23.98001, 42.17241, 0],
          [23.97994, 42.17232, 0],
          [23.97985, 42.17225, 0],
          [23.97876, 42.17163, 0],
          [23.97875, 42.17163, 0],
          [23.97845, 42.17143, 0],
          [23.97841, 42.17141, 0],
          [23.97771, 42.17087, 0],
          [23.97748, 42.17066, 0],
          [23.97736, 42.17053, 0],
          [23.97716, 42.17028, 0],
          [23.97703, 42.17015, 0],
          [23.97693, 42.17007, 0],
          [23.97683, 42.17002, 0],
          [23.97651, 42.16982, 0],
          [23.9763, 42.16964, 0],
          [23.97628, 42.16957, 0],
          [23.97629, 42.16948, 0],
          [23.97647, 42.1689, 0],
          [23.97648, 42.16881, 0],
          [23.97647, 42.16877, 0],
          [23.97647, 42.16872, 0],
          [23.97643, 42.16865, 0],
          [23.97622, 42.16835, 0],
          [23.9761, 42.16813, 0],
          [23.9761, 42.16811, 0],
          [23.97584, 42.16752, 0],
          [23.97584, 42.1674, 0],
          [23.97586, 42.16724, 0],
          [23.97593, 42.16701, 0],
          [23.97598, 42.1669, 0],
          [23.97599, 42.16665, 0],
          [23.97596, 42.16654, 0],
          [23.9758, 42.16637, 0],
          [23.97569, 42.16628, 0],
          [23.97559, 42.16623, 0],
          [23.97546, 42.16619, 0],
          [23.97542, 42.16619, 0],
          [23.97458, 42.16607, 0],
          [23.9745, 42.16605, 0],
          [23.97441, 42.16601, 0],
          [23.97433, 42.16596, 0],
          [23.9742, 42.16578, 0],
          [23.97415, 42.16568, 0],
          [23.9741, 42.16544, 0],
          [23.97406, 42.16533, 0],
          [23.97396, 42.16525, 0],
          [23.97385, 42.16519, 0],
          [23.9737, 42.16515, 0],
          [23.97304, 42.16509, 0],
          [23.97273, 42.16501, 0],
          [23.97252, 42.16492, 0],
          [23.97192, 42.1645, 0],
          [23.97146, 42.16429, 0],
          [23.97127, 42.16424, 0],
          [23.97075, 42.1642, 0],
          [23.97064, 42.16418, 0],
          [23.97052, 42.16414, 0],
          [23.96971, 42.1636, 0],
          [23.96968, 42.16354, 0],
          [23.96971, 42.16341, 0],
          [23.96976, 42.16332, 0],
          [23.96999, 42.16312, 0],
          [23.97025, 42.16295, 0],
          [23.97032, 42.16289, 0],
          [23.97037, 42.1628, 0],
          [23.97037, 42.16279, 0],
          [23.97039, 42.16273, 0],
          [23.9704, 42.16265, 0],
          [23.9704, 42.16254, 0],
          [23.97032, 42.16178, 0],
          [23.97031, 42.16101, 0],
          [23.97041, 42.16039, 0],
          [23.97041, 42.16022, 0],
          [23.97033, 42.15997, 0],
          [23.97006, 42.15953, 0],
          [23.96982, 42.15924, 0],
          [23.96976, 42.15914, 0],
          [23.96976, 42.15912, 0],
          [23.96972, 42.15901, 0],
          [23.96971, 42.15886, 0],
          [23.96973, 42.15848, 0],
          [23.96972, 42.15842, 0],
          [23.96972, 42.15838, 0],
          [23.96966, 42.1583, 0],
          [23.96962, 42.15826, 0],
          [23.96961, 42.15824, 0],
          [23.9694, 42.15806, 0],
          [23.9693, 42.15796, 0],
          [23.96924, 42.15786, 0],
          [23.96917, 42.15768, 0],
          [23.96905, 42.15716, 0],
          [23.96903, 42.15711, 0],
          [23.969, 42.15698, 0],
          [23.96901, 42.15676, 0],
          [23.96907, 42.15666, 0],
          [23.96929, 42.15648, 0],
          [23.96985, 42.15615, 0],
          [23.96994, 42.15608, 0],
          [23.96999, 42.15602, 0],
          [23.97007, 42.15587, 0],
          [23.97035, 42.1549, 0],
          [23.97037, 42.15479, 0],
          [23.97037, 42.1547, 0],
          [23.97034, 42.15462, 0],
          [23.97004, 42.15405, 0],
          [23.97002, 42.15391, 0],
          [23.97002, 42.15372, 0],
          [23.97005, 42.15346, 0],
          [23.97019, 42.15311, 0],
          [23.97046, 42.15268, 0],
          [23.97048, 42.15261, 0],
          [23.97048, 42.15219, 0],
          [23.97046, 42.15212, 0],
          [23.97029, 42.15176, 0],
          [23.97025, 42.15165, 0],
          [23.97024, 42.15144, 0],
          [23.97026, 42.15114, 0],
          [23.97025, 42.151, 0],
          [23.97021, 42.15092, 0],
          [23.96994, 42.15051, 0],
          [23.96992, 42.15045, 0],
          [23.9699, 42.15022, 0],
          [23.97009, 42.14941, 0],
          [23.97009, 42.14931, 0],
          [23.97008, 42.14924, 0],
          [23.96997, 42.14904, 0],
          [23.96996, 42.14901, 0],
          [23.96992, 42.14897, 0],
          [23.96974, 42.14871, 0],
          [23.96966, 42.14853, 0],
          [23.96963, 42.14841, 0],
          [23.96961, 42.14828, 0],
          [23.96962, 42.14816, 0],
          [23.96986, 42.14749, 0],
          [23.96986, 42.14742, 0],
          [23.96985, 42.14741, 0],
          [23.96985, 42.1474, 0],
          [23.96983, 42.14737, 0],
          [23.96964, 42.14724, 0],
          [23.96959, 42.14722, 0],
          [23.96937, 42.14716, 0],
          [23.96893, 42.147, 0],
          [23.96874, 42.14691, 0],
          [23.96873, 42.1469, 0],
          [23.96852, 42.14677, 0],
          [23.96829, 42.14656, 0],
          [23.96821, 42.14652, 0],
          [23.96809, 42.1465, 0],
          [23.96793, 42.14649, 0],
          [23.9674, 42.14653, 0],
          [23.96708, 42.14648, 0],
          [23.96702, 42.14646, 0],
          [23.96688, 42.14637, 0],
          [23.96679, 42.14625, 0],
          [23.96651, 42.14572, 0],
          [23.96642, 42.14561, 0],
          [23.96634, 42.14556, 0],
          [23.96621, 42.14554, 0],
          [23.96606, 42.14554, 0],
          [23.96584, 42.14559, 0],
          [23.9657, 42.1456, 0],
          [23.96559, 42.14559, 0],
          [23.96558, 42.14558, 0],
          [23.96545, 42.14555, 0],
          [23.96524, 42.14538, 0],
          [23.96504, 42.14514, 0],
          [23.96495, 42.14507, 0],
          [23.96495, 42.14506, 0],
          [23.96474, 42.14498, 0],
          [23.96472, 42.14498, 0],
          [23.96411, 42.14479, 0],
          [23.96407, 42.14477, 0],
          [23.96388, 42.14471, 0],
          [23.96384, 42.14471, 0],
          [23.9637, 42.14467, 0],
          [23.96313, 42.14461, 0],
          [23.9631, 42.1446, 0],
          [23.96283, 42.1446, 0],
          [23.96232, 42.14463, 0],
          [23.96189, 42.14463, 0],
          [23.9617, 42.14461, 0],
          [23.96168, 42.1446, 0],
          [23.96105, 42.14443, 0],
          [23.96092, 42.14441, 0],
          [23.96076, 42.1444, 0],
          [23.96038, 42.14441, 0],
          [23.96023, 42.14438, 0],
          [23.9601, 42.14432, 0],
          [23.95964, 42.14398, 0],
          [23.95913, 42.14373, 0],
          [23.95912, 42.14373, 0],
          [23.95881, 42.14363, 0],
          [23.95869, 42.14362, 0],
          [23.95855, 42.14363, 0],
          [23.95809, 42.14376, 0],
          [23.95798, 42.14377, 0],
          [23.95791, 42.14379, 0],
          [23.9576, 42.1438, 0],
          [23.95721, 42.14376, 0],
          [23.95629, 42.14356, 0],
          [23.95552, 42.14331, 0],
          [23.95531, 42.14327, 0],
          [23.95448, 42.14317, 0],
          [23.95354, 42.14311, 0],
          [23.95206, 42.14322, 0],
          [23.95173, 42.14321, 0],
          [23.95138, 42.1431, 0],
          [23.95137, 42.14309, 0],
          [23.94973, 42.14232, 0],
          [23.9497, 42.14232, 0],
          [23.94959, 42.14227, 0],
          [23.9495, 42.14226, 0],
          [23.94948, 42.14225, 0],
          [23.94919, 42.14221, 0],
          [23.94851, 42.1422, 0],
          [23.94804, 42.14209, 0],
          [23.94736, 42.14175, 0],
          [23.94693, 42.14149, 0],
          [23.94648, 42.14133, 0],
          [23.94594, 42.14119, 0],
          [23.9449, 42.14097, 0],
          [23.94452, 42.14087, 0],
          [23.94405, 42.14072, 0],
          [23.94182, 42.13979, 0],
          [23.94153, 42.13969, 0],
          [23.9406, 42.13948, 0],
          [23.93938, 42.13913, 0],
          [23.93864, 42.13901, 0],
          [23.93844, 42.13896, 0],
          [23.93838, 42.13893, 0],
          [23.93648, 42.13822, 0],
          [23.9361, 42.13812, 0],
          [23.93572, 42.13796, 0],
          [23.93542, 42.1378, 0],
          [23.93527, 42.13765, 0],
          [23.93487, 42.13714, 0],
          [23.93478, 42.13707, 0],
          [23.93471, 42.13703, 0],
          [23.93446, 42.13692, 0],
          [23.93406, 42.13685, 0],
          [23.93368, 42.13676, 0],
          [23.93336, 42.13665, 0],
          [23.93335, 42.13665, 0],
          [23.93325, 42.13658, 0],
          [23.93316, 42.1365, 0],
          [23.9331, 42.13641, 0],
          [23.93305, 42.13629, 0],
          [23.93305, 42.13617, 0],
          [23.93306, 42.13608, 0],
          [23.93312, 42.13595, 0],
          [23.9335, 42.13536, 0],
          [23.93373, 42.13495, 0],
          [23.93377, 42.13483, 0],
          [23.93379, 42.13472, 0],
          [23.93379, 42.13459, 0],
          [23.93373, 42.13422, 0],
          [23.9334, 42.13303, 0],
          [23.9333, 42.13285, 0],
          [23.93329, 42.13276, 0],
          [23.93328, 42.13274, 0],
          [23.93329, 42.13256, 0],
          [23.93333, 42.13244, 0],
          [23.93348, 42.13222, 0],
          [23.93352, 42.13218, 0],
          [23.93357, 42.1321, 0],
          [23.93366, 42.13191, 0],
          [23.93372, 42.13168, 0],
          [23.93373, 42.13159, 0],
          [23.93371, 42.13149, 0],
          [23.93371, 42.13144, 0],
          [23.93368, 42.13137, 0],
          [23.93359, 42.13122, 0],
          [23.93343, 42.13106, 0],
          [23.93335, 42.13102, 0],
          [23.93327, 42.13101, 0],
          [23.93311, 42.13101, 0],
          [23.93306, 42.13102, 0],
          [23.93298, 42.13106, 0],
          [23.93265, 42.1313, 0],
          [23.93261, 42.13132, 0],
          [23.93249, 42.13135, 0],
          [23.9324, 42.13135, 0],
          [23.93237, 42.13134, 0],
          [23.93229, 42.13129, 0],
          [23.932, 42.13102, 0],
          [23.93196, 42.131, 0],
          [23.93192, 42.13096, 0],
          [23.93182, 42.13092, 0],
          [23.93178, 42.13091, 0],
          [23.93115, 42.13088, 0],
          [23.93106, 42.13086, 0],
          [23.93094, 42.13082, 0],
          [23.93086, 42.13078, 0],
          [23.93064, 42.13063, 0],
          [23.93055, 42.13052, 0],
          [23.93046, 42.13036, 0],
          [23.93039, 42.13017, 0],
          [23.93035, 42.13001, 0],
          [23.93032, 42.12982, 0],
          [23.93032, 42.12977, 0],
          [23.93027, 42.12958, 0],
          [23.93019, 42.12945, 0],
          [23.93005, 42.12933, 0],
          [23.92996, 42.12929, 0],
          [23.92988, 42.12927, 0],
          [23.92973, 42.12926, 0],
          [23.92948, 42.12928, 0],
          [23.92917, 42.12934, 0],
          [23.92909, 42.12934, 0],
          [23.92901, 42.12933, 0],
          [23.92888, 42.1293, 0],
          [23.92874, 42.12921, 0],
          [23.92868, 42.1291, 0],
          [23.92866, 42.12903, 0],
          [23.92866, 42.12882, 0],
          [23.92868, 42.12872, 0],
          [23.92875, 42.12858, 0],
          [23.92893, 42.12832, 0],
          [23.92904, 42.1281, 0],
          [23.92912, 42.12755, 0],
          [23.92911, 42.12744, 0],
          [23.92908, 42.12735, 0],
          [23.92902, 42.12728, 0],
          [23.92896, 42.12724, 0],
          [23.92881, 42.1272, 0],
          [23.92876, 42.1272, 0],
          [23.92864, 42.12722, 0],
          [23.92857, 42.12724, 0],
          [23.92856, 42.12724, 0],
          [23.92825, 42.12735, 0],
          [23.92805, 42.12737, 0],
          [23.92794, 42.12737, 0],
          [23.92777, 42.12733, 0],
          [23.92759, 42.12724, 0],
          [23.92703, 42.12688, 0],
          [23.92699, 42.12684, 0],
          [23.92697, 42.12683, 0],
          [23.92695, 42.12679, 0],
          [23.92692, 42.12675, 0],
          [23.9269, 42.12667, 0],
          [23.9269, 42.12664, 0],
          [23.92691, 42.12659, 0],
          [23.92701, 42.12643, 0],
          [23.92711, 42.12631, 0],
          [23.92727, 42.12617, 0],
          [23.9279, 42.12568, 0],
          [23.92804, 42.12544, 0],
          [23.92804, 42.12535, 0],
          [23.92803, 42.12528, 0],
          [23.92796, 42.12512, 0],
          [23.92795, 42.12512, 0],
          [23.92788, 42.12505, 0],
          [23.92785, 42.12503, 0],
          [23.92784, 42.12503, 0],
          [23.92777, 42.12498, 0],
          [23.9275, 42.1249, 0],
          [23.92667, 42.1247, 0],
          [23.92587, 42.12447, 0],
          [23.92582, 42.12445, 0],
          [23.92565, 42.12441, 0],
          [23.92553, 42.12435, 0],
          [23.92541, 42.12427, 0],
          [23.92532, 42.12418, 0],
          [23.92522, 42.12405, 0],
          [23.92515, 42.12393, 0],
          [23.92512, 42.12384, 0],
          [23.92511, 42.12375, 0],
          [23.92513, 42.12359, 0],
          [23.92519, 42.12337, 0],
          [23.92526, 42.12291, 0],
          [23.92521, 42.12269, 0],
          [23.92482, 42.12206, 0],
          [23.92481, 42.12205, 0],
          [23.92448, 42.12139, 0],
          [23.92439, 42.12126, 0],
          [23.92424, 42.12111, 0],
          [23.92314, 42.12015, 0],
          [23.923, 42.11999, 0],
          [23.92299, 42.11997, 0],
          [23.92292, 42.11989, 0],
          [23.92289, 42.11982, 0],
          [23.92287, 42.11975, 0],
          [23.92286, 42.11967, 0],
          [23.92289, 42.11957, 0],
          [23.92311, 42.11912, 0],
          [23.92317, 42.11895, 0],
          [23.92317, 42.11886, 0],
          [23.92314, 42.11876, 0],
          [23.92311, 42.11872, 0],
          [23.92305, 42.11868, 0],
          [23.92298, 42.11865, 0],
          [23.92284, 42.11863, 0],
          [23.92276, 42.11863, 0],
          [23.92229, 42.11872, 0],
          [23.92206, 42.11875, 0],
          [23.922, 42.11875, 0],
          [23.92197, 42.11874, 0],
          [23.92191, 42.11874, 0],
          [23.92178, 42.11868, 0],
          [23.92175, 42.11865, 0],
          [23.92173, 42.11864, 0],
          [23.92166, 42.11851, 0],
          [23.92164, 42.11844, 0],
          [23.92163, 42.11837, 0],
          [23.9217, 42.11798, 0],
          [23.92169, 42.11786, 0],
          [23.92166, 42.11778, 0],
          [23.92166, 42.11777, 0],
          [23.92162, 42.11774, 0],
          [23.92158, 42.1177, 0],
          [23.92151, 42.11767, 0],
          [23.92135, 42.11765, 0],
          [23.92122, 42.11767, 0],
          [23.92113, 42.1177, 0],
          [23.92067, 42.11799, 0],
          [23.92061, 42.11801, 0],
          [23.92053, 42.11802, 0],
          [23.92036, 42.11802, 0],
          [23.92029, 42.11801, 0],
          [23.92022, 42.11799, 0],
          [23.91984, 42.11784, 0],
          [23.91982, 42.11782, 0],
          [23.91973, 42.11776, 0],
          [23.91966, 42.11767, 0],
          [23.91962, 42.11759, 0],
          [23.91962, 42.11735, 0],
          [23.9197, 42.11699, 0],
          [23.9197, 42.11687, 0],
          [23.91964, 42.1167, 0],
          [23.91948, 42.11653, 0],
          [23.91935, 42.11646, 0],
          [23.9192, 42.11641, 0],
          [23.91899, 42.11637, 0],
          [23.91881, 42.11635, 0],
          [23.91852, 42.11635, 0],
          [23.91833, 42.11637, 0],
          [23.91813, 42.11637, 0],
          [23.91791, 42.11634, 0],
          [23.9178, 42.1163, 0],
          [23.91755, 42.11615, 0],
          [23.91693, 42.11569, 0],
          [23.91688, 42.11564, 0],
          [23.9161, 42.11506, 0],
          [23.916, 42.11503, 0],
          [23.91593, 42.11502, 0],
          [23.91565, 42.11506, 0],
          [23.91561, 42.11508, 0],
          [23.91553, 42.1151, 0],
          [23.91489, 42.11534, 0],
          [23.9147, 42.11537, 0],
          [23.91459, 42.11536, 0],
          [23.91439, 42.11528, 0],
          [23.91427, 42.1152, 0],
          [23.91425, 42.11517, 0],
          [23.91403, 42.11492, 0],
          [23.914, 42.1149, 0],
          [23.91398, 42.11487, 0],
          [23.91378, 42.11469, 0],
          [23.91371, 42.11464, 0],
          [23.91362, 42.1146, 0],
          [23.91352, 42.11457, 0],
          [23.9134, 42.11455, 0],
          [23.91332, 42.11455, 0],
          [23.91304, 42.11462, 0],
          [23.91297, 42.11465, 0],
          [23.91296, 42.11465, 0],
          [23.91254, 42.11481, 0],
          [23.91253, 42.11481, 0],
          [23.91238, 42.11485, 0],
          [23.91221, 42.11487, 0],
          [23.91201, 42.11487, 0],
          [23.91153, 42.11481, 0],
          [23.9114, 42.11477, 0],
          [23.91136, 42.11474, 0],
          [23.91128, 42.1147, 0],
          [23.9112, 42.11462, 0],
          [23.91117, 42.11456, 0],
          [23.91107, 42.11424, 0],
          [23.91102, 42.11414, 0],
          [23.91098, 42.1141, 0],
          [23.9109, 42.11406, 0],
          [23.91076, 42.11404, 0],
          [23.91064, 42.11404, 0],
          [23.91051, 42.11406, 0],
          [23.90969, 42.1143, 0],
          [23.90967, 42.11431, 0],
          [23.90946, 42.11437, 0],
          [23.90871, 42.11436, 0],
          [23.9086, 42.11435, 0],
          [23.9085, 42.11433, 0],
          [23.90836, 42.11427, 0],
          [23.90831, 42.11424, 0],
          [23.9083, 42.11423, 0],
          [23.90829, 42.11421, 0],
          [23.90826, 42.11418, 0],
          [23.90822, 42.11412, 0],
          [23.90818, 42.11399, 0],
          [23.90818, 42.11392, 0],
          [23.90821, 42.11385, 0],
          [23.90823, 42.11377, 0],
          [23.90838, 42.11363, 0],
          [23.90852, 42.11353, 0],
          [23.9088, 42.11328, 0],
          [23.90903, 42.11303, 0],
          [23.90903, 42.11302, 0],
          [23.90912, 42.11286, 0],
          [23.90915, 42.11277, 0],
          [23.90914, 42.11254, 0],
          [23.90915, 42.11225, 0],
          [23.90917, 42.11217, 0],
          [23.90936, 42.11177, 0],
          [23.90935, 42.11171, 0],
          [23.90933, 42.11165, 0],
          [23.90931, 42.11163, 0],
          [23.9093, 42.11161, 0],
          [23.90925, 42.11158, 0],
          [23.90917, 42.11155, 0],
          [23.90907, 42.11153, 0],
          [23.90854, 42.11151, 0],
          [23.90821, 42.11145, 0],
          [23.90807, 42.11141, 0],
          [23.9073, 42.11103, 0],
          [23.90716, 42.11094, 0],
          [23.90713, 42.1109, 0],
          [23.90709, 42.11081, 0],
          [23.90709, 42.11073, 0],
          [23.90706, 42.11058, 0],
          [23.90706, 42.11055, 0],
          [23.90701, 42.11041, 0],
          [23.90701, 42.11039, 0],
          [23.90696, 42.1103, 0],
          [23.90687, 42.11021, 0],
          [23.90627, 42.1098, 0],
          [23.90602, 42.10969, 0],
          [23.9059, 42.10966, 0],
          [23.90499, 42.10961, 0],
          [23.90472, 42.10958, 0],
          [23.90462, 42.10954, 0],
          [23.90444, 42.10944, 0],
          [23.90436, 42.10937, 0],
          [23.90409, 42.109, 0],
          [23.90374, 42.10845, 0],
          [23.90367, 42.1083, 0],
          [23.90355, 42.10776, 0],
          [23.90351, 42.10767, 0],
          [23.90342, 42.10755, 0],
          [23.90331, 42.10747, 0],
          [23.9032, 42.10741, 0],
          [23.90304, 42.10737, 0],
          [23.90298, 42.10737, 0],
          [23.90259, 42.10732, 0],
          [23.90225, 42.10732, 0],
          [23.90209, 42.10735, 0],
          [23.90176, 42.10747, 0],
          [23.90155, 42.10749, 0],
          [23.90143, 42.10749, 0],
          [23.90136, 42.10747, 0],
          [23.9013, 42.10743, 0],
          [23.90125, 42.10738, 0],
          [23.90121, 42.10732, 0],
          [23.90119, 42.10726, 0],
          [23.90117, 42.10687, 0],
          [23.90099, 42.10624, 0],
          [23.90093, 42.10613, 0],
          [23.90085, 42.10607, 0],
          [23.90069, 42.10601, 0],
          [23.9002, 42.10591, 0],
          [23.90008, 42.10586, 0],
          [23.9, 42.10581, 0],
          [23.89995, 42.10575, 0],
          [23.89992, 42.1057, 0],
          [23.8999, 42.10565, 0],
          [23.8999, 42.1056, 0],
          [23.89993, 42.10548, 0],
          [23.90022, 42.10502, 0],
          [23.90025, 42.10486, 0],
          [23.90022, 42.10469, 0],
          [23.90016, 42.10457, 0],
          [23.89883, 42.10327, 0],
          [23.89853, 42.1031, 0],
          [23.89852, 42.1031, 0],
          [23.8984, 42.10304, 0],
          [23.89772, 42.10282, 0],
          [23.89655, 42.10263, 0],
          [23.89609, 42.10249, 0],
          [23.89558, 42.10228, 0],
          [23.89512, 42.10218, 0],
          [23.89484, 42.10214, 0],
          [23.89448, 42.10214, 0],
          [23.89435, 42.10215, 0],
          [23.89421, 42.1022, 0],
          [23.8935, 42.10256, 0],
          [23.89332, 42.1026, 0],
          [23.89307, 42.10259, 0],
          [23.89291, 42.10255, 0],
          [23.89289, 42.10255, 0],
          [23.89254, 42.10247, 0],
          [23.89219, 42.10235, 0],
          [23.89174, 42.10231, 0],
          [23.8916, 42.10228, 0],
          [23.89149, 42.10219, 0],
          [23.89081, 42.10139, 0],
          [23.89072, 42.10133, 0],
          [23.89052, 42.10123, 0],
          [23.8904, 42.10115, 0],
          [23.89036, 42.1011, 0],
          [23.89027, 42.10101, 0],
          [23.89002, 42.10067, 0],
          [23.8898, 42.10047, 0],
          [23.88953, 42.10035, 0],
          [23.88948, 42.10031, 0],
          [23.88943, 42.10025, 0],
          [23.88941, 42.10021, 0],
          [23.8893, 42.09964, 0],
          [23.88927, 42.09957, 0],
          [23.88923, 42.09951, 0],
          [23.88917, 42.09945, 0],
          [23.88827, 42.09881, 0],
          [23.88818, 42.09872, 0],
          [23.88814, 42.09865, 0],
          [23.88809, 42.09847, 0],
          [23.88808, 42.09814, 0],
          [23.88823, 42.09732, 0],
          [23.88827, 42.09644, 0],
          [23.88829, 42.09634, 0],
          [23.88833, 42.09623, 0],
          [23.88844, 42.09611, 0],
          [23.88864, 42.09602, 0],
          [23.88911, 42.09586, 0],
          [23.88913, 42.09584, 0],
          [23.88917, 42.09582, 0],
          [23.88926, 42.09562, 0],
          [23.8893, 42.09542, 0],
          [23.8893, 42.095, 0],
          [23.88908, 42.09427, 0],
          [23.88895, 42.09393, 0],
          [23.88882, 42.0937, 0],
          [23.8886, 42.09345, 0],
          [23.88843, 42.09331, 0],
          [23.88748, 42.09216, 0],
          [23.88745, 42.09208, 0],
          [23.88744, 42.09199, 0],
          [23.88747, 42.09187, 0],
          [23.88752, 42.09174, 0],
          [23.88759, 42.09163, 0],
          [23.88764, 42.09149, 0],
          [23.88761, 42.09129, 0],
          [23.88738, 42.09055, 0],
          [23.88741, 42.09009, 0],
          [23.8874, 42.08998, 0],
          [23.88738, 42.08989, 0],
          [23.88733, 42.08982, 0],
          [23.88726, 42.08975, 0],
          [23.88714, 42.08968, 0],
          [23.88685, 42.08955, 0],
          [23.8862, 42.08937, 0],
          [23.88607, 42.08931, 0],
          [23.88598, 42.08925, 0],
          [23.88591, 42.08918, 0],
          [23.88586, 42.08911, 0],
          [23.88535, 42.08764, 0],
          [23.88536, 42.08757, 0],
          [23.88539, 42.08749, 0],
          [23.88543, 42.08742, 0],
          [23.8855, 42.08736, 0],
          [23.88557, 42.08733, 0],
          [23.88558, 42.08732, 0],
          [23.88599, 42.08718, 0],
          [23.88601, 42.08718, 0],
          [23.88613, 42.08713, 0],
          [23.88624, 42.08707, 0],
          [23.88634, 42.08696, 0],
          [23.88645, 42.08679, 0],
          [23.88657, 42.08654, 0],
          [23.8866, 42.08638, 0],
          [23.88658, 42.0862, 0],
          [23.88652, 42.08603, 0],
          [23.88641, 42.08579, 0],
          [23.88612, 42.08541, 0],
          [23.88564, 42.08499, 0],
          [23.88527, 42.08459, 0],
          [23.88514, 42.08437, 0],
          [23.88511, 42.08422, 0],
          [23.8851, 42.08405, 0],
          [23.88508, 42.08393, 0],
          [23.88501, 42.08379, 0],
          [23.88489, 42.08363, 0],
          [23.88438, 42.08326, 0],
          [23.884, 42.08313, 0],
          [23.88373, 42.08302, 0],
          [23.88343, 42.08285, 0],
          [23.88315, 42.08267, 0],
          [23.88306, 42.08263, 0],
          [23.88284, 42.0826, 0],
          [23.88217, 42.08261, 0],
          [23.88203, 42.08259, 0],
          [23.88187, 42.08254, 0],
          [23.88175, 42.08249, 0],
          [23.88148, 42.08233, 0],
          [23.88137, 42.08224, 0],
          [23.88099, 42.0817, 0],
          [23.8808, 42.08126, 0],
          [23.88069, 42.08109, 0],
          [23.88063, 42.08102, 0],
          [23.88052, 42.08097, 0],
          [23.87933, 42.08058, 0],
          [23.87916, 42.08051, 0],
          [23.87894, 42.08038, 0],
          [23.8788, 42.08022, 0],
          [23.87875, 42.0801, 0],
          [23.87872, 42.07999, 0],
          [23.8787, 42.07952, 0],
          [23.87867, 42.07929, 0],
          [23.87863, 42.07917, 0],
          [23.87838, 42.07865, 0],
          [23.87828, 42.07838, 0],
          [23.8781, 42.07752, 0],
          [23.87805, 42.07741, 0],
          [23.87797, 42.07729, 0],
          [23.87753, 42.07687, 0],
          [23.87698, 42.07644, 0],
          [23.87679, 42.07631, 0],
          [23.87637, 42.07608, 0],
          [23.87631, 42.07606, 0],
          [23.87568, 42.07571, 0],
          [23.87474, 42.07527, 0],
          [23.87365, 42.0747, 0],
          [23.87318, 42.07443, 0],
          [23.87114, 42.0729, 0],
          [23.87088, 42.07273, 0],
          [23.8704, 42.07248, 0],
          [23.86179, 42.06849, 0],
          [23.85999, 42.06759, 0],
          [23.85993, 42.06755, 0],
          [23.85945, 42.06729, 0],
          [23.85887, 42.06691, 0],
          [23.85784, 42.0661, 0],
          [23.8577, 42.06601, 0],
          [23.8574, 42.06585, 0],
          [23.85488, 42.06507, 0],
          [23.85452, 42.06494, 0],
          [23.85501, 42.06405, 0],
          [23.8552, 42.06364, 0],
          [23.85521, 42.0636, 0],
          [23.85521, 42.06355, 0],
          [23.85519, 42.0635, 0],
          [23.85515, 42.06344, 0],
          [23.85511, 42.0634, 0],
          [23.85481, 42.06316, 0],
          [23.85459, 42.06307, 0],
          [23.85446, 42.06296, 0],
          [23.85369, 42.0626, 0],
          [23.85368, 42.06259, 0],
          [23.85205, 42.06182, 0],
          [23.85201, 42.06181, 0],
          [23.85124, 42.06143, 0],
          [23.85123, 42.06143, 0],
          [23.85106, 42.06136, 0],
          [23.8508, 42.06128, 0],
          [23.85019, 42.06115, 0],
          [23.84986, 42.06111, 0],
          [23.84982, 42.0611, 0],
          [23.84689, 42.06081, 0],
          [23.84686, 42.0608, 0],
          [23.84621, 42.06074, 0],
          [23.84578, 42.06067, 0],
          [23.84479, 42.06036, 0],
          [23.84363, 42.0599, 0],
          [23.84293, 42.05965, 0],
          [23.84252, 42.05957, 0],
          [23.84239, 42.05956, 0],
          [23.84212, 42.05957, 0],
          [23.84173, 42.05963, 0],
          [23.84111, 42.05979, 0],
          [23.84082, 42.05981, 0],
          [23.8407, 42.0598, 0],
          [23.84055, 42.05977, 0],
          [23.84042, 42.05973, 0],
          [23.84016, 42.0596, 0],
          [23.84005, 42.05951, 0],
          [23.83995, 42.05941, 0],
          [23.8398, 42.05916, 0],
          [23.83978, 42.05905, 0],
          [23.83978, 42.05895, 0],
          [23.83982, 42.05878, 0],
          [23.83983, 42.05877, 0],
          [23.83988, 42.05865, 0],
          [23.83994, 42.05854, 0],
          [23.8404, 42.05788, 0],
          [23.84051, 42.05763, 0],
          [23.84054, 42.05743, 0],
          [23.84054, 42.05732, 0],
          [23.8405, 42.05712, 0],
          [23.84037, 42.05686, 0],
          [23.83983, 42.05607, 0],
          [23.83958, 42.05575, 0],
          [23.83946, 42.05563, 0],
          [23.83935, 42.05554, 0],
          [23.839, 42.05536, 0],
          [23.8387, 42.05525, 0],
          [23.83834, 42.05517, 0],
          [23.83743, 42.05509, 0],
          [23.83637, 42.05508, 0],
          [23.83596, 42.05514, 0],
          [23.83573, 42.0552, 0],
          [23.83552, 42.05528, 0],
          [23.83524, 42.05541, 0],
          [23.83358, 42.05635, 0],
          [23.83327, 42.0565, 0],
          [23.83289, 42.05666, 0],
          [23.83252, 42.05678, 0],
          [23.8322, 42.05685, 0],
          [23.82897, 42.05735, 0],
          [23.82891, 42.05735, 0],
          [23.82867, 42.05738, 0],
          [23.82845, 42.05737, 0],
          [23.82831, 42.05734, 0],
          [23.82816, 42.05727, 0],
          [23.82802, 42.05718, 0],
          [23.82789, 42.05705, 0],
          [23.82786, 42.05695, 0],
          [23.82781, 42.05684, 0],
          [23.82779, 42.05672, 0],
          [23.82796, 42.05568, 0],
          [23.82795, 42.05552, 0],
          [23.82793, 42.0554, 0],
          [23.82789, 42.0553, 0],
          [23.82783, 42.0552, 0],
          [23.82767, 42.05504, 0],
          [23.82761, 42.05501, 0],
          [23.82745, 42.05495, 0],
          [23.82733, 42.05492, 0],
          [23.8265, 42.05484, 0],
          [23.82591, 42.05472, 0],
          [23.8257, 42.05464, 0],
          [23.82563, 42.0546, 0],
          [23.82544, 42.05453, 0],
          [23.82526, 42.05449, 0],
          [23.82524, 42.05448, 0],
          [23.82492, 42.05447, 0],
          [23.82478, 42.05449, 0],
          [23.82463, 42.05453, 0],
          [23.82456, 42.05456, 0],
          [23.8244, 42.05465, 0],
          [23.82427, 42.05474, 0],
          [23.82406, 42.05493, 0],
          [23.82376, 42.0551, 0],
          [23.82366, 42.05513, 0],
          [23.82364, 42.05513, 0],
          [23.82355, 42.05515, 0],
          [23.8234, 42.05515, 0],
          [23.82332, 42.05516, 0],
          [23.82322, 42.05516, 0],
          [23.8223, 42.05502, 0],
          [23.82197, 42.05504, 0],
          [23.82185, 42.05506, 0],
          [23.82174, 42.05509, 0],
          [23.82159, 42.05516, 0],
          [23.82147, 42.05523, 0],
          [23.8212, 42.05544, 0],
          [23.8212, 42.05545, 0],
          [23.82096, 42.05568, 0],
          [23.82072, 42.05597, 0],
          [23.82068, 42.05603, 0],
          [23.82036, 42.05642, 0],
          [23.82019, 42.05656, 0],
          [23.82009, 42.05661, 0],
          [23.81985, 42.05669, 0],
          [23.8196, 42.0567, 0],
          [23.81704, 42.0564, 0],
          [23.81675, 42.0564, 0],
          [23.81664, 42.05641, 0],
          [23.81651, 42.05644, 0],
          [23.81648, 42.05644, 0],
          [23.81607, 42.05657, 0],
          [23.816, 42.0566, 0],
          [23.81587, 42.05663, 0],
          [23.8156, 42.05665, 0],
          [23.81535, 42.05662, 0],
          [23.81396, 42.05624, 0],
          [23.81379, 42.05617, 0],
          [23.81359, 42.05605, 0],
          [23.81303, 42.05559, 0],
          [23.81285, 42.0555, 0],
          [23.81264, 42.05543, 0],
          [23.81207, 42.05529, 0],
          [23.81185, 42.05526, 0],
          [23.81165, 42.05525, 0],
          [23.81136, 42.0553, 0],
          [23.81066, 42.05552, 0],
          [23.81047, 42.05556, 0],
          [23.81029, 42.05557, 0],
          [23.80999, 42.05554, 0],
          [23.80988, 42.0555, 0],
          [23.80969, 42.0554, 0],
          [23.80964, 42.05534, 0],
          [23.80954, 42.05519, 0],
          [23.80929, 42.05474, 0],
          [23.80923, 42.05451, 0],
          [23.80923, 42.05443, 0],
          [23.80924, 42.05437, 0],
          [23.80932, 42.05422, 0],
          [23.80938, 42.05414, 0],
          [23.80943, 42.05409, 0],
          [23.8096, 42.05397, 0],
          [23.80976, 42.05389, 0],
          [23.81088, 42.05349, 0],
          [23.81147, 42.05335, 0],
          [23.81205, 42.0533, 0],
          [23.81332, 42.05332, 0],
          [23.81347, 42.05329, 0],
          [23.81362, 42.05324, 0],
          [23.81374, 42.05317, 0],
          [23.81385, 42.05308, 0],
          [23.81392, 42.053, 0],
          [23.81398, 42.05287, 0],
          [23.81403, 42.05269, 0],
          [23.81411, 42.05252, 0],
          [23.81417, 42.05243, 0],
          [23.8142, 42.0524, 0],
          [23.81444, 42.05225, 0],
          [23.81497, 42.05209, 0],
          [23.81513, 42.05203, 0],
          [23.81537, 42.05189, 0],
          [23.81568, 42.05161, 0],
          [23.81592, 42.05136, 0],
          [23.81593, 42.05134, 0],
          [23.81602, 42.05122, 0],
          [23.81644, 42.05022, 0],
          [23.81651, 42.04997, 0],
          [23.8165, 42.04984, 0],
          [23.81647, 42.0497, 0],
          [23.81642, 42.04962, 0],
          [23.81641, 42.04958, 0],
          [23.81634, 42.0495, 0],
          [23.81627, 42.04945, 0],
          [23.81625, 42.04943, 0],
          [23.81559, 42.04908, 0],
          [23.81551, 42.04902, 0],
          [23.8154, 42.04888, 0],
          [23.81535, 42.04878, 0],
          [23.81531, 42.04856, 0],
          [23.8154, 42.04794, 0],
          [23.81541, 42.04779, 0],
          [23.8154, 42.04764, 0],
          [23.81538, 42.04753, 0],
          [23.81535, 42.04745, 0],
          [23.81531, 42.04739, 0],
          [23.81519, 42.04729, 0],
          [23.81508, 42.04723, 0],
          [23.81493, 42.04717, 0],
          [23.81447, 42.04703, 0],
          [23.81435, 42.04698, 0],
          [23.81429, 42.04694, 0],
          [23.81421, 42.0469, 0],
          [23.81415, 42.04686, 0],
          [23.81405, 42.04676, 0],
          [23.81396, 42.04656, 0],
          [23.81395, 42.04649, 0],
          [23.81396, 42.04632, 0],
          [23.81399, 42.04614, 0],
          [23.81408, 42.04583, 0],
          [23.81417, 42.04563, 0],
          [23.81427, 42.04547, 0],
          [23.81437, 42.04537, 0],
          [23.8144, 42.04533, 0],
          [23.81459, 42.04518, 0],
          [23.81492, 42.04502, 0],
          [23.81827, 42.04388, 0],
          [23.81853, 42.04373, 0],
          [23.81866, 42.04363, 0],
          [23.81884, 42.04346, 0],
          [23.81919, 42.04302, 0],
          [23.81929, 42.04294, 0],
          [23.81956, 42.04277, 0],
          [23.81969, 42.04272, 0],
          [23.8198, 42.04269, 0],
          [23.82005, 42.04266, 0],
          [23.82084, 42.04277, 0],
          [23.82104, 42.04275, 0],
          [23.82118, 42.04272, 0],
          [23.82131, 42.04267, 0],
          [23.82142, 42.0426, 0],
          [23.82152, 42.04251, 0],
          [23.8216, 42.0424, 0],
          [23.82166, 42.04227, 0],
          [23.82169, 42.04213, 0],
          [23.82168, 42.04202, 0],
          [23.82164, 42.04193, 0],
          [23.82158, 42.04183, 0],
          [23.82146, 42.04172, 0],
          [23.82098, 42.04143, 0],
          [23.82065, 42.04126, 0],
          [23.8204, 42.0411, 0],
          [23.82024, 42.04097, 0],
          [23.82015, 42.04083, 0],
          [23.8201, 42.04069, 0],
          [23.82011, 42.04059, 0],
          [23.82013, 42.0405, 0],
          [23.82017, 42.0404, 0],
          [23.82023, 42.04032, 0],
          [23.8203, 42.04025, 0],
          [23.82046, 42.04012, 0],
          [23.82057, 42.04007, 0],
          [23.82069, 42.04004, 0],
          [23.82082, 42.04002, 0],
          [23.82108, 42.04001, 0],
          [23.82122, 42.04003, 0],
          [23.8215, 42.0401, 0],
          [23.8225, 42.04045, 0],
          [23.82294, 42.04055, 0],
          [23.82321, 42.04057, 0],
          [23.8234, 42.04056, 0],
          [23.82353, 42.04054, 0],
          [23.82366, 42.0405, 0],
          [23.82383, 42.04043, 0],
          [23.82394, 42.04037, 0],
          [23.82409, 42.04025, 0],
          [23.82428, 42.04001, 0],
          [23.82434, 42.03986, 0],
          [23.82437, 42.03971, 0],
          [23.82429, 42.03922, 0],
          [23.82375, 42.03756, 0],
          [23.8237, 42.03734, 0],
          [23.82368, 42.03718, 0],
          [23.82369, 42.03668, 0],
          [23.82384, 42.03519, 0],
          [23.82384, 42.03505, 0],
          [23.82378, 42.03484, 0],
          [23.82374, 42.03476, 0],
          [23.82366, 42.03466, 0],
          [23.82354, 42.03457, 0],
          [23.82344, 42.03451, 0],
          [23.8233, 42.03445, 0],
          [23.82316, 42.03442, 0],
          [23.82273, 42.03443, 0],
          [23.82093, 42.03482, 0],
          [23.82067, 42.03491, 0],
          [23.82032, 42.03506, 0],
          [23.82007, 42.03521, 0],
          [23.81984, 42.03537, 0],
          [23.81964, 42.03553, 0],
          [23.81929, 42.03592, 0],
          [23.81919, 42.03605, 0],
          [23.81919, 42.03606, 0],
          [23.81885, 42.03644, 0],
          [23.81794, 42.03758, 0],
          [23.81783, 42.03769, 0],
          [23.8176, 42.03787, 0],
          [23.81737, 42.03799, 0],
          [23.81723, 42.03803, 0],
          [23.817, 42.03807, 0],
          [23.8167, 42.03808, 0],
          [23.81173, 42.03773, 0],
          [23.81093, 42.03764, 0],
          [23.81042, 42.03756, 0],
          [23.81006, 42.03748, 0],
          [23.80768, 42.03683, 0],
          [23.80696, 42.03669, 0],
          [23.80662, 42.03666, 0],
          [23.80654, 42.03667, 0],
          [23.80645, 42.03667, 0],
          [23.80629, 42.03669, 0],
          [23.80593, 42.03676, 0],
          [23.80562, 42.03684, 0],
          [23.80447, 42.0372, 0],
          [23.80398, 42.0373, 0],
          [23.80338, 42.03733, 0],
          [23.80292, 42.03727, 0],
          [23.79858, 42.03617, 0],
          [23.79712, 42.03576, 0],
          [23.7956, 42.03539, 0],
          [23.79547, 42.03537, 0],
          [23.79517, 42.03535, 0],
          [23.79264, 42.03554, 0],
          [23.79251, 42.03554, 0],
          [23.79213, 42.03551, 0],
          [23.79154, 42.03542, 0],
          [23.79065, 42.03516, 0],
          [23.78829, 42.03434, 0],
          [23.78746, 42.03414, 0],
          [23.78688, 42.03406, 0],
          [23.78618, 42.03405, 0],
          [23.78447, 42.03414, 0],
          [23.78419, 42.03418, 0],
          [23.78377, 42.03427, 0],
          [23.78333, 42.03445, 0],
          [23.78237, 42.035, 0],
          [23.78208, 42.03514, 0],
          [23.78191, 42.0352, 0],
          [23.78169, 42.03524, 0],
          [23.78148, 42.03524, 0],
          [23.78112, 42.03519, 0],
          [23.78097, 42.03514, 0],
          [23.77865, 42.03418, 0],
          [23.77832, 42.0341, 0],
          [23.77768, 42.03398, 0],
          [23.77742, 42.0339, 0],
          [23.77731, 42.03385, 0],
          [23.77706, 42.03367, 0],
          [23.77696, 42.03356, 0],
          [23.77679, 42.03326, 0],
          [23.7765, 42.03287, 0],
          [23.77629, 42.03268, 0],
          [23.77615, 42.03257, 0],
          [23.77574, 42.03235, 0],
          [23.77548, 42.03226, 0],
          [23.7739, 42.03181, 0],
          [23.77389, 42.0318, 0],
          [23.77333, 42.03163, 0],
          [23.77332, 42.03162, 0],
          [23.77291, 42.03141, 0],
          [23.77205, 42.03084, 0],
          [23.77173, 42.03057, 0],
          [23.77172, 42.03055, 0],
          [23.77165, 42.03047, 0],
          [23.7712, 42.0298, 0],
          [23.7711, 42.02967, 0],
          [23.77097, 42.02954, 0],
          [23.77083, 42.02943, 0],
          [23.77028, 42.02907, 0],
          [23.76959, 42.02868, 0],
          [23.76936, 42.0286, 0],
          [23.76723, 42.02844, 0],
          [23.76699, 42.02845, 0],
          [23.76661, 42.02853, 0],
          [23.76637, 42.02864, 0],
          [23.76589, 42.029, 0],
          [23.76566, 42.02912, 0],
          [23.76542, 42.0292, 0],
          [23.76503, 42.02921, 0],
          [23.76434, 42.02907, 0],
          [23.76407, 42.02905, 0],
          [23.76373, 42.02907, 0],
          [23.76234, 42.02927, 0],
          [23.76178, 42.02941, 0],
          [23.76038, 42.02985, 0],
          [23.75903, 42.0304, 0],
          [23.75735, 42.03078, 0],
          [23.75684, 42.03097, 0],
          [23.7567, 42.03105, 0],
          [23.75646, 42.03124, 0],
          [23.75623, 42.03146, 0],
          [23.75587, 42.03187, 0],
          [23.75578, 42.03199, 0],
          [23.75569, 42.03216, 0],
          [23.75542, 42.0328, 0],
          [23.75523, 42.03312, 0],
          [23.75512, 42.03323, 0],
          [23.75494, 42.03335, 0],
          [23.75464, 42.0335, 0],
          [23.75403, 42.03368, 0],
          [23.75349, 42.03388, 0],
          [23.75339, 42.03393, 0],
          [23.75328, 42.034, 0],
          [23.75314, 42.03413, 0],
          [23.75296, 42.03437, 0],
          [23.75238, 42.03523, 0],
          [23.75229, 42.03539, 0],
          [23.7521, 42.03565, 0],
          [23.75183, 42.03598, 0],
          [23.7512, 42.03651, 0],
          [23.74999, 42.03737, 0],
          [23.74995, 42.03739, 0],
          [23.74992, 42.03742, 0],
          [23.74983, 42.03748, 0],
          [23.74976, 42.03755, 0],
          [23.74973, 42.03757, 0],
          [23.74965, 42.03769, 0],
          [23.74965, 42.0377, 0],
          [23.7496, 42.0378, 0],
          [23.74959, 42.03781, 0],
          [23.74945, 42.03828, 0],
          [23.74934, 42.03845, 0],
          [23.74927, 42.03852, 0],
          [23.74906, 42.03868, 0],
          [23.7488, 42.03883, 0],
          [23.74779, 42.0393, 0],
          [23.74738, 42.03952, 0],
          [23.74728, 42.03962, 0],
          [23.74718, 42.03983, 0],
          [23.74716, 42.03993, 0],
          [23.74718, 42.04003, 0],
          [23.74754, 42.04063, 0],
          [23.7476, 42.04075, 0],
          [23.74762, 42.04082, 0],
          [23.74762, 42.0409, 0],
          [23.7476, 42.04102, 0],
          [23.74757, 42.04106, 0],
          [23.7475, 42.04113, 0],
          [23.74742, 42.04118, 0],
          [23.7472, 42.04128, 0],
          [23.74703, 42.04131, 0],
          [23.74691, 42.04131, 0],
          [23.74677, 42.04128, 0],
          [23.74573, 42.04088, 0],
          [23.74538, 42.0408, 0],
          [23.74523, 42.0408, 0],
          [23.74505, 42.04082, 0],
          [23.74497, 42.04084, 0],
          [23.74487, 42.04088, 0],
          [23.74475, 42.04095, 0],
          [23.74457, 42.04108, 0],
          [23.74444, 42.04122, 0],
          [23.74438, 42.04134, 0],
          [23.7443, 42.04159, 0],
          [23.74426, 42.04177, 0],
          [23.74422, 42.04187, 0],
          [23.74418, 42.04201, 0],
          [23.74413, 42.04208, 0],
          [23.74406, 42.04215, 0],
          [23.7439, 42.04226, 0],
          [23.74334, 42.04252, 0],
          [23.74329, 42.04255, 0],
          [23.74328, 42.04256, 0],
          [23.74317, 42.04263, 0],
          [23.74316, 42.04263, 0],
          [23.74301, 42.04276, 0],
          [23.74256, 42.04325, 0],
          [23.7425, 42.0433, 0],
          [23.74207, 42.04355, 0],
          [23.74204, 42.04356, 0],
          [23.74185, 42.04369, 0],
          [23.74184, 42.04371, 0],
          [23.74172, 42.04384, 0],
          [23.74161, 42.04404, 0],
          [23.74114, 42.04525, 0],
          [23.74102, 42.04541, 0],
          [23.74064, 42.04582, 0],
          [23.73993, 42.04649, 0],
          [23.73958, 42.04673, 0],
          [23.73867, 42.04725, 0],
          [23.73855, 42.04728, 0],
          [23.73851, 42.04728, 0],
          [23.73847, 42.04729, 0],
          [23.73824, 42.04729, 0],
          [23.73816, 42.04728, 0],
          [23.73765, 42.04717, 0],
          [23.73723, 42.04712, 0],
          [23.73706, 42.04712, 0],
          [23.73662, 42.04724, 0],
          [23.73645, 42.04733, 0],
          [23.73643, 42.04735, 0],
          [23.73629, 42.04745, 0],
          [23.73626, 42.04748, 0],
          [23.73624, 42.04749, 0],
          [23.73618, 42.04757, 0],
          [23.73617, 42.04759, 0],
          [23.73616, 42.0476, 0],
          [23.73607, 42.04786, 0],
          [23.73607, 42.04789, 0],
          [23.73606, 42.04794, 0],
          [23.73608, 42.0481, 0],
          [23.73613, 42.04823, 0],
          [23.73628, 42.0485, 0],
          [23.73648, 42.0488, 0],
          [23.7365, 42.04884, 0],
          [23.73651, 42.04888, 0],
          [23.73652, 42.04889, 0],
          [23.73653, 42.04893, 0],
          [23.73654, 42.04895, 0],
          [23.73656, 42.04904, 0],
          [23.73656, 42.04909, 0],
          [23.73653, 42.04923, 0],
          [23.73653, 42.04925, 0],
          [23.73651, 42.04931, 0],
          [23.73645, 42.0494, 0],
          [23.73585, 42.05014, 0],
          [23.73581, 42.05018, 0],
          [23.73579, 42.05021, 0],
          [23.73577, 42.05022, 0],
          [23.73566, 42.05031, 0],
          [23.73553, 42.05038, 0],
          [23.73552, 42.05038, 0],
          [23.73546, 42.05041, 0],
          [23.73527, 42.05048, 0],
          [23.73449, 42.05047, 0],
          [23.73412, 42.05049, 0],
          [23.73404, 42.05052, 0],
          [23.73394, 42.05054, 0],
          [23.73178, 42.05136, 0],
          [23.73092, 42.05158, 0],
          [23.73055, 42.05164, 0],
          [23.73038, 42.05165, 0],
          [23.73034, 42.05164, 0],
          [23.73012, 42.05163, 0],
          [23.7299, 42.0516, 0],
          [23.72944, 42.05148, 0],
          [23.72916, 42.05136, 0],
          [23.72871, 42.05106, 0],
          [23.72869, 42.05103, 0],
          [23.72842, 42.05073, 0],
          [23.72822, 42.0504, 0],
          [23.7278, 42.04944, 0],
          [23.7278, 42.04942, 0],
          [23.72756, 42.04893, 0],
          [23.72746, 42.04867, 0],
          [23.72745, 42.04866, 0],
          [23.72732, 42.04823, 0],
          [23.72721, 42.04764, 0],
          [23.7272, 42.04762, 0],
          [23.72714, 42.0474, 0],
          [23.72683, 42.04666, 0],
          [23.7268, 42.04661, 0],
          [23.72634, 42.04559, 0],
          [23.72609, 42.04524, 0],
          [23.72593, 42.04507, 0],
          [23.72566, 42.04488, 0],
          [23.72533, 42.04469, 0],
          [23.72493, 42.04451, 0],
          [23.7247, 42.04443, 0],
          [23.72357, 42.04412, 0],
          [23.72115, 42.04305, 0],
          [23.72045, 42.04265, 0],
          [23.72017, 42.04244, 0],
          [23.71913, 42.04149, 0],
          [23.7191, 42.04147, 0],
          [23.71894, 42.04133, 0],
          [23.71861, 42.04108, 0],
          [23.71713, 42.04006, 0],
          [23.71695, 42.03998, 0],
          [23.7144, 42.0392, 0],
          [23.71258, 42.0385, 0],
          [23.70865, 42.03685, 0],
          [23.70786, 42.03648, 0],
          [23.70715, 42.03618, 0],
          [23.70615, 42.0358, 0],
          [23.70574, 42.03569, 0],
          [23.70521, 42.0356, 0],
          [23.70484, 42.03556, 0],
          [23.70363, 42.0356, 0],
          [23.70308, 42.03559, 0],
          [23.7028, 42.03556, 0],
          [23.7024, 42.03546, 0],
          [23.70214, 42.03536, 0],
          [23.7008, 42.03475, 0],
          [23.70079, 42.03474, 0],
          [23.70046, 42.03461, 0],
          [23.69637, 42.03331, 0],
          [23.69569, 42.03316, 0],
          [23.69567, 42.03316, 0],
          [23.69522, 42.03308, 0],
          [23.69364, 42.03296, 0],
          [23.69312, 42.03286, 0],
          [23.6929, 42.03278, 0],
          [23.69268, 42.03268, 0],
          [23.69257, 42.03261, 0],
          [23.69249, 42.03254, 0],
          [23.69239, 42.03243, 0],
          [23.69222, 42.03219, 0],
          [23.69217, 42.03208, 0],
          [23.69215, 42.03201, 0],
          [23.6921, 42.03163, 0],
          [23.69206, 42.03112, 0],
          [23.69199, 42.03063, 0],
          [23.69195, 42.03053, 0],
          [23.69194, 42.03047, 0],
          [23.69183, 42.03024, 0],
          [23.69164, 42.02997, 0],
          [23.69096, 42.02936, 0],
          [23.69078, 42.02922, 0],
          [23.69074, 42.02918, 0],
          [23.69032, 42.02885, 0],
          [23.6901, 42.02872, 0],
          [23.69009, 42.02872, 0],
          [23.68977, 42.02855, 0],
          [23.68947, 42.02843, 0],
          [23.68945, 42.02843, 0],
          [23.68905, 42.0283, 0],
          [23.68629, 42.02757, 0],
          [23.68622, 42.02756, 0],
          [23.68431, 42.02705, 0],
          [23.6843, 42.02704, 0],
          [23.6824, 42.02655, 0],
          [23.68132, 42.02619, 0],
          [23.68131, 42.02618, 0],
          [23.68053, 42.02592, 0],
          [23.68016, 42.02575, 0],
          [23.67938, 42.02525, 0],
          [23.67876, 42.02495, 0],
          [23.67859, 42.02489, 0],
          [23.6784, 42.02485, 0],
          [23.67807, 42.02482, 0],
          [23.67804, 42.02483, 0],
          [23.67791, 42.02484, 0],
          [23.67686, 42.02508, 0],
          [23.67667, 42.02511, 0],
          [23.67628, 42.0251, 0],
          [23.67611, 42.02508, 0],
          [23.67581, 42.02501, 0],
          [23.67566, 42.02495, 0],
          [23.67552, 42.02488, 0],
          [23.67529, 42.02472, 0],
          [23.67512, 42.02453, 0],
          [23.67482, 42.02414, 0],
          [23.6743, 42.02353, 0],
          [23.6741, 42.02333, 0],
          [23.67356, 42.02289, 0],
          [23.67314, 42.02261, 0],
          [23.67257, 42.0223, 0],
          [23.66962, 42.02085, 0],
          [23.66941, 42.02077, 0],
          [23.66908, 42.02068, 0],
          [23.66877, 42.02064, 0],
          [23.66818, 42.02065, 0],
          [23.66799, 42.02064, 0],
          [23.66778, 42.02061, 0],
          [23.66747, 42.02053, 0],
          [23.66721, 42.02041, 0],
          [23.66634, 42.01979, 0],
          [23.66574, 42.01941, 0],
          [23.6651, 42.01912, 0],
          [23.66459, 42.01892, 0],
          [23.66318, 42.01856, 0],
          [23.66241, 42.01829, 0],
          [23.65947, 42.01696, 0],
          [23.65891, 42.01677, 0],
          [23.65863, 42.01674, 0],
          [23.65826, 42.01673, 0],
          [23.65787, 42.01675, 0],
          [23.6575, 42.01682, 0],
          [23.65604, 42.01721, 0],
          [23.65548, 42.0173, 0],
          [23.65506, 42.01731, 0],
          [23.65497, 42.0173, 0],
          [23.65488, 42.0173, 0],
          [23.6544, 42.01725, 0],
          [23.65399, 42.01716, 0],
          [23.6506, 42.01609, 0],
          [23.65013, 42.01592, 0],
          [23.64973, 42.01573, 0],
          [23.64939, 42.0155, 0],
          [23.64906, 42.01523, 0],
          [23.6487, 42.01482, 0],
          [23.64643, 42.01194, 0],
          [23.64642, 42.01194, 0],
          [23.64621, 42.01169, 0],
          [23.64602, 42.01151, 0],
          [23.646, 42.0115, 0],
          [23.64564, 42.01119, 0],
          [23.6443, 42.01023, 0],
          [23.64084, 42.00733, 0],
          [23.64048, 42.00705, 0],
          [23.64023, 42.0069, 0],
          [23.64, 42.00679, 0],
          [23.63879, 42.00629, 0],
          [23.63832, 42.00616, 0],
          [23.63752, 42.00599, 0],
          [23.63749, 42.00599, 0],
          [23.63623, 42.00574, 0],
          [23.63578, 42.00569, 0],
          [23.63549, 42.00571, 0],
          [23.63536, 42.00573, 0],
          [23.63446, 42.00599, 0],
          [23.63435, 42.006, 0],
          [23.6341, 42.006, 0],
          [23.63384, 42.00596, 0],
          [23.63372, 42.00593, 0],
          [23.63362, 42.00589, 0],
          [23.6334, 42.00576, 0],
          [23.63332, 42.0057, 0],
          [23.63318, 42.00552, 0],
          [23.63313, 42.00543, 0],
          [23.63309, 42.00532, 0],
          [23.63309, 42.00505, 0],
          [23.63314, 42.00465, 0],
          [23.63312, 42.00442, 0],
          [23.6331, 42.00433, 0],
          [23.63304, 42.00421, 0],
          [23.63289, 42.00404, 0],
          [23.6328, 42.00396, 0],
          [23.63258, 42.00381, 0],
          [23.63203, 42.0035, 0],
          [23.63177, 42.00333, 0],
          [23.63161, 42.0032, 0],
          [23.63147, 42.00306, 0],
          [23.63128, 42.00282, 0],
          [23.63107, 42.00251, 0],
          [23.63086, 42.0021, 0],
          [23.63065, 42.00158, 0],
          [23.63059, 42.00148, 0],
          [23.6305, 42.00138, 0],
          [23.63032, 42.00121, 0],
          [23.62905, 42.00034, 0],
          [23.62881, 42.00013, 0],
          [23.62869, 41.99992, 0],
          [23.62848, 41.99937, 0],
          [23.62846, 41.99929, 0],
          [23.62835, 41.99902, 0],
          [23.6281, 41.99874, 0],
          [23.62777, 41.99849, 0],
          [23.62638, 41.99755, 0],
          [23.62594, 41.99713, 0],
          [23.62494, 41.99594, 0],
          [23.62481, 41.99575, 0],
          [23.62478, 41.99568, 0],
          [23.62448, 41.99463, 0],
          [23.62448, 41.99462, 0],
          [23.62441, 41.99446, 0],
          [23.62432, 41.99432, 0],
          [23.62413, 41.99411, 0],
          [23.62319, 41.99323, 0],
          [23.6231, 41.99313, 0],
          [23.62302, 41.99302, 0],
          [23.62299, 41.99299, 0],
          [23.62295, 41.99292, 0],
          [23.62276, 41.99266, 0],
          [23.61997, 41.9881, 0],
          [23.61972, 41.98776, 0],
          [23.61941, 41.98743, 0],
          [23.6193, 41.98734, 0],
          [23.61922, 41.98726, 0],
          [23.61875, 41.9869, 0],
          [23.61754, 41.98607, 0],
          [23.61717, 41.98579, 0],
          [23.61654, 41.98522, 0],
          [23.61645, 41.98515, 0],
          [23.6163, 41.98501, 0],
          [23.61613, 41.98481, 0],
          [23.61602, 41.98462, 0],
          [23.61597, 41.98449, 0],
          [23.61594, 41.98436, 0],
          [23.61593, 41.98426, 0],
          [23.61595, 41.98405, 0],
          [23.61597, 41.98394, 0],
          [23.6161, 41.98346, 0],
          [23.61611, 41.98334, 0],
          [23.6161, 41.98309, 0],
          [23.61598, 41.9827, 0],
          [23.61519, 41.9806, 0],
          [23.61456, 41.97951, 0],
          [23.61453, 41.97944, 0],
          [23.61449, 41.97924, 0],
          [23.61444, 41.9777, 0],
          [23.61436, 41.97736, 0],
          [23.61421, 41.97689, 0],
          [23.61408, 41.97664, 0],
          [23.61399, 41.97652, 0],
          [23.61388, 41.97641, 0],
          [23.61364, 41.97622, 0],
          [23.6131, 41.97587, 0],
          [23.61297, 41.97577, 0],
          [23.61265, 41.97546, 0],
          [23.61262, 41.97541, 0],
          [23.60987, 41.97185, 0],
          [23.60957, 41.97156, 0],
          [23.60832, 41.97059, 0],
          [23.60792, 41.97024, 0],
          [23.6078, 41.97011, 0],
          [23.60759, 41.9698, 0],
          [23.6061, 41.96717, 0],
          [23.60608, 41.9671, 0],
          [23.606, 41.96692, 0],
          [23.60582, 41.96595, 0],
          [23.60578, 41.96587, 0],
          [23.60574, 41.96575, 0],
          [23.6055, 41.96548, 0],
          [23.60541, 41.9654, 0],
          [23.60521, 41.96526, 0],
          [23.59992, 41.96253, 0],
          [23.59978, 41.96243, 0],
          [23.59969, 41.96235, 0],
          [23.59955, 41.96219, 0],
          [23.59949, 41.9621, 0],
          [23.59912, 41.9614, 0],
          [23.5989, 41.9611, 0],
          [23.59859, 41.96078, 0],
          [23.59816, 41.96047, 0],
          [23.59654, 41.9597, 0],
          [23.5965, 41.95967, 0],
          [23.59624, 41.95954, 0],
          [23.59601, 41.9594, 0],
          [23.59581, 41.95926, 0],
          [23.59555, 41.95899, 0],
          [23.59544, 41.95884, 0],
          [23.59531, 41.95859, 0],
          [23.59527, 41.95847, 0],
          [23.59521, 41.95818, 0],
          [23.59518, 41.95776, 0],
          [23.59512, 41.95752, 0],
          [23.59505, 41.95734, 0],
          [23.59495, 41.95719, 0],
          [23.59495, 41.95718, 0],
          [23.59483, 41.95704, 0],
          [23.59453, 41.95675, 0],
          [23.59386, 41.95617, 0],
          [23.59374, 41.95604, 0],
          [23.59362, 41.95587, 0],
          [23.59356, 41.95573, 0],
          [23.59349, 41.95547, 0],
          [23.59348, 41.95533, 0],
          [23.59349, 41.95432, 0],
          [23.59339, 41.95398, 0],
          [23.59309, 41.95321, 0],
          [23.59274, 41.95221, 0],
          [23.59229, 41.9502, 0],
          [23.59226, 41.95001, 0],
          [23.59225, 41.94986, 0],
          [23.59224, 41.94985, 0],
          [23.59224, 41.94972, 0],
          [23.59226, 41.94965, 0],
          [23.5923, 41.9494, 0],
          [23.59235, 41.94922, 0],
          [23.59268, 41.94827, 0],
          [23.59269, 41.94826, 0],
          [23.59271, 41.94819, 0],
          [23.59274, 41.94797, 0],
          [23.59272, 41.94778, 0],
          [23.59268, 41.94761, 0],
          [23.59244, 41.94722, 0],
          [23.59191, 41.94644, 0],
          [23.5919, 41.94644, 0],
          [23.59181, 41.94629, 0],
          [23.59179, 41.94627, 0],
          [23.5914, 41.94569, 0],
          [23.59115, 41.94525, 0],
          [23.59112, 41.94512, 0],
          [23.5911, 41.94496, 0],
          [23.5911, 41.94477, 0],
          [23.59125, 41.94441, 0],
          [23.59192, 41.9431, 0],
          [23.5921, 41.94271, 0],
          [23.59218, 41.94246, 0],
          [23.59223, 41.94221, 0],
          [23.59224, 41.94207, 0],
          [23.59225, 41.94203, 0],
          [23.59233, 41.94137, 0],
          [23.59234, 41.94108, 0],
          [23.59232, 41.94074, 0],
          [23.59227, 41.94037, 0],
          [23.59218, 41.93994, 0],
          [23.59209, 41.93961, 0],
          [23.59196, 41.93929, 0],
          [23.59183, 41.93904, 0],
          [23.5917, 41.93886, 0],
          [23.59157, 41.93871, 0],
          [23.59094, 41.93812, 0],
          [23.59049, 41.93777, 0],
          [23.59018, 41.93747, 0],
          [23.59002, 41.93728, 0],
          [23.58976, 41.93681, 0],
          [23.58964, 41.93652, 0],
          [23.58958, 41.9363, 0],
          [23.58955, 41.93591, 0],
          [23.58955, 41.93567, 0],
          [23.58962, 41.93546, 0],
          [23.58973, 41.93524, 0],
          [23.5899, 41.93503, 0],
          [23.59024, 41.93467, 0],
          [23.59057, 41.93437, 0],
          [23.59063, 41.93427, 0],
          [23.5907, 41.93412, 0],
          [23.59072, 41.93403, 0],
          [23.5907, 41.93381, 0],
          [23.59067, 41.9337, 0],
          [23.59058, 41.9335, 0],
          [23.59046, 41.93335, 0],
          [23.59028, 41.93319, 0],
          [23.58981, 41.93283, 0],
          [23.58961, 41.93271, 0],
          [23.58952, 41.93264, 0],
          [23.58942, 41.9326, 0],
          [23.58923, 41.9325, 0],
          [23.58824, 41.93213, 0],
          [23.58772, 41.93191, 0],
          [23.58761, 41.93184, 0],
          [23.5873, 41.93156, 0],
          [23.58671, 41.93091, 0],
          [23.58634, 41.93046, 0],
          [23.58605, 41.93003, 0],
          [23.58565, 41.92937, 0],
          [23.58522, 41.9288, 0],
          [23.58455, 41.92819, 0],
          [23.58439, 41.92801, 0],
          [23.58425, 41.92777, 0],
          [23.58396, 41.9269, 0],
          [23.58396, 41.92688, 0],
          [23.58392, 41.9267, 0],
          [23.58391, 41.92652, 0],
          [23.5839, 41.92648, 0],
          [23.58392, 41.92634, 0],
          [23.58417, 41.92554, 0],
          [23.58422, 41.92528, 0],
          [23.58425, 41.92493, 0],
          [23.58773, 41.92505, 0],
          [23.58773, 41.92436, 0],
          [23.5878, 41.92383, 0],
          [23.58783, 41.92374, 0],
          [23.58818, 41.92193, 0],
          [23.58817, 41.92132, 0],
          [23.58813, 41.92116, 0],
          [23.58811, 41.92093, 0],
          [23.58812, 41.9209, 0],
          [23.58814, 41.91957, 0],
          [23.58813, 41.91947, 0],
          [23.5881, 41.91934, 0],
          [23.58693, 41.91767, 0],
          [23.58687, 41.91755, 0],
          [23.58758, 41.91747, 0],
          [23.58687, 41.91755, 0],
          [23.58672, 41.91718, 0],
          [23.58635, 41.9156, 0],
          [23.58608, 41.91462, 0],
          [23.58604, 41.91443, 0],
          [23.5848, 41.91458, 0],
          [23.58485, 41.9142, 0],
          [23.58496, 41.91372, 0],
          [23.58576, 41.91073, 0],
          [23.58587, 41.91041, 0],
          [23.58639, 41.9091, 0],
          [23.58643, 41.90888, 0],
          [23.58641, 41.90878, 0],
          [23.58633, 41.90868, 0],
          [23.5858, 41.90822, 0],
          [23.58607, 41.90811, 0],
          [23.58615, 41.90809, 0],
          [23.58624, 41.90809, 0],
          [23.58639, 41.90811, 0],
          [23.58815, 41.90858, 0],
          [23.58829, 41.9086, 0],
          [23.58915, 41.90865, 0],
          [23.58931, 41.90863, 0],
          [23.58939, 41.9086, 0],
          [23.58945, 41.90856, 0],
          [23.58948, 41.90851, 0],
          [23.58948, 41.9085, 0],
          [23.58949, 41.90849, 0],
          [23.58947, 41.90842, 0],
          [23.58945, 41.90839, 0],
          [23.58939, 41.90834, 0],
          [23.58922, 41.90825, 0],
          [23.58874, 41.90806, 0],
          [23.58853, 41.90795, 0],
          [23.58833, 41.9078, 0],
          [23.5881, 41.90758, 0],
          [23.58784, 41.90739, 0],
          [23.58772, 41.90734, 0],
          [23.58729, 41.90722, 0],
          [23.58726, 41.90722, 0],
          [23.58659, 41.90707, 0],
          [23.58648, 41.90703, 0],
          [23.5864, 41.90698, 0],
          [23.58635, 41.90693, 0],
          [23.58633, 41.90688, 0],
          [23.58632, 41.90679, 0],
          [23.58633, 41.90675, 0],
          [23.58637, 41.90668, 0],
          [23.58649, 41.90655, 0],
          [23.58663, 41.90645, 0],
          [23.5867, 41.90641, 0],
          [23.5868, 41.90637, 0],
          [23.58703, 41.90632, 0],
          [23.58724, 41.90632, 0],
          [23.58757, 41.90636, 0],
          [23.58795, 41.90644, 0],
          [23.59013, 41.90711, 0],
          [23.59045, 41.90717, 0],
          [23.59052, 41.90717, 0],
          [23.59066, 41.90715, 0],
          [23.59095, 41.90705, 0],
          [23.59204, 41.90659, 0],
          [23.59253, 41.90641, 0],
          [23.59277, 41.9063, 0],
          [23.59424, 41.90494, 0],
          [23.59443, 41.90482, 0],
          [23.59512, 41.90445, 0],
          [23.5953, 41.9044, 0],
          [23.5954, 41.9044, 0],
          [23.59548, 41.90442, 0],
          [23.59557, 41.90446, 0],
          [23.59563, 41.90451, 0],
          [23.59567, 41.90457, 0],
          [23.59569, 41.90465, 0],
          [23.5957, 41.90589, 0],
          [23.59572, 41.90607, 0],
          [23.59626, 41.9074, 0],
          [23.59636, 41.90761, 0],
          [23.5967, 41.90813, 0],
          [23.59806, 41.90994, 0],
          [23.59831, 41.91021, 0],
          [23.59844, 41.9103, 0],
          [23.59895, 41.91052, 0],
          [23.59941, 41.91064, 0],
          [23.59942, 41.91064, 0],
          [23.59994, 41.91081, 0],
          [23.60034, 41.91098, 0],
          [23.60046, 41.91106, 0],
          [23.60053, 41.91113, 0],
          [23.60068, 41.91131, 0],
          [23.60094, 41.91152, 0],
          [23.60115, 41.91161, 0],
          [23.6017, 41.91176, 0],
          [23.60182, 41.91181, 0],
          [23.60189, 41.91185, 0],
          [23.60203, 41.91198, 0],
          [23.60207, 41.91205, 0],
          [23.6022, 41.9126, 0],
          [23.60225, 41.91271, 0],
          [23.60234, 41.91281, 0],
          [23.60242, 41.91287, 0],
          [23.60266, 41.91295, 0],
          [23.60268, 41.91295, 0],
          [23.60315, 41.91303, 0],
          [23.60327, 41.91304, 0],
          [23.60337, 41.91306, 0],
          [23.60339, 41.91306, 0],
          [23.60344, 41.91307, 0],
          [23.60355, 41.91313, 0],
          [23.60366, 41.91326, 0],
          [23.60371, 41.91334, 0],
          [23.60402, 41.914, 0],
          [23.60403, 41.91401, 0],
          [23.60409, 41.91417, 0],
          [23.60413, 41.91433, 0],
          [23.60413, 41.91435, 0],
          [23.60414, 41.91438, 0],
          [23.60413, 41.91443, 0],
          [23.6039, 41.91487, 0],
          [23.60383, 41.91504, 0],
          [23.60381, 41.91516, 0],
          [23.60381, 41.91522, 0],
          [23.60382, 41.9153, 0],
          [23.60385, 41.91537, 0],
          [23.60391, 41.91547, 0],
          [23.60397, 41.91552, 0],
          [23.60402, 41.91555, 0],
          [23.6046, 41.91581, 0],
          [23.60479, 41.91593, 0],
          [23.60495, 41.9161, 0],
          [23.60526, 41.91655, 0],
          [23.60563, 41.91715, 0],
          [23.60567, 41.91726, 0],
          [23.60577, 41.91789, 0],
          [23.60581, 41.91801, 0],
          [23.60586, 41.91807, 0],
          [23.60587, 41.91809, 0],
          [23.60594, 41.91814, 0],
          [23.60605, 41.9182, 0],
          [23.60606, 41.9182, 0],
          [23.60667, 41.91843, 0],
          [23.60671, 41.91844, 0],
          [23.60878, 41.91923, 0],
          [23.60895, 41.91931, 0],
          [23.6091, 41.91946, 0],
          [23.60921, 41.91959, 0],
          [23.60957, 41.92019, 0],
          [23.60963, 41.92031, 0],
          [23.60967, 41.92035, 0],
          [23.60987, 41.92064, 0],
          [23.60999, 41.92084, 0],
          [23.61005, 41.92097, 0],
          [23.61018, 41.92133, 0],
          [23.61026, 41.92147, 0],
          [23.61032, 41.92155, 0],
          [23.61039, 41.9216, 0],
          [23.61047, 41.92163, 0],
          [23.61082, 41.9217, 0],
          [23.61097, 41.92175, 0],
          [23.61106, 41.92179, 0],
          [23.61113, 41.92184, 0],
          [23.61114, 41.92186, 0],
          [23.6112, 41.92191, 0],
          [23.61124, 41.922, 0],
          [23.61129, 41.92235, 0],
          [23.61133, 41.92316, 0],
          [23.61134, 41.92321, 0],
          [23.61136, 41.92326, 0],
          [23.61136, 41.92327, 0],
          [23.61139, 41.92333, 0],
          [23.61143, 41.92338, 0],
          [23.61155, 41.92346, 0],
          [23.61189, 41.9236, 0],
          [23.61279, 41.92388, 0],
          [23.61319, 41.92408, 0],
          [23.61324, 41.92412, 0],
          [23.61343, 41.92421, 0],
          [23.61356, 41.92423, 0],
          [23.61432, 41.92427, 0],
          [23.61457, 41.92427, 0],
          [23.6146, 41.92428, 0],
          [23.61472, 41.9243, 0],
          [23.61478, 41.92432, 0],
          [23.61485, 41.92436, 0],
          [23.61492, 41.92443, 0],
          [23.61506, 41.92462, 0],
          [23.61522, 41.92492, 0],
          [23.61523, 41.92496, 0],
          [23.61544, 41.92548, 0],
          [23.61544, 41.92549, 0],
          [23.61549, 41.92558, 0],
          [23.61552, 41.9256, 0],
          [23.6156, 41.92562, 0],
          [23.61564, 41.92562, 0],
          [23.61571, 41.9256, 0],
          [23.61579, 41.92556, 0],
          [23.61587, 41.92549, 0],
          [23.6164, 41.92466, 0],
          [23.6165, 41.92454, 0],
          [23.6166, 41.92448, 0],
          [23.61668, 41.92446, 0],
          [23.61675, 41.92446, 0],
          [23.61681, 41.92448, 0],
          [23.61687, 41.92452, 0],
          [23.61699, 41.92463, 0],
          [23.61713, 41.92481, 0],
          [23.61722, 41.92496, 0],
          [23.61732, 41.92517, 0],
          [23.61745, 41.9255, 0],
          [23.61764, 41.9258, 0],
          [23.61779, 41.92598, 0],
          [23.61793, 41.92611, 0],
          [23.61821, 41.9263, 0],
          [23.61843, 41.92649, 0],
          [23.61856, 41.92662, 0],
          [23.61856, 41.92663, 0],
          [23.61866, 41.92671, 0],
          [23.61873, 41.92675, 0],
          [23.6194, 41.92696, 0],
          [23.61943, 41.92698, 0],
          [23.61961, 41.92705, 0],
          [23.62002, 41.92733, 0],
          [23.62012, 41.92743, 0],
          [23.62015, 41.92747, 0],
          [23.62024, 41.92778, 0],
          [23.62029, 41.92791, 0],
          [23.62033, 41.92817, 0],
          [23.62033, 41.92826, 0],
          [23.62022, 41.92862, 0],
          [23.6202, 41.92866, 0],
          [23.62003, 41.92913, 0],
          [23.62002, 41.92918, 0],
          [23.61991, 41.92951, 0],
          [23.61969, 41.92996, 0],
          [23.61959, 41.93021, 0],
          [23.6195, 41.93057, 0],
          [23.6195, 41.93071, 0],
          [23.61952, 41.93078, 0],
          [23.61957, 41.93086, 0],
          [23.61963, 41.93092, 0],
          [23.6201, 41.93121, 0],
          [23.62025, 41.93135, 0],
          [23.6203, 41.93144, 0],
          [23.62033, 41.93152, 0],
          [23.62034, 41.93163, 0],
          [23.62033, 41.93174, 0],
          [23.62035, 41.93183, 0],
          [23.62038, 41.93187, 0],
          [23.62046, 41.93194, 0],
          [23.62065, 41.93202, 0],
          [23.62106, 41.9321, 0],
          [23.62133, 41.93219, 0],
          [23.62146, 41.93225, 0],
          [23.62153, 41.9323, 0],
          [23.62157, 41.93232, 0],
          [23.6222, 41.93283, 0],
          [23.62236, 41.93291, 0],
          [23.62253, 41.93302, 0],
          [23.6228, 41.93336, 0],
          [23.62283, 41.93342, 0],
          [23.62323, 41.93396, 0],
          [23.62328, 41.93405, 0],
          [23.62334, 41.93431, 0],
          [23.62336, 41.93435, 0],
          [23.62337, 41.93436, 0],
          [23.62339, 41.93441, 0],
          [23.62349, 41.9345, 0],
          [23.62363, 41.93456, 0],
          [23.62393, 41.93464, 0],
          [23.62422, 41.93476, 0],
          [23.6243, 41.93482, 0],
          [23.62434, 41.93487, 0],
          [23.62437, 41.93493, 0],
          [23.6244, 41.9352, 0],
          [23.62442, 41.93528, 0],
          [23.62446, 41.93537, 0],
          [23.62465, 41.9357, 0],
          [23.62479, 41.9359, 0],
          [23.62492, 41.93603, 0],
          [23.62511, 41.93619, 0],
          [23.62542, 41.93642, 0],
          [23.62592, 41.93675, 0],
          [23.62613, 41.93691, 0],
          [23.62618, 41.93697, 0],
          [23.62628, 41.93713, 0],
          [23.62651, 41.93767, 0],
          [23.62706, 41.93938, 0],
          [23.62707, 41.93948, 0],
          [23.62706, 41.93969, 0],
          [23.62694, 41.94013, 0],
          [23.62684, 41.94067, 0],
          [23.62686, 41.94077, 0],
          [23.62689, 41.94081, 0],
          [23.62693, 41.94085, 0],
          [23.62713, 41.94098, 0],
          [23.62789, 41.9413, 0],
          [23.62796, 41.94134, 0],
          [23.62804, 41.94143, 0],
          [23.62812, 41.9416, 0],
          [23.62836, 41.94222, 0],
          [23.62837, 41.94226, 0],
          [23.6284, 41.94232, 0],
          [23.62847, 41.94239, 0],
          [23.62858, 41.94245, 0],
          [23.62869, 41.94249, 0],
          [23.62891, 41.94255, 0],
          [23.6291, 41.94262, 0],
          [23.62918, 41.94266, 0],
          [23.6293, 41.94274, 0],
          [23.62974, 41.94339, 0],
          [23.6298, 41.94345, 0],
          [23.62993, 41.94355, 0],
          [23.63028, 41.94367, 0],
          [23.63033, 41.9437, 0],
          [23.63034, 41.9437, 0],
          [23.63039, 41.94373, 0],
          [23.6304, 41.94373, 0],
          [23.63166, 41.9446, 0],
          [23.63178, 41.94472, 0],
          [23.6318, 41.94478, 0],
          [23.6318, 41.94481, 0],
          [23.63181, 41.94487, 0],
          [23.63179, 41.94557, 0],
          [23.6318, 41.94567, 0],
          [23.63186, 41.94581, 0],
          [23.63191, 41.94588, 0],
          [23.63214, 41.9461, 0],
          [23.63233, 41.94622, 0],
          [23.63234, 41.94622, 0],
          [23.63241, 41.94625, 0],
          [23.63258, 41.94629, 0],
          [23.63377, 41.94642, 0],
          [23.63404, 41.94648, 0],
          [23.63413, 41.94653, 0],
          [23.63425, 41.94662, 0],
          [23.6343, 41.94672, 0],
          [23.63432, 41.9468, 0],
          [23.63433, 41.9469, 0],
          [23.63434, 41.94744, 0],
          [23.63436, 41.94759, 0],
          [23.63438, 41.94765, 0],
          [23.63441, 41.94769, 0],
          [23.63443, 41.94773, 0],
          [23.63461, 41.94794, 0],
          [23.6355, 41.94871, 0],
          [23.63609, 41.9491, 0],
          [23.63671, 41.94933, 0],
          [23.63685, 41.94944, 0],
          [23.63691, 41.94951, 0],
          [23.637, 41.94965, 0],
          [23.6371, 41.94978, 0],
          [23.63719, 41.94983, 0],
          [23.63733, 41.94989, 0],
          [23.63749, 41.94994, 0],
          [23.63752, 41.94994, 0],
          [23.63761, 41.94996, 0],
          [23.63781, 41.94998, 0],
          [23.63863, 41.94986, 0],
          [23.63898, 41.94988, 0],
          [23.63931, 41.94994, 0],
          [23.63942, 41.94995, 0],
          [23.63989, 41.95003, 0],
          [23.64085, 41.95012, 0],
          [23.64099, 41.95015, 0],
          [23.64114, 41.9502, 0],
          [23.64148, 41.95036, 0],
          [23.64171, 41.95043, 0],
          [23.64181, 41.95044, 0],
          [23.64209, 41.95044, 0],
          [23.64271, 41.95027, 0],
          [23.64313, 41.95028, 0],
          [23.64388, 41.95036, 0],
          [23.64432, 41.95046, 0],
          [23.64454, 41.95055, 0],
          [23.64496, 41.95081, 0],
          [23.64506, 41.95089, 0],
          [23.6454, 41.95122, 0],
          [23.64553, 41.95132, 0],
          [23.64563, 41.95138, 0],
          [23.64572, 41.95142, 0],
          [23.646, 41.95148, 0],
          [23.6464, 41.95149, 0],
          [23.64657, 41.95147, 0],
          [23.64676, 41.95143, 0],
          [23.64695, 41.95137, 0],
          [23.64741, 41.95117, 0],
          [23.64801, 41.95094, 0],
          [23.64826, 41.9508, 0],
          [23.64855, 41.95059, 0],
          [23.64862, 41.95056, 0],
          [23.64867, 41.95053, 0],
          [23.64876, 41.95049, 0],
          [23.64886, 41.95046, 0],
          [23.64906, 41.95044, 0],
          [23.64945, 41.95043, 0],
          [23.64982, 41.95045, 0],
          [23.65096, 41.95068, 0],
          [23.6514, 41.95079, 0],
          [23.65158, 41.95082, 0],
          [23.65176, 41.95081, 0],
          [23.65196, 41.95078, 0],
          [23.65213, 41.95074, 0],
          [23.65241, 41.95065, 0],
          [23.65251, 41.9506, 0],
          [23.65255, 41.95057, 0],
          [23.65267, 41.95045, 0],
          [23.65268, 41.95042, 0],
          [23.65273, 41.95034, 0],
          [23.6528, 41.95026, 0],
          [23.65294, 41.95015, 0],
          [23.65304, 41.95011, 0],
          [23.65316, 41.95009, 0],
          [23.6532, 41.95009, 0],
          [23.65326, 41.95008, 0],
          [23.654, 41.9501, 0],
          [23.65419, 41.95008, 0],
          [23.65468, 41.94995, 0],
          [23.65493, 41.94986, 0],
          [23.65504, 41.94978, 0],
          [23.65522, 41.94967, 0],
          [23.65543, 41.94952, 0],
          [23.65553, 41.94947, 0],
          [23.65562, 41.94944, 0],
          [23.65582, 41.94942, 0],
          [23.65592, 41.94944, 0],
          [23.65643, 41.9495, 0],
          [23.65679, 41.9495, 0],
          [23.65763, 41.94946, 0],
          [23.65935, 41.94947, 0],
          [23.65964, 41.94954, 0],
          [23.65991, 41.94964, 0],
          [23.66055, 41.94993, 0],
          [23.66073, 41.94999, 0],
          [23.66118, 41.95008, 0],
          [23.66235, 41.95022, 0],
          [23.66243, 41.95024, 0],
          [23.66261, 41.95031, 0],
          [23.66279, 41.95044, 0],
          [23.66288, 41.95056, 0],
          [23.66315, 41.95098, 0],
          [23.66321, 41.95105, 0],
          [23.66324, 41.95107, 0],
          [23.66333, 41.95115, 0],
          [23.6634, 41.95118, 0],
          [23.66348, 41.95123, 0],
          [23.66374, 41.95128, 0],
          [23.6648, 41.95142, 0],
          [23.66508, 41.95142, 0],
          [23.66539, 41.95138, 0],
          [23.66574, 41.95128, 0],
          [23.66574, 41.95127, 0],
          [23.666, 41.9512, 0],
          [23.66651, 41.95119, 0],
          [23.6667, 41.95117, 0],
          [23.66723, 41.95101, 0],
          [23.66748, 41.95091, 0],
          [23.66758, 41.95085, 0],
          [23.66788, 41.95059, 0],
          [23.668, 41.95051, 0],
          [23.66805, 41.95049, 0],
          [23.66806, 41.95048, 0],
          [23.66812, 41.95046, 0],
          [23.66818, 41.95045, 0],
          [23.66847, 41.95046, 0],
          [23.66867, 41.9505, 0],
          [23.66974, 41.95079, 0],
          [23.66996, 41.95083, 0],
          [23.67015, 41.95085, 0],
          [23.67087, 41.95087, 0],
          [23.67118, 41.95086, 0],
          [23.67156, 41.95088, 0],
          [23.67183, 41.95092, 0],
          [23.67194, 41.95095, 0],
          [23.67224, 41.95109, 0],
          [23.67247, 41.95118, 0],
          [23.67295, 41.95128, 0],
          [23.67444, 41.95144, 0],
          [23.67464, 41.95148, 0],
          [23.67492, 41.95158, 0],
          [23.67511, 41.95168, 0],
          [23.67531, 41.95174, 0],
          [23.67534, 41.95174, 0],
          [23.67588, 41.95182, 0],
          [23.67627, 41.95191, 0],
          [23.67676, 41.95195, 0],
          [23.67679, 41.95196, 0],
          [23.67699, 41.95199, 0],
          [23.67713, 41.95203, 0],
          [23.67725, 41.95209, 0],
          [23.67738, 41.95217, 0],
          [23.67758, 41.95234, 0],
          [23.67768, 41.9524, 0],
          [23.67814, 41.9526, 0],
          [23.67847, 41.95271, 0],
          [23.67877, 41.95283, 0],
          [23.67895, 41.95288, 0],
          [23.67928, 41.953, 0],
          [23.67983, 41.9533, 0],
          [23.6801, 41.95349, 0],
          [23.68098, 41.95421, 0],
          [23.68105, 41.95429, 0],
          [23.68105, 41.9543, 0],
          [23.68113, 41.95442, 0],
          [23.68118, 41.95463, 0],
          [23.68121, 41.95482, 0],
          [23.68126, 41.95502, 0],
          [23.68153, 41.95566, 0],
          [23.68159, 41.95574, 0],
          [23.68174, 41.9559, 0],
          [23.68184, 41.95615, 0],
          [23.68187, 41.95627, 0],
          [23.68189, 41.95641, 0],
          [23.68145, 41.95652, 0],
          [23.68145, 41.95656, 0],
          [23.68149, 41.95671, 0],
          [23.6816, 41.95683, 0],
          [23.68261, 41.95821, 0],
          [23.6833, 41.95905, 0],
          [23.68365, 41.9594, 0],
          [23.68378, 41.95948, 0],
          [23.68413, 41.95955, 0],
          [23.68441, 41.95973, 0],
          [23.68506, 41.96049, 0],
          [23.68556, 41.9612, 0],
          [23.6858, 41.96163, 0],
          [23.68591, 41.96175, 0],
          [23.68617, 41.96191, 0],
          [23.6863, 41.96197, 0],
          [23.68693, 41.9622, 0],
          [23.68715, 41.9623, 0],
          [23.68737, 41.96242, 0],
          [23.68748, 41.9625, 0],
          [23.6875, 41.96251, 0],
          [23.68774, 41.96271, 0],
          [23.688, 41.96302, 0],
          [23.68841, 41.96337, 0],
          [23.68856, 41.96353, 0],
          [23.68866, 41.96366, 0],
          [23.68869, 41.96373, 0],
          [23.68875, 41.96383, 0],
          [23.68888, 41.96411, 0],
          [23.68897, 41.9644, 0],
          [23.68915, 41.96475, 0],
          [23.68922, 41.96484, 0],
          [23.68929, 41.96496, 0],
          [23.6893, 41.96497, 0],
          [23.68931, 41.965, 0],
          [23.68931, 41.96505, 0],
          [23.68934, 41.96522, 0],
          [23.68943, 41.96541, 0],
          [23.68948, 41.96546, 0],
          [23.68951, 41.96551, 0],
          [23.69004, 41.96599, 0],
          [23.69021, 41.96621, 0],
          [23.69032, 41.96645, 0],
          [23.69038, 41.96655, 0],
          [23.69048, 41.96665, 0],
          [23.6905, 41.96666, 0],
          [23.69051, 41.96667, 0],
          [23.69053, 41.96667, 0],
          [23.69056, 41.96668, 0],
          [23.69068, 41.96668, 0],
          [23.6907, 41.96667, 0],
          [23.69071, 41.96667, 0],
          [23.69073, 41.96666, 0],
          [23.69074, 41.96666, 0],
          [23.69074, 41.96665, 0],
          [23.69075, 41.96664, 0],
          [23.69075, 41.96663, 0],
          [23.69076, 41.96662, 0],
          [23.69076, 41.9666, 0],
          [23.69077, 41.96658, 0],
          [23.69077, 41.96644, 0],
          [23.69076, 41.96638, 0],
          [23.69077, 41.96613, 0],
          [23.69076, 41.96608, 0],
          [23.69075, 41.96606, 0],
          [23.69074, 41.96602, 0],
          [23.69068, 41.96591, 0],
          [23.69053, 41.96574, 0],
          [23.6902, 41.96526, 0],
          [23.69013, 41.96514, 0],
          [23.69009, 41.96502, 0],
          [23.69002, 41.96473, 0],
          [23.69002, 41.96458, 0],
          [23.69003, 41.96451, 0],
          [23.69008, 41.96441, 0],
          [23.69012, 41.96437, 0],
          [23.69038, 41.96427, 0],
          [23.69121, 41.96413, 0],
          [23.69123, 41.96412, 0],
          [23.69238, 41.96386, 0],
          [23.69245, 41.96386, 0],
          [23.6925, 41.96385, 0],
          [23.69274, 41.96386, 0],
          [23.69313, 41.96393, 0],
          [23.69345, 41.96393, 0],
          [23.69349, 41.96394, 0],
          [23.69353, 41.96394, 0],
          [23.69364, 41.96397, 0],
          [23.69369, 41.964, 0],
          [23.69376, 41.96412, 0],
          [23.69377, 41.96421, 0],
          [23.69379, 41.96428, 0],
          [23.69379, 41.96431, 0],
          [23.6938, 41.96434, 0],
          [23.69382, 41.96436, 0],
          [23.69384, 41.96437, 0],
          [23.69385, 41.96438, 0],
          [23.69387, 41.96438, 0],
          [23.69389, 41.96439, 0],
          [23.69401, 41.96439, 0],
          [23.69401, 41.96438, 0],
          [23.69403, 41.96438, 0],
          [23.69405, 41.96436, 0],
          [23.69407, 41.96435, 0],
          [23.69427, 41.96419, 0],
          [23.69437, 41.96416, 0],
          [23.69454, 41.96415, 0],
          [23.6955, 41.9642, 0],
          [23.69571, 41.96425, 0],
          [23.69581, 41.96431, 0],
          [23.69602, 41.96451, 0],
          [23.69609, 41.96456, 0],
          [23.69613, 41.9646, 0],
          [23.69617, 41.96463, 0],
          [23.69622, 41.96465, 0],
          [23.69626, 41.96468, 0],
          [23.69637, 41.96472, 0],
          [23.69662, 41.96484, 0],
          [23.69672, 41.96492, 0],
          [23.69696, 41.96517, 0],
          [23.69703, 41.96521, 0],
          [23.69708, 41.96523, 0],
          [23.69715, 41.96527, 0],
          [23.69752, 41.9654, 0],
          [23.69771, 41.96549, 0],
          [23.69779, 41.96557, 0],
          [23.69789, 41.96573, 0],
          [23.69791, 41.9658, 0],
          [23.69791, 41.96581, 0],
          [23.69798, 41.96596, 0],
          [23.69801, 41.96599, 0],
          [23.69803, 41.966, 0],
          [23.69808, 41.96601, 0],
          [23.69817, 41.96601, 0],
          [23.69819, 41.966, 0],
          [23.6982, 41.966, 0],
          [23.69822, 41.96599, 0],
          [23.69822, 41.96598, 0],
          [23.69824, 41.96596, 0],
          [23.69828, 41.9659, 0],
          [23.69832, 41.96579, 0],
          [23.69841, 41.96564, 0],
          [23.69846, 41.96559, 0],
          [23.69859, 41.96553, 0],
          [23.69863, 41.96552, 0],
          [23.69867, 41.9655, 0],
          [23.69872, 41.96549, 0],
          [23.69876, 41.96549, 0],
          [23.69881, 41.96548, 0],
          [23.69935, 41.96549, 0],
          [23.69962, 41.96548, 0],
          [23.70003, 41.96544, 0],
          [23.7001, 41.96545, 0],
          [23.70014, 41.96545, 0],
          [23.7002, 41.96547, 0],
          [23.70026, 41.9655, 0],
          [23.70028, 41.96552, 0],
          [23.70028, 41.96555, 0],
          [23.70029, 41.96557, 0],
          [23.70029, 41.9656, 0],
          [23.70028, 41.96562, 0],
          [23.70028, 41.96563, 0],
          [23.70027, 41.96565, 0],
          [23.70027, 41.96566, 0],
          [23.70026, 41.96567, 0],
          [23.70024, 41.96568, 0],
          [23.70022, 41.9657, 0],
          [23.70013, 41.96575, 0],
          [23.69961, 41.96588, 0],
          [23.69943, 41.96594, 0],
          [23.69924, 41.96603, 0],
          [23.6992, 41.96606, 0],
          [23.69916, 41.9661, 0],
          [23.6991, 41.96621, 0],
          [23.69909, 41.96627, 0],
          [23.69909, 41.96633, 0],
          [23.69911, 41.96644, 0],
          [23.69916, 41.96655, 0],
          [23.69954, 41.96701, 0],
          [23.69965, 41.96712, 0],
          [23.69973, 41.96715, 0],
          [23.69988, 41.96715, 0],
          [23.6999, 41.96714, 0],
          [23.69992, 41.96714, 0],
          [23.7, 41.96708, 0],
          [23.70003, 41.96704, 0],
          [23.70009, 41.96698, 0],
          [23.7002, 41.96684, 0],
          [23.70026, 41.96679, 0],
          [23.70032, 41.96676, 0],
          [23.70041, 41.96673, 0],
          [23.70061, 41.96673, 0],
          [23.70067, 41.96675, 0],
          [23.7008, 41.96682, 0],
          [23.70103, 41.96707, 0],
          [23.70108, 41.9671, 0],
          [23.70113, 41.96712, 0],
          [23.70123, 41.96714, 0],
          [23.70136, 41.96714, 0],
          [23.70215, 41.96692, 0],
          [23.70229, 41.96687, 0],
          [23.70297, 41.96668, 0],
          [23.7034, 41.96661, 0],
          [23.70461, 41.96648, 0],
          [23.70534, 41.96585, 0],
          [23.70547, 41.96576, 0],
          [23.70569, 41.96565, 0],
          [23.70584, 41.96562, 0],
          [23.70594, 41.96562, 0],
          [23.70631, 41.96569, 0],
          [23.70732, 41.966, 0],
          [23.70747, 41.96607, 0],
          [23.70786, 41.9663, 0],
          [23.70803, 41.96638, 0],
          [23.70817, 41.96642, 0],
          [23.70833, 41.96644, 0],
          [23.70924, 41.96638, 0],
          [23.70934, 41.96636, 0],
          [23.70942, 41.96633, 0],
          [23.70951, 41.96631, 0],
          [23.70978, 41.96621, 0],
          [23.70995, 41.96619, 0],
          [23.71005, 41.96619, 0],
          [23.71035, 41.96623, 0],
          [23.71048, 41.96623, 0],
          [23.71069, 41.96618, 0],
          [23.71114, 41.96598, 0],
          [23.71129, 41.96594, 0],
          [23.71136, 41.96593, 0],
          [23.71154, 41.96593, 0],
          [23.71173, 41.96596, 0],
          [23.71195, 41.96605, 0],
          [23.71237, 41.9663, 0],
          [23.71245, 41.96633, 0],
          [23.71259, 41.96635, 0],
          [23.71275, 41.96635, 0],
          [23.71292, 41.96632, 0],
          [23.71299, 41.96632, 0],
          [23.71305, 41.96631, 0],
          [23.71316, 41.96633, 0],
          [23.71321, 41.96635, 0],
          [23.71329, 41.96641, 0],
          [23.71332, 41.96644, 0],
          [23.71349, 41.96666, 0],
          [23.71358, 41.96695, 0],
          [23.7138, 41.9673, 0],
          [23.71389, 41.96742, 0],
          [23.71398, 41.96747, 0],
          [23.7141, 41.96749, 0],
          [23.71424, 41.96749, 0],
          [23.71438, 41.96747, 0],
          [23.71498, 41.96728, 0],
          [23.71525, 41.96722, 0],
          [23.71553, 41.96711, 0],
          [23.71563, 41.96708, 0],
          [23.71577, 41.96706, 0],
          [23.7158, 41.96705, 0],
          [23.71597, 41.96705, 0],
          [23.71621, 41.96709, 0],
          [23.71636, 41.96714, 0],
          [23.7168, 41.96736, 0],
          [23.71691, 41.96739, 0],
          [23.71705, 41.96739, 0],
          [23.71718, 41.96736, 0],
          [23.71757, 41.9672, 0],
          [23.71779, 41.96714, 0],
          [23.71827, 41.96687, 0],
          [23.71829, 41.96685, 0],
          [23.71851, 41.96674, 0],
          [23.71892, 41.9666, 0],
          [23.71916, 41.96643, 0],
          [23.71928, 41.96639, 0],
          [23.71936, 41.96638, 0],
          [23.71945, 41.96638, 0],
          [23.71969, 41.96641, 0],
          [23.7198, 41.96644, 0],
          [23.7201, 41.96648, 0],
          [23.7202, 41.96648, 0],
          [23.72042, 41.96646, 0],
          [23.72062, 41.96647, 0],
          [23.72073, 41.9665, 0],
          [23.72074, 41.9665, 0],
          [23.72127, 41.96669, 0],
          [23.72133, 41.96669, 0],
          [23.72138, 41.9667, 0],
          [23.72153, 41.96667, 0],
          [23.72162, 41.96663, 0],
          [23.72173, 41.9666, 0],
          [23.72189, 41.9666, 0],
          [23.72217, 41.96663, 0],
          [23.72235, 41.96663, 0],
          [23.7224, 41.96662, 0],
          [23.72245, 41.9666, 0],
          [23.72253, 41.96654, 0],
          [23.72267, 41.96638, 0],
          [23.72302, 41.96606, 0],
          [23.72314, 41.96592, 0],
          [23.72325, 41.96574, 0],
          [23.72329, 41.96563, 0],
          [23.7233, 41.96562, 0],
          [23.72336, 41.96548, 0],
          [23.72345, 41.96531, 0],
          [23.72347, 41.96529, 0],
          [23.72348, 41.96526, 0],
          [23.72353, 41.96523, 0],
          [23.72359, 41.96518, 0],
          [23.72367, 41.96514, 0],
          [23.7239, 41.96505, 0],
          [23.7241, 41.96494, 0],
          [23.7243, 41.96472, 0],
          [23.7244, 41.96454, 0],
          [23.72443, 41.96445, 0],
          [23.72445, 41.96434, 0],
          [23.72445, 41.96429, 0],
          [23.72444, 41.96422, 0],
          [23.72435, 41.96393, 0],
          [23.72426, 41.96329, 0],
          [23.72424, 41.96325, 0],
          [23.72419, 41.9632, 0],
          [23.72414, 41.96317, 0],
          [23.72385, 41.96308, 0],
          [23.72367, 41.96299, 0],
          [23.7236, 41.96293, 0],
          [23.72357, 41.96288, 0],
          [23.72356, 41.96285, 0],
          [23.72356, 41.96282, 0],
          [23.72357, 41.9628, 0],
          [23.72357, 41.96277, 0],
          [23.7236, 41.96272, 0],
          [23.72361, 41.96269, 0],
          [23.72363, 41.96267, 0],
          [23.72375, 41.96259, 0],
          [23.72384, 41.96255, 0],
          [23.724, 41.96251, 0],
          [23.72441, 41.96252, 0],
          [23.72606, 41.96272, 0],
          [23.72638, 41.96274, 0],
          [23.72664, 41.96271, 0],
          [23.72724, 41.9627, 0],
          [23.72744, 41.96271, 0],
          [23.72746, 41.96272, 0],
          [23.72763, 41.96275, 0],
          [23.72772, 41.96279, 0],
          [23.72786, 41.96287, 0],
          [23.72837, 41.96326, 0],
          [23.7284, 41.96327, 0],
          [23.72853, 41.96329, 0],
          [23.72918, 41.96327, 0],
          [23.72975, 41.9633, 0],
          [23.72991, 41.96332, 0],
        ],
      },
      properties: {
        name: "Упътвания до Plovdiv до Villa Ortsevo, Вила, Орцево",
        tessellate: !0,
      },
    },
  ],
  Vh = { type: Wh, features: bh },
  $h = "FeatureCollection",
  Qh = [
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [23.32188, 42.69772, 0],
          [23.32183, 42.69774, 0],
          [23.32169, 42.69775, 0],
          [23.32043, 42.69805, 0],
          [23.31035, 42.69994, 0],
          [23.31032, 42.69994, 0],
          [23.29879, 42.70185, 0],
          [23.29703, 42.70217, 0],
          [23.29688, 42.70219, 0],
          [23.29653, 42.70227, 0],
          [23.29624, 42.70237, 0],
          [23.29588, 42.70255, 0],
          [23.29394, 42.70378, 0],
          [23.29372, 42.70389, 0],
          [23.29348, 42.70399, 0],
          [23.2929, 42.70418, 0],
          [23.29256, 42.70426, 0],
          [23.29175, 42.70442, 0],
          [23.29057, 42.70461, 0],
          [23.28807, 42.70513, 0],
          [23.28754, 42.70526, 0],
          [23.28494, 42.70598, 0],
          [23.28456, 42.70611, 0],
          [23.28446, 42.70613, 0],
          [23.284, 42.70626, 0],
          [23.27932, 42.70745, 0],
          [23.27931, 42.70745, 0],
          [23.27789, 42.70783, 0],
          [23.27679, 42.70818, 0],
          [23.27512, 42.70886, 0],
          [23.27472, 42.70904, 0],
          [23.27367, 42.70956, 0],
          [23.27359, 42.70959, 0],
          [23.27258, 42.71016, 0],
          [23.27221, 42.71035, 0],
          [23.271, 42.71105, 0],
          [23.27084, 42.71112, 0],
          [23.26584, 42.71382, 0],
          [23.26054, 42.71676, 0],
          [23.25496, 42.71971, 0],
          [23.25403, 42.72017, 0],
          [23.25386, 42.72024, 0],
          [23.25368, 42.72033, 0],
          [23.25333, 42.72046, 0],
          [23.25168, 42.72133, 0],
          [23.25062, 42.72193, 0],
          [23.2477, 42.72349, 0],
          [23.24514, 42.72491, 0],
          [23.24492, 42.72502, 0],
          [23.24431, 42.72539, 0],
          [23.2443, 42.72547, 0],
          [23.24339, 42.72594, 0],
          [23.24268, 42.72627, 0],
          [23.24228, 42.72644, 0],
          [23.2422, 42.72652, 0],
          [23.24213, 42.72661, 0],
          [23.24213, 42.72667, 0],
          [23.24211, 42.72674, 0],
          [23.24208, 42.7268, 0],
          [23.24203, 42.72687, 0],
          [23.2419, 42.72698, 0],
          [23.24172, 42.72706, 0],
          [23.24165, 42.72708, 0],
          [23.2415, 42.72714, 0],
          [23.24131, 42.72719, 0],
          [23.24122, 42.7272, 0],
          [23.24115, 42.7272, 0],
          [23.24109, 42.72719, 0],
          [23.24102, 42.72717, 0],
          [23.24095, 42.72713, 0],
          [23.2409, 42.72709, 0],
          [23.24089, 42.72709, 0],
          [23.24085, 42.72704, 0],
          [23.24082, 42.72699, 0],
          [23.24078, 42.72686, 0],
          [23.24078, 42.72681, 0],
          [23.24079, 42.72676, 0],
          [23.24083, 42.72667, 0],
          [23.2409, 42.72657, 0],
          [23.24093, 42.72655, 0],
          [23.24093, 42.72641, 0],
          [23.24091, 42.72637, 0],
          [23.23619, 42.72035, 0],
          [23.23616, 42.72025, 0],
          [23.2361, 42.72013, 0],
          [23.23607, 42.72, 0],
          [23.23501, 42.71861, 0],
          [23.23488, 42.71846, 0],
          [23.23448, 42.71795, 0],
          [23.23406, 42.71745, 0],
          [23.23402, 42.71738, 0],
          [23.23395, 42.7173, 0],
          [23.23388, 42.71719, 0],
          [23.23328, 42.71642, 0],
          [23.23328, 42.71641, 0],
          [23.23298, 42.71602, 0],
          [23.23269, 42.71567, 0],
          [23.23212, 42.71489, 0],
          [23.2321, 42.71485, 0],
          [23.23166, 42.71424, 0],
          [23.23112, 42.71363, 0],
          [23.23077, 42.71331, 0],
          [23.23076, 42.71331, 0],
          [23.23072, 42.71327, 0],
          [23.23067, 42.71323, 0],
          [23.23062, 42.71318, 0],
          [23.23061, 42.71318, 0],
          [23.23052, 42.7131, 0],
          [23.23045, 42.71305, 0],
          [23.23038, 42.71299, 0],
          [23.23008, 42.71278, 0],
          [23.22973, 42.71257, 0],
          [23.22972, 42.71256, 0],
          [23.22907, 42.71223, 0],
          [23.2287, 42.71207, 0],
          [23.2284, 42.71196, 0],
          [23.22838, 42.71196, 0],
          [23.22825, 42.71191, 0],
          [23.22743, 42.71168, 0],
          [23.22539, 42.71123, 0],
          [23.22537, 42.71122, 0],
          [23.22255, 42.71063, 0],
          [23.22073, 42.71021, 0],
          [23.21906, 42.70966, 0],
          [23.21903, 42.70964, 0],
          [23.21888, 42.70959, 0],
          [23.21787, 42.70919, 0],
          [23.21746, 42.70901, 0],
          [23.21654, 42.70856, 0],
          [23.21542, 42.70792, 0],
          [23.2154, 42.7079, 0],
          [23.21487, 42.70757, 0],
          [23.21479, 42.70751, 0],
          [23.21432, 42.7072, 0],
          [23.21431, 42.70719, 0],
          [23.2139, 42.7069, 0],
          [23.21388, 42.70688, 0],
          [23.21332, 42.70645, 0],
          [23.2129, 42.7061, 0],
          [23.2117, 42.70497, 0],
          [23.21162, 42.70488, 0],
          [23.21126, 42.70454, 0],
          [23.21057, 42.70383, 0],
          [23.21044, 42.70371, 0],
          [23.21008, 42.70334, 0],
          [23.2099, 42.70318, 0],
          [23.2094, 42.70267, 0],
          [23.20901, 42.7023, 0],
          [23.20822, 42.70148, 0],
          [23.20769, 42.70097, 0],
          [23.20766, 42.70095, 0],
          [23.2074, 42.70067, 0],
          [23.20725, 42.70053, 0],
          [23.20686, 42.70013, 0],
          [23.20677, 42.70006, 0],
          [23.20635, 42.69964, 0],
          [23.20565, 42.69901, 0],
          [23.20409, 42.69778, 0],
          [23.20395, 42.69769, 0],
          [23.20392, 42.69766, 0],
          [23.2024, 42.69667, 0],
          [23.20138, 42.6961, 0],
          [23.20009, 42.69545, 0],
          [23.19944, 42.69516, 0],
          [23.19844, 42.69475, 0],
          [23.19734, 42.69435, 0],
          [23.19608, 42.69395, 0],
          [23.19434, 42.69349, 0],
          [23.1916, 42.69302, 0],
          [23.19005, 42.69281, 0],
          [23.18816, 42.69269, 0],
          [23.18607, 42.69267, 0],
          [23.17413, 42.69236, 0],
          [23.17408, 42.69235, 0],
          [23.17365, 42.69235, 0],
          [23.16909, 42.69222, 0],
          [23.16905, 42.69221, 0],
          [23.16805, 42.69218, 0],
          [23.16736, 42.69214, 0],
          [23.16609, 42.69201, 0],
          [23.16566, 42.69195, 0],
          [23.16426, 42.69168, 0],
          [23.1632, 42.6914, 0],
          [23.1621, 42.69104, 0],
          [23.16166, 42.69087, 0],
          [23.1615, 42.69082, 0],
          [23.16126, 42.69072, 0],
          [23.16103, 42.69061, 0],
          [23.16035, 42.69032, 0],
          [23.15941, 42.68982, 0],
          [23.15846, 42.6892, 0],
          [23.15781, 42.68873, 0],
          [23.15739, 42.6884, 0],
          [23.15676, 42.68786, 0],
          [23.15568, 42.68685, 0],
          [23.15563, 42.68681, 0],
          [23.15529, 42.6864, 0],
          [23.15469, 42.68556, 0],
          [23.15459, 42.68538, 0],
          [23.15449, 42.68523, 0],
          [23.15435, 42.68499, 0],
          [23.15424, 42.68477, 0],
          [23.15423, 42.68476, 0],
          [23.15417, 42.68464, 0],
          [23.15404, 42.68442, 0],
          [23.15391, 42.68415, 0],
          [23.15367, 42.68355, 0],
          [23.15333, 42.68247, 0],
          [23.15304, 42.68143, 0],
          [23.15239, 42.67854, 0],
          [23.15224, 42.67798, 0],
          [23.15223, 42.67797, 0],
          [23.15199, 42.67708, 0],
          [23.15161, 42.67553, 0],
          [23.15161, 42.67552, 0],
          [23.1515, 42.67508, 0],
          [23.15139, 42.67454, 0],
          [23.15095, 42.67274, 0],
          [23.15078, 42.67216, 0],
          [23.15075, 42.67201, 0],
          [23.15072, 42.67192, 0],
          [23.1507, 42.67182, 0],
          [23.15051, 42.67116, 0],
          [23.14998, 42.66897, 0],
          [23.14968, 42.66797, 0],
          [23.14964, 42.66788, 0],
          [23.14962, 42.66785, 0],
          [23.14957, 42.66772, 0],
          [23.14957, 42.66771, 0],
          [23.14955, 42.66768, 0],
          [23.14943, 42.66737, 0],
          [23.1492, 42.66692, 0],
          [23.14917, 42.66688, 0],
          [23.14904, 42.66665, 0],
          [23.14861, 42.66599, 0],
          [23.14821, 42.6655, 0],
          [23.1477, 42.66494, 0],
          [23.1473, 42.66456, 0],
          [23.1472, 42.66449, 0],
          [23.14685, 42.66419, 0],
          [23.14605, 42.66361, 0],
          [23.14603, 42.6636, 0],
          [23.14559, 42.66331, 0],
          [23.14487, 42.66291, 0],
          [23.1442, 42.6626, 0],
          [23.14295, 42.66212, 0],
          [23.14261, 42.66202, 0],
          [23.14236, 42.66193, 0],
          [23.14171, 42.66173, 0],
          [23.13912, 42.66107, 0],
          [23.13753, 42.66061, 0],
          [23.13752, 42.66061, 0],
          [23.13596, 42.66016, 0],
          [23.13571, 42.66007, 0],
          [23.13498, 42.65975, 0],
          [23.13497, 42.65975, 0],
          [23.1342, 42.65934, 0],
          [23.13355, 42.65894, 0],
          [23.13285, 42.6584, 0],
          [23.1322, 42.65782, 0],
          [23.13195, 42.65756, 0],
          [23.13192, 42.65752, 0],
          [23.13165, 42.65723, 0],
          [23.13151, 42.65704, 0],
          [23.13141, 42.65692, 0],
          [23.13107, 42.65643, 0],
          [23.13074, 42.65587, 0],
          [23.13064, 42.65566, 0],
          [23.13063, 42.65566, 0],
          [23.1306, 42.65561, 0],
          [23.13047, 42.65533, 0],
          [23.13034, 42.65499, 0],
          [23.13023, 42.65464, 0],
          [23.13011, 42.65419, 0],
          [23.13006, 42.65385, 0],
          [23.13002, 42.65347, 0],
          [23.13, 42.65314, 0],
          [23.13, 42.65265, 0],
          [23.13003, 42.65222, 0],
          [23.13011, 42.65175, 0],
          [23.1302, 42.65137, 0],
          [23.13044, 42.65058, 0],
          [23.13123, 42.64841, 0],
          [23.13128, 42.64821, 0],
          [23.13128, 42.6482, 0],
          [23.1313, 42.64815, 0],
          [23.13132, 42.64806, 0],
          [23.13142, 42.64774, 0],
          [23.13151, 42.64729, 0],
          [23.13155, 42.64684, 0],
          [23.13156, 42.64647, 0],
          [23.1315, 42.64561, 0],
          [23.13145, 42.64532, 0],
          [23.13134, 42.64485, 0],
          [23.13128, 42.64466, 0],
          [23.13097, 42.64392, 0],
          [23.13068, 42.64339, 0],
          [23.1295, 42.64153, 0],
          [23.12929, 42.64117, 0],
          [23.12682, 42.63727, 0],
          [23.12668, 42.63702, 0],
          [23.12665, 42.63699, 0],
          [23.12613, 42.63616, 0],
          [23.12593, 42.63587, 0],
          [23.12579, 42.63561, 0],
          [23.12566, 42.63521, 0],
          [23.12563, 42.63515, 0],
          [23.12561, 42.63508, 0],
          [23.12548, 42.63473, 0],
          [23.12547, 42.63467, 0],
          [23.1254, 42.63451, 0],
          [23.12525, 42.6341, 0],
          [23.12525, 42.63409, 0],
          [23.1252, 42.63392, 0],
          [23.12519, 42.63387, 0],
          [23.12516, 42.63381, 0],
          [23.12511, 42.63362, 0],
          [23.12509, 42.63357, 0],
          [23.12501, 42.63323, 0],
          [23.12501, 42.63322, 0],
          [23.12497, 42.63305, 0],
          [23.12491, 42.63265, 0],
          [23.12488, 42.63216, 0],
          [23.12489, 42.63182, 0],
          [23.12491, 42.63164, 0],
          [23.12492, 42.6316, 0],
          [23.12492, 42.63158, 0],
          [23.12506, 42.63093, 0],
          [23.12514, 42.63066, 0],
          [23.1253, 42.63023, 0],
          [23.12558, 42.6296, 0],
          [23.12573, 42.6293, 0],
          [23.12652, 42.62817, 0],
          [23.12688, 42.62778, 0],
          [23.12742, 42.62731, 0],
          [23.12769, 42.6271, 0],
          [23.12822, 42.62672, 0],
          [23.12881, 42.62635, 0],
          [23.12922, 42.62613, 0],
          [23.13023, 42.62567, 0],
          [23.1313, 42.62528, 0],
          [23.13251, 42.62491, 0],
          [23.13388, 42.62445, 0],
          [23.13422, 42.62432, 0],
          [23.13492, 42.62402, 0],
          [23.13563, 42.62366, 0],
          [23.13634, 42.62323, 0],
          [23.13717, 42.6226, 0],
          [23.13761, 42.62217, 0],
          [23.13795, 42.62195, 0],
          [23.13834, 42.62157, 0],
          [23.13859, 42.62122, 0],
          [23.13872, 42.62106, 0],
          [23.13887, 42.62084, 0],
          [23.13902, 42.62058, 0],
          [23.13916, 42.62031, 0],
          [23.13929, 42.61998, 0],
          [23.13941, 42.61962, 0],
          [23.1395, 42.61929, 0],
          [23.13958, 42.6189, 0],
          [23.13963, 42.61852, 0],
          [23.13963, 42.6185, 0],
          [23.13964, 42.61847, 0],
          [23.13968, 42.61787, 0],
          [23.13968, 42.61742, 0],
          [23.13966, 42.61702, 0],
          [23.13954, 42.61628, 0],
          [23.13944, 42.6159, 0],
          [23.1394, 42.61578, 0],
          [23.13904, 42.61494, 0],
          [23.1387, 42.61435, 0],
          [23.13821, 42.61368, 0],
          [23.1377, 42.6131, 0],
          [23.13723, 42.61266, 0],
          [23.13664, 42.6122, 0],
          [23.13625, 42.61193, 0],
          [23.13281, 42.60979, 0],
          [23.1326, 42.60968, 0],
          [23.13205, 42.60935, 0],
          [23.13193, 42.60929, 0],
          [23.13115, 42.6088, 0],
          [23.13061, 42.60842, 0],
          [23.12987, 42.60785, 0],
          [23.12911, 42.60719, 0],
          [23.12902, 42.60713, 0],
          [23.12901, 42.60713, 0],
          [23.12856, 42.60679, 0],
          [23.12762, 42.60582, 0],
          [23.12715, 42.60529, 0],
          [23.12714, 42.60527, 0],
          [23.12711, 42.60524, 0],
          [23.12672, 42.60476, 0],
          [23.12617, 42.604, 0],
          [23.1258, 42.60354, 0],
          [23.12516, 42.60262, 0],
          [23.12491, 42.60202, 0],
          [23.12355, 42.59972, 0],
          [23.12267, 42.59833, 0],
          [23.12213, 42.59753, 0],
          [23.1218, 42.59691, 0],
          [23.12153, 42.59646, 0],
          [23.12123, 42.59591, 0],
          [23.12043, 42.59456, 0],
          [23.12025, 42.5942, 0],
          [23.12001, 42.59359, 0],
          [23.11982, 42.59302, 0],
          [23.11975, 42.59273, 0],
          [23.11975, 42.5927, 0],
          [23.11969, 42.59245, 0],
          [23.11958, 42.59188, 0],
          [23.11955, 42.59146, 0],
          [23.11955, 42.59066, 0],
          [23.11965, 42.58976, 0],
          [23.1197, 42.58949, 0],
          [23.11975, 42.58913, 0],
          [23.11983, 42.58877, 0],
          [23.12022, 42.58664, 0],
          [23.12022, 42.58663, 0],
          [23.12055, 42.58488, 0],
          [23.12055, 42.58486, 0],
          [23.12059, 42.58469, 0],
          [23.12105, 42.58214, 0],
          [23.12107, 42.58143, 0],
          [23.12104, 42.58113, 0],
          [23.12099, 42.58088, 0],
          [23.12095, 42.58076, 0],
          [23.12087, 42.58046, 0],
          [23.12071, 42.58002, 0],
          [23.12022, 42.57904, 0],
          [23.11955, 42.57781, 0],
          [23.11806, 42.57488, 0],
          [23.11766, 42.57405, 0],
          [23.1174, 42.57344, 0],
          [23.11709, 42.57261, 0],
          [23.11654, 42.57087, 0],
          [23.11608, 42.56902, 0],
          [23.11597, 42.56867, 0],
          [23.11545, 42.56664, 0],
          [23.11534, 42.56609, 0],
          [23.11534, 42.56608, 0],
          [23.11533, 42.56606, 0],
          [23.11528, 42.56557, 0],
          [23.11528, 42.56513, 0],
          [23.11532, 42.56452, 0],
          [23.11536, 42.56418, 0],
          [23.11537, 42.56415, 0],
          [23.11556, 42.56262, 0],
          [23.11557, 42.56258, 0],
          [23.11561, 42.56231, 0],
          [23.11572, 42.5619, 0],
          [23.1158, 42.5617, 0],
          [23.11582, 42.56163, 0],
          [23.11593, 42.56134, 0],
          [23.11629, 42.56066, 0],
          [23.11632, 42.56062, 0],
          [23.11776, 42.5582, 0],
          [23.11785, 42.55803, 0],
          [23.11874, 42.55651, 0],
          [23.11897, 42.55615, 0],
          [23.11955, 42.55538, 0],
          [23.12002, 42.55487, 0],
          [23.12027, 42.55464, 0],
          [23.12136, 42.55377, 0],
          [23.12283, 42.55268, 0],
          [23.12345, 42.55219, 0],
          [23.12398, 42.55171, 0],
          [23.12442, 42.55123, 0],
          [23.1248, 42.55072, 0],
          [23.12504, 42.55033, 0],
          [23.12524, 42.54994, 0],
          [23.12633, 42.54743, 0],
          [23.12691, 42.54618, 0],
          [23.1276, 42.54457, 0],
          [23.12769, 42.5444, 0],
          [23.12833, 42.54296, 0],
          [23.12835, 42.54289, 0],
          [23.13132, 42.53621, 0],
          [23.13185, 42.53515, 0],
          [23.13261, 42.53373, 0],
          [23.13262, 42.53372, 0],
          [23.1327, 42.53357, 0],
          [23.13273, 42.53353, 0],
          [23.13334, 42.53245, 0],
          [23.1336, 42.53192, 0],
          [23.13373, 42.53162, 0],
          [23.13374, 42.53157, 0],
          [23.13386, 42.5312, 0],
          [23.13393, 42.53079, 0],
          [23.134, 42.53047, 0],
          [23.13405, 42.52965, 0],
          [23.13411, 42.52924, 0],
          [23.13414, 42.52856, 0],
          [23.13417, 42.52679, 0],
          [23.13413, 42.52516, 0],
          [23.13414, 42.52388, 0],
          [23.1342, 42.52343, 0],
          [23.13432, 42.52297, 0],
          [23.13459, 42.52227, 0],
          [23.13474, 42.522, 0],
          [23.13506, 42.52149, 0],
          [23.13528, 42.5212, 0],
          [23.13552, 42.52091, 0],
          [23.13583, 42.52061, 0],
          [23.1365, 42.52005, 0],
          [23.13681, 42.51982, 0],
          [23.13722, 42.51954, 0],
          [23.13777, 42.51913, 0],
          [23.13817, 42.51879, 0],
          [23.13851, 42.51843, 0],
          [23.13895, 42.51792, 0],
          [23.13924, 42.51747, 0],
          [23.14059, 42.51506, 0],
          [23.14086, 42.51452, 0],
          [23.14095, 42.5143, 0],
          [23.14107, 42.51391, 0],
          [23.14115, 42.51355, 0],
          [23.1412, 42.51322, 0],
          [23.14121, 42.51302, 0],
          [23.14123, 42.51285, 0],
          [23.14118, 42.51098, 0],
          [23.14121, 42.50911, 0],
          [23.14127, 42.50837, 0],
          [23.14129, 42.5078, 0],
          [23.14128, 42.50705, 0],
          [23.14122, 42.50658, 0],
          [23.1411, 42.50604, 0],
          [23.14088, 42.50529, 0],
          [23.14067, 42.50469, 0],
          [23.1403, 42.50345, 0],
          [23.13977, 42.50192, 0],
          [23.13964, 42.50144, 0],
          [23.13926, 42.50037, 0],
          [23.13922, 42.50012, 0],
          [23.13892, 42.49954, 0],
          [23.13877, 42.49931, 0],
          [23.13835, 42.49875, 0],
          [23.13787, 42.49824, 0],
          [23.13593, 42.49639, 0],
          [23.13515, 42.4956, 0],
          [23.13496, 42.49538, 0],
          [23.13459, 42.49489, 0],
          [23.13424, 42.49435, 0],
          [23.13334, 42.49285, 0],
          [23.13297, 42.49239, 0],
          [23.13276, 42.49215, 0],
          [23.13251, 42.49192, 0],
          [23.13212, 42.49159, 0],
          [23.13141, 42.49107, 0],
          [23.12957, 42.48989, 0],
          [23.12947, 42.48984, 0],
          [23.12799, 42.48891, 0],
          [23.1267, 42.48802, 0],
          [23.12503, 42.48698, 0],
          [23.12502, 42.48697, 0],
          [23.12392, 42.48628, 0],
          [23.12246, 42.48531, 0],
          [23.12066, 42.48406, 0],
          [23.12026, 42.4838, 0],
          [23.11993, 42.48361, 0],
          [23.11945, 42.48336, 0],
          [23.11914, 42.48322, 0],
          [23.11867, 42.48305, 0],
          [23.11824, 42.48292, 0],
          [23.11747, 42.48273, 0],
          [23.11712, 42.48263, 0],
          [23.11651, 42.48248, 0],
          [23.11614, 42.48237, 0],
          [23.11567, 42.48221, 0],
          [23.11554, 42.48215, 0],
          [23.1155, 42.48214, 0],
          [23.11533, 42.48206, 0],
          [23.11525, 42.48203, 0],
          [23.11521, 42.482, 0],
          [23.11491, 42.48184, 0],
          [23.11462, 42.48165, 0],
          [23.11449, 42.48155, 0],
          [23.11446, 42.48154, 0],
          [23.11403, 42.48126, 0],
          [23.11403, 42.48125, 0],
          [23.11399, 42.48123, 0],
          [23.11395, 42.48119, 0],
          [23.11368, 42.48099, 0],
          [23.11345, 42.48079, 0],
          [23.11318, 42.48052, 0],
          [23.11303, 42.48035, 0],
          [23.11297, 42.48027, 0],
          [23.11277, 42.48004, 0],
          [23.11251, 42.47966, 0],
          [23.11224, 42.4792, 0],
          [23.11207, 42.47879, 0],
          [23.11191, 42.4783, 0],
          [23.11186, 42.47808, 0],
          [23.11178, 42.47761, 0],
          [23.11176, 42.47755, 0],
          [23.11173, 42.47726, 0],
          [23.11172, 42.47725, 0],
          [23.11172, 42.47707, 0],
          [23.11171, 42.47705, 0],
          [23.11139, 42.47402, 0],
          [23.11138, 42.47382, 0],
          [23.11128, 42.4728, 0],
          [23.1112, 42.47222, 0],
          [23.11103, 42.47039, 0],
          [23.11101, 42.47025, 0],
          [23.111, 42.4699, 0],
          [23.11094, 42.46907, 0],
          [23.11096, 42.4688, 0],
          [23.11094, 42.46793, 0],
          [23.11096, 42.46726, 0],
          [23.111, 42.46683, 0],
          [23.11101, 42.46682, 0],
          [23.11101, 42.46674, 0],
          [23.11117, 42.46596, 0],
          [23.11127, 42.46559, 0],
          [23.1118, 42.4644, 0],
          [23.11265, 42.4627, 0],
          [23.11288, 42.46218, 0],
          [23.11299, 42.46181, 0],
          [23.11306, 42.46151, 0],
          [23.11309, 42.46119, 0],
          [23.1131, 42.46083, 0],
          [23.11308, 42.46047, 0],
          [23.11264, 42.45809, 0],
          [23.11257, 42.45782, 0],
          [23.11182, 42.45364, 0],
          [23.11162, 42.45201, 0],
          [23.11161, 42.45178, 0],
          [23.11159, 42.45159, 0],
          [23.11156, 42.45102, 0],
          [23.11156, 42.45022, 0],
          [23.11158, 42.44956, 0],
          [23.11159, 42.4495, 0],
          [23.1116, 42.44895, 0],
          [23.11196, 42.44245, 0],
          [23.11217, 42.44017, 0],
          [23.11216, 42.44008, 0],
          [23.1122, 42.43991, 0],
          [23.11221, 42.43973, 0],
          [23.11223, 42.4397, 0],
          [23.11233, 42.43914, 0],
          [23.11251, 42.43789, 0],
          [23.11305, 42.43558, 0],
          [23.11321, 42.43501, 0],
          [23.11361, 42.43376, 0],
          [23.11411, 42.43235, 0],
          [23.11489, 42.43039, 0],
          [23.11914, 42.41928, 0],
          [23.11933, 42.41874, 0],
          [23.11944, 42.41836, 0],
          [23.1195, 42.41819, 0],
          [23.1196, 42.4175, 0],
          [23.11981, 42.41652, 0],
          [23.11995, 42.41577, 0],
          [23.12012, 42.41461, 0],
          [23.12021, 42.41355, 0],
          [23.12067, 42.40019, 0],
          [23.12066, 42.3996, 0],
          [23.12058, 42.3984, 0],
          [23.12047, 42.39742, 0],
          [23.12041, 42.39701, 0],
          [23.12017, 42.39581, 0],
          [23.11974, 42.39419, 0],
          [23.11898, 42.39195, 0],
          [23.11868, 42.39129, 0],
          [23.11819, 42.39034, 0],
          [23.11782, 42.38967, 0],
          [23.11595, 42.38655, 0],
          [23.11592, 42.38649, 0],
          [23.11443, 42.38408, 0],
          [23.11441, 42.38404, 0],
          [23.11433, 42.38392, 0],
          [23.11433, 42.38391, 0],
          [23.11363, 42.38275, 0],
          [23.11327, 42.38209, 0],
          [23.11303, 42.38159, 0],
          [23.113, 42.38146, 0],
          [23.11298, 42.38141, 0],
          [23.11297, 42.38136, 0],
          [23.11283, 42.38093, 0],
          [23.11272, 42.38045, 0],
          [23.11262, 42.37982, 0],
          [23.11262, 42.37979, 0],
          [23.1126, 42.37964, 0],
          [23.11258, 42.37919, 0],
          [23.11263, 42.37757, 0],
          [23.11263, 42.37693, 0],
          [23.11256, 42.37623, 0],
          [23.11254, 42.37614, 0],
          [23.11248, 42.37572, 0],
          [23.11244, 42.37551, 0],
          [23.11223, 42.37468, 0],
          [23.11217, 42.37449, 0],
          [23.11203, 42.37412, 0],
          [23.11203, 42.37411, 0],
          [23.11195, 42.37392, 0],
          [23.11161, 42.37326, 0],
          [23.11122, 42.37264, 0],
          [23.11088, 42.37216, 0],
          [23.1106, 42.37182, 0],
          [23.10995, 42.3711, 0],
          [23.10985, 42.37101, 0],
          [23.10771, 42.36874, 0],
          [23.10767, 42.36871, 0],
          [23.10767, 42.3687, 0],
          [23.10617, 42.36707, 0],
          [23.10565, 42.36639, 0],
          [23.10536, 42.36593, 0],
          [23.10511, 42.36549, 0],
          [23.10503, 42.36532, 0],
          [23.10501, 42.36529, 0],
          [23.10496, 42.36517, 0],
          [23.10493, 42.36512, 0],
          [23.10483, 42.36487, 0],
          [23.10465, 42.36435, 0],
          [23.10443, 42.36334, 0],
          [23.10441, 42.36318, 0],
          [23.10422, 42.36214, 0],
          [23.10411, 42.3617, 0],
          [23.10396, 42.36127, 0],
          [23.10378, 42.36088, 0],
          [23.10377, 42.36087, 0],
          [23.10324, 42.35987, 0],
          [23.10323, 42.35986, 0],
          [23.10268, 42.35886, 0],
          [23.10258, 42.3587, 0],
          [23.10133, 42.35636, 0],
          [23.10133, 42.35635, 0],
          [23.10124, 42.35619, 0],
          [23.10116, 42.35602, 0],
          [23.10065, 42.35512, 0],
          [23.10043, 42.35478, 0],
          [23.10004, 42.35423, 0],
          [23.09984, 42.35398, 0],
          [23.09977, 42.35388, 0],
          [23.09942, 42.3535, 0],
          [23.09871, 42.35283, 0],
          [23.09792, 42.35213, 0],
          [23.09748, 42.3517, 0],
          [23.09734, 42.35155, 0],
          [23.09692, 42.35104, 0],
          [23.09657, 42.35054, 0],
          [23.09653, 42.35046, 0],
          [23.09643, 42.35031, 0],
          [23.09629, 42.35006, 0],
          [23.09606, 42.34959, 0],
          [23.09603, 42.34951, 0],
          [23.096, 42.34945, 0],
          [23.0958, 42.34892, 0],
          [23.09571, 42.34864, 0],
          [23.0956, 42.34813, 0],
          [23.09552, 42.34751, 0],
          [23.09551, 42.34749, 0],
          [23.09525, 42.34462, 0],
          [23.09524, 42.34399, 0],
          [23.09525, 42.34392, 0],
          [23.09525, 42.34371, 0],
          [23.09526, 42.34363, 0],
          [23.09526, 42.34356, 0],
          [23.09533, 42.34299, 0],
          [23.0954, 42.34266, 0],
          [23.09542, 42.3426, 0],
          [23.09558, 42.3419, 0],
          [23.09569, 42.34167, 0],
          [23.09588, 42.3412, 0],
          [23.0961, 42.34075, 0],
          [23.09638, 42.34028, 0],
          [23.0967, 42.33981, 0],
          [23.09683, 42.33965, 0],
          [23.09795, 42.33787, 0],
          [23.09832, 42.33718, 0],
          [23.09852, 42.33677, 0],
          [23.09875, 42.33617, 0],
          [23.09875, 42.33616, 0],
          [23.09887, 42.33581, 0],
          [23.09891, 42.33563, 0],
          [23.09897, 42.33544, 0],
          [23.09915, 42.33466, 0],
          [23.09927, 42.33392, 0],
          [23.09936, 42.33298, 0],
          [23.09935, 42.33253, 0],
          [23.0993, 42.33177, 0],
          [23.09918, 42.33087, 0],
          [23.09916, 42.33081, 0],
          [23.09902, 42.3302, 0],
          [23.0988, 42.32945, 0],
          [23.09848, 42.32854, 0],
          [23.09829, 42.32812, 0],
          [23.09788, 42.32732, 0],
          [23.09727, 42.32628, 0],
          [23.09679, 42.32552, 0],
          [23.09678, 42.32552, 0],
          [23.09634, 42.32484, 0],
          [23.09571, 42.32375, 0],
          [23.0957, 42.32372, 0],
          [23.09558, 42.32349, 0],
          [23.09537, 42.32293, 0],
          [23.09535, 42.32278, 0],
          [23.09522, 42.32235, 0],
          [23.09512, 42.32207, 0],
          [23.09496, 42.32131, 0],
          [23.09494, 42.32118, 0],
          [23.09493, 42.32101, 0],
          [23.09481, 42.32015, 0],
          [23.09483, 42.31947, 0],
          [23.09488, 42.31886, 0],
          [23.09496, 42.31834, 0],
          [23.09507, 42.31781, 0],
          [23.09525, 42.31709, 0],
          [23.09528, 42.31701, 0],
          [23.0954, 42.31661, 0],
          [23.0954, 42.3166, 0],
          [23.09546, 42.31642, 0],
          [23.09548, 42.31634, 0],
          [23.09552, 42.31625, 0],
          [23.09556, 42.31606, 0],
          [23.09597, 42.31466, 0],
          [23.09613, 42.31399, 0],
          [23.0962, 42.31378, 0],
          [23.09637, 42.31309, 0],
          [23.0964, 42.31291, 0],
          [23.09644, 42.31274, 0],
          [23.09647, 42.31255, 0],
          [23.09648, 42.3123, 0],
          [23.09649, 42.31224, 0],
          [23.0965, 42.31166, 0],
          [23.09648, 42.31122, 0],
          [23.09642, 42.31081, 0],
          [23.09639, 42.31067, 0],
          [23.09638, 42.31058, 0],
          [23.09627, 42.31017, 0],
          [23.09624, 42.3101, 0],
          [23.09613, 42.30967, 0],
          [23.09607, 42.3095, 0],
          [23.09565, 42.30858, 0],
          [23.09542, 42.30815, 0],
          [23.09538, 42.30809, 0],
          [23.0949, 42.30696, 0],
          [23.09484, 42.30685, 0],
          [23.09464, 42.30636, 0],
          [23.09441, 42.30565, 0],
          [23.09431, 42.30512, 0],
          [23.09422, 42.30449, 0],
          [23.09419, 42.30416, 0],
          [23.09413, 42.30375, 0],
          [23.09407, 42.3029, 0],
          [23.09404, 42.3009, 0],
          [23.094, 42.30048, 0],
          [23.09393, 42.30025, 0],
          [23.09386, 42.3001, 0],
          [23.09385, 42.30006, 0],
          [23.09346, 42.2992, 0],
          [23.09317, 42.29866, 0],
          [23.09296, 42.29834, 0],
          [23.09165, 42.29661, 0],
          [23.09142, 42.29628, 0],
          [23.09117, 42.29589, 0],
          [23.08994, 42.29427, 0],
          [23.08986, 42.29412, 0],
          [23.08952, 42.29365, 0],
          [23.08933, 42.29342, 0],
          [23.08841, 42.29219, 0],
          [23.08783, 42.29135, 0],
          [23.08779, 42.29127, 0],
          [23.08778, 42.29127, 0],
          [23.08724, 42.29022, 0],
          [23.08683, 42.2892, 0],
          [23.08674, 42.28892, 0],
          [23.0857, 42.28631, 0],
          [23.08557, 42.28605, 0],
          [23.08528, 42.28561, 0],
          [23.08437, 42.28455, 0],
          [23.08317, 42.2834, 0],
          [23.08112, 42.28114, 0],
          [23.07892, 42.27814, 0],
          [23.07718, 42.27563, 0],
          [23.077, 42.27534, 0],
          [23.07654, 42.27472, 0],
          [23.07583, 42.27388, 0],
          [23.07535, 42.27339, 0],
          [23.07426, 42.27239, 0],
          [23.07365, 42.27195, 0],
          [23.07357, 42.2719, 0],
          [23.07287, 42.27139, 0],
          [23.07162, 42.27054, 0],
          [23.071, 42.27008, 0],
          [23.07043, 42.26956, 0],
          [23.07009, 42.26917, 0],
          [23.0697, 42.26865, 0],
          [23.06948, 42.2683, 0],
          [23.0693, 42.26797, 0],
          [23.06919, 42.26774, 0],
          [23.06904, 42.26736, 0],
          [23.06895, 42.26708, 0],
          [23.0689, 42.26685, 0],
          [23.06888, 42.26671, 0],
          [23.06887, 42.26669, 0],
          [23.06876, 42.26593, 0],
          [23.06877, 42.26553, 0],
          [23.06882, 42.265, 0],
          [23.06894, 42.2645, 0],
          [23.06909, 42.26398, 0],
          [23.0692, 42.26371, 0],
          [23.06951, 42.26311, 0],
          [23.06982, 42.26265, 0],
          [23.07012, 42.26226, 0],
          [23.07034, 42.262, 0],
          [23.07064, 42.26169, 0],
          [23.07193, 42.26061, 0],
          [23.07266, 42.26005, 0],
          [23.07385, 42.25907, 0],
          [23.07622, 42.2572, 0],
          [23.07654, 42.25698, 0],
          [23.07764, 42.25628, 0],
          [23.07793, 42.25612, 0],
          [23.08048, 42.25492, 0],
          [23.08114, 42.25456, 0],
          [23.08193, 42.25409, 0],
          [23.0823, 42.25382, 0],
          [23.08274, 42.25346, 0],
          [23.08329, 42.25296, 0],
          [23.08378, 42.2524, 0],
          [23.08396, 42.25216, 0],
          [23.08413, 42.25188, 0],
          [23.08413, 42.25187, 0],
          [23.0843, 42.25158, 0],
          [23.08431, 42.25157, 0],
          [23.08431, 42.25156, 0],
          [23.08459, 42.25098, 0],
          [23.08475, 42.25058, 0],
          [23.08495, 42.2499, 0],
          [23.08496, 42.24982, 0],
          [23.08502, 42.24953, 0],
          [23.08508, 42.24889, 0],
          [23.08507, 42.24832, 0],
          [23.085, 42.24777, 0],
          [23.0849, 42.24732, 0],
          [23.08478, 42.24692, 0],
          [23.08446, 42.24607, 0],
          [23.08358, 42.24411, 0],
          [23.0834, 42.24358, 0],
          [23.0832, 42.2427, 0],
          [23.08313, 42.24224, 0],
          [23.0831, 42.24193, 0],
          [23.08309, 42.24154, 0],
          [23.0831, 42.24123, 0],
          [23.08314, 42.24082, 0],
          [23.08315, 42.24078, 0],
          [23.08316, 42.24067, 0],
          [23.08366, 42.23851, 0],
          [23.08371, 42.23834, 0],
          [23.08387, 42.23763, 0],
          [23.08394, 42.2372, 0],
          [23.08399, 42.23678, 0],
          [23.08403, 42.23616, 0],
          [23.08402, 42.23563, 0],
          [23.08399, 42.23514, 0],
          [23.08395, 42.23481, 0],
          [23.08383, 42.23414, 0],
          [23.08352, 42.233, 0],
          [23.08328, 42.23238, 0],
          [23.08306, 42.23189, 0],
          [23.08266, 42.23115, 0],
          [23.08237, 42.23068, 0],
          [23.08118, 42.22908, 0],
          [23.07883, 42.22606, 0],
          [23.07831, 42.22534, 0],
          [23.07783, 42.22457, 0],
          [23.07754, 42.22406, 0],
          [23.07698, 42.22281, 0],
          [23.07574, 42.21982, 0],
          [23.07508, 42.21838, 0],
          [23.07476, 42.21782, 0],
          [23.07434, 42.21724, 0],
          [23.07393, 42.21675, 0],
          [23.07352, 42.21635, 0],
          [23.07305, 42.21593, 0],
          [23.07257, 42.21554, 0],
          [23.07023, 42.21387, 0],
          [23.06984, 42.21361, 0],
          [23.06826, 42.21249, 0],
          [23.06796, 42.2123, 0],
          [23.06709, 42.21166, 0],
          [23.06062, 42.20709, 0],
          [23.06011, 42.20667, 0],
          [23.0596, 42.20621, 0],
          [23.05908, 42.20565, 0],
          [23.05754, 42.20372, 0],
          [23.05734, 42.20345, 0],
          [23.05709, 42.20315, 0],
          [23.05401, 42.19919, 0],
          [23.0537, 42.19872, 0],
          [23.05345, 42.19831, 0],
          [23.04951, 42.18989, 0],
          [23.04936, 42.18951, 0],
          [23.04914, 42.18879, 0],
          [23.04906, 42.18843, 0],
          [23.04898, 42.18785, 0],
          [23.04897, 42.18744, 0],
          [23.04901, 42.18631, 0],
          [23.04926, 42.18236, 0],
          [23.04928, 42.18179, 0],
          [23.04929, 42.18044, 0],
          [23.04926, 42.17999, 0],
          [23.04909, 42.17869, 0],
          [23.04885, 42.17754, 0],
          [23.04866, 42.17686, 0],
          [23.04827, 42.17576, 0],
          [23.04796, 42.17503, 0],
          [23.04752, 42.17415, 0],
          [23.04725, 42.17365, 0],
          [23.04656, 42.17255, 0],
          [23.04616, 42.17198, 0],
          [23.04551, 42.17115, 0],
          [23.04489, 42.17044, 0],
          [23.04433, 42.16986, 0],
          [23.04359, 42.16915, 0],
          [23.04322, 42.16884, 0],
          [23.04277, 42.16843, 0],
          [23.04275, 42.16842, 0],
          [23.04169, 42.1676, 0],
          [23.04061, 42.16686, 0],
          [23.03775, 42.16511, 0],
          [23.03734, 42.16481, 0],
          [23.03697, 42.16451, 0],
          [23.03661, 42.16419, 0],
          [23.03627, 42.16383, 0],
          [23.03597, 42.16347, 0],
          [23.03571, 42.16311, 0],
          [23.03551, 42.16279, 0],
          [23.03527, 42.16229, 0],
          [23.03512, 42.16192, 0],
          [23.035, 42.16156, 0],
          [23.03488, 42.16109, 0],
          [23.03487, 42.16108, 0],
          [23.0344, 42.15901, 0],
          [23.0342, 42.15796, 0],
          [23.03371, 42.15441, 0],
          [23.03354, 42.15255, 0],
          [23.03326, 42.14407, 0],
          [23.03325, 42.14397, 0],
          [23.0329, 42.13409, 0],
          [23.03291, 42.13406, 0],
          [23.03301, 42.13321, 0],
          [23.03313, 42.13267, 0],
          [23.03326, 42.13225, 0],
          [23.0333, 42.13208, 0],
          [23.03357, 42.13141, 0],
          [23.03527, 42.12763, 0],
          [23.03608, 42.12571, 0],
          [23.03632, 42.12482, 0],
          [23.03639, 42.12449, 0],
          [23.03645, 42.12406, 0],
          [23.03652, 42.12318, 0],
          [23.03652, 42.12215, 0],
          [23.03638, 42.11625, 0],
          [23.03639, 42.11584, 0],
          [23.03631, 42.11366, 0],
          [23.03631, 42.11318, 0],
          [23.0363, 42.11303, 0],
          [23.03629, 42.11231, 0],
          [23.03627, 42.1119, 0],
          [23.03627, 42.11123, 0],
          [23.03617, 42.10822, 0],
          [23.03614, 42.10791, 0],
          [23.03605, 42.1073, 0],
          [23.03575, 42.10622, 0],
          [23.03483, 42.10407, 0],
          [23.03465, 42.10345, 0],
          [23.03453, 42.10281, 0],
          [23.03451, 42.10265, 0],
          [23.03451, 42.10193, 0],
          [23.03459, 42.10124, 0],
          [23.03474, 42.10062, 0],
          [23.03497, 42.1, 0],
          [23.03521, 42.09952, 0],
          [23.03553, 42.09898, 0],
          [23.03685, 42.097, 0],
          [23.037, 42.09673, 0],
          [23.037, 42.09672, 0],
          [23.03722, 42.09631, 0],
          [23.03741, 42.09585, 0],
          [23.03756, 42.09534, 0],
          [23.03768, 42.09486, 0],
          [23.03774, 42.09428, 0],
          [23.03772, 42.09349, 0],
          [23.03767, 42.09307, 0],
          [23.03761, 42.09279, 0],
          [23.03624, 42.08795, 0],
          [23.0362, 42.08785, 0],
          [23.03553, 42.08547, 0],
          [23.03552, 42.08545, 0],
          [23.0346, 42.08222, 0],
          [23.03458, 42.08213, 0],
          [23.03297, 42.07648, 0],
          [23.03286, 42.07602, 0],
          [23.03274, 42.07535, 0],
          [23.03272, 42.07491, 0],
          [23.03272, 42.07451, 0],
          [23.03275, 42.07382, 0],
          [23.03277, 42.07359, 0],
          [23.03294, 42.07281, 0],
          [23.03304, 42.07247, 0],
          [23.03309, 42.07236, 0],
          [23.03334, 42.07169, 0],
          [23.03354, 42.07123, 0],
          [23.03359, 42.07116, 0],
          [23.03404, 42.07034, 0],
          [23.03417, 42.07006, 0],
          [23.03423, 42.06995, 0],
          [23.03433, 42.06983, 0],
          [23.03477, 42.06942, 0],
          [23.03496, 42.06926, 0],
          [23.03506, 42.06919, 0],
          [23.03651, 42.06802, 0],
          [23.03678, 42.06785, 0],
          [23.03687, 42.06778, 0],
          [23.03713, 42.06763, 0],
          [23.03832, 42.06688, 0],
          [23.03875, 42.06659, 0],
          [23.03942, 42.06602, 0],
          [23.03976, 42.06569, 0],
          [23.0408, 42.06454, 0],
          [23.04095, 42.06439, 0],
          [23.04143, 42.06384, 0],
          [23.04242, 42.06277, 0],
          [23.04245, 42.06273, 0],
          [23.0429, 42.06225, 0],
          [23.04297, 42.06216, 0],
          [23.04299, 42.06215, 0],
          [23.04346, 42.06163, 0],
          [23.04557, 42.05941, 0],
          [23.04646, 42.05841, 0],
          [23.04684, 42.05802, 0],
          [23.04708, 42.0577, 0],
          [23.04728, 42.05739, 0],
          [23.04751, 42.057, 0],
          [23.04781, 42.05632, 0],
          [23.04788, 42.05611, 0],
          [23.04801, 42.0556, 0],
          [23.04804, 42.05536, 0],
          [23.04807, 42.05525, 0],
          [23.0481, 42.05508, 0],
          [23.04813, 42.05476, 0],
          [23.04813, 42.05423, 0],
          [23.04811, 42.05386, 0],
          [23.04801, 42.05333, 0],
          [23.04785, 42.0528, 0],
          [23.04759, 42.05222, 0],
          [23.04711, 42.05138, 0],
          [23.04647, 42.05058, 0],
          [23.04465, 42.04877, 0],
          [23.04461, 42.04874, 0],
          [23.04447, 42.04859, 0],
          [23.04417, 42.04831, 0],
          [23.04275, 42.04689, 0],
          [23.04273, 42.04686, 0],
          [23.0427, 42.04684, 0],
          [23.04227, 42.0464, 0],
          [23.04171, 42.04576, 0],
          [23.0411, 42.04489, 0],
          [23.04082, 42.04437, 0],
          [23.04072, 42.04421, 0],
          [23.04042, 42.04364, 0],
          [23.04022, 42.04316, 0],
          [23.03993, 42.04231, 0],
          [23.03982, 42.04179, 0],
          [23.03969, 42.04106, 0],
          [23.03969, 42.04088, 0],
          [23.03964, 42.04042, 0],
          [23.03964, 42.03992, 0],
          [23.03972, 42.03809, 0],
          [23.03974, 42.03797, 0],
          [23.0399, 42.03532, 0],
          [23.03994, 42.03499, 0],
          [23.03994, 42.03495, 0],
          [23.04002, 42.03437, 0],
          [23.04002, 42.03435, 0],
          [23.04004, 42.03421, 0],
          [23.04013, 42.03391, 0],
          [23.04016, 42.03377, 0],
          [23.04022, 42.0336, 0],
          [23.04058, 42.03276, 0],
          [23.04082, 42.03226, 0],
          [23.04102, 42.03188, 0],
          [23.0411, 42.03176, 0],
          [23.04183, 42.03033, 0],
          [23.04229, 42.02932, 0],
          [23.04245, 42.0288, 0],
          [23.0425, 42.0286, 0],
          [23.0426, 42.02808, 0],
          [23.04265, 42.02793, 0],
          [23.04271, 42.02767, 0],
          [23.04275, 42.02739, 0],
          [23.04276, 42.02714, 0],
          [23.04275, 42.02712, 0],
          [23.04274, 42.02701, 0],
          [23.04273, 42.02699, 0],
          [23.04272, 42.02689, 0],
          [23.04248, 42.02559, 0],
          [23.04246, 42.02552, 0],
          [23.04213, 42.02393, 0],
          [23.04197, 42.02296, 0],
          [23.04181, 42.0222, 0],
          [23.04181, 42.02219, 0],
          [23.04141, 42.02008, 0],
          [23.0414, 42.01997, 0],
          [23.04129, 42.01947, 0],
          [23.04128, 42.0194, 0],
          [23.04126, 42.01935, 0],
          [23.04126, 42.01934, 0],
          [23.04125, 42.01929, 0],
          [23.04123, 42.01923, 0],
          [23.04111, 42.0187, 0],
          [23.04108, 42.01847, 0],
          [23.04106, 42.01799, 0],
          [23.04107, 42.01782, 0],
          [23.04111, 42.01748, 0],
          [23.04121, 42.01687, 0],
          [23.04127, 42.0166, 0],
          [23.04149, 42.01587, 0],
          [23.04181, 42.01516, 0],
          [23.04209, 42.01466, 0],
          [23.04251, 42.01403, 0],
          [23.04306, 42.01338, 0],
          [23.04646, 42.00963, 0],
          [23.04707, 42.00891, 0],
          [23.04752, 42.00832, 0],
          [23.04812, 42.00728, 0],
          [23.04839, 42.00673, 0],
          [23.04935, 42.0049, 0],
          [23.05091, 42.00179, 0],
          [23.05143, 42.00066, 0],
          [23.05143, 42.00065, 0],
          [23.05177, 41.99985, 0],
          [23.05204, 41.99907, 0],
          [23.05239, 41.99769, 0],
          [23.05239, 41.99768, 0],
          [23.05243, 41.99755, 0],
          [23.05269, 41.9963, 0],
          [23.0527, 41.99627, 0],
          [23.0527, 41.99626, 0],
          [23.053, 41.99484, 0],
          [23.05304, 41.9947, 0],
          [23.05304, 41.99467, 0],
          [23.05308, 41.99453, 0],
          [23.05316, 41.99415, 0],
          [23.05332, 41.99359, 0],
          [23.05382, 41.9921, 0],
          [23.05388, 41.99196, 0],
          [23.05409, 41.99137, 0],
          [23.05462, 41.99021, 0],
          [23.0547, 41.99007, 0],
          [23.05471, 41.99004, 0],
          [23.0553, 41.98896, 0],
          [23.05638, 41.98724, 0],
          [23.05685, 41.98662, 0],
          [23.05691, 41.98653, 0],
          [23.05747, 41.98582, 0],
          [23.05829, 41.98489, 0],
          [23.05829, 41.98488, 0],
          [23.05899, 41.98412, 0],
          [23.0606, 41.98263, 0],
          [23.06199, 41.98147, 0],
          [23.06246, 41.98113, 0],
          [23.06261, 41.98101, 0],
          [23.06327, 41.98053, 0],
          [23.06417, 41.97993, 0],
          [23.06559, 41.97909, 0],
          [23.06693, 41.97834, 0],
          [23.06842, 41.97761, 0],
          [23.07316, 41.97552, 0],
          [23.07336, 41.97542, 0],
          [23.07461, 41.97486, 0],
          [23.07482, 41.97478, 0],
          [23.07624, 41.97414, 0],
          [23.07627, 41.97412, 0],
          [23.07679, 41.97389, 0],
          [23.07713, 41.97376, 0],
          [23.07731, 41.97368, 0],
          [23.07734, 41.97366, 0],
          [23.07814, 41.97331, 0],
          [23.07865, 41.97306, 0],
          [23.08105, 41.97201, 0],
          [23.08106, 41.97201, 0],
          [23.08146, 41.97183, 0],
          [23.08151, 41.9718, 0],
          [23.0816, 41.97176, 0],
          [23.08162, 41.97176, 0],
          [23.08167, 41.97173, 0],
          [23.08335, 41.97101, 0],
          [23.08479, 41.97036, 0],
          [23.0848, 41.97036, 0],
          [23.08563, 41.96999, 0],
          [23.08564, 41.96998, 0],
          [23.08618, 41.96974, 0],
          [23.08625, 41.96972, 0],
          [23.0863, 41.96969, 0],
          [23.08666, 41.96953, 0],
          [23.08667, 41.96953, 0],
          [23.08708, 41.96935, 0],
          [23.08708, 41.96934, 0],
          [23.0875, 41.96916, 0],
          [23.0877, 41.96906, 0],
          [23.08776, 41.96904, 0],
          [23.08812, 41.96888, 0],
          [23.08813, 41.96888, 0],
          [23.08818, 41.96885, 0],
          [23.08838, 41.96877, 0],
          [23.08839, 41.96876, 0],
          [23.08859, 41.96867, 0],
          [23.08874, 41.96859, 0],
          [23.08875, 41.96859, 0],
          [23.08956, 41.9682, 0],
          [23.08957, 41.9682, 0],
          [23.09069, 41.96762, 0],
          [23.09175, 41.96701, 0],
          [23.09299, 41.96624, 0],
          [23.09303, 41.96622, 0],
          [23.09328, 41.96606, 0],
          [23.09339, 41.96598, 0],
          [23.09341, 41.96597, 0],
          [23.09369, 41.96577, 0],
          [23.09386, 41.96562, 0],
          [23.09388, 41.96561, 0],
          [23.09404, 41.96545, 0],
          [23.0945, 41.96503, 0],
          [23.09452, 41.96502, 0],
          [23.09496, 41.96462, 0],
          [23.09496, 41.96461, 0],
          [23.0956, 41.96405, 0],
          [23.0964, 41.96331, 0],
          [23.09704, 41.96284, 0],
          [23.09723, 41.96273, 0],
          [23.09775, 41.96239, 0],
          [23.09778, 41.96238, 0],
          [23.09789, 41.96232, 0],
          [23.09806, 41.96219, 0],
          [23.09812, 41.96213, 0],
          [23.09815, 41.96209, 0],
          [23.09818, 41.96206, 0],
          [23.09818, 41.96196, 0],
          [23.09822, 41.96186, 0],
          [23.09826, 41.9618, 0],
          [23.09833, 41.96175, 0],
          [23.09834, 41.96175, 0],
          [23.09835, 41.96174, 0],
          [23.0984, 41.96172, 0],
          [23.09848, 41.9617, 0],
          [23.09862, 41.96169, 0],
          [23.09875, 41.96169, 0],
          [23.09882, 41.9617, 0],
          [23.09908, 41.96178, 0],
          [23.09917, 41.96185, 0],
          [23.09925, 41.96196, 0],
          [23.09928, 41.96201, 0],
          [23.0993, 41.96211, 0],
          [23.09929, 41.96227, 0],
          [23.09951, 41.96247, 0],
          [23.10049, 41.96275, 0],
          [23.10075, 41.96285, 0],
          [23.10081, 41.96283, 0],
          [23.10089, 41.96283, 0],
          [23.10096, 41.96285, 0],
          [23.10097, 41.96284, 0],
          [23.10098, 41.96284, 0],
          [23.10102, 41.96282, 0],
          [23.10103, 41.96282, 0],
          [23.10105, 41.96281, 0],
          [23.10117, 41.96281, 0],
          [23.10118, 41.96282, 0],
          [23.10119, 41.96282, 0],
          [23.10121, 41.96279, 0],
          [23.10124, 41.96277, 0],
          [23.10131, 41.96274, 0],
          [23.1031, 41.96043, 0],
          [23.10327, 41.96019, 0],
          [23.10367, 41.95949, 0],
          [23.10388, 41.95896, 0],
          [23.10399, 41.95853, 0],
          [23.10399, 41.95852, 0],
          [23.10402, 41.95841, 0],
          [23.10439, 41.95508, 0],
          [23.10443, 41.95448, 0],
          [23.10443, 41.95437, 0],
          [23.10442, 41.95423, 0],
          [23.10436, 41.95385, 0],
          [23.10432, 41.9537, 0],
          [23.1043, 41.95366, 0],
          [23.10426, 41.95352, 0],
          [23.10419, 41.95335, 0],
          [23.10405, 41.95307, 0],
          [23.10372, 41.95259, 0],
          [23.10349, 41.95234, 0],
          [23.10334, 41.9522, 0],
          [23.10303, 41.95194, 0],
          [23.10254, 41.95161, 0],
          [23.10235, 41.95151, 0],
          [23.10235, 41.9515, 0],
          [23.09899, 41.94977, 0],
          [23.09828, 41.94934, 0],
          [23.09823, 41.9493, 0],
          [23.09798, 41.94913, 0],
          [23.09776, 41.94894, 0],
          [23.09751, 41.94867, 0],
          [23.09725, 41.94836, 0],
          [23.09722, 41.94831, 0],
          [23.09722, 41.9483, 0],
          [23.09712, 41.94814, 0],
          [23.09711, 41.94814, 0],
          [23.09705, 41.94804, 0],
          [23.09682, 41.94752, 0],
          [23.09676, 41.94729, 0],
          [23.09675, 41.94727, 0],
          [23.09671, 41.94695, 0],
          [23.0967, 41.94672, 0],
          [23.09671, 41.94657, 0],
          [23.09676, 41.94616, 0],
          [23.09683, 41.94594, 0],
          [23.09706, 41.9454, 0],
          [23.09734, 41.94495, 0],
          [23.09759, 41.94465, 0],
          [23.098, 41.94422, 0],
          [23.10014, 41.94238, 0],
          [23.10051, 41.94204, 0],
          [23.10094, 41.94161, 0],
          [23.10136, 41.94107, 0],
          [23.10152, 41.94083, 0],
          [23.10181, 41.94026, 0],
          [23.10192, 41.93999, 0],
          [23.10194, 41.93992, 0],
          [23.10199, 41.93981, 0],
          [23.10207, 41.93952, 0],
          [23.10241, 41.93783, 0],
          [23.10244, 41.93774, 0],
          [23.10247, 41.93751, 0],
          [23.10254, 41.93721, 0],
          [23.10332, 41.93286, 0],
          [23.10354, 41.93181, 0],
          [23.10365, 41.9315, 0],
          [23.10375, 41.93127, 0],
          [23.10391, 41.93098, 0],
          [23.10414, 41.93067, 0],
          [23.1044, 41.93038, 0],
          [23.10481, 41.93, 0],
          [23.10524, 41.92971, 0],
          [23.10554, 41.92954, 0],
          [23.1056, 41.9295, 0],
          [23.1066, 41.929, 0],
          [23.10689, 41.92883, 0],
          [23.10731, 41.92851, 0],
          [23.10754, 41.9283, 0],
          [23.10777, 41.92805, 0],
          [23.10802, 41.92773, 0],
          [23.10827, 41.92724, 0],
          [23.10844, 41.92687, 0],
          [23.10853, 41.92646, 0],
          [23.10863, 41.9261, 0],
          [23.10882, 41.92553, 0],
          [23.10938, 41.92444, 0],
          [23.10971, 41.92404, 0],
          [23.11007, 41.92364, 0],
          [23.11065, 41.92314, 0],
          [23.11132, 41.92261, 0],
          [23.11288, 41.92151, 0],
          [23.11499, 41.91994, 0],
          [23.11554, 41.91946, 0],
          [23.11629, 41.91864, 0],
          [23.1164, 41.9185, 0],
          [23.11655, 41.91823, 0],
          [23.11686, 41.91759, 0],
          [23.11694, 41.91738, 0],
          [23.11709, 41.91692, 0],
          [23.11719, 41.91628, 0],
          [23.11719, 41.91623, 0],
          [23.11723, 41.9158, 0],
          [23.11723, 41.91531, 0],
          [23.11715, 41.91483, 0],
          [23.11704, 41.91433, 0],
          [23.11672, 41.91336, 0],
          [23.1164, 41.91254, 0],
          [23.1164, 41.91253, 0],
          [23.11627, 41.91218, 0],
          [23.11615, 41.91176, 0],
          [23.11614, 41.91174, 0],
          [23.11609, 41.91153, 0],
          [23.11602, 41.91089, 0],
          [23.11603, 41.91056, 0],
          [23.11611, 41.91002, 0],
          [23.11623, 41.90958, 0],
          [23.1164, 41.90914, 0],
          [23.11658, 41.9088, 0],
          [23.11685, 41.90835, 0],
          [23.1194, 41.90494, 0],
          [23.11991, 41.90421, 0],
          [23.12022, 41.90353, 0],
          [23.1203, 41.90332, 0],
          [23.12036, 41.90304, 0],
          [23.12042, 41.90267, 0],
          [23.12049, 41.90166, 0],
          [23.12047, 41.90134, 0],
          [23.12043, 41.901, 0],
          [23.1203, 41.90028, 0],
          [23.12019, 41.89981, 0],
          [23.11998, 41.89916, 0],
          [23.11998, 41.89914, 0],
          [23.11953, 41.89781, 0],
          [23.1195, 41.89775, 0],
          [23.11922, 41.89687, 0],
          [23.11901, 41.89637, 0],
          [23.11887, 41.89608, 0],
          [23.11877, 41.89583, 0],
          [23.11797, 41.89337, 0],
          [23.11797, 41.89336, 0],
          [23.11718, 41.89106, 0],
          [23.11712, 41.89081, 0],
          [23.11705, 41.89066, 0],
          [23.11695, 41.89036, 0],
          [23.11689, 41.89021, 0],
          [23.11684, 41.89005, 0],
          [23.11674, 41.88999, 0],
          [23.11665, 41.88991, 0],
          [23.11648, 41.88982, 0],
          [23.11637, 41.8898, 0],
          [23.11624, 41.88979, 0],
          [23.11611, 41.88981, 0],
          [23.11603, 41.88984, 0],
          [23.1159, 41.88992, 0],
          [23.11588, 41.88995, 0],
          [23.11583, 41.89005, 0],
          [23.1158, 41.89018, 0],
          [23.11581, 41.89032, 0],
          [23.11594, 41.89099, 0],
          [23.11605, 41.89127, 0],
          [23.11688, 41.89078, 0],
          [23.1169, 41.89076, 0],
          [23.11728, 41.8905, 0],
          [23.11746, 41.89034, 0],
          [23.11774, 41.89004, 0],
          [23.11778, 41.88998, 0],
          [23.11782, 41.88985, 0],
          [23.11797, 41.88955, 0],
          [23.1181, 41.88924, 0],
          [23.11817, 41.88904, 0],
          [23.11837, 41.8883, 0],
          [23.11877, 41.88699, 0],
          [23.11886, 41.88676, 0],
          [23.11972, 41.88499, 0],
          [23.11984, 41.88481, 0],
          [23.12118, 41.88308, 0],
          [23.12119, 41.88306, 0],
          [23.12178, 41.8823, 0],
          [23.12181, 41.88227, 0],
          [23.12192, 41.88213, 0],
          [23.1222, 41.88188, 0],
          [23.12251, 41.88166, 0],
          [23.12267, 41.88156, 0],
          [23.1244, 41.88067, 0],
          [23.1245, 41.88061, 0],
          [23.12451, 41.88061, 0],
          [23.12532, 41.88024, 0],
          [23.12533, 41.88023, 0],
          [23.12539, 41.88021, 0],
          [23.12666, 41.87964, 0],
          [23.12673, 41.87962, 0],
          [23.12723, 41.8794, 0],
          [23.12727, 41.87939, 0],
          [23.1276, 41.87926, 0],
          [23.12779, 41.8792, 0],
          [23.12799, 41.87916, 0],
          [23.12814, 41.87915, 0],
          [23.12833, 41.87915, 0],
          [23.12836, 41.87916, 0],
          [23.12842, 41.87916, 0],
          [23.12944, 41.87926, 0],
          [23.12946, 41.87927, 0],
          [23.12951, 41.87927, 0],
          [23.12993, 41.87932, 0],
          [23.1311, 41.8794, 0],
          [23.13124, 41.8794, 0],
          [23.13136, 41.87941, 0],
          [23.13175, 41.87942, 0],
          [23.13196, 41.87941, 0],
          [23.13246, 41.87934, 0],
          [23.13316, 41.87921, 0],
          [23.13365, 41.87914, 0],
          [23.13558, 41.87922, 0],
          [23.13654, 41.87935, 0],
          [23.13765, 41.87955, 0],
          [23.14267, 41.88078, 0],
          [23.14468, 41.88137, 0],
          [23.14506, 41.8815, 0],
          [23.14526, 41.88159, 0],
          [23.14565, 41.8818, 0],
          [23.14671, 41.88256, 0],
          [23.14702, 41.88271, 0],
          [23.14756, 41.8829, 0],
          [23.14865, 41.88323, 0],
          [23.14912, 41.88343, 0],
          [23.14948, 41.88363, 0],
          [23.1498, 41.88386, 0],
          [23.14998, 41.88403, 0],
          [23.15054, 41.88451, 0],
          [23.15135, 41.8851, 0],
          [23.15231, 41.88576, 0],
          [23.15279, 41.88616, 0],
          [23.15319, 41.88659, 0],
          [23.15334, 41.88678, 0],
          [23.1537, 41.88718, 0],
          [23.15407, 41.88745, 0],
          [23.15408, 41.88746, 0],
          [23.15433, 41.88762, 0],
          [23.15918, 41.88989, 0],
          [23.15997, 41.89028, 0],
          [23.16007, 41.89032, 0],
          [23.16037, 41.8905, 0],
          [23.16043, 41.89053, 0],
          [23.16059, 41.89064, 0],
          [23.1608, 41.89082, 0],
          [23.16095, 41.89099, 0],
          [23.16149, 41.89171, 0],
          [23.16154, 41.89182, 0],
          [23.16164, 41.89198, 0],
          [23.1617, 41.89226, 0],
          [23.16169, 41.8924, 0],
          [23.16162, 41.89293, 0],
          [23.16163, 41.893, 0],
          [23.16163, 41.89308, 0],
          [23.16164, 41.89315, 0],
          [23.16164, 41.89326, 0],
          [23.16166, 41.89335, 0],
          [23.16178, 41.89359, 0],
          [23.16188, 41.89371, 0],
          [23.16223, 41.89405, 0],
          [23.16245, 41.8943, 0],
          [23.16247, 41.89434, 0],
          [23.16255, 41.89446, 0],
          [23.16257, 41.8945, 0],
          [23.1626, 41.89454, 0],
          [23.16263, 41.89461, 0],
          [23.16266, 41.89466, 0],
          [23.16269, 41.8948, 0],
          [23.16269, 41.89579, 0],
          [23.16266, 41.89628, 0],
          [23.16267, 41.89633, 0],
          [23.16268, 41.89689, 0],
          [23.16272, 41.89721, 0],
          [23.16276, 41.89735, 0],
          [23.16294, 41.89766, 0],
          [23.16302, 41.89775, 0],
          [23.16304, 41.89776, 0],
          [23.16315, 41.89786, 0],
          [23.1633, 41.89796, 0],
          [23.16359, 41.89809, 0],
          [23.1636, 41.89809, 0],
          [23.16383, 41.89816, 0],
          [23.16397, 41.89818, 0],
          [23.16428, 41.8982, 0],
          [23.16443, 41.8982, 0],
          [23.16463, 41.89818, 0],
          [23.16479, 41.89815, 0],
          [23.16588, 41.89802, 0],
          [23.16622, 41.89802, 0],
          [23.16644, 41.89805, 0],
          [23.16646, 41.89806, 0],
          [23.16669, 41.89811, 0],
          [23.16691, 41.89818, 0],
          [23.1672, 41.8983, 0],
          [23.16756, 41.89852, 0],
          [23.16766, 41.8986, 0],
          [23.16775, 41.8987, 0],
          [23.16777, 41.89874, 0],
          [23.16804, 41.89912, 0],
          [23.16809, 41.89923, 0],
          [23.16816, 41.89948, 0],
          [23.16824, 41.90018, 0],
          [23.16832, 41.90051, 0],
          [23.16858, 41.90097, 0],
          [23.16863, 41.90104, 0],
          [23.16888, 41.9013, 0],
          [23.16959, 41.90211, 0],
          [23.17022, 41.90289, 0],
          [23.17127, 41.90398, 0],
          [23.17239, 41.90508, 0],
          [23.17284, 41.90578, 0],
          [23.17285, 41.90579, 0],
          [23.17308, 41.90625, 0],
          [23.17346, 41.90692, 0],
          [23.17353, 41.90701, 0],
          [23.17367, 41.90713, 0],
          [23.1738, 41.90722, 0],
          [23.174, 41.90733, 0],
          [23.17421, 41.90741, 0],
          [23.17422, 41.90742, 0],
          [23.17443, 41.90748, 0],
          [23.17473, 41.90751, 0],
          [23.17503, 41.90752, 0],
          [23.17595, 41.90751, 0],
          [23.17637, 41.90755, 0],
          [23.17687, 41.90765, 0],
          [23.17717, 41.90775, 0],
          [23.17745, 41.90787, 0],
          [23.17768, 41.90799, 0],
          [23.17848, 41.90845, 0],
          [23.17855, 41.90847, 0],
          [23.17872, 41.9085, 0],
          [23.17874, 41.90851, 0],
          [23.17893, 41.90854, 0],
          [23.17918, 41.90855, 0],
          [23.18088, 41.90854, 0],
          [23.1812, 41.90855, 0],
          [23.18167, 41.9086, 0],
          [23.18202, 41.90866, 0],
          [23.18207, 41.90868, 0],
          [23.1823, 41.90873, 0],
          [23.1829, 41.9089, 0],
          [23.18295, 41.90892, 0],
          [23.18296, 41.90893, 0],
          [23.18329, 41.90904, 0],
          [23.18354, 41.90917, 0],
          [23.18371, 41.90928, 0],
          [23.18372, 41.90928, 0],
          [23.18422, 41.9096, 0],
          [23.18442, 41.90977, 0],
          [23.18451, 41.90986, 0],
          [23.18457, 41.90991, 0],
          [23.18501, 41.91043, 0],
          [23.18512, 41.91059, 0],
          [23.18529, 41.91088, 0],
          [23.18541, 41.91106, 0],
          [23.18552, 41.91119, 0],
          [23.18557, 41.91123, 0],
          [23.18565, 41.91131, 0],
          [23.1857, 41.91135, 0],
          [23.18573, 41.91136, 0],
          [23.1858, 41.91141, 0],
          [23.18596, 41.9115, 0],
          [23.18615, 41.91156, 0],
          [23.18675, 41.91171, 0],
          [23.18741, 41.91179, 0],
          [23.18779, 41.91185, 0],
          [23.18822, 41.91197, 0],
          [23.18846, 41.91207, 0],
          [23.18866, 41.91218, 0],
          [23.1901, 41.91313, 0],
          [23.19177, 41.91447, 0],
          [23.19203, 41.91465, 0],
          [23.19217, 41.91473, 0],
          [23.19232, 41.9148, 0],
          [23.19338, 41.91522, 0],
          [23.19355, 41.91533, 0],
          [23.19372, 41.91547, 0],
          [23.19387, 41.91564, 0],
          [23.1941, 41.91606, 0],
          [23.19442, 41.91681, 0],
          [23.19483, 41.91766, 0],
          [23.19488, 41.91781, 0],
          [23.19507, 41.91821, 0],
          [23.19516, 41.91837, 0],
          [23.19532, 41.91861, 0],
          [23.19553, 41.91885, 0],
          [23.19567, 41.91904, 0],
          [23.19577, 41.91921, 0],
          [23.19609, 41.91984, 0],
          [23.19618, 41.92006, 0],
          [23.19655, 41.92081, 0],
          [23.19672, 41.92106, 0],
          [23.19687, 41.92122, 0],
          [23.1969, 41.92126, 0],
          [23.19715, 41.92145, 0],
          [23.1976, 41.92172, 0],
          [23.1977, 41.92177, 0],
          [23.19797, 41.92195, 0],
          [23.19811, 41.92207, 0],
          [23.19812, 41.92209, 0],
          [23.19818, 41.92214, 0],
          [23.19824, 41.92222, 0],
          [23.19832, 41.92235, 0],
          [23.1984, 41.92254, 0],
          [23.19865, 41.92332, 0],
          [23.1987, 41.92345, 0],
          [23.19878, 41.92371, 0],
          [23.19882, 41.9238, 0],
          [23.19888, 41.92397, 0],
          [23.19898, 41.92421, 0],
          [23.19905, 41.92433, 0],
          [23.19922, 41.92457, 0],
          [23.19939, 41.92473, 0],
          [23.20148, 41.92624, 0],
          [23.2016, 41.92631, 0],
          [23.2022, 41.92661, 0],
          [23.20248, 41.92672, 0],
          [23.20286, 41.92682, 0],
          [23.20294, 41.92685, 0],
          [23.20314, 41.92689, 0],
          [23.20459, 41.92706, 0],
          [23.20547, 41.92728, 0],
          [23.20594, 41.92735, 0],
          [23.20673, 41.92741, 0],
          [23.20679, 41.92742, 0],
          [23.20687, 41.92742, 0],
          [23.20787, 41.9275, 0],
          [23.20832, 41.92759, 0],
          [23.2093, 41.92784, 0],
          [23.21012, 41.92802, 0],
          [23.21059, 41.92822, 0],
          [23.21086, 41.92837, 0],
          [23.21172, 41.92891, 0],
          [23.21322, 41.9298, 0],
          [23.21344, 41.92991, 0],
          [23.2136, 41.92997, 0],
          [23.21371, 41.93, 0],
          [23.21379, 41.93003, 0],
          [23.21395, 41.93006, 0],
          [23.21414, 41.93008, 0],
          [23.21439, 41.93009, 0],
          [23.21444, 41.93008, 0],
          [23.21473, 41.93006, 0],
          [23.21539, 41.92993, 0],
          [23.2154, 41.92992, 0],
          [23.216, 41.92981, 0],
          [23.21755, 41.92939, 0],
          [23.21766, 41.92937, 0],
          [23.21808, 41.92926, 0],
          [23.21836, 41.92921, 0],
          [23.21847, 41.9292, 0],
          [23.21866, 41.9292, 0],
          [23.21883, 41.92921, 0],
          [23.21955, 41.92929, 0],
          [23.21984, 41.92929, 0],
          [23.21995, 41.92928, 0],
          [23.22036, 41.92915, 0],
          [23.22054, 41.92907, 0],
          [23.22073, 41.92897, 0],
          [23.22113, 41.92871, 0],
          [23.22137, 41.92858, 0],
          [23.22147, 41.92854, 0],
          [23.22178, 41.92844, 0],
          [23.22294, 41.92817, 0],
          [23.2234, 41.92802, 0],
          [23.22352, 41.92799, 0],
          [23.22461, 41.92756, 0],
          [23.22469, 41.92752, 0],
          [23.22497, 41.92741, 0],
          [23.22532, 41.92729, 0],
          [23.22534, 41.92729, 0],
          [23.22707, 41.92684, 0],
          [23.22759, 41.92673, 0],
          [23.2279, 41.9267, 0],
          [23.22854, 41.92667, 0],
          [23.22918, 41.92666, 0],
          [23.2297, 41.92663, 0],
          [23.23022, 41.92656, 0],
          [23.23027, 41.92656, 0],
          [23.23089, 41.9264, 0],
          [23.23202, 41.92599, 0],
          [23.23248, 41.92584, 0],
          [23.23298, 41.9257, 0],
          [23.23361, 41.92556, 0],
          [23.23425, 41.92549, 0],
          [23.23583, 41.92549, 0],
          [23.23604, 41.92548, 0],
          [23.23649, 41.92543, 0],
          [23.23866, 41.92506, 0],
          [23.23946, 41.92481, 0],
          [23.23947, 41.9248, 0],
          [23.24022, 41.92459, 0],
          [23.24077, 41.92449, 0],
          [23.2422, 41.9243, 0],
          [23.24244, 41.92428, 0],
          [23.24338, 41.92413, 0],
          [23.24464, 41.92388, 0],
          [23.24479, 41.92387, 0],
          [23.24503, 41.92384, 0],
          [23.24527, 41.92383, 0],
          [23.24554, 41.9238, 0],
          [23.24626, 41.92377, 0],
          [23.2464, 41.92374, 0],
          [23.24669, 41.92365, 0],
          [23.24694, 41.92353, 0],
          [23.24765, 41.92311, 0],
          [23.2477, 41.92309, 0],
          [23.24872, 41.92256, 0],
          [23.24904, 41.92242, 0],
          [23.24969, 41.92219, 0],
          [23.25024, 41.92202, 0],
          [23.25045, 41.92193, 0],
          [23.25065, 41.92183, 0],
          [23.25083, 41.92172, 0],
          [23.25083, 41.92171, 0],
          [23.25156, 41.92118, 0],
          [23.2517, 41.9211, 0],
          [23.25171, 41.9211, 0],
          [23.25182, 41.92105, 0],
          [23.25205, 41.92099, 0],
          [23.25219, 41.92099, 0],
          [23.25244, 41.92101, 0],
          [23.25345, 41.92118, 0],
          [23.25359, 41.92118, 0],
          [23.25373, 41.92119, 0],
          [23.25431, 41.92117, 0],
          [23.25455, 41.92115, 0],
          [23.2546, 41.92114, 0],
          [23.25524, 41.92114, 0],
          [23.25666, 41.9213, 0],
          [23.25681, 41.9213, 0],
          [23.25695, 41.92129, 0],
          [23.25723, 41.92123, 0],
          [23.25753, 41.92113, 0],
          [23.26005, 41.91991, 0],
          [23.26076, 41.91959, 0],
          [23.26089, 41.91954, 0],
          [23.26111, 41.91949, 0],
          [23.26149, 41.91946, 0],
          [23.26159, 41.91947, 0],
          [23.26183, 41.91947, 0],
          [23.26189, 41.91948, 0],
          [23.26198, 41.91948, 0],
          [23.26208, 41.91949, 0],
          [23.26321, 41.91953, 0],
          [23.26445, 41.91949, 0],
          [23.26454, 41.91948, 0],
          [23.26552, 41.91944, 0],
          [23.26589, 41.91939, 0],
          [23.26614, 41.91933, 0],
          [23.26621, 41.91932, 0],
          [23.2666, 41.9192, 0],
          [23.26677, 41.91913, 0],
          [23.26717, 41.91894, 0],
          [23.26761, 41.91868, 0],
          [23.2678, 41.91859, 0],
          [23.26786, 41.91858, 0],
          [23.2681, 41.9185, 0],
          [23.26893, 41.91836, 0],
          [23.27123, 41.91784, 0],
          [23.27151, 41.91775, 0],
          [23.27263, 41.91722, 0],
          [23.27293, 41.91711, 0],
          [23.27324, 41.91704, 0],
          [23.27358, 41.917, 0],
          [23.27494, 41.91692, 0],
          [23.27499, 41.91691, 0],
          [23.27503, 41.91691, 0],
          [23.27553, 41.91679, 0],
          [23.27622, 41.91654, 0],
          [23.27658, 41.91646, 0],
          [23.27921, 41.91629, 0],
          [23.28042, 41.91625, 0],
          [23.28222, 41.91625, 0],
          [23.28246, 41.91623, 0],
          [23.28281, 41.91614, 0],
          [23.28299, 41.91607, 0],
          [23.28342, 41.91585, 0],
          [23.28464, 41.91516, 0],
          [23.2865, 41.91419, 0],
          [23.28712, 41.91394, 0],
          [23.28744, 41.91377, 0],
          [23.28793, 41.9134, 0],
          [23.28803, 41.91331, 0],
          [23.28809, 41.91327, 0],
          [23.28904, 41.91253, 0],
          [23.28936, 41.91234, 0],
          [23.28949, 41.91228, 0],
          [23.28956, 41.91224, 0],
          [23.28988, 41.91211, 0],
          [23.29002, 41.91208, 0],
          [23.29027, 41.91205, 0],
          [23.29132, 41.91213, 0],
          [23.29382, 41.91241, 0],
          [23.29414, 41.91243, 0],
          [23.2942, 41.91242, 0],
          [23.29435, 41.91241, 0],
          [23.29462, 41.91236, 0],
          [23.29487, 41.91227, 0],
          [23.29586, 41.91176, 0],
          [23.29612, 41.91166, 0],
          [23.29643, 41.91161, 0],
          [23.29659, 41.9116, 0],
          [23.29679, 41.9116, 0],
          [23.29767, 41.91171, 0],
          [23.29798, 41.91173, 0],
          [23.29832, 41.91168, 0],
          [23.29842, 41.91165, 0],
          [23.29859, 41.91158, 0],
          [23.29867, 41.91154, 0],
          [23.29911, 41.91122, 0],
          [23.29971, 41.91066, 0],
          [23.29997, 41.91047, 0],
          [23.30172, 41.90972, 0],
          [23.30202, 41.90954, 0],
          [23.30217, 41.90941, 0],
          [23.30226, 41.90928, 0],
          [23.30235, 41.90913, 0],
          [23.3024, 41.90894, 0],
          [23.30241, 41.90887, 0],
          [23.30239, 41.90855, 0],
          [23.30234, 41.90833, 0],
          [23.30234, 41.90832, 0],
          [23.30227, 41.90806, 0],
          [23.30224, 41.90785, 0],
          [23.30225, 41.90767, 0],
          [23.30234, 41.90735, 0],
          [23.30246, 41.90716, 0],
          [23.30281, 41.9068, 0],
          [23.30344, 41.90635, 0],
          [23.30375, 41.90621, 0],
          [23.30413, 41.90612, 0],
          [23.30508, 41.90601, 0],
          [23.30541, 41.90593, 0],
          [23.30599, 41.90576, 0],
          [23.30749, 41.90526, 0],
          [23.30794, 41.90508, 0],
          [23.30826, 41.90493, 0],
          [23.30962, 41.90418, 0],
          [23.30976, 41.90407, 0],
          [23.31004, 41.90382, 0],
          [23.31018, 41.90363, 0],
          [23.31034, 41.90344, 0],
          [23.31065, 41.90321, 0],
          [23.31086, 41.9031, 0],
          [23.31089, 41.90308, 0],
          [23.31185, 41.90277, 0],
          [23.31222, 41.90261, 0],
          [23.31304, 41.90213, 0],
          [23.31344, 41.90198, 0],
          [23.31374, 41.9019, 0],
          [23.3145, 41.90176, 0],
          [23.31474, 41.90168, 0],
          [23.31493, 41.90158, 0],
          [23.31643, 41.90045, 0],
          [23.31659, 41.90036, 0],
          [23.31696, 41.90023, 0],
          [23.31717, 41.90017, 0],
          [23.31732, 41.90015, 0],
          [23.31747, 41.90014, 0],
          [23.31771, 41.90014, 0],
          [23.31843, 41.90018, 0],
          [23.31871, 41.90018, 0],
          [23.31915, 41.90013, 0],
          [23.31936, 41.90009, 0],
          [23.31938, 41.90008, 0],
          [23.31961, 41.90001, 0],
          [23.31996, 41.89985, 0],
          [23.32026, 41.89966, 0],
          [23.32033, 41.8996, 0],
          [23.32043, 41.89948, 0],
          [23.32065, 41.89916, 0],
          [23.32065, 41.89915, 0],
          [23.32102, 41.89848, 0],
          [23.32124, 41.89815, 0],
          [23.32142, 41.89796, 0],
          [23.32152, 41.89788, 0],
          [23.32166, 41.89779, 0],
          [23.32201, 41.89764, 0],
          [23.32276, 41.89746, 0],
          [23.32338, 41.89734, 0],
          [23.32339, 41.89734, 0],
          [23.3251, 41.89699, 0],
          [23.32547, 41.89687, 0],
          [23.32555, 41.89685, 0],
          [23.32568, 41.89678, 0],
          [23.32572, 41.89677, 0],
          [23.32589, 41.89665, 0],
          [23.32609, 41.89649, 0],
          [23.32898, 41.89345, 0],
          [23.33012, 41.89216, 0],
          [23.33052, 41.89177, 0],
          [23.33079, 41.89154, 0],
          [23.3308, 41.89154, 0],
          [23.33117, 41.89124, 0],
          [23.33554, 41.88825, 0],
          [23.33555, 41.88824, 0],
          [23.33983, 41.88533, 0],
          [23.34073, 41.88475, 0],
          [23.34158, 41.88429, 0],
          [23.34193, 41.88414, 0],
          [23.34194, 41.88413, 0],
          [23.34213, 41.88404, 0],
          [23.34214, 41.88404, 0],
          [23.34628, 41.8822, 0],
          [23.34629, 41.8822, 0],
          [23.34753, 41.88165, 0],
          [23.34754, 41.88165, 0],
          [23.34817, 41.88138, 0],
          [23.3489, 41.88119, 0],
          [23.34901, 41.88118, 0],
          [23.34965, 41.88119, 0],
          [23.35105, 41.88133, 0],
          [23.35154, 41.88134, 0],
          [23.35187, 41.88131, 0],
          [23.35278, 41.88118, 0],
          [23.35281, 41.88117, 0],
          [23.35315, 41.88114, 0],
          [23.35426, 41.88113, 0],
          [23.3544, 41.88114, 0],
          [23.35475, 41.88114, 0],
          [23.35516, 41.88119, 0],
          [23.35542, 41.88124, 0],
          [23.35578, 41.88134, 0],
          [23.35613, 41.88146, 0],
          [23.35749, 41.88204, 0],
          [23.35761, 41.88208, 0],
          [23.3582, 41.88232, 0],
          [23.35908, 41.8826, 0],
          [23.36114, 41.88307, 0],
          [23.36549, 41.88396, 0],
          [23.36595, 41.88404, 0],
          [23.36634, 41.88406, 0],
          [23.3694, 41.88399, 0],
          [23.37184, 41.88429, 0],
          [23.37442, 41.88426, 0],
          [23.37512, 41.8842, 0],
          [23.37572, 41.88413, 0],
          [23.3763, 41.884, 0],
          [23.37884, 41.88333, 0],
          [23.37909, 41.88329, 0],
          [23.3795, 41.88326, 0],
          [23.37996, 41.88328, 0],
          [23.38122, 41.88342, 0],
          [23.38148, 41.88346, 0],
          [23.38175, 41.88348, 0],
          [23.38223, 41.88347, 0],
          [23.38246, 41.88343, 0],
          [23.38293, 41.88332, 0],
          [23.38339, 41.88314, 0],
          [23.38426, 41.88275, 0],
          [23.38457, 41.88265, 0],
          [23.38493, 41.88256, 0],
          [23.38582, 41.8824, 0],
          [23.38617, 41.88232, 0],
          [23.38676, 41.88216, 0],
          [23.3875, 41.8819, 0],
          [23.38799, 41.88169, 0],
          [23.38831, 41.88153, 0],
          [23.3889, 41.8812, 0],
          [23.38917, 41.88108, 0],
          [23.38933, 41.88099, 0],
          [23.39243, 41.87981, 0],
          [23.39407, 41.87923, 0],
          [23.39433, 41.87916, 0],
          [23.39493, 41.87904, 0],
          [23.39671, 41.87885, 0],
          [23.39726, 41.87877, 0],
          [23.39772, 41.87867, 0],
          [23.39893, 41.87831, 0],
          [23.39929, 41.87819, 0],
          [23.39979, 41.87806, 0],
          [23.40002, 41.87803, 0],
          [23.40033, 41.87802, 0],
          [23.40102, 41.87811, 0],
          [23.40271, 41.87839, 0],
          [23.40302, 41.87842, 0],
          [23.40332, 41.87843, 0],
          [23.40377, 41.87842, 0],
          [23.40443, 41.87836, 0],
          [23.40474, 41.87831, 0],
          [23.40505, 41.87824, 0],
          [23.40549, 41.8781, 0],
          [23.40695, 41.87758, 0],
          [23.40699, 41.87757, 0],
          [23.41482, 41.87464, 0],
          [23.41486, 41.87463, 0],
          [23.41571, 41.87429, 0],
          [23.41575, 41.87428, 0],
          [23.41828, 41.87335, 0],
          [23.41848, 41.8733, 0],
          [23.41878, 41.87325, 0],
          [23.41926, 41.87323, 0],
          [23.42528, 41.87361, 0],
          [23.42547, 41.87363, 0],
          [23.42553, 41.87363, 0],
          [23.42563, 41.87361, 0],
          [23.43024, 41.8737, 0],
          [23.43113, 41.87368, 0],
          [23.43172, 41.8736, 0],
          [23.43216, 41.8735, 0],
          [23.43268, 41.87333, 0],
          [23.43337, 41.87304, 0],
          [23.43338, 41.87304, 0],
          [23.43343, 41.87303, 0],
          [23.43352, 41.87299, 0],
          [23.43353, 41.87298, 0],
          [23.43388, 41.87277, 0],
          [23.43409, 41.87261, 0],
          [23.43516, 41.87164, 0],
          [23.43632, 41.87051, 0],
          [23.43681, 41.87015, 0],
          [23.43754, 41.86976, 0],
          [23.43757, 41.86974, 0],
          [23.4385, 41.86935, 0],
          [23.43948, 41.86909, 0],
          [23.44022, 41.86903, 0],
          [23.44094, 41.86901, 0],
          [23.4424, 41.86901, 0],
          [23.44529, 41.86908, 0],
          [23.44688, 41.86915, 0],
          [23.4477, 41.86921, 0],
          [23.46207, 41.87119, 0],
          [23.46286, 41.87128, 0],
          [23.46291, 41.87129, 0],
          [23.4642, 41.87139, 0],
          [23.46593, 41.87142, 0],
          [23.46823, 41.87131, 0],
          [23.47139, 41.87111, 0],
          [23.47199, 41.87105, 0],
          [23.47218, 41.871, 0],
          [23.47275, 41.87088, 0],
          [23.47341, 41.8707, 0],
          [23.47376, 41.87059, 0],
          [23.47381, 41.87065, 0],
          [23.47417, 41.87087, 0],
          [23.47433, 41.87094, 0],
          [23.47442, 41.87096, 0],
          [23.4751, 41.8709, 0],
          [23.47565, 41.8709, 0],
          [23.47592, 41.87093, 0],
          [23.4762, 41.87098, 0],
          [23.47683, 41.87113, 0],
          [23.47711, 41.87123, 0],
          [23.47755, 41.87141, 0],
          [23.47791, 41.87159, 0],
          [23.47824, 41.87179, 0],
          [23.47879, 41.87222, 0],
          [23.47915, 41.87259, 0],
          [23.47939, 41.87292, 0],
          [23.47982, 41.87358, 0],
          [23.47984, 41.8736, 0],
          [23.47994, 41.87377, 0],
          [23.48023, 41.87421, 0],
          [23.48025, 41.87425, 0],
          [23.48065, 41.87488, 0],
          [23.48067, 41.8749, 0],
          [23.48238, 41.87763, 0],
          [23.48299, 41.87846, 0],
          [23.4834, 41.87887, 0],
          [23.48341, 41.87887, 0],
          [23.48383, 41.87925, 0],
          [23.48403, 41.87939, 0],
          [23.48455, 41.87972, 0],
          [23.48483, 41.87987, 0],
          [23.485, 41.87995, 0],
          [23.48503, 41.87997, 0],
          [23.48524, 41.88008, 0],
          [23.48767, 41.88105, 0],
          [23.48779, 41.88109, 0],
          [23.49032, 41.88212, 0],
          [23.49073, 41.88227, 0],
          [23.49074, 41.88228, 0],
          [23.49326, 41.88332, 0],
          [23.49834, 41.88533, 0],
          [23.49844, 41.88533, 0],
          [23.5012, 41.88641, 0],
          [23.50124, 41.88644, 0],
          [23.50178, 41.88666, 0],
          [23.50184, 41.88673, 0],
          [23.50222, 41.88689, 0],
          [23.50298, 41.88718, 0],
          [23.50335, 41.88729, 0],
          [23.50358, 41.88734, 0],
          [23.50368, 41.88737, 0],
          [23.50398, 41.88741, 0],
          [23.50437, 41.88744, 0],
          [23.50483, 41.88743, 0],
          [23.50525, 41.88738, 0],
          [23.5056, 41.88731, 0],
          [23.50603, 41.88719, 0],
          [23.50729, 41.88666, 0],
          [23.50758, 41.88656, 0],
          [23.50769, 41.88651, 0],
          [23.50794, 41.88644, 0],
          [23.50837, 41.88638, 0],
          [23.50855, 41.88637, 0],
          [23.50909, 41.88637, 0],
          [23.5091, 41.88638, 0],
          [23.50939, 41.8864, 0],
          [23.50964, 41.88644, 0],
          [23.50991, 41.8865, 0],
          [23.50994, 41.88652, 0],
          [23.51, 41.88655, 0],
          [23.51391, 41.88782, 0],
          [23.51439, 41.88795, 0],
          [23.51875, 41.88852, 0],
          [23.51992, 41.88865, 0],
          [23.51995, 41.88866, 0],
          [23.52064, 41.88871, 0],
          [23.52133, 41.88873, 0],
          [23.52209, 41.88872, 0],
          [23.52677, 41.88843, 0],
          [23.52747, 41.88836, 0],
          [23.52779, 41.8883, 0],
          [23.52833, 41.88814, 0],
          [23.52844, 41.8881, 0],
          [23.52859, 41.88806, 0],
          [23.52887, 41.88795, 0],
          [23.52891, 41.88793, 0],
          [23.52986, 41.88766, 0],
          [23.53023, 41.88761, 0],
          [23.53048, 41.88762, 0],
          [23.53078, 41.88767, 0],
          [23.53094, 41.88772, 0],
          [23.5319, 41.88809, 0],
          [23.53242, 41.88834, 0],
          [23.53262, 41.88845, 0],
          [23.53282, 41.88862, 0],
          [23.53295, 41.88883, 0],
          [23.53298, 41.8889, 0],
          [23.53303, 41.88906, 0],
          [23.53304, 41.88908, 0],
          [23.53307, 41.88932, 0],
          [23.53309, 41.88965, 0],
          [23.5331, 41.89052, 0],
          [23.53311, 41.89061, 0],
          [23.53315, 41.89071, 0],
          [23.53323, 41.89083, 0],
          [23.53342, 41.89106, 0],
          [23.53359, 41.89121, 0],
          [23.53369, 41.89127, 0],
          [23.53398, 41.89138, 0],
          [23.53504, 41.89167, 0],
          [23.53534, 41.89178, 0],
          [23.53544, 41.89186, 0],
          [23.53545, 41.89186, 0],
          [23.53558, 41.892, 0],
          [23.53558, 41.89201, 0],
          [23.5356, 41.89204, 0],
          [23.53565, 41.89216, 0],
          [23.53568, 41.89246, 0],
          [23.53569, 41.89272, 0],
          [23.53565, 41.89324, 0],
          [23.53567, 41.89338, 0],
          [23.5357, 41.89346, 0],
          [23.53577, 41.89356, 0],
          [23.53583, 41.89361, 0],
          [23.53596, 41.89369, 0],
          [23.53607, 41.89374, 0],
          [23.53623, 41.89378, 0],
          [23.53635, 41.89379, 0],
          [23.53661, 41.89377, 0],
          [23.53696, 41.89378, 0],
          [23.5371, 41.8938, 0],
          [23.53716, 41.89382, 0],
          [23.53722, 41.89383, 0],
          [23.53729, 41.89386, 0],
          [23.53742, 41.8939, 0],
          [23.53817, 41.89429, 0],
          [23.53838, 41.89452, 0],
          [23.53849, 41.89467, 0],
          [23.53875, 41.89488, 0],
          [23.53885, 41.89494, 0],
          [23.53916, 41.89507, 0],
          [23.53942, 41.89522, 0],
          [23.53988, 41.89534, 0],
          [23.54029, 41.89538, 0],
          [23.54082, 41.89535, 0],
          [23.54109, 41.89529, 0],
          [23.54115, 41.89529, 0],
          [23.54189, 41.89514, 0],
          [23.5424, 41.895, 0],
          [23.54249, 41.89493, 0],
          [23.54256, 41.89484, 0],
          [23.54258, 41.89479, 0],
          [23.54262, 41.89465, 0],
          [23.54262, 41.89459, 0],
          [23.54264, 41.89442, 0],
          [23.54266, 41.89406, 0],
          [23.54273, 41.89359, 0],
          [23.54279, 41.89343, 0],
          [23.54288, 41.8933, 0],
          [23.54302, 41.89316, 0],
          [23.54315, 41.89309, 0],
          [23.54332, 41.89303, 0],
          [23.54358, 41.89297, 0],
          [23.54442, 41.89285, 0],
          [23.54521, 41.89265, 0],
          [23.54568, 41.89256, 0],
          [23.54571, 41.89255, 0],
          [23.54591, 41.89251, 0],
          [23.54598, 41.89249, 0],
          [23.54627, 41.89244, 0],
          [23.54698, 41.89239, 0],
          [23.5471, 41.8924, 0],
          [23.54744, 41.8924, 0],
          [23.54806, 41.89249, 0],
          [23.54851, 41.89261, 0],
          [23.54876, 41.8927, 0],
          [23.54915, 41.89287, 0],
          [23.5494, 41.89296, 0],
          [23.54948, 41.89298, 0],
          [23.54994, 41.893, 0],
          [23.551, 41.89298, 0],
          [23.55148, 41.89303, 0],
          [23.55219, 41.89314, 0],
          [23.55246, 41.89317, 0],
          [23.55345, 41.8932, 0],
          [23.55375, 41.89318, 0],
          [23.55507, 41.89289, 0],
          [23.55521, 41.89284, 0],
          [23.55615, 41.89239, 0],
          [23.55622, 41.89235, 0],
          [23.55669, 41.89217, 0],
          [23.55783, 41.89182, 0],
          [23.55797, 41.89176, 0],
          [23.55834, 41.89157, 0],
          [23.55859, 41.89139, 0],
          [23.5594, 41.89063, 0],
          [23.55959, 41.89053, 0],
          [23.55964, 41.89052, 0],
          [23.55984, 41.8905, 0],
          [23.56007, 41.89049, 0],
          [23.56256, 41.89059, 0],
          [23.56297, 41.89057, 0],
          [23.56316, 41.89055, 0],
          [23.56321, 41.89053, 0],
          [23.56352, 41.89045, 0],
          [23.56376, 41.89036, 0],
          [23.56404, 41.89021, 0],
          [23.56422, 41.89009, 0],
          [23.56441, 41.88992, 0],
          [23.56461, 41.88971, 0],
          [23.56487, 41.88939, 0],
          [23.56502, 41.88916, 0],
          [23.56517, 41.88888, 0],
          [23.56525, 41.88871, 0],
          [23.56531, 41.88855, 0],
          [23.56536, 41.88836, 0],
          [23.56538, 41.88819, 0],
          [23.56538, 41.88814, 0],
          [23.56539, 41.88812, 0],
          [23.56539, 41.88796, 0],
          [23.56536, 41.88772, 0],
          [23.56535, 41.88768, 0],
          [23.56517, 41.88721, 0],
          [23.56489, 41.88657, 0],
          [23.56488, 41.88657, 0],
          [23.56486, 41.8864, 0],
          [23.56486, 41.88637, 0],
          [23.56487, 41.88629, 0],
          [23.56493, 41.88615, 0],
          [23.56503, 41.88596, 0],
          [23.56513, 41.88583, 0],
          [23.56522, 41.88574, 0],
          [23.56529, 41.88568, 0],
          [23.56549, 41.88556, 0],
          [23.56566, 41.88549, 0],
          [23.56589, 41.88543, 0],
          [23.56611, 41.88539, 0],
          [23.56642, 41.88536, 0],
          [23.56695, 41.88533, 0],
          [23.56734, 41.88533, 0],
          [23.56749, 41.88535, 0],
          [23.56789, 41.88538, 0],
          [23.57058, 41.88579, 0],
          [23.57093, 41.886, 0],
          [23.57099, 41.88606, 0],
          [23.57141, 41.8869, 0],
          [23.57193, 41.88851, 0],
          [23.57198, 41.88863, 0],
          [23.57204, 41.88875, 0],
          [23.57212, 41.88887, 0],
          [23.57218, 41.88894, 0],
          [23.57233, 41.88908, 0],
          [23.57253, 41.88923, 0],
          [23.57269, 41.8893, 0],
          [23.5727, 41.88931, 0],
          [23.5728, 41.88936, 0],
          [23.57359, 41.8896, 0],
          [23.57424, 41.88977, 0],
          [23.57459, 41.8899, 0],
          [23.57471, 41.88997, 0],
          [23.57486, 41.89008, 0],
          [23.57487, 41.89008, 0],
          [23.57496, 41.8902, 0],
          [23.57505, 41.89037, 0],
          [23.5751, 41.89059, 0],
          [23.57512, 41.89093, 0],
          [23.57507, 41.89137, 0],
          [23.57503, 41.89158, 0],
          [23.57499, 41.89168, 0],
          [23.57492, 41.89181, 0],
          [23.5748, 41.89198, 0],
          [23.57347, 41.89348, 0],
          [23.57337, 41.89358, 0],
          [23.57321, 41.89383, 0],
          [23.57308, 41.89412, 0],
          [23.57308, 41.89414, 0],
          [23.57302, 41.89431, 0],
          [23.57298, 41.89467, 0],
          [23.57298, 41.89503, 0],
          [23.57297, 41.89517, 0],
          [23.57303, 41.89538, 0],
          [23.57304, 41.89546, 0],
          [23.57309, 41.89556, 0],
          [23.57315, 41.89571, 0],
          [23.5733, 41.89597, 0],
          [23.57391, 41.89686, 0],
          [23.5741, 41.89719, 0],
          [23.57428, 41.89758, 0],
          [23.57436, 41.89788, 0],
          [23.57439, 41.89804, 0],
          [23.57439, 41.8983, 0],
          [23.57434, 41.89859, 0],
          [23.57419, 41.89894, 0],
          [23.57408, 41.8991, 0],
          [23.57384, 41.89941, 0],
          [23.57339, 41.89992, 0],
          [23.5732, 41.90017, 0],
          [23.57291, 41.9006, 0],
          [23.57279, 41.9009, 0],
          [23.57272, 41.9012, 0],
          [23.57267, 41.90148, 0],
          [23.57267, 41.9018, 0],
          [23.5728, 41.90221, 0],
          [23.57297, 41.90265, 0],
          [23.57507, 41.90873, 0],
          [23.5753, 41.90924, 0],
          [23.57902, 41.91551, 0],
          [23.57967, 41.91531, 0],
          [23.58032, 41.91519, 0],
          [23.58476, 41.91459, 0],
          [23.5848, 41.91458, 0],
          [23.58485, 41.9142, 0],
          [23.58496, 41.91372, 0],
          [23.58576, 41.91073, 0],
          [23.58587, 41.91041, 0],
          [23.58639, 41.9091, 0],
          [23.58643, 41.90888, 0],
          [23.58641, 41.90878, 0],
          [23.58633, 41.90868, 0],
          [23.5858, 41.90822, 0],
          [23.58607, 41.90811, 0],
          [23.58615, 41.90809, 0],
          [23.58624, 41.90809, 0],
          [23.58639, 41.90811, 0],
          [23.58815, 41.90858, 0],
          [23.58829, 41.9086, 0],
          [23.58915, 41.90865, 0],
          [23.58926, 41.90864, 0],
          [23.58931, 41.90863, 0],
          [23.58939, 41.9086, 0],
          [23.58945, 41.90856, 0],
          [23.58948, 41.90851, 0],
          [23.58948, 41.9085, 0],
          [23.58949, 41.90849, 0],
          [23.58947, 41.90842, 0],
          [23.58945, 41.90839, 0],
          [23.58943, 41.90837, 0],
          [23.58939, 41.90834, 0],
          [23.58922, 41.90825, 0],
          [23.58874, 41.90806, 0],
          [23.58853, 41.90795, 0],
          [23.58833, 41.9078, 0],
          [23.5881, 41.90758, 0],
          [23.58784, 41.90739, 0],
          [23.58772, 41.90734, 0],
          [23.58729, 41.90722, 0],
          [23.58726, 41.90722, 0],
          [23.58703, 41.90716, 0],
          [23.58659, 41.90707, 0],
          [23.58648, 41.90703, 0],
          [23.5864, 41.90698, 0],
          [23.58635, 41.90693, 0],
          [23.58633, 41.90688, 0],
          [23.58632, 41.90681, 0],
          [23.58632, 41.90679, 0],
          [23.58633, 41.90675, 0],
          [23.58637, 41.90668, 0],
          [23.58642, 41.90662, 0],
          [23.58649, 41.90655, 0],
          [23.58663, 41.90645, 0],
          [23.5867, 41.90641, 0],
          [23.5868, 41.90637, 0],
          [23.587, 41.90633, 0],
          [23.58703, 41.90632, 0],
          [23.58724, 41.90632, 0],
          [23.58757, 41.90636, 0],
          [23.58794, 41.90644, 0],
          [23.58795, 41.90644, 0],
          [23.58917, 41.9068, 0],
          [23.59013, 41.90711, 0],
          [23.59037, 41.90716, 0],
          [23.59045, 41.90717, 0],
          [23.59052, 41.90717, 0],
          [23.59066, 41.90715, 0],
          [23.59095, 41.90705, 0],
          [23.59204, 41.90659, 0],
          [23.59253, 41.90641, 0],
          [23.59277, 41.9063, 0],
          [23.59424, 41.90494, 0],
          [23.59443, 41.90482, 0],
          [23.59512, 41.90445, 0],
          [23.59521, 41.90442, 0],
          [23.5953, 41.9044, 0],
          [23.5954, 41.9044, 0],
          [23.59548, 41.90442, 0],
          [23.59557, 41.90446, 0],
          [23.59563, 41.90451, 0],
          [23.59567, 41.90457, 0],
          [23.59569, 41.90465, 0],
          [23.5957, 41.90589, 0],
          [23.59572, 41.90607, 0],
          [23.5959, 41.90654, 0],
          [23.59626, 41.9074, 0],
          [23.59636, 41.90761, 0],
          [23.5967, 41.90813, 0],
          [23.59806, 41.90994, 0],
          [23.59831, 41.91021, 0],
          [23.59844, 41.9103, 0],
          [23.59863, 41.91039, 0],
          [23.59895, 41.91052, 0],
          [23.59941, 41.91064, 0],
          [23.59942, 41.91064, 0],
          [23.59994, 41.91081, 0],
          [23.60034, 41.91098, 0],
          [23.60046, 41.91106, 0],
          [23.60053, 41.91113, 0],
          [23.60068, 41.91131, 0],
          [23.60094, 41.91152, 0],
          [23.60115, 41.91161, 0],
          [23.6017, 41.91176, 0],
          [23.60182, 41.91181, 0],
          [23.60189, 41.91185, 0],
          [23.60195, 41.9119, 0],
          [23.60203, 41.91198, 0],
          [23.60207, 41.91205, 0],
          [23.6021, 41.91215, 0],
          [23.6022, 41.9126, 0],
          [23.60225, 41.91271, 0],
          [23.60234, 41.91281, 0],
          [23.60242, 41.91287, 0],
          [23.60266, 41.91295, 0],
          [23.60268, 41.91295, 0],
          [23.60315, 41.91303, 0],
          [23.60327, 41.91304, 0],
          [23.60337, 41.91306, 0],
          [23.60339, 41.91306, 0],
          [23.60344, 41.91307, 0],
          [23.60355, 41.91313, 0],
          [23.60366, 41.91326, 0],
          [23.60371, 41.91334, 0],
          [23.60402, 41.914, 0],
          [23.60403, 41.91401, 0],
          [23.60409, 41.91417, 0],
          [23.60413, 41.91433, 0],
          [23.60413, 41.91435, 0],
          [23.60414, 41.91438, 0],
          [23.60413, 41.91443, 0],
          [23.6039, 41.91487, 0],
          [23.60383, 41.91504, 0],
          [23.60381, 41.91516, 0],
          [23.60381, 41.91522, 0],
          [23.60382, 41.9153, 0],
          [23.60385, 41.91537, 0],
          [23.60391, 41.91547, 0],
          [23.60397, 41.91552, 0],
          [23.60402, 41.91555, 0],
          [23.6046, 41.91581, 0],
          [23.60472, 41.91588, 0],
          [23.60479, 41.91593, 0],
          [23.60495, 41.9161, 0],
          [23.60526, 41.91655, 0],
          [23.60556, 41.91705, 0],
          [23.60563, 41.91715, 0],
          [23.60567, 41.91726, 0],
          [23.60577, 41.91789, 0],
          [23.60581, 41.91801, 0],
          [23.60586, 41.91807, 0],
          [23.60587, 41.91809, 0],
          [23.60594, 41.91814, 0],
          [23.60605, 41.9182, 0],
          [23.60606, 41.9182, 0],
          [23.60667, 41.91843, 0],
          [23.60671, 41.91844, 0],
          [23.60878, 41.91923, 0],
          [23.60895, 41.91931, 0],
          [23.6091, 41.91946, 0],
          [23.60921, 41.91959, 0],
          [23.60957, 41.92019, 0],
          [23.60963, 41.92031, 0],
          [23.60967, 41.92035, 0],
          [23.60987, 41.92064, 0],
          [23.60999, 41.92084, 0],
          [23.61005, 41.92097, 0],
          [23.61018, 41.92133, 0],
          [23.61026, 41.92147, 0],
          [23.61032, 41.92155, 0],
          [23.61039, 41.9216, 0],
          [23.61047, 41.92163, 0],
          [23.61082, 41.9217, 0],
          [23.61097, 41.92175, 0],
          [23.61106, 41.92179, 0],
          [23.61113, 41.92184, 0],
          [23.61114, 41.92186, 0],
          [23.6112, 41.92191, 0],
          [23.61124, 41.922, 0],
          [23.61129, 41.92235, 0],
          [23.61132, 41.92299, 0],
          [23.61133, 41.92308, 0],
          [23.61133, 41.92316, 0],
          [23.61134, 41.92321, 0],
          [23.61136, 41.92326, 0],
          [23.61136, 41.92327, 0],
          [23.61139, 41.92333, 0],
          [23.61143, 41.92338, 0],
          [23.61155, 41.92346, 0],
          [23.61189, 41.9236, 0],
          [23.61211, 41.92366, 0],
          [23.61279, 41.92388, 0],
          [23.61319, 41.92408, 0],
          [23.61324, 41.92412, 0],
          [23.61343, 41.92421, 0],
          [23.61356, 41.92423, 0],
          [23.61432, 41.92427, 0],
          [23.61457, 41.92427, 0],
          [23.6146, 41.92428, 0],
          [23.61472, 41.9243, 0],
          [23.61478, 41.92432, 0],
          [23.61485, 41.92436, 0],
          [23.61492, 41.92443, 0],
          [23.61506, 41.92462, 0],
          [23.61522, 41.92492, 0],
          [23.61523, 41.92496, 0],
          [23.61544, 41.92548, 0],
          [23.61544, 41.92549, 0],
          [23.61547, 41.92555, 0],
          [23.61549, 41.92558, 0],
          [23.61552, 41.9256, 0],
          [23.61556, 41.92561, 0],
          [23.61557, 41.92561, 0],
          [23.6156, 41.92562, 0],
          [23.61564, 41.92562, 0],
          [23.61571, 41.9256, 0],
          [23.61579, 41.92556, 0],
          [23.61582, 41.92553, 0],
          [23.61587, 41.92549, 0],
          [23.6164, 41.92466, 0],
          [23.6165, 41.92454, 0],
          [23.6166, 41.92448, 0],
          [23.61668, 41.92446, 0],
          [23.61675, 41.92446, 0],
          [23.61681, 41.92448, 0],
          [23.61687, 41.92452, 0],
          [23.61699, 41.92463, 0],
          [23.61713, 41.92481, 0],
          [23.61722, 41.92496, 0],
          [23.61732, 41.92517, 0],
          [23.61745, 41.9255, 0],
          [23.61764, 41.9258, 0],
          [23.61777, 41.92595, 0],
          [23.61779, 41.92598, 0],
          [23.61793, 41.92611, 0],
          [23.61821, 41.9263, 0],
          [23.61843, 41.92649, 0],
          [23.61856, 41.92662, 0],
          [23.61856, 41.92663, 0],
          [23.61866, 41.92671, 0],
          [23.61873, 41.92675, 0],
          [23.6194, 41.92696, 0],
          [23.61943, 41.92698, 0],
          [23.61961, 41.92705, 0],
          [23.62002, 41.92733, 0],
          [23.62012, 41.92743, 0],
          [23.62015, 41.92747, 0],
          [23.62024, 41.92778, 0],
          [23.62029, 41.92791, 0],
          [23.6203, 41.92795, 0],
          [23.62033, 41.92817, 0],
          [23.62033, 41.92826, 0],
          [23.62022, 41.92862, 0],
          [23.6202, 41.92866, 0],
          [23.62003, 41.92913, 0],
          [23.62002, 41.92918, 0],
          [23.61991, 41.92951, 0],
          [23.61969, 41.92996, 0],
          [23.61959, 41.93021, 0],
          [23.61951, 41.93051, 0],
          [23.6195, 41.93057, 0],
          [23.6195, 41.93071, 0],
          [23.61952, 41.93078, 0],
          [23.61957, 41.93086, 0],
          [23.61963, 41.93092, 0],
          [23.6201, 41.93121, 0],
          [23.62025, 41.93135, 0],
          [23.6203, 41.93144, 0],
          [23.62033, 41.93152, 0],
          [23.62034, 41.93163, 0],
          [23.62033, 41.93174, 0],
          [23.62035, 41.93183, 0],
          [23.62038, 41.93187, 0],
          [23.62041, 41.9319, 0],
          [23.62046, 41.93194, 0],
          [23.62065, 41.93202, 0],
          [23.62106, 41.9321, 0],
          [23.62111, 41.93212, 0],
          [23.62122, 41.93215, 0],
          [23.62133, 41.93219, 0],
          [23.62146, 41.93225, 0],
          [23.62153, 41.9323, 0],
          [23.62157, 41.93232, 0],
          [23.6222, 41.93283, 0],
          [23.62236, 41.93291, 0],
          [23.62253, 41.93302, 0],
          [23.6228, 41.93336, 0],
          [23.62283, 41.93342, 0],
          [23.62312, 41.9338, 0],
          [23.62323, 41.93396, 0],
          [23.62328, 41.93405, 0],
          [23.62334, 41.93431, 0],
          [23.62336, 41.93435, 0],
          [23.62337, 41.93436, 0],
          [23.62339, 41.93441, 0],
          [23.62343, 41.93445, 0],
          [23.62347, 41.93448, 0],
          [23.62349, 41.9345, 0],
          [23.62363, 41.93456, 0],
          [23.62393, 41.93464, 0],
          [23.62422, 41.93476, 0],
          [23.6243, 41.93482, 0],
          [23.62434, 41.93487, 0],
          [23.62437, 41.93493, 0],
          [23.6244, 41.9352, 0],
          [23.62442, 41.93528, 0],
          [23.62446, 41.93537, 0],
          [23.62465, 41.9357, 0],
          [23.62479, 41.9359, 0],
          [23.62492, 41.93603, 0],
          [23.62511, 41.93619, 0],
          [23.62542, 41.93642, 0],
          [23.62592, 41.93675, 0],
          [23.62613, 41.93691, 0],
          [23.62618, 41.93697, 0],
          [23.62628, 41.93713, 0],
          [23.62632, 41.93721, 0],
          [23.62651, 41.93767, 0],
          [23.62706, 41.93938, 0],
          [23.62707, 41.93948, 0],
          [23.62706, 41.93969, 0],
          [23.62694, 41.94013, 0],
          [23.62689, 41.94036, 0],
          [23.62684, 41.94067, 0],
          [23.62686, 41.94077, 0],
          [23.62689, 41.94081, 0],
          [23.62693, 41.94085, 0],
          [23.62713, 41.94098, 0],
          [23.62789, 41.9413, 0],
          [23.62796, 41.94134, 0],
          [23.628, 41.94138, 0],
          [23.62804, 41.94143, 0],
          [23.62812, 41.9416, 0],
          [23.62836, 41.94222, 0],
          [23.62837, 41.94226, 0],
          [23.6284, 41.94232, 0],
          [23.62847, 41.94239, 0],
          [23.62858, 41.94245, 0],
          [23.62869, 41.94249, 0],
          [23.62891, 41.94255, 0],
          [23.6291, 41.94262, 0],
          [23.62918, 41.94266, 0],
          [23.6293, 41.94274, 0],
          [23.62974, 41.94339, 0],
          [23.6298, 41.94345, 0],
          [23.62993, 41.94355, 0],
          [23.63003, 41.94359, 0],
          [23.63028, 41.94367, 0],
          [23.63033, 41.9437, 0],
          [23.63034, 41.9437, 0],
          [23.63039, 41.94373, 0],
          [23.6304, 41.94373, 0],
          [23.63155, 41.94452, 0],
          [23.63157, 41.94453, 0],
          [23.63166, 41.9446, 0],
          [23.63178, 41.94472, 0],
          [23.6318, 41.94478, 0],
          [23.6318, 41.94481, 0],
          [23.63181, 41.94487, 0],
          [23.63181, 41.94517, 0],
          [23.63179, 41.94557, 0],
          [23.6318, 41.94567, 0],
          [23.63186, 41.94581, 0],
          [23.63191, 41.94588, 0],
          [23.63214, 41.9461, 0],
          [23.63233, 41.94622, 0],
          [23.63234, 41.94622, 0],
          [23.63241, 41.94625, 0],
          [23.63258, 41.94629, 0],
          [23.63348, 41.94638, 0],
          [23.63377, 41.94642, 0],
          [23.63404, 41.94648, 0],
          [23.63413, 41.94653, 0],
          [23.63425, 41.94662, 0],
          [23.6343, 41.94672, 0],
          [23.63432, 41.9468, 0],
          [23.63433, 41.9469, 0],
          [23.63434, 41.94744, 0],
          [23.63436, 41.94759, 0],
          [23.63438, 41.94765, 0],
          [23.63441, 41.94769, 0],
          [23.63443, 41.94773, 0],
          [23.63461, 41.94794, 0],
          [23.63516, 41.94843, 0],
          [23.6355, 41.94871, 0],
          [23.63587, 41.94895, 0],
          [23.63592, 41.94899, 0],
          [23.63609, 41.9491, 0],
          [23.63671, 41.94933, 0],
          [23.63678, 41.94938, 0],
          [23.63685, 41.94944, 0],
          [23.63691, 41.94951, 0],
          [23.637, 41.94965, 0],
          [23.6371, 41.94978, 0],
          [23.63719, 41.94983, 0],
          [23.63733, 41.94989, 0],
          [23.63749, 41.94994, 0],
          [23.63752, 41.94994, 0],
          [23.63761, 41.94996, 0],
          [23.63781, 41.94998, 0],
          [23.63863, 41.94986, 0],
          [23.63898, 41.94988, 0],
          [23.63918, 41.94991, 0],
          [23.63931, 41.94994, 0],
          [23.63942, 41.94995, 0],
          [23.63989, 41.95003, 0],
          [23.64031, 41.95008, 0],
          [23.64085, 41.95012, 0],
          [23.64088, 41.95013, 0],
          [23.64099, 41.95015, 0],
          [23.64114, 41.9502, 0],
          [23.64148, 41.95036, 0],
          [23.64171, 41.95043, 0],
          [23.64181, 41.95044, 0],
          [23.64209, 41.95044, 0],
          [23.64226, 41.9504, 0],
          [23.64271, 41.95027, 0],
          [23.64295, 41.95027, 0],
          [23.64313, 41.95028, 0],
          [23.6437, 41.95034, 0],
          [23.64374, 41.95034, 0],
          [23.64388, 41.95036, 0],
          [23.64432, 41.95046, 0],
          [23.64443, 41.9505, 0],
          [23.64454, 41.95055, 0],
          [23.64478, 41.95069, 0],
          [23.64496, 41.95081, 0],
          [23.64506, 41.95089, 0],
          [23.6454, 41.95122, 0],
          [23.64553, 41.95132, 0],
          [23.64563, 41.95138, 0],
          [23.64572, 41.95142, 0],
          [23.646, 41.95148, 0],
          [23.64617, 41.95149, 0],
          [23.6464, 41.95149, 0],
          [23.64657, 41.95147, 0],
          [23.64676, 41.95143, 0],
          [23.64695, 41.95137, 0],
          [23.64741, 41.95117, 0],
          [23.64801, 41.95094, 0],
          [23.64826, 41.9508, 0],
          [23.64855, 41.95059, 0],
          [23.64862, 41.95056, 0],
          [23.64867, 41.95053, 0],
          [23.64876, 41.95049, 0],
          [23.64886, 41.95046, 0],
          [23.64906, 41.95044, 0],
          [23.64945, 41.95043, 0],
          [23.64982, 41.95045, 0],
          [23.65001, 41.95048, 0],
          [23.65095, 41.95068, 0],
          [23.65096, 41.95068, 0],
          [23.6514, 41.95079, 0],
          [23.65158, 41.95082, 0],
          [23.65176, 41.95081, 0],
          [23.65196, 41.95078, 0],
          [23.65213, 41.95074, 0],
          [23.65241, 41.95065, 0],
          [23.65251, 41.9506, 0],
          [23.65255, 41.95057, 0],
          [23.65267, 41.95045, 0],
          [23.65268, 41.95042, 0],
          [23.65273, 41.95034, 0],
          [23.6528, 41.95026, 0],
          [23.65287, 41.9502, 0],
          [23.65294, 41.95015, 0],
          [23.65304, 41.95011, 0],
          [23.65316, 41.95009, 0],
          [23.6532, 41.95009, 0],
          [23.65326, 41.95008, 0],
          [23.654, 41.9501, 0],
          [23.65419, 41.95008, 0],
          [23.65468, 41.94995, 0],
          [23.65493, 41.94986, 0],
          [23.65504, 41.94978, 0],
          [23.65522, 41.94967, 0],
          [23.65543, 41.94952, 0],
          [23.65553, 41.94947, 0],
          [23.65562, 41.94944, 0],
          [23.65582, 41.94942, 0],
          [23.65592, 41.94944, 0],
          [23.65643, 41.9495, 0],
          [23.65679, 41.9495, 0],
          [23.65763, 41.94946, 0],
          [23.65935, 41.94947, 0],
          [23.6595, 41.9495, 0],
          [23.65964, 41.94954, 0],
          [23.65991, 41.94964, 0],
          [23.66022, 41.94979, 0],
          [23.66055, 41.94993, 0],
          [23.66073, 41.94999, 0],
          [23.66074, 41.94999, 0],
          [23.66118, 41.95008, 0],
          [23.66235, 41.95022, 0],
          [23.66243, 41.95024, 0],
          [23.66261, 41.95031, 0],
          [23.66279, 41.95044, 0],
          [23.66288, 41.95056, 0],
          [23.66315, 41.95098, 0],
          [23.66321, 41.95105, 0],
          [23.66324, 41.95107, 0],
          [23.66333, 41.95115, 0],
          [23.6634, 41.95118, 0],
          [23.66348, 41.95123, 0],
          [23.66374, 41.95128, 0],
          [23.66408, 41.95132, 0],
          [23.66445, 41.95138, 0],
          [23.6648, 41.95142, 0],
          [23.66508, 41.95142, 0],
          [23.66539, 41.95138, 0],
          [23.66574, 41.95128, 0],
          [23.66574, 41.95127, 0],
          [23.666, 41.9512, 0],
          [23.66651, 41.95119, 0],
          [23.6667, 41.95117, 0],
          [23.66723, 41.95101, 0],
          [23.66748, 41.95091, 0],
          [23.66758, 41.95085, 0],
          [23.66788, 41.95059, 0],
          [23.668, 41.95051, 0],
          [23.66805, 41.95049, 0],
          [23.66806, 41.95048, 0],
          [23.66812, 41.95046, 0],
          [23.66818, 41.95045, 0],
          [23.66833, 41.95045, 0],
          [23.66847, 41.95046, 0],
          [23.66867, 41.9505, 0],
          [23.66974, 41.95079, 0],
          [23.66996, 41.95083, 0],
          [23.67015, 41.95085, 0],
          [23.67087, 41.95087, 0],
          [23.67118, 41.95086, 0],
          [23.67156, 41.95088, 0],
          [23.67183, 41.95092, 0],
          [23.67194, 41.95095, 0],
          [23.67224, 41.95109, 0],
          [23.67247, 41.95118, 0],
          [23.67295, 41.95128, 0],
          [23.67323, 41.95132, 0],
          [23.67444, 41.95144, 0],
          [23.67464, 41.95148, 0],
          [23.67474, 41.95151, 0],
          [23.67492, 41.95158, 0],
          [23.67511, 41.95168, 0],
          [23.67531, 41.95174, 0],
          [23.67534, 41.95174, 0],
          [23.67588, 41.95182, 0],
          [23.67627, 41.95191, 0],
          [23.67676, 41.95195, 0],
          [23.67679, 41.95196, 0],
          [23.67699, 41.95199, 0],
          [23.67713, 41.95203, 0],
          [23.67725, 41.95209, 0],
          [23.67738, 41.95217, 0],
          [23.67758, 41.95234, 0],
          [23.67768, 41.9524, 0],
          [23.67814, 41.9526, 0],
          [23.67847, 41.95271, 0],
          [23.67877, 41.95283, 0],
          [23.67895, 41.95288, 0],
          [23.67928, 41.953, 0],
          [23.67968, 41.95321, 0],
          [23.67983, 41.9533, 0],
          [23.6801, 41.95349, 0],
          [23.68098, 41.95421, 0],
          [23.68105, 41.95429, 0],
          [23.68105, 41.9543, 0],
          [23.68113, 41.95442, 0],
          [23.68118, 41.95463, 0],
          [23.68121, 41.95482, 0],
          [23.68126, 41.95502, 0],
          [23.68149, 41.95555, 0],
          [23.68153, 41.95566, 0],
          [23.68159, 41.95574, 0],
          [23.68174, 41.9559, 0],
          [23.68184, 41.95615, 0],
          [23.68187, 41.95627, 0],
          [23.68189, 41.95641, 0],
          [23.68145, 41.95652, 0],
          [23.68145, 41.95656, 0],
          [23.68146, 41.95661, 0],
          [23.68149, 41.95671, 0],
          [23.68151, 41.95673, 0],
          [23.68154, 41.95677, 0],
          [23.6816, 41.95683, 0],
          [23.68261, 41.95821, 0],
          [23.6833, 41.95905, 0],
          [23.68365, 41.9594, 0],
          [23.68378, 41.95948, 0],
          [23.68413, 41.95955, 0],
          [23.68441, 41.95973, 0],
          [23.68506, 41.96049, 0],
          [23.68556, 41.9612, 0],
          [23.6858, 41.96163, 0],
          [23.68584, 41.96168, 0],
          [23.68591, 41.96175, 0],
          [23.68617, 41.96191, 0],
          [23.6863, 41.96197, 0],
          [23.68693, 41.9622, 0],
          [23.68715, 41.9623, 0],
          [23.68737, 41.96242, 0],
          [23.68748, 41.9625, 0],
          [23.6875, 41.96251, 0],
          [23.68774, 41.96271, 0],
          [23.688, 41.96302, 0],
          [23.68841, 41.96337, 0],
          [23.68856, 41.96353, 0],
          [23.68866, 41.96366, 0],
          [23.68869, 41.96373, 0],
          [23.68875, 41.96383, 0],
          [23.68888, 41.96411, 0],
          [23.68897, 41.9644, 0],
          [23.68915, 41.96475, 0],
          [23.68922, 41.96484, 0],
          [23.68929, 41.96496, 0],
          [23.6893, 41.96497, 0],
          [23.68931, 41.965, 0],
          [23.68931, 41.96505, 0],
          [23.68934, 41.96522, 0],
          [23.68943, 41.96541, 0],
          [23.68948, 41.96546, 0],
          [23.68951, 41.96551, 0],
          [23.68956, 41.96556, 0],
          [23.68982, 41.96578, 0],
          [23.68996, 41.96592, 0],
          [23.69004, 41.96599, 0],
          [23.69017, 41.96615, 0],
          [23.69021, 41.96621, 0],
          [23.69032, 41.96645, 0],
          [23.69038, 41.96655, 0],
          [23.69048, 41.96665, 0],
          [23.6905, 41.96666, 0],
          [23.69051, 41.96667, 0],
          [23.69053, 41.96667, 0],
          [23.69056, 41.96668, 0],
          [23.69068, 41.96668, 0],
          [23.6907, 41.96667, 0],
          [23.69071, 41.96667, 0],
          [23.69073, 41.96666, 0],
          [23.69074, 41.96666, 0],
          [23.69074, 41.96665, 0],
          [23.69075, 41.96664, 0],
          [23.69075, 41.96663, 0],
          [23.69076, 41.96662, 0],
          [23.69076, 41.9666, 0],
          [23.69077, 41.96658, 0],
          [23.69077, 41.96644, 0],
          [23.69076, 41.96638, 0],
          [23.69077, 41.96613, 0],
          [23.69076, 41.96609, 0],
          [23.69076, 41.96608, 0],
          [23.69075, 41.96606, 0],
          [23.69074, 41.96602, 0],
          [23.69068, 41.96591, 0],
          [23.69053, 41.96574, 0],
          [23.6902, 41.96526, 0],
          [23.69013, 41.96514, 0],
          [23.69009, 41.96502, 0],
          [23.69002, 41.96473, 0],
          [23.69002, 41.96458, 0],
          [23.69003, 41.96451, 0],
          [23.69008, 41.96441, 0],
          [23.69012, 41.96437, 0],
          [23.69016, 41.96435, 0],
          [23.69038, 41.96427, 0],
          [23.69107, 41.96416, 0],
          [23.69121, 41.96413, 0],
          [23.69123, 41.96412, 0],
          [23.69238, 41.96386, 0],
          [23.69245, 41.96386, 0],
          [23.6925, 41.96385, 0],
          [23.69257, 41.96385, 0],
          [23.69267, 41.96386, 0],
          [23.69274, 41.96386, 0],
          [23.69313, 41.96393, 0],
          [23.69345, 41.96393, 0],
          [23.69349, 41.96394, 0],
          [23.69353, 41.96394, 0],
          [23.69358, 41.96395, 0],
          [23.69364, 41.96397, 0],
          [23.69369, 41.964, 0],
          [23.69376, 41.96412, 0],
          [23.69377, 41.96421, 0],
          [23.69379, 41.96428, 0],
          [23.69379, 41.96431, 0],
          [23.6938, 41.96434, 0],
          [23.69382, 41.96436, 0],
          [23.69384, 41.96437, 0],
          [23.69385, 41.96438, 0],
          [23.69387, 41.96438, 0],
          [23.69389, 41.96439, 0],
          [23.69401, 41.96439, 0],
          [23.69401, 41.96438, 0],
          [23.69403, 41.96438, 0],
          [23.69405, 41.96436, 0],
          [23.69407, 41.96435, 0],
          [23.69409, 41.96433, 0],
          [23.69427, 41.96419, 0],
          [23.69437, 41.96416, 0],
          [23.69454, 41.96415, 0],
          [23.69536, 41.96419, 0],
          [23.69544, 41.9642, 0],
          [23.6955, 41.9642, 0],
          [23.69571, 41.96425, 0],
          [23.69577, 41.96429, 0],
          [23.69581, 41.96431, 0],
          [23.69602, 41.96451, 0],
          [23.69609, 41.96456, 0],
          [23.69613, 41.9646, 0],
          [23.69617, 41.96463, 0],
          [23.69622, 41.96465, 0],
          [23.69626, 41.96468, 0],
          [23.69637, 41.96472, 0],
          [23.69662, 41.96484, 0],
          [23.69672, 41.96492, 0],
          [23.69681, 41.96501, 0],
          [23.69687, 41.96508, 0],
          [23.69696, 41.96517, 0],
          [23.697, 41.96519, 0],
          [23.69703, 41.96521, 0],
          [23.69708, 41.96523, 0],
          [23.69711, 41.96525, 0],
          [23.69715, 41.96527, 0],
          [23.69725, 41.9653, 0],
          [23.69752, 41.9654, 0],
          [23.69771, 41.96549, 0],
          [23.69779, 41.96557, 0],
          [23.69789, 41.96573, 0],
          [23.69791, 41.9658, 0],
          [23.69791, 41.96581, 0],
          [23.69798, 41.96596, 0],
          [23.69801, 41.96599, 0],
          [23.69803, 41.966, 0],
          [23.69804, 41.966, 0],
          [23.69808, 41.96601, 0],
          [23.69817, 41.96601, 0],
          [23.69819, 41.966, 0],
          [23.6982, 41.966, 0],
          [23.69822, 41.96599, 0],
          [23.69822, 41.96598, 0],
          [23.69824, 41.96596, 0],
          [23.69828, 41.9659, 0],
          [23.69832, 41.96579, 0],
          [23.69841, 41.96564, 0],
          [23.69846, 41.96559, 0],
          [23.69859, 41.96553, 0],
          [23.69863, 41.96552, 0],
          [23.69867, 41.9655, 0],
          [23.69872, 41.96549, 0],
          [23.69876, 41.96549, 0],
          [23.69881, 41.96548, 0],
          [23.69935, 41.96549, 0],
          [23.69962, 41.96548, 0],
          [23.70003, 41.96544, 0],
          [23.7001, 41.96545, 0],
          [23.70014, 41.96545, 0],
          [23.7002, 41.96547, 0],
          [23.70026, 41.9655, 0],
          [23.70028, 41.96552, 0],
          [23.70028, 41.96555, 0],
          [23.70029, 41.96557, 0],
          [23.70029, 41.9656, 0],
          [23.70028, 41.96562, 0],
          [23.70028, 41.96563, 0],
          [23.70027, 41.96565, 0],
          [23.70027, 41.96566, 0],
          [23.70026, 41.96567, 0],
          [23.70024, 41.96568, 0],
          [23.70022, 41.9657, 0],
          [23.70019, 41.96572, 0],
          [23.70013, 41.96575, 0],
          [23.70008, 41.96576, 0],
          [23.69988, 41.96582, 0],
          [23.69961, 41.96588, 0],
          [23.69943, 41.96594, 0],
          [23.69924, 41.96603, 0],
          [23.6992, 41.96606, 0],
          [23.69916, 41.9661, 0],
          [23.6991, 41.96621, 0],
          [23.69909, 41.96627, 0],
          [23.69909, 41.96633, 0],
          [23.69911, 41.96644, 0],
          [23.69916, 41.96655, 0],
          [23.69954, 41.96701, 0],
          [23.69965, 41.96712, 0],
          [23.69973, 41.96715, 0],
          [23.69988, 41.96715, 0],
          [23.6999, 41.96714, 0],
          [23.69992, 41.96714, 0],
          [23.7, 41.96708, 0],
          [23.70003, 41.96704, 0],
          [23.70009, 41.96698, 0],
          [23.7002, 41.96684, 0],
          [23.70026, 41.96679, 0],
          [23.70032, 41.96676, 0],
          [23.70036, 41.96675, 0],
          [23.70041, 41.96673, 0],
          [23.70061, 41.96673, 0],
          [23.70067, 41.96675, 0],
          [23.7008, 41.96682, 0],
          [23.70085, 41.96687, 0],
          [23.70096, 41.967, 0],
          [23.70103, 41.96707, 0],
          [23.70108, 41.9671, 0],
          [23.70113, 41.96712, 0],
          [23.70123, 41.96714, 0],
          [23.70136, 41.96714, 0],
          [23.70215, 41.96692, 0],
          [23.70229, 41.96687, 0],
          [23.70245, 41.96683, 0],
          [23.70277, 41.96673, 0],
          [23.70297, 41.96668, 0],
          [23.7034, 41.96661, 0],
          [23.70344, 41.96661, 0],
          [23.70461, 41.96648, 0],
          [23.70534, 41.96585, 0],
          [23.70547, 41.96576, 0],
          [23.70556, 41.96571, 0],
          [23.70569, 41.96565, 0],
          [23.70584, 41.96562, 0],
          [23.70594, 41.96562, 0],
          [23.70602, 41.96563, 0],
          [23.70631, 41.96569, 0],
          [23.70718, 41.96595, 0],
          [23.70732, 41.966, 0],
          [23.70747, 41.96607, 0],
          [23.70786, 41.9663, 0],
          [23.70803, 41.96638, 0],
          [23.70817, 41.96642, 0],
          [23.70833, 41.96644, 0],
          [23.70841, 41.96644, 0],
          [23.70924, 41.96638, 0],
          [23.70934, 41.96636, 0],
          [23.70942, 41.96633, 0],
          [23.70951, 41.96631, 0],
          [23.70978, 41.96621, 0],
          [23.70995, 41.96619, 0],
          [23.71005, 41.96619, 0],
          [23.71016, 41.96621, 0],
          [23.71035, 41.96623, 0],
          [23.71048, 41.96623, 0],
          [23.71054, 41.96622, 0],
          [23.71069, 41.96618, 0],
          [23.71077, 41.96615, 0],
          [23.71104, 41.96602, 0],
          [23.71114, 41.96598, 0],
          [23.71129, 41.96594, 0],
          [23.71136, 41.96593, 0],
          [23.71154, 41.96593, 0],
          [23.71173, 41.96596, 0],
          [23.71195, 41.96605, 0],
          [23.71237, 41.9663, 0],
          [23.71245, 41.96633, 0],
          [23.71259, 41.96635, 0],
          [23.71275, 41.96635, 0],
          [23.71283, 41.96634, 0],
          [23.71292, 41.96632, 0],
          [23.71299, 41.96632, 0],
          [23.71305, 41.96631, 0],
          [23.71316, 41.96633, 0],
          [23.71321, 41.96635, 0],
          [23.71329, 41.96641, 0],
          [23.71332, 41.96644, 0],
          [23.71349, 41.96666, 0],
          [23.71358, 41.96695, 0],
          [23.7138, 41.9673, 0],
          [23.71389, 41.96742, 0],
          [23.71398, 41.96747, 0],
          [23.7141, 41.96749, 0],
          [23.71424, 41.96749, 0],
          [23.71438, 41.96747, 0],
          [23.71498, 41.96728, 0],
          [23.71514, 41.96725, 0],
          [23.71525, 41.96722, 0],
          [23.71553, 41.96711, 0],
          [23.71563, 41.96708, 0],
          [23.71577, 41.96706, 0],
          [23.7158, 41.96705, 0],
          [23.71597, 41.96705, 0],
          [23.71606, 41.96706, 0],
          [23.71614, 41.96708, 0],
          [23.71621, 41.96709, 0],
          [23.71636, 41.96714, 0],
          [23.7168, 41.96736, 0],
          [23.71686, 41.96738, 0],
          [23.71691, 41.96739, 0],
          [23.71705, 41.96739, 0],
          [23.71718, 41.96736, 0],
          [23.71757, 41.9672, 0],
          [23.71779, 41.96714, 0],
          [23.71791, 41.96708, 0],
          [23.71827, 41.96687, 0],
          [23.71829, 41.96685, 0],
          [23.71851, 41.96674, 0],
          [23.71892, 41.9666, 0],
          [23.7191, 41.96647, 0],
          [23.71911, 41.96646, 0],
          [23.71916, 41.96643, 0],
          [23.71928, 41.96639, 0],
          [23.71936, 41.96638, 0],
          [23.71945, 41.96638, 0],
          [23.71969, 41.96641, 0],
          [23.7198, 41.96644, 0],
          [23.7201, 41.96648, 0],
          [23.7202, 41.96648, 0],
          [23.72042, 41.96646, 0],
          [23.72051, 41.96646, 0],
          [23.72062, 41.96647, 0],
          [23.72073, 41.9665, 0],
          [23.72074, 41.9665, 0],
          [23.72127, 41.96669, 0],
          [23.72133, 41.96669, 0],
          [23.72138, 41.9667, 0],
          [23.72153, 41.96667, 0],
          [23.72162, 41.96663, 0],
          [23.72167, 41.96662, 0],
          [23.72173, 41.9666, 0],
          [23.72189, 41.9666, 0],
          [23.72217, 41.96663, 0],
          [23.72235, 41.96663, 0],
          [23.7224, 41.96662, 0],
          [23.72245, 41.9666, 0],
          [23.72253, 41.96654, 0],
          [23.72267, 41.96638, 0],
          [23.72297, 41.9661, 0],
          [23.72302, 41.96606, 0],
          [23.72314, 41.96592, 0],
          [23.72325, 41.96574, 0],
          [23.72329, 41.96563, 0],
          [23.7233, 41.96562, 0],
          [23.72336, 41.96548, 0],
          [23.72338, 41.96545, 0],
          [23.72345, 41.96531, 0],
          [23.72347, 41.96529, 0],
          [23.72348, 41.96526, 0],
          [23.72353, 41.96523, 0],
          [23.72359, 41.96518, 0],
          [23.72367, 41.96514, 0],
          [23.7239, 41.96505, 0],
          [23.7241, 41.96494, 0],
          [23.72417, 41.96487, 0],
          [23.7243, 41.96472, 0],
          [23.7244, 41.96454, 0],
          [23.72443, 41.96445, 0],
          [23.72445, 41.96434, 0],
          [23.72445, 41.96429, 0],
          [23.72444, 41.96422, 0],
          [23.72435, 41.96393, 0],
          [23.72426, 41.96329, 0],
          [23.72424, 41.96325, 0],
          [23.72419, 41.9632, 0],
          [23.72414, 41.96317, 0],
          [23.72385, 41.96308, 0],
          [23.72374, 41.96303, 0],
          [23.72367, 41.96299, 0],
          [23.7236, 41.96293, 0],
          [23.72357, 41.96288, 0],
          [23.72356, 41.96285, 0],
          [23.72356, 41.96282, 0],
          [23.72357, 41.9628, 0],
          [23.72357, 41.96277, 0],
          [23.7236, 41.96272, 0],
          [23.72361, 41.96269, 0],
          [23.72363, 41.96267, 0],
          [23.72365, 41.96266, 0],
          [23.72366, 41.96265, 0],
          [23.72375, 41.96259, 0],
          [23.72384, 41.96255, 0],
          [23.724, 41.96251, 0],
          [23.72421, 41.96251, 0],
          [23.72432, 41.96252, 0],
          [23.72441, 41.96252, 0],
          [23.72466, 41.96256, 0],
          [23.72606, 41.96272, 0],
          [23.72638, 41.96274, 0],
          [23.72651, 41.96273, 0],
          [23.72664, 41.96271, 0],
          [23.72685, 41.9627, 0],
          [23.72724, 41.9627, 0],
          [23.72736, 41.96271, 0],
          [23.72744, 41.96271, 0],
          [23.72746, 41.96272, 0],
          [23.72754, 41.96273, 0],
          [23.72763, 41.96275, 0],
          [23.72772, 41.96279, 0],
          [23.72786, 41.96287, 0],
          [23.72837, 41.96326, 0],
          [23.7284, 41.96327, 0],
          [23.72853, 41.96329, 0],
          [23.72918, 41.96327, 0],
          [23.72975, 41.9633, 0],
          [23.72991, 41.96332, 0],
        ],
      },
      properties: { name: "София-Вила Орцево", tessellate: !0 },
    },
  ],
  Gh = { type: $h, features: Qh };
function Kh() {
  const t = new L.icon({ iconUrl: C5, iconSize: [28, 28] }),
    e = new L.icon({ iconUrl: E5, iconSize: [28, 28] });
  return E.jsxs("section", {
    className: "paddingBottom",
    children: [
      E.jsx("h3", { children: "Местоположение" }),
      E.jsxs(_5, {
        center: [42.303205, 23.729939],
        zoom: 9,
        scrollWheelZoom: !1,
        className: "map_container",
        children: [
          E.jsx(v5, {
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            maxZoom: 19,
            attribution:
              '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }),
          E.jsx(Le, { position: [41.963205, 23.729939], icon: t }),
          E.jsx(Le, { position: [42.6977245, 23.3218762], icon: e }),
          E.jsx(Le, { position: [42.1354016, 24.7452921], icon: e }),
          E.jsx($1, {
            data: Gh,
            style: { color: "darkblue" },
            children: E.jsx(zt, {
              children: E.jsx("span", {
                className: "balloon",
                children: "София - Вила Орцево (187 км)",
              }),
            }),
          }),
          E.jsx($1, {
            data: Vh,
            style: { color: "darkblue" },
            children: E.jsx(zt, {
              children: E.jsx("span", {
                className: "balloon",
                children: "Пловдив - Вила Орцево (150 км)",
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
function qh(t) {
  const e = new Date(t * 1e3),
    i = e.getDay(),
    o = e.getDate(),
    a = e.getMonth(),
    l = [
      "неделя",
      "понеделник",
      "вторник",
      "сряда",
      "четвъртък",
      "петък",
      "събота",
    ];
  return `${o} ${
    [
      "януари",
      "февруари",
      "март",
      "април",
      "май",
      "юни",
      "юли",
      "август",
      "септември",
      "октомври",
      "ноември",
      "декември",
    ][a]
  } 
 (${l[i]})`;
}
const Yh = "_forecast_n0a4p_1",
  Xh = "_forecastDay_n0a4p_31",
  Jh = "_temp_n0a4p_39",
  tf = "_date_n0a4p_51",
  Tn = { forecast: Yh, forecastDay: Xh, temp: Jh, date: tf };
function ef() {
  const { data: t, isLoading: e } = l5("forecast");
  function i(o) {
    return Math.floor(Math.round(o));
  }
  return !t || e
    ? null
    : E.jsx("div", {
        className: "backgroundWhite",
        children: E.jsxs("div", {
          className: "main",
          children: [
            E.jsx("h3", { children: "Прогноза за времето" }),
            E.jsx("div", {
              className: Tn.forecast,
              children: t.DailyForecasts.map((o, a) => {
                if (a < 3)
                  return E.jsxs(
                    "div",
                    {
                      className: Tn.forecastDay,
                      children: [
                        E.jsx("div", {
                          className: Tn.date,
                          children: qh(o.EpochDate),
                        }),
                        E.jsxs("div", {
                          className: Tn.temp,
                          children: [
                            i(o.Temperature.Maximum.Value),
                            "°C",
                            E.jsx("img", {
                              src: `https://developer.accuweather.com/sites/default/files/${
                                o.Day.Icon < 10 ? "0" + o.Day.Icon : o.Day.Icon
                              }-s.png`,
                              alt: `${o.Day.IconPhrase}`,
                            }),
                          ],
                        }),
                      ],
                    },
                    o.EpochDate
                  );
              }),
            }),
          ],
        }),
      });
}
const nf = "_tiles_o30l6_1",
  rf = "_tile_o30l6_1",
  I1 = { tiles: nf, tile: rf };
function of() {
  return E.jsx("div", {
    className: "backgroundWhite",
    children: E.jsxs("div", {
      className: "main",
      children: [
        E.jsx("h3", { children: "Орцево в цифри" }),
        E.jsxs("div", {
          className: I1.tiles,
          children: [
            E.jsxs("div", {
              className: I1.tile,
              children: [E.jsx("strong", { children: "153" }), " жители"],
            }),
            E.jsxs("div", {
              className: I1.tile,
              children: [E.jsx("strong", { children: "1555" }), " м. н. в."],
            }),
          ],
        }),
        E.jsxs("div", {
          className: I1.tiles,
          children: [
            E.jsxs("div", {
              className: I1.tile,
              children: [E.jsx("strong", { children: "187" }), " км от София"],
            }),
            E.jsxs("div", {
              className: I1.tile,
              children: [
                E.jsx("strong", { children: "150" }),
                " км от Пловдив",
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function sf() {
  const t = [
      "photo wide photo1",
      "photo photo14",
      "photo tall photo7",
      "photo photo4",
      "photo photo11",
      "photo wide photo5",
      "photo wide photo30",
      "photo photo31",
      "photo tall photo16",
      "photo wide photo3",
      "photo wide tall photo2",
      "photo tall photo15",
      "photo tall photo13",
      "photo photo9",
      "photo tall photo12",
      "photo photo17",
      "photo wide photo8",
      "photo wide photo18",
      "photo tall photo19",
      "photo photo20",
      "photo photo21",
      "photo tall photo23",
      "photo wide photo22",
      "photo photo25",
      "photo photo26",
      "photo photo27",
      "photo wide photo24",
      "photo wide photo28",
      "photo photo10",
    ],
    [e, i] = G.useState(!1),
    o = () => {
      i((a) => !a);
    };
  return E.jsx("div", {
    className: "backgroundWhite",
    children: E.jsxs("section", {
      className: "main",
      children: [
        E.jsx("h3", { children: " Галерия " }),
        E.jsx("div", {
          className: `gallery ${e ? "galleryLong" : "galleryShort"}`,
          children: t
            .slice(0, e ? t.length : 6)
            .map((a, l) => E.jsx("div", { className: a }, l)),
        }),
        E.jsx("center", {
          children: E.jsx("button", {
            className: "contactLink showMoreImagesButton",
            onClick: o,
            children: e ? "По-малко снимки" : "Повече снимки",
          }),
        }),
      ],
    }),
  });
}
const af = "/assets/fb-b01acc77.png",
  lf = "/assets/gg-6aef0ba1.png",
  uf = "/assets/is-065f7233.png";
function cf() {
  const t = { width: "6rem" };
  return E.jsxs("div", {
    className: "footerContainer footerText",
    children: [
      E.jsxs("div", {
        className: "main",
        children: [
          E.jsxs("h4", {
            children: [
              E.jsx("center", { children: "Телефон за резервация" }),
              E.jsx("center", { id: "footer", children: "+359 894 606 136" }),
            ],
          }),
          E.jsxs("h4", {
            children: [
              E.jsx("center", { children: "Вила Орцево" }),
              E.jsx("center", { children: `lat: 41° 57' 47.0196"` }),
              E.jsx("center", { children: `lng: 23° 43' 47.8086"` }),
            ],
          }),
          E.jsxs("div", {
            className: "grid",
            children: [
              E.jsx("div", {
                className: "gridItem",
                children: E.jsx("a", {
                  href: "https://maps.app.goo.gl/A4HN7FZCZNKVU8cNA",
                  target: "_blank",
                  children: E.jsx("img", { src: lf, style: t }),
                }),
              }),
              E.jsx("div", {
                className: "gridItem",
                children: E.jsx("a", {
                  href: "https://www.facebook.com/profile.php?id=100052786184013",
                  target: "_blank",
                  children: E.jsx("img", { src: af, style: t }),
                }),
              }),
              E.jsx("div", {
                className: "gridItem",
                children: E.jsx("a", {
                  href: "https://www.instagram.com/vilaortsevo/",
                  target: "_blank",
                  children: E.jsx("img", { src: uf, style: t }),
                }),
              }),
            ],
          }),
        ],
      }),
      E.jsx("div", {
        className: "credit",
        children: E.jsxs("center", {
          children: [
            "Web design by ",
            E.jsx("u", { children: "cosmoswebstudios" }),
          ],
        }),
      }),
    ],
  });
}
function hf() {
  return E.jsxs(E.Fragment, {
    children: [
      E.jsx(vh, {}),
      E.jsx(Hh, {}),
      E.jsx(of, {}),
      E.jsx(Kh, {}),
      E.jsx(ef, {}),
      E.jsx(Uh, {}),
      E.jsx(sf, {}),
      E.jsx(cf, {}),
    ],
  });
}
const ff = new Fc();
$i.createRoot(document.getElementById("root")).render(
  E.jsx(Wc, { client: ff, children: E.jsx(hf, {}) })
);
