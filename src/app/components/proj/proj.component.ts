import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { Proj } from '../../proj.model';
import { Task } from '../../task.model';
import { ProjService } from '../../proj.service';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-proj',
  templateUrl: './proj.component.html',
  styleUrls: ['./proj.component.css']
})
export class ProjComponent implements OnInit {
  projectForm: FormGroup = this.fb.group({
    ProjectName: '',
  });
  myControl = new FormControl();
  filteredOptions: Observable<Proj[]>;

  projs: Proj[];
  selectedProj: string;
  taskList: Task[];
  displayedColumns = ['Task', 'Desc', 'actions'];
  dataSource: any;

  constructor(private projService: ProjService, private taskService: TaskService, 
              private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.fetchProjects();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): Proj[] {
    const filterValue = value.toLowerCase();
    let projStr: string[] = [""];
    let tmpProjs: Proj[];

    if (value) {
      tmpProjs = this.projs.filter((lproj) => lproj.Project.toLowerCase().includes(filterValue));
     
      projStr.pop();
      tmpProjs.forEach(element => {
        projStr.push(element.Project);
      });
      console.log("tmpProjs: ", tmpProjs);
      console.log("projStr: ", projStr);
    } else {
      tmpProjs = this.projs;
    }

    return tmpProjs;
  }  
  
  fetchProjects() {
    this.projs = this.projService.getProjects();
    console.log(this.projs);
  }

  getProjTasks(projectname) {
    this.selectedProj = projectname;
    console.log("Project Name: ", projectname);
    this.taskList = this.taskService.getTasksByProject(projectname);
    console.log("TaskList: ", this.taskList);
    this.dataSource = new MatTableDataSource(this.taskList);
  }

  editTask(taskid) {
    console.log("Edit Task: ", taskid);
  }

  finishTask(taskid) {
    console.log("End Task: ", taskid);
  }  
}
