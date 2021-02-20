import React, { useState } from 'react';
import Square from './Square';

const GameBoard = () => {

    // What states are used for this
    // 2 states -- current player and game state

    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [moves, setMoves] = useState(0);

    const emptyGame = [
        {value: null},
        {value: null},
        {value: null},
        {value: null},
        {value: null},
        {value: null},
        {value: null},
        {value: null},
        {value: null},
    ];
    const [gameState, setGameState] = useState(emptyGame);

    const executeMove = (index) => {
        let newGameState = gameState;
        // check for new move
        if(newGameState[index].value === null){
            newGameState[index].value = currentPlayer;
            setGameState(newGameState);
            let nextPlayer = currentPlayer === "X" ? "O" : "X";
            setCurrentPlayer(nextPlayer);

            let result = checkWinOrDraw();
            if(result !== false){
                alert(`Player ${result} wins!`)
            }
            let moveNumber = moves + 1;
            setMoves(moveNumber);
            if(moveNumber === 9 && result !== false)
            {
                alert("Game is draw!");
            }
        }

        console.table(gameState);
    }

    const checkWinOrDraw = (index) => {
        let win = false;
        if(gameState[0].value === gameState[1].value && gameState[1].value === gameState[2].value && gameState[0].value !== null)
        {
            win = gameState[0].value;
        }
        else if(gameState[0].value === gameState[3].value && gameState[3].value === gameState[6].value && gameState[0].value !== null)
        {
            win = gameState[3].value;
        }
        else if(gameState[0].value === gameState[4].value && gameState[4].value === gameState[8].value && gameState[0].value !== null)
        {
            win = gameState[8].value;
        }
        else if(gameState[3].value === gameState[4].value && gameState[4].value === gameState[5].value && gameState[3].value !== null)
        {
            win = gameState[4].value;
        }
        else if(gameState[6].value === gameState[7].value && gameState[7].value === gameState[8].value && gameState[7].value !== null)
        {
            win = gameState[7].value;
        }
        else if(gameState[1].value === gameState[4].value && gameState[4].value === gameState[7].value && gameState[4].value !== null)
        {
            win = gameState[1].value;
        }
        else if(gameState[2].value === gameState[5].value && gameState[5].value === gameState[8].value && gameState[5].value !== null)
        {
            win = gameState[5].value;
        }
        else if(gameState[2].value === gameState[4].value && gameState[4].value === gameState[6].value && gameState[6].value !== null)
        {
            win = gameState[2].value;
        }
        // else if(game)
        return win;
    }



    return (
        <>
            <div className="col-md-12 col-12 text-center">
                <h2>
                Current Player: {currentPlayer}
                </h2>
                <button onClick={e => setGameState(emptyGame)}>Restart</button>
            </div>

            <div className="bg-white col-md-6 offset-md-3 gameBoard shadow-sm row p-4">
                {gameState.map((square, key)=>(
                    <Square key={key} index={key} gameState={gameState} executer={executeMove}/>
                ))}
            </div>
        </>
    );
};

export default GameBoard;