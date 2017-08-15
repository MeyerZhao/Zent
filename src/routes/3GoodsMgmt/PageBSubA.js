import React from 'react'
import { Button, Form } from 'antd';
import { Input, Select, Checkbox } from 'antd';
import { Table } from 'antd';
const Option = Select.Option;
const Search = Input.Search;
const FormItem = Form.Item;


const columns = [{
  title: '商品', dataIndex: 'item1', key: 'item1', render: (text, record)=>( 
    <div style={{position:"relative"}}><img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2755178026,3344409706&fm=58" alt="鲜花" style={{width:"60px", height:"60px",float:"left"}} /> 
    <div style={{marginLeft:"70"}}>卡罗拉（网）<br/> 20枝  <br/> A级,橙色,本地,多头</div></div>
    ) }, {
  title: 'SKU编号', dataIndex: 'item2', key: 'item2', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">加入分组</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  item1: 'John Brown',
  item2: '101050A1',
  item3: '101050A1'
}];

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
    			<div className="mb10 searchbg" >
              <Form layout='inline' className="mb10">
              <FormItem label="">
                <Search placeholder="输入搜索内容" onSearch={value => console.log(value)} />
              </FormItem>
              <FormItem label="所属分组">
                <Select defaultValue="商品分组" style={{  width: 120 }} >
                  <Option value="分组1">分组1</Option>
                  <Option value="分组2">分组2</Option>
                  <Option value="分组3">分组3</Option>
                </Select>
              </FormItem>
              <FormItem label="颜色" className='formitemlabel'>
                <Checkbox >颜色1</Checkbox>
                <Checkbox >颜色2</Checkbox>
                <Checkbox >颜色3</Checkbox>
              </FormItem>
              <FormItem label="等级" className='formitemlabel'>
                <Checkbox >等级1</Checkbox>
                <Checkbox >等级2</Checkbox>
                <Checkbox >等级3</Checkbox>
              </FormItem>
              <FormItem label="产地" className='formitemlabel'>
                <Checkbox >产地1</Checkbox>
                <Checkbox >产地2</Checkbox>
                <Checkbox >产地3</Checkbox>
              </FormItem>
              <FormItem >
                <Button type="primary" >搜索</Button> 
              </FormItem>
            </Form>  
    			</div>

          <Table columns={columns} dataSource={data} rowSelection={rowSelection} />
    		</div>
      )
  }
}
export default index