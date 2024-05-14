import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit{

  @Input()
  course: Course;

  @Input()
  index: number;
  
  @Input()
  noImageTemplate: TemplateRef<any>;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent)
  images: QueryList<CourseImageComponent>

  ngAfterViewInit(): void {
    console.log('AfterViewInit: ' + this.images)
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit: ' + this.images)
  }

  onCourseViewed() {
    console.log("card component - button clicked...");

    this.courseSelected.emit(this.course)
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner'
    }
  }

  cardStyles() {
    return {
      'text-decoration': 'underline'
    };
  }

}
