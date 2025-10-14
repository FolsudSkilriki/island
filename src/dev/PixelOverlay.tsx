import React, { useEffect, useState } from "react";
export default function PixelOverlay(){
  const params = typeof window!=="undefined" ? new URLSearchParams(window.location.search) : null;
  const src = params?.get("overlay") || "";
  const [visible,setVisible]=useState(false);
  const [opacity,setOpacity]=useState(0.5);
  useEffect(()=>{ if(src) setVisible(true); },[src]);
  if(!src) return null;
  return <>
    {visible && <div style={{position:"fixed",inset:0,backgroundImage:`url(${src})`,backgroundRepeat:"no-repeat",backgroundPosition:"top center",backgroundSize:"contain",opacity,pointerEvents:"none",zIndex:2147483646}}/>}
    <div style={{position:"fixed",left:12,bottom:12,display:"flex",gap:12,alignItems:"center",padding:"10px 12px",background:"#fff",border:"1px solid #ddd",borderRadius:12,zIndex:2147483647}}>
      <button onClick={()=>setVisible(v=>!v)} style={{padding:"6px 10px",borderRadius:8,border:"1px solid #ccc",background:"#f8f8f8"}}>{visible?"Hide overlay":"Show overlay"}</button>
      <label style={{display:"flex",alignItems:"center",gap:8}}>
        Opacity {Math.round(opacity*100)}%
        <input type="range" min={0} max={1} step={0.01} value={opacity} onChange={e=>setOpacity(parseFloat(e.target.value))}/>
      </label>
    </div>
  </>;
}
