
export type Tokens = Record<string, any>;

export async function loadTokens(url = "/island.tokens.json"): Promise<Tokens> {
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    console.warn("Failed to load tokens, falling back to defaults", e);
    return {};
  }
}

export function applyCssVariables(tokens: Tokens) {
  const root = document.documentElement;
  const color = tokens.color || {};
  for (const [k, v] of Object.entries(color)) {
    root.style.setProperty(`--si-${k.replace(/([A-Z])/g, "-$1").toLowerCase()}`, String(v));
  }
}
