import React from 'react';
import { Form, Input, Cascader, Button, Checkbox } from 'antd';
import city from '../../utils/city'
const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item;
const options = [
  { label: '西湖区', value: 'xihu' },
  { label: '下城区', value: 'xiacheng' },
  { label: '上城区', value: 'shangcheng' },
  { label: '临安市', value: 'linan' },
];
class RegistrationForm extends React.Component {

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
          label="所在城市"
          hasFeedback
        >
          <Cascader
            size="large"
            style={{ width: '100%' }}
            options={city}
            placeholder="请选择地址！"
            changeOnSelect
          />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="排序"
          hasFeedback
        >
          <Input placeholder="100"/>
        </FormItem>
       <FormItem
          {...formItemLayout}
          label="配送区域"
          hasFeedback
        >
          <CheckboxGroup options={options} defaultValue={['xihu']}  />
        </FormItem>
   
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">确认提交</Button>
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
          <h3 className="block-title mb20">配送范围</h3>
          <p className="mb20">销售区域并设置以后，超出销售区域的客户无法下单。默认情况下为无销售区域限制。</p>
          <WrappedRegistrationForm  />
        </div>

      </div>
      )
  }
}

export default index