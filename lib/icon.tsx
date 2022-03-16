import React, {FC} from 'react';
import './importIcons.js';
import './icon.scss'

type props = {
  name: string
}

const Icon: FC<props> = (props) => {
  return (
    <svg className="star-icon">
      <use xlinkHref={'#' + props.name}/>
    </svg>
  );
};

export default Icon;