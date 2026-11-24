/* WMK Impact FX v0.4.27 — feedback arcade didático.
   Walney Moreira Klein — walneyk@hotmail.com · MIT.
   Apenas efeitos fictícios para jogos. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.WMKImpactFX=api;})(typeof window!=='undefined'?window:globalThis,function(){'use strict';
const COLORS={foguetes:0xffc34e,torpedos:0x57d7ff,bombas:0xff8438,sinalizadores:0x7ff9cf};
const LABELS={foguetes:'FOGUETE',torpedos:'TORPEDO',bombas:'BOMBA',sinalizadores:'SINALIZADOR'};
function describe(kind,damage,targetId){return {kind:kind||'foguetes',damage:Math.max(0,Math.round(Number(damage)||0)),targetId:String(targetId||'ALVO'),text:'-'+Math.max(0,Math.round(Number(damage)||0))+' HP'};}
function create(scene,THREE,container){const active=[],history=[];let audio=null;const maxActive=360;
 function tone(kind,underwater=false){try{const A=window.AudioContext||window.webkitAudioContext;if(!A)return;audio=audio||new A();if(audio.state==='suspended')audio.resume().catch(()=>{});const now=audio.currentTime;
  const base={foguetes:220,torpedos:95,bombas:150,sinalizadores:430}[kind]||180;
  for(let i=0;i<2;i++){const osc=audio.createOscillator(),gain=audio.createGain();osc.type=i?'triangle':'sawtooth';const freq=base*(i?1.55:1);osc.frequency.setValueAtTime(freq,now);osc.frequency.exponentialRampToValueAtTime(Math.max(35,freq*.26),now+.32);gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(i?.028:.065,now+.013);gain.gain.exponentialRampToValueAtTime(.0001,now+.42);osc.connect(gain).connect(audio.destination);osc.start(now);osc.stop(now+.45);}
 }catch(err){ /* Sem áudio, o jogo continua funcionando. */ }}
 function floatingDamage(x,y,z,info){const canvas=document.createElement('canvas');canvas.width=512;canvas.height=168;const ctx=canvas.getContext('2d');ctx.clearRect(0,0,512,168);ctx.font='bold 82px Arial';ctx.textAlign='center';ctx.lineWidth=12;ctx.strokeStyle='#06131e';ctx.strokeText(info.text,256,103);ctx.fillStyle='#ffe16c';ctx.fillText(info.text,256,103);ctx.font='bold 27px Arial';ctx.fillStyle='#ffffff';ctx.fillText(info.targetId+' · '+(LABELS[info.kind]||'IMPACTO'),256,145);
  const texture=new THREE.CanvasTexture(canvas);const material=new THREE.SpriteMaterial({map:texture,depthTest:false,depthWrite:false,transparent:true});const mesh=new THREE.Sprite(material);mesh.position.set(x,y+30,z);mesh.scale.set(95,31,1);scene.add(mesh);active.push({mesh,texture,life:2.0,initial:2.0,kind:'text',vy:19});}
 function sphere(x,y,z,color,speed,index){const material=new THREE.MeshBasicMaterial({color,transparent:true,opacity:.95,depthWrite:false});const mesh=new THREE.Mesh(new THREE.SphereGeometry(index%3===0?1.9:1.1,6,5),material);mesh.position.set(x,y,z);scene.add(mesh);const angle=index*2.39996,tilt=(index%7)/6;const vx=Math.cos(angle)*speed*(.5+tilt),vz=Math.sin(angle)*speed*(.5+tilt),vy=9+(index%5)*4;active.push({mesh,life:1.25,initial:1.25,kind:'particle',vx,vy,vz});}
 function ring(x,z,color){const mat=new THREE.MeshBasicMaterial({color,transparent:true,opacity:.7,depthWrite:false,side:THREE.DoubleSide});const mesh=new THREE.Mesh(new THREE.RingGeometry(2,3.2,28),mat);mesh.rotation.x=-Math.PI/2;mesh.position.set(x,.7,z);scene.add(mesh);active.push({mesh,kind:'ring',life:1.0,initial:1.0});}
 function cleanup(a){scene.remove(a.mesh);a.mesh.geometry?.dispose?.();a.mesh.material?.dispose?.();a.texture?.dispose?.();}
 function registerHit(kind,x,y,z,damage,targetId){const info=describe(kind,damage,targetId);tone(info.kind);floatingDamage(x,y,z,info);ring(x,z,COLORS[info.kind]||0xffffff);
  const count=info.kind==='bombas'?28:info.kind==='torpedos'?23:16;
  for(let i=0;i<count;i++)sphere(x,y,z,i%3?COLORS[info.kind]:0xffffff,info.kind==='bombas'?34:24,i);
  history.unshift({...info,time:Date.now()});history.length=Math.min(history.length,8);if(container){const el=document.createElement('div');el.className='wmk-hit-row';el.innerHTML='<b></b><span></span>';el.querySelector('b').textContent=info.text;el.querySelector('span').textContent=info.targetId+' · '+(LABELS[info.kind]||'IMPACTO');container.prepend(el);while(container.children.length>6)container.lastElementChild.remove();}
  while(active.length>maxActive)cleanup(active.shift());return info;}
 function splash(kind,x,z){tone(kind,true);ring(x,z,kind==='torpedos'?0x9deeff:0xc3d4e3);for(let i=0;i<9;i++)sphere(x,.8,z,0x9cdfff,11,i);}
 function update(dt){for(let i=active.length-1;i>=0;i--){const a=active[i];a.life-=dt;const t=Math.min(1,1-a.life/a.initial);if(a.kind==='text'){a.mesh.position.y+=dt*a.vy;a.mesh.material.opacity=Math.max(0,1-t);}else if(a.kind==='ring'){a.mesh.scale.setScalar(1+22*t);a.mesh.material.opacity=Math.max(0,.7*(1-t));}else{a.mesh.position.x+=a.vx*dt;a.mesh.position.z+=a.vz*dt;a.mesh.position.y+=a.vy*dt;a.vy-=29*dt;a.mesh.material.opacity=Math.max(0,1-t);}if(a.life<=0){cleanup(a);active.splice(i,1);}}}
 function clear(){active.forEach(cleanup);active.length=0;history.length=0;if(container)container.replaceChildren();}
 return {registerHit,splash,update,clear,history};}
return {create,describe,COLORS};
});