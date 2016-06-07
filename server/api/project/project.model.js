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
    author: String,
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
  featuredFiles: [{
    name: String,
    fileType: String,
    url: String
  }],
  resources: [{
    name: String,
    fileType: String,
    url: String
  }],
  links: [{
    title: String,
    url: String
  }],
  decisions: [{
    title: String,
    description: String,
    updated: {type: Date, default: Date.now()}
  }],
  implications: [{
    implicationType: String,
    description: String
  }],
  taxonomy: {
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    subcategory: {type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory'},
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}]
  },
  researcher: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  researchMethod: [{type: mongoose.Schema.Types.ObjectId, ref: 'ResearchMethod'}],
  users: [
    {_id: false, type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  ],
  comments: [{
    user: String,
    comment: String,
    createdAt: {type: Date, default: Date.now()}
  }],
  timestamp: {
    startDate: {type: Date},
    endDate: {type: Date}
  }
}, {
  timestamps: true
});

export default mongoose.model('Project', ProjectSchema);