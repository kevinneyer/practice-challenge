import React, { useState } from "react";

import Answer from "./answer";

const App = () => {
  // update the useState to an array, string, integer, undefined or false value to dynamically updated the answer
  const [input] = useState();

  return (
    <div className="App">
      <Answer input={input} />
    </div>
  );
};

export default App;

