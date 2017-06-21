import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {StudentsListComponent} from 'app/students/students-list/students-list.component';
import {StudentAddEditComponent} from 'app/students/student-add-edit/student-add-edit.component';
import {TeachersListComponent} from 'app/teachers/teachers-list/teachers-list.component';
import {TeacherAddEditComponent} from 'app/teachers/teacher-add-edit/teacher-add-edit.component';
import {PageNotFoundComponent} from "app/shared/page-not-found/page-not-found.component";
import {HomePageComponent} from "app/shared/home-page/home-page.component";


const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },

  {
    path: 'teachers-list',
    component: TeachersListComponent,
  },

  {
    path: 'teacher-add',
    component: TeacherAddEditComponent
  },
  
  {
    path: 'teacher-edit/:id',
    component: TeacherAddEditComponent
  },

  {
    path: 'students-list',
    component: StudentsListComponent,
  },
  
  {
    path: 'student-add',
    component: StudentAddEditComponent
  },
  
  {
    path: 'student-edit/:id',
    component: StudentAddEditComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
