//import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import TodoList from "./ToDo";

class App extends React.Component {

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
        this.setState({ tasks: response.data });
      }).catch(error => {
        this.setState({ errorMessage: error.message });
      });
  }

    render() {
        return (
            <div id="MainPage">
                <TodoList/>
        <ul>
            {
                this.state.tasks
                    .map(tasks =>
                        <li key={tasks.id}>{tasks.title}</li>)
            }
        </ul>
            </div>
        );
    }
}


export default App;