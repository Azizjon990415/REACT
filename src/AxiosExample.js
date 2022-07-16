import React, {Component} from 'react';
const axios = require('axios').default;
class AxiosExample extends Component {
    constructor() {
        super();
        this.state={
            response:[]
        }
    }
    componentDidMount() {
        // Make a request for a user with a given ID
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then( (response)=> {
                // handle success
                console.log(response);
                this.setState({response:response.data})
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    render() {
        return (
            <div>
                {this.state.response.map(item=><div>{item.id+"  "+item.title}</div>)}
            </div>
        );
    }
}
export default AxiosExample;