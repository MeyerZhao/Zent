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






class index extends React.Component {
  render(){
    return (
        <div>
        	<div className="mb10">
	        	<h4 className="block-title" >订单详情</h4>
	        </div>
        	<div style={{padding:"10px"}} className="mb20">
        		<div className="mb10" style={{fontWeight:"bold", fontSize:"14px"}}>
		        	<b {...btnLayout}>订单编号：517052012334556</b><span {...btnLayout}>已支付</span> 
		        	<span {...btnLayout}>订单金额：100.00元</span>
		        	<span {...btnLayout}>退款金额：100.00元</span>
        		</div>
	      		<div className="mb10" style={{fontWeight:"bold", fontSize:"14px"}}>
	      			<b>退款状态：待商家处理</b>
	        		<Button {...btnLayout}>同一退款</Button>
	        		<Button {...btnLayout}>修改退款金额</Button>
	        		<Button {...btnLayout}>拒绝退款</Button>
	        	</div>
	        	<div className="mb10" style={{height:"28px", lineHeight:"28px"}}>
	        		<span style={{fontWeight:"bold", fontSize:"14px"}}>备忘信息：</span>备忘旗帜颜色列表
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
	        	</div>
					</div>
					
        	<div style={{padding:"10px"}}>
      			<h3>退款说明</h3>
      			<p className="mb10">有一枝花头短了，黄莺不新鲜。</p>
      			<img {...btnLayout} src="https://img.yzcdn.cn/public_files/2017/3/18/cfe95d71fb06572a0e6c5504c357ea93.png" alt=""/>
      			<img {...btnLayout} src="https://img.yzcdn.cn/public_files/2017/3/18/cfe95d71fb06572a0e6c5504c357ea93.png" alt=""/>
      			<img {...btnLayout} src="https://img.yzcdn.cn/public_files/2017/3/18/cfe95d71fb06572a0e6c5504c357ea93.png" alt=""/>


        		<h3>收货信息</h3>
        		<Table columns={columns} dataSource={data} pagination={false} {...mb20}/>


        		<div className="mytable">
	        		<h3>订单信息</h3>
	        		<table style={{marginBottom:"30px", width:"100%"}}>
	        				<tr><th>下单时间</th><td>#</td><th>确认时间</th><td>#</td><th>完成时间</th><td>#</td></tr>
	        		</table>
        		</div>


        	</div>


        </div>
      )
  }
}
export default index

