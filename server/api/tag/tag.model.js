'use strict';

import mongoose from 'mongoose';

var TagSchema = new mongoose.Schema({
  pretty: String,
  namespace: String
});

export default mongoose.model('Tag', TagSchema);