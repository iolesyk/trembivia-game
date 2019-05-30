import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit, OnChanges {
  @Input() isChatActive: string;
  @Input() round: number;
  comment = new FormControl('');
  bots = ['Walorine',
    'Bug-Man',
    'Thorus',
    'Metal Man',
    'Hulk',
    'Captain la’America',
    'Jin Greye',
    'Deadriver',
    'Silver Swimmer',
    'Queen’s Gambit',
    'Cyclopsis',
    'Sir. Fantasticus',
    'Nightbrawler',
    'Nick Fursona',
    'Torch',
    'Icebaby',
    'Professor Y',
    'Doctor Weird',
    'Skarlet Bitanga',
    'Kitty Kat'
  ];
  beforeRound = ['Hype hype hype',
    'Just in time',
    'let’s go Boooiizzzzz',
    'This one is mine today im feeling it',
    'What’s up everyone',
    'Look who joined',
    'Human lol',
    'Up in arms guys',
    'I bet he sucks',
    'They all do',
    'Hey, too toxic',
    'So what?',
    'Stop it!',
    'Force me :)',
    'Lol',
    'Ahahah',
    'Host is hot',
  ];
  round1 = ['Easy question',
    'Eeezzzyyy',
    'Still in',
    'Next one',
    'Close one',
    ':) :) :) :) :) :) :P',
    'Gonna win this one boiiiizzz',
    'Let’s gooooo',
    'Omg',
    'I’m salty af',
    'Gosh i’m crying )))',
    'Gonna get rich today',
    'FYI humans suck',
    '……',
    'Metal Man sucks ^^',
    'Idk',
    'C’mon im tilted',
    'Pipe it up',
    'Any easter eggs??????',
    'I got 2 for you',
    'Wtf',
    'I won!!!',
    'No One loses here lol',
    'Ready steady go',
    'Next round let gooooo',
    'GJ ppl',
    'NUB',
    'Ahha',
    'Im bitter af',
    'Good luck everyone'
  ];
  round2 = ['Have no clue',
    'Hope everyone else lose',
    'Got it on point',
    'Missed this one',
    'Stupid location',
    'It’s not about location, it’s just you lol',
    'Ahahaha',
    'Looool',
    'Anyone lags?',
    'you'];
  round3 = ['McDonalds wi-fi sucks man))',
    'Loool',
    'Aahah',
    'ahahah^^',
    'Btw i’m vegan',
    'JK',
    'HULK SMASH',
    'It’s clobberin time!!!!',
    'Spoon!?',
    'Sweet chrismas',
    'Meingott',
    'Don’t worry it’s all be over soon];'];
  round4 = ['How can i get paid?',
    'With food looool',
    'I’m crying',
    'You gonna be my food))',
    'Humans taste better though',
    'Ahahah :):)',
    'Stop it! You scaring them off',
    'Don’t care much',
    'Lol',
    'I’m batman',
    'Ahaha',
    'No it’s me',
    'Feel like i’m winning this one',
    'Dont let HUMAN win',
    'Assassination proposal?',
    'Loool'];
  round5 = ['A box of money is mineeeee',
    'Good luck smarters',
    'LETS PUT ANOTHER SHRIMP ON A BARBIE',
    'Wtf',
    'Gonna be rich baby',
    'This game makes me salty))',
    'Stand by lol',
    'Who won?',
    'Me',
    'I won',
    'Nobody lool',
    'Everyones a winner',
    'Except you ahaha',
    'loool',
    'What about HUMAN?'];

  comments = [];

  constructor() {
  }

  ngOnChanges() {
    console.log(this.round);
    this.ngOnInit(); // TODO refactor this shit
  }

  ngOnInit() {
    console.log('round: ', this.round);
    switch (this.round) {
      case 0:
        this.startChatting(this.beforeRound);
        break;
      case 1:
        this.startChatting(this.round1);
        break;
      case 2:
        this.startChatting(this.round2);
        break;
      case 3:
        this.startChatting(this.round3);
        break;
      case 4:
        this.startChatting(this.round4);
        break;
      case 5:
        this.startChatting(this.round5);
        break;

      default:
        console.log('no rounds');
        break;
    }
    if (!this.round) {

    }
  }

  startChatting(roundPhrases) {
    const iteration = (i) => {
      setTimeout(() => {
        this.comments.push(
          {
            name: this.bots[i],
            text: roundPhrases[i],
            date: new Date().toLocaleString('en-GB', {timeZone: 'UTC'})
          });
      }, 1200 * i);
    };
    for (let i = 0; i < roundPhrases.length; i++) {
      iteration(i);
    }
  }

  addComment() {
    console.log(this.comment.value);
    this.comments.push(
      {
        name: 'HUMAN',
        text: this.comment.value,
        date: new Date().toLocaleString('en-GB', {timeZone: 'UTC'})
      });
  }

  // startChatting(roundPhrases) {
  //   for (let i = 0; i < roundPhrases.length; i++) {
  //     this.comments.push({name:  this.bots[i], text: roundPhrases[i], date: new Date()});
  //     console.log( this.bots[i], roundPhrases[i]);
  //   }
  // }

}
