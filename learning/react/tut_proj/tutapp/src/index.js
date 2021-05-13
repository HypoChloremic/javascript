import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        value: "u",
      };
    }

    render() {
      return (
        <button 
          className="square" 
          onClick={() => {
            if (this.props.clickState === 0) {
              this.setState({value:'O'})
            } else {
              this.setState({value:'X'})
            }
            console.log("sdsd", this.props.clickState)
          }
        }
        >
          {this.state.value};
        </button>
      );
    }
  }
  
class Board extends React.Component {
  
  constructor(props){
    super(props);
    this.clickState = 0;
  }

  renderSquare(i) {
    return <Square value={i} clickState = {this.clickState}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div 
        onClick={() => {
            console.log(this.clickState);
            this.clickState = ((this.clickState + 1) % 2);
          }
        }
      >
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>

        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>

        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        
      </div>
    );
  }
}

class Game extends React.Component {

  constructor(props){
    super(props);
    this.clickState = 1;
  }

  render() {
    return (
      <div className="game" >
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div><Text /></div>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

class Text extends React.Component {
  render() {
    return (
      <h3> "Hello world" </h3>
    );
  }
}

// ======================================== //

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
