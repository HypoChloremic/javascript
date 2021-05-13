import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// class Square extends React.Component {
//     constructor(props){
//       super(props);
//       this.state = {
//         value: "u",
//       };
//     }

//     render() {
//       return (
//         <button 
//           className="square" 
//           onClick = {() => this.props.onClick()}
//         >
//           {this.props.value}
//         </button>
//       );
//     }
//   }


// class Square2 extends Square {
//   constructor (props){
//     super(props)
    
//   }
// }


function Square(props){
  return (
    <button
      className="square"
      onClick={props.onClick} // no this.props for obivious reasons
    >
      {props.value}
    </button>
  );
}


  
class Board extends React.Component {
  
  constructor(props){
    super(props);
    this.clickState = 0;
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i){
    // Note how in handleClick, we call .slice() 
    // to create a copy of the squares array to 
    // modify instead of modifying the existing 
    // array. We will explain why we create a 
    // copy of the squares array in the next section.

    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    console.log(squares)
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,

    });
  }

  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]} 
        clickState = {this.clickState}
        onClick = {() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div 
        onClick={() => {
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
