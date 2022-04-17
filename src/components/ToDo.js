import React from 'react';
import {Row, Container, Card, Col} from 'react-bootstrap';
class TodoList extends React.Component {

    render() {

        return (
            <div>
            <head>
                <link rel="stylesheet"
                      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                      integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                      crossOrigin="anonymous"/>
            </head>

        <Container fluid>
                <h1>Hello World</h1>
                <hr/>
                <a href={'true'}> Page 1 / </a>
                <a href={'true'}> Page 2 / </a>
                <a href={'true'}> Page 3 </a>
                <hr/>
            <Container>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </Container>
            </div>
        );
    }
}

export default TodoList;