import React from 'react';
import renderer from 'react-test-renderer'
import Button from '../Button';

describe('button tests',()=>{
  it('是个div', function () {
    const json= renderer.create(<Button/>).toJSON()
    expect(json).toMatchSnapshot()
  });
})