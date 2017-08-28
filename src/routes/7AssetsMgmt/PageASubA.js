import React from 'react';
import { Link } from 'react-router';
import { Breadcrumb } from 'antd';
import { Form, Button } from 'antd';
import { InputNumber } from 'antd';

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
          label="账户可用余额"
        >
            <b style={{fontSize:"18px", color:"#ff5a00"}}>0.00</b>&nbsp;元
        </FormItem>
    
        <FormItem
          {...formItemLayout}
          label="白条额度"
        >
          <InputNumber placeholder="请输入充值金额"  style={{width:"70%"}}/>元
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
             <Breadcrumb.Item>充值</Breadcrumb.Item>
          </Breadcrumb>
        	<div className="yuan-card mb20">
            <div className="yuan-card-head">
              <div class="yuan-card-head-title"><b style={{fontSize:"14px"}}>充值</b></div>
            </div>
            <div className="yuan-card-body">
              <WrappedRegistrationForm  />
            </div>
          </div>
          <div style={{lineHeight:"22px"}}>
            <div className="mb10">使用遇到问题？</div>
            <p className="mb10">
              <b>-输入充值金额后，为什么无法成功充值？</b><br/>
              答：大额充值会受到充值额额度的限制，建议分批进行充值，每次充值金额不超过10000元
            </p>
            <p>
              <b>-充值成功了，为什么手指明细里没有记录？</b><br/>
              答：充值金额是实时到账的，若收支明细中没有记录， 可能是系统演示引起的，你可以稍后查看。若超过一天仍未显示，请于花秘客服联系
            </p>
          </div>

        </div>
      )
  }
}
export default index

