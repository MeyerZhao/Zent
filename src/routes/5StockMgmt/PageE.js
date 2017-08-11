import React from 'react'
import { Table, Input, Button, Form, Select, Checkbox } from 'antd';
import { Link } from 'react-router'
import { Switch } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;


const columns = [{
  title: '商品', dataIndex: 'item1', key: 'item1', }, {
  title: 'SKU编号', dataIndex: 'item2', key: 'item2', }, {
  title: '属性', dataIndex: 'item3', key: 'item3', }, {
  title: '入库数', dataIndex: 'item4', key: 'item4', }, {
  title: '入库金额', dataIndex: 'item5', key: 'item5', }, {
  title: '已出库数', dataIndex: 'item6', key: 'item6', }, {
  title: '出库金额', dataIndex: 'item7', key: 'item7', }, {
  title: '收益', dataIndex: 'item8', key: 'item8', }, {
  title: '库存量', dataIndex: 'item9', key: 'item9', }];

const data = [{
  key: '1', item1: 'John Brown', item2: 'John Brown', item3: 'John Brown', item4: 'John Brown', item5: 'John Brown', item6: 'John Brown', }, {
  key: '2', item1: 'John Brown', item2: 'John Brown', item3: 'John Brown', item4: 'John Brown', item5: 'John Brown', item6: 'John Brown', }, {
  key: '3', item1: 'John Brown', item2: 'John Brown', item3: 'John Brown', item4: 'John Brown', item5: 'John Brown', item6: 'John Brown', }];


class index extends React.Component {

  render(){
    return (
        <div>
          <div className="searchbg" >
          	<Form layout='inline'>
          	  <FormItem label="启用库存预警功能">
          	    <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={true} />
          	  </FormItem>
          	  <FormItem label="设置默认库存预警值">
          	    <Input />
          	  </FormItem>
          	  <FormItem >
          	    <Button type="primary" >保存</Button> 
          	  </FormItem>
          	</Form> 
          </div>

          <div style={{padding:"20px",margin:"0 -20px 20px", background:"#f8f8f8"}} >
          	<Form layout='inline'>
	          	<FormItem label="商品分组">
	          	  <Select defaultValue="商品分组" style={{  width: 120 }} >
	          	    <Option value="分组1">分组1</Option>
	          	    <Option value="分组2">分组2</Option>
	          	    <Option value="分组3">分组3</Option>
	          	  </Select>
	          	</FormItem>
          	  <FormItem label="商品名称或编码">
          	  	<Input />
          	  </FormItem>
          	  <FormItem label="商品状态" className='formitemlabel'>
          	    <Checkbox >标签1</Checkbox>
          	    <Checkbox >标签2</Checkbox>
          	    <Checkbox >标签3</Checkbox>
          	  </FormItem>
          	  <FormItem >
          	    <Button type="primary" >筛选</Button> 
          	    <Button style={{marginLeft:"10px"}}>清除筛选</Button>
          	  </FormItem>
          	</Form> 
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