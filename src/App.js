import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from './text.service';

class App extends Component {

    constructor(props){
      super(props);

      this.state = {
        text: '',
        styleSelection: ''
      }

      this.getText.call(this);
    }

    //Callback for user style selection event
    getStyleElement(element){
      this.setState({
        styleSelection : element
      })
    }

    //Get the mockup Text
    getText() {
        getMockText().then(result=>{
            this.setState({
              text:result
            });
        });
    }

    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel
                      getStyleElement={(element)=>this.getStyleElement(element)}
                    />

                    <FileZone
                      text={this.state.text}
                      styleSelection={this.state.styleSelection}
                    />
                </main>
            </div>
        );
    }
}

export default App;
