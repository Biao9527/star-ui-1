import React, {FC} from 'react';
import './importIcons.js';

type props = {
  name: string
}

const Icon: FC<props> = (props) => {
  return (
      <svg>
        <use xlinkHref={'#' + props.name}/>
      </svg>
  );
};

export default Icon;