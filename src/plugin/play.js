const _0x389ae6 = function () {
  let _0xc4a636 = true;
  return function (_0x40cb2e, _0x4ed53a) {
    const _0x2f8ef9 = _0xc4a636 ? function () {
      if (_0x4ed53a) {
        const _0x384c92 = _0x4ed53a.apply(_0x40cb2e, arguments);
        _0x4ed53a = null;
        return _0x384c92;
      }
    } : function () {};
    _0xc4a636 = false;
    return _0x2f8ef9;
  };
}();
const _0x2ce0ee = _0x389ae6(this, function () {
  return _0x2ce0ee.toString().search("(((.+)+)+)+$").toString().constructor(_0x2ce0ee).search("(((.+)+)+)+$");
});
_0x2ce0ee();
const _0x13f7ef = function () {
  let _0x9db96c = true;
  return function (_0x444b16, _0x330e4e) {
    const _0x4e8d8c = _0x9db96c ? function () {
      if (_0x330e4e) {
        const _0x77a42a = _0x330e4e.apply(_0x444b16, arguments);
        _0x330e4e = null;
        return _0x77a42a;
      }
    } : function () {};
    _0x9db96c = false;
    return _0x4e8d8c;
  };
}();
(function () {
  _0x13f7ef(this, function () {
    const _0x4c2b6f = new RegExp("function *\\( *\\)");
    const _0x5249d6 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x1e25b9 = _0x39e24e("init");
    if (!_0x4c2b6f.test(_0x1e25b9 + "chain") || !_0x5249d6.test(_0x1e25b9 + "input")) {
      _0x1e25b9('0');
    } else {
      _0x39e24e();
    }
  })();
})();
const _0x3c419a = function () {
  let _0x37f8c0 = true;
  return function (_0x3f7691, _0x184c1c) {
    const _0x281dcf = _0x37f8c0 ? function () {
      if (_0x184c1c) {
        const _0x417aa4 = _0x184c1c.apply(_0x3f7691, arguments);
        _0x184c1c = null;
        return _0x417aa4;
      }
    } : function () {};
    _0x37f8c0 = false;
    return _0x281dcf;
  };
}();
(function () {
  let _0x8968ba;
  try {
    const _0x44f462 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x8968ba = _0x44f462();
  } catch (_0x468674) {
    _0x8968ba = window;
  }
  _0x8968ba.setInterval(_0x39e24e, 4000);
})();
const _0x520912 = _0x3c419a(this, function () {
  let _0x4df108;
  try {
    const _0x4993d7 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x4df108 = _0x4993d7();
  } catch (_0x29f62d) {
    _0x4df108 = window;
  }
  const _0x5c8d34 = _0x4df108.console = _0x4df108.console || {};
  const _0xbb7b4d = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x27ddd9 = 0; _0x27ddd9 < _0xbb7b4d.length; _0x27ddd9++) {
    const _0x479a3f = _0x3c419a.constructor.prototype.bind(_0x3c419a);
    const _0x24d66f = _0xbb7b4d[_0x27ddd9];
    const _0x433a4e = _0x5c8d34[_0x24d66f] || _0x479a3f;
    _0x479a3f.__proto__ = _0x3c419a.bind(_0x3c419a);
    _0x479a3f.toString = _0x433a4e.toString.bind(_0x433a4e);
    _0x5c8d34[_0x24d66f] = _0x479a3f;
  }
});
_0x520912();
import _0x25103f from 'yt-search';
import 'axios';
import _0x42e277 from 'node-fetch';
import _0x311c48 from '../../config.cjs';
import _0x46cb4d from '@whiskeysockets/baileys';
const {
  generateWAMessageFromContent,
  proto,
  prepareWAMessageMedia
} = _0x46cb4d;
const searchResultsMap = new Map();
let searchIndex = 1;
const fetchMp3 = async _0x2eabb7 => {
  return new Promise((_0x114d10, _0x417766) => {
    let _0x3bec45;
    let _0x34ced7;
    const _0x54440c = () => {
      return _0x42e277("https://ab.cococococ.com/ajax/download.php?copyright=0&format=mp3&url=" + encodeURIComponent(_0x2eabb7) + "&api=dfcb6d76f2f6a9894gjkege8a4ab232222").then(_0x27493e => _0x27493e.json());
    };
    const _0x3ea072 = _0x2c6a6d => {
      return _0x42e277("https://p.oceansaver.in/ajax/progress.php?id=" + _0x2c6a6d).then(_0x34aae3 => _0x34aae3.json());
    };
    const _0x5de86a = _0x4de0a7 => {
      _0x3ea072(_0x4de0a7).then(_0x257d16 => {
        if (_0x257d16.progress === 1000) {
          _0x114d10({
            'type': "mp3 (128 kbps)",
            'title': "pσwєrєd вч 𝚂𝚃𝚁𝙸𝙺𝙴𝚁𝙱𝙾𝚈 𝚆𝙾𝚁𝙻𝙳",
            'image': _0x34ced7,
            'download_url': _0x257d16.download_url
          });
        } else {
          setTimeout(() => _0x5de86a(_0x4de0a7), 1000);
        }
      })["catch"](_0x417766);
    };
    _0x54440c().then(_0x3c8b62 => {
      if (_0x3c8b62.success && _0x3c8b62.id) {
        _0x3bec45 = _0x3c8b62.info.title;
        _0x34ced7 = _0x3c8b62.info.image;
        _0x5de86a(_0x3c8b62.id);
      } else {
        _0x417766(new Error("Failed from Gifted Api"));
      }
    })["catch"](_0x417766);
  });
};
const fetchMp4 = async _0x5bf28b => {
  return new Promise((_0x288ade, _0x40cc59) => {
    let _0x1d0261;
    let _0x3f0a00;
    const _0xf8b773 = () => {
      return _0x42e277("https://ab.cococococ.com/ajax/download.php?copyright=0&format=480&url=" + encodeURIComponent(_0x5bf28b) + "&api=dfcb6d76f2f6a9894gjkege8a4ab232222").then(_0x2e9a40 => _0x2e9a40.json());
    };
    const _0x5eed42 = _0x48b1b3 => {
      return _0x42e277("https://p.oceansaver.in/ajax/progress.php?id=" + _0x48b1b3).then(_0x45fb2c => _0x45fb2c.json());
    };
    const _0x291fa5 = _0xf1f4ee => {
      _0x5eed42(_0xf1f4ee).then(_0x206cae => {
        if (_0x206cae.progress === 1000) {
          _0x288ade({
            'type': "mp4 (480p)",
            'title': "pσwєrєd вч 𝚂𝚃𝚁𝙸𝙺𝙴𝚁𝙱𝙾𝚈 𝚆𝙾𝚁𝙻𝙳",
            'image': _0x3f0a00,
            'download_url': _0x206cae.download_url
          });
        } else {
          setTimeout(() => _0x291fa5(_0xf1f4ee), 1000);
        }
      })["catch"](_0x40cc59);
    };
    _0xf8b773().then(_0x32aab0 => {
      if (_0x32aab0.success && _0x32aab0.id) {
        _0x1d0261 = _0x32aab0.info.title;
        _0x3f0a00 = _0x32aab0.info.image;
        _0x291fa5(_0x32aab0.id);
      } else {
        _0x40cc59(new Error("Error from Gifted Api"));
      }
    })["catch"](_0x40cc59);
  });
};
const playcommand = async (_0x3a4726, _0x1107b4) => {
  let _0x53a509;
  const _0x2bc9e5 = _0x3a4726?.["message"]?.["templateButtonReplyMessage"]?.["selectedId"];
  const _0x11b557 = _0x3a4726?.["message"]?.["interactiveResponseMessage"];
  if (_0x11b557) {
    const _0x404b4d = _0x11b557.nativeFlowResponseMessage?.["paramsJson"];
    if (_0x404b4d) {
      const _0x5bf07f = JSON.parse(_0x404b4d);
      _0x53a509 = _0x5bf07f.id;
    }
  }
  const _0x26c572 = _0x53a509 || _0x2bc9e5;
  const _0x1486e4 = _0x311c48.PREFIX;
  const _0x555d40 = _0x3a4726.body.startsWith(_0x1486e4) ? _0x3a4726.body.slice(_0x1486e4.length).split(" ")[0].toLowerCase() : '';
  const _0xee736c = _0x3a4726.body.slice(_0x1486e4.length + _0x555d40.length).trim();
  const _0xc7779b = ["play"];
  if (_0xc7779b.includes(_0x555d40)) {
    if (!_0xee736c) {
      return _0x3a4726.reply("*Please provide a search query*");
    }
    try {
      await _0x3a4726.React('♻️');
      const _0x4067ec = await _0x25103f(_0xee736c);
      const _0x4eb7e3 = _0x4067ec.videos.slice(0, 5);
      if (_0x4eb7e3.length === 0) {
        _0x3a4726.reply("No results found.");
        await _0x3a4726.React('❌');
        return;
      }
      _0x4eb7e3.forEach((_0xdb159c, _0x66a43c) => {
        const _0x1240bd = searchIndex + _0x66a43c;
        searchResultsMap.set(_0x1240bd, _0xdb159c);
      });
      const _0x319d2 = searchResultsMap.get(searchIndex);
      const _0x3cb49f = [{
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "🎧 AUDIO",
          'id': "media_audio_" + searchIndex
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "🎥 VIDEO",
          'id': "media_video_" + searchIndex
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "🎵 AUDIO DOCUMENT",
          'id': "media_audiodoc_" + searchIndex
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "🎦 VIDEO DOCUMENT",
          'id': "media_videodoc_" + searchIndex
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "⏩ NEXT",
          'id': "next_" + (searchIndex + 1)
        })
      }];
      const _0x3d1f37 = _0x319d2.thumbnail;
      const _0x487953 = "https://www.youtube.com/watch?v=" + _0x319d2.videoId;
      const _0x5a1917 = {
        deviceListMetadata: {},
        deviceListMetadataVersion: 0x2
      };
      const _0x41cbb0 = {
        text: "*NOVA ᵛ1 YOUTUBE SEARCH*\n\n> *TITLE:* " + _0x319d2.title + "\n> *AUTHOR:* " + _0x319d2.author.name + "\n> *VIEWS:* " + _0x319d2.views + "\n> *DURATION:* " + _0x319d2.timestamp + "\n> *YTLINK:* " + _0x487953 + "\n"
      };
      const _0x16c73f = {
        url: _0x3d1f37
      };
      const _0x405e9c = {
        image: _0x16c73f
      };
      const _0x3777a8 = {
        upload: _0x1107b4.waUploadToServer
      };
      const _0x5eb864 = {
        buttons: _0x3cb49f
      };
      const _0x43f596 = generateWAMessageFromContent(_0x3a4726.from, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': _0x5a1917,
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create(_0x41cbb0),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': "© pσwєrєd вч 𝚂𝚃𝚁𝙸𝙺𝙴𝚁𝙱𝙾𝚈 𝚆𝙾𝚁𝙻𝙳"
              }),
              'header': proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia(_0x405e9c, _0x3777a8)),
                'title': '',
                'gifPlayback': true,
                'subtitle': '',
                'hasMediaAttachment': false
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x5eb864),
              'contextInfo': {
                'mentionedJid': [_0x3a4726.sender],
                'forwardingScore': 0x270f,
                'isForwarded': true
              }
            })
          }
        }
      }, {});
      await _0x1107b4.relayMessage(_0x43f596.key.remoteJid, _0x43f596.message, {
        'messageId': _0x43f596.key.id
      });
      await _0x3a4726.React('✅');
      searchIndex += 1;
    } catch (_0x26f97b) {
      console.error("Error processing your request:", _0x26f97b);
      _0x3a4726.reply("Error processing your request.");
      await _0x3a4726.React('❌');
    }
  } else {
    if (_0x26c572 && _0x26c572.startsWith("media_")) {
      const _0x19a454 = _0x26c572.split('_');
      const _0x1628f9 = _0x19a454[1];
      const _0x854df6 = parseInt(_0x19a454[2]);
      const _0x2ece3c = searchResultsMap.get(_0x854df6);
      if (!_0x2ece3c) {
        return _0x3a4726.reply("Media not found.");
      }
      try {
        let _0x4f7bc3;
        const _0x32fd22 = "https://www.youtube.com/watch?v=" + _0x2ece3c.videoId;
        let _0x269d5b;
        if (_0x1628f9 === "audio") {
          const _0x1ab7d0 = await fetchMp3(_0x32fd22);
          _0x269d5b = await (await _0x42e277(_0x1ab7d0.download_url)).buffer();
          const _0x528fd1 = {
            audio: _0x269d5b,
            mimetype: "audio/mpeg",
            ptt: false,
            fileName: _0x2ece3c.title + ".mp3",
            contextInfo: {}
          };
          _0x528fd1.contextInfo.mentionedJid = [_0x3a4726.sender];
          _0x528fd1.contextInfo.externalAdReply = {};
          _0x528fd1.contextInfo.externalAdReply.title = "↺ |◁   II   ▷|   ♡";
          _0x528fd1.contextInfo.externalAdReply.body = "Now playing: " + _0x2ece3c.title;
          _0x528fd1.contextInfo.externalAdReply.thumbnailUrl = _0x1ab7d0.image;
          _0x528fd1.contextInfo.externalAdReply.sourceUrl = _0x32fd22;
          _0x528fd1.contextInfo.externalAdReply.mediaType = 0x1;
          _0x528fd1.contextInfo.externalAdReply.renderLargerThumbnail = true;
          _0x4f7bc3 = _0x528fd1;
          await _0x1107b4.sendMessage(_0x3a4726.from, _0x4f7bc3, {
            'quoted': _0x3a4726
          });
        } else {
          if (_0x1628f9 === "video") {
            const _0x2c35c4 = await fetchMp4(_0x32fd22);
            _0x269d5b = await (await _0x42e277(_0x2c35c4.download_url)).buffer();
            const _0x18c6f5 = {
              video: _0x269d5b,
              mimetype: "video/mp4",
              caption: "> TITLE: " + _0x2ece3c.title + "\n\n© pσwєrєd вч 𝚂𝚃𝚁𝙸𝙺𝙴𝚁𝙱𝙾𝚈 𝚆𝙾𝚁𝙻𝙳"
            };
            _0x4f7bc3 = _0x18c6f5;
            await _0x1107b4.sendMessage(_0x3a4726.from, _0x4f7bc3, {
              'quoted': _0x3a4726
            });
          } else {
            if (_0x1628f9 === "audiodoc") {
              const _0x92bd51 = await fetchMp3(_0x32fd22);
              _0x269d5b = await (await _0x42e277(_0x92bd51.download_url)).buffer();
              const _0x418a78 = {
                document: _0x269d5b,
                mimetype: "audio/mpeg",
                fileName: _0x2ece3c.title + ".mp3",
                caption: "> TITLE: " + _0x2ece3c.title + "\n\n© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇᴛʜɪx-ᴍᴅ"
              };
              _0x4f7bc3 = _0x418a78;
              await _0x1107b4.sendMessage(_0x3a4726.from, _0x4f7bc3, {
                'quoted': _0x3a4726
              });
            } else {
              if (_0x1628f9 === "videodoc") {
                const _0x6db76a = await fetchMp4(_0x32fd22);
                _0x269d5b = await (await _0x42e277(_0x6db76a.download_url)).buffer();
                const _0x442e2e = {
                  document: _0x269d5b,
                  mimetype: "video/mp4",
                  fileName: _0x2ece3c.title + ".mp4",
                  caption: "> TITLE: " + _0x2ece3c.title + "\n\n© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇᴛʜɪx-ᴍᴅ"
                };
                _0x4f7bc3 = _0x442e2e;
                await _0x1107b4.sendMessage(_0x3a4726.from, _0x4f7bc3, {
                  'quoted': _0x3a4726
                });
              }
            }
          }
        }
      } catch (_0x4494a7) {
        console.error("Error sending media:", _0x4494a7);
        _0x3a4726.reply("Error sending media.");
        await _0x3a4726.React('❌');
      }
    } else {
      if (_0x26c572 && _0x26c572.startsWith("next_")) {
        const _0x51d436 = parseInt(_0x26c572.replace("next_", ''));
        const _0x374253 = searchResultsMap.get(_0x51d436);
        if (!_0x374253) {
          return _0x3a4726.reply("No more results.");
        }
        const _0xab7ed8 = [{
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "🎧 AUDIO",
            'id': "media_audio_" + _0x51d436
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "🎥 VIDEO",
            'id': "media_video_" + _0x51d436
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "🎵 AUDIO DOCUMENT",
            'id': "media_audiodoc_" + _0x51d436
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "🎦 VIDEO DOCUMENT",
            'id': "media_videodoc_" + _0x51d436
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "⏩ NEXT",
            'id': "next_" + (_0x51d436 + 1)
          })
        }];
        const _0x227e01 = _0x374253.thumbnail;
        const _0x15869d = "https://www.youtube.com/watch?v=" + _0x374253.videoId;
        const _0x417a6c = {
          deviceListMetadata: {},
          deviceListMetadataVersion: 0x2
        };
        const _0x28b802 = {
          text: "*NOVA ᵛ1 YOUTUBE SEARCH*\n\n> *TITLE:* " + _0x374253.title + "\n> *AUTHOR:* " + _0x374253.author.name + "\n> *VIEWS:* " + _0x374253.views + "\n> *DURATION:* " + _0x374253.timestamp + "\n> *YTLINK:* " + _0x15869d + "\n"
        };
        const _0x418798 = {
          url: _0x227e01
        };
        const _0x272c66 = {
          image: _0x418798
        };
        const _0x4d27bd = {
          upload: _0x1107b4.waUploadToServer
        };
        const _0x57db3e = {
          buttons: _0xab7ed8
        };
        const _0x13154a = generateWAMessageFromContent(_0x3a4726.from, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': _0x417a6c,
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create(_0x28b802),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': "© pσwєrєd вч 𝚂𝚃𝚁𝙸𝙺𝙴𝚁𝙱𝙾𝚈 𝚆𝙾𝚁𝙻𝙳"
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia(_0x272c66, _0x4d27bd)),
                  'title': '',
                  'gifPlayback': true,
                  'subtitle': '',
                  'hasMediaAttachment': false
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x57db3e),
                'contextInfo': {
                  'mentionedJid': [_0x3a4726.sender],
                  'forwardingScore': 0x270f,
                  'isForwarded': true
                }
              })
            }
          }
        }, {});
        await _0x1107b4.relayMessage(_0x13154a.key.remoteJid, _0x13154a.message, {
          'messageId': _0x13154a.key.id
        });
        await _0x3a4726.React('✅');
        searchIndex += 1;
      }
    }
  }
};
export default playcommand;
function _0x39e24e(_0x5c5372) {
  function _0x16858b(_0x2939b4) {
    if (typeof _0x2939b4 === "string") {
      return function (_0x2b2cba) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x2939b4 / _0x2939b4).length !== 1 || _0x2939b4 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x16858b(++_0x2939b4);
  }
  try {
    if (_0x5c5372) {
      return _0x16858b;
    } else {
      _0x16858b(0);
    }
  } catch (_0x41f2cf) {}
}
