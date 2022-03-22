import React, {useState} from 'react';
import Button from '../../button/button';
import Dialog from '../dialog';

const Dialog1 = ()=>{
  const [visible, setVisible] = useState(false);
  const fn = () => {
    console.log('ok');
    return false;
  };
  const fn1 = () => {
    console.log('cancel');
    return true;
  };
  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>dialog</Button>
      <Dialog visible={visible}
              okText='OK'
              cancelText="NO"
              title={<strong>我是一个标题</strong>}
              onClose={(bool) => setVisible(bool)}
              ok={fn}
              cancel={fn1}>
        <div>hi</div>
        <div>hi1</div>
      </Dialog>
    </div>
  )
}
export default Dialog1