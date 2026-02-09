var e,t;"function"==typeof(e=globalThis.define)&&(t=e,e=null),function(t,n,s,i,o){var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof r[i]&&r[i],l=a.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(e,n){if(!l[e]){if(!t[e]){var s="function"==typeof r[i]&&r[i];if(!n&&s)return s(e,!0);if(a)return a(e,!0);if(c&&"string"==typeof e)return c(e);var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}h.resolve=function(n){var s=t[e][1][n];return null!=s?s:n},h.cache={};var u=l[e]=new d.Module(e);t[e][0].call(u.exports,h,u,u.exports,this)}return l[e].exports;function h(e){var t=h.resolve(e);return!1===t?{}:d(t)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=t,d.cache=l,d.parent=a,d.register=function(e,n){t[e]=[function(e,t){t.exports=n},{}]},Object.defineProperty(d,"root",{get:function(){return r[i]}}),r[i]=d;for(var u=0;u<n.length;u++)d(n[u]);if(s){var h=d(s);"object"==typeof exports&&"undefined"!=typeof module?module.exports=h:"function"==typeof e&&e.amd?e(function(){return h}):o&&(this[o]=h)}}({kgW6q:[function(e,t,n){e("../../../background/index")},{"../../../background/index":"lSzt3"}],lSzt3:[function(e,t,n){var s=e("../utils/gemini"),i=e("../utils/storage");async function o(e,t){try{let{userGoal:n}=e,o=await (0,i.getApiKey)();if(!o){t({error:"API Key not found. Please set it in options."});return}let[r]=await chrome.tabs.query({active:!0,currentWindow:!0}),a="";if(r?.id&&r.url){let e=r.url.startsWith("chrome:")||r.url.startsWith("edge:")||r.url.startsWith("about:")||r.url.startsWith("moz-extension:")||r.url.startsWith("view-source:");if(!e)try{let e=await chrome.scripting.executeScript({target:{tabId:r.id},func:()=>document.body.innerText||""});e&&e[0]&&e[0].result&&(a=e[0].result)}catch(e){console.warn("Could not extract page content",e)}}let l=await chrome.tabs.captureVisibleTab(void 0,{format:"jpeg",quality:60}),{previousContext:c}=e,d=await (0,s.generateGuidance)(o,l,n,a,c);t({success:!0,data:d})}catch(e){console.error("Analysis failed:",e),t({error:e.message||"Unknown error occurred"})}}console.log("WebGuide Extension 2 Background Service Started"),chrome.runtime.onMessage.addListener((e,t,n)=>!!e&&"object"==typeof e&&"ANALYZE_PAGE"===e.action&&(o(e,n),!0)),chrome.action.onClicked.addListener(e=>{e.id&&(chrome.sidePanel.setOptions({tabId:e.id,path:"sidepanel.html",enabled:!0}),e.windowId&&chrome.sidePanel.open({windowId:e.windowId}))}),chrome.tabs.onUpdated.addListener((e,t,n)=>{"complete"===t.status&&n.active&&chrome.runtime.sendMessage({action:"PAGE_CHANGED",tabId:e,url:n.url}).catch(()=>{})})},{"../utils/gemini":"5kUik","../utils/storage":"fmp01"}],"5kUik":[function(e,t,n){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(n),s.export(n,"generateGuidance",()=>r);var i=e("@google/generative-ai");let o=`
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
`,r=async(e,t,n,s,r)=>{let a=new i.GoogleGenerativeAI(e),l=a.getGenerativeModel({model:"gemini-3-pro-preview",systemInstruction:o,generationConfig:{responseMimeType:"application/json"}});console.log("Using Gemini Model:","gemini-3-pro-preview");let c={inlineData:{data:t.replace(/^data:image\/\w+;base64,/,""),mimeType:"image/jpeg"}},d=`User Goal: ${n}

### Page Content (Text/HTML Snapshot)
${s.slice(0,2e4)}`;r&&(d+=`

### Previous Conversation & Context
The user is continuing the session. 
1. **If the 'User Goal' is a question**: Answer it based on the screenshot and previous context. You do NOT need to strictly follow the previous plan if the user is asking for clarification.
2. **If the 'User Goal' is a status update**: Update the plan steps.
3. **If the 'User Goal' is a new task**: Create a new plan (but try to relate to context if ambiguous).

Previous Guidance Data:
${JSON.stringify(r,null,2)}`);let u=await l.generateContent([d,c]),h=u.response.text();try{return JSON.parse(h)}catch(e){throw console.error("Failed to parse Gemini response",e),Error("Failed to parse AI response")}}},{"@google/generative-ai":"9XBmo","@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],"9XBmo":[function(e,t,n){var s,i,o,r,a,l,c,d,u,h,p,f,g,m,y,E,C,v,w,O,I,A,_,b,S=e("@parcel/transformer-js/src/esmodule-helpers.js");S.defineInteropFlag(n),S.export(n,"BlockReason",()=>w),S.export(n,"ChatSession",()=>es),S.export(n,"DynamicRetrievalMode",()=>_),S.export(n,"ExecutableCodeLanguage",()=>m),S.export(n,"FinishReason",()=>O),S.export(n,"FunctionCallingMode",()=>A),S.export(n,"GenerativeModel",()=>ea),S.export(n,"GoogleGenerativeAI",()=>el),S.export(n,"GoogleGenerativeAIAbortError",()=>G),S.export(n,"GoogleGenerativeAIError",()=>N),S.export(n,"GoogleGenerativeAIFetchError",()=>x),S.export(n,"GoogleGenerativeAIRequestInputError",()=>M),S.export(n,"GoogleGenerativeAIResponseError",()=>R),S.export(n,"HarmBlockThreshold",()=>C),S.export(n,"HarmCategory",()=>E),S.export(n,"HarmProbability",()=>v),S.export(n,"Outcome",()=>y),S.export(n,"POSSIBLE_ROLES",()=>T),S.export(n,"SchemaType",()=>g),S.export(n,"TaskType",()=>I),(s=g||(g={})).STRING="string",s.NUMBER="number",s.INTEGER="integer",s.BOOLEAN="boolean",s.ARRAY="array",s.OBJECT="object",(i=m||(m={})).LANGUAGE_UNSPECIFIED="language_unspecified",i.PYTHON="python",(o=y||(y={})).OUTCOME_UNSPECIFIED="outcome_unspecified",o.OUTCOME_OK="outcome_ok",o.OUTCOME_FAILED="outcome_failed",o.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded";/**
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
 */let T=["user","model","function","system"];(r=E||(E={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",r.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",r.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",r.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",r.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",r.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY",(a=C||(C={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",a.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",a.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",a.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",a.BLOCK_NONE="BLOCK_NONE",(l=v||(v={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",l.NEGLIGIBLE="NEGLIGIBLE",l.LOW="LOW",l.MEDIUM="MEDIUM",l.HIGH="HIGH",(c=w||(w={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",c.SAFETY="SAFETY",c.OTHER="OTHER",(d=O||(O={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",d.STOP="STOP",d.MAX_TOKENS="MAX_TOKENS",d.SAFETY="SAFETY",d.RECITATION="RECITATION",d.LANGUAGE="LANGUAGE",d.BLOCKLIST="BLOCKLIST",d.PROHIBITED_CONTENT="PROHIBITED_CONTENT",d.SPII="SPII",d.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",d.OTHER="OTHER",(u=I||(I={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",u.RETRIEVAL_QUERY="RETRIEVAL_QUERY",u.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",u.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",u.CLASSIFICATION="CLASSIFICATION",u.CLUSTERING="CLUSTERING",(h=A||(A={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",h.AUTO="AUTO",h.ANY="ANY",h.NONE="NONE",(p=_||(_={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",p.MODE_DYNAMIC="MODE_DYNAMIC";/**
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
 */class N extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class R extends N{constructor(e,t){super(e),this.response=t}}class x extends N{constructor(e,t,n,s){super(e),this.status=t,this.statusText=n,this.errorDetails=s}}class M extends N{}class G extends N{}(f=b||(b={})).GENERATE_CONTENT="generateContent",f.STREAM_GENERATE_CONTENT="streamGenerateContent",f.COUNT_TOKENS="countTokens",f.EMBED_CONTENT="embedContent",f.BATCH_EMBED_CONTENTS="batchEmbedContents";class D{constructor(e,t,n,s,i){this.model=e,this.task=t,this.apiKey=n,this.stream=s,this.requestOptions=i}toString(){var e,t;let n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1beta",s=(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||"https://generativelanguage.googleapis.com",i=`${s}/${n}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}async function P(e){var t;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(e){let t=[];return(null==e?void 0:e.apiClient)&&t.push(e.apiClient),t.push("genai-js/0.24.1"),t.join(" ")}(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let s=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(e){throw new M(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${e.message}`)}for(let[e,t]of s.entries()){if("x-goog-api-key"===e)throw new M(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new M(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function L(e,t,n,s,i,o){let r=new D(e,t,n,s,o);return{url:r.toString(),fetchOptions:Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.signal)!==void 0||(null==e?void 0:e.timeout)>=0){let n=new AbortController;(null==e?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),(null==e?void 0:e.signal)&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}(o)),{method:"POST",headers:await P(r),body:i})}}async function j(e,t,n,s,i,o={},r=fetch){let{url:a,fetchOptions:l}=await L(e,t,n,s,i,o);return k(a,l,r)}async function k(e,t,n=fetch){let s;try{s=await n(e,t)}catch(t){(function(e,t){let n=e;throw"AbortError"===n.name?(n=new G(`Request aborted when fetching ${t.toString()}: ${e.message}`)).stack=e.stack:e instanceof x||e instanceof M||((n=new N(`Error fetching from ${t.toString()}: ${e.message}`)).stack=e.stack),n})(t,e)}return s.ok||await U(s,e),s}async function U(e,t){let n,s="";try{let t=await e.json();s=t.error.message,t.error.details&&(s+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(e){}throw new x(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${s}`,e.status,e.statusText,n)}/**
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
 */function F(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),$(e.candidates[0]))throw new R(`${Y(e)}`,e);return function(e){var t,n,s,i;let o=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(i=null===(s=e.candidates)||void 0===s?void 0:s[0].content)||void 0===i?void 0:i.parts)t.text&&o.push(t.text),t.executableCode&&o.push("\n```"+t.executableCode.language+"\n"+t.executableCode.code+"\n```\n"),t.codeExecutionResult&&o.push("\n```\n"+t.codeExecutionResult.output+"\n```\n");return o.length>0?o.join(""):""}(e)}if(e.promptFeedback)throw new R(`Text not available. ${Y(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),$(e.candidates[0]))throw new R(`${Y(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),K(e)[0]}if(e.promptFeedback)throw new R(`Function call not available. ${Y(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),$(e.candidates[0]))throw new R(`${Y(e)}`,e);return K(e)}if(e.promptFeedback)throw new R(`Function call not available. ${Y(e)}`,e)},e}function K(e){var t,n,s,i;let o=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(i=null===(s=e.candidates)||void 0===s?void 0:s[0].content)||void 0===i?void 0:i.parts)t.functionCall&&o.push(t.functionCall);return o.length>0?o:void 0}let H=[O.RECITATION,O.SAFETY,O.LANGUAGE];function $(e){return!!e.finishReason&&H.includes(e.finishReason)}function Y(e){var t,n,s;let i="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)i+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(i+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(i+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(s=e.candidates)||void 0===s?void 0:s[0]){let t=e.candidates[0];$(t)&&(i+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(i+=`: ${t.finishMessage}`))}return i}function B(e){return this instanceof B?(this.v=e,this):new B(e)}"function"==typeof SuppressedError&&SuppressedError;/**
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
 */let q=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function W(e){let t=[],n=e.getReader();for(;;){let{done:e,value:s}=await n.read();if(e)return F(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e){if(t.candidates){let e=0;for(let s of t.candidates)if(n.candidates||(n.candidates=[]),n.candidates[e]||(n.candidates[e]={index:e}),n.candidates[e].citationMetadata=s.citationMetadata,n.candidates[e].groundingMetadata=s.groundingMetadata,n.candidates[e].finishReason=s.finishReason,n.candidates[e].finishMessage=s.finishMessage,n.candidates[e].safetyRatings=s.safetyRatings,s.content&&s.content.parts){n.candidates[e].content||(n.candidates[e].content={role:s.content.role||"user",parts:[]});let t={};for(let i of s.content.parts)i.text&&(t.text=i.text),i.functionCall&&(t.functionCall=i.functionCall),i.executableCode&&(t.executableCode=i.executableCode),i.codeExecutionResult&&(t.codeExecutionResult=i.codeExecutionResult),0===Object.keys(t).length&&(t.text=""),n.candidates[e].content.parts.push(t)}e++}t.usageMetadata&&(n.usageMetadata=t.usageMetadata)}return n}(t));t.push(s)}}/**
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
 */async function V(e,t,n,s){let i=await j(t,b.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),s);return function(e){let t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=function(e){let t=e.getReader(),n=new ReadableStream({start(e){let n="";return function s(){return t.read().then(({value:t,done:i})=>{let o;if(i){if(n.trim()){e.error(new N("Failed to parse stream"));return}e.close();return}let r=(n+=t).match(q);for(;r;){try{o=JSON.parse(r[1])}catch(t){e.error(new N(`Error parsing JSON response: "${r[1]}"`));return}e.enqueue(o),r=(n=n.substring(r[0].length)).match(q)}return s()}).catch(e=>{let t=e;throw t.stack=e.stack,t="AbortError"===t.name?new G("Request aborted when reading from the stream"):new N("Error reading from the stream")})}()}});return n}(t),[s,i]=n.tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var s,i=n.apply(e,t||[]),o=[];return s={},r("next"),r("throw"),r("return"),s[Symbol.asyncIterator]=function(){return this},s;function r(e){i[e]&&(s[e]=function(t){return new Promise(function(n,s){o.push([e,t,n,s])>1||a(e,t)})})}function a(e,t){try{var n;(n=i[e](t)).value instanceof B?Promise.resolve(n.value.v).then(l,c):d(o[0][2],n)}catch(e){d(o[0][3],e)}}function l(e){a("next",e)}function c(e){a("throw",e)}function d(e,t){e(t),o.shift(),o.length&&a(o[0][0],o[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield B(t.read());if(n)break;yield yield B(F(e))}})}(s),response:W(i)}}(i)}async function J(e,t,n,s){let i=await j(t,b.GENERATE_CONTENT,e,!1,JSON.stringify(n),s),o=await i.json(),r=F(o);return{response:r}}/**
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
 */function z(e){if(null!=e){if("string"==typeof e)return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function X(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(let n of e)"string"==typeof n?t.push({text:n}):t.push(n);return function(e){let t={role:"user",parts:[]},n={role:"function",parts:[]},s=!1,i=!1;for(let o of e)"functionResponse"in o?(n.parts.push(o),i=!0):(t.parts.push(o),s=!0);if(s&&i)throw new N("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!i)throw new N("No content is provided for sending chat message.");return s?t:n}(t)}function Q(e){let t;if(e.contents)t=e;else{let n=X(e);t={contents:[n]}}return e.systemInstruction&&(t.systemInstruction=z(e.systemInstruction)),t}/**
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
 */let Z=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],ee={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function et(e){var t;if(void 0===e.candidates||0===e.candidates.length)return!1;let n=null===(t=e.candidates[0])||void 0===t?void 0:t.content;if(void 0===n||void 0===n.parts||0===n.parts.length)return!1;for(let e of n.parts)if(void 0===e||0===Object.keys(e).length||void 0!==e.text&&""===e.text)return!1;return!0}/**
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
 */let en="SILENT_ERROR";class es{constructor(e,t,n,s={}){this.model=t,this.params=n,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(function(e){let t=!1;for(let n of e){let{role:e,parts:s}=n;if(!t&&"user"!==e)throw new N(`First content should be with role 'user', got ${e}`);if(!T.includes(e))throw new N(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(T)}`);if(!Array.isArray(s))throw new N("Content should have 'parts' property with an array of Parts");if(0===s.length)throw new N("Each Content should have at least one part");let i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let e of s)for(let t of Z)t in e&&(i[t]+=1);let o=ee[e];for(let t of Z)if(!o.includes(t)&&i[t]>0)throw new N(`Content with role '${e}' can't contain '${t}' part`);t=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,s,i,o,r,a;let l;await this._sendPromise;let c=X(e),d={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(i=this.params)||void 0===i?void 0:i.tools,toolConfig:null===(o=this.params)||void 0===o?void 0:o.toolConfig,systemInstruction:null===(r=this.params)||void 0===r?void 0:r.systemInstruction,cachedContent:null===(a=this.params)||void 0===a?void 0:a.cachedContent,contents:[...this._history,c]},u=Object.assign(Object.assign({},this._requestOptions),t);return this._sendPromise=this._sendPromise.then(()=>J(this._apiKey,this.model,d,u)).then(e=>{var t;if(et(e.response)){this._history.push(c);let n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{let t=Y(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}l=e}).catch(e=>{throw this._sendPromise=Promise.resolve(),e}),await this._sendPromise,l}async sendMessageStream(e,t={}){var n,s,i,o,r,a;await this._sendPromise;let l=X(e),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(i=this.params)||void 0===i?void 0:i.tools,toolConfig:null===(o=this.params)||void 0===o?void 0:o.toolConfig,systemInstruction:null===(r=this.params)||void 0===r?void 0:r.systemInstruction,cachedContent:null===(a=this.params)||void 0===a?void 0:a.cachedContent,contents:[...this._history,l]},d=Object.assign(Object.assign({},this._requestOptions),t),u=V(this._apiKey,this.model,c,d);return this._sendPromise=this._sendPromise.then(()=>u).catch(e=>{throw Error(en)}).then(e=>e.response).then(e=>{if(et(e)){this._history.push(l);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=Y(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==en&&console.error(e)}),u}}/**
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
 */async function ei(e,t,n,s){let i=await j(t,b.COUNT_TOKENS,e,!1,JSON.stringify(n),s);return i.json()}/**
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
 */async function eo(e,t,n,s){let i=await j(t,b.EMBED_CONTENT,e,!1,JSON.stringify(n),s);return i.json()}async function er(e,t,n,s){let i=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t})),o=await j(t,b.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:i}),s);return o.json()}/**
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
 */class ea{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=z(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;let s=Q(e),i=Object.assign(Object.assign({},this._requestOptions),t);return J(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),i)}async generateContentStream(e,t={}){var n;let s=Q(e),i=Object.assign(Object.assign({},this._requestOptions),t);return V(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),i)}startChat(e){var t;return new es(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){let n=function(e,t){var n;let s={model:null==t?void 0:t.model,generationConfig:null==t?void 0:t.generationConfig,safetySettings:null==t?void 0:t.safetySettings,tools:null==t?void 0:t.tools,toolConfig:null==t?void 0:t.toolConfig,systemInstruction:null==t?void 0:t.systemInstruction,cachedContent:null===(n=null==t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]},i=null!=e.generateContentRequest;if(e.contents){if(i)throw new M("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(i)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{let t=X(e);s.contents=[t]}return{generateContentRequest:s}}(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),t);return ei(this.apiKey,this.model,n,s)}async embedContent(e,t={}){let n=function(e){if("string"==typeof e||Array.isArray(e)){let t=X(e);return{content:t}}return e}(e),s=Object.assign(Object.assign({},this._requestOptions),t);return eo(this.apiKey,this.model,n,s)}async batchEmbedContents(e,t={}){let n=Object.assign(Object.assign({},this._requestOptions),t);return er(this.apiKey,this.model,e,n)}}/**
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
 */class el{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new N("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new ea(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new M("Cached content must contain a `name` field.");if(!e.model)throw new M("Cached content must contain a `model` field.");for(let n of["model","systemInstruction"])if((null==t?void 0:t[n])&&e[n]&&(null==t?void 0:t[n])!==e[n]){if("model"===n){let n=t.model.startsWith("models/")?t.model.replace("models/",""):t.model,s=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(n===s)continue}throw new M(`Different value for "${n}" specified in modelParams (${t[n]}) and cachedContent (${e[n]})`)}let s=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new ea(this.apiKey,s,n)}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],f6DG4:[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach(function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})}),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}],fmp01:[function(e,t,n){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(n),s.export(n,"API_KEY_STORAGE_KEY",()=>r),s.export(n,"AUTO_PROGRESS_KEY",()=>a),s.export(n,"getApiKey",()=>l),s.export(n,"setApiKey",()=>c),s.export(n,"getAutoProgress",()=>d),s.export(n,"setAutoProgress",()=>u);var i=e("@plasmohq/storage");let o=new i.Storage,r="gemini-api-key",a="auto-progress-check",l=async()=>await o.get(r),c=async e=>{await o.set(r,e)},d=async()=>{let e=await o.get(a);return void 0===e||!0===e||"true"===e},u=async e=>{await o.set(a,e)}},{"@plasmohq/storage":"3wfAg","@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],"3wfAg":[function(e,t,n){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(n),s.export(n,"BaseStorage",()=>a),s.export(n,"Storage",()=>l);var i=e("pify"),o=s.interopDefault(i),r=()=>{try{let e=globalThis.navigator?.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];if("Chrome"===e[1])return 100>parseInt(e[2])||globalThis.chrome.runtime?.getManifest()?.manifest_version===2}catch{}return!1},a=class{#e;#t;get primaryClient(){return this.#t}#n;get secondaryClient(){return this.#n}#s;get area(){return this.#s}get hasWebApi(){try{return"u">typeof window&&!!window.localStorage}catch(e){return console.error(e),!1}}#i=new Map;#o;get copiedKeySet(){return this.#o}isCopied=e=>this.hasWebApi&&(this.allCopied||this.copiedKeySet.has(e));#r=!1;get allCopied(){return this.#r}getExtStorageApi=()=>globalThis.browser?.storage||globalThis.chrome?.storage;get hasExtensionApi(){try{return!!this.getExtStorageApi()}catch(e){return console.error(e),!1}}isWatchSupported=()=>this.hasExtensionApi;keyNamespace="";isValidKey=e=>e.startsWith(this.keyNamespace);getNamespacedKey=e=>`${this.keyNamespace}${e}`;getUnnamespacedKey=e=>e.slice(this.keyNamespace.length);serde={serializer:JSON.stringify,deserializer:JSON.parse};constructor({area:e="sync",allCopied:t=!1,copiedKeyList:n=[],serde:s={}}={}){this.setCopiedKeySet(n),this.#s=e,this.#r=t,this.serde={...this.serde,...s};try{this.hasWebApi&&(t||n.length>0)&&(this.#n=window.localStorage)}catch{}try{this.hasExtensionApi&&(this.#e=this.getExtStorageApi(),r()?this.#t=(0,o.default)(this.#e[this.area],{exclude:["getBytesInUse"],errorFirst:!1}):this.#t=this.#e[this.area])}catch{}}setCopiedKeySet(e){this.#o=new Set(e)}rawGetAll=()=>this.#t?.get();getAll=async()=>Object.entries(await this.rawGetAll()).filter(([e])=>this.isValidKey(e)).reduce((e,[t,n])=>(e[this.getUnnamespacedKey(t)]=n,e),{});copy=async e=>{let t=void 0===e;if(!t&&!this.copiedKeySet.has(e)||!this.allCopied||!this.hasExtensionApi)return!1;let n=this.allCopied?await this.rawGetAll():await this.#t.get((t?[...this.copiedKeySet]:[e]).map(this.getNamespacedKey));if(!n)return!1;let s=!1;for(let e in n){let t=n[e],i=this.#n?.getItem(e);this.#n?.setItem(e,t),s||=t!==i}return s};rawGet=async e=>(await this.rawGetMany([e]))[e];rawGetMany=async e=>this.hasExtensionApi?await this.#t.get(e):e.filter(this.isCopied).reduce((e,t)=>(e[t]=this.#n?.getItem(t),e),{});rawSet=async(e,t)=>await this.rawSetMany({[e]:t});rawSetMany=async e=>(this.#n&&Object.entries(e).filter(([e])=>this.isCopied(e)).forEach(([e,t])=>this.#n.setItem(e,t)),this.hasExtensionApi&&await this.#t.set(e),null);clear=async(e=!1)=>{e&&this.#n?.clear(),await this.#t.clear()};rawRemove=async e=>{await this.rawRemoveMany([e])};rawRemoveMany=async e=>{this.#n&&e.filter(this.isCopied).forEach(e=>this.#n.removeItem(e)),this.hasExtensionApi&&await this.#t.remove(e)};removeAll=async()=>{let e=Object.keys(await this.getAll());await this.removeMany(e)};watch=e=>{let t=this.isWatchSupported();return t&&this.#a(e),t};#a=e=>{for(let t in e){let n=this.getNamespacedKey(t),s=this.#i.get(n)?.callbackSet||new Set;if(s.add(e[t]),s.size>1)continue;let i=(e,t)=>{if(t!==this.area||!e[n])return;let s=this.#i.get(n);if(!s)throw Error(`Storage comms does not exist for nsKey: ${n}`);Promise.all([this.parseValue(e[n].newValue),this.parseValue(e[n].oldValue)]).then(([e,n])=>{for(let i of s.callbackSet)i({newValue:e,oldValue:n},t)})};this.#e.onChanged.addListener(i),this.#i.set(n,{callbackSet:s,listener:i})}};unwatch=e=>{let t=this.isWatchSupported();return t&&this.#l(e),t};#l(e){for(let t in e){let n=this.getNamespacedKey(t),s=e[t],i=this.#i.get(n);i&&(i.callbackSet.delete(s),0===i.callbackSet.size&&(this.#i.delete(n),this.#e.onChanged.removeListener(i.listener)))}}unwatchAll=()=>this.#c();#c(){this.#i.forEach(({listener:e})=>this.#e.onChanged.removeListener(e)),this.#i.clear()}async getItem(e){return this.get(e)}async getItems(e){return await this.getMany(e)}async setItem(e,t){await this.set(e,t)}async setItems(e){await await this.setMany(e)}async removeItem(e){return this.remove(e)}async removeItems(e){return await this.removeMany(e)}},l=class extends a{get=async e=>{let t=this.getNamespacedKey(e),n=await this.rawGet(t);return this.parseValue(n)};getMany=async e=>{let t=e.map(this.getNamespacedKey),n=await this.rawGetMany(t),s=await Promise.all(Object.values(n).map(this.parseValue));return Object.keys(n).reduce((e,t,n)=>(e[this.getUnnamespacedKey(t)]=s[n],e),{})};set=async(e,t)=>{let n=this.getNamespacedKey(e),s=this.serde.serializer(t);return this.rawSet(n,s)};setMany=async e=>{let t=Object.entries(e).reduce((e,[t,n])=>(e[this.getNamespacedKey(t)]=this.serde.serializer(n),e),{});return await this.rawSetMany(t)};remove=async e=>{let t=this.getNamespacedKey(e);return this.rawRemove(t)};removeMany=async e=>{let t=e.map(this.getNamespacedKey);return await this.rawRemoveMany(t)};setNamespace=e=>{this.keyNamespace=e};parseValue=async e=>{try{if(void 0!==e)return this.serde.deserializer(e)}catch(e){console.error(e)}}}},{pify:"dsXuM","@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],dsXuM:[function(e,t,n){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(n),s.export(n,"default",()=>r);let i=(e,t,n,s)=>function(...i){let o=t.promiseModule;return new o((o,r)=>{t.multiArgs?i.push((...e)=>{t.errorFirst?e[0]?r(e):(e.shift(),o(e)):o(e)}):t.errorFirst?i.push((e,t)=>{e?r(e):o(t)}):i.push(o),Reflect.apply(e,this===n?s:this,i)})},o=new WeakMap;function r(e,t){t={exclude:[/.+(?:Sync|Stream)$/],errorFirst:!0,promiseModule:Promise,...t};let n=typeof e;if(!(null!==e&&("object"===n||"function"===n)))throw TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${null===e?"null":n}\``);let s=(e,n)=>{let s=o.get(e);if(s||(s={},o.set(e,s)),n in s)return s[n];let i=e=>"string"==typeof e||"symbol"==typeof n?n===e:e.test(n),r=Reflect.getOwnPropertyDescriptor(e,n),a=void 0===r||r.writable||r.configurable,l=t.include?t.include.some(e=>i(e)):!t.exclude.some(e=>i(e)),c=l&&a;return s[n]=c,c},r=new WeakMap,a=new Proxy(e,{apply(e,n,s){let o=r.get(e);if(o)return Reflect.apply(o,n,s);let l=t.excludeMain?e:i(e,t,a,e);return r.set(e,l),Reflect.apply(l,n,s)},get(e,n){let o=e[n];if(!s(e,n)||o===Function.prototype[n])return o;let l=r.get(o);if(l)return l;if("function"==typeof o){let n=i(o,t,a,e);return r.set(o,n),n}return o}});return a}},{"@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}]},["kgW6q"],"kgW6q","parcelRequire21de"),globalThis.define=t;