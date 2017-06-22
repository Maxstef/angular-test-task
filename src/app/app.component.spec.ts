import { TestBed, async } from '@angular/core/testing';
import {APP_BASE_HREF} from "@angular/common";

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {RoutingModule} from "./routing/routing.module";
import {TeachersModule} from "./teachers/teachers.module";
import {StudentsModule} from "./students/students.module";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RoutingModule, SharedModule, TeachersModule, StudentsModule],
      declarations: [
        AppComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
