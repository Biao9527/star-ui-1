import {Layout, Header, Content, Footer, Aside} from '../layout';
import React from 'react';

const Layout3 = () => {
  return (
    <div>
      <Layout className="layout">
        <Header className="header">Header</Header>
        <Layout>
          <Content className="content">Content</Content>
          <Aside className="aside">Aside</Aside>
        </Layout>
        <Footer className="footer">Footer</Footer>
      </Layout>
    </div>
  );
};
export default Layout3;