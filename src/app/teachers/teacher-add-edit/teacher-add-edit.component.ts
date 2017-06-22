import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TeachersService} from "../teachers.service";
import { Teacher } from "../teacher";

@Component({
  selector: 'app-teacher-add-edit',
  templateUrl: './teacher-add-edit.component.html',
  styleUrls: ['./teacher-add-edit.component.css']
})
export class TeacherAddEditComponent implements OnInit {

  id: number = null;
  teacherForm: FormGroup;
  title: string = '';

  constructor(
    private teachersService: TeachersService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.teacherForm = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'biography': ['', Validators.required],
      'dateOfBirth': [null, Validators.required],
      'discipline': ['', Validators.required]
    });
    this.activatedRoute.params
      .subscribe(params => {
        this.id = params["id"];
        if(this.id){
          this.title = "Edit teacher";
          this.getTeacherAndInitForm();
        } else {
          this.title = "Add teacher";
        }
      });
    
  }

  getTeacherAndInitForm() {
    let teacher = this.teachersService.getTeacher(this.id);
    if(!teacher){
      this.router.navigate(['teachers-list']);
      return;
    }
    const teacherObj = {
      firstName: teacher.firstName,
      lastName: teacher.lastName,
      biography: teacher.biography,
      discipline: teacher.discipline,
      dateOfBirth: new Date(teacher.dateOfBirth)
    };
    
    (<FormGroup>this.teacherForm).setValue(teacherObj, {onlySelf: true});
  }

  saveTeacher(){
    if(this.id){
      this.teachersService.updateTeacher(this.id, this.teacherForm.value);
    } else {
      this.teachersService.addTeacher(this.teacherForm.value);
    }
    this.router.navigate(['teachers-list']);
  }

  disableSaveButton() {
    if (!this.teacherForm.valid) {
      return true;
    }
    return false;
  }

}
