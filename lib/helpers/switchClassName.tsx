import {Props} from '../switch/switch';

const switchClassName = (props:Props)=>{
  const {visible,size,disabled} = props
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

export default switchClassName