import React from 'react'
import { Form, Input, Select, Button, Checkbox } from 'antd';
import PicturesWall2 from '../../components/PicturesWall2.jsx'
const FormItem = Form.Item;
const Option = Select.Option;

const selectAfter = (
  <Select defaultValue="1" style={{ width: 50 }}>
    <Option value="1">枝</Option>
    <Option value="2">公斤</Option>
  </Select>
);


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
          label="商品名称"
          hasFeedback
        >
          <Input />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="单位"
          hasFeedback
        >
          <Input addonAfter={selectAfter} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="分组"
          hasFeedback
        >
          <ul>
            <li className="p-add-tag">+新建分组</li>
            <li className="widget-checkbox-button widget-checkbox-button--checked">主食</li>
            <li className="widget-checkbox-button">冷菜</li>
            <li className="widget-checkbox-button">热菜</li>
          </ul>
          <div className="ant-form-extra">商品需要放入分组后，才会展示给顾客</div>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="图片"
          extra="图片大小不超过1M, 最多6张,建议使用方形图片"
        >
          <PicturesWall2 clssName="custom" uptxt="上传照片" />
        </FormItem>

        <FormItem {...formItemLayout} label="颜色">
          <Checkbox >颜色1</Checkbox>
          <Checkbox >颜色2</Checkbox>
          <Checkbox >颜色3</Checkbox>
        </FormItem>
        <FormItem {...formItemLayout} label="等级">
          <Checkbox >等级1</Checkbox>
          <Checkbox >等级2</Checkbox>
          <Checkbox >等级3</Checkbox>
        </FormItem>
        <FormItem {...formItemLayout} label="产地">
          <Checkbox >产地1</Checkbox>
          <Checkbox >产地2</Checkbox>
          <Checkbox >产地3</Checkbox>
        </FormItem>
 
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" style={{marginRight:"10px"}}>保存</Button>
          <Button  >完成，继续添加下一个</Button>
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
          <h4 className="block-title mb20"  >添加自定义商品</h4>
          <WrappedRegistrationForm  />
        </div>

      </div>
      )
  }
}

export default index