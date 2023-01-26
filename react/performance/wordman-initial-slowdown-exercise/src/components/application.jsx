import ExpensiveComponent from './expensive-component';
import Game from "./game";

const Application = () => {

  return (
    <main className="flex flex-col gap-8 mx-auto my-8 w-96">
      {/* <ColorSwatch color={correctAnswer} />  We move this part to the new component to reduce extra re-rendering for 
      <GameInput                                 Expensive component
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
      </button> */}
      <Game >
        <ExpensiveComponent /> 
      </Game>
      {/* <ExpensiveComponent /> //// We can make it as children  */}
    </main>
  );
};

export default Application;
