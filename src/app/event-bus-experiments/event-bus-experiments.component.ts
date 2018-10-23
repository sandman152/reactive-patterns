import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAIALABLE } from './event-bus';
import { testLessons } from 'app/shared/model/test-lessons';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Top Level component broadcasted all lessons...');
    globalEventBus.notifyObservers(LESSONS_LIST_AVAIALABLE, testLessons.slice(0));
  }

}
