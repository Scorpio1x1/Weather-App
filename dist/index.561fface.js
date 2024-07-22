// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aEZtW":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "770b8518561fface";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"a2PJv":[function(require,module,exports) {
// icon imports
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _clearDayPng = require("./icons/clear-day.png");
var _clearDayPngDefault = parcelHelpers.interopDefault(_clearDayPng);
var _clearNightPng = require("./icons/clear-night.png");
var _clearNightPngDefault = parcelHelpers.interopDefault(_clearNightPng);
var _cloudyPng = require("./icons/cloudy.png");
var _cloudyPngDefault = parcelHelpers.interopDefault(_cloudyPng);
var _fogPng = require("./icons/fog.png");
var _fogPngDefault = parcelHelpers.interopDefault(_fogPng);
var _hailPng = require("./icons/hail.png");
var _hailPngDefault = parcelHelpers.interopDefault(_hailPng);
var _partlyCloudyDayPng = require("./icons/partly-cloudy-day.png");
var _partlyCloudyDayPngDefault = parcelHelpers.interopDefault(_partlyCloudyDayPng);
var _partlyCloudyNightPng = require("./icons/partly-cloudy-night.png");
var _partlyCloudyNightPngDefault = parcelHelpers.interopDefault(_partlyCloudyNightPng);
var _rainSnowShowersDayPng = require("./icons/rain-snow-showers-day.png");
var _rainSnowShowersDayPngDefault = parcelHelpers.interopDefault(_rainSnowShowersDayPng);
var _rainSnowPng = require("./icons/rain-snow.png");
var _rainSnowPngDefault = parcelHelpers.interopDefault(_rainSnowPng);
var _rainPng = require("./icons/rain.png");
var _rainPngDefault = parcelHelpers.interopDefault(_rainPng);
var _showersDayPng = require("./icons/showers-day.png");
var _showersDayPngDefault = parcelHelpers.interopDefault(_showersDayPng);
var _showersNightPng = require("./icons/showers-night.png");
var _showersNightPngDefault = parcelHelpers.interopDefault(_showersNightPng);
var _sleetPng = require("./icons/sleet.png");
var _sleetPngDefault = parcelHelpers.interopDefault(_sleetPng);
var _snowShowersDayPng = require("./icons/snow-showers-day.png");
var _snowShowersDayPngDefault = parcelHelpers.interopDefault(_snowShowersDayPng);
var _snowShowersNightPng = require("./icons/snow-showers-night.png");
var _snowShowersNightPngDefault = parcelHelpers.interopDefault(_snowShowersNightPng);
var _snowPng = require("./icons/snow.png");
var _snowPngDefault = parcelHelpers.interopDefault(_snowPng);
var _thunderRainPng = require("./icons/thunder-rain.png");
var _thunderRainPngDefault = parcelHelpers.interopDefault(_thunderRainPng);
var _thunderShowersDayPng = require("./icons/thunder-showers-day.png");
var _thunderShowersDayPngDefault = parcelHelpers.interopDefault(_thunderShowersDayPng);
var _thunderShowersNightPng = require("./icons/thunder-showers-night.png");
var _thunderShowersNightPngDefault = parcelHelpers.interopDefault(_thunderShowersNightPng);
var _thunderPng = require("./icons/thunder.png");
var _thunderPngDefault = parcelHelpers.interopDefault(_thunderPng);
var _windPng = require("./icons/wind.png");
var _windPngDefault = parcelHelpers.interopDefault(_windPng);
var _config = require("./config");
var _geolocate = require("./geolocate");
var _geolocateDefault = parcelHelpers.interopDefault(_geolocate);
var _tempView = require("./views/tempView");
var _tempViewDefault = parcelHelpers.interopDefault(_tempView);
var _helpers = require("./helpers");
var _previewView = require("./views/previewView");
var _previewViewDefault = parcelHelpers.interopDefault(_previewView);
var _locationView = require("./views/locationView");
var _locationViewDefault = parcelHelpers.interopDefault(_locationView);
const iconArr = [
    [
        "clear-day",
        (0, _clearDayPngDefault.default)
    ],
    [
        "clear-night",
        (0, _clearNightPngDefault.default)
    ],
    [
        "cloudy",
        (0, _cloudyPngDefault.default)
    ],
    [
        "fog",
        (0, _fogPngDefault.default)
    ],
    [
        "hail",
        (0, _hailPngDefault.default)
    ],
    [
        "partly-cloudy-day",
        (0, _partlyCloudyDayPngDefault.default)
    ],
    [
        "partly-cloudy-night",
        (0, _partlyCloudyNightPngDefault.default)
    ],
    [
        "rain-snow-showers-day",
        (0, _rainSnowShowersDayPngDefault.default)
    ],
    [
        "rain-snow",
        (0, _rainSnowPngDefault.default)
    ],
    [
        "rain",
        (0, _rainPngDefault.default)
    ],
    [
        "showers-day",
        (0, _showersDayPngDefault.default)
    ],
    [
        "showers-night",
        (0, _showersNightPngDefault.default)
    ],
    [
        "sleet",
        (0, _sleetPngDefault.default)
    ],
    [
        "snow-showers-day",
        (0, _snowShowersDayPngDefault.default)
    ],
    [
        "snow-showers-night",
        (0, _snowShowersNightPngDefault.default)
    ],
    [
        "snow",
        (0, _snowPngDefault.default)
    ],
    [
        "thunder-rain",
        (0, _thunderRainPngDefault.default)
    ],
    [
        "thunder-showers-day",
        (0, _thunderShowersDayPngDefault.default)
    ],
    [
        "thunder-showers-night",
        (0, _thunderShowersNightPngDefault.default)
    ],
    [
        "thunder",
        (0, _thunderPngDefault.default)
    ],
    [
        "wind",
        (0, _windPngDefault.default)
    ]
];
//AJAX(`${API_URL}${geolocate._success.cords}`)
// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/38.9697,-77.385?key=YOUR_API_KEY 
let cords;
function getLocation() {
    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(showPosition);
    else console.log("Not");
}
function getCelcius(fTemp) {
    const cTemp = 5 / 9 * (fTemp - 32);
    const temp = Math.round(cTemp * 100) / 100;
    return temp;
}
async function showPosition(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    cords = [
        latitude,
        longitude
    ];
    console.log(cords);
    const data = await (0, _helpers.AJAX)(`${(0, _config.API_URL)}${cords[0]},${cords[1]}?${(0, _config.API_KEY)}`);
    console.log(data);
    const fTemp = +data.days[0].temp;
    const prevTemp1 = +data.days[1].temp;
    const prevTemp2 = +data.days[2].temp;
    const temp = getCelcius(fTemp);
    const temp2 = getCelcius(prevTemp1);
    const temp3 = getCelcius(prevTemp2);
    const date1 = data.days[1].datetime.slice(-2);
    const date2 = data.days[2].datetime.slice(-2);
    const imgEl = document.getElementById("imgs");
    //const prev1 = document.getElementById('day-1');
    //const prev2 = document.getElementById('day-2');
    let prev1, prev2;
    for(let i = 0; i < iconArr.length; i++)if (data.days[0].icon === iconArr[i][0]) imgEl.src = iconArr[i][1];
    for(let i = 0; i < iconArr.length; i++)if (data.days[1].icon === iconArr[i][0]) prev1 = iconArr[i][1];
    for(let i = 0; i < iconArr.length; i++)if (data.days[2].icon === iconArr[i][0]) prev2 = iconArr[i][1];
    // Preview day 1
    //imgEl.src = sunny;
    (0, _tempViewDefault.default).render(temp, data.description);
    (0, _locationViewDefault.default).render(data.timezone);
    (0, _previewViewDefault.default).render(prev1, prev2, date1, date2, temp2, temp3);
}
//console.log(cords)
const getTemp = async function() {
    await getLocation();
};
getTemp(); /*

*/ 

},{"./config":"bSr8D","./geolocate":"a95h1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/tempView":"7WOnk","./helpers":"9Ty9u","./views/locationView":"a317w","./icons/clear-day.png":"hQNWt","./icons/clear-night.png":"jSgmK","./icons/cloudy.png":"kHsDA","./icons/fog.png":"eRZSQ","./icons/hail.png":"9O9fK","./icons/partly-cloudy-day.png":"dOo9C","./icons/partly-cloudy-night.png":"u8Naa","./icons/rain-snow-showers-day.png":"eWVO8","./icons/rain-snow.png":"jYP8v","./icons/rain.png":"1Ba0D","./icons/showers-day.png":"ddjVS","./icons/showers-night.png":"loJsw","./icons/sleet.png":"dYwa0","./icons/snow-showers-day.png":"bUCz0","./icons/snow-showers-night.png":"8iTAm","./icons/snow.png":"DrjWT","./icons/thunder-rain.png":"lhA2X","./icons/thunder-showers-day.png":"hmdUa","./icons/thunder-showers-night.png":"32Z9W","./icons/wind.png":"ifFIC","./icons/thunder.png":"fHJ0X","./views/previewView":"8WEK2"}],"bSr8D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ `;
const API_KEY = `key=6KYRFS2ZFMDND4YKEL8WCE3RF`;
const TIMEOUT_SEC = 5000;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"a95h1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("./config");
var _helpers = require("./helpers");
var _tempView = require("./views/tempView");
var _tempViewDefault = parcelHelpers.interopDefault(_tempView);
class geolocate {
}
exports.default = new geolocate();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./helpers":"9Ty9u","./config":"bSr8D","./views/tempView":"7WOnk"}],"9Ty9u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
var _config = require("./config");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const AJAX = async function(url, uploadData) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./config":"bSr8D"}],"7WOnk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class tempView {
    _parentElement = document.querySelector(".temp");
    _markup(temp, description) {
        return `
                <h1>${temp} C</h1>
                <p>${description}</p>
        `;
    }
    render(temp, description = "") {
        this._parentElement.insertAdjacentHTML("beforeend", this._markup(temp, description));
    }
}
exports.default = new tempView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a317w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class locationView {
    _parentElement = document.querySelector(".city");
    _markup(name) {
        return `
                <h1>${name}</h1>
        `;
    }
    render(name) {
        this._parentElement.insertAdjacentHTML("beforeend", this._markup(name));
    }
}
exports.default = new locationView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hQNWt":[function(require,module,exports) {
module.exports = require("a395bf8185b88551").getBundleURL("adFLR") + "clear-day.f8c6c529.png" + "?" + Date.now();

},{"a395bf8185b88551":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"jSgmK":[function(require,module,exports) {
module.exports = require("e90fe895d4f01ced").getBundleURL("adFLR") + "clear-night.bf8f6455.png" + "?" + Date.now();

},{"e90fe895d4f01ced":"lgJ39"}],"kHsDA":[function(require,module,exports) {
module.exports = require("1f226ba39466626").getBundleURL("adFLR") + "cloudy.b00a975a.png" + "?" + Date.now();

},{"1f226ba39466626":"lgJ39"}],"eRZSQ":[function(require,module,exports) {
module.exports = require("5f635b5dad7e03d3").getBundleURL("adFLR") + "fog.6379bc4f.png" + "?" + Date.now();

},{"5f635b5dad7e03d3":"lgJ39"}],"9O9fK":[function(require,module,exports) {
module.exports = require("45b810f021bf2f3d").getBundleURL("adFLR") + "hail.6c049fdd.png" + "?" + Date.now();

},{"45b810f021bf2f3d":"lgJ39"}],"dOo9C":[function(require,module,exports) {
module.exports = require("ad69ffa449b47d4c").getBundleURL("adFLR") + "partly-cloudy-day.52681c36.png" + "?" + Date.now();

},{"ad69ffa449b47d4c":"lgJ39"}],"u8Naa":[function(require,module,exports) {
module.exports = require("7f29f6de8815cf42").getBundleURL("adFLR") + "partly-cloudy-night.ad24c7ca.png" + "?" + Date.now();

},{"7f29f6de8815cf42":"lgJ39"}],"eWVO8":[function(require,module,exports) {
module.exports = require("52f73299b7fe7733").getBundleURL("adFLR") + "rain-snow-showers-day.34e06d4e.png" + "?" + Date.now();

},{"52f73299b7fe7733":"lgJ39"}],"jYP8v":[function(require,module,exports) {
module.exports = require("82c449bb94d71e4d").getBundleURL("adFLR") + "rain-snow.8747a3d2.png" + "?" + Date.now();

},{"82c449bb94d71e4d":"lgJ39"}],"1Ba0D":[function(require,module,exports) {
module.exports = require("63b9e020ac370b8f").getBundleURL("adFLR") + "rain.982fa059.png" + "?" + Date.now();

},{"63b9e020ac370b8f":"lgJ39"}],"ddjVS":[function(require,module,exports) {
module.exports = require("dac6ff0f24ee3fa6").getBundleURL("adFLR") + "showers-day.88371dbd.png" + "?" + Date.now();

},{"dac6ff0f24ee3fa6":"lgJ39"}],"loJsw":[function(require,module,exports) {
module.exports = require("3ff412e71e9382a3").getBundleURL("adFLR") + "showers-night.fe469c1b.png" + "?" + Date.now();

},{"3ff412e71e9382a3":"lgJ39"}],"dYwa0":[function(require,module,exports) {
module.exports = require("57474f4f3b252ab1").getBundleURL("adFLR") + "sleet.0614a540.png" + "?" + Date.now();

},{"57474f4f3b252ab1":"lgJ39"}],"bUCz0":[function(require,module,exports) {
module.exports = require("19e5f2c54fa50cda").getBundleURL("adFLR") + "snow-showers-day.cd58bd40.png" + "?" + Date.now();

},{"19e5f2c54fa50cda":"lgJ39"}],"8iTAm":[function(require,module,exports) {
module.exports = require("29f49c2ae633c340").getBundleURL("adFLR") + "snow-showers-night.2deed7b2.png" + "?" + Date.now();

},{"29f49c2ae633c340":"lgJ39"}],"DrjWT":[function(require,module,exports) {
module.exports = require("fb07a84347a48b4e").getBundleURL("adFLR") + "snow.48f6e6ee.png" + "?" + Date.now();

},{"fb07a84347a48b4e":"lgJ39"}],"lhA2X":[function(require,module,exports) {
module.exports = require("a4bc2f2380017fb").getBundleURL("adFLR") + "thunder-rain.0d7a66ba.png" + "?" + Date.now();

},{"a4bc2f2380017fb":"lgJ39"}],"hmdUa":[function(require,module,exports) {
module.exports = require("2588eb11363f1de7").getBundleURL("adFLR") + "thunder-showers-day.0a5ca135.png" + "?" + Date.now();

},{"2588eb11363f1de7":"lgJ39"}],"32Z9W":[function(require,module,exports) {
module.exports = require("5f8bdd395f1b1b79").getBundleURL("adFLR") + "thunder-showers-night.0b97003e.png" + "?" + Date.now();

},{"5f8bdd395f1b1b79":"lgJ39"}],"ifFIC":[function(require,module,exports) {
module.exports = require("13bcc5b63f36101").getBundleURL("adFLR") + "wind.4e3fa4f4.png" + "?" + Date.now();

},{"13bcc5b63f36101":"lgJ39"}],"fHJ0X":[function(require,module,exports) {
module.exports = require("6849af030df8b4ce").getBundleURL("adFLR") + "thunder.854839bf.png" + "?" + Date.now();

},{"6849af030df8b4ce":"lgJ39"}],"8WEK2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class previewView {
    _parentEl = document.querySelector(".weather--preview");
    _markup(icon1, icon2, date1, date2, temp1, temp2) {
        return `
            <div class="day-1">
                    <img src="${icon1}">
                    <h1>${date1}</h1>
                    <p>${temp1} C</p>
                </div>
                <div class="day-2">
                    <img src="${icon2}">
                    <h1>${date2}</h1>
                    <p>${temp2} C</p>
                </div>
        `;
    }
    render(icon1, icon2, date1, date2, temp1, temp2) {
        this._parentEl.insertAdjacentHTML("beforeend", this._markup(icon1, icon2, date1, date2, temp1, temp2));
    }
}
exports.default = new previewView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aEZtW","a2PJv"], "a2PJv", "parcelRequirebbde")

//# sourceMappingURL=index.561fface.js.map
