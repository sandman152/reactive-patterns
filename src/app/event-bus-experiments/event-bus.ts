
import * as _ from 'lodash';

export const LESSONS_LIST_AVAILABLE = 'NEW_LIST_AVAILABLE';

export const ADD_NEW_LESSON = 'ADD_NEW_LESSON';


export interface Observer {
    next(data:any);
}

export interface Observable {
    subscribe(obs:Observer);
    unsubscribe(obs:Observer);
}

interface Subject extends Observer, Observable {

}

class EventBus implements Subject {

    private observers : {[key:string]: Observer[]} = {};

    subscribe(eventType:string, obs: Observer) {
        this.observersPerEventType(eventType).push(obs);
    }

    unsubscribe(eventType:string, obs: Observer) {
        _.remove(this.observersPerEventType(eventType), el => el === obs );
    }

    next(eventType:string, data: any) {
        this.observersPerEventType(eventType)
            .forEach(obs => obs.next(data));
    }

    private observersPerEventType(eventType:string): Observer[] {
        const observersPerType = this.observers[eventType];
        if (!observersPerType) {
            this.observers[eventType] = [];
        }
        return this.observers[eventType];
    }

}


export const globalEventBus = new EventBus();











