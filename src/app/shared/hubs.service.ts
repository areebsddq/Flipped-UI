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
      return this.httpClient.get<Hub[]>("http://localhost:5000/api/hub/");
  }

  public getHub (hubId: number)
  {
      return this.httpClient.get<Hub>("http://localhost:5000/api/hub/1")
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
    return this.httpClient.post<Lesson>("http://localhost:5000/api/hub/lesson/", lesson, {
      headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
  }

  public updateLesson(lesson: Lesson)
  {
    return this.httpClient.put("http://localhost:5000/api/hub/lesson/" + lesson.id, lesson)
  }
}
