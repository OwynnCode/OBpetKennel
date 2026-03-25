import React, { Component } from 'react';

class ChildComponent extends Component {
  render() {
    const { id, name, image, status, onAction } = this.props;

    return (
      <div 
        className="child-card"
        style={{
          border: "2px solid #ccc",
          borderRadius: "10px",
          padding: "15px",
          textAlign: "center",
          width: "200px"
        }}
      >
        <h2>{name}</h2>

        <img 
          src={image} 
          alt={name} 
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />

        <p>{status}</p>

        <button 
          onClick={() => onAction(id)}
          style={{
            marginTop: "10px",
            padding: "8px 12px",
            cursor: "pointer"
          }}
        >
          Feed
        </button>
      </div>
    );
  }
}

export default ChildComponent;