import React from 'react';
import { Link } from 'react-router';
import { Breadcrumb, Table, Button } from 'antd'

const columns = [{
  title: '序号', dataIndex: 'item1', key: 'item1', render: text => <a href="">{text}</a>, }, {
  title: '公告标题', dataIndex: 'item2', key: 'item2', }, {
  title: '发布时间', dataIndex: 'item3', key: 'item3', }, {
  title: '公告内容', dataIndex: 'item6', key: 'item6', }, {
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
	       	   <Breadcrumb.Item>店铺公告</Breadcrumb.Item>
	       	</Breadcrumb>
          <h4 className="block-title mb10" >店铺公告</h4>
	       	<div className="mb10">
             <Link to="/shopmgmt/shopmgmtcsubcforma"><Button type="primary" >添加公告</Button></Link>
          </div>
          <Table columns={columns} dataSource={data} />
       </div>
      )
  }
}
export default index

