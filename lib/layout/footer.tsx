import React from 'react';
import classes from '../helpers/classes';

interface Props extends React.HTMLAttributes<HTMLElement>{}
const Footer:React.FC<Props> = (props) => {
  const {className,...rest} = props
  return (
    <div className={classes('star-layout-footer',className)}
         {...rest}>
      {props.children}
    </div>
  )
}

export default Footer