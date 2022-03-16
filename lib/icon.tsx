import React, {FC} from 'react';
import './importIcons.js';
import './icon.scss'
import classes from './helpers/classes';

interface props extends React.SVGAttributes<SVGElement> {
  name: string
}

const Icon: FC<props> = ({className,name,...rest}) => {
  return (
    <svg className={classes('star-icon',className)}
         {...rest}>
      <use xlinkHref={'#' + name}/>
    </svg>
  );
};

export default Icon;