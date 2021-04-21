import React from 'react';
import { Card } from 'primereact/card';
import './book-item.component.css';
function BookItemComponent(props) {
    const {book, handleClickBook} = props;
    const {name, genre} = book;

    function selectedBook (id) {
        handleClickBook(id)
    }
    return (
        <Card className="bookitem">
            <div onClick={() => selectedBook(book.id)}>
                <h4>{name}</h4>
                <h5>{genre}</h5>
            </div>
        </Card>
    )
}

export default BookItemComponent;
