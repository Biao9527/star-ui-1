import Button from '../button';
import React from 'react';

const Button1 = () => {
  return (
    <div>
      <Button>Button</Button>
      <Button theme="button">Button</Button>
      <Button theme="dashed">Dashed</Button>
      <Button theme="link">Link</Button>
      <Button theme="text">Text</Button>
    </div>
  );
};

export default Button1;