import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }
    count=()=>{
        this.state.count++;
        this.setState(this.state)
    }
    render() {
        return (
            <div>
                <div>you have clicked button {this.state.count} times</div>
                <button onClick={this.count}>Click me!!!</button>
                <button> {"<"} </button>
                <button>{">"} </button>
            </div>
        );
    }
}

export default Counter;