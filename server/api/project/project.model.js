'use strict';

import mongoose from 'mongoose';
import elastic from 'elasticsearch';
import ms from 'mongoosastic';

var ProjectSchema = new mongoose.Schema({
  title: String,
  slug: String,
  summary: String,
  overview: String,
  phase: String,
  status: {type: Boolean, default: false},
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
    category: String,
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
  users: [{
    user: {_id: false, type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    notifications: {type: Boolean, default: 1}
  }],
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

var search = new elastic.Client({
  host: 'https://594d6019:ddsqudvvq1oqrz10@maple-6482730.us-east-1.bonsai.io'
});

var slugify = function(str) {
  return str.toString().toLowerCase()
}
ProjectSchema.pre('save', function(next) {
  if (this.title) {
    this.slug = slugify(this.title);
  }
  next();
});


search.ping({
  requestTimeout: 30000,
  hello: "elasticsearch"
}, function (error) {
  if (error) {
    console.error('Search cluster is down.');
  } else {
    console.log('Search cluster running.');
  }
});

ProjectSchema.plugin(ms, {
  esClient: search
});

export default mongoose.model('Project', ProjectSchema);