import React from 'react';
import { Link } from 'react-router';
import { Breadcrumb, Radio, Input, Form, Button } from 'antd';

const options1 = [
  { label: '58mm', value: '58mm' },
];
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
class index extends React.Component {
	state = {
	  value1: '58mm',
	  confirmDirty: false,
	  autoCompleteResult: [],
	};
	onChange1 = (e) => {
	  console.log('radio1 checked', e.target.value);
	  this.setState({
	    value1: e.target.value,
	  });
	}
	handleSubmit = (e) => {
	  e.preventDefault();
	  this.props.form.validateFieldsAndScroll((err, values) => {
	    if (!err) {
	      console.log('Received values of form: ', values);
	    }
	  });
	}
  render(){
  	const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    return (
      <div>
	       	<Breadcrumb className="mb20">
	       	   <Breadcrumb.Item><Link to="/shopmgmt/shopmgmtc">店铺设置</Link></Breadcrumb.Item>
	       	   <Breadcrumb.Item>配货单</Breadcrumb.Item>
	       	</Breadcrumb>
         <h4 className="block-title mb10" >预览效果</h4>
         	<div style={{float:"left"}}>
	         	<div style={{width:"346px", border:"1px solid #ddd",padding:"10px 20px"}}>

	 		         	<h1 style={{textAlign:"center", marginBottom:"20px"}}>商家店铺名称</h1>
	 			         	<div className="mb20">
	 			         		<div style={{float:"right", width:"80px", height:"80px", background:"#ddd"}}>
	 			         											商家二维码
	 			         		</div>
	 			         		<div style={{fontSize:"14px", lineHeight:"27px"}}>
	 			         				         	<p>订单编号：201003003000</p>
	 			         				         	<p>配送时间：2017年06月16日 全天</p>
	 			         				         	<p>客户编码：122222222</p>         	
	 			         		</div>
	 			         	</div>
	 				         <h2>姓名 手机号码</h2>
	 				         <p>浙江省 杭州市 西湖区 建国北路236号诚信大厦18层</p>
	 				         <br/>
	 				         <p>买家备注内容*********** </p>
	 				         <br/>
	 				         <p>商品明细列表*********** </p>
	 				         <br/>
	 				         <table style={{width:"100%"}}>
	 				         	<tr style={{textAlign:"left"}}><th>序号</th> <th>商品信息</th> <th>数量</th></tr>
	 			         		<tr><td>1</td> <td>卡罗拉（网）A，20枝</td> <td>X1</td></tr>
	 			         		<tr><td>1</td> <td>卡罗拉（网）A，20枝</td> <td>X1</td></tr>
	 				         </table>
	 				         <br/>
	 				         温馨提示文字说明*****（底部备注信息）*****
	 				         <br/>
	 				         <br/>
	 				         <br/>
	 				         打印人员： admin <br/>
	 				         打印时间：2017-8-28 17:40:05
	 		        </div>
         	</div>
         	<div style={{float:"left",marginLeft:"20px"}}>
	         	<div style={{border:"1px solid #ddd", padding:"20px 20px", height:"400px"}}>
	         		<Form onSubmit={this.handleSubmit} style={{width:"600px"}}>
		         		<FormItem
	         		    {...formItemLayout}
	         		    label="小票规格"
	         		    hasFeedback
	         		  >
	         		      <RadioGroup options={options1} onChange={this.onChange1} value={this.state.value1} />
	         		  </FormItem>
	         		  <FormItem
	         		    {...formItemLayout}
	         		    label="编辑头部标题"
	         		    hasFeedback
	         		  >
	         		    <Input type="textarea"/>
	         		  </FormItem>
	         		  <FormItem
	         		    {...formItemLayout}
	         		    label="编辑底部备注"
	         		    hasFeedback
	         		  >
	         		    <Input type="textarea"/>
	         		  </FormItem>


	         		
	         		  <FormItem {...tailFormItemLayout}>
	         		    <Button type="primary" ghost >打印测试</Button>
	         		    <Button type="primary" htmlType="submit" style={{marginLeft:"10px"}}>应用</Button>
	         		  </FormItem>
	         		</Form>
	         		 	

         		</div>
         	</div>

	       	
	       	<div style={{clear:"both"}}></div>
      </div>
      )
  }
}
export default index

