import React from 'react';
import { Button } from 'zent';
import { Form, Input } from 'antd';
import { InputNumber } from 'antd';

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
          label="当前额度"
          hasFeedback
        >
          1000.00元 <a href="">查看清单</a>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="调整额度"
          hasFeedback
        >
          <InputNumber
                defaultValue={1000}
                formatter={value => `${value}元`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace('元', '')}
              />
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
          <h3 className="block-title mb20">额度调整</h3>
          <WrappedRegistrationForm  />
        </div>

      </div>
      )
  }
}

export default index