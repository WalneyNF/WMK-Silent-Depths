/* WMK Silent Depths v0.4.25 — corredor paralelo de torpedos.
 * Módulo autônomo de referência para integrar em combat-arcade.js.
 * Jogo fictício/arcade, não representa procedimentos reais.
 * Walney Moreira Klein — walneyk@hotmail.com — MIT
 */
(function(root,factory){const api=factory();if(typeof module==="object"&&module.exports)module.exports=api;root.WMKTorpedoCorridor=api;})(typeof window!=="undefined"?window:globalThis,function(){
"use strict";
const NORMAL_SPEED=85,GRAVITY=34,INITIAL_VERTICAL=-20;
function plan(leader,planes,halfWidth=38){
  const heading=leader.heading||0;
  const forward={x:Math.sin(heading),z:Math.cos(heading)};
  const right={x:Math.cos(heading),z:-Math.sin(heading)};
  const extent=Math.min(halfWidth*.53,26);
  const count=planes.length;
  return planes.map((plane,i)=>{
    const offset=count<=1?0:(i-(count-1)/2)*2*extent/(count-1);
    const y=Math.max(.1,(plane.y||90)-1);
    const fall=(INITIAL_VERTICAL+Math.sqrt(INITIAL_VERTICAL**2+2*GRAVITY*y))/GRAVITY;
    const leaderFall=(INITIAL_VERTICAL+Math.sqrt(INITIAL_VERTICAL**2+2*GRAVITY*Math.max(.1,(leader.y||90)-1)))/GRAVITY;
    const entryX=leader.x+forward.x*NORMAL_SPEED*leaderFall+right.x*offset;
    const entryZ=leader.z+forward.z*NORMAL_SPEED*leaderFall+right.z*offset;
    return {planeId:plane.id??String(i),origin:{x:plane.x,y:plane.y,z:plane.z},
      lane:offset,fallTime:fall,entry:{x:entryX,z:entryZ},
      fallingVelocity:{x:(entryX-plane.x)/fall,z:(entryZ-plane.z)/fall},
      waterVelocity:{x:forward.x*NORMAL_SPEED,z:forward.z*NORMAL_SPEED}
    };
  });
}
return {plan};
});