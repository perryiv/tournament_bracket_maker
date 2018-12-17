
////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2017, Perry L Miller IV
//  All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//
//  Bracket view module.
//
////////////////////////////////////////////////////////////////////////////////

import "./Bracket.css";

import Bout from "./Bout";
import Functions from "../../Util/Functions";
import Line from "./Line";

import React from "react";

const getMaxDepth = Functions.getMaxDepth;
const getNextRenderCounter = Functions.getNextRenderCounter;
const resetRenderCounter = Functions.resetRenderCounter;


////////////////////////////////////////////////////////////////////////////////
//
//  Bracket class.
//
////////////////////////////////////////////////////////////////////////////////

class Bracket extends React.Component
{
  constructor ( props )
  {
    // Call the base class's constructor.
    super ( props );
  }

  render()
  {
    return this._render();
  }
}


////////////////////////////////////////////////////////////////////////////////
//
//  Render.
//
////////////////////////////////////////////////////////////////////////////////

Bracket.prototype._render = function()
{
  const props = this.props;
  const margin = props.margin;
  const bracket = props.bracket;
  const players = props.players;
  const width = props.width - margin.left - margin.right;
  const height = props.height - margin.top - margin.bottom;
  const maxDepth = getMaxDepth ( bracket );
  const length = width / maxDepth;
  const x = margin.left + width - length;

  const config = {
    x: x,
    y: margin.top + height * 0.5,
    length: length,
    thickness: 2,
    width: length,
    height: height,
    margin: margin,
    textOffset: -20
  };

  // Reset this.
  resetRenderCounter();

  const elements = [];
  elements.push ( this._renderLine ( bracket, players, config ) );
  config.x = x - length;
  elements.push ( this._renderBouts ( bracket, players, config ) );

  return (
    <div>
      { elements }
    </div>
  );
};


////////////////////////////////////////////////////////////////////////////////
//
//  Render all the bouts of the bracket.
//
////////////////////////////////////////////////////////////////////////////////

Bracket.prototype._renderBouts = function ( bracket, players, data )
{
  const bouts = [];

  const children = bracket.children;
  if ( children && ( 2 === children.length ) )
  {
    let x = data.x;
    let y = data.y;
    let width = data.width;
    let height = data.height;

    {
      let config = Object.assign ( {}, data );
      config.y = y - height * 0.25;
      config.height = height * 0.5;

      bouts.push ( this._renderBout ( children, players, config ) );
    }

    {
      let config = Object.assign ( {}, data );

      config.x = x - width;
      config.height = height * 0.5;
      config.y = y - height * 0.25;
      bouts.push ( this._renderBouts ( children[0], players, config ) );

      config.y = y + height * 0.25;
      bouts.push ( this._renderBouts ( children[1], players, config ) );
    }
  }

  return (
    <div key = { getNextRenderCounter() } >
      { bouts }
    </div>
  );
};


////////////////////////////////////////////////////////////////////////////////
//
//  Render the bout.
//
////////////////////////////////////////////////////////////////////////////////

Bracket.prototype._renderBout = function ( brackets, players, data )
{
  let text = {};

  let id = brackets[0].player;
  if ( id )
  {
    const player = players[id];
    text.topText = player.name + " (" + player.team + ")";
  }

  id = brackets[1].player;
  if ( id )
  {
    const player = players[id];
    text.bottomText = player.name + " (" + player.team + ")";
  }

  return (
    <Bout
      key = { getNextRenderCounter() }
      text = { text }
      { ... data }
    />
  );
};


////////////////////////////////////////////////////////////////////////////////
//
//  Render the horizontal line of the bracket.
//
////////////////////////////////////////////////////////////////////////////////

Bracket.prototype._renderLine = function ( bracket, players, data )
{
  let text = null;
  let id = bracket.player;
  if ( id )
  {
    const player = players[id];
    text = player.name;
    text += " (" + player.team + ")";
  }

  return (
    <div key = { getNextRenderCounter() } >
      <Line { ... data } direction = "horizontal" text = { text } />
    </div>
  );
};


////////////////////////////////////////////////////////////////////////////////
//
//  The maps between number of competitors and columns.
//
////////////////////////////////////////////////////////////////////////////////

(function()
{
  var maxNumColumns = 8;
  var possibleNumColumns = {};
  var possibleNumCompetitors = {};
  for ( let i = 0; i < maxNumColumns; ++i )
  {
    var numColumns = i + 1;
    var numCompetitors = Math.pow ( 2, i );

    possibleNumColumns[numCompetitors] = numColumns;
    possibleNumCompetitors[numColumns] = numCompetitors;
  }
  Bracket.numCompetitors = possibleNumCompetitors;
  Bracket.numColumns = possibleNumColumns;
})();


////////////////////////////////////////////////////////////////////////////////
//
//  The end of the module.
//
////////////////////////////////////////////////////////////////////////////////

export default Bracket;
