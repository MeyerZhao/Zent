import React from 'react';
import {Radio, Form, Input, Button } from 'antd';
import { Link } from 'react-router';
import PicturesWall from '../../components/PicturesWall.jsx'
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
class index extends React.Component {
	state = {
		value: 1,
    show: true,
	}
	onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
      show: e.target.value,
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

		const contenta=(
			<Form onSubmit={this.handleSubmit} style={{width:"540px"}}>
        <FormItem {...formItemLayout} label="企业名称" hasFeedback > <Input /> </FormItem>
        <FormItem {...formItemLayout} label="法人姓名" hasFeedback > <Input /> </FormItem>
        <FormItem {...formItemLayout} label="身份证号码" hasFeedback > <Input /> </FormItem>
        <FormItem {...formItemLayout} label="手持身份证" hasFeedback > <PicturesWall uptxt="上传图片" /> </FormItem>
        <FormItem {...formItemLayout} label="营业执照" hasFeedback > <PicturesWall uptxt="上传图片"/> </FormItem>
				<FormItem {...formItemLayout} label="营业执照号" hasFeedback > <Input /> </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">提交认证</Button>
        </FormItem>
			</Form>
			)
    const contentb=(
      <Form onSubmit={this.handleSubmit} style={{width:"540px"}}>
        <FormItem {...formItemLayout} label="姓名"hasFeedback > <Input /> </FormItem>
        <FormItem {...formItemLayout} label="身份证号"hasFeedback > <Input /> </FormItem>
        <FormItem {...formItemLayout} label="手持身份证" hasFeedback > <PicturesWall uptxt="上传图片" /> </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">提交认证</Button>
        </FormItem>
      </Form>
      )

		return(
			<div>
        <div className="mb20">
        <h4 className="block-title mb20" >基本资料</h4>
        <div style={{marginBottom:"20px", width:"540px", textAlign:"center"}}>
            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>企业</Radio>
              <Radio value={0}>个人</Radio>
            </RadioGroup>
        </div>

        {this.state.show ? contenta : contentb}
        </div>
        <Link to="/shopmgmt/shopmgmta/shopmgmtaformc">审核状态</Link>
			</div>
			)
	}
}
export default index