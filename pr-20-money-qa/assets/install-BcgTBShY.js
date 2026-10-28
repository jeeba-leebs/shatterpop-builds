import{n as e}from"./tuning-BOHxplfq.js";import{_ as t,a as n,i as r,l as i,n as a,p as o,r as ee,t as te,x as ne}from"./gate-BQaWygan.js";var s=`shatterpop.sandbox.v1`,c=1e9,l=40;function u(e){return{icebreaker:m(e.sandbox.shop.icebreakerPrice),bomb:m(e.sandbox.shop.bombPrice)}}function d(e){return{coins:e.sandbox.coins.starting,removeAds:!1,pendingIcebreakers:0,pendingBombs:0,log:[]}}function re(e,t){let n;try{n=e.getItem(s)}catch{return d(t)}if(n==null)return d(t);try{return pe(JSON.parse(n),t)}catch{return d(t)}}function f(e,t){try{e.setItem(s,JSON.stringify(t))}catch{}}function ie(e,t,n){if(n==null||n<=0||e.coins<n)return null;let r=t===`icebreaker`?`Icebreaker`:`Bomb`;return h(e,e.coins-n,{kind:`shop`,label:r,delta:-n})}function ae(e,t){return t===`icebreaker`?{...e,pendingIcebreakers:e.pendingIcebreakers+1}:{...e,pendingBombs:e.pendingBombs+1}}function oe(e){return{wallet:{...e,pendingIcebreakers:0,pendingBombs:0},icebreakers:e.pendingIcebreakers,bombs:e.pendingBombs}}function se(e,t){let n=_(e.coins+t.coins);return h(e,n,{kind:`pack`,label:t.label,delta:n-e.coins})}function ce(e,t){return h({...e,removeAds:!0},e.coins,{kind:`remove-ads`,label:t,delta:0})}function le(e,t){return h({...e,removeAds:t},e.coins,{kind:`remove-ads`,label:t?`Remove ads on`:`Remove ads off`,delta:0})}function ue(e,t){let n=Math.max(0,Math.floor(t)),r=_(e.coins+n);return h(e,r,{kind:`rewarded-ad`,label:`Test ad`,delta:r-e.coins})}function p(e,t,n){let r=Math.max(0,Math.floor(t)),i=_(e.coins+r);return h(e,i,{kind:`grant`,label:n,delta:i-e.coins})}function de(e,t){let n=_(Math.max(0,Math.floor(t)));return h(e,n,{kind:`reset`,label:`Reset`,delta:n-e.coins})}function fe(e,t){return t<=0?e:{...e,coins:_(e.coins+t)}}function m(e){return!Number.isInteger(e)||e<=0?null:e}function h(e,t,n){let r={...n,t:Date.now(),balance:t};return{...e,coins:t,log:[r,...e.log].slice(0,l)}}function pe(e,t){let n=d(t);return y(e)?{coins:_(g(e.coins,n.coins)),removeAds:e.removeAds===!0,pendingIcebreakers:v(e.pendingIcebreakers),pendingBombs:v(e.pendingBombs),log:me(e.log)}:n}function me(e){if(!Array.isArray(e))return[];let t=[];for(let n of e){if(!y(n))continue;let e=n.kind;if(e!==`shop`&&e!==`pack`&&e!==`remove-ads`&&e!==`rewarded-ad`&&e!==`grant`&&e!==`reset`||typeof n.label!=`string`||n.label.length>80)continue;let r=g(n.delta,0),i=_(g(n.balance,0)),a=g(n.t,0);if(t.push({t:a,kind:e,label:n.label,delta:r,balance:i}),t.length>=l)break}return t}function g(e,t){return typeof e!=`number`||!Number.isInteger(e)?t:e}function _(e){return Number.isFinite(e)?Math.max(0,Math.min(c,Math.floor(e))):0}function v(e){return typeof e!=`number`||!Number.isInteger(e)||e<0?0:Math.min(99,e)}function y(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var he=`TEST AD`,b=`TEST - NO REAL MONEY`,ge=[`cross`,`crack`,`crack2`,`splash`,`cap`,`stuck`,`pity`,`icegroup`,`bomb-edge`,`bomb-mid`,`ages`],x=e=>({name:`single`,color:e,shape:[[1]]}),_e={name:`s`,color:4,shape:[[0,1,1],[1,1,0]]};function S(){return Array.from({length:10},()=>`........`)}function C(e,t,n,r){let i=e[t].split(``);i[n]=r,e[t]=i.join(``)}function w(e,n,r){return o(e,n),r&&(e.tray=r),t(e),e}function T(e,t={}){return i({seed:e,...t})}function ve(){return w(T(4),[`...g....`,`...g....`,`...g....`,`...g....`,`gggC..gg`,`........`,`...g....`,`...g....`,`...g....`,`...g....`],[_e,x(1),x(3)])}function ye(){let e=S();return e[0]=`Cgggggg.`,w(T(11,{icebreakers:0,bombs:0}),e,[x(0),x(1),x(2)])}function be(){let e=S();return e[0]=`cgggggg.`,w(T(12,{icebreakers:0,bombs:0}),e,[x(0),x(1),x(2)])}function xe(){let e=S();for(let t=0;t<8;t++)C(e,0,t,`g`);C(e,0,0,`.`);for(let t=1;t<10;t++)C(e,t,0,`g`);return C(e,1,1,`C`),C(e,2,2,`g`),C(e,3,3,`C`),w(T(13,{icebreakers:0,bombs:0}),e,[x(2),x(0),x(1)])}function E(){let e=S();for(let[t,n]of[[0,0],[0,2],[0,4],[0,6],[1,1],[1,3],[1,5]])C(e,t,n,`C`);e[9]=`cgggggg.`,C(e,3,0,`w`);let t=w(T(14,{icebreakers:0,bombs:0}),e,[x(4),x(1),x(2)]),n=t.board[3][0];return n.kind===`gummy`&&(n.age=5),t}function D(){let e=Array.from({length:10},()=>`gggggggg`);return w(T(15),e)}function O(){let e=S();for(let[t,n]of[[0,0],[0,2],[0,4],[0,6],[1,1],[1,3]])C(e,t,n,`C`);let t=w(T(16,{icebreakers:0,bombs:0}),e,[x(0),x(1),x(2)]);return t.crystalStreak=0,t.pityUsed=!1,t}function k(){let e=S();return e[4]=`..CCC...`,e[5]=`..C..C..`,w(T(17,{icebreakers:1,bombs:0}),e,[x(0),x(1),x(2)])}function A(){let e=S();return C(e,0,0,`C`),C(e,1,1,`g`),C(e,2,0,`g`),C(e,3,3,`g`),C(e,0,4,`g`),C(e,4,0,`g`),C(e,3,4,`g`),w(T(18,{icebreakers:0,bombs:2}),e,[x(0),x(1),x(2)])}function j(){let e=S();return C(e,5,3,`C`),C(e,5,6,`C`),w(T(19,{icebreakers:0,bombs:2}),e,[x(0),x(1),x(2)])}function M(){let e=w(T(20,{icebreakers:0,bombs:0}),S(),[x(0),x(1),x(2)]);for(let t=0;t<4;t++)e.board[1][t+2]={kind:`gummy`,age:t,color:3,waiting:!1};return t(e),e}var N=[{name:`cross`,title:`Cross`,hint:`Drop the berry S on the gap. The row and column both cross the crystal.`,build:ve},{name:`crack`,title:`Crack`,hint:`Drop a single in the gap. The full crystal takes one line hit and cracks.`,build:ye},{name:`crack2`,title:`Crack 2`,hint:`Drop a single in the gap. The cracked crystal shatters.`,build:be},{name:`splash`,title:`Splash`,hint:`Drop a single on the corner gap. Two popped neighbors splash the crystal once.`,build:xe},{name:`cap`,title:`Cap`,hint:`Eight crystals, and a gummy past age 4 is waiting. Drop a single on the bottom gap to free a slot.`,build:E},{name:`stuck`,title:`Stuck`,hint:`Nothing fits. The overlay chips are labeled.`,build:D},{name:`pity`,title:`Pity`,hint:`Six crystals and no Icebreaker. Place the three singles. The third one is a gift.`,build:O},{name:`icegroup`,title:`Ice group`,hint:`The cluster is connected. The loose crystal touches it on a corner only.`,build:k},{name:`bomb-edge`,title:`Bomb edge`,hint:`Bomb is armed on the corner. Gummies inside the clipped 4×4 go. The ones just outside stay.`,aim:`bomb`,anchor:{row:0,col:0},build:A},{name:`bomb-mid`,title:`Bomb mid`,hint:`Bomb is armed mid-board. The window sits one cell up and left of the tap.`,aim:`bomb`,anchor:{row:5,col:3},build:j},{name:`ages`,title:`Ages`,hint:`Four gummies, ages 0 through 3, for the mobile age check.`,build:M}];function P(e){return ge.includes(e)}function Se(e){return N.find(t=>t.name===e)??null}var F=`shatterpop-qa-panel`,I=null,L=d(e()),R=`qa`,z=!1,B=!1,V=null,H=0,U={getItem(e){try{return localStorage.getItem(e)}catch{return null}},setItem(e,t){try{localStorage.setItem(e,t)}catch{}}};function Ce(t){let i=a(window.location),o=r(i),s=te(i),c=ee(i);if(o||s||c){if(I=t,c&&(ne(!0),L=re(U,e()),n.showMarks=()=>B,n.onAction=e=>{e<=0||(L=fe(L,e),f(U,L))},n.takePending=()=>{let e=oe(L);return L=e.wallet,f(U,L),{icebreakers:e.icebreakers,bombs:e.bombs}},n.afterRender=e=>{G(),K(),Te(e)},G()),o){let e=new URLSearchParams(window.location.search).get(`shot`);e&&P(e)?W(e):s&&t.render()}else s&&t.render()}}function W(e){let t=Se(e);t&&I&&(V=t.name,I.replaceGame(t.build(),{hint:t.hint,aim:t.aim}),K())}function G(){if(!document.getElementById(`shatterpop-qa-style`)){let e=document.createElement(`style`);e.id=`shatterpop-qa-style`,e.textContent=Me,document.head.appendChild(e)}if(document.getElementById(F))return;let e=document.createElement(`aside`);e.id=F,e.addEventListener(`click`,we),document.body.appendChild(e),K()}function K(){let e=document.getElementById(F);e&&(e.innerHTML=z?Oe():ke())}function we(t){let n=t.target;if(!(n instanceof Element))return;let r=n.closest(`[data-tab],[data-seed],[data-act]`);if(!r)return;let i=r.getAttribute(`data-tab`);if(i===`dev`||i===`qa`){R=i,z=!1,K();return}let a=r.getAttribute(`data-seed`);if(a){W(a);return}let o=r.getAttribute(`data-act`);if(o===`collapse`)z=!0,K();else if(o===`expand`)z=!1,K();else if(o===`add`){let t=e().sandbox.qaGrantCoins;L=p(L,t,`Grant ${t}`),f(U,L),q()}else if(o===`reset-coins`)L=de(L,e().sandbox.coins.starting),f(U,L),q();else if(o===`ads`)L=le(L,!L.removeAds),f(U,L),K();else if(o===`shop`)Y();else if(o===`grant-coins`){let t=e().sandbox.qaGrantCoins;L=p(L,t,`QA grant ${t}`),f(U,L),q()}else o===`grant-ice`?I?.grantTool(`ice`):o===`grant-bomb`?I?.grantTool(`bomb`):o===`marks`?(B=!B,I?.render()):o===`reset-board`&&(V&&P(V)?W(V):I?.freshGame())}function q(){K();let e=document.querySelector(`#sandbox-coin-chip`);e&&(e.textContent=J())}function J(){return`Coins ${L.coins}`}function Te(e){let t=e.querySelector(`.top-actions`)??e.querySelector(`.menu .stack`);if(!t)return;let n=document.createElement(`button`);n.type=`button`,n.id=`sandbox-coin-chip`,n.className=`texty sandbox-coin-chip`,n.textContent=J(),n.addEventListener(`click`,()=>Y()),t.prepend(n)}function Y(){document.getElementById(`sandbox-shop`)?.remove();let t=u(e()),n=e().sandbox,r=document.createElement(`div`);r.id=`sandbox-shop`,r.className=`qa-modal`,r.setAttribute(`role`,`dialog`),r.innerHTML=`<div class="qa-card">
    <p class="qa-kicker">Sandbox shop</p>
    <h2>${$(J())}</h2>
    <div class="qa-actions">
      ${X(`icebreaker`,`Icebreaker`,t.icebreaker)}
      ${X(`bomb`,`Bomb`,t.bomb)}
      ${L.removeAds?``:`<button type="button" data-shop="ad">Watch test ad · +${n.rewardedAdCoins}</button>`}
      ${n.packs.map(e=>`<button type="button" data-shop="pack" data-pack="${$(e.id)}">${$(e.label)} · ${e.coins} coins</button>`).join(``)}
      ${L.removeAds?`<p class="qa-note">removeAds is on.</p>`:`<button type="button" data-shop="remove-ads">${$(n.removeAds.label)}</button>`}
      <button type="button" data-shop="close">Close</button>
    </div>
  </div>`,r.addEventListener(`click`,e=>Z(e,r)),document.body.appendChild(r)}function X(e,t,n){return n==null?``:`<button type="button" data-shop="tool" data-tool="${e}"${L.coins<n?` disabled`:``}>${t} · ${n} coins</button>`}function Z(t,n){let r=t.target;if(!(r instanceof Element))return;let i=r.closest(`[data-shop]`);if(!i||i.hasAttribute(`disabled`))return;let a=i.getAttribute(`data-shop`);if(a===`close`)n.remove();else if(a===`tool`){let e=i.getAttribute(`data-tool`);(e===`icebreaker`||e===`bomb`)&&Ee(e)}else if(a===`ad`)n.remove(),De();else if(a===`pack`){let t=i.getAttribute(`data-pack`),n=e().sandbox.packs.find(e=>e.id===t);if(!n)return;Q(n.label,`${n.coins} test coins. Nothing is charged.`,()=>{L=se(L,n),f(U,L),q()})}else if(a===`remove-ads`){let t=e().sandbox.removeAds.label;Q(t,`Sets the removeAds flag. Nothing is charged.`,()=>{L=ce(L,t),f(U,L),q()})}}function Ee(t){let n=u(e()),r=t===`icebreaker`?n.icebreaker:n.bomb,i=ie(L,t,r);if(!i||!I)return;L=i;let a=I.inLiveRun();a||(L=ae(L,t)),f(U,L),a&&I.grantTool(t===`icebreaker`?`ice`:`bomb`),q(),Y()}function De(){if(L.removeAds)return;window.clearInterval(H),document.getElementById(`sandbox-test-ad`)?.remove();let t=5,n=document.createElement(`div`);n.id=`sandbox-test-ad`,n.className=`qa-ad`,n.setAttribute(`role`,`dialog`);let r=()=>{n.innerHTML=`<p class="qa-ad-label">${he}</p><p class="qa-ad-count">${t}</p><p>Test ad. No network.</p>`};r(),document.body.appendChild(n),H=window.setInterval(()=>{--t,t>0?r():(window.clearInterval(H),H=0,n.remove(),L=ue(L,e().sandbox.rewardedAdCoins),f(U,L),q())},1e3)}function Q(e,t,n){document.getElementById(`sandbox-checkout`)?.remove();let r=document.createElement(`div`);r.id=`sandbox-checkout`,r.className=`qa-modal`,r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-label`,b),r.innerHTML=`<div class="qa-card">
    <p class="qa-kicker">${b}</p>
    <h2>${$(e)}</h2>
    <p>${$(t)}</p>
    <div class="qa-actions">
      <button type="button" data-pay="confirm">Confirm test purchase</button>
      <button type="button" data-pay="cancel">Cancel</button>
    </div>
  </div>`,r.addEventListener(`click`,e=>{let t=e.target;if(!(t instanceof Element))return;let i=t.closest(`[data-pay]`)?.getAttribute(`data-pay`);(i===`confirm`||i===`cancel`)&&(r.remove(),i===`confirm`&&n())}),document.body.appendChild(r)}function Oe(){return`<button type="button" class="qa-pill" data-act="expand">QA</button>`}function ke(){let t=e().sandbox,n=L.pendingIcebreakers+L.pendingBombs;return`<div class="qa-panel">
    <header class="qa-bar">
      <strong>Sandbox</strong>
      <button type="button" data-tab="dev" aria-pressed="${R===`dev`}">Dev</button>
      <button type="button" data-tab="qa" aria-pressed="${R===`qa`}">QA</button>
      <button type="button" data-act="collapse" aria-label="Hide panel">Hide</button>
    </header>
    ${R===`dev`?Ae(t.qaGrantCoins,n):je()}
  </div>`}function Ae(e,t){let n=L.log.map(e=>`<li><span>${$(e.label)}</span><b>${e.delta>0?`+${e.delta}`:e.delta}</b><em>${e.balance}</em></li>`).join(``);return`<div class="qa-page">
    <p>Balance <strong>${L.coins}</strong></p>
    <p>removeAds <strong>${L.removeAds?`on`:`off`}</strong></p>
    ${t?`<p>Next run +${L.pendingIcebreakers} Icebreaker, +${L.pendingBombs} Bomb</p>`:``}
    <div class="qa-actions">
      <button type="button" data-act="add">Add ${e} coins</button>
      <button type="button" data-act="reset-coins">Reset coins</button>
      <button type="button" data-act="ads">Toggle removeAds</button>
      <button type="button" data-act="shop">Open shop</button>
    </div>
    <h3>Purchase log</h3>
    ${n?`<ul class="qa-log">${n}</ul>`:`<p class="qa-note">No purchases yet.</p>`}
  </div>`}function je(){return`<div class="qa-page">
    <div class="qa-seeds">${N.map(e=>`<button type="button" data-seed="${e.name}" aria-pressed="${V===e.name}">${$(e.title)}</button>`).join(``)}</div>
    <div class="qa-actions">
      <button type="button" data-act="grant-coins">Grant coins</button>
      <button type="button" data-act="grant-ice">Grant Icebreaker</button>
      <button type="button" data-act="grant-bomb">Grant Bomb</button>
      <button type="button" data-act="marks">${B?`Hide HP and age`:`Show HP and age`}</button>
      <button type="button" data-act="reset-board">Reset board</button>
    </div>
  </div>`}function $(e){return e.replace(/[&<>"']/g,e=>e===`&`?`&amp;`:e===`<`?`&lt;`:e===`>`?`&gt;`:e===`"`?`&quot;`:`&#39;`)}var Me=`
#shatterpop-qa-panel {
  position: fixed;
  top: 8px;
  right: 8px;
  z-index: 40;
  width: min(320px, calc(100vw - 16px));
  max-height: 72vh;
  overflow: auto;
  color: #2b1b3d;
  font-family: Fredoka, "Avenir Next", "Segoe UI", sans-serif;
  font-size: 14px;
}
#shatterpop-qa-panel .qa-panel,
#shatterpop-qa-panel .qa-pill {
  background: #fff4e0;
  border-radius: 16px;
  box-shadow: 0 10px 28px rgba(28, 16, 43, 0.35);
}
#shatterpop-qa-panel .qa-pill {
  border: 0;
  padding: 8px 12px;
  font-weight: 700;
  cursor: pointer;
}
#shatterpop-qa-panel .qa-bar {
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 8px 8px 0;
}
#shatterpop-qa-panel .qa-bar strong { margin-right: auto; }
#shatterpop-qa-panel button {
  font: inherit;
  cursor: pointer;
  border: 0;
  border-radius: 10px;
  background: rgba(43, 27, 61, 0.08);
  color: #2b1b3d;
  padding: 6px 8px;
}
#shatterpop-qa-panel button[aria-pressed="true"] { background: #ffc94d; }
#shatterpop-qa-panel .qa-page { padding: 8px; }
#shatterpop-qa-panel .qa-seeds,
#shatterpop-qa-panel .qa-actions,
.qa-card .qa-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
#shatterpop-qa-panel h3 { margin: 10px 0 4px; font-size: 13px; }
#shatterpop-qa-panel .qa-log { list-style: none; margin: 0; padding: 0; }
#shatterpop-qa-panel .qa-log li {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 8px;
  padding: 3px 0;
  border-top: 1px solid rgba(43, 27, 61, 0.1);
}
#shatterpop-qa-panel .qa-note,
.qa-card .qa-note { margin: 6px 0; }
.sandbox-coin-chip { font-weight: 700; }
.qa-mark {
  position: absolute;
  z-index: 4;
  right: 1px;
  bottom: 0;
  font-size: 10px;
  font-weight: 700;
  line-height: 1.2;
  color: #1c102b;
  background: #fff4e0;
  border-radius: 4px;
  padding: 0 2px;
  pointer-events: none;
}
.qa-modal, .qa-ad {
  position: fixed;
  inset: 0;
  z-index: 70;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 16px;
  background: rgba(28, 16, 43, 0.62);
}
.qa-ad {
  z-index: 80;
  align-items: center;
  flex-direction: column;
  color: #fff4e0;
  text-align: center;
}
.qa-ad-label {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}
.qa-ad-count { font-size: 4rem; margin: 8px 0; font-weight: 700; }
.qa-card {
  width: min(420px, 100%);
  background: #fff4e0;
  color: #2b1b3d;
  border-radius: 20px;
  padding: 16px;
}
.qa-card h2 { margin: 4px 0 8px; }
.qa-kicker {
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.qa-card button {
  font: inherit;
  cursor: pointer;
  border: 0;
  border-radius: 12px;
  background: #ffc94d;
  color: #2b1b3d;
  padding: 8px 10px;
}
.qa-card button[disabled] { opacity: 0.4; cursor: default; }
`;export{Ce as installQa};