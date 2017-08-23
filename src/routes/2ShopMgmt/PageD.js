import React from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router';

const columns = [{
  title: '管理员账号', dataIndex: 'item1', key: 'item1', render: text => <a href="">{text}</a>, }, {
  title: '姓名', dataIndex: 'item2', key: 'item2', }, {
  title: '联系方式', dataIndex: 'item3', key: 'item3', }, {
  title: '添加人', dataIndex: 'item4', key: 'item4', }, {
  title: '赋予权限', dataIndex: 'item5', key: 'item5', }, {
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
          <div className="mb10">
            <Link to="/shopmgmt/shopmgmtdforma"><Button type="primary" >添加员工</Button></Link>
          </div>
          <Table columns={columns} dataSource={data} />
        </div>
      )
  }
}

export default index



