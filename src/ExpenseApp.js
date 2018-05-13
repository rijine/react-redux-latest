import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

export const ExpenseDashboardPage = () => <div>Dashboard Page</div>;
export const AddExpensePage = () => <div>Add Expense Page</div>;
export const HelpPage = () => <div>Helps Page</div>;
export const PageNotFound = () => (
  <div>
    404 Page Not Found
    <Link to="/">Go Home</Link>
  </div>
);

export const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
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
