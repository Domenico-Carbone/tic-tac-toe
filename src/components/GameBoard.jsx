import {useState} from 'react';

// const initialGameBoard = [
//     [null,null,null],
//     [null,null,null],
//     [null,null,null],
// ]; //serve per inizializzare la griglia di paetenza con i valori settati a null

export default function GameBoard({ onSelectSquare, board }){
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePLayerSymbol;
    //         return updatedBoard;
    //     });
    //     onSelectSquare();
    // }

    // let gameBoard = initialGameBoard;  //copio la board nella variabile
    // for(const turn of turns){  //prendo i turni e faccio un forin che uso per gli oggetti (come il foreach)
    //     const {square, player} = turn;     //creo un oggetto che avrà coordinate e giocatore
    //     const {row, col} = square;  //creo un oggetto che avrà coordinat
    //     gameBoard[row][col] = player;  //passo le coordinate della posizione modificata
    // }

    return (
        <ol id="game-board">
            {board.map((row,rowIndex) =>   //faccio il map della variabile creata
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex) => <li key={colIndex}>
                            <button  
                                disabled={playerSymbol !== null} 
                                onClick={() => onSelectSquare(rowIndex, colIndex)   //così passo la prop della funzione passando le coordinate
                                // () => handleSelectSquare(rowIndex,colIndex)
                            }>{playerSymbol}</button>
                        </li>)}
                    </ol>
                </li>
            )}
        </ol>
    );
}