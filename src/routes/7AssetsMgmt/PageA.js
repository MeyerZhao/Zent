import React from 'react'
import { Row, Col, Button, Table } from 'antd';
import { Select } from 'antd';
import { DateRangePicker2 } from 'zent'
import { Tabs } from 'zent';
const TabPanel = Tabs.TabPanel;
const Option = Select.Option;

const columns = [{
  title: '结算时间', dataIndex: 'item1', key: 'item1', render: text => <a href="">{text}</a>, }, {
  title: '类型 | 名称 | 交易号', dataIndex: 'item3', key: 'item3', }, {
  title: '金额(元)', dataIndex: 'item4', key: 'item4', }, {
  title: '余额(元)', dataIndex: 'item5', key: 'item5', }, {
  title: '支付渠道 | 单号', dataIndex: 'item6', key: 'item6', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">编辑</a>
      <span className="ant-divider" />
      <a href="">删除</a>
    </span>
  ),
}];

const columns2 = [{
  title: '时间', dataIndex: 'item1', key: 'item1', render: text => <a href="">{text}</a>, }, {
  title: '名称 | 订单号', dataIndex: 'item4', key: 'item4', }, {
  title: '金额(元)', dataIndex: 'item5', key: 'item5', }, {
  title: '交易状态', dataIndex: 'item6', key: 'item6', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">编辑</a>
      <span className="ant-divider" />
      <a href="">删除</a>
    </span>
  ),
}];

const columns3 = [{
  title: '业务 | 交易流水', dataIndex: 'item1', key: 'item1', render: text => <a href="">{text}</a>, }, {
  title: '金额(元)', dataIndex: 'item5', key: 'item5', }, {
  title: '交易发生时间', dataIndex: 'item6', key: 'item6', }, {
  title: '说明', key: 'action', render: (text, record) => (
    <span>
      <a href="">编辑</a>
      <span className="ant-divider" />
      <a href="">删除</a>
    </span>
  ),
}];

const columns4 = [{
  title: '申请时间', dataIndex: 'item1', key: 'item1', render: text => <a href="">{text}</a>, }, {
  title: '提现银行 | 编号', dataIndex: 'item2', key: 'item2', }, {
  title: '提现金额(元)', dataIndex: 'item3', key: 'item3', }, {
  title: '处理完成时间', dataIndex: 'item4', key: 'item4', }, {
  title: '状态', dataIndex: 'item5', key: 'item5', }, {
  title: '申请人 | 手机号', dataIndex: 'item6', key: 'item6', }, {
  title: '备注', key: 'action', render: (text, record) => (
    <span>
      <a href="">编辑</a>
      <span className="ant-divider" />
      <a href="">删除</a>
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
    dateValue: new Date()
  }
  onTabChange = (id) => {
    this.setState({
      activeId: id
    });
  }
  onChangeRange2 = (val) => {
    this.setState({
      rangeValue: val
    })
  }
  render(){
    const { rangeValue } = this.state;
    return (
      <div>
        <div style={{background:"#f8f8f8", padding:"10px"}} className="mb20"  >
          <Row gutter={16}>      
            <Col span={6} >
              <div className="panel">
                <div>店铺可用余额（元）</div>
                <b>0.00</b>
                <div >
                  <Button type="primary" style={{marginRight:"4px"}}>提现</Button>
                  <Button type="primary" ghost>充值</Button>
                </div>
              </div>
            </Col>
            <Col span={6} >
              <div className="panel">
                <div>待结算金额（元）</div>
                <b>0.00</b>
              </div>
            </Col>
            <Col span={6} >
              <div className="panel">
                <div>不可用金额（元）</div>
                <b>0.00</b>
              </div>
            </Col>
       
          </Row>
        </div>

        <div style={{padding:"0 20px 20px"}}>
          <Tabs activeId={this.state.activeId} onTabChange={this.onTabChange} >
            <TabPanel tab="收支明细" id="1">
                <div className="mb20 mt20">
                  <DateRangePicker2
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    value={rangeValue}
                    onChange={this.onChangeRange2}
                  />
                  <Button style={{marginLeft:"10px"}}>近7天</Button>
                  <Button style={{marginLeft:"10px"}}>近30天</Button>
                  <span style={{marginLeft:"10px"}}>
                    <Select defaultValue="全部" style={{ width: 120 }} >
                      <Option value="全部">全部</Option>
                      <Option value="订单收入">订单收入</Option>
                      <Option value="订单支出">订单支出</Option>
                      <Option value="退款">退款</Option>
                      <Option value="充值">充值</Option>
                      <Option value="提现">提现</Option>
                      <Option value="保证金转移">保证金转移</Option>
                      <Option value="交易手续费">交易手续费</Option>
                    </Select>
                  </span>
                </div>
                <Table columns={columns} dataSource={data} />
                <p style={{fontSize:"12px"}}>您的店铺产生的订单， 需要承担微信
                支付宝
                银行机构等支付通道商收取0.6%交易手续费，<b>花秘</b>不加收手续费<br/>
                  线上订单将在您发货后7天内结算； 顾客扫码买单的订单， 将在顾客支付成功后立即结算<br/>
                  订单结算后， 相应金额即进入店铺可用余额。
                </p>
            </TabPanel>

            <TabPanel tab="待结算金额" id="2">
                <div className="mb20 mt20">
                  <DateRangePicker2
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    value={rangeValue}
                    onChange={this.onChangeRange2}
                  />
                  <Button style={{marginLeft:"10px"}}>近7天</Button>
                  <Button style={{marginLeft:"10px"}}>近30天</Button>
              
                </div>
                <Table columns={columns2} dataSource={data} />
            </TabPanel> 

            <TabPanel tab="不可用余额" id="3">

                <Table columns={columns3} dataSource={data} />
            </TabPanel>

            <TabPanel tab="提现记录" id="4">
                <div className="mb20 mt20">
                  <DateRangePicker2
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    value={rangeValue}
                    onChange={this.onChangeRange2}
                  />
                  <Button style={{marginLeft:"10px"}}>近7天</Button>
                  <Button style={{marginLeft:"10px"}}>近30天</Button>
                  <span style={{marginLeft:"10px"}}>
                    <Select defaultValue="全部" style={{ width: 120 }} >
                      <Option value="全部">全部</Option>
                      <Option value="申请中">申请中</Option>
                      <Option value="银行处理中">银行处理中</Option>
                      <Option value="提现成功">提现成功</Option>
                      <Option value="提现退回">提现退回</Option>
                      <Option value="提现失败">提现失败</Option>
                    </Select>
                  </span>
                </div>
                <Table columns={columns4} dataSource={data} />

            </TabPanel>
          </Tabs>
        </div>
      </div>
      )
  }
}
export default index

