import React, { useState } from 'react'
import BookItemComponent from './book-item/book-item.component';
import { useQuery } from '@apollo/client';
import { getBooks } from '../../../graphql-client/query';
function BookListComponent(props) {
    const {selectedBook} = props;
    const { loading, error, data } = useQuery(getBooks);
    if (loading) {
        return <p>Loading books...</p>
    }
    if (error) {
        return <p>Loading books...</p>
    }

    function handleClickBook(id) {
        selectedBook(id);
    }

    return (
        <div className="p-grid">
            {
                data.books.map(book => {
                    return (
                        <div className="p-col-4" key={book.id}>
                            <BookItemComponent handleClickBook = {handleClickBook}
                                book={book}
                            >
                            </BookItemComponent>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default BookListComponent