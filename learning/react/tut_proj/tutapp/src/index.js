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
    this.victor = null;
    this.curr_i = 0;
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      history: [Array(9).fill(null)],
    };
  }

  checkVictory(){
    let count = 0;
    for (let i of this.state.squares){
      if(i != null){
        count++;
      };
    };

    if(count === this.state.squares.length){
      this.victor = victory(this.state.squares);
    }else{
      console.log("Not finished")
    }

  }

  handleClick(i){
    /* Note how in handleClick, we call .slice() 
     to create a copy of the squares array to 
     modify instead of modifying the existing 
     array. We will explain why we create a 
     copy of the squares array in the next section.
    */

    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    console.log(squares)
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
    this.state.history.push(squares);
    this.curr_i++; 

  }

  back(){
    this.setState({
      squares: this.state.history[this.curr_i - 1],
    });
    if(this.curr != 0){
      this.curr_i--;
    };
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
    // Check if board filled
    this.victor = victory(this.state.squares);
    let status = "";
    if (this.victor != null) {
      status = "The victor is " + this.victor;
    }else{
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

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
        <div className="history" id="Back" onClick={() => this.back()}>{"Back"}</div>
        <div className="history" id="Forward">{"Forward"}</div>
        

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

function victory(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares [a] 
      === squares[c]
      ){
        return squares[a];
      };
  }
  return null;
}

// ======================================== //

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
