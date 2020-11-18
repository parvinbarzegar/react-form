import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headerText, setHeaderText] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function welcome(event) {
    setHeaderText(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headerText} </h1>
      <form onSubmit={welcome}>
        <input
          onChange={handleChange}
          value={name}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
