import React, { Component } from 'react';
import RenderStyle from './RenderStyle';
import getSynonym from '../modules/synonyms.service';
import './FileZone.css';

class FileZone extends Component {

    constructor(props){
      super(props);
      this.state ={
        text: '',
        words: [],
        wordSelected: null,
        styleSelection: ''
      }
    }

    //React Component Lifecycle
    componentWillReceiveProps(nextProps){
      if(nextProps.text !== this.state.text){
        this.setState({
          text: nextProps.text
        });
        this.createFormatObject(nextProps.text);
      }
        this.setState({
          styleSelection: nextProps.styleSelection
        });
        this.updateStyle(nextProps.styleSelection);
    }

    //Transform words to object {word:string , style:Array}
    createFormatObject(text){
      const words = text.split(' ');
      this.setState({
        words : words.map(w=>({word: w, style:['span']}))
      });
    }

    //Set or Unset style/text option
    updateStyle(style){
      if(this.state.wordSelected){

        let newWords = [...this.state.words];

        //Synonym
        if(style==='synonym'){
          getSynonym(newWords[this.state.wordSelected].word)
            .then(response=>{
            response.data.length > 0 ? newWords[this.state.wordSelected].word = response.data[0].word : null;
            this.setState({
              words: newWords
            });
          })
          return;
        }

        //This code is for style updates only
        let filtered = newWords[this.state.wordSelected].style.filter(s=>s!==style);

        if(filtered.length===newWords[this.state.wordSelected].style.length)
          newWords[this.state.wordSelected].style.push(style);
        else
          newWords[this.state.wordSelected].style = filtered;

        this.setState({
          words: newWords
        })
      }
    }

    //Word selection event
    handleDblClick(e) {
      this.setState({
        wordSelected : e.target.getAttribute("data")
      })
    }

    render() {
        return (
            <div id="file-zone" onDoubleClick={this.handleDblClick.bind(this)}>
                <div id="file">
                  {this.state.words.map((w,i)=>{
                    return <RenderStyle
                              key={`${w.word}${i}`}
                              index={`${i}`}
                              format={w.style}
                            >
                              {w.word}
                            </RenderStyle>
                  })}
                </div>
            </div>
        );
    }
}

export default FileZone;
