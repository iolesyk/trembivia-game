import {Component, OnInit} from '@angular/core';
import {QUESTIONS} from '../users_questions';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  rounds: any = [0, 1, 2, 3, 4, 5, 6];
  round: any;
  questions: any = QUESTIONS;
  question: string;
  isHostTalking: boolean;

  constructor() {
  }

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    setTimeout(() => {
      this.round = this.rounds[0];
      console.log('start game before', this.round);
      setTimeout(() => this.startRounds(), 5000);
      console.log('start game after', this.round);
    }, 5000);
  }

  startRounds() {
    if (this.round < 5) {
      this.question = this.questions[this.round];
      this.round = ++this.round;
      setTimeout(() => this.startRounds(), 10000);
      } else if (this.round === 5) {
        this.round = ++this.round;
    }
    ;
  }

}
