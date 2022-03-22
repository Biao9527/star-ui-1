import Button from '../button';
import React from 'react';

const Button3 = () => {
  return (
    <div>
      <Button level="main">button</Button>
      <Button>button</Button>
      <Button level="danger">button</Button>
      <br/>
      <Button theme="dashed" level="main">button</Button>
      <Button theme="dashed" level="normal">button</Button>
      <Button theme="dashed" level="danger">button</Button>
      <br/>
      <Button theme="link" level="main">button</Button>
      <Button theme="link" level="normal">button</Button>
      <Button theme="link" level="danger">button</Button>
      <br/>
      <Button theme="text" level="main">button</Button>
      <Button theme="text" level="normal">button</Button>
      <Button theme="text" level="danger">button</Button>
      <br/>
    </div>
  );
};

export default Button3;