import React from 'react'
import { Link } from 'react-router';
import { Button } from 'antd';
import { Input, Select, Cascader } from 'antd';
import { Table, DatePicker } from 'antd';
import { Tabs } from 'zent';
import city from '../../utils/city'
import PageAMore from './PageAMore.js'



const { RangePicker } = DatePicker;
const TabPanel = Tabs.TabPanel;

const Option = Select.Option;

const columns = [{
  title: '订单编号', dataIndex: 'item1', key: 'item1'}, {
  title: '客户', dataIndex: 'item2', key: 'item2', }, {
  title: '收货人', dataIndex: 'item3', key: 'item3', }, {
  title: '配送地区', dataIndex: 'item4', key: 'item4', }, {
  title: '订单金额', dataIndex: 'item5', key: 'item5', }, {
  title: '发货日期', dataIndex: 'item7', key: 'item7', }, {
  title: '订单状态', dataIndex: 'item8', key: 'item8', }, {
  title: '下单时间', dataIndex: 'item10', key: 'item10', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <Link to="/ordermgmta/ordermgmtasubb">详情</Link>
      <span className="ant-divider" />
      <a href="">备注</a>
    </span>
  ),
}];

const children = [
      <option value="全部状态">全部状态</option>,
      <option value="待支付">待支付</option>,
      <option value="待确认">待确认</option>,
      <option value="待配送">待配送</option>,
      <option value="已签收">已签收</option>,
      <option value="待转账">待转账</option>,
      <option value="维权中">维权中</option>,
      <option value="交易关闭">交易关闭</option>,
      <option value="交易成功">交易成功</option>,
];


const data = [{
  key: '1',
  item1: '2017814154339',
  item2: '2017814154339',
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
              <Input placeholder="订单编号/客户/收货人/电话" style={{ margin:"0 10px 10px 0", width: 200 }} />
	    			  <Select defaultValue="1" style={{ marginRight:"10px", width: 120 }} >
	    			    <Option value="1">下单时间</Option>
	    			    <Option value="2">发货时间</Option>
	    			  </Select>
	    			  <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" style={{marginRight:"10px"}} />
              
              <div style={{display:"inline-block", margin:"0 10px 10px 0", width: 200 }}>
                <Cascader
                  style={{ width: '100%' }}
                  options={city}
                  placeholder="配送地区"
                  changeOnSelect
                />
              </div>
              <br/>
              <div style={{display:"inline-block", margin:"0 10px 10px 0", minWidth: 400 }}>
                 <Select
                    mode="tags"
                    placeholder="选择状态"
                    style={{ width: '100%' }}
                  >
                    {children}
                  </Select>
              </div>
              <br/>
              
	    			  <Button type="primary" >搜索</Button> <Button  >重置</Button>
	    		</div>

          <div className="mb10">
              
            <Tabs activeId={this.state.activeId} onTabChange={this.onTabChange} >
              <TabPanel tab="所有" id="1" >
                    
                  <div className="mb10">
                    <Select placeholder="批量操作" style={{ marginRight:"10px", width: 120 }} >
                      <option value="批量操作">批量操作</option>
                      <option value="批量确认">批量确认</option>
                      <option value="批量发货">批量发货</option>
                      <option value="批量签收">批量签收</option>
                      <option value="批量打印配货单">批量打印配货单</option>
                    </Select>               
                    <Link to="/ordermgmta/ordermgmtasuba" ><Button>商品统计</Button></Link> <Button >EXCEL导出</Button>
                    <span className="table-infor" >
                      订单数11 （待确认0、待配送2、维权中0 ) ，客户数10，订单金额200.00
                    </span>
                  </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
              </TabPanel>
              <TabPanel tab="8月16日" id="2"> <div>选项二的内容</div> </TabPanel> 
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