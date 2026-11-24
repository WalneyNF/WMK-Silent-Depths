/* WMK Silent Depths v0.4.28 — patch didático da área de bombardeio.
 * Walney Moreira Klein — walneyk@hotmail.com · MIT
 * Este arquivo mostra a lógica aplicada na versão ZIP do jogo.
 * Para integração completa, ver combat-arcade.js + almirante.js do pacote. */
(function(root){
 "use strict";
 const C=root.WMKArcadeCombat;
 if(!C)return;
 // Predição da elipse para um esquadrão. Cada bomba mantém trajetória independente.
 // A prévia individual precisa usar a mesma velocidade horizontal do lançamento.
 const original=C.preview.bind(C);
 function bombPreview(source,slot=0,count=1){
  const p=original(source,"bombas",null,slot,count);
  const heading=source.heading||0,fx=Math.sin(heading),fz=Math.cos(heading);
  const side=slot-(count-1)/2,rx=fz,rz=-fx;
  const speed=Math.max(65,source.speed||0);
  p.vx=fx*speed+side*2.5*rx;
  p.vz=fz*speed+side*2.5*rz;
  p.center={x:source.x+fx*speed*p.fallTime,z:source.z+fz*speed*p.fallTime};
  p.radiusX=Math.max(36,28+p.fallTime*8);
  p.radiusZ=Math.max(52,42+p.fallTime*12);
  return p;
 }
 function previewBombFormation(units){
  const active=(units||[]).filter(u=>(u.hp===undefined||u.hp>0)&&!["deck","landing","returning","queued","holding-recovery"].includes(u.airState));
  if(!active.length)return null;
  const members=active.map((u,i)=>bombPreview(u,i,active.length));
  const x=members.reduce((sum,p)=>sum+p.center.x,0)/members.length;
  const z=members.reduce((sum,p)=>sum+p.center.z,0)/members.length;
  return {kind:"bombas",center:{x,z},radiusX:Math.max(60,...members.map(p=>Math.abs(p.center.x-x)+p.radiusX)),
    radiusZ:Math.max(70,...members.map(p=>Math.abs(p.center.z-z)+p.radiusZ)),
    fallTime:Math.max(...members.map(p=>p.fallTime)),members};
 }
 C.previewBombFormation=previewBombFormation;
 root.WMKBombPreviewV0428={bombPreview,previewBombFormation};
})(typeof window!=="undefined"?window:globalThis);
