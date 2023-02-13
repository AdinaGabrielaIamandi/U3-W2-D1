import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <>
        <Card style={{ border: this.props.selected ? "3px solid red" : "none" }}>
          <Card.Img
            onClick={this.props.setSelected}
            variant="top"
            src={this.props.book.img}
            style={{ objecyFit: "cover", aspectRatio: "1/1.5" }}
          />
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
