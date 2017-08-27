import React from 'react'
import { Link } from 'react-router'
import { Table, Input, Button, Breadcrumb } from 'antd';



const columns = [{
  title: '供应商名称', dataIndex: 'item1', key: 'item1', }, {
  title: '编号', dataIndex: 'item2', key: 'item2', }, {
  title: '联系人', dataIndex: 'item3', key: 'item3', }, {
  title: '手机号码', dataIndex: 'item4', key: 'item4', }, {
  title: '操作', dataIndex: 'item9', key: 'item9', }];

const data = [{
  key: '1', item1: 'John Brown', item2: 'John Brown', item3: 'John Brown', item4: 'John Brown', item5: 'John Brown', item6: 'John Brown', }];


class index extends React.Component {

  render(){
    return (
        <div>
          <Breadcrumb className="mb20">
             <Breadcrumb.Item><Link to="/stockmgmtf">供应商</Link></Breadcrumb.Item>
             <Breadcrumb.Item>供应商列表</Breadcrumb.Item>
          </Breadcrumb>
          <div className="mb10 searchbg"  style={{marginTop:"0"}}>
            <Input placeholder="名称或手机号"style={{ marginRight:"10px", width: 200 }}></Input>
            <Button type="primary" >搜索</Button>
          </div>

          <div className="mb10">
              <Link to='/stockmgmtf/stockmgmtfforma'>
                <Button type="primary" >新增供应商</Button>
              </Link>
          </div>

          <Table columns={columns} dataSource={data} />

          
        </div>
      )
  }
}

export default index