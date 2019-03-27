import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { ProjComponent } from './components/proj/proj.component';
import { TaskComponent } from './components/task/task.component';

import { TaskService } from './task.service';
import { ProjService } from './proj.service';

const routes: Routes = [
  { path: 'proj', component: ProjComponent},
  { path: 'task', component: TaskComponent},
  { path: '', redirectTo: 'proj', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProjComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule, 
    MatIconModule, 
    MatButtonModule, 
    MatCardModule, 
    MatTableModule, 
    MatDividerModule, 
    MatSnackBarModule,
    MatSliderModule,
    MatDatepickerModule 
  ],
  providers: [
    TaskService,
    ProjService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
