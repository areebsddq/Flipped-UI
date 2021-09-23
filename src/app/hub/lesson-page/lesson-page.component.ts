import { Component, Input, OnInit } from '@angular/core';
import { HubsService } from 'src/app/shared/hubs.service';
import { Lesson } from 'src/app/shared/lesson.model';

@Component({
  selector: 'hub-lesson-page',
  templateUrl: './lesson-page.component.html',
  styleUrls: ['./lesson-page.component.css']
})
export class LessonPageComponent implements OnInit {
  @Input() public lesson: Lesson;

  typingTimeout: ReturnType<typeof setTimeout>;
  saving: boolean = false;

  hubsService: HubsService;

  constructor(hubsService: HubsService) {
    this.hubsService = hubsService;
  }

  ngOnInit(): void {
  }

  public updateLesson(): void {
    this.saving = true;
    clearTimeout(this.typingTimeout);

    this.typingTimeout = setTimeout(() => {
      //this.hubsService.updateLesson(this.lesson).subscribe(() => this.saving = false);
      this.saving = false;
    }, 1000);
  }

}
