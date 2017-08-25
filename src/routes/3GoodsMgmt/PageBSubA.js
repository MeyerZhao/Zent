import React from 'react'
import { Link } from 'react-router'
import { Button, Form, Select } from 'antd';
import { Input, Checkbox, Breadcrumb } from 'antd';
import { Table } from 'antd';
import { Tabs} from 'zent'
const TabPanel = Tabs.TabPanel;
const Option = Select.Option;
const Search = Input.Search;
const FormItem = Form.Item;



const columns = [{
  title: '商品', dataIndex: 'item1', key: 'item1', render: (text, record)=>( 
    <div style={{position:"relative"}}><img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2755178026,3344409706&fm=58" alt="鲜花" style={{width:"60px", height:"60px",float:"left"}} /> 
    <div style={{marginLeft:"70"}}>卡罗拉（网）<br/> 20枝  <br/> A级,橙色,本地,多头</div></div>
    ) }, {
  title: 'SKU编号', dataIndex: 'item2', key: 'item2', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">加入分组</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  item1: 'John Brown',
  item2: '101050A1',
  item3: '101050A1'
}];


class index extends React.Component {
  state = {
    activeId: '1',
  }
  onTabChange = (id) =>{
    this.setState({
      activeId: id
    });
  }
  render(){
    return (
    		<div>
          <Breadcrumb className="mb20">
             <Breadcrumb.Item><Link to="/goodsmgmtb">商品管理</Link></Breadcrumb.Item>
             <Breadcrumb.Item>系统商品库</Breadcrumb.Item>
          </Breadcrumb>
    			<div className="mb10 searchbg"  style={{marginTop:"0"}}>
              <Form layout='inline' className="mb10">
              <FormItem label="">
                <Search placeholder="商品/SKU编号" onSearch={value => console.log(value)} />
              </FormItem>
              <FormItem label="所属分组">
                <Select defaultValue="商品分组" style={{  width: 120 }} >
                  <Option value="分组1">分组1</Option>
                  <Option value="分组2">分组2</Option>
                  <Option value="分组3">分组3</Option>
                </Select>
              </FormItem>
              <FormItem label="颜色" className='formitemlabel'>
                <Checkbox >颜色1</Checkbox>
                <Checkbox >颜色2</Checkbox>
                <Checkbox >颜色3</Checkbox>
              </FormItem>
              <FormItem label="等级" className='formitemlabel'>
                <Checkbox >等级1</Checkbox>
                <Checkbox >等级2</Checkbox>
                <Checkbox >等级3</Checkbox>
              </FormItem>
              <FormItem label="产地" className='formitemlabel'>
                <Checkbox >产地1</Checkbox>
                <Checkbox >产地2</Checkbox>
                <Checkbox >产地3</Checkbox>
              </FormItem>
              <FormItem >
                <Button type="primary" >搜索</Button> 
              </FormItem>
            </Form>  
    			</div>

          <Tabs activeId={this.state.activeId} onTabChange={this.onTabChange} >
            <TabPanel tab="所有" id="1" >
              <div className="mb10">
                <Select placeholder="批量操作" style={{ width: 120 }} >
                  <option value="批量操作">批量操作</option>
                  <option value="批量确认">批量确认</option>
                  <option value="批量发货">批量发货</option>
                  <option value="批量签收">批量签收</option>
                  <option value="批量打印配货单">批量打印配货单</option>
                </Select>
              </div>
              <Table columns={columns} dataSource={data} />
            </TabPanel>
            <TabPanel tab="玫瑰"id="2"> <div>选项二的内容</div> </TabPanel> 
            <TabPanel tab="康乃馨"id="3"> <div>选项三的内容</div> </TabPanel>
            <TabPanel tab="百合"id="4"> <div>选项三的内容</div> </TabPanel>
            <TabPanel tab="分组二"id="5"> <div>选项三的内容</div> </TabPanel>
            <TabPanel tab="分组三"id="6"> <div>选项三的内容</div> </TabPanel>
          </Tabs>

    		</div>
      )
  }
}
export default index