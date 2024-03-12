import { jsx as gt } from "react/jsx-runtime";
import Te, { useRef as St, useDebugValue as He, useContext as Ye, createElement as wt } from "react";
function Et(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ne = { exports: {} }, z = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function bt() {
  if (We)
    return z;
  We = 1;
  var e = 60103, r = 60106, t = 60107, n = 60108, a = 60114, c = 60109, s = 60110, f = 60112, v = 60113, w = 60120, b = 60115, C = 60116, I = 60121, $ = 60122, A = 60117, x = 60129, _ = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var h = Symbol.for;
    e = h("react.element"), r = h("react.portal"), t = h("react.fragment"), n = h("react.strict_mode"), a = h("react.profiler"), c = h("react.provider"), s = h("react.context"), f = h("react.forward_ref"), v = h("react.suspense"), w = h("react.suspense_list"), b = h("react.memo"), C = h("react.lazy"), I = h("react.block"), $ = h("react.server.block"), A = h("react.fundamental"), x = h("react.debug_trace_mode"), _ = h("react.legacy_hidden");
  }
  function E(p) {
    if (typeof p == "object" && p !== null) {
      var W = p.$$typeof;
      switch (W) {
        case e:
          switch (p = p.type, p) {
            case t:
            case a:
            case n:
            case v:
            case w:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case f:
                case C:
                case b:
                case c:
                  return p;
                default:
                  return W;
              }
          }
        case r:
          return W;
      }
    }
  }
  var R = c, S = e, u = f, G = t, te = C, H = b, Q = r, re = a, ne = n, U = v;
  return z.ContextConsumer = s, z.ContextProvider = R, z.Element = S, z.ForwardRef = u, z.Fragment = G, z.Lazy = te, z.Memo = H, z.Portal = Q, z.Profiler = re, z.StrictMode = ne, z.Suspense = U, z.isAsyncMode = function() {
    return !1;
  }, z.isConcurrentMode = function() {
    return !1;
  }, z.isContextConsumer = function(p) {
    return E(p) === s;
  }, z.isContextProvider = function(p) {
    return E(p) === c;
  }, z.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, z.isForwardRef = function(p) {
    return E(p) === f;
  }, z.isFragment = function(p) {
    return E(p) === t;
  }, z.isLazy = function(p) {
    return E(p) === C;
  }, z.isMemo = function(p) {
    return E(p) === b;
  }, z.isPortal = function(p) {
    return E(p) === r;
  }, z.isProfiler = function(p) {
    return E(p) === a;
  }, z.isStrictMode = function(p) {
    return E(p) === n;
  }, z.isSuspense = function(p) {
    return E(p) === v;
  }, z.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === t || p === a || p === x || p === n || p === v || p === w || p === _ || typeof p == "object" && p !== null && (p.$$typeof === C || p.$$typeof === b || p.$$typeof === c || p.$$typeof === s || p.$$typeof === f || p.$$typeof === A || p.$$typeof === I || p[0] === $);
  }, z.typeOf = E, z;
}
var L = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Ct() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, r = 60106, t = 60107, n = 60108, a = 60114, c = 60109, s = 60110, f = 60112, v = 60113, w = 60120, b = 60115, C = 60116, I = 60121, $ = 60122, A = 60117, x = 60129, _ = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var h = Symbol.for;
      e = h("react.element"), r = h("react.portal"), t = h("react.fragment"), n = h("react.strict_mode"), a = h("react.profiler"), c = h("react.provider"), s = h("react.context"), f = h("react.forward_ref"), v = h("react.suspense"), w = h("react.suspense_list"), b = h("react.memo"), C = h("react.lazy"), I = h("react.block"), $ = h("react.server.block"), A = h("react.fundamental"), h("react.scope"), h("react.opaque.id"), x = h("react.debug_trace_mode"), h("react.offscreen"), _ = h("react.legacy_hidden");
    }
    var E = !1;
    function R(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === t || l === a || l === x || l === n || l === v || l === w || l === _ || E || typeof l == "object" && l !== null && (l.$$typeof === C || l.$$typeof === b || l.$$typeof === c || l.$$typeof === s || l.$$typeof === f || l.$$typeof === A || l.$$typeof === I || l[0] === $));
    }
    function S(l) {
      if (typeof l == "object" && l !== null) {
        var i = l.$$typeof;
        switch (i) {
          case e:
            var F = l.type;
            switch (F) {
              case t:
              case a:
              case n:
              case v:
              case w:
                return F;
              default:
                var V = F && F.$$typeof;
                switch (V) {
                  case s:
                  case f:
                  case C:
                  case b:
                  case c:
                    return V;
                  default:
                    return i;
                }
            }
          case r:
            return i;
        }
      }
    }
    var u = s, G = c, te = e, H = f, Q = t, re = C, ne = b, U = r, p = a, W = n, q = v, ie = !1, J = !1;
    function X(l) {
      return ie || (ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function se(l) {
      return J || (J = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(l) {
      return S(l) === s;
    }
    function ce(l) {
      return S(l) === c;
    }
    function g(l) {
      return typeof l == "object" && l !== null && l.$$typeof === e;
    }
    function m(l) {
      return S(l) === f;
    }
    function y(l) {
      return S(l) === t;
    }
    function P(l) {
      return S(l) === C;
    }
    function o(l) {
      return S(l) === b;
    }
    function O(l) {
      return S(l) === r;
    }
    function d(l) {
      return S(l) === a;
    }
    function Y(l) {
      return S(l) === n;
    }
    function N(l) {
      return S(l) === v;
    }
    L.ContextConsumer = u, L.ContextProvider = G, L.Element = te, L.ForwardRef = H, L.Fragment = Q, L.Lazy = re, L.Memo = ne, L.Portal = U, L.Profiler = p, L.StrictMode = W, L.Suspense = q, L.isAsyncMode = X, L.isConcurrentMode = se, L.isContextConsumer = oe, L.isContextProvider = ce, L.isElement = g, L.isForwardRef = m, L.isFragment = y, L.isLazy = P, L.isMemo = o, L.isPortal = O, L.isProfiler = d, L.isStrictMode = Y, L.isSuspense = N, L.isValidElementType = R, L.typeOf = S;
  }()), L;
}
process.env.NODE_ENV === "production" ? Ne.exports = bt() : Ne.exports = Ct();
var Fe = Ne.exports;
function At(e) {
  function r(g, m, y, P, o) {
    for (var O = 0, d = 0, Y = 0, N = 0, l, i, F = 0, V = 0, k, ee = k = l = 0, M = 0, Z = 0, ve = 0, K = 0, we = y.length, ye = we - 1, ae, T = "", B = "", Re = "", xe = "", le; M < we; ) {
      if (i = y.charCodeAt(M), M === ye && d + N + Y + O !== 0 && (d !== 0 && (i = d === 47 ? 10 : 47), N = Y = O = 0, we++, ye++), d + N + Y + O === 0) {
        if (M === ye && (0 < Z && (T = T.replace(I, "")), 0 < T.trim().length)) {
          switch (i) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              T += y.charAt(M);
          }
          i = 59;
        }
        switch (i) {
          case 123:
            for (T = T.trim(), l = T.charCodeAt(0), k = 1, K = ++M; M < we; ) {
              switch (i = y.charCodeAt(M)) {
                case 123:
                  k++;
                  break;
                case 125:
                  k--;
                  break;
                case 47:
                  switch (i = y.charCodeAt(M + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ee = M + 1; ee < ye; ++ee)
                          switch (y.charCodeAt(ee)) {
                            case 47:
                              if (i === 42 && y.charCodeAt(ee - 1) === 42 && M + 2 !== ee) {
                                M = ee + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (i === 47) {
                                M = ee + 1;
                                break e;
                              }
                          }
                        M = ee;
                      }
                  }
                  break;
                case 91:
                  i++;
                case 40:
                  i++;
                case 34:
                case 39:
                  for (; M++ < ye && y.charCodeAt(M) !== i; )
                    ;
              }
              if (k === 0)
                break;
              M++;
            }
            switch (k = y.substring(K, M), l === 0 && (l = (T = T.replace(C, "").trim()).charCodeAt(0)), l) {
              case 64:
                switch (0 < Z && (T = T.replace(I, "")), i = T.charCodeAt(1), i) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Z = m;
                    break;
                  default:
                    Z = ie;
                }
                if (k = r(m, Z, k, i, o + 1), K = k.length, 0 < X && (Z = t(ie, T, ve), le = f(3, k, Z, m, p, U, K, i, o, P), T = Z.join(""), le !== void 0 && (K = (k = le.trim()).length) === 0 && (i = 0, k = "")), 0 < K)
                  switch (i) {
                    case 115:
                      T = T.replace(G, s);
                    case 100:
                    case 109:
                    case 45:
                      k = T + "{" + k + "}";
                      break;
                    case 107:
                      T = T.replace(E, "$1 $2"), k = T + "{" + k + "}", k = q === 1 || q === 2 && c("@" + k, 3) ? "@-webkit-" + k + "@" + k : "@" + k;
                      break;
                    default:
                      k = T + k, P === 112 && (k = (B += k, ""));
                  }
                else
                  k = "";
                break;
              default:
                k = r(m, t(m, T, ve), k, P, o + 1);
            }
            Re += k, k = ve = Z = ee = l = 0, T = "", i = y.charCodeAt(++M);
            break;
          case 125:
          case 59:
            if (T = (0 < Z ? T.replace(I, "") : T).trim(), 1 < (K = T.length))
              switch (ee === 0 && (l = T.charCodeAt(0), l === 45 || 96 < l && 123 > l) && (K = (T = T.replace(" ", ":")).length), 0 < X && (le = f(1, T, m, g, p, U, B.length, P, o, P)) !== void 0 && (K = (T = le.trim()).length) === 0 && (T = "\0\0"), l = T.charCodeAt(0), i = T.charCodeAt(1), l) {
                case 0:
                  break;
                case 64:
                  if (i === 105 || i === 99) {
                    xe += T + y.charAt(M);
                    break;
                  }
                default:
                  T.charCodeAt(K - 1) !== 58 && (B += a(T, l, i, T.charCodeAt(2)));
              }
            ve = Z = ee = l = 0, T = "", i = y.charCodeAt(++M);
        }
      }
      switch (i) {
        case 13:
        case 10:
          d === 47 ? d = 0 : 1 + l === 0 && P !== 107 && 0 < T.length && (Z = 1, T += "\0"), 0 < X * oe && f(0, T, m, g, p, U, B.length, P, o, P), U = 1, p++;
          break;
        case 59:
        case 125:
          if (d + N + Y + O === 0) {
            U++;
            break;
          }
        default:
          switch (U++, ae = y.charAt(M), i) {
            case 9:
            case 32:
              if (N + O + d === 0)
                switch (F) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ae = "";
                    break;
                  default:
                    i !== 32 && (ae = " ");
                }
              break;
            case 0:
              ae = "\\0";
              break;
            case 12:
              ae = "\\f";
              break;
            case 11:
              ae = "\\v";
              break;
            case 38:
              N + d + O === 0 && (Z = ve = 1, ae = "\f" + ae);
              break;
            case 108:
              if (N + d + O + W === 0 && 0 < ee)
                switch (M - ee) {
                  case 2:
                    F === 112 && y.charCodeAt(M - 3) === 58 && (W = F);
                  case 8:
                    V === 111 && (W = V);
                }
              break;
            case 58:
              N + d + O === 0 && (ee = M);
              break;
            case 44:
              d + Y + N + O === 0 && (Z = 1, ae += "\r");
              break;
            case 34:
            case 39:
              d === 0 && (N = N === i ? 0 : N === 0 ? i : N);
              break;
            case 91:
              N + d + Y === 0 && O++;
              break;
            case 93:
              N + d + Y === 0 && O--;
              break;
            case 41:
              N + d + O === 0 && Y--;
              break;
            case 40:
              if (N + d + O === 0) {
                if (l === 0)
                  switch (2 * F + 3 * V) {
                    case 533:
                      break;
                    default:
                      l = 1;
                  }
                Y++;
              }
              break;
            case 64:
              d + Y + N + O + ee + k === 0 && (k = 1);
              break;
            case 42:
            case 47:
              if (!(0 < N + O + Y))
                switch (d) {
                  case 0:
                    switch (2 * i + 3 * y.charCodeAt(M + 1)) {
                      case 235:
                        d = 47;
                        break;
                      case 220:
                        K = M, d = 42;
                    }
                    break;
                  case 42:
                    i === 47 && F === 42 && K + 2 !== M && (y.charCodeAt(K + 2) === 33 && (B += y.substring(K, M + 1)), ae = "", d = 0);
                }
          }
          d === 0 && (T += ae);
      }
      V = F, F = i, M++;
    }
    if (K = B.length, 0 < K) {
      if (Z = m, 0 < X && (le = f(2, B, Z, g, p, U, K, P, o, P), le !== void 0 && (B = le).length === 0))
        return xe + B + Re;
      if (B = Z.join(",") + "{" + B + "}", q * W !== 0) {
        switch (q !== 2 || c(B, 2) || (W = 0), W) {
          case 111:
            B = B.replace(S, ":-moz-$1") + B;
            break;
          case 112:
            B = B.replace(R, "::-webkit-input-$1") + B.replace(R, "::-moz-$1") + B.replace(R, ":-ms-input-$1") + B;
        }
        W = 0;
      }
    }
    return xe + B + Re;
  }
  function t(g, m, y) {
    var P = m.trim().split(_);
    m = P;
    var o = P.length, O = g.length;
    switch (O) {
      case 0:
      case 1:
        var d = 0;
        for (g = O === 0 ? "" : g[0] + " "; d < o; ++d)
          m[d] = n(g, m[d], y).trim();
        break;
      default:
        var Y = d = 0;
        for (m = []; d < o; ++d)
          for (var N = 0; N < O; ++N)
            m[Y++] = n(g[N] + " ", P[d], y).trim();
    }
    return m;
  }
  function n(g, m, y) {
    var P = m.charCodeAt(0);
    switch (33 > P && (P = (m = m.trim()).charCodeAt(0)), P) {
      case 38:
        return m.replace(h, "$1" + g.trim());
      case 58:
        return g.trim() + m.replace(h, "$1" + g.trim());
      default:
        if (0 < 1 * y && 0 < m.indexOf("\f"))
          return m.replace(h, (g.charCodeAt(0) === 58 ? "" : "$1") + g.trim());
    }
    return g + m;
  }
  function a(g, m, y, P) {
    var o = g + ";", O = 2 * m + 3 * y + 4 * P;
    if (O === 944) {
      g = o.indexOf(":", 9) + 1;
      var d = o.substring(g, o.length - 1).trim();
      return d = o.substring(0, g).trim() + d + ";", q === 1 || q === 2 && c(d, 1) ? "-webkit-" + d + d : d;
    }
    if (q === 0 || q === 2 && !c(o, 1))
      return o;
    switch (O) {
      case 1015:
        return o.charCodeAt(10) === 97 ? "-webkit-" + o + o : o;
      case 951:
        return o.charCodeAt(3) === 116 ? "-webkit-" + o + o : o;
      case 963:
        return o.charCodeAt(5) === 110 ? "-webkit-" + o + o : o;
      case 1009:
        if (o.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + o + o;
      case 978:
        return "-webkit-" + o + "-moz-" + o + o;
      case 1019:
      case 983:
        return "-webkit-" + o + "-moz-" + o + "-ms-" + o + o;
      case 883:
        if (o.charCodeAt(8) === 45)
          return "-webkit-" + o + o;
        if (0 < o.indexOf("image-set(", 11))
          return o.replace(ne, "$1-webkit-$2") + o;
        break;
      case 932:
        if (o.charCodeAt(4) === 45)
          switch (o.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + o.replace("-grow", "") + "-webkit-" + o + "-ms-" + o.replace("grow", "positive") + o;
            case 115:
              return "-webkit-" + o + "-ms-" + o.replace("shrink", "negative") + o;
            case 98:
              return "-webkit-" + o + "-ms-" + o.replace("basis", "preferred-size") + o;
          }
        return "-webkit-" + o + "-ms-" + o + o;
      case 964:
        return "-webkit-" + o + "-ms-flex-" + o + o;
      case 1023:
        if (o.charCodeAt(8) !== 99)
          break;
        return d = o.substring(o.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + d + "-webkit-" + o + "-ms-flex-pack" + d + o;
      case 1005:
        return A.test(o) ? o.replace($, ":-webkit-") + o.replace($, ":-moz-") + o : o;
      case 1e3:
        switch (d = o.substring(13).trim(), m = d.indexOf("-") + 1, d.charCodeAt(0) + d.charCodeAt(m)) {
          case 226:
            d = o.replace(u, "tb");
            break;
          case 232:
            d = o.replace(u, "tb-rl");
            break;
          case 220:
            d = o.replace(u, "lr");
            break;
          default:
            return o;
        }
        return "-webkit-" + o + "-ms-" + d + o;
      case 1017:
        if (o.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (m = (o = g).length - 10, d = (o.charCodeAt(m) === 33 ? o.substring(0, m) : o).substring(g.indexOf(":", 7) + 1).trim(), O = d.charCodeAt(0) + (d.charCodeAt(7) | 0)) {
          case 203:
            if (111 > d.charCodeAt(8))
              break;
          case 115:
            o = o.replace(d, "-webkit-" + d) + ";" + o;
            break;
          case 207:
          case 102:
            o = o.replace(d, "-webkit-" + (102 < O ? "inline-" : "") + "box") + ";" + o.replace(d, "-webkit-" + d) + ";" + o.replace(d, "-ms-" + d + "box") + ";" + o;
        }
        return o + ";";
      case 938:
        if (o.charCodeAt(5) === 45)
          switch (o.charCodeAt(6)) {
            case 105:
              return d = o.replace("-items", ""), "-webkit-" + o + "-webkit-box-" + d + "-ms-flex-" + d + o;
            case 115:
              return "-webkit-" + o + "-ms-flex-item-" + o.replace(H, "") + o;
            default:
              return "-webkit-" + o + "-ms-flex-line-pack" + o.replace("align-content", "").replace(H, "") + o;
          }
        break;
      case 973:
      case 989:
        if (o.charCodeAt(3) !== 45 || o.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (re.test(g) === !0)
          return (d = g.substring(g.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(g.replace("stretch", "fill-available"), m, y, P).replace(":fill-available", ":stretch") : o.replace(d, "-webkit-" + d) + o.replace(d, "-moz-" + d.replace("fill-", "")) + o;
        break;
      case 962:
        if (o = "-webkit-" + o + (o.charCodeAt(5) === 102 ? "-ms-" + o : "") + o, y + P === 211 && o.charCodeAt(13) === 105 && 0 < o.indexOf("transform", 10))
          return o.substring(0, o.indexOf(";", 27) + 1).replace(x, "$1-webkit-$2") + o;
    }
    return o;
  }
  function c(g, m) {
    var y = g.indexOf(m === 1 ? ":" : "{"), P = g.substring(0, m !== 3 ? y : 10);
    return y = g.substring(y + 1, g.length - 1), se(m !== 2 ? P : P.replace(Q, "$1"), y, m);
  }
  function s(g, m) {
    var y = a(m, m.charCodeAt(0), m.charCodeAt(1), m.charCodeAt(2));
    return y !== m + ";" ? y.replace(te, " or ($1)").substring(4) : "(" + m + ")";
  }
  function f(g, m, y, P, o, O, d, Y, N, l) {
    for (var i = 0, F = m, V; i < X; ++i)
      switch (V = J[i].call(b, g, F, y, P, o, O, d, Y, N, l)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          F = V;
      }
    if (F !== m)
      return F;
  }
  function v(g) {
    switch (g) {
      case void 0:
      case null:
        X = J.length = 0;
        break;
      default:
        if (typeof g == "function")
          J[X++] = g;
        else if (typeof g == "object")
          for (var m = 0, y = g.length; m < y; ++m)
            v(g[m]);
        else
          oe = !!g | 0;
    }
    return v;
  }
  function w(g) {
    return g = g.prefix, g !== void 0 && (se = null, g ? typeof g != "function" ? q = 1 : (q = 2, se = g) : q = 0), w;
  }
  function b(g, m) {
    var y = g;
    if (33 > y.charCodeAt(0) && (y = y.trim()), ce = y, y = [ce], 0 < X) {
      var P = f(-1, m, y, y, p, U, 0, 0, 0, 0);
      P !== void 0 && typeof P == "string" && (m = P);
    }
    var o = r(ie, y, m, 0, 0);
    return 0 < X && (P = f(-2, o, y, y, p, U, o.length, 0, 0, 0), P !== void 0 && (o = P)), ce = "", W = 0, U = p = 1, o;
  }
  var C = /^\0+/g, I = /[\0\r\f]/g, $ = /: */g, A = /zoo|gra/, x = /([,: ])(transform)/g, _ = /,\r+?/g, h = /([\t\r\n ])*\f?&/g, E = /@(k\w+)\s*(\S*)\s*/, R = /::(place)/g, S = /:(read-only)/g, u = /[svh]\w+-[tblr]{2}/, G = /\(\s*(.*)\s*\)/g, te = /([\s\S]*?);/g, H = /-self|flex-/g, Q = /[^]*?(:[rp][el]a[\w-]+)[^]*/, re = /stretch|:\s*\w+\-(?:conte|avail)/, ne = /([^-])(image-set\()/, U = 1, p = 1, W = 0, q = 1, ie = [], J = [], X = 0, se = null, oe = 0, ce = "";
  return b.use = v, b.set = w, e !== void 0 && w(e), b;
}
var _t = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function Pt(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Tt = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Xe = /* @__PURE__ */ Pt(
  function(e) {
    return Tt.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), $e = { exports: {} }, D = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function Rt() {
  if (Ze)
    return D;
  Ze = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, c = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, v = e ? Symbol.for("react.async_mode") : 60111, w = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, C = e ? Symbol.for("react.suspense") : 60113, I = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, h = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function R(u) {
    if (typeof u == "object" && u !== null) {
      var G = u.$$typeof;
      switch (G) {
        case r:
          switch (u = u.type, u) {
            case v:
            case w:
            case n:
            case c:
            case a:
            case C:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case f:
                case b:
                case A:
                case $:
                case s:
                  return u;
                default:
                  return G;
              }
          }
        case t:
          return G;
      }
    }
  }
  function S(u) {
    return R(u) === w;
  }
  return D.AsyncMode = v, D.ConcurrentMode = w, D.ContextConsumer = f, D.ContextProvider = s, D.Element = r, D.ForwardRef = b, D.Fragment = n, D.Lazy = A, D.Memo = $, D.Portal = t, D.Profiler = c, D.StrictMode = a, D.Suspense = C, D.isAsyncMode = function(u) {
    return S(u) || R(u) === v;
  }, D.isConcurrentMode = S, D.isContextConsumer = function(u) {
    return R(u) === f;
  }, D.isContextProvider = function(u) {
    return R(u) === s;
  }, D.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === r;
  }, D.isForwardRef = function(u) {
    return R(u) === b;
  }, D.isFragment = function(u) {
    return R(u) === n;
  }, D.isLazy = function(u) {
    return R(u) === A;
  }, D.isMemo = function(u) {
    return R(u) === $;
  }, D.isPortal = function(u) {
    return R(u) === t;
  }, D.isProfiler = function(u) {
    return R(u) === c;
  }, D.isStrictMode = function(u) {
    return R(u) === a;
  }, D.isSuspense = function(u) {
    return R(u) === C;
  }, D.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === w || u === c || u === a || u === C || u === I || typeof u == "object" && u !== null && (u.$$typeof === A || u.$$typeof === $ || u.$$typeof === s || u.$$typeof === f || u.$$typeof === b || u.$$typeof === _ || u.$$typeof === h || u.$$typeof === E || u.$$typeof === x);
  }, D.typeOf = R, D;
}
var j = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function xt() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, c = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, v = e ? Symbol.for("react.async_mode") : 60111, w = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, C = e ? Symbol.for("react.suspense") : 60113, I = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, h = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function R(i) {
      return typeof i == "string" || typeof i == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      i === n || i === w || i === c || i === a || i === C || i === I || typeof i == "object" && i !== null && (i.$$typeof === A || i.$$typeof === $ || i.$$typeof === s || i.$$typeof === f || i.$$typeof === b || i.$$typeof === _ || i.$$typeof === h || i.$$typeof === E || i.$$typeof === x);
    }
    function S(i) {
      if (typeof i == "object" && i !== null) {
        var F = i.$$typeof;
        switch (F) {
          case r:
            var V = i.type;
            switch (V) {
              case v:
              case w:
              case n:
              case c:
              case a:
              case C:
                return V;
              default:
                var k = V && V.$$typeof;
                switch (k) {
                  case f:
                  case b:
                  case A:
                  case $:
                  case s:
                    return k;
                  default:
                    return F;
                }
            }
          case t:
            return F;
        }
      }
    }
    var u = v, G = w, te = f, H = s, Q = r, re = b, ne = n, U = A, p = $, W = t, q = c, ie = a, J = C, X = !1;
    function se(i) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), oe(i) || S(i) === v;
    }
    function oe(i) {
      return S(i) === w;
    }
    function ce(i) {
      return S(i) === f;
    }
    function g(i) {
      return S(i) === s;
    }
    function m(i) {
      return typeof i == "object" && i !== null && i.$$typeof === r;
    }
    function y(i) {
      return S(i) === b;
    }
    function P(i) {
      return S(i) === n;
    }
    function o(i) {
      return S(i) === A;
    }
    function O(i) {
      return S(i) === $;
    }
    function d(i) {
      return S(i) === t;
    }
    function Y(i) {
      return S(i) === c;
    }
    function N(i) {
      return S(i) === a;
    }
    function l(i) {
      return S(i) === C;
    }
    j.AsyncMode = u, j.ConcurrentMode = G, j.ContextConsumer = te, j.ContextProvider = H, j.Element = Q, j.ForwardRef = re, j.Fragment = ne, j.Lazy = U, j.Memo = p, j.Portal = W, j.Profiler = q, j.StrictMode = ie, j.Suspense = J, j.isAsyncMode = se, j.isConcurrentMode = oe, j.isContextConsumer = ce, j.isContextProvider = g, j.isElement = m, j.isForwardRef = y, j.isFragment = P, j.isLazy = o, j.isMemo = O, j.isPortal = d, j.isProfiler = Y, j.isStrictMode = N, j.isSuspense = l, j.isValidElementType = R, j.typeOf = S;
  }()), j;
}
process.env.NODE_ENV === "production" ? $e.exports = Rt() : $e.exports = xt();
var kt = $e.exports, Ve = kt, Ot = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, Nt = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, $t = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ct = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Be = {};
Be[Ve.ForwardRef] = $t;
Be[Ve.Memo] = ct;
function Qe(e) {
  return Ve.isMemo(e) ? ct : Be[e.$$typeof] || Ot;
}
var It = Object.defineProperty, Mt = Object.getOwnPropertyNames, Je = Object.getOwnPropertySymbols, Dt = Object.getOwnPropertyDescriptor, jt = Object.getPrototypeOf, et = Object.prototype;
function ut(e, r, t) {
  if (typeof r != "string") {
    if (et) {
      var n = jt(r);
      n && n !== et && ut(e, n, t);
    }
    var a = Mt(r);
    Je && (a = a.concat(Je(r)));
    for (var c = Qe(e), s = Qe(r), f = 0; f < a.length; ++f) {
      var v = a[f];
      if (!Nt[v] && !(t && t[v]) && !(s && s[v]) && !(c && c[v])) {
        var w = Dt(r, v);
        try {
          It(e, v, w);
        } catch {
        }
      }
    }
  }
  return e;
}
var zt = ut;
const Lt = /* @__PURE__ */ Et(zt);
function ue() {
  return (ue = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var tt = function(e, r) {
  for (var t = [e[0]], n = 0, a = r.length; n < a; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, Ie = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Fe.typeOf(e);
}, _e = Object.freeze([]), de = Object.freeze({});
function Se(e) {
  return typeof e == "function";
}
function Me(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ge(e) {
  return e && typeof e.styledComponentId == "string";
}
var pe = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Ue = typeof window < "u" && "HTMLElement" in window, Yt = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Ft = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function Vt() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function me(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Vt.apply(void 0, [Ft[e]].concat(t)).trim());
}
var Bt = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, a = 0; a < t; a++)
      n += this.groupSizes[a];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var a = this.groupSizes, c = a.length, s = c; t >= s; )
        (s <<= 1) < 0 && me(16, "" + t);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(a), this.length = s;
      for (var f = c; f < s; f++)
        this.groupSizes[f] = 0;
    }
    for (var v = this.indexOfGroup(t + 1), w = 0, b = n.length; w < b; w++)
      this.tag.insertRule(v, n[w]) && (this.groupSizes[t]++, v++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], a = this.indexOfGroup(t), c = a + n;
      this.groupSizes[t] = 0;
      for (var s = a; s < c; s++)
        this.tag.deleteRule(a);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return n;
    for (var a = this.groupSizes[t], c = this.indexOfGroup(t), s = c + a, f = c; f < s; f++)
      n += this.tag.getRule(f) + `/*!sc*/
`;
    return n;
  }, e;
}(), Ae = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), ge = 1, Ee = function(e) {
  if (Ae.has(e))
    return Ae.get(e);
  for (; Pe.has(ge); )
    ge++;
  var r = ge++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && me(16, "" + r), Ae.set(e, r), Pe.set(r, e), r;
}, Gt = function(e) {
  return Pe.get(e);
}, Ut = function(e, r) {
  r >= ge && (ge = r + 1), Ae.set(e, r), Pe.set(r, e);
}, Ht = "style[" + pe + '][data-styled-version="5.3.9"]', Wt = new RegExp("^" + pe + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), qt = function(e, r, t) {
  for (var n, a = t.split(","), c = 0, s = a.length; c < s; c++)
    (n = a[c]) && e.registerName(r, n);
}, Xt = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], a = 0, c = t.length; a < c; a++) {
    var s = t[a].trim();
    if (s) {
      var f = s.match(Wt);
      if (f) {
        var v = 0 | parseInt(f[1], 10), w = f[2];
        v !== 0 && (Ut(w, v), qt(e, w, f[3]), e.getTag().insertRules(v, n)), n.length = 0;
      } else
        n.push(s);
    }
  }
}, Zt = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, lt = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), a = function(f) {
    for (var v = f.childNodes, w = v.length; w >= 0; w--) {
      var b = v[w];
      if (b && b.nodeType === 1 && b.hasAttribute(pe))
        return b;
    }
  }(t), c = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(pe, "active"), n.setAttribute("data-styled-version", "5.3.9");
  var s = Zt();
  return s && n.setAttribute("nonce", s), t.insertBefore(n, c), n;
}, Kt = function() {
  function e(t) {
    var n = this.element = lt(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet)
        return a.sheet;
      for (var c = document.styleSheets, s = 0, f = c.length; s < f; s++) {
        var v = c[s];
        if (v.ownerNode === a)
          return v;
      }
      me(17);
    }(n), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), Qt = function() {
  function e(t) {
    var n = this.element = lt(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var a = document.createTextNode(n), c = this.nodes[t];
      return this.element.insertBefore(a, c || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Jt = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), rt = Ue, er = { isServer: !Ue, useCSSOMInjection: !Yt }, dt = function() {
  function e(t, n, a) {
    t === void 0 && (t = de), n === void 0 && (n = {}), this.options = ue({}, er, {}, t), this.gs = n, this.names = new Map(a), this.server = !!t.isServer, !this.server && Ue && rt && (rt = !1, function(c) {
      for (var s = document.querySelectorAll(Ht), f = 0, v = s.length; f < v; f++) {
        var w = s[f];
        w && w.getAttribute(pe) !== "active" && (Xt(c, w), w.parentNode && w.parentNode.removeChild(w));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Ee(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(ue({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, c = n.useCSSOMInjection, s = n.target, t = a ? new Jt(s) : c ? new Kt(s) : new Qt(s), new Bt(t)));
    var t, n, a, c, s;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (Ee(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(t, a);
    }
  }, r.insertRules = function(t, n, a) {
    this.registerName(t, n), this.getTag().insertRules(Ee(t), a);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(Ee(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), a = n.length, c = "", s = 0; s < a; s++) {
        var f = Gt(s);
        if (f !== void 0) {
          var v = t.names.get(f), w = n.getGroup(s);
          if (v && w && v.size) {
            var b = pe + ".g" + s + '[id="' + f + '"]', C = "";
            v !== void 0 && v.forEach(function(I) {
              I.length > 0 && (C += I + ",");
            }), c += "" + w + b + '{content:"' + C + `"}/*!sc*/
`;
          }
        }
      }
      return c;
    }(this);
  }, e;
}(), tr = /(a)(d)/gi, nt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function De(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = nt(r % 52) + t;
  return (nt(r % 52) + t).replace(tr, "$1-$2");
}
var fe = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, ft = function(e) {
  return fe(5381, e);
};
function rr(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Se(t) && !Ge(t))
      return !1;
  }
  return !0;
}
var nr = ft("5.3.9"), or = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && rr(r), this.componentId = t, this.baseHash = fe(nr, t), this.baseStyle = n, dt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var a = this.componentId, c = [];
    if (this.baseStyle && c.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(a, this.staticRulesId))
        c.push(this.staticRulesId);
      else {
        var s = he(this.rules, r, t, n).join(""), f = De(fe(this.baseHash, s) >>> 0);
        if (!t.hasNameForId(a, f)) {
          var v = n(s, "." + f, void 0, a);
          t.insertRules(a, f, v);
        }
        c.push(f), this.staticRulesId = f;
      }
    else {
      for (var w = this.rules.length, b = fe(this.baseHash, n.hash), C = "", I = 0; I < w; I++) {
        var $ = this.rules[I];
        if (typeof $ == "string")
          C += $, process.env.NODE_ENV !== "production" && (b = fe(b, $ + I));
        else if ($) {
          var A = he($, r, t, n), x = Array.isArray(A) ? A.join("") : A;
          b = fe(b, x + I), C += x;
        }
      }
      if (C) {
        var _ = De(b >>> 0);
        if (!t.hasNameForId(a, _)) {
          var h = n(C, "." + _, void 0, a);
          t.insertRules(a, _, h);
        }
        c.push(_);
      }
    }
    return c.join(" ");
  }, e;
}(), ar = /^\s*\/\/.*$/gm, ir = [":", "[", ".", "#"];
function sr(e) {
  var r, t, n, a, c = e === void 0 ? de : e, s = c.options, f = s === void 0 ? de : s, v = c.plugins, w = v === void 0 ? _e : v, b = new At(f), C = [], I = function(x) {
    function _(h) {
      if (h)
        try {
          x(h + "}");
        } catch {
        }
    }
    return function(h, E, R, S, u, G, te, H, Q, re) {
      switch (h) {
        case 1:
          if (Q === 0 && E.charCodeAt(0) === 64)
            return x(E + ";"), "";
          break;
        case 2:
          if (H === 0)
            return E + "/*|*/";
          break;
        case 3:
          switch (H) {
            case 102:
            case 112:
              return x(R[0] + E), "";
            default:
              return E + (re === 0 ? "/*|*/" : "");
          }
        case -2:
          E.split("/*|*/}").forEach(_);
      }
    };
  }(function(x) {
    C.push(x);
  }), $ = function(x, _, h) {
    return _ === 0 && ir.indexOf(h[t.length]) !== -1 || h.match(a) ? x : "." + r;
  };
  function A(x, _, h, E) {
    E === void 0 && (E = "&");
    var R = x.replace(ar, ""), S = _ && h ? h + " " + _ + " { " + R + " }" : R;
    return r = E, t = _, n = new RegExp("\\" + t + "\\b", "g"), a = new RegExp("(\\" + t + "\\b){2,}"), b(h || !_ ? "" : _, S);
  }
  return b.use([].concat(w, [function(x, _, h) {
    x === 2 && h.length && h[0].lastIndexOf(t) > 0 && (h[0] = h[0].replace(n, $));
  }, I, function(x) {
    if (x === -2) {
      var _ = C;
      return C = [], _;
    }
  }])), A.hash = w.length ? w.reduce(function(x, _) {
    return _.name || me(15), fe(x, _.name);
  }, 5381).toString() : "", A;
}
var pt = Te.createContext();
pt.Consumer;
var ht = Te.createContext(), cr = (ht.Consumer, new dt()), je = sr();
function ur() {
  return Ye(pt) || cr;
}
function lr() {
  return Ye(ht) || je;
}
var dr = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(a, c) {
      c === void 0 && (c = je);
      var s = n.name + c.hash;
      a.hasNameForId(n.id, s) || a.insertRules(n.id, s, c(n.rules, s, "@keyframes"));
    }, this.toString = function() {
      return me(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = je), this.name + r.hash;
  }, e;
}(), fr = /([A-Z])/, pr = /([A-Z])/g, hr = /^ms-/, mr = function(e) {
  return "-" + e.toLowerCase();
};
function ot(e) {
  return fr.test(e) ? e.replace(pr, mr).replace(hr, "-ms-") : e;
}
var at = function(e) {
  return e == null || e === !1 || e === "";
};
function he(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var a, c = [], s = 0, f = e.length; s < f; s += 1)
      (a = he(e[s], r, t, n)) !== "" && (Array.isArray(a) ? c.push.apply(c, a) : c.push(a));
    return c;
  }
  if (at(e))
    return "";
  if (Ge(e))
    return "." + e.styledComponentId;
  if (Se(e)) {
    if (typeof (w = e) != "function" || w.prototype && w.prototype.isReactComponent || !r)
      return e;
    var v = e(r);
    return process.env.NODE_ENV !== "production" && Fe.isElement(v) && console.warn(Me(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), he(v, r, t, n);
  }
  var w;
  return e instanceof dr ? t ? (e.inject(t, n), e.getName(n)) : e : Ie(e) ? function b(C, I) {
    var $, A, x = [];
    for (var _ in C)
      C.hasOwnProperty(_) && !at(C[_]) && (Array.isArray(C[_]) && C[_].isCss || Se(C[_]) ? x.push(ot(_) + ":", C[_], ";") : Ie(C[_]) ? x.push.apply(x, b(C[_], _)) : x.push(ot(_) + ": " + ($ = _, (A = C[_]) == null || typeof A == "boolean" || A === "" ? "" : typeof A != "number" || A === 0 || $ in _t ? String(A).trim() : A + "px") + ";"));
    return I ? [I + " {"].concat(x, ["}"]) : x;
  }(e) : e.toString();
}
var it = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function vr(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return Se(e) || Ie(e) ? it(he(tt(_e, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : it(he(tt(e, t)));
}
var st = /invalid hook call/i, be = /* @__PURE__ */ new Set(), yr = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var a = !0;
      console.error = function(c) {
        if (st.test(c))
          a = !1, be.delete(t);
        else {
          for (var s = arguments.length, f = new Array(s > 1 ? s - 1 : 0), v = 1; v < s; v++)
            f[v - 1] = arguments[v];
          n.apply(void 0, [c].concat(f));
        }
      }, St(), a && !be.has(t) && (console.warn(t), be.add(t));
    } catch (c) {
      st.test(c.message) && be.delete(t);
    } finally {
      console.error = n;
    }
  }
}, gr = function(e, r, t) {
  return t === void 0 && (t = de), e.theme !== t.theme && e.theme || r || t.theme;
}, Sr = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, wr = /(^-|-$)/g;
function ke(e) {
  return e.replace(Sr, "-").replace(wr, "");
}
var Er = function(e) {
  return De(ft(e) >>> 0);
};
function Ce(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var ze = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, br = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Cr(e, r, t) {
  var n = e[t];
  ze(r) && ze(n) ? mt(n, r) : e[t] = r;
}
function mt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var a = 0, c = t; a < c.length; a++) {
    var s = c[a];
    if (ze(s))
      for (var f in s)
        br(f) && Cr(e, s[f], f);
  }
  return e;
}
var vt = Te.createContext();
vt.Consumer;
var Oe = {};
function yt(e, r, t) {
  var n = Ge(e), a = !Ce(e), c = r.attrs, s = c === void 0 ? _e : c, f = r.componentId, v = f === void 0 ? function(E, R) {
    var S = typeof E != "string" ? "sc" : ke(E);
    Oe[S] = (Oe[S] || 0) + 1;
    var u = S + "-" + Er("5.3.9" + S + Oe[S]);
    return R ? R + "-" + u : u;
  }(r.displayName, r.parentComponentId) : f, w = r.displayName, b = w === void 0 ? function(E) {
    return Ce(E) ? "styled." + E : "Styled(" + Me(E) + ")";
  }(e) : w, C = r.displayName && r.componentId ? ke(r.displayName) + "-" + r.componentId : r.componentId || v, I = n && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, $ = r.shouldForwardProp;
  n && e.shouldForwardProp && ($ = r.shouldForwardProp ? function(E, R, S) {
    return e.shouldForwardProp(E, R, S) && r.shouldForwardProp(E, R, S);
  } : e.shouldForwardProp);
  var A, x = new or(t, C, n ? e.componentStyle : void 0), _ = x.isStatic && s.length === 0, h = function(E, R) {
    return function(S, u, G, te) {
      var H = S.attrs, Q = S.componentStyle, re = S.defaultProps, ne = S.foldedComponentIds, U = S.shouldForwardProp, p = S.styledComponentId, W = S.target;
      process.env.NODE_ENV !== "production" && He(p);
      var q = function(P, o, O) {
        P === void 0 && (P = de);
        var d = ue({}, o, { theme: P }), Y = {};
        return O.forEach(function(N) {
          var l, i, F, V = N;
          for (l in Se(V) && (V = V(d)), V)
            d[l] = Y[l] = l === "className" ? (i = Y[l], F = V[l], i && F ? i + " " + F : i || F) : V[l];
        }), [d, Y];
      }(gr(u, Ye(vt), re) || de, u, H), ie = q[0], J = q[1], X = function(P, o, O, d) {
        var Y = ur(), N = lr(), l = o ? P.generateAndInjectStyles(de, Y, N) : P.generateAndInjectStyles(O, Y, N);
        return process.env.NODE_ENV !== "production" && He(l), process.env.NODE_ENV !== "production" && !o && d && d(l), l;
      }(Q, te, ie, process.env.NODE_ENV !== "production" ? S.warnTooManyClasses : void 0), se = G, oe = J.$as || u.$as || J.as || u.as || W, ce = Ce(oe), g = J !== u ? ue({}, u, {}, J) : u, m = {};
      for (var y in g)
        y[0] !== "$" && y !== "as" && (y === "forwardedAs" ? m.as = g[y] : (U ? U(y, Xe, oe) : !ce || Xe(y)) && (m[y] = g[y]));
      return u.style && J.style !== u.style && (m.style = ue({}, u.style, {}, J.style)), m.className = Array.prototype.concat(ne, p, X !== p ? X : null, u.className, J.className).filter(Boolean).join(" "), m.ref = se, wt(oe, m);
    }(A, E, R, _);
  };
  return h.displayName = b, (A = Te.forwardRef(h)).attrs = I, A.componentStyle = x, A.displayName = b, A.shouldForwardProp = $, A.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : _e, A.styledComponentId = C, A.target = n ? e.target : e, A.withComponent = function(E) {
    var R = r.componentId, S = function(G, te) {
      if (G == null)
        return {};
      var H, Q, re = {}, ne = Object.keys(G);
      for (Q = 0; Q < ne.length; Q++)
        H = ne[Q], te.indexOf(H) >= 0 || (re[H] = G[H]);
      return re;
    }(r, ["componentId"]), u = R && R + "-" + (Ce(E) ? E : ke(Me(E)));
    return yt(E, ue({}, S, { attrs: I, componentId: u }), t);
  }, Object.defineProperty(A, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = n ? mt({}, e.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (yr(b, C), A.warnTooManyClasses = function(E, R) {
    var S = {}, u = !1;
    return function(G) {
      if (!u && (S[G] = !0, Object.keys(S).length >= 200)) {
        var te = R ? ' with the id of "' + R + '"' : "";
        console.warn("Over 200 classes were generated for component " + E + te + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), u = !0, S = {};
      }
    };
  }(b, C)), Object.defineProperty(A, "toString", { value: function() {
    return "." + A.styledComponentId;
  } }), a && Lt(A, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), A;
}
var Le = function(e) {
  return function r(t, n, a) {
    if (a === void 0 && (a = de), !Fe.isValidElementType(n))
      return me(1, String(n));
    var c = function() {
      return t(n, a, vr.apply(void 0, arguments));
    };
    return c.withConfig = function(s) {
      return r(t, n, ue({}, a, {}, s));
    }, c.attrs = function(s) {
      return r(t, n, ue({}, a, { attrs: Array.prototype.concat(a.attrs, s).filter(Boolean) }));
    }, c;
  }(yt, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Le[e] = Le(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Ar = Le, _r = Ar.button`
  background-color: royalblue;
  color: white;
  border-radius: 5px;
`;
function Rr({ children: e }) {
  return /* @__PURE__ */ gt(_r, { children: e });
}
const xr = 1;
export {
  Rr as PrimaryButton,
  xr as one
};
