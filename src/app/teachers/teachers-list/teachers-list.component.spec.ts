import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersListComponent } from './teachers-list.component';

import { RoutingModule } from "../../routing/routing.module";
import { TeachersModule } from "../teachers.module";
import { TeachersService } from "../teachers.service";

describe('TeachersListComponent', () => {
  let component: TeachersListComponent;
  let fixture: ComponentFixture<TeachersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RoutingModule, TeachersModule],
      declarations: [ TeachersListComponent ],
      providers: [TeachersService]
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
