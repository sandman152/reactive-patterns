import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer } from 'app/event-bus-experiments/event-bus';
import { Lesson } from 'app/shared/model/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer {

  lessons: Lesson[] = [];

  constructor() {
    console.log('lessons list component is registered as an observer');
    globalEventBus.registerObserver(this);
  }


  notify(data: Lesson[]) {
    console.log('Lessons list component recieved data');
    this.lessons = data;
  }

}
