import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';

const layoutExample: React.FC = () => {
  return (
    <div>
      <div>
        <h1>例子一</h1>
        <Layout style={{height: 300}}>
          <Header>header1</Header>
          <Content>content2</Content>
          <Footer>footer3</Footer>
        </Layout>
      </div>
      <div>
        <h1>例子二</h1>
        <Layout style={{height: 300}}>
          <Header>header1</Header>
          <Layout>
            <Aside>aside</Aside>
            <Content>content2</Content>
          </Layout>
          <Footer>footer3</Footer>
        </Layout>
      </div>
      <div>
        <h1>例子三</h1>
        <Layout style={{height: 300}}>
          <Header>header1</Header>
          <Layout>
            <Content>content2</Content>
            <Aside>aside</Aside>
          </Layout>
          <Footer>footer3</Footer>
        </Layout>
      </div>
      <div>
        <h1>例子四</h1>
        <Layout>
          <Aside>aside</Aside>
          <Layout style={{height: 300}}>
            <Header>header1</Header>
            <Content>content2</Content>
            <Footer>footer3</Footer>
          </Layout>
        </Layout>
      </div>
    </div>

  );
};

export default layoutExample;