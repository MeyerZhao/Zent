import React from 'react';
import ReactDOM from 'react-dom';
import 'zent/css/index.css';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './App'

// 1首页/工作台
import WorkBench from './routes/1WorkBench/';

// 2店铺管理
import ShopMgmt from './routes/2ShopMgmt/';
    import ShopInfo from './routes/2ShopMgmt/PageA';
    import ShopInfoEdit from './routes/2ShopMgmt/PageB';
    import ShopDecoration from './routes/2ShopMgmt/PageC';
    import ShopSet from './routes/2ShopMgmt/PageD';
    import Printer from './routes/2ShopMgmt/PageE';
    import Administrators from './routes/2ShopMgmt/PageF';

// 3商品管理
import GoodsMgmt from './routes/3GoodsMgmt/';
    import GoodsMgmtA from './routes/3GoodsMgmt/PageA';
    import GoodsMgmtB from './routes/3GoodsMgmt/PageB';
    import GoodsMgmtC from './routes/3GoodsMgmt/PageC';

// 4订单管理
import OrderMgmt from './routes/4OrderMgmt/';
    import OrderMgmtA from './routes/4OrderMgmt/PageA';
    import OrderMgmtB from './routes/4OrderMgmt/PageB';
    import OrderMgmtC from './routes/4OrderMgmt/PageC';
    import OrderMgmtD from './routes/4OrderMgmt/PageD';

// 5库存管理
import StockMgmt from './routes/5StockMgmt/';
    import StockMgmtA from './routes/5StockMgmt/PageA';
    import StockMgmtB from './routes/5StockMgmt/PageB';
    import StockMgmtC from './routes/5StockMgmt/PageC';
    import StockMgmtD from './routes/5StockMgmt/PageD';
    import StockMgmtE from './routes/5StockMgmt/PageE';
    import StockMgmtF from './routes/5StockMgmt/PageF';

// 6客户管理
import CustomerMgmt from './routes/6CustomerMgmt/';
    import CustomerMgmtA from './routes/6CustomerMgmt/PageA';
    import CustomerMgmtB from './routes/6CustomerMgmt/PageB';
    import CustomerMgmtC from './routes/6CustomerMgmt/PageC';

// 7资产管理
import AssetsMgmt from './routes/7AssetsMgmt/';
    import AssetsMgmtA from './routes/7AssetsMgmt/PageA';
    import AssetsMgmtB from './routes/7AssetsMgmt/PageB';

// 8应用插件
import Appplugin from './routes/8Appplugin/';
    import ApppluginA from './routes/8Appplugin/PageA';
    import ApppluginB from './routes/8Appplugin/PageB';
    import ApppluginC from './routes/8Appplugin/PageC';
    import ApppluginD from './routes/8Appplugin/PageD';

// 9数据分析
import DataAnalysis from './routes/9DataAnalysis/';
    import DataAnalysisA from './routes/9DataAnalysis/PageA';
    import DataAnalysisB from './routes/9DataAnalysis/PageB';
    import DataAnalysisC from './routes/9DataAnalysis/PageC';
    import DataAnalysisD from './routes/9DataAnalysis/PageD';



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={WorkBench}/>

      <Route path="/shopmgmt" component={ShopMgmt}>
        <IndexRoute component={ShopInfo} />
        <Route path="/shopmgmt/shopinfoedit" component={ShopInfoEdit} />
        <Route path="/shopmgmt/shopdecoration" component={ShopDecoration} />
        <Route path="/shopmgmt/shopset" component={ShopSet} />
        <Route path="/shopmgmt/printer" component={Printer} />
        <Route path="/shopmgmt/administrators" component={Administrators} />
      </Route>

      <Route path="/goodsmgmt" component={GoodsMgmt}>
        <IndexRoute component={GoodsMgmtA} />
        <Route path="/goodsmgmta" component={GoodsMgmtA} />
        <Route path="/goodsmgmtb" component={GoodsMgmtB} />
        <Route path="/goodsmgmtc" component={GoodsMgmtC} />
      </Route>

      <Route path="/ordermgmt" component={OrderMgmt}>
        <IndexRoute component={OrderMgmtA} />
        <Route path='/ordermgmta' component={OrderMgmtA} />
        <Route path='/ordermgmtb' component={OrderMgmtB} />
        <Route path='/ordermgmtc' component={OrderMgmtC} />
        <Route path='/ordermgmtd' component={OrderMgmtD} />
      </Route>

      <Route path="/stockmgmt" component={StockMgmt}>
        <IndexRoute component={StockMgmtA} />
        <Route path='/stockmgmta' component={StockMgmtA} />
        <Route path='/stockmgmtb' component={StockMgmtB} />
        <Route path='/stockmgmtc' component={StockMgmtC} />
        <Route path='/stockmgmtd' component={StockMgmtD} />
        <Route path='/stockmgmte' component={StockMgmtE} />
        <Route path='/stockmgmtf' component={StockMgmtF} />
      </Route>
      
      <Route path="/customermgmt" component={CustomerMgmt}>
        <IndexRoute component={CustomerMgmtA}></IndexRoute>
        <Route path='/customermgmta' component={CustomerMgmtA} />
        <Route path='/customermgmtb' component={CustomerMgmtB} />
        <Route path='/customermgmtc' component={CustomerMgmtC} />
      </Route>

      <Route path="/assetsmgmt" component={AssetsMgmt}>
        <IndexRoute component={AssetsMgmtA}></IndexRoute>
        <Route path="/assetsmgmta" component={AssetsMgmtA} />
        <Route path="/assetsmgmtb" component={AssetsMgmtB} />
      </Route>

      <Route path="/appplugin" component={Appplugin}>
        <IndexRoute component={ApppluginA}></IndexRoute>
        <Route path="/appplugina" component={ApppluginA} />
        <Route path="/apppluginb" component={ApppluginB} />
        <Route path="/apppluginc" component={ApppluginC} />
        <Route path="/appplugind" component={ApppluginD} />
      </Route>

      <Route path="/dataanalysis" component={DataAnalysis}>
        <IndexRoute component={DataAnalysisA}></IndexRoute>
        <Route path="/dataanalysisa" component={DataAnalysisA} />
        <Route path="/dataanalysisb" component={DataAnalysisB} />
        <Route path="/dataanalysisc" component={DataAnalysisC} />
        <Route path="/dataanalysisd" component={DataAnalysisD} />
      </Route>
    </Route>
  </Router>
, document.getElementById('root'));





