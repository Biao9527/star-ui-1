import Button from '../button';
import React from 'react';

const Button2 = () => {
  return (
    <div>
      <Button size="big">大大大</Button>
      <Button>普通通</Button>
      <Button size="small">小小小</Button>
      <br/>
      <Button theme="dashed" size="big">大大大</Button>
      <Button theme="dashed" size="normal">普通通</Button>
      <Button theme="dashed" size="small">小小小</Button>
      <br/>
      <Button theme="link" size="big">大大大</Button>
      <Button theme="link" size="normal">普通通</Button>
      <Button theme="link" size="small">小小小</Button>
      <br/>
      <Button theme="text" size="big">大大大</Button>
      <Button theme="text" size="normal">普通通</Button>
      <Button theme="text" size="small">小小小</Button>
    </div>
  );
};

export default Button2;