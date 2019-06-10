import React from 'react';

const RenderStyle = props => {
  const newFormatArr = [...props.format];
  const format = newFormatArr.shift();

  const newNode = (arr, text) => {
    if(arr.length===0){
      return `${text} `;
    }

    //Component creation recursive strategy
    return RenderStyle({...props, format:newFormatArr});
  }

  return React.createElement(
    format,
    {
      data: props.index
    },
    //This fn renders text or another component
    newNode(newFormatArr, props.children)
  )
}


export default RenderStyle;
