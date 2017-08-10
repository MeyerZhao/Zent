import React from 'react'
import { Row, Col, Button } from 'antd';
import { Alert } from 'zent';
import createG2 from 'g2-react';
import './index.css';


const Chart = createG2(chart => {
      chart.col('month', {
        alias: '日期',
        range: [0, 1]
      });
      chart.col('order', {
        alias: '订单数量'
      });
      chart.line().position('month*order').size(2);
      chart.render();
    });

class MyComponent extends React.Component {
    state={
        data: [
            {month: '2017/7/19', order: 20},
            {month: '2017/7/20', order: 6.9},
            {month: '2017/7/21', order: 9.5},
            {month: '2017/7/22', order: 14.5},
            {month: '2017/7/23', order: 18.2},
            {month: '2017/7/24', order: 10},
            {month: '2017/7/25', order: 25.2},
            {month: '2017/7/26', order: 26.5},
            {month: '2017/7/27', order: 23.3},
            {month: '2017/7/28', order: 9.6}
          ],
          forceFit: true,
          width: 500,
          height: 450
    }
    render(){
        return(
          <div>
            <Chart
              data={this.state.data}
              width={this.state.width}
              height={this.state.height}
              forceFit={this.state.forceFit} />
          </div>
      )
    }
}


class index extends React.Component {
  render(){
    return (
          <div style={{ padding: 30, background: '#fff',position:"relative"}}>
            <div className="wrap">
              <div className="main">
                <div className="main-inner">
                
                  <Alert type="danger" className="mb20">
                    <Button ghost style={{float:"right"}}>立即订购</Button>
                    <span style={{lineHeight:"27px"}}>免费试用期还剩 1 天，为不影响营业，请尽快订购哦。咨询电话： 0571-85225188</span>
                    <div style={{clear:"both"}}></div>
                  </Alert>

                  <div style={{background:"#f8f8f8"}} className="mb20" >
                    <Row gutter={16}>
                      <Col span={6} >
                        <div className="panel">
                          <span>今日交易额（元）</span>
                          <div> <b>0.00</b>
                          </div>
                          <small>线下：0.00</small>
                        </div>
                      </Col>
                      <Col span={6} >
                        <div className="panel">
                          <span>今日交易额（元）</span>
                          <div> <b>0.00</b>
                          </div>
                          <small>线下：0.00</small>
                        </div>
                      </Col>
                      <Col span={6} >
                        <div className="panel">
                          <span>今日交易额（元）</span>
                          <div>
                            <b>0.00</b>
                          </div>
                          <small>线下：0.00</small>
                        </div>
                      </Col>
                      <Col span={6} >
                        <div className="panel">
                          <span>今日交易额（元）</span>
                          <div>
                            <b>0.00</b>
                          </div>
                          <small>线下：0.00</small>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div style={{background:"#f8f8f8"}} className="mb20">
                    <Row gutter={16}  >
                      <Col span={12} >
                        <h3 style={{padding:"20px 20px 10px"}}>待办事项</h3>
                        <div style={{padding:"0 20px 20px"}} >
                          <div className="todo-item">
                            <div style={{float:"right"}}>
                              <a href="">0个订单</a>
                            </div>
                            <span>外卖订单-带接单</span>
                          </div>

                          <div className="todo-item">
                            <div style={{float:"right"}}>
                              <a href="">0个订单</a>
                            </div>
                            <span>外卖订单-带接单</span>
                          </div>
                        </div>
                      </Col>
                      <Col span={4} style={{textAlign:"center"}} >
                        <h3 style={{padding:"20px 20px 10px"}}>在线批发</h3>
                        <div>
                          <img src="https://img.yzcdn.cn/public_files/2017/3/18/cfe95d71fb06572a0e6c5504c357ea93.png" alt="在线批发" />
                        </div>
                        <Button type="danger" ghost>在线批发</Button>
                      </Col>
                      <Col span={4} style={{textAlign:"center"}} >
                        <h3 style={{padding:"20px 20px 10px"}}>商品报价</h3>
                        <div>
                          <img style={{width:"100px", height:"100px"}} alt="商品报价"/>
                        </div>
                      </Col>
                      <Col span={4} style={{textAlign:"center"}} >
                        <h3 style={{padding:"20px 20px 10px"}}>开单收银</h3>
                        <div> <img style={{width:"100px", height:"100px"}} alt="开单收银"/> </div>
                      </Col>
                    </Row>
                  </div>

                  <div style={{background:"#f8f8f8"}} className="mb20" >
                    <Row gutter={16}>
                      <Col span={24} >
                        <h3 style={{padding:"20px 20px 10px"}}>近七天订单趋势</h3>
                        <MyComponent />
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>

              <div className="extra">
                <div style={{background:"#f8f8f8"}} className="mb20">
                  <div style={{height:"70px", position:"relative",padding:"10px", paddingLeft:"70px", display:" table-cell", verticalAlign: "middle"}}>
                    <img style={{width:"44px", height:"44px", position:"absolute", top:"14px", left:"12px", background:"#d6d6d6"}} alt="头像"/>
                    <h3>有问题找我</h3>
                    <p>你的服务经理：唐棉</p>
                  </div>
                </div>

                <div style={{background:"#f8f8f8"}} className="mb20">
                  <div style={{height:"70px", position:"relative",padding:"10px", paddingLeft:"70px", display:" table-cell", verticalAlign: "middle"}}>
                    <img style={{width:"44px", height:"44px", position:"absolute", top:"14px", left:"12px", background:"#d6d6d6"}} alt="图标"/>
                    <h3>HUAXM批发微信小程序</h3>
                    <p>用手机随时随地管理店铺</p>
                  </div>
                </div>
              </div>
              
              <div style={{clear:"both"}}></div>
            </div>
          </div>
          )
  }
}

export default index