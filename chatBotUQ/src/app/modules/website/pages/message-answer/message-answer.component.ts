import { Component, Input, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-message-answer',
  templateUrl: './message-answer.component.html',
  styleUrls: ['../home/home.component.scss']
})
export class MessageAnswerComponent implements OnInit {


  @Input() answer: string = "";
  foto = "../../../../../assets/images/ia.png"
  size = 3;
  constructor() { }

  ngOnInit(): void {

    let timer = setTimeout(() => {
      this.size = this.answer.length;
    }, 2000);
  }

}
