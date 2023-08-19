import Expenses from "./componets/Expenses/Expenses";

function App() {
  const ExpensesData = [
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
      <Expenses expensesData={ExpensesData}/>
    </div>
  );
}

export default App;
