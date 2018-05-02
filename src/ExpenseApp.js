import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const ExpenseDashboardPage = () => <div>Dashboard Page</div>;
export const AddExpensePage = () => <div>Add Expense Page</div>;
export const PageNotFound = () => <div>404 Page Not Found</div>;

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={ExpenseDashboardPage} ></Route>
      <Route path="/create" component={AddExpensePage} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

/* import { Header } from './components/Header'; */

class ExpenseApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['a', 'b', 'c'],
      selectedOption: undefined
    };
  }

  render() {
    return <div>{routes}</div>;
  }
}

export default ExpenseApp;
