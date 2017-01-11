
////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2017, Perry L Miller IV
//  All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//
//  Bout view module.
//
////////////////////////////////////////////////////////////////////////////////

import "./Bout.css";

import Functions from "../../Util/Functions";
import React from "react";

import assert from "assert";
import lodash from "lodash";

const getNextRenderCounter = Functions.getNextRenderCounter;


////////////////////////////////////////////////////////////////////////////////
//
//  Bout class.
//
////////////////////////////////////////////////////////////////////////////////

class Bout extends React.Component
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

Bout.prototype._render = function()
{
  const props = this.props;
  const x = props.x;
  const y = props.y;
  const width = props.width;
  const height = props.height;

  assert.ok ( lodash.isNumber ( x ) );
  assert.ok ( lodash.isNumber ( y ) );
  assert.ok ( lodash.isNumber ( width ) && width > 0 );
  assert.ok ( lodash.isNumber ( height ) && height > 0 );

  const style = {
    position: "absolute",
    left: x,
    top: y,
    width: width,
    height: height
  };

  return (
    <div>
      <div className = "boutBracket" style = { style } />
      { this._renderText() }
    </div>
  );
};


////////////////////////////////////////////////////////////////////////////////
//
//  Render the text if there is any.
//
////////////////////////////////////////////////////////////////////////////////

Bout.prototype._renderText = function()
{
  const props = this.props;
  const text = props.text;
  const x = props.x;
  const y = props.y;
  const height = props.height;
  const textOffset = props.textOffset;

  assert.ok ( lodash.isNumber ( x ) );
  assert.ok ( lodash.isNumber ( y ) );
  assert.ok ( lodash.isNumber ( height ) );
  assert.ok ( lodash.isNumber ( textOffset ) );

  if ( !text )
  {
    return null;
  }

  const elements = [];

  const topText = text.topText;
  if ( topText )
  {
    const style = {
      position: "absolute",
      left: x + "px",
      top: y + textOffset + "px",
      whiteSpace: "nowrap"
    };

    elements.push (
      <div
        className = "boutTextTop"
        key = { getNextRenderCounter() }
        style = { style } >
        { topText }
      </div>
    );
  }

  const bottomText = text.bottomText;
  if ( bottomText )
  {
    const style = {
      position: "absolute",
      left: x + "px",
      top: y + height + textOffset - 2 + "px", // Not sure why we need 2 more here.
      whiteSpace: "nowrap"
    };

    elements.push (
      <div
        className = "boutTextBottom"
        key = { getNextRenderCounter() }
        style = { style } >
        { bottomText }
      </div>
    );
  }

  return (
    <div>
      { elements }
    </div>
  );
};


////////////////////////////////////////////////////////////////////////////////
//
//  The end of the module.
//
////////////////////////////////////////////////////////////////////////////////

export default Bout;
