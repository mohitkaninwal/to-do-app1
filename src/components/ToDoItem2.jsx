function ToDoItem2() {
    let todoName='Go To College'
    let todoDate='19/12/23'
  return(
  <div className="container">
    <div className="row kg-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button kg-button" className="btn btn-danger kg-button">
          Delete
        </button>
      </div>
    </div>
  </div>
  )
}

export default ToDoItem2;
