import React from 'react';
import * as BooksAPI from './components/BooksAPI';
import './App.css';
import Shelves from './components/shelves/Shelves';
import Search from './components/search/Search';
import SearchButton from './components/search/SearchButton';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then(
      res =>{
        this.setState({
          books: res
        })
        console.log(this.state.books)
      } 
    )
  }

  updateSearchPageState = (searchPage) => {
    this.setState({
      showSearchPage: searchPage
    })
  }

  changeBookShelf = (book, shelf) => {
    this.setState({
      books: this.state.books.map(b =>{
        b.id = book.id ? (b.shelf = shelf) : b;
        return b;
      })
    });
  };


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search updateSearchPageState={this.updateSearchPageState} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
           <Shelves showSearchPage={this.state.showSearchPage} allBooks={this.state.books} changeBookShelf={this.changeBookShelf} />
           <SearchButton updateSearchPageState={this.updateSearchPageState} />
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp;