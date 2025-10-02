import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import './App.css';

const components = [
  { name: 'Button', path: '/button' },
  { name: 'Card', path: '/card' },
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
                <Button variant="primary" onClick={() => alert('Primary clicked!')}>Primary Button</Button>
                <Button variant="secondary" onClick={() => alert('Secondary clicked!')}>Secondary Button</Button>
                <Button variant="tertiary" onClick={() => alert('Tertiary clicked!')}>Tertiary Button</Button>
                <Button variant="danger" onClick={() => alert('Danger clicked!')}>Danger Button</Button>
                <Button variant="success" onClick={() => alert('Success clicked!')}>Success Button</Button>
                <Button variant="warning" onClick={() => alert('Warning clicked!')}>Warning Button</Button>
                <Button variant="primary" disabled>Disabled Button</Button>
                <Button variant="primary" loading>Loading Button</Button>
                <Button variant="icon" icon={<span style={{fontSize: '1.2em'}}>★</span>} onClick={() => alert('Icon clicked!')} />
              </div>
            } />
            <Route path="/card" element={
              <div className='nexus-content'>
                <Card
                  image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                  title="Project Alpha"
                  description="A modern web app for managing tasks and productivity."
                  link=""
                  linkLabel="View Alpha"
                />
                <Card
                  image="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                  title="Project Beta"
                  description="A collaborative platform for creative teams."
                  link=""
                  linkLabel="View Beta"
                />
              </div>
            } />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
