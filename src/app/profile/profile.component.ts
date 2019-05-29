import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public balance: number = 0;

  constructor(private _modalService: NgbModal) {
  }

  ngOnInit() {
  }

  callAlert() {
    const modalRef = this._modalService.open(ModalComponent);
    modalRef.componentInstance.message = 'You have to win some cash first';
  }
}
