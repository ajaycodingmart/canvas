import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';         
import DrawableCanvas from 'react-drawable-canvas';
import './App.css';

const test = createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 3,
          border: 0,
          margin: 20,
          color: 'white',
          height: 48,
          padding: '0 30px'
        },
      },
    },
});
 const style = {
  height: 100,
  margin: 20,
  cursor: 'pointer'
};

class App extends React.Component {
   
    render() {
         return (
            <div className="mainFrame">
              <div className="divisions">
                <h3 className="textHeads">Queue</h3>
                <MuiThemeProvider theme={test}>
                    <Button className="right" href="http://www.google.com" >CREATE</Button>
                </MuiThemeProvider>
                <div className="paperDiv">
                  <Paper className="cardTest" style={style} zDepth={4}>
                    <DrawableCanvas />
                  </Paper>
                  <Paper className="cardTest" style={style} zDepth={4}>
                  <div className="descriptionText">Hello</div>
                  </Paper><Paper className="cardTest" style={style} zDepth={4}>
                  </Paper><Paper className="cardTest" style={style} zDepth={4}>
                  </Paper><Paper className="cardTest" style={style} zDepth={4}>
                  </Paper><Paper className="cardTest" style={style} zDepth={4}>
                  </Paper><Paper className="cardTest" style={style} zDepth={4}>
                  </Paper>
                </div>
              </div>
               <div className="divisions">
                <h3 className="textHeads">Today</h3>
                <div className="paperDiv">
                  <Paper className="cardTest" style={style} zDepth={4}>
                    <div className="descriptionText"></div>
                  </Paper>
                </div>
              </div> 
               <div className="divisions">
                <h3 className="textHeads">Tomorrow</h3>
                <div className="paperDiv">
                  <Paper className="cardTest" style={style} zDepth={4}>
                  </Paper>
                </div>
              </div>
            </div>
                
         );
    }
}

export default App;
