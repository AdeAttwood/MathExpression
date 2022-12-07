import React from "react";
import { useState } from "react";

import { evaluate } from "./expression";

const useQuery = (input: string, getVariable: (variable: string) => number) => {
  if (!input.trim()) {
    ["?", "Empty"];
  }

  return evaluate(input, getVariable);
};

function App() {
  const variables: any = { a: 5, b: 10 };

  const [value, setValue] = useState("");
  const { result, error } = useQuery(value, (variable: string) => variables[variable]);

  return (
    <div className="container mt-5 text-center">
      <h1>Math Expression</h1>
      <p>Type some math expressions in to the input and they should be evaluated.</p>
      <div className="m-auto text-start w-50">
        <p>Examples:</p>
        <ul>
          <li>
            Basic: <code>1 + 1</code>
          </li>
          <li>
            Brackets: <code>(1 + 1) + 3</code>
          </li>
          <li>
            Nested Brackets: <code>((1 + 1) + 3) + 2</code>
          </li>
          <li>
            Subtraction: <code>2 - 1</code>
          </li>
          <li>
            Variables: <code>a + b</code>
          </li>
        </ul>
      </div>
      <div className="my-5">
        <input
          className="form-control w-50 m-auto mb-3"
          type="text"
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
        />
        <div>{error ? error : `This should equal ${result}`}</div>
      </div>
      <table className="table table-bordered">
        <caption>All the variables that can be used in expressions</caption>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Variable Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(variables).map((variable) => (
            <tr key={variable}>
              <td>{variable}</td>
              <td>{variables[variable]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
