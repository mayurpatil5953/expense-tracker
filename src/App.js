import ExpenseItem from "./componets/ExpenseItem";

function App() {
  const expensesData = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expensesData[0].title}
        amount={expensesData[0].amount}
        date={expensesData[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expensesData[1].title}
        amount={expensesData[1].amount}
        date={expensesData[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expensesData[2].title}
        amount={expensesData[2].amount}
        date={expensesData[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expensesData[3].title}
        amount={expensesData[3].amount}
        date={expensesData[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
