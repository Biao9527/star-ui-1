import Button from '../../button/button';
import {alert} from '../dialog';
import React from 'react';

const Dialog3 = ()=>{
  return(
    <Button onClick={() => alert(<div>hi</div>, '提示')}>alert</Button>
  )
}
export default Dialog3