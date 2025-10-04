import Button from '../../components/Button/Button';

const ButtonDemo = () => (
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
);

export default ButtonDemo;
