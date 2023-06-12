import React from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      searchValue: '',
    };
  }

  handleAddTodo = (todo) => {
    const newTodoList = [...this.state.todoList, todo];
    this.setState({ todoList: newTodoList });
  };

  handleUpdateTodo = async (index, updatedTodo) => {
    const updatedTodoList = [...this.state.todoList];
    updatedTodoList[index] = updatedTodo;
    await this.setState({ todoList: updatedTodoList });
  };

  handleDeleteTodo = async (index) => {
    const updatedTodoList = this.state.todoList.filter((_, i) => i !== index);
    await this.setState({ todoList: updatedTodoList });
    toast.error("Delete successfully")
  };

  handleSearch = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  render() {

    const { todoList, searchValue } = this.state;
    const filteredTodoList = todoList.filter((todo) =>
      todo.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Todo List</h1>
        <TodoForm onAddTodo={this.handleAddTodo} />
        <input type="text" value={searchValue} onChange={this.handleSearch} placeholder="Tìm kiếm" />
        <TodoList
          todoList={filteredTodoList}
          onUpdateTodo={this.handleUpdateTodo}
          onDeleteTodo={this.handleDeleteTodo}
        />
        <ToastContainer />
      </div>
    );
  }
}



export default App;
