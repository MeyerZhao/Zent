
import React from 'react'
import { Input, Form, Button } from 'antd';
import { Table, Icon } from 'antd';
import { DatePicker, Cascader } from 'antd';
import { InputNumber, Checkbox  } from 'antd';
import city from '../../utils/city.js'
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

class index extends React.Component {
  render(){
    const formItemLayout = {
      // style:{marginBottom:"4px"}
    };
    return (
        <div>
          <div className="searchbg">          
            <Form layout='inline'>
              <FormItem label="搜索：" {...formItemLayout}>
                <Input placeholder="UID/注册手机/昵称/" />
              </FormItem>
              <FormItem label="注册时间：" {...formItemLayout}>
                <RangePicker />
              </FormItem>
              <FormItem label="购买次数：" {...formItemLayout}>
                <InputNumber min={1} />
              </FormItem>
              <FormItem label="所在地区：" {...formItemLayout}>
                <Cascader
                  size="large"
                  style={{ width: '100%' }}
                  options={city}
                  placeholder="请选择地址"
                  changeOnSelect
                />
              </FormItem>
              <FormItem label="客户标签：" {...formItemLayout} className='formitemlabel'>
                <Checkbox >标签1</Checkbox>
                <Checkbox >标签2</Checkbox>
                <Checkbox >标签3</Checkbox>
              </FormItem>
              <FormItem label="来源：" {...formItemLayout} className='formitemlabel'>
                <Checkbox >渠道1</Checkbox>
                <Checkbox >渠道2</Checkbox>
              </FormItem>

              <FormItem {...formItemLayout}>
                <Button type="primary" >搜索</Button> <Button style={{ marginLeft: 6 }}>重置</Button>
              </FormItem>
            </Form>             
          </div>


              <div className="mb10" style={{textAlign:"right"}}>
                <span >
                  客户数：3444  购买客户数：22   购买总额：2222.00   购买次数：111   客单价：13.00
                </span>
              </div>
              <Table columns={columns} dataSource={data} />

        </div>
      )
  }
}
export default index