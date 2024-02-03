import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "29/1/24",
    },
    {
      name: "Go to College",
      dueDate: "19/12/23",
    },
    {
      name: "Sleep",
      dueDate: "Now",
    }
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <ToDoItems  todoItems={todoItems} ></ToDoItems>
    </center>
  );
}

export default App;
