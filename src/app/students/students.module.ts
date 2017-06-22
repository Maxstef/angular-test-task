import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoutingModule } from "../routing/routing.module";
import { FormsModule, ReactiveFormsModule }   from "@angular/forms";
import { CalendarModule } from "primeng/primeng";
import { NgbdModalContent } from './students-list/students-list.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentAddEditComponent } from './student-add-edit/student-add-edit.component';
import { StudentsService} from "./students.service";

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CalendarModule
  ],
  declarations: [StudentsListComponent, StudentAddEditComponent, NgbdModalContent],
  providers: [StudentsService],
  entryComponents: [
      NgbdModalContent
  ]
})
export class StudentsModule { }
