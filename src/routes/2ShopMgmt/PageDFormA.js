import React from 'react';
import { Button, Icon } from 'antd';
import { Form, Input } from 'antd';
import { Radio } from 'antd';
import {Pop} from 'zent'

const trigger = 'hover';
const content1 = (<span>具备店铺所有的管理权限。</span>)
const content2 = (<span>具备除了“添加管理员”、“删除管理员”、“店铺设置”、“资产管理”之外，店铺所有管理的权限。</span>)
const content3 = (<span>具备“查看商品列表和分组”、“查看订单列表、维权售后”、“查看客户列表和标签”的店铺管理权限。</span>)
const content4 = (<span>具备“商品报价管理”、“库存管理”的店铺管理权限。</span>)

const options = [
  { label: (<Pop trigger={trigger} position="top-center" content={content1}><span>高级管理员 <Icon type="question-circle-o" /></span></Pop>), value: '高级管理员' },
  { label: (<Pop trigger={trigger} position="top-center" content={content2}><span>普通管理员 <Icon type="question-circle-o" /></span></Pop>), value: '普通管理员' },
  { label: (<Pop trigger={trigger} position="top-center" content={content3}><span>客服 <Icon type="question-circle-o" /></span></Pop>), value: '客服' },
  { label: (<Pop trigger={trigger} position="top-center" content={content4}><span>报价员 <Icon type="question-circle-o" /></span></Pop>), value: '报价员' },
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
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
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
          offset: 4,
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