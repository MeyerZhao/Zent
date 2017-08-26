import React from 'react'
import { Button, Table} from 'antd';

const btnLayout= {
		style: {marginRight:"10px"}
}
const mb20= {
		style: {marginBottom:'30px'}
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





const columns2 = [{
  title: '旗帜颜色', dataIndex: 'item1', key: 'item1', }, {
  title: '备忘内容', dataIndex: 'item2', key: 'item2', }, {
  title: '备忘记录', dataIndex: 'item3', key: 'item3', }, {
  title: '订单编号', dataIndex: 'item4', key: 'item4', }];

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
        	<div style={{padding:"10px"}} className="mb10">
            <div className="mb10" style={{fontWeight:"bold", fontSize:"14px"}}>
              <b {...btnLayout}>订单状态：待配送 </b>
              <Button >打印配货单</Button>
            </div>
            <div style={{fontSize:"14px"}}>
              物流信息：顺丰速运 1299899000  配送中
            </div>
					</div>
					
        	<div style={{padding:"10px"}}>
        		<h3>收货信息</h3>
        		<Table columns={columns} dataSource={data} pagination={false} {...mb20}/>


        		<div {...mb20}>
	        		<h3>备忘信息</h3>
	        		<Table columns={columns2} pagination={false} />
	        		客户备注：一定要新鲜、发货要及时 谢谢！
        		</div>


        		<h3>商品信息</h3>
        		<Table columns={columns3}  pagination={false} bordered {...mb20}/>


        	</div>


        </div>
      )
  }
}
export default index

