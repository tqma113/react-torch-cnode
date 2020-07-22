import React from 'react'
import { Layout, Menu, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons';

const { Header } = Layout

const searchSuffix = (
  <SearchOutlined />
);

export default function Nav() {
  const handleLogoClick = () => {

  }

  const handleSeach = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const search = event.currentTarget.value
    document.location.href = `www.google.com?search=${search}`
  }

  const handleHomeClick = () => {

  }

  const handleAwaitReadClick = () => {

  }

  const handleNewGuideClick = () => {

  }

  const handleAPIClick= () => {

  }

  const handleAboutClick = () => {

  }

  const handleSettingClick = () => {

  }

  const handleLogoutClick = () => {

  }

  return (
    <Header style={{ height: 50 }}>
      <div style={{ maxWidth: 1400, margin: 'auto' }}>
        <div className="nav-left">
          <div className="logo" onClick={handleLogoClick}>
            <img src='/static/image/cnodejs_light.svg' />
          </div>
          <div className="search">
            <Input
              style={{ borderRadius: '50px' }}
              size="small"
              placeholder=""
              onPressEnter={handleSeach}
              prefix={searchSuffix}
            />
          </div>
        </div>
        <Menu style={{ height: 50, float: 'right', marginTop: -14 }} theme="dark" mode="horizontal">
          <Menu.Item style={{ height: 50 }} key="1" onClick={handleHomeClick}>首页</Menu.Item>
          <Menu.Item style={{ height: 50 }} key="2" onClick={handleAwaitReadClick}>未读</Menu.Item>
          <Menu.Item style={{ height: 50 }} key="3" onClick={handleNewGuideClick}>新手入门</Menu.Item>
          <Menu.Item style={{ height: 50 }} key="4" onClick={handleAPIClick}>API</Menu.Item>
          <Menu.Item style={{ height: 50 }} key="5" onClick={handleAboutClick}>关于</Menu.Item>
          <Menu.Item style={{ height: 50 }} key="6" onClick={handleSettingClick}>设置</Menu.Item>
          <Menu.Item style={{ height: 50 }} key="7" onClick={handleLogoutClick}>退出</Menu.Item>
        </Menu>
      </div>
    </Header>
  )
}