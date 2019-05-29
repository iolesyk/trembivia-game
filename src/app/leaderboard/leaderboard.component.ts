import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

interface Leader {
  name: string;
  prize: number;
  icon: string;
}

const LEADERS: Leader[] = [
  {
    name: 'Hulk',
    prize: 1000,
    icon: '../../assets/img/spider-man.jpg'
  },
  {
    name: 'Iron Man',
    prize: 900,
    icon: '../../assets/img/spider-man.jpg'
  },
  {
    name: 'Spider-Man',
    prize: 900,
    icon: '../../assets/img/spider-man.jpg'
  },
  {
    name: 'Thor',
    prize: 800,
    icon: '../../assets/img/spider-man.jpg'
  },
  {
    name: 'Captain America',
    prize: 700,
    icon: '../../assets/img/spider-man.jpg'
  },
  {
    name: 'Daredevil',
    prize: 700,
    icon: '../../assets/img/spider-man.jpg'
  },
  {
    name: 'Deadpool',
    prize: 500,
    icon: '../../assets/img/spider-man.jpg'
  },
  {
    name: 'Iceman',
    prize: 300,
    icon: '../../assets/img/spider-man.jpg'
  },
  {
    name: 'Storm',
    prize: 100,
    icon: '../../assets/img/spider-man.jpg'
  },
  {
    name: 'HUMAN',
    prize: 0,
    icon: '../../assets/img/avatar.png'
  },

];

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  public balance:number = 0;
  leaders = LEADERS;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  redirectMainMenu() {
    this.router.navigate(['/main']);
  }

}
