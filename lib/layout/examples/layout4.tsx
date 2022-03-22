import {Layout, Header, Content, Footer, Aside} from '../layout';
import React from 'react';

const Layout4 = () => {
  return (
    <div>
      <Layout className="layout">
        <Aside className="aside">Aside</Aside>
        <Layout>
          <Header className="header">Header</Header>
          <Content className="content">Content</Content>
          <Footer className="footer">Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};
export default Layout4;