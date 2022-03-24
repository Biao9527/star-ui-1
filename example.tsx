import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, NavLink} from 'react-router-dom';
import './example.scss';
import './lib/index.scss';
import 'github-markdown-css'
import ButtonExample from './lib/button/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Header, Aside, Content, Footer} from './lib/layout/layout';
import Icon from './lib/icon/icon';
import Introduce from './lib/components/introduce';
import Install from './lib/components/install';
import QuickUse from './lib/components/quickUse';


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
          <span>Star UI</span>
          <ul>
            <li>
              <NavLink exact to="/">介绍</NavLink>
            </li>
            <li>
              <NavLink to="/install">安装</NavLink>
            </li>
            <li>
            <NavLink to="/quickUse">快速使用</NavLink>
          </li>
          </ul>
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
          <Route path="/" component={Introduce} exact/>
          <Route path="/install" component={Install}/>
          <Route path="/quickUse" component={QuickUse}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer className="bottom">
        <a href="https://github.com/">
          <Icon name="github"/>
          <span>GitHub</span>
        </a>
        <a href="https://github.com/">
          <Icon name='star'/>
          <span>Star-UI</span>
        </a>
        <span>&copy; Biao9527</span>
      </Footer>
    </Layout>
  </HashRouter>
  , document.querySelector('#root'));