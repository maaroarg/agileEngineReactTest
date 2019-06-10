import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {

    handleClick(e){
      this.props.getStyleElement(e.target.getAttribute("data-value"));
    }

    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button className="format-action" type="button" onClick={(e)=>this.handleClick(e)} data-value="strong">B</button>
                    <button className="format-action" type="button" onClick={(e)=>this.handleClick(e)} data-value="i">I</button>
                    <button className="format-action" type="button" onClick={(e)=>this.handleClick(e)} data-value="u">U</button>
                    <button className="format-action" type="button" onClick={(e)=>this.handleClick(e)} data-value="h1">H1</button>
                    <button className="format-action" type="button" onClick={(e)=>this.handleClick(e)} data-value="synonym">Synonym</button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
