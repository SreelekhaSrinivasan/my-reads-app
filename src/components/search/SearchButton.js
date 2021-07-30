import React from 'react';
import '../../App.css';

export default class SearchButton extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="open-search">
              <a onClick={() => this.props.updateSearchPageState(true)}>Add a book</a>
            </div>
        )
    }
}
