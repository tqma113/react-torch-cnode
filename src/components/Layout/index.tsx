import React from 'react'
import { Layout, BackTop } from 'antd'
import Nav from './Nav'
import Footer from './Footer'
import Sider from '../Sider'

const { Content } = Layout


export default function ({
  children
}: React.PropsWithChildren<{}>) {
  return (
    <>
      <Layout>
        <Nav />
          <Content style={{ margin: '20px 50px'}}>
            <div style={{ maxWidth: 1400, margin: 'auto', display: 'flex' }}>
              <div style={{ background: '#fff', padding: '24px', marginRight: '20px', float: 'left' }}>
                {children}
              </div>
              <Sider />
            </div>
          </Content>
        <Footer />
      </Layout>
      <BackTop />
    </>
  )
}