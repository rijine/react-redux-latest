import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

export const ExpenseDashboardPage = () => <div>Dashboard Page</div>;
export const AddExpensePage = () => <div>Add Expense Page</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route path="" component={ExpenseDashboardPage} ></Route>
      <Route path="/create" component={AddExpensePage} />
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
