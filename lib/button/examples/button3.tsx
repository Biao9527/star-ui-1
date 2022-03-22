import Button from '../button';
import React from 'react';

const Button3 = () => {
  return (
    <div>
      <Button level="main">Main</Button>
      <Button>Normal</Button>
      <Button level="danger">Danger</Button>
      <br/>
      <Button theme="dashed" level="main">Main</Button>
      <Button theme="dashed" level="normal">Normal</Button>
      <Button theme="dashed" level="danger">Danger</Button>
      <br/>
      <Button theme="link" level="main">Main</Button>
      <Button theme="link" level="normal">Normal</Button>
      <Button theme="link" level="danger">Danger</Button>
      <br/>
      <Button theme="text" level="main">Main</Button>
      <Button theme="text" level="normal">Normal</Button>
      <Button theme="text" level="danger">Danger</Button>
      <br/>
    </div>
  );
};

export default Button3;