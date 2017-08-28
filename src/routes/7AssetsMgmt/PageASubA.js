import React from 'react';
import { Breadcrumb } from 'antd';

class index extends React.Component {
  render(){
    return (
        <div>
        	<Breadcrumb>
        	    <Breadcrumb.Item>Home</Breadcrumb.Item>
        	    <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
        	    <Breadcrumb.Item>An Application</Breadcrumb.Item>
        	</Breadcrumb>
        	<h4 className="block-title" >充值</h4>

        </div>
      )
  }
}
export default index

