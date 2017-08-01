import React from 'react';
import ReactDOM from 'react-dom';
import 'zent/css/index.css';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './App'

import WorkBench from './routes/1WorkBench/';
import ShopMgmt from './routes/2ShopMgmt/';
    import ShopInfo from './routes/2ShopMgmt/ShopInfo';
    import ShopInfoEdit from './routes/2ShopMgmt/ShopInfoEdit';
    import ShopDecoration from './routes/2ShopMgmt/ShopDecoration';
    import ShopSet from './routes/2ShopMgmt/ShopSet';
    import Printer from './routes/2ShopMgmt/Printer';
    import Administrators from './routes/2ShopMgmt/Administrators';

import GoodsMgmt from './routes/3GoodsMgmt/';
    import GoodsMgmtOne from './routes/3GoodsMgmt/PageOne';
    import GoodsMgmtTwo from './routes/3GoodsMgmt/PageTwo';
    import GoodsMgmtThree from './routes/3GoodsMgmt/PageThree';

import OrderMgmt from './routes/4OrderMgmt/';
    import OrderMgmtA from './routes/4OrderMgmt/PageA.js';
    import OrderMgmtB from './routes/4OrderMgmt/PageB.js';
    import OrderMgmtC from './routes/4OrderMgmt/PageC.js';
    import OrderMgmtD from './routes/4OrderMgmt/PageD.js';

import AssetsMgmt from './routes/5AssetsMgmt/';
import CustomerMgmt from './routes/6CustomerMgmt/';
import StockMgmt from './routes/7StockMgmt/';
import Appplugin from './routes/8Appplugin/';
import DataAnalysis from './routes/9DataAnalysis/';



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
        <Route path="/goodsmgmtone" component={GoodsMgmtOne} />
        <Route path="/goodsmgmttwo" component={GoodsMgmtTwo} />
        <Route path="/goodsmgmtthree" component={GoodsMgmtThree} />

      </Route>

      <Route path="/ordermgmt" component={OrderMgmt}>
        <Route path='/ordermgmta' component={OrderMgmtA} />
        <Route path='/ordermgmtb' component={OrderMgmtB} />
        <Route path='/ordermgmtc' component={OrderMgmtC} />
        <Route path='/ordermgmtd' component={OrderMgmtD} />
      </Route>
      <Route path="/stockmgmt" component={StockMgmt}></Route>
      <Route path="/customermgmt" component={CustomerMgmt}></Route>
      <Route path="/assetsmgmt" component={AssetsMgmt}></Route>
      <Route path="/appplugin" component={Appplugin}></Route>
      <Route path="/dataanalysis" component={DataAnalysis}></Route>
    </Route>
  </Router>
, document.getElementById('root'));





