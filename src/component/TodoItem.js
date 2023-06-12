import React from "react";
import { ToastContainer, toast } from 'react-toastify';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            inputValue: props.todo,
            isChecked: false,
        };
    }

    handleEdit = () => {
        this.setState({ isEditing: true });
    };

    handleChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };

    handleSave = async () => {
        const { inputValue } = this.state;
        this.props.onUpdate(inputValue);
        await this.setState({ isEditing: false });
        toast.success("Change successfully")
    };

    handleCancel = () => {
        this.setState({ isEditing: false });
    };

    handleChange1 = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }
    render() {
        const { isEditing, inputValue } = this.state;
        const { todo, onDelete } = this.props;

        return (
            <>

                {isEditing ? (
                    <>
                        <td><input type="checkbox"
                            checked={this.state.isChecked}
                            onChange={this.handleChange1}
                        /></td>
                        <td>
                            <input type="text"
                                value={inputValue}
                                onChange={this.handleChange} />
                        </td>
                        <td>
                            <button onClick={this.handleSave} className="btn btn-success">Save</button>
                            <button onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
                        </td>
                    </>
                )

                    : (
                        <>
                            <td><input type="checkbox"
                                checked={this.state.isChecked}
                                onChange={this.handleChange1}
                            /></td>
                            <td style={this.state.isChecked == true ? { textDecoration: "line-through" } : {}}>
                                {todo}
                            </td>
                            <td>
                                <button onClick={this.handleEdit} className="btn btn-primary">Edit</button>
                                <button onClick={onDelete} className="btn btn-secondary">Delete</button>
                            </td>
                        </>
                    )}
            </>
        );
    }
}

export default TodoItem