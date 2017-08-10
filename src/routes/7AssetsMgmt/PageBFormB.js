import React from 'react';
import { Button } from 'zent';
import { Form, Input } from 'antd';
import { Radio } from 'antd';
const options = [
  { label: '现金', value: '现金' },
  { label: '微信', value: '微信' },
  { label: '支付宝', value: '支付宝' },
];
const RadioGroup = Radio.Group;
const FormItem = Form.Item;

class RegistrationForm extends React.Component {
  state = {
    value1: '现金',
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
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
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
      <Form onSubmit={this.handleSubmit} style={{width:"540px"}}>
        <FormItem
          {...formItemLayout}
          label="用户注册手机"
          hasFeedback
        >
          13888888888
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="欠款金额"
          hasFeedback
        >
          2000.00元 <a href="">查看清单</a>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="还款金额"
          hasFeedback
        >
          100.00元 
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="还款方式"
          hasFeedback
        >
            <RadioGroup options={options} onChange={this.onChange1} value={this.state.value1} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="备注说明"
          hasFeedback
        >
          <Input type="textarea"></Input>
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
      <div style={{padding:"20px 30px"}}>

        <div className="mb20">
          <h3 className="block-title mb20">白条还款</h3>
          <WrappedRegistrationForm  />
        </div>

      </div>
      )
  }
}

export default index