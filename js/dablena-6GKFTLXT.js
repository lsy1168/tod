"use strict";
(() => {
  var I = !1,
    J = 10,
    g = null;
  try {
    g = window;
    let e = null,
      t = 0;
    for (; t < J && g?.parent?.window && g?.parent !== g; ) {
      e = g.parent;
      let n = null,
        o = e.document.getElementsByTagName("iframe");
      for (let r = 0; r < o.length; r++) {
        let i = o[r];
        i.contentWindow === g && (n = i);
      }
      if (((I = !!n), !o?.length || !I)) break;
      (g = g.parent.window), t++;
    }
  } catch {}
  function D() {
    return window?.TEST_API_SERVER_DOMAIN || "api.dable.io";
  }
  function W() {
    return window?.TEST_AD_LOGGING_SERVER_DOMAIN || "ad-log.dable.io";
  }
  function F() {
    return location?.protocol === "https:" ? "https:" : "http:";
  }
  function k() {
    let e = null,
      t = null;
    I
      ? ((t = window.parent.window), (e = window.parent.document))
      : ((t = window), (e = document));
    let n = 0;
    return (
      typeof t.pageYOffset == "number"
        ? (n = t.pageYOffset)
        : e.documentElement?.scrollTop
        ? (n = e.documentElement.scrollTop)
        : e.body?.scrollTop && (n = e.body.scrollTop),
      n
    );
  }
  function P() {
    let e;
    I ? (e = util.rootWindow()) : (e = window);
    let t = e.document.body,
      n = e.document.documentElement || document.body;
    return {
      viewport: e.innerHeight || n.clientHeight,
      window: Math.max(
        t.scrollHeight,
        t.offsetHeight,
        n.clientHeight,
        n.scrollHeight,
        n.offsetHeight
      ),
    };
  }
  function m(e) {
    try {
      window.console.log(`Dable DEBUG: ${e}`);
    } catch {}
  }
  var $ = class {
    constructor(t) {
      this.executor = t;
    }
    execute(t) {
      let n = Array.prototype.shift.apply(t);
      this.executor[n]
        ? this.executor[n].apply(this.executor, t)
        : m(
            `\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uBA85\uB839\uC785\uB2C8\uB2E4: ${n}`
          );
    }
    push(t) {
      if (Array.isArray(t[0])) {
        for (let n = 0; n < t.length; n++) {
          let o = t[n];
          this.push(o);
        }
        return;
      }
      return this.execute(t);
    }
  };
  var Z = (function () {
    let e = 0;
    return () => ++e;
  })();
  function ee(e) {
    let t = document.createElement("script"),
      n = !1;
    (t.src = e),
      (t.async = !0),
      (t.onload = () => {
        n || ((n = !0), (t.onload = null), t?.parentNode?.removeChild(t));
      }),
      document.head.appendChild(t);
  }
  function M(e, t) {
    let n = [];
    return (
      Array.isArray(t)
        ? t.forEach((o, r) => {
            let i = M(`${e}[${r}]`, o);
            i && n.push(i);
          })
        : t && typeof t == "object"
        ? Object.keys(t).forEach((o) => {
            let r = M(`${e}[${o}]`, t[o]);
            r && n.push(r);
          })
        : e &&
          n.push(encodeURIComponent(e) + "=" + encodeURIComponent(String(t))),
      n.join("&")
    );
  }
  function T(e, t = {}, n) {
    let o = [];
    Object.keys(t || {}).forEach((i) => {
      let c = M(i, t[i]);
      c && o.push(c);
    });
    let r = `_dbljson${Z()}`;
    return (
      typeof window == "object" &&
        (window[r] = (i) => {
          n?.(i);
        }),
      o.push(`callback=${r}&_=${Date.now()}`),
      ee(`${e}?${o.join("&")}`),
      r
    );
  }
  function u(e) {
    let n = new RegExp(`\\b${e}=(.*?)(?:[,;]|$)`).exec(document.cookie);
    return n && n[1] && n[1] !== "null" ? n[1] : "";
  }
  function _(e, t, n = 60) {
    let o = new Date(Date.now() + n * 1e3),
      r = location.hostname.split("."),
      i = Math.max(0, r.length - 2) + 1;
    for (; --i >= 0; ) {
      let c = r.slice(i).join("."),
        s = `${e}=${t}; path=/; domain=${c}; expires=${o.toUTCString()};`;
      if (((document.cookie = s), u(e))) return;
    }
  }
  function te(e) {
    let { platform: t, platformVersion: n, wow64: o, mobile: r, model: i } = e,
      c = n.replace(/\./g, "_");
    if (t === "Android" && r) return `Linux; Android ${c}; ${i}`;
    if (t === "macOS") return `Macintosh; Intel Mac OS X ${c}`;
    if (t === "Windows") {
      let s = n.split("."),
        l = parseInt(s[0]),
        f = o ? "WOW64" : "Win64; x64";
      return l > 0 ? `Windows NT 10.0; ${f}` : `Windows NT 6.${s[1]}; ${f}`;
    }
    return t === "Chrome OS"
      ? `X11; CrOS x86_64 ${n}`
      : t === "Linux"
      ? "X11; Linux x86_64"
      : `${t} ${n}`;
  }
  function Q() {
    let e = navigator.userAgentData,
      t = Promise.resolve("");
    if (!e || !e.getHighEntropyValues) return t;
    let n = Number(e.brands.find((o) => o.brand === "Chromium")?.version);
    return !n || n < 101
      ? t
      : e
          .getHighEntropyValues([
            "mobile",
            "platformVersion",
            "platform",
            "fullVersionList",
            "model",
            "wow64",
          ])
          .then((o) => {
            let r = o.fullVersionList.find(
                (s) => s.brand === "Chromium"
              )?.version,
              i = te(o),
              c = navigator.userAgent
                .replace(/\bChrome\/[\d.]+/, `Chrome/${r}`)
                .replace(/^(Mozilla\/5\.0) \(.+?\)/, `$1 (${i})`);
            return navigator.userAgent !== c ? c : "";
          });
  }
  function ne(e, t) {
    return (e = e % 1 ? Math.round(e) : e), Math.min(e, Math.floor(t));
  }
  function ie(e = {}) {
    let { min: t, max: n } = e;
    return (
      e.digits &&
        ((t = Math.pow(10, e.digits - 1)), (n = Math.pow(10, e.digits) - 1)),
      (t === void 0 || n === void 0) && ((t = 0), (n = 1)),
      { min: t, max: n }
    );
  }
  function oe({ min: e, max: t, scalingFactor: n }) {
    return e + n * (t - e);
  }
  function re() {
    let e = window.crypto || window.msCrypto;
    if (!(e && e.getRandomValues)) return Math.random();
    let t = 4294967295,
      n = new Uint32Array(1);
    return e.getRandomValues(n), n[0] / t;
  }
  function A(e = {}) {
    let t = re(),
      { min: n, max: o } = ie(e),
      r = oe({ min: n, max: o, scalingFactor: t });
    return e.digits ? ne(r, o) : r;
  }
  var ce = String(Math.round(A() * 1e8)),
    se = 1e3 * 10,
    V = 1e3 * 60 * 30,
    de = 1e3 * 60 * 60 * 24 * 30,
    v = !1,
    x = null,
    w = null,
    Y = !0,
    U = null,
    O = (e) => {
      let t = null;
      try {
        t = decodeURIComponent(e);
      } catch {
        t = unescape(e);
      }
      return t;
    };
  function b(e, t) {
    let n,
      {
        client_name_or_account_id: o,
        event_type: r,
        data: i = {},
        uid: c,
        cid: s,
        cached_click: l,
        cached_conversion: f,
        client_id: C,
        items: N,
      } = e;
    i === null && (i = {});
    let R = O(window?.location?.href || "");
    if (R.indexOf("dablena=NATEST") > -1) return;
    let d = window?.location?.href?.match(/[\?\&]utm_[a-z]+=[^\#\&]+/g);
    l || f
      ? ((n = (l || f).split("|")), n.unshift(""))
      : (n = R.match(
          /[\?\&]dablena=([^\|]+)\|([^\|]+)\|([^\|]+)\|([^\|]+)\|([^\|\#\&]+)\|([^\|\#\&]+)(?:\|([^\|\#\&]+))(?:\|([^\|\#\&]+))(?:\|(\d+))?/
        ));
    let p = document?.referrer || "";
    p.indexOf("api.dable.io/widgets") > -1
      ? ((c = O(p.split("/")[7]?.split("?")[0] || "") || c),
        (i.widget_id = p.split("/")[5]),
        (i.service_name =
          n?.[3] || O(p.match(/[\?\&]site=([^\#\&]+)/)?.[1] || "")),
        (i.campaign_id = n?.[4] || ""),
        (i.content_id = n?.[5] || ""),
        (i.method = n?.[6] || ""),
        (i.channel = n?.[7] || ""),
        (i.request_id = n?.[8] || ""))
      : n &&
        ((c = n?.[1] || c),
        (i.widget_id = n?.[2]),
        (i.service_name = n?.[3]),
        (i.campaign_id = n?.[4] || ""),
        (i.content_id = n?.[5] || ""),
        (i.method = n?.[6] || ""),
        (i.channel = n?.[7] || ""),
        (i.request_id = n?.[8] || "")),
      (i.url = window?.location?.href || ""),
      (i.ref = p),
      (i.cid = s),
      C && (i.client_id = C),
      N && (i.items = N),
      (r.indexOf("adview+") === 0 ||
        r.indexOf("inlinkview+") === 0 ||
        (v && i.session_id)) &&
        ((i.duration = e.duration || 0),
        (i.scroll_y = e.scroll_y),
        (i.page_height = e.page_height),
        (i.window_height = e.window_height),
        (i.click_timestamp = n?.[9] || ""));
    let y = `${F()}//${W()}/logs`;
    if (
      ((y += `/clients/${encodeURIComponent(o)}`),
      (y += `/users/${encodeURIComponent(c)}/${r}`),
      d)
    )
      for (let a = 0; a < d.length; a++) {
        let h = d[a]?.substring(1).split("=");
        i[h[0]] = O(h[1]);
      }
    i.z = String(Math.round(Math.random() * 1e6));
    let S = setTimeout(function () {
      t && t();
    }, 2e3);
    Q().then((a) => {
      a && (i.user_agent = a),
        T(y, i, function (h) {
          h !== "OK" && m(h), S && (clearTimeout(S), t && t());
        });
    });
  }
  var ae = (e) => {
      let t = 0;
      U = new Date().getTime();
      let n = setInterval(function () {
        let o = new Date().getTime();
        o - U > se && clearInterval(n), (U = o), (t = t + 1), (e.duration = t);
        try {
          let r = P();
          (e.scroll_y = k()),
            (e.page_height = r.window),
            (e.window_height = r.viewport);
        } catch {
          (e.scroll_y = -1), (e.page_height = -1), (e.window_height = -1);
        }
        b(e), _(x, w, V);
      }, 1e3);
    },
    X = (e, t, n) => {
      setTimeout(function () {
        (e.event_type = `adview+${t}`), (e.duration = t);
        try {
          let o = P();
          (e.scroll_y = k()),
            (e.page_height = o.window),
            (e.window_height = o.viewport);
        } catch {
          (e.scroll_y = -1), (e.page_height = -1), (e.window_height = -1);
        }
        n ? n(e) : b(e);
      }, t * 1e3);
    },
    ue = (e, t) => {
      let { count: n } = t;
      (t.duration = n),
        b(t),
        (n === 5 || n === 30) &&
          ((e.event_type = `inlinkview+${n}`), (e.duration = n), b(e));
    };
  function z(e, t) {
    let {
        client_name_or_account_id: n,
        uid: o,
        cid: r,
        cached_click: i,
        cached_conversion: c,
        client_id: s,
        items: l,
        data: f,
      } = e,
      C =
        /[\?\&]dablena=([^\|]+)\|([^\|]+)\|([^\|]+)\|([^\|]+)\|([^\|\#\&]+)\|([^\|\#\&]+)(?:\|([^\|\#\&]+))(?:\|([^\|\#\&]+))(?:\|(\d+))?/,
      N = window?.location?.href?.match(/[\?\&]utm_[a-z]+=[^\#\&]+/g),
      R = O(window?.location?.href || "").match(C),
      d = "visit";
    x = `__dbl__se_${s}`;
    let p = `__dbl__re_${s}`;
    v = !1;
    let y = !!u(x),
      S = !!u(p);
    (R || i) &&
      (f?.is_native ? (d = "inlinkview") : (d = "adview"),
      y
        ? (w = u(x))
        : ((w = r.slice(0, 3) + String(Math.round(A() * 1e8))), _(p, 1, de)),
      (v = !0),
      _(x, w, V)),
      d === "visit" &&
        (y || S) &&
        (y
          ? (w = u(x))
          : S && (w = r.slice(0, 3) + String(Math.round(A() * 1e8))),
        (v = !0),
        _(x, w, V));
    let a = {
        event_type: d,
        client_name_or_account_id: n,
        uid: o,
        cid: r,
        cached_click: i,
        cached_conversion: c,
        client_id: s,
        items: l,
      },
      h = {
        event_type: d,
        client_name_or_account_id: n,
        uid: o,
        cid: r,
        cached_click: i,
        cached_conversion: c,
        client_id: s,
        items: l,
        data: { session_id: w, user_page_id: ce },
      };
    if (d === "inlinkview") {
      let { scroll_y: L, page_height: j, window_height: q, count: H } = f;
      Object.assign(
        a,
        { scroll_y: L },
        { page_height: j },
        { window_height: q },
        { count: H }
      ),
        Object.assign(
          h,
          { scroll_y: L },
          { page_height: j },
          { window_height: q },
          { count: H }
        ),
        ue(a, h);
    }
    Y &&
      (d === "adview" && (X(a, 5), X(a, 30)),
      v && d !== "inlinkview" && ae(h),
      d === "visit" && (!v || N) ? b(a, t) : t && t(),
      f?.is_native && (Y = !1));
  }
  function le() {
    if (window.fbq) return;
    let e = (window.fbq = function () {
      return e.callMethod
        ? e.callMethod.apply(e, arguments)
        : e.queue.push(arguments);
    });
    window._fbq || (window._fbq = e),
      (e.push = e),
      (e.loaded = 1),
      (e.version = "2.0"),
      (e.queue = []);
    let t = document.createElement("script");
    (t.async = 1), (t.src = "https://connect.facebook.net/en_US/fbevents.js");
    let n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(t, n);
  }
  function K(e, t) {
    le(), window.fbq("init", `${e}`), window.fbq("track", t);
  }
  var he = (e) =>
      /\d\d\d-\d\d\d-\d\d\d/.test(e)
        ? Number(e.split("-").join("").substring(3))
        : null,
    me = {
      Visit: { type: "visit" },
      PageView: { type: "visit" },
      ViewContent: { type: "content" },
      Search: { type: "search" },
      AddToCart: { type: "cart" },
      AddToWishlist: { type: "wishlist" },
      InitialCheckout: { type: "checkout" },
      InitiateCheckout: { type: "checkout" },
      AddPaymentInfo: { type: "payment" },
      Purchase: {
        type: "purchase",
        validateData(e) {
          if (!e?.value || !e?.currency)
            throw "value or currency did not defined.";
        },
      },
      Lead: { type: "lead" },
      CompleteRegistration: { type: "registration" },
      event1: { type: "event1" },
      event2: { type: "event2" },
      event3: { type: "event3" },
    },
    E = class {
      cacheCookieName = void 0;
      cacheExpire = void 0;
      constructor() {
        (this.cacheCookieName = "dable_uid"),
          (this.cacheExpire = 3 * 365 * 24 * 60 * 60 * 1e3);
      }
      init(t) {
        this.clientNameOrAccountId = t;
      }
      track(t, n, o) {
        if (
          (typeof n == "function" && ((o = n), (n = null)),
          o || (o = function () {}),
          !this.clientNameOrAccountId)
        ) {
          m("init should executed before executing track method"), o();
          return;
        }
        if (document.location.href.indexOf("gtm-msr.appspot") > -1) {
          o();
          return;
        }
        let r = me[t];
        try {
          if (r) r.validateData && r.validateData(n);
          else throw `Invalid event code: ${t}`;
        } catch (i) {
          m(i);
        }
        this.fetchPrefs((i) => {
          this.fetchUID((c) => {
            if (i.sp_client === null) {
              m(`Invalid ID: ${this.clientNameOrAccountId}`), o();
              return;
            }
            i.sp_client?.facebook?.enabled &&
              i.sp_client?.facebook?.pixel_id &&
              K(i.sp_client.facebook.pixel_id, t),
              (t === "PageView" ? z : b)(
                {
                  client_name_or_account_id: this.clientNameOrAccountId,
                  event_type: r.type,
                  data: n,
                  uid: c,
                  cid: i.cid,
                  cached_click: i.sp_client?.cached_click,
                  cached_conversion: i.sp_client?.cached_conversion,
                  client_id: i.sp_client?.client_id,
                },
                o
              );
          });
        });
      }
      fetchPrefs(t) {
        if (!this.clientNameOrAccountId) {
          m("init should executed before executing fetchPrefs method");
          return;
        }
        if (this.prefs) {
          let c =
              this.clientNameOrAccountId === this.prefs.sp_client.client_name,
            s =
              he(this.clientNameOrAccountId) === this.prefs.sp_client.client_id;
          if (c || s) {
            t(this.prefs);
            return;
          }
        }
        if (this.fetchPrefsQueue) {
          this.fetchPrefsQueue.push(t);
          return;
        }
        this.fetchPrefsQueue = [t];
        let n = u(this.cacheCookieName),
          o = window?.location?.href?.match(/[\?\&]ecid=([^\#\&]+)/)?.[1],
          r = window?.location?.href?.match(/[?&]request_id=([^#&]+)/)?.[1],
          i = { paramUid: "", cached_uid: "", requestId: "" };
        o && (i.paramUid = o),
          r && (i.requestId = r),
          n && n !== "undefined" && (i.cached_uid = n),
          T(
            `https://${D()}/plugin/services/${encodeURIComponent(
              this.clientNameOrAccountId
            )}/prefs2`,
            i,
            (c) => {
              this.prefs = (c && c.result) || null;
              for (let s = 0; s < this.fetchPrefsQueue.length; s++) {
                let l = this.fetchPrefsQueue[s];
                l(this.prefs);
              }
              (this.fetchPrefsQueue = null),
                _(this.cacheCookieName, this.prefs.cid, this.cacheExpire);
            }
          );
      }
      fetchUID(t) {
        let n = function () {
          return (
            String(Math.round(A() * 9e7) + 1e7) +
            "." +
            String(new Date().getTime())
          );
        };
        if (this.uid) {
          t(this.uid);
          return;
        }
        this.fetchPrefs((o) => {
          let { cid: r } = o;
          t(r || n());
        });
      }
    };
  ((e) => {
    let t = e.q || [];
    if (Array.isArray(t)) {
      e.q = new $(new E());
      for (let n = 0; n < t.length; n++) {
        let o = t[n];
        e.q.push(o);
      }
    }
  })(window.dablena);
})();
