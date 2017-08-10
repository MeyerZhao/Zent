import React from 'react';
import { Button } from 'zent';
import { Form, Input } from 'antd';
import { Radio } from 'antd';

const options1 = [
  { label: '1张', value: '1张' },
  { label: '2张', value: '2张' },
];
const options2 = [
  { label: '外卖订单', value: '外卖订单' },
];
const RadioGroup = Radio.Group;
const FormItem = Form.Item;

class RegistrationForm extends React.Component {
  state = {
    value1: '1张',
    value2: '外卖订单',
    confirmDirty: false,
    autoCompleteResult: [],
  };
  onChange1 = (e) => {
    console.log('radio1 checked', e.target.value);
    this.setState({
      value1: e.target.value,
    });
  }
  onChange2 = (e) => {
    console.log('radio2 checked', e.target.value);
    this.setState({
      value2: e.target.value,
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
        <p className="mb20">
        目前仅支持Printcenter 365 小票打印机， 请确保打印机和使用有赞餐饮的电脑在同一个网络环境中。
        </p>
        <FormItem
          {...formItemLayout}
          label="设备名称"
          hasFeedback
        >
          <Input placeholder="填写自定义名称，如厨房打印机"/>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="设备号码"
          hasFeedback
        >
          <Input placeholder="填写设备底部的机器号"/>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="设备密钥"
          hasFeedback
        >
          <Input placeholder="填写密钥"/>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="打印数量"
          hasFeedback
        >
            <RadioGroup options={options1} onChange={this.onChange1} value={this.state.value1} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="打印支持"
          hasFeedback
        >
            <RadioGroup options={options2} onChange={this.onChange2} value={this.state.value2} />
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
          <h3 className="block-title mb20">新建打印机</h3>
          <WrappedRegistrationForm  />
        </div>

      </div>
      )
  }
}

export default index