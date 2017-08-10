import React from 'react'
import { Button, } from 'antd';
import { Table, Icon } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';
import { Tabs } from 'zent';
const TabPanel = Tabs.TabPanel;

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
  state = {
    activeId: '1'
  }
  onTabChange = (id) => {
    this.setState({
      activeId: id
    });
  }
  render(){
    return (
        <div>
          <div className="mb10 searchbg" >
            <Search placeholder="输入搜索内容"style={{ marginRight:"10px", width: 200 }} onSearch={value => console.log(value)} />
            <Select defaultValue="全部分组" style={{ marginRight:"10px", width: 200 }} >
              <Option value="1">分组一</Option>
              <Option value="2">分组二</Option>
              <Option value="3">分组三</Option>
            </Select>
            <Button type="primary" >搜索</Button>
          </div>

          <div className="mb10">
            <Tabs activeId={this.state.activeId} onTabChange={this.onTabChange} >
              <TabPanel tab="已报价" id="1" >
                <div className="mb10">
                    <Button type="primary" >导出到Excel</Button> <Button type="primary"  outline >价格导入</Button>
                </div>
                <Table columns={columns} dataSource={data} />
              </TabPanel>
              <TabPanel tab="已售完"id="2"> <div>选项二的内容</div> </TabPanel> 
              <TabPanel tab="未报价"id="3"> <div>选项三的内容</div> </TabPanel>
            </Tabs>
          </div>

        </div>
      )
  }
}

export default index