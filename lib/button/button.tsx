import React from 'react';
import './button.scss';
import buttonClassName from '../helpers/buttonClassName';
import classes from '../helpers/classes';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'button' | 'link' | 'text' | 'dashed',
  size?: 'big' | 'small' | 'normal',
  level?: 'main' | 'normal' | 'danger',
  disabled?: boolean,
  loading?: boolean
}

const Button: React.FC<Props> = (props) => {
  const {loading, disabled, children, className, ...rest} = props;
  return (
    <button
      className={classes('star-button ', buttonClassName(props), className)}
      disabled={disabled}
      {...rest}>
      {loading ? <span className="star-loadingIndicator"/> : null}
      {children}
    </button>
  );
};

export default Button;