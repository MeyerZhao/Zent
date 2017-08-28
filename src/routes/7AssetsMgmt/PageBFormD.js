import React from 'react';
import { Table } from 'antd';

const columns = [{
  title: '用户注册手机', dataIndex: 'item1', key: 'item1', render: text => <a href="">{text}</a>, }, {
  title: '金额', dataIndex: 'item2', key: 'item2', }, {
  title: '白条类型', dataIndex: 'item3', key: 'item3', }, {
  title: '白条额度', dataIndex: 'item4', key: 'item4', }, {
  title: '白条余额', dataIndex: 'item5', key: 'item5', }, {
  title: '创建时间', dataIndex: 'item6', key: 'item6', }, {
  title: '操作人', dataIndex: 'item7', key: 'item7', }, {
  title: '备注', key: 'action', render: (text, record) => (
    <span>
      <a href="">订单号码</a>
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
        <div >
          <div className="mb10">
            <span style={{textAlign:"right", marginTop:"10px"}}>
              当前白条开通用户：18  白条总额：1000,000.00元   应收金额：20,000.00元
            </span>
          </div>
          <Table columns={columns} dataSource={data} />
        </div>
      )
  }
}

export default index



