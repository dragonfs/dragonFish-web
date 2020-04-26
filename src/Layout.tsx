import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import * as React from 'react';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import Loadable from 'react-loadable';
import { Link, Switch, Route,  HashRouter as Router, } from 'react-router-dom';

const Home = Loadable({
    loader: () => import(/* webpackChunkName: "Home" */'./pages/home/Home'),
    loading: () => <div>loading</div>,
  })
  
const Game = Loadable({
    loader: () => import(/* webpackChunkName: "Game" */ "./pages/game/game"),
    loading: () => <div>loading</div>
});

function NoMatch() {
    return (
      <div>
        <h3>
          404
        </h3>
      </div>
    );
}

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
        <Router>
          <Header style={{ backgroundColor: "#fff" }}>
            <div className="logo" />
            <Menu
              theme="light"
              mode="horizontal"
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">
                <Link to="/game">game</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/users">setting</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "10px 20px", flex: 1 }}>
            <div
              style={{
                background: "#fff",
                padding: 24,
                minHeight: 800,
                height: "auto"
              }}
            >
              <Switch>
                <Route exact path="/" component={Home}>
                </Route>
                <Route exact path="/game" component={Game}>
                </Route>
                <Route path="*" component={NoMatch}>
                </Route>
              </Switch>
            </div>
          </Content>
        </Router>
      </Layout>
    );
  }
}
