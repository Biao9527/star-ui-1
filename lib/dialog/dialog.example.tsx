import React, {useState} from 'react';
import Dialog from './dialog';

const dialogExample: React.FC = () => {
  const [x,setX] = useState(false)
  return (
    <div>
      <button onClick={()=>setX(!x)}>dialog</button>
      <Dialog visible={x}>
        <div>hi</div>
      </Dialog>
    </div>
  );
};

export default dialogExample;