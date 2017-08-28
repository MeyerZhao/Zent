import React from 'react';
import { Link } from 'react-router';
import { Breadcrumb, Input } from 'antd';
import { Form, Button } from 'antd';
import { InputNumber, Row, Col } from 'antd';
import { Alert } from 'zent';
import PageASubBForm1 from './PageASubBForm1'

const FormItem = Form.Item;

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
    return (
      <div>
        <Form onSubmit={this.handleSubmit} style={{width:"800px"}}>
          <FormItem
            {...formItemLayout}
            label="店铺名称"
          >
            花集进货平台
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="可提现方式"
          >
            {getFieldDecorator('bank', {
              rules: [{
                type: 'bank', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <div>
                <Row gutter={16}>
                  <Col span={12}>
                    <div className="yuan-check-select">
                      <div><b>对私银行账户</b></div>
                      <small>支持提现值个人银行借记卡</small>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="yuan-check">
                      <div><b>对私银行账户</b></div>
                      <small>支持提现值个人银行借记卡</small>
                    </div>
                  </Col>
                </Row>
              
              </div>
            )}
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

class index extends React.Component {
  render(){

    return (
        <div>
        	<div className="yuan-card mb20">
            <div className="yuan-card-head">
              <div class="yuan-card-head-title"><b style={{fontSize:"14px"}}>设置提现账号</b></div>
            </div>
            <div className="yuan-card-body">
              <WrappedRegistrationForm  />
            </div>
            <div className="yuan-card-footer">
              <Alert type="warning">
                <p style={{lineHeight:"22px"}}>
                1.请仔细填写账户信息， 如果由于你填写错误导致资金流失， 有赞概不负责；<br/>
                2.只支持提现到银行借记卡，<span style={{color:"#db6b37"}}>不支持信用卡和存折</span>。提现审核周期为一个工作日；
                </p>
              </Alert>
              <PageASubBForm1></PageASubBForm1>
            </div>
          </div>


        </div>
      )
  }
}
export default index

