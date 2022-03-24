import Button from '../../button/button';
import React from 'react';
import openAlert from '../openAlert';

const Dialog3 = ()=>{
  return(
    <Button onClick={() => openAlert(<div>hi</div>, '提示')}>alert</Button>
  )
}
export default Dialog3