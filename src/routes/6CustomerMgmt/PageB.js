import React from 'react';
import { Table } from 'antd';
import Modal from '../../components/Modal.js'
import PageBForm from './PageBForm.js'
const columns = [{
  title: '标签名称', dataIndex: 'item1', key: 'item1', render: text => <a href="">{text}</a>, }, {
  title: '客户数', dataIndex: 'item2', key: 'item2', }, {
  title: '自动加标签条件', dataIndex: 'item3', key: 'item3', }, {
  title: '标签权益', dataIndex: 'item4', key: 'item4', }, {
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
  item1: '标签名称',
  item2: '2',
  item3: '累计成功交易 1 笔',
  item4: '无门槛包邮产品折扣 9.88折',
}];
class index extends React.Component {
  render(){
    return (
        <div>
          <div className="mb10">
             <Modal title="新建标签" footer={null}> <PageBForm /> </Modal>
          </div>
          <Table columns={columns} dataSource={data} />
        </div>
      )
  }
}

export default index



