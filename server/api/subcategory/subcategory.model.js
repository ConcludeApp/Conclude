'use strict';

import mongoose from 'mongoose';

var SubcategorySchema = new mongoose.Schema({
  pretty: String,
  namespace: String
});

export default mongoose.model('Subcategory', SubcategorySchema);