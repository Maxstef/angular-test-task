import { Injectable } from '@angular/core';
import { Teacher } from "./teacher";
import * as _ from "lodash";

@Injectable()
export class TeachersService {

  teachersCached: Teacher[] = null;

  constructor() { }

  getTeachers(): Teacher[]{
    if(this.storageEmpty()){
      this.teachersCached = this.initTeachers();
    } else if(this.cacheEmpty()) {
      this.teachersCached = JSON.parse(localStorage.getItem('teachers'));
    }
    return this.teachersCached;
  }

  initTeachers(): Teacher[]{
    let teachers = [];
    localStorage.setItem("teachers", JSON.stringify(teachers));
    return teachers;
  }

  addTeacher(newTeacher: Teacher): Teacher[]{
    let allTeachers;
    if(this.storageEmpty()){
      this.teachersCached = this.initTeachers();
    } else if(this.cacheEmpty()) {
      this.teachersCached = JSON.parse(localStorage.getItem('teachers'));
      _.sortBy(this.teachersCached, [(o) => { return o.id; }]);
    }
    allTeachers = this.teachersCached;
    if(allTeachers.length > 0){
      newTeacher.id = allTeachers[allTeachers.length - 1].id + 1;
    } else {
      newTeacher.id = 1;
    }
    allTeachers.push(newTeacher);
    localStorage.setItem("teachers", JSON.stringify(allTeachers));
    this.teachersCached = allTeachers;
    return allTeachers;
  }

  updateTeacher(id, teacher){
    let allTeachers;
    if(this.cacheEmpty()) {
      this.teachersCached = JSON.parse(localStorage.getItem('teachers'));
    }
    allTeachers =  this.teachersCached;
    _.remove(allTeachers, (teacher) => {
      return teacher.id == id;
    });
    teacher.id = id;
    allTeachers.push(teacher);
    localStorage.setItem("teachers", JSON.stringify(allTeachers));
    this.teachersCached = allTeachers;
    return allTeachers;
  }

  getTeacher(id){
    if(this.cacheEmpty()){
      this.teachersCached = JSON.parse(localStorage.getItem('teachers'));
    }
    return _.find(this.teachersCached, (o) => { return o.id == id; });
  }

  deleteTeacher(id){
    let allTeachers;
    if(this.cacheEmpty()) {
      this.teachersCached = JSON.parse(localStorage.getItem('teachers'));
    }
    allTeachers =  this.teachersCached;
    _.remove(allTeachers, (teacher) => {
      return teacher.id == id;
    });
    localStorage.setItem("teachers", JSON.stringify(allTeachers));
    this.teachersCached = allTeachers;
    return allTeachers;
  }

  cacheEmpty(){
    return !this.teachersCached;
  }

  storageEmpty(){
    return !this.teachersCached && !localStorage.getItem("teachers");
  }

}
