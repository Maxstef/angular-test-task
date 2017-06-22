import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from "@angular/common";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CalendarModule } from "primeng/primeng";
import { RoutingModule } from "../../routing/routing.module";
import { FormsModule, ReactiveFormsModule }   from "@angular/forms";
import { HomePageComponent } from "app/shared/home-page/home-page.component";
import { StudentsModule } from "../../students/students.module";
import { SharedModule } from "../../shared/shared.module";
import { TeachersListComponent } from "../teachers-list/teachers-list.component";
import { TeachersService } from "../teachers.service";

import { TeacherAddEditComponent } from './teacher-add-edit.component';

describe('TeacherAddEditComponent', () => {
  let component: TeacherAddEditComponent;
  let fixture: ComponentFixture<TeacherAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, RoutingModule, FormsModule, ReactiveFormsModule, StudentsModule, SharedModule, CalendarModule],
      declarations: [ TeacherAddEditComponent, TeachersListComponent ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}, TeachersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
