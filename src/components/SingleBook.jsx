import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  /* state = {
    selected: false
  }; */
  render() {
    return (
      <>
        <Card
        onClick={() =>
            this.props.setSelectedBook()
            }
          
          /*style={{ border: this.state.selected ? "3px solid red" : "none" }}*/
        >
          <Card.Img variant="top" src={this.props.book.img} style={{ objecyFit: "cover", aspectRatio: "1/1.5" }} />
          <Card.Body>
            <Card.Title style={{ color: "black" }} className="text-truncate">
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
