if (typeof wcs == "undefined") {
  wcs = {};
}
if (typeof wcs_SerName == "undefined") {
  wcs_SerName = "wcs.naver.com";
}
if (typeof wcs_add == "undefined") {
  wcs_add = {};
}
if (typeof wcs.transport == "undefined") {
  wcs.transport = "beacon";
}
if (typeof wcs.ref == "undefined") {
  wcs.ref = "";
}
if (typeof wcs.bt == "undefined") {
  wcs.bt = -1;
}
if (typeof wcs.norefresh == "undefined") {
  wcs.norefresh = 0;
}
(function () {
  var Q = {};
  var r = "0.8.13";
  var ay = 0;
  var w = -1;
  var aj = "NA_SA";
  var ah = "NA_SAC";
  var af = "NA_SAS";
  var P = "NA_MI";
  var S = "NA_CO";
  var p = "NVADID";
  var s = "NA_DA";
  var aA = "_fwb";
  var ak = "NA_TRIDTP";
  var F = "NA_NACC";
  function Y() {
    return navigator.appName == "Microsoft Internet Explorer";
  }
  function G() {
    return navigator.userAgent.indexOf("MAC") >= 0;
  }
  function ax() {
    u();
    g();
    al();
    T();
    t();
    o();
    az();
    Z();
    J();
    aa();
    y();
  }
  function u() {
    Q.os = navigator.platform ? navigator.platform : "";
  }
  function g() {
    var aB = "";
    aB = navigator.userLanguage
      ? navigator.userLanguage
      : navigator.language
      ? navigator.language
      : "";
    Q.ln = aB;
  }
  function al() {
    var aD = "";
    if (window.screen && screen.width && screen.height) {
      aD = screen.width + "x" + screen.height;
    } else {
      if (window.java || self.java) {
        var aC = window.java || self.java;
        var aB = aC.awt.Toolkit.getDefaultToolkit().getScreenSize();
        aD = aB.width + "x" + aB.height;
      }
    }
    Q.sr = aD;
  }
  function T() {
    try {
      Q.bw = document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : document.body.clientWidth;
      Q.bh = document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : document.body.clientHeight;
    } catch (aB) {}
  }
  function t() {
    Q.c = "";
    if (window.screen) {
      Q.c = screen.colorDepth ? screen.colorDepth : screen.pixelDepth;
    } else {
      if (window.java || self.java) {
        var aB = window.java || self.java;
        var aC = aB.awt.Toolkit.getDefaultToolkit()
          .getColorModel()
          .getPixelSize();
        Q.c = aC;
      }
    }
  }
  function o() {
    Q.j = "";
    try {
      Q.j = navigator.javaEnabled() ? "Y" : "N";
    } catch (aB) {}
  }
  function Z() {
    if (navigator.cookieEnabled) {
      Q.k = "Y";
    } else {
      Q.k = "N";
    }
  }
  function J() {
    var aB = "";
    try {
      if (Y() && !G() && document.body) {
        var aD = document.body.addBehavior("#default#clientCaps");
        if (document.body.connectionType) {
          aB = document.body.connectionType;
        }
        document.body.removeBehavior(aD);
      }
    } catch (aC) {}
    Q.ct = aB;
  }
  function az() {
    var aD = "1.0";
    try {
      if (String && String.prototype) {
        aD = "1.1";
        if (aD.search) {
          aD = "1.2";
          var aC = new Date(),
            aJ = 0;
          if (aC.getUTCDate) {
            aD = "1.3";
            var aF,
              aB = navigator.appVersion.indexOf("MSIE");
            if (aB > 0) {
              var aK = parseInt((aF = navigator.appVersion.substring(aB + 5)));
              if (aK > 3) {
                aK = parseFloat(aF);
              }
            }
            if (Y() && G() && aK >= 5) {
              aD = "1.4";
            }
            if (aJ.toFixed) {
              aD = "1.5";
              var aI = new Array();
              if (aI.every) {
                aD = "1.6";
                aF = 0;
                var aE = new Object();
                var aH = function (aN) {
                  var aL = 0;
                  try {
                    aL = new Iterator(aN);
                  } catch (aM) {}
                  return aL;
                };
                aF = aH(aE);
                if (aF && aF.next) {
                  aD = "1.7";
                }
                if (aI.reduce) {
                  aD = "1.8";
                }
              }
            }
          }
        }
      }
    } catch (aG) {}
    Q.jv = aD;
  }
  function aa() {
    Q.cs = document.characterSet || document.charset || "-";
  }
  function y() {
    Q.tl = encodeURIComponent(document.title.substring(0, 128));
  }
  function am(aB) {
    return aB.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
  function W(aP, aF) {
    var aO = "wcs_bt";
    var aK = new Date();
    var aW = "";
    var aH = "/";
    var aR = -1;
    var aJ, aC, aS, aX, aL;
    var aG = {};
    if (
      window.location.hostname == "smartstore.naver.com" ||
      window.location.hostname == "m.smartstore.naver.com" ||
      window.location.hostname == "storefarm.naver.com" ||
      window.location.hostname == "m.storefarm.naver.com"
    ) {
      ao(aO, "", aH);
      var aM = window.location.pathname.split("/");
      if (aM.length > 2) {
        aH = "/" + aM[1];
      } else {
        aH = window.location.pathname;
      }
    }
    aJ = m(aO, 1);
    var aT = null;
    for (aT in aJ) {
      if (Object.prototype.hasOwnProperty.call(aJ, aT)) {
        if (aJ[aT].indexOf(":") >= 0) {
          aC = aJ[aT].split("|");
          for (var aV in aC) {
            if (Object.prototype.hasOwnProperty.call(aC, aV)) {
              aS = aC[aV].split(":");
              var aN = 0;
              for (var aD in aS) {
                if (Object.prototype.hasOwnProperty.call(aS, aD)) {
                  if (aN == 0) {
                    aX = aS[aD];
                  } else {
                    if (aN == 1) {
                      aL = aS[aD];
                    }
                  }
                  aN++;
                }
              }
              aG[aX] = aL;
              if (aX == aF && aR < aL) {
                aR = aL;
              }
            }
          }
          if (wcs.bt > aR) {
            aR = wcs.bt;
          }
        } else {
          if (aR < aJ[aT]) {
            aR = aJ[aT];
            wcs.bt = aR;
            aG[aF] = aR;
          }
        }
      }
    }
    aK.setDate(aP.getDate() + 200 * 365);
    aW = aK.toUTCString();
    var aI = [];
    var aE = false;
    for (var aQ in aG) {
      if (aQ == aF) {
        aI.push({ id: aQ, time: parseInt(aP.getTime() / 1000).toString() });
        aE = true;
      } else {
        aI.push({ id: aQ, time: aG[aQ] });
      }
    }
    if (!aE) {
      aI.push({ id: aF, time: parseInt(aP.getTime() / 1000).toString() });
    }
    aI.sort(function (aZ, aY) {
      return aY.time - aZ.time;
    });
    aI = aI.slice(0, 10);
    var aU = [];
    for (aT = 0; aT < aI.length; aT++) {
      var aB = aI[aT];
      aU.push(aB.id + ":" + aB.time);
    }
    ag(aO, aU.join("|"), "", aW, aH);
    return aR;
  }
  function m(aI, aH) {
    var aD = "";
    var aC = [];
    var aK = document.cookie.split(";");
    var aJ = aK.length;
    var aE = false;
    var aF = "";
    var aB;
    for (var aG = 0; aG < aJ; aG++) {
      aF = am(aK[aG]);
      if (aF.indexOf(aI + "=") == 0) {
        aD = aF.substring(aF.indexOf("=") + 1);
        aC.push(aD);
        aE = true;
        if (aH != 1) {
          break;
        }
      }
    }
    if (aE && aH == 1) {
      aB = aC;
    } else {
      if (aE) {
        aB = aD;
      } else {
        aB = false;
      }
    }
    return aB;
  }
  function ag(aF, aE, aB, aC, aD) {
    document.cookie =
      aF +
      "=" +
      aE +
      (!aC ? "" : "; expires=" + aC) +
      "; path=" +
      (!aD ? "/" : aD) +
      (!aB ? "" : "; domain=" + aB);
  }
  function ao(aF, aB, aE) {
    var aD = new Date();
    aD.setDate(aD.getDate() - 1);
    var aC = aD.toUTCString();
    ag(aF, "", aB, aC, aE);
  }
  function c(aC) {
    var aB = null;
    if (localStorage) {
      aB = localStorage.getItem(aC);
      if (aB) {
        return aB;
      }
    }
    return m(aC);
  }
  function v(aG, aF) {
    if (localStorage) {
      localStorage.setItem(aG, aF);
    } else {
      var aE = new Date();
      var aD = new Date();
      aD.setDate(aE.getDate() + 200 * 365);
      var aC = aD.toUTCString();
      var aB = location.hostname.replace("www.", "");
      ag(aG, aF, aB, aC);
    }
  }
  var h;
  if (!h) {
    h = {};
  }
  (function () {
    function aE(aJ) {
      return aJ < 10 ? "0" + aJ : aJ;
    }
    if (typeof Date.prototype.toJSON !== "function") {
      Date.prototype.toJSON = function () {
        var aJ =
          !(typeof this.valueOf == "undefined") && isFinite(this.valueOf())
            ? this.getUTCFullYear() +
              "-" +
              aE(this.getUTCMonth() + 1) +
              "-" +
              aE(this.getUTCDate()) +
              "T" +
              aE(this.getUTCHours()) +
              ":" +
              aE(this.getUTCMinutes()) +
              ":" +
              aE(this.getUTCSeconds()) +
              "Z"
            : null;
        return aJ;
      };
      if (!(typeof this.valueOf == "undefined")) {
        String.prototype.toJSON =
          Number.prototype.toJSON =
          Boolean.prototype.toJSON =
            function () {
              return this.valueOf();
            };
      }
    }
    var aI =
        /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      aH,
      aB,
      aF = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\",
      },
      aD;
    function aC(aJ) {
      aI.lastIndex = 0;
      return aI.test(aJ)
        ? '"' +
            aJ.replace(aI, function (aK) {
              var aL = aF[aK];
              return typeof aL === "string"
                ? aL
                : "\\u" + ("0000" + aK.charCodeAt(0).toString(16)).slice(-4);
            }) +
            '"'
        : '"' + aJ + '"';
    }
    function aG(aQ, aN) {
      var aL,
        aK,
        aR,
        aJ,
        aO = aH,
        aM,
        aP = aN[aQ];
      if (aP && typeof aP === "object" && typeof aP.toJSON === "function") {
        aP = aP.toJSON(aQ);
      }
      if (typeof aD === "function") {
        aP = aD.call(aN, aQ, aP);
      }
      switch (typeof aP) {
        case "string":
          return aC(aP);
        case "number":
          return isFinite(aP) ? String(aP) : "null";
        case "boolean":
        case "null":
          return String(aP);
        case "object":
          if (!aP) {
            return "null";
          }
          aH += aB;
          aM = [];
          if (Object.prototype.toString.apply(aP) === "[object Array]") {
            aJ = aP.length;
            for (aL = 0; aL < aJ; aL += 1) {
              aM[aL] = aG(aL, aP) || "null";
            }
            aR =
              aM.length === 0
                ? "[]"
                : aH
                ? "[\n" + aH + aM.join(",\n" + aH) + "\n" + aO + "]"
                : "[" + aM.join(",") + "]";
            aH = aO;
            return aR;
          }
          if (aD && typeof aD === "object") {
            aJ = aD.length;
            for (aL = 0; aL < aJ; aL += 1) {
              if (typeof aD[aL] === "string") {
                aK = aD[aL];
                aR = aG(aK, aP);
                if (aR) {
                  aM.push(aC(aK) + (aH ? ": " : ":") + aR);
                }
              }
            }
          } else {
            for (aK in aP) {
              if (Object.prototype.hasOwnProperty.call(aP, aK)) {
                aR = aG(aK, aP);
                if (aR) {
                  aM.push(aC(aK) + (aH ? ": " : ":") + aR);
                }
              }
            }
          }
          aR =
            aM.length === 0
              ? "{}"
              : aH
              ? "{\n" + aH + aM.join(",\n" + aH) + "\n" + aO + "}"
              : "{" + aM.join(",") + "}";
          aH = aO;
          return aR;
      }
    }
    if (typeof h.stringify !== "function") {
      h.stringify = function (aM, aK, aL) {
        var aJ;
        aH = "";
        aB = "";
        if (typeof aL === "number") {
          for (aJ = 0; aJ < aL; aJ += 1) {
            aB += " ";
          }
        } else {
          if (typeof aL === "string") {
            aB = aL;
          }
        }
        aD = aK;
        if (
          aK &&
          typeof aK !== "function" &&
          (typeof aK !== "object" || typeof aK.length !== "number")
        ) {
          throw new Error("JSON.stringify");
        }
        return aG("", { "": aM });
      };
    }
  })();
  var ap = {
    _keyStr:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (aD) {
      var aB = "";
      var aK, aI, aG, aJ, aH, aF, aE;
      var aC = 0;
      aD = ap._utf8_encode(aD);
      while (aC < aD.length) {
        aK = aD.charCodeAt(aC++);
        aI = aD.charCodeAt(aC++);
        aG = aD.charCodeAt(aC++);
        aJ = aK >> 2;
        aH = ((aK & 3) << 4) | (aI >> 4);
        aF = ((aI & 15) << 2) | (aG >> 6);
        aE = aG & 63;
        if (isNaN(aI)) {
          aF = aE = 64;
        } else {
          if (isNaN(aG)) {
            aE = 64;
          }
        }
        aB =
          aB +
          this._keyStr.charAt(aJ) +
          this._keyStr.charAt(aH) +
          this._keyStr.charAt(aF) +
          this._keyStr.charAt(aE);
      }
      return aB;
    },
    decode: function (aD) {
      var aB = "";
      var aK, aI, aG;
      var aJ, aH, aF, aE;
      var aC = 0;
      aD = aD.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (aC < aD.length) {
        aJ = this._keyStr.indexOf(aD.charAt(aC++));
        aH = this._keyStr.indexOf(aD.charAt(aC++));
        aF = this._keyStr.indexOf(aD.charAt(aC++));
        aE = this._keyStr.indexOf(aD.charAt(aC++));
        aK = (aJ << 2) | (aH >> 4);
        aI = ((aH & 15) << 4) | (aF >> 2);
        aG = ((aF & 3) << 6) | aE;
        aB = aB + String.fromCharCode(aK);
        if (aF != 64) {
          aB = aB + String.fromCharCode(aI);
        }
        if (aE != 64) {
          aB = aB + String.fromCharCode(aG);
        }
      }
      aB = ap._utf8_decode(aB);
      return aB;
    },
    _utf8_encode: function (aC) {
      aC = aC.replace(/\r\n/g, "\n");
      var aB = "";
      for (var aE = 0; aE < aC.length; aE++) {
        var aD = aC.charCodeAt(aE);
        if (aD < 128) {
          aB += String.fromCharCode(aD);
        } else {
          if (aD > 127 && aD < 2048) {
            aB += String.fromCharCode((aD >> 6) | 192);
            aB += String.fromCharCode((aD & 63) | 128);
          } else {
            aB += String.fromCharCode((aD >> 12) | 224);
            aB += String.fromCharCode(((aD >> 6) & 63) | 128);
            aB += String.fromCharCode((aD & 63) | 128);
          }
        }
      }
      return aB;
    },
    _utf8_decode: function (aB) {
      var aD = "";
      var aF = 0;
      var aG = 0,
        aE = 0,
        aC = 0;
      while (aF < aB.length) {
        aG = aB.charCodeAt(aF);
        if (aG < 128) {
          aD += String.fromCharCode(aG);
          aF++;
        } else {
          if (aG > 191 && aG < 224) {
            aE = aB.charCodeAt(aF + 1);
            aD += String.fromCharCode(((aG & 31) << 6) | (aE & 63));
            aF += 2;
          } else {
            aE = aB.charCodeAt(aF + 1);
            aC = aB.charCodeAt(aF + 2);
            aD += String.fromCharCode(
              ((aG & 15) << 12) | ((aE & 63) << 6) | (aC & 63)
            );
            aF += 3;
          }
        }
      }
      return aD;
    },
  };
  var L = "undefined" != typeof exports ? exports : {};
  !(function (aO) {
    var aB = [
        1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993,
        -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987,
        1925078388, -2132889090, -1680079193, -1046744716, -459576895,
        -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692,
        1996064986, -1740746414, -1473132947, -1341970488, -1084653625,
        -958395405, -710438585, 113926993, 338241895, 666307205, 773529912,
        1294757372, 1396182291, 1695183700, 1986661051, -2117940946,
        -1838011259, -1564481375, -1474664885, -1035236496, -949202525,
        -778901479, -694614492, -200395387, 275423344, 430227734, 506948616,
        659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
        1955562222, 2024104815, -2067236844, -1933114872, -1866530822,
        -1538233109, -1090935817, -965641998,
      ],
      aE = { sha256: 1 };
    aO.createHash = function (aQ) {
      if (aQ && !aE[aQ] && !aE[aQ.toLowerCase()]) {
        throw new Error("Digest method not supported");
      }
      return new aD();
    };
    var aD = (function () {
      function aQ() {
        (this.A = 1779033703),
          (this.B = -1150833019),
          (this.C = 1013904242),
          (this.D = -1521486534),
          (this.E = 1359893119),
          (this.F = -1694144372),
          (this.G = 528734635),
          (this.H = 1541459225),
          (this.t = 0),
          (this.i = 0),
          (!aP || aH >= 8000) && ((aP = new ArrayBuffer(8000)), (aH = 0)),
          (this.h = new Uint8Array(aP, aH, 80)),
          (this.o = new Int32Array(aP, aH, 20)),
          (aH += 80);
      }
      return (
        (aQ.prototype.update = function (aS) {
          if ("string" == typeof aS) {
            return this.u(aS);
          }
          if (null == aS) {
            throw new TypeError("Invalid type: " + typeof aS);
          }
          var aV = aS.byteOffset,
            aR = aS.byteLength,
            aX = (aR / 64) | 0,
            aU = 0;
          if (aX && !(3 & aV) && !(this.t % 64)) {
            for (var aT = new Int32Array(aS.buffer, aV, 16 * aX); aX--; ) {
              this.v(aT, aU >> 2), (aU += 64);
            }
            this.t += aU;
          }
          if (1 !== aS.BYTES_PER_ELEMENT && aS.buffer) {
            var aW = new Uint8Array(aS.buffer, aV + aU, aR - aU);
            return this.p(aW);
          }
          return aU === aR ? this : this.p(aS, aU);
        }),
        (aQ.prototype.p = function (aS, aV) {
          var aR = this.h,
            aX = this.o,
            aU = aS.length;
          for (aV |= 0; aV < aU; ) {
            for (var aT = this.t % 64, aW = aT; aV < aU && aW < 64; ) {
              aR[aW++] = aS[aV++];
            }
            aW >= 64 && this.v(aX), (this.t += aW - aT);
          }
          return this;
        }),
        (aQ.prototype.u = function (aY) {
          for (
            var aR = this.h, aU = this.o, aT = aY.length, aZ = this.i, aV = 0;
            aV < aT;

          ) {
            for (var aX = this.t % 64, aW = aX; aV < aT && aW < 64; ) {
              var aS = 0 | aY.charCodeAt(aV++);
              aS < 128
                ? (aR[aW++] = aS)
                : aS < 2048
                ? ((aR[aW++] = 192 | (aS >>> 6)), (aR[aW++] = 128 | (63 & aS)))
                : aS < 55296 || aS > 57343
                ? ((aR[aW++] = 224 | (aS >>> 12)),
                  (aR[aW++] = 128 | ((aS >>> 6) & 63)),
                  (aR[aW++] = 128 | (63 & aS)))
                : aZ
                ? ((aS = ((1023 & aZ) << 10) + (1023 & aS) + 65536),
                  (aR[aW++] = 240 | (aS >>> 18)),
                  (aR[aW++] = 128 | ((aS >>> 12) & 63)),
                  (aR[aW++] = 128 | ((aS >>> 6) & 63)),
                  (aR[aW++] = 128 | (63 & aS)),
                  (aZ = 0))
                : (aZ = aS);
            }
            aW >= 64 && (this.v(aU), (aU[0] = aU[16])), (this.t += aW - aX);
          }
          return (this.i = aZ), this;
        }),
        (aQ.prototype.v = function (a3, aW) {
          var aT = this,
            a4 = aT.A,
            aZ = aT.B,
            aY = aT.C,
            aS = aT.D,
            aR = aT.E,
            a0 = aT.F,
            a2 = aT.G,
            aV = aT.H,
            aU = 0;
          for (aW |= 0; aU < 16; ) {
            aF[aU++] = aC(a3[aW++]);
          }
          for (aU = 16; aU < 64; aU++) {
            aF[aU] =
              (aJ(aF[aU - 2]) + aF[aU - 7] + aL(aF[aU - 15]) + aF[aU - 16]) | 0;
          }
          for (aU = 0; aU < 64; aU++) {
            var a1 = (aV + aM(aR) + aN(aR, a0, a2) + aB[aU] + aF[aU]) | 0,
              aX = (aI(a4) + aK(a4, aZ, aY)) | 0;
            (aV = a2),
              (a2 = a0),
              (a0 = aR),
              (aR = (aS + a1) | 0),
              (aS = aY),
              (aY = aZ),
              (aZ = a4),
              (a4 = (a1 + aX) | 0);
          }
          (this.A = (a4 + this.A) | 0),
            (this.B = (aZ + this.B) | 0),
            (this.C = (aY + this.C) | 0),
            (this.D = (aS + this.D) | 0),
            (this.E = (aR + this.E) | 0),
            (this.F = (a0 + this.F) | 0),
            (this.G = (a2 + this.G) | 0),
            (this.H = (aV + this.H) | 0);
        }),
        (aQ.prototype.digest = function (aS) {
          var aV = this.h,
            aR = this.o,
            aX = this.t % 64 | 0;
          for (aV[aX++] = 128; 3 & aX; ) {
            aV[aX++] = 0;
          }
          if ((aX >>= 2) > 14) {
            for (; aX < 16; ) {
              aR[aX++] = 0;
            }
            (aX = 0), this.v(aR);
          }
          for (; aX < 16; ) {
            aR[aX++] = 0;
          }
          var aU = 8 * this.t,
            aT = (4294967295 & aU) >>> 0,
            aW = (aU - aT) / 4294967296;
          return (
            aW && (aR[14] = aC(aW)),
            aT && (aR[15] = aC(aT)),
            this.v(aR),
            "hex" === aS ? this.I() : this.U()
          );
        }),
        (aQ.prototype.I = function () {
          var aY = this,
            aR = aY.A,
            aU = aY.B,
            aT = aY.C,
            aZ = aY.D,
            aV = aY.E,
            aW = aY.F,
            aS = aY.G,
            aX = aY.H;
          return (
            aG(aR) +
            aG(aU) +
            aG(aT) +
            aG(aZ) +
            aG(aV) +
            aG(aW) +
            aG(aS) +
            aG(aX)
          );
        }),
        (aQ.prototype.U = function () {
          var a0 = this,
            aR = a0.A,
            aT = a0.B,
            aS = a0.C,
            a1 = a0.D,
            aU = a0.E,
            aW = a0.F,
            aV = a0.G,
            aZ = a0.H,
            aY = a0.h,
            aX = a0.o;
          return (
            (aX[0] = aC(aR)),
            (aX[1] = aC(aT)),
            (aX[2] = aC(aS)),
            (aX[3] = aC(a1)),
            (aX[4] = aC(aU)),
            (aX[5] = aC(aW)),
            (aX[6] = aC(aV)),
            (aX[7] = aC(aZ)),
            aY.slice(0, 32)
          );
        }),
        aQ
      );
    })();
    aO.Hash = aD;
    var aP,
      aF = new Int32Array(64),
      aH = 0,
      aG = function (aQ) {
        return (aQ + 4294967296).toString(16).substr(-8);
      },
      aC =
        254 === new Uint8Array(new Uint16Array([65279]).buffer)[0]
          ? function (aQ) {
              return aQ;
            }
          : function (aQ) {
              return (
                ((aQ << 24) & 4278190080) |
                ((aQ << 8) & 16711680) |
                ((aQ >> 8) & 65280) |
                ((aQ >> 24) & 255)
              );
            },
      aN = function (aR, aS, aQ) {
        return aQ ^ (aR & (aS ^ aQ));
      },
      aK = function (aR, aS, aQ) {
        return (aR & aS) | (aQ & (aR | aS));
      },
      aI = function (aQ) {
        return (
          ((aQ >>> 2) | (aQ << 30)) ^
          ((aQ >>> 13) | (aQ << 19)) ^
          ((aQ >>> 22) | (aQ << 10))
        );
      },
      aM = function (aQ) {
        return (
          ((aQ >>> 6) | (aQ << 26)) ^
          ((aQ >>> 11) | (aQ << 21)) ^
          ((aQ >>> 25) | (aQ << 7))
        );
      },
      aL = function (aQ) {
        return (
          ((aQ >>> 7) | (aQ << 25)) ^ ((aQ >>> 18) | (aQ << 14)) ^ (aQ >>> 3)
        );
      },
      aJ = function (aQ) {
        return (
          ((aQ >>> 17) | (aQ << 15)) ^ ((aQ >>> 19) | (aQ << 13)) ^ (aQ >>> 10)
        );
      };
  })(L);
  function an(aB) {
    return L.createHash().update(aB).digest("hex");
  }
  function q(aB) {
    var aC = new Image(1, 1);
    aC.src = aB;
    aC.onload = function () {
      aC.onload = null;
      return;
    };
    aC.onerror = function () {
      aC.onerror = null;
      return;
    };
    return true;
  }
  function I(aB) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      I = function (aC) {
        return typeof aC;
      };
    } else {
      I = function (aC) {
        return aC &&
          typeof Symbol === "function" &&
          aC.constructor === Symbol &&
          aC !== Symbol.prototype
          ? "symbol"
          : typeof aC;
      };
    }
    return I(aB);
  }
  var at = function at(aB) {
    return typeof aB === "string";
  };
  var D = function D(aB) {
    return aB instanceof Blob;
  };
  var n = document.createElement("div");
  n.innerHTML = "<!--[if lt IE 10]><i></i><![endif]-->";
  var x = n.getElementsByTagName("i").length === 1;
  if (!x) {
    X.call(
      (typeof window === "undefined" ? "undefined" : I(window)) === "object"
        ? window
        : undefined || {}
    );
  }
  function X() {
    if (ab.call(this)) {
      return;
    }
    if (!("navigator" in this)) {
      this.navigator = {};
    }
    this.navigator.sendBeacon = ai.bind(this);
  }
  function ai(aC, aF) {
    var aE = this.event && this.event.type;
    var aD = aE === "unload" || aE === "beforeunload";
    var aG =
      "XMLHttpRequest" in this
        ? new XMLHttpRequest()
        : new ActiveXObject("Microsoft.XMLHTTP");
    aG.open("POST", aC, !aD);
    aG.withCredentials = true;
    aG.setRequestHeader("Accept", "*/*");
    if (at(aF)) {
      aG.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      aG.responseType = "text/plain";
    } else {
      if (D(aF) && aF.type) {
        aG.setRequestHeader("Content-Type", aF.type);
      }
    }
    try {
      aG.send(aF);
    } catch (aB) {
      return false;
    }
    return true;
  }
  function ab() {
    return "navigator" in this && "sendBeacon" in this.navigator;
  }
  function d(aF) {
    var aD = new Date();
    var aE = {};
    aE.wa = wcs_add.wa || "unknown";
    aE.u = window.location.href;
    aE.e = document.referrer || "";
    if (ay < 1) {
      ax();
    }
    ay++;
    aE.bt = W(aD, aE.wa);
    for (index in aF) {
      var aC = typeof index;
      var aB = typeof aF[index];
      if (aC === "string" && index.length >= 3 && aB !== "function") {
        if (aB === "string") {
          aE[index] = aF[index];
        } else {
          if (aB == "object") {
            aE[index] = h.stringify(aF[index]);
          }
        }
      }
    }
    for (index in Q) {
      if (typeof Q[index] !== "function") {
        aE[index] = Q[index];
      }
    }
    if (wcs.ref) {
      aE.ur = wcs.ref;
    }
    aE.vs = r;
    aE.nt = aD.getTime();
    return aE;
  }
  function l(aC, aD) {
    if (
      aC == "" ||
      aD == "" ||
      typeof aC == "undefined" ||
      typeof aD == "undefined"
    ) {
      return null;
    }
    var aB = {};
    aB.wa = wcs_add.wa || "unknown";
    aB.u = window.location.href;
    aB.t = "event";
    aB.e_cat = aC;
    aB.e_act = aD;
    aB.nt = new Date().getTime();
    aB.vs = r;
    return aB;
  }
  function z(aB) {
    var aC = "https://" + wcs_SerName + "/b";
    if (typeof wcs.fwb != "undefined") {
      aB.fwb = wcs.fwb;
    }
    if (typeof wcs_add.cnv2 != "undefined" && typeof aB.cnv != "undefined") {
      aB.cnv2 = wcs_add.cnv2;
      aB.t = "conv";
      delete wcs_add.cnv2;
    }
    wcs.getNAC();
    if (typeof wcs.ui != "undefined") {
      aB.ui = h.stringify(wcs.ui);
    }
    j();
    if (typeof wcs.ext != "undefined") {
      aB.ext = h.stringify(wcs.ext);
    }
    return navigator.sendBeacon(aC, h.stringify(aB));
  }
  function K(aH, aG) {
    var aC = new Date();
    var aB = [];
    var aF;
    var aI = "unknown";
    aB.push("https://" + aG + "/m?");
    aB.push(
      "u=" +
        encodeURIComponent(window.location.href) +
        "&e=" +
        (document.referrer ? encodeURIComponent(document.referrer) : "")
    );
    for (aF in wcs_add) {
      if (typeof wcs_add[aF] != "function" && (aF == "i" || aF == "wa")) {
        aB.push("&" + aF + "=" + encodeURIComponent(wcs_add[aF]));
        if (aF == "wa") {
          aI = wcs_add[aF];
        }
      }
    }
    if (ay < 1) {
      ax();
    }
    w = W(aC, aI);
    aB.push("&bt=" + w);
    for (aF in aH) {
      var aE = typeof aF;
      var aD = typeof aH[aF];
      if (
        (aE == "string" && aF.length >= 3 && aD != "function") ||
        aF == "qy"
      ) {
        if (aD == "string") {
          aB.push("&" + aF + "=" + encodeURIComponent(aH[aF]));
        } else {
          if (aD == "object") {
            aB.push("&" + aF + "=" + encodeURIComponent(h.stringify(aH[aF])));
          }
        }
      }
    }
    for (aF in Q) {
      if (typeof Q[aF] != "function") {
        aB.push("&" + aF + "=" + encodeURIComponent(Q[aF]));
      }
    }
    if (wcs.ref != "") {
      aB.push("&ur=" + encodeURIComponent(wcs.ref));
    }
    if (typeof wcs.fwb != "undefined") {
      aB.push("&fwb=" + encodeURIComponent(wcs.fwb));
    }
    if (typeof wcs_add.cnv2 != "undefined" && typeof aH.cnv != "undefined") {
      aB.push("&t=conv&cnv2=" + encodeURIComponent(wcs_add.cnv2));
      delete wcs_add.cnv2;
    }
    wcs.getNAC();
    if (typeof wcs.ui != "undefined") {
      aB.push("&ui=" + encodeURIComponent(h.stringify(wcs.ui)));
    }
    j();
    if (typeof wcs.ext != "undefined") {
      aB.push("&lab=" + encodeURIComponent(h.stringify(wcs.ext)));
    }
    aB.push("&vs=" + r + "&nt=" + aC.getTime());
    ay++;
    return aB.join("");
  }
  wcs.pageview = function (aB) {
    if (wcs.transport === "beacon" && navigator.sendBeacon) {
      return z(d(aB));
    } else {
      return wcs.pageviewOld(aB);
    }
  };
  wcs.event = function (aB, aC) {
    if (wcs.transport === "beacon" && navigator.sendBeacon) {
      var aD = l(aB, aC);
      if (aD) {
        return z(aD);
      } else {
        return;
      }
    } else {
      return wcs.eventOld(aB, aC);
    }
  };
  wcs.pageviewOld = function (aC) {
    var aB = K(aC, wcs_SerName);
    aB += "&EOU";
    q(aB);
  };
  wcs.eventOld = function (aB, aD) {
    var aE = [];
    var aC;
    if (
      aB == "" ||
      aD == "" ||
      typeof aB == "undefined" ||
      typeof aD == "undefined"
    ) {
      return;
    }
    aE.push("https://" + wcs_SerName + "/m?");
    aE.push("u=" + encodeURIComponent(window.location.href));
    aE.push("&t=event");
    for (aC in wcs_add) {
      if (typeof wcs_add[aC] != "function" && (aC == "i" || aC == "wa")) {
        aE.push("&" + aC + "=" + encodeURIComponent(wcs_add[aC]));
      }
    }
    if (typeof wcs.fwb != "undefined") {
      aE.push("&fwb=" + encodeURIComponent(wcs.fwb));
    }
    aE.push("&e_cat=" + encodeURIComponent(aB));
    aE.push("&e_act=" + encodeURIComponent(aD));
    aE.push("&vs=" + r + "&nt=" + new Date().getTime());
    q(aE.join(""));
    return true;
  };
  wcs.getNAC = function () {
    var aB = null;
    if (
      typeof window.namSynchronizer !== "undefined" &&
      typeof window.namSynchronizer.getNac == "function"
    ) {
      aB = window.namSynchronizer.getNac();
    }
    if (aB == null) {
      aB = c(F);
    }
    if (aB !== null && aB !== false) {
      if (wcs.ui == undefined || wcs.ui == null) {
        wcs.ui = {};
      }
      wcs.ui.nac = aB;
    }
  };
  wcs.setNAC = function () {
    v(F, window.namSynchronizer.getNac());
  };
  function ad(aC, aB) {
    if (typeof aC == "object" && (aB == undefined || aB == null)) {
      wcs.ui = {};
      for (index in aC) {
        wcs.ui[index] = an(aC[index]);
      }
    } else {
      if (wcs.ui == undefined || wcs.ui == null) {
        wcs.ui = {};
      }
      wcs.ui[aC] = an(aB);
    }
  }
  function a() {
    if (
      window.location.search.length <= 0 ||
      window.location.search.split("?").length < 2
    ) {
      return false;
    }
    var aC = window.location.search.split("?")[1].split("&");
    var aE = aC.length;
    var aB;
    for (var aD = 0; aD < aE; aD++) {
      aB = aC[aD].split("=");
      if (aB[0] == "NaPm" && am(aB[1]) != "") {
        return aB[1];
      }
    }
    return false;
  }
  function R(aB) {
    var aD = "/";
    var aC = aB.indexOf("/");
    if (aC > 0) {
      aD = aB.substring(aC);
      aB = aB.substring(0, aC);
      return [aB, aD];
    }
    return false;
  }
  function ae(aI, aK, aH, aJ) {
    var aE = [
      "ci=" + aK,
      "t=" + Math.round(aH.getTime() / 1000),
      "u=" + encodeURIComponent(window.location.href),
    ];
    if (document.referrer) {
      aE.push("r=" + encodeURIComponent(document.referrer));
    }
    var aF = ap.encode(aE.join("|"));
    var aB = new Date();
    aB.setDate(aH.getDate() + 20);
    var aC = aB.toUTCString();
    ag(aj, aF, aI, aC, aJ);
    ag(af, "1", aI, 0, aJ);
    aB.setDate(aH.getDate() + 30);
    var aD = aB.toUTCString();
    var aG = (m(p) || "").split("~");
    aG[0] = aK;
    ag(p, aG.join("~"), aI, aD, aJ);
  }
  function aq(aH, aJ, aG, aI) {
    var aD = [
      "ci=" + aJ,
      "t=" + Math.round(aG.getTime() / 1000),
      "u=" + encodeURIComponent(window.location.href),
    ];
    if (document.referrer) {
      aD.push("r=" + encodeURIComponent(document.referrer));
    }
    var aE = ap.encode(aD.join("|"));
    var aB = new Date();
    aB.setDate(aG.getDate() + 30);
    var aC = aB.toUTCString();
    ag(s, aE, aH, aC, aI);
    var aF = (m(p) || "").split("~");
    aF[1] = aJ;
    ag(p, aF.join("~"), aH, aC, aI);
  }
  function e(aC) {
    if (!aC) {
      wcs.norefresh++;
      return false;
    }
    if (wcs.norefresh > 0) {
      return false;
    }
    aC = ap.decode(aC);
    var aF = aC.split("|");
    var aE = aF.length;
    var aG;
    var aB = 0;
    for (var aD = 0; aD < aE; aD++) {
      aG = aF[aD].split("=");
      if (aG[0] == "u") {
        if (decodeURIComponent(aG[1]) == window.location.href) {
          aB++;
        }
      } else {
        if (aG[0] == "r") {
          if (decodeURIComponent(aG[1]) == document.referrer) {
            aB++;
          }
        }
      }
    }
    if (aB == 2) {
      return true;
    }
    wcs.norefresh++;
    return false;
  }
  function V(aB) {
    var aE = new Date();
    var aH = "/";
    if (!aB) {
      aB = "";
    } else {
      var aG = R(aB);
      if (aG != false) {
        aB = aG[0];
        aH = aG[1];
      }
      if (window.location.hostname.indexOf(aB) < 0) {
        aB = "";
      }
    }
    if (
      window.location.search.length <= 0 ||
      window.location.search.split("?").length < 2
    ) {
      return false;
    }
    var aD = a();
    var aF;
    if (aD) {
      aF = A(aD);
      if (aF && aF.ci && aF.tr) {
        var aC = {
          atf: true,
          brnd: true,
          brzl: true,
          brzl_myc: true,
          brzl_myr: true,
          brzl_myz: true,
          brzlb: true,
          brzp: true,
          brzp_myc: true,
          brzp_myr: true,
          brzp_myz: true,
          brzpb: true,
          cd: true,
          news: true,
          pla: true,
          pla_myc: true,
          pla_myr: true,
          pla_myz: true,
          plab: true,
          plab_myc: true,
          plab_myr: true,
          plab_myz: true,
          plabc: true,
          plabc_myc: true,
          plabc_myr: true,
          plabc_myz: true,
          plac: true,
          plac_myc: true,
          plac_myr: true,
          plac_myz: true,
          plap: true,
          plap_myc: true,
          plap_myr: true,
          plap_myz: true,
          pwrcnt: true,
          pwrcnt_myc: true,
          pwrcnt_myr: true,
          pwrcnt_myz: true,
          sa: true,
          sa2: true,
          sa2_myc: true,
          sa2_myr: true,
          sa2_myz: true,
        };
        if (aC[aF.tr]) {
          ae(aB, aF.ci, aE, aH);
        }
        if (aF.tr === "gfa") {
          aq(aB, aF.ci, aE, aH);
        }
      }
    }
  }
  function i(aP, aE) {
    var aQ = new Date();
    var aR = [];
    var aI = m(aj);
    if (aI == false) {
      aI = "";
    }
    var aB = m(ah);
    if (e(aB)) {
      return "";
    }
    var aG = "0";
    if (m(af) == "1") {
      aG = "1";
    }
    var aC = ap.decode(aI).split("|");
    var aS = aC.length;
    var aV;
    var aT = "";
    var aH = "";
    for (var aM = 0; aM < aS; aM++) {
      aV = aC[aM].split("=");
      if (aV[0] == "ci") {
        aR.push("ci=" + aV[1]);
      } else {
        if (aV[0] == "t") {
          aR.push("t=" + aV[1]);
          var aU = parseInt(aV[1]);
          var aF = Math.round(aQ.getTime() / 1000);
          var aJ = aF - aU;
          if (aJ < 60 * 30 && aG == "1") {
            aH = "D";
          } else {
            if (aJ < 60 * 60 * 24 * 15) {
              aH = "I";
            }
          }
          if (aJ < 60 * 60 * 24 * 7) {
            aH += "C";
          }
          aR.push("isDirect=" + aH);
        } else {
          if (aV[0] == "u") {
            aR.push("u=" + aV[1]);
          } else {
            if (aV[0] == "r") {
              aR.push("r=" + aV[1]);
            }
          }
        }
      }
    }
    aR.push("cnvType=" + aP);
    aR.push("cnvValue=" + aE);
    aT = aR.join("|");
    ag(
      ah,
      ap.encode(
        "u=" +
          encodeURIComponent(window.location.href) +
          "|r=" +
          encodeURIComponent(document.referrer)
      ),
      "",
      0
    );
    var aD = m(s);
    if (aD == false) {
      aD = "";
    }
    var aK = [];
    var aO = ap.decode(aD).split("|");
    var aN;
    for (var aL = 0; aL < aO.length; aL++) {
      aN = aO[aL].split("=");
      if (aN[0] == "ci") {
        aK.push("ci=" + aN[1]);
      } else {
        if (aN[0] == "t") {
          aK.push("t=" + aN[1]);
        } else {
          if (aN[0] == "u") {
            aK.push("u=" + aN[1]);
          } else {
            if (aV[0] == "r") {
              aK.push("r=" + aN[1]);
            }
          }
        }
      }
    }
    aK.push("cnvType=" + aP);
    aK.push("cnvValue=" + aE);
    wcs_add.cnv2 = aK.join("|");
    return aT;
  }
  wcs.mileageWhitelist = [];
  function B() {
    var aC = window.location.search
      ? window.location.search.split("?")[1].split("&")
      : "";
    var aE = aC.length;
    var aB;
    var aF = "Ncisy";
    for (var aD = 0; aD < aE; aD++) {
      aB = aC[aD].split("=");
      if (aB[0] == aF) {
        return aB[1];
      }
    }
    return false;
  }
  function av() {
    var aB = document.referrer ? document.referrer : wcs.ref;
    if (aB.indexOf("naver.com") > 0) {
      return true;
    }
    return false;
  }
  function C(aB) {
    var aE = document.referrer ? document.referrer : wcs.ref;
    if (!aE) {
      return true;
    }
    var aD;
    if (aB == "m") {
      aD = wcs.mileageWhitelist;
    } else {
      if (aB == "c") {
        aD = wcs.checkoutWhitelist;
      }
    }
    var aF = aD.length;
    aD[aF] = "naver.com";
    aD[aF + 1] = window.location.hostname;
    for (var aC = 0; aC < aF + 2; aC++) {
      if (aE.indexOf(aD[aC]) >= 0) {
        return true;
      }
    }
    return false;
  }
  function aw(aB, aC, aE) {
    var aD;
    aD = parseInt(aC, aE);
    if (aE == 36) {
      aD = aD / 1000;
    }
    if (Math.round(aB.getTime() / 1000) > aD) {
      return true;
    }
    return false;
  }
  function b() {
    var aB = m(P);
    return aB;
  }
  function ar(aB, aD, aE) {
    var aF = ap.encode(aD);
    var aC = 0;
    ag(P, aF, aB, aC, aE);
  }
  function E(aC, aI) {
    var aB, aF, aH, aG, aE;
    if (!aC) {
      for (aE = 0; aE < window.location.hostname.length; aE++) {
        if (
          (window.location.hostname.charCodeAt(aE) > 12592 &&
            window.location.hostname.charCodeAt(aE) < 12687) ||
          (window.location.hostname.charCodeAt(aE) >= 44032 &&
            window.location.hostname.charCodeAt(aE) <= 55203)
        ) {
          ao(P, "", aI);
          return true;
        }
      }
      aC = window.location.hostname.toLowerCase();
    }
    aB = aC.split(".");
    aF = aB.length;
    for (aE = 0; aE < aF - 1; aE++) {
      aH = "";
      aG = [];
      for (var aD = aE; aD < aF; aD++) {
        aG.push(aB[aD]);
      }
      aH = aG.join(".");
      ao(P, aH, aI);
    }
    return true;
  }
  function N(aB) {
    return decodeURIComponent(aB.replace(/\+/g, " "));
  }
  function A(aG) {
    var aB, aF, aC;
    var aE = {};
    aG = N(aG);
    if (aG.length > 0) {
      aB = aG.split("|");
      aF = aB.length;
      for (var aD = 0; aD < aF; aD++) {
        aC = aB[aD].split("=");
        aE[aC[0]] = aC[1];
      }
    }
    return aE;
  }
  function M(aB) {
    if (aB !== undefined && aB !== "") {
      return true;
    } else {
      return false;
    }
  }
  function f(aL) {
    var aH = new Date();
    var aE = B();
    var aI = a();
    var aC, aG, aD, aF;
    var aB = "",
      aM = "",
      aK = 0;
    var aN = "/";
    if (!aL) {
      aL = "";
    } else {
      var aJ = R(aL);
      if (aJ != false) {
        aL = aJ[0];
        aN = aJ[1];
      }
      if (window.location.hostname.indexOf(aL) < 0) {
        aL = "";
      }
    }
    if ((aI || aE) && av()) {
      if (aI) {
        aG = A(aI);
        if (aG.et) {
          aB = aG.et;
          aK = 36;
        }
        aF = encodeURIComponent(
          "tr=" +
            aG.tr +
            "|et=" +
            aG.et +
            "|ba=" +
            aG.ba +
            "|aa=" +
            aG.aa +
            "|ci=" +
            aG.ci +
            "|ct=" +
            aG.ct +
            "|hk=" +
            aG.hk
        );
      } else {
        if (aE) {
          aC = A(aE);
          if (aC.e) {
            aB = aC.e;
            aK = 10;
          }
        }
      }
      if (aB) {
        if (!aw(aH, aB, aK)) {
          if (aI) {
            if (
              typeof aG != "undefined" &&
              M(aG.tr) &&
              M(aG.et) &&
              M(aG.ba) &&
              M(aG.aa) &&
              M(aG.ci) &&
              M(aG.ct) &&
              M(aG.hk)
            ) {
              ar(aL, aF, aN);
            }
          } else {
            if (aE) {
              ar(aL, aE, aN);
            }
          }
        } else {
          E(aL, aN);
        }
      }
    } else {
      aM = b();
      if (aM) {
        aM = ap.decode(aM);
        if (C("m")) {
          aD = A(aM);
          if (aD.v && aD.e) {
            aB = aD.e;
            aK = 10;
          } else {
            if (aD.et) {
              aB = aD.et;
              aK = 36;
            }
          }
          if (aw(aH, aB, aK)) {
            E(aL, aN);
          }
        } else {
          E(aL, aN);
        }
      }
    }
  }
  wcs.isCPA = false;
  wcs.CPAOrder = function () {
    return true;
  };
  wcs.checkoutWhitelist = [];
  function au(aB, aE, aD) {
    var aC = 0;
    ag(S, aE, aB, aC, aD);
  }
  function U() {
    var aB = m(S);
    return aB;
  }
  function O(aB, aC) {
    ao(S, aB, aC);
  }
  function H(aB) {
    var aG = "";
    var aF = "/";
    if (!aB) {
      aB = "";
    } else {
      var aE = R(aB);
      if (aE != false) {
        aB = aE[0];
        aF = aE[1];
      }
      if (window.location.hostname.indexOf(aB) < 0) {
        aB = "";
      }
    }
    var aC = a();
    var aD = {};
    if (aC) {
      aD = A(aC);
      aG = encodeURIComponent(
        "ct=" +
          aD.ct +
          "|ci=" +
          aD.ci +
          "|tr=" +
          aD.tr +
          "|hk=" +
          aD.hk +
          "|trx=" +
          aD.trx
      );
      au(aB, aG, aF);
    } else {
      aG = U();
      if (aG && !C("c")) {
        O(aB, aF);
      }
    }
  }
  wcs.inflow = function (aB) {
    V(aB);
    f(aB);
    H(aB);
  };
  wcs.cnv = i;
  wcs.userInfo = ad;
  wcs.getBaseAccumRate = function () {
    var aC = b();
    var aB = {};
    if (aC) {
      aC = ap.decode(aC);
      aB = A(aC);
      if (aB.ba) {
        return aB.ba;
      }
    }
    return 0;
  };
  wcs.getAddAccumRate = function () {
    var aC = b();
    var aB = {};
    if (aC) {
      aC = ap.decode(aC);
      aB = A(aC);
      if (aB.aa) {
        return aB.aa;
      }
    }
    return 0;
  };
  wcs.getMileageInfo = function () {
    var aB = b();
    if (aB) {
      aB = ap.decode(aB);
      return aB;
    }
    return false;
  };
  wcs.getClickTime = function () {
    var aB = U();
    if (aB) {
      var aC = A(aB);
      if (aC.ct) {
        return aC.ct;
      }
    }
    return false;
  };
  wcs.getClickID = function () {
    var aB = U();
    if (aB) {
      var aC = A(aB);
      if (aC.ci) {
        return aC.ci;
      }
    }
    return false;
  };
  wcs.getInflowRoute = function () {
    var aB = U();
    if (aB) {
      var aC = A(aB);
      if (aC.tr) {
        return aC.tr;
      }
    }
    return false;
  };
  wcs.setReferer = function (aB) {
    wcs.ref = aB;
  };
  wcs.trans = function (aL) {
    var aD = {};
    if (
      typeof aL.type !== "string" ||
      (typeof aL.value !== "undefined" &&
        aL.value !== null &&
        !(typeof aL.value == "string" || typeof aL.value == "number")) ||
      (typeof aL.id !== "undefined" &&
        typeof aL.id !== "string" &&
        aL.id !== null)
    ) {
      throw new Error("type error");
    }
    aD.type = aL.type;
    if (typeof aL.id === "string" && aL.id !== "") {
      aD.id = aL.id;
      var aR = m(ak);
      var aK = ap.encode([aD.type, aD.id].join("|"));
      if (aR && aK == aR) {
        aD.type = "duplicate_" + aD.type;
      } else {
        var aS = new Date();
        var aJ = new Date();
        aJ.setDate(aS.getDate() + 1);
        var aT = aJ.toUTCString();
        var aG = location.hostname.replace("www.", "");
        var aI = "/";
        var aM = window.location.pathname.split("/");
        if (aM.length > 2) {
          aI = "/" + aM[1];
        } else {
          aI = window.location.pathname;
        }
        ag(ak, aK, aG, aT, aI);
      }
    }
    if (
      (typeof aL.value == "number" || typeof aL.value == "string") &&
      aL.value != ""
    ) {
      aD.value = aL.value.toString();
    }
    if (aL.items && aL.items != 0) {
      if (Array.isArray(aL.items)) {
        aD.items = aL.items;
      } else {
        throw new Error("items is Not Array");
      }
    }
    var aH = m(aj);
    if (aH == false) {
      aH = "";
    }
    var aC = m(s);
    if (aC == false) {
      aC = "";
    }
    if (aH != "" || aC != "") {
      aD.ai = {};
    }
    var aB = ap.decode(aH).split("|");
    for (var aP = 0; aP < aB.length; aP++) {
      var aV = aB[aP].split("=");
      if (aV[0] == "ci") {
        aD.ai.sa = { ci: aV[1] };
      } else {
        if (aV[0] == "t") {
          aD.ai.sa.t = aV[1];
        } else {
          if (aV[0] == "u") {
            aD.ai.sa.u = aV[1];
          } else {
            if (aV[0] == "r") {
              aD.ai.sa.r = aV[1];
            }
          }
        }
      }
    }
    var aQ = ap.decode(aC).split("|");
    for (var aN = 0; aN < aQ.length; aN++) {
      var aO = aQ[aN].split("=");
      if (aO[0] == "ci") {
        aD.ai.gfa = { ci: aO[1] };
      } else {
        if (aO[0] == "t") {
          aD.ai.gfa.t = aO[1];
        } else {
          if (aO[0] == "u") {
            aD.ai.gfa.u = aO[1];
          } else {
            if (aO[0] == "r") {
              aD.ai.gfa.r = aO[1];
            }
          }
        }
      }
    }
    var aU = {};
    aU.wa = wcs_add.wa || "unknown";
    aU.e = document.referrer || "";
    aU.u = window.location.href;
    aU.vs = r;
    aU.nt = new Date().getTime();
    aU.t = "conv";
    aU.trans = h.stringify(aD);
    if (wcs.transport === "beacon" && navigator.sendBeacon) {
      return z(aU);
    } else {
      var aE = "https://" + wcs_SerName + "/m?";
      var aF;
      for (aF in aU) {
        aE = +"&" + aF + "=" + encodeURIComponent(aU[aF]);
      }
      q(aE);
      return true;
    }
  };
  function ac() {
    var aC = [];
    if (!crypto || typeof crypto.getRandomValues !== "function") {
      if (window.msCrypto) {
        var aE = window.msCrypto.getRandomValues(new Uint8Array(21));
        for (var aD = 0; aD < 21; aD++) {
          aC.push(aE[aD]);
        }
      } else {
        return;
      }
    } else {
      aC = crypto.getRandomValues(new Uint8Array(21));
    }
    var aB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return (
      aC.reduce(function (aH, aI) {
        var aG = aI % 62;
        var aF = aB[aG];
        return aH + aF;
      }) +
      "." +
      new Date().getTime()
    );
  }
  function k() {
    var aE = new Date();
    var aD = new Date();
    aD.setDate(aE.getDate() + 200 * 365);
    var aC = aD.toUTCString();
    var aB = location.hostname.replace("www.", "");
    var aF = m(aA);
    if (aF.length > 20 && aF.indexOf(".") < 0) {
      aF += "." + new Date().getTime();
    }
    wcs.fwb = aF == "" ? ac() : aF;
    ag(aA, wcs.fwb, aB, aC);
  }
  k();
  function j() {
    if (wcs.ext == undefined || wcs.ext == null) {
      wcs.ext = {};
    }
    if (window.performance && window.performance.now) {
      wcs.ext.wot = window.performance.now();
    }
  }
})();
window.wcs_do = wcs.pageview;
wcs.gvar = {
  head: document.getElementsByTagName("head")[0],
  nacm: document.createElement("script"),
};
wcs.gvar.nacm.type = "text/javascript";
wcs.gvar.nacm.async = true;
wcs.gvar.nacm.src =
  "https://ssl.pstatic.net/melona/libs/gfp-nac-module/synchronizer.js";
wcs.gvar.head.appendChild(wcs.gvar.nacm);
wcs.gvar.nacm.onload = function () {
  if (
    typeof window.namSynchronizer !== "undefined" &&
    typeof window.namSynchronizer.getNac == "function"
  ) {
    setTimeout(function () {
      wcs.setNAC();
    }, 100);
  }
};
