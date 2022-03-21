import React, {useState} from 'react';
import Dialog, {alert} from './dialog';
import Button from '../button/button';

const dialogExample: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
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
        <Button onClick={() => setVisible(!visible)}>dialog</Button>
        <Dialog visible={visible}
                title={<strong>我是一个标题</strong>}
                onClose={(bool) => setVisible(bool)}
                ok={fn}
                cancel={fn1}>
          <div>hi</div>
          <div>hi1</div>
        </Dialog>
      </div>
      <div>
        <h2>Alert</h2>
        <Button onClick={() => setVisible1(!visible1)}>alert</Button>
        <Dialog alert
                visible={visible1}
                title={<strong>Alert标题</strong>}
                onClose={(bool) => setVisible1(bool)}
               >
          <div>Alert</div>
          <div>Alert1</div>
        </Dialog>
      </div>
      <div>
        <h2>一键 Alert</h2>
        <Button onClick={()=>alert(<div>hi</div>,'提示')}>alert</Button>
      </div>
    </div>
  );
};

export default dialogExample;