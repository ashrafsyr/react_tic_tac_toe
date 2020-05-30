import React, { Component } from 'react';
import GameTable from '../../components/GameTable/GameTable';


class Game extends Component {
    state = {
        turn: false,
        table: ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
        winner: '0',
        end: false,
    }


    winHomes = {
        row0: { first: 0, second: 1, third: 2 },
        row1: { first: 3, second: 4, third: 5 },
        row2: { first: 6, second: 7, third: 8 },
        col0: { first: 0, second: 3, third: 6 },
        col1: { first: 1, second: 4, third: 7 },
        col2: { first: 2, second: 5, third: 8 },
        x1: { first: 0, second: 4, third: 8 },
        x2: { first: 2, second: 4, third: 6 }
    }



    itemClickHandler = (index) => {
        if (this.state.table[index] === '0') {
            const newState = { ...this.state };
            newState.table[index] = this.state.turn ? '1' : '2';
            newState.turn = !newState.turn;
            this.setState(newState);
            this.winCheck();
            this.endCheck();
        }

    }

    winCheck = () => {
        Object.keys(this.winHomes).map((key, index) => {
            if (this.state.table[this.winHomes[key].first] === this.state.table[this.winHomes[key].second] &&
                this.state.table[this.winHomes[key].first] === this.state.table[this.winHomes[key].third] &&
                this.state.table[this.winHomes[key].first] !== '0') {

                this.setState({...this.state, winner: this.state.table[this.winHomes[key].first], end: true })
            }
        })
    }

    endCheck = () => {
        let mybool = true

        for (let i = 0; i < this.state.table.length; i++) {
            if (this.state.table[i] === '0') {
                console.log('vsoiue')
                mybool = false;
            }
        }
        if (mybool){
            this.setState({end: mybool});
        }
    }


    resetHandler = () => {
        this.setState ({
            turn: false,
            table: ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
            winner: '0',
            end: false,
        })
    }


    render() {
        return (
            <GameTable table={this.state.table}
                winner={this.state.winner}
                end={this.state.end}
                onClick={this.itemClickHandler}
                reset={this.resetHandler}
                turn={this.state.turn} />
        )
    }


}


export default Game;