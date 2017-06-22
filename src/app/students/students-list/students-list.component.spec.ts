import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {APP_BASE_HREF} from "@angular/common";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CalendarModule } from "primeng/primeng";
import { StudentAddEditComponent } from '../student-add-edit/student-add-edit.component';
import { RoutingModule } from "../../routing/routing.module";
import { FormsModule, ReactiveFormsModule }   from "@angular/forms";
import { HomePageComponent } from "app/shared/home-page/home-page.component";
import { TeachersModule } from "../../teachers/teachers.module";
import { SharedModule } from "../../shared/shared.module";
import { StudentsService } from "../students.service";
import { StudentsListComponent } from './students-list.component';
import { NgbdModalContent } from './students-list.component';

describe('StudentsListComponent', () => {
  let component: StudentsListComponent;
  let fixture: ComponentFixture<StudentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, RoutingModule, NgbModule.forRoot(), FormsModule, ReactiveFormsModule, TeachersModule, SharedModule, CalendarModule],
      declarations: [ StudentAddEditComponent, StudentsListComponent, NgbdModalContent ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}, StudentsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Students'`, async(() => {
    const fixture = TestBed.createComponent(StudentsListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Students');
  }));
});
