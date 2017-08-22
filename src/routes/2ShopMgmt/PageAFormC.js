import React from 'react';
import {Steps, Button, message} from 'antd';
const Step = Steps.Step;

const steps = [{
  title: '提交成功',
  description: "我们将于一个工作日内完成审核，请留意相关通知消息。",
  content: (<h1>你好</h1>),
}, {
  title: '主体认证审核',
  content: 'Second-content',
}, {
  title: '继续填写店铺信息',
  content: 'Last-content',
}];

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render(){
    const { current } = this.state;
    return (
        <div>
              <Steps current={1} status="error">
                <Step title="提交成功" description="This is a description" />
                <Step title="主体认证审核" description="This is a description" />
                <Step title="继续填写店铺信息" description="This is a description" />
              </Steps>
              <br/>

              <Steps current={current}>
                {steps.map(item => <Step key={item.title} title={item.title}  description={item.description}/>)}
              </Steps>
              <div className="steps-content">{steps[this.state.current].content}</div>
              <div className="steps-action">
                {
                  this.state.current < steps.length - 1
                  &&
                  <Button type="primary" onClick={() => this.next()}>Next</Button>
                }
                {
                  this.state.current === steps.length - 1
                  &&
                  <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                }
                {
                  this.state.current > 0
                  &&
                  <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                    Previous
                  </Button>
                }
              </div>
            </div>
      )
  }
}

export default index