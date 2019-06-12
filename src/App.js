import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [
        { name: "Mage", votes: 0 },
        { name: "Archer", votes: 0 },
        { name: "Priest", votes: 0 },
        { name: "Warrior", votes: 0 },
        { name: "Paladin", votes: 0 },
        { name: "Assassin", votes: 0 },
        { name: "Barbarian", votes: 0 },
      ]
    };
  }

  vote = (i) => {
    console.log("Voting has occured", i);
    let c = [...this.state.classes];
    c[i].votes++;
    this.setState({classes: c});
  }

  render () {
    return (
      <div>
        <h1>Vote for Characters!</h1>
        <div className="content">
          {
            this.state.classes.map( (c, i) =>
              <div className="content1" key={i}> 
                <h4>
                  {c.name}
                </h4>
                <button onClick={this.vote.bind(this, i)}>
                  Likes: {c.votes}
                </button>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
