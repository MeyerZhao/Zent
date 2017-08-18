import React from 'react'
import { Link } from 'react-router';
import { Button, } from 'antd';
import { Input, Select } from 'antd';
import { Table } from 'antd';
import { Tabs } from 'zent';
const TabPanel = Tabs.TabPanel;
const Search = Input.Search;

const columns = [{
  title: '客户', dataIndex: 'item1', key: 'item1', render: (text,record) => <Link to={text}>{record.item2}</Link> }, {
  title: '收货人', dataIndex: 'item2', key: 'item2', }, {
  title: '配送地区', dataIndex: 'item3', key: 'item3', }, {
  title: '订单状态', dataIndex: 'item4', key: 'item4', }, {
  title: '物流状态', dataIndex: 'item5', key: 'item5', }, {
  title: '订单数', dataIndex: 'item6', key: 'item6', }, {
  title: '订单金额', dataIndex: 'item7', key: 'item7', }, {
  title: '商品数', dataIndex: 'item8', key: 'item8', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">打印配货单</a>
      <span className="ant-divider" />
      <a href="">打印收货地址</a>
      <span className="ant-divider" />
      <a href="">备注</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  item1: '/ordermgmtb/ordermgmtbsuba',
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
	    			  <Search placeholder="输入关键字" style={{ marginRight:"10px", width: 200 }} onSearch={value => console.log(value)} />
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
                  <span style={{float:"right", marginTop:"10px", fontSize:"12px" }}>
                    客户数：10   订单数：11     订单金额：200.00  商品数：222
                  </span>
                </div>
                <Tabs
                   type="slider"
                   activeId={this.state.activeId2}
                   onTabChange={this.onTabChange2}
                   >
                   <TabPanel tab={<span>全部</span>} id="1"> </TabPanel>
                   <TabPanel tab="待发货（1） " id="2"></TabPanel>
                   <TabPanel tab="待签收（3） " id="3"></TabPanel>
                   <TabPanel tab="待转账" id="4"></TabPanel>
                   <TabPanel tab="交易成功 " id="5"></TabPanel>
                </Tabs>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
              </TabPanel>
              <TabPanel tab="8月16日" id="2"> <div>选项二的内容</div> </TabPanel> 
              <TabPanel tab="8月15日" id="3"> <div>选项三的内容</div> </TabPanel>
            </Tabs>
          </div>

    		</div>
      )
  }
}
export default index