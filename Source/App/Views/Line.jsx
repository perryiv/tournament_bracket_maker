
////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2017, Perry L Miller IV
//  All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//
//  Bracket line module.
//
////////////////////////////////////////////////////////////////////////////////

import "./Line.css";

import React from "react";

import assert from "assert";
import lodash from "lodash";


////////////////////////////////////////////////////////////////////////////////
//
//  Bracket line view class.
//
////////////////////////////////////////////////////////////////////////////////

class Line extends React.Component
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

Line.prototype._render = function()
{
  const props = this.props;
  const x = props.x;
  const y = props.y;
  const length = props.length;
  const thickness = props.thickness;
  const direction = props.direction;

  assert.ok ( lodash.isNumber ( x ) );
  assert.ok ( lodash.isNumber ( y ) );
  assert.ok ( lodash.isNumber ( length ) && length > 0 );
  assert.ok ( lodash.isNumber ( thickness ) && thickness > 0 );
  assert.ok ( ( "horizontal" === direction ) || ( "vertical" === direction ) );

  const style = {
    position: "absolute",
    left: x,
    top: y,
    width: length
  };

  return (
    <div className = "line" style = { style } >
      { this._renderText() }
    </div>
  );
};


////////////////////////////////////////////////////////////////////////////////
//
//  Render the text if there is any.
//
////////////////////////////////////////////////////////////////////////////////

Line.prototype._renderText = function()
{
  const text = this.props.text;

  if ( !text )
  {
    return null;
  }

  const style = {
    position: "relative",
    top: "-1.5em",
    whiteSpace: "nowrap"
  };

  return (
    <div className = "line_text" style = { style } >
      { text }
    </div>
  );
};


////////////////////////////////////////////////////////////////////////////////
//
//  The end of the module.
//
////////////////////////////////////////////////////////////////////////////////

export default Line;
