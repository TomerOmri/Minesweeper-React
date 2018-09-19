import React from 'react';
import { Jumbotron, Button, Input, Row, Col } from 'reactstrap';

export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            boardHeight: 10,
            boardWidth: 10,
            boardMines: 10
        };

        this.setNewGame = this.setNewGame.bind(this);
        this.setSuperMan = this.setSuperMan.bind(this);
    }

    setNewGame(){
        let gameSettings = { boardHeight: parseInt(document.getElementById('heightInput').value), boardWidth: parseInt(document.getElementById('widthInput').value), boardMines: parseInt(document.getElementById('minesInput').value)}
        this.props.newGameHandler(gameSettings);
        this.setState({ gameSettings });
        this.props.initFlags();
    }

    setSuperMan(){
        this.props.handlerSupermanModeClick(document.getElementById('superManMode').checked);
    }
    

render() {
    return(
        <div>
        <Jumbotron>
        <h1 className="display-3">Welcome to Minesweeper game !</h1>
        <div className="instructions">You are presented with a board of squares. Some squares contain mines (bombs), others don't. <br />
        If you click on a square containing a bomb, you lose. <br /> If you manage to click all the squares (without clicking on any bombs) you win. <br /> Mark with flags the bombs (shift+click)

        </div>
        <div className="lead">Cheers, Tomer</div>
        <hr />
        <div> 
            <Row>
                <Col xs="4"><span> Width: <input id='widthInput' defaultValue={this.state.boardHeight} /> </span></Col>
                <Col xs="4"><span> Height: <input id='heightInput' defaultValue={this.state.boardWidth} /> </span></Col>
                <Col xs="4"><span> Mines: <input id='minesInput' defaultValue={this.state.boardMines} /> </span></Col>
            </Row>
        </div>
          
        <div className="newGameBtn" style={{margin: '15px'}}>
          <Button onClick={this.setNewGame} color="primary"> New Game </Button>
        </div>

        <div>
            <Input onClick={this.setSuperMan} id="superManMode" type="checkbox" /> Superman Mode </div>
        <div>

        <div style={{marginTop: '5px'}}> Flags left: {this.props.boardFlags}  </div>
        </div>
      </Jumbotron>
    </div>

        
    )
}


}