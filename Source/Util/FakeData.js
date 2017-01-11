
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
    },
    Republic: {
      name: "The Republic",
      points: 32
    },
    Empire: {
      name: "The Empire",
      points: 12
    },
    Gondor: {
      name: "The Gondor",
      points: 54
    },
    Shire: {
      name: "The Shire",
      points: 2
    }
  },
  players: {
    "00": { team: "Florin",   name: "Fezzik" },
    "01": { team: "Guilder",  name: "Princes Buttercup" },
    "02": { team: "Florin",   name: "Dread Pirate Roberts" },
    "03": { team: "Guilder",  name: "Inigo Montoya" },
    "04": { team: "Florin",   name: "Vizzini" },
    "05": { team: "Guilder",  name: "Miracle Max" },
    "06": { team: "Florin",   name: "Prince Humperdinck" },
    "07": { team: "Guilder",  name: "Count Rugen" },
    "08": { team: "Florin",   name: "Impressive Clergyman" },
    "09": { team: "Guilder",  name: "Ancient Booer" },
    "10": { team: "Republic", name: "Han Solo" },
    "11": { team: "Republic", name: "Luke Skywalker" },
    "12": { team: "Republic", name: "Princes Leia" },
    "13": { team: "Empire",   name: "Darth Vader" },
    "14": { team: "Gondor",   name: "Gandalf" },
    "15": { team: "Shire",    name: "Frodo Baggins" },
    "16": { team: "Shire",    name: "Bilbo Baggins" },
    "17": { team: "Gondor",   name: "Legolas" },
    "18": { team: "Gondor",   name: "Aragorn" },
    "19": { team: "Gondor",   name: "Boromir" },
    "20": { team: "Gondor",   name: "Gimli" },
    "21": { team: "Guilder",  name: "Saruman" },
    "22": { team: "Shire",    name: "Samwise Gamgee" }
  },
  divisions: {
    Open: {
      "150": {
        bracket: {
          winners: {
            player: null,
            children: [
              {
                player: null,
                children: [
                  {
                    player: "00",
                    children: [
                      {
                        player: "00",
                        children: [
                          {
                            player: "00"
                          },
                          {
                            player: "08"
                          }
                        ]
                      },
                      {
                        player: "01",
                        children: [
                          {
                            player: "01"
                          },
                          {
                            player: "09"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    player: "03",
                    children: [
                      {
                        player: "02",
                        children: [
                          {
                            player: "02"
                          },
                          {
                            player: "15"
                          }
                        ]
                      },
                      {
                        player: "03",
                        children: [
                          {
                            player: "03"
                          },
                          {
                            player: "10"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                player: null,
                children: [
                  {
                    player: "04",
                    children: [
                      {
                        player: "04",
                        children: [
                          {
                            player: "04"
                          },
                          {
                            player: "11"
                          }
                        ]
                      },
                      {
                        player: "05",
                        children: [
                          {
                            player: "05",
                            children: [
                              {
                                player: "05"
                              },
                              {
                                player: "16"
                              }
                            ]
                          },
                          {
                            player: "12"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    player: "07",
                    children: [
                      {
                        player: "06",
                        children: [
                          {
                            player: "06"
                          },
                          {
                            player: "13"
                          }
                        ]
                      },
                      {
                        player: "07",
                        children: [
                          {
                            player: "07"
                          },
                          {
                            player: "14"
                          }
                        ]
                      }
                    ]
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
