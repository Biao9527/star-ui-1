import {Props} from '../button/button';

const buttonClassName = (props:Props)=>{
  const {theme, size, level,loading} = props;
  const classNameList: string[] = [];
  if (theme === 'text') {
    classNameList.push('star-theme-text');
  } else if (theme === 'link') {
    classNameList.push('star-theme-link');
  } else if (theme === 'dashed'){
    classNameList.push('star-theme-dashed');
  }else {
    classNameList.push('star-theme-button');
  }
  if (size === 'small') {
    classNameList.push('star-size-small');
  } else if (size === 'big') {
    classNameList.push('star-size-big');
  } else {
    classNameList.push('star-size-normal');
  }
  if (level === 'main') {
    classNameList.push('star-level-main');
  } else if (level === 'danger') {
    classNameList.push('star-level-danger');
  } else {
    classNameList.push('star-level-normal');
  }
  if (loading){
    classNameList.push('star-loading')
  }
  return classNameList.join(' ');
}
export default buttonClassName