import React from 'react';
import Button1 from './examples/button1';
import Button2 from './examples/button2';
import Button3 from './examples/button3';
import Button4 from './examples/button4';
import Button5 from './examples/button5';
import Demo from '../../demo';

const buttonExample = () => {
  return (
    <div>
      <h1>Button</h1>
      <Demo
        title='Type'
        code={require('!!raw-loader!./examples/button1.tsx').default}>
        <Button1/>
      </Demo>
      <Demo
        title='Size'
        code={require('!!raw-loader!./examples/button2.tsx').default}>
        <Button2/>
      </Demo>

      <Demo
        title='Level'
        code={require('!!raw-loader!./examples/button3.tsx').default}>
        <Button3/>
      </Demo>

      <Demo
        title='Disabled'
        code={require('!!raw-loader!./examples/button4.tsx').default}>
      <Button4/>
      </Demo>

      <Demo
        title='Loading'
        code={require('!!raw-loader!./examples/button5.tsx').default}>
        <Button5/>
      </Demo>
    </div>
  );
};
export default buttonExample;