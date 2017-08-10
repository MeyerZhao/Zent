import React from 'react'
import { Link } from 'react-router';
import { Menu } from 'antd';


class index extends React.Component {
  state = {
    current: '店铺信息',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render(){
    return (
      <div>
        <Menu
           onClick={this.handleClick}
           selectedKeys={[this.state.current]}
           mode="horizontal"
         >
           <Menu.Item key="店铺信息"><Link to="/shopmgmt/shopmgmta">店铺信息 </Link></Menu.Item>
           <Menu.Item key="店铺装修"><Link to="/shopmgmt/shopmgmtb">店铺装修 </Link> </Menu.Item>
           <Menu.Item key="店铺设置"><Link to="/shopmgmt/shopmgmtc">店铺设置 </Link> </Menu.Item>
           <Menu.Item key="管理员"> <Link to="/shopmgmt/shopmgmtd">管理员</Link> </Menu.Item>
           <Menu.Item key="打印机"> <Link to="/shopmgmt/shopmgmte">打印机</Link> </Menu.Item>
          
         </Menu>

         <div style={{padding:"20px 30px"}}>
           {this.props.children}
         </div>


       { /*<Tabs defaultActiveKey="1" onChange={callback} style={{padding:"20px"}}>
                  <TabPane tab="店铺信息" key="1">
                    <ShopInfo />
                  </TabPane>
                  <TabPane tab="店铺装修" key="2">Content of Tab Pane 2</TabPane>
                  <TabPane tab="店铺设置" key="3">Content of Tab Pane 3</TabPane>
                  <TabPane tab="管理员" key="4">Content of Tab Pane 3</TabPane>
                  <TabPane tab="打印机" key="5">Content of Tab Pane 3</TabPane>
                </Tabs>*/}

      </div>
    	)
  }
}

export default index