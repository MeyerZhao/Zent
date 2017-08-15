import React from 'react'
import { Form, Input, Select, Button, } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;



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
      <Form onSubmit={this.handleSubmit} style={{width:"540px"}}>
        <FormItem
          {...formItemLayout}
          label="分组名称"
          hasFeedback
        >
          <Input />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="分类排序"
          hasFeedback
        >
          <Input />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="默认属性"
          hasFeedback
        >
          <Select>
            <Option value="1">颜色</Option>
            <Option value="2">花头</Option>
          </Select>
        </FormItem>



  
 
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" style={{marginRight:"10px"}}>确认添加</Button>
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
          <h4 className="block-title mb20"  >新建分组</h4>
          <WrappedRegistrationForm  />
        </div>

      </div>
      )
  }
}

export default index