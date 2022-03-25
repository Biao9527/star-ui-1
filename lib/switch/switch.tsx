import React from 'react';
import './switch.scss'
import classes from '../helpers/classes';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  visible: boolean
  size?: 'big' | 'small' | 'normal'
  disabled?: boolean
}
const Switch:React.FC<Props> = (props)=>{
  const {visible,size,disabled,className,...rest} = props
  const name = ()=>{
    const classNameList = []
    if (visible){
      classNameList.push('star-checked')
    }
    if (size === 'big'){
      classNameList.push('star-switch-big')
    }else if (size === 'small'){
      classNameList.push('star-switch-small')
    }
    if (disabled){
      classNameList.push('star-switch-disabled')
    }
    return classNameList.join(' ')
  }
  return (
      <button
        className={classes('star-switch',name(),className)}
        disabled={disabled}
        {...rest}>
      <span/>
      </button>
  )
}

export default Switch