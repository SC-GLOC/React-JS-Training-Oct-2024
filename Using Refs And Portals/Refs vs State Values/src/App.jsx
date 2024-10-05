import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={8} />
        <TimerChallenge title="Medium" targetTime={5} />
        <TimerChallenge title="Hard" targetTime={3} />

        <TimerChallenge title="Impossible" targetTime={1} />
      </div>
    </>
  );
}

export default App;
