'use strict';

import {EventEmitter} from 'events';
import Persona from './persona.model';
var PersonaEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PersonaEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Persona.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PersonaEvents.emit(event + ':' + doc._id, doc);
    PersonaEvents.emit(event, doc);
  }
}

export default PersonaEvents;
