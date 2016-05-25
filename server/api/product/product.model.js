'use strict';

import mongoose from 'mongoose';

var ProductSchema = new mongoose.Schema({
  title: String,
  company: String
});

export default mongoose.model('Product', ProductSchema);
