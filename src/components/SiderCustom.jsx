/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
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
                    mode='inline'
                    selectedKeys={[this.state.selectedKey]}
                >
                    <Menu.Item key="/">
                      <Link to="/"> <span className="sidebar-icon">1工作台</span></Link>
                    </Menu.Item>

                    <Menu.Item key="/shopmgmt">
                      <Link to="/shopmgmt"> <span className="sidebar-icon sidebar-icon-shop" >2店铺管理</span> </Link>
                    </Menu.Item>

                    <Menu.Item key="/goodsmgmt">
                      <Link to="/goodsmgmt"> <span className="sidebar-icon sidebar-icon-goods" >3商品管理</span> </Link>
                    </Menu.Item>

                    <Menu.Item key="/ordermgmt">
                      <Link to="/ordermgmt"> <span className="sidebar-icon sidebar-icon-order" >4订单管理</span> </Link>
                    </Menu.Item>

                    <Menu.Item key="/stockmgmt">
                      <Link to="/stockmgmt"> <span className="sidebar-icon" >5库存管理</span> </Link>
                    </Menu.Item>

                    <Menu.Item key="/customermgmt">
                      <Link to="/customermgmt"> <span className="sidebar-icon" >6客户管理</span> </Link>
                    </Menu.Item>

                    <Menu.Item key="/assetsmgmt">
                      <Link to="/assetsmgmt"> <span className="sidebar-icon sidebar-icon-asset" >7资产管理</span> </Link>
                    </Menu.Item>

                     <Menu.Item key="/appplugin">
                      <Link to="/appplugin"> <span className="sidebar-icon sidebar-icon-plugin" >8应用插件</span> </Link>
                    </Menu.Item>

                     <Menu.Item key="/dataanalysis">
                      <Link to="/dataanalysis"> <span className="sidebar-icon" >9数据分析</span> </Link>
                    </Menu.Item>

                </Menu>

            <div className="app-userinfo">
                <div className="app-userinfo-avatar"></div>
                <div className="app-userinfo__phone">18858568856</div>
            </div>
        
            </Sider>
        )
    }
}

export default SiderCustom;

