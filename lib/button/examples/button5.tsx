import Button from '../button';
import React from 'react';

const Button5 = () => {
  return (
    <div>
      <Button loading>loading</Button>
      <Button loading theme="dashed">loading</Button>
      <Button loading theme="link">loading</Button>
      <Button loading theme="text">loading</Button>
    </div>
  );
};

export default Button5;