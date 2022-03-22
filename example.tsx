import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link} from 'react-router-dom';
import './example.scss';
import './lib/index.scss';
import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Header, Aside, Content, Footer} from './lib/layout/layout';
import Icon from './lib/icon/icon';


ReactDOM.render(
  <HashRouter>
    <Layout className="page">
      <Header className="nav">
        <div>
          <Icon className="logo" name="star"/>
          <p>Star-UI</p>
        </div>
        <a href="https://github.com/">
          <Icon name="github" className='github'/>
        </a>
      </Header>
      <Layout className="mainWrapper">
        <Aside className="aside">
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/dialog">对话框</Link>
            </li>
            <li>
              <Link to="/layout">布局</Link>
            </li>
          </ul>
        </Aside>
        <Content className="content">
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer className="footer">
        footer
      </Footer>
    </Layout>
  </HashRouter>
  , document.querySelector('#root'));