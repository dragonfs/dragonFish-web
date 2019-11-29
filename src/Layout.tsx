import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import * as React from 'react';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class AppLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
        <Layout className="layout">
        <Header style={{backgroundColor: '#fff'}}>
          <div className="logo" />
          <Menu
            theme="light"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '10px 20px',flex: 1 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 800, height: 'auto' }}>
              
          </div>
        </Content>
      </Layout>
    );
  }
}
