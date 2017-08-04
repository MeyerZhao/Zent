
import React from 'react'
import { Button, } from 'zent';
import { Tabs, Input, Select } from 'antd';
import { Table, Icon } from 'antd';
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

class index extends React.Component {
  render(){
    return (
    		<div>
    			<div className="mb10 searchbg" >
    				<span style={{verticalAlign:'1px'}}>
    				<Button type="primary" >系统商品库</Button><Button type="primary" >自定义商品</Button>
    				<Button type="primary" >高级搜索</Button>
    				</span>
    			  <Search placeholder="input search text"style={{ margin:"0 10px", width: 200 }} onSearch={value => console.log(value)} />
    			  <Select defaultValue="lucy" style={{  width: 120 }} >
    			    <Option value="jack">Jack</Option>
    			    <Option value="lucy">Lucy</Option>
    			    <Option value="Yiminghe">yiminghe</Option>
    			  </Select>
    			</div>

	        <Tabs defaultActiveKey="1" tabPosition='left'>
	          <TabPane tab="Tab 1" key="1"><Table columns={columns} dataSource={data} /></TabPane>
	          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
	          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
	        </Tabs>
    		</div>
      )
  }
}
export default index