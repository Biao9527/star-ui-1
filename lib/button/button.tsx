import React from 'react';
import './button.scss';
import buttonClassName from '../helpers/buttonClassName';

export type Props = {
  theme?: 'button' | 'link' | 'text',
  size?: 'big' | 'small' | 'normal',
  level?: 'main' | 'normal' | 'danger',
  disabled?: boolean,
  loading?: boolean
}
const Button: React.FC<Props> = (props) => {
  return (
    <button className={'star-button ' + buttonClassName(props)} disabled={props.disabled}>
      {props.loading?<span className="star-loadingIndicator"/>:null}
      {props.children}
    </button>
  );
};

export default Button;