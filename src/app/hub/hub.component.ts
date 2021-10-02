import { Component, EventEmitter, OnInit } from '@angular/core';
import { Hub } from '../shared/hub.model';
import { HubsService } from '../shared/hubs.service';
import { Lesson } from '../shared/lesson.model';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit {
  public lessons: Lesson[];
  public isLessonOpen: boolean = false;

  public currentLesson: Lesson;
  public hub: Hub;
  
  private lessonClicked: EventEmitter<Lesson> = new EventEmitter<Lesson>();
  private hubService: HubsService;

  constructor(hubService: HubsService) { 
    this.hubService = hubService;
  }

  ngOnInit(): void {
    this.hubService.getHub(1).subscribe(h => this.hub = h);

    this.hubService.getLessons(1).subscribe(lst => {
      this.lessons = lst;
      console.log(this.lessons);
    });

    this.lessonClicked.subscribe(lesson => {
      this.currentLesson = lesson;
      this.isLessonOpen = true;
    });
  }

  addLesson(): void {
    var lesson = new Lesson({
      title: "New Lesson!", 
      description: "Write a description of your lesson here.",
      hubId: 1
    });

    this.hubService.createLesson(lesson).subscribe(nlesson => {
      this.lessons.push(nlesson);
    })
  }

}
