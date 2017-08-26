import React from 'react';
import { Link } from 'react-router';
import { Card, Col, Row, Switch } from 'antd';

const ColProps = {
	lg: 8,
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
                <Link to="/shopmgmt/shopmgmtcsuba">
                  <Card title="营业时间（已设置）" style={{color:"rgba(0, 0, 0, 0.65)"}} >设置自身特定的营业时间和订单切换时间</Card>
                </Link>
              </Col>
              <Col {...ColProps} >
                <Link to="/shopmgmt/shopmgmtcsubb">
                  <Card title="销售区域（未设置）" style={{color:"rgba(0, 0, 0, 0.65)"}}>设置自身特定的销售区域范围</Card>
                </Link>
              </Col>
              <Col {...ColProps} >
                <Link to="/shopmgmt/shopmgmtcsubc">
                  <Card title="店铺公告（未设置）" style={{color:"rgba(0, 0, 0, 0.65)"}}>设置自身特定的营业时间和订单切换时间</Card>
                </Link>
              </Col>
              <Col {...ColProps} >
                <Link to="/shopmgmt/shopmgmtcsubd">
                  <Card title="运费设置（未设置）" style={{color:"rgba(0, 0, 0, 0.65)"}}>设置自身特定的运费模板管理</Card>
                </Link>
              </Col>
              <Col {...ColProps} >
                <Link to="/shopmgmt/shopmgmtcsubf">
                  <Card title="配货单（未设置）" style={{color:"rgba(0, 0, 0, 0.65)"}}>设置自身特定的配货单名称</Card>
                </Link>
              </Col>
              <Col {...ColProps} >
                <Link to="/shopmgmt/shopmgmtcsube">
                  <Card title="自提点（未设置）" style={{color:"rgba(0, 0, 0, 0.65)"}}>设置自身特定的门店提货地点</Card>
                </Link>
              </Col>
              <Col {...ColProps} >
                <Card title="会员价格（已开启）" extra={<Switch defaultChecked={true} />} >设开启后，只有注册用户才能查看商品报价； 禁用后，用户可直接查看当前商品报价。</Card>
              </Col>
              <Col {...ColProps} >
                <Card title="自动接单（未开启）" extra={<Switch defaultChecked={false} />} >开启后，顾客下单系统将自动为你接单，为避免漏单建议配合【打印机】使用</Card>
              </Col>
              <Col {...ColProps} >
                <Card title="库存关联（未开启）" extra={<Switch defaultChecked={false} />} >开启后，线上已报价商品库存自动与库存管理匹配，付款后减少库存，取消后自动增加库存。</Card>
              </Col>
             
            </Row>
          </div>
      )
  }
}

export default index