import React, {useState} from 'react';
import Dialog, {alert} from './dialog';
import Button from '../button/button';

const dialogExample: React.FC = () => {
  const [x, setX] = useState(false);
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
        <Button onClick={() => setX(!x)}>dialog</Button>
        <Dialog visible={x}
                title="我是个标题"
                onClose={(bool) => setX(bool)}
                ok={fn}
                cancel={fn1}>
          <div>hi</div>
          <div>ho1</div>
        </Dialog>
      </div>
      <div>
        <Button onClick={()=>alert('hello','提示')}>alert</Button>
      </div>
    </div>
  );
};

export default dialogExample;