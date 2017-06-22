import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from "@angular/common";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CalendarModule } from "primeng/primeng";
import { StudentAddEditComponent } from './student-add-edit.component';
import { RoutingModule } from "../../routing/routing.module";
import { FormsModule, ReactiveFormsModule }   from "@angular/forms";
import { HomePageComponent } from "app/shared/home-page/home-page.component";
import { TeachersModule } from "../../teachers/teachers.module";
import { SharedModule } from "../../shared/shared.module";
import { StudentsListComponent } from "../students-list/students-list.component";
import { StudentsService } from "../students.service";

describe('StudentAddEditComponent', () => {
  let component: StudentAddEditComponent;
  let fixture: ComponentFixture<StudentAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, RoutingModule, FormsModule, ReactiveFormsModule, TeachersModule, SharedModule, CalendarModule],
      declarations: [ StudentAddEditComponent, StudentsListComponent ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}, StudentsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
