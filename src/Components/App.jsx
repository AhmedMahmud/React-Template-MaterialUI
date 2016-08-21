import React from 'react';
import HelloWorld from './HelloWorld.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends React.Component {
  render() {
    return (
			<MuiThemeProvider>
				<HelloWorld />
			</MuiThemeProvider>
		)
  }
}

export default App;