import React, {useState} from 'react';
import Button from './lib/button/button';

type Props = {
  code: string
  title: string
}
const Demo: React.FC<Props> = (props) => {
  const [visible ,setVisible] = useState(false)
  return (
    <div className="demo">
      <span>{props.title}</span>
      <div className="demo-component">
        {props.children}
      </div>
      <div className="demo-actions">
        <Button onClick={()=>setVisible(!visible)}>
          {visible?'隐藏代码':'查看代码'}
        </Button>
      </div>
      {visible?
      <div className='demo-code'>
        <pre>
          {props.code}
        </pre>
      </div>:null
      }
    </div>
  );
};

export default Demo;