import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './styles.scss';

import ListItemsPage from './pages/ListItemsPage';
import CreateItemPage from './pages/CreateItemPage';
import EditItemPage from './pages/EditItemPage';
import Page404 from './pages/Page404';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/items" />
        </Route>

        <Route path="/items/edit/:id">
          <EditItemPage/>
        </Route>

        <Route path="/items/add">
          <CreateItemPage/>
        </Route>
    
        <Route path="/items">
          <ListItemsPage/>
        </Route>

        <Route path="*">
          <Page404/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;