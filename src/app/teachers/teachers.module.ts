import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeacherAddEditComponent } from './teacher-add-edit/teacher-add-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TeachersListComponent, TeacherAddEditComponent]
})
export class TeachersModule { }
