// import React from 'react'

// class index extends React.Component {
//   render(){
//     return (
//         <h1>页面二</h1>
//       )
//   }
// }
// export default index

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
				
	    			  <Search className="mb10 " placeholder="UID/注册手机/昵称/" style={{ marginRight:"10px", width: 200 }} onSearch={value => console.log(value)} />
	    
	    			  <Select className="mb10 " defaultValue="1" style={{ marginRight:"10px", width: 120 }} >
	    			    <Option value="1">注册时间</Option>
	    			    <Option value="2">登录时间</Option>
	    			    <Option value="3">购买时间</Option>
	    			  </Select>
	    			  <RangePicker style={{ marginRight:"10px", marginBottom:"10px" }}  />
	    			  <Button type="primary" >搜索</Button> <Button type="primary" >重置</Button>
	    			
	    		</div>

	        <Tabs defaultActiveKey="1" tabPosition='left'>
	          <TabPane tab="Tab 1" key="1">
	          	<div className="table-tab mb20 mt10">
		          	全部 | 待支付 | 待确认（1） | 待配送（33）| 已签收 | 待转账 | 维权中（2） | 交易关闭 | 交易成功
	          	</div>
	          	<div className="table-tab mb10">
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
	          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
	          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
	        </Tabs>

    		</div>
      )
  }
}
export default index