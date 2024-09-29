const _0x1447aa = function () {
  let _0x27c143 = true;
  return function (_0x21cf2e, _0x40371a) {
    const _0x278d4f = _0x27c143 ? function () {
      if (_0x40371a) {
        const _0x333ca9 = _0x40371a.apply(_0x21cf2e, arguments);
        _0x40371a = null;
        return _0x333ca9;
      }
    } : function () {};
    _0x27c143 = false;
    return _0x278d4f;
  };
}();
const _0x369aa3 = _0x1447aa(this, function () {
  return _0x369aa3.toString().search("(((.+)+)+)+$").toString().constructor(_0x369aa3).search("(((.+)+)+)+$");
});
_0x369aa3();
const _0x5b5133 = function () {
  let _0x962fb1 = true;
  return function (_0x241a54, _0x350e42) {
    const _0x316bfa = _0x962fb1 ? function () {
      if (_0x350e42) {
        const _0x41871f = _0x350e42.apply(_0x241a54, arguments);
        _0x350e42 = null;
        return _0x41871f;
      }
    } : function () {};
    _0x962fb1 = false;
    return _0x316bfa;
  };
}();
(function () {
  _0x5b5133(this, function () {
    const _0x287767 = new RegExp("function *\\( *\\)");
    const _0x47313d = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x1c60a0 = _0x1bbced("init");
    if (!_0x287767.test(_0x1c60a0 + "chain") || !_0x47313d.test(_0x1c60a0 + "input")) {
      _0x1c60a0('0');
    } else {
      _0x1bbced();
    }
  })();
})();
const _0x4928a6 = function () {
  let _0x480b5f = true;
  return function (_0xd277d5, _0x4800aa) {
    const _0x35ef6e = _0x480b5f ? function () {
      if (_0x4800aa) {
        const _0x4c5aa2 = _0x4800aa.apply(_0xd277d5, arguments);
        _0x4800aa = null;
        return _0x4c5aa2;
      }
    } : function () {};
    _0x480b5f = false;
    return _0x35ef6e;
  };
}();
const _0x141444 = _0x4928a6(this, function () {
  const _0x151113 = function () {
    let _0x1f9dc0;
    try {
      _0x1f9dc0 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x5e4a57) {
      _0x1f9dc0 = window;
    }
    return _0x1f9dc0;
  };
  const _0x630d5c = _0x151113();
  const _0x3b200b = _0x630d5c.console = _0x630d5c.console || {};
  const _0x4d0e9c = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x1fed34 = 0; _0x1fed34 < _0x4d0e9c.length; _0x1fed34++) {
    const _0x24b76a = _0x4928a6.constructor.prototype.bind(_0x4928a6);
    const _0x2d1e21 = _0x4d0e9c[_0x1fed34];
    const _0x5aeb55 = _0x3b200b[_0x2d1e21] || _0x24b76a;
    _0x24b76a.__proto__ = _0x4928a6.bind(_0x4928a6);
    _0x24b76a.toString = _0x5aeb55.toString.bind(_0x5aeb55);
    _0x3b200b[_0x2d1e21] = _0x24b76a;
  }
});
(function () {
  const _0x1de42e = function () {
    let _0x3287fd;
    try {
      _0x3287fd = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x1f8b88) {
      _0x3287fd = window;
    }
    return _0x3287fd;
  };
  const _0x3b1f9f = _0x1de42e();
  _0x3b1f9f.setInterval(_0x1bbced, 4000);
})();
_0x141444();
import _0x3cb132 from 'axios';
import _0x3f12d3 from '../../config.cjs';
const instaDownload = async (_0x4e6aaf, _0x4356a5) => {
  const _0x30e74f = _0x3f12d3.PREFIX;
  const _0x52eaf7 = _0x4e6aaf.body.startsWith(_0x30e74f) ? _0x4e6aaf.body.slice(_0x30e74f.length).split(" ")[0].toLowerCase() : '';
  const _0x141f14 = _0x4e6aaf.body.slice(_0x30e74f.length + _0x52eaf7.length).trim();
  const _0x4ab71b = ["insta", 'ig', "igdl", "instadl"];
  if (_0x4ab71b.includes(_0x52eaf7)) {
    if (!_0x141f14) {
      return _0x4e6aaf.reply("Please provide an Instagram URL.");
    }
    try {
      await _0x4e6aaf.React('♻️');
      const _0x4d2cee = "https://gifted-apis-main-4622590b2443.herokuapp.com/api/download/instagram?url=" + encodeURIComponent(_0x141f14) + "&apikey=gifteddevskk";
      const _0x1ae861 = await _0x3cb132.get(_0x4d2cee);
      const _0x1013d9 = _0x1ae861.data;
      if (_0x1013d9.success && _0x1013d9.url) {
        const _0x1e5d38 = _0x1013d9.url;
        await _0x4356a5.sendMedia(_0x4e6aaf.from, _0x1e5d38, "file", "© pσwєrєd вч 𝚂𝚃𝚁𝙸𝙺𝙴𝚁𝙱𝙾𝚈 𝚆𝙾𝚁𝙻𝙳", _0x4e6aaf);
        await _0x4e6aaf.React('✅');
      } else {
        throw new Error("Invalid response from the downloader.");
      }
    } catch (_0x35f313) {
      console.error("Error downloading Instagram media:", _0x35f313.message);
      _0x4e6aaf.reply("Error downloading Instagram media.");
      await _0x4e6aaf.React('💀');
    }
  }
};
export default instaDownload;
function _0x1bbced(_0x1683d7) {
  function _0x33c1df(_0x31c4e1) {
    if (typeof _0x31c4e1 === "string") {
      return function (_0xd15dd4) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x31c4e1 / _0x31c4e1).length !== 1 || _0x31c4e1 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x33c1df(++_0x31c4e1);
  }
  try {
    if (_0x1683d7) {
      return _0x33c1df;
    } else {
      _0x33c1df(0);
    }
  } catch (_0xf0fe53) {}
}
