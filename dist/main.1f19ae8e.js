// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var demo = document.querySelector("#html"); // let n = 1

var n = 0; //n从0开始，what different?咿刚好字符串下标就是从0开始的

var str = "/* \u4F60\u597D\uFF0C\u6211\u53EB\u968B\u946B\n*\u63A5\u4E0B\u6765\u6211\u8981\u5C55\u793A\u4E00\u4E0B\u6211\u7684\u524D\u7AEF\u529F\u5E95\n*\u9996\u5148\u51C6\u5907\u4E00\u4E2Adiv\n*/\n#div1{\n   width: 200px;\n   height: 200px;\n   \n}\n/*\u63A5\u4E0B\u6765\u6211\u628A\u4E00\u4E2Adiv\u53D8\u6210\u516B\u5366\n*\u6CE8\u610F\u770B\u597D\u4E86\n*\u9996\u5148\u628Adiv\u53D8\u6210\u4E00\u4E2A\u5706\n*/\n#div1{\n    border-radius: 50%;\n    border:none;\n    -moz-box-shadow:5px 8px 17px #333333;\n     -webkit-box-shadow:5px 8px 17px #333333;\n      box-shadow:5px 8px 17px #333333;\n}\n/*\u63A5\u4E0B\u6765\u6211\u628A\u5B83\u53D8\u6210\u9ED1\u767D\n*/\n#div1{\n    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);\n}\n/* \u7136\u540E\u6211\u518D\u52A0\u4E24\u4E2A\u5708\n*/\n#div1::before{\n    width: 100px;\n    height: 100px;\n    \n   top:0;\n    left:50%;\n    background:#000;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    border:none;\n    background:#000;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 23%, rgba(0,0,0,1) 23%, rgba(14,8,8,1) 100%);\n}\n#div1::after{\n    width: 100px;\n    height: 100px;\n    \n    bottom:0;\n    left:50%;\n    background:#fff;\n    transform: translateX(-50%);  \n    border-radius: 50%;\n    border: none;\n    background: radial-gradient(circle, rgba(14,8,8,1) 0%, rgba(0,0,0,1) 22%, rgba(255,255,255,1) 22%, rgba(255,255,255,1) 100%); \n}\n\n"; //申明一个字符串 我用了比较好用反引号``  而且字符串中有缩进，有空格

var str2 = ""; //如何字符串的回车在html也变成回车（默认的直接压缩为一个空格）？
//1. str = str.replace('\n', '<br>') // 只能替换一个，第一个换行\n
//2 .正则表达式表示所有回车，但是会出现<然后消失  以为下一步’<b‘--“<br”--"<br>"时html解析出了这是一个标签 然后就把标签转义就看到<了 就变成了此处的换行
// str = str.replace(/\n/g, '<br>') //所以正则表达式也不行
// demo.innerHTML = n
// demo.innerHTML = str[n]
// demo.innerHTML = str.substring((0, n))

var css = document.querySelector("#css"); //setTimeout()只执行一次就结束了
// setTimeout(() => {
//     n = n + 1
//     demo.innerHTML = n
// }, 1000)
//用setInterval()
// setInterval(() => {
//     n = n + 1
//     demo.innerHTML = n
// }, 1000)
// setInterval(() => { demo.innerHTML = n + 1 }, 1000)
//这样就不行？？？？？？
//老手不用setInterval()用递归的setTimeout()
// setTimeout(() => {
//     n = n + 1
//     demo.innerHTML = n
//     setTimeout(() => {
//         n = n + 1
//         demo.innerHTML = n
//         setTimeout(() => {
//             n = n + 1
//             demo.innerHTML = n
//         }, 1000)
//     }, 1000)
// }, 1000)
//函数封装
// let step = () => {
//     setTimeout(() => {
//         n = n + 1
//         demo.innerHTML = n
//         step()
//     }, 500)
// }
// //大师调用法调用函数
// step.call(undefined)
//添加条件

var step = function step() {
  if (n < str.length) {
    setTimeout(function () {
      // str[n] === '\n' ? str2 + '<br>' : str2 + str[n]
      // str2 += str[n]; //这两行错误
      if (str[n] === "\n") {
        str2 += "<br>";
      } else if (str[n] === " ") {
        str2 += "&nbsp";
      } else {
        str2 += str[n];
      } // str2 += (str[n] === '\n' ? '<br>' : str[n])
      // demo.innerHTML = n
      // demo.innerHTML = str[n]
      // str2 += str[n]


      demo.innerHTML = str2; // demo.innerHTML = str.substring(0, n)
      // css.innerHTML = `body{color:#ff0000;}`

      css.innerHTML = str.substring(0, n); // css.innerHTML = str2 //这样写会在style出现html标签包含空格回车那种

      n = n + 1;
      window.scrollTo(0, 999999); //上下滚动， 那左右折行呢？

      html.scrollTo(0, 999999); //屏幕的没有滚动条的时候怎么让内容滚动
      // word -break: break-all 在哪添加这个属性
      // css.innerHTML = str.substring(0, n)
      // console.log(n)  console.log()调试大法

      step();
    }, 10);
  } else {}
}; //大师调用法调用函数


step.apply(null);
},{}],"../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59368" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map