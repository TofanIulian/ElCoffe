import { Component, OnInit } from '@angular/core';
import { Status } from '../_models/status.interface';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { StatusesService } from '../_services/status.service';
import { NotificationService } from '../_services/notification.service';

@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.component.html',
  styleUrls: ['./statuses.component.css']
})
export class StatusesComponent implements OnInit {

  selectedStatus: Status;
  statuses: Status[];

  newStatus: Status = new Status();

  displayedColumns: string[] = ['id', 'name'];

  constructor(private modalService: NgbModal,
    private statusService: StatusesService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.getAllStatuses();
  }

  getAllStatuses() {
    this.statusService.getAll().subscribe((statuses: Status[]) => {
      this.statuses = statuses;
      console.log(this.statuses)
    },
      error => {
        this.notificationService.handleError(error);
      });
  }
  
  getStatusById(id){
    this.statusService.getById(id).subscribe((status: Status) => {
      this.selectedStatus = status;
    },
      error => {
        this.notificationService.handleError(error);
      });
  }

  updateStatus(status) {
    console.log("up")
    this.statusService.update(status).subscribe((result) => {
      console.log(result);
      this.getAllStatuses();
    },
      error => {
        this.notificationService.handleError(error);
      });
  }

  createStatus() {
    this.statusService.create(this.newStatus).subscribe((status: Status) => {
      this.selectedStatus = status;
      this.getAllStatuses()
    },
      error => {
        this.notificationService.handleError(error);
      });
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }
}
