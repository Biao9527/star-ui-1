import React, {useState} from 'react';
import Switch from './switch';

const SwitchExample: React.FC = () => {
  const [visible,setVisible] = useState(false)
  return (
    <div>
        <h2>例子一</h2>
      <Switch disabled className='xxx' size='big' visible={visible} onClick={()=>setVisible(!visible)}/>
    </div>
  );
};

export default SwitchExample;