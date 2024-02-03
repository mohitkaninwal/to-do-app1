import ToDoItem from "./ToDoItem";

const ToDoItems = ({ todoItems , onDeleteClick }) => {
  return (
    <div className="items-container">
        {todoItems.map(item => <ToDoItem todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick} />)}

    </div>
  );
};

export default ToDoItems;
