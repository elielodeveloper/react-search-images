import React from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {images: []};
  }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos',{
      params: {query: term }
    });

    console.log(response.data.results);
    this.setState({images: response.data.results});
  }

  render(){
    return (
      <div style={{margin: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;