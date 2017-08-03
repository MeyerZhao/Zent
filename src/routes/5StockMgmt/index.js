import React from 'react'
import { Link } from 'react-router';
import { Menu } from 'antd';


export default class extends React.Component {
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
           <Menu.Item key="1"><Link to="/stockmgmta">商品库存 </Link></Menu.Item>
           <Menu.Item key="2"><Link to="/stockmgmtb">商品入库</Link> </Menu.Item>
           <Menu.Item key="3"><Link to="/stockmgmtc">商品出库 </Link> </Menu.Item>
           <Menu.Item key="5"><Link to="/stockmgmtd">库存盘点 </Link> </Menu.Item>
           <Menu.Item key="6"><Link to="/stockmgmte">库存预警 </Link> </Menu.Item>
           <Menu.Item key="7"><Link to="/stockmgmtf">供应商 </Link> </Menu.Item>
          
         </Menu>

         <div style={{padding:"20px"}}>
           {this.props.children}
         </div>

      </div>
    	)
  }
}

