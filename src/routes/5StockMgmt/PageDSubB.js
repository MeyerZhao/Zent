import React from 'react';
import { Link } from 'react-router';
import { Table, Button, Breadcrumb, Input, Row, Col, Modal } from 'antd';
import ModalWarp from '../../components/Modal.js'
import PageDSubAForm from './PageDSubAForm'

const columns = [{
  title: '序号', dataIndex: 'item1', key: 'item1', }, {
  title: '商品名称', dataIndex: 'item2', key: 'item2', }, {
  title: '条形码', dataIndex: 'item3', key: 'item3', }, {
  title: '系统库存', dataIndex: 'item4', key: 'item4', }, {
  title: '实际库存', dataIndex: 'item6', key: 'item6', }, {
  title: '差异', dataIndex: 'item7', key: 'item7', }, {
  title: '备注', dataIndex: 'item8', key: 'item8', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">编辑</a>
      <span className="ant-divider" />
      <a href="">删除</a>
    </span>
  ),
}];

const data = [];

class index extends React.Component {
	state = { visible: false }
	 showModal = () => {
	   this.setState({
	     visible: true,
	   });
	 }
	 handleOk = (e) => {
	   console.log(e);
	   this.setState({
	     visible: false,
	   });
	 }
	 handleCancel = (e) => {
	   console.log(e);
	   this.setState({
	     visible: false,
	   });
	 }
  render(){
    return (
        <div>
        	<Breadcrumb className="mb20">
	        	<Breadcrumb.Item> <Link to="/stockmgmtd">库存盘点</Link></Breadcrumb.Item>
	        	<Breadcrumb.Item> 盘点中</Breadcrumb.Item>
        	</Breadcrumb>
					<Row gutter={16} className="mb10" style={{fontSize:"14px"}}>
						<Col span={12}> 
							已完成：
							<Button >已完成0个</Button>
							<Button type="danger" ghost style={{marginLeft:"10px"}}>未完成1个</Button>
							<Input placeholder="输入条形码搜索" style={{ marginLeft:"10px", width: 150 }}></Input>
						</Col>
						<Col span={12}> 
							<div style={{textAlign:"right"}}>
								<span>所用时间： 00天00小时00分钟20秒</span>
							</div>
						</Col>
					</Row>
					<Row gutter={16} className="mb10" style={{ borderTop:"1px solid #ddd",paddingTop:"10px"}}>
						<Col span={12}> 
							单据编号：PD187431341353132
						</Col>
						<Col span={12}> 
							<div style={{textAlign:"right"}}>
								<span>业务日期：2017-8-26 16:48:22 </span>
								<span>经办人：花集进货平台</span>
							</div>
						</Col>
					</Row>
          <Table columns={columns} dataSource={data} />
          <div style={{padding:"20px 0"}}>
          	<Button type="primary" ghost>+盘点单备注</Button>
          </div>

          <div style={{padding:"10px", textAlign:"center", background:"#f7f7f7"}}>          	
		          <Button type="primary" size="large" onClick={this.showModal}>&nbsp;盘点完成&nbsp;</Button> 
		          <Link to="/stockmgmtd/stockmgmtdsubc"> 跳转到盘点历史 </Link>
          </div>
        </div>
      )
  }
}

export default index



