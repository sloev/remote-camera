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
})({"km5uZ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
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

},{}],"bB7Pu":[function(require,module,exports) {
var _trystero = require("trystero");
let room, sendPic, getPic, sendCameraSettings, getCameraSettings, setZoom, getZoom, takePictureEvent, getTakePictureEvent;
const settings = {
    roomId: null,
    isCamera: false
};
function serialize(data) {
    return encodeURIComponent(JSON.stringify(data)); // use something better
}
// helper function to turn a string back into an object
// note: this is dumb and easy and not a good idea, just an example
function deserialize(string) {
    console.log("s", string);
    try {
        return JSON.parse(decodeURIComponent(string)); // use something better
    } catch (err) {
        // lol the URL was shit probably
        console.error("derp!", err);
        return undefined;
    }
}
// every time the user does something, save the new state to the URL
function save_new_state() {
    // a temp data object to serialize
    // serialize the data and save behind the url's #
    window.location.hash = serialize(settings);
// show the current url in a readonly text field
}
// every time the page loads, see if some state came with it
async function load_state() {
    room && room.leave();
    room = null;
    // will hold data if there is any
    var data;
    // get the current url hash (behind the #)
    var url_hash = window.location.hash.substring(1);
    console.log("hash on page load is", url_hash); // debug in dev
    // check for and apply state if any is present
    if (url_hash !== undefined && url_hash !== "") {
        console.log("whoa"); // we found shit
        // try turning the hash string into data
        data = deserialize(url_hash);
        console.log("got data:", data);
        if (data === undefined) return; // nope, nothing here
        // do we see what we'd expect?
        if (data.roomId !== undefined) {
            settings.roomId = data.roomId;
            roomIdInput.value = settings.roomId;
            room = (0, _trystero.joinRoom)({
                appId: "lolcat"
            }, roomId);
            [sendPic, getPic] = room.makeAction("pic");
            [setZoom, getZoom] = room.makeAction("zoom");
            [takePictureEvent, getTakePictureEvent] = room.makeAction("takepic");
            [sendCameraSettings, getCameraSettings] = room.makeAction("settings");
            console.log(room);
        }
        if (data.isCamera !== undefined) {
            settings.isCamera = data.isCamera;
            isCameraInput.checked = settings.isCamera;
        }
        if (settings.isCamera) navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
        }).then((selfStream)=>{
            const [track] = selfStream.getVideoTracks();
            const capabilities = track.getCapabilities();
            const settings = track.getSettings();
            if (!("zoom" in settings)) ;
            else {
                sendCameraSettings({
                    min: capabilities.zoom.min,
                    max: capabilities.zoom.max,
                    step: capabilities.zoom.step,
                    value: settings.zoom
                });
                getZoom((data, peerId)=>{
                    console.log("got zoom level", data);
                    track.applyConstraints({
                        advanced: [
                            {
                                zoom: data.zoomLevel
                            }
                        ]
                    });
                });
            }
            imageCapture = new ImageCapture(track);
            getTakePictureEvent(()=>{
                imageCapture.takePhoto().then((blob)=>{
                    sendPic(blob);
                }).catch(error);
            });
            room.addStream(selfStream);
            room.onPeerJoin((peerId)=>room.addStream(selfStream, peerId));
        });
        else {
            getCameraSettings((data, peerId)=>{
                zoomInput.min = data.min;
                zoomInput.max = data.max;
                zoomInput.step = data.step;
                zoomInput.value = data.value;
            });
            getPic((data, peerID)=>{
                const fileUrl = window.URL.createObjectURL(new Blob([
                    data
                ]));
                const anchorElement = document.createElement("a");
                anchorElement.href = fileUrl;
                anchorElement.download = "img.jpg";
                anchorElement.style.display = "none";
                document.body.appendChild(anchorElement);
                anchorElement.click();
                anchorElement.remove();
                window.URL.revokeObjectURL(fileUrl);
            });
            room.onPeerStream((stream, peerId)=>{
                console.log("got video from peer:", peerId);
                video.srcObject = stream;
                video.addEventListener("loadedmetadata", ()=>{
                    video.play();
                });
            });
        }
    }
// update the url text field for dummies
}
const takePicture = ()=>{
    console.log("take picture");
    takePictureEvent({});
};
const changeZoom = (e)=>{
    var zoomLevel = e.target.value;
    console.log("change zoom", zoomLevel);
    setZoom({
        zoomLevel: zoomLevel
    });
};
var form = document.getElementById("form");
var zoomInput = document.getElementById("zoom");
var shootInput = document.getElementById("shoot");
zoomInput.onchange = changeZoom;
shootInput.onclick = takePicture;
var roomIdInput = document.getElementById("roomId");
var isCameraInput = document.getElementById("isCamera");
const video = document.getElementById("camera");
form.onsubmit = function(event) {
    event.preventDefault();
    var formdata = new FormData(form);
    var data = Object.fromEntries(formdata);
    settings.roomId = data.roomId;
    settings.isCamera = data.isCamera ? true : false;
    console.log(settings, data);
    save_new_state();
    location.reload();
    return false;
};
load_state();

},{"trystero":"bHelM"}],"bHelM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRelaySockets", ()=>(0, _torrentJs.getRelaySockets));
parcelHelpers.export(exports, "joinRoom", ()=>(0, _torrentJs.joinRoom));
parcelHelpers.export(exports, "selfId", ()=>(0, _torrentJs.selfId));
var _torrentJs = require("./torrent.js");

},{"./torrent.js":"iHOZI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iHOZI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "selfId", ()=>(0, _utilsJs.selfId));
parcelHelpers.export(exports, "joinRoom", ()=>joinRoom);
parcelHelpers.export(exports, "getRelaySockets", ()=>getRelaySockets);
var _roomJs = require("./room.js");
var _roomJsDefault = parcelHelpers.interopDefault(_roomJs);
var _utilsJs = require("./utils.js");
var _cryptoJs = require("./crypto.js");
const occupiedRooms = {};
const socketPromises = {};
const sockets = {};
const socketRetryTimeouts = {};
const socketListeners = {};
const hashLimit = 20;
const offerPoolSize = 10;
const defaultRedundancy = 3;
const defaultAnnounceSecs = 33;
const maxAnnounceSecs = 120;
const trackerRetrySecs = 4;
const trackerAction = "announce";
const defaultRelayUrls = [
    "wss://tracker.webtorrent.dev",
    "wss://tracker.openwebtorrent.com",
    "wss://tracker.files.fm:7073/announce",
    "wss://tracker.btorrent.xyz"
];
const joinRoom = (0, _utilsJs.initGuard)(occupiedRooms, (config, ns)=>{
    if (config.trackerUrls || config.trackerRedundancy) throw (0, _utilsJs.mkErr)("trackerUrls/trackerRedundancy have been replaced by relayUrls/relayRedundancy");
    const connectedPeers = {};
    const key = config.password && (0, _cryptoJs.genKey)(config.password, ns);
    const relayUrls = (0, _utilsJs.getRelays)(config, defaultRelayUrls, defaultRedundancy);
    const infoHashP = crypto.subtle.digest("SHA-1", (0, _utilsJs.encodeBytes)(`${(0, _utilsJs.libName)}:${config.appId}:${ns}`)).then((buffer)=>Array.from(new Uint8Array(buffer)).map((b)=>b.toString(36)).join("").slice(0, hashLimit));
    const makeOffers = (howMany)=>(0, _utilsJs.fromEntries)(Array(howMany).fill().map(()=>{
            const peer = (0, _utilsJs.initPeer)(true, false, config.rtcConfig);
            return [
                (0, _utilsJs.genId)(hashLimit),
                {
                    peer,
                    offerP: new Promise((res)=>peer.once((0, _utilsJs.events).signal, res))
                }
            ];
        }));
    const onSocketMessage = async (socket, e)=>{
        const infoHash = await infoHashP;
        let val;
        try {
            val = JSON.parse(e.data);
        } catch (e) {
            console.error(`${(0, _utilsJs.libName)}: received malformed SDP JSON`);
            return;
        }
        if (val.info_hash !== infoHash || val.peer_id && val.peer_id === (0, _utilsJs.selfId)) return;
        const errMsg = val["failure reason"];
        if (errMsg) {
            console.warn(`${(0, _utilsJs.libName)}: torrent tracker failure from ${socket.url} - ${errMsg}`);
            return;
        }
        if (val.interval && val.interval > announceSecs && val.interval <= maxAnnounceSecs) {
            clearInterval(announceInterval);
            announceSecs = val.interval;
            announceInterval = setInterval(announceAll, announceSecs * 1000);
        }
        if (val.offer && val.offer_id) {
            if (connectedPeers[val.peer_id] || handledOffers[val.offer_id]) return;
            handledOffers[val.offer_id] = true;
            const peer = (0, _utilsJs.initPeer)(false, false, config.rtcConfig);
            peer.once((0, _utilsJs.events).signal, async (answer)=>socket.send(JSON.stringify({
                    answer: key ? {
                        ...answer,
                        sdp: await (0, _cryptoJs.encrypt)(key, answer.sdp)
                    } : answer,
                    action: trackerAction,
                    info_hash: infoHash,
                    peer_id: (0, _utilsJs.selfId),
                    to_peer_id: val.peer_id,
                    offer_id: val.offer_id
                })));
            peer.on((0, _utilsJs.events).connect, ()=>onConnect(peer, val.peer_id));
            peer.on((0, _utilsJs.events).close, ()=>onDisconnect(peer, val.peer_id, val.offer_id));
            peer.signal(key ? {
                ...val.offer,
                sdp: await (0, _cryptoJs.decrypt)(key, val.offer.sdp)
            } : val.offer);
            return;
        }
        if (val.answer) {
            if (connectedPeers[val.peer_id] || handledOffers[val.offer_id]) return;
            const offer = offerPool[val.offer_id];
            if (offer) {
                const { peer } = offer;
                if (peer.destroyed) return;
                handledOffers[val.offer_id] = true;
                peer.on((0, _utilsJs.events).connect, ()=>onConnect(peer, val.peer_id, val.offer_id));
                peer.on((0, _utilsJs.events).close, ()=>onDisconnect(peer, val.peer_id, val.offer_id));
                peer.signal(key ? {
                    ...val.answer,
                    sdp: await (0, _cryptoJs.decrypt)(key, val.answer.sdp)
                } : val.answer);
            }
        }
    };
    const announce = async (socket, infoHash)=>socket.send(JSON.stringify({
            action: trackerAction,
            info_hash: infoHash,
            numwant: offerPoolSize,
            peer_id: (0, _utilsJs.selfId),
            offers: await Promise.all((0, _utilsJs.entries)(offerPool).map(async ([id, { offerP }])=>{
                const offer = await offerP;
                return {
                    offer_id: id,
                    offer: key ? {
                        ...offer,
                        sdp: await (0, _cryptoJs.encrypt)(key, offer.sdp)
                    } : offer
                };
            }))
        }));
    const makeSocket = (url, infoHash, forced)=>{
        if (forced || !socketPromises[url]) {
            socketListeners[url] = {
                ...socketListeners[url],
                [infoHash]: onSocketMessage
            };
            socketPromises[url] = new Promise((res)=>{
                const socket = new WebSocket(url);
                sockets[url] = socket;
                socket.addEventListener("open", ()=>{
                    // Reset the retry timeout for this tracker
                    socketRetryTimeouts[url] = trackerRetrySecs * 1000;
                    res(socket);
                });
                socket.addEventListener("message", (e)=>(0, _utilsJs.values)(socketListeners[url]).forEach((f)=>f(socket, e)));
                socket.addEventListener("close", async ()=>{
                    socketRetryTimeouts[url] = socketRetryTimeouts[url] ?? trackerRetrySecs * 1000;
                    await (0, _utilsJs.sleep)(socketRetryTimeouts[url]);
                    socketRetryTimeouts[url] *= 2;
                    makeSocket(url, infoHash, true);
                });
            });
        } else socketListeners[url][infoHash] = onSocketMessage;
        return socketPromises[url];
    };
    const announceAll = async ()=>{
        const infoHash = await infoHashP;
        if (offerPool) cleanPool();
        offerPool = makeOffers(offerPoolSize);
        relayUrls.forEach(async (url)=>{
            const socket = await makeSocket(url, infoHash);
            if (socket.readyState === WebSocket.OPEN) announce(socket, infoHash);
            else if (socket.readyState !== WebSocket.CONNECTING) announce(await makeSocket(url, infoHash, true), infoHash);
        });
    };
    const cleanPool = ()=>{
        (0, _utilsJs.entries)(offerPool).forEach(([id, { peer }])=>{
            if (!handledOffers[id] && !connectedPeers[id]) peer.destroy();
        });
        handledOffers = {};
    };
    const onConnect = (peer, id, offerId)=>{
        onPeerConnect(peer, id);
        connectedPeers[id] = true;
        if (offerId) connectedPeers[offerId] = true;
    };
    const onDisconnect = (peer, peerId, offerId)=>{
        delete connectedPeers[peerId];
        peer.destroy();
        const isInOfferPool = offerId in offerPool;
        if (isInOfferPool) {
            delete offerPool[offerId];
            offerPool = {
                ...offerPool,
                ...makeOffers(1)
            };
        }
    };
    let announceSecs = defaultAnnounceSecs;
    let announceInterval = setInterval(announceAll, announceSecs * 1000);
    let onPeerConnect = (0, _utilsJs.noOp);
    let handledOffers = {};
    let offerPool;
    announceAll();
    return (0, _roomJsDefault.default)((f)=>onPeerConnect = f, async ()=>{
        const infoHash = await infoHashP;
        relayUrls.forEach((url)=>delete socketListeners[url][infoHash]);
        delete occupiedRooms[ns];
        clearInterval(announceInterval);
        cleanPool();
    });
});
const getRelaySockets = ()=>({
        ...sockets
    });

},{"./room.js":"czT5Z","./utils.js":"5JQ7k","./crypto.js":"6N7Kp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"czT5Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
const TypedArray = Object.getPrototypeOf(Uint8Array);
const typeByteLimit = 12;
const typeIndex = 0;
const nonceIndex = typeIndex + typeByteLimit;
const tagIndex = nonceIndex + 1;
const progressIndex = tagIndex + 1;
const payloadIndex = progressIndex + 1;
const chunkSize = 16384 - payloadIndex;
const oneByteMax = 0xff;
const buffLowEvent = "bufferedamountlow";
exports.default = (onPeer, onSelfLeave)=>{
    const peerMap = {};
    const actions = {};
    const pendingTransmissions = {};
    const pendingPongs = {};
    const pendingStreamMetas = {};
    const pendingTrackMetas = {};
    const iterate = (targets, f)=>(targets ? Array.isArray(targets) ? targets : [
            targets
        ] : (0, _utilsJs.keys)(peerMap)).flatMap((id)=>{
            const peer = peerMap[id];
            if (!peer) {
                console.warn(`${(0, _utilsJs.libName)}: no peer with id ${id} found`);
                return [];
            }
            return f(id, peer);
        });
    const exitPeer = (id)=>{
        if (!peerMap[id]) return;
        delete peerMap[id];
        delete pendingTransmissions[id];
        delete pendingPongs[id];
        onPeerLeave(id);
    };
    const makeAction = (type)=>{
        if (actions[type]) return [
            actions[type].send,
            actions[type].setOnComplete,
            actions[type].setOnProgress
        ];
        if (!type) throw (0, _utilsJs.mkErr)("action type argument is required");
        const typeBytes = (0, _utilsJs.encodeBytes)(type);
        if (typeBytes.byteLength > typeByteLimit) throw (0, _utilsJs.mkErr)(`action type string "${type}" (${typeBytes.byteLength}b) exceeds ` + `byte limit (${typeByteLimit}). Hint: choose a shorter name.`);
        const typeBytesPadded = new Uint8Array(typeByteLimit);
        typeBytesPadded.set(typeBytes);
        let nonce = 0;
        actions[type] = {
            onComplete: (0, _utilsJs.noOp),
            onProgress: (0, _utilsJs.noOp),
            setOnComplete: (f)=>actions[type] = {
                    ...actions[type],
                    onComplete: f
                },
            setOnProgress: (f)=>actions[type] = {
                    ...actions[type],
                    onProgress: f
                },
            send: async (data, targets, meta, onProgress)=>{
                if (meta && typeof meta !== "object") throw (0, _utilsJs.mkErr)("action meta argument must be an object");
                if (data === undefined) throw (0, _utilsJs.mkErr)("action data cannot be undefined");
                const isJson = typeof data !== "string";
                const isBlob = data instanceof Blob;
                const isBinary = isBlob || data instanceof ArrayBuffer || data instanceof TypedArray;
                if (meta && !isBinary) throw (0, _utilsJs.mkErr)("action meta argument can only be used with binary data");
                const buffer = isBinary ? new Uint8Array(isBlob ? await data.arrayBuffer() : data) : (0, _utilsJs.encodeBytes)(isJson ? JSON.stringify(data) : data);
                const metaEncoded = meta ? (0, _utilsJs.encodeBytes)(JSON.stringify(meta)) : null;
                const chunkTotal = Math.ceil(buffer.byteLength / chunkSize) + (meta ? 1 : 0) || 1;
                const chunks = Array(chunkTotal).fill().map((_, i)=>{
                    const isLast = i === chunkTotal - 1;
                    const isMeta = meta && i === 0;
                    const chunk = new Uint8Array(payloadIndex + (isMeta ? metaEncoded.byteLength : isLast ? buffer.byteLength - chunkSize * (chunkTotal - (meta ? 2 : 1)) : chunkSize));
                    chunk.set(typeBytesPadded);
                    chunk.set([
                        nonce
                    ], nonceIndex);
                    chunk.set([
                        isLast | isMeta << 1 | isBinary << 2 | isJson << 3
                    ], tagIndex);
                    chunk.set([
                        Math.round((i + 1) / chunkTotal * oneByteMax)
                    ], progressIndex);
                    chunk.set(meta ? isMeta ? metaEncoded : buffer.subarray((i - 1) * chunkSize, i * chunkSize) : buffer.subarray(i * chunkSize, (i + 1) * chunkSize), payloadIndex);
                    return chunk;
                });
                nonce = nonce + 1 & oneByteMax;
                return Promise.all(iterate(targets, async (id, peer)=>{
                    const chan = peer._channel;
                    let chunkN = 0;
                    while(chunkN < chunkTotal){
                        const chunk = chunks[chunkN];
                        if (chan.bufferedAmount > chan.bufferedAmountLowThreshold) await new Promise((res)=>{
                            const next = ()=>{
                                chan.removeEventListener(buffLowEvent, next);
                                res();
                            };
                            chan.addEventListener(buffLowEvent, next);
                        });
                        if (!peerMap[id]) break;
                        peer.send(chunk);
                        chunkN++;
                        if (onProgress) onProgress(chunk[progressIndex] / oneByteMax, id, meta);
                    }
                }));
            }
        };
        return [
            actions[type].send,
            actions[type].setOnComplete,
            actions[type].setOnProgress
        ];
    };
    const handleData = (id, data)=>{
        const buffer = new Uint8Array(data);
        const type = (0, _utilsJs.decodeBytes)(buffer.subarray(typeIndex, nonceIndex)).replaceAll("\0", "");
        const [nonce] = buffer.subarray(nonceIndex, tagIndex);
        const [tag] = buffer.subarray(tagIndex, progressIndex);
        const [progress] = buffer.subarray(progressIndex, payloadIndex);
        const payload = buffer.subarray(payloadIndex);
        const isLast = !!(tag & 1);
        const isMeta = !!(tag & 2);
        const isBinary = !!(tag & 4);
        const isJson = !!(tag & 8);
        if (!actions[type]) throw (0, _utilsJs.mkErr)(`received message with unregistered type (${type})`);
        if (!pendingTransmissions[id]) pendingTransmissions[id] = {};
        if (!pendingTransmissions[id][type]) pendingTransmissions[id][type] = {};
        let target = pendingTransmissions[id][type][nonce];
        if (!target) target = pendingTransmissions[id][type][nonce] = {
            chunks: []
        };
        if (isMeta) target.meta = JSON.parse((0, _utilsJs.decodeBytes)(payload));
        else target.chunks.push(payload);
        actions[type].onProgress(progress / oneByteMax, id, target.meta);
        if (!isLast) return;
        const full = new Uint8Array(target.chunks.reduce((a, c)=>a + c.byteLength, 0));
        target.chunks.reduce((a, c)=>{
            full.set(c, a);
            return a + c.byteLength;
        }, 0);
        if (isBinary) actions[type].onComplete(full, id, target.meta);
        else {
            const text = (0, _utilsJs.decodeBytes)(full);
            actions[type].onComplete(isJson ? JSON.parse(text) : text, id);
        }
        delete pendingTransmissions[id][type][nonce];
    };
    const [sendPing, getPing] = makeAction("__91n6__");
    const [sendPong, getPong] = makeAction("__90n6__");
    const [sendSignal, getSignal] = makeAction("__516n4L__");
    const [sendStreamMeta, getStreamMeta] = makeAction("__57r34m__");
    const [sendTrackMeta, getTrackMeta] = makeAction("__7r4ck__");
    let onPeerJoin = (0, _utilsJs.noOp);
    let onPeerLeave = (0, _utilsJs.noOp);
    let onPeerStream = (0, _utilsJs.noOp);
    let onPeerTrack = (0, _utilsJs.noOp);
    onPeer((peer, id)=>{
        if (peerMap[id]) return;
        const onData = handleData.bind(null, id);
        peerMap[id] = peer;
        peer.on((0, _utilsJs.events).signal, (sdp)=>sendSignal(sdp, id));
        peer.on((0, _utilsJs.events).close, ()=>exitPeer(id));
        peer.on((0, _utilsJs.events).data, onData);
        peer.on((0, _utilsJs.events).stream, (stream)=>{
            onPeerStream(stream, id, pendingStreamMetas[id]);
            delete pendingStreamMetas[id];
        });
        peer.on((0, _utilsJs.events).track, (track, stream)=>{
            onPeerTrack(track, stream, id, pendingTrackMetas[id]);
            delete pendingTrackMetas[id];
        });
        peer.on((0, _utilsJs.events).error, (e)=>{
            if (e.code === "ERR_DATA_CHANNEL") return;
            console.error(e);
        });
        onPeerJoin(id);
        peer.__drainEarlyData(onData);
    });
    getPing((_, id)=>sendPong("", id));
    getPong((_, id)=>{
        if (pendingPongs[id]) {
            pendingPongs[id]();
            delete pendingPongs[id];
        }
    });
    getSignal((sdp, id)=>{
        if (peerMap[id]) peerMap[id].signal(sdp);
    });
    getStreamMeta((meta, id)=>pendingStreamMetas[id] = meta);
    getTrackMeta((meta, id)=>pendingTrackMetas[id] = meta);
    return {
        makeAction,
        ping: async (id)=>{
            if (!id) throw (0, _utilsJs.mkErr)("ping() must be called with target peer ID");
            const start = Date.now();
            sendPing("", id);
            await new Promise((res)=>pendingPongs[id] = res);
            return Date.now() - start;
        },
        leave: ()=>{
            (0, _utilsJs.entries)(peerMap).forEach(([id, peer])=>{
                peer.destroy();
                delete peerMap[id];
            });
            onSelfLeave();
        },
        getPeers: ()=>(0, _utilsJs.fromEntries)((0, _utilsJs.entries)(peerMap).map(([id, peer])=>[
                    id,
                    peer._pc
                ])),
        addStream: (stream, targets, meta)=>iterate(targets, async (id, peer)=>{
                if (meta) await sendStreamMeta(meta, id);
                peer.addStream(stream);
            }),
        removeStream: (stream, targets)=>iterate(targets, (_, peer)=>peer.removeStream(stream)),
        addTrack: (track, stream, targets, meta)=>iterate(targets, async (id, peer)=>{
                if (meta) await sendTrackMeta(meta, id);
                peer.addTrack(track, stream);
            }),
        removeTrack: (track, stream, targets)=>iterate(targets, (_, peer)=>peer.removeTrack(track, stream)),
        replaceTrack: (oldTrack, newTrack, stream, targets, meta)=>iterate(targets, async (id, peer)=>{
                if (meta) await sendTrackMeta(meta, id);
                peer.replaceTrack(oldTrack, newTrack, stream);
            }),
        onPeerJoin: (f)=>onPeerJoin = f,
        onPeerLeave: (f)=>onPeerLeave = f,
        onPeerStream: (f)=>onPeerStream = f,
        onPeerTrack: (f)=>onPeerTrack = f
    };
};

},{"./utils.js":"5JQ7k","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5JQ7k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPeer", ()=>initPeer);
parcelHelpers.export(exports, "genId", ()=>genId);
parcelHelpers.export(exports, "initGuard", ()=>initGuard);
parcelHelpers.export(exports, "libName", ()=>libName);
parcelHelpers.export(exports, "selfId", ()=>selfId);
parcelHelpers.export(exports, "keys", ()=>keys);
parcelHelpers.export(exports, "values", ()=>values);
parcelHelpers.export(exports, "entries", ()=>entries);
parcelHelpers.export(exports, "fromEntries", ()=>fromEntries);
parcelHelpers.export(exports, "noOp", ()=>noOp);
parcelHelpers.export(exports, "mkErr", ()=>mkErr);
parcelHelpers.export(exports, "encodeBytes", ()=>encodeBytes);
parcelHelpers.export(exports, "decodeBytes", ()=>decodeBytes);
parcelHelpers.export(exports, "toHex", ()=>toHex);
parcelHelpers.export(exports, "events", ()=>events);
parcelHelpers.export(exports, "getRelays", ()=>getRelays);
parcelHelpers.export(exports, "sleep", ()=>sleep);
var _simplePeerLight = require("simple-peer-light");
var _simplePeerLightDefault = parcelHelpers.interopDefault(_simplePeerLight);
const charSet = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
const initPeer = (initiator, trickle, config)=>{
    const peer = new (0, _simplePeerLightDefault.default)({
        initiator,
        trickle,
        config
    });
    const onData = (data)=>peer.__earlyDataBuffer.push(data);
    peer.on(events.data, onData);
    peer.__earlyDataBuffer = [];
    peer.__drainEarlyData = (f)=>{
        peer.off(events.data, onData);
        peer.__earlyDataBuffer.forEach(f);
        delete peer.__earlyDataBuffer;
        delete peer.__drainEarlyData;
    };
    return peer;
};
const genId = (n)=>Array(n).fill().map(()=>charSet[Math.floor(Math.random() * charSet.length)]).join("");
const initGuard = (occupiedRooms, f)=>(config, ns)=>{
        if (occupiedRooms[ns]) return occupiedRooms[ns];
        if (!config) throw mkErr("requires a config map as the first argument");
        if (!config.appId && !config.firebaseApp) throw mkErr("config map is missing appId field");
        if (!ns) throw mkErr("namespace argument required");
        return occupiedRooms[ns] = f(config, ns);
    };
const libName = "Trystero";
const selfId = genId(20);
const { keys, values, entries, fromEntries } = Object;
const noOp = ()=>{};
const mkErr = (msg)=>new Error(`${libName}: ${msg}`);
const encodeBytes = (txt)=>new TextEncoder().encode(txt);
const decodeBytes = (buffer)=>new TextDecoder().decode(buffer);
const toHex = (buffer)=>buffer.reduce((a, c)=>a + c.toString(16).padStart(2, "0"), "");
const events = fromEntries([
    "close",
    "connect",
    "data",
    "error",
    "signal",
    "stream",
    "track"
].map((k)=>[
        k,
        k
    ]));
const getRelays = (config, defaults, defaultN)=>(config.relayUrls || defaults).slice(0, config.relayUrls ? config.relayUrls.length : config.relayRedundancy || defaultN);
const sleep = (ms)=>new Promise((res)=>setTimeout(res, ms));

},{"simple-peer-light":"YMCyP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"YMCyP":[function(require,module,exports) {
/*! simple-peer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const MAX_BUFFERED_AMOUNT = 65536;
const ICECOMPLETE_TIMEOUT = 5000;
const CHANNEL_CLOSING_TIMEOUT = 5000;
function randombytes(size) {
    const array = new Uint8Array(size);
    for(let i = 0; i < size; i++)array[i] = Math.random() * 256 | 0;
    return array;
}
function getBrowserRTC() {
    if (typeof globalThis === "undefined") return null;
    const wrtc = {
        RTCPeerConnection: globalThis.RTCPeerConnection || globalThis.mozRTCPeerConnection || globalThis.webkitRTCPeerConnection,
        RTCSessionDescription: globalThis.RTCSessionDescription || globalThis.mozRTCSessionDescription || globalThis.webkitRTCSessionDescription,
        RTCIceCandidate: globalThis.RTCIceCandidate || globalThis.mozRTCIceCandidate || globalThis.webkitRTCIceCandidate
    };
    if (!wrtc.RTCPeerConnection) return null;
    return wrtc;
}
function errCode(err, code) {
    Object.defineProperty(err, "code", {
        value: code,
        enumerable: true,
        configurable: true
    });
    return err;
}
// HACK: Filter trickle lines when trickle is disabled #354
function filterTrickle(sdp) {
    return sdp.replace(/a=ice-options:trickle\s\n/g, "");
}
function warn(message) {
    console.warn(message);
}
/**
 * WebRTC peer connection.
 * @param {Object} opts
 */ class Peer {
    constructor(opts = {}){
        this._map = new Map() // for event emitter
        ;
        this._id = randombytes(4).toString("hex").slice(0, 7);
        this._doDebug = opts.debug;
        this._debug("new peer %o", opts);
        this.channelName = opts.initiator ? opts.channelName || randombytes(20).toString("hex") : null;
        this.initiator = opts.initiator || false;
        this.channelConfig = opts.channelConfig || Peer.channelConfig;
        this.channelNegotiated = this.channelConfig.negotiated;
        this.config = Object.assign({}, Peer.config, opts.config);
        this.offerOptions = opts.offerOptions || {};
        this.answerOptions = opts.answerOptions || {};
        this.sdpTransform = opts.sdpTransform || ((sdp)=>sdp);
        this.streams = opts.streams || (opts.stream ? [
            opts.stream
        ] : [] // support old "stream" option
        );
        this.trickle = opts.trickle !== undefined ? opts.trickle : true;
        this.allowHalfTrickle = opts.allowHalfTrickle !== undefined ? opts.allowHalfTrickle : false;
        this.iceCompleteTimeout = opts.iceCompleteTimeout || ICECOMPLETE_TIMEOUT;
        this.destroyed = false;
        this.destroying = false;
        this._connected = false;
        this.remoteAddress = undefined;
        this.remoteFamily = undefined;
        this.remotePort = undefined;
        this.localAddress = undefined;
        this.localFamily = undefined;
        this.localPort = undefined;
        this._wrtc = opts.wrtc && typeof opts.wrtc === "object" ? opts.wrtc : getBrowserRTC();
        if (!this._wrtc) {
            if (typeof window === "undefined") throw errCode(new Error("No WebRTC support: Specify `opts.wrtc` option in this environment"), "ERR_WEBRTC_SUPPORT");
            else throw errCode(new Error("No WebRTC support: Not a supported browser"), "ERR_WEBRTC_SUPPORT");
        }
        this._pcReady = false;
        this._channelReady = false;
        this._iceComplete = false // ice candidate trickle done (got null candidate)
        ;
        this._iceCompleteTimer = null // send an offer/answer anyway after some timeout
        ;
        this._channel = null;
        this._pendingCandidates = [];
        this._isNegotiating = false // is this peer waiting for negotiation to complete?
        ;
        this._firstNegotiation = true;
        this._batchedNegotiation = false // batch synchronous negotiations
        ;
        this._queuedNegotiation = false // is there a queued negotiation request?
        ;
        this._sendersAwaitingStable = [];
        this._senderMap = new Map();
        this._closingInterval = null;
        this._remoteTracks = [];
        this._remoteStreams = [];
        this._chunk = null;
        this._cb = null;
        this._interval = null;
        try {
            this._pc = new this._wrtc.RTCPeerConnection(this.config);
        } catch (err) {
            this.destroy(errCode(err, "ERR_PC_CONSTRUCTOR"));
            return;
        }
        // We prefer feature detection whenever possible, but sometimes that's not
        // possible for certain implementations.
        this._isReactNativeWebrtc = typeof this._pc._peerConnectionId === "number";
        this._pc.oniceconnectionstatechange = ()=>{
            this._onIceStateChange();
        };
        this._pc.onicegatheringstatechange = ()=>{
            this._onIceStateChange();
        };
        this._pc.onconnectionstatechange = ()=>{
            this._onConnectionStateChange();
        };
        this._pc.onsignalingstatechange = ()=>{
            this._onSignalingStateChange();
        };
        this._pc.onicecandidate = (event)=>{
            this._onIceCandidate(event);
        };
        // HACK: Fix for odd Firefox behavior, see: https://github.com/feross/simple-peer/pull/783
        if (typeof this._pc.peerIdentity === "object") this._pc.peerIdentity.catch((err)=>{
            this.destroy(errCode(err, "ERR_PC_PEER_IDENTITY"));
        });
        // Other spec events, unused by this implementation:
        // - onconnectionstatechange
        // - onicecandidateerror
        // - onfingerprintfailure
        // - onnegotiationneeded
        if (this.initiator || this.channelNegotiated) this._setupData({
            channel: this._pc.createDataChannel(this.channelName, this.channelConfig)
        });
        else this._pc.ondatachannel = (event)=>{
            this._setupData(event);
        };
        if (this.streams) this.streams.forEach((stream)=>{
            this.addStream(stream);
        });
        this._pc.ontrack = (event)=>{
            this._onTrack(event);
        };
        this._debug("initial negotiation");
        this._needsNegotiation();
    }
    get bufferSize() {
        return this._channel && this._channel.bufferedAmount || 0;
    }
    // HACK: it's possible channel.readyState is "closing" before peer.destroy() fires
    // https://bugs.chromium.org/p/chromium/issues/detail?id=882743
    get connected() {
        return this._connected && this._channel.readyState === "open";
    }
    address() {
        return {
            port: this.localPort,
            family: this.localFamily,
            address: this.localAddress
        };
    }
    signal(data) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot signal after peer is destroyed"), "ERR_DESTROYED");
        if (typeof data === "string") try {
            data = JSON.parse(data);
        } catch (err) {
            data = {};
        }
        this._debug("signal()");
        if (data.renegotiate && this.initiator) {
            this._debug("got request to renegotiate");
            this._needsNegotiation();
        }
        if (data.transceiverRequest && this.initiator) {
            this._debug("got request for transceiver");
            this.addTransceiver(data.transceiverRequest.kind, data.transceiverRequest.init);
        }
        if (data.candidate) {
            if (this._pc.remoteDescription && this._pc.remoteDescription.type) this._addIceCandidate(data.candidate);
            else this._pendingCandidates.push(data.candidate);
        }
        if (data.sdp) this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(data)).then(()=>{
            if (this.destroyed) return;
            this._pendingCandidates.forEach((candidate)=>{
                this._addIceCandidate(candidate);
            });
            this._pendingCandidates = [];
            if (this._pc.remoteDescription.type === "offer") this._createAnswer();
        }).catch((err)=>{
            this.destroy(errCode(err, "ERR_SET_REMOTE_DESCRIPTION"));
        });
        if (!data.sdp && !data.candidate && !data.renegotiate && !data.transceiverRequest) this.destroy(errCode(new Error("signal() called with invalid signal data"), "ERR_SIGNALING"));
    }
    _addIceCandidate(candidate) {
        const iceCandidateObj = new this._wrtc.RTCIceCandidate(candidate);
        this._pc.addIceCandidate(iceCandidateObj).catch((err)=>{
            if (!iceCandidateObj.address || iceCandidateObj.address.endsWith(".local")) warn("Ignoring unsupported ICE candidate.");
            else this.destroy(errCode(err, "ERR_ADD_ICE_CANDIDATE"));
        });
    }
    /**
   * Send text/binary data to the remote peer.
   * @param {ArrayBufferView|ArrayBuffer|string|Blob} chunk
   */ send(chunk) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot send after peer is destroyed"), "ERR_DESTROYED");
        this._channel.send(chunk);
    }
    /**
   * Add a Transceiver to the connection.
   * @param {String} kind
   * @param {Object} init
   */ addTransceiver(kind, init) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot addTransceiver after peer is destroyed"), "ERR_DESTROYED");
        this._debug("addTransceiver()");
        if (this.initiator) try {
            this._pc.addTransceiver(kind, init);
            this._needsNegotiation();
        } catch (err) {
            this.destroy(errCode(err, "ERR_ADD_TRANSCEIVER"));
        }
        else this.emit("signal", {
            // request initiator to renegotiate
            type: "transceiverRequest",
            transceiverRequest: {
                kind,
                init
            }
        });
    }
    /**
   * Add a MediaStream to the connection.
   * @param {MediaStream} stream
   */ addStream(stream) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot addStream after peer is destroyed"), "ERR_DESTROYED");
        this._debug("addStream()");
        stream.getTracks().forEach((track)=>{
            this.addTrack(track, stream);
        });
    }
    /**
   * Add a MediaStreamTrack to the connection.
   * @param {MediaStreamTrack} track
   * @param {MediaStream} stream
   */ addTrack(track, stream) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot addTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("addTrack()");
        const submap = this._senderMap.get(track) || new Map() // nested Maps map [track, stream] to sender
        ;
        let sender = submap.get(stream);
        if (!sender) {
            sender = this._pc.addTrack(track, stream);
            submap.set(stream, sender);
            this._senderMap.set(track, submap);
            this._needsNegotiation();
        } else if (sender.removed) throw errCode(new Error("Track has been removed. You should enable/disable tracks that you want to re-add."), "ERR_SENDER_REMOVED");
        else throw errCode(new Error("Track has already been added to that stream."), "ERR_SENDER_ALREADY_ADDED");
    }
    /**
   * Replace a MediaStreamTrack by another in the connection.
   * @param {MediaStreamTrack} oldTrack
   * @param {MediaStreamTrack} newTrack
   * @param {MediaStream} stream
   */ replaceTrack(oldTrack, newTrack, stream) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot replaceTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("replaceTrack()");
        const submap = this._senderMap.get(oldTrack);
        const sender = submap ? submap.get(stream) : null;
        if (!sender) throw errCode(new Error("Cannot replace track that was never added."), "ERR_TRACK_NOT_ADDED");
        if (newTrack) this._senderMap.set(newTrack, submap);
        if (sender.replaceTrack != null) sender.replaceTrack(newTrack);
        else this.destroy(errCode(new Error("replaceTrack is not supported in this browser"), "ERR_UNSUPPORTED_REPLACETRACK"));
    }
    /**
   * Remove a MediaStreamTrack from the connection.
   * @param {MediaStreamTrack} track
   * @param {MediaStream} stream
   */ removeTrack(track, stream) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot removeTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("removeSender()");
        const submap = this._senderMap.get(track);
        const sender = submap ? submap.get(stream) : null;
        if (!sender) throw errCode(new Error("Cannot remove track that was never added."), "ERR_TRACK_NOT_ADDED");
        try {
            sender.removed = true;
            this._pc.removeTrack(sender);
        } catch (err) {
            if (err.name === "NS_ERROR_UNEXPECTED") this._sendersAwaitingStable.push(sender) // HACK: Firefox must wait until (signalingState === stable) https://bugzilla.mozilla.org/show_bug.cgi?id=1133874
            ;
            else this.destroy(errCode(err, "ERR_REMOVE_TRACK"));
        }
        this._needsNegotiation();
    }
    /**
   * Remove a MediaStream from the connection.
   * @param {MediaStream} stream
   */ removeStream(stream) {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot removeStream after peer is destroyed"), "ERR_DESTROYED");
        this._debug("removeSenders()");
        stream.getTracks().forEach((track)=>{
            this.removeTrack(track, stream);
        });
    }
    _needsNegotiation() {
        this._debug("_needsNegotiation");
        if (this._batchedNegotiation) return; // batch synchronous renegotiations
        this._batchedNegotiation = true;
        queueMicrotask(()=>{
            this._batchedNegotiation = false;
            if (this.initiator || !this._firstNegotiation) {
                this._debug("starting batched negotiation");
                this.negotiate();
            } else this._debug("non-initiator initial negotiation request discarded");
            this._firstNegotiation = false;
        });
    }
    negotiate() {
        if (this.destroying) return;
        if (this.destroyed) throw errCode(new Error("cannot negotiate after peer is destroyed"), "ERR_DESTROYED");
        if (this.initiator) {
            if (this._isNegotiating) {
                this._queuedNegotiation = true;
                this._debug("already negotiating, queueing");
            } else {
                this._debug("start negotiation");
                setTimeout(()=>{
                    // HACK: Chrome crashes if we immediately call createOffer
                    this._createOffer();
                }, 0);
            }
        } else if (this._isNegotiating) {
            this._queuedNegotiation = true;
            this._debug("already negotiating, queueing");
        } else {
            this._debug("requesting negotiation from initiator");
            this.emit("signal", {
                // request initiator to renegotiate
                type: "renegotiate",
                renegotiate: true
            });
        }
        this._isNegotiating = true;
    }
    destroy(err) {
        if (this.destroyed || this.destroying) return;
        this.destroying = true;
        this._debug("destroying (error: %s)", err && (err.message || err));
        queueMicrotask(()=>{
            // allow events concurrent with the call to _destroy() to fire (see #692)
            this.destroyed = true;
            this.destroying = false;
            this._debug("destroy (error: %s)", err && (err.message || err));
            this._connected = false;
            this._pcReady = false;
            this._channelReady = false;
            this._remoteTracks = null;
            this._remoteStreams = null;
            this._senderMap = null;
            clearInterval(this._closingInterval);
            this._closingInterval = null;
            clearInterval(this._interval);
            this._interval = null;
            this._chunk = null;
            this._cb = null;
            if (this._channel) {
                try {
                    this._channel.close();
                } catch (err) {}
                // allow events concurrent with destruction to be handled
                this._channel.onmessage = null;
                this._channel.onopen = null;
                this._channel.onclose = null;
                this._channel.onerror = null;
            }
            if (this._pc) {
                try {
                    this._pc.close();
                } catch (err) {}
                // allow events concurrent with destruction to be handled
                this._pc.oniceconnectionstatechange = null;
                this._pc.onicegatheringstatechange = null;
                this._pc.onsignalingstatechange = null;
                this._pc.onicecandidate = null;
                this._pc.ontrack = null;
                this._pc.ondatachannel = null;
            }
            this._pc = null;
            this._channel = null;
            if (err) this.emit("error", err);
            this.emit("close");
        });
    }
    _setupData(event) {
        if (!event.channel) // In some situations `pc.createDataChannel()` returns `undefined` (in wrtc),
        // which is invalid behavior. Handle it gracefully.
        // See: https://github.com/feross/simple-peer/issues/163
        return this.destroy(errCode(new Error("Data channel event is missing `channel` property"), "ERR_DATA_CHANNEL"));
        this._channel = event.channel;
        this._channel.binaryType = "arraybuffer";
        if (typeof this._channel.bufferedAmountLowThreshold === "number") this._channel.bufferedAmountLowThreshold = MAX_BUFFERED_AMOUNT;
        this.channelName = this._channel.label;
        this._channel.onmessage = (event)=>{
            this._onChannelMessage(event);
        };
        this._channel.onbufferedamountlow = ()=>{
            this._onChannelBufferedAmountLow();
        };
        this._channel.onopen = ()=>{
            this._onChannelOpen();
        };
        this._channel.onclose = ()=>{
            this._onChannelClose();
        };
        this._channel.onerror = (err)=>{
            this.destroy(errCode(err, "ERR_DATA_CHANNEL"));
        };
        // HACK: Chrome will sometimes get stuck in readyState "closing", let's check for this condition
        // https://bugs.chromium.org/p/chromium/issues/detail?id=882743
        let isClosing = false;
        this._closingInterval = setInterval(()=>{
            // No "onclosing" event
            if (this._channel && this._channel.readyState === "closing") {
                if (isClosing) this._onChannelClose() // closing timed out: equivalent to onclose firing
                ;
                isClosing = true;
            } else isClosing = false;
        }, CHANNEL_CLOSING_TIMEOUT);
    }
    _startIceCompleteTimeout() {
        if (this.destroyed) return;
        if (this._iceCompleteTimer) return;
        this._debug("started iceComplete timeout");
        this._iceCompleteTimer = setTimeout(()=>{
            if (!this._iceComplete) {
                this._iceComplete = true;
                this._debug("iceComplete timeout completed");
                this.emit("iceTimeout");
                this.emit("_iceComplete");
            }
        }, this.iceCompleteTimeout);
    }
    _createOffer() {
        if (this.destroyed) return;
        this._pc.createOffer(this.offerOptions).then((offer)=>{
            if (this.destroyed) return;
            if (!this.trickle && !this.allowHalfTrickle) offer.sdp = filterTrickle(offer.sdp);
            offer.sdp = this.sdpTransform(offer.sdp);
            const sendOffer = ()=>{
                if (this.destroyed) return;
                const signal = this._pc.localDescription || offer;
                this._debug("signal");
                this.emit("signal", {
                    type: signal.type,
                    sdp: signal.sdp
                });
            };
            const onSuccess = ()=>{
                this._debug("createOffer success");
                if (this.destroyed) return;
                if (this.trickle || this._iceComplete) sendOffer();
                else this.once("_iceComplete", sendOffer) // wait for candidates
                ;
            };
            const onError = (err)=>{
                this.destroy(errCode(err, "ERR_SET_LOCAL_DESCRIPTION"));
            };
            this._pc.setLocalDescription(offer).then(onSuccess).catch(onError);
        }).catch((err)=>{
            this.destroy(errCode(err, "ERR_CREATE_OFFER"));
        });
    }
    _requestMissingTransceivers() {
        if (this._pc.getTransceivers) this._pc.getTransceivers().forEach((transceiver)=>{
            if (!transceiver.mid && transceiver.sender.track && !transceiver.requested) {
                transceiver.requested = true // HACK: Safari returns negotiated transceivers with a null mid
                ;
                this.addTransceiver(transceiver.sender.track.kind);
            }
        });
    }
    _createAnswer() {
        if (this.destroyed) return;
        this._pc.createAnswer(this.answerOptions).then((answer)=>{
            if (this.destroyed) return;
            if (!this.trickle && !this.allowHalfTrickle) answer.sdp = filterTrickle(answer.sdp);
            answer.sdp = this.sdpTransform(answer.sdp);
            const sendAnswer = ()=>{
                if (this.destroyed) return;
                const signal = this._pc.localDescription || answer;
                this._debug("signal");
                this.emit("signal", {
                    type: signal.type,
                    sdp: signal.sdp
                });
                if (!this.initiator) this._requestMissingTransceivers();
            };
            const onSuccess = ()=>{
                if (this.destroyed) return;
                if (this.trickle || this._iceComplete) sendAnswer();
                else this.once("_iceComplete", sendAnswer);
            };
            const onError = (err)=>{
                this.destroy(errCode(err, "ERR_SET_LOCAL_DESCRIPTION"));
            };
            this._pc.setLocalDescription(answer).then(onSuccess).catch(onError);
        }).catch((err)=>{
            this.destroy(errCode(err, "ERR_CREATE_ANSWER"));
        });
    }
    _onConnectionStateChange() {
        if (this.destroyed) return;
        if (this._pc.connectionState === "failed") this.destroy(errCode(new Error("Connection failed."), "ERR_CONNECTION_FAILURE"));
    }
    _onIceStateChange() {
        if (this.destroyed) return;
        const iceConnectionState = this._pc.iceConnectionState;
        const iceGatheringState = this._pc.iceGatheringState;
        this._debug("iceStateChange (connection: %s) (gathering: %s)", iceConnectionState, iceGatheringState);
        this.emit("iceStateChange", iceConnectionState, iceGatheringState);
        if (iceConnectionState === "connected" || iceConnectionState === "completed") {
            this._pcReady = true;
            this._maybeReady();
        }
        if (iceConnectionState === "failed") this.destroy(errCode(new Error("Ice connection failed."), "ERR_ICE_CONNECTION_FAILURE"));
        if (iceConnectionState === "closed") this.destroy(errCode(new Error("Ice connection closed."), "ERR_ICE_CONNECTION_CLOSED"));
    }
    getStats(cb) {
        // statreports can come with a value array instead of properties
        const flattenValues = (report)=>{
            if (Object.prototype.toString.call(report.values) === "[object Array]") report.values.forEach((value)=>{
                Object.assign(report, value);
            });
            return report;
        };
        // Promise-based getStats() (standard)
        if (this._pc.getStats.length === 0 || this._isReactNativeWebrtc) this._pc.getStats().then((res)=>{
            const reports = [];
            res.forEach((report)=>{
                reports.push(flattenValues(report));
            });
            cb(null, reports);
        }, (err)=>cb(err));
        else if (this._pc.getStats.length > 0) this._pc.getStats((res)=>{
            // If we destroy connection in `connect` callback this code might happen to run when actual connection is already closed
            if (this.destroyed) return;
            const reports = [];
            res.result().forEach((result)=>{
                const report = {};
                result.names().forEach((name)=>{
                    report[name] = result.stat(name);
                });
                report.id = result.id;
                report.type = result.type;
                report.timestamp = result.timestamp;
                reports.push(flattenValues(report));
            });
            cb(null, reports);
        }, (err)=>cb(err));
        else cb(null, []);
    }
    _maybeReady() {
        this._debug("maybeReady pc %s channel %s", this._pcReady, this._channelReady);
        if (this._connected || this._connecting || !this._pcReady || !this._channelReady) return;
        this._connecting = true;
        // HACK: We can't rely on order here, for details see https://github.com/js-platform/node-webrtc/issues/339
        const findCandidatePair = ()=>{
            if (this.destroyed) return;
            this.getStats((err, items)=>{
                if (this.destroyed) return;
                // Treat getStats error as non-fatal. It's not essential.
                if (err) items = [];
                const remoteCandidates = {};
                const localCandidates = {};
                const candidatePairs = {};
                let foundSelectedCandidatePair = false;
                items.forEach((item)=>{
                    // TODO: Once all browsers support the hyphenated stats report types, remove
                    // the non-hypenated ones
                    if (item.type === "remotecandidate" || item.type === "remote-candidate") remoteCandidates[item.id] = item;
                    if (item.type === "localcandidate" || item.type === "local-candidate") localCandidates[item.id] = item;
                    if (item.type === "candidatepair" || item.type === "candidate-pair") candidatePairs[item.id] = item;
                });
                const setSelectedCandidatePair = (selectedCandidatePair)=>{
                    foundSelectedCandidatePair = true;
                    let local = localCandidates[selectedCandidatePair.localCandidateId];
                    if (local && (local.ip || local.address)) {
                        // Spec
                        this.localAddress = local.ip || local.address;
                        this.localPort = Number(local.port);
                    } else if (local && local.ipAddress) {
                        // Firefox
                        this.localAddress = local.ipAddress;
                        this.localPort = Number(local.portNumber);
                    } else if (typeof selectedCandidatePair.googLocalAddress === "string") {
                        // TODO: remove this once Chrome 58 is released
                        local = selectedCandidatePair.googLocalAddress.split(":");
                        this.localAddress = local[0];
                        this.localPort = Number(local[1]);
                    }
                    if (this.localAddress) this.localFamily = this.localAddress.includes(":") ? "IPv6" : "IPv4";
                    let remote = remoteCandidates[selectedCandidatePair.remoteCandidateId];
                    if (remote && (remote.ip || remote.address)) {
                        // Spec
                        this.remoteAddress = remote.ip || remote.address;
                        this.remotePort = Number(remote.port);
                    } else if (remote && remote.ipAddress) {
                        // Firefox
                        this.remoteAddress = remote.ipAddress;
                        this.remotePort = Number(remote.portNumber);
                    } else if (typeof selectedCandidatePair.googRemoteAddress === "string") {
                        // TODO: remove this once Chrome 58 is released
                        remote = selectedCandidatePair.googRemoteAddress.split(":");
                        this.remoteAddress = remote[0];
                        this.remotePort = Number(remote[1]);
                    }
                    if (this.remoteAddress) this.remoteFamily = this.remoteAddress.includes(":") ? "IPv6" : "IPv4";
                    this._debug("connect local: %s:%s remote: %s:%s", this.localAddress, this.localPort, this.remoteAddress, this.remotePort);
                };
                items.forEach((item)=>{
                    // Spec-compliant
                    if (item.type === "transport" && item.selectedCandidatePairId) setSelectedCandidatePair(candidatePairs[item.selectedCandidatePairId]);
                    // Old implementations
                    if (item.type === "googCandidatePair" && item.googActiveConnection === "true" || (item.type === "candidatepair" || item.type === "candidate-pair") && item.selected) setSelectedCandidatePair(item);
                });
                // Ignore candidate pair selection in browsers like Safari 11 that do not have any local or remote candidates
                // But wait until at least 1 candidate pair is available
                if (!foundSelectedCandidatePair && (!Object.keys(candidatePairs).length || Object.keys(localCandidates).length)) {
                    setTimeout(findCandidatePair, 100);
                    return;
                } else {
                    this._connecting = false;
                    this._connected = true;
                }
                if (this._chunk) {
                    try {
                        this.send(this._chunk);
                    } catch (err) {
                        return this.destroy(errCode(err, "ERR_DATA_CHANNEL"));
                    }
                    this._chunk = null;
                    this._debug('sent chunk from "write before connect"');
                    const cb = this._cb;
                    this._cb = null;
                    cb(null);
                }
                // If `bufferedAmountLowThreshold` and 'onbufferedamountlow' are unsupported,
                // fallback to using setInterval to implement backpressure.
                if (typeof this._channel.bufferedAmountLowThreshold !== "number") {
                    this._interval = setInterval(()=>this._onInterval(), 150);
                    if (this._interval.unref) this._interval.unref();
                }
                this._debug("connect");
                this.emit("connect");
            });
        };
        findCandidatePair();
    }
    _onInterval() {
        if (!this._cb || !this._channel || this._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) return;
        this._onChannelBufferedAmountLow();
    }
    _onSignalingStateChange() {
        if (this.destroyed) return;
        if (this._pc.signalingState === "stable") {
            this._isNegotiating = false;
            // HACK: Firefox doesn't yet support removing tracks when signalingState !== 'stable'
            this._debug("flushing sender queue", this._sendersAwaitingStable);
            this._sendersAwaitingStable.forEach((sender)=>{
                this._pc.removeTrack(sender);
                this._queuedNegotiation = true;
            });
            this._sendersAwaitingStable = [];
            if (this._queuedNegotiation) {
                this._debug("flushing negotiation queue");
                this._queuedNegotiation = false;
                this._needsNegotiation() // negotiate again
                ;
            } else {
                this._debug("negotiated");
                this.emit("negotiated");
            }
        }
        this._debug("signalingStateChange %s", this._pc.signalingState);
        this.emit("signalingStateChange", this._pc.signalingState);
    }
    _onIceCandidate(event) {
        if (this.destroyed) return;
        if (event.candidate && this.trickle) this.emit("signal", {
            type: "candidate",
            candidate: {
                candidate: event.candidate.candidate,
                sdpMLineIndex: event.candidate.sdpMLineIndex,
                sdpMid: event.candidate.sdpMid
            }
        });
        else if (!event.candidate && !this._iceComplete) {
            this._iceComplete = true;
            this.emit("_iceComplete");
        }
        // as soon as we've received one valid candidate start timeout
        if (event.candidate) this._startIceCompleteTimeout();
    }
    _onChannelMessage(event) {
        if (this.destroyed) return;
        let data = event.data;
        if (data instanceof ArrayBuffer) data = new Uint8Array(data);
        this.emit("data", data);
    }
    _onChannelBufferedAmountLow() {
        if (this.destroyed || !this._cb) return;
        this._debug("ending backpressure: bufferedAmount %d", this._channel.bufferedAmount);
        const cb = this._cb;
        this._cb = null;
        cb(null);
    }
    _onChannelOpen() {
        if (this._connected || this.destroyed) return;
        this._debug("on channel open");
        this._channelReady = true;
        this._maybeReady();
    }
    _onChannelClose() {
        if (this.destroyed) return;
        this._debug("on channel close");
        this.destroy();
    }
    _onTrack(event) {
        if (this.destroyed) return;
        event.streams.forEach((eventStream)=>{
            this._debug("on track");
            this.emit("track", event.track, eventStream);
            this._remoteTracks.push({
                track: event.track,
                stream: eventStream
            });
            if (this._remoteStreams.some((remoteStream)=>{
                return remoteStream.id === eventStream.id;
            })) return;
             // Only fire one 'stream' event, even though there may be multiple tracks per stream
            this._remoteStreams.push(eventStream);
            queueMicrotask(()=>{
                this._debug("on stream");
                this.emit("stream", eventStream) // ensure all tracks have been added
                ;
            });
        });
    }
    _debug(...args) {
        if (!this._doDebug) return;
        args[0] = "[" + this._id + "] " + args[0];
        console.log(...args);
    }
    // event emitter
    on(key, listener) {
        const map = this._map;
        if (!map.has(key)) map.set(key, new Set());
        map.get(key).add(listener);
    }
    off(key, listener) {
        const map = this._map;
        const listeners = map.get(key);
        if (!listeners) return;
        listeners.delete(listener);
        if (listeners.size === 0) map.delete(key);
    }
    once(key, listener) {
        const listener_ = (...args)=>{
            this.off(key, listener_);
            listener(...args);
        };
        this.on(key, listener_);
    }
    emit(key, ...args) {
        const map = this._map;
        if (!map.has(key)) return;
        for (const listener of map.get(key))try {
            listener(...args);
        } catch (err) {
            console.error(err);
        }
    }
}
Peer.WEBRTC_SUPPORT = !!getBrowserRTC();
/**
 * Expose peer and data channel config for overriding all Peer
 * instances. Otherwise, just set opts.config or opts.channelConfig
 * when constructing a Peer.
 */ Peer.config = {
    iceServers: [
        {
            urls: [
                "stun:stun.l.google.com:19302",
                "stun:global.stun.twilio.com:3478"
            ]
        }
    ],
    sdpSemantics: "unified-plan"
};
Peer.channelConfig = {};
// module.exports = Peer
exports.default = Peer;

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

},{}],"6N7Kp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "genKey", ()=>genKey);
parcelHelpers.export(exports, "encrypt", ()=>encrypt);
parcelHelpers.export(exports, "decrypt", ()=>decrypt);
var _utilsJs = require("./utils.js");
const algo = "AES-CBC";
const pack = (buff)=>btoa(String.fromCharCode.apply(null, new Uint8Array(buff)));
const unpack = (packed)=>{
    const str = atob(packed);
    return new Uint8Array(str.length).map((_, i)=>str.charCodeAt(i)).buffer;
};
const genKey = async (secret, ns)=>crypto.subtle.importKey("raw", await crypto.subtle.digest({
        name: "SHA-256"
    }, (0, _utilsJs.encodeBytes)(`${secret}:${ns}`)), {
        name: algo
    }, false, [
        "encrypt",
        "decrypt"
    ]);
const encrypt = async (keyP, plaintext)=>{
    const iv = crypto.getRandomValues(new Uint8Array(16));
    return JSON.stringify({
        c: pack(await crypto.subtle.encrypt({
            name: algo,
            iv
        }, await keyP, (0, _utilsJs.encodeBytes)(plaintext))),
        iv: [
            ...iv
        ]
    });
};
const decrypt = async (keyP, raw)=>{
    const { c, iv } = JSON.parse(raw);
    return (0, _utilsJs.decodeBytes)(await crypto.subtle.decrypt({
        name: algo,
        iv: new Uint8Array(iv)
    }, await keyP, unpack(c)));
};

},{"./utils.js":"5JQ7k","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["km5uZ","bB7Pu"], "bB7Pu", "parcelRequire4745")

//# sourceMappingURL=index.3d214d75.js.map
