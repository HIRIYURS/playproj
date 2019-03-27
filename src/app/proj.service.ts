import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjService {

  constructor(private http: HttpClient) { }

  getProjects() {
    const myprojs = [
      {
        "Project": "First Project",
        "Desc": "First Project for Testing"
      },
      {
        "Project": "Second Project",
        "Desc": "Second Project for Testing"
      }
    ];
    return myprojs;
  }

}
