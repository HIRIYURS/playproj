import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Proj } from '../../proj.model';
import { ProjService } from '../../proj.service';

@Component({
  selector: 'app-proj',
  templateUrl: './proj.component.html',
  styleUrls: ['./proj.component.css']
})
export class ProjComponent implements OnInit {
  projs: Proj[];
  displayedColumns = ['Project', 'Desc'];
  dataSource: any;

  filterValues = {
    Project: ''
  };

  constructor(private projService: ProjService, private router: Router) { }

  ngOnInit() {
    this.fetchProjects();
  }

  
  fetchProjects() {
    this.projs = this.projService.getProjects();
    console.log(this.projs);
    this.dataSource = new MatTableDataSource(this.projs);
    this.dataSource.filterPredicate = this.taskFilterPredicate;
        // .subscribe((data: Proj[]) => {
        //   console.log(this.projs);
        //   this.dataSource = new MatTableDataSource(this.projs);
        //   this.dataSource.filterPredicate = this.taskFilterPredicate;
        // });
  }

  taskFilterPredicate(data: Proj, filter: string) {
    var searchTerms = JSON.parse(filter);

    return (data.Project.toLowerCase().indexOf(searchTerms.Project) !== -1);
  }

  
  applyProjectFilter(filterValue: string) {
    //this.dataSource.filter = filterValue.trim().toLowerCase();
    this.filterValues.Project = filterValue;
    this.dataSource.filter = JSON.stringify(this.filterValues).toLowerCase();    
  }
}
