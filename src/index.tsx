import * as React from "react";
import { render } from "react-dom";
// import Hello from "./Hello";
//
// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };

class App extends React.Component<any, any> {
  render() {
    return "hello cool great"
  }
}

// const App = () => (
//   <div style={styles}>
//     <Hello name="CodeSandbox" />
//     <h2>Start editing to cool see some magic happen {"\u2728"}</h2>
//   </div>
// );

render(<App />, document.getElementById("root"));
