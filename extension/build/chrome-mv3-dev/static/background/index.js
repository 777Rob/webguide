(function(define){var __define; typeof define === "function" && (__define=define,define=null);
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
})({"aUjqs":[function(require,module,exports) {
var u = globalThis.process?.argv || [];
var h = ()=>globalThis.process?.env || {};
var B = new Set(u), _ = (e)=>B.has(e), G = u.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var U = _("--dry-run"), g = ()=>_("--verbose") || h().VERBOSE === "true", N = g();
var m = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var y = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>m("\uD83D\uDD35 INFO", ...e), f = (...e)=>m("\uD83D\uDFE0 WARN", ...e), M = 0, i = (...e)=>g() && m(`\u{1F7E1} ${M++}`, ...e);
var b = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime, t = ()=>setInterval(e.getPlatformInfo, 24e3);
    e.onStartup.addListener(t), t();
};
var n = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "C:\\Users\\rceka\\OneDrive\\Desktop\\Coding2\\webguide\\extension\\.plasmo\\static\\background\\index.ts",
    "bundleId": "c338908e704c91f1",
    "envHash": "d99a5ffa57acd638",
    "verbose": "false",
    "secure": false,
    "serverPort": 1012
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function H(e) {
    D.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = H;
module.bundle.hotData = {};
var c = globalThis.browser || globalThis.chrome || null;
function R() {
    return !n.host || n.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : n.host;
}
function x() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function d() {
    return n.port || location.port;
}
var P = "__plasmo_runtime_page_", S = "__plasmo_runtime_script_";
var O = `${n.secure ? "https" : "http"}://${R()}:${d()}/`;
async function k(e = 1470) {
    for(;;)try {
        await fetch(O);
        break;
    } catch  {
        await new Promise((o)=>setTimeout(o, e));
    }
}
if (c.runtime.getManifest().manifest_version === 3) {
    let e = c.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let o = t.request.url;
        if (o.startsWith(e)) {
            let s = new URL(decodeURIComponent(o.slice(e.length)));
            s.hostname === n.host && s.port === `${n.port}` ? (s.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(s).then((r)=>new Response(r.body, {
                    headers: {
                        "Content-Type": r.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function E(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function C(e = d()) {
    let t = x();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function L(e) {
    typeof e.message == "string" && y("[plasmo/parcel-runtime]: " + e.message);
}
function T(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C(Number(d()) + 1));
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        await e(s);
    }), t.addEventListener("error", L), t;
}
function A(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C());
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        if (s.type === "update" && await e(s.assets), s.type === "error") for (let r of s.diagnostics.ansi){
            let l = r.codeframe || r.stack;
            f("[plasmo/parcel-runtime]: " + r.message + `
` + l + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", L), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        f(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var w = module.bundle.parent, a = {
    buildReady: !1,
    bgChanged: !1,
    csChanged: !1,
    pageChanged: !1,
    scriptPorts: new Set,
    pagePorts: new Set
};
async function p(e = !1) {
    if (e || a.buildReady && a.pageChanged) {
        i("BGSW Runtime - reloading Page");
        for (let t of a.pagePorts)t.postMessage(null);
    }
    if (e || a.buildReady && (a.bgChanged || a.csChanged)) {
        i("BGSW Runtime - reloading CS");
        let t = await c?.tabs.query({
            active: !0
        });
        for (let o of a.scriptPorts){
            let s = t.some((r)=>r.id === o.sender.tab?.id);
            o.postMessage({
                __plasmo_cs_active_tab__: s
            });
        }
        c.runtime.reload();
    }
}
if (!w || !w.isParcelRequire) {
    b();
    let e = A(async (t)=>{
        i("BGSW Runtime - On HMR Update"), a.bgChanged ||= t.filter((s)=>s.envHash === n.envHash).some((s)=>E(module.bundle, s.id));
        let o = t.find((s)=>s.type === "json");
        if (o) {
            let s = new Set(t.map((l)=>l.id)), r = Object.values(o.depsByBundle).map((l)=>Object.values(l)).flat();
            a.bgChanged ||= r.every((l)=>s.has(l));
        }
        p();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await k(), p(!0);
    });
}
T(async (e)=>{
    switch(i("BGSW Runtime - On Build Repackaged"), e.type){
        case "build_ready":
            a.buildReady ||= !0, p();
            break;
        case "cs_changed":
            a.csChanged ||= !0, p();
            break;
    }
});
c.runtime.onConnect.addListener(function(e) {
    let t = e.name.startsWith(P), o = e.name.startsWith(S);
    if (t || o) {
        let s = t ? a.pagePorts : a.scriptPorts;
        s.add(e), e.onDisconnect.addListener(()=>{
            s.delete(e);
        }), e.onMessage.addListener(function(r) {
            i("BGSW Runtime - On source changed", r), r.__plasmo_cs_changed__ && (a.csChanged ||= !0), r.__plasmo_page_changed__ && (a.pageChanged ||= !0), p();
        });
    }
});
c.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (i("BGSW Runtime - On top-level code changed"), p()), !0;
});

},{}],"8oeFb":[function(require,module,exports) {
var _index = require("../../../background/index");

},{"../../../background/index":"leaNT"}],"leaNT":[function(require,module,exports) {
var _gemini = require("../utils/gemini");
var _storage = require("../utils/storage");
console.log("WebGuide Extension 2 Background Service Started");
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    if (request && typeof request === "object" && request.action === "ANALYZE_PAGE") {
        handleAnalyzePage(request, sendResponse);
        return true // Keep channel open for async response
        ;
    }
    return false;
});
// Open Side Panel on Icon Click
chrome.action.onClicked.addListener((tab)=>{
    if (tab.id) {
        chrome.sidePanel.setOptions({
            tabId: tab.id,
            path: "sidepanel.html",
            enabled: true
        });
        if (tab.windowId) chrome.sidePanel.open({
            windowId: tab.windowId
        });
    }
});
// Detect Page Navigation for Smart Auto-Progress
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
    if (changeInfo.status === "complete" && tab.active) // Broadcast to sidepanel (and other parts) that a navigation occurred
    chrome.runtime.sendMessage({
        action: "PAGE_CHANGED",
        tabId,
        url: tab.url
    }).catch(()=>{
    // Ignore error if no receivers (sidepanel closed)
    });
});
async function handleAnalyzePage(request, sendResponse) {
    try {
        const { userGoal } = request;
        // 1. Get API Key
        const apiKey = await (0, _storage.getApiKey)();
        if (!apiKey) {
            sendResponse({
                error: "API Key not found. Please set it in options."
            });
            return;
        }
        // 2. Capture Screenshot and Page Content
        const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true
        });
        let pageContent = "";
        if (tab?.id && tab.url) {
            // Skip execution on restricted pages (chrome://, edge://, etc.)
            const isRestrictedUrl = tab.url.startsWith("chrome:") || tab.url.startsWith("edge:") || tab.url.startsWith("about:") || tab.url.startsWith("moz-extension:") || tab.url.startsWith("view-source:");
            if (!isRestrictedUrl) try {
                const results = await chrome.scripting.executeScript({
                    target: {
                        tabId: tab.id
                    },
                    func: ()=>{
                        return document.body.innerText || "";
                    }
                });
                if (results && results[0] && results[0].result) pageContent = results[0].result;
            } catch (e) {
                // Just log and continue - this is not critical
                console.warn("Could not extract page content", e);
            }
        }
        const screenshotDataUrl = await chrome.tabs.captureVisibleTab(undefined, {
            format: "jpeg",
            quality: 60
        });
        // 3. Call Gemini API
        const { previousContext } = request;
        const guidance = await (0, _gemini.generateGuidance)(apiKey, screenshotDataUrl, userGoal, pageContent, previousContext);
        // 4. Send Response
        sendResponse({
            success: true,
            data: guidance
        });
    } catch (error) {
        console.error("Analysis failed:", error);
        sendResponse({
            error: error.message || "Unknown error occurred"
        });
    }
}

},{"../utils/gemini":"4hs9H","../utils/storage":"6E8Wy"}],"4hs9H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateGuidance", ()=>generateGuidance);
var _generativeAi = require("@google/generative-ai");
const SYSTEM_PROMPT = `
You are WebGuide, a highly intelligent, privacy-focused AI assistant that helps users achieve goals on any website. 
CRITICAL CONTEXT: You are a Chrome Extension. You AUTOMATICALLY see the browser tab when the user clicks "Guide Me" or "Check Progress".
**NEVER ask the user to "send a screenshot" or "upload an image".** You already have it.
Instead, ask them to perform the action and then click "Check Progress" or "Send" to update you.

### Core Capabilities
- Expert at spatial and visual reasoning: Describe UI layout precisely, detect states (logged in/out, errors, modals), identify elements.
- **MANDATORY**: When suggesting an action on a specific element (button, link, input), you MUST provide its 'visual_suggestions' with accurate 'coordinates_approx'.
- **HIGHLIGHTING RULES**: 
    1. **Forms**: Highlight the **entire form container** (login box, signup section), NOT every individual input field.
    2. **Interactive Elements**: Highlight specific Search Bars, Filter buttons, and primary Action buttons individually.
    3. **Precision**: Give the exact bounds of the element. Do not add padding; the frontend will handle that.
- Plan multi-step workflows autonomously.
- Proactive: Anticipate next steps.
- Natural, encouraging voice. Do not be robotic.

### Output Format (Strict JSON)
{
  "title": "Short, action-oriented title (e.g. 'Sign up for Devpost')",
  "reasoning": "Step-by-step thought process with Thinking Levels. Transparent analysis of screenshot and planning.",
  "spoken_guidance": "Natural spoken response (2-3 sentences, friendly).",
  "text_guidance": "Detailed bullet points if needed.",
  "visual_suggestions": [
    {
      "description": "e.g., 'Log in button'",
      "location": "e.g., 'top-right corner, next to search icon'",
      "coordinates_approx": [ymin, xmin, ymax, xmax] // normalized 0-1 (viewport) or null if N/A. MUST be numbers, not strings.
    }
  ],
  "steps": [
    {"step": 1, "description": "Description of step 1", "status": "pending/completed/current"}
  ],
  "next_steps": "What user should do next and when to refresh screenshot.",
  "completed": false/true
}

If goal achieved, set completed: true and congratulate.
Never hallucinate unseen elements. Prioritize accuracy.
`;
const generateGuidance = async (apiKey, base64Image, userGoal, pageContent, previousContext // Placeholder for multi-turn history
)=>{
    const genAI = new (0, _generativeAi.GoogleGenerativeAI)(apiKey);
    const model = genAI.getGenerativeModel({
        model: "gemini-3-pro-preview",
        systemInstruction: SYSTEM_PROMPT,
        generationConfig: {
            responseMimeType: "application/json"
        }
    });
    console.log("Using Gemini Model:", "gemini-3-pro-preview");
    // Remove header from base64 if present
    const imagePart = {
        inlineData: {
            data: base64Image.replace(/^data:image\/\w+;base64,/, ""),
            mimeType: "image/jpeg"
        }
    };
    let prompt = `User Goal: ${userGoal}\n\n### Page Content (Text/HTML Snapshot)\n${pageContent.slice(0, 20000)}` // Limit content to avoid token limits if massive
    ;
    if (previousContext) prompt += `\n\n### Previous Conversation & Context
The user is continuing the session. 
1. **If the 'User Goal' is a question**: Answer it based on the screenshot and previous context. You do NOT need to strictly follow the previous plan if the user is asking for clarification.
2. **If the 'User Goal' is a status update**: Update the plan steps.
3. **If the 'User Goal' is a new task**: Create a new plan (but try to relate to context if ambiguous).

Previous Guidance Data:
${JSON.stringify(previousContext, null, 2)}`;
    const result = await model.generateContent([
        prompt,
        imagePart
    ]);
    const text = result.response.text();
    try {
        return JSON.parse(text);
    } catch (e) {
        console.error("Failed to parse Gemini response", e);
        throw new Error("Failed to parse AI response");
    }
};

},{"@google/generative-ai":"53uRF","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"53uRF":[function(require,module,exports) {
/**
 * Contains the list of OpenAPI data types
 * as defined by https://swagger.io/docs/specification/data-models/data-types/
 * @public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BlockReason", ()=>BlockReason);
parcelHelpers.export(exports, "ChatSession", ()=>ChatSession);
parcelHelpers.export(exports, "DynamicRetrievalMode", ()=>DynamicRetrievalMode);
parcelHelpers.export(exports, "ExecutableCodeLanguage", ()=>ExecutableCodeLanguage);
parcelHelpers.export(exports, "FinishReason", ()=>FinishReason);
parcelHelpers.export(exports, "FunctionCallingMode", ()=>FunctionCallingMode);
parcelHelpers.export(exports, "GenerativeModel", ()=>GenerativeModel);
parcelHelpers.export(exports, "GoogleGenerativeAI", ()=>GoogleGenerativeAI);
parcelHelpers.export(exports, "GoogleGenerativeAIAbortError", ()=>GoogleGenerativeAIAbortError);
parcelHelpers.export(exports, "GoogleGenerativeAIError", ()=>GoogleGenerativeAIError);
parcelHelpers.export(exports, "GoogleGenerativeAIFetchError", ()=>GoogleGenerativeAIFetchError);
parcelHelpers.export(exports, "GoogleGenerativeAIRequestInputError", ()=>GoogleGenerativeAIRequestInputError);
parcelHelpers.export(exports, "GoogleGenerativeAIResponseError", ()=>GoogleGenerativeAIResponseError);
parcelHelpers.export(exports, "HarmBlockThreshold", ()=>HarmBlockThreshold);
parcelHelpers.export(exports, "HarmCategory", ()=>HarmCategory);
parcelHelpers.export(exports, "HarmProbability", ()=>HarmProbability);
parcelHelpers.export(exports, "Outcome", ()=>Outcome);
parcelHelpers.export(exports, "POSSIBLE_ROLES", ()=>POSSIBLE_ROLES);
parcelHelpers.export(exports, "SchemaType", ()=>SchemaType);
parcelHelpers.export(exports, "TaskType", ()=>TaskType);
var SchemaType;
(function(SchemaType) {
    /** String type. */ SchemaType["STRING"] = "string";
    /** Number type. */ SchemaType["NUMBER"] = "number";
    /** Integer type. */ SchemaType["INTEGER"] = "integer";
    /** Boolean type. */ SchemaType["BOOLEAN"] = "boolean";
    /** Array type. */ SchemaType["ARRAY"] = "array";
    /** Object type. */ SchemaType["OBJECT"] = "object";
})(SchemaType || (SchemaType = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @public
 */ var ExecutableCodeLanguage;
(function(ExecutableCodeLanguage) {
    ExecutableCodeLanguage["LANGUAGE_UNSPECIFIED"] = "language_unspecified";
    ExecutableCodeLanguage["PYTHON"] = "python";
})(ExecutableCodeLanguage || (ExecutableCodeLanguage = {}));
/**
 * Possible outcomes of code execution.
 * @public
 */ var Outcome;
(function(Outcome) {
    /**
     * Unspecified status. This value should not be used.
     */ Outcome["OUTCOME_UNSPECIFIED"] = "outcome_unspecified";
    /**
     * Code execution completed successfully.
     */ Outcome["OUTCOME_OK"] = "outcome_ok";
    /**
     * Code execution finished but with a failure. `stderr` should contain the
     * reason.
     */ Outcome["OUTCOME_FAILED"] = "outcome_failed";
    /**
     * Code execution ran for too long, and was cancelled. There may or may not
     * be a partial output present.
     */ Outcome["OUTCOME_DEADLINE_EXCEEDED"] = "outcome_deadline_exceeded";
})(Outcome || (Outcome = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Possible roles.
 * @public
 */ const POSSIBLE_ROLES = [
    "user",
    "model",
    "function",
    "system"
];
/**
 * Harm categories that would cause prompts or candidates to be blocked.
 * @public
 */ var HarmCategory;
(function(HarmCategory) {
    HarmCategory["HARM_CATEGORY_UNSPECIFIED"] = "HARM_CATEGORY_UNSPECIFIED";
    HarmCategory["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
    HarmCategory["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
    HarmCategory["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
    HarmCategory["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
    HarmCategory["HARM_CATEGORY_CIVIC_INTEGRITY"] = "HARM_CATEGORY_CIVIC_INTEGRITY";
})(HarmCategory || (HarmCategory = {}));
/**
 * Threshold above which a prompt or candidate will be blocked.
 * @public
 */ var HarmBlockThreshold;
(function(HarmBlockThreshold) {
    /** Threshold is unspecified. */ HarmBlockThreshold["HARM_BLOCK_THRESHOLD_UNSPECIFIED"] = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";
    /** Content with NEGLIGIBLE will be allowed. */ HarmBlockThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
    /** Content with NEGLIGIBLE and LOW will be allowed. */ HarmBlockThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
    /** Content with NEGLIGIBLE, LOW, and MEDIUM will be allowed. */ HarmBlockThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
    /** All content will be allowed. */ HarmBlockThreshold["BLOCK_NONE"] = "BLOCK_NONE";
})(HarmBlockThreshold || (HarmBlockThreshold = {}));
/**
 * Probability that a prompt or candidate matches a harm category.
 * @public
 */ var HarmProbability;
(function(HarmProbability) {
    /** Probability is unspecified. */ HarmProbability["HARM_PROBABILITY_UNSPECIFIED"] = "HARM_PROBABILITY_UNSPECIFIED";
    /** Content has a negligible chance of being unsafe. */ HarmProbability["NEGLIGIBLE"] = "NEGLIGIBLE";
    /** Content has a low chance of being unsafe. */ HarmProbability["LOW"] = "LOW";
    /** Content has a medium chance of being unsafe. */ HarmProbability["MEDIUM"] = "MEDIUM";
    /** Content has a high chance of being unsafe. */ HarmProbability["HIGH"] = "HIGH";
})(HarmProbability || (HarmProbability = {}));
/**
 * Reason that a prompt was blocked.
 * @public
 */ var BlockReason;
(function(BlockReason) {
    // A blocked reason was not specified.
    BlockReason["BLOCKED_REASON_UNSPECIFIED"] = "BLOCKED_REASON_UNSPECIFIED";
    // Content was blocked by safety settings.
    BlockReason["SAFETY"] = "SAFETY";
    // Content was blocked, but the reason is uncategorized.
    BlockReason["OTHER"] = "OTHER";
})(BlockReason || (BlockReason = {}));
/**
 * Reason that a candidate finished.
 * @public
 */ var FinishReason;
(function(FinishReason) {
    // Default value. This value is unused.
    FinishReason["FINISH_REASON_UNSPECIFIED"] = "FINISH_REASON_UNSPECIFIED";
    // Natural stop point of the model or provided stop sequence.
    FinishReason["STOP"] = "STOP";
    // The maximum number of tokens as specified in the request was reached.
    FinishReason["MAX_TOKENS"] = "MAX_TOKENS";
    // The candidate content was flagged for safety reasons.
    FinishReason["SAFETY"] = "SAFETY";
    // The candidate content was flagged for recitation reasons.
    FinishReason["RECITATION"] = "RECITATION";
    // The candidate content was flagged for using an unsupported language.
    FinishReason["LANGUAGE"] = "LANGUAGE";
    // Token generation stopped because the content contains forbidden terms.
    FinishReason["BLOCKLIST"] = "BLOCKLIST";
    // Token generation stopped for potentially containing prohibited content.
    FinishReason["PROHIBITED_CONTENT"] = "PROHIBITED_CONTENT";
    // Token generation stopped because the content potentially contains Sensitive Personally Identifiable Information (SPII).
    FinishReason["SPII"] = "SPII";
    // The function call generated by the model is invalid.
    FinishReason["MALFORMED_FUNCTION_CALL"] = "MALFORMED_FUNCTION_CALL";
    // Unknown reason.
    FinishReason["OTHER"] = "OTHER";
})(FinishReason || (FinishReason = {}));
/**
 * Task type for embedding content.
 * @public
 */ var TaskType;
(function(TaskType) {
    TaskType["TASK_TYPE_UNSPECIFIED"] = "TASK_TYPE_UNSPECIFIED";
    TaskType["RETRIEVAL_QUERY"] = "RETRIEVAL_QUERY";
    TaskType["RETRIEVAL_DOCUMENT"] = "RETRIEVAL_DOCUMENT";
    TaskType["SEMANTIC_SIMILARITY"] = "SEMANTIC_SIMILARITY";
    TaskType["CLASSIFICATION"] = "CLASSIFICATION";
    TaskType["CLUSTERING"] = "CLUSTERING";
})(TaskType || (TaskType = {}));
/**
 * @public
 */ var FunctionCallingMode;
(function(FunctionCallingMode) {
    // Unspecified function calling mode. This value should not be used.
    FunctionCallingMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Default model behavior, model decides to predict either a function call
    // or a natural language repspose.
    FunctionCallingMode["AUTO"] = "AUTO";
    // Model is constrained to always predicting a function call only.
    // If "allowed_function_names" are set, the predicted function call will be
    // limited to any one of "allowed_function_names", else the predicted
    // function call will be any one of the provided "function_declarations".
    FunctionCallingMode["ANY"] = "ANY";
    // Model will not predict any function call. Model behavior is same as when
    // not passing any function declarations.
    FunctionCallingMode["NONE"] = "NONE";
})(FunctionCallingMode || (FunctionCallingMode = {}));
/**
 * The mode of the predictor to be used in dynamic retrieval.
 * @public
 */ var DynamicRetrievalMode;
(function(DynamicRetrievalMode) {
    // Unspecified function calling mode. This value should not be used.
    DynamicRetrievalMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Run retrieval only when system decides it is necessary.
    DynamicRetrievalMode["MODE_DYNAMIC"] = "MODE_DYNAMIC";
})(DynamicRetrievalMode || (DynamicRetrievalMode = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Basic error type for this SDK.
 * @public
 */ class GoogleGenerativeAIError extends Error {
    constructor(message){
        super(`[GoogleGenerativeAI Error]: ${message}`);
    }
}
/**
 * Errors in the contents of a response from the model. This includes parsing
 * errors, or responses including a safety block reason.
 * @public
 */ class GoogleGenerativeAIResponseError extends GoogleGenerativeAIError {
    constructor(message, response){
        super(message);
        this.response = response;
    }
}
/**
 * Error class covering HTTP errors when calling the server. Includes HTTP
 * status, statusText, and optional details, if provided in the server response.
 * @public
 */ class GoogleGenerativeAIFetchError extends GoogleGenerativeAIError {
    constructor(message, status, statusText, errorDetails){
        super(message);
        this.status = status;
        this.statusText = statusText;
        this.errorDetails = errorDetails;
    }
}
/**
 * Errors in the contents of a request originating from user input.
 * @public
 */ class GoogleGenerativeAIRequestInputError extends GoogleGenerativeAIError {
}
/**
 * Error thrown when a request is aborted, either due to a timeout or
 * intentional cancellation by the user.
 * @public
 */ class GoogleGenerativeAIAbortError extends GoogleGenerativeAIError {
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DEFAULT_BASE_URL = "https://generativelanguage.googleapis.com";
const DEFAULT_API_VERSION = "v1beta";
/**
 * We can't `require` package.json if this runs on web. We will use rollup to
 * swap in the version number here at build time.
 */ const PACKAGE_VERSION = "0.24.1";
const PACKAGE_LOG_HEADER = "genai-js";
var Task;
(function(Task) {
    Task["GENERATE_CONTENT"] = "generateContent";
    Task["STREAM_GENERATE_CONTENT"] = "streamGenerateContent";
    Task["COUNT_TOKENS"] = "countTokens";
    Task["EMBED_CONTENT"] = "embedContent";
    Task["BATCH_EMBED_CONTENTS"] = "batchEmbedContents";
})(Task || (Task = {}));
class RequestUrl {
    constructor(model, task, apiKey, stream, requestOptions){
        this.model = model;
        this.task = task;
        this.apiKey = apiKey;
        this.stream = stream;
        this.requestOptions = requestOptions;
    }
    toString() {
        var _a, _b;
        const apiVersion = ((_a = this.requestOptions) === null || _a === void 0 ? void 0 : _a.apiVersion) || DEFAULT_API_VERSION;
        const baseUrl = ((_b = this.requestOptions) === null || _b === void 0 ? void 0 : _b.baseUrl) || DEFAULT_BASE_URL;
        let url = `${baseUrl}/${apiVersion}/${this.model}:${this.task}`;
        if (this.stream) url += "?alt=sse";
        return url;
    }
}
/**
 * Simple, but may become more complex if we add more versions to log.
 */ function getClientHeaders(requestOptions) {
    const clientHeaders = [];
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.apiClient) clientHeaders.push(requestOptions.apiClient);
    clientHeaders.push(`${PACKAGE_LOG_HEADER}/${PACKAGE_VERSION}`);
    return clientHeaders.join(" ");
}
async function getHeaders(url) {
    var _a;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("x-goog-api-client", getClientHeaders(url.requestOptions));
    headers.append("x-goog-api-key", url.apiKey);
    let customHeaders = (_a = url.requestOptions) === null || _a === void 0 ? void 0 : _a.customHeaders;
    if (customHeaders) {
        if (!(customHeaders instanceof Headers)) try {
            customHeaders = new Headers(customHeaders);
        } catch (e) {
            throw new GoogleGenerativeAIRequestInputError(`unable to convert customHeaders value ${JSON.stringify(customHeaders)} to Headers: ${e.message}`);
        }
        for (const [headerName, headerValue] of customHeaders.entries()){
            if (headerName === "x-goog-api-key") throw new GoogleGenerativeAIRequestInputError(`Cannot set reserved header name ${headerName}`);
            else if (headerName === "x-goog-api-client") throw new GoogleGenerativeAIRequestInputError(`Header name ${headerName} can only be set using the apiClient field`);
            headers.append(headerName, headerValue);
        }
    }
    return headers;
}
async function constructModelRequest(model, task, apiKey, stream, body, requestOptions) {
    const url = new RequestUrl(model, task, apiKey, stream, requestOptions);
    return {
        url: url.toString(),
        fetchOptions: Object.assign(Object.assign({}, buildFetchOptions(requestOptions)), {
            method: "POST",
            headers: await getHeaders(url),
            body
        })
    };
}
async function makeModelRequest(model, task, apiKey, stream, body, requestOptions = {}, // Allows this to be stubbed for tests
fetchFn = fetch) {
    const { url, fetchOptions } = await constructModelRequest(model, task, apiKey, stream, body, requestOptions);
    return makeRequest(url, fetchOptions, fetchFn);
}
async function makeRequest(url, fetchOptions, fetchFn = fetch) {
    let response;
    try {
        response = await fetchFn(url, fetchOptions);
    } catch (e) {
        handleResponseError(e, url);
    }
    if (!response.ok) await handleResponseNotOk(response, url);
    return response;
}
function handleResponseError(e, url) {
    let err = e;
    if (err.name === "AbortError") {
        err = new GoogleGenerativeAIAbortError(`Request aborted when fetching ${url.toString()}: ${e.message}`);
        err.stack = e.stack;
    } else if (!(e instanceof GoogleGenerativeAIFetchError || e instanceof GoogleGenerativeAIRequestInputError)) {
        err = new GoogleGenerativeAIError(`Error fetching from ${url.toString()}: ${e.message}`);
        err.stack = e.stack;
    }
    throw err;
}
async function handleResponseNotOk(response, url) {
    let message = "";
    let errorDetails;
    try {
        const json = await response.json();
        message = json.error.message;
        if (json.error.details) {
            message += ` ${JSON.stringify(json.error.details)}`;
            errorDetails = json.error.details;
        }
    } catch (e) {
    // ignored
    }
    throw new GoogleGenerativeAIFetchError(`Error fetching from ${url.toString()}: [${response.status} ${response.statusText}] ${message}`, response.status, response.statusText, errorDetails);
}
/**
 * Generates the request options to be passed to the fetch API.
 * @param requestOptions - The user-defined request options.
 * @returns The generated request options.
 */ function buildFetchOptions(requestOptions) {
    const fetchOptions = {};
    if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) !== undefined || (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) {
        const controller = new AbortController();
        if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) setTimeout(()=>controller.abort(), requestOptions.timeout);
        if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) requestOptions.signal.addEventListener("abort", ()=>{
            controller.abort();
        });
        fetchOptions.signal = controller.signal;
    }
    return fetchOptions;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Adds convenience helper methods to a response object, including stream
 * chunks (as long as each chunk is a complete GenerateContentResponse JSON).
 */ function addHelpers(response) {
    response.text = ()=>{
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) console.warn(`This response had ${response.candidates.length} ` + `candidates. Returning text from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
            if (hadBadFinishReason(response.candidates[0])) throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            return getText(response);
        } else if (response.promptFeedback) throw new GoogleGenerativeAIResponseError(`Text not available. ${formatBlockErrorMessage(response)}`, response);
        return "";
    };
    /**
     * TODO: remove at next major version
     */ response.functionCall = ()=>{
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) console.warn(`This response had ${response.candidates.length} ` + `candidates. Returning function calls from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
            if (hadBadFinishReason(response.candidates[0])) throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            console.warn(`response.functionCall() is deprecated. ` + `Use response.functionCalls() instead.`);
            return getFunctionCalls(response)[0];
        } else if (response.promptFeedback) throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
        return undefined;
    };
    response.functionCalls = ()=>{
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) console.warn(`This response had ${response.candidates.length} ` + `candidates. Returning function calls from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
            if (hadBadFinishReason(response.candidates[0])) throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            return getFunctionCalls(response);
        } else if (response.promptFeedback) throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
        return undefined;
    };
    return response;
}
/**
 * Returns all text found in all parts of first candidate.
 */ function getText(response) {
    var _a, _b, _c, _d;
    const textStrings = [];
    if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) for (const part of (_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts){
        if (part.text) textStrings.push(part.text);
        if (part.executableCode) textStrings.push("\n```" + part.executableCode.language + "\n" + part.executableCode.code + "\n```\n");
        if (part.codeExecutionResult) textStrings.push("\n```\n" + part.codeExecutionResult.output + "\n```\n");
    }
    if (textStrings.length > 0) return textStrings.join("");
    else return "";
}
/**
 * Returns functionCall of first candidate.
 */ function getFunctionCalls(response) {
    var _a, _b, _c, _d;
    const functionCalls = [];
    if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
        for (const part of (_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts)if (part.functionCall) functionCalls.push(part.functionCall);
    }
    if (functionCalls.length > 0) return functionCalls;
    else return undefined;
}
const badFinishReasons = [
    FinishReason.RECITATION,
    FinishReason.SAFETY,
    FinishReason.LANGUAGE
];
function hadBadFinishReason(candidate) {
    return !!candidate.finishReason && badFinishReasons.includes(candidate.finishReason);
}
function formatBlockErrorMessage(response) {
    var _a, _b, _c;
    let message = "";
    if ((!response.candidates || response.candidates.length === 0) && response.promptFeedback) {
        message += "Response was blocked";
        if ((_a = response.promptFeedback) === null || _a === void 0 ? void 0 : _a.blockReason) message += ` due to ${response.promptFeedback.blockReason}`;
        if ((_b = response.promptFeedback) === null || _b === void 0 ? void 0 : _b.blockReasonMessage) message += `: ${response.promptFeedback.blockReasonMessage}`;
    } else if ((_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0]) {
        const firstCandidate = response.candidates[0];
        if (hadBadFinishReason(firstCandidate)) {
            message += `Candidate was blocked due to ${firstCandidate.finishReason}`;
            if (firstCandidate.finishMessage) message += `: ${firstCandidate.finishMessage}`;
        }
    }
    return message;
}
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
typeof SuppressedError === "function" && SuppressedError;
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const responseLineRE = /^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
/**
 * Process a response.body stream from the backend and return an
 * iterator that provides one complete GenerateContentResponse at a time
 * and a promise that resolves with a single aggregated
 * GenerateContentResponse.
 *
 * @param response - Response from a fetch call
 */ function processStream(response) {
    const inputStream = response.body.pipeThrough(new TextDecoderStream("utf8", {
        fatal: true
    }));
    const responseStream = getResponseStream(inputStream);
    const [stream1, stream2] = responseStream.tee();
    return {
        stream: generateResponseSequence(stream1),
        response: getResponsePromise(stream2)
    };
}
async function getResponsePromise(stream) {
    const allResponses = [];
    const reader = stream.getReader();
    while(true){
        const { done, value } = await reader.read();
        if (done) return addHelpers(aggregateResponses(allResponses));
        allResponses.push(value);
    }
}
function generateResponseSequence(stream) {
    return __asyncGenerator(this, arguments, function* generateResponseSequence_1() {
        const reader = stream.getReader();
        while(true){
            const { value, done } = yield __await(reader.read());
            if (done) break;
            yield yield __await(addHelpers(value));
        }
    });
}
/**
 * Reads a raw stream from the fetch response and join incomplete
 * chunks, returning a new stream that provides a single complete
 * GenerateContentResponse in each iteration.
 */ function getResponseStream(inputStream) {
    const reader = inputStream.getReader();
    const stream = new ReadableStream({
        start (controller) {
            let currentText = "";
            return pump();
            function pump() {
                return reader.read().then(({ value, done })=>{
                    if (done) {
                        if (currentText.trim()) {
                            controller.error(new GoogleGenerativeAIError("Failed to parse stream"));
                            return;
                        }
                        controller.close();
                        return;
                    }
                    currentText += value;
                    let match = currentText.match(responseLineRE);
                    let parsedResponse;
                    while(match){
                        try {
                            parsedResponse = JSON.parse(match[1]);
                        } catch (e) {
                            controller.error(new GoogleGenerativeAIError(`Error parsing JSON response: "${match[1]}"`));
                            return;
                        }
                        controller.enqueue(parsedResponse);
                        currentText = currentText.substring(match[0].length);
                        match = currentText.match(responseLineRE);
                    }
                    return pump();
                }).catch((e)=>{
                    let err = e;
                    err.stack = e.stack;
                    if (err.name === "AbortError") err = new GoogleGenerativeAIAbortError("Request aborted when reading from the stream");
                    else err = new GoogleGenerativeAIError("Error reading from the stream");
                    throw err;
                });
            }
        }
    });
    return stream;
}
/**
 * Aggregates an array of `GenerateContentResponse`s into a single
 * GenerateContentResponse.
 */ function aggregateResponses(responses) {
    const lastResponse = responses[responses.length - 1];
    const aggregatedResponse = {
        promptFeedback: lastResponse === null || lastResponse === void 0 ? void 0 : lastResponse.promptFeedback
    };
    for (const response of responses){
        if (response.candidates) {
            let candidateIndex = 0;
            for (const candidate of response.candidates){
                if (!aggregatedResponse.candidates) aggregatedResponse.candidates = [];
                if (!aggregatedResponse.candidates[candidateIndex]) aggregatedResponse.candidates[candidateIndex] = {
                    index: candidateIndex
                };
                // Keep overwriting, the last one will be final
                aggregatedResponse.candidates[candidateIndex].citationMetadata = candidate.citationMetadata;
                aggregatedResponse.candidates[candidateIndex].groundingMetadata = candidate.groundingMetadata;
                aggregatedResponse.candidates[candidateIndex].finishReason = candidate.finishReason;
                aggregatedResponse.candidates[candidateIndex].finishMessage = candidate.finishMessage;
                aggregatedResponse.candidates[candidateIndex].safetyRatings = candidate.safetyRatings;
                /**
                 * Candidates should always have content and parts, but this handles
                 * possible malformed responses.
                 */ if (candidate.content && candidate.content.parts) {
                    if (!aggregatedResponse.candidates[candidateIndex].content) aggregatedResponse.candidates[candidateIndex].content = {
                        role: candidate.content.role || "user",
                        parts: []
                    };
                    const newPart = {};
                    for (const part of candidate.content.parts){
                        if (part.text) newPart.text = part.text;
                        if (part.functionCall) newPart.functionCall = part.functionCall;
                        if (part.executableCode) newPart.executableCode = part.executableCode;
                        if (part.codeExecutionResult) newPart.codeExecutionResult = part.codeExecutionResult;
                        if (Object.keys(newPart).length === 0) newPart.text = "";
                        aggregatedResponse.candidates[candidateIndex].content.parts.push(newPart);
                    }
                }
            }
            candidateIndex++;
        }
        if (response.usageMetadata) aggregatedResponse.usageMetadata = response.usageMetadata;
    }
    return aggregatedResponse;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function generateContentStream(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.STREAM_GENERATE_CONTENT, apiKey, /* stream */ true, JSON.stringify(params), requestOptions);
    return processStream(response);
}
async function generateContent(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.GENERATE_CONTENT, apiKey, /* stream */ false, JSON.stringify(params), requestOptions);
    const responseJson = await response.json();
    const enhancedResponse = addHelpers(responseJson);
    return {
        response: enhancedResponse
    };
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function formatSystemInstruction(input) {
    // null or undefined
    if (input == null) return undefined;
    else if (typeof input === "string") return {
        role: "system",
        parts: [
            {
                text: input
            }
        ]
    };
    else if (input.text) return {
        role: "system",
        parts: [
            input
        ]
    };
    else if (input.parts) {
        if (!input.role) return {
            role: "system",
            parts: input.parts
        };
        else return input;
    }
}
function formatNewContent(request) {
    let newParts = [];
    if (typeof request === "string") newParts = [
        {
            text: request
        }
    ];
    else {
        for (const partOrString of request)if (typeof partOrString === "string") newParts.push({
            text: partOrString
        });
        else newParts.push(partOrString);
    }
    return assignRoleToPartsAndValidateSendMessageRequest(newParts);
}
/**
 * When multiple Part types (i.e. FunctionResponsePart and TextPart) are
 * passed in a single Part array, we may need to assign different roles to each
 * part. Currently only FunctionResponsePart requires a role other than 'user'.
 * @private
 * @param parts Array of parts to pass to the model
 * @returns Array of content items
 */ function assignRoleToPartsAndValidateSendMessageRequest(parts) {
    const userContent = {
        role: "user",
        parts: []
    };
    const functionContent = {
        role: "function",
        parts: []
    };
    let hasUserContent = false;
    let hasFunctionContent = false;
    for (const part of parts)if ("functionResponse" in part) {
        functionContent.parts.push(part);
        hasFunctionContent = true;
    } else {
        userContent.parts.push(part);
        hasUserContent = true;
    }
    if (hasUserContent && hasFunctionContent) throw new GoogleGenerativeAIError("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");
    if (!hasUserContent && !hasFunctionContent) throw new GoogleGenerativeAIError("No content is provided for sending chat message.");
    if (hasUserContent) return userContent;
    return functionContent;
}
function formatCountTokensInput(params, modelParams) {
    var _a;
    let formattedGenerateContentRequest = {
        model: modelParams === null || modelParams === void 0 ? void 0 : modelParams.model,
        generationConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.generationConfig,
        safetySettings: modelParams === null || modelParams === void 0 ? void 0 : modelParams.safetySettings,
        tools: modelParams === null || modelParams === void 0 ? void 0 : modelParams.tools,
        toolConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.toolConfig,
        systemInstruction: modelParams === null || modelParams === void 0 ? void 0 : modelParams.systemInstruction,
        cachedContent: (_a = modelParams === null || modelParams === void 0 ? void 0 : modelParams.cachedContent) === null || _a === void 0 ? void 0 : _a.name,
        contents: []
    };
    const containsGenerateContentRequest = params.generateContentRequest != null;
    if (params.contents) {
        if (containsGenerateContentRequest) throw new GoogleGenerativeAIRequestInputError("CountTokensRequest must have one of contents or generateContentRequest, not both.");
        formattedGenerateContentRequest.contents = params.contents;
    } else if (containsGenerateContentRequest) formattedGenerateContentRequest = Object.assign(Object.assign({}, formattedGenerateContentRequest), params.generateContentRequest);
    else {
        // Array or string
        const content = formatNewContent(params);
        formattedGenerateContentRequest.contents = [
            content
        ];
    }
    return {
        generateContentRequest: formattedGenerateContentRequest
    };
}
function formatGenerateContentInput(params) {
    let formattedRequest;
    if (params.contents) formattedRequest = params;
    else {
        // Array or string
        const content = formatNewContent(params);
        formattedRequest = {
            contents: [
                content
            ]
        };
    }
    if (params.systemInstruction) formattedRequest.systemInstruction = formatSystemInstruction(params.systemInstruction);
    return formattedRequest;
}
function formatEmbedContentInput(params) {
    if (typeof params === "string" || Array.isArray(params)) {
        const content = formatNewContent(params);
        return {
            content
        };
    }
    return params;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // https://ai.google.dev/api/rest/v1beta/Content#part
const VALID_PART_FIELDS = [
    "text",
    "inlineData",
    "functionCall",
    "functionResponse",
    "executableCode",
    "codeExecutionResult"
];
const VALID_PARTS_PER_ROLE = {
    user: [
        "text",
        "inlineData"
    ],
    function: [
        "functionResponse"
    ],
    model: [
        "text",
        "functionCall",
        "executableCode",
        "codeExecutionResult"
    ],
    // System instructions shouldn't be in history anyway.
    system: [
        "text"
    ]
};
function validateChatHistory(history) {
    let prevContent = false;
    for (const currContent of history){
        const { role, parts } = currContent;
        if (!prevContent && role !== "user") throw new GoogleGenerativeAIError(`First content should be with role 'user', got ${role}`);
        if (!POSSIBLE_ROLES.includes(role)) throw new GoogleGenerativeAIError(`Each item should include role field. Got ${role} but valid roles are: ${JSON.stringify(POSSIBLE_ROLES)}`);
        if (!Array.isArray(parts)) throw new GoogleGenerativeAIError("Content should have 'parts' property with an array of Parts");
        if (parts.length === 0) throw new GoogleGenerativeAIError("Each Content should have at least one part");
        const countFields = {
            text: 0,
            inlineData: 0,
            functionCall: 0,
            functionResponse: 0,
            fileData: 0,
            executableCode: 0,
            codeExecutionResult: 0
        };
        for (const part of parts){
            for (const key of VALID_PART_FIELDS)if (key in part) countFields[key] += 1;
        }
        const validParts = VALID_PARTS_PER_ROLE[role];
        for (const key of VALID_PART_FIELDS){
            if (!validParts.includes(key) && countFields[key] > 0) throw new GoogleGenerativeAIError(`Content with role '${role}' can't contain '${key}' part`);
        }
        prevContent = true;
    }
}
/**
 * Returns true if the response is valid (could be appended to the history), flase otherwise.
 */ function isValidResponse(response) {
    var _a;
    if (response.candidates === undefined || response.candidates.length === 0) return false;
    const content = (_a = response.candidates[0]) === null || _a === void 0 ? void 0 : _a.content;
    if (content === undefined) return false;
    if (content.parts === undefined || content.parts.length === 0) return false;
    for (const part of content.parts){
        if (part === undefined || Object.keys(part).length === 0) return false;
        if (part.text !== undefined && part.text === "") return false;
    }
    return true;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Do not log a message for this error.
 */ const SILENT_ERROR = "SILENT_ERROR";
/**
 * ChatSession class that enables sending chat messages and stores
 * history of sent and received messages so far.
 *
 * @public
 */ class ChatSession {
    constructor(apiKey, model, params, _requestOptions = {}){
        this.model = model;
        this.params = params;
        this._requestOptions = _requestOptions;
        this._history = [];
        this._sendPromise = Promise.resolve();
        this._apiKey = apiKey;
        if (params === null || params === void 0 ? void 0 : params.history) {
            validateChatHistory(params.history);
            this._history = params.history;
        }
    }
    /**
     * Gets the chat history so far. Blocked prompts are not added to history.
     * Blocked candidates are not added to history, nor are the prompts that
     * generated them.
     */ async getHistory() {
        await this._sendPromise;
        return this._history;
    }
    /**
     * Sends a chat message and receives a non-streaming
     * {@link GenerateContentResult}.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async sendMessage(request, requestOptions = {}) {
        var _a, _b, _c, _d, _e, _f;
        await this._sendPromise;
        const newContent = formatNewContent(request);
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
            tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
            toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
            systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
            cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
            contents: [
                ...this._history,
                newContent
            ]
        };
        const chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        let finalResult;
        // Add onto the chain.
        this._sendPromise = this._sendPromise.then(()=>generateContent(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions)).then((result)=>{
            var _a;
            if (isValidResponse(result.response)) {
                this._history.push(newContent);
                const responseContent = Object.assign({
                    parts: [],
                    // Response seems to come back without a role set.
                    role: "model"
                }, (_a = result.response.candidates) === null || _a === void 0 ? void 0 : _a[0].content);
                this._history.push(responseContent);
            } else {
                const blockErrorMessage = formatBlockErrorMessage(result.response);
                if (blockErrorMessage) console.warn(`sendMessage() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
            }
            finalResult = result;
        }).catch((e)=>{
            // Resets _sendPromise to avoid subsequent calls failing and throw error.
            this._sendPromise = Promise.resolve();
            throw e;
        });
        await this._sendPromise;
        return finalResult;
    }
    /**
     * Sends a chat message and receives the response as a
     * {@link GenerateContentStreamResult} containing an iterable stream
     * and a response promise.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async sendMessageStream(request, requestOptions = {}) {
        var _a, _b, _c, _d, _e, _f;
        await this._sendPromise;
        const newContent = formatNewContent(request);
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
            tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
            toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
            systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
            cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
            contents: [
                ...this._history,
                newContent
            ]
        };
        const chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        const streamPromise = generateContentStream(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions);
        // Add onto the chain.
        this._sendPromise = this._sendPromise.then(()=>streamPromise)// This must be handled to avoid unhandled rejection, but jump
        // to the final catch block with a label to not log this error.
        .catch((_ignored)=>{
            throw new Error(SILENT_ERROR);
        }).then((streamResult)=>streamResult.response).then((response)=>{
            if (isValidResponse(response)) {
                this._history.push(newContent);
                const responseContent = Object.assign({}, response.candidates[0].content);
                // Response seems to come back without a role set.
                if (!responseContent.role) responseContent.role = "model";
                this._history.push(responseContent);
            } else {
                const blockErrorMessage = formatBlockErrorMessage(response);
                if (blockErrorMessage) console.warn(`sendMessageStream() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
            }
        }).catch((e)=>{
            // Errors in streamPromise are already catchable by the user as
            // streamPromise is returned.
            // Avoid duplicating the error message in logs.
            if (e.message !== SILENT_ERROR) // Users do not have access to _sendPromise to catch errors
            // downstream from streamPromise, so they should not throw.
            console.error(e);
        });
        return streamPromise;
    }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function countTokens(apiKey, model, params, singleRequestOptions) {
    const response = await makeModelRequest(model, Task.COUNT_TOKENS, apiKey, false, JSON.stringify(params), singleRequestOptions);
    return response.json();
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function embedContent(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.EMBED_CONTENT, apiKey, false, JSON.stringify(params), requestOptions);
    return response.json();
}
async function batchEmbedContents(apiKey, model, params, requestOptions) {
    const requestsWithModel = params.requests.map((request)=>{
        return Object.assign(Object.assign({}, request), {
            model
        });
    });
    const response = await makeModelRequest(model, Task.BATCH_EMBED_CONTENTS, apiKey, false, JSON.stringify({
        requests: requestsWithModel
    }), requestOptions);
    return response.json();
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Class for generative model APIs.
 * @public
 */ class GenerativeModel {
    constructor(apiKey, modelParams, _requestOptions = {}){
        this.apiKey = apiKey;
        this._requestOptions = _requestOptions;
        if (modelParams.model.includes("/")) // Models may be named "models/model-name" or "tunedModels/model-name"
        this.model = modelParams.model;
        else // If path is not included, assume it's a non-tuned model.
        this.model = `models/${modelParams.model}`;
        this.generationConfig = modelParams.generationConfig || {};
        this.safetySettings = modelParams.safetySettings || [];
        this.tools = modelParams.tools;
        this.toolConfig = modelParams.toolConfig;
        this.systemInstruction = formatSystemInstruction(modelParams.systemInstruction);
        this.cachedContent = modelParams.cachedContent;
    }
    /**
     * Makes a single non-streaming call to the model
     * and returns an object containing a single {@link GenerateContentResponse}.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async generateContent(request, requestOptions = {}) {
        var _a;
        const formattedParams = formatGenerateContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return generateContent(this.apiKey, this.model, Object.assign({
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
        }, formattedParams), generativeModelRequestOptions);
    }
    /**
     * Makes a single streaming call to the model and returns an object
     * containing an iterable stream that iterates over all chunks in the
     * streaming response as well as a promise that returns the final
     * aggregated response.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async generateContentStream(request, requestOptions = {}) {
        var _a;
        const formattedParams = formatGenerateContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return generateContentStream(this.apiKey, this.model, Object.assign({
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
        }, formattedParams), generativeModelRequestOptions);
    }
    /**
     * Gets a new {@link ChatSession} instance which can be used for
     * multi-turn chats.
     */ startChat(startChatParams) {
        var _a;
        return new ChatSession(this.apiKey, this.model, Object.assign({
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
        }, startChatParams), this._requestOptions);
    }
    /**
     * Counts the tokens in the provided request.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async countTokens(request, requestOptions = {}) {
        const formattedParams = formatCountTokensInput(request, {
            model: this.model,
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: this.cachedContent
        });
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return countTokens(this.apiKey, this.model, formattedParams, generativeModelRequestOptions);
    }
    /**
     * Embeds the provided content.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async embedContent(request, requestOptions = {}) {
        const formattedParams = formatEmbedContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return embedContent(this.apiKey, this.model, formattedParams, generativeModelRequestOptions);
    }
    /**
     * Embeds an array of {@link EmbedContentRequest}s.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async batchEmbedContents(batchEmbedContentRequest, requestOptions = {}) {
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return batchEmbedContents(this.apiKey, this.model, batchEmbedContentRequest, generativeModelRequestOptions);
    }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Top-level class for this SDK
 * @public
 */ class GoogleGenerativeAI {
    constructor(apiKey){
        this.apiKey = apiKey;
    }
    /**
     * Gets a {@link GenerativeModel} instance for the provided model name.
     */ getGenerativeModel(modelParams, requestOptions) {
        if (!modelParams.model) throw new GoogleGenerativeAIError(`Must provide a model name. ` + `Example: genai.getGenerativeModel({ model: 'my-model-name' })`);
        return new GenerativeModel(this.apiKey, modelParams, requestOptions);
    }
    /**
     * Creates a {@link GenerativeModel} instance from provided content cache.
     */ getGenerativeModelFromCachedContent(cachedContent, modelParams, requestOptions) {
        if (!cachedContent.name) throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `name` field.");
        if (!cachedContent.model) throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `model` field.");
        /**
         * Not checking tools and toolConfig for now as it would require a deep
         * equality comparison and isn't likely to be a common case.
         */ const disallowedDuplicates = [
            "model",
            "systemInstruction"
        ];
        for (const key of disallowedDuplicates)if ((modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) && cachedContent[key] && (modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) !== cachedContent[key]) {
            if (key === "model") {
                const modelParamsComp = modelParams.model.startsWith("models/") ? modelParams.model.replace("models/", "") : modelParams.model;
                const cachedContentComp = cachedContent.model.startsWith("models/") ? cachedContent.model.replace("models/", "") : cachedContent.model;
                if (modelParamsComp === cachedContentComp) continue;
            }
            throw new GoogleGenerativeAIRequestInputError(`Different value for "${key}" specified in modelParams` + ` (${modelParams[key]}) and cachedContent (${cachedContent[key]})`);
        }
        const modelParamsFromCache = Object.assign(Object.assign({}, modelParams), {
            model: cachedContent.model,
            tools: cachedContent.tools,
            toolConfig: cachedContent.toolConfig,
            systemInstruction: cachedContent.systemInstruction,
            cachedContent
        });
        return new GenerativeModel(this.apiKey, modelParamsFromCache, requestOptions);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"iIXqM":[function(require,module,exports) {
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
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"6E8Wy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_KEY_STORAGE_KEY", ()=>API_KEY_STORAGE_KEY);
parcelHelpers.export(exports, "AUTO_PROGRESS_KEY", ()=>AUTO_PROGRESS_KEY);
parcelHelpers.export(exports, "getApiKey", ()=>getApiKey);
parcelHelpers.export(exports, "setApiKey", ()=>setApiKey);
parcelHelpers.export(exports, "getAutoProgress", ()=>getAutoProgress);
parcelHelpers.export(exports, "setAutoProgress", ()=>setAutoProgress);
var _storage = require("@plasmohq/storage");
const storage = new (0, _storage.Storage)();
const API_KEY_STORAGE_KEY = "gemini-api-key";
const AUTO_PROGRESS_KEY = "auto-progress-check";
const getApiKey = async ()=>{
    return await storage.get(API_KEY_STORAGE_KEY);
};
const setApiKey = async (key)=>{
    await storage.set(API_KEY_STORAGE_KEY, key);
};
const getAutoProgress = async ()=>{
    const val = await storage.get(AUTO_PROGRESS_KEY);
    // Default to true if not set
    return val === undefined || val === true || val === "true";
};
const setAutoProgress = async (enabled)=>{
    await storage.set(AUTO_PROGRESS_KEY, enabled);
};

},{"@plasmohq/storage":"i0YkM","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"i0YkM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseStorage", ()=>o);
parcelHelpers.export(exports, "Storage", ()=>g);
var _pify = require("pify");
var _pifyDefault = parcelHelpers.interopDefault(_pify);
var l = ()=>{
    try {
        let e = globalThis.navigator?.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (e[1] === "Chrome") return parseInt(e[2]) < 100 || globalThis.chrome.runtime?.getManifest()?.manifest_version === 2;
    } catch  {
        return !1;
    }
    return !1;
};
var o = class {
    #r;
    #t;
    get primaryClient() {
        return this.#t;
    }
    #e;
    get secondaryClient() {
        return this.#e;
    }
    #a;
    get area() {
        return this.#a;
    }
    get hasWebApi() {
        try {
            return typeof window < "u" && !!window.localStorage;
        } catch (e) {
            return console.error(e), !1;
        }
    }
    #s = new Map;
    #i;
    get copiedKeySet() {
        return this.#i;
    }
    isCopied = (e)=>this.hasWebApi && (this.allCopied || this.copiedKeySet.has(e));
    #n = !1;
    get allCopied() {
        return this.#n;
    }
    getExtStorageApi = ()=>globalThis.browser?.storage || globalThis.chrome?.storage;
    get hasExtensionApi() {
        try {
            return !!this.getExtStorageApi();
        } catch (e) {
            return console.error(e), !1;
        }
    }
    isWatchSupported = ()=>this.hasExtensionApi;
    keyNamespace = "";
    isValidKey = (e)=>e.startsWith(this.keyNamespace);
    getNamespacedKey = (e)=>`${this.keyNamespace}${e}`;
    getUnnamespacedKey = (e)=>e.slice(this.keyNamespace.length);
    serde = {
        serializer: JSON.stringify,
        deserializer: JSON.parse
    };
    constructor({ area: e = "sync", allCopied: t = !1, copiedKeyList: s = [], serde: r = {} } = {}){
        this.setCopiedKeySet(s), this.#a = e, this.#n = t, this.serde = {
            ...this.serde,
            ...r
        };
        try {
            this.hasWebApi && (t || s.length > 0) && (this.#e = window.localStorage);
        } catch  {}
        try {
            this.hasExtensionApi && (this.#r = this.getExtStorageApi(), l() ? this.#t = (0, _pifyDefault.default)(this.#r[this.area], {
                exclude: [
                    "getBytesInUse"
                ],
                errorFirst: !1
            }) : this.#t = this.#r[this.area]);
        } catch  {}
    }
    setCopiedKeySet(e) {
        this.#i = new Set(e);
    }
    rawGetAll = ()=>this.#t?.get();
    getAll = async ()=>{
        let e = await this.rawGetAll();
        return Object.entries(e).filter(([t])=>this.isValidKey(t)).reduce((t, [s, r])=>(t[this.getUnnamespacedKey(s)] = r, t), {});
    };
    copy = async (e)=>{
        let t = e === void 0;
        if (!t && !this.copiedKeySet.has(e) || !this.allCopied || !this.hasExtensionApi) return !1;
        let s = this.allCopied ? await this.rawGetAll() : await this.#t.get((t ? [
            ...this.copiedKeySet
        ] : [
            e
        ]).map(this.getNamespacedKey));
        if (!s) return !1;
        let r = !1;
        for(let a in s){
            let i = s[a], n = this.#e?.getItem(a);
            this.#e?.setItem(a, i), r ||= i !== n;
        }
        return r;
    };
    rawGet = async (e)=>(await this.rawGetMany([
            e
        ]))[e];
    rawGetMany = async (e)=>this.hasExtensionApi ? await this.#t.get(e) : e.filter(this.isCopied).reduce((t, s)=>(t[s] = this.#e?.getItem(s), t), {});
    rawSet = async (e, t)=>await this.rawSetMany({
            [e]: t
        });
    rawSetMany = async (e)=>(this.#e && Object.entries(e).filter(([t])=>this.isCopied(t)).forEach(([t, s])=>this.#e.setItem(t, s)), this.hasExtensionApi && await this.#t.set(e), null);
    clear = async (e = !1)=>{
        e && this.#e?.clear(), await this.#t.clear();
    };
    rawRemove = async (e)=>{
        await this.rawRemoveMany([
            e
        ]);
    };
    rawRemoveMany = async (e)=>{
        this.#e && e.filter(this.isCopied).forEach((t)=>this.#e.removeItem(t)), this.hasExtensionApi && await this.#t.remove(e);
    };
    removeAll = async ()=>{
        let e = await this.getAll(), t = Object.keys(e);
        await this.removeMany(t);
    };
    watch = (e)=>{
        let t = this.isWatchSupported();
        return t && this.#o(e), t;
    };
    #o = (e)=>{
        for(let t in e){
            let s = this.getNamespacedKey(t), r = this.#s.get(s)?.callbackSet || new Set;
            if (r.add(e[t]), r.size > 1) continue;
            let a = (i, n)=>{
                if (n !== this.area || !i[s]) return;
                let h = this.#s.get(s);
                if (!h) throw new Error(`Storage comms does not exist for nsKey: ${s}`);
                Promise.all([
                    this.parseValue(i[s].newValue),
                    this.parseValue(i[s].oldValue)
                ]).then(([y, d])=>{
                    for (let p of h.callbackSet)p({
                        newValue: y,
                        oldValue: d
                    }, n);
                });
            };
            this.#r.onChanged.addListener(a), this.#s.set(s, {
                callbackSet: r,
                listener: a
            });
        }
    };
    unwatch = (e)=>{
        let t = this.isWatchSupported();
        return t && this.#c(e), t;
    };
    #c(e) {
        for(let t in e){
            let s = this.getNamespacedKey(t), r = e[t], a = this.#s.get(s);
            a && (a.callbackSet.delete(r), a.callbackSet.size === 0 && (this.#s.delete(s), this.#r.onChanged.removeListener(a.listener)));
        }
    }
    unwatchAll = ()=>this.#h();
    #h() {
        this.#s.forEach(({ listener: e })=>this.#r.onChanged.removeListener(e)), this.#s.clear();
    }
    async getItem(e) {
        return this.get(e);
    }
    async getItems(e) {
        return await this.getMany(e);
    }
    async setItem(e, t) {
        await this.set(e, t);
    }
    async setItems(e) {
        await await this.setMany(e);
    }
    async removeItem(e) {
        return this.remove(e);
    }
    async removeItems(e) {
        return await this.removeMany(e);
    }
}, g = class extends o {
    get = async (e)=>{
        let t = this.getNamespacedKey(e), s = await this.rawGet(t);
        return this.parseValue(s);
    };
    getMany = async (e)=>{
        let t = e.map(this.getNamespacedKey), s = await this.rawGetMany(t), r = await Promise.all(Object.values(s).map(this.parseValue));
        return Object.keys(s).reduce((a, i, n)=>(a[this.getUnnamespacedKey(i)] = r[n], a), {});
    };
    set = async (e, t)=>{
        let s = this.getNamespacedKey(e), r = this.serde.serializer(t);
        return this.rawSet(s, r);
    };
    setMany = async (e)=>{
        let t = Object.entries(e).reduce((s, [r, a])=>(s[this.getNamespacedKey(r)] = this.serde.serializer(a), s), {});
        return await this.rawSetMany(t);
    };
    remove = async (e)=>{
        let t = this.getNamespacedKey(e);
        return this.rawRemove(t);
    };
    removeMany = async (e)=>{
        let t = e.map(this.getNamespacedKey);
        return await this.rawRemoveMany(t);
    };
    setNamespace = (e)=>{
        this.keyNamespace = e;
    };
    parseValue = async (e)=>{
        try {
            if (e !== void 0) return this.serde.deserializer(e);
        } catch (t) {
            console.error(t);
        }
    };
};

},{"pify":"gQysO","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"gQysO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>pify);
const processFunction = (function_, options, proxy, unwrapped)=>function(...arguments_) {
        const P = options.promiseModule;
        return new P((resolve, reject)=>{
            if (options.multiArgs) arguments_.push((...result)=>{
                if (options.errorFirst) {
                    if (result[0]) reject(result);
                    else {
                        result.shift();
                        resolve(result);
                    }
                } else resolve(result);
            });
            else if (options.errorFirst) arguments_.push((error, result)=>{
                if (error) reject(error);
                else resolve(result);
            });
            else arguments_.push(resolve);
            const self = this === proxy ? unwrapped : this;
            Reflect.apply(function_, self, arguments_);
        });
    };
const filterCache = new WeakMap();
function pify(input, options) {
    options = {
        exclude: [
            /.+(?:Sync|Stream)$/
        ],
        errorFirst: true,
        promiseModule: Promise,
        ...options
    };
    const objectType = typeof input;
    if (!(input !== null && (objectType === "object" || objectType === "function"))) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${input === null ? "null" : objectType}\``);
    const filter = (target, key)=>{
        let cached = filterCache.get(target);
        if (!cached) {
            cached = {};
            filterCache.set(target, cached);
        }
        if (key in cached) return cached[key];
        const match = (pattern)=>typeof pattern === "string" || typeof key === "symbol" ? key === pattern : pattern.test(key);
        const descriptor = Reflect.getOwnPropertyDescriptor(target, key);
        const writableOrConfigurableOwn = descriptor === undefined || descriptor.writable || descriptor.configurable;
        const included = options.include ? options.include.some((element)=>match(element)) : !options.exclude.some((element)=>match(element));
        const shouldFilter = included && writableOrConfigurableOwn;
        cached[key] = shouldFilter;
        return shouldFilter;
    };
    const cache = new WeakMap();
    const proxy = new Proxy(input, {
        apply (target, thisArg, args) {
            const cached = cache.get(target);
            if (cached) return Reflect.apply(cached, thisArg, args);
            const pified = options.excludeMain ? target : processFunction(target, options, proxy, target);
            cache.set(target, pified);
            return Reflect.apply(pified, thisArg, args);
        },
        get (target, key) {
            const property = target[key];
            // eslint-disable-next-line no-use-extend-native/no-use-extend-native
            if (!filter(target, key) || property === Function.prototype[key]) return property;
            const cached = cache.get(property);
            if (cached) return cached;
            if (typeof property === "function") {
                const pified = processFunction(property, options, proxy, target);
                cache.set(property, pified);
                return pified;
            }
            return property;
        }
    });
    return proxy;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}]},["aUjqs","8oeFb"], "8oeFb", "parcelRequire21de")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUk7SUFFWix1Q0FBdUM7SUFDdkMsTUFBTSxZQUFZO1FBQ2QsWUFBWTtZQUNSLE1BQU0sWUFBWSxRQUFRLDRCQUE0QjtZQUN0RCxVQUFVO1FBQ2Q7SUFDSjtJQUVBLElBQUksU0FBUyxDQUFDLFdBQVcsRUFBRSxTQUFTLDJDQUEyQyxFQUFFLFlBQVksTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLGlEQUFpRDs7SUFFaEssSUFBSSxpQkFDQSxVQUFVLENBQUM7Ozs7Ozs7QUFPbkIsRUFBRSxLQUFLLFVBQVUsaUJBQWlCLE1BQU0sR0FBRyxDQUFDO0lBR3hDLE1BQU0sU0FBUyxNQUFNLE1BQU0sZ0JBQWdCO1FBQUM7UUFBUTtLQUFVO0lBQzlELE1BQU0sT0FBTyxPQUFPLFNBQVM7SUFFN0IsSUFBSTtRQUNBLE9BQU8sS0FBSyxNQUFNO0lBQ3RCLEVBQUUsT0FBTyxHQUFHO1FBQ1IsUUFBUSxNQUFNLG1DQUFtQztRQUNqRCxNQUFNLElBQUksTUFBTTtJQUNwQjtBQUNKOzs7QTs7OztDOztBLGlEO0EsaUQ7QSwwRDtBLDREO0Esa0Q7QSx5RDtBLHFEO0Esd0Q7QSxrRTtBLDZEO0Esa0U7QSx5RTtBLHFFO0Esd0Q7QSxrRDtBLHFEO0EsNkM7QSxvRDtBLGdEO0EsOEM7QSxJO0EsQyxTLFU7SSxpQixHLFUsQyxTLEc7SSxpQixHLFUsQyxTLEc7SSxrQixHLFUsQyxVLEc7SSxrQixHLFUsQyxVLEc7SSxnQixHLFUsQyxRLEc7SSxpQixHLFUsQyxTLEc7QSxDLEUsYyxDLGEsQyxDO0E7Ozs7Ozs7Ozs7Ozs7OztDLEc7O0MsRyxJO0EsQyxTLHNCO0ksc0IsQyx1QixHO0ksc0IsQyxTLEc7QSxDLEUsMEIsQyx5QixDLEM7QTs7O0MsRyxJO0EsQyxTLE87STs7SyxHLE8sQyxzQixHO0k7O0ssRyxPLEMsYSxHO0k7OztLLEcsTyxDLGlCLEc7STs7O0ssRyxPLEMsNEIsRztBLEMsRSxXLEMsVSxDLEM7QTs7Ozs7Ozs7Ozs7Ozs7O0MsRzs7O0MsRyxNLGlCO0k7STtJO0k7QztBOzs7QyxHLEk7QSxDLFMsWTtJLFksQyw0QixHO0ksWSxDLDRCLEc7SSxZLEMsa0MsRztJLFksQywyQixHO0ksWSxDLGtDLEc7SSxZLEMsZ0MsRztBLEMsRSxnQixDLGUsQyxDO0E7OztDLEcsSTtBLEMsUyxrQjtJLDhCLEcsa0IsQyxtQyxHO0ksNkMsRyxrQixDLHNCLEc7SSxxRCxHLGtCLEMseUIsRztJLDhELEcsa0IsQyxrQixHO0ksaUMsRyxrQixDLGEsRztBLEMsRSxzQixDLHFCLEMsQztBOzs7QyxHLEk7QSxDLFMsZTtJLGdDLEcsZSxDLCtCLEc7SSxxRCxHLGUsQyxhLEc7SSw4QyxHLGUsQyxNLEc7SSxpRCxHLGUsQyxTLEc7SSwrQyxHLGUsQyxPLEc7QSxDLEUsbUIsQyxrQixDLEM7QTs7O0MsRyxJO0EsQyxTLFc7SSxzQztJLFcsQyw2QixHO0ksMEM7SSxXLEMsUyxHO0ksd0Q7SSxXLEMsUSxHO0EsQyxFLGUsQyxjLEMsQztBOzs7QyxHLEk7QSxDLFMsWTtJLHVDO0ksWSxDLDRCLEc7SSw2RDtJLFksQyxPLEc7SSx3RTtJLFksQyxhLEc7SSx3RDtJLFksQyxTLEc7SSw0RDtJLFksQyxhLEc7SSx1RTtJLFksQyxXLEc7SSx5RTtJLFksQyxZLEc7SSwwRTtJLFksQyxxQixHO0ksMEg7SSxZLEMsTyxHO0ksdUQ7SSxZLEMsMEIsRztJLGtCO0ksWSxDLFEsRztBLEMsRSxnQixDLGUsQyxDO0E7OztDLEcsSTtBLEMsUyxRO0ksUSxDLHdCLEc7SSxRLEMsa0IsRztJLFEsQyxxQixHO0ksUSxDLHNCLEc7SSxRLEMsaUIsRztJLFEsQyxhLEc7QSxDLEUsWSxDLFcsQyxDO0E7O0MsRyxJO0EsQyxTLG1CO0ksb0U7SSxtQixDLG1CLEc7SSwwRTtJLGtDO0ksbUIsQyxPLEc7SSxrRTtJLDJFO0kscUU7SSx5RTtJLG1CLEMsTSxHO0ksMkU7SSx5QztJLG1CLEMsTyxHO0EsQyxFLHVCLEMsc0IsQyxDO0E7OztDLEcsSTtBLEMsUyxvQjtJLG9FO0ksb0IsQyxtQixHO0ksMEQ7SSxvQixDLGUsRztBLEMsRSx3QixDLHVCLEMsQztBOzs7Ozs7Ozs7Ozs7Ozs7QyxHOzs7QyxHLE0sZ0M7SSxZLE8sQztRLEssQyxDLDRCLEUsUSxDO0k7QTtBOzs7O0MsRyxNLHdDO0ksWSxPLEUsUSxDO1EsSyxDO1EsSSxDLFc7STtBO0E7Ozs7QyxHLE0scUM7SSxZLE8sRSxNLEUsVSxFLFksQztRLEssQztRLEksQyxTO1EsSSxDLGE7USxJLEMsZTtJO0E7QTs7O0MsRyxNLDRDO0E7QTs7OztDLEcsTSxxQztBO0E7Ozs7Ozs7Ozs7Ozs7OztDLEcsTSxtQjtBLE0sc0I7QTs7O0MsRyxNLGtCO0EsTSxxQjtBLEk7QSxDLFMsSTtJLEksQyxtQixHO0ksSSxDLDBCLEc7SSxJLEMsZSxHO0ksSSxDLGdCLEc7SSxJLEMsdUIsRztBLEMsRSxRLEMsTyxDLEM7QSxNO0ksWSxLLEUsSSxFLE0sRSxNLEUsYyxDO1EsSSxDLFE7USxJLEMsTztRLEksQyxTO1EsSSxDLFM7USxJLEMsaUI7STtJLFc7USxJLEk7USxNLGEsQSxDLEEsQyxLLEksQyxjLE0sUSxPLEssSSxLLEksRyxVLEs7USxNLFUsQSxDLEEsQyxLLEksQyxjLE0sUSxPLEssSSxLLEksRyxPLEs7USxJLE0sQyxFLFEsQyxFLFcsQyxFLEksQyxNLEMsRSxJLEMsSyxDO1EsSSxJLEMsUSxPO1EsTztJO0E7QTs7QyxHLFMsaUIsYztJLE0sZ0IsRTtJLEksbUIsUSxtQixLLEksSyxJLGUsVyxjLEssZTtJLGMsSyxDLEUsbUIsQyxFLGdCLEM7SSxPLGMsSztBO0EsZSxXLEc7SSxJO0ksTSxVLEk7SSxRLE8sZ0I7SSxRLE8scUIsaUIsSTtJLFEsTyxrQixJO0ksSSxnQixBLEMsSyxJLGMsTSxRLE8sSyxJLEssSSxHO0ksSSxlO1EsSSxDLEMseUIsTyxHLEk7WSxnQixJLFE7USxFLE8sRztZLE0sSSxvQyxDLHNDLEUsSyxVLGUsYSxFLEUsUSxDO1E7USxLLE0sQyxZLFksSSxjLFU7WSxJLGUsa0IsTSxJLG9DLEMsZ0MsRSxXLEM7aUIsSSxlLHFCLE0sSSxvQyxDLFksRSxXLDBDLEM7WSxRLE8sWTtRO0k7SSxPO0E7QSxlLHNCLEssRSxJLEUsTSxFLE0sRSxJLEUsYztJLE0sTSxJLFcsTyxNLFEsUTtJLE87USxLLEk7USxjLE8sTyxPLE8sQyxHLGtCLGtCO1ksUTtZLFMsTSxXO1k7UTtJO0E7QSxlLGlCLEssRSxJLEUsTSxFLE0sRSxJLEUsaUIsQyxDLEUsc0M7QSxVLEs7SSxNLEUsRyxFLFksRSxHLE0sc0IsTyxNLFEsUSxNO0ksTyxZLEssYztBO0EsZSxZLEcsRSxZLEUsVSxLO0ksSTtJLEk7USxXLE0sUSxLO0ksRSxPLEc7USxvQixHO0k7SSxJLEMsUyxJLE0sb0IsVTtJLE87QTtBLFMsb0IsQyxFLEc7SSxJLE07SSxJLEksUyxjO1EsTSxJLDZCLEMsOEIsRSxJLFcsRSxFLEUsUSxDO1EsSSxRLEU7SSxPLEksQyxDLGEsZ0MsYSxtQyxHO1EsTSxJLHdCLEMsb0IsRSxJLFcsRSxFLEUsUSxDO1EsSSxRLEU7STtJLE07QTtBLGUsb0IsUSxFLEc7SSxJLFU7SSxJO0ksSTtRLE0sTyxNLFM7USxVLEssTTtRLEksSyxNLFM7WSxXLEMsQyxFLEssVSxLLE0sUyxDO1ksZSxLLE07UTtJLEUsTyxHO0ksVTtJO0ksTSxJLDZCLEMsb0IsRSxJLFcsRyxFLFMsTyxDLEUsUyxXLEUsRSxRLEMsRSxTLFEsUyxZO0E7QTs7OztDLEcsUyxrQixjO0ksTSxlLEM7SSxJLEEsQyxtQixRLG1CLEssSSxLLEksZSxNLE0sYSxBLEMsbUIsUSxtQixLLEksSyxJLGUsTyxLLEc7USxNLGEsSTtRLEksQSxDLG1CLFEsbUIsSyxJLEssSSxlLE8sSyxHLFcsSSxXLFMsZTtRLEksbUIsUSxtQixLLEksSyxJLGUsUSxlLE8saUIsUztZLFc7UTtRLGEsUyxXO0k7SSxPO0E7QTs7Ozs7Ozs7Ozs7Ozs7O0MsRzs7O0MsRyxTLFcsUTtJLFMsTztRLEksUyxjLFMsVyxTLEc7WSxJLFMsVyxTLEcsUSxLLEMsa0IsRSxTLFcsTyxDLEMsRyxDLDBELEMsRyxDLGdFLEM7WSxJLG1CLFMsVSxDLEUsRyxNLEksZ0MsQyxFLHdCLFUsQyxFO1ksTyxRO1EsTyxJLFMsZ0IsTSxJLGdDLEMsb0IsRSx3QixVLEMsRTtRLE87STtJOztLLEcsUyxlO1EsSSxTLGMsUyxXLFMsRztZLEksUyxXLFMsRyxRLEssQyxrQixFLFMsVyxPLEMsQyxHLEMsb0UsQyxHLEMsZ0UsQztZLEksbUIsUyxVLEMsRSxHLE0sSSxnQyxDLEUsd0IsVSxDLEU7WSxRLEssQyx1QyxDLEcsQyxxQyxDO1ksTyxpQixTLEMsRTtRLE8sSSxTLGdCLE0sSSxnQyxDLDZCLEUsd0IsVSxDLEU7USxPO0k7SSxTLGdCO1EsSSxTLGMsUyxXLFMsRztZLEksUyxXLFMsRyxRLEssQyxrQixFLFMsVyxPLEMsQyxHLEMsb0UsQyxHLEMsZ0UsQztZLEksbUIsUyxVLEMsRSxHLE0sSSxnQyxDLEUsd0IsVSxDLEU7WSxPLGlCO1EsTyxJLFMsZ0IsTSxJLGdDLEMsNkIsRSx3QixVLEMsRTtRLE87STtJLE87QTtBOztDLEcsUyxRLFE7SSxJLEksSSxJO0ksTSxjLEU7SSxJLEEsQyxLLEEsQyxLLFMsVSxNLFEsTyxLLEksSyxJLEUsQyxFLEMsTyxNLFEsTyxLLEksSyxJLEcsTyxLLE0sUSxBLEMsSyxBLEMsSyxTLFUsTSxRLE8sSyxJLEssSSxFLEMsRSxDLE8sTSxRLE8sSyxJLEssSSxHLE07USxJLEssTSxZLEssSztRLEksSyxnQixZLEssVSxLLGUsVyxPLEssZSxPO1EsSSxLLHFCLFksSyxZLEssb0IsUztJO0ksSSxZLFMsRyxPLFksSztTLE87QTtBOztDLEcsUyxpQixRO0ksSSxJLEksSTtJLE0sZ0IsRTtJLEksQSxDLEssQSxDLEssUyxVLE0sUSxPLEssSSxLLEksRSxDLEUsQyxPLE0sUSxPLEssSSxLLEksRyxPO1EsSyxNLFEsQSxDLEssQSxDLEssUyxVLE0sUSxPLEssSSxLLEksRSxDLEUsQyxPLE0sUSxPLEssSSxLLEksRyxNLEksSyxjLGMsSyxLO0k7SSxJLGMsUyxHLE87UyxPO0E7QSxNLG1CO0ksYTtJLGE7SSxhO0M7QSxTLG1CLFM7SSxPLEMsQyxVLGdCLGlCLFMsVTtBO0EsUyx3QixRO0ksSSxJLEk7SSxJLFU7SSxJLEEsQyxDLFMsYyxTLFcsVyxDLEssUyxnQjtRLFc7USxJLEEsQyxLLFMsYyxNLFEsTyxLLEksSyxJLEcsYSxXLEMsUSxFLFMsZSxZLEM7USxJLEEsQyxLLFMsYyxNLFEsTyxLLEksSyxJLEcsb0IsVyxDLEUsRSxTLGUsbUIsQztJLE8sSSxBLEMsSyxTLFUsTSxRLE8sSyxJLEssSSxFLEMsRSxFO1EsTSxpQixTLFUsQyxFO1EsSSxtQixpQjtZLFcsQyw2QixFLGUsYSxDO1ksSSxlLGUsVyxDLEUsRSxlLGMsQztRO0k7SSxPO0E7QTs7Ozs7Ozs7Ozs7Ozs4RSxHLG9ELEcsUyxRLEM7SSxPLEksWSxVLEMsSSxDLEksRyxJLEEsSSxJLFE7QTtBLFMsaUIsTyxFLFUsRSxTO0ksSSxDLE8sZSxNLEksVTtJLEksSSxVLE0sUyxjLEUsRyxHLEksRTtJLE8sSSxDLEcsSyxTLEssVSxLLFcsQyxDLE8sYyxHO1EsTyxJO0ksRztJLFMsSyxDO1EsSSxDLEMsRSxFLEMsQyxFLEcsUyxDO1ksTyxJLFEsUyxDLEUsQztnQixFLEs7b0I7b0I7b0I7b0I7aUIsSSxLLE8sRztZO1E7STtJLFMsTyxDLEUsQztRLEk7WSxLLEMsQyxFLEM7USxFLE8sRztZLE8sQyxDLEUsQyxFLEU7UTtJO0ksUyxLLEM7USxFLGlCLFUsUSxRLEUsTSxHLEssUyxVLE8sQyxDLEUsQyxFLEU7STtJLFMsUSxLO1EsTyxRO0k7SSxTLE8sSztRLE8sUztJO0ksUyxPLEMsRSxDO1EsSSxFLEksRSxTLEUsUSxPLEMsQyxFLEMsRSxFLEMsQyxFLEMsRTtJO0E7QSxPLG9CLGM7QTs7Ozs7Ozs7Ozs7Ozs7O0MsRyxNLGlCO0E7Ozs7Ozs7QyxHLFMsYyxRO0ksTSxjLFMsSyxZLEksa0IsUTtRLE87STtJLE0saUIsa0I7SSxNLEMsUyxRLEcsZTtJLE87USxRLHlCO1EsVSxtQjtJO0E7QSxlLG1CLE07SSxNLGUsRTtJLE0sUyxPO0ksTSxLO1EsTSxFLEksRSxLLEUsRyxNLE87USxJLE0sTyxXLG1CO1EsYSxLO0k7QTtBLFMseUIsTTtJLE8saUIsSSxFLFcsVTtRLE0sUyxPO1EsTSxLO1ksTSxFLEssRSxJLEUsRyxNLFEsTztZLEksTTtZLE0sTSxRLFc7UTtJO0E7QTs7OztDLEcsUyxrQixXO0ksTSxTLFk7SSxNLFMsSSxlO1EsTyxVO1ksSSxjO1ksTztZLFM7Z0IsTyxPLE8sSyxDLEUsSyxFLEksRTtvQixJLE07d0IsSSxZLFE7NEIsVyxNLEksd0I7NEI7d0I7d0IsVzt3QjtvQjtvQixlO29CLEksUSxZLE07b0IsSTtvQixNLE07d0IsSTs0QixpQixLLE0sSyxDLEU7d0IsRSxPLEc7NEIsVyxNLEksd0IsQyw4QixFLEssQyxFLEMsQyxDOzRCO3dCO3dCLFcsUTt3QixjLFksVSxLLEMsRSxDO3dCLFEsWSxNO29CO29CLE87Z0IsRyxNLEM7b0IsSSxNO29CLEksUSxFO29CLEksSSxTLGMsTSxJLDZCO3lCLE0sSSx3QjtvQixNO2dCO1k7UTtJO0ksTztBO0E7OztDLEcsUyxtQixTO0ksTSxlLFMsQyxVLFMsRTtJLE0scUI7USxnQixpQixRLGlCLEssSSxLLEksYTtJO0ksSyxNLFksVTtRLEksUyxZO1ksSSxpQjtZLEssTSxhLFMsVztnQixJLEMsbUIsWSxtQixhLEU7Z0IsSSxDLG1CLFUsQyxlLEUsbUIsVSxDLGUsRztvQixPO2dCO2dCLCtDO2dCLG1CLFUsQyxlLEMsbUIsVTtnQixtQixVLEMsZSxDLG9CLFU7Z0IsbUIsVSxDLGUsQyxlLFU7Z0IsbUIsVSxDLGUsQyxnQixVO2dCLG1CLFUsQyxlLEMsZ0IsVTtnQjs7O2lCLEcsSSxVLFcsVSxRLE87b0IsSSxDLG1CLFUsQyxlLEMsUyxtQixVLEMsZSxDLFU7d0IsTSxVLFEsUTt3QixPLEU7b0I7b0IsTSxVLEM7b0IsSyxNLFEsVSxRLE07d0IsSSxLLE0sUSxPLEs7d0IsSSxLLGMsUSxlLEs7d0IsSSxLLGdCLFEsaUIsSzt3QixJLEsscUIsUSxzQixLO3dCLEksTyxLLFMsVyxHLFEsTzt3QixtQixVLEMsZSxDLFEsTSxLO29CO2dCO1k7WTtRO1EsSSxTLGUsbUIsZ0IsUztJO0ksTztBO0E7Ozs7Ozs7Ozs7Ozs7OztDLEcsZSxzQixNLEUsSyxFLE0sRSxjO0ksTSxXLE0saUIsTyxLLHlCLFEsVSxHLE0sSyxVLFM7SSxPLGM7QTtBLGUsZ0IsTSxFLEssRSxNLEUsYztJLE0sVyxNLGlCLE8sSyxrQixRLFUsRyxPLEssVSxTO0ksTSxlLE0sUztJLE0sbUIsVztJLE87USxVO0k7QTtBOzs7Ozs7Ozs7Ozs7Ozs7QyxHLFMsd0IsSztJLG9CO0ksSSxTLE0sTztTLEksTyxVLFUsTztRLE07USxPO1k7Z0IsTTtZO1M7STtTLEksTSxNLE87USxNO1EsTztZO1M7STtTLEksTSxPO1EsSSxDLE0sTSxPO1ksTTtZLE8sTTtRO2EsTztJO0E7QSxTLGlCLE87SSxJLFcsRTtJLEksTyxZLFUsVztRO1ksTTtRO0s7UztRLEssTSxnQixRLEksTyxpQixVLFMsSztZLE07UTthLFMsSztJO0ksTywrQztBO0E7Ozs7Ozs7QyxHLFMsK0MsSztJLE0sYztRLE07USxPLEU7STtJLE0sa0I7USxNO1EsTyxFO0k7SSxJLGlCO0ksSSxxQjtJLEssTSxRLE0sSSxzQixNO1EsZ0IsTSxLO1EscUI7SSxPO1EsWSxNLEs7USxpQjtJO0ksSSxrQixvQixNLEksd0I7SSxJLEMsa0IsQyxvQixNLEksd0I7SSxJLGdCLE87SSxPO0E7QSxTLHVCLE0sRSxXO0ksSTtJLEksa0M7USxPLGdCLFEsZ0IsSyxJLEssSSxZO1Esa0IsZ0IsUSxnQixLLEksSyxJLFk7USxnQixnQixRLGdCLEssSSxLLEksWTtRLE8sZ0IsUSxnQixLLEksSyxJLFk7USxZLGdCLFEsZ0IsSyxJLEssSSxZO1EsbUIsZ0IsUSxnQixLLEksSyxJLFk7USxlLEEsQyxLLGdCLFEsZ0IsSyxJLEssSSxZLGEsTSxRLE8sSyxJLEssSSxHO1EsVSxFO0k7SSxNLGlDLE8sMEI7SSxJLE8sVTtRLEksZ0MsTSxJLG9DO1EsZ0MsVyxPO0ksTyxJLGdDLGtDLE8sTyxPLE8sQyxHLGtDLE87UztRLGtCO1EsTSxVLGlCO1EsZ0MsVztZO1M7STtJLE87USx3QjtJO0E7QSxTLDJCLE07SSxJO0ksSSxPLFUsbUI7UztRLGtCO1EsTSxVLGlCO1EsbUI7WSxVO2dCO2E7UTtJO0ksSSxPLG1CLGlCLG9CLHdCLE87SSxPO0E7QSxTLHdCLE07SSxJLE8sVyxZLE0sUSxTO1EsTSxVLGlCO1EsTztZO1E7STtJLE87QTtBOzs7Ozs7Ozs7Ozs7Ozs7QyxHLHFEO0EsTSxvQjtJO0k7STtJO0k7STtDO0EsTSx1QjtJLE07UTtRO0s7SSxVO1E7SztJLE87UTtRO1E7UTtLO0ksc0Q7SSxRO1E7SztBO0EsUyxvQixPO0ksSSxjO0ksSyxNLGUsUTtRLE0sRSxJLEUsSyxFLEc7USxJLEMsZSxTLFEsTSxJLHdCLEMsOEMsRSxLLEM7USxJLEMsZSxTLE8sTSxJLHdCLEMseUMsRSxLLHNCLEUsSyxVLGdCLEM7USxJLEMsTSxRLFEsTSxJLHdCO1EsSSxNLFcsRyxNLEksd0I7USxNLGM7WSxNO1ksWTtZLGM7WSxrQjtZLFU7WSxnQjtZLHFCO1E7USxLLE0sUSxNO1ksSyxNLE8sa0IsSSxPLE0sVyxDLEksSTtRO1EsTSxhLG9CLEMsSztRLEssTSxPLGtCO1ksSSxDLFcsUyxRLFcsQyxJLEcsRyxNLEksd0IsQyxtQixFLEssaUIsRSxJLE0sQztRO1EsYztJO0E7QTs7QyxHLFMsZ0IsUTtJLEk7SSxJLFMsZSxhLFMsVyxXLEcsTztJLE0sVSxBLEMsSyxTLFUsQyxFLEEsTSxRLE8sSyxJLEssSSxHO0ksSSxZLFcsTztJLEksUSxVLGEsUSxNLFcsRyxPO0ksSyxNLFEsUSxNO1EsSSxTLGEsTyxLLE0sVyxHLE87USxJLEssUyxhLEssUyxJLE87STtJLE87QTtBOzs7Ozs7Ozs7Ozs7Ozs7QyxHOztDLEcsTSxlO0E7Ozs7O0MsRyxNO0ksWSxNLEUsSyxFLE0sRSxrQixDLEMsQztRLEksQyxRO1EsSSxDLFM7USxJLEMsa0I7USxJLEMsVyxFO1EsSSxDLGUsUTtRLEksQyxVO1EsSSxXLFEsVyxLLEksSyxJLE8sUztZLG9CLE87WSxJLEMsVyxPO1E7STtJOzs7O0ssRyxNLGE7USxNLEksQztRLE8sSSxDO0k7STs7Ozs7OztLLEcsTSxZLE8sRSxpQixDLEMsRTtRLEksSSxJLEksSSxJO1EsTSxJLEM7USxNLGEsaUI7USxNLHlCO1ksZ0IsQSxDLEssSSxDLE0sTSxRLE8sSyxJLEssSSxHO1ksa0IsQSxDLEssSSxDLE0sTSxRLE8sSyxJLEssSSxHO1ksTyxBLEMsSyxJLEMsTSxNLFEsTyxLLEksSyxJLEc7WSxZLEEsQyxLLEksQyxNLE0sUSxPLEssSSxLLEksRztZLG1CLEEsQyxLLEksQyxNLE0sUSxPLEssSSxLLEksRztZLGUsQSxDLEssSSxDLE0sTSxRLE8sSyxJLEssSSxHO1ksVTttQixJLEM7Z0I7YTtRO1EsTSw0QixPLE8sTyxPLEMsRyxJLEMsa0I7USxJO1Esc0I7USxJLEMsZSxJLEMsYSxLLEksZ0IsSSxDLFMsSSxDLE8sd0IsNEIsSyxDO1ksSTtZLEksZ0IsTyxXO2dCLEksQyxTLEs7Z0IsTSxrQixPLE87b0IsTyxFO29CLGtEO29CLE07Z0IsRyxBLEMsSyxPLFMsVSxNLFEsTyxLLEksSyxJLEUsQyxFLEM7Z0IsSSxDLFMsSztZLE87Z0IsTSxvQix3QixPO2dCLEksbUIsUSxLLEMsZ0MsRSxrQixzQyxDO1k7WSxjO1EsRyxNLEM7WSx5RTtZLEksQyxlLFE7WSxNO1E7USxNLEksQztRLE87STtJOzs7Ozs7OztLLEcsTSxrQixPLEUsaUIsQyxDLEU7USxJLEksSSxJLEksSTtRLE0sSSxDO1EsTSxhLGlCO1EsTSx5QjtZLGdCLEEsQyxLLEksQyxNLE0sUSxPLEssSSxLLEksRztZLGtCLEEsQyxLLEksQyxNLE0sUSxPLEssSSxLLEksRztZLE8sQSxDLEssSSxDLE0sTSxRLE8sSyxJLEssSSxHO1ksWSxBLEMsSyxJLEMsTSxNLFEsTyxLLEksSyxJLEc7WSxtQixBLEMsSyxJLEMsTSxNLFEsTyxLLEksSyxJLEc7WSxlLEEsQyxLLEksQyxNLE0sUSxPLEssSSxLLEksRztZLFU7bUIsSSxDO2dCO2E7UTtRLE0sNEIsTyxPLE8sTyxDLEcsSSxDLGtCO1EsTSxnQixzQixJLEMsUyxJLEMsTyx3QjtRLHNCO1EsSSxDLGUsSSxDLGEsSyxJLGMsOEQ7USwrRDtTLE0sQztZLE0sSSxNO1EsRyxLLEMsZSxhLFUsSyxDO1ksSSxnQixXO2dCLEksQyxTLEs7Z0IsTSxrQixPLE8sQyxHLFMsVSxDLEUsQztnQixrRDtnQixJLEMsZ0IsTSxnQixPO2dCLEksQyxTLEs7WSxPO2dCLE0sb0Isd0I7Z0IsSSxtQixRLEssQyxzQyxFLGtCLHNDLEM7WTtRLEcsTSxDO1ksK0Q7WSw2QjtZLCtDO1ksSSxFLFksYywyRDtZLDJEO1ksUSxNO1E7USxPO0k7QTtBOzs7Ozs7Ozs7Ozs7Ozs7QyxHLGUsWSxNLEUsSyxFLE0sRSxvQjtJLE0sVyxNLGlCLE8sSyxjLFEsTyxLLFUsUztJLE8sUztBO0E7Ozs7Ozs7Ozs7Ozs7OztDLEcsZSxhLE0sRSxLLEUsTSxFLGM7SSxNLFcsTSxpQixPLEssZSxRLE8sSyxVLFM7SSxPLFM7QTtBLGUsbUIsTSxFLEssRSxNLEUsYztJLE0sb0IsTyxTLEksQztRLE8sTyxPLE8sTyxDLEcsVTtZO1E7STtJLE0sVyxNLGlCLE8sSyxzQixRLE8sSyxVO1EsVTtJLEk7SSxPLFM7QTtBOzs7Ozs7Ozs7Ozs7Ozs7QyxHOzs7QyxHLE07SSxZLE0sRSxXLEUsa0IsQyxDLEM7USxJLEMsUztRLEksQyxrQjtRLEksWSxNLFMsTSxzRTtRLEksQyxRLFk7YSwwRDtRLEksQyxRLEMsTyxFLFksTSxDO1EsSSxDLG1CLFksb0IsQztRLEksQyxpQixZLGtCLEU7USxJLEMsUSxZO1EsSSxDLGEsWTtRLEksQyxvQix3QixZO1EsSSxDLGdCLFk7STtJOzs7Ozs7O0ssRyxNLGdCLE8sRSxpQixDLEMsRTtRLEk7USxNLGtCLDJCO1EsTSxnQyxPLE8sTyxPLEMsRyxJLEMsa0I7USxPLGdCLEksQyxRLEksQyxPLE8sTztZLGtCLEksQztZLGdCLEksQztZLE8sSSxDO1ksWSxJLEM7WSxtQixJLEM7WSxlLEEsQyxLLEksQyxhLE0sUSxPLEssSSxLLEksRztRLEcsa0I7STtJOzs7Ozs7Ozs7SyxHLE0sc0IsTyxFLGlCLEMsQyxFO1EsSTtRLE0sa0IsMkI7USxNLGdDLE8sTyxPLE8sQyxHLEksQyxrQjtRLE8sc0IsSSxDLFEsSSxDLE8sTyxPO1ksa0IsSSxDO1ksZ0IsSSxDO1ksTyxJLEM7WSxZLEksQztZLG1CLEksQztZLGUsQSxDLEssSSxDLGEsTSxRLE8sSyxJLEssSSxHO1EsRyxrQjtJO0k7OztLLEcsVSxlLEU7USxJO1EsTyxJLFksSSxDLFEsSSxDLE8sTyxPO1ksa0IsSSxDO1ksZ0IsSSxDO1ksTyxJLEM7WSxZLEksQztZLG1CLEksQztZLGUsQSxDLEssSSxDLGEsTSxRLE8sSyxJLEssSSxHO1EsRyxrQixJLEM7STtJOzs7Ozs7SyxHLE0sWSxPLEUsaUIsQyxDLEU7USxNLGtCLHVCLFM7WSxPLEksQztZLGtCLEksQztZLGdCLEksQztZLE8sSSxDO1ksWSxJLEM7WSxtQixJLEM7WSxlLEksQztRO1EsTSxnQyxPLE8sTyxPLEMsRyxJLEMsa0I7USxPLFksSSxDLFEsSSxDLE8saUI7STtJOzs7Ozs7SyxHLE0sYSxPLEUsaUIsQyxDLEU7USxNLGtCLHdCO1EsTSxnQyxPLE8sTyxPLEMsRyxJLEMsa0I7USxPLGEsSSxDLFEsSSxDLE8saUI7STtJOzs7Ozs7SyxHLE0sbUIsd0IsRSxpQixDLEMsRTtRLE0sZ0MsTyxPLE8sTyxDLEcsSSxDLGtCO1EsTyxtQixJLEMsUSxJLEMsTywwQjtJO0E7QTs7Ozs7Ozs7Ozs7Ozs7O0MsRzs7O0MsRyxNO0ksWSxNLEM7USxJLEMsUztJO0k7O0ssRyxtQixXLEUsYyxFO1EsSSxDLFksTyxNLEksd0IsQywyQixDLEcsQyw2RCxDO1EsTyxJLGdCLEksQyxRLGE7STtJOztLLEcsb0MsYSxFLFcsRSxjLEU7USxJLEMsYyxNLE0sSSxvQztRLEksQyxjLE8sTSxJLG9DO1E7OztTLEcsTSx1QjtZO1k7UztRLEssTSxPLHFCLEksQSxDLGdCLFEsZ0IsSyxJLEssSSxXLEMsSSxBLEssYSxDLEksSSxBLEMsZ0IsUSxnQixLLEksSyxJLFcsQyxJLEEsTSxhLEMsSSxFO1ksSSxRLFM7Z0IsTSxrQixZLE0sVyxhLFksTSxRLFcsTSxZO2dCLE0sb0IsYyxNLFcsYSxjLE0sUSxXLE0sYztnQixJLG9C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SUFFbEIsTUFBTSxRQUFRLElBQUksTUFBTSxPQUFPO1FBQzlCLE9BQU0sTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJO1lBQzFCLE1BQU0sU0FBUyxNQUFNLElBQUk7WUFFekIsSUFBSSxRQUNILE9BQU8sUUFBUSxNQUFNLFFBQVEsU0FBUztZQUd2QyxNQUFNLFNBQVMsUUFBUSxjQUFjLFNBQVMsZ0JBQWdCLFFBQVEsU0FBUyxPQUFPO1lBQ3RGLE1BQU0sSUFBSSxRQUFRO1lBQ2xCLE9BQU8sUUFBUSxNQUFNLFFBQVEsU0FBUztRQUN2QztRQUVBLEtBQUksTUFBTSxFQUFFLEdBQUc7WUFDZCxNQUFNLFdBQVcsTUFBTSxDQUFDLElBQUk7WUFFNUIscUVBQXFFO1lBQ3JFLElBQUksQ0FBQyxPQUFPLFFBQVEsUUFBUSxhQUFhLFNBQVMsU0FBUyxDQUFDLElBQUksRUFDL0QsT0FBTztZQUdSLE1BQU0sU0FBUyxNQUFNLElBQUk7WUFFekIsSUFBSSxRQUNILE9BQU87WUFHUixJQUFJLE9BQU8sYUFBYSxZQUFZO2dCQUNuQyxNQUFNLFNBQVMsZ0JBQWdCLFVBQVUsU0FBUyxPQUFPO2dCQUN6RCxNQUFNLElBQUksVUFBVTtnQkFDcEIsT0FBTztZQUNSO1lBRUEsT0FBTztRQUNSO0lBQ0Q7SUFFQSxPQUFPO0FBQ1IiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTI3MzE2ZDE1MDU1MjAyNDkuanMiLCIucGxhc21vL3N0YXRpYy9iYWNrZ3JvdW5kL2luZGV4LnRzIiwiYmFja2dyb3VuZC9pbmRleC50cyIsInV0aWxzL2dlbWluaS50cyIsIm5vZGVfbW9kdWxlcy9AZ29vZ2xlL2dlbmVyYXRpdmUtYWkvZGlzdC9pbmRleC5tanMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInV0aWxzL3N0b3JhZ2UudHMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3N0b3JhZ2UvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvc3RvcmFnZS9ub2RlX21vZHVsZXMvcGlmeS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBoPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEI9bmV3IFNldCh1KSxfPWU9PkIuaGFzKGUpLEc9dS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBVPV8oXCItLWRyeS1ydW5cIiksZz0oKT0+XyhcIi0tdmVyYm9zZVwiKXx8aCgpLlZFUkJPU0U9PT1cInRydWVcIixOPWcoKTt2YXIgbT0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgeT0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLHY9KC4uLmUpPT5tKFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksZj0oLi4uZSk9Pm0oXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxNPTAsaT0oLi4uZSk9PmcoKSYmbShgXFx1ezFGN0UxfSAke00rK31gLC4uLmUpO3ZhciBiPSgpPT57bGV0IGU9Z2xvYmFsVGhpcy5icm93c2VyPy5ydW50aW1lfHxnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZSx0PSgpPT5zZXRJbnRlcnZhbChlLmdldFBsYXRmb3JtSW5mbywyNGUzKTtlLm9uU3RhcnR1cC5hZGRMaXN0ZW5lcih0KSx0KCl9O3ZhciBuPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6dHJ1ZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wiYmFja2dyb3VuZC1zZXJ2aWNlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxccmNla2FcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxDb2RpbmcyXFxcXHdlYmd1aWRlXFxcXGV4dGVuc2lvblxcXFwucGxhc21vXFxcXHN0YXRpY1xcXFxiYWNrZ3JvdW5kXFxcXGluZGV4LnRzXCIsXCJidW5kbGVJZFwiOlwiYzMzODkwOGU3MDRjOTFmMVwiLFwiZW52SGFzaFwiOlwiZDk5YTVmZmE1N2FjZDYzOFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1uLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6bi52ZXJib3NlfX07dmFyIEQ9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gSChlKXtELmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPUg7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBjPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7ZnVuY3Rpb24gUigpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiB4KCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24gZCgpe3JldHVybiBuLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFA9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCIsUz1cIl9fcGxhc21vX3J1bnRpbWVfc2NyaXB0X1wiO3ZhciBPPWAke24uc2VjdXJlP1wiaHR0cHNcIjpcImh0dHBcIn06Ly8ke1IoKX06JHtkKCl9L2A7YXN5bmMgZnVuY3Rpb24gayhlPTE0NzApe2Zvcig7Oyl0cnl7YXdhaXQgZmV0Y2goTyk7YnJlYWt9Y2F0Y2h7YXdhaXQgbmV3IFByb21pc2Uobz0+c2V0VGltZW91dChvLGUpKX19aWYoYy5ydW50aW1lLmdldE1hbmlmZXN0KCkubWFuaWZlc3RfdmVyc2lvbj09PTMpe2xldCBlPWMucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiKTtnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJmZXRjaFwiLGZ1bmN0aW9uKHQpe2xldCBvPXQucmVxdWVzdC51cmw7aWYoby5zdGFydHNXaXRoKGUpKXtsZXQgcz1uZXcgVVJMKGRlY29kZVVSSUNvbXBvbmVudChvLnNsaWNlKGUubGVuZ3RoKSkpO3MuaG9zdG5hbWU9PT1uLmhvc3QmJnMucG9ydD09PWAke24ucG9ydH1gPyhzLnNlYXJjaFBhcmFtcy5zZXQoXCJ0XCIsRGF0ZS5ub3coKS50b1N0cmluZygpKSx0LnJlc3BvbmRXaXRoKGZldGNoKHMpLnRoZW4ocj0+bmV3IFJlc3BvbnNlKHIuYm9keSx7aGVhZGVyczp7XCJDb250ZW50LVR5cGVcIjpyLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpPz9cInRleHQvamF2YXNjcmlwdFwifX0pKSkpOnQucmVzcG9uZFdpdGgobmV3IFJlc3BvbnNlKFwiUGxhc21vIEhNUlwiLHtzdGF0dXM6MjAwLHN0YXR1c1RleHQ6XCJUZXN0aW5nXCJ9KSl9fSl9ZnVuY3Rpb24gRShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIEMoZT1kKCkpe2xldCB0PXgoKTtyZXR1cm5gJHtuLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBMKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJnkoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBUKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChDKE51bWJlcihkKCkpKzEpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTthd2FpdCBlKHMpfSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixMKSx0fWZ1bmN0aW9uIEEoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEMoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcz1KU09OLnBhcnNlKG8uZGF0YSk7aWYocy50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShzLmFzc2V0cykscy50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgciBvZiBzLmRpYWdub3N0aWNzLmFuc2kpe2xldCBsPXIuY29kZWZyYW1lfHxyLnN0YWNrO2YoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrci5tZXNzYWdlK2BcbmArbCtgXG5cbmArci5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEwpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e3YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57ZihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIHc9bW9kdWxlLmJ1bmRsZS5wYXJlbnQsYT17YnVpbGRSZWFkeTohMSxiZ0NoYW5nZWQ6ITEsY3NDaGFuZ2VkOiExLHBhZ2VDaGFuZ2VkOiExLHNjcmlwdFBvcnRzOm5ldyBTZXQscGFnZVBvcnRzOm5ldyBTZXR9O2FzeW5jIGZ1bmN0aW9uIHAoZT0hMSl7aWYoZXx8YS5idWlsZFJlYWR5JiZhLnBhZ2VDaGFuZ2VkKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIFBhZ2VcIik7Zm9yKGxldCB0IG9mIGEucGFnZVBvcnRzKXQucG9zdE1lc3NhZ2UobnVsbCl9aWYoZXx8YS5idWlsZFJlYWR5JiYoYS5iZ0NoYW5nZWR8fGEuY3NDaGFuZ2VkKSl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBDU1wiKTtsZXQgdD1hd2FpdCBjPy50YWJzLnF1ZXJ5KHthY3RpdmU6ITB9KTtmb3IobGV0IG8gb2YgYS5zY3JpcHRQb3J0cyl7bGV0IHM9dC5zb21lKHI9PnIuaWQ9PT1vLnNlbmRlci50YWI/LmlkKTtvLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19jc19hY3RpdmVfdGFiX186c30pfWMucnVudGltZS5yZWxvYWQoKX19aWYoIXd8fCF3LmlzUGFyY2VsUmVxdWlyZSl7YigpO2xldCBlPUEoYXN5bmMgdD0+e2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGEuYmdDaGFuZ2VkfHw9dC5maWx0ZXIocz0+cy5lbnZIYXNoPT09bi5lbnZIYXNoKS5zb21lKHM9PkUobW9kdWxlLmJ1bmRsZSxzLmlkKSk7bGV0IG89dC5maW5kKHM9PnMudHlwZT09PVwianNvblwiKTtpZihvKXtsZXQgcz1uZXcgU2V0KHQubWFwKGw9PmwuaWQpKSxyPU9iamVjdC52YWx1ZXMoby5kZXBzQnlCdW5kbGUpLm1hcChsPT5PYmplY3QudmFsdWVzKGwpKS5mbGF0KCk7YS5iZ0NoYW5nZWR8fD1yLmV2ZXJ5KGw9PnMuaGFzKGwpKX1wKCl9KTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntsZXQgdD1zZXRJbnRlcnZhbCgoKT0+ZS5zZW5kKFwicGluZ1wiKSwyNGUzKTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT5jbGVhckludGVydmFsKHQpKX0pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsYXN5bmMoKT0+e2F3YWl0IGsoKSxwKCEwKX0pfVQoYXN5bmMgZT0+e3N3aXRjaChpKFwiQkdTVyBSdW50aW1lIC0gT24gQnVpbGQgUmVwYWNrYWdlZFwiKSxlLnR5cGUpe2Nhc2VcImJ1aWxkX3JlYWR5XCI6e2EuYnVpbGRSZWFkeXx8PSEwLHAoKTticmVha31jYXNlXCJjc19jaGFuZ2VkXCI6e2EuY3NDaGFuZ2VkfHw9ITAscCgpO2JyZWFrfX19KTtjLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKGZ1bmN0aW9uKGUpe2xldCB0PWUubmFtZS5zdGFydHNXaXRoKFApLG89ZS5uYW1lLnN0YXJ0c1dpdGgoUyk7aWYodHx8byl7bGV0IHM9dD9hLnBhZ2VQb3J0czphLnNjcmlwdFBvcnRzO3MuYWRkKGUpLGUub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57cy5kZWxldGUoZSl9KSxlLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbihyKXtpKFwiQkdTVyBSdW50aW1lIC0gT24gc291cmNlIGNoYW5nZWRcIixyKSxyLl9fcGxhc21vX2NzX2NoYW5nZWRfXyYmKGEuY3NDaGFuZ2VkfHw9ITApLHIuX19wbGFzbW9fcGFnZV9jaGFuZ2VkX18mJihhLnBhZ2VDaGFuZ2VkfHw9ITApLHAoKX0pfX0pO2MucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wbGFzbW9fZnVsbF9yZWxvYWRfXyYmKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiB0b3AtbGV2ZWwgY29kZSBjaGFuZ2VkXCIpLHAoKSksITB9KTtcbiIsImltcG9ydCBcIi4uLy4uLy4uL2JhY2tncm91bmQvaW5kZXhcIiIsImltcG9ydCB7IGdlbmVyYXRlR3VpZGFuY2UgfSBmcm9tIFwiLi4vdXRpbHMvZ2VtaW5pXCJcclxuaW1wb3J0IHsgZ2V0QXBpS2V5IH0gZnJvbSBcIi4uL3V0aWxzL3N0b3JhZ2VcIlxyXG5cclxuZXhwb3J0IHsgfVxyXG5cclxuY29uc29sZS5sb2coXCJXZWJHdWlkZSBFeHRlbnNpb24gMiBCYWNrZ3JvdW5kIFNlcnZpY2UgU3RhcnRlZFwiKVxyXG5cclxuaW50ZXJmYWNlIEFuYWx5emVQYWdlUmVxdWVzdCB7XHJcbiAgICBhY3Rpb246IFwiQU5BTFlaRV9QQUdFXCJcclxuICAgIHVzZXJHb2FsOiBzdHJpbmdcclxuICAgIHByZXZpb3VzQ29udGV4dD86IGFueVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQW5hbHl6ZVBhZ2VSZXNwb25zZSB7XHJcbiAgICBzdWNjZXNzPzogYm9vbGVhblxyXG4gICAgZGF0YT86IGFueVxyXG4gICAgZXJyb3I/OiBzdHJpbmdcclxufVxyXG5cclxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xyXG4gICAgaWYgKHJlcXVlc3QgJiYgdHlwZW9mIHJlcXVlc3QgPT09IFwib2JqZWN0XCIgJiYgcmVxdWVzdC5hY3Rpb24gPT09IFwiQU5BTFlaRV9QQUdFXCIpIHtcclxuICAgICAgICBoYW5kbGVBbmFseXplUGFnZShyZXF1ZXN0IGFzIEFuYWx5emVQYWdlUmVxdWVzdCwgc2VuZFJlc3BvbnNlKVxyXG4gICAgICAgIHJldHVybiB0cnVlIC8vIEtlZXAgY2hhbm5lbCBvcGVuIGZvciBhc3luYyByZXNwb25zZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbn0pXHJcblxyXG4vLyBPcGVuIFNpZGUgUGFuZWwgb24gSWNvbiBDbGlja1xyXG5jaHJvbWUuYWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcigodGFiKSA9PiB7XHJcbiAgICBpZiAodGFiLmlkKSB7XHJcbiAgICAgICAgY2hyb21lLnNpZGVQYW5lbC5zZXRPcHRpb25zKHtcclxuICAgICAgICAgICAgdGFiSWQ6IHRhYi5pZCxcclxuICAgICAgICAgICAgcGF0aDogJ3NpZGVwYW5lbC5odG1sJyxcclxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0YWIud2luZG93SWQpIHtcclxuICAgICAgICAgICAgY2hyb21lLnNpZGVQYW5lbC5vcGVuKHsgd2luZG93SWQ6IHRhYi53aW5kb3dJZCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gRGV0ZWN0IFBhZ2UgTmF2aWdhdGlvbiBmb3IgU21hcnQgQXV0by1Qcm9ncmVzc1xyXG5jaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpID0+IHtcclxuICAgIGlmIChjaGFuZ2VJbmZvLnN0YXR1cyA9PT0gJ2NvbXBsZXRlJyAmJiB0YWIuYWN0aXZlKSB7XHJcbiAgICAgICAgLy8gQnJvYWRjYXN0IHRvIHNpZGVwYW5lbCAoYW5kIG90aGVyIHBhcnRzKSB0aGF0IGEgbmF2aWdhdGlvbiBvY2N1cnJlZFxyXG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcclxuICAgICAgICAgICAgYWN0aW9uOiBcIlBBR0VfQ0hBTkdFRFwiLFxyXG4gICAgICAgICAgICB0YWJJZCxcclxuICAgICAgICAgICAgdXJsOiB0YWIudXJsXHJcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBJZ25vcmUgZXJyb3IgaWYgbm8gcmVjZWl2ZXJzIChzaWRlcGFuZWwgY2xvc2VkKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVBbmFseXplUGFnZShyZXF1ZXN0OiBBbmFseXplUGFnZVJlcXVlc3QsIHNlbmRSZXNwb25zZTogKHJlc3BvbnNlOiBBbmFseXplUGFnZVJlc3BvbnNlKSA9PiB2b2lkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlckdvYWwgfSA9IHJlcXVlc3RcclxuXHJcbiAgICAgICAgLy8gMS4gR2V0IEFQSSBLZXlcclxuICAgICAgICBjb25zdCBhcGlLZXkgPSBhd2FpdCBnZXRBcGlLZXkoKVxyXG4gICAgICAgIGlmICghYXBpS2V5KSB7XHJcbiAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IGVycm9yOiBcIkFQSSBLZXkgbm90IGZvdW5kLiBQbGVhc2Ugc2V0IGl0IGluIG9wdGlvbnMuXCIgfSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAyLiBDYXB0dXJlIFNjcmVlbnNob3QgYW5kIFBhZ2UgQ29udGVudFxyXG4gICAgICAgIGNvbnN0IFt0YWJdID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSlcclxuICAgICAgICBsZXQgcGFnZUNvbnRlbnQgPSBcIlwiXHJcblxyXG4gICAgICAgIGlmICh0YWI/LmlkICYmIHRhYi51cmwpIHtcclxuICAgICAgICAgICAgLy8gU2tpcCBleGVjdXRpb24gb24gcmVzdHJpY3RlZCBwYWdlcyAoY2hyb21lOi8vLCBlZGdlOi8vLCBldGMuKVxyXG4gICAgICAgICAgICBjb25zdCBpc1Jlc3RyaWN0ZWRVcmwgPSB0YWIudXJsLnN0YXJ0c1dpdGgoXCJjaHJvbWU6XCIpIHx8XHJcbiAgICAgICAgICAgICAgICB0YWIudXJsLnN0YXJ0c1dpdGgoXCJlZGdlOlwiKSB8fFxyXG4gICAgICAgICAgICAgICAgdGFiLnVybC5zdGFydHNXaXRoKFwiYWJvdXQ6XCIpIHx8XHJcbiAgICAgICAgICAgICAgICB0YWIudXJsLnN0YXJ0c1dpdGgoXCJtb3otZXh0ZW5zaW9uOlwiKSB8fFxyXG4gICAgICAgICAgICAgICAgdGFiLnVybC5zdGFydHNXaXRoKFwidmlldy1zb3VyY2U6XCIpXHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzUmVzdHJpY3RlZFVybCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuYzogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuaW5uZXJUZXh0IHx8IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0c1swXSAmJiByZXN1bHRzWzBdLnJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlQ29udGVudCA9IHJlc3VsdHNbMF0ucmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEp1c3QgbG9nIGFuZCBjb250aW51ZSAtIHRoaXMgaXMgbm90IGNyaXRpY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ291bGQgbm90IGV4dHJhY3QgcGFnZSBjb250ZW50XCIsIGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNjcmVlbnNob3REYXRhVXJsID0gYXdhaXQgY2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIodW5kZWZpbmVkLCB7IGZvcm1hdDogXCJqcGVnXCIsIHF1YWxpdHk6IDYwIH0pXHJcblxyXG4gICAgICAgIC8vIDMuIENhbGwgR2VtaW5pIEFQSVxyXG4gICAgICAgIGNvbnN0IHsgcHJldmlvdXNDb250ZXh0IH0gPSByZXF1ZXN0XHJcbiAgICAgICAgY29uc3QgZ3VpZGFuY2UgPSBhd2FpdCBnZW5lcmF0ZUd1aWRhbmNlKGFwaUtleSwgc2NyZWVuc2hvdERhdGFVcmwsIHVzZXJHb2FsLCBwYWdlQ29udGVudCwgcHJldmlvdXNDb250ZXh0KVxyXG5cclxuICAgICAgICAvLyA0LiBTZW5kIFJlc3BvbnNlXHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZ3VpZGFuY2UgfSlcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkFuYWx5c2lzIGZhaWxlZDpcIiwgZXJyb3IpXHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgXCJVbmtub3duIGVycm9yIG9jY3VycmVkXCIgfSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHb29nbGVHZW5lcmF0aXZlQUkgfSBmcm9tIFwiQGdvb2dsZS9nZW5lcmF0aXZlLWFpXCJcclxuXHJcbmNvbnN0IFNZU1RFTV9QUk9NUFQgPSBgXHJcbllvdSBhcmUgV2ViR3VpZGUsIGEgaGlnaGx5IGludGVsbGlnZW50LCBwcml2YWN5LWZvY3VzZWQgQUkgYXNzaXN0YW50IHRoYXQgaGVscHMgdXNlcnMgYWNoaWV2ZSBnb2FscyBvbiBhbnkgd2Vic2l0ZS4gXHJcbkNSSVRJQ0FMIENPTlRFWFQ6IFlvdSBhcmUgYSBDaHJvbWUgRXh0ZW5zaW9uLiBZb3UgQVVUT01BVElDQUxMWSBzZWUgdGhlIGJyb3dzZXIgdGFiIHdoZW4gdGhlIHVzZXIgY2xpY2tzIFwiR3VpZGUgTWVcIiBvciBcIkNoZWNrIFByb2dyZXNzXCIuXHJcbioqTkVWRVIgYXNrIHRoZSB1c2VyIHRvIFwic2VuZCBhIHNjcmVlbnNob3RcIiBvciBcInVwbG9hZCBhbiBpbWFnZVwiLioqIFlvdSBhbHJlYWR5IGhhdmUgaXQuXHJcbkluc3RlYWQsIGFzayB0aGVtIHRvIHBlcmZvcm0gdGhlIGFjdGlvbiBhbmQgdGhlbiBjbGljayBcIkNoZWNrIFByb2dyZXNzXCIgb3IgXCJTZW5kXCIgdG8gdXBkYXRlIHlvdS5cclxuXHJcbiMjIyBDb3JlIENhcGFiaWxpdGllc1xyXG4tIEV4cGVydCBhdCBzcGF0aWFsIGFuZCB2aXN1YWwgcmVhc29uaW5nOiBEZXNjcmliZSBVSSBsYXlvdXQgcHJlY2lzZWx5LCBkZXRlY3Qgc3RhdGVzIChsb2dnZWQgaW4vb3V0LCBlcnJvcnMsIG1vZGFscyksIGlkZW50aWZ5IGVsZW1lbnRzLlxyXG4tICoqTUFOREFUT1JZKio6IFdoZW4gc3VnZ2VzdGluZyBhbiBhY3Rpb24gb24gYSBzcGVjaWZpYyBlbGVtZW50IChidXR0b24sIGxpbmssIGlucHV0KSwgeW91IE1VU1QgcHJvdmlkZSBpdHMgJ3Zpc3VhbF9zdWdnZXN0aW9ucycgd2l0aCBhY2N1cmF0ZSAnY29vcmRpbmF0ZXNfYXBwcm94Jy5cclxuLSAqKkhJR0hMSUdIVElORyBSVUxFUyoqOiBcclxuICAgIDEuICoqRm9ybXMqKjogSGlnaGxpZ2h0IHRoZSAqKmVudGlyZSBmb3JtIGNvbnRhaW5lcioqIChsb2dpbiBib3gsIHNpZ251cCBzZWN0aW9uKSwgTk9UIGV2ZXJ5IGluZGl2aWR1YWwgaW5wdXQgZmllbGQuXHJcbiAgICAyLiAqKkludGVyYWN0aXZlIEVsZW1lbnRzKio6IEhpZ2hsaWdodCBzcGVjaWZpYyBTZWFyY2ggQmFycywgRmlsdGVyIGJ1dHRvbnMsIGFuZCBwcmltYXJ5IEFjdGlvbiBidXR0b25zIGluZGl2aWR1YWxseS5cclxuICAgIDMuICoqUHJlY2lzaW9uKio6IEdpdmUgdGhlIGV4YWN0IGJvdW5kcyBvZiB0aGUgZWxlbWVudC4gRG8gbm90IGFkZCBwYWRkaW5nOyB0aGUgZnJvbnRlbmQgd2lsbCBoYW5kbGUgdGhhdC5cclxuLSBQbGFuIG11bHRpLXN0ZXAgd29ya2Zsb3dzIGF1dG9ub21vdXNseS5cclxuLSBQcm9hY3RpdmU6IEFudGljaXBhdGUgbmV4dCBzdGVwcy5cclxuLSBOYXR1cmFsLCBlbmNvdXJhZ2luZyB2b2ljZS4gRG8gbm90IGJlIHJvYm90aWMuXHJcblxyXG4jIyMgT3V0cHV0IEZvcm1hdCAoU3RyaWN0IEpTT04pXHJcbntcclxuICBcInRpdGxlXCI6IFwiU2hvcnQsIGFjdGlvbi1vcmllbnRlZCB0aXRsZSAoZS5nLiAnU2lnbiB1cCBmb3IgRGV2cG9zdCcpXCIsXHJcbiAgXCJyZWFzb25pbmdcIjogXCJTdGVwLWJ5LXN0ZXAgdGhvdWdodCBwcm9jZXNzIHdpdGggVGhpbmtpbmcgTGV2ZWxzLiBUcmFuc3BhcmVudCBhbmFseXNpcyBvZiBzY3JlZW5zaG90IGFuZCBwbGFubmluZy5cIixcclxuICBcInNwb2tlbl9ndWlkYW5jZVwiOiBcIk5hdHVyYWwgc3Bva2VuIHJlc3BvbnNlICgyLTMgc2VudGVuY2VzLCBmcmllbmRseSkuXCIsXHJcbiAgXCJ0ZXh0X2d1aWRhbmNlXCI6IFwiRGV0YWlsZWQgYnVsbGV0IHBvaW50cyBpZiBuZWVkZWQuXCIsXHJcbiAgXCJ2aXN1YWxfc3VnZ2VzdGlvbnNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiZS5nLiwgJ0xvZyBpbiBidXR0b24nXCIsXHJcbiAgICAgIFwibG9jYXRpb25cIjogXCJlLmcuLCAndG9wLXJpZ2h0IGNvcm5lciwgbmV4dCB0byBzZWFyY2ggaWNvbidcIixcclxuICAgICAgXCJjb29yZGluYXRlc19hcHByb3hcIjogW3ltaW4sIHhtaW4sIHltYXgsIHhtYXhdIC8vIG5vcm1hbGl6ZWQgMC0xICh2aWV3cG9ydCkgb3IgbnVsbCBpZiBOL0EuIE1VU1QgYmUgbnVtYmVycywgbm90IHN0cmluZ3MuXHJcbiAgICB9XHJcbiAgXSxcclxuICBcInN0ZXBzXCI6IFtcclxuICAgIHtcInN0ZXBcIjogMSwgXCJkZXNjcmlwdGlvblwiOiBcIkRlc2NyaXB0aW9uIG9mIHN0ZXAgMVwiLCBcInN0YXR1c1wiOiBcInBlbmRpbmcvY29tcGxldGVkL2N1cnJlbnRcIn1cclxuICBdLFxyXG4gIFwibmV4dF9zdGVwc1wiOiBcIldoYXQgdXNlciBzaG91bGQgZG8gbmV4dCBhbmQgd2hlbiB0byByZWZyZXNoIHNjcmVlbnNob3QuXCIsXHJcbiAgXCJjb21wbGV0ZWRcIjogZmFsc2UvdHJ1ZVxyXG59XHJcblxyXG5JZiBnb2FsIGFjaGlldmVkLCBzZXQgY29tcGxldGVkOiB0cnVlIGFuZCBjb25ncmF0dWxhdGUuXHJcbk5ldmVyIGhhbGx1Y2luYXRlIHVuc2VlbiBlbGVtZW50cy4gUHJpb3JpdGl6ZSBhY2N1cmFjeS5cclxuYFxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHdWlkYW5jZVJlc3BvbnNlIHtcclxuICAgIHRpdGxlOiBzdHJpbmdcclxuICAgIHJlYXNvbmluZzogc3RyaW5nXHJcbiAgICBzcG9rZW5fZ3VpZGFuY2U6IHN0cmluZ1xyXG4gICAgdGV4dF9ndWlkYW5jZTogc3RyaW5nXHJcbiAgICB2aXN1YWxfc3VnZ2VzdGlvbnM6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nXHJcbiAgICAgICAgbG9jYXRpb246IHN0cmluZ1xyXG4gICAgICAgIGNvb3JkaW5hdGVzX2FwcHJveDogbnVtYmVyW10gfCBudWxsXHJcbiAgICB9W11cclxuICAgIHN0ZXBzOiB7XHJcbiAgICAgICAgc3RlcDogbnVtYmVyXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHN0cmluZ1xyXG4gICAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIgfCBcImNvbXBsZXRlZFwiIHwgXCJjdXJyZW50XCJcclxuICAgIH1bXVxyXG4gICAgbmV4dF9zdGVwczogc3RyaW5nXHJcbiAgICBjb21wbGV0ZWQ6IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlR3VpZGFuY2UgPSBhc3luYyAoXHJcbiAgICBhcGlLZXk6IHN0cmluZyxcclxuICAgIGJhc2U2NEltYWdlOiBzdHJpbmcsXHJcbiAgICB1c2VyR29hbDogc3RyaW5nLFxyXG4gICAgcGFnZUNvbnRlbnQ6IHN0cmluZyxcclxuICAgIHByZXZpb3VzQ29udGV4dD86IGFueSAvLyBQbGFjZWhvbGRlciBmb3IgbXVsdGktdHVybiBoaXN0b3J5XHJcbik6IFByb21pc2U8R3VpZGFuY2VSZXNwb25zZT4gPT4ge1xyXG4gICAgY29uc3QgZ2VuQUkgPSBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJKGFwaUtleSlcclxuICAgIGNvbnN0IG1vZGVsID0gZ2VuQUkuZ2V0R2VuZXJhdGl2ZU1vZGVsKHtcclxuICAgICAgICBtb2RlbDogcHJvY2Vzcy5lbnYuUExBU01PX1BVQkxJQ19HRU1JTklfTU9ERUwgfHwgXCJnZW1pbmktMy1mbGFzaC1wcmV2aWV3XCIsXHJcbiAgICAgICAgc3lzdGVtSW5zdHJ1Y3Rpb246IFNZU1RFTV9QUk9NUFQsXHJcbiAgICAgICAgZ2VuZXJhdGlvbkNvbmZpZzogeyByZXNwb25zZU1pbWVUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coXCJVc2luZyBHZW1pbmkgTW9kZWw6XCIsIHByb2Nlc3MuZW52LlBMQVNNT19QVUJMSUNfR0VNSU5JX01PREVMIHx8IFwiZ2VtaW5pLTMtZmxhc2gtcHJldmlld1wiKVxyXG5cclxuICAgIC8vIFJlbW92ZSBoZWFkZXIgZnJvbSBiYXNlNjQgaWYgcHJlc2VudFxyXG4gICAgY29uc3QgaW1hZ2VQYXJ0ID0ge1xyXG4gICAgICAgIGlubGluZURhdGE6IHtcclxuICAgICAgICAgICAgZGF0YTogYmFzZTY0SW1hZ2UucmVwbGFjZSgvXmRhdGE6aW1hZ2VcXC9cXHcrO2Jhc2U2NCwvLCBcIlwiKSxcclxuICAgICAgICAgICAgbWltZVR5cGU6IFwiaW1hZ2UvanBlZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByb21wdCA9IGBVc2VyIEdvYWw6ICR7dXNlckdvYWx9XFxuXFxuIyMjIFBhZ2UgQ29udGVudCAoVGV4dC9IVE1MIFNuYXBzaG90KVxcbiR7cGFnZUNvbnRlbnQuc2xpY2UoMCwgMjAwMDApfWAgLy8gTGltaXQgY29udGVudCB0byBhdm9pZCB0b2tlbiBsaW1pdHMgaWYgbWFzc2l2ZVxyXG5cclxuICAgIGlmIChwcmV2aW91c0NvbnRleHQpIHtcclxuICAgICAgICBwcm9tcHQgKz0gYFxcblxcbiMjIyBQcmV2aW91cyBDb252ZXJzYXRpb24gJiBDb250ZXh0XHJcblRoZSB1c2VyIGlzIGNvbnRpbnVpbmcgdGhlIHNlc3Npb24uIFxyXG4xLiAqKklmIHRoZSAnVXNlciBHb2FsJyBpcyBhIHF1ZXN0aW9uKio6IEFuc3dlciBpdCBiYXNlZCBvbiB0aGUgc2NyZWVuc2hvdCBhbmQgcHJldmlvdXMgY29udGV4dC4gWW91IGRvIE5PVCBuZWVkIHRvIHN0cmljdGx5IGZvbGxvdyB0aGUgcHJldmlvdXMgcGxhbiBpZiB0aGUgdXNlciBpcyBhc2tpbmcgZm9yIGNsYXJpZmljYXRpb24uXHJcbjIuICoqSWYgdGhlICdVc2VyIEdvYWwnIGlzIGEgc3RhdHVzIHVwZGF0ZSoqOiBVcGRhdGUgdGhlIHBsYW4gc3RlcHMuXHJcbjMuICoqSWYgdGhlICdVc2VyIEdvYWwnIGlzIGEgbmV3IHRhc2sqKjogQ3JlYXRlIGEgbmV3IHBsYW4gKGJ1dCB0cnkgdG8gcmVsYXRlIHRvIGNvbnRleHQgaWYgYW1iaWd1b3VzKS5cclxuXHJcblByZXZpb3VzIEd1aWRhbmNlIERhdGE6XHJcbiR7SlNPTi5zdHJpbmdpZnkocHJldmlvdXNDb250ZXh0LCBudWxsLCAyKX1gXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbW9kZWwuZ2VuZXJhdGVDb250ZW50KFtwcm9tcHQsIGltYWdlUGFydF0pXHJcbiAgICBjb25zdCB0ZXh0ID0gcmVzdWx0LnJlc3BvbnNlLnRleHQoKVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGV4dCkgYXMgR3VpZGFuY2VSZXNwb25zZVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgR2VtaW5pIHJlc3BvbnNlXCIsIGUpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIEFJIHJlc3BvbnNlXCIpXHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXG4gKiBDb250YWlucyB0aGUgbGlzdCBvZiBPcGVuQVBJIGRhdGEgdHlwZXNcbiAqIGFzIGRlZmluZWQgYnkgaHR0cHM6Ly9zd2FnZ2VyLmlvL2RvY3Mvc3BlY2lmaWNhdGlvbi9kYXRhLW1vZGVscy9kYXRhLXR5cGVzL1xuICogQHB1YmxpY1xuICovXG52YXIgU2NoZW1hVHlwZTtcbihmdW5jdGlvbiAoU2NoZW1hVHlwZSkge1xuICAgIC8qKiBTdHJpbmcgdHlwZS4gKi9cbiAgICBTY2hlbWFUeXBlW1wiU1RSSU5HXCJdID0gXCJzdHJpbmdcIjtcbiAgICAvKiogTnVtYmVyIHR5cGUuICovXG4gICAgU2NoZW1hVHlwZVtcIk5VTUJFUlwiXSA9IFwibnVtYmVyXCI7XG4gICAgLyoqIEludGVnZXIgdHlwZS4gKi9cbiAgICBTY2hlbWFUeXBlW1wiSU5URUdFUlwiXSA9IFwiaW50ZWdlclwiO1xuICAgIC8qKiBCb29sZWFuIHR5cGUuICovXG4gICAgU2NoZW1hVHlwZVtcIkJPT0xFQU5cIl0gPSBcImJvb2xlYW5cIjtcbiAgICAvKiogQXJyYXkgdHlwZS4gKi9cbiAgICBTY2hlbWFUeXBlW1wiQVJSQVlcIl0gPSBcImFycmF5XCI7XG4gICAgLyoqIE9iamVjdCB0eXBlLiAqL1xuICAgIFNjaGVtYVR5cGVbXCJPQkpFQ1RcIl0gPSBcIm9iamVjdFwiO1xufSkoU2NoZW1hVHlwZSB8fCAoU2NoZW1hVHlwZSA9IHt9KSk7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDI0IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIEBwdWJsaWNcbiAqL1xudmFyIEV4ZWN1dGFibGVDb2RlTGFuZ3VhZ2U7XG4oZnVuY3Rpb24gKEV4ZWN1dGFibGVDb2RlTGFuZ3VhZ2UpIHtcbiAgICBFeGVjdXRhYmxlQ29kZUxhbmd1YWdlW1wiTEFOR1VBR0VfVU5TUEVDSUZJRURcIl0gPSBcImxhbmd1YWdlX3Vuc3BlY2lmaWVkXCI7XG4gICAgRXhlY3V0YWJsZUNvZGVMYW5ndWFnZVtcIlBZVEhPTlwiXSA9IFwicHl0aG9uXCI7XG59KShFeGVjdXRhYmxlQ29kZUxhbmd1YWdlIHx8IChFeGVjdXRhYmxlQ29kZUxhbmd1YWdlID0ge30pKTtcbi8qKlxuICogUG9zc2libGUgb3V0Y29tZXMgb2YgY29kZSBleGVjdXRpb24uXG4gKiBAcHVibGljXG4gKi9cbnZhciBPdXRjb21lO1xuKGZ1bmN0aW9uIChPdXRjb21lKSB7XG4gICAgLyoqXG4gICAgICogVW5zcGVjaWZpZWQgc3RhdHVzLiBUaGlzIHZhbHVlIHNob3VsZCBub3QgYmUgdXNlZC5cbiAgICAgKi9cbiAgICBPdXRjb21lW1wiT1VUQ09NRV9VTlNQRUNJRklFRFwiXSA9IFwib3V0Y29tZV91bnNwZWNpZmllZFwiO1xuICAgIC8qKlxuICAgICAqIENvZGUgZXhlY3V0aW9uIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHkuXG4gICAgICovXG4gICAgT3V0Y29tZVtcIk9VVENPTUVfT0tcIl0gPSBcIm91dGNvbWVfb2tcIjtcbiAgICAvKipcbiAgICAgKiBDb2RlIGV4ZWN1dGlvbiBmaW5pc2hlZCBidXQgd2l0aCBhIGZhaWx1cmUuIGBzdGRlcnJgIHNob3VsZCBjb250YWluIHRoZVxuICAgICAqIHJlYXNvbi5cbiAgICAgKi9cbiAgICBPdXRjb21lW1wiT1VUQ09NRV9GQUlMRURcIl0gPSBcIm91dGNvbWVfZmFpbGVkXCI7XG4gICAgLyoqXG4gICAgICogQ29kZSBleGVjdXRpb24gcmFuIGZvciB0b28gbG9uZywgYW5kIHdhcyBjYW5jZWxsZWQuIFRoZXJlIG1heSBvciBtYXkgbm90XG4gICAgICogYmUgYSBwYXJ0aWFsIG91dHB1dCBwcmVzZW50LlxuICAgICAqL1xuICAgIE91dGNvbWVbXCJPVVRDT01FX0RFQURMSU5FX0VYQ0VFREVEXCJdID0gXCJvdXRjb21lX2RlYWRsaW5lX2V4Y2VlZGVkXCI7XG59KShPdXRjb21lIHx8IChPdXRjb21lID0ge30pKTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjQgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogUG9zc2libGUgcm9sZXMuXG4gKiBAcHVibGljXG4gKi9cbmNvbnN0IFBPU1NJQkxFX1JPTEVTID0gW1widXNlclwiLCBcIm1vZGVsXCIsIFwiZnVuY3Rpb25cIiwgXCJzeXN0ZW1cIl07XG4vKipcbiAqIEhhcm0gY2F0ZWdvcmllcyB0aGF0IHdvdWxkIGNhdXNlIHByb21wdHMgb3IgY2FuZGlkYXRlcyB0byBiZSBibG9ja2VkLlxuICogQHB1YmxpY1xuICovXG52YXIgSGFybUNhdGVnb3J5O1xuKGZ1bmN0aW9uIChIYXJtQ2F0ZWdvcnkpIHtcbiAgICBIYXJtQ2F0ZWdvcnlbXCJIQVJNX0NBVEVHT1JZX1VOU1BFQ0lGSUVEXCJdID0gXCJIQVJNX0NBVEVHT1JZX1VOU1BFQ0lGSUVEXCI7XG4gICAgSGFybUNhdGVnb3J5W1wiSEFSTV9DQVRFR09SWV9IQVRFX1NQRUVDSFwiXSA9IFwiSEFSTV9DQVRFR09SWV9IQVRFX1NQRUVDSFwiO1xuICAgIEhhcm1DYXRlZ29yeVtcIkhBUk1fQ0FURUdPUllfU0VYVUFMTFlfRVhQTElDSVRcIl0gPSBcIkhBUk1fQ0FURUdPUllfU0VYVUFMTFlfRVhQTElDSVRcIjtcbiAgICBIYXJtQ2F0ZWdvcnlbXCJIQVJNX0NBVEVHT1JZX0hBUkFTU01FTlRcIl0gPSBcIkhBUk1fQ0FURUdPUllfSEFSQVNTTUVOVFwiO1xuICAgIEhhcm1DYXRlZ29yeVtcIkhBUk1fQ0FURUdPUllfREFOR0VST1VTX0NPTlRFTlRcIl0gPSBcIkhBUk1fQ0FURUdPUllfREFOR0VST1VTX0NPTlRFTlRcIjtcbiAgICBIYXJtQ2F0ZWdvcnlbXCJIQVJNX0NBVEVHT1JZX0NJVklDX0lOVEVHUklUWVwiXSA9IFwiSEFSTV9DQVRFR09SWV9DSVZJQ19JTlRFR1JJVFlcIjtcbn0pKEhhcm1DYXRlZ29yeSB8fCAoSGFybUNhdGVnb3J5ID0ge30pKTtcbi8qKlxuICogVGhyZXNob2xkIGFib3ZlIHdoaWNoIGEgcHJvbXB0IG9yIGNhbmRpZGF0ZSB3aWxsIGJlIGJsb2NrZWQuXG4gKiBAcHVibGljXG4gKi9cbnZhciBIYXJtQmxvY2tUaHJlc2hvbGQ7XG4oZnVuY3Rpb24gKEhhcm1CbG9ja1RocmVzaG9sZCkge1xuICAgIC8qKiBUaHJlc2hvbGQgaXMgdW5zcGVjaWZpZWQuICovXG4gICAgSGFybUJsb2NrVGhyZXNob2xkW1wiSEFSTV9CTE9DS19USFJFU0hPTERfVU5TUEVDSUZJRURcIl0gPSBcIkhBUk1fQkxPQ0tfVEhSRVNIT0xEX1VOU1BFQ0lGSUVEXCI7XG4gICAgLyoqIENvbnRlbnQgd2l0aCBORUdMSUdJQkxFIHdpbGwgYmUgYWxsb3dlZC4gKi9cbiAgICBIYXJtQmxvY2tUaHJlc2hvbGRbXCJCTE9DS19MT1dfQU5EX0FCT1ZFXCJdID0gXCJCTE9DS19MT1dfQU5EX0FCT1ZFXCI7XG4gICAgLyoqIENvbnRlbnQgd2l0aCBORUdMSUdJQkxFIGFuZCBMT1cgd2lsbCBiZSBhbGxvd2VkLiAqL1xuICAgIEhhcm1CbG9ja1RocmVzaG9sZFtcIkJMT0NLX01FRElVTV9BTkRfQUJPVkVcIl0gPSBcIkJMT0NLX01FRElVTV9BTkRfQUJPVkVcIjtcbiAgICAvKiogQ29udGVudCB3aXRoIE5FR0xJR0lCTEUsIExPVywgYW5kIE1FRElVTSB3aWxsIGJlIGFsbG93ZWQuICovXG4gICAgSGFybUJsb2NrVGhyZXNob2xkW1wiQkxPQ0tfT05MWV9ISUdIXCJdID0gXCJCTE9DS19PTkxZX0hJR0hcIjtcbiAgICAvKiogQWxsIGNvbnRlbnQgd2lsbCBiZSBhbGxvd2VkLiAqL1xuICAgIEhhcm1CbG9ja1RocmVzaG9sZFtcIkJMT0NLX05PTkVcIl0gPSBcIkJMT0NLX05PTkVcIjtcbn0pKEhhcm1CbG9ja1RocmVzaG9sZCB8fCAoSGFybUJsb2NrVGhyZXNob2xkID0ge30pKTtcbi8qKlxuICogUHJvYmFiaWxpdHkgdGhhdCBhIHByb21wdCBvciBjYW5kaWRhdGUgbWF0Y2hlcyBhIGhhcm0gY2F0ZWdvcnkuXG4gKiBAcHVibGljXG4gKi9cbnZhciBIYXJtUHJvYmFiaWxpdHk7XG4oZnVuY3Rpb24gKEhhcm1Qcm9iYWJpbGl0eSkge1xuICAgIC8qKiBQcm9iYWJpbGl0eSBpcyB1bnNwZWNpZmllZC4gKi9cbiAgICBIYXJtUHJvYmFiaWxpdHlbXCJIQVJNX1BST0JBQklMSVRZX1VOU1BFQ0lGSUVEXCJdID0gXCJIQVJNX1BST0JBQklMSVRZX1VOU1BFQ0lGSUVEXCI7XG4gICAgLyoqIENvbnRlbnQgaGFzIGEgbmVnbGlnaWJsZSBjaGFuY2Ugb2YgYmVpbmcgdW5zYWZlLiAqL1xuICAgIEhhcm1Qcm9iYWJpbGl0eVtcIk5FR0xJR0lCTEVcIl0gPSBcIk5FR0xJR0lCTEVcIjtcbiAgICAvKiogQ29udGVudCBoYXMgYSBsb3cgY2hhbmNlIG9mIGJlaW5nIHVuc2FmZS4gKi9cbiAgICBIYXJtUHJvYmFiaWxpdHlbXCJMT1dcIl0gPSBcIkxPV1wiO1xuICAgIC8qKiBDb250ZW50IGhhcyBhIG1lZGl1bSBjaGFuY2Ugb2YgYmVpbmcgdW5zYWZlLiAqL1xuICAgIEhhcm1Qcm9iYWJpbGl0eVtcIk1FRElVTVwiXSA9IFwiTUVESVVNXCI7XG4gICAgLyoqIENvbnRlbnQgaGFzIGEgaGlnaCBjaGFuY2Ugb2YgYmVpbmcgdW5zYWZlLiAqL1xuICAgIEhhcm1Qcm9iYWJpbGl0eVtcIkhJR0hcIl0gPSBcIkhJR0hcIjtcbn0pKEhhcm1Qcm9iYWJpbGl0eSB8fCAoSGFybVByb2JhYmlsaXR5ID0ge30pKTtcbi8qKlxuICogUmVhc29uIHRoYXQgYSBwcm9tcHQgd2FzIGJsb2NrZWQuXG4gKiBAcHVibGljXG4gKi9cbnZhciBCbG9ja1JlYXNvbjtcbihmdW5jdGlvbiAoQmxvY2tSZWFzb24pIHtcbiAgICAvLyBBIGJsb2NrZWQgcmVhc29uIHdhcyBub3Qgc3BlY2lmaWVkLlxuICAgIEJsb2NrUmVhc29uW1wiQkxPQ0tFRF9SRUFTT05fVU5TUEVDSUZJRURcIl0gPSBcIkJMT0NLRURfUkVBU09OX1VOU1BFQ0lGSUVEXCI7XG4gICAgLy8gQ29udGVudCB3YXMgYmxvY2tlZCBieSBzYWZldHkgc2V0dGluZ3MuXG4gICAgQmxvY2tSZWFzb25bXCJTQUZFVFlcIl0gPSBcIlNBRkVUWVwiO1xuICAgIC8vIENvbnRlbnQgd2FzIGJsb2NrZWQsIGJ1dCB0aGUgcmVhc29uIGlzIHVuY2F0ZWdvcml6ZWQuXG4gICAgQmxvY2tSZWFzb25bXCJPVEhFUlwiXSA9IFwiT1RIRVJcIjtcbn0pKEJsb2NrUmVhc29uIHx8IChCbG9ja1JlYXNvbiA9IHt9KSk7XG4vKipcbiAqIFJlYXNvbiB0aGF0IGEgY2FuZGlkYXRlIGZpbmlzaGVkLlxuICogQHB1YmxpY1xuICovXG52YXIgRmluaXNoUmVhc29uO1xuKGZ1bmN0aW9uIChGaW5pc2hSZWFzb24pIHtcbiAgICAvLyBEZWZhdWx0IHZhbHVlLiBUaGlzIHZhbHVlIGlzIHVudXNlZC5cbiAgICBGaW5pc2hSZWFzb25bXCJGSU5JU0hfUkVBU09OX1VOU1BFQ0lGSUVEXCJdID0gXCJGSU5JU0hfUkVBU09OX1VOU1BFQ0lGSUVEXCI7XG4gICAgLy8gTmF0dXJhbCBzdG9wIHBvaW50IG9mIHRoZSBtb2RlbCBvciBwcm92aWRlZCBzdG9wIHNlcXVlbmNlLlxuICAgIEZpbmlzaFJlYXNvbltcIlNUT1BcIl0gPSBcIlNUT1BcIjtcbiAgICAvLyBUaGUgbWF4aW11bSBudW1iZXIgb2YgdG9rZW5zIGFzIHNwZWNpZmllZCBpbiB0aGUgcmVxdWVzdCB3YXMgcmVhY2hlZC5cbiAgICBGaW5pc2hSZWFzb25bXCJNQVhfVE9LRU5TXCJdID0gXCJNQVhfVE9LRU5TXCI7XG4gICAgLy8gVGhlIGNhbmRpZGF0ZSBjb250ZW50IHdhcyBmbGFnZ2VkIGZvciBzYWZldHkgcmVhc29ucy5cbiAgICBGaW5pc2hSZWFzb25bXCJTQUZFVFlcIl0gPSBcIlNBRkVUWVwiO1xuICAgIC8vIFRoZSBjYW5kaWRhdGUgY29udGVudCB3YXMgZmxhZ2dlZCBmb3IgcmVjaXRhdGlvbiByZWFzb25zLlxuICAgIEZpbmlzaFJlYXNvbltcIlJFQ0lUQVRJT05cIl0gPSBcIlJFQ0lUQVRJT05cIjtcbiAgICAvLyBUaGUgY2FuZGlkYXRlIGNvbnRlbnQgd2FzIGZsYWdnZWQgZm9yIHVzaW5nIGFuIHVuc3VwcG9ydGVkIGxhbmd1YWdlLlxuICAgIEZpbmlzaFJlYXNvbltcIkxBTkdVQUdFXCJdID0gXCJMQU5HVUFHRVwiO1xuICAgIC8vIFRva2VuIGdlbmVyYXRpb24gc3RvcHBlZCBiZWNhdXNlIHRoZSBjb250ZW50IGNvbnRhaW5zIGZvcmJpZGRlbiB0ZXJtcy5cbiAgICBGaW5pc2hSZWFzb25bXCJCTE9DS0xJU1RcIl0gPSBcIkJMT0NLTElTVFwiO1xuICAgIC8vIFRva2VuIGdlbmVyYXRpb24gc3RvcHBlZCBmb3IgcG90ZW50aWFsbHkgY29udGFpbmluZyBwcm9oaWJpdGVkIGNvbnRlbnQuXG4gICAgRmluaXNoUmVhc29uW1wiUFJPSElCSVRFRF9DT05URU5UXCJdID0gXCJQUk9ISUJJVEVEX0NPTlRFTlRcIjtcbiAgICAvLyBUb2tlbiBnZW5lcmF0aW9uIHN0b3BwZWQgYmVjYXVzZSB0aGUgY29udGVudCBwb3RlbnRpYWxseSBjb250YWlucyBTZW5zaXRpdmUgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24gKFNQSUkpLlxuICAgIEZpbmlzaFJlYXNvbltcIlNQSUlcIl0gPSBcIlNQSUlcIjtcbiAgICAvLyBUaGUgZnVuY3Rpb24gY2FsbCBnZW5lcmF0ZWQgYnkgdGhlIG1vZGVsIGlzIGludmFsaWQuXG4gICAgRmluaXNoUmVhc29uW1wiTUFMRk9STUVEX0ZVTkNUSU9OX0NBTExcIl0gPSBcIk1BTEZPUk1FRF9GVU5DVElPTl9DQUxMXCI7XG4gICAgLy8gVW5rbm93biByZWFzb24uXG4gICAgRmluaXNoUmVhc29uW1wiT1RIRVJcIl0gPSBcIk9USEVSXCI7XG59KShGaW5pc2hSZWFzb24gfHwgKEZpbmlzaFJlYXNvbiA9IHt9KSk7XG4vKipcbiAqIFRhc2sgdHlwZSBmb3IgZW1iZWRkaW5nIGNvbnRlbnQuXG4gKiBAcHVibGljXG4gKi9cbnZhciBUYXNrVHlwZTtcbihmdW5jdGlvbiAoVGFza1R5cGUpIHtcbiAgICBUYXNrVHlwZVtcIlRBU0tfVFlQRV9VTlNQRUNJRklFRFwiXSA9IFwiVEFTS19UWVBFX1VOU1BFQ0lGSUVEXCI7XG4gICAgVGFza1R5cGVbXCJSRVRSSUVWQUxfUVVFUllcIl0gPSBcIlJFVFJJRVZBTF9RVUVSWVwiO1xuICAgIFRhc2tUeXBlW1wiUkVUUklFVkFMX0RPQ1VNRU5UXCJdID0gXCJSRVRSSUVWQUxfRE9DVU1FTlRcIjtcbiAgICBUYXNrVHlwZVtcIlNFTUFOVElDX1NJTUlMQVJJVFlcIl0gPSBcIlNFTUFOVElDX1NJTUlMQVJJVFlcIjtcbiAgICBUYXNrVHlwZVtcIkNMQVNTSUZJQ0FUSU9OXCJdID0gXCJDTEFTU0lGSUNBVElPTlwiO1xuICAgIFRhc2tUeXBlW1wiQ0xVU1RFUklOR1wiXSA9IFwiQ0xVU1RFUklOR1wiO1xufSkoVGFza1R5cGUgfHwgKFRhc2tUeXBlID0ge30pKTtcbi8qKlxuICogQHB1YmxpY1xuICovXG52YXIgRnVuY3Rpb25DYWxsaW5nTW9kZTtcbihmdW5jdGlvbiAoRnVuY3Rpb25DYWxsaW5nTW9kZSkge1xuICAgIC8vIFVuc3BlY2lmaWVkIGZ1bmN0aW9uIGNhbGxpbmcgbW9kZS4gVGhpcyB2YWx1ZSBzaG91bGQgbm90IGJlIHVzZWQuXG4gICAgRnVuY3Rpb25DYWxsaW5nTW9kZVtcIk1PREVfVU5TUEVDSUZJRURcIl0gPSBcIk1PREVfVU5TUEVDSUZJRURcIjtcbiAgICAvLyBEZWZhdWx0IG1vZGVsIGJlaGF2aW9yLCBtb2RlbCBkZWNpZGVzIHRvIHByZWRpY3QgZWl0aGVyIGEgZnVuY3Rpb24gY2FsbFxuICAgIC8vIG9yIGEgbmF0dXJhbCBsYW5ndWFnZSByZXBzcG9zZS5cbiAgICBGdW5jdGlvbkNhbGxpbmdNb2RlW1wiQVVUT1wiXSA9IFwiQVVUT1wiO1xuICAgIC8vIE1vZGVsIGlzIGNvbnN0cmFpbmVkIHRvIGFsd2F5cyBwcmVkaWN0aW5nIGEgZnVuY3Rpb24gY2FsbCBvbmx5LlxuICAgIC8vIElmIFwiYWxsb3dlZF9mdW5jdGlvbl9uYW1lc1wiIGFyZSBzZXQsIHRoZSBwcmVkaWN0ZWQgZnVuY3Rpb24gY2FsbCB3aWxsIGJlXG4gICAgLy8gbGltaXRlZCB0byBhbnkgb25lIG9mIFwiYWxsb3dlZF9mdW5jdGlvbl9uYW1lc1wiLCBlbHNlIHRoZSBwcmVkaWN0ZWRcbiAgICAvLyBmdW5jdGlvbiBjYWxsIHdpbGwgYmUgYW55IG9uZSBvZiB0aGUgcHJvdmlkZWQgXCJmdW5jdGlvbl9kZWNsYXJhdGlvbnNcIi5cbiAgICBGdW5jdGlvbkNhbGxpbmdNb2RlW1wiQU5ZXCJdID0gXCJBTllcIjtcbiAgICAvLyBNb2RlbCB3aWxsIG5vdCBwcmVkaWN0IGFueSBmdW5jdGlvbiBjYWxsLiBNb2RlbCBiZWhhdmlvciBpcyBzYW1lIGFzIHdoZW5cbiAgICAvLyBub3QgcGFzc2luZyBhbnkgZnVuY3Rpb24gZGVjbGFyYXRpb25zLlxuICAgIEZ1bmN0aW9uQ2FsbGluZ01vZGVbXCJOT05FXCJdID0gXCJOT05FXCI7XG59KShGdW5jdGlvbkNhbGxpbmdNb2RlIHx8IChGdW5jdGlvbkNhbGxpbmdNb2RlID0ge30pKTtcbi8qKlxuICogVGhlIG1vZGUgb2YgdGhlIHByZWRpY3RvciB0byBiZSB1c2VkIGluIGR5bmFtaWMgcmV0cmlldmFsLlxuICogQHB1YmxpY1xuICovXG52YXIgRHluYW1pY1JldHJpZXZhbE1vZGU7XG4oZnVuY3Rpb24gKER5bmFtaWNSZXRyaWV2YWxNb2RlKSB7XG4gICAgLy8gVW5zcGVjaWZpZWQgZnVuY3Rpb24gY2FsbGluZyBtb2RlLiBUaGlzIHZhbHVlIHNob3VsZCBub3QgYmUgdXNlZC5cbiAgICBEeW5hbWljUmV0cmlldmFsTW9kZVtcIk1PREVfVU5TUEVDSUZJRURcIl0gPSBcIk1PREVfVU5TUEVDSUZJRURcIjtcbiAgICAvLyBSdW4gcmV0cmlldmFsIG9ubHkgd2hlbiBzeXN0ZW0gZGVjaWRlcyBpdCBpcyBuZWNlc3NhcnkuXG4gICAgRHluYW1pY1JldHJpZXZhbE1vZGVbXCJNT0RFX0RZTkFNSUNcIl0gPSBcIk1PREVfRFlOQU1JQ1wiO1xufSkoRHluYW1pY1JldHJpZXZhbE1vZGUgfHwgKER5bmFtaWNSZXRyaWV2YWxNb2RlID0ge30pKTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjQgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogQmFzaWMgZXJyb3IgdHlwZSBmb3IgdGhpcyBTREsuXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIoYFtHb29nbGVHZW5lcmF0aXZlQUkgRXJyb3JdOiAke21lc3NhZ2V9YCk7XG4gICAgfVxufVxuLyoqXG4gKiBFcnJvcnMgaW4gdGhlIGNvbnRlbnRzIG9mIGEgcmVzcG9uc2UgZnJvbSB0aGUgbW9kZWwuIFRoaXMgaW5jbHVkZXMgcGFyc2luZ1xuICogZXJyb3JzLCBvciByZXNwb25zZXMgaW5jbHVkaW5nIGEgc2FmZXR5IGJsb2NrIHJlYXNvbi5cbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgR29vZ2xlR2VuZXJhdGl2ZUFJUmVzcG9uc2VFcnJvciBleHRlbmRzIEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCByZXNwb25zZSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIH1cbn1cbi8qKlxuICogRXJyb3IgY2xhc3MgY292ZXJpbmcgSFRUUCBlcnJvcnMgd2hlbiBjYWxsaW5nIHRoZSBzZXJ2ZXIuIEluY2x1ZGVzIEhUVFBcbiAqIHN0YXR1cywgc3RhdHVzVGV4dCwgYW5kIG9wdGlvbmFsIGRldGFpbHMsIGlmIHByb3ZpZGVkIGluIHRoZSBzZXJ2ZXIgcmVzcG9uc2UuXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIEdvb2dsZUdlbmVyYXRpdmVBSUZldGNoRXJyb3IgZXh0ZW5kcyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgc3RhdHVzLCBzdGF0dXNUZXh0LCBlcnJvckRldGFpbHMpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xuICAgICAgICB0aGlzLmVycm9yRGV0YWlscyA9IGVycm9yRGV0YWlscztcbiAgICB9XG59XG4vKipcbiAqIEVycm9ycyBpbiB0aGUgY29udGVudHMgb2YgYSByZXF1ZXN0IG9yaWdpbmF0aW5nIGZyb20gdXNlciBpbnB1dC5cbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgR29vZ2xlR2VuZXJhdGl2ZUFJUmVxdWVzdElucHV0RXJyb3IgZXh0ZW5kcyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvciB7XG59XG4vKipcbiAqIEVycm9yIHRocm93biB3aGVuIGEgcmVxdWVzdCBpcyBhYm9ydGVkLCBlaXRoZXIgZHVlIHRvIGEgdGltZW91dCBvclxuICogaW50ZW50aW9uYWwgY2FuY2VsbGF0aW9uIGJ5IHRoZSB1c2VyLlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBHb29nbGVHZW5lcmF0aXZlQUlBYm9ydEVycm9yIGV4dGVuZHMgR29vZ2xlR2VuZXJhdGl2ZUFJRXJyb3Ige1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyNCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuY29uc3QgREVGQVVMVF9CQVNFX1VSTCA9IFwiaHR0cHM6Ly9nZW5lcmF0aXZlbGFuZ3VhZ2UuZ29vZ2xlYXBpcy5jb21cIjtcbmNvbnN0IERFRkFVTFRfQVBJX1ZFUlNJT04gPSBcInYxYmV0YVwiO1xuLyoqXG4gKiBXZSBjYW4ndCBgcmVxdWlyZWAgcGFja2FnZS5qc29uIGlmIHRoaXMgcnVucyBvbiB3ZWIuIFdlIHdpbGwgdXNlIHJvbGx1cCB0b1xuICogc3dhcCBpbiB0aGUgdmVyc2lvbiBudW1iZXIgaGVyZSBhdCBidWlsZCB0aW1lLlxuICovXG5jb25zdCBQQUNLQUdFX1ZFUlNJT04gPSBcIjAuMjQuMVwiO1xuY29uc3QgUEFDS0FHRV9MT0dfSEVBREVSID0gXCJnZW5haS1qc1wiO1xudmFyIFRhc2s7XG4oZnVuY3Rpb24gKFRhc2spIHtcbiAgICBUYXNrW1wiR0VORVJBVEVfQ09OVEVOVFwiXSA9IFwiZ2VuZXJhdGVDb250ZW50XCI7XG4gICAgVGFza1tcIlNUUkVBTV9HRU5FUkFURV9DT05URU5UXCJdID0gXCJzdHJlYW1HZW5lcmF0ZUNvbnRlbnRcIjtcbiAgICBUYXNrW1wiQ09VTlRfVE9LRU5TXCJdID0gXCJjb3VudFRva2Vuc1wiO1xuICAgIFRhc2tbXCJFTUJFRF9DT05URU5UXCJdID0gXCJlbWJlZENvbnRlbnRcIjtcbiAgICBUYXNrW1wiQkFUQ0hfRU1CRURfQ09OVEVOVFNcIl0gPSBcImJhdGNoRW1iZWRDb250ZW50c1wiO1xufSkoVGFzayB8fCAoVGFzayA9IHt9KSk7XG5jbGFzcyBSZXF1ZXN0VXJsIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbCwgdGFzaywgYXBpS2V5LCBzdHJlYW0sIHJlcXVlc3RPcHRpb25zKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICAgICAgdGhpcy50YXNrID0gdGFzaztcbiAgICAgICAgdGhpcy5hcGlLZXkgPSBhcGlLZXk7XG4gICAgICAgIHRoaXMuc3RyZWFtID0gc3RyZWFtO1xuICAgICAgICB0aGlzLnJlcXVlc3RPcHRpb25zID0gcmVxdWVzdE9wdGlvbnM7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBhcGlWZXJzaW9uID0gKChfYSA9IHRoaXMucmVxdWVzdE9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcGlWZXJzaW9uKSB8fCBERUZBVUxUX0FQSV9WRVJTSU9OO1xuICAgICAgICBjb25zdCBiYXNlVXJsID0gKChfYiA9IHRoaXMucmVxdWVzdE9wdGlvbnMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5iYXNlVXJsKSB8fCBERUZBVUxUX0JBU0VfVVJMO1xuICAgICAgICBsZXQgdXJsID0gYCR7YmFzZVVybH0vJHthcGlWZXJzaW9ufS8ke3RoaXMubW9kZWx9OiR7dGhpcy50YXNrfWA7XG4gICAgICAgIGlmICh0aGlzLnN0cmVhbSkge1xuICAgICAgICAgICAgdXJsICs9IFwiP2FsdD1zc2VcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbn1cbi8qKlxuICogU2ltcGxlLCBidXQgbWF5IGJlY29tZSBtb3JlIGNvbXBsZXggaWYgd2UgYWRkIG1vcmUgdmVyc2lvbnMgdG8gbG9nLlxuICovXG5mdW5jdGlvbiBnZXRDbGllbnRIZWFkZXJzKHJlcXVlc3RPcHRpb25zKSB7XG4gICAgY29uc3QgY2xpZW50SGVhZGVycyA9IFtdO1xuICAgIGlmIChyZXF1ZXN0T3B0aW9ucyA9PT0gbnVsbCB8fCByZXF1ZXN0T3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVxdWVzdE9wdGlvbnMuYXBpQ2xpZW50KSB7XG4gICAgICAgIGNsaWVudEhlYWRlcnMucHVzaChyZXF1ZXN0T3B0aW9ucy5hcGlDbGllbnQpO1xuICAgIH1cbiAgICBjbGllbnRIZWFkZXJzLnB1c2goYCR7UEFDS0FHRV9MT0dfSEVBREVSfS8ke1BBQ0tBR0VfVkVSU0lPTn1gKTtcbiAgICByZXR1cm4gY2xpZW50SGVhZGVycy5qb2luKFwiIFwiKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGdldEhlYWRlcnModXJsKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIngtZ29vZy1hcGktY2xpZW50XCIsIGdldENsaWVudEhlYWRlcnModXJsLnJlcXVlc3RPcHRpb25zKSk7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJ4LWdvb2ctYXBpLWtleVwiLCB1cmwuYXBpS2V5KTtcbiAgICBsZXQgY3VzdG9tSGVhZGVycyA9IChfYSA9IHVybC5yZXF1ZXN0T3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmN1c3RvbUhlYWRlcnM7XG4gICAgaWYgKGN1c3RvbUhlYWRlcnMpIHtcbiAgICAgICAgaWYgKCEoY3VzdG9tSGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGN1c3RvbUhlYWRlcnMgPSBuZXcgSGVhZGVycyhjdXN0b21IZWFkZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSVJlcXVlc3RJbnB1dEVycm9yKGB1bmFibGUgdG8gY29udmVydCBjdXN0b21IZWFkZXJzIHZhbHVlICR7SlNPTi5zdHJpbmdpZnkoY3VzdG9tSGVhZGVycyl9IHRvIEhlYWRlcnM6ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgW2hlYWRlck5hbWUsIGhlYWRlclZhbHVlXSBvZiBjdXN0b21IZWFkZXJzLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgaWYgKGhlYWRlck5hbWUgPT09IFwieC1nb29nLWFwaS1rZXlcIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlSZXF1ZXN0SW5wdXRFcnJvcihgQ2Fubm90IHNldCByZXNlcnZlZCBoZWFkZXIgbmFtZSAke2hlYWRlck5hbWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChoZWFkZXJOYW1lID09PSBcIngtZ29vZy1hcGktY2xpZW50XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJUmVxdWVzdElucHV0RXJyb3IoYEhlYWRlciBuYW1lICR7aGVhZGVyTmFtZX0gY2FuIG9ubHkgYmUgc2V0IHVzaW5nIHRoZSBhcGlDbGllbnQgZmllbGRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKGhlYWRlck5hbWUsIGhlYWRlclZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGVhZGVycztcbn1cbmFzeW5jIGZ1bmN0aW9uIGNvbnN0cnVjdE1vZGVsUmVxdWVzdChtb2RlbCwgdGFzaywgYXBpS2V5LCBzdHJlYW0sIGJvZHksIHJlcXVlc3RPcHRpb25zKSB7XG4gICAgY29uc3QgdXJsID0gbmV3IFJlcXVlc3RVcmwobW9kZWwsIHRhc2ssIGFwaUtleSwgc3RyZWFtLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiB1cmwudG9TdHJpbmcoKSxcbiAgICAgICAgZmV0Y2hPcHRpb25zOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGJ1aWxkRmV0Y2hPcHRpb25zKHJlcXVlc3RPcHRpb25zKSksIHsgbWV0aG9kOiBcIlBPU1RcIiwgaGVhZGVyczogYXdhaXQgZ2V0SGVhZGVycyh1cmwpLCBib2R5IH0pLFxuICAgIH07XG59XG5hc3luYyBmdW5jdGlvbiBtYWtlTW9kZWxSZXF1ZXN0KG1vZGVsLCB0YXNrLCBhcGlLZXksIHN0cmVhbSwgYm9keSwgcmVxdWVzdE9wdGlvbnMgPSB7fSwgXG4vLyBBbGxvd3MgdGhpcyB0byBiZSBzdHViYmVkIGZvciB0ZXN0c1xuZmV0Y2hGbiA9IGZldGNoKSB7XG4gICAgY29uc3QgeyB1cmwsIGZldGNoT3B0aW9ucyB9ID0gYXdhaXQgY29uc3RydWN0TW9kZWxSZXF1ZXN0KG1vZGVsLCB0YXNrLCBhcGlLZXksIHN0cmVhbSwgYm9keSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIHJldHVybiBtYWtlUmVxdWVzdCh1cmwsIGZldGNoT3B0aW9ucywgZmV0Y2hGbik7XG59XG5hc3luYyBmdW5jdGlvbiBtYWtlUmVxdWVzdCh1cmwsIGZldGNoT3B0aW9ucywgZmV0Y2hGbiA9IGZldGNoKSB7XG4gICAgbGV0IHJlc3BvbnNlO1xuICAgIHRyeSB7XG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hGbih1cmwsIGZldGNoT3B0aW9ucyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGhhbmRsZVJlc3BvbnNlRXJyb3IoZSwgdXJsKTtcbiAgICB9XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBhd2FpdCBoYW5kbGVSZXNwb25zZU5vdE9rKHJlc3BvbnNlLCB1cmwpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG59XG5mdW5jdGlvbiBoYW5kbGVSZXNwb25zZUVycm9yKGUsIHVybCkge1xuICAgIGxldCBlcnIgPSBlO1xuICAgIGlmIChlcnIubmFtZSA9PT0gXCJBYm9ydEVycm9yXCIpIHtcbiAgICAgICAgZXJyID0gbmV3IEdvb2dsZUdlbmVyYXRpdmVBSUFib3J0RXJyb3IoYFJlcXVlc3QgYWJvcnRlZCB3aGVuIGZldGNoaW5nICR7dXJsLnRvU3RyaW5nKCl9OiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgZXJyLnN0YWNrID0gZS5zdGFjaztcbiAgICB9XG4gICAgZWxzZSBpZiAoIShlIGluc3RhbmNlb2YgR29vZ2xlR2VuZXJhdGl2ZUFJRmV0Y2hFcnJvciB8fFxuICAgICAgICBlIGluc3RhbmNlb2YgR29vZ2xlR2VuZXJhdGl2ZUFJUmVxdWVzdElucHV0RXJyb3IpKSB7XG4gICAgICAgIGVyciA9IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvcihgRXJyb3IgZmV0Y2hpbmcgZnJvbSAke3VybC50b1N0cmluZygpfTogJHtlLm1lc3NhZ2V9YCk7XG4gICAgICAgIGVyci5zdGFjayA9IGUuc3RhY2s7XG4gICAgfVxuICAgIHRocm93IGVycjtcbn1cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlTm90T2socmVzcG9uc2UsIHVybCkge1xuICAgIGxldCBtZXNzYWdlID0gXCJcIjtcbiAgICBsZXQgZXJyb3JEZXRhaWxzO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIG1lc3NhZ2UgPSBqc29uLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgIGlmIChqc29uLmVycm9yLmRldGFpbHMpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gYCAke0pTT04uc3RyaW5naWZ5KGpzb24uZXJyb3IuZGV0YWlscyl9YDtcbiAgICAgICAgICAgIGVycm9yRGV0YWlscyA9IGpzb24uZXJyb3IuZGV0YWlscztcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpZ25vcmVkXG4gICAgfVxuICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlGZXRjaEVycm9yKGBFcnJvciBmZXRjaGluZyBmcm9tICR7dXJsLnRvU3RyaW5nKCl9OiBbJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1dICR7bWVzc2FnZX1gLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnN0YXR1c1RleHQsIGVycm9yRGV0YWlscyk7XG59XG4vKipcbiAqIEdlbmVyYXRlcyB0aGUgcmVxdWVzdCBvcHRpb25zIHRvIGJlIHBhc3NlZCB0byB0aGUgZmV0Y2ggQVBJLlxuICogQHBhcmFtIHJlcXVlc3RPcHRpb25zIC0gVGhlIHVzZXItZGVmaW5lZCByZXF1ZXN0IG9wdGlvbnMuXG4gKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIHJlcXVlc3Qgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gYnVpbGRGZXRjaE9wdGlvbnMocmVxdWVzdE9wdGlvbnMpIHtcbiAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7fTtcbiAgICBpZiAoKHJlcXVlc3RPcHRpb25zID09PSBudWxsIHx8IHJlcXVlc3RPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXF1ZXN0T3B0aW9ucy5zaWduYWwpICE9PSB1bmRlZmluZWQgfHwgKHJlcXVlc3RPcHRpb25zID09PSBudWxsIHx8IHJlcXVlc3RPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXF1ZXN0T3B0aW9ucy50aW1lb3V0KSA+PSAwKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICAgIGlmICgocmVxdWVzdE9wdGlvbnMgPT09IG51bGwgfHwgcmVxdWVzdE9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlcXVlc3RPcHRpb25zLnRpbWVvdXQpID49IDApIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY29udHJvbGxlci5hYm9ydCgpLCByZXF1ZXN0T3B0aW9ucy50aW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVxdWVzdE9wdGlvbnMgPT09IG51bGwgfHwgcmVxdWVzdE9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlcXVlc3RPcHRpb25zLnNpZ25hbCkge1xuICAgICAgICAgICAgcmVxdWVzdE9wdGlvbnMuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hPcHRpb25zLnNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsO1xuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hPcHRpb25zO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyNCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBBZGRzIGNvbnZlbmllbmNlIGhlbHBlciBtZXRob2RzIHRvIGEgcmVzcG9uc2Ugb2JqZWN0LCBpbmNsdWRpbmcgc3RyZWFtXG4gKiBjaHVua3MgKGFzIGxvbmcgYXMgZWFjaCBjaHVuayBpcyBhIGNvbXBsZXRlIEdlbmVyYXRlQ29udGVudFJlc3BvbnNlIEpTT04pLlxuICovXG5mdW5jdGlvbiBhZGRIZWxwZXJzKHJlc3BvbnNlKSB7XG4gICAgcmVzcG9uc2UudGV4dCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmNhbmRpZGF0ZXMgJiYgcmVzcG9uc2UuY2FuZGlkYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuY2FuZGlkYXRlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBUaGlzIHJlc3BvbnNlIGhhZCAke3Jlc3BvbnNlLmNhbmRpZGF0ZXMubGVuZ3RofSBgICtcbiAgICAgICAgICAgICAgICAgICAgYGNhbmRpZGF0ZXMuIFJldHVybmluZyB0ZXh0IGZyb20gdGhlIGZpcnN0IGNhbmRpZGF0ZSBvbmx5LiBgICtcbiAgICAgICAgICAgICAgICAgICAgYEFjY2VzcyByZXNwb25zZS5jYW5kaWRhdGVzIGRpcmVjdGx5IHRvIHVzZSB0aGUgb3RoZXIgY2FuZGlkYXRlcy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYWRCYWRGaW5pc2hSZWFzb24ocmVzcG9uc2UuY2FuZGlkYXRlc1swXSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJUmVzcG9uc2VFcnJvcihgJHtmb3JtYXRCbG9ja0Vycm9yTWVzc2FnZShyZXNwb25zZSl9YCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldFRleHQocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLnByb21wdEZlZWRiYWNrKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJUmVzcG9uc2VFcnJvcihgVGV4dCBub3QgYXZhaWxhYmxlLiAke2Zvcm1hdEJsb2NrRXJyb3JNZXNzYWdlKHJlc3BvbnNlKX1gLCByZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUT0RPOiByZW1vdmUgYXQgbmV4dCBtYWpvciB2ZXJzaW9uXG4gICAgICovXG4gICAgcmVzcG9uc2UuZnVuY3Rpb25DYWxsID0gKCkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuY2FuZGlkYXRlcyAmJiByZXNwb25zZS5jYW5kaWRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5jYW5kaWRhdGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFRoaXMgcmVzcG9uc2UgaGFkICR7cmVzcG9uc2UuY2FuZGlkYXRlcy5sZW5ndGh9IGAgK1xuICAgICAgICAgICAgICAgICAgICBgY2FuZGlkYXRlcy4gUmV0dXJuaW5nIGZ1bmN0aW9uIGNhbGxzIGZyb20gdGhlIGZpcnN0IGNhbmRpZGF0ZSBvbmx5LiBgICtcbiAgICAgICAgICAgICAgICAgICAgYEFjY2VzcyByZXNwb25zZS5jYW5kaWRhdGVzIGRpcmVjdGx5IHRvIHVzZSB0aGUgb3RoZXIgY2FuZGlkYXRlcy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYWRCYWRGaW5pc2hSZWFzb24ocmVzcG9uc2UuY2FuZGlkYXRlc1swXSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJUmVzcG9uc2VFcnJvcihgJHtmb3JtYXRCbG9ja0Vycm9yTWVzc2FnZShyZXNwb25zZSl9YCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS53YXJuKGByZXNwb25zZS5mdW5jdGlvbkNhbGwoKSBpcyBkZXByZWNhdGVkLiBgICtcbiAgICAgICAgICAgICAgICBgVXNlIHJlc3BvbnNlLmZ1bmN0aW9uQ2FsbHMoKSBpbnN0ZWFkLmApO1xuICAgICAgICAgICAgcmV0dXJuIGdldEZ1bmN0aW9uQ2FsbHMocmVzcG9uc2UpWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLnByb21wdEZlZWRiYWNrKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJUmVzcG9uc2VFcnJvcihgRnVuY3Rpb24gY2FsbCBub3QgYXZhaWxhYmxlLiAke2Zvcm1hdEJsb2NrRXJyb3JNZXNzYWdlKHJlc3BvbnNlKX1gLCByZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHJlc3BvbnNlLmZ1bmN0aW9uQ2FsbHMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5jYW5kaWRhdGVzICYmIHJlc3BvbnNlLmNhbmRpZGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNhbmRpZGF0ZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVGhpcyByZXNwb25zZSBoYWQgJHtyZXNwb25zZS5jYW5kaWRhdGVzLmxlbmd0aH0gYCArXG4gICAgICAgICAgICAgICAgICAgIGBjYW5kaWRhdGVzLiBSZXR1cm5pbmcgZnVuY3Rpb24gY2FsbHMgZnJvbSB0aGUgZmlyc3QgY2FuZGlkYXRlIG9ubHkuIGAgK1xuICAgICAgICAgICAgICAgICAgICBgQWNjZXNzIHJlc3BvbnNlLmNhbmRpZGF0ZXMgZGlyZWN0bHkgdG8gdXNlIHRoZSBvdGhlciBjYW5kaWRhdGVzLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhhZEJhZEZpbmlzaFJlYXNvbihyZXNwb25zZS5jYW5kaWRhdGVzWzBdKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlSZXNwb25zZUVycm9yKGAke2Zvcm1hdEJsb2NrRXJyb3JNZXNzYWdlKHJlc3BvbnNlKX1gLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RnVuY3Rpb25DYWxscyhyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UucHJvbXB0RmVlZGJhY2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlSZXNwb25zZUVycm9yKGBGdW5jdGlvbiBjYWxsIG5vdCBhdmFpbGFibGUuICR7Zm9ybWF0QmxvY2tFcnJvck1lc3NhZ2UocmVzcG9uc2UpfWAsIHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xufVxuLyoqXG4gKiBSZXR1cm5zIGFsbCB0ZXh0IGZvdW5kIGluIGFsbCBwYXJ0cyBvZiBmaXJzdCBjYW5kaWRhdGUuXG4gKi9cbmZ1bmN0aW9uIGdldFRleHQocmVzcG9uc2UpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgY29uc3QgdGV4dFN0cmluZ3MgPSBbXTtcbiAgICBpZiAoKF9iID0gKF9hID0gcmVzcG9uc2UuY2FuZGlkYXRlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzBdLmNvbnRlbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5wYXJ0cykge1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgKF9kID0gKF9jID0gcmVzcG9uc2UuY2FuZGlkYXRlcykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jWzBdLmNvbnRlbnQpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5wYXJ0cykge1xuICAgICAgICAgICAgaWYgKHBhcnQudGV4dCkge1xuICAgICAgICAgICAgICAgIHRleHRTdHJpbmdzLnB1c2gocGFydC50ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJ0LmV4ZWN1dGFibGVDb2RlKSB7XG4gICAgICAgICAgICAgICAgdGV4dFN0cmluZ3MucHVzaChcIlxcbmBgYFwiICtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5leGVjdXRhYmxlQ29kZS5sYW5ndWFnZSArXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICBwYXJ0LmV4ZWN1dGFibGVDb2RlLmNvZGUgK1xuICAgICAgICAgICAgICAgICAgICBcIlxcbmBgYFxcblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJ0LmNvZGVFeGVjdXRpb25SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0ZXh0U3RyaW5ncy5wdXNoKFwiXFxuYGBgXFxuXCIgKyBwYXJ0LmNvZGVFeGVjdXRpb25SZXN1bHQub3V0cHV0ICsgXCJcXG5gYGBcXG5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRleHRTdHJpbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRleHRTdHJpbmdzLmpvaW4oXCJcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG59XG4vKipcbiAqIFJldHVybnMgZnVuY3Rpb25DYWxsIG9mIGZpcnN0IGNhbmRpZGF0ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0RnVuY3Rpb25DYWxscyhyZXNwb25zZSkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICBjb25zdCBmdW5jdGlvbkNhbGxzID0gW107XG4gICAgaWYgKChfYiA9IChfYSA9IHJlc3BvbnNlLmNhbmRpZGF0ZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXS5jb250ZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucGFydHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIChfZCA9IChfYyA9IHJlc3BvbnNlLmNhbmRpZGF0ZXMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY1swXS5jb250ZW50KSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QucGFydHMpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0LmZ1bmN0aW9uQ2FsbCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uQ2FsbHMucHVzaChwYXJ0LmZ1bmN0aW9uQ2FsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZ1bmN0aW9uQ2FsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb25DYWxscztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufVxuY29uc3QgYmFkRmluaXNoUmVhc29ucyA9IFtcbiAgICBGaW5pc2hSZWFzb24uUkVDSVRBVElPTixcbiAgICBGaW5pc2hSZWFzb24uU0FGRVRZLFxuICAgIEZpbmlzaFJlYXNvbi5MQU5HVUFHRSxcbl07XG5mdW5jdGlvbiBoYWRCYWRGaW5pc2hSZWFzb24oY2FuZGlkYXRlKSB7XG4gICAgcmV0dXJuICghIWNhbmRpZGF0ZS5maW5pc2hSZWFzb24gJiZcbiAgICAgICAgYmFkRmluaXNoUmVhc29ucy5pbmNsdWRlcyhjYW5kaWRhdGUuZmluaXNoUmVhc29uKSk7XG59XG5mdW5jdGlvbiBmb3JtYXRCbG9ja0Vycm9yTWVzc2FnZShyZXNwb25zZSkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGxldCBtZXNzYWdlID0gXCJcIjtcbiAgICBpZiAoKCFyZXNwb25zZS5jYW5kaWRhdGVzIHx8IHJlc3BvbnNlLmNhbmRpZGF0ZXMubGVuZ3RoID09PSAwKSAmJlxuICAgICAgICByZXNwb25zZS5wcm9tcHRGZWVkYmFjaykge1xuICAgICAgICBtZXNzYWdlICs9IFwiUmVzcG9uc2Ugd2FzIGJsb2NrZWRcIjtcbiAgICAgICAgaWYgKChfYSA9IHJlc3BvbnNlLnByb21wdEZlZWRiYWNrKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYmxvY2tSZWFzb24pIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gYCBkdWUgdG8gJHtyZXNwb25zZS5wcm9tcHRGZWVkYmFjay5ibG9ja1JlYXNvbn1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoX2IgPSByZXNwb25zZS5wcm9tcHRGZWVkYmFjaykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmJsb2NrUmVhc29uTWVzc2FnZSkge1xuICAgICAgICAgICAgbWVzc2FnZSArPSBgOiAke3Jlc3BvbnNlLnByb21wdEZlZWRiYWNrLmJsb2NrUmVhc29uTWVzc2FnZX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKChfYyA9IHJlc3BvbnNlLmNhbmRpZGF0ZXMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY1swXSkge1xuICAgICAgICBjb25zdCBmaXJzdENhbmRpZGF0ZSA9IHJlc3BvbnNlLmNhbmRpZGF0ZXNbMF07XG4gICAgICAgIGlmIChoYWRCYWRGaW5pc2hSZWFzb24oZmlyc3RDYW5kaWRhdGUpKSB7XG4gICAgICAgICAgICBtZXNzYWdlICs9IGBDYW5kaWRhdGUgd2FzIGJsb2NrZWQgZHVlIHRvICR7Zmlyc3RDYW5kaWRhdGUuZmluaXNoUmVhc29ufWA7XG4gICAgICAgICAgICBpZiAoZmlyc3RDYW5kaWRhdGUuZmluaXNoTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gYDogJHtmaXJzdENhbmRpZGF0ZS5maW5pc2hNZXNzYWdlfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wgKi9cclxuXHJcblxyXG5mdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG50eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcclxuICAgIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcclxufTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjQgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmNvbnN0IHJlc3BvbnNlTGluZVJFID0gL15kYXRhXFw6ICguKikoPzpcXG5cXG58XFxyXFxyfFxcclxcblxcclxcbikvO1xuLyoqXG4gKiBQcm9jZXNzIGEgcmVzcG9uc2UuYm9keSBzdHJlYW0gZnJvbSB0aGUgYmFja2VuZCBhbmQgcmV0dXJuIGFuXG4gKiBpdGVyYXRvciB0aGF0IHByb3ZpZGVzIG9uZSBjb21wbGV0ZSBHZW5lcmF0ZUNvbnRlbnRSZXNwb25zZSBhdCBhIHRpbWVcbiAqIGFuZCBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgc2luZ2xlIGFnZ3JlZ2F0ZWRcbiAqIEdlbmVyYXRlQ29udGVudFJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSByZXNwb25zZSAtIFJlc3BvbnNlIGZyb20gYSBmZXRjaCBjYWxsXG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NTdHJlYW0ocmVzcG9uc2UpIHtcbiAgICBjb25zdCBpbnB1dFN0cmVhbSA9IHJlc3BvbnNlLmJvZHkucGlwZVRocm91Z2gobmV3IFRleHREZWNvZGVyU3RyZWFtKFwidXRmOFwiLCB7IGZhdGFsOiB0cnVlIH0pKTtcbiAgICBjb25zdCByZXNwb25zZVN0cmVhbSA9IGdldFJlc3BvbnNlU3RyZWFtKGlucHV0U3RyZWFtKTtcbiAgICBjb25zdCBbc3RyZWFtMSwgc3RyZWFtMl0gPSByZXNwb25zZVN0cmVhbS50ZWUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdHJlYW06IGdlbmVyYXRlUmVzcG9uc2VTZXF1ZW5jZShzdHJlYW0xKSxcbiAgICAgICAgcmVzcG9uc2U6IGdldFJlc3BvbnNlUHJvbWlzZShzdHJlYW0yKSxcbiAgICB9O1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0UmVzcG9uc2VQcm9taXNlKHN0cmVhbSkge1xuICAgIGNvbnN0IGFsbFJlc3BvbnNlcyA9IFtdO1xuICAgIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5nZXRSZWFkZXIoKTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCB7IGRvbmUsIHZhbHVlIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFkZEhlbHBlcnMoYWdncmVnYXRlUmVzcG9uc2VzKGFsbFJlc3BvbnNlcykpO1xuICAgICAgICB9XG4gICAgICAgIGFsbFJlc3BvbnNlcy5wdXNoKHZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZW5lcmF0ZVJlc3BvbnNlU2VxdWVuY2Uoc3RyZWFtKSB7XG4gICAgcmV0dXJuIF9fYXN5bmNHZW5lcmF0b3IodGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiogZ2VuZXJhdGVSZXNwb25zZVNlcXVlbmNlXzEoKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5nZXRSZWFkZXIoKTtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IHlpZWxkIF9fYXdhaXQocmVhZGVyLnJlYWQoKSk7XG4gICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeWllbGQgeWllbGQgX19hd2FpdChhZGRIZWxwZXJzKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8qKlxuICogUmVhZHMgYSByYXcgc3RyZWFtIGZyb20gdGhlIGZldGNoIHJlc3BvbnNlIGFuZCBqb2luIGluY29tcGxldGVcbiAqIGNodW5rcywgcmV0dXJuaW5nIGEgbmV3IHN0cmVhbSB0aGF0IHByb3ZpZGVzIGEgc2luZ2xlIGNvbXBsZXRlXG4gKiBHZW5lcmF0ZUNvbnRlbnRSZXNwb25zZSBpbiBlYWNoIGl0ZXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gZ2V0UmVzcG9uc2VTdHJlYW0oaW5wdXRTdHJlYW0pIHtcbiAgICBjb25zdCByZWFkZXIgPSBpbnB1dFN0cmVhbS5nZXRSZWFkZXIoKTtcbiAgICBjb25zdCBzdHJlYW0gPSBuZXcgUmVhZGFibGVTdHJlYW0oe1xuICAgICAgICBzdGFydChjb250cm9sbGVyKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFRleHQgPSBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIHB1bXAoKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHB1bXAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWRlclxuICAgICAgICAgICAgICAgICAgICAucmVhZCgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7IHZhbHVlLCBkb25lIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVycm9yKG5ldyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvcihcIkZhaWxlZCB0byBwYXJzZSBzdHJlYW1cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGV4dCArPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gY3VycmVudFRleHQubWF0Y2gocmVzcG9uc2VMaW5lUkUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyc2VkUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRSZXNwb25zZSA9IEpTT04ucGFyc2UobWF0Y2hbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVycm9yKG5ldyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvcihgRXJyb3IgcGFyc2luZyBKU09OIHJlc3BvbnNlOiBcIiR7bWF0Y2hbMV19XCJgKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKHBhcnNlZFJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUZXh0ID0gY3VycmVudFRleHQuc3Vic3RyaW5nKG1hdGNoWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGN1cnJlbnRUZXh0Lm1hdGNoKHJlc3BvbnNlTGluZVJFKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHVtcCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXJyID0gZTtcbiAgICAgICAgICAgICAgICAgICAgZXJyLnN0YWNrID0gZS5zdGFjaztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVyci5uYW1lID09PSBcIkFib3J0RXJyb3JcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyID0gbmV3IEdvb2dsZUdlbmVyYXRpdmVBSUFib3J0RXJyb3IoXCJSZXF1ZXN0IGFib3J0ZWQgd2hlbiByZWFkaW5nIGZyb20gdGhlIHN0cmVhbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyciA9IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvcihcIkVycm9yIHJlYWRpbmcgZnJvbSB0aGUgc3RyZWFtXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gc3RyZWFtO1xufVxuLyoqXG4gKiBBZ2dyZWdhdGVzIGFuIGFycmF5IG9mIGBHZW5lcmF0ZUNvbnRlbnRSZXNwb25zZWBzIGludG8gYSBzaW5nbGVcbiAqIEdlbmVyYXRlQ29udGVudFJlc3BvbnNlLlxuICovXG5mdW5jdGlvbiBhZ2dyZWdhdGVSZXNwb25zZXMocmVzcG9uc2VzKSB7XG4gICAgY29uc3QgbGFzdFJlc3BvbnNlID0gcmVzcG9uc2VzW3Jlc3BvbnNlcy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBhZ2dyZWdhdGVkUmVzcG9uc2UgPSB7XG4gICAgICAgIHByb21wdEZlZWRiYWNrOiBsYXN0UmVzcG9uc2UgPT09IG51bGwgfHwgbGFzdFJlc3BvbnNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXN0UmVzcG9uc2UucHJvbXB0RmVlZGJhY2ssXG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHJlc3BvbnNlIG9mIHJlc3BvbnNlcykge1xuICAgICAgICBpZiAocmVzcG9uc2UuY2FuZGlkYXRlcykge1xuICAgICAgICAgICAgbGV0IGNhbmRpZGF0ZUluZGV4ID0gMDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIHJlc3BvbnNlLmNhbmRpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFnZ3JlZ2F0ZWRSZXNwb25zZS5jYW5kaWRhdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZWRSZXNwb25zZS5jYW5kaWRhdGVzID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghYWdncmVnYXRlZFJlc3BvbnNlLmNhbmRpZGF0ZXNbY2FuZGlkYXRlSW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZWRSZXNwb25zZS5jYW5kaWRhdGVzW2NhbmRpZGF0ZUluZGV4XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBjYW5kaWRhdGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gS2VlcCBvdmVyd3JpdGluZywgdGhlIGxhc3Qgb25lIHdpbGwgYmUgZmluYWxcbiAgICAgICAgICAgICAgICBhZ2dyZWdhdGVkUmVzcG9uc2UuY2FuZGlkYXRlc1tjYW5kaWRhdGVJbmRleF0uY2l0YXRpb25NZXRhZGF0YSA9XG4gICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZS5jaXRhdGlvbk1ldGFkYXRhO1xuICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZWRSZXNwb25zZS5jYW5kaWRhdGVzW2NhbmRpZGF0ZUluZGV4XS5ncm91bmRpbmdNZXRhZGF0YSA9XG4gICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZS5ncm91bmRpbmdNZXRhZGF0YTtcbiAgICAgICAgICAgICAgICBhZ2dyZWdhdGVkUmVzcG9uc2UuY2FuZGlkYXRlc1tjYW5kaWRhdGVJbmRleF0uZmluaXNoUmVhc29uID1cbiAgICAgICAgICAgICAgICAgICAgY2FuZGlkYXRlLmZpbmlzaFJlYXNvbjtcbiAgICAgICAgICAgICAgICBhZ2dyZWdhdGVkUmVzcG9uc2UuY2FuZGlkYXRlc1tjYW5kaWRhdGVJbmRleF0uZmluaXNoTWVzc2FnZSA9XG4gICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZS5maW5pc2hNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZWRSZXNwb25zZS5jYW5kaWRhdGVzW2NhbmRpZGF0ZUluZGV4XS5zYWZldHlSYXRpbmdzID1cbiAgICAgICAgICAgICAgICAgICAgY2FuZGlkYXRlLnNhZmV0eVJhdGluZ3M7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogQ2FuZGlkYXRlcyBzaG91bGQgYWx3YXlzIGhhdmUgY29udGVudCBhbmQgcGFydHMsIGJ1dCB0aGlzIGhhbmRsZXNcbiAgICAgICAgICAgICAgICAgKiBwb3NzaWJsZSBtYWxmb3JtZWQgcmVzcG9uc2VzLlxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmIChjYW5kaWRhdGUuY29udGVudCAmJiBjYW5kaWRhdGUuY29udGVudC5wYXJ0cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFnZ3JlZ2F0ZWRSZXNwb25zZS5jYW5kaWRhdGVzW2NhbmRpZGF0ZUluZGV4XS5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2dyZWdhdGVkUmVzcG9uc2UuY2FuZGlkYXRlc1tjYW5kaWRhdGVJbmRleF0uY29udGVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBjYW5kaWRhdGUuY29udGVudC5yb2xlIHx8IFwidXNlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UGFydCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgY2FuZGlkYXRlLmNvbnRlbnQucGFydHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0LnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0LnRleHQgPSBwYXJ0LnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFydC5mdW5jdGlvbkNhbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0LmZ1bmN0aW9uQ2FsbCA9IHBhcnQuZnVuY3Rpb25DYWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnQuZXhlY3V0YWJsZUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0LmV4ZWN1dGFibGVDb2RlID0gcGFydC5leGVjdXRhYmxlQ29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0LmNvZGVFeGVjdXRpb25SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0LmNvZGVFeGVjdXRpb25SZXN1bHQgPSBwYXJ0LmNvZGVFeGVjdXRpb25SZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMobmV3UGFydCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGFydC50ZXh0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZWRSZXNwb25zZS5jYW5kaWRhdGVzW2NhbmRpZGF0ZUluZGV4XS5jb250ZW50LnBhcnRzLnB1c2gobmV3UGFydCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYW5kaWRhdGVJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZS51c2FnZU1ldGFkYXRhKSB7XG4gICAgICAgICAgICBhZ2dyZWdhdGVkUmVzcG9uc2UudXNhZ2VNZXRhZGF0YSA9IHJlc3BvbnNlLnVzYWdlTWV0YWRhdGE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFnZ3JlZ2F0ZWRSZXNwb25zZTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjQgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudFN0cmVhbShhcGlLZXksIG1vZGVsLCBwYXJhbXMsIHJlcXVlc3RPcHRpb25zKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBtYWtlTW9kZWxSZXF1ZXN0KG1vZGVsLCBUYXNrLlNUUkVBTV9HRU5FUkFURV9DT05URU5ULCBhcGlLZXksIFxuICAgIC8qIHN0cmVhbSAqLyB0cnVlLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgcmV0dXJuIHByb2Nlc3NTdHJlYW0ocmVzcG9uc2UpO1xufVxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50KGFwaUtleSwgbW9kZWwsIHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG1ha2VNb2RlbFJlcXVlc3QobW9kZWwsIFRhc2suR0VORVJBVEVfQ09OVEVOVCwgYXBpS2V5LCBcbiAgICAvKiBzdHJlYW0gKi8gZmFsc2UsIEpTT04uc3RyaW5naWZ5KHBhcmFtcyksIHJlcXVlc3RPcHRpb25zKTtcbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgZW5oYW5jZWRSZXNwb25zZSA9IGFkZEhlbHBlcnMocmVzcG9uc2VKc29uKTtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXNwb25zZTogZW5oYW5jZWRSZXNwb25zZSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyNCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZnVuY3Rpb24gZm9ybWF0U3lzdGVtSW5zdHJ1Y3Rpb24oaW5wdXQpIHtcbiAgICAvLyBudWxsIG9yIHVuZGVmaW5lZFxuICAgIGlmIChpbnB1dCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4geyByb2xlOiBcInN5c3RlbVwiLCBwYXJ0czogW3sgdGV4dDogaW5wdXQgfV0gfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5wdXQudGV4dCkge1xuICAgICAgICByZXR1cm4geyByb2xlOiBcInN5c3RlbVwiLCBwYXJ0czogW2lucHV0XSB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChpbnB1dC5wYXJ0cykge1xuICAgICAgICBpZiAoIWlucHV0LnJvbGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHJvbGU6IFwic3lzdGVtXCIsIHBhcnRzOiBpbnB1dC5wYXJ0cyB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gZm9ybWF0TmV3Q29udGVudChyZXF1ZXN0KSB7XG4gICAgbGV0IG5ld1BhcnRzID0gW107XG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIG5ld1BhcnRzID0gW3sgdGV4dDogcmVxdWVzdCB9XTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3QgcGFydE9yU3RyaW5nIG9mIHJlcXVlc3QpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFydE9yU3RyaW5nID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgbmV3UGFydHMucHVzaCh7IHRleHQ6IHBhcnRPclN0cmluZyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1BhcnRzLnB1c2gocGFydE9yU3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXNzaWduUm9sZVRvUGFydHNBbmRWYWxpZGF0ZVNlbmRNZXNzYWdlUmVxdWVzdChuZXdQYXJ0cyk7XG59XG4vKipcbiAqIFdoZW4gbXVsdGlwbGUgUGFydCB0eXBlcyAoaS5lLiBGdW5jdGlvblJlc3BvbnNlUGFydCBhbmQgVGV4dFBhcnQpIGFyZVxuICogcGFzc2VkIGluIGEgc2luZ2xlIFBhcnQgYXJyYXksIHdlIG1heSBuZWVkIHRvIGFzc2lnbiBkaWZmZXJlbnQgcm9sZXMgdG8gZWFjaFxuICogcGFydC4gQ3VycmVudGx5IG9ubHkgRnVuY3Rpb25SZXNwb25zZVBhcnQgcmVxdWlyZXMgYSByb2xlIG90aGVyIHRoYW4gJ3VzZXInLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBwYXJ0cyBBcnJheSBvZiBwYXJ0cyB0byBwYXNzIHRvIHRoZSBtb2RlbFxuICogQHJldHVybnMgQXJyYXkgb2YgY29udGVudCBpdGVtc1xuICovXG5mdW5jdGlvbiBhc3NpZ25Sb2xlVG9QYXJ0c0FuZFZhbGlkYXRlU2VuZE1lc3NhZ2VSZXF1ZXN0KHBhcnRzKSB7XG4gICAgY29uc3QgdXNlckNvbnRlbnQgPSB7IHJvbGU6IFwidXNlclwiLCBwYXJ0czogW10gfTtcbiAgICBjb25zdCBmdW5jdGlvbkNvbnRlbnQgPSB7IHJvbGU6IFwiZnVuY3Rpb25cIiwgcGFydHM6IFtdIH07XG4gICAgbGV0IGhhc1VzZXJDb250ZW50ID0gZmFsc2U7XG4gICAgbGV0IGhhc0Z1bmN0aW9uQ29udGVudCA9IGZhbHNlO1xuICAgIGZvciAoY29uc3QgcGFydCBvZiBwYXJ0cykge1xuICAgICAgICBpZiAoXCJmdW5jdGlvblJlc3BvbnNlXCIgaW4gcGFydCkge1xuICAgICAgICAgICAgZnVuY3Rpb25Db250ZW50LnBhcnRzLnB1c2gocGFydCk7XG4gICAgICAgICAgICBoYXNGdW5jdGlvbkNvbnRlbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdXNlckNvbnRlbnQucGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgICAgIGhhc1VzZXJDb250ZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzVXNlckNvbnRlbnQgJiYgaGFzRnVuY3Rpb25Db250ZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvcihcIldpdGhpbiBhIHNpbmdsZSBtZXNzYWdlLCBGdW5jdGlvblJlc3BvbnNlIGNhbm5vdCBiZSBtaXhlZCB3aXRoIG90aGVyIHR5cGUgb2YgcGFydCBpbiB0aGUgcmVxdWVzdCBmb3Igc2VuZGluZyBjaGF0IG1lc3NhZ2UuXCIpO1xuICAgIH1cbiAgICBpZiAoIWhhc1VzZXJDb250ZW50ICYmICFoYXNGdW5jdGlvbkNvbnRlbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yKFwiTm8gY29udGVudCBpcyBwcm92aWRlZCBmb3Igc2VuZGluZyBjaGF0IG1lc3NhZ2UuXCIpO1xuICAgIH1cbiAgICBpZiAoaGFzVXNlckNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIHVzZXJDb250ZW50O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb25Db250ZW50O1xufVxuZnVuY3Rpb24gZm9ybWF0Q291bnRUb2tlbnNJbnB1dChwYXJhbXMsIG1vZGVsUGFyYW1zKSB7XG4gICAgdmFyIF9hO1xuICAgIGxldCBmb3JtYXR0ZWRHZW5lcmF0ZUNvbnRlbnRSZXF1ZXN0ID0ge1xuICAgICAgICBtb2RlbDogbW9kZWxQYXJhbXMgPT09IG51bGwgfHwgbW9kZWxQYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGVsUGFyYW1zLm1vZGVsLFxuICAgICAgICBnZW5lcmF0aW9uQ29uZmlnOiBtb2RlbFBhcmFtcyA9PT0gbnVsbCB8fCBtb2RlbFBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kZWxQYXJhbXMuZ2VuZXJhdGlvbkNvbmZpZyxcbiAgICAgICAgc2FmZXR5U2V0dGluZ3M6IG1vZGVsUGFyYW1zID09PSBudWxsIHx8IG1vZGVsUGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RlbFBhcmFtcy5zYWZldHlTZXR0aW5ncyxcbiAgICAgICAgdG9vbHM6IG1vZGVsUGFyYW1zID09PSBudWxsIHx8IG1vZGVsUGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RlbFBhcmFtcy50b29scyxcbiAgICAgICAgdG9vbENvbmZpZzogbW9kZWxQYXJhbXMgPT09IG51bGwgfHwgbW9kZWxQYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGVsUGFyYW1zLnRvb2xDb25maWcsXG4gICAgICAgIHN5c3RlbUluc3RydWN0aW9uOiBtb2RlbFBhcmFtcyA9PT0gbnVsbCB8fCBtb2RlbFBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kZWxQYXJhbXMuc3lzdGVtSW5zdHJ1Y3Rpb24sXG4gICAgICAgIGNhY2hlZENvbnRlbnQ6IChfYSA9IG1vZGVsUGFyYW1zID09PSBudWxsIHx8IG1vZGVsUGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RlbFBhcmFtcy5jYWNoZWRDb250ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubmFtZSxcbiAgICAgICAgY29udGVudHM6IFtdLFxuICAgIH07XG4gICAgY29uc3QgY29udGFpbnNHZW5lcmF0ZUNvbnRlbnRSZXF1ZXN0ID0gcGFyYW1zLmdlbmVyYXRlQ29udGVudFJlcXVlc3QgIT0gbnVsbDtcbiAgICBpZiAocGFyYW1zLmNvbnRlbnRzKSB7XG4gICAgICAgIGlmIChjb250YWluc0dlbmVyYXRlQ29udGVudFJlcXVlc3QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlSZXF1ZXN0SW5wdXRFcnJvcihcIkNvdW50VG9rZW5zUmVxdWVzdCBtdXN0IGhhdmUgb25lIG9mIGNvbnRlbnRzIG9yIGdlbmVyYXRlQ29udGVudFJlcXVlc3QsIG5vdCBib3RoLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtYXR0ZWRHZW5lcmF0ZUNvbnRlbnRSZXF1ZXN0LmNvbnRlbnRzID0gcGFyYW1zLmNvbnRlbnRzO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb250YWluc0dlbmVyYXRlQ29udGVudFJlcXVlc3QpIHtcbiAgICAgICAgZm9ybWF0dGVkR2VuZXJhdGVDb250ZW50UmVxdWVzdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZm9ybWF0dGVkR2VuZXJhdGVDb250ZW50UmVxdWVzdCksIHBhcmFtcy5nZW5lcmF0ZUNvbnRlbnRSZXF1ZXN0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIEFycmF5IG9yIHN0cmluZ1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZm9ybWF0TmV3Q29udGVudChwYXJhbXMpO1xuICAgICAgICBmb3JtYXR0ZWRHZW5lcmF0ZUNvbnRlbnRSZXF1ZXN0LmNvbnRlbnRzID0gW2NvbnRlbnRdO1xuICAgIH1cbiAgICByZXR1cm4geyBnZW5lcmF0ZUNvbnRlbnRSZXF1ZXN0OiBmb3JtYXR0ZWRHZW5lcmF0ZUNvbnRlbnRSZXF1ZXN0IH07XG59XG5mdW5jdGlvbiBmb3JtYXRHZW5lcmF0ZUNvbnRlbnRJbnB1dChwYXJhbXMpIHtcbiAgICBsZXQgZm9ybWF0dGVkUmVxdWVzdDtcbiAgICBpZiAocGFyYW1zLmNvbnRlbnRzKSB7XG4gICAgICAgIGZvcm1hdHRlZFJlcXVlc3QgPSBwYXJhbXM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBBcnJheSBvciBzdHJpbmdcbiAgICAgICAgY29uc3QgY29udGVudCA9IGZvcm1hdE5ld0NvbnRlbnQocGFyYW1zKTtcbiAgICAgICAgZm9ybWF0dGVkUmVxdWVzdCA9IHsgY29udGVudHM6IFtjb250ZW50XSB9O1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnN5c3RlbUluc3RydWN0aW9uKSB7XG4gICAgICAgIGZvcm1hdHRlZFJlcXVlc3Quc3lzdGVtSW5zdHJ1Y3Rpb24gPSBmb3JtYXRTeXN0ZW1JbnN0cnVjdGlvbihwYXJhbXMuc3lzdGVtSW5zdHJ1Y3Rpb24pO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGVkUmVxdWVzdDtcbn1cbmZ1bmN0aW9uIGZvcm1hdEVtYmVkQ29udGVudElucHV0KHBhcmFtcykge1xuICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkocGFyYW1zKSkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZm9ybWF0TmV3Q29udGVudChwYXJhbXMpO1xuICAgICAgICByZXR1cm4geyBjb250ZW50IH07XG4gICAgfVxuICAgIHJldHVybiBwYXJhbXM7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDI0IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vLyBodHRwczovL2FpLmdvb2dsZS5kZXYvYXBpL3Jlc3QvdjFiZXRhL0NvbnRlbnQjcGFydFxuY29uc3QgVkFMSURfUEFSVF9GSUVMRFMgPSBbXG4gICAgXCJ0ZXh0XCIsXG4gICAgXCJpbmxpbmVEYXRhXCIsXG4gICAgXCJmdW5jdGlvbkNhbGxcIixcbiAgICBcImZ1bmN0aW9uUmVzcG9uc2VcIixcbiAgICBcImV4ZWN1dGFibGVDb2RlXCIsXG4gICAgXCJjb2RlRXhlY3V0aW9uUmVzdWx0XCIsXG5dO1xuY29uc3QgVkFMSURfUEFSVFNfUEVSX1JPTEUgPSB7XG4gICAgdXNlcjogW1widGV4dFwiLCBcImlubGluZURhdGFcIl0sXG4gICAgZnVuY3Rpb246IFtcImZ1bmN0aW9uUmVzcG9uc2VcIl0sXG4gICAgbW9kZWw6IFtcInRleHRcIiwgXCJmdW5jdGlvbkNhbGxcIiwgXCJleGVjdXRhYmxlQ29kZVwiLCBcImNvZGVFeGVjdXRpb25SZXN1bHRcIl0sXG4gICAgLy8gU3lzdGVtIGluc3RydWN0aW9ucyBzaG91bGRuJ3QgYmUgaW4gaGlzdG9yeSBhbnl3YXkuXG4gICAgc3lzdGVtOiBbXCJ0ZXh0XCJdLFxufTtcbmZ1bmN0aW9uIHZhbGlkYXRlQ2hhdEhpc3RvcnkoaGlzdG9yeSkge1xuICAgIGxldCBwcmV2Q29udGVudCA9IGZhbHNlO1xuICAgIGZvciAoY29uc3QgY3VyckNvbnRlbnQgb2YgaGlzdG9yeSkge1xuICAgICAgICBjb25zdCB7IHJvbGUsIHBhcnRzIH0gPSBjdXJyQ29udGVudDtcbiAgICAgICAgaWYgKCFwcmV2Q29udGVudCAmJiByb2xlICE9PSBcInVzZXJcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yKGBGaXJzdCBjb250ZW50IHNob3VsZCBiZSB3aXRoIHJvbGUgJ3VzZXInLCBnb3QgJHtyb2xlfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghUE9TU0lCTEVfUk9MRVMuaW5jbHVkZXMocm9sZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvcihgRWFjaCBpdGVtIHNob3VsZCBpbmNsdWRlIHJvbGUgZmllbGQuIEdvdCAke3JvbGV9IGJ1dCB2YWxpZCByb2xlcyBhcmU6ICR7SlNPTi5zdHJpbmdpZnkoUE9TU0lCTEVfUk9MRVMpfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShwYXJ0cykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvcihcIkNvbnRlbnQgc2hvdWxkIGhhdmUgJ3BhcnRzJyBwcm9wZXJ0eSB3aXRoIGFuIGFycmF5IG9mIFBhcnRzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvcihcIkVhY2ggQ29udGVudCBzaG91bGQgaGF2ZSBhdCBsZWFzdCBvbmUgcGFydFwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb3VudEZpZWxkcyA9IHtcbiAgICAgICAgICAgIHRleHQ6IDAsXG4gICAgICAgICAgICBpbmxpbmVEYXRhOiAwLFxuICAgICAgICAgICAgZnVuY3Rpb25DYWxsOiAwLFxuICAgICAgICAgICAgZnVuY3Rpb25SZXNwb25zZTogMCxcbiAgICAgICAgICAgIGZpbGVEYXRhOiAwLFxuICAgICAgICAgICAgZXhlY3V0YWJsZUNvZGU6IDAsXG4gICAgICAgICAgICBjb2RlRXhlY3V0aW9uUmVzdWx0OiAwLFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIFZBTElEX1BBUlRfRklFTERTKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSBpbiBwYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50RmllbGRzW2tleV0gKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsaWRQYXJ0cyA9IFZBTElEX1BBUlRTX1BFUl9ST0xFW3JvbGVdO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBWQUxJRF9QQVJUX0ZJRUxEUykge1xuICAgICAgICAgICAgaWYgKCF2YWxpZFBhcnRzLmluY2x1ZGVzKGtleSkgJiYgY291bnRGaWVsZHNba2V5XSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJRXJyb3IoYENvbnRlbnQgd2l0aCByb2xlICcke3JvbGV9JyBjYW4ndCBjb250YWluICcke2tleX0nIHBhcnRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwcmV2Q29udGVudCA9IHRydWU7XG4gICAgfVxufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHJlc3BvbnNlIGlzIHZhbGlkIChjb3VsZCBiZSBhcHBlbmRlZCB0byB0aGUgaGlzdG9yeSksIGZsYXNlIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gaXNWYWxpZFJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChyZXNwb25zZS5jYW5kaWRhdGVzID09PSB1bmRlZmluZWQgfHwgcmVzcG9uc2UuY2FuZGlkYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBjb250ZW50ID0gKF9hID0gcmVzcG9uc2UuY2FuZGlkYXRlc1swXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbnRlbnQ7XG4gICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChjb250ZW50LnBhcnRzID09PSB1bmRlZmluZWQgfHwgY29udGVudC5wYXJ0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgY29udGVudC5wYXJ0cykge1xuICAgICAgICBpZiAocGFydCA9PT0gdW5kZWZpbmVkIHx8IE9iamVjdC5rZXlzKHBhcnQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0LnRleHQgIT09IHVuZGVmaW5lZCAmJiBwYXJ0LnRleHQgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjQgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogRG8gbm90IGxvZyBhIG1lc3NhZ2UgZm9yIHRoaXMgZXJyb3IuXG4gKi9cbmNvbnN0IFNJTEVOVF9FUlJPUiA9IFwiU0lMRU5UX0VSUk9SXCI7XG4vKipcbiAqIENoYXRTZXNzaW9uIGNsYXNzIHRoYXQgZW5hYmxlcyBzZW5kaW5nIGNoYXQgbWVzc2FnZXMgYW5kIHN0b3Jlc1xuICogaGlzdG9yeSBvZiBzZW50IGFuZCByZWNlaXZlZCBtZXNzYWdlcyBzbyBmYXIuXG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBDaGF0U2Vzc2lvbiB7XG4gICAgY29uc3RydWN0b3IoYXBpS2V5LCBtb2RlbCwgcGFyYW1zLCBfcmVxdWVzdE9wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgICAgICB0aGlzLl9yZXF1ZXN0T3B0aW9ucyA9IF9yZXF1ZXN0T3B0aW9ucztcbiAgICAgICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuICAgICAgICB0aGlzLl9zZW5kUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB0aGlzLl9hcGlLZXkgPSBhcGlLZXk7XG4gICAgICAgIGlmIChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuaGlzdG9yeSkge1xuICAgICAgICAgICAgdmFsaWRhdGVDaGF0SGlzdG9yeShwYXJhbXMuaGlzdG9yeSk7XG4gICAgICAgICAgICB0aGlzLl9oaXN0b3J5ID0gcGFyYW1zLmhpc3Rvcnk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY2hhdCBoaXN0b3J5IHNvIGZhci4gQmxvY2tlZCBwcm9tcHRzIGFyZSBub3QgYWRkZWQgdG8gaGlzdG9yeS5cbiAgICAgKiBCbG9ja2VkIGNhbmRpZGF0ZXMgYXJlIG5vdCBhZGRlZCB0byBoaXN0b3J5LCBub3IgYXJlIHRoZSBwcm9tcHRzIHRoYXRcbiAgICAgKiBnZW5lcmF0ZWQgdGhlbS5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRIaXN0b3J5KCkge1xuICAgICAgICBhd2FpdCB0aGlzLl9zZW5kUHJvbWlzZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpc3Rvcnk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgY2hhdCBtZXNzYWdlIGFuZCByZWNlaXZlcyBhIG5vbi1zdHJlYW1pbmdcbiAgICAgKiB7QGxpbmsgR2VuZXJhdGVDb250ZW50UmVzdWx0fS5cbiAgICAgKlxuICAgICAqIEZpZWxkcyBzZXQgaW4gdGhlIG9wdGlvbmFsIHtAbGluayBTaW5nbGVSZXF1ZXN0T3B0aW9uc30gcGFyYW1ldGVyIHdpbGxcbiAgICAgKiB0YWtlIHByZWNlZGVuY2Ugb3ZlciB0aGUge0BsaW5rIFJlcXVlc3RPcHRpb25zfSB2YWx1ZXMgcHJvdmlkZWQgdG9cbiAgICAgKiB7QGxpbmsgR29vZ2xlR2VuZXJhdGl2ZUFJLmdldEdlbmVyYXRpdmVNb2RlbCB9LlxuICAgICAqL1xuICAgIGFzeW5jIHNlbmRNZXNzYWdlKHJlcXVlc3QsIHJlcXVlc3RPcHRpb25zID0ge30pIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2Y7XG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRQcm9taXNlO1xuICAgICAgICBjb25zdCBuZXdDb250ZW50ID0gZm9ybWF0TmV3Q29udGVudChyZXF1ZXN0KTtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVDb250ZW50UmVxdWVzdCA9IHtcbiAgICAgICAgICAgIHNhZmV0eVNldHRpbmdzOiAoX2EgPSB0aGlzLnBhcmFtcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNhZmV0eVNldHRpbmdzLFxuICAgICAgICAgICAgZ2VuZXJhdGlvbkNvbmZpZzogKF9iID0gdGhpcy5wYXJhbXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZW5lcmF0aW9uQ29uZmlnLFxuICAgICAgICAgICAgdG9vbHM6IChfYyA9IHRoaXMucGFyYW1zKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9vbHMsXG4gICAgICAgICAgICB0b29sQ29uZmlnOiAoX2QgPSB0aGlzLnBhcmFtcykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnRvb2xDb25maWcsXG4gICAgICAgICAgICBzeXN0ZW1JbnN0cnVjdGlvbjogKF9lID0gdGhpcy5wYXJhbXMpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5zeXN0ZW1JbnN0cnVjdGlvbixcbiAgICAgICAgICAgIGNhY2hlZENvbnRlbnQ6IChfZiA9IHRoaXMucGFyYW1zKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuY2FjaGVkQ29udGVudCxcbiAgICAgICAgICAgIGNvbnRlbnRzOiBbLi4udGhpcy5faGlzdG9yeSwgbmV3Q29udGVudF0sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNoYXRTZXNzaW9uUmVxdWVzdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3JlcXVlc3RPcHRpb25zKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICBsZXQgZmluYWxSZXN1bHQ7XG4gICAgICAgIC8vIEFkZCBvbnRvIHRoZSBjaGFpbi5cbiAgICAgICAgdGhpcy5fc2VuZFByb21pc2UgPSB0aGlzLl9zZW5kUHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gZ2VuZXJhdGVDb250ZW50KHRoaXMuX2FwaUtleSwgdGhpcy5tb2RlbCwgZ2VuZXJhdGVDb250ZW50UmVxdWVzdCwgY2hhdFNlc3Npb25SZXF1ZXN0T3B0aW9ucykpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZFJlc3BvbnNlKHJlc3VsdC5yZXNwb25zZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oaXN0b3J5LnB1c2gobmV3Q29udGVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VDb250ZW50ID0gT2JqZWN0LmFzc2lnbih7IHBhcnRzOiBbXSwgXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc3BvbnNlIHNlZW1zIHRvIGNvbWUgYmFjayB3aXRob3V0IGEgcm9sZSBzZXQuXG4gICAgICAgICAgICAgICAgICAgIHJvbGU6IFwibW9kZWxcIiB9LCAoX2EgPSByZXN1bHQucmVzcG9uc2UuY2FuZGlkYXRlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzBdLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hpc3RvcnkucHVzaChyZXNwb25zZUNvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2tFcnJvck1lc3NhZ2UgPSBmb3JtYXRCbG9ja0Vycm9yTWVzc2FnZShyZXN1bHQucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGlmIChibG9ja0Vycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYHNlbmRNZXNzYWdlKCkgd2FzIHVuc3VjY2Vzc2Z1bC4gJHtibG9ja0Vycm9yTWVzc2FnZX0uIEluc3BlY3QgcmVzcG9uc2Ugb2JqZWN0IGZvciBkZXRhaWxzLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsUmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAvLyBSZXNldHMgX3NlbmRQcm9taXNlIHRvIGF2b2lkIHN1YnNlcXVlbnQgY2FsbHMgZmFpbGluZyBhbmQgdGhyb3cgZXJyb3IuXG4gICAgICAgICAgICB0aGlzLl9zZW5kUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRQcm9taXNlO1xuICAgICAgICByZXR1cm4gZmluYWxSZXN1bHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgY2hhdCBtZXNzYWdlIGFuZCByZWNlaXZlcyB0aGUgcmVzcG9uc2UgYXMgYVxuICAgICAqIHtAbGluayBHZW5lcmF0ZUNvbnRlbnRTdHJlYW1SZXN1bHR9IGNvbnRhaW5pbmcgYW4gaXRlcmFibGUgc3RyZWFtXG4gICAgICogYW5kIGEgcmVzcG9uc2UgcHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEZpZWxkcyBzZXQgaW4gdGhlIG9wdGlvbmFsIHtAbGluayBTaW5nbGVSZXF1ZXN0T3B0aW9uc30gcGFyYW1ldGVyIHdpbGxcbiAgICAgKiB0YWtlIHByZWNlZGVuY2Ugb3ZlciB0aGUge0BsaW5rIFJlcXVlc3RPcHRpb25zfSB2YWx1ZXMgcHJvdmlkZWQgdG9cbiAgICAgKiB7QGxpbmsgR29vZ2xlR2VuZXJhdGl2ZUFJLmdldEdlbmVyYXRpdmVNb2RlbCB9LlxuICAgICAqL1xuICAgIGFzeW5jIHNlbmRNZXNzYWdlU3RyZWFtKHJlcXVlc3QsIHJlcXVlc3RPcHRpb25zID0ge30pIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2Y7XG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRQcm9taXNlO1xuICAgICAgICBjb25zdCBuZXdDb250ZW50ID0gZm9ybWF0TmV3Q29udGVudChyZXF1ZXN0KTtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVDb250ZW50UmVxdWVzdCA9IHtcbiAgICAgICAgICAgIHNhZmV0eVNldHRpbmdzOiAoX2EgPSB0aGlzLnBhcmFtcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNhZmV0eVNldHRpbmdzLFxuICAgICAgICAgICAgZ2VuZXJhdGlvbkNvbmZpZzogKF9iID0gdGhpcy5wYXJhbXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZW5lcmF0aW9uQ29uZmlnLFxuICAgICAgICAgICAgdG9vbHM6IChfYyA9IHRoaXMucGFyYW1zKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9vbHMsXG4gICAgICAgICAgICB0b29sQ29uZmlnOiAoX2QgPSB0aGlzLnBhcmFtcykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnRvb2xDb25maWcsXG4gICAgICAgICAgICBzeXN0ZW1JbnN0cnVjdGlvbjogKF9lID0gdGhpcy5wYXJhbXMpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5zeXN0ZW1JbnN0cnVjdGlvbixcbiAgICAgICAgICAgIGNhY2hlZENvbnRlbnQ6IChfZiA9IHRoaXMucGFyYW1zKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuY2FjaGVkQ29udGVudCxcbiAgICAgICAgICAgIGNvbnRlbnRzOiBbLi4udGhpcy5faGlzdG9yeSwgbmV3Q29udGVudF0sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNoYXRTZXNzaW9uUmVxdWVzdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3JlcXVlc3RPcHRpb25zKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICBjb25zdCBzdHJlYW1Qcm9taXNlID0gZ2VuZXJhdGVDb250ZW50U3RyZWFtKHRoaXMuX2FwaUtleSwgdGhpcy5tb2RlbCwgZ2VuZXJhdGVDb250ZW50UmVxdWVzdCwgY2hhdFNlc3Npb25SZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIC8vIEFkZCBvbnRvIHRoZSBjaGFpbi5cbiAgICAgICAgdGhpcy5fc2VuZFByb21pc2UgPSB0aGlzLl9zZW5kUHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gc3RyZWFtUHJvbWlzZSlcbiAgICAgICAgICAgIC8vIFRoaXMgbXVzdCBiZSBoYW5kbGVkIHRvIGF2b2lkIHVuaGFuZGxlZCByZWplY3Rpb24sIGJ1dCBqdW1wXG4gICAgICAgICAgICAvLyB0byB0aGUgZmluYWwgY2F0Y2ggYmxvY2sgd2l0aCBhIGxhYmVsIHRvIG5vdCBsb2cgdGhpcyBlcnJvci5cbiAgICAgICAgICAgIC5jYXRjaCgoX2lnbm9yZWQpID0+IHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihTSUxFTlRfRVJST1IpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHN0cmVhbVJlc3VsdCkgPT4gc3RyZWFtUmVzdWx0LnJlc3BvbnNlKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZFJlc3BvbnNlKHJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hpc3RvcnkucHVzaChuZXdDb250ZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZUNvbnRlbnQgPSBPYmplY3QuYXNzaWduKHt9LCByZXNwb25zZS5jYW5kaWRhdGVzWzBdLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIC8vIFJlc3BvbnNlIHNlZW1zIHRvIGNvbWUgYmFjayB3aXRob3V0IGEgcm9sZSBzZXQuXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZUNvbnRlbnQucm9sZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUNvbnRlbnQucm9sZSA9IFwibW9kZWxcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5faGlzdG9yeS5wdXNoKHJlc3BvbnNlQ29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja0Vycm9yTWVzc2FnZSA9IGZvcm1hdEJsb2NrRXJyb3JNZXNzYWdlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBzZW5kTWVzc2FnZVN0cmVhbSgpIHdhcyB1bnN1Y2Nlc3NmdWwuICR7YmxvY2tFcnJvck1lc3NhZ2V9LiBJbnNwZWN0IHJlc3BvbnNlIG9iamVjdCBmb3IgZGV0YWlscy5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIC8vIEVycm9ycyBpbiBzdHJlYW1Qcm9taXNlIGFyZSBhbHJlYWR5IGNhdGNoYWJsZSBieSB0aGUgdXNlciBhc1xuICAgICAgICAgICAgLy8gc3RyZWFtUHJvbWlzZSBpcyByZXR1cm5lZC5cbiAgICAgICAgICAgIC8vIEF2b2lkIGR1cGxpY2F0aW5nIHRoZSBlcnJvciBtZXNzYWdlIGluIGxvZ3MuXG4gICAgICAgICAgICBpZiAoZS5tZXNzYWdlICE9PSBTSUxFTlRfRVJST1IpIHtcbiAgICAgICAgICAgICAgICAvLyBVc2VycyBkbyBub3QgaGF2ZSBhY2Nlc3MgdG8gX3NlbmRQcm9taXNlIHRvIGNhdGNoIGVycm9yc1xuICAgICAgICAgICAgICAgIC8vIGRvd25zdHJlYW0gZnJvbSBzdHJlYW1Qcm9taXNlLCBzbyB0aGV5IHNob3VsZCBub3QgdGhyb3cuXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdHJlYW1Qcm9taXNlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjQgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNvdW50VG9rZW5zKGFwaUtleSwgbW9kZWwsIHBhcmFtcywgc2luZ2xlUmVxdWVzdE9wdGlvbnMpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG1ha2VNb2RlbFJlcXVlc3QobW9kZWwsIFRhc2suQ09VTlRfVE9LRU5TLCBhcGlLZXksIGZhbHNlLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpLCBzaW5nbGVSZXF1ZXN0T3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjQgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGVtYmVkQ29udGVudChhcGlLZXksIG1vZGVsLCBwYXJhbXMsIHJlcXVlc3RPcHRpb25zKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBtYWtlTW9kZWxSZXF1ZXN0KG1vZGVsLCBUYXNrLkVNQkVEX0NPTlRFTlQsIGFwaUtleSwgZmFsc2UsIEpTT04uc3RyaW5naWZ5KHBhcmFtcyksIHJlcXVlc3RPcHRpb25zKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuYXN5bmMgZnVuY3Rpb24gYmF0Y2hFbWJlZENvbnRlbnRzKGFwaUtleSwgbW9kZWwsIHBhcmFtcywgcmVxdWVzdE9wdGlvbnMpIHtcbiAgICBjb25zdCByZXF1ZXN0c1dpdGhNb2RlbCA9IHBhcmFtcy5yZXF1ZXN0cy5tYXAoKHJlcXVlc3QpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVxdWVzdCksIHsgbW9kZWwgfSk7XG4gICAgfSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBtYWtlTW9kZWxSZXF1ZXN0KG1vZGVsLCBUYXNrLkJBVENIX0VNQkVEX0NPTlRFTlRTLCBhcGlLZXksIGZhbHNlLCBKU09OLnN0cmluZ2lmeSh7IHJlcXVlc3RzOiByZXF1ZXN0c1dpdGhNb2RlbCB9KSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDI0IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIENsYXNzIGZvciBnZW5lcmF0aXZlIG1vZGVsIEFQSXMuXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIEdlbmVyYXRpdmVNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoYXBpS2V5LCBtb2RlbFBhcmFtcywgX3JlcXVlc3RPcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5hcGlLZXkgPSBhcGlLZXk7XG4gICAgICAgIHRoaXMuX3JlcXVlc3RPcHRpb25zID0gX3JlcXVlc3RPcHRpb25zO1xuICAgICAgICBpZiAobW9kZWxQYXJhbXMubW9kZWwuaW5jbHVkZXMoXCIvXCIpKSB7XG4gICAgICAgICAgICAvLyBNb2RlbHMgbWF5IGJlIG5hbWVkIFwibW9kZWxzL21vZGVsLW5hbWVcIiBvciBcInR1bmVkTW9kZWxzL21vZGVsLW5hbWVcIlxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsUGFyYW1zLm1vZGVsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgcGF0aCBpcyBub3QgaW5jbHVkZWQsIGFzc3VtZSBpdCdzIGEgbm9uLXR1bmVkIG1vZGVsLlxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IGBtb2RlbHMvJHttb2RlbFBhcmFtcy5tb2RlbH1gO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2VuZXJhdGlvbkNvbmZpZyA9IG1vZGVsUGFyYW1zLmdlbmVyYXRpb25Db25maWcgfHwge307XG4gICAgICAgIHRoaXMuc2FmZXR5U2V0dGluZ3MgPSBtb2RlbFBhcmFtcy5zYWZldHlTZXR0aW5ncyB8fCBbXTtcbiAgICAgICAgdGhpcy50b29scyA9IG1vZGVsUGFyYW1zLnRvb2xzO1xuICAgICAgICB0aGlzLnRvb2xDb25maWcgPSBtb2RlbFBhcmFtcy50b29sQ29uZmlnO1xuICAgICAgICB0aGlzLnN5c3RlbUluc3RydWN0aW9uID0gZm9ybWF0U3lzdGVtSW5zdHJ1Y3Rpb24obW9kZWxQYXJhbXMuc3lzdGVtSW5zdHJ1Y3Rpb24pO1xuICAgICAgICB0aGlzLmNhY2hlZENvbnRlbnQgPSBtb2RlbFBhcmFtcy5jYWNoZWRDb250ZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNYWtlcyBhIHNpbmdsZSBub24tc3RyZWFtaW5nIGNhbGwgdG8gdGhlIG1vZGVsXG4gICAgICogYW5kIHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYSBzaW5nbGUge0BsaW5rIEdlbmVyYXRlQ29udGVudFJlc3BvbnNlfS5cbiAgICAgKlxuICAgICAqIEZpZWxkcyBzZXQgaW4gdGhlIG9wdGlvbmFsIHtAbGluayBTaW5nbGVSZXF1ZXN0T3B0aW9uc30gcGFyYW1ldGVyIHdpbGxcbiAgICAgKiB0YWtlIHByZWNlZGVuY2Ugb3ZlciB0aGUge0BsaW5rIFJlcXVlc3RPcHRpb25zfSB2YWx1ZXMgcHJvdmlkZWQgdG9cbiAgICAgKiB7QGxpbmsgR29vZ2xlR2VuZXJhdGl2ZUFJLmdldEdlbmVyYXRpdmVNb2RlbCB9LlxuICAgICAqL1xuICAgIGFzeW5jIGdlbmVyYXRlQ29udGVudChyZXF1ZXN0LCByZXF1ZXN0T3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkUGFyYW1zID0gZm9ybWF0R2VuZXJhdGVDb250ZW50SW5wdXQocmVxdWVzdCk7XG4gICAgICAgIGNvbnN0IGdlbmVyYXRpdmVNb2RlbFJlcXVlc3RPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9yZXF1ZXN0T3B0aW9ucyksIHJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlQ29udGVudCh0aGlzLmFwaUtleSwgdGhpcy5tb2RlbCwgT2JqZWN0LmFzc2lnbih7IGdlbmVyYXRpb25Db25maWc6IHRoaXMuZ2VuZXJhdGlvbkNvbmZpZywgc2FmZXR5U2V0dGluZ3M6IHRoaXMuc2FmZXR5U2V0dGluZ3MsIHRvb2xzOiB0aGlzLnRvb2xzLCB0b29sQ29uZmlnOiB0aGlzLnRvb2xDb25maWcsIHN5c3RlbUluc3RydWN0aW9uOiB0aGlzLnN5c3RlbUluc3RydWN0aW9uLCBjYWNoZWRDb250ZW50OiAoX2EgPSB0aGlzLmNhY2hlZENvbnRlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lIH0sIGZvcm1hdHRlZFBhcmFtcyksIGdlbmVyYXRpdmVNb2RlbFJlcXVlc3RPcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWFrZXMgYSBzaW5nbGUgc3RyZWFtaW5nIGNhbGwgdG8gdGhlIG1vZGVsIGFuZCByZXR1cm5zIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgYW4gaXRlcmFibGUgc3RyZWFtIHRoYXQgaXRlcmF0ZXMgb3ZlciBhbGwgY2h1bmtzIGluIHRoZVxuICAgICAqIHN0cmVhbWluZyByZXNwb25zZSBhcyB3ZWxsIGFzIGEgcHJvbWlzZSB0aGF0IHJldHVybnMgdGhlIGZpbmFsXG4gICAgICogYWdncmVnYXRlZCByZXNwb25zZS5cbiAgICAgKlxuICAgICAqIEZpZWxkcyBzZXQgaW4gdGhlIG9wdGlvbmFsIHtAbGluayBTaW5nbGVSZXF1ZXN0T3B0aW9uc30gcGFyYW1ldGVyIHdpbGxcbiAgICAgKiB0YWtlIHByZWNlZGVuY2Ugb3ZlciB0aGUge0BsaW5rIFJlcXVlc3RPcHRpb25zfSB2YWx1ZXMgcHJvdmlkZWQgdG9cbiAgICAgKiB7QGxpbmsgR29vZ2xlR2VuZXJhdGl2ZUFJLmdldEdlbmVyYXRpdmVNb2RlbCB9LlxuICAgICAqL1xuICAgIGFzeW5jIGdlbmVyYXRlQ29udGVudFN0cmVhbShyZXF1ZXN0LCByZXF1ZXN0T3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkUGFyYW1zID0gZm9ybWF0R2VuZXJhdGVDb250ZW50SW5wdXQocmVxdWVzdCk7XG4gICAgICAgIGNvbnN0IGdlbmVyYXRpdmVNb2RlbFJlcXVlc3RPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9yZXF1ZXN0T3B0aW9ucyksIHJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlQ29udGVudFN0cmVhbSh0aGlzLmFwaUtleSwgdGhpcy5tb2RlbCwgT2JqZWN0LmFzc2lnbih7IGdlbmVyYXRpb25Db25maWc6IHRoaXMuZ2VuZXJhdGlvbkNvbmZpZywgc2FmZXR5U2V0dGluZ3M6IHRoaXMuc2FmZXR5U2V0dGluZ3MsIHRvb2xzOiB0aGlzLnRvb2xzLCB0b29sQ29uZmlnOiB0aGlzLnRvb2xDb25maWcsIHN5c3RlbUluc3RydWN0aW9uOiB0aGlzLnN5c3RlbUluc3RydWN0aW9uLCBjYWNoZWRDb250ZW50OiAoX2EgPSB0aGlzLmNhY2hlZENvbnRlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lIH0sIGZvcm1hdHRlZFBhcmFtcyksIGdlbmVyYXRpdmVNb2RlbFJlcXVlc3RPcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyBhIG5ldyB7QGxpbmsgQ2hhdFNlc3Npb259IGluc3RhbmNlIHdoaWNoIGNhbiBiZSB1c2VkIGZvclxuICAgICAqIG11bHRpLXR1cm4gY2hhdHMuXG4gICAgICovXG4gICAgc3RhcnRDaGF0KHN0YXJ0Q2hhdFBhcmFtcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiBuZXcgQ2hhdFNlc3Npb24odGhpcy5hcGlLZXksIHRoaXMubW9kZWwsIE9iamVjdC5hc3NpZ24oeyBnZW5lcmF0aW9uQ29uZmlnOiB0aGlzLmdlbmVyYXRpb25Db25maWcsIHNhZmV0eVNldHRpbmdzOiB0aGlzLnNhZmV0eVNldHRpbmdzLCB0b29sczogdGhpcy50b29scywgdG9vbENvbmZpZzogdGhpcy50b29sQ29uZmlnLCBzeXN0ZW1JbnN0cnVjdGlvbjogdGhpcy5zeXN0ZW1JbnN0cnVjdGlvbiwgY2FjaGVkQ29udGVudDogKF9hID0gdGhpcy5jYWNoZWRDb250ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubmFtZSB9LCBzdGFydENoYXRQYXJhbXMpLCB0aGlzLl9yZXF1ZXN0T3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvdW50cyB0aGUgdG9rZW5zIGluIHRoZSBwcm92aWRlZCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogRmllbGRzIHNldCBpbiB0aGUgb3B0aW9uYWwge0BsaW5rIFNpbmdsZVJlcXVlc3RPcHRpb25zfSBwYXJhbWV0ZXIgd2lsbFxuICAgICAqIHRha2UgcHJlY2VkZW5jZSBvdmVyIHRoZSB7QGxpbmsgUmVxdWVzdE9wdGlvbnN9IHZhbHVlcyBwcm92aWRlZCB0b1xuICAgICAqIHtAbGluayBHb29nbGVHZW5lcmF0aXZlQUkuZ2V0R2VuZXJhdGl2ZU1vZGVsIH0uXG4gICAgICovXG4gICAgYXN5bmMgY291bnRUb2tlbnMocmVxdWVzdCwgcmVxdWVzdE9wdGlvbnMgPSB7fSkge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWRQYXJhbXMgPSBmb3JtYXRDb3VudFRva2Vuc0lucHV0KHJlcXVlc3QsIHtcbiAgICAgICAgICAgIG1vZGVsOiB0aGlzLm1vZGVsLFxuICAgICAgICAgICAgZ2VuZXJhdGlvbkNvbmZpZzogdGhpcy5nZW5lcmF0aW9uQ29uZmlnLFxuICAgICAgICAgICAgc2FmZXR5U2V0dGluZ3M6IHRoaXMuc2FmZXR5U2V0dGluZ3MsXG4gICAgICAgICAgICB0b29sczogdGhpcy50b29scyxcbiAgICAgICAgICAgIHRvb2xDb25maWc6IHRoaXMudG9vbENvbmZpZyxcbiAgICAgICAgICAgIHN5c3RlbUluc3RydWN0aW9uOiB0aGlzLnN5c3RlbUluc3RydWN0aW9uLFxuICAgICAgICAgICAgY2FjaGVkQ29udGVudDogdGhpcy5jYWNoZWRDb250ZW50LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGl2ZU1vZGVsUmVxdWVzdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3JlcXVlc3RPcHRpb25zKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gY291bnRUb2tlbnModGhpcy5hcGlLZXksIHRoaXMubW9kZWwsIGZvcm1hdHRlZFBhcmFtcywgZ2VuZXJhdGl2ZU1vZGVsUmVxdWVzdE9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWJlZHMgdGhlIHByb3ZpZGVkIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBGaWVsZHMgc2V0IGluIHRoZSBvcHRpb25hbCB7QGxpbmsgU2luZ2xlUmVxdWVzdE9wdGlvbnN9IHBhcmFtZXRlciB3aWxsXG4gICAgICogdGFrZSBwcmVjZWRlbmNlIG92ZXIgdGhlIHtAbGluayBSZXF1ZXN0T3B0aW9uc30gdmFsdWVzIHByb3ZpZGVkIHRvXG4gICAgICoge0BsaW5rIEdvb2dsZUdlbmVyYXRpdmVBSS5nZXRHZW5lcmF0aXZlTW9kZWwgfS5cbiAgICAgKi9cbiAgICBhc3luYyBlbWJlZENvbnRlbnQocmVxdWVzdCwgcmVxdWVzdE9wdGlvbnMgPSB7fSkge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWRQYXJhbXMgPSBmb3JtYXRFbWJlZENvbnRlbnRJbnB1dChyZXF1ZXN0KTtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGl2ZU1vZGVsUmVxdWVzdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3JlcXVlc3RPcHRpb25zKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gZW1iZWRDb250ZW50KHRoaXMuYXBpS2V5LCB0aGlzLm1vZGVsLCBmb3JtYXR0ZWRQYXJhbXMsIGdlbmVyYXRpdmVNb2RlbFJlcXVlc3RPcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1iZWRzIGFuIGFycmF5IG9mIHtAbGluayBFbWJlZENvbnRlbnRSZXF1ZXN0fXMuXG4gICAgICpcbiAgICAgKiBGaWVsZHMgc2V0IGluIHRoZSBvcHRpb25hbCB7QGxpbmsgU2luZ2xlUmVxdWVzdE9wdGlvbnN9IHBhcmFtZXRlciB3aWxsXG4gICAgICogdGFrZSBwcmVjZWRlbmNlIG92ZXIgdGhlIHtAbGluayBSZXF1ZXN0T3B0aW9uc30gdmFsdWVzIHByb3ZpZGVkIHRvXG4gICAgICoge0BsaW5rIEdvb2dsZUdlbmVyYXRpdmVBSS5nZXRHZW5lcmF0aXZlTW9kZWwgfS5cbiAgICAgKi9cbiAgICBhc3luYyBiYXRjaEVtYmVkQ29udGVudHMoYmF0Y2hFbWJlZENvbnRlbnRSZXF1ZXN0LCByZXF1ZXN0T3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IGdlbmVyYXRpdmVNb2RlbFJlcXVlc3RPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9yZXF1ZXN0T3B0aW9ucyksIHJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIGJhdGNoRW1iZWRDb250ZW50cyh0aGlzLmFwaUtleSwgdGhpcy5tb2RlbCwgYmF0Y2hFbWJlZENvbnRlbnRSZXF1ZXN0LCBnZW5lcmF0aXZlTW9kZWxSZXF1ZXN0T3B0aW9ucyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyNCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBUb3AtbGV2ZWwgY2xhc3MgZm9yIHRoaXMgU0RLXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIEdvb2dsZUdlbmVyYXRpdmVBSSB7XG4gICAgY29uc3RydWN0b3IoYXBpS2V5KSB7XG4gICAgICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIGEge0BsaW5rIEdlbmVyYXRpdmVNb2RlbH0gaW5zdGFuY2UgZm9yIHRoZSBwcm92aWRlZCBtb2RlbCBuYW1lLlxuICAgICAqL1xuICAgIGdldEdlbmVyYXRpdmVNb2RlbChtb2RlbFBhcmFtcywgcmVxdWVzdE9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFtb2RlbFBhcmFtcy5tb2RlbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yKGBNdXN0IHByb3ZpZGUgYSBtb2RlbCBuYW1lLiBgICtcbiAgICAgICAgICAgICAgICBgRXhhbXBsZTogZ2VuYWkuZ2V0R2VuZXJhdGl2ZU1vZGVsKHsgbW9kZWw6ICdteS1tb2RlbC1uYW1lJyB9KWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgR2VuZXJhdGl2ZU1vZGVsKHRoaXMuYXBpS2V5LCBtb2RlbFBhcmFtcywgcmVxdWVzdE9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEge0BsaW5rIEdlbmVyYXRpdmVNb2RlbH0gaW5zdGFuY2UgZnJvbSBwcm92aWRlZCBjb250ZW50IGNhY2hlLlxuICAgICAqL1xuICAgIGdldEdlbmVyYXRpdmVNb2RlbEZyb21DYWNoZWRDb250ZW50KGNhY2hlZENvbnRlbnQsIG1vZGVsUGFyYW1zLCByZXF1ZXN0T3B0aW9ucykge1xuICAgICAgICBpZiAoIWNhY2hlZENvbnRlbnQubmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSVJlcXVlc3RJbnB1dEVycm9yKFwiQ2FjaGVkIGNvbnRlbnQgbXVzdCBjb250YWluIGEgYG5hbWVgIGZpZWxkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNhY2hlZENvbnRlbnQubW9kZWwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlSZXF1ZXN0SW5wdXRFcnJvcihcIkNhY2hlZCBjb250ZW50IG11c3QgY29udGFpbiBhIGBtb2RlbGAgZmllbGQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOb3QgY2hlY2tpbmcgdG9vbHMgYW5kIHRvb2xDb25maWcgZm9yIG5vdyBhcyBpdCB3b3VsZCByZXF1aXJlIGEgZGVlcFxuICAgICAgICAgKiBlcXVhbGl0eSBjb21wYXJpc29uIGFuZCBpc24ndCBsaWtlbHkgdG8gYmUgYSBjb21tb24gY2FzZS5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGRpc2FsbG93ZWREdXBsaWNhdGVzID0gW1wibW9kZWxcIiwgXCJzeXN0ZW1JbnN0cnVjdGlvblwiXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgZGlzYWxsb3dlZER1cGxpY2F0ZXMpIHtcbiAgICAgICAgICAgIGlmICgobW9kZWxQYXJhbXMgPT09IG51bGwgfHwgbW9kZWxQYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGVsUGFyYW1zW2tleV0pICYmXG4gICAgICAgICAgICAgICAgY2FjaGVkQ29udGVudFtrZXldICYmXG4gICAgICAgICAgICAgICAgKG1vZGVsUGFyYW1zID09PSBudWxsIHx8IG1vZGVsUGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RlbFBhcmFtc1trZXldKSAhPT0gY2FjaGVkQ29udGVudFtrZXldKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJtb2RlbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGVsUGFyYW1zQ29tcCA9IG1vZGVsUGFyYW1zLm1vZGVsLnN0YXJ0c1dpdGgoXCJtb2RlbHMvXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG1vZGVsUGFyYW1zLm1vZGVsLnJlcGxhY2UoXCJtb2RlbHMvXCIsIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG1vZGVsUGFyYW1zLm1vZGVsO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWNoZWRDb250ZW50Q29tcCA9IGNhY2hlZENvbnRlbnQubW9kZWwuc3RhcnRzV2l0aChcIm1vZGVscy9cIilcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY2FjaGVkQ29udGVudC5tb2RlbC5yZXBsYWNlKFwibW9kZWxzL1wiLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBjYWNoZWRDb250ZW50Lm1vZGVsO1xuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWxQYXJhbXNDb21wID09PSBjYWNoZWRDb250ZW50Q29tcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSVJlcXVlc3RJbnB1dEVycm9yKGBEaWZmZXJlbnQgdmFsdWUgZm9yIFwiJHtrZXl9XCIgc3BlY2lmaWVkIGluIG1vZGVsUGFyYW1zYCArXG4gICAgICAgICAgICAgICAgICAgIGAgKCR7bW9kZWxQYXJhbXNba2V5XX0pIGFuZCBjYWNoZWRDb250ZW50ICgke2NhY2hlZENvbnRlbnRba2V5XX0pYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWxQYXJhbXNGcm9tQ2FjaGUgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG1vZGVsUGFyYW1zKSwgeyBtb2RlbDogY2FjaGVkQ29udGVudC5tb2RlbCwgdG9vbHM6IGNhY2hlZENvbnRlbnQudG9vbHMsIHRvb2xDb25maWc6IGNhY2hlZENvbnRlbnQudG9vbENvbmZpZywgc3lzdGVtSW5zdHJ1Y3Rpb246IGNhY2hlZENvbnRlbnQuc3lzdGVtSW5zdHJ1Y3Rpb24sIGNhY2hlZENvbnRlbnQgfSk7XG4gICAgICAgIHJldHVybiBuZXcgR2VuZXJhdGl2ZU1vZGVsKHRoaXMuYXBpS2V5LCBtb2RlbFBhcmFtc0Zyb21DYWNoZSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQmxvY2tSZWFzb24sIENoYXRTZXNzaW9uLCBEeW5hbWljUmV0cmlldmFsTW9kZSwgRXhlY3V0YWJsZUNvZGVMYW5ndWFnZSwgRmluaXNoUmVhc29uLCBGdW5jdGlvbkNhbGxpbmdNb2RlLCBHZW5lcmF0aXZlTW9kZWwsIEdvb2dsZUdlbmVyYXRpdmVBSSwgR29vZ2xlR2VuZXJhdGl2ZUFJQWJvcnRFcnJvciwgR29vZ2xlR2VuZXJhdGl2ZUFJRXJyb3IsIEdvb2dsZUdlbmVyYXRpdmVBSUZldGNoRXJyb3IsIEdvb2dsZUdlbmVyYXRpdmVBSVJlcXVlc3RJbnB1dEVycm9yLCBHb29nbGVHZW5lcmF0aXZlQUlSZXNwb25zZUVycm9yLCBIYXJtQmxvY2tUaHJlc2hvbGQsIEhhcm1DYXRlZ29yeSwgSGFybVByb2JhYmlsaXR5LCBPdXRjb21lLCBQT1NTSUJMRV9ST0xFUywgU2NoZW1hVHlwZSwgVGFza1R5cGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiQHBsYXNtb2hxL3N0b3JhZ2VcIlxyXG5cclxuY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKClcclxuXHJcbmV4cG9ydCBjb25zdCBBUElfS0VZX1NUT1JBR0VfS0VZID0gXCJnZW1pbmktYXBpLWtleVwiXHJcbmV4cG9ydCBjb25zdCBBVVRPX1BST0dSRVNTX0tFWSA9IFwiYXV0by1wcm9ncmVzcy1jaGVja1wiXHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIHRoZSBzdG9yZWQgR2VtaW5pIEFQSSBrZXkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0QXBpS2V5ID0gYXN5bmMgKCk6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiA9PiB7XHJcbiAgcmV0dXJuIGF3YWl0IHN0b3JhZ2UuZ2V0PHN0cmluZz4oQVBJX0tFWV9TVE9SQUdFX0tFWSlcclxufVxyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIEdlbWluaSBBUEkga2V5IGluIHN0b3JhZ2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0QXBpS2V5ID0gYXN5bmMgKGtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgYXdhaXQgc3RvcmFnZS5zZXQoQVBJX0tFWV9TVE9SQUdFX0tFWSwga2V5KVxyXG59XHJcblxyXG4vKipcclxuICogUmV0cmlldmVzIHRoZSBhdXRvLXByb2dyZXNzIHNldHRpbmcuXHJcbiAqIERlZmF1bHRzIHRvIGZhbHNlIGlmIG5vdCBzZXQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0QXV0b1Byb2dyZXNzID0gYXN5bmMgKCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG4gIGNvbnN0IHZhbCA9IGF3YWl0IHN0b3JhZ2UuZ2V0KEFVVE9fUFJPR1JFU1NfS0VZKVxyXG4gIC8vIERlZmF1bHQgdG8gdHJ1ZSBpZiBub3Qgc2V0XHJcbiAgcmV0dXJuIHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gdHJ1ZSB8fCB2YWwgPT09IFwidHJ1ZVwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbmFibGUgb3IgZGlzYWJsZSBhdXRvLXByb2dyZXNzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldEF1dG9Qcm9ncmVzcyA9IGFzeW5jIChlbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgYXdhaXQgc3RvcmFnZS5zZXQoQVVUT19QUk9HUkVTU19LRVksIGVuYWJsZWQpXHJcbn1cclxuIiwiaW1wb3J0IG0gZnJvbVwicGlmeVwiO3ZhciBsPSgpPT57dHJ5e2xldCBlPShnbG9iYWxUaGlzLm5hdmlnYXRvcj8udXNlckFnZW50KS5tYXRjaCgvKG9wZXJhfGNocm9tZXxzYWZhcml8ZmlyZWZveHxtc2llfHRyaWRlbnQoPz1cXC8pKVxcLz9cXHMqKFxcZCspL2kpfHxbXTtpZihlWzFdPT09XCJDaHJvbWVcIilyZXR1cm4gcGFyc2VJbnQoZVsyXSk8MTAwfHxnbG9iYWxUaGlzLmNocm9tZS5ydW50aW1lPy5nZXRNYW5pZmVzdCgpPy5tYW5pZmVzdF92ZXJzaW9uPT09Mn1jYXRjaHtyZXR1cm4hMX1yZXR1cm4hMX07dmFyIG89Y2xhc3N7I3I7I3Q7Z2V0IHByaW1hcnlDbGllbnQoKXtyZXR1cm4gdGhpcy4jdH0jZTtnZXQgc2Vjb25kYXJ5Q2xpZW50KCl7cmV0dXJuIHRoaXMuI2V9I2E7Z2V0IGFyZWEoKXtyZXR1cm4gdGhpcy4jYX1nZXQgaGFzV2ViQXBpKCl7dHJ5e3JldHVybiB0eXBlb2Ygd2luZG93PFwidVwiJiYhIXdpbmRvdy5sb2NhbFN0b3JhZ2V9Y2F0Y2goZSl7cmV0dXJuIGNvbnNvbGUuZXJyb3IoZSksITF9fSNzPW5ldyBNYXA7I2k7Z2V0IGNvcGllZEtleVNldCgpe3JldHVybiB0aGlzLiNpfWlzQ29waWVkPWU9PnRoaXMuaGFzV2ViQXBpJiYodGhpcy5hbGxDb3BpZWR8fHRoaXMuY29waWVkS2V5U2V0LmhhcyhlKSk7I249ITE7Z2V0IGFsbENvcGllZCgpe3JldHVybiB0aGlzLiNufWdldEV4dFN0b3JhZ2VBcGk9KCk9Pmdsb2JhbFRoaXMuYnJvd3Nlcj8uc3RvcmFnZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnN0b3JhZ2U7Z2V0IGhhc0V4dGVuc2lvbkFwaSgpe3RyeXtyZXR1cm4hIXRoaXMuZ2V0RXh0U3RvcmFnZUFwaSgpfWNhdGNoKGUpe3JldHVybiBjb25zb2xlLmVycm9yKGUpLCExfX1pc1dhdGNoU3VwcG9ydGVkPSgpPT50aGlzLmhhc0V4dGVuc2lvbkFwaTtrZXlOYW1lc3BhY2U9XCJcIjtpc1ZhbGlkS2V5PWU9PmUuc3RhcnRzV2l0aCh0aGlzLmtleU5hbWVzcGFjZSk7Z2V0TmFtZXNwYWNlZEtleT1lPT5gJHt0aGlzLmtleU5hbWVzcGFjZX0ke2V9YDtnZXRVbm5hbWVzcGFjZWRLZXk9ZT0+ZS5zbGljZSh0aGlzLmtleU5hbWVzcGFjZS5sZW5ndGgpO3NlcmRlPXtzZXJpYWxpemVyOkpTT04uc3RyaW5naWZ5LGRlc2VyaWFsaXplcjpKU09OLnBhcnNlfTtjb25zdHJ1Y3Rvcih7YXJlYTplPVwic3luY1wiLGFsbENvcGllZDp0PSExLGNvcGllZEtleUxpc3Q6cz1bXSxzZXJkZTpyPXt9fT17fSl7dGhpcy5zZXRDb3BpZWRLZXlTZXQocyksdGhpcy4jYT1lLHRoaXMuI249dCx0aGlzLnNlcmRlPXsuLi50aGlzLnNlcmRlLC4uLnJ9O3RyeXt0aGlzLmhhc1dlYkFwaSYmKHR8fHMubGVuZ3RoPjApJiYodGhpcy4jZT13aW5kb3cubG9jYWxTdG9yYWdlKX1jYXRjaHt9dHJ5e3RoaXMuaGFzRXh0ZW5zaW9uQXBpJiYodGhpcy4jcj10aGlzLmdldEV4dFN0b3JhZ2VBcGkoKSxsKCk/dGhpcy4jdD1tKHRoaXMuI3JbdGhpcy5hcmVhXSx7ZXhjbHVkZTpbXCJnZXRCeXRlc0luVXNlXCJdLGVycm9yRmlyc3Q6ITF9KTp0aGlzLiN0PXRoaXMuI3JbdGhpcy5hcmVhXSl9Y2F0Y2h7fX1zZXRDb3BpZWRLZXlTZXQoZSl7dGhpcy4jaT1uZXcgU2V0KGUpfXJhd0dldEFsbD0oKT0+dGhpcy4jdD8uZ2V0KCk7Z2V0QWxsPWFzeW5jKCk9PntsZXQgZT1hd2FpdCB0aGlzLnJhd0dldEFsbCgpO3JldHVybiBPYmplY3QuZW50cmllcyhlKS5maWx0ZXIoKFt0XSk9PnRoaXMuaXNWYWxpZEtleSh0KSkucmVkdWNlKCh0LFtzLHJdKT0+KHRbdGhpcy5nZXRVbm5hbWVzcGFjZWRLZXkocyldPXIsdCkse30pfTtjb3B5PWFzeW5jIGU9PntsZXQgdD1lPT09dm9pZCAwO2lmKCF0JiYhdGhpcy5jb3BpZWRLZXlTZXQuaGFzKGUpfHwhdGhpcy5hbGxDb3BpZWR8fCF0aGlzLmhhc0V4dGVuc2lvbkFwaSlyZXR1cm4hMTtsZXQgcz10aGlzLmFsbENvcGllZD9hd2FpdCB0aGlzLnJhd0dldEFsbCgpOmF3YWl0IHRoaXMuI3QuZ2V0KCh0P1suLi50aGlzLmNvcGllZEtleVNldF06W2VdKS5tYXAodGhpcy5nZXROYW1lc3BhY2VkS2V5KSk7aWYoIXMpcmV0dXJuITE7bGV0IHI9ITE7Zm9yKGxldCBhIGluIHMpe2xldCBpPXNbYV0sbj10aGlzLiNlPy5nZXRJdGVtKGEpO3RoaXMuI2U/LnNldEl0ZW0oYSxpKSxyfHw9aSE9PW59cmV0dXJuIHJ9O3Jhd0dldD1hc3luYyBlPT4oYXdhaXQgdGhpcy5yYXdHZXRNYW55KFtlXSkpW2VdO3Jhd0dldE1hbnk9YXN5bmMgZT0+dGhpcy5oYXNFeHRlbnNpb25BcGk/YXdhaXQgdGhpcy4jdC5nZXQoZSk6ZS5maWx0ZXIodGhpcy5pc0NvcGllZCkucmVkdWNlKCh0LHMpPT4odFtzXT10aGlzLiNlPy5nZXRJdGVtKHMpLHQpLHt9KTtyYXdTZXQ9YXN5bmMoZSx0KT0+YXdhaXQgdGhpcy5yYXdTZXRNYW55KHtbZV06dH0pO3Jhd1NldE1hbnk9YXN5bmMgZT0+KHRoaXMuI2UmJk9iamVjdC5lbnRyaWVzKGUpLmZpbHRlcigoW3RdKT0+dGhpcy5pc0NvcGllZCh0KSkuZm9yRWFjaCgoW3Qsc10pPT50aGlzLiNlLnNldEl0ZW0odCxzKSksdGhpcy5oYXNFeHRlbnNpb25BcGkmJmF3YWl0IHRoaXMuI3Quc2V0KGUpLG51bGwpO2NsZWFyPWFzeW5jKGU9ITEpPT57ZSYmdGhpcy4jZT8uY2xlYXIoKSxhd2FpdCB0aGlzLiN0LmNsZWFyKCl9O3Jhd1JlbW92ZT1hc3luYyBlPT57YXdhaXQgdGhpcy5yYXdSZW1vdmVNYW55KFtlXSl9O3Jhd1JlbW92ZU1hbnk9YXN5bmMgZT0+e3RoaXMuI2UmJmUuZmlsdGVyKHRoaXMuaXNDb3BpZWQpLmZvckVhY2godD0+dGhpcy4jZS5yZW1vdmVJdGVtKHQpKSx0aGlzLmhhc0V4dGVuc2lvbkFwaSYmYXdhaXQgdGhpcy4jdC5yZW1vdmUoZSl9O3JlbW92ZUFsbD1hc3luYygpPT57bGV0IGU9YXdhaXQgdGhpcy5nZXRBbGwoKSx0PU9iamVjdC5rZXlzKGUpO2F3YWl0IHRoaXMucmVtb3ZlTWFueSh0KX07d2F0Y2g9ZT0+e2xldCB0PXRoaXMuaXNXYXRjaFN1cHBvcnRlZCgpO3JldHVybiB0JiZ0aGlzLiNvKGUpLHR9OyNvPWU9Pntmb3IobGV0IHQgaW4gZSl7bGV0IHM9dGhpcy5nZXROYW1lc3BhY2VkS2V5KHQpLHI9dGhpcy4jcy5nZXQocyk/LmNhbGxiYWNrU2V0fHxuZXcgU2V0O2lmKHIuYWRkKGVbdF0pLHIuc2l6ZT4xKWNvbnRpbnVlO2xldCBhPShpLG4pPT57aWYobiE9PXRoaXMuYXJlYXx8IWlbc10pcmV0dXJuO2xldCBoPXRoaXMuI3MuZ2V0KHMpO2lmKCFoKXRocm93IG5ldyBFcnJvcihgU3RvcmFnZSBjb21tcyBkb2VzIG5vdCBleGlzdCBmb3IgbnNLZXk6ICR7c31gKTtQcm9taXNlLmFsbChbdGhpcy5wYXJzZVZhbHVlKGlbc10ubmV3VmFsdWUpLHRoaXMucGFyc2VWYWx1ZShpW3NdLm9sZFZhbHVlKV0pLnRoZW4oKFt5LGRdKT0+e2ZvcihsZXQgcCBvZiBoLmNhbGxiYWNrU2V0KXAoe25ld1ZhbHVlOnksb2xkVmFsdWU6ZH0sbil9KX07dGhpcy4jci5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoYSksdGhpcy4jcy5zZXQocyx7Y2FsbGJhY2tTZXQ6cixsaXN0ZW5lcjphfSl9fTt1bndhdGNoPWU9PntsZXQgdD10aGlzLmlzV2F0Y2hTdXBwb3J0ZWQoKTtyZXR1cm4gdCYmdGhpcy4jYyhlKSx0fTsjYyhlKXtmb3IobGV0IHQgaW4gZSl7bGV0IHM9dGhpcy5nZXROYW1lc3BhY2VkS2V5KHQpLHI9ZVt0XSxhPXRoaXMuI3MuZ2V0KHMpO2EmJihhLmNhbGxiYWNrU2V0LmRlbGV0ZShyKSxhLmNhbGxiYWNrU2V0LnNpemU9PT0wJiYodGhpcy4jcy5kZWxldGUocyksdGhpcy4jci5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIoYS5saXN0ZW5lcikpKX19dW53YXRjaEFsbD0oKT0+dGhpcy4jaCgpOyNoKCl7dGhpcy4jcy5mb3JFYWNoKCh7bGlzdGVuZXI6ZX0pPT50aGlzLiNyLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcihlKSksdGhpcy4jcy5jbGVhcigpfWFzeW5jIGdldEl0ZW0oZSl7cmV0dXJuIHRoaXMuZ2V0KGUpfWFzeW5jIGdldEl0ZW1zKGUpe3JldHVybiBhd2FpdCB0aGlzLmdldE1hbnkoZSl9YXN5bmMgc2V0SXRlbShlLHQpe2F3YWl0IHRoaXMuc2V0KGUsdCl9YXN5bmMgc2V0SXRlbXMoZSl7YXdhaXQgYXdhaXQgdGhpcy5zZXRNYW55KGUpfWFzeW5jIHJlbW92ZUl0ZW0oZSl7cmV0dXJuIHRoaXMucmVtb3ZlKGUpfWFzeW5jIHJlbW92ZUl0ZW1zKGUpe3JldHVybiBhd2FpdCB0aGlzLnJlbW92ZU1hbnkoZSl9fSxnPWNsYXNzIGV4dGVuZHMgb3tnZXQ9YXN5bmMgZT0+e2xldCB0PXRoaXMuZ2V0TmFtZXNwYWNlZEtleShlKSxzPWF3YWl0IHRoaXMucmF3R2V0KHQpO3JldHVybiB0aGlzLnBhcnNlVmFsdWUocyl9O2dldE1hbnk9YXN5bmMgZT0+e2xldCB0PWUubWFwKHRoaXMuZ2V0TmFtZXNwYWNlZEtleSkscz1hd2FpdCB0aGlzLnJhd0dldE1hbnkodCkscj1hd2FpdCBQcm9taXNlLmFsbChPYmplY3QudmFsdWVzKHMpLm1hcCh0aGlzLnBhcnNlVmFsdWUpKTtyZXR1cm4gT2JqZWN0LmtleXMocykucmVkdWNlKChhLGksbik9PihhW3RoaXMuZ2V0VW5uYW1lc3BhY2VkS2V5KGkpXT1yW25dLGEpLHt9KX07c2V0PWFzeW5jKGUsdCk9PntsZXQgcz10aGlzLmdldE5hbWVzcGFjZWRLZXkoZSkscj10aGlzLnNlcmRlLnNlcmlhbGl6ZXIodCk7cmV0dXJuIHRoaXMucmF3U2V0KHMscil9O3NldE1hbnk9YXN5bmMgZT0+e2xldCB0PU9iamVjdC5lbnRyaWVzKGUpLnJlZHVjZSgocyxbcixhXSk9PihzW3RoaXMuZ2V0TmFtZXNwYWNlZEtleShyKV09dGhpcy5zZXJkZS5zZXJpYWxpemVyKGEpLHMpLHt9KTtyZXR1cm4gYXdhaXQgdGhpcy5yYXdTZXRNYW55KHQpfTtyZW1vdmU9YXN5bmMgZT0+e2xldCB0PXRoaXMuZ2V0TmFtZXNwYWNlZEtleShlKTtyZXR1cm4gdGhpcy5yYXdSZW1vdmUodCl9O3JlbW92ZU1hbnk9YXN5bmMgZT0+e2xldCB0PWUubWFwKHRoaXMuZ2V0TmFtZXNwYWNlZEtleSk7cmV0dXJuIGF3YWl0IHRoaXMucmF3UmVtb3ZlTWFueSh0KX07c2V0TmFtZXNwYWNlPWU9Pnt0aGlzLmtleU5hbWVzcGFjZT1lfTtwYXJzZVZhbHVlPWFzeW5jIGU9Pnt0cnl7aWYoZSE9PXZvaWQgMClyZXR1cm4gdGhpcy5zZXJkZS5kZXNlcmlhbGl6ZXIoZSl9Y2F0Y2godCl7Y29uc29sZS5lcnJvcih0KX19fTtleHBvcnR7byBhcyBCYXNlU3RvcmFnZSxnIGFzIFN0b3JhZ2V9O1xuIiwiY29uc3QgcHJvY2Vzc0Z1bmN0aW9uID0gKGZ1bmN0aW9uXywgb3B0aW9ucywgcHJveHksIHVud3JhcHBlZCkgPT4gZnVuY3Rpb24gKC4uLmFyZ3VtZW50c18pIHtcblx0Y29uc3QgUCA9IG9wdGlvbnMucHJvbWlzZU1vZHVsZTtcblxuXHRyZXR1cm4gbmV3IFAoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGlmIChvcHRpb25zLm11bHRpQXJncykge1xuXHRcdFx0YXJndW1lbnRzXy5wdXNoKCguLi5yZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKG9wdGlvbnMuZXJyb3JGaXJzdCkge1xuXHRcdFx0XHRcdGlmIChyZXN1bHRbMF0pIHtcblx0XHRcdFx0XHRcdHJlamVjdChyZXN1bHQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQuc2hpZnQoKTtcblx0XHRcdFx0XHRcdHJlc29sdmUocmVzdWx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKG9wdGlvbnMuZXJyb3JGaXJzdCkge1xuXHRcdFx0YXJndW1lbnRzXy5wdXNoKChlcnJvciwgcmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXJndW1lbnRzXy5wdXNoKHJlc29sdmUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzID09PSBwcm94eSA/IHVud3JhcHBlZCA6IHRoaXM7XG5cdFx0UmVmbGVjdC5hcHBseShmdW5jdGlvbl8sIHNlbGYsIGFyZ3VtZW50c18pO1xuXHR9KTtcbn07XG5cbmNvbnN0IGZpbHRlckNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGlmeShpbnB1dCwgb3B0aW9ucykge1xuXHRvcHRpb25zID0ge1xuXHRcdGV4Y2x1ZGU6IFsvLisoPzpTeW5jfFN0cmVhbSkkL10sXG5cdFx0ZXJyb3JGaXJzdDogdHJ1ZSxcblx0XHRwcm9taXNlTW9kdWxlOiBQcm9taXNlLFxuXHRcdC4uLm9wdGlvbnMsXG5cdH07XG5cblx0Y29uc3Qgb2JqZWN0VHlwZSA9IHR5cGVvZiBpbnB1dDtcblx0aWYgKCEoaW5wdXQgIT09IG51bGwgJiYgKG9iamVjdFR5cGUgPT09ICdvYmplY3QnIHx8IG9iamVjdFR5cGUgPT09ICdmdW5jdGlvbicpKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIFxcYGlucHV0XFxgIHRvIGJlIGEgXFxgRnVuY3Rpb25cXGAgb3IgXFxgT2JqZWN0XFxgLCBnb3QgXFxgJHtpbnB1dCA9PT0gbnVsbCA/ICdudWxsJyA6IG9iamVjdFR5cGV9XFxgYCk7XG5cdH1cblxuXHRjb25zdCBmaWx0ZXIgPSAodGFyZ2V0LCBrZXkpID0+IHtcblx0XHRsZXQgY2FjaGVkID0gZmlsdGVyQ2FjaGUuZ2V0KHRhcmdldCk7XG5cblx0XHRpZiAoIWNhY2hlZCkge1xuXHRcdFx0Y2FjaGVkID0ge307XG5cdFx0XHRmaWx0ZXJDYWNoZS5zZXQodGFyZ2V0LCBjYWNoZWQpO1xuXHRcdH1cblxuXHRcdGlmIChrZXkgaW4gY2FjaGVkKSB7XG5cdFx0XHRyZXR1cm4gY2FjaGVkW2tleV07XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuID0+ICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGtleSA9PT0gJ3N5bWJvbCcpID8ga2V5ID09PSBwYXR0ZXJuIDogcGF0dGVybi50ZXN0KGtleSk7XG5cdFx0Y29uc3QgZGVzY3JpcHRvciA9IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcblx0XHRjb25zdCB3cml0YWJsZU9yQ29uZmlndXJhYmxlT3duID0gKGRlc2NyaXB0b3IgPT09IHVuZGVmaW5lZCB8fCBkZXNjcmlwdG9yLndyaXRhYmxlIHx8IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlKTtcblx0XHRjb25zdCBpbmNsdWRlZCA9IG9wdGlvbnMuaW5jbHVkZSA/IG9wdGlvbnMuaW5jbHVkZS5zb21lKGVsZW1lbnQgPT4gbWF0Y2goZWxlbWVudCkpIDogIW9wdGlvbnMuZXhjbHVkZS5zb21lKGVsZW1lbnQgPT4gbWF0Y2goZWxlbWVudCkpO1xuXHRcdGNvbnN0IHNob3VsZEZpbHRlciA9IGluY2x1ZGVkICYmIHdyaXRhYmxlT3JDb25maWd1cmFibGVPd247XG5cdFx0Y2FjaGVkW2tleV0gPSBzaG91bGRGaWx0ZXI7XG5cdFx0cmV0dXJuIHNob3VsZEZpbHRlcjtcblx0fTtcblxuXHRjb25zdCBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cblx0Y29uc3QgcHJveHkgPSBuZXcgUHJveHkoaW5wdXQsIHtcblx0XHRhcHBseSh0YXJnZXQsIHRoaXNBcmcsIGFyZ3MpIHtcblx0XHRcdGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldCh0YXJnZXQpO1xuXG5cdFx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRcdHJldHVybiBSZWZsZWN0LmFwcGx5KGNhY2hlZCwgdGhpc0FyZywgYXJncyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBpZmllZCA9IG9wdGlvbnMuZXhjbHVkZU1haW4gPyB0YXJnZXQgOiBwcm9jZXNzRnVuY3Rpb24odGFyZ2V0LCBvcHRpb25zLCBwcm94eSwgdGFyZ2V0KTtcblx0XHRcdGNhY2hlLnNldCh0YXJnZXQsIHBpZmllZCk7XG5cdFx0XHRyZXR1cm4gUmVmbGVjdC5hcHBseShwaWZpZWQsIHRoaXNBcmcsIGFyZ3MpO1xuXHRcdH0sXG5cblx0XHRnZXQodGFyZ2V0LCBrZXkpIHtcblx0XHRcdGNvbnN0IHByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG5cblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtZXh0ZW5kLW5hdGl2ZS9uby11c2UtZXh0ZW5kLW5hdGl2ZVxuXHRcdFx0aWYgKCFmaWx0ZXIodGFyZ2V0LCBrZXkpIHx8IHByb3BlcnR5ID09PSBGdW5jdGlvbi5wcm90b3R5cGVba2V5XSkge1xuXHRcdFx0XHRyZXR1cm4gcHJvcGVydHk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldChwcm9wZXJ0eSk7XG5cblx0XHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdFx0cmV0dXJuIGNhY2hlZDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjb25zdCBwaWZpZWQgPSBwcm9jZXNzRnVuY3Rpb24ocHJvcGVydHksIG9wdGlvbnMsIHByb3h5LCB0YXJnZXQpO1xuXHRcdFx0XHRjYWNoZS5zZXQocHJvcGVydHksIHBpZmllZCk7XG5cdFx0XHRcdHJldHVybiBwaWZpZWQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBwcm9wZXJ0eTtcblx0XHR9LFxuXHR9KTtcblxuXHRyZXR1cm4gcHJveHk7XG59XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);