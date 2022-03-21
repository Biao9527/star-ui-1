import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';

const layoutExample:React.FC = ()=>{
  return (
    <div>
      <h1>Layout</h1>
      <Layout className='hi' style={{height:300,border:'1px solid red'}}>
        <Header className='h1' style={{border:'1px solid black'}}>header1</Header>
        <Content className='c1' style={{border:'1px solid green'}}>content2</Content>
        <Aside className='a1' style={{border:'1px solid yellow'}}>aside</Aside>
        <Footer className='f1' style={{border:'1px solid blue'}}>footer3</Footer>
      </Layout>
    </div>
  )
}

export default layoutExample