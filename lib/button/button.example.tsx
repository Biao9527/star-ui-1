import React from 'react';
import Button from './button';

const buttonExample = () => {
  return (
    <div>
      <h2>Button</h2>
      <div>
        <Button>button</Button>
        <Button theme="button">button</Button>
        <Button theme="dashed">button</Button>
        <Button theme="link">button</Button>
        <Button theme="text">button</Button>
      </div>
      <h2>Size</h2>
      <div>
        <Button size="big">button</Button>
        <Button>button</Button>
        <Button size="small">button</Button>
      </div>
      <div>
        <Button theme="dashed" size="big">button</Button>
        <Button theme="dashed" size="normal">button</Button>
        <Button theme="dashed" size="small">button</Button>
      </div>
      <div>
        <Button theme="link" size="big">button</Button>
        <Button theme="link" size="normal">button</Button>
        <Button theme="link" size="small">button</Button>
      </div>
      <div>
        <Button theme="text" size="big">button</Button>
        <Button theme="text" size="normal">button</Button>
        <Button theme="text" size="small">button</Button>
      </div>
      <h2>Level</h2>
      <div>
        <Button level="main">button</Button>
        <Button>button</Button>
        <Button level="danger">button</Button>
      </div>
      <div>
        <Button theme="dashed" level="main">button</Button>
        <Button theme="dashed" level="normal">button</Button>
        <Button theme="dashed" level="danger">button</Button>
      </div>
      <div>
        <Button theme="link" level="main">button</Button>
        <Button theme="link" level="normal">button</Button>
        <Button theme="link" level="danger">button</Button>
      </div>
      <div>
        <Button theme="text" level="main">button</Button>
        <Button theme="text" level="normal">button</Button>
        <Button theme="text" level="danger">button</Button>
      </div>
      <h2>Disabled</h2>
      <div>
        <div>
          <Button disabled>button</Button>
          <Button>button</Button>
        </div>
        <div>
          <Button disabled theme="dashed">button</Button>
          <Button theme="dashed">button</Button>
        </div>
        <div>
          <Button disabled theme="link">button</Button>
          <Button theme="link">button</Button>
        </div>
        <div>
          <Button disabled theme="text">button</Button>
          <Button theme="text">button</Button>
        </div>
      </div>
      <h2>Loading</h2>
      <div>
        <Button loading>loading</Button>
        <Button loading theme="dashed">loading</Button>
        <Button loading theme="link">loading</Button>
        <Button loading theme="text">loading</Button>
      </div>
    </div>
  );
};
export default buttonExample;