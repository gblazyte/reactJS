import React, { Component } from "react";

class BookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.book ? props.book.title : "",
            author: props.book ? props.book.author : "",
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    required
                />

                <label>Author:</label>
                <input
                    type="text"
                    name="author"
                    value={this.state.author}
                    onChange={this.handleChange}
                    required
                />

                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default BookForm;
