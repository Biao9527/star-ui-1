import React from 'react';
import './layout.example.scss';
import Demo from '../../demo';
import Layout1 from './examples/layout1';
import Layout2 from './examples/layout2';
import Layout3 from './examples/layout3';
import Layout4 from './examples/layout4';

const layoutExample: React.FC = () => {
  return (
    <div>
      <Demo
        title='例子一'
        code={require('!!raw-loader!./examples/layout1.tsx').default}>
        <Layout1/>
      </Demo>
      <Demo
        title='例子二'
        code={require('!!raw-loader!./examples/layout2.tsx').default}>
        <Layout2/>
      </Demo>
      <Demo
        title='例子三'
        code={require('!!raw-loader!./examples/layout3.tsx').default}>
        <Layout3/>
      </Demo>
      <Demo
        title='例子四'
        code={require('!!raw-loader!./examples/layout4.tsx').default}>
        <Layout4/>
      </Demo>
    </div>

  );
};

export default layoutExample;