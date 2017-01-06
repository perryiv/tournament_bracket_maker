
////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2017, Perry L Miller IV
//  All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//
//  Player module.
//
////////////////////////////////////////////////////////////////////////////////

"use strict";

var Functions = require ( "../../Util/Functions" );

var assert = require ( "assert" );
var lodash = require ( "lodash" );


////////////////////////////////////////////////////////////////////////////////
//
//  Player class.
//
////////////////////////////////////////////////////////////////////////////////

var Player = function ( input )
{
  var name = input.name;
  assert ( lodash.isString ( name ) );
  assert ( name.length > 0 );

  this._id = Functions.getNextCounter();
  this._name = name;
  this._team = null;
};


////////////////////////////////////////////////////////////////////////////////
//
//  Set the team.
//
////////////////////////////////////////////////////////////////////////////////

Player.prototype._setTeam = function ( team )
{
  this._team = team;
};


////////////////////////////////////////////////////////////////////////////////
//
//  The end of the module.
//
////////////////////////////////////////////////////////////////////////////////

module.exports =  Player;
