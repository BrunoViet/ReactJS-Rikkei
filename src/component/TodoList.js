import React from "react";
import TodoItem from "./TodoItem";
import '../App.css'
class TodoList extends React.Component {
    render() {
        const { todoList, onUpdateTodo, onDeleteTodo } = this.props;

        return (
            <>
                <table id="customers">
                    <tr>
                        <th>Đã xong</th>
                        <th>Công việc cần làm</th>
                        <th>Action</th>
                    </tr>

                    {todoList.map((todo, index) => (
                        <>
                            <tr>
                                <TodoItem
                                    key={index}
                                    todo={todo}
                                    onUpdate={(updatedTodo) => onUpdateTodo(index, updatedTodo)}
                                    onDelete={() => onDeleteTodo(index)}
                                />
                            </tr>
                        </>
                    ))}
                </table>
            </>
        );
    }
}

export default TodoList;
