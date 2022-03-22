import Button from '../button';
import React from 'react';

const Button5 = () => {
  return (
    <div>
      <Button loading>Loading</Button>
      <Button loading theme="dashed">Loading</Button>
      <Button loading theme="link">Loading</Button>
      <Button loading theme="text">Loading</Button>
    </div>
  );
};

export default Button5;