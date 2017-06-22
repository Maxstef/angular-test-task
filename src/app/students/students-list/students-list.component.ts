import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {StudentsService} from "../students.service";
import { Student } from "../student";
import * as moment from "moment/moment";
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Confirm Delete</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Are you sure you want to delete student -  {{student.firstName + ' ' + student.lastName}} from group {{student.groupNumber}}?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="delete();activeModal.close()">Yes</button>
      <button type="button" class="btn btn-primary" (click)="activeModal.close()">No</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() student: Student;

  constructor(private studentsService: StudentsService, public activeModal: NgbActiveModal) {}

  delete(){
    this.studentsService.deleteStudent(this.student.id);
  }
}

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: Student[];
  title: string = "Students";

  constructor(private modalService: NgbModal, private studentsService: StudentsService) { }

  ngOnInit() {
    this.students = this.studentsService.getStudents();
  }

  openDeleteModal(student) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.student = student;
  }

  displayDate(date){
    return moment(date).format("MMMM DD YYYY");
  }

}
