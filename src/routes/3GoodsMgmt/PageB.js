import React from 'react'
import { Link } from 'react-router';
import { Button, Form } from 'antd';
import { Input, Select, Checkbox } from 'antd';
import { Table } from 'antd';
import { Tabs, Pop } from 'zent';
const TabPanel = Tabs.TabPanel;
const Option = Select.Option;
const FormItem = Form.Item;
const content = (
    <div style={{lineHeight:"30px", padding:"10px 20px"}}>
      <div >
          <p ><Checkbox >主食</Checkbox></p>
          <p ><Checkbox >热菜</Checkbox></p>
          <p ><Checkbox >冷菜</Checkbox></p>
          <p ><Checkbox >饮料</Checkbox></p>
      </div>
      <div style={{paddingTop:"5px", borderTop:"1px solid #ddd"}}>
          <button type="button" className="zent-btn-primary zent-btn-small zent-btn">保存</button><button type="button" className="zent-btn-small zent-btn">取消</button>
      </div>
    </div>
  );
const children = [
      <option value="1">全部状态</option>,
      <option value="2">待支付</option>,
      <option value="3">待确认</option>,
      <option value="4">待配送</option>,
      <option value="5">已签收</option>,
      <option value="6">待转账</option>,
      <option value="7">维权中</option>,
      <option value="8">交易关闭</option>,
      <option value="9">交易成功</option>,
];

const columns = [{
  title: '商品', dataIndex: 'item1', key: 'item1', render: (text, record)=>( 
    <div style={{position:"relative"}}><img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2755178026,3344409706&fm=58" alt="鲜花" style={{width:"60px", height:"60px",float:"left"}} /> 
    <div style={{marginLeft:"70"}}>卡罗拉（网）<br/> 20枝  <br/> A级,橙色,本地,多头</div></div>
    ) }, {
  title: 'SKU编号', dataIndex: 'item2', key: 'item2', }, {
  title: '来源', dataIndex: 'item3', key: 'item3', }, {
  title: '所属分组', dataIndex: 'item4', key: 'item4', }, {
  title: '总销量', dataIndex: 'item5', key: 'item5', }, {
  title: '排序', dataIndex: 'item6', key: 'item6', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <Link to="/goodsmgmtb/goodsmgmtbforma">编辑</Link>
      <span className="ant-divider" />
      <Pop className="app-userinfo__pop2" trigger="click" position="left-top" content={content} >
        <a >改分组</a>
      </Pop>
      <span className="ant-divider" />
      <Pop trigger="click"  type="danger"  position="top-center" content="确定删除？" confirmText="确定" cancelText="关闭" onConfirm>
        <a >删除</a>
      </Pop>
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

    			<div className="mb10 searchbg" >
            <Form layout='inline'>
              <FormItem label="">
                <Input placeholder="商品/SKU编号" />
              </FormItem>
              <FormItem label="">
                <Select defaultValue="所有分组" style={{  width: 120 }} >
                  <Option value="分组1">分组1</Option>
                  <Option value="分组2">分组2</Option>
                  <Option value="分组3">分组3</Option>
                </Select>
              </FormItem>
              <FormItem >
                <Select
                   mode="tags"
                   placeholder="商品属性"
                   style={{ minWidth: "150px" }}
                 >
                   {children}
                 </Select>
              </FormItem>
              <FormItem >
                <Button type="primary"  style={{marginRight:"10px"}}>搜索</Button> 
                <Button >重置</Button> 
              </FormItem>
            </Form>  

    			</div>
          <div className="mb10">
            <Tabs activeId={this.state.activeId} onTabChange={this.onTabChange} >
              <TabPanel tab="所有" id="1" >
                <div className="mb10">
                  <Link to="/goodsmgmtb/goodsmgmtbsuba"><Button >系统商品库</Button></Link>
                  <Link to="/goodsmgmtb/goodsmgmtbforma"><Button style={{marginLeft:"10px"}} >自定义商品</Button></Link>
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

    		</div>
      )
  }
}
export default index