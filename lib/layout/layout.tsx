import React, {ReactElement} from 'react';
import './layout.scss';
import classes from '../helpers/classes';
import Aside from './aside';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}

const Layout: React.FC<Props> = (props) => {
  const {className, ...rest} = props;
  const hashAside = (props.children as Array<ReactElement>).length &&
    (props.children as Array<ReactElement>).some(node => node.type === Aside);

  return (
    <div className={
      classes('star-layout',
        className,
        hashAside ? 'star-layout-hashAside' : '')}
         {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;