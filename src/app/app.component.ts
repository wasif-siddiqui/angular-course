import { AfterViewInit, Component, ElementRef, Input, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course'
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = COURSES;

  startDate = new Date(2000, 0, 1);
  currency = 19.99;
  percentage = .83;
  num = 211.288127;

  // @ViewChild('cardRef1', {read: ElementRef})
  // card1: ElementRef;

  // @ViewChild('cardRef2')
  // card2: CourseCardComponent;

  @ViewChildren (CourseCardComponent)
  cards: QueryList<CourseCardComponent>

  ngAfterViewInit() {
    this.cards.changes.subscribe(
      cards => console.log(cards)
    )
  }

  onCourseSelected(course: Course) {
    console.log('App component - course card was clicked...', course);
  }

  onCourseEdited() {
    this.courses.push({
      id: 2,
      description: "RxJs In Practice Course",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
      longDescription: "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
      category: 'BEGINNER',
      lessonsCount: 10
    })
  }

  // trackCourse(index:number, course:Course) {
  //   return course.id;
  // }

}
