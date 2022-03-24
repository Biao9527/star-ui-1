import React, {ReactNode} from 'react';
import './dialog.scss';
import Button from '../button/button';
import ReactDOM from 'react-dom';

type Props = {
  title: ReactNode,
  visible: boolean,
  onClose: (bool: boolean) => void,
  closeOnClickOverlay?: boolean,
  ok?: () => void,
  cancel?: () => void,
  alert?: boolean,
  okText?: string
  cancelText?: string
}

const Dialog: React.FC<Props> = (props) => {
  const closeOverlay = () => {
    if (props.closeOnClickOverlay) {
      props.onClose(false);
    }
  };
  const ok = () => {
    if (props.ok && props.ok()) {
      props.onClose(false);
    }
  };
  const cancel = () => {
    if (props.cancel && props.cancel()) {
      props.onClose(false);
    }
  };
  const dialogDiv =
    props.visible ?
      <>
        <div className="star-dialog-overlay" onClick={closeOverlay}/>
        <div className="star-dialog-wrapper">
          <div className="star-dialog">
            <header>
              {props.title}
              <span onClick={() => props.onClose(false)} className="star-dialog-close"/>
            </header>
            <main>
              {props.children}
            </main>
            <footer>
              {props.alert ?
                <Button level="main" onClick={()=>props.onClose(false)}>{props.okText}</Button> :
                <>
                  <Button level="main" onClick={ok}>{props.okText}</Button>
                  <Button onClick={cancel}>{props.cancelText}</Button>
                </>
              }
            </footer>
          </div>
        </div>
      </> :
      null;
  return ReactDOM.createPortal(dialogDiv, document.body);
};
Dialog.defaultProps={
  okText : '确定',
  cancelText : '取消'
}



export default Dialog;
