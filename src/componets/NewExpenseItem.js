import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function NewExpenseItem(props) {
  return (
    <div>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        <div>{props.amount}</div>
      </div>
    </div>
  );
}

export default NewExpenseItem;
