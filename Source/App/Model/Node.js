
////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2017, Perry L Miller IV
//  All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//
//  Tree node module.
//
////////////////////////////////////////////////////////////////////////////////

"use strict";

var Functions = require ( "../../Util/Functions" );


////////////////////////////////////////////////////////////////////////////////
//
//  Tree node class.
//
////////////////////////////////////////////////////////////////////////////////

var Node = function ( parent, depth )
{
  this._id = Functions.getNextCounter();
  this._parent = parent;
  this._child0 = null;
  this._child1 = null;
  this._player = null;
  this._depth = depth;

  if ( depth > 0 )
  {
    --depth;
    this._child0 = new Node ( this, depth );
    this._child1 = new Node ( this, depth );
  }
};


////////////////////////////////////////////////////////////////////////////////
//
//  Clone the node.
//
////////////////////////////////////////////////////////////////////////////////

Node.prototype.clone = function()
{
  var node = new Node ( this._parent, -1 );

  // node._id = this._id;
  node._parent = this._parent;
  node._child0 = null;
  node._child1 = null;
  node._player = this._player;
  node._depth = this._depth;

  var child0 = this.child0;
  if ( child0 )
  {
    node._child0 = child0.clone();
  }

  var child1 = this.child1;
  if ( child1 )
  {
    node._child1 = child1.clone();
  }

  return node;
};


////////////////////////////////////////////////////////////////////////////////
//
//  The end of the module.
//
////////////////////////////////////////////////////////////////////////////////

module.exports =  Node;