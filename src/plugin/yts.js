const _0x58546d = function () {
  let _0x5bf72f = true;
  return function (_0x387db4, _0x5a3c79) {
    const _0x5c0ab0 = _0x5bf72f ? function () {
      if (_0x5a3c79) {
        const _0x1db260 = _0x5a3c79.apply(_0x387db4, arguments);
        _0x5a3c79 = null;
        return _0x1db260;
      }
    } : function () {};
    _0x5bf72f = false;
    return _0x5c0ab0;
  };
}();
const _0x507096 = _0x58546d(this, function () {
  return _0x507096.toString().search("(((.+)+)+)+$").toString().constructor(_0x507096).search("(((.+)+)+)+$");
});
_0x507096();
const _0x553b2b = function () {
  let _0xe8963e = true;
  return function (_0x3b0552, _0xd7984a) {
    const _0x4e8ba7 = _0xe8963e ? function () {
      if (_0xd7984a) {
        const _0x39e55a = _0xd7984a.apply(_0x3b0552, arguments);
        _0xd7984a = null;
        return _0x39e55a;
      }
    } : function () {};
    _0xe8963e = false;
    return _0x4e8ba7;
  };
}();
(function () {
  _0x553b2b(this, function () {
    const _0x27b01b = new RegExp("function *\\( *\\)");
    const _0x579b92 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x5836ff = _0x2893dd("init");
    if (!_0x27b01b.test(_0x5836ff + "chain") || !_0x579b92.test(_0x5836ff + "input")) {
      _0x5836ff('0');
    } else {
      _0x2893dd();
    }
  })();
})();
const _0x3ff70c = function () {
  let _0x3fdc7a = true;
  return function (_0x482bd7, _0x2e58be) {
    const _0x1cbe9c = _0x3fdc7a ? function () {
      if (_0x2e58be) {
        const _0x2ae5ea = _0x2e58be.apply(_0x482bd7, arguments);
        _0x2e58be = null;
        return _0x2ae5ea;
      }
    } : function () {};
    _0x3fdc7a = false;
    return _0x1cbe9c;
  };
}();
const _0x347bb7 = _0x3ff70c(this, function () {
  const _0x13adfa = function () {
    let _0x3e2617;
    try {
      _0x3e2617 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x58a767) {
      _0x3e2617 = window;
    }
    return _0x3e2617;
  };
  const _0x4f596d = _0x13adfa();
  const _0x45448a = _0x4f596d.console = _0x4f596d.console || {};
  const _0x3fb7aa = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x285715 = 0; _0x285715 < _0x3fb7aa.length; _0x285715++) {
    const _0x17f8cb = _0x3ff70c.constructor.prototype.bind(_0x3ff70c);
    const _0x34425b = _0x3fb7aa[_0x285715];
    const _0x42d21e = _0x45448a[_0x34425b] || _0x17f8cb;
    _0x17f8cb.__proto__ = _0x3ff70c.bind(_0x3ff70c);
    _0x17f8cb.toString = _0x42d21e.toString.bind(_0x42d21e);
    _0x45448a[_0x34425b] = _0x17f8cb;
  }
});
_0x347bb7();
import _0x1e653c from 'yt-search';
import _0x2f82ff from 'axios';
import _0x194378 from '../../config.cjs';
import _0x26a65c, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x26a65c;
const videoMap = new Map();
let videoIndex = 1;
let audioIndex = 1001;
(function () {
  let _0x526fd1;
  try {
    const _0x40b1e4 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x526fd1 = _0x40b1e4();
  } catch (_0x3d925a) {
    _0x526fd1 = window;
  }
  _0x526fd1.setInterval(_0x2893dd, 4000);
})();
const ytsearch = async (_0x42b2d3, _0x229d74) => {
  let _0x2c1644;
  const _0x237b90 = _0x42b2d3?.["message"]?.["templateButtonReplyMessage"]?.["selectedId"];
  const _0x31dbdd = _0x42b2d3?.["message"]?.["interactiveResponseMessage"];
  if (_0x31dbdd) {
    const _0x1cfe85 = _0x31dbdd.nativeFlowResponseMessage?.["paramsJson"];
    if (_0x1cfe85) {
      const _0x322ae1 = JSON.parse(_0x1cfe85);
      _0x2c1644 = _0x322ae1.id;
    }
  }
  const _0x5b2271 = _0x2c1644 || _0x237b90;
  const _0x370b23 = _0x194378.PREFIX;
  const _0x591504 = _0x42b2d3.body.startsWith(_0x370b23) ? _0x42b2d3.body.slice(_0x370b23.length).split(" ")[0].toLowerCase() : '';
  const _0x1bef35 = _0x42b2d3.body.slice(_0x370b23.length + _0x591504.length).trim();
  const _0x35c111 = ["yts", "ytsearch"];
  if (_0x35c111.includes(_0x591504)) {
    if (!_0x1bef35) {
      return _0x42b2d3.reply("Please provide a YouTube URL or search query");
    }
    try {
      await _0x42b2d3.React('♻️');
      const _0x398c59 = await _0x1e653c(_0x1bef35);
      const _0x357da8 = _0x398c59.videos.slice(0, 10);
      if (_0x357da8.length === 0) {
        _0x42b2d3.reply("No results found.");
        await _0x42b2d3.React('❌');
        return;
      }
      const _0x4246af = _0x357da8.map((_0x50b20d, _0x442709) => {
        const _0x2380f5 = videoIndex + _0x442709;
        const _0x2056fc = {
          ..._0x50b20d
        };
        _0x2056fc.isAudio = false;
        videoMap.set(_0x2380f5, _0x2056fc);
        const _0x29db73 = {
          header: '',
          title: _0x50b20d.title,
          description: '',
          id: "🎦video_" + _0x2380f5
        };
        return _0x29db73;
      });
      const _0x794af9 = _0x357da8.map((_0x39fe58, _0x138ddd) => {
        const _0x51400e = audioIndex + _0x138ddd;
        const _0x4e0d8c = {
          ..._0x39fe58
        };
        _0x4e0d8c.isAudio = true;
        videoMap.set(_0x51400e, _0x4e0d8c);
        const _0x2591a4 = {
          header: '',
          title: _0x39fe58.title,
          description: '',
          id: "🎵audio_" + _0x51400e
        };
        return _0x2591a4;
      });
      const _0x10b39e = _0x357da8[0];
      const _0x5f7938 = {
        title: _0x10b39e.title,
        author: _0x10b39e.author.name,
        duration: _0x10b39e.timestamp,
        views: _0x10b39e.views,
        url: "https://www.youtube.com/watch?v=" + _0x10b39e.videoId,
        thumbnail: _0x10b39e.thumbnail
      };
      const _0x42ca29 = {
        deviceListMetadata: {},
        deviceListMetadataVersion: 0x2
      };
      const _0x2923c3 = {
        text: "*NOVA ᵛ1 VIDEO DOWNLOADER*\n\n> *TITLE:* _" + _0x5f7938.title + "_\n> *AUTHOR:* _" + _0x5f7938.author + "_\n> *DURATION:* _" + _0x5f7938.duration + "_\n> *VIEWS:* _" + _0x5f7938.views + "_\n> *URL:* _" + _0x5f7938.url + '_'
      };
      const _0x11f546 = {
        url: _0x5f7938.thumbnail
      };
      const _0x5e13ab = {
        image: _0x11f546
      };
      const _0x4ad10d = {
        upload: _0x229d74.waUploadToServer
      };
      const _0x22f3c7 = generateWAMessageFromContent(_0x42b2d3.from, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': _0x42ca29,
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create(_0x2923c3),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': "© pσwєrєd вч 𝚂𝚃𝚁𝙸𝙺𝙴𝚁𝙱𝙾𝚈 𝚆𝙾𝚁𝙻𝙳"
              }),
              'header': proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia(_0x5e13ab, _0x4ad10d)),
                'title': '',
                'gifPlayback': true,
                'subtitle': '',
                'hasMediaAttachment': false
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                'buttons': [{
                  'name': "single_select",
                  'buttonParamsJson': JSON.stringify({
                    'title': "🔖 SELECT A VIDEO",
                    'sections': [{
                      'title': "😎 Top 10 YouTube Results - Videos",
                      'highlight_label': "🤩 Top 10",
                      'rows': _0x4246af
                    }]
                  })
                }, {
                  'name': "single_select",
                  'buttonParamsJson': JSON.stringify({
                    'title': "🎧 SELECT AN AUDIO",
                    'sections': [{
                      'title': "🎶 Top 10 YouTube Results - Audios",
                      'highlight_label': "🤩 Top 10",
                      'rows': _0x794af9
                    }]
                  })
                }]
              }),
              'contextInfo': {
                'mentionedJid': [_0x42b2d3.sender],
                'forwardingScore': 0x270f,
                'isForwarded': true
              }
            })
          }
        }
      }, {});
      await _0x229d74.relayMessage(_0x22f3c7.key.remoteJid, _0x22f3c7.message, {
        'messageId': _0x22f3c7.key.id
      });
      await _0x42b2d3.React('✅');
      videoIndex += _0x357da8.length;
      audioIndex += _0x357da8.length;
    } catch (_0x41c391) {
      console.error("Error processing your request:", _0x41c391);
      _0x42b2d3.reply("Error processing your request.");
      await _0x42b2d3.React('❌');
    }
  } else {
    if (_0x5b2271) {
      const _0x4ecddd = _0x5b2271.startsWith("🎵audio_");
      const _0x120b00 = parseInt(_0x5b2271.replace(_0x4ecddd ? "🎵audio_" : "🎦video_", ''));
      const _0x335bfc = videoMap.get(_0x120b00);
      if (_0x335bfc) {
        try {
          const _0x49567d = "https://www.youtube.com/watch?v=" + _0x335bfc.videoId;
          if (_0x4ecddd) {
            const _0xd40a7 = () => {
              return _0x2f82ff.get("https://ab.cococococ.com/ajax/download.php?copyright=0&format=mp3&url=" + encodeURIComponent(_0x49567d) + "&api=dfcb6d76f2f6a9894gjkege8a4ab232222").then(_0x53d6da => _0x53d6da.data);
            };
            const _0x382c82 = _0x564d7b => {
              return _0x2f82ff.get("https://p.oceansaver.in/ajax/progress.php?id=" + _0x564d7b).then(_0x2586da => _0x2586da.data);
            };
            const _0x3dc10b = _0x12792c => {
              return _0x382c82(_0x12792c).then(_0x2730f1 => {
                if (_0x2730f1.progress === 1000) {
                  return _0x2730f1.download_url;
                } else {
                  return new Promise(_0x68c439 => setTimeout(() => _0x3dc10b(_0x12792c).then(_0x68c439), 1000));
                }
              });
            };
            const _0x3525e3 = await _0xd40a7();
            if (_0x3525e3.success && _0x3525e3.id) {
              const _0x238fe6 = await _0x3dc10b(_0x3525e3.id);
              const _0x2f48b1 = {
                responseType: "arraybuffer"
              };
              const _0x32cdd2 = await _0x2f82ff.get(_0x238fe6, _0x2f48b1);
              const _0x18988d = {
                'audio': Buffer.from(_0x32cdd2.data),
                'mimetype': "audio/mpeg",
                'ptt': false,
                'fileName': _0x335bfc.title + ".mp3",
                'contextInfo': {
                  'mentionedJid': [_0x42b2d3.sender],
                  'externalAdReply': {
                    'title': "↺ |◁   II   ▷|   ♡",
                    'body': "Now playing: " + _0x335bfc.title,
                    'thumbnailUrl': _0x335bfc.thumbnail,
                    'sourceUrl': _0x49567d,
                    'mediaType': 0x1,
                    'renderLargerThumbnail': true
                  }
                }
              };
              await _0x229d74.sendMessage(_0x42b2d3.from, _0x18988d, {
                'quoted': _0x42b2d3
              });
            } else {
              _0x42b2d3.reply("Failed to get download URL.");
              await _0x42b2d3.React('❌');
            }
          } else {
            const _0x5096c5 = () => {
              return _0x2f82ff.get("https://ab.cococococ.com/ajax/download.php?copyright=0&format=480&url=" + encodeURIComponent(_0x49567d) + "&api=dfcb6d76f2f6a9894gjkege8a4ab232222").then(_0x534c11 => _0x534c11.data);
            };
            const _0x3acd9e = _0xc610f0 => {
              return _0x2f82ff.get("https://p.oceansaver.in/ajax/progress.php?id=" + _0xc610f0).then(_0x3627d3 => _0x3627d3.data);
            };
            const _0xbc113f = _0x47eee5 => {
              return _0x3acd9e(_0x47eee5).then(_0x4db7c8 => {
                if (_0x4db7c8.progress === 1000) {
                  return _0x4db7c8.download_url;
                } else {
                  return new Promise(_0x501c76 => setTimeout(() => _0xbc113f(_0x47eee5).then(_0x501c76), 1000));
                }
              });
            };
            const _0x2fd789 = await _0x5096c5();
            if (_0x2fd789.success && _0x2fd789.id) {
              const _0x1b0092 = await _0xbc113f(_0x2fd789.id);
              const _0xd7ca04 = {
                responseType: "arraybuffer"
              };
              const _0x410d71 = await _0x2f82ff.get(_0x1b0092, _0xd7ca04);
              await _0x229d74.sendMessage(_0x42b2d3.from, {
                'video': Buffer.from(_0x410d71.data),
                'mimetype': "video/mp4",
                'caption': "> *TITLE:* " + _0x335bfc.title + "\n> *AUTHOR:* " + _0x335bfc.author.name + "\n> *DURATION:* " + _0x335bfc.timestamp + "\n\n> *© pσwєrєd вч 𝚂𝚃𝚁𝙸𝙺𝙴𝚁𝙱𝙾𝚈 𝚆𝙾𝚁𝙻𝙳*"
              }, {
                'quoted': _0x42b2d3
              });
            } else {
              _0x42b2d3.reply("Failed to get download URL.");
              await _0x42b2d3.React('❌');
            }
          }
          await _0x42b2d3.React('✅');
        } catch (_0x4b80a3) {
          console.error("Error fetching media details:", _0x4b80a3);
          _0x42b2d3.reply("Error fetching media details.");
          await _0x42b2d3.React('❌');
        }
      }
    }
  }
};
export default ytsearch;
function _0x2893dd(_0x2bf21e) {
  function _0x19b80b(_0x14bf3c) {
    if (typeof _0x14bf3c === "string") {
      return function (_0x30fd9c) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x14bf3c / _0x14bf3c).length !== 1 || _0x14bf3c % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x19b80b(++_0x14bf3c);
  }
  try {
    if (_0x2bf21e) {
      return _0x19b80b;
    } else {
      _0x19b80b(0);
    }
  } catch (_0x58303f) {}
}
