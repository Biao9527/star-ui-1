import React from 'react';
import './switch.scss'
import classes from '../helpers/classes';
import switchClassName from '../helpers/switchClassName';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  visible: boolean
  size?: 'big' | 'small' | 'normal'
  disabled?: boolean
}
const Switch:React.FC<Props> = (props)=>{
  const {disabled,className,...rest} = props
  return (
      <button
        className={classes('star-switch',switchClassName(props),className)}
        disabled={disabled}
        {...rest}>
      <span/>
      </button>
  )
}

export default Switch