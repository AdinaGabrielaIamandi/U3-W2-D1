import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBook: ""
  };

  setSelectedBook = (asin) => {
    this.setState({ selectedBook: asin });
  };

  render() {
    return (
      <Row>
        <Col xs={6} md={8}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Search a book</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search here"
                  value={this.state.searchQuery}
                  onChange={(e) => this.setState({ searchQuery: e.target.value })}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {this.props.books
              .filter((b) => b.title.toLowerCase().includes(this.state.searchQuery))
              .map((b) => {
                return (
                  <Col xs={12} md={6} lg={4} key={b.asin}>
                    <SingleBook book={b} selected={this.state.selected} setSelectedBook={this.setSelectedBook} />
                  </Col>
                );
              })}
          </Row>
        </Col>
        <Col xs={6} md={4}>
          <CommentArea asin={this.setSelectedBook} />
        </Col>
      </Row>
    );
  }
}

export default BookList;
