import React from 'react'
import { Table, Input, Button  } from 'antd';
import { Tabs } from 'zent';
const TabPanel = Tabs.TabPanel;
const Search = Input.Search;

const columns = [{
  title: '商品', dataIndex: 'item1', key: 'item1', }, {
  title: 'SKU编号', dataIndex: 'item2', key: 'item2', }, {
  title: '属性', dataIndex: 'item3', key: 'item3', }, {
  title: '入库数', dataIndex: 'item4', key: 'item4', }, {
  title: '入库金额', dataIndex: 'item5', key: 'item5', }, {
  title: '已出库数', dataIndex: 'item6', key: 'item6', }, {
  title: '出库金额', dataIndex: 'item7', key: 'item7', }, {
  title: '收益', dataIndex: 'item8', key: 'item8', }, {
  title: '库存量', dataIndex: 'item9', key: 'item9', }];

const data = [{
  key: '1', item1: 'John Brown', item2: 'John Brown', item3: 'John Brown', item4: 'John Brown', item5: 'John Brown', item6: 'John Brown', }, {
  key: '2', item1: 'John Brown', item2: 'John Brown', item3: 'John Brown', item4: 'John Brown', item5: 'John Brown', item6: 'John Brown', }, {
  key: '3', item1: 'John Brown', item2: 'John Brown', item3: 'John Brown', item4: 'John Brown', item5: 'John Brown', item6: 'John Brown', }];


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
          <div className="mb10 searchbg" >
            <Search placeholder="搜索"style={{ marginRight:"10px", width: 200 }} onSearch={value => console.log(value)} />
            <Button type="primary" >搜索</Button>
          </div>

          <div className="mb10">
            <Tabs activeId={this.state.activeId} onTabChange={this.onTabChange} >
              <TabPanel tab="按商品查看" id="1" >
                <div className="mb10">
                    <Button type="primary" >新增入库</Button>
                    <Button type="primary" style={{marginLeft:"6px"}}>新增出库</Button>
                    <Button style={{marginLeft:"6px"}}>导出EXCEL</Button>
                    <span style={{float:"right", marginTop:"10px"}}>
                      订单数：11  客户数：10   订单金额：200.00  商品数：123
                    </span>
                </div>

                <Table columns={columns} dataSource={data} />
              </TabPanel>
              <TabPanel tab="按属性查看"id="2"> <div>选项二的内容</div> </TabPanel> 
            </Tabs>
          </div>

          
        </div>
      )
  }
}

export default index