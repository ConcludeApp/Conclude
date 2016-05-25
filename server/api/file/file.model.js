'use strict';

import mongoose from 'mongoose';

var FileSchema = new mongoose.Schema({
  title: String,
  fileType: String,
  link: String
})

export default mongoose.model('File', FileSchema);