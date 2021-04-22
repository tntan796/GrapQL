import React, { useEffect } from 'react'
import { Card } from 'primereact/card';
import { useQuery } from '@apollo/client';
import { getBook } from '../../../graphql-client/query';
function BookDetailComponent(props) {
    const { bookSelectedId } = props;
    const { loading, error, data } = useQuery(getBook, {
        variables: {
            id: bookSelectedId
        },
        skip: bookSelectedId == null
    });

    if (loading) {
        return <p>Loading book detail...</p>
    }

    if (bookSelectedId != null && error) {
        return <p>Loading book error...</p>
    }

    const book = bookSelectedId != null ? data.book : null;

    return (
        <React.Fragment>
            {
                book == null ? <Card>Please selected Book</Card> :
                    <Card>
                        <Card>
                            <h3>{book.name}</h3>
                            <p>{book.genre}</p>
                            <p>{book.author.name}</p>
                            <p>{book.author.age}</p>
                        </Card>
                        <br />
                        <Card>
                            <h3>All books by this author</h3>
                            <ul>
                            {
                                book.author.books.map(b => (
                                    <ol key={b.id}>{b.name}</ol>
                                ))
                            }
                            </ul>
                        </Card>
                    </Card>

            }
        </React.Fragment>
    )
}

export default BookDetailComponent
