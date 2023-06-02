import React from "react";

class Child extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Sơn',
            status: false
        }
        console.log('constructor đã chạy')
    }

    componentWillMount() {
        console.log('componentWillMount đã chạy');
    }

    handleChange = () => {
        this.setState({
            name: this.state.name == 'Sơn' ? 'Tín' : 'Sơn'
        })
    }
    render() {
        console.log(this.state.name)
        const { age } = this.props
        console.log('app render đã chạy')
        return (
            <>
                <p>Name: {this.state.name}</p>
                <p>Age: {age}</p>
                <button onClick={this.handleChange}>Change state</button>
            </>
        )
    }

    componentDidMount() {
        console.log('componentDidMount đã chạy');
    }

    shouldComponentUpdate() {
        console.log("Child shouldComponentUpdate đã chạy");
        console.log(this.state.name)
        return true
    }

    componentWillUpdate() {
        console.log("child componentWillUpdate đã chạy");

    }

    componentDidUpdate() {
        console.log("child componentDidUpdate đã chạy");
        console.log(this.state.name)
    }
}
export default Child