import React from "react";
import { ToastContainer, toast } from 'react-toastify';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    handleChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { inputValue } = this.state;
        if (inputValue.trim() !== '') {
            this.props.onAddTodo(inputValue);
            this.setState({ inputValue: '' });
            toast.warn("Add successfully")
        }

    };

    render() {
        const { inputValue } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={this.handleChange}
                    placeholder="Add a new task"
                />
                <button type="submit" className="btn btn-primary">Add</button>

            </form>
        );
    }
}

export default TodoForm
