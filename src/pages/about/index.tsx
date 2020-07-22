import React from 'react'
import { Typography, Divider } from 'antd'
import { createPage } from 'react-torch/page'
import { createStore } from 'react-torch/store'
import { Layout } from '../../components'

const { Title, Paragraph } = Typography

export default createPage((history, context) => {

  return [
    () => {
      return (
        <Layout>
          <Typography>
            <Title level={3}>关于</Title>
            <Divider style={{ margin: '12px 0' }} />
            <Paragraph>
              CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
            </Paragraph>
            <Paragraph>
              CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。
            </Paragraph>
            <Paragraph>
              CNode 的 SLA 保证是，一个9，即 90.000000%。
            </Paragraph>
            <Paragraph>
              社区目前由 <a href="http://cnodejs.org/user/alsotang">@alsotang</a> 在维护，有问题请联系：<a href="https://github.com/alsotang">https://github.com/alsotang</a>
            </Paragraph>
            <Paragraph>
              请关注我们的官方微博：<a href="http://weibo.com/cnodejs">http://weibo.com/cnodejs</a>
            </Paragraph>
            <Title level={3}>移动客户端</Title>
            <Divider style={{ margin: '12px 0' }} />
            <Paragraph>
              客户端由 <a href="https://cnodejs.org/user/soliury">@soliury</a> 开发维护。
            </Paragraph>
            <Paragraph>
              源码地址： <a href="https://github.com/soliury/noder-react-native">https://github.com/soliury/noder-react-native</a> 。
            </Paragraph>
            <Paragraph>
              立即体验 CNode 客户端，直接扫描页面右侧二维码。
            </Paragraph>
            <Paragraph>
              另，安卓用户同时可选择：<a href="https://github.com/TakWolf/CNode-Material-Design">https://github.com/TakWolf/CNode-Material-Design</a> ，这是 Java 原生开发的安卓客户端。
            </Paragraph>
            <Title level={3}>友情链接</Title>
            <Divider style={{ margin: '12px 0' }} />
            <Paragraph>
              <a href="https://www.sxl.cn/"><img width="250" height="60" src="https://static.cnodejs.org/FvtwcYi5K6qoFAIsUeIgTKGeB6lQ" /></a>
              <a href="https://www.huoban.com/"><img width="250" height="60" src="https://static.cnodejs.org/Ftmw28ed0I_rir7YYz3c_jVPkCGx" /></a>
              <a href="http://100offer.com/"><img width="250" height="60" src="https://static.cnodejs.org/FmU1Ik57z6wrl9JDTNdcYBTDetFq" /></a>
              <a href="https://www.teambition.com/"><img width="250" height="60" src="https://static.cnodejs.org/FkMR_SqpCp4Q0eDIaWrQlALiXdmP" /></a>
              <a href="http://segmentfault.com/"><img width="250" height="60" src="https://static2.cnodejs.org/public/images/temp/sf.png" /></a>
            </Paragraph>
            <Title level={3}>LOGO</Title>
            <Divider style={{ margin: '12px 0' }} />
            <Paragraph>
              白底： /public/images/cnodejs.svg
            </Paragraph>
            <Paragraph>
              黑底： /public/images/cnodejs_light.svg
            </Paragraph>
          </Typography>
        </Layout>
      )
    },
    createStore({}, {})
  ]
})