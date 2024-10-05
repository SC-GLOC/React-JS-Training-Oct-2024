import { useRef, useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const setNameRef = useRef();

  function handleClick() {
    setEnteredPlayerName(setNameRef.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "Unknown Entity"}</h2>
      <p>
        <input type="text" ref={setNameRef} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
