import React from 'react'
import { Link } from 'react-router';
import { Button, } from 'zent';
import './ShopInfo.css';


class index extends React.Component {
  render(){
    return (
    	<div>
    		<div className="mb20">
	    		<h4 style={{padding:"10px", background:"#f8f8f8"}}>基本资料</h4>
	    		<table className="BaseTable"  style={{width:"100%"}}>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}>店铺名称： </td> <td>黄焖鸡米饭文一西路170526</td> </tr>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}>店铺图标： </td> <td><img src="https://img.yzcdn.cn/public_files/2017/3/18/cfe95d71fb06572a0e6c5504c357ea93.png" style={{width:"60px", height:"60px"}} alt="在线批发" /> </td> </tr>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}>门店照片： </td> <td>未上传</td> </tr>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}>营业时间： </td> <td>周一至周日，08:00至20:00、08:00至08:30</td> </tr>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}>客服电话： </td> <td>18668001236</td> </tr>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}>门店地址： </td> <td>杭州市 西湖区 文新街道文一西路230号</td> </tr>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}> </td> <td><Link to="/shopinfoedit"><Button type="primary"  outline >编辑资料</Button></Link></td> </tr>
	    		</table>
    		</div>

    		<div className="mb20">
	    		<h4 style={{padding:"10px", background:"#f8f8f8"}}>联系人信息</h4>
	    		<table className="BaseTable"  style={{width:"100%"}}>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}>联系人电话： </td> <td>+86-18858568856</td> </tr>
	    			<tr> <td style={{width:"150px", textAlign:"right"}}></td> <td><Button type="primary"  outline >修改联系人</Button></td> </tr>
	    		</table>
    		</div>

    
    	</div>
    	)
  }
}

export default index

