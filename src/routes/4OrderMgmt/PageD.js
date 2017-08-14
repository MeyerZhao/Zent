import React from 'react'
import { Link } from 'react-router';
import { Button, Input, Table } from 'antd';
import { Tabs } from 'zent';
const TabPanel = Tabs.TabPanel;
const Search = Input.Search;



const columns = [{
  title: '客户', dataIndex: 'item1', key: 'item1', render: (text,record) => <Link to={text}>{record.item2}</Link> }, {
  title: '客户', dataIndex: 'item2', key: 'item2', }, {
  title: '收货人', dataIndex: 'item3', key: 'item3', }, {
  title: '退款金额', dataIndex: 'item4', key: 'item4', }, {
  title: '维权状态', dataIndex: 'item5', key: 'item5', }, {
  title: '订单金额', dataIndex: 'item6', key: 'item6', }, {
  title: '发货日期', dataIndex: 'item7', key: 'item7', }, {
  title: '订单状态', dataIndex: 'item8', key: 'item8', }, {
  title: '下单时间', dataIndex: 'item9', key: 'item9', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">详情</a>
      <span className="ant-divider" />
      <a href="">备注</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  item1: '/ordermgmtd/ordermgmtdsuba',
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
	    		<div className="searchbg">
	    			<div className=" " >    				
	    			  <Search placeholder="订单编号/客户/收货人姓名/电话/地址" style={{ marginRight:"6px", width: 200 }} onSearch={value => console.log(value)} />
              <Button type="primary" >搜索</Button>
	    			</div>
	    		</div>

          <div className="mb10">
            <Tabs activeId={this.state.activeId} onTabChange={this.onTabChange} >
              <TabPanel tab="全部" id="1" >
                <Table columns={columns} dataSource={data} />
              </TabPanel>
              <TabPanel tab="待处理（2）"id="2"> <div>选项二的内容</div> </TabPanel> 
              <TabPanel tab="已处理"id="3"> <div>选项三的内容</div> </TabPanel>
            </Tabs>
          </div>
					
					
    		</div>
      )
  }
}
export default index