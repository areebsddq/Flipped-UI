import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hub } from './hub.model';
import { Lesson } from './lesson.model';

@Injectable({
  providedIn: 'root'
})
export class HubsService {

  constructor(private httpClient: HttpClient) {

  }

  public getHubs ()
  {
    var hubs = [];

    for(var i = 0; i < 10; i++)
    {
      var h = new Hub ({id: 1, name: 'TestHub ' + i, creatorId: 0});

      hubs.push(h);
    }

    return hubs;
  }

  public getHub (hubId: number)
  {
    return new Hub ({id: 1, name: 'TestHub', creatorId: 0});
  }

  public createHub(hub: Hub) 
  {
    return this.httpClient.post("http://localhost:5000/api/hub/", hub)
  }

  public updateHub (hub: Hub)
  {
    return this.httpClient.put("http://localhost:5000/api/hub/", hub)
  }

  public getLessons (hubId: number)
  {
      return this.httpClient.get<Lesson[]>("http://localhost:5000/api/hub/1/lessons")
  }

  public getLesson (hubId: number, lessonId: number)
  {
      return this.httpClient.get<Lesson>("http://localhost:5000/api/hub/lesson/" + lessonId)
  }

  public createLesson(lesson: Lesson)
  {
    console.log(lesson);
    return this.httpClient.post<Lesson>("http://localhost:5000/api/hub/lesson/", lesson);
  }

  public updateLesson(lesson: Lesson)
  {
    return this.httpClient.put("http://localhost:5000/api/hub/lesson/" + lesson.id, lesson)
  }
}
