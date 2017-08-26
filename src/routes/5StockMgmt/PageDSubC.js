import React from 'react';
import { Link } from 'react-router';
import { Table, Button, Breadcrumb, Input, Row, Col, Modal,Select } from 'antd';
import ModalWarp from '../../components/Modal.js'
import PageDSubAForm from './PageDSubAForm'

const Option = Select.Option;
const columns = [{
  title: '序号', dataIndex: 'item1', key: 'item1', }, {
  title: '商品名称', dataIndex: 'item2', key: 'item2', }, {
  title: '条形码', dataIndex: 'item3', key: 'item3', }, {
  title: '单位', dataIndex: 'item4', key: 'item4', }, {
  title: '系统库存', dataIndex: 'item5', key: 'item5', }, {
  title: '实际库存', dataIndex: 'item6', key: 'item6', }, {
  title: '盘亏数量', dataIndex: 'item7', key: 'item7', }, {
  title: '盘亏金额', dataIndex: 'item8', key: 'item8', }, {
  title: '盘盈数量', dataIndex: 'item9', key: 'item9', }, {
  title: '盘盈金额', dataIndex: 'item10', key: 'item10', }, {
  title: '差异', dataIndex: 'item11', key: 'item11', }, {
  title: '备注', dataIndex: 'item12', key: 'item12', }];

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
	        	<Breadcrumb.Item> 盘点历史 </Breadcrumb.Item>
	        	<Breadcrumb.Item> 盘点单详情</Breadcrumb.Item>
        	</Breadcrumb>
					<Row gutter={16} className="mb10" style={{fontSize:"14px"}}>
						<Col span={24} style={{textAlign:"center"}}>
							
								<Button size="large" >全部</Button>
								<Button size="large" style={{marginLeft:"10px"}}>盘亏商品</Button>
								<Button size="large" style={{marginLeft:"10px"}}>盘盈商品</Button>
						</Col>
					</Row>
					<Row gutter={16} className="mb10" style={{ paddingTop:"10px"}}>
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
          	<p>
          		备注：
          	</p>
          </div>
          <Select defaultValue="全部分组" style={{ marginRight:"10px", width: 200, float:"right" }} >
            <Option value="1">分组一</Option>
            <Option value="2">分组二</Option>
            <Option value="3">分组三</Option>
          </Select>
        </div>
      )
  }
}

export default index



