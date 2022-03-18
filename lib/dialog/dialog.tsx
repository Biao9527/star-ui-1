import React from 'react';
import './dialog.scss';
import Button from '../button/button';
import ReactDOM from 'react-dom';
import Dialog from './dialog';

type Props = {
  title: string,
  visible: boolean,
  onClose: (bool: boolean) => void,
  closeOnClickOverlay?: boolean,
  ok?: () => void,
  cancel?: () => void,
  alert?: boolean
}

const dialog: React.FC<Props> = (props) => {
  const closeOverlay = () => {
    if (props.closeOnClickOverlay) {
      props.onClose(false);
    }
  };
  const ok = () => {
    if (props.ok&&props.ok()) {
      props.onClose(false);
    }
  };
  const cancel = () => {
    if (props.cancel&&props.cancel()) {
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
              {props.alert ? null :
                <>
                  <Button level="main" onClick={ok}>OK</Button>
                  <Button onClick={cancel}>Cancel</Button>
                </>
              }
            </footer>
          </div>
        </div>
      </> :
      null;
  return ReactDOM.createPortal(dialogDiv, document.body);
};

const alert = (content: string, title: string)=>{
  const component = <Dialog
    alert
    visible={true} title={title}
    onClose={()=>{
      ReactDOM.render(React.cloneElement(component,{visible:false}),div)
      ReactDOM.unmountComponentAtNode(div)
      div.remove()
    }}>{content}</Dialog>;
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component,div)
}

export {alert}
export default dialog;
