import React from 'react';

const QuickUse = () => {
  return (
    <div className="markdown-body">
      <h2>开始使用</h2>
      <p>请先<a href="#/install">安装</a>本组件库。</p>
      <h3>引入</h3>
      <pre>
        <code>import React from 'react';</code><br/>
        <code>import ReactDOM from 'react-dom';</code><br/>
        <code>import {'{Button}'} from 'star-react-ui';</code>
      </pre>
      <h3>Vue 单文件组件</h3>
      <p>代码示例：</p>
      <pre>
        <code>ReactDOM.render(</code><br/>
         <code>  &lt;div&gt;</code><br/>
         <code>    &lt;Button&gt;Default&lt;/Button&gt;</code><br/>
         <code>  &lt;/div&gt;,</code> <br/>
         <code>  document.querySelector('#root'));</code>
      </pre>
    </div>
  );
};

export default QuickUse;