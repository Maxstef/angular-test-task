import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { StudentsService } from "../students.service";
import { Student } from "../student";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-student-add-edit',
  templateUrl: './student-add-edit.component.html',
  styleUrls: ['./student-add-edit.component.css']
})
export class StudentAddEditComponent implements OnInit {

  id: number = null;
  studentForm: FormGroup;
  title: string = '';

  constructor(
    private studentsService: StudentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'groupNumber': ['', Validators.required, this.isNumber],
      'dateOfBirth': [null, Validators.required],
      'hobbies': ['', Validators.required]
    });
    this.activatedRoute.params
      .subscribe(params => {
        this.id = params["id"];
        if (this.id) {
          this.title = "Edit student";
          this.getStudentAndInitForm();
        } else {
          this.title = "Add student";
        }
        console.log(this.id);
      });
  }

  isNumber(c: FormControl): Observable<{[key: string]: boolean}> {
    let result: any;
    let reg = new RegExp('^\\d+$');
    (reg.test(c.value)) ? result = null : result = { notNumber: true };
    return Observable.of(result);
  }

  getStudentAndInitForm() {
    let student = this.studentsService.getStudent(this.id);
    if (!student) {
      this.router.navigate(['students-list']);
      return;
    }
    const studentObj = {
      firstName: student.firstName,
      lastName: student.lastName,
      groupNumber: student.groupNumber,
      dateOfBirth: new Date(student.dateOfBirth),
      hobbies: student.hobbies   
    };

    (<FormGroup>this.studentForm).setValue(studentObj, { onlySelf: true });
  }

  saveStudent() {
    if (this.id) {
      this.studentsService.updateStudent(this.id, this.studentForm.value);
    } else {
      this.studentsService.addStudent(this.studentForm.value);
    }
    this.router.navigate(['students-list']);
  }

  disableSaveButton() {
    if (!this.studentForm.valid) {
      return true;
    }
    return false;
  }

}
