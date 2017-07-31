import React from 'react'
import { Button, } from 'zent';
import { Table, Icon } from 'antd';
import Modal from '../../components/Modal.js'
import PrinterForm from './PrinterForm.js'


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
class index extends React.Component {
  render(){
    return (
        <div>
        	<div className="mb10">
            <Modal title="新建打印机"><PrinterForm /> </Modal>
	        	<Button type="primary" >新建打印机</Button> <Button type="primary"  outline >购买打印机</Button>
        	</div>

        	<Table columns={columns} dataSource={data} />
        </div>
      )
  }
}

export default index



