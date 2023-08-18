// import NewExpenseItem from "./componets/NewExpenseItem";
import NewExpenseItem from "./componets/NewExpenseItem";

function App() {
  const newExpensesData = [
    {
      id: "e1",
      title: "Milk",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New Gyser",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Air Cooler",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Royal Enfield Himalayan",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpenseItem
        title={newExpensesData[0].title}
        amount={newExpensesData[0].amount}
        date={newExpensesData[0].date}
      ></NewExpenseItem>
      <NewExpenseItem
        title={newExpensesData[1].title}
        amount={newExpensesData[1].amount}
        date={newExpensesData[1].date}
      ></NewExpenseItem>
      <NewExpenseItem
        title={newExpensesData[2].title}
        amount={newExpensesData[2].amount}
        date={newExpensesData[2].date}
      ></NewExpenseItem>
      <NewExpenseItem
        title={newExpensesData[3].title}
        amount={newExpensesData[3].amount}
        date={newExpensesData[3].date}
      ></NewExpenseItem>
    </div>
  );
}

export default App;
