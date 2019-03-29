import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  mytasks = [
    {
      Task: "First Task",
      Desc: "First Task for Testing",
      Project: "First Project"
    },
    {
      Task: "Second Task",
      Desc: "Second Task for Testing",
      Project: "Second Project"
    }
  ];

  getTasks() {
    return this.mytasks;
  }

  getTasksByProject(pProjName: string): Task[] {
    let taskListByProj = this.mytasks.filter((task) => {return task.Project.indexOf(pProjName)===0});
    return taskListByProj;
  }
}
