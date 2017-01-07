
////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2017, Perry L Miller IV
//  All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//
//  Definitions of some fake data.
//
////////////////////////////////////////////////////////////////////////////////

"use strict";

var Public = {};


////////////////////////////////////////////////////////////////////////////////
//
//  Hard-coded definition of the tournament.
//
////////////////////////////////////////////////////////////////////////////////

Public.tournament = {
  teams: {
    Florin: {
      name: "University of Florin",
      points: 42
    },
    Guilder: {
      name: "University of Guilder",
      points: 25
    }
  },
  players: {
    "00": { team: "Florin",  name: "Fezzik" },
    "01": { team: "Guilder", name: "Princes Buttercup" },
    "02": { team: "Florin",  name: "Dread Pirate Roberts" },
    "03": { team: "Guilder", name: "Inigo Montoya" },
    "04": { team: "Florin",  name: "Vizzini" },
    "05": { team: "Guilder", name: "Miracle Max" },
    "06": { team: "Florin",  name: "Prince Humperdinck" },
    "07": { team: "Guilder", name: "Count Rugen" },
    "08": { team: "Florin",  name: "Impressive Clergyman" },
    "09": { team: "Guilder", name: "Ancient Booer" },
    "10": { team: "Florin",  name: "Han Solo" },
    "11": { team: "Guilder", name: "Luke Skywalker" },
    "12": { team: "Florin",  name: "Princes Leia" },
    "13": { team: "Guilder", name: "Darth Vader" },
    "14": { team: "Florin",  name: "Gandalf" },
    "15": { team: "Guilder", name: "Frodo Baggins" },
    "16": { team: "Florin",  name: "Bilbo Baggins" },
    "17": { team: "Guilder", name: "Legolas" },
    "18": { team: "Florin",  name: "Aragorn" },
    "19": { team: "Guilder", name: "Boromir" },
    "20": { team: "Florin",  name: "Gimli" },
    "21": { team: "Guilder", name: "Saruman" },
    "22": { team: "Florin",  name: "Samwise Gamgee" },
    "23": { team: "Guilder", name: "Gimli" }
  },
  divisions: {
    Open: {
      "150": {
        players: [ "00", "01", "02", "03", "04", "05", "06", "07" ],
        bracket: {
          winners: {
            winner: null,
            children: [
              {
                winner: null,
                bout: [ "00", "03" ],
                children: [
                  {
                    winner: "00",
                    bout: [ "00", "01" ]
                  },
                  {
                    winner: "03",
                    bout: [ "02", "03" ]
                  }
                ]
              },
              {
                winner: null,
                bout: [ "04", "07" ],
                children: [
                  {
                    winner: "04",
                    bout: [ "04", "05" ]
                  },
                  {
                    winner: "07",
                    bout: [ "06", "07" ]
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
};


////////////////////////////////////////////////////////////////////////////////
//
//  The end of the module.
//
////////////////////////////////////////////////////////////////////////////////

module.exports = Public;
