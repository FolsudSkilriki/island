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
