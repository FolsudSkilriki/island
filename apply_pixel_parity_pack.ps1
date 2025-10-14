$ErrorActionPreference = "Stop"

$root = "."
New-Item -ItemType Directory -Force -Path "$root/src/dev","$root/src","$root/public","$root/public/reference" | Out-Null

@'
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
'@ | Set-Content "$root/src/dev/PixelOverlay.tsx" -Encoding UTF8

@'
export async function loadAndApplyTokens(url="/island.tokens.json"){
  try{
    const r = await fetch(url, { cache: "no-store" });
    if(!r.ok) return;
    const tokens = await r.json();
    applyTokens(tokens);
  }catch{}
}
export function applyTokens(tokens:any){
  const root = document.documentElement;
  const flat = (o:any,p:string=""): [string, any][] =>
    Object.entries(o||{}).flatMap(([k,v]:any)=>
      v && typeof v==="object" && !Array.isArray(v) ? flat(v, p?`${p}-${k}`:k) : [[p?`${p}-${k}`:k, v]]
    );
  for(const [k,v] of flat(tokens)){
    if(typeof v === "string" || typeof v === "number"){
      root.style.setProperty(`--si-${k}`, String(v));
    }
  }
}
'@ | Set-Content "$root/src/design-tokens.ts" -Encoding UTF8

@'
{
  "color": {
    "text": "#111111",
    "bg": "#ffffff",
    "muted": "#6B7280",
    "brand": "#0A84FF",
    "border": "rgba(0,0,0,0.12)"
  },
  "radius": { "sm": "8px", "md": "12px", "lg": "16px", "xl": "24px" },
  "shadow": { "card": "0 2px 8px rgba(0,0,0,0.08)", "popover": "0 8px 24px rgba(0,0,0,0.12)" },
  "typography": {
    "body":    { "size": "17px", "line": "24px", "weight": 400, "tracking": "-0.1px" },
    "heading": { "size": "28px", "line": "34px", "weight": 600, "tracking": "-0.2px" }
  }
}
'@ | Set-Content "$root/public/island.tokens.json" -Encoding UTF8

# Deterministic CSS reset
$reset = @'
/* ===== Pixel-Deterministic Reset (added) ===== */
html, body { margin: 0; padding: 0; }
*, *::before, *::after { box-sizing: border-box; }
button, input, select, textarea { font: inherit; }
img, svg, video, canvas { display: block; }
html { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
:root { --si-text:#111111; --si-bg:#ffffff; --si-muted:#6b7280; --si-brand:#0a84ff; --si-radius:12px; --si-shadow-card:0 2px 8px rgba(0,0,0,0.08); }
body { background: var(--si-bg); color: var(--si-text); }
'@

$cssCandidates = @("src/index.css","src/styles/index.css","src/global.css","src/styles/globals.css","styles/globals.css")
$found = $null
foreach($f in $cssCandidates){ if(Test-Path "$root/$f"){ $found=$f; break } }
if($found){
  $existing = Get-Content "$root/$found" -Raw
  if($existing -notmatch "Pixel-Deterministic Reset \(added\)"){
    ($reset + "`n`n" + $existing) | Set-Content "$root/$found" -Encoding UTF8
  }
}else{
  $reset | Set-Content "$root/src/index.css" -Encoding UTF8
}

Write-Host "Pixel Parity Pack: done"
