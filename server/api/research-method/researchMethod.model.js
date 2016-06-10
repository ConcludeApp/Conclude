'use strict';

import mongoose from 'mongoose';

var ResearchMethodSchema = new mongoose.Schema({
  favorite: Boolean,
  title: String,
  description: String,
  cost: String,
  dataType: String,
  duration: String,
  effort: String,
  location: String,
  phase: [Number]
}, {timestamps: true});

export default mongoose.model('ResearchMethod', ResearchMethodSchema);