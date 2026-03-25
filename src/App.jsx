import React, { Component } from 'react';
import ChildComponent from './childComponent';
import { initialData } from './data';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      characters: initialData
    };
  }

  handleUpdate = (id) => {
    const updatedCharacters = this.state.characters.map(char => {
      if (!id || char.id === id) {
        return {
          ...char,
          status: 'Happy!',
          image: char.happyImage
        };
      }

      return char;
    });

    this.setState({ characters: updatedCharacters });
  };

  handleUpdateAll = () => {
    this.handleUpdate();
  };

  render() {
    return (
      <div className="app-container" style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Welcome to the Pet Kennel!</h1>
        
        <button onClick={this.handleUpdateAll}>
          Feed All Pets
        </button>
        
        <div className="children-container" style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          {/* TODO: Map through your state characters here and render ChildComponents */}
          {this.state.characters.map(char => (
  <ChildComponent 
    key={char.id}
    id={char.id}
    name={char.name}
    image={char.image}
    status={char.status}
    onAction={this.handleUpdate}
  />
))}
        </div>
      </div>
    );
  }
}


export default App;
