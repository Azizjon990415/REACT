import React, {Component} from 'react';
import axios from "axios";

class AxiosPostExapmle extends Component {
    AsadbekCool=()=>{
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'poo',
            body: 'bar',
            userId: 1,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <button onClick={this.AsadbekCool}>SAAAAAAAAAAAAVe datA!!!!</button>
            </div>
        );
    }
}

export default AxiosPostExapmle;