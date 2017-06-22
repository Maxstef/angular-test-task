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
    let allTeachers = this.getTeachers();
    _.sortBy(allTeachers, [(o) => { return parseInt(o.id); }]);
    if(allTeachers.length > 0){
      newTeacher.id = parseInt(allTeachers[allTeachers.length - 1].id) + 1;
    } else {
      newTeacher.id = 1;
    }
    allTeachers.push(newTeacher);
    localStorage.setItem("teachers", JSON.stringify(allTeachers));
    this.teachersCached = allTeachers;
    return allTeachers;
  }

  updateTeacher(id, teacher){
    let allTeachers = this.getTeachersWithioutId(id);
    teacher.id = id;
    allTeachers.push(teacher);
    localStorage.setItem("teachers", JSON.stringify(allTeachers));
    this.teachersCached = allTeachers;
    return allTeachers;
  }

  deleteTeacher(id){
    let allTeachers = this.getTeachersWithioutId(id);
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

  getTeachersWithioutId(id){
    let allTeachers;
    if(this.cacheEmpty()) {
      this.teachersCached = JSON.parse(localStorage.getItem('teachers'));
    }
    allTeachers =  this.teachersCached;
    _.remove(allTeachers, (teacher) => {
      return teacher.id == id;
    });
    return allTeachers;
  }

  cacheEmpty(){
    return !this.teachersCached;
  }

  storageEmpty(){
    return !this.teachersCached && !localStorage.getItem("teachers");
  }

}