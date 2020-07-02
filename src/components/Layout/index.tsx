import React from 'react'
import { Layout } from 'antd'
import Nav from './Nav'
import Footer from './Footer'


export default function ({
  children
}: React.PropsWithChildren<{}>) {
  return (
    <Layout>
      <Nav />
      {children}
      <Footer />
    </Layout>
  )
}