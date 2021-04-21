import React, { useEffect } from 'react'
import { Card } from 'primereact/card';
import { useQuery } from '@apollo/client';
import { getBook } from '../../../graphql-client/query';
function BookDetailComponent(props) {
    const {bookSelectedId} = props;
    const {loading, error, data} = useQuery(getBook, {variables: {
        id: bookSelectedId
    }});

    if (loading) {
        return <p>Loading book detail...</p>
    }

    if (bookSelectedId != null && error) {
        return <p>Loading book error...</p>
    }

    console.log('getbook:', data);

    return (
        <Card>
            <Card>
                <h3>Ky nghe lay Tay</h3>
                <p>Phong su</p>
                <p>Vu Trong Phung</p>
                <p>120</p>
            </Card>
            <br/>
            <Card>
                <h3>All books by this author</h3>
                <ul>
                    <ol>Ky nghe lay tay</ol>
                    <ol>So do</ol>
                </ul>
            </Card>
        </Card>
    )
}

export default  BookDetailComponent
