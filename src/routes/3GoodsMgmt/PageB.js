import React from 'react'
import { Link } from 'react-router';
import { Button, Form } from 'antd';
import { Tabs, Input, Select, Checkbox } from 'antd';
import { Table, Icon } from 'antd';
const Option = Select.Option;
const Search = Input.Search;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

const columns = [{
  title: '打印机', dataIndex: 'item4', key: 'item4', }, {
  title: '打印接机身号码', dataIndex: 'item5', key: 'item5', }, {
  title: '打印机状态', dataIndex: 'item6', key: 'item6', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <span className="ant-divider" />
      <a href="">Delete</a>
      <span className="ant-divider" />
      <a href="" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];

const data = [{
  key: '1',
  item1: 'John Brown',
  item2: 'John Brown',
  item3: 'John Brown',
  item4: 'John Brown',
  item5: 'John Brown',
  item6: 'John Brown',
}, {
  key: '2',
  item1: 'John Brown',
  item2: 'John Brown',
  item3: 'John Brown',
  item4: 'John Brown',
  item5: 'John Brown',
  item6: 'John Brown',
}, {
  key: '3',
  item1: 'John Brown',
  item2: 'John Brown',
  item3: 'John Brown',
  item4: 'John Brown',
  item5: 'John Brown',
  item6: 'John Brown',
}];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User',    // Column configuration not to be checked
  }),
};

class index extends React.Component {
  render(){
    return (
    		<div>

    			<div className="mb10 searchbg" >
              
              
              <Form layout='inline' className="mb10">
              <FormItem label="">
                <Search placeholder="输入搜索内容" onSearch={value => console.log(value)} />
              </FormItem>
              <FormItem label="所属分组">
                <Select defaultValue="商品分组" style={{  width: 120 }} >
                  <Option value="分组1">分组1</Option>
                  <Option value="分组2">分组2</Option>
                  <Option value="分组3">分组3</Option>
                </Select>
              </FormItem>
              <FormItem label="颜色" className='formitemlabel'>
                <Checkbox >颜色1</Checkbox>
                <Checkbox >颜色2</Checkbox>
                <Checkbox >颜色3</Checkbox>
              </FormItem>
              <FormItem label="等级" className='formitemlabel'>
                <Checkbox >等级1</Checkbox>
                <Checkbox >等级2</Checkbox>
                <Checkbox >等级3</Checkbox>
              </FormItem>
              <FormItem label="产地" className='formitemlabel'>
                <Checkbox >产地1</Checkbox>
                <Checkbox >产地2</Checkbox>
                <Checkbox >产地3</Checkbox>
              </FormItem>
              <FormItem >
                <Button type="primary" >搜索</Button> 
              </FormItem>
            </Form>  

            <div >
                <Link to="/goodsmgmtb/goodsmgmtbsuba"><Button type="primary"  >系统商品库</Button></Link>
                <Link to="/goodsmgmtb/goodsmgmtbforma"><Button type="primary" style={{marginLeft:"10px"}} >自定义商品</Button></Link>
                <Select defaultValue="1" style={{marginLeft:"10px", width: 120 }} >
                  <Option value="1">批量删除商品</Option>
                  <Option value="2">批量下载条码</Option>
                  <Option value="3">批量打印条码</Option>
                </Select>
              </div>
    				



    			</div>

	        <Tabs defaultActiveKey="1" tabPosition='left'>
	          <TabPane tab="玫瑰" key="1">              
              <Table columns={columns} dataSource={data} rowSelection={rowSelection} />
            </TabPane>
	          <TabPane tab="康乃馨" key="2">Content of Tab Pane 2</TabPane>
	        </Tabs>
    		</div>
      )
  }
}
export default index