import React from 'react';
import './button.scss';

type Props = {
  theme?: 'button' | 'link' | 'text',
  size?: 'big' | 'small' | 'normal',
  level?: 'main' | 'normal' | 'danger',
  disabled?: boolean,
  loading?: boolean
}
const Button: React.FC<Props> = (props) => {
  const {theme, size, level,loading} = props;
  const className = () => {
    const classNameList: string[] = [];
    if (theme === 'text') {
      classNameList.push('star-theme-text');
    } else if (theme === 'link') {
      classNameList.push('star-theme-link');
    } else {
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
  };
  return (
    <button className={'star-button ' + className()} disabled={props.disabled}>
      {loading?<span className="star-loadingIndicator"/>:null}
      {props.children}
    </button>
  );
};

export default Button;