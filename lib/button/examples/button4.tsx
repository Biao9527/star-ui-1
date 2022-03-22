import Button from '../button';
import React from 'react';

const Button4 = () => {
  return (
    <div>
      <Button disabled>button</Button>
      <Button>button</Button>
      <br/>
      <Button disabled theme="dashed">button</Button>
      <Button theme="dashed">button</Button>
      <br/>
      <Button disabled theme="link">button</Button>
      <Button theme="link">button</Button>
      <br/>
      <Button disabled theme="text">button</Button>
      <Button theme="text">button</Button>
    </div>
  );
};

export default Button4;