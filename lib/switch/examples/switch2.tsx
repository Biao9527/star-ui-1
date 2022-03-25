import React, {useState} from 'react';
import Switch from '../switch';

const Switch2 = () => {
  const [v, setV] = useState(false);
  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState(false);
  const [v3, setV3] = useState(false);

  return (
    <div>
      <Switch size="big"
              visible={v}
              onClick={() => setV(!v)}/>
      <br/>
      <Switch visible={v1}
              onClick={() => setV1(!v1)}/>
      <br/>
      <Switch size="normal"
              visible={v2}
              onClick={() => setV2(!v2)}/>
      <br/>
      <Switch size="small"
              visible={v3}
              onClick={() => setV3(!v3)}/>
    </div>
  );
};

export default Switch2;