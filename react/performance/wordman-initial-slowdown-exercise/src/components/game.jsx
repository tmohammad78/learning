import { useState } from 'react';
import generateRandomColor from '../lib/generate-random-color';
import ColorSwatch from './color-swatch';
import GameInput from './game-input';
import GameStatus from './game-status';

const Game = ({ children }) => {
    const [colorGuess, setColorGuess] = useState('');
    // const [correctAnswer, setCorrectAnswer] = useState(generateRandomColor()); //// Red Flag
    const [correctAnswer, setCorrectAnswer] = useState(() => generateRandomColor()); //// Correct 
    const [hasGuessed, setHasGuessed] = useState(false);
    const [isWinner, setIsWinner] = useState(false);
  
    if (hasGuessed) {
      if (correctAnswer === colorGuess) {
        setIsWinner(true);
      }
    }

    return (
        <div>
            <ColorSwatch color={correctAnswer} />
            <GameInput
                value={colorGuess}
                onChange={(e) => setColorGuess(e.target.value)}
                onSubmit={() => setHasGuessed(true)}
                disabled={hasGuessed}
            />
            <GameStatus isWinner={isWinner} hasGuessed={hasGuessed} />
            <button
                onClick={() => {
                setCorrectAnswer(generateRandomColor());
                setHasGuessed(false);
                setColorGuess('');
                }}
                type={hasGuessed ? 'submit' : 'button'}
            >
                Reset Color
            </button>
            { children }
        </div>
    )
}
export default Game;