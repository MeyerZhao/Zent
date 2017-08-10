import React from 'react';
import { Button } from 'zent';
import { Form, Input } from 'antd';
import { Radio } from 'antd';

const options = [
  { label: '高级管理员', value: '高级管理员' },
  { label: '普通管理员', value: '普通管理员' },
  { label: '客服', value: '客服' },
  { label: '报价员', value: '报价员' },
];
const RadioGroup = Radio.Group;
const FormItem = Form.Item;

class RegistrationForm extends React.Component {
  state = {
    value1: '高级管理员',
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

 
  render() {

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
      <Form onSubmit={this.handleSubmit} style={{width:"600px"}}>
        <FormItem
          {...formItemLayout}
          label="HUAXM账号"
          hasFeedback
        >
          <Input />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="员工姓名"
          hasFeedback
        >
          <Input />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="联系方式"
          hasFeedback
        >
          <Input />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="赋予权限"
          hasFeedback
        >
            <RadioGroup options={options} onChange={this.onChange1} value={this.state.value1} />
        </FormItem>
   
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">确定提交</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);



class index extends React.Component {
  render(){
    return (
      <div >

        <div className="mb20">
          <h3 className="block-title mb20">白条还款</h3>
          <WrappedRegistrationForm  />
        </div>

      </div>
      )
  }
}

export default index