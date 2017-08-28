import React from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router';

const columns = [{
  title: '用户注册手机', dataIndex: 'item1', key: 'item1', render: text => <a href="">{text}</a>, }, {
  title: '用户昵称', dataIndex: 'item2', key: 'item2', }, {
  title: '白条状态', dataIndex: 'item3', key: 'item3', }, {
  title: '结算周期', dataIndex: 'item4', key: 'item4', }, {
  title: '白条额度', dataIndex: 'item5', key: 'item5', }, {
  title: '白条余额', dataIndex: 'item6', key: 'item6', }, {
  title: '应收金额', dataIndex: 'item7', key: 'item7', }, {
  title: '使用次数', dataIndex: 'item8', key: 'item8', }, {
  title: '更新时间', dataIndex: 'item9', key: 'item9', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
	    <Link to="/assetsmgmtb/assetsmgmtbforma">编辑</Link>
      <span className="ant-divider" />
      <Link to="/assetsmgmtb/assetsmgmtbformb">还款</Link>
      <span className="ant-divider" />
      <Link to="/assetsmgmtb/assetsmgmtbformc">额度调整</Link>
      <span className="ant-divider" />
      <Link to="/assetsmgmtb/assetsmgmtbformd">白条对账单</Link>
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
          	<Link to="/assetsmgmtb/assetsmgmtbforma"><Button type="primary" >新建白条账户</Button></Link>
            <span className="table-infor">
            	订单数：11  客户数：10   订单金额：200.00  商品数：123
            </span>
          </div>
          <Table columns={columns} dataSource={data} />
        </div>
      )
  }
}

export default index



