import React from 'react';
import { Table } from 'antd';
import Modal from '../../components/Modal.js'




const columns = [{
  title: '标签名称', dataIndex: 'item1', key: 'item1', render: text => <a href="">{text}</a>, }, {
  title: '客户数', dataIndex: 'item4', key: 'item4', }, {
  title: '自动加标签条件', dataIndex: 'item5', key: 'item5', }, {
  title: '标签权益', dataIndex: 'item6', key: 'item6', }, {
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
  item1: 'John Brown',
  item2: 'John Brown',
  item3: 'John Brown',
  item4: 'John Brown',
  item5: 'John Brown',
  item6: 'John Brown',
}, {
  key: '2',
  item1: 'John Brown',
  item2: 'John Brown',
  item3: 'John Brown',
  item4: 'John Brown',
  item5: 'John Brown',
  item6: 'John Brown',
}, {
  key: '3',
  item1: 'John Brown',
  item2: 'John Brown',
  item3: 'John Brown',
  item4: 'John Brown',
  item5: 'John Brown',
  item6: 'John Brown',
}];
class index extends React.Component {
  render(){
    return (
        <div>
          <div className="mb10">
            <Modal title="新建标签">来自2-4</Modal>
          </div>
          <Table columns={columns} dataSource={data} />
        </div>
      )
  }
}

export default index



