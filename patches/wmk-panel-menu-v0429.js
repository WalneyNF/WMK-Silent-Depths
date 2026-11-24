/* WMK Silent Depths v0.4.29 — Menu Painéis para integração em almirante.html.
   Walney Moreira Klein — walneyk@hotmail.com · MIT
   Uso: incluir <script src="wmk-panel-menu.js"></script> ao final do body,
   criar botão wmkPanelsButton e elemento wmkPanelMenu em header.
   CSS requer .wmk-panel-hidden{display:none!important}
   Código correspondente está integrado no pacote ZIP v0.4.29. */
(()=>{'use strict';
const P=[['orders','Ordens do Almirante'],['airOps','Aviação embarcada'],['fleetControls','Frota e câmeras'],['squadControls','Esquadrões RTS'],['trainingControls','Campo de treinamento'],['attackAssistantPanel','Assistente de ataque'],['wmkMinimap','Sonar circular'],['wmkImpactPanel','Histórico de impactos']];
const KEY='wmk.panel.visibility.v0429', $=id=>document.getElementById(id);
let visible={};try{visible=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch{}
const menu=$('wmkPanelMenu'),toggle=$('wmkPanelsButton');if(!menu||!toggle)return;
function save(){try{localStorage.setItem(KEY,JSON.stringify(visible))}catch{}}
function apply(id,show){const el=$(id);if(!el)return;visible[id]=!!show;el.classList.toggle('wmk-panel-hidden',!show);const b=menu.querySelector('[data-wmk-panel="'+id+'"]');if(b){b.setAttribute('aria-checked',String(!!show));b.querySelector('span').textContent=show?'☑':'☐';}save()}
for(const [id,label] of P){const el=$(id);if(!el)continue;
 const row=document.createElement('button');row.type='button';row.className='wmk-panel-menu-item';row.dataset.wmkPanel=id;row.setAttribute('role','menuitemcheckbox');const ico=document.createElement('span'),name=document.createElement('b');name.textContent=label;row.append(ico,name);row.addEventListener('click',()=>apply(id,!visible[id]));menu.append(row);
 const head=el.querySelector('.float-head,.wmk-assist-head,.wmk-minimap-head');
 const close=document.createElement('button');close.type='button';close.className='wmk-panel-close';close.textContent='×';close.title='Fechar '+label;close.addEventListener('pointerdown',e=>e.stopPropagation());close.addEventListener('click',e=>{e.stopPropagation();apply(id,false)});
 if(head)head.append(close);else el.append(close);
 apply(id,Object.prototype.hasOwnProperty.call(visible,id)?visible[id]:false)
}
toggle.addEventListener('click',e=>{e.stopPropagation();menu.hidden=!menu.hidden;toggle.setAttribute('aria-expanded',String(!menu.hidden))});
document.addEventListener('pointerdown',e=>{if(!menu.contains(e.target)&&!toggle.contains(e.target))menu.hidden=true});
$('wmkShowAllPanels')?.addEventListener('click',()=>P.forEach(([id])=>apply(id,true)));
$('wmkHideAllPanels')?.addEventListener('click',()=>P.forEach(([id])=>apply(id,false)));
window.WMKPanelMenu={show:id=>apply(id,true),hide:id=>apply(id,false),visible:id=>!!visible[id]};
})();
