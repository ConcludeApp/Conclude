'use strict';

import mongoose from 'mongoose';

var PersonaSchema = new mongoose.Schema({
  name: String,
  role: String,
  title: String,
  quote: String,
  description: String,
  photo: String,
  primary: Boolean,
  goals: [{
    title: String,
    description: String
  }],
  challenges: [{
    title: String,
    description: String
  }],
  what_matters: String,
  link: String 
})

export default mongoose.model('Persona', PersonaSchema);