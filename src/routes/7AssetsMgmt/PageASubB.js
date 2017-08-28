import React from 'react';
import { Link } from 'react-router';
import { Breadcrumb, Input } from 'antd';
import { Form, Button } from 'antd';
import { InputNumber } from 'antd';
import PageASubBset from './PageASubBset.js';
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
      <Form onSubmit={this.handleSubmit} style={{width:"800px"}}>
        <FormItem
          {...formItemLayout}
          label="可提现金额"
        >
            <b style={{fontSize:"18px", color:"#ff5a00"}}>0.00</b>&nbsp;元
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="选择提现银行"
          hasFeedback
        >
          {getFieldDecorator('bank', {
            rules: [{
              type: 'bank', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <div>
            <div style={{border:"1px solid #de641d", background:"#fff9ef", padding:"6px 14px"}}>
              <div style={{float:"left", fontWeight:"bold"}}>
                中国银行
              </div>
              <span style={{marginLeft:"10px"}}>
                浙江花集网科技股份有限公司（*****27）
              </span>
            </div>
            <a href="">添加银行卡</a>
            </div>
          )}
        </FormItem>

         <FormItem
          {...formItemLayout}
          label="提现金额"
          hasFeedback
        >
          {getFieldDecorator('bank', {
            rules: [{
              type: 'bank', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <div>
              <InputNumber placehoder="请输入充值金额"/>元
            </div>
          )}
        </FormItem>


    
        <FormItem
          {...formItemLayout}
          label="提现审核周期"
        >
          <div style={{paddingTop:"6px", lineHeight:"20px"}}>
            <p>
              <b>1个工作日完成</b> <br/>
              <span> 提现咨询专线：0571-8998848， 服务时间14:00-18：00</span><br/>
              <a href="">在线客服咨询</a>
            </p>
          </div>
        </FormItem>


   
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">确认充值</Button>
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
        	<Breadcrumb className="mb20">
             <Breadcrumb.Item><Link to="/stockmgmtf">资产管理</Link></Breadcrumb.Item>
             <Breadcrumb.Item>申请提现</Breadcrumb.Item>
          </Breadcrumb>
        	<div className="yuan-card mb20">
            <div className="yuan-card-head">
              <div class="yuan-card-head-title"><b style={{fontSize:"14px"}}>充值</b></div>
            </div>
            <div className="yuan-card-body">
              <WrappedRegistrationForm  />
            </div>
          </div>
          <PageASubBset />
        </div>
      )
  }
}
export default index

