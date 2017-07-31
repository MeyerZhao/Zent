import React from 'react'
import { Modal } from 'antd';
import { Button } from 'zent';
import './Modal.css';

export default class extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <span style={{marginRight:"10px"}}>
        <Button type="primary" onClick={this.showModal} >{this.props.title}</Button>
        <Modal
          title={this.props.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          {this.props.children}
        </Modal>
      </span>
    );
  }
}
