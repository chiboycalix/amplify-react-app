import React from 'react';
import './App.css';
import { Analytics } from 'aws-amplify';

function App() {
  React.useEffect(() => {
    Analytics.record('Home Page Visit');
    Analytics.record({
      name: 'UserSignIn',
      attributes: {
        username: 'Nonso'
      }
    })
  }, []);
  return <div className="App">MY FORST HOSTING</div>;
}

export default App;
