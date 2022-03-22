import Button from '../button';
import React from 'react';

const Button2 = () => {
  return (
    <div>
      <Button size="big">button</Button>
      <Button>button</Button>
      <Button size="small">button</Button>
      <br/>
      <Button theme="dashed" size="big">button</Button>
      <Button theme="dashed" size="normal">button</Button>
      <Button theme="dashed" size="small">button</Button>
      <br/>
      <Button theme="link" size="big">button</Button>
      <Button theme="link" size="normal">button</Button>
      <Button theme="link" size="small">button</Button>
      <br/>
      <Button theme="text" size="big">button</Button>
      <Button theme="text" size="normal">button</Button>
      <Button theme="text" size="small">button</Button>
    </div>
  );
};

export default Button2;