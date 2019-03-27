import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks() {
    const mytasks = [
      {
        "Task": "First Task",
        "Desc": "First Task for Testing"
      },
      {
        "Task": "Second Task",
        "Desc": "Second Task for Testing"
      }
    ];
    return mytasks;
  }
}
