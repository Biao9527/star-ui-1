import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, NavLink} from 'react-router-dom';
import './example.scss';
import './lib/index.scss';
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
          <Icon name="github" className="github"/>
        </a>
      </Header>
      <Layout className="mainWrapper">
        <Aside className="sidebar">
          <span>Components</span>
          <ul>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="main">
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer className="bottom">
        footer
      </Footer>
    </Layout>
  </HashRouter>
  , document.querySelector('#root'));