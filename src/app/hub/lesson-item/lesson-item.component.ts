import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Lesson } from 'src/app/shared/lesson.model';

@Component({
  selector: 'lesson-item',
  templateUrl: './lesson-item.component.html',
  styleUrls: ['./lesson-item.component.css']
})
export class LessonItemComponent implements OnInit {
  @Input() public lesson: Lesson;
  @Input() public lessonClicked: EventEmitter<Lesson>;

  ngOnInit(): void {
  }

  public onClick(): void
  {
    this.lessonClicked.emit(this.lesson);
  }

}
