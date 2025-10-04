import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home/Home';
import ButtonDemo from './pages/ButtonDemo/ButtonDemo';
import CardDemo from './pages/CardDemo/CardDemo';
import InputDemo from './pages/InputDemo/InputDemo';
import TextareaDemo from './pages/TextareaDemo/TextareaDemo';
import './App.css';

const components = [
  { name: 'Button', path: '/button' },
  { name: 'Card', path: '/card' },
  { name: 'Input', path: '/input' },
  { name: 'Textarea', path: '/textarea' },
  // Add more components here as needed
];

type ThemeMode = { mode: 'light' } | { mode: 'dark' };

function App() {
  const [theme, setTheme] = useState<ThemeMode>({ mode: 'light' });
  const handleToggle = () => setTheme(t => t.mode === 'light' ? { mode: 'dark' } : { mode: 'light' });

  return (
    <div className={`app-container${theme.mode === 'dark' ? ' app-dark' : ''}`}>
      <nav className="nexus-sidebar">
        <Link to="/" className="nexus-home">Components</Link>
        <ul>
          {components.map(c => (
            <li key={c.path}>
              <Link to={c.path} className="nexus-link">{c.name}</Link>
            </li>
          ))}
        </ul>
        <div className="nexus-mode-toggle">
          <span
            className="nexus-mode-icon"
            onClick={handleToggle}
            title={theme.mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{ cursor: 'pointer', fontSize: '1.6em', userSelect: 'none' }}
          >
            {theme.mode === 'dark' ? (
              // Sun icon for light mode
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5" fill="var(--accent)" />
                <g stroke="var(--accent)" strokeWidth="2">
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="22" y2="12" />
                  <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                  <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
                  <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
                  <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
                </g>
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 0 1 12.79 3a7 7 0 1 0 8.21 9.79z" fill="var(--accent)" stroke="var(--accent)" strokeWidth="2" />
              </svg>
            )}
          </span>
        </div>
      </nav>
      <main className="nexus-main">
        <div className="nexus-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/button" element={<ButtonDemo />} />
            <Route path="/card" element={<CardDemo theme={theme.mode} />} />
            <Route path="/input" element={<InputDemo />} />
            <Route path="/textarea" element={<TextareaDemo />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
