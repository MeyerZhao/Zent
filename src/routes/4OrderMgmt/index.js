// import React from 'react'
// class index extends React.Component {
//   render(){
//     return (
//     		<h1>OrderMgmt</h1>
//     	)
//   }
// }
// export default index

import React from 'react'
import { Link } from 'react-router';
import { Menu } from 'antd';


class index extends React.Component {
  state = {
    current: '1',
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
           <Menu.Item key="1"><Link to="/ordermgmta">订单列表 </Link></Menu.Item>
           <Menu.Item key="2"><Link to="/ordermgmtb">客户合并订单</Link> </Menu.Item>
           <Menu.Item key="3"><Link to="/ordermgmtc">订货订单 </Link> </Menu.Item>
           <Menu.Item key="4"><Link to="/ordermgmtd">维权订单 </Link> </Menu.Item>
          
         </Menu>

         <div style={{padding:"20px"}}>
           {this.props.children}
         </div>

      </div>
    	)
  }
}

export default index