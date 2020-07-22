import React from 'react'
import { Layout } from 'antd'
import Nav from './Nav'
import Footer from './Footer'

const { Content } = Layout


export default function ({
  children
}: React.PropsWithChildren<{}>) {
  return (
    <Layout>
      <Nav />
      <Content style={{ margin: '20px 50px', padding: '24px', background: '#fff' }}>
        {children}
      </Content>
      <Footer />
    </Layout>
  )
}