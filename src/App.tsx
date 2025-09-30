import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Button from './components/Button';
import './App.css';

const components = [
  { name: 'Button', path: '/button' },
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
            <Route path="/" element={<span className="nexus-welcome">Welcome! Select a component to test.</span>} />
            <Route path="/button" element={
              <div style={{ display: 'flex', gap: '1em', alignItems: 'center', flexWrap: 'wrap' }}>
                <Button label="Primary Button" onClick={() => alert('Primary clicked!')} variant="primary" />
                <Button label="Secondary Button" onClick={() => alert('Secondary clicked!')} variant="secondary" />
                <Button label="Tertiary Button" onClick={() => alert('Tertiary clicked!')} variant="tertiary" />
                <Button label="Danger Button" onClick={() => alert('Danger clicked!')} variant="danger" />
                <Button label="Success Button" onClick={() => alert('Success clicked!')} variant="success" />
                <Button label="Warning Button" onClick={() => alert('Warning clicked!')} variant="warning" />
                <Button label="Disabled Button" onClick={() => {}} variant="primary" disabled />
                <Button label="Loading Button" onClick={() => {}} variant="primary" loading />
                <Button icon={<span style={{fontSize: '1.2em'}}>★</span>} onClick={() => alert('Icon clicked!')} variant="icon" />
              </div>
            } />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
