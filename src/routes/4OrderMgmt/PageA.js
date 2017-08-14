import React from 'react'
import { Link } from 'react-router';
import { Button, } from 'antd';
import { Input, Select } from 'antd';
import { Table, Icon } from 'antd';
import { DatePicker } from 'antd';
import { Tabs } from 'zent';
const TabPanel = Tabs.TabPanel;

const { RangePicker } = DatePicker;
const Option = Select.Option;
const Search = Input.Search;

const columns = [{
  title: '订单编号', dataIndex: 'item1', key: 'item1', render: (text,record) => <Link to={text}>{record.item2}</Link>}, {
  title: '客户', dataIndex: 'item2', key: 'item2', }, {
  title: '收货人', dataIndex: 'item3', key: 'item3', }, {
  title: '配送地区', dataIndex: 'item4', key: 'item4', }, {
  title: '订单金额', dataIndex: 'item5', key: 'item5', }, {
  title: '支付方式', dataIndex: 'item6', key: 'item6', }, {
  title: '发货日期', dataIndex: 'item7', key: 'item7', }, {
  title: '订单状态', dataIndex: 'item8', key: 'item8', }, {
  title: '物流状态', dataIndex: 'item9', key: 'item9', }, {
  title: '下单时间', dataIndex: 'item10', key: 'item10', }, {
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
  item1: '/ordermgmta/ordermgmtasubb',
  item2: '2017814154339',
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
	    			  <Search placeholder="输入关键字" style={{ marginRight:"10px", width: 200 }} onSearch={value => console.log(value)} />
	    			  <Select placeholder="支付方式" style={{ marginRight:"10px", width: 120 }} >
	    			    <Option value="1">下拉选择1</Option>
	    			    <Option value="2">下拉选择2</Option>
	    			    <Option value="3">下拉选择3</Option>
	    			  </Select>
	    			  <Select defaultValue="1" style={{ marginRight:"10px", width: 120 }} >
	    			    <Option value="1">下单时间</Option>
	    			    <Option value="2">发货时间</Option>
	    			  </Select>
	    			  <RangePicker style={{ marginRight:"10px"}}  />
	    			  <Button type="primary" >搜索</Button> <Button  >重置</Button>
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
                    <Link to="/ordermgmta/ordermgmtasuba"><Button>商品统计</Button></Link> <Button >EXCEL导出</Button>
                    <span style={{float:"right", marginTop:"10px", fontSize:"12px" }}>
                      订单数：11  客户数：10   订单金额：200.00  商品数：123
                    </span>
                  </div>
                  <Tabs
                     type="slider"
                     activeId={this.state.activeId2}
                     onTabChange={this.onTabChange2}
                     >
                     <TabPanel tab={<span>全部</span>} id="1"> </TabPanel>
                     <TabPanel tab="待支付 " id="2"></TabPanel>
                     <TabPanel tab="待确认（1） " id="3"></TabPanel>
                     <TabPanel tab="待配送（33）" id="4"></TabPanel>
                     <TabPanel tab="已签收 " id="5"></TabPanel>
                     <TabPanel tab="待转账 " id="6"></TabPanel>
                     <TabPanel tab="维权中（2） " id="7"></TabPanel>
                     <TabPanel tab="交易关闭 " id="8"></TabPanel>
                     <TabPanel tab="交易成功 " id="9"></TabPanel>
                  </Tabs>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
              </TabPanel>
              <TabPanel tab="8月16日" id="2"> <div>选项二的内容</div> </TabPanel> 
              <TabPanel tab="8月15日" id="3"> <div>选项三的内容</div> </TabPanel>
              <TabPanel tab="8月14日" id="4"> <div>选项三的内容</div> </TabPanel>
              <TabPanel tab="8月13日" id="5"> <div>选项三的内容</div> </TabPanel>
              <TabPanel tab="8月12日" id="6"> <div>选项三的内容</div> </TabPanel>
              <TabPanel tab="8月11日 " id="7"> <div>选项三的内容</div> </TabPanel>
              <TabPanel tab="8月10日 " id="8"> <div>选项三的内容</div> </TabPanel>
              <TabPanel tab="8月9日 " id="9"> <div>选项三的内容</div> </TabPanel>
            </Tabs>
          </div>

    		</div>
      )
  }
}
export default index