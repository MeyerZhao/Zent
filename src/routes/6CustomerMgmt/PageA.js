import React from 'react'
import { Input, Form, Button } from 'antd';
import { Table } from 'antd';
import { DatePicker, Cascader, Select } from 'antd';
import { InputNumber  } from 'antd';
import city from '../../utils/city.js'
const Option = Select.Option;

const { RangePicker } = DatePicker;
const FormItem = Form.Item;

const columns = [{
  title: '注册手机', dataIndex: 'item1', key: 'item1', }, {
  title: '客户昵称', dataIndex: 'item2', key: 'item2', }, {
  title: '客户标签', dataIndex: 'item3', key: 'item3', }, {
  title: '所在地区', dataIndex: 'item4', key: 'item4', }, {
  title: '购买次数', dataIndex: 'item5', key: 'item5', }, {
  title: '购买金额', dataIndex: 'item6', key: 'item6', }, {
  title: '客单价', dataIndex: 'item7', key: 'item7', }, {
  title: '最后下单时间', dataIndex: 'item8', key: 'item8', }, {
  title: '最后登录时间', dataIndex: 'item9', key: 'item9', }, {
  title: '注册时间', dataIndex: 'item10', key: 'item10', }, {
  title: '来源', dataIndex: 'item11', key: 'item11', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">该标签</a>
      <span className="ant-divider" />
      <a href="">备注</a>
    </span>
  ),
}];

const children = [
    <option value="客户标签1">客户标签1</option>,
    <option value="客户标签2">客户标签2</option>,
    <option value="客户标签3">客户标签3</option>,
];

const children2 = [
    <option value="来源渠道1">来源渠道1</option>,
    <option value="来源渠道2">来源渠道2</option>,
    <option value="来源渠道3">来源渠道3</option>,
];

const data = [{
  key: '1',
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
          <div className="searchbg">          
            <Form layout='inline'>
              <FormItem label=""  >
                <Input placeholder="注册手机/客户昵称" style={{ minWidth:"180px" }}/>
              </FormItem>
              <FormItem >
                  <Select style={{ width: '25%'  }} defaultValue="0">
                    <Option value="0">登录时间</Option>
                    <Option value="1">注册时间</Option>
                    <Option value="2">购买时间</Option>
                  </Select>
                  <RangePicker style={{ width: '75%', marginLeft:"-1px"}}/>
              </FormItem>
              <FormItem  style={{marginBottom:"10px"}}>
                <Select style={{ width: "90px"  }} defaultValue="0">
                    <Option value="0">购买次数</Option>
                    <Option value="1">购买金额</Option>
                    <Option value="2">客单价</Option>
                  </Select>
                <InputNumber  min={1}  style={{marginLeft:"-1px"}}/>
              </FormItem>

              <br/>

              <FormItem  >
                <Select
                   mode="tags"
                   placeholder="客户标签"
                   style={{ minWidth:"180px" }}
                 >
                   {children}
                 </Select>
              </FormItem>

              <FormItem  >
                <Select
                   mode="tags"
                   placeholder="来源渠道"
                   style={{ minWidth: 150 }}
                 >
                   {children2}
                 </Select>
              </FormItem>

              <FormItem >
                <Cascader
                  size="large"
                  style={{ width: '100%' }}
                  options={city}
                  placeholder="所在地区"
                  changeOnSelect
                />
              </FormItem>

              <FormItem >
                <Button type="primary" >搜索</Button> <Button style={{ marginLeft: 6 }}>重置</Button>
              </FormItem>
            </Form>             
          </div>


              <div className="mb10" >
                <span className="table-infor">
                  客户数：3444  购买客户数：22   购买总额：2222.00   购买次数：111   客单价：13.00
                </span>
                <div style={{clear:"both"}}></div>
              </div>
              <Table columns={columns} dataSource={data} />

        </div>
      )
  }
}
export default index