import React from 'react';
import { Link } from 'react-router';
import { Table, Button, Breadcrumb, Input, Row, Col, Modal } from 'antd';
import ModalWarp from '../../components/Modal.js'
import PageDSubAForm from './PageDSubAForm'

const columns = [{
  title: '商品名称', dataIndex: 'item1', key: 'item1', }, {
  title: '规格', dataIndex: 'item2', key: 'item2', }, {
  title: '条形码', dataIndex: 'item3', key: 'item3', }, {
  title: '单位', dataIndex: 'item4', key: 'item4', }, {
  title: '数量', dataIndex: 'item5', key: 'item5', }, {
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
	        	<Breadcrumb.Item> 新建盘点</Breadcrumb.Item>
        	</Breadcrumb>
          <div className="mb10">
            <ModalWarp title="选择商品" width="800px"><PageDSubAForm></PageDSubAForm></ModalWarp>
            <Input placeholder="扫码选择" style={{ marginLeft:"10px", width: 150 }}></Input>
          </div>
					<Row gutter={16} className="mb10" style={{fontSize:"14px"}}>
						<Col span={12}> <span>盘点商品共0中</span> </Col>
						<Col span={12}> 
							<div style={{textAlign:"right"}}>
								<span>业务日期： 2017-05-27</span>
								<span>经办人：花集进货平台</span>
							</div>
						</Col>
					</Row>
          <Table columns={columns} dataSource={data} />

          <div style={{padding:"10px", textAlign:"center", background:"#f7f7f7"}}>          	
		          <Button type="primary" size="large" onClick={this.showModal}>&nbsp;开始盘点&nbsp;</Button> 
		          <Link to=""> 跳转到盘点中 </Link>
	          <Modal
	            title="开始盘点后将选中选中商品的库存！"
	            visible={this.state.visible}
	            onOk={this.handleOk}
	            onCancel={this.handleCancel}
	          >
	            <p style={{fontSize:"14px"}}>
		            锁定后的商品将无法进行入库， 销售， 退货， 换货， 直到盘点完成或者作废盘点单。
	            </p>
	            <br/>
	            <br/>

	          </Modal>
          </div>
        </div>
      )
  }
}

export default index



