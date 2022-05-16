import { Component } from "react";
import "../css/Card.css";

class Card extends Component { 
    constructor(props) {
        super(props)
        this.border = {
            borderColor: this.props.data.color
        }
    }
    render() { 
        return (
            <div className="card" style={this.border}>
                <div className="border-top"></div>
                <p className="title">{this.props.data.title}</p>
                <p className="description">{this.props.data.description}</p>
                <div className="image-div">
                <img src={this.props.data.image} alt="Section logo" />
                </div>
            </div>
        );
    }
}
 
export default Card;