import React, {Component} from 'react';
import axios from "axios";

class BookComponent extends Component {
    constructor() {
        super();
        this.state = {
            newBook: {},
            books: [],
            editingBook:undefined
        }
    }

    componentDidMount() {
        this.getBooks()
    }

    getBooks = () => {
        axios.get("http://localhost/api/book")
            .then(response => {
                this.state.books = response.data._embedded.list
                this.setState(this.state)
                console.log(response)
            })
    }
    setBookProperties = (e) => {
        this.state.newBook[e.target.name] = e.target.value
        console.log(this.state.newBook)
        this.setState(this.state)
    }
    setUpdatingBookProperties = (e) => {
        this.state.editingBook[e.target.name] = e.target.value
        console.log(this.state.editingBook)
        this.setState(this.state)
    }
    saveBook = () => {
        axios.post("http://localhost/api/book", this.state.newBook).then(result => {
            alert("Book saved")
            this.getBooks()
            console.log(result)
        }).catch(result => {
            alert("somehing wrong")
            console.log(result)
        })
    }
    updateBook = () => {
        axios.put("http://localhost/api/book/"+ this.state.editingBook.id, this.state.editingBook).then(result => {
            alert("Book saved")
            this.getBooks()
            console.log(result)
        }).catch(result => {
            alert("somehing wrong")
            console.log(result)
        })
    }
    deleteBook = (id) => {
        axios.delete("http://localhost/api/book/" + id)
            .then(response => {
                alert("book deleted")
                this.getBooks()
            }).catch(response => {
            alert("something Error")
            console.log(response)
        })
    }
    setUpdateBookObject=(updatingBook)=>{
        this.setState({editingBook:updatingBook})
    }
    render() {
        return (
            <div>
                create book
                <input type="text" name={"nameUz"} onChange={this.setBookProperties}/>
                <input type="text" name={"nameKr"} onChange={this.setBookProperties}/>
                <button onClick={this.saveBook}>Save book</button>
                <div>
                    {this.state.books.map(book => <div>
                        <span>{book.id}</span>{book.nameKr} {book.nameUz}
                        <button onClick={()=>this.deleteBook(book.id)}>Delete book</button>
                        <button onClick={()=>this.setUpdateBookObject(book)}>update book</button>
                    </div>)}
                </div>
                {this.state.editingBook?<div>
                    <input type="text" name={"nameUz"} onChange={this.setUpdatingBookProperties} defaultValue={this.state.editingBook.nameUz}/>
                    <input type="text" name={"nameKr"} onChange={this.setUpdatingBookProperties} defaultValue={this.state.editingBook.nameKr}/>
                    <button onClick={this.updateBook}>Update book</button>
                    <button onClick={()=>this.setUpdateBookObject(undefined)}>Cancel</button>
                </div>:""}
            </div>
        );
    }
}

export default BookComponent;