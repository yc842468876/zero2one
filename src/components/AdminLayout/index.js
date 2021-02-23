import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Dropdown, Avatar, message, Badge } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { adminRoutes } from '../../routes';
import { removeToken } from '../../utils/auth';
import './index.css';

const { Header, Sider, Content } = Layout;

const routes = adminRoutes.filter((route) => route.isShow);

function Index(props) {
  const [collapsed, setCollapsed] = useState(false);

  const popMenu = (
    <Menu
      onClick={(p) => {
        if (p.key === 'logout') {
          message.info('退出登录');
          removeToken();
          props.history.push('/login');
        }

        if (p.key === 'notice') {
          props.history.push('/admin/notice');
        }

        if (p.key === 'setting') {
          message.info('setting');
        }
      }}
    >
      <Menu.Item key="notice">
        <Badge dot={!props.notice.isAllRead}>通知中心</Badge>
      </Menu.Item>
      <Menu.Item key="setting">设置</Menu.Item>
      <Menu.Item key="logout">退出登录</Menu.Item>
    </Menu>
  );

  return (
    <Layout id="admin-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">logoImg</div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[props.location.pathname]}
        >
          {routes.map((route) => {
            return (
              <Menu.Item
                key={route.path}
                onClick={(p) => props.history.push(p.key)}
              >
                {route.title}
              </Menu.Item>
            );
          })}
          {/* <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background layout-header">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => {
                setCollapsed(!collapsed);
              },
            }
          )}
          <Dropdown overlay={popMenu}>
            <div style={{ marginRight: 24 }}>
              <Avatar>U</Avatar>
              <span style={{ margin: '0 10px' }}>
                <Badge dot={!props.notice.isAllRead}>currentUser</Badge>
              </span>
              <DownOutlined />
            </div>
          </Dropdown>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: 16,
            minHeight: 280,
            overflow: 'hidden',
            overflowY: 'auto',
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default connect((state) => ({
  notice: state.notice,
}))(withRouter(Index));
