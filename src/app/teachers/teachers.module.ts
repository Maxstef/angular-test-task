import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RoutingModule } from "../routing/routing.module";
import {FormsModule, ReactiveFormsModule}   from "@angular/forms";
import {CalendarModule} from "primeng/primeng";
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { NgbdModalContent } from './teachers-list/teachers-list.component';
import { TeacherAddEditComponent } from './teacher-add-edit/teacher-add-edit.component';
import { TeachersService } from './teachers.service';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CalendarModule
  ],
  declarations: [TeachersListComponent, TeacherAddEditComponent, NgbdModalContent],
  providers: [TeachersService],
  entryComponents: [
      NgbdModalContent
  ]
})
export class TeachersModule { }
