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
           <Menu.Item key="1"><Link to="/goodsmgmta">报价管理 </Link></Menu.Item>
           <Menu.Item key="2"><Link to="/goodsmgmtb">商品管理 </Link> </Menu.Item>
           <Menu.Item key="3"><Link to="/goodsmgmtc">商品分组 </Link> </Menu.Item>
          
         </Menu>

         <div style={{padding:"20px"}}>
           {this.props.children}
         </div>

      </div>
    	)
  }
}

export default index