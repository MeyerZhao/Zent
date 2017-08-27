import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;


const options = [
  { label: '无门槛包邮', value: '0' },
  { label: (<span>产品折扣<Input style={{display:"inline",width:"50px", margin:"0 5px"}} />折</span>), value: '1' },
];
class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
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
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="标签名称">
            <Input />
        </FormItem>
        <FormItem {...formItemLayout} label="自动加标签条件">
          <Input addonBefore="累计成功交易" addonAfter="笔"  />
          <Input addonBefore="累计购买金额" addonAfter="元" style={{marginTop:"10px"}}/>
        </FormItem>
        <FormItem {...formItemLayout} label="标签名称">

            <CheckboxGroup options={options} defaultValue={['0']}/>
        </FormItem>
    
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">确定提交</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm