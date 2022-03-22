import React from 'react';

type Props = {
  code:string
}
const Demo:React.FC<Props> = (props)=>{
  return(
    <div>
      <div>
        {props.children}
      </div>
      <pre>
        {props.code}
      </pre>
    </div>
  )
}

export default Demo