import { Injectable } from '@angular/core';
import { Student } from "./student";
import * as _ from "lodash";

@Injectable()
export class StudentsService {

  studentsCached: Student[] = null;

  constructor() { }

  getStudents(): Student[]{
    if(this.storageEmpty()){
      this.studentsCached = this.initStudents();
    } else if(this.cacheEmpty()) {
      this.studentsCached = JSON.parse(localStorage.getItem('students'));
    }
    return this.studentsCached;
  }

  initStudents(): Student[]{
    let students = [];
    localStorage.setItem("students", JSON.stringify(students));
    return students;
  }

  addStudent(newStudent: Student): Student[]{
    let allStudents = this.getStudents();
    _.sortBy(allStudents, [(o) => { return o.id; }]);
    if(allStudents.length > 0){
      newStudent.id = allStudents[allStudents.length - 1].id + 1;
    } else {
      newStudent.id = 1;
    }
    allStudents.push(newStudent);
    localStorage.setItem("students", JSON.stringify(allStudents));
    this.studentsCached = allStudents;
    return allStudents;
  }

  updateStudent(id, teacher){
    let allStudents = this.getStudentsWithioutId(id);
    teacher.id = id;
    allStudents.push(teacher);
    localStorage.setItem("students", JSON.stringify(allStudents));
    this.studentsCached = allStudents;
    return allStudents;
  }

  deleteStudent(id){
    let allStudents = this.getStudentsWithioutId(id);
    localStorage.setItem("students", JSON.stringify(allStudents));
    this.studentsCached = allStudents;
    return allStudents;
  }

  getStudent(id){
    if(this.cacheEmpty()){
      this.studentsCached = JSON.parse(localStorage.getItem('students'));
    }
    return _.find(this.studentsCached, (o) => { return o.id == id; });
  }

  getStudentsWithioutId(id){
    let allStudents;
    if(this.cacheEmpty()) {
      this.studentsCached = JSON.parse(localStorage.getItem('students'));
    }
    allStudents =  this.studentsCached;
    _.remove(allStudents, (teacher) => {
      return teacher.id == id;
    });
    return allStudents;
  }

  cacheEmpty(){
    return !this.studentsCached;
  }

  storageEmpty(){
    return !this.studentsCached && !localStorage.getItem("students");
  }

}
