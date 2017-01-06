
////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2017, Perry L Miller IV
//  All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//
//  Bracket column view module.
//
////////////////////////////////////////////////////////////////////////////////

import "./Column.css";

import Row from "./Row";

import React from "react";

import assert from "assert";
import lodash from "lodash";


////////////////////////////////////////////////////////////////////////////////
//
//  Bracket column view class.
//
////////////////////////////////////////////////////////////////////////////////

class Column extends React.Component
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

Column.prototype._render = function()
{
  const props = this.props;
  const width = props.width;
  const height = props.height;
  const column = props.index;
  const numCompetitors = props.numCompetitors;

  assert.ok ( lodash.isSafeInteger ( width ) && width > 0 );
  assert.ok ( lodash.isSafeInteger ( height ) && height > 0 );

  assert.ok ( lodash.isSafeInteger ( column ) );

  const numRows = numCompetitors;

  assert.ok ( lodash.isSafeInteger ( numRows ) );
  assert.ok ( numRows > 0 );

  const rows = [];
  for ( let i = 0; i < numRows; ++i )
  {
    rows.push ( this._renderRow ( column, i, width, Math.round ( height / numRows ) ) );
  }

  return (
    <div className = "bracket_column" >
      {rows}
    </div>
  );
};


////////////////////////////////////////////////////////////////////////////////
//
//  Render the row.
//
////////////////////////////////////////////////////////////////////////////////

Column.prototype._renderRow = function ( column, row, width, height )
{
  return (
    <Row
      key = { row }
      row = { row }
      column = { column }
      width = { width }
      height = { height }
    />
  );
};


////////////////////////////////////////////////////////////////////////////////
//
//  The end of the module.
//
////////////////////////////////////////////////////////////////////////////////

export default Column;
