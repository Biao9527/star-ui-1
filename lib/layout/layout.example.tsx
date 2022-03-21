import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';
import './layout.example.scss';

const layoutExample: React.FC = () => {
  return (
    <div>
      <div>
        <h1>例子一</h1>
        <Layout className="l">
          <Header className="h">Header</Header>
          <Content className="c">Content</Content>
          <Footer className="f">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>例子二</h1>
        <Layout className="l">
          <Header className="h">Header</Header>
          <Layout>
            <Aside className="a">Aside</Aside>
            <Content className="c">Content</Content>
          </Layout>
          <Footer className="f">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>例子三</h1>
        <Layout className="l">
          <Header className="h">Header</Header>
          <Layout>
            <Content className="c">Content</Content>
            <Aside className="a">Aside</Aside>
          </Layout>
          <Footer className="f">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>例子四</h1>
        <Layout className="l">
          <Aside className="a">Aside</Aside>
          <Layout>
            <Header className="h">Header</Header>
            <Content className="c">Content</Content>
            <Footer className="f">Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>

  );
};

export default layoutExample;