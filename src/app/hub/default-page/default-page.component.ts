import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Lesson } from 'src/app/shared/lesson.model';

@Component({
  selector: 'hub-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent implements OnInit {
  @Input() public lessons: Lesson[];
  @Input() public lessonClicked: EventEmitter<Lesson>;

  ngOnInit(): void {
  
  }

  public onClick(lesson): void {
    this.lessonClicked.emit(lesson);
  }

}
