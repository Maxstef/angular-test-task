import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from "../routing/routing.module";
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentAddEditComponent } from './student-add-edit/student-add-edit.component';
import { StudentsService} from "./students.service";

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [StudentsListComponent, StudentAddEditComponent],
  providers: [StudentsService]
})
export class StudentsModule { }
