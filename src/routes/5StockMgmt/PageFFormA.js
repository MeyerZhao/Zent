import React from 'react';
import { Button } from 'zent';
import { Form, Input, Select } from 'antd';
import { Radio } from 'antd';
import { InputNumber } from 'antd';
import { Switch } from 'antd';
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
     style: {width:"540px"}
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
      style: {width:"540px"}
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
      <Form onSubmit={this.handleSubmit} >
          <legend style={{paddingLeft: "10px"}}>基本信息</legend>
            <FormItem
              {...formItemLayout}
              label="名称"
            >
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: '请输入名称!' }],
                })(
                  <Input  />
                )}
                
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="编码"
            >
                <Input placeholder="请输入编码"/>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="联系人"
            >
                <Input placeholder="请输入联系人"/>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="手机号码"
            >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: '请输入手机号码!' }],
              })(
                <Input addonBefore={prefixSelector} placeholder="请输入手机号码" style={{ width: '100%' }} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="公司电话"
            >
                <Input placeholder="请输入公司电话"/>
            </FormItem>
           
         <legend style={{paddingLeft: "10px"}}>更多信息</legend>
           <FormItem
             {...formItemLayout}
             label="微信"
           >
               <Input />
           </FormItem>
           <FormItem
             {...formItemLayout}
             label="QQ"
           >
               <Input />
           </FormItem>
           <FormItem
             {...formItemLayout}
             label="Email"
           >
               <Input />
           </FormItem>
           <FormItem
             {...formItemLayout}
             label="传真"
           >
               <Input />
           </FormItem>
           <FormItem
             {...formItemLayout}
             label="备注"
           >
               <Input type="textarea" />
           </FormItem>
           <FormItem
             {...formItemLayout}
             label="状态"
           >
             <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={true} />
           </FormItem>

   
        


   
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">确定提交</Button>
          <Button size="large">取消</Button>

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
          <h4 className="block-title mb20"  >新增供应商</h4>
          <WrappedRegistrationForm  />
        </div>

      </div>
      )
  }
}

export default index