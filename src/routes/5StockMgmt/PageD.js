import React from 'react'
import { Table, Input, Button  } from 'antd';
import { Link } from 'react-router'

const Search = Input.Search;

const columns = [{
  title: '单据编号', dataIndex: 'item1', key: 'item1', }, {
  title: '业务时间', dataIndex: 'item6', key: 'item6', }, {
  title: '盘点商品', dataIndex: 'item7', key: 'item7', }, {
  title: '经办人', dataIndex: 'item8', key: 'item8', }, {
  title: '操作', dataIndex: 'item9', key: 'item9', }];

const data = [{
  key: '1', item1: 'John Brown', item2: 'John Brown', item3: 'John Brown', item4: 'John Brown', item5: 'John Brown', item6: 'John Brown', }, {
  key: '2', item1: 'John Brown', item2: 'John Brown', item3: 'John Brown', item4: 'John Brown', item5: 'John Brown', item6: 'John Brown', }, {
  key: '3', item1: 'John Brown', item2: 'John Brown', item3: 'John Brown', item4: 'John Brown', item5: 'John Brown', item6: 'John Brown', }];


class index extends React.Component {

  render(){
    return (
        <div>
          <div className="mb10 searchbg" >
          <Input placeholder="搜索" style={{ marginRight:"10px", width: 200 }}  ></Input>
            <Button type="primary" >搜索</Button>
          </div>

          <div className="mb10">
              <Link to='/stockmgmtd/stockmgmtdsuba'> <Button type="primary" >新建盘点</Button> </Link>
          </div>

          <Table columns={columns} data={data} />

          
        </div>
      )
  }
}

export default index