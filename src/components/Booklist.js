import React, { Component } from 'react';


class BookList extends Component {
    render() {
        return (
            <div className = 'book-list'>
                <ul>
                    <li>Pattern Recognition</li>
                    <li>Neuromancer</li>
                    <li>Agency</li>
                </ul>
            </div>
        )
    }
} 

export default BookList