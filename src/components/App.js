import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component{
    state = {images: []};
    onSubmitFunction = async(term) => {
        const data = await unsplash.get('/search/photos', {
            params: {
                query: term
            }      
        })
        this.setState({images : data.data.results});
    }
    render(){
        return(
            <div className='ui container' style={{marginTop : '10px'}}> 
                <SearchBar onSubmitData = {this.onSubmitFunction} />
                <ImageList Images = {this.state.images} />
            </div>
        )
    }
}

export default App;