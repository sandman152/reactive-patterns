import { Subject, Observable } from 'rxjs';
import { Lesson } from 'app/shared/model/lesson';
import * as _ from 'lodash';

class DataStore {

    private lessons : Lesson[]  = [];

    private lessonsListSubject = new Subject<Lesson[]>();

    public lessonsList$: Observable<Lesson[]> = this.lessonsListSubject.asObservable();

    initializeLessonsList(newList: Lesson[]) {
        this.lessons = _.cloneDeep(newList);
        this.broadcast();
    }

    addLesson(newLesson: Lesson) {
        this.lessons.push(_.cloneDeep(newLesson));
        this.broadcast();
    }

    deleteLesson(deleted:Lesson) {
        _.remove(this.lessons,
            lesson => lesson.id === deleted.id );
        this.broadcast();
    }

    toggleLessonViewed(toggled:Lesson) {
        const lesson = _.find(this.lessons, lesson => lesson.id === toggled.id);

        lesson.completed = ! lesson.completed;
        this.broadcast();


    }

    broadcast() {
        this.lessonsListSubject.next(_.cloneDeep(this.lessons));
    }
}

export const store = new DataStore();







