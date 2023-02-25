import { Breadcrumb, Layout as AntLayout, Menu, theme } from "antd";

import { Link, Outlet } from "react-router-dom";
import { ErrorBoundary } from "./ErrorBoundary";

const { Header, Content } = AntLayout;

const HorizontalNavigation = () => {
  const navItems = ["Home", "Profile", "Login", "Signup"];
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[navItems[0]]}>
      {navItems.map((key: string, index: number) => (
        <Menu.Item key={key}>
          {<Link to={`/${key.toLowerCase()}`}>{key}</Link>}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export const Layout = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    <AntLayout style={{ height: "100vh" }}>
      <Header className="header">
        <HorizontalNavigation />
      </Header>
      <AntLayout>
        <AntLayout style={{ padding: "0 1rem" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: "1rem",
              margin: 0,
              height: "100%",
              background: colorBgContainer
            }}
          >
            <ErrorBoundary>
              <Outlet />
            </ErrorBoundary>
          </Content>
        </AntLayout>
      </AntLayout>
    </AntLayout>
  );
};
