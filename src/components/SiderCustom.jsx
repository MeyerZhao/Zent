/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';
import './SiderCustom.css';

const { Sider } = Layout;


class SiderCustom extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        openKey: '',
        selectedKey: ''
    };
    componentDidMount() {
        const _path = this.props.path;
        this.setState({
            openKey: _path.substr(0, _path.lastIndexOf('/')),
            selectedKey: _path
        });
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.onCollapse(nextProps.collapsed);
    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    };
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
        console.log(this.state);

    };
    openMenu = v => {
        console.log(v);
        this.setState({
            openKey: v[v.length - 1]
        })
    };
    render() {
        return (
            <Sider
                trigger={null}
                breakpoint="lg"
                collapsible
                collapsed={this.props.collapsed}
                onCollapse={this.onCollapse}
                style={{background: '#fff', borderRight: "1px solid #e9e9e9"}}
            >
            <div className="logo" >
              <div className="avatar" ></div>
              <div style={{marginLeft: "50px"}}>
              <h4 className="shopname">黄焖鸡米饭文</h4>
                未认证
                有赞餐饮
              </div>
            </div>
            <hr className="line" />

                <Menu
                    style={{borderRight: "0px solid #e9e9e9"}}
                    onClick={this.menuClick}
                    mode={this.state.mode}
                    selectedKeys={[this.state.selectedKey]}
                >
                    <Menu.Item key="/">
                      <Link to="/"> <Icon type="area-chart" /> <span >1工作台</span> </Link>
                    </Menu.Item>

                    <Menu.Item key="/shopmgmt">
                      <Link to="/shopmgmt"> <Icon type="contacts" /> <span >2店铺管理</span> </Link>
                    </Menu.Item>

                    <Menu.Item key="/goodsmgmt">
                      <Link to="/goodsmgmt"> <Icon type="contacts" /> <span >3商品管理</span> </Link>
                    </Menu.Item>

                    <Menu.Item key="/ordermgmt">
                      <Link to="/ordermgmt"> <Icon type="contacts" /> <span >4订单管理</span> </Link>
                    </Menu.Item>

                    <Menu.Item key="/stockmgmt">
                      <Link to="/stockmgmt"> <Icon type="contacts" /> <span >5库存管理</span> </Link>
                    </Menu.Item>

                    <Menu.Item key="/customermgmt">
                      <Link to="/customermgmt"> <Icon type="contacts" /> <span >6客户管理</span> </Link>
                    </Menu.Item>

                    <Menu.Item key="/assetsmgmt">
                      <Link to="/assetsmgmt"> <Icon type="contacts" /> <span >7资产管理</span> </Link>
                    </Menu.Item>

                     <Menu.Item key="/appplugin">
                      <Link to="/appplugin"> <Icon type="contacts" /> <span >8应用插件</span> </Link>
                    </Menu.Item>

                     <Menu.Item key="/dataanalysis">
                      <Link to="/dataanalysis"> <Icon type="contacts" /> <span >9数据分析</span> </Link>
                    </Menu.Item>

                </Menu>
            <div className="app-userinfo">
                18858568856
            </div>
        
            </Sider>
        )
    }
}

export default SiderCustom;

