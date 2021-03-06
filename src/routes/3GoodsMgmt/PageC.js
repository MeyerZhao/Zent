import React from 'react'
import { Link } from 'react-router';
import { Table, Icon, Button } from 'antd';

const columns = [{
  title: '打印机', dataIndex: 'item4', key: 'item4', }, {
  title: '打印接机身号码', dataIndex: 'item5', key: 'item5', }, {
  title: '打印机状态', dataIndex: 'item6', key: 'item6', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <span className="ant-divider" />
      <a href="">Delete</a>
      <span className="ant-divider" />
      <a href="" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];

const data = [{
  key: '1', item1: 'John Brown', item2: 'John Brown', item3: 'John Brown', item4: 'John Brown', item5: 'John Brown', item6: 'John Brown', }, {
  key: '2', item1: 'John Brown', item2: 'John Brown', item3: 'John Brown', item4: 'John Brown', item5: 'John Brown', item6: 'John Brown', }, {
  key: '3', item1: 'John Brown', item2: 'John Brown', item3: 'John Brown', item4: 'John Brown', item5: 'John Brown', item6: 'John Brown', }];

class index extends React.Component {
  render(){
    return (
      <div>
        <div className="mb10">
          <div style={{textAlign:"left"}}>
            <Link to="/goodsmgmtc/goodsmgmtcforma"><Button type="primary" >新建分组</Button> </Link>
          </div>
        </div>

        <Table columns={columns} dataSource={data} />
      </div>
      )
  }
}
export default index