import React from 'react';
import { Layout, } from 'antd';
import SiderCustom from './components/SiderCustom';
const { Content } = Layout;

class App extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout className="ant-layout-has-sider" style={{ height: '100vh' }}>
              <SiderCustom path={this.props.location.pathname} collapsed={this.state.collapsed} />
              <Layout style={{background: "#fff"}}>
                <Content>
                  {this.props.children}
                </Content>
              </Layout>
            </Layout>
        );
    }
}

export default App;
