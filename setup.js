import fs from 'fs';
import path from 'path';

const files = {
  "package.json": `{
  "name": "a-m-dent-dental-solutions",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.300.0",
    "react": "^19.0.0",
    "react-countup": "^6.1.1",
    "react-dom": "^19.0.0",
    "react-helmet-async": "^2.0.4",
    "react-hook-form": "^7.50.1",
    "react-router-dom": "^6.22.1",
    "sonner": "^1.4.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "vite": "^5.1.4"
  }
}`,
  "vite.config.js": `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});`,
  "tailwind.config.js": `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#38BDF8",
        accent: "#0EA5E9",
        bgLight: "#F8FAFC",
        textDark: "#0F172A",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}`,
  "postcss.config.js": `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`,
  "index.html": `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <title>A M Dent Dental Solutions</title>
  </head>
  <body class="bg-[#F8FAFC] text-[#0F172A] antialiased overflow-x-hidden">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`,
  "src/main.jsx": `import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)`,
  "src/styles/index.css": `@tailwind base;
@tailwind components;
@tailwind utilities;

.glass-panel {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 30px -10px rgba(15, 23, 42, 0.05);
}`,
  "src/constants/data.js": `export const TREATMENTS_DATA = [
  { id: "root-canal", title: "Root Canal Treatment", shortDesc: "Micro-endodontic therapy designed to save biological teeth.", description: "Our micro-endodontic therapy clears deep chamber pathogens.", icon: "Activity", benefits: ["Pain elimination", "Structural integrity"], procedure: "Sonic disinfection.", duration: "1-2 sittings", recovery: "24-48 hours", faqs: [] },
  { id: "dental-implants", title: "Dental Implants", shortDesc: "Osseointegrated titanium anchors.", description: "Premium computer-guided implant installations.", icon: "Shield", benefits: ["No adjacent tooth damage"], procedure: "3D planning and surgery.", duration: "3-6 months", recovery: "3-5 days", faqs: [] }
];
export const TESTIMONIALS_DATA = [
  { name: "Rajesh K. Malhotra", role: "Executive", text: "Completely pain-free dental implants.", rating: 5 },
  { name: "Priyanka Deshmukh", role: "Engineer", text: "Saved my tooth with advanced RCT.", rating: 5 }
];
export const DOCTORS_DATA = [
  { id: "dr-anand", name: "Dr. Anand Mishra", title: "Chief Implantologist", bio: "14+ years experience.", education: ["MDS"], skills: ["Implants"], achievements: ["4000+ cases"] }
];`,
  "src/App.jsx": `import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="min-h-screen relative bg-bgLight">
      <Navbar />
      <Toaster position="top-center" richColors />
      <main className="pt-24 min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;`,
  "src/components/layout/Navbar.jsx": `import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-primary">A M Dent</Link>
        <div className="space-x-4 text-sm font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}`,
  "src/components/layout/Footer.jsx": `import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-textDark text-slate-400 py-8 text-center text-xs">
      <p>&copy; ${new Date().getFullYear()} A M Dent Dental Solutions. All rights reserved.</p>
    </footer>
  );
}`,
  "src/pages/Home.jsx": `import React from 'react';
import { TREATMENTS_DATA } from '../constants/data';
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 space-y-16 py-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight text-textDark">Healthy Smiles. <span className="text-primary">Modern Care.</span></h1>
        <p className="text-slate-500 max-w-xl mx-auto">Premium dental solutions located in Rohini Sector 24, Delhi near Lalaji Chaat Corner.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TREATMENTS_DATA.map(t => (
          <div key={t.id} className="glass-card p-6 rounded-2xl">
            <h3 className="font-bold text-lg mb-2">{t.title}</h3>
            <p className="text-sm text-slate-500">{t.shortDesc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
  "src/pages/About.jsx": `import React from 'react';
export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-center space-y-4">
      <h1 className="text-3xl font-bold">About Our Clinic</h1>
      <p className="text-slate-600 font-light">A M Dent Dental Solutions focuses on premium, high-tech, and pain-free treatments for all patients.</p>
    </div>
  );
}`
};

// Write files to directory architecture
Object.entries(files).forEach(([filePath, content]) => {
  const fullPath = path.join(process.cwd(), filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim());
});

console.log("✅ All clinic production folders and files written cleanly successfully!");