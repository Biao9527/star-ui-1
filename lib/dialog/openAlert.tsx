import React, {ReactNode} from 'react';
import ReactDOM from 'react-dom';
import Dialog from './dialog';

const openAlert = (content: ReactNode, title: ReactNode) => {
  const component = <Dialog
    alert
    visible={true} title={title}
    onClose={() => {
      ReactDOM.render(React.cloneElement(component, {visible: false}), div);
      ReactDOM.unmountComponentAtNode(div);
      div.remove();
    }}>{content}</Dialog>;
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

export default openAlert;
