import React from 'react';
import { Form, Input, Button} from 'antd';
const FormItem = Form.Item;
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
          label="公告标题"
          hasFeedback
        >
          <Input></Input>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="公告内容"
          hasFeedback
        >
          <Input type="textarea"/>
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
          <h3 className="block-title mb20">编辑店铺公告</h3>
          <WrappedRegistrationForm  />
        </div>

      </div>
      )
  }
}

export default index