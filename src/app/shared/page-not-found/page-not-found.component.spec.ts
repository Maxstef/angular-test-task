import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from "@angular/common";

import { PageNotFoundComponent } from './page-not-found.component';
import {RoutingModule} from "../../routing/routing.module";
import {HomePageComponent} from "../../shared/home-page/home-page.component";
import {TeachersModule} from "../../teachers/teachers.module";
import {StudentsModule} from "../../students/students.module";

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RoutingModule, TeachersModule, StudentsModule],
      declarations: [ PageNotFoundComponent, HomePageComponent ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
