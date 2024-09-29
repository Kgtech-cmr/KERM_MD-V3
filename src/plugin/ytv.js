const _0x48c86a = function () {
  const _0x86476e = {
    xkJWf: function (_0x111b76, _0xe644e4) {
      return _0x111b76 === _0xe644e4;
    },
    rAFsI: "ecQDa",
    unLVn: "uGaFh",
    JFSiK: function (_0x1b75bf, _0x46e9e6) {
      return _0x1b75bf !== _0x46e9e6;
    },
    MfFDE: "xuUCR",
    IJIQj: "BUgzb"
  };
  _0x86476e.zBwHp = function (_0x3887dc, _0x3dc683) {
    return _0x3887dc === _0x3dc683;
  };
  _0x86476e.qrZku = "heUmm";
  _0x86476e.WvUnX = "ZOJrj";
  let _0x25d51f = true;
  return function (_0x13008d, _0x3e733b) {
    if (_0x86476e.zBwHp(_0x86476e.qrZku, _0x86476e.WvUnX)) {
      const _0x4f90bd = _0x334939 ? function () {
        if (_0x4b67b6) {
          const _0x91d7b4 = _0x2c9384.apply(_0x17b61c, arguments);
          _0x4875fe = null;
          return _0x91d7b4;
        }
      } : function () {};
      _0xa953d5 = false;
      return _0x4f90bd;
    } else {
      const _0x3afd33 = _0x25d51f ? function () {
        if (_0x3e733b) {
          const _0x45772b = _0x3e733b.apply(_0x13008d, arguments);
          _0x3e733b = null;
          return _0x45772b;
        }
      } : function () {};
      _0x25d51f = false;
      return _0x3afd33;
    }
  };
}();
const _0x5ac4b6 = _0x48c86a(this, function () {
  return _0x5ac4b6.toString().search("(((.+)+)+)+$").toString().constructor(_0x5ac4b6).search("(((.+)+)+)+$");
});
_0x5ac4b6();
const _0x3036de = function () {
  let _0x3ca747 = true;
  return function (_0x1efc09, _0x53ff81) {
    const _0x2c5d88 = _0x3ca747 ? function () {
      if (_0x53ff81) {
        const _0x47e019 = _0x53ff81.apply(_0x1efc09, arguments);
        _0x53ff81 = null;
        return _0x47e019;
      }
    } : function () {};
    _0x3ca747 = false;
    return _0x2c5d88;
  };
}();
(function () {
  _0x3036de(this, function () {
    const _0x2f04fd = new RegExp("function *\\( *\\)");
    const _0x43a8a8 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x29f04d = _0x1e5b7d("init");
    if (!_0x2f04fd.test(_0x29f04d + "chain") || !_0x43a8a8.test(_0x29f04d + "input")) {
      _0x29f04d('0');
    } else {
      _0x1e5b7d();
    }
  })();
})();
const _0xc2ab29 = function () {
  let _0x522225 = true;
  return function (_0x1fcd23, _0x2c8e4a) {
    const _0x3e2e5f = _0x522225 ? function () {
      if (_0x2c8e4a) {
        const _0x37886c = _0x2c8e4a.apply(_0x1fcd23, arguments);
        _0x2c8e4a = null;
        return _0x37886c;
      }
    } : function () {};
    _0x522225 = false;
    return _0x3e2e5f;
  };
}();
const _0x5f4fbe = _0xc2ab29(this, function () {
  let _0x3331af;
  try {
    const _0x2c3af1 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x3331af = _0x2c3af1();
  } catch (_0xbccd16) {
    _0x3331af = window;
  }
  const _0x29fdef = _0x3331af.console = _0x3331af.console || {};
  const _0x1ebefa = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x3d0a08 = 0; _0x3d0a08 < _0x1ebefa.length; _0x3d0a08++) {
    const _0x283a95 = _0xc2ab29.constructor.prototype.bind(_0xc2ab29);
    const _0x5eabae = _0x1ebefa[_0x3d0a08];
    const _0x41d63c = _0x29fdef[_0x5eabae] || _0x283a95;
    _0x283a95.__proto__ = _0xc2ab29.bind(_0xc2ab29);
    _0x283a95.toString = _0x41d63c.toString.bind(_0x41d63c);
    _0x29fdef[_0x5eabae] = _0x283a95;
  }
});
_0x5f4fbe();
import _0x344140 from '../../config.cjs';
(function () {
  let _0xcbffed;
  try {
    const _0x509dab = Function("return (function() {}.constructor(\"return this\")( ));");
    _0xcbffed = _0x509dab();
  } catch (_0x25513f) {
    _0xcbffed = window;
  }
  _0xcbffed.setInterval(_0x1e5b7d, 4000);
})();
import _0x3e3de6 from 'node-fetch';
import _0x1ebe83, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x1ebe83;
const videoMap = new Map();
let videoIndex = 1;
const song = async (_0x5c33ce, _0x58c5bd) => {
  let _0x1fb348;
  const _0x34b8fb = _0x5c33ce?.["message"]?.["templateButtonReplyMessage"]?.["selectedId"];
  const _0x4d44f9 = _0x5c33ce?.["message"]?.["interactiveResponseMessage"];
  if (_0x4d44f9) {
    const _0x2f5c5a = _0x4d44f9.nativeFlowResponseMessage?.["paramsJson"];
    if (_0x2f5c5a) {
      const _0x3410dc = JSON.parse(_0x2f5c5a);
      _0x1fb348 = _0x3410dc.id;
    }
  }
  const _0x1fecdd = _0x1fb348 || _0x34b8fb;
  const _0x390187 = _0x344140.PREFIX;
  const _0x21563f = _0x5c33ce.body.startsWith(_0x390187) ? _0x5c33ce.body.slice(_0x390187.length).split(" ")[0].toLowerCase() : '';
  const _0x28f764 = _0x5c33ce.body.slice(_0x390187.length + _0x21563f.length).trim();
  const _0x52ae31 = ["ytv"];
  if (_0x52ae31.includes(_0x21563f)) {
    if (!_0x28f764 || !_0x28f764.includes("youtube.com") && !_0x28f764.includes("youtu.be")) {
      _0x5c33ce.reply("Please provide a valid YouTube URL");
      console.log("Invalid YouTube URL provided");
      return;
    }
    try {
      await _0x5c33ce.React('♻️');
      const _0x5bd711 = "https://api.neoxr.eu/api/youtube?url=" + encodeURIComponent(_0x28f764) + "&type=video&quality=360p&apikey=mcandy";
      const _0x4d606c = await _0x3e3de6(_0x5bd711);
      const _0x273eaf = await _0x4d606c.json();
      if (!_0x4d606c.ok || !_0x273eaf.status || !_0x273eaf.data) {
        _0x5c33ce.reply("No results found.");
        await _0x5c33ce.React('❌');
        return;
      }
      const {
        title: _0x5ca0a4,
        thumbnail: _0x128c68
      } = _0x273eaf.data;
      const _0x122595 = {
        title: _0x5ca0a4,
        url: _0x28f764,
        thumbnail: _0x128c68,
        downloadUrl: _0x273eaf.data.url
      };
      const _0x27753b = ["144p", "240p", "360p", "480p", "720p", "1080p"].map(_0x404025 => ({
        'header': "SELECT YOUR QUALITY",
        'title': _0x404025,
        'description': '' + _0x122595.title,
        'id': "🎦videoo_" + videoIndex + '_' + _0x404025
      }));
      const _0x5e8711 = {
        deviceListMetadata: {},
        deviceListMetadataVersion: 0x2
      };
      const _0x30ceb3 = {
        text: "*NOVA ᵛ1 VIDEO DOWNLOADER*\n\n> *TITLE:* _" + _0x122595.title + "_\n> *QUALITY:* _144p To 1080p_\n> *URL:* _" + _0x122595.url + '_'
      };
      const _0x15a097 = {
        url: _0x122595.thumbnail
      };
      const _0x3bfccb = {
        image: _0x15a097
      };
      const _0x31d697 = {
        upload: _0x58c5bd.waUploadToServer
      };
      const _0x5467ec = generateWAMessageFromContent(_0x5c33ce.from, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': _0x5e8711,
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create(_0x30ceb3),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': "© pσwєrєd вч 𝚂𝚃𝚁𝙸𝙺𝙴𝚁𝙱𝙾𝚈"
              }),
              'header': proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia(_0x3bfccb, _0x31d697)),
                'title': '',
                'gifPlayback': true,
                'subtitle': '',
                'hasMediaAttachment': false
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                'buttons': [{
                  'name': "single_select",
                  'buttonParamsJson': JSON.stringify({
                    'title': "🔖 SELECT A VIDEO QUALITY",
                    'sections': [{
                      'title': "😎 Available Qualities",
                      'highlight_label': "🤩 Select",
                      'rows': _0x27753b
                    }]
                  })
                }]
              }),
              'contextInfo': {
                'mentionedJid': [_0x5c33ce.sender],
                'forwardingScore': 0x270f,
                'isForwarded': true
              }
            })
          }
        }
      }, {});
      await _0x58c5bd.relayMessage(_0x5467ec.key.remoteJid, _0x5467ec.message, {
        'messageId': _0x5467ec.key.id
      });
      await _0x5c33ce.React('✅');
      const _0x357ba3 = {
        ..._0x122595
      };
      _0x357ba3.isAudio = false;
      videoMap.set(videoIndex, _0x357ba3);
      videoIndex += 1;
    } catch (_0x507e19) {
      console.error("Error processing your request:", _0x507e19);
      _0x5c33ce.reply("Error processing your request.");
      await _0x5c33ce.React('❌');
    }
  } else {
    if (_0x1fecdd) {
      const _0x4f8157 = _0x1fecdd.split('_');
      const _0x3e3ff1 = parseInt(_0x4f8157[1]);
      const _0x1b6406 = _0x4f8157[2];
      const _0x25237e = videoMap.get(_0x3e3ff1);
      if (_0x25237e) {
        try {
          const _0x28708e = _0x25237e.url;
          const _0x5c06fa = "https://api.neoxr.eu/api/youtube?url=" + encodeURIComponent(_0x28708e) + "&type=video&quality=" + _0x1b6406 + "&apikey=mcandy";
          const _0x577f08 = await _0x3e3de6(_0x5c06fa);
          const _0x2af84c = await _0x577f08.json();
          if (_0x577f08.ok && _0x2af84c.status && _0x2af84c.data.url) {
            const _0x23d547 = _0x2af84c.data.url;
            const _0x1d9269 = await _0x3e3de6(_0x23d547).then(_0x4cb2b8 => _0x4cb2b8.buffer());
            if (_0x1d9269.length / 1024 / 1024 > 250) {
              const _0xcda2aa = {
                document: _0x1d9269,
                mimetype: "video/mp4",
                fileName: _0x25237e.title + ".mp4",
                caption: "Title: " + _0x25237e.title + "\nQuality: " + _0x1b6406 + "\n\n> © pσwєrєd вч 𝚂𝚃𝚁𝙸𝙺𝙴𝚁𝙱𝙾𝚈 𝚆𝙾𝚁𝙻𝙳"
              };
              await _0x58c5bd.sendMessage(_0x5c33ce.from, _0xcda2aa, {
                'quoted': _0x5c33ce
              });
            } else {
              const _0x90e2c8 = {
                video: _0x1d9269,
                mimetype: "video/mp4",
                caption: "Title: " + _0x25237e.title + "\nQuality: " + _0x1b6406 + "\n\n> © pσwєrєd вч 𝚂𝚃𝚁𝙸𝙺𝙴𝚁𝙱𝙾𝚈 𝚆𝙾𝚁𝙻𝙳"
              };
              await _0x58c5bd.sendMessage(_0x5c33ce.from, _0x90e2c8, {
                'quoted': _0x5c33ce
              });
            }
          } else {
            _0x5c33ce.reply("The selected quality " + _0x1b6406 + " is not available.");
            await _0x5c33ce.React('❌');
          }
        } catch (_0x5abf7d) {
          _0x5c33ce.reply("Error fetching video details.");
          await _0x5c33ce.React('❌');
        }
      }
    }
  }
};
export default song;
function _0x1e5b7d(_0x3c52d2) {
  function _0x5acb8b(_0xdfdcb9) {
    if (typeof _0xdfdcb9 === "string") {
      return function (_0x4e155c) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0xdfdcb9 / _0xdfdcb9).length !== 1 || _0xdfdcb9 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x5acb8b(++_0xdfdcb9);
  }
  try {
    if (_0x3c52d2) {
      return _0x5acb8b;
    } else {
      _0x5acb8b(0);
    }
  } catch (_0x4df02e) {}
}
