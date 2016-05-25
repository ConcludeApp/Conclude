'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/conclude-dev'
  },

  port:   9000,

  // Seed database on startup
  seedDB: true

};
