import React from 'react'
import { Card, Col, Row } from 'antd';

const ColProps = {
	lg: 6,
	md: 8,
  sm: 12,
  xs: 24,
  style: {marginBottom: 16},
}

class index extends React.Component {
  render(){
    return (
        <div >
            <Row gutter={16}>
              <Col {...ColProps} >
                <Card title="营业时间" >设置自身特定的营业时间和订单切换时间</Card>
              </Col>
              <Col {...ColProps} >
                <Card title="销售区域" >设置自身特定的营业时间和订单切换时间</Card>
              </Col>
              <Col {...ColProps} >
                <Card title="店铺公告" >设置自身特定的营业时间和订单切换时间</Card>
              </Col>
              <Col {...ColProps} >
                <Card title="运费设置" >设置自身特定的营业时间和订单切换时间</Card>
              </Col>
              <Col {...ColProps} >
                <Card title="白条支付" >设置自身特定的营业时间和订单切换时间</Card>
              </Col>
              <Col {...ColProps} >
                <Card title="订货单" >设置自身特定的营业时间和订单切换时间</Card>
              </Col>
              <Col {...ColProps} >
                <Card title="会员价格" >设置自身特定的营业时间和订单切换时间</Card>
              </Col>
              <Col {...ColProps} >
                <Card title="自提点" >设置自身特定的营业时间和订单切换时间</Card>
              </Col>
              <Col {...ColProps} >
                <Card title="库存管理" >设置自身特定的营业时间和订单切换时间</Card>
              </Col>
              <Col {...ColProps} >
                <Card title="配货单" >设置自身特定的营业时间和订单切换时间</Card>
              </Col>
              <Col {...ColProps} >
                <Card title="地址单" >设置自身特定的营业时间和订单切换时间</Card>
              </Col>
            </Row>
          </div>
      )
  }
}

export default index