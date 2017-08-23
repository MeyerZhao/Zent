import React from 'react';
import { Link } from 'react-router';
import { Breadcrumb, Table, Button } from 'antd'

const columns = [{
  title: '省份', dataIndex: 'item1', key: 'item1', render: text => <a href="">{text}</a>, }, {
  title: '城市', dataIndex: 'item2', key: 'item2', }, {
  title: '排序', dataIndex: 'item3', key: 'item3', }, {
  title: '可配送区域', dataIndex: 'item4', key: 'item4', }, {
  title: '未配送区域', dataIndex: 'item5', key: 'item5', }, {
  title: '更新时间', dataIndex: 'item6', key: 'item6', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">编辑</a>
      <span className="ant-divider" />
      <a href="">删除</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  item1: '13989456668',
  item2: '张胜男',
  item3: '13989456668',
  item4: '1866812121',
  item5: '高级管理员',
  item6: '2017-8-23 09:50:00',
}];

class index extends React.Component {
  render(){
    return (
       <div>
	       	<Breadcrumb className="mb20">
	       	   <Breadcrumb.Item><Link to="/shopmgmt/shopmgmtc">店铺设置</Link></Breadcrumb.Item>
	       	   <Breadcrumb.Item>配送范围</Breadcrumb.Item>
	       	</Breadcrumb>
          <h4 className="block-title mb10" >销售区域</h4>
          <p style={{padding:"10px"}}>销售区域并设置以后，超出销售区域的客户无法下单。默认情况下为无销售区域限制。</p>
	       	<div className="mb10">
             <Link to="/shopmgmt/shopmgmtcsubbforma"><Button type="primary" >添加区域</Button></Link>
          </div>
          <Table columns={columns} dataSource={data} />
       </div>
      )
  }
}
export default index

