import React from 'react'
import { Input, Form, Button } from 'antd';
import { Table, Icon } from 'antd';
import { DatePicker, Select } from 'antd';
const Option = Select.Option;
const { RangePicker } = DatePicker;
const FormItem = Form.Item;




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

export default class index extends React.Component {
  render(){
    return (
        <div>
          <div className="searchbg">          
            <Form layout='inline'>
              <FormItem label="搜索">
                <Input placeholder="商品/SKU/供应商/批次号" />
              </FormItem>
              <FormItem label="入库时间">
                <RangePicker />
              </FormItem>
              <FormItem label="商品分组">
                <Select defaultValue="商品分组" style={{  width: 120 }} >
                  <Option value="分组1">分组1</Option>
                  <Option value="分组2">分组2</Option>
                  <Option value="分组3">分组3</Option>
                </Select>
              </FormItem>
              <FormItem >
                <Button type="primary" >搜索</Button> <Button style={{ marginLeft: 8 }}>重置</Button>
              </FormItem>
            </Form>             
          </div>

              <div className="table-tab ">
                全部 | 170518 | 170510
              </div>

              <div className="table-tab mb10">
                <Button type="primary" >扫码入库</Button>
                <Button style={{marginLeft:"6px"}}>批量导入</Button>
                <span style={{float:"right", marginTop:"10px"}}>
                    商品数：11  入库总数：8888  入库总额：12.00
                </span>
              </div>
              <Table columns={columns} dataSource={data} />
              
        </div>
      )
  }
}
