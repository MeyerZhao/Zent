import React from 'react';
import { Link } from 'react-router';
import { Breadcrumb, Input, Radio, Form } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
class index extends React.Component {
	state = {
		value: 1,
	}
	onChange = (e) =>{
		this.setState({
			value: e.target.value,
		})
	}
  render(){
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 10},
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
  	const content = (
        <Form layout= "inline" onSubmit={this.handleSubmit} style={{width:"600px"}}>
          <FormItem
            {...formItemLayout}
            label="单笔订单未满"
            hasFeedback
          >
            <Input addonAfter="元" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="需单独支付运费"
            hasFeedback
          >
            <Input />
          </FormItem>
        </Form>
  		)
    return (
    		<div>
    			<Breadcrumb className="mb20">
    			   <Breadcrumb.Item><Link to="/shopmgmt/shopmgmtc">店铺设置</Link></Breadcrumb.Item>
    			   <Breadcrumb.Item>运费设置</Breadcrumb.Item>
    			</Breadcrumb>
    			<h4 className="block-title mb10" >运费设置</h4>   
					<div style={{marginBottom:"20px", width:"540px", textAlign:"center"}}>
					    <RadioGroup onChange={this.onChange} value={this.state.value}>
					      <Radio value={0}>无条件包邮</Radio>
					      <Radio value={1}>有条件包邮</Radio>
					    </RadioGroup>
					</div>

    			{this.state.value ? content : null}

    		</div>
      )
  }
}
export default index

