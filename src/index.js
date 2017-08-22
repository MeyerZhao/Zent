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
    import ShopMgmtA from './routes/2ShopMgmt/PageA';
        import ShopMgmtAFormA from './routes/2ShopMgmt/PageAFormA';
        import ShopMgmtAFormB from './routes/2ShopMgmt/PageAFormB';
        import ShopMgmtAFormC from './routes/2ShopMgmt/PageAFormC';

    import ShopMgmtB from './routes/2ShopMgmt/PageB';
    import ShopMgmtC from './routes/2ShopMgmt/PageC';
        import ShopMgmtCSubA from './routes/2ShopMgmt/PageCSubA';
        import ShopMgmtCSubB from './routes/2ShopMgmt/PageCSubB';
        import ShopMgmtCSubC from './routes/2ShopMgmt/PageCSubC';
        import ShopMgmtCSubD from './routes/2ShopMgmt/PageCSubD';
        import ShopMgmtCSubE from './routes/2ShopMgmt/PageCSubE';
        import ShopMgmtCSubF from './routes/2ShopMgmt/PageCSubF';

    import ShopMgmtD from './routes/2ShopMgmt/PageD';
        import ShopMgmtDFormA from './routes/2ShopMgmt/PageDFormA';

    import ShopMgmtE from './routes/2ShopMgmt/PageE';
        import ShopMgmtEFormA from './routes/2ShopMgmt/PageEFormA';

// 3商品管理
import GoodsMgmt from './routes/3GoodsMgmt/';
    import GoodsMgmtA from './routes/3GoodsMgmt/PageA';
    import GoodsMgmtB from './routes/3GoodsMgmt/PageB';
        import GoodsMgmtBFormA from './routes/3GoodsMgmt/PageBFormA';
        import GoodsMgmtBSubA from './routes/3GoodsMgmt/PageBSubA';
    import GoodsMgmtC from './routes/3GoodsMgmt/PageC';
        import GoodsMgmtCFormA from './routes/3GoodsMgmt/PageCFormA';

// 4订单管理
import OrderMgmt from './routes/4OrderMgmt/';
    import OrderMgmtA from './routes/4OrderMgmt/PageA';
        import OrderMgmtASubA from './routes/4OrderMgmt/PageASubA';
        import OrderMgmtASubB from './routes/4OrderMgmt/PageASubB';
    import OrderMgmtB from './routes/4OrderMgmt/PageB';
        import OrderMgmtBSubA from './routes/4OrderMgmt/PageBSubA';
    import OrderMgmtC from './routes/4OrderMgmt/PageC';
        import OrderMgmtCSubA from './routes/4OrderMgmt/PageCSubA';
    import OrderMgmtD from './routes/4OrderMgmt/PageD';
        import OrderMgmtDSubA from './routes/4OrderMgmt/PageDSubA';

// 5库存管理
import StockMgmt from './routes/5StockMgmt/';
    import StockMgmtA from './routes/5StockMgmt/PageA';
    import StockMgmtB from './routes/5StockMgmt/PageB';
    import StockMgmtC from './routes/5StockMgmt/PageC';
    import StockMgmtD from './routes/5StockMgmt/PageD';
        // import StockMgmtDCheck from './routes/5StockMgmt/PageDCheck';
    import StockMgmtE from './routes/5StockMgmt/PageE';
    import StockMgmtF from './routes/5StockMgmt/PageF';
        import StockMgmtFFormA from './routes/5StockMgmt/PageFFormA';

// 6客户管理
import CustomerMgmt from './routes/6CustomerMgmt/';
    import CustomerMgmtA from './routes/6CustomerMgmt/PageA';
    import CustomerMgmtB from './routes/6CustomerMgmt/PageB';
    import CustomerMgmtC from './routes/6CustomerMgmt/PageC';

// 7资产管理
import AssetsMgmt from './routes/7AssetsMgmt/';
    import AssetsMgmtA from './routes/7AssetsMgmt/PageA';
    import AssetsMgmtB from './routes/7AssetsMgmt/PageB';
        import AssetsMgmtBFormA from './routes/7AssetsMgmt/PageBFormA';
        import AssetsMgmtBFormB from './routes/7AssetsMgmt/PageBFormB';
        import AssetsMgmtBFormC from './routes/7AssetsMgmt/PageBFormC';
        import AssetsMgmtBFormD from './routes/7AssetsMgmt/PageBFormD';

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
        <IndexRoute component={ShopMgmtA} />
        <Route path="/shopmgmt/shopmgmta" component={ShopMgmtA} />
            <Route path="/shopmgmt/shopmgmta/shopmgmtaforma" component={ShopMgmtAFormA} />
            <Route path="/shopmgmt/shopmgmta/shopmgmtaformb" component={ShopMgmtAFormB} />
            <Route path="/shopmgmt/shopmgmta/shopmgmtaformc" component={ShopMgmtAFormC} />

        <Route path="/shopmgmt/shopmgmtb" component={ShopMgmtB} />
        <Route path="/shopmgmt/shopmgmtc" component={ShopMgmtC} />
            <Route path="/shopmgmt/shopmgmtcsuba" component={ShopMgmtCSubA} />
            <Route path="/shopmgmt/shopmgmtcsubb" component={ShopMgmtCSubB} />
            <Route path="/shopmgmt/shopmgmtcsubc" component={ShopMgmtCSubC} />
            <Route path="/shopmgmt/shopmgmtcsubd" component={ShopMgmtCSubD} />
            <Route path="/shopmgmt/shopmgmtcsube" component={ShopMgmtCSubE} />
            <Route path="/shopmgmt/shopmgmtcsubf" component={ShopMgmtCSubF} />

        <Route path="/shopmgmt/shopmgmtd" component={ShopMgmtD} />
                <Route path="/shopmgmt/shopmgmtdforma" component={ShopMgmtDFormA} />
        <Route path="/shopmgmt/shopmgmte" component={ShopMgmtE} />
                <Route path="/shopmgmt/shopmgmteforma" component={ShopMgmtEFormA} />
      </Route>

      <Route path="/goodsmgmt" component={GoodsMgmt}>
        <IndexRoute component={GoodsMgmtA} />
        <Route path="/goodsmgmta" component={GoodsMgmtA} />
        <Route path="/goodsmgmtb" component={GoodsMgmtB} />
            <Route path="/goodsmgmtb/goodsmgmtbforma" component={GoodsMgmtBFormA} />
            <Route path="/goodsmgmtb/goodsmgmtbsuba" component={GoodsMgmtBSubA} />
        <Route path="/goodsmgmtc" component={GoodsMgmtC} />
            <Route path="/goodsmgmtc/goodsmgmtcforma" component={GoodsMgmtCFormA} />
      </Route>

      <Route path="/ordermgmt" component={OrderMgmt}>
        <IndexRoute component={OrderMgmtA} />
        <Route path='/ordermgmta' component={OrderMgmtA} />
            <Route path='/ordermgmta/ordermgmtasuba' component={OrderMgmtASubA} />
            <Route path='/ordermgmta/ordermgmtasubb' component={OrderMgmtASubB} />
        <Route path='/ordermgmtb' component={OrderMgmtB} />
            <Route path='/ordermgmtb/ordermgmtbsuba' component={OrderMgmtBSubA} />
        <Route path='/ordermgmtc' component={OrderMgmtC} />
            <Route path='/ordermgmtc/ordermgmtcsuba' component={OrderMgmtCSubA} />
        <Route path='/ordermgmtd' component={OrderMgmtD} />
            <Route path='/ordermgmtd/ordermgmtdsuba' component={OrderMgmtDSubA} />
      </Route>

      <Route path="/stockmgmt" component={StockMgmt}>
        <IndexRoute component={StockMgmtA} />
        <Route path='/stockmgmta' component={StockMgmtA} />
        <Route path='/stockmgmtb' component={StockMgmtB} />
        <Route path='/stockmgmtc' component={StockMgmtC} />
        <Route path='/stockmgmtd' component={StockMgmtD} />
        <Route path='/stockmgmte' component={StockMgmtE} />
        <Route path='/stockmgmtf' component={StockMgmtF} />
            <Route path='/stockmgmtf/stockmgmtfforma' component={StockMgmtFFormA} />

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
            <Route path="/assetsmgmtb/assetsmgmtbforma" component={AssetsMgmtBFormA} />
            <Route path="/assetsmgmtb/assetsmgmtbformb" component={AssetsMgmtBFormB} />
            <Route path="/assetsmgmtb/assetsmgmtbformc" component={AssetsMgmtBFormC} />
            <Route path="/assetsmgmtb/assetsmgmtbformd" component={AssetsMgmtBFormD} />
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





