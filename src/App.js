import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import SearchBar from "./SearchBar";
import { robots } from './robots';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="app">
                <h1 className="app__title">RoboFriends</h1>
                <SearchBar searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;
