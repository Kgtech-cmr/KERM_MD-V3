const _0x2aab7f = function () {
  let _0x4d9511 = true;
  return function (_0x540263, _0x524ba7) {
    const _0x120519 = _0x4d9511 ? function () {
      if (_0x524ba7) {
        const _0x4b9539 = _0x524ba7.apply(_0x540263, arguments);
        _0x524ba7 = null;
        return _0x4b9539;
      }
    } : function () {};
    _0x4d9511 = false;
    return _0x120519;
  };
}();
const _0x4d487e = _0x2aab7f(this, function () {
  return _0x4d487e.toString().search("(((.+)+)+)+$").toString().constructor(_0x4d487e).search("(((.+)+)+)+$");
});
_0x4d487e();
const _0x51ad41 = function () {
  let _0x38a0c6 = true;
  return function (_0x21b40c, _0x495a05) {
    const _0xa3e403 = _0x38a0c6 ? function () {
      if (_0x495a05) {
        const _0x4261e0 = _0x495a05.apply(_0x21b40c, arguments);
        _0x495a05 = null;
        return _0x4261e0;
      }
    } : function () {};
    _0x38a0c6 = false;
    return _0xa3e403;
  };
}();
(function () {
  _0x51ad41(this, function () {
    const _0x320442 = new RegExp("function *\\( *\\)");
    const _0x464a6d = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0xc29bc4 = _0x3e2836("init");
    if (!_0x320442.test(_0xc29bc4 + "chain") || !_0x464a6d.test(_0xc29bc4 + "input")) {
      _0xc29bc4('0');
    } else {
      _0x3e2836();
    }
  })();
})();
const _0x858ada = function () {
  let _0x2c0ed7 = true;
  return function (_0x11bbd7, _0x2026ec) {
    const _0x1e7785 = _0x2c0ed7 ? function () {
      if (_0x2026ec) {
        const _0xc1b1b7 = _0x2026ec.apply(_0x11bbd7, arguments);
        _0x2026ec = null;
        return _0xc1b1b7;
      }
    } : function () {};
    _0x2c0ed7 = false;
    return _0x1e7785;
  };
}();
const _0x5ebe3f = _0x858ada(this, function () {
  let _0x196c33;
  try {
    const _0x57550a = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x196c33 = _0x57550a();
  } catch (_0x1e22da) {
    _0x196c33 = window;
  }
  const _0xde982d = _0x196c33.console = _0x196c33.console || {};
  const _0x482c74 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x4110ca = 0; _0x4110ca < _0x482c74.length; _0x4110ca++) {
    const _0x19c5ea = _0x858ada.constructor.prototype.bind(_0x858ada);
    const _0x45c869 = _0x482c74[_0x4110ca];
    const _0x271578 = _0xde982d[_0x45c869] || _0x19c5ea;
    _0x19c5ea.__proto__ = _0x858ada.bind(_0x858ada);
    _0x19c5ea.toString = _0x271578.toString.bind(_0x271578);
    _0xde982d[_0x45c869] = _0x19c5ea;
  }
});
_0x5ebe3f();
import _0x1f5724 from 'axios';
import _0x4a61f2 from '../../config.cjs';
const mediafireDownload = async (_0x149eac, _0x2e80e1) => {
  const _0x406692 = _0x4a61f2.PREFIX;
  const _0x12186c = _0x149eac.body.startsWith(_0x406692) ? _0x149eac.body.slice(_0x406692.length).split(" ")[0].toLowerCase() : '';
  const _0x14275e = _0x149eac.body.slice(_0x406692.length + _0x12186c.length).trim();
  const _0x472dcc = ["mediafire", 'mf', "mfdownload"];
  if (_0x472dcc.includes(_0x12186c)) {
    if (!_0x14275e) {
      return _0x149eac.reply("Please provide a MediaFire URL.");
    }
    try {
      await _0x149eac.React('♻️');
      const _0x354bba = "https://gifted-apis-main-4622590b2443.herokuapp.com/api/download/mediafiredl?url=" + encodeURIComponent(_0x14275e) + "&apikey=gifteddevskk";
      const _0x2ba3d7 = await _0x1f5724.get(_0x354bba);
      const _0xe3b7e = _0x2ba3d7.data;
      if (_0xe3b7e.success && _0xe3b7e.data) {
        const _0x508ed3 = _0xe3b7e.data.link;
        const _0x2c3e5b = "> © pσwєrєd вч 𝚂𝚃𝚁𝙸𝙺𝙴𝚁𝙱𝙾𝚈 𝚆𝙾𝚁𝙻𝙳\n> File: " + _0xe3b7e.data.name + "\n> Size: " + _0xe3b7e.data.size + "\n> Date: " + _0xe3b7e.data.date;
        const _0x1034b5 = _0x508ed3.split('.').pop().toLowerCase();
        await _0x2e80e1.sendMedia(_0x149eac.from, _0x508ed3, _0x1034b5, _0x2c3e5b, _0x149eac);
        await _0x149eac.React('✅');
      } else {
        throw new Error("Invalid response from MediaFire downloader.");
      }
    } catch (_0x5eea3c) {
      console.error("Error downloading MediaFire file:", _0x5eea3c.message);
      _0x149eac.reply("Error downloading MediaFire file.");
      await _0x149eac.React('❌');
    }
  }
};
export default mediafireDownload;
function _0x3e2836(_0x22f884) {
  function _0x5cc18e(_0x237bc8) {
    if (typeof _0x237bc8 === "string") {
      return function (_0x1640f8) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x237bc8 / _0x237bc8).length !== 1 || _0x237bc8 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x5cc18e(++_0x237bc8);
  }
  try {
    if (_0x22f884) {
      return _0x5cc18e;
    } else {
      _0x5cc18e(0);
    }
  } catch (_0x5c2ac0) {}
}
(function () {
  const _0x4a55ed = function () {
    let _0x460fa2;
    try {
      _0x460fa2 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x59bc9f) {
      _0x460fa2 = window;
    }
    return _0x460fa2;
  };
  const _0x169e43 = _0x4a55ed();
  _0x169e43.setInterval(_0x3e2836, 4000);
})();
