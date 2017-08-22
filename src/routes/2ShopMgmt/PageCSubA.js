import React from 'react';
import { Link } from 'react-router';
import { Breadcrumb, TimePicker, Button } from 'antd';
import moment from 'moment';

class index extends React.Component {
  render(){
    return (
    		<div>
    			<Breadcrumb className="mb20">
    			   <Breadcrumb.Item><Link to="/shopmgmt/shopmgmtc">店铺设置</Link></Breadcrumb.Item>
    			   <Breadcrumb.Item>营业时间</Breadcrumb.Item>
    			</Breadcrumb>
    			<h4 className="block-title mb10" >营业时间</h4>
    			<p style={{padding:"10px"}}>营业时间并设置以后，超出营业时间范围的客户无法下单（订货单模式可以订货）。 订单批次按照营业截止时间进行划分，如果未设置营业时间，订单批次默认按照0:00进行划分。</p>


    			<table style={{marginBottom:"30px", width:"100%"}}>
    				<thead className="ant-table-thead">
    					<tr><th>星期</th><th>开始时间</th><th>结束时间</th><th>切换时间</th></tr>
    				</thead>
    				<tbody className="ant-table-tbody">
    				<tr><td>周日</td><td><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></td><td><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></td><td><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></td></tr>
    				<tr><td>周一</td><td><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></td><td><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></td><td><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></td></tr>
    				<tr><td>周二</td><td><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></td><td><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></td><td><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></td></tr>
    				<tr><td>周三</td><td><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></td><td><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></td><td><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></td></tr>
    				<tr><td>周四</td><td><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></td><td><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></td><td><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></td></tr>
    				<tr><td>周五</td><td><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></td><td><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></td><td><TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /></td></tr>
    				</tbody>
    			</table>

    			<Button type="primary"> 保存设置 </Button>

					

    		</div>
      )
  }
}
export default index

