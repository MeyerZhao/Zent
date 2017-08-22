/**
 * Created by  on 2017/4/13.
 */
import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router';
import { Pop, Button } from 'zent';
import './SiderCustom.css';

const trigger = 'hover';
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
    const content = (
        <div>
            <p style={{ marginBottom: 10 }}>店铺未认证，无法进行交易，请尽快完成认证</p>
            <Button type="danger">立即认证</Button>
        </div>
      );
    const content2 = (
        <div>
            <p style={{ marginBottom: 10 }}>尚未订购有赞餐饮服务，店铺处于打烊状态</p>
            <Button type="danger">立即认证</Button> <Button style={{borderColor:"transparent"}} type="primary" outline>订购记录</Button>
            <hr className="line2"/>
            <p style={{fontSize:"14px" }}>官方咨询电话：0571-85225188</p>
        </div>
      );
    const content3 = (
        <div>
            <div className="app-userinfo__pop-hd">
                <div>花集进货平台</div>
                <div>18858568856</div>
            </div>
            <div className="app-userinfo__pop-bd">
                <a href="">帐号设置</a>
            </div>
            <div className="app-userinfo__pop-bd">
                <a href="">切换店铺</a>
            </div>
            <div className="app-userinfo__pop-ft">
                <a href="">退出</a>
            </div>
        </div>
      );
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
                <Pop trigger={trigger} position="bottom-left" content={content} >
                  <div className="sider-tag" style={{marginRight:"5px"}}>未认证</div>
                </Pop>
                <Pop trigger={trigger} position="bottom-left" content={content2} >
                  <div className="sider-tag" style={{marginRight:"5px"}}>有赞餐饮</div>
                </Pop>
              </div>
            </div>
            <hr className="line" />

                <Menu className="menuitem"
                    style={{borderRight: "0px solid #e9e9e9"}}
                    onClick={this.menuClick}
                    mode='inline'
                    selectedKeys={[this.state.selectedKey]}
                >
                    <Menu.Item key="/" >
                      <Link to="/"> <span className="sidebar-icon sidebar-icon-workbench ">工作台</span></Link>
                    </Menu.Item>

                    <Menu.Item key="/shopmgmt">
                      <Link to="/shopmgmt"> <span className="sidebar-icon sidebar-icon-shop" >店铺管理</span> </Link>
                    </Menu.Item>

                    <Menu.Item key="/goodsmgmt">
                      <Link to="/goodsmgmt"> <span className="sidebar-icon sidebar-icon-goods" >商品管理</span> </Link>
                    </Menu.Item>

                    <Menu.Item key="/ordermgmt">
                      <Link to="/ordermgmt"> <span className="sidebar-icon sidebar-icon-order" >订单管理</span> </Link>
                    </Menu.Item>

                    <Menu.Item key="/stockmgmt">
                      <Link to="/stockmgmt"> <span className="sidebar-icon sidebar-icon-stock" >库存管理</span> </Link>
                    </Menu.Item>

                    <Menu.Item key="/customermgmt">
                      <Link to="/customermgmt"> <span className="sidebar-icon sidebar-icon-guest" >客户管理</span> </Link>
                    </Menu.Item>

                    <Menu.Item key="/assetsmgmt">
                      <Link to="/assetsmgmt"> <span className="sidebar-icon sidebar-icon-asset" >资产管理</span> </Link>
                    </Menu.Item>

                     <Menu.Item key="/appplugin">
                      <Link to="/appplugin"> <span className="sidebar-icon sidebar-icon-plugin" >应用插件</span> </Link>
                    </Menu.Item>

                     <Menu.Item key="/dataanalysis">
                      <Link to="/dataanalysis"> <span className="sidebar-icon sidebar-icon-data" >数据分析</span> </Link>
                    </Menu.Item>

                </Menu>

                <Pop className="app-userinfo__pop" trigger={trigger} position="top" content={content3} >
                    <div className="app-userinfo">
                        <div className="app-userinfo-avatar"></div>
                       <div className="app-userinfo__phone">18858568856</div>
                    </div>
                </Pop>
               
        
            </Sider>
        )
    }
}

export default SiderCustom;

