import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  rounds: any = [ 0, 1, 2, 3, 4, 5, 'host'];
  round: any;

  constructor() {
  }

  ngOnInit() {
    this.startRounds();
  }

  startRounds() {
    setTimeout(() => {
      this.round = this.rounds[0];
      console.log(this.round);
    }, 5000);
  }

}
