import {Layout, Header, Content, Footer, Aside} from '../layout';
import React from 'react';

const Layout2 = () => {
  return (
    <div>
      <Layout className="layout">
        <Header className="header">Header</Header>
        <Layout>
          <Aside className="aside">Aside</Aside>
          <Content className="content">Content</Content>
        </Layout>
        <Footer className="footer">Footer</Footer>
      </Layout>
    </div>
  );
};
export default Layout2;