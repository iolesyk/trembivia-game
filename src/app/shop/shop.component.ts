import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ModalComponent} from '../modal/modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private router: Router,
              private _modalService: NgbModal) { }

  ngOnInit() {
  }

  redirectMainMenu() {
    this.router.navigate(['/main']);
  }
  redirectProfile() {
    this.router.navigate(['/profile']);
  }
  callAlert() {
    const modalRef = this._modalService.open(ModalComponent);
    modalRef.componentInstance.message = 'Add payment system first!';
  }

}
