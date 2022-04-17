import React from 'react';
import {Row, Container, Card, Col} from 'react-bootstrap';
import axios from "axios";
class TodoList extends React.Component {
    state = {
        tasks: [],
        errorMessage: ''
    }

    componentDidMount() {
        this.getData();
    }

    //retrieve data from axios mock-database
    getData() {
        axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
            .then(response => {
                //makes list
                this.setState({ tasks: response.data });
            }).catch(error => {
            this.setState({ errorMessage: error.message });
        });
    }

    render() {
        return (

            <div>

        <Container fluid>
                <h1>Hello World</h1>
                <hr/>
                <a href={'true'}> Page 1 / </a>
                <a href={'true'}> Page 2 / </a>
                <a href={'true'}> Page 3 </a>
                <hr/>
            <Container>
                <Row>
                    <Col><h3>To Do</h3>
                        {
                            this.state.tasks.map(tasks => <p key={tasks.id}>{tasks.title} : { tasks.column}</p>)
                        }
                    </Col>
                    <Col><h3>In-progress</h3>
                            {
                                this.state.tasks
                                    .map(tasks =>
                                        <p key={tasks.id}>{tasks.title} : { tasks.column}</p>)
                            }
                    </Col>


                    { console.log(this.state.tasks[1]) }



                    <Col><h3>Review</h3> {

                        this.state.tasks
                            .map(tasks =>
                                <p key={tasks.id}>{tasks.title} : { tasks.column}</p>)
                    }</Col>
                    <Col><h3>Done</h3> {
                        this.state.tasks

                            .map(tasks =>
                                <p key={tasks.id}>{tasks.title} : { tasks.column}</p>)
                    }</Col>
                </Row>
            </Container>
        </Container>
            </div>

        );
    }
}

export default TodoList;