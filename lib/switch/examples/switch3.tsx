import React, {useState} from 'react';
import Switch from '../switch';

const Switch3 = () => {
  const [v, setV] = useState(false);
  const [v1, setV1] = useState(false);

  return (
    <div>
      <Switch disabled
              visible={v}
              onClick={() => setV(!v)}/>
      <br/>
      <Switch visible={v1}
              onClick={() => setV1(!v1)}/>
    </div>
  );
};

export default Switch3;