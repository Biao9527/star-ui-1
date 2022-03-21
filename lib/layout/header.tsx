import React from 'react';
import classes from '../helpers/classes';

interface Props extends React.HTMLAttributes<HTMLElement>{}
const Header:React.FC<Props> = (props) => {
  const {className,...rest} = props
  return (
    <div className={classes('star-layout-header',className)}
         {...rest}>
      {props.children}
    </div>
  )
}

export default Header