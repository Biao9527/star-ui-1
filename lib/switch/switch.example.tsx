import React from 'react';
import Demo from '../../demo';
import Switch1 from './examples/switch1';
import Switch2 from './examples/switch2';
import Switch3 from './examples/switch3';

const SwitchExample: React.FC = () => {
  return (
    <div>
      <Demo
        title="基本"
        code={require('!!raw-loader!./examples/switch1.tsx').default}>
        <Switch1/>
      </Demo>
      <Demo
        title="Size"
        code={require('!!raw-loader!./examples/switch2.tsx').default}>
        <Switch2/>
      </Demo>
      <Demo
        title="Disabled"
        code={require('!!raw-loader!./examples/switch3.tsx').default}>
        <Switch3/>
      </Demo>
    </div>
  );
};

export default SwitchExample;