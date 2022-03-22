import Button from '../button';
import React from 'react';

const Button4 = () => {
  return (
    <div>
      <Button disabled>Disabled</Button>
      <Button>Button</Button>
      <br/>
      <Button disabled theme="dashed">Disabled</Button>
      <Button theme="dashed">Button</Button>
      <br/>
      <Button disabled theme="link">Disabled</Button>
      <Button theme="link">Button</Button>
      <br/>
      <Button disabled theme="text">Disabled</Button>
      <Button theme="text">Button</Button>
    </div>
  );
};

export default Button4;