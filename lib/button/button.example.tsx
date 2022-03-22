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
      <h2>Button</h2>
      <Demo code={require('!!raw-loader!./examples/button1.tsx').default}>
        <Button1/>
      </Demo>

      <h2>Size</h2>
      <Demo code={require('!!raw-loader!./examples/button2.tsx').default}>
        <Button2/>
      </Demo>

      <h2>Level</h2>
      <Demo code={require('!!raw-loader!./examples/button3.tsx').default}>
        <Button3/>
      </Demo>

      <h2>Disabled</h2>
      <Demo code={require('!!raw-loader!./examples/button4.tsx').default}>
      <Button4/>
      </Demo>

      <h2>Loading</h2>
      <Demo code={require('!!raw-loader!./examples/button5.tsx').default}>
        <Button5/>
      </Demo>
    </div>
  );
};
export default buttonExample;