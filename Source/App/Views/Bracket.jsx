
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

import Column from "./Column";
import Line from "./Line";

import React from "react";

import assert from "assert";
import lodash from "lodash";


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
  const width = props.width;
  const height = props.height;
  const numCompetitors = props.numCompetitors;
  const possibleNumColumns = Bracket.numColumns;

  assert.ok ( lodash.isSafeInteger ( width ) && width > 0 );
  assert.ok ( lodash.isSafeInteger ( height ) && height > 0 );

  assert.ok ( lodash.isSafeInteger ( numCompetitors ) );
  assert.ok ( numCompetitors in possibleNumColumns );

  const numColumns = possibleNumColumns[numCompetitors];

  assert.ok ( lodash.isSafeInteger ( numColumns ) );
  assert.ok ( numColumns > 0 );

  const columns = [];
  for ( let i = 0; i < numColumns; ++i )
  {
    columns.push ( this._renderColumn ( {
      numCompetitors: numCompetitors,
      index: i,
      width: Math.round ( width / numColumns ),
      height: height
    } ) );
  }

  const config = {
    x: 100,
    y: 100,
    length: 500,
    thickness: 2,
    direction: "horizontal"
  };

  return (
    <div>
      <Line { ... config } key = { 0 } />
      <Line { ... config } key = { 1 } direction = "vertical" />
    </div>
  );

  // return (
  //   <div className = { "bracket" } >
  //     {columns}
  //   </div>
  // );
};


////////////////////////////////////////////////////////////////////////////////
//
//  Render the column.
//
////////////////////////////////////////////////////////////////////////////////

Bracket.prototype._renderColumn = function ( data )
{
  const props = {
    ... data,
    key: data.index
  };

  return (
    <Column { ... props } />
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
