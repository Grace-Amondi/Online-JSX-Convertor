import React from "react";
import { AppBar} from "material-ui";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import "./App.css";
import { black } from "material-ui/styles/colors";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "/* add your jsx here */",
      output: "",
      err: ""
    };
  }
  update(e) {
    let code = e.target.value;
    try {
      this.setState({
        output: window.Babel.transform(code, { presets: ["es2015", "react"] })
          .code,
        err: ""
      });
    } catch (err) {
      this.setState({ err: err.message });
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
        <AppBar
          title="WELCOME TO THE ONLINE JSX CONVERTOR"
          titleStyle={{color:black}}
        />
        </MuiThemeProvider>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
            onChange={this.update.bind(this)}
            defaultValue={this.state.input}
          />
          <pre className="pre">{this.state.output}</pre>
        </div>
      </div>
    );
  }
}

export default App;
