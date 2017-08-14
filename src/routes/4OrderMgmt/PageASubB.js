import React from 'react'
import { Button, Select, Input, Table} from 'antd';
const option = Select.option;

const btnLayout= {
		style: {marginRight:"10px"}
}
const mb20= {
		style: {marginBottom:'20px'}
}



const columns = [{
  title: '购买客户', dataIndex: 'item1', key: 'item1', }, {
  title: '收货人姓名', dataIndex: 'item2', key: 'item2', }, {
  title: '联系方式', dataIndex: 'item3', key: 'item3', }, {
  title: '收货地址', dataIndex: 'item4', key: 'item4', }];

const data = [{
  key: '1',
	item1: 'John Brown',
	item2: 'John Brown',
	item3: 'John Brown',
	item4: '浙江省 杭州市 下城区 建国北路111号',
}];



const columns3 = [{
  title: '商品信息', dataIndex: 'item1', key: 'item1', }, {
  title: '单价', dataIndex: 'item2', key: 'item2', }, {
  title: '数量', dataIndex: 'item3', key: 'item3', }, {
  title: '小计', dataIndex: 'item4', key: 'item4', }, {
  title: '订单编号', dataIndex: 'item5', key: 'item5', }];



class index extends React.Component {
  render(){
    return (
        <div>
        	<div className="mb10">
	        	<h4 className="block-title" >订单详情</h4>
	        </div>
        	<div style={{padding:"10px"}} className="mb20">
        		<div className="mb10">
		        	<b {...btnLayout}>订单编号：517052012334556</b><span {...btnLayout}>已支付</span> 
		        	<Button>订单操作按钮/确认订单/签收订单</Button>
        		</div>
	      		<div className="mb10">
	        		<Button {...btnLayout}>打印配货单</Button>
	        		<Button {...btnLayout}>打印收货地址</Button>
	        		<Button {...btnLayout}>追加物流信息</Button>
	        		物流状态：配送中
	        	</div>
	        	<div className="mb10" style={{height:"28px", lineHeight:"28px"}}>
	        		备忘信息：备忘旗帜颜色列表
	        		<div style={{float:"right"}}>
		        		<span {...btnLayout}>编辑图标</span>
		        		<Select defaultValue="1" style={{width:120}}>
		        			<option value="1">备忘记录</option>
		        			<option value="2">备忘记录2</option>
		        		</Select>
	        		</div>
	        	</div>
	        	<div>
	        		<Input type="textarea" rows={6}></Input>
	        		客户备注：一定要新鲜、发货要及时 谢谢！
	        	</div>
					</div>
					
        	<div style={{padding:"10px"}}>
        		<h3>收货信息</h3>
        		<Table columns={columns} dataSource={data} pagination={false} {...mb20}/>


        		<div className="mytable">
	        		<h3>订单信息</h3>
	        		<table style={{marginBottom:"30px", width:"100%"}}>
	        				<tr><th>订单金额</th><td>#</td><th>优惠金额</th><td>#</td><th>实付金额</th><td>#</td><th>支付方式</th><td>#</td></tr>
	        				<tr><th>下单时间</th><td>#</td><th>付款时间</th><td>#</td><th>配送时间</th><td>#</td><th>维权时间</th><td>#</td></tr>
	        			
	        		</table>
        		</div>

        		<h3>商品信息</h3>
        		<Table columns={columns3}  pagination={false} bordered {...mb20}/>


        	</div>


        </div>
      )
  }
}
export default index

