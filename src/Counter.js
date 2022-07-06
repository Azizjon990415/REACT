import React, {Component} from 'react';
import "./Counter.css"

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0,
            isCircle:true
        }
    }
    count=()=>{
        this.state.count++;
        this.setState(this.state)
    }
    changeCircleToRectangleViseversia=()=>{
        this.state.isCircle=!this.state.isCircle;
        this.setState(this.state)
    }
    render() {
        return (
            <div>
                <div className={this.state.isCircle?"circle":"rectangle"}>
                </div>
                <button onClick={this.changeCircleToRectangleViseversia}>{this.state.isCircle?"rectangle":"circle"}</button>
                <div>you have clicked button {this.state.count} times</div>
                <button onClick={this.count}>Click me!!!</button>
                <button> {"<"} </button>
                <button>{">"} </button>
            </div>
        );
    }
}

export default Counter;