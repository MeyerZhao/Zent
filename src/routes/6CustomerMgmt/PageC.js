import React from 'react'
import { Button, Input, Table, Icon } from 'antd';
const Search = Input.Search;

const columns = [{
  title: '流水号', dataIndex: 'item1', key: 'item1', }, {
  title: '注册手机', dataIndex: 'item2', key: 'item2', }, {
  title: '用户昵称', dataIndex: 'item3', key: 'item3', }, {
  title: '反馈类型', dataIndex: 'item4', key: 'item4', }, {
  title: '反馈内容', dataIndex: 'item5', key: 'item5', }, {
  title: '反馈时间', dataIndex: 'item6', key: 'item6', }, {
  title: '当前状态', dataIndex: 'item7', key: 'item7', }, {
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

	    		<div className="searchbg">
	    			<div className=" " >    				
	    			  <Search placeholder="输入关键字" style={{ marginRight:"10px", width: 200 }} onSearch={value => console.log(value)} />
	    			 <Button type="primary" >搜索</Button>
	    			</div>
	    		</div>

	          	<div className="table-tab" >
	          	  全部 | 待处理（2） | 已处理
	          	</div>
	          

	          	<Table  columns={columns} dataSource={data} />

    		</div>
      )
  }
}
export default index