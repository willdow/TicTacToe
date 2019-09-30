import React from 'react';
import css from "./square.css";


class Square extends React.Component {
    render() {
        return (
            <button 
                className={`square `+ this.props.value} 
                onClick={()=>this.props.onClick()}>
                    {this.props.value}
            </button>
        );
    }
}


export default Square;

