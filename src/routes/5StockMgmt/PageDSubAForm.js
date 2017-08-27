import React from 'react';
import { Table, Input, Select } from 'antd';
const Option = Select.Option;
const Search = Input.Search;
const columns = [{
  title: '商品名称', dataIndex: 'item1', key: 'item1', }, {
  title: '规格', dataIndex: 'item2', key: 'item2', }, {
  title: '条形码', dataIndex: 'item3', key: 'item3', }, {
  title: '单位', dataIndex: 'item4', key: 'item4', }, {
  title: '库存量', dataIndex: 'item5', key: 'item5', }];

const data = [];


// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User',    // Column configuration not to be checked
  }),
};
class index extends React.Component {
  render(){
    return (
        <div>

          <div className="mb10">
            <Select defaultValue="全部分组" style={{ marginRight:"10px", width: 150 }} >
              <Option value="1">分组一</Option>
              <Option value="2">分组二</Option>
              <Option value="3">分组三</Option>
            </Select>
            <span>已选择0种商品</span>
            <Search placeholder="搜索" style={{width: 150, float:"right" }}/>
          </div>

          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
          <br/>
        </div>
      )
  }
}

export default index



