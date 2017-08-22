import React from 'react'
import { Button, } from 'antd';
import { Link } from 'react-router';
import './ShopInfo.css';


class index extends React.Component {
  render(){
    return (
    	<div>
    		<div className="mb20">
	    		<h4 className="block-title" >基本资料</h4>
	    		<table className="BaseTable"  style={{width:"100%"}}>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}>店铺名称： </td> <td>黄焖鸡米饭文一西路170526</td> </tr>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}>主营类目： </td> <td>黄焖鸡米饭文一西路170526</td> </tr>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}>店铺图标： </td> <td><img src="https://img.yzcdn.cn/upload_files/2017/05/22/FkwOki1vc3BiduLLPwUUDXOgMC5l.jpeg?imageView2/2/w/120/h/120/q/90/format/webp" style={{width:"60px", height:"60px"}} alt="在线批发" /> </td> </tr>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}>门店照片： </td> <td>未上传</td> </tr>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}>联系人： </td> <td>王小明</td> </tr>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}>联系手机： </td> <td>18668001236</td> </tr>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}>联系电话： </td> <td>8888-8888</td> </tr>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}>微信号： </td> <td>微信号</td> </tr>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}>QQ： </td> <td>4578954687</td> </tr>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}>门店地址： </td> <td>4578954687</td> </tr>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}> </td> <td><Link to="/shopmgmt/shopmgmta/shopmgmtaforma"><Button type="primary" ghost >编辑资料</Button></Link></td> </tr>
	    		</table>
    		</div>

    		<div className="mb20">
	    		<h4 className="block-title" >联系人信息</h4>
	    		<table className="BaseTable"  style={{width:"100%"}}>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}>联系人电话： </td> <td>+86-18858568856</td> </tr>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}></td> <td><Button type="primary" ghost >修改联系人</Button></td> </tr>
	    		</table>
    		</div>

    		<div className="mb20">
	    		<h4 className="block-title" >认证信息</h4>
	    		<table className="BaseTable"  style={{width:"100%"}}>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}>主体认证： </td> <td>+86-18858568856</td> </tr>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}></td> <td><Link to="/shopmgmt/shopmgmta/shopmgmtaformb"><Button type="primary" ghost >去认证</Button></Link></td> </tr>
	    		</table>
    		</div>

    
    	</div>
    	)
  }
}

export default index

