import React from 'react'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


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
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

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
      <Form onSubmit={this.handleSubmit} style={{marginTop:"20px", width:"800px"}}>
        <FormItem
          {...formItemLayout}
          label="开户银行"
          hasFeedback
        >
          {getFieldDecorator('bank', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="银行卡卡号"
          hasFeedback
        >
          {getFieldDecorator('bank', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <Input placeholder="只支持提现至借记卡， 不支持信用卡和存折" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="开卡人姓名"
          hasFeedback
        >
          {getFieldDecorator('bank', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <Input placeholder="准确填写银行卡开卡人姓名， 否则无法提现；" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="短信验证码"
          extra="验证短信将发送到你绑定的手机"
        >
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
              })(
                <Input size="large" />
              )}
            </Col>
            <Col span={12}>
              <Button size="large">获取</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">保存</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm