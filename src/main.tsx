
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { loadTokens, applyCssVariables } from './design-tokens'

await loadTokens().then(applyCssVariables);

const root = createRoot(document.getElementById("root")!);
const PixelOverlay = import.meta.env.DEV ? (await import('./dev/PixelOverlay.tsx')).default : null;

root.render(
  <>
    <App />
    {PixelOverlay ? <PixelOverlay /> : null}
  </>
);
