import React from 'react';
import { Form, Input, Cascader, Button, DatePicker} from 'antd';
import city from '../../utils/city'

const { RangePicker } = DatePicker;
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
        <FormItem {...formItemLayout} label="名称"hasFeedback > <Input /> </FormItem>
        <FormItem {...formItemLayout} label="联系电话"hasFeedback > <Input /> </FormItem>
        <FormItem {...formItemLayout} label="所属区域"hasFeedback > 
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
          label="详细地址"
          hasFeedback
        >
          <Input />
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="地图定位"
          hasFeedback
        >
          <div>
            地图
          </div>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="营业时间"
          hasFeedback
        >
          <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
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
          <h3 className="block-title mb20">编辑自提点</h3>
          <WrappedRegistrationForm  />
        </div>

      </div>
      )
  }
}

export default index