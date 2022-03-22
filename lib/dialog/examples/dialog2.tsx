import React, {useState} from 'react';
import Button from '../../button/button';
import Dialog from '../dialog';

const Dialog2 = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>alert</Button>
      <Dialog alert
              visible={visible}
              title={<strong>Alert标题</strong>}
              onClose={(bool) => setVisible(bool)}>
        <div>Alert</div>
        <div>Alert1</div>
      </Dialog>
    </div>
  );
};
export default Dialog2;