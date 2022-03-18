import React, {useState} from 'react';
import Dialog, {alert} from './dialog';
import Button from '../button/button';

const dialogExample: React.FC = () => {
  const [x, setX] = useState(false);
  const  xxx = <div>
    <div>111</div>
    <div>222</div>
  </div>
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
      <div>
        <h2>Dialog</h2>
        <Button onClick={() => setX(!x)}>dialog</Button>
        <Dialog visible={x}
                title={<strong>我是一个标题</strong>}
                onClose={(bool) => setX(bool)}
                ok={fn}
                cancel={fn1}>
          <div>hi</div>
          <div>hi1</div>
        </Dialog>
      </div>
      <div>
        <h2>Alert</h2>
        <Button onClick={()=>alert(xxx,'提示')}>alert</Button>
      </div>
    </div>
  );
};

export default dialogExample;