import { loadAndApplyTokens } from "./design-tokens";
import PixelOverlay from "./dev/PixelOverlay";
loadAndApplyTokens().catch(() => {});
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
