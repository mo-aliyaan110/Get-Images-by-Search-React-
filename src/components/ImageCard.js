import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.imgref = React.createRef();
    }
    componentDidMount(){
        this.imgref.current.addEventListener('load', this.setSpans);
        
    }
    setSpans = () => {
        console.log(this.imgref.current.clientHeight)
    }
    render(){
        return(
            <div>
                <img ref={this.imgref} src={this.props.Images.urls.small} alt={this.props.Images.description}/>
            </div>
        )
    }
}

export default ImageCard;