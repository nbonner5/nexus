import Card from '../../components/Card/Card';

const CardDemo = ({ theme }: { theme: 'light' | 'dark' }) => (
  <div style={{ display: 'flex', gap: '2em', justifyContent: 'center', alignItems: 'stretch', flexWrap: 'nowrap' }}>
    <Card
      image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
      title="Project Alpha"
      description="A modern web app for managing tasks and productivity."
      link="https://example.com/project-alpha"
      linkLabel="View Alpha"
      theme={theme}
    />
    <Card
      image="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
      title="Project Beta"
      description="A collaborative platform for creative teams."
      link="https://example.com/project-beta"
      linkLabel="View Beta"
      theme={theme}
    />
    <Card
      image="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
      title="Project Gamma"
      description="This project is a comprehensive solution for remote teams, offering advanced features for communication, file sharing, project tracking, and more. With a robust API, customizable dashboards, and real-time notifications, Gamma helps teams stay productive and connected across time zones."
      link="https://example.com/project-gamma"
      linkLabel="View Gamma"
      theme={theme}
    />
  </div>
);

export default CardDemo;
