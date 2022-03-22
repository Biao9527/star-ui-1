import React from 'react';
import Demo from '../../demo';
import Dialog1 from './examples/dialog1';
import Dialog2 from './examples/dialog2';
import Dialog3 from './examples/dialog3';

const dialogExample: React.FC = () => {

  return (
    <div>
      <Demo
        title="Dialog"
        code={require('!!raw-loader!./examples/dialog1.tsx').default}>
        <Dialog1/>
      </Demo>
      <Demo
        title="Alert"
        code={require('!!raw-loader!./examples/dialog2.tsx').default}>
        <Dialog2/>
      </Demo>
      <Demo
        title="一键 Alert"
        code={require('!!raw-loader!./examples/dialog3.tsx').default}>
        <Dialog3/>
      </Demo>
    </div>
  );
};

export default dialogExample;