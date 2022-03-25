import React, {useState} from 'react';
import Switch from '../switch';

const Switch1 = () => {
  const [v, setV] = useState(false);
  return (
    <Switch visible={v}
            onClick={() => setV(!v)}/>
  );
};

export default Switch1;