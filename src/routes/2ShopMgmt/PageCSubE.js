import React from 'react';
import { Link } from 'react-router';
import { Breadcrumb, Table, Button } from 'antd'



const columns = [{
  title: '自提点名称', dataIndex: 'item1', key: 'item1', render: text => <a href="">{text}</a>, }, {
  title: '联系地址', dataIndex: 'item2', key: 'item2', }, {
  title: '联系电话', dataIndex: 'item3', key: 'item3', }, {
  title: '营业时间', dataIndex: 'item5', key: 'item5', }, {
  title: '更新时间', dataIndex: 'item6', key: 'item6', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">编辑</a>
      <span className="ant-divider" />
      <a href="">删除</a>
    </span>
  ),
}];

const data = [];

class index extends React.Component {
  render(){
    return (
       <div>
	       	<Breadcrumb className="mb20">
	       	   <Breadcrumb.Item><Link to="/shopmgmt/shopmgmtc">店铺设置</Link></Breadcrumb.Item>
	       	   <Breadcrumb.Item>自提点设置</Breadcrumb.Item>
	       	</Breadcrumb>
          <h4 className="block-title mb10" >自提点设置</h4>
          <p style={{padding:"10px"}}>设置自提点后，客户可以根据自身情况选择附近的自提点上门提货。</p>
	       	<div className="mb10">
             <Link to="/shopmgmt/shopmgmtcsubeforma"><Button type="primary" >添加自提点</Button></Link>
          </div>
          <Table columns={columns} dataSource={data} />
       </div>
      )
  }
}
export default index

