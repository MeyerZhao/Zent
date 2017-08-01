import React from 'react';
import { Table } from 'antd';
import Modal from '../../components/Modal.js'
import AdminForm from './AdminForm.js'


const columns = [{
  title: 'HUAXM账号', dataIndex: 'item1', key: 'item1', render: text => <a href="">{text}</a>, }, {
  title: '员工姓名', dataIndex: 'item2', key: 'item2', }, {
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
            <Modal title="添加员工"><AdminForm /> </Modal>
          </div>
        	<Table columns={columns} dataSource={data} />
        </div>
      )
  }
}

export default index


