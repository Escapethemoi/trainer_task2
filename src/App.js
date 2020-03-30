import React from 'react';
import './App.css';
import Customerlist from './components/Customerlist';
import Custtrainlist from './components/Custtrainlist';
import Traininglist from './components/Traininglist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Personal Trainer App
          </Typography>
        </Toolbar>
      </AppBar>
      <Custtrainlist />
      <Customerlist />
      <Traininglist />
    </div>
  );
}

export default App;
