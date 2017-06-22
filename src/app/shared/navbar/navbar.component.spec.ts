import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from "@angular/common";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar.component';
import { AppComponent } from '../../app.component';
import {HomePageComponent} from "../../shared/home-page/home-page.component";
import { PageNotFoundComponent } from '../../shared/page-not-found/page-not-found.component';
import {RoutingModule} from "../../routing/routing.module";
import {TeachersModule} from "../../teachers/teachers.module";
import {StudentsModule} from "../../students/students.module";

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RoutingModule, NgbModule, TeachersModule, StudentsModule],
      declarations: [ NavbarComponent, HomePageComponent, PageNotFoundComponent ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
