import React from 'react'
import { Link } from 'react-router'
import { Input, Button, Breadcrumb, Form, Switch} from 'antd';
const FormItem = Form.Item;

class index extends React.Component {
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
             <Breadcrumb.Item><Link to="/stockmgmtf">供应商</Link></Breadcrumb.Item>
             <Breadcrumb.Item>添加商列表</Breadcrumb.Item>
          </Breadcrumb>
          <div className="mb20">
		    		<h4 className="block-title" >基本资料</h4>
		    	</div>

		    	<Form onSubmit={this.handleSubmit} style={{width:"600px"}}>
		    		<FormItem {...formItemLayout} label="名称"> <Input placeholder="请输入供应商名称" /> </FormItem>
		    		<FormItem {...formItemLayout} label="编码"> <Input placeholder="请输入编码" /> </FormItem>
		    		<FormItem {...formItemLayout} label="联系人"> <Input placeholder="请输入联系人" /> </FormItem>
		    		<FormItem {...formItemLayout} label="手机号码"> <Input placeholder="请输入手机号码" /> </FormItem>
		    		<FormItem {...formItemLayout} label="公司电话"> <Input placeholder="请输入公司电话" /> </FormItem>
		    		<FormItem {...formItemLayout} label="微信"> <Input /> </FormItem>
		    		<FormItem {...formItemLayout} label="QQ"> <Input /> </FormItem>
		    		<FormItem {...formItemLayout} label="Email"> <Input /> </FormItem>
		    		<FormItem {...formItemLayout} label="备注"> <Input type="textarea" rows={4}/> </FormItem>
		    		<FormItem {...formItemLayout} label="状态"> <Switch checkedChildren="开" unCheckedChildren="关" />  </FormItem>

		    		<FormItem {...tailFormItemLayout}> 
		    			<Button >取消</Button> 
		    			<Button type="primary" htmlType="submit" style={{marginLeft:"10px"}}>保存</Button> 
		    		</FormItem>
		    	</Form>

          
        </div>
      )
  }
}

export default index