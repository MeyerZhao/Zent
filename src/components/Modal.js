import React from 'react'
import { Modal, Button } from 'antd';
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
      <span >
        <Button type="primary" onClick={this.showModal} >{this.props.title}</Button>
        <Modal
          title={this.props.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}          
          {...this.props}
        >
          {this.props.children}
        </Modal>
      </span>
    );
  }
}
