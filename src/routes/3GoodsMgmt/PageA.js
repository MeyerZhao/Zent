import React from 'react'
import { Button, } from 'zent';
import { Table, Icon } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';

import { Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const Search = Input.Search;

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
          <div className="mb10 searchbg" >
            <Search placeholder="input search text"style={{ marginRight:"10px", width: 200 }} onSearch={value => console.log(value)} />
            <Select defaultValue="lucy" style={{  width: 120 }} >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>

          <div className="mb10">
            <RadioGroup defaultValue="a" size="large" >
                <RadioButton value="a">已报价</RadioButton>
                <RadioButton value="b">已售完</RadioButton>
                <RadioButton value="c">未报价</RadioButton>
            </RadioGroup>

            <div style={{float:"right"}}>
              <Button type="primary" >导出到Excel</Button> <Button type="primary"  outline >价格导入</Button>
            </div>

            
          </div>

          <Table columns={columns} dataSource={data} />
        </div>
      )
  }
}

export default index