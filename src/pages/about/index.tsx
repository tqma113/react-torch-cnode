import React from 'react'
import { createPage } from 'react-torch/page'
import { createStore } from 'react-torch/store'
import { Layout } from '../../components'

export default createPage((history, context) => {

  return [
    () => {
      console.log('about update')
      return <Layout>about</Layout>
    },
    createStore({}, {})
  ]
})