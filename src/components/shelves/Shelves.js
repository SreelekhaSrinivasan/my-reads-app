import React from 'react';
import '../../App.css';
import Shelf from '../shelf/Shelf';

export default class Shelves extends React.Component {
  constructor(props){
    super(props);
  }
    render(){
      const allBooks = this.props.allBooks;
      // const currentlyReading = allBooks(book => book.shelf === "currentlyReading");
      const currentlyReading = allBooks.filter(book => book.shelf === "currentlyReading");
      const read = allBooks.filter(book => book.shelf === "read");
      const wantToRead = allBooks.filter(book => book.shelf === "wantToRead");
        return (
            <div className="list-books-content">
              <div>
                {/* Currently Reading */}
                <Shelf shelfTitle="Currently Reading" books={currentlyReading} changeBookShelf={this.props.changeBookShelf} /> 
                {/* Want To Read */}
                <Shelf shelfTitle="Want To Read" books={wantToRead} changeBookShelf={this.props.changeBookShelf} />
                {/* Read */}
                <Shelf shelfTitle="Read" books={read} changeBookShelf={this.props.changeBookShelf} />
              </div>
            </div>
        )
    }
}
