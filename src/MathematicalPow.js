import React, {Component} from 'react';
import "./MathematicalPow.css"
import {Motion, spring} from 'react-motion';

class MathematicalPow extends Component {
    constructor(props) {
        super(props);
        this.state={
            variable:5
        }
    }
    solveMultiplying=()=>{
    }
    render() {
        let variable1="name";
        const variable2=2;
        const variable5=2;
        const variable3=true;
        const solveAdding=()=>{
            return variable2+variable5
        }
        let changeVariable=()=>{
            variable1="Aziz"
        }
        let changeStateVariable=()=>{
            this.state.variable++;
            this.setState(this.state)
        }
        return (
            <div>
               <div> {this.state.variable}</div>
               <div> {variable1}</div>
                <button onClick={changeStateVariable}>changeState</button>
                <button onClick={changeVariable}>change variable not state</button>
                {/*<ReactWOW animation='fadeIn'><div className="circle"></div></ReactWOW>*/}
                <Motion
                    defaultStyle={{
                        translateX: 0,
                        opacity: 0
                    }}
                    style={{
                        translateX: spring(200),
                        opacity: spring(1)
                    }}
                >
                    {(interpolatedStyles) => (
                        <div
                            style={{
                                transform: `translateY(${interpolatedStyles.translateX}px)`,
                                opacity: `${interpolatedStyles.opacity}`
                            }}
                            className="circle"
                        ></div>
                    )}
                </Motion>
            </div>
        );
    }
}
export default MathematicalPow;