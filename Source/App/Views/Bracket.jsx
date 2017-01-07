
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

import { getMaxDepth } from "../../Util/Functions";
import Line from "./Line";

import React from "react";


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
  let width = props.width;
  let height = props.height;
  const margin = props.margin;
  const bracket = props.bracket;
  const players = props.players;

  width = width - margin.left - margin.right;
  height = height - margin.top - margin.bottom;

  const maxDepth = getMaxDepth ( bracket );

  const config = {
    x: margin.left,
    y: margin.top + height * 0.5,
    length: width / maxDepth,
    thickness: 2,
    height: height,
    width: width,
    margin: margin
  };

  return this._renderLines ( bracket, players, config );
};


////////////////////////////////////////////////////////////////////////////////
//
//  Render all the lines of the bracket.
//
////////////////////////////////////////////////////////////////////////////////

Bracket.prototype._renderLines = function ( bracket, players, data )
{
  const lines = [];
  lines.push ( this._renderLineH ( bracket, players, data ) );

  const children = bracket.children;
  if ( children && ( 2 === children.length ) )
  {
    let config = Object.assign ( {}, data, { x: data.x + data.length, height: data.height * 0.5 } );

    lines.push ( this._renderLineV ( {
      ... data,
      x: config.x,
      y: config.y - config.height * 0.5,
      length: config.height
    } ) );

    config.y = data.y - config.height * 0.5;
    lines.push ( this._renderLines ( children[0], players, config ) );

    config.y = data.y + config.height * 0.5;
    lines.push ( this._renderLines ( children[1], players, config ) );
  }

  return ( <div> { lines } </div> );
};


////////////////////////////////////////////////////////////////////////////////
//
//  Render the horizontal line of the bracket.
//
////////////////////////////////////////////////////////////////////////////////

Bracket.prototype._renderLineH = function ( bracket, players, data )
{
  let text = null;
  if ( bracket.player )
  {
    text = players[bracket.player].name;
  }

  return (
    <div>
      <Line { ... data } direction = "horizontal" text = { text } />
    </div>
  );
};


////////////////////////////////////////////////////////////////////////////////
//
//  Render the vertical line of the bracket.
//
////////////////////////////////////////////////////////////////////////////////

Bracket.prototype._renderLineV = function ( data )
{
  return ( <Line { ... data } direction = "vertical" /> );
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
