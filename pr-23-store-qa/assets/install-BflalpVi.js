import{n as e}from"./tuning-Be3agq4P.js";import{a as t,h as n,i as r,o as i,r as a,t as o,u as s,w as c,y as l}from"./gate-DAIBIqGR.js";var u=`shatterpop.sandbox.v1`,d=1e9,f=40;function p(e){return{coins:e.sandbox.coins.starting,removeAds:!1,pendingIcebreakers:0,pendingBombs:0,log:[]}}function ee(e,t){let n;try{n=e.getItem(u)}catch{return p(t)}if(n==null)return p(t);try{return y(JSON.parse(n),t)}catch{return p(t)}}function m(e,t){try{e.setItem(u,JSON.stringify(t))}catch{}}function te(e){return{wallet:{...e,pendingIcebreakers:0,pendingBombs:0},icebreakers:e.pendingIcebreakers,bombs:e.pendingBombs}}function h(e,t){return v({...e,removeAds:t},e.coins,{kind:`remove-ads`,label:t?`Remove ads on`:`Remove ads off`,delta:0})}function g(e,t,n){let r=Math.max(0,Math.floor(t)),i=S(e.coins+r);return v(e,i,{kind:`grant`,label:n,delta:i-e.coins})}function ne(e,t){let n=S(Math.max(0,Math.floor(t)));return v(e,n,{kind:`reset`,label:`Reset`,delta:n-e.coins})}function _(e,t){return t<=0?e:{...e,coins:S(e.coins+t)}}function v(e,t,n){let r={...n,t:Date.now(),balance:t};return{...e,coins:t,log:[r,...e.log].slice(0,f)}}function y(e,t){let n=p(t);return w(e)?{coins:S(x(e.coins,n.coins)),removeAds:e.removeAds===!0,pendingIcebreakers:C(e.pendingIcebreakers),pendingBombs:C(e.pendingBombs),log:b(e.log)}:n}function b(e){if(!Array.isArray(e))return[];let t=[];for(let n of e){if(!w(n))continue;let e=n.kind;if(e!==`shop`&&e!==`pack`&&e!==`remove-ads`&&e!==`rewarded-ad`&&e!==`grant`&&e!==`reset`||typeof n.label!=`string`||n.label.length>80)continue;let r=x(n.delta,0),i=S(x(n.balance,0)),a=x(n.t,0);if(t.push({t:a,kind:e,label:n.label,delta:r,balance:i}),t.length>=f)break}return t}function x(e,t){return typeof e!=`number`||!Number.isInteger(e)?t:e}function S(e){return Number.isFinite(e)?Math.max(0,Math.min(d,Math.floor(e))):0}function C(e){return typeof e!=`number`||!Number.isInteger(e)||e<0?0:Math.min(99,e)}function w(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var T=[`cross`,`crack`,`crack2`,`splash`,`cap`,`stuck`,`pity`,`icegroup`,`bomb-edge`,`bomb-mid`,`ages`],E=e=>({name:`single`,color:e,shape:[[1]]}),D={name:`s`,color:4,shape:[[0,1,1],[1,1,0]]};function O(){return Array.from({length:10},()=>`........`)}function k(e,t,n,r){let i=e[t].split(``);i[n]=r,e[t]=i.join(``)}function A(e,t,r){return n(e,t),r&&(e.tray=r),l(e),e}function j(e,t={}){return s({seed:e,...t})}function re(){return A(j(4),[`...g....`,`...g....`,`...g....`,`...g....`,`gggC..gg`,`........`,`...g....`,`...g....`,`...g....`,`...g....`],[D,E(1),E(3)])}function ie(){let e=O();return e[0]=`Cgggggg.`,A(j(11,{icebreakers:0,bombs:0}),e,[E(0),E(1),E(2)])}function ae(){let e=O();return e[0]=`cgggggg.`,A(j(12,{icebreakers:0,bombs:0}),e,[E(0),E(1),E(2)])}function M(){let e=O();for(let t=0;t<8;t++)k(e,0,t,`g`);k(e,0,0,`.`);for(let t=1;t<10;t++)k(e,t,0,`g`);return k(e,1,1,`C`),k(e,2,2,`g`),k(e,3,3,`C`),A(j(13,{icebreakers:0,bombs:0}),e,[E(2),E(0),E(1)])}function oe(){let e=O();for(let[t,n]of[[0,0],[0,2],[0,4],[0,6],[1,1],[1,3],[1,5]])k(e,t,n,`C`);e[9]=`cgggggg.`,k(e,3,0,`w`);let t=A(j(14,{icebreakers:0,bombs:0}),e,[E(4),E(1),E(2)]),n=t.board[3][0];return n.kind===`gummy`&&(n.age=5),t}function se(){let e=Array.from({length:10},()=>`gggggggg`);return A(j(15),e)}function N(){let e=O();for(let[t,n]of[[0,0],[0,2],[0,4],[0,6],[1,1],[1,3]])k(e,t,n,`C`);let t=A(j(16,{icebreakers:0,bombs:0}),e,[E(0),E(1),E(2)]);return t.crystalStreak=0,t.pityUsed=!1,t}function P(){let e=O();return e[4]=`..CCC...`,e[5]=`..C..C..`,A(j(17,{icebreakers:1,bombs:0}),e,[E(0),E(1),E(2)])}function F(){let e=O();return k(e,0,0,`C`),k(e,1,1,`g`),k(e,2,0,`g`),k(e,3,3,`g`),k(e,0,4,`g`),k(e,4,0,`g`),k(e,3,4,`g`),A(j(18,{icebreakers:0,bombs:2}),e,[E(0),E(1),E(2)])}function I(){let e=O();return k(e,5,3,`C`),k(e,5,6,`C`),A(j(19,{icebreakers:0,bombs:2}),e,[E(0),E(1),E(2)])}function L(){let e=A(j(20,{icebreakers:0,bombs:0}),O(),[E(0),E(1),E(2)]);for(let t=0;t<4;t++)e.board[1][t+2]={kind:`gummy`,age:t,color:3,waiting:!1};return l(e),e}var R=[{name:`cross`,title:`Cross`,hint:`Drop the berry S on the gap. The row and column both cross the crystal.`,build:re},{name:`crack`,title:`Crack`,hint:`Drop a single in the gap. The full crystal takes one line hit and cracks.`,build:ie},{name:`crack2`,title:`Crack 2`,hint:`Drop a single in the gap. The cracked crystal shatters.`,build:ae},{name:`splash`,title:`Splash`,hint:`Drop a single on the corner gap. Two popped neighbors splash the crystal once.`,build:M},{name:`cap`,title:`Cap`,hint:`Eight crystals, and a gummy past age 4 is waiting. Drop a single on the bottom gap to free a slot.`,build:oe},{name:`stuck`,title:`Stuck`,hint:`Nothing fits. The overlay chips are labeled.`,build:se},{name:`pity`,title:`Pity`,hint:`Six crystals and no Icebreaker. Place the three singles. The third one is a gift.`,build:N},{name:`icegroup`,title:`Ice group`,hint:`The cluster is connected. The loose crystal touches it on a corner only.`,build:P},{name:`bomb-edge`,title:`Bomb edge`,hint:`Bomb is armed on the corner. Gummies inside the clipped 4×4 go. The ones just outside stay.`,aim:`bomb`,anchor:{row:0,col:0},build:F},{name:`bomb-mid`,title:`Bomb mid`,hint:`Bomb is armed mid-board. The window sits one cell up and left of the tap.`,aim:`bomb`,anchor:{row:5,col:3},build:I},{name:`ages`,title:`Ages`,hint:`Four gummies, ages 0 through 3, for the mobile age check.`,build:L}];function z(e){return T.includes(e)}function B(e){return R.find(t=>t.name===e)??null}var V=`shatterpop-qa-panel`,H=null,U=p(e()),W=`qa`,G=!1,K=!1,q=null,J={getItem(e){try{return localStorage.getItem(e)}catch{return null}},setItem(e,t){try{localStorage.setItem(e,t)}catch{}}};function ce(n){let s=a(window.location),l=t(s),u=o(s),d=r(s);if(l||u||d){if(H=n,d&&(c(!0),U=ee(J,e()),i.showMarks=()=>K,i.onAction=e=>{e<=0||(U=_(U,e),m(J,U))},i.takePending=()=>{let e=te(U);return U=e.wallet,m(J,U),{icebreakers:e.icebreakers,bombs:e.bombs}},i.afterRender=()=>{X(),Z()},X()),l){let e=new URLSearchParams(window.location.search).get(`shot`);e&&z(e)?Y(e):u&&n.render()}else u&&n.render()}}function Y(e){let t=B(e);t&&H&&(q=t.name,H.replaceGame(t.build(),{hint:t.hint,aim:t.aim}),Z())}function X(){if(!document.getElementById(`shatterpop-qa-style`)){let e=document.createElement(`style`);e.id=`shatterpop-qa-style`,e.textContent=me,document.head.appendChild(e)}if(document.getElementById(V))return;let e=document.createElement(`aside`);e.id=V,e.addEventListener(`click`,le),document.body.appendChild(e),Z()}function Z(){let e=document.getElementById(V);e&&(e.innerHTML=G?ue():de())}function le(t){let n=t.target;if(!(n instanceof Element))return;let r=n.closest(`[data-tab],[data-seed],[data-act]`);if(!r)return;let a=r.getAttribute(`data-tab`);if(a===`dev`||a===`qa`){W=a,G=!1,Z();return}let o=r.getAttribute(`data-seed`);if(o){Y(o);return}let s=r.getAttribute(`data-act`);if(s===`collapse`)G=!0,Z();else if(s===`expand`)G=!1,Z();else if(s===`add`){let t=e().sandbox.qaGrantCoins;U=g(U,t,`Grant ${t}`),m(J,U),Q()}else if(s===`reset-store`)i.resetStore?.(),Z();else if(s===`end-run`)i.endRun?.();else if(s===`reset-coins`)U=ne(U,e().sandbox.coins.starting),m(J,U),Q();else if(s===`ads`)U=h(U,!U.removeAds),m(J,U),Z();else if(s===`grant-coins`){let t=e().sandbox.qaGrantCoins;U=g(U,t,`QA grant ${t}`),m(J,U),Q()}else s===`grant-ice`?H?.grantTool(`ice`):s===`grant-bomb`?H?.grantTool(`bomb`):s===`marks`?(K=!K,H?.render()):s===`reset-board`&&(q&&z(q)?Y(q):H?.freshGame())}function Q(){Z()}function ue(){return`<button type="button" class="qa-pill" data-act="expand">QA</button>`}function de(){let t=e().sandbox,n=U.pendingIcebreakers+U.pendingBombs;return`<div class="qa-panel">
    <header class="qa-bar">
      <strong>Sandbox</strong>
      <button type="button" data-tab="dev" aria-pressed="${W===`dev`}">Dev</button>
      <button type="button" data-tab="qa" aria-pressed="${W===`qa`}">QA</button>
      <button type="button" data-act="collapse" aria-label="Hide panel">Hide</button>
    </header>
    ${W===`dev`?fe(t.qaGrantCoins,n):pe()}
  </div>`}function fe(e,t){let n=U.log.map(e=>`<li><span>${$(e.label)}</span><b>${e.delta>0?`+${e.delta}`:e.delta}</b><em>${e.balance}</em></li>`).join(``);return`<div class="qa-page">
    <p>Balance <strong>${U.coins}</strong></p>
    <p>removeAds <strong>${U.removeAds?`on`:`off`}</strong></p>
    ${t?`<p>Next run +${U.pendingIcebreakers} Icebreaker, +${U.pendingBombs} Bomb</p>`:``}
    <div class="qa-actions">
      <button type="button" data-act="add">Add ${e} coins</button>
      <button type="button" data-act="reset-coins">Reset coins</button>
      <button type="button" data-act="reset-store">Reset test wallet</button>
      <button type="button" data-act="ads">Toggle removeAds</button>
    </div>
    <h3>Purchase log</h3>
    ${n?`<ul class="qa-log">${n}</ul>`:`<p class="qa-note">No purchases yet.</p>`}
  </div>`}function pe(){return`<div class="qa-page">
    <div class="qa-seeds">${R.map(e=>`<button type="button" data-seed="${e.name}" aria-pressed="${q===e.name}">${$(e.title)}</button>`).join(``)}</div>
    <div class="qa-actions">
      <button type="button" data-act="grant-coins">Grant coins</button>
      <button type="button" data-act="grant-ice">Grant Icebreaker</button>
      <button type="button" data-act="grant-bomb">Grant Bomb</button>
      <button type="button" data-act="marks">${K?`Hide HP and age`:`Show HP and age`}</button>
      <button type="button" data-act="reset-board">Reset board</button>
      <button type="button" data-act="end-run">End run</button>
    </div>
  </div>`}function $(e){return e.replace(/[&<>"']/g,e=>e===`&`?`&amp;`:e===`<`?`&lt;`:e===`>`?`&gt;`:e===`"`?`&quot;`:`&#39;`)}var me=`
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
.cell:has(.qa-mark) { container-type: inline-size; }
.qa-mark {
  position: absolute;
  z-index: 8;
  top: 5%;
  left: 5%;
  max-width: 90%;
  font-size: 36cqi;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
  color: #1c102b;
  background: #ffc94d;
  box-shadow: 0 0 0 1px #1c102b;
  border-radius: 0.18em;
  padding: 0.06em 0.16em 0.02em;
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
`;export{ce as installQa};