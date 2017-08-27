import React from 'react'
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;


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
      <Form onSubmit={this.handleSubmit} >
        <FormItem
          {...formItemLayout}
          label="SKU编号"
          hasFeedback
        >
          <Input placeholder="SKU编号"/>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="入库数量"
          hasFeedback
        >
          <Input />
        </FormItem>


        <FormItem
          {...formItemLayout}
          label="入库价格（选填）"
          hasFeedback
        >
          <Input />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="供应商（选填）"
          hasFeedback
        >
           <Input />
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">确定入库</Button>
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
          <WrappedRegistrationForm  />
        </div>

      </div>
      )
  }
}

export default index