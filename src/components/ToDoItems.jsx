import ToDoItem from "./ToDoItem";

const ToDoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
        {todoItems.map(item => <ToDoItem todoDate={item.dueDate} todoName={item.name} />)}

    </div>
  );
};

export default ToDoItems;
