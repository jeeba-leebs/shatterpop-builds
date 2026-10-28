import{n as e}from"./tuning-BOHxplfq.js";import{_ as t,a as n,l as r,p as i,t as a}from"./bridge-CA3cqcmF.js";var o=`shatterpop.sandbox.v1`,ee=1e9,s=40;function c(e){return{icebreaker:p(e.sandbox.shop.icebreakerPrice),bomb:p(e.sandbox.shop.bombPrice)}}function l(e){return{coins:e.sandbox.coins.starting,removeAds:!1,pendingIcebreakers:0,pendingBombs:0,log:[]}}function te(e,t){let n;try{n=e.getItem(o)}catch{return l(t)}if(n==null)return l(t);try{return ue(JSON.parse(n),t)}catch{return l(t)}}function u(e,t){try{e.setItem(o,JSON.stringify(t))}catch{}}function ne(e,t,n){if(n==null||n<=0||e.coins<n)return null;let r=t===`icebreaker`?`Icebreaker`:`Bomb`;return m(e,e.coins-n,{kind:`shop`,label:r,delta:-n})}function re(e,t){return t===`icebreaker`?{...e,pendingIcebreakers:e.pendingIcebreakers+1}:{...e,pendingBombs:e.pendingBombs+1}}function ie(e){return{wallet:{...e,pendingIcebreakers:0,pendingBombs:0},icebreakers:e.pendingIcebreakers,bombs:e.pendingBombs}}function d(e,t){let n=g(e.coins+t.coins);return m(e,n,{kind:`pack`,label:t.label,delta:n-e.coins})}function ae(e,t){return m({...e,removeAds:!0},e.coins,{kind:`remove-ads`,label:t,delta:0})}function oe(e,t){return m({...e,removeAds:t},e.coins,{kind:`remove-ads`,label:t?`Remove ads on`:`Remove ads off`,delta:0})}function se(e,t){let n=Math.max(0,Math.floor(t)),r=g(e.coins+n);return m(e,r,{kind:`rewarded-ad`,label:`Test ad`,delta:r-e.coins})}function f(e,t,n){let r=Math.max(0,Math.floor(t)),i=g(e.coins+r);return m(e,i,{kind:`grant`,label:n,delta:i-e.coins})}function ce(e,t){let n=g(Math.max(0,Math.floor(t)));return m(e,n,{kind:`reset`,label:`Reset`,delta:n-e.coins})}function le(e,t){return t<=0?e:{...e,coins:g(e.coins+t)}}function p(e){return!Number.isInteger(e)||e<=0?null:e}function m(e,t,n){let r={...n,t:Date.now(),balance:t};return{...e,coins:t,log:[r,...e.log].slice(0,s)}}function ue(e,t){let n=l(t);return v(e)?{coins:g(h(e.coins,n.coins)),removeAds:e.removeAds===!0,pendingIcebreakers:_(e.pendingIcebreakers),pendingBombs:_(e.pendingBombs),log:de(e.log)}:n}function de(e){if(!Array.isArray(e))return[];let t=[];for(let n of e){if(!v(n))continue;let e=n.kind;if(e!==`shop`&&e!==`pack`&&e!==`remove-ads`&&e!==`rewarded-ad`&&e!==`grant`&&e!==`reset`||typeof n.label!=`string`||n.label.length>80)continue;let r=h(n.delta,0),i=g(h(n.balance,0)),a=h(n.t,0);if(t.push({t:a,kind:e,label:n.label,delta:r,balance:i}),t.length>=s)break}return t}function h(e,t){return typeof e!=`number`||!Number.isInteger(e)?t:e}function g(e){return Number.isFinite(e)?Math.max(0,Math.min(ee,Math.floor(e))):0}function _(e){return typeof e!=`number`||!Number.isInteger(e)||e<0?0:Math.min(99,e)}function v(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var fe=`TEST AD`,y=`TEST - NO REAL MONEY`;function pe(e){return e===`1`}function me(e,t){let n=e.toLowerCase();return!!(n===`localhost`||n===`127.0.0.1`||n===`jeeba-leebs.github.io`&&t.startsWith(`/shatterpop-builds/`))}function b(e){return e.dev||e.viteQa?!0:me(e.hostname,e.pathname)}function he(e){let t=e.startsWith(`?`)?e.slice(1):e;return new URLSearchParams(t).get(`qa`)===`1`}function ge(e){return he(e.search)?b(e):!1}function _e(e){return!e.dev&&!e.viteQa?!1:ge(e)}function ve(e){return!e.dev&&!e.viteQa?!1:b(e)}function ye(e){return{dev:!1,viteQa:pe(`1`),search:e.search,hostname:e.hostname,pathname:e.pathname}}var be=[`cross`,`crack`,`crack2`,`splash`,`cap`,`stuck`,`pity`,`icegroup`,`bomb-edge`,`bomb-mid`,`ages`],x=e=>({name:`single`,color:e,shape:[[1]]}),xe={name:`s`,color:4,shape:[[0,1,1],[1,1,0]]};function S(){return Array.from({length:10},()=>`........`)}function C(e,t,n,r){let i=e[t].split(``);i[n]=r,e[t]=i.join(``)}function w(e,t,n){return r(e,t),n&&(e.tray=n),i(e),e}function T(e,t={}){return n({seed:e,...t})}function E(){return w(T(4),[`...g....`,`...g....`,`...g....`,`...g....`,`gggC..gg`,`........`,`...g....`,`...g....`,`...g....`,`...g....`],[xe,x(1),x(3)])}function D(){let e=S();return e[0]=`Cgggggg.`,w(T(11,{icebreakers:0,bombs:0}),e,[x(0),x(1),x(2)])}function O(){let e=S();return e[0]=`cgggggg.`,w(T(12,{icebreakers:0,bombs:0}),e,[x(0),x(1),x(2)])}function k(){let e=S();for(let t=0;t<8;t++)C(e,0,t,`g`);C(e,0,0,`.`);for(let t=1;t<10;t++)C(e,t,0,`g`);return C(e,1,1,`C`),C(e,2,2,`g`),C(e,3,3,`C`),w(T(13,{icebreakers:0,bombs:0}),e,[x(2),x(0),x(1)])}function A(){let e=S();for(let[t,n]of[[0,0],[0,2],[0,4],[0,6],[1,1],[1,3],[1,5]])C(e,t,n,`C`);e[9]=`cgggggg.`,C(e,3,0,`w`);let t=w(T(14,{icebreakers:0,bombs:0}),e,[x(4),x(1),x(2)]),n=t.board[3][0];return n.kind===`gummy`&&(n.age=5),t}function j(){let e=Array.from({length:10},()=>`gggggggg`);return w(T(15),e)}function M(){let e=S();for(let[t,n]of[[0,0],[0,2],[0,4],[0,6],[1,1],[1,3]])C(e,t,n,`C`);let t=w(T(16,{icebreakers:0,bombs:0}),e,[x(0),x(1),x(2)]);return t.crystalStreak=0,t.pityUsed=!1,t}function Se(){let e=S();return e[4]=`..CCC...`,e[5]=`..C..C..`,w(T(17,{icebreakers:1,bombs:0}),e,[x(0),x(1),x(2)])}function Ce(){let e=S();return C(e,0,0,`C`),C(e,0,4,`C`),w(T(18,{icebreakers:0,bombs:2}),e,[x(0),x(1),x(2)])}function we(){let e=S();return C(e,5,3,`C`),C(e,5,6,`C`),w(T(19,{icebreakers:0,bombs:2}),e,[x(0),x(1),x(2)])}function Te(){let e=w(T(20,{icebreakers:0,bombs:0}),S(),[x(0),x(1),x(2)]);for(let t=0;t<4;t++)e.board[2][t+2]={kind:`gummy`,age:t,color:t,waiting:!1};return i(e),e}var N=[{name:`cross`,title:`Cross`,hint:`Drop the berry S on the gap. The row and column both cross the crystal.`,build:E},{name:`crack`,title:`Crack`,hint:`Drop a single in the gap. The full crystal takes one line hit and cracks.`,build:D},{name:`crack2`,title:`Crack 2`,hint:`Drop a single in the gap. The cracked crystal shatters.`,build:O},{name:`splash`,title:`Splash`,hint:`Drop a single on the corner gap. Two popped neighbors splash the crystal once.`,build:k},{name:`cap`,title:`Cap`,hint:`Eight crystals, and a gummy past age 4 is waiting. Drop a single on the bottom gap to free a slot.`,build:A},{name:`stuck`,title:`Stuck`,hint:`Nothing fits. The overlay chips are labeled.`,build:j},{name:`pity`,title:`Pity`,hint:`Six crystals and no Icebreaker. Place the three singles. The third one is a gift.`,build:M},{name:`icegroup`,title:`Ice group`,hint:`The cluster is connected. The loose crystal touches it on a corner only.`,build:Se},{name:`bomb-edge`,title:`Bomb edge`,hint:`Bomb is armed on the corner. The window shifts so it stays on the board.`,aim:`bomb`,anchor:{row:0,col:0},build:Ce},{name:`bomb-mid`,title:`Bomb mid`,hint:`Bomb is armed mid-board. The window sits one cell up and left of the tap.`,aim:`bomb`,anchor:{row:5,col:3},build:we},{name:`ages`,title:`Ages`,hint:`Four gummies, ages 0 through 3, for the mobile age check.`,build:Te}];function P(e){return be.includes(e)}function F(e){return N.find(t=>t.name===e)??null}var I=`shatterpop-qa-panel`,L=null,R=l(e()),z=`qa`,B=!1,V=!1,H=null,U=0,W={getItem(e){try{return localStorage.getItem(e)}catch{return null}},setItem(e,t){try{localStorage.setItem(e,t)}catch{}}};function Ee(n){let r=ye(window.location),i=ve(r),o=_e(r);if(i||o){if(L=n,o&&(t(!0),R=te(W,e()),a.showMarks=()=>V,a.onAction=e=>{e<=0||(R=le(R,e),u(W,R))},a.takePending=()=>{let e=ie(R);return R=e.wallet,u(W,R),{icebreakers:e.icebreakers,bombs:e.bombs}},a.afterRender=e=>{K(),q(),Oe(e)},K()),i){let e=new URLSearchParams(window.location.search).get(`shot`);e&&P(e)?G(e):o&&n.render()}else o&&n.render()}}function G(e){let t=F(e);t&&L&&(H=t.name,L.replaceGame(t.build(),{hint:t.hint,aim:t.aim}),q())}function K(){if(!document.getElementById(`shatterpop-qa-style`)){let e=document.createElement(`style`);e.id=`shatterpop-qa-style`,e.textContent=Ie,document.head.appendChild(e)}if(document.getElementById(I))return;let e=document.createElement(`aside`);e.id=I,e.addEventListener(`click`,De),document.body.appendChild(e),q()}function q(){let e=document.getElementById(I);e&&(e.innerHTML=B?Me():Ne())}function De(t){let n=t.target;if(!(n instanceof Element))return;let r=n.closest(`[data-tab],[data-seed],[data-act]`);if(!r)return;let i=r.getAttribute(`data-tab`);if(i===`dev`||i===`qa`){z=i,B=!1,q();return}let a=r.getAttribute(`data-seed`);if(a){G(a);return}let o=r.getAttribute(`data-act`);if(o===`collapse`)B=!0,q();else if(o===`expand`)B=!1,q();else if(o===`add`){let t=e().sandbox.qaGrantCoins;R=f(R,t,`Grant ${t}`),u(W,R),J()}else if(o===`reset-coins`)R=ce(R,e().sandbox.coins.starting),u(W,R),J();else if(o===`ads`)R=oe(R,!R.removeAds),u(W,R),q();else if(o===`shop`)X();else if(o===`grant-coins`){let t=e().sandbox.qaGrantCoins;R=f(R,t,`QA grant ${t}`),u(W,R),J()}else o===`grant-ice`?L?.grantTool(`ice`):o===`grant-bomb`?L?.grantTool(`bomb`):o===`marks`?(V=!V,L?.render()):o===`reset-board`&&(H&&P(H)?G(H):L?.freshGame())}function J(){q();let e=document.querySelector(`#sandbox-coin-chip`);e&&(e.textContent=Y())}function Y(){return`Coins ${R.coins}`}function Oe(e){let t=e.querySelector(`.top-actions`)??e.querySelector(`.menu .stack`);if(!t)return;let n=document.createElement(`button`);n.type=`button`,n.id=`sandbox-coin-chip`,n.className=`texty sandbox-coin-chip`,n.textContent=Y(),n.addEventListener(`click`,()=>X()),t.prepend(n)}function X(){document.getElementById(`sandbox-shop`)?.remove();let t=c(e()),n=e().sandbox,r=document.createElement(`div`);r.id=`sandbox-shop`,r.className=`qa-modal`,r.setAttribute(`role`,`dialog`),r.innerHTML=`<div class="qa-card">
    <p class="qa-kicker">Sandbox shop</p>
    <h2>${$(Y())}</h2>
    <div class="qa-actions">
      ${Z(`icebreaker`,`Icebreaker`,t.icebreaker)}
      ${Z(`bomb`,`Bomb`,t.bomb)}
      ${R.removeAds?``:`<button type="button" data-shop="ad">Watch test ad · +${n.rewardedAdCoins}</button>`}
      ${n.packs.map(e=>`<button type="button" data-shop="pack" data-pack="${$(e.id)}">${$(e.label)} · ${e.coins} coins</button>`).join(``)}
      ${R.removeAds?`<p class="qa-note">removeAds is on.</p>`:`<button type="button" data-shop="remove-ads">${$(n.removeAds.label)}</button>`}
      <button type="button" data-shop="close">Close</button>
    </div>
  </div>`,r.addEventListener(`click`,e=>ke(e,r)),document.body.appendChild(r)}function Z(e,t,n){return n==null?``:`<button type="button" data-shop="tool" data-tool="${e}"${R.coins<n?` disabled`:``}>${t} · ${n} coins</button>`}function ke(t,n){let r=t.target;if(!(r instanceof Element))return;let i=r.closest(`[data-shop]`);if(!i||i.hasAttribute(`disabled`))return;let a=i.getAttribute(`data-shop`);if(a===`close`)n.remove();else if(a===`tool`){let e=i.getAttribute(`data-tool`);(e===`icebreaker`||e===`bomb`)&&Ae(e)}else if(a===`ad`)n.remove(),je();else if(a===`pack`){let t=i.getAttribute(`data-pack`),n=e().sandbox.packs.find(e=>e.id===t);if(!n)return;Q(n.label,`${n.coins} test coins. Nothing is charged.`,()=>{R=d(R,n),u(W,R),J()})}else if(a===`remove-ads`){let t=e().sandbox.removeAds.label;Q(t,`Sets the removeAds flag. Nothing is charged.`,()=>{R=ae(R,t),u(W,R),J()})}}function Ae(t){let n=c(e()),r=t===`icebreaker`?n.icebreaker:n.bomb,i=ne(R,t,r);if(!i||!L)return;R=i;let a=L.inLiveRun();a||(R=re(R,t)),u(W,R),a&&L.grantTool(t===`icebreaker`?`ice`:`bomb`),J(),X()}function je(){if(R.removeAds)return;window.clearInterval(U),document.getElementById(`sandbox-test-ad`)?.remove();let t=5,n=document.createElement(`div`);n.id=`sandbox-test-ad`,n.className=`qa-ad`,n.setAttribute(`role`,`dialog`);let r=()=>{n.innerHTML=`<p class="qa-ad-label">${fe}</p><p class="qa-ad-count">${t}</p><p>Test ad. No network.</p>`};r(),document.body.appendChild(n),U=window.setInterval(()=>{--t,t>0?r():(window.clearInterval(U),U=0,n.remove(),R=se(R,e().sandbox.rewardedAdCoins),u(W,R),J())},1e3)}function Q(e,t,n){document.getElementById(`sandbox-checkout`)?.remove();let r=document.createElement(`div`);r.id=`sandbox-checkout`,r.className=`qa-modal`,r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-label`,y),r.innerHTML=`<div class="qa-card">
    <p class="qa-kicker">${y}</p>
    <h2>${$(e)}</h2>
    <p>${$(t)}</p>
    <div class="qa-actions">
      <button type="button" data-pay="confirm">Confirm test purchase</button>
      <button type="button" data-pay="cancel">Cancel</button>
    </div>
  </div>`,r.addEventListener(`click`,e=>{let t=e.target;if(!(t instanceof Element))return;let i=t.closest(`[data-pay]`)?.getAttribute(`data-pay`);(i===`confirm`||i===`cancel`)&&(r.remove(),i===`confirm`&&n())}),document.body.appendChild(r)}function Me(){return`<button type="button" class="qa-pill" data-act="expand">QA</button>`}function Ne(){let t=e().sandbox,n=R.pendingIcebreakers+R.pendingBombs;return`<div class="qa-panel">
    <header class="qa-bar">
      <strong>Sandbox</strong>
      <button type="button" data-tab="dev" aria-pressed="${z===`dev`}">Dev</button>
      <button type="button" data-tab="qa" aria-pressed="${z===`qa`}">QA</button>
      <button type="button" data-act="collapse" aria-label="Hide panel">Hide</button>
    </header>
    ${z===`dev`?Pe(t.qaGrantCoins,n):Fe()}
  </div>`}function Pe(e,t){let n=R.log.map(e=>`<li><span>${$(e.label)}</span><b>${e.delta>0?`+${e.delta}`:e.delta}</b><em>${e.balance}</em></li>`).join(``);return`<div class="qa-page">
    <p>Balance <strong>${R.coins}</strong></p>
    <p>removeAds <strong>${R.removeAds?`on`:`off`}</strong></p>
    ${t?`<p>Next run +${R.pendingIcebreakers} Icebreaker, +${R.pendingBombs} Bomb</p>`:``}
    <div class="qa-actions">
      <button type="button" data-act="add">Add ${e} coins</button>
      <button type="button" data-act="reset-coins">Reset coins</button>
      <button type="button" data-act="ads">Toggle removeAds</button>
      <button type="button" data-act="shop">Open shop</button>
    </div>
    <h3>Purchase log</h3>
    ${n?`<ul class="qa-log">${n}</ul>`:`<p class="qa-note">No purchases yet.</p>`}
  </div>`}function Fe(){return`<div class="qa-page">
    <div class="qa-seeds">${N.map(e=>`<button type="button" data-seed="${e.name}" aria-pressed="${H===e.name}">${$(e.title)}</button>`).join(``)}</div>
    <div class="qa-actions">
      <button type="button" data-act="grant-coins">Grant coins</button>
      <button type="button" data-act="grant-ice">Grant Icebreaker</button>
      <button type="button" data-act="grant-bomb">Grant Bomb</button>
      <button type="button" data-act="marks">${V?`Hide HP and age`:`Show HP and age`}</button>
      <button type="button" data-act="reset-board">Reset board</button>
    </div>
  </div>`}function $(e){return e.replace(/[&<>"']/g,e=>e===`&`?`&amp;`:e===`<`?`&lt;`:e===`>`?`&gt;`:e===`"`?`&quot;`:`&#39;`)}var Ie=`
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
`;export{Ee as installQa};