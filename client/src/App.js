import AddAuthorComponent from "./components/author/add-author.component";
import './App.css';
import AddBookComponent from './components/book/add-book/add-book.component';
import BookListComponent from "./components/book/book-list/book-list.component";
import BookDetailComponent from "./components/book/book-detail/book-detail.component";

import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';
import { useEffect, useState } from "react";

import { getBook} from './graphql-client/query';
const client = new ApolloClient({
  uri: 'http://localhost:7777/graphql',
  cache: new InMemoryCache()
});

function App() {

  const [bookSelectedId, setBookSelectedId] = useState(null);

  function selectedBook(id) {
    handleGetBookDetail(id);
  }

  function handleGetBookDetail(id) {
      setBookSelectedId(id);
  }

  return (
    <ApolloProvider client={client}>
      <div className="layout-content-container">
        <div className="p-grid">
          <div className="p-col-6">
            <AddBookComponent></AddBookComponent>
          </div>
          <div className="p-col-6">
            <AddAuthorComponent></AddAuthorComponent>
          </div>
          <div className="p-col-12">
            <div className="p-grid">
              <div className="p-col-8">
                <BookListComponent selectedBook = {selectedBook}></BookListComponent>
              </div>
              <div className="p-col-4">
                <BookDetailComponent bookSelectedId = {bookSelectedId}></BookDetailComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
