import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {APP_BASE_HREF} from "@angular/common";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CalendarModule } from "primeng/primeng";
import { TeacherAddEditComponent } from '../teacher-add-edit/teacher-add-edit.component';
import { RoutingModule } from "../../routing/routing.module";
import { FormsModule, ReactiveFormsModule }   from "@angular/forms";
import { HomePageComponent } from "app/shared/home-page/home-page.component";
import { StudentsModule } from "../../students/students.module";
import { SharedModule } from "../../shared/shared.module";
import { TeachersService } from "../teachers.service";
import { TeachersListComponent } from './teachers-list.component';
import { NgbdModalContent } from './teachers-list.component';

describe('TeachersListComponent', () => {
  let component: TeachersListComponent;
  let fixture: ComponentFixture<TeachersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, RoutingModule, NgbModule.forRoot(), FormsModule, ReactiveFormsModule, StudentsModule, SharedModule, CalendarModule],
      declarations: [ TeacherAddEditComponent, TeachersListComponent, NgbdModalContent ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}, TeachersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.debugElement.injector.get(TeachersService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'teachers'`, async(() => {
    const fixture = TestBed.createComponent(TeachersListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Teachers');
  }));

});
