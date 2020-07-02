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
      <Content style={{ padding: '0 50px' }}>
        {children}
      </Content>
      <Footer />
    </Layout>
  )
}