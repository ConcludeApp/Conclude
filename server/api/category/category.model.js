'use strict';

import mongoose from 'mongoose';

var CategorySchema = new mongoose.Schema({
  pretty: String,
  namespace: String
});

export default mongoose.model('Category', CategorySchema);