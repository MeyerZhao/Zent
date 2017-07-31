import React from 'react';
import ReactDOM from 'react-dom';
import 'zent/css/index.css';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './App'

import WorkBench from './routes/WorkBench/';
import ShopMgmt from './routes/ShopMgmt/';
    import ShopInfo from './routes/ShopMgmt/ShopInfo';
    import ShopInfoEdit from './routes/ShopMgmt/ShopInfoEdit';
    import ShopDecoration from './routes/ShopMgmt/ShopDecoration';
    import ShopSet from './routes/ShopMgmt/ShopSet';
    import Printer from './routes/ShopMgmt/Printer';
    import Administrators from './routes/ShopMgmt/Administrators';

import GoodsMgmt from './routes/GoodsMgmt/';
    import GoodsMgmtOne from './routes/GoodsMgmt/PageOne';
    import GoodsMgmtTwo from './routes/GoodsMgmt/PageTwo';
    import GoodsMgmtThree from './routes/GoodsMgmt/PageThree';

import OrderMgmt from './routes/OrderMgmt/';
import StockMgmt from './routes/StockMgmt/';
import AssetsMgmt from './routes/AssetsMgmt/';
import CustomerMgmt from './routes/CustomerMgmt/';
import Appplugin from './routes/Appplugin/';
import DataAnalysis from './routes/DataAnalysis/';



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

      <Route path="/ordermgmt" component={OrderMgmt}></Route>
      <Route path="/stockmgmt" component={StockMgmt}></Route>
      <Route path="/customermgmt" component={CustomerMgmt}></Route>
      <Route path="/assetsmgmt" component={AssetsMgmt}></Route>
      <Route path="/appplugin" component={Appplugin}></Route>
      <Route path="/dataanalysis" component={DataAnalysis}></Route>
    </Route>
  </Router>
, document.getElementById('root'));





