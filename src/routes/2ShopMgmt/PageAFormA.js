import React from 'react'
import { Form, Input, Cascader, Select, Button } from 'antd';
import city from '../../utils/city'
import './ShopInfo.css';
import PicturesWall from '../../components/PicturesWall.jsx'
import PicturesWall2 from '../../components/PicturesWall2.jsx'
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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 60 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );



    return (
      <Form onSubmit={this.handleSubmit} style={{width:"540px"}}>
      	<FormItem
      	  {...formItemLayout}
      	  label="店铺名称"
      	  hasFeedback
      	>
      	  <Input />
      	</FormItem>

        <FormItem
          {...formItemLayout}
          label="主营类目"
          hasFeedback
        >
          <Input />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="店铺图标"
          hasFeedback
        >
          <PicturesWall clssName="custom" uptxt="上传图标" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="门店照片"
          hasFeedback
        >
          <PicturesWall2 clssName="custom" uptxt="上传照片" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="联系人"
          hasFeedback
        >
          <Input />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="手机号码"
          hasFeedback
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="座机电话"
          hasFeedback
        >
          <Input />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="微信号"
          hasFeedback
        >
          <Input />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="QQ"
          hasFeedback
        >
          <Input />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="门店地址"
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

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">保存</Button>
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
	    		<h4 className="block-title mb20"  >编辑资料</h4>
	    		<WrappedRegistrationForm  />
    		</div>

    	</div>
    	)
  }
}

export default index