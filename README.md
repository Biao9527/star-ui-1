# Star UI

- 这是一个基于 React / TypeScript / Scss 开发的UI库。
- 本组件库仅供学习交流，请勿在生产环境中使用。

- 官网：https://biao9527.github.io/star-ui-website/

## 使用方法

### 安装

在项目中，使用终端执行以下命令

```
npm install star-react-ui
```

或者

```
yarn add star-react-ui
```

### 使用

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'star-react-ui';

ReactDOM.render(
  <div>
    <Button>Button</Button>
  </div>,
  document.querySelector('#root'));
```