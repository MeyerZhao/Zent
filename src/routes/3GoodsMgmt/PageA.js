import React from 'react'
import { Button, } from 'antd';
import { Table, Input, Select } from 'antd';
import { Tabs } from 'zent';
const TabPanel = Tabs.TabPanel;
const Option = Select.Option;
const columns = [{
  title: '商品', dataIndex: 'item1', key: 'item1', }, {
  title: 'SKU编号', dataIndex: 'item2', key: 'item2', }, {
  title: '属性值', dataIndex: 'item3', key: 'item3', }, {
  title: '所属分组', dataIndex: 'item4', key: 'item4', }, {
  title: '报价', dataIndex: 'item5', key: 'item5', }, {
  title: '库存', dataIndex: 'item6', key: 'item6', }, {
  title: '最小订购', dataIndex: 'item7', key: 'item7', }, {
  title: '操作记录', key: 'action', render: (text, record) => (
    <span>
      admin
      <span className="ant-divider" />
      2017-8-25 10:31:06
    </span>
  ),
}];

const data = [{
  key: '1', item1: 'John Brown', item2: 'John Brown', item3: 'John Brown', item4: 'John Brown', item5: 'John Brown', item6: 'John Brown', item7: 'John Brown' }, {
  key: '1', item1: 'John Brown', item2: 'John Brown', item3: 'John Brown', item4: 'John Brown', item5: 'John Brown', item6: 'John Brown', item7: 'John Brown' }]; 


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
            <Input placeholder="商品/SKU编号" style={{ marginRight:"10px", width: 200 }} />
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
                    <Button >导出到Excel</Button> <Button >价格导入</Button>
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