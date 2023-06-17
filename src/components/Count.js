import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, updateStatusTodo, updateTodo } from '../actions/countActions';
import { useState } from 'react';
import "../App.css"

function Count() {
    const [todoInput, setTodoInput] = useState({})
    const todo = useSelector(state => state.todos)
    const [isEditing, setIsEditing] = useState(false)
    const [todoEdit, setTodoEdit] = useState({})
    const [isDone, setIsDone] = useState(false)

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTodoInput(e.target.value)
    }

    const handleEdit = () => {
        setIsEditing(!isEditing)
    }
    const submitTodo = () => {
        dispatch(addTodo({
            id: todo.length ? todo[todo.length - 1].id + 1 : 1,
            name: todoInput,
            done: isDone
        }))
    }

    const handleSave = (data) => {
        dispatch(updateTodo({
            id: data.id,
            name: todoEdit,
            done: isDone
        }))
        setIsEditing(!isEditing)
    }

    const handleChangeEdit = (e) => {
        setTodoEdit(e.target.value)
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    const handleChangeDone = (data) => {
        dispatch(updateStatusTodo({
            id: data.id,
            name: data.name,
            done: !data.done
        }))
    }

    const handleDone = () => {
        setIsDone(!isDone)
    }
    return (
        <>
            <h1>Todo List</h1>
            <input type='text' className='form-control' placeholder='Việc cần làm' onChange={(e) => handleChange(e)} />
            <input type='checkbox' onChange={handleDone} />
            <label>Cong viec da hoan thanh</label> <br />
            <button type='button' onClick={submitTodo} className='btn btn-primary'>Submit</button>
            <table id="customers" className='text-center'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Việc cần làm</th>
                        <th>Actions</th>
                        <th>Done</th>
                    </tr>
                </thead>
                {todo.map((item, index) => {
                    return (
                        <tbody>
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td
                                    style={{ textDecoration: item.done ? "line-through" : "none" }}

                                >{isEditing ?
                                    <input type='text' placeholder={item.name} onChange={(e) => handleChangeEdit(e)} />

                                    : item.name}</td>
                                <td><button className='btn btn-danger me-2' onClick={() => handleDelete(item.id)}>Xóa</button>

                                    {isEditing ? <button className='btn btn-success' onClick={() => handleSave(item)}>Save</button> :
                                        <button className='btn btn-secondary' onClick={() => handleEdit()}>Edit</button>
                                    }
                                </td>
                                <td><input type='checkbox' checked={item.done} onChange={() => handleChangeDone(item)} />
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </>
    )
}

export default Count