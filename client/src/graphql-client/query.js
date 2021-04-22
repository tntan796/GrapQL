import { gql } from '@apollo/client';

const getBooks = gql`
  query GetBooks {
    books {
    id
    name
    genre
  }
  }`;

  const getBook = gql`
  query GetBook ($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }`;

export {getBooks, getBook}