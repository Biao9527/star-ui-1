import React from 'react';
import './dialog.scss'

type Props = {
  visible: boolean
}
const dialog: React.FC<Props> = (props) => {
  return (
    props.visible ?
      <>
        <div className="star-dialog-mask"/>
        <div className="star-dialog">
          <header>标签</header>
          <main>{props.children}</main>
          <footer>
            <button>ok</button>
            <button>cancel</button>
          </footer>
         </div>
      </> :
      null
  );
};
export default dialog;
