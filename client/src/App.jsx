import Navbar from "./components/Navbar/Navbar";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import ExpenseItem from "./components/Expenseitem/Expenseitem";
import ExpenseSummary from "./components/ExpenseSummary/ExpenseSummary";

import "./App.css"

const App = () => {
  return(
    <>
    <Navbar/>
    <ExpenseForm/>
    <ExpenseSummary/>
    <ExpenseList/>
    <ExpenseItem/>
    </>
  )
}

export default App;