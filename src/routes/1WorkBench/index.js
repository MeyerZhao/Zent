import React from 'react'
import { Row, Col, Button} from 'antd';
import { Alert, Pop } from 'zent';
import createG2 from 'g2-react';
import './index.css';

const trigger = 'hover'

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
    const content = (
        <div style={{position: 'relative', paddingRight:"100px", width:"240px", height:"80px"}}>
          <h3>欣然</h3>
          联系电话:0571-8500 5188
          <div className="img-qrcode"></div>

        </div>
      )
    const content2 = (
        <div style={{position: 'relative', paddingRight:"100px", width:"240px", height:"80px"}}>
          <h3>扫码下载</h3>
          有赞餐饮手机客户端
          <div className="img-qrcode"></div>

        </div>
      )
      

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
                    <h3 style={{padding:"20px 20px 10px"}}>待办事项</h3>
                    <Row gutter={16}  >
                      <Col span={12} >
                        <div style={{padding:"0 20px 20px"}} >
                          <div className="todo-item">
                            <div style={{float:"right"}}>
                              <a href="">0个订单</a>
                            </div>
                            <span>线上订单-待接单</span>
                          </div>

                          <div className="todo-item">
                            <div style={{float:"right"}}>
                              <a href="">0个订单</a>
                            </div>
                            <span>订货订单-待处理</span>
                          </div>
                        </div>
                      </Col>
                      <Col span={12} >
                        <div style={{padding:"0 20px 20px"}} >
                          <div className="todo-item">
                            <div style={{float:"right"}}>
                              <a href="">0个订单</a>
                            </div>
                            <span>线上订单-待发货</span>
                          </div>

                          <div className="todo-item">
                            <div style={{float:"right"}}>
                              <a href="">0个商品</a>
                            </div>
                            <span>商品报价-已报价</span>
                          </div>
                        </div>
                      </Col>

     
                    </Row>
                  </div>

                  <div className="mb20" >
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
                <Row gutter={8} className="mb20">
                  <Col span={8}>
                    <a href="" className="setting-status">
                      <div className="icon-bg icon-call--close"> </div>
                        <p className="status-text">商品未报价/商品已报价</p>
                    </a>
                  </Col>
                  <Col span={8}>
                    <a href="" className="setting-status">
                      <div className="icon-bg icon-printer--close"> </div>
                        <p className="status-text">未连接打印机</p>
                    </a>
                  </Col>
                  <Col span={8}>
                    <a href="" className="setting-status">
                      <div className="icon-bg icon-receive--open"> </div>
                        <p className="status-text">自动接单中</p>
                    </a>
                  </Col>
                </Row>

              <Pop trigger={trigger} position="left-top" content={content} block="true" >
                <div style={{background:"#f8f8f8"}} className="mb10">
                  <div style={{height:"70px", position:"relative",padding:"10px", paddingLeft:"70px", display:" table-cell", verticalAlign: "middle"}}>
                    <div style={{width:"44px", height:"44px", position:"absolute", top:"14px", left:"12px", borderRadius:"50%", background:"url(https://img.yzcdn.cn/public_files/2016/12/26/95d60bad3f1fac110d2a00403e770a1c.jpeg?imageView2/2/w/88/h/88/q/90/format/webp) center center", backgroundSize:"100%"}} alt="头像" > </div>
                    <h3>有问题找我</h3>
                    <p>你的服务经理：唐棉</p>
                  </div>
                </div>
              </Pop>

              <Pop trigger={trigger} position="left-top" content={content2} block="true" >
                <div style={{background:"#f8f8f8"}} className="mb20">
                  <div style={{height:"70px", position:"relative",padding:"10px", paddingLeft:"70px", display:" table-cell", verticalAlign: "middle"}}>
                    <img className="card-thumb__image"  alt="图标" src="https://img.yzcdn.cn/public_files/2017/3/18/470ab1557cf2560a6608aeabada4f8a6.png"/>
                    
                    <h3>花秘批发手机客户端</h3>
                    <p>用手机随时随地管理店铺</p>
                  </div>
                </div>
              </Pop>

                <div className="mb20">
                  <h3 className="info-list__header">有赞厨神</h3>
                  <ul>
                    <li>
                      <a href="" className="txt-red info-list__item">玩法 | 新餐饮一体化解决方案，帮你赚钱提效</a>
                    </li>
                    <li>
                      <a href="" className="info-list__item">案例 | 一套软件玩转外卖、堂食点餐、小程序</a>
                    </li>
                    <li>
                      <a href="" className="info-list__item">有赞餐饮常见问题</a>
                    </li>
                  </ul>
                </div>

                <div className="mb20">
                  <h3 className="info-list__header">产品动态 <a href="" style={{fontWeight:"normal", fontSize:"12px"}}>更多</a></h3>
                  <ul>
                    <ul >
                      <li>
                        <a className="info-list__item" title="08/18 发布：PC端上线支付有礼营销工具">08/18 发布：PC端上线支付有礼营销工具</a>
                      </li>
                      <li>
                        <a className="info-list__item" title="08/17 发布：PC端优惠券支持设置场景">08/17 发布：PC端优惠券支持设置场景</a>
                      </li>
                      <li>
                        <a className="info-list__item" title="08/12 通知：小程序微信支付异常处理">08/12 通知：小程序微信支付异常处理</a>
                      </li>
                      <li>
                        <a className="info-list__item" title="08/12 发布：PC授权绑定微信公众号上线">08/12 发布：PC授权绑定微信公众号上线</a>
                      </li>
                      <li>
                        <a className="info-list__item" title="08/10 发布：会员管理功能上线">08/10 发布：会员管理功能上线</a>
                      </li>
                    </ul>
                  </ul>
                </div>


              </div>

              
              
              <div style={{clear:"both"}}></div>
            </div>
          </div>
          )
  }
}

export default index