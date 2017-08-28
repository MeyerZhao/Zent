import React from 'react';
import { Button } from 'zent';
import { Form, Input, Select } from 'antd';
import { Radio } from 'antd';
import { InputNumber } from 'antd';
const options = [
  { label: '开通', value: 'Enable' },
  { label: '禁用', value: 'Disable' },
];
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const Option = Select.Option;



class RegistrationForm extends React.Component {
  state = {
    value1: 'Enable',
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
    const { getFieldDecorator } = this.props.form;

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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 60 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );


    return (
      <Form onSubmit={this.handleSubmit} style={{width:"540px"}}>
        <FormItem
          {...formItemLayout}
          label="用户昵称"
          hasFeedback
        >
            <Input defaultValue="玫瑰花" disabled/>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="用户注册手机"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入手机号码!' }],
          })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="白条状态"
          hasFeedback
        >
            <RadioGroup options={options} onChange={this.onChange1} value={this.state.value1} />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="结算周期"
        >
          <InputNumber
                defaultValue={100}
                min={0}
                max={100}
                formatter={value => `${value}天`}
                parser={value => value.replace('天', '')}
              />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="白条额度"
        >
          <InputNumber
                defaultValue={1000}
                formatter={value => `${value}元`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace('元', '')}
              />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="白条余额"
        >
          10,000.00元
        </FormItem>  
        <FormItem
          {...formItemLayout}
          label="应收金额"
        >
          0.00元
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
      <div>

        <div className="mb20">
          <h4 className="block-title mb20"  >添加/编辑白条账户</h4>
          <WrappedRegistrationForm  />
        </div>

      </div>
      )
  }
}

export default index