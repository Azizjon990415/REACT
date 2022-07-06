import React, {Component} from 'react';

class MyComponent extends Component {
    constructor() {
        super();
        this.state={
            index:0,
            colors:["red","white","green","aqua","yellow","black"]
        }
    }
    changeColor=()=>{
        let elementById = document.getElementById("name");
        elementById.style.color="red"
    }
    changeIndex=()=>{
        this.state.index=parseInt(Math.random()*this.state.colors.length)
        this.setState(this.state)
    }
    render() {
        return (
            <div id="name" onClick={this.changeColor} style={{color:this.state.colors[this.state.index]}} onMouseEnter={this.changeIndex}>
                Abdulaziz
            </div>
        );
    }
}

export default MyComponent;