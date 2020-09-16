import React from 'react';
import './App.css'
// import Navbar from ".../Navbar"
// import './style.css'
// import { array } from 'prop-types';

let players = [];


class PlayersList extends React.Component 
{    
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
//  Tried event.target.value
            player1: '',
            player2: '',
            player3: '',
            player4: '',
            holes: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, "Out", 10, 11, 12, 13, 14, 15, 16, 17, 18, "In", "Total"]
        };
    }
// this handle change sets players array to local storage.
    handleChange(event) {
        let obj = this.state; obj[event.target.name] = event.target.value;
        let players = [obj];
        this.setState(obj);
        console.log(players)
        localStorage.setItem('players', JSON.stringify(players));
    }
    
    // onClick for "OK button" -- Want to set Scorecard to visible
    // this.players set from local storage 
    handleSubmit = event => {
        event.preventDefault();
        console.log("OK was clicked but Scorecard did not show");
        let players = JSON.parse(localStorage.getItem('players'));
        console.log(players)
        
        //show Scorecard 
        // this.render(<Scorecard />)
    }

    render() {
        return (
            <div>
                <h1> Please Enter Each Players Name </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Player 1:
                    <input className="textInput1" type="text" name="player1" value1={this.state.text}
                            // onSubmit={(player1Text) => this.setState({this.state.value})}
                            onSubmit={this.handleSubmit}
                            onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>
                        Player 2:
                    <input className="textInput2" type="text" name="player2" value2={this.state.text}
                            // onSubmit={(player2Text) => this.setState({player2})}
                            onSubmit={this.handleSubmit}
                            onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>
                        Player 3:
                    <input className="textInput3" type="text" name="player3" value3={this.state.text}
                            // onSubmit={(player3Text) => this.setState({player3})}
                            onSubmit={this.handleSubmit}
                            onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>
                        Player 4:
                    <input className="textInput4" type="text" name="player4" value4={this.state.text}
                            // onSubmit={(player4Text) => this.setState({player4})}
                            onSubmit={this.handleSubmit}
                            onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <input type="submit" value="OK" />
                </form>
                {/* <Scorecard players={this.state} /> */}
            
            <div className="scorecard">
                <div className="header">
                <h1>Scorecard Appears Here with onClick </h1>
                </div>
                <div className="scorecardGrid">
                        <div className="columnOne">
                            <div className="rowOne">Hole</div>
                            <p className="rowTwo">Par</p>
                            <input className="playerOne" placeholder="Player 1"></input>
                            <input className="playerTwo" placeholder="Player 2"></input>
                            <input className="playerThree" placeholder="Player 3"></input>
                            <input className="playerFour" placeholder="Player 4"></input>
                        </div>
                    <div className="inputRowsAndColumns">
                        {/* holes uses dynamic mapping cannot get grid to line up yet  */}
                        <div className="holes rowOne">
                            {this.state.holes.map((hole) => {
                                return <span className="grid-item"> {hole} </span>
                                })
                            }
                        </div>

{/* WANT TO MAKE THESE INPUTS DYMANIC BUT HAVE NOT BEEN ABLE TO FIGURE THAT OUT.  */}
                        <div className="rowTwoParInput">
                            <input size="2" maxLength="2" className="HoleOnePar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleTwoPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleThreePar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleFourPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleFivePar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleSixPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleSevenPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleEightPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleNinePar" type={Number}></input>
                            <span size="2" maxLength="2" className="FrontNineTotalPar" type={Number}> Need sum function here  </span>
                            <input size="2" maxLength="2" className="HoleTenPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleElevenPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleTwelvePar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleThirteenPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleFourteenPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleFifteenPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleSixteenPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleSeventeenPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleEighteenPar" type={Number}></input>
                            <span size="2" maxLength="2" className="playerOneBackNineTotal">Need sum function here </span>
                            <span size="2" maxLength="2" className="playerOneEighteenHoleTotal">Need sum function here </span>
                        </div>
                        <div className="rowThreePlayerOneInput">
                            <input size="2" maxLength="2" className="playerOneHoleOneScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleTwoScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleThreeScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFourScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFiveScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSixScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSevenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleEightScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleNineScore" type={Number}></input>
                            <span size="2" maxLength="2" className="playerOneFrontNineTotal" type={Number}> Need sum function here  </span>
                            <input size="2" maxLength="2" className="playerOneHoleTenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleElevenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleTwelveScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleThirteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFourteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFifteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSixteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSeventeenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleEighteenScore" type={Number}></input>
                            <span size="2" maxLength="2" className="playerOneBackNineTotal">Need sum function here </span>
                            <span size="2" maxLength="2" className="playerOneEighteenHoleTotal">Need sum function here </span>
                        </div>
                        <div className="rowFourPlayerTwoInput">
                            <input size="2" maxLength="2" className="playerTwoHoleOneScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleTwoScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleThreeScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFourScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFiveScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSixScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSevenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleEightScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleNineScore" type={Number}></input>
                            <span size="2" maxLength="2" className="playerOneFrontNineTotal" type={Number}> Need sum function here  </span>
                            <input size="2" maxLength="2" className="playerOneHoleTenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleElevenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleTwelveScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleThirteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFourteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFifteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSixteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSeventeenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleEighteenScore" type={Number}></input>
                            <span size="2" maxLength="2" className="playerOneBackNineTotal">Need sum function here </span>
                            <span size="2" maxLength="2" className="playerOneEighteenHoleTotal">Need sum function here </span>
                        </div>
                        <div className="rowFivePlayerThreeInput">
                            <input size="2" maxLength="2" className="playerThreeHoleOneScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleTwoScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleThreeScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFourScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFiveScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSixScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSevenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleEightScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleNineScore" type={Number}></input>
                            <span size="2" maxLength="2" className="playerOneFrontNineTotal" type={Number}> Need sum function here  </span>
                            <input size="2" maxLength="2" className="playerOneHoleTenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleElevenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleTwelveScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleThirteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFourteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFifteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSixteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSeventeenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleEighteenScore" type={Number}></input>
                            <span size="2" maxLength="2" className="playerOneBackNineTotal">Need sum function here </span>
                            <span size="2" maxLength="2" className="playerOneEighteenHoleTotal">Need sum function here </span>
                        </div>
                        <div className="rowSixPlayerFourInput">
                            <input size="2" maxLength="2" className="playerFourHoleOneScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleTwoScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleThreeScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFourScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFiveScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSixScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSevenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleEightScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleNineScore" type={Number}></input>
                            <span size="2" maxLength="2" className="playerOneFrontNineTotal" type={Number}> Need sum function here  </span>
                            <input size="2" maxLength="2" className="playerOneHoleTenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleElevenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleTwelveScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleThirteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFourteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFifteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSixteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSeventeenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleEighteenScore" type={Number}></input>
                            <span size="2" maxLength="2" className="playerOneBackNineTotal">Need sum function here </span>
                            <span size="2" maxLength="2" className="playerOneEighteenHoleTotal">Need sum function here </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
}

export default PlayersList;


