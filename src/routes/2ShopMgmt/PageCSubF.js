import React from 'react';
import { Link } from 'react-router';
import { Breadcrumb } from 'antd';

class index extends React.Component {
  render(){
    return (
      <div>
	       	<Breadcrumb className="mb20">
	       	   <Breadcrumb.Item><Link to="/shopmgmt/shopmgmtc">店铺设置</Link></Breadcrumb.Item>
	       	   <Breadcrumb.Item>配货单</Breadcrumb.Item>
	       	</Breadcrumb>
         <h4 className="block-title mb10" >预览效果</h4>
         <div style={{width:"346px"}}>

         	<h1 style={{textAlign:"center", marginBottom:"20px"}}>商家店铺名称</h1>

	         	<div className="mb20">
	         		<div style={{float:"right", width:"80px", height:"80px", background:"#ddd"}}>
	         											商家二维码
	         		</div>
	         		<div style={{fontSize:"14px", lineHeight:"27px"}}>
	         				         	<p>订单编号：201003003000</p>
	         				         	<p>配送时间：2017年06月16日 全天</p>
	         				         	<p>客户编码：122222222</p>         	
	         		</div>
	         	</div>

	         <h2>姓名 手机号码</h2>
	         <p>浙江省 杭州市 西湖区 建国北路236号诚信大厦18层</p>


         </div>
	       	
      </div>
      )
  }
}
export default index

