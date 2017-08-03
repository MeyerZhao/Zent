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
           <Menu.Item key="1"><Link to="/assetsmgmta">资产管理</Link></Menu.Item>
           <Menu.Item key="2"><Link to="/assetsmgmtb">白条管理</Link></Menu.Item>
          
         </Menu>

         <div style={{padding:"20px"}}>
           {this.props.children}
         </div>

      </div>
    	)
  }
}

