import {Layout, Header, Content, Footer} from '../layout';
import React from 'react';

const Layout1 = () => {
  return (
    <div>
      <Layout className="layout">
        <Header className="header">Header</Header>
        <Content className="content">Content</Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    </div>
  );
};
export default Layout1;