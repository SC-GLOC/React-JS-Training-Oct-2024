import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleClick() {
    setSubmitted(true);
  }

  function handleChange(event) {
    setSubmitted(false);
    setEnteredPlayerName(event.target.value);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "Unknown Entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
