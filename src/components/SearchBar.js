import React from 'react';

// const onInputChange = (event) => {
//     console.log(event.target.value);
// }


class SearchBar extends React.Component{
    // // eslint-disable-next-line no-useless-constructor
    // constructor(props){
    //     super(props);
    // }
        
        state = {term: ''}
        onSubmitData = (e) =>{
            e.preventDefault();
            this.props.onSubmitData(this.state.term);
        }
        
        render(){
            return(
                <div className='ui segment'>
                <form onSubmit={this.onSubmitData}>
                    <div className='ui form field'>
                        <label className='ui label'>Image Search</label>
                        <input type='text' value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar;