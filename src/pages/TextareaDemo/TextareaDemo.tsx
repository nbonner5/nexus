import Textarea from '../../components/Textarea/Textarea';

const TextareaDemo = () => (
  <div style={{ display: 'flex', gap: '2em', justifyContent: 'center', alignItems: 'stretch', flexWrap: 'nowrap' }}>
    <Textarea label="About You" placeholder="Tell us about yourself..." rows={4} />
    <Textarea label="Feedback" placeholder="Your feedback is valuable to us..." rows={4} />
    <Textarea label="Disabled Textarea" placeholder="Can't type here" rows={4} disabled />
  </div>
);

export default TextareaDemo;
