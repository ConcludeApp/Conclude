'use strict';

import {EventEmitter} from 'events';
import ResearchMethod from './researchMethod.model';
var ResearchMethodEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ResearchMethodEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  ResearchMethod.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ResearchMethodEvents.emit(event + ':' + doc._id, doc);
    ResearchMethodEvents.emit(event, doc);
  }
}

export default ResearchMethodEvents;
