import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';

const layoutExample:React.FC = ()=>{
  return (
    <div>
      <h1>Layout</h1>
      <Layout>
        <Header>header1</Header>
        <Content>content2</Content>
        <Footer>footer3</Footer>
      </Layout>
    </div>
  )
}

export default layoutExample