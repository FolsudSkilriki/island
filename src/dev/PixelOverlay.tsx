
import React, { useMemo, useState, useEffect } from "react";

function useQueryParam(name: string) {
  const [value, setValue] = useState<string | null>(null);
  useEffect(() => {
    const url = new URL(window.location.href);
    const v = url.searchParams.get(name);
    setValue(v);
  }, []);
  return value;
}

export default function PixelOverlay() {
  const src = useQueryParam("overlay");
  const [visible, setVisible] = useState<boolean>(!!src);
  const [opacity, setOpacity] = useState<number>(0.5);

  useEffect(() => {
    if (src) setVisible(true);
  }, [src]);

  if (!src) return null;

  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2147483646,
          backgroundImage: `url(${src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "contain",
          opacity: visible ? opacity : 0,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          left: 12,
          bottom: 12,
          zIndex: 2147483647,
          padding: 12,
          borderRadius: 12,
          border: "1px solid #ddd",
          background: "#fff",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica, Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            onClick={() => setVisible(v => !v)}
            style={{ padding: "6px 10px", borderRadius: 8, border: "1px solid #ddd", background: "#f8f8f8" }}
          >
            {visible ? "Hide" : "Show"}
          </button>
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            Opacity
            <input type="range" min={0} max={1} step={0.01}
              value={opacity}
              onChange={(e) => setOpacity(parseFloat(e.target.value) || 0)}
              style={{ width: 160 }}
            />
            <span>{Math.round(opacity * 100)}%</span>
          </label>
        </div>
        <div style={{ marginTop: 6, fontSize: 12, opacity: 0.7 }}>
          Add <code>?overlay=/reference/home@3x.png</code> to the URL.
        </div>
      </div>
    </>
  );
}
