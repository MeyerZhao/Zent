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
           <Menu.Item key="1"><Link to="/appplugina">优惠券</Link></Menu.Item>
           <Menu.Item key="2"><Link to="/apppluginb">满减</Link> </Menu.Item>
           <Menu.Item key="3"><Link to="/apppluginc">优惠套餐</Link> </Menu.Item>
           <Menu.Item key="4"><Link to="/appplugind">短信推送</Link> </Menu.Item>
          
         </Menu>

         <div style={{padding:"20px"}}>
           {this.props.children}
         </div>

      </div>
    	)
  }
}

