'use strict';

import mongoose from 'mongoose';

var ResearchMethodSchema = new mongoose.Schema({
  title: String,
  description: String,
  effort: String,
  cost: String,
  dataType: String,
  duration: String,
  location: String
})

export default mongoose.model('ResearchMethod', ResearchMethodSchema);