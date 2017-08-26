import React from 'react'
import { Link } from 'react-router';
import { Input, Select, Button, Cascader} from 'antd';
import { Table } from 'antd';
import { Tabs } from 'zent';
import city from '../../utils/city'
import PageAMore from './PageAMore.js'
const TabPanel = Tabs.TabPanel;
const Search = Input.Search;

const columns = [{
  title: '客户', dataIndex: 'item1', key: 'item1',}, {
  title: '收货人', dataIndex: 'item2', key: 'item2', }, {
  title: '配送地区', dataIndex: 'item3', key: 'item3', }, {
  title: '订单状态', dataIndex: 'item4', key: 'item4', }, {
  title: '物流状态', dataIndex: 'item5', key: 'item5', }, {
  title: '订单数', dataIndex: 'item6', key: 'item6', }, {
  title: '订单金额', dataIndex: 'item7', key: 'item7', }, {
  title: '商品数', dataIndex: 'item8', key: 'item8', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <Link to="/ordermgmtb/ordermgmtbsuba">详情</Link>
      <span className="ant-divider" />
      <a href="">备注</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  item1: '',
  item2: 'John Brown',
  item3: 'John Brown',
  item4: 'John Brown',
  item5: 'John Brown',
  item6: 'John Brown',
  item7: 'John Brown',
  item8: 'John Brown',
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
  state = {
    activeId: '1',
    activeId2: '1'
  }
  onTabChange = (id) => {
    this.setState({
      activeId: id
    });
  }
  onTabChange2 = (id) => {
    this.setState({
      activeId2: id
    });
  }
  render(){
    return (
    		<div>

	    		<div className="searchbg">
	    			<div className=" " >    				
	    			  <Search placeholder="客户/收货人/电话" style={{ marginRight:"10px", width: 200 }} onSearch={value => console.log(value)} />
              <div style={{display:"inline-block", marginRight:"10px", width: 200 }}>
                <Cascader
                  style={{ width: '100%' }}
                  options={city}
                  placeholder="配送地区"
                  changeOnSelect
                />
              </div>
	    			 <Button type="primary" >搜索</Button>
	    			</div>
	    		</div>

	        <div className="mb10">
            <Tabs activeId={this.state.activeId} onTabChange={this.onTabChange} >
              <TabPanel tab="所有" id="1" >
                <div className="mb10">
                  <Select placeholder="批量操作" style={{ marginRight:"10px", width: 120 }} >
                    <option value="批量操作">批量操作</option>
                    <option value="批量确认">批量确认</option>
                    <option value="批量打印发货单">批量打印发货单</option>
                    <option value="批量打印收货地址">批量打印收货地址</option>
                    <option value="批量发货">批量发货</option>
                  </Select>               
                  <Button >商品统计</Button>
                  <span className="table-infor">
                    客户数10， 订单数11， 订单金额200.00
                  </span>
                </div>
  
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
              </TabPanel>
              <TabPanel tab="8月16日" id="2"> <div>选项二的内容</div> </TabPanel> 
              <TabPanel tab="8月15日" id="3"> <div>选项三的内容</div> </TabPanel>
              <TabPanel tab="8月15日" id="3"> <div>选项三的内容</div> </TabPanel>
              <TabPanel tab="8月14日" id="4"> <div>选项三的内容</div> </TabPanel>
              <TabPanel tab="8月13日" id="5"> <div>选项三的内容</div> </TabPanel>
              <TabPanel tab="8月12日" id="6"> <div>选项三的内容</div> </TabPanel>
              <TabPanel tab="8月11日 " id="7"> <div>选项三的内容</div> </TabPanel>
              <TabPanel tab="8月10日 " id="8"> <div>选项三的内容</div> </TabPanel>
              <TabPanel tab="更多 " id="9"> <div><PageAMore /></div> </TabPanel>
            </Tabs>
          </div>

    		</div>
      )
  }
}
export default index