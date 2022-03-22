import React, {useState} from 'react';
import Button from './lib/button/button';
import Highlight,{defaultProps} from 'prism-react-renderer'
import './demo.scss'

type Props = {
  code: string
  title: string
}
const Demo: React.FC<Props> = (props) => {
  const [visible ,setVisible] = useState(false)
  return (
    <div className="demo">
      <h2>{props.title}</h2>
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
        <Highlight {...defaultProps} code={props.code} language="tsx">
          {({className,style,tokens,getLineProps,getTokenProps})=>(
            <pre className={className} style={style}>
              {tokens.map((line,i)=>(
                <div {...getLineProps({line,key:i})}>
                  {line.map((token,key)=>(
                    <span {...getTokenProps({token, key})}/>
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>:null
      }
    </div>
  );
};

export default Demo;