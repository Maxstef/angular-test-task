import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TeachersService} from "../teachers.service";
import { Teacher } from "../teacher";
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
      <p>Are you sure you want to delete teacher -  {{teacher.firstName + ' ' + teacher.lastName}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="delete();activeModal.close()">Yes</button>
      <button type="button" class="btn btn-primary" (click)="activeModal.close()">No</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() teacher: Teacher;

  constructor(private teachersService: TeachersService, public activeModal: NgbActiveModal) {}

  delete(){
    this.teachersService.deleteTeacher(this.teacher.id);
  }
}

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {

  teachers: Teacher[];
  defaultAvatar = "./assets/default-avatar.png";
  title: string = "Teachers";

  constructor(private modalService: NgbModal, private teachersService: TeachersService) { }

  ngOnInit() {
    this.teachers = this.teachersService.getTeachers();
  }

  openDeleteModal(teacher) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.teacher = teacher;
  }

  checkDefaultAvatar(avatarUrl: string) {
    if (avatarUrl) {
      return "";
    }
    return this.defaultAvatar;
  }

  displayDate(date){
    return moment(date).format("MMMM DD YYYY");
  }

}
