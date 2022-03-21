import React from 'react';
import classes from '../helpers/classes';

interface Props extends React.HTMLAttributes<HTMLElement>{}
const Aside:React.FC<Props> = (props) => {
  const {className,...rest} = props
  return (
    <div className={classes('star-layout-aside',className)}
         {...rest}>
      {props.children}
    </div>
  )
}

export default Aside