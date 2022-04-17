//import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import TodoList from "./ToDo";

class App extends React.Component {

    render() {
        return (
            <div id="MainPage">
                <TodoList/>
            </div>
        );
    }
}


export default App;