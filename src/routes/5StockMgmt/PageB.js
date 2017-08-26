import React from 'react'
import { Input, Form, Button } from 'antd';
import { Table, Icon } from 'antd';
import { DatePicker, Select } from 'antd';
import { Tabs } from 'zent';
const TabPanel = Tabs.TabPanel;
const Option = Select.Option;
const { RangePicker } = DatePicker;
const FormItem = Form.Item;

const columns = [{
  title: '商品', dataIndex: 'item1', key: 'item1', render: (text, record)=>( 
  <div style={{position:"relative"}}><img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2755178026,3344409706&fm=58" alt="鲜花" style={{width:"60px", height:"60px",float:"left"}} /> 
  <div style={{marginLeft:"70"}}>卡罗拉（网）<br/> 20枝  <br/> A级,橙色,本地,多头</div></div>
  ) }, {
  title: 'SKU编号', dataIndex: 'item2', key: 'item2', }, {
  title: '属性值', dataIndex: 'item3', key: 'item3', }, {
  title: '入库数', dataIndex: 'item4', key: 'item4', }, {
  title: '已出库数', dataIndex: 'item5', key: 'item5', }, {
  title: '入库价格', dataIndex: 'item6', key: 'item6', }, {
  title: '供应商', dataIndex: 'item7', key: 'item7', }, {
  title: '入库时间', dataIndex: 'item8', key: 'item8', }, {
  title: '批次号', dataIndex: 'item9', key: 'item9', }];

const data = [{
  key: '1',
  item1: '101050A1',
  item2: 'A级,橙色,本地,多头',
  item3: '8',
  item4: '7',
  item5: '2.00',
  item6: '未知',
  item7: '2017-05-02 12:01:27 yushui',
  item8: '170517',
}];

export default class index extends React.Component {
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
          <div className="searchbg">          
            <Form layout='inline'>
              <FormItem label="">
                <Input placeholder="商品/SKU/供应商/批次号" />
              </FormItem>
              <FormItem label="">
                <RangePicker />
              </FormItem>
              <FormItem label="">
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

              <div className="mb10">
                <Tabs activeId={this.state.activeId} onTabChange={this.onTabChange} >
                  <TabPanel tab="全部" id="1" >
                    <div className="mb10">
                      <Button type="primary" >扫码入库</Button>
                      <Button style={{marginLeft:"6px"}}>批量导入</Button>
                      <span style={{float:"right", marginTop:"10px"}}>
                          商品数：11  入库总数：8888  入库总额：12.00
                      </span>
                    </div>
                    <Table columns={columns} dataSource={data} />
                  </TabPanel>
                  <TabPanel tab="170518"id="2"> <div>选项二的内容</div> </TabPanel> 
                  <TabPanel tab="170510"id="3"> <div>选项三的内容</div> </TabPanel>
                </Tabs>
              </div>


              
        </div>
      )
  }
}
