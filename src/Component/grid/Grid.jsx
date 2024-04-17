import { useState } from "react";
import Card from "../card/Card";
import isWinner from "../../helpers/checkWinner";
import { RiEmotionUnhappyFill } from "react-icons/ri";
import { ImHappy2 } from "react-icons/im";
import './grid.css';

function Grid({numberofCards}) {
    const [board, setBoard] = useState(Array(numberofCards).fill(""));
    const [turn, setTurn] = useState(true) // true => O, false => X
    const [winner, setWinner] = useState(null);

    function play(index) {
        if(turn == true){
            board[index] = 'O';
        } else{
            board[index] = 'X';
        }
        const win = isWinner(board, turn ? "O" : "X");
        if(win){
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn);
    }

    function reset() {
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberofCards).fill(""));
    }

    return (
        <div className="grid-wrapper">
            {
                winner && (
                    <>
                        <div className="emoji"><ImHappy2 /></div>
                        <h1 className="turn-highlight winner">Hurray !!  <br /> Winner is : {winner}</h1>
                        <button className="reset" onClick={reset}>Reset Game</button>
                    </>
                )
            }
            {
                !winner && board.includes("") && ( 
                    <>
                        <h1 className="turn-highlight">Current turn : {(turn) ? 'O' : 'X'}</h1>
                        <button className="reset" onClick={reset}>Reset Game</button>
                    </>
                )
            }

            {
                !winner && !board.includes("") &&(
                    <>
                        <div className="emoji"><RiEmotionUnhappyFill /></div>
                        <h1 className="no-winner">No Winner</h1>
                        <button className="reset" onClick={reset}>Reset Game</button>
                    </>
                )
            }

            {
                !winner && board.includes("") && (
                    <div className="grid">
                        {board.map((el, idx) => <Card gameEnd={winner ? true:false} key= {idx} onPlay={play} player={el} index={idx} /> )}
                    </div>
                )
            }
        </div>

        

    )
}

export default Grid;