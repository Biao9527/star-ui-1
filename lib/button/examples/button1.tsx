import Button from '../button';
import React from 'react';

const Button1 = () => {
  return (
    <div>
      <Button>button</Button>
      <Button theme="button">button</Button>
      <Button theme="dashed">button</Button>
      <Button theme="link">button</Button>
      <Button theme="text">button</Button>
    </div>
  );
};

export default Button1;