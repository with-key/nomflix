import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "./Header.js";
import Detail from "../Routes/Detail";

export default () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      <Route path="/detail" component={Detail} />
      <Route path="/">Not Found</Route>
    </Switch>
  </BrowserRouter>
);
