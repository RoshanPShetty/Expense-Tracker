import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Food",
      amount: 250.0,
      date: new Date(2021, 12, 11),
    },
    {
      id: 1,
      title: "Rent",
      amount: 575.0,
      date: new Date(2021, 12, 1),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
