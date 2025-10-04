import Input from '../../components/Input/Input';

const InputDemo = () => (
  <div style={{ display: 'flex', gap: '2em', justifyContent: 'center', alignItems: 'stretch', flexWrap: 'nowrap' }}>
    <Input label="Username" placeholder="Enter your username" />
    <Input label="Email" type="email" placeholder="Enter your email" />
    <Input label="Password" type="password" placeholder="Enter your password" />
    <Input label="Disabled Input" placeholder="Can't type here" disabled />
  </div>
);

export default InputDemo;
