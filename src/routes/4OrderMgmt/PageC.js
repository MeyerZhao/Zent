import React from 'react'
import { Button, Input, Table, Icon } from 'antd';
import { Tabs } from 'zent';
const TabPanel = Tabs.TabPanel;
const Search = Input.Search;
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
	    			  <Search placeholder="输入关键字" style={{ marginRight:"10px", width: 200 }} onSearch={value => console.log(value)} />
	    			 <Button type="primary" >搜索</Button>
	    			</div>
	    		</div>

          <div className="mb10">
            <Tabs activeId={this.state.activeId} onTabChange={this.onTabChange} >
              <TabPanel tab="全部" id="1" >
                <div className="mb10">
                    <Button type="primary" >导出到Excel</Button> <Button type="primary"  outline >价格导入</Button>
                </div>
                <Table columns={columns} dataSource={data} />
              </TabPanel>
              <TabPanel tab="已售待处理（2）" id="2"> <div>选项二的内容</div> </TabPanel> 
              <TabPanel tab="待客户确认 （2）" id="3"> <div>选项三的内容</div> </TabPanel>
              <TabPanel tab="已关闭" id="4"> <div>选项三的内容</div> </TabPanel>
              <TabPanel tab="已完成 " id="5"> <div>选项三的内容</div> </TabPanel>
            </Tabs>
          </div>


    		</div>
      )
  }
}
export default index