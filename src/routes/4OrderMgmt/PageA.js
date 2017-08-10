import React from 'react'
import { Button, } from 'antd';
import { Tabs, Input, Select } from 'antd';
import { Table, Icon } from 'antd';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;
const Option = Select.Option;
const Search = Input.Search;
const TabPane = Tabs.TabPane;

const columns = [{
  title: '订单编号', dataIndex: 'item1', key: 'item1', }, {
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
	    			  <Button type="primary" >搜索</Button> <Button type="primary" >重置</Button>
	    			
	    		</div>

	        <Tabs defaultActiveKey="1" tabPosition='left'>
	          <TabPane tab="全部" key="1">
	          	<div className="table-tab ">
		          	全部 | 待支付 | 待确认（1） | 待配送（33）| 已签收 | 待转账 | 维权中（2） | 交易关闭 | 交易成功
	          	</div>
	          	<div className="mb10">
		          	<Select placeholder="批量操作" style={{ marginRight:"10px", width: 120 }} >
		          	  <option value="批量操作">批量操作</option>
    	            <option value="批量确认">批量确认</option>
    	            <option value="批量打印发货单">批量打印发货单</option>
    	            <option value="批量打印收货地址">批量打印收货地址</option>
    	            <option value="批量发货">批量发货</option>
		          	</Select>		          	
		          	<Button type="primary" >导出到Excel</Button> <Button type="primary" >价格导入</Button>
		          	<span style={{float:"right", marginTop:"10px"}}>
		          		订单数：11  客户数：10   订单金额：200.00  商品数：123
		          	</span>

	          	</div>
	          	<Table rowSelection={rowSelection} columns={columns} dataSource={data} />
	          </TabPane>
	          <TabPane tab="5月20日" key="2">Content of Tab Pane 2</TabPane>
	          <TabPane tab="5月19日" key="3">Content of Tab Pane 3</TabPane>
	        </Tabs>

    		</div>
      )
  }
}
export default index