import React, {Component} from 'react';

class FindBigger extends Component {
    constructor(props) {
        super(props);
        this.state={
            firstNumber:0,
            secondNumber:0,
            thirdNumber:0,
            biggest:0,
        }
    }
    setNumber=(e)=>{
        this.state[e.target.name]=Number(e.target.value)
        this.setState(this.state)
        this.findBiggest()
    }
    findBiggest=()=>{
        if (this.state.firstNumber>this.state.secondNumber&&this.state.firstNumber>this.state.thirdNumber){
            this.setState({biggest:this.state.firstNumber})
        }
        if (this.state.secondNumber>this.state.firstNumber&&this.state.secondNumber>this.state.thirdNumber){
            this.setState({biggest:this.state.secondNumber})
        }
        if (this.state.thirdNumber>this.state.firstNumber&&this.state.thirdNumber>this.state.secondNumber) {
            this.setState({biggest:this.state.thirdNumber})
        }
    }
    render() {
        return (
            <div>
                <div>first number {this.state.firstNumber}</div>
                <div>first number {this.state.secondNumber}</div>
                <div>first number {this.state.thirdNumber}</div>
                <div>biggest number {this.state.biggest}</div>

                <input type="number" name={"firstNumber"} onChange={this.setNumber}/>
                <input type="number" name={"secondNumber"} onChange={this.setNumber}/>
                <input type="number" name={"thirdNumber"} onChange={this.setNumber}/>

            </div>
        );
    }
}

export default FindBigger;