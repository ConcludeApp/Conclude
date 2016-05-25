'use strict';

import mongoose from 'mongoose';

var ProjectSchema = new mongoose.Schema({
  title: String,
  summary: String,
  overview: String,
  phase: String,
  goals: [{
    primary: Boolean,
    description: String
  }],
  questions: [{
    question: String, 
    description: String,
    primary: Boolean,
    timestamp: {
      updatedAt: {type: Date, default: Date.now()}
    }
  }],
  findings: [{
    title: String,
    description: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    updated: {type: Date, default: Date.now()}
  }],
  quotes: [{
    source: String,
    quote: String,
    author: {
      photo: String,
      title: String,
      name: String
    }
  }],
  personas: [{type: mongoose.Schema.Types.ObjectId, ref: 'Persona'}],
  files: [{type: mongoose.Schema.Types.ObjectId, ref: 'File'}],
  decisions: [{
    title: String,
    description: String,
    updated: {type: Date, default: Date.now()}
  }],
  implications: [{
    type: String,
    description: String
  }],
  taxonomy: {
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    subcategory: {type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory'},
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}]
  },
  researchMethod: {type: mongoose.Schema.Types.ObjectId, ref: 'ResearchMethod'},
  timestamp: {
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    startDate: {type: Date},
    endDate: {type: Date}
  }
});

export default mongoose.model('Project', ProjectSchema);